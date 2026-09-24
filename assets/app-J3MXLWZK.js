(()=>{var zc=Object.create;var Ai=Object.defineProperty;var Ec=Object.getOwnPropertyDescriptor;var Uc=Object.getOwnPropertyNames;var Nc=Object.getPrototypeOf,Oc=Object.prototype.hasOwnProperty;var na=(e,a)=>()=>(a||e((a={exports:{}}).exports,a),a.exports);var qc=(e,a,t,r)=>{if(a&&typeof a=="object"||typeof a=="function")for(let o of Uc(a))!Oc.call(e,o)&&o!==t&&Ai(e,o,{get:()=>a[o],enumerable:!(r=Ec(a,o))||r.enumerable});return e};var ua=(e,a,t)=>(t=e!=null?zc(Nc(e)):{},qc(a||!e||!e.__esModule?Ai(t,"default",{value:e,enumerable:!0}):t,e));var qi=na(R=>{"use strict";var rr=Symbol.for("react.element"),Hc=Symbol.for("react.portal"),Vc=Symbol.for("react.fragment"),_c=Symbol.for("react.strict_mode"),Wc=Symbol.for("react.profiler"),Gc=Symbol.for("react.provider"),Kc=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),Xc=Symbol.for("react.suspense"),$c=Symbol.for("react.memo"),Qc=Symbol.for("react.lazy"),Mi=Symbol.iterator;function Yc(e){return e===null||typeof e!="object"?null:(e=Mi&&e[Mi]||e["@@iterator"],typeof e=="function"?e:null)}var Ri={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ti=Object.assign,Fi={};function vt(e,a,t){this.props=e,this.context=a,this.refs=Fi,this.updater=t||Ri}vt.prototype.isReactComponent={};vt.prototype.setState=function(e,a){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,a,"setState")};vt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zi(){}zi.prototype=vt.prototype;function en(e,a,t){this.props=e,this.context=a,this.refs=Fi,this.updater=t||Ri}var an=en.prototype=new zi;an.constructor=en;Ti(an,vt.prototype);an.isPureReactComponent=!0;var Di=Array.isArray,Ei=Object.prototype.hasOwnProperty,tn={current:null},Ui={key:!0,ref:!0,__self:!0,__source:!0};function Ni(e,a,t){var r,o={},l=null,u=null;if(a!=null)for(r in a.ref!==void 0&&(u=a.ref),a.key!==void 0&&(l=""+a.key),a)Ei.call(a,r)&&!Ui.hasOwnProperty(r)&&(o[r]=a[r]);var i=arguments.length-2;if(i===1)o.children=t;else if(1<i){for(var s=Array(i),p=0;p<i;p++)s[p]=arguments[p+2];o.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)o[r]===void 0&&(o[r]=i[r]);return{$$typeof:rr,type:e,key:l,ref:u,props:o,_owner:tn.current}}function Zc(e,a){return{$$typeof:rr,type:e.type,key:a,ref:e.ref,props:e.props,_owner:e._owner}}function rn(e){return typeof e=="object"&&e!==null&&e.$$typeof===rr}function Jc(e){var a={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return a[t]})}var Bi=/\/+/g;function Jl(e,a){return typeof e=="object"&&e!==null&&e.key!=null?Jc(""+e.key):a.toString(36)}function yo(e,a,t,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case rr:case Hc:u=!0}}if(u)return u=e,o=o(u),e=r===""?"."+Jl(u,0):r,Di(o)?(t="",e!=null&&(t=e.replace(Bi,"$&/")+"/"),yo(o,a,t,"",function(p){return p})):o!=null&&(rn(o)&&(o=Zc(o,t+(!o.key||u&&u.key===o.key?"":(""+o.key).replace(Bi,"$&/")+"/")+e)),a.push(o)),1;if(u=0,r=r===""?".":r+":",Di(e))for(var i=0;i<e.length;i++){l=e[i];var s=r+Jl(l,i);u+=yo(l,a,t,s,o)}else if(s=Yc(e),typeof s=="function")for(e=s.call(e),i=0;!(l=e.next()).done;)l=l.value,s=r+Jl(l,i++),u+=yo(l,a,t,s,o);else if(l==="object")throw a=String(e),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return u}function vo(e,a,t){if(e==null)return e;var r=[],o=0;return yo(e,r,"","",function(l){return a.call(t,l,o++)}),r}function ep(e){if(e._status===-1){var a=e._result;a=a(),a.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=a)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Lo={transition:null},ap={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Lo,ReactCurrentOwner:tn};function Oi(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:vo,forEach:function(e,a,t){vo(e,function(){a.apply(this,arguments)},t)},count:function(e){var a=0;return vo(e,function(){a++}),a},toArray:function(e){return vo(e,function(a){return a})||[]},only:function(e){if(!rn(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=vt;R.Fragment=Vc;R.Profiler=Wc;R.PureComponent=en;R.StrictMode=_c;R.Suspense=Xc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ap;R.act=Oi;R.cloneElement=function(e,a,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ti({},e.props),o=e.key,l=e.ref,u=e._owner;if(a!=null){if(a.ref!==void 0&&(l=a.ref,u=tn.current),a.key!==void 0&&(o=""+a.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in a)Ei.call(a,s)&&!Ui.hasOwnProperty(s)&&(r[s]=a[s]===void 0&&i!==void 0?i[s]:a[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){i=Array(s);for(var p=0;p<s;p++)i[p]=arguments[p+2];r.children=i}return{$$typeof:rr,type:e.type,key:o,ref:l,props:r,_owner:u}};R.createContext=function(e){return e={$$typeof:Kc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gc,_context:e},e.Consumer=e};R.createElement=Ni;R.createFactory=function(e){var a=Ni.bind(null,e);return a.type=e,a};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:jc,render:e}};R.isValidElement=rn;R.lazy=function(e){return{$$typeof:Qc,_payload:{_status:-1,_result:e},_init:ep}};R.memo=function(e,a){return{$$typeof:$c,type:e,compare:a===void 0?null:a}};R.startTransition=function(e){var a=Lo.transition;Lo.transition={};try{e()}finally{Lo.transition=a}};R.unstable_act=Oi;R.useCallback=function(e,a){return me.current.useCallback(e,a)};R.useContext=function(e){return me.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return me.current.useDeferredValue(e)};R.useEffect=function(e,a){return me.current.useEffect(e,a)};R.useId=function(){return me.current.useId()};R.useImperativeHandle=function(e,a,t){return me.current.useImperativeHandle(e,a,t)};R.useInsertionEffect=function(e,a){return me.current.useInsertionEffect(e,a)};R.useLayoutEffect=function(e,a){return me.current.useLayoutEffect(e,a)};R.useMemo=function(e,a){return me.current.useMemo(e,a)};R.useReducer=function(e,a,t){return me.current.useReducer(e,a,t)};R.useRef=function(e){return me.current.useRef(e)};R.useState=function(e){return me.current.useState(e)};R.useSyncExternalStore=function(e,a,t){return me.current.useSyncExternalStore(e,a,t)};R.useTransition=function(){return me.current.useTransition()};R.version="18.3.1"});var Qa=na((Ch,Hi)=>{"use strict";Hi.exports=qi()});var Yi=na(N=>{"use strict";function un(e,a){var t=e.length;e.push(a);e:for(;0<t;){var r=t-1>>>1,o=e[r];if(0<Io(o,a))e[r]=a,e[t]=o,t=r;else break e}}function He(e){return e.length===0?null:e[0]}function So(e){if(e.length===0)return null;var a=e[0],t=e.pop();if(t!==a){e[0]=t;e:for(var r=0,o=e.length,l=o>>>1;r<l;){var u=2*(r+1)-1,i=e[u],s=u+1,p=e[s];if(0>Io(i,t))s<o&&0>Io(p,i)?(e[r]=p,e[s]=t,r=s):(e[r]=i,e[u]=t,r=u);else if(s<o&&0>Io(p,t))e[r]=p,e[s]=t,r=s;else break e}}return a}function Io(e,a){var t=e.sortIndex-a.sortIndex;return t!==0?t:e.id-a.id}typeof performance=="object"&&typeof performance.now=="function"?(Vi=performance,N.unstable_now=function(){return Vi.now()}):(on=Date,_i=on.now(),N.unstable_now=function(){return on.now()-_i});var Vi,on,_i,Qe=[],Ca=[],tp=1,Fe=null,ie=3,Co=!1,Ya=!1,lr=!1,Ki=typeof setTimeout=="function"?setTimeout:null,ji=typeof clearTimeout=="function"?clearTimeout:null,Wi=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function sn(e){for(var a=He(Ca);a!==null;){if(a.callback===null)So(Ca);else if(a.startTime<=e)So(Ca),a.sortIndex=a.expirationTime,un(Qe,a);else break;a=He(Ca)}}function dn(e){if(lr=!1,sn(e),!Ya)if(He(Qe)!==null)Ya=!0,cn(fn);else{var a=He(Ca);a!==null&&pn(dn,a.startTime-e)}}function fn(e,a){Ya=!1,lr&&(lr=!1,ji(nr),nr=-1),Co=!0;var t=ie;try{for(sn(a),Fe=He(Qe);Fe!==null&&(!(Fe.expirationTime>a)||e&&!Qi());){var r=Fe.callback;if(typeof r=="function"){Fe.callback=null,ie=Fe.priorityLevel;var o=r(Fe.expirationTime<=a);a=N.unstable_now(),typeof o=="function"?Fe.callback=o:Fe===He(Qe)&&So(Qe),sn(a)}else So(Qe);Fe=He(Qe)}if(Fe!==null)var l=!0;else{var u=He(Ca);u!==null&&pn(dn,u.startTime-a),l=!1}return l}finally{Fe=null,ie=t,Co=!1}}var ko=!1,wo=null,nr=-1,Xi=5,$i=-1;function Qi(){return!(N.unstable_now()-$i<Xi)}function ln(){if(wo!==null){var e=N.unstable_now();$i=e;var a=!0;try{a=wo(!0,e)}finally{a?or():(ko=!1,wo=null)}}else ko=!1}var or;typeof Wi=="function"?or=function(){Wi(ln)}:typeof MessageChannel!="undefined"?(nn=new MessageChannel,Gi=nn.port2,nn.port1.onmessage=ln,or=function(){Gi.postMessage(null)}):or=function(){Ki(ln,0)};var nn,Gi;function cn(e){wo=e,ko||(ko=!0,or())}function pn(e,a){nr=Ki(function(){e(N.unstable_now())},a)}N.unstable_IdlePriority=5;N.unstable_ImmediatePriority=1;N.unstable_LowPriority=4;N.unstable_NormalPriority=3;N.unstable_Profiling=null;N.unstable_UserBlockingPriority=2;N.unstable_cancelCallback=function(e){e.callback=null};N.unstable_continueExecution=function(){Ya||Co||(Ya=!0,cn(fn))};N.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Xi=0<e?Math.floor(1e3/e):5};N.unstable_getCurrentPriorityLevel=function(){return ie};N.unstable_getFirstCallbackNode=function(){return He(Qe)};N.unstable_next=function(e){switch(ie){case 1:case 2:case 3:var a=3;break;default:a=ie}var t=ie;ie=a;try{return e()}finally{ie=t}};N.unstable_pauseExecution=function(){};N.unstable_requestPaint=function(){};N.unstable_runWithPriority=function(e,a){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=ie;ie=e;try{return a()}finally{ie=t}};N.unstable_scheduleCallback=function(e,a,t){var r=N.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?r+t:r):t=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=t+o,e={id:tp++,callback:a,priorityLevel:e,startTime:t,expirationTime:o,sortIndex:-1},t>r?(e.sortIndex=t,un(Ca,e),He(Qe)===null&&e===He(Ca)&&(lr?(ji(nr),nr=-1):lr=!0,pn(dn,t-r))):(e.sortIndex=o,un(Qe,e),Ya||Co||(Ya=!0,cn(fn))),e};N.unstable_shouldYield=Qi;N.unstable_wrapCallback=function(e){var a=ie;return function(){var t=ie;ie=a;try{return e.apply(this,arguments)}finally{ie=t}}}});var Ji=na((bh,Zi)=>{"use strict";Zi.exports=Yi()});var oc=na(Be=>{"use strict";var rp=Qa(),Me=Ji();function y(e){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nd=new Set,Ar={};function dt(e,a){Ot(e,a),Ot(e+"Capture",a)}function Ot(e,a){for(Ar[e]=a,e=0;e<a.length;e++)nd.add(a[e])}var pa=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),En=Object.prototype.hasOwnProperty,op=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,es={},as={};function lp(e){return En.call(as,e)?!0:En.call(es,e)?!1:op.test(e)?as[e]=!0:(es[e]=!0,!1)}function np(e,a,t,r){if(t!==null&&t.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function up(e,a,t,r){if(a===null||typeof a=="undefined"||np(e,a,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function xe(e,a,t,r,o,l,u){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=a,this.sanitizeURL=l,this.removeEmptyString=u}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var a=e[0];le[a]=new xe(a,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Au=/[\-:]([a-z])/g;function Mu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var a=e.replace(Au,Mu);le[a]=new xe(a,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var a=e.replace(Au,Mu);le[a]=new xe(a,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var a=e.replace(Au,Mu);le[a]=new xe(a,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Du(e,a,t,r){var o=le.hasOwnProperty(a)?le[a]:null;(o!==null?o.type!==0:r||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(up(a,t,o,r)&&(t=null),r||o===null?lp(a)&&(t===null?e.removeAttribute(a):e.setAttribute(a,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(a=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(a):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,a,t):e.setAttribute(a,t))))}var xa=rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),It=Symbol.for("react.portal"),wt=Symbol.for("react.fragment"),Bu=Symbol.for("react.strict_mode"),Un=Symbol.for("react.profiler"),ud=Symbol.for("react.provider"),id=Symbol.for("react.context"),Ru=Symbol.for("react.forward_ref"),Nn=Symbol.for("react.suspense"),On=Symbol.for("react.suspense_list"),Tu=Symbol.for("react.memo"),ba=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var sd=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var ts=Symbol.iterator;function ur(e){return e===null||typeof e!="object"?null:(e=ts&&e[ts]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,mn;function hr(e){if(mn===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);mn=a&&a[1]||""}return`
`+mn+e}var hn=!1;function gn(e,a){if(!e||hn)return"";hn=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(p){var r=p}Reflect.construct(e,[],a)}else{try{a.call()}catch(p){r=p}e.call(a.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var o=p.stack.split(`
`),l=r.stack.split(`
`),u=o.length-1,i=l.length-1;1<=u&&0<=i&&o[u]!==l[i];)i--;for(;1<=u&&0<=i;u--,i--)if(o[u]!==l[i]){if(u!==1||i!==1)do if(u--,i--,0>i||o[u]!==l[i]){var s=`
`+o[u].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=u&&0<=i);break}}}finally{hn=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?hr(e):""}function ip(e){switch(e.tag){case 5:return hr(e.type);case 16:return hr("Lazy");case 13:return hr("Suspense");case 19:return hr("SuspenseList");case 0:case 2:case 15:return e=gn(e.type,!1),e;case 11:return e=gn(e.type.render,!1),e;case 1:return e=gn(e.type,!0),e;default:return""}}function qn(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wt:return"Fragment";case It:return"Portal";case Un:return"Profiler";case Bu:return"StrictMode";case Nn:return"Suspense";case On:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case id:return(e.displayName||"Context")+".Consumer";case ud:return(e._context.displayName||"Context")+".Provider";case Ru:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tu:return a=e.displayName||null,a!==null?a:qn(e.type)||"Memo";case ba:a=e._payload,e=e._init;try{return qn(e(a))}catch{}}return null}function sp(e){var a=e.type;switch(e.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=a.render,e=e.displayName||e.name||"",a.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qn(a);case 8:return a===Bu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function qa(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dd(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function dp(e){var a=dd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),r=""+e[a];if(!e.hasOwnProperty(a)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,l=t.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return o.call(this)},set:function(u){r=""+u,l.call(this,u)}}),Object.defineProperty(e,a,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Po(e){e._valueTracker||(e._valueTracker=dp(e))}function fd(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),r="";return e&&(r=dd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(a.setValue(e),!0):!1}function al(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hn(e,a){var t=a.checked;return K({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function rs(e,a){var t=a.defaultValue==null?"":a.defaultValue,r=a.checked!=null?a.checked:a.defaultChecked;t=qa(a.value!=null?a.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function cd(e,a){a=a.checked,a!=null&&Du(e,"checked",a,!1)}function Vn(e,a){cd(e,a);var t=qa(a.value),r=a.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}a.hasOwnProperty("value")?_n(e,a.type,t):a.hasOwnProperty("defaultValue")&&_n(e,a.type,qa(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(e.defaultChecked=!!a.defaultChecked)}function os(e,a,t){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var r=a.type;if(!(r!=="submit"&&r!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+e._wrapperState.initialValue,t||a===e.value||(e.value=a),e.defaultValue=a}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function _n(e,a,t){(a!=="number"||al(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var gr=Array.isArray;function Tt(e,a,t,r){if(e=e.options,a){a={};for(var o=0;o<t.length;o++)a["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=a.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+qa(t),a=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}a!==null||e[o].disabled||(a=e[o])}a!==null&&(a.selected=!0)}}function Wn(e,a){if(a.dangerouslySetInnerHTML!=null)throw Error(y(91));return K({},a,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ls(e,a){var t=a.value;if(t==null){if(t=a.children,a=a.defaultValue,t!=null){if(a!=null)throw Error(y(92));if(gr(t)){if(1<t.length)throw Error(y(93));t=t[0]}a=t}a==null&&(a=""),t=a}e._wrapperState={initialValue:qa(t)}}function pd(e,a){var t=qa(a.value),r=qa(a.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),a.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ns(e){var a=e.textContent;a===e._wrapperState.initialValue&&a!==""&&a!==null&&(e.value=a)}function md(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gn(e,a){return e==null||e==="http://www.w3.org/1999/xhtml"?md(a):e==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ao,hd=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(a,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(a,t,r,o)})}:e}(function(e,a){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=a;else{for(Ao=Ao||document.createElement("div"),Ao.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;a.firstChild;)e.appendChild(a.firstChild)}});function Mr(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fp=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){fp.forEach(function(a){a=a+e.charAt(0).toUpperCase()+e.substring(1),yr[a]=yr[e]})});function gd(e,a,t){return a==null||typeof a=="boolean"||a===""?"":t||typeof a!="number"||a===0||yr.hasOwnProperty(e)&&yr[e]?(""+a).trim():a+"px"}function xd(e,a){e=e.style;for(var t in a)if(a.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=gd(t,a[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var cp=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kn(e,a){if(a){if(cp[e]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(y(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(y(61))}if(a.style!=null&&typeof a.style!="object")throw Error(y(62))}}function jn(e,a){if(e.indexOf("-")===-1)return typeof a.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xn=null;function Fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $n=null,Ft=null,zt=null;function us(e){if(e=jr(e)){if(typeof $n!="function")throw Error(y(280));var a=e.stateNode;a&&(a=Ml(a),$n(e.stateNode,e.type,a))}}function vd(e){Ft?zt?zt.push(e):zt=[e]:Ft=e}function yd(){if(Ft){var e=Ft,a=zt;if(zt=Ft=null,us(e),a)for(e=0;e<a.length;e++)us(a[e])}}function Ld(e,a){return e(a)}function Id(){}var xn=!1;function wd(e,a,t){if(xn)return e(a,t);xn=!0;try{return Ld(e,a,t)}finally{xn=!1,(Ft!==null||zt!==null)&&(Id(),yd())}}function Dr(e,a){var t=e.stateNode;if(t===null)return null;var r=Ml(t);if(r===null)return null;t=r[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(y(231,a,typeof t));return t}var Qn=!1;if(pa)try{yt={},Object.defineProperty(yt,"passive",{get:function(){Qn=!0}}),window.addEventListener("test",yt,yt),window.removeEventListener("test",yt,yt)}catch{Qn=!1}var yt;function pp(e,a,t,r,o,l,u,i,s){var p=Array.prototype.slice.call(arguments,3);try{a.apply(t,p)}catch(h){this.onError(h)}}var Lr=!1,tl=null,rl=!1,Yn=null,mp={onError:function(e){Lr=!0,tl=e}};function hp(e,a,t,r,o,l,u,i,s){Lr=!1,tl=null,pp.apply(mp,arguments)}function gp(e,a,t,r,o,l,u,i,s){if(hp.apply(this,arguments),Lr){if(Lr){var p=tl;Lr=!1,tl=null}else throw Error(y(198));rl||(rl=!0,Yn=p)}}function ft(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,a.flags&4098&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function Sd(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function is(e){if(ft(e)!==e)throw Error(y(188))}function xp(e){var a=e.alternate;if(!a){if(a=ft(e),a===null)throw Error(y(188));return a!==e?null:e}for(var t=e,r=a;;){var o=t.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===t)return is(o),e;if(l===r)return is(o),a;l=l.sibling}throw Error(y(188))}if(t.return!==r.return)t=o,r=l;else{for(var u=!1,i=o.child;i;){if(i===t){u=!0,t=o,r=l;break}if(i===r){u=!0,r=o,t=l;break}i=i.sibling}if(!u){for(i=l.child;i;){if(i===t){u=!0,t=l,r=o;break}if(i===r){u=!0,r=l,t=o;break}i=i.sibling}if(!u)throw Error(y(189))}}if(t.alternate!==r)throw Error(y(190))}if(t.tag!==3)throw Error(y(188));return t.stateNode.current===t?e:a}function Cd(e){return e=xp(e),e!==null?kd(e):null}function kd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var a=kd(e);if(a!==null)return a;e=e.sibling}return null}var bd=Me.unstable_scheduleCallback,ss=Me.unstable_cancelCallback,vp=Me.unstable_shouldYield,yp=Me.unstable_requestPaint,$=Me.unstable_now,Lp=Me.unstable_getCurrentPriorityLevel,zu=Me.unstable_ImmediatePriority,Pd=Me.unstable_UserBlockingPriority,ol=Me.unstable_NormalPriority,Ip=Me.unstable_LowPriority,Ad=Me.unstable_IdlePriority,kl=null,ea=null;function wp(e){if(ea&&typeof ea.onCommitFiberRoot=="function")try{ea.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:kp,Sp=Math.log,Cp=Math.LN2;function kp(e){return e>>>=0,e===0?32:31-(Sp(e)/Cp|0)|0}var Mo=64,Do=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ll(e,a){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,u=t&268435455;if(u!==0){var i=u&~o;i!==0?r=xr(i):(l&=u,l!==0&&(r=xr(l)))}else u=t&~o,u!==0?r=xr(u):l!==0&&(r=xr(l));if(r===0)return 0;if(a!==0&&a!==r&&!(a&o)&&(o=r&-r,l=a&-a,o>=l||o===16&&(l&4194240)!==0))return a;if(r&4&&(r|=t&16),a=e.entangledLanes,a!==0)for(e=e.entanglements,a&=r;0<a;)t=31-Ke(a),o=1<<t,r|=e[t],a&=~o;return r}function bp(e,a){switch(e){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pp(e,a){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-Ke(l),i=1<<u,s=o[u];s===-1?(!(i&t)||i&r)&&(o[u]=bp(i,a)):s<=a&&(e.expiredLanes|=i),l&=~i}}function Zn(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Md(){var e=Mo;return Mo<<=1,!(Mo&4194240)&&(Mo=64),e}function vn(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Gr(e,a,t){e.pendingLanes|=a,a!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,a=31-Ke(a),e[a]=t}function Ap(e,a){var t=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Ke(t),l=1<<o;a[o]=0,r[o]=-1,e[o]=-1,t&=~l}}function Eu(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var r=31-Ke(t),o=1<<r;o&a|e[r]&a&&(e[r]|=a),t&=~o}}var z=0;function Dd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bd,Uu,Rd,Td,Fd,Jn=!1,Bo=[],Ra=null,Ta=null,Fa=null,Br=new Map,Rr=new Map,Aa=[],Mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ds(e,a){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Br.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(a.pointerId)}}function ir(e,a,t,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:a,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},a!==null&&(a=jr(a),a!==null&&Uu(a)),e):(e.eventSystemFlags|=r,a=e.targetContainers,o!==null&&a.indexOf(o)===-1&&a.push(o),e)}function Dp(e,a,t,r,o){switch(a){case"focusin":return Ra=ir(Ra,e,a,t,r,o),!0;case"dragenter":return Ta=ir(Ta,e,a,t,r,o),!0;case"mouseover":return Fa=ir(Fa,e,a,t,r,o),!0;case"pointerover":var l=o.pointerId;return Br.set(l,ir(Br.get(l)||null,e,a,t,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Rr.set(l,ir(Rr.get(l)||null,e,a,t,r,o)),!0}return!1}function zd(e){var a=et(e.target);if(a!==null){var t=ft(a);if(t!==null){if(a=t.tag,a===13){if(a=Sd(t),a!==null){e.blockedOn=a,Fd(e.priority,function(){Rd(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Go(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=eu(e.domEventName,e.eventSystemFlags,a[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Xn=r,t.target.dispatchEvent(r),Xn=null}else return a=jr(t),a!==null&&Uu(a),e.blockedOn=t,!1;a.shift()}return!0}function fs(e,a,t){Go(e)&&t.delete(a)}function Bp(){Jn=!1,Ra!==null&&Go(Ra)&&(Ra=null),Ta!==null&&Go(Ta)&&(Ta=null),Fa!==null&&Go(Fa)&&(Fa=null),Br.forEach(fs),Rr.forEach(fs)}function sr(e,a){e.blockedOn===a&&(e.blockedOn=null,Jn||(Jn=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,Bp)))}function Tr(e){function a(o){return sr(o,e)}if(0<Bo.length){sr(Bo[0],e);for(var t=1;t<Bo.length;t++){var r=Bo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Ra!==null&&sr(Ra,e),Ta!==null&&sr(Ta,e),Fa!==null&&sr(Fa,e),Br.forEach(a),Rr.forEach(a),t=0;t<Aa.length;t++)r=Aa[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Aa.length&&(t=Aa[0],t.blockedOn===null);)zd(t),t.blockedOn===null&&Aa.shift()}var Et=xa.ReactCurrentBatchConfig,nl=!0;function Rp(e,a,t,r){var o=z,l=Et.transition;Et.transition=null;try{z=1,Nu(e,a,t,r)}finally{z=o,Et.transition=l}}function Tp(e,a,t,r){var o=z,l=Et.transition;Et.transition=null;try{z=4,Nu(e,a,t,r)}finally{z=o,Et.transition=l}}function Nu(e,a,t,r){if(nl){var o=eu(e,a,t,r);if(o===null)kn(e,a,r,ul,t),ds(e,r);else if(Dp(o,e,a,t,r))r.stopPropagation();else if(ds(e,r),a&4&&-1<Mp.indexOf(e)){for(;o!==null;){var l=jr(o);if(l!==null&&Bd(l),l=eu(e,a,t,r),l===null&&kn(e,a,r,ul,t),l===o)break;o=l}o!==null&&r.stopPropagation()}else kn(e,a,r,null,t)}}var ul=null;function eu(e,a,t,r){if(ul=null,e=Fu(r),e=et(e),e!==null)if(a=ft(e),a===null)e=null;else if(t=a.tag,t===13){if(e=Sd(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null);return ul=e,null}function Ed(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lp()){case zu:return 1;case Pd:return 4;case ol:case Ip:return 16;case Ad:return 536870912;default:return 16}default:return 16}}var Da=null,Ou=null,Ko=null;function Ud(){if(Ko)return Ko;var e,a=Ou,t=a.length,r,o="value"in Da?Da.value:Da.textContent,l=o.length;for(e=0;e<t&&a[e]===o[e];e++);var u=t-e;for(r=1;r<=u&&a[t-r]===o[l-r];r++);return Ko=o.slice(e,1<r?1-r:void 0)}function jo(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Ro(){return!0}function cs(){return!1}function De(e){function a(t,r,o,l,u){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ro:cs,this.isPropagationStopped=cs,this}return K(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),a}var Kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qu=De(Kt),Kr=K({},Kt,{view:0,detail:0}),Fp=De(Kr),yn,Ln,dr,bl=K({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(yn=e.screenX-dr.screenX,Ln=e.screenY-dr.screenY):Ln=yn=0,dr=e),yn)},movementY:function(e){return"movementY"in e?e.movementY:Ln}}),ps=De(bl),zp=K({},bl,{dataTransfer:0}),Ep=De(zp),Up=K({},Kr,{relatedTarget:0}),In=De(Up),Np=K({},Kt,{animationName:0,elapsedTime:0,pseudoElement:0}),Op=De(Np),qp=K({},Kt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hp=De(qp),Vp=K({},Kt,{data:0}),ms=De(Vp),_p={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kp(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Gp[e])?!!a[e]:!1}function Hu(){return Kp}var jp=K({},Kr,{key:function(e){if(e.key){var a=_p[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xp=De(jp),$p=K({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hs=De($p),Qp=K({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),Yp=De(Qp),Zp=K({},Kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jp=De(Zp),em=K({},bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),am=De(em),tm=[9,13,27,32],Vu=pa&&"CompositionEvent"in window,Ir=null;pa&&"documentMode"in document&&(Ir=document.documentMode);var rm=pa&&"TextEvent"in window&&!Ir,Nd=pa&&(!Vu||Ir&&8<Ir&&11>=Ir),gs=" ",xs=!1;function Od(e,a){switch(e){case"keyup":return tm.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var St=!1;function om(e,a){switch(e){case"compositionend":return qd(a);case"keypress":return a.which!==32?null:(xs=!0,gs);case"textInput":return e=a.data,e===gs&&xs?null:e;default:return null}}function lm(e,a){if(St)return e==="compositionend"||!Vu&&Od(e,a)?(e=Ud(),Ko=Ou=Da=null,St=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Nd&&a.locale!=="ko"?null:a.data;default:return null}}var nm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vs(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!nm[e.type]:a==="textarea"}function Hd(e,a,t,r){vd(r),a=il(a,"onChange"),0<a.length&&(t=new qu("onChange","change",null,t,r),e.push({event:t,listeners:a}))}var wr=null,Fr=null;function um(e){Zd(e,0)}function Pl(e){var a=bt(e);if(fd(a))return e}function im(e,a){if(e==="change")return a}var Vd=!1;pa&&(pa?(Fo="oninput"in document,Fo||(wn=document.createElement("div"),wn.setAttribute("oninput","return;"),Fo=typeof wn.oninput=="function"),To=Fo):To=!1,Vd=To&&(!document.documentMode||9<document.documentMode));var To,Fo,wn;function ys(){wr&&(wr.detachEvent("onpropertychange",_d),Fr=wr=null)}function _d(e){if(e.propertyName==="value"&&Pl(Fr)){var a=[];Hd(a,Fr,e,Fu(e)),wd(um,a)}}function sm(e,a,t){e==="focusin"?(ys(),wr=a,Fr=t,wr.attachEvent("onpropertychange",_d)):e==="focusout"&&ys()}function dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(Fr)}function fm(e,a){if(e==="click")return Pl(a)}function cm(e,a){if(e==="input"||e==="change")return Pl(a)}function pm(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Xe=typeof Object.is=="function"?Object.is:pm;function zr(e,a){if(Xe(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),r=Object.keys(a);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!En.call(a,o)||!Xe(e[o],a[o]))return!1}return!0}function Ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Is(e,a){var t=Ls(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=a&&r>=a)return{node:t,offset:a-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ls(t)}}function Wd(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Wd(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Gd(){for(var e=window,a=al();a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=al(e.document)}return a}function _u(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}function mm(e){var a=Gd(),t=e.focusedElem,r=e.selectionRange;if(a!==t&&t&&t.ownerDocument&&Wd(t.ownerDocument.documentElement,t)){if(r!==null&&_u(t)){if(a=r.start,e=r.end,e===void 0&&(e=a),"selectionStart"in t)t.selectionStart=a,t.selectionEnd=Math.min(e,t.value.length);else if(e=(a=t.ownerDocument||document)&&a.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Is(t,l);var u=Is(t,r);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(a=a.createRange(),a.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(a),e.extend(u.node,u.offset)):(a.setEnd(u.node,u.offset),e.addRange(a)))}}for(a=[],e=t;e=e.parentNode;)e.nodeType===1&&a.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<a.length;t++)e=a[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hm=pa&&"documentMode"in document&&11>=document.documentMode,Ct=null,au=null,Sr=null,tu=!1;function ws(e,a,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;tu||Ct==null||Ct!==al(r)||(r=Ct,"selectionStart"in r&&_u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&zr(Sr,r)||(Sr=r,r=il(au,"onSelect"),0<r.length&&(a=new qu("onSelect","select",null,a,t),e.push({event:a,listeners:r}),a.target=Ct)))}function zo(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var kt={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},Sn={},Kd={};pa&&(Kd=document.createElement("div").style,"AnimationEvent"in window||(delete kt.animationend.animation,delete kt.animationiteration.animation,delete kt.animationstart.animation),"TransitionEvent"in window||delete kt.transitionend.transition);function Al(e){if(Sn[e])return Sn[e];if(!kt[e])return e;var a=kt[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in Kd)return Sn[e]=a[t];return e}var jd=Al("animationend"),Xd=Al("animationiteration"),$d=Al("animationstart"),Qd=Al("transitionend"),Yd=new Map,Ss="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Va(e,a){Yd.set(e,a),dt(a,[e])}for(Eo=0;Eo<Ss.length;Eo++)Uo=Ss[Eo],Cs=Uo.toLowerCase(),ks=Uo[0].toUpperCase()+Uo.slice(1),Va(Cs,"on"+ks);var Uo,Cs,ks,Eo;Va(jd,"onAnimationEnd");Va(Xd,"onAnimationIteration");Va($d,"onAnimationStart");Va("dblclick","onDoubleClick");Va("focusin","onFocus");Va("focusout","onBlur");Va(Qd,"onTransitionEnd");Ot("onMouseEnter",["mouseout","mouseover"]);Ot("onMouseLeave",["mouseout","mouseover"]);Ot("onPointerEnter",["pointerout","pointerover"]);Ot("onPointerLeave",["pointerout","pointerover"]);dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gm=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function bs(e,a,t){var r=e.type||"unknown-event";e.currentTarget=t,gp(r,a,void 0,e),e.currentTarget=null}function Zd(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var l=void 0;if(a)for(var u=r.length-1;0<=u;u--){var i=r[u],s=i.instance,p=i.currentTarget;if(i=i.listener,s!==l&&o.isPropagationStopped())break e;bs(o,i,p),l=s}else for(u=0;u<r.length;u++){if(i=r[u],s=i.instance,p=i.currentTarget,i=i.listener,s!==l&&o.isPropagationStopped())break e;bs(o,i,p),l=s}}}if(rl)throw e=Yn,rl=!1,Yn=null,e}function H(e,a){var t=a[uu];t===void 0&&(t=a[uu]=new Set);var r=e+"__bubble";t.has(r)||(Jd(a,e,2,!1),t.add(r))}function Cn(e,a,t){var r=0;a&&(r|=4),Jd(t,e,r,a)}var No="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[No]){e[No]=!0,nd.forEach(function(t){t!=="selectionchange"&&(gm.has(t)||Cn(t,!1,e),Cn(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[No]||(a[No]=!0,Cn("selectionchange",!1,a))}}function Jd(e,a,t,r){switch(Ed(a)){case 1:var o=Rp;break;case 4:o=Tp;break;default:o=Nu}t=o.bind(null,a,t,e),o=void 0,!Qn||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(a,t,{capture:!0,passive:o}):e.addEventListener(a,t,!0):o!==void 0?e.addEventListener(a,t,{passive:o}):e.addEventListener(a,t,!1)}function kn(e,a,t,r,o){var l=r;if(!(a&1)&&!(a&2)&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var i=r.stateNode.containerInfo;if(i===o||i.nodeType===8&&i.parentNode===o)break;if(u===4)for(u=r.return;u!==null;){var s=u.tag;if((s===3||s===4)&&(s=u.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;u=u.return}for(;i!==null;){if(u=et(i),u===null)return;if(s=u.tag,s===5||s===6){r=l=u;continue e}i=i.parentNode}}r=r.return}wd(function(){var p=l,h=Fu(t),g=[];e:{var x=Yd.get(e);if(x!==void 0){var L=qu,I=e;switch(e){case"keypress":if(jo(t)===0)break e;case"keydown":case"keyup":L=Xp;break;case"focusin":I="focus",L=In;break;case"focusout":I="blur",L=In;break;case"beforeblur":case"afterblur":L=In;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Ep;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Yp;break;case jd:case Xd:case $d:L=Op;break;case Qd:L=Jp;break;case"scroll":L=Fp;break;case"wheel":L=am;break;case"copy":case"cut":case"paste":L=Hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=hs}var w=(a&4)!==0,E=!w&&e==="scroll",f=w?x!==null?x+"Capture":null:x;w=[];for(var d=p,m;d!==null;){m=d;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,f!==null&&(v=Dr(d,f),v!=null&&w.push(Ur(d,v,m)))),E)break;d=d.return}0<w.length&&(x=new L(x,I,null,t,h),g.push({event:x,listeners:w}))}}if(!(a&7)){e:{if(x=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",x&&t!==Xn&&(I=t.relatedTarget||t.fromElement)&&(et(I)||I[ma]))break e;if((L||x)&&(x=h.window===h?h:(x=h.ownerDocument)?x.defaultView||x.parentWindow:window,L?(I=t.relatedTarget||t.toElement,L=p,I=I?et(I):null,I!==null&&(E=ft(I),I!==E||I.tag!==5&&I.tag!==6)&&(I=null)):(L=null,I=p),L!==I)){if(w=ps,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=hs,v="onPointerLeave",f="onPointerEnter",d="pointer"),E=L==null?x:bt(L),m=I==null?x:bt(I),x=new w(v,d+"leave",L,t,h),x.target=E,x.relatedTarget=m,v=null,et(h)===p&&(w=new w(f,d+"enter",I,t,h),w.target=m,w.relatedTarget=E,v=w),E=v,L&&I)a:{for(w=L,f=I,d=0,m=w;m;m=Lt(m))d++;for(m=0,v=f;v;v=Lt(v))m++;for(;0<d-m;)w=Lt(w),d--;for(;0<m-d;)f=Lt(f),m--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break a;w=Lt(w),f=Lt(f)}w=null}else w=null;L!==null&&Ps(g,x,L,w,!1),I!==null&&E!==null&&Ps(g,E,I,w,!0)}}e:{if(x=p?bt(p):window,L=x.nodeName&&x.nodeName.toLowerCase(),L==="select"||L==="input"&&x.type==="file")var k=im;else if(vs(x))if(Vd)k=cm;else{k=dm;var b=sm}else(L=x.nodeName)&&L.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(k=fm);if(k&&(k=k(e,p))){Hd(g,k,t,h);break e}b&&b(e,x,p),e==="focusout"&&(b=x._wrapperState)&&b.controlled&&x.type==="number"&&_n(x,"number",x.value)}switch(b=p?bt(p):window,e){case"focusin":(vs(b)||b.contentEditable==="true")&&(Ct=b,au=p,Sr=null);break;case"focusout":Sr=au=Ct=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,ws(g,t,h);break;case"selectionchange":if(hm)break;case"keydown":case"keyup":ws(g,t,h)}var A;if(Vu)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else St?Od(e,t)&&(M="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(M="onCompositionStart");M&&(Nd&&t.locale!=="ko"&&(St||M!=="onCompositionStart"?M==="onCompositionEnd"&&St&&(A=Ud()):(Da=h,Ou="value"in Da?Da.value:Da.textContent,St=!0)),b=il(p,M),0<b.length&&(M=new ms(M,e,null,t,h),g.push({event:M,listeners:b}),A?M.data=A:(A=qd(t),A!==null&&(M.data=A)))),(A=rm?om(e,t):lm(e,t))&&(p=il(p,"onBeforeInput"),0<p.length&&(h=new ms("onBeforeInput","beforeinput",null,t,h),g.push({event:h,listeners:p}),h.data=A))}Zd(g,a)})}function Ur(e,a,t){return{instance:e,listener:a,currentTarget:t}}function il(e,a){for(var t=a+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Dr(e,t),l!=null&&r.unshift(Ur(e,l,o)),l=Dr(e,a),l!=null&&r.push(Ur(e,l,o))),e=e.return}return r}function Lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ps(e,a,t,r,o){for(var l=a._reactName,u=[];t!==null&&t!==r;){var i=t,s=i.alternate,p=i.stateNode;if(s!==null&&s===r)break;i.tag===5&&p!==null&&(i=p,o?(s=Dr(t,l),s!=null&&u.unshift(Ur(t,s,i))):o||(s=Dr(t,l),s!=null&&u.push(Ur(t,s,i)))),t=t.return}u.length!==0&&e.push({event:a,listeners:u})}var xm=/\r\n?/g,vm=/\u0000|\uFFFD/g;function As(e){return(typeof e=="string"?e:""+e).replace(xm,`
`).replace(vm,"")}function Oo(e,a,t){if(a=As(a),As(e)!==a&&t)throw Error(y(425))}function sl(){}var ru=null,ou=null;function lu(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,ym=typeof clearTimeout=="function"?clearTimeout:void 0,Ms=typeof Promise=="function"?Promise:void 0,Lm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ms!="undefined"?function(e){return Ms.resolve(null).then(e).catch(Im)}:nu;function Im(e){setTimeout(function(){throw e})}function bn(e,a){var t=a,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Tr(a);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Tr(a)}function za(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return e}function Ds(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(a===0)return e;a--}else t==="/$"&&a++}e=e.previousSibling}return null}var jt=Math.random().toString(36).slice(2),Je="__reactFiber$"+jt,Nr="__reactProps$"+jt,ma="__reactContainer$"+jt,uu="__reactEvents$"+jt,wm="__reactListeners$"+jt,Sm="__reactHandles$"+jt;function et(e){var a=e[Je];if(a)return a;for(var t=e.parentNode;t;){if(a=t[ma]||t[Je]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Ds(e);e!==null;){if(t=e[Je])return t;e=Ds(e)}return a}e=t,t=e.parentNode}return null}function jr(e){return e=e[Je]||e[ma],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function Ml(e){return e[Nr]||null}var iu=[],Pt=-1;function _a(e){return{current:e}}function V(e){0>Pt||(e.current=iu[Pt],iu[Pt]=null,Pt--)}function O(e,a){Pt++,iu[Pt]=e.current,e.current=a}var Ha={},ce=_a(Ha),Ie=_a(!1),lt=Ha;function qt(e,a){var t=e.type.contextTypes;if(!t)return Ha;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===a)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in t)o[l]=a[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),o}function we(e){return e=e.childContextTypes,e!=null}function dl(){V(Ie),V(ce)}function Bs(e,a,t){if(ce.current!==Ha)throw Error(y(168));O(ce,a),O(Ie,t)}function ef(e,a,t){var r=e.stateNode;if(a=a.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in a))throw Error(y(108,sp(e)||"Unknown",o));return K({},t,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ha,lt=ce.current,O(ce,e),O(Ie,Ie.current),!0}function Rs(e,a,t){var r=e.stateNode;if(!r)throw Error(y(169));t?(e=ef(e,a,lt),r.__reactInternalMemoizedMergedChildContext=e,V(Ie),V(ce),O(ce,e)):V(Ie),O(Ie,t)}var sa=null,Dl=!1,Pn=!1;function af(e){sa===null?sa=[e]:sa.push(e)}function Cm(e){Dl=!0,af(e)}function Wa(){if(!Pn&&sa!==null){Pn=!0;var e=0,a=z;try{var t=sa;for(z=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}sa=null,Dl=!1}catch(o){throw sa!==null&&(sa=sa.slice(e+1)),bd(zu,Wa),o}finally{z=a,Pn=!1}}return null}var At=[],Mt=0,cl=null,pl=0,ze=[],Ee=0,nt=null,da=1,fa="";function Za(e,a){At[Mt++]=pl,At[Mt++]=cl,cl=e,pl=a}function tf(e,a,t){ze[Ee++]=da,ze[Ee++]=fa,ze[Ee++]=nt,nt=e;var r=da;e=fa;var o=32-Ke(r)-1;r&=~(1<<o),t+=1;var l=32-Ke(a)+o;if(30<l){var u=o-o%5;l=(r&(1<<u)-1).toString(32),r>>=u,o-=u,da=1<<32-Ke(a)+o|t<<o|r,fa=l+e}else da=1<<l|t<<o|r,fa=e}function Wu(e){e.return!==null&&(Za(e,1),tf(e,1,0))}function Gu(e){for(;e===cl;)cl=At[--Mt],At[Mt]=null,pl=At[--Mt],At[Mt]=null;for(;e===nt;)nt=ze[--Ee],ze[Ee]=null,fa=ze[--Ee],ze[Ee]=null,da=ze[--Ee],ze[Ee]=null}var Ae=null,Pe=null,_=!1,Ge=null;function rf(e,a){var t=Ue(5,null,null,0);t.elementType="DELETED",t.stateNode=a,t.return=e,a=e.deletions,a===null?(e.deletions=[t],e.flags|=16):a.push(t)}function Ts(e,a){switch(e.tag){case 5:var t=e.type;return a=a.nodeType!==1||t.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(e.stateNode=a,Ae=e,Pe=za(a.firstChild),!0):!1;case 6:return a=e.pendingProps===""||a.nodeType!==3?null:a,a!==null?(e.stateNode=a,Ae=e,Pe=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(t=nt!==null?{id:da,overflow:fa}:null,e.memoizedState={dehydrated:a,treeContext:t,retryLane:1073741824},t=Ue(18,null,null,0),t.stateNode=a,t.return=e,e.child=t,Ae=e,Pe=null,!0):!1;default:return!1}}function su(e){return(e.mode&1)!==0&&(e.flags&128)===0}function du(e){if(_){var a=Pe;if(a){var t=a;if(!Ts(e,a)){if(su(e))throw Error(y(418));a=za(t.nextSibling);var r=Ae;a&&Ts(e,a)?rf(r,t):(e.flags=e.flags&-4097|2,_=!1,Ae=e)}}else{if(su(e))throw Error(y(418));e.flags=e.flags&-4097|2,_=!1,Ae=e}}}function Fs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function qo(e){if(e!==Ae)return!1;if(!_)return Fs(e),_=!0,!1;var a;if((a=e.tag!==3)&&!(a=e.tag!==5)&&(a=e.type,a=a!=="head"&&a!=="body"&&!lu(e.type,e.memoizedProps)),a&&(a=Pe)){if(su(e))throw of(),Error(y(418));for(;a;)rf(e,a),a=za(a.nextSibling)}if(Fs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(a===0){Pe=za(e.nextSibling);break e}a--}else t!=="$"&&t!=="$!"&&t!=="$?"||a++}e=e.nextSibling}Pe=null}}else Pe=Ae?za(e.stateNode.nextSibling):null;return!0}function of(){for(var e=Pe;e;)e=za(e.nextSibling)}function Ht(){Pe=Ae=null,_=!1}function Ku(e){Ge===null?Ge=[e]:Ge.push(e)}var km=xa.ReactCurrentBatchConfig;function fr(e,a,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(y(309));var r=t.stateNode}if(!r)throw Error(y(147,e));var o=r,l=""+e;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===l?a.ref:(a=function(u){var i=o.refs;u===null?delete i[l]:i[l]=u},a._stringRef=l,a)}if(typeof e!="string")throw Error(y(284));if(!t._owner)throw Error(y(290,e))}return e}function Ho(e,a){throw e=Object.prototype.toString.call(a),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e))}function zs(e){var a=e._init;return a(e._payload)}function lf(e){function a(f,d){if(e){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function t(f,d){if(!e)return null;for(;d!==null;)a(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=Oa(f,d),f.index=0,f.sibling=null,f}function l(f,d,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function u(f){return e&&f.alternate===null&&(f.flags|=2),f}function i(f,d,m,v){return d===null||d.tag!==6?(d=Fn(m,f.mode,v),d.return=f,d):(d=o(d,m),d.return=f,d)}function s(f,d,m,v){var k=m.type;return k===wt?h(f,d,m.props.children,v,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ba&&zs(k)===d.type)?(v=o(d,m.props),v.ref=fr(f,d,m),v.return=f,v):(v=el(m.type,m.key,m.props,null,f.mode,v),v.ref=fr(f,d,m),v.return=f,v)}function p(f,d,m,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=zn(m,f.mode,v),d.return=f,d):(d=o(d,m.children||[]),d.return=f,d)}function h(f,d,m,v,k){return d===null||d.tag!==7?(d=ot(m,f.mode,v,k),d.return=f,d):(d=o(d,m),d.return=f,d)}function g(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Fn(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case bo:return m=el(d.type,d.key,d.props,null,f.mode,m),m.ref=fr(f,null,d),m.return=f,m;case It:return d=zn(d,f.mode,m),d.return=f,d;case ba:var v=d._init;return g(f,v(d._payload),m)}if(gr(d)||ur(d))return d=ot(d,f.mode,m,null),d.return=f,d;Ho(f,d)}return null}function x(f,d,m,v){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:i(f,d,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case bo:return m.key===k?s(f,d,m,v):null;case It:return m.key===k?p(f,d,m,v):null;case ba:return k=m._init,x(f,d,k(m._payload),v)}if(gr(m)||ur(m))return k!==null?null:h(f,d,m,v,null);Ho(f,m)}return null}function L(f,d,m,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(m)||null,i(d,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case bo:return f=f.get(v.key===null?m:v.key)||null,s(d,f,v,k);case It:return f=f.get(v.key===null?m:v.key)||null,p(d,f,v,k);case ba:var b=v._init;return L(f,d,m,b(v._payload),k)}if(gr(v)||ur(v))return f=f.get(m)||null,h(d,f,v,k,null);Ho(d,v)}return null}function I(f,d,m,v){for(var k=null,b=null,A=d,M=d=0,F=null;A!==null&&M<m.length;M++){A.index>M?(F=A,A=null):F=A.sibling;var B=x(f,A,m[M],v);if(B===null){A===null&&(A=F);break}e&&A&&B.alternate===null&&a(f,A),d=l(B,d,M),b===null?k=B:b.sibling=B,b=B,A=F}if(M===m.length)return t(f,A),_&&Za(f,M),k;if(A===null){for(;M<m.length;M++)A=g(f,m[M],v),A!==null&&(d=l(A,d,M),b===null?k=A:b.sibling=A,b=A);return _&&Za(f,M),k}for(A=r(f,A);M<m.length;M++)F=L(A,f,M,m[M],v),F!==null&&(e&&F.alternate!==null&&A.delete(F.key===null?M:F.key),d=l(F,d,M),b===null?k=F:b.sibling=F,b=F);return e&&A.forEach(function(ke){return a(f,ke)}),_&&Za(f,M),k}function w(f,d,m,v){var k=ur(m);if(typeof k!="function")throw Error(y(150));if(m=k.call(m),m==null)throw Error(y(151));for(var b=k=null,A=d,M=d=0,F=null,B=m.next();A!==null&&!B.done;M++,B=m.next()){A.index>M?(F=A,A=null):F=A.sibling;var ke=x(f,A,B.value,v);if(ke===null){A===null&&(A=F);break}e&&A&&ke.alternate===null&&a(f,A),d=l(ke,d,M),b===null?k=ke:b.sibling=ke,b=ke,A=F}if(B.done)return t(f,A),_&&Za(f,M),k;if(A===null){for(;!B.done;M++,B=m.next())B=g(f,B.value,v),B!==null&&(d=l(B,d,M),b===null?k=B:b.sibling=B,b=B);return _&&Za(f,M),k}for(A=r(f,A);!B.done;M++,B=m.next())B=L(A,f,M,B.value,v),B!==null&&(e&&B.alternate!==null&&A.delete(B.key===null?M:B.key),d=l(B,d,M),b===null?k=B:b.sibling=B,b=B);return e&&A.forEach(function(Xa){return a(f,Xa)}),_&&Za(f,M),k}function E(f,d,m,v){if(typeof m=="object"&&m!==null&&m.type===wt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case bo:e:{for(var k=m.key,b=d;b!==null;){if(b.key===k){if(k=m.type,k===wt){if(b.tag===7){t(f,b.sibling),d=o(b,m.props.children),d.return=f,f=d;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ba&&zs(k)===b.type){t(f,b.sibling),d=o(b,m.props),d.ref=fr(f,b,m),d.return=f,f=d;break e}t(f,b);break}else a(f,b);b=b.sibling}m.type===wt?(d=ot(m.props.children,f.mode,v,m.key),d.return=f,f=d):(v=el(m.type,m.key,m.props,null,f.mode,v),v.ref=fr(f,d,m),v.return=f,f=v)}return u(f);case It:e:{for(b=m.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){t(f,d.sibling),d=o(d,m.children||[]),d.return=f,f=d;break e}else{t(f,d);break}else a(f,d);d=d.sibling}d=zn(m,f.mode,v),d.return=f,f=d}return u(f);case ba:return b=m._init,E(f,d,b(m._payload),v)}if(gr(m))return I(f,d,m,v);if(ur(m))return w(f,d,m,v);Ho(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(t(f,d.sibling),d=o(d,m),d.return=f,f=d):(t(f,d),d=Fn(m,f.mode,v),d.return=f,f=d),u(f)):t(f,d)}return E}var Vt=lf(!0),nf=lf(!1),ml=_a(null),hl=null,Dt=null,ju=null;function Xu(){ju=Dt=hl=null}function $u(e){var a=ml.current;V(ml),e._currentValue=a}function fu(e,a,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,r!==null&&(r.childLanes|=a)):r!==null&&(r.childLanes&a)!==a&&(r.childLanes|=a),e===t)break;e=e.return}}function Ut(e,a){hl=e,ju=Dt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&a&&(Le=!0),e.firstContext=null)}function Oe(e){var a=e._currentValue;if(ju!==e)if(e={context:e,memoizedValue:a,next:null},Dt===null){if(hl===null)throw Error(y(308));Dt=e,hl.dependencies={lanes:0,firstContext:e}}else Dt=Dt.next=e;return a}var at=null;function Qu(e){at===null?at=[e]:at.push(e)}function uf(e,a,t,r){var o=a.interleaved;return o===null?(t.next=t,Qu(a)):(t.next=o.next,o.next=t),a.interleaved=t,ha(e,r)}function ha(e,a){e.lanes|=a;var t=e.alternate;for(t!==null&&(t.lanes|=a),t=e,e=e.return;e!==null;)e.childLanes|=a,t=e.alternate,t!==null&&(t.childLanes|=a),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Pa=!1;function Yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sf(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ca(e,a){return{eventTime:e,lane:a,tag:0,payload:null,callback:null,next:null}}function Ea(e,a,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var o=r.pending;return o===null?a.next=a:(a.next=o.next,o.next=a),r.pending=a,ha(e,t)}return o=r.interleaved,o===null?(a.next=a,Qu(r)):(a.next=o.next,o.next=a),r.interleaved=a,ha(e,t)}function Xo(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194240)!==0)){var r=a.lanes;r&=e.pendingLanes,t|=r,a.lanes=t,Eu(e,t)}}function Es(e,a){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var u={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?o=l=u:l=l.next=u,t=t.next}while(t!==null);l===null?o=l=a:l=l.next=a}else o=l=a;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}function gl(e,a,t,r){var o=e.updateQueue;Pa=!1;var l=o.firstBaseUpdate,u=o.lastBaseUpdate,i=o.shared.pending;if(i!==null){o.shared.pending=null;var s=i,p=s.next;s.next=null,u===null?l=p:u.next=p,u=s;var h=e.alternate;h!==null&&(h=h.updateQueue,i=h.lastBaseUpdate,i!==u&&(i===null?h.firstBaseUpdate=p:i.next=p,h.lastBaseUpdate=s))}if(l!==null){var g=o.baseState;u=0,h=p=s=null,i=l;do{var x=i.lane,L=i.eventTime;if((r&x)===x){h!==null&&(h=h.next={eventTime:L,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var I=e,w=i;switch(x=a,L=t,w.tag){case 1:if(I=w.payload,typeof I=="function"){g=I.call(L,g,x);break e}g=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=w.payload,x=typeof I=="function"?I.call(L,g,x):I,x==null)break e;g=K({},g,x);break e;case 2:Pa=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[i]:x.push(i))}else L={eventTime:L,lane:x,tag:i.tag,payload:i.payload,callback:i.callback,next:null},h===null?(p=h=L,s=g):h=h.next=L,u|=x;if(i=i.next,i===null){if(i=o.shared.pending,i===null)break;x=i,i=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(h===null&&(s=g),o.baseState=s,o.firstBaseUpdate=p,o.lastBaseUpdate=h,a=o.shared.interleaved,a!==null){o=a;do u|=o.lane,o=o.next;while(o!==a)}else l===null&&(o.shared.lanes=0);it|=u,e.lanes=u,e.memoizedState=g}}function Us(e,a,t){if(e=a.effects,a.effects=null,e!==null)for(a=0;a<e.length;a++){var r=e[a],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(y(191,o));o.call(r)}}}var Xr={},aa=_a(Xr),Or=_a(Xr),qr=_a(Xr);function tt(e){if(e===Xr)throw Error(y(174));return e}function Zu(e,a){switch(O(qr,a),O(Or,e),O(aa,Xr),e=a.nodeType,e){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Gn(null,"");break;default:e=e===8?a.parentNode:a,a=e.namespaceURI||null,e=e.tagName,a=Gn(a,e)}V(aa),O(aa,a)}function _t(){V(aa),V(Or),V(qr)}function df(e){tt(qr.current);var a=tt(aa.current),t=Gn(a,e.type);a!==t&&(O(Or,e),O(aa,t))}function Ju(e){Or.current===e&&(V(aa),V(Or))}var W=_a(0);function xl(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var An=[];function ei(){for(var e=0;e<An.length;e++)An[e]._workInProgressVersionPrimary=null;An.length=0}var $o=xa.ReactCurrentDispatcher,Mn=xa.ReactCurrentBatchConfig,ut=0,G=null,Z=null,ae=null,vl=!1,Cr=!1,Hr=0,bm=0;function se(){throw Error(y(321))}function ai(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!Xe(e[t],a[t]))return!1;return!0}function ti(e,a,t,r,o,l){if(ut=l,G=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,$o.current=e===null||e.memoizedState===null?Dm:Bm,e=t(r,o),Cr){l=0;do{if(Cr=!1,Hr=0,25<=l)throw Error(y(301));l+=1,ae=Z=null,a.updateQueue=null,$o.current=Rm,e=t(r,o)}while(Cr)}if($o.current=yl,a=Z!==null&&Z.next!==null,ut=0,ae=Z=G=null,vl=!1,a)throw Error(y(300));return e}function ri(){var e=Hr!==0;return Hr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?G.memoizedState=ae=e:ae=ae.next=e,ae}function qe(){if(Z===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var a=ae===null?G.memoizedState:ae.next;if(a!==null)ae=a,Z=e;else{if(e===null)throw Error(y(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ae===null?G.memoizedState=ae=e:ae=ae.next=e}return ae}function Vr(e,a){return typeof a=="function"?a(e):a}function Dn(e){var a=qe(),t=a.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var r=Z,o=r.baseQueue,l=t.pending;if(l!==null){if(o!==null){var u=o.next;o.next=l.next,l.next=u}r.baseQueue=o=l,t.pending=null}if(o!==null){l=o.next,r=r.baseState;var i=u=null,s=null,p=l;do{var h=p.lane;if((ut&h)===h)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var g={lane:h,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(i=s=g,u=r):s=s.next=g,G.lanes|=h,it|=h}p=p.next}while(p!==null&&p!==l);s===null?u=r:s.next=i,Xe(r,a.memoizedState)||(Le=!0),a.memoizedState=r,a.baseState=u,a.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do l=o.lane,G.lanes|=l,it|=l,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[a.memoizedState,t.dispatch]}function Bn(e){var a=qe(),t=a.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,l=a.memoizedState;if(o!==null){t.pending=null;var u=o=o.next;do l=e(l,u.action),u=u.next;while(u!==o);Xe(l,a.memoizedState)||(Le=!0),a.memoizedState=l,a.baseQueue===null&&(a.baseState=l),t.lastRenderedState=l}return[l,r]}function ff(){}function cf(e,a){var t=G,r=qe(),o=a(),l=!Xe(r.memoizedState,o);if(l&&(r.memoizedState=o,Le=!0),r=r.queue,oi(hf.bind(null,t,r,e),[e]),r.getSnapshot!==a||l||ae!==null&&ae.memoizedState.tag&1){if(t.flags|=2048,_r(9,mf.bind(null,t,r,o,a),void 0,null),te===null)throw Error(y(349));ut&30||pf(t,a,o)}return o}function pf(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=G.updateQueue,a===null?(a={lastEffect:null,stores:null},G.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function mf(e,a,t,r){a.value=t,a.getSnapshot=r,gf(a)&&xf(e)}function hf(e,a,t){return t(function(){gf(a)&&xf(e)})}function gf(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!Xe(e,t)}catch{return!0}}function xf(e){var a=ha(e,1);a!==null&&je(a,e,1,-1)}function Ns(e){var a=Ze();return typeof e=="function"&&(e=e()),a.memoizedState=a.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:e},a.queue=e,e=e.dispatch=Mm.bind(null,G,e),[a.memoizedState,e]}function _r(e,a,t,r){return e={tag:e,create:a,destroy:t,deps:r,next:null},a=G.updateQueue,a===null?(a={lastEffect:null,stores:null},G.updateQueue=a,a.lastEffect=e.next=e):(t=a.lastEffect,t===null?a.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,a.lastEffect=e)),e}function vf(){return qe().memoizedState}function Qo(e,a,t,r){var o=Ze();G.flags|=e,o.memoizedState=_r(1|a,t,void 0,r===void 0?null:r)}function Bl(e,a,t,r){var o=qe();r=r===void 0?null:r;var l=void 0;if(Z!==null){var u=Z.memoizedState;if(l=u.destroy,r!==null&&ai(r,u.deps)){o.memoizedState=_r(a,t,l,r);return}}G.flags|=e,o.memoizedState=_r(1|a,t,l,r)}function Os(e,a){return Qo(8390656,8,e,a)}function oi(e,a){return Bl(2048,8,e,a)}function yf(e,a){return Bl(4,2,e,a)}function Lf(e,a){return Bl(4,4,e,a)}function If(e,a){if(typeof a=="function")return e=e(),a(e),function(){a(null)};if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function wf(e,a,t){return t=t!=null?t.concat([e]):null,Bl(4,4,If.bind(null,a,e),t)}function li(){}function Sf(e,a){var t=qe();a=a===void 0?null:a;var r=t.memoizedState;return r!==null&&a!==null&&ai(a,r[1])?r[0]:(t.memoizedState=[e,a],e)}function Cf(e,a){var t=qe();a=a===void 0?null:a;var r=t.memoizedState;return r!==null&&a!==null&&ai(a,r[1])?r[0]:(e=e(),t.memoizedState=[e,a],e)}function kf(e,a,t){return ut&21?(Xe(t,a)||(t=Md(),G.lanes|=t,it|=t,e.baseState=!0),a):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=t)}function Pm(e,a){var t=z;z=t!==0&&4>t?t:4,e(!0);var r=Mn.transition;Mn.transition={};try{e(!1),a()}finally{z=t,Mn.transition=r}}function bf(){return qe().memoizedState}function Am(e,a,t){var r=Na(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Pf(e))Af(a,t);else if(t=uf(e,a,t,r),t!==null){var o=ge();je(t,e,r,o),Mf(t,a,r)}}function Mm(e,a,t){var r=Na(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Pf(e))Af(a,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=a.lastRenderedReducer,l!==null))try{var u=a.lastRenderedState,i=l(u,t);if(o.hasEagerState=!0,o.eagerState=i,Xe(i,u)){var s=a.interleaved;s===null?(o.next=o,Qu(a)):(o.next=s.next,s.next=o),a.interleaved=o;return}}catch{}finally{}t=uf(e,a,o,r),t!==null&&(o=ge(),je(t,e,r,o),Mf(t,a,r))}}function Pf(e){var a=e.alternate;return e===G||a!==null&&a===G}function Af(e,a){Cr=vl=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Mf(e,a,t){if(t&4194240){var r=a.lanes;r&=e.pendingLanes,t|=r,a.lanes=t,Eu(e,t)}}var yl={readContext:Oe,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Dm={readContext:Oe,useCallback:function(e,a){return Ze().memoizedState=[e,a===void 0?null:a],e},useContext:Oe,useEffect:Os,useImperativeHandle:function(e,a,t){return t=t!=null?t.concat([e]):null,Qo(4194308,4,If.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Qo(4194308,4,e,a)},useInsertionEffect:function(e,a){return Qo(4,2,e,a)},useMemo:function(e,a){var t=Ze();return a=a===void 0?null:a,e=e(),t.memoizedState=[e,a],e},useReducer:function(e,a,t){var r=Ze();return a=t!==void 0?t(a):a,r.memoizedState=r.baseState=a,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=Am.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var a=Ze();return e={current:e},a.memoizedState=e},useState:Ns,useDebugValue:li,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=Ns(!1),a=e[0];return e=Pm.bind(null,e[1]),Ze().memoizedState=e,[a,e]},useMutableSource:function(){},useSyncExternalStore:function(e,a,t){var r=G,o=Ze();if(_){if(t===void 0)throw Error(y(407));t=t()}else{if(t=a(),te===null)throw Error(y(349));ut&30||pf(r,a,t)}o.memoizedState=t;var l={value:t,getSnapshot:a};return o.queue=l,Os(hf.bind(null,r,l,e),[e]),r.flags|=2048,_r(9,mf.bind(null,r,l,t,a),void 0,null),t},useId:function(){var e=Ze(),a=te.identifierPrefix;if(_){var t=fa,r=da;t=(r&~(1<<32-Ke(r)-1)).toString(32)+t,a=":"+a+"R"+t,t=Hr++,0<t&&(a+="H"+t.toString(32)),a+=":"}else t=bm++,a=":"+a+"r"+t.toString(32)+":";return e.memoizedState=a},unstable_isNewReconciler:!1},Bm={readContext:Oe,useCallback:Sf,useContext:Oe,useEffect:oi,useImperativeHandle:wf,useInsertionEffect:yf,useLayoutEffect:Lf,useMemo:Cf,useReducer:Dn,useRef:vf,useState:function(){return Dn(Vr)},useDebugValue:li,useDeferredValue:function(e){var a=qe();return kf(a,Z.memoizedState,e)},useTransition:function(){var e=Dn(Vr)[0],a=qe().memoizedState;return[e,a]},useMutableSource:ff,useSyncExternalStore:cf,useId:bf,unstable_isNewReconciler:!1},Rm={readContext:Oe,useCallback:Sf,useContext:Oe,useEffect:oi,useImperativeHandle:wf,useInsertionEffect:yf,useLayoutEffect:Lf,useMemo:Cf,useReducer:Bn,useRef:vf,useState:function(){return Bn(Vr)},useDebugValue:li,useDeferredValue:function(e){var a=qe();return Z===null?a.memoizedState=e:kf(a,Z.memoizedState,e)},useTransition:function(){var e=Bn(Vr)[0],a=qe().memoizedState;return[e,a]},useMutableSource:ff,useSyncExternalStore:cf,useId:bf,unstable_isNewReconciler:!1};function _e(e,a){if(e&&e.defaultProps){a=K({},a),e=e.defaultProps;for(var t in e)a[t]===void 0&&(a[t]=e[t]);return a}return a}function cu(e,a,t,r){a=e.memoizedState,t=t(r,a),t=t==null?a:K({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Rl={isMounted:function(e){return(e=e._reactInternals)?ft(e)===e:!1},enqueueSetState:function(e,a,t){e=e._reactInternals;var r=ge(),o=Na(e),l=ca(r,o);l.payload=a,t!=null&&(l.callback=t),a=Ea(e,l,o),a!==null&&(je(a,e,o,r),Xo(a,e,o))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var r=ge(),o=Na(e),l=ca(r,o);l.tag=1,l.payload=a,t!=null&&(l.callback=t),a=Ea(e,l,o),a!==null&&(je(a,e,o,r),Xo(a,e,o))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=ge(),r=Na(e),o=ca(t,r);o.tag=2,a!=null&&(o.callback=a),a=Ea(e,o,r),a!==null&&(je(a,e,r,t),Xo(a,e,r))}};function qs(e,a,t,r,o,l,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,u):a.prototype&&a.prototype.isPureReactComponent?!zr(t,r)||!zr(o,l):!0}function Df(e,a,t){var r=!1,o=Ha,l=a.contextType;return typeof l=="object"&&l!==null?l=Oe(l):(o=we(a)?lt:ce.current,r=a.contextTypes,l=(r=r!=null)?qt(e,o):Ha),a=new a(t,l),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Rl,e.stateNode=a,a._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),a}function Hs(e,a,t,r){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,r),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,r),a.state!==e&&Rl.enqueueReplaceState(a,a.state,null)}function pu(e,a,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Yu(e);var l=a.contextType;typeof l=="object"&&l!==null?o.context=Oe(l):(l=we(a)?lt:ce.current,o.context=qt(e,l)),o.state=e.memoizedState,l=a.getDerivedStateFromProps,typeof l=="function"&&(cu(e,a,l,t),o.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(a=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),a!==o.state&&Rl.enqueueReplaceState(o,o.state,null),gl(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Wt(e,a){try{var t="",r=a;do t+=ip(r),r=r.return;while(r);var o=t}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:a,stack:o,digest:null}}function Rn(e,a,t){return{value:e,source:null,stack:t!=null?t:null,digest:a!=null?a:null}}function mu(e,a){try{console.error(a.value)}catch(t){setTimeout(function(){throw t})}}var Tm=typeof WeakMap=="function"?WeakMap:Map;function Bf(e,a,t){t=ca(-1,t),t.tag=3,t.payload={element:null};var r=a.value;return t.callback=function(){Il||(Il=!0,Cu=r),mu(e,a)},t}function Rf(e,a,t){t=ca(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=a.value;t.payload=function(){return r(o)},t.callback=function(){mu(e,a)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){mu(e,a),typeof r!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})}),t}function Vs(e,a,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Tm;var o=new Set;r.set(a,o)}else o=r.get(a),o===void 0&&(o=new Set,r.set(a,o));o.has(t)||(o.add(t),e=jm.bind(null,e,a,t),a.then(e,e))}function _s(e){do{var a;if((a=e.tag===13)&&(a=e.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return e;e=e.return}while(e!==null);return null}function Ws(e,a,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===a?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(a=ca(-1,1),a.tag=2,Ea(t,a,1))),t.lanes|=1),e)}var Fm=xa.ReactCurrentOwner,Le=!1;function he(e,a,t,r){a.child=e===null?nf(a,null,t,r):Vt(a,e.child,t,r)}function Gs(e,a,t,r,o){t=t.render;var l=a.ref;return Ut(a,o),r=ti(e,a,t,r,l,o),t=ri(),e!==null&&!Le?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~o,ga(e,a,o)):(_&&t&&Wu(a),a.flags|=1,he(e,a,r,o),a.child)}function Ks(e,a,t,r,o){if(e===null){var l=t.type;return typeof l=="function"&&!pi(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(a.tag=15,a.type=l,Tf(e,a,l,r,o)):(e=el(t.type,null,r,a,a.mode,o),e.ref=a.ref,e.return=a,a.child=e)}if(l=e.child,!(e.lanes&o)){var u=l.memoizedProps;if(t=t.compare,t=t!==null?t:zr,t(u,r)&&e.ref===a.ref)return ga(e,a,o)}return a.flags|=1,e=Oa(l,r),e.ref=a.ref,e.return=a,a.child=e}function Tf(e,a,t,r,o){if(e!==null){var l=e.memoizedProps;if(zr(l,r)&&e.ref===a.ref)if(Le=!1,a.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Le=!0);else return a.lanes=e.lanes,ga(e,a,o)}return hu(e,a,t,r,o)}function Ff(e,a,t){var r=a.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(a.mode&1))a.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Rt,be),be|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:e,cachePool:null,transitions:null},a.updateQueue=null,O(Rt,be),be|=e,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,O(Rt,be),be|=r}else l!==null?(r=l.baseLanes|t,a.memoizedState=null):r=t,O(Rt,be),be|=r;return he(e,a,o,t),a.child}function zf(e,a){var t=a.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(a.flags|=512,a.flags|=2097152)}function hu(e,a,t,r,o){var l=we(t)?lt:ce.current;return l=qt(a,l),Ut(a,o),t=ti(e,a,t,r,l,o),r=ri(),e!==null&&!Le?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~o,ga(e,a,o)):(_&&r&&Wu(a),a.flags|=1,he(e,a,t,o),a.child)}function js(e,a,t,r,o){if(we(t)){var l=!0;fl(a)}else l=!1;if(Ut(a,o),a.stateNode===null)Yo(e,a),Df(a,t,r),pu(a,t,r,o),r=!0;else if(e===null){var u=a.stateNode,i=a.memoizedProps;u.props=i;var s=u.context,p=t.contextType;typeof p=="object"&&p!==null?p=Oe(p):(p=we(t)?lt:ce.current,p=qt(a,p));var h=t.getDerivedStateFromProps,g=typeof h=="function"||typeof u.getSnapshotBeforeUpdate=="function";g||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==r||s!==p)&&Hs(a,u,r,p),Pa=!1;var x=a.memoizedState;u.state=x,gl(a,r,u,o),s=a.memoizedState,i!==r||x!==s||Ie.current||Pa?(typeof h=="function"&&(cu(a,t,h,r),s=a.memoizedState),(i=Pa||qs(a,t,i,r,x,s,p))?(g||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(a.flags|=4194308)):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=r,a.memoizedState=s),u.props=r,u.state=s,u.context=p,r=i):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),r=!1)}else{u=a.stateNode,sf(e,a),i=a.memoizedProps,p=a.type===a.elementType?i:_e(a.type,i),u.props=p,g=a.pendingProps,x=u.context,s=t.contextType,typeof s=="object"&&s!==null?s=Oe(s):(s=we(t)?lt:ce.current,s=qt(a,s));var L=t.getDerivedStateFromProps;(h=typeof L=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==g||x!==s)&&Hs(a,u,r,s),Pa=!1,x=a.memoizedState,u.state=x,gl(a,r,u,o);var I=a.memoizedState;i!==g||x!==I||Ie.current||Pa?(typeof L=="function"&&(cu(a,t,L,r),I=a.memoizedState),(p=Pa||qs(a,t,p,r,x,I,s)||!1)?(h||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,I,s),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,I,s)),typeof u.componentDidUpdate=="function"&&(a.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&x===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&x===e.memoizedState||(a.flags|=1024),a.memoizedProps=r,a.memoizedState=I),u.props=r,u.state=I,u.context=s,r=p):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&x===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&x===e.memoizedState||(a.flags|=1024),r=!1)}return gu(e,a,t,r,l,o)}function gu(e,a,t,r,o,l){zf(e,a);var u=(a.flags&128)!==0;if(!r&&!u)return o&&Rs(a,t,!1),ga(e,a,l);r=a.stateNode,Fm.current=a;var i=u&&typeof t.getDerivedStateFromError!="function"?null:r.render();return a.flags|=1,e!==null&&u?(a.child=Vt(a,e.child,null,l),a.child=Vt(a,null,i,l)):he(e,a,i,l),a.memoizedState=r.state,o&&Rs(a,t,!0),a.child}function Ef(e){var a=e.stateNode;a.pendingContext?Bs(e,a.pendingContext,a.pendingContext!==a.context):a.context&&Bs(e,a.context,!1),Zu(e,a.containerInfo)}function Xs(e,a,t,r,o){return Ht(),Ku(o),a.flags|=256,he(e,a,t,r),a.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function vu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uf(e,a,t){var r=a.pendingProps,o=W.current,l=!1,u=(a.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(o&2)!==0),i?(l=!0,a.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),O(W,o&1),e===null)return du(a),e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(a.mode&1?e.data==="$!"?a.lanes=8:a.lanes=1073741824:a.lanes=1,null):(u=r.children,e=r.fallback,l?(r=a.mode,l=a.child,u={mode:"hidden",children:u},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=u):l=zl(u,r,0,null),e=ot(e,r,t,null),l.return=a,e.return=a,l.sibling=e,a.child=l,a.child.memoizedState=vu(t),a.memoizedState=xu,e):ni(a,u));if(o=e.memoizedState,o!==null&&(i=o.dehydrated,i!==null))return zm(e,a,u,r,i,o,t);if(l){l=r.fallback,u=a.mode,o=e.child,i=o.sibling;var s={mode:"hidden",children:r.children};return!(u&1)&&a.child!==o?(r=a.child,r.childLanes=0,r.pendingProps=s,a.deletions=null):(r=Oa(o,s),r.subtreeFlags=o.subtreeFlags&14680064),i!==null?l=Oa(i,l):(l=ot(l,u,t,null),l.flags|=2),l.return=a,r.return=a,r.sibling=l,a.child=r,r=l,l=a.child,u=e.child.memoizedState,u=u===null?vu(t):{baseLanes:u.baseLanes|t,cachePool:null,transitions:u.transitions},l.memoizedState=u,l.childLanes=e.childLanes&~t,a.memoizedState=xu,r}return l=e.child,e=l.sibling,r=Oa(l,{mode:"visible",children:r.children}),!(a.mode&1)&&(r.lanes=t),r.return=a,r.sibling=null,e!==null&&(t=a.deletions,t===null?(a.deletions=[e],a.flags|=16):t.push(e)),a.child=r,a.memoizedState=null,r}function ni(e,a){return a=zl({mode:"visible",children:a},e.mode,0,null),a.return=e,e.child=a}function Vo(e,a,t,r){return r!==null&&Ku(r),Vt(a,e.child,null,t),e=ni(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function zm(e,a,t,r,o,l,u){if(t)return a.flags&256?(a.flags&=-257,r=Rn(Error(y(422))),Vo(e,a,u,r)):a.memoizedState!==null?(a.child=e.child,a.flags|=128,null):(l=r.fallback,o=a.mode,r=zl({mode:"visible",children:r.children},o,0,null),l=ot(l,o,u,null),l.flags|=2,r.return=a,l.return=a,r.sibling=l,a.child=r,a.mode&1&&Vt(a,e.child,null,u),a.child.memoizedState=vu(u),a.memoizedState=xu,l);if(!(a.mode&1))return Vo(e,a,u,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var i=r.dgst;return r=i,l=Error(y(419)),r=Rn(l,r,void 0),Vo(e,a,u,r)}if(i=(u&e.childLanes)!==0,Le||i){if(r=te,r!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|u)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,ha(e,o),je(r,e,o,-1))}return ci(),r=Rn(Error(y(421))),Vo(e,a,u,r)}return o.data==="$?"?(a.flags|=128,a.child=e.child,a=Xm.bind(null,e),o._reactRetry=a,null):(e=l.treeContext,Pe=za(o.nextSibling),Ae=a,_=!0,Ge=null,e!==null&&(ze[Ee++]=da,ze[Ee++]=fa,ze[Ee++]=nt,da=e.id,fa=e.overflow,nt=a),a=ni(a,r.children),a.flags|=4096,a)}function $s(e,a,t){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a),fu(e.return,a,t)}function Tn(e,a,t,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(l.isBackwards=a,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=o)}function Nf(e,a,t){var r=a.pendingProps,o=r.revealOrder,l=r.tail;if(he(e,a,r.children,t),r=W.current,r&2)r=r&1|2,a.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$s(e,t,a);else if(e.tag===19)$s(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(W,r),!(a.mode&1))a.memoizedState=null;else switch(o){case"forwards":for(t=a.child,o=null;t!==null;)e=t.alternate,e!==null&&xl(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=a.child,a.child=null):(o=t.sibling,t.sibling=null),Tn(a,!1,o,t,l);break;case"backwards":for(t=null,o=a.child,a.child=null;o!==null;){if(e=o.alternate,e!==null&&xl(e)===null){a.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Tn(a,!0,t,null,l);break;case"together":Tn(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Yo(e,a){!(a.mode&1)&&e!==null&&(e.alternate=null,a.alternate=null,a.flags|=2)}function ga(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),it|=a.lanes,!(t&a.childLanes))return null;if(e!==null&&a.child!==e.child)throw Error(y(153));if(a.child!==null){for(e=a.child,t=Oa(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Oa(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Em(e,a,t){switch(a.tag){case 3:Ef(a),Ht();break;case 5:df(a);break;case 1:we(a.type)&&fl(a);break;case 4:Zu(a,a.stateNode.containerInfo);break;case 10:var r=a.type._context,o=a.memoizedProps.value;O(ml,r._currentValue),r._currentValue=o;break;case 13:if(r=a.memoizedState,r!==null)return r.dehydrated!==null?(O(W,W.current&1),a.flags|=128,null):t&a.child.childLanes?Uf(e,a,t):(O(W,W.current&1),e=ga(e,a,t),e!==null?e.sibling:null);O(W,W.current&1);break;case 19:if(r=(t&a.childLanes)!==0,e.flags&128){if(r)return Nf(e,a,t);a.flags|=128}if(o=a.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),O(W,W.current),r)break;return null;case 22:case 23:return a.lanes=0,Ff(e,a,t)}return ga(e,a,t)}var Of,yu,qf,Hf;Of=function(e,a){for(var t=a.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break;for(;t.sibling===null;){if(t.return===null||t.return===a)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};yu=function(){};qf=function(e,a,t,r){var o=e.memoizedProps;if(o!==r){e=a.stateNode,tt(aa.current);var l=null;switch(t){case"input":o=Hn(e,o),r=Hn(e,r),l=[];break;case"select":o=K({},o,{value:void 0}),r=K({},r,{value:void 0}),l=[];break;case"textarea":o=Wn(e,o),r=Wn(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=sl)}Kn(t,r);var u;t=null;for(p in o)if(!r.hasOwnProperty(p)&&o.hasOwnProperty(p)&&o[p]!=null)if(p==="style"){var i=o[p];for(u in i)i.hasOwnProperty(u)&&(t||(t={}),t[u]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Ar.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in r){var s=r[p];if(i=o!=null?o[p]:void 0,r.hasOwnProperty(p)&&s!==i&&(s!=null||i!=null))if(p==="style")if(i){for(u in i)!i.hasOwnProperty(u)||s&&s.hasOwnProperty(u)||(t||(t={}),t[u]="");for(u in s)s.hasOwnProperty(u)&&i[u]!==s[u]&&(t||(t={}),t[u]=s[u])}else t||(l||(l=[]),l.push(p,t)),t=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(l=l||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Ar.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&H("scroll",e),l||i===s||(l=[])):(l=l||[]).push(p,s))}t&&(l=l||[]).push("style",t);var p=l;(a.updateQueue=p)&&(a.flags|=4)}};Hf=function(e,a,t,r){t!==r&&(a.flags|=4)};function cr(e,a){if(!_)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(a)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,a}function Um(e,a,t){var r=a.pendingProps;switch(Gu(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(a),null;case 1:return we(a.type)&&dl(),de(a),null;case 3:return r=a.stateNode,_t(),V(Ie),V(ce),ei(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qo(a)?a.flags|=4:e===null||e.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,Ge!==null&&(Pu(Ge),Ge=null))),yu(e,a),de(a),null;case 5:Ju(a);var o=tt(qr.current);if(t=a.type,e!==null&&a.stateNode!=null)qf(e,a,t,r,o),e.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!r){if(a.stateNode===null)throw Error(y(166));return de(a),null}if(e=tt(aa.current),qo(a)){r=a.stateNode,t=a.type;var l=a.memoizedProps;switch(r[Je]=a,r[Nr]=l,e=(a.mode&1)!==0,t){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<vr.length;o++)H(vr[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":rs(r,l),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},H("invalid",r);break;case"textarea":ls(r,l),H("invalid",r)}Kn(t,l),o=null;for(var u in l)if(l.hasOwnProperty(u)){var i=l[u];u==="children"?typeof i=="string"?r.textContent!==i&&(l.suppressHydrationWarning!==!0&&Oo(r.textContent,i,e),o=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&Oo(r.textContent,i,e),o=["children",""+i]):Ar.hasOwnProperty(u)&&i!=null&&u==="onScroll"&&H("scroll",r)}switch(t){case"input":Po(r),os(r,l,!0);break;case"textarea":Po(r),ns(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=sl)}r=o,a.updateQueue=r,r!==null&&(a.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=md(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(t,{is:r.is}):(e=u.createElement(t),t==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,t),e[Je]=a,e[Nr]=r,Of(e,a,!1,!1),a.stateNode=e;e:{switch(u=jn(t,r),t){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<vr.length;o++)H(vr[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":rs(e,r),o=Hn(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=K({},r,{value:void 0}),H("invalid",e);break;case"textarea":ls(e,r),o=Wn(e,r),H("invalid",e);break;default:o=r}Kn(t,o),i=o;for(l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="style"?xd(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&hd(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Mr(e,s):typeof s=="number"&&Mr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ar.hasOwnProperty(l)?s!=null&&l==="onScroll"&&H("scroll",e):s!=null&&Du(e,l,s,u))}switch(t){case"input":Po(e),os(e,r,!1);break;case"textarea":Po(e),ns(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qa(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Tt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Tt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=sl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return de(a),null;case 6:if(e&&a.stateNode!=null)Hf(e,a,e.memoizedProps,r);else{if(typeof r!="string"&&a.stateNode===null)throw Error(y(166));if(t=tt(qr.current),tt(aa.current),qo(a)){if(r=a.stateNode,t=a.memoizedProps,r[Je]=a,(l=r.nodeValue!==t)&&(e=Ae,e!==null))switch(e.tag){case 3:Oo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Oo(r.nodeValue,t,(e.mode&1)!==0)}l&&(a.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Je]=a,a.stateNode=r}return de(a),null;case 13:if(V(W),r=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_&&Pe!==null&&a.mode&1&&!(a.flags&128))of(),Ht(),a.flags|=98560,l=!1;else if(l=qo(a),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(y(318));if(l=a.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(317));l[Je]=a}else Ht(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;de(a),l=!1}else Ge!==null&&(Pu(Ge),Ge=null),l=!0;if(!l)return a.flags&65536?a:null}return a.flags&128?(a.lanes=t,a):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(a.child.flags|=8192,a.mode&1&&(e===null||W.current&1?J===0&&(J=3):ci())),a.updateQueue!==null&&(a.flags|=4),de(a),null);case 4:return _t(),yu(e,a),e===null&&Er(a.stateNode.containerInfo),de(a),null;case 10:return $u(a.type._context),de(a),null;case 17:return we(a.type)&&dl(),de(a),null;case 19:if(V(W),l=a.memoizedState,l===null)return de(a),null;if(r=(a.flags&128)!==0,u=l.rendering,u===null)if(r)cr(l,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=a.child;e!==null;){if(u=xl(e),u!==null){for(a.flags|=128,cr(l,!1),r=u.updateQueue,r!==null&&(a.updateQueue=r,a.flags|=4),a.subtreeFlags=0,r=t,t=a.child;t!==null;)l=t,e=r,l.flags&=14680066,u=l.alternate,u===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=u.childLanes,l.lanes=u.lanes,l.child=u.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=u.memoizedProps,l.memoizedState=u.memoizedState,l.updateQueue=u.updateQueue,l.type=u.type,e=u.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return O(W,W.current&1|2),a.child}e=e.sibling}l.tail!==null&&$()>Gt&&(a.flags|=128,r=!0,cr(l,!1),a.lanes=4194304)}else{if(!r)if(e=xl(u),e!==null){if(a.flags|=128,r=!0,t=e.updateQueue,t!==null&&(a.updateQueue=t,a.flags|=4),cr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!_)return de(a),null}else 2*$()-l.renderingStartTime>Gt&&t!==1073741824&&(a.flags|=128,r=!0,cr(l,!1),a.lanes=4194304);l.isBackwards?(u.sibling=a.child,a.child=u):(t=l.last,t!==null?t.sibling=u:a.child=u,l.last=u)}return l.tail!==null?(a=l.tail,l.rendering=a,l.tail=a.sibling,l.renderingStartTime=$(),a.sibling=null,t=W.current,O(W,r?t&1|2:t&1),a):(de(a),null);case 22:case 23:return fi(),r=a.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(a.flags|=8192),r&&a.mode&1?be&1073741824&&(de(a),a.subtreeFlags&6&&(a.flags|=8192)):de(a),null;case 24:return null;case 25:return null}throw Error(y(156,a.tag))}function Nm(e,a){switch(Gu(a),a.tag){case 1:return we(a.type)&&dl(),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return _t(),V(Ie),V(ce),ei(),e=a.flags,e&65536&&!(e&128)?(a.flags=e&-65537|128,a):null;case 5:return Ju(a),null;case 13:if(V(W),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(y(340));Ht()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return V(W),null;case 4:return _t(),null;case 10:return $u(a.type._context),null;case 22:case 23:return fi(),null;case 24:return null;default:return null}}var _o=!1,fe=!1,Om=typeof WeakSet=="function"?WeakSet:Set,C=null;function Bt(e,a){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){j(e,a,r)}else t.current=null}function Lu(e,a,t){try{t()}catch(r){j(e,a,r)}}var Qs=!1;function qm(e,a){if(ru=nl,e=Gd(),_u(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var u=0,i=-1,s=-1,p=0,h=0,g=e,x=null;a:for(;;){for(var L;g!==t||o!==0&&g.nodeType!==3||(i=u+o),g!==l||r!==0&&g.nodeType!==3||(s=u+r),g.nodeType===3&&(u+=g.nodeValue.length),(L=g.firstChild)!==null;)x=g,g=L;for(;;){if(g===e)break a;if(x===t&&++p===o&&(i=u),x===l&&++h===r&&(s=u),(L=g.nextSibling)!==null)break;g=x,x=g.parentNode}g=L}t=i===-1||s===-1?null:{start:i,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(ou={focusedElem:e,selectionRange:t},nl=!1,C=a;C!==null;)if(a=C,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,C=e;else for(;C!==null;){a=C;try{var I=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var w=I.memoizedProps,E=I.memoizedState,f=a.stateNode,d=f.getSnapshotBeforeUpdate(a.elementType===a.type?w:_e(a.type,w),E);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=a.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){j(a,a.return,v)}if(e=a.sibling,e!==null){e.return=a.return,C=e;break}C=a.return}return I=Qs,Qs=!1,I}function kr(e,a,t){var r=a.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Lu(a,t,l)}o=o.next}while(o!==r)}}function Tl(e,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var t=a=a.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==a)}}function Iu(e){var a=e.ref;if(a!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof a=="function"?a(e):a.current=e}}function Vf(e){var a=e.alternate;a!==null&&(e.alternate=null,Vf(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&(delete a[Je],delete a[Nr],delete a[uu],delete a[wm],delete a[Sm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _f(e){return e.tag===5||e.tag===3||e.tag===4}function Ys(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wu(e,a,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,a?t.nodeType===8?t.parentNode.insertBefore(e,a):t.insertBefore(e,a):(t.nodeType===8?(a=t.parentNode,a.insertBefore(e,t)):(a=t,a.appendChild(e)),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=sl));else if(r!==4&&(e=e.child,e!==null))for(wu(e,a,t),e=e.sibling;e!==null;)wu(e,a,t),e=e.sibling}function Su(e,a,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Su(e,a,t),e=e.sibling;e!==null;)Su(e,a,t),e=e.sibling}var re=null,We=!1;function ka(e,a,t){for(t=t.child;t!==null;)Wf(e,a,t),t=t.sibling}function Wf(e,a,t){if(ea&&typeof ea.onCommitFiberUnmount=="function")try{ea.onCommitFiberUnmount(kl,t)}catch{}switch(t.tag){case 5:fe||Bt(t,a);case 6:var r=re,o=We;re=null,ka(e,a,t),re=r,We=o,re!==null&&(We?(e=re,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):re.removeChild(t.stateNode));break;case 18:re!==null&&(We?(e=re,t=t.stateNode,e.nodeType===8?bn(e.parentNode,t):e.nodeType===1&&bn(e,t),Tr(e)):bn(re,t.stateNode));break;case 4:r=re,o=We,re=t.stateNode.containerInfo,We=!0,ka(e,a,t),re=r,We=o;break;case 0:case 11:case 14:case 15:if(!fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,u=l.destroy;l=l.tag,u!==void 0&&(l&2||l&4)&&Lu(t,a,u),o=o.next}while(o!==r)}ka(e,a,t);break;case 1:if(!fe&&(Bt(t,a),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(i){j(t,a,i)}ka(e,a,t);break;case 21:ka(e,a,t);break;case 22:t.mode&1?(fe=(r=fe)||t.memoizedState!==null,ka(e,a,t),fe=r):ka(e,a,t);break;default:ka(e,a,t)}}function Zs(e){var a=e.updateQueue;if(a!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Om),a.forEach(function(r){var o=$m.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Ve(e,a){var t=a.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var l=e,u=a,i=u;e:for(;i!==null;){switch(i.tag){case 5:re=i.stateNode,We=!1;break e;case 3:re=i.stateNode.containerInfo,We=!0;break e;case 4:re=i.stateNode.containerInfo,We=!0;break e}i=i.return}if(re===null)throw Error(y(160));Wf(l,u,o),re=null,We=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(p){j(o,a,p)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)Gf(a,e),a=a.sibling}function Gf(e,a){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(a,e),Ye(e),r&4){try{kr(3,e,e.return),Tl(3,e)}catch(w){j(e,e.return,w)}try{kr(5,e,e.return)}catch(w){j(e,e.return,w)}}break;case 1:Ve(a,e),Ye(e),r&512&&t!==null&&Bt(t,t.return);break;case 5:if(Ve(a,e),Ye(e),r&512&&t!==null&&Bt(t,t.return),e.flags&32){var o=e.stateNode;try{Mr(o,"")}catch(w){j(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,u=t!==null?t.memoizedProps:l,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&cd(o,l),jn(i,u);var p=jn(i,l);for(u=0;u<s.length;u+=2){var h=s[u],g=s[u+1];h==="style"?xd(o,g):h==="dangerouslySetInnerHTML"?hd(o,g):h==="children"?Mr(o,g):Du(o,h,g,p)}switch(i){case"input":Vn(o,l);break;case"textarea":pd(o,l);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var L=l.value;L!=null?Tt(o,!!l.multiple,L,!1):x!==!!l.multiple&&(l.defaultValue!=null?Tt(o,!!l.multiple,l.defaultValue,!0):Tt(o,!!l.multiple,l.multiple?[]:"",!1))}o[Nr]=l}catch(w){j(e,e.return,w)}}break;case 6:if(Ve(a,e),Ye(e),r&4){if(e.stateNode===null)throw Error(y(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(w){j(e,e.return,w)}}break;case 3:if(Ve(a,e),Ye(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Tr(a.containerInfo)}catch(w){j(e,e.return,w)}break;case 4:Ve(a,e),Ye(e);break;case 13:Ve(a,e),Ye(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(si=$())),r&4&&Zs(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(fe=(p=fe)||h,Ve(a,e),fe=p):Ve(a,e),Ye(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(g=C=h;C!==null;){switch(x=C,L=x.child,x.tag){case 0:case 11:case 14:case 15:kr(4,x,x.return);break;case 1:Bt(x,x.return);var I=x.stateNode;if(typeof I.componentWillUnmount=="function"){r=x,t=x.return;try{a=r,I.props=a.memoizedProps,I.state=a.memoizedState,I.componentWillUnmount()}catch(w){j(r,t,w)}}break;case 5:Bt(x,x.return);break;case 22:if(x.memoizedState!==null){ed(g);continue}}L!==null?(L.return=x,C=L):ed(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{o=g.stateNode,p?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=g.stateNode,s=g.memoizedProps.style,u=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=gd("display",u))}catch(w){j(e,e.return,w)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=p?"":g.memoizedProps}catch(w){j(e,e.return,w)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ve(a,e),Ye(e),r&4&&Zs(e);break;case 21:break;default:Ve(a,e),Ye(e)}}function Ye(e){var a=e.flags;if(a&2){try{e:{for(var t=e.return;t!==null;){if(_f(t)){var r=t;break e}t=t.return}throw Error(y(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Mr(o,""),r.flags&=-33);var l=Ys(e);Su(e,l,o);break;case 3:case 4:var u=r.stateNode.containerInfo,i=Ys(e);wu(e,i,u);break;default:throw Error(y(161))}}catch(s){j(e,e.return,s)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Hm(e,a,t){C=e,Kf(e,a,t)}function Kf(e,a,t){for(var r=(e.mode&1)!==0;C!==null;){var o=C,l=o.child;if(o.tag===22&&r){var u=o.memoizedState!==null||_o;if(!u){var i=o.alternate,s=i!==null&&i.memoizedState!==null||fe;i=_o;var p=fe;if(_o=u,(fe=s)&&!p)for(C=o;C!==null;)u=C,s=u.child,u.tag===22&&u.memoizedState!==null?ad(o):s!==null?(s.return=u,C=s):ad(o);for(;l!==null;)C=l,Kf(l,a,t),l=l.sibling;C=o,_o=i,fe=p}Js(e,a,t)}else o.subtreeFlags&8772&&l!==null?(l.return=o,C=l):Js(e,a,t)}}function Js(e){for(;C!==null;){var a=C;if(a.flags&8772){var t=a.alternate;try{if(a.flags&8772)switch(a.tag){case 0:case 11:case 15:fe||Tl(5,a);break;case 1:var r=a.stateNode;if(a.flags&4&&!fe)if(t===null)r.componentDidMount();else{var o=a.elementType===a.type?t.memoizedProps:_e(a.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=a.updateQueue;l!==null&&Us(a,l,r);break;case 3:var u=a.updateQueue;if(u!==null){if(t=null,a.child!==null)switch(a.child.tag){case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}Us(a,u,t)}break;case 5:var i=a.stateNode;if(t===null&&a.flags&4){t=i;var s=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var p=a.alternate;if(p!==null){var h=p.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Tr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}fe||a.flags&512&&Iu(a)}catch(x){j(a,a.return,x)}}if(a===e){C=null;break}if(t=a.sibling,t!==null){t.return=a.return,C=t;break}C=a.return}}function ed(e){for(;C!==null;){var a=C;if(a===e){C=null;break}var t=a.sibling;if(t!==null){t.return=a.return,C=t;break}C=a.return}}function ad(e){for(;C!==null;){var a=C;try{switch(a.tag){case 0:case 11:case 15:var t=a.return;try{Tl(4,a)}catch(s){j(a,t,s)}break;case 1:var r=a.stateNode;if(typeof r.componentDidMount=="function"){var o=a.return;try{r.componentDidMount()}catch(s){j(a,o,s)}}var l=a.return;try{Iu(a)}catch(s){j(a,l,s)}break;case 5:var u=a.return;try{Iu(a)}catch(s){j(a,u,s)}}}catch(s){j(a,a.return,s)}if(a===e){C=null;break}var i=a.sibling;if(i!==null){i.return=a.return,C=i;break}C=a.return}}var Vm=Math.ceil,Ll=xa.ReactCurrentDispatcher,ui=xa.ReactCurrentOwner,Ne=xa.ReactCurrentBatchConfig,T=0,te=null,Q=null,oe=0,be=0,Rt=_a(0),J=0,Wr=null,it=0,Fl=0,ii=0,br=null,ye=null,si=0,Gt=1/0,ia=null,Il=!1,Cu=null,Ua=null,Wo=!1,Ba=null,wl=0,Pr=0,ku=null,Zo=-1,Jo=0;function ge(){return T&6?$():Zo!==-1?Zo:Zo=$()}function Na(e){return e.mode&1?T&2&&oe!==0?oe&-oe:km.transition!==null?(Jo===0&&(Jo=Md()),Jo):(e=z,e!==0||(e=window.event,e=e===void 0?16:Ed(e.type)),e):1}function je(e,a,t,r){if(50<Pr)throw Pr=0,ku=null,Error(y(185));Gr(e,t,r),(!(T&2)||e!==te)&&(e===te&&(!(T&2)&&(Fl|=t),J===4&&Ma(e,oe)),Se(e,r),t===1&&T===0&&!(a.mode&1)&&(Gt=$()+500,Dl&&Wa()))}function Se(e,a){var t=e.callbackNode;Pp(e,a);var r=ll(e,e===te?oe:0);if(r===0)t!==null&&ss(t),e.callbackNode=null,e.callbackPriority=0;else if(a=r&-r,e.callbackPriority!==a){if(t!=null&&ss(t),a===1)e.tag===0?Cm(td.bind(null,e)):af(td.bind(null,e)),Lm(function(){!(T&6)&&Wa()}),t=null;else{switch(Dd(r)){case 1:t=zu;break;case 4:t=Pd;break;case 16:t=ol;break;case 536870912:t=Ad;break;default:t=ol}t=ec(t,jf.bind(null,e))}e.callbackPriority=a,e.callbackNode=t}}function jf(e,a){if(Zo=-1,Jo=0,T&6)throw Error(y(327));var t=e.callbackNode;if(Nt()&&e.callbackNode!==t)return null;var r=ll(e,e===te?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||a)a=Sl(e,r);else{a=r;var o=T;T|=2;var l=$f();(te!==e||oe!==a)&&(ia=null,Gt=$()+500,rt(e,a));do try{Gm();break}catch(i){Xf(e,i)}while(!0);Xu(),Ll.current=l,T=o,Q!==null?a=0:(te=null,oe=0,a=J)}if(a!==0){if(a===2&&(o=Zn(e),o!==0&&(r=o,a=bu(e,o))),a===1)throw t=Wr,rt(e,0),Ma(e,r),Se(e,$()),t;if(a===6)Ma(e,r);else{if(o=e.current.alternate,!(r&30)&&!_m(o)&&(a=Sl(e,r),a===2&&(l=Zn(e),l!==0&&(r=l,a=bu(e,l))),a===1))throw t=Wr,rt(e,0),Ma(e,r),Se(e,$()),t;switch(e.finishedWork=o,e.finishedLanes=r,a){case 0:case 1:throw Error(y(345));case 2:Ja(e,ye,ia);break;case 3:if(Ma(e,r),(r&130023424)===r&&(a=si+500-$(),10<a)){if(ll(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=nu(Ja.bind(null,e,ye,ia),a);break}Ja(e,ye,ia);break;case 4:if(Ma(e,r),(r&4194240)===r)break;for(a=e.eventTimes,o=-1;0<r;){var u=31-Ke(r);l=1<<u,u=a[u],u>o&&(o=u),r&=~l}if(r=o,r=$()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vm(r/1960))-r,10<r){e.timeoutHandle=nu(Ja.bind(null,e,ye,ia),r);break}Ja(e,ye,ia);break;case 5:Ja(e,ye,ia);break;default:throw Error(y(329))}}}return Se(e,$()),e.callbackNode===t?jf.bind(null,e):null}function bu(e,a){var t=br;return e.current.memoizedState.isDehydrated&&(rt(e,a).flags|=256),e=Sl(e,a),e!==2&&(a=ye,ye=t,a!==null&&Pu(a)),e}function Pu(e){ye===null?ye=e:ye.push.apply(ye,e)}function _m(e){for(var a=e;;){if(a.flags&16384){var t=a.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],l=o.getSnapshot;o=o.value;try{if(!Xe(l(),o))return!1}catch{return!1}}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ma(e,a){for(a&=~ii,a&=~Fl,e.suspendedLanes|=a,e.pingedLanes&=~a,e=e.expirationTimes;0<a;){var t=31-Ke(a),r=1<<t;e[t]=-1,a&=~r}}function td(e){if(T&6)throw Error(y(327));Nt();var a=ll(e,0);if(!(a&1))return Se(e,$()),null;var t=Sl(e,a);if(e.tag!==0&&t===2){var r=Zn(e);r!==0&&(a=r,t=bu(e,r))}if(t===1)throw t=Wr,rt(e,0),Ma(e,a),Se(e,$()),t;if(t===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=a,Ja(e,ye,ia),Se(e,$()),null}function di(e,a){var t=T;T|=1;try{return e(a)}finally{T=t,T===0&&(Gt=$()+500,Dl&&Wa())}}function st(e){Ba!==null&&Ba.tag===0&&!(T&6)&&Nt();var a=T;T|=1;var t=Ne.transition,r=z;try{if(Ne.transition=null,z=1,e)return e()}finally{z=r,Ne.transition=t,T=a,!(T&6)&&Wa()}}function fi(){be=Rt.current,V(Rt)}function rt(e,a){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,ym(t)),Q!==null)for(t=Q.return;t!==null;){var r=t;switch(Gu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:_t(),V(Ie),V(ce),ei();break;case 5:Ju(r);break;case 4:_t();break;case 13:V(W);break;case 19:V(W);break;case 10:$u(r.type._context);break;case 22:case 23:fi()}t=t.return}if(te=e,Q=e=Oa(e.current,null),oe=be=a,J=0,Wr=null,ii=Fl=it=0,ye=br=null,at!==null){for(a=0;a<at.length;a++)if(t=at[a],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,l=t.pending;if(l!==null){var u=l.next;l.next=o,r.next=u}t.pending=r}at=null}return e}function Xf(e,a){do{var t=Q;try{if(Xu(),$o.current=yl,vl){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}vl=!1}if(ut=0,ae=Z=G=null,Cr=!1,Hr=0,ui.current=null,t===null||t.return===null){J=1,Wr=a,Q=null;break}e:{var l=e,u=t.return,i=t,s=a;if(a=oe,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,h=i,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var x=h.alternate;x?(h.updateQueue=x.updateQueue,h.memoizedState=x.memoizedState,h.lanes=x.lanes):(h.updateQueue=null,h.memoizedState=null)}var L=_s(u);if(L!==null){L.flags&=-257,Ws(L,u,i,l,a),L.mode&1&&Vs(l,p,a),a=L,s=p;var I=a.updateQueue;if(I===null){var w=new Set;w.add(s),a.updateQueue=w}else I.add(s);break e}else{if(!(a&1)){Vs(l,p,a),ci();break e}s=Error(y(426))}}else if(_&&i.mode&1){var E=_s(u);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Ws(E,u,i,l,a),Ku(Wt(s,i));break e}}l=s=Wt(s,i),J!==4&&(J=2),br===null?br=[l]:br.push(l),l=u;do{switch(l.tag){case 3:l.flags|=65536,a&=-a,l.lanes|=a;var f=Bf(l,s,a);Es(l,f);break e;case 1:i=s;var d=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ua===null||!Ua.has(m)))){l.flags|=65536,a&=-a,l.lanes|=a;var v=Rf(l,i,a);Es(l,v);break e}}l=l.return}while(l!==null)}Yf(t)}catch(k){a=k,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(!0)}function $f(){var e=Ll.current;return Ll.current=yl,e===null?yl:e}function ci(){(J===0||J===3||J===2)&&(J=4),te===null||!(it&268435455)&&!(Fl&268435455)||Ma(te,oe)}function Sl(e,a){var t=T;T|=2;var r=$f();(te!==e||oe!==a)&&(ia=null,rt(e,a));do try{Wm();break}catch(o){Xf(e,o)}while(!0);if(Xu(),T=t,Ll.current=r,Q!==null)throw Error(y(261));return te=null,oe=0,J}function Wm(){for(;Q!==null;)Qf(Q)}function Gm(){for(;Q!==null&&!vp();)Qf(Q)}function Qf(e){var a=Jf(e.alternate,e,be);e.memoizedProps=e.pendingProps,a===null?Yf(e):Q=a,ui.current=null}function Yf(e){var a=e;do{var t=a.alternate;if(e=a.return,a.flags&32768){if(t=Nm(t,a),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Q=null;return}}else if(t=Um(t,a,be),t!==null){Q=t;return}if(a=a.sibling,a!==null){Q=a;return}Q=a=e}while(a!==null);J===0&&(J=5)}function Ja(e,a,t){var r=z,o=Ne.transition;try{Ne.transition=null,z=1,Km(e,a,t,r)}finally{Ne.transition=o,z=r}return null}function Km(e,a,t,r){do Nt();while(Ba!==null);if(T&6)throw Error(y(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Ap(e,l),e===te&&(Q=te=null,oe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Wo||(Wo=!0,ec(ol,function(){return Nt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Ne.transition,Ne.transition=null;var u=z;z=1;var i=T;T|=4,ui.current=null,qm(e,t),Gf(t,e),mm(ou),nl=!!ru,ou=ru=null,e.current=t,Hm(t,e,o),yp(),T=i,z=u,Ne.transition=l}else e.current=t;if(Wo&&(Wo=!1,Ba=e,wl=o),l=e.pendingLanes,l===0&&(Ua=null),wp(t.stateNode,r),Se(e,$()),a!==null)for(r=e.onRecoverableError,t=0;t<a.length;t++)o=a[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Il)throw Il=!1,e=Cu,Cu=null,e;return wl&1&&e.tag!==0&&Nt(),l=e.pendingLanes,l&1?e===ku?Pr++:(Pr=0,ku=e):Pr=0,Wa(),null}function Nt(){if(Ba!==null){var e=Dd(wl),a=Ne.transition,t=z;try{if(Ne.transition=null,z=16>e?16:e,Ba===null)var r=!1;else{if(e=Ba,Ba=null,wl=0,T&6)throw Error(y(331));var o=T;for(T|=4,C=e.current;C!==null;){var l=C,u=l.child;if(C.flags&16){var i=l.deletions;if(i!==null){for(var s=0;s<i.length;s++){var p=i[s];for(C=p;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:kr(8,h,l)}var g=h.child;if(g!==null)g.return=h,C=g;else for(;C!==null;){h=C;var x=h.sibling,L=h.return;if(Vf(h),h===p){C=null;break}if(x!==null){x.return=L,C=x;break}C=L}}}var I=l.alternate;if(I!==null){var w=I.child;if(w!==null){I.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}C=l}}if(l.subtreeFlags&2064&&u!==null)u.return=l,C=u;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:kr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,C=f;break e}C=l.return}}var d=e.current;for(C=d;C!==null;){u=C;var m=u.child;if(u.subtreeFlags&2064&&m!==null)m.return=u,C=m;else e:for(u=d;C!==null;){if(i=C,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Tl(9,i)}}catch(k){j(i,i.return,k)}if(i===u){C=null;break e}var v=i.sibling;if(v!==null){v.return=i.return,C=v;break e}C=i.return}}if(T=o,Wa(),ea&&typeof ea.onPostCommitFiberRoot=="function")try{ea.onPostCommitFiberRoot(kl,e)}catch{}r=!0}return r}finally{z=t,Ne.transition=a}}return!1}function rd(e,a,t){a=Wt(t,a),a=Bf(e,a,1),e=Ea(e,a,1),a=ge(),e!==null&&(Gr(e,1,a),Se(e,a))}function j(e,a,t){if(e.tag===3)rd(e,e,t);else for(;a!==null;){if(a.tag===3){rd(a,e,t);break}else if(a.tag===1){var r=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ua===null||!Ua.has(r))){e=Wt(t,e),e=Rf(a,e,1),a=Ea(a,e,1),e=ge(),a!==null&&(Gr(a,1,e),Se(a,e));break}}a=a.return}}function jm(e,a,t){var r=e.pingCache;r!==null&&r.delete(a),a=ge(),e.pingedLanes|=e.suspendedLanes&t,te===e&&(oe&t)===t&&(J===4||J===3&&(oe&130023424)===oe&&500>$()-si?rt(e,0):ii|=t),Se(e,a)}function Zf(e,a){a===0&&(e.mode&1?(a=Do,Do<<=1,!(Do&130023424)&&(Do=4194304)):a=1);var t=ge();e=ha(e,a),e!==null&&(Gr(e,a,t),Se(e,t))}function Xm(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),Zf(e,t)}function $m(e,a){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(a),Zf(e,t)}var Jf;Jf=function(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps||Ie.current)Le=!0;else{if(!(e.lanes&t)&&!(a.flags&128))return Le=!1,Em(e,a,t);Le=!!(e.flags&131072)}else Le=!1,_&&a.flags&1048576&&tf(a,pl,a.index);switch(a.lanes=0,a.tag){case 2:var r=a.type;Yo(e,a),e=a.pendingProps;var o=qt(a,ce.current);Ut(a,t),o=ti(null,a,r,e,o,t);var l=ri();return a.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,we(r)?(l=!0,fl(a)):l=!1,a.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Yu(a),o.updater=Rl,a.stateNode=o,o._reactInternals=a,pu(a,r,e,t),a=gu(null,a,r,!0,l,t)):(a.tag=0,_&&l&&Wu(a),he(null,a,o,t),a=a.child),a;case 16:r=a.elementType;e:{switch(Yo(e,a),e=a.pendingProps,o=r._init,r=o(r._payload),a.type=r,o=a.tag=Ym(r),e=_e(r,e),o){case 0:a=hu(null,a,r,e,t);break e;case 1:a=js(null,a,r,e,t);break e;case 11:a=Gs(null,a,r,e,t);break e;case 14:a=Ks(null,a,r,_e(r.type,e),t);break e}throw Error(y(306,r,""))}return a;case 0:return r=a.type,o=a.pendingProps,o=a.elementType===r?o:_e(r,o),hu(e,a,r,o,t);case 1:return r=a.type,o=a.pendingProps,o=a.elementType===r?o:_e(r,o),js(e,a,r,o,t);case 3:e:{if(Ef(a),e===null)throw Error(y(387));r=a.pendingProps,l=a.memoizedState,o=l.element,sf(e,a),gl(a,r,null,t);var u=a.memoizedState;if(r=u.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},a.updateQueue.baseState=l,a.memoizedState=l,a.flags&256){o=Wt(Error(y(423)),a),a=Xs(e,a,r,t,o);break e}else if(r!==o){o=Wt(Error(y(424)),a),a=Xs(e,a,r,t,o);break e}else for(Pe=za(a.stateNode.containerInfo.firstChild),Ae=a,_=!0,Ge=null,t=nf(a,null,r,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ht(),r===o){a=ga(e,a,t);break e}he(e,a,r,t)}a=a.child}return a;case 5:return df(a),e===null&&du(a),r=a.type,o=a.pendingProps,l=e!==null?e.memoizedProps:null,u=o.children,lu(r,o)?u=null:l!==null&&lu(r,l)&&(a.flags|=32),zf(e,a),he(e,a,u,t),a.child;case 6:return e===null&&du(a),null;case 13:return Uf(e,a,t);case 4:return Zu(a,a.stateNode.containerInfo),r=a.pendingProps,e===null?a.child=Vt(a,null,r,t):he(e,a,r,t),a.child;case 11:return r=a.type,o=a.pendingProps,o=a.elementType===r?o:_e(r,o),Gs(e,a,r,o,t);case 7:return he(e,a,a.pendingProps,t),a.child;case 8:return he(e,a,a.pendingProps.children,t),a.child;case 12:return he(e,a,a.pendingProps.children,t),a.child;case 10:e:{if(r=a.type._context,o=a.pendingProps,l=a.memoizedProps,u=o.value,O(ml,r._currentValue),r._currentValue=u,l!==null)if(Xe(l.value,u)){if(l.children===o.children&&!Ie.current){a=ga(e,a,t);break e}}else for(l=a.child,l!==null&&(l.return=a);l!==null;){var i=l.dependencies;if(i!==null){u=l.child;for(var s=i.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=ca(-1,t&-t),s.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var h=p.pending;h===null?s.next=s:(s.next=h.next,h.next=s),p.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),fu(l.return,t,a),i.lanes|=t;break}s=s.next}}else if(l.tag===10)u=l.type===a.type?null:l.child;else if(l.tag===18){if(u=l.return,u===null)throw Error(y(341));u.lanes|=t,i=u.alternate,i!==null&&(i.lanes|=t),fu(u,t,a),u=l.sibling}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===a){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}he(e,a,o.children,t),a=a.child}return a;case 9:return o=a.type,r=a.pendingProps.children,Ut(a,t),o=Oe(o),r=r(o),a.flags|=1,he(e,a,r,t),a.child;case 14:return r=a.type,o=_e(r,a.pendingProps),o=_e(r.type,o),Ks(e,a,r,o,t);case 15:return Tf(e,a,a.type,a.pendingProps,t);case 17:return r=a.type,o=a.pendingProps,o=a.elementType===r?o:_e(r,o),Yo(e,a),a.tag=1,we(r)?(e=!0,fl(a)):e=!1,Ut(a,t),Df(a,r,o),pu(a,r,o,t),gu(null,a,r,!0,e,t);case 19:return Nf(e,a,t);case 22:return Ff(e,a,t)}throw Error(y(156,a.tag))};function ec(e,a){return bd(e,a)}function Qm(e,a,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,a,t,r){return new Qm(e,a,t,r)}function pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ym(e){if(typeof e=="function")return pi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ru)return 11;if(e===Tu)return 14}return 2}function Oa(e,a){var t=e.alternate;return t===null?(t=Ue(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function el(e,a,t,r,o,l){var u=2;if(r=e,typeof e=="function")pi(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case wt:return ot(t.children,o,l,a);case Bu:u=8,o|=8;break;case Un:return e=Ue(12,t,a,o|2),e.elementType=Un,e.lanes=l,e;case Nn:return e=Ue(13,t,a,o),e.elementType=Nn,e.lanes=l,e;case On:return e=Ue(19,t,a,o),e.elementType=On,e.lanes=l,e;case sd:return zl(t,o,l,a);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ud:u=10;break e;case id:u=9;break e;case Ru:u=11;break e;case Tu:u=14;break e;case ba:u=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return a=Ue(u,t,a,o),a.elementType=e,a.type=r,a.lanes=l,a}function ot(e,a,t,r){return e=Ue(7,e,r,a),e.lanes=t,e}function zl(e,a,t,r){return e=Ue(22,e,r,a),e.elementType=sd,e.lanes=t,e.stateNode={isHidden:!1},e}function Fn(e,a,t){return e=Ue(6,e,null,a),e.lanes=t,e}function zn(e,a,t){return a=Ue(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function Zm(e,a,t,r,o){this.tag=a,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vn(0),this.expirationTimes=vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vn(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function mi(e,a,t,r,o,l,u,i,s){return e=new Zm(e,a,t,i,s),a===1?(a=1,l===!0&&(a|=8)):a=0,l=Ue(3,null,null,a),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yu(l),e}function Jm(e,a,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:a,implementation:t}}function ac(e){if(!e)return Ha;e=e._reactInternals;e:{if(ft(e)!==e||e.tag!==1)throw Error(y(170));var a=e;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(we(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(y(171))}if(e.tag===1){var t=e.type;if(we(t))return ef(e,t,a)}return a}function tc(e,a,t,r,o,l,u,i,s){return e=mi(t,r,!0,e,o,l,u,i,s),e.context=ac(null),t=e.current,r=ge(),o=Na(t),l=ca(r,o),l.callback=a!=null?a:null,Ea(t,l,o),e.current.lanes=o,Gr(e,o,r),Se(e,r),e}function El(e,a,t,r){var o=a.current,l=ge(),u=Na(o);return t=ac(t),a.context===null?a.context=t:a.pendingContext=t,a=ca(l,u),a.payload={element:e},r=r===void 0?null:r,r!==null&&(a.callback=r),e=Ea(o,a,u),e!==null&&(je(e,o,u,l),Xo(e,o,u)),u}function Cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function od(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function hi(e,a){od(e,a),(e=e.alternate)&&od(e,a)}function eh(){return null}var rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function gi(e){this._internalRoot=e}Ul.prototype.render=gi.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(y(409));El(e,a,null,null)};Ul.prototype.unmount=gi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;st(function(){El(null,e,null,null)}),a[ma]=null}};function Ul(e){this._internalRoot=e}Ul.prototype.unstable_scheduleHydration=function(e){if(e){var a=Td();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Aa.length&&a!==0&&a<Aa[t].priority;t++);Aa.splice(t,0,e),t===0&&zd(e)}};function xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ld(){}function ah(e,a,t,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var p=Cl(u);l.call(p)}}var u=tc(a,r,e,0,null,!1,!1,"",ld);return e._reactRootContainer=u,e[ma]=u.current,Er(e.nodeType===8?e.parentNode:e),st(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var i=r;r=function(){var p=Cl(s);i.call(p)}}var s=mi(e,0,!1,null,null,!1,!1,"",ld);return e._reactRootContainer=s,e[ma]=s.current,Er(e.nodeType===8?e.parentNode:e),st(function(){El(a,s,t,r)}),s}function Ol(e,a,t,r,o){var l=t._reactRootContainer;if(l){var u=l;if(typeof o=="function"){var i=o;o=function(){var s=Cl(u);i.call(s)}}El(a,u,e,o)}else u=ah(t,a,e,o,r);return Cl(u)}Bd=function(e){switch(e.tag){case 3:var a=e.stateNode;if(a.current.memoizedState.isDehydrated){var t=xr(a.pendingLanes);t!==0&&(Eu(a,t|1),Se(a,$()),!(T&6)&&(Gt=$()+500,Wa()))}break;case 13:st(function(){var r=ha(e,1);if(r!==null){var o=ge();je(r,e,1,o)}}),hi(e,1)}};Uu=function(e){if(e.tag===13){var a=ha(e,134217728);if(a!==null){var t=ge();je(a,e,134217728,t)}hi(e,134217728)}};Rd=function(e){if(e.tag===13){var a=Na(e),t=ha(e,a);if(t!==null){var r=ge();je(t,e,a,r)}hi(e,a)}};Td=function(){return z};Fd=function(e,a){var t=z;try{return z=e,a()}finally{z=t}};$n=function(e,a,t){switch(a){case"input":if(Vn(e,t),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<t.length;a++){var r=t[a];if(r!==e&&r.form===e.form){var o=Ml(r);if(!o)throw Error(y(90));fd(r),Vn(r,o)}}}break;case"textarea":pd(e,t);break;case"select":a=t.value,a!=null&&Tt(e,!!t.multiple,a,!1)}};Ld=di;Id=st;var th={usingClientEntryPoint:!1,Events:[jr,bt,Ml,vd,yd,di]},pr={findFiberByHostInstance:et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rh={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xa.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cd(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||eh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(mr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!mr.isDisabled&&mr.supportsFiber))try{kl=mr.inject(rh),ea=mr}catch{}var mr;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=th;Be.createPortal=function(e,a){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xi(a))throw Error(y(200));return Jm(e,a,null,t)};Be.createRoot=function(e,a){if(!xi(e))throw Error(y(299));var t=!1,r="",o=rc;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=mi(e,1,!1,null,null,t,!1,r,o),e[ma]=a.current,Er(e.nodeType===8?e.parentNode:e),new gi(a)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Cd(a),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return st(e)};Be.hydrate=function(e,a,t){if(!Nl(a))throw Error(y(200));return Ol(null,e,a,!0,t)};Be.hydrateRoot=function(e,a,t){if(!xi(e))throw Error(y(405));var r=t!=null&&t.hydratedSources||null,o=!1,l="",u=rc;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),a=tc(a,null,e,1,t!=null?t:null,o,!1,l,u),e[ma]=a.current,Er(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[t,o]:a.mutableSourceEagerHydrationData.push(t,o);return new Ul(a)};Be.render=function(e,a,t){if(!Nl(a))throw Error(y(200));return Ol(null,e,a,!1,t)};Be.unmountComponentAtNode=function(e){if(!Nl(e))throw Error(y(40));return e._reactRootContainer?(st(function(){Ol(null,null,e,!1,function(){e._reactRootContainer=null,e[ma]=null})}),!0):!1};Be.unstable_batchedUpdates=di;Be.unstable_renderSubtreeIntoContainer=function(e,a,t,r){if(!Nl(t))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Ol(e,a,t,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426"});var uc=na((Ah,nc)=>{"use strict";function lc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc)}catch(e){console.error(e)}}lc(),nc.exports=oc()});var sc=na(vi=>{"use strict";var ic=uc();vi.createRoot=ic.createRoot,vi.hydrateRoot=ic.hydrateRoot;var Mh});var xc=na(Gl=>{"use strict";var sh=Qa(),dh=Symbol.for("react.element"),fh=Symbol.for("react.fragment"),ch=Object.prototype.hasOwnProperty,ph=sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mh={key:!0,ref:!0,__self:!0,__source:!0};function gc(e,a,t){var r,o={},l=null,u=null;t!==void 0&&(l=""+t),a.key!==void 0&&(l=""+a.key),a.ref!==void 0&&(u=a.ref);for(r in a)ch.call(a,r)&&!mh.hasOwnProperty(r)&&(o[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:dh,type:e,key:l,ref:u,props:o,_owner:ph.current}}Gl.Fragment=fh;Gl.jsx=gc;Gl.jsxs=gc});var io=na((Px,vc)=>{"use strict";vc.exports=xc()});var Fx=ua(Qa(),1),kc=ua(sc(),1);var D=ua(Qa(),1);var Hl=ua(Qa());var dc=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ql=(...e)=>e.filter((a,t,r)=>!!a&&r.indexOf(a)===t).join(" ");var $r=ua(Qa());var fc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var cc=(0,$r.forwardRef)(({color:e="currentColor",size:a=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...i},s)=>(0,$r.createElement)("svg",{ref:s,...fc,width:a,height:a,stroke:e,strokeWidth:r?Number(t)*24/Number(a):t,className:ql("lucide",o),...i},[...u.map(([p,h])=>(0,$r.createElement)(p,h)),...Array.isArray(l)?l:[l]]));var P=(e,a)=>{let t=(0,Hl.forwardRef)(({className:r,...o},l)=>(0,Hl.createElement)(cc,{ref:l,iconNode:a,className:ql(`lucide-${dc(e)}`,r),...o}));return t.displayName=`${e}`,t};var Y=P("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);var ta=P("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);var ct=P("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);var Xt=P("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);var va=P("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);var Qr=P("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);var Yr=P("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);var $t=P("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);var Zr=P("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);var Ga=P("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);var Jr=P("Keyboard",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]);var ya=P("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);var pt=P("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);var mt=P("MemoryStick",[["path",{d:"M6 19v-3",key:"1nvgqn"}],["path",{d:"M10 19v-3",key:"iu8nkm"}],["path",{d:"M14 19v-3",key:"kcehxu"}],["path",{d:"M18 19v-3",key:"1vh91z"}],["path",{d:"M8 11V9",key:"63erz4"}],["path",{d:"M16 11V9",key:"fru6f3"}],["path",{d:"M12 11V9",key:"ha00sb"}],["path",{d:"M2 15h20",key:"16ne18"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",key:"lhddv3"}]]);var eo=P("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var Re=P("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);var ao=P("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);var Qt=P("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);var to=P("Mouse",[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]);var ro=P("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);var oo=P("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);var Yt=P("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);var lo=P("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);var Ka=P("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);var ht=P("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);var Zt=P("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);var La=P("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);var gt=P("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);var no=P("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);var Ia=P("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var ne=[{id:"op330s",name:"A4Tech OP-330S Silent Mouse",brand:"A4Tech",category:"mouse",sourcePrice:900,specs:[["Type","Wired mouse"],["Resolution","1200 DPI"],["Connection","USB"],["Clicks","Silent"]],images:[],sourceUrl:"https://www.czone.com.pk/mouse-pakistan-ppt.95.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"op720s",name:"A4Tech OP-720S Silent Mouse",brand:"A4Tech",category:"mouse",sourcePrice:900,specs:[["Type","Wired mouse"],["Resolution","1000 DPI"],["Scrolling","4-way"],["Colour","Black"]],images:[],sourceUrl:"https://www.czone.com.pk/mouse-pakistan-ppt.95.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"b100",name:"Logitech B100 Optical Mouse",brand:"Logitech",category:"mouse",sourcePrice:1e3,specs:[["Type","Optical mouse"],["Connection","USB"]],images:[],sourceUrl:"https://www.czone.com.pk/mouse-pakistan-ppt.95.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"op750s-black",name:"A4Tech OP-750S V-Track \u2014 Black",brand:"A4Tech",category:"mouse",sourcePrice:1e3,specs:[["Resolution","1200 DPI"],["Clicks","Silent"],["Colour","Black"],["Scrolling","4-way"]],images:[],sourceUrl:"https://www.czone.com.pk/mouse-pakistan-ppt.95.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"op620ds",name:"A4Tech OP-620DS Wired Mouse",brand:"A4Tech",category:"mouse",sourcePrice:1100,specs:[["Resolution","1200 DPI"],["Clicks","Silent"],["Colour","Black"]],images:[],sourceUrl:"https://www.czone.com.pk/mouse-pakistan-ppt.95.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"m90",name:"Logitech M90 USB Mouse",brand:"Logitech",category:"mouse",sourcePrice:1150,specs:[["Connection","USB"],["Colour","Black"]],images:[],sourceUrl:"https://www.czone.com.pk/mouse-pakistan-ppt.95.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"fm10s",name:"A4Tech FM10S Silent Mouse",brand:"A4Tech",category:"mouse",sourcePrice:1650,specs:[["Resolution","1600 DPI"],["Buttons","4"],["Colour","Grey"]],images:[],sourceUrl:"https://www.czone.com.pk/mouse-pakistan-ppt.95.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"g102-white",name:"Logitech G102 Lightsync \u2014 White",brand:"Logitech",category:"mouse",sourcePrice:5e3,specs:[["Type","Gaming mouse"],["Colour","White"],["Model","910-005803"]],images:[],sourceUrl:"https://www.czone.com.pk/mouse-pakistan-ppt.95.aspx?sort=1",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"g102-black",name:"Logitech G102 Lightsync \u2014 Black",brand:"Logitech",category:"mouse",sourcePrice:4800,specs:[["Lighting","RGB"],["Buttons","6"],["Colour","Black"],["Model","910-005802"]],images:[],sourceUrl:"https://www.czone.com.pk/mouse-pakistan-ppt.95.aspx?sort=1",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!0},{id:"g304",name:"Logitech G304 LIGHTSPEED",brand:"Logitech",category:"mouse",sourcePrice:7200,specs:[["Type","Gaming mouse"],["Connection","Wireless"],["Colour","Black"]],images:[],sourceUrl:"https://www.czone.com.pk/mouse-pakistan-ppt.95.aspx?sort=1",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!0},{id:"g309",name:"Logitech G309 LIGHTSPEED",brand:"Logitech",category:"mouse",sourcePrice:16500,specs:[["Sensor","HERO 25K"],["Switches","LIGHTFORCE"],["Buttons","6"],["Power","AA battery"]],images:[],sourceUrl:"https://www.czone.com.pk/mouse-pakistan-ppt.95.aspx?sort=1",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"m170",name:"Logitech M170 Wireless Mouse",brand:"Logitech",category:"mouse",sourcePrice:2350,specs:[["Connection","Wireless"],["Colour","Black"],["Model","910-004658"]],images:[],sourceUrl:"https://www.czone.com.pk/mouse-pakistan-ppt.95.aspx?sort=1",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"k120",name:"Logitech K120 USB Keyboard",brand:"Logitech",category:"keyboard",sourcePrice:2100,specs:[["Layout","Full-size with number pad"],["Connection","USB"],["Protection","Spill-resistant"]],images:[],sourceUrl:"https://czone.com.pk/keyboard-logitech-keyboards-logitech-k120-usb-keyboard-pakistan-p.384.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!0},{id:"keys-to-go",name:"Logitech KEYS-TO-GO \u2014 Black",brand:"Logitech",category:"keyboard",sourcePrice:13999,specs:[["Connection","Bluetooth"],["Compatibility","iPhone / iPad / Apple TV / Mac"],["Model","920-006710"]],images:[],sourceUrl:"https://www.czone.com.pk/keyboard-pakistan-ppt.162.aspx?sort=1",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"rapoo-k10",name:"Rapoo K10 Numeric Keyboard",brand:"Rapoo",category:"keyboard",sourcePrice:1e3,specs:[["Keys","23"],["Connection","USB 3.0"],["Colour","Black"]],images:[],sourceUrl:"https://www.czone.com.pk/keyboard-pakistan-ppt.162.aspx?ppt=162&v=2",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"h102",name:"Rapoo H102 Stereo Headset",brand:"Rapoo",category:"audio",sourcePrice:1550,specs:[["Connection","3.5mm dual plug"],["Microphone","Rotating"],["Colour","Black"]],images:[],sourceUrl:"https://www.czone.com.pk/headsets-headphones-mic-pakistan-ppt.175.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"hs8i",name:"A4Tech HS-8i Stereo Headset",brand:"A4Tech",category:"audio",sourcePrice:2050,specs:[["Type","Stereo headset"]],images:[],sourceUrl:"https://www.czone.com.pk/headsets-headphones-mic-pakistan-ppt.175.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"h110",name:"Logitech H110 Stereo Headset",brand:"Logitech",category:"audio",sourcePrice:2100,specs:[["Connection","Dual 3.5mm plug"],["Type","Stereo headset"]],images:[],sourceUrl:"https://www.czone.com.pk/headsets-headphones-mic-pakistan-ppt.175.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"h111",name:"Logitech H111 Multi-Device Headset",brand:"Logitech",category:"audio",sourcePrice:2100,specs:[["Connection","3.5mm"],["Model","981-000588"]],images:[],sourceUrl:"https://www.czone.com.pk/headsets-headphones-mic-pakistan-ppt.175.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!0},{id:"hu5p",name:"A4Tech HU-5P Neckband Headset",brand:"A4Tech",category:"audio",sourcePrice:2350,specs:[["Driver","40mm"],["Controls","Inline with microphone mute"],["Microphone","Rotating omnidirectional"]],images:[],sourceUrl:"https://www.czone.com.pk/headsets-headphones-mic-pakistan-ppt.175.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"hu8",name:"A4Tech HU-8 USB Headset",brand:"A4Tech",category:"audio",sourcePrice:2400,specs:[["Connection","USB"],["Sound","Stereo"],["Colour","Black"]],images:[],sourceUrl:"https://www.czone.com.pk/headsets-headphones-mic-pakistan-ppt.175.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"fh100u",name:"A4Tech FH100U \u2014 Stone Black",brand:"A4Tech",category:"audio",sourcePrice:2850,specs:[["Type","Stereo headset"],["Colour","Stone Black"]],images:[],sourceUrl:"https://www.czone.com.pk/headsets-headphones-mic-pakistan-ppt.175.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"out-of-stock",photoStatus:"pending",featured:!1},{id:"amaze-a680",name:"Amaze Streamify A680 Microphone",brand:"Amaze",category:"audio",sourcePrice:2450,specs:[["Type","Dual wireless microphone"],["Connection","2.4GHz"],["Range","Up to 20m line of sight"]],images:[],sourceUrl:"https://www.czone.com.pk/headsets-headphones-mic-microphone-mic-pakistan-pt.681.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"ugreen-90416",name:"UGREEN 90416 USB Microphone",brand:"UGREEN",category:"audio",sourcePrice:4e3,specs:[["Audio","16-bit / 48kHz"],["Pickup","Omnidirectional"],["Connection","USB"]],images:[],sourceUrl:"https://www.czone.com.pk/headsets-headphones-mic-microphone-mic-pakistan-pt.681.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"bloody-gm20",name:"Bloody GM20 Gaming Microphone",brand:"A4Tech",category:"audio",sourcePrice:4300,specs:[["Type","Gaming microphone"],["Connection","USB"]],images:[],sourceUrl:"https://www.czone.com.pk/headsets-headphones-mic-microphone-mic-pakistan-pt.681.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"maono-t1",name:"MAONO Wave T1 Mini \u2014 USB-C",brand:"MAONO",category:"audio",sourcePrice:8500,specs:[["Type","Lavalier microphone"],["Audio","48kHz / 16-bit"],["Connection","USB-C"],["Model","WM622 PC2"]],images:[],sourceUrl:"https://www.czone.com.pk/headsets-headphones-mic-microphone-mic-pakistan-pt.681.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!0},{id:"ugreen-35629",name:"UGREEN 35629 Condenser Microphone",brand:"UGREEN",category:"audio",sourcePrice:1e4,specs:[["Audio","24-bit / 96kHz"],["Pickup","Cardioid"],["Connection","USB"],["Lighting","RGB"]],images:[],sourceUrl:"https://www.czone.com.pk/headsets-headphones-mic-microphone-mic-pakistan-pt.681.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"maono-pd100w",name:"MAONO PD100W Wireless Microphone",brand:"MAONO",category:"audio",sourcePrice:17800,specs:[["Connection","Wireless / USB"],["Lighting","RGB"],["Monitoring","3.5mm jack"]],images:[],sourceUrl:"https://www.czone.com.pk/headsets-headphones-mic-microphone-mic-pakistan-pt.681.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"lexar-ddr4-8",name:"Lexar 8GB DDR4 Desktop Memory",brand:"Lexar",category:"ram",sourcePrice:15e3,specs:[["Capacity","8GB"],["Memory type","DDR4"],["Speed","3200MHz"],["Form factor","UDIMM"]],images:[],sourceUrl:"https://www.czone.com.pk/memory-module-ram-desktop-ddr4-memory-pakistan-pt.383.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!0},{id:"lexar-ddr4-16",name:"Lexar 16GB DDR4 Desktop Memory",brand:"Lexar",category:"ram",sourcePrice:30500,specs:[["Capacity","16GB"],["Memory type","DDR4"],["Speed","3200MHz"],["Voltage","1.2V"]],images:[],sourceUrl:"https://www.czone.com.pk/memory-module-ram-desktop-ddr4-memory-pakistan-pt.383.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"xpg-d35g-16-white",name:"XPG SPECTRIX D35G 16GB \u2014 White",brand:"XPG",category:"ram",sourcePrice:45e3,specs:[["Capacity","16GB (2\xD78GB)"],["Memory type","DDR4"],["Speed","3200MHz"],["Latency","CL16"]],images:[],sourceUrl:"https://www.czone.com.pk/memory-module-ram-desktop-ddr4-memory-pakistan-pt.383.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"xpg-d35g-16-black",name:"XPG SPECTRIX D35G 16GB \u2014 Black",brand:"XPG",category:"ram",sourcePrice:45e3,specs:[["Capacity","16GB (2\xD78GB)"],["Memory type","DDR4"],["Speed","3200MHz"],["Latency","CL16"]],images:[],sourceUrl:"https://www.czone.com.pk/memory-module-ram-desktop-ddr4-memory-pakistan-pt.383.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"corsair-lpx-32",name:"Corsair Vengeance LPX 32GB",brand:"Corsair",category:"ram",sourcePrice:59990,specs:[["Capacity","32GB (2\xD716GB)"],["Memory type","DDR4"],["Speed","3200MHz"],["Latency","CL16"]],images:[],sourceUrl:"https://www.czone.com.pk/memory-module-ram-desktop-ddr4-memory-pakistan-pt.383.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"xpg-d35g-32",name:"XPG SPECTRIX D35G RGB 32GB",brand:"XPG",category:"ram",sourcePrice:65e3,specs:[["Capacity","32GB (2\xD716GB)"],["Memory type","DDR4"],["Speed","3600MHz"],["Latency","CL18"]],images:[],sourceUrl:"https://www.czone.com.pk/memory-module-ram-desktop-ddr4-memory-pakistan-pt.383.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"lexar-ddr5-8",name:"Lexar 8GB DDR5 Desktop Memory",brand:"Lexar",category:"ram",sourcePrice:30500,specs:[["Capacity","8GB"],["Memory type","DDR5"],["Speed","5600MHz"],["Form factor","UDIMM"]],images:[],sourceUrl:"https://www.czone.com.pk/memory-module-ram-desktop-ddr5-memory-pakistan-pt.129.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"lexar-ddr5-16",name:"Lexar 16GB DDR5 Desktop Memory",brand:"Lexar",category:"ram",sourcePrice:62e3,specs:[["Capacity","16GB"],["Memory type","DDR5"],["Speed","5600MHz"],["Model","LD5U16G56C46ST-BGS"]],images:[],sourceUrl:"https://www.czone.com.pk/memory-module-ram-desktop-ddr5-memory-pakistan-pt.129.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"out-of-stock",photoStatus:"pending",featured:!1},{id:"kingston-fury-16",name:"Kingston FURY Beast RGB 16GB",brand:"Kingston",category:"ram",sourcePrice:69900,specs:[["Capacity","16GB"],["Memory type","DDR5"],["Speed","5600MT/s"],["Latency","CL40"]],images:[],sourceUrl:"https://www.czone.com.pk/memory-module-ram-desktop-ddr5-memory-pakistan-pt.129.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!0},{id:"kingston-6000-16",name:"Kingston FURY Beast 16GB CL30",brand:"Kingston",category:"ram",sourcePrice:72990,specs:[["Capacity","16GB"],["Memory type","DDR5"],["Speed","6000MT/s"],["Latency","CL30"]],images:[],sourceUrl:"https://www.czone.com.pk/memory-module-ram-desktop-ddr5-memory-pakistan-pt.129.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"seagate-1tb",name:"Seagate Expansion Portable 1TB",brand:"Seagate",category:"drives",sourcePrice:25300,specs:[["Capacity","1TB"],["Connection","USB 3.0"],["Type","Portable HDD"],["Model","STKM1000400"]],images:[],sourceUrl:"https://www.czone.com.pk/hard-drives-external-hard-drives-pakistan-pt.178.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"seagate-2tb",name:"Seagate Expansion Portable 2TB",brand:"Seagate",category:"drives",sourcePrice:30990,specs:[["Capacity","2TB"],["Connection","USB 3.0"],["Type","Portable HDD"],["Model","STKM2000400"]],images:[],sourceUrl:"https://www.czone.com.pk/hard-drives-external-hard-drives-pakistan-pt.178.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!0},{id:"wd-passport-2tb",name:"WD My Passport 2TB \u2014 Black",brand:"Western Digital",category:"drives",sourcePrice:31500,specs:[["Capacity","2TB"],["Connection","USB 3.1 / USB 3.0"],["Type","Portable HDD"]],images:[],sourceUrl:"https://www.czone.com.pk/hard-drives-external-hard-drives-pakistan-pt.178.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"transcend-2tb",name:"Transcend StoreJet Rugged 2TB",brand:"Transcend",category:"drives",sourcePrice:35800,specs:[["Capacity","2TB"],["Connection","Micro-USB 3.2 Gen 1"],["Type","Portable HDD"],["Model","TS2TSJ25M3S"]],images:[],sourceUrl:"https://www.czone.com.pk/hard-drives-external-hard-drives-pakistan-pt.178.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"wd-passport-4tb",name:"WD My Passport 4TB \u2014 Black",brand:"Western Digital",category:"drives",sourcePrice:43900,specs:[["Capacity","4TB"],["Connection","USB 3.0"],["Type","Portable HDD"],["Model","WDBPKJ0040BBK"]],images:[],sourceUrl:"https://www.czone.com.pk/hard-drives-external-hard-drives-pakistan-pt.178.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"wd-passport-5tb",name:"WD My Passport 5TB \u2014 Black",brand:"Western Digital",category:"drives",sourcePrice:52e3,specs:[["Capacity","5TB"],["Connection","USB 3.1 / USB 3.0"],["Type","Portable HDD"],["Model","WDBPKJ0050BBK"]],images:[],sourceUrl:"https://www.czone.com.pk/hard-drives-external-hard-drives-pakistan-pt.178.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"wd-mybook-8tb",name:"WD My Book Desktop 8TB",brand:"Western Digital",category:"drives",sourcePrice:89999,specs:[["Capacity","8TB"],["Connection","USB 3.2 Gen 1"],["Type","Desktop external HDD"]],images:[],sourceUrl:"https://www.czone.com.pk/hard-drives-external-hard-drives-pakistan-pt.178.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"seagate-barracuda-8tb",name:"Seagate BarraCuda 8TB",brand:"Seagate",category:"drives",sourcePrice:104999,specs:[["Capacity","8TB"],["Connection","SATA 6Gb/s"],["Cache","256MB"],["Form factor","3.5-inch"]],images:[],sourceUrl:"https://www.czone.com.pk/hard-drives-desktop-sata-hard-drives-pakistan-pt.94.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"seagate-barracuda-24tb",name:"Seagate BarraCuda 24TB",brand:"Seagate",category:"drives",sourcePrice:167e3,specs:[["Capacity","24TB"],["Speed","7200RPM"],["Cache","512MB"],["Form factor","3.5-inch"]],images:[],sourceUrl:"https://www.czone.com.pk/hard-drives-desktop-sata-hard-drives-pakistan-pt.94.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"seagate-exos-4tb",name:"Seagate Exos 7E8 4TB",brand:"Seagate",category:"drives",sourcePrice:57999,specs:[["Capacity","4TB"],["Speed","7200RPM"],["Connection","SATA 6Gb/s"],["Cache","256MB"]],images:[],sourceUrl:"https://www.czone.com.pk/hard-drives-enterprise-hard-drives-pakistan-pt.760.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1},{id:"wd-ultrastar-10tb",name:"WD Ultrastar DC HC330 10TB",brand:"Western Digital",category:"drives",sourcePrice:136999,specs:[["Capacity","10TB"],["Speed","7200RPM"],["Connection","SATA 6Gb/s"],["Cache","256MB"]],images:[],sourceUrl:"https://www.czone.com.pk/hard-drives-enterprise-hard-drives-pakistan-pt.760.aspx",sourceKind:"search-index",retrievedAt:"2026-09-23",liveVerifiedAt:null,availability:"confirm",sourceAvailability:"not-verified",photoStatus:"pending",featured:!1}];var ve={name:"EPIC DEVICES",tagline:"Better devices. Better experiences.",email:"hello@epicdevicesltd.com",phone:"+92 305 7777817",whatsapp:"923057777817",website:"epicdevicesltd.com",city:"Lahore",address:"",addressNote:"Add the verified shop address here before showing it on the site.",currency:"PKR",mode:"enquiry"};var ra=[{id:"mouse",label:"Mouse",plural:"Mice",tagline:"Every move matters.",description:"From everyday precision to your next gaming session.",icon:"Mouse",tone:"blue"},{id:"keyboard",label:"Keyboard",plural:"Keyboards",tagline:"Find your flow.",description:"A better place for your next great idea.",icon:"Keyboard",tone:"sage"},{id:"audio",label:"Headsets & Microphones",plural:"Headsets & microphones",tagline:"Be heard. Get immersed.",description:"Audio for your calls, games and creative projects.",icon:"Headphones",tone:"peach"},{id:"ram",label:"RAM",plural:"Memory",tagline:"Room to do more.",description:"Find the capacity and memory generation your PC needs.",icon:"MemoryStick",tone:"lilac"},{id:"drives",label:"Hard Drives",plural:"Hard drives",tagline:"Keep what matters.",description:"Portable, desktop and enterprise storage to fit your plans.",icon:"HardDrive",tone:"sand"}];function Vl(e){if(!Number.isFinite(e)||e<=0)throw new TypeError("A positive numeric source price is required.");return Math.round(Math.round(e*100)*110/100)}var Te=e=>Vl(e.sourcePrice)/100,pe=e=>"Rs. "+Number(e).toLocaleString("en-PK",{minimumFractionDigits:Number.isInteger(e)?0:2,maximumFractionDigits:2}),yi=e=>String(e||"").toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g," ").trim(),pc={mouse:"mouse",mice:"mouse",keyboard:"keyboard",keyboards:"keyboard",ram:"ram",memory:"ram",headset:"audio",headsets:"audio",headphone:"audio",headphones:"audio",microphone:"audio",microphones:"audio",mic:"audio",hdd:"drives",drive:"drives",drives:"drives"},nh=new Set(["a","an","the","i","want","need","show","me","find","please","for","my","with","some","buy","looking","at","and","hard","rs","pkr"]);function uh(e=""){let a=e.toLowerCase(),t=a.match(/(?:under|below|less than|up to|upto|budget)\s*(?:rs\.?\s*|pkr\s*)?([\d,]+(?:\.\d+)?)(k)?\b/),r=0;t&&(r=Number(t[1].replaceAll(",",""))*(t[2]?1e3:1),a=a.replace(t[0],""));let o=yi(a).split(" ").filter(Boolean),l=o.map(i=>pc[i]).find(Boolean)||"",u=o.filter(i=>!nh.has(i)&&!pc[i]);return o.some(i=>["mic","microphone","microphones"].includes(i))&&u.push("microphone"),o.some(i=>["headset","headsets","headphone","headphones"].includes(i))&&u.push("headset"),{category:l,ceiling:r,terms:u}}function uo(e,{category:a="",query:t="",brand:r="",max:o=0,sort:l="featured"}={}){let u=uh(t),i=Math.min(...[Number(o),u.ceiling].filter(p=>p>0))||1/0;return e.filter(p=>(!a||p.category===a)&&(!u.category||p.category===u.category)&&(!r||p.brand===r)&&Te(p)<=i&&u.terms.every(h=>yi(h==="microphone"||h==="headset"?p.name:[p.name,p.brand,...p.specs.flat()].join(" ")).replaceAll(" ","").includes(h.replaceAll(" ","")))).sort((p,h)=>l==="price-asc"?Te(p)-Te(h):l==="price-desc"?Te(h)-Te(p):l==="name"?p.name.localeCompare(h.name):+!!h.featured-+!!p.featured||p.name.localeCompare(h.name))}function _l(e,a,t=1/0){let r=new Set(a.map(o=>o.id));return Array.isArray(e)?[...new Set(e.filter(o=>typeof o=="string"&&r.has(o)))].slice(0,t):[]}function Wl(e,a){if(!Array.isArray(e))return[];let t=new Set(a.map(o=>o.id)),r=new Map;return e.forEach(o=>{var l;!o||!t.has(o.id)||!Number.isFinite(o.quantity)||o.quantity<=0||r.set(o.id,{id:o.id,quantity:Math.min(99,Math.floor(o.quantity)+(((l=r.get(o.id))==null?void 0:l.quantity)||0))})}),[...r.values()]}function mc(e,a){let t=new Map(a.map(r=>[r.id,r]));return Wl(e,a).reduce((r,o)=>r+Vl(t.get(o.id).sourcePrice)*o.quantity,0)}var hc=`/* ============================================================================
   EPIC DEVICES storefront, single brand theme (v5)

   Every colour comes from the logo: the blue of the slanted E (bright at the
   top, deep cobalt at the base) and the graphite of the D. Nothing else is
   used as an accent, so the whole site reads as one brand.

   Shape rule: buttons and inputs 10px, cards 16px, large panels 24px,
   filter chips are pills. Primary actions carry the slant of the logo's E.
   Fonts are self hosted and declared in shell.head.html:
     Epic Display = Saira (variable width, echoes the extended EPIC wordmark)
     Epic Text    = Plus Jakarta Sans
   ========================================================================== */

.v4 {
  --blue: #0b5ce6;
  --blue-hi: #1f6ff2;
  --blue-deep: #0033a6;
  --blue-press: #0847b8;
  --ink: #17202a;
  --ink-2: #434f5e;
  --ink-3: #647081;
  --ink-4: #97a2b1;
  --line: #dbe2ec;
  --line-2: #e9edf3;
  --page: #f5f7fa;
  --paper: #ffffff;
  --ice: #e9f0fb;
  --ice-2: #f2f6fc;
  --ice-3: #dbe6f8;
  --grad: linear-gradient(135deg, #1f6ff2 0%, #0b5ce6 42%, #0033a6 100%);
  --font-display: "Epic Display", "Saira", system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-text: "Epic Text", "Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
  --r-control: 10px;
  --r-card: 16px;
  --r-panel: 24px;
  --shadow-1: 0 1px 2px rgba(23, 32, 42, 0.05), 0 2px 8px rgba(11, 92, 230, 0.04);
  --shadow-2: 0 18px 40px -22px rgba(16, 38, 82, 0.35);
  --shadow-3: 0 30px 70px -30px rgba(16, 38, 82, 0.45);
  --ease: cubic-bezier(0.2, 0.7, 0.2, 1);
  --slant: -18deg;
  --z-sticky: 40;
  --z-dock: 50;
  --z-toast: 60;

  min-height: 100vh;
  background: var(--page);
  color: var(--ink);
  font-family: var(--font-text);
  font-size: 15.5px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: clip;
}
.v4 *,
.v4 *::before,
.v4 *::after {
  box-sizing: border-box;
}
.v4 :where(h1, h2, h3, h4, p, dl, dd, figure, fieldset, ul, ol) {
  margin: 0;
}
.v4 :where(ul, ol) {
  padding: 0;
  list-style: none;
}
.v4 :where(h1, h2) {
  font-family: var(--font-display);
  font-stretch: 110%;
  font-weight: 700;
  letter-spacing: -0.012em;
  line-height: 1.04;
  text-wrap: balance;
}
.v4 h3 {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.35;
}
.v4 a {
  color: inherit;
  text-decoration: none;
}
.v4 button,
.v4 input,
.v4 select {
  font: inherit;
  color: inherit;
}
.v4 button {
  cursor: pointer;
  background: none;
  border: 0;
  padding: 0;
}
.v4 button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}
.v4 img {
  max-width: 100%;
  display: block;
}
.v4 :focus-visible {
  outline: 2.5px solid var(--blue);
  outline-offset: 3px;
  border-radius: 6px;
}
.v4 ::selection {
  background: var(--ice-3);
  color: var(--ink);
}
.v4 .container {
  width: min(1320px, 100% - 48px);
  margin-inline: auto;
}
.v4 .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
.v4 .skip {
  position: fixed;
  left: 16px;
  top: -80px;
  z-index: 100;
  background: var(--ink);
  color: #fff;
  padding: 10px 16px;
  border-radius: var(--r-control);
  font-weight: 700;
  transition: top 0.2s;
}
.v4 .skip:focus {
  top: 12px;
}
.v4 main {
  outline: none;
}

/* ---------- buttons ------------------------------------------------------ */
.v4 .button {
  --btn-bg: var(--paper);
  --btn-ink: var(--ink);
  --btn-line: var(--line);
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 0 22px;
  border-radius: var(--r-control);
  font-weight: 700;
  font-size: 0.95rem;
  white-space: nowrap;
  color: var(--btn-ink);
  background: var(--btn-bg);
  box-shadow: inset 0 0 0 1px var(--btn-line);
  transition: transform 0.18s var(--ease), box-shadow 0.18s var(--ease), background-color 0.18s var(--ease), color 0.18s;
}
.v4 .button:hover {
  --btn-line: #c2cddd;
  transform: translateY(-1px);
}
.v4 .button:active {
  transform: translateY(0) scale(0.985);
}
.v4 .button svg {
  flex-shrink: 0;
}
.v4 .button.full {
  width: 100%;
}
/* keep the slanted corners of a full width primary inside its column */
.v4 .button.primary.full,
.v4-dialog .button.primary.full {
  width: calc(100% - 16px);
  margin-inline: 8px;
}
/* The primary action is drawn as a parallelogram, like the bars of the E. The
   element itself stays rectangular, so focus rings are never clipped. */
.v4 .button.primary {
  --btn-ink: #fff;
  background: none;
  box-shadow: none;
  padding: 0 28px;
}
.v4 .button.primary::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: 8px;
  background: var(--grad);
  transform: skewX(var(--slant));
  box-shadow: 0 10px 22px -10px rgba(11, 92, 230, 0.7);
  transition: box-shadow 0.2s var(--ease), filter 0.2s;
}
.v4 .button.primary:hover::before {
  filter: brightness(1.07);
  box-shadow: 0 14px 28px -12px rgba(11, 92, 230, 0.75);
}
.v4 .button.ink {
  --btn-bg: var(--ink);
  --btn-ink: #fff;
  --btn-line: var(--ink);
}
.v4 .button.ink:hover {
  --btn-bg: #212c38;
  --btn-line: #212c38;
}
.v4 .icon-button {
  width: 40px;
  height: 40px;
  border-radius: var(--r-control);
  display: inline-grid;
  place-items: center;
  color: var(--ink-2);
  transition: background-color 0.16s, color 0.16s;
}
.v4 .icon-button:hover {
  background: var(--ice);
  color: var(--blue);
}
.v4 .text-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-weight: 700;
  color: var(--blue);
  transition: gap 0.18s var(--ease), color 0.16s;
}
.v4 .text-link:hover {
  gap: 11px;
}
.v4 .text-button {
  font-weight: 600;
  color: var(--blue);
  font-size: 0.88rem;
}
.v4 .eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 0.84rem;
  color: var(--blue);
}
.v4 .eyebrow::before {
  content: "";
  width: 22px;
  height: 6px;
  border-radius: 2px;
  background: var(--grad);
  transform: skewX(var(--slant));
}

/* ---------- top bar and header --------------------------------------------- */
.v4 .topbar {
  background: var(--ink);
  color: #c9d3e0;
  font-size: 0.8rem;
}
.v4 .topbar .container {
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.v4 .topbar a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-weight: 600;
}
.v4 .topbar a:hover {
  color: #9cc0ff;
}
.v4 .topbar-note {
  color: #a9b5c5;
}
.v4 .site-header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background: rgba(255, 255, 255, 0.93);
  backdrop-filter: saturate(1.6) blur(16px);
  -webkit-backdrop-filter: saturate(1.6) blur(16px);
  border-bottom: 1px solid var(--line-2);
}
.v4 .header-main {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 28px;
  min-height: 76px;
}
.v4 .brand {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}
.v4 .brand img {
  height: 44px;
  width: auto;
}
.v4 .search-box {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 640px;
  width: 100%;
  justify-self: center;
  height: 48px;
  padding: 0 8px 0 16px;
  border-radius: var(--r-control);
  background: var(--page);
  box-shadow: inset 0 0 0 1px var(--line);
  transition: box-shadow 0.18s, background-color 0.18s;
}
.v4 .search-box:focus-within {
  background: var(--paper);
  box-shadow: inset 0 0 0 1.5px var(--blue), 0 0 0 4px rgba(11, 92, 230, 0.12);
}
.v4 .search-box > svg {
  color: var(--ink-3);
  flex-shrink: 0;
}
.v4 .search-box input {
  flex: 1;
  min-width: 0;
  height: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  font-size: 0.95rem;
}
.v4 .search-box input::placeholder {
  color: var(--ink-3);
}
.v4 .search-box input::-webkit-search-cancel-button {
  display: none;
}
.v4 .search-box kbd {
  font-family: var(--font-text);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--ink-3);
  background: var(--paper);
  border-radius: 6px;
  padding: 3px 7px;
  box-shadow: inset 0 0 0 1px var(--line);
  white-space: nowrap;
}
.v4 .search-submit {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: #fff;
  background: var(--blue);
  flex-shrink: 0;
}
.v4 .search-submit:hover {
  background: var(--blue-press);
}
.v4 .suggestions {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  right: 0;
  z-index: 5;
  background: var(--paper);
  border-radius: var(--r-card);
  box-shadow: 0 0 0 1px var(--line), var(--shadow-3);
  padding: 10px;
  animation: pop 0.18s var(--ease);
}
.v4 .suggestions-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--ink-3);
  padding: 4px 8px 8px;
}
.v4 .suggestions [role="option"] {
  width: 100%;
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  text-align: left;
  padding: 7px 8px;
  border-radius: var(--r-control);
}
.v4 .suggestions [role="option"]:hover,
.v4 .suggestions [aria-selected="true"] {
  background: var(--ice-2);
}
.v4 .suggestions b {
  display: block;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.v4 .suggestions small {
  color: var(--ink-3);
  font-size: 0.78rem;
}
.v4 .suggestions strong {
  font-family: var(--font-display);
  font-variant-numeric: tabular-nums;
  font-size: 0.92rem;
}
.v4 .suggestions p {
  padding: 8px;
  color: var(--ink-3);
  font-size: 0.9rem;
}
.v4 .all-results {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: 6px;
  padding: 11px;
  border-radius: var(--r-control);
  background: var(--ice);
  color: var(--blue-press);
  font-weight: 700;
  font-size: 0.88rem;
}
.v4 .header-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}
.v4 .saved-link {
  position: relative;
}
.v4 .saved-link b,
.v4 .bag-button b {
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
  font-size: 0.72rem;
  background: var(--blue);
  color: #fff;
}
.v4 .saved-link b {
  position: absolute;
  top: 1px;
  right: -2px;
}
.v4 .bag-button {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  height: 44px;
  padding: 0 14px;
  border-radius: var(--r-control);
  font-weight: 700;
  box-shadow: inset 0 0 0 1px var(--line);
  transition: box-shadow 0.16s, background-color 0.16s;
}
.v4 .bag-button:hover {
  background: var(--ice-2);
  box-shadow: inset 0 0 0 1px #c2cddd;
}
.v4 .menu-button {
  display: none;
}
.v4 .category-nav {
  display: flex;
  align-items: center;
  gap: 4px;
  min-height: 48px;
}
.v4 .category-nav a,
.v4 .category-nav button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 13px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--ink-2);
  transition: color 0.16s, background-color 0.16s;
}
.v4 .category-nav a:hover {
  color: var(--ink);
  background: var(--ice-2);
}
.v4 .category-nav a.active {
  color: var(--blue);
}
.v4 .category-nav a.active::after {
  content: "";
  position: absolute;
  left: 13px;
  right: 13px;
  bottom: -6px;
  height: 3px;
  border-radius: 2px;
  background: var(--grad);
}
.v4 .category-nav .finder-nav {
  margin-left: auto;
  color: var(--blue);
  font-weight: 700;
}
.v4 .category-nav .finder-nav:hover {
  background: var(--ice);
}

/* ---------- hero slider --------------------------------------------------- */
/* One backdrop is shared by every slide; only the product and the words change,
   so the slider always stays in the same tone. */
.v4 .hero {
  position: relative;
  margin-top: 22px;
  border-radius: var(--r-panel);
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(60% 80% at 72% 48%, #f8fbff 0%, rgba(248, 251, 255, 0) 70%),
    linear-gradient(180deg, #edf3fc 0%, #e3ecfa 100%);
  box-shadow: inset 0 0 0 1px rgba(11, 92, 230, 0.07);
  touch-action: pan-y;
}
.v4 .hero-mark {
  position: absolute;
  z-index: -1;
  right: -6%;
  top: 50%;
  width: min(760px, 60%);
  aspect-ratio: 1.66;
  transform: translateY(-52%);
  background: url("./assets/brand/epic-e-shape.svg") center / contain no-repeat;
  pointer-events: none;
}
.v4 .hero-floor {
  position: absolute;
  z-index: -1;
  left: 50%;
  right: 6%;
  bottom: 14%;
  height: 11%;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(11, 51, 166, 0.12), rgba(11, 51, 166, 0));
  pointer-events: none;
}
.v4 .hero-stage {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  align-items: stretch;
  min-height: clamp(460px, 43vw, 580px);
}
.v4 .hero-copy {
  position: relative;
  display: grid;
  align-content: center;
  padding: 56px 0 108px clamp(28px, 5vw, 72px);
}
.v4 .hero-slide-copy {
  grid-area: 1 / 1;
  opacity: 0;
  visibility: hidden;
  transform: translateY(14px);
  transition: opacity 0.45s var(--ease), transform 0.6s var(--ease), visibility 0s linear 0.45s;
}
.v4 .hero-slide-copy.is-active {
  opacity: 1;
  visibility: visible;
  transform: none;
  transition: opacity 0.55s var(--ease) 0.12s, transform 0.7s var(--ease) 0.12s, visibility 0s;
}
.v4 .hero-kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 0.88rem;
  color: var(--blue-press);
}
.v4 .hero-kicker::before {
  content: "";
  width: 26px;
  height: 7px;
  border-radius: 2px;
  background: var(--grad);
  transform: skewX(var(--slant));
}
.v4 .hero-slide-copy :is(h1, h2) {
  font-size: clamp(2.5rem, 4.8vw, 4.3rem);
  font-stretch: 114%;
  line-height: 0.98;
  letter-spacing: -0.02em;
  color: var(--ink);
}
.v4 .hero-slide-copy :is(h1, h2) span {
  display: block;
  color: var(--blue);
}
.v4 .hero-slide-copy p {
  max-width: 40ch;
  margin-top: 22px;
  font-size: 1.05rem;
  color: var(--ink-2);
}
.v4 .hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px 26px;
  margin-top: 32px;
}
.v4 .hero-actions .text-link {
  color: var(--ink);
}
.v4 .hero-actions .text-link:hover {
  color: var(--blue);
}
.v4 .hero-art {
  position: relative;
  min-height: 320px;
}
.v4 .hero-product {
  position: absolute;
  inset: 7% 8% 10% 4%;
  display: grid;
  place-items: center;
  opacity: 0;
  visibility: hidden;
  transform: translateX(34px) scale(0.97);
  transition: opacity 0.45s var(--ease), transform 0.8s var(--ease), visibility 0s linear 0.45s;
}
.v4 .hero-product.is-active {
  opacity: 1;
  visibility: visible;
  transform: none;
  transition: opacity 0.6s var(--ease), transform 0.9s var(--ease), visibility 0s;
}
.v4 .hero-product img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.v4 .hero-controls {
  position: absolute;
  z-index: 2;
  left: clamp(28px, 5vw, 72px);
  bottom: 36px;
  display: flex;
  align-items: center;
  gap: 18px;
}
.v4 .hero-progress {
  display: flex;
  gap: 8px;
}
.v4 .hero-progress button {
  width: 46px;
  height: 24px;
  display: grid;
  align-items: center;
}
.v4 .hero-progress button::before,
.v4 .hero-progress button i {
  content: "";
  grid-area: 1 / 1;
  height: 4px;
  border-radius: 2px;
  background: rgba(23, 32, 42, 0.16);
}
.v4 .hero-progress button i {
  background: var(--blue);
  transform: scaleX(0);
  transform-origin: left;
}
.v4 .hero-progress button.is-done i {
  transform: scaleX(1);
}
.v4 .hero-progress button.is-active i {
  animation: fill var(--hero-interval, 6500ms) linear forwards;
}
.v4 .hero.is-paused .hero-progress button.is-active i {
  animation-play-state: paused;
}
.v4 .hero.is-static .hero-progress button.is-active i {
  animation: none;
  transform: scaleX(1);
}
.v4 .hero-buttons {
  display: flex;
  gap: 6px;
}
.v4 .hero-buttons button {
  width: 38px;
  height: 38px;
  border-radius: var(--r-control);
  display: grid;
  place-items: center;
  color: var(--ink);
  background: rgba(255, 255, 255, 0.78);
  box-shadow: inset 0 0 0 1px rgba(23, 32, 42, 0.1);
  transition: background-color 0.16s, color 0.16s;
}
.v4 .hero-buttons button:hover {
  background: #fff;
  color: var(--blue);
}

/* ---------- trust strip ------------------------------------------------------ */
.v4 .reassurance {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 26px;
  padding: 30px 0 32px;
  border-bottom: 1px solid var(--line);
}
.v4 .reassurance div {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}
.v4 .reassurance svg {
  flex-shrink: 0;
  color: var(--blue);
  margin-top: 2px;
}
.v4 .reassurance span {
  font-weight: 700;
  font-size: 0.93rem;
  line-height: 1.35;
}
.v4 .reassurance small {
  display: block;
  margin-top: 3px;
  font-weight: 500;
  font-size: 0.84rem;
  color: var(--ink-3);
}

/* ---------- sections -------------------------------------------------------- */
.v4 .section {
  padding: 72px 0 0;
}
.v4 .section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;
}
.v4 .section-heading h2 {
  font-size: clamp(1.75rem, 2.7vw, 2.35rem);
}
.v4 .page-intro {
  margin-top: 12px;
  color: var(--ink-3);
  font-size: 1.05rem;
}

/* categories: one tone for all five */
.v4 .category-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}
.v4 .category-tile {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  padding: 22px 20px 20px;
  min-height: 190px;
  border-radius: var(--r-card);
  background: var(--paper);
  box-shadow: 0 0 0 1px var(--line-2), var(--shadow-1);
  overflow: hidden;
  transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease);
}
.v4 .category-tile .tile-icon {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: var(--ice-2);
  color: var(--blue);
  box-shadow: inset 0 0 0 1px rgba(11, 92, 230, 0.1);
  transition: background-color 0.25s, color 0.25s;
}
.v4 .category-tile h3 {
  font-size: 1.02rem;
}
.v4 .category-tile .tile-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
  color: var(--ink-3);
  font-size: 0.86rem;
}
.v4 .category-tile .tile-meta svg {
  color: var(--blue);
  transition: transform 0.25s var(--ease);
}
.v4 .category-tile:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 0 1px #cdd8e8, var(--shadow-2);
}
.v4 .category-tile:hover .tile-icon {
  background: var(--blue);
  color: #fff;
}
.v4 .category-tile:hover .tile-meta svg {
  transform: translate(2px, -2px);
}

/* chips */
.v4 .pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 22px;
}
.v4 .pills button {
  height: 38px;
  padding: 0 16px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--ink-2);
  background: var(--paper);
  box-shadow: inset 0 0 0 1px var(--line);
  transition: background-color 0.16s, color 0.16s, box-shadow 0.16s;
}
.v4 .pills button:hover {
  color: var(--ink);
  box-shadow: inset 0 0 0 1px #b9c6d8;
}
.v4 .pills button.active {
  color: #fff;
  background: var(--ink);
  box-shadow: none;
}

/* ---------- product cards --------------------------------------------------- */
.v4 .product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}
.v4 .product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--r-card);
  background: var(--paper);
  box-shadow: 0 0 0 1px var(--line-2), var(--shadow-1);
  transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease);
}
.v4 .product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 0 1px #cdd8e8, var(--shadow-2);
}
.v4 .card-visual {
  position: relative;
  padding: 8px 8px 0;
}
.v4 .card-visual > a {
  display: block;
  border-radius: 11px;
  overflow: hidden;
}
.v4 .card-save {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 0 0 1px var(--line-2);
}
.v4 .card-save.selected {
  color: var(--blue);
}
.v4 .quick-button {
  position: absolute;
  left: 50%;
  bottom: 14px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 14px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.8rem;
  color: #fff;
  background: var(--ink);
  opacity: 0;
  transform: translate(-50%, 6px);
  transition: opacity 0.2s, transform 0.25s var(--ease);
}
.v4 .product-card:hover .quick-button,
.v4 .quick-button:focus-visible {
  opacity: 1;
  transform: translate(-50%, 0);
}
.v4 .card-copy {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 14px 18px 18px;
}
.v4 .card-eyebrow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--ink-3);
}
.v4 .card-eyebrow button {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--ink-4);
  transition: background-color 0.16s, color 0.16s;
}
.v4 .card-eyebrow button:hover {
  color: var(--blue);
  background: var(--ice-2);
}
.v4 .card-eyebrow button.selected {
  color: #fff;
  background: var(--blue);
}
.v4 .product-card h3 {
  margin-top: 2px;
  font-size: 0.98rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.7em;
}
.v4 .product-card h3 a:hover {
  color: var(--blue);
}
.v4 .product-card .card-specs {
  margin-top: 6px;
  font-size: 0.84rem;
  color: var(--ink-3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.v4 .card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: auto;
  padding-top: 16px;
}
.v4 .card-bottom strong {
  font-family: var(--font-display);
  font-variant-numeric: tabular-nums;
  font-stretch: 106%;
  font-size: 1.22rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.v4 .card-bottom button {
  width: 42px;
  height: 42px;
  border-radius: var(--r-control);
  display: grid;
  place-items: center;
  color: #fff;
  background: var(--blue);
  transition: background-color 0.16s, transform 0.16s var(--ease);
}
.v4 .card-bottom button:hover {
  background: var(--blue-press);
}
.v4 .card-bottom button:active {
  transform: scale(0.94);
}
.v4 .availability {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 10px;
  font-size: 0.78rem;
  color: var(--ink-3);
}
.v4 .availability svg {
  color: var(--blue);
  flex-shrink: 0;
}

/* Product visual. Until a real photograph is added, a composed placeholder
   shows the category, the brand and an honest note. */
.v4 .product-image {
  position: relative;
  aspect-ratio: 5 / 4;
  display: grid;
  place-items: center;
  background: linear-gradient(160deg, var(--ice-2) 0%, var(--ice) 100%);
  overflow: hidden;
}
.v4 .product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8%;
  mix-blend-mode: multiply;
}
.v4 .product-image .pi-disc {
  width: 38%;
  max-width: 132px;
  aspect-ratio: 1;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--blue);
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 16px 30px -16px rgba(12, 40, 100, 0.35), inset 0 0 0 1px rgba(11, 92, 230, 0.08);
}
.v4 .product-image .pi-disc svg {
  width: 46%;
  height: 46%;
}
.v4 .product-image .photo-pending {
  position: absolute;
  right: 14px;
  bottom: 12px;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--ink-4);
}
.v4 .product-image.compact {
  aspect-ratio: 1;
  border-radius: 10px;
}
.v4 .product-image.compact .pi-disc {
  width: 66%;
  box-shadow: none;
}

/* ---------- promotions ------------------------------------------------------- */
.v4 .promo-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  gap: 18px;
  padding-top: 72px;
}
.v4 .promo {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 420px;
  padding: 40px;
  border-radius: var(--r-panel);
}
.v4 .promo h2 {
  font-size: clamp(1.9rem, 3vw, 2.7rem);
  font-stretch: 112%;
}
.v4 .promo p {
  max-width: 34ch;
  margin-top: 12px;
}
.v4 .promo .button,
.v4 .promo .text-link {
  margin-top: 26px;
  align-self: flex-start;
}
.v4 .promo-audio {
  background:
    radial-gradient(55% 70% at 74% 40%, #f8fbff 0%, rgba(248, 251, 255, 0) 72%),
    linear-gradient(180deg, #edf3fc 0%, #e3ecfa 100%);
  box-shadow: inset 0 0 0 1px rgba(11, 92, 230, 0.07);
}
.v4 .promo-audio p {
  color: var(--ink-2);
}
.v4 .promo-audio img {
  position: absolute;
  z-index: -1;
  right: 3%;
  top: 6%;
  width: 50%;
  max-width: 380px;
  transition: transform 0.8s var(--ease);
}
.v4 .promo-audio:hover img {
  transform: translateY(-6px) rotate(-1.5deg);
}
.v4 .promo-store {
  color: #fff;
  background: var(--grad);
}
.v4 .promo-store::before,
.v4 .promo-store::after {
  content: "";
  position: absolute;
  z-index: -1;
  right: -40px;
  height: 64px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  transform: skewX(var(--slant));
}
.v4 .promo-store::before {
  top: 40px;
  width: 58%;
}
.v4 .promo-store::after {
  top: 120px;
  width: 42%;
  background: rgba(255, 255, 255, 0.07);
}
.v4 .promo-store p {
  color: rgba(255, 255, 255, 0.86);
}
.v4 .promo-icons {
  display: flex;
  gap: 12px;
  margin-bottom: auto;
}
.v4 .promo-icons span {
  width: 58px;
  height: 58px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.14);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.22);
}
.v4 .promo-store .button {
  --btn-bg: #fff;
  --btn-ink: var(--blue-deep);
  --btn-line: #fff;
}
.v4 .promo-store .button:hover {
  --btn-bg: #eef4ff;
  --btn-line: #eef4ff;
}

/* brands */
.v4 .brand-strip {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 18px;
  margin-top: 72px;
  padding: 26px 0;
  border-block: 1px solid var(--line);
}
.v4 .brand-strip > span {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--ink-3);
}
.v4 .brand-strip ul {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 16px 24px;
}
.v4 .brand-strip li a {
  white-space: nowrap;
  font-family: var(--font-display);
  font-stretch: 112%;
  font-weight: 700;
  font-size: 1.15rem;
  color: #8792a2;
  transition: color 0.18s;
}
.v4 .brand-strip li a:hover {
  color: var(--blue);
}

/* help band */
.v4 .help-band {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 28px;
  margin-top: 72px;
  padding: 32px 36px;
  border-radius: var(--r-panel);
  background: var(--paper);
  box-shadow: 0 0 0 1px var(--line-2), var(--shadow-1);
}
.v4 .help-symbol {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  color: #fff;
  background: var(--grad);
}
.v4 .help-band h2 {
  font-size: clamp(1.45rem, 2.2vw, 1.9rem);
}
.v4 .help-band p {
  margin-top: 8px;
  color: var(--ink-3);
}
.v4 .help-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

/* ---------- shop page -------------------------------------------------------- */
.v4 .breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 22px 0 18px;
  font-size: 0.85rem;
  color: var(--ink-3);
}
.v4 .breadcrumb a:hover {
  color: var(--blue);
}
.v4 .breadcrumb span {
  color: var(--ink);
  font-weight: 600;
}
.v4 .catalogue-hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 40px 44px;
  border-radius: var(--r-panel);
  background:
    radial-gradient(50% 90% at 86% 50%, #f8fbff 0%, rgba(248, 251, 255, 0) 70%),
    linear-gradient(180deg, #edf3fc 0%, #e3ecfa 100%);
  box-shadow: inset 0 0 0 1px rgba(11, 92, 230, 0.07);
}
.v4 .catalogue-hero h1 {
  font-size: clamp(2rem, 3.6vw, 3rem);
  font-stretch: 112%;
}
.v4 .catalogue-hero p {
  margin-top: 12px;
  color: var(--ink-2);
  max-width: 52ch;
}
.v4 .hero-icon {
  flex-shrink: 0;
  width: 132px;
  height: 132px;
  border-radius: 34px;
  display: grid;
  place-items: center;
  color: var(--blue);
  background: rgba(255, 255, 255, 0.84);
  box-shadow: 0 20px 40px -24px rgba(12, 40, 100, 0.45);
}
.v4 .catalogue-hero .hero-bars {
  position: absolute;
  z-index: -1;
  right: 150px;
  top: 50%;
  width: 280px;
  transform: translateY(-50%);
  display: grid;
  gap: 12px;
}
.v4 .catalogue-hero .hero-bars i {
  height: 26px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.62);
  transform: skewX(var(--slant));
}
.v4 .catalogue-hero .hero-bars i:nth-child(2) {
  width: 72%;
}
.v4 .catalogue-layout {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 30px;
  padding-top: 30px;
}
.v4 .filters {
  position: sticky;
  top: 150px;
  align-self: start;
  display: grid;
  gap: 22px;
}
.v4 .filter-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.v4 .filter-title h2 {
  font-family: var(--font-text);
  font-stretch: 100%;
  font-size: 1.02rem;
  letter-spacing: 0;
}
.v4 .filters fieldset {
  border: 0;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 4px;
  min-width: 0;
}
.v4 .filters legend {
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 0.84rem;
  color: var(--ink-3);
}
.v4 .filters fieldset a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 38px;
  padding: 0 12px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--ink-2);
}
.v4 .filters fieldset a span {
  font-size: 0.78rem;
  color: var(--ink-4);
  font-variant-numeric: tabular-nums;
}
.v4 .filters fieldset a:hover {
  background: var(--paper);
  color: var(--ink);
}
.v4 .filters fieldset a.active {
  background: var(--ink);
  color: #fff;
}
.v4 .filters fieldset a.active span {
  color: #aeb9c8;
}
.v4 select {
  width: 100%;
  height: 44px;
  padding: 0 38px 0 13px;
  border: 0;
  border-radius: var(--r-control);
  background:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23434F5E' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")
      right 14px center / 12px no-repeat,
    var(--paper);
  box-shadow: inset 0 0 0 1px var(--line);
  font-weight: 600;
  font-size: 0.9rem;
  appearance: none;
  cursor: pointer;
}
.v4 .filter-tip {
  padding: 20px;
  border-radius: var(--r-card);
  background: var(--paper);
  box-shadow: 0 0 0 1px var(--line-2);
}
.v4 .filter-tip > svg {
  color: var(--blue);
}
.v4 .filter-tip h3 {
  margin-top: 10px;
}
.v4 .filter-tip p {
  margin-top: 6px;
  font-size: 0.86rem;
  color: var(--ink-3);
}
.v4 .filter-tip button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  font-weight: 700;
  font-size: 0.86rem;
  color: var(--blue);
}
.v4 .catalogue-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
  color: var(--ink-3);
}
.v4 .catalogue-toolbar [role="status"] b {
  color: var(--ink);
}
.v4 .catalogue-toolbar label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.88rem;
  white-space: nowrap;
}
.v4 .catalogue-toolbar select {
  width: auto;
  min-width: 200px;
}
.v4 .mobile-filter {
  display: none;
}
.v4 .active-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}
.v4 .active-filters button {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 34px;
  padding: 0 12px 0 14px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.84rem;
  color: var(--blue-press);
  background: var(--ice);
}
.v4 .pagination {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 36px;
}
.v4 .pagination > * {
  min-width: 42px;
  height: 42px;
  border-radius: var(--r-control);
  display: grid;
  place-items: center;
  font-weight: 700;
  background: var(--paper);
  box-shadow: inset 0 0 0 1px var(--line);
}
.v4 .pagination a[aria-current="page"] {
  color: #fff;
  background: var(--blue);
  box-shadow: none;
}
.v4 .empty-state {
  display: grid;
  justify-items: center;
  gap: 12px;
  padding: 64px 24px;
  text-align: center;
  border-radius: var(--r-panel);
}
.v4 .empty-state > svg {
  color: var(--blue);
}
.v4 .empty-state :is(h1, h2) {
  font-size: clamp(1.5rem, 2.4vw, 2rem);
}
.v4 .empty-state p {
  color: var(--ink-3);
  max-width: 44ch;
}
.v4 .empty-state .button {
  margin-top: 10px;
}
.v4 main > .empty-state {
  margin-block: 48px;
  background: var(--paper);
  box-shadow: 0 0 0 1px var(--line-2);
}

