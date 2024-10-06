/*! For license information please see 7178.5f3dd740449b44efad2d.js.LICENSE.txt */
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7178],
  {
    96874: (r) => {
      function e(r, e, t) {
        switch (t.length) {
          case 0:
            return r.call(e);
          case 1:
            return r.call(e, t[0]);
          case 2:
            return r.call(e, t[0], t[1]);
          case 3:
            return r.call(e, t[0], t[1], t[2]);
        }
        return r.apply(e, t);
      }
      r.exports = e;
    },
    77412: (r) => {
      function e(r, e) {
        var t = -1,
          n = r == null ? 0 : r.length;
        while (++t < n) {
          if (e(r[t], t, r) === false) {
            break;
          }
        }
        return r;
      }
      r.exports = e;
    },
    34865: (r, e, t) => {
      var n = t(89465),
        o = t(77813);
      var a = Object.prototype;
      var u = a.hasOwnProperty;
      function c(r, e, t) {
        var a = r[e];
        if (!(u.call(r, e) && o(a, t)) || (t === undefined && !(e in r))) {
          n(r, e, t);
        }
      }
      r.exports = c;
    },
    44037: (r, e, t) => {
      var n = t(98363),
        o = t(3674);
      function a(r, e) {
        return r && n(e, o(e), r);
      }
      r.exports = a;
    },
    63886: (r, e, t) => {
      var n = t(98363),
        o = t(81704);
      function a(r, e) {
        return r && n(e, o(e), r);
      }
      r.exports = a;
    },
    89465: (r, e, t) => {
      var n = t(38777);
      function o(r, e, t) {
        if (e == "__proto__" && n) {
          n(r, e, { configurable: true, enumerable: true, value: t, writable: true });
        } else {
          r[e] = t;
        }
      }
      r.exports = o;
    },
    85990: (r, e, t) => {
      var n = t(46384),
        o = t(77412),
        a = t(34865),
        u = t(44037),
        c = t(63886),
        i = t(64626),
        f = t(278),
        s = t(18805),
        l = t(78133),
        v = t(58234),
        p = t(46904),
        b = t(64160),
        y = t(43824),
        j = t(29148),
        x = t(38517),
        d = t(1469),
        h = t(44144),
        w = t(56688),
        g = t(13218),
        O = t(72928),
        _ = t(3674),
        A = t(81704);
      var S = 1,
        m = 2,
        P = 4;
      var k = "[object Arguments]",
        E = "[object Array]",
        I = "[object Boolean]",
        U = "[object Date]",
        F = "[object Error]",
        C = "[object Function]",
        D = "[object GeneratorFunction]",
        M = "[object Map]",
        R = "[object Number]",
        B = "[object Object]",
        L = "[object RegExp]",
        N = "[object Set]",
        T = "[object String]",
        $ = "[object Symbol]",
        V = "[object WeakMap]";
      var W = "[object ArrayBuffer]",
        z = "[object DataView]",
        G = "[object Float32Array]",
        Y = "[object Float64Array]",
        q = "[object Int8Array]",
        H = "[object Int16Array]",
        J = "[object Int32Array]",
        K = "[object Uint8Array]",
        Q = "[object Uint8ClampedArray]",
        X = "[object Uint16Array]",
        Z = "[object Uint32Array]";
      var rr = {};
      rr[k] =
        rr[E] =
        rr[W] =
        rr[z] =
        rr[I] =
        rr[U] =
        rr[G] =
        rr[Y] =
        rr[q] =
        rr[H] =
        rr[J] =
        rr[M] =
        rr[R] =
        rr[B] =
        rr[L] =
        rr[N] =
        rr[T] =
        rr[$] =
        rr[K] =
        rr[Q] =
        rr[X] =
        rr[Z] =
          true;
      rr[F] = rr[C] = rr[V] = false;
      function er(r, e, t, E, I, U) {
        var F,
          M = e & S,
          R = e & m,
          L = e & P;
        if (t) {
          F = I ? t(r, E, I, U) : t(r);
        }
        if (F !== undefined) {
          return F;
        }
        if (!g(r)) {
          return r;
        }
        var N = d(r);
        if (N) {
          F = y(r);
          if (!M) {
            return f(r, F);
          }
        } else {
          var T = b(r),
            $ = T == C || T == D;
          if (h(r)) {
            return i(r, M);
          }
          if (T == B || T == k || ($ && !I)) {
            F = R || $ ? {} : x(r);
            if (!M) {
              return R ? l(r, c(F, r)) : s(r, u(F, r));
            }
          } else {
            if (!rr[T]) {
              return I ? r : {};
            }
            F = j(r, T, M);
          }
        }
        U || (U = new n());
        var V = U.get(r);
        if (V) {
          return V;
        }
        U.set(r, F);
        if (O(r)) {
          r.forEach(function (n) {
            F.add(er(n, e, t, n, r, U));
          });
        } else if (w(r)) {
          r.forEach(function (n, o) {
            F.set(o, er(n, e, t, o, r, U));
          });
        }
        var W = L ? (R ? p : v) : R ? A : _;
        var z = N ? undefined : W(r);
        o(z || r, function (n, o) {
          if (z) {
            o = n;
            n = r[o];
          }
          a(F, o, er(n, e, t, o, r, U));
        });
        return F;
      }
      r.exports = er;
    },
    3118: (r, e, t) => {
      var n = t(13218);
      var o = Object.create;
      var a = (function () {
        function r() {}
        return function (e) {
          if (!n(e)) {
            return {};
          }
          if (o) {
            return o(e);
          }
          r.prototype = e;
          var t = new r();
          r.prototype = undefined;
          return t;
        };
      })();
      r.exports = a;
    },
    21078: (r, e, t) => {
      var n = t(62488),
        o = t(37285);
      function a(r, e, t, u, c) {
        var i = -1,
          f = r.length;
        t || (t = o);
        c || (c = []);
        while (++i < f) {
          var s = r[i];
          if (e > 0 && t(s)) {
            if (e > 1) {
              a(s, e - 1, t, u, c);
            } else {
              n(c, s);
            }
          } else if (!u) {
            c[c.length] = s;
          }
        }
        return c;
      }
      r.exports = a;
    },
    78565: (r) => {
      var e = Object.prototype;
      var t = e.hasOwnProperty;
      function n(r, e) {
        return r != null && t.call(r, e);
      }
      r.exports = n;
    },
    13: (r) => {
      function e(r, e) {
        return r != null && e in Object(r);
      }
      r.exports = e;
    },
    25588: (r, e, t) => {
      var n = t(64160),
        o = t(37005);
      var a = "[object Map]";
      function u(r) {
        return o(r) && n(r) == a;
      }
      r.exports = u;
    },
    29221: (r, e, t) => {
      var n = t(64160),
        o = t(37005);
      var a = "[object Set]";
      function u(r) {
        return o(r) && n(r) == a;
      }
      r.exports = u;
    },
    35014: (r, e, t) => {
      var n = t(13218),
        o = t(25726),
        a = t(33498);
      var u = Object.prototype;
      var c = u.hasOwnProperty;
      function i(r) {
        if (!n(r)) {
          return a(r);
        }
        var e = o(r),
          t = [];
        for (var u in r) {
          if (!(u == "constructor" && (e || !c.call(r, u)))) {
            t.push(u);
          }
        }
        return t;
      }
      r.exports = i;
    },
    10611: (r, e, t) => {
      var n = t(34865),
        o = t(71811),
        a = t(65776),
        u = t(13218),
        c = t(40327);
      function i(r, e, t, i) {
        if (!u(r)) {
          return r;
        }
        e = o(e, r);
        var f = -1,
          s = e.length,
          l = s - 1,
          v = r;
        while (v != null && ++f < s) {
          var p = c(e[f]),
            b = t;
          if (p === "__proto__" || p === "constructor" || p === "prototype") {
            return r;
          }
          if (f != l) {
            var y = v[p];
            b = i ? i(y, p, v) : undefined;
            if (b === undefined) {
              b = u(y) ? y : a(e[f + 1]) ? [] : {};
            }
          }
          n(v, p, b);
          v = v[p];
        }
        return r;
      }
      r.exports = i;
    },
    56560: (r, e, t) => {
      var n = t(75703),
        o = t(38777),
        a = t(6557);
      var u = !o
        ? a
        : function (r, e) {
            return o(r, "toString", { configurable: true, enumerable: false, value: n(e), writable: true });
          };
      r.exports = u;
    },
    14259: (r) => {
      function e(r, e, t) {
        var n = -1,
          o = r.length;
        if (e < 0) {
          e = -e > o ? 0 : o + e;
        }
        t = t > o ? o : t;
        if (t < 0) {
          t += o;
        }
        o = e > t ? 0 : (t - e) >>> 0;
        e >>>= 0;
        var a = Array(o);
        while (++n < o) {
          a[n] = r[n + e];
        }
        return a;
      }
      r.exports = e;
    },
    57406: (r, e, t) => {
      var n = t(71811),
        o = t(10928),
        a = t(40292),
        u = t(40327);
      function c(r, e) {
        e = n(e, r);
        r = a(r, e);
        return r == null || delete r[u(o(e))];
      }
      r.exports = c;
    },
    74318: (r, e, t) => {
      var n = t(11149);
      function o(r) {
        var e = new r.constructor(r.byteLength);
        new n(e).set(new n(r));
        return e;
      }
      r.exports = o;
    },
    64626: (r, e, t) => {
      r = t.nmd(r);
      var n = t(55639);
      var o = true && e && !e.nodeType && e;
      var a = o && "object" == "object" && r && !r.nodeType && r;
      var u = a && a.exports === o;
      var c = u ? n.Buffer : undefined,
        i = c ? c.allocUnsafe : undefined;
      function f(r, e) {
        if (e) {
          return r.slice();
        }
        var t = r.length,
          n = i ? i(t) : new r.constructor(t);
        r.copy(n);
        return n;
      }
      r.exports = f;
    },
    57157: (r, e, t) => {
      var n = t(74318);
      function o(r, e) {
        var t = e ? n(r.buffer) : r.buffer;
        return new r.constructor(t, r.byteOffset, r.byteLength);
      }
      r.exports = o;
    },
    93147: (r) => {
      var e = /\w*$/;
      function t(r) {
        var t = new r.constructor(r.source, e.exec(r));
        t.lastIndex = r.lastIndex;
        return t;
      }
      r.exports = t;
    },
    40419: (r, e, t) => {
      var n = t(62705);
      var o = n ? n.prototype : undefined,
        a = o ? o.valueOf : undefined;
      function u(r) {
        return a ? Object(a.call(r)) : {};
      }
      r.exports = u;
    },
    77133: (r, e, t) => {
      var n = t(74318);
      function o(r, e) {
        var t = e ? n(r.buffer) : r.buffer;
        return new r.constructor(t, r.byteOffset, r.length);
      }
      r.exports = o;
    },
    278: (r) => {
      function e(r, e) {
        var t = -1,
          n = r.length;
        e || (e = Array(n));
        while (++t < n) {
          e[t] = r[t];
        }
        return e;
      }
      r.exports = e;
    },
    98363: (r, e, t) => {
      var n = t(34865),
        o = t(89465);
      function a(r, e, t, a) {
        var u = !t;
        t || (t = {});
        var c = -1,
          i = e.length;
        while (++c < i) {
          var f = e[c];
          var s = a ? a(t[f], r[f], f, t, r) : undefined;
          if (s === undefined) {
            s = r[f];
          }
          if (u) {
            o(t, f, s);
          } else {
            n(t, f, s);
          }
        }
        return t;
      }
      r.exports = a;
    },
    18805: (r, e, t) => {
      var n = t(98363),
        o = t(99551);
      function a(r, e) {
        return n(r, o(r), e);
      }
      r.exports = a;
    },
    78133: (r, e, t) => {
      var n = t(98363),
        o = t(51442);
      function a(r, e) {
        return n(r, o(r), e);
      }
      r.exports = a;
    },
    60696: (r, e, t) => {
      var n = t(68630);
      function o(r) {
        return n(r) ? undefined : r;
      }
      r.exports = o;
    },
    38777: (r, e, t) => {
      var n = t(10852);
      var o = (function () {
        try {
          var r = n(Object, "defineProperty");
          r({}, "", {});
          return r;
        } catch (e) {}
      })();
      r.exports = o;
    },
    99021: (r, e, t) => {
      var n = t(85564),
        o = t(45357),
        a = t(30061);
      function u(r) {
        return a(o(r, undefined, n), r + "");
      }
      r.exports = u;
    },
    46904: (r, e, t) => {
      var n = t(68866),
        o = t(51442),
        a = t(81704);
      function u(r) {
        return n(r, a, o);
      }
      r.exports = u;
    },
    85924: (r, e, t) => {
      var n = t(5569);
      var o = n(Object.getPrototypeOf, Object);
      r.exports = o;
    },
    51442: (r, e, t) => {
      var n = t(62488),
        o = t(85924),
        a = t(99551),
        u = t(70479);
      var c = Object.getOwnPropertySymbols;
      var i = !c
        ? u
        : function (r) {
            var e = [];
            while (r) {
              n(e, a(r));
              r = o(r);
            }
            return e;
          };
      r.exports = i;
    },
    222: (r, e, t) => {
      var n = t(71811),
        o = t(35694),
        a = t(1469),
        u = t(65776),
        c = t(41780),
        i = t(40327);
      function f(r, e, t) {
        e = n(e, r);
        var f = -1,
          s = e.length,
          l = false;
        while (++f < s) {
          var v = i(e[f]);
          if (!(l = r != null && t(r, v))) {
            break;
          }
          r = r[v];
        }
        if (l || ++f != s) {
          return l;
        }
        s = r == null ? 0 : r.length;
        return !!s && c(s) && u(v, s) && (a(r) || o(r));
      }
      r.exports = f;
    },
    43824: (r) => {
      var e = Object.prototype;
      var t = e.hasOwnProperty;
      function n(r) {
        var e = r.length,
          n = new r.constructor(e);
        if (e && typeof r[0] == "string" && t.call(r, "index")) {
          n.index = r.index;
          n.input = r.input;
        }
        return n;
      }
      r.exports = n;
    },
    29148: (r, e, t) => {
      var n = t(74318),
        o = t(57157),
        a = t(93147),
        u = t(40419),
        c = t(77133);
      var i = "[object Boolean]",
        f = "[object Date]",
        s = "[object Map]",
        l = "[object Number]",
        v = "[object RegExp]",
        p = "[object Set]",
        b = "[object String]",
        y = "[object Symbol]";
      var j = "[object ArrayBuffer]",
        x = "[object DataView]",
        d = "[object Float32Array]",
        h = "[object Float64Array]",
        w = "[object Int8Array]",
        g = "[object Int16Array]",
        O = "[object Int32Array]",
        _ = "[object Uint8Array]",
        A = "[object Uint8ClampedArray]",
        S = "[object Uint16Array]",
        m = "[object Uint32Array]";
      function P(r, e, t) {
        var P = r.constructor;
        switch (e) {
          case j:
            return n(r);
          case i:
          case f:
            return new P(+r);
          case x:
            return o(r, t);
          case d:
          case h:
          case w:
          case g:
          case O:
          case _:
          case A:
          case S:
          case m:
            return c(r, t);
          case s:
            return new P();
          case l:
          case b:
            return new P(r);
          case v:
            return a(r);
          case p:
            return new P();
          case y:
            return u(r);
        }
      }
      r.exports = P;
    },
    38517: (r, e, t) => {
      var n = t(3118),
        o = t(85924),
        a = t(25726);
      function u(r) {
        return typeof r.constructor == "function" && !a(r) ? n(o(r)) : {};
      }
      r.exports = u;
    },
    37285: (r, e, t) => {
      var n = t(62705),
        o = t(35694),
        a = t(1469);
      var u = n ? n.isConcatSpreadable : undefined;
      function c(r) {
        return a(r) || o(r) || !!(u && r && r[u]);
      }
      r.exports = c;
    },
    33498: (r) => {
      function e(r) {
        var e = [];
        if (r != null) {
          for (var t in Object(r)) {
            e.push(t);
          }
        }
        return e;
      }
      r.exports = e;
    },
    45357: (r, e, t) => {
      var n = t(96874);
      var o = Math.max;
      function a(r, e, t) {
        e = o(e === undefined ? r.length - 1 : e, 0);
        return function () {
          var a = arguments,
            u = -1,
            c = o(a.length - e, 0),
            i = Array(c);
          while (++u < c) {
            i[u] = a[e + u];
          }
          u = -1;
          var f = Array(e + 1);
          while (++u < e) {
            f[u] = a[u];
          }
          f[e] = t(i);
          return n(r, this, f);
        };
      }
      r.exports = a;
    },
    40292: (r, e, t) => {
      var n = t(97786),
        o = t(14259);
      function a(r, e) {
        return e.length < 2 ? r : n(r, o(e, 0, -1));
      }
      r.exports = a;
    },
    30061: (r, e, t) => {
      var n = t(56560),
        o = t(21275);
      var a = o(n);
      r.exports = a;
    },
    21275: (r) => {
      var e = 800,
        t = 16;
      var n = Date.now;
      function o(r) {
        var o = 0,
          a = 0;
        return function () {
          var u = n(),
            c = t - (u - a);
          a = u;
          if (c > 0) {
            if (++o >= e) {
              return arguments[0];
            }
          } else {
            o = 0;
          }
          return r.apply(undefined, arguments);
        };
      }
      r.exports = o;
    },
    50361: (r, e, t) => {
      var n = t(85990);
      var o = 1,
        a = 4;
      function u(r) {
        return n(r, o | a);
      }
      r.exports = u;
    },
    75703: (r) => {
      function e(r) {
        return function () {
          return r;
        };
      }
      r.exports = e;
    },
    85564: (r, e, t) => {
      var n = t(21078);
      function o(r) {
        var e = r == null ? 0 : r.length;
        return e ? n(r, 1) : [];
      }
      r.exports = o;
    },
    18721: (r, e, t) => {
      var n = t(78565),
        o = t(222);
      function a(r, e) {
        return r != null && o(r, e, n);
      }
      r.exports = a;
    },
    79095: (r, e, t) => {
      var n = t(13),
        o = t(222);
      function a(r, e) {
        return r != null && o(r, e, n);
      }
      r.exports = a;
    },
    6557: (r) => {
      function e(r) {
        return r;
      }
      r.exports = e;
    },
    41609: (r, e, t) => {
      var n = t(280),
        o = t(64160),
        a = t(35694),
        u = t(1469),
        c = t(98612),
        i = t(44144),
        f = t(25726),
        s = t(36719);
      var l = "[object Map]",
        v = "[object Set]";
      var p = Object.prototype;
      var b = p.hasOwnProperty;
      function y(r) {
        if (r == null) {
          return true;
        }
        if (c(r) && (u(r) || typeof r == "string" || typeof r.splice == "function" || i(r) || s(r) || a(r))) {
          return !r.length;
        }
        var e = o(r);
        if (e == l || e == v) {
          return !r.size;
        }
        if (f(r)) {
          return !n(r).length;
        }
        for (var t in r) {
          if (b.call(r, t)) {
            return false;
          }
        }
        return true;
      }
      r.exports = y;
    },
    56688: (r, e, t) => {
      var n = t(25588),
        o = t(7518),
        a = t(31167);
      var u = a && a.isMap;
      var c = u ? o(u) : n;
      r.exports = c;
    },
    68630: (r, e, t) => {
      var n = t(44239),
        o = t(85924),
        a = t(37005);
      var u = "[object Object]";
      var c = Function.prototype,
        i = Object.prototype;
      var f = c.toString;
      var s = i.hasOwnProperty;
      var l = f.call(Object);
      function v(r) {
        if (!a(r) || n(r) != u) {
          return false;
        }
        var e = o(r);
        if (e === null) {
          return true;
        }
        var t = s.call(e, "constructor") && e.constructor;
        return typeof t == "function" && t instanceof t && f.call(t) == l;
      }
      r.exports = v;
    },
    72928: (r, e, t) => {
      var n = t(29221),
        o = t(7518),
        a = t(31167);
      var u = a && a.isSet;
      var c = u ? o(u) : n;
      r.exports = c;
    },
    81704: (r, e, t) => {
      var n = t(14636),
        o = t(35014),
        a = t(98612);
      function u(r) {
        return a(r) ? n(r, true) : o(r);
      }
      r.exports = u;
    },
    10928: (r) => {
      function e(r) {
        var e = r == null ? 0 : r.length;
        return e ? r[e - 1] : undefined;
      }
      r.exports = e;
    },
    57557: (r, e, t) => {
      var n = t(29932),
        o = t(85990),
        a = t(57406),
        u = t(71811),
        c = t(98363),
        i = t(60696),
        f = t(99021),
        s = t(46904);
      var l = 1,
        v = 2,
        p = 4;
      var b = f(function (r, e) {
        var t = {};
        if (r == null) {
          return t;
        }
        var f = false;
        e = n(e, function (e) {
          e = u(e, r);
          f || (f = e.length > 1);
          return e;
        });
        c(r, s(r), t);
        if (f) {
          t = o(t, l | v | p, i);
        }
        var b = e.length;
        while (b--) {
          a(t, e[b]);
        }
        return t;
      });
      r.exports = b;
    },
    36968: (r, e, t) => {
      var n = t(10611);
      function o(r, e, t) {
        return r == null ? r : n(r, e, t);
      }
      r.exports = o;
    },
    30084: (r, e, t) => {
      var n = t(29932),
        o = t(278),
        a = t(1469),
        u = t(33448),
        c = t(55514),
        i = t(40327),
        f = t(79833);
      function s(r) {
        if (a(r)) {
          return n(r, i);
        }
        return u(r) ? [r] : o(c(f(r)));
      }
      r.exports = s;
    },
    75251: (r, e, t) => {
      "use strict";
      var n = t(28416),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        u = Object.prototype.hasOwnProperty,
        c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = { key: !0, ref: !0, __self: !0, __source: !0 };
      function f(r, e, t) {
        var n,
          a = {},
          f = null,
          s = null;
        void 0 !== t && (f = "" + t);
        void 0 !== e.key && (f = "" + e.key);
        void 0 !== e.ref && (s = e.ref);
        for (n in e) u.call(e, n) && !i.hasOwnProperty(n) && (a[n] = e[n]);
        if (r && r.defaultProps) for (n in ((e = r.defaultProps), e)) void 0 === a[n] && (a[n] = e[n]);
        return { $$typeof: o, type: r, key: f, ref: s, props: a, _owner: c.current };
      }
      e.Fragment = a;
      e.jsx = f;
      e.jsxs = f;
    },
    85893: (r, e, t) => {
      "use strict";
      if (true) {
        r.exports = t(75251);
      } else {
      }
    },
  },
]);
