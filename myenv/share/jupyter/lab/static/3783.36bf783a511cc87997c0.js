(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [3783, 4155],
  {
    1065: (t, e, s) => {
      "use strict";
      s.d(e, { GA: () => _t, Gn: () => It, Mb: () => u, TK: () => h, eC: () => d, vQ: () => Ut });
      var i = s(37496);
      var n = s.n(i);
      var o = s(66143);
      var r = s.n(o);
      var l = s(24104);
      var a = s.n(l);
      class h {
        constructor(t, e, s) {
          this.state = t;
          this.pos = e;
          this.explicit = s;
          this.abortListeners = [];
        }
        tokenBefore(t) {
          let e = (0, l.syntaxTree)(this.state).resolveInner(this.pos, -1);
          while (e && t.indexOf(e.name) < 0) e = e.parent;
          return e ? { from: e.from, to: this.pos, text: this.state.sliceDoc(e.from, this.pos), type: e.type } : null;
        }
        matchBefore(t) {
          let e = this.state.doc.lineAt(this.pos);
          let s = Math.max(e.from, this.pos - 250);
          let i = e.text.slice(s - e.from, this.pos - e.from);
          let n = i.search(k(t, false));
          return n < 0 ? null : { from: s + n, to: this.pos, text: i.slice(n) };
        }
        get aborted() {
          return this.abortListeners == null;
        }
        addEventListener(t, e) {
          if (t == "abort" && this.abortListeners) this.abortListeners.push(e);
        }
      }
      function c(t) {
        let e = Object.keys(t).join("");
        let s = /\w/.test(e);
        if (s) e = e.replace(/\w/g, "");
        return `[${s ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
      }
      function f(t) {
        let e = Object.create(null),
          s = Object.create(null);
        for (let { label: n } of t) {
          e[n[0]] = true;
          for (let t = 1; t < n.length; t++) s[n[t]] = true;
        }
        let i = c(e) + c(s) + "*$";
        return [new RegExp("^" + i), new RegExp(i)];
      }
      function u(t) {
        let e = t.map((t) => (typeof t == "string" ? { label: t } : t));
        let [s, i] = e.every((t) => /^\w+$/.test(t.label)) ? [/\w*$/, /\w+$/] : f(e);
        return (t) => {
          let n = t.matchBefore(i);
          return n || t.explicit ? { from: n ? n.from : t.pos, options: e, validFor: s } : null;
        };
      }
      function p(t, e) {
        return (s) => {
          for (let i = syntaxTree(s.state).resolveInner(s.pos, -1); i; i = i.parent) {
            if (t.indexOf(i.name) > -1) return e(s);
            if (i.type.isTop) break;
          }
          return null;
        };
      }
      function d(t, e) {
        return (s) => {
          for (let e = (0, l.syntaxTree)(s.state).resolveInner(s.pos, -1); e; e = e.parent) {
            if (t.indexOf(e.name) > -1) return null;
            if (e.type.isTop) break;
          }
          return e(s);
        };
      }
      class m {
        constructor(t, e, s, i) {
          this.completion = t;
          this.source = e;
          this.match = s;
          this.score = i;
        }
      }
      function g(t) {
        return t.selection.main.from;
      }
      function k(t, e) {
        var s;
        let { source: i } = t;
        let n = e && i[0] != "^",
          o = i[i.length - 1] != "$";
        if (!n && !o) return t;
        return new RegExp(`${n ? "^" : ""}(?:${i})${o ? "$" : ""}`, (s = t.flags) !== null && s !== void 0 ? s : t.ignoreCase ? "i" : "");
      }
      const b = i.Annotation.define();
      function x(t, e, s, n) {
        let { main: o } = t.selection,
          r = s - o.from,
          l = n - o.from;
        return Object.assign(
          Object.assign(
            {},
            t.changeByRange((a) => {
              if (a != o && s != n && t.sliceDoc(a.from + r, a.from + l) != t.sliceDoc(s, n)) return { range: a };
              return {
                changes: { from: a.from + r, to: n == o.from ? a.to : a.from + l, insert: e },
                range: i.EditorSelection.cursor(a.from + r + e.length),
              };
            })
          ),
          { scrollIntoView: true, userEvent: "input.complete" }
        );
      }
      const v = new WeakMap();
      function w(t) {
        if (!Array.isArray(t)) return t;
        let e = v.get(t);
        if (!e) v.set(t, (e = u(t)));
        return e;
      }
      const y = i.StateEffect.define();
      const S = i.StateEffect.define();
      class C {
        constructor(t) {
          this.pattern = t;
          this.chars = [];
          this.folded = [];
          this.any = [];
          this.precise = [];
          this.byWord = [];
          this.score = 0;
          this.matched = [];
          for (let e = 0; e < t.length; ) {
            let s = (0, i.codePointAt)(t, e),
              n = (0, i.codePointSize)(s);
            this.chars.push(s);
            let o = t.slice(e, e + n),
              r = o.toUpperCase();
            this.folded.push((0, i.codePointAt)(r == o ? o.toLowerCase() : r, 0));
            e += n;
          }
          this.astral = t.length != this.chars.length;
        }
        ret(t, e) {
          this.score = t;
          this.matched = e;
          return this;
        }
        match(t) {
          if (this.pattern.length == 0) return this.ret(-100, []);
          if (t.length < this.pattern.length) return null;
          let { chars: e, folded: s, any: n, precise: o, byWord: r } = this;
          if (e.length == 1) {
            let n = (0, i.codePointAt)(t, 0),
              o = (0, i.codePointSize)(n);
            let r = o == t.length ? 0 : -100;
            if (n == e[0]);
            else if (n == s[0]) r += -200;
            else return null;
            return this.ret(r, [0, o]);
          }
          let l = t.indexOf(this.pattern);
          if (l == 0) return this.ret(t.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
          let a = e.length,
            h = 0;
          if (l < 0) {
            for (let o = 0, r = Math.min(t.length, 200); o < r && h < a; ) {
              let r = (0, i.codePointAt)(t, o);
              if (r == e[h] || r == s[h]) n[h++] = o;
              o += (0, i.codePointSize)(r);
            }
            if (h < a) return null;
          }
          let c = 0;
          let f = 0,
            u = false;
          let p = 0,
            d = -1,
            m = -1;
          let g = /[a-z]/.test(t),
            k = true;
          for (let b = 0, x = Math.min(t.length, 200), v = 0; b < x && f < a; ) {
            let n = (0, i.codePointAt)(t, b);
            if (l < 0) {
              if (c < a && n == e[c]) o[c++] = b;
              if (p < a) {
                if (n == e[p] || n == s[p]) {
                  if (p == 0) d = b;
                  m = b + 1;
                  p++;
                } else {
                  p = 0;
                }
              }
            }
            let h,
              x =
                n < 255
                  ? (n >= 48 && n <= 57) || (n >= 97 && n <= 122)
                    ? 2
                    : n >= 65 && n <= 90
                      ? 1
                      : 0
                  : (h = (0, i.fromCodePoint)(n)) != h.toLowerCase()
                    ? 1
                    : h != h.toUpperCase()
                      ? 2
                      : 0;
            if (!b || (x == 1 && g) || (v == 0 && x != 0)) {
              if (e[f] == n || (s[f] == n && (u = true))) r[f++] = b;
              else if (r.length) k = false;
            }
            v = x;
            b += (0, i.codePointSize)(n);
          }
          if (f == a && r[0] == 0 && k) return this.result(-100 + (u ? -200 : 0), r, t);
          if (p == a && d == 0) return this.ret(-200 - t.length + (m == t.length ? 0 : -100), [0, m]);
          if (l > -1) return this.ret(-700 - t.length, [l, l + this.pattern.length]);
          if (p == a) return this.ret(-200 + -700 - t.length, [d, m]);
          if (f == a) return this.result(-100 + (u ? -200 : 0) + -700 + (k ? 0 : -1100), r, t);
          return e.length == 2 ? null : this.result((n[0] ? -700 : 0) + -200 + -1100, n, t);
        }
        result(t, e, s) {
          let n = [],
            o = 0;
          for (let r of e) {
            let t = r + (this.astral ? (0, i.codePointSize)((0, i.codePointAt)(s, r)) : 1);
            if (o && n[o - 1] == r) n[o - 1] = t;
            else {
              n[o++] = r;
              n[o++] = t;
            }
          }
          return this.ret(t - s.length, n);
        }
      }
      class P {
        constructor(t) {
          this.pattern = t;
          this.matched = [];
          this.score = 0;
          this.folded = t.toLowerCase();
        }
        match(t) {
          if (t.length < this.pattern.length) return null;
          let e = t.slice(0, this.pattern.length);
          let s = e == this.pattern ? 0 : e.toLowerCase() == this.folded ? -200 : null;
          if (s == null) return null;
          this.matched = [0, e.length];
          this.score = s + (t.length == this.pattern.length ? 0 : -100);
          return this;
        }
      }
      const T = i.Facet.define({
        combine(t) {
          return (0, i.combineConfig)(
            t,
            {
              activateOnTyping: true,
              activateOnTypingDelay: 100,
              selectOnOpen: true,
              override: null,
              closeOnBlur: true,
              maxRenderedOptions: 100,
              defaultKeymap: true,
              tooltipClass: () => "",
              optionClass: () => "",
              aboveCursor: false,
              icons: true,
              addToOptions: [],
              positionInfo: I,
              filterStrict: false,
              compareCompletions: (t, e) => t.label.localeCompare(e.label),
              interactionDelay: 75,
              updateSyncTime: 100,
            },
            {
              defaultKeymap: (t, e) => t && e,
              closeOnBlur: (t, e) => t && e,
              icons: (t, e) => t && e,
              tooltipClass: (t, e) => (s) => A(t(s), e(s)),
              optionClass: (t, e) => (s) => A(t(s), e(s)),
              addToOptions: (t, e) => t.concat(e),
              filterStrict: (t, e) => t || e,
            }
          );
        },
      });
      function A(t, e) {
        return t ? (e ? t + " " + e : t) : e;
      }
      function I(t, e, s, i, n, r) {
        let l = t.textDirection == o.Direction.RTL,
          a = l,
          h = false;
        let c = "top",
          f,
          u;
        let p = e.left - n.left,
          d = n.right - e.right;
        let m = i.right - i.left,
          g = i.bottom - i.top;
        if (a && p < Math.min(m, d)) a = false;
        else if (!a && d < Math.min(m, p)) a = true;
        if (m <= (a ? p : d)) {
          f = Math.max(n.top, Math.min(s.top, n.bottom - g)) - e.top;
          u = Math.min(400, a ? p : d);
        } else {
          h = true;
          u = Math.min(400, (l ? e.right : n.right - e.left) - 30);
          let t = n.bottom - e.bottom;
          if (t >= g || t > e.top) {
            f = s.bottom - e.top;
          } else {
            c = "bottom";
            f = e.bottom - s.top;
          }
        }
        let k = (e.bottom - e.top) / r.offsetHeight;
        let b = (e.right - e.left) / r.offsetWidth;
        return {
          style: `${c}: ${f / k}px; max-width: ${u / b}px`,
          class: "cm-completionInfo-" + (h ? (l ? "left-narrow" : "right-narrow") : a ? "left" : "right"),
        };
      }
      function R(t) {
        let e = t.addToOptions.slice();
        if (t.icons)
          e.push({
            render(t) {
              let e = document.createElement("div");
              e.classList.add("cm-completionIcon");
              if (t.type) e.classList.add(...t.type.split(/\s+/g).map((t) => "cm-completionIcon-" + t));
              e.setAttribute("aria-hidden", "true");
              return e;
            },
            position: 20,
          });
        e.push(
          {
            render(t, e, s, i) {
              let n = document.createElement("span");
              n.className = "cm-completionLabel";
              let o = t.displayLabel || t.label,
                r = 0;
              for (let l = 0; l < i.length; ) {
                let t = i[l++],
                  e = i[l++];
                if (t > r) n.appendChild(document.createTextNode(o.slice(r, t)));
                let s = n.appendChild(document.createElement("span"));
                s.appendChild(document.createTextNode(o.slice(t, e)));
                s.className = "cm-completionMatchedText";
                r = e;
              }
              if (r < o.length) n.appendChild(document.createTextNode(o.slice(r)));
              return n;
            },
            position: 50,
          },
          {
            render(t) {
              if (!t.detail) return null;
              let e = document.createElement("span");
              e.className = "cm-completionDetail";
              e.textContent = t.detail;
              return e;
            },
            position: 80,
          }
        );
        return e.sort((t, e) => t.position - e.position).map((t) => t.render);
      }
      function O(t, e, s) {
        if (t <= s) return { from: 0, to: t };
        if (e < 0) e = 0;
        if (e <= t >> 1) {
          let t = Math.floor(e / s);
          return { from: t * s, to: (t + 1) * s };
        }
        let i = Math.floor((t - e) / s);
        return { from: t - (i + 1) * s, to: t - i * s };
      }
      class E {
        constructor(t, e, s) {
          this.view = t;
          this.stateField = e;
          this.applyCompletion = s;
          this.info = null;
          this.infoDestroy = null;
          this.placeInfoReq = { read: () => this.measureInfo(), write: (t) => this.placeInfo(t), key: this };
          this.space = null;
          this.currentClass = "";
          let i = t.state.field(e);
          let { options: n, selected: o } = i.open;
          let r = t.state.facet(T);
          this.optionContent = R(r);
          this.optionClass = r.optionClass;
          this.tooltipClass = r.tooltipClass;
          this.range = O(n.length, o, r.maxRenderedOptions);
          this.dom = document.createElement("div");
          this.dom.className = "cm-tooltip-autocomplete";
          this.updateTooltipClass(t.state);
          this.dom.addEventListener("mousedown", (s) => {
            let { options: i } = t.state.field(e).open;
            for (let e = s.target, n; e && e != this.dom; e = e.parentNode) {
              if (e.nodeName == "LI" && (n = /-(\d+)$/.exec(e.id)) && +n[1] < i.length) {
                this.applyCompletion(t, i[+n[1]]);
                s.preventDefault();
                return;
              }
            }
          });
          this.dom.addEventListener("focusout", (e) => {
            let s = t.state.field(this.stateField, false);
            if (s && s.tooltip && t.state.facet(T).closeOnBlur && e.relatedTarget != t.contentDOM) t.dispatch({ effects: S.of(null) });
          });
          this.showOptions(n, i.id);
        }
        mount() {
          this.updateSel();
        }
        showOptions(t, e) {
          if (this.list) this.list.remove();
          this.list = this.dom.appendChild(this.createListBox(t, e, this.range));
          this.list.addEventListener("scroll", () => {
            if (this.info) this.view.requestMeasure(this.placeInfoReq);
          });
        }
        update(t) {
          var e;
          let s = t.state.field(this.stateField);
          let i = t.startState.field(this.stateField);
          this.updateTooltipClass(t.state);
          if (s != i) {
            let { options: n, selected: o, disabled: r } = s.open;
            if (!i.open || i.open.options != n) {
              this.range = O(n.length, o, t.state.facet(T).maxRenderedOptions);
              this.showOptions(n, s.id);
            }
            this.updateSel();
            if (r != ((e = i.open) === null || e === void 0 ? void 0 : e.disabled))
              this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!r);
          }
        }
        updateTooltipClass(t) {
          let e = this.tooltipClass(t);
          if (e != this.currentClass) {
            for (let t of this.currentClass.split(" ")) if (t) this.dom.classList.remove(t);
            for (let t of e.split(" ")) if (t) this.dom.classList.add(t);
            this.currentClass = e;
          }
        }
        positioned(t) {
          this.space = t;
          if (this.info) this.view.requestMeasure(this.placeInfoReq);
        }
        updateSel() {
          let t = this.view.state.field(this.stateField),
            e = t.open;
          if ((e.selected > -1 && e.selected < this.range.from) || e.selected >= this.range.to) {
            this.range = O(e.options.length, e.selected, this.view.state.facet(T).maxRenderedOptions);
            this.showOptions(e.options, t.id);
          }
          if (this.updateSelectedOption(e.selected)) {
            this.destroyInfo();
            let { completion: s } = e.options[e.selected];
            let { info: i } = s;
            if (!i) return;
            let n = typeof i === "string" ? document.createTextNode(i) : i(s);
            if (!n) return;
            if ("then" in n) {
              n.then((e) => {
                if (e && this.view.state.field(this.stateField, false) == t) this.addInfoPane(e, s);
              }).catch((t) => (0, o.logException)(this.view.state, t, "completion info"));
            } else {
              this.addInfoPane(n, s);
            }
          }
        }
        addInfoPane(t, e) {
          this.destroyInfo();
          let s = (this.info = document.createElement("div"));
          s.className = "cm-tooltip cm-completionInfo";
          if (t.nodeType != null) {
            s.appendChild(t);
            this.infoDestroy = null;
          } else {
            let { dom: e, destroy: i } = t;
            s.appendChild(e);
            this.infoDestroy = i || null;
          }
          this.dom.appendChild(s);
          this.view.requestMeasure(this.placeInfoReq);
        }
        updateSelectedOption(t) {
          let e = null;
          for (let s = this.list.firstChild, i = this.range.from; s; s = s.nextSibling, i++) {
            if (s.nodeName != "LI" || !s.id) {
              i--;
            } else if (i == t) {
              if (!s.hasAttribute("aria-selected")) {
                s.setAttribute("aria-selected", "true");
                e = s;
              }
            } else {
              if (s.hasAttribute("aria-selected")) s.removeAttribute("aria-selected");
            }
          }
          if (e) N(this.list, e);
          return e;
        }
        measureInfo() {
          let t = this.dom.querySelector("[aria-selected]");
          if (!t || !this.info) return null;
          let e = this.dom.getBoundingClientRect();
          let s = this.info.getBoundingClientRect();
          let i = t.getBoundingClientRect();
          let n = this.space;
          if (!n) {
            let t = this.dom.ownerDocument.defaultView || window;
            n = { left: 0, top: 0, right: t.innerWidth, bottom: t.innerHeight };
          }
          if (i.top > Math.min(n.bottom, e.bottom) - 10 || i.bottom < Math.max(n.top, e.top) + 10) return null;
          return this.view.state.facet(T).positionInfo(this.view, e, i, s, n, this.dom);
        }
        placeInfo(t) {
          if (this.info) {
            if (t) {
              if (t.style) this.info.style.cssText = t.style;
              this.info.className = "cm-tooltip cm-completionInfo " + (t.class || "");
            } else {
              this.info.style.cssText = "top: -1e6px";
            }
          }
        }
        createListBox(t, e, s) {
          const i = document.createElement("ul");
          i.id = e;
          i.setAttribute("role", "listbox");
          i.setAttribute("aria-expanded", "true");
          i.setAttribute("aria-label", this.view.state.phrase("Completions"));
          let n = null;
          for (let o = s.from; o < s.to; o++) {
            let { completion: r, match: l } = t[o],
              { section: a } = r;
            if (a) {
              let t = typeof a == "string" ? a : a.name;
              if (t != n && (o > s.from || s.from == 0)) {
                n = t;
                if (typeof a != "string" && a.header) {
                  i.appendChild(a.header(a));
                } else {
                  let e = i.appendChild(document.createElement("completion-section"));
                  e.textContent = t;
                }
              }
            }
            const h = i.appendChild(document.createElement("li"));
            h.id = e + "-" + o;
            h.setAttribute("role", "option");
            let c = this.optionClass(r);
            if (c) h.className = c;
            for (let t of this.optionContent) {
              let e = t(r, this.view.state, this.view, l);
              if (e) h.appendChild(e);
            }
          }
          if (s.from) i.classList.add("cm-completionListIncompleteTop");
          if (s.to < t.length) i.classList.add("cm-completionListIncompleteBottom");
          return i;
        }
        destroyInfo() {
          if (this.info) {
            if (this.infoDestroy) this.infoDestroy();
            this.info.remove();
            this.info = null;
          }
        }
        destroy() {
          this.destroyInfo();
        }
      }
      function D(t, e) {
        return (s) => new E(s, t, e);
      }
      function N(t, e) {
        let s = t.getBoundingClientRect();
        let i = e.getBoundingClientRect();
        let n = s.height / t.offsetHeight;
        if (i.top < s.top) t.scrollTop -= (s.top - i.top) / n;
        else if (i.bottom > s.bottom) t.scrollTop += (i.bottom - s.bottom) / n;
      }
      function L(t) {
        return (t.boost || 0) * 100 + (t.apply ? 10 : 0) + (t.info ? 5 : 0) + (t.type ? 1 : 0);
      }
      function B(t, e) {
        let s = [];
        let i = null;
        let n = (t) => {
          s.push(t);
          let { section: e } = t.completion;
          if (e) {
            if (!i) i = [];
            let t = typeof e == "string" ? e : e.name;
            if (!i.some((e) => e.name == t)) i.push(typeof e == "string" ? { name: t } : e);
          }
        };
        let o = e.facet(T);
        for (let h of t)
          if (h.hasResult()) {
            let t = h.result.getMatch;
            if (h.result.filter === false) {
              for (let e of h.result.options) {
                n(new m(e, h.source, t ? t(e) : [], 1e9 - s.length));
              }
            } else {
              let s = e.sliceDoc(h.from, h.to),
                i;
              let r = o.filterStrict ? new P(s) : new C(s);
              for (let e of h.result.options)
                if ((i = r.match(e.label))) {
                  let s = !e.displayLabel ? i.matched : t ? t(e, i.matched) : [];
                  n(new m(e, h.source, s, i.score + (e.boost || 0)));
                }
            }
          }
        if (i) {
          let t = Object.create(null),
            e = 0;
          let n = (t, e) => {
            var s, i;
            return (
              ((s = t.rank) !== null && s !== void 0 ? s : 1e9) - ((i = e.rank) !== null && i !== void 0 ? i : 1e9) || (t.name < e.name ? -1 : 1)
            );
          };
          for (let s of i.sort(n)) {
            e -= 1e5;
            t[s.name] = e;
          }
          for (let i of s) {
            let { section: e } = i.completion;
            if (e) i.score += t[typeof e == "string" ? e : e.name];
          }
        }
        let r = [],
          l = null;
        let a = o.compareCompletions;
        for (let h of s.sort((t, e) => e.score - t.score || a(t.completion, e.completion))) {
          let t = h.completion;
          if (
            !l ||
            l.label != t.label ||
            l.detail != t.detail ||
            (l.type != null && t.type != null && l.type != t.type) ||
            l.apply != t.apply ||
            l.boost != t.boost
          )
            r.push(h);
          else if (L(h.completion) > L(l)) r[r.length - 1] = h;
          l = h.completion;
        }
        return r;
      }
      class M {
        constructor(t, e, s, i, n, o) {
          this.options = t;
          this.attrs = e;
          this.tooltip = s;
          this.timestamp = i;
          this.selected = n;
          this.disabled = o;
        }
        setSelected(t, e) {
          return t == this.selected || t >= this.options.length ? this : new M(this.options, j(e, t), this.tooltip, this.timestamp, t, this.disabled);
        }
        static build(t, e, s, i, n) {
          let o = B(t, e);
          if (!o.length) {
            return i && t.some((t) => t.state == 1) ? new M(i.options, i.attrs, i.tooltip, i.timestamp, i.selected, true) : null;
          }
          let r = e.facet(T).selectOnOpen ? 0 : -1;
          if (i && i.selected != r && i.selected != -1) {
            let t = i.options[i.selected].completion;
            for (let e = 0; e < o.length; e++)
              if (o[e].completion == t) {
                r = e;
                break;
              }
          }
          return new M(
            o,
            j(s, r),
            { pos: t.reduce((t, e) => (e.hasResult() ? Math.min(t, e.from) : t), 1e8), create: X, above: n.aboveCursor },
            i ? i.timestamp : Date.now(),
            r,
            false
          );
        }
        map(t) {
          return new M(
            this.options,
            this.attrs,
            Object.assign(Object.assign({}, this.tooltip), { pos: t.mapPos(this.tooltip.pos) }),
            this.timestamp,
            this.selected,
            this.disabled
          );
        }
      }
      class z {
        constructor(t, e, s) {
          this.active = t;
          this.id = e;
          this.open = s;
        }
        static start() {
          return new z(U, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
        }
        update(t) {
          let { state: e } = t,
            s = e.facet(T);
          let i = s.override || e.languageDataAt("autocomplete", g(e)).map(w);
          let n = i.map((e) => {
            let i = this.active.find((t) => t.source == e) || new V(e, this.active.some((t) => t.state != 0) ? 1 : 0);
            return i.update(t, s);
          });
          if (n.length == this.active.length && n.every((t, e) => t == this.active[e])) n = this.active;
          let o = this.open;
          if (o && t.docChanged) o = o.map(t.changes);
          if (t.selection || n.some((e) => e.hasResult() && t.changes.touchesRange(e.from, e.to)) || !F(n, this.active))
            o = M.build(n, e, this.id, o, s);
          else if (o && o.disabled && !n.some((t) => t.state == 1)) o = null;
          if (!o && n.every((t) => t.state != 1) && n.some((t) => t.hasResult())) n = n.map((t) => (t.hasResult() ? new V(t.source, 0) : t));
          for (let r of t.effects) if (r.is(K)) o = o && o.setSelected(r.value, this.id);
          return n == this.active && o == this.open ? this : new z(n, this.id, o);
        }
        get tooltip() {
          return this.open ? this.open.tooltip : null;
        }
        get attrs() {
          return this.open ? this.open.attrs : $;
        }
      }
      function F(t, e) {
        if (t == e) return true;
        for (let s = 0, i = 0; ; ) {
          while (s < t.length && !t[s].hasResult) s++;
          while (i < e.length && !e[i].hasResult) i++;
          let n = s == t.length,
            o = i == e.length;
          if (n || o) return n == o;
          if (t[s++].result != e[i++].result) return false;
        }
      }
      const $ = { "aria-autocomplete": "list" };
      function j(t, e) {
        let s = { "aria-autocomplete": "list", "aria-haspopup": "listbox", "aria-controls": t };
        if (e > -1) s["aria-activedescendant"] = t + "-" + e;
        return s;
      }
      const U = [];
      function W(t) {
        return t.isUserEvent("input.type") ? "input" : t.isUserEvent("delete.backward") ? "delete" : null;
      }
      class V {
        constructor(t, e, s = -1) {
          this.source = t;
          this.state = e;
          this.explicitPos = s;
        }
        hasResult() {
          return false;
        }
        update(t, e) {
          let s = W(t),
            i = this;
          if (s) i = i.handleUserEvent(t, s, e);
          else if (t.docChanged) i = i.handleChange(t);
          else if (t.selection && i.state != 0) i = new V(i.source, 0);
          for (let n of t.effects) {
            if (n.is(y)) i = new V(i.source, 1, n.value ? g(t.state) : -1);
            else if (n.is(S)) i = new V(i.source, 0);
            else if (n.is(G)) for (let t of n.value) if (t.source == i.source) i = t;
          }
          return i;
        }
        handleUserEvent(t, e, s) {
          return e == "delete" || !s.activateOnTyping ? this.map(t.changes) : new V(this.source, 1);
        }
        handleChange(t) {
          return t.changes.touchesRange(g(t.startState)) ? new V(this.source, 0) : this.map(t.changes);
        }
        map(t) {
          return t.empty || this.explicitPos < 0 ? this : new V(this.source, this.state, t.mapPos(this.explicitPos));
        }
      }
      class q extends V {
        constructor(t, e, s, i, n) {
          super(t, 2, e);
          this.result = s;
          this.from = i;
          this.to = n;
        }
        hasResult() {
          return true;
        }
        handleUserEvent(t, e, s) {
          var i;
          let n = this.result;
          if (n.map && !t.changes.empty) n = n.map(n, t.changes);
          let o = t.changes.mapPos(this.from),
            r = t.changes.mapPos(this.to, 1);
          let l = g(t.state);
          if ((this.explicitPos < 0 ? l <= o : l < this.from) || l > r || !n || (e == "delete" && g(t.startState) == this.from))
            return new V(this.source, e == "input" && s.activateOnTyping ? 1 : 0);
          let a = this.explicitPos < 0 ? -1 : t.changes.mapPos(this.explicitPos);
          if (H(n.validFor, t.state, o, r)) return new q(this.source, a, n, o, r);
          if (n.update && (n = n.update(n, o, r, new h(t.state, l, a >= 0))))
            return new q(this.source, a, n, n.from, (i = n.to) !== null && i !== void 0 ? i : g(t.state));
          return new V(this.source, 1, a);
        }
        handleChange(t) {
          return t.changes.touchesRange(this.from, this.to) ? new V(this.source, 0) : this.map(t.changes);
        }
        map(t) {
          if (t.empty) return this;
          let e = this.result.map ? this.result.map(this.result, t) : this.result;
          if (!e) return new V(this.source, 0);
          return new q(this.source, this.explicitPos < 0 ? -1 : t.mapPos(this.explicitPos), this.result, t.mapPos(this.from), t.mapPos(this.to, 1));
        }
      }
      function H(t, e, s, i) {
        if (!t) return false;
        let n = e.sliceDoc(s, i);
        return typeof t == "function" ? t(n, s, i, e) : k(t, true).test(n);
      }
      const G = i.StateEffect.define({
        map(t, e) {
          return t.map((t) => t.map(e));
        },
      });
      const K = i.StateEffect.define();
      const _ = i.StateField.define({
        create() {
          return z.start();
        },
        update(t, e) {
          return t.update(e);
        },
        provide: (t) => [o.showTooltip.from(t, (t) => t.tooltip), o.EditorView.contentAttributes.from(t, (t) => t.attrs)],
      });
      function Q(t, e) {
        const s = e.completion.apply || e.completion.label;
        let i = t.state.field(_).active.find((t) => t.source == e.source);
        if (!(i instanceof q)) return false;
        if (typeof s == "string") t.dispatch(Object.assign(Object.assign({}, x(t.state, s, i.from, i.to)), { annotations: b.of(e.completion) }));
        else s(t, e.completion, i.from, i.to);
        return true;
      }
      const X = D(_, Q);
      function J(t, e = "option") {
        return (s) => {
          let i = s.state.field(_, false);
          if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < s.state.facet(T).interactionDelay) return false;
          let n = 1,
            r;
          if (e == "page" && (r = (0, o.getTooltip)(s, i.open.tooltip)))
            n = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1);
          let { length: l } = i.open.options;
          let a = i.open.selected > -1 ? i.open.selected + n * (t ? 1 : -1) : t ? 0 : l - 1;
          if (a < 0) a = e == "page" ? 0 : l - 1;
          else if (a >= l) a = e == "page" ? l - 1 : 0;
          s.dispatch({ effects: K.of(a) });
          return true;
        };
      }
      const Y = (t) => {
        let e = t.state.field(_, false);
        if (
          t.state.readOnly ||
          !e ||
          !e.open ||
          e.open.selected < 0 ||
          e.open.disabled ||
          Date.now() - e.open.timestamp < t.state.facet(T).interactionDelay
        )
          return false;
        return Q(t, e.open.options[e.open.selected]);
      };
      const Z = (t) => {
        let e = t.state.field(_, false);
        if (!e) return false;
        t.dispatch({ effects: y.of(true) });
        return true;
      };
      const tt = (t) => {
        let e = t.state.field(_, false);
        if (!e || !e.active.some((t) => t.state != 0)) return false;
        t.dispatch({ effects: S.of(null) });
        return true;
      };
      class et {
        constructor(t, e) {
          this.active = t;
          this.context = e;
          this.time = Date.now();
          this.updates = [];
          this.done = undefined;
        }
      }
      const st = 50,
        it = 1e3;
      const nt = o.ViewPlugin.fromClass(
        class {
          constructor(t) {
            this.view = t;
            this.debounceUpdate = -1;
            this.running = [];
            this.debounceAccept = -1;
            this.pendingStart = false;
            this.composing = 0;
            for (let e of t.state.field(_).active) if (e.state == 1) this.startQuery(e);
          }
          update(t) {
            let e = t.state.field(_);
            if (!t.selectionSet && !t.docChanged && t.startState.field(_) == e) return;
            let s = t.transactions.some((t) => (t.selection || t.docChanged) && !W(t));
            for (let r = 0; r < this.running.length; r++) {
              let e = this.running[r];
              if (s || (e.updates.length + t.transactions.length > st && Date.now() - e.time > it)) {
                for (let t of e.context.abortListeners) {
                  try {
                    t();
                  } catch (n) {
                    (0, o.logException)(this.view.state, n);
                  }
                }
                e.context.abortListeners = null;
                this.running.splice(r--, 1);
              } else {
                e.updates.push(...t.transactions);
              }
            }
            if (this.debounceUpdate > -1) clearTimeout(this.debounceUpdate);
            if (t.transactions.some((t) => t.effects.some((t) => t.is(y)))) this.pendingStart = true;
            let i = this.pendingStart ? 50 : t.state.facet(T).activateOnTypingDelay;
            this.debounceUpdate = e.active.some((t) => t.state == 1 && !this.running.some((e) => e.active.source == t.source))
              ? setTimeout(() => this.startUpdate(), i)
              : -1;
            if (this.composing != 0)
              for (let o of t.transactions) {
                if (W(o) == "input") this.composing = 2;
                else if (this.composing == 2 && o.selection) this.composing = 3;
              }
          }
          startUpdate() {
            this.debounceUpdate = -1;
            this.pendingStart = false;
            let { state: t } = this.view,
              e = t.field(_);
            for (let s of e.active) {
              if (s.state == 1 && !this.running.some((t) => t.active.source == s.source)) this.startQuery(s);
            }
          }
          startQuery(t) {
            let { state: e } = this.view,
              s = g(e);
            let i = new h(e, s, t.explicitPos == s);
            let n = new et(t, i);
            this.running.push(n);
            Promise.resolve(t.source(i)).then(
              (t) => {
                if (!n.context.aborted) {
                  n.done = t || null;
                  this.scheduleAccept();
                }
              },
              (t) => {
                this.view.dispatch({ effects: S.of(null) });
                (0, o.logException)(this.view.state, t);
              }
            );
          }
          scheduleAccept() {
            if (this.running.every((t) => t.done !== undefined)) this.accept();
            else if (this.debounceAccept < 0) this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(T).updateSyncTime);
          }
          accept() {
            var t;
            if (this.debounceAccept > -1) clearTimeout(this.debounceAccept);
            this.debounceAccept = -1;
            let e = [];
            let s = this.view.state.facet(T);
            for (let i = 0; i < this.running.length; i++) {
              let n = this.running[i];
              if (n.done === undefined) continue;
              this.running.splice(i--, 1);
              if (n.done) {
                let i = new q(
                  n.active.source,
                  n.active.explicitPos,
                  n.done,
                  n.done.from,
                  (t = n.done.to) !== null && t !== void 0 ? t : g(n.updates.length ? n.updates[0].startState : this.view.state)
                );
                for (let t of n.updates) i = i.update(t, s);
                if (i.hasResult()) {
                  e.push(i);
                  continue;
                }
              }
              let o = this.view.state.field(_).active.find((t) => t.source == n.active.source);
              if (o && o.state == 1) {
                if (n.done == null) {
                  let t = new V(n.active.source, 0);
                  for (let e of n.updates) t = t.update(e, s);
                  if (t.state != 1) e.push(t);
                } else {
                  this.startQuery(o);
                }
              }
            }
            if (e.length) this.view.dispatch({ effects: G.of(e) });
          }
        },
        {
          eventHandlers: {
            blur(t) {
              let e = this.view.state.field(_, false);
              if (e && e.tooltip && this.view.state.facet(T).closeOnBlur) {
                let s = e.open && (0, o.getTooltip)(this.view, e.open.tooltip);
                if (!s || !s.dom.contains(t.relatedTarget)) setTimeout(() => this.view.dispatch({ effects: S.of(null) }), 10);
              }
            },
            compositionstart() {
              this.composing = 1;
            },
            compositionend() {
              if (this.composing == 3) {
                setTimeout(() => this.view.dispatch({ effects: y.of(false) }), 20);
              }
              this.composing = 0;
            },
          },
        }
      );
      const ot = typeof navigator == "object" && /Win/.test(navigator.platform);
      const rt = i.Prec.highest(
        o.EditorView.domEventHandlers({
          keydown(t, e) {
            let s = e.state.field(_, false);
            if (!s || !s.open || s.open.disabled || s.open.selected < 0 || t.key.length > 1 || (t.ctrlKey && !(ot && t.altKey)) || t.metaKey)
              return false;
            let i = s.open.options[s.open.selected];
            let n = s.active.find((t) => t.source == i.source);
            let o = i.completion.commitCharacters || n.result.commitCharacters;
            if (o && o.indexOf(t.key) > -1) Q(e, i);
            return false;
          },
        })
      );
      const lt = o.EditorView.baseTheme({
        ".cm-tooltip.cm-tooltip-autocomplete": {
          "& > ul": {
            fontFamily: "monospace",
            whiteSpace: "nowrap",
            overflow: "hidden auto",
            maxWidth_fallback: "700px",
            maxWidth: "min(700px, 95vw)",
            minWidth: "250px",
            maxHeight: "10em",
            height: "100%",
            listStyle: "none",
            margin: 0,
            padding: 0,
            "& > li, & > completion-section": { padding: "1px 3px", lineHeight: 1.2 },
            "& > li": { overflowX: "hidden", textOverflow: "ellipsis", cursor: "pointer" },
            "& > completion-section": { display: "list-item", borderBottom: "1px solid silver", paddingLeft: "0.5em", opacity: 0.7 },
          },
        },
        "&light .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#17c", color: "white" },
        "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#777" },
        "&dark .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#347", color: "white" },
        "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#444" },
        ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
          content: '"···"',
          opacity: 0.5,
          display: "block",
          textAlign: "center",
        },
        ".cm-tooltip.cm-completionInfo": {
          position: "absolute",
          padding: "3px 9px",
          width: "max-content",
          maxWidth: `${400}px`,
          boxSizing: "border-box",
        },
        ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
        ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
        ".cm-completionInfo.cm-completionInfo-left-narrow": { right: `${30}px` },
        ".cm-completionInfo.cm-completionInfo-right-narrow": { left: `${30}px` },
        "&light .cm-snippetField": { backgroundColor: "#00000022" },
        "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
        ".cm-snippetFieldPosition": {
          verticalAlign: "text-top",
          width: 0,
          height: "1.15em",
          display: "inline-block",
          margin: "0 -0.7px -.7em",
          borderLeft: "1.4px dotted #888",
        },
        ".cm-completionMatchedText": { textDecoration: "underline" },
        ".cm-completionDetail": { marginLeft: "0.5em", fontStyle: "italic" },
        ".cm-completionIcon": {
          fontSize: "90%",
          width: ".8em",
          display: "inline-block",
          textAlign: "center",
          paddingRight: ".6em",
          opacity: "0.6",
          boxSizing: "content-box",
        },
        ".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: "'ƒ'" } },
        ".cm-completionIcon-class": { "&:after": { content: "'○'" } },
        ".cm-completionIcon-interface": { "&:after": { content: "'◌'" } },
        ".cm-completionIcon-variable": { "&:after": { content: "'𝑥'" } },
        ".cm-completionIcon-constant": { "&:after": { content: "'𝐶'" } },
        ".cm-completionIcon-type": { "&:after": { content: "'𝑡'" } },
        ".cm-completionIcon-enum": { "&:after": { content: "'∪'" } },
        ".cm-completionIcon-property": { "&:after": { content: "'□'" } },
        ".cm-completionIcon-keyword": { "&:after": { content: "'🔑︎'" } },
        ".cm-completionIcon-namespace": { "&:after": { content: "'▢'" } },
        ".cm-completionIcon-text": { "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" } },
      });
      class at {
        constructor(t, e, s, i) {
          this.field = t;
          this.line = e;
          this.from = s;
          this.to = i;
        }
      }
      class ht {
        constructor(t, e, s) {
          this.field = t;
          this.from = e;
          this.to = s;
        }
        map(t) {
          let e = t.mapPos(this.from, -1, i.MapMode.TrackDel);
          let s = t.mapPos(this.to, 1, i.MapMode.TrackDel);
          return e == null || s == null ? null : new ht(this.field, e, s);
        }
      }
      class ct {
        constructor(t, e) {
          this.lines = t;
          this.fieldPositions = e;
        }
        instantiate(t, e) {
          let s = [],
            i = [e];
          let n = t.doc.lineAt(e),
            o = /^\s*/.exec(n.text)[0];
          for (let a of this.lines) {
            if (s.length) {
              let s = o,
                n = /^\t*/.exec(a)[0].length;
              for (let e = 0; e < n; e++) s += t.facet(l.indentUnit);
              i.push(e + s.length - n);
              a = s + a.slice(n);
            }
            s.push(a);
            e += a.length + 1;
          }
          let r = this.fieldPositions.map((t) => new ht(t.field, i[t.line] + t.from, i[t.line] + t.to));
          return { text: s, ranges: r };
        }
        static parse(t) {
          let e = [];
          let s = [],
            i = [],
            n;
          for (let o of t.split(/\r\n?|\n/)) {
            while ((n = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(o))) {
              let t = n[1] ? +n[1] : null,
                r = n[2] || n[3] || "",
                l = -1;
              for (let s = 0; s < e.length; s++) {
                if (t != null ? e[s].seq == t : r ? e[s].name == r : false) l = s;
              }
              if (l < 0) {
                let s = 0;
                while (s < e.length && (t == null || (e[s].seq != null && e[s].seq < t))) s++;
                e.splice(s, 0, { seq: t, name: r });
                l = s;
                for (let t of i) if (t.field >= l) t.field++;
              }
              i.push(new at(l, s.length, n.index, n.index + r.length));
              o = o.slice(0, n.index) + r + o.slice(n.index + n[0].length);
            }
            for (let t; (t = /\\([{}])/.exec(o)); ) {
              o = o.slice(0, t.index) + t[1] + o.slice(t.index + t[0].length);
              for (let e of i)
                if (e.line == s.length && e.from > t.index) {
                  e.from--;
                  e.to--;
                }
            }
            s.push(o);
          }
          return new ct(s, i);
        }
      }
      let ft = o.Decoration.widget({
        widget: new (class extends o.WidgetType {
          toDOM() {
            let t = document.createElement("span");
            t.className = "cm-snippetFieldPosition";
            return t;
          }
          ignoreEvent() {
            return false;
          }
        })(),
      });
      let ut = o.Decoration.mark({ class: "cm-snippetField" });
      class pt {
        constructor(t, e) {
          this.ranges = t;
          this.active = e;
          this.deco = o.Decoration.set(t.map((t) => (t.from == t.to ? ft : ut).range(t.from, t.to)));
        }
        map(t) {
          let e = [];
          for (let s of this.ranges) {
            let i = s.map(t);
            if (!i) return null;
            e.push(i);
          }
          return new pt(e, this.active);
        }
        selectionInsideField(t) {
          return t.ranges.every((t) => this.ranges.some((e) => e.field == this.active && e.from <= t.from && e.to >= t.to));
        }
      }
      const dt = i.StateEffect.define({
        map(t, e) {
          return t && t.map(e);
        },
      });
      const mt = i.StateEffect.define();
      const gt = i.StateField.define({
        create() {
          return null;
        },
        update(t, e) {
          for (let s of e.effects) {
            if (s.is(dt)) return s.value;
            if (s.is(mt) && t) return new pt(t.ranges, s.value);
          }
          if (t && e.docChanged) t = t.map(e.changes);
          if (t && e.selection && !t.selectionInsideField(e.selection)) t = null;
          return t;
        },
        provide: (t) => o.EditorView.decorations.from(t, (t) => (t ? t.deco : o.Decoration.none)),
      });
      function kt(t, e) {
        return i.EditorSelection.create(t.filter((t) => t.field == e).map((t) => i.EditorSelection.range(t.from, t.to)));
      }
      function bt(t) {
        let e = ct.parse(t);
        return (t, s, n, o) => {
          let { text: r, ranges: l } = e.instantiate(t.state, n);
          let a = {
            changes: { from: n, to: o, insert: i.Text.of(r) },
            scrollIntoView: true,
            annotations: s ? [b.of(s), i.Transaction.userEvent.of("input.complete")] : undefined,
          };
          if (l.length) a.selection = kt(l, 0);
          if (l.some((t) => t.field > 0)) {
            let e = new pt(l, 0);
            let s = (a.effects = [dt.of(e)]);
            if (t.state.field(gt, false) === undefined) s.push(i.StateEffect.appendConfig.of([gt, At, Rt, lt]));
          }
          t.dispatch(t.state.update(a));
        };
      }
      function xt(t) {
        return ({ state: e, dispatch: s }) => {
          let i = e.field(gt, false);
          if (!i || (t < 0 && i.active == 0)) return false;
          let n = i.active + t,
            o = t > 0 && !i.ranges.some((e) => e.field == n + t);
          s(e.update({ selection: kt(i.ranges, n), effects: dt.of(o ? null : new pt(i.ranges, n)), scrollIntoView: true }));
          return true;
        };
      }
      const vt = ({ state: t, dispatch: e }) => {
        let s = t.field(gt, false);
        if (!s) return false;
        e(t.update({ effects: dt.of(null) }));
        return true;
      };
      const wt = xt(1);
      const yt = xt(-1);
      function St(t) {
        let e = t.field(gt, false);
        return !!(e && e.ranges.some((t) => t.field == e.active + 1));
      }
      function Ct(t) {
        let e = t.field(gt, false);
        return !!(e && e.active > 0);
      }
      const Pt = [
        { key: "Tab", run: wt, shift: yt },
        { key: "Escape", run: vt },
      ];
      const Tt = i.Facet.define({
        combine(t) {
          return t.length ? t[0] : Pt;
        },
      });
      const At = i.Prec.highest(o.keymap.compute([Tt], (t) => t.facet(Tt)));
      function It(t, e) {
        return Object.assign(Object.assign({}, e), { apply: bt(t) });
      }
      const Rt = o.EditorView.domEventHandlers({
        mousedown(t, e) {
          let s = e.state.field(gt, false),
            i;
          if (!s || (i = e.posAtCoords({ x: t.clientX, y: t.clientY })) == null) return false;
          let n = s.ranges.find((t) => t.from <= i && t.to >= i);
          if (!n || n.field == s.active) return false;
          e.dispatch({
            selection: kt(s.ranges, n.field),
            effects: dt.of(s.ranges.some((t) => t.field > n.field) ? new pt(s.ranges, n.field) : null),
            scrollIntoView: true,
          });
          return true;
        },
      });
      function Ot(t) {
        let e = t.replace(/[\]\-\\]/g, "\\$&");
        try {
          return new RegExp(`[\\p{Alphabetic}\\p{Number}_${e}]+`, "ug");
        } catch (s) {
          return new RegExp(`[w${e}]`, "g");
        }
      }
      function Et(t, e) {
        return new RegExp(e(t.source), t.unicode ? "u" : "");
      }
      const Dt = null && Object.create(null);
      function Nt(t) {
        return Dt[t] || (Dt[t] = new WeakMap());
      }
      function Lt(t, e, s, i, n) {
        for (let o = t.iterLines(), r = 0; !o.next().done; ) {
          let { value: t } = o,
            l;
          e.lastIndex = 0;
          while ((l = e.exec(t))) {
            if (!i[l[0]] && r + l.index != n) {
              s.push({ type: "text", label: l[0] });
              i[l[0]] = true;
              if (s.length >= 2e3) return;
            }
          }
          r += t.length + 1;
        }
      }
      function Bt(t, e, s, i, n) {
        let o = t.length >= 1e3;
        let r = o && e.get(t);
        if (r) return r;
        let l = [],
          a = Object.create(null);
        if (t.children) {
          let o = 0;
          for (let r of t.children) {
            if (r.length >= 1e3) {
              for (let t of Bt(r, e, s, i - o, n - o)) {
                if (!a[t.label]) {
                  a[t.label] = true;
                  l.push(t);
                }
              }
            } else {
              Lt(r, s, l, a, n - o);
            }
            o += r.length + 1;
          }
        } else {
          Lt(t, s, l, a, n);
        }
        if (o && l.length < 2e3) e.set(t, l);
        return l;
      }
      const Mt = (t) => {
        let e = t.state.languageDataAt("wordChars", t.pos).join("");
        let s = Ot(e);
        let i = t.matchBefore(Et(s, (t) => t + "$"));
        if (!i && !t.explicit) return null;
        let n = i ? i.from : t.pos;
        let o = Bt(t.state.doc, Nt(e), s, 5e4, n);
        return { from: n, options: o, validFor: Et(s, (t) => "^" + t) };
      };
      const zt = { brackets: ["(", "[", "{", "'", '"'], before: ")]}:;>", stringPrefixes: [] };
      const Ft = i.StateEffect.define({
        map(t, e) {
          let s = e.mapPos(t, -1, i.MapMode.TrackAfter);
          return s == null ? undefined : s;
        },
      });
      const $t = new (class extends i.RangeValue {})();
      $t.startSide = 1;
      $t.endSide = -1;
      const jt = i.StateField.define({
        create() {
          return i.RangeSet.empty;
        },
        update(t, e) {
          t = t.map(e.changes);
          if (e.selection) {
            let s = e.state.doc.lineAt(e.selection.main.head);
            t = t.update({ filter: (t) => t >= s.from && t <= s.to });
          }
          for (let s of e.effects) if (s.is(Ft)) t = t.update({ add: [$t.range(s.value, s.value + 1)] });
          return t;
        },
      });
      function Ut() {
        return [Gt, jt];
      }
      const Wt = "()[]{}<>";
      function Vt(t) {
        for (let e = 0; e < Wt.length; e += 2) if (Wt.charCodeAt(e) == t) return Wt.charAt(e + 1);
        return (0, i.fromCodePoint)(t < 128 ? t : t + 1);
      }
      function qt(t, e) {
        return t.languageDataAt("closeBrackets", e)[0] || zt;
      }
      const Ht = typeof navigator == "object" && /Android\b/.test(navigator.userAgent);
      const Gt = o.EditorView.inputHandler.of((t, e, s, n) => {
        if ((Ht ? t.composing : t.compositionStarted) || t.state.readOnly) return false;
        let o = t.state.selection.main;
        if (n.length > 2 || (n.length == 2 && (0, i.codePointSize)((0, i.codePointAt)(n, 0)) == 1) || e != o.from || s != o.to) return false;
        let r = Qt(t.state, n);
        if (!r) return false;
        t.dispatch(r);
        return true;
      });
      const Kt = ({ state: t, dispatch: e }) => {
        if (t.readOnly) return false;
        let s = qt(t, t.selection.main.head);
        let n = s.brackets || zt.brackets;
        let o = null,
          r = t.changeByRange((e) => {
            if (e.empty) {
              let s = Yt(t.doc, e.head);
              for (let o of n) {
                if (o == s && Jt(t.doc, e.head) == Vt((0, i.codePointAt)(o, 0)))
                  return { changes: { from: e.head - o.length, to: e.head + o.length }, range: i.EditorSelection.cursor(e.head - o.length) };
              }
            }
            return { range: (o = e) };
          });
        if (!o) e(t.update(r, { scrollIntoView: true, userEvent: "delete.backward" }));
        return !o;
      };
      const _t = [{ key: "Backspace", run: Kt }];
      function Qt(t, e) {
        let s = qt(t, t.selection.main.head);
        let n = s.brackets || zt.brackets;
        for (let o of n) {
          let r = Vt((0, i.codePointAt)(o, 0));
          if (e == o) return r == o ? ee(t, o, n.indexOf(o + o + o) > -1, s) : Zt(t, o, r, s.before || zt.before);
          if (e == r && Xt(t, t.selection.main.from)) return te(t, o, r);
        }
        return null;
      }
      function Xt(t, e) {
        let s = false;
        t.field(jt).between(0, t.doc.length, (t) => {
          if (t == e) s = true;
        });
        return s;
      }
      function Jt(t, e) {
        let s = t.sliceString(e, e + 2);
        return s.slice(0, (0, i.codePointSize)((0, i.codePointAt)(s, 0)));
      }
      function Yt(t, e) {
        let s = t.sliceString(e - 2, e);
        return (0, i.codePointSize)((0, i.codePointAt)(s, 0)) == s.length ? s : s.slice(1);
      }
      function Zt(t, e, s, n) {
        let o = null,
          r = t.changeByRange((r) => {
            if (!r.empty)
              return {
                changes: [
                  { insert: e, from: r.from },
                  { insert: s, from: r.to },
                ],
                effects: Ft.of(r.to + e.length),
                range: i.EditorSelection.range(r.anchor + e.length, r.head + e.length),
              };
            let l = Jt(t.doc, r.head);
            if (!l || /\s/.test(l) || n.indexOf(l) > -1)
              return {
                changes: { insert: e + s, from: r.head },
                effects: Ft.of(r.head + e.length),
                range: i.EditorSelection.cursor(r.head + e.length),
              };
            return { range: (o = r) };
          });
        return o ? null : t.update(r, { scrollIntoView: true, userEvent: "input.type" });
      }
      function te(t, e, s) {
        let n = null,
          o = t.changeByRange((e) => {
            if (e.empty && Jt(t.doc, e.head) == s)
              return { changes: { from: e.head, to: e.head + s.length, insert: s }, range: i.EditorSelection.cursor(e.head + s.length) };
            return (n = { range: e });
          });
        return n ? null : t.update(o, { scrollIntoView: true, userEvent: "input.type" });
      }
      function ee(t, e, s, n) {
        let o = n.stringPrefixes || zt.stringPrefixes;
        let r = null,
          l = t.changeByRange((n) => {
            if (!n.empty)
              return {
                changes: [
                  { insert: e, from: n.from },
                  { insert: e, from: n.to },
                ],
                effects: Ft.of(n.to + e.length),
                range: i.EditorSelection.range(n.anchor + e.length, n.head + e.length),
              };
            let l = n.head,
              a = Jt(t.doc, l),
              h;
            if (a == e) {
              if (se(t, l)) {
                return { changes: { insert: e + e, from: l }, effects: Ft.of(l + e.length), range: i.EditorSelection.cursor(l + e.length) };
              } else if (Xt(t, l)) {
                let n = s && t.sliceDoc(l, l + e.length * 3) == e + e + e;
                let o = n ? e + e + e : e;
                return { changes: { from: l, to: l + o.length, insert: o }, range: i.EditorSelection.cursor(l + o.length) };
              }
            } else if (s && t.sliceDoc(l - 2 * e.length, l) == e + e && (h = ne(t, l - 2 * e.length, o)) > -1 && se(t, h)) {
              return { changes: { insert: e + e + e + e, from: l }, effects: Ft.of(l + e.length), range: i.EditorSelection.cursor(l + e.length) };
            } else if (t.charCategorizer(l)(a) != i.CharCategory.Word) {
              if (ne(t, l, o) > -1 && !ie(t, l, e, o))
                return { changes: { insert: e + e, from: l }, effects: Ft.of(l + e.length), range: i.EditorSelection.cursor(l + e.length) };
            }
            return { range: (r = n) };
          });
        return r ? null : t.update(l, { scrollIntoView: true, userEvent: "input.type" });
      }
      function se(t, e) {
        let s = (0, l.syntaxTree)(t).resolveInner(e + 1);
        return s.parent && s.from == e;
      }
      function ie(t, e, s, i) {
        let n = (0, l.syntaxTree)(t).resolveInner(e, -1);
        let o = i.reduce((t, e) => Math.max(t, e.length), 0);
        for (let r = 0; r < 5; r++) {
          let r = t.sliceDoc(n.from, Math.min(n.to, n.from + s.length + o));
          let l = r.indexOf(s);
          if (!l || (l > -1 && i.indexOf(r.slice(0, l)) > -1)) {
            let e = n.firstChild;
            while (e && e.from == n.from && e.to - e.from > s.length + l) {
              if (t.sliceDoc(e.to - s.length, e.to) == s) return false;
              e = e.firstChild;
            }
            return true;
          }
          let a = n.to == e && n.parent;
          if (!a) break;
          n = a;
        }
        return false;
      }
      function ne(t, e, s) {
        let n = t.charCategorizer(e);
        if (n(t.sliceDoc(e - 1, e)) != i.CharCategory.Word) return e;
        for (let o of s) {
          let s = e - o.length;
          if (t.sliceDoc(s, e) == o && n(t.sliceDoc(s - 1, s)) != i.CharCategory.Word) return s;
        }
        return -1;
      }
      function oe(t = {}) {
        return [rt, _, T.of(t), nt, le, lt];
      }
      const re = [
        { key: "Ctrl-Space", run: Z },
        { key: "Escape", run: tt },
        { key: "ArrowDown", run: J(true) },
        { key: "ArrowUp", run: J(false) },
        { key: "PageDown", run: J(true, "page") },
        { key: "PageUp", run: J(false, "page") },
        { key: "Enter", run: Y },
      ];
      const le = i.Prec.highest(o.keymap.computeN([T], (t) => (t.facet(T).defaultKeymap ? [re] : [])));
      function ae(t) {
        let e = t.field(_, false);
        return e && e.active.some((t) => t.state == 1) ? "pending" : e && e.active.some((t) => t.state != 0) ? "active" : null;
      }
      const he = new WeakMap();
      function ce(t) {
        var e;
        let s = (e = t.field(_, false)) === null || e === void 0 ? void 0 : e.open;
        if (!s || s.disabled) return [];
        let i = he.get(s.options);
        if (!i) he.set(s.options, (i = s.options.map((t) => t.completion)));
        return i;
      }
      function fe(t) {
        var e;
        let s = (e = t.field(_, false)) === null || e === void 0 ? void 0 : e.open;
        return s && !s.disabled && s.selected >= 0 ? s.options[s.selected].completion : null;
      }
      function ue(t) {
        var e;
        let s = (e = t.field(_, false)) === null || e === void 0 ? void 0 : e.open;
        return s && !s.disabled && s.selected >= 0 ? s.selected : null;
      }
      function pe(t) {
        return K.of(t);
      }
    },
    11705: (t, e, s) => {
      "use strict";
      s.d(e, { IK: () => R, Jq: () => g, RA: () => m, WQ: () => O });
      var i = s(73265);
      var n = s.n(i);
      var o = s(34155);
      class r {
        constructor(t, e, s, i, n, o, r, l, a, h = 0, c) {
          this.p = t;
          this.stack = e;
          this.state = s;
          this.reducePos = i;
          this.pos = n;
          this.score = o;
          this.buffer = r;
          this.bufferBase = l;
          this.curContext = a;
          this.lookAhead = h;
          this.parent = c;
        }
        toString() {
          return `[${this.stack.filter((t, e) => e % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
        }
        static start(t, e, s = 0) {
          let i = t.parser.context;
          return new r(t, [], e, s, s, 0, [], 0, i ? new l(i, i.start) : null, 0, null);
        }
        get context() {
          return this.curContext ? this.curContext.context : null;
        }
        pushState(t, e) {
          this.stack.push(this.state, e, this.bufferBase + this.buffer.length);
          this.state = t;
        }
        reduce(t) {
          var e;
          let s = t >> 19,
            i = t & 65535;
          let { parser: n } = this.p;
          let o = n.dynamicPrecedence(i);
          if (o) this.score += o;
          if (s == 0) {
            this.pushState(n.getGoto(this.state, i, true), this.reducePos);
            if (i < n.minRepeatTerm) this.storeNode(i, this.reducePos, this.reducePos, 4, true);
            this.reduceContext(i, this.reducePos);
            return;
          }
          let r = this.stack.length - (s - 1) * 3 - (t & 262144 ? 6 : 0);
          let l = r ? this.stack[r - 2] : this.p.ranges[0].from,
            a = this.reducePos - l;
          if (a >= 2e3 && !((e = this.p.parser.nodeSet.types[i]) === null || e === void 0 ? void 0 : e.isAnonymous)) {
            if (l == this.p.lastBigReductionStart) {
              this.p.bigReductionCount++;
              this.p.lastBigReductionSize = a;
            } else if (this.p.lastBigReductionSize < a) {
              this.p.bigReductionCount = 1;
              this.p.lastBigReductionStart = l;
              this.p.lastBigReductionSize = a;
            }
          }
          let h = r ? this.stack[r - 1] : 0,
            c = this.bufferBase + this.buffer.length - h;
          if (i < n.minRepeatTerm || t & 131072) {
            let t = n.stateFlag(this.state, 1) ? this.pos : this.reducePos;
            this.storeNode(i, l, t, c + 4, true);
          }
          if (t & 262144) {
            this.state = this.stack[r];
          } else {
            let t = this.stack[r - 3];
            this.state = n.getGoto(t, i, true);
          }
          while (this.stack.length > r) this.stack.pop();
          this.reduceContext(i, l);
        }
        storeNode(t, e, s, i = 4, n = false) {
          if (t == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
            let t = this,
              i = this.buffer.length;
            if (i == 0 && t.parent) {
              i = t.bufferBase - t.parent.bufferBase;
              t = t.parent;
            }
            if (i > 0 && t.buffer[i - 4] == 0 && t.buffer[i - 1] > -1) {
              if (e == s) return;
              if (t.buffer[i - 2] >= e) {
                t.buffer[i - 2] = s;
                return;
              }
            }
          }
          if (!n || this.pos == s) {
            this.buffer.push(t, e, s, i);
          } else {
            let n = this.buffer.length;
            if (n > 0 && this.buffer[n - 4] != 0)
              while (n > 0 && this.buffer[n - 2] > s) {
                this.buffer[n] = this.buffer[n - 4];
                this.buffer[n + 1] = this.buffer[n - 3];
                this.buffer[n + 2] = this.buffer[n - 2];
                this.buffer[n + 3] = this.buffer[n - 1];
                n -= 4;
                if (i > 4) i -= 4;
              }
            this.buffer[n] = t;
            this.buffer[n + 1] = e;
            this.buffer[n + 2] = s;
            this.buffer[n + 3] = i;
          }
        }
        shift(t, e, s, i) {
          if (t & 131072) {
            this.pushState(t & 65535, this.pos);
          } else if ((t & 262144) == 0) {
            let n = t,
              { parser: o } = this.p;
            if (i > this.pos || e <= o.maxNode) {
              this.pos = i;
              if (!o.stateFlag(n, 1)) this.reducePos = i;
            }
            this.pushState(n, s);
            this.shiftContext(e, s);
            if (e <= o.maxNode) this.buffer.push(e, s, i, 4);
          } else {
            this.pos = i;
            this.shiftContext(e, s);
            if (e <= this.p.parser.maxNode) this.buffer.push(e, s, i, 4);
          }
        }
        apply(t, e, s, i) {
          if (t & 65536) this.reduce(t);
          else this.shift(t, e, s, i);
        }
        useNode(t, e) {
          let s = this.p.reused.length - 1;
          if (s < 0 || this.p.reused[s] != t) {
            this.p.reused.push(t);
            s++;
          }
          let i = this.pos;
          this.reducePos = this.pos = i + t.length;
          this.pushState(e, i);
          this.buffer.push(s, i, this.reducePos, -1);
          if (this.curContext)
            this.updateContext(this.curContext.tracker.reuse(this.curContext.context, t, this, this.p.stream.reset(this.pos - t.length)));
        }
        split() {
          let t = this;
          let e = t.buffer.length;
          while (e > 0 && t.buffer[e - 2] > t.reducePos) e -= 4;
          let s = t.buffer.slice(e),
            i = t.bufferBase + e;
          while (t && i == t.bufferBase) t = t.parent;
          return new r(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, s, i, this.curContext, this.lookAhead, t);
        }
        recoverByDelete(t, e) {
          let s = t <= this.p.parser.maxNode;
          if (s) this.storeNode(t, this.pos, e, 4);
          this.storeNode(0, this.pos, e, s ? 8 : 4);
          this.pos = this.reducePos = e;
          this.score -= 190;
        }
        canShift(t) {
          for (let e = new a(this); ; ) {
            let s = this.p.parser.stateSlot(e.state, 4) || this.p.parser.hasAction(e.state, t);
            if (s == 0) return false;
            if ((s & 65536) == 0) return true;
            e.reduce(s);
          }
        }
        recoverByInsert(t) {
          if (this.stack.length >= 300) return [];
          let e = this.p.parser.nextStates(this.state);
          if (e.length > 4 << 1 || this.stack.length >= 120) {
            let s = [];
            for (let i = 0, n; i < e.length; i += 2) {
              if ((n = e[i + 1]) != this.state && this.p.parser.hasAction(n, t)) s.push(e[i], n);
            }
            if (this.stack.length < 120)
              for (let t = 0; s.length < 4 << 1 && t < e.length; t += 2) {
                let i = e[t + 1];
                if (!s.some((t, e) => e & 1 && t == i)) s.push(e[t], i);
              }
            e = s;
          }
          let s = [];
          for (let i = 0; i < e.length && s.length < 4; i += 2) {
            let t = e[i + 1];
            if (t == this.state) continue;
            let n = this.split();
            n.pushState(t, this.pos);
            n.storeNode(0, n.pos, n.pos, 4, true);
            n.shiftContext(e[i], this.pos);
            n.reducePos = this.pos;
            n.score -= 200;
            s.push(n);
          }
          return s;
        }
        forceReduce() {
          let { parser: t } = this.p;
          let e = t.stateSlot(this.state, 5);
          if ((e & 65536) == 0) return false;
          if (!t.validAction(this.state, e)) {
            let s = e >> 19,
              i = e & 65535;
            let n = this.stack.length - s * 3;
            if (n < 0 || t.getGoto(this.stack[n], i, false) < 0) {
              let t = this.findForcedReduction();
              if (t == null) return false;
              e = t;
            }
            this.storeNode(0, this.pos, this.pos, 4, true);
            this.score -= 100;
          }
          this.reducePos = this.pos;
          this.reduce(e);
          return true;
        }
        findForcedReduction() {
          let { parser: t } = this.p,
            e = [];
          let s = (i, n) => {
            if (e.includes(i)) return;
            e.push(i);
            return t.allActions(i, (e) => {
              if (e & (262144 | 131072));
              else if (e & 65536) {
                let s = (e >> 19) - n;
                if (s > 1) {
                  let i = e & 65535,
                    n = this.stack.length - s * 3;
                  if (n >= 0 && t.getGoto(this.stack[n], i, false) >= 0) return (s << 19) | 65536 | i;
                }
              } else {
                let t = s(e, n + 1);
                if (t != null) return t;
              }
            });
          };
          return s(this.state, 0);
        }
        forceAll() {
          while (!this.p.parser.stateFlag(this.state, 2)) {
            if (!this.forceReduce()) {
              this.storeNode(0, this.pos, this.pos, 4, true);
              break;
            }
          }
          return this;
        }
        get deadEnd() {
          if (this.stack.length != 3) return false;
          let { parser: t } = this.p;
          return t.data[t.stateSlot(this.state, 1)] == 65535 && !t.stateSlot(this.state, 4);
        }
        restart() {
          this.storeNode(0, this.pos, this.pos, 4, true);
          this.state = this.stack[0];
          this.stack.length = 0;
        }
        sameState(t) {
          if (this.state != t.state || this.stack.length != t.stack.length) return false;
          for (let e = 0; e < this.stack.length; e += 3) if (this.stack[e] != t.stack[e]) return false;
          return true;
        }
        get parser() {
          return this.p.parser;
        }
        dialectEnabled(t) {
          return this.p.parser.dialect.flags[t];
        }
        shiftContext(t, e) {
          if (this.curContext) this.updateContext(this.curContext.tracker.shift(this.curContext.context, t, this, this.p.stream.reset(e)));
        }
        reduceContext(t, e) {
          if (this.curContext) this.updateContext(this.curContext.tracker.reduce(this.curContext.context, t, this, this.p.stream.reset(e)));
        }
        emitContext() {
          let t = this.buffer.length - 1;
          if (t < 0 || this.buffer[t] != -3) this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
        }
        emitLookAhead() {
          let t = this.buffer.length - 1;
          if (t < 0 || this.buffer[t] != -4) this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
        }
        updateContext(t) {
          if (t != this.curContext.context) {
            let e = new l(this.curContext.tracker, t);
            if (e.hash != this.curContext.hash) this.emitContext();
            this.curContext = e;
          }
        }
        setLookAhead(t) {
          if (t > this.lookAhead) {
            this.emitLookAhead();
            this.lookAhead = t;
          }
        }
        close() {
          if (this.curContext && this.curContext.tracker.strict) this.emitContext();
          if (this.lookAhead > 0) this.emitLookAhead();
        }
      }
      class l {
        constructor(t, e) {
          this.tracker = t;
          this.context = e;
          this.hash = t.strict ? t.hash(e) : 0;
        }
      }
      class a {
        constructor(t) {
          this.start = t;
          this.state = t.state;
          this.stack = t.stack;
          this.base = this.stack.length;
        }
        reduce(t) {
          let e = t & 65535,
            s = t >> 19;
          if (s == 0) {
            if (this.stack == this.start.stack) this.stack = this.stack.slice();
            this.stack.push(this.state, 0, 0);
            this.base += 3;
          } else {
            this.base -= (s - 1) * 3;
          }
          let i = this.start.p.parser.getGoto(this.stack[this.base - 3], e, true);
          this.state = i;
        }
      }
      class h {
        constructor(t, e, s) {
          this.stack = t;
          this.pos = e;
          this.index = s;
          this.buffer = t.buffer;
          if (this.index == 0) this.maybeNext();
        }
        static create(t, e = t.bufferBase + t.buffer.length) {
          return new h(t, e, e - t.bufferBase);
        }
        maybeNext() {
          let t = this.stack.parent;
          if (t != null) {
            this.index = this.stack.bufferBase - t.bufferBase;
            this.stack = t;
            this.buffer = t.buffer;
          }
        }
        get id() {
          return this.buffer[this.index - 4];
        }
        get start() {
          return this.buffer[this.index - 3];
        }
        get end() {
          return this.buffer[this.index - 2];
        }
        get size() {
          return this.buffer[this.index - 1];
        }
        next() {
          this.index -= 4;
          this.pos -= 4;
          if (this.index == 0) this.maybeNext();
        }
        fork() {
          return new h(this.stack, this.pos, this.index);
        }
      }
      function c(t, e = Uint16Array) {
        if (typeof t != "string") return t;
        let s = null;
        for (let i = 0, n = 0; i < t.length; ) {
          let o = 0;
          for (;;) {
            let e = t.charCodeAt(i++),
              s = false;
            if (e == 126) {
              o = 65535;
              break;
            }
            if (e >= 92) e--;
            if (e >= 34) e--;
            let n = e - 32;
            if (n >= 46) {
              n -= 46;
              s = true;
            }
            o += n;
            if (s) break;
            o *= 46;
          }
          if (s) s[n++] = o;
          else s = new e(o);
        }
        return s;
      }
      class f {
        constructor() {
          this.start = -1;
          this.value = -1;
          this.end = -1;
          this.extended = -1;
          this.lookAhead = 0;
          this.mask = 0;
          this.context = 0;
        }
      }
      const u = new f();
      class p {
        constructor(t, e) {
          this.input = t;
          this.ranges = e;
          this.chunk = "";
          this.chunkOff = 0;
          this.chunk2 = "";
          this.chunk2Pos = 0;
          this.next = -1;
          this.token = u;
          this.rangeIndex = 0;
          this.pos = this.chunkPos = e[0].from;
          this.range = e[0];
          this.end = e[e.length - 1].to;
          this.readNext();
        }
        resolveOffset(t, e) {
          let s = this.range,
            i = this.rangeIndex;
          let n = this.pos + t;
          while (n < s.from) {
            if (!i) return null;
            let t = this.ranges[--i];
            n -= s.from - t.to;
            s = t;
          }
          while (e < 0 ? n > s.to : n >= s.to) {
            if (i == this.ranges.length - 1) return null;
            let t = this.ranges[++i];
            n += t.from - s.to;
            s = t;
          }
          return n;
        }
        clipPos(t) {
          if (t >= this.range.from && t < this.range.to) return t;
          for (let e of this.ranges) if (e.to > t) return Math.max(t, e.from);
          return this.end;
        }
        peek(t) {
          let e = this.chunkOff + t,
            s,
            i;
          if (e >= 0 && e < this.chunk.length) {
            s = this.pos + t;
            i = this.chunk.charCodeAt(e);
          } else {
            let e = this.resolveOffset(t, 1);
            if (e == null) return -1;
            s = e;
            if (s >= this.chunk2Pos && s < this.chunk2Pos + this.chunk2.length) {
              i = this.chunk2.charCodeAt(s - this.chunk2Pos);
            } else {
              let t = this.rangeIndex,
                e = this.range;
              while (e.to <= s) e = this.ranges[++t];
              this.chunk2 = this.input.chunk((this.chunk2Pos = s));
              if (s + this.chunk2.length > e.to) this.chunk2 = this.chunk2.slice(0, e.to - s);
              i = this.chunk2.charCodeAt(0);
            }
          }
          if (s >= this.token.lookAhead) this.token.lookAhead = s + 1;
          return i;
        }
        acceptToken(t, e = 0) {
          let s = e ? this.resolveOffset(e, -1) : this.pos;
          if (s == null || s < this.token.start) throw new RangeError("Token end out of bounds");
          this.token.value = t;
          this.token.end = s;
        }
        acceptTokenTo(t, e) {
          this.token.value = t;
          this.token.end = e;
        }
        getChunk() {
          if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
            let { chunk: t, chunkPos: e } = this;
            this.chunk = this.chunk2;
            this.chunkPos = this.chunk2Pos;
            this.chunk2 = t;
            this.chunk2Pos = e;
            this.chunkOff = this.pos - this.chunkPos;
          } else {
            this.chunk2 = this.chunk;
            this.chunk2Pos = this.chunkPos;
            let t = this.input.chunk(this.pos);
            let e = this.pos + t.length;
            this.chunk = e > this.range.to ? t.slice(0, this.range.to - this.pos) : t;
            this.chunkPos = this.pos;
            this.chunkOff = 0;
          }
        }
        readNext() {
          if (this.chunkOff >= this.chunk.length) {
            this.getChunk();
            if (this.chunkOff == this.chunk.length) return (this.next = -1);
          }
          return (this.next = this.chunk.charCodeAt(this.chunkOff));
        }
        advance(t = 1) {
          this.chunkOff += t;
          while (this.pos + t >= this.range.to) {
            if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
            t -= this.range.to - this.pos;
            this.range = this.ranges[++this.rangeIndex];
            this.pos = this.range.from;
          }
          this.pos += t;
          if (this.pos >= this.token.lookAhead) this.token.lookAhead = this.pos + 1;
          return this.readNext();
        }
        setDone() {
          this.pos = this.chunkPos = this.end;
          this.range = this.ranges[(this.rangeIndex = this.ranges.length - 1)];
          this.chunk = "";
          return (this.next = -1);
        }
        reset(t, e) {
          if (e) {
            this.token = e;
            e.start = t;
            e.lookAhead = t + 1;
            e.value = e.extended = -1;
          } else {
            this.token = u;
          }
          if (this.pos != t) {
            this.pos = t;
            if (t == this.end) {
              this.setDone();
              return this;
            }
            while (t < this.range.from) this.range = this.ranges[--this.rangeIndex];
            while (t >= this.range.to) this.range = this.ranges[++this.rangeIndex];
            if (t >= this.chunkPos && t < this.chunkPos + this.chunk.length) {
              this.chunkOff = t - this.chunkPos;
            } else {
              this.chunk = "";
              this.chunkOff = 0;
            }
            this.readNext();
          }
          return this;
        }
        read(t, e) {
          if (t >= this.chunkPos && e <= this.chunkPos + this.chunk.length) return this.chunk.slice(t - this.chunkPos, e - this.chunkPos);
          if (t >= this.chunk2Pos && e <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(t - this.chunk2Pos, e - this.chunk2Pos);
          if (t >= this.range.from && e <= this.range.to) return this.input.read(t, e);
          let s = "";
          for (let i of this.ranges) {
            if (i.from >= e) break;
            if (i.to > t) s += this.input.read(Math.max(i.from, t), Math.min(i.to, e));
          }
          return s;
        }
      }
      class d {
        constructor(t, e) {
          this.data = t;
          this.id = e;
        }
        token(t, e) {
          let { parser: s } = e.p;
          k(this.data, t, e, this.id, s.data, s.tokenPrecTable);
        }
      }
      d.prototype.contextual = d.prototype.fallback = d.prototype.extend = false;
      class m {
        constructor(t, e, s) {
          this.precTable = e;
          this.elseToken = s;
          this.data = typeof t == "string" ? c(t) : t;
        }
        token(t, e) {
          let s = t.pos,
            i = 0;
          for (;;) {
            let s = t.next < 0,
              n = t.resolveOffset(1, 1);
            k(this.data, t, e, 0, this.data, this.precTable);
            if (t.token.value > -1) break;
            if (this.elseToken == null) return;
            if (!s) i++;
            if (n == null) break;
            t.reset(n, t.token);
          }
          if (i) {
            t.reset(s, t.token);
            t.acceptToken(this.elseToken, i);
          }
        }
      }
      m.prototype.contextual = d.prototype.fallback = d.prototype.extend = false;
      class g {
        constructor(t, e = {}) {
          this.token = t;
          this.contextual = !!e.contextual;
          this.fallback = !!e.fallback;
          this.extend = !!e.extend;
        }
      }
      function k(t, e, s, i, n, o) {
        let r = 0,
          l = 1 << i,
          { dialect: a } = s.p.parser;
        t: for (;;) {
          if ((l & t[r]) == 0) break;
          let s = t[r + 1];
          for (let f = r + 3; f < s; f += 2)
            if ((t[f + 1] & l) > 0) {
              let s = t[f];
              if (a.allows(s) && (e.token.value == -1 || e.token.value == s || x(s, e.token.value, n, o))) {
                e.acceptToken(s);
                break;
              }
            }
          let i = e.next,
            h = 0,
            c = t[r + 2];
          if (e.next < 0 && c > h && t[s + c * 3 - 3] == 65535) {
            r = t[s + c * 3 - 1];
            continue t;
          }
          for (; h < c; ) {
            let n = (h + c) >> 1;
            let o = s + n + (n << 1);
            let l = t[o],
              a = t[o + 1] || 65536;
            if (i < l) c = n;
            else if (i >= a) h = n + 1;
            else {
              r = t[o + 2];
              e.advance();
              continue t;
            }
          }
          break;
        }
      }
      function b(t, e, s) {
        for (let i = e, n; (n = t[i]) != 65535; i++) if (n == s) return i - e;
        return -1;
      }
      function x(t, e, s, i) {
        let n = b(s, i, e);
        return n < 0 || b(s, i, t) < n;
      }
      const v = typeof o != "undefined" && o.env && /\bparse\b/.test(o.env.LOG);
      let w = null;
      function y(t, e, s) {
        let n = t.cursor(i.IterMode.IncludeAnonymous);
        n.moveTo(e);
        for (;;) {
          if (!(s < 0 ? n.childBefore(e) : n.childAfter(e)))
            for (;;) {
              if ((s < 0 ? n.to < e : n.from > e) && !n.type.isError)
                return s < 0 ? Math.max(0, Math.min(n.to - 1, e - 25)) : Math.min(t.length, Math.max(n.from + 1, e + 25));
              if (s < 0 ? n.prevSibling() : n.nextSibling()) break;
              if (!n.parent()) return s < 0 ? 0 : t.length;
            }
        }
      }
      class S {
        constructor(t, e) {
          this.fragments = t;
          this.nodeSet = e;
          this.i = 0;
          this.fragment = null;
          this.safeFrom = -1;
          this.safeTo = -1;
          this.trees = [];
          this.start = [];
          this.index = [];
          this.nextFragment();
        }
        nextFragment() {
          let t = (this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++]);
          if (t) {
            this.safeFrom = t.openStart ? y(t.tree, t.from + t.offset, 1) - t.offset : t.from;
            this.safeTo = t.openEnd ? y(t.tree, t.to + t.offset, -1) - t.offset : t.to;
            while (this.trees.length) {
              this.trees.pop();
              this.start.pop();
              this.index.pop();
            }
            this.trees.push(t.tree);
            this.start.push(-t.offset);
            this.index.push(0);
            this.nextStart = this.safeFrom;
          } else {
            this.nextStart = 1e9;
          }
        }
        nodeAt(t) {
          if (t < this.nextStart) return null;
          while (this.fragment && this.safeTo <= t) this.nextFragment();
          if (!this.fragment) return null;
          for (;;) {
            let e = this.trees.length - 1;
            if (e < 0) {
              this.nextFragment();
              return null;
            }
            let s = this.trees[e],
              n = this.index[e];
            if (n == s.children.length) {
              this.trees.pop();
              this.start.pop();
              this.index.pop();
              continue;
            }
            let o = s.children[n];
            let r = this.start[e] + s.positions[n];
            if (r > t) {
              this.nextStart = r;
              return null;
            }
            if (o instanceof i.Tree) {
              if (r == t) {
                if (r < this.safeFrom) return null;
                let t = r + o.length;
                if (t <= this.safeTo) {
                  let e = o.prop(i.NodeProp.lookAhead);
                  if (!e || t + e < this.fragment.to) return o;
                }
              }
              this.index[e]++;
              if (r + o.length >= Math.max(this.safeFrom, t)) {
                this.trees.push(o);
                this.start.push(r);
                this.index.push(0);
              }
            } else {
              this.index[e]++;
              this.nextStart = r + o.length;
            }
          }
        }
      }
      class C {
        constructor(t, e) {
          this.stream = e;
          this.tokens = [];
          this.mainToken = null;
          this.actions = [];
          this.tokens = t.tokenizers.map((t) => new f());
        }
        getActions(t) {
          let e = 0;
          let s = null;
          let { parser: i } = t.p,
            { tokenizers: n } = i;
          let o = i.stateSlot(t.state, 3);
          let r = t.curContext ? t.curContext.hash : 0;
          let l = 0;
          for (let a = 0; a < n.length; a++) {
            if (((1 << a) & o) == 0) continue;
            let i = n[a],
              h = this.tokens[a];
            if (s && !i.fallback) continue;
            if (i.contextual || h.start != t.pos || h.mask != o || h.context != r) {
              this.updateCachedToken(h, i, t);
              h.mask = o;
              h.context = r;
            }
            if (h.lookAhead > h.end + 25) l = Math.max(h.lookAhead, l);
            if (h.value != 0) {
              let n = e;
              if (h.extended > -1) e = this.addActions(t, h.extended, h.end, e);
              e = this.addActions(t, h.value, h.end, e);
              if (!i.extend) {
                s = h;
                if (e > n) break;
              }
            }
          }
          while (this.actions.length > e) this.actions.pop();
          if (l) t.setLookAhead(l);
          if (!s && t.pos == this.stream.end) {
            s = new f();
            s.value = t.p.parser.eofTerm;
            s.start = s.end = t.pos;
            e = this.addActions(t, s.value, s.end, e);
          }
          this.mainToken = s;
          return this.actions;
        }
        getMainToken(t) {
          if (this.mainToken) return this.mainToken;
          let e = new f(),
            { pos: s, p: i } = t;
          e.start = s;
          e.end = Math.min(s + 1, i.stream.end);
          e.value = s == i.stream.end ? i.parser.eofTerm : 0;
          return e;
        }
        updateCachedToken(t, e, s) {
          let i = this.stream.clipPos(s.pos);
          e.token(this.stream.reset(i, t), s);
          if (t.value > -1) {
            let { parser: e } = s.p;
            for (let i = 0; i < e.specialized.length; i++)
              if (e.specialized[i] == t.value) {
                let n = e.specializers[i](this.stream.read(t.start, t.end), s);
                if (n >= 0 && s.p.parser.dialect.allows(n >> 1)) {
                  if ((n & 1) == 0) t.value = n >> 1;
                  else t.extended = n >> 1;
                  break;
                }
              }
          } else {
            t.value = 0;
            t.end = this.stream.clipPos(i + 1);
          }
        }
        putAction(t, e, s, i) {
          for (let n = 0; n < i; n += 3) if (this.actions[n] == t) return i;
          this.actions[i++] = t;
          this.actions[i++] = e;
          this.actions[i++] = s;
          return i;
        }
        addActions(t, e, s, i) {
          let { state: n } = t,
            { parser: o } = t.p,
            { data: r } = o;
          for (let l = 0; l < 2; l++) {
            for (let t = o.stateSlot(n, l ? 2 : 1); ; t += 3) {
              if (r[t] == 65535) {
                if (r[t + 1] == 1) {
                  t = E(r, t + 2);
                } else {
                  if (i == 0 && r[t + 1] == 2) i = this.putAction(E(r, t + 2), e, s, i);
                  break;
                }
              }
              if (r[t] == e) i = this.putAction(E(r, t + 1), e, s, i);
            }
          }
          return i;
        }
      }
      class P {
        constructor(t, e, s, i) {
          this.parser = t;
          this.input = e;
          this.ranges = i;
          this.recovering = 0;
          this.nextStackID = 9812;
          this.minStackPos = 0;
          this.reused = [];
          this.stoppedAt = null;
          this.lastBigReductionStart = -1;
          this.lastBigReductionSize = 0;
          this.bigReductionCount = 0;
          this.stream = new p(e, i);
          this.tokens = new C(t, this.stream);
          this.topTerm = t.top[1];
          let { from: n } = i[0];
          this.stacks = [r.start(this, t.top[0], n)];
          this.fragments = s.length && this.stream.end - n > t.bufferLength * 4 ? new S(s, t.nodeSet) : null;
        }
        get parsedPos() {
          return this.minStackPos;
        }
        advance() {
          let t = this.stacks,
            e = this.minStackPos;
          let s = (this.stacks = []);
          let i, n;
          if (this.bigReductionCount > 300 && t.length == 1) {
            let [e] = t;
            while (e.forceReduce() && e.stack.length && e.stack[e.stack.length - 2] >= this.lastBigReductionStart) {}
            this.bigReductionCount = this.lastBigReductionSize = 0;
          }
          for (let o = 0; o < t.length; o++) {
            let r = t[o];
            for (;;) {
              this.tokens.mainToken = null;
              if (r.pos > e) {
                s.push(r);
              } else if (this.advanceStack(r, s, t)) {
                continue;
              } else {
                if (!i) {
                  i = [];
                  n = [];
                }
                i.push(r);
                let t = this.tokens.getMainToken(r);
                n.push(t.value, t.end);
              }
              break;
            }
          }
          if (!s.length) {
            let t = i && D(i);
            if (t) {
              if (v) console.log("Finish with " + this.stackID(t));
              return this.stackToTree(t);
            }
            if (this.parser.strict) {
              if (v && i) console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none"));
              throw new SyntaxError("No parse at " + e);
            }
            if (!this.recovering) this.recovering = 5;
          }
          if (this.recovering && i) {
            let t = this.stoppedAt != null && i[0].pos > this.stoppedAt ? i[0] : this.runRecovery(i, n, s);
            if (t) {
              if (v) console.log("Force-finish " + this.stackID(t));
              return this.stackToTree(t.forceAll());
            }
          }
          if (this.recovering) {
            let t = this.recovering == 1 ? 1 : this.recovering * 3;
            if (s.length > t) {
              s.sort((t, e) => e.score - t.score);
              while (s.length > t) s.pop();
            }
            if (s.some((t) => t.reducePos > e)) this.recovering--;
          } else if (s.length > 1) {
            t: for (let t = 0; t < s.length - 1; t++) {
              let e = s[t];
              for (let i = t + 1; i < s.length; i++) {
                let n = s[i];
                if (e.sameState(n) || (e.buffer.length > 500 && n.buffer.length > 500)) {
                  if ((e.score - n.score || e.buffer.length - n.buffer.length) > 0) {
                    s.splice(i--, 1);
                  } else {
                    s.splice(t--, 1);
                    continue t;
                  }
                }
              }
            }
            if (s.length > 12) s.splice(12, s.length - 12);
          }
          this.minStackPos = s[0].pos;
          for (let o = 1; o < s.length; o++) if (s[o].pos < this.minStackPos) this.minStackPos = s[o].pos;
          return null;
        }
        stopAt(t) {
          if (this.stoppedAt != null && this.stoppedAt < t) throw new RangeError("Can't move stoppedAt forward");
          this.stoppedAt = t;
        }
        advanceStack(t, e, s) {
          let n = t.pos,
            { parser: o } = this;
          let r = v ? this.stackID(t) + " -> " : "";
          if (this.stoppedAt != null && n > this.stoppedAt) return t.forceReduce() ? t : null;
          if (this.fragments) {
            let e = t.curContext && t.curContext.tracker.strict,
              s = e ? t.curContext.hash : 0;
            for (let l = this.fragments.nodeAt(n); l; ) {
              let n = this.parser.nodeSet.types[l.type.id] == l.type ? o.getGoto(t.state, l.type.id) : -1;
              if (n > -1 && l.length && (!e || (l.prop(i.NodeProp.contextHash) || 0) == s)) {
                t.useNode(l, n);
                if (v) console.log(r + this.stackID(t) + ` (via reuse of ${o.getName(l.type.id)})`);
                return true;
              }
              if (!(l instanceof i.Tree) || l.children.length == 0 || l.positions[0] > 0) break;
              let a = l.children[0];
              if (a instanceof i.Tree && l.positions[0] == 0) l = a;
              else break;
            }
          }
          let l = o.stateSlot(t.state, 4);
          if (l > 0) {
            t.reduce(l);
            if (v) console.log(r + this.stackID(t) + ` (via always-reduce ${o.getName(l & 65535)})`);
            return true;
          }
          if (t.stack.length >= 8400) {
            while (t.stack.length > 6e3 && t.forceReduce()) {}
          }
          let a = this.tokens.getActions(t);
          for (let i = 0; i < a.length; ) {
            let l = a[i++],
              h = a[i++],
              c = a[i++];
            let f = i == a.length || !s;
            let u = f ? t : t.split();
            let p = this.tokens.mainToken;
            u.apply(l, h, p ? p.start : u.pos, c);
            if (v)
              console.log(
                r +
                  this.stackID(u) +
                  ` (via ${(l & 65536) == 0 ? "shift" : `reduce of ${o.getName(l & 65535)}`} for ${o.getName(h)} @ ${n}${u == t ? "" : ", split"})`
              );
            if (f) return true;
            else if (u.pos > n) e.push(u);
            else s.push(u);
          }
          return false;
        }
        advanceFully(t, e) {
          let s = t.pos;
          for (;;) {
            if (!this.advanceStack(t, null, null)) return false;
            if (t.pos > s) {
              T(t, e);
              return true;
            }
          }
        }
        runRecovery(t, e, s) {
          let i = null,
            n = false;
          for (let o = 0; o < t.length; o++) {
            let r = t[o],
              l = e[o << 1],
              a = e[(o << 1) + 1];
            let h = v ? this.stackID(r) + " -> " : "";
            if (r.deadEnd) {
              if (n) continue;
              n = true;
              r.restart();
              if (v) console.log(h + this.stackID(r) + " (restarted)");
              let t = this.advanceFully(r, s);
              if (t) continue;
            }
            let c = r.split(),
              f = h;
            for (let t = 0; c.forceReduce() && t < 10; t++) {
              if (v) console.log(f + this.stackID(c) + " (via force-reduce)");
              let t = this.advanceFully(c, s);
              if (t) break;
              if (v) f = this.stackID(c) + " -> ";
            }
            for (let t of r.recoverByInsert(l)) {
              if (v) console.log(h + this.stackID(t) + " (via recover-insert)");
              this.advanceFully(t, s);
            }
            if (this.stream.end > r.pos) {
              if (a == r.pos) {
                a++;
                l = 0;
              }
              r.recoverByDelete(l, a);
              if (v) console.log(h + this.stackID(r) + ` (via recover-delete ${this.parser.getName(l)})`);
              T(r, s);
            } else if (!i || i.score < r.score) {
              i = r;
            }
          }
          return i;
        }
        stackToTree(t) {
          t.close();
          return i.Tree.build({
            buffer: h.create(t),
            nodeSet: this.parser.nodeSet,
            topID: this.topTerm,
            maxBufferLength: this.parser.bufferLength,
            reused: this.reused,
            start: this.ranges[0].from,
            length: t.pos - this.ranges[0].from,
            minRepeatType: this.parser.minRepeatTerm,
          });
        }
        stackID(t) {
          let e = (w || (w = new WeakMap())).get(t);
          if (!e) w.set(t, (e = String.fromCodePoint(this.nextStackID++)));
          return e + t;
        }
      }
      function T(t, e) {
        for (let s = 0; s < e.length; s++) {
          let i = e[s];
          if (i.pos == t.pos && i.sameState(t)) {
            if (e[s].score < t.score) e[s] = t;
            return;
          }
        }
        e.push(t);
      }
      class A {
        constructor(t, e, s) {
          this.source = t;
          this.flags = e;
          this.disabled = s;
        }
        allows(t) {
          return !this.disabled || this.disabled[t] == 0;
        }
      }
      const I = (t) => t;
      class R {
        constructor(t) {
          this.start = t.start;
          this.shift = t.shift || I;
          this.reduce = t.reduce || I;
          this.reuse = t.reuse || I;
          this.hash = t.hash || (() => 0);
          this.strict = t.strict !== false;
        }
      }
      class O extends i.Parser {
        constructor(t) {
          super();
          this.wrappers = [];
          if (t.version != 14) throw new RangeError(`Parser version (${t.version}) doesn't match runtime version (${14})`);
          let e = t.nodeNames.split(" ");
          this.minRepeatTerm = e.length;
          for (let i = 0; i < t.repeatNodeCount; i++) e.push("");
          let s = Object.keys(t.topRules).map((e) => t.topRules[e][1]);
          let n = [];
          for (let i = 0; i < e.length; i++) n.push([]);
          function o(t, e, s) {
            n[t].push([e, e.deserialize(String(s))]);
          }
          if (t.nodeProps)
            for (let l of t.nodeProps) {
              let t = l[0];
              if (typeof t == "string") t = i.NodeProp[t];
              for (let e = 1; e < l.length; ) {
                let s = l[e++];
                if (s >= 0) {
                  o(s, t, l[e++]);
                } else {
                  let i = l[e + -s];
                  for (let n = -s; n > 0; n--) o(l[e++], t, i);
                  e++;
                }
              }
            }
          this.nodeSet = new i.NodeSet(
            e.map((e, o) =>
              i.NodeType.define({
                name: o >= this.minRepeatTerm ? undefined : e,
                id: o,
                props: n[o],
                top: s.indexOf(o) > -1,
                error: o == 0,
                skipped: t.skippedNodes && t.skippedNodes.indexOf(o) > -1,
              })
            )
          );
          if (t.propSources) this.nodeSet = this.nodeSet.extend(...t.propSources);
          this.strict = false;
          this.bufferLength = i.DefaultBufferLength;
          let r = c(t.tokenData);
          this.context = t.context;
          this.specializerSpecs = t.specialized || [];
          this.specialized = new Uint16Array(this.specializerSpecs.length);
          for (let i = 0; i < this.specializerSpecs.length; i++) this.specialized[i] = this.specializerSpecs[i].term;
          this.specializers = this.specializerSpecs.map(N);
          this.states = c(t.states, Uint32Array);
          this.data = c(t.stateData);
          this.goto = c(t.goto);
          this.maxTerm = t.maxTerm;
          this.tokenizers = t.tokenizers.map((t) => (typeof t == "number" ? new d(r, t) : t));
          this.topRules = t.topRules;
          this.dialects = t.dialects || {};
          this.dynamicPrecedences = t.dynamicPrecedences || null;
          this.tokenPrecTable = t.tokenPrec;
          this.termNames = t.termNames || null;
          this.maxNode = this.nodeSet.types.length - 1;
          this.dialect = this.parseDialect();
          this.top = this.topRules[Object.keys(this.topRules)[0]];
        }
        createParse(t, e, s) {
          let i = new P(this, t, e, s);
          for (let n of this.wrappers) i = n(i, t, e, s);
          return i;
        }
        getGoto(t, e, s = false) {
          let i = this.goto;
          if (e >= i[0]) return -1;
          for (let n = i[e + 1]; ; ) {
            let e = i[n++],
              o = e & 1;
            let r = i[n++];
            if (o && s) return r;
            for (let s = n + (e >> 1); n < s; n++) if (i[n] == t) return r;
            if (o) return -1;
          }
        }
        hasAction(t, e) {
          let s = this.data;
          for (let i = 0; i < 2; i++) {
            for (let n = this.stateSlot(t, i ? 2 : 1), o; ; n += 3) {
              if ((o = s[n]) == 65535) {
                if (s[n + 1] == 1) o = s[(n = E(s, n + 2))];
                else if (s[n + 1] == 2) return E(s, n + 2);
                else break;
              }
              if (o == e || o == 0) return E(s, n + 1);
            }
          }
          return 0;
        }
        stateSlot(t, e) {
          return this.states[t * 6 + e];
        }
        stateFlag(t, e) {
          return (this.stateSlot(t, 0) & e) > 0;
        }
        validAction(t, e) {
          return !!this.allActions(t, (t) => (t == e ? true : null));
        }
        allActions(t, e) {
          let s = this.stateSlot(t, 4);
          let i = s ? e(s) : undefined;
          for (let n = this.stateSlot(t, 1); i == null; n += 3) {
            if (this.data[n] == 65535) {
              if (this.data[n + 1] == 1) n = E(this.data, n + 2);
              else break;
            }
            i = e(E(this.data, n + 1));
          }
          return i;
        }
        nextStates(t) {
          let e = [];
          for (let s = this.stateSlot(t, 1); ; s += 3) {
            if (this.data[s] == 65535) {
              if (this.data[s + 1] == 1) s = E(this.data, s + 2);
              else break;
            }
            if ((this.data[s + 2] & (65536 >> 16)) == 0) {
              let t = this.data[s + 1];
              if (!e.some((e, s) => s & 1 && e == t)) e.push(this.data[s], t);
            }
          }
          return e;
        }
        configure(t) {
          let e = Object.assign(Object.create(O.prototype), this);
          if (t.props) e.nodeSet = this.nodeSet.extend(...t.props);
          if (t.top) {
            let s = this.topRules[t.top];
            if (!s) throw new RangeError(`Invalid top rule name ${t.top}`);
            e.top = s;
          }
          if (t.tokenizers)
            e.tokenizers = this.tokenizers.map((e) => {
              let s = t.tokenizers.find((t) => t.from == e);
              return s ? s.to : e;
            });
          if (t.specializers) {
            e.specializers = this.specializers.slice();
            e.specializerSpecs = this.specializerSpecs.map((s, i) => {
              let n = t.specializers.find((t) => t.from == s.external);
              if (!n) return s;
              let o = Object.assign(Object.assign({}, s), { external: n.to });
              e.specializers[i] = N(o);
              return o;
            });
          }
          if (t.contextTracker) e.context = t.contextTracker;
          if (t.dialect) e.dialect = this.parseDialect(t.dialect);
          if (t.strict != null) e.strict = t.strict;
          if (t.wrap) e.wrappers = e.wrappers.concat(t.wrap);
          if (t.bufferLength != null) e.bufferLength = t.bufferLength;
          return e;
        }
        hasWrappers() {
          return this.wrappers.length > 0;
        }
        getName(t) {
          return this.termNames ? this.termNames[t] : String((t <= this.maxNode && this.nodeSet.types[t].name) || t);
        }
        get eofTerm() {
          return this.maxNode + 1;
        }
        get topNode() {
          return this.nodeSet.types[this.top[1]];
        }
        dynamicPrecedence(t) {
          let e = this.dynamicPrecedences;
          return e == null ? 0 : e[t] || 0;
        }
        parseDialect(t) {
          let e = Object.keys(this.dialects),
            s = e.map(() => false);
          if (t)
            for (let n of t.split(" ")) {
              let t = e.indexOf(n);
              if (t >= 0) s[t] = true;
            }
          let i = null;
          for (let n = 0; n < e.length; n++)
            if (!s[n]) {
              for (let t = this.dialects[e[n]], s; (s = this.data[t++]) != 65535; ) (i || (i = new Uint8Array(this.maxTerm + 1)))[s] = 1;
            }
          return new A(t, s, i);
        }
        static deserialize(t) {
          return new O(t);
        }
      }
      function E(t, e) {
        return t[e] | (t[e + 1] << 16);
      }
      function D(t) {
        let e = null;
        for (let s of t) {
          let t = s.p.stoppedAt;
          if ((s.pos == s.p.stream.end || (t != null && s.pos > t)) && s.p.parser.stateFlag(s.state, 2) && (!e || e.score < s.score)) e = s;
        }
        return e;
      }
      function N(t) {
        if (t.external) {
          let e = t.extend ? 1 : 0;
          return (s, i) => (t.external(s, i) << 1) | e;
        }
        return t.get;
      }
    },
    34155: (t) => {
      var e = (t.exports = {});
      var s;
      var i;
      function n() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          if (typeof setTimeout === "function") {
            s = setTimeout;
          } else {
            s = n;
          }
        } catch (t) {
          s = n;
        }
        try {
          if (typeof clearTimeout === "function") {
            i = clearTimeout;
          } else {
            i = o;
          }
        } catch (t) {
          i = o;
        }
      })();
      function r(t) {
        if (s === setTimeout) {
          return setTimeout(t, 0);
        }
        if ((s === n || !s) && setTimeout) {
          s = setTimeout;
          return setTimeout(t, 0);
        }
        try {
          return s(t, 0);
        } catch (e) {
          try {
            return s.call(null, t, 0);
          } catch (e) {
            return s.call(this, t, 0);
          }
        }
      }
      function l(t) {
        if (i === clearTimeout) {
          return clearTimeout(t);
        }
        if ((i === o || !i) && clearTimeout) {
          i = clearTimeout;
          return clearTimeout(t);
        }
        try {
          return i(t);
        } catch (e) {
          try {
            return i.call(null, t);
          } catch (e) {
            return i.call(this, t);
          }
        }
      }
      var a = [];
      var h = false;
      var c;
      var f = -1;
      function u() {
        if (!h || !c) {
          return;
        }
        h = false;
        if (c.length) {
          a = c.concat(a);
        } else {
          f = -1;
        }
        if (a.length) {
          p();
        }
      }
      function p() {
        if (h) {
          return;
        }
        var t = r(u);
        h = true;
        var e = a.length;
        while (e) {
          c = a;
          a = [];
          while (++f < e) {
            if (c) {
              c[f].run();
            }
          }
          f = -1;
          e = a.length;
        }
        c = null;
        h = false;
        l(t);
      }
      e.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var s = 1; s < arguments.length; s++) {
            e[s - 1] = arguments[s];
          }
        }
        a.push(new d(t, e));
        if (a.length === 1 && !h) {
          r(p);
        }
      };
      function d(t, e) {
        this.fun = t;
        this.array = e;
      }
      d.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      e.title = "browser";
      e.browser = true;
      e.env = {};
      e.argv = [];
      e.version = "";
      e.versions = {};
      function m() {}
      e.on = m;
      e.addListener = m;
      e.once = m;
      e.off = m;
      e.removeListener = m;
      e.removeAllListeners = m;
      e.emit = m;
      e.prependListener = m;
      e.prependOnceListener = m;
      e.listeners = function (t) {
        return [];
      };
      e.binding = function (t) {
        throw new Error("process.binding is not supported");
      };
      e.cwd = function () {
        return "/";
      };
      e.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      };
      e.umask = function () {
        return 0;
      };
    },
  },
]);