/* ---------- product detail ---------------------------------------------------- */
.v4 .product-detail {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: 48px;
  align-items: start;
}
.v4 .detail-visual {
  position: sticky;
  top: 150px;
}
.v4 .detail-visual .product-image {
  aspect-ratio: 1;
  border-radius: var(--r-panel);
}
.v4 .detail-visual .pi-disc {
  width: 34%;
  max-width: 190px;
}
.v4 .detail-visual .photo-pending {
  right: 22px;
  bottom: 20px;
}
.v4 .detail-image-caption {
  margin-top: 12px;
  font-size: 0.82rem;
  color: var(--ink-3);
}
.v4 .detail-brand {
  margin-top: 18px;
  font-family: var(--font-display);
  font-stretch: 118%;
  font-weight: 700;
  color: var(--ink-3);
}
.v4 .detail-copy h1 {
  margin-top: 6px;
  font-size: clamp(1.9rem, 3.2vw, 2.7rem);
  font-stretch: 106%;
}
.v4 .detail-price {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
  font-family: var(--font-display);
  font-variant-numeric: tabular-nums;
  font-stretch: 106%;
  font-size: 2.1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.v4 .detail-price small {
  font-family: var(--font-text);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--ink-3);
  letter-spacing: 0;
}
.v4 .detail-copy .availability {
  margin-top: 8px;
  font-size: 0.86rem;
}
.v4 .spec-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-top: 26px;
}
.v4 .spec-list div {
  padding: 14px 16px;
  border-radius: 12px;
  background: var(--paper);
  box-shadow: 0 0 0 1px var(--line-2);
}
.v4 .spec-list dt {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--ink-3);
}
.v4 .spec-list dd {
  margin-top: 2px;
  font-weight: 700;
}
.v4 .compatibility-note {
  margin-top: 16px;
  padding: 14px 16px;
  border-radius: 12px;
  font-size: 0.88rem;
  color: var(--ink-2);
  background: var(--ice-2);
  box-shadow: inset 3px 0 0 var(--blue);
}
.v4 .purchase-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
}
.v4 .purchase-actions .button {
  flex: 1 1 170px;
}
.v4 .quantity {
  display: inline-flex;
  align-items: center;
  height: 48px;
  border-radius: var(--r-control);
  background: var(--paper);
  box-shadow: inset 0 0 0 1px var(--line);
}
.v4 .quantity button {
  width: 42px;
  height: 100%;
  display: grid;
  place-items: center;
  color: var(--ink-2);
}
.v4 .quantity button:hover:not(:disabled) {
  color: var(--blue);
}
.v4 .quantity output {
  min-width: 30px;
  text-align: center;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}
