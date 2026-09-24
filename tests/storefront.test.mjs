import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM, VirtualConsole } from 'jsdom';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const bundle=readFileSync(new URL('../'+html.match(/src="\.\/(assets\/app-[A-Z0-9]+\.js)"/)[1],import.meta.url),'utf8');
const pause=()=>new Promise(r=>setTimeout(r,35));
async function boot(hash='',saved={}) {
  const errors=[];
  const vc=new VirtualConsole();vc.on('jsdomError',e=>errors.push(e.message));vc.on('error',e=>errors.push(String(e)));
  const dom=new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>',{url:'https://preview.example/'+hash,runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:vc});
  const {window:w}=dom;
  w.scrollTo=()=>{};
  // DOM tests exercise logic; these stubs do not emulate visual layout or native focus trapping.
  w.HTMLDialogElement.prototype.showModal=function(){this.setAttribute('open','')};
  w.HTMLDialogElement.prototype.close=function(){this.removeAttribute('open')};
  for(const [k,v] of Object.entries(saved))w.localStorage.setItem(k,v);
  w.eval(bundle);await pause();await pause();
  return {dom,w,d:w.document,errors};
}
const click=async node=>{assert(node,'Expected an interactive element');node.click();await pause()};
const label=(d,txt)=>[...d.querySelectorAll('[aria-label]')].find(x=>x.getAttribute('aria-label')===txt);

test('homepage, category routes, product details, bag and saved state render without runtime errors',async()=>{
  const {dom,w,d,errors}=await boot();
  assert.match(d.querySelector('h1').textContent,/Your setup/);
  assert.equal(d.querySelectorAll('.category-tile').length,5);
  assert.equal(d.querySelectorAll('.product-card').length,8);
  await click(d.querySelector('.category-tile[href*="category=ram"]'));
  assert.match(d.querySelector('h1').textContent,/Room to do more/);
  assert.equal(d.querySelectorAll('.product-card').length,10);
  await click(d.querySelector('a[href="#/product/lexar-ddr4-8"]'));
  assert.match(d.querySelector('h1').textContent,/Lexar 8GB DDR4/);
  assert.match(d.querySelector('.detail-price').textContent,/16,500/);
  await click(label(d,'Increase quantity'));
  await click(d.querySelector('.purchase-actions .primary'));
  assert.equal(JSON.parse(w.localStorage.getItem('epic:v4:bag'))[0].quantity,2);
  await click(d.querySelector('.detail-tools button'));
  assert(JSON.parse(w.localStorage.getItem('epic:v4:saved')).includes('lexar-ddr4-8'));
  await click(d.querySelector('.bag-button'));
  assert(d.querySelector('dialog[open]'));
  assert.match(d.querySelector('.bag-summary').textContent,/33,000/);
  assert.match(d.querySelector('.bag-summary').textContent,/No payment/);
  await click(label(d,'Remove Lexar 8GB DDR4 Desktop Memory from bag'));
  assert.equal(JSON.parse(w.localStorage.getItem('epic:v4:bag')).length,0);
  assert.deepEqual(errors,[]);dom.window.close();
});
test('comparison stops at four and source-price decimals survive reload',async()=>{
  const {dom,w,d,errors}=await boot('#/shop');
  const buttons=[...d.querySelectorAll('.card-eyebrow button')];
  for(const button of buttons.slice(0,5))await click(button);
  assert.equal(JSON.parse(w.localStorage.getItem('epic:v4:compare')).length,4);
  await click(d.querySelector('.compare-dock>button'));
  assert.equal(d.querySelectorAll('.compare-scroll thead th').length,5);
  const persisted={'epic:v4:bag':JSON.stringify([{id:'keys-to-go',quantity:3}])};
  assert.deepEqual(errors,[]);dom.window.close();
  const reloaded=await boot('#/product/keys-to-go',persisted);
  assert.match(reloaded.d.querySelector('.detail-price').textContent,/15,398.90/);
  await click(reloaded.d.querySelector('.bag-button'));
  assert.match(reloaded.d.querySelector('.bag-summary').textContent,/46,196.70/);
  assert.deepEqual(reloaded.errors,[]);reloaded.dom.window.close();
});
test('shareable filter URLs and unknown routes work on a static deployment',async()=>{
  const view=await boot('#/shop?category=mouse&brand=Logitech&max=5500&sort=price-asc');
  assert(view.d.querySelectorAll('.product-card').length>=3);
  assert.equal(view.d.querySelector('[aria-label="Filter by brand"]').value,'Logitech');
  const prices=[...view.d.querySelectorAll('.card-bottom strong')].map(n=>Number(n.textContent.replace(/[^\d.]/g,'').replace(/^\./,'')));
  assert.deepEqual(prices,[...prices].sort((a,b)=>a-b));
  view.w.location.hash='#/nothing-here';await pause();
  assert.match(view.d.querySelector('h1').textContent,/isn't here/);
  assert.deepEqual(view.errors,[]);view.dom.window.close();
});

test('search suggestions and the finder connect to real catalogue results',async()=>{
  const {dom,w,d,errors}=await boot();
  const input=label(d,'Search products');
  Object.getOwnPropertyDescriptor(w.HTMLInputElement.prototype,'value').set.call(input,'wireless mouse under 10k');
  input.dispatchEvent(new w.Event('input',{bubbles:true}));await pause();
  assert(d.querySelectorAll('[role="option"]').length>=2);
  input.dispatchEvent(new w.KeyboardEvent('keydown',{key:'ArrowDown',bubbles:true}));await pause();
  assert(d.querySelector('[role="option"][aria-selected="true"]'));
  d.querySelector('.search-box').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await pause();
  assert(d.querySelector('.product-detail'));
  w.location.hash='#/';await pause();
  await click(d.querySelector('.finder-nav'));
  const keyboard=[...d.querySelectorAll('.finder-options button')].find(n=>n.textContent==='Keyboard');
  await click(keyboard);
  const select=d.querySelector('.finder-budget select');select.value='3000';select.dispatchEvent(new w.Event('change',{bubbles:true}));await pause();
  assert.match(d.querySelector('.finder-result-count').textContent,/2 products/);
  await click(d.querySelector('.finder-content>.primary'));
  assert.equal(d.querySelectorAll('.catalogue-main .product-card').length,2);
  assert.deepEqual(errors,[]);dom.window.close();
});
test('unknown product names including inherited object properties show a safe missing-page state',async()=>{
  for(const name of ['toString','__proto__','missing-id']) {
    const view=await boot('#/product/'+name);
    assert.match(view.d.querySelector('h1').textContent,/isn't here/);
    assert.deepEqual(view.errors,[]);view.dom.window.close();
  }
});
