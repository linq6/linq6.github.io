"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [3711],
  {
    73711: (e, t, n) => {
      n.d(t, { a: () => An, c: () => wn });
      var r = {};
      n.r(r);
      n.d(r, {
        attentionMarkers: () => Vt,
        contentInitial: () => Pt,
        disable: () => Qt,
        document: () => Mt,
        flow: () => jt,
        flowInitial: () => Ot,
        insideSpan: () => qt,
        string: () => Ht,
        text: () => Rt,
      });
      var i = n(23787);
      const u = {};
      function c(e, t) {
        const n = t || u;
        const r = typeof n.includeImageAlt === "boolean" ? n.includeImageAlt : true;
        const i = typeof n.includeHtml === "boolean" ? n.includeHtml : true;
        return o(e, r, i);
      }
      function o(e, t, n) {
        if (l(e)) {
          if ("value" in e) {
            return e.type === "html" && !n ? "" : e.value;
          }
          if (t && "alt" in e && e.alt) {
            return e.alt;
          }
          if ("children" in e) {
            return s(e.children, t, n);
          }
        }
        if (Array.isArray(e)) {
          return s(e, t, n);
        }
        return "";
      }
      function s(e, t, n) {
        const r = [];
        let i = -1;
        while (++i < e.length) {
          r[i] = o(e[i], t, n);
        }
        return r.join("");
      }
      function l(e) {
        return Boolean(e && typeof e === "object");
      }
      function f(e, t, n, r) {
        const i = e.length;
        let u = 0;
        let c;
        if (t < 0) {
          t = -t > i ? 0 : i + t;
        } else {
          t = t > i ? i : t;
        }
        n = n > 0 ? n : 0;
        if (r.length < 1e4) {
          c = Array.from(r);
          c.unshift(t, n);
          e.splice(...c);
        } else {
          if (n) e.splice(t, n);
          while (u < r.length) {
            c = r.slice(u, u + 1e4);
            c.unshift(t, 0);
            e.splice(...c);
            u += 1e4;
            t += 1e4;
          }
        }
      }
      function a(e, t) {
        if (e.length > 0) {
          f(e, e.length, 0, t);
          return e;
        }
        return t;
      }
      const d = {}.hasOwnProperty;
      function h(e) {
        const t = {};
        let n = -1;
        while (++n < e.length) {
          p(t, e[n]);
        }
        return t;
      }
      function p(e, t) {
        let n;
        for (n in t) {
          const r = d.call(e, n) ? e[n] : undefined;
          const i = r || (e[n] = {});
          const u = t[n];
          let c;
          if (u) {
            for (c in u) {
              if (!d.call(i, c)) i[c] = [];
              const e = u[c];
              m(i[c], Array.isArray(e) ? e : e ? [e] : []);
            }
          }
        }
      }
      function m(e, t) {
        let n = -1;
        const r = [];
        while (++n < t.length) {
          (t[n].add === "after" ? e : r).push(t[n]);
        }
        f(e, 0, 0, r);
      }
      function g(e) {
        const t = {};
        let n = -1;
        while (++n < e.length) {
          x(t, e[n]);
        }
        return t;
      }
      function x(e, t) {
        let n;
        for (n in t) {
          const r = d.call(e, n) ? e[n] : undefined;
          const i = r || (e[n] = {});
          const u = t[n];
          let c;
          if (u) {
            for (c in u) {
              i[c] = u[c];
            }
          }
        }
      }
      const k =
        /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
      const y = _(/[A-Za-z]/);
      const F = _(/[\dA-Za-z]/);
      const b = _(/[#-'*+\--9=?A-Z^-~]/);
      function S(e) {
        return e !== null && (e < 32 || e === 127);
      }
      const w = _(/\d/);
      const E = _(/[\dA-Fa-f]/);
      const v = _(/[!-/:-@[-`{-~]/);
      function A(e) {
        return e !== null && e < -2;
      }
      function I(e) {
        return e !== null && (e < 0 || e === 32);
      }
      function C(e) {
        return e === -2 || e === -1 || e === 32;
      }
      const T = _(k);
      const z = _(/\s/);
      function _(e) {
        return t;
        function t(t) {
          return t !== null && e.test(String.fromCharCode(t));
        }
      }
      function D(e, t, n, r) {
        const i = r ? r - 1 : Number.POSITIVE_INFINITY;
        let u = 0;
        return c;
        function c(r) {
          if (C(r)) {
            e.enter(n);
            return o(r);
          }
          return t(r);
        }
        function o(r) {
          if (C(r) && u++ < i) {
            e.consume(r);
            return o;
          }
          e.exit(n);
          return t(r);
        }
      }
      const B = { tokenize: L };
      function L(e) {
        const t = e.attempt(this.parser.constructs.contentInitial, r, i);
        let n;
        return t;
        function r(n) {
          if (n === null) {
            e.consume(n);
            return;
          }
          e.enter("lineEnding");
          e.consume(n);
          e.exit("lineEnding");
          return D(e, t, "linePrefix");
        }
        function i(t) {
          e.enter("paragraph");
          return u(t);
        }
        function u(t) {
          const r = e.enter("chunkText", { contentType: "text", previous: n });
          if (n) {
            n.next = r;
          }
          n = r;
          return c(t);
        }
        function c(t) {
          if (t === null) {
            e.exit("chunkText");
            e.exit("paragraph");
            e.consume(t);
            return;
          }
          if (A(t)) {
            e.consume(t);
            e.exit("chunkText");
            return u;
          }
          e.consume(t);
          return c;
        }
      }
      const M = { tokenize: O };
      const P = { tokenize: j };
      function O(e) {
        const t = this;
        const n = [];
        let r = 0;
        let i;
        let u;
        let c;
        return o;
        function o(i) {
          if (r < n.length) {
            const u = n[r];
            t.containerState = u[1];
            return e.attempt(u[0].continuation, s, l)(i);
          }
          return l(i);
        }
        function s(e) {
          r++;
          if (t.containerState._closeFlow) {
            t.containerState._closeFlow = undefined;
            if (i) {
              y();
            }
            const n = t.events.length;
            let u = n;
            let c;
            while (u--) {
              if (t.events[u][0] === "exit" && t.events[u][1].type === "chunkFlow") {
                c = t.events[u][1].end;
                break;
              }
            }
            k(r);
            let o = n;
            while (o < t.events.length) {
              t.events[o][1].end = Object.assign({}, c);
              o++;
            }
            f(t.events, u + 1, 0, t.events.slice(n));
            t.events.length = o;
            return l(e);
          }
          return o(e);
        }
        function l(u) {
          if (r === n.length) {
            if (!i) {
              return h(u);
            }
            if (i.currentConstruct && i.currentConstruct.concrete) {
              return m(u);
            }
            t.interrupt = Boolean(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
          }
          t.containerState = {};
          return e.check(P, a, d)(u);
        }
        function a(e) {
          if (i) y();
          k(r);
          return h(e);
        }
        function d(e) {
          t.parser.lazy[t.now().line] = r !== n.length;
          c = t.now().offset;
          return m(e);
        }
        function h(n) {
          t.containerState = {};
          return e.attempt(P, p, m)(n);
        }
        function p(e) {
          r++;
          n.push([t.currentConstruct, t.containerState]);
          return h(e);
        }
        function m(n) {
          if (n === null) {
            if (i) y();
            k(0);
            e.consume(n);
            return;
          }
          i = i || t.parser.flow(t.now());
          e.enter("chunkFlow", { contentType: "flow", previous: u, _tokenizer: i });
          return g(n);
        }
        function g(n) {
          if (n === null) {
            x(e.exit("chunkFlow"), true);
            k(0);
            e.consume(n);
            return;
          }
          if (A(n)) {
            e.consume(n);
            x(e.exit("chunkFlow"));
            r = 0;
            t.interrupt = undefined;
            return o;
          }
          e.consume(n);
          return g;
        }
        function x(e, n) {
          const o = t.sliceStream(e);
          if (n) o.push(null);
          e.previous = u;
          if (u) u.next = e;
          u = e;
          i.defineSkip(e.start);
          i.write(o);
          if (t.parser.lazy[e.start.line]) {
            let e = i.events.length;
            while (e--) {
              if (i.events[e][1].start.offset < c && (!i.events[e][1].end || i.events[e][1].end.offset > c)) {
                return;
              }
            }
            const n = t.events.length;
            let u = n;
            let o;
            let s;
            while (u--) {
              if (t.events[u][0] === "exit" && t.events[u][1].type === "chunkFlow") {
                if (o) {
                  s = t.events[u][1].end;
                  break;
                }
                o = true;
              }
            }
            k(r);
            e = n;
            while (e < t.events.length) {
              t.events[e][1].end = Object.assign({}, s);
              e++;
            }
            f(t.events, u + 1, 0, t.events.slice(n));
            t.events.length = e;
          }
        }
        function k(r) {
          let i = n.length;
          while (i-- > r) {
            const r = n[i];
            t.containerState = r[1];
            r[0].exit.call(t, e);
          }
          n.length = r;
        }
        function y() {
          i.write([null]);
          u = undefined;
          i = undefined;
          t.containerState._closeFlow = undefined;
        }
      }
      function j(e, t, n) {
        return D(
          e,
          e.attempt(this.parser.constructs.document, t, n),
          "linePrefix",
          this.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4
        );
      }
      const H = { tokenize: R, partial: true };
      function R(e, t, n) {
        return r;
        function r(t) {
          return C(t) ? D(e, i, "linePrefix")(t) : i(t);
        }
        function i(e) {
          return e === null || A(e) ? t(e) : n(e);
        }
      }
      function q(e) {
        const t = {};
        let n = -1;
        let r;
        let i;
        let u;
        let c;
        let o;
        let s;
        let l;
        while (++n < e.length) {
          while (n in t) {
            n = t[n];
          }
          r = e[n];
          if (n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix") {
            s = r[1]._tokenizer.events;
            u = 0;
            if (u < s.length && s[u][1].type === "lineEndingBlank") {
              u += 2;
            }
            if (u < s.length && s[u][1].type === "content") {
              while (++u < s.length) {
                if (s[u][1].type === "content") {
                  break;
                }
                if (s[u][1].type === "chunkText") {
                  s[u][1]._isInFirstContentOfListItem = true;
                  u++;
                }
              }
            }
          }
          if (r[0] === "enter") {
            if (r[1].contentType) {
              Object.assign(t, V(e, n));
              n = t[n];
              l = true;
            }
          } else if (r[1]._container) {
            u = n;
            i = undefined;
            while (u--) {
              c = e[u];
              if (c[1].type === "lineEnding" || c[1].type === "lineEndingBlank") {
                if (c[0] === "enter") {
                  if (i) {
                    e[i][1].type = "lineEndingBlank";
                  }
                  c[1].type = "lineEnding";
                  i = u;
                }
              } else {
                break;
              }
            }
            if (i) {
              r[1].end = Object.assign({}, e[i][1].start);
              o = e.slice(i, n);
              o.unshift(r);
              f(e, i, n - i + 1, o);
            }
          }
        }
        return !l;
      }
      function V(e, t) {
        const n = e[t][1];
        const r = e[t][2];
        let i = t - 1;
        const u = [];
        const c = n._tokenizer || r.parser[n.contentType](n.start);
        const o = c.events;
        const s = [];
        const l = {};
        let a;
        let d;
        let h = -1;
        let p = n;
        let m = 0;
        let g = 0;
        const x = [g];
        while (p) {
          while (e[++i][1] !== p) {}
          u.push(i);
          if (!p._tokenizer) {
            a = r.sliceStream(p);
            if (!p.next) {
              a.push(null);
            }
            if (d) {
              c.defineSkip(p.start);
            }
            if (p._isInFirstContentOfListItem) {
              c._gfmTasklistFirstContentOfListItem = true;
            }
            c.write(a);
            if (p._isInFirstContentOfListItem) {
              c._gfmTasklistFirstContentOfListItem = undefined;
            }
          }
          d = p;
          p = p.next;
        }
        p = n;
        while (++h < o.length) {
          if (o[h][0] === "exit" && o[h - 1][0] === "enter" && o[h][1].type === o[h - 1][1].type && o[h][1].start.line !== o[h][1].end.line) {
            g = h + 1;
            x.push(g);
            p._tokenizer = undefined;
            p.previous = undefined;
            p = p.next;
          }
        }
        c.events = [];
        if (p) {
          p._tokenizer = undefined;
          p.previous = undefined;
        } else {
          x.pop();
        }
        h = x.length;
        while (h--) {
          const t = o.slice(x[h], x[h + 1]);
          const n = u.pop();
          s.unshift([n, n + t.length - 1]);
          f(e, n, 2, t);
        }
        h = -1;
        while (++h < s.length) {
          l[m + s[h][0]] = m + s[h][1];
          m += s[h][1] - s[h][0] - 1;
        }
        return l;
      }
      const Q = { tokenize: $, resolve: U };
      const N = { tokenize: W, partial: true };
      function U(e) {
        q(e);
        return e;
      }
      function $(e, t) {
        let n;
        return r;
        function r(t) {
          e.enter("content");
          n = e.enter("chunkContent", { contentType: "content" });
          return i(t);
        }
        function i(t) {
          if (t === null) {
            return u(t);
          }
          if (A(t)) {
            return e.check(N, c, u)(t);
          }
          e.consume(t);
          return i;
        }
        function u(n) {
          e.exit("chunkContent");
          e.exit("content");
          return t(n);
        }
        function c(t) {
          e.consume(t);
          e.exit("chunkContent");
          n.next = e.enter("chunkContent", { contentType: "content", previous: n });
          n = n.next;
          return i;
        }
      }
      function W(e, t, n) {
        const r = this;
        return i;
        function i(t) {
          e.exit("chunkContent");
          e.enter("lineEnding");
          e.consume(t);
          e.exit("lineEnding");
          return D(e, u, "linePrefix");
        }
        function u(i) {
          if (i === null || A(i)) {
            return n(i);
          }
          const u = r.events[r.events.length - 1];
          if (
            !r.parser.constructs.disable.null.includes("codeIndented") &&
            u &&
            u[1].type === "linePrefix" &&
            u[2].sliceSerialize(u[1], true).length >= 4
          ) {
            return t(i);
          }
          return e.interrupt(r.parser.constructs.flow, n, t)(i);
        }
      }
      const Z = { tokenize: Y };
      function Y(e) {
        const t = this;
        const n = e.attempt(
          H,
          r,
          e.attempt(this.parser.constructs.flowInitial, i, D(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Q, i)), "linePrefix"))
        );
        return n;
        function r(r) {
          if (r === null) {
            e.consume(r);
            return;
          }
          e.enter("lineEndingBlank");
          e.consume(r);
          e.exit("lineEndingBlank");
          t.currentConstruct = undefined;
          return n;
        }
        function i(r) {
          if (r === null) {
            e.consume(r);
            return;
          }
          e.enter("lineEnding");
          e.consume(r);
          e.exit("lineEnding");
          t.currentConstruct = undefined;
          return n;
        }
      }
      const J = { resolveAll: ee() };
      const G = X("string");
      const K = X("text");
      function X(e) {
        return { tokenize: t, resolveAll: ee(e === "text" ? te : undefined) };
        function t(t) {
          const n = this;
          const r = this.parser.constructs[e];
          const i = t.attempt(r, u, c);
          return u;
          function u(e) {
            return s(e) ? i(e) : c(e);
          }
          function c(e) {
            if (e === null) {
              t.consume(e);
              return;
            }
            t.enter("data");
            t.consume(e);
            return o;
          }
          function o(e) {
            if (s(e)) {
              t.exit("data");
              return i(e);
            }
            t.consume(e);
            return o;
          }
          function s(e) {
            if (e === null) {
              return true;
            }
            const t = r[e];
            let i = -1;
            if (t) {
              while (++i < t.length) {
                const e = t[i];
                if (!e.previous || e.previous.call(n, n.previous)) {
                  return true;
                }
              }
            }
            return false;
          }
        }
      }
      function ee(e) {
        return t;
        function t(t, n) {
          let r = -1;
          let i;
          while (++r <= t.length) {
            if (i === undefined) {
              if (t[r] && t[r][1].type === "data") {
                i = r;
                r++;
              }
            } else if (!t[r] || t[r][1].type !== "data") {
              if (r !== i + 2) {
                t[i][1].end = t[r - 1][1].end;
                t.splice(i + 2, r - i - 2);
                r = i + 2;
              }
              i = undefined;
            }
          }
          return e ? e(t, n) : t;
        }
      }
      function te(e, t) {
        let n = 0;
        while (++n <= e.length) {
          if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
            const r = e[n - 1][1];
            const i = t.sliceStream(r);
            let u = i.length;
            let c = -1;
            let o = 0;
            let s;
            while (u--) {
              const e = i[u];
              if (typeof e === "string") {
                c = e.length;
                while (e.charCodeAt(c - 1) === 32) {
                  o++;
                  c--;
                }
                if (c) break;
                c = -1;
              } else if (e === -2) {
                s = true;
                o++;
              } else if (e === -1) {
              } else {
                u++;
                break;
              }
            }
            if (o) {
              const i = {
                type: n === e.length || s || o < 2 ? "lineSuffix" : "hardBreakTrailing",
                start: {
                  line: r.end.line,
                  column: r.end.column - o,
                  offset: r.end.offset - o,
                  _index: r.start._index + u,
                  _bufferIndex: u ? c : r.start._bufferIndex + c,
                },
                end: Object.assign({}, r.end),
              };
              r.end = Object.assign({}, i.start);
              if (r.start.offset === r.end.offset) {
                Object.assign(r, i);
              } else {
                e.splice(n, 0, ["enter", i, t], ["exit", i, t]);
                n += 2;
              }
            }
            n++;
          }
        }
        return e;
      }
      function ne(e, t, n) {
        const r = [];
        let i = -1;
        while (++i < e.length) {
          const u = e[i].resolveAll;
          if (u && !r.includes(u)) {
            t = u(t, n);
            r.push(u);
          }
        }
        return t;
      }
      function re(e, t, n) {
        let r = Object.assign(n ? Object.assign({}, n) : { line: 1, column: 1, offset: 0 }, { _index: 0, _bufferIndex: -1 });
        const i = {};
        const u = [];
        let c = [];
        let o = [];
        let s = true;
        const l = { consume: S, enter: w, exit: E, attempt: C(v), check: C(I), interrupt: C(I, { interrupt: true }) };
        const d = {
          previous: null,
          code: null,
          containerState: {},
          events: [],
          parser: e,
          sliceStream: x,
          sliceSerialize: g,
          now: k,
          defineSkip: y,
          write: m,
        };
        let h = t.tokenize.call(d, l);
        let p;
        if (t.resolveAll) {
          u.push(t);
        }
        return d;
        function m(e) {
          c = a(c, e);
          F();
          if (c[c.length - 1] !== null) {
            return [];
          }
          T(t, 0);
          d.events = ne(u, d.events, d);
          return d.events;
        }
        function g(e, t) {
          return ue(x(e), t);
        }
        function x(e) {
          return ie(c, e);
        }
        function k() {
          const { line: e, column: t, offset: n, _index: i, _bufferIndex: u } = r;
          return { line: e, column: t, offset: n, _index: i, _bufferIndex: u };
        }
        function y(e) {
          i[e.line] = e.column;
          _();
        }
        function F() {
          let e;
          while (r._index < c.length) {
            const t = c[r._index];
            if (typeof t === "string") {
              e = r._index;
              if (r._bufferIndex < 0) {
                r._bufferIndex = 0;
              }
              while (r._index === e && r._bufferIndex < t.length) {
                b(t.charCodeAt(r._bufferIndex));
              }
            } else {
              b(t);
            }
          }
        }
        function b(e) {
          s = undefined;
          p = e;
          h = h(e);
        }
        function S(e) {
          if (A(e)) {
            r.line++;
            r.column = 1;
            r.offset += e === -3 ? 2 : 1;
            _();
          } else if (e !== -1) {
            r.column++;
            r.offset++;
          }
          if (r._bufferIndex < 0) {
            r._index++;
          } else {
            r._bufferIndex++;
            if (r._bufferIndex === c[r._index].length) {
              r._bufferIndex = -1;
              r._index++;
            }
          }
          d.previous = e;
          s = true;
        }
        function w(e, t) {
          const n = t || {};
          n.type = e;
          n.start = k();
          d.events.push(["enter", n, d]);
          o.push(n);
          return n;
        }
        function E(e) {
          const t = o.pop();
          t.end = k();
          d.events.push(["exit", t, d]);
          return t;
        }
        function v(e, t) {
          T(e, t.from);
        }
        function I(e, t) {
          t.restore();
        }
        function C(e, t) {
          return n;
          function n(n, r, i) {
            let u;
            let c;
            let o;
            let f;
            return Array.isArray(n) ? h(n) : "tokenize" in n ? h([n]) : a(n);
            function a(e) {
              return t;
              function t(t) {
                const n = t !== null && e[t];
                const r = t !== null && e.null;
                const i = [...(Array.isArray(n) ? n : n ? [n] : []), ...(Array.isArray(r) ? r : r ? [r] : [])];
                return h(i)(t);
              }
            }
            function h(e) {
              u = e;
              c = 0;
              if (e.length === 0) {
                return i;
              }
              return p(e[c]);
            }
            function p(e) {
              return n;
              function n(n) {
                f = z();
                o = e;
                if (!e.partial) {
                  d.currentConstruct = e;
                }
                if (e.name && d.parser.constructs.disable.null.includes(e.name)) {
                  return g(n);
                }
                return e.tokenize.call(t ? Object.assign(Object.create(d), t) : d, l, m, g)(n);
              }
            }
            function m(t) {
              s = true;
              e(o, f);
              return r;
            }
            function g(e) {
              s = true;
              f.restore();
              if (++c < u.length) {
                return p(u[c]);
              }
              return i;
            }
          }
        }
        function T(e, t) {
          if (e.resolveAll && !u.includes(e)) {
            u.push(e);
          }
          if (e.resolve) {
            f(d.events, t, d.events.length - t, e.resolve(d.events.slice(t), d));
          }
          if (e.resolveTo) {
            d.events = e.resolveTo(d.events, d);
          }
        }
        function z() {
          const e = k();
          const t = d.previous;
          const n = d.currentConstruct;
          const i = d.events.length;
          const u = Array.from(o);
          return { restore: c, from: i };
          function c() {
            r = e;
            d.previous = t;
            d.currentConstruct = n;
            d.events.length = i;
            o = u;
            _();
          }
        }
        function _() {
          if (r.line in i && r.column < 2) {
            r.column = i[r.line];
            r.offset += i[r.line] - 1;
          }
        }
      }
      function ie(e, t) {
        const n = t.start._index;
        const r = t.start._bufferIndex;
        const i = t.end._index;
        const u = t.end._bufferIndex;
        let c;
        if (n === i) {
          c = [e[n].slice(r, u)];
        } else {
          c = e.slice(n, i);
          if (r > -1) {
            const e = c[0];
            if (typeof e === "string") {
              c[0] = e.slice(r);
            } else {
              c.shift();
            }
          }
          if (u > 0) {
            c.push(e[i].slice(0, u));
          }
        }
        return c;
      }
      function ue(e, t) {
        let n = -1;
        const r = [];
        let i;
        while (++n < e.length) {
          const u = e[n];
          let c;
          if (typeof u === "string") {
            c = u;
          } else
            switch (u) {
              case -5: {
                c = "\r";
                break;
              }
              case -4: {
                c = "\n";
                break;
              }
              case -3: {
                c = "\r" + "\n";
                break;
              }
              case -2: {
                c = t ? " " : "\t";
                break;
              }
              case -1: {
                if (!t && i) continue;
                c = " ";
                break;
              }
              default: {
                c = String.fromCharCode(u);
              }
            }
          i = u === -2;
          r.push(c);
        }
        return r.join("");
      }
      const ce = { name: "thematicBreak", tokenize: oe };
      function oe(e, t, n) {
        let r = 0;
        let i;
        return u;
        function u(t) {
          e.enter("thematicBreak");
          return c(t);
        }
        function c(e) {
          i = e;
          return o(e);
        }
        function o(u) {
          if (u === i) {
            e.enter("thematicBreakSequence");
            return s(u);
          }
          if (r >= 3 && (u === null || A(u))) {
            e.exit("thematicBreak");
            return t(u);
          }
          return n(u);
        }
        function s(t) {
          if (t === i) {
            e.consume(t);
            r++;
            return s;
          }
          e.exit("thematicBreakSequence");
          return C(t) ? D(e, o, "whitespace")(t) : o(t);
        }
      }
      const se = { name: "list", tokenize: ae, continuation: { tokenize: de }, exit: pe };
      const le = { tokenize: me, partial: true };
      const fe = { tokenize: he, partial: true };
      function ae(e, t, n) {
        const r = this;
        const i = r.events[r.events.length - 1];
        let u = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], true).length : 0;
        let c = 0;
        return o;
        function o(t) {
          const i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
          if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : w(t)) {
            if (!r.containerState.type) {
              r.containerState.type = i;
              e.enter(i, { _container: true });
            }
            if (i === "listUnordered") {
              e.enter("listItemPrefix");
              return t === 42 || t === 45 ? e.check(ce, n, l)(t) : l(t);
            }
            if (!r.interrupt || t === 49) {
              e.enter("listItemPrefix");
              e.enter("listItemValue");
              return s(t);
            }
          }
          return n(t);
        }
        function s(t) {
          if (w(t) && ++c < 10) {
            e.consume(t);
            return s;
          }
          if ((!r.interrupt || c < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46)) {
            e.exit("listItemValue");
            return l(t);
          }
          return n(t);
        }
        function l(t) {
          e.enter("listItemMarker");
          e.consume(t);
          e.exit("listItemMarker");
          r.containerState.marker = r.containerState.marker || t;
          return e.check(H, r.interrupt ? n : f, e.attempt(le, d, a));
        }
        function f(e) {
          r.containerState.initialBlankLine = true;
          u++;
          return d(e);
        }
        function a(t) {
          if (C(t)) {
            e.enter("listItemPrefixWhitespace");
            e.consume(t);
            e.exit("listItemPrefixWhitespace");
            return d;
          }
          return n(t);
        }
        function d(n) {
          r.containerState.size = u + r.sliceSerialize(e.exit("listItemPrefix"), true).length;
          return t(n);
        }
      }
      function de(e, t, n) {
        const r = this;
        r.containerState._closeFlow = undefined;
        return e.check(H, i, u);
        function i(n) {
          r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine;
          return D(e, t, "listItemIndent", r.containerState.size + 1)(n);
        }
        function u(n) {
          if (r.containerState.furtherBlankLines || !C(n)) {
            r.containerState.furtherBlankLines = undefined;
            r.containerState.initialBlankLine = undefined;
            return c(n);
          }
          r.containerState.furtherBlankLines = undefined;
          r.containerState.initialBlankLine = undefined;
          return e.attempt(fe, t, c)(n);
        }
        function c(i) {
          r.containerState._closeFlow = true;
          r.interrupt = undefined;
          return D(e, e.attempt(se, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(i);
        }
      }
      function he(e, t, n) {
        const r = this;
        return D(e, i, "listItemIndent", r.containerState.size + 1);
        function i(e) {
          const i = r.events[r.events.length - 1];
          return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], true).length === r.containerState.size ? t(e) : n(e);
        }
      }
      function pe(e) {
        e.exit(this.containerState.type);
      }
      function me(e, t, n) {
        const r = this;
        return D(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4 + 1);
        function i(e) {
          const i = r.events[r.events.length - 1];
          return !C(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
        }
      }
      const ge = { name: "blockQuote", tokenize: xe, continuation: { tokenize: ke }, exit: ye };
      function xe(e, t, n) {
        const r = this;
        return i;
        function i(t) {
          if (t === 62) {
            const n = r.containerState;
            if (!n.open) {
              e.enter("blockQuote", { _container: true });
              n.open = true;
            }
            e.enter("blockQuotePrefix");
            e.enter("blockQuoteMarker");
            e.consume(t);
            e.exit("blockQuoteMarker");
            return u;
          }
          return n(t);
        }
        function u(n) {
          if (C(n)) {
            e.enter("blockQuotePrefixWhitespace");
            e.consume(n);
            e.exit("blockQuotePrefixWhitespace");
            e.exit("blockQuotePrefix");
            return t;
          }
          e.exit("blockQuotePrefix");
          return t(n);
        }
      }
      function ke(e, t, n) {
        const r = this;
        return i;
        function i(t) {
          if (C(t)) {
            return D(e, u, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(t);
          }
          return u(t);
        }
        function u(r) {
          return e.attempt(ge, t, n)(r);
        }
      }
      function ye(e) {
        e.exit("blockQuote");
      }
      function Fe(e, t, n, r, i, u, c, o, s) {
        const l = s || Number.POSITIVE_INFINITY;
        let f = 0;
        return a;
        function a(t) {
          if (t === 60) {
            e.enter(r);
            e.enter(i);
            e.enter(u);
            e.consume(t);
            e.exit(u);
            return d;
          }
          if (t === null || t === 32 || t === 41 || S(t)) {
            return n(t);
          }
          e.enter(r);
          e.enter(c);
          e.enter(o);
          e.enter("chunkString", { contentType: "string" });
          return m(t);
        }
        function d(n) {
          if (n === 62) {
            e.enter(u);
            e.consume(n);
            e.exit(u);
            e.exit(i);
            e.exit(r);
            return t;
          }
          e.enter(o);
          e.enter("chunkString", { contentType: "string" });
          return h(n);
        }
        function h(t) {
          if (t === 62) {
            e.exit("chunkString");
            e.exit(o);
            return d(t);
          }
          if (t === null || t === 60 || A(t)) {
            return n(t);
          }
          e.consume(t);
          return t === 92 ? p : h;
        }
        function p(t) {
          if (t === 60 || t === 62 || t === 92) {
            e.consume(t);
            return h;
          }
          return h(t);
        }
        function m(i) {
          if (!f && (i === null || i === 41 || I(i))) {
            e.exit("chunkString");
            e.exit(o);
            e.exit(c);
            e.exit(r);
            return t(i);
          }
          if (f < l && i === 40) {
            e.consume(i);
            f++;
            return m;
          }
          if (i === 41) {
            e.consume(i);
            f--;
            return m;
          }
          if (i === null || i === 32 || i === 40 || S(i)) {
            return n(i);
          }
          e.consume(i);
          return i === 92 ? g : m;
        }
        function g(t) {
          if (t === 40 || t === 41 || t === 92) {
            e.consume(t);
            return m;
          }
          return m(t);
        }
      }
      function be(e, t, n, r, i, u) {
        const c = this;
        let o = 0;
        let s;
        return l;
        function l(t) {
          e.enter(r);
          e.enter(i);
          e.consume(t);
          e.exit(i);
          e.enter(u);
          return f;
        }
        function f(l) {
          if (o > 999 || l === null || l === 91 || (l === 93 && !s) || (l === 94 && !o && "_hiddenFootnoteSupport" in c.parser.constructs)) {
            return n(l);
          }
          if (l === 93) {
            e.exit(u);
            e.enter(i);
            e.consume(l);
            e.exit(i);
            e.exit(r);
            return t;
          }
          if (A(l)) {
            e.enter("lineEnding");
            e.consume(l);
            e.exit("lineEnding");
            return f;
          }
          e.enter("chunkString", { contentType: "string" });
          return a(l);
        }
        function a(t) {
          if (t === null || t === 91 || t === 93 || A(t) || o++ > 999) {
            e.exit("chunkString");
            return f(t);
          }
          e.consume(t);
          if (!s) s = !C(t);
          return t === 92 ? d : a;
        }
        function d(t) {
          if (t === 91 || t === 92 || t === 93) {
            e.consume(t);
            o++;
            return a;
          }
          return a(t);
        }
      }
      function Se(e, t, n, r, i, u) {
        let c;
        return o;
        function o(t) {
          if (t === 34 || t === 39 || t === 40) {
            e.enter(r);
            e.enter(i);
            e.consume(t);
            e.exit(i);
            c = t === 40 ? 41 : t;
            return s;
          }
          return n(t);
        }
        function s(n) {
          if (n === c) {
            e.enter(i);
            e.consume(n);
            e.exit(i);
            e.exit(r);
            return t;
          }
          e.enter(u);
          return l(n);
        }
        function l(t) {
          if (t === c) {
            e.exit(u);
            return s(c);
          }
          if (t === null) {
            return n(t);
          }
          if (A(t)) {
            e.enter("lineEnding");
            e.consume(t);
            e.exit("lineEnding");
            return D(e, l, "linePrefix");
          }
          e.enter("chunkString", { contentType: "string" });
          return f(t);
        }
        function f(t) {
          if (t === c || t === null || A(t)) {
            e.exit("chunkString");
            return l(t);
          }
          e.consume(t);
          return t === 92 ? a : f;
        }
        function a(t) {
          if (t === c || t === 92) {
            e.consume(t);
            return f;
          }
          return f(t);
        }
      }
      function we(e, t) {
        let n;
        return r;
        function r(i) {
          if (A(i)) {
            e.enter("lineEnding");
            e.consume(i);
            e.exit("lineEnding");
            n = true;
            return r;
          }
          if (C(i)) {
            return D(e, r, n ? "linePrefix" : "lineSuffix")(i);
          }
          return t(i);
        }
      }
      function Ee(e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      }
      const ve = { name: "definition", tokenize: Ie };
      const Ae = { tokenize: Ce, partial: true };
      function Ie(e, t, n) {
        const r = this;
        let i;
        return u;
        function u(t) {
          e.enter("definition");
          return c(t);
        }
        function c(t) {
          return be.call(r, e, o, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
        }
        function o(t) {
          i = Ee(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1));
          if (t === 58) {
            e.enter("definitionMarker");
            e.consume(t);
            e.exit("definitionMarker");
            return s;
          }
          return n(t);
        }
        function s(t) {
          return I(t) ? we(e, l)(t) : l(t);
        }
        function l(t) {
          return Fe(
            e,
            f,
            n,
            "definitionDestination",
            "definitionDestinationLiteral",
            "definitionDestinationLiteralMarker",
            "definitionDestinationRaw",
            "definitionDestinationString"
          )(t);
        }
        function f(t) {
          return e.attempt(Ae, a, a)(t);
        }
        function a(t) {
          return C(t) ? D(e, d, "whitespace")(t) : d(t);
        }
        function d(u) {
          if (u === null || A(u)) {
            e.exit("definition");
            r.parser.defined.push(i);
            return t(u);
          }
          return n(u);
        }
      }
      function Ce(e, t, n) {
        return r;
        function r(t) {
          return I(t) ? we(e, i)(t) : n(t);
        }
        function i(t) {
          return Se(e, u, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
        }
        function u(t) {
          return C(t) ? D(e, c, "whitespace")(t) : c(t);
        }
        function c(e) {
          return e === null || A(e) ? t(e) : n(e);
        }
      }
      const Te = { name: "codeIndented", tokenize: _e };
      const ze = { tokenize: De, partial: true };
      function _e(e, t, n) {
        const r = this;
        return i;
        function i(t) {
          e.enter("codeIndented");
          return D(e, u, "linePrefix", 4 + 1)(t);
        }
        function u(e) {
          const t = r.events[r.events.length - 1];
          return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], true).length >= 4 ? c(e) : n(e);
        }
        function c(t) {
          if (t === null) {
            return s(t);
          }
          if (A(t)) {
            return e.attempt(ze, c, s)(t);
          }
          e.enter("codeFlowValue");
          return o(t);
        }
        function o(t) {
          if (t === null || A(t)) {
            e.exit("codeFlowValue");
            return c(t);
          }
          e.consume(t);
          return o;
        }
        function s(n) {
          e.exit("codeIndented");
          return t(n);
        }
      }
      function De(e, t, n) {
        const r = this;
        return i;
        function i(t) {
          if (r.parser.lazy[r.now().line]) {
            return n(t);
          }
          if (A(t)) {
            e.enter("lineEnding");
            e.consume(t);
            e.exit("lineEnding");
            return i;
          }
          return D(e, u, "linePrefix", 4 + 1)(t);
        }
        function u(e) {
          const u = r.events[r.events.length - 1];
          return u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], true).length >= 4 ? t(e) : A(e) ? i(e) : n(e);
        }
      }
      const Be = { name: "headingAtx", tokenize: Me, resolve: Le };
      function Le(e, t) {
        let n = e.length - 2;
        let r = 3;
        let i;
        let u;
        if (e[r][1].type === "whitespace") {
          r += 2;
        }
        if (n - 2 > r && e[n][1].type === "whitespace") {
          n -= 2;
        }
        if (e[n][1].type === "atxHeadingSequence" && (r === n - 1 || (n - 4 > r && e[n - 2][1].type === "whitespace"))) {
          n -= r + 1 === n ? 2 : 4;
        }
        if (n > r) {
          i = { type: "atxHeadingText", start: e[r][1].start, end: e[n][1].end };
          u = { type: "chunkText", start: e[r][1].start, end: e[n][1].end, contentType: "text" };
          f(e, r, n - r + 1, [
            ["enter", i, t],
            ["enter", u, t],
            ["exit", u, t],
            ["exit", i, t],
          ]);
        }
        return e;
      }
      function Me(e, t, n) {
        let r = 0;
        return i;
        function i(t) {
          e.enter("atxHeading");
          return u(t);
        }
        function u(t) {
          e.enter("atxHeadingSequence");
          return c(t);
        }
        function c(t) {
          if (t === 35 && r++ < 6) {
            e.consume(t);
            return c;
          }
          if (t === null || I(t)) {
            e.exit("atxHeadingSequence");
            return o(t);
          }
          return n(t);
        }
        function o(n) {
          if (n === 35) {
            e.enter("atxHeadingSequence");
            return s(n);
          }
          if (n === null || A(n)) {
            e.exit("atxHeading");
            return t(n);
          }
          if (C(n)) {
            return D(e, o, "whitespace")(n);
          }
          e.enter("atxHeadingText");
          return l(n);
        }
        function s(t) {
          if (t === 35) {
            e.consume(t);
            return s;
          }
          e.exit("atxHeadingSequence");
          return o(t);
        }
        function l(t) {
          if (t === null || t === 35 || I(t)) {
            e.exit("atxHeadingText");
            return o(t);
          }
          e.consume(t);
          return l;
        }
      }
      const Pe = { name: "setextUnderline", tokenize: je, resolveTo: Oe };
      function Oe(e, t) {
        let n = e.length;
        let r;
        let i;
        let u;
        while (n--) {
          if (e[n][0] === "enter") {
            if (e[n][1].type === "content") {
              r = n;
              break;
            }
            if (e[n][1].type === "paragraph") {
              i = n;
            }
          } else {
            if (e[n][1].type === "content") {
              e.splice(n, 1);
            }
            if (!u && e[n][1].type === "definition") {
              u = n;
            }
          }
        }
        const c = { type: "setextHeading", start: Object.assign({}, e[i][1].start), end: Object.assign({}, e[e.length - 1][1].end) };
        e[i][1].type = "setextHeadingText";
        if (u) {
          e.splice(i, 0, ["enter", c, t]);
          e.splice(u + 1, 0, ["exit", e[r][1], t]);
          e[r][1].end = Object.assign({}, e[u][1].end);
        } else {
          e[r][1] = c;
        }
        e.push(["exit", c, t]);
        return e;
      }
      function je(e, t, n) {
        const r = this;
        let i;
        return u;
        function u(t) {
          let u = r.events.length;
          let o;
          while (u--) {
            if (r.events[u][1].type !== "lineEnding" && r.events[u][1].type !== "linePrefix" && r.events[u][1].type !== "content") {
              o = r.events[u][1].type === "paragraph";
              break;
            }
          }
          if (!r.parser.lazy[r.now().line] && (r.interrupt || o)) {
            e.enter("setextHeadingLine");
            i = t;
            return c(t);
          }
          return n(t);
        }
        function c(t) {
          e.enter("setextHeadingLineSequence");
          return o(t);
        }
        function o(t) {
          if (t === i) {
            e.consume(t);
            return o;
          }
          e.exit("setextHeadingLineSequence");
          return C(t) ? D(e, s, "lineSuffix")(t) : s(t);
        }
        function s(r) {
          if (r === null || A(r)) {
            e.exit("setextHeadingLine");
            return t(r);
          }
          return n(r);
        }
      }
      const He = [
        "address",
        "article",
        "aside",
        "base",
        "basefont",
        "blockquote",
        "body",
        "caption",
        "center",
        "col",
        "colgroup",
        "dd",
        "details",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hr",
        "html",
        "iframe",
        "legend",
        "li",
        "link",
        "main",
        "menu",
        "menuitem",
        "nav",
        "noframes",
        "ol",
        "optgroup",
        "option",
        "p",
        "param",
        "search",
        "section",
        "summary",
        "table",
        "tbody",
        "td",
        "tfoot",
        "th",
        "thead",
        "title",
        "tr",
        "track",
        "ul",
      ];
      const Re = ["pre", "script", "style", "textarea"];
      const qe = { name: "htmlFlow", tokenize: Ue, resolveTo: Ne, concrete: true };
      const Ve = { tokenize: We, partial: true };
      const Qe = { tokenize: $e, partial: true };
      function Ne(e) {
        let t = e.length;
        while (t--) {
          if (e[t][0] === "enter" && e[t][1].type === "htmlFlow") {
            break;
          }
        }
        if (t > 1 && e[t - 2][1].type === "linePrefix") {
          e[t][1].start = e[t - 2][1].start;
          e[t + 1][1].start = e[t - 2][1].start;
          e.splice(t - 2, 2);
        }
        return e;
      }
      function Ue(e, t, n) {
        const r = this;
        let i;
        let u;
        let c;
        let o;
        let s;
        return l;
        function l(e) {
          return f(e);
        }
        function f(t) {
          e.enter("htmlFlow");
          e.enter("htmlFlowData");
          e.consume(t);
          return a;
        }
        function a(o) {
          if (o === 33) {
            e.consume(o);
            return d;
          }
          if (o === 47) {
            e.consume(o);
            u = true;
            return m;
          }
          if (o === 63) {
            e.consume(o);
            i = 3;
            return r.interrupt ? t : q;
          }
          if (y(o)) {
            e.consume(o);
            c = String.fromCharCode(o);
            return g;
          }
          return n(o);
        }
        function d(u) {
          if (u === 45) {
            e.consume(u);
            i = 2;
            return h;
          }
          if (u === 91) {
            e.consume(u);
            i = 5;
            o = 0;
            return p;
          }
          if (y(u)) {
            e.consume(u);
            i = 4;
            return r.interrupt ? t : q;
          }
          return n(u);
        }
        function h(i) {
          if (i === 45) {
            e.consume(i);
            return r.interrupt ? t : q;
          }
          return n(i);
        }
        function p(i) {
          const u = "CDATA[";
          if (i === u.charCodeAt(o++)) {
            e.consume(i);
            if (o === u.length) {
              return r.interrupt ? t : B;
            }
            return p;
          }
          return n(i);
        }
        function m(t) {
          if (y(t)) {
            e.consume(t);
            c = String.fromCharCode(t);
            return g;
          }
          return n(t);
        }
        function g(o) {
          if (o === null || o === 47 || o === 62 || I(o)) {
            const s = o === 47;
            const l = c.toLowerCase();
            if (!s && !u && Re.includes(l)) {
              i = 1;
              return r.interrupt ? t(o) : B(o);
            }
            if (He.includes(c.toLowerCase())) {
              i = 6;
              if (s) {
                e.consume(o);
                return x;
              }
              return r.interrupt ? t(o) : B(o);
            }
            i = 7;
            return r.interrupt && !r.parser.lazy[r.now().line] ? n(o) : u ? k(o) : b(o);
          }
          if (o === 45 || F(o)) {
            e.consume(o);
            c += String.fromCharCode(o);
            return g;
          }
          return n(o);
        }
        function x(i) {
          if (i === 62) {
            e.consume(i);
            return r.interrupt ? t : B;
          }
          return n(i);
        }
        function k(t) {
          if (C(t)) {
            e.consume(t);
            return k;
          }
          return _(t);
        }
        function b(t) {
          if (t === 47) {
            e.consume(t);
            return _;
          }
          if (t === 58 || t === 95 || y(t)) {
            e.consume(t);
            return S;
          }
          if (C(t)) {
            e.consume(t);
            return b;
          }
          return _(t);
        }
        function S(t) {
          if (t === 45 || t === 46 || t === 58 || t === 95 || F(t)) {
            e.consume(t);
            return S;
          }
          return w(t);
        }
        function w(t) {
          if (t === 61) {
            e.consume(t);
            return E;
          }
          if (C(t)) {
            e.consume(t);
            return w;
          }
          return b(t);
        }
        function E(t) {
          if (t === null || t === 60 || t === 61 || t === 62 || t === 96) {
            return n(t);
          }
          if (t === 34 || t === 39) {
            e.consume(t);
            s = t;
            return v;
          }
          if (C(t)) {
            e.consume(t);
            return E;
          }
          return T(t);
        }
        function v(t) {
          if (t === s) {
            e.consume(t);
            s = null;
            return z;
          }
          if (t === null || A(t)) {
            return n(t);
          }
          e.consume(t);
          return v;
        }
        function T(t) {
          if (t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || I(t)) {
            return w(t);
          }
          e.consume(t);
          return T;
        }
        function z(e) {
          if (e === 47 || e === 62 || C(e)) {
            return b(e);
          }
          return n(e);
        }
        function _(t) {
          if (t === 62) {
            e.consume(t);
            return D;
          }
          return n(t);
        }
        function D(t) {
          if (t === null || A(t)) {
            return B(t);
          }
          if (C(t)) {
            e.consume(t);
            return D;
          }
          return n(t);
        }
        function B(t) {
          if (t === 45 && i === 2) {
            e.consume(t);
            return O;
          }
          if (t === 60 && i === 1) {
            e.consume(t);
            return j;
          }
          if (t === 62 && i === 4) {
            e.consume(t);
            return V;
          }
          if (t === 63 && i === 3) {
            e.consume(t);
            return q;
          }
          if (t === 93 && i === 5) {
            e.consume(t);
            return R;
          }
          if (A(t) && (i === 6 || i === 7)) {
            e.exit("htmlFlowData");
            return e.check(Ve, Q, L)(t);
          }
          if (t === null || A(t)) {
            e.exit("htmlFlowData");
            return L(t);
          }
          e.consume(t);
          return B;
        }
        function L(t) {
          return e.check(Qe, M, Q)(t);
        }
        function M(t) {
          e.enter("lineEnding");
          e.consume(t);
          e.exit("lineEnding");
          return P;
        }
        function P(t) {
          if (t === null || A(t)) {
            return L(t);
          }
          e.enter("htmlFlowData");
          return B(t);
        }
        function O(t) {
          if (t === 45) {
            e.consume(t);
            return q;
          }
          return B(t);
        }
        function j(t) {
          if (t === 47) {
            e.consume(t);
            c = "";
            return H;
          }
          return B(t);
        }
        function H(t) {
          if (t === 62) {
            const n = c.toLowerCase();
            if (Re.includes(n)) {
              e.consume(t);
              return V;
            }
            return B(t);
          }
          if (y(t) && c.length < 8) {
            e.consume(t);
            c += String.fromCharCode(t);
            return H;
          }
          return B(t);
        }
        function R(t) {
          if (t === 93) {
            e.consume(t);
            return q;
          }
          return B(t);
        }
        function q(t) {
          if (t === 62) {
            e.consume(t);
            return V;
          }
          if (t === 45 && i === 2) {
            e.consume(t);
            return q;
          }
          return B(t);
        }
        function V(t) {
          if (t === null || A(t)) {
            e.exit("htmlFlowData");
            return Q(t);
          }
          e.consume(t);
          return V;
        }
        function Q(n) {
          e.exit("htmlFlow");
          return t(n);
        }
      }
      function $e(e, t, n) {
        const r = this;
        return i;
        function i(t) {
          if (A(t)) {
            e.enter("lineEnding");
            e.consume(t);
            e.exit("lineEnding");
            return u;
          }
          return n(t);
        }
        function u(e) {
          return r.parser.lazy[r.now().line] ? n(e) : t(e);
        }
      }
      function We(e, t, n) {
        return r;
        function r(r) {
          e.enter("lineEnding");
          e.consume(r);
          e.exit("lineEnding");
          return e.attempt(H, t, n);
        }
      }
      const Ze = { tokenize: Ge, partial: true };
      const Ye = { name: "codeFenced", tokenize: Je, concrete: true };
      function Je(e, t, n) {
        const r = this;
        const i = { tokenize: b, partial: true };
        let u = 0;
        let c = 0;
        let o;
        return s;
        function s(e) {
          return l(e);
        }
        function l(t) {
          const n = r.events[r.events.length - 1];
          u = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], true).length : 0;
          o = t;
          e.enter("codeFenced");
          e.enter("codeFencedFence");
          e.enter("codeFencedFenceSequence");
          return f(t);
        }
        function f(t) {
          if (t === o) {
            c++;
            e.consume(t);
            return f;
          }
          if (c < 3) {
            return n(t);
          }
          e.exit("codeFencedFenceSequence");
          return C(t) ? D(e, a, "whitespace")(t) : a(t);
        }
        function a(n) {
          if (n === null || A(n)) {
            e.exit("codeFencedFence");
            return r.interrupt ? t(n) : e.check(Ze, m, F)(n);
          }
          e.enter("codeFencedFenceInfo");
          e.enter("chunkString", { contentType: "string" });
          return d(n);
        }
        function d(t) {
          if (t === null || A(t)) {
            e.exit("chunkString");
            e.exit("codeFencedFenceInfo");
            return a(t);
          }
          if (C(t)) {
            e.exit("chunkString");
            e.exit("codeFencedFenceInfo");
            return D(e, h, "whitespace")(t);
          }
          if (t === 96 && t === o) {
            return n(t);
          }
          e.consume(t);
          return d;
        }
        function h(t) {
          if (t === null || A(t)) {
            return a(t);
          }
          e.enter("codeFencedFenceMeta");
          e.enter("chunkString", { contentType: "string" });
          return p(t);
        }
        function p(t) {
          if (t === null || A(t)) {
            e.exit("chunkString");
            e.exit("codeFencedFenceMeta");
            return a(t);
          }
          if (t === 96 && t === o) {
            return n(t);
          }
          e.consume(t);
          return p;
        }
        function m(t) {
          return e.attempt(i, F, g)(t);
        }
        function g(t) {
          e.enter("lineEnding");
          e.consume(t);
          e.exit("lineEnding");
          return x;
        }
        function x(t) {
          return u > 0 && C(t) ? D(e, k, "linePrefix", u + 1)(t) : k(t);
        }
        function k(t) {
          if (t === null || A(t)) {
            return e.check(Ze, m, F)(t);
          }
          e.enter("codeFlowValue");
          return y(t);
        }
        function y(t) {
          if (t === null || A(t)) {
            e.exit("codeFlowValue");
            return k(t);
          }
          e.consume(t);
          return y;
        }
        function F(n) {
          e.exit("codeFenced");
          return t(n);
        }
        function b(e, t, n) {
          let i = 0;
          return u;
          function u(t) {
            e.enter("lineEnding");
            e.consume(t);
            e.exit("lineEnding");
            return s;
          }
          function s(t) {
            e.enter("codeFencedFence");
            return C(t) ? D(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(t) : l(t);
          }
          function l(t) {
            if (t === o) {
              e.enter("codeFencedFenceSequence");
              return f(t);
            }
            return n(t);
          }
          function f(t) {
            if (t === o) {
              i++;
              e.consume(t);
              return f;
            }
            if (i >= c) {
              e.exit("codeFencedFenceSequence");
              return C(t) ? D(e, a, "whitespace")(t) : a(t);
            }
            return n(t);
          }
          function a(r) {
            if (r === null || A(r)) {
              e.exit("codeFencedFence");
              return t(r);
            }
            return n(r);
          }
        }
      }
      function Ge(e, t, n) {
        const r = this;
        return i;
        function i(t) {
          if (t === null) {
            return n(t);
          }
          e.enter("lineEnding");
          e.consume(t);
          e.exit("lineEnding");
          return u;
        }
        function u(e) {
          return r.parser.lazy[r.now().line] ? n(e) : t(e);
        }
      }
      const Ke = document.createElement("i");
      function Xe(e) {
        const t = "&" + e + ";";
        Ke.innerHTML = t;
        const n = Ke.textContent;
        if (n.charCodeAt(n.length - 1) === 59 && e !== "semi") {
          return false;
        }
        return n === t ? false : n;
      }
      const et = { name: "characterReference", tokenize: tt };
      function tt(e, t, n) {
        const r = this;
        let i = 0;
        let u;
        let c;
        return o;
        function o(t) {
          e.enter("characterReference");
          e.enter("characterReferenceMarker");
          e.consume(t);
          e.exit("characterReferenceMarker");
          return s;
        }
        function s(t) {
          if (t === 35) {
            e.enter("characterReferenceMarkerNumeric");
            e.consume(t);
            e.exit("characterReferenceMarkerNumeric");
            return l;
          }
          e.enter("characterReferenceValue");
          u = 31;
          c = F;
          return f(t);
        }
        function l(t) {
          if (t === 88 || t === 120) {
            e.enter("characterReferenceMarkerHexadecimal");
            e.consume(t);
            e.exit("characterReferenceMarkerHexadecimal");
            e.enter("characterReferenceValue");
            u = 6;
            c = E;
            return f;
          }
          e.enter("characterReferenceValue");
          u = 7;
          c = w;
          return f(t);
        }
        function f(o) {
          if (o === 59 && i) {
            const i = e.exit("characterReferenceValue");
            if (c === F && !Xe(r.sliceSerialize(i))) {
              return n(o);
            }
            e.enter("characterReferenceMarker");
            e.consume(o);
            e.exit("characterReferenceMarker");
            e.exit("characterReference");
            return t;
          }
          if (c(o) && i++ < u) {
            e.consume(o);
            return f;
          }
          return n(o);
        }
      }
      const nt = { name: "characterEscape", tokenize: rt };
      function rt(e, t, n) {
        return r;
        function r(t) {
          e.enter("characterEscape");
          e.enter("escapeMarker");
          e.consume(t);
          e.exit("escapeMarker");
          return i;
        }
        function i(r) {
          if (v(r)) {
            e.enter("characterEscapeValue");
            e.consume(r);
            e.exit("characterEscapeValue");
            e.exit("characterEscape");
            return t;
          }
          return n(r);
        }
      }
      const it = { name: "lineEnding", tokenize: ut };
      function ut(e, t) {
        return n;
        function n(n) {
          e.enter("lineEnding");
          e.consume(n);
          e.exit("lineEnding");
          return D(e, t, "linePrefix");
        }
      }
      const ct = { name: "labelEnd", tokenize: dt, resolveTo: at, resolveAll: ft };
      const ot = { tokenize: ht };
      const st = { tokenize: pt };
      const lt = { tokenize: mt };
      function ft(e) {
        let t = -1;
        while (++t < e.length) {
          const n = e[t][1];
          if (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") {
            e.splice(t + 1, n.type === "labelImage" ? 4 : 2);
            n.type = "data";
            t++;
          }
        }
        return e;
      }
      function at(e, t) {
        let n = e.length;
        let r = 0;
        let i;
        let u;
        let c;
        let o;
        while (n--) {
          i = e[n][1];
          if (u) {
            if (i.type === "link" || (i.type === "labelLink" && i._inactive)) {
              break;
            }
            if (e[n][0] === "enter" && i.type === "labelLink") {
              i._inactive = true;
            }
          } else if (c) {
            if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced) {
              u = n;
              if (i.type !== "labelLink") {
                r = 2;
                break;
              }
            }
          } else if (i.type === "labelEnd") {
            c = n;
          }
        }
        const s = {
          type: e[u][1].type === "labelLink" ? "link" : "image",
          start: Object.assign({}, e[u][1].start),
          end: Object.assign({}, e[e.length - 1][1].end),
        };
        const l = { type: "label", start: Object.assign({}, e[u][1].start), end: Object.assign({}, e[c][1].end) };
        const d = { type: "labelText", start: Object.assign({}, e[u + r + 2][1].end), end: Object.assign({}, e[c - 2][1].start) };
        o = [
          ["enter", s, t],
          ["enter", l, t],
        ];
        o = a(o, e.slice(u + 1, u + r + 3));
        o = a(o, [["enter", d, t]]);
        o = a(o, ne(t.parser.constructs.insideSpan.null, e.slice(u + r + 4, c - 3), t));
        o = a(o, [["exit", d, t], e[c - 2], e[c - 1], ["exit", l, t]]);
        o = a(o, e.slice(c + 1));
        o = a(o, [["exit", s, t]]);
        f(e, u, e.length, o);
        return e;
      }
      function dt(e, t, n) {
        const r = this;
        let i = r.events.length;
        let u;
        let c;
        while (i--) {
          if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
            u = r.events[i][1];
            break;
          }
        }
        return o;
        function o(t) {
          if (!u) {
            return n(t);
          }
          if (u._inactive) {
            return a(t);
          }
          c = r.parser.defined.includes(Ee(r.sliceSerialize({ start: u.end, end: r.now() })));
          e.enter("labelEnd");
          e.enter("labelMarker");
          e.consume(t);
          e.exit("labelMarker");
          e.exit("labelEnd");
          return s;
        }
        function s(t) {
          if (t === 40) {
            return e.attempt(ot, f, c ? f : a)(t);
          }
          if (t === 91) {
            return e.attempt(st, f, c ? l : a)(t);
          }
          return c ? f(t) : a(t);
        }
        function l(t) {
          return e.attempt(lt, f, a)(t);
        }
        function f(e) {
          return t(e);
        }
        function a(e) {
          u._balanced = true;
          return n(e);
        }
      }
      function ht(e, t, n) {
        return r;
        function r(t) {
          e.enter("resource");
          e.enter("resourceMarker");
          e.consume(t);
          e.exit("resourceMarker");
          return i;
        }
        function i(t) {
          return I(t) ? we(e, u)(t) : u(t);
        }
        function u(t) {
          if (t === 41) {
            return f(t);
          }
          return Fe(
            e,
            c,
            o,
            "resourceDestination",
            "resourceDestinationLiteral",
            "resourceDestinationLiteralMarker",
            "resourceDestinationRaw",
            "resourceDestinationString",
            32
          )(t);
        }
        function c(t) {
          return I(t) ? we(e, s)(t) : f(t);
        }
        function o(e) {
          return n(e);
        }
        function s(t) {
          if (t === 34 || t === 39 || t === 40) {
            return Se(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t);
          }
          return f(t);
        }
        function l(t) {
          return I(t) ? we(e, f)(t) : f(t);
        }
        function f(r) {
          if (r === 41) {
            e.enter("resourceMarker");
            e.consume(r);
            e.exit("resourceMarker");
            e.exit("resource");
            return t;
          }
          return n(r);
        }
      }
      function pt(e, t, n) {
        const r = this;
        return i;
        function i(t) {
          return be.call(r, e, u, c, "reference", "referenceMarker", "referenceString")(t);
        }
        function u(e) {
          return r.parser.defined.includes(Ee(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
        }
        function c(e) {
          return n(e);
        }
      }
      function mt(e, t, n) {
        return r;
        function r(t) {
          e.enter("reference");
          e.enter("referenceMarker");
          e.consume(t);
          e.exit("referenceMarker");
          return i;
        }
        function i(r) {
          if (r === 93) {
            e.enter("referenceMarker");
            e.consume(r);
            e.exit("referenceMarker");
            e.exit("reference");
            return t;
          }
          return n(r);
        }
      }
      const gt = { name: "labelStartImage", tokenize: xt, resolveAll: ct.resolveAll };
      function xt(e, t, n) {
        const r = this;
        return i;
        function i(t) {
          e.enter("labelImage");
          e.enter("labelImageMarker");
          e.consume(t);
          e.exit("labelImageMarker");
          return u;
        }
        function u(t) {
          if (t === 91) {
            e.enter("labelMarker");
            e.consume(t);
            e.exit("labelMarker");
            e.exit("labelImage");
            return c;
          }
          return n(t);
        }
        function c(e) {
          return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
        }
      }
      function kt(e) {
        if (e === null || I(e) || z(e)) {
          return 1;
        }
        if (T(e)) {
          return 2;
        }
      }
      const yt = { name: "attention", tokenize: bt, resolveAll: Ft };
      function Ft(e, t) {
        let n = -1;
        let r;
        let i;
        let u;
        let c;
        let o;
        let s;
        let l;
        let d;
        while (++n < e.length) {
          if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
            r = n;
            while (r--) {
              if (
                e[r][0] === "exit" &&
                e[r][1].type === "attentionSequence" &&
                e[r][1]._open &&
                t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)
              ) {
                if (
                  (e[r][1]._close || e[n][1]._open) &&
                  (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
                  !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)
                ) {
                  continue;
                }
                s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
                const h = Object.assign({}, e[r][1].end);
                const p = Object.assign({}, e[n][1].start);
                St(h, -s);
                St(p, s);
                c = { type: s > 1 ? "strongSequence" : "emphasisSequence", start: h, end: Object.assign({}, e[r][1].end) };
                o = { type: s > 1 ? "strongSequence" : "emphasisSequence", start: Object.assign({}, e[n][1].start), end: p };
                u = { type: s > 1 ? "strongText" : "emphasisText", start: Object.assign({}, e[r][1].end), end: Object.assign({}, e[n][1].start) };
                i = { type: s > 1 ? "strong" : "emphasis", start: Object.assign({}, c.start), end: Object.assign({}, o.end) };
                e[r][1].end = Object.assign({}, c.start);
                e[n][1].start = Object.assign({}, o.end);
                l = [];
                if (e[r][1].end.offset - e[r][1].start.offset) {
                  l = a(l, [
                    ["enter", e[r][1], t],
                    ["exit", e[r][1], t],
                  ]);
                }
                l = a(l, [
                  ["enter", i, t],
                  ["enter", c, t],
                  ["exit", c, t],
                  ["enter", u, t],
                ]);
                l = a(l, ne(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t));
                l = a(l, [
                  ["exit", u, t],
                  ["enter", o, t],
                  ["exit", o, t],
                  ["exit", i, t],
                ]);
                if (e[n][1].end.offset - e[n][1].start.offset) {
                  d = 2;
                  l = a(l, [
                    ["enter", e[n][1], t],
                    ["exit", e[n][1], t],
                  ]);
                } else {
                  d = 0;
                }
                f(e, r - 1, n - r + 3, l);
                n = r + l.length - d - 2;
                break;
              }
            }
          }
        }
        n = -1;
        while (++n < e.length) {
          if (e[n][1].type === "attentionSequence") {
            e[n][1].type = "data";
          }
        }
        return e;
      }
      function bt(e, t) {
        const n = this.parser.constructs.attentionMarkers.null;
        const r = this.previous;
        const i = kt(r);
        let u;
        return c;
        function c(t) {
          u = t;
          e.enter("attentionSequence");
          return o(t);
        }
        function o(c) {
          if (c === u) {
            e.consume(c);
            return o;
          }
          const s = e.exit("attentionSequence");
          const l = kt(c);
          const f = !l || (l === 2 && i) || n.includes(c);
          const a = !i || (i === 2 && l) || n.includes(r);
          s._open = Boolean(u === 42 ? f : f && (i || !a));
          s._close = Boolean(u === 42 ? a : a && (l || !f));
          return t(c);
        }
      }
      function St(e, t) {
        e.column += t;
        e.offset += t;
        e._bufferIndex += t;
      }
      const wt = { name: "autolink", tokenize: Et };
      function Et(e, t, n) {
        let r = 0;
        return i;
        function i(t) {
          e.enter("autolink");
          e.enter("autolinkMarker");
          e.consume(t);
          e.exit("autolinkMarker");
          e.enter("autolinkProtocol");
          return u;
        }
        function u(t) {
          if (y(t)) {
            e.consume(t);
            return c;
          }
          return l(t);
        }
        function c(e) {
          if (e === 43 || e === 45 || e === 46 || F(e)) {
            r = 1;
            return o(e);
          }
          return l(e);
        }
        function o(t) {
          if (t === 58) {
            e.consume(t);
            r = 0;
            return s;
          }
          if ((t === 43 || t === 45 || t === 46 || F(t)) && r++ < 32) {
            e.consume(t);
            return o;
          }
          r = 0;
          return l(t);
        }
        function s(r) {
          if (r === 62) {
            e.exit("autolinkProtocol");
            e.enter("autolinkMarker");
            e.consume(r);
            e.exit("autolinkMarker");
            e.exit("autolink");
            return t;
          }
          if (r === null || r === 32 || r === 60 || S(r)) {
            return n(r);
          }
          e.consume(r);
          return s;
        }
        function l(t) {
          if (t === 64) {
            e.consume(t);
            return f;
          }
          if (b(t)) {
            e.consume(t);
            return l;
          }
          return n(t);
        }
        function f(e) {
          return F(e) ? a(e) : n(e);
        }
        function a(n) {
          if (n === 46) {
            e.consume(n);
            r = 0;
            return f;
          }
          if (n === 62) {
            e.exit("autolinkProtocol").type = "autolinkEmail";
            e.enter("autolinkMarker");
            e.consume(n);
            e.exit("autolinkMarker");
            e.exit("autolink");
            return t;
          }
          return d(n);
        }
        function d(t) {
          if ((t === 45 || F(t)) && r++ < 63) {
            const n = t === 45 ? d : a;
            e.consume(t);
            return n;
          }
          return n(t);
        }
      }
      const vt = { name: "htmlText", tokenize: At };
      function At(e, t, n) {
        const r = this;
        let i;
        let u;
        let c;
        return o;
        function o(t) {
          e.enter("htmlText");
          e.enter("htmlTextData");
          e.consume(t);
          return s;
        }
        function s(t) {
          if (t === 33) {
            e.consume(t);
            return l;
          }
          if (t === 47) {
            e.consume(t);
            return w;
          }
          if (t === 63) {
            e.consume(t);
            return b;
          }
          if (y(t)) {
            e.consume(t);
            return T;
          }
          return n(t);
        }
        function l(t) {
          if (t === 45) {
            e.consume(t);
            return f;
          }
          if (t === 91) {
            e.consume(t);
            u = 0;
            return p;
          }
          if (y(t)) {
            e.consume(t);
            return k;
          }
          return n(t);
        }
        function f(t) {
          if (t === 45) {
            e.consume(t);
            return h;
          }
          return n(t);
        }
        function a(t) {
          if (t === null) {
            return n(t);
          }
          if (t === 45) {
            e.consume(t);
            return d;
          }
          if (A(t)) {
            c = a;
            return H(t);
          }
          e.consume(t);
          return a;
        }
        function d(t) {
          if (t === 45) {
            e.consume(t);
            return h;
          }
          return a(t);
        }
        function h(e) {
          return e === 62 ? j(e) : e === 45 ? d(e) : a(e);
        }
        function p(t) {
          const r = "CDATA[";
          if (t === r.charCodeAt(u++)) {
            e.consume(t);
            return u === r.length ? m : p;
          }
          return n(t);
        }
        function m(t) {
          if (t === null) {
            return n(t);
          }
          if (t === 93) {
            e.consume(t);
            return g;
          }
          if (A(t)) {
            c = m;
            return H(t);
          }
          e.consume(t);
          return m;
        }
        function g(t) {
          if (t === 93) {
            e.consume(t);
            return x;
          }
          return m(t);
        }
        function x(t) {
          if (t === 62) {
            return j(t);
          }
          if (t === 93) {
            e.consume(t);
            return x;
          }
          return m(t);
        }
        function k(t) {
          if (t === null || t === 62) {
            return j(t);
          }
          if (A(t)) {
            c = k;
            return H(t);
          }
          e.consume(t);
          return k;
        }
        function b(t) {
          if (t === null) {
            return n(t);
          }
          if (t === 63) {
            e.consume(t);
            return S;
          }
          if (A(t)) {
            c = b;
            return H(t);
          }
          e.consume(t);
          return b;
        }
        function S(e) {
          return e === 62 ? j(e) : b(e);
        }
        function w(t) {
          if (y(t)) {
            e.consume(t);
            return E;
          }
          return n(t);
        }
        function E(t) {
          if (t === 45 || F(t)) {
            e.consume(t);
            return E;
          }
          return v(t);
        }
        function v(t) {
          if (A(t)) {
            c = v;
            return H(t);
          }
          if (C(t)) {
            e.consume(t);
            return v;
          }
          return j(t);
        }
        function T(t) {
          if (t === 45 || F(t)) {
            e.consume(t);
            return T;
          }
          if (t === 47 || t === 62 || I(t)) {
            return z(t);
          }
          return n(t);
        }
        function z(t) {
          if (t === 47) {
            e.consume(t);
            return j;
          }
          if (t === 58 || t === 95 || y(t)) {
            e.consume(t);
            return _;
          }
          if (A(t)) {
            c = z;
            return H(t);
          }
          if (C(t)) {
            e.consume(t);
            return z;
          }
          return j(t);
        }
        function _(t) {
          if (t === 45 || t === 46 || t === 58 || t === 95 || F(t)) {
            e.consume(t);
            return _;
          }
          return B(t);
        }
        function B(t) {
          if (t === 61) {
            e.consume(t);
            return L;
          }
          if (A(t)) {
            c = B;
            return H(t);
          }
          if (C(t)) {
            e.consume(t);
            return B;
          }
          return z(t);
        }
        function L(t) {
          if (t === null || t === 60 || t === 61 || t === 62 || t === 96) {
            return n(t);
          }
          if (t === 34 || t === 39) {
            e.consume(t);
            i = t;
            return M;
          }
          if (A(t)) {
            c = L;
            return H(t);
          }
          if (C(t)) {
            e.consume(t);
            return L;
          }
          e.consume(t);
          return P;
        }
        function M(t) {
          if (t === i) {
            e.consume(t);
            i = undefined;
            return O;
          }
          if (t === null) {
            return n(t);
          }
          if (A(t)) {
            c = M;
            return H(t);
          }
          e.consume(t);
          return M;
        }
        function P(t) {
          if (t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96) {
            return n(t);
          }
          if (t === 47 || t === 62 || I(t)) {
            return z(t);
          }
          e.consume(t);
          return P;
        }
        function O(e) {
          if (e === 47 || e === 62 || I(e)) {
            return z(e);
          }
          return n(e);
        }
        function j(r) {
          if (r === 62) {
            e.consume(r);
            e.exit("htmlTextData");
            e.exit("htmlText");
            return t;
          }
          return n(r);
        }
        function H(t) {
          e.exit("htmlTextData");
          e.enter("lineEnding");
          e.consume(t);
          e.exit("lineEnding");
          return R;
        }
        function R(t) {
          return C(t) ? D(e, q, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(t) : q(t);
        }
        function q(t) {
          e.enter("htmlTextData");
          return c(t);
        }
      }
      const It = { name: "labelStartLink", tokenize: Ct, resolveAll: ct.resolveAll };
      function Ct(e, t, n) {
        const r = this;
        return i;
        function i(t) {
          e.enter("labelLink");
          e.enter("labelMarker");
          e.consume(t);
          e.exit("labelMarker");
          e.exit("labelLink");
          return u;
        }
        function u(e) {
          return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
        }
      }
      const Tt = { name: "hardBreakEscape", tokenize: zt };
      function zt(e, t, n) {
        return r;
        function r(t) {
          e.enter("hardBreakEscape");
          e.consume(t);
          return i;
        }
        function i(r) {
          if (A(r)) {
            e.exit("hardBreakEscape");
            return t(r);
          }
          return n(r);
        }
      }
      const _t = { name: "codeText", tokenize: Lt, resolve: Dt, previous: Bt };
      function Dt(e) {
        let t = e.length - 4;
        let n = 3;
        let r;
        let i;
        if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
          r = n;
          while (++r < t) {
            if (e[r][1].type === "codeTextData") {
              e[n][1].type = "codeTextPadding";
              e[t][1].type = "codeTextPadding";
              n += 2;
              t -= 2;
              break;
            }
          }
        }
        r = n - 1;
        t++;
        while (++r <= t) {
          if (i === undefined) {
            if (r !== t && e[r][1].type !== "lineEnding") {
              i = r;
            }
          } else if (r === t || e[r][1].type === "lineEnding") {
            e[i][1].type = "codeTextData";
            if (r !== i + 2) {
              e[i][1].end = e[r - 1][1].end;
              e.splice(i + 2, r - i - 2);
              t -= r - i - 2;
              r = i + 2;
            }
            i = undefined;
          }
        }
        return e;
      }
      function Bt(e) {
        return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
      }
      function Lt(e, t, n) {
        const r = this;
        let i = 0;
        let u;
        let c;
        return o;
        function o(t) {
          e.enter("codeText");
          e.enter("codeTextSequence");
          return s(t);
        }
        function s(t) {
          if (t === 96) {
            e.consume(t);
            i++;
            return s;
          }
          e.exit("codeTextSequence");
          return l(t);
        }
        function l(t) {
          if (t === null) {
            return n(t);
          }
          if (t === 32) {
            e.enter("space");
            e.consume(t);
            e.exit("space");
            return l;
          }
          if (t === 96) {
            c = e.enter("codeTextSequence");
            u = 0;
            return a(t);
          }
          if (A(t)) {
            e.enter("lineEnding");
            e.consume(t);
            e.exit("lineEnding");
            return l;
          }
          e.enter("codeTextData");
          return f(t);
        }
        function f(t) {
          if (t === null || t === 32 || t === 96 || A(t)) {
            e.exit("codeTextData");
            return l(t);
          }
          e.consume(t);
          return f;
        }
        function a(n) {
          if (n === 96) {
            e.consume(n);
            u++;
            return a;
          }
          if (u === i) {
            e.exit("codeTextSequence");
            e.exit("codeText");
            return t(n);
          }
          c.type = "codeTextData";
          return f(n);
        }
      }
      const Mt = {
        [42]: se,
        [43]: se,
        [45]: se,
        [48]: se,
        [49]: se,
        [50]: se,
        [51]: se,
        [52]: se,
        [53]: se,
        [54]: se,
        [55]: se,
        [56]: se,
        [57]: se,
        [62]: ge,
      };
      const Pt = { [91]: ve };
      const Ot = { [-2]: Te, [-1]: Te, [32]: Te };
      const jt = { [35]: Be, [42]: ce, [45]: [Pe, ce], [60]: qe, [61]: Pe, [95]: ce, [96]: Ye, [126]: Ye };
      const Ht = { [38]: et, [92]: nt };
      const Rt = {
        [-5]: it,
        [-4]: it,
        [-3]: it,
        [33]: gt,
        [38]: et,
        [42]: yt,
        [60]: [wt, vt],
        [91]: It,
        [92]: [Tt, nt],
        [93]: ct,
        [95]: yt,
        [96]: _t,
      };
      const qt = { null: [yt, J] };
      const Vt = { null: [42, 95] };
      const Qt = { null: [] };
      function Nt(e) {
        const t = e || {};
        const n = h([r, ...(t.extensions || [])]);
        const i = { defined: [], lazy: {}, constructs: n, content: u(B), document: u(M), flow: u(Z), string: u(G), text: u(K) };
        return i;
        function u(e) {
          return t;
          function t(t) {
            return re(i, e, t);
          }
        }
      }
      const Ut = /[\0\t\n\r]/g;
      function $t() {
        let e = 1;
        let t = "";
        let n = true;
        let r;
        return i;
        function i(i, u, c) {
          const o = [];
          let s;
          let l;
          let f;
          let a;
          let d;
          i = t + i.toString(u);
          f = 0;
          t = "";
          if (n) {
            if (i.charCodeAt(0) === 65279) {
              f++;
            }
            n = undefined;
          }
          while (f < i.length) {
            Ut.lastIndex = f;
            s = Ut.exec(i);
            a = s && s.index !== undefined ? s.index : i.length;
            d = i.charCodeAt(a);
            if (!s) {
              t = i.slice(f);
              break;
            }
            if (d === 10 && f === a && r) {
              o.push(-3);
              r = undefined;
            } else {
              if (r) {
                o.push(-5);
                r = undefined;
              }
              if (f < a) {
                o.push(i.slice(f, a));
                e += a - f;
              }
              switch (d) {
                case 0: {
                  o.push(65533);
                  e++;
                  break;
                }
                case 9: {
                  l = Math.ceil(e / 4) * 4;
                  o.push(-2);
                  while (e++ < l) o.push(-1);
                  break;
                }
                case 10: {
                  o.push(-4);
                  e = 1;
                  break;
                }
                default: {
                  r = true;
                  e = 1;
                }
              }
            }
            f = a + 1;
          }
          if (c) {
            if (r) o.push(-5);
            if (t) o.push(t);
            o.push(null);
          }
          return o;
        }
      }
      function Wt(e) {
        while (!q(e)) {}
        return e;
      }
      function Zt(e, t) {
        const n = Number.parseInt(e, t);
        if (
          n < 9 ||
          n === 11 ||
          (n > 13 && n < 32) ||
          (n > 126 && n < 160) ||
          (n > 55295 && n < 57344) ||
          (n > 64975 && n < 65008) ||
          (n & 65535) === 65535 ||
          (n & 65535) === 65534 ||
          n > 1114111
        ) {
          return "�";
        }
        return String.fromCharCode(n);
      }
      const Yt = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function Jt(e) {
        return e.replace(Yt, Gt);
      }
      function Gt(e, t, n) {
        if (t) {
          return t;
        }
        const r = n.charCodeAt(0);
        if (r === 35) {
          const e = n.charCodeAt(1);
          const t = e === 120 || e === 88;
          return Zt(n.slice(t ? 2 : 1), t ? 16 : 10);
        }
        return Xe(n) || e;
      }
      function Kt(e) {
        if (!e || typeof e !== "object") {
          return "";
        }
        if ("position" in e || "type" in e) {
          return en(e.position);
        }
        if ("start" in e || "end" in e) {
          return en(e);
        }
        if ("line" in e || "column" in e) {
          return Xt(e);
        }
        return "";
      }
      function Xt(e) {
        return tn(e && e.line) + ":" + tn(e && e.column);
      }
      function en(e) {
        return Xt(e && e.start) + "-" + Xt(e && e.end);
      }
      function tn(e) {
        return e && typeof e === "number" ? e : 1;
      }
      const nn = {}.hasOwnProperty;
      const rn = function (e, t, n) {
        if (typeof t !== "string") {
          n = t;
          t = undefined;
        }
        return un(n)(
          Wt(
            Nt(n)
              .document()
              .write($t()(e, t, true))
          )
        );
      };
      function un(e) {
        const t = {
          transforms: [],
          canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
          enter: {
            autolink: s(re),
            autolinkProtocol: C,
            autolinkEmail: C,
            atxHeading: s(X),
            blockQuote: s(Z),
            characterEscape: C,
            characterReference: C,
            codeFenced: s(Y),
            codeFencedFenceInfo: l,
            codeFencedFenceMeta: l,
            codeIndented: s(Y, l),
            codeText: s(J, l),
            codeTextData: C,
            data: C,
            codeFlowValue: C,
            definition: s(G),
            definitionDestinationString: l,
            definitionLabelString: l,
            definitionTitleString: l,
            emphasis: s(K),
            hardBreakEscape: s(ee),
            hardBreakTrailing: s(ee),
            htmlFlow: s(te, l),
            htmlFlowData: C,
            htmlText: s(te, l),
            htmlTextData: C,
            image: s(ne),
            label: l,
            link: s(re),
            listItem: s(ue),
            listItemValue: m,
            listOrdered: s(ie, p),
            listUnordered: s(ie),
            paragraph: s(ce),
            reference: V,
            referenceString: l,
            resourceDestinationString: l,
            resourceTitleString: l,
            setextHeading: s(X),
            strong: s(oe),
            thematicBreak: s(le),
          },
          exit: {
            atxHeading: a(),
            atxHeadingSequence: E,
            autolink: a(),
            autolinkEmail: W,
            autolinkProtocol: $,
            blockQuote: a(),
            characterEscapeValue: T,
            characterReferenceMarkerHexadecimal: N,
            characterReferenceMarkerNumeric: N,
            characterReferenceValue: U,
            codeFenced: a(y),
            codeFencedFence: k,
            codeFencedFenceInfo: g,
            codeFencedFenceMeta: x,
            codeFlowValue: T,
            codeIndented: a(F),
            codeText: a(L),
            codeTextData: T,
            data: T,
            definition: a(),
            definitionDestinationString: w,
            definitionLabelString: b,
            definitionTitleString: S,
            emphasis: a(),
            hardBreakEscape: a(_),
            hardBreakTrailing: a(_),
            htmlFlow: a(D),
            htmlFlowData: T,
            htmlText: a(B),
            htmlTextData: T,
            image: a(P),
            label: j,
            labelText: O,
            lineEnding: z,
            link: a(M),
            listItem: a(),
            listOrdered: a(),
            listUnordered: a(),
            paragraph: a(),
            referenceString: Q,
            resourceDestinationString: H,
            resourceTitleString: R,
            resource: q,
            setextHeading: a(I),
            setextHeadingLineSequence: A,
            setextHeadingText: v,
            strong: a(),
            thematicBreak: a(),
          },
        };
        on(t, (e || {}).mdastExtensions || []);
        const n = {};
        return r;
        function r(e) {
          let n = { type: "root", children: [] };
          const r = { stack: [n], tokenStack: [], config: t, enter: f, exit: d, buffer: l, resume: h, setData: u, getData: o };
          const c = [];
          let s = -1;
          while (++s < e.length) {
            if (e[s][1].type === "listOrdered" || e[s][1].type === "listUnordered") {
              if (e[s][0] === "enter") {
                c.push(s);
              } else {
                const t = c.pop();
                s = i(e, t, s);
              }
            }
          }
          s = -1;
          while (++s < e.length) {
            const n = t[e[s][0]];
            if (nn.call(n, e[s][1].type)) {
              n[e[s][1].type].call(Object.assign({ sliceSerialize: e[s][2].sliceSerialize }, r), e[s][1]);
            }
          }
          if (r.tokenStack.length > 0) {
            const e = r.tokenStack[r.tokenStack.length - 1];
            const t = e[1] || ln;
            t.call(r, undefined, e[0]);
          }
          n.position = {
            start: cn(e.length > 0 ? e[0][1].start : { line: 1, column: 1, offset: 0 }),
            end: cn(e.length > 0 ? e[e.length - 2][1].end : { line: 1, column: 1, offset: 0 }),
          };
          s = -1;
          while (++s < t.transforms.length) {
            n = t.transforms[s](n) || n;
          }
          return n;
        }
        function i(e, t, n) {
          let r = t - 1;
          let i = -1;
          let u = false;
          let c;
          let o;
          let s;
          let l;
          while (++r <= n) {
            const t = e[r];
            if (t[1].type === "listUnordered" || t[1].type === "listOrdered" || t[1].type === "blockQuote") {
              if (t[0] === "enter") {
                i++;
              } else {
                i--;
              }
              l = undefined;
            } else if (t[1].type === "lineEndingBlank") {
              if (t[0] === "enter") {
                if (c && !l && !i && !s) {
                  s = r;
                }
                l = undefined;
              }
            } else if (
              t[1].type === "linePrefix" ||
              t[1].type === "listItemValue" ||
              t[1].type === "listItemMarker" ||
              t[1].type === "listItemPrefix" ||
              t[1].type === "listItemPrefixWhitespace"
            ) {
            } else {
              l = undefined;
            }
            if (
              (!i && t[0] === "enter" && t[1].type === "listItemPrefix") ||
              (i === -1 && t[0] === "exit" && (t[1].type === "listUnordered" || t[1].type === "listOrdered"))
            ) {
              if (c) {
                let i = r;
                o = undefined;
                while (i--) {
                  const t = e[i];
                  if (t[1].type === "lineEnding" || t[1].type === "lineEndingBlank") {
                    if (t[0] === "exit") continue;
                    if (o) {
                      e[o][1].type = "lineEndingBlank";
                      u = true;
                    }
                    t[1].type = "lineEnding";
                    o = i;
                  } else if (
                    t[1].type === "linePrefix" ||
                    t[1].type === "blockQuotePrefix" ||
                    t[1].type === "blockQuotePrefixWhitespace" ||
                    t[1].type === "blockQuoteMarker" ||
                    t[1].type === "listItemIndent"
                  ) {
                  } else {
                    break;
                  }
                }
                if (s && (!o || s < o)) {
                  c._spread = true;
                }
                c.end = Object.assign({}, o ? e[o][1].start : t[1].end);
                e.splice(o || r, 0, ["exit", c, t[2]]);
                r++;
                n++;
              }
              if (t[1].type === "listItemPrefix") {
                c = { type: "listItem", _spread: false, start: Object.assign({}, t[1].start), end: undefined };
                e.splice(r, 0, ["enter", c, t[2]]);
                r++;
                n++;
                s = undefined;
                l = true;
              }
            }
          }
          e[t][1]._spread = u;
          return n;
        }
        function u(e, t) {
          n[e] = t;
        }
        function o(e) {
          return n[e];
        }
        function s(e, t) {
          return n;
          function n(n) {
            f.call(this, e(n), n);
            if (t) t.call(this, n);
          }
        }
        function l() {
          this.stack.push({ type: "fragment", children: [] });
        }
        function f(e, t, n) {
          const r = this.stack[this.stack.length - 1];
          r.children.push(e);
          this.stack.push(e);
          this.tokenStack.push([t, n]);
          e.position = { start: cn(t.start) };
          return e;
        }
        function a(e) {
          return t;
          function t(t) {
            if (e) e.call(this, t);
            d.call(this, t);
          }
        }
        function d(e, t) {
          const n = this.stack.pop();
          const r = this.tokenStack.pop();
          if (!r) {
            throw new Error("Cannot close `" + e.type + "` (" + Kt({ start: e.start, end: e.end }) + "): it’s not open");
          } else if (r[0].type !== e.type) {
            if (t) {
              t.call(this, e, r[0]);
            } else {
              const t = r[1] || ln;
              t.call(this, e, r[0]);
            }
          }
          n.position.end = cn(e.end);
          return n;
        }
        function h() {
          return c(this.stack.pop());
        }
        function p() {
          u("expectingFirstListItemValue", true);
        }
        function m(e) {
          if (o("expectingFirstListItemValue")) {
            const t = this.stack[this.stack.length - 2];
            t.start = Number.parseInt(this.sliceSerialize(e), 10);
            u("expectingFirstListItemValue");
          }
        }
        function g() {
          const e = this.resume();
          const t = this.stack[this.stack.length - 1];
          t.lang = e;
        }
        function x() {
          const e = this.resume();
          const t = this.stack[this.stack.length - 1];
          t.meta = e;
        }
        function k() {
          if (o("flowCodeInside")) return;
          this.buffer();
          u("flowCodeInside", true);
        }
        function y() {
          const e = this.resume();
          const t = this.stack[this.stack.length - 1];
          t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
          u("flowCodeInside");
        }
        function F() {
          const e = this.resume();
          const t = this.stack[this.stack.length - 1];
          t.value = e.replace(/(\r?\n|\r)$/g, "");
        }
        function b(e) {
          const t = this.resume();
          const n = this.stack[this.stack.length - 1];
          n.label = t;
          n.identifier = Ee(this.sliceSerialize(e)).toLowerCase();
        }
        function S() {
          const e = this.resume();
          const t = this.stack[this.stack.length - 1];
          t.title = e;
        }
        function w() {
          const e = this.resume();
          const t = this.stack[this.stack.length - 1];
          t.url = e;
        }
        function E(e) {
          const t = this.stack[this.stack.length - 1];
          if (!t.depth) {
            const n = this.sliceSerialize(e).length;
            t.depth = n;
          }
        }
        function v() {
          u("setextHeadingSlurpLineEnding", true);
        }
        function A(e) {
          const t = this.stack[this.stack.length - 1];
          t.depth = this.sliceSerialize(e).charCodeAt(0) === 61 ? 1 : 2;
        }
        function I() {
          u("setextHeadingSlurpLineEnding");
        }
        function C(e) {
          const t = this.stack[this.stack.length - 1];
          let n = t.children[t.children.length - 1];
          if (!n || n.type !== "text") {
            n = se();
            n.position = { start: cn(e.start) };
            t.children.push(n);
          }
          this.stack.push(n);
        }
        function T(e) {
          const t = this.stack.pop();
          t.value += this.sliceSerialize(e);
          t.position.end = cn(e.end);
        }
        function z(e) {
          const n = this.stack[this.stack.length - 1];
          if (o("atHardBreak")) {
            const t = n.children[n.children.length - 1];
            t.position.end = cn(e.end);
            u("atHardBreak");
            return;
          }
          if (!o("setextHeadingSlurpLineEnding") && t.canContainEols.includes(n.type)) {
            C.call(this, e);
            T.call(this, e);
          }
        }
        function _() {
          u("atHardBreak", true);
        }
        function D() {
          const e = this.resume();
          const t = this.stack[this.stack.length - 1];
          t.value = e;
        }
        function B() {
          const e = this.resume();
          const t = this.stack[this.stack.length - 1];
          t.value = e;
        }
        function L() {
          const e = this.resume();
          const t = this.stack[this.stack.length - 1];
          t.value = e;
        }
        function M() {
          const e = this.stack[this.stack.length - 1];
          if (o("inReference")) {
            const t = o("referenceType") || "shortcut";
            e.type += "Reference";
            e.referenceType = t;
            delete e.url;
            delete e.title;
          } else {
            delete e.identifier;
            delete e.label;
          }
          u("referenceType");
        }
        function P() {
          const e = this.stack[this.stack.length - 1];
          if (o("inReference")) {
            const t = o("referenceType") || "shortcut";
            e.type += "Reference";
            e.referenceType = t;
            delete e.url;
            delete e.title;
          } else {
            delete e.identifier;
            delete e.label;
          }
          u("referenceType");
        }
        function O(e) {
          const t = this.sliceSerialize(e);
          const n = this.stack[this.stack.length - 2];
          n.label = Jt(t);
          n.identifier = Ee(t).toLowerCase();
        }
        function j() {
          const e = this.stack[this.stack.length - 1];
          const t = this.resume();
          const n = this.stack[this.stack.length - 1];
          u("inReference", true);
          if (n.type === "link") {
            const t = e.children;
            n.children = t;
          } else {
            n.alt = t;
          }
        }
        function H() {
          const e = this.resume();
          const t = this.stack[this.stack.length - 1];
          t.url = e;
        }
        function R() {
          const e = this.resume();
          const t = this.stack[this.stack.length - 1];
          t.title = e;
        }
        function q() {
          u("inReference");
        }
        function V() {
          u("referenceType", "collapsed");
        }
        function Q(e) {
          const t = this.resume();
          const n = this.stack[this.stack.length - 1];
          n.label = t;
          n.identifier = Ee(this.sliceSerialize(e)).toLowerCase();
          u("referenceType", "full");
        }
        function N(e) {
          u("characterReferenceType", e.type);
        }
        function U(e) {
          const t = this.sliceSerialize(e);
          const n = o("characterReferenceType");
          let r;
          if (n) {
            r = Zt(t, n === "characterReferenceMarkerNumeric" ? 10 : 16);
            u("characterReferenceType");
          } else {
            const e = Xe(t);
            r = e;
          }
          const i = this.stack.pop();
          i.value += r;
          i.position.end = cn(e.end);
        }
        function $(e) {
          T.call(this, e);
          const t = this.stack[this.stack.length - 1];
          t.url = this.sliceSerialize(e);
        }
        function W(e) {
          T.call(this, e);
          const t = this.stack[this.stack.length - 1];
          t.url = "mailto:" + this.sliceSerialize(e);
        }
        function Z() {
          return { type: "blockquote", children: [] };
        }
        function Y() {
          return { type: "code", lang: null, meta: null, value: "" };
        }
        function J() {
          return { type: "inlineCode", value: "" };
        }
        function G() {
          return { type: "definition", identifier: "", label: null, title: null, url: "" };
        }
        function K() {
          return { type: "emphasis", children: [] };
        }
        function X() {
          return { type: "heading", depth: undefined, children: [] };
        }
        function ee() {
          return { type: "break" };
        }
        function te() {
          return { type: "html", value: "" };
        }
        function ne() {
          return { type: "image", title: null, url: "", alt: null };
        }
        function re() {
          return { type: "link", title: null, url: "", children: [] };
        }
        function ie(e) {
          return { type: "list", ordered: e.type === "listOrdered", start: null, spread: e._spread, children: [] };
        }
        function ue(e) {
          return { type: "listItem", spread: e._spread, checked: null, children: [] };
        }
        function ce() {
          return { type: "paragraph", children: [] };
        }
        function oe() {
          return { type: "strong", children: [] };
        }
        function se() {
          return { type: "text", value: "" };
        }
        function le() {
          return { type: "thematicBreak" };
        }
      }
      function cn(e) {
        return { line: e.line, column: e.column, offset: e.offset };
      }
      function on(e, t) {
        let n = -1;
        while (++n < t.length) {
          const r = t[n];
          if (Array.isArray(r)) {
            on(e, r);
          } else {
            sn(e, r);
          }
        }
      }
      function sn(e, t) {
        let n;
        for (n in t) {
          if (nn.call(t, n)) {
            if (n === "canContainEols") {
              const r = t[n];
              if (r) {
                e[n].push(...r);
              }
            } else if (n === "transforms") {
              const r = t[n];
              if (r) {
                e[n].push(...r);
              }
            } else if (n === "enter" || n === "exit") {
              const r = t[n];
              if (r) {
                Object.assign(e[n], r);
              }
            }
          }
        }
      }
      function ln(e, t) {
        if (e) {
          throw new Error(
            "Cannot close `" +
              e.type +
              "` (" +
              Kt({ start: e.start, end: e.end }) +
              "): a different token (`" +
              t.type +
              "`, " +
              Kt({ start: t.start, end: t.end }) +
              ") is open"
          );
        } else {
          throw new Error("Cannot close document, a token (`" + t.type + "`, " + Kt({ start: t.start, end: t.end }) + ") is still open");
        }
      }
      var fn = n(18464);
      function an(e) {
        const t = e.replace(/\n{2,}/g, "\n");
        const n = (0, fn.Z)(t);
        return n;
      }
      function dn(e) {
        const t = an(e);
        const { children: n } = rn(t);
        const r = [[]];
        let i = 0;
        function u(e, t = "normal") {
          if (e.type === "text") {
            const n = e.value.split("\n");
            n.forEach((e, n) => {
              if (n !== 0) {
                i++;
                r.push([]);
              }
              e.split(" ").forEach((e) => {
                if (e) {
                  r[i].push({ content: e, type: t });
                }
              });
            });
          } else if (e.type === "strong" || e.type === "emphasis") {
            e.children.forEach((t) => {
              u(t, e.type);
            });
          }
        }
        n.forEach((e) => {
          if (e.type === "paragraph") {
            e.children.forEach((e) => {
              u(e);
            });
          }
        });
        return r;
      }
      function hn(e) {
        const { children: t } = rn(e);
        function n(e) {
          if (e.type === "text") {
            return e.value.replace(/\n/g, "<br/>");
          } else if (e.type === "strong") {
            return `<strong>${e.children.map(n).join("")}</strong>`;
          } else if (e.type === "emphasis") {
            return `<em>${e.children.map(n).join("")}</em>`;
          } else if (e.type === "paragraph") {
            return `<p>${e.children.map(n).join("")}</p>`;
          }
          return `Unsupported markdown: ${e.type}`;
        }
        return t.map(n).join("");
      }
      function pn(e) {
        if (Intl.Segmenter) {
          return [...new Intl.Segmenter().segment(e)].map((e) => e.segment);
        }
        return [...e];
      }
      function mn(e, t) {
        const n = pn(t.content);
        return gn(e, [], n, t.type);
      }
      function gn(e, t, n, r) {
        if (n.length === 0) {
          return [
            { content: t.join(""), type: r },
            { content: "", type: r },
          ];
        }
        const [i, ...u] = n;
        const c = [...t, i];
        if (e([{ content: c.join(""), type: r }])) {
          return gn(e, c, u, r);
        }
        if (t.length === 0 && i) {
          t.push(i);
          n.shift();
        }
        return [
          { content: t.join(""), type: r },
          { content: n.join(""), type: r },
        ];
      }
      function xn(e, t) {
        if (e.some(({ content: e }) => e.includes("\n"))) {
          throw new Error("splitLineToFitWidth does not support newlines in the line");
        }
        return kn(e, t);
      }
      function kn(e, t, n = [], r = []) {
        if (e.length === 0) {
          if (r.length > 0) {
            n.push(r);
          }
          return n.length > 0 ? n : [];
        }
        let i = "";
        if (e[0].content === " ") {
          i = " ";
          e.shift();
        }
        const u = e.shift() ?? { content: " ", type: "normal" };
        const c = [...r];
        if (i !== "") {
          c.push({ content: i, type: "normal" });
        }
        c.push(u);
        if (t(c)) {
          return kn(e, t, n, c);
        }
        if (r.length > 0) {
          n.push(r);
          e.unshift(u);
        } else if (u.content) {
          const [r, i] = mn(t, u);
          n.push([r]);
          if (i.content) {
            e.unshift(i);
          }
        }
        return kn(e, t, n);
      }
      function yn(e, t) {
        if (t) {
          e.attr("style", t);
        }
      }
      function Fn(e, t, n, r, i = false) {
        const u = e.append("foreignObject");
        const c = u.append("xhtml:div");
        const o = t.label;
        const s = t.isNode ? "nodeLabel" : "edgeLabel";
        c.html(`\n    <span class="${s} ${r}" ` + (t.labelStyle ? 'style="' + t.labelStyle + '"' : "") + ">" + o + "</span>");
        yn(c, t.labelStyle);
        c.style("display", "table-cell");
        c.style("white-space", "nowrap");
        c.style("max-width", n + "px");
        c.attr("xmlns", "http://www.w3.org/1999/xhtml");
        if (i) {
          c.attr("class", "labelBkg");
        }
        let l = c.node().getBoundingClientRect();
        if (l.width === n) {
          c.style("display", "table");
          c.style("white-space", "break-spaces");
          c.style("width", n + "px");
          l = c.node().getBoundingClientRect();
        }
        u.style("width", l.width);
        u.style("height", l.height);
        return u.node();
      }
      function bn(e, t, n) {
        return e
          .append("tspan")
          .attr("class", "text-outer-tspan")
          .attr("x", 0)
          .attr("y", t * n - 0.1 + "em")
          .attr("dy", n + "em");
      }
      function Sn(e, t, n) {
        const r = e.append("text");
        const i = bn(r, 1, t);
        vn(i, n);
        const u = i.node().getComputedTextLength();
        r.remove();
        return u;
      }
      function wn(e, t, n) {
        var r;
        const i = e.append("text");
        const u = bn(i, 1, t);
        vn(u, [{ content: n, type: "normal" }]);
        const c = (r = u.node()) == null ? void 0 : r.getBoundingClientRect();
        if (c) {
          i.remove();
        }
        return c;
      }
      function En(e, t, n, r = false) {
        const i = 1.1;
        const u = t.append("g");
        const c = u.insert("rect").attr("class", "background");
        const o = u.append("text").attr("y", "-10.1");
        let s = 0;
        for (const l of n) {
          const t = (t) => Sn(u, i, t) <= e;
          const n = t(l) ? [l] : xn(l, t);
          for (const e of n) {
            const t = bn(o, s, i);
            vn(t, e);
            s++;
          }
        }
        if (r) {
          const e = o.node().getBBox();
          const t = 2;
          c.attr("x", -t)
            .attr("y", -t)
            .attr("width", e.width + 2 * t)
            .attr("height", e.height + 2 * t);
          return u.node();
        } else {
          return o.node();
        }
      }
      function vn(e, t) {
        e.text("");
        t.forEach((t, n) => {
          const r = e
            .append("tspan")
            .attr("font-style", t.type === "emphasis" ? "italic" : "normal")
            .attr("class", "text-inner-tspan")
            .attr("font-weight", t.type === "strong" ? "bold" : "normal");
          if (n === 0) {
            r.text(t.content);
          } else {
            r.text(" " + t.content);
          }
        });
      }
      const An = (
        e,
        t = "",
        {
          style: n = "",
          isTitle: r = false,
          classes: u = "",
          useHtmlLabels: c = true,
          isNode: o = true,
          width: s = 200,
          addSvgBackground: l = false,
        } = {}
      ) => {
        i.l.info("createText", t, n, r, u, c, o, l);
        if (c) {
          const r = hn(t);
          const c = {
            isNode: o,
            label: (0, i.J)(r).replace(/fa[blrs]?:fa-[\w-]+/g, (e) => `<i class='${e.replace(":", " ")}'></i>`),
            labelStyle: n.replace("fill:", "color:"),
          };
          const f = Fn(e, c, s, u, l);
          return f;
        } else {
          const n = dn(t);
          const r = En(s, e, n, l);
          return r;
        }
      };
    },
  },
]);