.v4 .detail-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}
.v4 .detail-tools button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 14px;
  border-radius: var(--r-control);
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--ink-2);
}
.v4 .detail-tools button:hover {
  background: var(--paper);
  color: var(--ink);
}
.v4 .detail-tools button[aria-pressed="true"] {
  color: var(--blue);
}
.v4 .purchase-note {
  margin-top: 14px;
  font-size: 0.85rem;
  color: var(--ink-3);
}
.v4 details {
  border-radius: 12px;
  background: var(--paper);
  box-shadow: 0 0 0 1px var(--line-2);
}
.v4 details + details {
  margin-top: 10px;
}
.v4 summary {
  cursor: pointer;
  padding: 16px 18px;
  font-weight: 700;
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 16px;
}
.v4 summary::-webkit-details-marker {
  display: none;
}
.v4 summary::after {
  content: "+";
  font-family: var(--font-display);
  font-size: 1.3rem;
  line-height: 1;
  color: var(--blue);
}
.v4 details[open] summary::after {
  content: "-";
}
.v4 details p {
  padding: 0 18px 18px;
  color: var(--ink-2);
  font-size: 0.92rem;
}
.v4 .detail-note {
  margin-top: 22px;
}

/* ---------- pages ------------------------------------------------------------- */
.v4 .saved-page h1,
.v4 .help-page h1 {
  margin-top: 14px;
  font-size: clamp(2rem, 3.8vw, 3rem);
  font-stretch: 112%;
}
.v4 .saved-page .product-grid,
.v4 .saved-page .empty-state {
  margin-top: 32px;
}
.v4 .help-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin: 30px 0;
}
.v4 .help-grid article {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 26px;
  border-radius: var(--r-card);
  background: var(--paper);
  box-shadow: 0 0 0 1px var(--line-2), var(--shadow-1);
}
.v4 .help-grid article > svg {
  color: var(--blue);
}
.v4 .help-grid h2 {
  font-size: 1.3rem;
  font-stretch: 106%;
}
.v4 .help-grid p {
  color: var(--ink-2);
  font-size: 0.92rem;
}
.v4 .help-grid .text-link {
  margin-top: auto;
}
.v4 .contact-card {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 30px;
}
.v4 .contact-card a {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  border-radius: var(--r-card);
  background: var(--paper);
  box-shadow: 0 0 0 1px var(--line-2);
  transition: box-shadow 0.18s;
}
.v4 .contact-card a:hover {
  box-shadow: 0 0 0 1.5px var(--blue);
}
.v4 .contact-card svg {
  color: var(--blue);
  flex-shrink: 0;
}
.v4 .contact-card small {
  display: block;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--ink-3);
}

