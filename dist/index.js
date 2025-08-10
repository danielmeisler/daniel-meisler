"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
      if (decorator = decorators[i5])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
  };

  // node_modules/@lit/localize/internal/str-tag.js
  var isStrTagged = /* @__PURE__ */ __name((val) => typeof val !== "string" && "strTag" in val, "isStrTagged");
  var joinStringsAndValues = /* @__PURE__ */ __name((strings, values, valueOrder) => {
    let concat = strings[0];
    for (let i5 = 1; i5 < strings.length; i5++) {
      concat += values[valueOrder ? valueOrder[i5 - 1] : i5 - 1];
      concat += strings[i5];
    }
    return concat;
  }, "joinStringsAndValues");

  // node_modules/@lit/localize/internal/default-msg.js
  var defaultMsg = /* @__PURE__ */ __name((template) => isStrTagged(template) ? joinStringsAndValues(template.strings, template.values) : template, "defaultMsg");

  // node_modules/@lit/localize/init/install.js
  var msg = defaultMsg;

  // node_modules/@lit/localize/internal/deferred.js
  var Deferred = class {
    static {
      __name(this, "Deferred");
    }
    constructor() {
      this.settled = false;
      this.promise = new Promise((resolve, reject) => {
        this._resolve = resolve;
        this._reject = reject;
      });
    }
    resolve(value) {
      this.settled = true;
      this._resolve(value);
    }
    reject(error) {
      this.settled = true;
      this._reject(error);
    }
  };

  // node_modules/@lit/localize/internal/fnv1a64.js
  var hl = [];
  for (let i5 = 0; i5 < 256; i5++) {
    hl[i5] = (i5 >> 4 & 15).toString(16) + (i5 & 15).toString(16);
  }

  // node_modules/@lit/localize/init/runtime.js
  var loading = new Deferred();
  loading.resolve();

  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    static {
      __name(this, "n");
    }
    constructor(t3, e6, o6) {
      if (this._$cssResult$ = true, o6 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t3, this.t = e6;
    }
    get styleSheet() {
      let t3 = this.o;
      const s4 = this.t;
      if (e && void 0 === t3) {
        const e6 = void 0 !== s4 && 1 === s4.length;
        e6 && (t3 = o.get(s4)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && o.set(s4, t3));
      }
      return t3;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = /* @__PURE__ */ __name((t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s), "r");
  var i = /* @__PURE__ */ __name((t3, ...e6) => {
    const o6 = 1 === t3.length ? t3[0] : e6.reduce((e7, s4, o7) => e7 + ((t4) => {
      if (true === t4._$cssResult$) return t4.cssText;
      if ("number" == typeof t4) return t4;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s4) + t3[o7 + 1], t3[0]);
    return new n(o6, t3, s);
  }, "i");
  var S = /* @__PURE__ */ __name((s4, o6) => {
    if (e) s4.adoptedStyleSheets = o6.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
    else for (const e6 of o6) {
      const o7 = document.createElement("style"), n5 = t.litNonce;
      void 0 !== n5 && o7.setAttribute("nonce", n5), o7.textContent = e6.cssText, s4.appendChild(o7);
    }
  }, "S");
  var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
    let e6 = "";
    for (const s4 of t4.cssRules) e6 += s4.cssText;
    return r(e6);
  })(t3) : t3;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = /* @__PURE__ */ __name((t3, s4) => t3, "d");
  var u = { toAttribute(t3, s4) {
    switch (s4) {
      case Boolean:
        t3 = t3 ? l : null;
        break;
      case Object:
      case Array:
        t3 = null == t3 ? t3 : JSON.stringify(t3);
    }
    return t3;
  }, fromAttribute(t3, s4) {
    let i5 = t3;
    switch (s4) {
      case Boolean:
        i5 = null !== t3;
        break;
      case Number:
        i5 = null === t3 ? null : Number(t3);
        break;
      case Object:
      case Array:
        try {
          i5 = JSON.parse(t3);
        } catch (t4) {
          i5 = null;
        }
    }
    return i5;
  } };
  var f = /* @__PURE__ */ __name((t3, s4) => !i2(t3, s4), "f");
  var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var y = class extends HTMLElement {
    static {
      __name(this, "y");
    }
    static addInitializer(t3) {
      this._$Ei(), (this.l ??= []).push(t3);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t3, s4 = b) {
      if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t3, s4), !s4.noAccessor) {
        const i5 = Symbol(), h3 = this.getPropertyDescriptor(t3, i5, s4);
        void 0 !== h3 && e2(this.prototype, t3, h3);
      }
    }
    static getPropertyDescriptor(t3, s4, i5) {
      const { get: e6, set: r6 } = h(this.prototype, t3) ?? { get() {
        return this[s4];
      }, set(t4) {
        this[s4] = t4;
      } };
      return { get: e6, set(s5) {
        const h3 = e6?.call(this);
        r6?.call(this, s5), this.requestUpdate(t3, h3, i5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t3) {
      return this.elementProperties.get(t3) ?? b;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t3 = n2(this);
      t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t4 = this.properties, s4 = [...r2(t4), ...o2(t4)];
        for (const i5 of s4) this.createProperty(i5, t4[i5]);
      }
      const t3 = this[Symbol.metadata];
      if (null !== t3) {
        const s4 = litPropertyMetadata.get(t3);
        if (void 0 !== s4) for (const [t4, i5] of s4) this.elementProperties.set(t4, i5);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t4, s4] of this.elementProperties) {
        const i5 = this._$Eu(t4, s4);
        void 0 !== i5 && this._$Eh.set(i5, t4);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      const i5 = [];
      if (Array.isArray(s4)) {
        const e6 = new Set(s4.flat(1 / 0).reverse());
        for (const s5 of e6) i5.unshift(c(s5));
      } else void 0 !== s4 && i5.push(c(s4));
      return i5;
    }
    static _$Eu(t3, s4) {
      const i5 = s4.attribute;
      return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
    }
    addController(t3) {
      (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
    }
    removeController(t3) {
      this._$EO?.delete(t3);
    }
    _$E_() {
      const t3 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
      t3.size > 0 && (this._$Ep = t3);
    }
    createRenderRoot() {
      const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t3, this.constructor.elementStyles), t3;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t3) => t3.hostDisconnected?.());
    }
    attributeChangedCallback(t3, s4, i5) {
      this._$AK(t3, i5);
    }
    _$ET(t3, s4) {
      const i5 = this.constructor.elementProperties.get(t3), e6 = this.constructor._$Eu(t3, i5);
      if (void 0 !== e6 && true === i5.reflect) {
        const h3 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s4, i5.type);
        this._$Em = t3, null == h3 ? this.removeAttribute(e6) : this.setAttribute(e6, h3), this._$Em = null;
      }
    }
    _$AK(t3, s4) {
      const i5 = this.constructor, e6 = i5._$Eh.get(t3);
      if (void 0 !== e6 && this._$Em !== e6) {
        const t4 = i5.getPropertyOptions(e6), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
        this._$Em = e6, this[e6] = h3.fromAttribute(s4, t4.type) ?? this._$Ej?.get(e6) ?? null, this._$Em = null;
      }
    }
    requestUpdate(t3, s4, i5) {
      if (void 0 !== t3) {
        const e6 = this.constructor, h3 = this[t3];
        if (i5 ??= e6.getPropertyOptions(t3), !((i5.hasChanged ?? f)(h3, s4) || i5.useDefault && i5.reflect && h3 === this._$Ej?.get(t3) && !this.hasAttribute(e6._$Eu(t3, i5)))) return;
        this.C(t3, s4, i5);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t3, s4, { useDefault: i5, reflect: e6, wrapped: h3 }, r6) {
      i5 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, r6 ?? s4 ?? this[t3]), true !== h3 || void 0 !== r6) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t3, s4)), true === e6 && this._$Em !== t3 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t3));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t4) {
        Promise.reject(t4);
      }
      const t3 = this.scheduleUpdate();
      return null != t3 && await t3, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t5, s5] of this._$Ep) this[t5] = s5;
          this._$Ep = void 0;
        }
        const t4 = this.constructor.elementProperties;
        if (t4.size > 0) for (const [s5, i5] of t4) {
          const { wrapped: t5 } = i5, e6 = this[s5];
          true !== t5 || this._$AL.has(s5) || void 0 === e6 || this.C(s5, void 0, i5, e6);
        }
      }
      let t3 = false;
      const s4 = this._$AL;
      try {
        t3 = this.shouldUpdate(s4), t3 ? (this.willUpdate(s4), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s4)) : this._$EM();
      } catch (s5) {
        throw t3 = false, this._$EM(), s5;
      }
      t3 && this._$AE(s4);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
      this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$EM() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t3) {
      return true;
    }
    update(t3) {
      this._$Eq &&= this._$Eq.forEach((t4) => this._$ET(t4, this[t4])), this._$EM();
    }
    updated(t3) {
    }
    firstUpdated(t3) {
    }
  };
  y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.0");

  // node_modules/lit-html/lit-html.js
  var t2 = globalThis;
  var i3 = t2.trustedTypes;
  var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: /* @__PURE__ */ __name((t3) => t3, "createHTML") }) : void 0;
  var e3 = "$lit$";
  var h2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var o3 = "?" + h2;
  var n3 = `<${o3}>`;
  var r3 = document;
  var l2 = /* @__PURE__ */ __name(() => r3.createComment(""), "l");
  var c3 = /* @__PURE__ */ __name((t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3, "c");
  var a2 = Array.isArray;
  var u2 = /* @__PURE__ */ __name((t3) => a2(t3) || "function" == typeof t3?.[Symbol.iterator], "u");
  var d2 = "[ 	\n\f\r]";
  var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var _ = />/g;
  var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p2 = /'/g;
  var g = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var y2 = /* @__PURE__ */ __name((t3) => (i5, ...s4) => ({ _$litType$: t3, strings: i5, values: s4 }), "y");
  var x = y2(1);
  var b2 = y2(2);
  var w = y2(3);
  var T = Symbol.for("lit-noChange");
  var E = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129);
  function P(t3, i5) {
    if (!a2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s2 ? s2.createHTML(i5) : i5;
  }
  __name(P, "P");
  var V = /* @__PURE__ */ __name((t3, i5) => {
    const s4 = t3.length - 1, o6 = [];
    let r6, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = f2;
    for (let i6 = 0; i6 < s4; i6++) {
      const s5 = t3[i6];
      let a3, u3, d3 = -1, y3 = 0;
      for (; y3 < s5.length && (c4.lastIndex = y3, u3 = c4.exec(s5), null !== u3); ) y3 = c4.lastIndex, c4 === f2 ? "!--" === u3[1] ? c4 = v : void 0 !== u3[1] ? c4 = _ : void 0 !== u3[2] ? ($.test(u3[2]) && (r6 = RegExp("</" + u3[2], "g")), c4 = m) : void 0 !== u3[3] && (c4 = m) : c4 === m ? ">" === u3[0] ? (c4 = r6 ?? f2, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? m : '"' === u3[3] ? g : p2) : c4 === g || c4 === p2 ? c4 = m : c4 === v || c4 === _ ? c4 = f2 : (c4 = m, r6 = void 0);
      const x2 = c4 === m && t3[i6 + 1].startsWith("/>") ? " " : "";
      l3 += c4 === f2 ? s5 + n3 : d3 >= 0 ? (o6.push(a3), s5.slice(0, d3) + e3 + s5.slice(d3) + h2 + x2) : s5 + h2 + (-2 === d3 ? i6 : x2);
    }
    return [P(t3, l3 + (t3[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), o6];
  }, "V");
  var N = class _N {
    static {
      __name(this, "N");
    }
    constructor({ strings: t3, _$litType$: s4 }, n5) {
      let r6;
      this.parts = [];
      let c4 = 0, a3 = 0;
      const u3 = t3.length - 1, d3 = this.parts, [f3, v2] = V(t3, s4);
      if (this.el = _N.createElement(f3, n5), C.currentNode = this.el.content, 2 === s4 || 3 === s4) {
        const t4 = this.el.content.firstChild;
        t4.replaceWith(...t4.childNodes);
      }
      for (; null !== (r6 = C.nextNode()) && d3.length < u3; ) {
        if (1 === r6.nodeType) {
          if (r6.hasAttributes()) for (const t4 of r6.getAttributeNames()) if (t4.endsWith(e3)) {
            const i5 = v2[a3++], s5 = r6.getAttribute(t4).split(h2), e6 = /([.?@])?(.*)/.exec(i5);
            d3.push({ type: 1, index: c4, name: e6[2], strings: s5, ctor: "." === e6[1] ? H : "?" === e6[1] ? I : "@" === e6[1] ? L : k }), r6.removeAttribute(t4);
          } else t4.startsWith(h2) && (d3.push({ type: 6, index: c4 }), r6.removeAttribute(t4));
          if ($.test(r6.tagName)) {
            const t4 = r6.textContent.split(h2), s5 = t4.length - 1;
            if (s5 > 0) {
              r6.textContent = i3 ? i3.emptyScript : "";
              for (let i5 = 0; i5 < s5; i5++) r6.append(t4[i5], l2()), C.nextNode(), d3.push({ type: 2, index: ++c4 });
              r6.append(t4[s5], l2());
            }
          }
        } else if (8 === r6.nodeType) if (r6.data === o3) d3.push({ type: 2, index: c4 });
        else {
          let t4 = -1;
          for (; -1 !== (t4 = r6.data.indexOf(h2, t4 + 1)); ) d3.push({ type: 7, index: c4 }), t4 += h2.length - 1;
        }
        c4++;
      }
    }
    static createElement(t3, i5) {
      const s4 = r3.createElement("template");
      return s4.innerHTML = t3, s4;
    }
  };
  function S2(t3, i5, s4 = t3, e6) {
    if (i5 === T) return i5;
    let h3 = void 0 !== e6 ? s4._$Co?.[e6] : s4._$Cl;
    const o6 = c3(i5) ? void 0 : i5._$litDirective$;
    return h3?.constructor !== o6 && (h3?._$AO?.(false), void 0 === o6 ? h3 = void 0 : (h3 = new o6(t3), h3._$AT(t3, s4, e6)), void 0 !== e6 ? (s4._$Co ??= [])[e6] = h3 : s4._$Cl = h3), void 0 !== h3 && (i5 = S2(t3, h3._$AS(t3, i5.values), h3, e6)), i5;
  }
  __name(S2, "S");
  var M = class {
    static {
      __name(this, "M");
    }
    constructor(t3, i5) {
      this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t3) {
      const { el: { content: i5 }, parts: s4 } = this._$AD, e6 = (t3?.creationScope ?? r3).importNode(i5, true);
      C.currentNode = e6;
      let h3 = C.nextNode(), o6 = 0, n5 = 0, l3 = s4[0];
      for (; void 0 !== l3; ) {
        if (o6 === l3.index) {
          let i6;
          2 === l3.type ? i6 = new R(h3, h3.nextSibling, this, t3) : 1 === l3.type ? i6 = new l3.ctor(h3, l3.name, l3.strings, this, t3) : 6 === l3.type && (i6 = new z(h3, this, t3)), this._$AV.push(i6), l3 = s4[++n5];
        }
        o6 !== l3?.index && (h3 = C.nextNode(), o6++);
      }
      return C.currentNode = r3, e6;
    }
    p(t3) {
      let i5 = 0;
      for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t3, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t3[i5])), i5++;
    }
  };
  var R = class _R {
    static {
      __name(this, "R");
    }
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t3, i5, s4, e6) {
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s4, this.options = e6, this._$Cv = e6?.isConnected ?? true;
    }
    get parentNode() {
      let t3 = this._$AA.parentNode;
      const i5 = this._$AM;
      return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t3, i5 = this) {
      t3 = S2(this, t3, i5), c3(t3) ? t3 === E || null == t3 || "" === t3 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t3 !== this._$AH && t3 !== T && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : u2(t3) ? this.k(t3) : this._(t3);
    }
    O(t3) {
      return this._$AA.parentNode.insertBefore(t3, this._$AB);
    }
    T(t3) {
      this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
    }
    _(t3) {
      this._$AH !== E && c3(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(r3.createTextNode(t3)), this._$AH = t3;
    }
    $(t3) {
      const { values: i5, _$litType$: s4 } = t3, e6 = "number" == typeof s4 ? this._$AC(t3) : (void 0 === s4.el && (s4.el = N.createElement(P(s4.h, s4.h[0]), this.options)), s4);
      if (this._$AH?._$AD === e6) this._$AH.p(i5);
      else {
        const t4 = new M(e6, this), s5 = t4.u(this.options);
        t4.p(i5), this.T(s5), this._$AH = t4;
      }
    }
    _$AC(t3) {
      let i5 = A.get(t3.strings);
      return void 0 === i5 && A.set(t3.strings, i5 = new N(t3)), i5;
    }
    k(t3) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i5 = this._$AH;
      let s4, e6 = 0;
      for (const h3 of t3) e6 === i5.length ? i5.push(s4 = new _R(this.O(l2()), this.O(l2()), this, this.options)) : s4 = i5[e6], s4._$AI(h3), e6++;
      e6 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e6), i5.length = e6);
    }
    _$AR(t3 = this._$AA.nextSibling, i5) {
      for (this._$AP?.(false, true, i5); t3 && t3 !== this._$AB; ) {
        const i6 = t3.nextSibling;
        t3.remove(), t3 = i6;
      }
    }
    setConnected(t3) {
      void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
    }
  };
  var k = class {
    static {
      __name(this, "k");
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t3, i5, s4, e6, h3) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e6, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = E;
    }
    _$AI(t3, i5 = this, s4, e6) {
      const h3 = this.strings;
      let o6 = false;
      if (void 0 === h3) t3 = S2(this, t3, i5, 0), o6 = !c3(t3) || t3 !== this._$AH && t3 !== T, o6 && (this._$AH = t3);
      else {
        const e7 = t3;
        let n5, r6;
        for (t3 = h3[0], n5 = 0; n5 < h3.length - 1; n5++) r6 = S2(this, e7[s4 + n5], i5, n5), r6 === T && (r6 = this._$AH[n5]), o6 ||= !c3(r6) || r6 !== this._$AH[n5], r6 === E ? t3 = E : t3 !== E && (t3 += (r6 ?? "") + h3[n5 + 1]), this._$AH[n5] = r6;
      }
      o6 && !e6 && this.j(t3);
    }
    j(t3) {
      t3 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
    }
  };
  var H = class extends k {
    static {
      __name(this, "H");
    }
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t3) {
      this.element[this.name] = t3 === E ? void 0 : t3;
    }
  };
  var I = class extends k {
    static {
      __name(this, "I");
    }
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t3) {
      this.element.toggleAttribute(this.name, !!t3 && t3 !== E);
    }
  };
  var L = class extends k {
    static {
      __name(this, "L");
    }
    constructor(t3, i5, s4, e6, h3) {
      super(t3, i5, s4, e6, h3), this.type = 5;
    }
    _$AI(t3, i5 = this) {
      if ((t3 = S2(this, t3, i5, 0) ?? E) === T) return;
      const s4 = this._$AH, e6 = t3 === E && s4 !== E || t3.capture !== s4.capture || t3.once !== s4.once || t3.passive !== s4.passive, h3 = t3 !== E && (s4 === E || e6);
      e6 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
    }
  };
  var z = class {
    static {
      __name(this, "z");
    }
    constructor(t3, i5, s4) {
      this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3) {
      S2(this, t3);
    }
  };
  var j = t2.litHtmlPolyfillSupport;
  j?.(N, R), (t2.litHtmlVersions ??= []).push("3.3.0");
  var B = /* @__PURE__ */ __name((t3, i5, s4) => {
    const e6 = s4?.renderBefore ?? i5;
    let h3 = e6._$litPart$;
    if (void 0 === h3) {
      const t4 = s4?.renderBefore ?? null;
      e6._$litPart$ = h3 = new R(i5.insertBefore(l2(), t4), t4, void 0, s4 ?? {});
    }
    return h3._$AI(t3), h3;
  }, "B");

  // node_modules/lit-element/lit-element.js
  var s3 = globalThis;
  var i4 = class extends y {
    static {
      __name(this, "i");
    }
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t3 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t3.firstChild, t3;
    }
    update(t3) {
      const r6 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = B(r6, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return T;
    }
  };
  i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
  var o4 = s3.litElementPolyfillSupport;
  o4?.({ LitElement: i4 });
  (s3.litElementVersions ??= []).push("4.2.0");

  // node_modules/@lit/reactive-element/decorators/property.js
  var o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  var r4 = /* @__PURE__ */ __name((t3 = o5, e6, r6) => {
    const { kind: n5, metadata: i5 } = r6;
    let s4 = globalThis.litPropertyMetadata.get(i5);
    if (void 0 === s4 && globalThis.litPropertyMetadata.set(i5, s4 = /* @__PURE__ */ new Map()), "setter" === n5 && ((t3 = Object.create(t3)).wrapped = true), s4.set(r6.name, t3), "accessor" === n5) {
      const { name: o6 } = r6;
      return { set(r7) {
        const n6 = e6.get.call(this);
        e6.set.call(this, r7), this.requestUpdate(o6, n6, t3);
      }, init(e7) {
        return void 0 !== e7 && this.C(o6, void 0, t3, e7), e7;
      } };
    }
    if ("setter" === n5) {
      const { name: o6 } = r6;
      return function(r7) {
        const n6 = this[o6];
        e6.call(this, r7), this.requestUpdate(o6, n6, t3);
      };
    }
    throw Error("Unsupported decorator location: " + n5);
  }, "r");
  function n4(t3) {
    return (e6, o6) => "object" == typeof o6 ? r4(t3, e6, o6) : ((t4, e7, o7) => {
      const r6 = e7.hasOwnProperty(o7);
      return e7.constructor.createProperty(o7, t4), r6 ? Object.getOwnPropertyDescriptor(e7, o7) : void 0;
    })(t3, e6, o6);
  }
  __name(n4, "n");

  // node_modules/@lit/reactive-element/decorators/state.js
  function r5(r6) {
    return n4({ ...r6, state: true, attribute: false });
  }
  __name(r5, "r");

  // node_modules/@lit/reactive-element/decorators/base.js
  var e4 = /* @__PURE__ */ __name((e6, t3, c4) => (c4.configurable = true, c4.enumerable = true, Reflect.decorate && "object" != typeof t3 && Object.defineProperty(e6, t3, c4), c4), "e");

  // node_modules/@lit/reactive-element/decorators/query.js
  function e5(e6, r6) {
    return (n5, s4, i5) => {
      const o6 = /* @__PURE__ */ __name((t3) => t3.renderRoot?.querySelector(e6) ?? null, "o");
      if (r6) {
        const { get: e7, set: r7 } = "object" == typeof s4 ? n5 : i5 ?? (() => {
          const t3 = Symbol();
          return { get() {
            return this[t3];
          }, set(e8) {
            this[t3] = e8;
          } };
        })();
        return e4(n5, s4, { get() {
          let t3 = e7.call(this);
          return void 0 === t3 && (t3 = o6(this), (null !== t3 || this.hasUpdated) && r7.call(this, t3)), t3;
        } });
      }
      return e4(n5, s4, { get() {
        return o6(this);
      } });
    };
  }
  __name(e5, "e");

  // src/events/SwitchMenu.ts
  var SwitchMenu = class _SwitchMenu extends CustomEvent {
    static {
      __name(this, "SwitchMenu");
    }
    constructor({ menu }) {
      super(_SwitchMenu.name, {
        detail: { menu },
        bubbles: true,
        composed: true
      });
    }
  };

  // src/events/SwitchPage.ts
  var SwitchPage = class _SwitchPage extends CustomEvent {
    static {
      __name(this, "SwitchPage");
    }
    constructor({ page }) {
      super(_SwitchPage.name, {
        detail: { page },
        bubbles: true,
        composed: true
      });
    }
  };

  // src/App.ts
  var App = class extends i4 {
    constructor() {
      super(...arguments);
      this.currentMenu = "menu";
      this.currentPage = 1;
      this.#handleMenuSwitch = this.handleMenuSwitch.bind(this);
      this.#handlePageSwitch = this.handlePageSwitch.bind(this);
      this.menuItems = [
        {
          name: "aboutMe",
          label: msg("about me"),
          content: x`<dm-about-me></dm-about-me>`
        },
        {
          name: "career",
          label: msg("career"),
          content: x`<dm-career></dm-career>`
        },
        {
          name: "skills",
          label: msg("skills"),
          content: [
            x`<dm-skills-languages></dm-skills-languages>`,
            x`<dm-skills-tools></dm-skills-tools>`,
            x`<dm-skills-other></dm-skills-other>`
          ]
        },
        {
          name: "blog",
          label: msg("blog"),
          content: x`<dm-blog></dm-blog>`
        },
        {
          name: "contact",
          label: msg("contact"),
          content: x`<dm-contact></dm-contact>`
        }
      ];
    }
    static {
      __name(this, "App");
    }
    static {
      this.styles = i`
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
	`;
    }
    #handleMenuSwitch;
    #handlePageSwitch;
    connectedCallback() {
      super.connectedCallback();
      this.addEventListener(SwitchMenu.name, this.#handleMenuSwitch);
      this.addEventListener(SwitchPage.name, this.#handlePageSwitch);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener(SwitchMenu.name, this.#handleMenuSwitch);
      this.removeEventListener(SwitchPage.name, this.#handlePageSwitch);
    }
    handleMenuSwitch(event) {
      this.currentMenu = event.detail.menu;
    }
    handlePageSwitch(event) {
      this.currentPage = event.detail.page;
    }
    renderContent() {
      if (this.currentMenu === "menu") {
        this.currentPage = 1;
        return x`
					<dm-menu .items=${this.menuItems}></dm-menu></dm-menu>
				`;
      }
      if (this.currentMenu === "settings") {
        return x`
					<dm-settings></dm-settings>
				`;
      }
      return this.menuItems.find((item) => item.name === this.currentMenu)?.content ?? x``;
    }
    render() {
      const content = this.renderContent();
      return x`
			<dm-layout>
				<div class="content">
					${this.currentMenu !== "menu" ? x`<dm-back-button></dm-back-button>` : ""}
					<dm-panel>
						${Array.isArray(content) ? content[this.currentPage - 1] : content}
					</dm-panel>
					<dm-socials></dm-socials>
				</div>
				${Array.isArray(content) ? x`<dm-page-controls current-page="${this.currentPage}" max-pages="${content.length}"></dm-page-controls>` : ""}
			</dm-layout>
		`;
    }
  };
  __decorateClass([
    r5()
  ], App.prototype, "currentMenu", 2);
  __decorateClass([
    r5()
  ], App.prototype, "currentPage", 2);
  customElements.define("dm-app", App);

  // src/components/BackButton.ts
  var BackButton = class extends i4 {
    static {
      __name(this, "BackButton");
    }
    static {
      this.styles = i`
    :host {
      --button-size: 30px;
      --gap-arrows-text: 20px;
      --anim-shift: -20%;
      --anim-time: 0.5s;
    }

    .back-button {
      height: var(--button-size);
      aspect-ratio: 1 / 1;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;

      .back-icon {
        height: 100%;
        width: 100%;
        fill: white;
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
  `;
    }
    handleClick() {
      this.dispatchEvent(
        new CustomEvent(SwitchMenu.name, {
          detail: { menu: "menu" },
          bubbles: true,
          composed: true
        })
      );
    }
    render() {
      return x`
			<button class="back-button" @click="${this.handleClick}">
				<svg class="back-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60">
					<rect class="cls-1" x="60" y="20" width="40" height="20"/>
					<polyline class="cls-1" points="50 60 0 30 50 0"/>
				</svg>
			</button>
    `;
    }
  };
  customElements.define("dm-back-button", BackButton);

  // src/components/Headline.ts
  var Headline = class extends i4 {
    constructor() {
      super(...arguments);
      this.characterTokens = 0;
    }
    static {
      __name(this, "Headline");
    }
    static {
      this.styles = i`
    :host {
      --headline-font-size: 40px;
      --anim-time: calc(var(--steps) * 0.1s);
    }

    .container {
      display: inline-block;
    }

    h1 {
      font-size: var(--headline-font-size);
      font-weight: 600;
      margin: 0;
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      animation: typing var(--anim-time) steps(var(--steps));
    }

    @keyframes typing {
      from { width: 0 }
    }
  `;
    }
    get slotCharacterLength() {
      const assignedNodes = this.slotElement?.assignedNodes({ flatten: true }) || [];
      let totalLength = 0;
      for (const node of assignedNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
          totalLength += node.textContent?.length ?? 0;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          totalLength += node.textContent?.length ?? 0;
        }
      }
      return totalLength;
    }
    updated() {
      this.characterTokens = this.slotCharacterLength;
    }
    render() {
      return x`
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
    `;
    }
  };
  __decorateClass([
    e5("slot")
  ], Headline.prototype, "slotElement", 2);
  __decorateClass([
    r5()
  ], Headline.prototype, "characterTokens", 2);
  customElements.define("dm-headline", Headline);

  // src/components/Logo.ts
  var Logo = class extends i4 {
    static {
      __name(this, "Logo");
    }
    static {
      this.styles = i`
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
  `;
    }
    render() {
      return x`
      <div class="logo-container">
        <img class="logo-image" src="./assets/app/logo.svg">
      </div>
    `;
    }
  };
  customElements.define("dm-logo", Logo);

  // src/components/Menu.ts
  var Menu = class extends i4 {
    constructor() {
      super(...arguments);
      this.items = [];
    }
    static {
      __name(this, "Menu");
    }
    static {
      this.styles = i`
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
  `;
    }
    handleClick(event) {
      const target = event.currentTarget;
      const menuItem = target.dataset.content;
      this.dispatchEvent(
        new CustomEvent(SwitchMenu.name, {
          detail: { menu: menuItem },
          bubbles: true,
          composed: true
        })
      );
    }
    render() {
      return x`
      <div class="menu-container">
        ${this.items.map(
        (item) => x`
            <button @click="${this.handleClick}" data-content="${item.name}">${item.label}</button>
          `
      )}
      </div>
    `;
    }
  };
  __decorateClass([
    n4({ type: Array })
  ], Menu.prototype, "items", 2);
  customElements.define("dm-menu", Menu);

  // src/components/PageControls.ts
  var PageControls = class extends i4 {
    constructor() {
      super(...arguments);
      this.currentPage = 1;
      this.maxPages = 0;
    }
    static {
      __name(this, "PageControls");
    }
    static {
      this.styles = i`
    :host {
      --font-size: 24px;
      --button-size: 26px;
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
        fill: white;
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
        fill: white;
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
  `;
    }
    handleLeftClick() {
      this.currentPage = this.checkBounds(this.currentPage - 1);
      this.dispatchEvent(
        new CustomEvent(SwitchPage.name, {
          detail: { page: this.currentPage },
          bubbles: true,
          composed: true
        })
      );
    }
    handleRightClick() {
      this.currentPage = this.checkBounds(this.currentPage + 1);
      this.dispatchEvent(
        new CustomEvent(SwitchPage.name, {
          detail: { page: this.currentPage },
          bubbles: true,
          composed: true
        })
      );
    }
    checkBounds(page) {
      let newPage = page;
      if (page < 1) {
        newPage = this.maxPages;
      }
      if (page > this.maxPages) {
        newPage = 1;
      }
      return newPage;
    }
    render() {
      return x`
			<div class="page-controls">
				<button class="left-button" @click="${this.handleLeftClick}">
					<svg class="left-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60">
						<rect class="cls-1" x="60" y="20" width="40" height="20"/>
						<polyline class="cls-1" points="50 60 0 30 50 0"/>
					</svg>
				</button>

				<div class="page-counter">${msg("Page")} ${this.currentPage} / ${this.maxPages}</div>

				<button class="right-button" @click="${this.handleRightClick}">
					<svg class="right-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60">
						<rect class="cls-1" x="0" y="20" width="40" height="20"/>
						<polyline class="cls-1" points="50 0 100 30 50 60"/>
					</svg>
				</button>
			</div>
    `;
    }
  };
  __decorateClass([
    n4({ type: Number, attribute: "current-page" })
  ], PageControls.prototype, "currentPage", 2);
  __decorateClass([
    n4({ type: Number, attribute: "max-pages" })
  ], PageControls.prototype, "maxPages", 2);
  customElements.define("dm-page-controls", PageControls);

  // src/components/Panel.ts
  var Panel = class extends i4 {
    static {
      __name(this, "Panel");
    }
    static {
      this.styles = i`
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
      overflow: hidden;
    }

    @media screen and (max-width: 600px) {
      :host {
        --panel-size: 90vw;
    }
  `;
    }
    render() {
      return x`
      <div class="panel-container">
        <slot></slot>
      </div>
    `;
    }
  };
  customElements.define("dm-panel", Panel);

  // src/components/Socials.ts
  var Socials = class extends i4 {
    static {
      __name(this, "Socials");
    }
    static {
      this.styles = i`
    :host {
      --icon-size: 25px;
      --icon-color: var(--read-color);
      --anim-shift: 20%;
      --anim-time: 0.25s;
    }

    .socials-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
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
  `;
    }
    handleSettings() {
      this.dispatchEvent(
        new CustomEvent(SwitchMenu.name, {
          detail: { menu: "settings" },
          bubbles: true,
          composed: true
        })
      );
    }
    render() {
      return x`
      <div class="socials-container">

        <a href="https://github.com/danielmeisler" class="socials-button" target="_blank" rel="noopener noreferrer">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.63 96">
            <path class="cls-1" d="M48.85,0C21.84,0,0,22,0,49.22c0,21.76,13.99,40.17,33.4,46.69,2.43.49,3.32-1.06,3.32-2.36,0-1.14-.08-5.05-.08-9.13-13.59,2.93-16.42-5.87-16.42-5.87-2.18-5.7-5.42-7.17-5.42-7.17-4.45-3.01.32-3.01.32-3.01,4.93.33,7.52,5.05,7.52,5.05,4.37,7.5,11.4,5.38,14.24,4.07.4-3.18,1.7-5.38,3.07-6.6-10.84-1.14-22.24-5.38-22.24-24.28,0-5.38,1.94-9.78,5.01-13.2-.49-1.22-2.18-6.27.49-13.04,0,0,4.12-1.3,13.43,5.05,3.98-1.08,8.09-1.63,12.21-1.63,4.13,0,8.33.57,12.21,1.63,9.3-6.36,13.43-5.05,13.43-5.05,2.67,6.76.97,11.82.49,13.04,3.15,3.42,5.01,7.82,5.01,13.2,0,18.91-11.4,23.06-22.32,24.28,1.78,1.55,3.32,4.48,3.32,9.13,0,6.6-.08,11.9-.08,13.53,0,1.3.89,2.85,3.32,2.36,19.41-6.52,33.4-24.93,33.4-46.69.08-27.22-21.84-49.22-48.77-49.22Z"/>
          </svg>
        </a>

        <a href="https://www.instagram.com/daniel.meisler" class="socials-button" target="_blank" rel="noopener noreferrer">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <path class="cls-1" d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34" transform="translate(-2.5 -2.5)"/>
          </svg>
        </a>

        <a href="https://www.linkedin.com/in/daniel-meisler-22361a379" class="socials-button" target="_blank" rel="noopener noreferrer">
          <svg enable-background="new 0 0 56.693 56.693" class="icon" version="1.1" viewBox="0 0 56.693 56.693" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g>
              <path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z"/>
              <path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12 c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88 C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078 c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179 c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"/>
            </g>
          </svg>
        </a>

        <button @click="${this.handleSettings}" class="socials-button">
          <svg class="icon" version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g  fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
              <g  id="Core" transform="translate(-464.000000, -380.000000)">
                <g id="settings" transform="translate(464.000000, 380.000000)">
                  <path d="M17.4,11 C17.4,10.7 17.5,10.4 17.5,10 C17.5,9.6 17.5,9.3 17.4,9 L19.5,7.3 C19.7,7.1 19.7,6.9 19.6,6.7 L17.6,3.2 C17.5,3.1 17.3,3 17,3.1 L14.5,4.1 C14,3.7 13.4,3.4 12.8,3.1 L12.4,0.5 C12.5,0.2 12.2,0 12,0 L8,0 C7.8,0 7.5,0.2 7.5,0.4 L7.1,3.1 C6.5,3.3 6,3.7 5.4,4.1 L3,3.1 C2.7,3 2.5,3.1 2.3,3.3 L0.3,6.8 C0.2,6.9 0.3,7.2 0.5,7.4 L2.6,9 C2.6,9.3 2.5,9.6 2.5,10 C2.5,10.4 2.5,10.7 2.6,11 L0.5,12.7 C0.3,12.9 0.3,13.1 0.4,13.3 L2.4,16.8 C2.5,16.9 2.7,17 3,16.9 L5.5,15.9 C6,16.3 6.6,16.6 7.2,16.9 L7.6,19.5 C7.6,19.7 7.8,19.9 8.1,19.9 L12.1,19.9 C12.3,19.9 12.6,19.7 12.6,19.5 L13,16.9 C13.6,16.6 14.2,16.3 14.7,15.9 L17.2,16.9 C17.4,17 17.7,16.9 17.8,16.7 L19.8,13.2 C19.9,13 19.9,12.7 19.7,12.6 L17.4,11 L17.4,11 Z M10,13.5 C8.1,13.5 6.5,11.9 6.5,10 C6.5,8.1 8.1,6.5 10,6.5 C11.9,6.5 13.5,8.1 13.5,10 C13.5,11.9 11.9,13.5 10,13.5 L10,13.5 Z" id="Shape"/>
                </g>
              </g>
            </g>
          </svg>
        </button>

      </div>
    `;
    }
  };
  customElements.define("dm-socials", Socials);

  // src/content/aboutMe/AboutMe.ts
  var AboutMe = class extends i4 {
    static {
      __name(this, "AboutMe");
    }
    static {
      this.styles = i`
    :host {

    }
  `;
    }
    render() {
      return x`
      <dm-headline>ABOUT ME</dm-headline>
    `;
    }
  };
  customElements.define("dm-about-me", AboutMe);

  // src/content/blog/Blog.ts
  var Blog = class extends i4 {
    static {
      __name(this, "Blog");
    }
    static {
      this.styles = i`
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
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;

      &.background-svg {
        width: 100%;
        height: 100%;
        background-color: var(--svg-color);
      }
    }

    @keyframes typing {
      from { height: 0 }
    }
  `;
    }
    render() {
      return x`
    <div class="container">

      <div class="text">
        <div class="text-title">${msg("Blog")}</div>
        <div class="text-description">${msg("under construction")}</div>
      </div>

      <div class="background">
        <svg class="background-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600.16 599.89">
          <defs><style>.cls-1{fill:#fff;stroke-width:0px;}</style></defs>
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
    `;
    }
  };
  customElements.define("dm-blog", Blog);

  // src/content/career/Career.ts
  var Career = class extends i4 {
    static {
      __name(this, "Career");
    }
    static {
      this.styles = i`
    :host {
      
    }
  `;
    }
    render() {
      return x`
      <dm-headline>CAREER</dm-headline>
    `;
    }
  };
  customElements.define("dm-career", Career);

  // src/content/contact/Contact.ts
  var Contact = class extends i4 {
    static {
      __name(this, "Contact");
    }
    static {
      this.styles = i`
    :host {
      
    }
  `;
    }
    render() {
      return x`
      <dm-headline>CONTACT</dm-headline>
    `;
    }
  };
  customElements.define("dm-contact", Contact);

  // src/content/settings/Settings.ts
  var Settings = class extends i4 {
    static {
      __name(this, "Settings");
    }
    static {
      this.styles = i`
    :host {
      
    }
  `;
    }
    render() {
      return x`
      <dm-headline>SETTINGS</dm-headline>
    `;
    }
  };
  customElements.define("dm-settings", Settings);

  // src/content/skills/Languages.ts
  var Languages = class extends i4 {
    static {
      __name(this, "Languages");
    }
    static {
      this.styles = i`
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
  `;
    }
    render() {
      return x`
      <dm-headline>${msg("Programming / Scripting lang. ")}:</dm-headline>

      <ul>
        <li><a href="https://html.com" class="link" target="_blank" rel="noopener noreferrer">HTML</a> / <a href="https://www.w3.org/Style/CSS/Overview.de.html" class="link" target="_blank" rel="noopener noreferrer">CSS</a></li>
        <li><a href="https://www.javascript.com" class="link" target="_blank" rel="noopener noreferrer">JavaScript</a> / <a href="https://www.typescriptlang.org" class="link" target="_blank" rel="noopener noreferrer">TypeScript</a></li>
        <li><a href="https://go.dev" class="link" target="_blank" rel="noopener noreferrer">Go / golang</a></li>
        <li><a href="https://www.python.org" class="link" target="_blank" rel="noopener noreferrer">Python</a></li>
        <li><a href="https://www.java.com" class="link" target="_blank" rel="noopener noreferrer">Java</a></li>
      </ul>
    `;
    }
  };
  customElements.define("dm-skills-languages", Languages);

  // src/content/skills/Other.ts
  var Other = class extends i4 {
    static {
      __name(this, "Other");
    }
    static {
      this.styles = i`
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
  `;
    }
    render() {
      return x`
      <dm-headline>${msg("Other")}:</dm-headline>

      <ul>
        <li><a href="https://git-scm.com" class="link" target="_blank" rel="noopener noreferrer">Git</a></li>
        <li><a href="https://figma.com" class="link" target="_blank" rel="noopener noreferrer">Figma</a></li>
        <li><a href="https://www.blender.org" class="link" target="_blank" rel="noopener noreferrer">Blender</a></li>
        <li><a href="https://www.adobe.com/de/products/illustrator.html" class="link" target="_blank" rel="noopener noreferrer">Adobe Illustrator</a></li>
        <li><a href="https://www.adobe.com/de/products/photoshop.html" class="link" target="_blank" rel="noopener noreferrer">Adobe Photoshop</a></li>
        <li><a href="https://www.adobe.com/de/products/aftereffects.html" class="link" target="_blank" rel="noopener noreferrer">Adobe After Effects</a></li>
      </ul>
    `;
    }
  };
  customElements.define("dm-skills-other", Other);

  // src/content/skills/Tools.ts
  var Tools = class extends i4 {
    static {
      __name(this, "Tools");
    }
    static {
      this.styles = i`
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
  `;
    }
    render() {
      return x`
      <dm-headline>${msg("Frameworks / Libraries / Tools")}:</dm-headline>

      <ul>
        <li><a href="https://react.dev" class="link" target="_blank" rel="noopener noreferrer">React</a> / <a href="https://nextjs.org" class="link" target="_blank" rel="noopener noreferrer">Next.js</a></li>
        <li><a href="https://lit.dev" class="link" target="_blank" rel="noopener noreferrer">Lit</a></li>
        <li><a href="https://vite.dev" class="link" target="_blank" rel="noopener noreferrer">Vite</a> / <a href="https://storybook.js.org" class="link" target="_blank" rel="noopener noreferrer">Storybook</a></li>
        <li><a href="https://nodejs.org" class="link" target="_blank" rel="noopener noreferrer">Node.js</a></li>
        <li><a href="https://www.docker.com" class="link" target="_blank" rel="noopener noreferrer">Docker</a></li>
      </ul>
    `;
    }
  };
  customElements.define("dm-skills-tools", Tools);

  // src/layout/Layout.ts
  var Layout = class extends i4 {
    static {
      __name(this, "Layout");
    }
    static {
      this.styles = i`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    dm-logo {
      height: 100px;
      margin: 50px 0;
    }
  `;
    }
    render() {
      return x`
      <div class="container">
        <dm-logo></dm-logo>
        <slot></slot>
      </div>
    `;
    }
  };
  customElements.define("dm-layout", Layout);
})();
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
//# sourceMappingURL=index.js.map
