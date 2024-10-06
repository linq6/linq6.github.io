/*! For license information please see 7451.c0257dbfdd320e2c21f5.js.LICENSE.txt */
"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7451],
  {
    76672: (u) => {
      const e = { mode: "lazy" };
      u.exports = e;
    },
    50045: (u, e, r) => {
      const d = r(76672);
      const a = r(32666);
      const t = r(16262);
      const n = new WeakMap();
      function f(u) {
        return d.mode === "spec-compliant" ? c(this, u) : i(this, u);
      }
      function i(u, e) {
        const r = u.lastIndex;
        const d = a.call(u, e);
        if (d === null) return null;
        let t;
        Object.defineProperty(d, "indices", {
          enumerable: true,
          configurable: true,
          get() {
            if (t === undefined) {
              const { measurementRegExp: n, groupInfos: f } = o(u);
              n.lastIndex = r;
              const i = a.call(n, e);
              if (i === null) throw new TypeError();
              l(d, "indices", (t = s(i, f)));
            }
            return t;
          },
          set(u) {
            l(d, "indices", u);
          },
        });
        return d;
      }
      function c(u, e) {
        const { measurementRegExp: r, groupInfos: d } = o(u);
        r.lastIndex = u.lastIndex;
        const t = a.call(r, e);
        if (t === null) return null;
        u.lastIndex = r.lastIndex;
        const n = [];
        l(n, 0, t[0]);
        for (const a of d) {
          l(n, a.oldGroupNumber, t[a.newGroupNumber]);
        }
        l(n, "index", t.index);
        l(n, "input", t.input);
        l(n, "groups", t.groups);
        l(n, "indices", s(t, d));
        return n;
      }
      function o(u) {
        let e = n.get(u);
        if (!e) {
          e = T(t.parse(`/${u.source}/${u.flags}`));
          n.set(u, e);
        }
        const r = e.getExtra();
        const d = e.toRegExp();
        return { measurementRegExp: d, groupInfos: r };
      }
      function s(u, e) {
        const r = u.index;
        const d = r + u[0].length;
        const a = !!u.groups;
        const t = [];
        const n = a ? Object.create(null) : undefined;
        l(t, 0, [r, d]);
        for (const f of e) {
          let e;
          if (u[f.newGroupNumber] !== undefined) {
            let d = r;
            if (f.measurementGroups) {
              for (const e of f.measurementGroups) {
                d += u[e].length;
              }
            }
            const a = d + u[f.newGroupNumber].length;
            e = [d, a];
          }
          l(t, f.oldGroupNumber, e);
          if (n && f.groupName !== undefined) {
            l(n, f.groupName, e);
          }
        }
        l(t, "groups", n);
        return t;
      }
      function l(u, e, r) {
        const d = Object.getOwnPropertyDescriptor(u, e);
        if (d ? d.configurable : Object.isExtensible(u)) {
          const a = { enumerable: d ? d.enumerable : true, configurable: d ? d.configurable : true, writable: true, value: r };
          Object.defineProperty(u, e, a);
        }
      }
      let b;
      let p = false;
      let h = new Set();
      let v = [];
      let g = false;
      let y = 1;
      let m = [];
      let _ = new Map();
      let C = new Map();
      const S = {
        init() {
          p = false;
          h.clear();
          v.length = 0;
          g = false;
          y = 1;
          m.length = 0;
          _.clear();
          C.clear();
          b = [];
        },
        RegExp(u) {
          t.traverse(u.node, A);
          if (h.size > 0) {
            t.transform(u.node, k);
            t.transform(u.node, P);
            if (p) {
              t.transform(u.node, w);
            }
          }
          return false;
        },
      };
      const x = {
        pre(u) {
          v.push(g);
          g = u.node.type === "Group" && u.node.capturing;
        },
        post(u) {
          if (g) {
            h.add(u.node);
          }
          g = v.pop() || g;
        },
      };
      const A = {
        Alternative: x,
        Disjunction: x,
        Assertion: x,
        Group: x,
        Repetition: x,
        Backreference(u) {
          p = true;
        },
      };
      const k = {
        Alternative(u) {
          if (h.has(u.node)) {
            let e = 0;
            let r = [];
            const d = [];
            const a = [];
            for (let n = 0; n < u.node.expressions.length; n++) {
              const f = u.node.expressions[n];
              if (h.has(f)) {
                if (n > e) {
                  const u = {
                    type: "Group",
                    capturing: true,
                    number: -1,
                    expression: r.length > 1 ? { type: "Alternative", expressions: r } : r.length === 1 ? r[0] : null,
                  };
                  a.push(u);
                  d.push(u);
                  e = n;
                  r = [];
                }
                m.push(d);
                t.transform(f, k);
                m.pop();
                r.push(f);
                continue;
              }
              r.push(f);
            }
            u.update({ expressions: a.concat(r) });
          }
          return false;
        },
        Group(u) {
          if (!u.node.capturing) return;
          _.set(u.node, E());
        },
      };
      const P = {
        Group(u) {
          if (!b) throw new Error("Not initialized.");
          if (!u.node.capturing) return;
          const e = u.node.number;
          const r = y++;
          const d = _.get(u.node);
          if (e !== -1) {
            b.push({ oldGroupNumber: e, newGroupNumber: r, measurementGroups: d && d.map((u) => u.number), groupName: u.node.name });
            C.set(e, r);
          }
          u.update({ number: r });
        },
      };
      const w = {
        Backreference(u) {
          const e = C.get(u.node.number);
          if (e) {
            if (u.node.kind === "number") {
              u.update({ number: e, reference: e });
            } else {
              u.update({ number: e });
            }
          }
        },
      };
      function E() {
        const u = [];
        for (const e of m) {
          for (const r of e) {
            u.push(r);
          }
        }
        return u;
      }
      function T(u) {
        const e = t.transform(u, S);
        return new t.TransformResult(e.getAST(), b);
      }
      u.exports = f;
    },
    77451: (u, e, r) => {
      const d = r(50045);
      const a = r(32666);
      const t = r(98468);
      const n = r(19698);
      const f = r(76672);
      const i = t();
      function c(u, e) {
        return i.call(u, e);
      }
      c.implementation = d;
      c.native = a;
      c.getPolyfill = t;
      c.shim = n;
      c.config = f;
      (function (u) {})(c || (c = {}));
      u.exports = c;
    },
    32666: (u) => {
      const e = RegExp.prototype.exec;
      u.exports = e;
    },
    98468: (u, e, r) => {
      const d = r(32666);
      const a = r(50045);
      function t() {
        const u = new RegExp("a");
        const e = d.call(u, "a");
        if (e.indices) {
          return d;
        }
        return a;
      }
      u.exports = t;
    },
    19698: (u, e, r) => {
      const d = r(98468);
      function a() {
        const u = d();
        if (RegExp.prototype.exec !== u) {
          RegExp.prototype.exec = u;
        }
      }
      u.exports = a;
    },
    78355: (u, e, r) => {
      var d = r(1264);
      var a = r(60045);
      u.exports = {
        transform: function u(e) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          var t = r.length > 0 ? r : Object.keys(d);
          var n = void 0;
          var f = {};
          t.forEach(function (u) {
            if (!d.hasOwnProperty(u)) {
              throw new Error("Unknown compat-transform: " + u + ". " + "Available transforms are: " + Object.keys(d).join(", "));
            }
            var r = d[u];
            n = a.transform(e, r);
            e = n.getAST();
            if (typeof r.getExtra === "function") {
              f[u] = r.getExtra();
            }
          });
          n.setExtra(f);
          return n;
        },
      };
    },
    77460: (u) => {
      var e = (function () {
        function u(u, e) {
          for (var r = 0; r < e.length; r++) {
            var d = e[r];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(u, d.key, d);
          }
        }
        return function (e, r, d) {
          if (r) u(e.prototype, r);
          if (d) u(e, d);
          return e;
        };
      })();
      function r(u, e) {
        if (!(u instanceof e)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var d = (function () {
        function u(e, d) {
          var a = d.flags,
            t = d.groups,
            n = d.source;
          r(this, u);
          this._re = e;
          this._groups = t;
          this.flags = a;
          this.source = n || e.source;
          this.dotAll = a.includes("s");
          this.global = e.global;
          this.ignoreCase = e.ignoreCase;
          this.multiline = e.multiline;
          this.sticky = e.sticky;
          this.unicode = e.unicode;
        }
        e(u, [
          {
            key: "test",
            value: function u(e) {
              return this._re.test(e);
            },
          },
          {
            key: "compile",
            value: function u(e) {
              return this._re.compile(e);
            },
          },
          {
            key: "toString",
            value: function u() {
              if (!this._toStringResult) {
                this._toStringResult = "/" + this.source + "/" + this.flags;
              }
              return this._toStringResult;
            },
          },
          {
            key: "exec",
            value: function u(e) {
              var r = this._re.exec(e);
              if (!this._groups || !r) {
                return r;
              }
              r.groups = {};
              for (var d in this._groups) {
                var a = this._groups[d];
                r.groups[d] = r[a];
              }
              return r;
            },
          },
        ]);
        return u;
      })();
      u.exports = { RegExpTree: d };
    },
    98708: (u) => {
      u.exports = {
        _hasUFlag: false,
        shouldRun: function u(e) {
          var u = e.flags.includes("s");
          if (!u) {
            return false;
          }
          e.flags = e.flags.replace("s", "");
          this._hasUFlag = e.flags.includes("u");
          return true;
        },
        Char: function u(e) {
          var r = e.node;
          if (r.kind !== "meta" || r.value !== ".") {
            return;
          }
          var d = "\\uFFFF";
          var a = "￿";
          if (this._hasUFlag) {
            d = "\\u{10FFFF}";
            a = "􏿿";
          }
          e.replace({
            type: "CharacterClass",
            expressions: [
              {
                type: "ClassRange",
                from: { type: "Char", value: "\\0", kind: "decimal", symbol: "\0" },
                to: { type: "Char", value: d, kind: "unicode", symbol: a },
              },
            ],
          });
        },
      };
    },
    305: (u) => {
      u.exports = {
        _groupNames: {},
        init: function u() {
          this._groupNames = {};
        },
        getExtra: function u() {
          return this._groupNames;
        },
        Group: function u(e) {
          var r = e.node;
          if (!r.name) {
            return;
          }
          this._groupNames[r.name] = r.number;
          delete r.name;
          delete r.nameRaw;
        },
        Backreference: function u(e) {
          var r = e.node;
          if (r.kind !== "name") {
            return;
          }
          r.kind = "number";
          r.reference = r.number;
          delete r.referenceRaw;
        },
      };
    },
    96437: (u) => {
      u.exports = {
        RegExp: function u(e) {
          var r = e.node;
          if (r.flags.includes("x")) {
            r.flags = r.flags.replace("x", "");
          }
        },
      };
    },
    1264: (u, e, r) => {
      u.exports = { dotAll: r(98708), namedCapturingGroups: r(305), xFlag: r(96437) };
    },
    89702: (u) => {
      function e(u) {
        return u ? r[u.type](u) : "";
      }
      var r = {
        RegExp: function u(r) {
          return "/" + e(r.body) + "/" + r.flags;
        },
        Alternative: function u(r) {
          return (r.expressions || []).map(e).join("");
        },
        Disjunction: function u(r) {
          return e(r.left) + "|" + e(r.right);
        },
        Group: function u(r) {
          var d = e(r.expression);
          if (r.capturing) {
            if (r.name) {
              return "(?<" + (r.nameRaw || r.name) + ">" + d + ")";
            }
            return "(" + d + ")";
          }
          return "(?:" + d + ")";
        },
        Backreference: function u(e) {
          switch (e.kind) {
            case "number":
              return "\\" + e.reference;
            case "name":
              return "\\k<" + (e.referenceRaw || e.reference) + ">";
            default:
              throw new TypeError("Unknown Backreference kind: " + e.kind);
          }
        },
        Assertion: function u(r) {
          switch (r.kind) {
            case "^":
            case "$":
            case "\\b":
            case "\\B":
              return r.kind;
            case "Lookahead": {
              var d = e(r.assertion);
              if (r.negative) {
                return "(?!" + d + ")";
              }
              return "(?=" + d + ")";
            }
            case "Lookbehind": {
              var a = e(r.assertion);
              if (r.negative) {
                return "(?<!" + a + ")";
              }
              return "(?<=" + a + ")";
            }
            default:
              throw new TypeError("Unknown Assertion kind: " + r.kind);
          }
        },
        CharacterClass: function u(r) {
          var d = r.expressions.map(e).join("");
          if (r.negative) {
            return "[^" + d + "]";
          }
          return "[" + d + "]";
        },
        ClassRange: function u(r) {
          return e(r.from) + "-" + e(r.to);
        },
        Repetition: function u(r) {
          return "" + e(r.expression) + e(r.quantifier);
        },
        Quantifier: function u(e) {
          var r = void 0;
          var d = e.greedy ? "" : "?";
          switch (e.kind) {
            case "+":
            case "?":
            case "*":
              r = e.kind;
              break;
            case "Range":
              if (e.from === e.to) {
                r = "{" + e.from + "}";
              } else if (!e.to) {
                r = "{" + e.from + ",}";
              } else {
                r = "{" + e.from + "," + e.to + "}";
              }
              break;
            default:
              throw new TypeError("Unknown Quantifier kind: " + e.kind);
          }
          return "" + r + d;
        },
        Char: function u(e) {
          var r = e.value;
          switch (e.kind) {
            case "simple": {
              if (e.escaped) {
                return "\\" + r;
              }
              return r;
            }
            case "hex":
            case "unicode":
            case "oct":
            case "decimal":
            case "control":
            case "meta":
              return r;
            default:
              throw new TypeError("Unknown Char kind: " + e.kind);
          }
        },
        UnicodeProperty: function u(e) {
          var r = e.negative ? "P" : "p";
          var d = void 0;
          if (!e.shorthand && !e.binary) {
            d = e.name + "=";
          } else {
            d = "";
          }
          return "\\" + r + "{" + d + e.value + "}";
        },
      };
      u.exports = { generate: e };
    },
    41693: (u) => {
      var e = (function () {
        function u(u, e) {
          var r = [];
          var d = true;
          var a = false;
          var t = undefined;
          try {
            for (var n = u[Symbol.iterator](), f; !(d = (f = n.next()).done); d = true) {
              r.push(f.value);
              if (e && r.length === e) break;
            }
          } catch (i) {
            a = true;
            t = i;
          } finally {
            try {
              if (!d && n["return"]) n["return"]();
            } finally {
              if (a) throw t;
            }
          }
          return r;
        }
        return function (e, r) {
          if (Array.isArray(e)) {
            return e;
          } else if (Symbol.iterator in Object(e)) {
            return u(e, r);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      })();
      function r(u) {
        return Array.isArray(u) ? u : Array.from(u);
      }
      function d(u) {
        if (Array.isArray(u)) {
          for (var e = 0, r = Array(u.length); e < u.length; e++) {
            r[e] = u[e];
          }
          return r;
        } else {
          return Array.from(u);
        }
      }
      var a = null;
      function t(u) {
        var t = u.getTransitionTable();
        var i = Object.keys(t);
        var c = u.getAlphabet();
        var o = u.getAcceptingStateNumbers();
        a = {};
        var s = new Set();
        i.forEach(function (u) {
          u = Number(u);
          var e = o.has(u);
          if (e) {
            a[u] = o;
          } else {
            s.add(u);
            a[u] = s;
          }
        });
        var l = [
          [s, o].filter(function (u) {
            return u.size > 0;
          }),
        ];
        var b = void 0;
        var p = void 0;
        b = l[l.length - 1];
        p = l[l.length - 2];
        var h = function u() {
          var e = {};
          var n = true;
          var i = false;
          var o = undefined;
          try {
            for (var s = b[Symbol.iterator](), h; !(n = (h = s.next()).done); n = true) {
              var v = h.value;
              var g = {};
              var y = r(v),
                m = y[0],
                _ = y.slice(1);
              g[m] = new Set([m]);
              var C = true;
              var S = false;
              var x = undefined;
              try {
                u: for (var A = _[Symbol.iterator](), k; !(C = (k = A.next()).done); C = true) {
                  var P = k.value;
                  var w = true;
                  var E = false;
                  var T = undefined;
                  try {
                    for (var O = Object.keys(g)[Symbol.iterator](), R; !(w = (R = O.next()).done); w = true) {
                      var N = R.value;
                      if (f(P, N, t, c)) {
                        g[N].add(P);
                        g[P] = g[N];
                        continue u;
                      }
                    }
                  } catch (I) {
                    E = true;
                    T = I;
                  } finally {
                    try {
                      if (!w && O.return) {
                        O.return();
                      }
                    } finally {
                      if (E) {
                        throw T;
                      }
                    }
                  }
                  g[P] = new Set([P]);
                }
              } catch (I) {
                S = true;
                x = I;
              } finally {
                try {
                  if (!C && A.return) {
                    A.return();
                  }
                } finally {
                  if (S) {
                    throw x;
                  }
                }
              }
              Object.assign(e, g);
            }
          } catch (I) {
            i = true;
            o = I;
          } finally {
            try {
              if (!n && s.return) {
                s.return();
              }
            } finally {
              if (i) {
                throw o;
              }
            }
          }
          a = e;
          var L = new Set(
            Object.keys(e).map(function (u) {
              return e[u];
            })
          );
          l.push([].concat(d(L)));
          b = l[l.length - 1];
          p = l[l.length - 2];
        };
        while (!n(b, p)) {
          h();
        }
        var v = new Map();
        var g = 1;
        b.forEach(function (u) {
          return v.set(u, g++);
        });
        var y = {};
        var m = new Set();
        var _ = function u(e, r) {
          var d = true;
          var a = false;
          var t = undefined;
          try {
            for (var n = e[Symbol.iterator](), f; !(d = (f = n.next()).done); d = true) {
              var i = f.value;
              if (o.has(i)) {
                m.add(r);
              }
            }
          } catch (c) {
            a = true;
            t = c;
          } finally {
            try {
              if (!d && n.return) {
                n.return();
              }
            } finally {
              if (a) {
                throw t;
              }
            }
          }
        };
        var C = true;
        var S = false;
        var x = undefined;
        try {
          for (var A = v.entries()[Symbol.iterator](), k; !(C = (k = A.next()).done); C = true) {
            var P = k.value;
            var w = e(P, 2);
            var E = w[0];
            var T = w[1];
            y[T] = {};
            var O = true;
            var R = false;
            var N = undefined;
            try {
              for (var L = c[Symbol.iterator](), I; !(O = (I = L.next()).done); O = true) {
                var F = I.value;
                _(E, T);
                var D = void 0;
                var M = true;
                var G = false;
                var j = undefined;
                try {
                  for (var B = E[Symbol.iterator](), U; !(M = (U = B.next()).done); M = true) {
                    var H = U.value;
                    D = t[H][F];
                    if (D) {
                      break;
                    }
                  }
                } catch (q) {
                  G = true;
                  j = q;
                } finally {
                  try {
                    if (!M && B.return) {
                      B.return();
                    }
                  } finally {
                    if (G) {
                      throw j;
                    }
                  }
                }
                if (D) {
                  y[T][F] = v.get(a[D]);
                }
              }
            } catch (q) {
              R = true;
              N = q;
            } finally {
              try {
                if (!O && L.return) {
                  L.return();
                }
              } finally {
                if (R) {
                  throw N;
                }
              }
            }
          }
        } catch (q) {
          S = true;
          x = q;
        } finally {
          try {
            if (!C && A.return) {
              A.return();
            }
          } finally {
            if (S) {
              throw x;
            }
          }
        }
        u.setTransitionTable(y);
        u.setAcceptingStateNumbers(m);
        return u;
      }
      function n(u, e) {
        if (!e) {
          return false;
        }
        if (u.length !== e.length) {
          return false;
        }
        for (var r = 0; r < u.length; r++) {
          var a = u[r];
          var t = e[r];
          if (a.size !== t.size) {
            return false;
          }
          if ([].concat(d(a)).sort().join(",") !== [].concat(d(t)).sort().join(",")) {
            return false;
          }
        }
        return true;
      }
      function f(u, e, r, d) {
        var a = true;
        var t = false;
        var n = undefined;
        try {
          for (var f = d[Symbol.iterator](), c; !(a = (c = f.next()).done); a = true) {
            var o = c.value;
            if (!i(u, e, r, o)) {
              return false;
            }
          }
        } catch (s) {
          t = true;
          n = s;
        } finally {
          try {
            if (!a && f.return) {
              f.return();
            }
          } finally {
            if (t) {
              throw n;
            }
          }
        }
        return true;
      }
      function i(u, e, r, d) {
        if (!a[u] || !a[e]) {
          return false;
        }
        var t = r[u][d];
        var n = r[e][d];
        if (!t && !n) {
          return true;
        }
        return a[u].has(t) && a[e].has(n);
      }
      u.exports = { minimize: t };
    },
    13158: (u, e, r) => {
      var d = (function () {
        function u(u, e) {
          for (var r = 0; r < e.length; r++) {
            var d = e[r];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(u, d.key, d);
          }
        }
        return function (e, r, d) {
          if (r) u(e.prototype, r);
          if (d) u(e, d);
          return e;
        };
      })();
      function a(u) {
        if (Array.isArray(u)) {
          for (var e = 0, r = Array(u.length); e < u.length; e++) {
            r[e] = u[e];
          }
          return r;
        } else {
          return Array.from(u);
        }
      }
      function t(u, e) {
        if (!(u instanceof e)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var n = r(41693);
      var f = r(3341),
        i = f.EPSILON_CLOSURE;
      var c = (function () {
        function u(e) {
          t(this, u);
          this._nfa = e;
        }
        d(u, [
          {
            key: "minimize",
            value: function u() {
              this.getTransitionTable();
              this._originalAcceptingStateNumbers = this._acceptingStateNumbers;
              this._originalTransitionTable = this._transitionTable;
              n.minimize(this);
            },
          },
          {
            key: "getAlphabet",
            value: function u() {
              return this._nfa.getAlphabet();
            },
          },
          {
            key: "getAcceptingStateNumbers",
            value: function u() {
              if (!this._acceptingStateNumbers) {
                this.getTransitionTable();
              }
              return this._acceptingStateNumbers;
            },
          },
          {
            key: "getOriginaAcceptingStateNumbers",
            value: function u() {
              if (!this._originalAcceptingStateNumbers) {
                this.getTransitionTable();
              }
              return this._originalAcceptingStateNumbers;
            },
          },
          {
            key: "setTransitionTable",
            value: function u(e) {
              this._transitionTable = e;
            },
          },
          {
            key: "setAcceptingStateNumbers",
            value: function u(e) {
              this._acceptingStateNumbers = e;
            },
          },
          {
            key: "getTransitionTable",
            value: function u() {
              var e = this;
              if (this._transitionTable) {
                return this._transitionTable;
              }
              var r = this._nfa.getTransitionTable();
              var d = Object.keys(r);
              this._acceptingStateNumbers = new Set();
              var t = r[d[0]][i];
              var n = [t];
              var f = this.getAlphabet();
              var c = this._nfa.getAcceptingStateNumbers();
              var o = {};
              var s = function u(r) {
                var d = true;
                var a = false;
                var t = undefined;
                try {
                  for (var n = c[Symbol.iterator](), f; !(d = (f = n.next()).done); d = true) {
                    var i = f.value;
                    if (r.indexOf(i) !== -1) {
                      e._acceptingStateNumbers.add(r.join(","));
                      break;
                    }
                  }
                } catch (o) {
                  a = true;
                  t = o;
                } finally {
                  try {
                    if (!d && n.return) {
                      n.return();
                    }
                  } finally {
                    if (a) {
                      throw t;
                    }
                  }
                }
              };
              while (n.length > 0) {
                var l = n.shift();
                var b = l.join(",");
                o[b] = {};
                var p = true;
                var h = false;
                var v = undefined;
                try {
                  for (var g = f[Symbol.iterator](), y; !(p = (y = g.next()).done); p = true) {
                    var m = y.value;
                    var _ = [];
                    s(l);
                    var C = true;
                    var S = false;
                    var x = undefined;
                    try {
                      for (var A = l[Symbol.iterator](), k; !(C = (k = A.next()).done); C = true) {
                        var P = k.value;
                        var w = r[P][m];
                        if (!w) {
                          continue;
                        }
                        var E = true;
                        var T = false;
                        var O = undefined;
                        try {
                          for (var R = w[Symbol.iterator](), N; !(E = (N = R.next()).done); E = true) {
                            var L = N.value;
                            if (!r[L]) {
                              continue;
                            }
                            _.push.apply(_, a(r[L][i]));
                          }
                        } catch (M) {
                          T = true;
                          O = M;
                        } finally {
                          try {
                            if (!E && R.return) {
                              R.return();
                            }
                          } finally {
                            if (T) {
                              throw O;
                            }
                          }
                        }
                      }
                    } catch (M) {
                      S = true;
                      x = M;
                    } finally {
                      try {
                        if (!C && A.return) {
                          A.return();
                        }
                      } finally {
                        if (S) {
                          throw x;
                        }
                      }
                    }
                    var I = new Set(_);
                    var F = [].concat(a(I));
                    if (F.length > 0) {
                      var D = F.join(",");
                      o[b][m] = D;
                      if (!o.hasOwnProperty(D)) {
                        n.unshift(F);
                      }
                    }
                  }
                } catch (M) {
                  h = true;
                  v = M;
                } finally {
                  try {
                    if (!p && g.return) {
                      g.return();
                    }
                  } finally {
                    if (h) {
                      throw v;
                    }
                  }
                }
              }
              return (this._transitionTable = this._remapStateNumbers(o));
            },
          },
          {
            key: "_remapStateNumbers",
            value: function u(e) {
              var r = {};
              this._originalTransitionTable = e;
              var d = {};
              Object.keys(e).forEach(function (u, e) {
                r[u] = e + 1;
              });
              for (var a in e) {
                var t = e[a];
                var n = {};
                for (var f in t) {
                  n[f] = r[t[f]];
                }
                d[r[a]] = n;
              }
              this._originalAcceptingStateNumbers = this._acceptingStateNumbers;
              this._acceptingStateNumbers = new Set();
              var i = true;
              var c = false;
              var o = undefined;
              try {
                for (var s = this._originalAcceptingStateNumbers[Symbol.iterator](), l; !(i = (l = s.next()).done); i = true) {
                  var b = l.value;
                  this._acceptingStateNumbers.add(r[b]);
                }
              } catch (p) {
                c = true;
                o = p;
              } finally {
                try {
                  if (!i && s.return) {
                    s.return();
                  }
                } finally {
                  if (c) {
                    throw o;
                  }
                }
              }
              return d;
            },
          },
          {
            key: "getOriginalTransitionTable",
            value: function u() {
              if (!this._originalTransitionTable) {
                this.getTransitionTable();
              }
              return this._originalTransitionTable;
            },
          },
          {
            key: "matches",
            value: function u(e) {
              var r = 1;
              var d = 0;
              var a = this.getTransitionTable();
              while (e[d]) {
                r = a[r][e[d++]];
                if (!r) {
                  return false;
                }
              }
              if (!this.getAcceptingStateNumbers().has(r)) {
                return false;
              }
              return true;
            },
          },
        ]);
        return u;
      })();
      u.exports = c;
    },
    22722: (u, e, r) => {
      var d = r(95050);
      var a = r(13158);
      var t = r(39761);
      var n = r(2970);
      u.exports = {
        NFA: d,
        DFA: a,
        builders: n,
        toNFA: function u(e) {
          return t.build(e);
        },
        toDFA: function u(e) {
          return new a(this.toNFA(e));
        },
        test: function u(e, r) {
          return this.toDFA(e).matches(r);
        },
      };
    },
    2970: (u, e, r) => {
      var d = r(95050);
      var a = r(81115);
      var t = r(3341),
        n = t.EPSILON;
      function f(u) {
        var e = new a();
        var r = new a({ accepting: true });
        return new d(e.addTransition(u, r), r);
      }
      function i() {
        return f(n);
      }
      function c(u, e) {
        u.out.accepting = false;
        e.out.accepting = true;
        u.out.addTransition(n, e.in);
        return new d(u.in, e.out);
      }
      function o(u) {
        for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), d = 1; d < e; d++) {
          r[d - 1] = arguments[d];
        }
        var a = true;
        var t = false;
        var n = undefined;
        try {
          for (var f = r[Symbol.iterator](), i; !(a = (i = f.next()).done); a = true) {
            var o = i.value;
            u = c(u, o);
          }
        } catch (s) {
          t = true;
          n = s;
        } finally {
          try {
            if (!a && f.return) {
              f.return();
            }
          } finally {
            if (t) {
              throw n;
            }
          }
        }
        return u;
      }
      function s(u, e) {
        var r = new a();
        var t = new a();
        r.addTransition(n, u.in);
        r.addTransition(n, e.in);
        t.accepting = true;
        u.out.accepting = false;
        e.out.accepting = false;
        u.out.addTransition(n, t);
        e.out.addTransition(n, t);
        return new d(r, t);
      }
      function l(u) {
        for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), d = 1; d < e; d++) {
          r[d - 1] = arguments[d];
        }
        var a = true;
        var t = false;
        var n = undefined;
        try {
          for (var f = r[Symbol.iterator](), i; !(a = (i = f.next()).done); a = true) {
            var c = i.value;
            u = s(u, c);
          }
        } catch (o) {
          t = true;
          n = o;
        } finally {
          try {
            if (!a && f.return) {
              f.return();
            }
          } finally {
            if (t) {
              throw n;
            }
          }
        }
        return u;
      }
      function b(u) {
        var e = new a();
        var r = new a({ accepting: true });
        e.addTransition(n, u.in);
        e.addTransition(n, r);
        u.out.accepting = false;
        u.out.addTransition(n, r);
        r.addTransition(n, u.in);
        return new d(e, r);
      }
      function p(u) {
        u.in.addTransition(n, u.out);
        u.out.addTransition(n, u.in);
        return u;
      }
      function h(u) {
        u.out.addTransition(n, u.in);
        return u;
      }
      function v(u) {
        u.in.addTransition(n, u.out);
        return u;
      }
      u.exports = { alt: o, char: f, e: i, or: l, rep: p, repExplicit: b, plusRep: h, questionRep: v };
    },
    39761: (u, e, r) => {
      function d(u) {
        if (Array.isArray(u)) {
          for (var e = 0, r = Array(u.length); e < u.length; e++) {
            r[e] = u[e];
          }
          return r;
        } else {
          return Array.from(u);
        }
      }
      var a = r(37112);
      var t = r(2970),
        n = t.alt,
        f = t.char,
        i = t.or,
        c = t.rep,
        o = t.plusRep,
        s = t.questionRep;
      function l(u) {
        if (u && !b[u.type]) {
          throw new Error(u.type + " is not supported in NFA/DFA interpreter.");
        }
        return u ? b[u.type](u) : "";
      }
      var b = {
        RegExp: function u(e) {
          if (e.flags !== "") {
            throw new Error("NFA/DFA: Flags are not supported yet.");
          }
          return l(e.body);
        },
        Alternative: function u(e) {
          var r = (e.expressions || []).map(l);
          return n.apply(undefined, d(r));
        },
        Disjunction: function u(e) {
          return i(l(e.left), l(e.right));
        },
        Repetition: function u(e) {
          switch (e.quantifier.kind) {
            case "*":
              return c(l(e.expression));
            case "+":
              return o(l(e.expression));
            case "?":
              return s(l(e.expression));
            default:
              throw new Error("Unknown repeatition: " + e.quantifier.kind + ".");
          }
        },
        Char: function u(e) {
          if (e.kind !== "simple") {
            throw new Error("NFA/DFA: Only simple chars are supported yet.");
          }
          return f(e.value);
        },
        Group: function u(e) {
          return l(e.expression);
        },
      };
      u.exports = {
        build: function u(e) {
          var r = e;
          if (e instanceof RegExp) {
            e = "" + e;
          }
          if (typeof e === "string") {
            r = a.parse(e, { captureLocations: true });
          }
          return l(r);
        },
      };
    },
    81115: (u, e, r) => {
      var d = (function () {
        function u(u, e) {
          for (var r = 0; r < e.length; r++) {
            var d = e[r];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(u, d.key, d);
          }
        }
        return function (e, r, d) {
          if (r) u(e.prototype, r);
          if (d) u(e, d);
          return e;
        };
      })();
      function a(u, e) {
        if (!(u instanceof e)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function t(u, e) {
        if (!u) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : u;
      }
      function n(u, e) {
        if (typeof e !== "function" && e !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        u.prototype = Object.create(e && e.prototype, { constructor: { value: u, enumerable: false, writable: true, configurable: true } });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(u, e) : (u.__proto__ = e);
      }
      var f = r(74128);
      var i = r(3341),
        c = i.EPSILON;
      var o = (function (u) {
        n(e, u);
        function e() {
          a(this, e);
          return t(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
        }
        d(e, [
          {
            key: "matches",
            value: function u(e) {
              var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();
              if (r.has(this)) {
                return false;
              }
              r.add(this);
              if (e.length === 0) {
                if (this.accepting) {
                  return true;
                }
                var d = true;
                var a = false;
                var t = undefined;
                try {
                  for (var n = this.getTransitionsOnSymbol(c)[Symbol.iterator](), f; !(d = (f = n.next()).done); d = true) {
                    var i = f.value;
                    if (i.matches("", r)) {
                      return true;
                    }
                  }
                } catch (k) {
                  a = true;
                  t = k;
                } finally {
                  try {
                    if (!d && n.return) {
                      n.return();
                    }
                  } finally {
                    if (a) {
                      throw t;
                    }
                  }
                }
                return false;
              }
              var o = e[0];
              var s = e.slice(1);
              var l = this.getTransitionsOnSymbol(o);
              var b = true;
              var p = false;
              var h = undefined;
              try {
                for (var v = l[Symbol.iterator](), g; !(b = (g = v.next()).done); b = true) {
                  var y = g.value;
                  if (y.matches(s)) {
                    return true;
                  }
                }
              } catch (k) {
                p = true;
                h = k;
              } finally {
                try {
                  if (!b && v.return) {
                    v.return();
                  }
                } finally {
                  if (p) {
                    throw h;
                  }
                }
              }
              var m = true;
              var _ = false;
              var C = undefined;
              try {
                for (var S = this.getTransitionsOnSymbol(c)[Symbol.iterator](), x; !(m = (x = S.next()).done); m = true) {
                  var A = x.value;
                  if (A.matches(e, r)) {
                    return true;
                  }
                }
              } catch (k) {
                _ = true;
                C = k;
              } finally {
                try {
                  if (!m && S.return) {
                    S.return();
                  }
                } finally {
                  if (_) {
                    throw C;
                  }
                }
              }
              return false;
            },
          },
          {
            key: "getEpsilonClosure",
            value: function u() {
              var e = this;
              if (!this._epsilonClosure) {
                (function () {
                  var u = e.getTransitionsOnSymbol(c);
                  var r = (e._epsilonClosure = new Set());
                  r.add(e);
                  var d = true;
                  var a = false;
                  var t = undefined;
                  try {
                    for (var n = u[Symbol.iterator](), f; !(d = (f = n.next()).done); d = true) {
                      var i = f.value;
                      if (!r.has(i)) {
                        r.add(i);
                        var o = i.getEpsilonClosure();
                        o.forEach(function (u) {
                          return r.add(u);
                        });
                      }
                    }
                  } catch (s) {
                    a = true;
                    t = s;
                  } finally {
                    try {
                      if (!d && n.return) {
                        n.return();
                      }
                    } finally {
                      if (a) {
                        throw t;
                      }
                    }
                  }
                })();
              }
              return this._epsilonClosure;
            },
          },
        ]);
        return e;
      })(f);
      u.exports = o;
    },
    95050: (u, e, r) => {
      var d = (function () {
        function u(u, e) {
          var r = [];
          var d = true;
          var a = false;
          var t = undefined;
          try {
            for (var n = u[Symbol.iterator](), f; !(d = (f = n.next()).done); d = true) {
              r.push(f.value);
              if (e && r.length === e) break;
            }
          } catch (i) {
            a = true;
            t = i;
          } finally {
            try {
              if (!d && n["return"]) n["return"]();
            } finally {
              if (a) throw t;
            }
          }
          return r;
        }
        return function (e, r) {
          if (Array.isArray(e)) {
            return e;
          } else if (Symbol.iterator in Object(e)) {
            return u(e, r);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      })();
      var a = (function () {
        function u(u, e) {
          for (var r = 0; r < e.length; r++) {
            var d = e[r];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(u, d.key, d);
          }
        }
        return function (e, r, d) {
          if (r) u(e.prototype, r);
          if (d) u(e, d);
          return e;
        };
      })();
      function t(u) {
        if (Array.isArray(u)) {
          for (var e = 0, r = Array(u.length); e < u.length; e++) {
            r[e] = u[e];
          }
          return r;
        } else {
          return Array.from(u);
        }
      }
      function n(u, e) {
        if (!(u instanceof e)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var f = r(3341),
        i = f.EPSILON,
        c = f.EPSILON_CLOSURE;
      var o = (function () {
        function u(e, r) {
          n(this, u);
          this.in = e;
          this.out = r;
        }
        a(u, [
          {
            key: "matches",
            value: function u(e) {
              return this.in.matches(e);
            },
          },
          {
            key: "getAlphabet",
            value: function u() {
              if (!this._alphabet) {
                this._alphabet = new Set();
                var e = this.getTransitionTable();
                for (var r in e) {
                  var d = e[r];
                  for (var a in d) {
                    if (a !== c) {
                      this._alphabet.add(a);
                    }
                  }
                }
              }
              return this._alphabet;
            },
          },
          {
            key: "getAcceptingStates",
            value: function u() {
              if (!this._acceptingStates) {
                this.getTransitionTable();
              }
              return this._acceptingStates;
            },
          },
          {
            key: "getAcceptingStateNumbers",
            value: function u() {
              if (!this._acceptingStateNumbers) {
                this._acceptingStateNumbers = new Set();
                var e = true;
                var r = false;
                var d = undefined;
                try {
                  for (var a = this.getAcceptingStates()[Symbol.iterator](), t; !(e = (t = a.next()).done); e = true) {
                    var n = t.value;
                    this._acceptingStateNumbers.add(n.number);
                  }
                } catch (f) {
                  r = true;
                  d = f;
                } finally {
                  try {
                    if (!e && a.return) {
                      a.return();
                    }
                  } finally {
                    if (r) {
                      throw d;
                    }
                  }
                }
              }
              return this._acceptingStateNumbers;
            },
          },
          {
            key: "getTransitionTable",
            value: function u() {
              var e = this;
              if (!this._transitionTable) {
                this._transitionTable = {};
                this._acceptingStates = new Set();
                var r = new Set();
                var a = new Set();
                var n = function u(t) {
                  if (r.has(t)) {
                    return;
                  }
                  r.add(t);
                  t.number = r.size;
                  e._transitionTable[t.number] = {};
                  if (t.accepting) {
                    e._acceptingStates.add(t);
                  }
                  var n = t.getTransitions();
                  var f = true;
                  var i = false;
                  var c = undefined;
                  try {
                    for (var o = n[Symbol.iterator](), s; !(f = (s = o.next()).done); f = true) {
                      var l = s.value;
                      var b = d(l, 2);
                      var p = b[0];
                      var h = b[1];
                      var v = [];
                      a.add(p);
                      var g = true;
                      var y = false;
                      var m = undefined;
                      try {
                        for (var _ = h[Symbol.iterator](), C; !(g = (C = _.next()).done); g = true) {
                          var S = C.value;
                          u(S);
                          v.push(S.number);
                        }
                      } catch (x) {
                        y = true;
                        m = x;
                      } finally {
                        try {
                          if (!g && _.return) {
                            _.return();
                          }
                        } finally {
                          if (y) {
                            throw m;
                          }
                        }
                      }
                      e._transitionTable[t.number][p] = v;
                    }
                  } catch (x) {
                    i = true;
                    c = x;
                  } finally {
                    try {
                      if (!f && o.return) {
                        o.return();
                      }
                    } finally {
                      if (i) {
                        throw c;
                      }
                    }
                  }
                };
                n(this.in);
                r.forEach(function (u) {
                  delete e._transitionTable[u.number][i];
                  e._transitionTable[u.number][c] = [].concat(t(u.getEpsilonClosure())).map(function (u) {
                    return u.number;
                  });
                });
              }
              return this._transitionTable;
            },
          },
        ]);
        return u;
      })();
      u.exports = o;
    },
    3341: (u) => {
      var e = "ε";
      var r = e + "*";
      u.exports = { EPSILON: e, EPSILON_CLOSURE: r };
    },
    74128: (u) => {
      var e = (function () {
        function u(u, e) {
          for (var r = 0; r < e.length; r++) {
            var d = e[r];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(u, d.key, d);
          }
        }
        return function (e, r, d) {
          if (r) u(e.prototype, r);
          if (d) u(e, d);
          return e;
        };
      })();
      function r(u, e) {
        if (!(u instanceof e)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var d = (function () {
        function u() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            d = e.accepting,
            a = d === undefined ? false : d;
          r(this, u);
          this._transitions = new Map();
          this.accepting = a;
        }
        e(u, [
          {
            key: "getTransitions",
            value: function u() {
              return this._transitions;
            },
          },
          {
            key: "addTransition",
            value: function u(e, r) {
              this.getTransitionsOnSymbol(e).add(r);
              return this;
            },
          },
          {
            key: "getTransitionsOnSymbol",
            value: function u(e) {
              var r = this._transitions.get(e);
              if (!r) {
                r = new Set();
                this._transitions.set(e, r);
              }
              return r;
            },
          },
        ]);
        return u;
      })();
      u.exports = d;
    },
    47393: (u, e, r) => {
      var d = r(60689);
      var a = r(37112);
      var t = r(60045);
      var n = r(55319);
      u.exports = {
        optimize: function u(e) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            f = r.whitelist,
            i = f === undefined ? [] : f,
            c = r.blacklist,
            o = c === undefined ? [] : c;
          var s = i.length > 0 ? i : Array.from(n.keys());
          var l = s.filter(function (u) {
            return !o.includes(u);
          });
          var b = e;
          if (e instanceof RegExp) {
            e = "" + e;
          }
          if (typeof e === "string") {
            b = a.parse(e);
          }
          var p = new t.TransformResult(b);
          var h = void 0;
          do {
            h = p.toString();
            b = d(p.getAST());
            l.forEach(function (u) {
              if (!n.has(u)) {
                throw new Error("Unknown optimization-transform: " + u + ". " + "Available transforms are: " + Array.from(n.keys()).join(", "));
              }
              var e = n.get(u);
              var r = t.transform(b, e);
              if (r.toString() !== p.toString()) {
                if (r.toString().length <= p.toString().length) {
                  p = r;
                } else {
                  b = d(p.getAST());
                }
              }
            });
          } while (p.toString() !== h);
          return p;
        },
      };
    },
    98327: (u) => {
      var e = "A".codePointAt(0);
      var r = "Z".codePointAt(0);
      u.exports = {
        _AZClassRanges: null,
        _hasUFlag: false,
        init: function u(e) {
          this._AZClassRanges = new Set();
          this._hasUFlag = e.flags.includes("u");
        },
        shouldRun: function u(e) {
          return e.flags.includes("i");
        },
        Char: function u(e) {
          var r = e.node,
            t = e.parent;
          if (isNaN(r.codePoint)) {
            return;
          }
          if (!this._hasUFlag && r.codePoint >= 4096) {
            return;
          }
          if (t.type === "ClassRange") {
            if (!this._AZClassRanges.has(t) && !d(t)) {
              return;
            }
            this._AZClassRanges.add(t);
          }
          var n = r.symbol.toLowerCase();
          if (n !== r.symbol) {
            r.value = a(n, r);
            r.symbol = n;
            r.codePoint = n.codePointAt(0);
          }
        },
      };
      function d(u) {
        var d = u.from,
          a = u.to;
        return d.codePoint >= e && d.codePoint <= r && a.codePoint >= e && a.codePoint <= r;
      }
      function a(u, e) {
        var r = u.codePointAt(0);
        if (e.kind === "decimal") {
          return "\\" + r;
        }
        if (e.kind === "oct") {
          return "\\0" + r.toString(8);
        }
        if (e.kind === "hex") {
          return "\\x" + r.toString(16);
        }
        if (e.kind === "unicode") {
          if (e.isSurrogatePair) {
            var d = t(r),
              a = d.lead,
              n = d.trail;
            return "\\u" + "0".repeat(4 - a.length) + a + "\\u" + "0".repeat(4 - n.length) + n;
          } else if (e.value.includes("{")) {
            return "\\u{" + r.toString(16) + "}";
          } else {
            var f = r.toString(16);
            return "\\u" + "0".repeat(4 - f.length) + f;
          }
        }
        return u;
      }
      function t(u) {
        var e = Math.floor((u - 65536) / 1024) + 55296;
        var r = ((u - 65536) % 1024) + 56320;
        return { lead: e.toString(16), trail: r.toString(16) };
      }
    },
    52445: (u) => {
      u.exports = {
        _hasIUFlags: false,
        init: function u(e) {
          this._hasIUFlags = e.flags.includes("i") && e.flags.includes("u");
        },
        CharacterClass: function u(r) {
          var a = r.node;
          var n = a.expressions;
          var f = [];
          n.forEach(function (u) {
            if (d(u)) {
              f.push(u.value);
            }
          });
          n.sort(e);
          for (var i = 0; i < n.length; i++) {
            var c = n[i];
            if (t(c, f, this._hasIUFlags) || o(c, n[i - 1]) || s(c, n[i + 1])) {
              n.splice(i, 1);
              i--;
            } else {
              var l = b(c, i, n);
              n.splice(i - l + 1, l);
              i -= l;
            }
          }
        },
      };
      function e(u, e) {
        var t = r(u);
        var n = r(e);
        if (t === n) {
          if (u.type === "ClassRange" && e.type !== "ClassRange") {
            return -1;
          }
          if (e.type === "ClassRange" && u.type !== "ClassRange") {
            return 1;
          }
          if (u.type === "ClassRange" && e.type === "ClassRange") {
            return r(u.to) - r(e.to);
          }
          if ((d(u) && d(e)) || (a(u) && a(e))) {
            return u.value < e.value ? -1 : 1;
          }
        }
        return t - n;
      }
      function r(u) {
        if (u.type === "Char") {
          if (u.value === "-") {
            return Infinity;
          }
          if (u.kind === "control") {
            return Infinity;
          }
          if (u.kind === "meta" && isNaN(u.codePoint)) {
            return -1;
          }
          return u.codePoint;
        }
        return u.from.codePoint;
      }
      function d(u) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return u.type === "Char" && u.kind === "meta" && (e ? u.value === e : /^\\[dws]$/i.test(u.value));
      }
      function a(u) {
        return u.type === "Char" && u.kind === "control";
      }
      function t(u, e, r) {
        for (var d = 0; d < e.length; d++) {
          if (n(u, e[d], r)) {
            return true;
          }
        }
        return false;
      }
      function n(u, e, r) {
        if (u.type === "ClassRange") {
          return n(u.from, e, r) && n(u.to, e, r);
        }
        if (e === "\\S" && (d(u, "\\w") || d(u, "\\d"))) {
          return true;
        }
        if (e === "\\D" && (d(u, "\\W") || d(u, "\\s"))) {
          return true;
        }
        if (e === "\\w" && d(u, "\\d")) {
          return true;
        }
        if (e === "\\W" && d(u, "\\s")) {
          return true;
        }
        if (u.type !== "Char" || isNaN(u.codePoint)) {
          return false;
        }
        if (e === "\\s") {
          return f(u);
        }
        if (e === "\\S") {
          return !f(u);
        }
        if (e === "\\d") {
          return i(u);
        }
        if (e === "\\D") {
          return !i(u);
        }
        if (e === "\\w") {
          return c(u, r);
        }
        if (e === "\\W") {
          return !c(u, r);
        }
        return false;
      }
      function f(u) {
        return (
          u.codePoint === 9 ||
          u.codePoint === 10 ||
          u.codePoint === 11 ||
          u.codePoint === 12 ||
          u.codePoint === 13 ||
          u.codePoint === 32 ||
          u.codePoint === 160 ||
          u.codePoint === 5760 ||
          (u.codePoint >= 8192 && u.codePoint <= 8202) ||
          u.codePoint === 8232 ||
          u.codePoint === 8233 ||
          u.codePoint === 8239 ||
          u.codePoint === 8287 ||
          u.codePoint === 12288 ||
          u.codePoint === 65279
        );
      }
      function i(u) {
        return u.codePoint >= 48 && u.codePoint <= 57;
      }
      function c(u, e) {
        return (
          i(u) ||
          (u.codePoint >= 65 && u.codePoint <= 90) ||
          (u.codePoint >= 97 && u.codePoint <= 122) ||
          u.value === "_" ||
          (e && (u.codePoint === 383 || u.codePoint === 8490))
        );
      }
      function o(u, e) {
        if (e && e.type === "ClassRange") {
          if (l(u, e)) {
            return true;
          } else if (p(u) && e.to.codePoint === u.codePoint - 1) {
            e.to = u;
            return true;
          } else if (u.type === "ClassRange" && u.from.codePoint <= e.to.codePoint + 1 && u.to.codePoint >= e.from.codePoint - 1) {
            if (u.from.codePoint < e.from.codePoint) {
              e.from = u.from;
            }
            if (u.to.codePoint > e.to.codePoint) {
              e.to = u.to;
            }
            return true;
          }
        }
        return false;
      }
      function s(u, e) {
        if (e && e.type === "ClassRange") {
          if (p(u) && e.from.codePoint === u.codePoint + 1) {
            e.from = u;
            return true;
          }
        }
        return false;
      }
      function l(u, e) {
        if (u.type === "Char" && isNaN(u.codePoint)) {
          return false;
        }
        if (u.type === "ClassRange") {
          return l(u.from, e) && l(u.to, e);
        }
        return u.codePoint >= e.from.codePoint && u.codePoint <= e.to.codePoint;
      }
      function b(u, e, r) {
        if (!p(u)) {
          return 0;
        }
        var d = 0;
        while (e > 0) {
          var a = r[e];
          var t = r[e - 1];
          if (p(t) && t.codePoint === a.codePoint - 1) {
            d++;
            e--;
          } else {
            break;
          }
        }
        if (d > 1) {
          r[e] = { type: "ClassRange", from: r[e], to: u };
          return d;
        }
        return 0;
      }
      function p(u) {
        return (
          u &&
          u.type === "Char" &&
          !isNaN(u.codePoint) &&
          (c(u, false) || u.kind === "unicode" || u.kind === "hex" || u.kind === "oct" || u.kind === "decimal")
        );
      }
    },
    54122: (u) => {
      u.exports = {
        ClassRange: function u(e) {
          var r = e.node;
          if (r.from.codePoint === r.to.codePoint) {
            e.replace(r.from);
          } else if (r.from.codePoint === r.to.codePoint - 1) {
            e.getParent().insertChildAt(r.to, e.index + 1);
            e.replace(r.from);
          }
        },
      };
    },
    71216: (u) => {
      u.exports = {
        CharacterClass: function u(e) {
          var r = e.node;
          var d = {};
          for (var a = 0; a < r.expressions.length; a++) {
            var t = e.getChild(a);
            var n = t.jsonEncode();
            if (d.hasOwnProperty(n)) {
              t.remove();
              a--;
            }
            d[n] = true;
          }
        },
      };
    },
    94126: (u) => {
      function e(u) {
        if (Array.isArray(u)) {
          for (var e = 0, r = Array(u.length); e < u.length; e++) {
            r[e] = u[e];
          }
          return r;
        } else {
          return Array.from(u);
        }
      }
      u.exports = {
        _hasIFlag: false,
        _hasUFlag: false,
        init: function u(e) {
          this._hasIFlag = e.flags.includes("i");
          this._hasUFlag = e.flags.includes("u");
        },
        CharacterClass: function u(e) {
          r(e);
          d(e, this._hasIFlag, this._hasUFlag);
          t(e);
        },
      };
      function r(u) {
        var e = u.node;
        e.expressions.forEach(function (e, r) {
          if (n(e)) {
            u.getChild(r).replace({ type: "Char", value: "\\d", kind: "meta" });
          }
        });
      }
      function d(u, e, r) {
        var d = u.node;
        var a = null;
        var t = null;
        var n = null;
        var f = null;
        var b = null;
        var p = null;
        d.expressions.forEach(function (d, h) {
          if (i(d, "\\d")) {
            a = u.getChild(h);
          } else if (c(d)) {
            t = u.getChild(h);
          } else if (o(d)) {
            n = u.getChild(h);
          } else if (s(d)) {
            f = u.getChild(h);
          } else if (e && r && l(d, 383)) {
            b = u.getChild(h);
          } else if (e && r && l(d, 8490)) {
            p = u.getChild(h);
          }
        });
        if (a && ((t && n) || (e && (t || n))) && f && (!r || !e || (b && p))) {
          a.replace({ type: "Char", value: "\\w", kind: "meta" });
          if (t) {
            t.remove();
          }
          if (n) {
            n.remove();
          }
          f.remove();
          if (b) {
            b.remove();
          }
          if (p) {
            p.remove();
          }
        }
      }
      var a = [
        function (u) {
          return f(u, " ");
        },
      ].concat(
        e(
          ["\\f", "\\n", "\\r", "\\t", "\\v"].map(function (u) {
            return function (e) {
              return i(e, u);
            };
          })
        ),
        e(
          [160, 5760, 8232, 8233, 8239, 8287, 12288, 65279].map(function (u) {
            return function (e) {
              return l(e, u);
            };
          })
        ),
        [
          function (u) {
            return u.type === "ClassRange" && l(u.from, 8192) && l(u.to, 8202);
          },
        ]
      );
      function t(u) {
        var e = u.node;
        if (
          e.expressions.length < a.length ||
          !a.every(function (u) {
            return e.expressions.some(function (e) {
              return u(e);
            });
          })
        ) {
          return;
        }
        var r = e.expressions.find(function (u) {
          return i(u, "\\n");
        });
        r.value = "\\s";
        r.symbol = undefined;
        r.codePoint = NaN;
        e.expressions
          .map(function (e, r) {
            return a.some(function (u) {
              return u(e);
            })
              ? u.getChild(r)
              : undefined;
          })
          .filter(Boolean)
          .forEach(function (u) {
            return u.remove();
          });
      }
      function n(u) {
        return u.type === "ClassRange" && u.from.value === "0" && u.to.value === "9";
      }
      function f(u, e) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "simple";
        return u.type === "Char" && u.value === e && u.kind === r;
      }
      function i(u, e) {
        return f(u, e, "meta");
      }
      function c(u) {
        return u.type === "ClassRange" && u.from.value === "a" && u.to.value === "z";
      }
      function o(u) {
        return u.type === "ClassRange" && u.from.value === "A" && u.to.value === "Z";
      }
      function s(u) {
        return u.type === "Char" && u.value === "_" && u.kind === "simple";
      }
      function l(u, e) {
        return u.type === "Char" && u.kind === "unicode" && u.codePoint === e;
      }
    },
    1949: (u) => {
      u.exports = {
        CharacterClass: function u(n) {
          var f = n.node;
          if (f.expressions.length !== 1 || !a(n) || !e(f.expressions[0])) {
            return;
          }
          var i = f.expressions[0],
            c = i.value,
            o = i.kind,
            s = i.escaped;
          if (f.negative) {
            if (!r(c)) {
              return;
            }
            c = d(c);
          }
          n.replace({ type: "Char", value: c, kind: o, escaped: s || t(c) });
        },
      };
      function e(u) {
        return u.type === "Char" && u.value !== "\\b";
      }
      function r(u) {
        return /^\\[dwsDWS]$/.test(u);
      }
      function d(u) {
        return /[dws]/.test(u) ? u.toUpperCase() : u.toLowerCase();
      }
      function a(u) {
        var e = u.parent,
          r = u.index;
        if (e.type !== "Alternative") {
          return true;
        }
        var d = e.expressions[r - 1];
        if (d == null) {
          return true;
        }
        if (d.type === "Backreference" && d.kind === "number") {
          return false;
        }
        if (d.type === "Char" && d.kind === "decimal") {
          return false;
        }
        return true;
      }
      function t(u) {
        return /[*[()+?$./{}|]/.test(u);
      }
    },
    57335: (u) => {
      var e = "A".codePointAt(0);
      var r = "Z".codePointAt(0);
      var d = "a".codePointAt(0);
      var a = "z".codePointAt(0);
      var t = "0".codePointAt(0);
      var n = "9".codePointAt(0);
      u.exports = {
        Char: function u(e) {
          var r = e.node,
            d = e.parent;
          if (isNaN(r.codePoint) || r.kind === "simple") {
            return;
          }
          if (d.type === "ClassRange") {
            if (!f(d)) {
              return;
            }
          }
          if (!i(r.codePoint)) {
            return;
          }
          var a = String.fromCodePoint(r.codePoint);
          var t = { type: "Char", kind: "simple", value: a, symbol: a, codePoint: r.codePoint };
          if (c(a, d.type)) {
            t.escaped = true;
          }
          e.replace(t);
        },
      };
      function f(u) {
        var f = u.from,
          i = u.to;
        return (
          (f.codePoint >= t && f.codePoint <= n && i.codePoint >= t && i.codePoint <= n) ||
          (f.codePoint >= e && f.codePoint <= r && i.codePoint >= e && i.codePoint <= r) ||
          (f.codePoint >= d && f.codePoint <= a && i.codePoint >= d && i.codePoint <= a)
        );
      }
      function i(u) {
        return u >= 32 && u <= 126;
      }
      function c(u, e) {
        if (e === "ClassRange" || e === "CharacterClass") {
          return /[\]\\^-]/.test(u);
        }
        return /[*[()+?^$./\\|{}]/.test(u);
      }
    },
    29141: (u) => {
      u.exports = {
        _hasXFlag: false,
        init: function u(e) {
          this._hasXFlag = e.flags.includes("x");
        },
        Char: function u(r) {
          var d = r.node;
          if (!d.escaped) {
            return;
          }
          if (e(r, this._hasXFlag)) {
            delete d.escaped;
          }
        },
      };
      function e(u, e) {
        var a = u.node.value,
          t = u.index,
          n = u.parent;
        if (n.type !== "CharacterClass" && n.type !== "ClassRange") {
          return !d(a, t, n, e);
        }
        return !r(a, t, n);
      }
      function r(u, e, r) {
        if (u === "^") {
          return e === 0 && !r.negative;
        }
        if (u === "-") {
          return true;
        }
        return /[\]\\]/.test(u);
      }
      function d(u, e, r, d) {
        if (u === "{") {
          return n(e, r);
        }
        if (u === "}") {
          return f(e, r);
        }
        if (d && /[ #]/.test(u)) {
          return true;
        }
        return /[*[()+?^$./\\|]/.test(u);
      }
      function a(u, e, r) {
        var d = u;
        var a = (r ? d >= 0 : d < e.expressions.length) && e.expressions[d];
        while (a && a.type === "Char" && a.kind === "simple" && !a.escaped && /\d/.test(a.value)) {
          r ? d-- : d++;
          a = (r ? d >= 0 : d < e.expressions.length) && e.expressions[d];
        }
        return Math.abs(u - d);
      }
      function t(u, e) {
        return u && u.type === "Char" && u.kind === "simple" && !u.escaped && u.value === e;
      }
      function n(u, e) {
        if (u == null) {
          return false;
        }
        var r = a(u + 1, e);
        var d = u + r + 1;
        var n = d < e.expressions.length && e.expressions[d];
        if (r) {
          if (t(n, "}")) {
            return true;
          }
          if (t(n, ",")) {
            r = a(d + 1, e);
            d = d + r + 1;
            n = d < e.expressions.length && e.expressions[d];
            return t(n, "}");
          }
        }
        return false;
      }
      function f(u, e) {
        if (u == null) {
          return false;
        }
        var r = a(u - 1, e, true);
        var d = u - r - 1;
        var n = d >= 0 && e.expressions[d];
        if (r && t(n, "{")) {
          return true;
        }
        if (t(n, ",")) {
          r = a(d - 1, e, true);
          d = d - r - 1;
          n = d < e.expressions.length && e.expressions[d];
          return r && t(n, "{");
        }
        return false;
      }
    },
    93843: (u) => {
      u.exports = {
        shouldRun: function u(e) {
          return e.flags.includes("u");
        },
        Char: function u(e) {
          var r = e.node;
          if (r.kind !== "unicode" || !r.isSurrogatePair || isNaN(r.codePoint)) {
            return;
          }
          r.value = "\\u{" + r.codePoint.toString(16) + "}";
          delete r.isSurrogatePair;
        },
      };
    },
    61143: (u, e, r) => {
      function d(u) {
        if (Array.isArray(u)) {
          for (var e = 0, r = Array(u.length); e < u.length; e++) {
            r[e] = u[e];
          }
          return r;
        } else {
          return Array.from(u);
        }
      }
      var a = r(27762);
      var t = r(26554),
        n = t.increaseQuantifierByOne;
      u.exports = {
        Alternative: function u(e) {
          var r = e.node;
          var d = 1;
          while (d < r.expressions.length) {
            var a = e.getChild(d);
            d = Math.max(1, f(e, a, d));
            if (d >= r.expressions.length) {
              break;
            }
            a = e.getChild(d);
            d = Math.max(1, i(e, a, d));
            if (d >= r.expressions.length) {
              break;
            }
            a = e.getChild(d);
            d = Math.max(1, c(e, a, d));
            d++;
          }
        },
      };
      function f(u, e, r) {
        var t = u.node;
        var n = Math.ceil(r / 2);
        var f = 0;
        while (f < n) {
          var i = r - 2 * f - 1;
          var c = void 0,
            o = void 0;
          if (f === 0) {
            c = e;
            o = u.getChild(i);
          } else {
            c = a.getForNode({ type: "Alternative", expressions: [].concat(d(t.expressions.slice(r - f, r)), [e.node]) });
            o = a.getForNode({ type: "Alternative", expressions: [].concat(d(t.expressions.slice(i, r - f))) });
          }
          if (c.hasEqualSource(o)) {
            for (var s = 0; s < 2 * f + 1; s++) {
              u.getChild(i).remove();
            }
            e.replace({
              type: "Repetition",
              expression: f === 0 && c.node.type !== "Repetition" ? c.node : { type: "Group", capturing: false, expression: c.node },
              quantifier: { type: "Quantifier", kind: "Range", from: 2, to: 2, greedy: true },
            });
            return i;
          }
          f++;
        }
        return r;
      }
      function i(u, e, r) {
        var t = u.node;
        var f = 0;
        while (f < r) {
          var i = u.getChild(f);
          if (i.node.type === "Repetition" && i.node.quantifier.greedy) {
            var c = i.getChild();
            var o = void 0;
            if (c.node.type === "Group" && !c.node.capturing) {
              c = c.getChild();
            }
            if (f + 1 === r) {
              o = e;
              if (o.node.type === "Group" && !o.node.capturing) {
                o = o.getChild();
              }
            } else {
              o = a.getForNode({ type: "Alternative", expressions: [].concat(d(t.expressions.slice(f + 1, r + 1))) });
            }
            if (c.hasEqualSource(o)) {
              for (var s = f; s < r; s++) {
                u.getChild(f + 1).remove();
              }
              n(i.node.quantifier);
              return f;
            }
          }
          f++;
        }
        return r;
      }
      function c(u, e, r) {
        var t = u.node;
        if (e.node.type === "Repetition" && e.node.quantifier.greedy) {
          var f = e.getChild();
          var i = void 0;
          if (f.node.type === "Group" && !f.node.capturing) {
            f = f.getChild();
          }
          var c = void 0;
          if (f.node.type === "Alternative") {
            c = f.node.expressions.length;
            i = a.getForNode({ type: "Alternative", expressions: [].concat(d(t.expressions.slice(r - c, r))) });
          } else {
            c = 1;
            i = u.getChild(r - 1);
            if (i.node.type === "Group" && !i.node.capturing) {
              i = i.getChild();
            }
          }
          if (i.hasEqualSource(f)) {
            for (var o = r - c; o < r; o++) {
              u.getChild(r - c).remove();
            }
            n(e.node.quantifier);
            return r - c;
          }
        }
        return r;
      }
    },
    49895: (u, e, r) => {
      var d = r(27762);
      var a = r(26554),
        t = a.disjunctionToList,
        n = a.listToDisjunction;
      u.exports = {
        Disjunction: function u(e) {
          var r = e.node;
          var a = {};
          var f = t(r).filter(function (u) {
            var e = u ? d.getForNode(u).jsonEncode() : "null";
            if (a.hasOwnProperty(e)) {
              return false;
            }
            a[e] = u;
            return true;
          });
          e.replace(n(f));
        },
      };
    },
    40623: (u) => {
      u.exports = {
        Disjunction: function u(d) {
          var a = d.node,
            t = d.parent;
          if (!e[t.type]) {
            return;
          }
          var n = new Map();
          if (!r(a, n) || !n.size) {
            return;
          }
          var f = {
            type: "CharacterClass",
            expressions: Array.from(n.keys())
              .sort()
              .map(function (u) {
                return n.get(u);
              }),
          };
          e[t.type](d.getParent(), f);
        },
      };
      var e = {
        RegExp: function u(e, r) {
          var d = e.node;
          d.body = r;
        },
        Group: function u(e, r) {
          var d = e.node;
          if (d.capturing) {
            d.expression = r;
          } else {
            e.replace(r);
          }
        },
      };
      function r(u, e) {
        if (!u) {
          return false;
        }
        var d = u.type;
        if (d === "Disjunction") {
          var a = u.left,
            t = u.right;
          return r(a, e) && r(t, e);
        } else if (d === "Char") {
          var n = u.value;
          e.set(n, u);
          return true;
        } else if (d === "CharacterClass" && !u.negative) {
          return u.expressions.every(function (u) {
            return r(u, e);
          });
        }
        return false;
      }
    },
    55319: (u, e, r) => {
      u.exports = new Map([
        ["charSurrogatePairToSingleUnicode", r(93843)],
        ["charCodeToSimpleChar", r(57335)],
        ["charCaseInsensitiveLowerCaseTransform", r(98327)],
        ["charClassRemoveDuplicates", r(71216)],
        ["quantifiersMerge", r(58124)],
        ["quantifierRangeToSymbol", r(81280)],
        ["charClassClassrangesToChars", r(54122)],
        ["charClassToMeta", r(94126)],
        ["charClassToSingleChar", r(1949)],
        ["charEscapeUnescape", r(29141)],
        ["charClassClassrangesMerge", r(52445)],
        ["disjunctionRemoveDuplicates", r(49895)],
        ["groupSingleCharsToCharClass", r(40623)],
        ["removeEmptyGroup", r(22223)],
        ["ungroup", r(14952)],
        ["combineRepeatingPatterns", r(61143)],
      ]);
    },
    81280: (u) => {
      u.exports = {
        Quantifier: function u(a) {
          var t = a.node;
          if (t.kind !== "Range") {
            return;
          }
          e(a);
          r(a);
          d(a);
        },
      };
      function e(u) {
        var e = u.node;
        if (e.from !== 0 || e.to) {
          return;
        }
        e.kind = "*";
        delete e.from;
      }
      function r(u) {
        var e = u.node;
        if (e.from !== 1 || e.to) {
          return;
        }
        e.kind = "+";
        delete e.from;
      }
      function d(u) {
        var e = u.node;
        if (e.from !== 1 || e.to !== 1) {
          return;
        }
        u.parentPath.replace(u.parentPath.node.expression);
      }
    },
    58124: (u, e, r) => {
      var d = r(26554),
        a = d.increaseQuantifierByOne;
      u.exports = {
        Repetition: function u(e) {
          var r = e.node,
            d = e.parent;
          if (d.type !== "Alternative" || !e.index) {
            return;
          }
          var f = e.getPreviousSibling();
          if (!f) {
            return;
          }
          if (f.node.type === "Repetition") {
            if (!f.getChild().hasEqualSource(e.getChild())) {
              return;
            }
            var i = n(f.node.quantifier),
              c = i.from,
              o = i.to;
            var s = n(r.quantifier),
              l = s.from,
              b = s.to;
            if (f.node.quantifier.greedy !== r.quantifier.greedy && !t(f.node.quantifier) && !t(r.quantifier)) {
              return;
            }
            r.quantifier.kind = "Range";
            r.quantifier.from = c + l;
            if (o && b) {
              r.quantifier.to = o + b;
            } else {
              delete r.quantifier.to;
            }
            if (t(f.node.quantifier) || t(r.quantifier)) {
              r.quantifier.greedy = true;
            }
            f.remove();
          } else {
            if (!f.hasEqualSource(e.getChild())) {
              return;
            }
            a(r.quantifier);
            f.remove();
          }
        },
      };
      function t(u) {
        return u.greedy && (u.kind === "+" || u.kind === "*" || (u.kind === "Range" && !u.to));
      }
      function n(u) {
        var e = void 0,
          r = void 0;
        if (u.kind === "*") {
          e = 0;
        } else if (u.kind === "+") {
          e = 1;
        } else if (u.kind === "?") {
          e = 0;
          r = 1;
        } else {
          e = u.from;
          if (u.to) {
            r = u.to;
          }
        }
        return { from: e, to: r };
      }
    },
    22223: (u) => {
      u.exports = {
        Group: function u(e) {
          var r = e.node,
            d = e.parent;
          var a = e.getChild();
          if (r.capturing || a) {
            return;
          }
          if (d.type === "Repetition") {
            e.getParent().replace(r);
          } else if (d.type !== "RegExp") {
            e.remove();
          }
        },
      };
    },
    14952: (u) => {
      function e(u) {
        if (Array.isArray(u)) {
          for (var e = 0, r = Array(u.length); e < u.length; e++) {
            r[e] = u[e];
          }
          return r;
        } else {
          return Array.from(u);
        }
      }
      u.exports = {
        Group: function u(d) {
          var a = d.node,
            t = d.parent;
          var n = d.getChild();
          if (a.capturing || !n) {
            return;
          }
          if (!r(d)) {
            return;
          }
          if (n.node.type === "Disjunction" && t.type !== "RegExp") {
            return;
          }
          if (t.type === "Repetition" && n.node.type !== "Char" && n.node.type !== "CharacterClass") {
            return;
          }
          if (n.node.type === "Alternative") {
            var f = d.getParent();
            if (f.node.type === "Alternative") {
              f.replace({
                type: "Alternative",
                expressions: [].concat(e(t.expressions.slice(0, d.index)), e(n.node.expressions), e(t.expressions.slice(d.index + 1))),
              });
            }
          } else {
            d.replace(n.node);
          }
        },
      };
      function r(u) {
        var e = u.parent,
          r = u.index;
        if (e.type !== "Alternative") {
          return true;
        }
        var d = e.expressions[r - 1];
        if (d == null) {
          return true;
        }
        if (d.type === "Backreference" && d.kind === "number") {
          return false;
        }
        if (d.type === "Char" && d.kind === "decimal") {
          return false;
        }
        return true;
      }
    },
    42669: (u, e, r) => {
      var d = (function () {
        function u(u, e) {
          var r = [];
          var d = true;
          var a = false;
          var t = undefined;
          try {
            for (var n = u[Symbol.iterator](), f; !(d = (f = n.next()).done); d = true) {
              r.push(f.value);
              if (e && r.length === e) break;
            }
          } catch (i) {
            a = true;
            t = i;
          } finally {
            try {
              if (!d && n["return"]) n["return"]();
            } finally {
              if (a) throw t;
            }
          }
          return r;
        }
        return function (e, r) {
          if (Array.isArray(e)) {
            return e;
          } else if (Symbol.iterator in Object(e)) {
            return u(e, r);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      })();
      function a(u) {
        if (Array.isArray(u)) {
          for (var e = 0, r = Array(u.length); e < u.length; e++) {
            r[e] = u[e];
          }
          return r;
        } else {
          return Array.from(u);
        }
      }
      var t = void 0;
      var n = void 0;
      var f = {};
      var i = void 0;
      var c = void 0;
      function o(u, e) {
        if (!f.options.captureLocations) {
          return null;
        }
        if (!u || !e) {
          return u || e;
        }
        return {
          startOffset: u.startOffset,
          endOffset: e.endOffset,
          startLine: u.startLine,
          endLine: e.endLine,
          startColumn: u.startColumn,
          endColumn: e.endColumn,
        };
      }
      var s = "$";
      var l = [
        [
          -1,
          1,
          function (u, e) {
            c = o(e, e);
            i = u;
          },
        ],
        [
          0,
          4,
          function (u, e, r, d, a, t, n, f) {
            c = o(a, f);
            i = j({ type: "RegExp", body: e, flags: O(d) }, B(a, f || n));
          },
        ],
        [
          1,
          1,
          function (u, e) {
            c = o(e, e);
            i = u;
          },
        ],
        [
          1,
          0,
          function () {
            c = null;
            i = "";
          },
        ],
        [
          2,
          1,
          function (u, e) {
            c = o(e, e);
            i = u;
          },
        ],
        [
          2,
          2,
          function (u, e, r, d) {
            c = o(r, d);
            i = u + e;
          },
        ],
        [
          3,
          1,
          function (u, e) {
            c = o(e, e);
            i = u;
          },
        ],
        [
          4,
          1,
          function (u, e) {
            c = o(e, e);
            i = u;
          },
        ],
        [
          4,
          3,
          function (u, e, r, d, a, t) {
            c = o(d, t);
            var n = null;
            if (a) {
              n = B(d || a, t || a);
            }
            i = j({ type: "Disjunction", left: u, right: r }, n);
          },
        ],
        [
          5,
          1,
          function (u, e) {
            c = o(e, e);
            if (u.length === 0) {
              i = null;
              return;
            }
            if (u.length === 1) {
              i = j(u[0], c);
            } else {
              i = j({ type: "Alternative", expressions: u }, c);
            }
          },
        ],
        [
          6,
          0,
          function () {
            c = null;
            i = [];
          },
        ],
        [
          6,
          2,
          function (u, e, r, d) {
            c = o(r, d);
            i = u.concat(e);
          },
        ],
        [
          7,
          1,
          function (u, e) {
            c = o(e, e);
            i = j(Object.assign({ type: "Assertion" }, u), c);
          },
        ],
        [
          7,
          2,
          function (u, e, r, d) {
            c = o(r, d);
            i = u;
            if (e) {
              i = j({ type: "Repetition", expression: u, quantifier: e }, c);
            }
          },
        ],
        [
          8,
          1,
          function (u, e) {
            c = o(e, e);
            i = { kind: "^" };
          },
        ],
        [
          8,
          1,
          function (u, e) {
            c = o(e, e);
            i = { kind: "$" };
          },
        ],
        [
          8,
          1,
          function (u, e) {
            c = o(e, e);
            i = { kind: "\\b" };
          },
        ],
        [
          8,
          1,
          function (u, e) {
            c = o(e, e);
            i = { kind: "\\B" };
          },
        ],
        [
          8,
          3,
          function (u, e, r, d, a, t) {
            c = o(d, t);
            i = { kind: "Lookahead", assertion: e };
          },
        ],
        [
          8,
          3,
          function (u, e, r, d, a, t) {
            c = o(d, t);
            i = { kind: "Lookahead", negative: true, assertion: e };
          },
        ],
        [
          8,
          3,
          function (u, e, r, d, a, t) {
            c = o(d, t);
            i = { kind: "Lookbehind", assertion: e };
          },
        ],
        [
          8,
          3,
          function (u, e, r, d, a, t) {
            c = o(d, t);
            i = { kind: "Lookbehind", negative: true, assertion: e };
          },
        ],
        [
          9,
          1,
          function (u, e) {
            c = o(e, e);
            i = u;
          },
        ],
        [
          9,
          1,
          function (u, e) {
            c = o(e, e);
            i = u;
          },
        ],
        [
          9,
          1,
          function (u, e) {
            c = o(e, e);
            i = u;
          },
        ],
        [
          10,
          1,
          function (u, e) {
            c = o(e, e);
            i = E(u, "simple", c);
          },
        ],
        [
          10,
          1,
          function (u, e) {
            c = o(e, e);
            i = E(u.slice(1), "simple", c);
            i.escaped = true;
          },
        ],
        [
          10,
          1,
          function (u, e) {
            c = o(e, e);
            i = E(u, "unicode", c);
            i.isSurrogatePair = true;
          },
        ],
        [
          10,
          1,
          function (u, e) {
            c = o(e, e);
            i = E(u, "unicode", c);
          },
        ],
        [
          10,
          1,
          function (u, e) {
            c = o(e, e);
            i = w(u, c);
          },
        ],
        [
          10,
          1,
          function (u, e) {
            c = o(e, e);
            i = E(u, "control", c);
          },
        ],
        [
          10,
          1,
          function (u, e) {
            c = o(e, e);
            i = E(u, "hex", c);
          },
        ],
        [
          10,
          1,
          function (u, e) {
            c = o(e, e);
            i = E(u, "oct", c);
          },
        ],
        [
          10,
          1,
          function (u, e) {
            c = o(e, e);
            i = R(u, c);
          },
        ],
        [
          10,
          1,
          function (u, e) {
            c = o(e, e);
            i = E(u, "meta", c);
          },
        ],
        [
          10,
          1,
          function (u, e) {
            c = o(e, e);
            i = E(u, "meta", c);
          },
        ],
        [
          10,
          1,
          function (u, e) {
            c = o(e, e);
            i = G(u, e);
          },
        ],
        [
          11,
          1,
          function (u, e) {
            c = o(e, e);
            i = u;
          },
        ],
        [11, 0],
        [
          12,
          1,
          function (u, e) {
            c = o(e, e);
            i = u;
          },
        ],
        [
          12,
          2,
          function (u, e, r, d) {
            c = o(r, d);
            u.greedy = false;
            i = u;
          },
        ],
        [
          13,
          1,
          function (u, e) {
            c = o(e, e);
            i = j({ type: "Quantifier", kind: u, greedy: true }, c);
          },
        ],
        [
          13,
          1,
          function (u, e) {
            c = o(e, e);
            i = j({ type: "Quantifier", kind: u, greedy: true }, c);
          },
        ],
        [
          13,
          1,
          function (u, e) {
            c = o(e, e);
            i = j({ type: "Quantifier", kind: u, greedy: true }, c);
          },
        ],
        [
          13,
          1,
          function (u, e) {
            c = o(e, e);
            var r = A(u);
            i = j({ type: "Quantifier", kind: "Range", from: r[0], to: r[0], greedy: true }, c);
          },
        ],
        [
          13,
          1,
          function (u, e) {
            c = o(e, e);
            i = j({ type: "Quantifier", kind: "Range", from: A(u)[0], greedy: true }, c);
          },
        ],
        [
          13,
          1,
          function (u, e) {
            c = o(e, e);
            var r = A(u);
            i = j({ type: "Quantifier", kind: "Range", from: r[0], to: r[1], greedy: true }, c);
          },
        ],
        [
          14,
          1,
          function (u, e) {
            c = o(e, e);
            i = u;
          },
        ],
        [
          14,
          1,
          function (u, e) {
            c = o(e, e);
            i = u;
          },
        ],
        [
          15,
          3,
          function (u, e, r, d, a, t) {
            c = o(d, t);
            var n = String(u);
            var s = M(n);
            if (!f.options.allowGroupNameDuplicates && S.hasOwnProperty(s)) {
              throw new SyntaxError('Duplicate of the named group "' + s + '".');
            }
            S[s] = u.groupNumber;
            i = j({ type: "Group", capturing: true, name: s, nameRaw: n, number: u.groupNumber, expression: e }, c);
          },
        ],
        [
          15,
          3,
          function (u, e, r, d, a, t) {
            c = o(d, t);
            i = j({ type: "Group", capturing: true, number: u.groupNumber, expression: e }, c);
          },
        ],
        [
          16,
          3,
          function (u, e, r, d, a, t) {
            c = o(d, t);
            i = j({ type: "Group", capturing: false, expression: e }, c);
          },
        ],
        [
          17,
          3,
          function (u, e, r, d, a, t) {
            c = o(d, t);
            i = j({ type: "CharacterClass", negative: true, expressions: e }, c);
          },
        ],
        [
          17,
          3,
          function (u, e, r, d, a, t) {
            c = o(d, t);
            i = j({ type: "CharacterClass", expressions: e }, c);
          },
        ],
        [
          18,
          0,
          function () {
            c = null;
            i = [];
          },
        ],
        [
          18,
          1,
          function (u, e) {
            c = o(e, e);
            i = u;
          },
        ],
        [
          19,
          1,
          function (u, e) {
            c = o(e, e);
            i = [u];
          },
        ],
        [
          19,
          2,
          function (u, e, r, d) {
            c = o(r, d);
            i = [u].concat(e);
          },
        ],
        [
          19,
          4,
          function (u, e, r, d, a, t, n, f) {
            c = o(a, f);
            k(u, r);
            i = [j({ type: "ClassRange", from: u, to: r }, B(a, n))];
            if (d) {
              i = i.concat(d);
            }
          },
        ],
        [
          20,
          1,
          function (u, e) {
            c = o(e, e);
            i = u;
          },
        ],
        [
          20,
          2,
          function (u, e, r, d) {
            c = o(r, d);
            i = [u].concat(e);
          },
        ],
        [
          20,
          4,
          function (u, e, r, d, a, t, n, f) {
            c = o(a, f);
            k(u, r);
            i = [j({ type: "ClassRange", from: u, to: r }, B(a, n))];
            if (d) {
              i = i.concat(d);
            }
          },
        ],
        [
          21,
          1,
          function (u, e) {
            c = o(e, e);
            i = E(u, "simple", c);
          },
        ],
        [
          21,
          1,
          function (u, e) {
            c = o(e, e);
            i = u;
          },
        ],
        [
          22,
          1,
          function (u, e) {
            c = o(e, e);
            i = u;
          },
        ],
        [
          22,
          1,
          function (u, e) {
            c = o(e, e);
            i = E(u, "meta", c);
          },
        ],
      ];
      var b = {
        SLASH: "23",
        CHAR: "24",
        BAR: "25",
        BOS: "26",
        EOS: "27",
        ESC_b: "28",
        ESC_B: "29",
        POS_LA_ASSERT: "30",
        R_PAREN: "31",
        NEG_LA_ASSERT: "32",
        POS_LB_ASSERT: "33",
        NEG_LB_ASSERT: "34",
        ESC_CHAR: "35",
        U_CODE_SURROGATE: "36",
        U_CODE: "37",
        U_PROP_VALUE_EXP: "38",
        CTRL_CH: "39",
        HEX_CODE: "40",
        OCT_CODE: "41",
        DEC_CODE: "42",
        META_CHAR: "43",
        ANY: "44",
        NAMED_GROUP_REF: "45",
        Q_MARK: "46",
        STAR: "47",
        PLUS: "48",
        RANGE_EXACT: "49",
        RANGE_OPEN: "50",
        RANGE_CLOSED: "51",
        NAMED_CAPTURE_GROUP: "52",
        L_PAREN: "53",
        NON_CAPTURE_GROUP: "54",
        NEG_CLASS: "55",
        R_BRACKET: "56",
        L_BRACKET: "57",
        DASH: "58",
        $: "59",
      };
      var p = [
        { 0: 1, 23: "s2" },
        { 59: "acc" },
        {
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          23: "r10",
          24: "r10",
          25: "r10",
          26: "r10",
          27: "r10",
          28: "r10",
          29: "r10",
          30: "r10",
          32: "r10",
          33: "r10",
          34: "r10",
          35: "r10",
          36: "r10",
          37: "r10",
          38: "r10",
          39: "r10",
          40: "r10",
          41: "r10",
          42: "r10",
          43: "r10",
          44: "r10",
          45: "r10",
          52: "r10",
          53: "r10",
          54: "r10",
          55: "r10",
          57: "r10",
        },
        { 23: "s7" },
        { 23: "r6", 25: "s12" },
        { 23: "r7", 25: "r7", 31: "r7" },
        {
          7: 14,
          8: 15,
          9: 16,
          10: 25,
          14: 27,
          15: 42,
          16: 43,
          17: 26,
          23: "r9",
          24: "s28",
          25: "r9",
          26: "s17",
          27: "s18",
          28: "s19",
          29: "s20",
          30: "s21",
          31: "r9",
          32: "s22",
          33: "s23",
          34: "s24",
          35: "s29",
          36: "s30",
          37: "s31",
          38: "s32",
          39: "s33",
          40: "s34",
          41: "s35",
          42: "s36",
          43: "s37",
          44: "s38",
          45: "s39",
          52: "s44",
          53: "s45",
          54: "s46",
          55: "s40",
          57: "s41",
        },
        { 1: 8, 2: 9, 24: "s10", 59: "r3" },
        { 59: "r1" },
        { 24: "s11", 59: "r2" },
        { 24: "r4", 59: "r4" },
        { 24: "r5", 59: "r5" },
        {
          5: 13,
          6: 6,
          23: "r10",
          24: "r10",
          25: "r10",
          26: "r10",
          27: "r10",
          28: "r10",
          29: "r10",
          30: "r10",
          31: "r10",
          32: "r10",
          33: "r10",
          34: "r10",
          35: "r10",
          36: "r10",
          37: "r10",
          38: "r10",
          39: "r10",
          40: "r10",
          41: "r10",
          42: "r10",
          43: "r10",
          44: "r10",
          45: "r10",
          52: "r10",
          53: "r10",
          54: "r10",
          55: "r10",
          57: "r10",
        },
        { 23: "r8", 25: "r8", 31: "r8" },
        {
          23: "r11",
          24: "r11",
          25: "r11",
          26: "r11",
          27: "r11",
          28: "r11",
          29: "r11",
          30: "r11",
          31: "r11",
          32: "r11",
          33: "r11",
          34: "r11",
          35: "r11",
          36: "r11",
          37: "r11",
          38: "r11",
          39: "r11",
          40: "r11",
          41: "r11",
          42: "r11",
          43: "r11",
          44: "r11",
          45: "r11",
          52: "r11",
          53: "r11",
          54: "r11",
          55: "r11",
          57: "r11",
        },
        {
          23: "r12",
          24: "r12",
          25: "r12",
          26: "r12",
          27: "r12",
          28: "r12",
          29: "r12",
          30: "r12",
          31: "r12",
          32: "r12",
          33: "r12",
          34: "r12",
          35: "r12",
          36: "r12",
          37: "r12",
          38: "r12",
          39: "r12",
          40: "r12",
          41: "r12",
          42: "r12",
          43: "r12",
          44: "r12",
          45: "r12",
          52: "r12",
          53: "r12",
          54: "r12",
          55: "r12",
          57: "r12",
        },
        {
          11: 47,
          12: 48,
          13: 49,
          23: "r38",
          24: "r38",
          25: "r38",
          26: "r38",
          27: "r38",
          28: "r38",
          29: "r38",
          30: "r38",
          31: "r38",
          32: "r38",
          33: "r38",
          34: "r38",
          35: "r38",
          36: "r38",
          37: "r38",
          38: "r38",
          39: "r38",
          40: "r38",
          41: "r38",
          42: "r38",
          43: "r38",
          44: "r38",
          45: "r38",
          46: "s52",
          47: "s50",
          48: "s51",
          49: "s53",
          50: "s54",
          51: "s55",
          52: "r38",
          53: "r38",
          54: "r38",
          55: "r38",
          57: "r38",
        },
        {
          23: "r14",
          24: "r14",
          25: "r14",
          26: "r14",
          27: "r14",
          28: "r14",
          29: "r14",
          30: "r14",
          31: "r14",
          32: "r14",
          33: "r14",
          34: "r14",
          35: "r14",
          36: "r14",
          37: "r14",
          38: "r14",
          39: "r14",
          40: "r14",
          41: "r14",
          42: "r14",
          43: "r14",
          44: "r14",
          45: "r14",
          52: "r14",
          53: "r14",
          54: "r14",
          55: "r14",
          57: "r14",
        },
        {
          23: "r15",
          24: "r15",
          25: "r15",
          26: "r15",
          27: "r15",
          28: "r15",
          29: "r15",
          30: "r15",
          31: "r15",
          32: "r15",
          33: "r15",
          34: "r15",
          35: "r15",
          36: "r15",
          37: "r15",
          38: "r15",
          39: "r15",
          40: "r15",
          41: "r15",
          42: "r15",
          43: "r15",
          44: "r15",
          45: "r15",
          52: "r15",
          53: "r15",
          54: "r15",
          55: "r15",
          57: "r15",
        },
        {
          23: "r16",
          24: "r16",
          25: "r16",
          26: "r16",
          27: "r16",
          28: "r16",
          29: "r16",
          30: "r16",
          31: "r16",
          32: "r16",
          33: "r16",
          34: "r16",
          35: "r16",
          36: "r16",
          37: "r16",
          38: "r16",
          39: "r16",
          40: "r16",
          41: "r16",
          42: "r16",
          43: "r16",
          44: "r16",
          45: "r16",
          52: "r16",
          53: "r16",
          54: "r16",
          55: "r16",
          57: "r16",
        },
        {
          23: "r17",
          24: "r17",
          25: "r17",
          26: "r17",
          27: "r17",
          28: "r17",
          29: "r17",
          30: "r17",
          31: "r17",
          32: "r17",
          33: "r17",
          34: "r17",
          35: "r17",
          36: "r17",
          37: "r17",
          38: "r17",
          39: "r17",
          40: "r17",
          41: "r17",
          42: "r17",
          43: "r17",
          44: "r17",
          45: "r17",
          52: "r17",
          53: "r17",
          54: "r17",
          55: "r17",
          57: "r17",
        },
        {
          4: 57,
          5: 5,
          6: 6,
          24: "r10",
          25: "r10",
          26: "r10",
          27: "r10",
          28: "r10",
          29: "r10",
          30: "r10",
          31: "r10",
          32: "r10",
          33: "r10",
          34: "r10",
          35: "r10",
          36: "r10",
          37: "r10",
          38: "r10",
          39: "r10",
          40: "r10",
          41: "r10",
          42: "r10",
          43: "r10",
          44: "r10",
          45: "r10",
          52: "r10",
          53: "r10",
          54: "r10",
          55: "r10",
          57: "r10",
        },
        {
          4: 59,
          5: 5,
          6: 6,
          24: "r10",
          25: "r10",
          26: "r10",
          27: "r10",
          28: "r10",
          29: "r10",
          30: "r10",
          31: "r10",
          32: "r10",
          33: "r10",
          34: "r10",
          35: "r10",
          36: "r10",
          37: "r10",
          38: "r10",
          39: "r10",
          40: "r10",
          41: "r10",
          42: "r10",
          43: "r10",
          44: "r10",
          45: "r10",
          52: "r10",
          53: "r10",
          54: "r10",
          55: "r10",
          57: "r10",
        },
        {
          4: 61,
          5: 5,
          6: 6,
          24: "r10",
          25: "r10",
          26: "r10",
          27: "r10",
          28: "r10",
          29: "r10",
          30: "r10",
          31: "r10",
          32: "r10",
          33: "r10",
          34: "r10",
          35: "r10",
          36: "r10",
          37: "r10",
          38: "r10",
          39: "r10",
          40: "r10",
          41: "r10",
          42: "r10",
          43: "r10",
          44: "r10",
          45: "r10",
          52: "r10",
          53: "r10",
          54: "r10",
          55: "r10",
          57: "r10",
        },
        {
          4: 63,
          5: 5,
          6: 6,
          24: "r10",
          25: "r10",
          26: "r10",
          27: "r10",
          28: "r10",
          29: "r10",
          30: "r10",
          31: "r10",
          32: "r10",
          33: "r10",
          34: "r10",
          35: "r10",
          36: "r10",
          37: "r10",
          38: "r10",
          39: "r10",
          40: "r10",
          41: "r10",
          42: "r10",
          43: "r10",
          44: "r10",
          45: "r10",
          52: "r10",
          53: "r10",
          54: "r10",
          55: "r10",
          57: "r10",
        },
        {
          23: "r22",
          24: "r22",
          25: "r22",
          26: "r22",
          27: "r22",
          28: "r22",
          29: "r22",
          30: "r22",
          31: "r22",
          32: "r22",
          33: "r22",
          34: "r22",
          35: "r22",
          36: "r22",
          37: "r22",
          38: "r22",
          39: "r22",
          40: "r22",
          41: "r22",
          42: "r22",
          43: "r22",
          44: "r22",
          45: "r22",
          46: "r22",
          47: "r22",
          48: "r22",
          49: "r22",
          50: "r22",
          51: "r22",
          52: "r22",
          53: "r22",
          54: "r22",
          55: "r22",
          57: "r22",
        },
        {
          23: "r23",
          24: "r23",
          25: "r23",
          26: "r23",
          27: "r23",
          28: "r23",
          29: "r23",
          30: "r23",
          31: "r23",
          32: "r23",
          33: "r23",
          34: "r23",
          35: "r23",
          36: "r23",
          37: "r23",
          38: "r23",
          39: "r23",
          40: "r23",
          41: "r23",
          42: "r23",
          43: "r23",
          44: "r23",
          45: "r23",
          46: "r23",
          47: "r23",
          48: "r23",
          49: "r23",
          50: "r23",
          51: "r23",
          52: "r23",
          53: "r23",
          54: "r23",
          55: "r23",
          57: "r23",
        },
        {
          23: "r24",
          24: "r24",
          25: "r24",
          26: "r24",
          27: "r24",
          28: "r24",
          29: "r24",
          30: "r24",
          31: "r24",
          32: "r24",
          33: "r24",
          34: "r24",
          35: "r24",
          36: "r24",
          37: "r24",
          38: "r24",
          39: "r24",
          40: "r24",
          41: "r24",
          42: "r24",
          43: "r24",
          44: "r24",
          45: "r24",
          46: "r24",
          47: "r24",
          48: "r24",
          49: "r24",
          50: "r24",
          51: "r24",
          52: "r24",
          53: "r24",
          54: "r24",
          55: "r24",
          57: "r24",
        },
        {
          23: "r25",
          24: "r25",
          25: "r25",
          26: "r25",
          27: "r25",
          28: "r25",
          29: "r25",
          30: "r25",
          31: "r25",
          32: "r25",
          33: "r25",
          34: "r25",
          35: "r25",
          36: "r25",
          37: "r25",
          38: "r25",
          39: "r25",
          40: "r25",
          41: "r25",
          42: "r25",
          43: "r25",
          44: "r25",
          45: "r25",
          46: "r25",
          47: "r25",
          48: "r25",
          49: "r25",
          50: "r25",
          51: "r25",
          52: "r25",
          53: "r25",
          54: "r25",
          55: "r25",
          56: "r25",
          57: "r25",
          58: "r25",
        },
        {
          23: "r26",
          24: "r26",
          25: "r26",
          26: "r26",
          27: "r26",
          28: "r26",
          29: "r26",
          30: "r26",
          31: "r26",
          32: "r26",
          33: "r26",
          34: "r26",
          35: "r26",
          36: "r26",
          37: "r26",
          38: "r26",
          39: "r26",
          40: "r26",
          41: "r26",
          42: "r26",
          43: "r26",
          44: "r26",
          45: "r26",
          46: "r26",
          47: "r26",
          48: "r26",
          49: "r26",
          50: "r26",
          51: "r26",
          52: "r26",
          53: "r26",
          54: "r26",
          55: "r26",
          56: "r26",
          57: "r26",
          58: "r26",
        },
        {
          23: "r27",
          24: "r27",
          25: "r27",
          26: "r27",
          27: "r27",
          28: "r27",
          29: "r27",
          30: "r27",
          31: "r27",
          32: "r27",
          33: "r27",
          34: "r27",
          35: "r27",
          36: "r27",
          37: "r27",
          38: "r27",
          39: "r27",
          40: "r27",
          41: "r27",
          42: "r27",
          43: "r27",
          44: "r27",
          45: "r27",
          46: "r27",
          47: "r27",
          48: "r27",
          49: "r27",
          50: "r27",
          51: "r27",
          52: "r27",
          53: "r27",
          54: "r27",
          55: "r27",
          56: "r27",
          57: "r27",
          58: "r27",
        },
        {
          23: "r28",
          24: "r28",
          25: "r28",
          26: "r28",
          27: "r28",
          28: "r28",
          29: "r28",
          30: "r28",
          31: "r28",
          32: "r28",
          33: "r28",
          34: "r28",
          35: "r28",
          36: "r28",
          37: "r28",
          38: "r28",
          39: "r28",
          40: "r28",
          41: "r28",
          42: "r28",
          43: "r28",
          44: "r28",
          45: "r28",
          46: "r28",
          47: "r28",
          48: "r28",
          49: "r28",
          50: "r28",
          51: "r28",
          52: "r28",
          53: "r28",
          54: "r28",
          55: "r28",
          56: "r28",
          57: "r28",
          58: "r28",
        },
        {
          23: "r29",
          24: "r29",
          25: "r29",
          26: "r29",
          27: "r29",
          28: "r29",
          29: "r29",
          30: "r29",
          31: "r29",
          32: "r29",
          33: "r29",
          34: "r29",
          35: "r29",
          36: "r29",
          37: "r29",
          38: "r29",
          39: "r29",
          40: "r29",
          41: "r29",
          42: "r29",
          43: "r29",
          44: "r29",
          45: "r29",
          46: "r29",
          47: "r29",
          48: "r29",
          49: "r29",
          50: "r29",
          51: "r29",
          52: "r29",
          53: "r29",
          54: "r29",
          55: "r29",
          56: "r29",
          57: "r29",
          58: "r29",
        },
        {
          23: "r30",
          24: "r30",
          25: "r30",
          26: "r30",
          27: "r30",
          28: "r30",
          29: "r30",
          30: "r30",
          31: "r30",
          32: "r30",
          33: "r30",
          34: "r30",
          35: "r30",
          36: "r30",
          37: "r30",
          38: "r30",
          39: "r30",
          40: "r30",
          41: "r30",
          42: "r30",
          43: "r30",
          44: "r30",
          45: "r30",
          46: "r30",
          47: "r30",
          48: "r30",
          49: "r30",
          50: "r30",
          51: "r30",
          52: "r30",
          53: "r30",
          54: "r30",
          55: "r30",
          56: "r30",
          57: "r30",
          58: "r30",
        },
        {
          23: "r31",
          24: "r31",
          25: "r31",
          26: "r31",
          27: "r31",
          28: "r31",
          29: "r31",
          30: "r31",
          31: "r31",
          32: "r31",
          33: "r31",
          34: "r31",
          35: "r31",
          36: "r31",
          37: "r31",
          38: "r31",
          39: "r31",
          40: "r31",
          41: "r31",
          42: "r31",
          43: "r31",
          44: "r31",
          45: "r31",
          46: "r31",
          47: "r31",
          48: "r31",
          49: "r31",
          50: "r31",
          51: "r31",
          52: "r31",
          53: "r31",
          54: "r31",
          55: "r31",
          56: "r31",
          57: "r31",
          58: "r31",
        },
        {
          23: "r32",
          24: "r32",
          25: "r32",
          26: "r32",
          27: "r32",
          28: "r32",
          29: "r32",
          30: "r32",
          31: "r32",
          32: "r32",
          33: "r32",
          34: "r32",
          35: "r32",
          36: "r32",
          37: "r32",
          38: "r32",
          39: "r32",
          40: "r32",
          41: "r32",
          42: "r32",
          43: "r32",
          44: "r32",
          45: "r32",
          46: "r32",
          47: "r32",
          48: "r32",
          49: "r32",
          50: "r32",
          51: "r32",
          52: "r32",
          53: "r32",
          54: "r32",
          55: "r32",
          56: "r32",
          57: "r32",
          58: "r32",
        },
        {
          23: "r33",
          24: "r33",
          25: "r33",
          26: "r33",
          27: "r33",
          28: "r33",
          29: "r33",
          30: "r33",
          31: "r33",
          32: "r33",
          33: "r33",
          34: "r33",
          35: "r33",
          36: "r33",
          37: "r33",
          38: "r33",
          39: "r33",
          40: "r33",
          41: "r33",
          42: "r33",
          43: "r33",
          44: "r33",
          45: "r33",
          46: "r33",
          47: "r33",
          48: "r33",
          49: "r33",
          50: "r33",
          51: "r33",
          52: "r33",
          53: "r33",
          54: "r33",
          55: "r33",
          56: "r33",
          57: "r33",
          58: "r33",
        },
        {
          23: "r34",
          24: "r34",
          25: "r34",
          26: "r34",
          27: "r34",
          28: "r34",
          29: "r34",
          30: "r34",
          31: "r34",
          32: "r34",
          33: "r34",
          34: "r34",
          35: "r34",
          36: "r34",
          37: "r34",
          38: "r34",
          39: "r34",
          40: "r34",
          41: "r34",
          42: "r34",
          43: "r34",
          44: "r34",
          45: "r34",
          46: "r34",
          47: "r34",
          48: "r34",
          49: "r34",
          50: "r34",
          51: "r34",
          52: "r34",
          53: "r34",
          54: "r34",
          55: "r34",
          56: "r34",
          57: "r34",
          58: "r34",
        },
        {
          23: "r35",
          24: "r35",
          25: "r35",
          26: "r35",
          27: "r35",
          28: "r35",
          29: "r35",
          30: "r35",
          31: "r35",
          32: "r35",
          33: "r35",
          34: "r35",
          35: "r35",
          36: "r35",
          37: "r35",
          38: "r35",
          39: "r35",
          40: "r35",
          41: "r35",
          42: "r35",
          43: "r35",
          44: "r35",
          45: "r35",
          46: "r35",
          47: "r35",
          48: "r35",
          49: "r35",
          50: "r35",
          51: "r35",
          52: "r35",
          53: "r35",
          54: "r35",
          55: "r35",
          56: "r35",
          57: "r35",
          58: "r35",
        },
        {
          23: "r36",
          24: "r36",
          25: "r36",
          26: "r36",
          27: "r36",
          28: "r36",
          29: "r36",
          30: "r36",
          31: "r36",
          32: "r36",
          33: "r36",
          34: "r36",
          35: "r36",
          36: "r36",
          37: "r36",
          38: "r36",
          39: "r36",
          40: "r36",
          41: "r36",
          42: "r36",
          43: "r36",
          44: "r36",
          45: "r36",
          46: "r36",
          47: "r36",
          48: "r36",
          49: "r36",
          50: "r36",
          51: "r36",
          52: "r36",
          53: "r36",
          54: "r36",
          55: "r36",
          56: "r36",
          57: "r36",
          58: "r36",
        },
        {
          10: 70,
          18: 65,
          19: 66,
          21: 67,
          22: 69,
          24: "s28",
          28: "s71",
          35: "s29",
          36: "s30",
          37: "s31",
          38: "s32",
          39: "s33",
          40: "s34",
          41: "s35",
          42: "s36",
          43: "s37",
          44: "s38",
          45: "s39",
          56: "r54",
          58: "s68",
        },
        {
          10: 70,
          18: 83,
          19: 66,
          21: 67,
          22: 69,
          24: "s28",
          28: "s71",
          35: "s29",
          36: "s30",
          37: "s31",
          38: "s32",
          39: "s33",
          40: "s34",
          41: "s35",
          42: "s36",
          43: "s37",
          44: "s38",
          45: "s39",
          56: "r54",
          58: "s68",
        },
        {
          23: "r47",
          24: "r47",
          25: "r47",
          26: "r47",
          27: "r47",
          28: "r47",
          29: "r47",
          30: "r47",
          31: "r47",
          32: "r47",
          33: "r47",
          34: "r47",
          35: "r47",
          36: "r47",
          37: "r47",
          38: "r47",
          39: "r47",
          40: "r47",
          41: "r47",
          42: "r47",
          43: "r47",
          44: "r47",
          45: "r47",
          46: "r47",
          47: "r47",
          48: "r47",
          49: "r47",
          50: "r47",
          51: "r47",
          52: "r47",
          53: "r47",
          54: "r47",
          55: "r47",
          57: "r47",
        },
        {
          23: "r48",
          24: "r48",
          25: "r48",
          26: "r48",
          27: "r48",
          28: "r48",
          29: "r48",
          30: "r48",
          31: "r48",
          32: "r48",
          33: "r48",
          34: "r48",
          35: "r48",
          36: "r48",
          37: "r48",
          38: "r48",
          39: "r48",
          40: "r48",
          41: "r48",
          42: "r48",
          43: "r48",
          44: "r48",
          45: "r48",
          46: "r48",
          47: "r48",
          48: "r48",
          49: "r48",
          50: "r48",
          51: "r48",
          52: "r48",
          53: "r48",
          54: "r48",
          55: "r48",
          57: "r48",
        },
        {
          4: 85,
          5: 5,
          6: 6,
          24: "r10",
          25: "r10",
          26: "r10",
          27: "r10",
          28: "r10",
          29: "r10",
          30: "r10",
          31: "r10",
          32: "r10",
          33: "r10",
          34: "r10",
          35: "r10",
          36: "r10",
          37: "r10",
          38: "r10",
          39: "r10",
          40: "r10",
          41: "r10",
          42: "r10",
          43: "r10",
          44: "r10",
          45: "r10",
          52: "r10",
          53: "r10",
          54: "r10",
          55: "r10",
          57: "r10",
        },
        {
          4: 87,
          5: 5,
          6: 6,
          24: "r10",
          25: "r10",
          26: "r10",
          27: "r10",
          28: "r10",
          29: "r10",
          30: "r10",
          31: "r10",
          32: "r10",
          33: "r10",
          34: "r10",
          35: "r10",
          36: "r10",
          37: "r10",
          38: "r10",
          39: "r10",
          40: "r10",
          41: "r10",
          42: "r10",
          43: "r10",
          44: "r10",
          45: "r10",
          52: "r10",
          53: "r10",
          54: "r10",
          55: "r10",
          57: "r10",
        },
        {
          4: 89,
          5: 5,
          6: 6,
          24: "r10",
          25: "r10",
          26: "r10",
          27: "r10",
          28: "r10",
          29: "r10",
          30: "r10",
          31: "r10",
          32: "r10",
          33: "r10",
          34: "r10",
          35: "r10",
          36: "r10",
          37: "r10",
          38: "r10",
          39: "r10",
          40: "r10",
          41: "r10",
          42: "r10",
          43: "r10",
          44: "r10",
          45: "r10",
          52: "r10",
          53: "r10",
          54: "r10",
          55: "r10",
          57: "r10",
        },
        {
          23: "r13",
          24: "r13",
          25: "r13",
          26: "r13",
          27: "r13",
          28: "r13",
          29: "r13",
          30: "r13",
          31: "r13",
          32: "r13",
          33: "r13",
          34: "r13",
          35: "r13",
          36: "r13",
          37: "r13",
          38: "r13",
          39: "r13",
          40: "r13",
          41: "r13",
          42: "r13",
          43: "r13",
          44: "r13",
          45: "r13",
          52: "r13",
          53: "r13",
          54: "r13",
          55: "r13",
          57: "r13",
        },
        {
          23: "r37",
          24: "r37",
          25: "r37",
          26: "r37",
          27: "r37",
          28: "r37",
          29: "r37",
          30: "r37",
          31: "r37",
          32: "r37",
          33: "r37",
          34: "r37",
          35: "r37",
          36: "r37",
          37: "r37",
          38: "r37",
          39: "r37",
          40: "r37",
          41: "r37",
          42: "r37",
          43: "r37",
          44: "r37",
          45: "r37",
          52: "r37",
          53: "r37",
          54: "r37",
          55: "r37",
          57: "r37",
        },
        {
          23: "r39",
          24: "r39",
          25: "r39",
          26: "r39",
          27: "r39",
          28: "r39",
          29: "r39",
          30: "r39",
          31: "r39",
          32: "r39",
          33: "r39",
          34: "r39",
          35: "r39",
          36: "r39",
          37: "r39",
          38: "r39",
          39: "r39",
          40: "r39",
          41: "r39",
          42: "r39",
          43: "r39",
          44: "r39",
          45: "r39",
          46: "s56",
          52: "r39",
          53: "r39",
          54: "r39",
          55: "r39",
          57: "r39",
        },
        {
          23: "r41",
          24: "r41",
          25: "r41",
          26: "r41",
          27: "r41",
          28: "r41",
          29: "r41",
          30: "r41",
          31: "r41",
          32: "r41",
          33: "r41",
          34: "r41",
          35: "r41",
          36: "r41",
          37: "r41",
          38: "r41",
          39: "r41",
          40: "r41",
          41: "r41",
          42: "r41",
          43: "r41",
          44: "r41",
          45: "r41",
          46: "r41",
          52: "r41",
          53: "r41",
          54: "r41",
          55: "r41",
          57: "r41",
        },
        {
          23: "r42",
          24: "r42",
          25: "r42",
          26: "r42",
          27: "r42",
          28: "r42",
          29: "r42",
          30: "r42",
          31: "r42",
          32: "r42",
          33: "r42",
          34: "r42",
          35: "r42",
          36: "r42",
          37: "r42",
          38: "r42",
          39: "r42",
          40: "r42",
          41: "r42",
          42: "r42",
          43: "r42",
          44: "r42",
          45: "r42",
          46: "r42",
          52: "r42",
          53: "r42",
          54: "r42",
          55: "r42",
          57: "r42",
        },
        {
          23: "r43",
          24: "r43",
          25: "r43",
          26: "r43",
          27: "r43",
          28: "r43",
          29: "r43",
          30: "r43",
          31: "r43",
          32: "r43",
          33: "r43",
          34: "r43",
          35: "r43",
          36: "r43",
          37: "r43",
          38: "r43",
          39: "r43",
          40: "r43",
          41: "r43",
          42: "r43",
          43: "r43",
          44: "r43",
          45: "r43",
          46: "r43",
          52: "r43",
          53: "r43",
          54: "r43",
          55: "r43",
          57: "r43",
        },
        {
          23: "r44",
          24: "r44",
          25: "r44",
          26: "r44",
          27: "r44",
          28: "r44",
          29: "r44",
          30: "r44",
          31: "r44",
          32: "r44",
          33: "r44",
          34: "r44",
          35: "r44",
          36: "r44",
          37: "r44",
          38: "r44",
          39: "r44",
          40: "r44",
          41: "r44",
          42: "r44",
          43: "r44",
          44: "r44",
          45: "r44",
          46: "r44",
          52: "r44",
          53: "r44",
          54: "r44",
          55: "r44",
          57: "r44",
        },
        {
          23: "r45",
          24: "r45",
          25: "r45",
          26: "r45",
          27: "r45",
          28: "r45",
          29: "r45",
          30: "r45",
          31: "r45",
          32: "r45",
          33: "r45",
          34: "r45",
          35: "r45",
          36: "r45",
          37: "r45",
          38: "r45",
          39: "r45",
          40: "r45",
          41: "r45",
          42: "r45",
          43: "r45",
          44: "r45",
          45: "r45",
          46: "r45",
          52: "r45",
          53: "r45",
          54: "r45",
          55: "r45",
          57: "r45",
        },
        {
          23: "r46",
          24: "r46",
          25: "r46",
          26: "r46",
          27: "r46",
          28: "r46",
          29: "r46",
          30: "r46",
          31: "r46",
          32: "r46",
          33: "r46",
          34: "r46",
          35: "r46",
          36: "r46",
          37: "r46",
          38: "r46",
          39: "r46",
          40: "r46",
          41: "r46",
          42: "r46",
          43: "r46",
          44: "r46",
          45: "r46",
          46: "r46",
          52: "r46",
          53: "r46",
          54: "r46",
          55: "r46",
          57: "r46",
        },
        {
          23: "r40",
          24: "r40",
          25: "r40",
          26: "r40",
          27: "r40",
          28: "r40",
          29: "r40",
          30: "r40",
          31: "r40",
          32: "r40",
          33: "r40",
          34: "r40",
          35: "r40",
          36: "r40",
          37: "r40",
          38: "r40",
          39: "r40",
          40: "r40",
          41: "r40",
          42: "r40",
          43: "r40",
          44: "r40",
          45: "r40",
          52: "r40",
          53: "r40",
          54: "r40",
          55: "r40",
          57: "r40",
        },
        { 25: "s12", 31: "s58" },
        {
          23: "r18",
          24: "r18",
          25: "r18",
          26: "r18",
          27: "r18",
          28: "r18",
          29: "r18",
          30: "r18",
          31: "r18",
          32: "r18",
          33: "r18",
          34: "r18",
          35: "r18",
          36: "r18",
          37: "r18",
          38: "r18",
          39: "r18",
          40: "r18",
          41: "r18",
          42: "r18",
          43: "r18",
          44: "r18",
          45: "r18",
          52: "r18",
          53: "r18",
          54: "r18",
          55: "r18",
          57: "r18",
        },
        { 25: "s12", 31: "s60" },
        {
          23: "r19",
          24: "r19",
          25: "r19",
          26: "r19",
          27: "r19",
          28: "r19",
          29: "r19",
          30: "r19",
          31: "r19",
          32: "r19",
          33: "r19",
          34: "r19",
          35: "r19",
          36: "r19",
          37: "r19",
          38: "r19",
          39: "r19",
          40: "r19",
          41: "r19",
          42: "r19",
          43: "r19",
          44: "r19",
          45: "r19",
          52: "r19",
          53: "r19",
          54: "r19",
          55: "r19",
          57: "r19",
        },
        { 25: "s12", 31: "s62" },
        {
          23: "r20",
          24: "r20",
          25: "r20",
          26: "r20",
          27: "r20",
          28: "r20",
          29: "r20",
          30: "r20",
          31: "r20",
          32: "r20",
          33: "r20",
          34: "r20",
          35: "r20",
          36: "r20",
          37: "r20",
          38: "r20",
          39: "r20",
          40: "r20",
          41: "r20",
          42: "r20",
          43: "r20",
          44: "r20",
          45: "r20",
          52: "r20",
          53: "r20",
          54: "r20",
          55: "r20",
          57: "r20",
        },
        { 25: "s12", 31: "s64" },
        {
          23: "r21",
          24: "r21",
          25: "r21",
          26: "r21",
          27: "r21",
          28: "r21",
          29: "r21",
          30: "r21",
          31: "r21",
          32: "r21",
          33: "r21",
          34: "r21",
          35: "r21",
          36: "r21",
          37: "r21",
          38: "r21",
          39: "r21",
          40: "r21",
          41: "r21",
          42: "r21",
          43: "r21",
          44: "r21",
          45: "r21",
          52: "r21",
          53: "r21",
          54: "r21",
          55: "r21",
          57: "r21",
        },
        { 56: "s72" },
        { 56: "r55" },
        {
          10: 70,
          20: 73,
          21: 75,
          22: 76,
          24: "s28",
          28: "s71",
          35: "s29",
          36: "s30",
          37: "s31",
          38: "s32",
          39: "s33",
          40: "s34",
          41: "s35",
          42: "s36",
          43: "s37",
          44: "s38",
          45: "s39",
          56: "r56",
          58: "s74",
        },
        {
          24: "r62",
          28: "r62",
          35: "r62",
          36: "r62",
          37: "r62",
          38: "r62",
          39: "r62",
          40: "r62",
          41: "r62",
          42: "r62",
          43: "r62",
          44: "r62",
          45: "r62",
          56: "r62",
          58: "r62",
        },
        {
          24: "r63",
          28: "r63",
          35: "r63",
          36: "r63",
          37: "r63",
          38: "r63",
          39: "r63",
          40: "r63",
          41: "r63",
          42: "r63",
          43: "r63",
          44: "r63",
          45: "r63",
          56: "r63",
          58: "r63",
        },
        {
          24: "r64",
          28: "r64",
          35: "r64",
          36: "r64",
          37: "r64",
          38: "r64",
          39: "r64",
          40: "r64",
          41: "r64",
          42: "r64",
          43: "r64",
          44: "r64",
          45: "r64",
          56: "r64",
          58: "r64",
        },
        {
          24: "r65",
          28: "r65",
          35: "r65",
          36: "r65",
          37: "r65",
          38: "r65",
          39: "r65",
          40: "r65",
          41: "r65",
          42: "r65",
          43: "r65",
          44: "r65",
          45: "r65",
          56: "r65",
          58: "r65",
        },
        {
          23: "r52",
          24: "r52",
          25: "r52",
          26: "r52",
          27: "r52",
          28: "r52",
          29: "r52",
          30: "r52",
          31: "r52",
          32: "r52",
          33: "r52",
          34: "r52",
          35: "r52",
          36: "r52",
          37: "r52",
          38: "r52",
          39: "r52",
          40: "r52",
          41: "r52",
          42: "r52",
          43: "r52",
          44: "r52",
          45: "r52",
          46: "r52",
          47: "r52",
          48: "r52",
          49: "r52",
          50: "r52",
          51: "r52",
          52: "r52",
          53: "r52",
          54: "r52",
          55: "r52",
          57: "r52",
        },
        { 56: "r57" },
        {
          10: 70,
          21: 77,
          22: 69,
          24: "s28",
          28: "s71",
          35: "s29",
          36: "s30",
          37: "s31",
          38: "s32",
          39: "s33",
          40: "s34",
          41: "s35",
          42: "s36",
          43: "s37",
          44: "s38",
          45: "s39",
          56: "r62",
          58: "s68",
        },
        { 56: "r59" },
        {
          10: 70,
          20: 79,
          21: 75,
          22: 76,
          24: "s28",
          28: "s71",
          35: "s29",
          36: "s30",
          37: "s31",
          38: "s32",
          39: "s33",
          40: "s34",
          41: "s35",
          42: "s36",
          43: "s37",
          44: "s38",
          45: "s39",
          56: "r63",
          58: "s80",
        },
        {
          10: 70,
          18: 78,
          19: 66,
          21: 67,
          22: 69,
          24: "s28",
          28: "s71",
          35: "s29",
          36: "s30",
          37: "s31",
          38: "s32",
          39: "s33",
          40: "s34",
          41: "s35",
          42: "s36",
          43: "s37",
          44: "s38",
          45: "s39",
          56: "r54",
          58: "s68",
        },
        { 56: "r58" },
        { 56: "r60" },
        {
          10: 70,
          21: 81,
          22: 69,
          24: "s28",
          28: "s71",
          35: "s29",
          36: "s30",
          37: "s31",
          38: "s32",
          39: "s33",
          40: "s34",
          41: "s35",
          42: "s36",
          43: "s37",
          44: "s38",
          45: "s39",
          56: "r62",
          58: "s68",
        },
        {
          10: 70,
          18: 82,
          19: 66,
          21: 67,
          22: 69,
          24: "s28",
          28: "s71",
          35: "s29",
          36: "s30",
          37: "s31",
          38: "s32",
          39: "s33",
          40: "s34",
          41: "s35",
          42: "s36",
          43: "s37",
          44: "s38",
          45: "s39",
          56: "r54",
          58: "s68",
        },
        { 56: "r61" },
        { 56: "s84" },
        {
          23: "r53",
          24: "r53",
          25: "r53",
          26: "r53",
          27: "r53",
          28: "r53",
          29: "r53",
          30: "r53",
          31: "r53",
          32: "r53",
          33: "r53",
          34: "r53",
          35: "r53",
          36: "r53",
          37: "r53",
          38: "r53",
          39: "r53",
          40: "r53",
          41: "r53",
          42: "r53",
          43: "r53",
          44: "r53",
          45: "r53",
          46: "r53",
          47: "r53",
          48: "r53",
          49: "r53",
          50: "r53",
          51: "r53",
          52: "r53",
          53: "r53",
          54: "r53",
          55: "r53",
          57: "r53",
        },
        { 25: "s12", 31: "s86" },
        {
          23: "r49",
          24: "r49",
          25: "r49",
          26: "r49",
          27: "r49",
          28: "r49",
          29: "r49",
          30: "r49",
          31: "r49",
          32: "r49",
          33: "r49",
          34: "r49",
          35: "r49",
          36: "r49",
          37: "r49",
          38: "r49",
          39: "r49",
          40: "r49",
          41: "r49",
          42: "r49",
          43: "r49",
          44: "r49",
          45: "r49",
          46: "r49",
          47: "r49",
          48: "r49",
          49: "r49",
          50: "r49",
          51: "r49",
          52: "r49",
          53: "r49",
          54: "r49",
          55: "r49",
          57: "r49",
        },
        { 25: "s12", 31: "s88" },
        {
          23: "r50",
          24: "r50",
          25: "r50",
          26: "r50",
          27: "r50",
          28: "r50",
          29: "r50",
          30: "r50",
          31: "r50",
          32: "r50",
          33: "r50",
          34: "r50",
          35: "r50",
          36: "r50",
          37: "r50",
          38: "r50",
          39: "r50",
          40: "r50",
          41: "r50",
          42: "r50",
          43: "r50",
          44: "r50",
          45: "r50",
          46: "r50",
          47: "r50",
          48: "r50",
          49: "r50",
          50: "r50",
          51: "r50",
          52: "r50",
          53: "r50",
          54: "r50",
          55: "r50",
          57: "r50",
        },
        { 25: "s12", 31: "s90" },
        {
          23: "r51",
          24: "r51",
          25: "r51",
          26: "r51",
          27: "r51",
          28: "r51",
          29: "r51",
          30: "r51",
          31: "r51",
          32: "r51",
          33: "r51",
          34: "r51",
          35: "r51",
          36: "r51",
          37: "r51",
          38: "r51",
          39: "r51",
          40: "r51",
          41: "r51",
          42: "r51",
          43: "r51",
          44: "r51",
          45: "r51",
          46: "r51",
          47: "r51",
          48: "r51",
          49: "r51",
          50: "r51",
          51: "r51",
          52: "r51",
          53: "r51",
          54: "r51",
          55: "r51",
          57: "r51",
        },
      ];
      var h = [];
      var v = void 0;
      var g = [
        [/^#[^\n]+/, function () {}],
        [/^\s+/, function () {}],
        [
          /^-/,
          function () {
            return "DASH";
          },
        ],
        [
          /^\//,
          function () {
            return "CHAR";
          },
        ],
        [
          /^#/,
          function () {
            return "CHAR";
          },
        ],
        [
          /^\|/,
          function () {
            return "CHAR";
          },
        ],
        [
          /^\./,
          function () {
            return "CHAR";
          },
        ],
        [
          /^\{/,
          function () {
            return "CHAR";
          },
        ],
        [
          /^\{\d+\}/,
          function () {
            return "RANGE_EXACT";
          },
        ],
        [
          /^\{\d+,\}/,
          function () {
            return "RANGE_OPEN";
          },
        ],
        [
          /^\{\d+,\d+\}/,
          function () {
            return "RANGE_CLOSED";
          },
        ],
        [
          /^\\k<(([\u0041-\u005a\u0061-\u007a\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376-\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4-\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08bd\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09f0-\u09f1\u09fc\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0af9\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60-\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0cf1-\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e46\u0e81-\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae-\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5-\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fef\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a-\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7c6\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd-\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5-\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab67\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]|\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c-\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf4a\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37-\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4-\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe-\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd23\udf00-\udf1c\udf27\udf30-\udf45\udfe0-\udff6]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f-\udf10\udf13-\udf28\udf2a-\udf30\udf32-\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc5f\udc80-\udcaf\udcc4-\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udeb8\udf00-\udf1a]|\ud806[\udc00-\udc2b\udca0-\udcdf\udcff\udda0-\udda7\uddaa-\uddd0\udde1\udde3\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude89\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08-\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67-\udd68\udd6a-\udd89\udd98\udee0-\udef2]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc80-\udd43]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf4a\udf50\udf93-\udf9f\udfe0-\udfe1\udfe3]|\ud81c[\udc00-\udfff]|\ud81d[\udc00-\udfff]|\ud81e[\udc00-\udfff]|\ud81f[\udc00-\udfff]|\ud820[\udc00-\udfff]|\ud821[\udc00-\udff7]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd50-\udd52\udd64-\udd67\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e-\udc9f\udca2\udca5-\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud838[\udd00-\udd2c\udd37-\udd3d\udd4e\udec0-\udeeb]|\ud83a[\udc00-\udcc4\udd00-\udd43\udd4b]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21-\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51-\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61-\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud840[\udc00-\udfff]|\ud841[\udc00-\udfff]|\ud842[\udc00-\udfff]|\ud843[\udc00-\udfff]|\ud844[\udc00-\udfff]|\ud845[\udc00-\udfff]|\ud846[\udc00-\udfff]|\ud847[\udc00-\udfff]|\ud848[\udc00-\udfff]|\ud849[\udc00-\udfff]|\ud84a[\udc00-\udfff]|\ud84b[\udc00-\udfff]|\ud84c[\udc00-\udfff]|\ud84d[\udc00-\udfff]|\ud84e[\udc00-\udfff]|\ud84f[\udc00-\udfff]|\ud850[\udc00-\udfff]|\ud851[\udc00-\udfff]|\ud852[\udc00-\udfff]|\ud853[\udc00-\udfff]|\ud854[\udc00-\udfff]|\ud855[\udc00-\udfff]|\ud856[\udc00-\udfff]|\ud857[\udc00-\udfff]|\ud858[\udc00-\udfff]|\ud859[\udc00-\udfff]|\ud85a[\udc00-\udfff]|\ud85b[\udc00-\udfff]|\ud85c[\udc00-\udfff]|\ud85d[\udc00-\udfff]|\ud85e[\udc00-\udfff]|\ud85f[\udc00-\udfff]|\ud860[\udc00-\udfff]|\ud861[\udc00-\udfff]|\ud862[\udc00-\udfff]|\ud863[\udc00-\udfff]|\ud864[\udc00-\udfff]|\ud865[\udc00-\udfff]|\ud866[\udc00-\udfff]|\ud867[\udc00-\udfff]|\ud868[\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86a[\udc00-\udfff]|\ud86b[\udc00-\udfff]|\ud86c[\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud86f[\udc00-\udfff]|\ud870[\udc00-\udfff]|\ud871[\udc00-\udfff]|\ud872[\udc00-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud874[\udc00-\udfff]|\ud875[\udc00-\udfff]|\ud876[\udc00-\udfff]|\ud877[\udc00-\udfff]|\ud878[\udc00-\udfff]|\ud879[\udc00-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d])|[$_]|(\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]{1,}\}))(([\u0030-\u0039\u0041-\u005a\u005f\u0061-\u007a\u00aa\u00b5\u00b7\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376-\u0377\u037a-\u037d\u037f\u0386-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u05d0-\u05ea\u05ef-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u07fd\u0800-\u082d\u0840-\u085b\u0860-\u086a\u08a0-\u08b4\u08b6-\u08bd\u08d3-\u08e1\u08e3-\u0963\u0966-\u096f\u0971-\u0983\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7-\u09c8\u09cb-\u09ce\u09d7\u09dc-\u09dd\u09df-\u09e3\u09e6-\u09f1\u09fc\u09fe\u0a01-\u0a03\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0af9-\u0aff\u0b01-\u0b03\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57\u0b5c-\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82-\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c00-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c58-\u0c5a\u0c60-\u0c63\u0c66-\u0c6f\u0c80-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1-\u0cf2\u0d00-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d54-\u0d57\u0d5f-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82-\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81-\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18-\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1369-\u1371\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772-\u1773\u1780-\u17d3\u17d7\u17dc-\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1878\u1880-\u18aa\u18b0-\u18f5\u1900-\u191e\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19da\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1ab0-\u1abd\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1cd0-\u1cd2\u1cd4-\u1cfa\u1d00-\u1df9\u1dfb-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u203f-\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fef\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7c6\ua7f7-\ua827\ua840-\ua873\ua880-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua8fd-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\ua9e0-\ua9fe\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab67\uab70-\uabea\uabec-\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe2f\ufe33-\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]|\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c-\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\uddfd\ude80-\ude9c\udea0-\uded0\udee0\udf00-\udf1f\udf2d-\udf4a\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud801[\udc00-\udc9d\udca0-\udca9\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37-\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4-\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe-\uddbf\ude00-\ude03\ude05-\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude38-\ude3a\ude3f\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee6\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd27\udd30-\udd39\udf00-\udf1c\udf27\udf30-\udf50\udfe0-\udff6]|\ud804[\udc00-\udc46\udc66-\udc6f\udc7f-\udcba\udcd0-\udce8\udcf0-\udcf9\udd00-\udd34\udd36-\udd3f\udd44-\udd46\udd50-\udd73\udd76\udd80-\uddc4\uddc9-\uddcc\uddd0-\uddda\udddc\ude00-\ude11\ude13-\ude37\ude3e\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udeea\udef0-\udef9\udf00-\udf03\udf05-\udf0c\udf0f-\udf10\udf13-\udf28\udf2a-\udf30\udf32-\udf33\udf35-\udf39\udf3b-\udf44\udf47-\udf48\udf4b-\udf4d\udf50\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc00-\udc4a\udc50-\udc59\udc5e-\udc5f\udc80-\udcc5\udcc7\udcd0-\udcd9\udd80-\uddb5\uddb8-\uddc0\uddd8-\udddd\ude00-\ude40\ude44\ude50-\ude59\ude80-\udeb8\udec0-\udec9\udf00-\udf1a\udf1d-\udf2b\udf30-\udf39]|\ud806[\udc00-\udc3a\udca0-\udce9\udcff\udda0-\udda7\uddaa-\uddd7\uddda-\udde1\udde3-\udde4\ude00-\ude3e\ude47\ude50-\ude99\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc40\udc50-\udc59\udc72-\udc8f\udc92-\udca7\udca9-\udcb6\udd00-\udd06\udd08-\udd09\udd0b-\udd36\udd3a\udd3c-\udd3d\udd3f-\udd47\udd50-\udd59\udd60-\udd65\udd67-\udd68\udd6a-\udd8e\udd90-\udd91\udd93-\udd98\udda0-\udda9\udee0-\udef6]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc80-\udd43]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\ude60-\ude69\uded0-\udeed\udef0-\udef4\udf00-\udf36\udf40-\udf43\udf50-\udf59\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf4a\udf4f-\udf87\udf8f-\udf9f\udfe0-\udfe1\udfe3]|\ud81c[\udc00-\udfff]|\ud81d[\udc00-\udfff]|\ud81e[\udc00-\udfff]|\ud81f[\udc00-\udfff]|\ud820[\udc00-\udfff]|\ud821[\udc00-\udff7]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd50-\udd52\udd64-\udd67\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9d-\udc9e]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e-\udc9f\udca2\udca5-\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb\udfce-\udfff]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23-\udc24\udc26-\udc2a\udd00-\udd2c\udd30-\udd3d\udd40-\udd49\udd4e\udec0-\udef9]|\ud83a[\udc00-\udcc4\udcd0-\udcd6\udd00-\udd4b\udd50-\udd59]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21-\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51-\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61-\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud840[\udc00-\udfff]|\ud841[\udc00-\udfff]|\ud842[\udc00-\udfff]|\ud843[\udc00-\udfff]|\ud844[\udc00-\udfff]|\ud845[\udc00-\udfff]|\ud846[\udc00-\udfff]|\ud847[\udc00-\udfff]|\ud848[\udc00-\udfff]|\ud849[\udc00-\udfff]|\ud84a[\udc00-\udfff]|\ud84b[\udc00-\udfff]|\ud84c[\udc00-\udfff]|\ud84d[\udc00-\udfff]|\ud84e[\udc00-\udfff]|\ud84f[\udc00-\udfff]|\ud850[\udc00-\udfff]|\ud851[\udc00-\udfff]|\ud852[\udc00-\udfff]|\ud853[\udc00-\udfff]|\ud854[\udc00-\udfff]|\ud855[\udc00-\udfff]|\ud856[\udc00-\udfff]|\ud857[\udc00-\udfff]|\ud858[\udc00-\udfff]|\ud859[\udc00-\udfff]|\ud85a[\udc00-\udfff]|\ud85b[\udc00-\udfff]|\ud85c[\udc00-\udfff]|\ud85d[\udc00-\udfff]|\ud85e[\udc00-\udfff]|\ud85f[\udc00-\udfff]|\ud860[\udc00-\udfff]|\ud861[\udc00-\udfff]|\ud862[\udc00-\udfff]|\ud863[\udc00-\udfff]|\ud864[\udc00-\udfff]|\ud865[\udc00-\udfff]|\ud866[\udc00-\udfff]|\ud867[\udc00-\udfff]|\ud868[\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86a[\udc00-\udfff]|\ud86b[\udc00-\udfff]|\ud86c[\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud86f[\udc00-\udfff]|\ud870[\udc00-\udfff]|\ud871[\udc00-\udfff]|\ud872[\udc00-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud874[\udc00-\udfff]|\ud875[\udc00-\udfff]|\ud876[\udc00-\udfff]|\ud877[\udc00-\udfff]|\ud878[\udc00-\udfff]|\ud879[\udc00-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]|\udb40[\udd00-\uddef])|[$_]|(\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]{1,}\})|[\u200c\u200d])*>/,
          function () {
            var u = t.slice(3, -1);
            F(u, this.getCurrentState());
            return "NAMED_GROUP_REF";
          },
        ],
        [
          /^\\b/,
          function () {
            return "ESC_b";
          },
        ],
        [
          /^\\B/,
          function () {
            return "ESC_B";
          },
        ],
        [
          /^\\c[a-zA-Z]/,
          function () {
            return "CTRL_CH";
          },
        ],
        [
          /^\\0\d{1,2}/,
          function () {
            return "OCT_CODE";
          },
        ],
        [
          /^\\0/,
          function () {
            return "DEC_CODE";
          },
        ],
        [
          /^\\\d{1,3}/,
          function () {
            return "DEC_CODE";
          },
        ],
        [
          /^\\u[dD][89abAB][0-9a-fA-F]{2}\\u[dD][c-fC-F][0-9a-fA-F]{2}/,
          function () {
            return "U_CODE_SURROGATE";
          },
        ],
        [
          /^\\u\{[0-9a-fA-F]{1,}\}/,
          function () {
            return "U_CODE";
          },
        ],
        [
          /^\\u[0-9a-fA-F]{4}/,
          function () {
            return "U_CODE";
          },
        ],
        [
          /^\\[pP]\{\w+(?:=\w+)?\}/,
          function () {
            return "U_PROP_VALUE_EXP";
          },
        ],
        [
          /^\\x[0-9a-fA-F]{2}/,
          function () {
            return "HEX_CODE";
          },
        ],
        [
          /^\\[tnrdDsSwWvf]/,
          function () {
            return "META_CHAR";
          },
        ],
        [
          /^\\\//,
          function () {
            return "ESC_CHAR";
          },
        ],
        [
          /^\\[ #]/,
          function () {
            return "ESC_CHAR";
          },
        ],
        [
          /^\\[\^\$\.\*\+\?\(\)\\\[\]\{\}\|\/]/,
          function () {
            return "ESC_CHAR";
          },
        ],
        [
          /^\\[^*?+\[()\\|]/,
          function () {
            var u = this.getCurrentState();
            if (u === "u_class" && t === "\\-") {
              return "ESC_CHAR";
            } else if (u === "u" || u === "xu" || u === "u_class") {
              throw new SyntaxError("invalid Unicode escape " + t);
            }
            return "ESC_CHAR";
          },
        ],
        [
          /^\(/,
          function () {
            return "CHAR";
          },
        ],
        [
          /^\)/,
          function () {
            return "CHAR";
          },
        ],
        [
          /^\(\?=/,
          function () {
            return "POS_LA_ASSERT";
          },
        ],
        [
          /^\(\?!/,
          function () {
            return "NEG_LA_ASSERT";
          },
        ],
        [
          /^\(\?<=/,
          function () {
            return "POS_LB_ASSERT";
          },
        ],
        [
          /^\(\?<!/,
          function () {
            return "NEG_LB_ASSERT";
          },
        ],
        [
          /^\(\?:/,
          function () {
            return "NON_CAPTURE_GROUP";
          },
        ],
        [
          /^\(\?<(([\u0041-\u005a\u0061-\u007a\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376-\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4-\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08bd\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09f0-\u09f1\u09fc\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0af9\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60-\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0cf1-\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e46\u0e81-\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae-\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5-\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fef\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a-\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7c6\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd-\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5-\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab67\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]|\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c-\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf4a\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37-\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4-\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe-\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd23\udf00-\udf1c\udf27\udf30-\udf45\udfe0-\udff6]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f-\udf10\udf13-\udf28\udf2a-\udf30\udf32-\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc5f\udc80-\udcaf\udcc4-\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udeb8\udf00-\udf1a]|\ud806[\udc00-\udc2b\udca0-\udcdf\udcff\udda0-\udda7\uddaa-\uddd0\udde1\udde3\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude89\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08-\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67-\udd68\udd6a-\udd89\udd98\udee0-\udef2]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc80-\udd43]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf4a\udf50\udf93-\udf9f\udfe0-\udfe1\udfe3]|\ud81c[\udc00-\udfff]|\ud81d[\udc00-\udfff]|\ud81e[\udc00-\udfff]|\ud81f[\udc00-\udfff]|\ud820[\udc00-\udfff]|\ud821[\udc00-\udff7]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd50-\udd52\udd64-\udd67\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e-\udc9f\udca2\udca5-\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud838[\udd00-\udd2c\udd37-\udd3d\udd4e\udec0-\udeeb]|\ud83a[\udc00-\udcc4\udd00-\udd43\udd4b]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21-\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51-\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61-\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud840[\udc00-\udfff]|\ud841[\udc00-\udfff]|\ud842[\udc00-\udfff]|\ud843[\udc00-\udfff]|\ud844[\udc00-\udfff]|\ud845[\udc00-\udfff]|\ud846[\udc00-\udfff]|\ud847[\udc00-\udfff]|\ud848[\udc00-\udfff]|\ud849[\udc00-\udfff]|\ud84a[\udc00-\udfff]|\ud84b[\udc00-\udfff]|\ud84c[\udc00-\udfff]|\ud84d[\udc00-\udfff]|\ud84e[\udc00-\udfff]|\ud84f[\udc00-\udfff]|\ud850[\udc00-\udfff]|\ud851[\udc00-\udfff]|\ud852[\udc00-\udfff]|\ud853[\udc00-\udfff]|\ud854[\udc00-\udfff]|\ud855[\udc00-\udfff]|\ud856[\udc00-\udfff]|\ud857[\udc00-\udfff]|\ud858[\udc00-\udfff]|\ud859[\udc00-\udfff]|\ud85a[\udc00-\udfff]|\ud85b[\udc00-\udfff]|\ud85c[\udc00-\udfff]|\ud85d[\udc00-\udfff]|\ud85e[\udc00-\udfff]|\ud85f[\udc00-\udfff]|\ud860[\udc00-\udfff]|\ud861[\udc00-\udfff]|\ud862[\udc00-\udfff]|\ud863[\udc00-\udfff]|\ud864[\udc00-\udfff]|\ud865[\udc00-\udfff]|\ud866[\udc00-\udfff]|\ud867[\udc00-\udfff]|\ud868[\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86a[\udc00-\udfff]|\ud86b[\udc00-\udfff]|\ud86c[\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud86f[\udc00-\udfff]|\ud870[\udc00-\udfff]|\ud871[\udc00-\udfff]|\ud872[\udc00-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud874[\udc00-\udfff]|\ud875[\udc00-\udfff]|\ud876[\udc00-\udfff]|\ud877[\udc00-\udfff]|\ud878[\udc00-\udfff]|\ud879[\udc00-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d])|[$_]|(\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]{1,}\}))(([\u0030-\u0039\u0041-\u005a\u005f\u0061-\u007a\u00aa\u00b5\u00b7\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376-\u0377\u037a-\u037d\u037f\u0386-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u05d0-\u05ea\u05ef-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u07fd\u0800-\u082d\u0840-\u085b\u0860-\u086a\u08a0-\u08b4\u08b6-\u08bd\u08d3-\u08e1\u08e3-\u0963\u0966-\u096f\u0971-\u0983\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7-\u09c8\u09cb-\u09ce\u09d7\u09dc-\u09dd\u09df-\u09e3\u09e6-\u09f1\u09fc\u09fe\u0a01-\u0a03\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0af9-\u0aff\u0b01-\u0b03\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57\u0b5c-\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82-\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c00-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c58-\u0c5a\u0c60-\u0c63\u0c66-\u0c6f\u0c80-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1-\u0cf2\u0d00-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d54-\u0d57\u0d5f-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82-\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81-\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18-\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1369-\u1371\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772-\u1773\u1780-\u17d3\u17d7\u17dc-\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1878\u1880-\u18aa\u18b0-\u18f5\u1900-\u191e\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19da\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1ab0-\u1abd\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1cd0-\u1cd2\u1cd4-\u1cfa\u1d00-\u1df9\u1dfb-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u203f-\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fef\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7c6\ua7f7-\ua827\ua840-\ua873\ua880-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua8fd-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\ua9e0-\ua9fe\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab67\uab70-\uabea\uabec-\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe2f\ufe33-\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]|\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c-\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\uddfd\ude80-\ude9c\udea0-\uded0\udee0\udf00-\udf1f\udf2d-\udf4a\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud801[\udc00-\udc9d\udca0-\udca9\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37-\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4-\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe-\uddbf\ude00-\ude03\ude05-\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude38-\ude3a\ude3f\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee6\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd27\udd30-\udd39\udf00-\udf1c\udf27\udf30-\udf50\udfe0-\udff6]|\ud804[\udc00-\udc46\udc66-\udc6f\udc7f-\udcba\udcd0-\udce8\udcf0-\udcf9\udd00-\udd34\udd36-\udd3f\udd44-\udd46\udd50-\udd73\udd76\udd80-\uddc4\uddc9-\uddcc\uddd0-\uddda\udddc\ude00-\ude11\ude13-\ude37\ude3e\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udeea\udef0-\udef9\udf00-\udf03\udf05-\udf0c\udf0f-\udf10\udf13-\udf28\udf2a-\udf30\udf32-\udf33\udf35-\udf39\udf3b-\udf44\udf47-\udf48\udf4b-\udf4d\udf50\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc00-\udc4a\udc50-\udc59\udc5e-\udc5f\udc80-\udcc5\udcc7\udcd0-\udcd9\udd80-\uddb5\uddb8-\uddc0\uddd8-\udddd\ude00-\ude40\ude44\ude50-\ude59\ude80-\udeb8\udec0-\udec9\udf00-\udf1a\udf1d-\udf2b\udf30-\udf39]|\ud806[\udc00-\udc3a\udca0-\udce9\udcff\udda0-\udda7\uddaa-\uddd7\uddda-\udde1\udde3-\udde4\ude00-\ude3e\ude47\ude50-\ude99\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc40\udc50-\udc59\udc72-\udc8f\udc92-\udca7\udca9-\udcb6\udd00-\udd06\udd08-\udd09\udd0b-\udd36\udd3a\udd3c-\udd3d\udd3f-\udd47\udd50-\udd59\udd60-\udd65\udd67-\udd68\udd6a-\udd8e\udd90-\udd91\udd93-\udd98\udda0-\udda9\udee0-\udef6]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc80-\udd43]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\ude60-\ude69\uded0-\udeed\udef0-\udef4\udf00-\udf36\udf40-\udf43\udf50-\udf59\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf4a\udf4f-\udf87\udf8f-\udf9f\udfe0-\udfe1\udfe3]|\ud81c[\udc00-\udfff]|\ud81d[\udc00-\udfff]|\ud81e[\udc00-\udfff]|\ud81f[\udc00-\udfff]|\ud820[\udc00-\udfff]|\ud821[\udc00-\udff7]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd50-\udd52\udd64-\udd67\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9d-\udc9e]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e-\udc9f\udca2\udca5-\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb\udfce-\udfff]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23-\udc24\udc26-\udc2a\udd00-\udd2c\udd30-\udd3d\udd40-\udd49\udd4e\udec0-\udef9]|\ud83a[\udc00-\udcc4\udcd0-\udcd6\udd00-\udd4b\udd50-\udd59]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21-\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51-\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61-\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud840[\udc00-\udfff]|\ud841[\udc00-\udfff]|\ud842[\udc00-\udfff]|\ud843[\udc00-\udfff]|\ud844[\udc00-\udfff]|\ud845[\udc00-\udfff]|\ud846[\udc00-\udfff]|\ud847[\udc00-\udfff]|\ud848[\udc00-\udfff]|\ud849[\udc00-\udfff]|\ud84a[\udc00-\udfff]|\ud84b[\udc00-\udfff]|\ud84c[\udc00-\udfff]|\ud84d[\udc00-\udfff]|\ud84e[\udc00-\udfff]|\ud84f[\udc00-\udfff]|\ud850[\udc00-\udfff]|\ud851[\udc00-\udfff]|\ud852[\udc00-\udfff]|\ud853[\udc00-\udfff]|\ud854[\udc00-\udfff]|\ud855[\udc00-\udfff]|\ud856[\udc00-\udfff]|\ud857[\udc00-\udfff]|\ud858[\udc00-\udfff]|\ud859[\udc00-\udfff]|\ud85a[\udc00-\udfff]|\ud85b[\udc00-\udfff]|\ud85c[\udc00-\udfff]|\ud85d[\udc00-\udfff]|\ud85e[\udc00-\udfff]|\ud85f[\udc00-\udfff]|\ud860[\udc00-\udfff]|\ud861[\udc00-\udfff]|\ud862[\udc00-\udfff]|\ud863[\udc00-\udfff]|\ud864[\udc00-\udfff]|\ud865[\udc00-\udfff]|\ud866[\udc00-\udfff]|\ud867[\udc00-\udfff]|\ud868[\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86a[\udc00-\udfff]|\ud86b[\udc00-\udfff]|\ud86c[\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud86f[\udc00-\udfff]|\ud870[\udc00-\udfff]|\ud871[\udc00-\udfff]|\ud872[\udc00-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud874[\udc00-\udfff]|\ud875[\udc00-\udfff]|\ud876[\udc00-\udfff]|\ud877[\udc00-\udfff]|\ud878[\udc00-\udfff]|\ud879[\udc00-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]|\udb40[\udd00-\uddef])|[$_]|(\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]{1,}\})|[\u200c\u200d])*>/,
          function () {
            t = t.slice(3, -1);
            F(t, this.getCurrentState());
            return "NAMED_CAPTURE_GROUP";
          },
        ],
        [
          /^\(/,
          function () {
            return "L_PAREN";
          },
        ],
        [
          /^\)/,
          function () {
            return "R_PAREN";
          },
        ],
        [
          /^[*?+[^$]/,
          function () {
            return "CHAR";
          },
        ],
        [
          /^\\\]/,
          function () {
            return "ESC_CHAR";
          },
        ],
        [
          /^\]/,
          function () {
            this.popState();
            return "R_BRACKET";
          },
        ],
        [
          /^\^/,
          function () {
            return "BOS";
          },
        ],
        [
          /^\$/,
          function () {
            return "EOS";
          },
        ],
        [
          /^\*/,
          function () {
            return "STAR";
          },
        ],
        [
          /^\?/,
          function () {
            return "Q_MARK";
          },
        ],
        [
          /^\+/,
          function () {
            return "PLUS";
          },
        ],
        [
          /^\|/,
          function () {
            return "BAR";
          },
        ],
        [
          /^\./,
          function () {
            return "ANY";
          },
        ],
        [
          /^\//,
          function () {
            return "SLASH";
          },
        ],
        [
          /^[^*?+\[()\\|]/,
          function () {
            return "CHAR";
          },
        ],
        [
          /^\[\^/,
          function () {
            var u = this.getCurrentState();
            this.pushState(u === "u" || u === "xu" ? "u_class" : "class");
            return "NEG_CLASS";
          },
        ],
        [
          /^\[/,
          function () {
            var u = this.getCurrentState();
            this.pushState(u === "u" || u === "xu" ? "u_class" : "class");
            return "L_BRACKET";
          },
        ],
      ];
      var y = {
        INITIAL: [
          8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 22, 23, 24, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
        ],
        u: [
          8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 47, 48,
          49, 50, 51,
        ],
        xu: [
          0, 1, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46,
          47, 48, 49, 50, 51,
        ],
        x: [
          0, 1, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 22, 23, 24, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
          51,
        ],
        u_class: [
          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
          40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
        ],
        class: [
          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
          43, 44, 45, 46, 47, 48, 49, 50, 51,
        ],
      };
      var m = { type: s, value: "" };
      v = {
        initString: function u(e) {
          this._string = e;
          this._cursor = 0;
          this._states = ["INITIAL"];
          this._tokensQueue = [];
          this._currentLine = 1;
          this._currentColumn = 0;
          this._currentLineBeginOffset = 0;
          this._tokenStartOffset = 0;
          this._tokenEndOffset = 0;
          this._tokenStartLine = 1;
          this._tokenEndLine = 1;
          this._tokenStartColumn = 0;
          this._tokenEndColumn = 0;
          return this;
        },
        getStates: function u() {
          return this._states;
        },
        getCurrentState: function u() {
          return this._states[this._states.length - 1];
        },
        pushState: function u(e) {
          this._states.push(e);
        },
        begin: function u(e) {
          this.pushState(e);
        },
        popState: function u() {
          if (this._states.length > 1) {
            return this._states.pop();
          }
          return this._states[0];
        },
        getNextToken: function u() {
          if (this._tokensQueue.length > 0) {
            return this.onToken(this._toToken(this._tokensQueue.shift()));
          }
          if (!this.hasMoreTokens()) {
            return this.onToken(m);
          }
          var e = this._string.slice(this._cursor);
          var r = y[this.getCurrentState()];
          for (var d = 0; d < r.length; d++) {
            var f = r[d];
            var i = g[f];
            var c = this._match(e, i[0]);
            if (e === "" && c === "") {
              this._cursor++;
            }
            if (c !== null) {
              t = c;
              n = t.length;
              var o = i[1].call(this);
              if (!o) {
                return this.getNextToken();
              }
              if (Array.isArray(o)) {
                var s = o.slice(1);
                o = o[0];
                if (s.length > 0) {
                  var l;
                  (l = this._tokensQueue).unshift.apply(l, a(s));
                }
              }
              return this.onToken(this._toToken(o, t));
            }
          }
          if (this.isEOF()) {
            this._cursor++;
            return m;
          }
          this.throwUnexpectedToken(e[0], this._currentLine, this._currentColumn);
        },
        throwUnexpectedToken: function u(e, r, d) {
          var a = this._string.split("\n")[r - 1];
          var t = "";
          if (a) {
            var n = " ".repeat(d);
            t = "\n\n" + a + "\n" + n + "^\n";
          }
          throw new SyntaxError(t + 'Unexpected token: "' + e + '" ' + ("at " + r + ":" + d + "."));
        },
        getCursor: function u() {
          return this._cursor;
        },
        getCurrentLine: function u() {
          return this._currentLine;
        },
        getCurrentColumn: function u() {
          return this._currentColumn;
        },
        _captureLocation: function u(e) {
          var r = /\n/g;
          this._tokenStartOffset = this._cursor;
          this._tokenStartLine = this._currentLine;
          this._tokenStartColumn = this._tokenStartOffset - this._currentLineBeginOffset;
          var d = void 0;
          while ((d = r.exec(e)) !== null) {
            this._currentLine++;
            this._currentLineBeginOffset = this._tokenStartOffset + d.index + 1;
          }
          this._tokenEndOffset = this._cursor + e.length;
          this._tokenEndLine = this._currentLine;
          this._tokenEndColumn = this._currentColumn = this._tokenEndOffset - this._currentLineBeginOffset;
        },
        _toToken: function u(e) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          return {
            type: e,
            value: r,
            startOffset: this._tokenStartOffset,
            endOffset: this._tokenEndOffset,
            startLine: this._tokenStartLine,
            endLine: this._tokenEndLine,
            startColumn: this._tokenStartColumn,
            endColumn: this._tokenEndColumn,
          };
        },
        isEOF: function u() {
          return this._cursor === this._string.length;
        },
        hasMoreTokens: function u() {
          return this._cursor <= this._string.length;
        },
        _match: function u(e, r) {
          var d = e.match(r);
          if (d) {
            this._captureLocation(d[0]);
            this._cursor += d[0].length;
            return d[0];
          }
          return null;
        },
        onToken: function u(e) {
          return e;
        },
      };
      f.lexer = v;
      f.tokenizer = v;
      f.options = { captureLocations: true };
      var _ = {
        setOptions: function u(e) {
          f.options = e;
          return this;
        },
        getOptions: function u() {
          return f.options;
        },
        parse: function u(e, r) {
          if (!v) {
            throw new Error("Tokenizer instance wasn't specified.");
          }
          v.initString(e);
          var d = f.options;
          if (r) {
            f.options = Object.assign({}, f.options, r);
          }
          _.onParseBegin(e, v, f.options);
          h.length = 0;
          h.push(0);
          var o = v.getNextToken();
          var s = null;
          do {
            if (!o) {
              f.options = d;
              H();
            }
            var g = h[h.length - 1];
            var y = b[o.type];
            if (!p[g].hasOwnProperty(y)) {
              f.options = d;
              U(o);
            }
            var m = p[g][y];
            if (m[0] === "s") {
              var C = null;
              if (f.options.captureLocations) {
                C = {
                  startOffset: o.startOffset,
                  endOffset: o.endOffset,
                  startLine: o.startLine,
                  endLine: o.endLine,
                  startColumn: o.startColumn,
                  endColumn: o.endColumn,
                };
              }
              s = this.onShift(o);
              h.push({ symbol: b[s.type], semanticValue: s.value, loc: C }, Number(m.slice(1)));
              o = v.getNextToken();
            } else if (m[0] === "r") {
              var S = m.slice(1);
              var x = l[S];
              var A = typeof x[2] === "function";
              var k = A ? [] : null;
              var P = A && f.options.captureLocations ? [] : null;
              if (x[1] !== 0) {
                var w = x[1];
                while (w-- > 0) {
                  h.pop();
                  var E = h.pop();
                  if (A) {
                    k.unshift(E.semanticValue);
                    if (P) {
                      P.unshift(E.loc);
                    }
                  }
                }
              }
              var T = { symbol: x[0] };
              if (A) {
                t = s ? s.value : null;
                n = s ? s.value.length : null;
                var O = P !== null ? k.concat(P) : k;
                x[2].apply(x, a(O));
                T.semanticValue = i;
                if (P) {
                  T.loc = c;
                }
              }
              var R = h[h.length - 1];
              var N = x[0];
              h.push(T, p[R][N]);
            } else if (m === "acc") {
              h.pop();
              var L = h.pop();
              if (h.length !== 1 || h[0] !== 0 || v.hasMoreTokens()) {
                f.options = d;
                U(o);
              }
              if (L.hasOwnProperty("semanticValue")) {
                f.options = d;
                _.onParseEnd(L.semanticValue);
                return L.semanticValue;
              }
              _.onParseEnd();
              f.options = d;
              return true;
            }
          } while (v.hasMoreTokens() || h.length > 1);
        },
        setTokenizer: function u(e) {
          v = e;
          return _;
        },
        getTokenizer: function u() {
          return v;
        },
        onParseBegin: function u(e, r, d) {},
        onParseEnd: function u(e) {},
        onShift: function u(e) {
          return e;
        },
      };
      var C = 0;
      var S = {};
      var x = "";
      _.onParseBegin = function (u, e) {
        x = u;
        C = 0;
        S = {};
        var r = u.lastIndexOf("/");
        var d = u.slice(r);
        if (d.includes("x") && d.includes("u")) {
          e.pushState("xu");
        } else {
          if (d.includes("x")) {
            e.pushState("x");
          }
          if (d.includes("u")) {
            e.pushState("u");
          }
        }
      };
      _.onShift = function (u) {
        if (u.type === "L_PAREN" || u.type === "NAMED_CAPTURE_GROUP") {
          u.value = new String(u.value);
          u.value.groupNumber = ++C;
        }
        return u;
      };
      function A(u) {
        var e = u.match(/\d+/g).map(Number);
        if (Number.isFinite(e[1]) && e[1] < e[0]) {
          throw new SyntaxError("Numbers out of order in " + u + " quantifier");
        }
        return e;
      }
      function k(u, e) {
        if (u.kind === "control" || e.kind === "control" || (!isNaN(u.codePoint) && !isNaN(e.codePoint) && u.codePoint > e.codePoint)) {
          throw new SyntaxError("Range " + u.value + "-" + e.value + " out of order in character class");
        }
      }
      var P = r(24876);
      function w(u, e) {
        var r = u[1] === "P";
        var d = u.indexOf("=");
        var a = u.slice(3, d !== -1 ? d : -1);
        var t = void 0;
        var n = d === -1 && P.isGeneralCategoryValue(a);
        var f = d === -1 && P.isBinaryPropertyName(a);
        if (n) {
          t = a;
          a = "General_Category";
        } else if (f) {
          t = a;
        } else {
          if (!P.isValidName(a)) {
            throw new SyntaxError("Invalid unicode property name: " + a + ".");
          }
          t = u.slice(d + 1, -1);
          if (!P.isValidValue(a, t)) {
            throw new SyntaxError("Invalid " + a + " unicode property value: " + t + ".");
          }
        }
        return j(
          {
            type: "UnicodeProperty",
            name: a,
            value: t,
            negative: r,
            shorthand: n,
            binary: f,
            canonicalName: P.getCanonicalName(a) || a,
            canonicalValue: P.getCanonicalValue(t) || t,
          },
          e
        );
      }
      function E(u, e, r) {
        var a = void 0;
        var t = void 0;
        switch (e) {
          case "decimal": {
            t = Number(u.slice(1));
            a = String.fromCodePoint(t);
            break;
          }
          case "oct": {
            t = parseInt(u.slice(1), 8);
            a = String.fromCodePoint(t);
            break;
          }
          case "hex":
          case "unicode": {
            if (u.lastIndexOf("\\u") > 0) {
              var n = u.split("\\u").slice(1),
                f = d(n, 2),
                i = f[0],
                c = f[1];
              i = parseInt(i, 16);
              c = parseInt(c, 16);
              t = (i - 55296) * 1024 + (c - 56320) + 65536;
              a = String.fromCodePoint(t);
            } else {
              var o = u.slice(2).replace("{", "");
              t = parseInt(o, 16);
              if (t > 1114111) {
                throw new SyntaxError("Bad character escape sequence: " + u);
              }
              a = String.fromCodePoint(t);
            }
            break;
          }
          case "meta": {
            switch (u) {
              case "\\t":
                a = "\t";
                t = a.codePointAt(0);
                break;
              case "\\n":
                a = "\n";
                t = a.codePointAt(0);
                break;
              case "\\r":
                a = "\r";
                t = a.codePointAt(0);
                break;
              case "\\v":
                a = "\v";
                t = a.codePointAt(0);
                break;
              case "\\f":
                a = "\f";
                t = a.codePointAt(0);
                break;
              case "\\b":
                a = "\b";
                t = a.codePointAt(0);
              case "\\0":
                a = "\0";
                t = 0;
              case ".":
                a = ".";
                t = NaN;
                break;
              default:
                t = NaN;
            }
            break;
          }
          case "simple": {
            a = u;
            t = a.codePointAt(0);
            break;
          }
        }
        return j({ type: "Char", value: u, kind: e, symbol: a, codePoint: t }, r);
      }
      var T = "gimsuxy";
      function O(u) {
        var e = new Set();
        var r = true;
        var d = false;
        var a = undefined;
        try {
          for (var t = u[Symbol.iterator](), n; !(r = (n = t.next()).done); r = true) {
            var f = n.value;
            if (e.has(f) || !T.includes(f)) {
              throw new SyntaxError("Invalid flags: " + u);
            }
            e.add(f);
          }
        } catch (i) {
          d = true;
          a = i;
        } finally {
          try {
            if (!r && t.return) {
              t.return();
            }
          } finally {
            if (d) {
              throw a;
            }
          }
        }
        return u.split("").sort().join("");
      }
      function R(u, e) {
        var r = Number(u.slice(1));
        if (r > 0 && r <= C) {
          return j({ type: "Backreference", kind: "number", number: r, reference: r }, e);
        }
        return E(u, "decimal", e);
      }
      var N = /^\\u[0-9a-fA-F]{4}/;
      var L = /^\\u\{[0-9a-fA-F]{1,}\}/;
      var I = /\\u\{[0-9a-fA-F]{1,}\}/;
      function F(u, e) {
        var r = I.test(u);
        var d = e === "u" || e === "xu" || e === "u_class";
        if (r && !d) {
          throw new SyntaxError('invalid group Unicode name "' + u + '", use `u` flag.');
        }
        return u;
      }
      var D =
        /\\u(?:([dD][89aAbB][0-9a-fA-F]{2})\\u([dD][c-fC-F][0-9a-fA-F]{2})|([dD][89aAbB][0-9a-fA-F]{2})|([dD][c-fC-F][0-9a-fA-F]{2})|([0-9a-ce-fA-CE-F][0-9a-fA-F]{3}|[dD][0-7][0-9a-fA-F]{2})|\{(0*(?:[0-9a-fA-F]{1,5}|10[0-9a-fA-F]{4}))\})/;
      function M(u) {
        return u.replace(new RegExp(D, "g"), function (u, e, r, d, a, t, n) {
          if (e) {
            return String.fromCodePoint(parseInt(e, 16), parseInt(r, 16));
          }
          if (d) {
            return String.fromCodePoint(parseInt(d, 16));
          }
          if (a) {
            return String.fromCodePoint(parseInt(a, 16));
          }
          if (t) {
            return String.fromCodePoint(parseInt(t, 16));
          }
          if (n) {
            return String.fromCodePoint(parseInt(n, 16));
          }
          return u;
        });
      }
      function G(u, e) {
        var r = u.slice(3, -1);
        var d = M(r);
        if (S.hasOwnProperty(d)) {
          return j({ type: "Backreference", kind: "name", number: S[d], reference: d, referenceRaw: r }, e);
        }
        var a = null;
        var t = null;
        var n = null;
        var f = null;
        if (e) {
          a = e.startOffset;
          t = e.startLine;
          n = e.endLine;
          f = e.startColumn;
        }
        var i = /^[\w$<>]/;
        var c = void 0;
        var o = [
          E(
            u.slice(1, 2),
            "simple",
            a ? { startLine: t, endLine: n, startColumn: f, startOffset: a, endOffset: (a += 2), endColumn: (f += 2) } : null
          ),
        ];
        o[0].escaped = true;
        u = u.slice(2);
        while (u.length > 0) {
          var s = null;
          if ((s = u.match(N)) || (s = u.match(L))) {
            if (a) {
              c = { startLine: t, endLine: n, startColumn: f, startOffset: a, endOffset: (a += s[0].length), endColumn: (f += s[0].length) };
            }
            o.push(E(s[0], "unicode", c));
            u = u.slice(s[0].length);
          } else if ((s = u.match(i))) {
            if (a) {
              c = { startLine: t, endLine: n, startColumn: f, startOffset: a, endOffset: ++a, endColumn: ++f };
            }
            o.push(E(s[0], "simple", c));
            u = u.slice(1);
          }
        }
        return o;
      }
      function j(u, e) {
        if (f.options.captureLocations) {
          u.loc = {
            source: x.slice(e.startOffset, e.endOffset),
            start: { line: e.startLine, column: e.startColumn, offset: e.startOffset },
            end: { line: e.endLine, column: e.endColumn, offset: e.endOffset },
          };
        }
        return u;
      }
      function B(u, e) {
        if (!f.options.captureLocations) {
          return null;
        }
        return {
          startOffset: u.startOffset,
          endOffset: e.endOffset,
          startLine: u.startLine,
          endLine: e.endLine,
          startColumn: u.startColumn,
          endColumn: e.endColumn,
        };
      }
      function U(u) {
        if (u.type === s) {
          H();
        }
        v.throwUnexpectedToken(u.value, u.startLine, u.startColumn);
      }
      function H() {
        q("Unexpected end of input.");
      }
      function q(u) {
        throw new SyntaxError(u);
      }
      u.exports = _;
    },
    37112: (u, e, r) => {
      var d = r(42669);
      var a = d.parse.bind(d);
      d.parse = function (u, e) {
        return a("" + u, e);
      };
      d.setOptions({ captureLocations: false });
      u.exports = d;
    },
    24876: (u) => {
      var e = { General_Category: "gc", Script: "sc", Script_Extensions: "scx" };
      var r = c(e);
      var d = {
        ASCII: "ASCII",
        ASCII_Hex_Digit: "AHex",
        Alphabetic: "Alpha",
        Any: "Any",
        Assigned: "Assigned",
        Bidi_Control: "Bidi_C",
        Bidi_Mirrored: "Bidi_M",
        Case_Ignorable: "CI",
        Cased: "Cased",
        Changes_When_Casefolded: "CWCF",
        Changes_When_Casemapped: "CWCM",
        Changes_When_Lowercased: "CWL",
        Changes_When_NFKC_Casefolded: "CWKCF",
        Changes_When_Titlecased: "CWT",
        Changes_When_Uppercased: "CWU",
        Dash: "Dash",
        Default_Ignorable_Code_Point: "DI",
        Deprecated: "Dep",
        Diacritic: "Dia",
        Emoji: "Emoji",
        Emoji_Component: "Emoji_Component",
        Emoji_Modifier: "Emoji_Modifier",
        Emoji_Modifier_Base: "Emoji_Modifier_Base",
        Emoji_Presentation: "Emoji_Presentation",
        Extended_Pictographic: "Extended_Pictographic",
        Extender: "Ext",
        Grapheme_Base: "Gr_Base",
        Grapheme_Extend: "Gr_Ext",
        Hex_Digit: "Hex",
        IDS_Binary_Operator: "IDSB",
        IDS_Trinary_Operator: "IDST",
        ID_Continue: "IDC",
        ID_Start: "IDS",
        Ideographic: "Ideo",
        Join_Control: "Join_C",
        Logical_Order_Exception: "LOE",
        Lowercase: "Lower",
        Math: "Math",
        Noncharacter_Code_Point: "NChar",
        Pattern_Syntax: "Pat_Syn",
        Pattern_White_Space: "Pat_WS",
        Quotation_Mark: "QMark",
        Radical: "Radical",
        Regional_Indicator: "RI",
        Sentence_Terminal: "STerm",
        Soft_Dotted: "SD",
        Terminal_Punctuation: "Term",
        Unified_Ideograph: "UIdeo",
        Uppercase: "Upper",
        Variation_Selector: "VS",
        White_Space: "space",
        XID_Continue: "XIDC",
        XID_Start: "XIDS",
      };
      var a = c(d);
      var t = {
        Cased_Letter: "LC",
        Close_Punctuation: "Pe",
        Connector_Punctuation: "Pc",
        Control: ["Cc", "cntrl"],
        Currency_Symbol: "Sc",
        Dash_Punctuation: "Pd",
        Decimal_Number: ["Nd", "digit"],
        Enclosing_Mark: "Me",
        Final_Punctuation: "Pf",
        Format: "Cf",
        Initial_Punctuation: "Pi",
        Letter: "L",
        Letter_Number: "Nl",
        Line_Separator: "Zl",
        Lowercase_Letter: "Ll",
        Mark: ["M", "Combining_Mark"],
        Math_Symbol: "Sm",
        Modifier_Letter: "Lm",
        Modifier_Symbol: "Sk",
        Nonspacing_Mark: "Mn",
        Number: "N",
        Open_Punctuation: "Ps",
        Other: "C",
        Other_Letter: "Lo",
        Other_Number: "No",
        Other_Punctuation: "Po",
        Other_Symbol: "So",
        Paragraph_Separator: "Zp",
        Private_Use: "Co",
        Punctuation: ["P", "punct"],
        Separator: "Z",
        Space_Separator: "Zs",
        Spacing_Mark: "Mc",
        Surrogate: "Cs",
        Symbol: "S",
        Titlecase_Letter: "Lt",
        Unassigned: "Cn",
        Uppercase_Letter: "Lu",
      };
      var n = c(t);
      var f = {
        Adlam: "Adlm",
        Ahom: "Ahom",
        Anatolian_Hieroglyphs: "Hluw",
        Arabic: "Arab",
        Armenian: "Armn",
        Avestan: "Avst",
        Balinese: "Bali",
        Bamum: "Bamu",
        Bassa_Vah: "Bass",
        Batak: "Batk",
        Bengali: "Beng",
        Bhaiksuki: "Bhks",
        Bopomofo: "Bopo",
        Brahmi: "Brah",
        Braille: "Brai",
        Buginese: "Bugi",
        Buhid: "Buhd",
        Canadian_Aboriginal: "Cans",
        Carian: "Cari",
        Caucasian_Albanian: "Aghb",
        Chakma: "Cakm",
        Cham: "Cham",
        Cherokee: "Cher",
        Common: "Zyyy",
        Coptic: ["Copt", "Qaac"],
        Cuneiform: "Xsux",
        Cypriot: "Cprt",
        Cyrillic: "Cyrl",
        Deseret: "Dsrt",
        Devanagari: "Deva",
        Dogra: "Dogr",
        Duployan: "Dupl",
        Egyptian_Hieroglyphs: "Egyp",
        Elbasan: "Elba",
        Ethiopic: "Ethi",
        Georgian: "Geor",
        Glagolitic: "Glag",
        Gothic: "Goth",
        Grantha: "Gran",
        Greek: "Grek",
        Gujarati: "Gujr",
        Gunjala_Gondi: "Gong",
        Gurmukhi: "Guru",
        Han: "Hani",
        Hangul: "Hang",
        Hanifi_Rohingya: "Rohg",
        Hanunoo: "Hano",
        Hatran: "Hatr",
        Hebrew: "Hebr",
        Hiragana: "Hira",
        Imperial_Aramaic: "Armi",
        Inherited: ["Zinh", "Qaai"],
        Inscriptional_Pahlavi: "Phli",
        Inscriptional_Parthian: "Prti",
        Javanese: "Java",
        Kaithi: "Kthi",
        Kannada: "Knda",
        Katakana: "Kana",
        Kayah_Li: "Kali",
        Kharoshthi: "Khar",
        Khmer: "Khmr",
        Khojki: "Khoj",
        Khudawadi: "Sind",
        Lao: "Laoo",
        Latin: "Latn",
        Lepcha: "Lepc",
        Limbu: "Limb",
        Linear_A: "Lina",
        Linear_B: "Linb",
        Lisu: "Lisu",
        Lycian: "Lyci",
        Lydian: "Lydi",
        Mahajani: "Mahj",
        Makasar: "Maka",
        Malayalam: "Mlym",
        Mandaic: "Mand",
        Manichaean: "Mani",
        Marchen: "Marc",
        Medefaidrin: "Medf",
        Masaram_Gondi: "Gonm",
        Meetei_Mayek: "Mtei",
        Mende_Kikakui: "Mend",
        Meroitic_Cursive: "Merc",
        Meroitic_Hieroglyphs: "Mero",
        Miao: "Plrd",
        Modi: "Modi",
        Mongolian: "Mong",
        Mro: "Mroo",
        Multani: "Mult",
        Myanmar: "Mymr",
        Nabataean: "Nbat",
        New_Tai_Lue: "Talu",
        Newa: "Newa",
        Nko: "Nkoo",
        Nushu: "Nshu",
        Ogham: "Ogam",
        Ol_Chiki: "Olck",
        Old_Hungarian: "Hung",
        Old_Italic: "Ital",
        Old_North_Arabian: "Narb",
        Old_Permic: "Perm",
        Old_Persian: "Xpeo",
        Old_Sogdian: "Sogo",
        Old_South_Arabian: "Sarb",
        Old_Turkic: "Orkh",
        Oriya: "Orya",
        Osage: "Osge",
        Osmanya: "Osma",
        Pahawh_Hmong: "Hmng",
        Palmyrene: "Palm",
        Pau_Cin_Hau: "Pauc",
        Phags_Pa: "Phag",
        Phoenician: "Phnx",
        Psalter_Pahlavi: "Phlp",
        Rejang: "Rjng",
        Runic: "Runr",
        Samaritan: "Samr",
        Saurashtra: "Saur",
        Sharada: "Shrd",
        Shavian: "Shaw",
        Siddham: "Sidd",
        SignWriting: "Sgnw",
        Sinhala: "Sinh",
        Sogdian: "Sogd",
        Sora_Sompeng: "Sora",
        Soyombo: "Soyo",
        Sundanese: "Sund",
        Syloti_Nagri: "Sylo",
        Syriac: "Syrc",
        Tagalog: "Tglg",
        Tagbanwa: "Tagb",
        Tai_Le: "Tale",
        Tai_Tham: "Lana",
        Tai_Viet: "Tavt",
        Takri: "Takr",
        Tamil: "Taml",
        Tangut: "Tang",
        Telugu: "Telu",
        Thaana: "Thaa",
        Thai: "Thai",
        Tibetan: "Tibt",
        Tifinagh: "Tfng",
        Tirhuta: "Tirh",
        Ugaritic: "Ugar",
        Vai: "Vaii",
        Warang_Citi: "Wara",
        Yi: "Yiii",
        Zanabazar_Square: "Zanb",
      };
      var i = c(f);
      function c(u) {
        var e = {};
        for (var r in u) {
          if (!u.hasOwnProperty(r)) {
            continue;
          }
          var d = u[r];
          if (Array.isArray(d)) {
            for (var a = 0; a < d.length; a++) {
              e[d[a]] = r;
            }
          } else {
            e[d] = r;
          }
        }
        return e;
      }
      function o(u) {
        return e.hasOwnProperty(u) || r.hasOwnProperty(u) || d.hasOwnProperty(u) || a.hasOwnProperty(u);
      }
      function s(u, e) {
        if (b(u)) {
          return h(e);
        }
        if (p(u)) {
          return v(e);
        }
        return false;
      }
      function l(u) {
        return r.hasOwnProperty(u) || a.hasOwnProperty(u);
      }
      function b(u) {
        return u === "General_Category" || u == "gc";
      }
      function p(u) {
        return u === "Script" || u === "Script_Extensions" || u === "sc" || u === "scx";
      }
      function h(u) {
        return t.hasOwnProperty(u) || n.hasOwnProperty(u);
      }
      function v(u) {
        return f.hasOwnProperty(u) || i.hasOwnProperty(u);
      }
      function g(u) {
        return d.hasOwnProperty(u) || a.hasOwnProperty(u);
      }
      function y(u) {
        if (r.hasOwnProperty(u)) {
          return r[u];
        }
        if (a.hasOwnProperty(u)) {
          return a[u];
        }
        return null;
      }
      function m(u) {
        if (n.hasOwnProperty(u)) {
          return n[u];
        }
        if (i.hasOwnProperty(u)) {
          return i[u];
        }
        if (a.hasOwnProperty(u)) {
          return a[u];
        }
        return null;
      }
      u.exports = {
        isAlias: l,
        isValidName: o,
        isValidValue: s,
        isGeneralCategoryValue: h,
        isScriptCategoryValue: v,
        isBinaryPropertyName: g,
        getCanonicalName: y,
        getCanonicalValue: m,
        NON_BINARY_PROP_NAMES_TO_ALIASES: e,
        NON_BINARY_ALIASES_TO_PROP_NAMES: r,
        BINARY_PROP_NAMES_TO_ALIASES: d,
        BINARY_ALIASES_TO_PROP_NAMES: a,
        GENERAL_CATEGORY_VALUE_TO_ALIASES: t,
        GENERAL_CATEGORY_VALUE_ALIASES_TO_VALUES: n,
        SCRIPT_VALUE_TO_ALIASES: f,
        SCRIPT_VALUE_ALIASES_TO_VALUE: i,
      };
    },
    51474: (u, e, r) => {
      var d = r(78355);
      var a = r(89702);
      var t = r(47393);
      var n = r(37112);
      var f = r(60045);
      var i = r(8785);
      var c = r(22722);
      var o = r(77460),
        s = o.RegExpTree;
      var l = {
        parser: n,
        fa: c,
        TransformResult: f.TransformResult,
        parse: function u(e, r) {
          return n.parse("" + e, r);
        },
        traverse: function u(e, r, d) {
          return i.traverse(e, r, d);
        },
        transform: function u(e, r) {
          return f.transform(e, r);
        },
        generate: function u(e) {
          return a.generate(e);
        },
        toRegExp: function u(e) {
          var r = this.compatTranspile(e);
          return new RegExp(r.getSource(), r.getFlags());
        },
        optimize: function u(e, r) {
          var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            a = d.blacklist;
          return t.optimize(e, { whitelist: r, blacklist: a });
        },
        compatTranspile: function u(e, r) {
          return d.transform(e, r);
        },
        exec: function u(e, r) {
          if (typeof e === "string") {
            var d = this.compatTranspile(e);
            var a = d.getExtra();
            if (a.namedCapturingGroups) {
              e = new s(d.toRegExp(), { flags: d.getFlags(), source: d.getSource(), groups: a.namedCapturingGroups });
            } else {
              e = d.toRegExp();
            }
          }
          return e.exec(r);
        },
      };
      u.exports = l;
    },
    60045: (u, e, r) => {
      var d = (function () {
        function u(u, e) {
          for (var r = 0; r < e.length; r++) {
            var d = e[r];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(u, d.key, d);
          }
        }
        return function (e, r, d) {
          if (r) u(e.prototype, r);
          if (d) u(e, d);
          return e;
        };
      })();
      function a(u, e) {
        if (!(u instanceof e)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var t = r(89702);
      var n = r(37112);
      var f = r(8785);
      var i = (function () {
        function u(e) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          a(this, u);
          this._ast = e;
          this._source = null;
          this._string = null;
          this._regexp = null;
          this._extra = r;
        }
        d(u, [
          {
            key: "getAST",
            value: function u() {
              return this._ast;
            },
          },
          {
            key: "setExtra",
            value: function u(e) {
              this._extra = e;
            },
          },
          {
            key: "getExtra",
            value: function u() {
              return this._extra;
            },
          },
          {
            key: "toRegExp",
            value: function u() {
              if (!this._regexp) {
                this._regexp = new RegExp(this.getSource(), this._ast.flags);
              }
              return this._regexp;
            },
          },
          {
            key: "getSource",
            value: function u() {
              if (!this._source) {
                this._source = t.generate(this._ast.body);
              }
              return this._source;
            },
          },
          {
            key: "getFlags",
            value: function u() {
              return this._ast.flags;
            },
          },
          {
            key: "toString",
            value: function u() {
              if (!this._string) {
                this._string = t.generate(this._ast);
              }
              return this._string;
            },
          },
        ]);
        return u;
      })();
      u.exports = {
        TransformResult: i,
        transform: function u(e, r) {
          var d = e;
          if (e instanceof RegExp) {
            e = "" + e;
          }
          if (typeof e === "string") {
            d = n.parse(e, { captureLocations: true });
          }
          f.traverse(d, r);
          return new i(d);
        },
      };
    },
    26554: (u) => {
      function e(u) {
        if (Array.isArray(u)) {
          for (var e = 0, r = Array(u.length); e < u.length; e++) {
            r[e] = u[e];
          }
          return r;
        } else {
          return Array.from(u);
        }
      }
      function r(u) {
        if (u.type !== "Disjunction") {
          throw new TypeError('Expected "Disjunction" node, got "' + u.type + '"');
        }
        var d = [];
        if (u.left && u.left.type === "Disjunction") {
          d.push.apply(d, e(r(u.left)).concat([u.right]));
        } else {
          d.push(u.left, u.right);
        }
        return d;
      }
      function d(u) {
        return u.reduce(function (u, e) {
          return { type: "Disjunction", left: u, right: e };
        });
      }
      function a(u) {
        if (u.kind === "*") {
          u.kind = "+";
        } else if (u.kind === "+") {
          u.kind = "Range";
          u.from = 2;
          delete u.to;
        } else if (u.kind === "?") {
          u.kind = "Range";
          u.from = 1;
          u.to = 2;
        } else if (u.kind === "Range") {
          u.from += 1;
          if (u.to) {
            u.to += 1;
          }
        }
      }
      u.exports = { disjunctionToList: r, listToDisjunction: d, increaseQuantifierByOne: a };
    },
    8785: (u, e, r) => {
      var d = r(27762);
      function a(u) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var r = e.pre;
        var a = e.post;
        var t = e.skipProperty;
        function n(u, e, f, i) {
          if (!u || typeof u.type !== "string") {
            return;
          }
          var c = undefined;
          if (r) {
            c = r(u, e, f, i);
          }
          if (c !== false) {
            if (e && e[f]) {
              if (!isNaN(i)) {
                u = e[f][i];
              } else {
                u = e[f];
              }
            }
            for (var o in u) {
              if (u.hasOwnProperty(o)) {
                if (t ? t(o, u) : o[0] === "$") {
                  continue;
                }
                var s = u[o];
                if (Array.isArray(s)) {
                  var l = 0;
                  d.traversingIndexStack.push(l);
                  while (l < s.length) {
                    n(s[l], u, o, l);
                    l = d.updateTraversingIndex(+1);
                  }
                  d.traversingIndexStack.pop();
                } else {
                  n(s, u, o);
                }
              }
            }
          }
          if (a) {
            a(u, e, f, i);
          }
        }
        n(u, null);
      }
      u.exports = {
        traverse: function u(e, r) {
          var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { asNodes: false };
          if (!Array.isArray(r)) {
            r = [r];
          }
          r = r.filter(function (u) {
            if (typeof u.shouldRun !== "function") {
              return true;
            }
            return u.shouldRun(e);
          });
          d.initRegistry();
          r.forEach(function (u) {
            if (typeof u.init === "function") {
              u.init(e);
            }
          });
          function n(u, e, r, a) {
            var t = d.getForNode(e);
            var n = d.getForNode(u, t, r, a);
            return n;
          }
          a(e, {
            pre: function u(e, d, a, f) {
              var i = void 0;
              if (!t.asNodes) {
                i = n(e, d, a, f);
              }
              var c = true;
              var o = false;
              var s = undefined;
              try {
                for (var l = r[Symbol.iterator](), b; !(c = (b = l.next()).done); c = true) {
                  var p = b.value;
                  if (typeof p["*"] === "function") {
                    if (i) {
                      if (!i.isRemoved()) {
                        var h = p["*"](i);
                        if (h === false) {
                          return false;
                        }
                      }
                    } else {
                      p["*"](e, d, a, f);
                    }
                  }
                  var v = void 0;
                  if (typeof p[e.type] === "function") {
                    v = p[e.type];
                  } else if (typeof p[e.type] === "object" && typeof p[e.type].pre === "function") {
                    v = p[e.type].pre;
                  }
                  if (v) {
                    if (i) {
                      if (!i.isRemoved()) {
                        var g = v.call(p, i);
                        if (g === false) {
                          return false;
                        }
                      }
                    } else {
                      v.call(p, e, d, a, f);
                    }
                  }
                }
              } catch (y) {
                o = true;
                s = y;
              } finally {
                try {
                  if (!c && l.return) {
                    l.return();
                  }
                } finally {
                  if (o) {
                    throw s;
                  }
                }
              }
            },
            post: function u(e, d, a, f) {
              if (!e) {
                return;
              }
              var i = void 0;
              if (!t.asNodes) {
                i = n(e, d, a, f);
              }
              var c = true;
              var o = false;
              var s = undefined;
              try {
                for (var l = r[Symbol.iterator](), b; !(c = (b = l.next()).done); c = true) {
                  var p = b.value;
                  var h = void 0;
                  if (typeof p[e.type] === "object" && typeof p[e.type].post === "function") {
                    h = p[e.type].post;
                  }
                  if (h) {
                    if (i) {
                      if (!i.isRemoved()) {
                        var v = h.call(p, i);
                        if (v === false) {
                          return false;
                        }
                      }
                    } else {
                      h.call(p, e, d, a, f);
                    }
                  }
                }
              } catch (g) {
                o = true;
                s = g;
              } finally {
                try {
                  if (!c && l.return) {
                    l.return();
                  }
                } finally {
                  if (o) {
                    throw s;
                  }
                }
              }
            },
            skipProperty: function u(e) {
              return e === "loc";
            },
          });
        },
      };
    },
    27762: (u) => {
      var e = (function () {
        function u(u, e) {
          for (var r = 0; r < e.length; r++) {
            var d = e[r];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(u, d.key, d);
          }
        }
        return function (e, r, d) {
          if (r) u(e.prototype, r);
          if (d) u(e, d);
          return e;
        };
      })();
      function r(u, e) {
        if (!(u instanceof e)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var d = "expressions";
      var a = "expression";
      var t = (function () {
        function u(e) {
          var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var t = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          r(this, u);
          this.node = e;
          this.parentPath = d;
          this.parent = d ? d.node : null;
          this.property = a;
          this.index = t;
        }
        e(
          u,
          [
            {
              key: "_enforceProp",
              value: function u(e) {
                if (!this.node.hasOwnProperty(e)) {
                  throw new Error("Node of type " + this.node.type + " doesn't have \"" + e + '" collection.');
                }
              },
            },
            {
              key: "setChild",
              value: function e(r) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var f = void 0;
                if (t != null) {
                  if (!n) {
                    n = d;
                  }
                  this._enforceProp(n);
                  this.node[n][t] = r;
                  f = u.getForNode(r, this, n, t);
                } else {
                  if (!n) {
                    n = a;
                  }
                  this._enforceProp(n);
                  this.node[n] = r;
                  f = u.getForNode(r, this, n, null);
                }
                return f;
              },
            },
            {
              key: "appendChild",
              value: function u(e) {
                var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                if (!r) {
                  r = d;
                }
                this._enforceProp(r);
                var a = this.node[r].length;
                return this.setChild(e, a, r);
              },
            },
            {
              key: "insertChildAt",
              value: function e(r, a) {
                var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : d;
                this._enforceProp(t);
                this.node[t].splice(a, 0, r);
                if (a <= u.getTraversingIndex()) {
                  u.updateTraversingIndex(+1);
                }
                this._rebuildIndex(this.node, t);
              },
            },
            {
              key: "remove",
              value: function e() {
                if (this.isRemoved()) {
                  return;
                }
                u.registry.delete(this.node);
                this.node = null;
                if (!this.parent) {
                  return;
                }
                if (this.index !== null) {
                  this.parent[this.property].splice(this.index, 1);
                  if (this.index <= u.getTraversingIndex()) {
                    u.updateTraversingIndex(-1);
                  }
                  this._rebuildIndex(this.parent, this.property);
                  this.index = null;
                  this.property = null;
                  return;
                }
                delete this.parent[this.property];
                this.property = null;
              },
            },
            {
              key: "_rebuildIndex",
              value: function e(r, d) {
                var a = u.getForNode(r);
                for (var t = 0; t < r[d].length; t++) {
                  var n = u.getForNode(r[d][t], a, d, t);
                  n.index = t;
                }
              },
            },
            {
              key: "isRemoved",
              value: function u() {
                return this.node === null;
              },
            },
            {
              key: "replace",
              value: function e(r) {
                u.registry.delete(this.node);
                this.node = r;
                if (!this.parent) {
                  return null;
                }
                if (this.index !== null) {
                  this.parent[this.property][this.index] = r;
                } else {
                  this.parent[this.property] = r;
                }
                return u.getForNode(r, this.parentPath, this.property, this.index);
              },
            },
            {
              key: "update",
              value: function u(e) {
                Object.assign(this.node, e);
              },
            },
            {
              key: "getParent",
              value: function u() {
                return this.parentPath;
              },
            },
            {
              key: "getChild",
              value: function e() {
                var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                if (this.node.expressions) {
                  return u.getForNode(this.node.expressions[r], this, d, r);
                } else if (this.node.expression && r == 0) {
                  return u.getForNode(this.node.expression, this, a);
                }
                return null;
              },
            },
            {
              key: "hasEqualSource",
              value: function u(e) {
                return JSON.stringify(this.node, n) === JSON.stringify(e.node, n);
              },
            },
            {
              key: "jsonEncode",
              value: function u() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                  r = e.format,
                  d = e.useLoc;
                return JSON.stringify(this.node, d ? null : n, r);
              },
            },
            {
              key: "getPreviousSibling",
              value: function e() {
                if (!this.parent || this.index == null) {
                  return null;
                }
                return u.getForNode(this.parent[this.property][this.index - 1], u.getForNode(this.parent), this.property, this.index - 1);
              },
            },
            {
              key: "getNextSibling",
              value: function e() {
                if (!this.parent || this.index == null) {
                  return null;
                }
                return u.getForNode(this.parent[this.property][this.index + 1], u.getForNode(this.parent), this.property, this.index + 1);
              },
            },
          ],
          [
            {
              key: "getForNode",
              value: function e(r) {
                var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var t = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
                if (!r) {
                  return null;
                }
                if (!u.registry.has(r)) {
                  u.registry.set(r, new u(r, d, a, t == -1 ? null : t));
                }
                var n = u.registry.get(r);
                if (d !== null) {
                  n.parentPath = d;
                  n.parent = n.parentPath.node;
                }
                if (a !== null) {
                  n.property = a;
                }
                if (t >= 0) {
                  n.index = t;
                }
                return n;
              },
            },
            {
              key: "initRegistry",
              value: function e() {
                if (!u.registry) {
                  u.registry = new Map();
                }
                u.registry.clear();
              },
            },
            {
              key: "updateTraversingIndex",
              value: function e(r) {
                return (u.traversingIndexStack[u.traversingIndexStack.length - 1] += r);
              },
            },
            {
              key: "getTraversingIndex",
              value: function e() {
                return u.traversingIndexStack[u.traversingIndexStack.length - 1];
              },
            },
          ]
        );
        return u;
      })();
      t.initRegistry();
      t.traversingIndexStack = [];
      function n(u, e) {
        if (u === "loc") {
          return undefined;
        }
        return e;
      }
      u.exports = t;
    },
    60689: (u) => {
      u.exports = function u(e) {
        if (e === null || typeof e !== "object") {
          return e;
        }
        var r = void 0;
        if (Array.isArray(e)) {
          r = [];
        } else {
          r = {};
        }
        for (var d in e) {
          r[d] = u(e[d]);
        }
        return r;
      };
    },
    16262: (u, e, r) => {
      u.exports = r(51474);
    },
  },
]);
