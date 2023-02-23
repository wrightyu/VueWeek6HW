import{_ as ut,o as T,c as k,d as e,n as Z,j as ft,F as z,f as tt,t as L,a as Et,g as pt,h as Mt,k as $t,r as ht,b as _t}from"./index-01b5661e.js";import{M as Vt}from"./bootstrap.esm-726e85d3.js";const qt={props:["pages"],methods:{updatePage(r){this.$emit("emitPages",r)}}},jt={"aria-label":"Page navigation example"},Ft={class:"pagination justify-content-center"},Bt=e("span",{"aria-hidden":"true"},"«",-1),Kt=[Bt],Ht={key:0,class:"page-link"},Yt=["onClick"],Wt=e("span",{"aria-hidden":"true"},"»",-1),Ut=[Wt];function zt(r,v,n,a,i,o){return T(),k("nav",jt,[e("ul",Ft,[e("li",{class:Z([{disabled:!n.pages.has_pre},"page-item"])},[e("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:v[0]||(v[0]=ft(s=>o.updatePage(n.pages.current_page-1),["prevent"]))},Kt)],2),(T(!0),k(z,null,tt(n.pages.total_pages,s=>(T(),k("li",{class:Z(["page-item",{active:n.pages.current_page===s}]),key:s},[s===n.pages.current_page?(T(),k("span",Ht,L(s),1)):(T(),k("a",{key:1,class:"page-link",href:"#",onClick:ft(p=>o.updatePage(s),["prevent"])},L(s),9,Yt))],2))),128)),e("li",{class:Z(["page-item",{disabled:!n.pages.has_next}])},[e("a",{class:"page-link",href:"#","aria-label":"Next",onClick:v[1]||(v[1]=ft(s=>o.updatePage(n.pages.current_page+1),["prevent"]))},Ut)],2)])])}const Qt=ut(qt,[["render",zt]]),Gt={props:{item:{}},data(){return{modal:""}},emits:["del-item"],methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new Vt(this.$refs.modal)}},Jt={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},Xt={class:"modal-dialog",role:"document"},Zt={class:"modal-content border-0"},te={class:"modal-header bg-danger text-white"},ee={class:"modal-title"},ne=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),se={class:"modal-body"},oe={class:"text-danger"},re={class:"modal-footer"},ie=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ae(r,v,n,a,i,o){return T(),k("div",Jt,[e("div",Xt,[e("div",Zt,[e("div",te,[e("h5",ee,[e("span",null,"刪除 "+L(n.item.title),1)]),ne]),e("div",se,[Et(" 是否刪除 "),e("strong",oe,L(n.item.title),1),Et(" (刪除後將無法恢復)。 ")]),e("div",re,[ie,e("button",{type:"button",class:"btn btn-danger",onClick:v[0]||(v[0]=s=>r.$emit("del-item"))}," 確認刪除 ")])])])],512)}const le=ut(Gt,[["render",ae]]);var j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},mt={},de={get exports(){return mt},set exports(r){mt=r}},G={},ue={get exports(){return G},set exports(r){G=r}};/*!
  * Bootstrap index.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var yt;function Y(){return yt||(yt=1,function(r,v){(function(n,a){a(v)})(j,function(n){const o="transitionend",s=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),p=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},c=t=>{let u=t.getAttribute("data-bs-target");if(!u||u==="#"){let m=t.getAttribute("href");if(!m||!m.includes("#")&&!m.startsWith("."))return null;m.includes("#")&&!m.startsWith("#")&&(m=`#${m.split("#")[1]}`),u=m&&m!=="#"?m.trim():null}return u},_=t=>{const u=c(t);return u&&document.querySelector(u)?u:null},D=t=>{const u=c(t);return u?document.querySelector(u):null},f=t=>{if(!t)return 0;let{transitionDuration:u,transitionDelay:m}=window.getComputedStyle(t);const M=Number.parseFloat(u),$=Number.parseFloat(m);return!M&&!$?0:(u=u.split(",")[0],m=m.split(",")[0],(Number.parseFloat(u)+Number.parseFloat(m))*1e3)},C=t=>{t.dispatchEvent(new Event(o))},h=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),A=t=>h(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(t):null,E=t=>{if(!h(t)||t.getClientRects().length===0)return!1;const u=getComputedStyle(t).getPropertyValue("visibility")==="visible",m=t.closest("details:not([open])");if(!m)return u;if(m!==t){const M=t.closest("summary");if(M&&M.parentNode!==m||M===null)return!1}return u},g=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",I=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const u=t.getRootNode();return u instanceof ShadowRoot?u:null}return t instanceof ShadowRoot?t:t.parentNode?I(t.parentNode):null},F=()=>{},N=t=>{t.offsetHeight},V=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,x=[],l=t=>{document.readyState==="loading"?(x.length||document.addEventListener("DOMContentLoaded",()=>{for(const u of x)u()}),x.push(t)):t()},d=()=>document.documentElement.dir==="rtl",b=t=>{l(()=>{const u=V();if(u){const m=t.NAME,M=u.fn[m];u.fn[m]=t.jQueryInterface,u.fn[m].Constructor=t,u.fn[m].noConflict=()=>(u.fn[m]=M,t.jQueryInterface)}})},y=t=>{typeof t=="function"&&t()},S=(t,u,m=!0)=>{if(!m){y(t);return}const M=5,$=f(u)+M;let R=!1;const q=({target:K})=>{K===u&&(R=!0,u.removeEventListener(o,q),y(t))};u.addEventListener(o,q),setTimeout(()=>{R||C(u)},$)},w=(t,u,m,M)=>{const $=t.length;let R=t.indexOf(u);return R===-1?!m&&M?t[$-1]:t[0]:(R+=m?1:-1,M&&(R=(R+$)%$),t[Math.max(0,Math.min(R,$-1))])};n.defineJQueryPlugin=b,n.execute=y,n.executeAfterTransition=S,n.findShadowRoot=I,n.getElement=A,n.getElementFromSelector=D,n.getNextActiveElement=w,n.getSelectorFromElement=_,n.getTransitionDurationFromElement=f,n.getUID=p,n.getjQuery=V,n.isDisabled=g,n.isElement=h,n.isRTL=d,n.isVisible=E,n.noop=F,n.onDOMContentLoaded=l,n.reflow=N,n.toType=s,n.triggerTransitionEnd=C,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(ue,G)),G}var et={},ce={get exports(){return et},set exports(r){et=r}};/*!
  * Bootstrap event-handler.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var vt;function X(){return vt||(vt=1,function(r,v){(function(n,a){r.exports=a(Y())})(j,function(n){const a=/[^.]*(?=\..*)\.|.*/,i=/\..*/,o=/::\d+$/,s={};let p=1;const c={mouseenter:"mouseover",mouseleave:"mouseout"},_=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function D(l,d){return d&&`${d}::${p++}`||l.uidEvent||p++}function f(l){const d=D(l);return l.uidEvent=d,s[d]=s[d]||{},s[d]}function C(l,d){return function b(y){return x(y,{delegateTarget:l}),b.oneOff&&V.off(l,y.type,d),d.apply(l,[y])}}function h(l,d,b){return function y(S){const w=l.querySelectorAll(d);for(let{target:t}=S;t&&t!==this;t=t.parentNode)for(const u of w)if(u===t)return x(S,{delegateTarget:t}),y.oneOff&&V.off(l,S.type,d,b),b.apply(t,[S])}}function A(l,d,b=null){return Object.values(l).find(y=>y.callable===d&&y.delegationSelector===b)}function E(l,d,b){const y=typeof d=="string",S=y?b:d||b;let w=N(l);return _.has(w)||(w=l),[y,S,w]}function g(l,d,b,y,S){if(typeof d!="string"||!l)return;let[w,t,u]=E(d,b,y);d in c&&(t=(ct=>function(H){if(!H.relatedTarget||H.relatedTarget!==H.delegateTarget&&!H.delegateTarget.contains(H.relatedTarget))return ct.call(this,H)})(t));const m=f(l),M=m[u]||(m[u]={}),$=A(M,t,w?b:null);if($){$.oneOff=$.oneOff&&S;return}const R=D(t,d.replace(a,"")),q=w?h(l,b,t):C(l,t);q.delegationSelector=w?b:null,q.callable=t,q.oneOff=S,q.uidEvent=R,M[R]=q,l.addEventListener(u,q,w)}function I(l,d,b,y,S){const w=A(d[b],y,S);w&&(l.removeEventListener(b,w,Boolean(S)),delete d[b][w.uidEvent])}function F(l,d,b,y){const S=d[b]||{};for(const w of Object.keys(S))if(w.includes(y)){const t=S[w];I(l,d,b,t.callable,t.delegationSelector)}}function N(l){return l=l.replace(i,""),c[l]||l}const V={on(l,d,b,y){g(l,d,b,y,!1)},one(l,d,b,y){g(l,d,b,y,!0)},off(l,d,b,y){if(typeof d!="string"||!l)return;const[S,w,t]=E(d,b,y),u=t!==d,m=f(l),M=m[t]||{},$=d.startsWith(".");if(typeof w<"u"){if(!Object.keys(M).length)return;I(l,m,t,w,S?b:null);return}if($)for(const R of Object.keys(m))F(l,m,R,d.slice(1));for(const R of Object.keys(M)){const q=R.replace(o,"");if(!u||d.includes(q)){const K=M[R];I(l,m,t,K.callable,K.delegationSelector)}}},trigger(l,d,b){if(typeof d!="string"||!l)return null;const y=n.getjQuery(),S=N(d),w=d!==S;let t=null,u=!0,m=!0,M=!1;w&&y&&(t=y.Event(d,b),y(l).trigger(t),u=!t.isPropagationStopped(),m=!t.isImmediatePropagationStopped(),M=t.isDefaultPrevented());let $=new Event(d,{bubbles:u,cancelable:!0});return $=x($,b),M&&$.preventDefault(),m&&l.dispatchEvent($),$.defaultPrevented&&t&&t.preventDefault(),$}};function x(l,d){for(const[b,y]of Object.entries(d||{}))try{l[b]=y}catch{Object.defineProperty(l,b,{configurable:!0,get(){return y}})}return l}return V})}(ce)),et}var nt={},fe={get exports(){return nt},set exports(r){nt=r}};/*!
  * Bootstrap selector-engine.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var At;function gt(){return At||(At=1,function(r,v){(function(n,a){r.exports=a(Y())})(j,function(n){return{find(i,o=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(o,i))},findOne(i,o=document.documentElement){return Element.prototype.querySelector.call(o,i)},children(i,o){return[].concat(...i.children).filter(s=>s.matches(o))},parents(i,o){const s=[];let p=i.parentNode.closest(o);for(;p;)s.push(p),p=p.parentNode.closest(o);return s},prev(i,o){let s=i.previousElementSibling;for(;s;){if(s.matches(o))return[s];s=s.previousElementSibling}return[]},next(i,o){let s=i.nextElementSibling;for(;s;){if(s.matches(o))return[s];s=s.nextElementSibling}return[]},focusableChildren(i){const o=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(s=>`${s}:not([tabindex^="-"])`).join(",");return this.find(o,i).filter(s=>!n.isDisabled(s)&&n.isVisible(s))}}})}(fe)),nt}var st={},he={get exports(){return st},set exports(r){st=r}},ot={},_e={get exports(){return ot},set exports(r){ot=r}};/*!
  * Bootstrap manipulator.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Dt;function xt(){return Dt||(Dt=1,function(r,v){(function(n,a){r.exports=a()})(j,function(){function n(o){if(o==="true")return!0;if(o==="false")return!1;if(o===Number(o).toString())return Number(o);if(o===""||o==="null")return null;if(typeof o!="string")return o;try{return JSON.parse(decodeURIComponent(o))}catch{return o}}function a(o){return o.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`)}return{setDataAttribute(o,s,p){o.setAttribute(`data-bs-${a(s)}`,p)},removeDataAttribute(o,s){o.removeAttribute(`data-bs-${a(s)}`)},getDataAttributes(o){if(!o)return{};const s={},p=Object.keys(o.dataset).filter(c=>c.startsWith("bs")&&!c.startsWith("bsConfig"));for(const c of p){let _=c.replace(/^bs/,"");_=_.charAt(0).toLowerCase()+_.slice(1,_.length),s[_]=n(o.dataset[c])}return s},getDataAttribute(o,s){return n(o.getAttribute(`data-bs-${a(s)}`))}}})}(_e)),ot}/*!
  * Bootstrap scrollbar.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ot;function pe(){return Ot||(Ot=1,function(r,v){(function(n,a){r.exports=a(gt(),xt(),Y())})(j,function(n,a,i){const o=h=>h&&typeof h=="object"&&"default"in h?h:{default:h},s=o(n),p=o(a),c=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_=".sticky-top",D="padding-right",f="margin-right";class C{constructor(){this._element=document.body}getWidth(){const A=document.documentElement.clientWidth;return Math.abs(window.innerWidth-A)}hide(){const A=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,D,E=>E+A),this._setElementAttributes(c,D,E=>E+A),this._setElementAttributes(_,f,E=>E-A)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,D),this._resetElementAttributes(c,D),this._resetElementAttributes(_,f)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(A,E,g){const I=this.getWidth(),F=N=>{if(N!==this._element&&window.innerWidth>N.clientWidth+I)return;this._saveInitialAttribute(N,E);const V=window.getComputedStyle(N).getPropertyValue(E);N.style.setProperty(E,`${g(Number.parseFloat(V))}px`)};this._applyManipulationCallback(A,F)}_saveInitialAttribute(A,E){const g=A.style.getPropertyValue(E);g&&p.default.setDataAttribute(A,E,g)}_resetElementAttributes(A,E){const g=I=>{const F=p.default.getDataAttribute(I,E);if(F===null){I.style.removeProperty(E);return}p.default.removeDataAttribute(I,E),I.style.setProperty(E,F)};this._applyManipulationCallback(A,g)}_applyManipulationCallback(A,E){if(i.isElement(A)){E(A);return}for(const g of s.default.find(A,this._element))E(g)}}return C})}(he)),st}var rt={},me={get exports(){return rt},set exports(r){rt=r}},it={},ge={get exports(){return it},set exports(r){it=r}};/*!
  * Bootstrap data.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ct;function be(){return Ct||(Ct=1,function(r,v){(function(n,a){r.exports=a()})(j,function(){const n=new Map;return{set(i,o,s){n.has(i)||n.set(i,new Map);const p=n.get(i);if(!p.has(o)&&p.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(p.keys())[0]}.`);return}p.set(o,s)},get(i,o){return n.has(i)&&n.get(i).get(o)||null},remove(i,o){if(!n.has(i))return;const s=n.get(i);s.delete(o),s.size===0&&n.delete(i)}}})}(ge)),it}var at={},Ee={get exports(){return at},set exports(r){at=r}};/*!
  * Bootstrap config.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var wt;function bt(){return wt||(wt=1,function(r,v){(function(n,a){r.exports=a(Y(),xt())})(j,function(n,a){const o=(p=>p&&typeof p=="object"&&"default"in p?p:{default:p})(a);class s{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(c){return c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c}_mergeConfigObj(c,_){const D=n.isElement(_)?o.default.getDataAttribute(_,"config"):{};return{...this.constructor.Default,...typeof D=="object"?D:{},...n.isElement(_)?o.default.getDataAttributes(_):{},...typeof c=="object"?c:{}}}_typeCheckConfig(c,_=this.constructor.DefaultType){for(const D of Object.keys(_)){const f=_[D],C=c[D],h=n.isElement(C)?"element":n.toType(C);if(!new RegExp(f).test(h))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${D}" provided type "${h}" but expected type "${f}".`)}}}return s})}(Ee)),at}/*!
  * Bootstrap base-component.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Tt;function ye(){return Tt||(Tt=1,function(r,v){(function(n,a){r.exports=a(be(),Y(),X(),bt())})(j,function(n,a,i,o){const s=C=>C&&typeof C=="object"&&"default"in C?C:{default:C},p=s(n),c=s(i),_=s(o),D="5.2.2";class f extends _.default{constructor(h,A){super(),h=a.getElement(h),h&&(this._element=h,this._config=this._getConfig(A),p.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){p.default.remove(this._element,this.constructor.DATA_KEY),c.default.off(this._element,this.constructor.EVENT_KEY);for(const h of Object.getOwnPropertyNames(this))this[h]=null}_queueCallback(h,A,E=!0){a.executeAfterTransition(h,A,E)}_getConfig(h){return h=this._mergeConfigObj(h,this._element),h=this._configAfterMerge(h),this._typeCheckConfig(h),h}static getInstance(h){return p.default.get(a.getElement(h),this.DATA_KEY)}static getOrCreateInstance(h,A={}){return this.getInstance(h)||new this(h,typeof A=="object"?A:null)}static get VERSION(){return D}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(h){return`${h}${this.EVENT_KEY}`}}return f})}(me)),rt}var lt={},ve={get exports(){return lt},set exports(r){lt=r}};/*!
  * Bootstrap backdrop.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var kt;function Ae(){return kt||(kt=1,function(r,v){(function(n,a){r.exports=a(X(),Y(),bt())})(j,function(n,a,i){const o=E=>E&&typeof E=="object"&&"default"in E?E:{default:E},s=o(n),p=o(i),c="backdrop",_="fade",D="show",f=`mousedown.bs.${c}`,C={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},h={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class A extends p.default{constructor(g){super(),this._config=this._getConfig(g),this._isAppended=!1,this._element=null}static get Default(){return C}static get DefaultType(){return h}static get NAME(){return c}show(g){if(!this._config.isVisible){a.execute(g);return}this._append();const I=this._getElement();this._config.isAnimated&&a.reflow(I),I.classList.add(D),this._emulateAnimation(()=>{a.execute(g)})}hide(g){if(!this._config.isVisible){a.execute(g);return}this._getElement().classList.remove(D),this._emulateAnimation(()=>{this.dispose(),a.execute(g)})}dispose(){this._isAppended&&(s.default.off(this._element,f),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const g=document.createElement("div");g.className=this._config.className,this._config.isAnimated&&g.classList.add(_),this._element=g}return this._element}_configAfterMerge(g){return g.rootElement=a.getElement(g.rootElement),g}_append(){if(this._isAppended)return;const g=this._getElement();this._config.rootElement.append(g),s.default.on(g,f,()=>{a.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(g){a.executeAfterTransition(g,this._getElement(),this._config.isAnimated)}}return A})}(ve)),lt}var dt={},De={get exports(){return dt},set exports(r){dt=r}};/*!
  * Bootstrap focustrap.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Nt;function Oe(){return Nt||(Nt=1,function(r,v){(function(n,a){r.exports=a(X(),gt(),bt())})(j,function(n,a,i){const o=V=>V&&typeof V=="object"&&"default"in V?V:{default:V},s=o(n),p=o(a),c=o(i),_="focustrap",f=".bs.focustrap",C=`focusin${f}`,h=`keydown.tab${f}`,A="Tab",E="forward",g="backward",I={autofocus:!0,trapElement:null},F={autofocus:"boolean",trapElement:"element"};class N extends c.default{constructor(x){super(),this._config=this._getConfig(x),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return I}static get DefaultType(){return F}static get NAME(){return _}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),s.default.off(document,f),s.default.on(document,C,x=>this._handleFocusin(x)),s.default.on(document,h,x=>this._handleKeydown(x)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,s.default.off(document,f))}_handleFocusin(x){const{trapElement:l}=this._config;if(x.target===document||x.target===l||l.contains(x.target))return;const d=p.default.focusableChildren(l);d.length===0?l.focus():this._lastTabNavDirection===g?d[d.length-1].focus():d[0].focus()}_handleKeydown(x){x.key===A&&(this._lastTabNavDirection=x.shiftKey?g:E)}}return N})}(De)),dt}var J={},Ce={get exports(){return J},set exports(r){J=r}};/*!
  * Bootstrap component-functions.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var St;function we(){return St||(St=1,function(r,v){(function(n,a){a(v,X(),Y())})(j,function(n,a,i){const s=(c=>c&&typeof c=="object"&&"default"in c?c:{default:c})(a),p=(c,_="hide")=>{const D=`click.dismiss${c.EVENT_KEY}`,f=c.NAME;s.default.on(document,D,`[data-bs-dismiss="${f}"]`,function(C){if(["A","AREA"].includes(this.tagName)&&C.preventDefault(),i.isDisabled(this))return;const h=i.getElementFromSelector(this)||this.closest(`.${f}`);c.getOrCreateInstance(h)[_]()})};n.enableDismissTrigger=p,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(Ce,J)),J}/*!
  * Bootstrap modal.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(r,v){(function(n,a){r.exports=a(Y(),X(),gt(),pe(),ye(),Ae(),Oe(),we())})(j,function(n,a,i,o,s,p,c,_){const D=U=>U&&typeof U=="object"&&"default"in U?U:{default:U},f=D(a),C=D(i),h=D(o),A=D(s),E=D(p),g=D(c),I="modal",N=".bs.modal",V=".data-api",x="Escape",l=`hide${N}`,d=`hidePrevented${N}`,b=`hidden${N}`,y=`show${N}`,S=`shown${N}`,w=`resize${N}`,t=`click.dismiss${N}`,u=`mousedown.dismiss${N}`,m=`keydown.dismiss${N}`,M=`click${N}${V}`,$="modal-open",R="fade",q="show",K="modal-static",ct=".modal.show",H=".modal-dialog",Lt=".modal-body",It='[data-bs-toggle="modal"]',Rt={backdrop:!0,focus:!0,keyboard:!0},Pt={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class W extends A.default{constructor(O,P){super(O,P),this._dialog=C.default.findOne(H,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new h.default,this._addEventListeners()}static get Default(){return Rt}static get DefaultType(){return Pt}static get NAME(){return I}toggle(O){return this._isShown?this.hide():this.show(O)}show(O){this._isShown||this._isTransitioning||f.default.trigger(this._element,y,{relatedTarget:O}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add($),this._adjustDialog(),this._backdrop.show(()=>this._showElement(O)))}hide(){!this._isShown||this._isTransitioning||f.default.trigger(this._element,l).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(q),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const O of[window,this._dialog])f.default.off(O,N);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new E.default({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new g.default({trapElement:this._element})}_showElement(O){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const P=C.default.findOne(Lt,this._dialog);P&&(P.scrollTop=0),n.reflow(this._element),this._element.classList.add(q);const B=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,f.default.trigger(this._element,S,{relatedTarget:O})};this._queueCallback(B,this._dialog,this._isAnimated())}_addEventListeners(){f.default.on(this._element,m,O=>{if(O.key===x){if(this._config.keyboard){O.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),f.default.on(window,w,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),f.default.on(this._element,u,O=>{f.default.one(this._element,t,P=>{if(!(this._element!==O.target||this._element!==P.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove($),this._resetAdjustments(),this._scrollBar.reset(),f.default.trigger(this._element,b)})}_isAnimated(){return this._element.classList.contains(R)}_triggerBackdropTransition(){if(f.default.trigger(this._element,d).defaultPrevented)return;const P=this._element.scrollHeight>document.documentElement.clientHeight,B=this._element.style.overflowY;B==="hidden"||this._element.classList.contains(K)||(P||(this._element.style.overflowY="hidden"),this._element.classList.add(K),this._queueCallback(()=>{this._element.classList.remove(K),this._queueCallback(()=>{this._element.style.overflowY=B},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const O=this._element.scrollHeight>document.documentElement.clientHeight,P=this._scrollBar.getWidth(),B=P>0;if(B&&!O){const Q=n.isRTL()?"paddingLeft":"paddingRight";this._element.style[Q]=`${P}px`}if(!B&&O){const Q=n.isRTL()?"paddingRight":"paddingLeft";this._element.style[Q]=`${P}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(O,P){return this.each(function(){const B=W.getOrCreateInstance(this,O);if(typeof O=="string"){if(typeof B[O]>"u")throw new TypeError(`No method named "${O}"`);B[O](P)}})}}return f.default.on(document,M,It,function(U){const O=n.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&U.preventDefault(),f.default.one(O,y,Q=>{Q.defaultPrevented||f.default.one(O,b,()=>{n.isVisible(this)&&this.focus()})});const P=C.default.findOne(ct);P&&W.getInstance(P).hide(),W.getOrCreateInstance(O).toggle(this)}),_.enableDismissTrigger(W),n.defineJQueryPlugin(W),W})})(de);const Te=mt,ke={methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new Te(this.$refs.modal)}},Ne={props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-paid"],mixins:[ke],watch:{order(){this.tempOrder=this.order}}},Se={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},Me={class:"modal-dialog modal-xl",role:"document"},$e={class:"modal-content border-0"},xe=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},[e("span",null,"訂單細節")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Le={class:"modal-body"},Ie={class:"row"},Re={class:"col-md-4"},Pe=e("h3",null,"用戶資料",-1),Ve={class:"table"},qe={key:0},je=e("th",{style:{width:"100px"}},"姓名",-1),Fe=e("th",null,"Email",-1),Be=e("th",null,"電話",-1),Ke=e("th",null,"地址",-1),He={class:"col-md-8"},Ye=e("h3",null,"訂單細節",-1),We={class:"table"},Ue=e("th",{style:{width:"100px"}},"訂單編號",-1),ze=e("th",null,"下單時間",-1),Qe=e("th",null,"付款時間",-1),Ge={key:0},Je={key:1},Xe=e("th",null,"付款狀態",-1),Ze={key:0,class:"text-success"},tn={key:1,class:"text-muted"},en=e("th",null,"總金額",-1),nn=e("h3",null,"選購商品",-1),sn={class:"table"},on=e("thead",null,[e("tr")],-1),rn={class:"text-end"},an={class:"d-flex justify-content-end"},ln={class:"form-check"},dn={class:"form-check-label",for:"flexCheckDefault"},un={key:0},cn={key:1},fn={class:"modal-footer"},hn=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function _n(r,v,n,a,i,o){return T(),k("div",Se,[e("div",Me,[e("div",$e,[xe,e("div",Le,[e("div",Ie,[e("div",Re,[Pe,e("table",Ve,[i.tempOrder.user?(T(),k("tbody",qe,[e("tr",null,[je,e("td",null,L(i.tempOrder.user.name),1)]),e("tr",null,[Fe,e("td",null,L(i.tempOrder.user.email),1)]),e("tr",null,[Be,e("td",null,L(i.tempOrder.user.tel),1)]),e("tr",null,[Ke,e("td",null,L(i.tempOrder.user.address),1)])])):pt("",!0)])]),e("div",He,[Ye,e("table",We,[e("tbody",null,[e("tr",null,[Ue,e("td",null,L(i.tempOrder.id),1)]),e("tr",null,[ze,e("td",null,L(r.$filters.date(i.tempOrder.create_at)),1)]),e("tr",null,[Qe,e("td",null,[i.tempOrder.paid_date?(T(),k("span",Ge,L(r.$filters.date(i.tempOrder.paid_date)),1)):(T(),k("span",Je,"時間不正確"))])]),e("tr",null,[Xe,e("td",null,[i.tempOrder.is_paid?(T(),k("strong",Ze,"已付款")):(T(),k("span",tn,"尚未付款"))])]),e("tr",null,[en,e("td",null,L(r.$filters.currency(i.tempOrder.total)),1)])])]),nn,e("table",sn,[on,e("tbody",null,[(T(!0),k(z,null,tt(i.tempOrder.products,s=>(T(),k("tr",{key:s.id},[e("th",null,L(s.product.title),1),e("td",null,L(s.qty)+" / "+L(s.product.unit),1),e("td",rn,L(r.$filters.currency(s.final_total)),1)]))),128))])]),e("div",an,[e("div",ln,[Mt(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":v[0]||(v[0]=s=>i.tempOrder.is_paid=s)},null,512),[[$t,i.tempOrder.is_paid]]),e("label",dn,[i.tempOrder.is_paid?(T(),k("span",un,"已付款")):(T(),k("span",cn,"未付款"))])])])])])]),e("div",fn,[hn,e("button",{type:"button",class:"btn btn-primary",onClick:v[1]||(v[1]=s=>r.$emit("update-paid",i.tempOrder))}," 修改付款狀態 ")])])])],512)}const pn=ut(Ne,[["render",_n]]),mn={data(){return{orders:{},isNew:!1,pagination:{},tempOrder:{},currentPage:1}},components:{Pagination:Qt,DelOrderModal:le,OrderModal:pn},methods:{getOrders(r=1){this.currentPage=r;const v=`https://vue3-course-api.hexschool.io//v2/api/wrightyu/admin/orders?page=${r}`;this.$http.get(v,this.tempProduct).then(n=>{this.orders=n.data.orders,this.pagination=n.data.pagination}).catch(n=>{console.log(n)})},openModal(r){this.tempOrder={...r},this.isNew=!1,this.$refs.orderModal.openModal()},openDelOrderModal(r){this.tempOrder={...r},this.$refs.delModal.openModal()},updatePaid(r){const v=`https://vue3-course-api.hexschool.io//v2/api/wrightyu/admin/order/${r.id}`,n={is_paid:r.is_paid};this.$http.put(v,{data:n}).then(a=>{this.$refs.orderModal.hideModal(),this.getOrders(this.currentPage)}).catch(a=>{console.log(a)})},delOrder(){const r=`https://vue3-course-api.hexschool.io//v2/api/wrightyu/admin/order/${this.tempOrder.id}`;this.$http.delete(r).then(()=>{this.$refs.delModal.hideModal(),this.getOrders(this.currentPage)}).catch(v=>{console.log(v)})}},created(){this.getOrders()}},gn={class:"table mt-4"},bn=e("thead",null,[e("tr",null,[e("th",null,"購買時間"),e("th",null,"Email"),e("th",null,"購買款項"),e("th",null,"應付金額"),e("th",null,"是否付款"),e("th",null,"編輯")])],-1),En=["textContent"],yn={class:"list-unstyled"},vn={class:"text-right"},An={class:"form-check form-switch"},Dn=["id","onUpdate:modelValue","onChange"],On=["for"],Cn={key:0},wn={key:1},Tn={class:"btn-group"},kn=["onClick"],Nn=["onClick"];function Sn(r,v,n,a,i,o){const s=ht("OrderModal"),p=ht("DelOrderModal"),c=ht("Pagination");return T(),k(z,null,[e("table",gn,[bn,e("tbody",null,[(T(!0),k(z,null,tt(i.orders,(_,D)=>(T(),k(z,{key:D},[i.orders.length?(T(),k("tr",{key:0,class:Z({"text-secondary":!_.is_paid})},[e("td",null,L(r.$filters.date(_.create_at)),1),e("td",null,[_.user?(T(),k("span",{key:0,textContent:L(_.user.email)},null,8,En)):pt("",!0)]),e("td",null,[e("ul",yn,[(T(!0),k(z,null,tt(_.products,(f,C)=>(T(),k("li",{key:C},L(f.product.title)+" 數量："+L(f.qty)+" "+L(f.product.unit),1))),128))])]),e("td",vn,L(_.total),1),e("td",null,[e("div",An,[Mt(e("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${_.id}`,"onUpdate:modelValue":f=>_.is_paid=f,onChange:f=>o.updatePaid(_)},null,40,Dn),[[$t,_.is_paid]]),e("label",{class:"form-check-label",for:`paidSwitch${_.id}`},[_.is_paid?(T(),k("span",Cn,"已付款")):(T(),k("span",wn,"未付款"))],8,On)])]),e("td",null,[e("div",Tn,[e("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:f=>o.openModal(_)}," 檢視 ",8,kn),e("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:f=>o.openDelOrderModal(_)}," 刪除 ",8,Nn)])])],2)):pt("",!0)],64))),128))])]),_t(s,{order:i.tempOrder,ref:"orderModal",onUpdatePaid:o.updatePaid},null,8,["order","onUpdatePaid"]),_t(p,{item:i.tempOrder,ref:"delModal",onDelItem:o.delOrder},null,8,["item","onDelItem"]),_t(c,{pages:i.pagination,onEmitPages:o.getOrders},null,8,["pages","onEmitPages"])],64)}const xn=ut(mn,[["render",Sn]]);export{xn as default};