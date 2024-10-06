/*! For license information please see 4136.4b9f72f85f49f979ebb8.js.LICENSE.txt */
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [4136],
  {
    17967: (t, e) => {
      "use strict";
      var r;
      r = { value: true };
      e.Nm = e.Rq = void 0;
      var i = /^([^\w]*)(javascript|data|vbscript)/im;
      var n = /&#(\w+)(^\w|;)?/g;
      var o = /&(newline|tab);/gi;
      var s = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
      var a = /^.+(:|&colon;)/gim;
      var l = [".", "/"];
      e.Rq = "about:blank";
      function c(t) {
        return l.indexOf(t[0]) > -1;
      }
      function h(t) {
        var e = t.replace(s, "");
        return e.replace(n, function (t, e) {
          return String.fromCharCode(e);
        });
      }
      function u(t) {
        if (!t) {
          return e.Rq;
        }
        var r = h(t).replace(o, "").replace(s, "").trim();
        if (!r) {
          return e.Rq;
        }
        if (c(r)) {
          return r;
        }
        var n = r.match(a);
        if (!n) {
          return r;
        }
        var l = n[0];
        if (i.test(l)) {
          return e.Rq;
        }
        return r;
      }
      e.Nm = u;
    },
    34596: (t, e, r) => {
      "use strict";
      r.d(e, {
        Nb1: () => Xi.Z,
        LLu: () => b,
        F5q: () => y,
        $0Z: () => an.ZP,
        Dts: () => on.Z,
        WQY: () => sn.Z,
        qpX: () => hn,
        u93: () => un,
        tFB: () => dn.Z,
        YY7: () => mn.ZP,
        OvA: () => pn.Z,
        dCK: () => gn.Z,
        zgE: () => bn.Z,
        fGX: () => yn.Z,
        $m7: () => Cn.Z,
        c_6: () => xn.Z,
        fxm: () => vn.Z,
        FdL: () => kn.Z,
        ak_: () => kn.s,
        SxZ: () => Tn.Z,
        eA_: () => _n.ZP,
        jsv: () => _n.cD,
        iJ: () => _n.RN,
        JHv: () => zi.interpolateHcl,
        jvg: () => Ki.Z,
        Fp7: () => i.Z,
        VV$: () => n.Z,
        ve8: () => nn,
        tiA: () => $i,
        BYU: () => Wi.Z,
        PKp: () => ji.Z,
        Xf: () => Hi.Z,
        K2I: () => Ui,
        Ys: () => Vi,
        td_: () => Gi,
        YPS: () => qi,
        rr1: () => An.rr,
        i$Z: () => En.i$,
        y2j: () => Ln.y2,
        WQD: () => Fn.WQ,
        U8T: () => wn.A,
        Z_i: () => Bn.Z_,
        Ox9: () => Ln.Ox,
        F0B: () => Zn.F0,
        LqH: () => Ln.Lq,
        S1K: () => Sn.E,
        Zyz: () => Ln.Zy,
        Igq: () => Ln.Ig,
        YDX: () => Ln.YD,
        EFj: () => Ln.EF,
      });
      var i = r(98823);
      var n = r(47622);
      function o(t) {
        return t;
      }
      var s = 1,
        a = 2,
        l = 3,
        c = 4,
        h = 1e-6;
      function u(t) {
        return "translate(" + t + ",0)";
      }
      function f(t) {
        return "translate(0," + t + ")";
      }
      function d(t) {
        return (e) => +t(e);
      }
      function p(t, e) {
        e = Math.max(0, t.bandwidth() - e * 2) / 2;
        if (t.round()) e = Math.round(e);
        return (r) => +t(r) + e;
      }
      function g() {
        return !this.__axis;
      }
      function m(t, e) {
        var r = [],
          i = null,
          n = null,
          m = 6,
          y = 6,
          C = 3,
          b = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5,
          v = t === s || t === c ? -1 : 1,
          x = t === c || t === a ? "x" : "y",
          k = t === s || t === l ? u : f;
        function T(u) {
          var f = i == null ? (e.ticks ? e.ticks.apply(e, r) : e.domain()) : i,
            T = n == null ? (e.tickFormat ? e.tickFormat.apply(e, r) : o) : n,
            _ = Math.max(m, 0) + C,
            w = e.range(),
            S = +w[0] + b,
            B = +w[w.length - 1] + b,
            F = (e.bandwidth ? p : d)(e.copy(), b),
            A = u.selection ? u.selection() : u,
            L = A.selectAll(".domain").data([null]),
            Z = A.selectAll(".tick").data(f, e).order(),
            E = Z.exit(),
            M = Z.enter().append("g").attr("class", "tick"),
            O = Z.select("line"),
            I = Z.select("text");
          L = L.merge(L.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
          Z = Z.merge(M);
          O = O.merge(
            M.append("line")
              .attr("stroke", "currentColor")
              .attr(x + "2", v * m)
          );
          I = I.merge(
            M.append("text")
              .attr("fill", "currentColor")
              .attr(x, v * _)
              .attr("dy", t === s ? "0em" : t === l ? "0.71em" : "0.32em")
          );
          if (u !== A) {
            L = L.transition(u);
            Z = Z.transition(u);
            O = O.transition(u);
            I = I.transition(u);
            E = E.transition(u)
              .attr("opacity", h)
              .attr("transform", function (t) {
                return isFinite((t = F(t))) ? k(t + b) : this.getAttribute("transform");
              });
            M.attr("opacity", h).attr("transform", function (t) {
              var e = this.parentNode.__axis;
              return k((e && isFinite((e = e(t))) ? e : F(t)) + b);
            });
          }
          E.remove();
          L.attr(
            "d",
            t === c || t === a
              ? y
                ? "M" + v * y + "," + S + "H" + b + "V" + B + "H" + v * y
                : "M" + b + "," + S + "V" + B
              : y
                ? "M" + S + "," + v * y + "V" + b + "H" + B + "V" + v * y
                : "M" + S + "," + b + "H" + B
          );
          Z.attr("opacity", 1).attr("transform", function (t) {
            return k(F(t) + b);
          });
          O.attr(x + "2", v * m);
          I.attr(x, v * _).text(T);
          A.filter(g)
            .attr("fill", "none")
            .attr("font-size", 10)
            .attr("font-family", "sans-serif")
            .attr("text-anchor", t === a ? "start" : t === c ? "end" : "middle");
          A.each(function () {
            this.__axis = F;
          });
        }
        T.scale = function (t) {
          return arguments.length ? ((e = t), T) : e;
        };
        T.ticks = function () {
          return (r = Array.from(arguments)), T;
        };
        T.tickArguments = function (t) {
          return arguments.length ? ((r = t == null ? [] : Array.from(t)), T) : r.slice();
        };
        T.tickValues = function (t) {
          return arguments.length ? ((i = t == null ? null : Array.from(t)), T) : i && i.slice();
        };
        T.tickFormat = function (t) {
          return arguments.length ? ((n = t), T) : n;
        };
        T.tickSize = function (t) {
          return arguments.length ? ((m = y = +t), T) : m;
        };
        T.tickSizeInner = function (t) {
          return arguments.length ? ((m = +t), T) : m;
        };
        T.tickSizeOuter = function (t) {
          return arguments.length ? ((y = +t), T) : y;
        };
        T.tickPadding = function (t) {
          return arguments.length ? ((C = +t), T) : C;
        };
        T.offset = function (t) {
          return arguments.length ? ((b = +t), T) : b;
        };
        return T;
      }
      function y(t) {
        return m(s, t);
      }
      function C(t) {
        return m(a, t);
      }
      function b(t) {
        return m(l, t);
      }
      function v(t) {
        return m(c, t);
      }
      function x() {}
      function k(t) {
        return t == null
          ? x
          : function () {
              return this.querySelector(t);
            };
      }
      function T(t) {
        if (typeof t !== "function") t = k(t);
        for (var e = this._groups, r = e.length, i = new Array(r), n = 0; n < r; ++n) {
          for (var o = e[n], s = o.length, a = (i[n] = new Array(s)), l, c, h = 0; h < s; ++h) {
            if ((l = o[h]) && (c = t.call(l, l.__data__, h, o))) {
              if ("__data__" in l) c.__data__ = l.__data__;
              a[h] = c;
            }
          }
        }
        return new ye(i, this._parents);
      }
      function _(t) {
        return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
      }
      function w() {
        return [];
      }
      function S(t) {
        return t == null
          ? w
          : function () {
              return this.querySelectorAll(t);
            };
      }
      function B(t) {
        return function () {
          return _(t.apply(this, arguments));
        };
      }
      function F(t) {
        if (typeof t === "function") t = B(t);
        else t = S(t);
        for (var e = this._groups, r = e.length, i = [], n = [], o = 0; o < r; ++o) {
          for (var s = e[o], a = s.length, l, c = 0; c < a; ++c) {
            if ((l = s[c])) {
              i.push(t.call(l, l.__data__, c, s));
              n.push(l);
            }
          }
        }
        return new ye(i, n);
      }
      function A(t) {
        return function () {
          return this.matches(t);
        };
      }
      function L(t) {
        return function (e) {
          return e.matches(t);
        };
      }
      var Z = Array.prototype.find;
      function E(t) {
        return function () {
          return Z.call(this.children, t);
        };
      }
      function M() {
        return this.firstElementChild;
      }
      function O(t) {
        return this.select(t == null ? M : E(typeof t === "function" ? t : L(t)));
      }
      var I = Array.prototype.filter;
      function q() {
        return Array.from(this.children);
      }
      function z(t) {
        return function () {
          return I.call(this.children, t);
        };
      }
      function D(t) {
        return this.selectAll(t == null ? q : z(typeof t === "function" ? t : L(t)));
      }
      function N(t) {
        if (typeof t !== "function") t = A(t);
        for (var e = this._groups, r = e.length, i = new Array(r), n = 0; n < r; ++n) {
          for (var o = e[n], s = o.length, a = (i[n] = []), l, c = 0; c < s; ++c) {
            if ((l = o[c]) && t.call(l, l.__data__, c, o)) {
              a.push(l);
            }
          }
        }
        return new ye(i, this._parents);
      }
      function j(t) {
        return new Array(t.length);
      }
      function $() {
        return new ye(this._enter || this._groups.map(j), this._parents);
      }
      function P(t, e) {
        this.ownerDocument = t.ownerDocument;
        this.namespaceURI = t.namespaceURI;
        this._next = null;
        this._parent = t;
        this.__data__ = e;
      }
      P.prototype = {
        constructor: P,
        appendChild: function (t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function (t, e) {
          return this._parent.insertBefore(t, e);
        },
        querySelector: function (t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function (t) {
          return this._parent.querySelectorAll(t);
        },
      };
      function R(t) {
        return function () {
          return t;
        };
      }
      function W(t, e, r, i, n, o) {
        var s = 0,
          a,
          l = e.length,
          c = o.length;
        for (; s < c; ++s) {
          if ((a = e[s])) {
            a.__data__ = o[s];
            i[s] = a;
          } else {
            r[s] = new P(t, o[s]);
          }
        }
        for (; s < l; ++s) {
          if ((a = e[s])) {
            n[s] = a;
          }
        }
      }
      function H(t, e, r, i, n, o, s) {
        var a,
          l,
          c = new Map(),
          h = e.length,
          u = o.length,
          f = new Array(h),
          d;
        for (a = 0; a < h; ++a) {
          if ((l = e[a])) {
            f[a] = d = s.call(l, l.__data__, a, e) + "";
            if (c.has(d)) {
              n[a] = l;
            } else {
              c.set(d, l);
            }
          }
        }
        for (a = 0; a < u; ++a) {
          d = s.call(t, o[a], a, o) + "";
          if ((l = c.get(d))) {
            i[a] = l;
            l.__data__ = o[a];
            c.delete(d);
          } else {
            r[a] = new P(t, o[a]);
          }
        }
        for (a = 0; a < h; ++a) {
          if ((l = e[a]) && c.get(f[a]) === l) {
            n[a] = l;
          }
        }
      }
      function Y(t) {
        return t.__data__;
      }
      function U(t, e) {
        if (!arguments.length) return Array.from(this, Y);
        var r = e ? H : W,
          i = this._parents,
          n = this._groups;
        if (typeof t !== "function") t = R(t);
        for (var o = n.length, s = new Array(o), a = new Array(o), l = new Array(o), c = 0; c < o; ++c) {
          var h = i[c],
            u = n[c],
            f = u.length,
            d = V(t.call(h, h && h.__data__, c, i)),
            p = d.length,
            g = (a[c] = new Array(p)),
            m = (s[c] = new Array(p)),
            y = (l[c] = new Array(f));
          r(h, u, g, m, y, d, e);
          for (var C = 0, b = 0, v, x; C < p; ++C) {
            if ((v = g[C])) {
              if (C >= b) b = C + 1;
              while (!(x = m[b]) && ++b < p);
              v._next = x || null;
            }
          }
        }
        s = new ye(s, i);
        s._enter = a;
        s._exit = l;
        return s;
      }
      function V(t) {
        return typeof t === "object" && "length" in t ? t : Array.from(t);
      }
      function G() {
        return new ye(this._exit || this._groups.map(j), this._parents);
      }
      function X(t, e, r) {
        var i = this.enter(),
          n = this,
          o = this.exit();
        if (typeof t === "function") {
          i = t(i);
          if (i) i = i.selection();
        } else {
          i = i.append(t + "");
        }
        if (e != null) {
          n = e(n);
          if (n) n = n.selection();
        }
        if (r == null) o.remove();
        else r(o);
        return i && n ? i.merge(n).order() : n;
      }
      function K(t) {
        var e = t.selection ? t.selection() : t;
        for (var r = this._groups, i = e._groups, n = r.length, o = i.length, s = Math.min(n, o), a = new Array(n), l = 0; l < s; ++l) {
          for (var c = r[l], h = i[l], u = c.length, f = (a[l] = new Array(u)), d, p = 0; p < u; ++p) {
            if ((d = c[p] || h[p])) {
              f[p] = d;
            }
          }
        }
        for (; l < n; ++l) {
          a[l] = r[l];
        }
        return new ye(a, this._parents);
      }
      function Q() {
        for (var t = this._groups, e = -1, r = t.length; ++e < r; ) {
          for (var i = t[e], n = i.length - 1, o = i[n], s; --n >= 0; ) {
            if ((s = i[n])) {
              if (o && s.compareDocumentPosition(o) ^ 4) o.parentNode.insertBefore(s, o);
              o = s;
            }
          }
        }
        return this;
      }
      function J(t) {
        if (!t) t = tt;
        function e(e, r) {
          return e && r ? t(e.__data__, r.__data__) : !e - !r;
        }
        for (var r = this._groups, i = r.length, n = new Array(i), o = 0; o < i; ++o) {
          for (var s = r[o], a = s.length, l = (n[o] = new Array(a)), c, h = 0; h < a; ++h) {
            if ((c = s[h])) {
              l[h] = c;
            }
          }
          l.sort(e);
        }
        return new ye(n, this._parents).order();
      }
      function tt(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
      }
      function et() {
        var t = arguments[0];
        arguments[0] = this;
        t.apply(null, arguments);
        return this;
      }
      function rt() {
        return Array.from(this);
      }
      function it() {
        for (var t = this._groups, e = 0, r = t.length; e < r; ++e) {
          for (var i = t[e], n = 0, o = i.length; n < o; ++n) {
            var s = i[n];
            if (s) return s;
          }
        }
        return null;
      }
      function nt() {
        let t = 0;
        for (const e of this) ++t;
        return t;
      }
      function ot() {
        return !this.node();
      }
      function st(t) {
        for (var e = this._groups, r = 0, i = e.length; r < i; ++r) {
          for (var n = e[r], o = 0, s = n.length, a; o < s; ++o) {
            if ((a = n[o])) t.call(a, a.__data__, o, n);
          }
        }
        return this;
      }
      var at = "http://www.w3.org/1999/xhtml";
      const lt = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: at,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      };
      function ct(t) {
        var e = (t += ""),
          r = e.indexOf(":");
        if (r >= 0 && (e = t.slice(0, r)) !== "xmlns") t = t.slice(r + 1);
        return lt.hasOwnProperty(e) ? { space: lt[e], local: t } : t;
      }
      function ht(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function ut(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function ft(t, e) {
        return function () {
          this.setAttribute(t, e);
        };
      }
      function dt(t, e) {
        return function () {
          this.setAttributeNS(t.space, t.local, e);
        };
      }
      function pt(t, e) {
        return function () {
          var r = e.apply(this, arguments);
          if (r == null) this.removeAttribute(t);
          else this.setAttribute(t, r);
        };
      }
      function gt(t, e) {
        return function () {
          var r = e.apply(this, arguments);
          if (r == null) this.removeAttributeNS(t.space, t.local);
          else this.setAttributeNS(t.space, t.local, r);
        };
      }
      function mt(t, e) {
        var r = ct(t);
        if (arguments.length < 2) {
          var i = this.node();
          return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
        }
        return this.each((e == null ? (r.local ? ut : ht) : typeof e === "function" ? (r.local ? gt : pt) : r.local ? dt : ft)(r, e));
      }
      function yt(t) {
        return (t.ownerDocument && t.ownerDocument.defaultView) || (t.document && t) || t.defaultView;
      }
      function Ct(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function bt(t, e, r) {
        return function () {
          this.style.setProperty(t, e, r);
        };
      }
      function vt(t, e, r) {
        return function () {
          var i = e.apply(this, arguments);
          if (i == null) this.style.removeProperty(t);
          else this.style.setProperty(t, i, r);
        };
      }
      function xt(t, e, r) {
        return arguments.length > 1 ? this.each((e == null ? Ct : typeof e === "function" ? vt : bt)(t, e, r == null ? "" : r)) : kt(this.node(), t);
      }
      function kt(t, e) {
        return t.style.getPropertyValue(e) || yt(t).getComputedStyle(t, null).getPropertyValue(e);
      }
      function Tt(t) {
        return function () {
          delete this[t];
        };
      }
      function _t(t, e) {
        return function () {
          this[t] = e;
        };
      }
      function wt(t, e) {
        return function () {
          var r = e.apply(this, arguments);
          if (r == null) delete this[t];
          else this[t] = r;
        };
      }
      function St(t, e) {
        return arguments.length > 1 ? this.each((e == null ? Tt : typeof e === "function" ? wt : _t)(t, e)) : this.node()[t];
      }
      function Bt(t) {
        return t.trim().split(/^|\s+/);
      }
      function Ft(t) {
        return t.classList || new At(t);
      }
      function At(t) {
        this._node = t;
        this._names = Bt(t.getAttribute("class") || "");
      }
      At.prototype = {
        add: function (t) {
          var e = this._names.indexOf(t);
          if (e < 0) {
            this._names.push(t);
            this._node.setAttribute("class", this._names.join(" "));
          }
        },
        remove: function (t) {
          var e = this._names.indexOf(t);
          if (e >= 0) {
            this._names.splice(e, 1);
            this._node.setAttribute("class", this._names.join(" "));
          }
        },
        contains: function (t) {
          return this._names.indexOf(t) >= 0;
        },
      };
      function Lt(t, e) {
        var r = Ft(t),
          i = -1,
          n = e.length;
        while (++i < n) r.add(e[i]);
      }
      function Zt(t, e) {
        var r = Ft(t),
          i = -1,
          n = e.length;
        while (++i < n) r.remove(e[i]);
      }
      function Et(t) {
        return function () {
          Lt(this, t);
        };
      }
      function Mt(t) {
        return function () {
          Zt(this, t);
        };
      }
      function Ot(t, e) {
        return function () {
          (e.apply(this, arguments) ? Lt : Zt)(this, t);
        };
      }
      function It(t, e) {
        var r = Bt(t + "");
        if (arguments.length < 2) {
          var i = Ft(this.node()),
            n = -1,
            o = r.length;
          while (++n < o) if (!i.contains(r[n])) return false;
          return true;
        }
        return this.each((typeof e === "function" ? Ot : e ? Et : Mt)(r, e));
      }
      function qt() {
        this.textContent = "";
      }
      function zt(t) {
        return function () {
          this.textContent = t;
        };
      }
      function Dt(t) {
        return function () {
          var e = t.apply(this, arguments);
          this.textContent = e == null ? "" : e;
        };
      }
      function Nt(t) {
        return arguments.length ? this.each(t == null ? qt : (typeof t === "function" ? Dt : zt)(t)) : this.node().textContent;
      }
      function jt() {
        this.innerHTML = "";
      }
      function $t(t) {
        return function () {
          this.innerHTML = t;
        };
      }
      function Pt(t) {
        return function () {
          var e = t.apply(this, arguments);
          this.innerHTML = e == null ? "" : e;
        };
      }
      function Rt(t) {
        return arguments.length ? this.each(t == null ? jt : (typeof t === "function" ? Pt : $t)(t)) : this.node().innerHTML;
      }
      function Wt() {
        if (this.nextSibling) this.parentNode.appendChild(this);
      }
      function Ht() {
        return this.each(Wt);
      }
      function Yt() {
        if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function Ut() {
        return this.each(Yt);
      }
      function Vt(t) {
        return function () {
          var e = this.ownerDocument,
            r = this.namespaceURI;
          return r === at && e.documentElement.namespaceURI === at ? e.createElement(t) : e.createElementNS(r, t);
        };
      }
      function Gt(t) {
        return function () {
          return this.ownerDocument.createElementNS(t.space, t.local);
        };
      }
      function Xt(t) {
        var e = ct(t);
        return (e.local ? Gt : Vt)(e);
      }
      function Kt(t) {
        var e = typeof t === "function" ? t : Xt(t);
        return this.select(function () {
          return this.appendChild(e.apply(this, arguments));
        });
      }
      function Qt() {
        return null;
      }
      function Jt(t, e) {
        var r = typeof t === "function" ? t : Xt(t),
          i = e == null ? Qt : typeof e === "function" ? e : k(e);
        return this.select(function () {
          return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
        });
      }
      function te() {
        var t = this.parentNode;
        if (t) t.removeChild(this);
      }
      function ee() {
        return this.each(te);
      }
      function re() {
        var t = this.cloneNode(false),
          e = this.parentNode;
        return e ? e.insertBefore(t, this.nextSibling) : t;
      }
      function ie() {
        var t = this.cloneNode(true),
          e = this.parentNode;
        return e ? e.insertBefore(t, this.nextSibling) : t;
      }
      function ne(t) {
        return this.select(t ? ie : re);
      }
      function oe(t) {
        return arguments.length ? this.property("__data__", t) : this.node().__data__;
      }
      function se(t) {
        return function (e) {
          t.call(this, e, this.__data__);
        };
      }
      function ae(t) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var e = "",
              r = t.indexOf(".");
            if (r >= 0) (e = t.slice(r + 1)), (t = t.slice(0, r));
            return { type: t, name: e };
          });
      }
      function le(t) {
        return function () {
          var e = this.__on;
          if (!e) return;
          for (var r = 0, i = -1, n = e.length, o; r < n; ++r) {
            if (((o = e[r]), (!t.type || o.type === t.type) && o.name === t.name)) {
              this.removeEventListener(o.type, o.listener, o.options);
            } else {
              e[++i] = o;
            }
          }
          if (++i) e.length = i;
          else delete this.__on;
        };
      }
      function ce(t, e, r) {
        return function () {
          var i = this.__on,
            n,
            o = se(e);
          if (i)
            for (var s = 0, a = i.length; s < a; ++s) {
              if ((n = i[s]).type === t.type && n.name === t.name) {
                this.removeEventListener(n.type, n.listener, n.options);
                this.addEventListener(n.type, (n.listener = o), (n.options = r));
                n.value = e;
                return;
              }
            }
          this.addEventListener(t.type, o, r);
          n = { type: t.type, name: t.name, value: e, listener: o, options: r };
          if (!i) this.__on = [n];
          else i.push(n);
        };
      }
      function he(t, e, r) {
        var i = ae(t + ""),
          n,
          o = i.length,
          s;
        if (arguments.length < 2) {
          var a = this.node().__on;
          if (a)
            for (var l = 0, c = a.length, h; l < c; ++l) {
              for (n = 0, h = a[l]; n < o; ++n) {
                if ((s = i[n]).type === h.type && s.name === h.name) {
                  return h.value;
                }
              }
            }
          return;
        }
        a = e ? ce : le;
        for (n = 0; n < o; ++n) this.each(a(i[n], e, r));
        return this;
      }
      function ue(t, e, r) {
        var i = yt(t),
          n = i.CustomEvent;
        if (typeof n === "function") {
          n = new n(e, r);
        } else {
          n = i.document.createEvent("Event");
          if (r) n.initEvent(e, r.bubbles, r.cancelable), (n.detail = r.detail);
          else n.initEvent(e, false, false);
        }
        t.dispatchEvent(n);
      }
      function fe(t, e) {
        return function () {
          return ue(this, t, e);
        };
      }
      function de(t, e) {
        return function () {
          return ue(this, t, e.apply(this, arguments));
        };
      }
      function pe(t, e) {
        return this.each((typeof e === "function" ? de : fe)(t, e));
      }
      function* ge() {
        for (var t = this._groups, e = 0, r = t.length; e < r; ++e) {
          for (var i = t[e], n = 0, o = i.length, s; n < o; ++n) {
            if ((s = i[n])) yield s;
          }
        }
      }
      var me = [null];
      function ye(t, e) {
        this._groups = t;
        this._parents = e;
      }
      function Ce() {
        return new ye([[document.documentElement]], me);
      }
      function be() {
        return this;
      }
      ye.prototype = Ce.prototype = {
        constructor: ye,
        select: T,
        selectAll: F,
        selectChild: O,
        selectChildren: D,
        filter: N,
        data: U,
        enter: $,
        exit: G,
        join: X,
        merge: K,
        selection: be,
        order: Q,
        sort: J,
        call: et,
        nodes: rt,
        node: it,
        size: nt,
        empty: ot,
        each: st,
        attr: mt,
        style: xt,
        property: St,
        classed: It,
        text: Nt,
        html: Rt,
        raise: Ht,
        lower: Ut,
        append: Kt,
        insert: Jt,
        remove: ee,
        clone: ne,
        datum: oe,
        on: he,
        dispatch: pe,
        [Symbol.iterator]: ge,
      };
      const ve = Ce;
      var xe = r(92626);
      var ke = r(35374);
      function Te(t, e, r) {
        var i = new ke.B7();
        e = e == null ? 0 : +e;
        i.restart(
          (r) => {
            i.stop();
            t(r + e);
          },
          e,
          r
        );
        return i;
      }
      var _e = (0, xe.Z)("start", "end", "cancel", "interrupt");
      var we = [];
      var Se = 0;
      var Be = 1;
      var Fe = 2;
      var Ae = 3;
      var Le = 4;
      var Ze = 5;
      var Ee = 6;
      function Me(t, e, r, i, n, o) {
        var s = t.__transition;
        if (!s) t.__transition = {};
        else if (r in s) return;
        ze(t, r, {
          name: e,
          index: i,
          group: n,
          on: _e,
          tween: we,
          time: o.time,
          delay: o.delay,
          duration: o.duration,
          ease: o.ease,
          timer: null,
          state: Se,
        });
      }
      function Oe(t, e) {
        var r = qe(t, e);
        if (r.state > Se) throw new Error("too late; already scheduled");
        return r;
      }
      function Ie(t, e) {
        var r = qe(t, e);
        if (r.state > Ae) throw new Error("too late; already running");
        return r;
      }
      function qe(t, e) {
        var r = t.__transition;
        if (!r || !(r = r[e])) throw new Error("transition not found");
        return r;
      }
      function ze(t, e, r) {
        var i = t.__transition,
          n;
        i[e] = r;
        r.timer = (0, ke.HT)(o, 0, r.time);
        function o(t) {
          r.state = Be;
          r.timer.restart(s, r.delay, r.time);
          if (r.delay <= t) s(t - r.delay);
        }
        function s(o) {
          var c, h, u, f;
          if (r.state !== Be) return l();
          for (c in i) {
            f = i[c];
            if (f.name !== r.name) continue;
            if (f.state === Ae) return Te(s);
            if (f.state === Le) {
              f.state = Ee;
              f.timer.stop();
              f.on.call("interrupt", t, t.__data__, f.index, f.group);
              delete i[c];
            } else if (+c < e) {
              f.state = Ee;
              f.timer.stop();
              f.on.call("cancel", t, t.__data__, f.index, f.group);
              delete i[c];
            }
          }
          Te(function () {
            if (r.state === Ae) {
              r.state = Le;
              r.timer.restart(a, r.delay, r.time);
              a(o);
            }
          });
          r.state = Fe;
          r.on.call("start", t, t.__data__, r.index, r.group);
          if (r.state !== Fe) return;
          r.state = Ae;
          n = new Array((u = r.tween.length));
          for (c = 0, h = -1; c < u; ++c) {
            if ((f = r.tween[c].value.call(t, t.__data__, r.index, r.group))) {
              n[++h] = f;
            }
          }
          n.length = h + 1;
        }
        function a(e) {
          var i = e < r.duration ? r.ease.call(null, e / r.duration) : (r.timer.restart(l), (r.state = Ze), 1),
            o = -1,
            s = n.length;
          while (++o < s) {
            n[o].call(t, i);
          }
          if (r.state === Ze) {
            r.on.call("end", t, t.__data__, r.index, r.group);
            l();
          }
        }
        function l() {
          r.state = Ee;
          r.timer.stop();
          delete i[e];
          for (var n in i) return;
          delete t.__transition;
        }
      }
      function De(t, e) {
        var r = t.__transition,
          i,
          n,
          o = true,
          s;
        if (!r) return;
        e = e == null ? null : e + "";
        for (s in r) {
          if ((i = r[s]).name !== e) {
            o = false;
            continue;
          }
          n = i.state > Fe && i.state < Ze;
          i.state = Ee;
          i.timer.stop();
          i.on.call(n ? "interrupt" : "cancel", t, t.__data__, i.index, i.group);
          delete r[s];
        }
        if (o) delete t.__transition;
      }
      function Ne(t) {
        return this.each(function () {
          De(this, t);
        });
      }
      var je = r(18983);
      function $e(t, e) {
        var r, i;
        return function () {
          var n = Ie(this, t),
            o = n.tween;
          if (o !== r) {
            i = r = o;
            for (var s = 0, a = i.length; s < a; ++s) {
              if (i[s].name === e) {
                i = i.slice();
                i.splice(s, 1);
                break;
              }
            }
          }
          n.tween = i;
        };
      }
      function Pe(t, e, r) {
        var i, n;
        if (typeof r !== "function") throw new Error();
        return function () {
          var o = Ie(this, t),
            s = o.tween;
          if (s !== i) {
            n = (i = s).slice();
            for (var a = { name: e, value: r }, l = 0, c = n.length; l < c; ++l) {
              if (n[l].name === e) {
                n[l] = a;
                break;
              }
            }
            if (l === c) n.push(a);
          }
          o.tween = n;
        };
      }
      function Re(t, e) {
        var r = this._id;
        t += "";
        if (arguments.length < 2) {
          var i = qe(this.node(), r).tween;
          for (var n = 0, o = i.length, s; n < o; ++n) {
            if ((s = i[n]).name === t) {
              return s.value;
            }
          }
          return null;
        }
        return this.each((e == null ? $e : Pe)(r, t, e));
      }
      function We(t, e, r) {
        var i = t._id;
        t.each(function () {
          var t = Ie(this, i);
          (t.value || (t.value = {}))[e] = r.apply(this, arguments);
        });
        return function (t) {
          return qe(t, i).value[e];
        };
      }
      var He = r(16372);
      var Ye = r(73626);
      var Ue = r(93414);
      var Ve = r(59843);
      function Ge(t, e) {
        var r;
        return (typeof e === "number" ? Ye.Z : e instanceof He.ZP ? Ue.ZP : (r = (0, He.ZP)(e)) ? ((e = r), Ue.ZP) : Ve.Z)(t, e);
      }
      function Xe(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function Ke(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function Qe(t, e, r) {
        var i,
          n = r + "",
          o;
        return function () {
          var s = this.getAttribute(t);
          return s === n ? null : s === i ? o : (o = e((i = s), r));
        };
      }
      function Je(t, e, r) {
        var i,
          n = r + "",
          o;
        return function () {
          var s = this.getAttributeNS(t.space, t.local);
          return s === n ? null : s === i ? o : (o = e((i = s), r));
        };
      }
      function tr(t, e, r) {
        var i, n, o;
        return function () {
          var s,
            a = r(this),
            l;
          if (a == null) return void this.removeAttribute(t);
          s = this.getAttribute(t);
          l = a + "";
          return s === l ? null : s === i && l === n ? o : ((n = l), (o = e((i = s), a)));
        };
      }
      function er(t, e, r) {
        var i, n, o;
        return function () {
          var s,
            a = r(this),
            l;
          if (a == null) return void this.removeAttributeNS(t.space, t.local);
          s = this.getAttributeNS(t.space, t.local);
          l = a + "";
          return s === l ? null : s === i && l === n ? o : ((n = l), (o = e((i = s), a)));
        };
      }
      function rr(t, e) {
        var r = ct(t),
          i = r === "transform" ? je.w : Ge;
        return this.attrTween(
          t,
          typeof e === "function"
            ? (r.local ? er : tr)(r, i, We(this, "attr." + t, e))
            : e == null
              ? (r.local ? Ke : Xe)(r)
              : (r.local ? Je : Qe)(r, i, e)
        );
      }
      function ir(t, e) {
        return function (r) {
          this.setAttribute(t, e.call(this, r));
        };
      }
      function nr(t, e) {
        return function (r) {
          this.setAttributeNS(t.space, t.local, e.call(this, r));
        };
      }
      function or(t, e) {
        var r, i;
        function n() {
          var n = e.apply(this, arguments);
          if (n !== i) r = (i = n) && nr(t, n);
          return r;
        }
        n._value = e;
        return n;
      }
      function sr(t, e) {
        var r, i;
        function n() {
          var n = e.apply(this, arguments);
          if (n !== i) r = (i = n) && ir(t, n);
          return r;
        }
        n._value = e;
        return n;
      }
      function ar(t, e) {
        var r = "attr." + t;
        if (arguments.length < 2) return (r = this.tween(r)) && r._value;
        if (e == null) return this.tween(r, null);
        if (typeof e !== "function") throw new Error();
        var i = ct(t);
        return this.tween(r, (i.local ? or : sr)(i, e));
      }
      function lr(t, e) {
        return function () {
          Oe(this, t).delay = +e.apply(this, arguments);
        };
      }
      function cr(t, e) {
        return (
          (e = +e),
          function () {
            Oe(this, t).delay = e;
          }
        );
      }
      function hr(t) {
        var e = this._id;
        return arguments.length ? this.each((typeof t === "function" ? lr : cr)(e, t)) : qe(this.node(), e).delay;
      }
      function ur(t, e) {
        return function () {
          Ie(this, t).duration = +e.apply(this, arguments);
        };
      }
      function fr(t, e) {
        return (
          (e = +e),
          function () {
            Ie(this, t).duration = e;
          }
        );
      }
      function dr(t) {
        var e = this._id;
        return arguments.length ? this.each((typeof t === "function" ? ur : fr)(e, t)) : qe(this.node(), e).duration;
      }
      function pr(t, e) {
        if (typeof e !== "function") throw new Error();
        return function () {
          Ie(this, t).ease = e;
        };
      }
      function gr(t) {
        var e = this._id;
        return arguments.length ? this.each(pr(e, t)) : qe(this.node(), e).ease;
      }
      function mr(t, e) {
        return function () {
          var r = e.apply(this, arguments);
          if (typeof r !== "function") throw new Error();
          Ie(this, t).ease = r;
        };
      }
      function yr(t) {
        if (typeof t !== "function") throw new Error();
        return this.each(mr(this._id, t));
      }
      function Cr(t) {
        if (typeof t !== "function") t = A(t);
        for (var e = this._groups, r = e.length, i = new Array(r), n = 0; n < r; ++n) {
          for (var o = e[n], s = o.length, a = (i[n] = []), l, c = 0; c < s; ++c) {
            if ((l = o[c]) && t.call(l, l.__data__, c, o)) {
              a.push(l);
            }
          }
        }
        return new Ur(i, this._parents, this._name, this._id);
      }
      function br(t) {
        if (t._id !== this._id) throw new Error();
        for (var e = this._groups, r = t._groups, i = e.length, n = r.length, o = Math.min(i, n), s = new Array(i), a = 0; a < o; ++a) {
          for (var l = e[a], c = r[a], h = l.length, u = (s[a] = new Array(h)), f, d = 0; d < h; ++d) {
            if ((f = l[d] || c[d])) {
              u[d] = f;
            }
          }
        }
        for (; a < i; ++a) {
          s[a] = e[a];
        }
        return new Ur(s, this._parents, this._name, this._id);
      }
      function vr(t) {
        return (t + "")
          .trim()
          .split(/^|\s+/)
          .every(function (t) {
            var e = t.indexOf(".");
            if (e >= 0) t = t.slice(0, e);
            return !t || t === "start";
          });
      }
      function xr(t, e, r) {
        var i,
          n,
          o = vr(e) ? Oe : Ie;
        return function () {
          var s = o(this, t),
            a = s.on;
          if (a !== i) (n = (i = a).copy()).on(e, r);
          s.on = n;
        };
      }
      function kr(t, e) {
        var r = this._id;
        return arguments.length < 2 ? qe(this.node(), r).on.on(t) : this.each(xr(r, t, e));
      }
      function Tr(t) {
        return function () {
          var e = this.parentNode;
          for (var r in this.__transition) if (+r !== t) return;
          if (e) e.removeChild(this);
        };
      }
      function _r() {
        return this.on("end.remove", Tr(this._id));
      }
      function wr(t) {
        var e = this._name,
          r = this._id;
        if (typeof t !== "function") t = k(t);
        for (var i = this._groups, n = i.length, o = new Array(n), s = 0; s < n; ++s) {
          for (var a = i[s], l = a.length, c = (o[s] = new Array(l)), h, u, f = 0; f < l; ++f) {
            if ((h = a[f]) && (u = t.call(h, h.__data__, f, a))) {
              if ("__data__" in h) u.__data__ = h.__data__;
              c[f] = u;
              Me(c[f], e, r, f, c, qe(h, r));
            }
          }
        }
        return new Ur(o, this._parents, e, r);
      }
      function Sr(t) {
        var e = this._name,
          r = this._id;
        if (typeof t !== "function") t = S(t);
        for (var i = this._groups, n = i.length, o = [], s = [], a = 0; a < n; ++a) {
          for (var l = i[a], c = l.length, h, u = 0; u < c; ++u) {
            if ((h = l[u])) {
              for (var f = t.call(h, h.__data__, u, l), d, p = qe(h, r), g = 0, m = f.length; g < m; ++g) {
                if ((d = f[g])) {
                  Me(d, e, r, g, f, p);
                }
              }
              o.push(f);
              s.push(h);
            }
          }
        }
        return new Ur(o, s, e, r);
      }
      var Br = ve.prototype.constructor;
      function Fr() {
        return new Br(this._groups, this._parents);
      }
      function Ar(t, e) {
        var r, i, n;
        return function () {
          var o = kt(this, t),
            s = (this.style.removeProperty(t), kt(this, t));
          return o === s ? null : o === r && s === i ? n : (n = e((r = o), (i = s)));
        };
      }
      function Lr(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function Zr(t, e, r) {
        var i,
          n = r + "",
          o;
        return function () {
          var s = kt(this, t);
          return s === n ? null : s === i ? o : (o = e((i = s), r));
        };
      }
      function Er(t, e, r) {
        var i, n, o;
        return function () {
          var s = kt(this, t),
            a = r(this),
            l = a + "";
          if (a == null) l = a = (this.style.removeProperty(t), kt(this, t));
          return s === l ? null : s === i && l === n ? o : ((n = l), (o = e((i = s), a)));
        };
      }
      function Mr(t, e) {
        var r,
          i,
          n,
          o = "style." + e,
          s = "end." + o,
          a;
        return function () {
          var l = Ie(this, t),
            c = l.on,
            h = l.value[o] == null ? a || (a = Lr(e)) : undefined;
          if (c !== r || n !== h) (i = (r = c).copy()).on(s, (n = h));
          l.on = i;
        };
      }
      function Or(t, e, r) {
        var i = (t += "") === "transform" ? je.Y : Ge;
        return e == null
          ? this.styleTween(t, Ar(t, i)).on("end.style." + t, Lr(t))
          : typeof e === "function"
            ? this.styleTween(t, Er(t, i, We(this, "style." + t, e))).each(Mr(this._id, t))
            : this.styleTween(t, Zr(t, i, e), r).on("end.style." + t, null);
      }
      function Ir(t, e, r) {
        return function (i) {
          this.style.setProperty(t, e.call(this, i), r);
        };
      }
      function qr(t, e, r) {
        var i, n;
        function o() {
          var o = e.apply(this, arguments);
          if (o !== n) i = (n = o) && Ir(t, o, r);
          return i;
        }
        o._value = e;
        return o;
      }
      function zr(t, e, r) {
        var i = "style." + (t += "");
        if (arguments.length < 2) return (i = this.tween(i)) && i._value;
        if (e == null) return this.tween(i, null);
        if (typeof e !== "function") throw new Error();
        return this.tween(i, qr(t, e, r == null ? "" : r));
      }
      function Dr(t) {
        return function () {
          this.textContent = t;
        };
      }
      function Nr(t) {
        return function () {
          var e = t(this);
          this.textContent = e == null ? "" : e;
        };
      }
      function jr(t) {
        return this.tween("text", typeof t === "function" ? Nr(We(this, "text", t)) : Dr(t == null ? "" : t + ""));
      }
      function $r(t) {
        return function (e) {
          this.textContent = t.call(this, e);
        };
      }
      function Pr(t) {
        var e, r;
        function i() {
          var i = t.apply(this, arguments);
          if (i !== r) e = (r = i) && $r(i);
          return e;
        }
        i._value = t;
        return i;
      }
      function Rr(t) {
        var e = "text";
        if (arguments.length < 1) return (e = this.tween(e)) && e._value;
        if (t == null) return this.tween(e, null);
        if (typeof t !== "function") throw new Error();
        return this.tween(e, Pr(t));
      }
      function Wr() {
        var t = this._name,
          e = this._id,
          r = Gr();
        for (var i = this._groups, n = i.length, o = 0; o < n; ++o) {
          for (var s = i[o], a = s.length, l, c = 0; c < a; ++c) {
            if ((l = s[c])) {
              var h = qe(l, e);
              Me(l, t, r, c, s, { time: h.time + h.delay + h.duration, delay: 0, duration: h.duration, ease: h.ease });
            }
          }
        }
        return new Ur(i, this._parents, t, r);
      }
      function Hr() {
        var t,
          e,
          r = this,
          i = r._id,
          n = r.size();
        return new Promise(function (o, s) {
          var a = { value: s },
            l = {
              value: function () {
                if (--n === 0) o();
              },
            };
          r.each(function () {
            var r = Ie(this, i),
              n = r.on;
            if (n !== t) {
              e = (t = n).copy();
              e._.cancel.push(a);
              e._.interrupt.push(a);
              e._.end.push(l);
            }
            r.on = e;
          });
          if (n === 0) o();
        });
      }
      var Yr = 0;
      function Ur(t, e, r, i) {
        this._groups = t;
        this._parents = e;
        this._name = r;
        this._id = i;
      }
      function Vr(t) {
        return ve().transition(t);
      }
      function Gr() {
        return ++Yr;
      }
      var Xr = ve.prototype;
      Ur.prototype = Vr.prototype = {
        constructor: Ur,
        select: wr,
        selectAll: Sr,
        selectChild: Xr.selectChild,
        selectChildren: Xr.selectChildren,
        filter: Cr,
        merge: br,
        selection: Fr,
        transition: Wr,
        call: Xr.call,
        nodes: Xr.nodes,
        node: Xr.node,
        size: Xr.size,
        empty: Xr.empty,
        each: Xr.each,
        on: kr,
        attr: rr,
        attrTween: ar,
        style: Or,
        styleTween: zr,
        text: jr,
        textTween: Rr,
        remove: _r,
        tween: Re,
        delay: hr,
        duration: dr,
        ease: gr,
        easeVarying: yr,
        end: Hr,
        [Symbol.iterator]: Xr[Symbol.iterator],
      };
      function Kr(t) {
        return t * t * t;
      }
      function Qr(t) {
        return --t * t * t + 1;
      }
      function Jr(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
      }
      var ti = { time: null, delay: 0, duration: 250, ease: Jr };
      function ei(t, e) {
        var r;
        while (!(r = t.__transition) || !(r = r[e])) {
          if (!(t = t.parentNode)) {
            throw new Error(`transition ${e} not found`);
          }
        }
        return r;
      }
      function ri(t) {
        var e, r;
        if (t instanceof Ur) {
          (e = t._id), (t = t._name);
        } else {
          (e = Gr()), ((r = ti).time = (0, ke.zO)()), (t = t == null ? null : t + "");
        }
        for (var i = this._groups, n = i.length, o = 0; o < n; ++o) {
          for (var s = i[o], a = s.length, l, c = 0; c < a; ++c) {
            if ((l = s[c])) {
              Me(l, t, e, c, s, r || ei(l, e));
            }
          }
        }
        return new Ur(i, this._parents, t, e);
      }
      ve.prototype.interrupt = Ne;
      ve.prototype.transition = ri;
      var ii = { name: "drag" },
        ni = { name: "space" },
        oi = { name: "handle" },
        si = { name: "center" };
      const { abs: ai, max: li, min: ci } = Math;
      function hi(t) {
        return [+t[0], +t[1]];
      }
      function ui(t) {
        return [hi(t[0]), hi(t[1])];
      }
      var fi = {
        name: "x",
        handles: ["w", "e"].map(vi),
        input: function (t, e) {
          return t == null
            ? null
            : [
                [+t[0], e[0][1]],
                [+t[1], e[1][1]],
              ];
        },
        output: function (t) {
          return t && [t[0][0], t[1][0]];
        },
      };
      var di = {
        name: "y",
        handles: ["n", "s"].map(vi),
        input: function (t, e) {
          return t == null
            ? null
            : [
                [e[0][0], +t[0]],
                [e[1][0], +t[1]],
              ];
        },
        output: function (t) {
          return t && [t[0][1], t[1][1]];
        },
      };
      var pi = {
        name: "xy",
        handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(vi),
        input: function (t) {
          return t == null ? null : ui(t);
        },
        output: function (t) {
          return t;
        },
      };
      var gi = {
        overlay: "crosshair",
        selection: "move",
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize",
      };
      var mi = { e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se" };
      var yi = { n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw" };
      var Ci = { overlay: +1, selection: +1, n: null, e: +1, s: null, w: -1, nw: -1, ne: +1, se: +1, sw: -1 };
      var bi = { overlay: +1, selection: +1, n: -1, e: null, s: +1, w: null, nw: -1, ne: -1, se: +1, sw: +1 };
      function vi(t) {
        return { type: t };
      }
      function xi(t) {
        return !t.ctrlKey && !t.button;
      }
      function ki() {
        var t = this.ownerSVGElement || this;
        if (t.hasAttribute("viewBox")) {
          t = t.viewBox.baseVal;
          return [
            [t.x, t.y],
            [t.x + t.width, t.y + t.height],
          ];
        }
        return [
          [0, 0],
          [t.width.baseVal.value, t.height.baseVal.value],
        ];
      }
      function Ti() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function _i(t) {
        while (!t.__brush) if (!(t = t.parentNode)) return;
        return t.__brush;
      }
      function wi(t) {
        return t[0][0] === t[1][0] || t[0][1] === t[1][1];
      }
      function Si(t) {
        var e = t.__brush;
        return e ? e.dim.output(e.selection) : null;
      }
      function Bi() {
        return Li(fi);
      }
      function Fi() {
        return Li(di);
      }
      function Ai() {
        return Li(pi);
      }
      function Li(t) {
        var e = ki,
          r = xi,
          i = Ti,
          n = true,
          o = dispatch("start", "brush", "end"),
          s = 6,
          a;
        function l(e) {
          var r = e
            .property("__brush", g)
            .selectAll(".overlay")
            .data([vi("overlay")]);
          r.enter()
            .append("rect")
            .attr("class", "overlay")
            .attr("pointer-events", "all")
            .attr("cursor", gi.overlay)
            .merge(r)
            .each(function () {
              var t = _i(this).extent;
              select(this)
                .attr("x", t[0][0])
                .attr("y", t[0][1])
                .attr("width", t[1][0] - t[0][0])
                .attr("height", t[1][1] - t[0][1]);
            });
          e.selectAll(".selection")
            .data([vi("selection")])
            .enter()
            .append("rect")
            .attr("class", "selection")
            .attr("cursor", gi.selection)
            .attr("fill", "#777")
            .attr("fill-opacity", 0.3)
            .attr("stroke", "#fff")
            .attr("shape-rendering", "crispEdges");
          var n = e.selectAll(".handle").data(t.handles, function (t) {
            return t.type;
          });
          n.exit().remove();
          n.enter()
            .append("rect")
            .attr("class", function (t) {
              return "handle handle--" + t.type;
            })
            .attr("cursor", function (t) {
              return gi[t.type];
            });
          e.each(c)
            .attr("fill", "none")
            .attr("pointer-events", "all")
            .on("mousedown.brush", f)
            .filter(i)
            .on("touchstart.brush", f)
            .on("touchmove.brush", d)
            .on("touchend.brush touchcancel.brush", p)
            .style("touch-action", "none")
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        l.move = function (e, r, i) {
          if (e.tween) {
            e.on("start.brush", function (t) {
              h(this, arguments).beforestart().start(t);
            })
              .on("interrupt.brush end.brush", function (t) {
                h(this, arguments).end(t);
              })
              .tween("brush", function () {
                var e = this,
                  i = e.__brush,
                  n = h(e, arguments),
                  o = i.selection,
                  s = t.input(typeof r === "function" ? r.apply(this, arguments) : r, i.extent),
                  a = interpolate(o, s);
                function l(t) {
                  i.selection = t === 1 && s === null ? null : a(t);
                  c.call(e);
                  n.brush();
                }
                return o !== null && s !== null ? l : l(1);
              });
          } else {
            e.each(function () {
              var e = this,
                n = arguments,
                o = e.__brush,
                s = t.input(typeof r === "function" ? r.apply(e, n) : r, o.extent),
                a = h(e, n).beforestart();
              interrupt(e);
              o.selection = s === null ? null : s;
              c.call(e);
              a.start(i).brush(i).end(i);
            });
          }
        };
        l.clear = function (t, e) {
          l.move(t, null, e);
        };
        function c() {
          var t = select(this),
            e = _i(this).selection;
          if (e) {
            t.selectAll(".selection")
              .style("display", null)
              .attr("x", e[0][0])
              .attr("y", e[0][1])
              .attr("width", e[1][0] - e[0][0])
              .attr("height", e[1][1] - e[0][1]);
            t.selectAll(".handle")
              .style("display", null)
              .attr("x", function (t) {
                return t.type[t.type.length - 1] === "e" ? e[1][0] - s / 2 : e[0][0] - s / 2;
              })
              .attr("y", function (t) {
                return t.type[0] === "s" ? e[1][1] - s / 2 : e[0][1] - s / 2;
              })
              .attr("width", function (t) {
                return t.type === "n" || t.type === "s" ? e[1][0] - e[0][0] + s : s;
              })
              .attr("height", function (t) {
                return t.type === "e" || t.type === "w" ? e[1][1] - e[0][1] + s : s;
              });
          } else {
            t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
          }
        }
        function h(t, e, r) {
          var i = t.__brush.emitter;
          return i && (!r || !i.clean) ? i : new u(t, e, r);
        }
        function u(t, e, r) {
          this.that = t;
          this.args = e;
          this.state = t.__brush;
          this.active = 0;
          this.clean = r;
        }
        u.prototype = {
          beforestart: function () {
            if (++this.active === 1) (this.state.emitter = this), (this.starting = true);
            return this;
          },
          start: function (t, e) {
            if (this.starting) (this.starting = false), this.emit("start", t, e);
            else this.emit("brush", t);
            return this;
          },
          brush: function (t, e) {
            this.emit("brush", t, e);
            return this;
          },
          end: function (t, e) {
            if (--this.active === 0) delete this.state.emitter, this.emit("end", t, e);
            return this;
          },
          emit: function (e, r, i) {
            var n = select(this.that).datum();
            o.call(
              e,
              this.that,
              new BrushEvent(e, { sourceEvent: r, target: l, selection: t.output(this.state.selection), mode: i, dispatch: o }),
              n
            );
          },
        };
        function f(e) {
          if (a && !e.touches) return;
          if (!r.apply(this, arguments)) return;
          var i = this,
            o = e.target.__data__.type,
            s = (n && e.metaKey ? (o = "overlay") : o) === "selection" ? ii : n && e.altKey ? si : oi,
            l = t === di ? null : Ci[o],
            u = t === fi ? null : bi[o],
            f = _i(i),
            d = f.extent,
            p = f.selection,
            g = d[0][0],
            m,
            y,
            C = d[0][1],
            b,
            v,
            x = d[1][0],
            k,
            T,
            _ = d[1][1],
            w,
            S,
            B = 0,
            F = 0,
            A,
            L = l && u && n && e.shiftKey,
            Z,
            E,
            M = Array.from(e.touches || [e], (t) => {
              const e = t.identifier;
              t = pointer(t, i);
              t.point0 = t.slice();
              t.identifier = e;
              return t;
            });
          interrupt(i);
          var O = h(i, arguments, true).beforestart();
          if (o === "overlay") {
            if (p) A = true;
            const r = [M[0], M[1] || M[0]];
            f.selection = p = [
              [(m = t === di ? g : ci(r[0][0], r[1][0])), (b = t === fi ? C : ci(r[0][1], r[1][1]))],
              [(k = t === di ? x : li(r[0][0], r[1][0])), (w = t === fi ? _ : li(r[0][1], r[1][1]))],
            ];
            if (M.length > 1) N(e);
          } else {
            m = p[0][0];
            b = p[0][1];
            k = p[1][0];
            w = p[1][1];
          }
          y = m;
          v = b;
          T = k;
          S = w;
          var I = select(i).attr("pointer-events", "none");
          var q = I.selectAll(".overlay").attr("cursor", gi[o]);
          if (e.touches) {
            O.moved = D;
            O.ended = j;
          } else {
            var z = select(e.view).on("mousemove.brush", D, true).on("mouseup.brush", j, true);
            if (n) z.on("keydown.brush", $, true).on("keyup.brush", P, true);
            dragDisable(e.view);
          }
          c.call(i);
          O.start(e, s.name);
          function D(t) {
            for (const e of t.changedTouches || [t]) {
              for (const t of M) if (t.identifier === e.identifier) t.cur = pointer(e, i);
            }
            if (L && !Z && !E && M.length === 1) {
              const t = M[0];
              if (ai(t.cur[0] - t[0]) > ai(t.cur[1] - t[1])) E = true;
              else Z = true;
            }
            for (const e of M) if (e.cur) (e[0] = e.cur[0]), (e[1] = e.cur[1]);
            A = true;
            noevent(t);
            N(t);
          }
          function N(t) {
            const e = M[0],
              r = e.point0;
            var n;
            B = e[0] - r[0];
            F = e[1] - r[1];
            switch (s) {
              case ni:
              case ii: {
                if (l) (B = li(g - m, ci(x - k, B))), (y = m + B), (T = k + B);
                if (u) (F = li(C - b, ci(_ - w, F))), (v = b + F), (S = w + F);
                break;
              }
              case oi: {
                if (M[1]) {
                  if (l) (y = li(g, ci(x, M[0][0]))), (T = li(g, ci(x, M[1][0]))), (l = 1);
                  if (u) (v = li(C, ci(_, M[0][1]))), (S = li(C, ci(_, M[1][1]))), (u = 1);
                } else {
                  if (l < 0) (B = li(g - m, ci(x - m, B))), (y = m + B), (T = k);
                  else if (l > 0) (B = li(g - k, ci(x - k, B))), (y = m), (T = k + B);
                  if (u < 0) (F = li(C - b, ci(_ - b, F))), (v = b + F), (S = w);
                  else if (u > 0) (F = li(C - w, ci(_ - w, F))), (v = b), (S = w + F);
                }
                break;
              }
              case si: {
                if (l) (y = li(g, ci(x, m - B * l))), (T = li(g, ci(x, k + B * l)));
                if (u) (v = li(C, ci(_, b - F * u))), (S = li(C, ci(_, w + F * u)));
                break;
              }
            }
            if (T < y) {
              l *= -1;
              (n = m), (m = k), (k = n);
              (n = y), (y = T), (T = n);
              if (o in mi) q.attr("cursor", gi[(o = mi[o])]);
            }
            if (S < v) {
              u *= -1;
              (n = b), (b = w), (w = n);
              (n = v), (v = S), (S = n);
              if (o in yi) q.attr("cursor", gi[(o = yi[o])]);
            }
            if (f.selection) p = f.selection;
            if (Z) (y = p[0][0]), (T = p[1][0]);
            if (E) (v = p[0][1]), (S = p[1][1]);
            if (p[0][0] !== y || p[0][1] !== v || p[1][0] !== T || p[1][1] !== S) {
              f.selection = [
                [y, v],
                [T, S],
              ];
              c.call(i);
              O.brush(t, s.name);
            }
          }
          function j(t) {
            nopropagation(t);
            if (t.touches) {
              if (t.touches.length) return;
              if (a) clearTimeout(a);
              a = setTimeout(function () {
                a = null;
              }, 500);
            } else {
              dragEnable(t.view, A);
              z.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
            }
            I.attr("pointer-events", "all");
            q.attr("cursor", gi.overlay);
            if (f.selection) p = f.selection;
            if (wi(p)) (f.selection = null), c.call(i);
            O.end(t, s.name);
          }
          function $(t) {
            switch (t.keyCode) {
              case 16: {
                L = l && u;
                break;
              }
              case 18: {
                if (s === oi) {
                  if (l) (k = T - B * l), (m = y + B * l);
                  if (u) (w = S - F * u), (b = v + F * u);
                  s = si;
                  N(t);
                }
                break;
              }
              case 32: {
                if (s === oi || s === si) {
                  if (l < 0) k = T - B;
                  else if (l > 0) m = y - B;
                  if (u < 0) w = S - F;
                  else if (u > 0) b = v - F;
                  s = ni;
                  q.attr("cursor", gi.selection);
                  N(t);
                }
                break;
              }
              default:
                return;
            }
            noevent(t);
          }
          function P(t) {
            switch (t.keyCode) {
              case 16: {
                if (L) {
                  Z = E = L = false;
                  N(t);
                }
                break;
              }
              case 18: {
                if (s === si) {
                  if (l < 0) k = T;
                  else if (l > 0) m = y;
                  if (u < 0) w = S;
                  else if (u > 0) b = v;
                  s = oi;
                  N(t);
                }
                break;
              }
              case 32: {
                if (s === ni) {
                  if (t.altKey) {
                    if (l) (k = T - B * l), (m = y + B * l);
                    if (u) (w = S - F * u), (b = v + F * u);
                    s = si;
                  } else {
                    if (l < 0) k = T;
                    else if (l > 0) m = y;
                    if (u < 0) w = S;
                    else if (u > 0) b = v;
                    s = oi;
                  }
                  q.attr("cursor", gi[o]);
                  N(t);
                }
                break;
              }
              default:
                return;
            }
            noevent(t);
          }
        }
        function d(t) {
          h(this, arguments).moved(t);
        }
        function p(t) {
          h(this, arguments).ended(t);
        }
        function g() {
          var r = this.__brush || { selection: null };
          r.extent = ui(e.apply(this, arguments));
          r.dim = t;
          return r;
        }
        l.extent = function (t) {
          return arguments.length ? ((e = typeof t === "function" ? t : constant(ui(t))), l) : e;
        };
        l.filter = function (t) {
          return arguments.length ? ((r = typeof t === "function" ? t : constant(!!t)), l) : r;
        };
        l.touchable = function (t) {
          return arguments.length ? ((i = typeof t === "function" ? t : constant(!!t)), l) : i;
        };
        l.handleSize = function (t) {
          return arguments.length ? ((s = +t), l) : s;
        };
        l.keyModifiers = function (t) {
          return arguments.length ? ((n = !!t), l) : n;
        };
        l.on = function () {
          var t = o.on.apply(o, arguments);
          return t === o ? l : t;
        };
        return l;
      }
      function Zi(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.text();
      }
      function Ei(t, e) {
        return fetch(t, e).then(Zi);
      }
      function Mi(t) {
        return (e, r) => Ei(e, r).then((e) => new DOMParser().parseFromString(e, t));
      }
      const Oi = Mi("application/xml");
      var Ii = Mi("text/html");
      var qi = Mi("image/svg+xml");
      var zi = r(33566);
      var Di = r(34893);
      var Ni = r(48348);
      var ji = r(57603);
      function $i() {
        var t = (0, ji.Z)().unknown(undefined),
          e = t.domain,
          r = t.range,
          i = 0,
          n = 1,
          o,
          s,
          a = false,
          l = 0,
          c = 0,
          h = 0.5;
        delete t.unknown;
        function u() {
          var t = e().length,
            u = n < i,
            f = u ? n : i,
            d = u ? i : n;
          o = (d - f) / Math.max(1, t - l + c * 2);
          if (a) o = Math.floor(o);
          f += (d - f - o * (t - l)) * h;
          s = o * (1 - l);
          if (a) (f = Math.round(f)), (s = Math.round(s));
          var p = (0, Di.Z)(t).map(function (t) {
            return f + o * t;
          });
          return r(u ? p.reverse() : p);
        }
        t.domain = function (t) {
          return arguments.length ? (e(t), u()) : e();
        };
        t.range = function (t) {
          return arguments.length ? (([i, n] = t), (i = +i), (n = +n), u()) : [i, n];
        };
        t.rangeRound = function (t) {
          return ([i, n] = t), (i = +i), (n = +n), (a = true), u();
        };
        t.bandwidth = function () {
          return s;
        };
        t.step = function () {
          return o;
        };
        t.round = function (t) {
          return arguments.length ? ((a = !!t), u()) : a;
        };
        t.padding = function (t) {
          return arguments.length ? ((l = Math.min(1, (c = +t))), u()) : l;
        };
        t.paddingInner = function (t) {
          return arguments.length ? ((l = Math.min(1, t)), u()) : l;
        };
        t.paddingOuter = function (t) {
          return arguments.length ? ((c = +t), u()) : c;
        };
        t.align = function (t) {
          return arguments.length ? ((h = Math.max(0, Math.min(1, t))), u()) : h;
        };
        t.copy = function () {
          return $i(e(), [i, n]).round(a).paddingInner(l).paddingOuter(c).align(h);
        };
        return Ni.o.apply(u(), arguments);
      }
      function Pi(t) {
        var e = t.copy;
        t.padding = t.paddingOuter;
        delete t.paddingInner;
        delete t.paddingOuter;
        t.copy = function () {
          return Pi(e());
        };
        return t;
      }
      function Ri() {
        return Pi($i.apply(null, arguments).paddingInner(1));
      }
      var Wi = r(50289);
      var Hi = r(88383);
      function Yi(t) {
        var e = (t.length / 6) | 0,
          r = new Array(e),
          i = 0;
        while (i < e) r[i] = "#" + t.slice(i * 6, ++i * 6);
        return r;
      }
      const Ui = Yi("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
      function Vi(t) {
        return typeof t === "string" ? new ye([[document.querySelector(t)]], [document.documentElement]) : new ye([[t]], me);
      }
      function Gi(t) {
        return typeof t === "string" ? new ye([document.querySelectorAll(t)], [document.documentElement]) : new ye([_(t)], me);
      }
      var Xi = r(10233);
      var Ki = r(25049);
      var Qi = r(5742);
      var Ji = r(93072);
      function tn(t, e) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      }
      function en(t) {
        return t;
      }
      var rn = r(44915);
      function nn() {
        var t = en,
          e = tn,
          r = null,
          i = (0, Ji.Z)(0),
          n = (0, Ji.Z)(rn.BZ),
          o = (0, Ji.Z)(0);
        function s(s) {
          var a,
            l = (s = (0, Qi.Z)(s)).length,
            c,
            h,
            u = 0,
            f = new Array(l),
            d = new Array(l),
            p = +i.apply(this, arguments),
            g = Math.min(rn.BZ, Math.max(-rn.BZ, n.apply(this, arguments) - p)),
            m,
            y = Math.min(Math.abs(g) / l, o.apply(this, arguments)),
            C = y * (g < 0 ? -1 : 1),
            b;
          for (a = 0; a < l; ++a) {
            if ((b = d[(f[a] = a)] = +t(s[a], a, s)) > 0) {
              u += b;
            }
          }
          if (e != null)
            f.sort(function (t, r) {
              return e(d[t], d[r]);
            });
          else if (r != null)
            f.sort(function (t, e) {
              return r(s[t], s[e]);
            });
          for (a = 0, h = u ? (g - l * C) / u : 0; a < l; ++a, p = m) {
            (c = f[a]),
              (b = d[c]),
              (m = p + (b > 0 ? b * h : 0) + C),
              (d[c] = { data: s[c], index: a, value: b, startAngle: p, endAngle: m, padAngle: y });
          }
          return d;
        }
        s.value = function (e) {
          return arguments.length ? ((t = typeof e === "function" ? e : (0, Ji.Z)(+e)), s) : t;
        };
        s.sortValues = function (t) {
          return arguments.length ? ((e = t), (r = null), s) : e;
        };
        s.sort = function (t) {
          return arguments.length ? ((r = t), (e = null), s) : r;
        };
        s.startAngle = function (t) {
          return arguments.length ? ((i = typeof t === "function" ? t : (0, Ji.Z)(+t)), s) : i;
        };
        s.endAngle = function (t) {
          return arguments.length ? ((n = typeof t === "function" ? t : (0, Ji.Z)(+t)), s) : n;
        };
        s.padAngle = function (t) {
          return arguments.length ? ((o = typeof t === "function" ? t : (0, Ji.Z)(+t)), s) : o;
        };
        return s;
      }
      var on = r(79938);
      var sn = r(99717);
      var an = r(67829);
      class ln {
        constructor(t, e) {
          this._context = t;
          this._x = e;
        }
        areaStart() {
          this._line = 0;
        }
        areaEnd() {
          this._line = NaN;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {
          if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
          this._line = 1 - this._line;
        }
        point(t, e) {
          (t = +t), (e = +e);
          switch (this._point) {
            case 0: {
              this._point = 1;
              if (this._line) this._context.lineTo(t, e);
              else this._context.moveTo(t, e);
              break;
            }
            case 1:
              this._point = 2;
            default: {
              if (this._x) this._context.bezierCurveTo((this._x0 = (this._x0 + t) / 2), this._y0, this._x0, e, t, e);
              else this._context.bezierCurveTo(this._x0, (this._y0 = (this._y0 + e) / 2), t, this._y0, t, e);
              break;
            }
          }
          (this._x0 = t), (this._y0 = e);
        }
      }
      class cn {
        constructor(t) {
          this._context = t;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {}
        point(t, e) {
          (t = +t), (e = +e);
          if (this._point === 0) {
            this._point = 1;
          } else {
            const r = pointRadial(this._x0, this._y0);
            const i = pointRadial(this._x0, (this._y0 = (this._y0 + e) / 2));
            const n = pointRadial(t, this._y0);
            const o = pointRadial(t, e);
            this._context.moveTo(...r);
            this._context.bezierCurveTo(...i, ...n, ...o);
          }
          (this._x0 = t), (this._y0 = e);
        }
      }
      function hn(t) {
        return new ln(t, true);
      }
      function un(t) {
        return new ln(t, false);
      }
      function fn(t) {
        return new cn(t);
      }
      var dn = r(24849);
      var pn = r(85200);
      var gn = r(55669);
      var mn = r(97018);
      var yn = r(68286);
      var Cn = r(33506);
      var bn = r(79039);
      var vn = r(57481);
      var xn = r(18143);
      var kn = r(65165);
      var Tn = r(56732);
      var _n = r(77059);
      var wn = r(98179);
      var Sn = r(15086);
      var Bn = r(7197);
      var Fn = r(42784);
      var An = r(69478);
      var Ln = r(22776);
      var Zn = r(4584);
      var En = r(90317);
      function Mn(t, e, r) {
        this.k = t;
        this.x = e;
        this.y = r;
      }
      Mn.prototype = {
        constructor: Mn,
        scale: function (t) {
          return t === 1 ? this : new Mn(this.k * t, this.x, this.y);
        },
        translate: function (t, e) {
          return (t === 0) & (e === 0) ? this : new Mn(this.k, this.x + this.k * t, this.y + this.k * e);
        },
        apply: function (t) {
          return [t[0] * this.k + this.x, t[1] * this.k + this.y];
        },
        applyX: function (t) {
          return t * this.k + this.x;
        },
        applyY: function (t) {
          return t * this.k + this.y;
        },
        invert: function (t) {
          return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
        },
        invertX: function (t) {
          return (t - this.x) / this.k;
        },
        invertY: function (t) {
          return (t - this.y) / this.k;
        },
        rescaleX: function (t) {
          return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
        },
        rescaleY: function (t) {
          return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
        },
        toString: function () {
          return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
        },
      };
      var On = new Mn(1, 0, 0);
      In.prototype = Mn.prototype;
      function In(t) {
        while (!t.__zoom) if (!(t = t.parentNode)) return On;
        return t.__zoom;
      }
      function qn(t) {
        return (!t.ctrlKey || t.type === "wheel") && !t.button;
      }
      function zn() {
        var t = this;
        if (t instanceof SVGElement) {
          t = t.ownerSVGElement || t;
          if (t.hasAttribute("viewBox")) {
            t = t.viewBox.baseVal;
            return [
              [t.x, t.y],
              [t.x + t.width, t.y + t.height],
            ];
          }
          return [
            [0, 0],
            [t.width.baseVal.value, t.height.baseVal.value],
          ];
        }
        return [
          [0, 0],
          [t.clientWidth, t.clientHeight],
        ];
      }
      function Dn() {
        return this.__zoom || identity;
      }
      function Nn(t) {
        return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 0.002) * (t.ctrlKey ? 10 : 1);
      }
      function jn() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function $n(t, e, r) {
        var i = t.invertX(e[0][0]) - r[0][0],
          n = t.invertX(e[1][0]) - r[1][0],
          o = t.invertY(e[0][1]) - r[0][1],
          s = t.invertY(e[1][1]) - r[1][1];
        return t.translate(n > i ? (i + n) / 2 : Math.min(0, i) || Math.max(0, n), s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s));
      }
      function Pn() {
        var t = qn,
          e = zn,
          r = $n,
          i = Nn,
          n = jn,
          o = [0, Infinity],
          s = [
            [-Infinity, -Infinity],
            [Infinity, Infinity],
          ],
          a = 250,
          l = interpolateZoom,
          c = dispatch("start", "zoom", "end"),
          h,
          u,
          f,
          d = 500,
          p = 150,
          g = 0,
          m = 10;
        function y(t) {
          t.property("__zoom", Dn)
            .on("wheel.zoom", _, { passive: false })
            .on("mousedown.zoom", w)
            .on("dblclick.zoom", S)
            .filter(n)
            .on("touchstart.zoom", B)
            .on("touchmove.zoom", F)
            .on("touchend.zoom touchcancel.zoom", A)
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        y.transform = function (t, e, r, i) {
          var n = t.selection ? t.selection() : t;
          n.property("__zoom", Dn);
          if (t !== n) {
            x(t, e, r, i);
          } else {
            n.interrupt().each(function () {
              k(this, arguments)
                .event(i)
                .start()
                .zoom(null, typeof e === "function" ? e.apply(this, arguments) : e)
                .end();
            });
          }
        };
        y.scaleBy = function (t, e, r, i) {
          y.scaleTo(
            t,
            function () {
              var t = this.__zoom.k,
                r = typeof e === "function" ? e.apply(this, arguments) : e;
              return t * r;
            },
            r,
            i
          );
        };
        y.scaleTo = function (t, i, n, o) {
          y.transform(
            t,
            function () {
              var t = e.apply(this, arguments),
                o = this.__zoom,
                a = n == null ? v(t) : typeof n === "function" ? n.apply(this, arguments) : n,
                l = o.invert(a),
                c = typeof i === "function" ? i.apply(this, arguments) : i;
              return r(b(C(o, c), a, l), t, s);
            },
            n,
            o
          );
        };
        y.translateBy = function (t, i, n, o) {
          y.transform(
            t,
            function () {
              return r(
                this.__zoom.translate(typeof i === "function" ? i.apply(this, arguments) : i, typeof n === "function" ? n.apply(this, arguments) : n),
                e.apply(this, arguments),
                s
              );
            },
            null,
            o
          );
        };
        y.translateTo = function (t, i, n, o, a) {
          y.transform(
            t,
            function () {
              var t = e.apply(this, arguments),
                a = this.__zoom,
                l = o == null ? v(t) : typeof o === "function" ? o.apply(this, arguments) : o;
              return r(
                identity
                  .translate(l[0], l[1])
                  .scale(a.k)
                  .translate(typeof i === "function" ? -i.apply(this, arguments) : -i, typeof n === "function" ? -n.apply(this, arguments) : -n),
                t,
                s
              );
            },
            o,
            a
          );
        };
        function C(t, e) {
          e = Math.max(o[0], Math.min(o[1], e));
          return e === t.k ? t : new Transform(e, t.x, t.y);
        }
        function b(t, e, r) {
          var i = e[0] - r[0] * t.k,
            n = e[1] - r[1] * t.k;
          return i === t.x && n === t.y ? t : new Transform(t.k, i, n);
        }
        function v(t) {
          return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
        }
        function x(t, r, i, n) {
          t.on("start.zoom", function () {
            k(this, arguments).event(n).start();
          })
            .on("interrupt.zoom end.zoom", function () {
              k(this, arguments).event(n).end();
            })
            .tween("zoom", function () {
              var t = this,
                o = arguments,
                s = k(t, o).event(n),
                a = e.apply(t, o),
                c = i == null ? v(a) : typeof i === "function" ? i.apply(t, o) : i,
                h = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                u = t.__zoom,
                f = typeof r === "function" ? r.apply(t, o) : r,
                d = l(u.invert(c).concat(h / u.k), f.invert(c).concat(h / f.k));
              return function (t) {
                if (t === 1) t = f;
                else {
                  var e = d(t),
                    r = h / e[2];
                  t = new Transform(r, c[0] - e[0] * r, c[1] - e[1] * r);
                }
                s.zoom(null, t);
              };
            });
        }
        function k(t, e, r) {
          return (!r && t.__zooming) || new T(t, e);
        }
        function T(t, r) {
          this.that = t;
          this.args = r;
          this.active = 0;
          this.sourceEvent = null;
          this.extent = e.apply(t, r);
          this.taps = 0;
        }
        T.prototype = {
          event: function (t) {
            if (t) this.sourceEvent = t;
            return this;
          },
          start: function () {
            if (++this.active === 1) {
              this.that.__zooming = this;
              this.emit("start");
            }
            return this;
          },
          zoom: function (t, e) {
            if (this.mouse && t !== "mouse") this.mouse[1] = e.invert(this.mouse[0]);
            if (this.touch0 && t !== "touch") this.touch0[1] = e.invert(this.touch0[0]);
            if (this.touch1 && t !== "touch") this.touch1[1] = e.invert(this.touch1[0]);
            this.that.__zoom = e;
            this.emit("zoom");
            return this;
          },
          end: function () {
            if (--this.active === 0) {
              delete this.that.__zooming;
              this.emit("end");
            }
            return this;
          },
          emit: function (t) {
            var e = select(this.that).datum();
            c.call(
              t,
              this.that,
              new ZoomEvent(t, { sourceEvent: this.sourceEvent, target: y, type: t, transform: this.that.__zoom, dispatch: c }),
              e
            );
          },
        };
        function _(e, ...n) {
          if (!t.apply(this, arguments)) return;
          var a = k(this, n).event(e),
            l = this.__zoom,
            c = Math.max(o[0], Math.min(o[1], l.k * Math.pow(2, i.apply(this, arguments)))),
            h = pointer(e);
          if (a.wheel) {
            if (a.mouse[0][0] !== h[0] || a.mouse[0][1] !== h[1]) {
              a.mouse[1] = l.invert((a.mouse[0] = h));
            }
            clearTimeout(a.wheel);
          } else if (l.k === c) return;
          else {
            a.mouse = [h, l.invert(h)];
            interrupt(this);
            a.start();
          }
          noevent(e);
          a.wheel = setTimeout(u, p);
          a.zoom("mouse", r(b(C(l, c), a.mouse[0], a.mouse[1]), a.extent, s));
          function u() {
            a.wheel = null;
            a.end();
          }
        }
        function w(e, ...i) {
          if (f || !t.apply(this, arguments)) return;
          var n = e.currentTarget,
            o = k(this, i, true).event(e),
            a = select(e.view).on("mousemove.zoom", u, true).on("mouseup.zoom", d, true),
            l = pointer(e, n),
            c = e.clientX,
            h = e.clientY;
          dragDisable(e.view);
          nopropagation(e);
          o.mouse = [l, this.__zoom.invert(l)];
          interrupt(this);
          o.start();
          function u(t) {
            noevent(t);
            if (!o.moved) {
              var e = t.clientX - c,
                i = t.clientY - h;
              o.moved = e * e + i * i > g;
            }
            o.event(t).zoom("mouse", r(b(o.that.__zoom, (o.mouse[0] = pointer(t, n)), o.mouse[1]), o.extent, s));
          }
          function d(t) {
            a.on("mousemove.zoom mouseup.zoom", null);
            dragEnable(t.view, o.moved);
            noevent(t);
            o.event(t).end();
          }
        }
        function S(i, ...n) {
          if (!t.apply(this, arguments)) return;
          var o = this.__zoom,
            l = pointer(i.changedTouches ? i.changedTouches[0] : i, this),
            c = o.invert(l),
            h = o.k * (i.shiftKey ? 0.5 : 2),
            u = r(b(C(o, h), l, c), e.apply(this, n), s);
          noevent(i);
          if (a > 0) select(this).transition().duration(a).call(x, u, l, i);
          else select(this).call(y.transform, u, l, i);
        }
        function B(e, ...r) {
          if (!t.apply(this, arguments)) return;
          var i = e.touches,
            n = i.length,
            o = k(this, r, e.changedTouches.length === n).event(e),
            s,
            a,
            l,
            c;
          nopropagation(e);
          for (a = 0; a < n; ++a) {
            (l = i[a]), (c = pointer(l, this));
            c = [c, this.__zoom.invert(c), l.identifier];
            if (!o.touch0) (o.touch0 = c), (s = true), (o.taps = 1 + !!h);
            else if (!o.touch1 && o.touch0[2] !== c[2]) (o.touch1 = c), (o.taps = 0);
          }
          if (h) h = clearTimeout(h);
          if (s) {
            if (o.taps < 2)
              (u = c[0]),
                (h = setTimeout(function () {
                  h = null;
                }, d));
            interrupt(this);
            o.start();
          }
        }
        function F(t, ...e) {
          if (!this.__zooming) return;
          var i = k(this, e).event(t),
            n = t.changedTouches,
            o = n.length,
            a,
            l,
            c,
            h;
          noevent(t);
          for (a = 0; a < o; ++a) {
            (l = n[a]), (c = pointer(l, this));
            if (i.touch0 && i.touch0[2] === l.identifier) i.touch0[0] = c;
            else if (i.touch1 && i.touch1[2] === l.identifier) i.touch1[0] = c;
          }
          l = i.that.__zoom;
          if (i.touch1) {
            var u = i.touch0[0],
              f = i.touch0[1],
              d = i.touch1[0],
              p = i.touch1[1],
              g = (g = d[0] - u[0]) * g + (g = d[1] - u[1]) * g,
              m = (m = p[0] - f[0]) * m + (m = p[1] - f[1]) * m;
            l = C(l, Math.sqrt(g / m));
            c = [(u[0] + d[0]) / 2, (u[1] + d[1]) / 2];
            h = [(f[0] + p[0]) / 2, (f[1] + p[1]) / 2];
          } else if (i.touch0) (c = i.touch0[0]), (h = i.touch0[1]);
          else return;
          i.zoom("touch", r(b(l, c, h), i.extent, s));
        }
        function A(t, ...e) {
          if (!this.__zooming) return;
          var r = k(this, e).event(t),
            i = t.changedTouches,
            n = i.length,
            o,
            s;
          nopropagation(t);
          if (f) clearTimeout(f);
          f = setTimeout(function () {
            f = null;
          }, d);
          for (o = 0; o < n; ++o) {
            s = i[o];
            if (r.touch0 && r.touch0[2] === s.identifier) delete r.touch0;
            else if (r.touch1 && r.touch1[2] === s.identifier) delete r.touch1;
          }
          if (r.touch1 && !r.touch0) (r.touch0 = r.touch1), delete r.touch1;
          if (r.touch0) r.touch0[1] = this.__zoom.invert(r.touch0[0]);
          else {
            r.end();
            if (r.taps === 2) {
              s = pointer(s, this);
              if (Math.hypot(u[0] - s[0], u[1] - s[1]) < m) {
                var a = select(this).on("dblclick.zoom");
                if (a) a.apply(this, arguments);
              }
            }
          }
        }
        y.wheelDelta = function (t) {
          return arguments.length ? ((i = typeof t === "function" ? t : constant(+t)), y) : i;
        };
        y.filter = function (e) {
          return arguments.length ? ((t = typeof e === "function" ? e : constant(!!e)), y) : t;
        };
        y.touchable = function (t) {
          return arguments.length ? ((n = typeof t === "function" ? t : constant(!!t)), y) : n;
        };
        y.extent = function (t) {
          return arguments.length
            ? ((e =
                typeof t === "function"
                  ? t
                  : constant([
                      [+t[0][0], +t[0][1]],
                      [+t[1][0], +t[1][1]],
                    ])),
              y)
            : e;
        };
        y.scaleExtent = function (t) {
          return arguments.length ? ((o[0] = +t[0]), (o[1] = +t[1]), y) : [o[0], o[1]];
        };
        y.translateExtent = function (t) {
          return arguments.length
            ? ((s[0][0] = +t[0][0]), (s[1][0] = +t[1][0]), (s[0][1] = +t[0][1]), (s[1][1] = +t[1][1]), y)
            : [
                [s[0][0], s[0][1]],
                [s[1][0], s[1][1]],
              ];
        };
        y.constrain = function (t) {
          return arguments.length ? ((r = t), y) : r;
        };
        y.duration = function (t) {
          return arguments.length ? ((a = +t), y) : a;
        };
        y.interpolate = function (t) {
          return arguments.length ? ((l = t), y) : l;
        };
        y.on = function () {
          var t = c.on.apply(c, arguments);
          return t === c ? y : t;
        };
        y.clickDistance = function (t) {
          return arguments.length ? ((g = (t = +t) * t), y) : Math.sqrt(g);
        };
        y.tapDistance = function (t) {
          return arguments.length ? ((m = +t), y) : m;
        };
        return y;
      }
    },
    27484: function (t) {
      !(function (e, r) {
        true ? (t.exports = r()) : 0;
      })(this, function () {
        "use strict";
        var t = 1e3,
          e = 6e4,
          r = 36e5,
          i = "millisecond",
          n = "second",
          o = "minute",
          s = "hour",
          a = "day",
          l = "week",
          c = "month",
          h = "quarter",
          u = "year",
          f = "date",
          d = "Invalid Date",
          p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          m = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function (t) {
              var e = ["th", "st", "nd", "rd"],
                r = t % 100;
              return "[" + t + (e[(r - 20) % 10] || e[r] || e[0]) + "]";
            },
          },
          y = function (t, e, r) {
            var i = String(t);
            return !i || i.length >= e ? t : "" + Array(e + 1 - i.length).join(r) + t;
          },
          C = {
            s: y,
            z: function (t) {
              var e = -t.utcOffset(),
                r = Math.abs(e),
                i = Math.floor(r / 60),
                n = r % 60;
              return (e <= 0 ? "+" : "-") + y(i, 2, "0") + ":" + y(n, 2, "0");
            },
            m: function t(e, r) {
              if (e.date() < r.date()) return -t(r, e);
              var i = 12 * (r.year() - e.year()) + (r.month() - e.month()),
                n = e.clone().add(i, c),
                o = r - n < 0,
                s = e.clone().add(i + (o ? -1 : 1), c);
              return +(-(i + (r - n) / (o ? n - s : s - n)) || 0);
            },
            a: function (t) {
              return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
            },
            p: function (t) {
              return (
                { M: c, y: u, w: l, d: a, D: f, h: s, m: o, s: n, ms: i, Q: h }[t] ||
                String(t || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (t) {
              return void 0 === t;
            },
          },
          b = "en",
          v = {};
        v[b] = m;
        var x = function (t) {
            return t instanceof w;
          },
          k = function t(e, r, i) {
            var n;
            if (!e) return b;
            if ("string" == typeof e) {
              var o = e.toLowerCase();
              v[o] && (n = o), r && ((v[o] = r), (n = o));
              var s = e.split("-");
              if (!n && s.length > 1) return t(s[0]);
            } else {
              var a = e.name;
              (v[a] = e), (n = a);
            }
            return !i && n && (b = n), n || (!i && b);
          },
          T = function (t, e) {
            if (x(t)) return t.clone();
            var r = "object" == typeof e ? e : {};
            return (r.date = t), (r.args = arguments), new w(r);
          },
          _ = C;
        (_.l = k),
          (_.i = x),
          (_.w = function (t, e) {
            return T(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });
          });
        var w = (function () {
            function m(t) {
              (this.$L = k(t.locale, null, !0)), this.parse(t);
            }
            var y = m.prototype;
            return (
              (y.parse = function (t) {
                (this.$d = (function (t) {
                  var e = t.date,
                    r = t.utc;
                  if (null === e) return new Date(NaN);
                  if (_.u(e)) return new Date();
                  if (e instanceof Date) return new Date(e);
                  if ("string" == typeof e && !/Z$/i.test(e)) {
                    var i = e.match(p);
                    if (i) {
                      var n = i[2] - 1 || 0,
                        o = (i[7] || "0").substring(0, 3);
                      return r
                        ? new Date(Date.UTC(i[1], n, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o))
                        : new Date(i[1], n, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o);
                    }
                  }
                  return new Date(e);
                })(t)),
                  (this.$x = t.x || {}),
                  this.init();
              }),
              (y.init = function () {
                var t = this.$d;
                (this.$y = t.getFullYear()),
                  (this.$M = t.getMonth()),
                  (this.$D = t.getDate()),
                  (this.$W = t.getDay()),
                  (this.$H = t.getHours()),
                  (this.$m = t.getMinutes()),
                  (this.$s = t.getSeconds()),
                  (this.$ms = t.getMilliseconds());
              }),
              (y.$utils = function () {
                return _;
              }),
              (y.isValid = function () {
                return !(this.$d.toString() === d);
              }),
              (y.isSame = function (t, e) {
                var r = T(t);
                return this.startOf(e) <= r && r <= this.endOf(e);
              }),
              (y.isAfter = function (t, e) {
                return T(t) < this.startOf(e);
              }),
              (y.isBefore = function (t, e) {
                return this.endOf(e) < T(t);
              }),
              (y.$g = function (t, e, r) {
                return _.u(t) ? this[e] : this.set(r, t);
              }),
              (y.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (y.valueOf = function () {
                return this.$d.getTime();
              }),
              (y.startOf = function (t, e) {
                var r = this,
                  i = !!_.u(e) || e,
                  h = _.p(t),
                  d = function (t, e) {
                    var n = _.w(r.$u ? Date.UTC(r.$y, e, t) : new Date(r.$y, e, t), r);
                    return i ? n : n.endOf(a);
                  },
                  p = function (t, e) {
                    return _.w(r.toDate()[t].apply(r.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), r);
                  },
                  g = this.$W,
                  m = this.$M,
                  y = this.$D,
                  C = "set" + (this.$u ? "UTC" : "");
                switch (h) {
                  case u:
                    return i ? d(1, 0) : d(31, 11);
                  case c:
                    return i ? d(1, m) : d(0, m + 1);
                  case l:
                    var b = this.$locale().weekStart || 0,
                      v = (g < b ? g + 7 : g) - b;
                    return d(i ? y - v : y + (6 - v), m);
                  case a:
                  case f:
                    return p(C + "Hours", 0);
                  case s:
                    return p(C + "Minutes", 1);
                  case o:
                    return p(C + "Seconds", 2);
                  case n:
                    return p(C + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (y.endOf = function (t) {
                return this.startOf(t, !1);
              }),
              (y.$set = function (t, e) {
                var r,
                  l = _.p(t),
                  h = "set" + (this.$u ? "UTC" : ""),
                  d = ((r = {}),
                  (r[a] = h + "Date"),
                  (r[f] = h + "Date"),
                  (r[c] = h + "Month"),
                  (r[u] = h + "FullYear"),
                  (r[s] = h + "Hours"),
                  (r[o] = h + "Minutes"),
                  (r[n] = h + "Seconds"),
                  (r[i] = h + "Milliseconds"),
                  r)[l],
                  p = l === a ? this.$D + (e - this.$W) : e;
                if (l === c || l === u) {
                  var g = this.clone().set(f, 1);
                  g.$d[d](p), g.init(), (this.$d = g.set(f, Math.min(this.$D, g.daysInMonth())).$d);
                } else d && this.$d[d](p);
                return this.init(), this;
              }),
              (y.set = function (t, e) {
                return this.clone().$set(t, e);
              }),
              (y.get = function (t) {
                return this[_.p(t)]();
              }),
              (y.add = function (i, h) {
                var f,
                  d = this;
                i = Number(i);
                var p = _.p(h),
                  g = function (t) {
                    var e = T(d);
                    return _.w(e.date(e.date() + Math.round(t * i)), d);
                  };
                if (p === c) return this.set(c, this.$M + i);
                if (p === u) return this.set(u, this.$y + i);
                if (p === a) return g(1);
                if (p === l) return g(7);
                var m = ((f = {}), (f[o] = e), (f[s] = r), (f[n] = t), f)[p] || 1,
                  y = this.$d.getTime() + i * m;
                return _.w(y, this);
              }),
              (y.subtract = function (t, e) {
                return this.add(-1 * t, e);
              }),
              (y.format = function (t) {
                var e = this,
                  r = this.$locale();
                if (!this.isValid()) return r.invalidDate || d;
                var i = t || "YYYY-MM-DDTHH:mm:ssZ",
                  n = _.z(this),
                  o = this.$H,
                  s = this.$m,
                  a = this.$M,
                  l = r.weekdays,
                  c = r.months,
                  h = function (t, r, n, o) {
                    return (t && (t[r] || t(e, i))) || n[r].slice(0, o);
                  },
                  u = function (t) {
                    return _.s(o % 12 || 12, t, "0");
                  },
                  f =
                    r.meridiem ||
                    function (t, e, r) {
                      var i = t < 12 ? "AM" : "PM";
                      return r ? i.toLowerCase() : i;
                    },
                  p = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: a + 1,
                    MM: _.s(a + 1, 2, "0"),
                    MMM: h(r.monthsShort, a, c, 3),
                    MMMM: h(c, a),
                    D: this.$D,
                    DD: _.s(this.$D, 2, "0"),
                    d: String(this.$W),
                    dd: h(r.weekdaysMin, this.$W, l, 2),
                    ddd: h(r.weekdaysShort, this.$W, l, 3),
                    dddd: l[this.$W],
                    H: String(o),
                    HH: _.s(o, 2, "0"),
                    h: u(1),
                    hh: u(2),
                    a: f(o, s, !0),
                    A: f(o, s, !1),
                    m: String(s),
                    mm: _.s(s, 2, "0"),
                    s: String(this.$s),
                    ss: _.s(this.$s, 2, "0"),
                    SSS: _.s(this.$ms, 3, "0"),
                    Z: n,
                  };
                return i.replace(g, function (t, e) {
                  return e || p[t] || n.replace(":", "");
                });
              }),
              (y.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
              }),
              (y.diff = function (i, f, d) {
                var p,
                  g = _.p(f),
                  m = T(i),
                  y = (m.utcOffset() - this.utcOffset()) * e,
                  C = this - m,
                  b = _.m(this, m);
                return (
                  (b =
                    ((p = {}),
                    (p[u] = b / 12),
                    (p[c] = b),
                    (p[h] = b / 3),
                    (p[l] = (C - y) / 6048e5),
                    (p[a] = (C - y) / 864e5),
                    (p[s] = C / r),
                    (p[o] = C / e),
                    (p[n] = C / t),
                    p)[g] || C),
                  d ? b : _.a(b)
                );
              }),
              (y.daysInMonth = function () {
                return this.endOf(c).$D;
              }),
              (y.$locale = function () {
                return v[this.$L];
              }),
              (y.locale = function (t, e) {
                if (!t) return this.$L;
                var r = this.clone(),
                  i = k(t, e, !0);
                return i && (r.$L = i), r;
              }),
              (y.clone = function () {
                return _.w(this.$d, this);
              }),
              (y.toDate = function () {
                return new Date(this.valueOf());
              }),
              (y.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (y.toISOString = function () {
                return this.$d.toISOString();
              }),
              (y.toString = function () {
                return this.$d.toUTCString();
              }),
              m
            );
          })(),
          S = w.prototype;
        return (
          (T.prototype = S),
          [
            ["$ms", i],
            ["$s", n],
            ["$m", o],
            ["$H", s],
            ["$W", a],
            ["$M", c],
            ["$y", u],
            ["$D", f],
          ].forEach(function (t) {
            S[t[1]] = function (e) {
              return this.$g(e, t[0], t[1]);
            };
          }),
          (T.extend = function (t, e) {
            return t.$i || (t(e, w, T), (t.$i = !0)), T;
          }),
          (T.locale = k),
          (T.isDayjs = x),
          (T.unix = function (t) {
            return T(1e3 * t);
          }),
          (T.en = v[b]),
          (T.Ls = v),
          (T.p = {}),
          T
        );
      });
    },
    27856: function (t) {
      (function (e, r) {
        true ? (t.exports = r()) : 0;
      })(this, function () {
        "use strict";
        const { entries: t, setPrototypeOf: e, isFrozen: r, getPrototypeOf: i, getOwnPropertyDescriptor: n } = Object;
        let { freeze: o, seal: s, create: a } = Object;
        let { apply: l, construct: c } = typeof Reflect !== "undefined" && Reflect;
        if (!l) {
          l = function t(e, r, i) {
            return e.apply(r, i);
          };
        }
        if (!o) {
          o = function t(e) {
            return e;
          };
        }
        if (!s) {
          s = function t(e) {
            return e;
          };
        }
        if (!c) {
          c = function t(e, r) {
            return new e(...r);
          };
        }
        const h = x(Array.prototype.forEach);
        const u = x(Array.prototype.pop);
        const f = x(Array.prototype.push);
        const d = x(String.prototype.toLowerCase);
        const p = x(String.prototype.toString);
        const g = x(String.prototype.match);
        const m = x(String.prototype.replace);
        const y = x(String.prototype.indexOf);
        const C = x(String.prototype.trim);
        const b = x(RegExp.prototype.test);
        const v = k(TypeError);
        function x(t) {
          return function (e) {
            for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) {
              i[n - 1] = arguments[n];
            }
            return l(t, e, i);
          };
        }
        function k(t) {
          return function () {
            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) {
              r[i] = arguments[i];
            }
            return c(t, r);
          };
        }
        function T(t, i, n) {
          var o;
          n = (o = n) !== null && o !== void 0 ? o : d;
          if (e) {
            e(t, null);
          }
          let s = i.length;
          while (s--) {
            let e = i[s];
            if (typeof e === "string") {
              const t = n(e);
              if (t !== e) {
                if (!r(i)) {
                  i[s] = t;
                }
                e = t;
              }
            }
            t[e] = true;
          }
          return t;
        }
        function _(e) {
          const r = a(null);
          for (const [i, n] of t(e)) {
            r[i] = n;
          }
          return r;
        }
        function w(t, e) {
          while (t !== null) {
            const r = n(t, e);
            if (r) {
              if (r.get) {
                return x(r.get);
              }
              if (typeof r.value === "function") {
                return x(r.value);
              }
            }
            t = i(t);
          }
          function r(t) {
            console.warn("fallback value for", t);
            return null;
          }
          return r;
        }
        const S = o([
          "a",
          "abbr",
          "acronym",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "bdi",
          "bdo",
          "big",
          "blink",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "center",
          "cite",
          "code",
          "col",
          "colgroup",
          "content",
          "data",
          "datalist",
          "dd",
          "decorator",
          "del",
          "details",
          "dfn",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "element",
          "em",
          "fieldset",
          "figcaption",
          "figure",
          "font",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meter",
          "nav",
          "nobr",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "section",
          "select",
          "shadow",
          "small",
          "source",
          "spacer",
          "span",
          "strike",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "template",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "tt",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
        ]);
        const B = o([
          "svg",
          "a",
          "altglyph",
          "altglyphdef",
          "altglyphitem",
          "animatecolor",
          "animatemotion",
          "animatetransform",
          "circle",
          "clippath",
          "defs",
          "desc",
          "ellipse",
          "filter",
          "font",
          "g",
          "glyph",
          "glyphref",
          "hkern",
          "image",
          "line",
          "lineargradient",
          "marker",
          "mask",
          "metadata",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialgradient",
          "rect",
          "stop",
          "style",
          "switch",
          "symbol",
          "text",
          "textpath",
          "title",
          "tref",
          "tspan",
          "view",
          "vkern",
        ]);
        const F = o([
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feDropShadow",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
        ]);
        const A = o([
          "animate",
          "color-profile",
          "cursor",
          "discard",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-src",
          "font-face-uri",
          "foreignobject",
          "hatch",
          "hatchpath",
          "mesh",
          "meshgradient",
          "meshpatch",
          "meshrow",
          "missing-glyph",
          "script",
          "set",
          "solidcolor",
          "unknown",
          "use",
        ]);
        const L = o([
          "math",
          "menclose",
          "merror",
          "mfenced",
          "mfrac",
          "mglyph",
          "mi",
          "mlabeledtr",
          "mmultiscripts",
          "mn",
          "mo",
          "mover",
          "mpadded",
          "mphantom",
          "mroot",
          "mrow",
          "ms",
          "mspace",
          "msqrt",
          "mstyle",
          "msub",
          "msup",
          "msubsup",
          "mtable",
          "mtd",
          "mtext",
          "mtr",
          "munder",
          "munderover",
          "mprescripts",
        ]);
        const Z = o([
          "maction",
          "maligngroup",
          "malignmark",
          "mlongdiv",
          "mscarries",
          "mscarry",
          "msgroup",
          "mstack",
          "msline",
          "msrow",
          "semantics",
          "annotation",
          "annotation-xml",
          "mprescripts",
          "none",
        ]);
        const E = o(["#text"]);
        const M = o([
          "accept",
          "action",
          "align",
          "alt",
          "autocapitalize",
          "autocomplete",
          "autopictureinpicture",
          "autoplay",
          "background",
          "bgcolor",
          "border",
          "capture",
          "cellpadding",
          "cellspacing",
          "checked",
          "cite",
          "class",
          "clear",
          "color",
          "cols",
          "colspan",
          "controls",
          "controlslist",
          "coords",
          "crossorigin",
          "datetime",
          "decoding",
          "default",
          "dir",
          "disabled",
          "disablepictureinpicture",
          "disableremoteplayback",
          "download",
          "draggable",
          "enctype",
          "enterkeyhint",
          "face",
          "for",
          "headers",
          "height",
          "hidden",
          "high",
          "href",
          "hreflang",
          "id",
          "inputmode",
          "integrity",
          "ismap",
          "kind",
          "label",
          "lang",
          "list",
          "loading",
          "loop",
          "low",
          "max",
          "maxlength",
          "media",
          "method",
          "min",
          "minlength",
          "multiple",
          "muted",
          "name",
          "nonce",
          "noshade",
          "novalidate",
          "nowrap",
          "open",
          "optimum",
          "pattern",
          "placeholder",
          "playsinline",
          "poster",
          "preload",
          "pubdate",
          "radiogroup",
          "readonly",
          "rel",
          "required",
          "rev",
          "reversed",
          "role",
          "rows",
          "rowspan",
          "spellcheck",
          "scope",
          "selected",
          "shape",
          "size",
          "sizes",
          "span",
          "srclang",
          "start",
          "src",
          "srcset",
          "step",
          "style",
          "summary",
          "tabindex",
          "title",
          "translate",
          "type",
          "usemap",
          "valign",
          "value",
          "width",
          "xmlns",
          "slot",
        ]);
        const O = o([
          "accent-height",
          "accumulate",
          "additive",
          "alignment-baseline",
          "ascent",
          "attributename",
          "attributetype",
          "azimuth",
          "basefrequency",
          "baseline-shift",
          "begin",
          "bias",
          "by",
          "class",
          "clip",
          "clippathunits",
          "clip-path",
          "clip-rule",
          "color",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "cx",
          "cy",
          "d",
          "dx",
          "dy",
          "diffuseconstant",
          "direction",
          "display",
          "divisor",
          "dur",
          "edgemode",
          "elevation",
          "end",
          "fill",
          "fill-opacity",
          "fill-rule",
          "filter",
          "filterunits",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyph-name",
          "glyphref",
          "gradientunits",
          "gradienttransform",
          "height",
          "href",
          "id",
          "image-rendering",
          "in",
          "in2",
          "k",
          "k1",
          "k2",
          "k3",
          "k4",
          "kerning",
          "keypoints",
          "keysplines",
          "keytimes",
          "lang",
          "lengthadjust",
          "letter-spacing",
          "kernelmatrix",
          "kernelunitlength",
          "lighting-color",
          "local",
          "marker-end",
          "marker-mid",
          "marker-start",
          "markerheight",
          "markerunits",
          "markerwidth",
          "maskcontentunits",
          "maskunits",
          "max",
          "mask",
          "media",
          "method",
          "mode",
          "min",
          "name",
          "numoctaves",
          "offset",
          "operator",
          "opacity",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "paint-order",
          "path",
          "pathlength",
          "patterncontentunits",
          "patterntransform",
          "patternunits",
          "points",
          "preservealpha",
          "preserveaspectratio",
          "primitiveunits",
          "r",
          "rx",
          "ry",
          "radius",
          "refx",
          "refy",
          "repeatcount",
          "repeatdur",
          "restart",
          "result",
          "rotate",
          "scale",
          "seed",
          "shape-rendering",
          "specularconstant",
          "specularexponent",
          "spreadmethod",
          "startoffset",
          "stddeviation",
          "stitchtiles",
          "stop-color",
          "stop-opacity",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke",
          "stroke-width",
          "style",
          "surfacescale",
          "systemlanguage",
          "tabindex",
          "targetx",
          "targety",
          "transform",
          "transform-origin",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "textlength",
          "type",
          "u1",
          "u2",
          "unicode",
          "values",
          "viewbox",
          "visibility",
          "version",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "width",
          "word-spacing",
          "wrap",
          "writing-mode",
          "xchannelselector",
          "ychannelselector",
          "x",
          "x1",
          "x2",
          "xmlns",
          "y",
          "y1",
          "y2",
          "z",
          "zoomandpan",
        ]);
        const I = o([
          "accent",
          "accentunder",
          "align",
          "bevelled",
          "close",
          "columnsalign",
          "columnlines",
          "columnspan",
          "denomalign",
          "depth",
          "dir",
          "display",
          "displaystyle",
          "encoding",
          "fence",
          "frame",
          "height",
          "href",
          "id",
          "largeop",
          "length",
          "linethickness",
          "lspace",
          "lquote",
          "mathbackground",
          "mathcolor",
          "mathsize",
          "mathvariant",
          "maxsize",
          "minsize",
          "movablelimits",
          "notation",
          "numalign",
          "open",
          "rowalign",
          "rowlines",
          "rowspacing",
          "rowspan",
          "rspace",
          "rquote",
          "scriptlevel",
          "scriptminsize",
          "scriptsizemultiplier",
          "selection",
          "separator",
          "separators",
          "stretchy",
          "subscriptshift",
          "supscriptshift",
          "symmetric",
          "voffset",
          "width",
          "xmlns",
        ]);
        const q = o(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
        const z = s(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
        const D = s(/<%[\w\W]*|[\w\W]*%>/gm);
        const N = s(/\${[\w\W]*}/gm);
        const j = s(/^data-[\-\w.\u00B7-\uFFFF]/);
        const $ = s(/^aria-[\-\w]+$/);
        const P = s(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
        const R = s(/^(?:\w+script|data):/i);
        const W = s(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
        const H = s(/^html$/i);
        var Y = Object.freeze({
          __proto__: null,
          MUSTACHE_EXPR: z,
          ERB_EXPR: D,
          TMPLIT_EXPR: N,
          DATA_ATTR: j,
          ARIA_ATTR: $,
          IS_ALLOWED_URI: P,
          IS_SCRIPT_OR_DATA: R,
          ATTR_WHITESPACE: W,
          DOCTYPE_NAME: H,
        });
        const U = () => (typeof window === "undefined" ? null : window);
        const V = function t(e, r) {
          if (typeof e !== "object" || typeof e.createPolicy !== "function") {
            return null;
          }
          let i = null;
          const n = "data-tt-policy-suffix";
          if (r && r.hasAttribute(n)) {
            i = r.getAttribute(n);
          }
          const o = "dompurify" + (i ? "#" + i : "");
          try {
            return e.createPolicy(o, {
              createHTML(t) {
                return t;
              },
              createScriptURL(t) {
                return t;
              },
            });
          } catch (s) {
            console.warn("TrustedTypes policy " + o + " could not be created.");
            return null;
          }
        };
        function G() {
          let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : U();
          const r = (t) => G(t);
          r.version = "3.0.5";
          r.removed = [];
          if (!e || !e.document || e.document.nodeType !== 9) {
            r.isSupported = false;
            return r;
          }
          const i = e.document;
          const n = i.currentScript;
          let { document: s } = e;
          const {
            DocumentFragment: a,
            HTMLTemplateElement: l,
            Node: c,
            Element: x,
            NodeFilter: k,
            NamedNodeMap: z = e.NamedNodeMap || e.MozNamedAttrMap,
            HTMLFormElement: D,
            DOMParser: N,
            trustedTypes: j,
          } = e;
          const $ = x.prototype;
          const R = w($, "cloneNode");
          const W = w($, "nextSibling");
          const X = w($, "childNodes");
          const K = w($, "parentNode");
          if (typeof l === "function") {
            const t = s.createElement("template");
            if (t.content && t.content.ownerDocument) {
              s = t.content.ownerDocument;
            }
          }
          let Q;
          let J = "";
          const { implementation: tt, createNodeIterator: et, createDocumentFragment: rt, getElementsByTagName: it } = s;
          const { importNode: nt } = i;
          let ot = {};
          r.isSupported = typeof t === "function" && typeof K === "function" && tt && tt.createHTMLDocument !== undefined;
          const { MUSTACHE_EXPR: st, ERB_EXPR: at, TMPLIT_EXPR: lt, DATA_ATTR: ct, ARIA_ATTR: ht, IS_SCRIPT_OR_DATA: ut, ATTR_WHITESPACE: ft } = Y;
          let { IS_ALLOWED_URI: dt } = Y;
          let pt = null;
          const gt = T({}, [...S, ...B, ...F, ...L, ...E]);
          let mt = null;
          const yt = T({}, [...M, ...O, ...I, ...q]);
          let Ct = Object.seal(
            Object.create(null, {
              tagNameCheck: { writable: true, configurable: false, enumerable: true, value: null },
              attributeNameCheck: { writable: true, configurable: false, enumerable: true, value: null },
              allowCustomizedBuiltInElements: { writable: true, configurable: false, enumerable: true, value: false },
            })
          );
          let bt = null;
          let vt = null;
          let xt = true;
          let kt = true;
          let Tt = false;
          let _t = true;
          let wt = false;
          let St = false;
          let Bt = false;
          let Ft = false;
          let At = false;
          let Lt = false;
          let Zt = false;
          let Et = true;
          let Mt = false;
          const Ot = "user-content-";
          let It = true;
          let qt = false;
          let zt = {};
          let Dt = null;
          const Nt = T({}, [
            "annotation-xml",
            "audio",
            "colgroup",
            "desc",
            "foreignobject",
            "head",
            "iframe",
            "math",
            "mi",
            "mn",
            "mo",
            "ms",
            "mtext",
            "noembed",
            "noframes",
            "noscript",
            "plaintext",
            "script",
            "style",
            "svg",
            "template",
            "thead",
            "title",
            "video",
            "xmp",
          ]);
          let jt = null;
          const $t = T({}, ["audio", "video", "img", "source", "image", "track"]);
          let Pt = null;
          const Rt = T({}, [
            "alt",
            "class",
            "for",
            "id",
            "label",
            "name",
            "pattern",
            "placeholder",
            "role",
            "summary",
            "title",
            "value",
            "style",
            "xmlns",
          ]);
          const Wt = "http://www.w3.org/1998/Math/MathML";
          const Ht = "http://www.w3.org/2000/svg";
          const Yt = "http://www.w3.org/1999/xhtml";
          let Ut = Yt;
          let Vt = false;
          let Gt = null;
          const Xt = T({}, [Wt, Ht, Yt], p);
          let Kt;
          const Qt = ["application/xhtml+xml", "text/html"];
          const Jt = "text/html";
          let te;
          let ee = null;
          const re = s.createElement("form");
          const ie = function t(e) {
            return e instanceof RegExp || e instanceof Function;
          };
          const ne = function t(e) {
            if (ee && ee === e) {
              return;
            }
            if (!e || typeof e !== "object") {
              e = {};
            }
            e = _(e);
            Kt = Qt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? (Kt = Jt) : (Kt = e.PARSER_MEDIA_TYPE);
            te = Kt === "application/xhtml+xml" ? p : d;
            pt = "ALLOWED_TAGS" in e ? T({}, e.ALLOWED_TAGS, te) : gt;
            mt = "ALLOWED_ATTR" in e ? T({}, e.ALLOWED_ATTR, te) : yt;
            Gt = "ALLOWED_NAMESPACES" in e ? T({}, e.ALLOWED_NAMESPACES, p) : Xt;
            Pt = "ADD_URI_SAFE_ATTR" in e ? T(_(Rt), e.ADD_URI_SAFE_ATTR, te) : Rt;
            jt = "ADD_DATA_URI_TAGS" in e ? T(_($t), e.ADD_DATA_URI_TAGS, te) : $t;
            Dt = "FORBID_CONTENTS" in e ? T({}, e.FORBID_CONTENTS, te) : Nt;
            bt = "FORBID_TAGS" in e ? T({}, e.FORBID_TAGS, te) : {};
            vt = "FORBID_ATTR" in e ? T({}, e.FORBID_ATTR, te) : {};
            zt = "USE_PROFILES" in e ? e.USE_PROFILES : false;
            xt = e.ALLOW_ARIA_ATTR !== false;
            kt = e.ALLOW_DATA_ATTR !== false;
            Tt = e.ALLOW_UNKNOWN_PROTOCOLS || false;
            _t = e.ALLOW_SELF_CLOSE_IN_ATTR !== false;
            wt = e.SAFE_FOR_TEMPLATES || false;
            St = e.WHOLE_DOCUMENT || false;
            At = e.RETURN_DOM || false;
            Lt = e.RETURN_DOM_FRAGMENT || false;
            Zt = e.RETURN_TRUSTED_TYPE || false;
            Ft = e.FORCE_BODY || false;
            Et = e.SANITIZE_DOM !== false;
            Mt = e.SANITIZE_NAMED_PROPS || false;
            It = e.KEEP_CONTENT !== false;
            qt = e.IN_PLACE || false;
            dt = e.ALLOWED_URI_REGEXP || P;
            Ut = e.NAMESPACE || Yt;
            Ct = e.CUSTOM_ELEMENT_HANDLING || {};
            if (e.CUSTOM_ELEMENT_HANDLING && ie(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
              Ct.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
            }
            if (e.CUSTOM_ELEMENT_HANDLING && ie(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
              Ct.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
            }
            if (e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
              Ct.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
            }
            if (wt) {
              kt = false;
            }
            if (Lt) {
              At = true;
            }
            if (zt) {
              pt = T({}, [...E]);
              mt = [];
              if (zt.html === true) {
                T(pt, S);
                T(mt, M);
              }
              if (zt.svg === true) {
                T(pt, B);
                T(mt, O);
                T(mt, q);
              }
              if (zt.svgFilters === true) {
                T(pt, F);
                T(mt, O);
                T(mt, q);
              }
              if (zt.mathMl === true) {
                T(pt, L);
                T(mt, I);
                T(mt, q);
              }
            }
            if (e.ADD_TAGS) {
              if (pt === gt) {
                pt = _(pt);
              }
              T(pt, e.ADD_TAGS, te);
            }
            if (e.ADD_ATTR) {
              if (mt === yt) {
                mt = _(mt);
              }
              T(mt, e.ADD_ATTR, te);
            }
            if (e.ADD_URI_SAFE_ATTR) {
              T(Pt, e.ADD_URI_SAFE_ATTR, te);
            }
            if (e.FORBID_CONTENTS) {
              if (Dt === Nt) {
                Dt = _(Dt);
              }
              T(Dt, e.FORBID_CONTENTS, te);
            }
            if (It) {
              pt["#text"] = true;
            }
            if (St) {
              T(pt, ["html", "head", "body"]);
            }
            if (pt.table) {
              T(pt, ["tbody"]);
              delete bt.tbody;
            }
            if (e.TRUSTED_TYPES_POLICY) {
              if (typeof e.TRUSTED_TYPES_POLICY.createHTML !== "function") {
                throw v('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
              }
              if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
                throw v('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
              }
              Q = e.TRUSTED_TYPES_POLICY;
              J = Q.createHTML("");
            } else {
              if (Q === undefined) {
                Q = V(j, n);
              }
              if (Q !== null && typeof J === "string") {
                J = Q.createHTML("");
              }
            }
            if (o) {
              o(e);
            }
            ee = e;
          };
          const oe = T({}, ["mi", "mo", "mn", "ms", "mtext"]);
          const se = T({}, ["foreignobject", "desc", "title", "annotation-xml"]);
          const ae = T({}, ["title", "style", "font", "a", "script"]);
          const le = T({}, B);
          T(le, F);
          T(le, A);
          const ce = T({}, L);
          T(ce, Z);
          const he = function t(e) {
            let r = K(e);
            if (!r || !r.tagName) {
              r = { namespaceURI: Ut, tagName: "template" };
            }
            const i = d(e.tagName);
            const n = d(r.tagName);
            if (!Gt[e.namespaceURI]) {
              return false;
            }
            if (e.namespaceURI === Ht) {
              if (r.namespaceURI === Yt) {
                return i === "svg";
              }
              if (r.namespaceURI === Wt) {
                return i === "svg" && (n === "annotation-xml" || oe[n]);
              }
              return Boolean(le[i]);
            }
            if (e.namespaceURI === Wt) {
              if (r.namespaceURI === Yt) {
                return i === "math";
              }
              if (r.namespaceURI === Ht) {
                return i === "math" && se[n];
              }
              return Boolean(ce[i]);
            }
            if (e.namespaceURI === Yt) {
              if (r.namespaceURI === Ht && !se[n]) {
                return false;
              }
              if (r.namespaceURI === Wt && !oe[n]) {
                return false;
              }
              return !ce[i] && (ae[i] || !le[i]);
            }
            if (Kt === "application/xhtml+xml" && Gt[e.namespaceURI]) {
              return true;
            }
            return false;
          };
          const ue = function t(e) {
            f(r.removed, { element: e });
            try {
              e.parentNode.removeChild(e);
            } catch (i) {
              e.remove();
            }
          };
          const fe = function t(e, i) {
            try {
              f(r.removed, { attribute: i.getAttributeNode(e), from: i });
            } catch (n) {
              f(r.removed, { attribute: null, from: i });
            }
            i.removeAttribute(e);
            if (e === "is" && !mt[e]) {
              if (At || Lt) {
                try {
                  ue(i);
                } catch (n) {}
              } else {
                try {
                  i.setAttribute(e, "");
                } catch (n) {}
              }
            }
          };
          const de = function t(e) {
            let r;
            let i;
            if (Ft) {
              e = "<remove></remove>" + e;
            } else {
              const t = g(e, /^[\r\n\t ]+/);
              i = t && t[0];
            }
            if (Kt === "application/xhtml+xml" && Ut === Yt) {
              e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>";
            }
            const n = Q ? Q.createHTML(e) : e;
            if (Ut === Yt) {
              try {
                r = new N().parseFromString(n, Kt);
              } catch (a) {}
            }
            if (!r || !r.documentElement) {
              r = tt.createDocument(Ut, "template", null);
              try {
                r.documentElement.innerHTML = Vt ? J : n;
              } catch (a) {}
            }
            const o = r.body || r.documentElement;
            if (e && i) {
              o.insertBefore(s.createTextNode(i), o.childNodes[0] || null);
            }
            if (Ut === Yt) {
              return it.call(r, St ? "html" : "body")[0];
            }
            return St ? r.documentElement : o;
          };
          const pe = function t(e) {
            return et.call(e.ownerDocument || e, e, k.SHOW_ELEMENT | k.SHOW_COMMENT | k.SHOW_TEXT, null, false);
          };
          const ge = function t(e) {
            return (
              e instanceof D &&
              (typeof e.nodeName !== "string" ||
                typeof e.textContent !== "string" ||
                typeof e.removeChild !== "function" ||
                !(e.attributes instanceof z) ||
                typeof e.removeAttribute !== "function" ||
                typeof e.setAttribute !== "function" ||
                typeof e.namespaceURI !== "string" ||
                typeof e.insertBefore !== "function" ||
                typeof e.hasChildNodes !== "function")
            );
          };
          const me = function t(e) {
            return typeof c === "object"
              ? e instanceof c
              : e && typeof e === "object" && typeof e.nodeType === "number" && typeof e.nodeName === "string";
          };
          const ye = function t(e, i, n) {
            if (!ot[e]) {
              return;
            }
            h(ot[e], (t) => {
              t.call(r, i, n, ee);
            });
          };
          const Ce = function t(e) {
            let i;
            ye("beforeSanitizeElements", e, null);
            if (ge(e)) {
              ue(e);
              return true;
            }
            const n = te(e.nodeName);
            ye("uponSanitizeElement", e, { tagName: n, allowedTags: pt });
            if (
              e.hasChildNodes() &&
              !me(e.firstElementChild) &&
              (!me(e.content) || !me(e.content.firstElementChild)) &&
              b(/<[/\w]/g, e.innerHTML) &&
              b(/<[/\w]/g, e.textContent)
            ) {
              ue(e);
              return true;
            }
            if (!pt[n] || bt[n]) {
              if (!bt[n] && ve(n)) {
                if (Ct.tagNameCheck instanceof RegExp && b(Ct.tagNameCheck, n)) return false;
                if (Ct.tagNameCheck instanceof Function && Ct.tagNameCheck(n)) return false;
              }
              if (It && !Dt[n]) {
                const t = K(e) || e.parentNode;
                const r = X(e) || e.childNodes;
                if (r && t) {
                  const i = r.length;
                  for (let n = i - 1; n >= 0; --n) {
                    t.insertBefore(R(r[n], true), W(e));
                  }
                }
              }
              ue(e);
              return true;
            }
            if (e instanceof x && !he(e)) {
              ue(e);
              return true;
            }
            if ((n === "noscript" || n === "noembed" || n === "noframes") && b(/<\/no(script|embed|frames)/i, e.innerHTML)) {
              ue(e);
              return true;
            }
            if (wt && e.nodeType === 3) {
              i = e.textContent;
              i = m(i, st, " ");
              i = m(i, at, " ");
              i = m(i, lt, " ");
              if (e.textContent !== i) {
                f(r.removed, { element: e.cloneNode() });
                e.textContent = i;
              }
            }
            ye("afterSanitizeElements", e, null);
            return false;
          };
          const be = function t(e, r, i) {
            if (Et && (r === "id" || r === "name") && (i in s || i in re)) {
              return false;
            }
            if (kt && !vt[r] && b(ct, r));
            else if (xt && b(ht, r));
            else if (!mt[r] || vt[r]) {
              if (
                (ve(e) &&
                  ((Ct.tagNameCheck instanceof RegExp && b(Ct.tagNameCheck, e)) || (Ct.tagNameCheck instanceof Function && Ct.tagNameCheck(e))) &&
                  ((Ct.attributeNameCheck instanceof RegExp && b(Ct.attributeNameCheck, r)) ||
                    (Ct.attributeNameCheck instanceof Function && Ct.attributeNameCheck(r)))) ||
                (r === "is" &&
                  Ct.allowCustomizedBuiltInElements &&
                  ((Ct.tagNameCheck instanceof RegExp && b(Ct.tagNameCheck, i)) || (Ct.tagNameCheck instanceof Function && Ct.tagNameCheck(i))))
              );
              else {
                return false;
              }
            } else if (Pt[r]);
            else if (b(dt, m(i, ft, "")));
            else if ((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && y(i, "data:") === 0 && jt[e]);
            else if (Tt && !b(ut, m(i, ft, "")));
            else if (i) {
              return false;
            } else;
            return true;
          };
          const ve = function t(e) {
            return e.indexOf("-") > 0;
          };
          const xe = function t(e) {
            let i;
            let n;
            let o;
            let s;
            ye("beforeSanitizeAttributes", e, null);
            const { attributes: a } = e;
            if (!a) {
              return;
            }
            const l = { attrName: "", attrValue: "", keepAttr: true, allowedAttributes: mt };
            s = a.length;
            while (s--) {
              i = a[s];
              const { name: t, namespaceURI: h } = i;
              n = t === "value" ? i.value : C(i.value);
              o = te(t);
              l.attrName = o;
              l.attrValue = n;
              l.keepAttr = true;
              l.forceKeepAttr = undefined;
              ye("uponSanitizeAttribute", e, l);
              n = l.attrValue;
              if (l.forceKeepAttr) {
                continue;
              }
              fe(t, e);
              if (!l.keepAttr) {
                continue;
              }
              if (!_t && b(/\/>/i, n)) {
                fe(t, e);
                continue;
              }
              if (wt) {
                n = m(n, st, " ");
                n = m(n, at, " ");
                n = m(n, lt, " ");
              }
              const f = te(e.nodeName);
              if (!be(f, o, n)) {
                continue;
              }
              if (Mt && (o === "id" || o === "name")) {
                fe(t, e);
                n = Ot + n;
              }
              if (Q && typeof j === "object" && typeof j.getAttributeType === "function") {
                if (h);
                else {
                  switch (j.getAttributeType(f, o)) {
                    case "TrustedHTML": {
                      n = Q.createHTML(n);
                      break;
                    }
                    case "TrustedScriptURL": {
                      n = Q.createScriptURL(n);
                      break;
                    }
                  }
                }
              }
              try {
                if (h) {
                  e.setAttributeNS(h, t, n);
                } else {
                  e.setAttribute(t, n);
                }
                u(r.removed);
              } catch (c) {}
            }
            ye("afterSanitizeAttributes", e, null);
          };
          const ke = function t(e) {
            let r;
            const i = pe(e);
            ye("beforeSanitizeShadowDOM", e, null);
            while ((r = i.nextNode())) {
              ye("uponSanitizeShadowNode", r, null);
              if (Ce(r)) {
                continue;
              }
              if (r.content instanceof a) {
                t(r.content);
              }
              xe(r);
            }
            ye("afterSanitizeShadowDOM", e, null);
          };
          r.sanitize = function (t) {
            let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            let n;
            let o;
            let s;
            let l;
            Vt = !t;
            if (Vt) {
              t = "\x3c!--\x3e";
            }
            if (typeof t !== "string" && !me(t)) {
              if (typeof t.toString === "function") {
                t = t.toString();
                if (typeof t !== "string") {
                  throw v("dirty is not a string, aborting");
                }
              } else {
                throw v("toString is not a function");
              }
            }
            if (!r.isSupported) {
              return t;
            }
            if (!Bt) {
              ne(e);
            }
            r.removed = [];
            if (typeof t === "string") {
              qt = false;
            }
            if (qt) {
              if (t.nodeName) {
                const e = te(t.nodeName);
                if (!pt[e] || bt[e]) {
                  throw v("root node is forbidden and cannot be sanitized in-place");
                }
              }
            } else if (t instanceof c) {
              n = de("\x3c!----\x3e");
              o = n.ownerDocument.importNode(t, true);
              if (o.nodeType === 1 && o.nodeName === "BODY") {
                n = o;
              } else if (o.nodeName === "HTML") {
                n = o;
              } else {
                n.appendChild(o);
              }
            } else {
              if (!At && !wt && !St && t.indexOf("<") === -1) {
                return Q && Zt ? Q.createHTML(t) : t;
              }
              n = de(t);
              if (!n) {
                return At ? null : Zt ? J : "";
              }
            }
            if (n && Ft) {
              ue(n.firstChild);
            }
            const h = pe(qt ? t : n);
            while ((s = h.nextNode())) {
              if (Ce(s)) {
                continue;
              }
              if (s.content instanceof a) {
                ke(s.content);
              }
              xe(s);
            }
            if (qt) {
              return t;
            }
            if (At) {
              if (Lt) {
                l = rt.call(n.ownerDocument);
                while (n.firstChild) {
                  l.appendChild(n.firstChild);
                }
              } else {
                l = n;
              }
              if (mt.shadowroot || mt.shadowrootmode) {
                l = nt.call(i, l, true);
              }
              return l;
            }
            let u = St ? n.outerHTML : n.innerHTML;
            if (
              St &&
              pt["!doctype"] &&
              n.ownerDocument &&
              n.ownerDocument.doctype &&
              n.ownerDocument.doctype.name &&
              b(H, n.ownerDocument.doctype.name)
            ) {
              u = "<!DOCTYPE " + n.ownerDocument.doctype.name + ">\n" + u;
            }
            if (wt) {
              u = m(u, st, " ");
              u = m(u, at, " ");
              u = m(u, lt, " ");
            }
            return Q && Zt ? Q.createHTML(u) : u;
          };
          r.setConfig = function (t) {
            ne(t);
            Bt = true;
          };
          r.clearConfig = function () {
            ee = null;
            Bt = false;
          };
          r.isValidAttribute = function (t, e, r) {
            if (!ee) {
              ne({});
            }
            const i = te(t);
            const n = te(e);
            return be(i, n, r);
          };
          r.addHook = function (t, e) {
            if (typeof e !== "function") {
              return;
            }
            ot[t] = ot[t] || [];
            f(ot[t], e);
          };
          r.removeHook = function (t) {
            if (ot[t]) {
              return u(ot[t]);
            }
          };
          r.removeHooks = function (t) {
            if (ot[t]) {
              ot[t] = [];
            }
          };
          r.removeAllHooks = function () {
            ot = {};
          };
          return r;
        }
        var X = G();
        return X;
      });
    },
    65061: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => h });
      var i = r(52048);
      var n = r(54422);
      class o {
        constructor() {
          this.type = n.w.ALL;
        }
        get() {
          return this.type;
        }
        set(t) {
          if (this.type && this.type !== t) throw new Error("Cannot change both RGB and HSL channels at the same time");
          this.type = t;
        }
        reset() {
          this.type = n.w.ALL;
        }
        is(t) {
          return this.type === t;
        }
      }
      const s = o;
      class a {
        constructor(t, e) {
          this.color = e;
          this.changed = false;
          this.data = t;
          this.type = new s();
        }
        set(t, e) {
          this.color = e;
          this.changed = false;
          this.data = t;
          this.type.type = n.w.ALL;
          return this;
        }
        _ensureHSL() {
          const t = this.data;
          const { h: e, s: r, l: n } = t;
          if (e === undefined) t.h = i.Z.channel.rgb2hsl(t, "h");
          if (r === undefined) t.s = i.Z.channel.rgb2hsl(t, "s");
          if (n === undefined) t.l = i.Z.channel.rgb2hsl(t, "l");
        }
        _ensureRGB() {
          const t = this.data;
          const { r: e, g: r, b: n } = t;
          if (e === undefined) t.r = i.Z.channel.hsl2rgb(t, "r");
          if (r === undefined) t.g = i.Z.channel.hsl2rgb(t, "g");
          if (n === undefined) t.b = i.Z.channel.hsl2rgb(t, "b");
        }
        get r() {
          const t = this.data;
          const e = t.r;
          if (!this.type.is(n.w.HSL) && e !== undefined) return e;
          this._ensureHSL();
          return i.Z.channel.hsl2rgb(t, "r");
        }
        get g() {
          const t = this.data;
          const e = t.g;
          if (!this.type.is(n.w.HSL) && e !== undefined) return e;
          this._ensureHSL();
          return i.Z.channel.hsl2rgb(t, "g");
        }
        get b() {
          const t = this.data;
          const e = t.b;
          if (!this.type.is(n.w.HSL) && e !== undefined) return e;
          this._ensureHSL();
          return i.Z.channel.hsl2rgb(t, "b");
        }
        get h() {
          const t = this.data;
          const e = t.h;
          if (!this.type.is(n.w.RGB) && e !== undefined) return e;
          this._ensureRGB();
          return i.Z.channel.rgb2hsl(t, "h");
        }
        get s() {
          const t = this.data;
          const e = t.s;
          if (!this.type.is(n.w.RGB) && e !== undefined) return e;
          this._ensureRGB();
          return i.Z.channel.rgb2hsl(t, "s");
        }
        get l() {
          const t = this.data;
          const e = t.l;
          if (!this.type.is(n.w.RGB) && e !== undefined) return e;
          this._ensureRGB();
          return i.Z.channel.rgb2hsl(t, "l");
        }
        get a() {
          return this.data.a;
        }
        set r(t) {
          this.type.set(n.w.RGB);
          this.changed = true;
          this.data.r = t;
        }
        set g(t) {
          this.type.set(n.w.RGB);
          this.changed = true;
          this.data.g = t;
        }
        set b(t) {
          this.type.set(n.w.RGB);
          this.changed = true;
          this.data.b = t;
        }
        set h(t) {
          this.type.set(n.w.HSL);
          this.changed = true;
          this.data.h = t;
        }
        set s(t) {
          this.type.set(n.w.HSL);
          this.changed = true;
          this.data.s = t;
        }
        set l(t) {
          this.type.set(n.w.HSL);
          this.changed = true;
          this.data.l = t;
        }
        set a(t) {
          this.changed = true;
          this.data.a = t;
        }
      }
      const l = a;
      const c = new l({ r: 0, g: 0, b: 0, a: 0 }, "transparent");
      const h = c;
    },
    37758: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => g });
      var i = r(65061);
      var n = r(54422);
      const o = {
        re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
        parse: (t) => {
          if (t.charCodeAt(0) !== 35) return;
          const e = t.match(o.re);
          if (!e) return;
          const r = e[1];
          const n = parseInt(r, 16);
          const s = r.length;
          const a = s % 4 === 0;
          const l = s > 4;
          const c = l ? 1 : 17;
          const h = l ? 8 : 4;
          const u = a ? 0 : -1;
          const f = l ? 255 : 15;
          return i.Z.set(
            {
              r: ((n >> (h * (u + 3))) & f) * c,
              g: ((n >> (h * (u + 2))) & f) * c,
              b: ((n >> (h * (u + 1))) & f) * c,
              a: a ? ((n & f) * c) / 255 : 1,
            },
            t
          );
        },
        stringify: (t) => {
          const { r: e, g: r, b: i, a: o } = t;
          if (o < 1) {
            return `#${n.Q[Math.round(e)]}${n.Q[Math.round(r)]}${n.Q[Math.round(i)]}${n.Q[Math.round(o * 255)]}`;
          } else {
            return `#${n.Q[Math.round(e)]}${n.Q[Math.round(r)]}${n.Q[Math.round(i)]}`;
          }
        },
      };
      const s = o;
      var a = r(52048);
      const l = {
        re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
        hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
        _hue2deg: (t) => {
          const e = t.match(l.hueRe);
          if (e) {
            const [, t, r] = e;
            switch (r) {
              case "grad":
                return a.Z.channel.clamp.h(parseFloat(t) * 0.9);
              case "rad":
                return a.Z.channel.clamp.h((parseFloat(t) * 180) / Math.PI);
              case "turn":
                return a.Z.channel.clamp.h(parseFloat(t) * 360);
            }
          }
          return a.Z.channel.clamp.h(parseFloat(t));
        },
        parse: (t) => {
          const e = t.charCodeAt(0);
          if (e !== 104 && e !== 72) return;
          const r = t.match(l.re);
          if (!r) return;
          const [, n, o, s, c, h] = r;
          return i.Z.set(
            {
              h: l._hue2deg(n),
              s: a.Z.channel.clamp.s(parseFloat(o)),
              l: a.Z.channel.clamp.l(parseFloat(s)),
              a: c ? a.Z.channel.clamp.a(h ? parseFloat(c) / 100 : parseFloat(c)) : 1,
            },
            t
          );
        },
        stringify: (t) => {
          const { h: e, s: r, l: i, a: n } = t;
          if (n < 1) {
            return `hsla(${a.Z.lang.round(e)}, ${a.Z.lang.round(r)}%, ${a.Z.lang.round(i)}%, ${n})`;
          } else {
            return `hsl(${a.Z.lang.round(e)}, ${a.Z.lang.round(r)}%, ${a.Z.lang.round(i)}%)`;
          }
        },
      };
      const c = l;
      const h = {
        colors: {
          aliceblue: "#f0f8ff",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          aquamarine: "#7fffd4",
          azure: "#f0ffff",
          beige: "#f5f5dc",
          bisque: "#ffe4c4",
          black: "#000000",
          blanchedalmond: "#ffebcd",
          blue: "#0000ff",
          blueviolet: "#8a2be2",
          brown: "#a52a2a",
          burlywood: "#deb887",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          cornflowerblue: "#6495ed",
          cornsilk: "#fff8dc",
          crimson: "#dc143c",
          cyanaqua: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkgray: "#a9a9a9",
          darkgreen: "#006400",
          darkgrey: "#a9a9a9",
          darkkhaki: "#bdb76b",
          darkmagenta: "#8b008b",
          darkolivegreen: "#556b2f",
          darkorange: "#ff8c00",
          darkorchid: "#9932cc",
          darkred: "#8b0000",
          darksalmon: "#e9967a",
          darkseagreen: "#8fbc8f",
          darkslateblue: "#483d8b",
          darkslategray: "#2f4f4f",
          darkslategrey: "#2f4f4f",
          darkturquoise: "#00ced1",
          darkviolet: "#9400d3",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1e90ff",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          forestgreen: "#228b22",
          fuchsia: "#ff00ff",
          gainsboro: "#dcdcdc",
          ghostwhite: "#f8f8ff",
          gold: "#ffd700",
          goldenrod: "#daa520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#adff2f",
          grey: "#808080",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          indianred: "#cd5c5c",
          indigo: "#4b0082",
          ivory: "#fffff0",
          khaki: "#f0e68c",
          lavender: "#e6e6fa",
          lavenderblush: "#fff0f5",
          lawngreen: "#7cfc00",
          lemonchiffon: "#fffacd",
          lightblue: "#add8e6",
          lightcoral: "#f08080",
          lightcyan: "#e0ffff",
          lightgoldenrodyellow: "#fafad2",
          lightgray: "#d3d3d3",
          lightgreen: "#90ee90",
          lightgrey: "#d3d3d3",
          lightpink: "#ffb6c1",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          lightskyblue: "#87cefa",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#b0c4de",
          lightyellow: "#ffffe0",
          lime: "#00ff00",
          limegreen: "#32cd32",
          linen: "#faf0e6",
          magenta: "#ff00ff",
          maroon: "#800000",
          mediumaquamarine: "#66cdaa",
          mediumblue: "#0000cd",
          mediumorchid: "#ba55d3",
          mediumpurple: "#9370db",
          mediumseagreen: "#3cb371",
          mediumslateblue: "#7b68ee",
          mediumspringgreen: "#00fa9a",
          mediumturquoise: "#48d1cc",
          mediumvioletred: "#c71585",
          midnightblue: "#191970",
          mintcream: "#f5fffa",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          navajowhite: "#ffdead",
          navy: "#000080",
          oldlace: "#fdf5e6",
          olive: "#808000",
          olivedrab: "#6b8e23",
          orange: "#ffa500",
          orangered: "#ff4500",
          orchid: "#da70d6",
          palegoldenrod: "#eee8aa",
          palegreen: "#98fb98",
          paleturquoise: "#afeeee",
          palevioletred: "#db7093",
          papayawhip: "#ffefd5",
          peachpuff: "#ffdab9",
          peru: "#cd853f",
          pink: "#ffc0cb",
          plum: "#dda0dd",
          powderblue: "#b0e0e6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#ff0000",
          rosybrown: "#bc8f8f",
          royalblue: "#4169e1",
          saddlebrown: "#8b4513",
          salmon: "#fa8072",
          sandybrown: "#f4a460",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          sienna: "#a0522d",
          silver: "#c0c0c0",
          skyblue: "#87ceeb",
          slateblue: "#6a5acd",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#fffafa",
          springgreen: "#00ff7f",
          tan: "#d2b48c",
          teal: "#008080",
          thistle: "#d8bfd8",
          transparent: "#00000000",
          turquoise: "#40e0d0",
          violet: "#ee82ee",
          wheat: "#f5deb3",
          white: "#ffffff",
          whitesmoke: "#f5f5f5",
          yellow: "#ffff00",
          yellowgreen: "#9acd32",
        },
        parse: (t) => {
          t = t.toLowerCase();
          const e = h.colors[t];
          if (!e) return;
          return s.parse(e);
        },
        stringify: (t) => {
          const e = s.stringify(t);
          for (const r in h.colors) {
            if (h.colors[r] === e) return r;
          }
          return;
        },
      };
      const u = h;
      const f = {
        re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
        parse: (t) => {
          const e = t.charCodeAt(0);
          if (e !== 114 && e !== 82) return;
          const r = t.match(f.re);
          if (!r) return;
          const [, n, o, s, l, c, h, u, d] = r;
          return i.Z.set(
            {
              r: a.Z.channel.clamp.r(o ? parseFloat(n) * 2.55 : parseFloat(n)),
              g: a.Z.channel.clamp.g(l ? parseFloat(s) * 2.55 : parseFloat(s)),
              b: a.Z.channel.clamp.b(h ? parseFloat(c) * 2.55 : parseFloat(c)),
              a: u ? a.Z.channel.clamp.a(d ? parseFloat(u) / 100 : parseFloat(u)) : 1,
            },
            t
          );
        },
        stringify: (t) => {
          const { r: e, g: r, b: i, a: n } = t;
          if (n < 1) {
            return `rgba(${a.Z.lang.round(e)}, ${a.Z.lang.round(r)}, ${a.Z.lang.round(i)}, ${a.Z.lang.round(n)})`;
          } else {
            return `rgb(${a.Z.lang.round(e)}, ${a.Z.lang.round(r)}, ${a.Z.lang.round(i)})`;
          }
        },
      };
      const d = f;
      const p = {
        format: { keyword: u, hex: s, rgb: d, rgba: d, hsl: c, hsla: c },
        parse: (t) => {
          if (typeof t !== "string") return t;
          const e = s.parse(t) || d.parse(t) || c.parse(t) || u.parse(t);
          if (e) return e;
          throw new Error(`Unsupported color format: "${t}"`);
        },
        stringify: (t) => {
          if (!t.changed && t.color) return t.color;
          if (t.type.is(n.w.HSL) || t.data.r === undefined) {
            return c.stringify(t);
          } else if (t.a < 1 || !Number.isInteger(t.r) || !Number.isInteger(t.g) || !Number.isInteger(t.b)) {
            return d.stringify(t);
          } else {
            return s.stringify(t);
          }
        },
      };
      const g = p;
    },
    54422: (t, e, r) => {
      "use strict";
      r.d(e, { Q: () => n, w: () => o });
      var i = r(52048);
      const n = {};
      for (let s = 0; s <= 255; s++) n[s] = i.Z.unit.dec2hex(s);
      const o = { ALL: 0, RGB: 1, HSL: 2 };
    },
    11416: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => s });
      var i = r(52048);
      var n = r(37758);
      const o = (t, e, r) => {
        const o = n.Z.parse(t);
        const s = o[e];
        const a = i.Z.channel.clamp[e](s + r);
        if (s !== a) o[e] = a;
        return n.Z.stringify(o);
      };
      const s = o;
    },
    50418: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => s });
      var i = r(52048);
      var n = r(37758);
      const o = (t, e) => {
        const r = n.Z.parse(t);
        for (const n in e) {
          r[n] = i.Z.channel.clamp[n](e[n]);
        }
        return n.Z.stringify(r);
      };
      const s = o;
    },
    61364: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => o });
      var i = r(11416);
      const n = (t, e) => (0, i.Z)(t, "l", -e);
      const o = n;
    },
    80561: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => h });
      var i = r(52048);
      var n = r(37758);
      const o = (t) => {
        const { r: e, g: r, b: o } = n.Z.parse(t);
        const s = 0.2126 * i.Z.channel.toLinear(e) + 0.7152 * i.Z.channel.toLinear(r) + 0.0722 * i.Z.channel.toLinear(o);
        return i.Z.lang.round(s);
      };
      const s = o;
      const a = (t) => s(t) >= 0.5;
      const l = a;
      const c = (t) => !l(t);
      const h = c;
    },
    23235: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => o });
      var i = r(11416);
      const n = (t, e) => (0, i.Z)(t, "l", e);
      const o = n;
    },
    76538: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => l });
      var i = r(52048);
      var n = r(65061);
      var o = r(37758);
      var s = r(50418);
      const a = (t, e, r = 0, a = 1) => {
        if (typeof t !== "number") return (0, s.Z)(t, { a: e });
        const l = n.Z.set({ r: i.Z.channel.clamp.r(t), g: i.Z.channel.clamp.g(e), b: i.Z.channel.clamp.b(r), a: i.Z.channel.clamp.a(a) });
        return o.Z.stringify(l);
      };
      const l = a;
    },
    52048: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => h });
      const i = {
        min: { r: 0, g: 0, b: 0, s: 0, l: 0, a: 0 },
        max: { r: 255, g: 255, b: 255, h: 360, s: 100, l: 100, a: 1 },
        clamp: {
          r: (t) => (t >= 255 ? 255 : t < 0 ? 0 : t),
          g: (t) => (t >= 255 ? 255 : t < 0 ? 0 : t),
          b: (t) => (t >= 255 ? 255 : t < 0 ? 0 : t),
          h: (t) => t % 360,
          s: (t) => (t >= 100 ? 100 : t < 0 ? 0 : t),
          l: (t) => (t >= 100 ? 100 : t < 0 ? 0 : t),
          a: (t) => (t >= 1 ? 1 : t < 0 ? 0 : t),
        },
        toLinear: (t) => {
          const e = t / 255;
          return t > 0.03928 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
        },
        hue2rgb: (t, e, r) => {
          if (r < 0) r += 1;
          if (r > 1) r -= 1;
          if (r < 1 / 6) return t + (e - t) * 6 * r;
          if (r < 1 / 2) return e;
          if (r < 2 / 3) return t + (e - t) * (2 / 3 - r) * 6;
          return t;
        },
        hsl2rgb: ({ h: t, s: e, l: r }, n) => {
          if (!e) return r * 2.55;
          t /= 360;
          e /= 100;
          r /= 100;
          const o = r < 0.5 ? r * (1 + e) : r + e - r * e;
          const s = 2 * r - o;
          switch (n) {
            case "r":
              return i.hue2rgb(s, o, t + 1 / 3) * 255;
            case "g":
              return i.hue2rgb(s, o, t) * 255;
            case "b":
              return i.hue2rgb(s, o, t - 1 / 3) * 255;
          }
        },
        rgb2hsl: ({ r: t, g: e, b: r }, i) => {
          t /= 255;
          e /= 255;
          r /= 255;
          const n = Math.max(t, e, r);
          const o = Math.min(t, e, r);
          const s = (n + o) / 2;
          if (i === "l") return s * 100;
          if (n === o) return 0;
          const a = n - o;
          const l = s > 0.5 ? a / (2 - n - o) : a / (n + o);
          if (i === "s") return l * 100;
          switch (n) {
            case t:
              return ((e - r) / a + (e < r ? 6 : 0)) * 60;
            case e:
              return ((r - t) / a + 2) * 60;
            case r:
              return ((t - e) / a + 4) * 60;
            default:
              return -1;
          }
        },
      };
      const n = i;
      const o = {
        clamp: (t, e, r) => {
          if (e > r) return Math.min(e, Math.max(r, t));
          return Math.min(r, Math.max(e, t));
        },
        round: (t) => Math.round(t * 1e10) / 1e10,
      };
      const s = o;
      const a = {
        dec2hex: (t) => {
          const e = Math.round(t).toString(16);
          return e.length > 1 ? e : `0${e}`;
        },
      };
      const l = a;
      const c = { channel: n, lang: s, unit: l };
      const h = c;
    },
    76632: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => b });
      function i() {
        this.__data__ = [];
        this.size = 0;
      }
      const n = i;
      var o = r(52373);
      function s(t, e) {
        var r = t.length;
        while (r--) {
          if ((0, o.Z)(t[r][0], e)) {
            return r;
          }
        }
        return -1;
      }
      const a = s;
      var l = Array.prototype;
      var c = l.splice;
      function h(t) {
        var e = this.__data__,
          r = a(e, t);
        if (r < 0) {
          return false;
        }
        var i = e.length - 1;
        if (r == i) {
          e.pop();
        } else {
          c.call(e, r, 1);
        }
        --this.size;
        return true;
      }
      const u = h;
      function f(t) {
        var e = this.__data__,
          r = a(e, t);
        return r < 0 ? undefined : e[r][1];
      }
      const d = f;
      function p(t) {
        return a(this.__data__, t) > -1;
      }
      const g = p;
      function m(t, e) {
        var r = this.__data__,
          i = a(r, t);
        if (i < 0) {
          ++this.size;
          r.push([t, e]);
        } else {
          r[i][1] = e;
        }
        return this;
      }
      const y = m;
      function C(t) {
        var e = -1,
          r = t == null ? 0 : t.length;
        this.clear();
        while (++e < r) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }
      C.prototype.clear = n;
      C.prototype["delete"] = u;
      C.prototype.get = d;
      C.prototype.has = g;
      C.prototype.set = y;
      const b = C;
    },
    96686: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => s });
      var i = r(48679);
      var n = r(56169);
      var o = (0, i.Z)(n.Z, "Map");
      const s = o;
    },
    11412: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => $ });
      var i = r(48679);
      var n = (0, i.Z)(Object, "create");
      const o = n;
      function s() {
        this.__data__ = o ? o(null) : {};
        this.size = 0;
      }
      const a = s;
      function l(t) {
        var e = this.has(t) && delete this.__data__[t];
        this.size -= e ? 1 : 0;
        return e;
      }
      const c = l;
      var h = "__lodash_hash_undefined__";
      var u = Object.prototype;
      var f = u.hasOwnProperty;
      function d(t) {
        var e = this.__data__;
        if (o) {
          var r = e[t];
          return r === h ? undefined : r;
        }
        return f.call(e, t) ? e[t] : undefined;
      }
      const p = d;
      var g = Object.prototype;
      var m = g.hasOwnProperty;
      function y(t) {
        var e = this.__data__;
        return o ? e[t] !== undefined : m.call(e, t);
      }
      const C = y;
      var b = "__lodash_hash_undefined__";
      function v(t, e) {
        var r = this.__data__;
        this.size += this.has(t) ? 0 : 1;
        r[t] = o && e === undefined ? b : e;
        return this;
      }
      const x = v;
      function k(t) {
        var e = -1,
          r = t == null ? 0 : t.length;
        this.clear();
        while (++e < r) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }
      k.prototype.clear = a;
      k.prototype["delete"] = c;
      k.prototype.get = p;
      k.prototype.has = C;
      k.prototype.set = x;
      const T = k;
      var _ = r(76632);
      var w = r(96686);
      function S() {
        this.size = 0;
        this.__data__ = { hash: new T(), map: new (w.Z || _.Z)(), string: new T() };
      }
      const B = S;
      function F(t) {
        var e = typeof t;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
      }
      const A = F;
      function L(t, e) {
        var r = t.__data__;
        return A(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
      }
      const Z = L;
      function E(t) {
        var e = Z(this, t)["delete"](t);
        this.size -= e ? 1 : 0;
        return e;
      }
      const M = E;
      function O(t) {
        return Z(this, t).get(t);
      }
      const I = O;
      function q(t) {
        return Z(this, t).has(t);
      }
      const z = q;
      function D(t, e) {
        var r = Z(this, t),
          i = r.size;
        r.set(t, e);
        this.size += r.size == i ? 0 : 1;
        return this;
      }
      const N = D;
      function j(t) {
        var e = -1,
          r = t == null ? 0 : t.length;
        this.clear();
        while (++e < r) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }
      j.prototype.clear = B;
      j.prototype["delete"] = M;
      j.prototype.get = I;
      j.prototype.has = z;
      j.prototype.set = N;
      const $ = j;
    },
    81962: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => s });
      var i = r(48679);
      var n = r(56169);
      var o = (0, i.Z)(n.Z, "Set");
      const s = o;
    },
    86717: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => C });
      var i = r(76632);
      function n() {
        this.__data__ = new i.Z();
        this.size = 0;
      }
      const o = n;
      function s(t) {
        var e = this.__data__,
          r = e["delete"](t);
        this.size = e.size;
        return r;
      }
      const a = s;
      function l(t) {
        return this.__data__.get(t);
      }
      const c = l;
      function h(t) {
        return this.__data__.has(t);
      }
      const u = h;
      var f = r(96686);
      var d = r(11412);
      var p = 200;
      function g(t, e) {
        var r = this.__data__;
        if (r instanceof i.Z) {
          var n = r.__data__;
          if (!f.Z || n.length < p - 1) {
            n.push([t, e]);
            this.size = ++r.size;
            return this;
          }
          r = this.__data__ = new d.Z(n);
        }
        r.set(t, e);
        this.size = r.size;
        return this;
      }
      const m = g;
      function y(t) {
        var e = (this.__data__ = new i.Z(t));
        this.size = e.size;
      }
      y.prototype.clear = o;
      y.prototype["delete"] = a;
      y.prototype.get = c;
      y.prototype.has = u;
      y.prototype.set = m;
      const C = y;
    },
    5876: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => o });
      var i = r(56169);
      var n = i.Z.Symbol;
      const o = n;
    },
    51456: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => o });
      var i = r(56169);
      var n = i.Z.Uint8Array;
      const o = n;
    },
    49651: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => d });
      function i(t, e) {
        var r = -1,
          i = Array(t);
        while (++r < t) {
          i[r] = e(r);
        }
        return i;
      }
      const n = i;
      var o = r(11963);
      var s = r(39350);
      var a = r(74002);
      var l = r(9638);
      var c = r(50226);
      var h = Object.prototype;
      var u = h.hasOwnProperty;
      function f(t, e) {
        var r = (0, s.Z)(t),
          i = !r && (0, o.Z)(t),
          h = !r && !i && (0, a.Z)(t),
          f = !r && !i && !h && (0, c.Z)(t),
          d = r || i || h || f,
          p = d ? n(t.length, String) : [],
          g = p.length;
        for (var m in t) {
          if (
            (e || u.call(t, m)) &&
            !(
              d &&
              (m == "length" ||
                (h && (m == "offset" || m == "parent")) ||
                (f && (m == "buffer" || m == "byteLength" || m == "byteOffset")) ||
                (0, l.Z)(m, g))
            )
          ) {
            p.push(m);
          }
        }
        return p;
      }
      const d = f;
    },
    47701: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => l });
      var i = r(20192);
      var n = r(52373);
      var o = Object.prototype;
      var s = o.hasOwnProperty;
      function a(t, e, r) {
        var o = t[e];
        if (!(s.call(t, e) && (0, n.Z)(o, r)) || (r === undefined && !(e in t))) {
          (0, i.Z)(t, e, r);
        }
      }
      const l = a;
    },
    20192: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => o });
      var i = r(14608);
      function n(t, e, r) {
        if (e == "__proto__" && i.Z) {
          (0, i.Z)(t, e, { configurable: true, enumerable: true, value: r, writable: true });
        } else {
          t[e] = r;
        }
      }
      const o = n;
    },
    22362: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => s });
      function i(t) {
        return function (e, r, i) {
          var n = -1,
            o = Object(e),
            s = i(e),
            a = s.length;
          while (a--) {
            var l = s[t ? a : ++n];
            if (r(o[l], l, o) === false) {
              break;
            }
          }
          return e;
        };
      }
      const n = i;
      var o = n();
      const s = o;
    },
    73832: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => C });
      var i = r(5876);
      var n = Object.prototype;
      var o = n.hasOwnProperty;
      var s = n.toString;
      var a = i.Z ? i.Z.toStringTag : undefined;
      function l(t) {
        var e = o.call(t, a),
          r = t[a];
        try {
          t[a] = undefined;
          var i = true;
        } catch (l) {}
        var n = s.call(t);
        if (i) {
          if (e) {
            t[a] = r;
          } else {
            delete t[a];
          }
        }
        return n;
      }
      const c = l;
      var h = Object.prototype;
      var u = h.toString;
      function f(t) {
        return u.call(t);
      }
      const d = f;
      var p = "[object Null]",
        g = "[object Undefined]";
      var m = i.Z ? i.Z.toStringTag : undefined;
      function y(t) {
        if (t == null) {
          return t === undefined ? g : p;
        }
        return m && m in Object(t) ? c(t) : d(t);
      }
      const C = y;
    },
    14926: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => h });
      var i = r(9794);
      var n = r(4012);
      var o = (0, n.Z)(Object.keys, Object);
      const s = o;
      var a = Object.prototype;
      var l = a.hasOwnProperty;
      function c(t) {
        if (!(0, i.Z)(t)) {
          return s(t);
        }
        var e = [];
        for (var r in Object(t)) {
          if (l.call(t, r) && r != "constructor") {
            e.push(r);
          }
        }
        return e;
      }
      const h = c;
    },
    8901: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => a });
      var i = r(63305);
      var n = r(31356);
      var o = r(24205);
      function s(t, e) {
        return (0, o.Z)((0, n.Z)(t, e, i.Z), t + "");
      }
      const a = s;
    },
    4827: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => n });
      function i(t) {
        return function (e) {
          return t(e);
        };
      }
      const n = i;
    },
    87901: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => o });
      var i = r(51456);
      function n(t) {
        var e = new t.constructor(t.byteLength);
        new i.Z(e).set(new i.Z(t));
        return e;
      }
      const o = n;
    },
    42896: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => h });
      var i = r(56169);
      t = r.hmd(t);
      var n = typeof exports == "object" && exports && !exports.nodeType && exports;
      var o = n && "object" == "object" && t && !t.nodeType && t;
      var s = o && o.exports === n;
      var a = s ? i.Z.Buffer : undefined,
        l = a ? a.allocUnsafe : undefined;
      function c(t, e) {
        if (e) {
          return t.slice();
        }
        var r = t.length,
          i = l ? l(r) : new t.constructor(r);
        t.copy(i);
        return i;
      }
      const h = c;
    },
    32404: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => o });
      var i = r(87901);
      function n(t, e) {
        var r = e ? (0, i.Z)(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length);
      }
      const o = n;
    },
    65935: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => n });
      function i(t, e) {
        var r = -1,
          i = t.length;
        e || (e = Array(i));
        while (++r < i) {
          e[r] = t[r];
        }
        return e;
      }
      const n = i;
    },
    52457: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => s });
      var i = r(47701);
      var n = r(20192);
      function o(t, e, r, o) {
        var s = !r;
        r || (r = {});
        var a = -1,
          l = e.length;
        while (++a < l) {
          var c = e[a];
          var h = o ? o(r[c], t[c], c, r, t) : undefined;
          if (h === undefined) {
            h = t[c];
          }
          if (s) {
            (0, n.Z)(r, c, h);
          } else {
            (0, i.Z)(r, c, h);
          }
        }
        return r;
      }
      const s = o;
    },
    14608: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => o });
      var i = r(48679);
      var n = (function () {
        try {
          var t = (0, i.Z)(Object, "defineProperty");
          t({}, "", {});
          return t;
        } catch (e) {}
      })();
      const o = n;
    },
    48277: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => n });
      var i = typeof r.g == "object" && r.g && r.g.Object === Object && r.g;
      const n = i;
    },
    48679: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => _ });
      var i = r(25069);
      var n = r(56169);
      var o = n.Z["__core-js_shared__"];
      const s = o;
      var a = (function () {
        var t = /[^.]+$/.exec((s && s.keys && s.keys.IE_PROTO) || "");
        return t ? "Symbol(src)_1." + t : "";
      })();
      function l(t) {
        return !!a && a in t;
      }
      const c = l;
      var h = r(89122);
      var u = r(48723);
      var f = /[\\^$.*+?()[\]{}|]/g;
      var d = /^\[object .+?Constructor\]$/;
      var p = Function.prototype,
        g = Object.prototype;
      var m = p.toString;
      var y = g.hasOwnProperty;
      var C = RegExp(
        "^" +
          m
            .call(y)
            .replace(f, "\\$&")
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
          "$"
      );
      function b(t) {
        if (!(0, h.Z)(t) || c(t)) {
          return false;
        }
        var e = (0, i.Z)(t) ? C : d;
        return e.test((0, u.Z)(t));
      }
      const v = b;
      function x(t, e) {
        return t == null ? undefined : t[e];
      }
      const k = x;
      function T(t, e) {
        var r = k(t, e);
        return v(r) ? r : undefined;
      }
      const _ = T;
    },
    67290: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => o });
      var i = r(4012);
      var n = (0, i.Z)(Object.getPrototypeOf, Object);
      const o = n;
    },
    34010: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => B });
      var i = r(48679);
      var n = r(56169);
      var o = (0, i.Z)(n.Z, "DataView");
      const s = o;
      var a = r(96686);
      var l = (0, i.Z)(n.Z, "Promise");
      const c = l;
      var h = r(81962);
      var u = (0, i.Z)(n.Z, "WeakMap");
      const f = u;
      var d = r(73832);
      var p = r(48723);
      var g = "[object Map]",
        m = "[object Object]",
        y = "[object Promise]",
        C = "[object Set]",
        b = "[object WeakMap]";
      var v = "[object DataView]";
      var x = (0, p.Z)(s),
        k = (0, p.Z)(a.Z),
        T = (0, p.Z)(c),
        _ = (0, p.Z)(h.Z),
        w = (0, p.Z)(f);
      var S = d.Z;
      if (
        (s && S(new s(new ArrayBuffer(1))) != v) ||
        (a.Z && S(new a.Z()) != g) ||
        (c && S(c.resolve()) != y) ||
        (h.Z && S(new h.Z()) != C) ||
        (f && S(new f()) != b)
      ) {
        S = function (t) {
          var e = (0, d.Z)(t),
            r = e == m ? t.constructor : undefined,
            i = r ? (0, p.Z)(r) : "";
          if (i) {
            switch (i) {
              case x:
                return v;
              case k:
                return g;
              case T:
                return y;
              case _:
                return C;
              case w:
                return b;
            }
          }
          return e;
        };
      }
      const B = S;
    },
    9439: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => h });
      var i = r(89122);
      var n = Object.create;
      var o = (function () {
        function t() {}
        return function (e) {
          if (!(0, i.Z)(e)) {
            return {};
          }
          if (n) {
            return n(e);
          }
          t.prototype = e;
          var r = new t();
          t.prototype = undefined;
          return r;
        };
      })();
      const s = o;
      var a = r(67290);
      var l = r(9794);
      function c(t) {
        return typeof t.constructor == "function" && !(0, l.Z)(t) ? s((0, a.Z)(t)) : {};
      }
      const h = c;
    },
    9638: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => s });
      var i = 9007199254740991;
      var n = /^(?:0|[1-9]\d*)$/;
      function o(t, e) {
        var r = typeof t;
        e = e == null ? i : e;
        return !!e && (r == "number" || (r != "symbol" && n.test(t))) && t > -1 && t % 1 == 0 && t < e;
      }
      const s = o;
    },
    40185: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => l });
      var i = r(52373);
      var n = r(5710);
      var o = r(9638);
      var s = r(89122);
      function a(t, e, r) {
        if (!(0, s.Z)(r)) {
          return false;
        }
        var a = typeof e;
        if (a == "number" ? (0, n.Z)(r) && (0, o.Z)(e, r.length) : a == "string" && e in r) {
          return (0, i.Z)(r[e], t);
        }
        return false;
      }
      const l = a;
    },
    9794: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => o });
      var i = Object.prototype;
      function n(t) {
        var e = t && t.constructor,
          r = (typeof e == "function" && e.prototype) || i;
        return t === r;
      }
      const o = n;
    },
    79730: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => c });
      var i = r(48277);
      t = r.hmd(t);
      var n = typeof exports == "object" && exports && !exports.nodeType && exports;
      var o = n && "object" == "object" && t && !t.nodeType && t;
      var s = o && o.exports === n;
      var a = s && i.Z.process;
      var l = (function () {
        try {
          var t = o && o.require && o.require("util").types;
          if (t) {
            return t;
          }
          return a && a.binding && a.binding("util");
        } catch (e) {}
      })();
      const c = l;
    },
    4012: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => n });
      function i(t, e) {
        return function (r) {
          return t(e(r));
        };
      }
      const n = i;
    },
    31356: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => a });
      function i(t, e, r) {
        switch (r.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, r[0]);
          case 2:
            return t.call(e, r[0], r[1]);
          case 3:
            return t.call(e, r[0], r[1], r[2]);
        }
        return t.apply(e, r);
      }
      const n = i;
      var o = Math.max;
      function s(t, e, r) {
        e = o(e === undefined ? t.length - 1 : e, 0);
        return function () {
          var i = arguments,
            s = -1,
            a = o(i.length - e, 0),
            l = Array(a);
          while (++s < a) {
            l[s] = i[e + s];
          }
          s = -1;
          var c = Array(e + 1);
          while (++s < e) {
            c[s] = i[s];
          }
          c[e] = r(l);
          return n(t, this, c);
        };
      }
      const a = s;
    },
    56169: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => s });
      var i = r(48277);
      var n = typeof self == "object" && self && self.Object === Object && self;
      var o = i.Z || n || Function("return this")();
      const s = o;
    },
    24205: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => p });
      var i = r(31955);
      var n = r(14608);
      var o = r(63305);
      var s = !n.Z
        ? o.Z
        : function (t, e) {
            return (0, n.Z)(t, "toString", { configurable: true, enumerable: false, value: (0, i.Z)(e), writable: true });
          };
      const a = s;
      var l = 800,
        c = 16;
      var h = Date.now;
      function u(t) {
        var e = 0,
          r = 0;
        return function () {
          var i = h(),
            n = c - (i - r);
          r = i;
          if (n > 0) {
            if (++e >= l) {
              return arguments[0];
            }
          } else {
            e = 0;
          }
          return t.apply(undefined, arguments);
        };
      }
      const f = u;
      var d = f(a);
      const p = d;
    },
    48723: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => s });
      var i = Function.prototype;
      var n = i.toString;
      function o(t) {
        if (t != null) {
          try {
            return n.call(t);
          } catch (e) {}
          try {
            return t + "";
          } catch (e) {}
        }
        return "";
      }
      const s = o;
    },
    31955: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => n });
      function i(t) {
        return function () {
          return t;
        };
      }
      const n = i;
    },
    52373: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => n });
      function i(t, e) {
        return t === e || (t !== t && e !== e);
      }
      const n = i;
    },
    63305: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => n });
      function i(t) {
        return t;
      }
      const n = i;
    },
    11963: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => f });
      var i = r(73832);
      var n = r(23195);
      var o = "[object Arguments]";
      function s(t) {
        return (0, n.Z)(t) && (0, i.Z)(t) == o;
      }
      const a = s;
      var l = Object.prototype;
      var c = l.hasOwnProperty;
      var h = l.propertyIsEnumerable;
      var u = a(
        (function () {
          return arguments;
        })()
      )
        ? a
        : function (t) {
            return (0, n.Z)(t) && c.call(t, "callee") && !h.call(t, "callee");
          };
      const f = u;
    },
    39350: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => n });
      var i = Array.isArray;
      const n = i;
    },
    5710: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => s });
      var i = r(25069);
      var n = r(20523);
      function o(t) {
        return t != null && (0, n.Z)(t.length) && !(0, i.Z)(t);
      }
      const s = o;
    },
    34096: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => s });
      var i = r(5710);
      var n = r(23195);
      function o(t) {
        return (0, n.Z)(t) && (0, i.Z)(t);
      }
      const s = o;
    },
    74002: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => f });
      var i = r(56169);
      function n() {
        return false;
      }
      const o = n;
      t = r.hmd(t);
      var s = typeof exports == "object" && exports && !exports.nodeType && exports;
      var a = s && "object" == "object" && t && !t.nodeType && t;
      var l = a && a.exports === s;
      var c = l ? i.Z.Buffer : undefined;
      var h = c ? c.isBuffer : undefined;
      var u = h || o;
      const f = u;
    },
    12964: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => m });
      var i = r(14926);
      var n = r(34010);
      var o = r(11963);
      var s = r(39350);
      var a = r(5710);
      var l = r(74002);
      var c = r(9794);
      var h = r(50226);
      var u = "[object Map]",
        f = "[object Set]";
      var d = Object.prototype;
      var p = d.hasOwnProperty;
      function g(t) {
        if (t == null) {
          return true;
        }
        if ((0, a.Z)(t) && ((0, s.Z)(t) || typeof t == "string" || typeof t.splice == "function" || (0, l.Z)(t) || (0, h.Z)(t) || (0, o.Z)(t))) {
          return !t.length;
        }
        var e = (0, n.Z)(t);
        if (e == u || e == f) {
          return !t.size;
        }
        if ((0, c.Z)(t)) {
          return !(0, i.Z)(t).length;
        }
        for (var r in t) {
          if (p.call(t, r)) {
            return false;
          }
        }
        return true;
      }
      const m = g;
    },
    25069: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => h });
      var i = r(73832);
      var n = r(89122);
      var o = "[object AsyncFunction]",
        s = "[object Function]",
        a = "[object GeneratorFunction]",
        l = "[object Proxy]";
      function c(t) {
        if (!(0, n.Z)(t)) {
          return false;
        }
        var e = (0, i.Z)(t);
        return e == s || e == a || e == o || e == l;
      }
      const h = c;
    },
    20523: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => o });
      var i = 9007199254740991;
      function n(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= i;
      }
      const o = n;
    },
    89122: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => n });
      function i(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function");
      }
      const n = i;
    },
    23195: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => n });
      function i(t) {
        return t != null && typeof t == "object";
      }
      const n = i;
    },
    30353: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => d });
      var i = r(73832);
      var n = r(67290);
      var o = r(23195);
      var s = "[object Object]";
      var a = Function.prototype,
        l = Object.prototype;
      var c = a.toString;
      var h = l.hasOwnProperty;
      var u = c.call(Object);
      function f(t) {
        if (!(0, o.Z)(t) || (0, i.Z)(t) != s) {
          return false;
        }
        var e = (0, n.Z)(t);
        if (e === null) {
          return true;
        }
        var r = h.call(e, "constructor") && e.constructor;
        return typeof r == "function" && r instanceof r && c.call(r) == u;
      }
      const d = f;
    },
    50226: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => z });
      var i = r(73832);
      var n = r(20523);
      var o = r(23195);
      var s = "[object Arguments]",
        a = "[object Array]",
        l = "[object Boolean]",
        c = "[object Date]",
        h = "[object Error]",
        u = "[object Function]",
        f = "[object Map]",
        d = "[object Number]",
        p = "[object Object]",
        g = "[object RegExp]",
        m = "[object Set]",
        y = "[object String]",
        C = "[object WeakMap]";
      var b = "[object ArrayBuffer]",
        v = "[object DataView]",
        x = "[object Float32Array]",
        k = "[object Float64Array]",
        T = "[object Int8Array]",
        _ = "[object Int16Array]",
        w = "[object Int32Array]",
        S = "[object Uint8Array]",
        B = "[object Uint8ClampedArray]",
        F = "[object Uint16Array]",
        A = "[object Uint32Array]";
      var L = {};
      L[x] = L[k] = L[T] = L[_] = L[w] = L[S] = L[B] = L[F] = L[A] = true;
      L[s] = L[a] = L[b] = L[l] = L[v] = L[c] = L[h] = L[u] = L[f] = L[d] = L[p] = L[g] = L[m] = L[y] = L[C] = false;
      function Z(t) {
        return (0, o.Z)(t) && (0, n.Z)(t.length) && !!L[(0, i.Z)(t)];
      }
      const E = Z;
      var M = r(4827);
      var O = r(79730);
      var I = O.Z && O.Z.isTypedArray;
      var q = I ? (0, M.Z)(I) : E;
      const z = q;
    },
    39789: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => p });
      var i = r(49651);
      var n = r(89122);
      var o = r(9794);
      function s(t) {
        var e = [];
        if (t != null) {
          for (var r in Object(t)) {
            e.push(r);
          }
        }
        return e;
      }
      const a = s;
      var l = Object.prototype;
      var c = l.hasOwnProperty;
      function h(t) {
        if (!(0, n.Z)(t)) {
          return a(t);
        }
        var e = (0, o.Z)(t),
          r = [];
        for (var i in t) {
          if (!(i == "constructor" && (e || !c.call(t, i)))) {
            r.push(i);
          }
        }
        return r;
      }
      const u = h;
      var f = r(5710);
      function d(t) {
        return (0, f.Z)(t) ? (0, i.Z)(t, true) : u(t);
      }
      const p = d;
    },
    28408: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => s });
      var i = r(11412);
      var n = "Expected a function";
      function o(t, e) {
        if (typeof t != "function" || (e != null && typeof e != "function")) {
          throw new TypeError(n);
        }
        var r = function () {
          var i = arguments,
            n = e ? e.apply(this, i) : i[0],
            o = r.cache;
          if (o.has(n)) {
            return o.get(n);
          }
          var s = t.apply(this, i);
          r.cache = o.set(n, s) || o;
          return s;
        };
        r.cache = new (o.Cache || i.Z)();
        return r;
      }
      o.Cache = i.Z;
      const s = o;
    },
    70910: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => q });
      var i = r(86717);
      var n = r(20192);
      var o = r(52373);
      function s(t, e, r) {
        if ((r !== undefined && !(0, o.Z)(t[e], r)) || (r === undefined && !(e in t))) {
          (0, n.Z)(t, e, r);
        }
      }
      const a = s;
      var l = r(22362);
      var c = r(42896);
      var h = r(32404);
      var u = r(65935);
      var f = r(9439);
      var d = r(11963);
      var p = r(39350);
      var g = r(34096);
      var m = r(74002);
      var y = r(25069);
      var C = r(89122);
      var b = r(30353);
      var v = r(50226);
      function x(t, e) {
        if (e === "constructor" && typeof t[e] === "function") {
          return;
        }
        if (e == "__proto__") {
          return;
        }
        return t[e];
      }
      const k = x;
      var T = r(52457);
      var _ = r(39789);
      function w(t) {
        return (0, T.Z)(t, (0, _.Z)(t));
      }
      const S = w;
      function B(t, e, r, i, n, o, s) {
        var l = k(t, r),
          x = k(e, r),
          T = s.get(x);
        if (T) {
          a(t, r, T);
          return;
        }
        var _ = o ? o(l, x, r + "", t, e, s) : undefined;
        var w = _ === undefined;
        if (w) {
          var B = (0, p.Z)(x),
            F = !B && (0, m.Z)(x),
            A = !B && !F && (0, v.Z)(x);
          _ = x;
          if (B || F || A) {
            if ((0, p.Z)(l)) {
              _ = l;
            } else if ((0, g.Z)(l)) {
              _ = (0, u.Z)(l);
            } else if (F) {
              w = false;
              _ = (0, c.Z)(x, true);
            } else if (A) {
              w = false;
              _ = (0, h.Z)(x, true);
            } else {
              _ = [];
            }
          } else if ((0, b.Z)(x) || (0, d.Z)(x)) {
            _ = l;
            if ((0, d.Z)(l)) {
              _ = S(l);
            } else if (!(0, C.Z)(l) || (0, y.Z)(l)) {
              _ = (0, f.Z)(x);
            }
          } else {
            w = false;
          }
        }
        if (w) {
          s.set(x, _);
          n(_, x, i, o, s);
          s["delete"](x);
        }
        a(t, r, _);
      }
      const F = B;
      function A(t, e, r, n, o) {
        if (t === e) {
          return;
        }
        (0, l.Z)(
          e,
          function (s, l) {
            o || (o = new i.Z());
            if ((0, C.Z)(s)) {
              F(t, e, l, r, A, n, o);
            } else {
              var c = n ? n(k(t, l), s, l + "", t, e, o) : undefined;
              if (c === undefined) {
                c = s;
              }
              a(t, l, c);
            }
          },
          _.Z
        );
      }
      const L = A;
      var Z = r(8901);
      var E = r(40185);
      function M(t) {
        return (0, Z.Z)(function (e, r) {
          var i = -1,
            n = r.length,
            o = n > 1 ? r[n - 1] : undefined,
            s = n > 2 ? r[2] : undefined;
          o = t.length > 3 && typeof o == "function" ? (n--, o) : undefined;
          if (s && (0, E.Z)(r[0], r[1], s)) {
            o = n < 3 ? undefined : o;
            n = 1;
          }
          e = Object(e);
          while (++i < n) {
            var a = r[i];
            if (a) {
              t(e, a, i, o);
            }
          }
          return e;
        });
      }
      const O = M;
      var I = O(function (t, e, r) {
        L(t, e, r);
      });
      const q = I;
    },
    23787: (t, e, r) => {
      "use strict";
      r.d(e, {
        A: () => we,
        B: () => vr,
        C: () => br,
        D: () => ge,
        E: () => qr,
        F: () => Lo,
        G: () => nr,
        H: () => Pt,
        I: () => Wn,
        J: () => Tr,
        K: () => Nn,
        L: () => fc,
        Z: () => Ne,
        a: () => qn,
        b: () => In,
        c: () => Pn,
        d: () => Yt,
        e: () => se,
        f: () => De,
        g: () => On,
        h: () => fr,
        i: () => kn,
        j: () => ur,
        k: () => rr,
        l: () => Nt,
        m: () => Jt,
        n: () => Ye,
        o: () => Tn,
        p: () => Rn,
        q: () => zn,
        r: () => Dn,
        s: () => Mn,
        t: () => En,
        u: () => xr,
        v: () => re,
        w: () => cr,
        x: () => sr,
        y: () => Yn,
        z: () => Qn,
      });
      var i = r(18464);
      var n = r(27484);
      var o = r.n(n);
      var s = r(17967);
      var a = r(34596);
      var l = r(27856);
      var c = r.n(l);
      var h = r(37758);
      var u = r(50418);
      const f = (t, e) => {
        const r = h.Z.parse(t);
        const i = {};
        for (const n in e) {
          if (!e[n]) continue;
          i[n] = r[n] + e[n];
        }
        return (0, u.Z)(t, i);
      };
      const d = f;
      var p = r(76538);
      const g = (t, e, r = 50) => {
        const { r: i, g: n, b: o, a: s } = h.Z.parse(t);
        const { r: a, g: l, b: c, a: u } = h.Z.parse(e);
        const f = r / 100;
        const d = f * 2 - 1;
        const g = s - u;
        const m = d * g === -1 ? d : (d + g) / (1 + d * g);
        const y = (m + 1) / 2;
        const C = 1 - y;
        const b = i * y + a * C;
        const v = n * y + l * C;
        const x = o * y + c * C;
        const k = s * f + u * (1 - f);
        return (0, p.Z)(b, v, x, k);
      };
      const m = g;
      const y = (t, e = 100) => {
        const r = h.Z.parse(t);
        r.r = 255 - r.r;
        r.g = 255 - r.g;
        r.b = 255 - r.b;
        return m(r, t, e);
      };
      const C = y;
      var b = r(61364);
      var v = r(23235);
      var x = r(80561);
      var k = r(28408);
      var T = r(70910);
      var _ = "-ms-";
      var w = "-moz-";
      var S = "-webkit-";
      var B = "comm";
      var F = "rule";
      var A = "decl";
      var L = "@page";
      var Z = "@media";
      var E = "@import";
      var M = "@charset";
      var O = "@viewport";
      var I = "@supports";
      var q = "@document";
      var z = "@namespace";
      var D = "@keyframes";
      var N = "@font-face";
      var j = "@counter-style";
      var $ = "@font-feature-values";
      var P = "@layer";
      var R = Math.abs;
      var W = String.fromCharCode;
      var H = Object.assign;
      function Y(t, e) {
        return K(t, 0) ^ 45 ? (((((((e << 2) ^ K(t, 0)) << 2) ^ K(t, 1)) << 2) ^ K(t, 2)) << 2) ^ K(t, 3) : 0;
      }
      function U(t) {
        return t.trim();
      }
      function V(t, e) {
        return (t = e.exec(t)) ? t[0] : t;
      }
      function G(t, e, r) {
        return t.replace(e, r);
      }
      function X(t, e) {
        return t.indexOf(e);
      }
      function K(t, e) {
        return t.charCodeAt(e) | 0;
      }
      function Q(t, e, r) {
        return t.slice(e, r);
      }
      function J(t) {
        return t.length;
      }
      function tt(t) {
        return t.length;
      }
      function et(t, e) {
        return e.push(t), t;
      }
      function rt(t, e) {
        return t.map(e).join("");
      }
      function it(t, e) {
        return t.filter(function (t) {
          return !V(t, e);
        });
      }
      function nt(t, e) {
        var r = "";
        for (var i = 0; i < t.length; i++) r += e(t[i], i, t, e) || "";
        return r;
      }
      function ot(t, e, r, i) {
        switch (t.type) {
          case P:
            if (t.children.length) break;
          case E:
          case A:
            return (t.return = t.return || t.value);
          case B:
            return "";
          case D:
            return (t.return = t.value + "{" + nt(t.children, i) + "}");
          case F:
            if (!J((t.value = t.props.join(",")))) return "";
        }
        return J((r = nt(t.children, i))) ? (t.return = t.value + "{" + r + "}") : "";
      }
      var st = 1;
      var at = 1;
      var lt = 0;
      var ct = 0;
      var ht = 0;
      var ut = "";
      function ft(t, e, r, i, n, o, s, a) {
        return { value: t, root: e, parent: r, type: i, props: n, children: o, line: st, column: at, length: s, return: "", siblings: a };
      }
      function dt(t, e) {
        return assign(ft("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, e);
      }
      function pt(t) {
        while (t.root) t = dt(t.root, { children: [t] });
        append(t, t.siblings);
      }
      function gt() {
        return ht;
      }
      function mt() {
        ht = ct > 0 ? K(ut, --ct) : 0;
        if ((at--, ht === 10)) (at = 1), st--;
        return ht;
      }
      function yt() {
        ht = ct < lt ? K(ut, ct++) : 0;
        if ((at++, ht === 10)) (at = 1), st++;
        return ht;
      }
      function Ct() {
        return K(ut, ct);
      }
      function bt() {
        return ct;
      }
      function vt(t, e) {
        return Q(ut, t, e);
      }
      function xt(t) {
        switch (t) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function kt(t) {
        return (st = at = 1), (lt = J((ut = t))), (ct = 0), [];
      }
      function Tt(t) {
        return (ut = ""), t;
      }
      function _t(t) {
        return U(vt(ct - 1, At(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
      }
      function wt(t) {
        return Tt(Bt(kt(t)));
      }
      function St(t) {
        while ((ht = Ct()))
          if (ht < 33) yt();
          else break;
        return xt(t) > 2 || xt(ht) > 3 ? "" : " ";
      }
      function Bt(t) {
        while (yt())
          switch (xt(ht)) {
            case 0:
              append(Zt(ct - 1), t);
              break;
            case 2:
              append(_t(ht), t);
              break;
            default:
              append(from(ht), t);
          }
        return t;
      }
      function Ft(t, e) {
        while (--e && yt()) if (ht < 48 || ht > 102 || (ht > 57 && ht < 65) || (ht > 70 && ht < 97)) break;
        return vt(t, bt() + (e < 6 && Ct() == 32 && yt() == 32));
      }
      function At(t) {
        while (yt())
          switch (ht) {
            case t:
              return ct;
            case 34:
            case 39:
              if (t !== 34 && t !== 39) At(ht);
              break;
            case 40:
              if (t === 41) At(t);
              break;
            case 92:
              yt();
              break;
          }
        return ct;
      }
      function Lt(t, e) {
        while (yt())
          if (t + ht === 47 + 10) break;
          else if (t + ht === 42 + 42 && Ct() === 47) break;
        return "/*" + vt(e, ct - 1) + "*" + W(t === 47 ? t : yt());
      }
      function Zt(t) {
        while (!xt(Ct())) yt();
        return vt(t, ct);
      }
      function Et(t) {
        return Tt(Mt("", null, null, null, [""], (t = kt(t)), 0, [0], t));
      }
      function Mt(t, e, r, i, n, o, s, a, l) {
        var c = 0;
        var h = 0;
        var u = s;
        var f = 0;
        var d = 0;
        var p = 0;
        var g = 1;
        var m = 1;
        var y = 1;
        var C = 0;
        var b = "";
        var v = n;
        var x = o;
        var k = i;
        var T = b;
        while (m)
          switch (((p = C), (C = yt()))) {
            case 40:
              if (p != 108 && K(T, u - 1) == 58) {
                if (X((T += G(_t(C), "&", "&\f")), "&\f") != -1) y = -1;
                break;
              }
            case 34:
            case 39:
            case 91:
              T += _t(C);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              T += St(p);
              break;
            case 92:
              T += Ft(bt() - 1, 7);
              continue;
            case 47:
              switch (Ct()) {
                case 42:
                case 47:
                  et(It(Lt(yt(), bt()), e, r, l), l);
                  break;
                default:
                  T += "/";
              }
              break;
            case 123 * g:
              a[c++] = J(T) * y;
            case 125 * g:
            case 59:
            case 0:
              switch (C) {
                case 0:
                case 125:
                  m = 0;
                case 59 + h:
                  if (y == -1) T = G(T, /\f/g, "");
                  if (d > 0 && J(T) - u) et(d > 32 ? qt(T + ";", i, r, u - 1, l) : qt(G(T, " ", "") + ";", i, r, u - 2, l), l);
                  break;
                case 59:
                  T += ";";
                default:
                  et((k = Ot(T, e, r, c, h, n, a, b, (v = []), (x = []), u, o)), o);
                  if (C === 123)
                    if (h === 0) Mt(T, e, k, k, v, o, u, a, x);
                    else
                      switch (f === 99 && K(T, 3) === 110 ? 100 : f) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          Mt(t, k, k, i && et(Ot(t, k, k, 0, 0, n, a, b, n, (v = []), u, x), x), n, x, u, a, i ? v : x);
                          break;
                        default:
                          Mt(T, k, k, k, [""], x, 0, a, x);
                      }
              }
              (c = h = d = 0), (g = y = 1), (b = T = ""), (u = s);
              break;
            case 58:
              (u = 1 + J(T)), (d = p);
            default:
              if (g < 1)
                if (C == 123) --g;
                else if (C == 125 && g++ == 0 && mt() == 125) continue;
              switch (((T += W(C)), C * g)) {
                case 38:
                  y = h > 0 ? 1 : ((T += "\f"), -1);
                  break;
                case 44:
                  (a[c++] = (J(T) - 1) * y), (y = 1);
                  break;
                case 64:
                  if (Ct() === 45) T += _t(yt());
                  (f = Ct()), (h = u = J((b = T += Zt(bt())))), C++;
                  break;
                case 45:
                  if (p === 45 && J(T) == 2) g = 0;
              }
          }
        return o;
      }
      function Ot(t, e, r, i, n, o, s, a, l, c, h, u) {
        var f = n - 1;
        var d = n === 0 ? o : [""];
        var p = tt(d);
        for (var g = 0, m = 0, y = 0; g < i; ++g)
          for (var C = 0, b = Q(t, f + 1, (f = R((m = s[g])))), v = t; C < p; ++C)
            if ((v = U(m > 0 ? d[C] + " " + b : G(b, /&\f/g, d[C])))) l[y++] = v;
        return ft(t, e, r, n === 0 ? F : a, l, c, h, u);
      }
      function It(t, e, r, i) {
        return ft(t, e, r, B, W(gt()), Q(t, 2, -2), 0, i);
      }
      function qt(t, e, r, i, n) {
        return ft(t, e, r, A, Q(t, 0, i), Q(t, i + 1, -1), i, n);
      }
      var zt = r(12964);
      const Dt = { trace: 0, debug: 1, info: 2, warn: 3, error: 4, fatal: 5 };
      const Nt = { trace: (...t) => {}, debug: (...t) => {}, info: (...t) => {}, warn: (...t) => {}, error: (...t) => {}, fatal: (...t) => {} };
      const jt = function (t = "fatal") {
        let e = Dt.fatal;
        if (typeof t === "string") {
          t = t.toLowerCase();
          if (t in Dt) {
            e = Dt[t];
          }
        } else if (typeof t === "number") {
          e = t;
        }
        Nt.trace = () => {};
        Nt.debug = () => {};
        Nt.info = () => {};
        Nt.warn = () => {};
        Nt.error = () => {};
        Nt.fatal = () => {};
        if (e <= Dt.fatal) {
          Nt.fatal = console.error ? console.error.bind(console, $t("FATAL"), "color: orange") : console.log.bind(console, "[35m", $t("FATAL"));
        }
        if (e <= Dt.error) {
          Nt.error = console.error ? console.error.bind(console, $t("ERROR"), "color: orange") : console.log.bind(console, "[31m", $t("ERROR"));
        }
        if (e <= Dt.warn) {
          Nt.warn = console.warn ? console.warn.bind(console, $t("WARN"), "color: orange") : console.log.bind(console, `[33m`, $t("WARN"));
        }
        if (e <= Dt.info) {
          Nt.info = console.info ? console.info.bind(console, $t("INFO"), "color: lightblue") : console.log.bind(console, "[34m", $t("INFO"));
        }
        if (e <= Dt.debug) {
          Nt.debug = console.debug ? console.debug.bind(console, $t("DEBUG"), "color: lightgreen") : console.log.bind(console, "[32m", $t("DEBUG"));
        }
        if (e <= Dt.trace) {
          Nt.trace = console.debug ? console.debug.bind(console, $t("TRACE"), "color: lightgreen") : console.log.bind(console, "[32m", $t("TRACE"));
        }
      };
      const $t = (t) => {
        const e = o()().format("ss.SSS");
        return `%c${e} : ${t} : `;
      };
      const Pt = /<br\s*\/?>/gi;
      const Rt = (t) => {
        if (!t) {
          return [""];
        }
        const e = Kt(t).replace(/\\n/g, "#br#");
        return e.split("#br#");
      };
      const Wt = (t) => {
        const e = "data-temp-href-target";
        c().addHook("beforeSanitizeAttributes", (t) => {
          if (t.tagName === "A" && t.hasAttribute("target")) {
            t.setAttribute(e, t.getAttribute("target") || "");
          }
        });
        const r = c().sanitize(t);
        c().addHook("afterSanitizeAttributes", (t) => {
          if (t.tagName === "A" && t.hasAttribute(e)) {
            t.setAttribute("target", t.getAttribute(e) || "");
            t.removeAttribute(e);
            if (t.getAttribute("target") === "_blank") {
              t.setAttribute("rel", "noopener");
            }
          }
        });
        return r;
      };
      const Ht = (t, e) => {
        var r;
        if (((r = e.flowchart) == null ? void 0 : r.htmlLabels) !== false) {
          const r = e.securityLevel;
          if (r === "antiscript" || r === "strict") {
            t = Wt(t);
          } else if (r !== "loose") {
            t = Kt(t);
            t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            t = t.replace(/=/g, "&equals;");
            t = Xt(t);
          }
        }
        return t;
      };
      const Yt = (t, e) => {
        if (!t) {
          return t;
        }
        if (e.dompurifyConfig) {
          t = c().sanitize(Ht(t, e), e.dompurifyConfig).toString();
        } else {
          t = c()
            .sanitize(Ht(t, e), { FORBID_TAGS: ["style"] })
            .toString();
        }
        return t;
      };
      const Ut = (t, e) => {
        if (typeof t === "string") {
          return Yt(t, e);
        }
        return t.flat().map((t) => Yt(t, e));
      };
      const Vt = (t) => Pt.test(t);
      const Gt = (t) => t.split(Pt);
      const Xt = (t) => t.replace(/#br#/g, "<br/>");
      const Kt = (t) => t.replace(Pt, "#br#");
      const Qt = (t) => {
        let e = "";
        if (t) {
          e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
          e = e.replaceAll(/\(/g, "\\(");
          e = e.replaceAll(/\)/g, "\\)");
        }
        return e;
      };
      const Jt = (t) => (t === false || ["false", "null", "0"].includes(String(t).trim().toLowerCase()) ? false : true);
      const te = function (...t) {
        const e = t.filter((t) => !isNaN(t));
        return Math.max(...e);
      };
      const ee = function (...t) {
        const e = t.filter((t) => !isNaN(t));
        return Math.min(...e);
      };
      const re = function (t) {
        const e = t.split(/(,)/);
        const r = [];
        for (let i = 0; i < e.length; i++) {
          let t = e[i];
          if (t === "," && i > 0 && i + 1 < e.length) {
            const n = e[i - 1];
            const o = e[i + 1];
            if (ne(n, o)) {
              t = n + "," + o;
              i++;
              r.pop();
            }
          }
          r.push(oe(t));
        }
        return r.join("");
      };
      const ie = (t, e) => Math.max(0, t.split(e).length - 1);
      const ne = (t, e) => {
        const r = ie(t, "~");
        const i = ie(e, "~");
        return r === 1 && i === 1;
      };
      const oe = (t) => {
        const e = ie(t, "~");
        let r = false;
        if (e <= 1) {
          return t;
        }
        if (e % 2 !== 0 && t.startsWith("~")) {
          t = t.substring(1);
          r = true;
        }
        const i = [...t];
        let n = i.indexOf("~");
        let o = i.lastIndexOf("~");
        while (n !== -1 && o !== -1 && n !== o) {
          i[n] = "<";
          i[o] = ">";
          n = i.indexOf("~");
          o = i.lastIndexOf("~");
        }
        if (r) {
          i.unshift("~");
        }
        return i.join("");
      };
      const se = {
        getRows: Rt,
        sanitizeText: Yt,
        sanitizeTextOrArray: Ut,
        hasBreaks: Vt,
        splitBreaks: Gt,
        lineBreakRegex: Pt,
        removeScript: Wt,
        getUrl: Qt,
        evaluate: Jt,
        getMax: te,
        getMin: ee,
      };
      const ae = (t, e) => (e ? d(t, { s: -40, l: 10 }) : d(t, { s: -40, l: -10 }));
      const le = "#ffffff";
      const ce = "#f2f2f2";
      let he = class t {
        constructor() {
          this.background = "#f4f4f4";
          this.primaryColor = "#fff4dd";
          this.noteBkgColor = "#fff5ad";
          this.noteTextColor = "#333";
          this.THEME_COLOR_LIMIT = 12;
          this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
          this.fontSize = "16px";
        }
        updateColors() {
          var t, e, r, i, n, o, s, a, l, c, h;
          this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333");
          this.secondaryColor = this.secondaryColor || d(this.primaryColor, { h: -120 });
          this.tertiaryColor = this.tertiaryColor || d(this.primaryColor, { h: 180, l: 5 });
          this.primaryBorderColor = this.primaryBorderColor || ae(this.primaryColor, this.darkMode);
          this.secondaryBorderColor = this.secondaryBorderColor || ae(this.secondaryColor, this.darkMode);
          this.tertiaryBorderColor = this.tertiaryBorderColor || ae(this.tertiaryColor, this.darkMode);
          this.noteBorderColor = this.noteBorderColor || ae(this.noteBkgColor, this.darkMode);
          this.noteBkgColor = this.noteBkgColor || "#fff5ad";
          this.noteTextColor = this.noteTextColor || "#333";
          this.secondaryTextColor = this.secondaryTextColor || C(this.secondaryColor);
          this.tertiaryTextColor = this.tertiaryTextColor || C(this.tertiaryColor);
          this.lineColor = this.lineColor || C(this.background);
          this.arrowheadColor = this.arrowheadColor || C(this.background);
          this.textColor = this.textColor || this.primaryTextColor;
          this.border2 = this.border2 || this.tertiaryBorderColor;
          this.nodeBkg = this.nodeBkg || this.primaryColor;
          this.mainBkg = this.mainBkg || this.primaryColor;
          this.nodeBorder = this.nodeBorder || this.primaryBorderColor;
          this.clusterBkg = this.clusterBkg || this.tertiaryColor;
          this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
          this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
          this.titleColor = this.titleColor || this.tertiaryTextColor;
          this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? (0, b.Z)(this.secondaryColor, 30) : this.secondaryColor);
          this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
          this.actorBorder = this.actorBorder || this.primaryBorderColor;
          this.actorBkg = this.actorBkg || this.mainBkg;
          this.actorTextColor = this.actorTextColor || this.primaryTextColor;
          this.actorLineColor = this.actorLineColor || "grey";
          this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
          this.signalColor = this.signalColor || this.textColor;
          this.signalTextColor = this.signalTextColor || this.textColor;
          this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
          this.labelTextColor = this.labelTextColor || this.actorTextColor;
          this.loopTextColor = this.loopTextColor || this.actorTextColor;
          this.activationBorderColor = this.activationBorderColor || (0, b.Z)(this.secondaryColor, 10);
          this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
          this.sequenceNumberColor = this.sequenceNumberColor || C(this.lineColor);
          this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor;
          this.altSectionBkgColor = this.altSectionBkgColor || "white";
          this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor;
          this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor;
          this.excludeBkgColor = this.excludeBkgColor || "#eeeeee";
          this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor;
          this.taskBkgColor = this.taskBkgColor || this.primaryColor;
          this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor;
          this.activeTaskBkgColor = this.activeTaskBkgColor || (0, v.Z)(this.primaryColor, 23);
          this.gridColor = this.gridColor || "lightgrey";
          this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey";
          this.doneTaskBorderColor = this.doneTaskBorderColor || "grey";
          this.critBorderColor = this.critBorderColor || "#ff8888";
          this.critBkgColor = this.critBkgColor || "red";
          this.todayLineColor = this.todayLineColor || "red";
          this.taskTextColor = this.taskTextColor || this.textColor;
          this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor;
          this.taskTextLightColor = this.taskTextLightColor || this.textColor;
          this.taskTextColor = this.taskTextColor || this.primaryTextColor;
          this.taskTextDarkColor = this.taskTextDarkColor || this.textColor;
          this.taskTextClickableColor = this.taskTextClickableColor || "#003163";
          this.personBorder = this.personBorder || this.primaryBorderColor;
          this.personBkg = this.personBkg || this.mainBkg;
          this.transitionColor = this.transitionColor || this.lineColor;
          this.transitionLabelColor = this.transitionLabelColor || this.textColor;
          this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
          this.stateBkg = this.stateBkg || this.mainBkg;
          this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
          this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
          this.altBackground = this.altBackground || this.tertiaryColor;
          this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
          this.compositeBorder = this.compositeBorder || this.nodeBorder;
          this.innerEndBackground = this.nodeBorder;
          this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
          this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
          this.transitionColor = this.transitionColor || this.lineColor;
          this.specialStateColor = this.lineColor;
          this.cScale0 = this.cScale0 || this.primaryColor;
          this.cScale1 = this.cScale1 || this.secondaryColor;
          this.cScale2 = this.cScale2 || this.tertiaryColor;
          this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 });
          this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 });
          this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 });
          this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 });
          this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 });
          this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210, l: 150 });
          this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 });
          this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 });
          this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 });
          if (this.darkMode) {
            for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
              this["cScale" + t] = (0, b.Z)(this["cScale" + t], 75);
            }
          } else {
            for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
              this["cScale" + t] = (0, b.Z)(this["cScale" + t], 25);
            }
          }
          for (let f = 0; f < this.THEME_COLOR_LIMIT; f++) {
            this["cScaleInv" + f] = this["cScaleInv" + f] || C(this["cScale" + f]);
          }
          for (let f = 0; f < this.THEME_COLOR_LIMIT; f++) {
            if (this.darkMode) {
              this["cScalePeer" + f] = this["cScalePeer" + f] || (0, v.Z)(this["cScale" + f], 10);
            } else {
              this["cScalePeer" + f] = this["cScalePeer" + f] || (0, b.Z)(this["cScale" + f], 10);
            }
          }
          this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
          for (let f = 0; f < this.THEME_COLOR_LIMIT; f++) {
            this["cScaleLabel" + f] = this["cScaleLabel" + f] || this.scaleLabelColor;
          }
          const u = this.darkMode ? -4 : -1;
          for (let f = 0; f < 5; f++) {
            this["surface" + f] = this["surface" + f] || d(this.mainBkg, { h: 180, s: -15, l: u * (5 + f * 3) });
            this["surfacePeer" + f] = this["surfacePeer" + f] || d(this.mainBkg, { h: 180, s: -15, l: u * (8 + f * 3) });
          }
          this.classText = this.classText || this.textColor;
          this.fillType0 = this.fillType0 || this.primaryColor;
          this.fillType1 = this.fillType1 || this.secondaryColor;
          this.fillType2 = this.fillType2 || d(this.primaryColor, { h: 64 });
          this.fillType3 = this.fillType3 || d(this.secondaryColor, { h: 64 });
          this.fillType4 = this.fillType4 || d(this.primaryColor, { h: -64 });
          this.fillType5 = this.fillType5 || d(this.secondaryColor, { h: -64 });
          this.fillType6 = this.fillType6 || d(this.primaryColor, { h: 128 });
          this.fillType7 = this.fillType7 || d(this.secondaryColor, { h: 128 });
          this.pie1 = this.pie1 || this.primaryColor;
          this.pie2 = this.pie2 || this.secondaryColor;
          this.pie3 = this.pie3 || this.tertiaryColor;
          this.pie4 = this.pie4 || d(this.primaryColor, { l: -10 });
          this.pie5 = this.pie5 || d(this.secondaryColor, { l: -10 });
          this.pie6 = this.pie6 || d(this.tertiaryColor, { l: -10 });
          this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -10 });
          this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -10 });
          this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: 0 });
          this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -20 });
          this.pie11 = this.pie11 || d(this.primaryColor, { h: -60, l: -20 });
          this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -10 });
          this.pieTitleTextSize = this.pieTitleTextSize || "25px";
          this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
          this.pieSectionTextSize = this.pieSectionTextSize || "17px";
          this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
          this.pieLegendTextSize = this.pieLegendTextSize || "17px";
          this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
          this.pieStrokeColor = this.pieStrokeColor || "black";
          this.pieStrokeWidth = this.pieStrokeWidth || "2px";
          this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
          this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
          this.pieOpacity = this.pieOpacity || "0.7";
          this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
          this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 });
          this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 });
          this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 });
          this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
          this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 });
          this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 });
          this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 });
          this.quadrantPointFill =
            this.quadrantPointFill || (0, x.Z)(this.quadrant1Fill) ? (0, v.Z)(this.quadrant1Fill) : (0, b.Z)(this.quadrant1Fill);
          this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
          this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
          this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
          this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
          this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
          this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
          this.xyChart = {
            backgroundColor: ((t = this.xyChart) == null ? void 0 : t.backgroundColor) || this.background,
            titleColor: ((e = this.xyChart) == null ? void 0 : e.titleColor) || this.primaryTextColor,
            xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
            xAxisLabelColor: ((i = this.xyChart) == null ? void 0 : i.xAxisLabelColor) || this.primaryTextColor,
            xAxisTickColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTickColor) || this.primaryTextColor,
            xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
            yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
            yAxisLabelColor: ((a = this.xyChart) == null ? void 0 : a.yAxisLabelColor) || this.primaryTextColor,
            yAxisTickColor: ((l = this.xyChart) == null ? void 0 : l.yAxisTickColor) || this.primaryTextColor,
            yAxisLineColor: ((c = this.xyChart) == null ? void 0 : c.yAxisLineColor) || this.primaryTextColor,
            plotColorPalette:
              ((h = this.xyChart) == null ? void 0 : h.plotColorPalette) ||
              "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0",
          };
          this.requirementBackground = this.requirementBackground || this.primaryColor;
          this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
          this.requirementBorderSize = this.requirementBorderSize || "1";
          this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
          this.relationColor = this.relationColor || this.lineColor;
          this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? (0, b.Z)(this.secondaryColor, 30) : this.secondaryColor);
          this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
          this.git0 = this.git0 || this.primaryColor;
          this.git1 = this.git1 || this.secondaryColor;
          this.git2 = this.git2 || this.tertiaryColor;
          this.git3 = this.git3 || d(this.primaryColor, { h: -30 });
          this.git4 = this.git4 || d(this.primaryColor, { h: -60 });
          this.git5 = this.git5 || d(this.primaryColor, { h: -90 });
          this.git6 = this.git6 || d(this.primaryColor, { h: 60 });
          this.git7 = this.git7 || d(this.primaryColor, { h: 120 });
          if (this.darkMode) {
            this.git0 = (0, v.Z)(this.git0, 25);
            this.git1 = (0, v.Z)(this.git1, 25);
            this.git2 = (0, v.Z)(this.git2, 25);
            this.git3 = (0, v.Z)(this.git3, 25);
            this.git4 = (0, v.Z)(this.git4, 25);
            this.git5 = (0, v.Z)(this.git5, 25);
            this.git6 = (0, v.Z)(this.git6, 25);
            this.git7 = (0, v.Z)(this.git7, 25);
          } else {
            this.git0 = (0, b.Z)(this.git0, 25);
            this.git1 = (0, b.Z)(this.git1, 25);
            this.git2 = (0, b.Z)(this.git2, 25);
            this.git3 = (0, b.Z)(this.git3, 25);
            this.git4 = (0, b.Z)(this.git4, 25);
            this.git5 = (0, b.Z)(this.git5, 25);
            this.git6 = (0, b.Z)(this.git6, 25);
            this.git7 = (0, b.Z)(this.git7, 25);
          }
          this.gitInv0 = this.gitInv0 || C(this.git0);
          this.gitInv1 = this.gitInv1 || C(this.git1);
          this.gitInv2 = this.gitInv2 || C(this.git2);
          this.gitInv3 = this.gitInv3 || C(this.git3);
          this.gitInv4 = this.gitInv4 || C(this.git4);
          this.gitInv5 = this.gitInv5 || C(this.git5);
          this.gitInv6 = this.gitInv6 || C(this.git6);
          this.gitInv7 = this.gitInv7 || C(this.git7);
          this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor);
          this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
          this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
          this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
          this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
          this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
          this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
          this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
          this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
          this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
          this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
          this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
          this.tagLabelFontSize = this.tagLabelFontSize || "10px";
          this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
          this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
          this.commitLabelFontSize = this.commitLabelFontSize || "10px";
          this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || le;
          this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ce;
        }
        calculate(t) {
          if (typeof t !== "object") {
            this.updateColors();
            return;
          }
          const e = Object.keys(t);
          e.forEach((e) => {
            this[e] = t[e];
          });
          this.updateColors();
          e.forEach((e) => {
            this[e] = t[e];
          });
        }
      };
      const ue = (t) => {
        const e = new he();
        e.calculate(t);
        return e;
      };
      let fe = class t {
        constructor() {
          this.background = "#333";
          this.primaryColor = "#1f2020";
          this.secondaryColor = (0, v.Z)(this.primaryColor, 16);
          this.tertiaryColor = d(this.primaryColor, { h: -160 });
          this.primaryBorderColor = C(this.background);
          this.secondaryBorderColor = ae(this.secondaryColor, this.darkMode);
          this.tertiaryBorderColor = ae(this.tertiaryColor, this.darkMode);
          this.primaryTextColor = C(this.primaryColor);
          this.secondaryTextColor = C(this.secondaryColor);
          this.tertiaryTextColor = C(this.tertiaryColor);
          this.lineColor = C(this.background);
          this.textColor = C(this.background);
          this.mainBkg = "#1f2020";
          this.secondBkg = "calculated";
          this.mainContrastColor = "lightgrey";
          this.darkTextColor = (0, v.Z)(C("#323D47"), 10);
          this.lineColor = "calculated";
          this.border1 = "#81B1DB";
          this.border2 = (0, p.Z)(255, 255, 255, 0.25);
          this.arrowheadColor = "calculated";
          this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
          this.fontSize = "16px";
          this.labelBackground = "#181818";
          this.textColor = "#ccc";
          this.THEME_COLOR_LIMIT = 12;
          this.nodeBkg = "calculated";
          this.nodeBorder = "calculated";
          this.clusterBkg = "calculated";
          this.clusterBorder = "calculated";
          this.defaultLinkColor = "calculated";
          this.titleColor = "#F9FFFE";
          this.edgeLabelBackground = "calculated";
          this.actorBorder = "calculated";
          this.actorBkg = "calculated";
          this.actorTextColor = "calculated";
          this.actorLineColor = "calculated";
          this.signalColor = "calculated";
          this.signalTextColor = "calculated";
          this.labelBoxBkgColor = "calculated";
          this.labelBoxBorderColor = "calculated";
          this.labelTextColor = "calculated";
          this.loopTextColor = "calculated";
          this.noteBorderColor = "calculated";
          this.noteBkgColor = "#fff5ad";
          this.noteTextColor = "calculated";
          this.activationBorderColor = "calculated";
          this.activationBkgColor = "calculated";
          this.sequenceNumberColor = "black";
          this.sectionBkgColor = (0, b.Z)("#EAE8D9", 30);
          this.altSectionBkgColor = "calculated";
          this.sectionBkgColor2 = "#EAE8D9";
          this.excludeBkgColor = (0, b.Z)(this.sectionBkgColor, 10);
          this.taskBorderColor = (0, p.Z)(255, 255, 255, 70);
          this.taskBkgColor = "calculated";
          this.taskTextColor = "calculated";
          this.taskTextLightColor = "calculated";
          this.taskTextOutsideColor = "calculated";
          this.taskTextClickableColor = "#003163";
          this.activeTaskBorderColor = (0, p.Z)(255, 255, 255, 50);
          this.activeTaskBkgColor = "#81B1DB";
          this.gridColor = "calculated";
          this.doneTaskBkgColor = "calculated";
          this.doneTaskBorderColor = "grey";
          this.critBorderColor = "#E83737";
          this.critBkgColor = "#E83737";
          this.taskTextDarkColor = "calculated";
          this.todayLineColor = "#DB5757";
          this.personBorder = this.primaryBorderColor;
          this.personBkg = this.mainBkg;
          this.labelColor = "calculated";
          this.errorBkgColor = "#a44141";
          this.errorTextColor = "#ddd";
        }
        updateColors() {
          var t, e, r, i, n, o, s, a, l, c, h;
          this.secondBkg = (0, v.Z)(this.mainBkg, 16);
          this.lineColor = this.mainContrastColor;
          this.arrowheadColor = this.mainContrastColor;
          this.nodeBkg = this.mainBkg;
          this.nodeBorder = this.border1;
          this.clusterBkg = this.secondBkg;
          this.clusterBorder = this.border2;
          this.defaultLinkColor = this.lineColor;
          this.edgeLabelBackground = (0, v.Z)(this.labelBackground, 25);
          this.actorBorder = this.border1;
          this.actorBkg = this.mainBkg;
          this.actorTextColor = this.mainContrastColor;
          this.actorLineColor = this.mainContrastColor;
          this.signalColor = this.mainContrastColor;
          this.signalTextColor = this.mainContrastColor;
          this.labelBoxBkgColor = this.actorBkg;
          this.labelBoxBorderColor = this.actorBorder;
          this.labelTextColor = this.mainContrastColor;
          this.loopTextColor = this.mainContrastColor;
          this.noteBorderColor = this.secondaryBorderColor;
          this.noteBkgColor = this.secondBkg;
          this.noteTextColor = this.secondaryTextColor;
          this.activationBorderColor = this.border1;
          this.activationBkgColor = this.secondBkg;
          this.altSectionBkgColor = this.background;
          this.taskBkgColor = (0, v.Z)(this.mainBkg, 23);
          this.taskTextColor = this.darkTextColor;
          this.taskTextLightColor = this.mainContrastColor;
          this.taskTextOutsideColor = this.taskTextLightColor;
          this.gridColor = this.mainContrastColor;
          this.doneTaskBkgColor = this.mainContrastColor;
          this.taskTextDarkColor = this.darkTextColor;
          this.transitionColor = this.transitionColor || this.lineColor;
          this.transitionLabelColor = this.transitionLabelColor || this.textColor;
          this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
          this.stateBkg = this.stateBkg || this.mainBkg;
          this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
          this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
          this.altBackground = this.altBackground || "#555";
          this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
          this.compositeBorder = this.compositeBorder || this.nodeBorder;
          this.innerEndBackground = this.primaryBorderColor;
          this.specialStateColor = "#f4f4f4";
          this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
          this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
          this.fillType0 = this.primaryColor;
          this.fillType1 = this.secondaryColor;
          this.fillType2 = d(this.primaryColor, { h: 64 });
          this.fillType3 = d(this.secondaryColor, { h: 64 });
          this.fillType4 = d(this.primaryColor, { h: -64 });
          this.fillType5 = d(this.secondaryColor, { h: -64 });
          this.fillType6 = d(this.primaryColor, { h: 128 });
          this.fillType7 = d(this.secondaryColor, { h: 128 });
          this.cScale1 = this.cScale1 || "#0b0000";
          this.cScale2 = this.cScale2 || "#4d1037";
          this.cScale3 = this.cScale3 || "#3f5258";
          this.cScale4 = this.cScale4 || "#4f2f1b";
          this.cScale5 = this.cScale5 || "#6e0a0a";
          this.cScale6 = this.cScale6 || "#3b0048";
          this.cScale7 = this.cScale7 || "#995a01";
          this.cScale8 = this.cScale8 || "#154706";
          this.cScale9 = this.cScale9 || "#161722";
          this.cScale10 = this.cScale10 || "#00296f";
          this.cScale11 = this.cScale11 || "#01629c";
          this.cScale12 = this.cScale12 || "#010029";
          this.cScale0 = this.cScale0 || this.primaryColor;
          this.cScale1 = this.cScale1 || this.secondaryColor;
          this.cScale2 = this.cScale2 || this.tertiaryColor;
          this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 });
          this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 });
          this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 });
          this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 });
          this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 });
          this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 });
          this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 });
          this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 });
          this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 });
          for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) {
            this["cScaleInv" + u] = this["cScaleInv" + u] || C(this["cScale" + u]);
          }
          for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) {
            this["cScalePeer" + u] = this["cScalePeer" + u] || (0, v.Z)(this["cScale" + u], 10);
          }
          for (let u = 0; u < 5; u++) {
            this["surface" + u] = this["surface" + u] || d(this.mainBkg, { h: 30, s: -30, l: -(-10 + u * 4) });
            this["surfacePeer" + u] = this["surfacePeer" + u] || d(this.mainBkg, { h: 30, s: -30, l: -(-7 + u * 4) });
          }
          this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
          for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) {
            this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
          }
          for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) {
            this["pie" + u] = this["cScale" + u];
          }
          this.pieTitleTextSize = this.pieTitleTextSize || "25px";
          this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
          this.pieSectionTextSize = this.pieSectionTextSize || "17px";
          this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
          this.pieLegendTextSize = this.pieLegendTextSize || "17px";
          this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
          this.pieStrokeColor = this.pieStrokeColor || "black";
          this.pieStrokeWidth = this.pieStrokeWidth || "2px";
          this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
          this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
          this.pieOpacity = this.pieOpacity || "0.7";
          this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
          this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 });
          this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 });
          this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 });
          this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
          this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 });
          this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 });
          this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 });
          this.quadrantPointFill =
            this.quadrantPointFill || (0, x.Z)(this.quadrant1Fill) ? (0, v.Z)(this.quadrant1Fill) : (0, b.Z)(this.quadrant1Fill);
          this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
          this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
          this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
          this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
          this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
          this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
          this.xyChart = {
            backgroundColor: ((t = this.xyChart) == null ? void 0 : t.backgroundColor) || this.background,
            titleColor: ((e = this.xyChart) == null ? void 0 : e.titleColor) || this.primaryTextColor,
            xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
            xAxisLabelColor: ((i = this.xyChart) == null ? void 0 : i.xAxisLabelColor) || this.primaryTextColor,
            xAxisTickColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTickColor) || this.primaryTextColor,
            xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
            yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
            yAxisLabelColor: ((a = this.xyChart) == null ? void 0 : a.yAxisLabelColor) || this.primaryTextColor,
            yAxisTickColor: ((l = this.xyChart) == null ? void 0 : l.yAxisTickColor) || this.primaryTextColor,
            yAxisLineColor: ((c = this.xyChart) == null ? void 0 : c.yAxisLineColor) || this.primaryTextColor,
            plotColorPalette:
              ((h = this.xyChart) == null ? void 0 : h.plotColorPalette) ||
              "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22",
          };
          this.classText = this.primaryTextColor;
          this.requirementBackground = this.requirementBackground || this.primaryColor;
          this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
          this.requirementBorderSize = this.requirementBorderSize || "1";
          this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
          this.relationColor = this.relationColor || this.lineColor;
          this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? (0, b.Z)(this.secondaryColor, 30) : this.secondaryColor);
          this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
          this.git0 = (0, v.Z)(this.secondaryColor, 20);
          this.git1 = (0, v.Z)(this.pie2 || this.secondaryColor, 20);
          this.git2 = (0, v.Z)(this.pie3 || this.tertiaryColor, 20);
          this.git3 = (0, v.Z)(this.pie4 || d(this.primaryColor, { h: -30 }), 20);
          this.git4 = (0, v.Z)(this.pie5 || d(this.primaryColor, { h: -60 }), 20);
          this.git5 = (0, v.Z)(this.pie6 || d(this.primaryColor, { h: -90 }), 10);
          this.git6 = (0, v.Z)(this.pie7 || d(this.primaryColor, { h: 60 }), 10);
          this.git7 = (0, v.Z)(this.pie8 || d(this.primaryColor, { h: 120 }), 20);
          this.gitInv0 = this.gitInv0 || C(this.git0);
          this.gitInv1 = this.gitInv1 || C(this.git1);
          this.gitInv2 = this.gitInv2 || C(this.git2);
          this.gitInv3 = this.gitInv3 || C(this.git3);
          this.gitInv4 = this.gitInv4 || C(this.git4);
          this.gitInv5 = this.gitInv5 || C(this.git5);
          this.gitInv6 = this.gitInv6 || C(this.git6);
          this.gitInv7 = this.gitInv7 || C(this.git7);
          this.gitBranchLabel0 = this.gitBranchLabel0 || C(this.labelTextColor);
          this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
          this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
          this.gitBranchLabel3 = this.gitBranchLabel3 || C(this.labelTextColor);
          this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
          this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
          this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
          this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
          this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
          this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
          this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
          this.tagLabelFontSize = this.tagLabelFontSize || "10px";
          this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
          this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
          this.commitLabelFontSize = this.commitLabelFontSize || "10px";
          this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || (0, v.Z)(this.background, 12);
          this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || (0, v.Z)(this.background, 2);
        }
        calculate(t) {
          if (typeof t !== "object") {
            this.updateColors();
            return;
          }
          const e = Object.keys(t);
          e.forEach((e) => {
            this[e] = t[e];
          });
          this.updateColors();
          e.forEach((e) => {
            this[e] = t[e];
          });
        }
      };
      const de = (t) => {
        const e = new fe();
        e.calculate(t);
        return e;
      };
      let pe = class t {
        constructor() {
          this.background = "#f4f4f4";
          this.primaryColor = "#ECECFF";
          this.secondaryColor = d(this.primaryColor, { h: 120 });
          this.secondaryColor = "#ffffde";
          this.tertiaryColor = d(this.primaryColor, { h: -160 });
          this.primaryBorderColor = ae(this.primaryColor, this.darkMode);
          this.secondaryBorderColor = ae(this.secondaryColor, this.darkMode);
          this.tertiaryBorderColor = ae(this.tertiaryColor, this.darkMode);
          this.primaryTextColor = C(this.primaryColor);
          this.secondaryTextColor = C(this.secondaryColor);
          this.tertiaryTextColor = C(this.tertiaryColor);
          this.lineColor = C(this.background);
          this.textColor = C(this.background);
          this.background = "white";
          this.mainBkg = "#ECECFF";
          this.secondBkg = "#ffffde";
          this.lineColor = "#333333";
          this.border1 = "#9370DB";
          this.border2 = "#aaaa33";
          this.arrowheadColor = "#333333";
          this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
          this.fontSize = "16px";
          this.labelBackground = "#e8e8e8";
          this.textColor = "#333";
          this.THEME_COLOR_LIMIT = 12;
          this.nodeBkg = "calculated";
          this.nodeBorder = "calculated";
          this.clusterBkg = "calculated";
          this.clusterBorder = "calculated";
          this.defaultLinkColor = "calculated";
          this.titleColor = "calculated";
          this.edgeLabelBackground = "calculated";
          this.actorBorder = "calculated";
          this.actorBkg = "calculated";
          this.actorTextColor = "black";
          this.actorLineColor = "grey";
          this.signalColor = "calculated";
          this.signalTextColor = "calculated";
          this.labelBoxBkgColor = "calculated";
          this.labelBoxBorderColor = "calculated";
          this.labelTextColor = "calculated";
          this.loopTextColor = "calculated";
          this.noteBorderColor = "calculated";
          this.noteBkgColor = "#fff5ad";
          this.noteTextColor = "calculated";
          this.activationBorderColor = "#666";
          this.activationBkgColor = "#f4f4f4";
          this.sequenceNumberColor = "white";
          this.sectionBkgColor = "calculated";
          this.altSectionBkgColor = "calculated";
          this.sectionBkgColor2 = "calculated";
          this.excludeBkgColor = "#eeeeee";
          this.taskBorderColor = "calculated";
          this.taskBkgColor = "calculated";
          this.taskTextLightColor = "calculated";
          this.taskTextColor = this.taskTextLightColor;
          this.taskTextDarkColor = "calculated";
          this.taskTextOutsideColor = this.taskTextDarkColor;
          this.taskTextClickableColor = "calculated";
          this.activeTaskBorderColor = "calculated";
          this.activeTaskBkgColor = "calculated";
          this.gridColor = "calculated";
          this.doneTaskBkgColor = "calculated";
          this.doneTaskBorderColor = "calculated";
          this.critBorderColor = "calculated";
          this.critBkgColor = "calculated";
          this.todayLineColor = "calculated";
          this.sectionBkgColor = (0, p.Z)(102, 102, 255, 0.49);
          this.altSectionBkgColor = "white";
          this.sectionBkgColor2 = "#fff400";
          this.taskBorderColor = "#534fbc";
          this.taskBkgColor = "#8a90dd";
          this.taskTextLightColor = "white";
          this.taskTextColor = "calculated";
          this.taskTextDarkColor = "black";
          this.taskTextOutsideColor = "calculated";
          this.taskTextClickableColor = "#003163";
          this.activeTaskBorderColor = "#534fbc";
          this.activeTaskBkgColor = "#bfc7ff";
          this.gridColor = "lightgrey";
          this.doneTaskBkgColor = "lightgrey";
          this.doneTaskBorderColor = "grey";
          this.critBorderColor = "#ff8888";
          this.critBkgColor = "red";
          this.todayLineColor = "red";
          this.personBorder = this.primaryBorderColor;
          this.personBkg = this.mainBkg;
          this.labelColor = "black";
          this.errorBkgColor = "#552222";
          this.errorTextColor = "#552222";
          this.updateColors();
        }
        updateColors() {
          var t, e, r, i, n, o, s, a, l, c, h;
          this.cScale0 = this.cScale0 || this.primaryColor;
          this.cScale1 = this.cScale1 || this.secondaryColor;
          this.cScale2 = this.cScale2 || this.tertiaryColor;
          this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 });
          this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 });
          this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 });
          this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 });
          this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 });
          this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 });
          this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 });
          this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 });
          this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 });
          this["cScalePeer1"] = this["cScalePeer1"] || (0, b.Z)(this.secondaryColor, 45);
          this["cScalePeer2"] = this["cScalePeer2"] || (0, b.Z)(this.tertiaryColor, 40);
          for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) {
            this["cScale" + u] = (0, b.Z)(this["cScale" + u], 10);
            this["cScalePeer" + u] = this["cScalePeer" + u] || (0, b.Z)(this["cScale" + u], 25);
          }
          for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) {
            this["cScaleInv" + u] = this["cScaleInv" + u] || d(this["cScale" + u], { h: 180 });
          }
          for (let u = 0; u < 5; u++) {
            this["surface" + u] = this["surface" + u] || d(this.mainBkg, { h: 30, l: -(5 + u * 5) });
            this["surfacePeer" + u] = this["surfacePeer" + u] || d(this.mainBkg, { h: 30, l: -(7 + u * 5) });
          }
          this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
          if (this.labelTextColor !== "calculated") {
            this.cScaleLabel0 = this.cScaleLabel0 || C(this.labelTextColor);
            this.cScaleLabel3 = this.cScaleLabel3 || C(this.labelTextColor);
            for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
              this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.labelTextColor;
            }
          }
          this.nodeBkg = this.mainBkg;
          this.nodeBorder = this.border1;
          this.clusterBkg = this.secondBkg;
          this.clusterBorder = this.border2;
          this.defaultLinkColor = this.lineColor;
          this.titleColor = this.textColor;
          this.edgeLabelBackground = this.labelBackground;
          this.actorBorder = (0, v.Z)(this.border1, 23);
          this.actorBkg = this.mainBkg;
          this.labelBoxBkgColor = this.actorBkg;
          this.signalColor = this.textColor;
          this.signalTextColor = this.textColor;
          this.labelBoxBorderColor = this.actorBorder;
          this.labelTextColor = this.actorTextColor;
          this.loopTextColor = this.actorTextColor;
          this.noteBorderColor = this.border2;
          this.noteTextColor = this.actorTextColor;
          this.taskTextColor = this.taskTextLightColor;
          this.taskTextOutsideColor = this.taskTextDarkColor;
          this.transitionColor = this.transitionColor || this.lineColor;
          this.transitionLabelColor = this.transitionLabelColor || this.textColor;
          this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
          this.stateBkg = this.stateBkg || this.mainBkg;
          this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
          this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
          this.altBackground = this.altBackground || "#f0f0f0";
          this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
          this.compositeBorder = this.compositeBorder || this.nodeBorder;
          this.innerEndBackground = this.nodeBorder;
          this.specialStateColor = this.lineColor;
          this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
          this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
          this.transitionColor = this.transitionColor || this.lineColor;
          this.classText = this.primaryTextColor;
          this.fillType0 = this.primaryColor;
          this.fillType1 = this.secondaryColor;
          this.fillType2 = d(this.primaryColor, { h: 64 });
          this.fillType3 = d(this.secondaryColor, { h: 64 });
          this.fillType4 = d(this.primaryColor, { h: -64 });
          this.fillType5 = d(this.secondaryColor, { h: -64 });
          this.fillType6 = d(this.primaryColor, { h: 128 });
          this.fillType7 = d(this.secondaryColor, { h: 128 });
          this.pie1 = this.pie1 || this.primaryColor;
          this.pie2 = this.pie2 || this.secondaryColor;
          this.pie3 = this.pie3 || d(this.tertiaryColor, { l: -40 });
          this.pie4 = this.pie4 || d(this.primaryColor, { l: -10 });
          this.pie5 = this.pie5 || d(this.secondaryColor, { l: -30 });
          this.pie6 = this.pie6 || d(this.tertiaryColor, { l: -20 });
          this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -20 });
          this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -40 });
          this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: -40 });
          this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -40 });
          this.pie11 = this.pie11 || d(this.primaryColor, { h: -90, l: -40 });
          this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -30 });
          this.pieTitleTextSize = this.pieTitleTextSize || "25px";
          this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
          this.pieSectionTextSize = this.pieSectionTextSize || "17px";
          this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
          this.pieLegendTextSize = this.pieLegendTextSize || "17px";
          this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
          this.pieStrokeColor = this.pieStrokeColor || "black";
          this.pieStrokeWidth = this.pieStrokeWidth || "2px";
          this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
          this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
          this.pieOpacity = this.pieOpacity || "0.7";
          this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
          this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 });
          this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 });
          this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 });
          this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
          this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 });
          this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 });
          this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 });
          this.quadrantPointFill =
            this.quadrantPointFill || (0, x.Z)(this.quadrant1Fill) ? (0, v.Z)(this.quadrant1Fill) : (0, b.Z)(this.quadrant1Fill);
          this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
          this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
          this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
          this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
          this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
          this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
          this.xyChart = {
            backgroundColor: ((t = this.xyChart) == null ? void 0 : t.backgroundColor) || this.background,
            titleColor: ((e = this.xyChart) == null ? void 0 : e.titleColor) || this.primaryTextColor,
            xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
            xAxisLabelColor: ((i = this.xyChart) == null ? void 0 : i.xAxisLabelColor) || this.primaryTextColor,
            xAxisTickColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTickColor) || this.primaryTextColor,
            xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
            yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
            yAxisLabelColor: ((a = this.xyChart) == null ? void 0 : a.yAxisLabelColor) || this.primaryTextColor,
            yAxisTickColor: ((l = this.xyChart) == null ? void 0 : l.yAxisTickColor) || this.primaryTextColor,
            yAxisLineColor: ((c = this.xyChart) == null ? void 0 : c.yAxisLineColor) || this.primaryTextColor,
            plotColorPalette:
              ((h = this.xyChart) == null ? void 0 : h.plotColorPalette) ||
              "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3",
          };
          this.requirementBackground = this.requirementBackground || this.primaryColor;
          this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
          this.requirementBorderSize = this.requirementBorderSize || "1";
          this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
          this.relationColor = this.relationColor || this.lineColor;
          this.relationLabelBackground = this.relationLabelBackground || this.labelBackground;
          this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
          this.git0 = this.git0 || this.primaryColor;
          this.git1 = this.git1 || this.secondaryColor;
          this.git2 = this.git2 || this.tertiaryColor;
          this.git3 = this.git3 || d(this.primaryColor, { h: -30 });
          this.git4 = this.git4 || d(this.primaryColor, { h: -60 });
          this.git5 = this.git5 || d(this.primaryColor, { h: -90 });
          this.git6 = this.git6 || d(this.primaryColor, { h: 60 });
          this.git7 = this.git7 || d(this.primaryColor, { h: 120 });
          if (this.darkMode) {
            this.git0 = (0, v.Z)(this.git0, 25);
            this.git1 = (0, v.Z)(this.git1, 25);
            this.git2 = (0, v.Z)(this.git2, 25);
            this.git3 = (0, v.Z)(this.git3, 25);
            this.git4 = (0, v.Z)(this.git4, 25);
            this.git5 = (0, v.Z)(this.git5, 25);
            this.git6 = (0, v.Z)(this.git6, 25);
            this.git7 = (0, v.Z)(this.git7, 25);
          } else {
            this.git0 = (0, b.Z)(this.git0, 25);
            this.git1 = (0, b.Z)(this.git1, 25);
            this.git2 = (0, b.Z)(this.git2, 25);
            this.git3 = (0, b.Z)(this.git3, 25);
            this.git4 = (0, b.Z)(this.git4, 25);
            this.git5 = (0, b.Z)(this.git5, 25);
            this.git6 = (0, b.Z)(this.git6, 25);
            this.git7 = (0, b.Z)(this.git7, 25);
          }
          this.gitInv0 = this.gitInv0 || (0, b.Z)(C(this.git0), 25);
          this.gitInv1 = this.gitInv1 || C(this.git1);
          this.gitInv2 = this.gitInv2 || C(this.git2);
          this.gitInv3 = this.gitInv3 || C(this.git3);
          this.gitInv4 = this.gitInv4 || C(this.git4);
          this.gitInv5 = this.gitInv5 || C(this.git5);
          this.gitInv6 = this.gitInv6 || C(this.git6);
          this.gitInv7 = this.gitInv7 || C(this.git7);
          this.gitBranchLabel0 = this.gitBranchLabel0 || C(this.labelTextColor);
          this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
          this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
          this.gitBranchLabel3 = this.gitBranchLabel3 || C(this.labelTextColor);
          this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
          this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
          this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
          this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
          this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
          this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
          this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
          this.tagLabelFontSize = this.tagLabelFontSize || "10px";
          this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
          this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
          this.commitLabelFontSize = this.commitLabelFontSize || "10px";
          this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || le;
          this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ce;
        }
        calculate(t) {
          if (typeof t !== "object") {
            this.updateColors();
            return;
          }
          const e = Object.keys(t);
          e.forEach((e) => {
            this[e] = t[e];
          });
          this.updateColors();
          e.forEach((e) => {
            this[e] = t[e];
          });
        }
      };
      const ge = (t) => {
        const e = new pe();
        e.calculate(t);
        return e;
      };
      let me = class t {
        constructor() {
          this.background = "#f4f4f4";
          this.primaryColor = "#cde498";
          this.secondaryColor = "#cdffb2";
          this.background = "white";
          this.mainBkg = "#cde498";
          this.secondBkg = "#cdffb2";
          this.lineColor = "green";
          this.border1 = "#13540c";
          this.border2 = "#6eaa49";
          this.arrowheadColor = "green";
          this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
          this.fontSize = "16px";
          this.tertiaryColor = (0, v.Z)("#cde498", 10);
          this.primaryBorderColor = ae(this.primaryColor, this.darkMode);
          this.secondaryBorderColor = ae(this.secondaryColor, this.darkMode);
          this.tertiaryBorderColor = ae(this.tertiaryColor, this.darkMode);
          this.primaryTextColor = C(this.primaryColor);
          this.secondaryTextColor = C(this.secondaryColor);
          this.tertiaryTextColor = C(this.primaryColor);
          this.lineColor = C(this.background);
          this.textColor = C(this.background);
          this.THEME_COLOR_LIMIT = 12;
          this.nodeBkg = "calculated";
          this.nodeBorder = "calculated";
          this.clusterBkg = "calculated";
          this.clusterBorder = "calculated";
          this.defaultLinkColor = "calculated";
          this.titleColor = "#333";
          this.edgeLabelBackground = "#e8e8e8";
          this.actorBorder = "calculated";
          this.actorBkg = "calculated";
          this.actorTextColor = "black";
          this.actorLineColor = "grey";
          this.signalColor = "#333";
          this.signalTextColor = "#333";
          this.labelBoxBkgColor = "calculated";
          this.labelBoxBorderColor = "#326932";
          this.labelTextColor = "calculated";
          this.loopTextColor = "calculated";
          this.noteBorderColor = "calculated";
          this.noteBkgColor = "#fff5ad";
          this.noteTextColor = "calculated";
          this.activationBorderColor = "#666";
          this.activationBkgColor = "#f4f4f4";
          this.sequenceNumberColor = "white";
          this.sectionBkgColor = "#6eaa49";
          this.altSectionBkgColor = "white";
          this.sectionBkgColor2 = "#6eaa49";
          this.excludeBkgColor = "#eeeeee";
          this.taskBorderColor = "calculated";
          this.taskBkgColor = "#487e3a";
          this.taskTextLightColor = "white";
          this.taskTextColor = "calculated";
          this.taskTextDarkColor = "black";
          this.taskTextOutsideColor = "calculated";
          this.taskTextClickableColor = "#003163";
          this.activeTaskBorderColor = "calculated";
          this.activeTaskBkgColor = "calculated";
          this.gridColor = "lightgrey";
          this.doneTaskBkgColor = "lightgrey";
          this.doneTaskBorderColor = "grey";
          this.critBorderColor = "#ff8888";
          this.critBkgColor = "red";
          this.todayLineColor = "red";
          this.personBorder = this.primaryBorderColor;
          this.personBkg = this.mainBkg;
          this.labelColor = "black";
          this.errorBkgColor = "#552222";
          this.errorTextColor = "#552222";
        }
        updateColors() {
          var t, e, r, i, n, o, s, a, l, c, h;
          this.actorBorder = (0, b.Z)(this.mainBkg, 20);
          this.actorBkg = this.mainBkg;
          this.labelBoxBkgColor = this.actorBkg;
          this.labelTextColor = this.actorTextColor;
          this.loopTextColor = this.actorTextColor;
          this.noteBorderColor = this.border2;
          this.noteTextColor = this.actorTextColor;
          this.cScale0 = this.cScale0 || this.primaryColor;
          this.cScale1 = this.cScale1 || this.secondaryColor;
          this.cScale2 = this.cScale2 || this.tertiaryColor;
          this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 });
          this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 });
          this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 });
          this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 });
          this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 });
          this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 });
          this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 });
          this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 });
          this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 });
          this["cScalePeer1"] = this["cScalePeer1"] || (0, b.Z)(this.secondaryColor, 45);
          this["cScalePeer2"] = this["cScalePeer2"] || (0, b.Z)(this.tertiaryColor, 40);
          for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) {
            this["cScale" + u] = (0, b.Z)(this["cScale" + u], 10);
            this["cScalePeer" + u] = this["cScalePeer" + u] || (0, b.Z)(this["cScale" + u], 25);
          }
          for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) {
            this["cScaleInv" + u] = this["cScaleInv" + u] || d(this["cScale" + u], { h: 180 });
          }
          this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
          for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) {
            this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
          }
          for (let u = 0; u < 5; u++) {
            this["surface" + u] = this["surface" + u] || d(this.mainBkg, { h: 30, s: -30, l: -(5 + u * 5) });
            this["surfacePeer" + u] = this["surfacePeer" + u] || d(this.mainBkg, { h: 30, s: -30, l: -(8 + u * 5) });
          }
          this.nodeBkg = this.mainBkg;
          this.nodeBorder = this.border1;
          this.clusterBkg = this.secondBkg;
          this.clusterBorder = this.border2;
          this.defaultLinkColor = this.lineColor;
          this.taskBorderColor = this.border1;
          this.taskTextColor = this.taskTextLightColor;
          this.taskTextOutsideColor = this.taskTextDarkColor;
          this.activeTaskBorderColor = this.taskBorderColor;
          this.activeTaskBkgColor = this.mainBkg;
          this.transitionColor = this.transitionColor || this.lineColor;
          this.transitionLabelColor = this.transitionLabelColor || this.textColor;
          this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
          this.stateBkg = this.stateBkg || this.mainBkg;
          this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
          this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
          this.altBackground = this.altBackground || "#f0f0f0";
          this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
          this.compositeBorder = this.compositeBorder || this.nodeBorder;
          this.innerEndBackground = this.primaryBorderColor;
          this.specialStateColor = this.lineColor;
          this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
          this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
          this.transitionColor = this.transitionColor || this.lineColor;
          this.classText = this.primaryTextColor;
          this.fillType0 = this.primaryColor;
          this.fillType1 = this.secondaryColor;
          this.fillType2 = d(this.primaryColor, { h: 64 });
          this.fillType3 = d(this.secondaryColor, { h: 64 });
          this.fillType4 = d(this.primaryColor, { h: -64 });
          this.fillType5 = d(this.secondaryColor, { h: -64 });
          this.fillType6 = d(this.primaryColor, { h: 128 });
          this.fillType7 = d(this.secondaryColor, { h: 128 });
          this.pie1 = this.pie1 || this.primaryColor;
          this.pie2 = this.pie2 || this.secondaryColor;
          this.pie3 = this.pie3 || this.tertiaryColor;
          this.pie4 = this.pie4 || d(this.primaryColor, { l: -30 });
          this.pie5 = this.pie5 || d(this.secondaryColor, { l: -30 });
          this.pie6 = this.pie6 || d(this.tertiaryColor, { h: 40, l: -40 });
          this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -10 });
          this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -10 });
          this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: 0 });
          this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -50 });
          this.pie11 = this.pie11 || d(this.primaryColor, { h: -60, l: -50 });
          this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -50 });
          this.pieTitleTextSize = this.pieTitleTextSize || "25px";
          this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
          this.pieSectionTextSize = this.pieSectionTextSize || "17px";
          this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
          this.pieLegendTextSize = this.pieLegendTextSize || "17px";
          this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
          this.pieStrokeColor = this.pieStrokeColor || "black";
          this.pieStrokeWidth = this.pieStrokeWidth || "2px";
          this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
          this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
          this.pieOpacity = this.pieOpacity || "0.7";
          this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
          this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 });
          this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 });
          this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 });
          this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
          this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 });
          this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 });
          this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 });
          this.quadrantPointFill =
            this.quadrantPointFill || (0, x.Z)(this.quadrant1Fill) ? (0, v.Z)(this.quadrant1Fill) : (0, b.Z)(this.quadrant1Fill);
          this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
          this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
          this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
          this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
          this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
          this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
          this.xyChart = {
            backgroundColor: ((t = this.xyChart) == null ? void 0 : t.backgroundColor) || this.background,
            titleColor: ((e = this.xyChart) == null ? void 0 : e.titleColor) || this.primaryTextColor,
            xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
            xAxisLabelColor: ((i = this.xyChart) == null ? void 0 : i.xAxisLabelColor) || this.primaryTextColor,
            xAxisTickColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTickColor) || this.primaryTextColor,
            xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
            yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
            yAxisLabelColor: ((a = this.xyChart) == null ? void 0 : a.yAxisLabelColor) || this.primaryTextColor,
            yAxisTickColor: ((l = this.xyChart) == null ? void 0 : l.yAxisTickColor) || this.primaryTextColor,
            yAxisLineColor: ((c = this.xyChart) == null ? void 0 : c.yAxisLineColor) || this.primaryTextColor,
            plotColorPalette:
              ((h = this.xyChart) == null ? void 0 : h.plotColorPalette) ||
              "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176",
          };
          this.requirementBackground = this.requirementBackground || this.primaryColor;
          this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
          this.requirementBorderSize = this.requirementBorderSize || "1";
          this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
          this.relationColor = this.relationColor || this.lineColor;
          this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground;
          this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
          this.git0 = this.git0 || this.primaryColor;
          this.git1 = this.git1 || this.secondaryColor;
          this.git2 = this.git2 || this.tertiaryColor;
          this.git3 = this.git3 || d(this.primaryColor, { h: -30 });
          this.git4 = this.git4 || d(this.primaryColor, { h: -60 });
          this.git5 = this.git5 || d(this.primaryColor, { h: -90 });
          this.git6 = this.git6 || d(this.primaryColor, { h: 60 });
          this.git7 = this.git7 || d(this.primaryColor, { h: 120 });
          if (this.darkMode) {
            this.git0 = (0, v.Z)(this.git0, 25);
            this.git1 = (0, v.Z)(this.git1, 25);
            this.git2 = (0, v.Z)(this.git2, 25);
            this.git3 = (0, v.Z)(this.git3, 25);
            this.git4 = (0, v.Z)(this.git4, 25);
            this.git5 = (0, v.Z)(this.git5, 25);
            this.git6 = (0, v.Z)(this.git6, 25);
            this.git7 = (0, v.Z)(this.git7, 25);
          } else {
            this.git0 = (0, b.Z)(this.git0, 25);
            this.git1 = (0, b.Z)(this.git1, 25);
            this.git2 = (0, b.Z)(this.git2, 25);
            this.git3 = (0, b.Z)(this.git3, 25);
            this.git4 = (0, b.Z)(this.git4, 25);
            this.git5 = (0, b.Z)(this.git5, 25);
            this.git6 = (0, b.Z)(this.git6, 25);
            this.git7 = (0, b.Z)(this.git7, 25);
          }
          this.gitInv0 = this.gitInv0 || C(this.git0);
          this.gitInv1 = this.gitInv1 || C(this.git1);
          this.gitInv2 = this.gitInv2 || C(this.git2);
          this.gitInv3 = this.gitInv3 || C(this.git3);
          this.gitInv4 = this.gitInv4 || C(this.git4);
          this.gitInv5 = this.gitInv5 || C(this.git5);
          this.gitInv6 = this.gitInv6 || C(this.git6);
          this.gitInv7 = this.gitInv7 || C(this.git7);
          this.gitBranchLabel0 = this.gitBranchLabel0 || C(this.labelTextColor);
          this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
          this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
          this.gitBranchLabel3 = this.gitBranchLabel3 || C(this.labelTextColor);
          this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
          this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
          this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
          this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
          this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
          this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
          this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
          this.tagLabelFontSize = this.tagLabelFontSize || "10px";
          this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
          this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
          this.commitLabelFontSize = this.commitLabelFontSize || "10px";
          this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || le;
          this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ce;
        }
        calculate(t) {
          if (typeof t !== "object") {
            this.updateColors();
            return;
          }
          const e = Object.keys(t);
          e.forEach((e) => {
            this[e] = t[e];
          });
          this.updateColors();
          e.forEach((e) => {
            this[e] = t[e];
          });
        }
      };
      const ye = (t) => {
        const e = new me();
        e.calculate(t);
        return e;
      };
      class Ce {
        constructor() {
          this.primaryColor = "#eee";
          this.contrast = "#707070";
          this.secondaryColor = (0, v.Z)(this.contrast, 55);
          this.background = "#ffffff";
          this.tertiaryColor = d(this.primaryColor, { h: -160 });
          this.primaryBorderColor = ae(this.primaryColor, this.darkMode);
          this.secondaryBorderColor = ae(this.secondaryColor, this.darkMode);
          this.tertiaryBorderColor = ae(this.tertiaryColor, this.darkMode);
          this.primaryTextColor = C(this.primaryColor);
          this.secondaryTextColor = C(this.secondaryColor);
          this.tertiaryTextColor = C(this.tertiaryColor);
          this.lineColor = C(this.background);
          this.textColor = C(this.background);
          this.mainBkg = "#eee";
          this.secondBkg = "calculated";
          this.lineColor = "#666";
          this.border1 = "#999";
          this.border2 = "calculated";
          this.note = "#ffa";
          this.text = "#333";
          this.critical = "#d42";
          this.done = "#bbb";
          this.arrowheadColor = "#333333";
          this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
          this.fontSize = "16px";
          this.THEME_COLOR_LIMIT = 12;
          this.nodeBkg = "calculated";
          this.nodeBorder = "calculated";
          this.clusterBkg = "calculated";
          this.clusterBorder = "calculated";
          this.defaultLinkColor = "calculated";
          this.titleColor = "calculated";
          this.edgeLabelBackground = "white";
          this.actorBorder = "calculated";
          this.actorBkg = "calculated";
          this.actorTextColor = "calculated";
          this.actorLineColor = "calculated";
          this.signalColor = "calculated";
          this.signalTextColor = "calculated";
          this.labelBoxBkgColor = "calculated";
          this.labelBoxBorderColor = "calculated";
          this.labelTextColor = "calculated";
          this.loopTextColor = "calculated";
          this.noteBorderColor = "calculated";
          this.noteBkgColor = "calculated";
          this.noteTextColor = "calculated";
          this.activationBorderColor = "#666";
          this.activationBkgColor = "#f4f4f4";
          this.sequenceNumberColor = "white";
          this.sectionBkgColor = "calculated";
          this.altSectionBkgColor = "white";
          this.sectionBkgColor2 = "calculated";
          this.excludeBkgColor = "#eeeeee";
          this.taskBorderColor = "calculated";
          this.taskBkgColor = "calculated";
          this.taskTextLightColor = "white";
          this.taskTextColor = "calculated";
          this.taskTextDarkColor = "calculated";
          this.taskTextOutsideColor = "calculated";
          this.taskTextClickableColor = "#003163";
          this.activeTaskBorderColor = "calculated";
          this.activeTaskBkgColor = "calculated";
          this.gridColor = "calculated";
          this.doneTaskBkgColor = "calculated";
          this.doneTaskBorderColor = "calculated";
          this.critBkgColor = "calculated";
          this.critBorderColor = "calculated";
          this.todayLineColor = "calculated";
          this.personBorder = this.primaryBorderColor;
          this.personBkg = this.mainBkg;
          this.labelColor = "black";
          this.errorBkgColor = "#552222";
          this.errorTextColor = "#552222";
        }
        updateColors() {
          var t, e, r, i, n, o, s, a, l, c, h;
          this.secondBkg = (0, v.Z)(this.contrast, 55);
          this.border2 = this.contrast;
          this.actorBorder = (0, v.Z)(this.border1, 23);
          this.actorBkg = this.mainBkg;
          this.actorTextColor = this.text;
          this.actorLineColor = this.lineColor;
          this.signalColor = this.text;
          this.signalTextColor = this.text;
          this.labelBoxBkgColor = this.actorBkg;
          this.labelBoxBorderColor = this.actorBorder;
          this.labelTextColor = this.text;
          this.loopTextColor = this.text;
          this.noteBorderColor = "#999";
          this.noteBkgColor = "#666";
          this.noteTextColor = "#fff";
          this.cScale0 = this.cScale0 || "#555";
          this.cScale1 = this.cScale1 || "#F4F4F4";
          this.cScale2 = this.cScale2 || "#555";
          this.cScale3 = this.cScale3 || "#BBB";
          this.cScale4 = this.cScale4 || "#777";
          this.cScale5 = this.cScale5 || "#999";
          this.cScale6 = this.cScale6 || "#DDD";
          this.cScale7 = this.cScale7 || "#FFF";
          this.cScale8 = this.cScale8 || "#DDD";
          this.cScale9 = this.cScale9 || "#BBB";
          this.cScale10 = this.cScale10 || "#999";
          this.cScale11 = this.cScale11 || "#777";
          for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) {
            this["cScaleInv" + u] = this["cScaleInv" + u] || C(this["cScale" + u]);
          }
          for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) {
            if (this.darkMode) {
              this["cScalePeer" + u] = this["cScalePeer" + u] || (0, v.Z)(this["cScale" + u], 10);
            } else {
              this["cScalePeer" + u] = this["cScalePeer" + u] || (0, b.Z)(this["cScale" + u], 10);
            }
          }
          this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
          this["cScaleLabel0"] = this["cScaleLabel0"] || this.cScale1;
          this["cScaleLabel2"] = this["cScaleLabel2"] || this.cScale1;
          for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) {
            this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
          }
          for (let u = 0; u < 5; u++) {
            this["surface" + u] = this["surface" + u] || d(this.mainBkg, { l: -(5 + u * 5) });
            this["surfacePeer" + u] = this["surfacePeer" + u] || d(this.mainBkg, { l: -(8 + u * 5) });
          }
          this.nodeBkg = this.mainBkg;
          this.nodeBorder = this.border1;
          this.clusterBkg = this.secondBkg;
          this.clusterBorder = this.border2;
          this.defaultLinkColor = this.lineColor;
          this.titleColor = this.text;
          this.sectionBkgColor = (0, v.Z)(this.contrast, 30);
          this.sectionBkgColor2 = (0, v.Z)(this.contrast, 30);
          this.taskBorderColor = (0, b.Z)(this.contrast, 10);
          this.taskBkgColor = this.contrast;
          this.taskTextColor = this.taskTextLightColor;
          this.taskTextDarkColor = this.text;
          this.taskTextOutsideColor = this.taskTextDarkColor;
          this.activeTaskBorderColor = this.taskBorderColor;
          this.activeTaskBkgColor = this.mainBkg;
          this.gridColor = (0, v.Z)(this.border1, 30);
          this.doneTaskBkgColor = this.done;
          this.doneTaskBorderColor = this.lineColor;
          this.critBkgColor = this.critical;
          this.critBorderColor = (0, b.Z)(this.critBkgColor, 10);
          this.todayLineColor = this.critBkgColor;
          this.transitionColor = this.transitionColor || "#000";
          this.transitionLabelColor = this.transitionLabelColor || this.textColor;
          this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
          this.stateBkg = this.stateBkg || this.mainBkg;
          this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
          this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
          this.altBackground = this.altBackground || "#f4f4f4";
          this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
          this.stateBorder = this.stateBorder || "#000";
          this.innerEndBackground = this.primaryBorderColor;
          this.specialStateColor = "#222";
          this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
          this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
          this.classText = this.primaryTextColor;
          this.fillType0 = this.primaryColor;
          this.fillType1 = this.secondaryColor;
          this.fillType2 = d(this.primaryColor, { h: 64 });
          this.fillType3 = d(this.secondaryColor, { h: 64 });
          this.fillType4 = d(this.primaryColor, { h: -64 });
          this.fillType5 = d(this.secondaryColor, { h: -64 });
          this.fillType6 = d(this.primaryColor, { h: 128 });
          this.fillType7 = d(this.secondaryColor, { h: 128 });
          for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) {
            this["pie" + u] = this["cScale" + u];
          }
          this.pie12 = this.pie0;
          this.pieTitleTextSize = this.pieTitleTextSize || "25px";
          this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
          this.pieSectionTextSize = this.pieSectionTextSize || "17px";
          this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
          this.pieLegendTextSize = this.pieLegendTextSize || "17px";
          this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
          this.pieStrokeColor = this.pieStrokeColor || "black";
          this.pieStrokeWidth = this.pieStrokeWidth || "2px";
          this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
          this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
          this.pieOpacity = this.pieOpacity || "0.7";
          this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
          this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 });
          this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 });
          this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 });
          this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
          this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 });
          this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 });
          this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 });
          this.quadrantPointFill =
            this.quadrantPointFill || (0, x.Z)(this.quadrant1Fill) ? (0, v.Z)(this.quadrant1Fill) : (0, b.Z)(this.quadrant1Fill);
          this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
          this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
          this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
          this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
          this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
          this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
          this.xyChart = {
            backgroundColor: ((t = this.xyChart) == null ? void 0 : t.backgroundColor) || this.background,
            titleColor: ((e = this.xyChart) == null ? void 0 : e.titleColor) || this.primaryTextColor,
            xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
            xAxisLabelColor: ((i = this.xyChart) == null ? void 0 : i.xAxisLabelColor) || this.primaryTextColor,
            xAxisTickColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTickColor) || this.primaryTextColor,
            xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
            yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
            yAxisLabelColor: ((a = this.xyChart) == null ? void 0 : a.yAxisLabelColor) || this.primaryTextColor,
            yAxisTickColor: ((l = this.xyChart) == null ? void 0 : l.yAxisTickColor) || this.primaryTextColor,
            yAxisLineColor: ((c = this.xyChart) == null ? void 0 : c.yAxisLineColor) || this.primaryTextColor,
            plotColorPalette:
              ((h = this.xyChart) == null ? void 0 : h.plotColorPalette) ||
              "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0",
          };
          this.requirementBackground = this.requirementBackground || this.primaryColor;
          this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
          this.requirementBorderSize = this.requirementBorderSize || "1";
          this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
          this.relationColor = this.relationColor || this.lineColor;
          this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground;
          this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
          this.git0 = (0, b.Z)(this.pie1, 25) || this.primaryColor;
          this.git1 = this.pie2 || this.secondaryColor;
          this.git2 = this.pie3 || this.tertiaryColor;
          this.git3 = this.pie4 || d(this.primaryColor, { h: -30 });
          this.git4 = this.pie5 || d(this.primaryColor, { h: -60 });
          this.git5 = this.pie6 || d(this.primaryColor, { h: -90 });
          this.git6 = this.pie7 || d(this.primaryColor, { h: 60 });
          this.git7 = this.pie8 || d(this.primaryColor, { h: 120 });
          this.gitInv0 = this.gitInv0 || C(this.git0);
          this.gitInv1 = this.gitInv1 || C(this.git1);
          this.gitInv2 = this.gitInv2 || C(this.git2);
          this.gitInv3 = this.gitInv3 || C(this.git3);
          this.gitInv4 = this.gitInv4 || C(this.git4);
          this.gitInv5 = this.gitInv5 || C(this.git5);
          this.gitInv6 = this.gitInv6 || C(this.git6);
          this.gitInv7 = this.gitInv7 || C(this.git7);
          this.branchLabelColor = this.branchLabelColor || this.labelTextColor;
          this.gitBranchLabel0 = this.branchLabelColor;
          this.gitBranchLabel1 = "white";
          this.gitBranchLabel2 = this.branchLabelColor;
          this.gitBranchLabel3 = "white";
          this.gitBranchLabel4 = this.branchLabelColor;
          this.gitBranchLabel5 = this.branchLabelColor;
          this.gitBranchLabel6 = this.branchLabelColor;
          this.gitBranchLabel7 = this.branchLabelColor;
          this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
          this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
          this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
          this.tagLabelFontSize = this.tagLabelFontSize || "10px";
          this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
          this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
          this.commitLabelFontSize = this.commitLabelFontSize || "10px";
          this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || le;
          this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ce;
        }
        calculate(t) {
          if (typeof t !== "object") {
            this.updateColors();
            return;
          }
          const e = Object.keys(t);
          e.forEach((e) => {
            this[e] = t[e];
          });
          this.updateColors();
          e.forEach((e) => {
            this[e] = t[e];
          });
        }
      }
      const be = (t) => {
        const e = new Ce();
        e.calculate(t);
        return e;
      };
      const ve = {
        base: { getThemeVariables: ue },
        dark: { getThemeVariables: de },
        default: { getThemeVariables: ge },
        forest: { getThemeVariables: ye },
        neutral: { getThemeVariables: be },
      };
      const xe = {
        flowchart: {
          useMaxWidth: true,
          titleTopMargin: 25,
          diagramPadding: 8,
          htmlLabels: true,
          nodeSpacing: 50,
          rankSpacing: 50,
          curve: "basis",
          padding: 15,
          defaultRenderer: "dagre-wrapper",
          wrappingWidth: 200,
        },
        sequence: {
          useMaxWidth: true,
          hideUnusedParticipants: false,
          activationWidth: 10,
          diagramMarginX: 50,
          diagramMarginY: 10,
          actorMargin: 50,
          width: 150,
          height: 65,
          boxMargin: 10,
          boxTextMargin: 5,
          noteMargin: 10,
          messageMargin: 35,
          messageAlign: "center",
          mirrorActors: true,
          forceMenus: false,
          bottomMarginAdj: 1,
          rightAngles: false,
          showSequenceNumbers: false,
          actorFontSize: 14,
          actorFontFamily: '"Open Sans", sans-serif',
          actorFontWeight: 400,
          noteFontSize: 14,
          noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
          noteFontWeight: 400,
          noteAlign: "center",
          messageFontSize: 16,
          messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
          messageFontWeight: 400,
          wrap: false,
          wrapPadding: 10,
          labelBoxWidth: 50,
          labelBoxHeight: 20,
        },
        gantt: {
          useMaxWidth: true,
          titleTopMargin: 25,
          barHeight: 20,
          barGap: 4,
          topPadding: 50,
          rightPadding: 75,
          leftPadding: 75,
          gridLineStartPadding: 35,
          fontSize: 11,
          sectionFontSize: 11,
          numberSectionStyles: 4,
          axisFormat: "%Y-%m-%d",
          topAxis: false,
          displayMode: "",
          weekday: "sunday",
        },
        journey: {
          useMaxWidth: true,
          diagramMarginX: 50,
          diagramMarginY: 10,
          leftMargin: 150,
          width: 150,
          height: 50,
          boxMargin: 10,
          boxTextMargin: 5,
          noteMargin: 10,
          messageMargin: 35,
          messageAlign: "center",
          bottomMarginAdj: 1,
          rightAngles: false,
          taskFontSize: 14,
          taskFontFamily: '"Open Sans", sans-serif',
          taskMargin: 50,
          activationWidth: 10,
          textPlacement: "fo",
          actorColours: ["#8FBC8F", "#7CFC00", "#00FFFF", "#20B2AA", "#B0E0E6", "#FFFFE0"],
          sectionFills: ["#191970", "#8B008B", "#4B0082", "#2F4F4F", "#800000", "#8B4513", "#00008B"],
          sectionColours: ["#fff"],
        },
        class: {
          useMaxWidth: true,
          titleTopMargin: 25,
          arrowMarkerAbsolute: false,
          dividerMargin: 10,
          padding: 5,
          textHeight: 10,
          defaultRenderer: "dagre-wrapper",
          htmlLabels: false,
        },
        state: {
          useMaxWidth: true,
          titleTopMargin: 25,
          dividerMargin: 10,
          sizeUnit: 5,
          padding: 8,
          textHeight: 10,
          titleShift: -15,
          noteMargin: 10,
          forkWidth: 70,
          forkHeight: 7,
          miniPadding: 2,
          fontSizeFactor: 5.02,
          fontSize: 24,
          labelHeight: 16,
          edgeLengthFactor: "20",
          compositTitleSize: 35,
          radius: 5,
          defaultRenderer: "dagre-wrapper",
        },
        er: {
          useMaxWidth: true,
          titleTopMargin: 25,
          diagramPadding: 20,
          layoutDirection: "TB",
          minEntityWidth: 100,
          minEntityHeight: 75,
          entityPadding: 15,
          stroke: "gray",
          fill: "honeydew",
          fontSize: 12,
        },
        pie: { useMaxWidth: true, textPosition: 0.75 },
        quadrantChart: {
          useMaxWidth: true,
          chartWidth: 500,
          chartHeight: 500,
          titleFontSize: 20,
          titlePadding: 10,
          quadrantPadding: 5,
          xAxisLabelPadding: 5,
          yAxisLabelPadding: 5,
          xAxisLabelFontSize: 16,
          yAxisLabelFontSize: 16,
          quadrantLabelFontSize: 16,
          quadrantTextTopPadding: 5,
          pointTextPadding: 5,
          pointLabelFontSize: 12,
          pointRadius: 5,
          xAxisPosition: "top",
          yAxisPosition: "left",
          quadrantInternalBorderStrokeWidth: 1,
          quadrantExternalBorderStrokeWidth: 2,
        },
        xyChart: {
          useMaxWidth: true,
          width: 700,
          height: 500,
          titleFontSize: 20,
          titlePadding: 10,
          showTitle: true,
          xAxis: {
            $ref: "#/$defs/XYChartAxisConfig",
            showLabel: true,
            labelFontSize: 14,
            labelPadding: 5,
            showTitle: true,
            titleFontSize: 16,
            titlePadding: 5,
            showTick: true,
            tickLength: 5,
            tickWidth: 2,
            showAxisLine: true,
            axisLineWidth: 2,
          },
          yAxis: {
            $ref: "#/$defs/XYChartAxisConfig",
            showLabel: true,
            labelFontSize: 14,
            labelPadding: 5,
            showTitle: true,
            titleFontSize: 16,
            titlePadding: 5,
            showTick: true,
            tickLength: 5,
            tickWidth: 2,
            showAxisLine: true,
            axisLineWidth: 2,
          },
          chartOrientation: "vertical",
          plotReservedSpacePercent: 50,
        },
        requirement: {
          useMaxWidth: true,
          rect_fill: "#f9f9f9",
          text_color: "#333",
          rect_border_size: "0.5px",
          rect_border_color: "#bbb",
          rect_min_width: 200,
          rect_min_height: 200,
          fontSize: 14,
          rect_padding: 10,
          line_height: 20,
        },
        mindmap: { useMaxWidth: true, padding: 10, maxNodeWidth: 200 },
        timeline: {
          useMaxWidth: true,
          diagramMarginX: 50,
          diagramMarginY: 10,
          leftMargin: 150,
          width: 150,
          height: 50,
          boxMargin: 10,
          boxTextMargin: 5,
          noteMargin: 10,
          messageMargin: 35,
          messageAlign: "center",
          bottomMarginAdj: 1,
          rightAngles: false,
          taskFontSize: 14,
          taskFontFamily: '"Open Sans", sans-serif',
          taskMargin: 50,
          activationWidth: 10,
          textPlacement: "fo",
          actorColours: ["#8FBC8F", "#7CFC00", "#00FFFF", "#20B2AA", "#B0E0E6", "#FFFFE0"],
          sectionFills: ["#191970", "#8B008B", "#4B0082", "#2F4F4F", "#800000", "#8B4513", "#00008B"],
          sectionColours: ["#fff"],
          disableMulticolor: false,
        },
        gitGraph: {
          useMaxWidth: true,
          titleTopMargin: 25,
          diagramPadding: 8,
          nodeLabel: { width: 75, height: 100, x: -25, y: 0 },
          mainBranchName: "main",
          mainBranchOrder: 0,
          showCommitLabel: true,
          showBranches: true,
          rotateCommitLabel: true,
          arrowMarkerAbsolute: false,
        },
        c4: {
          useMaxWidth: true,
          diagramMarginX: 50,
          diagramMarginY: 10,
          c4ShapeMargin: 50,
          c4ShapePadding: 20,
          width: 216,
          height: 60,
          boxMargin: 10,
          c4ShapeInRow: 4,
          nextLinePaddingX: 0,
          c4BoundaryInRow: 2,
          personFontSize: 14,
          personFontFamily: '"Open Sans", sans-serif',
          personFontWeight: "normal",
          external_personFontSize: 14,
          external_personFontFamily: '"Open Sans", sans-serif',
          external_personFontWeight: "normal",
          systemFontSize: 14,
          systemFontFamily: '"Open Sans", sans-serif',
          systemFontWeight: "normal",
          external_systemFontSize: 14,
          external_systemFontFamily: '"Open Sans", sans-serif',
          external_systemFontWeight: "normal",
          system_dbFontSize: 14,
          system_dbFontFamily: '"Open Sans", sans-serif',
          system_dbFontWeight: "normal",
          external_system_dbFontSize: 14,
          external_system_dbFontFamily: '"Open Sans", sans-serif',
          external_system_dbFontWeight: "normal",
          system_queueFontSize: 14,
          system_queueFontFamily: '"Open Sans", sans-serif',
          system_queueFontWeight: "normal",
          external_system_queueFontSize: 14,
          external_system_queueFontFamily: '"Open Sans", sans-serif',
          external_system_queueFontWeight: "normal",
          boundaryFontSize: 14,
          boundaryFontFamily: '"Open Sans", sans-serif',
          boundaryFontWeight: "normal",
          messageFontSize: 12,
          messageFontFamily: '"Open Sans", sans-serif',
          messageFontWeight: "normal",
          containerFontSize: 14,
          containerFontFamily: '"Open Sans", sans-serif',
          containerFontWeight: "normal",
          external_containerFontSize: 14,
          external_containerFontFamily: '"Open Sans", sans-serif',
          external_containerFontWeight: "normal",
          container_dbFontSize: 14,
          container_dbFontFamily: '"Open Sans", sans-serif',
          container_dbFontWeight: "normal",
          external_container_dbFontSize: 14,
          external_container_dbFontFamily: '"Open Sans", sans-serif',
          external_container_dbFontWeight: "normal",
          container_queueFontSize: 14,
          container_queueFontFamily: '"Open Sans", sans-serif',
          container_queueFontWeight: "normal",
          external_container_queueFontSize: 14,
          external_container_queueFontFamily: '"Open Sans", sans-serif',
          external_container_queueFontWeight: "normal",
          componentFontSize: 14,
          componentFontFamily: '"Open Sans", sans-serif',
          componentFontWeight: "normal",
          external_componentFontSize: 14,
          external_componentFontFamily: '"Open Sans", sans-serif',
          external_componentFontWeight: "normal",
          component_dbFontSize: 14,
          component_dbFontFamily: '"Open Sans", sans-serif',
          component_dbFontWeight: "normal",
          external_component_dbFontSize: 14,
          external_component_dbFontFamily: '"Open Sans", sans-serif',
          external_component_dbFontWeight: "normal",
          component_queueFontSize: 14,
          component_queueFontFamily: '"Open Sans", sans-serif',
          component_queueFontWeight: "normal",
          external_component_queueFontSize: 14,
          external_component_queueFontFamily: '"Open Sans", sans-serif',
          external_component_queueFontWeight: "normal",
          wrap: true,
          wrapPadding: 10,
          person_bg_color: "#08427B",
          person_border_color: "#073B6F",
          external_person_bg_color: "#686868",
          external_person_border_color: "#8A8A8A",
          system_bg_color: "#1168BD",
          system_border_color: "#3C7FC0",
          system_db_bg_color: "#1168BD",
          system_db_border_color: "#3C7FC0",
          system_queue_bg_color: "#1168BD",
          system_queue_border_color: "#3C7FC0",
          external_system_bg_color: "#999999",
          external_system_border_color: "#8A8A8A",
          external_system_db_bg_color: "#999999",
          external_system_db_border_color: "#8A8A8A",
          external_system_queue_bg_color: "#999999",
          external_system_queue_border_color: "#8A8A8A",
          container_bg_color: "#438DD5",
          container_border_color: "#3C7FC0",
          container_db_bg_color: "#438DD5",
          container_db_border_color: "#3C7FC0",
          container_queue_bg_color: "#438DD5",
          container_queue_border_color: "#3C7FC0",
          external_container_bg_color: "#B3B3B3",
          external_container_border_color: "#A6A6A6",
          external_container_db_bg_color: "#B3B3B3",
          external_container_db_border_color: "#A6A6A6",
          external_container_queue_bg_color: "#B3B3B3",
          external_container_queue_border_color: "#A6A6A6",
          component_bg_color: "#85BBF0",
          component_border_color: "#78A8D8",
          component_db_bg_color: "#85BBF0",
          component_db_border_color: "#78A8D8",
          component_queue_bg_color: "#85BBF0",
          component_queue_border_color: "#78A8D8",
          external_component_bg_color: "#CCCCCC",
          external_component_border_color: "#BFBFBF",
          external_component_db_bg_color: "#CCCCCC",
          external_component_db_border_color: "#BFBFBF",
          external_component_queue_bg_color: "#CCCCCC",
          external_component_queue_border_color: "#BFBFBF",
        },
        sankey: {
          useMaxWidth: true,
          width: 600,
          height: 400,
          linkColor: "gradient",
          nodeAlignment: "justify",
          showValues: true,
          prefix: "",
          suffix: "",
        },
        theme: "default",
        maxTextSize: 5e4,
        maxEdges: 500,
        darkMode: false,
        fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
        logLevel: 5,
        securityLevel: "strict",
        startOnLoad: true,
        arrowMarkerAbsolute: false,
        secure: ["secure", "securityLevel", "startOnLoad", "maxTextSize", "maxEdges"],
        deterministicIds: false,
        fontSize: 16,
      };
      const ke = {
        ...xe,
        deterministicIDSeed: void 0,
        themeCSS: void 0,
        themeVariables: ve["default"].getThemeVariables(),
        sequence: {
          ...xe.sequence,
          messageFont: function () {
            return { fontFamily: this.messageFontFamily, fontSize: this.messageFontSize, fontWeight: this.messageFontWeight };
          },
          noteFont: function () {
            return { fontFamily: this.noteFontFamily, fontSize: this.noteFontSize, fontWeight: this.noteFontWeight };
          },
          actorFont: function () {
            return { fontFamily: this.actorFontFamily, fontSize: this.actorFontSize, fontWeight: this.actorFontWeight };
          },
        },
        gantt: { ...xe.gantt, tickInterval: void 0, useWidth: void 0 },
        c4: {
          ...xe.c4,
          useWidth: void 0,
          personFont: function () {
            return { fontFamily: this.personFontFamily, fontSize: this.personFontSize, fontWeight: this.personFontWeight };
          },
          external_personFont: function () {
            return { fontFamily: this.external_personFontFamily, fontSize: this.external_personFontSize, fontWeight: this.external_personFontWeight };
          },
          systemFont: function () {
            return { fontFamily: this.systemFontFamily, fontSize: this.systemFontSize, fontWeight: this.systemFontWeight };
          },
          external_systemFont: function () {
            return { fontFamily: this.external_systemFontFamily, fontSize: this.external_systemFontSize, fontWeight: this.external_systemFontWeight };
          },
          system_dbFont: function () {
            return { fontFamily: this.system_dbFontFamily, fontSize: this.system_dbFontSize, fontWeight: this.system_dbFontWeight };
          },
          external_system_dbFont: function () {
            return {
              fontFamily: this.external_system_dbFontFamily,
              fontSize: this.external_system_dbFontSize,
              fontWeight: this.external_system_dbFontWeight,
            };
          },
          system_queueFont: function () {
            return { fontFamily: this.system_queueFontFamily, fontSize: this.system_queueFontSize, fontWeight: this.system_queueFontWeight };
          },
          external_system_queueFont: function () {
            return {
              fontFamily: this.external_system_queueFontFamily,
              fontSize: this.external_system_queueFontSize,
              fontWeight: this.external_system_queueFontWeight,
            };
          },
          containerFont: function () {
            return { fontFamily: this.containerFontFamily, fontSize: this.containerFontSize, fontWeight: this.containerFontWeight };
          },
          external_containerFont: function () {
            return {
              fontFamily: this.external_containerFontFamily,
              fontSize: this.external_containerFontSize,
              fontWeight: this.external_containerFontWeight,
            };
          },
          container_dbFont: function () {
            return { fontFamily: this.container_dbFontFamily, fontSize: this.container_dbFontSize, fontWeight: this.container_dbFontWeight };
          },
          external_container_dbFont: function () {
            return {
              fontFamily: this.external_container_dbFontFamily,
              fontSize: this.external_container_dbFontSize,
              fontWeight: this.external_container_dbFontWeight,
            };
          },
          container_queueFont: function () {
            return { fontFamily: this.container_queueFontFamily, fontSize: this.container_queueFontSize, fontWeight: this.container_queueFontWeight };
          },
          external_container_queueFont: function () {
            return {
              fontFamily: this.external_container_queueFontFamily,
              fontSize: this.external_container_queueFontSize,
              fontWeight: this.external_container_queueFontWeight,
            };
          },
          componentFont: function () {
            return { fontFamily: this.componentFontFamily, fontSize: this.componentFontSize, fontWeight: this.componentFontWeight };
          },
          external_componentFont: function () {
            return {
              fontFamily: this.external_componentFontFamily,
              fontSize: this.external_componentFontSize,
              fontWeight: this.external_componentFontWeight,
            };
          },
          component_dbFont: function () {
            return { fontFamily: this.component_dbFontFamily, fontSize: this.component_dbFontSize, fontWeight: this.component_dbFontWeight };
          },
          external_component_dbFont: function () {
            return {
              fontFamily: this.external_component_dbFontFamily,
              fontSize: this.external_component_dbFontSize,
              fontWeight: this.external_component_dbFontWeight,
            };
          },
          component_queueFont: function () {
            return { fontFamily: this.component_queueFontFamily, fontSize: this.component_queueFontSize, fontWeight: this.component_queueFontWeight };
          },
          external_component_queueFont: function () {
            return {
              fontFamily: this.external_component_queueFontFamily,
              fontSize: this.external_component_queueFontSize,
              fontWeight: this.external_component_queueFontWeight,
            };
          },
          boundaryFont: function () {
            return { fontFamily: this.boundaryFontFamily, fontSize: this.boundaryFontSize, fontWeight: this.boundaryFontWeight };
          },
          messageFont: function () {
            return { fontFamily: this.messageFontFamily, fontSize: this.messageFontSize, fontWeight: this.messageFontWeight };
          },
        },
        pie: { ...xe.pie, useWidth: 984 },
        xyChart: { ...xe.xyChart, useWidth: void 0 },
        requirement: { ...xe.requirement, useWidth: void 0 },
        gitGraph: { ...xe.gitGraph, useMaxWidth: false },
        sankey: { ...xe.sankey, useMaxWidth: false },
      };
      const Te = (t, e = "") =>
        Object.keys(t).reduce((r, i) => {
          if (Array.isArray(t[i])) {
            return r;
          } else if (typeof t[i] === "object" && t[i] !== null) {
            return [...r, e + i, ...Te(t[i], "")];
          }
          return [...r, e + i];
        }, []);
      const _e = new Set(Te(ke, ""));
      const we = ke;
      const Se = (t) => {
        Nt.debug("sanitizeDirective called with", t);
        if (typeof t !== "object" || t == null) {
          return;
        }
        if (Array.isArray(t)) {
          t.forEach((t) => Se(t));
          return;
        }
        for (const e of Object.keys(t)) {
          Nt.debug("Checking key", e);
          if (e.startsWith("__") || e.includes("proto") || e.includes("constr") || !_e.has(e) || t[e] == null) {
            Nt.debug("sanitize deleting key: ", e);
            delete t[e];
            continue;
          }
          if (typeof t[e] === "object") {
            Nt.debug("sanitizing object", e);
            Se(t[e]);
            continue;
          }
          const r = ["themeCSS", "fontFamily", "altFontFamily"];
          for (const i of r) {
            if (e.includes(i)) {
              Nt.debug("sanitizing css option", e);
              t[e] = Be(t[e]);
            }
          }
        }
        if (t.themeVariables) {
          for (const e of Object.keys(t.themeVariables)) {
            const r = t.themeVariables[e];
            if ((r == null ? void 0 : r.match) && !r.match(/^[\d "#%(),.;A-Za-z]+$/)) {
              t.themeVariables[e] = "";
            }
          }
        }
        Nt.debug("After sanitization", t);
      };
      const Be = (t) => {
        let e = 0;
        let r = 0;
        for (const i of t) {
          if (e < r) {
            return "{ /* ERROR: Unbalanced CSS */ }";
          }
          if (i === "{") {
            e++;
          } else if (i === "}") {
            r++;
          }
        }
        if (e !== r) {
          return "{ /* ERROR: Unbalanced CSS */ }";
        }
        return t;
      };
      const Fe = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
      const Ae = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
      const Le = /\s*%%.*\n/gm;
      class Ze extends Error {
        constructor(t) {
          super(t);
          this.name = "UnknownDiagramError";
        }
      }
      const Ee = {};
      const Me = function (t, e) {
        t = t.replace(Fe, "").replace(Ae, "").replace(Le, "\n");
        for (const [r, { detector: i }] of Object.entries(Ee)) {
          const n = i(t, e);
          if (n) {
            return r;
          }
        }
        throw new Ze(`No diagram type detected matching given configuration for text: ${t}`);
      };
      const Oe = (...t) => {
        for (const { id: e, detector: r, loader: i } of t) {
          Ie(e, r, i);
        }
      };
      const Ie = (t, e, r) => {
        if (Ee[t]) {
          Nt.error(`Detector with key ${t} already exists`);
        } else {
          Ee[t] = { detector: e, loader: r };
        }
        Nt.debug(`Detector with key ${t} added${r ? " with loader" : ""}`);
      };
      const qe = (t) => Ee[t].loader;
      const ze = (t, e, { depth: r = 2, clobber: i = false } = {}) => {
        const n = { depth: r, clobber: i };
        if (Array.isArray(e) && !Array.isArray(t)) {
          e.forEach((e) => ze(t, e, n));
          return t;
        } else if (Array.isArray(e) && Array.isArray(t)) {
          e.forEach((e) => {
            if (!t.includes(e)) {
              t.push(e);
            }
          });
          return t;
        }
        if (t === void 0 || r <= 0) {
          if (t !== void 0 && t !== null && typeof t === "object" && typeof e === "object") {
            return Object.assign(t, e);
          } else {
            return e;
          }
        }
        if (e !== void 0 && typeof t === "object" && typeof e === "object") {
          Object.keys(e).forEach((n) => {
            if (typeof e[n] === "object" && (t[n] === void 0 || typeof t[n] === "object")) {
              if (t[n] === void 0) {
                t[n] = Array.isArray(e[n]) ? [] : {};
              }
              t[n] = ze(t[n], e[n], { depth: r - 1, clobber: i });
            } else if (i || (typeof t[n] !== "object" && typeof e[n] !== "object")) {
              t[n] = e[n];
            }
          });
        }
        return t;
      };
      const De = ze;
      const Ne = "​";
      const je = {
        curveBasis: a.$0Z,
        curveBasisClosed: a.Dts,
        curveBasisOpen: a.WQY,
        curveBumpX: a.qpX,
        curveBumpY: a.u93,
        curveBundle: a.tFB,
        curveCardinalClosed: a.OvA,
        curveCardinalOpen: a.dCK,
        curveCardinal: a.YY7,
        curveCatmullRomClosed: a.fGX,
        curveCatmullRomOpen: a.$m7,
        curveCatmullRom: a.zgE,
        curveLinear: a.c_6,
        curveLinearClosed: a.fxm,
        curveMonotoneX: a.FdL,
        curveMonotoneY: a.ak_,
        curveNatural: a.SxZ,
        curveStep: a.eA_,
        curveStepAfter: a.jsv,
        curveStepBefore: a.iJ,
      };
      const $e = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
      const Pe = function (t, e) {
        const r = Re(t, /(?:init\b)|(?:initialize\b)/);
        let i = {};
        if (Array.isArray(r)) {
          const t = r.map((t) => t.args);
          Se(t);
          i = De(i, [...t]);
        } else {
          i = r.args;
        }
        if (!i) {
          return;
        }
        let n = Me(t, e);
        const o = "config";
        if (i[o] !== void 0) {
          if (n === "flowchart-v2") {
            n = "flowchart";
          }
          i[n] = i[o];
          delete i[o];
        }
        return i;
      };
      const Re = function (t, e = null) {
        try {
          const r = new RegExp(`[%]{2}(?![{]${$e.source})(?=[}][%]{2}).*\n`, "ig");
          t = t.trim().replace(r, "").replace(/'/gm, '"');
          Nt.debug(`Detecting diagram directive${e !== null ? " type:" + e : ""} based on the text:${t}`);
          let i;
          const n = [];
          while ((i = Ae.exec(t)) !== null) {
            if (i.index === Ae.lastIndex) {
              Ae.lastIndex++;
            }
            if ((i && !e) || (e && i[1] && i[1].match(e)) || (e && i[2] && i[2].match(e))) {
              const t = i[1] ? i[1] : i[2];
              const e = i[3] ? i[3].trim() : i[4] ? JSON.parse(i[4].trim()) : null;
              n.push({ type: t, args: e });
            }
          }
          if (n.length === 0) {
            return { type: t, args: null };
          }
          return n.length === 1 ? n[0] : n;
        } catch (r) {
          Nt.error(`ERROR: ${r.message} - Unable to parse directive type: '${e}' based on the text: '${t}'`);
          return { type: void 0, args: null };
        }
      };
      const We = function (t) {
        return t.replace(Ae, "");
      };
      const He = function (t, e) {
        for (const [r, i] of e.entries()) {
          if (i.match(t)) {
            return r;
          }
        }
        return -1;
      };
      function Ye(t, e) {
        if (!t) {
          return e;
        }
        const r = `curve${t.charAt(0).toUpperCase() + t.slice(1)}`;
        return je[r] ?? e;
      }
      function Ue(t, e) {
        const r = t.trim();
        if (!r) {
          return void 0;
        }
        if (e.securityLevel !== "loose") {
          return (0, s.Nm)(r);
        }
        return r;
      }
      const Ve = (t, ...e) => {
        const r = t.split(".");
        const i = r.length - 1;
        const n = r[i];
        let o = window;
        for (let s = 0; s < i; s++) {
          o = o[r[s]];
          if (!o) {
            Nt.error(`Function name: ${t} not found in window`);
            return;
          }
        }
        o[n](...e);
      };
      function Ge(t, e) {
        if (!t || !e) {
          return 0;
        }
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
      function Xe(t) {
        let e;
        let r = 0;
        t.forEach((t) => {
          r += Ge(t, e);
          e = t;
        });
        const i = r / 2;
        return Je(t, i);
      }
      function Ke(t) {
        if (t.length === 1) {
          return t[0];
        }
        return Xe(t);
      }
      const Qe = (t, e = 2) => {
        const r = Math.pow(10, e);
        return Math.round(t * r) / r;
      };
      const Je = (t, e) => {
        let r = void 0;
        let i = e;
        for (const n of t) {
          if (r) {
            const t = Ge(n, r);
            if (t < i) {
              i -= t;
            } else {
              const e = i / t;
              if (e <= 0) {
                return r;
              }
              if (e >= 1) {
                return { x: n.x, y: n.y };
              }
              if (e > 0 && e < 1) {
                return { x: Qe((1 - e) * r.x + e * n.x, 5), y: Qe((1 - e) * r.y + e * n.y, 5) };
              }
            }
          }
          r = n;
        }
        throw new Error("Could not find a suitable point for the given distance");
      };
      const tr = (t, e, r) => {
        Nt.info(`our points ${JSON.stringify(e)}`);
        if (e[0] !== r) {
          e = e.reverse();
        }
        const i = 25;
        const n = Je(e, i);
        const o = t ? 10 : 5;
        const s = Math.atan2(e[0].y - n.y, e[0].x - n.x);
        const a = { x: 0, y: 0 };
        a.x = Math.sin(s) * o + (e[0].x + n.x) / 2;
        a.y = -Math.cos(s) * o + (e[0].y + n.y) / 2;
        return a;
      };
      function er(t, e, r) {
        const i = structuredClone(r);
        Nt.info("our points", i);
        if (e !== "start_left" && e !== "start_right") {
          i.reverse();
        }
        const n = 25 + t;
        const o = Je(i, n);
        const s = 10 + t * 0.5;
        const a = Math.atan2(i[0].y - o.y, i[0].x - o.x);
        const l = { x: 0, y: 0 };
        if (e === "start_left") {
          l.x = Math.sin(a + Math.PI) * s + (i[0].x + o.x) / 2;
          l.y = -Math.cos(a + Math.PI) * s + (i[0].y + o.y) / 2;
        } else if (e === "end_right") {
          l.x = Math.sin(a - Math.PI) * s + (i[0].x + o.x) / 2 - 5;
          l.y = -Math.cos(a - Math.PI) * s + (i[0].y + o.y) / 2 - 5;
        } else if (e === "end_left") {
          l.x = Math.sin(a) * s + (i[0].x + o.x) / 2 - 5;
          l.y = -Math.cos(a) * s + (i[0].y + o.y) / 2 - 5;
        } else {
          l.x = Math.sin(a) * s + (i[0].x + o.x) / 2;
          l.y = -Math.cos(a) * s + (i[0].y + o.y) / 2;
        }
        return l;
      }
      function rr(t) {
        let e = "";
        let r = "";
        for (const i of t) {
          if (i !== void 0) {
            if (i.startsWith("color:") || i.startsWith("text-align:")) {
              r = r + i + ";";
            } else {
              e = e + i + ";";
            }
          }
        }
        return { style: e, labelStyle: r };
      }
      let ir = 0;
      const nr = () => {
        ir++;
        return "id-" + Math.random().toString(36).substr(2, 12) + "-" + ir;
      };
      function or(t) {
        let e = "";
        const r = "0123456789abcdef";
        const i = r.length;
        for (let n = 0; n < t; n++) {
          e += r.charAt(Math.floor(Math.random() * i));
        }
        return e;
      }
      const sr = (t) => or(t.length);
      const ar = function () {
        return {
          x: 0,
          y: 0,
          fill: void 0,
          anchor: "start",
          style: "#666",
          width: 100,
          height: 100,
          textMargin: 0,
          rx: 0,
          ry: 0,
          valign: void 0,
          text: "",
        };
      };
      const lr = function (t, e) {
        const r = e.text.replace(se.lineBreakRegex, " ");
        const [, i] = br(e.fontSize);
        const n = t.append("text");
        n.attr("x", e.x);
        n.attr("y", e.y);
        n.style("text-anchor", e.anchor);
        n.style("font-family", e.fontFamily);
        n.style("font-size", i);
        n.style("font-weight", e.fontWeight);
        n.attr("fill", e.fill);
        if (e.class !== void 0) {
          n.attr("class", e.class);
        }
        const o = n.append("tspan");
        o.attr("x", e.x + e.textMargin * 2);
        o.attr("fill", e.fill);
        o.text(r);
        return n;
      };
      const cr = (0, k.Z)(
        (t, e, r) => {
          if (!t) {
            return t;
          }
          r = Object.assign({ fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" }, r);
          if (se.lineBreakRegex.test(t)) {
            return t;
          }
          const i = t.split(" ");
          const n = [];
          let o = "";
          i.forEach((t, s) => {
            const a = fr(`${t} `, r);
            const l = fr(o, r);
            if (a > e) {
              const { hyphenatedStrings: i, remainingWord: s } = hr(t, e, "-", r);
              n.push(o, ...i);
              o = s;
            } else if (l + a >= e) {
              n.push(o);
              o = t;
            } else {
              o = [o, t].filter(Boolean).join(" ");
            }
            const c = s + 1;
            const h = c === i.length;
            if (h) {
              n.push(o);
            }
          });
          return n.filter((t) => t !== "").join(r.joinWith);
        },
        (t, e, r) => `${t}${e}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`
      );
      const hr = (0, k.Z)(
        (t, e, r = "-", i) => {
          i = Object.assign({ fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 }, i);
          const n = [...t];
          const o = [];
          let s = "";
          n.forEach((t, a) => {
            const l = `${s}${t}`;
            const c = fr(l, i);
            if (c >= e) {
              const t = a + 1;
              const e = n.length === t;
              const i = `${l}${r}`;
              o.push(e ? l : i);
              s = "";
            } else {
              s = l;
            }
          });
          return { hyphenatedStrings: o, remainingWord: s };
        },
        (t, e, r = "-", i) => `${t}${e}${r}${i.fontSize}${i.fontWeight}${i.fontFamily}`
      );
      function ur(t, e) {
        return dr(t, e).height;
      }
      function fr(t, e) {
        return dr(t, e).width;
      }
      const dr = (0, k.Z)(
        (t, e) => {
          const { fontSize: r = 12, fontFamily: i = "Arial", fontWeight: n = 400 } = e;
          if (!t) {
            return { width: 0, height: 0 };
          }
          const [, o] = br(r);
          const s = ["sans-serif", i];
          const l = t.split(se.lineBreakRegex);
          const c = [];
          const h = (0, a.Ys)("body");
          if (!h.remove) {
            return { width: 0, height: 0, lineHeight: 0 };
          }
          const u = h.append("svg");
          for (const a of s) {
            let t = 0;
            const e = { width: 0, height: 0, lineHeight: 0 };
            for (const r of l) {
              const i = ar();
              i.text = r || Ne;
              const s = lr(u, i).style("font-size", o).style("font-weight", n).style("font-family", a);
              const l = (s._groups || s)[0][0].getBBox();
              if (l.width === 0 && l.height === 0) {
                throw new Error("svg element not in render tree");
              }
              e.width = Math.round(Math.max(e.width, l.width));
              t = Math.round(l.height);
              e.height += t;
              e.lineHeight = Math.round(Math.max(e.lineHeight, t));
            }
            c.push(e);
          }
          u.remove();
          const f =
            isNaN(c[1].height) ||
            isNaN(c[1].width) ||
            isNaN(c[1].lineHeight) ||
            (c[0].height > c[1].height && c[0].width > c[1].width && c[0].lineHeight > c[1].lineHeight)
              ? 0
              : 1;
          return c[f];
        },
        (t, e) => `${t}${e.fontSize}${e.fontWeight}${e.fontFamily}`
      );
      class pr {
        constructor(t = false, e) {
          this.count = 0;
          this.count = e ? e.length : 0;
          this.next = t ? () => this.count++ : () => Date.now();
        }
      }
      let gr;
      const mr = function (t) {
        gr = gr || document.createElement("div");
        t = escape(t).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";");
        gr.innerHTML = t;
        return unescape(gr.textContent);
      };
      function yr(t) {
        return "str" in t;
      }
      const Cr = (t, e, r, i) => {
        var n;
        if (!i) {
          return;
        }
        const o = (n = t.node()) == null ? void 0 : n.getBBox();
        if (!o) {
          return;
        }
        t.append("text")
          .text(i)
          .attr("x", o.x + o.width / 2)
          .attr("y", -r)
          .attr("class", e);
      };
      const br = (t) => {
        if (typeof t === "number") {
          return [t, t + "px"];
        }
        const e = parseInt(t ?? "", 10);
        if (Number.isNaN(e)) {
          return [void 0, void 0];
        } else if (t === String(e)) {
          return [e, t + "px"];
        } else {
          return [e, t];
        }
      };
      function vr(t, e) {
        return (0, T.Z)({}, t, e);
      }
      const xr = {
        assignWithDepth: De,
        wrapLabel: cr,
        calculateTextHeight: ur,
        calculateTextWidth: fr,
        calculateTextDimensions: dr,
        cleanAndMerge: vr,
        detectInit: Pe,
        detectDirective: Re,
        isSubstringInArray: He,
        interpolateToCurve: Ye,
        calcLabelPosition: Ke,
        calcCardinalityPosition: tr,
        calcTerminalLabelPosition: er,
        formatUrl: Ue,
        getStylesFromArray: rr,
        generateId: nr,
        random: sr,
        runFunc: Ve,
        entityDecode: mr,
        insertTitle: Cr,
        parseFontSize: br,
        InitIDGenerator: pr,
      };
      const kr = function (t) {
        let e = t;
        e = e.replace(/style.*:\S*#.*;/g, function (t) {
          return t.substring(0, t.length - 1);
        });
        e = e.replace(/classDef.*:\S*#.*;/g, function (t) {
          return t.substring(0, t.length - 1);
        });
        e = e.replace(/#\w+;/g, function (t) {
          const e = t.substring(1, t.length - 1);
          const r = /^\+?\d+$/.test(e);
          if (r) {
            return "ﬂ°°" + e + "¶ß";
          } else {
            return "ﬂ°" + e + "¶ß";
          }
        });
        return e;
      };
      const Tr = function (t) {
        return t.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
      };
      const _r = "10.7.0";
      const wr = Object.freeze(we);
      let Sr = De({}, wr);
      let Br;
      let Fr = [];
      let Ar = De({}, wr);
      const Lr = (t, e) => {
        let r = De({}, t);
        let i = {};
        for (const n of e) {
          zr(n);
          i = De(i, n);
        }
        r = De(r, i);
        if (i.theme && i.theme in ve) {
          const t = De({}, Br);
          const e = De(t.themeVariables || {}, i.themeVariables);
          if (r.theme && r.theme in ve) {
            r.themeVariables = ve[r.theme].getThemeVariables(e);
          }
        }
        Ar = r;
        Rr(Ar);
        return Ar;
      };
      const Zr = (t) => {
        Sr = De({}, wr);
        Sr = De(Sr, t);
        if (t.theme && ve[t.theme]) {
          Sr.themeVariables = ve[t.theme].getThemeVariables(t.themeVariables);
        }
        Lr(Sr, Fr);
        return Sr;
      };
      const Er = (t) => {
        Br = De({}, t);
      };
      const Mr = (t) => {
        Sr = De(Sr, t);
        Lr(Sr, Fr);
        return Sr;
      };
      const Or = () => De({}, Sr);
      const Ir = (t) => {
        Rr(t);
        De(Ar, t);
        return qr();
      };
      const qr = () => De({}, Ar);
      const zr = (t) => {
        if (!t) {
          return;
        }
        ["secure", ...(Sr.secure ?? [])].forEach((e) => {
          if (Object.hasOwn(t, e)) {
            Nt.debug(`Denied attempt to modify a secure key ${e}`, t[e]);
            delete t[e];
          }
        });
        Object.keys(t).forEach((e) => {
          if (e.startsWith("__")) {
            delete t[e];
          }
        });
        Object.keys(t).forEach((e) => {
          if (typeof t[e] === "string" && (t[e].includes("<") || t[e].includes(">") || t[e].includes("url(data:"))) {
            delete t[e];
          }
          if (typeof t[e] === "object") {
            zr(t[e]);
          }
        });
      };
      const Dr = (t) => {
        Se(t);
        if (t.fontFamily && (!t.themeVariables || !t.themeVariables.fontFamily)) {
          t.themeVariables = { fontFamily: t.fontFamily };
        }
        Fr.push(t);
        Lr(Sr, Fr);
      };
      const Nr = (t = Sr) => {
        Fr = [];
        Lr(t, Fr);
      };
      const jr = {
        LAZY_LOAD_DEPRECATED:
          "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead.",
      };
      const $r = {};
      const Pr = (t) => {
        if ($r[t]) {
          return;
        }
        Nt.warn(jr[t]);
        $r[t] = true;
      };
      const Rr = (t) => {
        if (!t) {
          return;
        }
        if (t.lazyLoadedDiagrams || t.loadExternalDiagramsAtStartup) {
          Pr("LAZY_LOAD_DEPRECATED");
        }
      };
      const Wr = "c4";
      const Hr = (t) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(t);
      const Yr = async () => {
        const { diagram: t } = await r.e(7629).then(r.bind(r, 57629));
        return { id: Wr, diagram: t };
      };
      const Ur = { id: Wr, detector: Hr, loader: Yr };
      const Vr = Ur;
      const Gr = "flowchart";
      const Xr = (t, e) => {
        var r, i;
        if (
          ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ||
          ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "elk"
        ) {
          return false;
        }
        return /^\s*graph/.test(t);
      };
      const Kr = async () => {
        const { diagram: t } = await Promise.all([r.e(6001), r.e(3711), r.e(7734), r.e(9395), r.e(1929), r.e(1166)]).then(r.bind(r, 31166));
        return { id: Gr, diagram: t };
      };
      const Qr = { id: Gr, detector: Xr, loader: Kr };
      const Jr = Qr;
      const ti = "flowchart-v2";
      const ei = (t, e) => {
        var r, i, n;
        if (
          ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "dagre-d3" ||
          ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "elk"
        ) {
          return false;
        }
        if (/^\s*graph/.test(t) && ((n = e == null ? void 0 : e.flowchart) == null ? void 0 : n.defaultRenderer) === "dagre-wrapper") {
          return true;
        }
        return /^\s*flowchart/.test(t);
      };
      const ri = async () => {
        const { diagram: t } = await Promise.all([r.e(6001), r.e(3711), r.e(7734), r.e(9395), r.e(1929), r.e(6436)]).then(r.bind(r, 76436));
        return { id: ti, diagram: t };
      };
      const ii = { id: ti, detector: ei, loader: ri };
      const ni = ii;
      const oi = "er";
      const si = (t) => /^\s*erDiagram/.test(t);
      const ai = async () => {
        const { diagram: t } = await Promise.all([r.e(6001), r.e(406)]).then(r.bind(r, 20406));
        return { id: oi, diagram: t };
      };
      const li = { id: oi, detector: si, loader: ai };
      const ci = li;
      const hi = "gitGraph";
      const ui = (t) => /^\s*gitGraph/.test(t);
      const fi = async () => {
        const { diagram: t } = await r.e(1917).then(r.bind(r, 21917));
        return { id: hi, diagram: t };
      };
      const di = { id: hi, detector: ui, loader: fi };
      const pi = di;
      const gi = "gantt";
      const mi = (t) => /^\s*gantt/.test(t);
      const yi = async () => {
        const { diagram: t } = await r.e(2755).then(r.bind(r, 72755));
        return { id: gi, diagram: t };
      };
      const Ci = { id: gi, detector: mi, loader: yi };
      const bi = Ci;
      const vi = "info";
      const xi = (t) => /^\s*info/.test(t);
      const ki = async () => {
        const { diagram: t } = await r.e(8152).then(r.bind(r, 8152));
        return { id: vi, diagram: t };
      };
      const Ti = { id: vi, detector: xi, loader: ki };
      const _i = "pie";
      const wi = (t) => /^\s*pie/.test(t);
      const Si = async () => {
        const { diagram: t } = await r.e(4086).then(r.bind(r, 54086));
        return { id: _i, diagram: t };
      };
      const Bi = { id: _i, detector: wi, loader: Si };
      const Fi = "quadrantChart";
      const Ai = (t) => /^\s*quadrantChart/.test(t);
      const Li = async () => {
        const { diagram: t } = await r.e(6898).then(r.bind(r, 66898));
        return { id: Fi, diagram: t };
      };
      const Zi = { id: Fi, detector: Ai, loader: Li };
      const Ei = Zi;
      const Mi = "xychart";
      const Oi = (t) => /^\s*xychart-beta/.test(t);
      const Ii = async () => {
        const { diagram: t } = await Promise.all([r.e(3711), r.e(9440)]).then(r.bind(r, 89440));
        return { id: Mi, diagram: t };
      };
      const qi = { id: Mi, detector: Oi, loader: Ii };
      const zi = qi;
      const Di = "requirement";
      const Ni = (t) => /^\s*requirement(Diagram)?/.test(t);
      const ji = async () => {
        const { diagram: t } = await Promise.all([r.e(6001), r.e(881)]).then(r.bind(r, 40881));
        return { id: Di, diagram: t };
      };
      const $i = { id: Di, detector: Ni, loader: ji };
      const Pi = $i;
      const Ri = "sequence";
      const Wi = (t) => /^\s*sequenceDiagram/.test(t);
      const Hi = async () => {
        const { diagram: t } = await r.e(9984).then(r.bind(r, 89984));
        return { id: Ri, diagram: t };
      };
      const Yi = { id: Ri, detector: Wi, loader: Hi };
      const Ui = Yi;
      const Vi = "class";
      const Gi = (t, e) => {
        var r;
        if (((r = e == null ? void 0 : e.class) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper") {
          return false;
        }
        return /^\s*classDiagram/.test(t);
      };
      const Xi = async () => {
        const { diagram: t } = await Promise.all([r.e(6001), r.e(6778), r.e(2579)]).then(r.bind(r, 52579));
        return { id: Vi, diagram: t };
      };
      const Ki = { id: Vi, detector: Gi, loader: Xi };
      const Qi = Ki;
      const Ji = "classDiagram";
      const tn = (t, e) => {
        var r;
        if (/^\s*classDiagram/.test(t) && ((r = e == null ? void 0 : e.class) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper") {
          return true;
        }
        return /^\s*classDiagram-v2/.test(t);
      };
      const en = async () => {
        const { diagram: t } = await Promise.all([r.e(6001), r.e(3711), r.e(7734), r.e(9395), r.e(6778), r.e(4765)]).then(r.bind(r, 44765));
        return { id: Ji, diagram: t };
      };
      const rn = { id: Ji, detector: tn, loader: en };
      const nn = rn;
      const on = "state";
      const sn = (t, e) => {
        var r;
        if (((r = e == null ? void 0 : e.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper") {
          return false;
        }
        return /^\s*stateDiagram/.test(t);
      };
      const an = async () => {
        const { diagram: t } = await Promise.all([r.e(6001), r.e(1760), r.e(5794)]).then(r.bind(r, 75794));
        return { id: on, diagram: t };
      };
      const ln = { id: on, detector: sn, loader: an };
      const cn = ln;
      const hn = "stateDiagram";
      const un = (t, e) => {
        var r;
        if (/^\s*stateDiagram-v2/.test(t)) {
          return true;
        }
        if (/^\s*stateDiagram/.test(t) && ((r = e == null ? void 0 : e.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper") {
          return true;
        }
        return false;
      };
      const fn = async () => {
        const { diagram: t } = await Promise.all([r.e(6001), r.e(3711), r.e(7734), r.e(9395), r.e(1760), r.e(2551)]).then(r.bind(r, 62551));
        return { id: hn, diagram: t };
      };
      const dn = { id: hn, detector: un, loader: fn };
      const pn = dn;
      const gn = "journey";
      const mn = (t) => /^\s*journey/.test(t);
      const yn = async () => {
        const { diagram: t } = await r.e(2727).then(r.bind(r, 62727));
        return { id: gn, diagram: t };
      };
      const Cn = { id: gn, detector: mn, loader: yn };
      const bn = Cn;
      const vn = function (t, e) {
        for (let r of e) {
          t.attr(r[0], r[1]);
        }
      };
      const xn = function (t, e, r) {
        let i = new Map();
        if (r) {
          i.set("width", "100%");
          i.set("style", `max-width: ${e}px;`);
        } else {
          i.set("height", t);
          i.set("width", e);
        }
        return i;
      };
      const kn = function (t, e, r, i) {
        const n = xn(e, r, i);
        vn(t, n);
      };
      const Tn = function (t, e, r, i) {
        const n = e.node().getBBox();
        const o = n.width;
        const s = n.height;
        Nt.info(`SVG bounds: ${o}x${s}`, n);
        let a = 0;
        let l = 0;
        Nt.info(`Graph bounds: ${a}x${l}`, t);
        a = o + r * 2;
        l = s + r * 2;
        Nt.info(`Calculated bounds: ${a}x${l}`);
        kn(e, l, a, i);
        const c = `${n.x - r} ${n.y - r} ${n.width + 2 * r} ${n.height + 2 * r}`;
        e.attr("viewBox", c);
      };
      const _n = {};
      const wn = (t, e, r) => {
        let i = "";
        if (t in _n && _n[t]) {
          i = _n[t](r);
        } else {
          Nt.warn(`No theme found for ${t}`);
        }
        return ` & {\n    font-family: ${r.fontFamily};\n    font-size: ${r.fontSize};\n    fill: ${r.textColor}\n  }\n\n  /* Classes common for multiple diagrams */\n\n  & .error-icon {\n    fill: ${r.errorBkgColor};\n  }\n  & .error-text {\n    fill: ${r.errorTextColor};\n    stroke: ${r.errorTextColor};\n  }\n\n  & .edge-thickness-normal {\n    stroke-width: 2px;\n  }\n  & .edge-thickness-thick {\n    stroke-width: 3.5px\n  }\n  & .edge-pattern-solid {\n    stroke-dasharray: 0;\n  }\n\n  & .edge-pattern-dashed{\n    stroke-dasharray: 3;\n  }\n  .edge-pattern-dotted {\n    stroke-dasharray: 2;\n  }\n\n  & .marker {\n    fill: ${r.lineColor};\n    stroke: ${r.lineColor};\n  }\n  & .marker.cross {\n    stroke: ${r.lineColor};\n  }\n\n  & svg {\n    font-family: ${r.fontFamily};\n    font-size: ${r.fontSize};\n  }\n\n  ${i}\n\n  ${e}\n`;
      };
      const Sn = (t, e) => {
        if (e !== void 0) {
          _n[t] = e;
        }
      };
      const Bn = wn;
      let Fn = "";
      let An = "";
      let Ln = "";
      const Zn = (t) => Yt(t, qr());
      const En = () => {
        Fn = "";
        Ln = "";
        An = "";
      };
      const Mn = (t) => {
        Fn = Zn(t).replace(/^\s+/g, "");
      };
      const On = () => Fn;
      const In = (t) => {
        Ln = Zn(t).replace(/\n\s+/g, "\n");
      };
      const qn = () => Ln;
      const zn = (t) => {
        An = Zn(t);
      };
      const Dn = () => An;
      const Nn = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            clear: En,
            getAccDescription: qn,
            getAccTitle: On,
            getDiagramTitle: Dn,
            setAccDescription: In,
            setAccTitle: Mn,
            setDiagramTitle: zn,
          },
          Symbol.toStringTag,
          { value: "Module" }
        )
      );
      const jn = Nt;
      const $n = jt;
      const Pn = qr;
      const Rn = Ir;
      const Wn = wr;
      const Hn = (t) => Yt(t, Pn());
      const Yn = Tn;
      const Un = () => Nn;
      const Vn = {};
      const Gn = (t, e, r) => {
        var i;
        if (Vn[t]) {
          throw new Error(`Diagram ${t} already registered.`);
        }
        Vn[t] = e;
        if (r) {
          Ie(t, r);
        }
        Sn(t, e.styles);
        (i = e.injectUtils) == null ? void 0 : i.call(e, jn, $n, Pn, Hn, Yn, Un(), () => {});
      };
      const Xn = (t) => {
        if (t in Vn) {
          return Vn[t];
        }
        throw new Kn(t);
      };
      class Kn extends Error {
        constructor(t) {
          super(`Diagram ${t} not found.`);
        }
      }
      const Qn = (t) => {
        var e;
        const { securityLevel: r } = Pn();
        let i = (0, a.Ys)("body");
        if (r === "sandbox") {
          const r = (0, a.Ys)(`#i${t}`);
          const n = ((e = r.node()) == null ? void 0 : e.contentDocument) ?? document;
          i = (0, a.Ys)(n.body);
        }
        const n = i.select(`#${t}`);
        return n;
      };
      const Jn = (t, e, r) => {
        Nt.debug("renering svg for syntax error\n");
        const i = Qn(e);
        i.attr("viewBox", "0 0 2412 512");
        kn(i, 100, 512, true);
        const n = i.append("g");
        n.append("path")
          .attr("class", "error-icon")
          .attr(
            "d",
            "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
          );
        n.append("path")
          .attr("class", "error-icon")
          .attr(
            "d",
            "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
          );
        n.append("path")
          .attr("class", "error-icon")
          .attr(
            "d",
            "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
          );
        n.append("path")
          .attr("class", "error-icon")
          .attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z");
        n.append("path")
          .attr("class", "error-icon")
          .attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z");
        n.append("path")
          .attr("class", "error-icon")
          .attr(
            "d",
            "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
          );
        n.append("text")
          .attr("class", "error-text")
          .attr("x", 1440)
          .attr("y", 250)
          .attr("font-size", "150px")
          .style("text-anchor", "middle")
          .text("Syntax error in text");
        n.append("text")
          .attr("class", "error-text")
          .attr("x", 1250)
          .attr("y", 400)
          .attr("font-size", "100px")
          .style("text-anchor", "middle")
          .text(`mermaid version ${r}`);
      };
      const to = { draw: Jn };
      const eo = to;
      const ro = { db: {}, renderer: to, parser: { parser: { yy: {} }, parse: () => {} } };
      const io = ro;
      const no = "flowchart-elk";
      const oo = (t, e) => {
        var r;
        if (
          /^\s*flowchart-elk/.test(t) ||
          (/^\s*flowchart|graph/.test(t) && ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk")
        ) {
          return true;
        }
        return false;
      };
      const so = async () => {
        const { diagram: t } = await Promise.all([r.e(3711), r.e(7734), r.e(1929), r.e(8738)]).then(r.bind(r, 68738));
        return { id: no, diagram: t };
      };
      const ao = { id: no, detector: oo, loader: so };
      const lo = ao;
      const co = "timeline";
      const ho = (t) => /^\s*timeline/.test(t);
      const uo = async () => {
        const { diagram: t } = await r.e(526).then(r.bind(r, 50526));
        return { id: co, diagram: t };
      };
      const fo = { id: co, detector: ho, loader: uo };
      const po = fo;
      const go = "mindmap";
      const mo = (t) => /^\s*mindmap/.test(t);
      const yo = async () => {
        const { diagram: t } = await Promise.all([r.e(3711), r.e(7426)]).then(r.bind(r, 11347));
        return { id: go, diagram: t };
      };
      const Co = { id: go, detector: mo, loader: yo };
      const bo = Co;
      const vo = "sankey";
      const xo = (t) => /^\s*sankey-beta/.test(t);
      const ko = async () => {
        const { diagram: t } = await r.e(7946).then(r.bind(r, 87946));
        return { id: vo, diagram: t };
      };
      const To = { id: vo, detector: xo, loader: ko };
      const _o = To;
      let wo = false;
      const So = () => {
        if (wo) {
          return;
        }
        wo = true;
        Gn("error", io, (t) => t.toLowerCase().trim() === "error");
        Gn(
          "---",
          {
            db: { clear: () => {} },
            styles: {},
            renderer: { draw: () => {} },
            parser: {
              parser: { yy: {} },
              parse: () => {
                throw new Error(
                  "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
                );
              },
            },
            init: () => null,
          },
          (t) => t.toLowerCase().trimStart().startsWith("---")
        );
        Oe(Vr, nn, Qi, ci, bi, Ti, Bi, Pi, Ui, lo, ni, Jr, bo, po, pi, pn, cn, bn, Ei, _o, zi);
      };
      class Bo {
        constructor(t, e = {}) {
          this.text = t;
          this.metadata = e;
          this.type = "graph";
          this.text = kr(t);
          this.text += "\n";
          const r = qr();
          try {
            this.type = Me(t, r);
          } catch (n) {
            this.type = "error";
            this.detectError = n;
          }
          const i = Xn(this.type);
          Nt.debug("Type " + this.type);
          this.db = i.db;
          this.renderer = i.renderer;
          this.parser = i.parser;
          this.parser.parser.yy = this.db;
          this.init = i.init;
          this.parse();
        }
        parse() {
          var t, e, r, i, n;
          if (this.detectError) {
            throw this.detectError;
          }
          (e = (t = this.db).clear) == null ? void 0 : e.call(t);
          const o = qr();
          (r = this.init) == null ? void 0 : r.call(this, o);
          if (this.metadata.title) {
            (n = (i = this.db).setDiagramTitle) == null ? void 0 : n.call(i, this.metadata.title);
          }
          this.parser.parse(this.text);
        }
        async render(t, e) {
          await this.renderer.draw(this.text, t, e, this);
        }
        getParser() {
          return this.parser;
        }
        getType() {
          return this.type;
        }
      }
      const Fo = async (t, e = {}) => {
        const r = Me(t, qr());
        try {
          Xn(r);
        } catch (i) {
          const t = qe(r);
          if (!t) {
            throw new Ze(`Diagram ${r} not found.`);
          }
          const { id: e, diagram: n } = await t();
          Gn(e, n);
        }
        return new Bo(t, e);
      };
      let Ao = [];
      const Lo = (t) => {
        Ao.push(t);
      };
      const Zo = () => {
        Ao.forEach((t) => {
          t();
        });
        Ao = [];
      };
      const Eo = "graphics-document document";
      function Mo(t, e) {
        t.attr("role", Eo);
        if (e !== "") {
          t.attr("aria-roledescription", e);
        }
      }
      function Oo(t, e, r, i) {
        if (t.insert === void 0) {
          return;
        }
        if (r) {
          const e = `chart-desc-${i}`;
          t.attr("aria-describedby", e);
          t.insert("desc", ":first-child").attr("id", e).text(r);
        }
        if (e) {
          const r = `chart-title-${i}`;
          t.attr("aria-labelledby", r);
          t.insert("title", ":first-child").attr("id", r).text(e);
        }
      }
      const Io = (t) => t.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart();
      function qo(t) {
        return typeof t === "undefined" || t === null;
      }
      function zo(t) {
        return typeof t === "object" && t !== null;
      }
      function Do(t) {
        if (Array.isArray(t)) return t;
        else if (qo(t)) return [];
        return [t];
      }
      function No(t, e) {
        var r, i, n, o;
        if (e) {
          o = Object.keys(e);
          for (r = 0, i = o.length; r < i; r += 1) {
            n = o[r];
            t[n] = e[n];
          }
        }
        return t;
      }
      function jo(t, e) {
        var r = "",
          i;
        for (i = 0; i < e; i += 1) {
          r += t;
        }
        return r;
      }
      function $o(t) {
        return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
      }
      var Po = qo;
      var Ro = zo;
      var Wo = Do;
      var Ho = jo;
      var Yo = $o;
      var Uo = No;
      var Vo = { isNothing: Po, isObject: Ro, toArray: Wo, repeat: Ho, isNegativeZero: Yo, extend: Uo };
      function Go(t, e) {
        var r = "",
          i = t.reason || "(unknown reason)";
        if (!t.mark) return i;
        if (t.mark.name) {
          r += 'in "' + t.mark.name + '" ';
        }
        r += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")";
        if (!e && t.mark.snippet) {
          r += "\n\n" + t.mark.snippet;
        }
        return i + " " + r;
      }
      function Xo(t, e) {
        Error.call(this);
        this.name = "YAMLException";
        this.reason = t;
        this.mark = e;
        this.message = Go(this, false);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        } else {
          this.stack = new Error().stack || "";
        }
      }
      Xo.prototype = Object.create(Error.prototype);
      Xo.prototype.constructor = Xo;
      Xo.prototype.toString = function t(e) {
        return this.name + ": " + Go(this, e);
      };
      var Ko = Xo;
      function Qo(t, e, r, i, n) {
        var o = "";
        var s = "";
        var a = Math.floor(n / 2) - 1;
        if (i - e > a) {
          o = " ... ";
          e = i - a + o.length;
        }
        if (r - i > a) {
          s = " ...";
          r = i + a - s.length;
        }
        return { str: o + t.slice(e, r).replace(/\t/g, "→") + s, pos: i - e + o.length };
      }
      function Jo(t, e) {
        return Vo.repeat(" ", e - t.length) + t;
      }
      function ts(t, e) {
        e = Object.create(e || null);
        if (!t.buffer) return null;
        if (!e.maxLength) e.maxLength = 79;
        if (typeof e.indent !== "number") e.indent = 1;
        if (typeof e.linesBefore !== "number") e.linesBefore = 3;
        if (typeof e.linesAfter !== "number") e.linesAfter = 2;
        var r = /\r?\n|\r|\0/g;
        var i = [0];
        var n = [];
        var o;
        var s = -1;
        while ((o = r.exec(t.buffer))) {
          n.push(o.index);
          i.push(o.index + o[0].length);
          if (t.position <= o.index && s < 0) {
            s = i.length - 2;
          }
        }
        if (s < 0) s = i.length - 1;
        var a = "",
          l,
          c;
        var h = Math.min(t.line + e.linesAfter, n.length).toString().length;
        var u = e.maxLength - (e.indent + h + 3);
        for (l = 1; l <= e.linesBefore; l++) {
          if (s - l < 0) break;
          c = Qo(t.buffer, i[s - l], n[s - l], t.position - (i[s] - i[s - l]), u);
          a = Vo.repeat(" ", e.indent) + Jo((t.line - l + 1).toString(), h) + " | " + c.str + "\n" + a;
        }
        c = Qo(t.buffer, i[s], n[s], t.position, u);
        a += Vo.repeat(" ", e.indent) + Jo((t.line + 1).toString(), h) + " | " + c.str + "\n";
        a += Vo.repeat("-", e.indent + h + 3 + c.pos) + "^\n";
        for (l = 1; l <= e.linesAfter; l++) {
          if (s + l >= n.length) break;
          c = Qo(t.buffer, i[s + l], n[s + l], t.position - (i[s] - i[s + l]), u);
          a += Vo.repeat(" ", e.indent) + Jo((t.line + l + 1).toString(), h) + " | " + c.str + "\n";
        }
        return a.replace(/\n$/, "");
      }
      var es = ts;
      var rs = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"];
      var is = ["scalar", "sequence", "mapping"];
      function ns(t) {
        var e = {};
        if (t !== null) {
          Object.keys(t).forEach(function (r) {
            t[r].forEach(function (t) {
              e[String(t)] = r;
            });
          });
        }
        return e;
      }
      function os(t, e) {
        e = e || {};
        Object.keys(e).forEach(function (e) {
          if (rs.indexOf(e) === -1) {
            throw new Ko('Unknown option "' + e + '" is met in definition of "' + t + '" YAML type.');
          }
        });
        this.options = e;
        this.tag = t;
        this.kind = e["kind"] || null;
        this.resolve =
          e["resolve"] ||
          function () {
            return true;
          };
        this.construct =
          e["construct"] ||
          function (t) {
            return t;
          };
        this.instanceOf = e["instanceOf"] || null;
        this.predicate = e["predicate"] || null;
        this.represent = e["represent"] || null;
        this.representName = e["representName"] || null;
        this.defaultStyle = e["defaultStyle"] || null;
        this.multi = e["multi"] || false;
        this.styleAliases = ns(e["styleAliases"] || null);
        if (is.indexOf(this.kind) === -1) {
          throw new Ko('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
        }
      }
      var ss = os;
      function as(t, e) {
        var r = [];
        t[e].forEach(function (t) {
          var e = r.length;
          r.forEach(function (r, i) {
            if (r.tag === t.tag && r.kind === t.kind && r.multi === t.multi) {
              e = i;
            }
          });
          r[e] = t;
        });
        return r;
      }
      function ls() {
        var t = { scalar: {}, sequence: {}, mapping: {}, fallback: {}, multi: { scalar: [], sequence: [], mapping: [], fallback: [] } },
          e,
          r;
        function i(e) {
          if (e.multi) {
            t.multi[e.kind].push(e);
            t.multi["fallback"].push(e);
          } else {
            t[e.kind][e.tag] = t["fallback"][e.tag] = e;
          }
        }
        for (e = 0, r = arguments.length; e < r; e += 1) {
          arguments[e].forEach(i);
        }
        return t;
      }
      function cs(t) {
        return this.extend(t);
      }
      cs.prototype.extend = function t(e) {
        var r = [];
        var i = [];
        if (e instanceof ss) {
          i.push(e);
        } else if (Array.isArray(e)) {
          i = i.concat(e);
        } else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit))) {
          if (e.implicit) r = r.concat(e.implicit);
          if (e.explicit) i = i.concat(e.explicit);
        } else {
          throw new Ko("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
        }
        r.forEach(function (t) {
          if (!(t instanceof ss)) {
            throw new Ko("Specified list of YAML types (or a single Type object) contains a non-Type object.");
          }
          if (t.loadKind && t.loadKind !== "scalar") {
            throw new Ko("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
          }
          if (t.multi) {
            throw new Ko("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
          }
        });
        i.forEach(function (t) {
          if (!(t instanceof ss)) {
            throw new Ko("Specified list of YAML types (or a single Type object) contains a non-Type object.");
          }
        });
        var n = Object.create(cs.prototype);
        n.implicit = (this.implicit || []).concat(r);
        n.explicit = (this.explicit || []).concat(i);
        n.compiledImplicit = as(n, "implicit");
        n.compiledExplicit = as(n, "explicit");
        n.compiledTypeMap = ls(n.compiledImplicit, n.compiledExplicit);
        return n;
      };
      var hs = cs;
      var us = new ss("tag:yaml.org,2002:str", {
        kind: "scalar",
        construct: function (t) {
          return t !== null ? t : "";
        },
      });
      var fs = new ss("tag:yaml.org,2002:seq", {
        kind: "sequence",
        construct: function (t) {
          return t !== null ? t : [];
        },
      });
      var ds = new ss("tag:yaml.org,2002:map", {
        kind: "mapping",
        construct: function (t) {
          return t !== null ? t : {};
        },
      });
      var ps = new hs({ explicit: [us, fs, ds] });
      function gs(t) {
        if (t === null) return true;
        var e = t.length;
        return (e === 1 && t === "~") || (e === 4 && (t === "null" || t === "Null" || t === "NULL"));
      }
      function ms() {
        return null;
      }
      function ys(t) {
        return t === null;
      }
      var Cs = new ss("tag:yaml.org,2002:null", {
        kind: "scalar",
        resolve: gs,
        construct: ms,
        predicate: ys,
        represent: {
          canonical: function () {
            return "~";
          },
          lowercase: function () {
            return "null";
          },
          uppercase: function () {
            return "NULL";
          },
          camelcase: function () {
            return "Null";
          },
          empty: function () {
            return "";
          },
        },
        defaultStyle: "lowercase",
      });
      function bs(t) {
        if (t === null) return false;
        var e = t.length;
        return (e === 4 && (t === "true" || t === "True" || t === "TRUE")) || (e === 5 && (t === "false" || t === "False" || t === "FALSE"));
      }
      function vs(t) {
        return t === "true" || t === "True" || t === "TRUE";
      }
      function xs(t) {
        return Object.prototype.toString.call(t) === "[object Boolean]";
      }
      var ks = new ss("tag:yaml.org,2002:bool", {
        kind: "scalar",
        resolve: bs,
        construct: vs,
        predicate: xs,
        represent: {
          lowercase: function (t) {
            return t ? "true" : "false";
          },
          uppercase: function (t) {
            return t ? "TRUE" : "FALSE";
          },
          camelcase: function (t) {
            return t ? "True" : "False";
          },
        },
        defaultStyle: "lowercase",
      });
      function Ts(t) {
        return (48 <= t && t <= 57) || (65 <= t && t <= 70) || (97 <= t && t <= 102);
      }
      function _s(t) {
        return 48 <= t && t <= 55;
      }
      function ws(t) {
        return 48 <= t && t <= 57;
      }
      function Ss(t) {
        if (t === null) return false;
        var e = t.length,
          r = 0,
          i = false,
          n;
        if (!e) return false;
        n = t[r];
        if (n === "-" || n === "+") {
          n = t[++r];
        }
        if (n === "0") {
          if (r + 1 === e) return true;
          n = t[++r];
          if (n === "b") {
            r++;
            for (; r < e; r++) {
              n = t[r];
              if (n === "_") continue;
              if (n !== "0" && n !== "1") return false;
              i = true;
            }
            return i && n !== "_";
          }
          if (n === "x") {
            r++;
            for (; r < e; r++) {
              n = t[r];
              if (n === "_") continue;
              if (!Ts(t.charCodeAt(r))) return false;
              i = true;
            }
            return i && n !== "_";
          }
          if (n === "o") {
            r++;
            for (; r < e; r++) {
              n = t[r];
              if (n === "_") continue;
              if (!_s(t.charCodeAt(r))) return false;
              i = true;
            }
            return i && n !== "_";
          }
        }
        if (n === "_") return false;
        for (; r < e; r++) {
          n = t[r];
          if (n === "_") continue;
          if (!ws(t.charCodeAt(r))) {
            return false;
          }
          i = true;
        }
        if (!i || n === "_") return false;
        return true;
      }
      function Bs(t) {
        var e = t,
          r = 1,
          i;
        if (e.indexOf("_") !== -1) {
          e = e.replace(/_/g, "");
        }
        i = e[0];
        if (i === "-" || i === "+") {
          if (i === "-") r = -1;
          e = e.slice(1);
          i = e[0];
        }
        if (e === "0") return 0;
        if (i === "0") {
          if (e[1] === "b") return r * parseInt(e.slice(2), 2);
          if (e[1] === "x") return r * parseInt(e.slice(2), 16);
          if (e[1] === "o") return r * parseInt(e.slice(2), 8);
        }
        return r * parseInt(e, 10);
      }
      function Fs(t) {
        return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !Vo.isNegativeZero(t);
      }
      var As = new ss("tag:yaml.org,2002:int", {
        kind: "scalar",
        resolve: Ss,
        construct: Bs,
        predicate: Fs,
        represent: {
          binary: function (t) {
            return t >= 0 ? "0b" + t.toString(2) : "-0b" + t.toString(2).slice(1);
          },
          octal: function (t) {
            return t >= 0 ? "0o" + t.toString(8) : "-0o" + t.toString(8).slice(1);
          },
          decimal: function (t) {
            return t.toString(10);
          },
          hexadecimal: function (t) {
            return t >= 0 ? "0x" + t.toString(16).toUpperCase() : "-0x" + t.toString(16).toUpperCase().slice(1);
          },
        },
        defaultStyle: "decimal",
        styleAliases: { binary: [2, "bin"], octal: [8, "oct"], decimal: [10, "dec"], hexadecimal: [16, "hex"] },
      });
      var Ls = new RegExp(
        "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
      );
      function Zs(t) {
        if (t === null) return false;
        if (!Ls.test(t) || t[t.length - 1] === "_") {
          return false;
        }
        return true;
      }
      function Es(t) {
        var e, r;
        e = t.replace(/_/g, "").toLowerCase();
        r = e[0] === "-" ? -1 : 1;
        if ("+-".indexOf(e[0]) >= 0) {
          e = e.slice(1);
        }
        if (e === ".inf") {
          return r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
        } else if (e === ".nan") {
          return NaN;
        }
        return r * parseFloat(e, 10);
      }
      var Ms = /^[-+]?[0-9]+e/;
      function Os(t, e) {
        var r;
        if (isNaN(t)) {
          switch (e) {
            case "lowercase":
              return ".nan";
            case "uppercase":
              return ".NAN";
            case "camelcase":
              return ".NaN";
          }
        } else if (Number.POSITIVE_INFINITY === t) {
          switch (e) {
            case "lowercase":
              return ".inf";
            case "uppercase":
              return ".INF";
            case "camelcase":
              return ".Inf";
          }
        } else if (Number.NEGATIVE_INFINITY === t) {
          switch (e) {
            case "lowercase":
              return "-.inf";
            case "uppercase":
              return "-.INF";
            case "camelcase":
              return "-.Inf";
          }
        } else if (Vo.isNegativeZero(t)) {
          return "-0.0";
        }
        r = t.toString(10);
        return Ms.test(r) ? r.replace("e", ".e") : r;
      }
      function Is(t) {
        return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || Vo.isNegativeZero(t));
      }
      var qs = new ss("tag:yaml.org,2002:float", {
        kind: "scalar",
        resolve: Zs,
        construct: Es,
        predicate: Is,
        represent: Os,
        defaultStyle: "lowercase",
      });
      var zs = ps.extend({ implicit: [Cs, ks, As, qs] });
      var Ds = zs;
      var Ns = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
      var js = new RegExp(
        "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
      );
      function $s(t) {
        if (t === null) return false;
        if (Ns.exec(t) !== null) return true;
        if (js.exec(t) !== null) return true;
        return false;
      }
      function Ps(t) {
        var e,
          r,
          i,
          n,
          o,
          s,
          a,
          l = 0,
          c = null,
          h,
          u,
          f;
        e = Ns.exec(t);
        if (e === null) e = js.exec(t);
        if (e === null) throw new Error("Date resolve error");
        r = +e[1];
        i = +e[2] - 1;
        n = +e[3];
        if (!e[4]) {
          return new Date(Date.UTC(r, i, n));
        }
        o = +e[4];
        s = +e[5];
        a = +e[6];
        if (e[7]) {
          l = e[7].slice(0, 3);
          while (l.length < 3) {
            l += "0";
          }
          l = +l;
        }
        if (e[9]) {
          h = +e[10];
          u = +(e[11] || 0);
          c = (h * 60 + u) * 6e4;
          if (e[9] === "-") c = -c;
        }
        f = new Date(Date.UTC(r, i, n, o, s, a, l));
        if (c) f.setTime(f.getTime() - c);
        return f;
      }
      function Rs(t) {
        return t.toISOString();
      }
      var Ws = new ss("tag:yaml.org,2002:timestamp", { kind: "scalar", resolve: $s, construct: Ps, instanceOf: Date, represent: Rs });
      function Hs(t) {
        return t === "<<" || t === null;
      }
      var Ys = new ss("tag:yaml.org,2002:merge", { kind: "scalar", resolve: Hs });
      var Us = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
      function Vs(t) {
        if (t === null) return false;
        var e,
          r,
          i = 0,
          n = t.length,
          o = Us;
        for (r = 0; r < n; r++) {
          e = o.indexOf(t.charAt(r));
          if (e > 64) continue;
          if (e < 0) return false;
          i += 6;
        }
        return i % 8 === 0;
      }
      function Gs(t) {
        var e,
          r,
          i = t.replace(/[\r\n=]/g, ""),
          n = i.length,
          o = Us,
          s = 0,
          a = [];
        for (e = 0; e < n; e++) {
          if (e % 4 === 0 && e) {
            a.push((s >> 16) & 255);
            a.push((s >> 8) & 255);
            a.push(s & 255);
          }
          s = (s << 6) | o.indexOf(i.charAt(e));
        }
        r = (n % 4) * 6;
        if (r === 0) {
          a.push((s >> 16) & 255);
          a.push((s >> 8) & 255);
          a.push(s & 255);
        } else if (r === 18) {
          a.push((s >> 10) & 255);
          a.push((s >> 2) & 255);
        } else if (r === 12) {
          a.push((s >> 4) & 255);
        }
        return new Uint8Array(a);
      }
      function Xs(t) {
        var e = "",
          r = 0,
          i,
          n,
          o = t.length,
          s = Us;
        for (i = 0; i < o; i++) {
          if (i % 3 === 0 && i) {
            e += s[(r >> 18) & 63];
            e += s[(r >> 12) & 63];
            e += s[(r >> 6) & 63];
            e += s[r & 63];
          }
          r = (r << 8) + t[i];
        }
        n = o % 3;
        if (n === 0) {
          e += s[(r >> 18) & 63];
          e += s[(r >> 12) & 63];
          e += s[(r >> 6) & 63];
          e += s[r & 63];
        } else if (n === 2) {
          e += s[(r >> 10) & 63];
          e += s[(r >> 4) & 63];
          e += s[(r << 2) & 63];
          e += s[64];
        } else if (n === 1) {
          e += s[(r >> 2) & 63];
          e += s[(r << 4) & 63];
          e += s[64];
          e += s[64];
        }
        return e;
      }
      function Ks(t) {
        return Object.prototype.toString.call(t) === "[object Uint8Array]";
      }
      var Qs = new ss("tag:yaml.org,2002:binary", { kind: "scalar", resolve: Vs, construct: Gs, predicate: Ks, represent: Xs });
      var Js = Object.prototype.hasOwnProperty;
      var ta = Object.prototype.toString;
      function ea(t) {
        if (t === null) return true;
        var e = [],
          r,
          i,
          n,
          o,
          s,
          a = t;
        for (r = 0, i = a.length; r < i; r += 1) {
          n = a[r];
          s = false;
          if (ta.call(n) !== "[object Object]") return false;
          for (o in n) {
            if (Js.call(n, o)) {
              if (!s) s = true;
              else return false;
            }
          }
          if (!s) return false;
          if (e.indexOf(o) === -1) e.push(o);
          else return false;
        }
        return true;
      }
      function ra(t) {
        return t !== null ? t : [];
      }
      var ia = new ss("tag:yaml.org,2002:omap", { kind: "sequence", resolve: ea, construct: ra });
      var na = Object.prototype.toString;
      function oa(t) {
        if (t === null) return true;
        var e,
          r,
          i,
          n,
          o,
          s = t;
        o = new Array(s.length);
        for (e = 0, r = s.length; e < r; e += 1) {
          i = s[e];
          if (na.call(i) !== "[object Object]") return false;
          n = Object.keys(i);
          if (n.length !== 1) return false;
          o[e] = [n[0], i[n[0]]];
        }
        return true;
      }
      function sa(t) {
        if (t === null) return [];
        var e,
          r,
          i,
          n,
          o,
          s = t;
        o = new Array(s.length);
        for (e = 0, r = s.length; e < r; e += 1) {
          i = s[e];
          n = Object.keys(i);
          o[e] = [n[0], i[n[0]]];
        }
        return o;
      }
      var aa = new ss("tag:yaml.org,2002:pairs", { kind: "sequence", resolve: oa, construct: sa });
      var la = Object.prototype.hasOwnProperty;
      function ca(t) {
        if (t === null) return true;
        var e,
          r = t;
        for (e in r) {
          if (la.call(r, e)) {
            if (r[e] !== null) return false;
          }
        }
        return true;
      }
      function ha(t) {
        return t !== null ? t : {};
      }
      var ua = new ss("tag:yaml.org,2002:set", { kind: "mapping", resolve: ca, construct: ha });
      var fa = Ds.extend({ implicit: [Ws, Ys], explicit: [Qs, ia, aa, ua] });
      var da = Object.prototype.hasOwnProperty;
      var pa = 1;
      var ga = 2;
      var ma = 3;
      var ya = 4;
      var Ca = 1;
      var ba = 2;
      var va = 3;
      var xa = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
      var ka = /[\x85\u2028\u2029]/;
      var Ta = /[,\[\]\{\}]/;
      var _a = /^(?:!|!!|![a-z\-]+!)$/i;
      var wa = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
      function Sa(t) {
        return Object.prototype.toString.call(t);
      }
      function Ba(t) {
        return t === 10 || t === 13;
      }
      function Fa(t) {
        return t === 9 || t === 32;
      }
      function Aa(t) {
        return t === 9 || t === 32 || t === 10 || t === 13;
      }
      function La(t) {
        return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
      }
      function Za(t) {
        var e;
        if (48 <= t && t <= 57) {
          return t - 48;
        }
        e = t | 32;
        if (97 <= e && e <= 102) {
          return e - 97 + 10;
        }
        return -1;
      }
      function Ea(t) {
        if (t === 120) {
          return 2;
        }
        if (t === 117) {
          return 4;
        }
        if (t === 85) {
          return 8;
        }
        return 0;
      }
      function Ma(t) {
        if (48 <= t && t <= 57) {
          return t - 48;
        }
        return -1;
      }
      function Oa(t) {
        return t === 48
          ? "\0"
          : t === 97
            ? ""
            : t === 98
              ? "\b"
              : t === 116
                ? "\t"
                : t === 9
                  ? "\t"
                  : t === 110
                    ? "\n"
                    : t === 118
                      ? "\v"
                      : t === 102
                        ? "\f"
                        : t === 114
                          ? "\r"
                          : t === 101
                            ? ""
                            : t === 32
                              ? " "
                              : t === 34
                                ? '"'
                                : t === 47
                                  ? "/"
                                  : t === 92
                                    ? "\\"
                                    : t === 78
                                      ? ""
                                      : t === 95
                                        ? " "
                                        : t === 76
                                          ? "\u2028"
                                          : t === 80
                                            ? "\u2029"
                                            : "";
      }
      function Ia(t) {
        if (t <= 65535) {
          return String.fromCharCode(t);
        }
        return String.fromCharCode(((t - 65536) >> 10) + 55296, ((t - 65536) & 1023) + 56320);
      }
      var qa = new Array(256);
      var za = new Array(256);
      for (var Da = 0; Da < 256; Da++) {
        qa[Da] = Oa(Da) ? 1 : 0;
        za[Da] = Oa(Da);
      }
      function Na(t, e) {
        this.input = t;
        this.filename = e["filename"] || null;
        this.schema = e["schema"] || fa;
        this.onWarning = e["onWarning"] || null;
        this.legacy = e["legacy"] || false;
        this.json = e["json"] || false;
        this.listener = e["listener"] || null;
        this.implicitTypes = this.schema.compiledImplicit;
        this.typeMap = this.schema.compiledTypeMap;
        this.length = t.length;
        this.position = 0;
        this.line = 0;
        this.lineStart = 0;
        this.lineIndent = 0;
        this.firstTabInLine = -1;
        this.documents = [];
      }
      function ja(t, e) {
        var r = { name: t.filename, buffer: t.input.slice(0, -1), position: t.position, line: t.line, column: t.position - t.lineStart };
        r.snippet = es(r);
        return new Ko(e, r);
      }
      function $a(t, e) {
        throw ja(t, e);
      }
      function Pa(t, e) {
        if (t.onWarning) {
          t.onWarning.call(null, ja(t, e));
        }
      }
      var Ra = {
        YAML: function t(e, r, i) {
          var n, o, s;
          if (e.version !== null) {
            $a(e, "duplication of %YAML directive");
          }
          if (i.length !== 1) {
            $a(e, "YAML directive accepts exactly one argument");
          }
          n = /^([0-9]+)\.([0-9]+)$/.exec(i[0]);
          if (n === null) {
            $a(e, "ill-formed argument of the YAML directive");
          }
          o = parseInt(n[1], 10);
          s = parseInt(n[2], 10);
          if (o !== 1) {
            $a(e, "unacceptable YAML version of the document");
          }
          e.version = i[0];
          e.checkLineBreaks = s < 2;
          if (s !== 1 && s !== 2) {
            Pa(e, "unsupported YAML version of the document");
          }
        },
        TAG: function t(e, r, i) {
          var n, o;
          if (i.length !== 2) {
            $a(e, "TAG directive accepts exactly two arguments");
          }
          n = i[0];
          o = i[1];
          if (!_a.test(n)) {
            $a(e, "ill-formed tag handle (first argument) of the TAG directive");
          }
          if (da.call(e.tagMap, n)) {
            $a(e, 'there is a previously declared suffix for "' + n + '" tag handle');
          }
          if (!wa.test(o)) {
            $a(e, "ill-formed tag prefix (second argument) of the TAG directive");
          }
          try {
            o = decodeURIComponent(o);
          } catch (s) {
            $a(e, "tag prefix is malformed: " + o);
          }
          e.tagMap[n] = o;
        },
      };
      function Wa(t, e, r, i) {
        var n, o, s, a;
        if (e < r) {
          a = t.input.slice(e, r);
          if (i) {
            for (n = 0, o = a.length; n < o; n += 1) {
              s = a.charCodeAt(n);
              if (!(s === 9 || (32 <= s && s <= 1114111))) {
                $a(t, "expected valid JSON character");
              }
            }
          } else if (xa.test(a)) {
            $a(t, "the stream contains non-printable characters");
          }
          t.result += a;
        }
      }
      function Ha(t, e, r, i) {
        var n, o, s, a;
        if (!Vo.isObject(r)) {
          $a(t, "cannot merge mappings; the provided source object is unacceptable");
        }
        n = Object.keys(r);
        for (s = 0, a = n.length; s < a; s += 1) {
          o = n[s];
          if (!da.call(e, o)) {
            e[o] = r[o];
            i[o] = true;
          }
        }
      }
      function Ya(t, e, r, i, n, o, s, a, l) {
        var c, h;
        if (Array.isArray(n)) {
          n = Array.prototype.slice.call(n);
          for (c = 0, h = n.length; c < h; c += 1) {
            if (Array.isArray(n[c])) {
              $a(t, "nested arrays are not supported inside keys");
            }
            if (typeof n === "object" && Sa(n[c]) === "[object Object]") {
              n[c] = "[object Object]";
            }
          }
        }
        if (typeof n === "object" && Sa(n) === "[object Object]") {
          n = "[object Object]";
        }
        n = String(n);
        if (e === null) {
          e = {};
        }
        if (i === "tag:yaml.org,2002:merge") {
          if (Array.isArray(o)) {
            for (c = 0, h = o.length; c < h; c += 1) {
              Ha(t, e, o[c], r);
            }
          } else {
            Ha(t, e, o, r);
          }
        } else {
          if (!t.json && !da.call(r, n) && da.call(e, n)) {
            t.line = s || t.line;
            t.lineStart = a || t.lineStart;
            t.position = l || t.position;
            $a(t, "duplicated mapping key");
          }
          if (n === "__proto__") {
            Object.defineProperty(e, n, { configurable: true, enumerable: true, writable: true, value: o });
          } else {
            e[n] = o;
          }
          delete r[n];
        }
        return e;
      }
      function Ua(t) {
        var e;
        e = t.input.charCodeAt(t.position);
        if (e === 10) {
          t.position++;
        } else if (e === 13) {
          t.position++;
          if (t.input.charCodeAt(t.position) === 10) {
            t.position++;
          }
        } else {
          $a(t, "a line break is expected");
        }
        t.line += 1;
        t.lineStart = t.position;
        t.firstTabInLine = -1;
      }
      function Va(t, e, r) {
        var i = 0,
          n = t.input.charCodeAt(t.position);
        while (n !== 0) {
          while (Fa(n)) {
            if (n === 9 && t.firstTabInLine === -1) {
              t.firstTabInLine = t.position;
            }
            n = t.input.charCodeAt(++t.position);
          }
          if (e && n === 35) {
            do {
              n = t.input.charCodeAt(++t.position);
            } while (n !== 10 && n !== 13 && n !== 0);
          }
          if (Ba(n)) {
            Ua(t);
            n = t.input.charCodeAt(t.position);
            i++;
            t.lineIndent = 0;
            while (n === 32) {
              t.lineIndent++;
              n = t.input.charCodeAt(++t.position);
            }
          } else {
            break;
          }
        }
        if (r !== -1 && i !== 0 && t.lineIndent < r) {
          Pa(t, "deficient indentation");
        }
        return i;
      }
      function Ga(t) {
        var e = t.position,
          r;
        r = t.input.charCodeAt(e);
        if ((r === 45 || r === 46) && r === t.input.charCodeAt(e + 1) && r === t.input.charCodeAt(e + 2)) {
          e += 3;
          r = t.input.charCodeAt(e);
          if (r === 0 || Aa(r)) {
            return true;
          }
        }
        return false;
      }
      function Xa(t, e) {
        if (e === 1) {
          t.result += " ";
        } else if (e > 1) {
          t.result += Vo.repeat("\n", e - 1);
        }
      }
      function Ka(t, e, r) {
        var i,
          n,
          o,
          s,
          a,
          l,
          c,
          h,
          u = t.kind,
          f = t.result,
          d;
        d = t.input.charCodeAt(t.position);
        if (
          Aa(d) ||
          La(d) ||
          d === 35 ||
          d === 38 ||
          d === 42 ||
          d === 33 ||
          d === 124 ||
          d === 62 ||
          d === 39 ||
          d === 34 ||
          d === 37 ||
          d === 64 ||
          d === 96
        ) {
          return false;
        }
        if (d === 63 || d === 45) {
          n = t.input.charCodeAt(t.position + 1);
          if (Aa(n) || (r && La(n))) {
            return false;
          }
        }
        t.kind = "scalar";
        t.result = "";
        o = s = t.position;
        a = false;
        while (d !== 0) {
          if (d === 58) {
            n = t.input.charCodeAt(t.position + 1);
            if (Aa(n) || (r && La(n))) {
              break;
            }
          } else if (d === 35) {
            i = t.input.charCodeAt(t.position - 1);
            if (Aa(i)) {
              break;
            }
          } else if ((t.position === t.lineStart && Ga(t)) || (r && La(d))) {
            break;
          } else if (Ba(d)) {
            l = t.line;
            c = t.lineStart;
            h = t.lineIndent;
            Va(t, false, -1);
            if (t.lineIndent >= e) {
              a = true;
              d = t.input.charCodeAt(t.position);
              continue;
            } else {
              t.position = s;
              t.line = l;
              t.lineStart = c;
              t.lineIndent = h;
              break;
            }
          }
          if (a) {
            Wa(t, o, s, false);
            Xa(t, t.line - l);
            o = s = t.position;
            a = false;
          }
          if (!Fa(d)) {
            s = t.position + 1;
          }
          d = t.input.charCodeAt(++t.position);
        }
        Wa(t, o, s, false);
        if (t.result) {
          return true;
        }
        t.kind = u;
        t.result = f;
        return false;
      }
      function Qa(t, e) {
        var r, i, n;
        r = t.input.charCodeAt(t.position);
        if (r !== 39) {
          return false;
        }
        t.kind = "scalar";
        t.result = "";
        t.position++;
        i = n = t.position;
        while ((r = t.input.charCodeAt(t.position)) !== 0) {
          if (r === 39) {
            Wa(t, i, t.position, true);
            r = t.input.charCodeAt(++t.position);
            if (r === 39) {
              i = t.position;
              t.position++;
              n = t.position;
            } else {
              return true;
            }
          } else if (Ba(r)) {
            Wa(t, i, n, true);
            Xa(t, Va(t, false, e));
            i = n = t.position;
          } else if (t.position === t.lineStart && Ga(t)) {
            $a(t, "unexpected end of the document within a single quoted scalar");
          } else {
            t.position++;
            n = t.position;
          }
        }
        $a(t, "unexpected end of the stream within a single quoted scalar");
      }
      function Ja(t, e) {
        var r, i, n, o, s, a;
        a = t.input.charCodeAt(t.position);
        if (a !== 34) {
          return false;
        }
        t.kind = "scalar";
        t.result = "";
        t.position++;
        r = i = t.position;
        while ((a = t.input.charCodeAt(t.position)) !== 0) {
          if (a === 34) {
            Wa(t, r, t.position, true);
            t.position++;
            return true;
          } else if (a === 92) {
            Wa(t, r, t.position, true);
            a = t.input.charCodeAt(++t.position);
            if (Ba(a)) {
              Va(t, false, e);
            } else if (a < 256 && qa[a]) {
              t.result += za[a];
              t.position++;
            } else if ((s = Ea(a)) > 0) {
              n = s;
              o = 0;
              for (; n > 0; n--) {
                a = t.input.charCodeAt(++t.position);
                if ((s = Za(a)) >= 0) {
                  o = (o << 4) + s;
                } else {
                  $a(t, "expected hexadecimal character");
                }
              }
              t.result += Ia(o);
              t.position++;
            } else {
              $a(t, "unknown escape sequence");
            }
            r = i = t.position;
          } else if (Ba(a)) {
            Wa(t, r, i, true);
            Xa(t, Va(t, false, e));
            r = i = t.position;
          } else if (t.position === t.lineStart && Ga(t)) {
            $a(t, "unexpected end of the document within a double quoted scalar");
          } else {
            t.position++;
            i = t.position;
          }
        }
        $a(t, "unexpected end of the stream within a double quoted scalar");
      }
      function tl(t, e) {
        var r = true,
          i,
          n,
          o,
          s = t.tag,
          a,
          l = t.anchor,
          c,
          h,
          u,
          f,
          d,
          p = Object.create(null),
          g,
          m,
          y,
          C;
        C = t.input.charCodeAt(t.position);
        if (C === 91) {
          h = 93;
          d = false;
          a = [];
        } else if (C === 123) {
          h = 125;
          d = true;
          a = {};
        } else {
          return false;
        }
        if (t.anchor !== null) {
          t.anchorMap[t.anchor] = a;
        }
        C = t.input.charCodeAt(++t.position);
        while (C !== 0) {
          Va(t, true, e);
          C = t.input.charCodeAt(t.position);
          if (C === h) {
            t.position++;
            t.tag = s;
            t.anchor = l;
            t.kind = d ? "mapping" : "sequence";
            t.result = a;
            return true;
          } else if (!r) {
            $a(t, "missed comma between flow collection entries");
          } else if (C === 44) {
            $a(t, "expected the node content, but found ','");
          }
          m = g = y = null;
          u = f = false;
          if (C === 63) {
            c = t.input.charCodeAt(t.position + 1);
            if (Aa(c)) {
              u = f = true;
              t.position++;
              Va(t, true, e);
            }
          }
          i = t.line;
          n = t.lineStart;
          o = t.position;
          al(t, e, pa, false, true);
          m = t.tag;
          g = t.result;
          Va(t, true, e);
          C = t.input.charCodeAt(t.position);
          if ((f || t.line === i) && C === 58) {
            u = true;
            C = t.input.charCodeAt(++t.position);
            Va(t, true, e);
            al(t, e, pa, false, true);
            y = t.result;
          }
          if (d) {
            Ya(t, a, p, m, g, y, i, n, o);
          } else if (u) {
            a.push(Ya(t, null, p, m, g, y, i, n, o));
          } else {
            a.push(g);
          }
          Va(t, true, e);
          C = t.input.charCodeAt(t.position);
          if (C === 44) {
            r = true;
            C = t.input.charCodeAt(++t.position);
          } else {
            r = false;
          }
        }
        $a(t, "unexpected end of the stream within a flow collection");
      }
      function el(t, e) {
        var r,
          i,
          n = Ca,
          o = false,
          s = false,
          a = e,
          l = 0,
          c = false,
          h,
          u;
        u = t.input.charCodeAt(t.position);
        if (u === 124) {
          i = false;
        } else if (u === 62) {
          i = true;
        } else {
          return false;
        }
        t.kind = "scalar";
        t.result = "";
        while (u !== 0) {
          u = t.input.charCodeAt(++t.position);
          if (u === 43 || u === 45) {
            if (Ca === n) {
              n = u === 43 ? va : ba;
            } else {
              $a(t, "repeat of a chomping mode identifier");
            }
          } else if ((h = Ma(u)) >= 0) {
            if (h === 0) {
              $a(t, "bad explicit indentation width of a block scalar; it cannot be less than one");
            } else if (!s) {
              a = e + h - 1;
              s = true;
            } else {
              $a(t, "repeat of an indentation width identifier");
            }
          } else {
            break;
          }
        }
        if (Fa(u)) {
          do {
            u = t.input.charCodeAt(++t.position);
          } while (Fa(u));
          if (u === 35) {
            do {
              u = t.input.charCodeAt(++t.position);
            } while (!Ba(u) && u !== 0);
          }
        }
        while (u !== 0) {
          Ua(t);
          t.lineIndent = 0;
          u = t.input.charCodeAt(t.position);
          while ((!s || t.lineIndent < a) && u === 32) {
            t.lineIndent++;
            u = t.input.charCodeAt(++t.position);
          }
          if (!s && t.lineIndent > a) {
            a = t.lineIndent;
          }
          if (Ba(u)) {
            l++;
            continue;
          }
          if (t.lineIndent < a) {
            if (n === va) {
              t.result += Vo.repeat("\n", o ? 1 + l : l);
            } else if (n === Ca) {
              if (o) {
                t.result += "\n";
              }
            }
            break;
          }
          if (i) {
            if (Fa(u)) {
              c = true;
              t.result += Vo.repeat("\n", o ? 1 + l : l);
            } else if (c) {
              c = false;
              t.result += Vo.repeat("\n", l + 1);
            } else if (l === 0) {
              if (o) {
                t.result += " ";
              }
            } else {
              t.result += Vo.repeat("\n", l);
            }
          } else {
            t.result += Vo.repeat("\n", o ? 1 + l : l);
          }
          o = true;
          s = true;
          l = 0;
          r = t.position;
          while (!Ba(u) && u !== 0) {
            u = t.input.charCodeAt(++t.position);
          }
          Wa(t, r, t.position, false);
        }
        return true;
      }
      function rl(t, e) {
        var r,
          i = t.tag,
          n = t.anchor,
          o = [],
          s,
          a = false,
          l;
        if (t.firstTabInLine !== -1) return false;
        if (t.anchor !== null) {
          t.anchorMap[t.anchor] = o;
        }
        l = t.input.charCodeAt(t.position);
        while (l !== 0) {
          if (t.firstTabInLine !== -1) {
            t.position = t.firstTabInLine;
            $a(t, "tab characters must not be used in indentation");
          }
          if (l !== 45) {
            break;
          }
          s = t.input.charCodeAt(t.position + 1);
          if (!Aa(s)) {
            break;
          }
          a = true;
          t.position++;
          if (Va(t, true, -1)) {
            if (t.lineIndent <= e) {
              o.push(null);
              l = t.input.charCodeAt(t.position);
              continue;
            }
          }
          r = t.line;
          al(t, e, ma, false, true);
          o.push(t.result);
          Va(t, true, -1);
          l = t.input.charCodeAt(t.position);
          if ((t.line === r || t.lineIndent > e) && l !== 0) {
            $a(t, "bad indentation of a sequence entry");
          } else if (t.lineIndent < e) {
            break;
          }
        }
        if (a) {
          t.tag = i;
          t.anchor = n;
          t.kind = "sequence";
          t.result = o;
          return true;
        }
        return false;
      }
      function il(t, e, r) {
        var i,
          n,
          o,
          s,
          a,
          l,
          c = t.tag,
          h = t.anchor,
          u = {},
          f = Object.create(null),
          d = null,
          p = null,
          g = null,
          m = false,
          y = false,
          C;
        if (t.firstTabInLine !== -1) return false;
        if (t.anchor !== null) {
          t.anchorMap[t.anchor] = u;
        }
        C = t.input.charCodeAt(t.position);
        while (C !== 0) {
          if (!m && t.firstTabInLine !== -1) {
            t.position = t.firstTabInLine;
            $a(t, "tab characters must not be used in indentation");
          }
          i = t.input.charCodeAt(t.position + 1);
          o = t.line;
          if ((C === 63 || C === 58) && Aa(i)) {
            if (C === 63) {
              if (m) {
                Ya(t, u, f, d, p, null, s, a, l);
                d = p = g = null;
              }
              y = true;
              m = true;
              n = true;
            } else if (m) {
              m = false;
              n = true;
            } else {
              $a(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
            }
            t.position += 1;
            C = i;
          } else {
            s = t.line;
            a = t.lineStart;
            l = t.position;
            if (!al(t, r, ga, false, true)) {
              break;
            }
            if (t.line === o) {
              C = t.input.charCodeAt(t.position);
              while (Fa(C)) {
                C = t.input.charCodeAt(++t.position);
              }
              if (C === 58) {
                C = t.input.charCodeAt(++t.position);
                if (!Aa(C)) {
                  $a(t, "a whitespace character is expected after the key-value separator within a block mapping");
                }
                if (m) {
                  Ya(t, u, f, d, p, null, s, a, l);
                  d = p = g = null;
                }
                y = true;
                m = false;
                n = false;
                d = t.tag;
                p = t.result;
              } else if (y) {
                $a(t, "can not read an implicit mapping pair; a colon is missed");
              } else {
                t.tag = c;
                t.anchor = h;
                return true;
              }
            } else if (y) {
              $a(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
            } else {
              t.tag = c;
              t.anchor = h;
              return true;
            }
          }
          if (t.line === o || t.lineIndent > e) {
            if (m) {
              s = t.line;
              a = t.lineStart;
              l = t.position;
            }
            if (al(t, e, ya, true, n)) {
              if (m) {
                p = t.result;
              } else {
                g = t.result;
              }
            }
            if (!m) {
              Ya(t, u, f, d, p, g, s, a, l);
              d = p = g = null;
            }
            Va(t, true, -1);
            C = t.input.charCodeAt(t.position);
          }
          if ((t.line === o || t.lineIndent > e) && C !== 0) {
            $a(t, "bad indentation of a mapping entry");
          } else if (t.lineIndent < e) {
            break;
          }
        }
        if (m) {
          Ya(t, u, f, d, p, null, s, a, l);
        }
        if (y) {
          t.tag = c;
          t.anchor = h;
          t.kind = "mapping";
          t.result = u;
        }
        return y;
      }
      function nl(t) {
        var e,
          r = false,
          i = false,
          n,
          o,
          s;
        s = t.input.charCodeAt(t.position);
        if (s !== 33) return false;
        if (t.tag !== null) {
          $a(t, "duplication of a tag property");
        }
        s = t.input.charCodeAt(++t.position);
        if (s === 60) {
          r = true;
          s = t.input.charCodeAt(++t.position);
        } else if (s === 33) {
          i = true;
          n = "!!";
          s = t.input.charCodeAt(++t.position);
        } else {
          n = "!";
        }
        e = t.position;
        if (r) {
          do {
            s = t.input.charCodeAt(++t.position);
          } while (s !== 0 && s !== 62);
          if (t.position < t.length) {
            o = t.input.slice(e, t.position);
            s = t.input.charCodeAt(++t.position);
          } else {
            $a(t, "unexpected end of the stream within a verbatim tag");
          }
        } else {
          while (s !== 0 && !Aa(s)) {
            if (s === 33) {
              if (!i) {
                n = t.input.slice(e - 1, t.position + 1);
                if (!_a.test(n)) {
                  $a(t, "named tag handle cannot contain such characters");
                }
                i = true;
                e = t.position + 1;
              } else {
                $a(t, "tag suffix cannot contain exclamation marks");
              }
            }
            s = t.input.charCodeAt(++t.position);
          }
          o = t.input.slice(e, t.position);
          if (Ta.test(o)) {
            $a(t, "tag suffix cannot contain flow indicator characters");
          }
        }
        if (o && !wa.test(o)) {
          $a(t, "tag name cannot contain such characters: " + o);
        }
        try {
          o = decodeURIComponent(o);
        } catch (a) {
          $a(t, "tag name is malformed: " + o);
        }
        if (r) {
          t.tag = o;
        } else if (da.call(t.tagMap, n)) {
          t.tag = t.tagMap[n] + o;
        } else if (n === "!") {
          t.tag = "!" + o;
        } else if (n === "!!") {
          t.tag = "tag:yaml.org,2002:" + o;
        } else {
          $a(t, 'undeclared tag handle "' + n + '"');
        }
        return true;
      }
      function ol(t) {
        var e, r;
        r = t.input.charCodeAt(t.position);
        if (r !== 38) return false;
        if (t.anchor !== null) {
          $a(t, "duplication of an anchor property");
        }
        r = t.input.charCodeAt(++t.position);
        e = t.position;
        while (r !== 0 && !Aa(r) && !La(r)) {
          r = t.input.charCodeAt(++t.position);
        }
        if (t.position === e) {
          $a(t, "name of an anchor node must contain at least one character");
        }
        t.anchor = t.input.slice(e, t.position);
        return true;
      }
      function sl(t) {
        var e, r, i;
        i = t.input.charCodeAt(t.position);
        if (i !== 42) return false;
        i = t.input.charCodeAt(++t.position);
        e = t.position;
        while (i !== 0 && !Aa(i) && !La(i)) {
          i = t.input.charCodeAt(++t.position);
        }
        if (t.position === e) {
          $a(t, "name of an alias node must contain at least one character");
        }
        r = t.input.slice(e, t.position);
        if (!da.call(t.anchorMap, r)) {
          $a(t, 'unidentified alias "' + r + '"');
        }
        t.result = t.anchorMap[r];
        Va(t, true, -1);
        return true;
      }
      function al(t, e, r, i, n) {
        var o,
          s,
          a,
          l = 1,
          c = false,
          h = false,
          u,
          f,
          d,
          p,
          g,
          m;
        if (t.listener !== null) {
          t.listener("open", t);
        }
        t.tag = null;
        t.anchor = null;
        t.kind = null;
        t.result = null;
        o = s = a = ya === r || ma === r;
        if (i) {
          if (Va(t, true, -1)) {
            c = true;
            if (t.lineIndent > e) {
              l = 1;
            } else if (t.lineIndent === e) {
              l = 0;
            } else if (t.lineIndent < e) {
              l = -1;
            }
          }
        }
        if (l === 1) {
          while (nl(t) || ol(t)) {
            if (Va(t, true, -1)) {
              c = true;
              a = o;
              if (t.lineIndent > e) {
                l = 1;
              } else if (t.lineIndent === e) {
                l = 0;
              } else if (t.lineIndent < e) {
                l = -1;
              }
            } else {
              a = false;
            }
          }
        }
        if (a) {
          a = c || n;
        }
        if (l === 1 || ya === r) {
          if (pa === r || ga === r) {
            g = e;
          } else {
            g = e + 1;
          }
          m = t.position - t.lineStart;
          if (l === 1) {
            if ((a && (rl(t, m) || il(t, m, g))) || tl(t, g)) {
              h = true;
            } else {
              if ((s && el(t, g)) || Qa(t, g) || Ja(t, g)) {
                h = true;
              } else if (sl(t)) {
                h = true;
                if (t.tag !== null || t.anchor !== null) {
                  $a(t, "alias node should not have any properties");
                }
              } else if (Ka(t, g, pa === r)) {
                h = true;
                if (t.tag === null) {
                  t.tag = "?";
                }
              }
              if (t.anchor !== null) {
                t.anchorMap[t.anchor] = t.result;
              }
            }
          } else if (l === 0) {
            h = a && rl(t, m);
          }
        }
        if (t.tag === null) {
          if (t.anchor !== null) {
            t.anchorMap[t.anchor] = t.result;
          }
        } else if (t.tag === "?") {
          if (t.result !== null && t.kind !== "scalar") {
            $a(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"');
          }
          for (u = 0, f = t.implicitTypes.length; u < f; u += 1) {
            p = t.implicitTypes[u];
            if (p.resolve(t.result)) {
              t.result = p.construct(t.result);
              t.tag = p.tag;
              if (t.anchor !== null) {
                t.anchorMap[t.anchor] = t.result;
              }
              break;
            }
          }
        } else if (t.tag !== "!") {
          if (da.call(t.typeMap[t.kind || "fallback"], t.tag)) {
            p = t.typeMap[t.kind || "fallback"][t.tag];
          } else {
            p = null;
            d = t.typeMap.multi[t.kind || "fallback"];
            for (u = 0, f = d.length; u < f; u += 1) {
              if (t.tag.slice(0, d[u].tag.length) === d[u].tag) {
                p = d[u];
                break;
              }
            }
          }
          if (!p) {
            $a(t, "unknown tag !<" + t.tag + ">");
          }
          if (t.result !== null && p.kind !== t.kind) {
            $a(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + p.kind + '", not "' + t.kind + '"');
          }
          if (!p.resolve(t.result, t.tag)) {
            $a(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
          } else {
            t.result = p.construct(t.result, t.tag);
            if (t.anchor !== null) {
              t.anchorMap[t.anchor] = t.result;
            }
          }
        }
        if (t.listener !== null) {
          t.listener("close", t);
        }
        return t.tag !== null || t.anchor !== null || h;
      }
      function ll(t) {
        var e = t.position,
          r,
          i,
          n,
          o = false,
          s;
        t.version = null;
        t.checkLineBreaks = t.legacy;
        t.tagMap = Object.create(null);
        t.anchorMap = Object.create(null);
        while ((s = t.input.charCodeAt(t.position)) !== 0) {
          Va(t, true, -1);
          s = t.input.charCodeAt(t.position);
          if (t.lineIndent > 0 || s !== 37) {
            break;
          }
          o = true;
          s = t.input.charCodeAt(++t.position);
          r = t.position;
          while (s !== 0 && !Aa(s)) {
            s = t.input.charCodeAt(++t.position);
          }
          i = t.input.slice(r, t.position);
          n = [];
          if (i.length < 1) {
            $a(t, "directive name must not be less than one character in length");
          }
          while (s !== 0) {
            while (Fa(s)) {
              s = t.input.charCodeAt(++t.position);
            }
            if (s === 35) {
              do {
                s = t.input.charCodeAt(++t.position);
              } while (s !== 0 && !Ba(s));
              break;
            }
            if (Ba(s)) break;
            r = t.position;
            while (s !== 0 && !Aa(s)) {
              s = t.input.charCodeAt(++t.position);
            }
            n.push(t.input.slice(r, t.position));
          }
          if (s !== 0) Ua(t);
          if (da.call(Ra, i)) {
            Ra[i](t, i, n);
          } else {
            Pa(t, 'unknown document directive "' + i + '"');
          }
        }
        Va(t, true, -1);
        if (
          t.lineIndent === 0 &&
          t.input.charCodeAt(t.position) === 45 &&
          t.input.charCodeAt(t.position + 1) === 45 &&
          t.input.charCodeAt(t.position + 2) === 45
        ) {
          t.position += 3;
          Va(t, true, -1);
        } else if (o) {
          $a(t, "directives end mark is expected");
        }
        al(t, t.lineIndent - 1, ya, false, true);
        Va(t, true, -1);
        if (t.checkLineBreaks && ka.test(t.input.slice(e, t.position))) {
          Pa(t, "non-ASCII line breaks are interpreted as content");
        }
        t.documents.push(t.result);
        if (t.position === t.lineStart && Ga(t)) {
          if (t.input.charCodeAt(t.position) === 46) {
            t.position += 3;
            Va(t, true, -1);
          }
          return;
        }
        if (t.position < t.length - 1) {
          $a(t, "end of the stream or a document separator is expected");
        } else {
          return;
        }
      }
      function cl(t, e) {
        t = String(t);
        e = e || {};
        if (t.length !== 0) {
          if (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13) {
            t += "\n";
          }
          if (t.charCodeAt(0) === 65279) {
            t = t.slice(1);
          }
        }
        var r = new Na(t, e);
        var i = t.indexOf("\0");
        if (i !== -1) {
          r.position = i;
          $a(r, "null byte is not allowed in input");
        }
        r.input += "\0";
        while (r.input.charCodeAt(r.position) === 32) {
          r.lineIndent += 1;
          r.position += 1;
        }
        while (r.position < r.length - 1) {
          ll(r);
        }
        return r.documents;
      }
      function hl(t, e, r) {
        if (e !== null && typeof e === "object" && typeof r === "undefined") {
          r = e;
          e = null;
        }
        var i = cl(t, r);
        if (typeof e !== "function") {
          return i;
        }
        for (var n = 0, o = i.length; n < o; n += 1) {
          e(i[n]);
        }
      }
      function ul(t, e) {
        var r = cl(t, e);
        if (r.length === 0) {
          return void 0;
        } else if (r.length === 1) {
          return r[0];
        }
        throw new Ko("expected a single document in the stream, but found more");
      }
      var fl = hl;
      var dl = ul;
      var pl = { loadAll: fl, load: dl };
      var gl = zs;
      var ml = pl.load;
      function yl(t) {
        const e = t.match(Fe);
        if (!e) {
          return { text: t, metadata: {} };
        }
        let r = ml(e[1], { schema: gl }) ?? {};
        r = typeof r === "object" && !Array.isArray(r) ? r : {};
        const i = {};
        if (r.displayMode) {
          i.displayMode = r.displayMode.toString();
        }
        if (r.title) {
          i.title = r.title.toString();
        }
        if (r.config) {
          i.config = r.config;
        }
        return { text: t.slice(e[0].length), metadata: i };
      }
      const Cl = (t) => t.replace(/\r\n?/g, "\n").replace(/<(\w+)([^>]*)>/g, (t, e, r) => "<" + e + r.replace(/="([^"]*)"/g, "='$1'") + ">");
      const bl = (t) => {
        const { text: e, metadata: r } = yl(t);
        const { displayMode: i, title: n, config: o = {} } = r;
        if (i) {
          if (!o.gantt) {
            o.gantt = {};
          }
          o.gantt.displayMode = i;
        }
        return { title: n, config: o, text: e };
      };
      const vl = (t) => {
        const e = xr.detectInit(t) ?? {};
        const r = xr.detectDirective(t, "wrap");
        if (Array.isArray(r)) {
          e.wrap = r.some(({ type: t }) => {});
        } else if ((r == null ? void 0 : r.type) === "wrap") {
          e.wrap = true;
        }
        return { text: We(t), directive: e };
      };
      function xl(t) {
        const e = Cl(t);
        const r = bl(e);
        const i = vl(r.text);
        const n = vr(r.config, i.directive);
        t = Io(i.text);
        return { code: t, title: r.title, config: n };
      }
      const kl = 5e4;
      const Tl = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
      const _l = "sandbox";
      const wl = "loose";
      const Sl = "http://www.w3.org/2000/svg";
      const Bl = "http://www.w3.org/1999/xlink";
      const Fl = "http://www.w3.org/1999/xhtml";
      const Al = "100%";
      const Ll = "100%";
      const Zl = "border:0;margin:0;";
      const El = "margin:0";
      const Ml = "allow-top-navigation-by-user-activation allow-popups";
      const Ol = 'The "iframe" tag is not supported by your browser.';
      const Il = ["foreignobject"];
      const ql = ["dominant-baseline"];
      function zl(t) {
        const e = xl(t);
        Nr();
        Dr(e.config ?? {});
        return e;
      }
      async function Dl(t, e) {
        So();
        t = zl(t).code;
        try {
          await Gl(t);
        } catch (r) {
          if (e == null ? void 0 : e.suppressErrors) {
            return false;
          }
          throw r;
        }
        return true;
      }
      const Nl = (t, e, r = []) => `\n.${t} ${e} { ${r.join(" !important; ")} !important; }`;
      const jl = (t, e = {}) => {
        var r;
        let i = "";
        if (t.themeCSS !== void 0) {
          i += `\n${t.themeCSS}`;
        }
        if (t.fontFamily !== void 0) {
          i += `\n:root { --mermaid-font-family: ${t.fontFamily}}`;
        }
        if (t.altFontFamily !== void 0) {
          i += `\n:root { --mermaid-alt-font-family: ${t.altFontFamily}}`;
        }
        if (!(0, zt.Z)(e)) {
          const n = t.htmlLabels || ((r = t.flowchart) == null ? void 0 : r.htmlLabels);
          const o = ["> *", "span"];
          const s = ["rect", "polygon", "ellipse", "circle", "path"];
          const a = n ? o : s;
          for (const t in e) {
            const r = e[t];
            if (!(0, zt.Z)(r.styles)) {
              a.forEach((t) => {
                i += Nl(r.id, t, r.styles);
              });
            }
            if (!(0, zt.Z)(r.textStyles)) {
              i += Nl(r.id, "tspan", r.textStyles);
            }
          }
        }
        return i;
      };
      const $l = (t, e, r, i) => {
        const n = jl(t, r);
        const o = Bn(e, n, t.themeVariables);
        return nt(Et(`${i}{${o}}`), ot);
      };
      const Pl = (t = "", e, r) => {
        let i = t;
        if (!r && !e) {
          i = i.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g, 'marker-end="url(#');
        }
        i = Tr(i);
        i = i.replace(/<br>/g, "<br/>");
        return i;
      };
      const Rl = (t = "", e) => {
        var r, i;
        const n = ((i = (r = e == null ? void 0 : e.viewBox) == null ? void 0 : r.baseVal) == null ? void 0 : i.height)
          ? e.viewBox.baseVal.height + "px"
          : Ll;
        const o = btoa('<body style="' + El + '">' + t + "</body>");
        return `<iframe style="width:${Al};height:${n};${Zl}" src="data:text/html;base64,${o}" sandbox="${Ml}">\n  ${Ol}\n</iframe>`;
      };
      const Wl = (t, e, r, i, n) => {
        const o = t.append("div");
        o.attr("id", r);
        if (i) {
          o.attr("style", i);
        }
        const s = o.append("svg").attr("id", e).attr("width", "100%").attr("xmlns", Sl);
        if (n) {
          s.attr("xmlns:xlink", n);
        }
        s.append("g");
        return t;
      };
      function Hl(t, e) {
        return t.append("iframe").attr("id", e).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
      }
      const Yl = (t, e, r, i) => {
        var n, o, s;
        (n = t.getElementById(e)) == null ? void 0 : n.remove();
        (o = t.getElementById(r)) == null ? void 0 : o.remove();
        (s = t.getElementById(i)) == null ? void 0 : s.remove();
      };
      const Ul = async function (t, e, r) {
        var i, n, o, s, l, h;
        So();
        const u = zl(e);
        e = u.code;
        const f = qr();
        Nt.debug(f);
        if (e.length > ((f == null ? void 0 : f.maxTextSize) ?? kl)) {
          e = Tl;
        }
        const d = "#" + t;
        const p = "i" + t;
        const g = "#" + p;
        const m = "d" + t;
        const y = "#" + m;
        let C = (0, a.Ys)("body");
        const b = f.securityLevel === _l;
        const v = f.securityLevel === wl;
        const x = f.fontFamily;
        if (r !== void 0) {
          if (r) {
            r.innerHTML = "";
          }
          if (b) {
            const t = Hl((0, a.Ys)(r), p);
            C = (0, a.Ys)(t.nodes()[0].contentDocument.body);
            C.node().style.margin = 0;
          } else {
            C = (0, a.Ys)(r);
          }
          Wl(C, t, m, `font-family: ${x}`, Bl);
        } else {
          Yl(document, t, m, p);
          if (b) {
            const t = Hl((0, a.Ys)("body"), p);
            C = (0, a.Ys)(t.nodes()[0].contentDocument.body);
            C.node().style.margin = 0;
          } else {
            C = (0, a.Ys)("body");
          }
          Wl(C, t, m);
        }
        let k;
        let T;
        try {
          k = await Gl(e, { title: u.title });
        } catch (z) {
          k = new Bo("error");
          T = z;
        }
        const _ = C.select(y).node();
        const w = k.type;
        const S = _.firstChild;
        const B = S.firstChild;
        const F = (n = (i = k.renderer).getClasses) == null ? void 0 : n.call(i, e, k);
        const A = $l(f, w, F, d);
        const L = document.createElement("style");
        L.innerHTML = A;
        S.insertBefore(L, B);
        try {
          await k.renderer.draw(e, t, _r, k);
        } catch (D) {
          eo.draw(e, t, _r);
          throw D;
        }
        const Z = C.select(`${y} svg`);
        const E = (s = (o = k.db).getAccTitle) == null ? void 0 : s.call(o);
        const M = (h = (l = k.db).getAccDescription) == null ? void 0 : h.call(l);
        Xl(w, Z, E, M);
        C.select(`[id="${t}"]`).selectAll("foreignobject > *").attr("xmlns", Fl);
        let O = C.select(y).node().innerHTML;
        Nt.debug("config.arrowMarkerAbsolute", f.arrowMarkerAbsolute);
        O = Pl(O, b, Jt(f.arrowMarkerAbsolute));
        if (b) {
          const t = C.select(y + " svg").node();
          O = Rl(O, t);
        } else if (!v) {
          O = c().sanitize(O, { ADD_TAGS: Il, ADD_ATTR: ql });
        }
        Zo();
        if (T) {
          throw T;
        }
        const I = b ? g : y;
        const q = (0, a.Ys)(I).node();
        if (q && "remove" in q) {
          q.remove();
        }
        return { svg: O, bindFunctions: k.db.bindFunctions };
      };
      function Vl(t = {}) {
        var e;
        if ((t == null ? void 0 : t.fontFamily) && !((e = t.themeVariables) == null ? void 0 : e.fontFamily)) {
          if (!t.themeVariables) {
            t.themeVariables = {};
          }
          t.themeVariables.fontFamily = t.fontFamily;
        }
        Er(t);
        if ((t == null ? void 0 : t.theme) && t.theme in ve) {
          t.themeVariables = ve[t.theme].getThemeVariables(t.themeVariables);
        } else if (t) {
          t.themeVariables = ve.default.getThemeVariables(t.themeVariables);
        }
        const r = typeof t === "object" ? Zr(t) : Or();
        jt(r.logLevel);
        So();
      }
      const Gl = (t, e = {}) => {
        const { code: r } = xl(t);
        return Fo(r, e);
      };
      function Xl(t, e, r, i) {
        Mo(e, t);
        Oo(e, r, i, e.attr("id"));
      }
      const Kl = Object.freeze({
        render: Ul,
        parse: Dl,
        getDiagramFromText: Gl,
        initialize: Vl,
        getConfig: qr,
        setConfig: Ir,
        getSiteConfig: Or,
        updateSiteConfig: Mr,
        reset: () => {
          Nr();
        },
        globalReset: () => {
          Nr(wr);
        },
        defaultConfig: wr,
      });
      jt(qr().logLevel);
      Nr(qr());
      const Ql = async () => {
        Nt.debug(`Loading registered diagrams`);
        const t = await Promise.allSettled(
          Object.entries(Ee).map(async ([t, { detector: e, loader: r }]) => {
            if (r) {
              try {
                Xn(t);
              } catch (i) {
                try {
                  const { diagram: t, id: i } = await r();
                  Gn(i, t, e);
                } catch (n) {
                  Nt.error(`Failed to load external diagram with key ${t}. Removing from detectors.`);
                  delete Ee[t];
                  throw n;
                }
              }
            }
          })
        );
        const e = t.filter((t) => t.status === "rejected");
        if (e.length > 0) {
          Nt.error(`Failed to load ${e.length} external diagrams`);
          for (const t of e) {
            Nt.error(t);
          }
          throw new Error(`Failed to load ${e.length} external diagrams`);
        }
      };
      const Jl = (t, e, r) => {
        Nt.warn(t);
        if (yr(t)) {
          if (r) {
            r(t.str, t.hash);
          }
          e.push({ ...t, message: t.str, error: t });
        } else {
          if (r) {
            r(t);
          }
          if (t instanceof Error) {
            e.push({ str: t.message, message: t.message, hash: t.name, error: t });
          }
        }
      };
      const tc = async function (t = { querySelector: ".mermaid" }) {
        try {
          await ec(t);
        } catch (e) {
          if (yr(e)) {
            Nt.error(e.str);
          }
          if (fc.parseError) {
            fc.parseError(e);
          }
          if (!t.suppressErrors) {
            Nt.error("Use the suppressErrors option to suppress these errors");
            throw e;
          }
        }
      };
      const ec = async function ({ postRenderCallback: t, querySelector: e, nodes: r } = { querySelector: ".mermaid" }) {
        const n = Kl.getConfig();
        Nt.debug(`${!t ? "No " : ""}Callback function found`);
        let o;
        if (r) {
          o = r;
        } else if (e) {
          o = document.querySelectorAll(e);
        } else {
          throw new Error("Nodes and querySelector are both undefined");
        }
        Nt.debug(`Found ${o.length} diagrams`);
        if ((n == null ? void 0 : n.startOnLoad) !== void 0) {
          Nt.debug("Start On Load: " + (n == null ? void 0 : n.startOnLoad));
          Kl.updateSiteConfig({ startOnLoad: n == null ? void 0 : n.startOnLoad });
        }
        const s = new xr.InitIDGenerator(n.deterministicIds, n.deterministicIDSeed);
        let a;
        const l = [];
        for (const h of Array.from(o)) {
          Nt.info("Rendering diagram: " + h.id);
          if (h.getAttribute("data-processed")) {
            continue;
          }
          h.setAttribute("data-processed", "true");
          const e = `mermaid-${s.next()}`;
          a = h.innerHTML;
          a = (0, i.Z)(xr.entityDecode(a))
            .trim()
            .replace(/<br\s*\/?>/gi, "<br/>");
          const r = xr.detectInit(a);
          if (r) {
            Nt.debug("Detected early reinit: ", r);
          }
          try {
            const { svg: r, bindFunctions: i } = await uc(e, a, h);
            h.innerHTML = r;
            if (t) {
              await t(e);
            }
            if (i) {
              i(h);
            }
          } catch (c) {
            Jl(c, l, fc.parseError);
          }
        }
        if (l.length > 0) {
          throw l[0];
        }
      };
      const rc = function (t) {
        Kl.initialize(t);
      };
      const ic = async function (t, e, r) {
        Nt.warn("mermaid.init is deprecated. Please use run instead.");
        if (t) {
          rc(t);
        }
        const i = { postRenderCallback: r, querySelector: ".mermaid" };
        if (typeof e === "string") {
          i.querySelector = e;
        } else if (e) {
          if (e instanceof HTMLElement) {
            i.nodes = [e];
          } else {
            i.nodes = e;
          }
        }
        await tc(i);
      };
      const nc = async (t, { lazyLoad: e = true } = {}) => {
        Oe(...t);
        if (e === false) {
          await Ql();
        }
      };
      const oc = function () {
        if (fc.startOnLoad) {
          const { startOnLoad: t } = Kl.getConfig();
          if (t) {
            fc.run().catch((t) => Nt.error("Mermaid failed to initialize", t));
          }
        }
      };
      if (typeof document !== "undefined") {
        window.addEventListener("load", oc, false);
      }
      const sc = function (t) {
        fc.parseError = t;
      };
      const ac = [];
      let lc = false;
      const cc = async () => {
        if (lc) {
          return;
        }
        lc = true;
        while (ac.length > 0) {
          const e = ac.shift();
          if (e) {
            try {
              await e();
            } catch (t) {
              Nt.error("Error executing queue", t);
            }
          }
        }
        lc = false;
      };
      const hc = async (t, e) =>
        new Promise((r, i) => {
          const n = () =>
            new Promise((n, o) => {
              Kl.parse(t, e).then(
                (t) => {
                  n(t);
                  r(t);
                },
                (t) => {
                  var e;
                  Nt.error("Error parsing", t);
                  (e = fc.parseError) == null ? void 0 : e.call(fc, t);
                  o(t);
                  i(t);
                }
              );
            });
          ac.push(n);
          cc().catch(i);
        });
      const uc = (t, e, r) =>
        new Promise((i, n) => {
          const o = () =>
            new Promise((o, s) => {
              Kl.render(t, e, r).then(
                (t) => {
                  o(t);
                  i(t);
                },
                (t) => {
                  var e;
                  Nt.error("Error parsing", t);
                  (e = fc.parseError) == null ? void 0 : e.call(fc, t);
                  s(t);
                  n(t);
                }
              );
            });
          ac.push(o);
          cc().catch(n);
        });
      const fc = {
        startOnLoad: true,
        mermaidAPI: Kl,
        parse: hc,
        render: uc,
        init: ic,
        run: tc,
        registerExternalDiagrams: nc,
        initialize: rc,
        parseError: void 0,
        contentLoaded: oc,
        setParseErrorHandler: sc,
        detectType: Me,
      };
    },
    94136: (t, e, r) => {
      "use strict";
      r.r(e);
      r.d(e, { default: () => i.L });
      var i = r(23787);
      var n = r(27484);
      var o = r.n(n);
      var s = r(17967);
      var a = r(34596);
      var l = r(27856);
      var c = r.n(l);
    },
    18464: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => i });
      function i(t) {
        var e = [];
        for (var r = 1; r < arguments.length; r++) {
          e[r - 1] = arguments[r];
        }
        var i = Array.from(typeof t === "string" ? [t] : t);
        i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
        var n = i.reduce(function (t, e) {
          var r = e.match(/\n([\t ]+|(?!\s).)/g);
          if (r) {
            return t.concat(
              r.map(function (t) {
                var e, r;
                return (r = (e = t.match(/[\t ]/g)) === null || e === void 0 ? void 0 : e.length) !== null && r !== void 0 ? r : 0;
              })
            );
          }
          return t;
        }, []);
        if (n.length) {
          var o = new RegExp("\n[\t ]{" + Math.min.apply(Math, n) + "}", "g");
          i = i.map(function (t) {
            return t.replace(o, "\n");
          });
        }
        i[0] = i[0].replace(/^\r?\n/, "");
        var s = i[0];
        e.forEach(function (t, e) {
          var r = s.match(/(?:^|\n)( *)$/);
          var n = r ? r[1] : "";
          var o = t;
          if (typeof t === "string" && t.includes("\n")) {
            o = String(t)
              .split("\n")
              .map(function (t, e) {
                return e === 0 ? t : "" + n + t;
              })
              .join("\n");
          }
          s += o + i[e + 1];
        });
        return s;
      }
      var n = null && i;
    },
  },
]);
