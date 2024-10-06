"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7946],
  {
    87946: (t, n, e) => {
      e.r(n);
      e.d(n, { diagram: () => _t });
      var i = e(23787);
      var s = e(34596);
      function r(t, n) {
        let e;
        if (n === undefined) {
          for (const n of t) {
            if (n != null && (e > n || (e === undefined && n >= n))) {
              e = n;
            }
          }
        } else {
          let i = -1;
          for (let s of t) {
            if ((s = n(s, ++i, t)) != null && (e > s || (e === undefined && s >= s))) {
              e = s;
            }
          }
        }
        return e;
      }
      function o(t) {
        return t.target.depth;
      }
      function l(t) {
        return t.depth;
      }
      function c(t, n) {
        return n - 1 - t.height;
      }
      function a(t, n) {
        return t.sourceLinks.length ? t.depth : n - 1;
      }
      function u(t) {
        return t.targetLinks.length ? t.depth : t.sourceLinks.length ? r(t.sourceLinks, o) - 1 : 0;
      }
      function h(t, n) {
        let e = 0;
        if (n === undefined) {
          for (let n of t) {
            if ((n = +n)) {
              e += n;
            }
          }
        } else {
          let i = -1;
          for (let s of t) {
            if ((s = +n(s, ++i, t))) {
              e += s;
            }
          }
        }
        return e;
      }
      function f(t, n) {
        let e;
        if (n === undefined) {
          for (const n of t) {
            if (n != null && (e < n || (e === undefined && n >= n))) {
              e = n;
            }
          }
        } else {
          let i = -1;
          for (let s of t) {
            if ((s = n(s, ++i, t)) != null && (e < s || (e === undefined && s >= s))) {
              e = s;
            }
          }
        }
        return e;
      }
      function y(t) {
        return function () {
          return t;
        };
      }
      function d(t, n) {
        return g(t.source, n.source) || t.index - n.index;
      }
      function p(t, n) {
        return g(t.target, n.target) || t.index - n.index;
      }
      function g(t, n) {
        return t.y0 - n.y0;
      }
      function _(t) {
        return t.value;
      }
      function x(t) {
        return t.index;
      }
      function k(t) {
        return t.nodes;
      }
      function m(t) {
        return t.links;
      }
      function v(t, n) {
        const e = t.get(n);
        if (!e) throw new Error("missing: " + n);
        return e;
      }
      function b({ nodes: t }) {
        for (const n of t) {
          let t = n.y0;
          let e = t;
          for (const i of n.sourceLinks) {
            i.y0 = t + i.width / 2;
            t += i.width;
          }
          for (const i of n.targetLinks) {
            i.y1 = e + i.width / 2;
            e += i.width;
          }
        }
      }
      function w() {
        let t = 0,
          n = 0,
          e = 1,
          i = 1;
        let s = 24;
        let o = 8,
          l;
        let c = x;
        let u = a;
        let w;
        let E;
        let L = k;
        let A = m;
        let S = 6;
        function M() {
          const t = { nodes: L.apply(null, arguments), links: A.apply(null, arguments) };
          T(t);
          I(t);
          C(t);
          O(t);
          $(t);
          b(t);
          return t;
        }
        M.update = function (t) {
          b(t);
          return t;
        };
        M.nodeId = function (t) {
          return arguments.length ? ((c = typeof t === "function" ? t : y(t)), M) : c;
        };
        M.nodeAlign = function (t) {
          return arguments.length ? ((u = typeof t === "function" ? t : y(t)), M) : u;
        };
        M.nodeSort = function (t) {
          return arguments.length ? ((w = t), M) : w;
        };
        M.nodeWidth = function (t) {
          return arguments.length ? ((s = +t), M) : s;
        };
        M.nodePadding = function (t) {
          return arguments.length ? ((o = l = +t), M) : o;
        };
        M.nodes = function (t) {
          return arguments.length ? ((L = typeof t === "function" ? t : y(t)), M) : L;
        };
        M.links = function (t) {
          return arguments.length ? ((A = typeof t === "function" ? t : y(t)), M) : A;
        };
        M.linkSort = function (t) {
          return arguments.length ? ((E = t), M) : E;
        };
        M.size = function (s) {
          return arguments.length ? ((t = n = 0), (e = +s[0]), (i = +s[1]), M) : [e - t, i - n];
        };
        M.extent = function (s) {
          return arguments.length
            ? ((t = +s[0][0]), (e = +s[1][0]), (n = +s[0][1]), (i = +s[1][1]), M)
            : [
                [t, n],
                [e, i],
              ];
        };
        M.iterations = function (t) {
          return arguments.length ? ((S = +t), M) : S;
        };
        function T({ nodes: t, links: n }) {
          for (const [i, s] of t.entries()) {
            s.index = i;
            s.sourceLinks = [];
            s.targetLinks = [];
          }
          const e = new Map(t.map((n, e) => [c(n, e, t), n]));
          for (const [i, s] of n.entries()) {
            s.index = i;
            let { source: t, target: n } = s;
            if (typeof t !== "object") t = s.source = v(e, t);
            if (typeof n !== "object") n = s.target = v(e, n);
            t.sourceLinks.push(s);
            n.targetLinks.push(s);
          }
          if (E != null) {
            for (const { sourceLinks: n, targetLinks: e } of t) {
              n.sort(E);
              e.sort(E);
            }
          }
        }
        function I({ nodes: t }) {
          for (const n of t) {
            n.value = n.fixedValue === undefined ? Math.max(h(n.sourceLinks, _), h(n.targetLinks, _)) : n.fixedValue;
          }
        }
        function C({ nodes: t }) {
          const n = t.length;
          let e = new Set(t);
          let i = new Set();
          let s = 0;
          while (e.size) {
            for (const t of e) {
              t.depth = s;
              for (const { target: n } of t.sourceLinks) {
                i.add(n);
              }
            }
            if (++s > n) throw new Error("circular link");
            e = i;
            i = new Set();
          }
        }
        function O({ nodes: t }) {
          const n = t.length;
          let e = new Set(t);
          let i = new Set();
          let s = 0;
          while (e.size) {
            for (const t of e) {
              t.height = s;
              for (const { source: n } of t.targetLinks) {
                i.add(n);
              }
            }
            if (++s > n) throw new Error("circular link");
            e = i;
            i = new Set();
          }
        }
        function P({ nodes: n }) {
          const i = f(n, (t) => t.depth) + 1;
          const r = (e - t - s) / (i - 1);
          const o = new Array(i);
          for (const e of n) {
            const n = Math.max(0, Math.min(i - 1, Math.floor(u.call(null, e, i))));
            e.layer = n;
            e.x0 = t + n * r;
            e.x1 = e.x0 + s;
            if (o[n]) o[n].push(e);
            else o[n] = [e];
          }
          if (w)
            for (const t of o) {
              t.sort(w);
            }
          return o;
        }
        function D(t) {
          const e = r(t, (t) => (i - n - (t.length - 1) * l) / h(t, _));
          for (const s of t) {
            let t = n;
            for (const n of s) {
              n.y0 = t;
              n.y1 = t + n.value * e;
              t = n.y1 + l;
              for (const t of n.sourceLinks) {
                t.width = t.value * e;
              }
            }
            t = (i - t + l) / (s.length + 1);
            for (let n = 0; n < s.length; ++n) {
              const e = s[n];
              e.y0 += t * (n + 1);
              e.y1 += t * (n + 1);
            }
            U(s);
          }
        }
        function $(t) {
          const e = P(t);
          l = Math.min(o, (i - n) / (f(e, (t) => t.length) - 1));
          D(e);
          for (let n = 0; n < S; ++n) {
            const t = Math.pow(0.99, n);
            const i = Math.max(1 - t, (n + 1) / S);
            j(e, t, i);
            N(e, t, i);
          }
        }
        function N(t, n, e) {
          for (let i = 1, s = t.length; i < s; ++i) {
            const s = t[i];
            for (const t of s) {
              let e = 0;
              let i = 0;
              for (const { source: n, value: r } of t.targetLinks) {
                let s = r * (t.layer - n.layer);
                e += W(n, t) * s;
                i += s;
              }
              if (!(i > 0)) continue;
              let s = (e / i - t.y0) * n;
              t.y0 += s;
              t.y1 += s;
              R(t);
            }
            if (w === undefined) s.sort(g);
            z(s, e);
          }
        }
        function j(t, n, e) {
          for (let i = t.length, s = i - 2; s >= 0; --s) {
            const i = t[s];
            for (const t of i) {
              let e = 0;
              let i = 0;
              for (const { target: n, value: r } of t.sourceLinks) {
                let s = r * (n.layer - t.layer);
                e += q(t, n) * s;
                i += s;
              }
              if (!(i > 0)) continue;
              let s = (e / i - t.y0) * n;
              t.y0 += s;
              t.y1 += s;
              R(t);
            }
            if (w === undefined) i.sort(g);
            z(i, e);
          }
        }
        function z(t, e) {
          const s = t.length >> 1;
          const r = t[s];
          F(t, r.y0 - l, s - 1, e);
          Y(t, r.y1 + l, s + 1, e);
          F(t, i, t.length - 1, e);
          Y(t, n, 0, e);
        }
        function Y(t, n, e, i) {
          for (; e < t.length; ++e) {
            const s = t[e];
            const r = (n - s.y0) * i;
            if (r > 1e-6) (s.y0 += r), (s.y1 += r);
            n = s.y1 + l;
          }
        }
        function F(t, n, e, i) {
          for (; e >= 0; --e) {
            const s = t[e];
            const r = (s.y1 - n) * i;
            if (r > 1e-6) (s.y0 -= r), (s.y1 -= r);
            n = s.y0 - l;
          }
        }
        function R({ sourceLinks: t, targetLinks: n }) {
          if (E === undefined) {
            for (const {
              source: { sourceLinks: t },
            } of n) {
              t.sort(p);
            }
            for (const {
              target: { targetLinks: n },
            } of t) {
              n.sort(d);
            }
          }
        }
        function U(t) {
          if (E === undefined) {
            for (const { sourceLinks: n, targetLinks: e } of t) {
              n.sort(p);
              e.sort(d);
            }
          }
        }
        function W(t, n) {
          let e = t.y0 - ((t.sourceLinks.length - 1) * l) / 2;
          for (const { target: i, width: s } of t.sourceLinks) {
            if (i === n) break;
            e += s + l;
          }
          for (const { source: i, width: s } of n.targetLinks) {
            if (i === t) break;
            e -= s;
          }
          return e;
        }
        function q(t, n) {
          let e = n.y0 - ((n.targetLinks.length - 1) * l) / 2;
          for (const { source: i, width: s } of n.targetLinks) {
            if (i === t) break;
            e += s + l;
          }
          for (const { target: i, width: s } of t.sourceLinks) {
            if (i === n) break;
            e -= s;
          }
          return e;
        }
        return M;
      }
      var E = Math.PI,
        L = 2 * E,
        A = 1e-6,
        S = L - A;
      function M() {
        this._x0 = this._y0 = this._x1 = this._y1 = null;
        this._ = "";
      }
      function T() {
        return new M();
      }
      M.prototype = T.prototype = {
        constructor: M,
        moveTo: function (t, n) {
          this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
        },
        closePath: function () {
          if (this._x1 !== null) {
            (this._x1 = this._x0), (this._y1 = this._y0);
            this._ += "Z";
          }
        },
        lineTo: function (t, n) {
          this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
        },
        quadraticCurveTo: function (t, n, e, i) {
          this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +i);
        },
        bezierCurveTo: function (t, n, e, i, s, r) {
          this._ += "C" + +t + "," + +n + "," + +e + "," + +i + "," + (this._x1 = +s) + "," + (this._y1 = +r);
        },
        arcTo: function (t, n, e, i, s) {
          (t = +t), (n = +n), (e = +e), (i = +i), (s = +s);
          var r = this._x1,
            o = this._y1,
            l = e - t,
            c = i - n,
            a = r - t,
            u = o - n,
            h = a * a + u * u;
          if (s < 0) throw new Error("negative radius: " + s);
          if (this._x1 === null) {
            this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
          } else if (!(h > A));
          else if (!(Math.abs(u * l - c * a) > A) || !s) {
            this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
          } else {
            var f = e - r,
              y = i - o,
              d = l * l + c * c,
              p = f * f + y * y,
              g = Math.sqrt(d),
              _ = Math.sqrt(h),
              x = s * Math.tan((E - Math.acos((d + h - p) / (2 * g * _))) / 2),
              k = x / _,
              m = x / g;
            if (Math.abs(k - 1) > A) {
              this._ += "L" + (t + k * a) + "," + (n + k * u);
            }
            this._ += "A" + s + "," + s + ",0,0," + +(u * f > a * y) + "," + (this._x1 = t + m * l) + "," + (this._y1 = n + m * c);
          }
        },
        arc: function (t, n, e, i, s, r) {
          (t = +t), (n = +n), (e = +e), (r = !!r);
          var o = e * Math.cos(i),
            l = e * Math.sin(i),
            c = t + o,
            a = n + l,
            u = 1 ^ r,
            h = r ? i - s : s - i;
          if (e < 0) throw new Error("negative radius: " + e);
          if (this._x1 === null) {
            this._ += "M" + c + "," + a;
          } else if (Math.abs(this._x1 - c) > A || Math.abs(this._y1 - a) > A) {
            this._ += "L" + c + "," + a;
          }
          if (!e) return;
          if (h < 0) h = (h % L) + L;
          if (h > S) {
            this._ +=
              "A" +
              e +
              "," +
              e +
              ",0,1," +
              u +
              "," +
              (t - o) +
              "," +
              (n - l) +
              "A" +
              e +
              "," +
              e +
              ",0,1," +
              u +
              "," +
              (this._x1 = c) +
              "," +
              (this._y1 = a);
          } else if (h > A) {
            this._ +=
              "A" + e + "," + e + ",0," + +(h >= E) + "," + u + "," + (this._x1 = t + e * Math.cos(s)) + "," + (this._y1 = n + e * Math.sin(s));
          }
        },
        rect: function (t, n, e, i) {
          this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +i + "h" + -e + "Z";
        },
        toString: function () {
          return this._;
        },
      };
      const I = T;
      var C = Array.prototype.slice;
      function O(t) {
        return function n() {
          return t;
        };
      }
      function P(t) {
        return t[0];
      }
      function D(t) {
        return t[1];
      }
      function $(t) {
        return t.source;
      }
      function N(t) {
        return t.target;
      }
      function j(t) {
        var n = $,
          e = N,
          i = P,
          s = D,
          r = null;
        function o() {
          var o,
            l = C.call(arguments),
            c = n.apply(this, l),
            a = e.apply(this, l);
          if (!r) r = o = I();
          t(r, +i.apply(this, ((l[0] = c), l)), +s.apply(this, l), +i.apply(this, ((l[0] = a), l)), +s.apply(this, l));
          if (o) return (r = null), o + "" || null;
        }
        o.source = function (t) {
          return arguments.length ? ((n = t), o) : n;
        };
        o.target = function (t) {
          return arguments.length ? ((e = t), o) : e;
        };
        o.x = function (t) {
          return arguments.length ? ((i = typeof t === "function" ? t : O(+t)), o) : i;
        };
        o.y = function (t) {
          return arguments.length ? ((s = typeof t === "function" ? t : O(+t)), o) : s;
        };
        o.context = function (t) {
          return arguments.length ? ((r = t == null ? null : t), o) : r;
        };
        return o;
      }
      function z(t, n, e, i, s) {
        t.moveTo(n, e);
        t.bezierCurveTo((n = (n + i) / 2), e, n, s, i, s);
      }
      function Y(t, n, e, i, s) {
        t.moveTo(n, e);
        t.bezierCurveTo(n, (e = (e + s) / 2), i, e, i, s);
      }
      function F(t, n, e, i, s) {
        var r = pointRadial(n, e),
          o = pointRadial(n, (e = (e + s) / 2)),
          l = pointRadial(i, e),
          c = pointRadial(i, s);
        t.moveTo(r[0], r[1]);
        t.bezierCurveTo(o[0], o[1], l[0], l[1], c[0], c[1]);
      }
      function R() {
        return j(z);
      }
      function U() {
        return j(Y);
      }
      function W() {
        var t = j(F);
        (t.angle = t.x), delete t.x;
        (t.radius = t.y), delete t.y;
        return t;
      }
      function q(t) {
        return [t.source.x1, t.y0];
      }
      function G(t) {
        return [t.target.x0, t.y1];
      }
      function K() {
        return R().source(q).target(G);
      }
      var V = e(27484);
      var X = e(17967);
      var Q = e(27856);
      var B = (function () {
        var t = function (t, n, e, i) {
            for (e = e || {}, i = t.length; i--; e[t[i]] = n);
            return e;
          },
          n = [1, 9],
          e = [1, 10],
          i = [1, 5, 10, 12];
        var s = {
          trace: function t() {},
          yy: {},
          symbols_: {
            error: 2,
            start: 3,
            SANKEY: 4,
            NEWLINE: 5,
            csv: 6,
            opt_eof: 7,
            record: 8,
            csv_tail: 9,
            EOF: 10,
            "field[source]": 11,
            COMMA: 12,
            "field[target]": 13,
            "field[value]": 14,
            field: 15,
            escaped: 16,
            non_escaped: 17,
            DQUOTE: 18,
            ESCAPED_TEXT: 19,
            NON_ESCAPED_TEXT: 20,
            $accept: 0,
            $end: 1,
          },
          terminals_: {
            2: "error",
            4: "SANKEY",
            5: "NEWLINE",
            10: "EOF",
            11: "field[source]",
            12: "COMMA",
            13: "field[target]",
            14: "field[value]",
            18: "DQUOTE",
            19: "ESCAPED_TEXT",
            20: "NON_ESCAPED_TEXT",
          },
          productions_: [0, [3, 4], [6, 2], [9, 2], [9, 0], [7, 1], [7, 0], [8, 5], [15, 1], [15, 1], [16, 3], [17, 1]],
          performAction: function t(n, e, i, s, r, o, l) {
            var c = o.length - 1;
            switch (r) {
              case 7:
                const t = s.findOrCreateNode(o[c - 4].trim().replaceAll('""', '"'));
                const n = s.findOrCreateNode(o[c - 2].trim().replaceAll('""', '"'));
                const e = parseFloat(o[c].trim());
                s.addLink(t, n, e);
                break;
              case 8:
              case 9:
              case 11:
                this.$ = o[c];
                break;
              case 10:
                this.$ = o[c - 1];
                break;
            }
          },
          table: [
            { 3: 1, 4: [1, 2] },
            { 1: [3] },
            { 5: [1, 3] },
            { 6: 4, 8: 5, 15: 6, 16: 7, 17: 8, 18: n, 20: e },
            { 1: [2, 6], 7: 11, 10: [1, 12] },
            t(e, [2, 4], { 9: 13, 5: [1, 14] }),
            { 12: [1, 15] },
            t(i, [2, 8]),
            t(i, [2, 9]),
            { 19: [1, 16] },
            t(i, [2, 11]),
            { 1: [2, 1] },
            { 1: [2, 5] },
            t(e, [2, 2]),
            { 6: 17, 8: 5, 15: 6, 16: 7, 17: 8, 18: n, 20: e },
            { 15: 18, 16: 7, 17: 8, 18: n, 20: e },
            { 18: [1, 19] },
            t(e, [2, 3]),
            { 12: [1, 20] },
            t(i, [2, 10]),
            { 15: 21, 16: 7, 17: 8, 18: n, 20: e },
            t([1, 5, 10], [2, 7]),
          ],
          defaultActions: { 11: [2, 1], 12: [2, 5] },
          parseError: function t(n, e) {
            if (e.recoverable) {
              this.trace(n);
            } else {
              var i = new Error(n);
              i.hash = e;
              throw i;
            }
          },
          parse: function t(n) {
            var e = this,
              i = [0],
              s = [],
              r = [null],
              o = [],
              l = this.table,
              c = "",
              a = 0,
              u = 0,
              h = 2,
              f = 1;
            var y = o.slice.call(arguments, 1);
            var d = Object.create(this.lexer);
            var p = { yy: {} };
            for (var g in this.yy) {
              if (Object.prototype.hasOwnProperty.call(this.yy, g)) {
                p.yy[g] = this.yy[g];
              }
            }
            d.setInput(n, p.yy);
            p.yy.lexer = d;
            p.yy.parser = this;
            if (typeof d.yylloc == "undefined") {
              d.yylloc = {};
            }
            var _ = d.yylloc;
            o.push(_);
            var x = d.options && d.options.ranges;
            if (typeof p.yy.parseError === "function") {
              this.parseError = p.yy.parseError;
            } else {
              this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function k() {
              var t;
              t = s.pop() || d.lex() || f;
              if (typeof t !== "number") {
                if (t instanceof Array) {
                  s = t;
                  t = s.pop();
                }
                t = e.symbols_[t] || t;
              }
              return t;
            }
            var m,
              v,
              b,
              w,
              E = {},
              L,
              A,
              S,
              M;
            while (true) {
              v = i[i.length - 1];
              if (this.defaultActions[v]) {
                b = this.defaultActions[v];
              } else {
                if (m === null || typeof m == "undefined") {
                  m = k();
                }
                b = l[v] && l[v][m];
              }
              if (typeof b === "undefined" || !b.length || !b[0]) {
                var T = "";
                M = [];
                for (L in l[v]) {
                  if (this.terminals_[L] && L > h) {
                    M.push("'" + this.terminals_[L] + "'");
                  }
                }
                if (d.showPosition) {
                  T =
                    "Parse error on line " +
                    (a + 1) +
                    ":\n" +
                    d.showPosition() +
                    "\nExpecting " +
                    M.join(", ") +
                    ", got '" +
                    (this.terminals_[m] || m) +
                    "'";
                } else {
                  T = "Parse error on line " + (a + 1) + ": Unexpected " + (m == f ? "end of input" : "'" + (this.terminals_[m] || m) + "'");
                }
                this.parseError(T, { text: d.match, token: this.terminals_[m] || m, line: d.yylineno, loc: _, expected: M });
              }
              if (b[0] instanceof Array && b.length > 1) {
                throw new Error("Parse Error: multiple actions possible at state: " + v + ", token: " + m);
              }
              switch (b[0]) {
                case 1:
                  i.push(m);
                  r.push(d.yytext);
                  o.push(d.yylloc);
                  i.push(b[1]);
                  m = null;
                  {
                    u = d.yyleng;
                    c = d.yytext;
                    a = d.yylineno;
                    _ = d.yylloc;
                  }
                  break;
                case 2:
                  A = this.productions_[b[1]][1];
                  E.$ = r[r.length - A];
                  E._$ = {
                    first_line: o[o.length - (A || 1)].first_line,
                    last_line: o[o.length - 1].last_line,
                    first_column: o[o.length - (A || 1)].first_column,
                    last_column: o[o.length - 1].last_column,
                  };
                  if (x) {
                    E._$.range = [o[o.length - (A || 1)].range[0], o[o.length - 1].range[1]];
                  }
                  w = this.performAction.apply(E, [c, u, a, p.yy, b[1], r, o].concat(y));
                  if (typeof w !== "undefined") {
                    return w;
                  }
                  if (A) {
                    i = i.slice(0, -1 * A * 2);
                    r = r.slice(0, -1 * A);
                    o = o.slice(0, -1 * A);
                  }
                  i.push(this.productions_[b[1]][0]);
                  r.push(E.$);
                  o.push(E._$);
                  S = l[i[i.length - 2]][i[i.length - 1]];
                  i.push(S);
                  break;
                case 3:
                  return true;
              }
            }
            return true;
          },
        };
        var r = (function () {
          var t = {
            EOF: 1,
            parseError: function t(n, e) {
              if (this.yy.parser) {
                this.yy.parser.parseError(n, e);
              } else {
                throw new Error(n);
              }
            },
            setInput: function (t, n) {
              this.yy = n || this.yy || {};
              this._input = t;
              this._more = this._backtrack = this.done = false;
              this.yylineno = this.yyleng = 0;
              this.yytext = this.matched = this.match = "";
              this.conditionStack = ["INITIAL"];
              this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
              if (this.options.ranges) {
                this.yylloc.range = [0, 0];
              }
              this.offset = 0;
              return this;
            },
            input: function () {
              var t = this._input[0];
              this.yytext += t;
              this.yyleng++;
              this.offset++;
              this.match += t;
              this.matched += t;
              var n = t.match(/(?:\r\n?|\n).*/g);
              if (n) {
                this.yylineno++;
                this.yylloc.last_line++;
              } else {
                this.yylloc.last_column++;
              }
              if (this.options.ranges) {
                this.yylloc.range[1]++;
              }
              this._input = this._input.slice(1);
              return t;
            },
            unput: function (t) {
              var n = t.length;
              var e = t.split(/(?:\r\n?|\n)/g);
              this._input = t + this._input;
              this.yytext = this.yytext.substr(0, this.yytext.length - n);
              this.offset -= n;
              var i = this.match.split(/(?:\r\n?|\n)/g);
              this.match = this.match.substr(0, this.match.length - 1);
              this.matched = this.matched.substr(0, this.matched.length - 1);
              if (e.length - 1) {
                this.yylineno -= e.length - 1;
              }
              var s = this.yylloc.range;
              this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: e
                  ? (e.length === i.length ? this.yylloc.first_column : 0) + i[i.length - e.length].length - e[0].length
                  : this.yylloc.first_column - n,
              };
              if (this.options.ranges) {
                this.yylloc.range = [s[0], s[0] + this.yyleng - n];
              }
              this.yyleng = this.yytext.length;
              return this;
            },
            more: function () {
              this._more = true;
              return this;
            },
            reject: function () {
              if (this.options.backtrack_lexer) {
                this._backtrack = true;
              } else {
                return this.parseError(
                  "Lexical error on line " +
                    (this.yylineno + 1) +
                    ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" +
                    this.showPosition(),
                  { text: "", token: null, line: this.yylineno }
                );
              }
              return this;
            },
            less: function (t) {
              this.unput(this.match.slice(t));
            },
            pastInput: function () {
              var t = this.matched.substr(0, this.matched.length - this.match.length);
              return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function () {
              var t = this.match;
              if (t.length < 20) {
                t += this._input.substr(0, 20 - t.length);
              }
              return (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
            },
            showPosition: function () {
              var t = this.pastInput();
              var n = new Array(t.length + 1).join("-");
              return t + this.upcomingInput() + "\n" + n + "^";
            },
            test_match: function (t, n) {
              var e, i, s;
              if (this.options.backtrack_lexer) {
                s = {
                  yylineno: this.yylineno,
                  yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column,
                  },
                  yytext: this.yytext,
                  match: this.match,
                  matches: this.matches,
                  matched: this.matched,
                  yyleng: this.yyleng,
                  offset: this.offset,
                  _more: this._more,
                  _input: this._input,
                  yy: this.yy,
                  conditionStack: this.conditionStack.slice(0),
                  done: this.done,
                };
                if (this.options.ranges) {
                  s.yylloc.range = this.yylloc.range.slice(0);
                }
              }
              i = t[0].match(/(?:\r\n?|\n).*/g);
              if (i) {
                this.yylineno += i.length;
              }
              this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length,
              };
              this.yytext += t[0];
              this.match += t[0];
              this.matches = t;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                this.yylloc.range = [this.offset, (this.offset += this.yyleng)];
              }
              this._more = false;
              this._backtrack = false;
              this._input = this._input.slice(t[0].length);
              this.matched += t[0];
              e = this.performAction.call(this, this.yy, this, n, this.conditionStack[this.conditionStack.length - 1]);
              if (this.done && this._input) {
                this.done = false;
              }
              if (e) {
                return e;
              } else if (this._backtrack) {
                for (var r in s) {
                  this[r] = s[r];
                }
                return false;
              }
              return false;
            },
            next: function () {
              if (this.done) {
                return this.EOF;
              }
              if (!this._input) {
                this.done = true;
              }
              var t, n, e, i;
              if (!this._more) {
                this.yytext = "";
                this.match = "";
              }
              var s = this._currentRules();
              for (var r = 0; r < s.length; r++) {
                e = this._input.match(this.rules[s[r]]);
                if (e && (!n || e[0].length > n[0].length)) {
                  n = e;
                  i = r;
                  if (this.options.backtrack_lexer) {
                    t = this.test_match(e, s[r]);
                    if (t !== false) {
                      return t;
                    } else if (this._backtrack) {
                      n = false;
                      continue;
                    } else {
                      return false;
                    }
                  } else if (!this.options.flex) {
                    break;
                  }
                }
              }
              if (n) {
                t = this.test_match(n, s[i]);
                if (t !== false) {
                  return t;
                }
                return false;
              }
              if (this._input === "") {
                return this.EOF;
              } else {
                return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                  text: "",
                  token: null,
                  line: this.yylineno,
                });
              }
            },
            lex: function t() {
              var n = this.next();
              if (n) {
                return n;
              } else {
                return this.lex();
              }
            },
            begin: function t(n) {
              this.conditionStack.push(n);
            },
            popState: function t() {
              var n = this.conditionStack.length - 1;
              if (n > 0) {
                return this.conditionStack.pop();
              } else {
                return this.conditionStack[0];
              }
            },
            _currentRules: function t() {
              if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
              } else {
                return this.conditions["INITIAL"].rules;
              }
            },
            topState: function t(n) {
              n = this.conditionStack.length - 1 - Math.abs(n || 0);
              if (n >= 0) {
                return this.conditionStack[n];
              } else {
                return "INITIAL";
              }
            },
            pushState: function t(n) {
              this.begin(n);
            },
            stateStackSize: function t() {
              return this.conditionStack.length;
            },
            options: { easy_keword_rules: true },
            performAction: function t(n, e, i, s) {
              switch (i) {
                case 0:
                  this.pushState("csv");
                  return 4;
                case 1:
                  return 10;
                case 2:
                  return 5;
                case 3:
                  return 12;
                case 4:
                  this.pushState("escaped_text");
                  return 18;
                case 5:
                  return 20;
                case 6:
                  this.popState("escaped_text");
                  return 18;
                case 7:
                  return 19;
              }
            },
            rules: [
              /^(?:sankey-beta\b)/,
              /^(?:$)/,
              /^(?:((\u000D\u000A)|(\u000A)))/,
              /^(?:(\u002C))/,
              /^(?:(\u0022))/,
              /^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/,
              /^(?:(\u0022)(?!(\u0022)))/,
              /^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/,
            ],
            conditions: {
              csv: { rules: [1, 2, 3, 4, 5, 6, 7], inclusive: false },
              escaped_text: { rules: [6, 7], inclusive: false },
              INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7], inclusive: true },
            },
          };
          return t;
        })();
        s.lexer = r;
        function o() {
          this.yy = {};
        }
        o.prototype = s;
        s.Parser = o;
        return new o();
      })();
      B.parser = B;
      const Z = B;
      let H = [];
      let J = [];
      let tt = {};
      const nt = () => {
        H = [];
        J = [];
        tt = {};
        (0, i.t)();
      };
      class et {
        constructor(t, n, e = 0) {
          this.source = t;
          this.target = n;
          this.value = e;
        }
      }
      const it = (t, n, e) => {
        H.push(new et(t, n, e));
      };
      class st {
        constructor(t) {
          this.ID = t;
        }
      }
      const rt = (t) => {
        t = i.e.sanitizeText(t, (0, i.c)());
        if (!tt[t]) {
          tt[t] = new st(t);
          J.push(tt[t]);
        }
        return tt[t];
      };
      const ot = () => J;
      const lt = () => H;
      const ct = () => ({ nodes: J.map((t) => ({ id: t.ID })), links: H.map((t) => ({ source: t.source.ID, target: t.target.ID, value: t.value })) });
      const at = {
        nodesMap: tt,
        getConfig: () => (0, i.c)().sankey,
        getNodes: ot,
        getLinks: lt,
        getGraph: ct,
        addLink: it,
        findOrCreateNode: rt,
        getAccTitle: i.g,
        setAccTitle: i.s,
        getAccDescription: i.a,
        setAccDescription: i.b,
        getDiagramTitle: i.r,
        setDiagramTitle: i.q,
        clear: nt,
      };
      const ut = class t {
        static next(n) {
          return new t(n + ++t.count);
        }
        constructor(t) {
          this.id = t;
          this.href = `#${t}`;
        }
        toString() {
          return "url(" + this.href + ")";
        }
      };
      ut.count = 0;
      let ht = ut;
      const ft = { left: l, right: c, center: u, justify: a };
      const yt = function (t, n, e, r) {
        const { securityLevel: o, sankey: l } = (0, i.c)();
        const c = i.I.sankey;
        let a;
        if (o === "sandbox") {
          a = (0, s.Ys)("#i" + n);
        }
        const u = o === "sandbox" ? (0, s.Ys)(a.nodes()[0].contentDocument.body) : (0, s.Ys)("body");
        const h = o === "sandbox" ? u.select(`[id="${n}"]`) : (0, s.Ys)(`[id="${n}"]`);
        const f = (l == null ? void 0 : l.width) ?? c.width;
        const y = (l == null ? void 0 : l.height) ?? c.width;
        const d = (l == null ? void 0 : l.useMaxWidth) ?? c.useMaxWidth;
        const p = (l == null ? void 0 : l.nodeAlignment) ?? c.nodeAlignment;
        const g = (l == null ? void 0 : l.prefix) ?? c.prefix;
        const _ = (l == null ? void 0 : l.suffix) ?? c.suffix;
        const x = (l == null ? void 0 : l.showValues) ?? c.showValues;
        const k = r.db.getGraph();
        const m = ft[p];
        const v = 10;
        const b = w()
          .nodeId((t) => t.id)
          .nodeWidth(v)
          .nodePadding(10 + (x ? 15 : 0))
          .nodeAlign(m)
          .extent([
            [0, 0],
            [f, y],
          ]);
        b(k);
        const E = (0, s.PKp)(s.K2I);
        h.append("g")
          .attr("class", "nodes")
          .selectAll(".node")
          .data(k.nodes)
          .join("g")
          .attr("class", "node")
          .attr("id", (t) => (t.uid = ht.next("node-")).id)
          .attr("transform", function (t) {
            return "translate(" + t.x0 + "," + t.y0 + ")";
          })
          .attr("x", (t) => t.x0)
          .attr("y", (t) => t.y0)
          .append("rect")
          .attr("height", (t) => t.y1 - t.y0)
          .attr("width", (t) => t.x1 - t.x0)
          .attr("fill", (t) => E(t.id));
        const L = ({ id: t, value: n }) => {
          if (!x) {
            return t;
          }
          return `${t}\n${g}${Math.round(n * 100) / 100}${_}`;
        };
        h.append("g")
          .attr("class", "node-labels")
          .attr("font-family", "sans-serif")
          .attr("font-size", 14)
          .selectAll("text")
          .data(k.nodes)
          .join("text")
          .attr("x", (t) => (t.x0 < f / 2 ? t.x1 + 6 : t.x0 - 6))
          .attr("y", (t) => (t.y1 + t.y0) / 2)
          .attr("dy", `${x ? "0" : "0.35"}em`)
          .attr("text-anchor", (t) => (t.x0 < f / 2 ? "start" : "end"))
          .text(L);
        const A = h
          .append("g")
          .attr("class", "links")
          .attr("fill", "none")
          .attr("stroke-opacity", 0.5)
          .selectAll(".link")
          .data(k.links)
          .join("g")
          .attr("class", "link")
          .style("mix-blend-mode", "multiply");
        const S = (l == null ? void 0 : l.linkColor) || "gradient";
        if (S === "gradient") {
          const t = A.append("linearGradient")
            .attr("id", (t) => (t.uid = ht.next("linearGradient-")).id)
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", (t) => t.source.x1)
            .attr("x2", (t) => t.target.x0);
          t.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", (t) => E(t.source.id));
          t.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", (t) => E(t.target.id));
        }
        let M;
        switch (S) {
          case "gradient":
            M = (t) => t.uid;
            break;
          case "source":
            M = (t) => E(t.source.id);
            break;
          case "target":
            M = (t) => E(t.target.id);
            break;
          default:
            M = S;
        }
        A.append("path")
          .attr("d", K())
          .attr("stroke", M)
          .attr("stroke-width", (t) => Math.max(1, t.width));
        (0, i.o)(void 0, h, 0, d);
      };
      const dt = { draw: yt };
      const pt = (t) => {
        const n = t
          .replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "")
          .replaceAll(/([\n\r])+/g, "\n")
          .trim();
        return n;
      };
      const gt = Z.parse.bind(Z);
      Z.parse = (t) => gt(pt(t));
      const _t = { parser: Z, db: at, renderer: dt };
    },
  },
]);
