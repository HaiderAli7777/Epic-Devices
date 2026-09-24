import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Copy, Download, HardDrive, Headphones, Heart,
  Keyboard, Layers, Mail, Menu, MemoryStick, MessageCircle, Mic, Minus, Mouse, Package, Pause, Phone, Play,
  Plus, Search, ShieldCheck, ShoppingBag, SlidersHorizontal, Trash2, X,
} from 'lucide-react';
import products from './catalog/products.json';
import config from './store-config.json';
import { CATEGORIES, sellingPrice, sellingPaisa, money, filterProducts, cleanIds, cleanBag, bagTotalPaisa } from './catalog/logic.mjs';
import CSS from './retail.css';

/* ── data helpers ─────────────────────────────────────────────────────────── */
const icons = { Mouse, Keyboard, Headphones, MemoryStick, HardDrive };
const categoryOf = (id) => CATEGORIES.find((c) => c.id === id) || CATEGORIES[0];
/* Navigation reads in plurals (Mice, Keyboards); RAM stays RAM. */
const catName = (c) => (c.id === 'ram' ? 'RAM' : c.plural);
const byId = Object.assign(Object.create(null), Object.fromEntries(products.map((p) => [p.id, p])));
const brandCounts = products.reduce((m, p) => m.set(p.brand, (m.get(p.brand) || 0) + 1), new Map());
const brands = [...brandCounts.keys()].sort();
const brandsByCount = [...brandCounts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([b]) => b);
/* Supplier names use long dashes for variants; the storefront shows a comma. */
const nameOf = (p) => String(p.name).replace(/\s+[\u2014\u2013]\s+/g, ', ');
const productHref = (id) => '#/product/' + encodeURIComponent(id);
const shopHref = (values = {}) => {
  const qs = new URLSearchParams(Object.entries(values).filter(([, v]) => v !== '' && v !== null && v !== undefined));
  return '#/shop' + (qs.size ? '?' + qs : '');
};
const readRoute = () => {
  const [path, query = ''] = (window.location.hash.slice(1) || '/').split('?');
  return { path, params: Object.fromEntries(new URLSearchParams(query)) };
};
const lineTotal = (p, quantity) => (sellingPaisa(p.sourcePrice) * quantity) / 100;
const waLink = (text) => `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(text)}`;
const telLink = 'tel:' + config.phone.replace(/[^\d+]/g, '');
const GREETING = 'Hello EPIC DEVICES, I have a question about a product.';
const BUDGETS = [3000, 5000, 10000, 25000, 50000, 100000];
const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent || '');
const prefersReducedMotion = () => typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

function readLocal(key, fallback, clean) {
  try {
    return clean(JSON.parse(localStorage.getItem(key)) ?? fallback);
  } catch {
    return fallback;
  }
}
function useStored(key, fallback, clean) {
  const [value, setValue] = useState(() => readLocal(key, fallback, clean));
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* Selections still work in memory when storage is unavailable. */
    }
  }, [key, value]);
  useEffect(() => {
    const sync = (e) => { if (e.key === key) setValue(readLocal(key, fallback, clean)); };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, [key]);
  return [value, setValue];
}

/* ── hero slider ──────────────────────────────────────────────────────────────
   Every slide shares one backdrop in the brand's blue, so the slider never
   changes tone. Only the product and the words move. The progress bar's CSS
   animation drives the timing, which keeps pause and resume exact. */
const SLIDE_INTERVAL = 6500;
const SLIDES = [
  {
    id: 'keyboard', kicker: 'Keyboards', title: ['Your setup.', 'Upgraded.'],
    text: 'Keyboards and mice that make long desk days easier. Compare the details, then confirm on WhatsApp.',
    cta: { label: 'Shop keyboards', href: shopHref({ category: 'keyboard' }) }, image: 'slide-keyboard',
  },
  {
    id: 'mouse', kicker: 'Mice', title: ['Every move', 'matters.'],
    text: 'Wired, wireless and gaming mice from Logitech and A4Tech, all priced in rupees.',
    cta: { label: 'Shop mice', href: shopHref({ category: 'mouse' }) }, image: 'slide-mouse',
  },
  {
    id: 'audio', kicker: 'Headsets and microphones', title: ['Be heard.', 'Get immersed.'],
    text: 'Headsets and microphones for calls, classes, gaming and recording.',
    cta: { label: 'Shop headsets', href: shopHref({ category: 'audio' }) }, image: 'slide-headphones',
  },
];

