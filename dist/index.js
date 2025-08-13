var rt=Object.defineProperty;var Dt=Object.getOwnPropertyDescriptor;var nt=o=>{throw TypeError(o)};var n=(o,e)=>rt(o,"name",{value:e,configurable:!0});var p=(o,e,t,s)=>{for(var r=s>1?void 0:s?Dt(e,t):e,i=o.length-1,l;i>=0;i--)(l=o[i])&&(r=(s?l(e,t,r):l(r))||r);return s&&r&&rt(e,t,r),r};var it=(o,e,t)=>e.has(o)||nt("Cannot "+t);var D=(o,e,t)=>(it(o,e,"read from private field"),t?t.call(o):e.get(o)),Z=(o,e,t)=>e.has(o)?nt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,t),at=(o,e,t,s)=>(it(o,e,"write to private field"),s?s.call(o,t):e.set(o,t),t);var Y="lit-localize-status";var lt=n(o=>typeof o!="string"&&"strTag"in o,"isStrTagged"),fe=n((o,e,t)=>{let s=o[0];for(let r=1;r<o.length;r++)s+=e[t?t[r-1]:r-1],s+=o[r];return s},"joinStringsAndValues");var K=n(o=>lt(o)?fe(o.strings,o.values):o,"defaultMsg");var a=K,ct=!1;function Ae(o){if(ct)throw new Error("lit-localize can only be configured once");a=o,ct=!0}n(Ae,"_installMsgImplementation");var ze=class{static{n(this,"LocalizeController")}constructor(e){this.__litLocalizeEventHandler=t=>{t.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Y,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Y,this.__litLocalizeEventHandler)}},Ot=n(o=>o.addController(new ze(o)),"_updateWhenLocaleChanges"),dt=Ot;var v=n(()=>(o,e)=>(o.addInitializer(dt),o),"localized");var J=class{static{n(this,"Deferred")}constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}};var k=[];for(let o=0;o<256;o++)k[o]=(o>>4&15).toString(16)+(o&15).toString(16);function ht(o){let e=0,t=8997,s=0,r=33826,i=0,l=40164,u=0,d=52210;for(let g=0;g<o.length;g++)t^=o.charCodeAt(g),e=t*435,s=r*435,i=l*435,u=d*435,i+=t<<8,u+=r<<8,s+=e>>>16,t=e&65535,i+=s>>>16,r=s&65535,d=u+(i>>>16)&65535,l=i&65535;return k[d>>8]+k[d&255]+k[l>>8]+k[l&255]+k[r>>8]+k[r&255]+k[t>>8]+k[t&255]}n(ht,"fnv1a64");var Vt="",Bt="h",qt="s";function mt(o,e){return(e?Bt:qt)+ht(typeof o=="string"?o:o.join(Vt))}n(mt,"generateMsgId");var pt=new WeakMap,ut=new Map;function gt(o,e,t){if(o){let s=t?.id??Ft(e),r=o[s];if(r){if(typeof r=="string")return r;if("strTag"in r)return fe(r.strings,e.values,r.values);{let i=pt.get(r);return i===void 0&&(i=r.values,pt.set(r,i)),{...r,values:i.map(l=>e.values[l])}}}}return K(e)}n(gt,"runtimeMsg");function Ft(o){let e=typeof o=="string"?o:o.strings,t=ut.get(e);return t===void 0&&(t=mt(e,typeof o!="string"&&!("strTag"in o)),ut.set(e,t)),t}n(Ft,"generateId");function Le(o){window.dispatchEvent(new CustomEvent(Y,{detail:o}))}n(Le,"dispatchStatusEvent");var be="",Ce,ft,xe,Me,vt,O=new J;O.resolve();var ve=0,bt=n(o=>(Ae((e,t)=>gt(vt,e,t)),be=ft=o.sourceLocale,xe=new Set(o.targetLocales),xe.add(o.sourceLocale),Me=o.loadLocale,{getLocale:Wt,setLocale:Gt}),"configureLocalization"),Wt=n(()=>be,"getLocale"),Gt=n(o=>{if(o===(Ce??be))return O.promise;if(!xe||!Me)throw new Error("Internal error");if(!xe.has(o))throw new Error("Invalid locale code");ve++;let e=ve;return Ce=o,O.settled&&(O=new J),Le({status:"loading",loadingLocale:o}),(o===ft?Promise.resolve({templates:void 0}):Me(o)).then(s=>{ve===e&&(be=o,Ce=void 0,vt=s.templates,Le({status:"ready",readyLocale:o}),O.resolve())},s=>{ve===e&&(Le({status:"error",errorLocale:o,errorMessage:s.toString()}),O.reject(s))}),O.promise},"setLocale");var we=globalThis,ye=we.ShadowRoot&&(we.ShadyCSS===void 0||we.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),xt=new WeakMap,Q=class{static{n(this,"n")}constructor(e,t,s){if(this._$cssResult$=!0,s!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ye&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=xt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&xt.set(t,e))}return e}toString(){return this.cssText}},wt=n(o=>new Q(typeof o=="string"?o:o+"",void 0,Te),"r"),m=n((o,...e)=>{let t=o.length===1?o[0]:e.reduce((s,r,i)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new Q(t,o,Te)},"i"),yt=n((o,e)=>{if(ye)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),r=we.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,o.appendChild(s)}},"S"),Pe=ye?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return wt(t)})(o):o;var{is:Xt,defineProperty:Zt,getOwnPropertyDescriptor:Yt,getOwnPropertyNames:Kt,getOwnPropertySymbols:Jt,getPrototypeOf:Qt}=Object,$e=globalThis,$t=$e.trustedTypes,eo=$t?$t.emptyScript:"",to=$e.reactiveElementPolyfillSupport,ee=n((o,e)=>o,"d"),te={toAttribute(o,e){switch(e){case Boolean:o=o?eo:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Ee=n((o,e)=>!Xt(o,e),"f"),Et={attribute:!0,type:String,converter:te,reflect:!1,useDefault:!1,hasChanged:Ee};Symbol.metadata??=Symbol("metadata"),$e.litPropertyMetadata??=new WeakMap;var S=class extends HTMLElement{static{n(this,"y")}static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Et){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Zt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){let{get:r,set:i}=Yt(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get:r,set(l){let u=r?.call(this);i?.call(this,l),this.requestUpdate(e,u,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Et}static _$Ei(){if(this.hasOwnProperty(ee("elementProperties")))return;let e=Qt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ee("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ee("properties"))){let t=this.properties,s=[...Kt(t),...Jt(t)];for(let r of s)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let r of s)t.unshift(Pe(r))}else e!==void 0&&t.push(Pe(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute!==void 0?s.converter:te).toAttribute(t,s.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),l=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:te;this._$Em=r,this[r]=l.fromAttribute(t,i.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){let r=this.constructor,i=this[e];if(s??=r.getPropertyOptions(e),!((s.hasChanged??Ee)(i,t)||s.useDefault&&s.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:i},l){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,l??t??this[e]),i!==!0||l!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,i]of s){let{wrapped:l}=i,u=this[r];l!==!0||this._$AL.has(r)||u===void 0||this.C(r,void 0,i,u)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[ee("elementProperties")]=new Map,S[ee("finalized")]=new Map,to?.({ReactiveElement:S}),($e.reactiveElementVersions??=[]).push("2.1.0");var De=globalThis,_e=De.trustedTypes,_t=_e?_e.createPolicy("lit-html",{createHTML:n(o=>o,"createHTML")}):void 0,Ct="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,Mt="?"+M,oo=`<${Mt}>`,q=document,se=n(()=>q.createComment(""),"l"),re=n(o=>o===null||typeof o!="object"&&typeof o!="function","c"),Oe=Array.isArray,so=n(o=>Oe(o)||typeof o?.[Symbol.iterator]=="function","u"),Ue=`[ 	
\f\r]`,oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kt=/-->/g,St=/>/g,V=RegExp(`>|${Ue}(?:([^\\s"'>=/]+)(${Ue}*=${Ue}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,zt=/"/g,Tt=/^(?:script|style|textarea|title)$/i,Ve=n(o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),"y"),c=Ve(1),ds=Ve(2),hs=Ve(3),F=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Lt=new WeakMap,B=q.createTreeWalker(q,129);function Pt(o,e){if(!Oe(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return _t!==void 0?_t.createHTML(e):e}n(Pt,"P");var ro=n((o,e)=>{let t=o.length-1,s=[],r,i=e===2?"<svg>":e===3?"<math>":"",l=oe;for(let u=0;u<t;u++){let d=o[u],g,x,f=-1,_=0;for(;_<d.length&&(l.lastIndex=_,x=l.exec(d),x!==null);)_=l.lastIndex,l===oe?x[1]==="!--"?l=kt:x[1]!==void 0?l=St:x[2]!==void 0?(Tt.test(x[2])&&(r=RegExp("</"+x[2],"g")),l=V):x[3]!==void 0&&(l=V):l===V?x[0]===">"?(l=r??oe,f=-1):x[1]===void 0?f=-2:(f=l.lastIndex-x[2].length,g=x[1],l=x[3]===void 0?V:x[3]==='"'?zt:At):l===zt||l===At?l=V:l===kt||l===St?l=oe:(l=V,r=void 0);let C=l===V&&o[u+1].startsWith("/>")?" ":"";i+=l===oe?d+oo:f>=0?(s.push(g),d.slice(0,f)+Ct+d.slice(f)+M+C):d+M+(f===-2?u:C)}return[Pt(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},"V"),ne=class o{static{n(this,"N")}constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let i=0,l=0,u=e.length-1,d=this.parts,[g,x]=ro(e,t);if(this.el=o.createElement(g,s),B.currentNode=this.el.content,t===2||t===3){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(r=B.nextNode())!==null&&d.length<u;){if(r.nodeType===1){if(r.hasAttributes())for(let f of r.getAttributeNames())if(f.endsWith(Ct)){let _=x[l++],C=r.getAttribute(f).split(M),ge=/([.?@])?(.*)/.exec(_);d.push({type:1,index:i,name:ge[2],strings:C,ctor:ge[1]==="."?He:ge[1]==="?"?Ie:ge[1]==="@"?Re:X}),r.removeAttribute(f)}else f.startsWith(M)&&(d.push({type:6,index:i}),r.removeAttribute(f));if(Tt.test(r.tagName)){let f=r.textContent.split(M),_=f.length-1;if(_>0){r.textContent=_e?_e.emptyScript:"";for(let C=0;C<_;C++)r.append(f[C],se()),B.nextNode(),d.push({type:2,index:++i});r.append(f[_],se())}}}else if(r.nodeType===8)if(r.data===Mt)d.push({type:2,index:i});else{let f=-1;for(;(f=r.data.indexOf(M,f+1))!==-1;)d.push({type:7,index:i}),f+=M.length-1}i++}}static createElement(e,t){let s=q.createElement("template");return s.innerHTML=e,s}};function G(o,e,t=o,s){if(e===F)return e;let r=s!==void 0?t._$Co?.[s]:t._$Cl,i=re(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,t,s)),s!==void 0?(t._$Co??=[])[s]=r:t._$Cl=r),r!==void 0&&(e=G(o,r._$AS(o,e.values),r,s)),e}n(G,"S");var Ne=class{static{n(this,"M")}constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,r=(e?.creationScope??q).importNode(t,!0);B.currentNode=r;let i=B.nextNode(),l=0,u=0,d=s[0];for(;d!==void 0;){if(l===d.index){let g;d.type===2?g=new ie(i,i.nextSibling,this,e):d.type===1?g=new d.ctor(i,d.name,d.strings,this,e):d.type===6&&(g=new je(i,this,e)),this._$AV.push(g),d=s[++u]}l!==d?.index&&(i=B.nextNode(),l++)}return B.currentNode=q,r}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},ie=class o{static{n(this,"R")}get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),re(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==F&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):so(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&re(this._$AH)?this._$AA.nextSibling.data=e:this.T(q.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ne.createElement(Pt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(t);else{let i=new Ne(r,this),l=i.u(this.options);i.p(t),this.T(l),this._$AH=i}}_$AC(e){let t=Lt.get(e.strings);return t===void 0&&Lt.set(e.strings,t=new ne(e)),t}k(e){Oe(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,r=0;for(let i of e)r===t.length?t.push(s=new o(this.O(se()),this.O(se()),this,this.options)):s=t[r],s._$AI(i),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let s=e.nextSibling;e.remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},X=class{static{n(this,"k")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,i){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}_$AI(e,t=this,s,r){let i=this.strings,l=!1;if(i===void 0)e=G(this,e,t,0),l=!re(e)||e!==this._$AH&&e!==F,l&&(this._$AH=e);else{let u=e,d,g;for(e=i[0],d=0;d<i.length-1;d++)g=G(this,u[s+d],t,d),g===F&&(g=this._$AH[d]),l||=!re(g)||g!==this._$AH[d],g===b?e=b:e!==b&&(e+=(g??"")+i[d+1]),this._$AH[d]=g}l&&!r&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},He=class extends X{static{n(this,"H")}constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}},Ie=class extends X{static{n(this,"I")}constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}},Re=class extends X{static{n(this,"L")}constructor(e,t,s,r,i){super(e,t,s,r,i),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??b)===F)return;let s=this._$AH,r=e===b&&s!==b||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==b&&(s===b||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},je=class{static{n(this,"z")}constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}};var no=De.litHtmlPolyfillSupport;no?.(ne,ie),(De.litHtmlVersions??=[]).push("3.3.0");var Ut=n((o,e,t)=>{let s=t?.renderBefore??e,r=s._$litPart$;if(r===void 0){let i=t?.renderBefore??null;s._$litPart$=r=new ie(e.insertBefore(se(),i),i,void 0,t??{})}return r._$AI(o),r},"B");var Be=globalThis,h=class extends S{static{n(this,"i")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ut(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};h._$litElement$=!0,h.finalized=!0,Be.litElementHydrateSupport?.({LitElement:h});var io=Be.litElementPolyfillSupport;io?.({LitElement:h});(Be.litElementVersions??=[]).push("4.2.0");var ao={attribute:!0,type:String,converter:te,reflect:!1,hasChanged:Ee},lo=n((o=ao,e,t)=>{let{kind:s,metadata:r}=t,i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),s==="setter"&&((o=Object.create(o)).wrapped=!0),i.set(t.name,o),s==="accessor"){let{name:l}=t;return{set(u){let d=e.get.call(this);e.set.call(this,u),this.requestUpdate(l,d,o)},init(u){return u!==void 0&&this.C(l,void 0,o,u),u}}}if(s==="setter"){let{name:l}=t;return function(u){let d=this[l];e.call(this,u),this.requestUpdate(l,d,o)}}throw Error("Unsupported decorator location: "+s)},"r");function A(o){return(e,t)=>typeof t=="object"?lo(o,e,t):((s,r,i)=>{let l=r.hasOwnProperty(i);return r.constructor.createProperty(i,s),l?Object.getOwnPropertyDescriptor(r,i):void 0})(o,e,t)}n(A,"n");function w(o){return A({...o,state:!0,attribute:!1})}n(w,"r");var W=n((o,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(o,e,t),t),"e");function ke(o,e){return(t,s,r)=>{let i=n(l=>l.renderRoot?.querySelector(o)??null,"o");if(e){let{get:l,set:u}=typeof s=="object"?t:r??(()=>{let d=Symbol();return{get(){return this[d]},set(g){this[d]=g}}})();return W(t,s,{get(){let d=l.call(this);return d===void 0&&(d=i(this),(d!==null||this.hasUpdated)&&u.call(this,d)),d}})}return W(t,s,{get(){return i(this)}})}}n(ke,"e");var y=class o extends CustomEvent{static{n(this,"SwitchMenu")}constructor({menu:e}){super(o.name,{detail:{menu:e},bubbles:!0,composed:!0})}};var T=class o extends CustomEvent{static{n(this,"SwitchPage")}constructor({page:e}){super(o.name,{detail:{page:e},bubbles:!0,composed:!0})}};var qe="en-US",Nt=["de-DE"],ae=["de-DE","en-US"];var Fe,{getLocale:fr,setLocale:co}=bt({sourceLocale:qe,targetLocales:Nt,loadLocale:n(o=>import(`/dist/localization/locales/${o}.js`),"loadLocale")}),Ht=n(async()=>{let o=le();await We(o)},"initLanguage"),le=n(()=>{let o=navigator.language,e=Fe??o;return It(e)||(e=qe),e},"getUserLanguage"),We=n(async o=>{It(o)&&(Fe=o,await co(Fe))},"setUserLanguage"),It=n(o=>!!ae.includes(o),"isLanguageValid");var Ze=["dark","light"],Rt="data-theme",Ge=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",jt=n(()=>{let o=Ye();Ke(o)},"initTheme"),Ye=n(()=>{let o=document.documentElement.getAttribute(Rt);return o&&Xe(o)?o:Xe(Ge[0])?Ge[0]:Ge},"getUserTheming"),Ke=n(o=>{if(!Xe(o))return;document.documentElement.setAttribute(Rt,o);let e=document.querySelector('meta[name="theme-color"]');e&&e.setAttribute("content",o==="dark"?"#222222":"#eff1ff")},"setUserTheming"),Xe=n(o=>!!Ze.includes(o),"isThemingValid");var ce,de,$=class extends h{constructor(){super(...arguments);this.currentMenu="menu";this.currentPage=1;Z(this,ce,this.handleMenuSwitch.bind(this));Z(this,de,this.handlePageSwitch.bind(this))}get menuItems(){return[{name:"aboutMe",label:a("about me"),content:c`<dm-about-me></dm-about-me>`},{name:"career",label:a("career"),content:[c`<dm-career></dm-career>`,c`<dm-school></dm-school>`]},{name:"skills",label:a("skills"),content:[c`<dm-skills-languages></dm-skills-languages>`,c`<dm-skills-tools></dm-skills-tools>`,c`<dm-skills-other></dm-skills-other>`]},{name:"blog",label:a("blog"),content:c`<dm-blog></dm-blog>`},{name:"contact",label:a("contact"),content:c`<dm-contact></dm-contact>`}]}connectedCallback(){super.connectedCallback(),Ht(),jt(),this.addEventListener(y.name,D(this,ce)),this.addEventListener(T.name,D(this,de))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(y.name,D(this,ce)),this.removeEventListener(T.name,D(this,de))}handleMenuSwitch(t){this.currentMenu=t.detail.menu}handlePageSwitch(t){this.currentPage=t.detail.page}renderContent(){return this.currentMenu==="menu"?(this.currentPage=1,c`
					<dm-menu .items=${this.menuItems}></dm-menu>
				`):this.currentMenu==="settings"?c`
					<dm-settings></dm-settings>
				`:this.menuItems.find(t=>t.name===this.currentMenu)?.content??c``}render(){let t=this.renderContent();return c`
			<dm-layout>
				<div class="content">
					<div class="controls">
						<dm-back-button style="visibility: ${this.currentMenu==="menu"?"hidden":"visible"}"></dm-back-button>
						<dm-socials></dm-socials>
					</div>
					<dm-panel>
						${Array.isArray(t)?t[this.currentPage-1]:t}
					</dm-panel>
				</div>
				${Array.isArray(t)?c`<dm-page-controls current-page="${this.currentPage}" max-pages="${t.length}"></dm-page-controls>`:""}
			</dm-layout>
		`}};ce=new WeakMap,de=new WeakMap,n($,"App"),$.styles=m`
		.content {
			position: relative;
			display: flex;
		}

		dm-back-button {
			position: absolute;
      right: 100%;
			margin-right: 15px;
		}

		dm-socials {
			position: absolute;
			left: 100%;
			margin-left: 15px;
		}

		dm-page-controls {
			margin-top: 10px;
		}

		@media screen and (max-width: 700px) {
			.content {
				flex-direction: column;
			}

			.controls {
				display: flex;
				justify-content: space-between;
				margin-bottom: 5px;
			}

			dm-back-button {
				position: relative;
				right: unset;
				margin-right: unset;
			}

			dm-socials {
				position: relative;
				left: unset;
				margin-left: unset;
			}

			dm-page-controls {
				margin-bottom: 10px;
			}
    }
	`,p([w()],$.prototype,"currentMenu",2),p([w()],$.prototype,"currentPage",2),$=p([v()],$);customElements.define("dm-app",$);var Je=class extends h{static{n(this,"BackButton")}static{this.styles=m`
    :host {
      --button-color: var(--read-color);
      --button-size: 30px;
      --gap-arrows-text: 20px;
      --anim-shift: -20%;
      --anim-time: 0.5s;
    }

    .back-button {
      display: flex;
      height: var(--button-size);
      aspect-ratio: 1 / 1;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;

      .back-icon {
        height: 100%;
        width: 100%;
        fill: var(--button-color);
      }

      &:hover {
        animation: back-anim var(--anim-time) ease-in-out infinite;
      }
    }

    @keyframes back-anim {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateX(var(--anim-shift));
      }
    }
  `}handleClick(){this.dispatchEvent(new CustomEvent(y.name,{detail:{menu:"menu"},bubbles:!0,composed:!0}))}render(){return c`
			<button class="back-button" @click="${this.handleClick}" aria-label="${a("Return to menu")}">
				<svg class="back-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60">
					<rect class="cls-1" x="60" y="20" width="40" height="20"/>
					<polyline class="cls-1" points="50 60 0 30 50 0"/>
				</svg>
			</button>
    `}};customElements.define("dm-back-button",Je);var Se=class extends h{constructor(){super(...arguments);this.mode="left"}static{n(this,"CareerSection")}static{this.styles=m`
    :host {
      --date-font-size: 20px;
      --title-font-size: 30px;
      --sub-title-font-size: 30px;
      --content-font-size: 20px;

      --date-font-color: var(--read-tertiary-color);
      --title-font-color: var(--read-color);
      --sub-title-font-color: var(--read-color);
      --content-font-color: var(--read-secondary-color);
    }

    .container {
      display: flex;
      flex-direction: column;
    }

    .left {
      display: flex;
      align-items: start;
      text-align: start;
    }

    .right {
      display: flex;
      align-items: end;
      text-align: end;
    }

    .date {
      font-size: var(--date-font-size);
      color: var(--date-font-color);
    }

    .title {
      font-size: var(--title-font-size);
      color: var(--title-font-color);
      font-weight: 600;
    }

    .sub-title {
      font-size: var(--sub-title-font-size);
      color: var(--sub-title-font-color);
    }

    .content {
      font-size: var(--content-font-size);
      color: var(--content-font-color);
    }

    @media screen and (max-width: 700px) {
			:host {
        --date-font-size: 16px;
        --title-font-size: 22px;
        --sub-title-font-size: 22px;
        --content-font-size: 16px;
			}
    }
  `}render(){return c`
      <div class="container ${this.mode}">
        <div class="date">
          <slot name="date"></slot>
        </div>
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="sub-title">
          <slot name="sub-title"></slot>
        </div>
        <slot class="content"></slot>
      </div>
    `}};p([A()],Se.prototype,"mode",2);customElements.define("dm-career-section",Se);var he=class extends h{constructor(){super(...arguments);this.characterTokens=0}static{n(this,"Content")}static{this.styles=m`
    :host {
      --anim-time: calc(var(--steps) * 0.005s);
			flex: 1 0 auto;
    }

    .container {
      height: 100%;
			width: 100%;
			display: flex;
    	flex-direction: column;
    }

    @keyframes typing {
      from { height: 0 }
    }
  `}get slotCharacterLength(){let t=this.slotElement?.assignedNodes({flatten:!0})||[],s=0;for(let r of t)(r.nodeType===Node.TEXT_NODE||r.nodeType===Node.ELEMENT_NODE)&&(s+=r.textContent?.length??0);return s}updated(){this.characterTokens=this.slotCharacterLength}render(){return c`
      <style>
        :host {
          --steps: ${this.characterTokens};
        }
      </style>
      <div class="container">
        <slot></slot>
      </div>
    `}};p([ke("slot")],he.prototype,"slotElement",2),p([w()],he.prototype,"characterTokens",2);customElements.define("dm-content",he);var me=class extends h{constructor(){super(...arguments);this.characterTokens=0}static{n(this,"Headline")}static{this.styles=m`
    :host {
      --headline-font-size: var(--sub-title-font-size);
      --gap-headline-content: 30px;
      --anim-time: calc(var(--steps) * 0.1s);
    }

    .container {
      display: inline-block;
      margin-bottom: var(--gap-headline-content);
    }

    h1 {
      font-size: var(--headline-font-size);
      font-weight: 600;
      margin: 0;
      overflow: hidden;

      width: 100%;

    }

    @keyframes typing {
      from { width: 0 }
    }
  `}get slotCharacterLength(){let t=this.slotElement?.assignedNodes({flatten:!0})||[],s=0;for(let r of t)(r.nodeType===Node.TEXT_NODE||r.nodeType===Node.ELEMENT_NODE)&&(s+=r.textContent?.length??0);return s}updated(){this.characterTokens=this.slotCharacterLength}render(){return c`
      <style>
        :host {
          --steps: ${this.characterTokens};
        }
      </style>
      <div class="container">
        <h1>
          <slot></slot>
        </h1>
      </div>
    `}};p([ke("slot")],me.prototype,"slotElement",2),p([w()],me.prototype,"characterTokens",2);customElements.define("dm-headline",me);var Qe=class extends h{static{n(this,"Logo")}static{this.styles=m`
    :host {
      --logo-size: 100px;
      --gap-logo-text: 130%;
      --text-font-size: 42px;
      --text-color: var(--read-color);
      --logo-color: var(--read-color);
      --vertical-padding: 50px;
      --scale-multiplier: 1.2;
      --animation-time: 0.1s;
    }

    .logo-container {
      height: var(--logo-size);
      width: 100%;
      padding: var(--vertical-padding) 0;
      display: flex;
      align-items: center;
      gap: var(--gap-logo-text);
      position: relative;
      font-size: var(--text-font-size);
      color: var(--text-color);

      &::before {
        content: 'DANIEL';
        position: absolute;
        right: var(--gap-logo-text);
      }

      &::after {
        content: 'MEISLER';
        position: absolute;
        left: var(--gap-logo-text);
      }
    }

    .logo-text {
      font-size: var(--text-font-size);
    }

    .logo-image {
      height: 100%;
      width: 100%;
      cursor: pointer;
      transform: scale(1);
      transition: transform var(--animation-time) ease-in-out;

      &:hover {
        transform: scale(var(--scale-multiplier));
      }
    }

    .icon {
      height: 100%;
      width: 100%;
      fill: var(--logo-color);
    }

    @media screen and (max-width: 700px) {
      :host {
        --logo-size: 80px;
        --text-font-size: 24px;
      }
    }
  `}render(){return c`
      <div class="logo-container">
        <div class="logo-image">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path class="cls-1" d="M95,0h0s-44.99,45-44.99,45h-.02L5,0h0s-5,0-5,0v50h0v25.33h0C0,88.95,22.39,100,50,100s50-11.05,50-24.67h0V0h-5ZM5,7.08l37.92,37.92H5V7.08ZM95,75.33h0c-.07,10.53-20.18,19.06-44.99,19.06S5.07,85.86,5.01,75.33h0v-25.33h90v25.33ZM57.08,45L95,7.08v37.92h-37.92Z"/>
          </svg>
        </div>
      </div>
    `}};customElements.define("dm-logo",Qe);var z=class extends h{constructor(){super(...arguments);this.items=[]}handleClick(t){let r=t.currentTarget.dataset.content;this.dispatchEvent(new CustomEvent(y.name,{detail:{menu:r},bubbles:!0,composed:!0}))}render(){return c`
      <div class="menu-container">
        ${this.items.map(t=>c`
            <button @click="${this.handleClick}" data-content="${t.name}">${t.label}</button>
          `)}
      </div>
    `}};n(z,"Menu"),z.styles=m`
    :host {
      --menu-color: var(--read-color);
      --menu-size: var(--title-font-size);
      --gap-items: 30px;

      --gap-text-underline: 8%;
      --underline-height: 3px;
      --underline-width: 90%;
      --underline-color: var(--read-color);
      --underline-anim-time: 0.1s;
    }

    .menu-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--gap-items);
    }

    button {
      position: relative;
      background: none;
      border: none;
      cursor: pointer;
      font-family: var(--text-font);
      font-size: var(--menu-size);
      color: var(--menu-color);
      text-transform: lowercase;

      &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: var(--gap-text-underline);
        height: var(--underline-height);
        width: var(--underline-width);
        background-color: var(--underline-color);
        transform: translateX(-50%) scaleX(0);
        transition: transform var(--underline-anim-time) ease-in-out;
      }

      &:hover {
        &::before {
          transform: translateX(-50%) scaleX(1);
        }
      }
    }

    @media screen and (max-width: 700px) {
      :host {
        --menu-size: var(--title-font-size);
        --gap-items: 20px;
      }

      .menu-container {
        padding: 50px 0;
      }
    }
  `,p([A({type:Array})],z.prototype,"items",2),z=p([v()],z);customElements.define("dm-menu",z);var pe=class extends h{constructor(){super(...arguments);this.currentPage=1;this.maxPages=0}static{n(this,"PageControls")}static{this.styles=m`
    :host {
			--button-color: var(--read-color);
      --button-size: 26px;
      --font-size: 24px;
      --gap-arrows-text: 20px;
      --anim-shift: 20%;
      --anim-time: 0.5s;
    }

    .page-controls {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: var(--gap-arrows-text);
    }

    .page-counter {
      font-size: var(--font-size);
    }

    .left-button {
      height: var(--button-size);
      aspect-ratio: 1 / 1;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;

      .left-icon {
        height: 100%;
        width: 100%;
        fill: var(--button-color);
      }

      &:hover {
        animation: left-anim var(--anim-time) ease-in-out infinite;
      }
    }

    .right-button {
      height: var(--button-size);
      aspect-ratio: 1 / 1;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;

      .right-icon {
        height: 100%;
        width: 100%;
        fill: var(--button-color);
      }

      &:hover {
        animation: right-anim var(--anim-time) ease-in-out infinite;
      }
    }

    @keyframes left-anim {
			0%, 100% {
				transform: translateY(0);
			}
			50% {
				transform: translateX(calc(var(--anim-shift) * -1));
			}
		}

		@keyframes right-anim {
			0%, 100% {
				transform: translateY(0);
			}
			50% {
				transform: translateX(var(--anim-shift));
			}
		}
  `}handleLeftClick(){this.currentPage=this.checkBounds(this.currentPage-1),this.dispatchEvent(new CustomEvent(T.name,{detail:{page:this.currentPage},bubbles:!0,composed:!0}))}handleRightClick(){this.currentPage=this.checkBounds(this.currentPage+1),this.dispatchEvent(new CustomEvent(T.name,{detail:{page:this.currentPage},bubbles:!0,composed:!0}))}checkBounds(t){let s=t;return t<1&&(s=this.maxPages),t>this.maxPages&&(s=1),s}render(){return c`
			<div class="page-controls">
				<button class="left-button" @click="${this.handleLeftClick}" aria-label="${a("Previous page")}">
					<svg class="left-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60">
						<rect class="cls-1" x="60" y="20" width="40" height="20"/>
						<polyline class="cls-1" points="50 60 0 30 50 0"/>
					</svg>
				</button>

				<div class="page-counter">${a("Page")} ${this.currentPage} / ${this.maxPages}</div>

				<button class="right-button" @click="${this.handleRightClick}" aria-label="${a("Next page")}">
					<svg class="right-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60">
						<rect class="cls-1" x="0" y="20" width="40" height="20"/>
						<polyline class="cls-1" points="50 0 100 30 50 60"/>
					</svg>
				</button>
			</div>
    `}};p([A({type:Number,attribute:"current-page"})],pe.prototype,"currentPage",2),p([A({type:Number,attribute:"max-pages"})],pe.prototype,"maxPages",2);customElements.define("dm-page-controls",pe);var et=class extends h{static{n(this,"Panel")}static{this.styles=m`
    :host {
      --panel-size: 600px;
      --panel-padding: 5%;
      --border-size: 5px;
      --border-color: var(--read-color);
    }

    .panel-container {
      width: var(--panel-size);
      aspect-ratio: 1 / 1;
      border: solid var(--border-size) var(--border-color);
      box-sizing: border-box;
      padding: var(--panel-padding);
      overflow: hidden;
    }

    @media screen and (max-width: 700px) {
      :host {
        --panel-size: 90vw;
      }

      .panel-container {
        aspect-ratio: unset;
        width: var(--panel-size);
        min-height: var(--panel-size);
        height: fit-content;
      }
    }
  `}render(){return c`
      <div class="panel-container">
        <slot></slot>
      </div>
    `}};customElements.define("dm-panel",et);var tt=class extends h{static{n(this,"Socials")}static{this.styles=m`
    :host {
      --icon-color: var(--read-color);
      --icon-size: 25px;
      --gap-icons: 15px;
      --anim-shift: 20%;
      --anim-time: 0.25s;
    }

    .socials-container {
      display: flex;
      flex-direction: column;
      gap: var(--gap-icons);
    }

    .socials-button {
      height: var(--icon-size);
      aspect-ratio: 1 / 1;
      transform: translateY(0);
      transition: transform var(--anim-time) ease-in-out;

      .icon {
        height: 100%;
        width: 100%;
        fill: var(--icon-color);
      }

      &:hover {
        transform: translateX(var(--anim-shift));
      }
    }

    button {
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;
    }

    
		@media screen and (max-width: 700px) {
    .socials-container {
      flex-direction: row;
    }

    .socials-button {
      &:hover {
        transform: translateY(var(--anim-shift));
      }
    }
    }
  `}handleSettings(){this.dispatchEvent(new CustomEvent(y.name,{detail:{menu:"settings"},bubbles:!0,composed:!0}))}render(){return c`
      <div class="socials-container">

        <a href="https://github.com/danielmeisler" class="socials-button" target="_blank" rel="noopener noreferrer" aria-label="${a("GitHub")}">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.63 96">
            <path class="cls-1" d="M48.85,0C21.84,0,0,22,0,49.22c0,21.76,13.99,40.17,33.4,46.69,2.43.49,3.32-1.06,3.32-2.36,0-1.14-.08-5.05-.08-9.13-13.59,2.93-16.42-5.87-16.42-5.87-2.18-5.7-5.42-7.17-5.42-7.17-4.45-3.01.32-3.01.32-3.01,4.93.33,7.52,5.05,7.52,5.05,4.37,7.5,11.4,5.38,14.24,4.07.4-3.18,1.7-5.38,3.07-6.6-10.84-1.14-22.24-5.38-22.24-24.28,0-5.38,1.94-9.78,5.01-13.2-.49-1.22-2.18-6.27.49-13.04,0,0,4.12-1.3,13.43,5.05,3.98-1.08,8.09-1.63,12.21-1.63,4.13,0,8.33.57,12.21,1.63,9.3-6.36,13.43-5.05,13.43-5.05,2.67,6.76.97,11.82.49,13.04,3.15,3.42,5.01,7.82,5.01,13.2,0,18.91-11.4,23.06-22.32,24.28,1.78,1.55,3.32,4.48,3.32,9.13,0,6.6-.08,11.9-.08,13.53,0,1.3.89,2.85,3.32,2.36,19.41-6.52,33.4-24.93,33.4-46.69.08-27.22-21.84-49.22-48.77-49.22Z"/>
          </svg>
        </a>

        <a href="https://www.linkedin.com/in/daniel-meisler-22361a379" class="socials-button" target="_blank" rel="noopener noreferrer" aria-label="${a("LinkedIn")}">
          <svg enable-background="new 0 0 56.693 56.693" class="icon" version="1.1" viewBox="0 0 56.693 56.693" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g>
              <path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z"/>
              <path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12 c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88 C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078 c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179 c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"/>
            </g>
          </svg>
        </a>

        <a href="https://www.instagram.com/daniel.meisler" class="socials-button" target="_blank" rel="noopener noreferrer" aria-label="${a("Instagram")}">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <path class="cls-1" d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34" transform="translate(-2.5 -2.5)"/>
          </svg>
        </a>

        <a href="mailto:daniel_meisler@web.de" class="socials-button" aria-label="${a("E-Mail")}">
          <svg class="icon" version="1.1" id="Filled_Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
            <g id="mail-filled">
              <path d="M24,5.7V21H0V5.7l12,10L24,5.7z M12,13l12-9.9V3H0v0.1L12,13z"/>
            </g>
          </svg>
        </a>

        <button @click="${this.handleSettings}" class="socials-button" aria-label="${a("Settings")}">
          <svg class="icon" version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
              <g id="Core" transform="translate(-464.000000, -380.000000)">
                <g id="settings" transform="translate(464.000000, 380.000000)">
                  <path d="M17.4,11 C17.4,10.7 17.5,10.4 17.5,10 C17.5,9.6 17.5,9.3 17.4,9 L19.5,7.3 C19.7,7.1 19.7,6.9 19.6,6.7 L17.6,3.2 C17.5,3.1 17.3,3 17,3.1 L14.5,4.1 C14,3.7 13.4,3.4 12.8,3.1 L12.4,0.5 C12.5,0.2 12.2,0 12,0 L8,0 C7.8,0 7.5,0.2 7.5,0.4 L7.1,3.1 C6.5,3.3 6,3.7 5.4,4.1 L3,3.1 C2.7,3 2.5,3.1 2.3,3.3 L0.3,6.8 C0.2,6.9 0.3,7.2 0.5,7.4 L2.6,9 C2.6,9.3 2.5,9.6 2.5,10 C2.5,10.4 2.5,10.7 2.6,11 L0.5,12.7 C0.3,12.9 0.3,13.1 0.4,13.3 L2.4,16.8 C2.5,16.9 2.7,17 3,16.9 L5.5,15.9 C6,16.3 6.6,16.6 7.2,16.9 L7.6,19.5 C7.6,19.7 7.8,19.9 8.1,19.9 L12.1,19.9 C12.3,19.9 12.6,19.7 12.6,19.5 L13,16.9 C13.6,16.6 14.2,16.3 14.7,15.9 L17.2,16.9 C17.4,17 17.7,16.9 17.8,16.7 L19.8,13.2 C19.9,13 19.9,12.7 19.7,12.6 L17.4,11 L17.4,11 Z M10,13.5 C8.1,13.5 6.5,11.9 6.5,10 C6.5,8.1 8.1,6.5 10,6.5 C11.9,6.5 13.5,8.1 13.5,10 C13.5,11.9 11.9,13.5 10,13.5 L10,13.5 Z" id="Shape"/>
                </g>
              </g>
            </g>
          </svg>
        </button>

      </div>
    `}};customElements.define("dm-socials",tt);var ot=class extends h{static{n(this,"SpeechBubble")}static{this.styles=m`
    :host {
      --panel-padding: 5%;
      --border-size: 3px;
      --background-color: var(--read-color);
    }

    .container {
      height: 100%;
      width: 100%;
      background-color: var(--background-color);
      padding: var(--panel-padding);
      box-sizing: border-box;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-left-color: var(--background-color);
        border-right: 0;
        margin-top: -20px;
        margin-right: -20px;
      }
    }
  `}render(){return c`
      <div class="container">
        <slot></slot>
      </div>
    `}};customElements.define("dm-speech-bubble",ot);var ue,L=class extends h{constructor(){super(...arguments);this.imageUrl="";Z(this,ue,0)}connectedCallback(){super.connectedCallback(),this.imageUrl=`./assets/img/me_${this.getRandom()}.png`}disconnectedCallback(){super.disconnectedCallback()}getNewImage(){let t=0;do t=this.getRandom();while(D(this,ue)===t);at(this,ue,t),this.imageUrl=`./assets/img/me_${t}.png`}getRandom(){return Math.floor(Math.random()*5+1)}getAge(t){let s=new Date,r=s.getFullYear()-t.getFullYear();return(s.getMonth()<t.getMonth()||s.getMonth()===t.getMonth()&&s.getDate()<t.getDate())&&r--,r}getBirthdate(t){let s=le();return new Intl.DateTimeFormat(s).format(t)}render(){return c`
      <div class="container">
        <div class="header">
          <div class="speech-bubble-container">
            <dm-speech-bubble>
              <div class="text">
                <div class="title">
                  ${a("Heyho!")}
                </div>
                <div class="description">
                  <div>${a("I'm Daniel,")}</div>
                  <div>${a("nice to meet you.")}</div>
                </div>  
              </div>
            </dm-speech-bubble>
          </div>
          <div class="image">
            <img @click="${this.getNewImage}" src="${this.imageUrl}">
          </div>
        </div>
        <dm-content>
          <div class="info-content">
            <div class="table-title">${a("Informations")}:</div>
            <div class="table-container">
              <table class="info-table">
                <tbody>
                  <tr>
                    <th scope="row">${a("age")}:</th>
                    <td>${this.getAge(new Date("09/24/1999"))}</td>
                  </tr>
                  <tr>
                    <th scope="row">${a("birth date")}:</th>
                    <td>${this.getBirthdate(new Date("09/24/1999"))}</td>
                  </tr>
                  <tr>
                    <th scope="row">${a("birth place")}:</th>
                    <td>Bad Säckingen</td>
                  </tr>
                </tbody>
              </table>
              <table class="info-table">
                <tbody>
                  <tr>
                    <th scope="row">${a("nationality")}:</th>
                    <td>${a("German")}</td>
                  </tr>
                  <tr>
                    <th scope="row">${a("domicile")}:</th>
                    <td>Mannheim</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bottom-wrapper">
            <div class="language-content">
              <div class="table-title">${a("Languages")}:</div>
              <table class="language-table">
                <tbody>
                  <tr>
                    <th scope="row">${a("German")}:</th>
                    <td>${a("Native language")}</td>
                  </tr>
                  <tr>
                    <th scope="row">${a("Russian")}:</th>
                    <td>${a("Native language")}</td>
                  </tr>
                  <tr>
                    <th scope="row">${a("English")}:</th>
                    <td>${a("Fluent")}</td>
                  </tr>
                  <tr>
                    <th scope="row">${a("Spanish")}:</th>
                    <td>${a("Basics")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
    
            <div class="hobbies-content">
              <div class="table-title">${a("Hobbies")}:</div>
                <ul class="hobbies-list">
                  <li>${a("Cooking")}</li>
                  <li>${a("Drawing")}</li>
                  <li>${a("Electric guitar")}</li>
                  <li>${a("Gaming")}</li>
                </ul>
            </div>
          </div>
        </dm-content>
      </div>
    `}};ue=new WeakMap,n(L,"AboutMe"),L.styles=m`
    :host {
      --gap-content: 30px;

      --speech-bubble-color: var(--background-color);
      --speech-bubble-height: 200px;
      --speech-bubble-width: 300px;
      --speech-bubble-font-size: 60px;
      --speech-bubble-text-font-size: 32px;

      --image-size: 200px;
      --image-scale: 1.1;
      --image-grayscale: 1;

      --image-text-color: #ffffff;
      --image-font-size: 30px;
      --image-anim-time: 0.5s;

      --border-color: var(--read-color);
      --border-size: 3px;

      --table-color: var(--read-color);
      --table-secondary-color: var(--read-secondary-color);
      --table-title-font-size: 24px;
      --table-text-font-size: 20px;
      --gap-tables: 20px;
    }

    .container {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: var(--gap-content);
    }

    .header {
      display: flex;
      justify-content: space-between;
    }

    .speech-bubble-container {
      height: var(--speech-bubble-height);
      width: var(--speech-bubble-width);

      .text {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--speech-bubble-color);
      }

      .title {
        font-size: var(--speech-bubble-font-size);
        color: var(--speech-bubble-color);
        font-weight: 600;
      }

      .description {
        font-size: var(--speech-bubble-text-font-size);
        text-align: center;
      }
    }

    .image {
      width: var(--image-size);
      aspect-ratio: 1 / 1;
      position: relative;
      display: flex;

      img {
        height: 100%;
        border-radius: 50%;
        position: relative;
        cursor: pointer;
        transform: scale(1);
        transition: transform var(--image-anim-time) ease-in-out, filter var(--image-anim-time) ease-in-out;

        &:hover {
          transform: scale(var(--image-scale));
          filter: grayscale(var(--image-grayscale));
        }
      }

      &:hover::after {
        content: 'CLICK ME';
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: var(--image-font-size);
        text-align: center;
        color: var(--image-text-color);
        transform: translate(-50%, -50%);
        pointer-events: none;
        white-space: nowrap;
      }
    }

    .table-title {
      font-size: var(--table-title-font-size);
      font-weight: 600;
    }

    .info-content {
      width: 100%;
      height: fit-content;
      position: relative;
      border: solid var(--border-size) var(--border-color);
      box-sizing: border-box;
      padding: 3%;
      display: flex;
      flex-direction: column;
    }

    .table-container {
      display: flex;
      flex-direction: row;
      gap: var(--gap-tables);
    }

    .info-table {
			width: 50%;
      height: 50%;
      font-size: var(--table-text-font-size);
		}

		tr {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
		}

    th {
      font-weight: 400;
    }

    td {
      color: var(--table-secondary-color);
    }

    .bottom-wrapper {
      display: flex;
      flex-direction: row;
      height: 100%;
      width: 100%;
    }

    .language-content, .hobbies-content {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      position: relative;
      border: solid var(--border-size) var(--border-color);
      border-top: none;
      box-sizing: border-box;
      padding: 3%;
    }

    .hobbies-content {
      width: 50%;
      display: flex;
      flex-direction: column;
      position: relative;
      border: solid var(--border-size) var(--border-color);
      border-top: none;
      box-sizing: border-box;
      padding: 3%;
      border-left: none;
    }

    .language-table {
      font-size: var(--table-text-font-size);
		}

    .hobbies-list {
      font-size: var(--table-text-font-size);
      margin: 0;
    }

    li {
      color: var(--table-secondary-color);
    }

    @media screen and (max-width: 700px) {
      :host {
        --speech-bubble-height: fit-content;
        --speech-bubble-width: 50%;
        --speech-bubble-font-size: 30px;
        --speech-bubble-text-font-size: 24px;

        --image-size: 40%;
        --image-font-size: 18px;
      }

      .header {
        display: flex;
        align-items: center;
      }

      .table-container {
        flex-direction: column;
        gap: 0;
      }

      .info-table {
        width: 100%;
        height: 100%;
      }

      .bottom-wrapper {
        flex-direction: column;
      }

      .language-content, .hobbies-content {
        width: 100%;
      }

      .hobbies-content {
        border-left: solid var(--border-size) var(--border-color);
      }

      .image {
        img {
          transition: none;

          &:hover {
            transform: none;
            filter: none;
          }
        }

        &:hover::after {
          content: '';
        }
      }
    }
  `,p([w()],L.prototype,"imageUrl",2),L=p([v()],L);customElements.define("dm-about-me",L);var P=class extends h{render(){return c`
      <div class="container">
          <div class="text">
            <div class="text-title">${a("Blog")}</div>
            <div class="text-description">${a("under construction")}</div>
          </div>
          <div class="background">
            <svg class="background-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600.16 599.89">
              <polygon class="cls-1" points="52.24 599.89 27.24 599.89 56.74 549.89 81.74 549.89 52.24 599.89"/>
              <polygon class="cls-1" points="106.74 599.89 81.74 599.89 111.24 549.89 136.24 549.89 106.74 599.89"/>
              <polygon class="cls-1" points="161.24 599.89 136.24 599.89 165.74 549.89 190.74 549.89 161.24 599.89"/>
              <polygon class="cls-1" points="215.74 599.89 190.74 599.89 220.24 549.89 245.24 549.89 215.74 599.89"/>
              <polygon class="cls-1" points="270.24 599.89 245.24 599.89 274.74 549.89 299.74 549.89 270.24 599.89"/>
              <polygon class="cls-1" points="324.99 599.89 299.99 599.89 329.49 549.89 354.49 549.89 324.99 599.89"/>
              <polygon class="cls-1" points="379.49 599.89 354.49 599.89 383.99 549.89 408.99 549.89 379.49 599.89"/>
              <polygon class="cls-1" points="543.24 599.89 518.24 599.89 547.74 549.89 572.74 549.89 543.24 599.89"/>
              <polygon class="cls-1" points="488.61 599.89 463.61 599.89 493.11 549.89 518.11 549.89 488.61 599.89"/>
              <polygon class="cls-1" points="434.05 599.89 409.05 599.89 438.55 549.89 463.55 549.89 434.05 599.89"/>
              <polygon class="cls-1" points="50.13 50 25.13 50 54.63 0 79.63 0 50.13 50"/>
              <polygon class="cls-1" points="104.63 50 79.63 50 109.13 0 134.13 0 104.63 50"/>
              <polygon class="cls-1" points="159.13 50 134.13 50 163.63 0 188.63 0 159.13 50"/>
              <polygon class="cls-1" points="213.63 50 188.63 50 218.13 0 243.13 0 213.63 50"/>
              <polygon class="cls-1" points="268.13 50 243.13 50 272.63 0 297.63 0 268.13 50"/>
              <polygon class="cls-1" points="322.88 50 297.88 50 327.38 0 352.38 0 322.88 50"/>
              <polygon class="cls-1" points="377.38 50 352.38 50 381.88 0 406.88 0 377.38 50"/>
              <polygon class="cls-1" points="541.13 50 516.13 50 545.63 0 570.63 0 541.13 50"/>
              <polygon class="cls-1" points="486.5 50 461.5 50 491 0 516 0 486.5 50"/>
              <polygon class="cls-1" points="431.94 50 406.94 50 436.44 0 461.44 0 431.94 50"/>
              <polygon class="cls-1" points="0 596.06 27.24 549.89 2.24 549.89 0 553.68 0 596.06"/>
              <polygon class="cls-1" points=".02 42.56 25.13 0 .13 0 .02 .19 .02 42.56"/>
              <polygon class="cls-1" points="600.02 553.66 572.74 599.89 597.74 599.89 600.02 596.03 600.02 553.66"/>
              <polygon class="cls-1" points="600.16 0 600.13 0 570.63 50 595.63 50 600.16 42.33 600.16 0"/>
            </svg>
          </div>
      </div>
    `}};n(P,"Blog"),P.styles=m`
    :host {
      --svg-color: var(--read-color);
      --title-font-size: 180px;
      --description-font-size: 39px;

      --anim-time: 1s;
    }

    .container {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-transform: uppercase;
      overflow: hidden;
      white-space: nowrap;
      animation: typing var(--anim-time) steps(3);
      margin-top: -40px;

      .text-title {
        font-size: var(--title-font-size);
      }

      .text-description {
        font-size: var(--description-font-size);
      }
    }

    .background {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;

      .background-svg {
        width: 100%;
        height: 100%;
        fill: var(--svg-color);
      }
    }

    @keyframes typing {
      from { height: 0 }
    }

    @media screen and (max-width: 700px) {
      :host {
        --title-font-size: 120px;
        --description-font-size: 26px;
      }

      .container {
        height: 82vw;
      }

      .menu-container {
        padding: 50px 0;
      }
    }
  `,P=p([v()],P);customElements.define("dm-blog",P);var U=class extends h{render(){return c`
      <div class="container">
        <dm-headline>${a("Professional Experience")}:</dm-headline>
        <dm-content>
          <div class="content">
          <dm-career-section mode="left">
            <div slot="date">10.2023 - ${a("today")}</div>
            <div slot="title">${a("Web and cloud software developer")}</div>
            <div slot="sub-title">
              <a href="https://www.thenativeweb.io/" target="_blank" rel="noopener noreferrer">the native web GmbH</a>
            </div>
            <ul>
              <li>${a("Development of web applications")}</li>
              <li>${a("Development of scalable microservices")}</li>
            </ul>
          </dm-career-section>

          <dm-career-section mode="right">
            <div slot="date">10.2022 - 01.2023</div>
            <div slot="title">${a("Web and cloud software developer")}</div>
            <div slot="sub-title">
              <a href="https://www.thenativeweb.io/" target="_blank" rel="noopener noreferrer">the native web GmbH</a>
            </div>
            <ul>
              <li>${a("Working student")}</li>
            </ul>
          </dm-career-section>

          <dm-career-section mode="left">
            <div slot="date">03.2021 - 07.2021</div>
            <div slot="title">${a("Web and cloud software developer")}</div>
            <div slot="sub-title">
              <a href="https://www.thenativeweb.io/" target="_blank" rel="noopener noreferrer">the native web GmbH</a>
            </div>
            <ul>
              <li>${a("Internship semester")}</li>
            </ul>
          </dm-career-section>
          </div>
        </dm-content>
      </div>
    `}};n(U,"Career"),U.styles=m`
    :host {
      --link-color: var(--read-color);
      --link-hover-color: #dd0099;
    }

    .container {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    a {
      text-decoration: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      color: var(--link-color);

      &:hover {
        text-decoration: underline;
        color: var(--link-hover-color);
      }
    }

    ul {
      margin: 0;
    }

    @media screen and (max-width: 700px) {
      .content {
        gap: 50px;
      }
    }
  `,U=p([v()],U);customElements.define("dm-career",U);var N=class extends h{render(){return c`
      <div class="container">
        <dm-headline>${a("Educational Background")}:</dm-headline>
        <dm-content>
          <div class="content">
            <dm-career-section mode="left">
              <div slot="date">2019 - 2023</div>
              <div slot="title">${a("Computer Science in Media")}</div>
              <div slot="sub-title">
                <a href="https://www.hs-furtwangen.de" style="--link-hover-color: #00CC7E" target="_blank" rel="noopener noreferrer">${a("Furtwangen University")}</a>
              </div>
              <ul>
                <li>${a("Bachelor of Science")}</li>
              </ul>
            </dm-career-section>

            <dm-career-section mode="right">
              <div slot="date">2016 - 2019</div>
              <div slot="title">${a("Major in Computer Science")}</div>
              <div slot="sub-title">
                <a href="https://www.ghse.de" style="--link-hover-color: #295C9F" target="_blank" rel="noopener noreferrer">Gewerbliche und Hauswirtschaftlich Sozialpflegerische Schulen Emmendingen</a>
              </div>
              <ul>
                <li>${a("General higher education entrance qualification (Abitur)")}</li>
              </ul>
            </dm-career-section>

            <dm-career-section mode="left">
              <div slot="date">2006 - 2016</div>
              <div slot="title">${a("Elementary and secondary school")}</div>
              <div slot="sub-title">
                <a href="https://herbolzheim.adventisten.schule" style="--link-hover-color: #F4A000" target="_blank" rel="noopener noreferrer">Elisa-Schule Herbolzheim </a>
              </div>
              <ul>
                <li>${a("General Certificate of Secondary Education")}</li>
              </ul>
            </dm-career-section>
          </div>
        </dm-content>
      </div>
    `}};n(N,"School"),N.styles=m`
    :host {
      --link-color: var(--read-color);
    }

    .container {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    a {
      text-decoration: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      color: var(--link-color);

      &:hover {
        text-decoration: underline;
        color: var(--link-hover-color);
      }
    }

    ul {
      margin: 0;
    }

    @media screen and (max-width: 700px) {
      .content {
        gap: 50px;
      }
    }
  `,N=p([v()],N);customElements.define("dm-school",N);var H=class extends h{render(){return c`
      <div class="container">
        <dm-headline>${a("Contact")}:</dm-headline>
        <dm-content>
          <div class="contact-container">
            <div class="contact-section">
              ${a("Contact me via mail")}
              <a href="mailto:daniel_meisler@web.de" style="--hover-color: #FFD800" target="_blank" rel="noopener noreferrer">
                <svg class="icon" version="1.1" id="Filled_Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                  <g id="mail-filled">
                    <path d="M24,5.7V21H0V5.7l12,10L24,5.7z M12,13l12-9.9V3H0v0.1L12,13z"/>
                  </g>
                </svg>
                daniel_meisler@web.de
              </a>
            </div>

            <div class="contact-section">
              ${a("Check out my Instagram")}
              <a href="https://www.instagram.com/daniel.meisler" style="--hover-color: #FE0B5D" target="_blank" rel="noopener noreferrer">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                  <path class="cls-1" d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34" transform="translate(-2.5 -2.5)"/>
                </svg>
                @daniel.meisler
              </a>
            </div>

            <div class="contact-section">
              ${a("Find my projects on GitHub")}
              <a href="https://github.com/danielmeisler" style="--hover-color: #652684" target="_blank" rel="noopener noreferrer">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.63 96">
                  <path class="cls-1" d="M48.85,0C21.84,0,0,22,0,49.22c0,21.76,13.99,40.17,33.4,46.69,2.43.49,3.32-1.06,3.32-2.36,0-1.14-.08-5.05-.08-9.13-13.59,2.93-16.42-5.87-16.42-5.87-2.18-5.7-5.42-7.17-5.42-7.17-4.45-3.01.32-3.01.32-3.01,4.93.33,7.52,5.05,7.52,5.05,4.37,7.5,11.4,5.38,14.24,4.07.4-3.18,1.7-5.38,3.07-6.6-10.84-1.14-22.24-5.38-22.24-24.28,0-5.38,1.94-9.78,5.01-13.2-.49-1.22-2.18-6.27.49-13.04,0,0,4.12-1.3,13.43,5.05,3.98-1.08,8.09-1.63,12.21-1.63,4.13,0,8.33.57,12.21,1.63,9.3-6.36,13.43-5.05,13.43-5.05,2.67,6.76.97,11.82.49,13.04,3.15,3.42,5.01,7.82,5.01,13.2,0,18.91-11.4,23.06-22.32,24.28,1.78,1.55,3.32,4.48,3.32,9.13,0,6.6-.08,11.9-.08,13.53,0,1.3.89,2.85,3.32,2.36,19.41-6.52,33.4-24.93,33.4-46.69.08-27.22-21.84-49.22-48.77-49.22Z"/>
                </svg>
                danielmeisler
              </a>
            </div>

            <div class="contact-section">
              ${a("Discover my LinkedIn profile")}
              <a href="https://www.linkedin.com/in/daniel-meisler-22361a379" style="--hover-color: #0A66C2" target="_blank" rel="noopener noreferrer">
                <svg enable-background="new 0 0 56.693 56.693" class="icon" version="1.1" viewBox="0 0 56.693 56.693" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g>
                    <path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z"/>
                    <path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12 c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88 C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078 c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179 c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"/>
                  </g>
                </svg>
                Daniel Meisler
              </a>
            </div>
          </div>
        </dm-content>
      </div>
    `}};n(H,"Contact"),H.styles=m`
    :host {
      --icon-color: var(--read-secondary-color);
      --icon-size: 25px;

      --text-font-size: var(--text-font-size);
      --text-color: var(--read-color);
      --link-color: var(--read-secondary-color);

      --gap-content: 50px;
      --gap-logo-link: 10px;
    }

    .container {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
    }

    .contact-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: var(--text-color);
      font-size: var(--text-font-size);
    }

    .contact-section {
      display: flex;
      flex-direction: column;
    }

    .icon {
      height: var(--icon-size);
      aspect-ratio: 1 / 1;
      fill: var(--icon-color);
    }

    a {
      text-decoration: none;
      color: var(--link-color);
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: var(--gap-logo-link);

      &:hover {
        color: var(--hover-color);
        text-decoration: underline;

        svg {
          fill: var(--hover-color);
        }
      }
    }

		@media screen and (max-width: 700px) {
      .contact-container {
        gap: 50px;
      }
    }
  `,H=p([v()],H);customElements.define("dm-contact",H);var E=class extends h{constructor(){super(...arguments);this.currentTheme=Ye();this.currentLocale=le();this.localeNames={"en-US":"English","de-DE":"Deutsch"}}handleTheming(t){let r=t.target.value;Ze.includes(r)&&(this.currentTheme=r,Ke(this.currentTheme))}async handleLanguage(t){let s=t.target,r=Number.parseInt(s.value),i=ae[r];i!==this.currentLocale&&(this.currentLocale=i,await We(this.currentLocale))}render(){return c`
      <dm-headline>${a("SETTINGS")}:</dm-headline>

      <dm-content>
        <div class="settings-container">
          <label for="theme">${a("Appearance")}</label>

          <select name="theme" @change="${this.handleTheming}">
            <option value="dark" ?selected="${this.currentTheme==="dark"}">${a("Dark")}</option>
            <option value="light" ?selected="${this.currentTheme==="light"}">${a("Light")}</option>
          </select>
        </div>

        <div class="settings-container">
          <label for="language">${a("Language")}</label>

          <select name="language" @change="${this.handleLanguage}">
            ${ae.map((t,s)=>c`
                <option @click="${this.handleLanguage}" value="${s}" ?selected="${t===this.currentLocale}">${this.localeNames[t]}</option>
              `)}
          </select>
        </div>

      </dm-content>
    `}};n(E,"Settings"),E.styles=m`
    :host {
      --content-gap: 20px;

			--select-font-size: 28px;
			--select-menu-color: var(--read-color);
			--select-menu-background: var(--background-color);

			--select-border-color: var(--read-color);
			--select-border-width: 1px;
			--select-border-padding: 5px;
    }
    
    .settings-container {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: var(--content-gap);
    }

    select {
      background: var(--select-menu-background);
      font-family: var(--font);
      font-size: var(--select-font-size);
      color: var(--select-menu-color);
      border: solid var(--select-border-width) var(--select-border-color);
      padding: var(--select-border-padding);
      cursor: pointer;
    }
  `,p([w()],E.prototype,"currentTheme",2),p([w()],E.prototype,"currentLocale",2),E=p([v()],E);customElements.define("dm-settings",E);var I=class extends h{render(){return c`
      <dm-headline>${a("Programming / Scripting lang. ")}:</dm-headline>
      <dm-content>
        <ul>
          <li><a href="https://html.com" class="link" target="_blank" rel="noopener noreferrer">HTML</a> / <a href="https://www.w3.org/Style/CSS/Overview.de.html" class="link" target="_blank" rel="noopener noreferrer">CSS</a></li>
          <li><a href="https://www.javascript.com" class="link" target="_blank" rel="noopener noreferrer">JavaScript</a> / <a href="https://www.typescriptlang.org" class="link" target="_blank" rel="noopener noreferrer">TypeScript</a></li>
          <li><a href="https://go.dev" class="link" target="_blank" rel="noopener noreferrer">Go</a></li>
          <li><a href="https://www.python.org" class="link" target="_blank" rel="noopener noreferrer">Python</a></li>
          <li><a href="https://www.java.com" class="link" target="_blank" rel="noopener noreferrer">Java</a></li>
        </ul>
      </dm-content>
    `}};n(I,"Languages"),I.styles=m`
    :host {
      --text-color: var(--read-color);
    }

    .link {
      color: var(--text-color);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    ul {
      margin: 0;
    }
  `,I=p([v()],I);customElements.define("dm-skills-languages",I);var R=class extends h{render(){return c`
      <dm-headline>${a("Other")}:</dm-headline>
      <dm-content>
        <ul>
          <li><a href="https://git-scm.com" class="link" target="_blank" rel="noopener noreferrer">Git</a></li>
          <li><a href="https://figma.com" class="link" target="_blank" rel="noopener noreferrer">Figma</a></li>
          <li><a href="https://www.blender.org" class="link" target="_blank" rel="noopener noreferrer">Blender</a></li>
          <li><a href="https://www.adobe.com/de/products/illustrator.html" class="link" target="_blank" rel="noopener noreferrer">Adobe Illustrator</a></li>
          <li><a href="https://www.adobe.com/de/products/photoshop.html" class="link" target="_blank" rel="noopener noreferrer">Adobe Photoshop</a></li>
          <li><a href="https://www.adobe.com/de/products/aftereffects.html" class="link" target="_blank" rel="noopener noreferrer">Adobe After Effects</a></li>
        </ul>
      </dm-content>
    `}};n(R,"Other"),R.styles=m`
    :host {
      --text-color: var(--read-color);
    }

    .link {
      color: var(--text-color);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    ul {
      margin: 0;
    }
  `,R=p([v()],R);customElements.define("dm-skills-other",R);var j=class extends h{render(){return c`
      <dm-headline>${a("Frameworks / Libraries / Tools")}:</dm-headline>
      <dm-content>
        <ul>
          <li><a href="https://react.dev" class="link" target="_blank" rel="noopener noreferrer">React</a> / <a href="https://nextjs.org" class="link" target="_blank" rel="noopener noreferrer">Next.js</a></li>
          <li><a href="https://lit.dev" class="link" target="_blank" rel="noopener noreferrer">Lit</a></li>
          <li><a href="https://vite.dev" class="link" target="_blank" rel="noopener noreferrer">Vite</a> / <a href="https://storybook.js.org" class="link" target="_blank" rel="noopener noreferrer">Storybook</a></li>
          <li><a href="https://nodejs.org" class="link" target="_blank" rel="noopener noreferrer">Node.js</a></li>
          <li><a href="https://www.docker.com" class="link" target="_blank" rel="noopener noreferrer">Docker</a></li>
        </ul>
      </dm-content>
    `}};n(j,"Tools"),j.styles=m`
    :host {
      --text-color: var(--read-color);
    }

    .link {
      color: var(--text-color);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    ul {
      margin: 0;
    }
  `,j=p([v()],j);customElements.define("dm-skills-tools",j);var st=class extends h{static{n(this,"Layout")}static{this.styles=m`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media screen and (max-width: 700px) {
			.container {
				padding-bottom: 20px;
			}
    }
  `}render(){return c`
      <div class="container">
        <dm-logo></dm-logo>
        <slot></slot>
      </div>
    `}};customElements.define("dm-layout",st);
/*! Bundled license information:

@lit/localize/internal/locale-status-event.js:
@lit/localize/internal/str-tag.js:
@lit/localize/internal/types.js:
@lit/localize/internal/default-msg.js:
@lit/localize/internal/localized-controller.js:
@lit/localize/internal/localized-decorator.js:
@lit/localize/internal/runtime-msg.js:
@lit/localize/init/runtime.js:
@lit/localize/init/transform.js:
@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/deferred.js:
@lit/localize/internal/id-generation.js:
@lit/localize/lit-localize.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/fnv1a64.js:
  (**
   * @license
   * Copyright 2014 Travis Webb
   * SPDX-License-Identifier: MIT
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
