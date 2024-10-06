"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [9653],
  {
    79653: (t, e, a) => {
      a.r(e);
      a.d(e, {
        Tag: () => s,
        classHighlighter: () => K,
        getStyleTags: () => y,
        highlightCode: () => k,
        highlightTree: () => u,
        styleTags: () => g,
        tagHighlighter: () => p,
        tags: () => I,
      });
      var i = a(73265);
      var r = a.n(i);
      let o = 0;
      class s {
        constructor(t, e, a) {
          this.set = t;
          this.base = e;
          this.modified = a;
          this.id = o++;
        }
        static define(t) {
          if (t === null || t === void 0 ? void 0 : t.base) throw new Error("Can not derive from a modified tag");
          let e = new s([], null, []);
          e.set.push(e);
          if (t) for (let a of t.set) e.set.push(a);
          return e;
        }
        static defineModifier() {
          let t = new l();
          return (e) => {
            if (e.modified.indexOf(t) > -1) return e;
            return l.get(
              e.base || e,
              e.modified.concat(t).sort((t, e) => t.id - e.id)
            );
          };
        }
      }
      let n = 0;
      class l {
        constructor() {
          this.instances = [];
          this.id = n++;
        }
        static get(t, e) {
          if (!e.length) return t;
          let a = e[0].instances.find((a) => a.base == t && c(e, a.modified));
          if (a) return a;
          let i = [],
            r = new s(i, t, e);
          for (let s of e) s.instances.push(r);
          let o = h(e);
          for (let s of t.set) if (!s.modified.length) for (let t of o) i.push(l.get(s, t));
          return r;
        }
      }
      function c(t, e) {
        return t.length == e.length && t.every((t, a) => t == e[a]);
      }
      function h(t) {
        let e = [[]];
        for (let a = 0; a < t.length; a++) {
          for (let i = 0, r = e.length; i < r; i++) {
            e.push(e[i].concat(t[a]));
          }
        }
        return e.sort((t, e) => e.length - t.length);
      }
      function g(t) {
        let e = Object.create(null);
        for (let a in t) {
          let i = t[a];
          if (!Array.isArray(i)) i = [i];
          for (let t of a.split(" "))
            if (t) {
              let a = [],
                r = 2,
                o = t;
              for (let e = 0; ; ) {
                if (o == "..." && e > 0 && e + 3 == t.length) {
                  r = 1;
                  break;
                }
                let i = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(o);
                if (!i) throw new RangeError("Invalid path: " + t);
                a.push(i[0] == "*" ? "" : i[0][0] == '"' ? JSON.parse(i[0]) : i[0]);
                e += i[0].length;
                if (e == t.length) break;
                let s = t[e++];
                if (e == t.length && s == "!") {
                  r = 0;
                  break;
                }
                if (s != "/") throw new RangeError("Invalid path: " + t);
                o = t.slice(e);
              }
              let s = a.length - 1,
                n = a[s];
              if (!n) throw new RangeError("Invalid path: " + t);
              let l = new d(i, r, s > 0 ? a.slice(0, s) : null);
              e[n] = l.sort(e[n]);
            }
        }
        return f.add(e);
      }
      const f = new i.NodeProp();
      class d {
        constructor(t, e, a, i) {
          this.tags = t;
          this.mode = e;
          this.context = a;
          this.next = i;
        }
        get opaque() {
          return this.mode == 0;
        }
        get inherit() {
          return this.mode == 1;
        }
        sort(t) {
          if (!t || t.depth < this.depth) {
            this.next = t;
            return this;
          }
          t.next = this.sort(t.next);
          return t;
        }
        get depth() {
          return this.context ? this.context.length : 0;
        }
      }
      d.empty = new d([], 2, null);
      function p(t, e) {
        let a = Object.create(null);
        for (let o of t) {
          if (!Array.isArray(o.tag)) a[o.tag.id] = o.class;
          else for (let t of o.tag) a[t.id] = o.class;
        }
        let { scope: i, all: r = null } = e || {};
        return {
          style: (t) => {
            let e = r;
            for (let i of t) {
              for (let t of i.set) {
                let i = a[t.id];
                if (i) {
                  e = e ? e + " " + i : i;
                  break;
                }
              }
            }
            return e;
          },
          scope: i,
        };
      }
      function m(t, e) {
        let a = null;
        for (let i of t) {
          let t = i.style(e);
          if (t) a = a ? a + " " + t : t;
        }
        return a;
      }
      function u(t, e, a, i = 0, r = t.length) {
        let o = new b(i, Array.isArray(e) ? e : [e], a);
        o.highlightRange(t.cursor(), i, r, "", o.highlighters);
        o.flush(r);
      }
      function k(t, e, a, i, r, o = 0, s = t.length) {
        let n = o;
        function l(e, a) {
          if (e <= n) return;
          for (let o = t.slice(n, e), s = 0; ; ) {
            let t = o.indexOf("\n", s);
            let e = t < 0 ? o.length : t;
            if (e > s) i(o.slice(s, e), a);
            if (t < 0) break;
            r();
            s = t + 1;
          }
          n = e;
        }
        u(
          e,
          a,
          (t, e, a) => {
            l(t, "");
            l(e, a);
          },
          o,
          s
        );
        l(s, "");
      }
      class b {
        constructor(t, e, a) {
          this.at = t;
          this.highlighters = e;
          this.span = a;
          this.class = "";
        }
        startSpan(t, e) {
          if (e != this.class) {
            this.flush(t);
            if (t > this.at) this.at = t;
            this.class = e;
          }
        }
        flush(t) {
          if (t > this.at && this.class) this.span(this.at, t, this.class);
        }
        highlightRange(t, e, a, r, o) {
          let { type: s, from: n, to: l } = t;
          if (n >= a || l <= e) return;
          if (s.isTop) o = this.highlighters.filter((t) => !t.scope || t.scope(s));
          let c = r;
          let h = y(t) || d.empty;
          let g = m(o, h.tags);
          if (g) {
            if (c) c += " ";
            c += g;
            if (h.mode == 1) r += (r ? " " : "") + g;
          }
          this.startSpan(Math.max(e, n), c);
          if (h.opaque) return;
          let f = t.tree && t.tree.prop(i.NodeProp.mounted);
          if (f && f.overlay) {
            let i = t.node.enter(f.overlay[0].from + n, 1);
            let s = this.highlighters.filter((t) => !t.scope || t.scope(f.tree.type));
            let h = t.firstChild();
            for (let g = 0, d = n; ; g++) {
              let p = g < f.overlay.length ? f.overlay[g] : null;
              let m = p ? p.from + n : l;
              let u = Math.max(e, d),
                k = Math.min(a, m);
              if (u < k && h) {
                while (t.from < k) {
                  this.highlightRange(t, u, k, r, o);
                  this.startSpan(Math.min(k, t.to), c);
                  if (t.to >= m || !t.nextSibling()) break;
                }
              }
              if (!p || m > a) break;
              d = p.to + n;
              if (d > e) {
                this.highlightRange(i.cursor(), Math.max(e, p.from + n), Math.min(a, d), "", s);
                this.startSpan(Math.min(a, d), c);
              }
            }
            if (h) t.parent();
          } else if (t.firstChild()) {
            if (f) r = "";
            do {
              if (t.to <= e) continue;
              if (t.from >= a) break;
              this.highlightRange(t, e, a, r, o);
              this.startSpan(Math.min(a, t.to), c);
            } while (t.nextSibling());
            t.parent();
          }
        }
      }
      function y(t) {
        let e = t.type.prop(f);
        while (e && e.context && !t.matchContext(e.context)) e = e.next;
        return e || null;
      }
      const N = s.define;
      const w = N(),
        v = N(),
        x = N(v),
        M = N(v),
        O = N(),
        S = N(O),
        C = N(O),
        R = N(),
        A = N(R),
        _ = N(),
        T = N(),
        j = N(),
        q = N(j),
        E = N();
      const I = {
        comment: w,
        lineComment: N(w),
        blockComment: N(w),
        docComment: N(w),
        name: v,
        variableName: N(v),
        typeName: x,
        tagName: N(x),
        propertyName: M,
        attributeName: N(M),
        className: N(v),
        labelName: N(v),
        namespace: N(v),
        macroName: N(v),
        literal: O,
        string: S,
        docString: N(S),
        character: N(S),
        attributeValue: N(S),
        number: C,
        integer: N(C),
        float: N(C),
        bool: N(O),
        regexp: N(O),
        escape: N(O),
        color: N(O),
        url: N(O),
        keyword: _,
        self: N(_),
        null: N(_),
        atom: N(_),
        unit: N(_),
        modifier: N(_),
        operatorKeyword: N(_),
        controlKeyword: N(_),
        definitionKeyword: N(_),
        moduleKeyword: N(_),
        operator: T,
        derefOperator: N(T),
        arithmeticOperator: N(T),
        logicOperator: N(T),
        bitwiseOperator: N(T),
        compareOperator: N(T),
        updateOperator: N(T),
        definitionOperator: N(T),
        typeOperator: N(T),
        controlOperator: N(T),
        punctuation: j,
        separator: N(j),
        bracket: q,
        angleBracket: N(q),
        squareBracket: N(q),
        paren: N(q),
        brace: N(q),
        content: R,
        heading: A,
        heading1: N(A),
        heading2: N(A),
        heading3: N(A),
        heading4: N(A),
        heading5: N(A),
        heading6: N(A),
        contentSeparator: N(R),
        list: N(R),
        quote: N(R),
        emphasis: N(R),
        strong: N(R),
        link: N(R),
        monospace: N(R),
        strikethrough: N(R),
        inserted: N(),
        deleted: N(),
        changed: N(),
        invalid: N(),
        meta: E,
        documentMeta: N(E),
        annotation: N(E),
        processingInstruction: N(E),
        definition: s.defineModifier(),
        constant: s.defineModifier(),
        function: s.defineModifier(),
        standard: s.defineModifier(),
        local: s.defineModifier(),
        special: s.defineModifier(),
      };
      const K = p([
        { tag: I.link, class: "tok-link" },
        { tag: I.heading, class: "tok-heading" },
        { tag: I.emphasis, class: "tok-emphasis" },
        { tag: I.strong, class: "tok-strong" },
        { tag: I.keyword, class: "tok-keyword" },
        { tag: I.atom, class: "tok-atom" },
        { tag: I.bool, class: "tok-bool" },
        { tag: I.url, class: "tok-url" },
        { tag: I.labelName, class: "tok-labelName" },
        { tag: I.inserted, class: "tok-inserted" },
        { tag: I.deleted, class: "tok-deleted" },
        { tag: I.literal, class: "tok-literal" },
        { tag: I.string, class: "tok-string" },
        { tag: I.number, class: "tok-number" },
        { tag: [I.regexp, I.escape, I.special(I.string)], class: "tok-string2" },
        { tag: I.variableName, class: "tok-variableName" },
        { tag: I.local(I.variableName), class: "tok-variableName tok-local" },
        { tag: I.definition(I.variableName), class: "tok-variableName tok-definition" },
        { tag: I.special(I.variableName), class: "tok-variableName2" },
        { tag: I.definition(I.propertyName), class: "tok-propertyName tok-definition" },
        { tag: I.typeName, class: "tok-typeName" },
        { tag: I.namespace, class: "tok-namespace" },
        { tag: I.className, class: "tok-className" },
        { tag: I.macroName, class: "tok-macroName" },
        { tag: I.propertyName, class: "tok-propertyName" },
        { tag: I.operator, class: "tok-operator" },
        { tag: I.comment, class: "tok-comment" },
        { tag: I.meta, class: "tok-meta" },
        { tag: I.invalid, class: "tok-invalid" },
        { tag: I.punctuation, class: "tok-punctuation" },
      ]);
    },
  },
]);
