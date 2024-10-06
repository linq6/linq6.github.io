"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [6888],
  {
    16888: (t, e, n) => {
      n.r(e);
      n.d(e, {
        DocInput: () => T,
        HighlightStyle: () => Ft,
        IndentContext: () => $,
        LRLanguage: () => v,
        Language: () => k,
        LanguageDescription: () => M,
        LanguageSupport: () => B,
        ParseContext: () => C,
        StreamLanguage: () => de,
        StringStream: () => fe,
        TreeIndentContext: () => K,
        bidiIsolates: () => Be,
        bracketMatching: () => ee,
        bracketMatchingHandle: () => ne,
        codeFolding: () => It,
        continuedIndent: () => et,
        defaultHighlightStyle: () => Gt,
        defineLanguageFacet: () => g,
        delimitedIndent: () => Y,
        ensureSyntaxTree: () => x,
        flatIndent: () => tt,
        foldAll: () => yt,
        foldCode: () => vt,
        foldEffect: () => ut,
        foldGutter: () => Mt,
        foldInside: () => ot,
        foldKeymap: () => At,
        foldNodeProp: () => st,
        foldService: () => it,
        foldState: () => pt,
        foldable: () => ft,
        foldedRanges: () => gt,
        forceParsing: () => S,
        getIndentUnit: () => V,
        getIndentation: () => W,
        highlightingFor: () => $t,
        indentNodeProp: () => z,
        indentOnInput: () => rt,
        indentRange: () => U,
        indentService: () => R,
        indentString: () => j,
        indentUnit: () => F,
        language: () => L,
        languageDataProp: () => p,
        matchBrackets: () => se,
        sublanguageProp: () => m,
        syntaxHighlighting: () => Ut,
        syntaxParserRunning: () => P,
        syntaxTree: () => b,
        syntaxTreeAvailable: () => y,
        toggleFold: () => Tt,
        unfoldAll: () => St,
        unfoldCode: () => bt,
        unfoldEffect: () => ct,
      });
      var r = n(73265);
      var i = n.n(r);
      var s = n(37496);
      var o = n.n(s);
      var a = n(66143);
      var l = n.n(a);
      var f = n(6016);
      var h = n.n(f);
      var u = n(67737);
      var c = n.n(u);
      var d;
      const p = new r.NodeProp();
      function g(t) {
        return s.Facet.define({ combine: t ? (e) => e.concat(t) : undefined });
      }
      const m = new r.NodeProp();
      class k {
        constructor(t, e, n = [], r = "") {
          this.data = t;
          this.name = r;
          if (!s.EditorState.prototype.hasOwnProperty("tree"))
            Object.defineProperty(s.EditorState.prototype, "tree", {
              get() {
                return b(this);
              },
            });
          this.parser = e;
          this.extension = [
            L.of(this),
            s.EditorState.languageData.of((t, e, n) => {
              let r = w(t, e, n),
                i = r.type.prop(p);
              if (!i) return [];
              let s = t.facet(i),
                o = r.type.prop(m);
              if (o) {
                let i = r.resolve(e - r.from, n);
                for (let e of o)
                  if (e.test(i, t)) {
                    let n = t.facet(e.facet);
                    return e.type == "replace" ? n : n.concat(s);
                  }
              }
              return s;
            }),
          ].concat(n);
        }
        isActiveAt(t, e, n = -1) {
          return w(t, e, n).type.prop(p) == this.data;
        }
        findRegions(t) {
          let e = t.facet(L);
          if ((e === null || e === void 0 ? void 0 : e.data) == this.data) return [{ from: 0, to: t.doc.length }];
          if (!e || !e.allowsNesting) return [];
          let n = [];
          let i = (t, e) => {
            if (t.prop(p) == this.data) {
              n.push({ from: e, to: e + t.length });
              return;
            }
            let s = t.prop(r.NodeProp.mounted);
            if (s) {
              if (s.tree.prop(p) == this.data) {
                if (s.overlay) for (let t of s.overlay) n.push({ from: t.from + e, to: t.to + e });
                else n.push({ from: e, to: e + t.length });
                return;
              } else if (s.overlay) {
                let t = n.length;
                i(s.tree, s.overlay[0].from + e);
                if (n.length > t) return;
              }
            }
            for (let n = 0; n < t.children.length; n++) {
              let s = t.children[n];
              if (s instanceof r.Tree) i(s, t.positions[n] + e);
            }
          };
          i(b(t), 0);
          return n;
        }
        get allowsNesting() {
          return true;
        }
      }
      k.setState = s.StateEffect.define();
      function w(t, e, n) {
        let i = t.facet(L),
          s = b(t).topNode;
        if (!i || i.allowsNesting) {
          for (let t = s; t; t = t.enter(e, n, r.IterMode.ExcludeBuffers)) if (t.type.isTop) s = t;
        }
        return s;
      }
      class v extends k {
        constructor(t, e, n) {
          super(t, e, [], n);
          this.parser = e;
        }
        static define(t) {
          let e = g(t.languageData);
          return new v(e, t.parser.configure({ props: [p.add((t) => (t.isTop ? e : undefined))] }), t.name);
        }
        configure(t, e) {
          return new v(this.data, this.parser.configure(t), e || this.name);
        }
        get allowsNesting() {
          return this.parser.hasWrappers();
        }
      }
      function b(t) {
        let e = t.field(k.state, false);
        return e ? e.tree : r.Tree.empty;
      }
      function x(t, e, n = 50) {
        var r;
        let i = (r = t.field(k.state, false)) === null || r === void 0 ? void 0 : r.context;
        if (!i) return null;
        let s = i.viewport;
        i.updateViewport({ from: 0, to: e });
        let o = i.isDone(e) || i.work(n, e) ? i.tree : null;
        i.updateViewport(s);
        return o;
      }
      function y(t, e = t.doc.length) {
        var n;
        return ((n = t.field(k.state, false)) === null || n === void 0 ? void 0 : n.context.isDone(e)) || false;
      }
      function S(t, e = t.viewport.to, n = 100) {
        let r = x(t.state, e, n);
        if (r != b(t.state)) t.dispatch({});
        return !!r;
      }
      function P(t) {
        var e;
        return ((e = t.plugin(E)) === null || e === void 0 ? void 0 : e.isWorking()) || false;
      }
      class T {
        constructor(t) {
          this.doc = t;
          this.cursorPos = 0;
          this.string = "";
          this.cursor = t.iter();
        }
        get length() {
          return this.doc.length;
        }
        syncTo(t) {
          this.string = this.cursor.next(t - this.cursorPos).value;
          this.cursorPos = t + this.string.length;
          return this.cursorPos - this.string.length;
        }
        chunk(t) {
          this.syncTo(t);
          return this.string;
        }
        get lineChunks() {
          return true;
        }
        read(t, e) {
          let n = this.cursorPos - this.string.length;
          if (t < n || e >= this.cursorPos) return this.doc.sliceString(t, e);
          else return this.string.slice(t - n, e - n);
        }
      }
      let A = null;
      class C {
        constructor(t, e, n = [], r, i, s, o, a) {
          this.parser = t;
          this.state = e;
          this.fragments = n;
          this.tree = r;
          this.treeLen = i;
          this.viewport = s;
          this.skipped = o;
          this.scheduleOn = a;
          this.parse = null;
          this.tempSkipped = [];
        }
        static create(t, e, n) {
          return new C(t, e, [], r.Tree.empty, 0, n, [], null);
        }
        startParse() {
          return this.parser.startParse(new T(this.state.doc), this.fragments);
        }
        work(t, e) {
          if (e != null && e >= this.state.doc.length) e = undefined;
          if (this.tree != r.Tree.empty && this.isDone(e !== null && e !== void 0 ? e : this.state.doc.length)) {
            this.takeTree();
            return true;
          }
          return this.withContext(() => {
            var n;
            if (typeof t == "number") {
              let e = Date.now() + t;
              t = () => Date.now() > e;
            }
            if (!this.parse) this.parse = this.startParse();
            if (e != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > e) && e < this.state.doc.length) this.parse.stopAt(e);
            for (;;) {
              let i = this.parse.advance();
              if (i) {
                this.fragments = this.withoutTempSkipped(r.TreeFragment.addTree(i, this.fragments, this.parse.stoppedAt != null));
                this.treeLen = (n = this.parse.stoppedAt) !== null && n !== void 0 ? n : this.state.doc.length;
                this.tree = i;
                this.parse = null;
                if (this.treeLen < (e !== null && e !== void 0 ? e : this.state.doc.length)) this.parse = this.startParse();
                else return true;
              }
              if (t()) return false;
            }
          });
        }
        takeTree() {
          let t, e;
          if (this.parse && (t = this.parse.parsedPos) >= this.treeLen) {
            if (this.parse.stoppedAt == null || this.parse.stoppedAt > t) this.parse.stopAt(t);
            this.withContext(() => {
              while (!(e = this.parse.advance())) {}
            });
            this.treeLen = t;
            this.tree = e;
            this.fragments = this.withoutTempSkipped(r.TreeFragment.addTree(this.tree, this.fragments, true));
            this.parse = null;
          }
        }
        withContext(t) {
          let e = A;
          A = this;
          try {
            return t();
          } finally {
            A = e;
          }
        }
        withoutTempSkipped(t) {
          for (let e; (e = this.tempSkipped.pop()); ) t = D(t, e.from, e.to);
          return t;
        }
        changes(t, e) {
          let { fragments: n, tree: i, treeLen: s, viewport: o, skipped: a } = this;
          this.takeTree();
          if (!t.empty) {
            let e = [];
            t.iterChangedRanges((t, n, r, i) => e.push({ fromA: t, toA: n, fromB: r, toB: i }));
            n = r.TreeFragment.applyChanges(n, e);
            i = r.Tree.empty;
            s = 0;
            o = { from: t.mapPos(o.from, -1), to: t.mapPos(o.to, 1) };
            if (this.skipped.length) {
              a = [];
              for (let e of this.skipped) {
                let n = t.mapPos(e.from, 1),
                  r = t.mapPos(e.to, -1);
                if (n < r) a.push({ from: n, to: r });
              }
            }
          }
          return new C(this.parser, e, n, i, s, o, a, this.scheduleOn);
        }
        updateViewport(t) {
          if (this.viewport.from == t.from && this.viewport.to == t.to) return false;
          this.viewport = t;
          let e = this.skipped.length;
          for (let n = 0; n < this.skipped.length; n++) {
            let { from: e, to: r } = this.skipped[n];
            if (e < t.to && r > t.from) {
              this.fragments = D(this.fragments, e, r);
              this.skipped.splice(n--, 1);
            }
          }
          if (this.skipped.length >= e) return false;
          this.reset();
          return true;
        }
        reset() {
          if (this.parse) {
            this.takeTree();
            this.parse = null;
          }
        }
        skipUntilInView(t, e) {
          this.skipped.push({ from: t, to: e });
        }
        static getSkippingParser(t) {
          return new (class extends r.Parser {
            createParse(e, n, i) {
              let s = i[0].from,
                o = i[i.length - 1].to;
              let a = {
                parsedPos: s,
                advance() {
                  let e = A;
                  if (e) {
                    for (let t of i) e.tempSkipped.push(t);
                    if (t) e.scheduleOn = e.scheduleOn ? Promise.all([e.scheduleOn, t]) : t;
                  }
                  this.parsedPos = o;
                  return new r.Tree(r.NodeType.none, [], [], o - s);
                },
                stoppedAt: null,
                stopAt() {},
              };
              return a;
            }
          })();
        }
        isDone(t) {
          t = Math.min(t, this.state.doc.length);
          let e = this.fragments;
          return this.treeLen >= t && e.length && e[0].from == 0 && e[0].to >= t;
        }
        static get() {
          return A;
        }
      }
      function D(t, e, n) {
        return r.TreeFragment.applyChanges(t, [{ fromA: e, toA: n, fromB: e, toB: n }]);
      }
      class I {
        constructor(t) {
          this.context = t;
          this.tree = t.tree;
        }
        apply(t) {
          if (!t.docChanged && this.tree == this.context.tree) return this;
          let e = this.context.changes(t.changes, t.state);
          let n = this.context.treeLen == t.startState.doc.length ? undefined : Math.max(t.changes.mapPos(this.context.treeLen), e.viewport.to);
          if (!e.work(20, n)) e.takeTree();
          return new I(e);
        }
        static init(t) {
          let e = Math.min(3e3, t.doc.length);
          let n = C.create(t.facet(L).parser, t, { from: 0, to: e });
          if (!n.work(20, e)) n.takeTree();
          return new I(n);
        }
      }
      k.state = s.StateField.define({
        create: I.init,
        update(t, e) {
          for (let n of e.effects) if (n.is(k.setState)) return n.value;
          if (e.startState.facet(L) != e.state.facet(L)) return I.init(e.state);
          return t.apply(e);
        },
      });
      let N = (t) => {
        let e = setTimeout(() => t(), 500);
        return () => clearTimeout(e);
      };
      if (typeof requestIdleCallback != "undefined")
        N = (t) => {
          let e = -1,
            n = setTimeout(() => {
              e = requestIdleCallback(t, { timeout: 500 - 100 });
            }, 100);
          return () => (e < 0 ? clearTimeout(n) : cancelIdleCallback(e));
        };
      const O =
        typeof navigator != "undefined" && ((d = navigator.scheduling) === null || d === void 0 ? void 0 : d.isInputPending)
          ? () => navigator.scheduling.isInputPending()
          : null;
      const E = a.ViewPlugin.fromClass(
        class t {
          constructor(t) {
            this.view = t;
            this.working = null;
            this.workScheduled = 0;
            this.chunkEnd = -1;
            this.chunkBudget = -1;
            this.work = this.work.bind(this);
            this.scheduleWork();
          }
          update(t) {
            let e = this.view.state.field(k.state).context;
            if (e.updateViewport(t.view.viewport) || this.view.viewport.to > e.treeLen) this.scheduleWork();
            if (t.docChanged || t.selectionSet) {
              if (this.view.hasFocus) this.chunkBudget += 50;
              this.scheduleWork();
            }
            this.checkAsyncSchedule(e);
          }
          scheduleWork() {
            if (this.working) return;
            let { state: t } = this.view,
              e = t.field(k.state);
            if (e.tree != e.context.tree || !e.context.isDone(t.doc.length)) this.working = N(this.work);
          }
          work(t) {
            this.working = null;
            let e = Date.now();
            if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus)) {
              this.chunkEnd = e + 3e4;
              this.chunkBudget = 3e3;
            }
            if (this.chunkBudget <= 0) return;
            let {
                state: n,
                viewport: { to: r },
              } = this.view,
              i = n.field(k.state);
            if (i.tree == i.context.tree && i.context.isDone(r + 1e5)) return;
            let s = Date.now() + Math.min(this.chunkBudget, 100, t && !O ? Math.max(25, t.timeRemaining() - 5) : 1e9);
            let o = i.context.treeLen < r && n.doc.length > r + 1e3;
            let a = i.context.work(() => (O && O()) || Date.now() > s, r + (o ? 0 : 1e5));
            this.chunkBudget -= Date.now() - e;
            if (a || this.chunkBudget <= 0) {
              i.context.takeTree();
              this.view.dispatch({ effects: k.setState.of(new I(i.context)) });
            }
            if (this.chunkBudget > 0 && !(a && !o)) this.scheduleWork();
            this.checkAsyncSchedule(i.context);
          }
          checkAsyncSchedule(t) {
            if (t.scheduleOn) {
              this.workScheduled++;
              t.scheduleOn
                .then(() => this.scheduleWork())
                .catch((t) => (0, a.logException)(this.view.state, t))
                .then(() => this.workScheduled--);
              t.scheduleOn = null;
            }
          }
          destroy() {
            if (this.working) this.working();
          }
          isWorking() {
            return !!(this.working || this.workScheduled > 0);
          }
        },
        {
          eventHandlers: {
            focus() {
              this.scheduleWork();
            },
          },
        }
      );
      const L = s.Facet.define({
        combine(t) {
          return t.length ? t[0] : null;
        },
        enables: (t) => [
          k.state,
          E,
          a.EditorView.contentAttributes.compute([t], (e) => {
            let n = e.facet(t);
            return n && n.name ? { "data-language": n.name } : {};
          }),
        ],
      });
      class B {
        constructor(t, e = []) {
          this.language = t;
          this.support = e;
          this.extension = [t, e];
        }
      }
      class M {
        constructor(t, e, n, r, i, s = undefined) {
          this.name = t;
          this.alias = e;
          this.extensions = n;
          this.filename = r;
          this.loadFunc = i;
          this.support = s;
          this.loading = null;
        }
        load() {
          return (
            this.loading ||
            (this.loading = this.loadFunc().then(
              (t) => (this.support = t),
              (t) => {
                this.loading = null;
                throw t;
              }
            ))
          );
        }
        static of(t) {
          let { load: e, support: n } = t;
          if (!e) {
            if (!n) throw new RangeError("Must pass either 'load' or 'support' to LanguageDescription.of");
            e = () => Promise.resolve(n);
          }
          return new M(
            t.name,
            (t.alias || []).concat(t.name).map((t) => t.toLowerCase()),
            t.extensions || [],
            t.filename,
            e,
            n
          );
        }
        static matchFilename(t, e) {
          for (let r of t) if (r.filename && r.filename.test(e)) return r;
          let n = /\.([^.]+)$/.exec(e);
          if (n) for (let r of t) if (r.extensions.indexOf(n[1]) > -1) return r;
          return null;
        }
        static matchLanguageName(t, e, n = true) {
          e = e.toLowerCase();
          for (let r of t) if (r.alias.some((t) => t == e)) return r;
          if (n)
            for (let r of t)
              for (let t of r.alias) {
                let n = e.indexOf(t);
                if (n > -1 && (t.length > 2 || (!/\w/.test(e[n - 1]) && !/\w/.test(e[n + t.length])))) return r;
              }
          return null;
        }
      }
      const R = s.Facet.define();
      const F = s.Facet.define({
        combine: (t) => {
          if (!t.length) return "  ";
          let e = t[0];
          if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0])) throw new Error("Invalid indent unit: " + JSON.stringify(t[0]));
          return e;
        },
      });
      function V(t) {
        let e = t.facet(F);
        return e.charCodeAt(0) == 9 ? t.tabSize * e.length : e.length;
      }
      function j(t, e) {
        let n = "",
          r = t.tabSize,
          i = t.facet(F)[0];
        if (i == "\t") {
          while (e >= r) {
            n += "\t";
            e -= r;
          }
          i = " ";
        }
        for (let s = 0; s < e; s++) n += i;
        return n;
      }
      function W(t, e) {
        if (t instanceof s.EditorState) t = new $(t);
        for (let r of t.state.facet(R)) {
          let n = r(t, e);
          if (n !== undefined) return n;
        }
        let n = b(t.state);
        return n.length >= e ? H(t, n, e) : null;
      }
      function U(t, e, n) {
        let r = Object.create(null);
        let i = new $(t, {
          overrideIndentation: (t) => {
            var e;
            return (e = r[t]) !== null && e !== void 0 ? e : -1;
          },
        });
        let s = [];
        for (let o = e; o <= n; ) {
          let e = t.doc.lineAt(o);
          o = e.to + 1;
          let n = W(i, e.from);
          if (n == null) continue;
          if (!/\S/.test(e.text)) n = 0;
          let a = /^\s*/.exec(e.text)[0];
          let l = j(t, n);
          if (a != l) {
            r[e.from] = n;
            s.push({ from: e.from, to: e.from + a.length, insert: l });
          }
        }
        return t.changes(s);
      }
      class $ {
        constructor(t, e = {}) {
          this.state = t;
          this.options = e;
          this.unit = V(t);
        }
        lineAt(t, e = 1) {
          let n = this.state.doc.lineAt(t);
          let { simulateBreak: r, simulateDoubleBreak: i } = this.options;
          if (r != null && r >= n.from && r <= n.to) {
            if (i && r == t) return { text: "", from: t };
            else if (e < 0 ? r < t : r <= t) return { text: n.text.slice(r - n.from), from: r };
            else return { text: n.text.slice(0, r - n.from), from: n.from };
          }
          return n;
        }
        textAfterPos(t, e = 1) {
          if (this.options.simulateDoubleBreak && t == this.options.simulateBreak) return "";
          let { text: n, from: r } = this.lineAt(t, e);
          return n.slice(t - r, Math.min(n.length, t + 100 - r));
        }
        column(t, e = 1) {
          let { text: n, from: r } = this.lineAt(t, e);
          let i = this.countColumn(n, t - r);
          let s = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
          if (s > -1) i += s - this.countColumn(n, n.search(/\S|$/));
          return i;
        }
        countColumn(t, e = t.length) {
          return (0, s.countColumn)(t, this.state.tabSize, e);
        }
        lineIndent(t, e = 1) {
          let { text: n, from: r } = this.lineAt(t, e);
          let i = this.options.overrideIndentation;
          if (i) {
            let t = i(r);
            if (t > -1) return t;
          }
          return this.countColumn(n, n.search(/\S|$/));
        }
        get simulatedBreak() {
          return this.options.simulateBreak || null;
        }
      }
      const z = new r.NodeProp();
      function H(t, e, n) {
        let r = e.resolveStack(n);
        let i = r.node.enterUnfinishedNodesBefore(n);
        if (i != r.node) {
          let t = [];
          for (let e = i; e != r.node; e = e.parent) t.push(e);
          for (let e = t.length - 1; e >= 0; e--) r = { node: t[e], next: r };
        }
        return G(r, t, n);
      }
      function G(t, e, n) {
        for (let r = t; r; r = r.next) {
          let t = q(r.node);
          if (t) return t(K.create(e, n, r));
        }
        return 0;
      }
      function _(t) {
        return t.pos == t.options.simulateBreak && t.options.simulateDoubleBreak;
      }
      function q(t) {
        let e = t.type.prop(z);
        if (e) return e;
        let n = t.firstChild,
          i;
        if (n && (i = n.type.prop(r.NodeProp.closedBy))) {
          let e = t.lastChild,
            n = e && i.indexOf(e.name) > -1;
          return (t) => Z(t, true, 1, undefined, n && !_(t) ? e.from : undefined);
        }
        return t.parent == null ? J : null;
      }
      function J() {
        return 0;
      }
      class K extends $ {
        constructor(t, e, n) {
          super(t.state, t.options);
          this.base = t;
          this.pos = e;
          this.context = n;
        }
        get node() {
          return this.context.node;
        }
        static create(t, e, n) {
          return new K(t, e, n);
        }
        get textAfter() {
          return this.textAfterPos(this.pos);
        }
        get baseIndent() {
          return this.baseIndentFor(this.node);
        }
        baseIndentFor(t) {
          let e = this.state.doc.lineAt(t.from);
          for (;;) {
            let n = t.resolve(e.from);
            while (n.parent && n.parent.from == n.from) n = n.parent;
            if (Q(n, t)) break;
            e = this.state.doc.lineAt(n.from);
          }
          return this.lineIndent(e.from);
        }
        continue() {
          return G(this.context.next, this.base, this.pos);
        }
      }
      function Q(t, e) {
        for (let n = e; n; n = n.parent) if (t == n) return true;
        return false;
      }
      function X(t) {
        let e = t.node;
        let n = e.childAfter(e.from),
          r = e.lastChild;
        if (!n) return null;
        let i = t.options.simulateBreak;
        let s = t.state.doc.lineAt(n.from);
        let o = i == null || i <= s.from ? s.to : Math.min(s.to, i);
        for (let a = n.to; ; ) {
          let t = e.childAfter(a);
          if (!t || t == r) return null;
          if (!t.type.isSkipped) return t.from < o ? n : null;
          a = t.to;
        }
      }
      function Y({ closing: t, align: e = true, units: n = 1 }) {
        return (r) => Z(r, e, n, t);
      }
      function Z(t, e, n, r, i) {
        let s = t.textAfter,
          o = s.match(/^\s*/)[0].length;
        let a = (r && s.slice(o, o + r.length) == r) || i == t.pos + o;
        let l = e ? X(t) : null;
        if (l) return a ? t.column(l.from) : t.column(l.to);
        return t.baseIndent + (a ? 0 : t.unit * n);
      }
      const tt = (t) => t.baseIndent;
      function et({ except: t, units: e = 1 } = {}) {
        return (n) => {
          let r = t && t.test(n.textAfter);
          return n.baseIndent + (r ? 0 : e * n.unit);
        };
      }
      const nt = 200;
      function rt() {
        return s.EditorState.transactionFilter.of((t) => {
          if (!t.docChanged || (!t.isUserEvent("input.type") && !t.isUserEvent("input.complete"))) return t;
          let e = t.startState.languageDataAt("indentOnInput", t.startState.selection.main.head);
          if (!e.length) return t;
          let n = t.newDoc,
            { head: r } = t.newSelection.main,
            i = n.lineAt(r);
          if (r > i.from + nt) return t;
          let s = n.sliceString(i.from, r);
          if (!e.some((t) => t.test(s))) return t;
          let { state: o } = t,
            a = -1,
            l = [];
          for (let { head: f } of o.selection.ranges) {
            let t = o.doc.lineAt(f);
            if (t.from == a) continue;
            a = t.from;
            let e = W(o, t.from);
            if (e == null) continue;
            let n = /^\s*/.exec(t.text)[0];
            let r = j(o, e);
            if (n != r) l.push({ from: t.from, to: t.from + n.length, insert: r });
          }
          return l.length ? [t, { changes: l, sequential: true }] : t;
        });
      }
      const it = s.Facet.define();
      const st = new r.NodeProp();
      function ot(t) {
        let e = t.firstChild,
          n = t.lastChild;
        return e && e.to < n.from ? { from: e.to, to: n.type.isError ? t.to : n.from } : null;
      }
      function at(t, e, n) {
        let r = b(t);
        if (r.length < n) return null;
        let i = r.resolveStack(n, 1);
        let s = null;
        for (let o = i; o; o = o.next) {
          let i = o.node;
          if (i.to <= n || i.from > n) continue;
          if (s && i.from < e) break;
          let a = i.type.prop(st);
          if (a && (i.to < r.length - 50 || r.length == t.doc.length || !lt(i))) {
            let r = a(i, t);
            if (r && r.from <= n && r.from >= e && r.to > n) s = r;
          }
        }
        return s;
      }
      function lt(t) {
        let e = t.lastChild;
        return e && e.to == t.to && e.type.isError;
      }
      function ft(t, e, n) {
        for (let r of t.facet(it)) {
          let i = r(t, e, n);
          if (i) return i;
        }
        return at(t, e, n);
      }
      function ht(t, e) {
        let n = e.mapPos(t.from, 1),
          r = e.mapPos(t.to, -1);
        return n >= r ? undefined : { from: n, to: r };
      }
      const ut = s.StateEffect.define({ map: ht });
      const ct = s.StateEffect.define({ map: ht });
      function dt(t) {
        let e = [];
        for (let { head: n } of t.state.selection.ranges) {
          if (e.some((t) => t.from <= n && t.to >= n)) continue;
          e.push(t.lineBlockAt(n));
        }
        return e;
      }
      const pt = s.StateField.define({
        create() {
          return a.Decoration.none;
        },
        update(t, e) {
          t = t.map(e.changes);
          for (let n of e.effects) {
            if (n.is(ut) && !kt(t, n.value.from, n.value.to)) {
              let { preparePlaceholder: r } = e.state.facet(Dt);
              let i = !r ? Ot : a.Decoration.replace({ widget: new Et(r(e.state, n.value)) });
              t = t.update({ add: [i.range(n.value.from, n.value.to)] });
            } else if (n.is(ct)) {
              t = t.update({ filter: (t, e) => n.value.from != t || n.value.to != e, filterFrom: n.value.from, filterTo: n.value.to });
            }
          }
          if (e.selection) {
            let n = false,
              { head: r } = e.selection.main;
            t.between(r, r, (t, e) => {
              if (t < r && e > r) n = true;
            });
            if (n) t = t.update({ filterFrom: r, filterTo: r, filter: (t, e) => e <= r || t >= r });
          }
          return t;
        },
        provide: (t) => a.EditorView.decorations.from(t),
        toJSON(t, e) {
          let n = [];
          t.between(0, e.doc.length, (t, e) => {
            n.push(t, e);
          });
          return n;
        },
        fromJSON(t) {
          if (!Array.isArray(t) || t.length % 2) throw new RangeError("Invalid JSON for fold state");
          let e = [];
          for (let n = 0; n < t.length; ) {
            let r = t[n++],
              i = t[n++];
            if (typeof r != "number" || typeof i != "number") throw new RangeError("Invalid JSON for fold state");
            e.push(Ot.range(r, i));
          }
          return a.Decoration.set(e, true);
        },
      });
      function gt(t) {
        return t.field(pt, false) || s.RangeSet.empty;
      }
      function mt(t, e, n) {
        var r;
        let i = null;
        (r = t.field(pt, false)) === null || r === void 0
          ? void 0
          : r.between(e, n, (t, e) => {
              if (!i || i.from > t) i = { from: t, to: e };
            });
        return i;
      }
      function kt(t, e, n) {
        let r = false;
        t.between(e, e, (t, i) => {
          if (t == e && i == n) r = true;
        });
        return r;
      }
      function wt(t, e) {
        return t.field(pt, false) ? e : e.concat(s.StateEffect.appendConfig.of(It()));
      }
      const vt = (t) => {
        for (let e of dt(t)) {
          let n = ft(t.state, e.from, e.to);
          if (n) {
            t.dispatch({ effects: wt(t.state, [ut.of(n), xt(t, n)]) });
            return true;
          }
        }
        return false;
      };
      const bt = (t) => {
        if (!t.state.field(pt, false)) return false;
        let e = [];
        for (let n of dt(t)) {
          let r = mt(t.state, n.from, n.to);
          if (r) e.push(ct.of(r), xt(t, r, false));
        }
        if (e.length) t.dispatch({ effects: e });
        return e.length > 0;
      };
      function xt(t, e, n = true) {
        let r = t.state.doc.lineAt(e.from).number,
          i = t.state.doc.lineAt(e.to).number;
        return a.EditorView.announce.of(`${t.state.phrase(n ? "Folded lines" : "Unfolded lines")} ${r} ${t.state.phrase("to")} ${i}.`);
      }
      const yt = (t) => {
        let { state: e } = t,
          n = [];
        for (let r = 0; r < e.doc.length; ) {
          let i = t.lineBlockAt(r),
            s = ft(e, i.from, i.to);
          if (s) n.push(ut.of(s));
          r = (s ? t.lineBlockAt(s.to) : i).to + 1;
        }
        if (n.length) t.dispatch({ effects: wt(t.state, n) });
        return !!n.length;
      };
      const St = (t) => {
        let e = t.state.field(pt, false);
        if (!e || !e.size) return false;
        let n = [];
        e.between(0, t.state.doc.length, (t, e) => {
          n.push(ct.of({ from: t, to: e }));
        });
        t.dispatch({ effects: n });
        return true;
      };
      function Pt(t, e) {
        for (let n = e; ; ) {
          let r = ft(t.state, n.from, n.to);
          if (r && r.to > e.from) return r;
          if (!n.from) return null;
          n = t.lineBlockAt(n.from - 1);
        }
      }
      const Tt = (t) => {
        let e = [];
        for (let n of dt(t)) {
          let r = mt(t.state, n.from, n.to);
          if (r) {
            e.push(ct.of(r), xt(t, r, false));
          } else {
            let r = Pt(t, n);
            if (r) e.push(ut.of(r), xt(t, r));
          }
        }
        if (e.length > 0) t.dispatch({ effects: wt(t.state, e) });
        return !!e.length;
      };
      const At = [
        { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: vt },
        { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: bt },
        { key: "Ctrl-Alt-[", run: yt },
        { key: "Ctrl-Alt-]", run: St },
      ];
      const Ct = { placeholderDOM: null, preparePlaceholder: null, placeholderText: "…" };
      const Dt = s.Facet.define({
        combine(t) {
          return (0, s.combineConfig)(t, Ct);
        },
      });
      function It(t) {
        let e = [pt, Rt];
        if (t) e.push(Dt.of(t));
        return e;
      }
      function Nt(t, e) {
        let { state: n } = t,
          r = n.facet(Dt);
        let i = (e) => {
          let n = t.lineBlockAt(t.posAtDOM(e.target));
          let r = mt(t.state, n.from, n.to);
          if (r) t.dispatch({ effects: ct.of(r) });
          e.preventDefault();
        };
        if (r.placeholderDOM) return r.placeholderDOM(t, i, e);
        let s = document.createElement("span");
        s.textContent = r.placeholderText;
        s.setAttribute("aria-label", n.phrase("folded code"));
        s.title = n.phrase("unfold");
        s.className = "cm-foldPlaceholder";
        s.onclick = i;
        return s;
      }
      const Ot = a.Decoration.replace({
        widget: new (class extends a.WidgetType {
          toDOM(t) {
            return Nt(t, null);
          }
        })(),
      });
      class Et extends a.WidgetType {
        constructor(t) {
          super();
          this.value = t;
        }
        eq(t) {
          return this.value == t.value;
        }
        toDOM(t) {
          return Nt(t, this.value);
        }
      }
      const Lt = { openText: "⌄", closedText: "›", markerDOM: null, domEventHandlers: {}, foldingChanged: () => false };
      class Bt extends a.GutterMarker {
        constructor(t, e) {
          super();
          this.config = t;
          this.open = e;
        }
        eq(t) {
          return this.config == t.config && this.open == t.open;
        }
        toDOM(t) {
          if (this.config.markerDOM) return this.config.markerDOM(this.open);
          let e = document.createElement("span");
          e.textContent = this.open ? this.config.openText : this.config.closedText;
          e.title = t.state.phrase(this.open ? "Fold line" : "Unfold line");
          return e;
        }
      }
      function Mt(t = {}) {
        let e = Object.assign(Object.assign({}, Lt), t);
        let n = new Bt(e, true),
          r = new Bt(e, false);
        let i = a.ViewPlugin.fromClass(
          class {
            constructor(t) {
              this.from = t.viewport.from;
              this.markers = this.buildMarkers(t);
            }
            update(t) {
              if (
                t.docChanged ||
                t.viewportChanged ||
                t.startState.facet(L) != t.state.facet(L) ||
                t.startState.field(pt, false) != t.state.field(pt, false) ||
                b(t.startState) != b(t.state) ||
                e.foldingChanged(t)
              )
                this.markers = this.buildMarkers(t.view);
            }
            buildMarkers(t) {
              let e = new s.RangeSetBuilder();
              for (let i of t.viewportLineBlocks) {
                let s = mt(t.state, i.from, i.to) ? r : ft(t.state, i.from, i.to) ? n : null;
                if (s) e.add(i.from, i.from, s);
              }
              return e.finish();
            }
          }
        );
        let { domEventHandlers: o } = e;
        return [
          i,
          (0, a.gutter)({
            class: "cm-foldGutter",
            markers(t) {
              var e;
              return ((e = t.plugin(i)) === null || e === void 0 ? void 0 : e.markers) || s.RangeSet.empty;
            },
            initialSpacer() {
              return new Bt(e, false);
            },
            domEventHandlers: Object.assign(Object.assign({}, o), {
              click: (t, e, n) => {
                if (o.click && o.click(t, e, n)) return true;
                let r = mt(t.state, e.from, e.to);
                if (r) {
                  t.dispatch({ effects: ct.of(r) });
                  return true;
                }
                let i = ft(t.state, e.from, e.to);
                if (i) {
                  t.dispatch({ effects: ut.of(i) });
                  return true;
                }
                return false;
              },
            }),
          }),
          It(),
        ];
      }
      const Rt = a.EditorView.baseTheme({
        ".cm-foldPlaceholder": {
          backgroundColor: "#eee",
          border: "1px solid #ddd",
          color: "#888",
          borderRadius: ".2em",
          margin: "0 1px",
          padding: "0 1px",
          cursor: "pointer",
        },
        ".cm-foldGutter span": { padding: "0 1px", cursor: "pointer" },
      });
      class Ft {
        constructor(t, e) {
          this.specs = t;
          let n;
          function r(t) {
            let e = u.StyleModule.newName();
            (n || (n = Object.create(null)))["." + e] = t;
            return e;
          }
          const i = typeof e.all == "string" ? e.all : e.all ? r(e.all) : undefined;
          const s = e.scope;
          this.scope = s instanceof k ? (t) => t.prop(p) == s.data : s ? (t) => t == s : undefined;
          this.style = (0, f.tagHighlighter)(
            t.map((t) => ({ tag: t.tag, class: t.class || r(Object.assign({}, t, { tag: null })) })),
            { all: i }
          ).style;
          this.module = n ? new u.StyleModule(n) : null;
          this.themeType = e.themeType;
        }
        static define(t, e) {
          return new Ft(t, e || {});
        }
      }
      const Vt = s.Facet.define();
      const jt = s.Facet.define({
        combine(t) {
          return t.length ? [t[0]] : null;
        },
      });
      function Wt(t) {
        let e = t.facet(Vt);
        return e.length ? e : t.facet(jt);
      }
      function Ut(t, e) {
        let n = [Ht],
          r;
        if (t instanceof Ft) {
          if (t.module) n.push(a.EditorView.styleModule.of(t.module));
          r = t.themeType;
        }
        if (e === null || e === void 0 ? void 0 : e.fallback) n.push(jt.of(t));
        else if (r) n.push(Vt.computeN([a.EditorView.darkTheme], (e) => (e.facet(a.EditorView.darkTheme) == (r == "dark") ? [t] : [])));
        else n.push(Vt.of(t));
        return n;
      }
      function $t(t, e, n) {
        let r = Wt(t);
        let i = null;
        if (r)
          for (let s of r) {
            if (!s.scope || (n && s.scope(n))) {
              let t = s.style(e);
              if (t) i = i ? i + " " + t : t;
            }
          }
        return i;
      }
      class zt {
        constructor(t) {
          this.markCache = Object.create(null);
          this.tree = b(t.state);
          this.decorations = this.buildDeco(t, Wt(t.state));
          this.decoratedTo = t.viewport.to;
        }
        update(t) {
          let e = b(t.state),
            n = Wt(t.state);
          let r = n != Wt(t.startState);
          let { viewport: i } = t.view,
            s = t.changes.mapPos(this.decoratedTo, 1);
          if (e.length < i.to && !r && e.type == this.tree.type && s >= i.to) {
            this.decorations = this.decorations.map(t.changes);
            this.decoratedTo = s;
          } else if (e != this.tree || t.viewportChanged || r) {
            this.tree = e;
            this.decorations = this.buildDeco(t.view, n);
            this.decoratedTo = i.to;
          }
        }
        buildDeco(t, e) {
          if (!e || !this.tree.length) return a.Decoration.none;
          let n = new s.RangeSetBuilder();
          for (let { from: r, to: i } of t.visibleRanges) {
            (0, f.highlightTree)(
              this.tree,
              e,
              (t, e, r) => {
                n.add(t, e, this.markCache[r] || (this.markCache[r] = a.Decoration.mark({ class: r })));
              },
              r,
              i
            );
          }
          return n.finish();
        }
      }
      const Ht = s.Prec.high(a.ViewPlugin.fromClass(zt, { decorations: (t) => t.decorations }));
      const Gt = Ft.define([
        { tag: f.tags.meta, color: "#404740" },
        { tag: f.tags.link, textDecoration: "underline" },
        { tag: f.tags.heading, textDecoration: "underline", fontWeight: "bold" },
        { tag: f.tags.emphasis, fontStyle: "italic" },
        { tag: f.tags.strong, fontWeight: "bold" },
        { tag: f.tags.strikethrough, textDecoration: "line-through" },
        { tag: f.tags.keyword, color: "#708" },
        { tag: [f.tags.atom, f.tags.bool, f.tags.url, f.tags.contentSeparator, f.tags.labelName], color: "#219" },
        { tag: [f.tags.literal, f.tags.inserted], color: "#164" },
        { tag: [f.tags.string, f.tags.deleted], color: "#a11" },
        { tag: [f.tags.regexp, f.tags.escape, f.tags.special(f.tags.string)], color: "#e40" },
        { tag: f.tags.definition(f.tags.variableName), color: "#00f" },
        { tag: f.tags.local(f.tags.variableName), color: "#30a" },
        { tag: [f.tags.typeName, f.tags.namespace], color: "#085" },
        { tag: f.tags.className, color: "#167" },
        { tag: [f.tags.special(f.tags.variableName), f.tags.macroName], color: "#256" },
        { tag: f.tags.definition(f.tags.propertyName), color: "#00c" },
        { tag: f.tags.comment, color: "#940" },
        { tag: f.tags.invalid, color: "#f00" },
      ]);
      const _t = a.EditorView.baseTheme({
        "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
        "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" },
      });
      const qt = 1e4,
        Jt = "()[]{}";
      const Kt = s.Facet.define({
        combine(t) {
          return (0, s.combineConfig)(t, { afterCursor: true, brackets: Jt, maxScanDistance: qt, renderMatch: Yt });
        },
      });
      const Qt = a.Decoration.mark({ class: "cm-matchingBracket" }),
        Xt = a.Decoration.mark({ class: "cm-nonmatchingBracket" });
      function Yt(t) {
        let e = [];
        let n = t.matched ? Qt : Xt;
        e.push(n.range(t.start.from, t.start.to));
        if (t.end) e.push(n.range(t.end.from, t.end.to));
        return e;
      }
      const Zt = s.StateField.define({
        create() {
          return a.Decoration.none;
        },
        update(t, e) {
          if (!e.docChanged && !e.selection) return t;
          let n = [];
          let r = e.state.facet(Kt);
          for (let i of e.state.selection.ranges) {
            if (!i.empty) continue;
            let t =
              se(e.state, i.head, -1, r) ||
              (i.head > 0 && se(e.state, i.head - 1, 1, r)) ||
              (r.afterCursor && (se(e.state, i.head, 1, r) || (i.head < e.state.doc.length && se(e.state, i.head + 1, -1, r))));
            if (t) n = n.concat(r.renderMatch(t, e.state));
          }
          return a.Decoration.set(n, true);
        },
        provide: (t) => a.EditorView.decorations.from(t),
      });
      const te = [Zt, _t];
      function ee(t = {}) {
        return [Kt.of(t), te];
      }
      const ne = new r.NodeProp();
      function re(t, e, n) {
        let i = t.prop(e < 0 ? r.NodeProp.openedBy : r.NodeProp.closedBy);
        if (i) return i;
        if (t.name.length == 1) {
          let r = n.indexOf(t.name);
          if (r > -1 && r % 2 == (e < 0 ? 1 : 0)) return [n[r + e]];
        }
        return null;
      }
      function ie(t) {
        let e = t.type.prop(ne);
        return e ? e(t.node) : t;
      }
      function se(t, e, n, r = {}) {
        let i = r.maxScanDistance || qt,
          s = r.brackets || Jt;
        let o = b(t),
          a = o.resolveInner(e, n);
        for (let l = a; l; l = l.parent) {
          let r = re(l.type, n, s);
          if (r && l.from < l.to) {
            let i = ie(l);
            if (i && (n > 0 ? e >= i.from && e < i.to : e > i.from && e <= i.to)) return oe(t, e, n, l, i, r, s);
          }
        }
        return ae(t, e, n, o, a.type, i, s);
      }
      function oe(t, e, n, r, i, s, o) {
        let a = r.parent,
          l = { from: i.from, to: i.to };
        let f = 0,
          h = a === null || a === void 0 ? void 0 : a.cursor();
        if (h && (n < 0 ? h.childBefore(r.from) : h.childAfter(r.to)))
          do {
            if (n < 0 ? h.to <= r.from : h.from >= r.to) {
              if (f == 0 && s.indexOf(h.type.name) > -1 && h.from < h.to) {
                let t = ie(h);
                return { start: l, end: t ? { from: t.from, to: t.to } : undefined, matched: true };
              } else if (re(h.type, n, o)) {
                f++;
              } else if (re(h.type, -n, o)) {
                if (f == 0) {
                  let t = ie(h);
                  return { start: l, end: t && t.from < t.to ? { from: t.from, to: t.to } : undefined, matched: false };
                }
                f--;
              }
            }
          } while (n < 0 ? h.prevSibling() : h.nextSibling());
        return { start: l, matched: false };
      }
      function ae(t, e, n, r, i, s, o) {
        let a = n < 0 ? t.sliceDoc(e - 1, e) : t.sliceDoc(e, e + 1);
        let l = o.indexOf(a);
        if (l < 0 || (l % 2 == 0) != n > 0) return null;
        let f = { from: n < 0 ? e - 1 : e, to: n > 0 ? e + 1 : e };
        let h = t.doc.iterRange(e, n > 0 ? t.doc.length : 0),
          u = 0;
        for (let c = 0; !h.next().done && c <= s; ) {
          let t = h.value;
          if (n < 0) c += t.length;
          let s = e + c * n;
          for (let e = n > 0 ? 0 : t.length - 1, a = n > 0 ? t.length : -1; e != a; e += n) {
            let a = o.indexOf(t[e]);
            if (a < 0 || r.resolveInner(s + e, 1).type != i) continue;
            if ((a % 2 == 0) == n > 0) {
              u++;
            } else if (u == 1) {
              return { start: f, end: { from: s + e, to: s + e + 1 }, matched: a >> 1 == l >> 1 };
            } else {
              u--;
            }
          }
          if (n > 0) c += t.length;
        }
        return h.done ? { start: f, matched: false } : null;
      }
      function le(t, e, n, r = 0, i = 0) {
        if (e == null) {
          e = t.search(/[^\s\u00a0]/);
          if (e == -1) e = t.length;
        }
        let s = i;
        for (let o = r; o < e; o++) {
          if (t.charCodeAt(o) == 9) s += n - (s % n);
          else s++;
        }
        return s;
      }
      class fe {
        constructor(t, e, n, r) {
          this.string = t;
          this.tabSize = e;
          this.indentUnit = n;
          this.overrideIndent = r;
          this.pos = 0;
          this.start = 0;
          this.lastColumnPos = 0;
          this.lastColumnValue = 0;
        }
        eol() {
          return this.pos >= this.string.length;
        }
        sol() {
          return this.pos == 0;
        }
        peek() {
          return this.string.charAt(this.pos) || undefined;
        }
        next() {
          if (this.pos < this.string.length) return this.string.charAt(this.pos++);
        }
        eat(t) {
          let e = this.string.charAt(this.pos);
          let n;
          if (typeof t == "string") n = e == t;
          else n = e && (t instanceof RegExp ? t.test(e) : t(e));
          if (n) {
            ++this.pos;
            return e;
          }
        }
        eatWhile(t) {
          let e = this.pos;
          while (this.eat(t)) {}
          return this.pos > e;
        }
        eatSpace() {
          let t = this.pos;
          while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
          return this.pos > t;
        }
        skipToEnd() {
          this.pos = this.string.length;
        }
        skipTo(t) {
          let e = this.string.indexOf(t, this.pos);
          if (e > -1) {
            this.pos = e;
            return true;
          }
        }
        backUp(t) {
          this.pos -= t;
        }
        column() {
          if (this.lastColumnPos < this.start) {
            this.lastColumnValue = le(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
            this.lastColumnPos = this.start;
          }
          return this.lastColumnValue;
        }
        indentation() {
          var t;
          return (t = this.overrideIndent) !== null && t !== void 0 ? t : le(this.string, null, this.tabSize);
        }
        match(t, e, n) {
          if (typeof t == "string") {
            let r = (t) => (n ? t.toLowerCase() : t);
            let i = this.string.substr(this.pos, t.length);
            if (r(i) == r(t)) {
              if (e !== false) this.pos += t.length;
              return true;
            } else return null;
          } else {
            let n = this.string.slice(this.pos).match(t);
            if (n && n.index > 0) return null;
            if (n && e !== false) this.pos += n[0].length;
            return n;
          }
        }
        current() {
          return this.string.slice(this.start, this.pos);
        }
      }
      function he(t) {
        return {
          name: t.name || "",
          token: t.token,
          blankLine: t.blankLine || (() => {}),
          startState: t.startState || (() => true),
          copyState: t.copyState || ue,
          indent: t.indent || (() => null),
          languageData: t.languageData || {},
          tokenTable: t.tokenTable || ve,
        };
      }
      function ue(t) {
        if (typeof t != "object") return t;
        let e = {};
        for (let n in t) {
          let r = t[n];
          e[n] = r instanceof Array ? r.slice() : r;
        }
        return e;
      }
      const ce = new WeakMap();
      class de extends k {
        constructor(t) {
          let e = g(t.languageData);
          let n = he(t),
            i;
          let s = new (class extends r.Parser {
            createParse(t, e, n) {
              return new ke(i, t, e, n);
            }
          })();
          super(e, s, [R.of((t, e) => this.getIndent(t, e))], t.name);
          this.topNode = Ie(e);
          i = this;
          this.streamParser = n;
          this.stateAfter = new r.NodeProp({ perNode: true });
          this.tokenTable = t.tokenTable ? new Te(n.tokenTable) : Ae;
        }
        static define(t) {
          return new de(t);
        }
        getIndent(t, e) {
          let n = b(t.state),
            r = n.resolve(e);
          while (r && r.type != this.topNode) r = r.parent;
          if (!r) return null;
          let i = undefined;
          let { overrideIndentation: s } = t.options;
          if (s) {
            i = ce.get(t.state);
            if (i != null && i < e - 1e4) i = undefined;
          }
          let o = pe(this, n, 0, r.from, i !== null && i !== void 0 ? i : e),
            a,
            l;
          if (o) {
            l = o.state;
            a = o.pos + 1;
          } else {
            l = this.streamParser.startState(t.unit);
            a = 0;
          }
          if (e - a > 1e4) return null;
          while (a < e) {
            let n = t.state.doc.lineAt(a),
              r = Math.min(e, n.to);
            if (n.length) {
              let e = s ? s(n.from) : -1;
              let i = new fe(n.text, t.state.tabSize, t.unit, e < 0 ? undefined : e);
              while (i.pos < r - n.from) we(this.streamParser.token, i, l);
            } else {
              this.streamParser.blankLine(l, t.unit);
            }
            if (r == e) break;
            a = n.to + 1;
          }
          let f = t.lineAt(e);
          if (s && i == null) ce.set(t.state, f.from);
          return this.streamParser.indent(l, /^\s*(.*)/.exec(f.text)[1], t);
        }
        get allowsNesting() {
          return false;
        }
      }
      function pe(t, e, n, i, s) {
        let o = n >= i && n + e.length <= s && e.prop(t.stateAfter);
        if (o) return { state: t.streamParser.copyState(o), pos: n + e.length };
        for (let a = e.children.length - 1; a >= 0; a--) {
          let o = e.children[a],
            l = n + e.positions[a];
          let f = o instanceof r.Tree && l < s && pe(t, o, l, i, s);
          if (f) return f;
        }
        return null;
      }
      function ge(t, e, n, i, s) {
        if (s && n <= 0 && i >= e.length) return e;
        if (!s && e.type == t.topNode) s = true;
        for (let o = e.children.length - 1; o >= 0; o--) {
          let a = e.positions[o],
            l = e.children[o],
            f;
          if (a < i && l instanceof r.Tree) {
            if (!(f = ge(t, l, n - a, i - a, s))) break;
            return !s ? f : new r.Tree(e.type, e.children.slice(0, o).concat(f), e.positions.slice(0, o + 1), a + f.length);
          }
        }
        return null;
      }
      function me(t, e, n, i) {
        for (let r of e) {
          let e = r.from + (r.openStart ? 25 : 0),
            i = r.to - (r.openEnd ? 25 : 0);
          let s = e <= n && i > n && pe(t, r.tree, 0 - r.offset, n, i),
            o;
          if (s && (o = ge(t, r.tree, n + r.offset, s.pos + r.offset, false))) return { state: s.state, tree: o };
        }
        return { state: t.streamParser.startState(i ? V(i) : 4), tree: r.Tree.empty };
      }
      class ke {
        constructor(t, e, n, r) {
          this.lang = t;
          this.input = e;
          this.fragments = n;
          this.ranges = r;
          this.stoppedAt = null;
          this.chunks = [];
          this.chunkPos = [];
          this.chunk = [];
          this.chunkReused = undefined;
          this.rangeIndex = 0;
          this.to = r[r.length - 1].to;
          let i = C.get(),
            s = r[0].from;
          let { state: o, tree: a } = me(t, n, s, i === null || i === void 0 ? void 0 : i.state);
          this.state = o;
          this.parsedPos = this.chunkStart = s + a.length;
          for (let l = 0; l < a.children.length; l++) {
            this.chunks.push(a.children[l]);
            this.chunkPos.push(a.positions[l]);
          }
          if (i && this.parsedPos < i.viewport.from - 1e5) {
            this.state = this.lang.streamParser.startState(V(i.state));
            i.skipUntilInView(this.parsedPos, i.viewport.from);
            this.parsedPos = i.viewport.from;
          }
          this.moveRangeIndex();
        }
        advance() {
          let t = C.get();
          let e = this.stoppedAt == null ? this.to : Math.min(this.to, this.stoppedAt);
          let n = Math.min(e, this.chunkStart + 2048);
          if (t) n = Math.min(n, t.viewport.to);
          while (this.parsedPos < n) this.parseLine(t);
          if (this.chunkStart < this.parsedPos) this.finishChunk();
          if (this.parsedPos >= e) return this.finish();
          if (t && this.parsedPos >= t.viewport.to) {
            t.skipUntilInView(this.parsedPos, e);
            return this.finish();
          }
          return null;
        }
        stopAt(t) {
          this.stoppedAt = t;
        }
        lineAfter(t) {
          let e = this.input.chunk(t);
          if (!this.input.lineChunks) {
            let t = e.indexOf("\n");
            if (t > -1) e = e.slice(0, t);
          } else if (e == "\n") {
            e = "";
          }
          return t + e.length <= this.to ? e : e.slice(0, this.to - t);
        }
        nextLine() {
          let t = this.parsedPos,
            e = this.lineAfter(t),
            n = t + e.length;
          for (let r = this.rangeIndex; ; ) {
            let t = this.ranges[r].to;
            if (t >= n) break;
            e = e.slice(0, t - (n - e.length));
            r++;
            if (r == this.ranges.length) break;
            let i = this.ranges[r].from;
            let s = this.lineAfter(i);
            e += s;
            n = i + s.length;
          }
          return { line: e, end: n };
        }
        skipGapsTo(t, e, n) {
          for (;;) {
            let r = this.ranges[this.rangeIndex].to,
              i = t + e;
            if (n > 0 ? r > i : r >= i) break;
            let s = this.ranges[++this.rangeIndex].from;
            e += s - r;
          }
          return e;
        }
        moveRangeIndex() {
          while (this.ranges[this.rangeIndex].to < this.parsedPos) this.rangeIndex++;
        }
        emitToken(t, e, n, r, i) {
          if (this.ranges.length > 1) {
            i = this.skipGapsTo(e, i, 1);
            e += i;
            let t = this.chunk.length;
            i = this.skipGapsTo(n, i, -1);
            n += i;
            r += this.chunk.length - t;
          }
          this.chunk.push(t, e, n, r);
          return i;
        }
        parseLine(t) {
          let { line: e, end: n } = this.nextLine(),
            r = 0,
            { streamParser: i } = this.lang;
          let s = new fe(e, t ? t.state.tabSize : 4, t ? V(t.state) : 2);
          if (s.eol()) {
            i.blankLine(this.state, s.indentUnit);
          } else {
            while (!s.eol()) {
              let t = we(i.token, s, this.state);
              if (t) r = this.emitToken(this.lang.tokenTable.resolve(t), this.parsedPos + s.start, this.parsedPos + s.pos, 4, r);
              if (s.start > 1e4) break;
            }
          }
          this.parsedPos = n;
          this.moveRangeIndex();
          if (this.parsedPos < this.to) this.parsedPos++;
        }
        finishChunk() {
          let t = r.Tree.build({
            buffer: this.chunk,
            start: this.chunkStart,
            length: this.parsedPos - this.chunkStart,
            nodeSet: xe,
            topID: 0,
            maxBufferLength: 2048,
            reused: this.chunkReused,
          });
          t = new r.Tree(t.type, t.children, t.positions, t.length, [[this.lang.stateAfter, this.lang.streamParser.copyState(this.state)]]);
          this.chunks.push(t);
          this.chunkPos.push(this.chunkStart - this.ranges[0].from);
          this.chunk = [];
          this.chunkReused = undefined;
          this.chunkStart = this.parsedPos;
        }
        finish() {
          return new r.Tree(this.lang.topNode, this.chunks, this.chunkPos, this.parsedPos - this.ranges[0].from).balance();
        }
      }
      function we(t, e, n) {
        e.start = e.pos;
        for (let r = 0; r < 10; r++) {
          let r = t(e, n);
          if (e.pos > e.start) return r;
        }
        throw new Error("Stream parser failed to advance stream.");
      }
      const ve = Object.create(null);
      const be = [r.NodeType.none];
      const xe = new r.NodeSet(be);
      const ye = [];
      const Se = Object.create(null);
      const Pe = Object.create(null);
      for (let [je, We] of [
        ["variable", "variableName"],
        ["variable-2", "variableName.special"],
        ["string-2", "string.special"],
        ["def", "variableName.definition"],
        ["tag", "tagName"],
        ["attribute", "attributeName"],
        ["type", "typeName"],
        ["builtin", "variableName.standard"],
        ["qualifier", "modifier"],
        ["error", "invalid"],
        ["header", "heading"],
        ["property", "propertyName"],
      ])
        Pe[je] = De(ve, We);
      class Te {
        constructor(t) {
          this.extra = t;
          this.table = Object.assign(Object.create(null), Pe);
        }
        resolve(t) {
          return !t ? 0 : this.table[t] || (this.table[t] = De(this.extra, t));
        }
      }
      const Ae = new Te(ve);
      function Ce(t, e) {
        if (ye.indexOf(t) > -1) return;
        ye.push(t);
        console.warn(e);
      }
      function De(t, e) {
        let n = [];
        for (let r of e.split(" ")) {
          let e = [];
          for (let n of r.split(".")) {
            let r = t[n] || f.tags[n];
            if (!r) {
              Ce(n, `Unknown highlighting tag ${n}`);
            } else if (typeof r == "function") {
              if (!e.length) Ce(n, `Modifier ${n} used at start of tag`);
              else e = e.map(r);
            } else {
              if (e.length) Ce(n, `Tag ${n} used as modifier`);
              else e = Array.isArray(r) ? r : [r];
            }
          }
          for (let t of e) n.push(t);
        }
        if (!n.length) return 0;
        let i = e.replace(/ /g, "_"),
          s = i + " " + n.map((t) => t.id);
        let o = Se[s];
        if (o) return o.id;
        let a = (Se[s] = r.NodeType.define({ id: be.length, name: i, props: [(0, f.styleTags)({ [i]: n })] }));
        be.push(a);
        return a.id;
      }
      function Ie(t) {
        let e = r.NodeType.define({ id: be.length, name: "Document", props: [p.add(() => t)], top: true });
        be.push(e);
        return e;
      }
      function Ne(t) {
        return t.length <= 4096 && /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/.test(t);
      }
      function Oe(t) {
        for (let e = t.iter(); !e.next().done; ) if (Ne(e.value)) return true;
        return false;
      }
      function Ee(t) {
        let e = false;
        t.iterChanges((t, n, r, i, s) => {
          if (!e && Oe(s)) e = true;
        });
        return e;
      }
      const Le = s.Facet.define({ combine: (t) => t.some((t) => t) });
      function Be(t = {}) {
        let e = [Me];
        if (t.alwaysIsolate) e.push(Le.of(true));
        return e;
      }
      const Me = a.ViewPlugin.fromClass(
        class {
          constructor(t) {
            this.always = t.state.facet(Le) || t.textDirection != a.Direction.LTR || t.state.facet(a.EditorView.perLineTextDirection);
            this.hasRTL = !this.always && Oe(t.state.doc);
            this.tree = b(t.state);
            this.decorations = this.always || this.hasRTL ? Re(t, this.tree, this.always) : a.Decoration.none;
          }
          update(t) {
            let e = t.state.facet(Le) || t.view.textDirection != a.Direction.LTR || t.state.facet(a.EditorView.perLineTextDirection);
            if (!e && !this.hasRTL && Ee(t.changes)) this.hasRTL = true;
            if (!e && !this.hasRTL) return;
            let n = b(t.state);
            if (e != this.always || n != this.tree || t.docChanged || t.viewportChanged) {
              this.tree = n;
              this.always = e;
              this.decorations = Re(t.view, n, e);
            }
          }
        },
        {
          provide: (t) => {
            function e(e) {
              var n, r;
              return (r = (n = e.plugin(t)) === null || n === void 0 ? void 0 : n.decorations) !== null && r !== void 0 ? r : a.Decoration.none;
            }
            return [a.EditorView.outerDecorations.of(e), s.Prec.lowest(a.EditorView.bidiIsolatedRanges.of(e))];
          },
        }
      );
      function Re(t, e, n) {
        let i = new s.RangeSetBuilder();
        let o = t.visibleRanges;
        if (!n) o = Fe(o, t.state.doc);
        for (let { from: s, to: a } of o) {
          e.iterate({
            enter: (t) => {
              let e = t.type.prop(r.NodeProp.isolate);
              if (e) i.add(t.from, t.to, Ve[e]);
            },
            from: s,
            to: a,
          });
        }
        return i.finish();
      }
      function Fe(t, e) {
        let n = e.iter(),
          r = 0,
          i = [],
          s = null;
        for (let { from: o, to: a } of t) {
          if (o != r) {
            if (r < o) n.next(o - r);
            r = o;
          }
          for (;;) {
            let t = r,
              e = r + n.value.length;
            if (!n.lineBreak && Ne(n.value)) {
              if (s && s.to > t - 10) s.to = Math.min(a, e);
              else i.push((s = { from: t, to: Math.min(a, e) }));
            }
            if (r >= a) break;
            r = e;
            n.next();
          }
        }
        return i;
      }
      const Ve = {
        rtl: a.Decoration.mark({ class: "cm-iso", inclusive: true, attributes: { dir: "rtl" }, bidiIsolate: a.Direction.RTL }),
        ltr: a.Decoration.mark({ class: "cm-iso", inclusive: true, attributes: { dir: "ltr" }, bidiIsolate: a.Direction.LTR }),
        auto: a.Decoration.mark({ class: "cm-iso", inclusive: true, attributes: { dir: "auto" }, bidiIsolate: null }),
      };
    },
  },
]);