/* ---------- footer -------------------------------------------------------------- */
.v4 .footer {
  margin-top: 88px;
  background: var(--paper);
  border-top: 1px solid var(--line);
}
.v4 .footer-main {
  display: grid;
  grid-template-columns: 1.3fr repeat(3, minmax(0, 1fr));
  gap: 40px;
  padding: 60px 0 48px;
}
.v4 .footer-brand img {
  width: 188px;
  height: auto;
}
.v4 .footer-brand p {
  margin-top: 16px;
  max-width: 34ch;
  color: var(--ink-3);
  font-size: 0.92rem;
}
.v4 .footer-tagline {
  display: block;
  margin-top: 20px;
  font-family: var(--font-display);
  font-stretch: 118%;
  font-weight: 700;
  font-size: 0.86rem;
  letter-spacing: 0.04em;
  color: var(--ink);
}
.v4 .footer-tagline b {
  color: var(--blue);
}
.v4 .footer h3 {
  margin-bottom: 14px;
  font-size: 0.92rem;
}
.v4 .footer-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}
.v4 .footer-col a,
.v4 .footer-col button {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 0.9rem;
  color: var(--ink-2);
  text-align: left;
  transition: color 0.16s;
}
.v4 .footer-col a:hover,
.v4 .footer-col button:hover {
  color: var(--blue);
}
.v4 .footer-col svg {
  color: var(--blue);
  flex-shrink: 0;
}
.v4 .footer-col p {
  font-size: 0.88rem;
  color: var(--ink-3);
}
.v4 .footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding: 20px 0 28px;
  border-top: 1px solid var(--line-2);
  font-size: 0.82rem;
  color: var(--ink-3);
}
.v4 .footer-bottom a {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
.v4 .footer-bottom a:hover {
  color: var(--blue);
}

/* ---------- compare dock, toast ---------------------------------------------------- */
.v4 .compare-dock {
  position: fixed;
  left: 50%;
  bottom: 22px;
  z-index: var(--z-dock);
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 8px 8px 18px;
  border-radius: 14px;
  color: #fff;
  background: var(--ink);
  box-shadow: var(--shadow-3);
  transform: translateX(-50%);
  animation: rise 0.3s var(--ease);
}
.v4 .compare-dock > span {
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
}
.v4 .compare-dock > button:not(.icon-button) {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px;
  border-radius: var(--r-control);
  font-weight: 700;
  background: var(--blue);
}
.v4 .compare-dock .icon-button {
  color: #c9d3e0;
}
.v4 .compare-dock .icon-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}
.v4 .toast {
  position: fixed;
  left: 50%;
  bottom: 24px;
  z-index: var(--z-toast);
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: calc(100% - 32px);
  padding: 14px 18px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  color: #fff;
  background: var(--ink);
  box-shadow: var(--shadow-3);
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 16px);
  transition: opacity 0.25s, transform 0.3s var(--ease);
}
.v4 .toast.visible {
  opacity: 1;
  transform: translate(-50%, 0);
}
.v4 .toast svg {
  color: #7fb0ff;
  flex-shrink: 0;
}
.v4 .compare-dock ~ .toast {
  bottom: 90px;
}

