/*! For license information please see 7294.badf85a3180703d63f62.js.LICENSE.txt */
"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7294],
  {
    72408: (e, t) => {
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        u = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        c = Symbol.for("react.provider"),
        i = Symbol.for("react.context"),
        f = Symbol.for("react.forward_ref"),
        l = Symbol.for("react.suspense"),
        s = Symbol.for("react.memo"),
        p = Symbol.for("react.lazy"),
        y = Symbol.iterator;
      function d(e) {
        if (null === e || "object" !== typeof e) return null;
        e = (y && e[y]) || e["@@iterator"];
        return "function" === typeof e ? e : null;
      }
      var _ = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        h = Object.assign,
        b = {};
      function m(e, t, r) {
        this.props = e;
        this.context = t;
        this.refs = b;
        this.updater = r || _;
      }
      m.prototype.isReactComponent = {};
      m.prototype.setState = function (e, t) {
        if ("object" !== typeof e && "function" !== typeof e && null != e)
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      };
      m.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      function v() {}
      v.prototype = m.prototype;
      function S(e, t, r) {
        this.props = e;
        this.context = t;
        this.refs = b;
        this.updater = r || _;
      }
      var k = (S.prototype = new v());
      k.constructor = S;
      h(k, m.prototype);
      k.isPureReactComponent = !0;
      var w = Array.isArray,
        E = Object.prototype.hasOwnProperty,
        $ = { current: null },
        R = { key: !0, ref: !0, __self: !0, __source: !0 };
      function C(e, t, n) {
        var o,
          u = {},
          a = null,
          c = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (c = t.ref), void 0 !== t.key && (a = "" + t.key), t)) E.call(t, o) && !R.hasOwnProperty(o) && (u[o] = t[o]);
        var i = arguments.length - 2;
        if (1 === i) u.children = n;
        else if (1 < i) {
          for (var f = Array(i), l = 0; l < i; l++) f[l] = arguments[l + 2];
          u.children = f;
        }
        if (e && e.defaultProps) for (o in ((i = e.defaultProps), i)) void 0 === u[o] && (u[o] = i[o]);
        return { $$typeof: r, type: e, key: a, ref: c, props: u, _owner: $.current };
      }
      function j(e, t) {
        return { $$typeof: r, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
      }
      function g(e) {
        return "object" === typeof e && null !== e && e.$$typeof === r;
      }
      function O(e) {
        var t = { "=": "=0", ":": "=2" };
        return (
          "$" +
          e.replace(/[=:]/g, function (e) {
            return t[e];
          })
        );
      }
      var x = /\/+/g;
      function P(e, t) {
        return "object" === typeof e && null !== e && null != e.key ? O("" + e.key) : t.toString(36);
      }
      function I(e, t, o, u, a) {
        var c = typeof e;
        if ("undefined" === c || "boolean" === c) e = null;
        var i = !1;
        if (null === e) i = !0;
        else
          switch (c) {
            case "string":
            case "number":
              i = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case r:
                case n:
                  i = !0;
              }
          }
        if (i)
          return (
            (i = e),
            (a = a(i)),
            (e = "" === u ? "." + P(i, 0) : u),
            w(a)
              ? ((o = ""),
                null != e && (o = e.replace(x, "$&/") + "/"),
                I(a, t, o, "", function (e) {
                  return e;
                }))
              : null != a && (g(a) && (a = j(a, o + (!a.key || (i && i.key === a.key) ? "" : ("" + a.key).replace(x, "$&/") + "/") + e)), t.push(a)),
            1
          );
        i = 0;
        u = "" === u ? "." : u + ":";
        if (w(e))
          for (var f = 0; f < e.length; f++) {
            c = e[f];
            var l = u + P(c, f);
            i += I(c, t, o, l, a);
          }
        else if (((l = d(e)), "function" === typeof l))
          for (e = l.call(e), f = 0; !(c = e.next()).done; ) (c = c.value), (l = u + P(c, f++)), (i += I(c, t, o, l, a));
        else if ("object" === c)
          throw (
            ((t = String(e)),
            Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
                "). If you meant to render a collection of children, use an array instead."
            ))
          );
        return i;
      }
      function T(e, t, r) {
        if (null == e) return e;
        var n = [],
          o = 0;
        I(e, n, "", "", function (e) {
          return t.call(r, e, o++);
        });
        return n;
      }
      function V(e) {
        if (-1 === e._status) {
          var t = e._result;
          t = t();
          t.then(
            function (t) {
              if (0 === e._status || -1 === e._status) (e._status = 1), (e._result = t);
            },
            function (t) {
              if (0 === e._status || -1 === e._status) (e._status = 2), (e._result = t);
            }
          );
          -1 === e._status && ((e._status = 0), (e._result = t));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var A = { current: null },
        D = { transition: null },
        U = { ReactCurrentDispatcher: A, ReactCurrentBatchConfig: D, ReactCurrentOwner: $ };
      t.Children = {
        map: T,
        forEach: function (e, t, r) {
          T(
            e,
            function () {
              t.apply(this, arguments);
            },
            r
          );
        },
        count: function (e) {
          var t = 0;
          T(e, function () {
            t++;
          });
          return t;
        },
        toArray: function (e) {
          return (
            T(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!g(e)) throw Error("React.Children.only expected to receive a single React element child.");
          return e;
        },
      };
      t.Component = m;
      t.Fragment = o;
      t.Profiler = a;
      t.PureComponent = S;
      t.StrictMode = u;
      t.Suspense = l;
      t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U;
      t.cloneElement = function (e, t, n) {
        if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o = h({}, e.props),
          u = e.key,
          a = e.ref,
          c = e._owner;
        if (null != t) {
          void 0 !== t.ref && ((a = t.ref), (c = $.current));
          void 0 !== t.key && (u = "" + t.key);
          if (e.type && e.type.defaultProps) var i = e.type.defaultProps;
          for (f in t) E.call(t, f) && !R.hasOwnProperty(f) && (o[f] = void 0 === t[f] && void 0 !== i ? i[f] : t[f]);
        }
        var f = arguments.length - 2;
        if (1 === f) o.children = n;
        else if (1 < f) {
          i = Array(f);
          for (var l = 0; l < f; l++) i[l] = arguments[l + 2];
          o.children = i;
        }
        return { $$typeof: r, type: e.type, key: u, ref: a, props: o, _owner: c };
      };
      t.createContext = function (e) {
        e = {
          $$typeof: i,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        };
        e.Provider = { $$typeof: c, _context: e };
        return (e.Consumer = e);
      };
      t.createElement = C;
      t.createFactory = function (e) {
        var t = C.bind(null, e);
        t.type = e;
        return t;
      };
      t.createRef = function () {
        return { current: null };
      };
      t.forwardRef = function (e) {
        return { $$typeof: f, render: e };
      };
      t.isValidElement = g;
      t.lazy = function (e) {
        return { $$typeof: p, _payload: { _status: -1, _result: e }, _init: V };
      };
      t.memo = function (e, t) {
        return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
      };
      t.startTransition = function (e) {
        var t = D.transition;
        D.transition = {};
        try {
          e();
        } finally {
          D.transition = t;
        }
      };
      t.unstable_act = function () {
        throw Error("act(...) is not supported in production builds of React.");
      };
      t.useCallback = function (e, t) {
        return A.current.useCallback(e, t);
      };
      t.useContext = function (e) {
        return A.current.useContext(e);
      };
      t.useDebugValue = function () {};
      t.useDeferredValue = function (e) {
        return A.current.useDeferredValue(e);
      };
      t.useEffect = function (e, t) {
        return A.current.useEffect(e, t);
      };
      t.useId = function () {
        return A.current.useId();
      };
      t.useImperativeHandle = function (e, t, r) {
        return A.current.useImperativeHandle(e, t, r);
      };
      t.useInsertionEffect = function (e, t) {
        return A.current.useInsertionEffect(e, t);
      };
      t.useLayoutEffect = function (e, t) {
        return A.current.useLayoutEffect(e, t);
      };
      t.useMemo = function (e, t) {
        return A.current.useMemo(e, t);
      };
      t.useReducer = function (e, t, r) {
        return A.current.useReducer(e, t, r);
      };
      t.useRef = function (e) {
        return A.current.useRef(e);
      };
      t.useState = function (e) {
        return A.current.useState(e);
      };
      t.useSyncExternalStore = function (e, t, r) {
        return A.current.useSyncExternalStore(e, t, r);
      };
      t.useTransition = function () {
        return A.current.useTransition();
      };
      t.version = "18.2.0";
    },
    67294: (e, t, r) => {
      if (true) {
        e.exports = r(72408);
      } else {
      }
    },
  },
]);
