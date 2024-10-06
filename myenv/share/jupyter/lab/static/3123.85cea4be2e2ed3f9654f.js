(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [3123, 4155],
  {
    39593: (e, t, r) => {
      "use strict";
      const n = r(34411);
      const s = Symbol("max");
      const i = Symbol("length");
      const o = Symbol("lengthCalculator");
      const a = Symbol("allowStale");
      const l = Symbol("maxAge");
      const c = Symbol("dispose");
      const u = Symbol("noDisposeOnSet");
      const h = Symbol("lruList");
      const f = Symbol("cache");
      const p = Symbol("updateAgeOnGet");
      const m = () => 1;
      class v {
        constructor(e) {
          if (typeof e === "number") e = { max: e };
          if (!e) e = {};
          if (e.max && (typeof e.max !== "number" || e.max < 0)) throw new TypeError("max must be a non-negative number");
          const t = (this[s] = e.max || Infinity);
          const r = e.length || m;
          this[o] = typeof r !== "function" ? m : r;
          this[a] = e.stale || false;
          if (e.maxAge && typeof e.maxAge !== "number") throw new TypeError("maxAge must be a number");
          this[l] = e.maxAge || 0;
          this[c] = e.dispose;
          this[u] = e.noDisposeOnSet || false;
          this[p] = e.updateAgeOnGet || false;
          this.reset();
        }
        set max(e) {
          if (typeof e !== "number" || e < 0) throw new TypeError("max must be a non-negative number");
          this[s] = e || Infinity;
          g(this);
        }
        get max() {
          return this[s];
        }
        set allowStale(e) {
          this[a] = !!e;
        }
        get allowStale() {
          return this[a];
        }
        set maxAge(e) {
          if (typeof e !== "number") throw new TypeError("maxAge must be a non-negative number");
          this[l] = e;
          g(this);
        }
        get maxAge() {
          return this[l];
        }
        set lengthCalculator(e) {
          if (typeof e !== "function") e = m;
          if (e !== this[o]) {
            this[o] = e;
            this[i] = 0;
            this[h].forEach((e) => {
              e.length = this[o](e.value, e.key);
              this[i] += e.length;
            });
          }
          g(this);
        }
        get lengthCalculator() {
          return this[o];
        }
        get length() {
          return this[i];
        }
        get itemCount() {
          return this[h].length;
        }
        rforEach(e, t) {
          t = t || this;
          for (let r = this[h].tail; r !== null; ) {
            const n = r.prev;
            N(this, e, r, t);
            r = n;
          }
        }
        forEach(e, t) {
          t = t || this;
          for (let r = this[h].head; r !== null; ) {
            const n = r.next;
            N(this, e, r, t);
            r = n;
          }
        }
        keys() {
          return this[h].toArray().map((e) => e.key);
        }
        values() {
          return this[h].toArray().map((e) => e.value);
        }
        reset() {
          if (this[c] && this[h] && this[h].length) {
            this[h].forEach((e) => this[c](e.key, e.value));
          }
          this[f] = new Map();
          this[h] = new n();
          this[i] = 0;
        }
        dump() {
          return this[h]
            .map((e) => (d(this, e) ? false : { k: e.key, v: e.value, e: e.now + (e.maxAge || 0) }))
            .toArray()
            .filter((e) => e);
        }
        dumpLru() {
          return this[h];
        }
        set(e, t, r) {
          r = r || this[l];
          if (r && typeof r !== "number") throw new TypeError("maxAge must be a number");
          const n = r ? Date.now() : 0;
          const a = this[o](t, e);
          if (this[f].has(e)) {
            if (a > this[s]) {
              y(this, this[f].get(e));
              return false;
            }
            const o = this[f].get(e);
            const l = o.value;
            if (this[c]) {
              if (!this[u]) this[c](e, l.value);
            }
            l.now = n;
            l.maxAge = r;
            l.value = t;
            this[i] += a - l.length;
            l.length = a;
            this.get(e);
            g(this);
            return true;
          }
          const p = new b(e, t, a, n, r);
          if (p.length > this[s]) {
            if (this[c]) this[c](e, t);
            return false;
          }
          this[i] += p.length;
          this[h].unshift(p);
          this[f].set(e, this[h].head);
          g(this);
          return true;
        }
        has(e) {
          if (!this[f].has(e)) return false;
          const t = this[f].get(e).value;
          return !d(this, t);
        }
        get(e) {
          return E(this, e, true);
        }
        peek(e) {
          return E(this, e, false);
        }
        pop() {
          const e = this[h].tail;
          if (!e) return null;
          y(this, e);
          return e.value;
        }
        del(e) {
          y(this, this[f].get(e));
        }
        load(e) {
          this.reset();
          const t = Date.now();
          for (let r = e.length - 1; r >= 0; r--) {
            const n = e[r];
            const s = n.e || 0;
            if (s === 0) this.set(n.k, n.v);
            else {
              const e = s - t;
              if (e > 0) {
                this.set(n.k, n.v, e);
              }
            }
          }
        }
        prune() {
          this[f].forEach((e, t) => E(this, t, false));
        }
      }
      const E = (e, t, r) => {
        const n = e[f].get(t);
        if (n) {
          const t = n.value;
          if (d(e, t)) {
            y(e, n);
            if (!e[a]) return undefined;
          } else {
            if (r) {
              if (e[p]) n.value.now = Date.now();
              e[h].unshiftNode(n);
            }
          }
          return t.value;
        }
      };
      const d = (e, t) => {
        if (!t || (!t.maxAge && !e[l])) return false;
        const r = Date.now() - t.now;
        return t.maxAge ? r > t.maxAge : e[l] && r > e[l];
      };
      const g = (e) => {
        if (e[i] > e[s]) {
          for (let t = e[h].tail; e[i] > e[s] && t !== null; ) {
            const r = t.prev;
            y(e, t);
            t = r;
          }
        }
      };
      const y = (e, t) => {
        if (t) {
          const r = t.value;
          if (e[c]) e[c](r.key, r.value);
          e[i] -= r.length;
          e[f].delete(r.key);
          e[h].removeNode(t);
        }
      };
      class b {
        constructor(e, t, r, n, s) {
          this.key = e;
          this.value = t;
          this.length = r;
          this.now = n;
          this.maxAge = s || 0;
        }
      }
      const N = (e, t, r, n) => {
        let s = r.value;
        if (d(e, s)) {
          y(e, r);
          if (!e[a]) s = undefined;
        }
        if (s) t.call(n, s.value, s.key, e);
      };
      e.exports = v;
    },
    34155: (e) => {
      var t = (e.exports = {});
      var r;
      var n;
      function s() {
        throw new Error("setTimeout has not been defined");
      }
      function i() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          if (typeof setTimeout === "function") {
            r = setTimeout;
          } else {
            r = s;
          }
        } catch (e) {
          r = s;
        }
        try {
          if (typeof clearTimeout === "function") {
            n = clearTimeout;
          } else {
            n = i;
          }
        } catch (e) {
          n = i;
        }
      })();
      function o(e) {
        if (r === setTimeout) {
          return setTimeout(e, 0);
        }
        if ((r === s || !r) && setTimeout) {
          r = setTimeout;
          return setTimeout(e, 0);
        }
        try {
          return r(e, 0);
        } catch (t) {
          try {
            return r.call(null, e, 0);
          } catch (t) {
            return r.call(this, e, 0);
          }
        }
      }
      function a(e) {
        if (n === clearTimeout) {
          return clearTimeout(e);
        }
        if ((n === i || !n) && clearTimeout) {
          n = clearTimeout;
          return clearTimeout(e);
        }
        try {
          return n(e);
        } catch (t) {
          try {
            return n.call(null, e);
          } catch (t) {
            return n.call(this, e);
          }
        }
      }
      var l = [];
      var c = false;
      var u;
      var h = -1;
      function f() {
        if (!c || !u) {
          return;
        }
        c = false;
        if (u.length) {
          l = u.concat(l);
        } else {
          h = -1;
        }
        if (l.length) {
          p();
        }
      }
      function p() {
        if (c) {
          return;
        }
        var e = o(f);
        c = true;
        var t = l.length;
        while (t) {
          u = l;
          l = [];
          while (++h < t) {
            if (u) {
              u[h].run();
            }
          }
          h = -1;
          t = l.length;
        }
        u = null;
        c = false;
        a(e);
      }
      t.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var r = 1; r < arguments.length; r++) {
            t[r - 1] = arguments[r];
          }
        }
        l.push(new m(e, t));
        if (l.length === 1 && !c) {
          o(p);
        }
      };
      function m(e, t) {
        this.fun = e;
        this.array = t;
      }
      m.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      t.title = "browser";
      t.browser = true;
      t.env = {};
      t.argv = [];
      t.version = "";
      t.versions = {};
      function v() {}
      t.on = v;
      t.addListener = v;
      t.once = v;
      t.off = v;
      t.removeListener = v;
      t.removeAllListeners = v;
      t.emit = v;
      t.prependListener = v;
      t.prependOnceListener = v;
      t.listeners = function (e) {
        return [];
      };
      t.binding = function (e) {
        throw new Error("process.binding is not supported");
      };
      t.cwd = function () {
        return "/";
      };
      t.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      };
      t.umask = function () {
        return 0;
      };
    },
    11358: (e, t, r) => {
      !(function (t, n) {
        true ? (e.exports = n(r(28416))) : 0;
      })(r.g, function (e) {
        return (function (e) {
          var t = {};
          function r(n) {
            if (t[n]) return t[n].exports;
            var s = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(s.exports, s, s.exports, r), (s.l = !0), s.exports;
          }
          return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, n) {
              r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function (e) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.t = function (e, t) {
              if ((1 & t && (e = r(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var n = Object.create(null);
              if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var s in e)
                  r.d(
                    n,
                    s,
                    function (t) {
                      return e[t];
                    }.bind(null, s)
                  );
              return n;
            }),
            (r.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return r.d(t, "a", t), t;
            }),
            (r.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 4))
          );
        })([
          function (e, t, r) {
            e.exports = r(2)();
          },
          function (t, r) {
            t.exports = e;
          },
          function (e, t, r) {
            "use strict";
            var n = r(3);
            function s() {}
            function i() {}
            (i.resetWarningCache = s),
              (e.exports = function () {
                function e(e, t, r, s, i, o) {
                  if (o !== n) {
                    var a = new Error(
                      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                    );
                    throw ((a.name = "Invariant Violation"), a);
                  }
                }
                function t() {
                  return e;
                }
                e.isRequired = e;
                var r = {
                  array: e,
                  bool: e,
                  func: e,
                  number: e,
                  object: e,
                  string: e,
                  symbol: e,
                  any: e,
                  arrayOf: t,
                  element: e,
                  elementType: e,
                  instanceOf: t,
                  node: e,
                  objectOf: t,
                  oneOf: t,
                  oneOfType: t,
                  shape: t,
                  exact: t,
                  checkPropTypes: i,
                  resetWarningCache: s,
                };
                return (r.PropTypes = r), r;
              });
          },
          function (e, t, r) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          },
          function (e, r, n) {
            "use strict";
            n.r(r);
            var s = n(1),
              i = n.n(s),
              o = n(0),
              a = n.n(o);
            function l() {
              return (l =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                  }
                  return e;
                }).apply(this, arguments);
            }
            var c = function (e) {
              var t = e.pageClassName,
                r = e.pageLinkClassName,
                n = e.page,
                s = e.selected,
                o = e.activeClassName,
                a = e.activeLinkClassName,
                c = e.getEventListener,
                u = e.pageSelectedHandler,
                h = e.href,
                f = e.extraAriaContext,
                p = e.ariaLabel || "Page " + n + (f ? " " + f : ""),
                m = null;
              return (
                s &&
                  ((m = "page"),
                  (p = e.ariaLabel || "Page " + n + " is your current page"),
                  (t = void 0 !== t ? t + " " + o : o),
                  void 0 !== r ? void 0 !== a && (r = r + " " + a) : (r = a)),
                i.a.createElement(
                  "li",
                  { className: t },
                  i.a.createElement(
                    "a",
                    l({ role: "button", className: r, href: h, tabIndex: "0", "aria-label": p, "aria-current": m, onKeyPress: u }, c(u)),
                    n
                  )
                )
              );
            };
            c.propTypes = {
              pageSelectedHandler: a.a.func.isRequired,
              selected: a.a.bool.isRequired,
              pageClassName: a.a.string,
              pageLinkClassName: a.a.string,
              activeClassName: a.a.string,
              activeLinkClassName: a.a.string,
              extraAriaContext: a.a.string,
              href: a.a.string,
              ariaLabel: a.a.string,
              page: a.a.number.isRequired,
              getEventListener: a.a.func.isRequired,
            };
            var u = c;
            function h() {
              return (h =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                  }
                  return e;
                }).apply(this, arguments);
            }
            !(function () {
              var e = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
              if (e) {
                var n = void 0 !== r ? r : t;
                if (n)
                  if ("function" != typeof n) {
                    for (var s in n)
                      if (Object.prototype.hasOwnProperty.call(n, s)) {
                        var i = void 0;
                        try {
                          i = n[s];
                        } catch (e) {
                          continue;
                        }
                        e.register(i, s, "/home/adele/workspace/react-paginate/react_components/PageView.js");
                      }
                  } else e.register(n, "module.exports", "/home/adele/workspace/react-paginate/react_components/PageView.js");
              }
            })();
            var f = function (e) {
              var t = e.breakLabel,
                r = e.breakClassName,
                n = e.breakLinkClassName,
                s = e.breakHandler,
                o = e.getEventListener,
                a = r || "break";
              return i.a.createElement(
                "li",
                { className: a },
                i.a.createElement("a", h({ className: n, role: "button", tabIndex: "0", onKeyPress: s }, o(s)), t)
              );
            };
            f.propTypes = {
              breakLabel: a.a.oneOfType([a.a.string, a.a.node]),
              breakClassName: a.a.string,
              breakLinkClassName: a.a.string,
              breakHandler: a.a.func.isRequired,
              getEventListener: a.a.func.isRequired,
            };
            var p = f;
            function m(e) {
              return (m =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
            }
            function v() {
              return (v =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                  }
                  return e;
                }).apply(this, arguments);
            }
            function E(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
              }
            }
            function d(e, t) {
              return (d =
                Object.setPrototypeOf ||
                function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
            }
            function g(e) {
              var t = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                } catch (e) {
                  return !1;
                }
              })();
              return function () {
                var r,
                  n = N(e);
                if (t) {
                  var s = N(this).constructor;
                  r = Reflect.construct(n, arguments, s);
                } else r = n.apply(this, arguments);
                return y(this, r);
              };
            }
            function y(e, t) {
              return !t || ("object" !== m(t) && "function" != typeof t) ? b(e) : t;
            }
            function b(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            }
            function N(e) {
              return (N = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
            }
            function R(e, t, r) {
              return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            !(function () {
              var e = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
              if (e) {
                var n = void 0 !== r ? r : t;
                if (n)
                  if ("function" != typeof n) {
                    for (var s in n)
                      if (Object.prototype.hasOwnProperty.call(n, s)) {
                        var i = void 0;
                        try {
                          i = n[s];
                        } catch (e) {
                          continue;
                        }
                        e.register(i, s, "/home/adele/workspace/react-paginate/react_components/BreakView.js");
                      }
                  } else e.register(n, "module.exports", "/home/adele/workspace/react-paginate/react_components/BreakView.js");
              }
            })();
            var L = (function (e) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && d(e, t);
              })(o, e);
              var t,
                r,
                n,
                s = g(o);
              function o(e) {
                var t, r;
                return (
                  (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                  })(this, o),
                  R(b((t = s.call(this, e))), "handlePreviousPage", function (e) {
                    var r = t.state.selected;
                    e.preventDefault ? e.preventDefault() : (e.returnValue = !1), r > 0 && t.handlePageSelected(r - 1, e);
                  }),
                  R(b(t), "handleNextPage", function (e) {
                    var r = t.state.selected,
                      n = t.props.pageCount;
                    e.preventDefault ? e.preventDefault() : (e.returnValue = !1), r < n - 1 && t.handlePageSelected(r + 1, e);
                  }),
                  R(b(t), "handlePageSelected", function (e, r) {
                    r.preventDefault ? r.preventDefault() : (r.returnValue = !1),
                      t.state.selected !== e && (t.setState({ selected: e }), t.callCallback(e));
                  }),
                  R(b(t), "getEventListener", function (e) {
                    return R({}, t.props.eventListener, e);
                  }),
                  R(b(t), "handleBreakClick", function (e, r) {
                    r.preventDefault ? r.preventDefault() : (r.returnValue = !1);
                    var n = t.state.selected;
                    t.handlePageSelected(n < e ? t.getForwardJump() : t.getBackwardJump(), r);
                  }),
                  R(b(t), "callCallback", function (e) {
                    void 0 !== t.props.onPageChange && "function" == typeof t.props.onPageChange && t.props.onPageChange({ selected: e });
                  }),
                  R(b(t), "pagination", function () {
                    var e = [],
                      r = t.props,
                      n = r.pageRangeDisplayed,
                      s = r.pageCount,
                      o = r.marginPagesDisplayed,
                      a = r.breakLabel,
                      l = r.breakClassName,
                      c = r.breakLinkClassName,
                      u = t.state.selected;
                    if (s <= n) for (var h = 0; h < s; h++) e.push(t.getPageElement(h));
                    else {
                      var f,
                        m,
                        v,
                        E = n / 2,
                        d = n - E;
                      u > s - n / 2 ? (E = n - (d = s - u)) : u < n / 2 && (d = n - (E = u));
                      var g = function (e) {
                        return t.getPageElement(e);
                      };
                      for (f = 0; f < s; f++)
                        (m = f + 1) <= o || m > s - o || (f >= u - E && f <= u + d)
                          ? e.push(g(f))
                          : a &&
                            e[e.length - 1] !== v &&
                            ((v = i.a.createElement(p, {
                              key: f,
                              breakLabel: a,
                              breakClassName: l,
                              breakLinkClassName: c,
                              breakHandler: t.handleBreakClick.bind(null, f),
                              getEventListener: t.getEventListener,
                            })),
                            e.push(v));
                    }
                    return e;
                  }),
                  (r = e.initialPage ? e.initialPage : e.forcePage ? e.forcePage : 0),
                  (t.state = { selected: r }),
                  t
                );
              }
              return (
                (t = o),
                (r = [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var e = this.props,
                        t = e.initialPage,
                        r = e.disableInitialCallback,
                        n = e.extraAriaContext;
                      void 0 === t || r || this.callCallback(t),
                        n &&
                          console.warn(
                            "DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."
                          );
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      void 0 !== this.props.forcePage && this.props.forcePage !== e.forcePage && this.setState({ selected: this.props.forcePage });
                    },
                  },
                  {
                    key: "getForwardJump",
                    value: function () {
                      var e = this.state.selected,
                        t = this.props,
                        r = t.pageCount,
                        n = e + t.pageRangeDisplayed;
                      return n >= r ? r - 1 : n;
                    },
                  },
                  {
                    key: "getBackwardJump",
                    value: function () {
                      var e = this.state.selected - this.props.pageRangeDisplayed;
                      return e < 0 ? 0 : e;
                    },
                  },
                  {
                    key: "hrefBuilder",
                    value: function (e) {
                      var t = this.props,
                        r = t.hrefBuilder,
                        n = t.pageCount;
                      if (r && e !== this.state.selected && e >= 0 && e < n) return r(e + 1);
                    },
                  },
                  {
                    key: "ariaLabelBuilder",
                    value: function (e) {
                      var t = e === this.state.selected;
                      if (this.props.ariaLabelBuilder && e >= 0 && e < this.props.pageCount) {
                        var r = this.props.ariaLabelBuilder(e + 1, t);
                        return this.props.extraAriaContext && !t && (r = r + " " + this.props.extraAriaContext), r;
                      }
                    },
                  },
                  {
                    key: "getPageElement",
                    value: function (e) {
                      var t = this.state.selected,
                        r = this.props,
                        n = r.pageClassName,
                        s = r.pageLinkClassName,
                        o = r.activeClassName,
                        a = r.activeLinkClassName,
                        l = r.extraAriaContext;
                      return i.a.createElement(u, {
                        key: e,
                        pageSelectedHandler: this.handlePageSelected.bind(null, e),
                        selected: t === e,
                        pageClassName: n,
                        pageLinkClassName: s,
                        activeClassName: o,
                        activeLinkClassName: a,
                        extraAriaContext: l,
                        href: this.hrefBuilder(e),
                        ariaLabel: this.ariaLabelBuilder(e),
                        page: e + 1,
                        getEventListener: this.getEventListener,
                      });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.disabledClassName,
                        r = e.pageCount,
                        n = e.containerClassName,
                        s = e.previousLabel,
                        o = e.previousClassName,
                        a = e.previousLinkClassName,
                        l = e.previousAriaLabel,
                        c = e.nextLabel,
                        u = e.nextClassName,
                        h = e.nextLinkClassName,
                        f = e.nextAriaLabel,
                        p = this.state.selected,
                        m = o + (0 === p ? " ".concat(t) : ""),
                        E = u + (p === r - 1 ? " ".concat(t) : ""),
                        d = 0 === p ? "true" : "false",
                        g = p === r - 1 ? "true" : "false";
                      return i.a.createElement(
                        "ul",
                        { className: n },
                        i.a.createElement(
                          "li",
                          { className: m },
                          i.a.createElement(
                            "a",
                            v(
                              {
                                className: a,
                                href: this.hrefBuilder(p - 1),
                                tabIndex: "0",
                                role: "button",
                                onKeyPress: this.handlePreviousPage,
                                "aria-disabled": d,
                                "aria-label": l,
                              },
                              this.getEventListener(this.handlePreviousPage)
                            ),
                            s
                          )
                        ),
                        this.pagination(),
                        i.a.createElement(
                          "li",
                          { className: E },
                          i.a.createElement(
                            "a",
                            v(
                              {
                                className: h,
                                href: this.hrefBuilder(p + 1),
                                tabIndex: "0",
                                role: "button",
                                onKeyPress: this.handleNextPage,
                                "aria-disabled": g,
                                "aria-label": f,
                              },
                              this.getEventListener(this.handleNextPage)
                            ),
                            c
                          )
                        )
                      );
                    },
                  },
                ]) && E(t.prototype, r),
                n && E(t, n),
                o
              );
            })(s.Component);
            R(L, "propTypes", {
              pageCount: a.a.number.isRequired,
              pageRangeDisplayed: a.a.number.isRequired,
              marginPagesDisplayed: a.a.number.isRequired,
              previousLabel: a.a.node,
              previousAriaLabel: a.a.string,
              nextLabel: a.a.node,
              nextAriaLabel: a.a.string,
              breakLabel: a.a.oneOfType([a.a.string, a.a.node]),
              hrefBuilder: a.a.func,
              onPageChange: a.a.func,
              initialPage: a.a.number,
              forcePage: a.a.number,
              disableInitialCallback: a.a.bool,
              containerClassName: a.a.string,
              pageClassName: a.a.string,
              pageLinkClassName: a.a.string,
              activeClassName: a.a.string,
              activeLinkClassName: a.a.string,
              previousClassName: a.a.string,
              nextClassName: a.a.string,
              previousLinkClassName: a.a.string,
              nextLinkClassName: a.a.string,
              disabledClassName: a.a.string,
              breakClassName: a.a.string,
              breakLinkClassName: a.a.string,
              extraAriaContext: a.a.string,
              ariaLabelBuilder: a.a.func,
              eventListener: a.a.string,
            }),
              R(L, "defaultProps", {
                pageCount: 10,
                pageRangeDisplayed: 2,
                marginPagesDisplayed: 3,
                activeClassName: "selected",
                previousLabel: "Previous",
                previousClassName: "previous",
                previousAriaLabel: "Previous page",
                nextLabel: "Next",
                nextClassName: "next",
                nextAriaLabel: "Next page",
                breakLabel: "...",
                disabledClassName: "disabled",
                disableInitialCallback: !1,
                eventListener: "onClick",
              }),
              (function () {
                var e = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
                if (e) {
                  var n = void 0 !== r ? r : t;
                  if (n)
                    if ("function" != typeof n) {
                      for (var s in n)
                        if (Object.prototype.hasOwnProperty.call(n, s)) {
                          var i = void 0;
                          try {
                            i = n[s];
                          } catch (e) {
                            continue;
                          }
                          e.register(i, s, "/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js");
                        }
                    } else e.register(n, "module.exports", "/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js");
                }
              })();
            r.default = L;
            !(function () {
              var e = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
              if (e) {
                var n = void 0 !== r ? r : t;
                if (n)
                  if ("function" != typeof n) {
                    for (var s in n)
                      if (Object.prototype.hasOwnProperty.call(n, s)) {
                        var i = void 0;
                        try {
                          i = n[s];
                        } catch (e) {
                          continue;
                        }
                        e.register(i, s, "/home/adele/workspace/react-paginate/react_components/index.js");
                      }
                  } else e.register(n, "module.exports", "/home/adele/workspace/react-paginate/react_components/index.js");
              }
            })();
          },
        ]);
      });
    },
    22257: (e, t, r) => {
      const n = Symbol("SemVer ANY");
      class s {
        static get ANY() {
          return n;
        }
        constructor(e, t) {
          t = i(t);
          if (e instanceof s) {
            if (e.loose === !!t.loose) {
              return e;
            } else {
              e = e.value;
            }
          }
          c("comparator", e, t);
          this.options = t;
          this.loose = !!t.loose;
          this.parse(e);
          if (this.semver === n) {
            this.value = "";
          } else {
            this.value = this.operator + this.semver.version;
          }
          c("comp", this);
        }
        parse(e) {
          const t = this.options.loose ? o[a.COMPARATORLOOSE] : o[a.COMPARATOR];
          const r = e.match(t);
          if (!r) {
            throw new TypeError(`Invalid comparator: ${e}`);
          }
          this.operator = r[1] !== undefined ? r[1] : "";
          if (this.operator === "=") {
            this.operator = "";
          }
          if (!r[2]) {
            this.semver = n;
          } else {
            this.semver = new u(r[2], this.options.loose);
          }
        }
        toString() {
          return this.value;
        }
        test(e) {
          c("Comparator.test", e, this.options.loose);
          if (this.semver === n || e === n) {
            return true;
          }
          if (typeof e === "string") {
            try {
              e = new u(e, this.options);
            } catch (t) {
              return false;
            }
          }
          return l(e, this.operator, this.semver, this.options);
        }
        intersects(e, t) {
          if (!(e instanceof s)) {
            throw new TypeError("a Comparator is required");
          }
          if (this.operator === "") {
            if (this.value === "") {
              return true;
            }
            return new h(e.value, t).test(this.value);
          } else if (e.operator === "") {
            if (e.value === "") {
              return true;
            }
            return new h(this.value, t).test(e.semver);
          }
          t = i(t);
          if (t.includePrerelease && (this.value === "<0.0.0-0" || e.value === "<0.0.0-0")) {
            return false;
          }
          if (!t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))) {
            return false;
          }
          if (this.operator.startsWith(">") && e.operator.startsWith(">")) {
            return true;
          }
          if (this.operator.startsWith("<") && e.operator.startsWith("<")) {
            return true;
          }
          if (this.semver.version === e.semver.version && this.operator.includes("=") && e.operator.includes("=")) {
            return true;
          }
          if (l(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<")) {
            return true;
          }
          if (l(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">")) {
            return true;
          }
          return false;
        }
      }
      e.exports = s;
      const i = r(12893);
      const { re: o, t: a } = r(55765);
      const l = r(7539);
      const c = r(74225);
      const u = r(26376);
      const h = r(66902);
    },
    66902: (e, t, r) => {
      class n {
        constructor(e, t) {
          t = o(t);
          if (e instanceof n) {
            if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) {
              return e;
            } else {
              return new n(e.raw, t);
            }
          }
          if (e instanceof a) {
            this.raw = e.value;
            this.set = [[e]];
            this.format();
            return this;
          }
          this.options = t;
          this.loose = !!t.loose;
          this.includePrerelease = !!t.includePrerelease;
          this.raw = e;
          this.set = e
            .split("||")
            .map((e) => this.parseRange(e.trim()))
            .filter((e) => e.length);
          if (!this.set.length) {
            throw new TypeError(`Invalid SemVer Range: ${e}`);
          }
          if (this.set.length > 1) {
            const e = this.set[0];
            this.set = this.set.filter((e) => !d(e[0]));
            if (this.set.length === 0) {
              this.set = [e];
            } else if (this.set.length > 1) {
              for (const e of this.set) {
                if (e.length === 1 && g(e[0])) {
                  this.set = [e];
                  break;
                }
              }
            }
          }
          this.format();
        }
        format() {
          this.range = this.set
            .map((e) => e.join(" ").trim())
            .join("||")
            .trim();
          return this.range;
        }
        toString() {
          return this.range;
        }
        parseRange(e) {
          e = e.trim();
          const t = (this.options.includePrerelease && v) | (this.options.loose && E);
          const r = t + ":" + e;
          const n = i.get(r);
          if (n) {
            return n;
          }
          const s = this.options.loose;
          const o = s ? u[h.HYPHENRANGELOOSE] : u[h.HYPHENRANGE];
          e = e.replace(o, A(this.options.includePrerelease));
          l("hyphen replace", e);
          e = e.replace(u[h.COMPARATORTRIM], f);
          l("comparator trim", e);
          e = e.replace(u[h.TILDETRIM], p);
          e = e.replace(u[h.CARETTRIM], m);
          e = e.split(/\s+/).join(" ");
          let c = e
            .split(" ")
            .map((e) => b(e, this.options))
            .join(" ")
            .split(/\s+/)
            .map((e) => T(e, this.options));
          if (s) {
            c = c.filter((e) => {
              l("loose invalid filter", e, this.options);
              return !!e.match(u[h.COMPARATORLOOSE]);
            });
          }
          l("range list", c);
          const g = new Map();
          const y = c.map((e) => new a(e, this.options));
          for (const i of y) {
            if (d(i)) {
              return [i];
            }
            g.set(i.value, i);
          }
          if (g.size > 1 && g.has("")) {
            g.delete("");
          }
          const N = [...g.values()];
          i.set(r, N);
          return N;
        }
        intersects(e, t) {
          if (!(e instanceof n)) {
            throw new TypeError("a Range is required");
          }
          return this.set.some((r) => y(r, t) && e.set.some((e) => y(e, t) && r.every((r) => e.every((e) => r.intersects(e, t)))));
        }
        test(e) {
          if (!e) {
            return false;
          }
          if (typeof e === "string") {
            try {
              e = new c(e, this.options);
            } catch (t) {
              return false;
            }
          }
          for (let r = 0; r < this.set.length; r++) {
            if (P(this.set[r], e, this.options)) {
              return true;
            }
          }
          return false;
        }
      }
      e.exports = n;
      const s = r(39593);
      const i = new s({ max: 1e3 });
      const o = r(12893);
      const a = r(22257);
      const l = r(74225);
      const c = r(26376);
      const { re: u, t: h, comparatorTrimReplace: f, tildeTrimReplace: p, caretTrimReplace: m } = r(55765);
      const { FLAG_INCLUDE_PRERELEASE: v, FLAG_LOOSE: E } = r(83295);
      const d = (e) => e.value === "<0.0.0-0";
      const g = (e) => e.value === "";
      const y = (e, t) => {
        let r = true;
        const n = e.slice();
        let s = n.pop();
        while (r && n.length) {
          r = n.every((e) => s.intersects(e, t));
          s = n.pop();
        }
        return r;
      };
      const b = (e, t) => {
        l("comp", e, t);
        e = $(e, t);
        l("caret", e);
        e = R(e, t);
        l("tildes", e);
        e = w(e, t);
        l("xrange", e);
        e = x(e, t);
        l("stars", e);
        return e;
      };
      const N = (e) => !e || e.toLowerCase() === "x" || e === "*";
      const R = (e, t) =>
        e
          .trim()
          .split(/\s+/)
          .map((e) => L(e, t))
          .join(" ");
      const L = (e, t) => {
        const r = t.loose ? u[h.TILDELOOSE] : u[h.TILDE];
        return e.replace(r, (t, r, n, s, i) => {
          l("tilde", e, t, r, n, s, i);
          let o;
          if (N(r)) {
            o = "";
          } else if (N(n)) {
            o = `>=${r}.0.0 <${+r + 1}.0.0-0`;
          } else if (N(s)) {
            o = `>=${r}.${n}.0 <${r}.${+n + 1}.0-0`;
          } else if (i) {
            l("replaceTilde pr", i);
            o = `>=${r}.${n}.${s}-${i} <${r}.${+n + 1}.0-0`;
          } else {
            o = `>=${r}.${n}.${s} <${r}.${+n + 1}.0-0`;
          }
          l("tilde return", o);
          return o;
        });
      };
      const $ = (e, t) =>
        e
          .trim()
          .split(/\s+/)
          .map((e) => I(e, t))
          .join(" ");
      const I = (e, t) => {
        l("caret", e, t);
        const r = t.loose ? u[h.CARETLOOSE] : u[h.CARET];
        const n = t.includePrerelease ? "-0" : "";
        return e.replace(r, (t, r, s, i, o) => {
          l("caret", e, t, r, s, i, o);
          let a;
          if (N(r)) {
            a = "";
          } else if (N(s)) {
            a = `>=${r}.0.0${n} <${+r + 1}.0.0-0`;
          } else if (N(i)) {
            if (r === "0") {
              a = `>=${r}.${s}.0${n} <${r}.${+s + 1}.0-0`;
            } else {
              a = `>=${r}.${s}.0${n} <${+r + 1}.0.0-0`;
            }
          } else if (o) {
            l("replaceCaret pr", o);
            if (r === "0") {
              if (s === "0") {
                a = `>=${r}.${s}.${i}-${o} <${r}.${s}.${+i + 1}-0`;
              } else {
                a = `>=${r}.${s}.${i}-${o} <${r}.${+s + 1}.0-0`;
              }
            } else {
              a = `>=${r}.${s}.${i}-${o} <${+r + 1}.0.0-0`;
            }
          } else {
            l("no pr");
            if (r === "0") {
              if (s === "0") {
                a = `>=${r}.${s}.${i}${n} <${r}.${s}.${+i + 1}-0`;
              } else {
                a = `>=${r}.${s}.${i}${n} <${r}.${+s + 1}.0-0`;
              }
            } else {
              a = `>=${r}.${s}.${i} <${+r + 1}.0.0-0`;
            }
          }
          l("caret return", a);
          return a;
        });
      };
      const w = (e, t) => {
        l("replaceXRanges", e, t);
        return e
          .split(/\s+/)
          .map((e) => O(e, t))
          .join(" ");
      };
      const O = (e, t) => {
        e = e.trim();
        const r = t.loose ? u[h.XRANGELOOSE] : u[h.XRANGE];
        return e.replace(r, (r, n, s, i, o, a) => {
          l("xRange", e, r, n, s, i, o, a);
          const c = N(s);
          const u = c || N(i);
          const h = u || N(o);
          const f = h;
          if (n === "=" && f) {
            n = "";
          }
          a = t.includePrerelease ? "-0" : "";
          if (c) {
            if (n === ">" || n === "<") {
              r = "<0.0.0-0";
            } else {
              r = "*";
            }
          } else if (n && f) {
            if (u) {
              i = 0;
            }
            o = 0;
            if (n === ">") {
              n = ">=";
              if (u) {
                s = +s + 1;
                i = 0;
                o = 0;
              } else {
                i = +i + 1;
                o = 0;
              }
            } else if (n === "<=") {
              n = "<";
              if (u) {
                s = +s + 1;
              } else {
                i = +i + 1;
              }
            }
            if (n === "<") {
              a = "-0";
            }
            r = `${n + s}.${i}.${o}${a}`;
          } else if (u) {
            r = `>=${s}.0.0${a} <${+s + 1}.0.0-0`;
          } else if (h) {
            r = `>=${s}.${i}.0${a} <${s}.${+i + 1}.0-0`;
          }
          l("xRange return", r);
          return r;
        });
      };
      const x = (e, t) => {
        l("replaceStars", e, t);
        return e.trim().replace(u[h.STAR], "");
      };
      const T = (e, t) => {
        l("replaceGTE0", e, t);
        return e.trim().replace(u[t.includePrerelease ? h.GTE0PRE : h.GTE0], "");
      };
      const A = (e) => (t, r, n, s, i, o, a, l, c, u, h, f, p) => {
        if (N(n)) {
          r = "";
        } else if (N(s)) {
          r = `>=${n}.0.0${e ? "-0" : ""}`;
        } else if (N(i)) {
          r = `>=${n}.${s}.0${e ? "-0" : ""}`;
        } else if (o) {
          r = `>=${r}`;
        } else {
          r = `>=${r}${e ? "-0" : ""}`;
        }
        if (N(c)) {
          l = "";
        } else if (N(u)) {
          l = `<${+c + 1}.0.0-0`;
        } else if (N(h)) {
          l = `<${c}.${+u + 1}.0-0`;
        } else if (f) {
          l = `<=${c}.${u}.${h}-${f}`;
        } else if (e) {
          l = `<${c}.${u}.${+h + 1}-0`;
        } else {
          l = `<=${l}`;
        }
        return `${r} ${l}`.trim();
      };
      const P = (e, t, r) => {
        for (let n = 0; n < e.length; n++) {
          if (!e[n].test(t)) {
            return false;
          }
        }
        if (t.prerelease.length && !r.includePrerelease) {
          for (let r = 0; r < e.length; r++) {
            l(e[r].semver);
            if (e[r].semver === a.ANY) {
              continue;
            }
            if (e[r].semver.prerelease.length > 0) {
              const n = e[r].semver;
              if (n.major === t.major && n.minor === t.minor && n.patch === t.patch) {
                return true;
              }
            }
          }
          return false;
        }
        return true;
      };
    },
    26376: (e, t, r) => {
      const n = r(74225);
      const { MAX_LENGTH: s, MAX_SAFE_INTEGER: i } = r(83295);
      const { re: o, t: a } = r(55765);
      const l = r(12893);
      const { compareIdentifiers: c } = r(86742);
      class u {
        constructor(e, t) {
          t = l(t);
          if (e instanceof u) {
            if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) {
              return e;
            } else {
              e = e.version;
            }
          } else if (typeof e !== "string") {
            throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
          }
          if (e.length > s) {
            throw new TypeError(`version is longer than ${s} characters`);
          }
          n("SemVer", e, t);
          this.options = t;
          this.loose = !!t.loose;
          this.includePrerelease = !!t.includePrerelease;
          const r = e.trim().match(t.loose ? o[a.LOOSE] : o[a.FULL]);
          if (!r) {
            throw new TypeError(`Invalid Version: ${e}`);
          }
          this.raw = e;
          this.major = +r[1];
          this.minor = +r[2];
          this.patch = +r[3];
          if (this.major > i || this.major < 0) {
            throw new TypeError("Invalid major version");
          }
          if (this.minor > i || this.minor < 0) {
            throw new TypeError("Invalid minor version");
          }
          if (this.patch > i || this.patch < 0) {
            throw new TypeError("Invalid patch version");
          }
          if (!r[4]) {
            this.prerelease = [];
          } else {
            this.prerelease = r[4].split(".").map((e) => {
              if (/^[0-9]+$/.test(e)) {
                const t = +e;
                if (t >= 0 && t < i) {
                  return t;
                }
              }
              return e;
            });
          }
          this.build = r[5] ? r[5].split(".") : [];
          this.format();
        }
        format() {
          this.version = `${this.major}.${this.minor}.${this.patch}`;
          if (this.prerelease.length) {
            this.version += `-${this.prerelease.join(".")}`;
          }
          return this.version;
        }
        toString() {
          return this.version;
        }
        compare(e) {
          n("SemVer.compare", this.version, this.options, e);
          if (!(e instanceof u)) {
            if (typeof e === "string" && e === this.version) {
              return 0;
            }
            e = new u(e, this.options);
          }
          if (e.version === this.version) {
            return 0;
          }
          return this.compareMain(e) || this.comparePre(e);
        }
        compareMain(e) {
          if (!(e instanceof u)) {
            e = new u(e, this.options);
          }
          return c(this.major, e.major) || c(this.minor, e.minor) || c(this.patch, e.patch);
        }
        comparePre(e) {
          if (!(e instanceof u)) {
            e = new u(e, this.options);
          }
          if (this.prerelease.length && !e.prerelease.length) {
            return -1;
          } else if (!this.prerelease.length && e.prerelease.length) {
            return 1;
          } else if (!this.prerelease.length && !e.prerelease.length) {
            return 0;
          }
          let t = 0;
          do {
            const r = this.prerelease[t];
            const s = e.prerelease[t];
            n("prerelease compare", t, r, s);
            if (r === undefined && s === undefined) {
              return 0;
            } else if (s === undefined) {
              return 1;
            } else if (r === undefined) {
              return -1;
            } else if (r === s) {
              continue;
            } else {
              return c(r, s);
            }
          } while (++t);
        }
        compareBuild(e) {
          if (!(e instanceof u)) {
            e = new u(e, this.options);
          }
          let t = 0;
          do {
            const r = this.build[t];
            const s = e.build[t];
            n("prerelease compare", t, r, s);
            if (r === undefined && s === undefined) {
              return 0;
            } else if (s === undefined) {
              return 1;
            } else if (r === undefined) {
              return -1;
            } else if (r === s) {
              continue;
            } else {
              return c(r, s);
            }
          } while (++t);
        }
        inc(e, t, r) {
          switch (e) {
            case "premajor":
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor = 0;
              this.major++;
              this.inc("pre", t, r);
              break;
            case "preminor":
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor++;
              this.inc("pre", t, r);
              break;
            case "prepatch":
              this.prerelease.length = 0;
              this.inc("patch", t, r);
              this.inc("pre", t, r);
              break;
            case "prerelease":
              if (this.prerelease.length === 0) {
                this.inc("patch", t, r);
              }
              this.inc("pre", t, r);
              break;
            case "major":
              if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                this.major++;
              }
              this.minor = 0;
              this.patch = 0;
              this.prerelease = [];
              break;
            case "minor":
              if (this.patch !== 0 || this.prerelease.length === 0) {
                this.minor++;
              }
              this.patch = 0;
              this.prerelease = [];
              break;
            case "patch":
              if (this.prerelease.length === 0) {
                this.patch++;
              }
              this.prerelease = [];
              break;
            case "pre": {
              const e = Number(r) ? 1 : 0;
              if (!t && r === false) {
                throw new Error("invalid increment argument: identifier is empty");
              }
              if (this.prerelease.length === 0) {
                this.prerelease = [e];
              } else {
                let n = this.prerelease.length;
                while (--n >= 0) {
                  if (typeof this.prerelease[n] === "number") {
                    this.prerelease[n]++;
                    n = -2;
                  }
                }
                if (n === -1) {
                  if (t === this.prerelease.join(".") && r === false) {
                    throw new Error("invalid increment argument: identifier already exists");
                  }
                  this.prerelease.push(e);
                }
              }
              if (t) {
                let n = [t, e];
                if (r === false) {
                  n = [t];
                }
                if (c(this.prerelease[0], t) === 0) {
                  if (isNaN(this.prerelease[1])) {
                    this.prerelease = n;
                  }
                } else {
                  this.prerelease = n;
                }
              }
              break;
            }
            default:
              throw new Error(`invalid increment argument: ${e}`);
          }
          this.format();
          this.raw = this.version;
          return this;
        }
      }
      e.exports = u;
    },
    13507: (e, t, r) => {
      const n = r(33959);
      const s = (e, t) => {
        const r = n(e.trim().replace(/^[=v]+/, ""), t);
        return r ? r.version : null;
      };
      e.exports = s;
    },
    7539: (e, t, r) => {
      const n = r(58718);
      const s = r(81194);
      const i = r(71312);
      const o = r(25903);
      const a = r(21544);
      const l = r(12056);
      const c = (e, t, r, c) => {
        switch (t) {
          case "===":
            if (typeof e === "object") {
              e = e.version;
            }
            if (typeof r === "object") {
              r = r.version;
            }
            return e === r;
          case "!==":
            if (typeof e === "object") {
              e = e.version;
            }
            if (typeof r === "object") {
              r = r.version;
            }
            return e !== r;
          case "":
          case "=":
          case "==":
            return n(e, r, c);
          case "!=":
            return s(e, r, c);
          case ">":
            return i(e, r, c);
          case ">=":
            return o(e, r, c);
          case "<":
            return a(e, r, c);
          case "<=":
            return l(e, r, c);
          default:
            throw new TypeError(`Invalid operator: ${t}`);
        }
      };
      e.exports = c;
    },
    99038: (e, t, r) => {
      const n = r(26376);
      const s = r(33959);
      const { re: i, t: o } = r(55765);
      const a = (e, t) => {
        if (e instanceof n) {
          return e;
        }
        if (typeof e === "number") {
          e = String(e);
        }
        if (typeof e !== "string") {
          return null;
        }
        t = t || {};
        let r = null;
        if (!t.rtl) {
          r = e.match(i[o.COERCE]);
        } else {
          let t;
          while ((t = i[o.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length)) {
            if (!r || t.index + t[0].length !== r.index + r[0].length) {
              r = t;
            }
            i[o.COERCERTL].lastIndex = t.index + t[1].length + t[2].length;
          }
          i[o.COERCERTL].lastIndex = -1;
        }
        if (r === null) {
          return null;
        }
        return s(`${r[2]}.${r[3] || "0"}.${r[4] || "0"}`, t);
      };
      e.exports = a;
    },
    88880: (e, t, r) => {
      const n = r(26376);
      const s = (e, t, r) => {
        const s = new n(e, r);
        const i = new n(t, r);
        return s.compare(i) || s.compareBuild(i);
      };
      e.exports = s;
    },
    27880: (e, t, r) => {
      const n = r(46269);
      const s = (e, t) => n(e, t, true);
      e.exports = s;
    },
    46269: (e, t, r) => {
      const n = r(26376);
      const s = (e, t, r) => new n(e, r).compare(new n(t, r));
      e.exports = s;
    },
    62378: (e, t, r) => {
      const n = r(33959);
      const s = (e, t) => {
        const r = n(e, null, true);
        const s = n(t, null, true);
        const i = r.compare(s);
        if (i === 0) {
          return null;
        }
        const o = i > 0;
        const a = o ? r : s;
        const l = o ? s : r;
        const c = !!a.prerelease.length;
        const u = c ? "pre" : "";
        if (r.major !== s.major) {
          return u + "major";
        }
        if (r.minor !== s.minor) {
          return u + "minor";
        }
        if (r.patch !== s.patch) {
          return u + "patch";
        }
        if (c) {
          return "prerelease";
        }
        if (l.patch) {
          return "patch";
        }
        if (l.minor) {
          return "minor";
        }
        return "major";
      };
      e.exports = s;
    },
    58718: (e, t, r) => {
      const n = r(46269);
      const s = (e, t, r) => n(e, t, r) === 0;
      e.exports = s;
    },
    71312: (e, t, r) => {
      const n = r(46269);
      const s = (e, t, r) => n(e, t, r) > 0;
      e.exports = s;
    },
    25903: (e, t, r) => {
      const n = r(46269);
      const s = (e, t, r) => n(e, t, r) >= 0;
      e.exports = s;
    },
    20253: (e, t, r) => {
      const n = r(26376);
      const s = (e, t, r, s, i) => {
        if (typeof r === "string") {
          i = s;
          s = r;
          r = undefined;
        }
        try {
          return new n(e instanceof n ? e.version : e, r).inc(t, s, i).version;
        } catch (o) {
          return null;
        }
      };
      e.exports = s;
    },
    21544: (e, t, r) => {
      const n = r(46269);
      const s = (e, t, r) => n(e, t, r) < 0;
      e.exports = s;
    },
    12056: (e, t, r) => {
      const n = r(46269);
      const s = (e, t, r) => n(e, t, r) <= 0;
      e.exports = s;
    },
    38679: (e, t, r) => {
      const n = r(26376);
      const s = (e, t) => new n(e, t).major;
      e.exports = s;
    },
    87789: (e, t, r) => {
      const n = r(26376);
      const s = (e, t) => new n(e, t).minor;
      e.exports = s;
    },
    81194: (e, t, r) => {
      const n = r(46269);
      const s = (e, t, r) => n(e, t, r) !== 0;
      e.exports = s;
    },
    33959: (e, t, r) => {
      const n = r(26376);
      const s = (e, t, r = false) => {
        if (e instanceof n) {
          return e;
        }
        try {
          return new n(e, t);
        } catch (s) {
          if (!r) {
            return null;
          }
          throw s;
        }
      };
      e.exports = s;
    },
    52358: (e, t, r) => {
      const n = r(26376);
      const s = (e, t) => new n(e, t).patch;
      e.exports = s;
    },
    57559: (e, t, r) => {
      const n = r(33959);
      const s = (e, t) => {
        const r = n(e, t);
        return r && r.prerelease.length ? r.prerelease : null;
      };
      e.exports = s;
    },
    79795: (e, t, r) => {
      const n = r(46269);
      const s = (e, t, r) => n(t, e, r);
      e.exports = s;
    },
    63657: (e, t, r) => {
      const n = r(88880);
      const s = (e, t) => e.sort((e, r) => n(r, e, t));
      e.exports = s;
    },
    45712: (e, t, r) => {
      const n = r(66902);
      const s = (e, t, r) => {
        try {
          t = new n(t, r);
        } catch (s) {
          return false;
        }
        return t.test(e);
      };
      e.exports = s;
    },
    21100: (e, t, r) => {
      const n = r(88880);
      const s = (e, t) => e.sort((e, r) => n(e, r, t));
      e.exports = s;
    },
    76397: (e, t, r) => {
      const n = r(33959);
      const s = (e, t) => {
        const r = n(e, t);
        return r ? r.version : null;
      };
      e.exports = s;
    },
    81249: (e, t, r) => {
      const n = r(55765);
      const s = r(83295);
      const i = r(26376);
      const o = r(86742);
      const a = r(33959);
      const l = r(76397);
      const c = r(13507);
      const u = r(20253);
      const h = r(62378);
      const f = r(38679);
      const p = r(87789);
      const m = r(52358);
      const v = r(57559);
      const E = r(46269);
      const d = r(79795);
      const g = r(27880);
      const y = r(88880);
      const b = r(21100);
      const N = r(63657);
      const R = r(71312);
      const L = r(21544);
      const $ = r(58718);
      const I = r(81194);
      const w = r(25903);
      const O = r(12056);
      const x = r(7539);
      const T = r(99038);
      const A = r(22257);
      const P = r(66902);
      const C = r(45712);
      const S = r(51042);
      const k = r(85775);
      const D = r(71657);
      const j = r(95316);
      const _ = r(89042);
      const G = r(6826);
      const M = r(97606);
      const F = r(50032);
      const U = r(82937);
      const X = r(17908);
      const B = r(50799);
      e.exports = {
        parse: a,
        valid: l,
        clean: c,
        inc: u,
        diff: h,
        major: f,
        minor: p,
        patch: m,
        prerelease: v,
        compare: E,
        rcompare: d,
        compareLoose: g,
        compareBuild: y,
        sort: b,
        rsort: N,
        gt: R,
        lt: L,
        eq: $,
        neq: I,
        gte: w,
        lte: O,
        cmp: x,
        coerce: T,
        Comparator: A,
        Range: P,
        satisfies: C,
        toComparators: S,
        maxSatisfying: k,
        minSatisfying: D,
        minVersion: j,
        validRange: _,
        outside: G,
        gtr: M,
        ltr: F,
        intersects: U,
        simplifyRange: X,
        subset: B,
        SemVer: i,
        re: n.re,
        src: n.src,
        tokens: n.t,
        SEMVER_SPEC_VERSION: s.SEMVER_SPEC_VERSION,
        RELEASE_TYPES: s.RELEASE_TYPES,
        compareIdentifiers: o.compareIdentifiers,
        rcompareIdentifiers: o.rcompareIdentifiers,
      };
    },
    83295: (e) => {
      const t = "2.0.0";
      const r = 256;
      const n = Number.MAX_SAFE_INTEGER || 9007199254740991;
      const s = 16;
      const i = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
      e.exports = {
        MAX_LENGTH: r,
        MAX_SAFE_COMPONENT_LENGTH: s,
        MAX_SAFE_INTEGER: n,
        RELEASE_TYPES: i,
        SEMVER_SPEC_VERSION: t,
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2,
      };
    },
    74225: (e, t, r) => {
      var n = r(34155);
      const s =
        typeof n === "object" && n.env && n.env.NODE_DEBUG && /\bsemver\b/i.test(n.env.NODE_DEBUG)
          ? (...e) => console.error("SEMVER", ...e)
          : () => {};
      e.exports = s;
    },
    86742: (e) => {
      const t = /^[0-9]+$/;
      const r = (e, r) => {
        const n = t.test(e);
        const s = t.test(r);
        if (n && s) {
          e = +e;
          r = +r;
        }
        return e === r ? 0 : n && !s ? -1 : s && !n ? 1 : e < r ? -1 : 1;
      };
      const n = (e, t) => r(t, e);
      e.exports = { compareIdentifiers: r, rcompareIdentifiers: n };
    },
    12893: (e) => {
      const t = Object.freeze({ loose: true });
      const r = Object.freeze({});
      const n = (e) => {
        if (!e) {
          return r;
        }
        if (typeof e !== "object") {
          return t;
        }
        return e;
      };
      e.exports = n;
    },
    55765: (e, t, r) => {
      const { MAX_SAFE_COMPONENT_LENGTH: n } = r(83295);
      const s = r(74225);
      t = e.exports = {};
      const i = (t.re = []);
      const o = (t.src = []);
      const a = (t.t = {});
      let l = 0;
      const c = (e, t, r) => {
        const n = l++;
        s(e, n, t);
        a[e] = n;
        o[n] = t;
        i[n] = new RegExp(t, r ? "g" : undefined);
      };
      c("NUMERICIDENTIFIER", "0|[1-9]\\d*");
      c("NUMERICIDENTIFIERLOOSE", "[0-9]+");
      c("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
      c("MAINVERSION", `(${o[a.NUMERICIDENTIFIER]})\\.` + `(${o[a.NUMERICIDENTIFIER]})\\.` + `(${o[a.NUMERICIDENTIFIER]})`);
      c("MAINVERSIONLOOSE", `(${o[a.NUMERICIDENTIFIERLOOSE]})\\.` + `(${o[a.NUMERICIDENTIFIERLOOSE]})\\.` + `(${o[a.NUMERICIDENTIFIERLOOSE]})`);
      c("PRERELEASEIDENTIFIER", `(?:${o[a.NUMERICIDENTIFIER]}|${o[a.NONNUMERICIDENTIFIER]})`);
      c("PRERELEASEIDENTIFIERLOOSE", `(?:${o[a.NUMERICIDENTIFIERLOOSE]}|${o[a.NONNUMERICIDENTIFIER]})`);
      c("PRERELEASE", `(?:-(${o[a.PRERELEASEIDENTIFIER]}(?:\\.${o[a.PRERELEASEIDENTIFIER]})*))`);
      c("PRERELEASELOOSE", `(?:-?(${o[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${o[a.PRERELEASEIDENTIFIERLOOSE]})*))`);
      c("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
      c("BUILD", `(?:\\+(${o[a.BUILDIDENTIFIER]}(?:\\.${o[a.BUILDIDENTIFIER]})*))`);
      c("FULLPLAIN", `v?${o[a.MAINVERSION]}${o[a.PRERELEASE]}?${o[a.BUILD]}?`);
      c("FULL", `^${o[a.FULLPLAIN]}$`);
      c("LOOSEPLAIN", `[v=\\s]*${o[a.MAINVERSIONLOOSE]}${o[a.PRERELEASELOOSE]}?${o[a.BUILD]}?`);
      c("LOOSE", `^${o[a.LOOSEPLAIN]}$`);
      c("GTLT", "((?:<|>)?=?)");
      c("XRANGEIDENTIFIERLOOSE", `${o[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
      c("XRANGEIDENTIFIER", `${o[a.NUMERICIDENTIFIER]}|x|X|\\*`);
      c(
        "XRANGEPLAIN",
        `[v=\\s]*(${o[a.XRANGEIDENTIFIER]})` +
          `(?:\\.(${o[a.XRANGEIDENTIFIER]})` +
          `(?:\\.(${o[a.XRANGEIDENTIFIER]})` +
          `(?:${o[a.PRERELEASE]})?${o[a.BUILD]}?` +
          `)?)?`
      );
      c(
        "XRANGEPLAINLOOSE",
        `[v=\\s]*(${o[a.XRANGEIDENTIFIERLOOSE]})` +
          `(?:\\.(${o[a.XRANGEIDENTIFIERLOOSE]})` +
          `(?:\\.(${o[a.XRANGEIDENTIFIERLOOSE]})` +
          `(?:${o[a.PRERELEASELOOSE]})?${o[a.BUILD]}?` +
          `)?)?`
      );
      c("XRANGE", `^${o[a.GTLT]}\\s*${o[a.XRANGEPLAIN]}$`);
      c("XRANGELOOSE", `^${o[a.GTLT]}\\s*${o[a.XRANGEPLAINLOOSE]}$`);
      c("COERCE", `${"(^|[^\\d])" + "(\\d{1,"}${n}})` + `(?:\\.(\\d{1,${n}}))?` + `(?:\\.(\\d{1,${n}}))?` + `(?:$|[^\\d])`);
      c("COERCERTL", o[a.COERCE], true);
      c("LONETILDE", "(?:~>?)");
      c("TILDETRIM", `(\\s*)${o[a.LONETILDE]}\\s+`, true);
      t.tildeTrimReplace = "$1~";
      c("TILDE", `^${o[a.LONETILDE]}${o[a.XRANGEPLAIN]}$`);
      c("TILDELOOSE", `^${o[a.LONETILDE]}${o[a.XRANGEPLAINLOOSE]}$`);
      c("LONECARET", "(?:\\^)");
      c("CARETTRIM", `(\\s*)${o[a.LONECARET]}\\s+`, true);
      t.caretTrimReplace = "$1^";
      c("CARET", `^${o[a.LONECARET]}${o[a.XRANGEPLAIN]}$`);
      c("CARETLOOSE", `^${o[a.LONECARET]}${o[a.XRANGEPLAINLOOSE]}$`);
      c("COMPARATORLOOSE", `^${o[a.GTLT]}\\s*(${o[a.LOOSEPLAIN]})$|^$`);
      c("COMPARATOR", `^${o[a.GTLT]}\\s*(${o[a.FULLPLAIN]})$|^$`);
      c("COMPARATORTRIM", `(\\s*)${o[a.GTLT]}\\s*(${o[a.LOOSEPLAIN]}|${o[a.XRANGEPLAIN]})`, true);
      t.comparatorTrimReplace = "$1$2$3";
      c("HYPHENRANGE", `^\\s*(${o[a.XRANGEPLAIN]})` + `\\s+-\\s+` + `(${o[a.XRANGEPLAIN]})` + `\\s*$`);
      c("HYPHENRANGELOOSE", `^\\s*(${o[a.XRANGEPLAINLOOSE]})` + `\\s+-\\s+` + `(${o[a.XRANGEPLAINLOOSE]})` + `\\s*$`);
      c("STAR", "(<|>)?=?\\s*\\*");
      c("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
      c("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
    },
    97606: (e, t, r) => {
      const n = r(6826);
      const s = (e, t, r) => n(e, t, ">", r);
      e.exports = s;
    },
    82937: (e, t, r) => {
      const n = r(66902);
      const s = (e, t, r) => {
        e = new n(e, r);
        t = new n(t, r);
        return e.intersects(t, r);
      };
      e.exports = s;
    },
    50032: (e, t, r) => {
      const n = r(6826);
      const s = (e, t, r) => n(e, t, "<", r);
      e.exports = s;
    },
    85775: (e, t, r) => {
      const n = r(26376);
      const s = r(66902);
      const i = (e, t, r) => {
        let i = null;
        let o = null;
        let a = null;
        try {
          a = new s(t, r);
        } catch (l) {
          return null;
        }
        e.forEach((e) => {
          if (a.test(e)) {
            if (!i || o.compare(e) === -1) {
              i = e;
              o = new n(i, r);
            }
          }
        });
        return i;
      };
      e.exports = i;
    },
    71657: (e, t, r) => {
      const n = r(26376);
      const s = r(66902);
      const i = (e, t, r) => {
        let i = null;
        let o = null;
        let a = null;
        try {
          a = new s(t, r);
        } catch (l) {
          return null;
        }
        e.forEach((e) => {
          if (a.test(e)) {
            if (!i || o.compare(e) === 1) {
              i = e;
              o = new n(i, r);
            }
          }
        });
        return i;
      };
      e.exports = i;
    },
    95316: (e, t, r) => {
      const n = r(26376);
      const s = r(66902);
      const i = r(71312);
      const o = (e, t) => {
        e = new s(e, t);
        let r = new n("0.0.0");
        if (e.test(r)) {
          return r;
        }
        r = new n("0.0.0-0");
        if (e.test(r)) {
          return r;
        }
        r = null;
        for (let s = 0; s < e.set.length; ++s) {
          const t = e.set[s];
          let o = null;
          t.forEach((e) => {
            const t = new n(e.semver.version);
            switch (e.operator) {
              case ">":
                if (t.prerelease.length === 0) {
                  t.patch++;
                } else {
                  t.prerelease.push(0);
                }
                t.raw = t.format();
              case "":
              case ">=":
                if (!o || i(t, o)) {
                  o = t;
                }
                break;
              case "<":
              case "<=":
                break;
              default:
                throw new Error(`Unexpected operation: ${e.operator}`);
            }
          });
          if (o && (!r || i(r, o))) {
            r = o;
          }
        }
        if (r && e.test(r)) {
          return r;
        }
        return null;
      };
      e.exports = o;
    },
    6826: (e, t, r) => {
      const n = r(26376);
      const s = r(22257);
      const { ANY: i } = s;
      const o = r(66902);
      const a = r(45712);
      const l = r(71312);
      const c = r(21544);
      const u = r(12056);
      const h = r(25903);
      const f = (e, t, r, f) => {
        e = new n(e, f);
        t = new o(t, f);
        let p, m, v, E, d;
        switch (r) {
          case ">":
            p = l;
            m = u;
            v = c;
            E = ">";
            d = ">=";
            break;
          case "<":
            p = c;
            m = h;
            v = l;
            E = "<";
            d = "<=";
            break;
          default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (a(e, t, f)) {
          return false;
        }
        for (let n = 0; n < t.set.length; ++n) {
          const r = t.set[n];
          let o = null;
          let a = null;
          r.forEach((e) => {
            if (e.semver === i) {
              e = new s(">=0.0.0");
            }
            o = o || e;
            a = a || e;
            if (p(e.semver, o.semver, f)) {
              o = e;
            } else if (v(e.semver, a.semver, f)) {
              a = e;
            }
          });
          if (o.operator === E || o.operator === d) {
            return false;
          }
          if ((!a.operator || a.operator === E) && m(e, a.semver)) {
            return false;
          } else if (a.operator === d && v(e, a.semver)) {
            return false;
          }
        }
        return true;
      };
      e.exports = f;
    },
    17908: (e, t, r) => {
      const n = r(45712);
      const s = r(46269);
      e.exports = (e, t, r) => {
        const i = [];
        let o = null;
        let a = null;
        const l = e.sort((e, t) => s(e, t, r));
        for (const s of l) {
          const e = n(s, t, r);
          if (e) {
            a = s;
            if (!o) {
              o = s;
            }
          } else {
            if (a) {
              i.push([o, a]);
            }
            a = null;
            o = null;
          }
        }
        if (o) {
          i.push([o, null]);
        }
        const c = [];
        for (const [n, s] of i) {
          if (n === s) {
            c.push(n);
          } else if (!s && n === l[0]) {
            c.push("*");
          } else if (!s) {
            c.push(`>=${n}`);
          } else if (n === l[0]) {
            c.push(`<=${s}`);
          } else {
            c.push(`${n} - ${s}`);
          }
        }
        const u = c.join(" || ");
        const h = typeof t.raw === "string" ? t.raw : String(t);
        return u.length < h.length ? u : t;
      };
    },
    50799: (e, t, r) => {
      const n = r(66902);
      const s = r(22257);
      const { ANY: i } = s;
      const o = r(45712);
      const a = r(46269);
      const l = (e, t, r = {}) => {
        if (e === t) {
          return true;
        }
        e = new n(e, r);
        t = new n(t, r);
        let s = false;
        e: for (const n of e.set) {
          for (const e of t.set) {
            const t = h(n, e, r);
            s = s || t !== null;
            if (t) {
              continue e;
            }
          }
          if (s) {
            return false;
          }
        }
        return true;
      };
      const c = [new s(">=0.0.0-0")];
      const u = [new s(">=0.0.0")];
      const h = (e, t, r) => {
        if (e === t) {
          return true;
        }
        if (e.length === 1 && e[0].semver === i) {
          if (t.length === 1 && t[0].semver === i) {
            return true;
          } else if (r.includePrerelease) {
            e = c;
          } else {
            e = u;
          }
        }
        if (t.length === 1 && t[0].semver === i) {
          if (r.includePrerelease) {
            return true;
          } else {
            t = u;
          }
        }
        const n = new Set();
        let s, l;
        for (const i of e) {
          if (i.operator === ">" || i.operator === ">=") {
            s = f(s, i, r);
          } else if (i.operator === "<" || i.operator === "<=") {
            l = p(l, i, r);
          } else {
            n.add(i.semver);
          }
        }
        if (n.size > 1) {
          return null;
        }
        let h;
        if (s && l) {
          h = a(s.semver, l.semver, r);
          if (h > 0) {
            return null;
          } else if (h === 0 && (s.operator !== ">=" || l.operator !== "<=")) {
            return null;
          }
        }
        for (const i of n) {
          if (s && !o(i, String(s), r)) {
            return null;
          }
          if (l && !o(i, String(l), r)) {
            return null;
          }
          for (const e of t) {
            if (!o(i, String(e), r)) {
              return false;
            }
          }
          return true;
        }
        let m, v;
        let E, d;
        let g = l && !r.includePrerelease && l.semver.prerelease.length ? l.semver : false;
        let y = s && !r.includePrerelease && s.semver.prerelease.length ? s.semver : false;
        if (g && g.prerelease.length === 1 && l.operator === "<" && g.prerelease[0] === 0) {
          g = false;
        }
        for (const i of t) {
          d = d || i.operator === ">" || i.operator === ">=";
          E = E || i.operator === "<" || i.operator === "<=";
          if (s) {
            if (y) {
              if (
                i.semver.prerelease &&
                i.semver.prerelease.length &&
                i.semver.major === y.major &&
                i.semver.minor === y.minor &&
                i.semver.patch === y.patch
              ) {
                y = false;
              }
            }
            if (i.operator === ">" || i.operator === ">=") {
              m = f(s, i, r);
              if (m === i && m !== s) {
                return false;
              }
            } else if (s.operator === ">=" && !o(s.semver, String(i), r)) {
              return false;
            }
          }
          if (l) {
            if (g) {
              if (
                i.semver.prerelease &&
                i.semver.prerelease.length &&
                i.semver.major === g.major &&
                i.semver.minor === g.minor &&
                i.semver.patch === g.patch
              ) {
                g = false;
              }
            }
            if (i.operator === "<" || i.operator === "<=") {
              v = p(l, i, r);
              if (v === i && v !== l) {
                return false;
              }
            } else if (l.operator === "<=" && !o(l.semver, String(i), r)) {
              return false;
            }
          }
          if (!i.operator && (l || s) && h !== 0) {
            return false;
          }
        }
        if (s && E && !l && h !== 0) {
          return false;
        }
        if (l && d && !s && h !== 0) {
          return false;
        }
        if (y || g) {
          return false;
        }
        return true;
      };
      const f = (e, t, r) => {
        if (!e) {
          return t;
        }
        const n = a(e.semver, t.semver, r);
        return n > 0 ? e : n < 0 ? t : t.operator === ">" && e.operator === ">=" ? t : e;
      };
      const p = (e, t, r) => {
        if (!e) {
          return t;
        }
        const n = a(e.semver, t.semver, r);
        return n < 0 ? e : n > 0 ? t : t.operator === "<" && e.operator === "<=" ? t : e;
      };
      e.exports = l;
    },
    51042: (e, t, r) => {
      const n = r(66902);
      const s = (e, t) =>
        new n(e, t).set.map((e) =>
          e
            .map((e) => e.value)
            .join(" ")
            .trim()
            .split(" ")
        );
      e.exports = s;
    },
    89042: (e, t, r) => {
      const n = r(66902);
      const s = (e, t) => {
        try {
          return new n(e, t).range || "*";
        } catch (r) {
          return null;
        }
      };
      e.exports = s;
    },
    49602: (e) => {
      "use strict";
      e.exports = function (e) {
        e.prototype[Symbol.iterator] = function* () {
          for (let e = this.head; e; e = e.next) {
            yield e.value;
          }
        };
      };
    },
    34411: (e, t, r) => {
      "use strict";
      e.exports = n;
      n.Node = a;
      n.create = n;
      function n(e) {
        var t = this;
        if (!(t instanceof n)) {
          t = new n();
        }
        t.tail = null;
        t.head = null;
        t.length = 0;
        if (e && typeof e.forEach === "function") {
          e.forEach(function (e) {
            t.push(e);
          });
        } else if (arguments.length > 0) {
          for (var r = 0, s = arguments.length; r < s; r++) {
            t.push(arguments[r]);
          }
        }
        return t;
      }
      n.prototype.removeNode = function (e) {
        if (e.list !== this) {
          throw new Error("removing node which does not belong to this list");
        }
        var t = e.next;
        var r = e.prev;
        if (t) {
          t.prev = r;
        }
        if (r) {
          r.next = t;
        }
        if (e === this.head) {
          this.head = t;
        }
        if (e === this.tail) {
          this.tail = r;
        }
        e.list.length--;
        e.next = null;
        e.prev = null;
        e.list = null;
        return t;
      };
      n.prototype.unshiftNode = function (e) {
        if (e === this.head) {
          return;
        }
        if (e.list) {
          e.list.removeNode(e);
        }
        var t = this.head;
        e.list = this;
        e.next = t;
        if (t) {
          t.prev = e;
        }
        this.head = e;
        if (!this.tail) {
          this.tail = e;
        }
        this.length++;
      };
      n.prototype.pushNode = function (e) {
        if (e === this.tail) {
          return;
        }
        if (e.list) {
          e.list.removeNode(e);
        }
        var t = this.tail;
        e.list = this;
        e.prev = t;
        if (t) {
          t.next = e;
        }
        this.tail = e;
        if (!this.head) {
          this.head = e;
        }
        this.length++;
      };
      n.prototype.push = function () {
        for (var e = 0, t = arguments.length; e < t; e++) {
          i(this, arguments[e]);
        }
        return this.length;
      };
      n.prototype.unshift = function () {
        for (var e = 0, t = arguments.length; e < t; e++) {
          o(this, arguments[e]);
        }
        return this.length;
      };
      n.prototype.pop = function () {
        if (!this.tail) {
          return undefined;
        }
        var e = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) {
          this.tail.next = null;
        } else {
          this.head = null;
        }
        this.length--;
        return e;
      };
      n.prototype.shift = function () {
        if (!this.head) {
          return undefined;
        }
        var e = this.head.value;
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = null;
        } else {
          this.tail = null;
        }
        this.length--;
        return e;
      };
      n.prototype.forEach = function (e, t) {
        t = t || this;
        for (var r = this.head, n = 0; r !== null; n++) {
          e.call(t, r.value, n, this);
          r = r.next;
        }
      };
      n.prototype.forEachReverse = function (e, t) {
        t = t || this;
        for (var r = this.tail, n = this.length - 1; r !== null; n--) {
          e.call(t, r.value, n, this);
          r = r.prev;
        }
      };
      n.prototype.get = function (e) {
        for (var t = 0, r = this.head; r !== null && t < e; t++) {
          r = r.next;
        }
        if (t === e && r !== null) {
          return r.value;
        }
      };
      n.prototype.getReverse = function (e) {
        for (var t = 0, r = this.tail; r !== null && t < e; t++) {
          r = r.prev;
        }
        if (t === e && r !== null) {
          return r.value;
        }
      };
      n.prototype.map = function (e, t) {
        t = t || this;
        var r = new n();
        for (var s = this.head; s !== null; ) {
          r.push(e.call(t, s.value, this));
          s = s.next;
        }
        return r;
      };
      n.prototype.mapReverse = function (e, t) {
        t = t || this;
        var r = new n();
        for (var s = this.tail; s !== null; ) {
          r.push(e.call(t, s.value, this));
          s = s.prev;
        }
        return r;
      };
      n.prototype.reduce = function (e, t) {
        var r;
        var n = this.head;
        if (arguments.length > 1) {
          r = t;
        } else if (this.head) {
          n = this.head.next;
          r = this.head.value;
        } else {
          throw new TypeError("Reduce of empty list with no initial value");
        }
        for (var s = 0; n !== null; s++) {
          r = e(r, n.value, s);
          n = n.next;
        }
        return r;
      };
      n.prototype.reduceReverse = function (e, t) {
        var r;
        var n = this.tail;
        if (arguments.length > 1) {
          r = t;
        } else if (this.tail) {
          n = this.tail.prev;
          r = this.tail.value;
        } else {
          throw new TypeError("Reduce of empty list with no initial value");
        }
        for (var s = this.length - 1; n !== null; s--) {
          r = e(r, n.value, s);
          n = n.prev;
        }
        return r;
      };
      n.prototype.toArray = function () {
        var e = new Array(this.length);
        for (var t = 0, r = this.head; r !== null; t++) {
          e[t] = r.value;
          r = r.next;
        }
        return e;
      };
      n.prototype.toArrayReverse = function () {
        var e = new Array(this.length);
        for (var t = 0, r = this.tail; r !== null; t++) {
          e[t] = r.value;
          r = r.prev;
        }
        return e;
      };
      n.prototype.slice = function (e, t) {
        t = t || this.length;
        if (t < 0) {
          t += this.length;
        }
        e = e || 0;
        if (e < 0) {
          e += this.length;
        }
        var r = new n();
        if (t < e || t < 0) {
          return r;
        }
        if (e < 0) {
          e = 0;
        }
        if (t > this.length) {
          t = this.length;
        }
        for (var s = 0, i = this.head; i !== null && s < e; s++) {
          i = i.next;
        }
        for (; i !== null && s < t; s++, i = i.next) {
          r.push(i.value);
        }
        return r;
      };
      n.prototype.sliceReverse = function (e, t) {
        t = t || this.length;
        if (t < 0) {
          t += this.length;
        }
        e = e || 0;
        if (e < 0) {
          e += this.length;
        }
        var r = new n();
        if (t < e || t < 0) {
          return r;
        }
        if (e < 0) {
          e = 0;
        }
        if (t > this.length) {
          t = this.length;
        }
        for (var s = this.length, i = this.tail; i !== null && s > t; s--) {
          i = i.prev;
        }
        for (; i !== null && s > e; s--, i = i.prev) {
          r.push(i.value);
        }
        return r;
      };
      n.prototype.splice = function (e, t, ...r) {
        if (e > this.length) {
          e = this.length - 1;
        }
        if (e < 0) {
          e = this.length + e;
        }
        for (var n = 0, i = this.head; i !== null && n < e; n++) {
          i = i.next;
        }
        var o = [];
        for (var n = 0; i && n < t; n++) {
          o.push(i.value);
          i = this.removeNode(i);
        }
        if (i === null) {
          i = this.tail;
        }
        if (i !== this.head && i !== this.tail) {
          i = i.prev;
        }
        for (var n = 0; n < r.length; n++) {
          i = s(this, i, r[n]);
        }
        return o;
      };
      n.prototype.reverse = function () {
        var e = this.head;
        var t = this.tail;
        for (var r = e; r !== null; r = r.prev) {
          var n = r.prev;
          r.prev = r.next;
          r.next = n;
        }
        this.head = t;
        this.tail = e;
        return this;
      };
      function s(e, t, r) {
        var n = t === e.head ? new a(r, null, t, e) : new a(r, t, t.next, e);
        if (n.next === null) {
          e.tail = n;
        }
        if (n.prev === null) {
          e.head = n;
        }
        e.length++;
        return n;
      }
      function i(e, t) {
        e.tail = new a(t, e.tail, null, e);
        if (!e.head) {
          e.head = e.tail;
        }
        e.length++;
      }
      function o(e, t) {
        e.head = new a(t, null, e.head, e);
        if (!e.tail) {
          e.tail = e.head;
        }
        e.length++;
      }
      function a(e, t, r, n) {
        if (!(this instanceof a)) {
          return new a(e, t, r, n);
        }
        this.list = n;
        this.value = e;
        if (t) {
          t.next = this;
          this.prev = t;
        } else {
          this.prev = null;
        }
        if (r) {
          r.prev = this;
          this.next = r;
        } else {
          this.next = null;
        }
      }
      try {
        r(49602)(n);
      } catch (l) {}
    },
  },
]);
