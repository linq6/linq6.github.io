var _JUPYTERLAB;
(() => {
  "use strict";
  var e,
    r,
    t,
    a,
    n,
    o,
    i,
    u,
    l,
    f,
    d,
    s,
    c,
    p,
    b,
    h,
    m,
    g,
    v,
    y,
    j,
    w,
    P,
    S,
    k,
    E = {
      2345: (e, r, t) => {
        var a = {
            "./index": () => Promise.all([t.e(988), t.e(693), t.e(262), t.e(462), t.e(446)]).then(() => () => t(1446)),
            "./extension": () => Promise.all([t.e(988), t.e(693), t.e(262), t.e(462), t.e(446)]).then(() => () => t(1446)),
          },
          n = (e, r) => (
            (t.R = r),
            (r = t.o(a, e)
              ? a[e]()
              : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.');
                })),
            (t.R = void 0),
            r
          ),
          o = (e, r) => {
            if (t.S) {
              var a = "default",
                n = t.S[a];
              if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return (t.S[a] = e), t.I(a, r);
            }
          };
        t.d(r, { get: () => n, init: () => o });
      },
    },
    _ = {};
  function x(e) {
    var r = _[e];
    if (void 0 !== r) return r.exports;
    var t = (_[e] = { id: e, loaded: !1, exports: {} });
    return E[e].call(t.exports, t, t.exports, x), (t.loaded = !0), t.exports;
  }
  (x.m = E),
    (x.c = _),
    (x.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return x.d(r, { a: r }), r;
    }),
    (x.d = (e, r) => {
      for (var t in r) x.o(r, t) && !x.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (x.f = {}),
    (x.e = (e) => Promise.all(Object.keys(x.f).reduce((r, t) => (x.f[t](e, r), r), []))),
    (x.u = (e) =>
      (869 === e ? "@jupyter-widgets/controls" : e) +
      "." +
      {
        39: "f95d17ff2501dcd0834e",
        230: "96089f531e24e2edddee",
        262: "2c72380f4c05d137dd4f",
        327: "8166aeb81cf1531ca240",
        420: "063e2ee9f71033206b1f",
        439: "33696bc45fbd403becbb",
        446: "bf169bd3821a9ba1aa62",
        462: "af28c49649f5aaf02397",
        586: "5a62b313f9ec1d9df348",
        647: "f4f9578285e357c95be3",
        651: "fe40a967a60b543cf15c",
        693: "c7bbab5747959b7634d8",
        701: "043aefe0b66133629348",
        722: "3fefeac9cae358348cbc",
        727: "2abc0b27bd0932fb5f81",
        869: "c27c04396133670136bd",
        898: "4051a8b212a0f4c89d60",
        988: "e69a92b2b3cb5b7dc163",
      }[e] +
      ".js?v=" +
      {
        39: "f95d17ff2501dcd0834e",
        230: "96089f531e24e2edddee",
        262: "2c72380f4c05d137dd4f",
        327: "8166aeb81cf1531ca240",
        420: "063e2ee9f71033206b1f",
        439: "33696bc45fbd403becbb",
        446: "bf169bd3821a9ba1aa62",
        462: "af28c49649f5aaf02397",
        586: "5a62b313f9ec1d9df348",
        647: "f4f9578285e357c95be3",
        651: "fe40a967a60b543cf15c",
        693: "c7bbab5747959b7634d8",
        701: "043aefe0b66133629348",
        722: "3fefeac9cae358348cbc",
        727: "2abc0b27bd0932fb5f81",
        869: "c27c04396133670136bd",
        898: "4051a8b212a0f4c89d60",
        988: "e69a92b2b3cb5b7dc163",
      }[e]),
    (x.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (x.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (e = {}),
    (r = "@jupyter-widgets/jupyterlab-manager:"),
    (x.l = (t, a, n, o) => {
      if (e[t]) e[t].push(a);
      else {
        var i, u;
        if (void 0 !== n)
          for (var l = document.getElementsByTagName("script"), f = 0; f < l.length; f++) {
            var d = l[f];
            if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == r + n) {
              i = d;
              break;
            }
          }
        i ||
          ((u = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          x.nc && i.setAttribute("nonce", x.nc),
          i.setAttribute("data-webpack", r + n),
          (i.src = t)),
          (e[t] = [a]);
        var s = (r, a) => {
            (i.onerror = i.onload = null), clearTimeout(c);
            var n = e[t];
            if ((delete e[t], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e) => e(a)), r)) return r(a);
          },
          c = setTimeout(s.bind(null, void 0, { type: "timeout", target: i }), 12e4);
        (i.onerror = s.bind(null, i.onerror)), (i.onload = s.bind(null, i.onload)), u && document.head.appendChild(i);
      }
    }),
    (x.r = (e) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (x.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      x.S = {};
      var e = {},
        r = {};
      x.I = (t, a) => {
        a || (a = []);
        var n = r[t];
        if ((n || (n = r[t] = {}), !(a.indexOf(n) >= 0))) {
          if ((a.push(n), e[t])) return e[t];
          x.o(x.S, t) || (x.S[t] = {});
          var o = x.S[t],
            i = "@jupyter-widgets/jupyterlab-manager",
            u = (e, r, t, a) => {
              var n = (o[e] = o[e] || {}),
                u = n[r];
              (!u || (!u.loaded && (!a != !u.eager ? a : i > u.from))) && (n[r] = { get: t, from: i, eager: !!a });
            },
            l = [];
          return (
            "default" === t &&
              (u("@jupyter-widgets/base-manager", "1.0.11", () => Promise.all([x.e(439), x.e(988), x.e(262), x.e(327)]).then(() => () => x(6084))),
              u("@jupyter-widgets/base", "6.0.10", () => Promise.all([x.e(898), x.e(693), x.e(230), x.e(262), x.e(647)]).then(() => () => x(909))),
              u("@jupyter-widgets/controls", "5.0.11", () =>
                Promise.all([x.e(727), x.e(988), x.e(693), x.e(230), x.e(586), x.e(462), x.e(701)]).then(() => () => x(3586))
              ),
              u("@jupyter-widgets/jupyterlab-manager", "5.0.13", () =>
                Promise.all([x.e(988), x.e(693), x.e(262), x.e(462), x.e(446)]).then(() => () => x(1446))
              ),
              u("@jupyter-widgets/output", "6.0.10", () => Promise.all([x.e(988), x.e(420)]).then(() => () => x(4420))),
              u("jquery", "3.7.1", () => x.e(651).then(() => () => x(4651))),
              u("semver", "7.6.2", () => x.e(722).then(() => () => x(2722)))),
            (e[t] = l.length ? Promise.all(l).then(() => (e[t] = 1)) : 1)
          );
        }
      };
    })(),
    (() => {
      var e;
      x.g.importScripts && (e = x.g.location + "");
      var r = x.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var t = r.getElementsByTagName("script");
        if (t.length) for (var a = t.length - 1; a > -1 && (!e || !/^http(s?):/.test(e)); ) e = t[a--].src;
      }
      if (!e) throw new Error("Automatic publicPath is not supported in this browser");
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (x.p = e);
    })(),
    (t = (e) => {
      var r = (e) => e.split(".").map((e) => (+e == e ? +e : e)),
        t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
        a = t[1] ? r(t[1]) : [];
      return t[2] && (a.length++, a.push.apply(a, r(t[2]))), t[3] && (a.push([]), a.push.apply(a, r(t[3]))), a;
    }),
    (a = (e, r) => {
      (e = t(e)), (r = t(r));
      for (var a = 0; ; ) {
        if (a >= e.length) return a < r.length && "u" != (typeof r[a])[0];
        var n = e[a],
          o = (typeof n)[0];
        if (a >= r.length) return "u" == o;
        var i = r[a],
          u = (typeof i)[0];
        if (o != u) return ("o" == o && "n" == u) || "s" == u || "u" == o;
        if ("o" != o && "u" != o && n != i) return n < i;
        a++;
      }
    }),
    (n = (e) => {
      var r = e[0],
        t = "";
      if (1 === e.length) return "*";
      if (r + 0.5) {
        t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
        for (var a = 1, o = 1; o < e.length; o++) a--, (t += "u" == (typeof (u = e[o]))[0] ? "-" : (a > 0 ? "." : "") + ((a = 2), u));
        return t;
      }
      var i = [];
      for (o = 1; o < e.length; o++) {
        var u = e[o];
        i.push(0 === u ? "not(" + l() + ")" : 1 === u ? "(" + l() + " || " + l() + ")" : 2 === u ? i.pop() + " " + i.pop() : n(u));
      }
      return l();
      function l() {
        return i.pop().replace(/^\((.+)\)$/, "$1");
      }
    }),
    (o = (e, r) => {
      if (0 in e) {
        r = t(r);
        var a = e[0],
          n = a < 0;
        n && (a = -a - 1);
        for (var i = 0, u = 1, l = !0; ; u++, i++) {
          var f,
            d,
            s = u < e.length ? (typeof e[u])[0] : "";
          if (i >= r.length || "o" == (d = (typeof (f = r[i]))[0])) return !l || ("u" == s ? u > a && !n : ("" == s) != n);
          if ("u" == d) {
            if (!l || "u" != s) return !1;
          } else if (l)
            if (s == d)
              if (u <= a) {
                if (f != e[u]) return !1;
              } else {
                if (n ? f > e[u] : f < e[u]) return !1;
                f != e[u] && (l = !1);
              }
            else if ("s" != s && "n" != s) {
              if (n || u <= a) return !1;
              (l = !1), u--;
            } else {
              if (u <= a || d < s != n) return !1;
              l = !1;
            }
          else "s" != s && "n" != s && ((l = !1), u--);
        }
      }
      var c = [],
        p = c.pop.bind(c);
      for (i = 1; i < e.length; i++) {
        var b = e[i];
        c.push(1 == b ? p() | p() : 2 == b ? p() & p() : b ? o(b, r) : !p());
      }
      return !!p();
    }),
    (i = (e, r) => {
      var t = x.S[e];
      if (!t || !x.o(t, r)) throw new Error("Shared module " + r + " doesn't exist in shared scope " + e);
      return t;
    }),
    (u = (e, r) => {
      var t = e[r];
      return (r = Object.keys(t).reduce((e, r) => (!e || a(e, r) ? r : e), 0)) && t[r];
    }),
    (l = (e, r) => {
      var t = e[r];
      return Object.keys(t).reduce((e, r) => (!e || (!t[e].loaded && a(e, r)) ? r : e), 0);
    }),
    (f = (e, r, t, a) =>
      "Unsatisfied version " + t + " from " + (t && e[r][t].from) + " of shared singleton module " + r + " (required " + n(a) + ")"),
    (d = (e, r, t, a) => {
      var n = l(e, t);
      return o(a, n) || p(f(e, t, n, a)), h(e[t][n]);
    }),
    (s = (e, r, t) => {
      var n = e[r];
      return (r = Object.keys(n).reduce((e, r) => (!o(t, r) || (e && !a(e, r)) ? e : r), 0)) && n[r];
    }),
    (c = (e, r, t, a) => {
      var o = e[t];
      return (
        "No satisfying version (" +
        n(a) +
        ") of shared module " +
        t +
        " found in shared scope " +
        r +
        ".\nAvailable versions: " +
        Object.keys(o)
          .map((e) => e + " from " + o[e].from)
          .join(", ")
      );
    }),
    (p = (e) => {
      "undefined" != typeof console && console.warn && console.warn(e);
    }),
    (b = (e, r, t, a) => {
      p(c(e, r, t, a));
    }),
    (h = (e) => ((e.loaded = 1), e.get())),
    (g = (m = (e) =>
      function (r, t, a, n) {
        var o = x.I(r);
        return o && o.then ? o.then(e.bind(e, r, x.S[r], t, a, n)) : e(r, x.S[r], t, a, n);
      })((e, r, t, a) => (r && x.o(r, t) ? h(u(r, t)) : a()))),
    (v = m((e, r, t, a) => (i(e, t), h(s(r, t, a) || b(r, e, t, a) || u(r, t))))),
    (y = m((e, r, t, a) => (i(e, t), d(r, 0, t, a)))),
    (j = m((e, r, t, a, n) => {
      var o = r && x.o(r, t) && s(r, t, a);
      return o ? h(o) : n();
    })),
    (w = {}),
    (P = {
      988: () =>
        j("default", "@jupyter-widgets/base", [1, 6, 0, 10], () =>
          Promise.all([x.e(898), x.e(693), x.e(230), x.e(262), x.e(647)]).then(() => () => x(909))
        ),
      5256: () => y("default", "@lumino/widgets", [1, 2, 3, 1, , "alpha", 0]),
      8596: () => j("default", "jquery", [1, 3, 1, 1], () => x.e(651).then(() => () => x(4651))),
      7262: () => y("default", "@lumino/coreutils", [1, 2, 0, 0]),
      4053: () => y("default", "@lumino/algorithm", [1, 2, 0, 0]),
      4602: () => y("default", "@lumino/signaling", [1, 2, 0, 0]),
      31: () => y("default", "@jupyterlab/notebook", [1, 4, 2, 4]),
      765: () => y("default", "@jupyterlab/settingregistry", [1, 4, 2, 4]),
      1130: () => y("default", "@jupyterlab/mainmenu", [1, 4, 2, 4]),
      2465: () => y("default", "@jupyterlab/services", [1, 7, 2, 4]),
      3087: () => v("default", "@jupyterlab/outputarea", [1, 4, 2, 4]),
      3431: () => y("default", "@jupyterlab/console", [1, 4, 2, 4]),
      4080: () => j("default", "@jupyter-widgets/output", [1, 6, 0, 10], () => x.e(39).then(() => () => x(4420))),
      4228: () => j("default", "@jupyter-widgets/base-manager", [1, 1, 0, 11], () => Promise.all([x.e(439), x.e(327)]).then(() => () => x(6084))),
      4585: () => j("default", "semver", [1, 7, 3, 5], () => x.e(722).then(() => () => x(2722))),
      6605: () => y("default", "@jupyterlab/translation", [1, 4, 2, 4]),
      7656: () => y("default", "@jupyterlab/rendermime", [1, 4, 2, 4]),
      8881: () => y("default", "@jupyterlab/logconsole", [1, 4, 2, 4]),
      9012: () => y("default", "@lumino/disposable", [1, 2, 0, 0]),
      6230: () => y("default", "@lumino/messaging", [1, 2, 0, 0]),
      2715: () => g("default", "jquery", () => x.e(651).then(() => () => x(4651))),
      6209: () => y("default", "@lumino/domutils", [1, 2, 0, 0]),
      3010: () =>
        j("default", "@jupyter-widgets/controls", [1, 5, 0, 11], () => Promise.all([x.e(727), x.e(230), x.e(586)]).then(() => () => x(3586))),
    }),
    (S = {
      230: [6230],
      262: [7262],
      446: [31, 765, 1130, 2465, 3087, 3431, 4080, 4228, 4585, 6605, 7656, 8881, 9012],
      462: [4053, 4602],
      586: [6209],
      647: [2715],
      693: [5256, 8596],
      869: [3010],
      988: [988],
    }),
    (k = {}),
    (x.f.consumes = (e, r) => {
      x.o(S, e) &&
        S[e].forEach((e) => {
          if (x.o(w, e)) return r.push(w[e]);
          if (!k[e]) {
            var t = (r) => {
              (w[e] = 0),
                (x.m[e] = (t) => {
                  delete x.c[e], (t.exports = r());
                });
            };
            k[e] = !0;
            var a = (r) => {
              delete w[e],
                (x.m[e] = (t) => {
                  throw (delete x.c[e], r);
                });
            };
            try {
              var n = P[e]();
              n.then ? r.push((w[e] = n.then(t).catch(a))) : t(n);
            } catch (e) {
              a(e);
            }
          }
        });
    }),
    (() => {
      x.b = document.baseURI || self.location.href;
      var e = { 250: 0 };
      x.f.j = (r, t) => {
        var a = x.o(e, r) ? e[r] : void 0;
        if (0 !== a)
          if (a) t.push(a[2]);
          else if (/^([24]62|230|693|869|988)$/.test(r)) e[r] = 0;
          else {
            var n = new Promise((t, n) => (a = e[r] = [t, n]));
            t.push((a[2] = n));
            var o = x.p + x.u(r),
              i = new Error();
            x.l(
              o,
              (t) => {
                if (x.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                  var n = t && ("load" === t.type ? "missing" : t.type),
                    o = t && t.target && t.target.src;
                  (i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + o + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = n),
                    (i.request = o),
                    a[1](i);
                }
              },
              "chunk-" + r,
              r
            );
          }
      };
      var r = (r, t) => {
          var a,
            n,
            [o, i, u] = t,
            l = 0;
          if (o.some((r) => 0 !== e[r])) {
            for (a in i) x.o(i, a) && (x.m[a] = i[a]);
            u && u(x);
          }
          for (r && r(t); l < o.length; l++) (n = o[l]), x.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
        },
        t = (self.webpackChunk_jupyter_widgets_jupyterlab_manager = self.webpackChunk_jupyter_widgets_jupyterlab_manager || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })(),
    (x.nc = void 0);
  var T = x(2345);
  (_JUPYTERLAB = void 0 === _JUPYTERLAB ? {} : _JUPYTERLAB)["@jupyter-widgets/jupyterlab-manager"] = T;
})();