function HeroSlider({ onFinder }) {
  const count = SLIDES.length;
  const [index, setIndex] = useState(0);
  const [reduced] = useState(prefersReducedMotion);
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());
  const [hold, setHold] = useState(false);
  const [hidden, setHidden] = useState(false);
  const swipe = useRef(null);
  const go = useCallback((step) => setIndex((i) => (i + step + count) % count), [count]);
  useEffect(() => {
    const update = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);
  const running = playing && !hold && !hidden;
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
  };
  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse') return;
    swipe.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e) => {
    const start = swipe.current;
    swipe.current = null;
    if (!start) return;
    const dx = e.clientX - start.x, dy = e.clientY - start.y;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.3) go(dx < 0 ? 1 : -1);
  };
  return (
    <section
      className={'hero container' + (running ? '' : ' is-paused') + (playing ? '' : ' is-static')}
      style={{ '--hero-interval': SLIDE_INTERVAL + 'ms' }}
      aria-roledescription="carousel"
      aria-label="Featured collections"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setHold(false); }}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => { swipe.current = null; }}
    >
      <div className="hero-mark" aria-hidden="true" />
      <div className="hero-floor" aria-hidden="true" />
      <div className="hero-stage" aria-live={running ? 'off' : 'polite'}>
        <div className="hero-copy">
          {SLIDES.map((s, i) => {
            const Heading = i === 0 ? 'h1' : 'h2';
            const active = i === index;
            return (
              <div key={s.id} className={'hero-slide-copy' + (active ? ' is-active' : '')} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${count}`} aria-hidden={!active}>
                <span className="hero-kicker">{s.kicker}</span>
                <Heading>{s.title[0]} <span>{s.title[1]}</span></Heading>
                <p>{s.text}</p>
                <div className="hero-actions">
                  <a className="button primary" href={s.cta.href} tabIndex={active ? undefined : -1}>{s.cta.label}<ArrowRight size={18} /></a>
                  <button className="text-link" onClick={onFinder} tabIndex={active ? undefined : -1}>Find my upgrade<ArrowUpRight size={17} /></button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="hero-art" aria-hidden="true">
          {SLIDES.map((s, i) => (
            <div key={s.id} className={'hero-product' + (i === index ? ' is-active' : '')}>
              <img
                src={`./assets/slides/${s.image}-1200.webp`}
                srcSet={`./assets/slides/${s.image}-700.webp 700w, ./assets/slides/${s.image}-1200.webp 1200w`}
                sizes="(max-width: 860px) 92vw, 52vw"
                width="1200" height="900" alt="" decoding="async"
                loading={i === 0 ? 'eager' : 'lazy'} fetchpriority={i === 0 ? 'high' : 'low'} draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="hero-controls">
        <div className="hero-progress" role="group" aria-label="Choose a slide">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              className={(i === index ? 'is-active' : '') + (i < index ? ' is-done' : '')}
              aria-label={`Show slide ${i + 1}: ${s.title.join(' ')}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
            >
              <i onAnimationEnd={i === index && playing ? () => go(1) : undefined} />
            </button>
          ))}
        </div>
        <div className="hero-buttons">
          <button aria-label="Previous slide" onClick={() => go(-1)}><ChevronLeft size={18} /></button>
          <button aria-label="Next slide" onClick={() => go(1)}><ChevronRight size={18} /></button>
          {!reduced && (
            <button aria-label={playing ? 'Pause slideshow' : 'Play slideshow'} onClick={() => { setPlaying((p) => !p); setHold(false); }}>
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── shared pieces ────────────────────────────────────────────────────────── */
const StoreContext = React.createContext(null);

function Modal({ title, children, close, drawer = false, wide = false }) {
  const { toast } = React.useContext(StoreContext);
  const ref = useRef(null);
  useEffect(() => {
    const previous = document.activeElement, overflow = document.body.style.overflow;
    ref.current.showModal();
    document.body.style.overflow = 'hidden';
    ref.current.querySelector('[data-autofocus]')?.focus();
    return () => {
      document.body.style.overflow = overflow;
      if (previous?.isConnected) previous.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className={'v4-dialog ' + (drawer ? 'drawer ' : '') + (wide ? 'wide' : '')}
      aria-label={title}
      onCancel={(e) => { e.preventDefault(); close(); }}
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        const r = e.currentTarget.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) close();
      }}
    >
      <header className="dialog-head">
        <span>{title}</span>
        <button className="icon-button" aria-label={'Close ' + title.toLowerCase()} onClick={close} data-autofocus><X size={21} /></button>
      </header>
      {toast && <div className="dialog-notice" role="status"><Check size={15} />{toast}</div>}
      {children}
    </dialog>
  );
}

function ProductImage({ product, className = '', compact = false }) {
  const [failed, setFailed] = useState(false);
  const url = product.images?.[0];
  const Icon = /microphone|\bmic\b/i.test(product.name) ? Mic : icons[categoryOf(product.category).icon];
  return (
    <div className={'product-image ' + (compact ? 'compact ' : '') + className}>
      {url && !failed ? (
        <img src={url} alt={nameOf(product)} loading="lazy" decoding="async" onError={() => setFailed(true)} />
      ) : (
        <>
          <span className="pi-disc"><Icon strokeWidth={1.5} aria-hidden="true" /></span>
          {!compact && <span className="photo-pending">Photo coming soon</span>}
        </>
      )}
    </div>
  );
}

function Card({ p }) {
  const { saved, compare, toggleSaved, toggleCompare, openQuick, add } = React.useContext(StoreContext);
  const isSaved = saved.includes(p.id), isCompared = compare.includes(p.id);
  return (
    <article className="product-card">
      <div className="card-visual">
        <a href={productHref(p.id)} aria-label={'View ' + nameOf(p)} tabIndex={-1}><ProductImage product={p} /></a>
        <button className={'card-save icon-button ' + (isSaved ? 'selected' : '')} aria-label={(isSaved ? 'Unsave ' : 'Save ') + nameOf(p)} aria-pressed={isSaved} onClick={() => toggleSaved(p.id)}>
          <Heart size={17} fill={isSaved ? 'currentColor' : 'none'} />
        </button>
        <button className="quick-button" onClick={() => openQuick(p.id)}>Quick view<ArrowUpRight size={14} /></button>
      </div>
      <div className="card-copy">
        <div className="card-eyebrow">
          <span>{p.brand}</span>
          <button title="Compare" aria-label={'Compare ' + nameOf(p)} aria-pressed={isCompared} className={isCompared ? 'selected' : ''} onClick={() => toggleCompare(p.id)}>
            <Layers size={15} />
          </button>
        </div>
        <h3><a href={productHref(p.id)}>{nameOf(p)}</a></h3>
        <p className="card-specs">{p.specs.slice(0, 2).map((pair) => pair[1]).join(', ')}</p>
        <div className="card-bottom">
          <strong>{money(sellingPrice(p))}</strong>
          <button aria-label={'Add ' + nameOf(p) + ' to bag'} onClick={() => add(p.id)}><Plus size={20} /></button>
        </div>
      </div>
    </article>
  );
}

function ProductDetails({ p, compact = false }) {
  const { saved, compare, toggleSaved, toggleCompare, add } = React.useContext(StoreContext);
  const [quantity, setQuantity] = useState(1);
  const link = typeof window !== 'undefined' ? window.location.href.split('#')[0] + productHref(p.id) : '';
  const ask = `Hello EPIC DEVICES, is this available?\n${nameOf(p)}\n${money(sellingPrice(p))} (Ref: ${p.id})\n${link}`;
  return (
    <div className={'product-detail ' + (compact ? 'compact' : '')}>
      <div className="detail-visual">
        <ProductImage product={p} />
        <div className="detail-image-caption">{p.images.length ? 'Product photograph' : 'The product photograph is being prepared. Ask us on WhatsApp for pictures of this model.'}</div>
      </div>
      <div className="detail-copy">
        <a className="eyebrow" href={shopHref({ category: p.category })}>{catName(categoryOf(p.category))}</a>
        <p className="detail-brand">{p.brand}</p>
        <h1>{nameOf(p)}</h1>
        <div className="detail-price">{money(sellingPrice(p))}<small>Catalogue price in PKR</small></div>
        <span className="availability"><ShieldCheck size={14} />Stock, delivery and warranty are confirmed before you pay</span>
        <dl className="spec-list">
          {p.specs.map(([key, value]) => (
            <div key={key}><dt>{key}</dt><dd>{value}</dd></div>
          ))}
        </dl>
        {p.category === 'ram' && <p className="compatibility-note">Check your motherboard's memory generation, supported capacity and form factor before choosing RAM. Send us your PC model if you are unsure.</p>}
        {p.category === 'drives' && <p className="compatibility-note">Check your device's drive interface and free connections before ordering. We can confirm compatibility on WhatsApp.</p>}
        <div className="purchase-actions">
          <div className="quantity">
            <button aria-label="Decrease quantity" disabled={quantity <= 1} onClick={() => setQuantity((q) => q - 1)}><Minus size={16} /></button>
            <output aria-live="polite">{quantity}</output>
            <button aria-label="Increase quantity" disabled={quantity >= 99} onClick={() => setQuantity((q) => q + 1)}><Plus size={16} /></button>
          </div>
          <button className="button primary" onClick={() => add(p.id, quantity)}><ShoppingBag size={17} />Add to bag</button>
          <a className="button" href={waLink(ask)} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} />Ask on WhatsApp</a>
        </div>
        <div className="detail-tools">
          <button onClick={() => toggleSaved(p.id)} aria-pressed={saved.includes(p.id)}>
            <Heart size={17} fill={saved.includes(p.id) ? 'currentColor' : 'none'} />{saved.includes(p.id) ? 'Saved' : 'Save for later'}
          </button>
          <button onClick={() => toggleCompare(p.id)} aria-pressed={compare.includes(p.id)}>
            <Layers size={17} />{compare.includes(p.id) ? 'In comparison' : 'Compare'}
          </button>
        </div>
        <p className="purchase-note">Your bag is a shortlist. Send it to us and we confirm stock, delivery and warranty before any payment.</p>
        {compact && <a className="text-link" href={productHref(p.id)}>Full product details<ArrowRight size={16} /></a>}
        {!compact && (
          <details className="detail-note">
            <summary>About this listing</summary>
            <p>Specifications were recorded from a supplier listing on 23 September 2026. Please confirm the current price and exact variant with our team before ordering.</p>
          </details>
        )}
      </div>
    </div>
  );
}

/* ── the store ────────────────────────────────────────────────────────────── */
export default function Retail() {
  const [route, setRoute] = useState(readRoute);
  const [bag, setBag] = useStored('epic:v4:bag', [], (value) => cleanBag(value, products));
  const [saved, setSaved] = useStored('epic:v4:saved', [], (value) => cleanIds(value, products));
  const [compare, setCompare] = useStored('epic:v4:compare', [], (value) => cleanIds(value, products, 4));
  const [recent, setRecent] = useStored('epic:v4:recent', [], (value) => cleanIds(value, products, 8));
  const [modal, setModal] = useState(null), [quick, setQuick] = useState(null), [menu, setMenu] = useState(false), [toast, setToast] = useState('');
  const [homeCategory, setHomeCategory] = useState(''), [filtersOpen, setFiltersOpen] = useState(false);
  const [search, setSearch] = useState(''), [searchOpen, setSearchOpen] = useState(false), [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [finderCategory, setFinderCategory] = useState('mouse'), [finderBudget, setFinderBudget] = useState('');
  const searchRef = useRef(null), searchBox = useRef(null), toastTimer = useRef(null);
  const total = bagTotalPaisa(bag, products) / 100;
  const bagCount = bag.reduce((sum, row) => sum + row.quantity, 0);
  const notify = (message) => {
    clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = setTimeout(() => setToast(''), 3500);
  };
  useEffect(() => () => clearTimeout(toastTimer.current), []);
  useEffect(() => {
    const update = () => {
      setRoute(readRoute()); setMenu(false); setModal(null); setQuick(null); setSearchOpen(false); setFiltersOpen(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    const key = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); searchRef.current?.focus(); }
      if (e.key === 'Escape') { setSearchOpen(false); setMenu(false); }
    };
    const outside = (e) => { if (!searchBox.current?.contains(e.target)) setSearchOpen(false); };
    window.addEventListener('hashchange', update);
    document.addEventListener('keydown', key);
    document.addEventListener('pointerdown', outside);
    return () => {
      window.removeEventListener('hashchange', update);
      document.removeEventListener('keydown', key);
      document.removeEventListener('pointerdown', outside);
    };
  }, []);
  const productId = route.path.startsWith('/product/') ? decodeURIComponent(route.path.slice('/product/'.length)) : null;
  const currentProduct = byId[productId];
  useEffect(() => {
    document.title = (currentProduct ? nameOf(currentProduct) : route.path === '/shop' ? 'Shop computer accessories' : 'Better devices. Better experiences.') + ' | EPIC DEVICES';
    if (currentProduct) setRecent((r) => [currentProduct.id, ...r.filter((id) => id !== currentProduct.id)].slice(0, 8));
  }, [productId, route.path]);
  const add = (id, quantity = 1) => {
    if ((bag.find((row) => row.id === id)?.quantity || 0) >= 99) { notify('Your bag already has the maximum quantity for this product.'); return; }
    setBag((rows) => cleanBag([...rows, { id, quantity }], products));
    notify('Added to your bag. Send it on WhatsApp when you are ready.');
  };
  const toggleSaved = (id) => setSaved((rows) => (rows.includes(id) ? rows.filter((x) => x !== id) : [...rows, id]));
  const toggleCompare = (id) => {
    if (compare.includes(id)) setCompare((rows) => rows.filter((x) => x !== id));
    else if (compare.length === 4) notify('Compare up to four products. Remove one to add another.');
    else setCompare((rows) => [...rows, id]);
  };
  const openQuick = (id) => { setQuick(id); setModal('quick'); setRecent((r) => [id, ...r.filter((x) => x !== id)].slice(0, 8)); };
  const close = () => { setModal(null); setQuick(null); };
  const navigate = (href) => {
    if (window.location.hash === href) { setMenu(false); setModal(null); setSearchOpen(false); window.scrollTo({ top: 0 }); }
    else window.location.hash = href;
  };
  const choices = useMemo(() => (search.trim() ? filterProducts(products, { query: search }).slice(0, 5) : []), [search]);
  const submitSearch = (e) => {
    e.preventDefault();
    const href = selectedSuggestion >= 0 && choices[selectedSuggestion] ? productHref(choices[selectedSuggestion].id) : shopHref({ q: search.trim() });
    navigate(href); setSearchOpen(false); setSearch(''); setSelectedSuggestion(-1);
  };
  const setFilter = (key, value) => navigate(shopHref({ ...route.params, [key]: value, page: '' }));
  const catalogue = filterProducts(products, { category: route.params.category, query: route.params.q, brand: route.params.brand, max: route.params.max, sort: route.params.sort });
  const pageCount = Math.max(1, Math.ceil(catalogue.length / 12));
  const page = Math.min(pageCount, Math.max(1, parseInt(route.params.page, 10) || 1));
  const activeCategory = CATEGORIES.find((c) => c.id === route.params.category);
  const homeProducts = filterProducts(products, { category: homeCategory }).slice(0, 8);
  const requestText = () => [
    'Hello EPIC DEVICES, please confirm these items:',
    '',
    ...bag.map((row, i) => {
      const p = byId[row.id];
      return `${i + 1}. ${nameOf(p)}\n   Qty ${row.quantity} x ${money(sellingPrice(p))} = ${money(lineTotal(p, row.quantity))}\n   Ref: ${row.id}`;
    }),
    '',
    `Catalogue subtotal: ${money(total)}`,
    'Please confirm price, stock, delivery charges and warranty.',
  ].join('\n');
  const downloadRequest = () => {
    const url = URL.createObjectURL(new Blob([requestText()], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url; a.download = 'epic-devices-enquiry.txt'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    notify('Enquiry downloaded. No order has been placed.');
  };
  const copyRequest = async () => {
    try { await navigator.clipboard.writeText(requestText()); notify('Enquiry copied.'); }
    catch { notify('Clipboard unavailable. Use Download instead.'); }
  };
  const openFinder = () => { setModal('finder'); setMenu(false); };

  const renderProducts = (rows) => <div className="product-grid">{rows.map((p) => <Card key={p.id} p={p} />)}</div>;

  return (
    <StoreContext.Provider value={{ saved, compare, toggleSaved, toggleCompare, openQuick, add, toast }}>
      <div className="v4">
        <style>{CSS}</style>
        <a className="skip" href="#main-content" onClick={(e) => { e.preventDefault(); document.getElementById('main-content')?.focus(); }}>Skip to content</a>
        <div className="topbar">
          <div className="container">
            <a href={waLink(GREETING)} target="_blank" rel="noopener noreferrer"><MessageCircle size={14} />Chat on WhatsApp {config.phone}</a>
            <span className="topbar-note">Prices in PKR. Stock and delivery are confirmed before you pay.</span>
          </div>
        </div>
        <header className="site-header">
          <div className="container header-main">
            <a href="#/" className="brand" aria-label="EPIC DEVICES home">
              <img src="./assets/brand/epic-lockup.svg" alt="EPIC DEVICES" width="238" height="44" />
            </a>
            <form className="search-box" ref={searchBox} role="search" onSubmit={submitSearch} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setSearchOpen(false); }}>
              <Search size={19} />
              <input
                ref={searchRef}
                type="search"
                placeholder="Search mice, keyboards, RAM, drives..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setSearchOpen(true); setSelectedSuggestion(-1); }}
                onFocus={() => setSearchOpen(true)}
                aria-label="Search products"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded={searchOpen && !!search.trim()}
                aria-controls="product-suggestions"
                aria-activedescendant={selectedSuggestion >= 0 ? `suggestion-${selectedSuggestion}` : undefined}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    if (choices.length) setSelectedSuggestion((i) => (e.key === 'ArrowDown' ? (i + 1) % choices.length : (i - 1 + choices.length) % choices.length));
                    setSearchOpen(true);
                  }
                  if (e.key === 'Escape') { setSearchOpen(false); setSelectedSuggestion(-1); }
                }}
                autoComplete="off"
                enterKeyHint="search"
              />
              <kbd aria-hidden="true">{isMac ? '⌘ K' : 'Ctrl K'}</kbd>
              <button className="search-submit" type="submit" aria-label="Search catalogue"><ArrowRight size={17} /></button>
              {searchOpen && search.trim() && (
                <div className="suggestions">
                  <div className="suggestions-label">Top matches</div>
                  <div role="listbox" id="product-suggestions" aria-label="Product suggestions">
                    {choices.map((p, index) => (
                      <button key={p.id} type="button" role="option" id={`suggestion-${index}`} aria-selected={selectedSuggestion === index}
                        onMouseDown={(e) => e.preventDefault()} onClick={() => { navigate(productHref(p.id)); setSearch(''); }}>
                        <ProductImage product={p} compact />
                        <span><b>{nameOf(p)}</b><small>{p.brand}</small></span>
                        <strong>{money(sellingPrice(p))}</strong>
                      </button>
                    ))}
                  </div>
                  {!choices.length && <p>No matches yet. Try "wireless mouse under 10k" or "16GB DDR4".</p>}
                  <button type="submit" className="all-results">See all results<ArrowRight size={15} /></button>
                </div>
              )}
            </form>
            <div className="header-actions">
              <a className="icon-button saved-link" href="#/saved" aria-label={`Saved products (${saved.length})`}>
                <Heart size={21} />{!!saved.length && <b>{saved.length}</b>}
              </a>
              <button className="bag-button" onClick={() => setModal('bag')} aria-label={`Shopping bag (${bagCount})`}>
                <ShoppingBag size={20} /><span>Bag</span><b>{bagCount}</b>
              </button>
              <button className="icon-button menu-button" aria-label="Open navigation" aria-expanded={menu} onClick={() => setMenu((m) => !m)}>{menu ? <X /> : <Menu />}</button>
            </div>
          </div>
          <nav className={'container category-nav ' + (menu ? 'is-open' : '')} aria-label="Shop categories">
            <a href="#/shop" className={route.path === '/shop' && !route.params.category ? 'active' : ''}>Shop all</a>
            {CATEGORIES.map((cat) => (
              <a key={cat.id} href={shopHref({ category: cat.id })} className={route.params.category === cat.id ? 'active' : ''}>{catName(cat)}</a>
            ))}
            <button className="finder-nav" onClick={openFinder}><SlidersHorizontal size={16} />Find my upgrade</button>
          </nav>
        </header>

        <main id="main-content" tabIndex={-1}>
          {route.path === '/' && (
            <>
              <HeroSlider onFinder={openFinder} />
              <div className="container reassurance">
                <div><ShieldCheck size={22} /><span>Confirmed before you pay<small>Stock, price and delivery checked with you first</small></span></div>
                <div><MessageCircle size={22} /><span>Real help on WhatsApp<small>Ask about fit, compatibility or budget</small></span></div>
                <div><Layers size={22} /><span>Compare side by side<small>Up to four products, spec by spec</small></span></div>
                <div><Search size={22} /><span>Search the way you talk<small>Try "wireless mouse under 10k"</small></span></div>
              </div>

              <section className="container section" aria-labelledby="shop-by-category">
                <div className="section-heading">
                  <h2 id="shop-by-category">Shop by category</h2>
                  <a className="text-link" href="#/shop">Shop all<ArrowRight size={17} /></a>
                </div>
                <div className="category-grid">
                  {CATEGORIES.map((cat) => {
                    const Icon = icons[cat.icon];
                    return (
                      <a className="category-tile" key={cat.id} href={shopHref({ category: cat.id })}>
                        <span className="tile-icon"><Icon size={26} strokeWidth={1.6} /></span>
                        <div>
                          <h3>{catName(cat)}</h3>
                          <span className="tile-meta">{products.filter((p) => p.category === cat.id).length} products<ArrowUpRight size={16} /></span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </section>

              <section className="container section picks" aria-labelledby="featured-picks">
                <div className="section-heading"><h2 id="featured-picks">Featured picks</h2></div>
                <div className="pills" role="group" aria-label="Featured product category">
                  <button className={!homeCategory ? 'active' : ''} aria-pressed={!homeCategory} onClick={() => setHomeCategory('')}>All</button>
                  {CATEGORIES.map((c) => (
                    <button key={c.id} className={homeCategory === c.id ? 'active' : ''} aria-pressed={homeCategory === c.id} onClick={() => setHomeCategory(c.id)}>{catName(c)}</button>
                  ))}
                </div>
                {renderProducts(homeProducts)}
              </section>

              <section className="container promo-grid" aria-label="Collections">
                <a className="promo promo-audio" href={shopHref({ category: 'audio' })}>
                  <img src="./assets/slides/slide-headphones-700.webp" alt="" width="700" height="525" loading="lazy" decoding="async" />
                  <h2>Hear every word.</h2>
                  <p>Headsets and microphones from A4Tech, Logitech, MAONO, UGREEN and more.</p>
                  <span className="text-link">Shop headsets and mics<ArrowRight size={17} /></span>
                </a>
                <div className="promo promo-store">
                  <div className="promo-icons" aria-hidden="true">
                    <span><MemoryStick size={28} strokeWidth={1.5} /></span>
                    <span><HardDrive size={28} strokeWidth={1.5} /></span>
                  </div>
                  <h2>More memory. More space.</h2>
                  <p>RAM from Lexar, XPG, Corsair and Kingston. Drives from Seagate, WD and Transcend.</p>
                  <a className="button" href={shopHref({ category: 'ram' })}>Shop RAM<ArrowRight size={17} /></a>
                </div>
              </section>

              <div className="container brand-strip">
                <span>Brands in our catalogue</span>
                <ul>{brandsByCount.map((b) => <li key={b}><a href={shopHref({ brand: b })}>{b}</a></li>)}</ul>
              </div>

              <section className="container help-band" aria-labelledby="help-band-title">
                <div className="help-symbol" aria-hidden="true"><MessageCircle size={28} /></div>
                <div>
                  <h2 id="help-band-title">Not sure what fits?</h2>
                  <p>Send your laptop or PC model and we will suggest compatible RAM, drives and accessories.</p>
                </div>
                <div className="help-actions">
                  <a className="button primary" href={waLink(GREETING)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />Chat on WhatsApp</a>
                  <button className="button" onClick={openFinder}>Find my upgrade</button>
                </div>
              </section>
            </>
          )}

          {route.path === '/shop' && (
            <div className="container shop-page">
              <div className="breadcrumb"><a href="#/">Home</a><ChevronRight size={13} /><span>{activeCategory ? catName(activeCategory) : 'Shop all'}</span></div>
              <div className="catalogue-hero">
                <div>
                  <h1>{route.params.q ? `Results for "${route.params.q}"` : activeCategory?.tagline || 'Everything for your desk.'}</h1>
                  <p>{activeCategory?.description || 'Mice, keyboards, audio, memory and storage. Compare the details and ask us before you buy.'}</p>
                </div>
                <div className="hero-bars" aria-hidden="true"><i /><i /></div>
                <div className="hero-icon" aria-hidden="true">
                  {React.createElement(activeCategory ? icons[activeCategory.icon] : ShoppingBag, { size: 58, strokeWidth: 1.3 })}
                </div>
              </div>
              <div className="catalogue-layout">
                <aside className={'filters ' + (filtersOpen ? 'is-open' : '')} aria-label="Filters">
                  <div className="filter-title"><h2>Refine your search</h2><button className="text-button" onClick={() => navigate('#/shop')}>Reset</button></div>
                  <fieldset>
                    <legend>Category</legend>
                    <a className={!route.params.category ? 'active' : ''} href={shopHref({ ...route.params, category: '', page: '' })}>All products<span>{products.length}</span></a>
                    {CATEGORIES.map((c) => (
                      <a className={route.params.category === c.id ? 'active' : ''} key={c.id} href={shopHref({ ...route.params, category: c.id, page: '' })}>
                        {catName(c)}<span>{products.filter((p) => p.category === c.id).length}</span>
                      </a>
                    ))}
                  </fieldset>
                  <fieldset>
                    <legend>Brand</legend>
                    <select aria-label="Filter by brand" value={route.params.brand || ''} onChange={(e) => setFilter('brand', e.target.value)}>
                      <option value="">All brands</option>
                      {brands.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  </fieldset>
                  <fieldset>
                    <legend>Maximum price</legend>
                    <select aria-label="Filter by maximum price" value={route.params.max || ''} onChange={(e) => setFilter('max', e.target.value)}>
                      <option value="">Any budget</option>
                      {BUDGETS.map((n) => <option key={n} value={n}>Up to {money(n)}</option>)}
                      {route.params.max && !BUDGETS.includes(Number(route.params.max)) && <option value={route.params.max}>Up to {money(route.params.max)}</option>}
                    </select>
                  </fieldset>
                  <div className="filter-tip">
                    <MessageCircle size={20} />
                    <h3>Can't find a model?</h3>
                    <p>Send us the name. We can often source items that are not listed yet.</p>
                    <a className="text-link" href={waLink(GREETING)} target="_blank" rel="noopener noreferrer">Chat on WhatsApp<ArrowUpRight size={14} /></a>
                  </div>
                </aside>
                <div className="catalogue-main">
                  <div className="catalogue-toolbar">
                    <button className="mobile-filter button" aria-expanded={filtersOpen} onClick={() => setFiltersOpen((x) => !x)}><SlidersHorizontal size={16} />Filters</button>
                    <span role="status"><b>{catalogue.length}</b> {catalogue.length === 1 ? 'product' : 'products'}</span>
                    <label>Sort by
                      <select aria-label="Sort products" value={route.params.sort || 'featured'} onChange={(e) => setFilter('sort', e.target.value)}>
                        <option value="featured">Featured</option>
                        <option value="price-asc">Price: low to high</option>
                        <option value="price-desc">Price: high to low</option>
                        <option value="name">Name: A to Z</option>
                      </select>
                    </label>
                  </div>
                  {Object.entries(route.params).some(([k, v]) => ['q', 'brand', 'max'].includes(k) && v) && (
                    <div className="active-filters">
                      {['q', 'brand', 'max'].filter((k) => route.params[k]).map((k) => (
                        <button key={k} onClick={() => setFilter(k, '')} aria-label={'Remove filter ' + (k === 'max' ? 'up to ' + money(route.params[k]) : route.params[k])}>
                          {k === 'max' ? 'Up to ' + money(route.params[k]) : route.params[k]}<X size={13} />
                        </button>
                      ))}
                    </div>
                  )}
                  {catalogue.length ? renderProducts(catalogue.slice((page - 1) * 12, page * 12)) : (
                    <div className="empty-state">
                      <Search size={40} strokeWidth={1.3} />
                      <h2>No products match these choices.</h2>
                      <p>Try another brand, a higher budget or a shorter search. Or ask us on WhatsApp and we will look for you.</p>
                      <a className="button primary" href="#/shop">Shop all<ArrowRight size={16} /></a>
                    </div>
                  )}
                  {pageCount > 1 && (
                    <nav className="pagination" aria-label="Catalogue pages">
                      <button disabled={page === 1} onClick={() => navigate(shopHref({ ...route.params, page: page - 1 }))} aria-label="Previous page"><ChevronLeft size={18} /></button>
                      {Array.from({ length: pageCount }, (_, i) => (
                        <a aria-label={`Page ${i + 1}`} aria-current={page === i + 1 ? 'page' : undefined} href={shopHref({ ...route.params, page: i + 1 })} key={i}>{i + 1}</a>
                      ))}
                      <button disabled={page === pageCount} onClick={() => navigate(shopHref({ ...route.params, page: page + 1 }))} aria-label="Next page"><ChevronRight size={18} /></button>
                    </nav>
                  )}
                </div>
              </div>
            </div>
          )}

          {currentProduct && (
            <div className="container single-product">
              <div className="breadcrumb">
                <a href="#/">Home</a><ChevronRight size={13} />
                <a href={shopHref({ category: currentProduct.category })}>{catName(categoryOf(currentProduct.category))}</a><ChevronRight size={13} />
                <span>{currentProduct.brand}</span>
              </div>
              <ProductDetails key={currentProduct.id} p={currentProduct} />
              <section className="section">
                <div className="section-heading"><h2>More in {catName(categoryOf(currentProduct.category))}</h2></div>
                {renderProducts(products.filter((p) => p.category === currentProduct.category && p.id !== currentProduct.id).slice(0, 4))}
              </section>
            </div>
          )}

          {route.path === '/saved' && (
            <section className="container section saved-page">
              <span className="eyebrow">Saved products</span>
              <h1>Your saved collection.</h1>
              <p className="page-intro">Everything you have your eye on, kept in this browser.</p>
              {saved.length ? renderProducts(saved.map((id) => byId[id])) : (
                <div className="empty-state">
                  <Heart size={42} strokeWidth={1.2} />
                  <h2>Nothing saved yet.</h2>
                  <p>Tap the heart on any product to keep it here.</p>
                  <a className="button primary" href="#/shop">Shop all<ArrowRight size={17} /></a>
                </div>
              )}
            </section>
          )}

          {route.path === '/help' && (
            <section className="container section help-page">
              <span className="eyebrow">Help and contact</span>
              <h1>How ordering works.</h1>
              <p className="page-intro">Choose your products, send the list, and we confirm everything before you pay.</p>
              <div className="contact-card">
                <a href={waLink(GREETING)} target="_blank" rel="noopener noreferrer"><MessageCircle size={24} /><span><small>WhatsApp</small><b>{config.phone}</b></span></a>
                <a href={telLink}><Phone size={24} /><span><small>Call us</small><b>{config.phone}</b></span></a>
                <a href={`mailto:${config.email}`}><Mail size={24} /><span><small>Email</small><b>{config.email}</b></span></a>
              </div>
              <div className="help-grid">
                <article>
                  <SlidersHorizontal size={28} />
                  <h2>Build your shortlist.</h2>
                  <p>Search by model, brand or budget. Save favourites with the heart, or compare up to four products.</p>
                  <button className="text-link" onClick={openFinder}>Find my upgrade<ArrowRight size={16} /></button>
                </article>
                <article>
                  <ShoppingBag size={28} />
                  <h2>Send your bag.</h2>
                  <p>Open your bag and send it on WhatsApp. We reply with confirmed prices, stock, delivery charges and warranty.</p>
                  <button className="text-link" onClick={() => setModal('bag')}>Open your bag<ArrowRight size={16} /></button>
                </article>
                <article>
                  <MemoryStick size={28} />
                  <h2>Check the fit.</h2>
                  <p>For RAM, match the memory generation and form factor. For a drive, check the interface. Send us your model and we will check it.</p>
                  <a className="text-link" href={waLink('Hello EPIC DEVICES, can you check compatibility for my device? My model is: ')} target="_blank" rel="noopener noreferrer">Ask about compatibility<ArrowUpRight size={16} /></a>
                </article>
              </div>
              <details open>
                <summary>How do prices and availability work?</summary>
                <p>Prices are in Pakistani rupees. Our catalogue is being expanded, so every order is confirmed with you first: current price, stock, delivery charges and warranty. A listed product is not a promise of stock.</p>
              </details>
              <details>
                <summary>Does adding to the bag place an order?</summary>
                <p>No. Your bag is a shortlist stored in this browser. Sending it on WhatsApp or by email starts the conversation. Nothing is charged on this website.</p>
              </details>
              <details>
                <summary>What about delivery, returns and warranty?</summary>
                <p>Delivery options, charges, warranty coverage and return terms depend on the product and your city. We confirm them for your order before you pay.</p>
              </details>
              <details>
                <summary>Will my shortlist be here next time?</summary>
                <p>Saved products, your bag and comparison selections stay in this browser. Clearing browser data removes them. They are not shared across devices.</p>
              </details>
            </section>
          )}

          {!['/', '/shop', '/saved', '/help'].includes(route.path) && !currentProduct && (
            <div className="container empty-state">
              <Package size={40} strokeWidth={1.3} />
              <h1>That page isn't here.</h1>
              <p>The link may be old. Everything else is one click away.</p>
              <a href="#/shop" className="button primary">Shop all<ArrowRight size={17} /></a>
            </div>
          )}

          {recent.some((id) => id !== currentProduct?.id) && route.path !== '/saved' && (
            <section className="container section recent-section">
              <div className="section-heading"><h2>Recently viewed</h2></div>
              {renderProducts(recent.filter((id) => id !== currentProduct?.id).slice(0, 4).map((id) => byId[id]))}
            </section>
          )}
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer-main">
              <div className="footer-brand">
                <a href="#/" aria-label="EPIC DEVICES home"><img src="./assets/brand/epic-logo-stacked.svg" alt="EPIC DEVICES" width="188" height="130" loading="lazy" /></a>
                <p>Computer accessories, memory and storage from Lahore, priced in PKR and confirmed before you pay.</p>
                <span className="footer-tagline">Better <b>devices.</b> Better <b>experiences.</b></span>
              </div>
              <div className="footer-col">
                <h3>Shop</h3>
                {CATEGORIES.map((c) => <a key={c.id} href={shopHref({ category: c.id })}>{catName(c)}</a>)}
              </div>
              <div className="footer-col">
                <h3>Your shortlist</h3>
                <a href="#/saved">Saved products</a>
                <button onClick={() => setModal('compare')}>Compare products</button>
                <button onClick={openFinder}>Find my upgrade</button>
                <button onClick={() => setModal('bag')}>Your bag</button>
                <a href="#/help">How ordering works</a>
              </div>
              <div className="footer-col footer-contact">
                <h3>Contact</h3>
                <a href={waLink(GREETING)} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} />WhatsApp {config.phone}</a>
                <a href={telLink}><Phone size={16} />{config.phone}</a>
                <a href={`mailto:${config.email}`}><Mail size={16} />{config.email}</a>
                <p>{config.city}, Pakistan</p>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} EPIC DEVICES. {config.website}</span>
              <a href="./console.html">Business console<ArrowUpRight size={12} /></a>
            </div>
          </div>
        </footer>

        {compare.length > 0 && (
          <div className="compare-dock">
            <Layers size={18} />
            <span>{compare.length} of 4 selected</span>
            <button disabled={compare.length < 2} onClick={() => setModal('compare')}>Compare now<ArrowRight size={15} /></button>
            <button className="icon-button" aria-label="Clear comparison" onClick={() => setCompare([])}><X size={17} /></button>
          </div>
        )}
        <div className={'toast ' + (toast && !modal ? 'visible' : '')} role="status" aria-live="polite">
          {toast && !modal && <><Check size={17} />{toast}</>}
        </div>

        {modal === 'quick' && quick && (
          <Modal title="Quick view" close={close} wide><ProductDetails key={quick} p={byId[quick]} compact /></Modal>
        )}
        {modal === 'finder' && (
          <Modal title="Find my upgrade" close={close}>
            <div className="finder-content">
              <span className="eyebrow">Two quick choices</span>
              <h2>What are you upgrading?</h2>
              <p>Pick a category and a budget. We will show what fits.</p>
              <div className="finder-options">
                {CATEGORIES.map((c) => {
                  const Icon = icons[c.icon];
                  return (
                    <button key={c.id} className={finderCategory === c.id ? 'selected' : ''} aria-pressed={finderCategory === c.id} onClick={() => setFinderCategory(c.id)}>
                      <Icon size={24} /><span>{c.label}</span>{finderCategory === c.id && <Check size={17} />}
                    </button>
                  );
                })}
              </div>
              <label className="finder-budget">Your budget
                <select value={finderBudget} onChange={(e) => setFinderBudget(e.target.value)}>
                  <option value="">Any budget</option>
                  {BUDGETS.map((n) => <option key={n} value={n}>Up to {money(n)}</option>)}
                </select>
              </label>
              <div className="finder-result-count" role="status">{filterProducts(products, { category: finderCategory, max: finderBudget }).length} products match your choices.</div>
              <button className="button primary full" onClick={() => navigate(shopHref({ category: finderCategory, max: finderBudget, sort: 'price-asc' }))}>Show my matches<ArrowRight size={18} /></button>
            </div>
          </Modal>
        )}
        {modal === 'bag' && (
          <Modal title={`Your bag, ${bagCount} ${bagCount === 1 ? 'item' : 'items'}`} close={close} drawer>
            <div className="bag-content">
              {!bag.length ? (
                <div className="empty-state">
                  <ShoppingBag size={44} strokeWidth={1.2} />
                  <h2>Your bag is empty.</h2>
                  <p>Add products, then send the list to us on WhatsApp.</p>
                  <button className="button primary" onClick={() => navigate('#/shop')}>Shop all<ArrowRight size={17} /></button>
                </div>
              ) : (
                <>
                  <div className="bag-note">Send this list to confirm your order.<small>We reply with stock, final prices, delivery and warranty.</small></div>
                  <div className="bag-lines">
                    {bag.map((line) => {
                      const p = byId[line.id];
                      return (
                        <div className="bag-line" key={line.id}>
                          <a href={productHref(line.id)} tabIndex={-1} aria-hidden="true"><ProductImage product={p} compact /></a>
                          <div>
                            <a className="bag-product-name" href={productHref(line.id)}>{nameOf(p)}</a>
                            <strong>{money(sellingPrice(p))}</strong>
                            <div className="quantity">
                              <button aria-label={'Decrease quantity of ' + nameOf(p)} disabled={line.quantity <= 1} onClick={() => setBag((rows) => rows.map((x) => (x.id === line.id ? { ...x, quantity: x.quantity - 1 } : x)))}><Minus size={13} /></button>
                              <output>{line.quantity}</output>
                              <button aria-label={'Increase quantity of ' + nameOf(p)} disabled={line.quantity >= 99} onClick={() => setBag((rows) => rows.map((x) => (x.id === line.id ? { ...x, quantity: x.quantity + 1 } : x)))}><Plus size={13} /></button>
                            </div>
                          </div>
                          <button className="icon-button" aria-label={'Remove ' + nameOf(p) + ' from bag'} onClick={() => setBag((rows) => rows.filter((x) => x.id !== line.id))}><Trash2 size={16} /></button>
                        </div>
                      );
                    })}
                  </div>
                  <div className="bag-summary">
                    <span>Catalogue subtotal<strong>{money(total)}</strong></span>
                    <p>Delivery charges are confirmed with your order. No payment is taken on this website.</p>
                    <a className="button primary full" href={waLink(requestText())} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />Send enquiry on WhatsApp</a>
                    <div className="bag-secondary">
                      <a className="button" href={`mailto:${config.email}?subject=${encodeURIComponent('Product enquiry, EPIC DEVICES')}&body=${encodeURIComponent(requestText())}`}><Mail size={15} />Email</a>
                      <button className="button" onClick={copyRequest}><Copy size={15} />Copy</button>
                      <button className="button" onClick={downloadRequest}><Download size={15} />Download</button>
                    </div>
                    <small>WhatsApp opens with your list filled in. Press send to reach us.</small>
                  </div>
                </>
              )}
            </div>
          </Modal>
        )}
        {modal === 'compare' && (
          <Modal title="Compare products" close={close} wide>
            <div className="compare-content">
              <h2>Side by side.</h2>
              {compare.length < 2 ? (
                <div className="empty-state">
                  <Layers size={40} />
                  <h3>Choose at least two products.</h3>
                  <p>Use the layers button on any product card to compare up to four.</p>
                  <button className="button primary" onClick={() => navigate('#/shop')}>Shop all<ArrowRight size={16} /></button>
                </div>
              ) : (
                <div className="compare-scroll" role="region" aria-label="Product comparison" tabIndex={0}>
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">At a glance</th>
                        {compare.map((id) => (
                          <th key={id} scope="col">
                            <button className="remove-compare" aria-label={'Remove ' + nameOf(byId[id]) + ' from comparison'} onClick={() => toggleCompare(id)}><X size={14} /></button>
                            <a href={productHref(id)}><ProductImage product={byId[id]} compact /><b>{nameOf(byId[id])}</b></a>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Price</th>{compare.map((id) => <td key={id} className="compare-price">{money(sellingPrice(byId[id]))}</td>)}</tr>
                      <tr><th scope="row">Brand</th>{compare.map((id) => <td key={id}>{byId[id].brand}</td>)}</tr>
                      <tr><th scope="row">Category</th>{compare.map((id) => <td key={id}>{catName(categoryOf(byId[id].category))}</td>)}</tr>
                      {[...new Set(compare.flatMap((id) => byId[id].specs.map(([key]) => key)))].map((key) => (
                        <tr key={key}><th scope="row">{key}</th>{compare.map((id) => <td key={id}>{byId[id].specs.find(([k]) => key === k)?.[1] || 'Not listed'}</td>)}</tr>
                      ))}
                      <tr><th scope="row">Availability</th>{compare.map((id) => <td key={id}>Confirmed on enquiry</td>)}</tr>
                      <tr><th scope="row">Next step</th>{compare.map((id) => <td key={id}><button className="button primary" onClick={() => add(id)}><Plus size={15} />Add to bag</button></td>)}</tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </Modal>
        )}
      </div>
    </StoreContext.Provider>
  );
}
