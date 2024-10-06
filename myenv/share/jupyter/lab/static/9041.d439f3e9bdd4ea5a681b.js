"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [9041],
  {
    19041: (e, t, s) => {
      s.d(t, { pV: () => us });
      var i = s(73265);
      var n = s.n(i);
      var r = s(11705);
      var l = s(34155);
      class a {
        constructor(e) {
          this.start = e;
        }
      }
      class o extends a {
        constructor(e, t, s, i, n, r, l, a, o, u, h, f, c, p, d) {
          super(e);
          this.rules = t;
          this.topRules = s;
          this.tokens = i;
          this.localTokens = n;
          this.context = r;
          this.externalTokens = l;
          this.externalSpecializers = a;
          this.externalPropSources = o;
          this.precedences = u;
          this.mainSkip = h;
          this.scopedSkip = f;
          this.dialects = c;
          this.externalProps = p;
          this.autoDelim = d;
        }
        toString() {
          return Object.values(this.rules).join("\n");
        }
      }
      class u extends a {
        constructor(e, t, s, i, n) {
          super(e);
          this.id = t;
          this.props = s;
          this.params = i;
          this.expr = n;
        }
        toString() {
          return this.id.name + (this.params.length ? `<${this.params.join()}>` : "") + " -> " + this.expr;
        }
      }
      class h extends a {
        constructor(e, t) {
          super(e);
          this.items = t;
        }
      }
      class f extends a {
        constructor(e, t) {
          super(e);
          this.items = t;
        }
      }
      class c extends a {
        constructor(e, t, s) {
          super(e);
          this.a = t;
          this.b = s;
        }
      }
      class p extends a {
        constructor(e, t, s, i, n) {
          super(e);
          this.precedences = t;
          this.conflicts = s;
          this.rules = i;
          this.literals = n;
        }
      }
      class d extends a {
        constructor(e, t, s, i) {
          super(e);
          this.precedences = t;
          this.rules = s;
          this.fallback = i;
        }
      }
      class m extends a {
        constructor(e, t, s) {
          super(e);
          this.literal = t;
          this.props = s;
        }
      }
      class g extends a {
        constructor(e, t, s) {
          super(e);
          this.id = t;
          this.source = s;
        }
      }
      class k extends a {
        constructor(e, t, s, i) {
          super(e);
          this.id = t;
          this.source = s;
          this.tokens = i;
        }
      }
      class x extends a {
        constructor(e, t, s, i, n, r) {
          super(e);
          this.type = t;
          this.token = s;
          this.id = i;
          this.source = n;
          this.tokens = r;
        }
      }
      class b extends a {
        constructor(e, t, s) {
          super(e);
          this.id = t;
          this.source = s;
        }
      }
      class w extends a {
        constructor(e, t, s, i) {
          super(e);
          this.id = t;
          this.externalID = s;
          this.source = i;
        }
      }
      class y extends a {
        constructor(e, t) {
          super(e);
          this.name = t;
        }
        toString() {
          return this.name;
        }
      }
      class $ extends a {
        walk(e) {
          return e(this);
        }
        eq(e) {
          return false;
        }
      }
      $.prototype.prec = 10;
      class v extends $ {
        constructor(e, t, s) {
          super(e);
          this.id = t;
          this.args = s;
        }
        toString() {
          return this.id.name + (this.args.length ? `<${this.args.join()}>` : "");
        }
        eq(e) {
          return this.id.name == e.id.name && G(this.args, e.args);
        }
        walk(e) {
          let t = C(this.args, e);
          return e(t == this.args ? this : new v(this.start, this.id, t));
        }
      }
      class S extends $ {
        constructor(e, t, s, i, n) {
          super(e);
          this.type = t;
          this.props = s;
          this.token = i;
          this.content = n;
        }
        toString() {
          return `@${this.type}[${this.props.join(",")}]<${this.token}, ${this.content}>`;
        }
        eq(e) {
          return this.type == e.type && E.eqProps(this.props, e.props) && D(this.token, e.token) && D(this.content, e.content);
        }
        walk(e) {
          let t = this.token.walk(e),
            s = this.content.walk(e);
          return e(t == this.token && s == this.content ? this : new S(this.start, this.type, this.props, t, s));
        }
      }
      class T extends $ {
        constructor(e, t) {
          super(e);
          this.rule = t;
        }
        toString() {
          let e = this.rule;
          return `${e.id}${e.props.length ? `[${e.props.join(",")}]` : ""} { ${e.expr} }`;
        }
        eq(e) {
          let t = this.rule,
            s = e.rule;
          return D(t.expr, s.expr) && t.id.name == s.id.name && E.eqProps(t.props, s.props);
        }
        walk(e) {
          let t = this.rule,
            s = t.expr.walk(e);
          return e(s == t.expr ? this : new T(this.start, new u(t.start, t.id, t.props, [], s)));
        }
      }
      class R extends $ {
        constructor(e, t) {
          super(e);
          this.exprs = t;
        }
        toString() {
          return this.exprs.map((e) => _(e, this)).join(" | ");
        }
        eq(e) {
          return G(this.exprs, e.exprs);
        }
        walk(e) {
          let t = C(this.exprs, e);
          return e(t == this.exprs ? this : new R(this.start, t));
        }
      }
      R.prototype.prec = 1;
      class O extends $ {
        constructor(e, t, s, i = false) {
          super(e);
          this.exprs = t;
          this.markers = s;
          this.empty = i;
        }
        toString() {
          return this.empty ? "()" : this.exprs.map((e) => _(e, this)).join(" ");
        }
        eq(e) {
          return (
            G(this.exprs, e.exprs) &&
            this.markers.every((t, s) => {
              let i = e.markers[s];
              return t.length == i.length && t.every((e, t) => e.eq(i[t]));
            })
          );
        }
        walk(e) {
          let t = C(this.exprs, e);
          return e(t == this.exprs ? this : new O(this.start, t, this.markers, this.empty && !t.length));
        }
      }
      O.prototype.prec = 2;
      class P extends a {
        constructor(e, t, s) {
          super(e);
          this.id = t;
          this.type = s;
        }
        toString() {
          return (this.type == "ambig" ? "~" : "!") + this.id.name;
        }
        eq(e) {
          return this.id.name == e.id.name && this.type == e.type;
        }
      }
      class j extends $ {
        constructor(e, t, s) {
          super(e);
          this.expr = t;
          this.kind = s;
        }
        toString() {
          return _(this.expr, this) + this.kind;
        }
        eq(e) {
          return D(this.expr, e.expr) && this.kind == e.kind;
        }
        walk(e) {
          let t = this.expr.walk(e);
          return e(t == this.expr ? this : new j(this.start, t, this.kind));
        }
      }
      j.prototype.prec = 3;
      class N extends $ {
        constructor(e, t) {
          super(e);
          this.value = t;
        }
        toString() {
          return JSON.stringify(this.value);
        }
        eq(e) {
          return this.value == e.value;
        }
      }
      class A extends $ {
        constructor(e, t, s) {
          super(e);
          this.ranges = t;
          this.inverted = s;
        }
        toString() {
          return `[${this.inverted ? "^" : ""}${this.ranges.map(([e, t]) => String.fromCodePoint(e) + (t == e + 1 ? "" : "-" + String.fromCodePoint(t)))}]`;
        }
        eq(e) {
          return (
            this.inverted == e.inverted &&
            this.ranges.length == e.ranges.length &&
            this.ranges.every(([t, s], i) => {
              let [n, r] = e.ranges[i];
              return t == n && s == r;
            })
          );
        }
      }
      class z extends $ {
        constructor(e) {
          super(e);
        }
        toString() {
          return "_";
        }
        eq() {
          return true;
        }
      }
      function C(e, t) {
        let s = null;
        for (let i = 0; i < e.length; i++) {
          let n = e[i].walk(t);
          if (n != e[i] && !s) s = e.slice(0, i);
          if (s) s.push(n);
        }
        return s || e;
      }
      const I = {
        asciiLetter: [
          [65, 91],
          [97, 123],
        ],
        asciiLowercase: [[97, 123]],
        asciiUppercase: [[65, 91]],
        digit: [[48, 58]],
        whitespace: [
          [9, 14],
          [32, 33],
          [133, 134],
          [160, 161],
          [5760, 5761],
          [8192, 8203],
          [8232, 8234],
          [8239, 8240],
          [8287, 8288],
          [12288, 12289],
        ],
        eof: [[65535, 65535]],
      };
      class q extends $ {
        constructor(e, t) {
          super(e);
          this.type = t;
        }
        toString() {
          return "@" + this.type;
        }
        eq(e) {
          return this.type == e.type;
        }
      }
      function D(e, t) {
        return e.constructor == t.constructor && e.eq(t);
      }
      function G(e, t) {
        return e.length == t.length && e.every((e, s) => D(e, t[s]));
      }
      class E extends a {
        constructor(e, t, s, i) {
          super(e);
          this.at = t;
          this.name = s;
          this.value = i;
        }
        eq(e) {
          return (
            this.name == e.name &&
            this.value.length == e.value.length &&
            this.value.every((t, s) => t.value == e.value[s].value && t.name == e.value[s].name)
          );
        }
        toString() {
          let e = (this.at ? "@" : "") + this.name;
          if (this.value.length) {
            e += "=";
            for (let { name: t, value: s } of this.value) e += t ? `{${t}}` : /[^\w-]/.test(s) ? JSON.stringify(s) : s;
          }
          return e;
        }
        static eqProps(e, t) {
          return e.length == t.length && e.every((e, s) => e.eq(t[s]));
        }
      }
      class J extends a {
        constructor(e, t, s) {
          super(e);
          this.value = t;
          this.name = s;
        }
      }
      function _(e, t) {
        return e.prec < t.prec ? "(" + e.toString() + ")" : e.toString();
      }
      class B extends Error {}
      function U(e) {
        for (let t in e) return true;
        return false;
      }
      let M = 0;
      class F {
        constructor(e, t, s, i = {}) {
          this.name = e;
          this.flags = t;
          this.nodeName = s;
          this.props = i;
          this.hash = ++M;
          this.id = -1;
          this.rules = [];
        }
        toString() {
          return this.name;
        }
        get nodeType() {
          return this.top || this.nodeName != null || U(this.props) || this.repeated;
        }
        get terminal() {
          return (this.flags & 1) > 0;
        }
        get eof() {
          return (this.flags & 4) > 0;
        }
        get error() {
          return "error" in this.props;
        }
        get top() {
          return (this.flags & 2) > 0;
        }
        get interesting() {
          return this.flags > 0 || this.nodeName != null;
        }
        get repeated() {
          return (this.flags & 16) > 0;
        }
        set preserve(e) {
          this.flags = e ? this.flags | 8 : this.flags & ~8;
        }
        get preserve() {
          return (this.flags & 8) > 0;
        }
        set inline(e) {
          this.flags = e ? this.flags | 32 : this.flags & ~32;
        }
        get inline() {
          return (this.flags & 32) > 0;
        }
        cmp(e) {
          return this.hash - e.hash;
        }
      }
      class L {
        constructor() {
          this.terms = [];
          this.names = Object.create(null);
          this.tops = [];
          this.eof = this.term("␄", null, 1 | 4);
          this.error = this.term("⚠", "⚠", 8);
        }
        term(e, t, s = 0, i = {}) {
          let n = new F(e, s, t, i);
          this.terms.push(n);
          this.names[e] = n;
          return n;
        }
        makeTop(e, t) {
          const s = this.term("@top", e, 2, t);
          this.tops.push(s);
          return s;
        }
        makeTerminal(e, t, s = {}) {
          return this.term(e, t, 1, s);
        }
        makeNonTerminal(e, t, s = {}) {
          return this.term(e, t, 0, s);
        }
        makeRepeat(e) {
          return this.term(e, null, 16);
        }
        uniqueName(e) {
          for (let t = 0; ; t++) {
            let s = t ? `${e}-${t}` : e;
            if (!this.names[s]) return s;
          }
        }
        finish(e) {
          for (let r of e) r.name.rules.push(r);
          this.terms = this.terms.filter((t) => t.terminal || t.preserve || e.some((e) => e.name == t || e.parts.includes(t)));
          let t = {};
          let s = [this.error];
          this.error.id = 0;
          let i = 0 + 1;
          for (let r of this.terms)
            if (r.id < 0 && r.nodeType && !r.repeated) {
              r.id = i++;
              s.push(r);
            }
          let n = i;
          for (let r of this.terms)
            if (r.repeated) {
              r.id = i++;
              s.push(r);
            }
          this.eof.id = i++;
          for (let r of this.terms) {
            if (r.id < 0) r.id = i++;
            if (r.name) t[r.id] = r.name;
          }
          if (i >= 65534) throw new B("Too many terms");
          return { nodeTypes: s, names: t, minRepeatTerm: n, maxTerm: i - 1 };
        }
      }
      function W(e, t, s) {
        if (e.length != t.length) return e.length - t.length;
        for (let i = 0; i < e.length; i++) {
          let n = s(e[i], t[i]);
          if (n) return n;
        }
        return 0;
      }
      const Q = [];
      class V {
        constructor(e, t = Q, s = 0) {
          this.precedence = e;
          this.ambigGroups = t;
          this.cut = s;
        }
        join(e) {
          if (this == V.none || this == e) return e;
          if (e == V.none) return this;
          return new V(Math.max(this.precedence, e.precedence), Y(this.ambigGroups, e.ambigGroups), Math.max(this.cut, e.cut));
        }
        cmp(e) {
          return this.precedence - e.precedence || W(this.ambigGroups, e.ambigGroups, (e, t) => (e < t ? -1 : e > t ? 1 : 0)) || this.cut - e.cut;
        }
      }
      V.none = new V(0);
      function Y(e, t) {
        if (e.length == 0 || e == t) return t;
        if (t.length == 0) return e;
        let s = e.slice();
        for (let i of t) if (!e.includes(i)) s.push(i);
        return s.sort();
      }
      let Z = 0;
      class H {
        constructor(e, t, s, i) {
          this.name = e;
          this.parts = t;
          this.conflicts = s;
          this.skip = i;
          this.id = Z++;
        }
        cmp(e) {
          return this.id - e.id;
        }
        cmpNoName(e) {
          return (
            this.parts.length - e.parts.length ||
            this.skip.hash - e.skip.hash ||
            this.parts.reduce((t, s, i) => t || s.cmp(e.parts[i]), 0) ||
            W(this.conflicts, e.conflicts, (e, t) => e.cmp(t))
          );
        }
        toString() {
          return this.name + " -> " + this.parts.join(" ");
        }
        get isRepeatWrap() {
          return this.name.repeated && this.parts.length == 2 && this.parts[0] == this.name;
        }
        sameReduce(e) {
          return this.name == e.name && this.parts.length == e.parts.length && this.isRepeatWrap == e.isRepeatWrap;
        }
      }
      const K = 65535;
      class X {
        constructor(e, t, s) {
          this.from = e;
          this.to = t;
          this.target = s;
        }
        toString() {
          return `-> ${this.target.id}[label=${JSON.stringify(this.from < 0 ? "ε" : ee(this.from) + (this.to > this.from + 1 ? "-" + ee(this.to - 1) : ""))}]`;
        }
      }
      function ee(e) {
        return e > K
          ? "∞"
          : e == 10
            ? "\\n"
            : e == 13
              ? "\\r"
              : e < 32 || (e >= 55296 && e < 57343)
                ? "\\u{" + e.toString(16) + "}"
                : String.fromCharCode(e);
      }
      function te(e, t) {
        let s = Object.create(null);
        let i = Object.create(null);
        for (let n of e) {
          let e = oe(n.accepting);
          let t = i[e] || (i[e] = []);
          t.push(n);
          s[n.id] = t;
        }
        for (;;) {
          let i = false,
            n = Object.create(null);
          for (let t of e) {
            if (n[t.id]) continue;
            let e = s[t.id];
            if (e.length == 1) {
              n[e[0].id] = e;
              continue;
            }
            let r = [];
            e: for (let t of e) {
              for (let e of r) {
                if (se(t, e[0], s)) {
                  e.push(t);
                  continue e;
                }
              }
              r.push([t]);
            }
            if (r.length > 1) i = true;
            for (let t of r) for (let e of t) n[e.id] = t;
          }
          if (!i) return ie(e, t, s);
          s = n;
        }
      }
      function se(e, t, s) {
        if (e.edges.length != t.edges.length) return false;
        for (let i = 0; i < e.edges.length; i++) {
          let n = e.edges[i],
            r = t.edges[i];
          if (n.from != r.from || n.to != r.to || s[n.target.id] != s[r.target.id]) return false;
        }
        return true;
      }
      function ie(e, t, s) {
        for (let i of e) {
          for (let e = 0; e < i.edges.length; e++) {
            let t = i.edges[e],
              n = s[t.target.id][0];
            if (n != t.target) i.edges[e] = new X(t.from, t.to, n);
          }
        }
        return s[t.id][0];
      }
      let ne = 1;
      let re = class e {
        constructor(e = [], t = ne++) {
          this.accepting = e;
          this.id = t;
          this.edges = [];
        }
        edge(e, t, s) {
          this.edges.push(new X(e, t, s));
        }
        nullEdge(e) {
          this.edge(-1, -1, e);
        }
        compile() {
          let t = Object.create(null),
            s = 0;
          let i = n(this.closure().sort((e, t) => e.id - t.id));
          return te(Object.values(t), i);
          function n(i) {
            let r = (t[oe(i)] = new e(
              i.reduce((e, t) => Y(e, t.accepting), []),
              s++
            ));
            let l = [];
            for (let e of i)
              for (let t of e.edges) {
                if (t.from >= 0) l.push(t);
              }
            let a = fe(l);
            for (let e of a) {
              let s = e.targets.sort((e, t) => e.id - t.id);
              r.edge(e.from, e.to, t[oe(s)] || n(s));
            }
            return r;
          }
        }
        closure() {
          let e = [],
            t = Object.create(null);
          function s(i) {
            if (t[i.id]) return;
            t[i.id] = true;
            if (i.edges.some((e) => e.from >= 0) || (i.accepting.length > 0 && !i.edges.some((e) => ue(i.accepting, e.target.accepting)))) e.push(i);
            for (let e of i.edges) if (e.from < 0) s(e.target);
          }
          s(this);
          return e;
        }
        findConflicts(e) {
          let t = [],
            s = this.cycleTerms();
          function i(e, s, i, n, r) {
            if (e.id < s.id) {
              [e, s] = [s, e];
              i = -i;
            }
            let l = t.find((t) => t.a == e && t.b == s);
            if (!l) t.push(new le(e, s, i, ae(n), r && ae(r)));
            else if (l.soft != i) l.soft = 0;
          }
          this.reachable((t, n) => {
            if (t.accepting.length == 0) return;
            for (let e = 0; e < t.accepting.length; e++) for (let s = e + 1; s < t.accepting.length; s++) i(t.accepting[e], t.accepting[s], 0, n);
            t.reachable((r, l) => {
              if (r != t)
                for (let a of r.accepting) {
                  let r = s.includes(a);
                  for (let o of t.accepting) if (a != o) i(a, o, r || s.includes(o) || !e(a, o) ? 0 : 1, n, n.concat(l));
                }
            });
          });
          return t;
        }
        cycleTerms() {
          let e = [];
          this.reachable((t) => {
            for (let { target: s } of t.edges) e.push(t, s);
          });
          let t = new Map();
          let s = [];
          for (let n = 0; n < e.length; ) {
            let i = e[n++],
              r = e[n++];
            let l = t.get(i);
            if (!l) t.set(i, (l = []));
            if (l.includes(r)) continue;
            if (i == r) {
              if (!s.includes(i)) s.push(i);
            } else {
              for (let t of l) e.push(i, t);
              l.push(r);
            }
          }
          let i = [];
          for (let n of s) {
            for (let e of n.accepting) {
              if (!i.includes(e)) i.push(e);
            }
          }
          return i;
        }
        reachable(e) {
          let t = [],
            s = [];
          (function i(n) {
            e(n, s);
            t.push(n);
            for (let e of n.edges)
              if (!t.includes(e.target)) {
                s.push(e);
                i(e.target);
                s.pop();
              }
          })(this);
        }
        toString() {
          let e = "digraph {\n";
          this.reachable((t) => {
            if (t.accepting.length) e += `  ${t.id} [label=${JSON.stringify(t.accepting.join())}];\n`;
            for (let s of t.edges) e += `  ${t.id} ${s};\n`;
          });
          return e + "}";
        }
        toArray(e, t) {
          let s = [];
          let i = [];
          this.reachable((n) => {
            let r = i.length;
            let l = r + 3 + n.accepting.length * 2;
            s[n.id] = r;
            i.push(n.stateMask(e), l, n.edges.length);
            n.accepting.sort((e, s) => t.indexOf(e.id) - t.indexOf(s.id));
            for (let t of n.accepting) i.push(t.id, e[t.id] || 65535);
            for (let e of n.edges) i.push(e.from, e.to, -e.target.id - 1);
          });
          for (let n = 0; n < i.length; n++) if (i[n] < 0) i[n] = s[-i[n] - 1];
          if (i.length > Math.pow(2, 16)) throw new B("Tokenizer tables too big to represent with 16-bit offsets.");
          return Uint16Array.from(i);
        }
        stateMask(e) {
          let t = 0;
          this.reachable((s) => {
            for (let i of s.accepting) t |= e[i.id] || 65535;
          });
          return t;
        }
      };
      let le = class e {
        constructor(e, t, s, i, n) {
          this.a = e;
          this.b = t;
          this.soft = s;
          this.exampleA = i;
          this.exampleB = n;
        }
      };
      function ae(e) {
        let t = "";
        for (let s = 0; s < e.length; s++) t += String.fromCharCode(e[s].from);
        return t;
      }
      function oe(e) {
        let t = "";
        for (let s of e) {
          if (t.length) t += "-";
          t += s.id;
        }
        return t;
      }
      function ue(e, t) {
        if (e.length != t.length) return false;
        for (let s = 0; s < e.length; s++) if (e[s] != t[s]) return false;
        return true;
      }
      class he {
        constructor(e, t, s) {
          this.from = e;
          this.to = t;
          this.targets = s;
        }
      }
      function fe(e) {
        let t = [],
          s = [];
        for (let n of e) {
          if (!t.includes(n.from)) t.push(n.from);
          if (!t.includes(n.to)) t.push(n.to);
        }
        t.sort((e, t) => e - t);
        for (let n = 1; n < t.length; n++) {
          let i = t[n - 1],
            r = t[n];
          let l = [];
          for (let t of e)
            if (t.to > i && t.from < r) {
              for (let e of t.target.closure()) if (!l.includes(e)) l.push(e);
            }
          if (l.length) s.push(new he(i, r, l));
        }
        let i = e.filter((e) => e.from == 65535 && e.to == 65535);
        if (i.length) {
          let e = [];
          for (let t of i) for (let s of t.target.closure()) if (!e.includes(s)) e.push(s);
          if (e.length) s.push(new he(65535, 65535, e));
        }
        return s;
      }
      let ce = /[\w_-]+/gy;
      try {
        ce = /[\p{Alphabetic}\d_-]+/guy;
      } catch (ds) {}
      const pe = [];
      class de {
        constructor(e, t = null) {
          this.string = e;
          this.fileName = t;
          this.type = "sof";
          this.value = null;
          this.start = 0;
          this.end = 0;
          this.next();
        }
        lineInfo(e) {
          for (let t = 1, s = 0; ; ) {
            let i = this.string.indexOf("\n", s);
            if (i > -1 && i < e) {
              ++t;
              s = i + 1;
            } else {
              return { line: t, ch: e - s };
            }
          }
        }
        message(e, t = -1) {
          let s = this.fileName || "";
          if (t > -1) {
            let e = this.lineInfo(t);
            s += (s ? " " : "") + e.line + ":" + e.ch;
          }
          return s ? e + ` (${s})` : e;
        }
        raise(e, t = -1) {
          throw new B(this.message(e, t));
        }
        match(e, t) {
          let s = t.exec(this.string.slice(e));
          return s ? e + s[0].length : -1;
        }
        next() {
          let e = this.match(this.end, /^(\s|\/\/.*|\/\*[^]*?\*\/)*/);
          if (e == this.string.length) return this.set("eof", null, e, e);
          let t = this.string[e];
          if (t == '"') {
            let t = this.match(e + 1, /^(\\.|[^"\\])*"/);
            if (t == -1) this.raise("Unterminated string literal", e);
            return this.set("string", Je(this.string.slice(e + 1, t - 1)), e, t);
          } else if (t == "'") {
            let t = this.match(e + 1, /^(\\.|[^'\\])*'/);
            if (t == -1) this.raise("Unterminated string literal", e);
            return this.set("string", Je(this.string.slice(e + 1, t - 1)), e, t);
          } else if (t == "@") {
            ce.lastIndex = e + 1;
            let t = ce.exec(this.string);
            if (!t) return this.raise("@ without a name", e);
            return this.set("at", t[0], e, e + 1 + t[0].length);
          } else if ((t == "$" || t == "!") && this.string[e + 1] == "[") {
            let t = this.match(e + 2, /^(?:\\.|[^\]\\])*\]/);
            if (t == -1) this.raise("Unterminated character set", e);
            return this.set("set", this.string.slice(e + 2, t - 1), e, t);
          } else if (/[\[\]()!~+*?{}<>\.,|:$=]/.test(t)) {
            return this.set(t, null, e, e + 1);
          } else {
            ce.lastIndex = e;
            let s = ce.exec(this.string);
            if (!s) return this.raise("Unexpected character " + JSON.stringify(t), e);
            return this.set("id", s[0], e, e + s[0].length);
          }
        }
        set(e, t, s, i) {
          this.type = e;
          this.value = t;
          this.start = s;
          this.end = i;
        }
        eat(e, t = null) {
          if (this.type == e && (t == null || this.value === t)) {
            this.next();
            return true;
          } else {
            return false;
          }
        }
        unexpected() {
          return this.raise(`Unexpected token '${this.string.slice(this.start, this.end)}'`, this.start);
        }
        expect(e, t = null) {
          let s = this.value;
          if (this.type != e || !(t == null || s === t)) this.unexpected();
          this.next();
          return s;
        }
        parse() {
          return me(this);
        }
      }
      function me(e) {
        let t = e.start;
        let s = [];
        let i = null;
        let n = null;
        let r = [];
        let l = null;
        let a = [];
        let u = [];
        let h = null;
        let f = [];
        let c = [];
        let p = [];
        let d = [];
        let m = [];
        let k = false;
        let x = false;
        while (e.type != "eof") {
          let t = e.start;
          if (e.eat("at", "top")) {
            if (e.type != "id") e.raise(`Top rules must have a name`, e.start);
            m.push(ge(e, Pe(e)));
            k = true;
          } else if (e.type == "at" && e.value == "tokens") {
            if (n) e.raise(`Multiple @tokens declaractions`, e.start);
            else n = Ne(e);
          } else if (e.eat("at", "local")) {
            e.expect("id", "tokens");
            r.push(Ae(e, t));
          } else if (e.eat("at", "context")) {
            if (h) e.raise(`Multiple @context declarations`, t);
            let s = Pe(e);
            e.expect("id", "from");
            let i = e.expect("string");
            h = new g(t, s, i);
          } else if (e.eat("at", "external")) {
            if (e.eat("id", "tokens")) f.push(qe(e, t));
            else if (e.eat("id", "prop")) p.push(Ee(e, t));
            else if (e.eat("id", "extend")) c.push(De(e, "extend", t));
            else if (e.eat("id", "specialize")) c.push(De(e, "specialize", t));
            else if (e.eat("id", "propSource")) d.push(Ge(e, t));
            else e.unexpected();
          } else if (e.eat("at", "dialects")) {
            e.expect("{");
            for (let t = true; !e.eat("}"); t = false) {
              if (!t) e.eat(",");
              u.push(Pe(e));
            }
          } else if (e.type == "at" && e.value == "precedence") {
            if (i) e.raise(`Multiple precedence declarations`, e.start);
            i = je(e);
          } else if (e.eat("at", "detectDelim")) {
            x = true;
          } else if (e.eat("at", "skip")) {
            let t = be(e);
            if (e.type == "{") {
              e.next();
              let s = [],
                i = [];
              while (!e.eat("}")) {
                if (e.eat("at", "top")) {
                  i.push(ge(e, Pe(e)));
                  k = true;
                } else {
                  s.push(ge(e));
                }
              }
              a.push({ expr: t, topRules: i, rules: s });
            } else {
              if (l) e.raise(`Multiple top-level skip declarations`, e.start);
              l = t;
            }
          } else {
            s.push(ge(e));
          }
        }
        if (!k) return e.raise(`Missing @top declaration`);
        return new o(t, s, m, n, r, h, f, c, d, i, l, a, u, p, x);
      }
      function ge(e, t) {
        let s = t ? t.start : e.start;
        let i = t || Pe(e);
        let n = ke(e);
        let r = [];
        if (e.eat("<"))
          while (!e.eat(">")) {
            if (r.length) e.expect(",");
            r.push(Pe(e));
          }
        let l = be(e);
        return new u(s, i, n, r, l);
      }
      function ke(e) {
        if (e.type != "[") return pe;
        let t = [];
        e.expect("[");
        while (!e.eat("]")) {
          if (t.length) e.expect(",");
          t.push(xe(e));
        }
        return t;
      }
      function xe(e) {
        let t = e.start,
          s = [],
          i = e.value,
          n = e.type == "at";
        if (!e.eat("at") && !e.eat("id")) e.unexpected();
        if (e.eat("="))
          for (;;) {
            if (e.type == "string" || e.type == "id") {
              s.push(new J(e.start, e.value, null));
              e.next();
            } else if (e.eat(".")) {
              s.push(new J(e.start, ".", null));
            } else if (e.eat("{")) {
              s.push(new J(e.start, null, e.expect("id")));
              e.expect("}");
            } else {
              break;
            }
          }
        return new E(t, n, i, s);
      }
      function be(e) {
        e.expect("{");
        let t = Oe(e);
        e.expect("}");
        return t;
      }
      const we = "﷚";
      function ye(e) {
        let t = e.start;
        if (e.eat("(")) {
          if (e.eat(")")) return new O(t, pe, [pe, pe]);
          let s = Oe(e);
          e.expect(")");
          return s;
        } else if (e.type == "string") {
          let s = e.value;
          e.next();
          if (s.length == 0) return new O(t, pe, [pe, pe]);
          return new N(t, s);
        } else if (e.eat("id", "_")) {
          return new z(t);
        } else if (e.type == "set") {
          let s = e.value,
            i = e.string[e.start] == "!";
          let n = Je(s.replace(/\\.|-|"/g, (e) => (e == "-" ? we : e == '"' ? '\\"' : e)));
          let r = [];
          for (let t = 0; t < n.length; ) {
            let s = n.codePointAt(t);
            t += s > 65535 ? 2 : 1;
            if (t < n.length - 1 && n[t] == we) {
              let i = n.codePointAt(t + 1);
              t += i > 65535 ? 3 : 2;
              if (i < s) e.raise("Invalid character range", e.start);
              ve(e, r, s, i + 1);
            } else {
              if (s == we.charCodeAt(0)) s = 45;
              ve(e, r, s, s + 1);
            }
          }
          e.next();
          return new A(
            t,
            r.sort((e, t) => e[0] - t[0]),
            i
          );
        } else if (e.type == "at" && (e.value == "specialize" || e.value == "extend")) {
          let { start: t, value: s } = e;
          e.next();
          let i = ke(e);
          e.expect("<");
          let n = Oe(e),
            r;
          if (e.eat(",")) {
            r = Oe(e);
          } else if (n instanceof N) {
            r = n;
          } else {
            e.raise(`@${s} requires two arguments when its first argument isn't a literal string`);
          }
          e.expect(">");
          return new S(t, s, i, n, r);
        } else if (e.type == "at" && I.hasOwnProperty(e.value)) {
          let t = new q(e.start, e.value);
          e.next();
          return t;
        } else if (e.type == "[") {
          let s = ge(e, new y(t, "_anon"));
          if (s.params.length) e.raise(`Inline rules can't have parameters`, s.start);
          return new T(t, s);
        } else {
          let s = Pe(e);
          if (e.type == "[" || e.type == "{") {
            let i = ge(e, s);
            if (i.params.length) e.raise(`Inline rules can't have parameters`, i.start);
            return new T(t, i);
          } else {
            if (e.eat(".") && s.name == "std" && I.hasOwnProperty(e.value)) {
              let s = new q(t, e.value);
              e.next();
              return s;
            }
            return new v(t, s, $e(e));
          }
        }
      }
      function $e(e) {
        let t = [];
        if (e.eat("<"))
          while (!e.eat(">")) {
            if (t.length) e.expect(",");
            t.push(Oe(e));
          }
        return t;
      }
      function ve(e, t, s, i) {
        if (!t.every(([e, t]) => t <= s || e >= i)) e.raise("Overlapping character range", e.start);
        t.push([s, i]);
      }
      function Se(e) {
        let t = e.start;
        let s = ye(e);
        for (;;) {
          let i = e.type;
          if (e.eat("*") || e.eat("?") || e.eat("+")) s = new j(t, s, i);
          else return s;
        }
      }
      function Te(e) {
        return e.type == "}" || e.type == ")" || e.type == "|" || e.type == "/" || e.type == "/\\" || e.type == "{" || e.type == "," || e.type == ">";
      }
      function Re(e) {
        let t = e.start,
          s = [],
          i = [pe];
        do {
          for (;;) {
            let t = e.start,
              s;
            if (e.eat("~")) s = "ambig";
            else if (e.eat("!")) s = "prec";
            else break;
            i[i.length - 1] = i[i.length - 1].concat(new P(t, Pe(e), s));
          }
          if (Te(e)) break;
          s.push(Se(e));
          i.push(pe);
        } while (!Te(e));
        if (s.length == 1 && i.every((e) => e.length == 0)) return s[0];
        return new O(t, s, i, !s.length);
      }
      function Oe(e) {
        let t = e.start,
          s = Re(e);
        if (!e.eat("|")) return s;
        let i = [s];
        do {
          i.push(Re(e));
        } while (e.eat("|"));
        let n = i.find((e) => e instanceof O && e.empty);
        if (n) e.raise("Empty expression in choice operator. If this is intentional, use () to make it explicit.", n.start);
        return new R(t, i);
      }
      function Pe(e) {
        if (e.type != "id") e.unexpected();
        let t = e.start,
          s = e.value;
        e.next();
        return new y(t, s);
      }
      function je(e) {
        let t = e.start;
        e.next();
        e.expect("{");
        let s = [];
        while (!e.eat("}")) {
          if (s.length) e.eat(",");
          s.push({ id: Pe(e), type: e.eat("at", "left") ? "left" : e.eat("at", "right") ? "right" : e.eat("at", "cut") ? "cut" : null });
        }
        return new h(t, s);
      }
      function Ne(e) {
        let t = e.start;
        e.next();
        e.expect("{");
        let s = [];
        let i = [];
        let n = [];
        let r = [];
        while (!e.eat("}")) {
          if (e.type == "at" && e.value == "precedence") {
            n.push(ze(e));
          } else if (e.type == "at" && e.value == "conflict") {
            r.push(Ce(e));
          } else if (e.type == "string") {
            i.push(new m(e.start, e.expect("string"), ke(e)));
          } else {
            s.push(ge(e));
          }
        }
        return new p(t, n, r, s, i);
      }
      function Ae(e, t) {
        e.expect("{");
        let s = [];
        let i = [];
        let n = null;
        while (!e.eat("}")) {
          if (e.type == "at" && e.value == "precedence") {
            i.push(ze(e));
          } else if (e.eat("at", "else") && !n) {
            n = { id: Pe(e), props: ke(e) };
          } else {
            s.push(ge(e));
          }
        }
        return new d(t, i, s, n);
      }
      function ze(e) {
        let t = e.start;
        e.next();
        e.expect("{");
        let s = [];
        while (!e.eat("}")) {
          if (s.length) e.eat(",");
          let t = ye(e);
          if (t instanceof N || t instanceof v) s.push(t);
          else e.raise(`Invalid expression in token precedences`, t.start);
        }
        return new f(t, s);
      }
      function Ce(e) {
        let t = e.start;
        e.next();
        e.expect("{");
        let s = ye(e);
        if (!(s instanceof N || s instanceof v)) e.raise(`Invalid expression in token conflict`, s.start);
        e.eat(",");
        let i = ye(e);
        if (!(i instanceof N || i instanceof v)) e.raise(`Invalid expression in token conflict`, i.start);
        e.expect("}");
        return new c(t, s, i);
      }
      function Ie(e) {
        let t = [];
        e.expect("{");
        while (!e.eat("}")) {
          if (t.length) e.eat(",");
          let s = Pe(e);
          let i = ke(e);
          t.push({ id: s, props: i });
        }
        return t;
      }
      function qe(e, t) {
        let s = Pe(e);
        e.expect("id", "from");
        let i = e.expect("string");
        return new k(t, s, i, Ie(e));
      }
      function De(e, t, s) {
        let i = be(e);
        let n = Pe(e);
        e.expect("id", "from");
        let r = e.expect("string");
        return new x(s, t, i, n, r, Ie(e));
      }
      function Ge(e, t) {
        let s = Pe(e);
        e.expect("id", "from");
        return new b(t, s, e.expect("string"));
      }
      function Ee(e, t) {
        let s = Pe(e);
        let i = e.eat("id", "as") ? Pe(e) : s;
        e.expect("id", "from");
        let n = e.expect("string");
        return new w(t, i, s, n);
      }
      function Je(e) {
        let t = /\\(?:u\{([\da-f]+)\}|u([\da-f]{4})|x([\da-f]{2})|([ntbrf0])|(.))|[^]/giy;
        let s = "",
          i;
        while ((i = t.exec(e))) {
          let [e, t, n, r, l, a] = i;
          if (t || n || r) s += String.fromCodePoint(parseInt(t || n || r, 16));
          else if (l) s += l == "n" ? "\n" : l == "t" ? "\t" : l == "0" ? "\0" : l == "r" ? "\r" : l == "f" ? "\f" : "\b";
          else if (a) s += a;
          else s += e;
        }
        return s;
      }
      function _e(e, t) {
        return (e << 5) + e + t;
      }
      function Be(e, t) {
        for (let s = 0; s < t.length; s++) e = _e(e, t.charCodeAt(s));
        return e;
      }
      const Ue = (typeof l != "undefined" && l.env.LOG) || "";
      const Me = /\btime\b/.test(Ue);
      const Fe = Me
        ? (e, t) => {
            let s = Date.now();
            let i = t();
            console.log(`${e} (${((Date.now() - s) / 1e3).toFixed(2)}s)`);
            return i;
          }
        : (e, t) => t();
      class Le {
        constructor(e, t, s, i, n, r) {
          this.rule = e;
          this.pos = t;
          this.ahead = s;
          this.ambigAhead = i;
          this.skipAhead = n;
          this.via = r;
          this.hash = 0;
        }
        finish() {
          let e = _e(_e(this.rule.id, this.pos), this.skipAhead.hash);
          for (let t of this.ahead) e = _e(e, t.hash);
          for (let t of this.ambigAhead) e = Be(e, t);
          this.hash = e;
          return this;
        }
        get next() {
          return this.pos < this.rule.parts.length ? this.rule.parts[this.pos] : null;
        }
        advance() {
          return new Le(this.rule, this.pos + 1, this.ahead, this.ambigAhead, this.skipAhead, this.via).finish();
        }
        get skip() {
          return this.pos == this.rule.parts.length ? this.skipAhead : this.rule.skip;
        }
        cmp(e) {
          return (
            this.rule.cmp(e.rule) ||
            this.pos - e.pos ||
            this.skipAhead.hash - e.skipAhead.hash ||
            W(this.ahead, e.ahead, (e, t) => e.cmp(t)) ||
            W(this.ambigAhead, e.ambigAhead, Ve)
          );
        }
        eqSimple(e) {
          return e.rule == this.rule && e.pos == this.pos;
        }
        toString() {
          let e = this.rule.parts.map((e) => e.name);
          e.splice(this.pos, 0, "·");
          return `${this.rule.name} -> ${e.join(" ")}`;
        }
        eq(e) {
          return (
            this == e ||
            (this.hash == e.hash &&
              this.rule == e.rule &&
              this.pos == e.pos &&
              this.skipAhead == e.skipAhead &&
              He(this.ahead, e.ahead) &&
              He(this.ambigAhead, e.ambigAhead))
          );
        }
        trail(e = 60) {
          let t = [];
          for (let i = this; i; i = i.via) {
            for (let e = i.pos - 1; e >= 0; e--) t.push(i.rule.parts[e]);
          }
          let s = t.reverse().join(" ");
          if (s.length > e) s = s.slice(s.length - e).replace(/.*? /, "… ");
          return s;
        }
        conflicts(e = this.pos) {
          let t = this.rule.conflicts[e];
          if (e == this.rule.parts.length && this.ambigAhead.length) t = t.join(new V(0, this.ambigAhead));
          return t;
        }
        static addOrigins(e, t) {
          let s = e.slice();
          for (let i = 0; i < s.length; i++) {
            let e = s[i];
            if (e.pos == 0)
              for (let i of t) {
                if (i.next == e.rule.name && !s.includes(i)) s.push(i);
              }
          }
          return s;
        }
      }
      function We(e) {
        let t = V.none;
        for (let s of e) t = t.join(s.conflicts());
        return t;
      }
      function Qe(e, t) {
        for (let s of e)
          if (s.rule.name.repeated) {
            for (let e of t)
              if (e.rule.name == s.rule.name) {
                if (s.rule.isRepeatWrap && s.pos == 2) return 1;
                if (e.rule.isRepeatWrap && e.pos == 2) return -1;
              }
          }
        return 0;
      }
      function Ve(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      }
      function Ye(e, t, s, i) {
        let n = [];
        for (let r = t + 1; r < e.parts.length; r++) {
          let t = e.parts[r],
            s = false;
          if (t.terminal) {
            nt(t, n);
          } else
            for (let e of i[t.name]) {
              if (e == null) s = true;
              else nt(e, n);
            }
          if (!s) return n;
        }
        for (let r of s) nt(r, n);
        return n;
      }
      function Ze(e, t) {
        if (e.length != t.length) return false;
        for (let s = 0; s < e.length; s++) if (!e[s].eq(t[s])) return false;
        return true;
      }
      function He(e, t) {
        if (e.length != t.length) return false;
        for (let s = 0; s < e.length; s++) if (e[s] != t[s]) return false;
        return true;
      }
      class Ke {
        constructor(e, t) {
          this.term = e;
          this.target = t;
        }
        eq(e) {
          return e instanceof Ke && this.term == e.term && e.target.id == this.target.id;
        }
        cmp(e) {
          return e instanceof Xe ? -1 : this.term.id - e.term.id || this.target.id - e.target.id;
        }
        matches(e, t) {
          return e instanceof Ke && t[e.target.id] == t[this.target.id];
        }
        toString() {
          return "s" + this.target.id;
        }
        map(e, t) {
          let s = t[e[this.target.id]];
          return s == this.target ? this : new Ke(this.term, s);
        }
      }
      class Xe {
        constructor(e, t) {
          this.term = e;
          this.rule = t;
        }
        eq(e) {
          return e instanceof Xe && this.term == e.term && e.rule.sameReduce(this.rule);
        }
        cmp(e) {
          return e instanceof Ke ? 1 : this.term.id - e.term.id || this.rule.name.id - e.rule.name.id || this.rule.parts.length - e.rule.parts.length;
        }
        matches(e, t) {
          return e instanceof Xe && e.rule.sameReduce(this.rule);
        }
        toString() {
          return `${this.rule.name.name}(${this.rule.parts.length})`;
        }
        map() {
          return this;
        }
      }
      function et(e) {
        let t = 5381;
        for (let s of e) t = _e(t, s.hash);
        return t;
      }
      class tt {
        constructor(e) {
          this.first = e;
          this.conflicts = [];
        }
      }
      class st {
        constructor(e, t, s = 0, i, n = et(t), r = null) {
          this.id = e;
          this.set = t;
          this.flags = s;
          this.skip = i;
          this.hash = n;
          this.startRule = r;
          this.actions = [];
          this.actionPositions = [];
          this.goto = [];
          this.tokenGroup = -1;
          this.defaultReduce = null;
          this._actionsByTerm = null;
        }
        toString() {
          let e =
            this.actions.map((e) => e.term + "=" + e).join(",") + (this.goto.length ? " | " + this.goto.map((e) => e.term + "=" + e).join(",") : "");
          return (
            this.id +
            ": " +
            this.set.filter((e) => e.pos > 0).join() +
            (this.defaultReduce ? `\n  always ${this.defaultReduce.name}(${this.defaultReduce.parts.length})` : e.length ? "\n  " + e : "")
          );
        }
        addActionInner(e, t) {
          e: for (let s = 0; s < this.actions.length; s++) {
            let i = this.actions[s];
            if (i.term == e.term) {
              if (i.eq(e)) return null;
              let n = Le.addOrigins(t, this.set),
                r = Le.addOrigins(this.actionPositions[s], this.set);
              let l = We(n),
                a = We(r);
              let o = Qe(n, r) || l.precedence - a.precedence;
              if (o > 0) {
                this.actions.splice(s, 1);
                this.actionPositions.splice(s, 1);
                s--;
                continue e;
              } else if (o < 0) {
                return null;
              } else if (l.ambigGroups.some((e) => a.ambigGroups.includes(e))) {
                continue e;
              } else {
                return i;
              }
            }
          }
          this.actions.push(e);
          this.actionPositions.push(t);
          return null;
        }
        addAction(e, t, s) {
          let i = this.addActionInner(e, t);
          if (i) {
            let n = this.actionPositions[this.actions.indexOf(i)][0];
            let r = [t[0].rule.name, n.rule.name];
            if (s.conflicts.some((e) => e.rules.some((e) => r.includes(e)))) return;
            let l;
            if (i instanceof Ke) l = `shift/reduce conflict between\n  ${n}\nand\n  ${t[0].rule}`;
            else l = `reduce/reduce conflict between\n  ${n.rule}\nand\n  ${t[0].rule}`;
            l += `\nWith input:\n  ${t[0].trail(70)} · ${e.term} …`;
            if (i instanceof Ke) l += ut(t[0], i.term, s.first);
            l += ot(n, t[0]);
            s.conflicts.push(new at(l, r));
          }
        }
        getGoto(e) {
          return this.goto.find((t) => t.term == e);
        }
        hasSet(e) {
          return Ze(this.set, e);
        }
        actionsByTerm() {
          let e = this._actionsByTerm;
          if (!e) {
            this._actionsByTerm = e = Object.create(null);
            for (let t of this.actions) (e[t.term.id] || (e[t.term.id] = [])).push(t);
          }
          return e;
        }
        finish() {
          if (this.actions.length) {
            let e = this.actions[0];
            if (e instanceof Xe) {
              let { rule: t } = e;
              if (this.actions.every((e) => e instanceof Xe && e.rule.sameReduce(t))) this.defaultReduce = t;
            }
          }
          this.actions.sort((e, t) => e.cmp(t));
          this.goto.sort((e, t) => e.cmp(t));
        }
        eq(e) {
          let t = this.defaultReduce,
            s = e.defaultReduce;
          if (t || s) return t && s ? t.sameReduce(s) : false;
          return this.skip == e.skip && this.tokenGroup == e.tokenGroup && Ze(this.actions, e.actions) && Ze(this.goto, e.goto);
        }
      }
      function it(e, t) {
        let s = [],
          i = [];
        function n(t, n, r, l, a) {
          for (let o of t.rules) {
            let t = s.find((e) => e.rule == o);
            if (!t) {
              let i = e.find((e) => e.pos == 0 && e.rule == o);
              t = i ? new Le(o, 0, i.ahead.slice(), i.ambigAhead, i.skipAhead, i.via) : new Le(o, 0, [], xt, l, a);
              s.push(t);
            }
            if (t.skipAhead != l) throw new B("Inconsistent skip sets after " + a.trail());
            t.ambigAhead = Y(t.ambigAhead, r);
            for (let e of n)
              if (!t.ahead.includes(e)) {
                t.ahead.push(e);
                if (t.rule.parts.length && !t.rule.parts[0].terminal) nt(t, i);
              }
          }
        }
        for (let l of e) {
          let e = l.next;
          if (e && !e.terminal)
            n(e, Ye(l.rule, l.pos, l.ahead, t), l.conflicts(l.pos + 1).ambigGroups, l.pos == l.rule.parts.length - 1 ? l.skipAhead : l.rule.skip, l);
        }
        while (i.length) {
          let e = i.pop();
          n(
            e.rule.parts[0],
            Ye(e.rule, 0, e.ahead, t),
            Y(e.rule.conflicts[1].ambigGroups, e.rule.parts.length == 1 ? e.ambigAhead : xt),
            e.rule.parts.length == 1 ? e.skipAhead : e.rule.skip,
            e
          );
        }
        let r = e.slice();
        for (let l of s) {
          l.ahead.sort((e, t) => e.hash - t.hash);
          l.finish();
          let t = e.findIndex((e) => e.pos == 0 && e.rule == l.rule);
          if (t > -1) r[t] = l;
          else r.push(l);
        }
        return r.sort((e, t) => e.cmp(t));
      }
      function nt(e, t) {
        if (!t.includes(e)) t.push(e);
      }
      function rt(e) {
        let t = Object.create(null);
        for (let s of e.terms) if (!s.terminal) t[s.name] = [];
        for (;;) {
          let s = false;
          for (let i of e.terms)
            if (!i.terminal)
              for (let e of i.rules) {
                let n = t[i.name];
                let r = false,
                  l = n.length;
                for (let s of e.parts) {
                  r = true;
                  if (s.terminal) {
                    nt(s, n);
                  } else {
                    for (let e of t[s.name]) {
                      if (e == null) r = false;
                      else nt(e, n);
                    }
                  }
                  if (r) break;
                }
                if (!r) nt(null, n);
                if (n.length > l) s = true;
              }
          if (!s) return t;
        }
      }
      class lt {
        constructor(e, t) {
          this.set = e;
          this.state = t;
        }
      }
      class at {
        constructor(e, t) {
          this.error = e;
          this.rules = t;
        }
      }
      function ot(e, t) {
        if (e.eqSimple(t)) return "";
        function s(e, t) {
          let s = [];
          for (let i = t.via; !i.eqSimple(e); i = i.via) s.push(i);
          if (!s.length) return "";
          s.unshift(t);
          return s
            .reverse()
            .map((e, s) => "\n" + "  ".repeat(s + 1) + (e == t ? "" : "via ") + e)
            .join("");
        }
        for (let i = e; i; i = i.via)
          for (let n = t; n; n = n.via) {
            if (i.eqSimple(n)) return "\nShared origin: " + i + s(i, e) + s(i, t);
          }
        return "";
      }
      function ut(e, t, s) {
        let i = e,
          n = [];
        for (;;) {
          for (let e = i.pos - 1; e >= 0; e--) n.push(i.rule.parts[e]);
          if (!i.via) break;
          i = i.via;
        }
        n.reverse();
        let r = new Set();
        function l(i, a, o) {
          if (a == n.length && o && !i.next) return `\nThe reduction of ${e.rule.name} is allowed before ${t} because of this rule:\n  ${o}`;
          for (let e; (e = i.next); ) {
            if (a < n.length && e == n[a]) {
              let e = l(i.advance(), a + 1, o);
              if (e) return e;
            }
            let u = i.rule.parts[i.pos + 1],
              h = i.pos + 1 == i.rule.parts.length ? o : null;
            if (u && (u.terminal ? u == t : s[u.name].includes(t))) h = i.advance();
            for (let t of e.rules) {
              let s = (t.id << 5) + a + (h ? 555 : 0);
              if (!r.has(s)) {
                r.add(s);
                let n = l(new Le(t, 0, [], [], e, i), a, h);
                if (n) return n;
              }
            }
            if (!e.terminal && s[e.name].includes(null)) i = i.advance();
            else break;
          }
          return "";
        }
        return l(i, 0, null);
      }
      function ht(e, t, s) {
        let i = [],
          n = {};
        let r = {};
        let l = Date.now();
        function a(e, t) {
          if (e.length == 0) return null;
          let a = et(e),
            o = r[a];
          let u;
          for (let s of e) {
            if (!u) u = s.skip;
            else if (u != s.skip) throw new B("Inconsistent skip sets after " + s.trail());
          }
          if (o)
            for (let s of o)
              if (Ze(e, s.set)) {
                if (s.state.skip != u) throw new B("Inconsistent skip sets after " + s.set[0].trail());
                return s.state;
              }
          let h = it(e, s);
          let f = et(h),
            c = n[f] || (n[f] = []);
          let p;
          if (!t) for (let s of c) if (s.hasSet(h)) p = s;
          if (!p) {
            p = new st(i.length, h, 0, u, f, t);
            c.push(p);
            i.push(p);
            if (Me && i.length % 500 == 0) console.log(`${i.length} states after ${((Date.now() - l) / 1e3).toFixed(2)}s`);
          }
          (r[a] || (r[a] = [])).push(new lt(e, p));
          return p;
        }
        for (const u of t) {
          const t = u.rules.length ? u.rules[0].skip : e.names["%noskip"];
          a(
            u.rules.map((s) => new Le(s, 0, [e.eof], xt, t, null).finish()),
            u
          );
        }
        let o = new tt(s);
        for (let u = 0; u < i.length; u++) {
          let e = i[u];
          let t = [],
            n = [],
            r = [];
          for (let s of e.set) {
            if (s.pos == s.rule.parts.length) {
              if (!s.rule.name.top) r.push(s);
            } else {
              let e = s.rule.parts[s.pos];
              let i = t.indexOf(e);
              if (i < 0) {
                t.push(e);
                n.push([s]);
              } else {
                n[i].push(s);
              }
            }
          }
          for (let s = 0; s < t.length; s++) {
            let i = t[s],
              r = n[s].map((e) => e.advance());
            if (i.terminal) {
              let t = ft(r);
              let l = a(t);
              if (l) e.addAction(new Ke(i, l), n[s], o);
            } else {
              let t = a(r);
              if (t) e.goto.push(new Ke(i, t));
            }
          }
          let l = false;
          for (let s of r)
            for (let t of s.ahead) {
              let i = e.actions.length;
              e.addAction(new Xe(t, s.rule), [s], o);
              if (e.actions.length == i) l = true;
            }
          if (l)
            for (let i = 0; i < e.goto.length; i++) {
              let t = s[e.goto[i].term.name];
              if (!t.some((t) => e.actions.some((e) => e.term == t && e instanceof Ke))) e.goto.splice(i--, 1);
            }
        }
        if (o.conflicts.length) throw new B(o.conflicts.map((e) => e.error).join("\n\n"));
        for (let u of i) u.finish();
        if (Me) console.log(`${i.length} states total.`);
        return i;
      }
      function ft(e) {
        let t = null,
          s = 1;
        for (let i of e) {
          let e = i.rule.conflicts[i.pos - 1].cut;
          if (e < s) continue;
          if (!t || e > s) {
            s = e;
            t = [];
          }
          t.push(i);
        }
        return t || e;
      }
      function ct(e, t, s) {
        for (let n of e.goto)
          for (let e of t.goto) {
            if (n.term == e.term && s[n.target.id] != s[e.target.id]) return false;
          }
        let i = t.actionsByTerm();
        for (let n of e.actions) {
          let t = i[n.term.id];
          if (t && t.some((e) => !e.matches(n, s))) {
            if (t.length == 1) return false;
            let i = e.actionsByTerm()[n.term.id];
            if (i.length != t.length || i.some((e) => !t.some((t) => e.matches(t, s)))) return false;
          }
        }
        return true;
      }
      function pt(e, t) {
        let s = [];
        for (let i of e) {
          let e = t[i.id];
          if (!s[e]) {
            s[e] = new st(e, i.set, 0, i.skip, i.hash, i.startRule);
            s[e].tokenGroup = i.tokenGroup;
            s[e].defaultReduce = i.defaultReduce;
          }
        }
        for (let i of e) {
          let e = t[i.id],
            n = s[e];
          n.flags |= i.flags;
          for (let r = 0; r < i.actions.length; r++) {
            let e = i.actions[r].map(t, s);
            if (!n.actions.some((t) => t.eq(e))) {
              n.actions.push(e);
              n.actionPositions.push(i.actionPositions[r]);
            }
          }
          for (let r of i.goto) {
            let e = r.map(t, s);
            if (!n.goto.some((t) => t.eq(e))) n.goto.push(e);
          }
        }
        return s;
      }
      class dt {
        constructor(e, t) {
          this.origin = e;
          this.members = [t];
        }
      }
      function mt(e, t) {
        if (e.length != t.length) return false;
        for (let s = 0; s < e.length; s++) if (!e[s].eqSimple(t[s])) return false;
        return true;
      }
      function gt(e) {
        let t = [],
          s = [];
        e: for (let n = 0; n < e.length; n++) {
          let i = e[n];
          if (!i.startRule)
            for (let r = 0; r < s.length; r++) {
              let l = s[r],
                a = e[l.members[0]];
              if (i.tokenGroup == a.tokenGroup && i.skip == a.skip && !a.startRule && mt(i.set, a.set)) {
                l.members.push(n);
                t.push(r);
                continue e;
              }
            }
          t.push(s.length);
          s.push(new dt(s.length, n));
        }
        function i(i, n) {
          let r = s[i],
            l = e[r.members[n]];
          let a = r.members.pop();
          if (n != r.members.length) r.members[n] = a;
          for (let o = i + 1; o < s.length; o++) {
            t[l.id] = o;
            if (s[o].origin == r.origin && s[o].members.every((s) => ct(l, e[s], t))) {
              s[o].members.push(l.id);
              return;
            }
          }
          t[l.id] = s.length;
          s.push(new dt(r.origin, l.id));
        }
        for (let n = 1; ; n++) {
          let r = false,
            l = Date.now();
          for (let n = 0, a = s.length; n < a; n++) {
            let l = s[n];
            for (let s = 0; s < l.members.length - 1; s++) {
              for (let a = s + 1; a < l.members.length; a++) {
                let o = l.members[s],
                  u = l.members[a];
                if (!ct(e[o], e[u], t)) {
                  r = true;
                  i(n, a--);
                }
              }
            }
          }
          if (Me) console.log(`Collapse pass ${n}${r ? `` : `, done`} (${((Date.now() - l) / 1e3).toFixed(2)}s)`);
          if (!r) return pt(e, t);
        }
      }
      function kt(e) {
        for (let t = 1; ; t++) {
          let s = [],
            i = false,
            n = Date.now();
          let r = [];
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            let l = r.findIndex((e) => n.eq(e));
            if (l < 0) {
              s[t] = r.length;
              r.push(n);
            } else {
              s[t] = l;
              i = true;
              let e = r[l],
                a = null;
              for (let t of n.set) if (!e.set.some((e) => e.eqSimple(t))) (a || (a = [])).push(t);
              if (a) e.set = a.concat(e.set).sort((e, t) => e.cmp(t));
            }
          }
          if (Me) console.log(`Merge identical pass ${t}${i ? "" : ", done"} (${((Date.now() - n) / 1e3).toFixed(2)}s)`);
          if (!i) return e;
          for (let e of r)
            if (!e.defaultReduce) {
              e.actions = e.actions.map((e) => e.map(s, r));
              e.goto = e.goto.map((e) => e.map(s, r));
            }
          for (let e = 0; e < r.length; e++) r[e].id = e;
          e = r;
        }
      }
      const xt = [];
      function bt(e) {
        return kt(gt(e));
      }
      function wt(e) {
        let t = e + 32;
        if (t >= 34) t++;
        if (t >= 92) t++;
        return String.fromCharCode(t);
      }
      function yt(e, t = 65535) {
        if (e > t) throw new Error("Trying to encode a number that's too big: " + e);
        if (e == 65535) return String.fromCharCode(126);
        let s = "";
        for (let i = 46; ; i = 0) {
          let t = e % 46,
            n = e - t;
          s = wt(t + i) + s;
          if (n == 0) break;
          e = n / 46;
        }
        return s;
      }
      function $t(e, t = 65535) {
        let s = '"' + yt(e.length, 4294967295);
        for (let i = 0; i < e.length; i++) s += yt(e[i], t);
        s += '"';
        return s;
      }
      const vt = [];
      class St {
        constructor(e, t) {
          this.terms = e;
          this.conflicts = t;
        }
        concat(e) {
          if (this == St.none) return e;
          if (e == St.none) return this;
          let t = null;
          if (this.conflicts || e.conflicts) {
            t = this.conflicts ? this.conflicts.slice() : this.ensureConflicts();
            let s = e.ensureConflicts();
            t[t.length - 1] = t[t.length - 1].join(s[0]);
            for (let e = 1; e < s.length; e++) t.push(s[e]);
          }
          return new St(this.terms.concat(e.terms), t);
        }
        withConflicts(e, t) {
          if (t == V.none) return this;
          let s = this.conflicts ? this.conflicts.slice() : this.ensureConflicts();
          s[e] = s[e].join(t);
          return new St(this.terms, s);
        }
        ensureConflicts() {
          if (this.conflicts) return this.conflicts;
          let e = [];
          for (let t = 0; t <= this.terms.length; t++) e.push(V.none);
          return e;
        }
      }
      St.none = new St(vt, null);
      function Tt(...e) {
        return new St(e, null);
      }
      class Rt {
        constructor(e, t, s) {
          this.id = e;
          this.args = t;
          this.term = s;
        }
        matches(e) {
          return this.id == e.id.name && G(e.args, this.args);
        }
        matchesRepeat(e) {
          return this.id == "+" && D(e.expr, this.args[0]);
        }
      }
      class Ot {
        constructor(e, t) {
          this.options = t;
          this.terms = new L();
          this.specialized = Object.create(null);
          this.tokenOrigins = Object.create(null);
          this.rules = [];
          this.built = [];
          this.ruleNames = Object.create(null);
          this.namespaces = Object.create(null);
          this.namedTerms = Object.create(null);
          this.termTable = Object.create(null);
          this.knownProps = Object.create(null);
          this.dynamicRulePrecedences = [];
          this.definedGroups = [];
          this.astRules = [];
          this.currentSkip = [];
          Fe("Parse", () => {
            this.input = new de(e, t.fileName);
            this.ast = this.input.parse();
          });
          let s = i.NodeProp;
          for (let n in s) {
            if (s[n] instanceof i.NodeProp && !s[n].perNode) this.knownProps[n] = { prop: s[n], source: { name: n, from: null } };
          }
          for (let n of this.ast.externalProps) {
            this.knownProps[n.id.name] = {
              prop: this.options.externalProp ? this.options.externalProp(n.id.name) : new i.NodeProp(),
              source: { name: n.externalID.name, from: n.source },
            };
          }
          this.dialects = this.ast.dialects.map((e) => e.name);
          this.tokens = new Mt(this, this.ast.tokens);
          this.localTokens = this.ast.localTokens.map((e) => new Ft(this, e));
          this.externalTokens = this.ast.externalTokens.map((e) => new ns(this, e));
          this.externalSpecializers = this.ast.externalSpecializers.map((e) => new rs(this, e));
          Fe("Build rules", () => {
            let e = this.newName("%noskip", true);
            this.defineRule(e, []);
            let t = this.ast.mainSkip ? this.newName("%mainskip", true) : e;
            let s = [],
              i = [];
            for (let n of this.ast.rules) this.astRules.push({ skip: t, rule: n });
            for (let n of this.ast.topRules) i.push({ skip: t, rule: n });
            for (let n of this.ast.scopedSkip) {
              let r = e,
                l = this.ast.scopedSkip.findIndex((e, t) => t < s.length && D(e.expr, n.expr));
              if (l > -1) r = s[l];
              else if (this.ast.mainSkip && D(n.expr, this.ast.mainSkip)) r = t;
              else if (!es(n.expr)) r = this.newName("%skip", true);
              s.push(r);
              for (let e of n.rules) this.astRules.push({ skip: r, rule: e });
              for (let e of n.topRules) i.push({ skip: r, rule: e });
            }
            for (let { rule: n } of this.astRules) {
              this.unique(n.id);
            }
            this.currentSkip.push(e);
            this.skipRules = t == e ? [t] : [e, t];
            if (t != e) this.defineRule(t, this.normalizeExpr(this.ast.mainSkip));
            for (let n = 0; n < this.ast.scopedSkip.length; n++) {
              let t = s[n];
              if (!this.skipRules.includes(t)) {
                this.skipRules.push(t);
                if (t != e) this.defineRule(t, this.normalizeExpr(this.ast.scopedSkip[n].expr));
              }
            }
            this.currentSkip.pop();
            for (let { rule: n, skip: r } of i.sort((e, t) => e.rule.start - t.rule.start)) {
              this.unique(n.id);
              this.used(n.id.name);
              this.currentSkip.push(r);
              let { name: e, props: t } = this.nodeInfo(n.props, "a", n.id.name, vt, vt, n.expr);
              let s = this.terms.makeTop(e, t);
              this.namedTerms[e] = s;
              this.defineRule(s, this.normalizeExpr(n.expr));
              this.currentSkip.pop();
            }
            for (let n of this.externalSpecializers) n.finish();
            for (let { skip: n, rule: r } of this.astRules) {
              if (this.ruleNames[r.id.name] && ps(r) && !r.params.length) {
                this.buildRule(r, [], n, false);
                if (r.expr instanceof O && r.expr.exprs.length == 0) this.used(r.id.name);
              }
            }
          });
          for (let i in this.ruleNames) {
            let e = this.ruleNames[i];
            if (e) this.warn(`Unused rule '${e.name}'`, e.start);
          }
          this.tokens.takePrecedences();
          this.tokens.takeConflicts();
          for (let i of this.localTokens) i.takePrecedences();
          for (let { name: i, group: n, rule: r } of this.definedGroups) this.defineGroup(i, n, r);
          this.checkGroups();
        }
        unique(e) {
          if (e.name in this.ruleNames) this.raise(`Duplicate definition of rule '${e.name}'`, e.start);
          this.ruleNames[e.name] = e;
        }
        used(e) {
          this.ruleNames[e] = null;
        }
        newName(e, t = null, s = {}) {
          for (let i = t ? 0 : 1; ; i++) {
            let n = i ? `${e}-${i}` : e;
            if (!this.terms.names[n]) return this.terms.makeNonTerminal(n, t === true ? null : t, s);
          }
        }
        prepareParser() {
          let e = Fe("Simplify rules", () => os(this.rules, [...this.skipRules, ...this.terms.tops]));
          let { nodeTypes: t, names: s, minRepeatTerm: i, maxTerm: n } = this.terms.finish(e);
          for (let O in this.namedTerms) this.termTable[O] = this.namedTerms[O].id;
          if (/\bgrammar\b/.test(Ue)) console.log(e.join("\n"));
          let r = this.terms.tops.slice();
          let l = rt(this.terms);
          let a = this.skipRules.map((e, t) => {
            let s = [],
              i = [],
              n = [];
            for (let r of e.rules) {
              if (!r.parts.length) continue;
              let e = r.parts[0];
              for (let t of e.terminal ? [e] : l[e.name] || []) if (t && !i.includes(t)) i.push(t);
              if (e.terminal && r.parts.length == 1 && !n.some((t) => t != r && t.parts[0] == e)) s.push(e);
              else n.push(r);
            }
            e.rules = n;
            if (n.length) r.push(e);
            return { skip: s, rule: n.length ? e : null, startTokens: i, id: t };
          });
          let o = Fe("Build full automaton", () => ht(this.terms, r, l));
          let u = this.localTokens.map((e, t) => e.buildLocalGroup(o, a, t));
          let { tokenGroups: h, tokenPrec: f, tokenData: c } = Fe("Build token groups", () => this.tokens.buildTokenGroups(o, a, u.length));
          let p = Fe("Finish automaton", () => bt(o));
          let d = It(p, this.terms.tops);
          if (/\blr\b/.test(Ue)) console.log(p.join("\n"));
          let m = [];
          for (let O of this.externalSpecializers) m.push(O);
          for (let O in this.specialized) m.push({ token: this.terms.names[O], table: At(this.specialized[O]) });
          let g = (e) => {
            if (e instanceof ns) return e.ast.start;
            return this.tokens.ast ? this.tokens.ast.start : -1;
          };
          let k = h
            .concat(this.externalTokens)
            .sort((e, t) => g(e) - g(t))
            .concat(u);
          let x = new qt();
          let b = a.map((e) => {
            let t = [];
            for (let s of e.skip) t.push(s.id, 0, 262144 >> 16);
            if (e.rule) {
              let s = p.find((t) => t.startRule == e.rule);
              for (let e of s.actions) t.push(e.term.id, s.id, 131072 >> 16);
            }
            t.push(65535, 0);
            return x.storeArray(t);
          });
          let w = Fe("Finish states", () => {
            let e = new Uint32Array(p.length * 6);
            let t = this.computeForceReductions(p, a);
            let s = new jt(k, x, e, b, a, p, this);
            for (let i of p) s.finish(i, d(i.id), t[i.id]);
            return e;
          });
          let y = Object.create(null);
          for (let O = 0; O < this.dialects.length; O++)
            y[this.dialects[O]] = x.storeArray((this.tokens.byDialect[O] || vt).map((e) => e.id).concat(65535));
          let $ = null;
          if (this.dynamicRulePrecedences.length) {
            $ = Object.create(null);
            for (let { rule: e, prec: t } of this.dynamicRulePrecedences) $[e.id] = t;
          }
          let v = Object.create(null);
          for (let O of this.terms.tops) v[O.nodeName] = [p.find((e) => e.startRule == O).id, O.id];
          let S = x.storeArray(f.concat(65535));
          let { nodeProps: T, skippedTypes: R } = this.gatherNodeProps(t);
          return {
            states: w,
            stateData: x.finish(),
            goto: Dt(p),
            nodeNames: t
              .filter((e) => e.id < i)
              .map((e) => e.nodeName)
              .join(" "),
            nodeProps: T,
            skippedTypes: R,
            maxTerm: n,
            repeatNodeCount: t.length - i,
            tokenizers: k,
            tokenData: c,
            topRules: v,
            dialects: y,
            dynamicPrecedences: $,
            specialized: m,
            tokenPrec: S,
            termNames: s,
          };
        }
        getParser() {
          let {
            states: e,
            stateData: t,
            goto: s,
            nodeNames: i,
            nodeProps: n,
            skippedTypes: l,
            maxTerm: a,
            repeatNodeCount: o,
            tokenizers: u,
            tokenData: h,
            topRules: f,
            dialects: c,
            dynamicPrecedences: p,
            specialized: d,
            tokenPrec: m,
            termNames: g,
          } = this.prepareParser();
          let k = d.map((e) => {
            if (e instanceof rs) {
              let t = this.options.externalSpecializer(e.ast.id.name, this.termTable);
              return {
                term: e.term.id,
                get: (s, i) => (t(s, i) << 1) | (e.ast.type == "extend" ? 1 : 0),
                external: t,
                extend: e.ast.type == "extend",
              };
            } else {
              return { term: e.token.id, get: (t) => e.table[t] || -1 };
            }
          });
          return r.WQ.deserialize({
            version: 14,
            states: e,
            stateData: t,
            goto: s,
            nodeNames: i,
            maxTerm: a,
            repeatNodeCount: o,
            nodeProps: n.map(({ prop: e, terms: t }) => [this.knownProps[e].prop, ...t]),
            propSources: !this.options.externalPropSource
              ? undefined
              : this.ast.externalPropSources.map((e) => this.options.externalPropSource(e.id.name)),
            skippedNodes: l,
            tokenData: h,
            tokenizers: u.map((e) => e.create()),
            context: !this.ast.context
              ? undefined
              : typeof this.options.contextTracker == "function"
                ? this.options.contextTracker(this.termTable)
                : this.options.contextTracker,
            topRules: f,
            dialects: c,
            dynamicPrecedences: p,
            specialized: k,
            tokenPrec: m,
            termNames: g,
          });
        }
        getParserFile() {
          let {
            states: e,
            stateData: t,
            goto: s,
            nodeNames: i,
            nodeProps: n,
            skippedTypes: r,
            maxTerm: l,
            repeatNodeCount: a,
            tokenizers: o,
            tokenData: u,
            topRules: h,
            dialects: f,
            dynamicPrecedences: c,
            specialized: p,
            tokenPrec: d,
            termNames: m,
          } = this.prepareParser();
          let g = this.options.moduleStyle || "es";
          let k = "// This file was generated by lezer-generator. You probably shouldn't edit it.\n",
            x = k;
          let b = {},
            w = Object.create(null);
          let y = Object.create(null);
          for (let G of hs) y[G] = true;
          let $ = this.options.exportName || "parser";
          y[$] = true;
          let v = (e) => {
            for (let t = 0; ; t++) {
              let s = e + (t ? "_" + t : "");
              if (!y[s]) return s;
            }
          };
          let S = (e, t, s = e) => {
            let i = e + " from " + t;
            if (w[i]) return w[i];
            let n = JSON.stringify(t),
              r = e;
            if (e in y) {
              r = v(s);
              e += `${g == "cjs" ? ":" : " as"} ${r}`;
            }
            y[r] = true;
            (b[n] || (b[n] = [])).push(e);
            return (w[i] = r);
          };
          let T = S("LRParser", "@lezer/lr");
          let R = o.map((e) => e.createSource(S));
          let O = this.ast.context ? S(this.ast.context.id.name, this.ast.context.source) : null;
          let P = n.map(({ prop: e, terms: t }) => {
            let { source: s } = this.knownProps[e];
            let i = s.from ? S(s.name, s.from) : JSON.stringify(s.name);
            return `[${i}, ${t.map(C).join(",")}]`;
          });
          function j(e) {
            return (
              "{__proto__:null," +
              Object.keys(e)
                .map((t) => `${/^(\d+|[a-zA-Z_]\w*)$/.test(t) ? t : JSON.stringify(t)}:${e[t]}`)
                .join(", ") +
              "}"
            );
          }
          let N = "";
          let A = p.map((e) => {
            if (e instanceof rs) {
              let t = S(e.ast.id.name, e.ast.source);
              let s = this.options.typeScript ? ": any" : "";
              return `{term: ${e.term.id}, get: (value${s}, stack${s}) => (${t}(value, stack) << 1)${e.ast.type == "extend" ? ` | ${1}` : ""}, external: ${t}${e.ast.type == "extend" ? ", extend: true" : ""}}`;
            } else {
              let t = v("spec_" + e.token.name.replace(/\W/g, ""));
              y[t] = true;
              N += `const ${t} = ${j(e.table)}\n`;
              let s = this.options.typeScript ? `: keyof typeof ${t}` : "";
              return `{term: ${e.token.id}, get: (value${s}) => ${t}[value] || -1}`;
            }
          });
          let z = this.ast.externalPropSources.map((e) => S(e.id.name, e.source));
          for (let G in b) {
            if (g == "cjs") x += `const {${b[G].join(", ")}} = require(${G})\n`;
            else x += `import {${b[G].join(", ")}} from ${G}\n`;
          }
          x += N;
          function C(e) {
            return typeof e != "string" || /^(true|false|\d+(\.\d+)?|\.\d+)$/.test(e) ? e : JSON.stringify(e);
          }
          let I = Object.keys(f).map((e) => `${e}: ${f[e]}`);
          let q = `${T}.deserialize({\n  version: ${14},\n  states: ${$t(e, 4294967295)},\n  stateData: ${$t(t)},\n  goto: ${$t(s)},\n  nodeNames: ${JSON.stringify(i)},\n  maxTerm: ${l}${O ? `,\n  context: ${O}` : ""}${P.length ? `,\n  nodeProps: [\n    ${P.join(",\n    ")}\n  ]` : ""}${z.length ? `,\n  propSources: [${z.join()}]` : ""}${r.length ? `,\n  skippedNodes: ${JSON.stringify(r)}` : ""},\n  repeatNodeCount: ${a},\n  tokenData: ${$t(u)},\n  tokenizers: [${R.join(", ")}],\n  topRules: ${JSON.stringify(h)}${I.length ? `,\n  dialects: {${I.join(", ")}}` : ""}${c ? `,\n  dynamicPrecedences: ${JSON.stringify(c)}` : ""}${A.length ? `,\n  specialized: [${A.join(",")}]` : ""},\n  tokenPrec: ${d}${this.options.includeNames ? `,\n  termNames: ${JSON.stringify(m)}` : ""}\n})`;
          let D = [];
          for (let G in this.termTable) {
            let e = G;
            if (hs.includes(e))
              for (let t = 1; ; t++) {
                e = "_".repeat(t) + G;
                if (!(e in this.termTable)) break;
              }
            else if (!/^[\w$]+$/.test(G)) {
              continue;
            }
            D.push(`${e}${g == "cjs" ? ":" : " ="} ${this.termTable[G]}`);
          }
          for (let G = 0; G < this.dialects.length; G++) D.push(`Dialect_${this.dialects[G]}${g == "cjs" ? ":" : " ="} ${G}`);
          return {
            parser: x + (g == "cjs" ? `exports.${$} = ${q}\n` : `export const ${$} = ${q}\n`),
            terms: g == "cjs" ? `${k}module.exports = {\n  ${D.join(",\n  ")}\n}` : `${k}export const\n  ${D.join(",\n  ")}\n`,
          };
        }
        gatherNonSkippedNodes() {
          let e = Object.create(null);
          let t = [];
          let s = (s) => {
            if (!e[s.id]) {
              e[s.id] = true;
              t.push(s);
            }
          };
          this.terms.tops.forEach(s);
          for (let i = 0; i < t.length; i++) {
            for (let e of t[i].rules) for (let t of e.parts) s(t);
          }
          return e;
        }
        gatherNodeProps(e) {
          let t = this.gatherNonSkippedNodes(),
            s = [];
          let i = [];
          for (let n of e) {
            if (!t[n.id] && !n.error) s.push(n.id);
            for (let e in n.props) {
              let t = this.knownProps[e];
              if (!t) throw new B("No known prop type for " + e);
              if (t.source.from == null && (t.source.name == "repeated" || t.source.name == "error")) continue;
              let s = i.find((t) => t.prop == e);
              if (!s) i.push((s = { prop: e, values: {} }));
              (s.values[n.props[e]] || (s.values[n.props[e]] = [])).push(n.id);
            }
          }
          return {
            nodeProps: i.map(({ prop: e, values: t }) => {
              let s = [];
              for (let i in t) {
                let e = t[i];
                if (e.length == 1) {
                  s.push(e[0], i);
                } else {
                  s.push(-e.length);
                  for (let t of e) s.push(t);
                  s.push(i);
                }
              }
              return { prop: e, terms: s };
            }),
            skippedTypes: s,
          };
        }
        makeTerminal(e, t, s) {
          return this.terms.makeTerminal(this.terms.uniqueName(e), t, s);
        }
        computeForceReductions(e, t) {
          let s = [];
          let i = [];
          let n = Object.create(null);
          for (let a of e) {
            s.push(0);
            for (let e of a.goto) {
              let t = n[e.term.id] || (n[e.term.id] = []);
              let s = t.find((t) => t.target == e.target.id);
              if (s) s.parents.push(a.id);
              else t.push({ parents: [a.id], target: e.target.id });
            }
            i[a.id] = a.set.filter((e) => e.pos > 0 && !e.rule.name.top).sort((e, t) => t.pos - e.pos || e.rule.parts.length - t.rule.parts.length);
          }
          let r = Object.create(null);
          function l(e, t, s = null) {
            let i = n[e];
            if (!i) return false;
            return i.some((e) => {
              let i = s ? s.filter((t) => e.parents.includes(t)) : e.parents;
              if (i.length == 0) return false;
              if (e.target == t) return true;
              let n = r[e.target];
              return n != null && l(n, t, i);
            });
          }
          for (let a of e) {
            if (a.defaultReduce && a.defaultReduce.parts.length > 0) {
              s[a.id] = zt(a.defaultReduce, t);
              if (a.defaultReduce.parts.length == 1) r[a.id] = a.defaultReduce.name.id;
            }
          }
          for (let a = 1; ; a++) {
            let n = true;
            for (let o of e) {
              if (o.defaultReduce) continue;
              let e = i[o.id];
              if (e.length != a) {
                if (e.length > a) n = false;
                continue;
              }
              for (let i of e) {
                if (i.pos != 1 || !l(i.rule.name.id, o.id)) {
                  s[o.id] = zt(i.rule, t, i.pos);
                  if (i.pos == 1) r[o.id] = i.rule.name.id;
                  break;
                }
              }
            }
            if (n) break;
          }
          return s;
        }
        substituteArgs(e, t, s) {
          if (t.length == 0) return e;
          return e.walk((e) => {
            let i;
            if (e instanceof v && (i = s.findIndex((t) => t.name == e.id.name)) > -1) {
              let s = t[i];
              if (e.args.length) {
                if (s instanceof v && !s.args.length) return new v(e.start, s.id, e.args);
                this.raise(`Passing arguments to a parameter that already has arguments`, e.start);
              }
              return s;
            } else if (e instanceof T) {
              let i = e.rule,
                n = this.substituteArgsInProps(i.props, t, s);
              return n == i.props ? e : new T(e.start, new u(i.start, i.id, n, i.params, i.expr));
            } else if (e instanceof S) {
              let i = this.substituteArgsInProps(e.props, t, s);
              return i == e.props ? e : new S(e.start, e.type, i, e.token, e.content);
            }
            return e;
          });
        }
        substituteArgsInProps(e, t, s) {
          let i = (e) => {
            let i = e;
            for (let n = 0; n < e.length; n++) {
              let r = e[n];
              if (!r.name) continue;
              let l = s.findIndex((e) => e.name == r.name);
              if (l < 0) continue;
              if (i == e) i = e.slice();
              let a = t[l];
              if (a instanceof v && !a.args.length) i[n] = new J(r.start, a.id.name, null);
              else if (a instanceof N) i[n] = new J(r.start, a.value, null);
              else this.raise(`Trying to interpolate expression '${a}' into a prop`, r.start);
            }
            return i;
          };
          let n = e;
          for (let r = 0; r < e.length; r++) {
            let t = e[r],
              s = i(t.value);
            if (s != t.value) {
              if (n == e) n = e.slice();
              n[r] = new E(t.start, t.at, t.name, s);
            }
          }
          return n;
        }
        conflictsFor(e) {
          let t = V.none,
            s = V.none;
          for (let i of e) {
            if (i.type == "ambig") {
              t = t.join(new V(0, [i.id.name]));
            } else {
              let e = this.ast.precedences;
              let n = e ? e.items.findIndex((e) => e.id.name == i.id.name) : -1;
              if (n < 0) this.raise(`Reference to unknown precedence: '${i.id.name}'`, i.id.start);
              let r = e.items[n],
                l = e.items.length - n;
              if (r.type == "cut") {
                t = t.join(new V(0, vt, l));
              } else {
                t = t.join(new V(l << 2));
                s = s.join(new V((l << 2) + (r.type == "left" ? 1 : r.type == "right" ? -1 : 0)));
              }
            }
          }
          return { here: t, atEnd: s };
        }
        raise(e, t = 1) {
          return this.input.raise(e, t);
        }
        warn(e, t = -1) {
          let s = this.input.message(e, t);
          if (this.options.warn) this.options.warn(s);
          else console.warn(s);
        }
        defineRule(e, t) {
          let s = this.currentSkip[this.currentSkip.length - 1];
          for (let i of t) this.rules.push(new H(e, i.terms, i.ensureConflicts(), s));
        }
        resolve(e) {
          for (let i of this.built) if (i.matches(e)) return [Tt(i.term)];
          let t = this.tokens.getToken(e);
          if (t) return [Tt(t)];
          for (let i of this.localTokens) {
            let t = i.getToken(e);
            if (t) return [Tt(t)];
          }
          for (let i of this.externalTokens) {
            let t = i.getToken(e);
            if (t) return [Tt(t)];
          }
          for (let i of this.externalSpecializers) {
            let t = i.getToken(e);
            if (t) return [Tt(t)];
          }
          let s = this.astRules.find((t) => t.rule.id.name == e.id.name);
          if (!s) return this.raise(`Reference to undefined rule '${e.id.name}'`, e.start);
          if (s.rule.params.length != e.args.length) this.raise(`Wrong number or arguments for '${e.id.name}'`, e.start);
          this.used(s.rule.id.name);
          return [Tt(this.buildRule(s.rule, e.args, s.skip))];
        }
        normalizeRepeat(e) {
          let t = this.built.find((t) => t.matchesRepeat(e));
          if (t) return Tt(t.term);
          let s = e.expr.prec < e.prec ? `(${e.expr})+` : `${e.expr}+`;
          let i = this.terms.makeRepeat(this.terms.uniqueName(s));
          this.built.push(new Rt("+", [e.expr], i));
          this.defineRule(i, this.normalizeExpr(e.expr).concat(Tt(i, i)));
          return Tt(i);
        }
        normalizeSequence(e) {
          let t = e.exprs.map((e) => this.normalizeExpr(e));
          let s = this;
          function i(n, r, l) {
            let { here: a, atEnd: o } = s.conflictsFor(e.markers[r]);
            if (r == t.length) return [n.withConflicts(n.terms.length, a.join(l))];
            let u = [];
            for (let e of t[r]) {
              for (let t of i(n.concat(e).withConflicts(n.terms.length, a), r + 1, l.join(o))) u.push(t);
            }
            return u;
          }
          return i(St.none, 0, V.none);
        }
        normalizeExpr(e) {
          if (e instanceof j && e.kind == "?") {
            return [St.none, ...this.normalizeExpr(e.expr)];
          } else if (e instanceof j) {
            let t = this.normalizeRepeat(e);
            return e.kind == "+" ? [t] : [St.none, t];
          } else if (e instanceof R) {
            return e.exprs.reduce((e, t) => e.concat(this.normalizeExpr(t)), []);
          } else if (e instanceof O) {
            return this.normalizeSequence(e);
          } else if (e instanceof N) {
            return [Tt(this.tokens.getLiteral(e))];
          } else if (e instanceof v) {
            return this.resolve(e);
          } else if (e instanceof S) {
            return [Tt(this.resolveSpecialization(e))];
          } else if (e instanceof T) {
            return [Tt(this.buildRule(e.rule, vt, this.currentSkip[this.currentSkip.length - 1], true))];
          } else {
            return this.raise(`This type of expression ('${e}') may not occur in non-token rules`, e.start);
          }
        }
        buildRule(e, t, s, i = false) {
          let n = this.substituteArgs(e.expr, t, e.params);
          let {
            name: r,
            props: l,
            dynamicPrec: a,
            inline: o,
            group: u,
            exported: h,
          } = this.nodeInfo(e.props || vt, i ? "pg" : "pgi", e.id.name, t, e.params, e.expr);
          if (h && e.params.length) this.warn(`Can't export parameterized rules`, e.start);
          if (h && i) this.warn(`Can't export inline rule`, e.start);
          let f = this.newName(e.id.name + (t.length ? "<" + t.join(",") + ">" : ""), r || true, l);
          if (o) f.inline = true;
          if (a) this.registerDynamicPrec(f, a);
          if ((f.nodeType || h) && e.params.length == 0) {
            if (!r) f.preserve = true;
            if (!i) this.namedTerms[h || e.id.name] = f;
          }
          if (!i) this.built.push(new Rt(e.id.name, t, f));
          this.currentSkip.push(s);
          let c = this.normalizeExpr(n);
          if (c.length > 100 * (n instanceof R ? n.exprs.length : 1))
            this.warn(
              `Rule ${e.id.name} is generating a lot (${c.length}) of choices.\n  Consider splitting it up or reducing the amount of ? or | operator uses.`,
              e.start
            );
          if (/\brulesize\b/.test(Ue) && c.length > 10) console.log(`Rule ${e.id.name}: ${c.length} variants`);
          this.defineRule(f, c);
          this.currentSkip.pop();
          if (u) this.definedGroups.push({ name: f, group: u, rule: e });
          return f;
        }
        nodeInfo(e, t, s = null, i = vt, n = vt, r, l) {
          let a = {};
          let o = s && (t.indexOf("a") > -1 || !cs(s)) && !/ /.test(s) ? s : null;
          let u = null,
            h = 0,
            f = false,
            c = null,
            p = null;
          for (let d of e) {
            if (!d.at) {
              if (!this.knownProps[d.name]) {
                let e = ["name", "dialect", "dynamicPrecedence", "export", "isGroup"].includes(d.name) ? ` (did you mean '@${d.name}'?)` : "";
                this.raise(`Unknown prop name '${d.name}'${e}`, d.start);
              }
              a[d.name] = this.finishProp(d, i, n);
            } else if (d.name == "name") {
              o = this.finishProp(d, i, n);
              if (/ /.test(o)) this.raise(`Node names cannot have spaces ('${o}')`, d.start);
            } else if (d.name == "dialect") {
              if (t.indexOf("d") < 0) this.raise("Can't specify a dialect on non-token rules", e[0].start);
              if (d.value.length != 1 && !d.value[0].value) this.raise("The '@dialect' rule prop must hold a plain string value");
              let s = this.dialects.indexOf(d.value[0].value);
              if (s < 0) this.raise(`Unknown dialect '${d.value[0].value}'`, d.value[0].start);
              u = s;
            } else if (d.name == "dynamicPrecedence") {
              if (t.indexOf("p") < 0) this.raise("Dynamic precedence can only be specified on nonterminals");
              if (d.value.length != 1 || !/^-?(?:10|\d)$/.test(d.value[0].value))
                this.raise("The '@dynamicPrecedence' rule prop must hold an integer between -10 and 10");
              h = +d.value[0].value;
            } else if (d.name == "inline") {
              if (d.value.length) this.raise("'@inline' doesn't take a value", d.value[0].start);
              if (t.indexOf("i") < 0) this.raise("Inline can only be specified on nonterminals");
              f = true;
            } else if (d.name == "isGroup") {
              if (t.indexOf("g") < 0) this.raise("'@isGroup' can only be specified on nonterminals");
              c = d.value.length ? this.finishProp(d, i, n) : s;
            } else if (d.name == "export") {
              if (d.value.length) p = this.finishProp(d, i, n);
              else p = s;
            } else {
              this.raise(`Unknown built-in prop name '@${d.name}'`, d.start);
            }
          }
          if (r && this.ast.autoDelim && (o || U(a))) {
            let e = this.findDelimiters(r);
            if (e) {
              Nt(e[0], "closedBy", e[1].nodeName);
              Nt(e[1], "openedBy", e[0].nodeName);
            }
          }
          if (l && U(l)) {
            for (let e in l) if (!(e in a)) a[e] = l[e];
          }
          if (U(a) && !o) this.raise(`Node has properties but no name`, e.length ? e[0].start : r.start);
          if (f && (U(a) || u || h)) this.raise(`Inline nodes can't have props, dynamic precedence, or a dialect`, e[0].start);
          if (f && o) o = null;
          return { name: o, props: a, dialect: u, dynamicPrec: h, inline: f, group: c, exported: p };
        }
        finishProp(e, t, s) {
          return e.value
            .map((e) => {
              if (e.value) return e.value;
              let i = s.findIndex((t) => t.name == e.name);
              if (i < 0) this.raise(`Property refers to '${e.name}', but no parameter by that name is in scope`, e.start);
              let n = t[i];
              if (n instanceof v && !n.args.length) return n.id.name;
              if (n instanceof N) return n.value;
              return this.raise(`Expression '${n}' can not be used as part of a property value`, e.start);
            })
            .join("");
        }
        resolveSpecialization(e) {
          let t = e.type;
          let { name: s, props: i, dialect: n, exported: r } = this.nodeInfo(e.props, "d");
          let l = this.normalizeExpr(e.token);
          if (l.length != 1 || l[0].terms.length != 1 || !l[0].terms[0].terminal)
            this.raise(`The first argument to '${t}' must resolve to a token`, e.token.start);
          let a;
          if (e.content instanceof N) a = [e.content.value];
          else if (e.content instanceof R && e.content.exprs.every((e) => e instanceof N)) a = e.content.exprs.map((e) => e.value);
          else return this.raise(`The second argument to '${e.type}' must be a literal or choice of literals`, e.content.start);
          let o = l[0].terms[0],
            u = null;
          let h = this.specialized[o.name] || (this.specialized[o.name] = []);
          for (let f of a) {
            let l = h.find((e) => e.value == f);
            if (l == null) {
              if (!u) {
                u = this.makeTerminal(o.name + "/" + JSON.stringify(f), s, i);
                if (n != null) (this.tokens.byDialect[n] || (this.tokens.byDialect[n] = [])).push(u);
              }
              h.push({ value: f, term: u, type: t, dialect: n, name: s });
              this.tokenOrigins[u.name] = { spec: o };
              if (s || r) {
                if (!s) u.preserve = true;
                this.namedTerms[r || s] = u;
              }
            } else {
              if (l.type != t) this.raise(`Conflicting specialization types for ${JSON.stringify(f)} of ${o.name} (${t} vs ${l.type})`, e.start);
              if (l.dialect != n) this.raise(`Conflicting dialects for specialization ${JSON.stringify(f)} of ${o.name}`, e.start);
              if (l.name != s) this.raise(`Conflicting names for specialization ${JSON.stringify(f)} of ${o.name}`, e.start);
              if (u && l.term != u) this.raise(`Conflicting specialization tokens for ${JSON.stringify(f)} of ${o.name}`, e.start);
              u = l.term;
            }
          }
          return u;
        }
        findDelimiters(e) {
          if (!(e instanceof O) || e.exprs.length < 2) return null;
          let t = (e) => {
            if (e instanceof N) return { term: this.tokens.getLiteral(e), str: e.value };
            if (e instanceof v && e.args.length == 0) {
              let s = this.ast.rules.find((t) => t.id.name == e.id.name);
              if (s) return t(s.expr);
              let i = this.tokens.rules.find((t) => t.id.name == e.id.name);
              if (i && i.expr instanceof N) return { term: this.tokens.getToken(e), str: i.expr.value };
            }
            return null;
          };
          let s = t(e.exprs[e.exprs.length - 1]);
          if (!s || !s.term.nodeName) return null;
          const i = ["()", "[]", "{}", "<>"];
          let n = i.find((e) => s.str.indexOf(e[1]) > -1 && s.str.indexOf(e[0]) < 0);
          if (!n) return null;
          let r = t(e.exprs[0]);
          if (!r || !r.term.nodeName || r.str.indexOf(n[0]) < 0 || r.str.indexOf(n[1]) > -1) return null;
          return [r.term, s.term];
        }
        registerDynamicPrec(e, t) {
          this.dynamicRulePrecedences.push({ rule: e, prec: t });
          e.preserve = true;
        }
        defineGroup(e, t, s) {
          var i;
          let n = [];
          let r = (e) => {
            if (e.nodeName) return [e];
            if (n.includes(e))
              this.raise(`Rule '${s.id.name}' cannot define a group because it contains a non-named recursive rule ('${e.name}')`, s.start);
            let t = [];
            n.push(e);
            for (let i of this.rules)
              if (i.name == e) {
                let e = i.parts.map(r).filter((e) => e.length);
                if (e.length > 1) this.raise(`Rule '${s.id.name}' cannot define a group because some choices produce multiple named nodes`, s.start);
                if (e.length == 1) for (let s of e[0]) t.push(s);
              }
            n.pop();
            return t;
          };
          for (let l of r(e))
            l.props["group"] = (((i = l.props["group"]) === null || i === void 0 ? void 0 : i.split(" ")) || []).concat(t).sort().join(" ");
        }
        checkGroups() {
          let e = Object.create(null),
            t = Object.create(null);
          for (let i of this.terms.terms)
            if (i.nodeName) {
              t[i.nodeName] = true;
              if (i.props["group"])
                for (let t of i.props["group"].split(" ")) {
                  (e[t] || (e[t] = [])).push(i);
                }
            }
          let s = Object.keys(e);
          for (let i = 0; i < s.length; i++) {
            let n = s[i],
              r = e[n];
            if (t[n]) this.warn(`Group name '${n}' conflicts with a node of the same name`);
            for (let t = i + 1; t < s.length; t++) {
              let i = e[s[t]];
              if (r.some((e) => i.includes(e)) && (r.length > i.length ? i.some((e) => !r.includes(e)) : r.some((e) => !i.includes(e))))
                this.warn(`Groups '${n}' and '${s[t]}' overlap without one being a superset of the other`);
            }
          }
        }
      }
      const Pt = 5;
      class jt {
        constructor(e, t, s, i, n, r, l) {
          this.tokenizers = e;
          this.data = t;
          this.stateArray = s;
          this.skipData = i;
          this.skipInfo = n;
          this.states = r;
          this.builder = l;
          this.sharedActions = [];
        }
        findSharedActions(e) {
          if (e.actions.length < Pt) return null;
          let t = null;
          for (let r of this.sharedActions) {
            if ((!t || r.actions.length > t.actions.length) && r.actions.every((t) => e.actions.some((e) => e.eq(t)))) t = r;
          }
          if (t) return t;
          let s = null,
            i = [];
          for (let r = e.id + 1; r < this.states.length; r++) {
            let t = this.states[r],
              n = 0;
            if (t.defaultReduce || t.actions.length < Pt) continue;
            for (let s of e.actions) for (let e of t.actions) if (s.eq(e)) i[n++] = s;
            if (n >= Pt && (!s || s.length < n)) {
              s = i;
              i = [];
            }
          }
          if (!s) return null;
          let n = { actions: s, addr: this.storeActions(s, -1, null) };
          this.sharedActions.push(n);
          return n;
        }
        storeActions(e, t, s) {
          if (t < 0 && s && s.actions.length == e.length) return s.addr;
          let i = [];
          for (let n of e) {
            if (s && s.actions.some((e) => e.eq(n))) continue;
            if (n instanceof Ke) {
              i.push(n.term.id, n.target.id, 0);
            } else {
              let e = zt(n.rule, this.skipInfo);
              if (e != t) i.push(n.term.id, e & 65535, e >> 16);
            }
          }
          i.push(65535);
          if (t > -1) i.push(2, t & 65535, t >> 16);
          else if (s) i.push(1, s.addr & 65535, s.addr >> 16);
          else i.push(0);
          return this.data.storeArray(i);
        }
        finish(e, t, s) {
          let i = this.builder;
          let n = i.skipRules.indexOf(e.skip);
          let r = this.skipData[n],
            l = this.skipInfo[n].startTokens;
          let a = e.defaultReduce ? zt(e.defaultReduce, this.skipInfo) : 0;
          let o = t ? 1 : 0;
          let u = -1,
            h = null;
          if (a == 0) {
            if (t) for (const t of e.actions) if (t instanceof Xe && t.term.eof) u = zt(t.rule, this.skipInfo);
            if (u < 0) h = this.findSharedActions(e);
          }
          if (e.set.some((e) => e.rule.name.top && e.pos == e.rule.parts.length)) o |= 2;
          let f = [];
          for (let d = 0; d < e.actions.length + l.length; d++) {
            let t = d < e.actions.length ? e.actions[d].term : l[d - e.actions.length];
            for (;;) {
              let e = i.tokenOrigins[t.name];
              if (e && e.spec) {
                t = e.spec;
                continue;
              }
              if (e && e.external instanceof ns) Et(f, e.external);
              break;
            }
          }
          let c = 0;
          for (let d = 0; d < this.tokenizers.length; d++) {
            let t = this.tokenizers[d];
            if (f.includes(t) || t.groupID == e.tokenGroup) c |= 1 << d;
          }
          let p = e.id * 6;
          this.stateArray[p + 0] = o;
          this.stateArray[p + 1] = this.storeActions(a ? vt : e.actions, u, h);
          this.stateArray[p + 2] = r;
          this.stateArray[p + 3] = c;
          this.stateArray[p + 4] = a;
          this.stateArray[p + 5] = s;
        }
      }
      function Nt(e, t, s) {
        let i = e.props[t];
        if (!i || i.split(" ").indexOf(s) < 0) e.props[t] = i ? i + " " + s : s;
      }
      function At(e) {
        let t = Object.create(null);
        for (let { value: s, term: i, type: n } of e) {
          let e = n == "specialize" ? 0 : 1;
          t[s] = (i.id << 1) | e;
        }
        return t;
      }
      function zt(e, t, s = e.parts.length) {
        return e.name.id | 65536 | (e.isRepeatWrap && s == e.parts.length ? 131072 : 0) | (t.some((t) => t.rule == e.name) ? 262144 : 0) | (s << 19);
      }
      function Ct(e, t) {
        e: for (let s = 0; ; ) {
          let i = e.indexOf(t[0], s);
          if (i == -1 || i + t.length > e.length) break;
          for (let n = 1; n < t.length; n++) {
            if (t[n] != e[i + n]) {
              s = i + 1;
              continue e;
            }
          }
          return i;
        }
        return -1;
      }
      function It(e, t) {
        let s = Object.create(null);
        let i = [];
        let n = (e) => {
          if (!s[e.id]) {
            s[e.id] = true;
            i.push(e);
          }
        };
        for (let r of e) if (r.startRule && t.includes(r.startRule)) n(r);
        for (let r = 0; r < i.length; r++) {
          for (let e of i[r].actions) if (e instanceof Ke) n(e.target);
          for (let e of i[r].goto) n(e.target);
        }
        return (e) => !s[e];
      }
      class qt {
        constructor() {
          this.data = [];
        }
        storeArray(e) {
          let t = Ct(this.data, e);
          if (t > -1) return t;
          let s = this.data.length;
          for (let i of e) this.data.push(i);
          return s;
        }
        finish() {
          return Uint16Array.from(this.data);
        }
      }
      function Dt(e) {
        let t = {};
        let s = 0;
        for (let l of e) {
          for (let e of l.goto) {
            s = Math.max(e.term.id, s);
            let i = t[e.term.id] || (t[e.term.id] = {});
            (i[e.target.id] || (i[e.target.id] = [])).push(l.id);
          }
        }
        let i = new qt();
        let n = [];
        let r = s + 2;
        for (let l = 0; l <= s; l++) {
          let e = t[l];
          if (!e) {
            n.push(1);
            continue;
          }
          let s = [];
          let a = Object.keys(e);
          for (let t of a) {
            let i = e[t];
            s.push((t == a[a.length - 1] ? 1 : 0) + (i.length << 1));
            s.push(+t);
            for (let e of i) s.push(e);
          }
          n.push(i.storeArray(s) + r);
        }
        if (n.some((e) => e > 65535)) throw new B("Goto table too large");
        return Uint16Array.from([s + 1, ...n, ...i.data]);
      }
      class Gt {
        constructor(e, t) {
          this.tokens = e;
          this.groupID = t;
        }
        create() {
          return this.groupID;
        }
        createSource() {
          return String(this.groupID);
        }
      }
      function Et(e, t) {
        if (!e.includes(t)) e.push(t);
      }
      function Jt(e) {
        let t = Object.create(null);
        for (let s of e) {
          let e = 1 << s.groupID;
          for (let i of s.tokens) {
            t[i.id] = (t[i.id] || 0) | e;
          }
        }
        return t;
      }
      class _t {
        constructor(e, t, s) {
          this.name = e;
          this.expr = t;
          this.scope = s;
        }
      }
      class Bt {
        constructor(e, t, s, i) {
          this.name = e;
          this.start = t;
          this.to = s;
          this.args = i;
        }
      }
      class Ut {
        constructor(e, t) {
          this.b = e;
          this.ast = t;
          this.startState = new re();
          this.built = [];
          this.building = [];
          this.byDialect = Object.create(null);
          this.precedenceRelations = [];
          this.rules = t ? t.rules : vt;
          for (let s of this.rules) e.unique(s.id);
        }
        getToken(e) {
          for (let o of this.built) if (o.matches(e)) return o.term;
          let t = e.id.name;
          let s = this.rules.find((e) => e.id.name == t);
          if (!s) return null;
          let {
            name: i,
            props: n,
            dialect: r,
            exported: l,
          } = this.b.nodeInfo(s.props, "d", t, e.args, s.params.length != e.args.length ? vt : s.params);
          let a = this.b.makeTerminal(e.toString(), i, n);
          if (r != null) (this.byDialect[r] || (this.byDialect[r] = [])).push(a);
          if ((a.nodeType || l) && s.params.length == 0) {
            if (!a.nodeType) a.preserve = true;
            this.b.namedTerms[l || t] = a;
          }
          this.buildRule(s, e, this.startState, new re([a]));
          this.built.push(new Rt(t, e.args, a));
          return a;
        }
        buildRule(e, t, s, i, n = vt) {
          let r = t.id.name;
          if (e.params.length != t.args.length) this.b.raise(`Incorrect number of arguments for token '${r}'`, t.start);
          let l = this.building.find((e) => e.name == r && G(t.args, e.args));
          if (l) {
            if (l.to == i) {
              s.nullEdge(l.start);
              return;
            }
            let e = this.building.length - 1;
            while (this.building[e].name != r) e--;
            this.b.raise(
              `Invalid (non-tail) recursion in token rules: ${this.building
                .slice(e)
                .map((e) => e.name)
                .join(" -> ")}`,
              t.start
            );
          }
          this.b.used(e.id.name);
          let a = new re();
          s.nullEdge(a);
          this.building.push(new Bt(r, a, i, t.args));
          this.build(
            this.b.substituteArgs(e.expr, t.args, e.params),
            a,
            i,
            t.args.map((t, s) => new _t(e.params[s].name, t, n))
          );
          this.building.pop();
        }
        build(e, t, s, i) {
          if (e instanceof v) {
            let n = e.id.name,
              r = i.find((e) => e.name == n);
            if (r) return this.build(r.expr, t, s, r.scope);
            let l;
            for (let e = 0, t = this.b.localTokens; e <= t.length; e++) {
              let s = e == t.length ? this.b.tokens : t[e];
              l = s.rules.find((e) => e.id.name == n);
            }
            if (!l) return this.b.raise(`Reference to token rule '${e.id.name}', which isn't found`, e.start);
            this.buildRule(l, e, t, s, i);
          } else if (e instanceof q) {
            for (let [i, n] of I[e.type]) t.edge(i, n, s);
          } else if (e instanceof R) {
            for (let n of e.exprs) this.build(n, t, s, i);
          } else if (es(e)) {
            t.nullEdge(s);
          } else if (e instanceof O) {
            let n = e.markers.find((e) => e.length > 0);
            if (n) this.b.raise("Conflict marker in token expression", n[0].start);
            for (let r = 0; r < e.exprs.length; r++) {
              let n = r == e.exprs.length - 1 ? s : new re();
              this.build(e.exprs[r], t, n, i);
              t = n;
            }
          } else if (e instanceof j) {
            if (e.kind == "*") {
              let n = new re();
              t.nullEdge(n);
              this.build(e.expr, n, n, i);
              n.nullEdge(s);
            } else if (e.kind == "+") {
              let n = new re();
              this.build(e.expr, t, n, i);
              this.build(e.expr, n, n, i);
              n.nullEdge(s);
            } else {
              t.nullEdge(s);
              this.build(e.expr, t, s, i);
            }
          } else if (e instanceof A) {
            for (let [i, n] of e.inverted ? Wt(e.ranges) : e.ranges) Xt(t, s, i, n);
          } else if (e instanceof N) {
            for (let i = 0; i < e.value.length; i++) {
              let n = e.value.charCodeAt(i);
              let r = i == e.value.length - 1 ? s : new re();
              t.edge(n, n + 1, r);
              t = r;
            }
          } else if (e instanceof z) {
            let e = new re();
            t.edge(0, 56320, s);
            t.edge(56320, K + 1, s);
            t.edge(55296, 56320, e);
            e.edge(56320, 57344, s);
          } else {
            return this.b.raise(`Unrecognized expression type in token`, e.start);
          }
        }
        takePrecedences() {
          let e = (this.precedenceRelations = []);
          if (this.ast)
            for (let t of this.ast.precedences) {
              let s = [];
              for (let i of t.items) {
                let t = [];
                if (i instanceof v) {
                  for (let e of this.built) if (i.args.length ? e.matches(i) : e.id == i.id.name) t.push(e.term);
                } else {
                  let e = JSON.stringify(i.value),
                    s = this.built.find((t) => t.id == e);
                  if (s) t.push(s.term);
                }
                if (!t.length) this.b.warn(`Precedence specified for unknown token ${i}`, i.start);
                for (let i of t) is(e, i, s);
                s = s.concat(t);
              }
            }
        }
        precededBy(e, t) {
          let s = this.precedenceRelations.find((t) => t.term == e);
          return s && s.after.includes(t);
        }
        buildPrecTable(e) {
          let t = [],
            s = this.precedenceRelations.slice();
          for (let { a: i, b: n, soft: r } of e)
            if (r) {
              if (!s.some((e) => e.term == i) || !s.some((e) => e.term == n)) continue;
              if (r < 0) [i, n] = [n, i];
              is(s, n, [i]);
              is(s, i, []);
            }
          e: while (s.length) {
            for (let e = 0; e < s.length; e++) {
              let i = s[e];
              if (i.after.every((e) => t.includes(e.id))) {
                t.push(i.term.id);
                if (s.length == 1) break e;
                s[e] = s.pop();
                continue e;
              }
            }
            this.b.raise(`Cyclic token precedence relation between ${s.map((e) => e.term).join(", ")}`);
          }
          return t;
        }
      }
      class Mt extends Ut {
        constructor() {
          super(...arguments);
          this.explicitConflicts = [];
        }
        getLiteral(e) {
          let t = JSON.stringify(e.value);
          for (let o of this.built) if (o.id == t) return o.term;
          let s = null,
            i = {},
            n = null,
            r = null;
          let l = this.ast ? this.ast.literals.find((t) => t.literal == e.value) : null;
          if (l) ({ name: s, props: i, dialect: n, exported: r } = this.b.nodeInfo(l.props, "da", e.value));
          let a = this.b.makeTerminal(t, s, i);
          if (n != null) (this.byDialect[n] || (this.byDialect[n] = [])).push(a);
          if (r) this.b.namedTerms[r] = a;
          this.build(e, this.startState, new re([a]), vt);
          this.built.push(new Rt(t, vt, a));
          return a;
        }
        takeConflicts() {
          var e;
          let t = (e) => {
            if (e instanceof v) {
              for (let t of this.built) if (t.matches(e)) return t.term;
            } else {
              let t = JSON.stringify(e.value),
                s = this.built.find((e) => e.id == t);
              if (s) return s.term;
            }
            this.b.warn(`Precedence specified for unknown token ${e}`, e.start);
            return null;
          };
          for (let s of ((e = this.ast) === null || e === void 0 ? void 0 : e.conflicts) || []) {
            let e = t(s.a),
              i = t(s.b);
            if (e && i) {
              if (e.id < i.id) [e, i] = [i, e];
              this.explicitConflicts.push({ a: e, b: i });
            }
          }
        }
        buildTokenGroups(e, t, s) {
          let i = this.startState.compile();
          if (i.accepting.length)
            this.b.raise(
              `Grammar contains zero-length tokens (in '${i.accepting[0].name}')`,
              this.rules.find((e) => e.id.name == i.accepting[0].name).start
            );
          if (/\btokens\b/.test(Ue)) console.log(i.toString());
          let n = i.findConflicts(Lt(e, this.b, t)).filter(({ a: e, b: t }) => !this.precededBy(e, t) && !this.precededBy(t, e));
          for (let { a: h, b: f } of this.explicitConflicts) {
            if (!n.some((e) => e.a == h && e.b == f)) n.push(new le(h, f, 0, "", ""));
          }
          let r = n.filter((e) => e.soft),
            l = n.filter((e) => !e.soft);
          let a = [];
          let o = [];
          for (let h of e) {
            if (h.defaultReduce || h.tokenGroup > -1) continue;
            let e = [],
              i = [];
            let n = t[this.b.skipRules.indexOf(h.skip)].startTokens;
            for (let t of n) if (h.actions.some((e) => e.term == t)) this.b.raise(`Use of token ${t.name} conflicts with skip rule`);
            let r = [];
            for (let t = 0; t < h.actions.length + (n ? n.length : 0); t++) {
              let e = t < h.actions.length ? h.actions[t].term : n[t - h.actions.length];
              let s = this.b.tokenOrigins[e.name];
              if (s && s.spec) e = s.spec;
              else if (s && s.external) continue;
              Et(r, e);
            }
            if (r.length == 0) continue;
            for (let t of r) {
              for (let s of l) {
                let n = s.a == t ? s.b : s.b == t ? s.a : null;
                if (!n) continue;
                if (r.includes(n) && !a.some((e) => e.conflict == s)) {
                  let e = s.exampleA ? ` (example: ${JSON.stringify(s.exampleA)}${s.exampleB ? ` vs ${JSON.stringify(s.exampleB)}` : ""})` : "";
                  a.push({
                    error: `Overlapping tokens ${t.name} and ${n.name} used in same context${e}\n` + `After: ${h.set[0].trail()}`,
                    conflict: s,
                  });
                }
                Et(e, t);
                Et(i, n);
              }
            }
            let u = null;
            for (let t of o) {
              if (i.some((e) => t.tokens.includes(e))) continue;
              for (let s of e) Et(t.tokens, s);
              u = t;
              break;
            }
            if (!u) {
              u = new Gt(e, o.length + s);
              o.push(u);
            }
            h.tokenGroup = u.groupID;
          }
          if (a.length) this.b.raise(a.map((e) => e.error).join("\n\n"));
          if (o.length + s > 16) this.b.raise(`Too many different token groups (${o.length}) to represent them as a 16-bit bitfield`);
          let u = this.buildPrecTable(r);
          return { tokenGroups: o, tokenPrec: u, tokenData: i.toArray(Jt(o), u) };
        }
      }
      class Ft extends Ut {
        constructor(e, t) {
          super(e, t);
          this.fallback = null;
          if (t.fallback) e.unique(t.fallback.id);
        }
        getToken(e) {
          let t = null;
          if (this.ast.fallback && this.ast.fallback.id.name == e.id.name) {
            if (e.args.length) this.b.raise(`Incorrect number of arguments for ${e.id.name}`, e.start);
            if (!this.fallback) {
              let { name: t, props: s, exported: i } = this.b.nodeInfo(this.ast.fallback.props, "", e.id.name, vt, vt);
              let n = (this.fallback = this.b.makeTerminal(e.id.name, t, s));
              if (n.nodeType || i) {
                if (!n.nodeType) n.preserve = true;
                this.b.namedTerms[i || e.id.name] = n;
              }
              this.b.used(e.id.name);
            }
            t = this.fallback;
          } else {
            t = super.getToken(e);
          }
          if (t && !this.b.tokenOrigins[t.name]) this.b.tokenOrigins[t.name] = { group: this };
          return t;
        }
        buildLocalGroup(e, t, s) {
          let i = this.startState.compile();
          if (i.accepting.length)
            this.b.raise(
              `Grammar contains zero-length tokens (in '${i.accepting[0].name}')`,
              this.rules.find((e) => e.id.name == i.accepting[0].name).start
            );
          for (let { a: r, b: u, exampleA: h } of i.findConflicts(() => true)) {
            if (!this.precededBy(r, u) && !this.precededBy(u, r))
              this.b.raise(`Overlapping tokens ${r.name} and ${u.name} in local token group${h ? ` (example: ${JSON.stringify(h)})` : ""}`);
          }
          for (let r of e) {
            if (r.defaultReduce) continue;
            let e = null;
            let i = t[this.b.skipRules.indexOf(r.skip)].startTokens[0];
            for (let { term: t } of r.actions) {
              let s = this.b.tokenOrigins[t.name];
              if ((s === null || s === void 0 ? void 0 : s.group) == this) e = t;
              else i = t;
            }
            if (e) {
              if (i) this.b.raise(`Tokens from a local token group used together with other tokens (${e.name} with ${i.name})`);
              r.tokenGroup = s;
            }
          }
          let n = this.buildPrecTable(vt);
          let l = i.toArray({ [s]: 65535 }, n);
          let a = l.length;
          let o = new Uint16Array(l.length + n.length + 1);
          o.set(l, 0);
          o.set(n, a);
          o[o.length - 1] = 65535;
          return {
            groupID: s,
            create: () => new r.RA(o, a, this.fallback ? this.fallback.id : undefined),
            createSource: (e) => `new ${e("LocalTokenGroup", "@lezer/lr")}(${$t(o)}, ${a}${this.fallback ? `, ${this.fallback.id}` : ""})`,
          };
        }
      }
      function Lt(e, t, s) {
        let i = Object.create(null);
        function n(e, i) {
          return e.actions.some((e) => e.term == i) || s[t.skipRules.indexOf(e.skip)].startTokens.includes(i);
        }
        return (t, s) => {
          if (t.id < s.id) [t, s] = [s, t];
          let r = t.id | (s.id << 16),
            l = i[r];
          if (l != null) return l;
          return (i[r] = e.some((e) => n(e, t) && n(e, s)));
        };
      }
      function Wt(e) {
        let t = 0,
          s = [];
        for (let [i, n] of e) {
          if (i > t) s.push([t, i]);
          t = n;
        }
        if (t <= Zt) s.push([t, Zt + 1]);
        return s;
      }
      const Qt = 65536,
        Vt = 55296,
        Yt = 57344,
        Zt = 1114111;
      const Ht = 56320,
        Kt = 57343;
      function Xt(e, t, s, i) {
        if (s < Qt) {
          if (s < Vt) e.edge(s, Math.min(i, Vt), t);
          if (i > Yt) e.edge(Math.max(s, Yt), Math.min(i, K + 1), t);
          s = Qt;
        }
        if (i <= Qt) return;
        let n = String.fromCodePoint(s),
          r = String.fromCodePoint(i - 1);
        let l = n.charCodeAt(0),
          a = n.charCodeAt(1);
        let o = r.charCodeAt(0),
          u = r.charCodeAt(1);
        if (l == o) {
          let s = new re();
          e.edge(l, l + 1, s);
          s.edge(a, u + 1, t);
        } else {
          let s = l,
            i = o;
          if (a > Ht) {
            s++;
            let i = new re();
            e.edge(l, l + 1, i);
            i.edge(a, Kt + 1, t);
          }
          if (u < Kt) {
            i--;
            let s = new re();
            e.edge(o, o + 1, s);
            s.edge(Ht, u + 1, t);
          }
          if (s <= i) {
            let n = new re();
            e.edge(s, i + 1, n);
            n.edge(Ht, Kt + 1, t);
          }
        }
      }
      function es(e) {
        return e instanceof O && e.exprs.length == 0;
      }
      function ts(e, t) {
        let s = Object.create(null);
        for (let i of t) {
          e.unique(i.id);
          let { name: t, props: n, dialect: r } = e.nodeInfo(i.props, "d", i.id.name);
          let l = e.makeTerminal(i.id.name, t, n);
          if (r != null) (e.tokens.byDialect[r] || (e.tokens.byDialect[r] = [])).push(l);
          e.namedTerms[i.id.name] = s[i.id.name] = l;
        }
        return s;
      }
      function ss(e, t, s) {
        let i = t[s.id.name];
        if (!i) return null;
        if (s.args.length) e.raise("External tokens cannot take arguments", s.args[0].start);
        e.used(s.id.name);
        return i;
      }
      function is(e, t, s) {
        let i = e.findIndex((e) => e.term == t);
        if (i < 0) e.push({ term: t, after: s });
        else e[i] = { term: t, after: e[i].after.concat(s) };
      }
      class ns {
        constructor(e, t) {
          this.b = e;
          this.ast = t;
          this.tokens = ts(e, t.tokens);
          for (let s in this.tokens) this.b.tokenOrigins[this.tokens[s].name] = { external: this };
        }
        getToken(e) {
          return ss(this.b, this.tokens, e);
        }
        create() {
          return this.b.options.externalTokenizer(this.ast.id.name, this.b.termTable);
        }
        createSource(e) {
          let {
            source: t,
            id: { name: s },
          } = this.ast;
          return e(s, t);
        }
      }
      class rs {
        constructor(e, t) {
          this.b = e;
          this.ast = t;
          this.term = null;
          this.tokens = ts(e, t.tokens);
        }
        finish() {
          let e = this.b.normalizeExpr(this.ast.token);
          if (e.length != 1 || e[0].terms.length != 1 || !e[0].terms[0].terminal)
            this.b.raise(`The token expression to '@external ${this.ast.type}' must resolve to a token`, this.ast.token.start);
          this.term = e[0].terms[0];
          for (let t in this.tokens) this.b.tokenOrigins[this.tokens[t].name] = { spec: this.term, external: this };
        }
        getToken(e) {
          return ss(this.b, this.tokens, e);
        }
      }
      function ls(e, t) {
        for (let s = 0; ; s++) {
          let i = Object.create(null),
            n;
          if (s == 0)
            for (let l of e) {
              if (l.name.inline && !i[l.name.name]) {
                let a = e.filter((e) => e.name == l.name);
                if (a.some((e) => e.parts.includes(l.name))) continue;
                n = i[l.name.name] = a;
              }
            }
          for (let o = 0; o < e.length; o++) {
            let u = e[o];
            if (
              !u.name.interesting &&
              !u.parts.includes(u.name) &&
              u.parts.length < 3 &&
              !t.includes(u.name) &&
              (u.parts.length == 1 || e.every((e) => e.skip == u.skip || !e.parts.includes(u.name))) &&
              !u.parts.some((e) => !!i[e.name]) &&
              !e.some((e, t) => t != o && e.name == u.name)
            )
              n = i[u.name.name] = [u];
          }
          if (!n) return e;
          let r = [];
          for (let h of e) {
            if (i[h.name.name]) continue;
            if (!h.parts.some((e) => !!i[e.name])) {
              r.push(h);
              continue;
            }
            function f(e, t, s) {
              if (e == h.parts.length) {
                r.push(new H(h.name, s, t, h.skip));
                return;
              }
              let n = h.parts[e],
                l = i[n.name];
              if (!l) {
                f(e + 1, t.concat(h.conflicts[e + 1]), s.concat(n));
                return;
              }
              for (let i of l)
                f(
                  e + 1,
                  t
                    .slice(0, t.length - 1)
                    .concat(t[e].join(i.conflicts[0]))
                    .concat(i.conflicts.slice(1, i.conflicts.length - 1))
                    .concat(h.conflicts[e + 1].join(i.conflicts[i.conflicts.length - 1])),
                  s.concat(i.parts)
                );
            }
            f(0, [h.conflicts[0]], []);
          }
          e = r;
        }
      }
      function as(e) {
        let t = Object.create(null),
          s;
        for (let n = 0; n < e.length; ) {
          let i = n;
          let r = e[n++].name;
          while (n < e.length && e[n].name == r) n++;
          let l = n - i;
          if (r.interesting) continue;
          for (let a = n; a < e.length; ) {
            let n = a,
              o = e[a++].name;
            while (a < e.length && e[a].name == o) a++;
            if (a - n != l || o.interesting) continue;
            let u = true;
            for (let t = 0; t < l && u; t++) {
              let s = e[i + t],
                r = e[n + t];
              if (s.cmpNoName(r) != 0) u = false;
            }
            if (u) s = t[r.name] = o;
          }
        }
        if (!s) return e;
        let i = [];
        for (let n of e)
          if (!t[n.name.name]) {
            i.push(
              n.parts.every((e) => !t[e.name])
                ? n
                : new H(
                    n.name,
                    n.parts.map((e) => t[e.name] || e),
                    n.conflicts,
                    n.skip
                  )
            );
          }
        return i;
      }
      function os(e, t) {
        return as(ls(e, t));
      }
      function us(e, t = {}) {
        let s = new Ot(e, t),
          i = s.getParser();
        i.termTable = s.termTable;
        return i;
      }
      const hs = [
        "await",
        "break",
        "case",
        "catch",
        "continue",
        "debugger",
        "default",
        "do",
        "else",
        "finally",
        "for",
        "function",
        "if",
        "return",
        "switch",
        "throw",
        "try",
        "var",
        "while",
        "with",
        "null",
        "true",
        "false",
        "instanceof",
        "typeof",
        "void",
        "delete",
        "new",
        "in",
        "this",
        "const",
        "class",
        "extends",
        "export",
        "import",
        "super",
        "enum",
        "implements",
        "interface",
        "let",
        "package",
        "private",
        "protected",
        "public",
        "static",
        "yield",
        "require",
      ];
      function fs(e, t = {}) {
        return new Ot(e, t).getParserFile();
      }
      function cs(e) {
        let t = e[0];
        return t == "_" || t.toUpperCase() != t;
      }
      function ps(e) {
        return e.props.some((e) => e.at && e.name == "export");
      }
    },
  },
]);
