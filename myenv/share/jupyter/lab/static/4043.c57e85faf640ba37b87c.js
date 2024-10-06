"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [4043],
  {
    14043: (e, t, s) => {
      s.r(t);
      s.d(t, { StyleModule: () => r });
      const l = "ͼ";
      const i = typeof Symbol == "undefined" ? "__" + l : Symbol.for(l);
      const n = typeof Symbol == "undefined" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet");
      const o = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : {};
      class r {
        constructor(e, t) {
          this.rules = [];
          let { finish: s } = t || {};
          function l(e) {
            return /^@/.test(e) ? [e] : e.split(/,\s*/);
          }
          function i(e, t, n, o) {
            let r = [],
              h = /^@(\w+)\b/.exec(e[0]),
              u = h && h[1] == "keyframes";
            if (h && t == null) return n.push(e[0] + ";");
            for (let s in t) {
              let o = t[s];
              if (/&/.test(s)) {
                i(
                  s
                    .split(/,\s*/)
                    .map((t) => e.map((e) => t.replace(/&/, e)))
                    .reduce((e, t) => e.concat(t)),
                  o,
                  n
                );
              } else if (o && typeof o == "object") {
                if (!h) throw new RangeError("The value of a property (" + s + ") should be a primitive value.");
                i(l(s), o, r, u);
              } else if (o != null) {
                r.push(s.replace(/_.*/, "").replace(/[A-Z]/g, (e) => "-" + e.toLowerCase()) + ": " + o + ";");
              }
            }
            if (r.length || u) {
              n.push((s && !h && !o ? e.map(s) : e).join(", ") + " {" + r.join(" ") + "}");
            }
          }
          for (let n in e) i(l(n), e[n], this.rules);
        }
        getRules() {
          return this.rules.join("\n");
        }
        static newName() {
          let e = o[i] || 1;
          o[i] = e + 1;
          return l + e.toString(36);
        }
        static mount(e, t, s) {
          let l = e[n],
            i = s && s.nonce;
          if (!l) l = new u(e, i);
          else if (i) l.setNonce(i);
          l.mount(Array.isArray(t) ? t : [t], e);
        }
      }
      let h = new Map();
      class u {
        constructor(e, t) {
          let s = e.ownerDocument || e,
            l = s.defaultView;
          if (!e.head && e.adoptedStyleSheets && l.CSSStyleSheet) {
            let t = h.get(s);
            if (t) return (e[n] = t);
            this.sheet = new l.CSSStyleSheet();
            h.set(s, this);
          } else {
            this.styleTag = s.createElement("style");
            if (t) this.styleTag.setAttribute("nonce", t);
          }
          this.modules = [];
          e[n] = this;
        }
        mount(e, t) {
          let s = this.sheet;
          let l = 0,
            i = 0;
          for (let n = 0; n < e.length; n++) {
            let t = e[n],
              o = this.modules.indexOf(t);
            if (o < i && o > -1) {
              this.modules.splice(o, 1);
              i--;
              o = -1;
            }
            if (o == -1) {
              this.modules.splice(i++, 0, t);
              if (s) for (let e = 0; e < t.rules.length; e++) s.insertRule(t.rules[e], l++);
            } else {
              while (i < o) l += this.modules[i++].rules.length;
              l += t.rules.length;
              i++;
            }
          }
          if (s) {
            if (t.adoptedStyleSheets.indexOf(this.sheet) < 0) t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets];
          } else {
            let e = "";
            for (let t = 0; t < this.modules.length; t++) e += this.modules[t].getRules() + "\n";
            this.styleTag.textContent = e;
            let s = t.head || t;
            if (this.styleTag.parentNode != s) s.insertBefore(this.styleTag, s.firstChild);
          }
        }
        setNonce(e) {
          if (this.styleTag && this.styleTag.getAttribute("nonce") != e) this.styleTag.setAttribute("nonce", e);
        }
      }
    },
  },
]);