/* ---------- dialogs ------------------------------------------------------------------ */
.v4-dialog {
  width: min(560px, calc(100% - 32px));
  max-height: min(88vh, 900px);
  padding: 0;
  border: 0;
  border-radius: 20px;
  color: #17202a;
  background: #fff;
  box-shadow: 0 40px 90px -30px rgba(10, 25, 60, 0.55);
  font-family: "Epic Text", "Plus Jakarta Sans", system-ui, sans-serif;
  overflow: auto;
  overscroll-behavior: contain;
}
.v4-dialog[open] {
  animation: pop 0.24s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.v4-dialog::backdrop {
  background: rgba(15, 22, 32, 0.46);
  backdrop-filter: blur(3px);
}
.v4-dialog.wide {
  width: min(1040px, calc(100% - 32px));
}
.v4-dialog.drawer {
  width: min(460px, 100%);
  height: 100dvh;
  max-height: none;
  margin: 0 0 0 auto;
  border-radius: 20px 0 0 20px;
}
.v4-dialog.drawer[open] {
  animation: drawer 0.3s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.v4-dialog .dialog-head {
  position: sticky;
  top: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px 14px 24px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e9edf3;
}
.v4-dialog .dialog-notice {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 14px 24px 0;
  padding: 11px 14px;
  border-radius: 10px;
  font-size: 0.86rem;
  font-weight: 600;
  color: #0847b8;
  background: #e9f0fb;
}
.v4-dialog .product-detail.compact {
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1fr);
  gap: 32px;
  padding: 26px;
}
.v4-dialog .product-detail.compact .detail-visual {
  position: static;
}
.v4-dialog .product-detail.compact h1 {
  font-size: 1.8rem;
}
.v4-dialog .product-detail.compact .spec-list {
  grid-template-columns: 1fr;
}
.v4-dialog .product-detail.compact .text-link {
  margin-top: 18px;
}
.v4-dialog .finder-content,
.v4-dialog .compare-content {
  padding: 26px 26px 30px;
}
.v4-dialog .finder-content h2,
.v4-dialog .compare-content h2 {
  margin-top: 12px;
  font-size: 1.9rem;
}
.v4-dialog .finder-content > p {
  margin-top: 10px;
  color: #647081;
}
.v4-dialog .finder-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin: 22px 0 18px;
}
.v4-dialog .finder-options button {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 58px;
  padding: 0 16px;
  border-radius: 12px;
  text-align: left;
  font-weight: 700;
  font-size: 0.92rem;
  background: #f5f7fa;
  box-shadow: inset 0 0 0 1px #e9edf3;
  transition: box-shadow 0.16s, background-color 0.16s;
}
.v4-dialog .finder-options button > svg:first-child {
  color: #0b5ce6;
  flex-shrink: 0;
}
.v4-dialog .finder-options button:hover {
  box-shadow: inset 0 0 0 1px #b9c6d8;
}
.v4-dialog .finder-options button.selected {
  background: #e9f0fb;
  box-shadow: inset 0 0 0 1.5px #0b5ce6;
}
.v4-dialog .finder-options button.selected > svg:last-child {
  margin-left: auto;
  color: #0b5ce6;
}
.v4-dialog .finder-budget {
  display: grid;
  gap: 8px;
  font-weight: 700;
  font-size: 0.9rem;
}
.v4-dialog .finder-result-count {
  margin: 18px 0 14px;
  font-size: 0.9rem;
  color: #647081;
}
.v4-dialog .bag-content {
  padding: 18px 24px 28px;
}
.v4-dialog .bag-note {
  padding: 14px 16px;
  border-radius: 12px;
  font-weight: 700;
  background: #f2f6fc;
}
.v4-dialog .bag-note small {
  display: block;
  font-weight: 500;
  color: #647081;
  font-size: 0.82rem;
}
.v4-dialog .bag-lines {
  display: grid;
  margin: 12px 0;
}
.v4-dialog .bag-line {
  display: grid;
  grid-template-columns: 70px minmax(0, 1fr) auto;
  gap: 14px;
  align-items: start;
  padding: 16px 0;
  border-bottom: 1px solid #e9edf3;
}
.v4-dialog .bag-product-name {
  display: block;
  font-weight: 700;
  font-size: 0.92rem;
  line-height: 1.35;
}
.v4-dialog .bag-line strong {
  display: block;
  margin: 4px 0 8px;
  font-family: "Epic Display", "Saira", system-ui, sans-serif;
  font-variant-numeric: tabular-nums;
}
.v4-dialog .bag-line .quantity {
  height: 36px;
}
.v4-dialog .bag-line .quantity button {
  width: 34px;
}
.v4-dialog .bag-summary {
  display: grid;
  gap: 12px;
  padding-top: 8px;
}
.v4-dialog .bag-summary > span {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-weight: 700;
}
.v4-dialog .bag-summary > span strong {
  font-family: "Epic Display", "Saira", system-ui, sans-serif;
  font-variant-numeric: tabular-nums;
  font-size: 1.5rem;
}
.v4-dialog .bag-summary p,
.v4-dialog .bag-summary small {
  color: #647081;
  font-size: 0.84rem;
}
.v4-dialog .bag-secondary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}
.v4-dialog .bag-secondary .button {
  min-height: 42px;
  padding: 0 10px;
  font-size: 0.82rem;
  gap: 6px;
}
.v4-dialog .compare-scroll {
  margin-top: 20px;
  overflow-x: auto;
  border-radius: 14px;
  box-shadow: 0 0 0 1px #e9edf3;
}
.v4-dialog table {
  width: 100%;
  min-width: 640px;
  border-collapse: collapse;
  font-size: 0.88rem;
}
.v4-dialog th,
.v4-dialog td {
  padding: 13px 14px;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid #e9edf3;
}
.v4-dialog tbody th {
  color: #647081;
  font-weight: 700;
  width: 150px;
}
.v4-dialog thead th {
  position: relative;
}
.v4-dialog thead a {
  display: grid;
  gap: 8px;
  font-weight: 700;
}
.v4-dialog thead .product-image {
  width: 72px;
}
.v4-dialog .remove-compare {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  display: grid;
  place-items: center;
  background: #f2f6fc;
}
.v4-dialog .compare-price {
  font-family: "Epic Display", "Saira", system-ui, sans-serif;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}
