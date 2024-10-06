"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [6059],
  {
    36059: function (r, e) {
      var t =
        (this && this.__values) ||
        function (r) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            t = e && r[e],
            n = 0;
          if (t) return t.call(r);
          if (r && typeof r.length === "number")
            return {
              next: function () {
                if (r && n >= r.length) r = void 0;
                return { value: r && r[n++], done: !r };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var n =
        (this && this.__read) ||
        function (r, e) {
          var t = typeof Symbol === "function" && r[Symbol.iterator];
          if (!t) return r;
          var n = t.call(r),
            o,
            a = [],
            i;
          try {
            while ((e === void 0 || e-- > 0) && !(o = n.next()).done) a.push(o.value);
          } catch (l) {
            i = { error: l };
          } finally {
            try {
              if (o && !o.done && (t = n["return"])) t.call(n);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        };
      var o =
        (this && this.__spreadArray) ||
        function (r, e, t) {
          if (t || arguments.length === 2)
            for (var n = 0, o = e.length, a; n < o; n++) {
              if (a || !(n in e)) {
                if (!a) a = Array.prototype.slice.call(e, 0, n);
                a[n] = e[n];
              }
            }
          return r.concat(a || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.lookup =
        e.separateOptions =
        e.selectOptionsFromKeys =
        e.selectOptions =
        e.userOptions =
        e.defaultOptions =
        e.insert =
        e.copy =
        e.keys =
        e.makeArray =
        e.expandable =
        e.Expandable =
        e.OPTIONS =
        e.REMOVE =
        e.APPEND =
        e.isObject =
          void 0;
      var a = {}.constructor;
      function i(r) {
        return typeof r === "object" && r !== null && (r.constructor === a || r.constructor === l);
      }
      e.isObject = i;
      e.APPEND = "[+]";
      e.REMOVE = "[-]";
      e.OPTIONS = {
        invalidOption: "warn",
        optionError: function (r, t) {
          if (e.OPTIONS.invalidOption === "fatal") {
            throw new Error(r);
          }
          console.warn("MathJax: " + r);
        },
      };
      var l = (function () {
        function r() {}
        return r;
      })();
      e.Expandable = l;
      function f(r) {
        return Object.assign(Object.create(l.prototype), r);
      }
      e.expandable = f;
      function u(r) {
        return Array.isArray(r) ? r : [r];
      }
      e.makeArray = u;
      function c(r) {
        if (!r) {
          return [];
        }
        return Object.keys(r).concat(Object.getOwnPropertySymbols(r));
      }
      e.keys = c;
      function s(r) {
        var e, n;
        var o = {};
        try {
          for (var a = t(c(r)), u = a.next(); !u.done; u = a.next()) {
            var v = u.value;
            var p = Object.getOwnPropertyDescriptor(r, v);
            var O = p.value;
            if (Array.isArray(O)) {
              p.value = y([], O, false);
            } else if (i(O)) {
              p.value = s(O);
            }
            if (p.enumerable) {
              o[v] = p;
            }
          }
        } catch (d) {
          e = { error: d };
        } finally {
          try {
            if (u && !u.done && (n = a.return)) n.call(a);
          } finally {
            if (e) throw e.error;
          }
        }
        return Object.defineProperties(r.constructor === l ? f({}) : {}, o);
      }
      e.copy = s;
      function y(r, a, f) {
        var u, v;
        if (f === void 0) {
          f = true;
        }
        var p = function (t) {
          if (f && r[t] === undefined && r.constructor !== l) {
            if (typeof t === "symbol") {
              t = t.toString();
            }
            e.OPTIONS.optionError('Invalid option "'.concat(t, '" (no default value).'), t);
            return "continue";
          }
          var u = a[t],
            v = r[t];
          if (i(u) && v !== null && (typeof v === "object" || typeof v === "function")) {
            var p = c(u);
            if (
              Array.isArray(v) &&
              ((p.length === 1 && (p[0] === e.APPEND || p[0] === e.REMOVE) && Array.isArray(u[p[0]])) ||
                (p.length === 2 && p.sort().join(",") === e.APPEND + "," + e.REMOVE && Array.isArray(u[e.APPEND]) && Array.isArray(u[e.REMOVE])))
            ) {
              if (u[e.REMOVE]) {
                v = r[t] = v.filter(function (r) {
                  return u[e.REMOVE].indexOf(r) < 0;
                });
              }
              if (u[e.APPEND]) {
                r[t] = o(o([], n(v), false), n(u[e.APPEND]), false);
              }
            } else {
              y(v, u, f);
            }
          } else if (Array.isArray(u)) {
            r[t] = [];
            y(r[t], u, false);
          } else if (i(u)) {
            r[t] = s(u);
          } else {
            r[t] = u;
          }
        };
        try {
          for (var O = t(c(a)), d = O.next(); !d.done; d = O.next()) {
            var h = d.value;
            p(h);
          }
        } catch (b) {
          u = { error: b };
        } finally {
          try {
            if (d && !d.done && (v = O.return)) v.call(O);
          } finally {
            if (u) throw u.error;
          }
        }
        return r;
      }
      e.insert = y;
      function v(r) {
        var e = [];
        for (var t = 1; t < arguments.length; t++) {
          e[t - 1] = arguments[t];
        }
        e.forEach(function (e) {
          return y(r, e, false);
        });
        return r;
      }
      e.defaultOptions = v;
      function p(r) {
        var e = [];
        for (var t = 1; t < arguments.length; t++) {
          e[t - 1] = arguments[t];
        }
        e.forEach(function (e) {
          return y(r, e, true);
        });
        return r;
      }
      e.userOptions = p;
      function O(r) {
        var e, n;
        var o = [];
        for (var a = 1; a < arguments.length; a++) {
          o[a - 1] = arguments[a];
        }
        var i = {};
        try {
          for (var l = t(o), f = l.next(); !f.done; f = l.next()) {
            var u = f.value;
            if (r.hasOwnProperty(u)) {
              i[u] = r[u];
            }
          }
        } catch (c) {
          e = { error: c };
        } finally {
          try {
            if (f && !f.done && (n = l.return)) n.call(l);
          } finally {
            if (e) throw e.error;
          }
        }
        return i;
      }
      e.selectOptions = O;
      function d(r, e) {
        return O.apply(void 0, o([r], n(Object.keys(e)), false));
      }
      e.selectOptionsFromKeys = d;
      function h(r) {
        var e, n, o, a;
        var i = [];
        for (var l = 1; l < arguments.length; l++) {
          i[l - 1] = arguments[l];
        }
        var f = [];
        try {
          for (var u = t(i), c = u.next(); !c.done; c = u.next()) {
            var s = c.value;
            var y = {},
              v = {};
            try {
              for (var p = ((o = void 0), t(Object.keys(r || {}))), O = p.next(); !O.done; O = p.next()) {
                var d = O.value;
                (s[d] === undefined ? v : y)[d] = r[d];
              }
            } catch (h) {
              o = { error: h };
            } finally {
              try {
                if (O && !O.done && (a = p.return)) a.call(p);
              } finally {
                if (o) throw o.error;
              }
            }
            f.push(y);
            r = v;
          }
        } catch (b) {
          e = { error: b };
        } finally {
          try {
            if (c && !c.done && (n = u.return)) n.call(u);
          } finally {
            if (e) throw e.error;
          }
        }
        f.unshift(r);
        return f;
      }
      e.separateOptions = h;
      function b(r, e, t) {
        if (t === void 0) {
          t = null;
        }
        return e.hasOwnProperty(r) ? e[r] : t;
      }
      e.lookup = b;
    },
  },
]);
