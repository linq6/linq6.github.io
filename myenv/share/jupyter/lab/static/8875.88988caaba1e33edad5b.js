(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [8875],
  {
    38554: (e, t, r) => {
      e = r.nmd(e);
      var n = 200;
      var s = "__lodash_hash_undefined__";
      var i = 800,
        o = 16;
      var a = 9007199254740991;
      var c = "[object Arguments]",
        u = "[object Array]",
        f = "[object AsyncFunction]",
        l = "[object Boolean]",
        d = "[object Date]",
        h = "[object Error]",
        p = "[object Function]",
        g = "[object GeneratorFunction]",
        m = "[object Map]",
        y = "[object Number]",
        b = "[object Null]",
        v = "[object Object]",
        _ = "[object Proxy]",
        w = "[object RegExp]",
        T = "[object Set]",
        E = "[object String]",
        S = "[object Undefined]",
        C = "[object WeakMap]";
      var R = "[object ArrayBuffer]",
        k = "[object DataView]",
        M = "[object Float32Array]",
        j = "[object Float64Array]",
        O = "[object Int8Array]",
        P = "[object Int16Array]",
        N = "[object Int32Array]",
        x = "[object Uint8Array]",
        L = "[object Uint8ClampedArray]",
        q = "[object Uint16Array]",
        A = "[object Uint32Array]";
      var $ = /[\\^$.*+?()[\]{}|]/g;
      var D = /^\[object .+?Constructor\]$/;
      var z = /^(?:0|[1-9]\d*)$/;
      var I = {};
      I[M] = I[j] = I[O] = I[P] = I[N] = I[x] = I[L] = I[q] = I[A] = true;
      I[c] = I[u] = I[R] = I[l] = I[k] = I[d] = I[h] = I[p] = I[m] = I[y] = I[v] = I[w] = I[T] = I[E] = I[C] = false;
      var W = typeof r.g == "object" && r.g && r.g.Object === Object && r.g;
      var B = typeof self == "object" && self && self.Object === Object && self;
      var F = W || B || Function("return this")();
      var U = true && t && !t.nodeType && t;
      var V = U && "object" == "object" && e && !e.nodeType && e;
      var J = V && V.exports === U;
      var H = J && W.process;
      var G = (function () {
        try {
          var e = V && V.require && V.require("util").types;
          if (e) {
            return e;
          }
          return H && H.binding && H.binding("util");
        } catch (t) {}
      })();
      var K = G && G.isTypedArray;
      function Q(e, t, r) {
        switch (r.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, r[0]);
          case 2:
            return e.call(t, r[0], r[1]);
          case 3:
            return e.call(t, r[0], r[1], r[2]);
        }
        return e.apply(t, r);
      }
      function X(e, t) {
        var r = -1,
          n = Array(e);
        while (++r < e) {
          n[r] = t(r);
        }
        return n;
      }
      function Y(e) {
        return function (t) {
          return e(t);
        };
      }
      function Z(e, t) {
        return e == null ? undefined : e[t];
      }
      function ee(e, t) {
        return function (r) {
          return e(t(r));
        };
      }
      var te = Array.prototype,
        re = Function.prototype,
        ne = Object.prototype;
      var se = F["__core-js_shared__"];
      var ie = re.toString;
      var oe = ne.hasOwnProperty;
      var ae = (function () {
        var e = /[^.]+$/.exec((se && se.keys && se.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
      var ce = ne.toString;
      var ue = ie.call(Object);
      var fe = RegExp(
        "^" +
          ie
            .call(oe)
            .replace($, "\\$&")
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
          "$"
      );
      var le = J ? F.Buffer : undefined,
        de = F.Symbol,
        he = F.Uint8Array,
        pe = le ? le.allocUnsafe : undefined,
        ge = ee(Object.getPrototypeOf, Object),
        me = Object.create,
        ye = ne.propertyIsEnumerable,
        be = te.splice,
        ve = de ? de.toStringTag : undefined;
      var _e = (function () {
        try {
          var e = _t(Object, "defineProperty");
          e({}, "", {});
          return e;
        } catch (t) {}
      })();
      var we = le ? le.isBuffer : undefined,
        Te = Math.max,
        Ee = Date.now;
      var Se = _t(F, "Map"),
        Ce = _t(Object, "create");
      var Re = (function () {
        function e() {}
        return function (t) {
          if (!Ft(t)) {
            return {};
          }
          if (me) {
            return me(t);
          }
          e.prototype = t;
          var r = new e();
          e.prototype = undefined;
          return r;
        };
      })();
      function ke(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        this.clear();
        while (++t < r) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function Me() {
        this.__data__ = Ce ? Ce(null) : {};
        this.size = 0;
      }
      function je(e) {
        var t = this.has(e) && delete this.__data__[e];
        this.size -= t ? 1 : 0;
        return t;
      }
      function Oe(e) {
        var t = this.__data__;
        if (Ce) {
          var r = t[e];
          return r === s ? undefined : r;
        }
        return oe.call(t, e) ? t[e] : undefined;
      }
      function Pe(e) {
        var t = this.__data__;
        return Ce ? t[e] !== undefined : oe.call(t, e);
      }
      function Ne(e, t) {
        var r = this.__data__;
        this.size += this.has(e) ? 0 : 1;
        r[e] = Ce && t === undefined ? s : t;
        return this;
      }
      ke.prototype.clear = Me;
      ke.prototype["delete"] = je;
      ke.prototype.get = Oe;
      ke.prototype.has = Pe;
      ke.prototype.set = Ne;
      function xe(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        this.clear();
        while (++t < r) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function Le() {
        this.__data__ = [];
        this.size = 0;
      }
      function qe(e) {
        var t = this.__data__,
          r = et(t, e);
        if (r < 0) {
          return false;
        }
        var n = t.length - 1;
        if (r == n) {
          t.pop();
        } else {
          be.call(t, r, 1);
        }
        --this.size;
        return true;
      }
      function Ae(e) {
        var t = this.__data__,
          r = et(t, e);
        return r < 0 ? undefined : t[r][1];
      }
      function $e(e) {
        return et(this.__data__, e) > -1;
      }
      function De(e, t) {
        var r = this.__data__,
          n = et(r, e);
        if (n < 0) {
          ++this.size;
          r.push([e, t]);
        } else {
          r[n][1] = t;
        }
        return this;
      }
      xe.prototype.clear = Le;
      xe.prototype["delete"] = qe;
      xe.prototype.get = Ae;
      xe.prototype.has = $e;
      xe.prototype.set = De;
      function ze(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        this.clear();
        while (++t < r) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function Ie() {
        this.size = 0;
        this.__data__ = { hash: new ke(), map: new (Se || xe)(), string: new ke() };
      }
      function We(e) {
        var t = vt(this, e)["delete"](e);
        this.size -= t ? 1 : 0;
        return t;
      }
      function Be(e) {
        return vt(this, e).get(e);
      }
      function Fe(e) {
        return vt(this, e).has(e);
      }
      function Ue(e, t) {
        var r = vt(this, e),
          n = r.size;
        r.set(e, t);
        this.size += r.size == n ? 0 : 1;
        return this;
      }
      ze.prototype.clear = Ie;
      ze.prototype["delete"] = We;
      ze.prototype.get = Be;
      ze.prototype.has = Fe;
      ze.prototype.set = Ue;
      function Ve(e) {
        var t = (this.__data__ = new xe(e));
        this.size = t.size;
      }
      function Je() {
        this.__data__ = new xe();
        this.size = 0;
      }
      function He(e) {
        var t = this.__data__,
          r = t["delete"](e);
        this.size = t.size;
        return r;
      }
      function Ge(e) {
        return this.__data__.get(e);
      }
      function Ke(e) {
        return this.__data__.has(e);
      }
      function Qe(e, t) {
        var r = this.__data__;
        if (r instanceof xe) {
          var s = r.__data__;
          if (!Se || s.length < n - 1) {
            s.push([e, t]);
            this.size = ++r.size;
            return this;
          }
          r = this.__data__ = new ze(s);
        }
        r.set(e, t);
        this.size = r.size;
        return this;
      }
      Ve.prototype.clear = Je;
      Ve.prototype["delete"] = He;
      Ve.prototype.get = Ge;
      Ve.prototype.has = Ke;
      Ve.prototype.set = Qe;
      function Xe(e, t) {
        var r = $t(e),
          n = !r && At(e),
          s = !r && !n && It(e),
          i = !r && !n && !s && Jt(e),
          o = r || n || s || i,
          a = o ? X(e.length, String) : [],
          c = a.length;
        for (var u in e) {
          if (
            (t || oe.call(e, u)) &&
            !(
              o &&
              (u == "length" ||
                (s && (u == "offset" || u == "parent")) ||
                (i && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
                Et(u, c))
            )
          ) {
            a.push(u);
          }
        }
        return a;
      }
      function Ye(e, t, r) {
        if ((r !== undefined && !qt(e[t], r)) || (r === undefined && !(t in e))) {
          tt(e, t, r);
        }
      }
      function Ze(e, t, r) {
        var n = e[t];
        if (!(oe.call(e, t) && qt(n, r)) || (r === undefined && !(t in e))) {
          tt(e, t, r);
        }
      }
      function et(e, t) {
        var r = e.length;
        while (r--) {
          if (qt(e[r][0], t)) {
            return r;
          }
        }
        return -1;
      }
      function tt(e, t, r) {
        if (t == "__proto__" && _e) {
          _e(e, t, { configurable: true, enumerable: true, value: r, writable: true });
        } else {
          e[t] = r;
        }
      }
      var rt = bt();
      function nt(e) {
        if (e == null) {
          return e === undefined ? S : b;
        }
        return ve && ve in Object(e) ? wt(e) : jt(e);
      }
      function st(e) {
        return Ut(e) && nt(e) == c;
      }
      function it(e) {
        if (!Ft(e) || Rt(e)) {
          return false;
        }
        var t = Wt(e) ? fe : D;
        return t.test(Lt(e));
      }
      function ot(e) {
        return Ut(e) && Bt(e.length) && !!I[nt(e)];
      }
      function at(e) {
        if (!Ft(e)) {
          return Mt(e);
        }
        var t = kt(e),
          r = [];
        for (var n in e) {
          if (!(n == "constructor" && (t || !oe.call(e, n)))) {
            r.push(n);
          }
        }
        return r;
      }
      function ct(e, t, r, n, s) {
        if (e === t) {
          return;
        }
        rt(
          t,
          function (i, o) {
            s || (s = new Ve());
            if (Ft(i)) {
              ut(e, t, o, r, ct, n, s);
            } else {
              var a = n ? n(Pt(e, o), i, o + "", e, t, s) : undefined;
              if (a === undefined) {
                a = i;
              }
              Ye(e, o, a);
            }
          },
          Gt
        );
      }
      function ut(e, t, r, n, s, i, o) {
        var a = Pt(e, r),
          c = Pt(t, r),
          u = o.get(c);
        if (u) {
          Ye(e, r, u);
          return;
        }
        var f = i ? i(a, c, r + "", e, t, o) : undefined;
        var l = f === undefined;
        if (l) {
          var d = $t(c),
            h = !d && It(c),
            p = !d && !h && Jt(c);
          f = c;
          if (d || h || p) {
            if ($t(a)) {
              f = a;
            } else if (zt(a)) {
              f = gt(a);
            } else if (h) {
              l = false;
              f = dt(c, true);
            } else if (p) {
              l = false;
              f = pt(c, true);
            } else {
              f = [];
            }
          } else if (Vt(c) || At(c)) {
            f = a;
            if (At(a)) {
              f = Ht(a);
            } else if (!Ft(a) || Wt(a)) {
              f = Tt(c);
            }
          } else {
            l = false;
          }
        }
        if (l) {
          o.set(c, f);
          s(f, c, n, i, o);
          o["delete"](c);
        }
        Ye(e, r, f);
      }
      function ft(e, t) {
        return Nt(Ot(e, t, Xt), e + "");
      }
      var lt = !_e
        ? Xt
        : function (e, t) {
            return _e(e, "toString", { configurable: true, enumerable: false, value: Qt(t), writable: true });
          };
      function dt(e, t) {
        if (t) {
          return e.slice();
        }
        var r = e.length,
          n = pe ? pe(r) : new e.constructor(r);
        e.copy(n);
        return n;
      }
      function ht(e) {
        var t = new e.constructor(e.byteLength);
        new he(t).set(new he(e));
        return t;
      }
      function pt(e, t) {
        var r = t ? ht(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      }
      function gt(e, t) {
        var r = -1,
          n = e.length;
        t || (t = Array(n));
        while (++r < n) {
          t[r] = e[r];
        }
        return t;
      }
      function mt(e, t, r, n) {
        var s = !r;
        r || (r = {});
        var i = -1,
          o = t.length;
        while (++i < o) {
          var a = t[i];
          var c = n ? n(r[a], e[a], a, r, e) : undefined;
          if (c === undefined) {
            c = e[a];
          }
          if (s) {
            tt(r, a, c);
          } else {
            Ze(r, a, c);
          }
        }
        return r;
      }
      function yt(e) {
        return ft(function (t, r) {
          var n = -1,
            s = r.length,
            i = s > 1 ? r[s - 1] : undefined,
            o = s > 2 ? r[2] : undefined;
          i = e.length > 3 && typeof i == "function" ? (s--, i) : undefined;
          if (o && St(r[0], r[1], o)) {
            i = s < 3 ? undefined : i;
            s = 1;
          }
          t = Object(t);
          while (++n < s) {
            var a = r[n];
            if (a) {
              e(t, a, n, i);
            }
          }
          return t;
        });
      }
      function bt(e) {
        return function (t, r, n) {
          var s = -1,
            i = Object(t),
            o = n(t),
            a = o.length;
          while (a--) {
            var c = o[e ? a : ++s];
            if (r(i[c], c, i) === false) {
              break;
            }
          }
          return t;
        };
      }
      function vt(e, t) {
        var r = e.__data__;
        return Ct(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
      }
      function _t(e, t) {
        var r = Z(e, t);
        return it(r) ? r : undefined;
      }
      function wt(e) {
        var t = oe.call(e, ve),
          r = e[ve];
        try {
          e[ve] = undefined;
          var n = true;
        } catch (i) {}
        var s = ce.call(e);
        if (n) {
          if (t) {
            e[ve] = r;
          } else {
            delete e[ve];
          }
        }
        return s;
      }
      function Tt(e) {
        return typeof e.constructor == "function" && !kt(e) ? Re(ge(e)) : {};
      }
      function Et(e, t) {
        var r = typeof e;
        t = t == null ? a : t;
        return !!t && (r == "number" || (r != "symbol" && z.test(e))) && e > -1 && e % 1 == 0 && e < t;
      }
      function St(e, t, r) {
        if (!Ft(r)) {
          return false;
        }
        var n = typeof t;
        if (n == "number" ? Dt(r) && Et(t, r.length) : n == "string" && t in r) {
          return qt(r[t], e);
        }
        return false;
      }
      function Ct(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Rt(e) {
        return !!ae && ae in e;
      }
      function kt(e) {
        var t = e && e.constructor,
          r = (typeof t == "function" && t.prototype) || ne;
        return e === r;
      }
      function Mt(e) {
        var t = [];
        if (e != null) {
          for (var r in Object(e)) {
            t.push(r);
          }
        }
        return t;
      }
      function jt(e) {
        return ce.call(e);
      }
      function Ot(e, t, r) {
        t = Te(t === undefined ? e.length - 1 : t, 0);
        return function () {
          var n = arguments,
            s = -1,
            i = Te(n.length - t, 0),
            o = Array(i);
          while (++s < i) {
            o[s] = n[t + s];
          }
          s = -1;
          var a = Array(t + 1);
          while (++s < t) {
            a[s] = n[s];
          }
          a[t] = r(o);
          return Q(e, this, a);
        };
      }
      function Pt(e, t) {
        if (t === "constructor" && typeof e[t] === "function") {
          return;
        }
        if (t == "__proto__") {
          return;
        }
        return e[t];
      }
      var Nt = xt(lt);
      function xt(e) {
        var t = 0,
          r = 0;
        return function () {
          var n = Ee(),
            s = o - (n - r);
          r = n;
          if (s > 0) {
            if (++t >= i) {
              return arguments[0];
            }
          } else {
            t = 0;
          }
          return e.apply(undefined, arguments);
        };
      }
      function Lt(e) {
        if (e != null) {
          try {
            return ie.call(e);
          } catch (t) {}
          try {
            return e + "";
          } catch (t) {}
        }
        return "";
      }
      function qt(e, t) {
        return e === t || (e !== e && t !== t);
      }
      var At = st(
        (function () {
          return arguments;
        })()
      )
        ? st
        : function (e) {
            return Ut(e) && oe.call(e, "callee") && !ye.call(e, "callee");
          };
      var $t = Array.isArray;
      function Dt(e) {
        return e != null && Bt(e.length) && !Wt(e);
      }
      function zt(e) {
        return Ut(e) && Dt(e);
      }
      var It = we || Yt;
      function Wt(e) {
        if (!Ft(e)) {
          return false;
        }
        var t = nt(e);
        return t == p || t == g || t == f || t == _;
      }
      function Bt(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= a;
      }
      function Ft(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function Ut(e) {
        return e != null && typeof e == "object";
      }
      function Vt(e) {
        if (!Ut(e) || nt(e) != v) {
          return false;
        }
        var t = ge(e);
        if (t === null) {
          return true;
        }
        var r = oe.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && ie.call(r) == ue;
      }
      var Jt = K ? Y(K) : ot;
      function Ht(e) {
        return mt(e, Gt(e));
      }
      function Gt(e) {
        return Dt(e) ? Xe(e, true) : at(e);
      }
      var Kt = yt(function (e, t, r, n) {
        ct(e, t, r, n);
      });
      function Qt(e) {
        return function () {
          return e;
        };
      }
      function Xt(e) {
        return e;
      }
      function Yt() {
        return false;
      }
      e.exports = Kt;
    },
    39054: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              if (n === undefined) n = r;
              var s = Object.getOwnPropertyDescriptor(t, r);
              if (!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) {
                s = {
                  enumerable: true,
                  get: function () {
                    return t[r];
                  },
                };
              }
              Object.defineProperty(e, n, s);
            }
          : function (e, t, r, n) {
              if (n === undefined) n = r;
              e[n] = t[r];
            });
      var s =
        (this && this.__exportStar) ||
        function (e, t) {
          for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.createMessageConnection = t.BrowserMessageWriter = t.BrowserMessageReader = void 0;
      const i = r(25669);
      i.default.install();
      const o = r(23870);
      s(r(23870), t);
      class a extends o.AbstractMessageReader {
        constructor(e) {
          super();
          this._onData = new o.Emitter();
          this._messageListener = (e) => {
            this._onData.fire(e.data);
          };
          e.addEventListener("error", (e) => this.fireError(e));
          e.onmessage = this._messageListener;
        }
        listen(e) {
          return this._onData.event(e);
        }
      }
      t.BrowserMessageReader = a;
      class c extends o.AbstractMessageWriter {
        constructor(e) {
          super();
          this.port = e;
          this.errorCount = 0;
          e.addEventListener("error", (e) => this.fireError(e));
        }
        write(e) {
          try {
            this.port.postMessage(e);
            return Promise.resolve();
          } catch (t) {
            this.handleError(t, e);
            return Promise.reject(t);
          }
        }
        handleError(e, t) {
          this.errorCount++;
          this.fireError(e, t, this.errorCount);
        }
        end() {}
      }
      t.BrowserMessageWriter = c;
      function u(e, t, r, n) {
        if (r === undefined) {
          r = o.NullLogger;
        }
        if (o.ConnectionStrategy.is(n)) {
          n = { connectionStrategy: n };
        }
        return (0, o.createMessageConnection)(e, t, r, n);
      }
      t.createMessageConnection = u;
    },
    25669: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const n = r(23870);
      class s extends n.AbstractMessageBuffer {
        constructor(e = "utf-8") {
          super(e);
          this.asciiDecoder = new TextDecoder("ascii");
        }
        emptyBuffer() {
          return s.emptyBuffer;
        }
        fromString(e, t) {
          return new TextEncoder().encode(e);
        }
        toString(e, t) {
          if (t === "ascii") {
            return this.asciiDecoder.decode(e);
          } else {
            return new TextDecoder(t).decode(e);
          }
        }
        asNative(e, t) {
          if (t === undefined) {
            return e;
          } else {
            return e.slice(0, t);
          }
        }
        allocNative(e) {
          return new Uint8Array(e);
        }
      }
      s.emptyBuffer = new Uint8Array(0);
      class i {
        constructor(e) {
          this.socket = e;
          this._onData = new n.Emitter();
          this._messageListener = (e) => {
            const t = e.data;
            t.arrayBuffer().then(
              (e) => {
                this._onData.fire(new Uint8Array(e));
              },
              () => {
                (0, n.RAL)().console.error(`Converting blob to array buffer failed.`);
              }
            );
          };
          this.socket.addEventListener("message", this._messageListener);
        }
        onClose(e) {
          this.socket.addEventListener("close", e);
          return n.Disposable.create(() => this.socket.removeEventListener("close", e));
        }
        onError(e) {
          this.socket.addEventListener("error", e);
          return n.Disposable.create(() => this.socket.removeEventListener("error", e));
        }
        onEnd(e) {
          this.socket.addEventListener("end", e);
          return n.Disposable.create(() => this.socket.removeEventListener("end", e));
        }
        onData(e) {
          return this._onData.event(e);
        }
      }
      class o {
        constructor(e) {
          this.socket = e;
        }
        onClose(e) {
          this.socket.addEventListener("close", e);
          return n.Disposable.create(() => this.socket.removeEventListener("close", e));
        }
        onError(e) {
          this.socket.addEventListener("error", e);
          return n.Disposable.create(() => this.socket.removeEventListener("error", e));
        }
        onEnd(e) {
          this.socket.addEventListener("end", e);
          return n.Disposable.create(() => this.socket.removeEventListener("end", e));
        }
        write(e, t) {
          if (typeof e === "string") {
            if (t !== undefined && t !== "utf-8") {
              throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${t}`);
            }
            this.socket.send(e);
          } else {
            this.socket.send(e);
          }
          return Promise.resolve();
        }
        end() {
          this.socket.close();
        }
      }
      const a = new TextEncoder();
      const c = Object.freeze({
        messageBuffer: Object.freeze({ create: (e) => new s(e) }),
        applicationJson: Object.freeze({
          encoder: Object.freeze({
            name: "application/json",
            encode: (e, t) => {
              if (t.charset !== "utf-8") {
                throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${t.charset}`);
              }
              return Promise.resolve(a.encode(JSON.stringify(e, undefined, 0)));
            },
          }),
          decoder: Object.freeze({
            name: "application/json",
            decode: (e, t) => {
              if (!(e instanceof Uint8Array)) {
                throw new Error(`In a Browser environments only Uint8Arrays are supported.`);
              }
              return Promise.resolve(JSON.parse(new TextDecoder(t.charset).decode(e)));
            },
          }),
        }),
        stream: Object.freeze({ asReadableStream: (e) => new i(e), asWritableStream: (e) => new o(e) }),
        console,
        timer: Object.freeze({
          setTimeout(e, t, ...r) {
            const n = setTimeout(e, t, ...r);
            return { dispose: () => clearTimeout(n) };
          },
          setImmediate(e, ...t) {
            const r = setTimeout(e, 0, ...t);
            return { dispose: () => clearTimeout(r) };
          },
          setInterval(e, t, ...r) {
            const n = setInterval(e, t, ...r);
            return { dispose: () => clearInterval(n) };
          },
        }),
      });
      function u() {
        return c;
      }
      (function (e) {
        function t() {
          n.RAL.install(c);
        }
        e.install = t;
      })(u || (u = {}));
      t["default"] = u;
    },
    23870: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.ProgressType =
        t.ProgressToken =
        t.createMessageConnection =
        t.NullLogger =
        t.ConnectionOptions =
        t.ConnectionStrategy =
        t.AbstractMessageBuffer =
        t.WriteableStreamMessageWriter =
        t.AbstractMessageWriter =
        t.MessageWriter =
        t.ReadableStreamMessageReader =
        t.AbstractMessageReader =
        t.MessageReader =
        t.SharedArrayReceiverStrategy =
        t.SharedArraySenderStrategy =
        t.CancellationToken =
        t.CancellationTokenSource =
        t.Emitter =
        t.Event =
        t.Disposable =
        t.LRUCache =
        t.Touch =
        t.LinkedMap =
        t.ParameterStructures =
        t.NotificationType9 =
        t.NotificationType8 =
        t.NotificationType7 =
        t.NotificationType6 =
        t.NotificationType5 =
        t.NotificationType4 =
        t.NotificationType3 =
        t.NotificationType2 =
        t.NotificationType1 =
        t.NotificationType0 =
        t.NotificationType =
        t.ErrorCodes =
        t.ResponseError =
        t.RequestType9 =
        t.RequestType8 =
        t.RequestType7 =
        t.RequestType6 =
        t.RequestType5 =
        t.RequestType4 =
        t.RequestType3 =
        t.RequestType2 =
        t.RequestType1 =
        t.RequestType0 =
        t.RequestType =
        t.Message =
        t.RAL =
          void 0;
      t.MessageStrategy =
        t.CancellationStrategy =
        t.CancellationSenderStrategy =
        t.CancellationReceiverStrategy =
        t.ConnectionError =
        t.ConnectionErrors =
        t.LogTraceNotification =
        t.SetTraceNotification =
        t.TraceFormat =
        t.TraceValues =
        t.Trace =
          void 0;
      const n = r(20839);
      Object.defineProperty(t, "Message", {
        enumerable: true,
        get: function () {
          return n.Message;
        },
      });
      Object.defineProperty(t, "RequestType", {
        enumerable: true,
        get: function () {
          return n.RequestType;
        },
      });
      Object.defineProperty(t, "RequestType0", {
        enumerable: true,
        get: function () {
          return n.RequestType0;
        },
      });
      Object.defineProperty(t, "RequestType1", {
        enumerable: true,
        get: function () {
          return n.RequestType1;
        },
      });
      Object.defineProperty(t, "RequestType2", {
        enumerable: true,
        get: function () {
          return n.RequestType2;
        },
      });
      Object.defineProperty(t, "RequestType3", {
        enumerable: true,
        get: function () {
          return n.RequestType3;
        },
      });
      Object.defineProperty(t, "RequestType4", {
        enumerable: true,
        get: function () {
          return n.RequestType4;
        },
      });
      Object.defineProperty(t, "RequestType5", {
        enumerable: true,
        get: function () {
          return n.RequestType5;
        },
      });
      Object.defineProperty(t, "RequestType6", {
        enumerable: true,
        get: function () {
          return n.RequestType6;
        },
      });
      Object.defineProperty(t, "RequestType7", {
        enumerable: true,
        get: function () {
          return n.RequestType7;
        },
      });
      Object.defineProperty(t, "RequestType8", {
        enumerable: true,
        get: function () {
          return n.RequestType8;
        },
      });
      Object.defineProperty(t, "RequestType9", {
        enumerable: true,
        get: function () {
          return n.RequestType9;
        },
      });
      Object.defineProperty(t, "ResponseError", {
        enumerable: true,
        get: function () {
          return n.ResponseError;
        },
      });
      Object.defineProperty(t, "ErrorCodes", {
        enumerable: true,
        get: function () {
          return n.ErrorCodes;
        },
      });
      Object.defineProperty(t, "NotificationType", {
        enumerable: true,
        get: function () {
          return n.NotificationType;
        },
      });
      Object.defineProperty(t, "NotificationType0", {
        enumerable: true,
        get: function () {
          return n.NotificationType0;
        },
      });
      Object.defineProperty(t, "NotificationType1", {
        enumerable: true,
        get: function () {
          return n.NotificationType1;
        },
      });
      Object.defineProperty(t, "NotificationType2", {
        enumerable: true,
        get: function () {
          return n.NotificationType2;
        },
      });
      Object.defineProperty(t, "NotificationType3", {
        enumerable: true,
        get: function () {
          return n.NotificationType3;
        },
      });
      Object.defineProperty(t, "NotificationType4", {
        enumerable: true,
        get: function () {
          return n.NotificationType4;
        },
      });
      Object.defineProperty(t, "NotificationType5", {
        enumerable: true,
        get: function () {
          return n.NotificationType5;
        },
      });
      Object.defineProperty(t, "NotificationType6", {
        enumerable: true,
        get: function () {
          return n.NotificationType6;
        },
      });
      Object.defineProperty(t, "NotificationType7", {
        enumerable: true,
        get: function () {
          return n.NotificationType7;
        },
      });
      Object.defineProperty(t, "NotificationType8", {
        enumerable: true,
        get: function () {
          return n.NotificationType8;
        },
      });
      Object.defineProperty(t, "NotificationType9", {
        enumerable: true,
        get: function () {
          return n.NotificationType9;
        },
      });
      Object.defineProperty(t, "ParameterStructures", {
        enumerable: true,
        get: function () {
          return n.ParameterStructures;
        },
      });
      const s = r(96184);
      Object.defineProperty(t, "LinkedMap", {
        enumerable: true,
        get: function () {
          return s.LinkedMap;
        },
      });
      Object.defineProperty(t, "LRUCache", {
        enumerable: true,
        get: function () {
          return s.LRUCache;
        },
      });
      Object.defineProperty(t, "Touch", {
        enumerable: true,
        get: function () {
          return s.Touch;
        },
      });
      const i = r(83911);
      Object.defineProperty(t, "Disposable", {
        enumerable: true,
        get: function () {
          return i.Disposable;
        },
      });
      const o = r(27135);
      Object.defineProperty(t, "Event", {
        enumerable: true,
        get: function () {
          return o.Event;
        },
      });
      Object.defineProperty(t, "Emitter", {
        enumerable: true,
        get: function () {
          return o.Emitter;
        },
      });
      const a = r(13881);
      Object.defineProperty(t, "CancellationTokenSource", {
        enumerable: true,
        get: function () {
          return a.CancellationTokenSource;
        },
      });
      Object.defineProperty(t, "CancellationToken", {
        enumerable: true,
        get: function () {
          return a.CancellationToken;
        },
      });
      const c = r(98211);
      Object.defineProperty(t, "SharedArraySenderStrategy", {
        enumerable: true,
        get: function () {
          return c.SharedArraySenderStrategy;
        },
      });
      Object.defineProperty(t, "SharedArrayReceiverStrategy", {
        enumerable: true,
        get: function () {
          return c.SharedArrayReceiverStrategy;
        },
      });
      const u = r(56525);
      Object.defineProperty(t, "MessageReader", {
        enumerable: true,
        get: function () {
          return u.MessageReader;
        },
      });
      Object.defineProperty(t, "AbstractMessageReader", {
        enumerable: true,
        get: function () {
          return u.AbstractMessageReader;
        },
      });
      Object.defineProperty(t, "ReadableStreamMessageReader", {
        enumerable: true,
        get: function () {
          return u.ReadableStreamMessageReader;
        },
      });
      const f = r(96654);
      Object.defineProperty(t, "MessageWriter", {
        enumerable: true,
        get: function () {
          return f.MessageWriter;
        },
      });
      Object.defineProperty(t, "AbstractMessageWriter", {
        enumerable: true,
        get: function () {
          return f.AbstractMessageWriter;
        },
      });
      Object.defineProperty(t, "WriteableStreamMessageWriter", {
        enumerable: true,
        get: function () {
          return f.WriteableStreamMessageWriter;
        },
      });
      const l = r(75530);
      Object.defineProperty(t, "AbstractMessageBuffer", {
        enumerable: true,
        get: function () {
          return l.AbstractMessageBuffer;
        },
      });
      const d = r(61343);
      Object.defineProperty(t, "ConnectionStrategy", {
        enumerable: true,
        get: function () {
          return d.ConnectionStrategy;
        },
      });
      Object.defineProperty(t, "ConnectionOptions", {
        enumerable: true,
        get: function () {
          return d.ConnectionOptions;
        },
      });
      Object.defineProperty(t, "NullLogger", {
        enumerable: true,
        get: function () {
          return d.NullLogger;
        },
      });
      Object.defineProperty(t, "createMessageConnection", {
        enumerable: true,
        get: function () {
          return d.createMessageConnection;
        },
      });
      Object.defineProperty(t, "ProgressToken", {
        enumerable: true,
        get: function () {
          return d.ProgressToken;
        },
      });
      Object.defineProperty(t, "ProgressType", {
        enumerable: true,
        get: function () {
          return d.ProgressType;
        },
      });
      Object.defineProperty(t, "Trace", {
        enumerable: true,
        get: function () {
          return d.Trace;
        },
      });
      Object.defineProperty(t, "TraceValues", {
        enumerable: true,
        get: function () {
          return d.TraceValues;
        },
      });
      Object.defineProperty(t, "TraceFormat", {
        enumerable: true,
        get: function () {
          return d.TraceFormat;
        },
      });
      Object.defineProperty(t, "SetTraceNotification", {
        enumerable: true,
        get: function () {
          return d.SetTraceNotification;
        },
      });
      Object.defineProperty(t, "LogTraceNotification", {
        enumerable: true,
        get: function () {
          return d.LogTraceNotification;
        },
      });
      Object.defineProperty(t, "ConnectionErrors", {
        enumerable: true,
        get: function () {
          return d.ConnectionErrors;
        },
      });
      Object.defineProperty(t, "ConnectionError", {
        enumerable: true,
        get: function () {
          return d.ConnectionError;
        },
      });
      Object.defineProperty(t, "CancellationReceiverStrategy", {
        enumerable: true,
        get: function () {
          return d.CancellationReceiverStrategy;
        },
      });
      Object.defineProperty(t, "CancellationSenderStrategy", {
        enumerable: true,
        get: function () {
          return d.CancellationSenderStrategy;
        },
      });
      Object.defineProperty(t, "CancellationStrategy", {
        enumerable: true,
        get: function () {
          return d.CancellationStrategy;
        },
      });
      Object.defineProperty(t, "MessageStrategy", {
        enumerable: true,
        get: function () {
          return d.MessageStrategy;
        },
      });
      const h = r(30147);
      t.RAL = h.default;
    },
    13881: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.CancellationTokenSource = t.CancellationToken = void 0;
      const n = r(30147);
      const s = r(67574);
      const i = r(27135);
      var o;
      (function (e) {
        e.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: i.Event.None });
        e.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: i.Event.None });
        function t(t) {
          const r = t;
          return r && (r === e.None || r === e.Cancelled || (s.boolean(r.isCancellationRequested) && !!r.onCancellationRequested));
        }
        e.is = t;
      })((o = t.CancellationToken || (t.CancellationToken = {})));
      const a = Object.freeze(function (e, t) {
        const r = (0, n.default)().timer.setTimeout(e.bind(t), 0);
        return {
          dispose() {
            r.dispose();
          },
        };
      });
      class c {
        constructor() {
          this._isCancelled = false;
        }
        cancel() {
          if (!this._isCancelled) {
            this._isCancelled = true;
            if (this._emitter) {
              this._emitter.fire(undefined);
              this.dispose();
            }
          }
        }
        get isCancellationRequested() {
          return this._isCancelled;
        }
        get onCancellationRequested() {
          if (this._isCancelled) {
            return a;
          }
          if (!this._emitter) {
            this._emitter = new i.Emitter();
          }
          return this._emitter.event;
        }
        dispose() {
          if (this._emitter) {
            this._emitter.dispose();
            this._emitter = undefined;
          }
        }
      }
      class u {
        get token() {
          if (!this._token) {
            this._token = new c();
          }
          return this._token;
        }
        cancel() {
          if (!this._token) {
            this._token = o.Cancelled;
          } else {
            this._token.cancel();
          }
        }
        dispose() {
          if (!this._token) {
            this._token = o.None;
          } else if (this._token instanceof c) {
            this._token.dispose();
          }
        }
      }
      t.CancellationTokenSource = u;
    },
    61343: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.createMessageConnection =
        t.ConnectionOptions =
        t.MessageStrategy =
        t.CancellationStrategy =
        t.CancellationSenderStrategy =
        t.CancellationReceiverStrategy =
        t.RequestCancellationReceiverStrategy =
        t.IdCancellationReceiverStrategy =
        t.ConnectionStrategy =
        t.ConnectionError =
        t.ConnectionErrors =
        t.LogTraceNotification =
        t.SetTraceNotification =
        t.TraceFormat =
        t.TraceValues =
        t.Trace =
        t.NullLogger =
        t.ProgressType =
        t.ProgressToken =
          void 0;
      const n = r(30147);
      const s = r(67574);
      const i = r(20839);
      const o = r(96184);
      const a = r(27135);
      const c = r(13881);
      var u;
      (function (e) {
        e.type = new i.NotificationType("$/cancelRequest");
      })(u || (u = {}));
      var f;
      (function (e) {
        function t(e) {
          return typeof e === "string" || typeof e === "number";
        }
        e.is = t;
      })((f = t.ProgressToken || (t.ProgressToken = {})));
      var l;
      (function (e) {
        e.type = new i.NotificationType("$/progress");
      })(l || (l = {}));
      class d {
        constructor() {}
      }
      t.ProgressType = d;
      var h;
      (function (e) {
        function t(e) {
          return s.func(e);
        }
        e.is = t;
      })(h || (h = {}));
      t.NullLogger = Object.freeze({ error: () => {}, warn: () => {}, info: () => {}, log: () => {} });
      var p;
      (function (e) {
        e[(e["Off"] = 0)] = "Off";
        e[(e["Messages"] = 1)] = "Messages";
        e[(e["Compact"] = 2)] = "Compact";
        e[(e["Verbose"] = 3)] = "Verbose";
      })((p = t.Trace || (t.Trace = {})));
      var g;
      (function (e) {
        e.Off = "off";
        e.Messages = "messages";
        e.Compact = "compact";
        e.Verbose = "verbose";
      })((g = t.TraceValues || (t.TraceValues = {})));
      (function (e) {
        function t(t) {
          if (!s.string(t)) {
            return e.Off;
          }
          t = t.toLowerCase();
          switch (t) {
            case "off":
              return e.Off;
            case "messages":
              return e.Messages;
            case "compact":
              return e.Compact;
            case "verbose":
              return e.Verbose;
            default:
              return e.Off;
          }
        }
        e.fromString = t;
        function r(t) {
          switch (t) {
            case e.Off:
              return "off";
            case e.Messages:
              return "messages";
            case e.Compact:
              return "compact";
            case e.Verbose:
              return "verbose";
            default:
              return "off";
          }
        }
        e.toString = r;
      })((p = t.Trace || (t.Trace = {})));
      var m;
      (function (e) {
        e["Text"] = "text";
        e["JSON"] = "json";
      })((m = t.TraceFormat || (t.TraceFormat = {})));
      (function (e) {
        function t(t) {
          if (!s.string(t)) {
            return e.Text;
          }
          t = t.toLowerCase();
          if (t === "json") {
            return e.JSON;
          } else {
            return e.Text;
          }
        }
        e.fromString = t;
      })((m = t.TraceFormat || (t.TraceFormat = {})));
      var y;
      (function (e) {
        e.type = new i.NotificationType("$/setTrace");
      })((y = t.SetTraceNotification || (t.SetTraceNotification = {})));
      var b;
      (function (e) {
        e.type = new i.NotificationType("$/logTrace");
      })((b = t.LogTraceNotification || (t.LogTraceNotification = {})));
      var v;
      (function (e) {
        e[(e["Closed"] = 1)] = "Closed";
        e[(e["Disposed"] = 2)] = "Disposed";
        e[(e["AlreadyListening"] = 3)] = "AlreadyListening";
      })((v = t.ConnectionErrors || (t.ConnectionErrors = {})));
      class _ extends Error {
        constructor(e, t) {
          super(t);
          this.code = e;
          Object.setPrototypeOf(this, _.prototype);
        }
      }
      t.ConnectionError = _;
      var w;
      (function (e) {
        function t(e) {
          const t = e;
          return t && s.func(t.cancelUndispatched);
        }
        e.is = t;
      })((w = t.ConnectionStrategy || (t.ConnectionStrategy = {})));
      var T;
      (function (e) {
        function t(e) {
          const t = e;
          return (
            t &&
            (t.kind === undefined || t.kind === "id") &&
            s.func(t.createCancellationTokenSource) &&
            (t.dispose === undefined || s.func(t.dispose))
          );
        }
        e.is = t;
      })((T = t.IdCancellationReceiverStrategy || (t.IdCancellationReceiverStrategy = {})));
      var E;
      (function (e) {
        function t(e) {
          const t = e;
          return t && t.kind === "request" && s.func(t.createCancellationTokenSource) && (t.dispose === undefined || s.func(t.dispose));
        }
        e.is = t;
      })((E = t.RequestCancellationReceiverStrategy || (t.RequestCancellationReceiverStrategy = {})));
      var S;
      (function (e) {
        e.Message = Object.freeze({
          createCancellationTokenSource(e) {
            return new c.CancellationTokenSource();
          },
        });
        function t(e) {
          return T.is(e) || E.is(e);
        }
        e.is = t;
      })((S = t.CancellationReceiverStrategy || (t.CancellationReceiverStrategy = {})));
      var C;
      (function (e) {
        e.Message = Object.freeze({
          sendCancellation(e, t) {
            return e.sendNotification(u.type, { id: t });
          },
          cleanup(e) {},
        });
        function t(e) {
          const t = e;
          return t && s.func(t.sendCancellation) && s.func(t.cleanup);
        }
        e.is = t;
      })((C = t.CancellationSenderStrategy || (t.CancellationSenderStrategy = {})));
      var R;
      (function (e) {
        e.Message = Object.freeze({ receiver: S.Message, sender: C.Message });
        function t(e) {
          const t = e;
          return t && S.is(t.receiver) && C.is(t.sender);
        }
        e.is = t;
      })((R = t.CancellationStrategy || (t.CancellationStrategy = {})));
      var k;
      (function (e) {
        function t(e) {
          const t = e;
          return t && s.func(t.handleMessage);
        }
        e.is = t;
      })((k = t.MessageStrategy || (t.MessageStrategy = {})));
      var M;
      (function (e) {
        function t(e) {
          const t = e;
          return t && (R.is(t.cancellationStrategy) || w.is(t.connectionStrategy) || k.is(t.messageStrategy));
        }
        e.is = t;
      })((M = t.ConnectionOptions || (t.ConnectionOptions = {})));
      var j;
      (function (e) {
        e[(e["New"] = 1)] = "New";
        e[(e["Listening"] = 2)] = "Listening";
        e[(e["Closed"] = 3)] = "Closed";
        e[(e["Disposed"] = 4)] = "Disposed";
      })(j || (j = {}));
      function O(e, r, d, g) {
        const w = d !== undefined ? d : t.NullLogger;
        let E = 0;
        let S = 0;
        let C = 0;
        const M = "2.0";
        let O = undefined;
        const P = new Map();
        let N = undefined;
        const x = new Map();
        const L = new Map();
        let q;
        let A = new o.LinkedMap();
        let $ = new Map();
        let D = new Set();
        let z = new Map();
        let I = p.Off;
        let W = m.Text;
        let B;
        let F = j.New;
        const U = new a.Emitter();
        const V = new a.Emitter();
        const J = new a.Emitter();
        const H = new a.Emitter();
        const G = new a.Emitter();
        const K = g && g.cancellationStrategy ? g.cancellationStrategy : R.Message;
        function Q(e) {
          if (e === null) {
            throw new Error(`Can't send requests with id null since the response can't be correlated.`);
          }
          return "req-" + e.toString();
        }
        function X(e) {
          if (e === null) {
            return "res-unknown-" + (++C).toString();
          } else {
            return "res-" + e.toString();
          }
        }
        function Y() {
          return "not-" + (++S).toString();
        }
        function Z(e, t) {
          if (i.Message.isRequest(t)) {
            e.set(Q(t.id), t);
          } else if (i.Message.isResponse(t)) {
            e.set(X(t.id), t);
          } else {
            e.set(Y(), t);
          }
        }
        function ee(e) {
          return undefined;
        }
        function te() {
          return F === j.Listening;
        }
        function re() {
          return F === j.Closed;
        }
        function ne() {
          return F === j.Disposed;
        }
        function se() {
          if (F === j.New || F === j.Listening) {
            F = j.Closed;
            V.fire(undefined);
          }
        }
        function ie(e) {
          U.fire([e, undefined, undefined]);
        }
        function oe(e) {
          U.fire(e);
        }
        e.onClose(se);
        e.onError(ie);
        r.onClose(se);
        r.onError(oe);
        function ae() {
          if (q || A.size === 0) {
            return;
          }
          q = (0, n.default)().timer.setImmediate(() => {
            q = undefined;
            ue();
          });
        }
        function ce(e) {
          if (i.Message.isRequest(e)) {
            le(e);
          } else if (i.Message.isNotification(e)) {
            he(e);
          } else if (i.Message.isResponse(e)) {
            de(e);
          } else {
            pe(e);
          }
        }
        function ue() {
          if (A.size === 0) {
            return;
          }
          const e = A.shift();
          try {
            const t = g?.messageStrategy;
            if (k.is(t)) {
              t.handleMessage(e, ce);
            } else {
              ce(e);
            }
          } finally {
            ae();
          }
        }
        const fe = (e) => {
          try {
            if (i.Message.isNotification(e) && e.method === u.type.method) {
              const t = e.params.id;
              const n = Q(t);
              const s = A.get(n);
              if (i.Message.isRequest(s)) {
                const i = g?.connectionStrategy;
                const o = i && i.cancelUndispatched ? i.cancelUndispatched(s, ee) : ee(s);
                if (o && (o.error !== undefined || o.result !== undefined)) {
                  A.delete(n);
                  z.delete(t);
                  o.id = s.id;
                  be(o, e.method, Date.now());
                  r.write(o).catch(() => w.error(`Sending response for canceled message failed.`));
                  return;
                }
              }
              const o = z.get(t);
              if (o !== undefined) {
                o.cancel();
                _e(e);
                return;
              } else {
                D.add(t);
              }
            }
            Z(A, e);
          } finally {
            ae();
          }
        };
        function le(e) {
          if (ne()) {
            return;
          }
          function t(t, n, s) {
            const o = { jsonrpc: M, id: e.id };
            if (t instanceof i.ResponseError) {
              o.error = t.toJson();
            } else {
              o.result = t === undefined ? null : t;
            }
            be(o, n, s);
            r.write(o).catch(() => w.error(`Sending response failed.`));
          }
          function n(t, n, s) {
            const i = { jsonrpc: M, id: e.id, error: t.toJson() };
            be(i, n, s);
            r.write(i).catch(() => w.error(`Sending response failed.`));
          }
          function o(t, n, s) {
            if (t === undefined) {
              t = null;
            }
            const i = { jsonrpc: M, id: e.id, result: t };
            be(i, n, s);
            r.write(i).catch(() => w.error(`Sending response failed.`));
          }
          ve(e);
          const a = P.get(e.method);
          let c;
          let u;
          if (a) {
            c = a.type;
            u = a.handler;
          }
          const f = Date.now();
          if (u || O) {
            const r = e.id ?? String(Date.now());
            const a = T.is(K.receiver) ? K.receiver.createCancellationTokenSource(r) : K.receiver.createCancellationTokenSource(e);
            if (e.id !== null && D.has(e.id)) {
              a.cancel();
            }
            if (e.id !== null) {
              z.set(r, a);
            }
            try {
              let l;
              if (u) {
                if (e.params === undefined) {
                  if (c !== undefined && c.numberOfParams !== 0) {
                    n(
                      new i.ResponseError(i.ErrorCodes.InvalidParams, `Request ${e.method} defines ${c.numberOfParams} params but received none.`),
                      e.method,
                      f
                    );
                    return;
                  }
                  l = u(a.token);
                } else if (Array.isArray(e.params)) {
                  if (c !== undefined && c.parameterStructures === i.ParameterStructures.byName) {
                    n(
                      new i.ResponseError(
                        i.ErrorCodes.InvalidParams,
                        `Request ${e.method} defines parameters by name but received parameters by position`
                      ),
                      e.method,
                      f
                    );
                    return;
                  }
                  l = u(...e.params, a.token);
                } else {
                  if (c !== undefined && c.parameterStructures === i.ParameterStructures.byPosition) {
                    n(
                      new i.ResponseError(
                        i.ErrorCodes.InvalidParams,
                        `Request ${e.method} defines parameters by position but received parameters by name`
                      ),
                      e.method,
                      f
                    );
                    return;
                  }
                  l = u(e.params, a.token);
                }
              } else if (O) {
                l = O(e.method, e.params, a.token);
              }
              const d = l;
              if (!l) {
                z.delete(r);
                o(l, e.method, f);
              } else if (d.then) {
                d.then(
                  (n) => {
                    z.delete(r);
                    t(n, e.method, f);
                  },
                  (t) => {
                    z.delete(r);
                    if (t instanceof i.ResponseError) {
                      n(t, e.method, f);
                    } else if (t && s.string(t.message)) {
                      n(new i.ResponseError(i.ErrorCodes.InternalError, `Request ${e.method} failed with message: ${t.message}`), e.method, f);
                    } else {
                      n(
                        new i.ResponseError(i.ErrorCodes.InternalError, `Request ${e.method} failed unexpectedly without providing any details.`),
                        e.method,
                        f
                      );
                    }
                  }
                );
              } else {
                z.delete(r);
                t(l, e.method, f);
              }
            } catch (l) {
              z.delete(r);
              if (l instanceof i.ResponseError) {
                t(l, e.method, f);
              } else if (l && s.string(l.message)) {
                n(new i.ResponseError(i.ErrorCodes.InternalError, `Request ${e.method} failed with message: ${l.message}`), e.method, f);
              } else {
                n(
                  new i.ResponseError(i.ErrorCodes.InternalError, `Request ${e.method} failed unexpectedly without providing any details.`),
                  e.method,
                  f
                );
              }
            }
          } else {
            n(new i.ResponseError(i.ErrorCodes.MethodNotFound, `Unhandled method ${e.method}`), e.method, f);
          }
        }
        function de(e) {
          if (ne()) {
            return;
          }
          if (e.id === null) {
            if (e.error) {
              w.error(`Received response message without id: Error is: \n${JSON.stringify(e.error, undefined, 4)}`);
            } else {
              w.error(`Received response message without id. No further error information provided.`);
            }
          } else {
            const r = e.id;
            const n = $.get(r);
            we(e, n);
            if (n !== undefined) {
              $.delete(r);
              try {
                if (e.error) {
                  const t = e.error;
                  n.reject(new i.ResponseError(t.code, t.message, t.data));
                } else if (e.result !== undefined) {
                  n.resolve(e.result);
                } else {
                  throw new Error("Should never happen.");
                }
              } catch (t) {
                if (t.message) {
                  w.error(`Response handler '${n.method}' failed with message: ${t.message}`);
                } else {
                  w.error(`Response handler '${n.method}' failed unexpectedly.`);
                }
              }
            }
          }
        }
        function he(e) {
          if (ne()) {
            return;
          }
          let t = undefined;
          let r;
          if (e.method === u.type.method) {
            const t = e.params.id;
            D.delete(t);
            _e(e);
            return;
          } else {
            const n = x.get(e.method);
            if (n) {
              r = n.handler;
              t = n.type;
            }
          }
          if (r || N) {
            try {
              _e(e);
              if (r) {
                if (e.params === undefined) {
                  if (t !== undefined) {
                    if (t.numberOfParams !== 0 && t.parameterStructures !== i.ParameterStructures.byName) {
                      w.error(`Notification ${e.method} defines ${t.numberOfParams} params but received none.`);
                    }
                  }
                  r();
                } else if (Array.isArray(e.params)) {
                  const n = e.params;
                  if (e.method === l.type.method && n.length === 2 && f.is(n[0])) {
                    r({ token: n[0], value: n[1] });
                  } else {
                    if (t !== undefined) {
                      if (t.parameterStructures === i.ParameterStructures.byName) {
                        w.error(`Notification ${e.method} defines parameters by name but received parameters by position`);
                      }
                      if (t.numberOfParams !== e.params.length) {
                        w.error(`Notification ${e.method} defines ${t.numberOfParams} params but received ${n.length} arguments`);
                      }
                    }
                    r(...n);
                  }
                } else {
                  if (t !== undefined && t.parameterStructures === i.ParameterStructures.byPosition) {
                    w.error(`Notification ${e.method} defines parameters by position but received parameters by name`);
                  }
                  r(e.params);
                }
              } else if (N) {
                N(e.method, e.params);
              }
            } catch (n) {
              if (n.message) {
                w.error(`Notification handler '${e.method}' failed with message: ${n.message}`);
              } else {
                w.error(`Notification handler '${e.method}' failed unexpectedly.`);
              }
            }
          } else {
            J.fire(e);
          }
        }
        function pe(e) {
          if (!e) {
            w.error("Received empty message.");
            return;
          }
          w.error(`Received message which is neither a response nor a notification message:\n${JSON.stringify(e, null, 4)}`);
          const t = e;
          if (s.string(t.id) || s.number(t.id)) {
            const e = t.id;
            const r = $.get(e);
            if (r) {
              r.reject(new Error("The received response has neither a result nor an error property."));
            }
          }
        }
        function ge(e) {
          if (e === undefined || e === null) {
            return undefined;
          }
          switch (I) {
            case p.Verbose:
              return JSON.stringify(e, null, 4);
            case p.Compact:
              return JSON.stringify(e);
            default:
              return undefined;
          }
        }
        function me(e) {
          if (I === p.Off || !B) {
            return;
          }
          if (W === m.Text) {
            let t = undefined;
            if ((I === p.Verbose || I === p.Compact) && e.params) {
              t = `Params: ${ge(e.params)}\n\n`;
            }
            B.log(`Sending request '${e.method} - (${e.id})'.`, t);
          } else {
            Te("send-request", e);
          }
        }
        function ye(e) {
          if (I === p.Off || !B) {
            return;
          }
          if (W === m.Text) {
            let t = undefined;
            if (I === p.Verbose || I === p.Compact) {
              if (e.params) {
                t = `Params: ${ge(e.params)}\n\n`;
              } else {
                t = "No parameters provided.\n\n";
              }
            }
            B.log(`Sending notification '${e.method}'.`, t);
          } else {
            Te("send-notification", e);
          }
        }
        function be(e, t, r) {
          if (I === p.Off || !B) {
            return;
          }
          if (W === m.Text) {
            let n = undefined;
            if (I === p.Verbose || I === p.Compact) {
              if (e.error && e.error.data) {
                n = `Error data: ${ge(e.error.data)}\n\n`;
              } else {
                if (e.result) {
                  n = `Result: ${ge(e.result)}\n\n`;
                } else if (e.error === undefined) {
                  n = "No result returned.\n\n";
                }
              }
            }
            B.log(`Sending response '${t} - (${e.id})'. Processing request took ${Date.now() - r}ms`, n);
          } else {
            Te("send-response", e);
          }
        }
        function ve(e) {
          if (I === p.Off || !B) {
            return;
          }
          if (W === m.Text) {
            let t = undefined;
            if ((I === p.Verbose || I === p.Compact) && e.params) {
              t = `Params: ${ge(e.params)}\n\n`;
            }
            B.log(`Received request '${e.method} - (${e.id})'.`, t);
          } else {
            Te("receive-request", e);
          }
        }
        function _e(e) {
          if (I === p.Off || !B || e.method === b.type.method) {
            return;
          }
          if (W === m.Text) {
            let t = undefined;
            if (I === p.Verbose || I === p.Compact) {
              if (e.params) {
                t = `Params: ${ge(e.params)}\n\n`;
              } else {
                t = "No parameters provided.\n\n";
              }
            }
            B.log(`Received notification '${e.method}'.`, t);
          } else {
            Te("receive-notification", e);
          }
        }
        function we(e, t) {
          if (I === p.Off || !B) {
            return;
          }
          if (W === m.Text) {
            let r = undefined;
            if (I === p.Verbose || I === p.Compact) {
              if (e.error && e.error.data) {
                r = `Error data: ${ge(e.error.data)}\n\n`;
              } else {
                if (e.result) {
                  r = `Result: ${ge(e.result)}\n\n`;
                } else if (e.error === undefined) {
                  r = "No result returned.\n\n";
                }
              }
            }
            if (t) {
              const n = e.error ? ` Request failed: ${e.error.message} (${e.error.code}).` : "";
              B.log(`Received response '${t.method} - (${e.id})' in ${Date.now() - t.timerStart}ms.${n}`, r);
            } else {
              B.log(`Received response ${e.id} without active response promise.`, r);
            }
          } else {
            Te("receive-response", e);
          }
        }
        function Te(e, t) {
          if (!B || I === p.Off) {
            return;
          }
          const r = { isLSPMessage: true, type: e, message: t, timestamp: Date.now() };
          B.log(r);
        }
        function Ee() {
          if (re()) {
            throw new _(v.Closed, "Connection is closed.");
          }
          if (ne()) {
            throw new _(v.Disposed, "Connection is disposed.");
          }
        }
        function Se() {
          if (te()) {
            throw new _(v.AlreadyListening, "Connection is already listening");
          }
        }
        function Ce() {
          if (!te()) {
            throw new Error("Call listen() first.");
          }
        }
        function Re(e) {
          if (e === undefined) {
            return null;
          } else {
            return e;
          }
        }
        function ke(e) {
          if (e === null) {
            return undefined;
          } else {
            return e;
          }
        }
        function Me(e) {
          return e !== undefined && e !== null && !Array.isArray(e) && typeof e === "object";
        }
        function je(e, t) {
          switch (e) {
            case i.ParameterStructures.auto:
              if (Me(t)) {
                return ke(t);
              } else {
                return [Re(t)];
              }
            case i.ParameterStructures.byName:
              if (!Me(t)) {
                throw new Error(`Received parameters by name but param is not an object literal.`);
              }
              return ke(t);
            case i.ParameterStructures.byPosition:
              return [Re(t)];
            default:
              throw new Error(`Unknown parameter structure ${e.toString()}`);
          }
        }
        function Oe(e, t) {
          let r;
          const n = e.numberOfParams;
          switch (n) {
            case 0:
              r = undefined;
              break;
            case 1:
              r = je(e.parameterStructures, t[0]);
              break;
            default:
              r = [];
              for (let e = 0; e < t.length && e < n; e++) {
                r.push(Re(t[e]));
              }
              if (t.length < n) {
                for (let e = t.length; e < n; e++) {
                  r.push(null);
                }
              }
              break;
          }
          return r;
        }
        const Pe = {
          sendNotification: (e, ...t) => {
            Ee();
            let n;
            let o;
            if (s.string(e)) {
              n = e;
              const r = t[0];
              let s = 0;
              let a = i.ParameterStructures.auto;
              if (i.ParameterStructures.is(r)) {
                s = 1;
                a = r;
              }
              let c = t.length;
              const u = c - s;
              switch (u) {
                case 0:
                  o = undefined;
                  break;
                case 1:
                  o = je(a, t[s]);
                  break;
                default:
                  if (a === i.ParameterStructures.byName) {
                    throw new Error(`Received ${u} parameters for 'by Name' notification parameter structure.`);
                  }
                  o = t.slice(s, c).map((e) => Re(e));
                  break;
              }
            } else {
              const r = t;
              n = e.method;
              o = Oe(e, r);
            }
            const a = { jsonrpc: M, method: n, params: o };
            ye(a);
            return r.write(a).catch((e) => {
              w.error(`Sending notification failed.`);
              throw e;
            });
          },
          onNotification: (e, t) => {
            Ee();
            let r;
            if (s.func(e)) {
              N = e;
            } else if (t) {
              if (s.string(e)) {
                r = e;
                x.set(e, { type: undefined, handler: t });
              } else {
                r = e.method;
                x.set(e.method, { type: e, handler: t });
              }
            }
            return {
              dispose: () => {
                if (r !== undefined) {
                  x.delete(r);
                } else {
                  N = undefined;
                }
              },
            };
          },
          onProgress: (e, t, r) => {
            if (L.has(t)) {
              throw new Error(`Progress handler for token ${t} already registered`);
            }
            L.set(t, r);
            return {
              dispose: () => {
                L.delete(t);
              },
            };
          },
          sendProgress: (e, t, r) => Pe.sendNotification(l.type, { token: t, value: r }),
          onUnhandledProgress: H.event,
          sendRequest: (e, ...t) => {
            Ee();
            Ce();
            let n;
            let o;
            let a = undefined;
            if (s.string(e)) {
              n = e;
              const r = t[0];
              const s = t[t.length - 1];
              let u = 0;
              let f = i.ParameterStructures.auto;
              if (i.ParameterStructures.is(r)) {
                u = 1;
                f = r;
              }
              let l = t.length;
              if (c.CancellationToken.is(s)) {
                l = l - 1;
                a = s;
              }
              const d = l - u;
              switch (d) {
                case 0:
                  o = undefined;
                  break;
                case 1:
                  o = je(f, t[u]);
                  break;
                default:
                  if (f === i.ParameterStructures.byName) {
                    throw new Error(`Received ${d} parameters for 'by Name' request parameter structure.`);
                  }
                  o = t.slice(u, l).map((e) => Re(e));
                  break;
              }
            } else {
              const r = t;
              n = e.method;
              o = Oe(e, r);
              const s = e.numberOfParams;
              a = c.CancellationToken.is(r[s]) ? r[s] : undefined;
            }
            const u = E++;
            let f;
            if (a) {
              f = a.onCancellationRequested(() => {
                const e = K.sender.sendCancellation(Pe, u);
                if (e === undefined) {
                  w.log(`Received no promise from cancellation strategy when cancelling id ${u}`);
                  return Promise.resolve();
                } else {
                  return e.catch(() => {
                    w.log(`Sending cancellation messages for id ${u} failed`);
                  });
                }
              });
            }
            const l = { jsonrpc: M, id: u, method: n, params: o };
            me(l);
            if (typeof K.sender.enableCancellation === "function") {
              K.sender.enableCancellation(l);
            }
            return new Promise(async (e, t) => {
              const s = (t) => {
                e(t);
                K.sender.cleanup(u);
                f?.dispose();
              };
              const o = (e) => {
                t(e);
                K.sender.cleanup(u);
                f?.dispose();
              };
              const a = { method: n, timerStart: Date.now(), resolve: s, reject: o };
              try {
                await r.write(l);
                $.set(u, a);
              } catch (c) {
                w.error(`Sending request failed.`);
                a.reject(new i.ResponseError(i.ErrorCodes.MessageWriteError, c.message ? c.message : "Unknown reason"));
                throw c;
              }
            });
          },
          onRequest: (e, t) => {
            Ee();
            let r = null;
            if (h.is(e)) {
              r = undefined;
              O = e;
            } else if (s.string(e)) {
              r = null;
              if (t !== undefined) {
                r = e;
                P.set(e, { handler: t, type: undefined });
              }
            } else {
              if (t !== undefined) {
                r = e.method;
                P.set(e.method, { type: e, handler: t });
              }
            }
            return {
              dispose: () => {
                if (r === null) {
                  return;
                }
                if (r !== undefined) {
                  P.delete(r);
                } else {
                  O = undefined;
                }
              },
            };
          },
          hasPendingResponse: () => $.size > 0,
          trace: async (e, t, r) => {
            let n = false;
            let i = m.Text;
            if (r !== undefined) {
              if (s.boolean(r)) {
                n = r;
              } else {
                n = r.sendNotification || false;
                i = r.traceFormat || m.Text;
              }
            }
            I = e;
            W = i;
            if (I === p.Off) {
              B = undefined;
            } else {
              B = t;
            }
            if (n && !re() && !ne()) {
              await Pe.sendNotification(y.type, { value: p.toString(e) });
            }
          },
          onError: U.event,
          onClose: V.event,
          onUnhandledNotification: J.event,
          onDispose: G.event,
          end: () => {
            r.end();
          },
          dispose: () => {
            if (ne()) {
              return;
            }
            F = j.Disposed;
            G.fire(undefined);
            const t = new i.ResponseError(i.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
            for (const e of $.values()) {
              e.reject(t);
            }
            $ = new Map();
            z = new Map();
            D = new Set();
            A = new o.LinkedMap();
            if (s.func(r.dispose)) {
              r.dispose();
            }
            if (s.func(e.dispose)) {
              e.dispose();
            }
          },
          listen: () => {
            Ee();
            Se();
            F = j.Listening;
            e.listen(fe);
          },
          inspect: () => {
            (0, n.default)().console.log("inspect");
          },
        };
        Pe.onNotification(b.type, (e) => {
          if (I === p.Off || !B) {
            return;
          }
          const t = I === p.Verbose || I === p.Compact;
          B.log(e.message, t ? e.verbose : undefined);
        });
        Pe.onNotification(l.type, (e) => {
          const t = L.get(e.token);
          if (t) {
            t(e.value);
          } else {
            H.fire(e);
          }
        });
        return Pe;
      }
      t.createMessageConnection = O;
    },
    83911: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.Disposable = void 0;
      var r;
      (function (e) {
        function t(e) {
          return { dispose: e };
        }
        e.create = t;
      })((r = t.Disposable || (t.Disposable = {})));
    },
    27135: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.Emitter = t.Event = void 0;
      const n = r(30147);
      var s;
      (function (e) {
        const t = { dispose() {} };
        e.None = function () {
          return t;
        };
      })((s = t.Event || (t.Event = {})));
      class i {
        add(e, t = null, r) {
          if (!this._callbacks) {
            this._callbacks = [];
            this._contexts = [];
          }
          this._callbacks.push(e);
          this._contexts.push(t);
          if (Array.isArray(r)) {
            r.push({ dispose: () => this.remove(e, t) });
          }
        }
        remove(e, t = null) {
          if (!this._callbacks) {
            return;
          }
          let r = false;
          for (let n = 0, s = this._callbacks.length; n < s; n++) {
            if (this._callbacks[n] === e) {
              if (this._contexts[n] === t) {
                this._callbacks.splice(n, 1);
                this._contexts.splice(n, 1);
                return;
              } else {
                r = true;
              }
            }
          }
          if (r) {
            throw new Error("When adding a listener with a context, you should remove it with the same context");
          }
        }
        invoke(...e) {
          if (!this._callbacks) {
            return [];
          }
          const t = [],
            r = this._callbacks.slice(0),
            s = this._contexts.slice(0);
          for (let o = 0, a = r.length; o < a; o++) {
            try {
              t.push(r[o].apply(s[o], e));
            } catch (i) {
              (0, n.default)().console.error(i);
            }
          }
          return t;
        }
        isEmpty() {
          return !this._callbacks || this._callbacks.length === 0;
        }
        dispose() {
          this._callbacks = undefined;
          this._contexts = undefined;
        }
      }
      class o {
        constructor(e) {
          this._options = e;
        }
        get event() {
          if (!this._event) {
            this._event = (e, t, r) => {
              if (!this._callbacks) {
                this._callbacks = new i();
              }
              if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
                this._options.onFirstListenerAdd(this);
              }
              this._callbacks.add(e, t);
              const n = {
                dispose: () => {
                  if (!this._callbacks) {
                    return;
                  }
                  this._callbacks.remove(e, t);
                  n.dispose = o._noop;
                  if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                    this._options.onLastListenerRemove(this);
                  }
                },
              };
              if (Array.isArray(r)) {
                r.push(n);
              }
              return n;
            };
          }
          return this._event;
        }
        fire(e) {
          if (this._callbacks) {
            this._callbacks.invoke.call(this._callbacks, e);
          }
        }
        dispose() {
          if (this._callbacks) {
            this._callbacks.dispose();
            this._callbacks = undefined;
          }
        }
      }
      t.Emitter = o;
      o._noop = function () {};
    },
    67574: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.stringArray = t.array = t.func = t.error = t.number = t.string = t.boolean = void 0;
      function r(e) {
        return e === true || e === false;
      }
      t.boolean = r;
      function n(e) {
        return typeof e === "string" || e instanceof String;
      }
      t.string = n;
      function s(e) {
        return typeof e === "number" || e instanceof Number;
      }
      t.number = s;
      function i(e) {
        return e instanceof Error;
      }
      t.error = i;
      function o(e) {
        return typeof e === "function";
      }
      t.func = o;
      function a(e) {
        return Array.isArray(e);
      }
      t.array = a;
      function c(e) {
        return a(e) && e.every((e) => n(e));
      }
      t.stringArray = c;
    },
    96184: (e, t) => {
      "use strict";
      var r;
      Object.defineProperty(t, "__esModule", { value: true });
      t.LRUCache = t.LinkedMap = t.Touch = void 0;
      var n;
      (function (e) {
        e.None = 0;
        e.First = 1;
        e.AsOld = e.First;
        e.Last = 2;
        e.AsNew = e.Last;
      })((n = t.Touch || (t.Touch = {})));
      class s {
        constructor() {
          this[r] = "LinkedMap";
          this._map = new Map();
          this._head = undefined;
          this._tail = undefined;
          this._size = 0;
          this._state = 0;
        }
        clear() {
          this._map.clear();
          this._head = undefined;
          this._tail = undefined;
          this._size = 0;
          this._state++;
        }
        isEmpty() {
          return !this._head && !this._tail;
        }
        get size() {
          return this._size;
        }
        get first() {
          return this._head?.value;
        }
        get last() {
          return this._tail?.value;
        }
        has(e) {
          return this._map.has(e);
        }
        get(e, t = n.None) {
          const r = this._map.get(e);
          if (!r) {
            return undefined;
          }
          if (t !== n.None) {
            this.touch(r, t);
          }
          return r.value;
        }
        set(e, t, r = n.None) {
          let s = this._map.get(e);
          if (s) {
            s.value = t;
            if (r !== n.None) {
              this.touch(s, r);
            }
          } else {
            s = { key: e, value: t, next: undefined, previous: undefined };
            switch (r) {
              case n.None:
                this.addItemLast(s);
                break;
              case n.First:
                this.addItemFirst(s);
                break;
              case n.Last:
                this.addItemLast(s);
                break;
              default:
                this.addItemLast(s);
                break;
            }
            this._map.set(e, s);
            this._size++;
          }
          return this;
        }
        delete(e) {
          return !!this.remove(e);
        }
        remove(e) {
          const t = this._map.get(e);
          if (!t) {
            return undefined;
          }
          this._map.delete(e);
          this.removeItem(t);
          this._size--;
          return t.value;
        }
        shift() {
          if (!this._head && !this._tail) {
            return undefined;
          }
          if (!this._head || !this._tail) {
            throw new Error("Invalid list");
          }
          const e = this._head;
          this._map.delete(e.key);
          this.removeItem(e);
          this._size--;
          return e.value;
        }
        forEach(e, t) {
          const r = this._state;
          let n = this._head;
          while (n) {
            if (t) {
              e.bind(t)(n.value, n.key, this);
            } else {
              e(n.value, n.key, this);
            }
            if (this._state !== r) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            n = n.next;
          }
        }
        keys() {
          const e = this._state;
          let t = this._head;
          const r = {
            [Symbol.iterator]: () => r,
            next: () => {
              if (this._state !== e) {
                throw new Error(`LinkedMap got modified during iteration.`);
              }
              if (t) {
                const e = { value: t.key, done: false };
                t = t.next;
                return e;
              } else {
                return { value: undefined, done: true };
              }
            },
          };
          return r;
        }
        values() {
          const e = this._state;
          let t = this._head;
          const r = {
            [Symbol.iterator]: () => r,
            next: () => {
              if (this._state !== e) {
                throw new Error(`LinkedMap got modified during iteration.`);
              }
              if (t) {
                const e = { value: t.value, done: false };
                t = t.next;
                return e;
              } else {
                return { value: undefined, done: true };
              }
            },
          };
          return r;
        }
        entries() {
          const e = this._state;
          let t = this._head;
          const r = {
            [Symbol.iterator]: () => r,
            next: () => {
              if (this._state !== e) {
                throw new Error(`LinkedMap got modified during iteration.`);
              }
              if (t) {
                const e = { value: [t.key, t.value], done: false };
                t = t.next;
                return e;
              } else {
                return { value: undefined, done: true };
              }
            },
          };
          return r;
        }
        [((r = Symbol.toStringTag), Symbol.iterator)]() {
          return this.entries();
        }
        trimOld(e) {
          if (e >= this.size) {
            return;
          }
          if (e === 0) {
            this.clear();
            return;
          }
          let t = this._head;
          let r = this.size;
          while (t && r > e) {
            this._map.delete(t.key);
            t = t.next;
            r--;
          }
          this._head = t;
          this._size = r;
          if (t) {
            t.previous = undefined;
          }
          this._state++;
        }
        addItemFirst(e) {
          if (!this._head && !this._tail) {
            this._tail = e;
          } else if (!this._head) {
            throw new Error("Invalid list");
          } else {
            e.next = this._head;
            this._head.previous = e;
          }
          this._head = e;
          this._state++;
        }
        addItemLast(e) {
          if (!this._head && !this._tail) {
            this._head = e;
          } else if (!this._tail) {
            throw new Error("Invalid list");
          } else {
            e.previous = this._tail;
            this._tail.next = e;
          }
          this._tail = e;
          this._state++;
        }
        removeItem(e) {
          if (e === this._head && e === this._tail) {
            this._head = undefined;
            this._tail = undefined;
          } else if (e === this._head) {
            if (!e.next) {
              throw new Error("Invalid list");
            }
            e.next.previous = undefined;
            this._head = e.next;
          } else if (e === this._tail) {
            if (!e.previous) {
              throw new Error("Invalid list");
            }
            e.previous.next = undefined;
            this._tail = e.previous;
          } else {
            const t = e.next;
            const r = e.previous;
            if (!t || !r) {
              throw new Error("Invalid list");
            }
            t.previous = r;
            r.next = t;
          }
          e.next = undefined;
          e.previous = undefined;
          this._state++;
        }
        touch(e, t) {
          if (!this._head || !this._tail) {
            throw new Error("Invalid list");
          }
          if (t !== n.First && t !== n.Last) {
            return;
          }
          if (t === n.First) {
            if (e === this._head) {
              return;
            }
            const t = e.next;
            const r = e.previous;
            if (e === this._tail) {
              r.next = undefined;
              this._tail = r;
            } else {
              t.previous = r;
              r.next = t;
            }
            e.previous = undefined;
            e.next = this._head;
            this._head.previous = e;
            this._head = e;
            this._state++;
          } else if (t === n.Last) {
            if (e === this._tail) {
              return;
            }
            const t = e.next;
            const r = e.previous;
            if (e === this._head) {
              t.previous = undefined;
              this._head = t;
            } else {
              t.previous = r;
              r.next = t;
            }
            e.next = undefined;
            e.previous = this._tail;
            this._tail.next = e;
            this._tail = e;
            this._state++;
          }
        }
        toJSON() {
          const e = [];
          this.forEach((t, r) => {
            e.push([r, t]);
          });
          return e;
        }
        fromJSON(e) {
          this.clear();
          for (const [t, r] of e) {
            this.set(t, r);
          }
        }
      }
      t.LinkedMap = s;
      class i extends s {
        constructor(e, t = 1) {
          super();
          this._limit = e;
          this._ratio = Math.min(Math.max(0, t), 1);
        }
        get limit() {
          return this._limit;
        }
        set limit(e) {
          this._limit = e;
          this.checkTrim();
        }
        get ratio() {
          return this._ratio;
        }
        set ratio(e) {
          this._ratio = Math.min(Math.max(0, e), 1);
          this.checkTrim();
        }
        get(e, t = n.AsNew) {
          return super.get(e, t);
        }
        peek(e) {
          return super.get(e, n.None);
        }
        set(e, t) {
          super.set(e, t, n.Last);
          this.checkTrim();
          return this;
        }
        checkTrim() {
          if (this.size > this._limit) {
            this.trimOld(Math.round(this._limit * this._ratio));
          }
        }
      }
      t.LRUCache = i;
    },
    75530: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.AbstractMessageBuffer = void 0;
      const r = 13;
      const n = 10;
      const s = "\r\n";
      class i {
        constructor(e = "utf-8") {
          this._encoding = e;
          this._chunks = [];
          this._totalLength = 0;
        }
        get encoding() {
          return this._encoding;
        }
        append(e) {
          const t = typeof e === "string" ? this.fromString(e, this._encoding) : e;
          this._chunks.push(t);
          this._totalLength += t.byteLength;
        }
        tryReadHeaders(e = false) {
          if (this._chunks.length === 0) {
            return undefined;
          }
          let t = 0;
          let i = 0;
          let o = 0;
          let a = 0;
          e: while (i < this._chunks.length) {
            const e = this._chunks[i];
            o = 0;
            t: while (o < e.length) {
              const s = e[o];
              switch (s) {
                case r:
                  switch (t) {
                    case 0:
                      t = 1;
                      break;
                    case 2:
                      t = 3;
                      break;
                    default:
                      t = 0;
                  }
                  break;
                case n:
                  switch (t) {
                    case 1:
                      t = 2;
                      break;
                    case 3:
                      t = 4;
                      o++;
                      break e;
                    default:
                      t = 0;
                  }
                  break;
                default:
                  t = 0;
              }
              o++;
            }
            a += e.byteLength;
            i++;
          }
          if (t !== 4) {
            return undefined;
          }
          const c = this._read(a + o);
          const u = new Map();
          const f = this.toString(c, "ascii").split(s);
          if (f.length < 2) {
            return u;
          }
          for (let r = 0; r < f.length - 2; r++) {
            const t = f[r];
            const n = t.indexOf(":");
            if (n === -1) {
              throw new Error("Message header must separate key and value using :");
            }
            const s = t.substr(0, n);
            const i = t.substr(n + 1).trim();
            u.set(e ? s.toLowerCase() : s, i);
          }
          return u;
        }
        tryReadBody(e) {
          if (this._totalLength < e) {
            return undefined;
          }
          return this._read(e);
        }
        get numberOfBytes() {
          return this._totalLength;
        }
        _read(e) {
          if (e === 0) {
            return this.emptyBuffer();
          }
          if (e > this._totalLength) {
            throw new Error(`Cannot read so many bytes!`);
          }
          if (this._chunks[0].byteLength === e) {
            const t = this._chunks[0];
            this._chunks.shift();
            this._totalLength -= e;
            return this.asNative(t);
          }
          if (this._chunks[0].byteLength > e) {
            const t = this._chunks[0];
            const r = this.asNative(t, e);
            this._chunks[0] = t.slice(e);
            this._totalLength -= e;
            return r;
          }
          const t = this.allocNative(e);
          let r = 0;
          let n = 0;
          while (e > 0) {
            const s = this._chunks[n];
            if (s.byteLength > e) {
              const i = s.slice(0, e);
              t.set(i, r);
              r += e;
              this._chunks[n] = s.slice(e);
              this._totalLength -= e;
              e -= e;
            } else {
              t.set(s, r);
              r += s.byteLength;
              this._chunks.shift();
              this._totalLength -= s.byteLength;
              e -= s.byteLength;
            }
          }
          return t;
        }
      }
      t.AbstractMessageBuffer = i;
    },
    56525: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.ReadableStreamMessageReader = t.AbstractMessageReader = t.MessageReader = void 0;
      const n = r(30147);
      const s = r(67574);
      const i = r(27135);
      const o = r(80142);
      var a;
      (function (e) {
        function t(e) {
          let t = e;
          return t && s.func(t.listen) && s.func(t.dispose) && s.func(t.onError) && s.func(t.onClose) && s.func(t.onPartialMessage);
        }
        e.is = t;
      })((a = t.MessageReader || (t.MessageReader = {})));
      class c {
        constructor() {
          this.errorEmitter = new i.Emitter();
          this.closeEmitter = new i.Emitter();
          this.partialMessageEmitter = new i.Emitter();
        }
        dispose() {
          this.errorEmitter.dispose();
          this.closeEmitter.dispose();
        }
        get onError() {
          return this.errorEmitter.event;
        }
        fireError(e) {
          this.errorEmitter.fire(this.asError(e));
        }
        get onClose() {
          return this.closeEmitter.event;
        }
        fireClose() {
          this.closeEmitter.fire(undefined);
        }
        get onPartialMessage() {
          return this.partialMessageEmitter.event;
        }
        firePartialMessage(e) {
          this.partialMessageEmitter.fire(e);
        }
        asError(e) {
          if (e instanceof Error) {
            return e;
          } else {
            return new Error(`Reader received error. Reason: ${s.string(e.message) ? e.message : "unknown"}`);
          }
        }
      }
      t.AbstractMessageReader = c;
      var u;
      (function (e) {
        function t(e) {
          let t;
          let r;
          let s;
          const i = new Map();
          let o;
          const a = new Map();
          if (e === undefined || typeof e === "string") {
            t = e ?? "utf-8";
          } else {
            t = e.charset ?? "utf-8";
            if (e.contentDecoder !== undefined) {
              s = e.contentDecoder;
              i.set(s.name, s);
            }
            if (e.contentDecoders !== undefined) {
              for (const t of e.contentDecoders) {
                i.set(t.name, t);
              }
            }
            if (e.contentTypeDecoder !== undefined) {
              o = e.contentTypeDecoder;
              a.set(o.name, o);
            }
            if (e.contentTypeDecoders !== undefined) {
              for (const t of e.contentTypeDecoders) {
                a.set(t.name, t);
              }
            }
          }
          if (o === undefined) {
            o = (0, n.default)().applicationJson.decoder;
            a.set(o.name, o);
          }
          return { charset: t, contentDecoder: s, contentDecoders: i, contentTypeDecoder: o, contentTypeDecoders: a };
        }
        e.fromOptions = t;
      })(u || (u = {}));
      class f extends c {
        constructor(e, t) {
          super();
          this.readable = e;
          this.options = u.fromOptions(t);
          this.buffer = (0, n.default)().messageBuffer.create(this.options.charset);
          this._partialMessageTimeout = 1e4;
          this.nextMessageLength = -1;
          this.messageToken = 0;
          this.readSemaphore = new o.Semaphore(1);
        }
        set partialMessageTimeout(e) {
          this._partialMessageTimeout = e;
        }
        get partialMessageTimeout() {
          return this._partialMessageTimeout;
        }
        listen(e) {
          this.nextMessageLength = -1;
          this.messageToken = 0;
          this.partialMessageTimer = undefined;
          this.callback = e;
          const t = this.readable.onData((e) => {
            this.onData(e);
          });
          this.readable.onError((e) => this.fireError(e));
          this.readable.onClose(() => this.fireClose());
          return t;
        }
        onData(e) {
          this.buffer.append(e);
          while (true) {
            if (this.nextMessageLength === -1) {
              const e = this.buffer.tryReadHeaders(true);
              if (!e) {
                return;
              }
              const t = e.get("content-length");
              if (!t) {
                this.fireError(new Error("Header must provide a Content-Length property."));
                return;
              }
              const r = parseInt(t);
              if (isNaN(r)) {
                this.fireError(new Error("Content-Length value must be a number."));
                return;
              }
              this.nextMessageLength = r;
            }
            const e = this.buffer.tryReadBody(this.nextMessageLength);
            if (e === undefined) {
              this.setPartialMessageTimer();
              return;
            }
            this.clearPartialMessageTimer();
            this.nextMessageLength = -1;
            this.readSemaphore
              .lock(async () => {
                const t = this.options.contentDecoder !== undefined ? await this.options.contentDecoder.decode(e) : e;
                const r = await this.options.contentTypeDecoder.decode(t, this.options);
                this.callback(r);
              })
              .catch((e) => {
                this.fireError(e);
              });
          }
        }
        clearPartialMessageTimer() {
          if (this.partialMessageTimer) {
            this.partialMessageTimer.dispose();
            this.partialMessageTimer = undefined;
          }
        }
        setPartialMessageTimer() {
          this.clearPartialMessageTimer();
          if (this._partialMessageTimeout <= 0) {
            return;
          }
          this.partialMessageTimer = (0, n.default)().timer.setTimeout(
            (e, t) => {
              this.partialMessageTimer = undefined;
              if (e === this.messageToken) {
                this.firePartialMessage({ messageToken: e, waitingTime: t });
                this.setPartialMessageTimer();
              }
            },
            this._partialMessageTimeout,
            this.messageToken,
            this._partialMessageTimeout
          );
        }
      }
      t.ReadableStreamMessageReader = f;
    },
    96654: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.WriteableStreamMessageWriter = t.AbstractMessageWriter = t.MessageWriter = void 0;
      const n = r(30147);
      const s = r(67574);
      const i = r(80142);
      const o = r(27135);
      const a = "Content-Length: ";
      const c = "\r\n";
      var u;
      (function (e) {
        function t(e) {
          let t = e;
          return t && s.func(t.dispose) && s.func(t.onClose) && s.func(t.onError) && s.func(t.write);
        }
        e.is = t;
      })((u = t.MessageWriter || (t.MessageWriter = {})));
      class f {
        constructor() {
          this.errorEmitter = new o.Emitter();
          this.closeEmitter = new o.Emitter();
        }
        dispose() {
          this.errorEmitter.dispose();
          this.closeEmitter.dispose();
        }
        get onError() {
          return this.errorEmitter.event;
        }
        fireError(e, t, r) {
          this.errorEmitter.fire([this.asError(e), t, r]);
        }
        get onClose() {
          return this.closeEmitter.event;
        }
        fireClose() {
          this.closeEmitter.fire(undefined);
        }
        asError(e) {
          if (e instanceof Error) {
            return e;
          } else {
            return new Error(`Writer received error. Reason: ${s.string(e.message) ? e.message : "unknown"}`);
          }
        }
      }
      t.AbstractMessageWriter = f;
      var l;
      (function (e) {
        function t(e) {
          if (e === undefined || typeof e === "string") {
            return { charset: e ?? "utf-8", contentTypeEncoder: (0, n.default)().applicationJson.encoder };
          } else {
            return {
              charset: e.charset ?? "utf-8",
              contentEncoder: e.contentEncoder,
              contentTypeEncoder: e.contentTypeEncoder ?? (0, n.default)().applicationJson.encoder,
            };
          }
        }
        e.fromOptions = t;
      })(l || (l = {}));
      class d extends f {
        constructor(e, t) {
          super();
          this.writable = e;
          this.options = l.fromOptions(t);
          this.errorCount = 0;
          this.writeSemaphore = new i.Semaphore(1);
          this.writable.onError((e) => this.fireError(e));
          this.writable.onClose(() => this.fireClose());
        }
        async write(e) {
          return this.writeSemaphore.lock(async () => {
            const t = this.options.contentTypeEncoder.encode(e, this.options).then((e) => {
              if (this.options.contentEncoder !== undefined) {
                return this.options.contentEncoder.encode(e);
              } else {
                return e;
              }
            });
            return t.then(
              (t) => {
                const r = [];
                r.push(a, t.byteLength.toString(), c);
                r.push(c);
                return this.doWrite(e, r, t);
              },
              (e) => {
                this.fireError(e);
                throw e;
              }
            );
          });
        }
        async doWrite(e, t, r) {
          try {
            await this.writable.write(t.join(""), "ascii");
            return this.writable.write(r);
          } catch (n) {
            this.handleError(n, e);
            return Promise.reject(n);
          }
        }
        handleError(e, t) {
          this.errorCount++;
          this.fireError(e, t, this.errorCount);
        }
        end() {
          this.writable.end();
        }
      }
      t.WriteableStreamMessageWriter = d;
    },
    20839: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.Message =
        t.NotificationType9 =
        t.NotificationType8 =
        t.NotificationType7 =
        t.NotificationType6 =
        t.NotificationType5 =
        t.NotificationType4 =
        t.NotificationType3 =
        t.NotificationType2 =
        t.NotificationType1 =
        t.NotificationType0 =
        t.NotificationType =
        t.RequestType9 =
        t.RequestType8 =
        t.RequestType7 =
        t.RequestType6 =
        t.RequestType5 =
        t.RequestType4 =
        t.RequestType3 =
        t.RequestType2 =
        t.RequestType1 =
        t.RequestType =
        t.RequestType0 =
        t.AbstractMessageSignature =
        t.ParameterStructures =
        t.ResponseError =
        t.ErrorCodes =
          void 0;
      const n = r(67574);
      var s;
      (function (e) {
        e.ParseError = -32700;
        e.InvalidRequest = -32600;
        e.MethodNotFound = -32601;
        e.InvalidParams = -32602;
        e.InternalError = -32603;
        e.jsonrpcReservedErrorRangeStart = -32099;
        e.serverErrorStart = -32099;
        e.MessageWriteError = -32099;
        e.MessageReadError = -32098;
        e.PendingResponseRejected = -32097;
        e.ConnectionInactive = -32096;
        e.ServerNotInitialized = -32002;
        e.UnknownErrorCode = -32001;
        e.jsonrpcReservedErrorRangeEnd = -32e3;
        e.serverErrorEnd = -32e3;
      })((s = t.ErrorCodes || (t.ErrorCodes = {})));
      class i extends Error {
        constructor(e, t, r) {
          super(t);
          this.code = n.number(e) ? e : s.UnknownErrorCode;
          this.data = r;
          Object.setPrototypeOf(this, i.prototype);
        }
        toJson() {
          const e = { code: this.code, message: this.message };
          if (this.data !== undefined) {
            e.data = this.data;
          }
          return e;
        }
      }
      t.ResponseError = i;
      class o {
        constructor(e) {
          this.kind = e;
        }
        static is(e) {
          return e === o.auto || e === o.byName || e === o.byPosition;
        }
        toString() {
          return this.kind;
        }
      }
      t.ParameterStructures = o;
      o.auto = new o("auto");
      o.byPosition = new o("byPosition");
      o.byName = new o("byName");
      class a {
        constructor(e, t) {
          this.method = e;
          this.numberOfParams = t;
        }
        get parameterStructures() {
          return o.auto;
        }
      }
      t.AbstractMessageSignature = a;
      class c extends a {
        constructor(e) {
          super(e, 0);
        }
      }
      t.RequestType0 = c;
      class u extends a {
        constructor(e, t = o.auto) {
          super(e, 1);
          this._parameterStructures = t;
        }
        get parameterStructures() {
          return this._parameterStructures;
        }
      }
      t.RequestType = u;
      class f extends a {
        constructor(e, t = o.auto) {
          super(e, 1);
          this._parameterStructures = t;
        }
        get parameterStructures() {
          return this._parameterStructures;
        }
      }
      t.RequestType1 = f;
      class l extends a {
        constructor(e) {
          super(e, 2);
        }
      }
      t.RequestType2 = l;
      class d extends a {
        constructor(e) {
          super(e, 3);
        }
      }
      t.RequestType3 = d;
      class h extends a {
        constructor(e) {
          super(e, 4);
        }
      }
      t.RequestType4 = h;
      class p extends a {
        constructor(e) {
          super(e, 5);
        }
      }
      t.RequestType5 = p;
      class g extends a {
        constructor(e) {
          super(e, 6);
        }
      }
      t.RequestType6 = g;
      class m extends a {
        constructor(e) {
          super(e, 7);
        }
      }
      t.RequestType7 = m;
      class y extends a {
        constructor(e) {
          super(e, 8);
        }
      }
      t.RequestType8 = y;
      class b extends a {
        constructor(e) {
          super(e, 9);
        }
      }
      t.RequestType9 = b;
      class v extends a {
        constructor(e, t = o.auto) {
          super(e, 1);
          this._parameterStructures = t;
        }
        get parameterStructures() {
          return this._parameterStructures;
        }
      }
      t.NotificationType = v;
      class _ extends a {
        constructor(e) {
          super(e, 0);
        }
      }
      t.NotificationType0 = _;
      class w extends a {
        constructor(e, t = o.auto) {
          super(e, 1);
          this._parameterStructures = t;
        }
        get parameterStructures() {
          return this._parameterStructures;
        }
      }
      t.NotificationType1 = w;
      class T extends a {
        constructor(e) {
          super(e, 2);
        }
      }
      t.NotificationType2 = T;
      class E extends a {
        constructor(e) {
          super(e, 3);
        }
      }
      t.NotificationType3 = E;
      class S extends a {
        constructor(e) {
          super(e, 4);
        }
      }
      t.NotificationType4 = S;
      class C extends a {
        constructor(e) {
          super(e, 5);
        }
      }
      t.NotificationType5 = C;
      class R extends a {
        constructor(e) {
          super(e, 6);
        }
      }
      t.NotificationType6 = R;
      class k extends a {
        constructor(e) {
          super(e, 7);
        }
      }
      t.NotificationType7 = k;
      class M extends a {
        constructor(e) {
          super(e, 8);
        }
      }
      t.NotificationType8 = M;
      class j extends a {
        constructor(e) {
          super(e, 9);
        }
      }
      t.NotificationType9 = j;
      var O;
      (function (e) {
        function t(e) {
          const t = e;
          return t && n.string(t.method) && (n.string(t.id) || n.number(t.id));
        }
        e.isRequest = t;
        function r(e) {
          const t = e;
          return t && n.string(t.method) && e.id === void 0;
        }
        e.isNotification = r;
        function s(e) {
          const t = e;
          return t && (t.result !== void 0 || !!t.error) && (n.string(t.id) || n.number(t.id) || t.id === null);
        }
        e.isResponse = s;
      })((O = t.Message || (t.Message = {})));
    },
    30147: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      let r;
      function n() {
        if (r === undefined) {
          throw new Error(`No runtime abstraction layer installed`);
        }
        return r;
      }
      (function (e) {
        function t(e) {
          if (e === undefined) {
            throw new Error(`No runtime abstraction layer provided`);
          }
          r = e;
        }
        e.install = t;
      })(n || (n = {}));
      t["default"] = n;
    },
    80142: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.Semaphore = void 0;
      const n = r(30147);
      class s {
        constructor(e = 1) {
          if (e <= 0) {
            throw new Error("Capacity must be greater than 0");
          }
          this._capacity = e;
          this._active = 0;
          this._waiting = [];
        }
        lock(e) {
          return new Promise((t, r) => {
            this._waiting.push({ thunk: e, resolve: t, reject: r });
            this.runNext();
          });
        }
        get active() {
          return this._active;
        }
        runNext() {
          if (this._waiting.length === 0 || this._active === this._capacity) {
            return;
          }
          (0, n.default)().timer.setImmediate(() => this.doRunNext());
        }
        doRunNext() {
          if (this._waiting.length === 0 || this._active === this._capacity) {
            return;
          }
          const e = this._waiting.shift();
          this._active++;
          if (this._active > this._capacity) {
            throw new Error(`To many thunks active`);
          }
          try {
            const t = e.thunk();
            if (t instanceof Promise) {
              t.then(
                (t) => {
                  this._active--;
                  e.resolve(t);
                  this.runNext();
                },
                (t) => {
                  this._active--;
                  e.reject(t);
                  this.runNext();
                }
              );
            } else {
              this._active--;
              e.resolve(t);
              this.runNext();
            }
          } catch (t) {
            this._active--;
            e.reject(t);
            this.runNext();
          }
        }
      }
      t.Semaphore = s;
    },
    98211: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.SharedArrayReceiverStrategy = t.SharedArraySenderStrategy = void 0;
      const n = r(13881);
      var s;
      (function (e) {
        e.Continue = 0;
        e.Cancelled = 1;
      })(s || (s = {}));
      class i {
        constructor() {
          this.buffers = new Map();
        }
        enableCancellation(e) {
          if (e.id === null) {
            return;
          }
          const t = new SharedArrayBuffer(4);
          const r = new Int32Array(t, 0, 1);
          r[0] = s.Continue;
          this.buffers.set(e.id, t);
          e.$cancellationData = t;
        }
        async sendCancellation(e, t) {
          const r = this.buffers.get(t);
          if (r === undefined) {
            return;
          }
          const n = new Int32Array(r, 0, 1);
          Atomics.store(n, 0, s.Cancelled);
        }
        cleanup(e) {
          this.buffers.delete(e);
        }
        dispose() {
          this.buffers.clear();
        }
      }
      t.SharedArraySenderStrategy = i;
      class o {
        constructor(e) {
          this.data = new Int32Array(e, 0, 1);
        }
        get isCancellationRequested() {
          return Atomics.load(this.data, 0) === s.Cancelled;
        }
        get onCancellationRequested() {
          throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
        }
      }
      class a {
        constructor(e) {
          this.token = new o(e);
        }
        cancel() {}
        dispose() {}
      }
      class c {
        constructor() {
          this.kind = "request";
        }
        createCancellationTokenSource(e) {
          const t = e.$cancellationData;
          if (t === undefined) {
            return new n.CancellationTokenSource();
          }
          return new a(t);
        }
      }
      t.SharedArrayReceiverStrategy = c;
    },
    97608: (e, t, r) => {
      "use strict";
      r.d(t, { ConsoleLogger: () => l, listen: () => d });
      var n = r(39054);
      var s = r(20839);
      class i {
        constructor() {
          this.disposables = [];
        }
        dispose() {
          while (this.disposables.length !== 0) {
            this.disposables.pop().dispose();
          }
        }
        push(e) {
          const t = this.disposables;
          t.push(e);
          return {
            dispose() {
              const r = t.indexOf(e);
              if (r !== -1) {
                t.splice(r, 1);
              }
            },
          };
        }
      }
      var o = r(56525);
      class a extends o.AbstractMessageReader {
        constructor(e) {
          super();
          this.socket = e;
          this.state = "initial";
          this.events = [];
          this.socket.onMessage((e) => this.readMessage(e));
          this.socket.onError((e) => this.fireError(e));
          this.socket.onClose((e, t) => {
            if (e !== 1e3) {
              const r = { name: "" + e, message: `Error during socket reconnect: code = ${e}, reason = ${t}` };
              this.fireError(r);
            }
            this.fireClose();
          });
        }
        listen(e) {
          if (this.state === "initial") {
            this.state = "listening";
            this.callback = e;
            while (this.events.length !== 0) {
              const e = this.events.pop();
              if (e.message) {
                this.readMessage(e.message);
              } else if (e.error) {
                this.fireError(e.error);
              } else {
                this.fireClose();
              }
            }
          }
          return {
            dispose: () => {
              if (this.callback === e) {
                this.callback = undefined;
              }
            },
          };
        }
        readMessage(e) {
          if (this.state === "initial") {
            this.events.splice(0, 0, { message: e });
          } else if (this.state === "listening") {
            const t = JSON.parse(e);
            this.callback(t);
          }
        }
        fireError(e) {
          if (this.state === "initial") {
            this.events.splice(0, 0, { error: e });
          } else if (this.state === "listening") {
            super.fireError(e);
          }
        }
        fireClose() {
          if (this.state === "initial") {
            this.events.splice(0, 0, {});
          } else if (this.state === "listening") {
            super.fireClose();
          }
          this.state = "closed";
        }
      }
      var c = r(96654);
      class u extends c.AbstractMessageWriter {
        constructor(e) {
          super();
          this.socket = e;
          this.errorCount = 0;
        }
        end() {}
        async write(e) {
          try {
            const t = JSON.stringify(e);
            this.socket.send(t);
          } catch (t) {
            this.errorCount++;
            this.fireError(t, e, this.errorCount);
          }
        }
      }
      function f(e, t) {
        const r = new a(e);
        const s = new u(e);
        const i = (0, n.createMessageConnection)(r, s, t);
        i.onClose(() => i.dispose());
        return i;
      }
      class l {
        error(e) {
          console.error(e);
        }
        warn(e) {
          console.warn(e);
        }
        info(e) {
          console.info(e);
        }
        log(e) {
          console.log(e);
        }
        debug(e) {
          console.debug(e);
        }
      }
      function d(e) {
        const { webSocket: t, onConnection: r } = e;
        const n = e.logger || new l();
        t.onopen = () => {
          const e = h(t);
          const s = f(e, n);
          r(s);
        };
      }
      function h(e) {
        return {
          send: (t) => e.send(t),
          onMessage: (t) => {
            e.onmessage = (e) => t(e.data);
          },
          onError: (t) => {
            e.onerror = (e) => {
              if ("message" in e) {
                t(e.message);
              }
            };
          },
          onClose: (t) => {
            e.onclose = (e) => t(e.code, e.reason);
          },
          dispose: () => e.close(),
        };
      }
    },
  },
]);