.v4-dialog td .button {
  min-height: 40px;
  padding: 0 16px;
  font-size: 0.82rem;
}

@keyframes pop {
  from { opacity: 0; transform: translateY(8px) scale(0.985); }
  to { opacity: 1; transform: none; }
}
@keyframes drawer {
  from { transform: translateX(40px); opacity: 0.4; }
  to { transform: none; opacity: 1; }
}
@keyframes rise {
  from { opacity: 0; transform: translate(-50%, 14px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}
@keyframes fill {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

/* ---------- responsive ------------------------------------------------------------- */
@media (max-width: 1180px) {
  .v4 .product-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .v4 .category-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .v4 .reassurance {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .v4 .brand-strip ul {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .v4 .footer-main {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .v4 .footer-brand {
    grid-column: 1 / -1;
  }
}
@media (max-width: 960px) {
  .v4 .header-main {
    grid-template-columns: auto 1fr auto;
    gap: 12px;
    min-height: 66px;
  }
  .v4 .search-box {
    grid-column: 1 / -1;
    grid-row: 2;
    max-width: none;
    margin-bottom: 12px;
  }
  .v4 .search-box kbd {
    display: none;
  }
  .v4 .brand img {
    height: 38px;
  }
  .v4 .header-actions {
    grid-column: 3;
  }
  .v4 .menu-button {
    display: inline-grid;
  }
  .v4 .bag-button span {
    display: none;
  }
  .v4 .category-nav {
    display: none;
    flex-direction: column;
    align-items: stretch;
    padding: 6px 0 16px;
  }
  .v4 .category-nav.is-open {
    display: flex;
  }
  .v4 .category-nav a,
  .v4 .category-nav button {
    height: 46px;
    font-size: 1rem;
  }
  .v4 .category-nav a.active::after {
    display: none;
  }
  .v4 .category-nav .finder-nav {
    margin-left: 0;
  }
  .v4 .catalogue-layout {
    grid-template-columns: 1fr;
  }
  .v4 .filters {
    position: static;
    display: none;
    padding: 18px;
    border-radius: var(--r-card);
    background: var(--paper);
    box-shadow: 0 0 0 1px var(--line-2);
  }
  .v4 .filters.is-open {
    display: grid;
  }
  .v4 .mobile-filter {
    display: inline-flex;
    min-height: 40px;
  }
  .v4 .catalogue-toolbar {
    flex-wrap: wrap;
  }
  .v4 .product-detail {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .v4 .detail-visual {
    position: static;
  }
  .v4 .promo-grid {
    grid-template-columns: 1fr;
  }
  .v4 .help-band {
    grid-template-columns: 1fr;
    justify-items: start;
  }
  .v4 .help-grid,
  .v4 .contact-card {
    grid-template-columns: 1fr;
  }
  .v4 .brand-strip {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .v4-dialog .product-detail.compact {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 860px) {
  .v4 .hero-stage {
    grid-template-columns: 1fr;
    min-height: 0;
  }
  .v4 .hero-art {
    order: -1;
    min-height: 0;
    aspect-ratio: 16 / 11;
  }
  .v4 .hero-product {
    inset: 8% 7% 0;
  }
  .v4 .hero-copy {
    padding: 8px 24px 96px;
  }
  .v4 .hero-mark {
    width: 104%;
    right: -30%;
    top: 24%;
  }
  .v4 .hero-floor {
    left: 14%;
    right: 14%;
    top: 36%;
    bottom: auto;
    height: 8%;
  }
  .v4 .hero-controls {
    left: 24px;
    bottom: 28px;
  }
}
@media (max-width: 720px) {
  .v4 {
    font-size: 15px;
  }
  .v4 .container {
    width: calc(100% - 32px);
  }
  .v4 .topbar-note {
    display: none;
  }
  .v4 .hero {
    margin-top: 14px;
    border-radius: 20px;
  }
  .v4 .hero-slide-copy :is(h1, h2) {
    font-size: clamp(2.3rem, 10.5vw, 3rem);
  }
  .v4 .hero-slide-copy p {
    font-size: 1rem;
    margin-top: 16px;
  }
  .v4 .hero-actions {
    margin-top: 24px;
  }
  .v4 .reassurance {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .v4 .section {
    padding-top: 56px;
  }
  .v4 .section-heading {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
  .v4 .category-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
  .v4 .pills {
    flex-wrap: nowrap;
    overflow-x: auto;
    margin-inline: -16px;
    padding: 2px 16px 4px;
    scrollbar-width: none;
  }
  .v4 .pills::-webkit-scrollbar {
    display: none;
  }
  .v4 .pills button {
    flex-shrink: 0;
  }
  .v4 .brand-strip ul {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .v4 .category-tile {
    min-height: 156px;
    gap: 24px;
    padding: 18px 16px 16px;
  }
  .v4 .category-tile:last-child {
    grid-column: 1 / -1;
  }
  .v4 .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
  .v4 .card-copy {
    padding: 12px 12px 14px;
  }
  .v4 .card-visual {
    padding: 6px 6px 0;
  }
  .v4 .card-save {
    top: 12px;
    right: 12px;
    width: 32px;
    height: 32px;
  }
  .v4 .quick-button {
    display: none;
  }
  .v4 .product-card h3 {
    font-size: 0.9rem;
  }
  .v4 .card-bottom strong {
    font-size: 1.02rem;
  }
  .v4 .card-bottom button {
    width: 36px;
    height: 36px;
  }
  .v4 .availability {
    font-size: 0.72rem;
  }
    .v4 .product-image .photo-pending {
    display: none;
  }
  .v4 .promo {
    min-height: 380px;
    padding: 28px;
  }
  .v4 .promo-audio img {
    width: 64%;
    right: -2%;
  }
  .v4 .catalogue-hero {
    padding: 28px 24px;
  }
  .v4 .hero-icon {
    display: none;
  }
  .v4 .catalogue-toolbar select {
    min-width: 0;
  }
  .v4 .spec-list {
    grid-template-columns: 1fr;
  }
  .v4 .help-band {
    padding: 26px;
  }
  .v4 .help-actions,
  .v4 .help-actions .button {
    width: 100%;
  }
  .v4 .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  .v4 .compare-dock {
    width: calc(100% - 24px);
    justify-content: space-between;
  }
  .v4-dialog .finder-options,
  .v4-dialog .bag-secondary {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .v4 *,
  .v4 *::before,
  .v4 *::after,
  .v4-dialog,
  .v4-dialog * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
@media print {
  .v4 .topbar,
  .v4 .site-header,
  .v4 .footer,
  .v4 .compare-dock,
  .v4 .toast {
    display: none;
  }
}
`;var n=ua(io(),1),$l={Mouse:to,Keyboard:Jr,Headphones:Zr,MemoryStick:mt,HardDrive:$t},fo=e=>ra.find(a=>a.id===e)||ra[0],oa=e=>e.id==="ram"?"RAM":e.plural,Ce=Object.assign(Object.create(null),Object.fromEntries(ne.map(e=>[e.id,e]))),Cc=ne.reduce((e,a)=>e.set(a.brand,(e.get(a.brand)||0)+1),new Map),hh=[...Cc.keys()].sort(),gh=[...Cc.entries()].sort((e,a)=>a[1]-e[1]||e[0].localeCompare(a[0])).map(([e])=>e),ue=e=>String(e.name).replace(/\s+[\u2014\u2013]\s+/g,", "),wa=e=>"#/product/"+encodeURIComponent(e),ee=(e={})=>{let a=new URLSearchParams(Object.entries(e).filter(([,t])=>t!==""&&t!==null&&t!==void 0));return"#/shop"+(a.size?"?"+a:"")},yc=()=>{let[e,a=""]=(window.location.hash.slice(1)||"/").split("?");return{path:e,params:Object.fromEntries(new URLSearchParams(a))}},xh=(e,a)=>Vl(e.sourcePrice)*a/100,ja=e=>`https://wa.me/${ve.whatsapp}?text=${encodeURIComponent(e)}`,Lc="tel:"+ve.phone.replace(/[^\d+]/g,""),so="Hello EPIC DEVICES, I have a question about a product.",Li=[3e3,5e3,1e4,25e3,5e4,1e5],vh=typeof navigator!="undefined"&&/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||""),Ic=()=>{var e;return typeof window!="undefined"&&!!((e=window.matchMedia)!=null&&e.call(window,"(prefers-reduced-motion: reduce)").matches)};function wc(e,a,t){var r;try{return t((r=JSON.parse(localStorage.getItem(e)))!=null?r:a)}catch{return a}}function Kl(e,a,t){let[r,o]=(0,D.useState)(()=>wc(e,a,t));return(0,D.useEffect)(()=>{try{localStorage.setItem(e,JSON.stringify(r))}catch{}},[e,r]),(0,D.useEffect)(()=>{let l=u=>{u.key===e&&o(wc(e,a,t))};return window.addEventListener("storage",l),()=>window.removeEventListener("storage",l)},[e]),[r,o]}var yh=6500,jl=[{id:"keyboard",kicker:"Keyboards",title:["Your setup.","Upgraded."],text:"Keyboards and mice that make long desk days easier. Compare the details, then confirm on WhatsApp.",cta:{label:"Shop keyboards",href:ee({category:"keyboard"})},image:"slide-keyboard"},{id:"mouse",kicker:"Mice",title:["Every move","matters."],text:"Wired, wireless and gaming mice from Logitech and A4Tech, all priced in rupees.",cta:{label:"Shop mice",href:ee({category:"mouse"})},image:"slide-mouse"},{id:"audio",kicker:"Headsets and microphones",title:["Be heard.","Get immersed."],text:"Headsets and microphones for calls, classes, gaming and recording.",cta:{label:"Shop headsets",href:ee({category:"audio"})},image:"slide-headphones"}];function Lh({onFinder:e}){let a=jl.length,[t,r]=(0,D.useState)(0),[o]=(0,D.useState)(Ic),[l,u]=(0,D.useState)(()=>!Ic()),[i,s]=(0,D.useState)(!1),[p,h]=(0,D.useState)(!1),g=(0,D.useRef)(null),x=(0,D.useCallback)(f=>r(d=>(d+f+a)%a),[a]);(0,D.useEffect)(()=>{let f=()=>h(document.hidden);return document.addEventListener("visibilitychange",f),()=>document.removeEventListener("visibilitychange",f)},[]);let L=l&&!i&&!p,I=f=>{f.key==="ArrowRight"&&(f.preventDefault(),x(1)),f.key==="ArrowLeft"&&(f.preventDefault(),x(-1))},w=f=>{f.pointerType!=="mouse"&&(g.current={x:f.clientX,y:f.clientY})},E=f=>{let d=g.current;if(g.current=null,!d)return;let m=f.clientX-d.x,v=f.clientY-d.y;Math.abs(m)>48&&Math.abs(m)>Math.abs(v)*1.3&&x(m<0?1:-1)};return(0,n.jsxs)("section",{className:"hero container"+(L?"":" is-paused")+(l?"":" is-static"),style:{"--hero-interval":yh+"ms"},"aria-roledescription":"carousel","aria-label":"Featured collections",onKeyDown:I,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onFocus:()=>s(!0),onBlur:f=>{f.currentTarget.contains(f.relatedTarget)||s(!1)},onPointerDown:w,onPointerUp:E,onPointerCancel:()=>{g.current=null},children:[(0,n.jsx)("div",{className:"hero-mark","aria-hidden":"true"}),(0,n.jsx)("div",{className:"hero-floor","aria-hidden":"true"}),(0,n.jsxs)("div",{className:"hero-stage","aria-live":L?"off":"polite",children:[(0,n.jsx)("div",{className:"hero-copy",children:jl.map((f,d)=>{let m=d===0?"h1":"h2",v=d===t;return(0,n.jsxs)("div",{className:"hero-slide-copy"+(v?" is-active":""),role:"group","aria-roledescription":"slide","aria-label":`${d+1} of ${a}`,"aria-hidden":!v,children:[(0,n.jsx)("span",{className:"hero-kicker",children:f.kicker}),(0,n.jsxs)(m,{children:[f.title[0]," ",(0,n.jsx)("span",{children:f.title[1]})]}),(0,n.jsx)("p",{children:f.text}),(0,n.jsxs)("div",{className:"hero-actions",children:[(0,n.jsxs)("a",{className:"button primary",href:f.cta.href,tabIndex:v?void 0:-1,children:[f.cta.label,(0,n.jsx)(Y,{size:18})]}),(0,n.jsxs)("button",{className:"text-link",onClick:e,tabIndex:v?void 0:-1,children:["Find my upgrade",(0,n.jsx)(ta,{size:17})]})]})]},f.id)})}),(0,n.jsx)("div",{className:"hero-art","aria-hidden":"true",children:jl.map((f,d)=>(0,n.jsx)("div",{className:"hero-product"+(d===t?" is-active":""),children:(0,n.jsx)("img",{src:`./assets/slides/${f.image}-1200.webp`,srcSet:`./assets/slides/${f.image}-700.webp 700w, ./assets/slides/${f.image}-1200.webp 1200w`,sizes:"(max-width: 860px) 92vw, 52vw",width:"1200",height:"900",alt:"",decoding:"async",loading:d===0?"eager":"lazy",fetchpriority:d===0?"high":"low",draggable:"false"})},f.id))})]}),(0,n.jsxs)("div",{className:"hero-controls",children:[(0,n.jsx)("div",{className:"hero-progress",role:"group","aria-label":"Choose a slide",children:jl.map((f,d)=>(0,n.jsx)("button",{className:(d===t?"is-active":"")+(d<t?" is-done":""),"aria-label":`Show slide ${d+1}: ${f.title.join(" ")}`,"aria-current":d===t?"true":void 0,onClick:()=>r(d),children:(0,n.jsx)("i",{onAnimationEnd:d===t&&l?()=>x(1):void 0})},f.id))}),(0,n.jsxs)("div",{className:"hero-buttons",children:[(0,n.jsx)("button",{"aria-label":"Previous slide",onClick:()=>x(-1),children:(0,n.jsx)(Xt,{size:18})}),(0,n.jsx)("button",{"aria-label":"Next slide",onClick:()=>x(1),children:(0,n.jsx)(va,{size:18})}),!o&&(0,n.jsx)("button",{"aria-label":l?"Pause slideshow":"Play slideshow",onClick:()=>{u(f=>!f),s(!1)},children:l?(0,n.jsx)(oo,{size:16}):(0,n.jsx)(lo,{size:16})})]})]})]})}var Ql=D.default.createContext(null);function Xl({title:e,children:a,close:t,drawer:r=!1,wide:o=!1}){let{toast:l}=D.default.useContext(Ql),u=(0,D.useRef)(null);return(0,D.useEffect)(()=>{var p;let i=document.activeElement,s=document.body.style.overflow;return u.current.showModal(),document.body.style.overflow="hidden",(p=u.current.querySelector("[data-autofocus]"))==null||p.focus(),()=>{document.body.style.overflow=s,i!=null&&i.isConnected&&i.focus()}},[]),(0,n.jsxs)("dialog",{ref:u,className:"v4-dialog "+(r?"drawer ":"")+(o?"wide":""),"aria-label":e,onCancel:i=>{i.preventDefault(),t()},onClick:i=>{if(i.target!==i.currentTarget)return;let s=i.currentTarget.getBoundingClientRect();(i.clientX<s.left||i.clientX>s.right||i.clientY<s.top||i.clientY>s.bottom)&&t()},children:[(0,n.jsxs)("header",{className:"dialog-head",children:[(0,n.jsx)("span",{children:e}),(0,n.jsx)("button",{className:"icon-button","aria-label":"Close "+e.toLowerCase(),onClick:t,"data-autofocus":!0,children:(0,n.jsx)(Ia,{size:21})})]}),l&&(0,n.jsxs)("div",{className:"dialog-notice",role:"status",children:[(0,n.jsx)(ct,{size:15}),l]}),a]})}function co({product:e,className:a="",compact:t=!1}){var i;let[r,o]=(0,D.useState)(!1),l=(i=e.images)==null?void 0:i[0],u=/microphone|\bmic\b/i.test(e.name)?ao:$l[fo(e.category).icon];return(0,n.jsx)("div",{className:"product-image "+(t?"compact ":"")+a,children:l&&!r?(0,n.jsx)("img",{src:l,alt:ue(e),loading:"lazy",decoding:"async",onError:()=>o(!0)}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"pi-disc",children:(0,n.jsx)(u,{strokeWidth:1.5,"aria-hidden":"true"})}),!t&&(0,n.jsx)("span",{className:"photo-pending",children:"Photo coming soon"})]})})}function Ih({p:e}){let{saved:a,compare:t,toggleSaved:r,toggleCompare:o,openQuick:l,add:u}=D.default.useContext(Ql),i=a.includes(e.id),s=t.includes(e.id);return(0,n.jsxs)("article",{className:"product-card",children:[(0,n.jsxs)("div",{className:"card-visual",children:[(0,n.jsx)("a",{href:wa(e.id),"aria-label":"View "+ue(e),tabIndex:-1,children:(0,n.jsx)(co,{product:e})}),(0,n.jsx)("button",{className:"card-save icon-button "+(i?"selected":""),"aria-label":(i?"Unsave ":"Save ")+ue(e),"aria-pressed":i,onClick:()=>r(e.id),children:(0,n.jsx)(Ga,{size:17,fill:i?"currentColor":"none"})}),(0,n.jsxs)("button",{className:"quick-button",onClick:()=>l(e.id),children:["Quick view",(0,n.jsx)(ta,{size:14})]})]}),(0,n.jsxs)("div",{className:"card-copy",children:[(0,n.jsxs)("div",{className:"card-eyebrow",children:[(0,n.jsx)("span",{children:e.brand}),(0,n.jsx)("button",{title:"Compare","aria-label":"Compare "+ue(e),"aria-pressed":s,className:s?"selected":"",onClick:()=>o(e.id),children:(0,n.jsx)(ya,{size:15})})]}),(0,n.jsx)("h3",{children:(0,n.jsx)("a",{href:wa(e.id),children:ue(e)})}),(0,n.jsx)("p",{className:"card-specs",children:e.specs.slice(0,2).map(p=>p[1]).join(", ")}),(0,n.jsxs)("div",{className:"card-bottom",children:[(0,n.jsx)("strong",{children:pe(Te(e))}),(0,n.jsx)("button",{"aria-label":"Add "+ue(e)+" to bag",onClick:()=>u(e.id),children:(0,n.jsx)(Ka,{size:20})})]})]})]})}function Sc({p:e,compact:a=!1}){let{saved:t,compare:r,toggleSaved:o,toggleCompare:l,add:u}=D.default.useContext(Ql),[i,s]=(0,D.useState)(1),p=typeof window!="undefined"?window.location.href.split("#")[0]+wa(e.id):"",h=`Hello EPIC DEVICES, is this available?
${ue(e)}
${pe(Te(e))} (Ref: ${e.id})
${p}`;return(0,n.jsxs)("div",{className:"product-detail "+(a?"compact":""),children:[(0,n.jsxs)("div",{className:"detail-visual",children:[(0,n.jsx)(co,{product:e}),(0,n.jsx)("div",{className:"detail-image-caption",children:e.images.length?"Product photograph":"The product photograph is being prepared. Ask us on WhatsApp for pictures of this model."})]}),(0,n.jsxs)("div",{className:"detail-copy",children:[(0,n.jsx)("a",{className:"eyebrow",href:ee({category:e.category}),children:oa(fo(e.category))}),(0,n.jsx)("p",{className:"detail-brand",children:e.brand}),(0,n.jsx)("h1",{children:ue(e)}),(0,n.jsxs)("div",{className:"detail-price",children:[pe(Te(e)),(0,n.jsx)("small",{children:"Catalogue price in PKR"})]}),(0,n.jsxs)("span",{className:"availability",children:[(0,n.jsx)(Zt,{size:14}),"Stock, delivery and warranty are confirmed before you pay"]}),(0,n.jsx)("dl",{className:"spec-list",children:e.specs.map(([g,x])=>(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{children:g}),(0,n.jsx)("dd",{children:x})]},g))}),e.category==="ram"&&(0,n.jsx)("p",{className:"compatibility-note",children:"Check your motherboard's memory generation, supported capacity and form factor before choosing RAM. Send us your PC model if you are unsure."}),e.category==="drives"&&(0,n.jsx)("p",{className:"compatibility-note",children:"Check your device's drive interface and free connections before ordering. We can confirm compatibility on WhatsApp."}),(0,n.jsxs)("div",{className:"purchase-actions",children:[(0,n.jsxs)("div",{className:"quantity",children:[(0,n.jsx)("button",{"aria-label":"Decrease quantity",disabled:i<=1,onClick:()=>s(g=>g-1),children:(0,n.jsx)(Qt,{size:16})}),(0,n.jsx)("output",{"aria-live":"polite",children:i}),(0,n.jsx)("button",{"aria-label":"Increase quantity",disabled:i>=99,onClick:()=>s(g=>g+1),children:(0,n.jsx)(Ka,{size:16})})]}),(0,n.jsxs)("button",{className:"button primary",onClick:()=>u(e.id,i),children:[(0,n.jsx)(La,{size:17}),"Add to bag"]}),(0,n.jsxs)("a",{className:"button",href:ja(h),target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(Re,{size:17}),"Ask on WhatsApp"]})]}),(0,n.jsxs)("div",{className:"detail-tools",children:[(0,n.jsxs)("button",{onClick:()=>o(e.id),"aria-pressed":t.includes(e.id),children:[(0,n.jsx)(Ga,{size:17,fill:t.includes(e.id)?"currentColor":"none"}),t.includes(e.id)?"Saved":"Save for later"]}),(0,n.jsxs)("button",{onClick:()=>l(e.id),"aria-pressed":r.includes(e.id),children:[(0,n.jsx)(ya,{size:17}),r.includes(e.id)?"In comparison":"Compare"]})]}),(0,n.jsx)("p",{className:"purchase-note",children:"Your bag is a shortlist. Send it to us and we confirm stock, delivery and warranty before any payment."}),a&&(0,n.jsxs)("a",{className:"text-link",href:wa(e.id),children:["Full product details",(0,n.jsx)(Y,{size:16})]}),!a&&(0,n.jsxs)("details",{className:"detail-note",children:[(0,n.jsx)("summary",{children:"About this listing"}),(0,n.jsx)("p",{children:"Specifications were recorded from a supplier listing on 23 September 2026. Please confirm the current price and exact variant with our team before ordering."})]})]})]})}function Ii(){let[e,a]=(0,D.useState)(yc),[t,r]=Kl("epic:v4:bag",[],c=>Wl(c,ne)),[o,l]=Kl("epic:v4:saved",[],c=>_l(c,ne)),[u,i]=Kl("epic:v4:compare",[],c=>_l(c,ne,4)),[s,p]=Kl("epic:v4:recent",[],c=>_l(c,ne,8)),[h,g]=(0,D.useState)(null),[x,L]=(0,D.useState)(null),[I,w]=(0,D.useState)(!1),[E,f]=(0,D.useState)(""),[d,m]=(0,D.useState)(""),[v,k]=(0,D.useState)(!1),[b,A]=(0,D.useState)(""),[M,F]=(0,D.useState)(!1),[B,ke]=(0,D.useState)(-1),[Xa,Pc]=(0,D.useState)("mouse"),[Yl,Ac]=(0,D.useState)(""),wi=(0,D.useRef)(null),Si=(0,D.useRef)(null),Zl=(0,D.useRef)(null),Ci=mc(t,ne)/100,po=t.reduce((c,S)=>c+S.quantity,0),xt=c=>{clearTimeout(Zl.current),f(c),Zl.current=setTimeout(()=>f(""),3500)};(0,D.useEffect)(()=>()=>clearTimeout(Zl.current),[]),(0,D.useEffect)(()=>{let c=()=>{a(yc()),w(!1),g(null),L(null),F(!1),k(!1),window.scrollTo({top:0,behavior:"instant"})},S=q=>{var tr;(q.metaKey||q.ctrlKey)&&q.key.toLowerCase()==="k"&&(q.preventDefault(),(tr=wi.current)==null||tr.focus()),q.key==="Escape"&&(F(!1),w(!1))},U=q=>{var tr;(tr=Si.current)!=null&&tr.contains(q.target)||F(!1)};return window.addEventListener("hashchange",c),document.addEventListener("keydown",S),document.addEventListener("pointerdown",U),()=>{window.removeEventListener("hashchange",c),document.removeEventListener("keydown",S),document.removeEventListener("pointerdown",U)}},[]);let ki=e.path.startsWith("/product/")?decodeURIComponent(e.path.slice(9)):null,X=Ce[ki];(0,D.useEffect)(()=>{document.title=(X?ue(X):e.path==="/shop"?"Shop computer accessories":"Better devices. Better experiences.")+" | EPIC DEVICES",X&&p(c=>[X.id,...c.filter(S=>S!==X.id)].slice(0,8))},[ki,e.path]);let bi=(c,S=1)=>{var U;if((((U=t.find(q=>q.id===c))==null?void 0:U.quantity)||0)>=99){xt("Your bag already has the maximum quantity for this product.");return}r(q=>Wl([...q,{id:c,quantity:S}],ne)),xt("Added to your bag. Send it on WhatsApp when you are ready.")},Mc=c=>l(S=>S.includes(c)?S.filter(U=>U!==c):[...S,c]),Pi=c=>{u.includes(c)?i(S=>S.filter(U=>U!==c)):u.length===4?xt("Compare up to four products. Remove one to add another."):i(S=>[...S,c])},Dc=c=>{L(c),g("quick"),p(S=>[c,...S.filter(U=>U!==c)].slice(0,8))},mo=()=>{g(null),L(null)},la=c=>{window.location.hash===c?(w(!1),g(null),F(!1),window.scrollTo({top:0})):window.location.hash=c},Sa=(0,D.useMemo)(()=>b.trim()?uo(ne,{query:b}).slice(0,5):[],[b]),Bc=c=>{c.preventDefault();let S=B>=0&&Sa[B]?wa(Sa[B].id):ee({q:b.trim()});la(S),F(!1),A(""),ke(-1)},ho=(c,S)=>la(ee({...e.params,[c]:S,page:""})),Jt=uo(ne,{category:e.params.category,query:e.params.q,brand:e.params.brand,max:e.params.max,sort:e.params.sort}),go=Math.max(1,Math.ceil(Jt.length/12)),$a=Math.min(go,Math.max(1,parseInt(e.params.page,10)||1)),$e=ra.find(c=>c.id===e.params.category),Rc=uo(ne,{category:d}).slice(0,8),xo=()=>["Hello EPIC DEVICES, please confirm these items:","",...t.map((c,S)=>{let U=Ce[c.id];return`${S+1}. ${ue(U)}
   Qty ${c.quantity} x ${pe(Te(U))} = ${pe(xh(U,c.quantity))}
   Ref: ${c.id}`}),"",`Catalogue subtotal: ${pe(Ci)}`,"Please confirm price, stock, delivery charges and warranty."].join(`
`),Tc=()=>{let c=URL.createObjectURL(new Blob([xo()],{type:"text/plain;charset=utf-8"})),S=document.createElement("a");S.href=c,S.download="epic-devices-enquiry.txt",S.click(),setTimeout(()=>URL.revokeObjectURL(c),1e3),xt("Enquiry downloaded. No order has been placed.")},Fc=async()=>{try{await navigator.clipboard.writeText(xo()),xt("Enquiry copied.")}catch{xt("Clipboard unavailable. Use Download instead.")}},er=()=>{g("finder"),w(!1)},ar=c=>(0,n.jsx)("div",{className:"product-grid",children:c.map(S=>(0,n.jsx)(Ih,{p:S},S.id))});return(0,n.jsx)(Ql.Provider,{value:{saved:o,compare:u,toggleSaved:Mc,toggleCompare:Pi,openQuick:Dc,add:bi,toast:E},children:(0,n.jsxs)("div",{className:"v4",children:[(0,n.jsx)("style",{children:hc}),(0,n.jsx)("a",{className:"skip",href:"#main-content",onClick:c=>{var S;c.preventDefault(),(S=document.getElementById("main-content"))==null||S.focus()},children:"Skip to content"}),(0,n.jsx)("div",{className:"topbar",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("a",{href:ja(so),target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(Re,{size:14}),"Chat on WhatsApp ",ve.phone]}),(0,n.jsx)("span",{className:"topbar-note",children:"Prices in PKR. Stock and delivery are confirmed before you pay."})]})}),(0,n.jsxs)("header",{className:"site-header",children:[(0,n.jsxs)("div",{className:"container header-main",children:[(0,n.jsx)("a",{href:"#/",className:"brand","aria-label":"EPIC DEVICES home",children:(0,n.jsx)("img",{src:"./assets/brand/epic-lockup.svg",alt:"EPIC DEVICES",width:"238",height:"44"})}),(0,n.jsxs)("form",{className:"search-box",ref:Si,role:"search",onSubmit:Bc,onBlur:c=>{c.currentTarget.contains(c.relatedTarget)||F(!1)},children:[(0,n.jsx)(ht,{size:19}),(0,n.jsx)("input",{ref:wi,type:"search",placeholder:"Search mice, keyboards, RAM, drives...",value:b,onChange:c=>{A(c.target.value),F(!0),ke(-1)},onFocus:()=>F(!0),"aria-label":"Search products",role:"combobox","aria-autocomplete":"list","aria-expanded":M&&!!b.trim(),"aria-controls":"product-suggestions","aria-activedescendant":B>=0?`suggestion-${B}`:void 0,onKeyDown:c=>{(c.key==="ArrowDown"||c.key==="ArrowUp")&&(c.preventDefault(),Sa.length&&ke(S=>c.key==="ArrowDown"?(S+1)%Sa.length:(S-1+Sa.length)%Sa.length),F(!0)),c.key==="Escape"&&(F(!1),ke(-1))},autoComplete:"off",enterKeyHint:"search"}),(0,n.jsx)("kbd",{"aria-hidden":"true",children:vh?"\u2318 K":"Ctrl K"}),(0,n.jsx)("button",{className:"search-submit",type:"submit","aria-label":"Search catalogue",children:(0,n.jsx)(Y,{size:17})}),M&&b.trim()&&(0,n.jsxs)("div",{className:"suggestions",children:[(0,n.jsx)("div",{className:"suggestions-label",children:"Top matches"}),(0,n.jsx)("div",{role:"listbox",id:"product-suggestions","aria-label":"Product suggestions",children:Sa.map((c,S)=>(0,n.jsxs)("button",{type:"button",role:"option",id:`suggestion-${S}`,"aria-selected":B===S,onMouseDown:U=>U.preventDefault(),onClick:()=>{la(wa(c.id)),A("")},children:[(0,n.jsx)(co,{product:c,compact:!0}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:ue(c)}),(0,n.jsx)("small",{children:c.brand})]}),(0,n.jsx)("strong",{children:pe(Te(c))})]},c.id))}),!Sa.length&&(0,n.jsx)("p",{children:'No matches yet. Try "wireless mouse under 10k" or "16GB DDR4".'}),(0,n.jsxs)("button",{type:"submit",className:"all-results",children:["See all results",(0,n.jsx)(Y,{size:15})]})]})]}),(0,n.jsxs)("div",{className:"header-actions",children:[(0,n.jsxs)("a",{className:"icon-button saved-link",href:"#/saved","aria-label":`Saved products (${o.length})`,children:[(0,n.jsx)(Ga,{size:21}),!!o.length&&(0,n.jsx)("b",{children:o.length})]}),(0,n.jsxs)("button",{className:"bag-button",onClick:()=>g("bag"),"aria-label":`Shopping bag (${po})`,children:[(0,n.jsx)(La,{size:20}),(0,n.jsx)("span",{children:"Bag"}),(0,n.jsx)("b",{children:po})]}),(0,n.jsx)("button",{className:"icon-button menu-button","aria-label":"Open navigation","aria-expanded":I,onClick:()=>w(c=>!c),children:I?(0,n.jsx)(Ia,{}):(0,n.jsx)(eo,{})})]})]}),(0,n.jsxs)("nav",{className:"container category-nav "+(I?"is-open":""),"aria-label":"Shop categories",children:[(0,n.jsx)("a",{href:"#/shop",className:e.path==="/shop"&&!e.params.category?"active":"",children:"Shop all"}),ra.map(c=>(0,n.jsx)("a",{href:ee({category:c.id}),className:e.params.category===c.id?"active":"",children:oa(c)},c.id)),(0,n.jsxs)("button",{className:"finder-nav",onClick:er,children:[(0,n.jsx)(gt,{size:16}),"Find my upgrade"]})]})]}),(0,n.jsxs)("main",{id:"main-content",tabIndex:-1,children:[e.path==="/"&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Lh,{onFinder:er}),(0,n.jsxs)("div",{className:"container reassurance",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(Zt,{size:22}),(0,n.jsxs)("span",{children:["Confirmed before you pay",(0,n.jsx)("small",{children:"Stock, price and delivery checked with you first"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(Re,{size:22}),(0,n.jsxs)("span",{children:["Real help on WhatsApp",(0,n.jsx)("small",{children:"Ask about fit, compatibility or budget"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(ya,{size:22}),(0,n.jsxs)("span",{children:["Compare side by side",(0,n.jsx)("small",{children:"Up to four products, spec by spec"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(ht,{size:22}),(0,n.jsxs)("span",{children:["Search the way you talk",(0,n.jsx)("small",{children:'Try "wireless mouse under 10k"'})]})]})]}),(0,n.jsxs)("section",{className:"container section","aria-labelledby":"shop-by-category",children:[(0,n.jsxs)("div",{className:"section-heading",children:[(0,n.jsx)("h2",{id:"shop-by-category",children:"Shop by category"}),(0,n.jsxs)("a",{className:"text-link",href:"#/shop",children:["Shop all",(0,n.jsx)(Y,{size:17})]})]}),(0,n.jsx)("div",{className:"category-grid",children:ra.map(c=>{let S=$l[c.icon];return(0,n.jsxs)("a",{className:"category-tile",href:ee({category:c.id}),children:[(0,n.jsx)("span",{className:"tile-icon",children:(0,n.jsx)(S,{size:26,strokeWidth:1.6})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:oa(c)}),(0,n.jsxs)("span",{className:"tile-meta",children:[ne.filter(U=>U.category===c.id).length," products",(0,n.jsx)(ta,{size:16})]})]})]},c.id)})})]}),(0,n.jsxs)("section",{className:"container section picks","aria-labelledby":"featured-picks",children:[(0,n.jsx)("div",{className:"section-heading",children:(0,n.jsx)("h2",{id:"featured-picks",children:"Featured picks"})}),(0,n.jsxs)("div",{className:"pills",role:"group","aria-label":"Featured product category",children:[(0,n.jsx)("button",{className:d?"":"active","aria-pressed":!d,onClick:()=>m(""),children:"All"}),ra.map(c=>(0,n.jsx)("button",{className:d===c.id?"active":"","aria-pressed":d===c.id,onClick:()=>m(c.id),children:oa(c)},c.id))]}),ar(Rc)]}),(0,n.jsxs)("section",{className:"container promo-grid","aria-label":"Collections",children:[(0,n.jsxs)("a",{className:"promo promo-audio",href:ee({category:"audio"}),children:[(0,n.jsx)("img",{src:"./assets/slides/slide-headphones-700.webp",alt:"",width:"700",height:"525",loading:"lazy",decoding:"async"}),(0,n.jsx)("h2",{children:"Hear every word."}),(0,n.jsx)("p",{children:"Headsets and microphones from A4Tech, Logitech, MAONO, UGREEN and more."}),(0,n.jsxs)("span",{className:"text-link",children:["Shop headsets and mics",(0,n.jsx)(Y,{size:17})]})]}),(0,n.jsxs)("div",{className:"promo promo-store",children:[(0,n.jsxs)("div",{className:"promo-icons","aria-hidden":"true",children:[(0,n.jsx)("span",{children:(0,n.jsx)(mt,{size:28,strokeWidth:1.5})}),(0,n.jsx)("span",{children:(0,n.jsx)($t,{size:28,strokeWidth:1.5})})]}),(0,n.jsx)("h2",{children:"More memory. More space."}),(0,n.jsx)("p",{children:"RAM from Lexar, XPG, Corsair and Kingston. Drives from Seagate, WD and Transcend."}),(0,n.jsxs)("a",{className:"button",href:ee({category:"ram"}),children:["Shop RAM",(0,n.jsx)(Y,{size:17})]})]})]}),(0,n.jsxs)("div",{className:"container brand-strip",children:[(0,n.jsx)("span",{children:"Brands in our catalogue"}),(0,n.jsx)("ul",{children:gh.map(c=>(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:ee({brand:c}),children:c})},c))})]}),(0,n.jsxs)("section",{className:"container help-band","aria-labelledby":"help-band-title",children:[(0,n.jsx)("div",{className:"help-symbol","aria-hidden":"true",children:(0,n.jsx)(Re,{size:28})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{id:"help-band-title",children:"Not sure what fits?"}),(0,n.jsx)("p",{children:"Send your laptop or PC model and we will suggest compatible RAM, drives and accessories."})]}),(0,n.jsxs)("div",{className:"help-actions",children:[(0,n.jsxs)("a",{className:"button primary",href:ja(so),target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(Re,{size:18}),"Chat on WhatsApp"]}),(0,n.jsx)("button",{className:"button",onClick:er,children:"Find my upgrade"})]})]})]}),e.path==="/shop"&&(0,n.jsxs)("div",{className:"container shop-page",children:[(0,n.jsxs)("div",{className:"breadcrumb",children:[(0,n.jsx)("a",{href:"#/",children:"Home"}),(0,n.jsx)(va,{size:13}),(0,n.jsx)("span",{children:$e?oa($e):"Shop all"})]}),(0,n.jsxs)("div",{className:"catalogue-hero",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:e.params.q?`Results for "${e.params.q}"`:($e==null?void 0:$e.tagline)||"Everything for your desk."}),(0,n.jsx)("p",{children:($e==null?void 0:$e.description)||"Mice, keyboards, audio, memory and storage. Compare the details and ask us before you buy."})]}),(0,n.jsxs)("div",{className:"hero-bars","aria-hidden":"true",children:[(0,n.jsx)("i",{}),(0,n.jsx)("i",{})]}),(0,n.jsx)("div",{className:"hero-icon","aria-hidden":"true",children:D.default.createElement($e?$l[$e.icon]:La,{size:58,strokeWidth:1.3})})]}),(0,n.jsxs)("div",{className:"catalogue-layout",children:[(0,n.jsxs)("aside",{className:"filters "+(v?"is-open":""),"aria-label":"Filters",children:[(0,n.jsxs)("div",{className:"filter-title",children:[(0,n.jsx)("h2",{children:"Refine your search"}),(0,n.jsx)("button",{className:"text-button",onClick:()=>la("#/shop"),children:"Reset"})]}),(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("legend",{children:"Category"}),(0,n.jsxs)("a",{className:e.params.category?"":"active",href:ee({...e.params,category:"",page:""}),children:["All products",(0,n.jsx)("span",{children:ne.length})]}),ra.map(c=>(0,n.jsxs)("a",{className:e.params.category===c.id?"active":"",href:ee({...e.params,category:c.id,page:""}),children:[oa(c),(0,n.jsx)("span",{children:ne.filter(S=>S.category===c.id).length})]},c.id))]}),(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("legend",{children:"Brand"}),(0,n.jsxs)("select",{"aria-label":"Filter by brand",value:e.params.brand||"",onChange:c=>ho("brand",c.target.value),children:[(0,n.jsx)("option",{value:"",children:"All brands"}),hh.map(c=>(0,n.jsx)("option",{children:c},c))]})]}),(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("legend",{children:"Maximum price"}),(0,n.jsxs)("select",{"aria-label":"Filter by maximum price",value:e.params.max||"",onChange:c=>ho("max",c.target.value),children:[(0,n.jsx)("option",{value:"",children:"Any budget"}),Li.map(c=>(0,n.jsxs)("option",{value:c,children:["Up to ",pe(c)]},c)),e.params.max&&!Li.includes(Number(e.params.max))&&(0,n.jsxs)("option",{value:e.params.max,children:["Up to ",pe(e.params.max)]})]})]}),(0,n.jsxs)("div",{className:"filter-tip",children:[(0,n.jsx)(Re,{size:20}),(0,n.jsx)("h3",{children:"Can't find a model?"}),(0,n.jsx)("p",{children:"Send us the name. We can often source items that are not listed yet."}),(0,n.jsxs)("a",{className:"text-link",href:ja(so),target:"_blank",rel:"noopener noreferrer",children:["Chat on WhatsApp",(0,n.jsx)(ta,{size:14})]})]})]}),(0,n.jsxs)("div",{className:"catalogue-main",children:[(0,n.jsxs)("div",{className:"catalogue-toolbar",children:[(0,n.jsxs)("button",{className:"mobile-filter button","aria-expanded":v,onClick:()=>k(c=>!c),children:[(0,n.jsx)(gt,{size:16}),"Filters"]}),(0,n.jsxs)("span",{role:"status",children:[(0,n.jsx)("b",{children:Jt.length})," ",Jt.length===1?"product":"products"]}),(0,n.jsxs)("label",{children:["Sort by",(0,n.jsxs)("select",{"aria-label":"Sort products",value:e.params.sort||"featured",onChange:c=>ho("sort",c.target.value),children:[(0,n.jsx)("option",{value:"featured",children:"Featured"}),(0,n.jsx)("option",{value:"price-asc",children:"Price: low to high"}),(0,n.jsx)("option",{value:"price-desc",children:"Price: high to low"}),(0,n.jsx)("option",{value:"name",children:"Name: A to Z"})]})]})]}),Object.entries(e.params).some(([c,S])=>["q","brand","max"].includes(c)&&S)&&(0,n.jsx)("div",{className:"active-filters",children:["q","brand","max"].filter(c=>e.params[c]).map(c=>(0,n.jsxs)("button",{onClick:()=>ho(c,""),"aria-label":"Remove filter "+(c==="max"?"up to "+pe(e.params[c]):e.params[c]),children:[c==="max"?"Up to "+pe(e.params[c]):e.params[c],(0,n.jsx)(Ia,{size:13})]},c))}),Jt.length?ar(Jt.slice(($a-1)*12,$a*12)):(0,n.jsxs)("div",{className:"empty-state",children:[(0,n.jsx)(ht,{size:40,strokeWidth:1.3}),(0,n.jsx)("h2",{children:"No products match these choices."}),(0,n.jsx)("p",{children:"Try another brand, a higher budget or a shorter search. Or ask us on WhatsApp and we will look for you."}),(0,n.jsxs)("a",{className:"button primary",href:"#/shop",children:["Shop all",(0,n.jsx)(Y,{size:16})]})]}),go>1&&(0,n.jsxs)("nav",{className:"pagination","aria-label":"Catalogue pages",children:[(0,n.jsx)("button",{disabled:$a===1,onClick:()=>la(ee({...e.params,page:$a-1})),"aria-label":"Previous page",children:(0,n.jsx)(Xt,{size:18})}),Array.from({length:go},(c,S)=>(0,n.jsx)("a",{"aria-label":`Page ${S+1}`,"aria-current":$a===S+1?"page":void 0,href:ee({...e.params,page:S+1}),children:S+1},S)),(0,n.jsx)("button",{disabled:$a===go,onClick:()=>la(ee({...e.params,page:$a+1})),"aria-label":"Next page",children:(0,n.jsx)(va,{size:18})})]})]})]})]}),X&&(0,n.jsxs)("div",{className:"container single-product",children:[(0,n.jsxs)("div",{className:"breadcrumb",children:[(0,n.jsx)("a",{href:"#/",children:"Home"}),(0,n.jsx)(va,{size:13}),(0,n.jsx)("a",{href:ee({category:X.category}),children:oa(fo(X.category))}),(0,n.jsx)(va,{size:13}),(0,n.jsx)("span",{children:X.brand})]}),(0,n.jsx)(Sc,{p:X},X.id),(0,n.jsxs)("section",{className:"section",children:[(0,n.jsx)("div",{className:"section-heading",children:(0,n.jsxs)("h2",{children:["More in ",oa(fo(X.category))]})}),ar(ne.filter(c=>c.category===X.category&&c.id!==X.id).slice(0,4))]})]}),e.path==="/saved"&&(0,n.jsxs)("section",{className:"container section saved-page",children:[(0,n.jsx)("span",{className:"eyebrow",children:"Saved products"}),(0,n.jsx)("h1",{children:"Your saved collection."}),(0,n.jsx)("p",{className:"page-intro",children:"Everything you have your eye on, kept in this browser."}),o.length?ar(o.map(c=>Ce[c])):(0,n.jsxs)("div",{className:"empty-state",children:[(0,n.jsx)(Ga,{size:42,strokeWidth:1.2}),(0,n.jsx)("h2",{children:"Nothing saved yet."}),(0,n.jsx)("p",{children:"Tap the heart on any product to keep it here."}),(0,n.jsxs)("a",{className:"button primary",href:"#/shop",children:["Shop all",(0,n.jsx)(Y,{size:17})]})]})]}),e.path==="/help"&&(0,n.jsxs)("section",{className:"container section help-page",children:[(0,n.jsx)("span",{className:"eyebrow",children:"Help and contact"}),(0,n.jsx)("h1",{children:"How ordering works."}),(0,n.jsx)("p",{className:"page-intro",children:"Choose your products, send the list, and we confirm everything before you pay."}),(0,n.jsxs)("div",{className:"contact-card",children:[(0,n.jsxs)("a",{href:ja(so),target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(Re,{size:24}),(0,n.jsxs)("span",{children:[(0,n.jsx)("small",{children:"WhatsApp"}),(0,n.jsx)("b",{children:ve.phone})]})]}),(0,n.jsxs)("a",{href:Lc,children:[(0,n.jsx)(Yt,{size:24}),(0,n.jsxs)("span",{children:[(0,n.jsx)("small",{children:"Call us"}),(0,n.jsx)("b",{children:ve.phone})]})]}),(0,n.jsxs)("a",{href:`mailto:${ve.email}`,children:[(0,n.jsx)(pt,{size:24}),(0,n.jsxs)("span",{children:[(0,n.jsx)("small",{children:"Email"}),(0,n.jsx)("b",{children:ve.email})]})]})]}),(0,n.jsxs)("div",{className:"help-grid",children:[(0,n.jsxs)("article",{children:[(0,n.jsx)(gt,{size:28}),(0,n.jsx)("h2",{children:"Build your shortlist."}),(0,n.jsx)("p",{children:"Search by model, brand or budget. Save favourites with the heart, or compare up to four products."}),(0,n.jsxs)("button",{className:"text-link",onClick:er,children:["Find my upgrade",(0,n.jsx)(Y,{size:16})]})]}),(0,n.jsxs)("article",{children:[(0,n.jsx)(La,{size:28}),(0,n.jsx)("h2",{children:"Send your bag."}),(0,n.jsx)("p",{children:"Open your bag and send it on WhatsApp. We reply with confirmed prices, stock, delivery charges and warranty."}),(0,n.jsxs)("button",{className:"text-link",onClick:()=>g("bag"),children:["Open your bag",(0,n.jsx)(Y,{size:16})]})]}),(0,n.jsxs)("article",{children:[(0,n.jsx)(mt,{size:28}),(0,n.jsx)("h2",{children:"Check the fit."}),(0,n.jsx)("p",{children:"For RAM, match the memory generation and form factor. For a drive, check the interface. Send us your model and we will check it."}),(0,n.jsxs)("a",{className:"text-link",href:ja("Hello EPIC DEVICES, can you check compatibility for my device? My model is: "),target:"_blank",rel:"noopener noreferrer",children:["Ask about compatibility",(0,n.jsx)(ta,{size:16})]})]})]}),(0,n.jsxs)("details",{open:!0,children:[(0,n.jsx)("summary",{children:"How do prices and availability work?"}),(0,n.jsx)("p",{children:"Prices are in Pakistani rupees. Our catalogue is being expanded, so every order is confirmed with you first: current price, stock, delivery charges and warranty. A listed product is not a promise of stock."})]}),(0,n.jsxs)("details",{children:[(0,n.jsx)("summary",{children:"Does adding to the bag place an order?"}),(0,n.jsx)("p",{children:"No. Your bag is a shortlist stored in this browser. Sending it on WhatsApp or by email starts the conversation. Nothing is charged on this website."})]}),(0,n.jsxs)("details",{children:[(0,n.jsx)("summary",{children:"What about delivery, returns and warranty?"}),(0,n.jsx)("p",{children:"Delivery options, charges, warranty coverage and return terms depend on the product and your city. We confirm them for your order before you pay."})]}),(0,n.jsxs)("details",{children:[(0,n.jsx)("summary",{children:"Will my shortlist be here next time?"}),(0,n.jsx)("p",{children:"Saved products, your bag and comparison selections stay in this browser. Clearing browser data removes them. They are not shared across devices."})]})]}),!["/","/shop","/saved","/help"].includes(e.path)&&!X&&(0,n.jsxs)("div",{className:"container empty-state",children:[(0,n.jsx)(ro,{size:40,strokeWidth:1.3}),(0,n.jsx)("h1",{children:"That page isn't here."}),(0,n.jsx)("p",{children:"The link may be old. Everything else is one click away."}),(0,n.jsxs)("a",{href:"#/shop",className:"button primary",children:["Shop all",(0,n.jsx)(Y,{size:17})]})]}),s.some(c=>c!==(X==null?void 0:X.id))&&e.path!=="/saved"&&(0,n.jsxs)("section",{className:"container section recent-section",children:[(0,n.jsx)("div",{className:"section-heading",children:(0,n.jsx)("h2",{children:"Recently viewed"})}),ar(s.filter(c=>c!==(X==null?void 0:X.id)).slice(0,4).map(c=>Ce[c]))]})]}),(0,n.jsx)("footer",{className:"footer",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"footer-main",children:[(0,n.jsxs)("div",{className:"footer-brand",children:[(0,n.jsx)("a",{href:"#/","aria-label":"EPIC DEVICES home",children:(0,n.jsx)("img",{src:"./assets/brand/epic-logo-stacked.svg",alt:"EPIC DEVICES",width:"188",height:"130",loading:"lazy"})}),(0,n.jsx)("p",{children:"Computer accessories, memory and storage from Lahore, priced in PKR and confirmed before you pay."}),(0,n.jsxs)("span",{className:"footer-tagline",children:["Better ",(0,n.jsx)("b",{children:"devices."})," Better ",(0,n.jsx)("b",{children:"experiences."})]})]}),(0,n.jsxs)("div",{className:"footer-col",children:[(0,n.jsx)("h3",{children:"Shop"}),ra.map(c=>(0,n.jsx)("a",{href:ee({category:c.id}),children:oa(c)},c.id))]}),(0,n.jsxs)("div",{className:"footer-col",children:[(0,n.jsx)("h3",{children:"Your shortlist"}),(0,n.jsx)("a",{href:"#/saved",children:"Saved products"}),(0,n.jsx)("button",{onClick:()=>g("compare"),children:"Compare products"}),(0,n.jsx)("button",{onClick:er,children:"Find my upgrade"}),(0,n.jsx)("button",{onClick:()=>g("bag"),children:"Your bag"}),(0,n.jsx)("a",{href:"#/help",children:"How ordering works"})]}),(0,n.jsxs)("div",{className:"footer-col footer-contact",children:[(0,n.jsx)("h3",{children:"Contact"}),(0,n.jsxs)("a",{href:ja(so),target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(Re,{size:16}),"WhatsApp ",ve.phone]}),(0,n.jsxs)("a",{href:Lc,children:[(0,n.jsx)(Yt,{size:16}),ve.phone]}),(0,n.jsxs)("a",{href:`mailto:${ve.email}`,children:[(0,n.jsx)(pt,{size:16}),ve.email]}),(0,n.jsxs)("p",{children:[ve.city,", Pakistan"]})]})]}),(0,n.jsxs)("div",{className:"footer-bottom",children:[(0,n.jsxs)("span",{children:["\xA9 ",new Date().getFullYear()," EPIC DEVICES. ",ve.website]}),(0,n.jsxs)("a",{href:"./console.html",children:["Business console",(0,n.jsx)(ta,{size:12})]})]})]})}),u.length>0&&(0,n.jsxs)("div",{className:"compare-dock",children:[(0,n.jsx)(ya,{size:18}),(0,n.jsxs)("span",{children:[u.length," of 4 selected"]}),(0,n.jsxs)("button",{disabled:u.length<2,onClick:()=>g("compare"),children:["Compare now",(0,n.jsx)(Y,{size:15})]}),(0,n.jsx)("button",{className:"icon-button","aria-label":"Clear comparison",onClick:()=>i([]),children:(0,n.jsx)(Ia,{size:17})})]}),(0,n.jsx)("div",{className:"toast "+(E&&!h?"visible":""),role:"status","aria-live":"polite",children:E&&!h&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ct,{size:17}),E]})}),h==="quick"&&x&&(0,n.jsx)(Xl,{title:"Quick view",close:mo,wide:!0,children:(0,n.jsx)(Sc,{p:Ce[x],compact:!0},x)}),h==="finder"&&(0,n.jsx)(Xl,{title:"Find my upgrade",close:mo,children:(0,n.jsxs)("div",{className:"finder-content",children:[(0,n.jsx)("span",{className:"eyebrow",children:"Two quick choices"}),(0,n.jsx)("h2",{children:"What are you upgrading?"}),(0,n.jsx)("p",{children:"Pick a category and a budget. We will show what fits."}),(0,n.jsx)("div",{className:"finder-options",children:ra.map(c=>{let S=$l[c.icon];return(0,n.jsxs)("button",{className:Xa===c.id?"selected":"","aria-pressed":Xa===c.id,onClick:()=>Pc(c.id),children:[(0,n.jsx)(S,{size:24}),(0,n.jsx)("span",{children:c.label}),Xa===c.id&&(0,n.jsx)(ct,{size:17})]},c.id)})}),(0,n.jsxs)("label",{className:"finder-budget",children:["Your budget",(0,n.jsxs)("select",{value:Yl,onChange:c=>Ac(c.target.value),children:[(0,n.jsx)("option",{value:"",children:"Any budget"}),Li.map(c=>(0,n.jsxs)("option",{value:c,children:["Up to ",pe(c)]},c))]})]}),(0,n.jsxs)("div",{className:"finder-result-count",role:"status",children:[uo(ne,{category:Xa,max:Yl}).length," products match your choices."]}),(0,n.jsxs)("button",{className:"button primary full",onClick:()=>la(ee({category:Xa,max:Yl,sort:"price-asc"})),children:["Show my matches",(0,n.jsx)(Y,{size:18})]})]})}),h==="bag"&&(0,n.jsx)(Xl,{title:`Your bag, ${po} ${po===1?"item":"items"}`,close:mo,drawer:!0,children:(0,n.jsx)("div",{className:"bag-content",children:t.length?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"bag-note",children:["Send this list to confirm your order.",(0,n.jsx)("small",{children:"We reply with stock, final prices, delivery and warranty."})]}),(0,n.jsx)("div",{className:"bag-lines",children:t.map(c=>{let S=Ce[c.id];return(0,n.jsxs)("div",{className:"bag-line",children:[(0,n.jsx)("a",{href:wa(c.id),tabIndex:-1,"aria-hidden":"true",children:(0,n.jsx)(co,{product:S,compact:!0})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{className:"bag-product-name",href:wa(c.id),children:ue(S)}),(0,n.jsx)("strong",{children:pe(Te(S))}),(0,n.jsxs)("div",{className:"quantity",children:[(0,n.jsx)("button",{"aria-label":"Decrease quantity of "+ue(S),disabled:c.quantity<=1,onClick:()=>r(U=>U.map(q=>q.id===c.id?{...q,quantity:q.quantity-1}:q)),children:(0,n.jsx)(Qt,{size:13})}),(0,n.jsx)("output",{children:c.quantity}),(0,n.jsx)("button",{"aria-label":"Increase quantity of "+ue(S),disabled:c.quantity>=99,onClick:()=>r(U=>U.map(q=>q.id===c.id?{...q,quantity:q.quantity+1}:q)),children:(0,n.jsx)(Ka,{size:13})})]})]}),(0,n.jsx)("button",{className:"icon-button","aria-label":"Remove "+ue(S)+" from bag",onClick:()=>r(U=>U.filter(q=>q.id!==c.id)),children:(0,n.jsx)(no,{size:16})})]},c.id)})}),(0,n.jsxs)("div",{className:"bag-summary",children:[(0,n.jsxs)("span",{children:["Catalogue subtotal",(0,n.jsx)("strong",{children:pe(Ci)})]}),(0,n.jsx)("p",{children:"Delivery charges are confirmed with your order. No payment is taken on this website."}),(0,n.jsxs)("a",{className:"button primary full",href:ja(xo()),target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(Re,{size:18}),"Send enquiry on WhatsApp"]}),(0,n.jsxs)("div",{className:"bag-secondary",children:[(0,n.jsxs)("a",{className:"button",href:`mailto:${ve.email}?subject=${encodeURIComponent("Product enquiry, EPIC DEVICES")}&body=${encodeURIComponent(xo())}`,children:[(0,n.jsx)(pt,{size:15}),"Email"]}),(0,n.jsxs)("button",{className:"button",onClick:Fc,children:[(0,n.jsx)(Qr,{size:15}),"Copy"]}),(0,n.jsxs)("button",{className:"button",onClick:Tc,children:[(0,n.jsx)(Yr,{size:15}),"Download"]})]}),(0,n.jsx)("small",{children:"WhatsApp opens with your list filled in. Press send to reach us."})]})]}):(0,n.jsxs)("div",{className:"empty-state",children:[(0,n.jsx)(La,{size:44,strokeWidth:1.2}),(0,n.jsx)("h2",{children:"Your bag is empty."}),(0,n.jsx)("p",{children:"Add products, then send the list to us on WhatsApp."}),(0,n.jsxs)("button",{className:"button primary",onClick:()=>la("#/shop"),children:["Shop all",(0,n.jsx)(Y,{size:17})]})]})})}),h==="compare"&&(0,n.jsx)(Xl,{title:"Compare products",close:mo,wide:!0,children:(0,n.jsxs)("div",{className:"compare-content",children:[(0,n.jsx)("h2",{children:"Side by side."}),u.length<2?(0,n.jsxs)("div",{className:"empty-state",children:[(0,n.jsx)(ya,{size:40}),(0,n.jsx)("h3",{children:"Choose at least two products."}),(0,n.jsx)("p",{children:"Use the layers button on any product card to compare up to four."}),(0,n.jsxs)("button",{className:"button primary",onClick:()=>la("#/shop"),children:["Shop all",(0,n.jsx)(Y,{size:16})]})]}):(0,n.jsx)("div",{className:"compare-scroll",role:"region","aria-label":"Product comparison",tabIndex:0,children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"col",children:"At a glance"}),u.map(c=>(0,n.jsxs)("th",{scope:"col",children:[(0,n.jsx)("button",{className:"remove-compare","aria-label":"Remove "+ue(Ce[c])+" from comparison",onClick:()=>Pi(c),children:(0,n.jsx)(Ia,{size:14})}),(0,n.jsxs)("a",{href:wa(c),children:[(0,n.jsx)(co,{product:Ce[c],compact:!0}),(0,n.jsx)("b",{children:ue(Ce[c])})]})]},c))]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"row",children:"Price"}),u.map(c=>(0,n.jsx)("td",{className:"compare-price",children:pe(Te(Ce[c]))},c))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"row",children:"Brand"}),u.map(c=>(0,n.jsx)("td",{children:Ce[c].brand},c))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"row",children:"Category"}),u.map(c=>(0,n.jsx)("td",{children:oa(fo(Ce[c].category))},c))]}),[...new Set(u.flatMap(c=>Ce[c].specs.map(([S])=>S)))].map(c=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"row",children:c}),u.map(S=>{var U;return(0,n.jsx)("td",{children:((U=Ce[S].specs.find(([q])=>c===q))==null?void 0:U[1])||"Not listed"},S)})]},c)),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"row",children:"Availability"}),u.map(c=>(0,n.jsx)("td",{children:"Confirmed on enquiry"},c))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"row",children:"Next step"}),u.map(c=>(0,n.jsx)("td",{children:(0,n.jsxs)("button",{className:"button primary",onClick:()=>bi(c),children:[(0,n.jsx)(Ka,{size:15}),"Add to bag"]})},c))]})]})]})})]})})]})})}var bc=ua(io(),1);(0,kc.createRoot)(document.getElementById("root")).render((0,bc.jsx)(Ii,{}));requestAnimationFrame(()=>{var e;return(e=document.getElementById("boot"))==null?void 0:e.remove()});})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/arrow-right.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/arrow-up-right.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/check.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-left.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-right.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/copy.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/download.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/hard-drive.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/headphones.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/heart.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/keyboard.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/layers.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/mail.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/memory-stick.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/menu.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/message-circle.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/mic.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/minus.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/mouse.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/package.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/pause.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/phone.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/play.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/plus.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/search.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/shield-check.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/shopping-bag.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/sliders-horizontal.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/trash-2.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/x.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
