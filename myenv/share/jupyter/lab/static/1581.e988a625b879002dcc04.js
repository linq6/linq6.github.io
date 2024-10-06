/*! For license information please see 1581.e988a625b879002dcc04.js.LICENSE.txt */
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1581],
  {
    1581: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = void 0;
      const s = r(27159);
      const n = r(93924);
      const a = r(1240);
      const o = r(98);
      const i = ["/properties"];
      const c = "http://json-schema.org/draft-07/schema";
      class u extends s.default {
        _addVocabularies() {
          super._addVocabularies();
          n.default.forEach((e) => this.addVocabulary(e));
          if (this.opts.discriminator) this.addKeyword(a.default);
        }
        _addDefaultMetaSchema() {
          super._addDefaultMetaSchema();
          if (!this.opts.meta) return;
          const e = this.opts.$data ? this.$dataMetaSchema(o, i) : o;
          this.addMetaSchema(e, c, false);
          this.refs["http://json-schema.org/schema"] = c;
        }
        defaultMeta() {
          return (this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(c) ? c : undefined));
        }
      }
      e.exports = t = u;
      Object.defineProperty(t, "__esModule", { value: true });
      t["default"] = u;
      var l = r(74815);
      Object.defineProperty(t, "KeywordCxt", {
        enumerable: true,
        get: function () {
          return l.KeywordCxt;
        },
      });
      var d = r(93487);
      Object.defineProperty(t, "_", {
        enumerable: true,
        get: function () {
          return d._;
        },
      });
      Object.defineProperty(t, "str", {
        enumerable: true,
        get: function () {
          return d.str;
        },
      });
      Object.defineProperty(t, "stringify", {
        enumerable: true,
        get: function () {
          return d.stringify;
        },
      });
      Object.defineProperty(t, "nil", {
        enumerable: true,
        get: function () {
          return d.nil;
        },
      });
      Object.defineProperty(t, "Name", {
        enumerable: true,
        get: function () {
          return d.Name;
        },
      });
      Object.defineProperty(t, "CodeGen", {
        enumerable: true,
        get: function () {
          return d.CodeGen;
        },
      });
      var f = r(67426);
      Object.defineProperty(t, "ValidationError", {
        enumerable: true,
        get: function () {
          return f.default;
        },
      });
      var h = r(6646);
      Object.defineProperty(t, "MissingRefError", {
        enumerable: true,
        get: function () {
          return h.default;
        },
      });
    },
    57023: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.regexpCode =
        t.getEsmExportName =
        t.getProperty =
        t.safeStringify =
        t.stringify =
        t.strConcat =
        t.addCodeArg =
        t.str =
        t._ =
        t.nil =
        t._Code =
        t.Name =
        t.IDENTIFIER =
        t._CodeOrName =
          void 0;
      class r {}
      t._CodeOrName = r;
      t.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
      class s extends r {
        constructor(e) {
          super();
          if (!t.IDENTIFIER.test(e)) throw new Error("CodeGen: name must be a valid identifier");
          this.str = e;
        }
        toString() {
          return this.str;
        }
        emptyStr() {
          return false;
        }
        get names() {
          return { [this.str]: 1 };
        }
      }
      t.Name = s;
      class n extends r {
        constructor(e) {
          super();
          this._items = typeof e === "string" ? [e] : e;
        }
        toString() {
          return this.str;
        }
        emptyStr() {
          if (this._items.length > 1) return false;
          const e = this._items[0];
          return e === "" || e === '""';
        }
        get str() {
          var e;
          return (e = this._str) !== null && e !== void 0 ? e : (this._str = this._items.reduce((e, t) => `${e}${t}`, ""));
        }
        get names() {
          var e;
          return (e = this._names) !== null && e !== void 0
            ? e
            : (this._names = this._items.reduce((e, t) => {
                if (t instanceof s) e[t.str] = (e[t.str] || 0) + 1;
                return e;
              }, {}));
        }
      }
      t._Code = n;
      t.nil = new n("");
      function a(e, ...t) {
        const r = [e[0]];
        let s = 0;
        while (s < t.length) {
          c(r, t[s]);
          r.push(e[++s]);
        }
        return new n(r);
      }
      t._ = a;
      const o = new n("+");
      function i(e, ...t) {
        const r = [p(e[0])];
        let s = 0;
        while (s < t.length) {
          r.push(o);
          c(r, t[s]);
          r.push(o, p(e[++s]));
        }
        u(r);
        return new n(r);
      }
      t.str = i;
      function c(e, t) {
        if (t instanceof n) e.push(...t._items);
        else if (t instanceof s) e.push(t);
        else e.push(f(t));
      }
      t.addCodeArg = c;
      function u(e) {
        let t = 1;
        while (t < e.length - 1) {
          if (e[t] === o) {
            const r = l(e[t - 1], e[t + 1]);
            if (r !== undefined) {
              e.splice(t - 1, 3, r);
              continue;
            }
            e[t++] = "+";
          }
          t++;
        }
      }
      function l(e, t) {
        if (t === '""') return e;
        if (e === '""') return t;
        if (typeof e == "string") {
          if (t instanceof s || e[e.length - 1] !== '"') return;
          if (typeof t != "string") return `${e.slice(0, -1)}${t}"`;
          if (t[0] === '"') return e.slice(0, -1) + t.slice(1);
          return;
        }
        if (typeof t == "string" && t[0] === '"' && !(e instanceof s)) return `"${e}${t.slice(1)}`;
        return;
      }
      function d(e, t) {
        return t.emptyStr() ? e : e.emptyStr() ? t : i`${e}${t}`;
      }
      t.strConcat = d;
      function f(e) {
        return typeof e == "number" || typeof e == "boolean" || e === null ? e : p(Array.isArray(e) ? e.join(",") : e);
      }
      function h(e) {
        return new n(p(e));
      }
      t.stringify = h;
      function p(e) {
        return JSON.stringify(e)
          .replace(/\u2028/g, "\\u2028")
          .replace(/\u2029/g, "\\u2029");
      }
      t.safeStringify = p;
      function m(e) {
        return typeof e == "string" && t.IDENTIFIER.test(e) ? new n(`.${e}`) : a`[${e}]`;
      }
      t.getProperty = m;
      function y(e) {
        if (typeof e == "string" && t.IDENTIFIER.test(e)) {
          return new n(`${e}`);
        }
        throw new Error(`CodeGen: invalid export name: ${e}, use explicit $id name mapping`);
      }
      t.getEsmExportName = y;
      function v(e) {
        return new n(e.toString());
      }
      t.regexpCode = v;
    },
    93487: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.or =
        t.and =
        t.not =
        t.CodeGen =
        t.operators =
        t.varKinds =
        t.ValueScopeName =
        t.ValueScope =
        t.Scope =
        t.Name =
        t.regexpCode =
        t.stringify =
        t.getProperty =
        t.nil =
        t.strConcat =
        t.str =
        t._ =
          void 0;
      const s = r(57023);
      const n = r(98490);
      var a = r(57023);
      Object.defineProperty(t, "_", {
        enumerable: true,
        get: function () {
          return a._;
        },
      });
      Object.defineProperty(t, "str", {
        enumerable: true,
        get: function () {
          return a.str;
        },
      });
      Object.defineProperty(t, "strConcat", {
        enumerable: true,
        get: function () {
          return a.strConcat;
        },
      });
      Object.defineProperty(t, "nil", {
        enumerable: true,
        get: function () {
          return a.nil;
        },
      });
      Object.defineProperty(t, "getProperty", {
        enumerable: true,
        get: function () {
          return a.getProperty;
        },
      });
      Object.defineProperty(t, "stringify", {
        enumerable: true,
        get: function () {
          return a.stringify;
        },
      });
      Object.defineProperty(t, "regexpCode", {
        enumerable: true,
        get: function () {
          return a.regexpCode;
        },
      });
      Object.defineProperty(t, "Name", {
        enumerable: true,
        get: function () {
          return a.Name;
        },
      });
      var o = r(98490);
      Object.defineProperty(t, "Scope", {
        enumerable: true,
        get: function () {
          return o.Scope;
        },
      });
      Object.defineProperty(t, "ValueScope", {
        enumerable: true,
        get: function () {
          return o.ValueScope;
        },
      });
      Object.defineProperty(t, "ValueScopeName", {
        enumerable: true,
        get: function () {
          return o.ValueScopeName;
        },
      });
      Object.defineProperty(t, "varKinds", {
        enumerable: true,
        get: function () {
          return o.varKinds;
        },
      });
      t.operators = {
        GT: new s._Code(">"),
        GTE: new s._Code(">="),
        LT: new s._Code("<"),
        LTE: new s._Code("<="),
        EQ: new s._Code("==="),
        NEQ: new s._Code("!=="),
        NOT: new s._Code("!"),
        OR: new s._Code("||"),
        AND: new s._Code("&&"),
        ADD: new s._Code("+"),
      };
      class i {
        optimizeNodes() {
          return this;
        }
        optimizeNames(e, t) {
          return this;
        }
      }
      class c extends i {
        constructor(e, t, r) {
          super();
          this.varKind = e;
          this.name = t;
          this.rhs = r;
        }
        render({ es5: e, _n: t }) {
          const r = e ? n.varKinds.var : this.varKind;
          const s = this.rhs === undefined ? "" : ` = ${this.rhs}`;
          return `${r} ${this.name}${s};` + t;
        }
        optimizeNames(e, t) {
          if (!e[this.name.str]) return;
          if (this.rhs) this.rhs = T(this.rhs, e, t);
          return this;
        }
        get names() {
          return this.rhs instanceof s._CodeOrName ? this.rhs.names : {};
        }
      }
      class u extends i {
        constructor(e, t, r) {
          super();
          this.lhs = e;
          this.rhs = t;
          this.sideEffects = r;
        }
        render({ _n: e }) {
          return `${this.lhs} = ${this.rhs};` + e;
        }
        optimizeNames(e, t) {
          if (this.lhs instanceof s.Name && !e[this.lhs.str] && !this.sideEffects) return;
          this.rhs = T(this.rhs, e, t);
          return this;
        }
        get names() {
          const e = this.lhs instanceof s.Name ? {} : { ...this.lhs.names };
          return x(e, this.rhs);
        }
      }
      class l extends u {
        constructor(e, t, r, s) {
          super(e, r, s);
          this.op = t;
        }
        render({ _n: e }) {
          return `${this.lhs} ${this.op}= ${this.rhs};` + e;
        }
      }
      class d extends i {
        constructor(e) {
          super();
          this.label = e;
          this.names = {};
        }
        render({ _n: e }) {
          return `${this.label}:` + e;
        }
      }
      class f extends i {
        constructor(e) {
          super();
          this.label = e;
          this.names = {};
        }
        render({ _n: e }) {
          const t = this.label ? ` ${this.label}` : "";
          return `break${t};` + e;
        }
      }
      class h extends i {
        constructor(e) {
          super();
          this.error = e;
        }
        render({ _n: e }) {
          return `throw ${this.error};` + e;
        }
        get names() {
          return this.error.names;
        }
      }
      class p extends i {
        constructor(e) {
          super();
          this.code = e;
        }
        render({ _n: e }) {
          return `${this.code};` + e;
        }
        optimizeNodes() {
          return `${this.code}` ? this : undefined;
        }
        optimizeNames(e, t) {
          this.code = T(this.code, e, t);
          return this;
        }
        get names() {
          return this.code instanceof s._CodeOrName ? this.code.names : {};
        }
      }
      class m extends i {
        constructor(e = []) {
          super();
          this.nodes = e;
        }
        render(e) {
          return this.nodes.reduce((t, r) => t + r.render(e), "");
        }
        optimizeNodes() {
          const { nodes: e } = this;
          let t = e.length;
          while (t--) {
            const r = e[t].optimizeNodes();
            if (Array.isArray(r)) e.splice(t, 1, ...r);
            else if (r) e[t] = r;
            else e.splice(t, 1);
          }
          return e.length > 0 ? this : undefined;
        }
        optimizeNames(e, t) {
          const { nodes: r } = this;
          let s = r.length;
          while (s--) {
            const n = r[s];
            if (n.optimizeNames(e, t)) continue;
            I(e, n.names);
            r.splice(s, 1);
          }
          return r.length > 0 ? this : undefined;
        }
        get names() {
          return this.nodes.reduce((e, t) => O(e, t.names), {});
        }
      }
      class y extends m {
        render(e) {
          return "{" + e._n + super.render(e) + "}" + e._n;
        }
      }
      class v extends m {}
      class g extends y {}
      g.kind = "else";
      class $ extends y {
        constructor(e, t) {
          super(t);
          this.condition = e;
        }
        render(e) {
          let t = `if(${this.condition})` + super.render(e);
          if (this.else) t += "else " + this.else.render(e);
          return t;
        }
        optimizeNodes() {
          super.optimizeNodes();
          const e = this.condition;
          if (e === true) return this.nodes;
          let t = this.else;
          if (t) {
            const e = t.optimizeNodes();
            t = this.else = Array.isArray(e) ? new g(e) : e;
          }
          if (t) {
            if (e === false) return t instanceof $ ? t : t.nodes;
            if (this.nodes.length) return this;
            return new $(R(e), t instanceof $ ? [t] : t.nodes);
          }
          if (e === false || !this.nodes.length) return undefined;
          return this;
        }
        optimizeNames(e, t) {
          var r;
          this.else = (r = this.else) === null || r === void 0 ? void 0 : r.optimizeNames(e, t);
          if (!(super.optimizeNames(e, t) || this.else)) return;
          this.condition = T(this.condition, e, t);
          return this;
        }
        get names() {
          const e = super.names;
          x(e, this.condition);
          if (this.else) O(e, this.else.names);
          return e;
        }
      }
      $.kind = "if";
      class _ extends y {}
      _.kind = "for";
      class w extends _ {
        constructor(e) {
          super();
          this.iteration = e;
        }
        render(e) {
          return `for(${this.iteration})` + super.render(e);
        }
        optimizeNames(e, t) {
          if (!super.optimizeNames(e, t)) return;
          this.iteration = T(this.iteration, e, t);
          return this;
        }
        get names() {
          return O(super.names, this.iteration.names);
        }
      }
      class b extends _ {
        constructor(e, t, r, s) {
          super();
          this.varKind = e;
          this.name = t;
          this.from = r;
          this.to = s;
        }
        render(e) {
          const t = e.es5 ? n.varKinds.var : this.varKind;
          const { name: r, from: s, to: a } = this;
          return `for(${t} ${r}=${s}; ${r}<${a}; ${r}++)` + super.render(e);
        }
        get names() {
          const e = x(super.names, this.from);
          return x(e, this.to);
        }
      }
      class E extends _ {
        constructor(e, t, r, s) {
          super();
          this.loop = e;
          this.varKind = t;
          this.name = r;
          this.iterable = s;
        }
        render(e) {
          return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e);
        }
        optimizeNames(e, t) {
          if (!super.optimizeNames(e, t)) return;
          this.iterable = T(this.iterable, e, t);
          return this;
        }
        get names() {
          return O(super.names, this.iterable.names);
        }
      }
      class P extends y {
        constructor(e, t, r) {
          super();
          this.name = e;
          this.args = t;
          this.async = r;
        }
        render(e) {
          const t = this.async ? "async " : "";
          return `${t}function ${this.name}(${this.args})` + super.render(e);
        }
      }
      P.kind = "func";
      class S extends m {
        render(e) {
          return "return " + super.render(e);
        }
      }
      S.kind = "return";
      class N extends y {
        render(e) {
          let t = "try" + super.render(e);
          if (this.catch) t += this.catch.render(e);
          if (this.finally) t += this.finally.render(e);
          return t;
        }
        optimizeNodes() {
          var e, t;
          super.optimizeNodes();
          (e = this.catch) === null || e === void 0 ? void 0 : e.optimizeNodes();
          (t = this.finally) === null || t === void 0 ? void 0 : t.optimizeNodes();
          return this;
        }
        optimizeNames(e, t) {
          var r, s;
          super.optimizeNames(e, t);
          (r = this.catch) === null || r === void 0 ? void 0 : r.optimizeNames(e, t);
          (s = this.finally) === null || s === void 0 ? void 0 : s.optimizeNames(e, t);
          return this;
        }
        get names() {
          const e = super.names;
          if (this.catch) O(e, this.catch.names);
          if (this.finally) O(e, this.finally.names);
          return e;
        }
      }
      class k extends y {
        constructor(e) {
          super();
          this.error = e;
        }
        render(e) {
          return `catch(${this.error})` + super.render(e);
        }
      }
      k.kind = "catch";
      class C extends y {
        render(e) {
          return "finally" + super.render(e);
        }
      }
      C.kind = "finally";
      class j {
        constructor(e, t = {}) {
          this._values = {};
          this._blockStarts = [];
          this._constants = {};
          this.opts = { ...t, _n: t.lines ? "\n" : "" };
          this._extScope = e;
          this._scope = new n.Scope({ parent: e });
          this._nodes = [new v()];
        }
        toString() {
          return this._root.render(this.opts);
        }
        name(e) {
          return this._scope.name(e);
        }
        scopeName(e) {
          return this._extScope.name(e);
        }
        scopeValue(e, t) {
          const r = this._extScope.value(e, t);
          const s = this._values[r.prefix] || (this._values[r.prefix] = new Set());
          s.add(r);
          return r;
        }
        getScopeValue(e, t) {
          return this._extScope.getValue(e, t);
        }
        scopeRefs(e) {
          return this._extScope.scopeRefs(e, this._values);
        }
        scopeCode() {
          return this._extScope.scopeCode(this._values);
        }
        _def(e, t, r, s) {
          const n = this._scope.toName(t);
          if (r !== undefined && s) this._constants[n.str] = r;
          this._leafNode(new c(e, n, r));
          return n;
        }
        const(e, t, r) {
          return this._def(n.varKinds.const, e, t, r);
        }
        let(e, t, r) {
          return this._def(n.varKinds.let, e, t, r);
        }
        var(e, t, r) {
          return this._def(n.varKinds.var, e, t, r);
        }
        assign(e, t, r) {
          return this._leafNode(new u(e, t, r));
        }
        add(e, r) {
          return this._leafNode(new l(e, t.operators.ADD, r));
        }
        code(e) {
          if (typeof e == "function") e();
          else if (e !== s.nil) this._leafNode(new p(e));
          return this;
        }
        object(...e) {
          const t = ["{"];
          for (const [r, n] of e) {
            if (t.length > 1) t.push(",");
            t.push(r);
            if (r !== n || this.opts.es5) {
              t.push(":");
              (0, s.addCodeArg)(t, n);
            }
          }
          t.push("}");
          return new s._Code(t);
        }
        if(e, t, r) {
          this._blockNode(new $(e));
          if (t && r) {
            this.code(t).else().code(r).endIf();
          } else if (t) {
            this.code(t).endIf();
          } else if (r) {
            throw new Error('CodeGen: "else" body without "then" body');
          }
          return this;
        }
        elseIf(e) {
          return this._elseNode(new $(e));
        }
        else() {
          return this._elseNode(new g());
        }
        endIf() {
          return this._endBlockNode($, g);
        }
        _for(e, t) {
          this._blockNode(e);
          if (t) this.code(t).endFor();
          return this;
        }
        for(e, t) {
          return this._for(new w(e), t);
        }
        forRange(e, t, r, s, a = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
          const o = this._scope.toName(e);
          return this._for(new b(a, o, t, r), () => s(o));
        }
        forOf(e, t, r, a = n.varKinds.const) {
          const o = this._scope.toName(e);
          if (this.opts.es5) {
            const e = t instanceof s.Name ? t : this.var("_arr", t);
            return this.forRange("_i", 0, (0, s._)`${e}.length`, (t) => {
              this.var(o, (0, s._)`${e}[${t}]`);
              r(o);
            });
          }
          return this._for(new E("of", a, o, t), () => r(o));
        }
        forIn(e, t, r, a = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
          if (this.opts.ownProperties) {
            return this.forOf(e, (0, s._)`Object.keys(${t})`, r);
          }
          const o = this._scope.toName(e);
          return this._for(new E("in", a, o, t), () => r(o));
        }
        endFor() {
          return this._endBlockNode(_);
        }
        label(e) {
          return this._leafNode(new d(e));
        }
        break(e) {
          return this._leafNode(new f(e));
        }
        return(e) {
          const t = new S();
          this._blockNode(t);
          this.code(e);
          if (t.nodes.length !== 1) throw new Error('CodeGen: "return" should have one node');
          return this._endBlockNode(S);
        }
        try(e, t, r) {
          if (!t && !r) throw new Error('CodeGen: "try" without "catch" and "finally"');
          const s = new N();
          this._blockNode(s);
          this.code(e);
          if (t) {
            const e = this.name("e");
            this._currNode = s.catch = new k(e);
            t(e);
          }
          if (r) {
            this._currNode = s.finally = new C();
            this.code(r);
          }
          return this._endBlockNode(k, C);
        }
        throw(e) {
          return this._leafNode(new h(e));
        }
        block(e, t) {
          this._blockStarts.push(this._nodes.length);
          if (e) this.code(e).endBlock(t);
          return this;
        }
        endBlock(e) {
          const t = this._blockStarts.pop();
          if (t === undefined) throw new Error("CodeGen: not in self-balancing block");
          const r = this._nodes.length - t;
          if (r < 0 || (e !== undefined && r !== e)) {
            throw new Error(`CodeGen: wrong number of nodes: ${r} vs ${e} expected`);
          }
          this._nodes.length = t;
          return this;
        }
        func(e, t = s.nil, r, n) {
          this._blockNode(new P(e, t, r));
          if (n) this.code(n).endFunc();
          return this;
        }
        endFunc() {
          return this._endBlockNode(P);
        }
        optimize(e = 1) {
          while (e-- > 0) {
            this._root.optimizeNodes();
            this._root.optimizeNames(this._root.names, this._constants);
          }
        }
        _leafNode(e) {
          this._currNode.nodes.push(e);
          return this;
        }
        _blockNode(e) {
          this._currNode.nodes.push(e);
          this._nodes.push(e);
        }
        _endBlockNode(e, t) {
          const r = this._currNode;
          if (r instanceof e || (t && r instanceof t)) {
            this._nodes.pop();
            return this;
          }
          throw new Error(`CodeGen: not in block "${t ? `${e.kind}/${t.kind}` : e.kind}"`);
        }
        _elseNode(e) {
          const t = this._currNode;
          if (!(t instanceof $)) {
            throw new Error('CodeGen: "else" without "if"');
          }
          this._currNode = t.else = e;
          return this;
        }
        get _root() {
          return this._nodes[0];
        }
        get _currNode() {
          const e = this._nodes;
          return e[e.length - 1];
        }
        set _currNode(e) {
          const t = this._nodes;
          t[t.length - 1] = e;
        }
      }
      t.CodeGen = j;
      function O(e, t) {
        for (const r in t) e[r] = (e[r] || 0) + (t[r] || 0);
        return e;
      }
      function x(e, t) {
        return t instanceof s._CodeOrName ? O(e, t.names) : e;
      }
      function T(e, t, r) {
        if (e instanceof s.Name) return n(e);
        if (!a(e)) return e;
        return new s._Code(
          e._items.reduce((e, t) => {
            if (t instanceof s.Name) t = n(t);
            if (t instanceof s._Code) e.push(...t._items);
            else e.push(t);
            return e;
          }, [])
        );
        function n(e) {
          const s = r[e.str];
          if (s === undefined || t[e.str] !== 1) return e;
          delete t[e.str];
          return s;
        }
        function a(e) {
          return e instanceof s._Code && e._items.some((e) => e instanceof s.Name && t[e.str] === 1 && r[e.str] !== undefined);
        }
      }
      function I(e, t) {
        for (const r in t) e[r] = (e[r] || 0) - (t[r] || 0);
      }
      function R(e) {
        return typeof e == "boolean" || typeof e == "number" || e === null ? !e : (0, s._)`!${U(e)}`;
      }
      t.not = R;
      const D = F(t.operators.AND);
      function A(...e) {
        return e.reduce(D);
      }
      t.and = A;
      const M = F(t.operators.OR);
      function V(...e) {
        return e.reduce(M);
      }
      t.or = V;
      function F(e) {
        return (t, r) => (t === s.nil ? r : r === s.nil ? t : (0, s._)`${U(t)} ${e} ${U(r)}`);
      }
      function U(e) {
        return e instanceof s.Name ? e : (0, s._)`(${e})`;
      }
    },
    98490: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.ValueScope = t.ValueScopeName = t.Scope = t.varKinds = t.UsedValueState = void 0;
      const s = r(57023);
      class n extends Error {
        constructor(e) {
          super(`CodeGen: "code" for ${e} not defined`);
          this.value = e.value;
        }
      }
      var a;
      (function (e) {
        e[(e["Started"] = 0)] = "Started";
        e[(e["Completed"] = 1)] = "Completed";
      })((a = t.UsedValueState || (t.UsedValueState = {})));
      t.varKinds = { const: new s.Name("const"), let: new s.Name("let"), var: new s.Name("var") };
      class o {
        constructor({ prefixes: e, parent: t } = {}) {
          this._names = {};
          this._prefixes = e;
          this._parent = t;
        }
        toName(e) {
          return e instanceof s.Name ? e : this.name(e);
        }
        name(e) {
          return new s.Name(this._newName(e));
        }
        _newName(e) {
          const t = this._names[e] || this._nameGroup(e);
          return `${e}${t.index++}`;
        }
        _nameGroup(e) {
          var t, r;
          if (
            ((r = (t = this._parent) === null || t === void 0 ? void 0 : t._prefixes) === null || r === void 0 ? void 0 : r.has(e)) ||
            (this._prefixes && !this._prefixes.has(e))
          ) {
            throw new Error(`CodeGen: prefix "${e}" is not allowed in this scope`);
          }
          return (this._names[e] = { prefix: e, index: 0 });
        }
      }
      t.Scope = o;
      class i extends s.Name {
        constructor(e, t) {
          super(t);
          this.prefix = e;
        }
        setValue(e, { property: t, itemIndex: r }) {
          this.value = e;
          this.scopePath = (0, s._)`.${new s.Name(t)}[${r}]`;
        }
      }
      t.ValueScopeName = i;
      const c = (0, s._)`\n`;
      class u extends o {
        constructor(e) {
          super(e);
          this._values = {};
          this._scope = e.scope;
          this.opts = { ...e, _n: e.lines ? c : s.nil };
        }
        get() {
          return this._scope;
        }
        name(e) {
          return new i(e, this._newName(e));
        }
        value(e, t) {
          var r;
          if (t.ref === undefined) throw new Error("CodeGen: ref must be passed in value");
          const s = this.toName(e);
          const { prefix: n } = s;
          const a = (r = t.key) !== null && r !== void 0 ? r : t.ref;
          let o = this._values[n];
          if (o) {
            const e = o.get(a);
            if (e) return e;
          } else {
            o = this._values[n] = new Map();
          }
          o.set(a, s);
          const i = this._scope[n] || (this._scope[n] = []);
          const c = i.length;
          i[c] = t.ref;
          s.setValue(t, { property: n, itemIndex: c });
          return s;
        }
        getValue(e, t) {
          const r = this._values[e];
          if (!r) return;
          return r.get(t);
        }
        scopeRefs(e, t = this._values) {
          return this._reduceValues(t, (t) => {
            if (t.scopePath === undefined) throw new Error(`CodeGen: name "${t}" has no value`);
            return (0, s._)`${e}${t.scopePath}`;
          });
        }
        scopeCode(e = this._values, t, r) {
          return this._reduceValues(
            e,
            (e) => {
              if (e.value === undefined) throw new Error(`CodeGen: name "${e}" has no value`);
              return e.value.code;
            },
            t,
            r
          );
        }
        _reduceValues(e, r, o = {}, i) {
          let c = s.nil;
          for (const u in e) {
            const l = e[u];
            if (!l) continue;
            const d = (o[u] = o[u] || new Map());
            l.forEach((e) => {
              if (d.has(e)) return;
              d.set(e, a.Started);
              let o = r(e);
              if (o) {
                const r = this.opts.es5 ? t.varKinds.var : t.varKinds.const;
                c = (0, s._)`${c}${r} ${e} = ${o};${this.opts._n}`;
              } else if ((o = i === null || i === void 0 ? void 0 : i(e))) {
                c = (0, s._)`${c}${o}${this.opts._n}`;
              } else {
                throw new n(e);
              }
              d.set(e, a.Completed);
            });
          }
          return c;
        }
      }
      t.ValueScope = u;
    },
    4181: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.extendErrors = t.resetErrorsCount = t.reportExtraError = t.reportError = t.keyword$DataError = t.keywordError = void 0;
      const s = r(93487);
      const n = r(76776);
      const a = r(22141);
      t.keywordError = { message: ({ keyword: e }) => (0, s.str)`must pass "${e}" keyword validation` };
      t.keyword$DataError = {
        message: ({ keyword: e, schemaType: t }) =>
          t ? (0, s.str)`"${e}" keyword must be ${t} ($data)` : (0, s.str)`"${e}" keyword is invalid ($data)`,
      };
      function o(e, r = t.keywordError, n, a) {
        const { it: o } = e;
        const { gen: i, compositeRule: c, allErrors: u } = o;
        const f = h(e, r, n);
        if (a !== null && a !== void 0 ? a : c || u) {
          l(i, f);
        } else {
          d(o, (0, s._)`[${f}]`);
        }
      }
      t.reportError = o;
      function i(e, r = t.keywordError, s) {
        const { it: n } = e;
        const { gen: o, compositeRule: i, allErrors: c } = n;
        const u = h(e, r, s);
        l(o, u);
        if (!(i || c)) {
          d(n, a.default.vErrors);
        }
      }
      t.reportExtraError = i;
      function c(e, t) {
        e.assign(a.default.errors, t);
        e.if((0, s._)`${a.default.vErrors} !== null`, () =>
          e.if(
            t,
            () => e.assign((0, s._)`${a.default.vErrors}.length`, t),
            () => e.assign(a.default.vErrors, null)
          )
        );
      }
      t.resetErrorsCount = c;
      function u({ gen: e, keyword: t, schemaValue: r, data: n, errsCount: o, it: i }) {
        if (o === undefined) throw new Error("ajv implementation error");
        const c = e.name("err");
        e.forRange("i", o, a.default.errors, (o) => {
          e.const(c, (0, s._)`${a.default.vErrors}[${o}]`);
          e.if((0, s._)`${c}.instancePath === undefined`, () =>
            e.assign((0, s._)`${c}.instancePath`, (0, s.strConcat)(a.default.instancePath, i.errorPath))
          );
          e.assign((0, s._)`${c}.schemaPath`, (0, s.str)`${i.errSchemaPath}/${t}`);
          if (i.opts.verbose) {
            e.assign((0, s._)`${c}.schema`, r);
            e.assign((0, s._)`${c}.data`, n);
          }
        });
      }
      t.extendErrors = u;
      function l(e, t) {
        const r = e.const("err", t);
        e.if((0, s._)`${a.default.vErrors} === null`, () => e.assign(a.default.vErrors, (0, s._)`[${r}]`), (0, s._)`${a.default.vErrors}.push(${r})`);
        e.code((0, s._)`${a.default.errors}++`);
      }
      function d(e, t) {
        const { gen: r, validateName: n, schemaEnv: a } = e;
        if (a.$async) {
          r.throw((0, s._)`new ${e.ValidationError}(${t})`);
        } else {
          r.assign((0, s._)`${n}.errors`, t);
          r.return(false);
        }
      }
      const f = {
        keyword: new s.Name("keyword"),
        schemaPath: new s.Name("schemaPath"),
        params: new s.Name("params"),
        propertyName: new s.Name("propertyName"),
        message: new s.Name("message"),
        schema: new s.Name("schema"),
        parentSchema: new s.Name("parentSchema"),
      };
      function h(e, t, r) {
        const { createErrors: n } = e.it;
        if (n === false) return (0, s._)`{}`;
        return p(e, t, r);
      }
      function p(e, t, r = {}) {
        const { gen: s, it: n } = e;
        const a = [m(n, r), y(e, r)];
        v(e, t, a);
        return s.object(...a);
      }
      function m({ errorPath: e }, { instancePath: t }) {
        const r = t ? (0, s.str)`${e}${(0, n.getErrorPath)(t, n.Type.Str)}` : e;
        return [a.default.instancePath, (0, s.strConcat)(a.default.instancePath, r)];
      }
      function y({ keyword: e, it: { errSchemaPath: t } }, { schemaPath: r, parentSchema: a }) {
        let o = a ? t : (0, s.str)`${t}/${e}`;
        if (r) {
          o = (0, s.str)`${o}${(0, n.getErrorPath)(r, n.Type.Str)}`;
        }
        return [f.schemaPath, o];
      }
      function v(e, { params: t, message: r }, n) {
        const { keyword: o, data: i, schemaValue: c, it: u } = e;
        const { opts: l, propertyName: d, topSchemaRef: h, schemaPath: p } = u;
        n.push([f.keyword, o], [f.params, typeof t == "function" ? t(e) : t || (0, s._)`{}`]);
        if (l.messages) {
          n.push([f.message, typeof r == "function" ? r(e) : r]);
        }
        if (l.verbose) {
          n.push([f.schema, c], [f.parentSchema, (0, s._)`${h}${p}`], [a.default.data, i]);
        }
        if (d) n.push([f.propertyName, d]);
      }
    },
    25173: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.resolveSchema = t.getCompilingSchema = t.resolveRef = t.compileSchema = t.SchemaEnv = void 0;
      const s = r(93487);
      const n = r(67426);
      const a = r(22141);
      const o = r(32531);
      const i = r(76776);
      const c = r(74815);
      class u {
        constructor(e) {
          var t;
          this.refs = {};
          this.dynamicAnchors = {};
          let r;
          if (typeof e.schema == "object") r = e.schema;
          this.schema = e.schema;
          this.schemaId = e.schemaId;
          this.root = e.root || this;
          this.baseId =
            (t = e.baseId) !== null && t !== void 0 ? t : (0, o.normalizeId)(r === null || r === void 0 ? void 0 : r[e.schemaId || "$id"]);
          this.schemaPath = e.schemaPath;
          this.localRefs = e.localRefs;
          this.meta = e.meta;
          this.$async = r === null || r === void 0 ? void 0 : r.$async;
          this.refs = {};
        }
      }
      t.SchemaEnv = u;
      function l(e) {
        const t = h.call(this, e);
        if (t) return t;
        const r = (0, o.getFullPath)(this.opts.uriResolver, e.root.baseId);
        const { es5: i, lines: u } = this.opts.code;
        const { ownProperties: l } = this.opts;
        const d = new s.CodeGen(this.scope, { es5: i, lines: u, ownProperties: l });
        let f;
        if (e.$async) {
          f = d.scopeValue("Error", { ref: n.default, code: (0, s._)`require("ajv/dist/runtime/validation_error").default` });
        }
        const p = d.scopeName("validate");
        e.validateName = p;
        const m = {
          gen: d,
          allErrors: this.opts.allErrors,
          data: a.default.data,
          parentData: a.default.parentData,
          parentDataProperty: a.default.parentDataProperty,
          dataNames: [a.default.data],
          dataPathArr: [s.nil],
          dataLevel: 0,
          dataTypes: [],
          definedProperties: new Set(),
          topSchemaRef: d.scopeValue(
            "schema",
            this.opts.code.source === true ? { ref: e.schema, code: (0, s.stringify)(e.schema) } : { ref: e.schema }
          ),
          validateName: p,
          ValidationError: f,
          schema: e.schema,
          schemaEnv: e,
          rootId: r,
          baseId: e.baseId || r,
          schemaPath: s.nil,
          errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
          errorPath: (0, s._)`""`,
          opts: this.opts,
          self: this,
        };
        let y;
        try {
          this._compilations.add(e);
          (0, c.validateFunctionCode)(m);
          d.optimize(this.opts.code.optimize);
          const t = d.toString();
          y = `${d.scopeRefs(a.default.scope)}return ${t}`;
          if (this.opts.code.process) y = this.opts.code.process(y, e);
          const r = new Function(`${a.default.self}`, `${a.default.scope}`, y);
          const n = r(this, this.scope.get());
          this.scope.value(p, { ref: n });
          n.errors = null;
          n.schema = e.schema;
          n.schemaEnv = e;
          if (e.$async) n.$async = true;
          if (this.opts.code.source === true) {
            n.source = { validateName: p, validateCode: t, scopeValues: d._values };
          }
          if (this.opts.unevaluated) {
            const { props: e, items: t } = m;
            n.evaluated = {
              props: e instanceof s.Name ? undefined : e,
              items: t instanceof s.Name ? undefined : t,
              dynamicProps: e instanceof s.Name,
              dynamicItems: t instanceof s.Name,
            };
            if (n.source) n.source.evaluated = (0, s.stringify)(n.evaluated);
          }
          e.validate = n;
          return e;
        } catch (v) {
          delete e.validate;
          delete e.validateName;
          if (y) this.logger.error("Error compiling schema, function code:", y);
          throw v;
        } finally {
          this._compilations.delete(e);
        }
      }
      t.compileSchema = l;
      function d(e, t, r) {
        var s;
        r = (0, o.resolveUrl)(this.opts.uriResolver, t, r);
        const n = e.refs[r];
        if (n) return n;
        let a = m.call(this, e, r);
        if (a === undefined) {
          const n = (s = e.localRefs) === null || s === void 0 ? void 0 : s[r];
          const { schemaId: o } = this.opts;
          if (n) a = new u({ schema: n, schemaId: o, root: e, baseId: t });
        }
        if (a === undefined) return;
        return (e.refs[r] = f.call(this, a));
      }
      t.resolveRef = d;
      function f(e) {
        if ((0, o.inlineRef)(e.schema, this.opts.inlineRefs)) return e.schema;
        return e.validate ? e : l.call(this, e);
      }
      function h(e) {
        for (const t of this._compilations) {
          if (p(t, e)) return t;
        }
      }
      t.getCompilingSchema = h;
      function p(e, t) {
        return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
      }
      function m(e, t) {
        let r;
        while (typeof (r = this.refs[t]) == "string") t = r;
        return r || this.schemas[t] || y.call(this, e, t);
      }
      function y(e, t) {
        const r = this.opts.uriResolver.parse(t);
        const s = (0, o._getFullPath)(this.opts.uriResolver, r);
        let n = (0, o.getFullPath)(this.opts.uriResolver, e.baseId, undefined);
        if (Object.keys(e.schema).length > 0 && s === n) {
          return g.call(this, r, e);
        }
        const a = (0, o.normalizeId)(s);
        const i = this.refs[a] || this.schemas[a];
        if (typeof i == "string") {
          const t = y.call(this, e, i);
          if (typeof (t === null || t === void 0 ? void 0 : t.schema) !== "object") return;
          return g.call(this, r, t);
        }
        if (typeof (i === null || i === void 0 ? void 0 : i.schema) !== "object") return;
        if (!i.validate) l.call(this, i);
        if (a === (0, o.normalizeId)(t)) {
          const { schema: t } = i;
          const { schemaId: r } = this.opts;
          const s = t[r];
          if (s) n = (0, o.resolveUrl)(this.opts.uriResolver, n, s);
          return new u({ schema: t, schemaId: r, root: e, baseId: n });
        }
        return g.call(this, r, i);
      }
      t.resolveSchema = y;
      const v = new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
      function g(e, { baseId: t, schema: r, root: s }) {
        var n;
        if (((n = e.fragment) === null || n === void 0 ? void 0 : n[0]) !== "/") return;
        for (const u of e.fragment.slice(1).split("/")) {
          if (typeof r === "boolean") return;
          const e = r[(0, i.unescapeFragment)(u)];
          if (e === undefined) return;
          r = e;
          const s = typeof r === "object" && r[this.opts.schemaId];
          if (!v.has(u) && s) {
            t = (0, o.resolveUrl)(this.opts.uriResolver, t, s);
          }
        }
        let a;
        if (typeof r != "boolean" && r.$ref && !(0, i.schemaHasRulesButRef)(r, this.RULES)) {
          const e = (0, o.resolveUrl)(this.opts.uriResolver, t, r.$ref);
          a = y.call(this, s, e);
        }
        const { schemaId: c } = this.opts;
        a = a || new u({ schema: r, schemaId: c, root: s, baseId: t });
        if (a.schema !== a.root.schema) return a;
        return undefined;
      }
    },
    22141: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(93487);
      const n = {
        data: new s.Name("data"),
        valCxt: new s.Name("valCxt"),
        instancePath: new s.Name("instancePath"),
        parentData: new s.Name("parentData"),
        parentDataProperty: new s.Name("parentDataProperty"),
        rootData: new s.Name("rootData"),
        dynamicAnchors: new s.Name("dynamicAnchors"),
        vErrors: new s.Name("vErrors"),
        errors: new s.Name("errors"),
        this: new s.Name("this"),
        self: new s.Name("self"),
        scope: new s.Name("scope"),
        json: new s.Name("json"),
        jsonPos: new s.Name("jsonPos"),
        jsonLen: new s.Name("jsonLen"),
        jsonPart: new s.Name("jsonPart"),
      };
      t["default"] = n;
    },
    6646: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(32531);
      class n extends Error {
        constructor(e, t, r, n) {
          super(n || `can't resolve reference ${r} from id ${t}`);
          this.missingRef = (0, s.resolveUrl)(e, t, r);
          this.missingSchema = (0, s.normalizeId)((0, s.getFullPath)(e, this.missingRef));
        }
      }
      t["default"] = n;
    },
    32531: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.getSchemaRefs = t.resolveUrl = t.normalizeId = t._getFullPath = t.getFullPath = t.inlineRef = void 0;
      const s = r(76776);
      const n = r(64063);
      const a = r(49461);
      const o = new Set([
        "type",
        "format",
        "pattern",
        "maxLength",
        "minLength",
        "maxProperties",
        "minProperties",
        "maxItems",
        "minItems",
        "maximum",
        "minimum",
        "uniqueItems",
        "multipleOf",
        "required",
        "enum",
        "const",
      ]);
      function i(e, t = true) {
        if (typeof e == "boolean") return true;
        if (t === true) return !u(e);
        if (!t) return false;
        return l(e) <= t;
      }
      t.inlineRef = i;
      const c = new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
      function u(e) {
        for (const t in e) {
          if (c.has(t)) return true;
          const r = e[t];
          if (Array.isArray(r) && r.some(u)) return true;
          if (typeof r == "object" && u(r)) return true;
        }
        return false;
      }
      function l(e) {
        let t = 0;
        for (const r in e) {
          if (r === "$ref") return Infinity;
          t++;
          if (o.has(r)) continue;
          if (typeof e[r] == "object") {
            (0, s.eachItem)(e[r], (e) => (t += l(e)));
          }
          if (t === Infinity) return Infinity;
        }
        return t;
      }
      function d(e, t = "", r) {
        if (r !== false) t = p(t);
        const s = e.parse(t);
        return f(e, s);
      }
      t.getFullPath = d;
      function f(e, t) {
        const r = e.serialize(t);
        return r.split("#")[0] + "#";
      }
      t._getFullPath = f;
      const h = /#\/?$/;
      function p(e) {
        return e ? e.replace(h, "") : "";
      }
      t.normalizeId = p;
      function m(e, t, r) {
        r = p(r);
        return e.resolve(t, r);
      }
      t.resolveUrl = m;
      const y = /^[a-z_][-a-z0-9._]*$/i;
      function v(e, t) {
        if (typeof e == "boolean") return {};
        const { schemaId: r, uriResolver: s } = this.opts;
        const o = p(e[r] || t);
        const i = { "": o };
        const c = d(s, o, false);
        const u = {};
        const l = new Set();
        a(e, { allKeys: true }, (e, t, s, n) => {
          if (n === undefined) return;
          const a = c + t;
          let o = i[n];
          if (typeof e[r] == "string") o = d.call(this, e[r]);
          m.call(this, e.$anchor);
          m.call(this, e.$dynamicAnchor);
          i[t] = o;
          function d(t) {
            const r = this.opts.uriResolver.resolve;
            t = p(o ? r(o, t) : t);
            if (l.has(t)) throw h(t);
            l.add(t);
            let s = this.refs[t];
            if (typeof s == "string") s = this.refs[s];
            if (typeof s == "object") {
              f(e, s.schema, t);
            } else if (t !== p(a)) {
              if (t[0] === "#") {
                f(e, u[t], t);
                u[t] = e;
              } else {
                this.refs[t] = a;
              }
            }
            return t;
          }
          function m(e) {
            if (typeof e == "string") {
              if (!y.test(e)) throw new Error(`invalid anchor "${e}"`);
              d.call(this, `#${e}`);
            }
          }
        });
        return u;
        function f(e, t, r) {
          if (t !== undefined && !n(e, t)) throw h(r);
        }
        function h(e) {
          return new Error(`reference "${e}" resolves to more than one schema`);
        }
      }
      t.getSchemaRefs = v;
    },
    13141: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.getRules = t.isJSONType = void 0;
      const r = ["string", "number", "integer", "boolean", "null", "object", "array"];
      const s = new Set(r);
      function n(e) {
        return typeof e == "string" && s.has(e);
      }
      t.isJSONType = n;
      function a() {
        const e = {
          number: { type: "number", rules: [] },
          string: { type: "string", rules: [] },
          array: { type: "array", rules: [] },
          object: { type: "object", rules: [] },
        };
        return {
          types: { ...e, integer: true, boolean: true, null: true },
          rules: [{ rules: [] }, e.number, e.string, e.array, e.object],
          post: { rules: [] },
          all: {},
          keywords: {},
        };
      }
      t.getRules = a;
    },
    76776: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.checkStrictMode =
        t.getErrorPath =
        t.Type =
        t.useFunc =
        t.setEvaluated =
        t.evaluatedPropsToName =
        t.mergeEvaluated =
        t.eachItem =
        t.unescapeJsonPointer =
        t.escapeJsonPointer =
        t.escapeFragment =
        t.unescapeFragment =
        t.schemaRefOrVal =
        t.schemaHasRulesButRef =
        t.schemaHasRules =
        t.checkUnknownRules =
        t.alwaysValidSchema =
        t.toHash =
          void 0;
      const s = r(93487);
      const n = r(57023);
      function a(e) {
        const t = {};
        for (const r of e) t[r] = true;
        return t;
      }
      t.toHash = a;
      function o(e, t) {
        if (typeof t == "boolean") return t;
        if (Object.keys(t).length === 0) return true;
        i(e, t);
        return !c(t, e.self.RULES.all);
      }
      t.alwaysValidSchema = o;
      function i(e, t = e.schema) {
        const { opts: r, self: s } = e;
        if (!r.strictSchema) return;
        if (typeof t === "boolean") return;
        const n = s.RULES.keywords;
        for (const a in t) {
          if (!n[a]) E(e, `unknown keyword: "${a}"`);
        }
      }
      t.checkUnknownRules = i;
      function c(e, t) {
        if (typeof e == "boolean") return !e;
        for (const r in e) if (t[r]) return true;
        return false;
      }
      t.schemaHasRules = c;
      function u(e, t) {
        if (typeof e == "boolean") return !e;
        for (const r in e) if (r !== "$ref" && t.all[r]) return true;
        return false;
      }
      t.schemaHasRulesButRef = u;
      function l({ topSchemaRef: e, schemaPath: t }, r, n, a) {
        if (!a) {
          if (typeof r == "number" || typeof r == "boolean") return r;
          if (typeof r == "string") return (0, s._)`${r}`;
        }
        return (0, s._)`${e}${t}${(0, s.getProperty)(n)}`;
      }
      t.schemaRefOrVal = l;
      function d(e) {
        return p(decodeURIComponent(e));
      }
      t.unescapeFragment = d;
      function f(e) {
        return encodeURIComponent(h(e));
      }
      t.escapeFragment = f;
      function h(e) {
        if (typeof e == "number") return `${e}`;
        return e.replace(/~/g, "~0").replace(/\//g, "~1");
      }
      t.escapeJsonPointer = h;
      function p(e) {
        return e.replace(/~1/g, "/").replace(/~0/g, "~");
      }
      t.unescapeJsonPointer = p;
      function m(e, t) {
        if (Array.isArray(e)) {
          for (const r of e) t(r);
        } else {
          t(e);
        }
      }
      t.eachItem = m;
      function y({ mergeNames: e, mergeToName: t, mergeValues: r, resultToName: n }) {
        return (a, o, i, c) => {
          const u =
            i === undefined
              ? o
              : i instanceof s.Name
                ? (o instanceof s.Name ? e(a, o, i) : t(a, o, i), i)
                : o instanceof s.Name
                  ? (t(a, i, o), o)
                  : r(o, i);
          return c === s.Name && !(u instanceof s.Name) ? n(a, u) : u;
        };
      }
      t.mergeEvaluated = {
        props: y({
          mergeNames: (e, t, r) =>
            e.if((0, s._)`${r} !== true && ${t} !== undefined`, () => {
              e.if(
                (0, s._)`${t} === true`,
                () => e.assign(r, true),
                () => e.assign(r, (0, s._)`${r} || {}`).code((0, s._)`Object.assign(${r}, ${t})`)
              );
            }),
          mergeToName: (e, t, r) =>
            e.if((0, s._)`${r} !== true`, () => {
              if (t === true) {
                e.assign(r, true);
              } else {
                e.assign(r, (0, s._)`${r} || {}`);
                g(e, r, t);
              }
            }),
          mergeValues: (e, t) => (e === true ? true : { ...e, ...t }),
          resultToName: v,
        }),
        items: y({
          mergeNames: (e, t, r) =>
            e.if((0, s._)`${r} !== true && ${t} !== undefined`, () => e.assign(r, (0, s._)`${t} === true ? true : ${r} > ${t} ? ${r} : ${t}`)),
          mergeToName: (e, t, r) => e.if((0, s._)`${r} !== true`, () => e.assign(r, t === true ? true : (0, s._)`${r} > ${t} ? ${r} : ${t}`)),
          mergeValues: (e, t) => (e === true ? true : Math.max(e, t)),
          resultToName: (e, t) => e.var("items", t),
        }),
      };
      function v(e, t) {
        if (t === true) return e.var("props", true);
        const r = e.var("props", (0, s._)`{}`);
        if (t !== undefined) g(e, r, t);
        return r;
      }
      t.evaluatedPropsToName = v;
      function g(e, t, r) {
        Object.keys(r).forEach((r) => e.assign((0, s._)`${t}${(0, s.getProperty)(r)}`, true));
      }
      t.setEvaluated = g;
      const $ = {};
      function _(e, t) {
        return e.scopeValue("func", { ref: t, code: $[t.code] || ($[t.code] = new n._Code(t.code)) });
      }
      t.useFunc = _;
      var w;
      (function (e) {
        e[(e["Num"] = 0)] = "Num";
        e[(e["Str"] = 1)] = "Str";
      })((w = t.Type || (t.Type = {})));
      function b(e, t, r) {
        if (e instanceof s.Name) {
          const n = t === w.Num;
          return r
            ? n
              ? (0, s._)`"[" + ${e} + "]"`
              : (0, s._)`"['" + ${e} + "']"`
            : n
              ? (0, s._)`"/" + ${e}`
              : (0, s._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
        }
        return r ? (0, s.getProperty)(e).toString() : "/" + h(e);
      }
      t.getErrorPath = b;
      function E(e, t, r = e.opts.strictSchema) {
        if (!r) return;
        t = `strict mode: ${t}`;
        if (r === true) throw new Error(t);
        e.self.logger.warn(t);
      }
      t.checkStrictMode = E;
    },
    58876: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.shouldUseRule = t.shouldUseGroup = t.schemaHasRulesForType = void 0;
      function r({ schema: e, self: t }, r) {
        const n = t.RULES.types[r];
        return n && n !== true && s(e, n);
      }
      t.schemaHasRulesForType = r;
      function s(e, t) {
        return t.rules.some((t) => n(e, t));
      }
      t.shouldUseGroup = s;
      function n(e, t) {
        var r;
        return e[t.keyword] !== undefined || ((r = t.definition.implements) === null || r === void 0 ? void 0 : r.some((t) => e[t] !== undefined));
      }
      t.shouldUseRule = n;
    },
    55667: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.boolOrEmptySchema = t.topBoolOrEmptySchema = void 0;
      const s = r(4181);
      const n = r(93487);
      const a = r(22141);
      const o = { message: "boolean schema is false" };
      function i(e) {
        const { gen: t, schema: r, validateName: s } = e;
        if (r === false) {
          u(e, false);
        } else if (typeof r == "object" && r.$async === true) {
          t.return(a.default.data);
        } else {
          t.assign((0, n._)`${s}.errors`, null);
          t.return(true);
        }
      }
      t.topBoolOrEmptySchema = i;
      function c(e, t) {
        const { gen: r, schema: s } = e;
        if (s === false) {
          r.var(t, false);
          u(e);
        } else {
          r.var(t, true);
        }
      }
      t.boolOrEmptySchema = c;
      function u(e, t) {
        const { gen: r, data: n } = e;
        const a = { gen: r, keyword: "false schema", data: n, schema: false, schemaCode: false, schemaValue: false, params: {}, it: e };
        (0, s.reportError)(a, o, undefined, t);
      }
    },
    50453: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.reportTypeError = t.checkDataTypes = t.checkDataType = t.coerceAndCheckDataType = t.getJSONTypes = t.getSchemaTypes = t.DataType = void 0;
      const s = r(13141);
      const n = r(58876);
      const a = r(4181);
      const o = r(93487);
      const i = r(76776);
      var c;
      (function (e) {
        e[(e["Correct"] = 0)] = "Correct";
        e[(e["Wrong"] = 1)] = "Wrong";
      })((c = t.DataType || (t.DataType = {})));
      function u(e) {
        const t = l(e.type);
        const r = t.includes("null");
        if (r) {
          if (e.nullable === false) throw new Error("type: null contradicts nullable: false");
        } else {
          if (!t.length && e.nullable !== undefined) {
            throw new Error('"nullable" cannot be used without "type"');
          }
          if (e.nullable === true) t.push("null");
        }
        return t;
      }
      t.getSchemaTypes = u;
      function l(e) {
        const t = Array.isArray(e) ? e : e ? [e] : [];
        if (t.every(s.isJSONType)) return t;
        throw new Error("type must be JSONType or JSONType[]: " + t.join(","));
      }
      t.getJSONTypes = l;
      function d(e, t) {
        const { gen: r, data: s, opts: a } = e;
        const o = h(t, a.coerceTypes);
        const i = t.length > 0 && !(o.length === 0 && t.length === 1 && (0, n.schemaHasRulesForType)(e, t[0]));
        if (i) {
          const n = v(t, s, a.strictNumbers, c.Wrong);
          r.if(n, () => {
            if (o.length) p(e, t, o);
            else $(e);
          });
        }
        return i;
      }
      t.coerceAndCheckDataType = d;
      const f = new Set(["string", "number", "integer", "boolean", "null"]);
      function h(e, t) {
        return t ? e.filter((e) => f.has(e) || (t === "array" && e === "array")) : [];
      }
      function p(e, t, r) {
        const { gen: s, data: n, opts: a } = e;
        const i = s.let("dataType", (0, o._)`typeof ${n}`);
        const c = s.let("coerced", (0, o._)`undefined`);
        if (a.coerceTypes === "array") {
          s.if((0, o._)`${i} == 'object' && Array.isArray(${n}) && ${n}.length == 1`, () =>
            s
              .assign(n, (0, o._)`${n}[0]`)
              .assign(i, (0, o._)`typeof ${n}`)
              .if(v(t, n, a.strictNumbers), () => s.assign(c, n))
          );
        }
        s.if((0, o._)`${c} !== undefined`);
        for (const o of r) {
          if (f.has(o) || (o === "array" && a.coerceTypes === "array")) {
            u(o);
          }
        }
        s.else();
        $(e);
        s.endIf();
        s.if((0, o._)`${c} !== undefined`, () => {
          s.assign(n, c);
          m(e, c);
        });
        function u(e) {
          switch (e) {
            case "string":
              s.elseIf((0, o._)`${i} == "number" || ${i} == "boolean"`)
                .assign(c, (0, o._)`"" + ${n}`)
                .elseIf((0, o._)`${n} === null`)
                .assign(c, (0, o._)`""`);
              return;
            case "number":
              s.elseIf(
                (0, o._)`${i} == "boolean" || ${n} === null
              || (${i} == "string" && ${n} && ${n} == +${n})`
              ).assign(c, (0, o._)`+${n}`);
              return;
            case "integer":
              s.elseIf(
                (0, o._)`${i} === "boolean" || ${n} === null
              || (${i} === "string" && ${n} && ${n} == +${n} && !(${n} % 1))`
              ).assign(c, (0, o._)`+${n}`);
              return;
            case "boolean":
              s.elseIf((0, o._)`${n} === "false" || ${n} === 0 || ${n} === null`)
                .assign(c, false)
                .elseIf((0, o._)`${n} === "true" || ${n} === 1`)
                .assign(c, true);
              return;
            case "null":
              s.elseIf((0, o._)`${n} === "" || ${n} === 0 || ${n} === false`);
              s.assign(c, null);
              return;
            case "array":
              s.elseIf(
                (0, o._)`${i} === "string" || ${i} === "number"
              || ${i} === "boolean" || ${n} === null`
              ).assign(c, (0, o._)`[${n}]`);
          }
        }
      }
      function m({ gen: e, parentData: t, parentDataProperty: r }, s) {
        e.if((0, o._)`${t} !== undefined`, () => e.assign((0, o._)`${t}[${r}]`, s));
      }
      function y(e, t, r, s = c.Correct) {
        const n = s === c.Correct ? o.operators.EQ : o.operators.NEQ;
        let a;
        switch (e) {
          case "null":
            return (0, o._)`${t} ${n} null`;
          case "array":
            a = (0, o._)`Array.isArray(${t})`;
            break;
          case "object":
            a = (0, o._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
            break;
          case "integer":
            a = i((0, o._)`!(${t} % 1) && !isNaN(${t})`);
            break;
          case "number":
            a = i();
            break;
          default:
            return (0, o._)`typeof ${t} ${n} ${e}`;
        }
        return s === c.Correct ? a : (0, o.not)(a);
        function i(e = o.nil) {
          return (0, o.and)((0, o._)`typeof ${t} == "number"`, e, r ? (0, o._)`isFinite(${t})` : o.nil);
        }
      }
      t.checkDataType = y;
      function v(e, t, r, s) {
        if (e.length === 1) {
          return y(e[0], t, r, s);
        }
        let n;
        const a = (0, i.toHash)(e);
        if (a.array && a.object) {
          const e = (0, o._)`typeof ${t} != "object"`;
          n = a.null ? e : (0, o._)`!${t} || ${e}`;
          delete a.null;
          delete a.array;
          delete a.object;
        } else {
          n = o.nil;
        }
        if (a.number) delete a.integer;
        for (const i in a) n = (0, o.and)(n, y(i, t, r, s));
        return n;
      }
      t.checkDataTypes = v;
      const g = {
        message: ({ schema: e }) => `must be ${e}`,
        params: ({ schema: e, schemaValue: t }) => (typeof e == "string" ? (0, o._)`{type: ${e}}` : (0, o._)`{type: ${t}}`),
      };
      function $(e) {
        const t = _(e);
        (0, a.reportError)(t, g);
      }
      t.reportTypeError = $;
      function _(e) {
        const { gen: t, data: r, schema: s } = e;
        const n = (0, i.schemaRefOrVal)(e, s, "type");
        return { gen: t, keyword: "type", data: r, schema: s.type, schemaCode: n, schemaValue: n, parentSchema: s, params: {}, it: e };
      }
    },
    90313: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.assignDefaults = void 0;
      const s = r(93487);
      const n = r(76776);
      function a(e, t) {
        const { properties: r, items: s } = e.schema;
        if (t === "object" && r) {
          for (const t in r) {
            o(e, t, r[t].default);
          }
        } else if (t === "array" && Array.isArray(s)) {
          s.forEach((t, r) => o(e, r, t.default));
        }
      }
      t.assignDefaults = a;
      function o(e, t, r) {
        const { gen: a, compositeRule: o, data: i, opts: c } = e;
        if (r === undefined) return;
        const u = (0, s._)`${i}${(0, s.getProperty)(t)}`;
        if (o) {
          (0, n.checkStrictMode)(e, `default is ignored for: ${u}`);
          return;
        }
        let l = (0, s._)`${u} === undefined`;
        if (c.useDefaults === "empty") {
          l = (0, s._)`${l} || ${u} === null || ${u} === ""`;
        }
        a.if(l, (0, s._)`${u} = ${(0, s.stringify)(r)}`);
      }
    },
    74815: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.getData = t.KeywordCxt = t.validateFunctionCode = void 0;
      const s = r(55667);
      const n = r(50453);
      const a = r(58876);
      const o = r(50453);
      const i = r(90313);
      const c = r(95005);
      const u = r(13099);
      const l = r(93487);
      const d = r(22141);
      const f = r(32531);
      const h = r(76776);
      const p = r(4181);
      function m(e) {
        if (P(e)) {
          N(e);
          if (E(e)) {
            $(e);
            return;
          }
        }
        y(e, () => (0, s.topBoolOrEmptySchema)(e));
      }
      t.validateFunctionCode = m;
      function y({ gen: e, validateName: t, schema: r, schemaEnv: s, opts: n }, a) {
        if (n.code.es5) {
          e.func(t, (0, l._)`${d.default.data}, ${d.default.valCxt}`, s.$async, () => {
            e.code((0, l._)`"use strict"; ${w(r, n)}`);
            g(e, n);
            e.code(a);
          });
        } else {
          e.func(t, (0, l._)`${d.default.data}, ${v(n)}`, s.$async, () => e.code(w(r, n)).code(a));
        }
      }
      function v(e) {
        return (0,
        l._)`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${e.dynamicRef ? (0, l._)`, ${d.default.dynamicAnchors}={}` : l.nil}}={}`;
      }
      function g(e, t) {
        e.if(
          d.default.valCxt,
          () => {
            e.var(d.default.instancePath, (0, l._)`${d.default.valCxt}.${d.default.instancePath}`);
            e.var(d.default.parentData, (0, l._)`${d.default.valCxt}.${d.default.parentData}`);
            e.var(d.default.parentDataProperty, (0, l._)`${d.default.valCxt}.${d.default.parentDataProperty}`);
            e.var(d.default.rootData, (0, l._)`${d.default.valCxt}.${d.default.rootData}`);
            if (t.dynamicRef) e.var(d.default.dynamicAnchors, (0, l._)`${d.default.valCxt}.${d.default.dynamicAnchors}`);
          },
          () => {
            e.var(d.default.instancePath, (0, l._)`""`);
            e.var(d.default.parentData, (0, l._)`undefined`);
            e.var(d.default.parentDataProperty, (0, l._)`undefined`);
            e.var(d.default.rootData, d.default.data);
            if (t.dynamicRef) e.var(d.default.dynamicAnchors, (0, l._)`{}`);
          }
        );
      }
      function $(e) {
        const { schema: t, opts: r, gen: s } = e;
        y(e, () => {
          if (r.$comment && t.$comment) T(e);
          j(e);
          s.let(d.default.vErrors, null);
          s.let(d.default.errors, 0);
          if (r.unevaluated) _(e);
          k(e);
          I(e);
        });
        return;
      }
      function _(e) {
        const { gen: t, validateName: r } = e;
        e.evaluated = t.const("evaluated", (0, l._)`${r}.evaluated`);
        t.if((0, l._)`${e.evaluated}.dynamicProps`, () => t.assign((0, l._)`${e.evaluated}.props`, (0, l._)`undefined`));
        t.if((0, l._)`${e.evaluated}.dynamicItems`, () => t.assign((0, l._)`${e.evaluated}.items`, (0, l._)`undefined`));
      }
      function w(e, t) {
        const r = typeof e == "object" && e[t.schemaId];
        return r && (t.code.source || t.code.process) ? (0, l._)`/*# sourceURL=${r} */` : l.nil;
      }
      function b(e, t) {
        if (P(e)) {
          N(e);
          if (E(e)) {
            S(e, t);
            return;
          }
        }
        (0, s.boolOrEmptySchema)(e, t);
      }
      function E({ schema: e, self: t }) {
        if (typeof e == "boolean") return !e;
        for (const r in e) if (t.RULES.all[r]) return true;
        return false;
      }
      function P(e) {
        return typeof e.schema != "boolean";
      }
      function S(e, t) {
        const { schema: r, gen: s, opts: n } = e;
        if (n.$comment && r.$comment) T(e);
        O(e);
        x(e);
        const a = s.const("_errs", d.default.errors);
        k(e, a);
        s.var(t, (0, l._)`${a} === ${d.default.errors}`);
      }
      function N(e) {
        (0, h.checkUnknownRules)(e);
        C(e);
      }
      function k(e, t) {
        if (e.opts.jtd) return D(e, [], false, t);
        const r = (0, n.getSchemaTypes)(e.schema);
        const s = (0, n.coerceAndCheckDataType)(e, r);
        D(e, r, !s, t);
      }
      function C(e) {
        const { schema: t, errSchemaPath: r, opts: s, self: n } = e;
        if (t.$ref && s.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(t, n.RULES)) {
          n.logger.warn(`$ref: keywords ignored in schema at path "${r}"`);
        }
      }
      function j(e) {
        const { schema: t, opts: r } = e;
        if (t.default !== undefined && r.useDefaults && r.strictSchema) {
          (0, h.checkStrictMode)(e, "default is ignored in the schema root");
        }
      }
      function O(e) {
        const t = e.schema[e.opts.schemaId];
        if (t) e.baseId = (0, f.resolveUrl)(e.opts.uriResolver, e.baseId, t);
      }
      function x(e) {
        if (e.schema.$async && !e.schemaEnv.$async) throw new Error("async schema in sync schema");
      }
      function T({ gen: e, schemaEnv: t, schema: r, errSchemaPath: s, opts: n }) {
        const a = r.$comment;
        if (n.$comment === true) {
          e.code((0, l._)`${d.default.self}.logger.log(${a})`);
        } else if (typeof n.$comment == "function") {
          const r = (0, l.str)`${s}/$comment`;
          const n = e.scopeValue("root", { ref: t.root });
          e.code((0, l._)`${d.default.self}.opts.$comment(${a}, ${r}, ${n}.schema)`);
        }
      }
      function I(e) {
        const { gen: t, schemaEnv: r, validateName: s, ValidationError: n, opts: a } = e;
        if (r.$async) {
          t.if(
            (0, l._)`${d.default.errors} === 0`,
            () => t.return(d.default.data),
            () => t.throw((0, l._)`new ${n}(${d.default.vErrors})`)
          );
        } else {
          t.assign((0, l._)`${s}.errors`, d.default.vErrors);
          if (a.unevaluated) R(e);
          t.return((0, l._)`${d.default.errors} === 0`);
        }
      }
      function R({ gen: e, evaluated: t, props: r, items: s }) {
        if (r instanceof l.Name) e.assign((0, l._)`${t}.props`, r);
        if (s instanceof l.Name) e.assign((0, l._)`${t}.items`, s);
      }
      function D(e, t, r, s) {
        const { gen: n, schema: i, data: c, allErrors: u, opts: f, self: p } = e;
        const { RULES: m } = p;
        if (i.$ref && (f.ignoreKeywordsWithRef || !(0, h.schemaHasRulesButRef)(i, m))) {
          n.block(() => G(e, "$ref", m.all.$ref.definition));
          return;
        }
        if (!f.jtd) M(e, t);
        n.block(() => {
          for (const e of m.rules) y(e);
          y(m.post);
        });
        function y(h) {
          if (!(0, a.shouldUseGroup)(i, h)) return;
          if (h.type) {
            n.if((0, o.checkDataType)(h.type, c, f.strictNumbers));
            A(e, h);
            if (t.length === 1 && t[0] === h.type && r) {
              n.else();
              (0, o.reportTypeError)(e);
            }
            n.endIf();
          } else {
            A(e, h);
          }
          if (!u) n.if((0, l._)`${d.default.errors} === ${s || 0}`);
        }
      }
      function A(e, t) {
        const {
          gen: r,
          schema: s,
          opts: { useDefaults: n },
        } = e;
        if (n) (0, i.assignDefaults)(e, t.type);
        r.block(() => {
          for (const r of t.rules) {
            if ((0, a.shouldUseRule)(s, r)) {
              G(e, r.keyword, r.definition, t.type);
            }
          }
        });
      }
      function M(e, t) {
        if (e.schemaEnv.meta || !e.opts.strictTypes) return;
        V(e, t);
        if (!e.opts.allowUnionTypes) F(e, t);
        U(e, e.dataTypes);
      }
      function V(e, t) {
        if (!t.length) return;
        if (!e.dataTypes.length) {
          e.dataTypes = t;
          return;
        }
        t.forEach((t) => {
          if (!z(e.dataTypes, t)) {
            L(e, `type "${t}" not allowed by context "${e.dataTypes.join(",")}"`);
          }
        });
        K(e, t);
      }
      function F(e, t) {
        if (t.length > 1 && !(t.length === 2 && t.includes("null"))) {
          L(e, "use allowUnionTypes to allow union type keyword");
        }
      }
      function U(e, t) {
        const r = e.self.RULES.all;
        for (const s in r) {
          const n = r[s];
          if (typeof n == "object" && (0, a.shouldUseRule)(e.schema, n)) {
            const { type: r } = n.definition;
            if (r.length && !r.some((e) => q(t, e))) {
              L(e, `missing type "${r.join(",")}" for keyword "${s}"`);
            }
          }
        }
      }
      function q(e, t) {
        return e.includes(t) || (t === "number" && e.includes("integer"));
      }
      function z(e, t) {
        return e.includes(t) || (t === "integer" && e.includes("number"));
      }
      function K(e, t) {
        const r = [];
        for (const s of e.dataTypes) {
          if (z(t, s)) r.push(s);
          else if (t.includes("integer") && s === "number") r.push("integer");
        }
        e.dataTypes = r;
      }
      function L(e, t) {
        const r = e.schemaEnv.baseId + e.errSchemaPath;
        t += ` at "${r}" (strictTypes)`;
        (0, h.checkStrictMode)(e, t, e.opts.strictTypes);
      }
      class H {
        constructor(e, t, r) {
          (0, c.validateKeywordUsage)(e, t, r);
          this.gen = e.gen;
          this.allErrors = e.allErrors;
          this.keyword = r;
          this.data = e.data;
          this.schema = e.schema[r];
          this.$data = t.$data && e.opts.$data && this.schema && this.schema.$data;
          this.schemaValue = (0, h.schemaRefOrVal)(e, this.schema, r, this.$data);
          this.schemaType = t.schemaType;
          this.parentSchema = e.schema;
          this.params = {};
          this.it = e;
          this.def = t;
          if (this.$data) {
            this.schemaCode = e.gen.const("vSchema", W(this.$data, e));
          } else {
            this.schemaCode = this.schemaValue;
            if (!(0, c.validSchemaType)(this.schema, t.schemaType, t.allowUndefined)) {
              throw new Error(`${r} value must be ${JSON.stringify(t.schemaType)}`);
            }
          }
          if ("code" in t ? t.trackErrors : t.errors !== false) {
            this.errsCount = e.gen.const("_errs", d.default.errors);
          }
        }
        result(e, t, r) {
          this.failResult((0, l.not)(e), t, r);
        }
        failResult(e, t, r) {
          this.gen.if(e);
          if (r) r();
          else this.error();
          if (t) {
            this.gen.else();
            t();
            if (this.allErrors) this.gen.endIf();
          } else {
            if (this.allErrors) this.gen.endIf();
            else this.gen.else();
          }
        }
        pass(e, t) {
          this.failResult((0, l.not)(e), undefined, t);
        }
        fail(e) {
          if (e === undefined) {
            this.error();
            if (!this.allErrors) this.gen.if(false);
            return;
          }
          this.gen.if(e);
          this.error();
          if (this.allErrors) this.gen.endIf();
          else this.gen.else();
        }
        fail$data(e) {
          if (!this.$data) return this.fail(e);
          const { schemaCode: t } = this;
          this.fail((0, l._)`${t} !== undefined && (${(0, l.or)(this.invalid$data(), e)})`);
        }
        error(e, t, r) {
          if (t) {
            this.setParams(t);
            this._error(e, r);
            this.setParams({});
            return;
          }
          this._error(e, r);
        }
        _error(e, t) {
          (e ? p.reportExtraError : p.reportError)(this, this.def.error, t);
        }
        $dataError() {
          (0, p.reportError)(this, this.def.$dataError || p.keyword$DataError);
        }
        reset() {
          if (this.errsCount === undefined) throw new Error('add "trackErrors" to keyword definition');
          (0, p.resetErrorsCount)(this.gen, this.errsCount);
        }
        ok(e) {
          if (!this.allErrors) this.gen.if(e);
        }
        setParams(e, t) {
          if (t) Object.assign(this.params, e);
          else this.params = e;
        }
        block$data(e, t, r = l.nil) {
          this.gen.block(() => {
            this.check$data(e, r);
            t();
          });
        }
        check$data(e = l.nil, t = l.nil) {
          if (!this.$data) return;
          const { gen: r, schemaCode: s, schemaType: n, def: a } = this;
          r.if((0, l.or)((0, l._)`${s} === undefined`, t));
          if (e !== l.nil) r.assign(e, true);
          if (n.length || a.validateSchema) {
            r.elseIf(this.invalid$data());
            this.$dataError();
            if (e !== l.nil) r.assign(e, false);
          }
          r.else();
        }
        invalid$data() {
          const { gen: e, schemaCode: t, schemaType: r, def: s, it: n } = this;
          return (0, l.or)(a(), i());
          function a() {
            if (r.length) {
              if (!(t instanceof l.Name)) throw new Error("ajv implementation error");
              const e = Array.isArray(r) ? r : [r];
              return (0, l._)`${(0, o.checkDataTypes)(e, t, n.opts.strictNumbers, o.DataType.Wrong)}`;
            }
            return l.nil;
          }
          function i() {
            if (s.validateSchema) {
              const r = e.scopeValue("validate$data", { ref: s.validateSchema });
              return (0, l._)`!${r}(${t})`;
            }
            return l.nil;
          }
        }
        subschema(e, t) {
          const r = (0, u.getSubschema)(this.it, e);
          (0, u.extendSubschemaData)(r, this.it, e);
          (0, u.extendSubschemaMode)(r, e);
          const s = { ...this.it, ...r, items: undefined, props: undefined };
          b(s, t);
          return s;
        }
        mergeEvaluated(e, t) {
          const { it: r, gen: s } = this;
          if (!r.opts.unevaluated) return;
          if (r.props !== true && e.props !== undefined) {
            r.props = h.mergeEvaluated.props(s, e.props, r.props, t);
          }
          if (r.items !== true && e.items !== undefined) {
            r.items = h.mergeEvaluated.items(s, e.items, r.items, t);
          }
        }
        mergeValidEvaluated(e, t) {
          const { it: r, gen: s } = this;
          if (r.opts.unevaluated && (r.props !== true || r.items !== true)) {
            s.if(t, () => this.mergeEvaluated(e, l.Name));
            return true;
          }
        }
      }
      t.KeywordCxt = H;
      function G(e, t, r, s) {
        const n = new H(e, r, t);
        if ("code" in r) {
          r.code(n, s);
        } else if (n.$data && r.validate) {
          (0, c.funcKeywordCode)(n, r);
        } else if ("macro" in r) {
          (0, c.macroKeywordCode)(n, r);
        } else if (r.compile || r.validate) {
          (0, c.funcKeywordCode)(n, r);
        }
      }
      const J = /^\/(?:[^~]|~0|~1)*$/;
      const B = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
      function W(e, { dataLevel: t, dataNames: r, dataPathArr: s }) {
        let n;
        let a;
        if (e === "") return d.default.rootData;
        if (e[0] === "/") {
          if (!J.test(e)) throw new Error(`Invalid JSON-pointer: ${e}`);
          n = e;
          a = d.default.rootData;
        } else {
          const o = B.exec(e);
          if (!o) throw new Error(`Invalid JSON-pointer: ${e}`);
          const i = +o[1];
          n = o[2];
          if (n === "#") {
            if (i >= t) throw new Error(c("property/index", i));
            return s[t - i];
          }
          if (i > t) throw new Error(c("data", i));
          a = r[t - i];
          if (!n) return a;
        }
        let o = a;
        const i = n.split("/");
        for (const u of i) {
          if (u) {
            a = (0, l._)`${a}${(0, l.getProperty)((0, h.unescapeJsonPointer)(u))}`;
            o = (0, l._)`${o} && ${a}`;
          }
        }
        return o;
        function c(e, r) {
          return `Cannot access ${e} ${r} levels up, current level is ${t}`;
        }
      }
      t.getData = W;
    },
    95005: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.validateKeywordUsage = t.validSchemaType = t.funcKeywordCode = t.macroKeywordCode = void 0;
      const s = r(93487);
      const n = r(22141);
      const a = r(10412);
      const o = r(4181);
      function i(e, t) {
        const { gen: r, keyword: n, schema: a, parentSchema: o, it: i } = e;
        const c = t.macro.call(i.self, a, o, i);
        const u = f(r, n, c);
        if (i.opts.validateSchema !== false) i.self.validateSchema(c, true);
        const l = r.name("valid");
        e.subschema({ schema: c, schemaPath: s.nil, errSchemaPath: `${i.errSchemaPath}/${n}`, topSchemaRef: u, compositeRule: true }, l);
        e.pass(l, () => e.error(true));
      }
      t.macroKeywordCode = i;
      function c(e, t) {
        var r;
        const { gen: o, keyword: i, schema: c, parentSchema: h, $data: p, it: m } = e;
        d(m, t);
        const y = !p && t.compile ? t.compile.call(m.self, c, h, m) : t.validate;
        const v = f(o, i, y);
        const g = o.let("valid");
        e.block$data(g, $);
        e.ok((r = t.valid) !== null && r !== void 0 ? r : g);
        function $() {
          if (t.errors === false) {
            b();
            if (t.modifying) u(e);
            E(() => e.error());
          } else {
            const r = t.async ? _() : w();
            if (t.modifying) u(e);
            E(() => l(e, r));
          }
        }
        function _() {
          const e = o.let("ruleErrs", null);
          o.try(
            () => b((0, s._)`await `),
            (t) =>
              o.assign(g, false).if(
                (0, s._)`${t} instanceof ${m.ValidationError}`,
                () => o.assign(e, (0, s._)`${t}.errors`),
                () => o.throw(t)
              )
          );
          return e;
        }
        function w() {
          const e = (0, s._)`${v}.errors`;
          o.assign(e, null);
          b(s.nil);
          return e;
        }
        function b(r = t.async ? (0, s._)`await ` : s.nil) {
          const i = m.opts.passContext ? n.default.this : n.default.self;
          const c = !(("compile" in t && !p) || t.schema === false);
          o.assign(g, (0, s._)`${r}${(0, a.callValidateCode)(e, v, i, c)}`, t.modifying);
        }
        function E(e) {
          var r;
          o.if((0, s.not)((r = t.valid) !== null && r !== void 0 ? r : g), e);
        }
      }
      t.funcKeywordCode = c;
      function u(e) {
        const { gen: t, data: r, it: n } = e;
        t.if(n.parentData, () => t.assign(r, (0, s._)`${n.parentData}[${n.parentDataProperty}]`));
      }
      function l(e, t) {
        const { gen: r } = e;
        r.if(
          (0, s._)`Array.isArray(${t})`,
          () => {
            r.assign(n.default.vErrors, (0, s._)`${n.default.vErrors} === null ? ${t} : ${n.default.vErrors}.concat(${t})`).assign(
              n.default.errors,
              (0, s._)`${n.default.vErrors}.length`
            );
            (0, o.extendErrors)(e);
          },
          () => e.error()
        );
      }
      function d({ schemaEnv: e }, t) {
        if (t.async && !e.$async) throw new Error("async keyword in sync schema");
      }
      function f(e, t, r) {
        if (r === undefined) throw new Error(`keyword "${t}" failed to compile`);
        return e.scopeValue("keyword", typeof r == "function" ? { ref: r } : { ref: r, code: (0, s.stringify)(r) });
      }
      function h(e, t, r = false) {
        return (
          !t.length ||
          t.some((t) =>
            t === "array"
              ? Array.isArray(e)
              : t === "object"
                ? e && typeof e == "object" && !Array.isArray(e)
                : typeof e == t || (r && typeof e == "undefined")
          )
        );
      }
      t.validSchemaType = h;
      function p({ schema: e, opts: t, self: r, errSchemaPath: s }, n, a) {
        if (Array.isArray(n.keyword) ? !n.keyword.includes(a) : n.keyword !== a) {
          throw new Error("ajv implementation error");
        }
        const o = n.dependencies;
        if (o === null || o === void 0 ? void 0 : o.some((t) => !Object.prototype.hasOwnProperty.call(e, t))) {
          throw new Error(`parent schema must have dependencies of ${a}: ${o.join(",")}`);
        }
        if (n.validateSchema) {
          const o = n.validateSchema(e[a]);
          if (!o) {
            const e = `keyword "${a}" value is invalid at path "${s}": ` + r.errorsText(n.validateSchema.errors);
            if (t.validateSchema === "log") r.logger.error(e);
            else throw new Error(e);
          }
        }
      }
      t.validateKeywordUsage = p;
    },
    13099: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.extendSubschemaMode = t.extendSubschemaData = t.getSubschema = void 0;
      const s = r(93487);
      const n = r(76776);
      function a(e, { keyword: t, schemaProp: r, schema: a, schemaPath: o, errSchemaPath: i, topSchemaRef: c }) {
        if (t !== undefined && a !== undefined) {
          throw new Error('both "keyword" and "schema" passed, only one allowed');
        }
        if (t !== undefined) {
          const a = e.schema[t];
          return r === undefined
            ? { schema: a, schemaPath: (0, s._)`${e.schemaPath}${(0, s.getProperty)(t)}`, errSchemaPath: `${e.errSchemaPath}/${t}` }
            : {
                schema: a[r],
                schemaPath: (0, s._)`${e.schemaPath}${(0, s.getProperty)(t)}${(0, s.getProperty)(r)}`,
                errSchemaPath: `${e.errSchemaPath}/${t}/${(0, n.escapeFragment)(r)}`,
              };
        }
        if (a !== undefined) {
          if (o === undefined || i === undefined || c === undefined) {
            throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
          }
          return { schema: a, schemaPath: o, topSchemaRef: c, errSchemaPath: i };
        }
        throw new Error('either "keyword" or "schema" must be passed');
      }
      t.getSubschema = a;
      function o(e, t, { dataProp: r, dataPropType: a, data: o, dataTypes: i, propertyName: c }) {
        if (o !== undefined && r !== undefined) {
          throw new Error('both "data" and "dataProp" passed, only one allowed');
        }
        const { gen: u } = t;
        if (r !== undefined) {
          const { errorPath: o, dataPathArr: i, opts: c } = t;
          const d = u.let("data", (0, s._)`${t.data}${(0, s.getProperty)(r)}`, true);
          l(d);
          e.errorPath = (0, s.str)`${o}${(0, n.getErrorPath)(r, a, c.jsPropertySyntax)}`;
          e.parentDataProperty = (0, s._)`${r}`;
          e.dataPathArr = [...i, e.parentDataProperty];
        }
        if (o !== undefined) {
          const t = o instanceof s.Name ? o : u.let("data", o, true);
          l(t);
          if (c !== undefined) e.propertyName = c;
        }
        if (i) e.dataTypes = i;
        function l(r) {
          e.data = r;
          e.dataLevel = t.dataLevel + 1;
          e.dataTypes = [];
          t.definedProperties = new Set();
          e.parentData = t.data;
          e.dataNames = [...t.dataNames, r];
        }
      }
      t.extendSubschemaData = o;
      function i(e, { jtdDiscriminator: t, jtdMetadata: r, compositeRule: s, createErrors: n, allErrors: a }) {
        if (s !== undefined) e.compositeRule = s;
        if (n !== undefined) e.createErrors = n;
        if (a !== undefined) e.allErrors = a;
        e.jtdDiscriminator = t;
        e.jtdMetadata = r;
      }
      t.extendSubschemaMode = i;
    },
    27159: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = void 0;
      var s = r(74815);
      Object.defineProperty(t, "KeywordCxt", {
        enumerable: true,
        get: function () {
          return s.KeywordCxt;
        },
      });
      var n = r(93487);
      Object.defineProperty(t, "_", {
        enumerable: true,
        get: function () {
          return n._;
        },
      });
      Object.defineProperty(t, "str", {
        enumerable: true,
        get: function () {
          return n.str;
        },
      });
      Object.defineProperty(t, "stringify", {
        enumerable: true,
        get: function () {
          return n.stringify;
        },
      });
      Object.defineProperty(t, "nil", {
        enumerable: true,
        get: function () {
          return n.nil;
        },
      });
      Object.defineProperty(t, "Name", {
        enumerable: true,
        get: function () {
          return n.Name;
        },
      });
      Object.defineProperty(t, "CodeGen", {
        enumerable: true,
        get: function () {
          return n.CodeGen;
        },
      });
      const a = r(67426);
      const o = r(6646);
      const i = r(13141);
      const c = r(25173);
      const u = r(93487);
      const l = r(32531);
      const d = r(50453);
      const f = r(76776);
      const h = r(64775);
      const p = r(43589);
      const m = (e, t) => new RegExp(e, t);
      m.code = "new RegExp";
      const y = ["removeAdditional", "useDefaults", "coerceTypes"];
      const v = new Set([
        "validate",
        "serialize",
        "parse",
        "wrapper",
        "root",
        "schema",
        "keyword",
        "pattern",
        "formats",
        "validate$data",
        "func",
        "obj",
        "Error",
      ]);
      const g = {
        errorDataPath: "",
        format: "`validateFormats: false` can be used instead.",
        nullable: '"nullable" keyword is supported by default.',
        jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
        extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
        missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
        processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
        sourceCode: "Use option `code: {source: true}`",
        strictDefaults: "It is default now, see option `strict`.",
        strictKeywords: "It is default now, see option `strict`.",
        uniqueItems: '"uniqueItems" keyword is always validated.',
        unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
        cache: "Map is used as cache, schema object as key.",
        serialize: "Map is used as cache, schema object as key.",
        ajvErrors: "It is default now.",
      };
      const $ = { ignoreKeywordsWithRef: "", jsPropertySyntax: "", unicode: '"minLength"/"maxLength" account for unicode characters by default.' };
      const _ = 200;
      function w(e) {
        var t, r, s, n, a, o, i, c, u, l, d, f, h, y, v, g, $, w, b, E, P, S, N, k, C;
        const j = e.strict;
        const O = (t = e.code) === null || t === void 0 ? void 0 : t.optimize;
        const x = O === true || O === undefined ? 1 : O || 0;
        const T = (s = (r = e.code) === null || r === void 0 ? void 0 : r.regExp) !== null && s !== void 0 ? s : m;
        const I = (n = e.uriResolver) !== null && n !== void 0 ? n : p.default;
        return {
          strictSchema: (o = (a = e.strictSchema) !== null && a !== void 0 ? a : j) !== null && o !== void 0 ? o : true,
          strictNumbers: (c = (i = e.strictNumbers) !== null && i !== void 0 ? i : j) !== null && c !== void 0 ? c : true,
          strictTypes: (l = (u = e.strictTypes) !== null && u !== void 0 ? u : j) !== null && l !== void 0 ? l : "log",
          strictTuples: (f = (d = e.strictTuples) !== null && d !== void 0 ? d : j) !== null && f !== void 0 ? f : "log",
          strictRequired: (y = (h = e.strictRequired) !== null && h !== void 0 ? h : j) !== null && y !== void 0 ? y : false,
          code: e.code ? { ...e.code, optimize: x, regExp: T } : { optimize: x, regExp: T },
          loopRequired: (v = e.loopRequired) !== null && v !== void 0 ? v : _,
          loopEnum: (g = e.loopEnum) !== null && g !== void 0 ? g : _,
          meta: ($ = e.meta) !== null && $ !== void 0 ? $ : true,
          messages: (w = e.messages) !== null && w !== void 0 ? w : true,
          inlineRefs: (b = e.inlineRefs) !== null && b !== void 0 ? b : true,
          schemaId: (E = e.schemaId) !== null && E !== void 0 ? E : "$id",
          addUsedSchema: (P = e.addUsedSchema) !== null && P !== void 0 ? P : true,
          validateSchema: (S = e.validateSchema) !== null && S !== void 0 ? S : true,
          validateFormats: (N = e.validateFormats) !== null && N !== void 0 ? N : true,
          unicodeRegExp: (k = e.unicodeRegExp) !== null && k !== void 0 ? k : true,
          int32range: (C = e.int32range) !== null && C !== void 0 ? C : true,
          uriResolver: I,
        };
      }
      class b {
        constructor(e = {}) {
          this.schemas = {};
          this.refs = {};
          this.formats = {};
          this._compilations = new Set();
          this._loading = {};
          this._cache = new Map();
          e = this.opts = { ...e, ...w(e) };
          const { es5: t, lines: r } = this.opts.code;
          this.scope = new u.ValueScope({ scope: {}, prefixes: v, es5: t, lines: r });
          this.logger = O(e.logger);
          const s = e.validateFormats;
          e.validateFormats = false;
          this.RULES = (0, i.getRules)();
          E.call(this, g, e, "NOT SUPPORTED");
          E.call(this, $, e, "DEPRECATED", "warn");
          this._metaOpts = C.call(this);
          if (e.formats) N.call(this);
          this._addVocabularies();
          this._addDefaultMetaSchema();
          if (e.keywords) k.call(this, e.keywords);
          if (typeof e.meta == "object") this.addMetaSchema(e.meta);
          S.call(this);
          e.validateFormats = s;
        }
        _addVocabularies() {
          this.addKeyword("$async");
        }
        _addDefaultMetaSchema() {
          const { $data: e, meta: t, schemaId: r } = this.opts;
          let s = h;
          if (r === "id") {
            s = { ...h };
            s.id = s.$id;
            delete s.$id;
          }
          if (t && e) this.addMetaSchema(s, s[r], false);
        }
        defaultMeta() {
          const { meta: e, schemaId: t } = this.opts;
          return (this.opts.defaultMeta = typeof e == "object" ? e[t] || e : undefined);
        }
        validate(e, t) {
          let r;
          if (typeof e == "string") {
            r = this.getSchema(e);
            if (!r) throw new Error(`no schema with key or ref "${e}"`);
          } else {
            r = this.compile(e);
          }
          const s = r(t);
          if (!("$async" in r)) this.errors = r.errors;
          return s;
        }
        compile(e, t) {
          const r = this._addSchema(e, t);
          return r.validate || this._compileSchemaEnv(r);
        }
        compileAsync(e, t) {
          if (typeof this.opts.loadSchema != "function") {
            throw new Error("options.loadSchema should be a function");
          }
          const { loadSchema: r } = this.opts;
          return s.call(this, e, t);
          async function s(e, t) {
            await n.call(this, e.$schema);
            const r = this._addSchema(e, t);
            return r.validate || a.call(this, r);
          }
          async function n(e) {
            if (e && !this.getSchema(e)) {
              await s.call(this, { $ref: e }, true);
            }
          }
          async function a(e) {
            try {
              return this._compileSchemaEnv(e);
            } catch (t) {
              if (!(t instanceof o.default)) throw t;
              i.call(this, t);
              await c.call(this, t.missingSchema);
              return a.call(this, e);
            }
          }
          function i({ missingSchema: e, missingRef: t }) {
            if (this.refs[e]) {
              throw new Error(`AnySchema ${e} is loaded but ${t} cannot be resolved`);
            }
          }
          async function c(e) {
            const r = await u.call(this, e);
            if (!this.refs[e]) await n.call(this, r.$schema);
            if (!this.refs[e]) this.addSchema(r, e, t);
          }
          async function u(e) {
            const t = this._loading[e];
            if (t) return t;
            try {
              return await (this._loading[e] = r(e));
            } finally {
              delete this._loading[e];
            }
          }
        }
        addSchema(e, t, r, s = this.opts.validateSchema) {
          if (Array.isArray(e)) {
            for (const t of e) this.addSchema(t, undefined, r, s);
            return this;
          }
          let n;
          if (typeof e === "object") {
            const { schemaId: t } = this.opts;
            n = e[t];
            if (n !== undefined && typeof n != "string") {
              throw new Error(`schema ${t} must be string`);
            }
          }
          t = (0, l.normalizeId)(t || n);
          this._checkUnique(t);
          this.schemas[t] = this._addSchema(e, r, t, s, true);
          return this;
        }
        addMetaSchema(e, t, r = this.opts.validateSchema) {
          this.addSchema(e, t, true, r);
          return this;
        }
        validateSchema(e, t) {
          if (typeof e == "boolean") return true;
          let r;
          r = e.$schema;
          if (r !== undefined && typeof r != "string") {
            throw new Error("$schema must be a string");
          }
          r = r || this.opts.defaultMeta || this.defaultMeta();
          if (!r) {
            this.logger.warn("meta-schema not available");
            this.errors = null;
            return true;
          }
          const s = this.validate(r, e);
          if (!s && t) {
            const e = "schema is invalid: " + this.errorsText();
            if (this.opts.validateSchema === "log") this.logger.error(e);
            else throw new Error(e);
          }
          return s;
        }
        getSchema(e) {
          let t;
          while (typeof (t = P.call(this, e)) == "string") e = t;
          if (t === undefined) {
            const { schemaId: r } = this.opts;
            const s = new c.SchemaEnv({ schema: {}, schemaId: r });
            t = c.resolveSchema.call(this, s, e);
            if (!t) return;
            this.refs[e] = t;
          }
          return t.validate || this._compileSchemaEnv(t);
        }
        removeSchema(e) {
          if (e instanceof RegExp) {
            this._removeAllSchemas(this.schemas, e);
            this._removeAllSchemas(this.refs, e);
            return this;
          }
          switch (typeof e) {
            case "undefined":
              this._removeAllSchemas(this.schemas);
              this._removeAllSchemas(this.refs);
              this._cache.clear();
              return this;
            case "string": {
              const t = P.call(this, e);
              if (typeof t == "object") this._cache.delete(t.schema);
              delete this.schemas[e];
              delete this.refs[e];
              return this;
            }
            case "object": {
              const t = e;
              this._cache.delete(t);
              let r = e[this.opts.schemaId];
              if (r) {
                r = (0, l.normalizeId)(r);
                delete this.schemas[r];
                delete this.refs[r];
              }
              return this;
            }
            default:
              throw new Error("ajv.removeSchema: invalid parameter");
          }
        }
        addVocabulary(e) {
          for (const t of e) this.addKeyword(t);
          return this;
        }
        addKeyword(e, t) {
          let r;
          if (typeof e == "string") {
            r = e;
            if (typeof t == "object") {
              this.logger.warn("these parameters are deprecated, see docs for addKeyword");
              t.keyword = r;
            }
          } else if (typeof e == "object" && t === undefined) {
            t = e;
            r = t.keyword;
            if (Array.isArray(r) && !r.length) {
              throw new Error("addKeywords: keyword must be string or non-empty array");
            }
          } else {
            throw new Error("invalid addKeywords parameters");
          }
          T.call(this, r, t);
          if (!t) {
            (0, f.eachItem)(r, (e) => I.call(this, e));
            return this;
          }
          D.call(this, t);
          const s = { ...t, type: (0, d.getJSONTypes)(t.type), schemaType: (0, d.getJSONTypes)(t.schemaType) };
          (0, f.eachItem)(r, s.type.length === 0 ? (e) => I.call(this, e, s) : (e) => s.type.forEach((t) => I.call(this, e, s, t)));
          return this;
        }
        getKeyword(e) {
          const t = this.RULES.all[e];
          return typeof t == "object" ? t.definition : !!t;
        }
        removeKeyword(e) {
          const { RULES: t } = this;
          delete t.keywords[e];
          delete t.all[e];
          for (const r of t.rules) {
            const t = r.rules.findIndex((t) => t.keyword === e);
            if (t >= 0) r.rules.splice(t, 1);
          }
          return this;
        }
        addFormat(e, t) {
          if (typeof t == "string") t = new RegExp(t);
          this.formats[e] = t;
          return this;
        }
        errorsText(e = this.errors, { separator: t = ", ", dataVar: r = "data" } = {}) {
          if (!e || e.length === 0) return "No errors";
          return e.map((e) => `${r}${e.instancePath} ${e.message}`).reduce((e, r) => e + t + r);
        }
        $dataMetaSchema(e, t) {
          const r = this.RULES.all;
          e = JSON.parse(JSON.stringify(e));
          for (const s of t) {
            const t = s.split("/").slice(1);
            let n = e;
            for (const e of t) n = n[e];
            for (const e in r) {
              const t = r[e];
              if (typeof t != "object") continue;
              const { $data: s } = t.definition;
              const a = n[e];
              if (s && a) n[e] = M(a);
            }
          }
          return e;
        }
        _removeAllSchemas(e, t) {
          for (const r in e) {
            const s = e[r];
            if (!t || t.test(r)) {
              if (typeof s == "string") {
                delete e[r];
              } else if (s && !s.meta) {
                this._cache.delete(s.schema);
                delete e[r];
              }
            }
          }
        }
        _addSchema(e, t, r, s = this.opts.validateSchema, n = this.opts.addUsedSchema) {
          let a;
          const { schemaId: o } = this.opts;
          if (typeof e == "object") {
            a = e[o];
          } else {
            if (this.opts.jtd) throw new Error("schema must be object");
            else if (typeof e != "boolean") throw new Error("schema must be object or boolean");
          }
          let i = this._cache.get(e);
          if (i !== undefined) return i;
          r = (0, l.normalizeId)(a || r);
          const u = l.getSchemaRefs.call(this, e, r);
          i = new c.SchemaEnv({ schema: e, schemaId: o, meta: t, baseId: r, localRefs: u });
          this._cache.set(i.schema, i);
          if (n && !r.startsWith("#")) {
            if (r) this._checkUnique(r);
            this.refs[r] = i;
          }
          if (s) this.validateSchema(e, true);
          return i;
        }
        _checkUnique(e) {
          if (this.schemas[e] || this.refs[e]) {
            throw new Error(`schema with key or id "${e}" already exists`);
          }
        }
        _compileSchemaEnv(e) {
          if (e.meta) this._compileMetaSchema(e);
          else c.compileSchema.call(this, e);
          if (!e.validate) throw new Error("ajv implementation error");
          return e.validate;
        }
        _compileMetaSchema(e) {
          const t = this.opts;
          this.opts = this._metaOpts;
          try {
            c.compileSchema.call(this, e);
          } finally {
            this.opts = t;
          }
        }
      }
      t["default"] = b;
      b.ValidationError = a.default;
      b.MissingRefError = o.default;
      function E(e, t, r, s = "error") {
        for (const n in e) {
          const a = n;
          if (a in t) this.logger[s](`${r}: option ${n}. ${e[a]}`);
        }
      }
      function P(e) {
        e = (0, l.normalizeId)(e);
        return this.schemas[e] || this.refs[e];
      }
      function S() {
        const e = this.opts.schemas;
        if (!e) return;
        if (Array.isArray(e)) this.addSchema(e);
        else for (const t in e) this.addSchema(e[t], t);
      }
      function N() {
        for (const e in this.opts.formats) {
          const t = this.opts.formats[e];
          if (t) this.addFormat(e, t);
        }
      }
      function k(e) {
        if (Array.isArray(e)) {
          this.addVocabulary(e);
          return;
        }
        this.logger.warn("keywords option as map is deprecated, pass array");
        for (const t in e) {
          const r = e[t];
          if (!r.keyword) r.keyword = t;
          this.addKeyword(r);
        }
      }
      function C() {
        const e = { ...this.opts };
        for (const t of y) delete e[t];
        return e;
      }
      const j = { log() {}, warn() {}, error() {} };
      function O(e) {
        if (e === false) return j;
        if (e === undefined) return console;
        if (e.log && e.warn && e.error) return e;
        throw new Error("logger must implement log, warn and error methods");
      }
      const x = /^[a-z_$][a-z0-9_$:-]*$/i;
      function T(e, t) {
        const { RULES: r } = this;
        (0, f.eachItem)(e, (e) => {
          if (r.keywords[e]) throw new Error(`Keyword ${e} is already defined`);
          if (!x.test(e)) throw new Error(`Keyword ${e} has invalid name`);
        });
        if (!t) return;
        if (t.$data && !("code" in t || "validate" in t)) {
          throw new Error('$data keyword must have "code" or "validate" function');
        }
      }
      function I(e, t, r) {
        var s;
        const n = t === null || t === void 0 ? void 0 : t.post;
        if (r && n) throw new Error('keyword with "post" flag cannot have "type"');
        const { RULES: a } = this;
        let o = n ? a.post : a.rules.find(({ type: e }) => e === r);
        if (!o) {
          o = { type: r, rules: [] };
          a.rules.push(o);
        }
        a.keywords[e] = true;
        if (!t) return;
        const i = { keyword: e, definition: { ...t, type: (0, d.getJSONTypes)(t.type), schemaType: (0, d.getJSONTypes)(t.schemaType) } };
        if (t.before) R.call(this, o, i, t.before);
        else o.rules.push(i);
        a.all[e] = i;
        (s = t.implements) === null || s === void 0 ? void 0 : s.forEach((e) => this.addKeyword(e));
      }
      function R(e, t, r) {
        const s = e.rules.findIndex((e) => e.keyword === r);
        if (s >= 0) {
          e.rules.splice(s, 0, t);
        } else {
          e.rules.push(t);
          this.logger.warn(`rule ${r} is not defined`);
        }
      }
      function D(e) {
        let { metaSchema: t } = e;
        if (t === undefined) return;
        if (e.$data && this.opts.$data) t = M(t);
        e.validateSchema = this.compile(t, true);
      }
      const A = { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" };
      function M(e) {
        return { anyOf: [e, A] };
      }
    },
    43510: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(64063);
      s.code = 'require("ajv/dist/runtime/equal").default';
      t["default"] = s;
    },
    74499: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      function r(e) {
        const t = e.length;
        let r = 0;
        let s = 0;
        let n;
        while (s < t) {
          r++;
          n = e.charCodeAt(s++);
          if (n >= 55296 && n <= 56319 && s < t) {
            n = e.charCodeAt(s);
            if ((n & 64512) === 56320) s++;
          }
        }
        return r;
      }
      t["default"] = r;
      r.code = 'require("ajv/dist/runtime/ucs2length").default';
    },
    43589: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(60540);
      s.code = 'require("ajv/dist/runtime/uri").default';
      t["default"] = s;
    },
    67426: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      class r extends Error {
        constructor(e) {
          super("validation failed");
          this.errors = e;
          this.ajv = this.validation = true;
        }
      }
      t["default"] = r;
    },
    4783: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.validateAdditionalItems = void 0;
      const s = r(93487);
      const n = r(76776);
      const a = {
        message: ({ params: { len: e } }) => (0, s.str)`must NOT have more than ${e} items`,
        params: ({ params: { len: e } }) => (0, s._)`{limit: ${e}}`,
      };
      const o = {
        keyword: "additionalItems",
        type: "array",
        schemaType: ["boolean", "object"],
        before: "uniqueItems",
        error: a,
        code(e) {
          const { parentSchema: t, it: r } = e;
          const { items: s } = t;
          if (!Array.isArray(s)) {
            (0, n.checkStrictMode)(r, '"additionalItems" is ignored when "items" is not an array of schemas');
            return;
          }
          i(e, s);
        },
      };
      function i(e, t) {
        const { gen: r, schema: a, data: o, keyword: i, it: c } = e;
        c.items = true;
        const u = r.const("len", (0, s._)`${o}.length`);
        if (a === false) {
          e.setParams({ len: t.length });
          e.pass((0, s._)`${u} <= ${t.length}`);
        } else if (typeof a == "object" && !(0, n.alwaysValidSchema)(c, a)) {
          const n = r.var("valid", (0, s._)`${u} <= ${t.length}`);
          r.if((0, s.not)(n), () => l(n));
          e.ok(n);
        }
        function l(a) {
          r.forRange("i", t.length, u, (t) => {
            e.subschema({ keyword: i, dataProp: t, dataPropType: n.Type.Num }, a);
            if (!c.allErrors) r.if((0, s.not)(a), () => r.break());
          });
        }
      }
      t.validateAdditionalItems = i;
      t["default"] = o;
    },
    69351: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(10412);
      const n = r(93487);
      const a = r(22141);
      const o = r(76776);
      const i = {
        message: "must NOT have additional properties",
        params: ({ params: e }) => (0, n._)`{additionalProperty: ${e.additionalProperty}}`,
      };
      const c = {
        keyword: "additionalProperties",
        type: ["object"],
        schemaType: ["boolean", "object"],
        allowUndefined: true,
        trackErrors: true,
        error: i,
        code(e) {
          const { gen: t, schema: r, parentSchema: i, data: c, errsCount: u, it: l } = e;
          if (!u) throw new Error("ajv implementation error");
          const { allErrors: d, opts: f } = l;
          l.props = true;
          if (f.removeAdditional !== "all" && (0, o.alwaysValidSchema)(l, r)) return;
          const h = (0, s.allSchemaProperties)(i.properties);
          const p = (0, s.allSchemaProperties)(i.patternProperties);
          m();
          e.ok((0, n._)`${u} === ${a.default.errors}`);
          function m() {
            t.forIn("key", c, (e) => {
              if (!h.length && !p.length) g(e);
              else t.if(y(e), () => g(e));
            });
          }
          function y(r) {
            let a;
            if (h.length > 8) {
              const e = (0, o.schemaRefOrVal)(l, i.properties, "properties");
              a = (0, s.isOwnProperty)(t, e, r);
            } else if (h.length) {
              a = (0, n.or)(...h.map((e) => (0, n._)`${r} === ${e}`));
            } else {
              a = n.nil;
            }
            if (p.length) {
              a = (0, n.or)(a, ...p.map((t) => (0, n._)`${(0, s.usePattern)(e, t)}.test(${r})`));
            }
            return (0, n.not)(a);
          }
          function v(e) {
            t.code((0, n._)`delete ${c}[${e}]`);
          }
          function g(s) {
            if (f.removeAdditional === "all" || (f.removeAdditional && r === false)) {
              v(s);
              return;
            }
            if (r === false) {
              e.setParams({ additionalProperty: s });
              e.error();
              if (!d) t.break();
              return;
            }
            if (typeof r == "object" && !(0, o.alwaysValidSchema)(l, r)) {
              const r = t.name("valid");
              if (f.removeAdditional === "failing") {
                $(s, r, false);
                t.if((0, n.not)(r), () => {
                  e.reset();
                  v(s);
                });
              } else {
                $(s, r);
                if (!d) t.if((0, n.not)(r), () => t.break());
              }
            }
          }
          function $(t, r, s) {
            const n = { keyword: "additionalProperties", dataProp: t, dataPropType: o.Type.Str };
            if (s === false) {
              Object.assign(n, { compositeRule: true, createErrors: false, allErrors: false });
            }
            e.subschema(n, r);
          }
        },
      };
      t["default"] = c;
    },
    71125: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(76776);
      const n = {
        keyword: "allOf",
        schemaType: "array",
        code(e) {
          const { gen: t, schema: r, it: n } = e;
          if (!Array.isArray(r)) throw new Error("ajv implementation error");
          const a = t.name("valid");
          r.forEach((t, r) => {
            if ((0, s.alwaysValidSchema)(n, t)) return;
            const o = e.subschema({ keyword: "allOf", schemaProp: r }, a);
            e.ok(a);
            e.mergeEvaluated(o);
          });
        },
      };
      t["default"] = n;
    },
    50019: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(10412);
      const n = {
        keyword: "anyOf",
        schemaType: "array",
        trackErrors: true,
        code: s.validateUnion,
        error: { message: "must match a schema in anyOf" },
      };
      t["default"] = n;
    },
    79864: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(93487);
      const n = r(76776);
      const a = {
        message: ({ params: { min: e, max: t } }) =>
          t === undefined
            ? (0, s.str)`must contain at least ${e} valid item(s)`
            : (0, s.str)`must contain at least ${e} and no more than ${t} valid item(s)`,
        params: ({ params: { min: e, max: t } }) =>
          t === undefined ? (0, s._)`{minContains: ${e}}` : (0, s._)`{minContains: ${e}, maxContains: ${t}}`,
      };
      const o = {
        keyword: "contains",
        type: "array",
        schemaType: ["object", "boolean"],
        before: "uniqueItems",
        trackErrors: true,
        error: a,
        code(e) {
          const { gen: t, schema: r, parentSchema: a, data: o, it: i } = e;
          let c;
          let u;
          const { minContains: l, maxContains: d } = a;
          if (i.opts.next) {
            c = l === undefined ? 1 : l;
            u = d;
          } else {
            c = 1;
          }
          const f = t.const("len", (0, s._)`${o}.length`);
          e.setParams({ min: c, max: u });
          if (u === undefined && c === 0) {
            (0, n.checkStrictMode)(i, `"minContains" == 0 without "maxContains": "contains" keyword ignored`);
            return;
          }
          if (u !== undefined && c > u) {
            (0, n.checkStrictMode)(i, `"minContains" > "maxContains" is always invalid`);
            e.fail();
            return;
          }
          if ((0, n.alwaysValidSchema)(i, r)) {
            let t = (0, s._)`${f} >= ${c}`;
            if (u !== undefined) t = (0, s._)`${t} && ${f} <= ${u}`;
            e.pass(t);
            return;
          }
          i.items = true;
          const h = t.name("valid");
          if (u === undefined && c === 1) {
            m(h, () => t.if(h, () => t.break()));
          } else if (c === 0) {
            t.let(h, true);
            if (u !== undefined) t.if((0, s._)`${o}.length > 0`, p);
          } else {
            t.let(h, false);
            p();
          }
          e.result(h, () => e.reset());
          function p() {
            const e = t.name("_valid");
            const r = t.let("count", 0);
            m(e, () => t.if(e, () => y(r)));
          }
          function m(r, s) {
            t.forRange("i", 0, f, (t) => {
              e.subschema({ keyword: "contains", dataProp: t, dataPropType: n.Type.Num, compositeRule: true }, r);
              s();
            });
          }
          function y(e) {
            t.code((0, s._)`${e}++`);
            if (u === undefined) {
              t.if((0, s._)`${e} >= ${c}`, () => t.assign(h, true).break());
            } else {
              t.if((0, s._)`${e} > ${u}`, () => t.assign(h, false).break());
              if (c === 1) t.assign(h, true);
              else t.if((0, s._)`${e} >= ${c}`, () => t.assign(h, true));
            }
          }
        },
      };
      t["default"] = o;
    },
    67772: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.validateSchemaDeps = t.validatePropertyDeps = t.error = void 0;
      const s = r(93487);
      const n = r(76776);
      const a = r(10412);
      t.error = {
        message: ({ params: { property: e, depsCount: t, deps: r } }) => {
          const n = t === 1 ? "property" : "properties";
          return (0, s.str)`must have ${n} ${r} when property ${e} is present`;
        },
        params: ({ params: { property: e, depsCount: t, deps: r, missingProperty: n } }) => (0, s._)`{property: ${e},
    missingProperty: ${n},
    depsCount: ${t},
    deps: ${r}}`,
      };
      const o = {
        keyword: "dependencies",
        type: "object",
        schemaType: "object",
        error: t.error,
        code(e) {
          const [t, r] = i(e);
          c(e, t);
          u(e, r);
        },
      };
      function i({ schema: e }) {
        const t = {};
        const r = {};
        for (const s in e) {
          if (s === "__proto__") continue;
          const n = Array.isArray(e[s]) ? t : r;
          n[s] = e[s];
        }
        return [t, r];
      }
      function c(e, t = e.schema) {
        const { gen: r, data: n, it: o } = e;
        if (Object.keys(t).length === 0) return;
        const i = r.let("missing");
        for (const c in t) {
          const u = t[c];
          if (u.length === 0) continue;
          const l = (0, a.propertyInData)(r, n, c, o.opts.ownProperties);
          e.setParams({ property: c, depsCount: u.length, deps: u.join(", ") });
          if (o.allErrors) {
            r.if(l, () => {
              for (const t of u) {
                (0, a.checkReportMissingProp)(e, t);
              }
            });
          } else {
            r.if((0, s._)`${l} && (${(0, a.checkMissingProp)(e, u, i)})`);
            (0, a.reportMissingProp)(e, i);
            r.else();
          }
        }
      }
      t.validatePropertyDeps = c;
      function u(e, t = e.schema) {
        const { gen: r, data: s, keyword: o, it: i } = e;
        const c = r.name("valid");
        for (const u in t) {
          if ((0, n.alwaysValidSchema)(i, t[u])) continue;
          r.if(
            (0, a.propertyInData)(r, s, u, i.opts.ownProperties),
            () => {
              const t = e.subschema({ keyword: o, schemaProp: u }, c);
              e.mergeValidEvaluated(t, c);
            },
            () => r.var(c, true)
          );
          e.ok(c);
        }
      }
      t.validateSchemaDeps = u;
      t["default"] = o;
    },
    89434: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(93487);
      const n = r(76776);
      const a = {
        message: ({ params: e }) => (0, s.str)`must match "${e.ifClause}" schema`,
        params: ({ params: e }) => (0, s._)`{failingKeyword: ${e.ifClause}}`,
      };
      const o = {
        keyword: "if",
        schemaType: ["object", "boolean"],
        trackErrors: true,
        error: a,
        code(e) {
          const { gen: t, parentSchema: r, it: a } = e;
          if (r.then === undefined && r.else === undefined) {
            (0, n.checkStrictMode)(a, '"if" without "then" and "else" is ignored');
          }
          const o = i(a, "then");
          const c = i(a, "else");
          if (!o && !c) return;
          const u = t.let("valid", true);
          const l = t.name("_valid");
          d();
          e.reset();
          if (o && c) {
            const r = t.let("ifClause");
            e.setParams({ ifClause: r });
            t.if(l, f("then", r), f("else", r));
          } else if (o) {
            t.if(l, f("then"));
          } else {
            t.if((0, s.not)(l), f("else"));
          }
          e.pass(u, () => e.error(true));
          function d() {
            const t = e.subschema({ keyword: "if", compositeRule: true, createErrors: false, allErrors: false }, l);
            e.mergeEvaluated(t);
          }
          function f(r, n) {
            return () => {
              const a = e.subschema({ keyword: r }, l);
              t.assign(u, l);
              e.mergeValidEvaluated(a, u);
              if (n) t.assign(n, (0, s._)`${r}`);
              else e.setParams({ ifClause: r });
            };
          }
        },
      };
      function i(e, t) {
        const r = e.schema[t];
        return r !== undefined && !(0, n.alwaysValidSchema)(e, r);
      }
      t["default"] = o;
    },
    8200: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(4783);
      const n = r(72924);
      const a = r(64665);
      const o = r(1119);
      const i = r(79864);
      const c = r(67772);
      const u = r(33708);
      const l = r(69351);
      const d = r(76239);
      const f = r(12296);
      const h = r(15697);
      const p = r(50019);
      const m = r(14200);
      const y = r(71125);
      const v = r(89434);
      const g = r(66552);
      function $(e = false) {
        const t = [h.default, p.default, m.default, y.default, v.default, g.default, u.default, l.default, c.default, d.default, f.default];
        if (e) t.push(n.default, o.default);
        else t.push(s.default, a.default);
        t.push(i.default);
        return t;
      }
      t["default"] = $;
    },
    64665: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.validateTuple = void 0;
      const s = r(93487);
      const n = r(76776);
      const a = r(10412);
      const o = {
        keyword: "items",
        type: "array",
        schemaType: ["object", "array", "boolean"],
        before: "uniqueItems",
        code(e) {
          const { schema: t, it: r } = e;
          if (Array.isArray(t)) return i(e, "additionalItems", t);
          r.items = true;
          if ((0, n.alwaysValidSchema)(r, t)) return;
          e.ok((0, a.validateArray)(e));
        },
      };
      function i(e, t, r = e.schema) {
        const { gen: a, parentSchema: o, data: i, keyword: c, it: u } = e;
        f(o);
        if (u.opts.unevaluated && r.length && u.items !== true) {
          u.items = n.mergeEvaluated.items(a, r.length, u.items);
        }
        const l = a.name("valid");
        const d = a.const("len", (0, s._)`${i}.length`);
        r.forEach((t, r) => {
          if ((0, n.alwaysValidSchema)(u, t)) return;
          a.if((0, s._)`${d} > ${r}`, () => e.subschema({ keyword: c, schemaProp: r, dataProp: r }, l));
          e.ok(l);
        });
        function f(e) {
          const { opts: s, errSchemaPath: a } = u;
          const o = r.length;
          const i = o === e.minItems && (o === e.maxItems || e[t] === false);
          if (s.strictTuples && !i) {
            const e = `"${c}" is ${o}-tuple, but minItems or maxItems/${t} are not specified or different at path "${a}"`;
            (0, n.checkStrictMode)(u, e, s.strictTuples);
          }
        }
      }
      t.validateTuple = i;
      t["default"] = o;
    },
    1119: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(93487);
      const n = r(76776);
      const a = r(10412);
      const o = r(4783);
      const i = {
        message: ({ params: { len: e } }) => (0, s.str)`must NOT have more than ${e} items`,
        params: ({ params: { len: e } }) => (0, s._)`{limit: ${e}}`,
      };
      const c = {
        keyword: "items",
        type: "array",
        schemaType: ["object", "boolean"],
        before: "uniqueItems",
        error: i,
        code(e) {
          const { schema: t, parentSchema: r, it: s } = e;
          const { prefixItems: i } = r;
          s.items = true;
          if ((0, n.alwaysValidSchema)(s, t)) return;
          if (i) (0, o.validateAdditionalItems)(e, i);
          else e.ok((0, a.validateArray)(e));
        },
      };
      t["default"] = c;
    },
    15697: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(76776);
      const n = {
        keyword: "not",
        schemaType: ["object", "boolean"],
        trackErrors: true,
        code(e) {
          const { gen: t, schema: r, it: n } = e;
          if ((0, s.alwaysValidSchema)(n, r)) {
            e.fail();
            return;
          }
          const a = t.name("valid");
          e.subschema({ keyword: "not", compositeRule: true, createErrors: false, allErrors: false }, a);
          e.failResult(
            a,
            () => e.reset(),
            () => e.error()
          );
        },
        error: { message: "must NOT be valid" },
      };
      t["default"] = n;
    },
    14200: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(93487);
      const n = r(76776);
      const a = { message: "must match exactly one schema in oneOf", params: ({ params: e }) => (0, s._)`{passingSchemas: ${e.passing}}` };
      const o = {
        keyword: "oneOf",
        schemaType: "array",
        trackErrors: true,
        error: a,
        code(e) {
          const { gen: t, schema: r, parentSchema: a, it: o } = e;
          if (!Array.isArray(r)) throw new Error("ajv implementation error");
          if (o.opts.discriminator && a.discriminator) return;
          const i = r;
          const c = t.let("valid", false);
          const u = t.let("passing", null);
          const l = t.name("_valid");
          e.setParams({ passing: u });
          t.block(d);
          e.result(
            c,
            () => e.reset(),
            () => e.error(true)
          );
          function d() {
            i.forEach((r, a) => {
              let i;
              if ((0, n.alwaysValidSchema)(o, r)) {
                t.var(l, true);
              } else {
                i = e.subschema({ keyword: "oneOf", schemaProp: a, compositeRule: true }, l);
              }
              if (a > 0) {
                t.if((0, s._)`${l} && ${c}`)
                  .assign(c, false)
                  .assign(u, (0, s._)`[${u}, ${a}]`)
                  .else();
              }
              t.if(l, () => {
                t.assign(c, true);
                t.assign(u, a);
                if (i) e.mergeEvaluated(i, s.Name);
              });
            });
          }
        },
      };
      t["default"] = o;
    },
    12296: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(10412);
      const n = r(93487);
      const a = r(76776);
      const o = r(76776);
      const i = {
        keyword: "patternProperties",
        type: "object",
        schemaType: "object",
        code(e) {
          const { gen: t, schema: r, data: i, parentSchema: c, it: u } = e;
          const { opts: l } = u;
          const d = (0, s.allSchemaProperties)(r);
          const f = d.filter((e) => (0, a.alwaysValidSchema)(u, r[e]));
          if (d.length === 0 || (f.length === d.length && (!u.opts.unevaluated || u.props === true))) {
            return;
          }
          const h = l.strictSchema && !l.allowMatchingProperties && c.properties;
          const p = t.name("valid");
          if (u.props !== true && !(u.props instanceof n.Name)) {
            u.props = (0, o.evaluatedPropsToName)(t, u.props);
          }
          const { props: m } = u;
          y();
          function y() {
            for (const e of d) {
              if (h) v(e);
              if (u.allErrors) {
                g(e);
              } else {
                t.var(p, true);
                g(e);
                t.if(p);
              }
            }
          }
          function v(e) {
            for (const t in h) {
              if (new RegExp(e).test(t)) {
                (0, a.checkStrictMode)(u, `property ${t} matches pattern ${e} (use allowMatchingProperties)`);
              }
            }
          }
          function g(r) {
            t.forIn("key", i, (a) => {
              t.if((0, n._)`${(0, s.usePattern)(e, r)}.test(${a})`, () => {
                const s = f.includes(r);
                if (!s) {
                  e.subschema({ keyword: "patternProperties", schemaProp: r, dataProp: a, dataPropType: o.Type.Str }, p);
                }
                if (u.opts.unevaluated && m !== true) {
                  t.assign((0, n._)`${m}[${a}]`, true);
                } else if (!s && !u.allErrors) {
                  t.if((0, n.not)(p), () => t.break());
                }
              });
            });
          }
        },
      };
      t["default"] = i;
    },
    72924: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(64665);
      const n = {
        keyword: "prefixItems",
        type: "array",
        schemaType: ["array"],
        before: "uniqueItems",
        code: (e) => (0, s.validateTuple)(e, "items"),
      };
      t["default"] = n;
    },
    76239: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(74815);
      const n = r(10412);
      const a = r(76776);
      const o = r(69351);
      const i = {
        keyword: "properties",
        type: "object",
        schemaType: "object",
        code(e) {
          const { gen: t, schema: r, parentSchema: i, data: c, it: u } = e;
          if (u.opts.removeAdditional === "all" && i.additionalProperties === undefined) {
            o.default.code(new s.KeywordCxt(u, o.default, "additionalProperties"));
          }
          const l = (0, n.allSchemaProperties)(r);
          for (const s of l) {
            u.definedProperties.add(s);
          }
          if (u.opts.unevaluated && l.length && u.props !== true) {
            u.props = a.mergeEvaluated.props(t, (0, a.toHash)(l), u.props);
          }
          const d = l.filter((e) => !(0, a.alwaysValidSchema)(u, r[e]));
          if (d.length === 0) return;
          const f = t.name("valid");
          for (const s of d) {
            if (h(s)) {
              p(s);
            } else {
              t.if((0, n.propertyInData)(t, c, s, u.opts.ownProperties));
              p(s);
              if (!u.allErrors) t.else().var(f, true);
              t.endIf();
            }
            e.it.definedProperties.add(s);
            e.ok(f);
          }
          function h(e) {
            return u.opts.useDefaults && !u.compositeRule && r[e].default !== undefined;
          }
          function p(t) {
            e.subschema({ keyword: "properties", schemaProp: t, dataProp: t }, f);
          }
        },
      };
      t["default"] = i;
    },
    33708: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(93487);
      const n = r(76776);
      const a = { message: "property name must be valid", params: ({ params: e }) => (0, s._)`{propertyName: ${e.propertyName}}` };
      const o = {
        keyword: "propertyNames",
        type: "object",
        schemaType: ["object", "boolean"],
        error: a,
        code(e) {
          const { gen: t, schema: r, data: a, it: o } = e;
          if ((0, n.alwaysValidSchema)(o, r)) return;
          const i = t.name("valid");
          t.forIn("key", a, (r) => {
            e.setParams({ propertyName: r });
            e.subschema({ keyword: "propertyNames", data: r, dataTypes: ["string"], propertyName: r, compositeRule: true }, i);
            t.if((0, s.not)(i), () => {
              e.error(true);
              if (!o.allErrors) t.break();
            });
          });
          e.ok(i);
        },
      };
      t["default"] = o;
    },
    66552: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(76776);
      const n = {
        keyword: ["then", "else"],
        schemaType: ["object", "boolean"],
        code({ keyword: e, parentSchema: t, it: r }) {
          if (t.if === undefined) (0, s.checkStrictMode)(r, `"${e}" without "if" is ignored`);
        },
      };
      t["default"] = n;
    },
    10412: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.validateUnion =
        t.validateArray =
        t.usePattern =
        t.callValidateCode =
        t.schemaProperties =
        t.allSchemaProperties =
        t.noPropertyInData =
        t.propertyInData =
        t.isOwnProperty =
        t.hasPropFunc =
        t.reportMissingProp =
        t.checkMissingProp =
        t.checkReportMissingProp =
          void 0;
      const s = r(93487);
      const n = r(76776);
      const a = r(22141);
      const o = r(76776);
      function i(e, t) {
        const { gen: r, data: n, it: a } = e;
        r.if(h(r, n, t, a.opts.ownProperties), () => {
          e.setParams({ missingProperty: (0, s._)`${t}` }, true);
          e.error();
        });
      }
      t.checkReportMissingProp = i;
      function c({ gen: e, data: t, it: { opts: r } }, n, a) {
        return (0, s.or)(...n.map((n) => (0, s.and)(h(e, t, n, r.ownProperties), (0, s._)`${a} = ${n}`)));
      }
      t.checkMissingProp = c;
      function u(e, t) {
        e.setParams({ missingProperty: t }, true);
        e.error();
      }
      t.reportMissingProp = u;
      function l(e) {
        return e.scopeValue("func", { ref: Object.prototype.hasOwnProperty, code: (0, s._)`Object.prototype.hasOwnProperty` });
      }
      t.hasPropFunc = l;
      function d(e, t, r) {
        return (0, s._)`${l(e)}.call(${t}, ${r})`;
      }
      t.isOwnProperty = d;
      function f(e, t, r, n) {
        const a = (0, s._)`${t}${(0, s.getProperty)(r)} !== undefined`;
        return n ? (0, s._)`${a} && ${d(e, t, r)}` : a;
      }
      t.propertyInData = f;
      function h(e, t, r, n) {
        const a = (0, s._)`${t}${(0, s.getProperty)(r)} === undefined`;
        return n ? (0, s.or)(a, (0, s.not)(d(e, t, r))) : a;
      }
      t.noPropertyInData = h;
      function p(e) {
        return e ? Object.keys(e).filter((e) => e !== "__proto__") : [];
      }
      t.allSchemaProperties = p;
      function m(e, t) {
        return p(t).filter((r) => !(0, n.alwaysValidSchema)(e, t[r]));
      }
      t.schemaProperties = m;
      function y({ schemaCode: e, data: t, it: { gen: r, topSchemaRef: n, schemaPath: o, errorPath: i }, it: c }, u, l, d) {
        const f = d ? (0, s._)`${e}, ${t}, ${n}${o}` : t;
        const h = [
          [a.default.instancePath, (0, s.strConcat)(a.default.instancePath, i)],
          [a.default.parentData, c.parentData],
          [a.default.parentDataProperty, c.parentDataProperty],
          [a.default.rootData, a.default.rootData],
        ];
        if (c.opts.dynamicRef) h.push([a.default.dynamicAnchors, a.default.dynamicAnchors]);
        const p = (0, s._)`${f}, ${r.object(...h)}`;
        return l !== s.nil ? (0, s._)`${u}.call(${l}, ${p})` : (0, s._)`${u}(${p})`;
      }
      t.callValidateCode = y;
      const v = (0, s._)`new RegExp`;
      function g({ gen: e, it: { opts: t } }, r) {
        const n = t.unicodeRegExp ? "u" : "";
        const { regExp: a } = t.code;
        const i = a(r, n);
        return e.scopeValue("pattern", {
          key: i.toString(),
          ref: i,
          code: (0, s._)`${a.code === "new RegExp" ? v : (0, o.useFunc)(e, a)}(${r}, ${n})`,
        });
      }
      t.usePattern = g;
      function $(e) {
        const { gen: t, data: r, keyword: a, it: o } = e;
        const i = t.name("valid");
        if (o.allErrors) {
          const e = t.let("valid", true);
          c(() => t.assign(e, false));
          return e;
        }
        t.var(i, true);
        c(() => t.break());
        return i;
        function c(o) {
          const c = t.const("len", (0, s._)`${r}.length`);
          t.forRange("i", 0, c, (r) => {
            e.subschema({ keyword: a, dataProp: r, dataPropType: n.Type.Num }, i);
            t.if((0, s.not)(i), o);
          });
        }
      }
      t.validateArray = $;
      function _(e) {
        const { gen: t, schema: r, keyword: a, it: o } = e;
        if (!Array.isArray(r)) throw new Error("ajv implementation error");
        const i = r.some((e) => (0, n.alwaysValidSchema)(o, e));
        if (i && !o.opts.unevaluated) return;
        const c = t.let("valid", false);
        const u = t.name("_valid");
        t.block(() =>
          r.forEach((r, n) => {
            const o = e.subschema({ keyword: a, schemaProp: n, compositeRule: true }, u);
            t.assign(c, (0, s._)`${c} || ${u}`);
            const i = e.mergeValidEvaluated(o, u);
            if (!i) t.if((0, s.not)(c));
          })
        );
        e.result(
          c,
          () => e.reset(),
          () => e.error(true)
        );
      }
      t.validateUnion = _;
    },
    78386: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const r = {
        keyword: "id",
        code() {
          throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
        },
      };
      t["default"] = r;
    },
    95684: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(78386);
      const n = r(28280);
      const a = ["$schema", "$id", "$defs", "$vocabulary", { keyword: "$comment" }, "definitions", s.default, n.default];
      t["default"] = a;
    },
    28280: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.callRef = t.getValidate = void 0;
      const s = r(6646);
      const n = r(10412);
      const a = r(93487);
      const o = r(22141);
      const i = r(25173);
      const c = r(76776);
      const u = {
        keyword: "$ref",
        schemaType: "string",
        code(e) {
          const { gen: t, schema: r, it: n } = e;
          const { baseId: o, schemaEnv: c, validateName: u, opts: f, self: h } = n;
          const { root: p } = c;
          if ((r === "#" || r === "#/") && o === p.baseId) return y();
          const m = i.resolveRef.call(h, p, o, r);
          if (m === undefined) throw new s.default(n.opts.uriResolver, o, r);
          if (m instanceof i.SchemaEnv) return v(m);
          return g(m);
          function y() {
            if (c === p) return d(e, u, c, c.$async);
            const r = t.scopeValue("root", { ref: p });
            return d(e, (0, a._)`${r}.validate`, p, p.$async);
          }
          function v(t) {
            const r = l(e, t);
            d(e, r, t, t.$async);
          }
          function g(s) {
            const n = t.scopeValue("schema", f.code.source === true ? { ref: s, code: (0, a.stringify)(s) } : { ref: s });
            const o = t.name("valid");
            const i = e.subschema({ schema: s, dataTypes: [], schemaPath: a.nil, topSchemaRef: n, errSchemaPath: r }, o);
            e.mergeEvaluated(i);
            e.ok(o);
          }
        },
      };
      function l(e, t) {
        const { gen: r } = e;
        return t.validate ? r.scopeValue("validate", { ref: t.validate }) : (0, a._)`${r.scopeValue("wrapper", { ref: t })}.validate`;
      }
      t.getValidate = l;
      function d(e, t, r, s) {
        const { gen: i, it: u } = e;
        const { allErrors: l, schemaEnv: d, opts: f } = u;
        const h = f.passContext ? o.default.this : a.nil;
        if (s) p();
        else m();
        function p() {
          if (!d.$async) throw new Error("async schema referenced by sync schema");
          const r = i.let("valid");
          i.try(
            () => {
              i.code((0, a._)`await ${(0, n.callValidateCode)(e, t, h)}`);
              v(t);
              if (!l) i.assign(r, true);
            },
            (e) => {
              i.if((0, a._)`!(${e} instanceof ${u.ValidationError})`, () => i.throw(e));
              y(e);
              if (!l) i.assign(r, false);
            }
          );
          e.ok(r);
        }
        function m() {
          e.result(
            (0, n.callValidateCode)(e, t, h),
            () => v(t),
            () => y(t)
          );
        }
        function y(e) {
          const t = (0, a._)`${e}.errors`;
          i.assign(o.default.vErrors, (0, a._)`${o.default.vErrors} === null ? ${t} : ${o.default.vErrors}.concat(${t})`);
          i.assign(o.default.errors, (0, a._)`${o.default.vErrors}.length`);
        }
        function v(e) {
          var t;
          if (!u.opts.unevaluated) return;
          const s = (t = r === null || r === void 0 ? void 0 : r.validate) === null || t === void 0 ? void 0 : t.evaluated;
          if (u.props !== true) {
            if (s && !s.dynamicProps) {
              if (s.props !== undefined) {
                u.props = c.mergeEvaluated.props(i, s.props, u.props);
              }
            } else {
              const t = i.var("props", (0, a._)`${e}.evaluated.props`);
              u.props = c.mergeEvaluated.props(i, t, u.props, a.Name);
            }
          }
          if (u.items !== true) {
            if (s && !s.dynamicItems) {
              if (s.items !== undefined) {
                u.items = c.mergeEvaluated.items(i, s.items, u.items);
              }
            } else {
              const t = i.var("items", (0, a._)`${e}.evaluated.items`);
              u.items = c.mergeEvaluated.items(i, t, u.items, a.Name);
            }
          }
        }
      }
      t.callRef = d;
      t["default"] = u;
    },
    1240: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(93487);
      const n = r(89306);
      const a = r(25173);
      const o = r(76776);
      const i = {
        message: ({ params: { discrError: e, tagName: t } }) =>
          e === n.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
        params: ({ params: { discrError: e, tag: t, tagName: r } }) => (0, s._)`{error: ${e}, tag: ${r}, tagValue: ${t}}`,
      };
      const c = {
        keyword: "discriminator",
        type: "object",
        schemaType: "object",
        error: i,
        code(e) {
          const { gen: t, data: r, schema: i, parentSchema: c, it: u } = e;
          const { oneOf: l } = c;
          if (!u.opts.discriminator) {
            throw new Error("discriminator: requires discriminator option");
          }
          const d = i.propertyName;
          if (typeof d != "string") throw new Error("discriminator: requires propertyName");
          if (i.mapping) throw new Error("discriminator: mapping is not supported");
          if (!l) throw new Error("discriminator: requires oneOf keyword");
          const f = t.let("valid", false);
          const h = t.const("tag", (0, s._)`${r}${(0, s.getProperty)(d)}`);
          t.if(
            (0, s._)`typeof ${h} == "string"`,
            () => p(),
            () => e.error(false, { discrError: n.DiscrError.Tag, tag: h, tagName: d })
          );
          e.ok(f);
          function p() {
            const r = y();
            t.if(false);
            for (const e in r) {
              t.elseIf((0, s._)`${h} === ${e}`);
              t.assign(f, m(r[e]));
            }
            t.else();
            e.error(false, { discrError: n.DiscrError.Mapping, tag: h, tagName: d });
            t.endIf();
          }
          function m(r) {
            const n = t.name("valid");
            const a = e.subschema({ keyword: "oneOf", schemaProp: r }, n);
            e.mergeEvaluated(a, s.Name);
            return n;
          }
          function y() {
            var e;
            const t = {};
            const r = n(c);
            let s = true;
            for (let c = 0; c < l.length; c++) {
              let t = l[c];
              if ((t === null || t === void 0 ? void 0 : t.$ref) && !(0, o.schemaHasRulesButRef)(t, u.self.RULES)) {
                t = a.resolveRef.call(u.self, u.schemaEnv.root, u.baseId, t === null || t === void 0 ? void 0 : t.$ref);
                if (t instanceof a.SchemaEnv) t = t.schema;
              }
              const f = (e = t === null || t === void 0 ? void 0 : t.properties) === null || e === void 0 ? void 0 : e[d];
              if (typeof f != "object") {
                throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${d}"`);
              }
              s = s && (r || n(t));
              i(f, c);
            }
            if (!s) throw new Error(`discriminator: "${d}" must be required`);
            return t;
            function n({ required: e }) {
              return Array.isArray(e) && e.includes(d);
            }
            function i(e, t) {
              if (e.const) {
                f(e.const, t);
              } else if (e.enum) {
                for (const r of e.enum) {
                  f(r, t);
                }
              } else {
                throw new Error(`discriminator: "properties/${d}" must have "const" or "enum"`);
              }
            }
            function f(e, r) {
              if (typeof e != "string" || e in t) {
                throw new Error(`discriminator: "${d}" values must be unique strings`);
              }
              t[e] = r;
            }
          }
        },
      };
      t["default"] = c;
    },
    89306: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.DiscrError = void 0;
      var r;
      (function (e) {
        e["Tag"] = "tag";
        e["Mapping"] = "mapping";
      })((r = t.DiscrError || (t.DiscrError = {})));
    },
    93924: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(95684);
      const n = r(62649);
      const a = r(8200);
      const o = r(39502);
      const i = r(66167);
      const c = [s.default, n.default, (0, a.default)(), o.default, i.metadataVocabulary, i.contentVocabulary];
      t["default"] = c;
    },
    89651: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(93487);
      const n = { message: ({ schemaCode: e }) => (0, s.str)`must match format "${e}"`, params: ({ schemaCode: e }) => (0, s._)`{format: ${e}}` };
      const a = {
        keyword: "format",
        type: ["number", "string"],
        schemaType: "string",
        $data: true,
        error: n,
        code(e, t) {
          const { gen: r, data: n, $data: a, schema: o, schemaCode: i, it: c } = e;
          const { opts: u, errSchemaPath: l, schemaEnv: d, self: f } = c;
          if (!u.validateFormats) return;
          if (a) h();
          else p();
          function h() {
            const a = r.scopeValue("formats", { ref: f.formats, code: u.code.formats });
            const o = r.const("fDef", (0, s._)`${a}[${i}]`);
            const c = r.let("fType");
            const l = r.let("format");
            r.if(
              (0, s._)`typeof ${o} == "object" && !(${o} instanceof RegExp)`,
              () => r.assign(c, (0, s._)`${o}.type || "string"`).assign(l, (0, s._)`${o}.validate`),
              () => r.assign(c, (0, s._)`"string"`).assign(l, o)
            );
            e.fail$data((0, s.or)(h(), p()));
            function h() {
              if (u.strictSchema === false) return s.nil;
              return (0, s._)`${i} && !${l}`;
            }
            function p() {
              const e = d.$async ? (0, s._)`(${o}.async ? await ${l}(${n}) : ${l}(${n}))` : (0, s._)`${l}(${n})`;
              const r = (0, s._)`(typeof ${l} == "function" ? ${e} : ${l}.test(${n}))`;
              return (0, s._)`${l} && ${l} !== true && ${c} === ${t} && !${r}`;
            }
          }
          function p() {
            const a = f.formats[o];
            if (!a) {
              p();
              return;
            }
            if (a === true) return;
            const [i, c, h] = m(a);
            if (i === t) e.pass(y());
            function p() {
              if (u.strictSchema === false) {
                f.logger.warn(e());
                return;
              }
              throw new Error(e());
              function e() {
                return `unknown format "${o}" ignored in schema at path "${l}"`;
              }
            }
            function m(e) {
              const t = e instanceof RegExp ? (0, s.regexpCode)(e) : u.code.formats ? (0, s._)`${u.code.formats}${(0, s.getProperty)(o)}` : undefined;
              const n = r.scopeValue("formats", { key: o, ref: e, code: t });
              if (typeof e == "object" && !(e instanceof RegExp)) {
                return [e.type || "string", e.validate, (0, s._)`${n}.validate`];
              }
              return ["string", e, n];
            }
            function y() {
              if (typeof a == "object" && !(a instanceof RegExp) && a.async) {
                if (!d.$async) throw new Error("async format in sync schema");
                return (0, s._)`await ${h}(${n})`;
              }
              return typeof c == "function" ? (0, s._)`${h}(${n})` : (0, s._)`${h}.test(${n})`;
            }
          }
        },
      };
      t["default"] = a;
    },
    39502: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(89651);
      const n = [s.default];
      t["default"] = n;
    },
    66167: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.contentVocabulary = t.metadataVocabulary = void 0;
      t.metadataVocabulary = ["title", "description", "default", "deprecated", "readOnly", "writeOnly", "examples"];
      t.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"];
    },
    64693: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(93487);
      const n = r(76776);
      const a = r(43510);
      const o = { message: "must be equal to constant", params: ({ schemaCode: e }) => (0, s._)`{allowedValue: ${e}}` };
      const i = {
        keyword: "const",
        $data: true,
        error: o,
        code(e) {
          const { gen: t, data: r, $data: o, schemaCode: i, schema: c } = e;
          if (o || (c && typeof c == "object")) {
            e.fail$data((0, s._)`!${(0, n.useFunc)(t, a.default)}(${r}, ${i})`);
          } else {
            e.fail((0, s._)`${c} !== ${r}`);
          }
        },
      };
      t["default"] = i;
    },
    30966: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(93487);
      const n = r(76776);
      const a = r(43510);
      const o = { message: "must be equal to one of the allowed values", params: ({ schemaCode: e }) => (0, s._)`{allowedValues: ${e}}` };
      const i = {
        keyword: "enum",
        schemaType: "array",
        $data: true,
        error: o,
        code(e) {
          const { gen: t, data: r, $data: o, schema: i, schemaCode: c, it: u } = e;
          if (!o && i.length === 0) throw new Error("enum must have non-empty array");
          const l = i.length >= u.opts.loopEnum;
          let d;
          const f = () => (d !== null && d !== void 0 ? d : (d = (0, n.useFunc)(t, a.default)));
          let h;
          if (l || o) {
            h = t.let("valid");
            e.block$data(h, p);
          } else {
            if (!Array.isArray(i)) throw new Error("ajv implementation error");
            const e = t.const("vSchema", c);
            h = (0, s.or)(...i.map((t, r) => m(e, r)));
          }
          e.pass(h);
          function p() {
            t.assign(h, false);
            t.forOf("v", c, (e) => t.if((0, s._)`${f()}(${r}, ${e})`, () => t.assign(h, true).break()));
          }
          function m(e, t) {
            const n = i[t];
            return typeof n === "object" && n !== null ? (0, s._)`${f()}(${r}, ${e}[${t}])` : (0, s._)`${r} === ${n}`;
          }
        },
      };
      t["default"] = i;
    },
    62649: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(83983);
      const n = r(90430);
      const a = r(93229);
      const o = r(74336);
      const i = r(90498);
      const c = r(33301);
      const u = r(31687);
      const l = r(82958);
      const d = r(64693);
      const f = r(30966);
      const h = [
        s.default,
        n.default,
        a.default,
        o.default,
        i.default,
        c.default,
        u.default,
        l.default,
        { keyword: "type", schemaType: ["string", "array"] },
        { keyword: "nullable", schemaType: "boolean" },
        d.default,
        f.default,
      ];
      t["default"] = h;
    },
    31687: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(93487);
      const n = {
        message({ keyword: e, schemaCode: t }) {
          const r = e === "maxItems" ? "more" : "fewer";
          return (0, s.str)`must NOT have ${r} than ${t} items`;
        },
        params: ({ schemaCode: e }) => (0, s._)`{limit: ${e}}`,
      };
      const a = {
        keyword: ["maxItems", "minItems"],
        type: "array",
        schemaType: "number",
        $data: true,
        error: n,
        code(e) {
          const { keyword: t, data: r, schemaCode: n } = e;
          const a = t === "maxItems" ? s.operators.GT : s.operators.LT;
          e.fail$data((0, s._)`${r}.length ${a} ${n}`);
        },
      };
      t["default"] = a;
    },
    93229: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(93487);
      const n = r(76776);
      const a = r(74499);
      const o = {
        message({ keyword: e, schemaCode: t }) {
          const r = e === "maxLength" ? "more" : "fewer";
          return (0, s.str)`must NOT have ${r} than ${t} characters`;
        },
        params: ({ schemaCode: e }) => (0, s._)`{limit: ${e}}`,
      };
      const i = {
        keyword: ["maxLength", "minLength"],
        type: "string",
        schemaType: "number",
        $data: true,
        error: o,
        code(e) {
          const { keyword: t, data: r, schemaCode: o, it: i } = e;
          const c = t === "maxLength" ? s.operators.GT : s.operators.LT;
          const u = i.opts.unicode === false ? (0, s._)`${r}.length` : (0, s._)`${(0, n.useFunc)(e.gen, a.default)}(${r})`;
          e.fail$data((0, s._)`${u} ${c} ${o}`);
        },
      };
      t["default"] = i;
    },
    83983: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(93487);
      const n = s.operators;
      const a = {
        maximum: { okStr: "<=", ok: n.LTE, fail: n.GT },
        minimum: { okStr: ">=", ok: n.GTE, fail: n.LT },
        exclusiveMaximum: { okStr: "<", ok: n.LT, fail: n.GTE },
        exclusiveMinimum: { okStr: ">", ok: n.GT, fail: n.LTE },
      };
      const o = {
        message: ({ keyword: e, schemaCode: t }) => (0, s.str)`must be ${a[e].okStr} ${t}`,
        params: ({ keyword: e, schemaCode: t }) => (0, s._)`{comparison: ${a[e].okStr}, limit: ${t}}`,
      };
      const i = {
        keyword: Object.keys(a),
        type: "number",
        schemaType: "number",
        $data: true,
        error: o,
        code(e) {
          const { keyword: t, data: r, schemaCode: n } = e;
          e.fail$data((0, s._)`${r} ${a[t].fail} ${n} || isNaN(${r})`);
        },
      };
      t["default"] = i;
    },
    90498: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(93487);
      const n = {
        message({ keyword: e, schemaCode: t }) {
          const r = e === "maxProperties" ? "more" : "fewer";
          return (0, s.str)`must NOT have ${r} than ${t} properties`;
        },
        params: ({ schemaCode: e }) => (0, s._)`{limit: ${e}}`,
      };
      const a = {
        keyword: ["maxProperties", "minProperties"],
        type: "object",
        schemaType: "number",
        $data: true,
        error: n,
        code(e) {
          const { keyword: t, data: r, schemaCode: n } = e;
          const a = t === "maxProperties" ? s.operators.GT : s.operators.LT;
          e.fail$data((0, s._)`Object.keys(${r}).length ${a} ${n}`);
        },
      };
      t["default"] = a;
    },
    90430: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(93487);
      const n = { message: ({ schemaCode: e }) => (0, s.str)`must be multiple of ${e}`, params: ({ schemaCode: e }) => (0, s._)`{multipleOf: ${e}}` };
      const a = {
        keyword: "multipleOf",
        type: "number",
        schemaType: "number",
        $data: true,
        error: n,
        code(e) {
          const { gen: t, data: r, schemaCode: n, it: a } = e;
          const o = a.opts.multipleOfPrecision;
          const i = t.let("res");
          const c = o ? (0, s._)`Math.abs(Math.round(${i}) - ${i}) > 1e-${o}` : (0, s._)`${i} !== parseInt(${i})`;
          e.fail$data((0, s._)`(${n} === 0 || (${i} = ${r}/${n}, ${c}))`);
        },
      };
      t["default"] = a;
    },
    74336: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(10412);
      const n = r(93487);
      const a = { message: ({ schemaCode: e }) => (0, n.str)`must match pattern "${e}"`, params: ({ schemaCode: e }) => (0, n._)`{pattern: ${e}}` };
      const o = {
        keyword: "pattern",
        type: "string",
        schemaType: "string",
        $data: true,
        error: a,
        code(e) {
          const { data: t, $data: r, schema: a, schemaCode: o, it: i } = e;
          const c = i.opts.unicodeRegExp ? "u" : "";
          const u = r ? (0, n._)`(new RegExp(${o}, ${c}))` : (0, s.usePattern)(e, a);
          e.fail$data((0, n._)`!${u}.test(${t})`);
        },
      };
      t["default"] = o;
    },
    33301: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(10412);
      const n = r(93487);
      const a = r(76776);
      const o = {
        message: ({ params: { missingProperty: e } }) => (0, n.str)`must have required property '${e}'`,
        params: ({ params: { missingProperty: e } }) => (0, n._)`{missingProperty: ${e}}`,
      };
      const i = {
        keyword: "required",
        type: "object",
        schemaType: "array",
        $data: true,
        error: o,
        code(e) {
          const { gen: t, schema: r, schemaCode: o, data: i, $data: c, it: u } = e;
          const { opts: l } = u;
          if (!c && r.length === 0) return;
          const d = r.length >= l.loopRequired;
          if (u.allErrors) f();
          else h();
          if (l.strictRequired) {
            const t = e.parentSchema.properties;
            const { definedProperties: s } = e.it;
            for (const e of r) {
              if ((t === null || t === void 0 ? void 0 : t[e]) === undefined && !s.has(e)) {
                const t = u.schemaEnv.baseId + u.errSchemaPath;
                const r = `required property "${e}" is not defined at "${t}" (strictRequired)`;
                (0, a.checkStrictMode)(u, r, u.opts.strictRequired);
              }
            }
          }
          function f() {
            if (d || c) {
              e.block$data(n.nil, p);
            } else {
              for (const t of r) {
                (0, s.checkReportMissingProp)(e, t);
              }
            }
          }
          function h() {
            const n = t.let("missing");
            if (d || c) {
              const r = t.let("valid", true);
              e.block$data(r, () => m(n, r));
              e.ok(r);
            } else {
              t.if((0, s.checkMissingProp)(e, r, n));
              (0, s.reportMissingProp)(e, n);
              t.else();
            }
          }
          function p() {
            t.forOf("prop", o, (r) => {
              e.setParams({ missingProperty: r });
              t.if((0, s.noPropertyInData)(t, i, r, l.ownProperties), () => e.error());
            });
          }
          function m(r, a) {
            e.setParams({ missingProperty: r });
            t.forOf(
              r,
              o,
              () => {
                t.assign(a, (0, s.propertyInData)(t, i, r, l.ownProperties));
                t.if((0, n.not)(a), () => {
                  e.error();
                  t.break();
                });
              },
              n.nil
            );
          }
        },
      };
      t["default"] = i;
    },
    82958: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const s = r(50453);
      const n = r(93487);
      const a = r(76776);
      const o = r(43510);
      const i = {
        message: ({ params: { i: e, j: t } }) => (0, n.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
        params: ({ params: { i: e, j: t } }) => (0, n._)`{i: ${e}, j: ${t}}`,
      };
      const c = {
        keyword: "uniqueItems",
        type: "array",
        schemaType: "boolean",
        $data: true,
        error: i,
        code(e) {
          const { gen: t, data: r, $data: i, schema: c, parentSchema: u, schemaCode: l, it: d } = e;
          if (!i && !c) return;
          const f = t.let("valid");
          const h = u.items ? (0, s.getSchemaTypes)(u.items) : [];
          e.block$data(f, p, (0, n._)`${l} === false`);
          e.ok(f);
          function p() {
            const s = t.let("i", (0, n._)`${r}.length`);
            const a = t.let("j");
            e.setParams({ i: s, j: a });
            t.assign(f, true);
            t.if((0, n._)`${s} > 1`, () => (m() ? y : v)(s, a));
          }
          function m() {
            return h.length > 0 && !h.some((e) => e === "object" || e === "array");
          }
          function y(a, o) {
            const i = t.name("item");
            const c = (0, s.checkDataTypes)(h, i, d.opts.strictNumbers, s.DataType.Wrong);
            const u = t.const("indices", (0, n._)`{}`);
            t.for((0, n._)`;${a}--;`, () => {
              t.let(i, (0, n._)`${r}[${a}]`);
              t.if(c, (0, n._)`continue`);
              if (h.length > 1) t.if((0, n._)`typeof ${i} == "string"`, (0, n._)`${i} += "_"`);
              t.if((0, n._)`typeof ${u}[${i}] == "number"`, () => {
                t.assign(o, (0, n._)`${u}[${i}]`);
                e.error();
                t.assign(f, false).break();
              }).code((0, n._)`${u}[${i}] = ${a}`);
            });
          }
          function v(s, i) {
            const c = (0, a.useFunc)(t, o.default);
            const u = t.name("outer");
            t.label(u).for((0, n._)`;${s}--;`, () =>
              t.for((0, n._)`${i} = ${s}; ${i}--;`, () =>
                t.if((0, n._)`${c}(${r}[${s}], ${r}[${i}])`, () => {
                  e.error();
                  t.assign(f, false).break(u);
                })
              )
            );
          }
        },
      };
      t["default"] = c;
    },
    64063: (e) => {
      "use strict";
      e.exports = function e(t, r) {
        if (t === r) return true;
        if (t && r && typeof t == "object" && typeof r == "object") {
          if (t.constructor !== r.constructor) return false;
          var s, n, a;
          if (Array.isArray(t)) {
            s = t.length;
            if (s != r.length) return false;
            for (n = s; n-- !== 0; ) if (!e(t[n], r[n])) return false;
            return true;
          }
          if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
          if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
          if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
          a = Object.keys(t);
          s = a.length;
          if (s !== Object.keys(r).length) return false;
          for (n = s; n-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(r, a[n])) return false;
          for (n = s; n-- !== 0; ) {
            var o = a[n];
            if (!e(t[o], r[o])) return false;
          }
          return true;
        }
        return t !== t && r !== r;
      };
    },
    49461: (e) => {
      "use strict";
      var t = (e.exports = function (e, t, s) {
        if (typeof t == "function") {
          s = t;
          t = {};
        }
        s = t.cb || s;
        var n = typeof s == "function" ? s : s.pre || function () {};
        var a = s.post || function () {};
        r(t, n, a, e, "", e);
      });
      t.keywords = {
        additionalItems: true,
        items: true,
        contains: true,
        additionalProperties: true,
        propertyNames: true,
        not: true,
        if: true,
        then: true,
        else: true,
      };
      t.arrayKeywords = { items: true, allOf: true, anyOf: true, oneOf: true };
      t.propsKeywords = { $defs: true, definitions: true, properties: true, patternProperties: true, dependencies: true };
      t.skipKeywords = {
        default: true,
        enum: true,
        const: true,
        required: true,
        maximum: true,
        minimum: true,
        exclusiveMaximum: true,
        exclusiveMinimum: true,
        multipleOf: true,
        maxLength: true,
        minLength: true,
        pattern: true,
        format: true,
        maxItems: true,
        minItems: true,
        uniqueItems: true,
        maxProperties: true,
        minProperties: true,
      };
      function r(e, n, a, o, i, c, u, l, d, f) {
        if (o && typeof o == "object" && !Array.isArray(o)) {
          n(o, i, c, u, l, d, f);
          for (var h in o) {
            var p = o[h];
            if (Array.isArray(p)) {
              if (h in t.arrayKeywords) {
                for (var m = 0; m < p.length; m++) r(e, n, a, p[m], i + "/" + h + "/" + m, c, i, h, o, m);
              }
            } else if (h in t.propsKeywords) {
              if (p && typeof p == "object") {
                for (var y in p) r(e, n, a, p[y], i + "/" + h + "/" + s(y), c, i, h, o, y);
              }
            } else if (h in t.keywords || (e.allKeys && !(h in t.skipKeywords))) {
              r(e, n, a, p, i + "/" + h, c, i, h, o);
            }
          }
          a(o, i, c, u, l, d, f);
        }
      }
      function s(e) {
        return e.replace(/~/g, "~0").replace(/\//g, "~1");
      }
    },
    60540: function (e, t) {
      (function (e, r) {
        true ? r(t) : 0;
      })(this, function (e) {
        "use strict";
        function t() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
            t[r] = arguments[r];
          }
          if (t.length > 1) {
            t[0] = t[0].slice(0, -1);
            var s = t.length - 1;
            for (var n = 1; n < s; ++n) {
              t[n] = t[n].slice(1, -1);
            }
            t[s] = t[s].slice(1);
            return t.join("");
          } else {
            return t[0];
          }
        }
        function r(e) {
          return "(?:" + e + ")";
        }
        function s(e) {
          return e === undefined
            ? "undefined"
            : e === null
              ? "null"
              : Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase();
        }
        function n(e) {
          return e.toUpperCase();
        }
        function a(e) {
          return e !== undefined && e !== null
            ? e instanceof Array
              ? e
              : typeof e.length !== "number" || e.split || e.setInterval || e.call
                ? [e]
                : Array.prototype.slice.call(e)
            : [];
        }
        function o(e, t) {
          var r = e;
          if (t) {
            for (var s in t) {
              r[s] = t[s];
            }
          }
          return r;
        }
        function i(e) {
          var s = "[A-Za-z]",
            n = "[\\x0D]",
            a = "[0-9]",
            o = "[\\x22]",
            i = t(a, "[A-Fa-f]"),
            c = "[\\x0A]",
            u = "[\\x20]",
            l = r(r("%[EFef]" + i + "%" + i + i + "%" + i + i) + "|" + r("%[89A-Fa-f]" + i + "%" + i + i) + "|" + r("%" + i + i)),
            d = "[\\:\\/\\?\\#\\[\\]\\@]",
            f = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
            h = t(d, f),
            p = e ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]",
            m = e ? "[\\uE000-\\uF8FF]" : "[]",
            y = t(s, a, "[\\-\\.\\_\\~]", p),
            v = r(s + t(s, a, "[\\+\\-\\.]") + "*"),
            g = r(r(l + "|" + t(y, f, "[\\:]")) + "*"),
            $ = r(r("25[0-5]") + "|" + r("2[0-4]" + a) + "|" + r("1" + a + a) + "|" + r("[1-9]" + a) + "|" + a),
            _ = r(r("25[0-5]") + "|" + r("2[0-4]" + a) + "|" + r("1" + a + a) + "|" + r("0?[1-9]" + a) + "|0?0?" + a),
            w = r(_ + "\\." + _ + "\\." + _ + "\\." + _),
            b = r(i + "{1,4}"),
            E = r(r(b + "\\:" + b) + "|" + w),
            P = r(r(b + "\\:") + "{6}" + E),
            S = r("\\:\\:" + r(b + "\\:") + "{5}" + E),
            N = r(r(b) + "?\\:\\:" + r(b + "\\:") + "{4}" + E),
            k = r(r(r(b + "\\:") + "{0,1}" + b) + "?\\:\\:" + r(b + "\\:") + "{3}" + E),
            C = r(r(r(b + "\\:") + "{0,2}" + b) + "?\\:\\:" + r(b + "\\:") + "{2}" + E),
            j = r(r(r(b + "\\:") + "{0,3}" + b) + "?\\:\\:" + b + "\\:" + E),
            O = r(r(r(b + "\\:") + "{0,4}" + b) + "?\\:\\:" + E),
            x = r(r(r(b + "\\:") + "{0,5}" + b) + "?\\:\\:" + b),
            T = r(r(r(b + "\\:") + "{0,6}" + b) + "?\\:\\:"),
            I = r([P, S, N, k, C, j, O, x, T].join("|")),
            R = r(r(y + "|" + l) + "+"),
            D = r(I + "\\%25" + R),
            A = r(I + r("\\%25|\\%(?!" + i + "{2})") + R),
            M = r("[vV]" + i + "+\\." + t(y, f, "[\\:]") + "+"),
            V = r("\\[" + r(A + "|" + I + "|" + M) + "\\]"),
            F = r(r(l + "|" + t(y, f)) + "*"),
            U = r(V + "|" + w + "(?!" + F + ")" + "|" + F),
            q = r(a + "*"),
            z = r(r(g + "@") + "?" + U + r("\\:" + q) + "?"),
            K = r(l + "|" + t(y, f, "[\\:\\@]")),
            L = r(K + "*"),
            H = r(K + "+"),
            G = r(r(l + "|" + t(y, f, "[\\@]")) + "+"),
            J = r(r("\\/" + L) + "*"),
            B = r("\\/" + r(H + J) + "?"),
            W = r(G + J),
            Q = r(H + J),
            Z = "(?!" + K + ")",
            Y = r(J + "|" + B + "|" + W + "|" + Q + "|" + Z),
            X = r(r(K + "|" + t("[\\/\\?]", m)) + "*"),
            ee = r(r(K + "|[\\/\\?]") + "*"),
            te = r(r("\\/\\/" + z + J) + "|" + B + "|" + Q + "|" + Z),
            re = r(v + "\\:" + te + r("\\?" + X) + "?" + r("\\#" + ee) + "?"),
            se = r(r("\\/\\/" + z + J) + "|" + B + "|" + W + "|" + Z),
            ne = r(se + r("\\?" + X) + "?" + r("\\#" + ee) + "?"),
            ae = r(re + "|" + ne),
            oe = r(v + "\\:" + te + r("\\?" + X) + "?"),
            ie =
              "^(" +
              v +
              ")\\:" +
              r(r("\\/\\/(" + r("(" + g + ")@") + "?(" + U + ")" + r("\\:(" + q + ")") + "?)") + "?(" + J + "|" + B + "|" + Q + "|" + Z + ")") +
              r("\\?(" + X + ")") +
              "?" +
              r("\\#(" + ee + ")") +
              "?$",
            ce =
              "^(){0}" +
              r(r("\\/\\/(" + r("(" + g + ")@") + "?(" + U + ")" + r("\\:(" + q + ")") + "?)") + "?(" + J + "|" + B + "|" + W + "|" + Z + ")") +
              r("\\?(" + X + ")") +
              "?" +
              r("\\#(" + ee + ")") +
              "?$",
            ue =
              "^(" +
              v +
              ")\\:" +
              r(r("\\/\\/(" + r("(" + g + ")@") + "?(" + U + ")" + r("\\:(" + q + ")") + "?)") + "?(" + J + "|" + B + "|" + Q + "|" + Z + ")") +
              r("\\?(" + X + ")") +
              "?$",
            le = "^" + r("\\#(" + ee + ")") + "?$",
            de = "^" + r("(" + g + ")@") + "?(" + U + ")" + r("\\:(" + q + ")") + "?$";
          return {
            NOT_SCHEME: new RegExp(t("[^]", s, a, "[\\+\\-\\.]"), "g"),
            NOT_USERINFO: new RegExp(t("[^\\%\\:]", y, f), "g"),
            NOT_HOST: new RegExp(t("[^\\%\\[\\]\\:]", y, f), "g"),
            NOT_PATH: new RegExp(t("[^\\%\\/\\:\\@]", y, f), "g"),
            NOT_PATH_NOSCHEME: new RegExp(t("[^\\%\\/\\@]", y, f), "g"),
            NOT_QUERY: new RegExp(t("[^\\%]", y, f, "[\\:\\@\\/\\?]", m), "g"),
            NOT_FRAGMENT: new RegExp(t("[^\\%]", y, f, "[\\:\\@\\/\\?]"), "g"),
            ESCAPE: new RegExp(t("[^]", y, f), "g"),
            UNRESERVED: new RegExp(y, "g"),
            OTHER_CHARS: new RegExp(t("[^\\%]", y, h), "g"),
            PCT_ENCODED: new RegExp(l, "g"),
            IPV4ADDRESS: new RegExp("^(" + w + ")$"),
            IPV6ADDRESS: new RegExp("^\\[?(" + I + ")" + r(r("\\%25|\\%(?!" + i + "{2})") + "(" + R + ")") + "?\\]?$"),
          };
        }
        var c = i(false);
        var u = i(true);
        var l = (function () {
          function e(e, t) {
            var r = [];
            var s = true;
            var n = false;
            var a = undefined;
            try {
              for (var o = e[Symbol.iterator](), i; !(s = (i = o.next()).done); s = true) {
                r.push(i.value);
                if (t && r.length === t) break;
              }
            } catch (c) {
              n = true;
              a = c;
            } finally {
              try {
                if (!s && o["return"]) o["return"]();
              } finally {
                if (n) throw a;
              }
            }
            return r;
          }
          return function (t, r) {
            if (Array.isArray(t)) {
              return t;
            } else if (Symbol.iterator in Object(t)) {
              return e(t, r);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        })();
        var d = function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
            return r;
          } else {
            return Array.from(e);
          }
        };
        var f = 2147483647;
        var h = 36;
        var p = 1;
        var m = 26;
        var y = 38;
        var v = 700;
        var g = 72;
        var $ = 128;
        var _ = "-";
        var w = /^xn--/;
        var b = /[^\0-\x7E]/;
        var E = /[\x2E\u3002\uFF0E\uFF61]/g;
        var P = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input",
        };
        var S = h - p;
        var N = Math.floor;
        var k = String.fromCharCode;
        function C(e) {
          throw new RangeError(P[e]);
        }
        function j(e, t) {
          var r = [];
          var s = e.length;
          while (s--) {
            r[s] = t(e[s]);
          }
          return r;
        }
        function O(e, t) {
          var r = e.split("@");
          var s = "";
          if (r.length > 1) {
            s = r[0] + "@";
            e = r[1];
          }
          e = e.replace(E, ".");
          var n = e.split(".");
          var a = j(n, t).join(".");
          return s + a;
        }
        function x(e) {
          var t = [];
          var r = 0;
          var s = e.length;
          while (r < s) {
            var n = e.charCodeAt(r++);
            if (n >= 55296 && n <= 56319 && r < s) {
              var a = e.charCodeAt(r++);
              if ((a & 64512) == 56320) {
                t.push(((n & 1023) << 10) + (a & 1023) + 65536);
              } else {
                t.push(n);
                r--;
              }
            } else {
              t.push(n);
            }
          }
          return t;
        }
        var T = function e(t) {
          return String.fromCodePoint.apply(String, d(t));
        };
        var I = function e(t) {
          if (t - 48 < 10) {
            return t - 22;
          }
          if (t - 65 < 26) {
            return t - 65;
          }
          if (t - 97 < 26) {
            return t - 97;
          }
          return h;
        };
        var R = function e(t, r) {
          return t + 22 + 75 * (t < 26) - ((r != 0) << 5);
        };
        var D = function e(t, r, s) {
          var n = 0;
          t = s ? N(t / v) : t >> 1;
          t += N(t / r);
          for (; t > (S * m) >> 1; n += h) {
            t = N(t / S);
          }
          return N(n + ((S + 1) * t) / (t + y));
        };
        var A = function e(t) {
          var r = [];
          var s = t.length;
          var n = 0;
          var a = $;
          var o = g;
          var i = t.lastIndexOf(_);
          if (i < 0) {
            i = 0;
          }
          for (var c = 0; c < i; ++c) {
            if (t.charCodeAt(c) >= 128) {
              C("not-basic");
            }
            r.push(t.charCodeAt(c));
          }
          for (var u = i > 0 ? i + 1 : 0; u < s; ) {
            var l = n;
            for (var d = 1, y = h; ; y += h) {
              if (u >= s) {
                C("invalid-input");
              }
              var v = I(t.charCodeAt(u++));
              if (v >= h || v > N((f - n) / d)) {
                C("overflow");
              }
              n += v * d;
              var w = y <= o ? p : y >= o + m ? m : y - o;
              if (v < w) {
                break;
              }
              var b = h - w;
              if (d > N(f / b)) {
                C("overflow");
              }
              d *= b;
            }
            var E = r.length + 1;
            o = D(n - l, E, l == 0);
            if (N(n / E) > f - a) {
              C("overflow");
            }
            a += N(n / E);
            n %= E;
            r.splice(n++, 0, a);
          }
          return String.fromCodePoint.apply(String, r);
        };
        var M = function e(t) {
          var r = [];
          t = x(t);
          var s = t.length;
          var n = $;
          var a = 0;
          var o = g;
          var i = true;
          var c = false;
          var u = undefined;
          try {
            for (var l = t[Symbol.iterator](), d; !(i = (d = l.next()).done); i = true) {
              var y = d.value;
              if (y < 128) {
                r.push(k(y));
              }
            }
          } catch (J) {
            c = true;
            u = J;
          } finally {
            try {
              if (!i && l.return) {
                l.return();
              }
            } finally {
              if (c) {
                throw u;
              }
            }
          }
          var v = r.length;
          var w = v;
          if (v) {
            r.push(_);
          }
          while (w < s) {
            var b = f;
            var E = true;
            var P = false;
            var S = undefined;
            try {
              for (var j = t[Symbol.iterator](), O; !(E = (O = j.next()).done); E = true) {
                var T = O.value;
                if (T >= n && T < b) {
                  b = T;
                }
              }
            } catch (J) {
              P = true;
              S = J;
            } finally {
              try {
                if (!E && j.return) {
                  j.return();
                }
              } finally {
                if (P) {
                  throw S;
                }
              }
            }
            var I = w + 1;
            if (b - n > N((f - a) / I)) {
              C("overflow");
            }
            a += (b - n) * I;
            n = b;
            var A = true;
            var M = false;
            var V = undefined;
            try {
              for (var F = t[Symbol.iterator](), U; !(A = (U = F.next()).done); A = true) {
                var q = U.value;
                if (q < n && ++a > f) {
                  C("overflow");
                }
                if (q == n) {
                  var z = a;
                  for (var K = h; ; K += h) {
                    var L = K <= o ? p : K >= o + m ? m : K - o;
                    if (z < L) {
                      break;
                    }
                    var H = z - L;
                    var G = h - L;
                    r.push(k(R(L + (H % G), 0)));
                    z = N(H / G);
                  }
                  r.push(k(R(z, 0)));
                  o = D(a, I, w == v);
                  a = 0;
                  ++w;
                }
              }
            } catch (J) {
              M = true;
              V = J;
            } finally {
              try {
                if (!A && F.return) {
                  F.return();
                }
              } finally {
                if (M) {
                  throw V;
                }
              }
            }
            ++a;
            ++n;
          }
          return r.join("");
        };
        var V = function e(t) {
          return O(t, function (e) {
            return w.test(e) ? A(e.slice(4).toLowerCase()) : e;
          });
        };
        var F = function e(t) {
          return O(t, function (e) {
            return b.test(e) ? "xn--" + M(e) : e;
          });
        };
        var U = { version: "2.1.0", ucs2: { decode: x, encode: T }, decode: A, encode: M, toASCII: F, toUnicode: V };
        var q = {};
        function z(e) {
          var t = e.charCodeAt(0);
          var r = void 0;
          if (t < 16) r = "%0" + t.toString(16).toUpperCase();
          else if (t < 128) r = "%" + t.toString(16).toUpperCase();
          else if (t < 2048) r = "%" + ((t >> 6) | 192).toString(16).toUpperCase() + "%" + ((t & 63) | 128).toString(16).toUpperCase();
          else
            r =
              "%" +
              ((t >> 12) | 224).toString(16).toUpperCase() +
              "%" +
              (((t >> 6) & 63) | 128).toString(16).toUpperCase() +
              "%" +
              ((t & 63) | 128).toString(16).toUpperCase();
          return r;
        }
        function K(e) {
          var t = "";
          var r = 0;
          var s = e.length;
          while (r < s) {
            var n = parseInt(e.substr(r + 1, 2), 16);
            if (n < 128) {
              t += String.fromCharCode(n);
              r += 3;
            } else if (n >= 194 && n < 224) {
              if (s - r >= 6) {
                var a = parseInt(e.substr(r + 4, 2), 16);
                t += String.fromCharCode(((n & 31) << 6) | (a & 63));
              } else {
                t += e.substr(r, 6);
              }
              r += 6;
            } else if (n >= 224) {
              if (s - r >= 9) {
                var o = parseInt(e.substr(r + 4, 2), 16);
                var i = parseInt(e.substr(r + 7, 2), 16);
                t += String.fromCharCode(((n & 15) << 12) | ((o & 63) << 6) | (i & 63));
              } else {
                t += e.substr(r, 9);
              }
              r += 9;
            } else {
              t += e.substr(r, 3);
              r += 3;
            }
          }
          return t;
        }
        function L(e, t) {
          function r(e) {
            var r = K(e);
            return !r.match(t.UNRESERVED) ? e : r;
          }
          if (e.scheme) e.scheme = String(e.scheme).replace(t.PCT_ENCODED, r).toLowerCase().replace(t.NOT_SCHEME, "");
          if (e.userinfo !== undefined)
            e.userinfo = String(e.userinfo).replace(t.PCT_ENCODED, r).replace(t.NOT_USERINFO, z).replace(t.PCT_ENCODED, n);
          if (e.host !== undefined) e.host = String(e.host).replace(t.PCT_ENCODED, r).toLowerCase().replace(t.NOT_HOST, z).replace(t.PCT_ENCODED, n);
          if (e.path !== undefined)
            e.path = String(e.path)
              .replace(t.PCT_ENCODED, r)
              .replace(e.scheme ? t.NOT_PATH : t.NOT_PATH_NOSCHEME, z)
              .replace(t.PCT_ENCODED, n);
          if (e.query !== undefined) e.query = String(e.query).replace(t.PCT_ENCODED, r).replace(t.NOT_QUERY, z).replace(t.PCT_ENCODED, n);
          if (e.fragment !== undefined)
            e.fragment = String(e.fragment).replace(t.PCT_ENCODED, r).replace(t.NOT_FRAGMENT, z).replace(t.PCT_ENCODED, n);
          return e;
        }
        function H(e) {
          return e.replace(/^0*(.*)/, "$1") || "0";
        }
        function G(e, t) {
          var r = e.match(t.IPV4ADDRESS) || [];
          var s = l(r, 2),
            n = s[1];
          if (n) {
            return n.split(".").map(H).join(".");
          } else {
            return e;
          }
        }
        function J(e, t) {
          var r = e.match(t.IPV6ADDRESS) || [];
          var s = l(r, 3),
            n = s[1],
            a = s[2];
          if (n) {
            var o = n.toLowerCase().split("::").reverse(),
              i = l(o, 2),
              c = i[0],
              u = i[1];
            var d = u ? u.split(":").map(H) : [];
            var f = c.split(":").map(H);
            var h = t.IPV4ADDRESS.test(f[f.length - 1]);
            var p = h ? 7 : 8;
            var m = f.length - p;
            var y = Array(p);
            for (var v = 0; v < p; ++v) {
              y[v] = d[v] || f[m + v] || "";
            }
            if (h) {
              y[p - 1] = G(y[p - 1], t);
            }
            var g = y.reduce(function (e, t, r) {
              if (!t || t === "0") {
                var s = e[e.length - 1];
                if (s && s.index + s.length === r) {
                  s.length++;
                } else {
                  e.push({ index: r, length: 1 });
                }
              }
              return e;
            }, []);
            var $ = g.sort(function (e, t) {
              return t.length - e.length;
            })[0];
            var _ = void 0;
            if ($ && $.length > 1) {
              var w = y.slice(0, $.index);
              var b = y.slice($.index + $.length);
              _ = w.join(":") + "::" + b.join(":");
            } else {
              _ = y.join(":");
            }
            if (a) {
              _ += "%" + a;
            }
            return _;
          } else {
            return e;
          }
        }
        var B = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
        var W = "".match(/(){0}/)[1] === undefined;
        function Q(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var r = {};
          var s = t.iri !== false ? u : c;
          if (t.reference === "suffix") e = (t.scheme ? t.scheme + ":" : "") + "//" + e;
          var n = e.match(B);
          if (n) {
            if (W) {
              r.scheme = n[1];
              r.userinfo = n[3];
              r.host = n[4];
              r.port = parseInt(n[5], 10);
              r.path = n[6] || "";
              r.query = n[7];
              r.fragment = n[8];
              if (isNaN(r.port)) {
                r.port = n[5];
              }
            } else {
              r.scheme = n[1] || undefined;
              r.userinfo = e.indexOf("@") !== -1 ? n[3] : undefined;
              r.host = e.indexOf("//") !== -1 ? n[4] : undefined;
              r.port = parseInt(n[5], 10);
              r.path = n[6] || "";
              r.query = e.indexOf("?") !== -1 ? n[7] : undefined;
              r.fragment = e.indexOf("#") !== -1 ? n[8] : undefined;
              if (isNaN(r.port)) {
                r.port = e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? n[4] : undefined;
              }
            }
            if (r.host) {
              r.host = J(G(r.host, s), s);
            }
            if (
              r.scheme === undefined &&
              r.userinfo === undefined &&
              r.host === undefined &&
              r.port === undefined &&
              !r.path &&
              r.query === undefined
            ) {
              r.reference = "same-document";
            } else if (r.scheme === undefined) {
              r.reference = "relative";
            } else if (r.fragment === undefined) {
              r.reference = "absolute";
            } else {
              r.reference = "uri";
            }
            if (t.reference && t.reference !== "suffix" && t.reference !== r.reference) {
              r.error = r.error || "URI is not a " + t.reference + " reference.";
            }
            var a = q[(t.scheme || r.scheme || "").toLowerCase()];
            if (!t.unicodeSupport && (!a || !a.unicodeSupport)) {
              if (r.host && (t.domainHost || (a && a.domainHost))) {
                try {
                  r.host = U.toASCII(r.host.replace(s.PCT_ENCODED, K).toLowerCase());
                } catch (o) {
                  r.error = r.error || "Host's domain name can not be converted to ASCII via punycode: " + o;
                }
              }
              L(r, c);
            } else {
              L(r, s);
            }
            if (a && a.parse) {
              a.parse(r, t);
            }
          } else {
            r.error = r.error || "URI can not be parsed.";
          }
          return r;
        }
        function Z(e, t) {
          var r = t.iri !== false ? u : c;
          var s = [];
          if (e.userinfo !== undefined) {
            s.push(e.userinfo);
            s.push("@");
          }
          if (e.host !== undefined) {
            s.push(
              J(G(String(e.host), r), r).replace(r.IPV6ADDRESS, function (e, t, r) {
                return "[" + t + (r ? "%25" + r : "") + "]";
              })
            );
          }
          if (typeof e.port === "number" || typeof e.port === "string") {
            s.push(":");
            s.push(String(e.port));
          }
          return s.length ? s.join("") : undefined;
        }
        var Y = /^\.\.?\//;
        var X = /^\/\.(\/|$)/;
        var ee = /^\/\.\.(\/|$)/;
        var te = /^\/?(?:.|\n)*?(?=\/|$)/;
        function re(e) {
          var t = [];
          while (e.length) {
            if (e.match(Y)) {
              e = e.replace(Y, "");
            } else if (e.match(X)) {
              e = e.replace(X, "/");
            } else if (e.match(ee)) {
              e = e.replace(ee, "/");
              t.pop();
            } else if (e === "." || e === "..") {
              e = "";
            } else {
              var r = e.match(te);
              if (r) {
                var s = r[0];
                e = e.slice(s.length);
                t.push(s);
              } else {
                throw new Error("Unexpected dot segment condition");
              }
            }
          }
          return t.join("");
        }
        function se(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var r = t.iri ? u : c;
          var s = [];
          var n = q[(t.scheme || e.scheme || "").toLowerCase()];
          if (n && n.serialize) n.serialize(e, t);
          if (e.host) {
            if (r.IPV6ADDRESS.test(e.host)) {
            } else if (t.domainHost || (n && n.domainHost)) {
              try {
                e.host = !t.iri ? U.toASCII(e.host.replace(r.PCT_ENCODED, K).toLowerCase()) : U.toUnicode(e.host);
              } catch (i) {
                e.error = e.error || "Host's domain name can not be converted to " + (!t.iri ? "ASCII" : "Unicode") + " via punycode: " + i;
              }
            }
          }
          L(e, r);
          if (t.reference !== "suffix" && e.scheme) {
            s.push(e.scheme);
            s.push(":");
          }
          var a = Z(e, t);
          if (a !== undefined) {
            if (t.reference !== "suffix") {
              s.push("//");
            }
            s.push(a);
            if (e.path && e.path.charAt(0) !== "/") {
              s.push("/");
            }
          }
          if (e.path !== undefined) {
            var o = e.path;
            if (!t.absolutePath && (!n || !n.absolutePath)) {
              o = re(o);
            }
            if (a === undefined) {
              o = o.replace(/^\/\//, "/%2F");
            }
            s.push(o);
          }
          if (e.query !== undefined) {
            s.push("?");
            s.push(e.query);
          }
          if (e.fragment !== undefined) {
            s.push("#");
            s.push(e.fragment);
          }
          return s.join("");
        }
        function ne(e, t) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var s = arguments[3];
          var n = {};
          if (!s) {
            e = Q(se(e, r), r);
            t = Q(se(t, r), r);
          }
          r = r || {};
          if (!r.tolerant && t.scheme) {
            n.scheme = t.scheme;
            n.userinfo = t.userinfo;
            n.host = t.host;
            n.port = t.port;
            n.path = re(t.path || "");
            n.query = t.query;
          } else {
            if (t.userinfo !== undefined || t.host !== undefined || t.port !== undefined) {
              n.userinfo = t.userinfo;
              n.host = t.host;
              n.port = t.port;
              n.path = re(t.path || "");
              n.query = t.query;
            } else {
              if (!t.path) {
                n.path = e.path;
                if (t.query !== undefined) {
                  n.query = t.query;
                } else {
                  n.query = e.query;
                }
              } else {
                if (t.path.charAt(0) === "/") {
                  n.path = re(t.path);
                } else {
                  if ((e.userinfo !== undefined || e.host !== undefined || e.port !== undefined) && !e.path) {
                    n.path = "/" + t.path;
                  } else if (!e.path) {
                    n.path = t.path;
                  } else {
                    n.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path;
                  }
                  n.path = re(n.path);
                }
                n.query = t.query;
              }
              n.userinfo = e.userinfo;
              n.host = e.host;
              n.port = e.port;
            }
            n.scheme = e.scheme;
          }
          n.fragment = t.fragment;
          return n;
        }
        function ae(e, t, r) {
          var s = o({ scheme: "null" }, r);
          return se(ne(Q(e, s), Q(t, s), s, true), s);
        }
        function oe(e, t) {
          if (typeof e === "string") {
            e = se(Q(e, t), t);
          } else if (s(e) === "object") {
            e = Q(se(e, t), t);
          }
          return e;
        }
        function ie(e, t, r) {
          if (typeof e === "string") {
            e = se(Q(e, r), r);
          } else if (s(e) === "object") {
            e = se(e, r);
          }
          if (typeof t === "string") {
            t = se(Q(t, r), r);
          } else if (s(t) === "object") {
            t = se(t, r);
          }
          return e === t;
        }
        function ce(e, t) {
          return e && e.toString().replace(!t || !t.iri ? c.ESCAPE : u.ESCAPE, z);
        }
        function ue(e, t) {
          return e && e.toString().replace(!t || !t.iri ? c.PCT_ENCODED : u.PCT_ENCODED, K);
        }
        var le = {
          scheme: "http",
          domainHost: true,
          parse: function e(t, r) {
            if (!t.host) {
              t.error = t.error || "HTTP URIs must have a host.";
            }
            return t;
          },
          serialize: function e(t, r) {
            var s = String(t.scheme).toLowerCase() === "https";
            if (t.port === (s ? 443 : 80) || t.port === "") {
              t.port = undefined;
            }
            if (!t.path) {
              t.path = "/";
            }
            return t;
          },
        };
        var de = { scheme: "https", domainHost: le.domainHost, parse: le.parse, serialize: le.serialize };
        function fe(e) {
          return typeof e.secure === "boolean" ? e.secure : String(e.scheme).toLowerCase() === "wss";
        }
        var he = {
          scheme: "ws",
          domainHost: true,
          parse: function e(t, r) {
            var s = t;
            s.secure = fe(s);
            s.resourceName = (s.path || "/") + (s.query ? "?" + s.query : "");
            s.path = undefined;
            s.query = undefined;
            return s;
          },
          serialize: function e(t, r) {
            if (t.port === (fe(t) ? 443 : 80) || t.port === "") {
              t.port = undefined;
            }
            if (typeof t.secure === "boolean") {
              t.scheme = t.secure ? "wss" : "ws";
              t.secure = undefined;
            }
            if (t.resourceName) {
              var s = t.resourceName.split("?"),
                n = l(s, 2),
                a = n[0],
                o = n[1];
              t.path = a && a !== "/" ? a : undefined;
              t.query = o;
              t.resourceName = undefined;
            }
            t.fragment = undefined;
            return t;
          },
        };
        var pe = { scheme: "wss", domainHost: he.domainHost, parse: he.parse, serialize: he.serialize };
        var me = {};
        var ye = true;
        var ve = "[A-Za-z0-9\\-\\.\\_\\~" + (ye ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]";
        var ge = "[0-9A-Fa-f]";
        var $e = r(r("%[EFef]" + ge + "%" + ge + ge + "%" + ge + ge) + "|" + r("%[89A-Fa-f]" + ge + "%" + ge + ge) + "|" + r("%" + ge + ge));
        var _e = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
        var we = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
        var be = t(we, '[\\"\\\\]');
        var Ee = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
        var Pe = new RegExp(ve, "g");
        var Se = new RegExp($e, "g");
        var Ne = new RegExp(t("[^]", _e, "[\\.]", '[\\"]', be), "g");
        var ke = new RegExp(t("[^]", ve, Ee), "g");
        var Ce = ke;
        function je(e) {
          var t = K(e);
          return !t.match(Pe) ? e : t;
        }
        var Oe = {
          scheme: "mailto",
          parse: function e(t, r) {
            var s = t;
            var n = (s.to = s.path ? s.path.split(",") : []);
            s.path = undefined;
            if (s.query) {
              var a = false;
              var o = {};
              var i = s.query.split("&");
              for (var c = 0, u = i.length; c < u; ++c) {
                var l = i[c].split("=");
                switch (l[0]) {
                  case "to":
                    var d = l[1].split(",");
                    for (var f = 0, h = d.length; f < h; ++f) {
                      n.push(d[f]);
                    }
                    break;
                  case "subject":
                    s.subject = ue(l[1], r);
                    break;
                  case "body":
                    s.body = ue(l[1], r);
                    break;
                  default:
                    a = true;
                    o[ue(l[0], r)] = ue(l[1], r);
                    break;
                }
              }
              if (a) s.headers = o;
            }
            s.query = undefined;
            for (var p = 0, m = n.length; p < m; ++p) {
              var y = n[p].split("@");
              y[0] = ue(y[0]);
              if (!r.unicodeSupport) {
                try {
                  y[1] = U.toASCII(ue(y[1], r).toLowerCase());
                } catch (v) {
                  s.error = s.error || "Email address's domain name can not be converted to ASCII via punycode: " + v;
                }
              } else {
                y[1] = ue(y[1], r).toLowerCase();
              }
              n[p] = y.join("@");
            }
            return s;
          },
          serialize: function e(t, r) {
            var s = t;
            var o = a(t.to);
            if (o) {
              for (var i = 0, c = o.length; i < c; ++i) {
                var u = String(o[i]);
                var l = u.lastIndexOf("@");
                var d = u.slice(0, l).replace(Se, je).replace(Se, n).replace(Ne, z);
                var f = u.slice(l + 1);
                try {
                  f = !r.iri ? U.toASCII(ue(f, r).toLowerCase()) : U.toUnicode(f);
                } catch (y) {
                  s.error =
                    s.error || "Email address's domain name can not be converted to " + (!r.iri ? "ASCII" : "Unicode") + " via punycode: " + y;
                }
                o[i] = d + "@" + f;
              }
              s.path = o.join(",");
            }
            var h = (t.headers = t.headers || {});
            if (t.subject) h["subject"] = t.subject;
            if (t.body) h["body"] = t.body;
            var p = [];
            for (var m in h) {
              if (h[m] !== me[m]) {
                p.push(m.replace(Se, je).replace(Se, n).replace(ke, z) + "=" + h[m].replace(Se, je).replace(Se, n).replace(Ce, z));
              }
            }
            if (p.length) {
              s.query = p.join("&");
            }
            return s;
          },
        };
        var xe = /^([^\:]+)\:(.*)/;
        var Te = {
          scheme: "urn",
          parse: function e(t, r) {
            var s = t.path && t.path.match(xe);
            var n = t;
            if (s) {
              var a = r.scheme || n.scheme || "urn";
              var o = s[1].toLowerCase();
              var i = s[2];
              var c = a + ":" + (r.nid || o);
              var u = q[c];
              n.nid = o;
              n.nss = i;
              n.path = undefined;
              if (u) {
                n = u.parse(n, r);
              }
            } else {
              n.error = n.error || "URN can not be parsed.";
            }
            return n;
          },
          serialize: function e(t, r) {
            var s = r.scheme || t.scheme || "urn";
            var n = t.nid;
            var a = s + ":" + (r.nid || n);
            var o = q[a];
            if (o) {
              t = o.serialize(t, r);
            }
            var i = t;
            var c = t.nss;
            i.path = (n || r.nid) + ":" + c;
            return i;
          },
        };
        var Ie = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
        var Re = {
          scheme: "urn:uuid",
          parse: function e(t, r) {
            var s = t;
            s.uuid = s.nss;
            s.nss = undefined;
            if (!r.tolerant && (!s.uuid || !s.uuid.match(Ie))) {
              s.error = s.error || "UUID is not valid.";
            }
            return s;
          },
          serialize: function e(t, r) {
            var s = t;
            s.nss = (t.uuid || "").toLowerCase();
            return s;
          },
        };
        q[le.scheme] = le;
        q[de.scheme] = de;
        q[he.scheme] = he;
        q[pe.scheme] = pe;
        q[Oe.scheme] = Oe;
        q[Te.scheme] = Te;
        q[Re.scheme] = Re;
        e.SCHEMES = q;
        e.pctEncChar = z;
        e.pctDecChars = K;
        e.parse = Q;
        e.removeDotSegments = re;
        e.serialize = se;
        e.resolveComponents = ne;
        e.resolve = ae;
        e.normalize = oe;
        e.equal = ie;
        e.escapeComponent = ce;
        e.unescapeComponent = ue;
        Object.defineProperty(e, "__esModule", { value: true });
      });
    },
    64775: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"$id":"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#","description":"Meta-schema for $data reference (JSON AnySchema extension proposal)","type":"object","required":["$data"],"properties":{"$data":{"type":"string","anyOf":[{"format":"relative-json-pointer"},{"format":"json-pointer"}]}},"additionalProperties":false}'
      );
    },
    98: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-07/schema#","$id":"http://json-schema.org/draft-07/schema#","title":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"nonNegativeInteger":{"type":"integer","minimum":0},"nonNegativeIntegerDefault0":{"allOf":[{"$ref":"#/definitions/nonNegativeInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}},"type":["object","boolean"],"properties":{"$id":{"type":"string","format":"uri-reference"},"$schema":{"type":"string","format":"uri"},"$ref":{"type":"string","format":"uri-reference"},"$comment":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"default":true,"readOnly":{"type":"boolean","default":false},"examples":{"type":"array","items":true},"multipleOf":{"type":"number","exclusiveMinimum":0},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"$ref":"#/definitions/nonNegativeInteger"},"minLength":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"$ref":"#"},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":true},"maxItems":{"$ref":"#/definitions/nonNegativeInteger"},"minItems":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"contains":{"$ref":"#"},"maxProperties":{"$ref":"#/definitions/nonNegativeInteger"},"minProperties":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"$ref":"#"},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"propertyNames":{"format":"regex"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"propertyNames":{"$ref":"#"},"const":true,"enum":{"type":"array","items":true,"minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"contentMediaType":{"type":"string"},"contentEncoding":{"type":"string"},"if":{"$ref":"#"},"then":{"$ref":"#"},"else":{"$ref":"#"},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"default":true}'
      );
    },
  },
]);
