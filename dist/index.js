var dt=Object.defineProperty;var Tt=Object.getOwnPropertyDescriptor;var n=(o,t)=>dt(o,"name",{value:t,configurable:!0});var pt=(o,t,e,s)=>{for(var r=s>1?void 0:s?Tt(t,e):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(r=(s?a(t,e,r):a(r))||r);return s&&r&&dt(t,e,r),r};var ut=n(o=>typeof o!="string"&&"strTag"in o,"isStrTagged"),F=n((o,t,e)=>{let s=o[0];for(let r=1;r<o.length;r++)s+=t[e?e[r-1]:r-1],s+=o[r];return s},"joinStringsAndValues");var I=n(o=>ut(o)?F(o.strings,o.values):o,"defaultMsg");var A=I;var z=class{static{n(this,"Deferred")}constructor(){this.settled=!1,this.promise=new Promise((t,e)=>{this._resolve=t,this._reject=e})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}};var Ut=[];for(let o=0;o<256;o++)Ut[o]=(o>>4&15).toString(16)+(o&15).toString(16);var Rt=new z;Rt.resolve();var j=globalThis,k=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),mt=new WeakMap,P=class{static{n(this,"n")}constructor(t,e,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(k&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=mt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&mt.set(e,t))}return t}toString(){return this.cssText}},ft=n(o=>new P(typeof o=="string"?o:o+"",void 0,K),"r"),f=n((o,...t)=>{let e=o.length===1?o[0]:t.reduce((s,r,i)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new P(e,o,K)},"i"),gt=n((o,t)=>{if(k)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=j.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,o.appendChild(s)}},"S"),Z=k?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return ft(e)})(o):o;var{is:Ht,defineProperty:Nt,getOwnPropertyDescriptor:It,getOwnPropertyNames:zt,getOwnPropertySymbols:jt,getPrototypeOf:kt}=Object,q=globalThis,$t=q.trustedTypes,qt=$t?$t.emptyScript:"",Dt=q.reactiveElementPolyfillSupport,M=n((o,t)=>o,"d"),T={toAttribute(o,t){switch(t){case Boolean:o=o?qt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},D=n((o,t)=>!Ht(o,t),"f"),_t={attribute:!0,type:String,converter:T,reflect:!1,useDefault:!1,hasChanged:D};Symbol.metadata??=Symbol("metadata"),q.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static{n(this,"y")}static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_t){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Nt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:i}=It(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:r,set(a){let c=r?.call(this);i?.call(this,a),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_t}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;let t=kt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){let e=this.properties,s=[...zt(e),...jt(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(Z(r))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute!==void 0?s.converter:T).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),a=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:T;this._$Em=r,this[r]=a.fromAttribute(e,i.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){let r=this.constructor,i=this[t];if(s??=r.getPropertyOptions(t),!((s.hasChanged??D)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:i},a){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),i!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,i]of s){let{wrapped:a}=i,c=this[r];a!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,i,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[M("elementProperties")]=new Map,_[M("finalized")]=new Map,Dt?.({ReactiveElement:_}),(q.reactiveElementVersions??=[]).push("2.1.0");var et=globalThis,V=et.trustedTypes,vt=V?V.createPolicy("lit-html",{createHTML:n(o=>o,"createHTML")}):void 0,bt="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,wt="?"+y,Vt=`<${wt}>`,S=document,U=n(()=>S.createComment(""),"l"),O=n(o=>o===null||typeof o!="object"&&typeof o!="function","c"),st=Array.isArray,Bt=n(o=>st(o)||typeof o?.[Symbol.iterator]=="function","u"),J=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yt=/-->/g,At=/>/g,x=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xt=/'/g,Et=/"/g,Ct=/^(?:script|style|textarea|title)$/i,rt=n(o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),"y"),g=rt(1),Ye=rt(2),ts=rt(3),b=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),St=new WeakMap,E=S.createTreeWalker(S,129);function Pt(o,t){if(!st(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return vt!==void 0?vt.createHTML(t):t}n(Pt,"P");var Wt=n((o,t)=>{let e=o.length-1,s=[],r,i=t===2?"<svg>":t===3?"<math>":"",a=L;for(let c=0;c<e;c++){let l=o[c],d,m,h=-1,$=0;for(;$<l.length&&(a.lastIndex=$,m=a.exec(l),m!==null);)$=a.lastIndex,a===L?m[1]==="!--"?a=yt:m[1]!==void 0?a=At:m[2]!==void 0?(Ct.test(m[2])&&(r=RegExp("</"+m[2],"g")),a=x):m[3]!==void 0&&(a=x):a===x?m[0]===">"?(a=r??L,h=-1):m[1]===void 0?h=-2:(h=a.lastIndex-m[2].length,d=m[1],a=m[3]===void 0?x:m[3]==='"'?Et:xt):a===Et||a===xt?a=x:a===yt||a===At?a=L:(a=x,r=void 0);let v=a===x&&o[c+1].startsWith("/>")?" ":"";i+=a===L?l+Vt:h>=0?(s.push(d),l.slice(0,h)+bt+l.slice(h)+y+v):l+y+(h===-2?c:v)}return[Pt(o,i+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},"V"),R=class o{static{n(this,"N")}constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,a=0,c=t.length-1,l=this.parts,[d,m]=Wt(t,e);if(this.el=o.createElement(d,s),E.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=E.nextNode())!==null&&l.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(let h of r.getAttributeNames())if(h.endsWith(bt)){let $=m[a++],v=r.getAttribute(h).split(y),N=/([.?@])?(.*)/.exec($);l.push({type:1,index:i,name:N[2],strings:v,ctor:N[1]==="."?G:N[1]==="?"?Q:N[1]==="@"?Y:C}),r.removeAttribute(h)}else h.startsWith(y)&&(l.push({type:6,index:i}),r.removeAttribute(h));if(Ct.test(r.tagName)){let h=r.textContent.split(y),$=h.length-1;if($>0){r.textContent=V?V.emptyScript:"";for(let v=0;v<$;v++)r.append(h[v],U()),E.nextNode(),l.push({type:2,index:++i});r.append(h[$],U())}}}else if(r.nodeType===8)if(r.data===wt)l.push({type:2,index:i});else{let h=-1;for(;(h=r.data.indexOf(y,h+1))!==-1;)l.push({type:7,index:i}),h+=y.length-1}i++}}static createElement(t,e){let s=S.createElement("template");return s.innerHTML=t,s}};function w(o,t,e=o,s){if(t===b)return t;let r=s!==void 0?e._$Co?.[s]:e._$Cl,i=O(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,e,s)),s!==void 0?(e._$Co??=[])[s]=r:e._$Cl=r),r!==void 0&&(t=w(o,r._$AS(o,t.values),r,s)),t}n(w,"S");var X=class{static{n(this,"M")}constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??S).importNode(e,!0);E.currentNode=r;let i=E.nextNode(),a=0,c=0,l=s[0];for(;l!==void 0;){if(a===l.index){let d;l.type===2?d=new H(i,i.nextSibling,this,t):l.type===1?d=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(d=new tt(i,this,t)),this._$AV.push(d),l=s[++c]}a!==l?.index&&(i=E.nextNode(),a++)}return E.currentNode=S,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},H=class o{static{n(this,"R")}get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),O(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Bt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=R.createElement(Pt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{let i=new X(r,this),a=i.u(this.options);i.p(e),this.T(a),this._$AH=i}}_$AC(t){let e=St.get(t.strings);return e===void 0&&St.set(t.strings,e=new R(t)),e}k(t){st(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let i of t)r===e.length?e.push(s=new o(this.O(U()),this.O(U()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},C=class{static{n(this,"k")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,r){let i=this.strings,a=!1;if(i===void 0)t=w(this,t,e,0),a=!O(t)||t!==this._$AH&&t!==b,a&&(this._$AH=t);else{let c=t,l,d;for(t=i[0],l=0;l<i.length-1;l++)d=w(this,c[s+l],e,l),d===b&&(d=this._$AH[l]),a||=!O(d)||d!==this._$AH[l],d===p?t=p:t!==p&&(t+=(d??"")+i[l+1]),this._$AH[l]=d}a&&!r&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},G=class extends C{static{n(this,"H")}constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},Q=class extends C{static{n(this,"I")}constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},Y=class extends C{static{n(this,"L")}constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??p)===b)return;let s=this._$AH,r=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==p&&(s===p||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},tt=class{static{n(this,"z")}constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}};var Ft=et.litHtmlPolyfillSupport;Ft?.(R,H),(et.litHtmlVersions??=[]).push("3.3.0");var Mt=n((o,t,e)=>{let s=e?.renderBefore??t,r=s._$litPart$;if(r===void 0){let i=e?.renderBefore??null;s._$litPart$=r=new H(t.insertBefore(U(),i),i,void 0,e??{})}return r._$AI(o),r},"B");var ot=globalThis,u=class extends _{static{n(this,"i")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return b}};u._$litElement$=!0,u.finalized=!0,ot.litElementHydrateSupport?.({LitElement:u});var Kt=ot.litElementPolyfillSupport;Kt?.({LitElement:u});(ot.litElementVersions??=[]).push("4.2.0");var it=class extends u{constructor(){super(...arguments);this.menuItems=[{name:"about me",label:A("about me")},{name:"career",label:A("career")},{name:"skills",label:A("skills")},{name:"blog",label:A("blog")},{name:"contact",label:A("contact")}]}static{n(this,"App")}static{this.styles=f`

	`}render(){return g`
			<dm-layout>
				<dm-panel>
					<dm-menu .items="${this.menuItems}"></dm-menu>
				</dm-panel>
			</dm-layout>
		`}};customElements.define("dm-app",it);var nt=class extends u{static{n(this,"Logo")}static{this.styles=f`
    :host {
      --gap-logo-text: 130%;
      --text-font-size: 42px;
      --text-color: #ffffff;
      --scale-multiplier: 1.2;
      --animation-time: 0.1s;
    }

    .logo-container {
      height: 100%;
      width: 100%;
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
  `}render(){return g`
      <div class="logo-container">
        <img class="logo-image" src="./assets/app/logo.svg">
      </div>
    `}};customElements.define("dm-logo",nt);var Zt={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:D},Jt=n((o=Zt,t,e)=>{let{kind:s,metadata:r}=e,i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),s==="setter"&&((o=Object.create(o)).wrapped=!0),i.set(e.name,o),s==="accessor"){let{name:a}=e;return{set(c){let l=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,l,o)},init(c){return c!==void 0&&this.C(a,void 0,o,c),c}}}if(s==="setter"){let{name:a}=e;return function(c){let l=this[a];t.call(this,c),this.requestUpdate(a,l,o)}}throw Error("Unsupported decorator location: "+s)},"r");function at(o){return(t,e)=>typeof e=="object"?Jt(o,t,e):((s,r,i)=>{let a=r.hasOwnProperty(i);return r.constructor.createProperty(i,s),a?Object.getOwnPropertyDescriptor(r,i):void 0})(o,t,e)}n(at,"n");var W=class extends u{static{n(this,"Menu")}static{this.styles=f`
    :host {
      --gap-items: 30px;
      --menu-color: var(--font-color);
      --menu-size: var(--title-font-size);
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
      background: none;
      border: none;
      cursor: pointer;
      font-family: var(--text-font);
      font-size: var(--menu-size);
      color: var(--menu-color);

      &:hover {
        text-decoration: underline;
      }
    }
  `}render(){return g`
      <div class="menu-container">
        ${this.items.map(t=>g`
            <button>${t.label}</button>
          `)}
      </div>
    `}};pt([at({attribute:!1})],W.prototype,"items",2);customElements.define("dm-menu",W);var lt=class extends u{static{n(this,"Panel")}static{this.styles=f`
    :host {
      --panel-size: 600px;
      --panel-padding: 5%;
      --border-size: 5px;
      --border-color: #ffffff;
    }

    .panel-container {
      width: var(--panel-size);
      aspect-ratio: 1 / 1;
      border: solid var(--border-size) var(--border-color);
      box-sizing: border-box;
      padding: var(--panel-padding);
    }

    @media screen and (max-width: 600px) {
      :host {
        --panel-size: 90vw;
    }
  `}render(){return g`
      <div class="panel-container">
        <slot></slot>
      </div>
    `}};customElements.define("dm-panel",lt);var ct=class extends u{static{n(this,"Socials")}static{this.styles=f`
    :host {

    }
  `}render(){return g`
      <div class="socials-container">
        
      </div>
    `}};customElements.define("dm-socials",ct);var ht=class extends u{static{n(this,"Layout")}static{this.styles=f`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    dm-logo {
      height: 100px;
      margin: 50px 0;
    }
  `}render(){return g`
      <div class="container">
        <dm-logo></dm-logo>
        <slot></slot>
        <dm-socials></dm-socials>
      </div>
    `}};customElements.define("dm-layout",ht);
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
