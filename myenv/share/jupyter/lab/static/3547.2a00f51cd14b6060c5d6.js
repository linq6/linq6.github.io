"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [3547],
  {
    43547: (e, t, n) => {
      n.r(t);
      n.d(t, {
        blockComment: () => y,
        blockUncomment: () => k,
        copyLineDown: () => _t,
        copyLineUp: () => Wt,
        cursorCharBackward: () => ue,
        cursorCharForward: () => ce,
        cursorCharLeft: () => ie,
        cursorCharRight: () => ae,
        cursorDocEnd: () => yt,
        cursorDocStart: () => gt,
        cursorGroupBackward: () => pe,
        cursorGroupForward: () => me,
        cursorGroupLeft: () => de,
        cursorGroupRight: () => he,
        cursorLineBoundaryBackward: () => Re,
        cursorLineBoundaryForward: () => Ie,
        cursorLineBoundaryLeft: () => Ve,
        cursorLineBoundaryRight: () => Ue,
        cursorLineDown: () => xe,
        cursorLineEnd: () => Ge,
        cursorLineStart: () => Ne,
        cursorLineUp: () => De,
        cursorMatchingBracket: () => Fe,
        cursorPageDown: () => Te,
        cursorPageUp: () => be,
        cursorSubwordBackward: () => Se,
        cursorSubwordForward: () => we,
        cursorSyntaxLeft: () => Ce,
        cursorSyntaxRight: () => Be,
        defaultKeymap: () => ln,
        deleteCharBackward: () => xt,
        deleteCharForward: () => Lt,
        deleteGroupBackward: () => bt,
        deleteGroupForward: () => Tt,
        deleteLine: () => jt,
        deleteLineBoundaryBackward: () => Rt,
        deleteLineBoundaryForward: () => Vt,
        deleteToLineEnd: () => Ot,
        deleteToLineStart: () => It,
        deleteTrailingWhitespace: () => Ut,
        emacsStyleKeymap: () => rn,
        history: () => T,
        historyField: () => O,
        historyKeymap: () => ee,
        indentLess: () => tn,
        indentMore: () => en,
        indentSelection: () => Zt,
        indentWithTab: () => sn,
        insertBlankLine: () => Qt,
        insertNewline: () => $t,
        insertNewlineAndIndent: () => Kt,
        insertTab: () => nn,
        invertedEffects: () => L,
        isolateHistory: () => x,
        lineComment: () => m,
        lineUncomment: () => p,
        moveLineDown: () => Ht,
        moveLineUp: () => Pt,
        redo: () => V,
        redoDepth: () => F,
        redoSelection: () => N,
        selectAll: () => St,
        selectCharBackward: () => $e,
        selectCharForward: () => je,
        selectCharLeft: () => We,
        selectCharRight: () => _e,
        selectDocEnd: () => wt,
        selectDocStart: () => kt,
        selectGroupBackward: () => Ye,
        selectGroupForward: () => Xe,
        selectGroupLeft: () => Ke,
        selectGroupRight: () => Qe,
        selectLine: () => vt,
        selectLineBoundaryBackward: () => ft,
        selectLineBoundaryForward: () => ut,
        selectLineBoundaryLeft: () => dt,
        selectLineBoundaryRight: () => ht,
        selectLineDown: () => st,
        selectLineEnd: () => pt,
        selectLineStart: () => mt,
        selectLineUp: () => lt,
        selectMatchingBracket: () => Pe,
        selectPageDown: () => ct,
        selectPageUp: () => at,
        selectParentSyntax: () => At,
        selectSubwordBackward: () => tt,
        selectSubwordForward: () => et,
        selectSyntaxLeft: () => nt,
        selectSyntaxRight: () => rt,
        simplifySelection: () => Ct,
        splitLine: () => Nt,
        standardKeymap: () => on,
        toggleBlockComment: () => g,
        toggleBlockCommentByLine: () => w,
        toggleComment: () => f,
        toggleLineComment: () => h,
        transposeChars: () => Gt,
        undo: () => R,
        undoDepth: () => J,
        undoSelection: () => U,
      });
      var r = n(37496);
      var o = n.n(r);
      var l = n(66143);
      var s = n.n(l);
      var i = n(24104);
      var a = n.n(i);
      var c = n(73265);
      var u = n.n(c);
      const f = (e) => {
        let { state: t } = e,
          n = t.doc.lineAt(t.selection.main.from),
          r = S(e.state, n.from);
        return r.line ? h(e) : r.block ? w(e) : false;
      };
      function d(e, t) {
        return ({ state: n, dispatch: r }) => {
          if (n.readOnly) return false;
          let o = e(t, n);
          if (!o) return false;
          r(n.update(o));
          return true;
        };
      }
      const h = d(E, 0);
      const m = d(E, 1);
      const p = d(E, 2);
      const g = d(B, 0);
      const y = d(B, 1);
      const k = d(B, 2);
      const w = d((e, t) => B(e, t, C(t)), 0);
      function S(e, t) {
        let n = e.languageDataAt("commentTokens", t);
        return n.length ? n[0] : {};
      }
      const v = 50;
      function A(e, { open: t, close: n }, r, o) {
        let l = e.sliceDoc(r - v, r);
        let s = e.sliceDoc(o, o + v);
        let i = /\s*$/.exec(l)[0].length,
          a = /^\s*/.exec(s)[0].length;
        let c = l.length - i;
        if (l.slice(c - t.length, c) == t && s.slice(a, a + n.length) == n) {
          return { open: { pos: r - i, margin: i && 1 }, close: { pos: o + a, margin: a && 1 } };
        }
        let u, f;
        if (o - r <= 2 * v) {
          u = f = e.sliceDoc(r, o);
        } else {
          u = e.sliceDoc(r, r + v);
          f = e.sliceDoc(o - v, o);
        }
        let d = /^\s*/.exec(u)[0].length,
          h = /\s*$/.exec(f)[0].length;
        let m = f.length - h - n.length;
        if (u.slice(d, d + t.length) == t && f.slice(m, m + n.length) == n) {
          return {
            open: { pos: r + d + t.length, margin: /\s/.test(u.charAt(d + t.length)) ? 1 : 0 },
            close: { pos: o - h - n.length, margin: /\s/.test(f.charAt(m - 1)) ? 1 : 0 },
          };
        }
        return null;
      }
      function C(e) {
        let t = [];
        for (let n of e.selection.ranges) {
          let r = e.doc.lineAt(n.from);
          let o = n.to <= r.to ? r : e.doc.lineAt(n.to);
          let l = t.length - 1;
          if (l >= 0 && t[l].to > r.from) t[l].to = o.to;
          else t.push({ from: r.from + /^\s*/.exec(r.text)[0].length, to: o.to });
        }
        return t;
      }
      function B(e, t, n = t.selection.ranges) {
        let r = n.map((e) => S(t, e.from).block);
        if (!r.every((e) => e)) return null;
        let o = n.map((e, n) => A(t, r[n], e.from, e.to));
        if (e != 2 && !o.every((e) => e)) {
          return {
            changes: t.changes(
              n.map((e, t) => {
                if (o[t]) return [];
                return [
                  { from: e.from, insert: r[t].open + " " },
                  { from: e.to, insert: " " + r[t].close },
                ];
              })
            ),
          };
        } else if (e != 1 && o.some((e) => e)) {
          let e = [];
          for (let t = 0, n; t < o.length; t++)
            if ((n = o[t])) {
              let o = r[t],
                { open: l, close: s } = n;
              e.push({ from: l.pos - o.open.length, to: l.pos + l.margin }, { from: s.pos - s.margin, to: s.pos + o.close.length });
            }
          return { changes: e };
        }
        return null;
      }
      function E(e, t, n = t.selection.ranges) {
        let r = [];
        let o = -1;
        for (let { from: l, to: s } of n) {
          let e = r.length,
            n = 1e9;
          let i = S(t, l).line;
          if (!i) continue;
          for (let a = l; a <= s; ) {
            let e = t.doc.lineAt(a);
            if (e.from > o && (l == s || s > e.from)) {
              o = e.from;
              let t = /^\s*/.exec(e.text)[0].length;
              let l = t == e.length;
              let s = e.text.slice(t, t + i.length) == i ? t : -1;
              if (t < e.text.length && t < n) n = t;
              r.push({ line: e, comment: s, token: i, indent: t, empty: l, single: false });
            }
            a = e.to + 1;
          }
          if (n < 1e9) for (let t = e; t < r.length; t++) if (r[t].indent < r[t].line.text.length) r[t].indent = n;
          if (r.length == e + 1) r[e].single = true;
        }
        if (e != 2 && r.some((e) => e.comment < 0 && (!e.empty || e.single))) {
          let e = [];
          for (let { line: t, token: o, indent: l, empty: s, single: i } of r) if (i || !s) e.push({ from: t.from + l, insert: o + " " });
          let n = t.changes(e);
          return { changes: n, selection: t.selection.map(n, 1) };
        } else if (e != 1 && r.some((e) => e.comment >= 0)) {
          let e = [];
          for (let { line: t, comment: n, token: o } of r)
            if (n >= 0) {
              let r = t.from + n,
                l = r + o.length;
              if (t.text[l - t.from] == " ") l++;
              e.push({ from: r, to: l });
            }
          return { changes: e };
        }
        return null;
      }
      const D = r.Annotation.define();
      const x = r.Annotation.define();
      const L = r.Facet.define();
      const M = r.Facet.define({
        combine(e) {
          return (0, r.combineConfig)(
            e,
            { minDepth: 100, newGroupDelay: 500, joinToEvent: (e, t) => t },
            { minDepth: Math.max, newGroupDelay: Math.min, joinToEvent: (e, t) => (n, r) => e(n, r) || t(n, r) }
          );
        },
      });
      const b = r.StateField.define({
        create() {
          return Z.empty;
        },
        update(e, t) {
          let n = t.state.facet(M);
          let o = t.annotation(D);
          if (o) {
            let r = P.fromTransaction(t, o.selection),
              l = o.side;
            let s = l == 0 ? e.undone : e.done;
            if (r) s = H(s, s.length, n.minDepth, r);
            else s = q(s, t.startState.selection);
            return new Z(l == 0 ? o.rest : s, l == 0 ? s : o.rest);
          }
          let l = t.annotation(x);
          if (l == "full" || l == "before") e = e.isolate();
          if (t.annotation(r.Transaction.addToHistory) === false) return !t.changes.empty ? e.addMapping(t.changes.desc) : e;
          let s = P.fromTransaction(t);
          let i = t.annotation(r.Transaction.time),
            a = t.annotation(r.Transaction.userEvent);
          if (s) e = e.addChanges(s, i, a, n, t);
          else if (t.selection) e = e.addSelection(t.startState.selection, i, a, n.newGroupDelay);
          if (l == "full" || l == "after") e = e.isolate();
          return e;
        },
        toJSON(e) {
          return { done: e.done.map((e) => e.toJSON()), undone: e.undone.map((e) => e.toJSON()) };
        },
        fromJSON(e) {
          return new Z(e.done.map(P.fromJSON), e.undone.map(P.fromJSON));
        },
      });
      function T(e = {}) {
        return [
          b,
          M.of(e),
          l.EditorView.domEventHandlers({
            beforeinput(e, t) {
              let n = e.inputType == "historyUndo" ? R : e.inputType == "historyRedo" ? V : null;
              if (!n) return false;
              e.preventDefault();
              return n(t);
            },
          }),
        ];
      }
      const O = b;
      function I(e, t) {
        return function ({ state: n, dispatch: r }) {
          if (!t && n.readOnly) return false;
          let o = n.field(b, false);
          if (!o) return false;
          let l = o.pop(e, n, t);
          if (!l) return false;
          r(l);
          return true;
        };
      }
      const R = I(0, false);
      const V = I(1, false);
      const U = I(0, true);
      const N = I(1, true);
      function G(e) {
        return function (t) {
          let n = t.field(b, false);
          if (!n) return 0;
          let r = e == 0 ? n.done : n.undone;
          return r.length - (r.length && !r[0].changes ? 1 : 0);
        };
      }
      const J = G(0);
      const F = G(1);
      class P {
        constructor(e, t, n, r, o) {
          this.changes = e;
          this.effects = t;
          this.mapped = n;
          this.startSelection = r;
          this.selectionsAfter = o;
        }
        setSelAfter(e) {
          return new P(this.changes, this.effects, this.mapped, this.startSelection, e);
        }
        toJSON() {
          var e, t, n;
          return {
            changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
            mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
            startSelection: (n = this.startSelection) === null || n === void 0 ? void 0 : n.toJSON(),
            selectionsAfter: this.selectionsAfter.map((e) => e.toJSON()),
          };
        }
        static fromJSON(e) {
          return new P(
            e.changes && r.ChangeSet.fromJSON(e.changes),
            [],
            e.mapped && r.ChangeDesc.fromJSON(e.mapped),
            e.startSelection && r.EditorSelection.fromJSON(e.startSelection),
            e.selectionsAfter.map(r.EditorSelection.fromJSON)
          );
        }
        static fromTransaction(e, t) {
          let n = j;
          for (let r of e.startState.facet(L)) {
            let t = r(e);
            if (t.length) n = n.concat(t);
          }
          if (!n.length && e.changes.empty) return null;
          return new P(e.changes.invert(e.startState.doc), n, undefined, t || e.startState.selection, j);
        }
        static selection(e) {
          return new P(undefined, j, undefined, undefined, e);
        }
      }
      function H(e, t, n, r) {
        let o = t + 1 > n + 20 ? t - n - 1 : 0;
        let l = e.slice(o, t);
        l.push(r);
        return l;
      }
      function z(e, t) {
        let n = [],
          r = false;
        e.iterChangedRanges((e, t) => n.push(e, t));
        t.iterChangedRanges((e, t, o, l) => {
          for (let s = 0; s < n.length; ) {
            let e = n[s++],
              t = n[s++];
            if (l >= e && o <= t) r = true;
          }
        });
        return r;
      }
      function W(e, t) {
        return e.ranges.length == t.ranges.length && e.ranges.filter((e, n) => e.empty != t.ranges[n].empty).length === 0;
      }
      function _(e, t) {
        return !e.length ? t : !t.length ? e : e.concat(t);
      }
      const j = [];
      const $ = 200;
      function q(e, t) {
        if (!e.length) {
          return [P.selection([t])];
        } else {
          let n = e[e.length - 1];
          let r = n.selectionsAfter.slice(Math.max(0, n.selectionsAfter.length - $));
          if (r.length && r[r.length - 1].eq(t)) return e;
          r.push(t);
          return H(e, e.length - 1, 1e9, n.setSelAfter(r));
        }
      }
      function K(e) {
        let t = e[e.length - 1];
        let n = e.slice();
        n[e.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1));
        return n;
      }
      function Q(e, t) {
        if (!e.length) return e;
        let n = e.length,
          r = j;
        while (n) {
          let o = X(e[n - 1], t, r);
          if ((o.changes && !o.changes.empty) || o.effects.length) {
            let t = e.slice(0, n);
            t[n - 1] = o;
            return t;
          } else {
            t = o.mapped;
            n--;
            r = o.selectionsAfter;
          }
        }
        return r.length ? [P.selection(r)] : j;
      }
      function X(e, t, n) {
        let o = _(e.selectionsAfter.length ? e.selectionsAfter.map((e) => e.map(t)) : j, n);
        if (!e.changes) return P.selection(o);
        let l = e.changes.map(t),
          s = t.mapDesc(e.changes, true);
        let i = e.mapped ? e.mapped.composeDesc(s) : s;
        return new P(l, r.StateEffect.mapEffects(e.effects, t), i, e.startSelection.map(s), o);
      }
      const Y = /^(input\.type|delete)($|\.)/;
      class Z {
        constructor(e, t, n = 0, r = undefined) {
          this.done = e;
          this.undone = t;
          this.prevTime = n;
          this.prevUserEvent = r;
        }
        isolate() {
          return this.prevTime ? new Z(this.done, this.undone) : this;
        }
        addChanges(e, t, n, r, o) {
          let l = this.done,
            s = l[l.length - 1];
          if (
            s &&
            s.changes &&
            !s.changes.empty &&
            e.changes &&
            (!n || Y.test(n)) &&
            ((!s.selectionsAfter.length && t - this.prevTime < r.newGroupDelay && r.joinToEvent(o, z(s.changes, e.changes))) ||
              n == "input.type.compose")
          ) {
            l = H(l, l.length - 1, r.minDepth, new P(e.changes.compose(s.changes), _(e.effects, s.effects), s.mapped, s.startSelection, j));
          } else {
            l = H(l, l.length, r.minDepth, e);
          }
          return new Z(l, j, t, n);
        }
        addSelection(e, t, n, r) {
          let o = this.done.length ? this.done[this.done.length - 1].selectionsAfter : j;
          if (o.length > 0 && t - this.prevTime < r && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && W(o[o.length - 1], e)) return this;
          return new Z(q(this.done, e), this.undone, t, n);
        }
        addMapping(e) {
          return new Z(Q(this.done, e), Q(this.undone, e), this.prevTime, this.prevUserEvent);
        }
        pop(e, t, n) {
          let r = e == 0 ? this.done : this.undone;
          if (r.length == 0) return null;
          let o = r[r.length - 1],
            l = o.selectionsAfter[0] || t.selection;
          if (n && o.selectionsAfter.length) {
            return t.update({
              selection: o.selectionsAfter[o.selectionsAfter.length - 1],
              annotations: D.of({ side: e, rest: K(r), selection: l }),
              userEvent: e == 0 ? "select.undo" : "select.redo",
              scrollIntoView: true,
            });
          } else if (!o.changes) {
            return null;
          } else {
            let n = r.length == 1 ? j : r.slice(0, r.length - 1);
            if (o.mapped) n = Q(n, o.mapped);
            return t.update({
              changes: o.changes,
              selection: o.startSelection,
              effects: o.effects,
              annotations: D.of({ side: e, rest: n, selection: l }),
              filter: false,
              userEvent: e == 0 ? "undo" : "redo",
              scrollIntoView: true,
            });
          }
        }
      }
      Z.empty = new Z(j, j);
      const ee = [
        { key: "Mod-z", run: R, preventDefault: true },
        { key: "Mod-y", mac: "Mod-Shift-z", run: V, preventDefault: true },
        { linux: "Ctrl-Shift-z", run: V, preventDefault: true },
        { key: "Mod-u", run: U, preventDefault: true },
        { key: "Alt-u", mac: "Mod-Shift-u", run: N, preventDefault: true },
      ];
      function te(e, t) {
        return r.EditorSelection.create(e.ranges.map(t), e.mainIndex);
      }
      function ne(e, t) {
        return e.update({ selection: t, scrollIntoView: true, userEvent: "select" });
      }
      function re({ state: e, dispatch: t }, n) {
        let r = te(e.selection, n);
        if (r.eq(e.selection, true)) return false;
        t(ne(e, r));
        return true;
      }
      function oe(e, t) {
        return r.EditorSelection.cursor(t ? e.to : e.from);
      }
      function le(e, t) {
        return re(e, (n) => (n.empty ? e.moveByChar(n, t) : oe(n, t)));
      }
      function se(e) {
        return e.textDirectionAt(e.state.selection.main.head) == l.Direction.LTR;
      }
      const ie = (e) => le(e, !se(e));
      const ae = (e) => le(e, se(e));
      const ce = (e) => le(e, true);
      const ue = (e) => le(e, false);
      function fe(e, t) {
        return re(e, (n) => (n.empty ? e.moveByGroup(n, t) : oe(n, t)));
      }
      const de = (e) => fe(e, !se(e));
      const he = (e) => fe(e, se(e));
      const me = (e) => fe(e, true);
      const pe = (e) => fe(e, false);
      const ge = typeof Intl != "undefined" && Intl.Segmenter ? new Intl.Segmenter(undefined, { granularity: "word" }) : null;
      function ye(e, t, n) {
        let o = e.state.charCategorizer(t.from);
        let l = r.CharCategory.Space,
          s = t.from,
          i = 0;
        let a = false,
          c = false,
          u = false;
        let f = (t) => {
          if (a) return false;
          s += n ? t.length : -t.length;
          let f = o(t),
            d;
          if (f == r.CharCategory.Word && t.charCodeAt(0) < 128 && /[\W_]/.test(t)) f = -1;
          if (l == r.CharCategory.Space) l = f;
          if (l != f) return false;
          if (l == r.CharCategory.Word) {
            if (t.toLowerCase() == t) {
              if (!n && c) return false;
              u = true;
            } else if (u) {
              if (n) return false;
              a = true;
            } else {
              if (c && n && o((d = e.state.sliceDoc(s, s + 1))) == r.CharCategory.Word && d.toLowerCase() == d) return false;
              c = true;
            }
          }
          i++;
          return true;
        };
        let d = e.moveByChar(t, n, (e) => {
          f(e);
          return f;
        });
        if (ge && l == r.CharCategory.Word && d.from == t.from + i * (n ? 1 : -1)) {
          let o = Math.min(t.head, d.head),
            l = Math.max(t.head, d.head);
          let s = e.state.sliceDoc(o, l);
          if (s.length > 1 && /[\u4E00-\uffff]/.test(s)) {
            let e = Array.from(ge.segment(s));
            if (e.length > 1) {
              if (n) return r.EditorSelection.cursor(t.head + e[1].index, -1);
              return r.EditorSelection.cursor(d.head + e[e.length - 1].index, 1);
            }
          }
        }
        return d;
      }
      function ke(e, t) {
        return re(e, (n) => (n.empty ? ye(e, n, t) : oe(n, t)));
      }
      const we = (e) => ke(e, true);
      const Se = (e) => ke(e, false);
      function ve(e, t, n) {
        if (t.type.prop(n)) return true;
        let r = t.to - t.from;
        return (r && (r > 2 || /[^\s,.;:]/.test(e.sliceDoc(t.from, t.to)))) || t.firstChild;
      }
      function Ae(e, t, n) {
        let o = (0, i.syntaxTree)(e).resolveInner(t.head);
        let l = n ? c.NodeProp.closedBy : c.NodeProp.openedBy;
        for (let r = t.head; ; ) {
          let t = n ? o.childAfter(r) : o.childBefore(r);
          if (!t) break;
          if (ve(e, t, l)) o = t;
          else r = n ? t.to : t.from;
        }
        let s = o.type.prop(l),
          a,
          u;
        if (s && (a = n ? (0, i.matchBrackets)(e, o.from, 1) : (0, i.matchBrackets)(e, o.to, -1)) && a.matched) u = n ? a.end.to : a.end.from;
        else u = n ? o.to : o.from;
        return r.EditorSelection.cursor(u, n ? -1 : 1);
      }
      const Ce = (e) => re(e, (t) => Ae(e.state, t, !se(e)));
      const Be = (e) => re(e, (t) => Ae(e.state, t, se(e)));
      function Ee(e, t) {
        return re(e, (n) => {
          if (!n.empty) return oe(n, t);
          let r = e.moveVertically(n, t);
          return r.head != n.head ? r : e.moveToLineBoundary(n, t);
        });
      }
      const De = (e) => Ee(e, false);
      const xe = (e) => Ee(e, true);
      function Le(e) {
        let t = e.scrollDOM.clientHeight < e.scrollDOM.scrollHeight - 2;
        let n = 0,
          r = 0,
          o;
        if (t) {
          for (let t of e.state.facet(l.EditorView.scrollMargins)) {
            let o = t(e);
            if (o === null || o === void 0 ? void 0 : o.top) n = Math.max(o === null || o === void 0 ? void 0 : o.top, n);
            if (o === null || o === void 0 ? void 0 : o.bottom) r = Math.max(o === null || o === void 0 ? void 0 : o.bottom, r);
          }
          o = e.scrollDOM.clientHeight - n - r;
        } else {
          o = (e.dom.ownerDocument.defaultView || window).innerHeight;
        }
        return { marginTop: n, marginBottom: r, selfScroll: t, height: Math.max(e.defaultLineHeight, o - 5) };
      }
      function Me(e, t) {
        let n = Le(e);
        let { state: r } = e,
          o = te(r.selection, (r) => (r.empty ? e.moveVertically(r, t, n.height) : oe(r, t)));
        if (o.eq(r.selection)) return false;
        let s;
        if (n.selfScroll) {
          let t = e.coordsAtPos(r.selection.main.head);
          let i = e.scrollDOM.getBoundingClientRect();
          let a = i.top + n.marginTop,
            c = i.bottom - n.marginBottom;
          if (t && t.top > a && t.bottom < c) s = l.EditorView.scrollIntoView(o.main.head, { y: "start", yMargin: t.top - a });
        }
        e.dispatch(ne(r, o), { effects: s });
        return true;
      }
      const be = (e) => Me(e, false);
      const Te = (e) => Me(e, true);
      function Oe(e, t, n) {
        let o = e.lineBlockAt(t.head),
          l = e.moveToLineBoundary(t, n);
        if (l.head == t.head && l.head != (n ? o.to : o.from)) l = e.moveToLineBoundary(t, n, false);
        if (!n && l.head == o.from && o.length) {
          let n = /^\s*/.exec(e.state.sliceDoc(o.from, Math.min(o.from + 100, o.to)))[0].length;
          if (n && t.head != o.from + n) l = r.EditorSelection.cursor(o.from + n);
        }
        return l;
      }
      const Ie = (e) => re(e, (t) => Oe(e, t, true));
      const Re = (e) => re(e, (t) => Oe(e, t, false));
      const Ve = (e) => re(e, (t) => Oe(e, t, !se(e)));
      const Ue = (e) => re(e, (t) => Oe(e, t, se(e)));
      const Ne = (e) => re(e, (t) => r.EditorSelection.cursor(e.lineBlockAt(t.head).from, 1));
      const Ge = (e) => re(e, (t) => r.EditorSelection.cursor(e.lineBlockAt(t.head).to, -1));
      function Je(e, t, n) {
        let o = false,
          l = te(e.selection, (t) => {
            let l =
              (0, i.matchBrackets)(e, t.head, -1) ||
              (0, i.matchBrackets)(e, t.head, 1) ||
              (t.head > 0 && (0, i.matchBrackets)(e, t.head - 1, 1)) ||
              (t.head < e.doc.length && (0, i.matchBrackets)(e, t.head + 1, -1));
            if (!l || !l.end) return t;
            o = true;
            let s = l.start.from == t.head ? l.end.to : l.end.from;
            return n ? r.EditorSelection.range(t.anchor, s) : r.EditorSelection.cursor(s);
          });
        if (!o) return false;
        t(ne(e, l));
        return true;
      }
      const Fe = ({ state: e, dispatch: t }) => Je(e, t, false);
      const Pe = ({ state: e, dispatch: t }) => Je(e, t, true);
      function He(e, t) {
        let n = te(e.state.selection, (e) => {
          let n = t(e);
          return r.EditorSelection.range(e.anchor, n.head, n.goalColumn, n.bidiLevel || undefined);
        });
        if (n.eq(e.state.selection)) return false;
        e.dispatch(ne(e.state, n));
        return true;
      }
      function ze(e, t) {
        return He(e, (n) => e.moveByChar(n, t));
      }
      const We = (e) => ze(e, !se(e));
      const _e = (e) => ze(e, se(e));
      const je = (e) => ze(e, true);
      const $e = (e) => ze(e, false);
      function qe(e, t) {
        return He(e, (n) => e.moveByGroup(n, t));
      }
      const Ke = (e) => qe(e, !se(e));
      const Qe = (e) => qe(e, se(e));
      const Xe = (e) => qe(e, true);
      const Ye = (e) => qe(e, false);
      function Ze(e, t) {
        return He(e, (n) => ye(e, n, t));
      }
      const et = (e) => Ze(e, true);
      const tt = (e) => Ze(e, false);
      const nt = (e) => He(e, (t) => Ae(e.state, t, !se(e)));
      const rt = (e) => He(e, (t) => Ae(e.state, t, se(e)));
      function ot(e, t) {
        return He(e, (n) => e.moveVertically(n, t));
      }
      const lt = (e) => ot(e, false);
      const st = (e) => ot(e, true);
      function it(e, t) {
        return He(e, (n) => e.moveVertically(n, t, Le(e).height));
      }
      const at = (e) => it(e, false);
      const ct = (e) => it(e, true);
      const ut = (e) => He(e, (t) => Oe(e, t, true));
      const ft = (e) => He(e, (t) => Oe(e, t, false));
      const dt = (e) => He(e, (t) => Oe(e, t, !se(e)));
      const ht = (e) => He(e, (t) => Oe(e, t, se(e)));
      const mt = (e) => He(e, (t) => r.EditorSelection.cursor(e.lineBlockAt(t.head).from));
      const pt = (e) => He(e, (t) => r.EditorSelection.cursor(e.lineBlockAt(t.head).to));
      const gt = ({ state: e, dispatch: t }) => {
        t(ne(e, { anchor: 0 }));
        return true;
      };
      const yt = ({ state: e, dispatch: t }) => {
        t(ne(e, { anchor: e.doc.length }));
        return true;
      };
      const kt = ({ state: e, dispatch: t }) => {
        t(ne(e, { anchor: e.selection.main.anchor, head: 0 }));
        return true;
      };
      const wt = ({ state: e, dispatch: t }) => {
        t(ne(e, { anchor: e.selection.main.anchor, head: e.doc.length }));
        return true;
      };
      const St = ({ state: e, dispatch: t }) => {
        t(e.update({ selection: { anchor: 0, head: e.doc.length }, userEvent: "select" }));
        return true;
      };
      const vt = ({ state: e, dispatch: t }) => {
        let n = Jt(e).map(({ from: t, to: n }) => r.EditorSelection.range(t, Math.min(n + 1, e.doc.length)));
        t(e.update({ selection: r.EditorSelection.create(n), userEvent: "select" }));
        return true;
      };
      const At = ({ state: e, dispatch: t }) => {
        let n = te(e.selection, (t) => {
          var n;
          let o = (0, i.syntaxTree)(e).resolveStack(t.from, 1);
          for (let e = o; e; e = e.next) {
            let { node: o } = e;
            if (
              ((o.from < t.from && o.to >= t.to) || (o.to > t.to && o.from <= t.from)) &&
              ((n = o.parent) === null || n === void 0 ? void 0 : n.parent)
            )
              return r.EditorSelection.range(o.to, o.from);
          }
          return t;
        });
        t(ne(e, n));
        return true;
      };
      const Ct = ({ state: e, dispatch: t }) => {
        let n = e.selection,
          o = null;
        if (n.ranges.length > 1) o = r.EditorSelection.create([n.main]);
        else if (!n.main.empty) o = r.EditorSelection.create([r.EditorSelection.cursor(n.main.head)]);
        if (!o) return false;
        t(ne(e, o));
        return true;
      };
      function Bt(e, t) {
        if (e.state.readOnly) return false;
        let n = "delete.selection",
          { state: o } = e;
        let s = o.changeByRange((o) => {
          let { from: l, to: s } = o;
          if (l == s) {
            let r = t(o);
            if (r < l) {
              n = "delete.backward";
              r = Et(e, r, false);
            } else if (r > l) {
              n = "delete.forward";
              r = Et(e, r, true);
            }
            l = Math.min(l, r);
            s = Math.max(s, r);
          } else {
            l = Et(e, l, false);
            s = Et(e, s, true);
          }
          return l == s ? { range: o } : { changes: { from: l, to: s }, range: r.EditorSelection.cursor(l, l < o.head ? -1 : 1) };
        });
        if (s.changes.empty) return false;
        e.dispatch(
          o.update(s, {
            scrollIntoView: true,
            userEvent: n,
            effects: n == "delete.selection" ? l.EditorView.announce.of(o.phrase("Selection deleted")) : undefined,
          })
        );
        return true;
      }
      function Et(e, t, n) {
        if (e instanceof l.EditorView)
          for (let r of e.state.facet(l.EditorView.atomicRanges).map((t) => t(e)))
            r.between(t, t, (e, r) => {
              if (e < t && r > t) t = n ? r : e;
            });
        return t;
      }
      const Dt = (e, t) =>
        Bt(e, (n) => {
          let o = n.from,
            { state: l } = e,
            s = l.doc.lineAt(o),
            a,
            c;
          if (!t && o > s.from && o < s.from + 200 && !/[^ \t]/.test((a = s.text.slice(0, o - s.from)))) {
            if (a[a.length - 1] == "\t") return o - 1;
            let e = (0, r.countColumn)(a, l.tabSize),
              t = e % (0, i.getIndentUnit)(l) || (0, i.getIndentUnit)(l);
            for (let n = 0; n < t && a[a.length - 1 - n] == " "; n++) o--;
            c = o;
          } else {
            c = (0, r.findClusterBreak)(s.text, o - s.from, t, t) + s.from;
            if (c == o && s.number != (t ? l.doc.lines : 1)) c += t ? 1 : -1;
            else if (!t && /[\ufe00-\ufe0f]/.test(s.text.slice(c - s.from, o - s.from)))
              c = (0, r.findClusterBreak)(s.text, c - s.from, false, false) + s.from;
          }
          return c;
        });
      const xt = (e) => Dt(e, false);
      const Lt = (e) => Dt(e, true);
      const Mt = (e, t) =>
        Bt(e, (n) => {
          let o = n.head,
            { state: l } = e,
            s = l.doc.lineAt(o);
          let i = l.charCategorizer(o);
          for (let e = null; ; ) {
            if (o == (t ? s.to : s.from)) {
              if (o == n.head && s.number != (t ? l.doc.lines : 1)) o += t ? 1 : -1;
              break;
            }
            let a = (0, r.findClusterBreak)(s.text, o - s.from, t) + s.from;
            let c = s.text.slice(Math.min(o, a) - s.from, Math.max(o, a) - s.from);
            let u = i(c);
            if (e != null && u != e) break;
            if (c != " " || o != n.head) e = u;
            o = a;
          }
          return o;
        });
      const bt = (e) => Mt(e, false);
      const Tt = (e) => Mt(e, true);
      const Ot = (e) =>
        Bt(e, (t) => {
          let n = e.lineBlockAt(t.head).to;
          return t.head < n ? n : Math.min(e.state.doc.length, t.head + 1);
        });
      const It = (e) =>
        Bt(e, (t) => {
          let n = e.lineBlockAt(t.head).from;
          return t.head > n ? n : Math.max(0, t.head - 1);
        });
      const Rt = (e) =>
        Bt(e, (t) => {
          let n = e.moveToLineBoundary(t, false).head;
          return t.head > n ? n : Math.max(0, t.head - 1);
        });
      const Vt = (e) =>
        Bt(e, (t) => {
          let n = e.moveToLineBoundary(t, true).head;
          return t.head < n ? n : Math.min(e.state.doc.length, t.head + 1);
        });
      const Ut = ({ state: e, dispatch: t }) => {
        if (e.readOnly) return false;
        let n = [];
        for (let r = 0, o = "", l = e.doc.iter(); ; ) {
          l.next();
          if (l.lineBreak || l.done) {
            let e = o.search(/\s+$/);
            if (e > -1) n.push({ from: r - (o.length - e), to: r });
            if (l.done) break;
            o = "";
          } else {
            o = l.value;
          }
          r += l.value.length;
        }
        if (!n.length) return false;
        t(e.update({ changes: n, userEvent: "delete" }));
        return true;
      };
      const Nt = ({ state: e, dispatch: t }) => {
        if (e.readOnly) return false;
        let n = e.changeByRange((e) => ({
          changes: { from: e.from, to: e.to, insert: r.Text.of(["", ""]) },
          range: r.EditorSelection.cursor(e.from),
        }));
        t(e.update(n, { scrollIntoView: true, userEvent: "input" }));
        return true;
      };
      const Gt = ({ state: e, dispatch: t }) => {
        if (e.readOnly) return false;
        let n = e.changeByRange((t) => {
          if (!t.empty || t.from == 0 || t.from == e.doc.length) return { range: t };
          let n = t.from,
            o = e.doc.lineAt(n);
          let l = n == o.from ? n - 1 : (0, r.findClusterBreak)(o.text, n - o.from, false) + o.from;
          let s = n == o.to ? n + 1 : (0, r.findClusterBreak)(o.text, n - o.from, true) + o.from;
          return { changes: { from: l, to: s, insert: e.doc.slice(n, s).append(e.doc.slice(l, n)) }, range: r.EditorSelection.cursor(s) };
        });
        if (n.changes.empty) return false;
        t(e.update(n, { scrollIntoView: true, userEvent: "move.character" }));
        return true;
      };
      function Jt(e) {
        let t = [],
          n = -1;
        for (let r of e.selection.ranges) {
          let o = e.doc.lineAt(r.from),
            l = e.doc.lineAt(r.to);
          if (!r.empty && r.to == l.from) l = e.doc.lineAt(r.to - 1);
          if (n >= o.number) {
            let e = t[t.length - 1];
            e.to = l.to;
            e.ranges.push(r);
          } else {
            t.push({ from: o.from, to: l.to, ranges: [r] });
          }
          n = l.number + 1;
        }
        return t;
      }
      function Ft(e, t, n) {
        if (e.readOnly) return false;
        let o = [],
          l = [];
        for (let s of Jt(e)) {
          if (n ? s.to == e.doc.length : s.from == 0) continue;
          let t = e.doc.lineAt(n ? s.to + 1 : s.from - 1);
          let i = t.length + 1;
          if (n) {
            o.push({ from: s.to, to: t.to }, { from: s.from, insert: t.text + e.lineBreak });
            for (let t of s.ranges) l.push(r.EditorSelection.range(Math.min(e.doc.length, t.anchor + i), Math.min(e.doc.length, t.head + i)));
          } else {
            o.push({ from: t.from, to: s.from }, { from: s.to, insert: e.lineBreak + t.text });
            for (let e of s.ranges) l.push(r.EditorSelection.range(e.anchor - i, e.head - i));
          }
        }
        if (!o.length) return false;
        t(e.update({ changes: o, scrollIntoView: true, selection: r.EditorSelection.create(l, e.selection.mainIndex), userEvent: "move.line" }));
        return true;
      }
      const Pt = ({ state: e, dispatch: t }) => Ft(e, t, false);
      const Ht = ({ state: e, dispatch: t }) => Ft(e, t, true);
      function zt(e, t, n) {
        if (e.readOnly) return false;
        let r = [];
        for (let o of Jt(e)) {
          if (n) r.push({ from: o.from, insert: e.doc.slice(o.from, o.to) + e.lineBreak });
          else r.push({ from: o.to, insert: e.lineBreak + e.doc.slice(o.from, o.to) });
        }
        t(e.update({ changes: r, scrollIntoView: true, userEvent: "input.copyline" }));
        return true;
      }
      const Wt = ({ state: e, dispatch: t }) => zt(e, t, false);
      const _t = ({ state: e, dispatch: t }) => zt(e, t, true);
      const jt = (e) => {
        if (e.state.readOnly) return false;
        let { state: t } = e,
          n = t.changes(
            Jt(t).map(({ from: e, to: n }) => {
              if (e > 0) e--;
              else if (n < t.doc.length) n++;
              return { from: e, to: n };
            })
          );
        let r = te(t.selection, (t) => e.moveVertically(t, true)).map(n);
        e.dispatch({ changes: n, selection: r, scrollIntoView: true, userEvent: "delete.line" });
        return true;
      };
      const $t = ({ state: e, dispatch: t }) => {
        t(e.update(e.replaceSelection(e.lineBreak), { scrollIntoView: true, userEvent: "input" }));
        return true;
      };
      function qt(e, t) {
        if (/\(\)|\[\]|\{\}/.test(e.sliceDoc(t - 1, t + 1))) return { from: t, to: t };
        let n = (0, i.syntaxTree)(e).resolveInner(t);
        let r = n.childBefore(t),
          o = n.childAfter(t),
          l;
        if (
          r &&
          o &&
          r.to <= t &&
          o.from >= t &&
          (l = r.type.prop(c.NodeProp.closedBy)) &&
          l.indexOf(o.name) > -1 &&
          e.doc.lineAt(r.to).from == e.doc.lineAt(o.from).from &&
          !/\S/.test(e.sliceDoc(r.to, o.from))
        )
          return { from: r.to, to: o.from };
        return null;
      }
      const Kt = Xt(false);
      const Qt = Xt(true);
      function Xt(e) {
        return ({ state: t, dispatch: n }) => {
          if (t.readOnly) return false;
          let o = t.changeByRange((n) => {
            let { from: o, to: l } = n,
              s = t.doc.lineAt(o);
            let a = !e && o == l && qt(t, o);
            if (e) o = l = (l <= s.to ? s : t.doc.lineAt(l)).to;
            let c = new i.IndentContext(t, { simulateBreak: o, simulateDoubleBreak: !!a });
            let u = (0, i.getIndentation)(c, o);
            if (u == null) u = (0, r.countColumn)(/^\s*/.exec(t.doc.lineAt(o).text)[0], t.tabSize);
            while (l < s.to && /\s/.test(s.text[l - s.from])) l++;
            if (a) ({ from: o, to: l } = a);
            else if (o > s.from && o < s.from + 100 && !/\S/.test(s.text.slice(0, o))) o = s.from;
            let f = ["", (0, i.indentString)(t, u)];
            if (a) f.push((0, i.indentString)(t, c.lineIndent(s.from, -1)));
            return { changes: { from: o, to: l, insert: r.Text.of(f) }, range: r.EditorSelection.cursor(o + 1 + f[1].length) };
          });
          n(t.update(o, { scrollIntoView: true, userEvent: "input" }));
          return true;
        };
      }
      function Yt(e, t) {
        let n = -1;
        return e.changeByRange((o) => {
          let l = [];
          for (let r = o.from; r <= o.to; ) {
            let s = e.doc.lineAt(r);
            if (s.number > n && (o.empty || o.to > s.from)) {
              t(s, l, o);
              n = s.number;
            }
            r = s.to + 1;
          }
          let s = e.changes(l);
          return { changes: l, range: r.EditorSelection.range(s.mapPos(o.anchor, 1), s.mapPos(o.head, 1)) };
        });
      }
      const Zt = ({ state: e, dispatch: t }) => {
        if (e.readOnly) return false;
        let n = Object.create(null);
        let r = new i.IndentContext(e, {
          overrideIndentation: (e) => {
            let t = n[e];
            return t == null ? -1 : t;
          },
        });
        let o = Yt(e, (t, o, l) => {
          let s = (0, i.getIndentation)(r, t.from);
          if (s == null) return;
          if (!/\S/.test(t.text)) s = 0;
          let a = /^\s*/.exec(t.text)[0];
          let c = (0, i.indentString)(e, s);
          if (a != c || l.from < t.from + a.length) {
            n[t.from] = s;
            o.push({ from: t.from, to: t.from + a.length, insert: c });
          }
        });
        if (!o.changes.empty) t(e.update(o, { userEvent: "indent" }));
        return true;
      };
      const en = ({ state: e, dispatch: t }) => {
        if (e.readOnly) return false;
        t(
          e.update(
            Yt(e, (t, n) => {
              n.push({ from: t.from, insert: e.facet(i.indentUnit) });
            }),
            { userEvent: "input.indent" }
          )
        );
        return true;
      };
      const tn = ({ state: e, dispatch: t }) => {
        if (e.readOnly) return false;
        t(
          e.update(
            Yt(e, (t, n) => {
              let o = /^\s*/.exec(t.text)[0];
              if (!o) return;
              let l = (0, r.countColumn)(o, e.tabSize),
                s = 0;
              let a = (0, i.indentString)(e, Math.max(0, l - (0, i.getIndentUnit)(e)));
              while (s < o.length && s < a.length && o.charCodeAt(s) == a.charCodeAt(s)) s++;
              n.push({ from: t.from + s, to: t.from + o.length, insert: a.slice(s) });
            }),
            { userEvent: "delete.dedent" }
          )
        );
        return true;
      };
      const nn = ({ state: e, dispatch: t }) => {
        if (e.selection.ranges.some((e) => !e.empty)) return en({ state: e, dispatch: t });
        t(e.update(e.replaceSelection("\t"), { scrollIntoView: true, userEvent: "input" }));
        return true;
      };
      const rn = [
        { key: "Ctrl-b", run: ie, shift: We, preventDefault: true },
        { key: "Ctrl-f", run: ae, shift: _e },
        { key: "Ctrl-p", run: De, shift: lt },
        { key: "Ctrl-n", run: xe, shift: st },
        { key: "Ctrl-a", run: Ne, shift: mt },
        { key: "Ctrl-e", run: Ge, shift: pt },
        { key: "Ctrl-d", run: Lt },
        { key: "Ctrl-h", run: xt },
        { key: "Ctrl-k", run: Ot },
        { key: "Ctrl-Alt-h", run: bt },
        { key: "Ctrl-o", run: Nt },
        { key: "Ctrl-t", run: Gt },
        { key: "Ctrl-v", run: Te },
      ];
      const on = [
        { key: "ArrowLeft", run: ie, shift: We, preventDefault: true },
        { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: de, shift: Ke, preventDefault: true },
        { mac: "Cmd-ArrowLeft", run: Ve, shift: dt, preventDefault: true },
        { key: "ArrowRight", run: ae, shift: _e, preventDefault: true },
        { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: he, shift: Qe, preventDefault: true },
        { mac: "Cmd-ArrowRight", run: Ue, shift: ht, preventDefault: true },
        { key: "ArrowUp", run: De, shift: lt, preventDefault: true },
        { mac: "Cmd-ArrowUp", run: gt, shift: kt },
        { mac: "Ctrl-ArrowUp", run: be, shift: at },
        { key: "ArrowDown", run: xe, shift: st, preventDefault: true },
        { mac: "Cmd-ArrowDown", run: yt, shift: wt },
        { mac: "Ctrl-ArrowDown", run: Te, shift: ct },
        { key: "PageUp", run: be, shift: at },
        { key: "PageDown", run: Te, shift: ct },
        { key: "Home", run: Re, shift: ft, preventDefault: true },
        { key: "Mod-Home", run: gt, shift: kt },
        { key: "End", run: Ie, shift: ut, preventDefault: true },
        { key: "Mod-End", run: yt, shift: wt },
        { key: "Enter", run: Kt },
        { key: "Mod-a", run: St },
        { key: "Backspace", run: xt, shift: xt },
        { key: "Delete", run: Lt },
        { key: "Mod-Backspace", mac: "Alt-Backspace", run: bt },
        { key: "Mod-Delete", mac: "Alt-Delete", run: Tt },
        { mac: "Mod-Backspace", run: Rt },
        { mac: "Mod-Delete", run: Vt },
      ].concat(rn.map((e) => ({ mac: e.key, run: e.run, shift: e.shift })));
      const ln = [
        { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: Ce, shift: nt },
        { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: Be, shift: rt },
        { key: "Alt-ArrowUp", run: Pt },
        { key: "Shift-Alt-ArrowUp", run: Wt },
        { key: "Alt-ArrowDown", run: Ht },
        { key: "Shift-Alt-ArrowDown", run: _t },
        { key: "Escape", run: Ct },
        { key: "Mod-Enter", run: Qt },
        { key: "Alt-l", mac: "Ctrl-l", run: vt },
        { key: "Mod-i", run: At, preventDefault: true },
        { key: "Mod-[", run: tn },
        { key: "Mod-]", run: en },
        { key: "Mod-Alt-\\", run: Zt },
        { key: "Shift-Mod-k", run: jt },
        { key: "Shift-Mod-\\", run: Fe },
        { key: "Mod-/", run: f },
        { key: "Alt-A", run: g },
      ].concat(on);
      const sn = { key: "Tab", run: en, shift: tn };
    },
  },
]);
