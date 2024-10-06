(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7473],
  {
    64063: (e) => {
      "use strict";
      e.exports = function e(n, t) {
        if (n === t) return true;
        if (n && t && typeof n == "object" && typeof t == "object") {
          if (n.constructor !== t.constructor) return false;
          var i, r, s;
          if (Array.isArray(n)) {
            i = n.length;
            if (i != t.length) return false;
            for (r = i; r-- !== 0; ) if (!e(n[r], t[r])) return false;
            return true;
          }
          if (n.constructor === RegExp) return n.source === t.source && n.flags === t.flags;
          if (n.valueOf !== Object.prototype.valueOf) return n.valueOf() === t.valueOf();
          if (n.toString !== Object.prototype.toString) return n.toString() === t.toString();
          s = Object.keys(n);
          i = s.length;
          if (i !== Object.keys(t).length) return false;
          for (r = i; r-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, s[r])) return false;
          for (r = i; r-- !== 0; ) {
            var o = s[r];
            if (!e(n[o], t[o])) return false;
          }
          return true;
        }
        return n !== n && t !== t;
      };
    },
    35035: (e) => {
      "use strict";
      e.exports = function (e, n) {
        if (!n) n = {};
        if (typeof n === "function") n = { cmp: n };
        var t = typeof n.cycles === "boolean" ? n.cycles : false;
        var i =
          n.cmp &&
          (function (e) {
            return function (n) {
              return function (t, i) {
                var r = { key: t, value: n[t] };
                var s = { key: i, value: n[i] };
                return e(r, s);
              };
            };
          })(n.cmp);
        var r = [];
        return (function e(n) {
          if (n && n.toJSON && typeof n.toJSON === "function") {
            n = n.toJSON();
          }
          if (n === undefined) return;
          if (typeof n == "number") return isFinite(n) ? "" + n : "null";
          if (typeof n !== "object") return JSON.stringify(n);
          var s, o;
          if (Array.isArray(n)) {
            o = "[";
            for (s = 0; s < n.length; s++) {
              if (s) o += ",";
              o += e(n[s]) || "null";
            }
            return o + "]";
          }
          if (n === null) return "null";
          if (r.indexOf(n) !== -1) {
            if (t) return JSON.stringify("__cycle__");
            throw new TypeError("Converting circular structure to JSON");
          }
          var a = r.push(n) - 1;
          var c = Object.keys(n).sort(i && i(n));
          o = "";
          for (s = 0; s < c.length; s++) {
            var l = c[s];
            var u = e(n[l]);
            if (!u) continue;
            if (o) o += ",";
            o += JSON.stringify(l) + ":" + u;
          }
          r.splice(a, 1);
          return "{" + o + "}";
        })(e);
      };
    },
    87473: (e, n, t) => {
      "use strict";
      t.r(n);
      t.d(n, {
        accessPathDepth: () => K,
        accessPathWithDatum: () => H,
        compile: () => EO,
        contains: () => $,
        deepEqual: () => h,
        deleteNestedProperty: () => W,
        duplicate: () => b,
        entries: () => L,
        every: () => S,
        fieldIntersection: () => N,
        flatAccessWithDatum: () => B,
        getFirstDefined: () => Y,
        hasIntersection: () => C,
        hash: () => j,
        internalField: () => ne,
        isBoolean: () => q,
        isEmpty: () => T,
        isEqual: () => F,
        isInternalField: () => te,
        isNullOrFalse: () => w,
        isNumeric: () => re,
        keys: () => A,
        logicalExpr: () => R,
        mergeDeep: () => D,
        never: () => y,
        normalize: () => bd,
        normalizeAngle: () => ie,
        omit: () => O,
        pick: () => v,
        prefixGenerator: () => E,
        removePathFromField: () => V,
        replaceAll: () => X,
        replacePathInField: () => G,
        resetIdCounter: () => ee,
        setEqual: () => z,
        some: () => k,
        stringify: () => x,
        titleCase: () => U,
        unique: () => P,
        uniqueId: () => Z,
        vals: () => M,
        varName: () => I,
        version: () => AO,
      });
      const i = { i8: "5.6.1" };
      var r = t(48823);
      var s = t(72886);
      var o = t.n(s);
      var a = t(64063);
      var c = t.n(a);
      var l = t(35035);
      var u = t.n(l);
      function f(e) {
        return !!e.or;
      }
      function d(e) {
        return !!e.and;
      }
      function p(e) {
        return !!e.not;
      }
      function g(e, n) {
        if (p(e)) {
          g(e.not, n);
        } else if (d(e)) {
          for (const t of e.and) {
            g(t, n);
          }
        } else if (f(e)) {
          for (const t of e.or) {
            g(t, n);
          }
        } else {
          n(e);
        }
      }
      function m(e, n) {
        if (p(e)) {
          return { not: m(e.not, n) };
        } else if (d(e)) {
          return { and: e.and.map((e) => m(e, n)) };
        } else if (f(e)) {
          return { or: e.or.map((e) => m(e, n)) };
        } else {
          return n(e);
        }
      }
      const h = c();
      const b = o();
      function y(e) {
        throw new Error(e);
      }
      function v(e, n) {
        const t = {};
        for (const i of n) {
          if ((0, r.nr)(e, i)) {
            t[i] = e[i];
          }
        }
        return t;
      }
      function O(e, n) {
        const t = Object.assign({}, e);
        for (const i of n) {
          delete t[i];
        }
        return t;
      }
      Set.prototype["toJSON"] = function () {
        return `Set(${[...this].map((e) => u()(e)).join(",")})`;
      };
      const x = u();
      function j(e) {
        if ((0, r.hj)(e)) {
          return e;
        }
        const n = (0, r.HD)(e) ? e : u()(e);
        if (n.length < 250) {
          return n;
        }
        let t = 0;
        for (let i = 0; i < n.length; i++) {
          const e = n.charCodeAt(i);
          t = (t << 5) - t + e;
          t = t & t;
        }
        return t;
      }
      function w(e) {
        return e === false || e === null;
      }
      function $(e, n) {
        return e.includes(n);
      }
      function k(e, n) {
        let t = 0;
        for (const [i, r] of e.entries()) {
          if (n(r, i, t++)) {
            return true;
          }
        }
        return false;
      }
      function S(e, n) {
        let t = 0;
        for (const [i, r] of e.entries()) {
          if (!n(r, i, t++)) {
            return false;
          }
        }
        return true;
      }
      function D(e, ...n) {
        for (const t of n) {
          _(e, t !== null && t !== void 0 ? t : {});
        }
        return e;
      }
      function _(e, n) {
        for (const t of A(n)) {
          (0, r.iL)(e, t, n[t], true);
        }
      }
      function P(e, n) {
        const t = [];
        const i = {};
        let r;
        for (const s of e) {
          r = n(s);
          if (r in i) {
            continue;
          }
          i[r] = 1;
          t.push(s);
        }
        return t;
      }
      function F(e, n) {
        const t = A(e);
        const i = A(n);
        if (t.length !== i.length) {
          return false;
        }
        for (const r of t) {
          if (e[r] !== n[r]) {
            return false;
          }
        }
        return true;
      }
      function z(e, n) {
        if (e.size !== n.size) {
          return false;
        }
        for (const t of e) {
          if (!n.has(t)) {
            return false;
          }
        }
        return true;
      }
      function C(e, n) {
        for (const t of e) {
          if (n.has(t)) {
            return true;
          }
        }
        return false;
      }
      function E(e) {
        const n = new Set();
        for (const t of e) {
          const e = (0, r._k)(t);
          const i = e.map((e, n) => (n === 0 ? e : `[${e}]`));
          const s = i.map((e, n) => i.slice(0, n + 1).join(""));
          for (const t of s) {
            n.add(t);
          }
        }
        return n;
      }
      function N(e, n) {
        if (e === undefined || n === undefined) {
          return true;
        }
        return C(E(e), E(n));
      }
      function T(e) {
        return A(e).length === 0;
      }
      const A = Object.keys;
      const M = Object.values;
      const L = Object.entries;
      function q(e) {
        return e === true || e === false;
      }
      function I(e) {
        const n = e.replace(/\W/g, "_");
        return (e.match(/^\d+/) ? "_" : "") + n;
      }
      function R(e, n) {
        if (p(e)) {
          return `!(${R(e.not, n)})`;
        } else if (d(e)) {
          return `(${e.and.map((e) => R(e, n)).join(") && (")})`;
        } else if (f(e)) {
          return `(${e.or.map((e) => R(e, n)).join(") || (")})`;
        } else {
          return n(e);
        }
      }
      function W(e, n) {
        if (n.length === 0) {
          return true;
        }
        const t = n.shift();
        if (t in e && W(e[t], n)) {
          delete e[t];
        }
        return T(e);
      }
      function U(e) {
        return e.charAt(0).toUpperCase() + e.substr(1);
      }
      function H(e, n = "datum") {
        const t = (0, r._k)(e);
        const i = [];
        for (let s = 1; s <= t.length; s++) {
          const e = `[${t.slice(0, s).map(r.m8).join("][")}]`;
          i.push(`${n}${e}`);
        }
        return i.join(" && ");
      }
      function B(e, n = "datum") {
        return `${n}[${(0, r.m8)((0, r._k)(e).join("."))}]`;
      }
      function J(e) {
        return e.replace(/(\[|\]|\.|'|")/g, "\\$1");
      }
      function G(e) {
        return `${(0, r._k)(e).map(J).join("\\.")}`;
      }
      function X(e, n, t) {
        return e.replace(new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), t);
      }
      function V(e) {
        return `${(0, r._k)(e).join(".")}`;
      }
      function K(e) {
        if (!e) {
          return 0;
        }
        return (0, r._k)(e).length;
      }
      function Y(...e) {
        for (const n of e) {
          if (n !== undefined) {
            return n;
          }
        }
        return undefined;
      }
      let Q = 42;
      function Z(e) {
        const n = ++Q;
        return e ? String(e) + n : n;
      }
      function ee() {
        Q = 42;
      }
      function ne(e) {
        return te(e) ? e : `__${e}`;
      }
      function te(e) {
        return e.startsWith("__");
      }
      function ie(e) {
        if (e === undefined) {
          return undefined;
        }
        return ((e % 360) + 360) % 360;
      }
      function re(e) {
        if ((0, r.hj)(e)) {
          return true;
        }
        return !isNaN(e) && !isNaN(parseFloat(e));
      }
      var se =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      const oe = "row";
      const ae = "column";
      const ce = "facet";
      const le = "x";
      const ue = "y";
      const fe = "x2";
      const de = "y2";
      const pe = "xOffset";
      const ge = "yOffset";
      const me = "radius";
      const he = "radius2";
      const be = "theta";
      const ye = "theta2";
      const ve = "latitude";
      const Oe = "longitude";
      const xe = "latitude2";
      const je = "longitude2";
      const we = "color";
      const $e = "fill";
      const ke = "stroke";
      const Se = "shape";
      const De = "size";
      const _e = "angle";
      const Pe = "opacity";
      const Fe = "fillOpacity";
      const ze = "strokeOpacity";
      const Ce = "strokeWidth";
      const Ee = "strokeDash";
      const Ne = "text";
      const Te = "order";
      const Ae = "detail";
      const Me = "key";
      const Le = "tooltip";
      const qe = "href";
      const Ie = "url";
      const Re = "description";
      const We = { x: 1, y: 1, x2: 1, y2: 1 };
      const Ue = { theta: 1, theta2: 1, radius: 1, radius2: 1 };
      function He(e) {
        return e in Ue;
      }
      const Be = { longitude: 1, longitude2: 1, latitude: 1, latitude2: 1 };
      function Je(e) {
        switch (e) {
          case ve:
            return "y";
          case xe:
            return "y2";
          case Oe:
            return "x";
          case je:
            return "x2";
        }
      }
      function Ge(e) {
        return e in Be;
      }
      const Xe = A(Be);
      const Ve = Object.assign(Object.assign(Object.assign(Object.assign({}, We), Ue), Be), {
        xOffset: 1,
        yOffset: 1,
        color: 1,
        fill: 1,
        stroke: 1,
        opacity: 1,
        fillOpacity: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
        strokeDash: 1,
        size: 1,
        angle: 1,
        shape: 1,
        order: 1,
        text: 1,
        detail: 1,
        key: 1,
        tooltip: 1,
        href: 1,
        url: 1,
        description: 1,
      });
      function Ke(e) {
        return e === we || e === $e || e === ke;
      }
      const Ye = { row: 1, column: 1, facet: 1 };
      const Qe = A(Ye);
      const Ze = Object.assign(Object.assign({}, Ve), Ye);
      const en = A(Ze);
      const { order: nn, detail: tn, tooltip: rn } = Ze,
        sn = se(Ze, ["order", "detail", "tooltip"]);
      const { row: on, column: an, facet: cn } = sn,
        ln = se(sn, ["row", "column", "facet"]);
      const un = A(sn);
      const fn = A(ln);
      function dn(e) {
        return !!ln[e];
      }
      function pn(e) {
        return !!Ze[e];
      }
      const gn = [fe, de, xe, je, ye, he];
      function mn(e) {
        const n = hn(e);
        return n !== e;
      }
      function hn(e) {
        switch (e) {
          case fe:
            return le;
          case de:
            return ue;
          case xe:
            return ve;
          case je:
            return Oe;
          case ye:
            return be;
          case he:
            return me;
        }
        return e;
      }
      function bn(e) {
        if (He(e)) {
          switch (e) {
            case be:
              return "startAngle";
            case ye:
              return "endAngle";
            case me:
              return "outerRadius";
            case he:
              return "innerRadius";
          }
        }
        return e;
      }
      function yn(e) {
        switch (e) {
          case le:
            return fe;
          case ue:
            return de;
          case ve:
            return xe;
          case Oe:
            return je;
          case be:
            return ye;
          case me:
            return he;
        }
        return undefined;
      }
      function vn(e) {
        switch (e) {
          case le:
          case fe:
            return "width";
          case ue:
          case de:
            return "height";
        }
        return undefined;
      }
      function On(e) {
        switch (e) {
          case le:
            return "xOffset";
          case ue:
            return "yOffset";
          case fe:
            return "x2Offset";
          case de:
            return "y2Offset";
          case be:
            return "thetaOffset";
          case me:
            return "radiusOffset";
          case ye:
            return "theta2Offset";
          case he:
            return "radius2Offset";
        }
        return undefined;
      }
      function xn(e) {
        switch (e) {
          case le:
            return "xOffset";
          case ue:
            return "yOffset";
        }
        return undefined;
      }
      function jn(e) {
        switch (e) {
          case "xOffset":
            return "x";
          case "yOffset":
            return "y";
        }
      }
      const wn = A(Ve);
      const {
          x: $n,
          y: kn,
          x2: Sn,
          y2: Dn,
          xOffset: _n,
          yOffset: Pn,
          latitude: Fn,
          longitude: zn,
          latitude2: Cn,
          longitude2: En,
          theta: Nn,
          theta2: Tn,
          radius: An,
          radius2: Mn,
        } = Ve,
        Ln = se(Ve, [
          "x",
          "y",
          "x2",
          "y2",
          "xOffset",
          "yOffset",
          "latitude",
          "longitude",
          "latitude2",
          "longitude2",
          "theta",
          "theta2",
          "radius",
          "radius2",
        ]);
      const qn = A(Ln);
      const In = { x: 1, y: 1 };
      const Rn = A(In);
      function Wn(e) {
        return e in In;
      }
      const Un = { theta: 1, radius: 1 };
      const Hn = A(Un);
      function Bn(e) {
        return e === "width" ? le : ue;
      }
      const Jn = { xOffset: 1, yOffset: 1 };
      const Gn = A(Jn);
      function Xn(e) {
        return e in Jn;
      }
      const { text: Vn, tooltip: Kn, href: Yn, url: Qn, description: Zn, detail: et, key: nt, order: tt } = Ln,
        it = se(Ln, ["text", "tooltip", "href", "url", "description", "detail", "key", "order"]);
      const rt = A(it);
      function st(e) {
        return !!Ln[e];
      }
      function ot(e) {
        switch (e) {
          case we:
          case $e:
          case ke:
          case De:
          case Se:
          case Pe:
          case Ce:
          case Ee:
            return true;
          case Fe:
          case ze:
          case _e:
            return false;
        }
      }
      const at = Object.assign(Object.assign(Object.assign(Object.assign({}, In), Un), Jn), it);
      const ct = A(at);
      function lt(e) {
        return !!at[e];
      }
      function ut(e, n) {
        return gt(e)[n];
      }
      const ft = {
        arc: "always",
        area: "always",
        bar: "always",
        circle: "always",
        geoshape: "always",
        image: "always",
        line: "always",
        rule: "always",
        point: "always",
        rect: "always",
        square: "always",
        trail: "always",
        text: "always",
        tick: "always",
      };
      const { geoshape: dt } = ft,
        pt = se(ft, ["geoshape"]);
      function gt(e) {
        switch (e) {
          case we:
          case $e:
          case ke:
          case Re:
          case Ae:
          case Me:
          case Le:
          case qe:
          case Te:
          case Pe:
          case Fe:
          case ze:
          case Ce:
          case ce:
          case oe:
          case ae:
            return ft;
          case le:
          case ue:
          case pe:
          case ge:
          case ve:
          case Oe:
            return pt;
          case fe:
          case de:
          case xe:
          case je:
            return {
              area: "always",
              bar: "always",
              image: "always",
              rect: "always",
              rule: "always",
              circle: "binned",
              point: "binned",
              square: "binned",
              tick: "binned",
              line: "binned",
              trail: "binned",
            };
          case De:
            return {
              point: "always",
              tick: "always",
              rule: "always",
              circle: "always",
              square: "always",
              bar: "always",
              text: "always",
              line: "always",
              trail: "always",
            };
          case Ee:
            return {
              line: "always",
              point: "always",
              tick: "always",
              rule: "always",
              circle: "always",
              square: "always",
              bar: "always",
              geoshape: "always",
            };
          case Se:
            return { point: "always", geoshape: "always" };
          case Ne:
            return { text: "always" };
          case _e:
            return { point: "always", square: "always", text: "always" };
          case Ie:
            return { image: "always" };
          case be:
            return { text: "always", arc: "always" };
          case me:
            return { text: "always", arc: "always" };
          case ye:
          case he:
            return { arc: "always" };
        }
      }
      function mt(e) {
        switch (e) {
          case le:
          case ue:
          case be:
          case me:
          case pe:
          case ge:
          case De:
          case _e:
          case Ce:
          case Pe:
          case Fe:
          case ze:
          case fe:
          case de:
          case ye:
          case he:
            return undefined;
          case ce:
          case oe:
          case ae:
          case Se:
          case Ee:
          case Ne:
          case Le:
          case qe:
          case Ie:
          case Re:
            return "discrete";
          case we:
          case $e:
          case ke:
            return "flexible";
          case ve:
          case Oe:
          case xe:
          case je:
          case Ae:
          case Me:
          case Te:
            return undefined;
        }
      }
      const ht = {
        argmax: 1,
        argmin: 1,
        average: 1,
        count: 1,
        distinct: 1,
        product: 1,
        max: 1,
        mean: 1,
        median: 1,
        min: 1,
        missing: 1,
        q1: 1,
        q3: 1,
        ci0: 1,
        ci1: 1,
        stderr: 1,
        stdev: 1,
        stdevp: 1,
        sum: 1,
        valid: 1,
        values: 1,
        variance: 1,
        variancep: 1,
      };
      const bt = { count: 1, min: 1, max: 1 };
      function yt(e) {
        return !!e && !!e["argmin"];
      }
      function vt(e) {
        return !!e && !!e["argmax"];
      }
      function Ot(e) {
        return (0, r.HD)(e) && !!ht[e];
      }
      const xt = new Set(["count", "valid", "missing", "distinct"]);
      function jt(e) {
        return (0, r.HD)(e) && xt.has(e);
      }
      function wt(e) {
        return (0, r.HD)(e) && $(["min", "max"], e);
      }
      const $t = new Set(["count", "sum", "distinct", "valid", "missing"]);
      const kt = new Set(["mean", "average", "median", "q1", "q3", "min", "max"]);
      function St(e) {
        if ((0, r.jn)(e)) {
          e = Gc(e, undefined);
        }
        return (
          "bin" +
          A(e)
            .map((n) => (Ft(e[n]) ? I(`_${n}_${L(e[n])}`) : I(`_${n}_${e[n]}`)))
            .join("")
        );
      }
      function Dt(e) {
        return e === true || (Pt(e) && !e.binned);
      }
      function _t(e) {
        return e === "binned" || (Pt(e) && e.binned === true);
      }
      function Pt(e) {
        return (0, r.Kn)(e);
      }
      function Ft(e) {
        return e === null || e === void 0 ? void 0 : e["param"];
      }
      function zt(e) {
        switch (e) {
          case oe:
          case ae:
          case De:
          case we:
          case $e:
          case ke:
          case Ce:
          case Pe:
          case Fe:
          case ze:
          case Se:
            return 6;
          case Ee:
            return 4;
          default:
            return 10;
        }
      }
      function Ct(e) {
        return !!(e === null || e === void 0 ? void 0 : e.expr);
      }
      function Et(e) {
        const n = A(e || {});
        const t = {};
        for (const i of n) {
          t[i] = Vt(e[i]);
        }
        return t;
      }
      var Nt =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      function Tt(e) {
        const {
            anchor: n,
            frame: t,
            offset: i,
            orient: r,
            angle: s,
            limit: o,
            color: a,
            subtitleColor: c,
            subtitleFont: l,
            subtitleFontSize: u,
            subtitleFontStyle: f,
            subtitleFontWeight: d,
            subtitleLineHeight: p,
            subtitlePadding: g,
          } = e,
          m = Nt(e, [
            "anchor",
            "frame",
            "offset",
            "orient",
            "angle",
            "limit",
            "color",
            "subtitleColor",
            "subtitleFont",
            "subtitleFontSize",
            "subtitleFontStyle",
            "subtitleFontWeight",
            "subtitleLineHeight",
            "subtitlePadding",
          ]);
        const h = Object.assign(Object.assign({}, m), a ? { fill: a } : {});
        const b = Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(Object.assign(Object.assign({}, n ? { anchor: n } : {}), t ? { frame: t } : {}), i ? { offset: i } : {}),
              r ? { orient: r } : {}
            ),
            s !== undefined ? { angle: s } : {}
          ),
          o !== undefined ? { limit: o } : {}
        );
        const y = Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, c ? { subtitleColor: c } : {}), l ? { subtitleFont: l } : {}),
                  u ? { subtitleFontSize: u } : {}
                ),
                f ? { subtitleFontStyle: f } : {}
              ),
              d ? { subtitleFontWeight: d } : {}
            ),
            p ? { subtitleLineHeight: p } : {}
          ),
          g ? { subtitlePadding: g } : {}
        );
        const O = v(e, ["align", "baseline", "dx", "dy", "limit"]);
        return { titleMarkConfig: h, subtitleMarkConfig: O, nonMarkTitleProperties: b, subtitle: y };
      }
      function At(e) {
        return (0, r.HD)(e) || ((0, r.kJ)(e) && (0, r.HD)(e[0]));
      }
      function Mt(e) {
        return !!(e === null || e === void 0 ? void 0 : e.signal);
      }
      function Lt(e) {
        return !!e["step"];
      }
      function qt(e) {
        if (!(0, r.kJ)(e)) {
          return "fields" in e && !("data" in e);
        }
        return false;
      }
      function It(e) {
        if (!(0, r.kJ)(e)) {
          return "fields" in e && "data" in e;
        }
        return false;
      }
      function Rt(e) {
        if (!(0, r.kJ)(e)) {
          return "field" in e && "data" in e;
        }
        return false;
      }
      const Wt = {
        aria: 1,
        description: 1,
        ariaRole: 1,
        ariaRoleDescription: 1,
        blend: 1,
        opacity: 1,
        fill: 1,
        fillOpacity: 1,
        stroke: 1,
        strokeCap: 1,
        strokeWidth: 1,
        strokeOpacity: 1,
        strokeDash: 1,
        strokeDashOffset: 1,
        strokeJoin: 1,
        strokeOffset: 1,
        strokeMiterLimit: 1,
        startAngle: 1,
        endAngle: 1,
        padAngle: 1,
        innerRadius: 1,
        outerRadius: 1,
        size: 1,
        shape: 1,
        interpolate: 1,
        tension: 1,
        orient: 1,
        align: 1,
        baseline: 1,
        text: 1,
        dir: 1,
        dx: 1,
        dy: 1,
        ellipsis: 1,
        limit: 1,
        radius: 1,
        theta: 1,
        angle: 1,
        font: 1,
        fontSize: 1,
        fontWeight: 1,
        fontStyle: 1,
        lineBreak: 1,
        lineHeight: 1,
        cursor: 1,
        href: 1,
        tooltip: 1,
        cornerRadius: 1,
        cornerRadiusTopLeft: 1,
        cornerRadiusTopRight: 1,
        cornerRadiusBottomLeft: 1,
        cornerRadiusBottomRight: 1,
        aspect: 1,
        width: 1,
        height: 1,
        url: 1,
        smooth: 1,
      };
      const Ut = A(Wt);
      const Ht = { arc: 1, area: 1, group: 1, image: 1, line: 1, path: 1, rect: 1, rule: 1, shape: 1, symbol: 1, text: 1, trail: 1 };
      const Bt = ["cornerRadius", "cornerRadiusTopLeft", "cornerRadiusTopRight", "cornerRadiusBottomLeft", "cornerRadiusBottomRight"];
      var Jt =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      const Gt = " – ";
      function Xt(e) {
        const n = (0, r.kJ)(e.condition) ? e.condition.map(Kt) : Kt(e.condition);
        return Object.assign(Object.assign({}, Vt(e)), { condition: n });
      }
      function Vt(e) {
        if (Ct(e)) {
          const { expr: n } = e,
            t = Jt(e, ["expr"]);
          return Object.assign({ signal: n }, t);
        }
        return e;
      }
      function Kt(e) {
        if (Ct(e)) {
          const { expr: n } = e,
            t = Jt(e, ["expr"]);
          return Object.assign({ signal: n }, t);
        }
        return e;
      }
      function Yt(e) {
        if (Ct(e)) {
          const { expr: n } = e,
            t = Jt(e, ["expr"]);
          return Object.assign({ signal: n }, t);
        }
        if (Mt(e)) {
          return e;
        }
        return e !== undefined ? { value: e } : undefined;
      }
      function Qt(e) {
        if (Mt(e)) {
          return e.signal;
        }
        return (0, r.m8)(e);
      }
      function Zt(e) {
        if (Mt(e)) {
          return e.signal;
        }
        return (0, r.m8)(e.value);
      }
      function ei(e) {
        if (Mt(e)) {
          return e.signal;
        }
        return e == null ? null : (0, r.m8)(e);
      }
      function ni(e, n, t) {
        for (const i of t) {
          const t = ri(i, n.markDef, n.config);
          if (t !== undefined) {
            e[i] = Yt(t);
          }
        }
        return e;
      }
      function ti(e) {
        var n;
        return [].concat(e.type, (n = e.style) !== null && n !== void 0 ? n : []);
      }
      function ii(e, n, t, i = {}) {
        const { vgChannel: r, ignoreVgConfig: s } = i;
        if (r && n[r] !== undefined) {
          return n[r];
        } else if (n[e] !== undefined) {
          return n[e];
        } else if (s && (!r || r === e)) {
          return undefined;
        }
        return ri(e, n, t, i);
      }
      function ri(e, n, t, { vgChannel: i } = {}) {
        return Y(i ? si(e, n, t.style) : undefined, si(e, n, t.style), i ? t[n.type][i] : undefined, t[n.type][e], i ? t.mark[i] : t.mark[e]);
      }
      function si(e, n, t) {
        return oi(e, ti(n), t);
      }
      function oi(e, n, t) {
        n = (0, r.IX)(n);
        let i;
        for (const r of n) {
          const n = t[r];
          if (n && n[e] !== undefined) {
            i = n[e];
          }
        }
        return i;
      }
      function ai(e, n) {
        return (0, r.IX)(e).reduce(
          (e, t) => {
            var i;
            e.field.push(Sc(t, n));
            e.order.push((i = t.sort) !== null && i !== void 0 ? i : "ascending");
            return e;
          },
          { field: [], order: [] }
        );
      }
      function ci(e, n) {
        const t = [...e];
        n.forEach((e) => {
          for (const n of t) {
            if (h(n, e)) {
              return;
            }
          }
          t.push(e);
        });
        return t;
      }
      function li(e, n) {
        if (h(e, n) || !n) {
          return e;
        } else if (!e) {
          return n;
        } else {
          return [...(0, r.IX)(e), ...(0, r.IX)(n)].join(", ");
        }
      }
      function ui(e, n) {
        const t = e.value;
        const i = n.value;
        if (t == null || i === null) {
          return { explicit: e.explicit, value: null };
        } else if ((At(t) || Mt(t)) && (At(i) || Mt(i))) {
          return { explicit: e.explicit, value: li(t, i) };
        } else if (At(t) || Mt(t)) {
          return { explicit: e.explicit, value: t };
        } else if (At(i) || Mt(i)) {
          return { explicit: e.explicit, value: i };
        } else if (!At(t) && !Mt(t) && !At(i) && !Mt(i)) {
          return { explicit: e.explicit, value: ci(t, i) };
        }
        throw new Error("It should never reach here");
      }
      function fi(e) {
        return `Invalid specification ${x(e)}. Make sure the specification includes at least one of the following properties: "mark", "layer", "facet", "hconcat", "vconcat", "concat", or "repeat".`;
      }
      const di = 'Autosize "fit" only works for single views and layered views.';
      function pi(e) {
        const n = e == "width" ? "Width" : "Height";
        return `${n} "container" only works for single views and layered views.`;
      }
      function gi(e) {
        const n = e == "width" ? "Width" : "Height";
        const t = e == "width" ? "x" : "y";
        return `${n} "container" only works well with autosize "fit" or "fit-${t}".`;
      }
      function mi(e) {
        return e ? `Dropping "fit-${e}" because spec has discrete ${vn(e)}.` : `Dropping "fit" because spec has discrete size.`;
      }
      function hi(e) {
        return `Unknown field for ${e}. Cannot calculate view size.`;
      }
      function bi(e) {
        return `Cannot project a selection on encoding channel "${e}", which has no field.`;
      }
      function yi(e, n) {
        return `Cannot project a selection on encoding channel "${e}" as it uses an aggregate function ("${n}").`;
      }
      function vi(e) {
        return `The "nearest" transform is not supported for ${e} marks.`;
      }
      function Oi(e) {
        return `Selection not supported for ${e} yet.`;
      }
      function xi(e) {
        return `Cannot find a selection named "${e}".`;
      }
      const ji = "Scale bindings are currently only supported for scales with unbinned, continuous domains.";
      const wi = "Legend bindings are only supported for selections over an individual field or encoding channel.";
      function $i(e) {
        return `Lookups can only be performed on selection parameters. "${e}" is a variable parameter.`;
      }
      function ki(e) {
        return `Cannot define and lookup the "${e}" selection in the same view. ` + `Try moving the lookup into a second, layered view?`;
      }
      const Si = "The same selection must be used to override scale domains in a layered view.";
      const Di = 'Interval selections should be initialized using "x" and/or "y" keys.';
      function _i(e) {
        return `Unknown repeated value "${e}".`;
      }
      function Pi(e) {
        return `The "columns" property cannot be used when "${e}" has nested row/column.`;
      }
      const Fi = "Axes cannot be shared in concatenated or repeated views yet (https://github.com/vega/vega-lite/issues/2415).";
      function zi(e) {
        return `Unrecognized parse "${e}".`;
      }
      function Ci(e, n, t) {
        return `An ancestor parsed field "${e}" as ${t} but a child wants to parse the field as ${n}.`;
      }
      const Ei = "Attempt to add the same child twice.";
      function Ni(e) {
        return `Ignoring an invalid transform: ${x(e)}.`;
      }
      const Ti =
        'If "from.fields" is not specified, "as" has to be a string that specifies the key to be used for the data from the secondary source.';
      function Ai(e) {
        return `Config.customFormatTypes is not true, thus custom format type and format for channel ${e} are dropped.`;
      }
      function Mi(e) {
        const { parentProjection: n, projection: t } = e;
        return `Layer's shared projection ${x(n)} is overridden by a child projection ${x(t)}.`;
      }
      const Li = "Arc marks uses theta channel rather than angle, replacing angle with theta.";
      function qi(e) {
        return `${e}Offset dropped because ${e} is continuous`;
      }
      function Ii(e) {
        return `There is no ${e} encoding. Replacing ${e}Offset encoding as ${e}.`;
      }
      function Ri(e, n, t) {
        return `Channel ${e} is a ${n}. Converted to {value: ${x(t)}}.`;
      }
      function Wi(e) {
        return `Invalid field type "${e}".`;
      }
      function Ui(e, n) {
        return `Invalid field type "${e}" for aggregate: "${n}", using "quantitative" instead.`;
      }
      function Hi(e) {
        return `Invalid aggregation operator "${e}".`;
      }
      function Bi(e, n) {
        return `Missing type for channel "${e}", using "${n}" instead.`;
      }
      function Ji(e, n) {
        const { fill: t, stroke: i } = n;
        return `Dropping color ${e} as the plot also has ${t && i ? "fill and stroke" : t ? "fill" : "stroke"}.`;
      }
      function Gi(e) {
        return `Position range does not support relative band size for ${e}.`;
      }
      function Xi(e, n) {
        return `Dropping ${x(e)} from channel "${n}" since it does not contain any data field, datum, value, or signal.`;
      }
      const Vi = "Line marks cannot encode size with a non-groupby field. You may want to use trail marks instead.";
      function Ki(e, n, t) {
        return `${e} dropped as it is incompatible with "${n}"${t ? ` when ${t}` : ""}.`;
      }
      function Yi(e) {
        return `${e} encoding has no scale, so specified scale is ignored.`;
      }
      function Qi(e) {
        return `${e}-encoding is dropped as ${e} is not a valid encoding channel.`;
      }
      function Zi(e) {
        return `${e} encoding should be discrete (ordinal / nominal / binned).`;
      }
      function er(e) {
        return `${e} encoding should be discrete (ordinal / nominal / binned) or use a discretizing scale (e.g. threshold).`;
      }
      function nr(e) {
        return `Facet encoding dropped as ${e.join(" and ")} ${e.length > 1 ? "are" : "is"} also specified.`;
      }
      function tr(e, n) {
        return `Using discrete channel "${e}" to encode "${n}" field can be misleading as it does not encode ${n === "ordinal" ? "order" : "magnitude"}.`;
      }
      function ir(e) {
        return `The ${e} for range marks cannot be an expression`;
      }
      function rr(e, n) {
        const t = e && n ? "x2 and y2" : e ? "x2" : "y2";
        return `Line mark is for continuous lines and thus cannot be used with ${t}. We will use the rule mark (line segments) instead.`;
      }
      function sr(e, n) {
        return `Specified orient "${e}" overridden with "${n}".`;
      }
      const or = "Custom domain scale cannot be unioned with default field-based domain.";
      function ar(e) {
        return `Cannot use the scale property "${e}" with non-color channel.`;
      }
      function cr(e) {
        return `Cannot use the relative band size with ${e} scale.`;
      }
      function lr(e) {
        return `Using unaggregated domain with raw field has no effect (${x(e)}).`;
      }
      function ur(e) {
        return `Unaggregated domain not applicable for "${e}" since it produces values outside the origin domain of the source data.`;
      }
      function fr(e) {
        return `Unaggregated domain is currently unsupported for log scale (${x(e)}).`;
      }
      function dr(e) {
        return `Cannot apply size to non-oriented mark "${e}".`;
      }
      function pr(e, n, t) {
        return `Channel "${e}" does not work with "${n}" scale. We are using "${t}" scale instead.`;
      }
      function gr(e, n) {
        return `FieldDef does not work with "${e}" scale. We are using "${n}" scale instead.`;
      }
      function mr(e, n, t) {
        return `${t}-scale's "${n}" is dropped as it does not work with ${e} scale.`;
      }
      function hr(e, n) {
        return `Scale type "${n}" does not work with mark "${e}".`;
      }
      function br(e) {
        return `The step for "${e}" is dropped because the ${e === "width" ? "x" : "y"} is continuous.`;
      }
      function yr(e, n, t, i) {
        return `Conflicting ${n.toString()} property "${e.toString()}" (${x(t)} and ${x(i)}). Using ${x(t)}.`;
      }
      function vr(e, n, t, i) {
        return `Conflicting ${n.toString()} property "${e.toString()}" (${x(t)} and ${x(i)}). Using the union of the two domains.`;
      }
      function Or(e) {
        return `Setting the scale to be independent for "${e}" means we also have to set the guide (axis or legend) to be independent.`;
      }
      function xr(e) {
        return `Dropping sort property ${x(e)} as unioned domains only support boolean or op "count", "min", and "max".`;
      }
      const jr = "Domains that should be unioned has conflicting sort properties. Sort will be set to true.";
      const wr =
        "Detected faceted independent scales that union domain of multiple fields from different data sources. We will use the first field. The result view size may be incorrect.";
      const $r =
        "Detected faceted independent scales that union domain of the same fields from different source. We will assume that this is the same field from a different fork of the same data source. However, if this is not the case, the result view size may be incorrect.";
      const kr =
        "Detected faceted independent scales that union domain of multiple fields from the same data source. We will use the first field. The result view size may be incorrect.";
      const Sr = "Invalid channel for axis.";
      function Dr(e) {
        return `Cannot stack "${e}" if there is already "${e}2".`;
      }
      function _r(e) {
        return `Cannot stack non-linear scale (${e}).`;
      }
      function Pr(e) {
        return `Stacking is applied even though the aggregate function is non-summative ("${e}").`;
      }
      function Fr(e, n) {
        return `Invalid ${e}: ${x(n)}.`;
      }
      function zr(e) {
        return `Dropping day from datetime ${x(e)} as day cannot be combined with other units.`;
      }
      function Cr(e, n) {
        return `${n ? "extent " : ""}${n && e ? "and " : ""}${e ? "center " : ""}${n && e ? "are " : "is "}not needed when data are aggregated.`;
      }
      function Er(e, n, t) {
        return `${e} is not usually used with ${n} for ${t}.`;
      }
      function Nr(e, n) {
        return `Continuous axis should not have customized aggregation function ${e}; ${n} already agregates the axis.`;
      }
      function Tr(e) {
        return `1D error band does not support ${e}.`;
      }
      function Ar(e) {
        return `Channel ${e} is required for "binned" bin.`;
      }
      function Mr(e) {
        return `Channel ${e} should not be used with "binned" bin.`;
      }
      function Lr(e) {
        return `Domain for ${e} is required for threshold scale.`;
      }
      var qr =
        (undefined && undefined.__classPrivateFieldSet) ||
        function (e, n, t, i, r) {
          if (i === "m") throw new TypeError("Private method is not writable");
          if (i === "a" && !r) throw new TypeError("Private accessor was defined without a setter");
          if (typeof n === "function" ? e !== n || !r : !n.has(e))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return i === "a" ? r.call(e, t) : r ? (r.value = t) : n.set(e, t), t;
        };
      var Ir =
        (undefined && undefined.__classPrivateFieldGet) ||
        function (e, n, t, i) {
          if (t === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
          if (typeof n === "function" ? e !== n || !i : !n.has(e))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return t === "m" ? i : t === "a" ? i.call(e) : i ? i.value : n.get(e);
        };
      var Rr;
      const Wr = (0, r.kg)(r.uU);
      let Ur = Wr;
      class Hr {
        constructor() {
          this.warns = [];
          this.infos = [];
          this.debugs = [];
          Rr.set(this, Warn);
        }
        level(e) {
          if (e) {
            qr(this, Rr, e, "f");
            return this;
          }
          return Ir(this, Rr, "f");
        }
        warn(...e) {
          if (Ir(this, Rr, "f") >= Warn) this.warns.push(...e);
          return this;
        }
        info(...e) {
          if (Ir(this, Rr, "f") >= Info) this.infos.push(...e);
          return this;
        }
        debug(...e) {
          if (Ir(this, Rr, "f") >= Debug) this.debugs.push(...e);
          return this;
        }
        error(...e) {
          if (Ir(this, Rr, "f") >= ErrorLevel) throw Error(...e);
          return this;
        }
      }
      Rr = new WeakMap();
      function Br(e) {
        return () => {
          Ur = new Hr();
          e(Ur);
          Gr();
        };
      }
      function Jr(e) {
        Ur = e;
        return Ur;
      }
      function Gr() {
        Ur = Wr;
        return Ur;
      }
      function Xr(...e) {
        Ur.error(...e);
      }
      function Vr(...e) {
        Ur.warn(...e);
      }
      function Kr(...e) {
        Ur.info(...e);
      }
      function Yr(...e) {
        Ur.debug(...e);
      }
      function Qr(e) {
        if (e && (0, r.Kn)(e)) {
          for (const n of ds) {
            if (n in e) {
              return true;
            }
          }
        }
        return false;
      }
      const Zr = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
      const es = Zr.map((e) => e.substr(0, 3));
      const ns = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
      const ts = ns.map((e) => e.substr(0, 3));
      function is(e) {
        if (re(e)) {
          e = +e;
        }
        if ((0, r.hj)(e)) {
          if (e > 4) {
            Vr(Fr("quarter", e));
          }
          return e - 1;
        } else {
          throw new Error(Fr("quarter", e));
        }
      }
      function rs(e) {
        if (re(e)) {
          e = +e;
        }
        if ((0, r.hj)(e)) {
          return e - 1;
        } else {
          const n = e.toLowerCase();
          const t = Zr.indexOf(n);
          if (t !== -1) {
            return t;
          }
          const i = n.substr(0, 3);
          const r = es.indexOf(i);
          if (r !== -1) {
            return r;
          }
          throw new Error(Fr("month", e));
        }
      }
      function ss(e) {
        if (re(e)) {
          e = +e;
        }
        if ((0, r.hj)(e)) {
          return e % 7;
        } else {
          const n = e.toLowerCase();
          const t = ns.indexOf(n);
          if (t !== -1) {
            return t;
          }
          const i = n.substr(0, 3);
          const r = ts.indexOf(i);
          if (r !== -1) {
            return r;
          }
          throw new Error(Fr("day", e));
        }
      }
      function os(e, n) {
        const t = [];
        if (n && e.day !== undefined) {
          if (A(e).length > 1) {
            Vr(zr(e));
            e = b(e);
            delete e.day;
          }
        }
        if (e.year !== undefined) {
          t.push(e.year);
        } else {
          t.push(2012);
        }
        if (e.month !== undefined) {
          const i = n ? rs(e.month) : e.month;
          t.push(i);
        } else if (e.quarter !== undefined) {
          const i = n ? is(e.quarter) : e.quarter;
          t.push((0, r.hj)(i) ? i * 3 : `${i}*3`);
        } else {
          t.push(0);
        }
        if (e.date !== undefined) {
          t.push(e.date);
        } else if (e.day !== undefined) {
          const i = n ? ss(e.day) : e.day;
          t.push((0, r.hj)(i) ? i + 1 : `${i}+1`);
        } else {
          t.push(1);
        }
        for (const i of ["hours", "minutes", "seconds", "milliseconds"]) {
          const n = e[i];
          t.push(typeof n === "undefined" ? 0 : n);
        }
        return t;
      }
      function as(e) {
        const n = os(e, true);
        const t = n.join(", ");
        if (e.utc) {
          return `utc(${t})`;
        } else {
          return `datetime(${t})`;
        }
      }
      function cs(e) {
        const n = os(e, false);
        const t = n.join(", ");
        if (e.utc) {
          return `utc(${t})`;
        } else {
          return `datetime(${t})`;
        }
      }
      function ls(e) {
        const n = os(e, true);
        if (e.utc) {
          return +new Date(Date.UTC(...n));
        } else {
          return +new Date(...n);
        }
      }
      var us =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      const fs = { year: 1, quarter: 1, month: 1, week: 1, day: 1, dayofyear: 1, date: 1, hours: 1, minutes: 1, seconds: 1, milliseconds: 1 };
      const ds = A(fs);
      function ps(e) {
        return !!fs[e];
      }
      const gs = {
        utcyear: 1,
        utcquarter: 1,
        utcmonth: 1,
        utcweek: 1,
        utcday: 1,
        utcdayofyear: 1,
        utcdate: 1,
        utchours: 1,
        utcminutes: 1,
        utcseconds: 1,
        utcmilliseconds: 1,
      };
      const ms = {
        yearquarter: 1,
        yearquartermonth: 1,
        yearmonth: 1,
        yearmonthdate: 1,
        yearmonthdatehours: 1,
        yearmonthdatehoursminutes: 1,
        yearmonthdatehoursminutesseconds: 1,
        yearweek: 1,
        yearweekday: 1,
        yearweekdayhours: 1,
        yearweekdayhoursminutes: 1,
        yearweekdayhoursminutesseconds: 1,
        yeardayofyear: 1,
        quartermonth: 1,
        monthdate: 1,
        monthdatehours: 1,
        monthdatehoursminutes: 1,
        monthdatehoursminutesseconds: 1,
        weekday: 1,
        weeksdayhours: 1,
        weekdayhoursminutes: 1,
        weekdayhoursminutesseconds: 1,
        dayhours: 1,
        dayhoursminutes: 1,
        dayhoursminutesseconds: 1,
        hoursminutes: 1,
        hoursminutesseconds: 1,
        minutesseconds: 1,
        secondsmilliseconds: 1,
      };
      const hs = {
        utcyearquarter: 1,
        utcyearquartermonth: 1,
        utcyearmonth: 1,
        utcyearmonthdate: 1,
        utcyearmonthdatehours: 1,
        utcyearmonthdatehoursminutes: 1,
        utcyearmonthdatehoursminutesseconds: 1,
        utcyearweek: 1,
        utcyearweekday: 1,
        utcyearweekdayhours: 1,
        utcyearweekdayhoursminutes: 1,
        utcyearweekdayhoursminutesseconds: 1,
        utcyeardayofyear: 1,
        utcquartermonth: 1,
        utcmonthdate: 1,
        utcmonthdatehours: 1,
        utcmonthdatehoursminutes: 1,
        utcmonthdatehoursminutesseconds: 1,
        utcweekday: 1,
        utcweeksdayhours: 1,
        utcweekdayhoursminutes: 1,
        utcweekdayhoursminutesseconds: 1,
        utcdayhours: 1,
        utcdayhoursminutes: 1,
        utcdayhoursminutesseconds: 1,
        utchoursminutes: 1,
        utchoursminutesseconds: 1,
        utcminutesseconds: 1,
        utcsecondsmilliseconds: 1,
      };
      function bs(e) {
        return e.startsWith("utc");
      }
      function ys(e) {
        return e.substr(3);
      }
      const vs = { "year-month": "%b %Y ", "year-month-date": "%b %d, %Y " };
      function Os(e) {
        return ds.filter((n) => xs(e, n));
      }
      function xs(e, n) {
        const t = e.indexOf(n);
        if (t < 0) {
          return false;
        }
        if (t > 0 && n === "seconds" && e.charAt(t - 1) === "i") {
          return false;
        }
        if (e.length > t + 3 && n === "day" && e.charAt(t + 3) === "o") {
          return false;
        }
        if (t > 0 && n === "year" && e.charAt(t - 1) === "f") {
          return false;
        }
        return true;
      }
      function js(e, n, { end: t } = { end: false }) {
        const i = H(n);
        const r = bs(e) ? "utc" : "";
        function s(e) {
          if (e === "quarter") {
            return `(${r}quarter(${i})-1)`;
          } else {
            return `${r}${e}(${i})`;
          }
        }
        let o;
        const a = {};
        for (const c of ds) {
          if (xs(e, c)) {
            a[c] = s(c);
            o = c;
          }
        }
        if (t) {
          a[o] += "+1";
        }
        return cs(a);
      }
      function ws(e) {
        if (!e) {
          return undefined;
        }
        const n = Os(e);
        return `timeUnitSpecifier(${x(n)}, ${x(vs)})`;
      }
      function $s(e, n, t) {
        if (!e) {
          return undefined;
        }
        const i = ws(e);
        const r = t || bs(e);
        return `${r ? "utc" : "time"}Format(${n}, ${i})`;
      }
      function ks(e) {
        if (!e) {
          return undefined;
        }
        let n;
        if ((0, r.HD)(e)) {
          n = { unit: e };
        } else if ((0, r.Kn)(e)) {
          n = Object.assign(Object.assign({}, e), e.unit ? { unit: e.unit } : {});
        }
        if (bs(n.unit)) {
          n.utc = true;
          n.unit = ys(n.unit);
        }
        return n;
      }
      function Ss(e) {
        const n = ks(e),
          { utc: t } = n,
          i = us(n, ["utc"]);
        if (i.unit) {
          return (
            (t ? "utc" : "") +
            A(i)
              .map((e) => I(`${e === "unit" ? "" : `_${e}_`}${i[e]}`))
              .join("")
          );
        } else {
          return (
            (t ? "utc" : "") +
            "timeunit" +
            A(i)
              .map((e) => I(`_${e}_${i[e]}`))
              .join("")
          );
        }
      }
      function Ds(e) {
        return e === null || e === void 0 ? void 0 : e["param"];
      }
      function _s(e) {
        return !!(e === null || e === void 0 ? void 0 : e.field) && e.equal !== undefined;
      }
      function Ps(e) {
        return !!(e === null || e === void 0 ? void 0 : e.field) && e.lt !== undefined;
      }
      function Fs(e) {
        return !!(e === null || e === void 0 ? void 0 : e.field) && e.lte !== undefined;
      }
      function zs(e) {
        return !!(e === null || e === void 0 ? void 0 : e.field) && e.gt !== undefined;
      }
      function Cs(e) {
        return !!(e === null || e === void 0 ? void 0 : e.field) && e.gte !== undefined;
      }
      function Es(e) {
        if (e === null || e === void 0 ? void 0 : e.field) {
          if ((0, r.kJ)(e.range) && e.range.length === 2) {
            return true;
          } else if (Mt(e.range)) {
            return true;
          }
        }
        return false;
      }
      function Ns(e) {
        return !!(e === null || e === void 0 ? void 0 : e.field) && ((0, r.kJ)(e.oneOf) || (0, r.kJ)(e.in));
      }
      function Ts(e) {
        return !!(e === null || e === void 0 ? void 0 : e.field) && e.valid !== undefined;
      }
      function As(e) {
        return Ns(e) || _s(e) || Es(e) || Ps(e) || zs(e) || Fs(e) || Cs(e);
      }
      function Ms(e, n) {
        return Qc(e, { timeUnit: n, wrapTime: true });
      }
      function Ls(e, n) {
        return e.map((e) => Ms(e, n));
      }
      function qs(e, n = true) {
        var t;
        const { field: i } = e;
        const r = (t = ks(e.timeUnit)) === null || t === void 0 ? void 0 : t.unit;
        const s = r ? `time(${js(r, i)})` : Sc(e, { expr: "datum" });
        if (_s(e)) {
          return `${s}===${Ms(e.equal, r)}`;
        } else if (Ps(e)) {
          const n = e.lt;
          return `${s}<${Ms(n, r)}`;
        } else if (zs(e)) {
          const n = e.gt;
          return `${s}>${Ms(n, r)}`;
        } else if (Fs(e)) {
          const n = e.lte;
          return `${s}<=${Ms(n, r)}`;
        } else if (Cs(e)) {
          const n = e.gte;
          return `${s}>=${Ms(n, r)}`;
        } else if (Ns(e)) {
          return `indexof([${Ls(e.oneOf, r).join(",")}], ${s}) !== -1`;
        } else if (Ts(e)) {
          return Is(s, e.valid);
        } else if (Es(e)) {
          const { range: t } = e;
          const i = Mt(t) ? { signal: `${t.signal}[0]` } : t[0];
          const o = Mt(t) ? { signal: `${t.signal}[1]` } : t[1];
          if (i !== null && o !== null && n) {
            return "inrange(" + s + ", [" + Ms(i, r) + ", " + Ms(o, r) + "])";
          }
          const a = [];
          if (i !== null) {
            a.push(`${s} >= ${Ms(i, r)}`);
          }
          if (o !== null) {
            a.push(`${s} <= ${Ms(o, r)}`);
          }
          return a.length > 0 ? a.join(" && ") : "true";
        }
        throw new Error(`Invalid field predicate: ${x(e)}`);
      }
      function Is(e, n = true) {
        if (n) {
          return `isValid(${e}) && isFinite(+${e})`;
        } else {
          return `!isValid(${e}) || !isFinite(+${e})`;
        }
      }
      function Rs(e) {
        var n;
        if (As(e) && e.timeUnit) {
          return Object.assign(Object.assign({}, e), { timeUnit: (n = ks(e.timeUnit)) === null || n === void 0 ? void 0 : n.unit });
        }
        return e;
      }
      var Ws = t(56498);
      const Us = { quantitative: "quantitative", ordinal: "ordinal", temporal: "temporal", nominal: "nominal", geojson: "geojson" };
      function Hs(e) {
        return e in Us;
      }
      function Bs(e) {
        return e === "quantitative" || e === "temporal";
      }
      function Js(e) {
        return e === "ordinal" || e === "nominal";
      }
      const Gs = Us.quantitative;
      const Xs = Us.ordinal;
      const Vs = Us.temporal;
      const Ks = Us.nominal;
      const Ys = Us.geojson;
      const Qs = A(Us);
      function Zs(e) {
        if (e) {
          e = e.toLowerCase();
          switch (e) {
            case "q":
            case Gs:
              return "quantitative";
            case "t":
            case Vs:
              return "temporal";
            case "o":
            case Xs:
              return "ordinal";
            case "n":
            case Ks:
              return "nominal";
            case Ys:
              return "geojson";
          }
        }
        return undefined;
      }
      var eo =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      const no = {
        LINEAR: "linear",
        LOG: "log",
        POW: "pow",
        SQRT: "sqrt",
        SYMLOG: "symlog",
        IDENTITY: "identity",
        SEQUENTIAL: "sequential",
        TIME: "time",
        UTC: "utc",
        QUANTILE: "quantile",
        QUANTIZE: "quantize",
        THRESHOLD: "threshold",
        BIN_ORDINAL: "bin-ordinal",
        ORDINAL: "ordinal",
        POINT: "point",
        BAND: "band",
      };
      const to = {
        linear: "numeric",
        log: "numeric",
        pow: "numeric",
        sqrt: "numeric",
        symlog: "numeric",
        identity: "numeric",
        sequential: "numeric",
        time: "time",
        utc: "time",
        ordinal: "ordinal",
        "bin-ordinal": "bin-ordinal",
        point: "ordinal-position",
        band: "ordinal-position",
        quantile: "discretizing",
        quantize: "discretizing",
        threshold: "discretizing",
      };
      const io = A(to);
      function ro(e, n) {
        const t = to[e];
        const i = to[n];
        return t === i || (t === "ordinal-position" && i === "time") || (i === "ordinal-position" && t === "time");
      }
      const so = {
        linear: 0,
        log: 1,
        pow: 1,
        sqrt: 1,
        symlog: 1,
        identity: 1,
        sequential: 1,
        time: 0,
        utc: 0,
        point: 10,
        band: 11,
        ordinal: 0,
        "bin-ordinal": 0,
        quantile: 0,
        quantize: 0,
        threshold: 0,
      };
      function oo(e) {
        return so[e];
      }
      const ao = new Set(["linear", "log", "pow", "sqrt", "symlog"]);
      const co = new Set([...ao, "time", "utc"]);
      function lo(e) {
        return ao.has(e);
      }
      const uo = new Set(["quantile", "quantize", "threshold"]);
      const fo = new Set([...co, ...uo, "sequential", "identity"]);
      const po = new Set(["ordinal", "bin-ordinal", "point", "band"]);
      const go = new Set(["time", "utc"]);
      function mo(e) {
        return po.has(e);
      }
      function ho(e) {
        return fo.has(e);
      }
      function bo(e) {
        return co.has(e);
      }
      function yo(e) {
        return uo.has(e);
      }
      const vo = {
        pointPadding: 0.5,
        barBandPaddingInner: 0.1,
        rectBandPaddingInner: 0,
        bandWithNestedOffsetPaddingInner: 0.2,
        bandWithNestedOffsetPaddingOuter: 0.2,
        minBandSize: 2,
        minFontSize: 8,
        maxFontSize: 40,
        minOpacity: 0.3,
        maxOpacity: 0.8,
        minSize: 9,
        minStrokeWidth: 1,
        maxStrokeWidth: 4,
        quantileCount: 4,
        quantizeCount: 4,
        zero: true,
      };
      function Oo(e) {
        return !(0, r.HD)(e) && !!e["name"];
      }
      function xo(e) {
        return e === null || e === void 0 ? void 0 : e["param"];
      }
      function jo(e) {
        return e === null || e === void 0 ? void 0 : e["unionWith"];
      }
      function wo(e) {
        return (0, Ws.isObject)(e) && "field" in e;
      }
      const $o = {
        type: 1,
        domain: 1,
        domainMax: 1,
        domainMin: 1,
        domainMid: 1,
        align: 1,
        range: 1,
        rangeMax: 1,
        rangeMin: 1,
        scheme: 1,
        bins: 1,
        reverse: 1,
        round: 1,
        clamp: 1,
        nice: 1,
        base: 1,
        exponent: 1,
        constant: 1,
        interpolate: 1,
        zero: 1,
        padding: 1,
        paddingInner: 1,
        paddingOuter: 1,
      };
      const ko = A($o);
      const { type: So, domain: Do, range: _o, rangeMax: Po, rangeMin: Fo, scheme: zo } = $o,
        Co = eo($o, ["type", "domain", "range", "rangeMax", "rangeMin", "scheme"]);
      const Eo = A(Co);
      function No(e, n) {
        switch (n) {
          case "type":
          case "domain":
          case "reverse":
          case "range":
            return true;
          case "scheme":
          case "interpolate":
            return !["point", "band", "identity"].includes(e);
          case "bins":
            return !["point", "band", "identity", "ordinal"].includes(e);
          case "round":
            return bo(e) || e === "band" || e === "point";
          case "padding":
          case "rangeMin":
          case "rangeMax":
            return bo(e) || ["point", "band"].includes(e);
          case "paddingOuter":
          case "align":
            return ["point", "band"].includes(e);
          case "paddingInner":
            return e === "band";
          case "domainMax":
          case "domainMid":
          case "domainMin":
          case "clamp":
            return bo(e);
          case "nice":
            return bo(e) || e === "quantize" || e === "threshold";
          case "exponent":
            return e === "pow";
          case "base":
            return e === "log";
          case "constant":
            return e === "symlog";
          case "zero":
            return ho(e) && !$(["log", "time", "utc", "threshold", "quantile"], e);
        }
      }
      function To(e, n) {
        switch (n) {
          case "interpolate":
          case "scheme":
          case "domainMid":
            if (!Ke(e)) {
              return ar(n);
            }
            return undefined;
          case "align":
          case "type":
          case "bins":
          case "domain":
          case "domainMax":
          case "domainMin":
          case "range":
          case "base":
          case "exponent":
          case "constant":
          case "nice":
          case "padding":
          case "paddingInner":
          case "paddingOuter":
          case "rangeMax":
          case "rangeMin":
          case "reverse":
          case "round":
          case "clamp":
          case "zero":
            return undefined;
        }
      }
      function Ao(e, n) {
        if ($([Xs, Ks], n)) {
          return e === undefined || mo(e);
        } else if (n === Vs) {
          return $([no.TIME, no.UTC, undefined], e);
        } else if (n === Gs) {
          return lo(e) || yo(e) || e === undefined;
        }
        return true;
      }
      function Mo(e, n, t = false) {
        if (!lt(e)) {
          return false;
        }
        switch (e) {
          case le:
          case ue:
          case pe:
          case ge:
          case be:
          case me:
            if (bo(n)) {
              return true;
            } else if (n === "band") {
              return true;
            } else if (n === "point") {
              return !t;
            }
            return false;
          case De:
          case Ce:
          case Pe:
          case Fe:
          case ze:
          case _e:
            return bo(n) || yo(n) || $(["band", "point", "ordinal"], n);
          case we:
          case $e:
          case ke:
            return n !== "band";
          case Ee:
          case Se:
            return n === "ordinal" || yo(n);
        }
      }
      const Lo = {
        arc: "arc",
        area: "area",
        bar: "bar",
        image: "image",
        line: "line",
        point: "point",
        rect: "rect",
        rule: "rule",
        text: "text",
        tick: "tick",
        trail: "trail",
        circle: "circle",
        square: "square",
        geoshape: "geoshape",
      };
      const qo = Lo.arc;
      const Io = Lo.area;
      const Ro = Lo.bar;
      const Wo = Lo.image;
      const Uo = Lo.line;
      const Ho = Lo.point;
      const Bo = Lo.rect;
      const Jo = Lo.rule;
      const Go = Lo.text;
      const Xo = Lo.tick;
      const Vo = Lo.trail;
      const Ko = Lo.circle;
      const Yo = Lo.square;
      const Qo = Lo.geoshape;
      function Zo(e) {
        return e in Lo;
      }
      function ea(e) {
        return ["line", "area", "trail"].includes(e);
      }
      function na(e) {
        return ["rect", "bar", "image", "arc"].includes(e);
      }
      const ta = new Set(A(Lo));
      function ia(e) {
        return e["type"];
      }
      function ra(e) {
        const n = ia(e) ? e.type : e;
        return ta.has(n);
      }
      const sa = ["stroke", "strokeWidth", "strokeDash", "strokeDashOffset", "strokeOpacity", "strokeJoin", "strokeMiterLimit"];
      const oa = ["fill", "fillOpacity"];
      const aa = [...sa, ...oa];
      const ca = { color: 1, filled: 1, invalid: 1, order: 1, radius2: 1, theta2: 1, timeUnitBandSize: 1, timeUnitBandPosition: 1 };
      const la = A(ca);
      const ua = {
        area: ["line", "point"],
        bar: ["binSpacing", "continuousBandSize", "discreteBandSize"],
        rect: ["binSpacing", "continuousBandSize", "discreteBandSize"],
        line: ["point"],
        tick: ["bandSize", "thickness"],
      };
      const fa = { color: "#4c78a8", invalid: "filter", timeUnitBandSize: 1 };
      const da = {
        mark: 1,
        arc: 1,
        area: 1,
        bar: 1,
        circle: 1,
        image: 1,
        line: 1,
        point: 1,
        rect: 1,
        rule: 1,
        square: 1,
        text: 1,
        tick: 1,
        trail: 1,
        geoshape: 1,
      };
      const pa = A(da);
      function ga(e) {
        return e && e["band"] != undefined;
      }
      const ma = { horizontal: ["cornerRadiusTopRight", "cornerRadiusBottomRight"], vertical: ["cornerRadiusTopLeft", "cornerRadiusTopRight"] };
      const ha = 5;
      const ba = { binSpacing: 1, continuousBandSize: ha, timeUnitBandPosition: 0.5 };
      const ya = { binSpacing: 0, continuousBandSize: ha, timeUnitBandPosition: 0.5 };
      const va = { thickness: 1 };
      function Oa(e) {
        return ia(e) ? e.type : e;
      }
      function xa(e) {
        const { channel: n, channelDef: t, markDef: i, scale: r, config: s } = e;
        const o = _a(e);
        if (fc(t) && !jt(t.aggregate) && r && bo(r.get("type"))) {
          return ja({ fieldDef: t, channel: n, markDef: i, ref: o, config: s });
        }
        return o;
      }
      function ja({ fieldDef: e, channel: n, markDef: t, ref: i, config: r }) {
        if (ea(t.type)) {
          return i;
        }
        const s = ii("invalid", t, r);
        if (s === null) {
          return [wa(e, n), i];
        }
        return i;
      }
      function wa(e, n) {
        const t = $a(e, true);
        const i = hn(n);
        const r = i === "y" ? { field: { group: "height" } } : { value: 0 };
        return Object.assign({ test: t }, r);
      }
      function $a(e, n = true) {
        return Is((0, r.HD)(e) ? e : Sc(e, { expr: "datum" }), !n);
      }
      function ka(e) {
        const { datum: n } = e;
        if (Qr(n)) {
          return as(n);
        }
        return `${x(n)}`;
      }
      function Sa(e, n, t, i) {
        const r = {};
        if (n) {
          r.scale = n;
        }
        if (pc(e)) {
          const { datum: n } = e;
          if (Qr(n)) {
            r.signal = as(n);
          } else if (Mt(n)) {
            r.signal = n.signal;
          } else if (Ct(n)) {
            r.signal = n.expr;
          } else {
            r.value = n;
          }
        } else {
          r.field = Sc(e, t);
        }
        if (i) {
          const { offset: e, band: n } = i;
          if (e) {
            r.offset = e;
          }
          if (n) {
            r.band = n;
          }
        }
        return r;
      }
      function Da({ scaleName: e, fieldOrDatumDef: n, fieldOrDatumDef2: t, offset: i, startSuffix: r, bandPosition: s = 0.5 }) {
        const o = 0 < s && s < 1 ? "datum" : undefined;
        const a = Sc(n, { expr: o, suffix: r });
        const c = t !== undefined ? Sc(t, { expr: o }) : Sc(n, { suffix: "end", expr: o });
        const l = {};
        if (s === 0 || s === 1) {
          l.scale = e;
          const n = s === 0 ? a : c;
          l.field = n;
        } else {
          const n = Mt(s) ? `${s.signal} * ${a} + (1-${s.signal}) * ${c}` : `${s} * ${a} + ${1 - s} * ${c}`;
          l.signal = `scale("${e}", ${n})`;
        }
        if (i) {
          l.offset = i;
        }
        return l;
      }
      function _a({
        channel: e,
        channelDef: n,
        channel2Def: t,
        markDef: i,
        config: s,
        scaleName: o,
        scale: a,
        stack: c,
        offset: l,
        defaultRef: u,
        bandPosition: f,
      }) {
        var d;
        if (n) {
          if (bc(n)) {
            const r = a === null || a === void 0 ? void 0 : a.get("type");
            if (yc(n)) {
              f !== null && f !== void 0 ? f : (f = rc({ fieldDef: n, fieldDef2: t, markDef: i, config: s }));
              const { bin: a, timeUnit: u, type: d } = n;
              if (Dt(a) || (f && u && d === Vs)) {
                if (c === null || c === void 0 ? void 0 : c.impute) {
                  return Sa(n, o, { binSuffix: "mid" }, { offset: l });
                }
                if (f && !mo(r)) {
                  return Da({ scaleName: o, fieldOrDatumDef: n, bandPosition: f, offset: l });
                }
                return Sa(n, o, el(n, e) ? { binSuffix: "range" } : {}, { offset: l });
              } else if (_t(a)) {
                if (fc(t)) {
                  return Da({ scaleName: o, fieldOrDatumDef: n, fieldOrDatumDef2: t, bandPosition: f, offset: l });
                } else {
                  const n = e === le ? fe : de;
                  Vr(Ar(n));
                }
              }
            }
            return Sa(n, o, mo(r) ? { binSuffix: "range" } : {}, {
              offset: l,
              band: r === "band" ? ((d = f !== null && f !== void 0 ? f : n.bandPosition) !== null && d !== void 0 ? d : 0.5) : undefined,
            });
          } else if (vc(n)) {
            const t = n.value;
            const i = l ? { offset: l } : {};
            return Object.assign(Object.assign({}, Pa(e, t)), i);
          }
        }
        if ((0, r.mf)(u)) {
          u = u();
        }
        if (u) {
          return Object.assign(Object.assign({}, u), l ? { offset: l } : {});
        }
        return u;
      }
      function Pa(e, n) {
        if ($(["x", "x2"], e) && n === "width") {
          return { field: { group: "width" } };
        } else if ($(["y", "y2"], e) && n === "height") {
          return { field: { group: "height" } };
        }
        return Yt(n);
      }
      function Fa(e) {
        return e && e !== "number" && e !== "time";
      }
      function za(e, n, t) {
        return `${e}(${n}${t ? `, ${x(t)}` : ""})`;
      }
      const Ca = " – ";
      function Ea({ fieldOrDatumDef: e, format: n, formatType: t, expr: i, normalizeStack: r, config: s }) {
        var o, a;
        if (Fa(t)) {
          return Ta({ fieldOrDatumDef: e, format: n, formatType: t, expr: i, config: s });
        }
        const c = Na(e, i, r);
        const l = dc(e);
        if (n === undefined && t === undefined && s.customFormatTypes) {
          if (l === "quantitative") {
            if (r && s.normalizedNumberFormatType)
              return Ta({ fieldOrDatumDef: e, format: s.normalizedNumberFormat, formatType: s.normalizedNumberFormatType, expr: i, config: s });
            if (s.numberFormatType) {
              return Ta({ fieldOrDatumDef: e, format: s.numberFormat, formatType: s.numberFormatType, expr: i, config: s });
            }
          }
          if (l === "temporal" && s.timeFormatType && fc(e) && e.timeUnit === undefined) {
            return Ta({ fieldOrDatumDef: e, format: s.timeFormat, formatType: s.timeFormatType, expr: i, config: s });
          }
        }
        if (Kc(e)) {
          const t = Ua({
            field: c,
            timeUnit: fc(e) ? ((o = ks(e.timeUnit)) === null || o === void 0 ? void 0 : o.unit) : undefined,
            format: n,
            formatType: s.timeFormatType,
            rawTimeFormat: s.timeFormat,
            isUTCScale: Oc(e) && ((a = e.scale) === null || a === void 0 ? void 0 : a.type) === no.UTC,
          });
          return t ? { signal: t } : undefined;
        }
        n = La({ type: l, specifiedFormat: n, config: s, normalizeStack: r });
        if (fc(e) && Dt(e.bin)) {
          const r = Sc(e, { expr: i, binSuffix: "end" });
          return { signal: Wa(c, r, n, t, s) };
        } else if (n || dc(e) === "quantitative") {
          return { signal: `${Ia(c, n)}` };
        } else {
          return { signal: `isValid(${c}) ? ${c} : ""+${c}` };
        }
      }
      function Na(e, n, t) {
        if (fc(e)) {
          if (t) {
            return `${Sc(e, { expr: n, suffix: "end" })}-${Sc(e, { expr: n, suffix: "start" })}`;
          } else {
            return Sc(e, { expr: n });
          }
        } else {
          return ka(e);
        }
      }
      function Ta({ fieldOrDatumDef: e, format: n, formatType: t, expr: i, normalizeStack: r, config: s, field: o }) {
        o !== null && o !== void 0 ? o : (o = Na(e, i, r));
        if (o !== "datum.value" && fc(e) && Dt(e.bin)) {
          const r = Sc(e, { expr: i, binSuffix: "end" });
          return { signal: Wa(o, r, n, t, s) };
        }
        return { signal: za(t, o, n) };
      }
      function Aa(e, n, t, i, r, s) {
        var o;
        if (Fa(i)) {
          return undefined;
        } else if (t === undefined && i === undefined && r.customFormatTypes) {
          if (dc(e) === "quantitative") {
            if (r.normalizedNumberFormatType && xc(e) && e.stack === "normalize") {
              return undefined;
            }
            if (r.numberFormatType) {
              return undefined;
            }
          }
        }
        if (xc(e) && e.stack === "normalize" && r.normalizedNumberFormat) {
          return La({ type: "quantitative", config: r, normalizeStack: true });
        }
        if (Kc(e)) {
          const n = fc(e) ? ((o = ks(e.timeUnit)) === null || o === void 0 ? void 0 : o.unit) : undefined;
          if (n === undefined && r.customFormatTypes && r.timeFormatType) {
            return undefined;
          }
          return qa({ specifiedFormat: t, timeUnit: n, config: r, omitTimeFormatConfig: s });
        }
        return La({ type: n, specifiedFormat: t, config: r });
      }
      function Ma(e, n, t) {
        var i;
        if (e && (Mt(e) || e === "number" || e === "time")) {
          return e;
        }
        if (Kc(n) && t !== "time" && t !== "utc") {
          return fc(n) && ((i = ks(n === null || n === void 0 ? void 0 : n.timeUnit)) === null || i === void 0 ? void 0 : i.utc) ? "utc" : "time";
        }
        return undefined;
      }
      function La({ type: e, specifiedFormat: n, config: t, normalizeStack: i }) {
        if ((0, r.HD)(n)) {
          return n;
        }
        if (e === Gs) {
          return i ? t.normalizedNumberFormat : t.numberFormat;
        }
        return undefined;
      }
      function qa({ specifiedFormat: e, timeUnit: n, config: t, omitTimeFormatConfig: i }) {
        if (e) {
          return e;
        }
        if (n) {
          return { signal: ws(n) };
        }
        return i ? undefined : t.timeFormat;
      }
      function Ia(e, n) {
        return `format(${e}, "${n || ""}")`;
      }
      function Ra(e, n, t, i) {
        var s;
        if (Fa(t)) {
          return za(t, e, n);
        }
        return Ia(e, (s = (0, r.HD)(n) ? n : undefined) !== null && s !== void 0 ? s : i.numberFormat);
      }
      function Wa(e, n, t, i, r) {
        if (t === undefined && i === undefined && r.customFormatTypes && r.numberFormatType) {
          return Wa(e, n, r.numberFormat, r.numberFormatType, r);
        }
        const s = Ra(e, t, i, r);
        const o = Ra(n, t, i, r);
        return `${Is(e, false)} ? "null" : ${s} + "${Ca}" + ${o}`;
      }
      function Ua({ field: e, timeUnit: n, format: t, formatType: i, rawTimeFormat: s, isUTCScale: o }) {
        if (!n || t) {
          if (!n && i) {
            return `${i}(${e}, '${t}')`;
          }
          t = (0, r.HD)(t) ? t : s;
          return `${o ? "utc" : "time"}Format(${e}, '${t}')`;
        } else {
          return $s(n, e, o);
        }
      }
      const Ha = "min";
      const Ba = {
        x: 1,
        y: 1,
        color: 1,
        fill: 1,
        stroke: 1,
        strokeWidth: 1,
        size: 1,
        shape: 1,
        fillOpacity: 1,
        strokeOpacity: 1,
        opacity: 1,
        text: 1,
      };
      function Ja(e) {
        return e in Ba;
      }
      function Ga(e) {
        return !!(e === null || e === void 0 ? void 0 : e["encoding"]);
      }
      function Xa(e) {
        return e && (e["op"] === "count" || !!e["field"]);
      }
      function Va(e) {
        return e && (0, r.kJ)(e);
      }
      function Ka(e) {
        return "row" in e || "column" in e;
      }
      function Ya(e) {
        return !!e && "header" in e;
      }
      function Qa(e) {
        return "facet" in e;
      }
      var Za =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      function ec(e) {
        return e["param"];
      }
      function nc(e) {
        return e && !(0, r.HD)(e) && "repeat" in e;
      }
      function tc(e) {
        const { field: n, timeUnit: t, bin: i, aggregate: r } = e;
        return Object.assign(
          Object.assign(Object.assign(Object.assign({}, t ? { timeUnit: t } : {}), i ? { bin: i } : {}), r ? { aggregate: r } : {}),
          { field: n }
        );
      }
      function ic(e) {
        return "sort" in e;
      }
      function rc({ fieldDef: e, fieldDef2: n, markDef: t, config: i }) {
        if (bc(e) && e.bandPosition !== undefined) {
          return e.bandPosition;
        }
        if (fc(e)) {
          const { timeUnit: r, bin: s } = e;
          if (r && !n) {
            return na(t.type) ? 0 : ri("timeUnitBandPosition", t, i);
          } else if (Dt(s)) {
            return 0.5;
          }
        }
        return undefined;
      }
      function sc({ channel: e, fieldDef: n, fieldDef2: t, markDef: i, config: r, scaleType: s, useVlSizeChannel: o }) {
        var a, c, l;
        const u = vn(e);
        const f = ii(o ? "size" : u, i, r, { vgChannel: u });
        if (f !== undefined) {
          return f;
        }
        if (fc(n)) {
          const { timeUnit: e, bin: o } = n;
          if (e && !t) {
            return { band: ri("timeUnitBandSize", i, r) };
          } else if (Dt(o) && !mo(s)) {
            return { band: 1 };
          }
        }
        if (na(i.type)) {
          if (s) {
            if (mo(s)) {
              return ((a = r[i.type]) === null || a === void 0 ? void 0 : a.discreteBandSize) || { band: 1 };
            } else {
              return (c = r[i.type]) === null || c === void 0 ? void 0 : c.continuousBandSize;
            }
          }
          return (l = r[i.type]) === null || l === void 0 ? void 0 : l.discreteBandSize;
        }
        return undefined;
      }
      function oc(e, n, t, i) {
        if (Dt(e.bin) || (e.timeUnit && yc(e) && e.type === "temporal")) {
          return rc({ fieldDef: e, fieldDef2: n, markDef: t, config: i }) !== undefined;
        }
        return false;
      }
      function ac(e) {
        return e && "condition" in e;
      }
      function cc(e) {
        const n = e === null || e === void 0 ? void 0 : e["condition"];
        return !!n && !(0, r.kJ)(n) && fc(n);
      }
      function lc(e) {
        const n = e === null || e === void 0 ? void 0 : e["condition"];
        return !!n && !(0, r.kJ)(n) && bc(n);
      }
      function uc(e) {
        const n = e === null || e === void 0 ? void 0 : e["condition"];
        return !!n && ((0, r.kJ)(n) || vc(n));
      }
      function fc(e) {
        return e && (!!e["field"] || e["aggregate"] === "count");
      }
      function dc(e) {
        return e === null || e === void 0 ? void 0 : e["type"];
      }
      function pc(e) {
        return e && "datum" in e;
      }
      function gc(e) {
        return (yc(e) && !Dc(e)) || hc(e);
      }
      function mc(e) {
        return dc(e) === "quantitative" || hc(e);
      }
      function hc(e) {
        return pc(e) && (0, r.hj)(e.datum);
      }
      function bc(e) {
        return fc(e) || pc(e);
      }
      function yc(e) {
        return e && ("field" in e || e["aggregate"] === "count") && "type" in e;
      }
      function vc(e) {
        return e && "value" in e && "value" in e;
      }
      function Oc(e) {
        return e && ("scale" in e || "sort" in e);
      }
      function xc(e) {
        return e && ("axis" in e || "stack" in e || "impute" in e);
      }
      function jc(e) {
        return e && "legend" in e;
      }
      function wc(e) {
        return e && ("format" in e || "formatType" in e);
      }
      function $c(e) {
        return O(e, ["legend", "axis", "header", "scale"]);
      }
      function kc(e) {
        return "op" in e;
      }
      function Sc(e, n = {}) {
        var t, i, r;
        let s = e.field;
        const o = n.prefix;
        let a = n.suffix;
        let c = "";
        if (Pc(e)) {
          s = ne("count");
        } else {
          let o;
          if (!n.nofn) {
            if (kc(e)) {
              o = e.op;
            } else {
              const { bin: l, aggregate: u, timeUnit: f } = e;
              if (Dt(l)) {
                o = St(l);
                a = ((t = n.binSuffix) !== null && t !== void 0 ? t : "") + ((i = n.suffix) !== null && i !== void 0 ? i : "");
              } else if (u) {
                if (vt(u)) {
                  c = `["${s}"]`;
                  s = `argmax_${u.argmax}`;
                } else if (yt(u)) {
                  c = `["${s}"]`;
                  s = `argmin_${u.argmin}`;
                } else {
                  o = String(u);
                }
              } else if (f) {
                o = Ss(f);
                a = ((!["range", "mid"].includes(n.binSuffix) && n.binSuffix) || "") + ((r = n.suffix) !== null && r !== void 0 ? r : "");
              }
            }
          }
          if (o) {
            s = s ? `${o}_${s}` : o;
          }
        }
        if (a) {
          s = `${s}_${a}`;
        }
        if (o) {
          s = `${o}_${s}`;
        }
        if (n.forAs) {
          return V(s);
        } else if (n.expr) {
          return B(s, n.expr) + c;
        } else {
          return G(s) + c;
        }
      }
      function Dc(e) {
        switch (e.type) {
          case "nominal":
          case "ordinal":
          case "geojson":
            return true;
          case "quantitative":
            return fc(e) && !!e.bin;
          case "temporal":
            return false;
        }
        throw new Error(Wi(e.type));
      }
      function _c(e) {
        var n;
        return Oc(e) && yo((n = e.scale) === null || n === void 0 ? void 0 : n.type);
      }
      function Pc(e) {
        return e.aggregate === "count";
      }
      function Fc(e, n) {
        var t;
        const { field: i, bin: r, timeUnit: s, aggregate: o } = e;
        if (o === "count") {
          return n.countTitle;
        } else if (Dt(r)) {
          return `${i} (binned)`;
        } else if (s) {
          const e = (t = ks(s)) === null || t === void 0 ? void 0 : t.unit;
          if (e) {
            return `${i} (${Os(e).join("-")})`;
          }
        } else if (o) {
          if (vt(o)) {
            return `${i} for max ${o.argmax}`;
          } else if (yt(o)) {
            return `${i} for min ${o.argmin}`;
          } else {
            return `${U(o)} of ${i}`;
          }
        }
        return i;
      }
      function zc(e) {
        const { aggregate: n, bin: t, timeUnit: i, field: r } = e;
        if (vt(n)) {
          return `${r} for argmax(${n.argmax})`;
        } else if (yt(n)) {
          return `${r} for argmin(${n.argmin})`;
        }
        const s = ks(i);
        const o =
          n ||
          (s === null || s === void 0 ? void 0 : s.unit) ||
          ((s === null || s === void 0 ? void 0 : s.maxbins) && "timeunit") ||
          (Dt(t) && "bin");
        if (o) {
          return `${o.toUpperCase()}(${r})`;
        } else {
          return r;
        }
      }
      const Cc = (e, n) => {
        switch (n.fieldTitle) {
          case "plain":
            return e.field;
          case "functional":
            return zc(e);
          default:
            return Fc(e, n);
        }
      };
      let Ec = Cc;
      function Nc(e) {
        Ec = e;
      }
      function Tc() {
        Nc(Cc);
      }
      function Ac(e, n, { allowDisabling: t, includeDefault: i = true }) {
        var r, s;
        const o = (r = Mc(e)) === null || r === void 0 ? void 0 : r.title;
        if (!fc(e)) {
          return o !== null && o !== void 0 ? o : e.title;
        }
        const a = e;
        const c = i ? Lc(a, n) : undefined;
        if (t) {
          return Y(o, a.title, c);
        } else {
          return (s = o !== null && o !== void 0 ? o : a.title) !== null && s !== void 0 ? s : c;
        }
      }
      function Mc(e) {
        if (xc(e) && e.axis) {
          return e.axis;
        } else if (jc(e) && e.legend) {
          return e.legend;
        } else if (Ya(e) && e.header) {
          return e.header;
        }
        return undefined;
      }
      function Lc(e, n) {
        return Ec(e, n);
      }
      function qc(e) {
        var n;
        if (wc(e)) {
          const { format: n, formatType: t } = e;
          return { format: n, formatType: t };
        } else {
          const t = (n = Mc(e)) !== null && n !== void 0 ? n : {};
          const { format: i, formatType: r } = t;
          return { format: i, formatType: r };
        }
      }
      function Ic(e, n) {
        var t;
        switch (n) {
          case "latitude":
          case "longitude":
            return "quantitative";
          case "row":
          case "column":
          case "facet":
          case "shape":
          case "strokeDash":
            return "nominal";
          case "order":
            return "ordinal";
        }
        if (ic(e) && (0, r.kJ)(e.sort)) {
          return "ordinal";
        }
        const { aggregate: i, bin: s, timeUnit: o } = e;
        if (o) {
          return "temporal";
        }
        if (s || (i && !vt(i) && !yt(i))) {
          return "quantitative";
        }
        if (Oc(e) && ((t = e.scale) === null || t === void 0 ? void 0 : t.type)) {
          switch (to[e.scale.type]) {
            case "numeric":
            case "discretizing":
              return "quantitative";
            case "time":
              return "temporal";
          }
        }
        return "nominal";
      }
      function Rc(e) {
        if (fc(e)) {
          return e;
        } else if (cc(e)) {
          return e.condition;
        }
        return undefined;
      }
      function Wc(e) {
        if (bc(e)) {
          return e;
        } else if (lc(e)) {
          return e.condition;
        }
        return undefined;
      }
      function Uc(e, n, t, i = {}) {
        if ((0, r.HD)(e) || (0, r.hj)(e) || (0, r.jn)(e)) {
          const t = (0, r.HD)(e) ? "string" : (0, r.hj)(e) ? "number" : "boolean";
          Vr(Ri(n, t, e));
          return { value: e };
        }
        if (bc(e)) {
          return Hc(e, n, t, i);
        } else if (lc(e)) {
          return Object.assign(Object.assign({}, e), { condition: Hc(e.condition, n, t, i) });
        }
        return e;
      }
      function Hc(e, n, t, i) {
        if (wc(e)) {
          const { format: r, formatType: s } = e,
            o = Za(e, ["format", "formatType"]);
          if (Fa(s) && !t.customFormatTypes) {
            Vr(Ai(n));
            return Hc(o, n, t, i);
          }
        } else {
          const r = xc(e) ? "axis" : jc(e) ? "legend" : Ya(e) ? "header" : null;
          if (r && e[r]) {
            const s = e[r],
              { format: o, formatType: a } = s,
              c = Za(s, ["format", "formatType"]);
            if (Fa(a) && !t.customFormatTypes) {
              Vr(Ai(n));
              return Hc(Object.assign(Object.assign({}, e), { [r]: c }), n, t, i);
            }
          }
        }
        if (fc(e)) {
          return Jc(e, n, i);
        }
        return Bc(e);
      }
      function Bc(e) {
        let n = e["type"];
        if (n) {
          return e;
        }
        const { datum: t } = e;
        n = (0, r.hj)(t) ? "quantitative" : (0, r.HD)(t) ? "nominal" : Qr(t) ? "temporal" : undefined;
        return Object.assign(Object.assign({}, e), { type: n });
      }
      function Jc(e, n, { compositeMark: t = false } = {}) {
        const { aggregate: i, timeUnit: s, bin: o, field: a } = e;
        const c = Object.assign({}, e);
        if (!t && i && !Ot(i) && !vt(i) && !yt(i)) {
          Vr(Hi(i));
          delete c.aggregate;
        }
        if (s) {
          c.timeUnit = ks(s);
        }
        if (a) {
          c.field = `${a}`;
        }
        if (Dt(o)) {
          c.bin = Gc(o, n);
        }
        if (_t(o) && !Wn(n)) {
          Vr(Mr(n));
        }
        if (yc(c)) {
          const { type: e } = c;
          const n = Zs(e);
          if (e !== n) {
            c.type = n;
          }
          if (e !== "quantitative") {
            if (jt(i)) {
              Vr(Ui(e, i));
              c.type = "quantitative";
            }
          }
        } else if (!mn(n)) {
          const e = Ic(c, n);
          c["type"] = e;
        }
        if (yc(c)) {
          const { compatible: e, warning: t } = Vc(c, n) || {};
          if (e === false) {
            Vr(t);
          }
        }
        if (ic(c) && (0, r.HD)(c.sort)) {
          const { sort: e } = c;
          if (Ja(e)) {
            return Object.assign(Object.assign({}, c), { sort: { encoding: e } });
          }
          const n = e.substr(1);
          if (e.charAt(0) === "-" && Ja(n)) {
            return Object.assign(Object.assign({}, c), { sort: { encoding: n, order: "descending" } });
          }
        }
        if (Ya(c)) {
          const { header: e } = c;
          if (e) {
            const { orient: n } = e,
              t = Za(e, ["orient"]);
            if (n) {
              return Object.assign(Object.assign({}, c), {
                header: Object.assign(Object.assign({}, t), { labelOrient: e.labelOrient || n, titleOrient: e.titleOrient || n }),
              });
            }
          }
        }
        return c;
      }
      function Gc(e, n) {
        if ((0, r.jn)(e)) {
          return { maxbins: zt(n) };
        } else if (e === "binned") {
          return { binned: true };
        } else if (!e.maxbins && !e.step) {
          return Object.assign(Object.assign({}, e), { maxbins: zt(n) });
        } else {
          return e;
        }
      }
      const Xc = { compatible: true };
      function Vc(e, n) {
        const t = e.type;
        if (t === "geojson" && n !== "shape") {
          return { compatible: false, warning: `Channel ${n} should not be used with a geojson data.` };
        }
        switch (n) {
          case oe:
          case ae:
          case ce:
            if (!Dc(e)) {
              return { compatible: false, warning: Zi(n) };
            }
            return Xc;
          case le:
          case ue:
          case pe:
          case ge:
          case we:
          case $e:
          case ke:
          case Ne:
          case Ae:
          case Me:
          case Le:
          case qe:
          case Ie:
          case _e:
          case be:
          case me:
          case Re:
            return Xc;
          case Oe:
          case je:
          case ve:
          case xe:
            if (t !== Gs) {
              return { compatible: false, warning: `Channel ${n} should be used with a quantitative field only, not ${e.type} field.` };
            }
            return Xc;
          case Pe:
          case Fe:
          case ze:
          case Ce:
          case De:
          case ye:
          case he:
          case fe:
          case de:
            if (t === "nominal" && !e["sort"]) {
              return { compatible: false, warning: `Channel ${n} should not be used with an unsorted discrete field.` };
            }
            return Xc;
          case Se:
          case Ee:
            if (!Dc(e) && !_c(e)) {
              return { compatible: false, warning: er(n) };
            }
            return Xc;
          case Te:
            if (e.type === "nominal" && !("sort" in e)) {
              return { compatible: false, warning: `Channel order is inappropriate for nominal field, which has no inherent order.` };
            }
            return Xc;
        }
      }
      function Kc(e) {
        const { formatType: n } = qc(e);
        return n === "time" || (!n && Yc(e));
      }
      function Yc(e) {
        return e && (e["type"] === "temporal" || (fc(e) && !!e.timeUnit));
      }
      function Qc(e, { timeUnit: n, type: t, wrapTime: i, undefinedIfExprNotRequired: s }) {
        var o;
        const a = n && ((o = ks(n)) === null || o === void 0 ? void 0 : o.unit);
        let c = a || t === "temporal";
        let l;
        if (Ct(e)) {
          l = e.expr;
        } else if (Mt(e)) {
          l = e.signal;
        } else if (Qr(e)) {
          c = true;
          l = as(e);
        } else if ((0, r.HD)(e) || (0, r.hj)(e)) {
          if (c) {
            l = `datetime(${x(e)})`;
            if (ps(a)) {
              if (((0, r.hj)(e) && e < 1e4) || ((0, r.HD)(e) && isNaN(Date.parse(e)))) {
                l = as({ [a]: e });
              }
            }
          }
        }
        if (l) {
          return i && c ? `time(${l})` : l;
        }
        return s ? undefined : x(e);
      }
      function Zc(e, n) {
        const { type: t } = e;
        return n.map((n) => {
          const i = Qc(n, { timeUnit: fc(e) ? e.timeUnit : undefined, type: t, undefinedIfExprNotRequired: true });
          if (i !== undefined) {
            return { signal: i };
          }
          return n;
        });
      }
      function el(e, n) {
        if (!Dt(e.bin)) {
          console.warn("Only call this method for binned field defs.");
          return false;
        }
        return lt(n) && ["ordinal", "nominal"].includes(e.type);
      }
      const nl = {
        labelAlign: { part: "labels", vgProp: "align" },
        labelBaseline: { part: "labels", vgProp: "baseline" },
        labelColor: { part: "labels", vgProp: "fill" },
        labelFont: { part: "labels", vgProp: "font" },
        labelFontSize: { part: "labels", vgProp: "fontSize" },
        labelFontStyle: { part: "labels", vgProp: "fontStyle" },
        labelFontWeight: { part: "labels", vgProp: "fontWeight" },
        labelOpacity: { part: "labels", vgProp: "opacity" },
        labelOffset: null,
        labelPadding: null,
        gridColor: { part: "grid", vgProp: "stroke" },
        gridDash: { part: "grid", vgProp: "strokeDash" },
        gridDashOffset: { part: "grid", vgProp: "strokeDashOffset" },
        gridOpacity: { part: "grid", vgProp: "opacity" },
        gridWidth: { part: "grid", vgProp: "strokeWidth" },
        tickColor: { part: "ticks", vgProp: "stroke" },
        tickDash: { part: "ticks", vgProp: "strokeDash" },
        tickDashOffset: { part: "ticks", vgProp: "strokeDashOffset" },
        tickOpacity: { part: "ticks", vgProp: "opacity" },
        tickSize: null,
        tickWidth: { part: "ticks", vgProp: "strokeWidth" },
      };
      function tl(e) {
        return e === null || e === void 0 ? void 0 : e.condition;
      }
      const il = ["domain", "grid", "labels", "ticks", "title"];
      const rl = {
        grid: "grid",
        gridCap: "grid",
        gridColor: "grid",
        gridDash: "grid",
        gridDashOffset: "grid",
        gridOpacity: "grid",
        gridScale: "grid",
        gridWidth: "grid",
        orient: "main",
        bandPosition: "both",
        aria: "main",
        description: "main",
        domain: "main",
        domainCap: "main",
        domainColor: "main",
        domainDash: "main",
        domainDashOffset: "main",
        domainOpacity: "main",
        domainWidth: "main",
        format: "main",
        formatType: "main",
        labelAlign: "main",
        labelAngle: "main",
        labelBaseline: "main",
        labelBound: "main",
        labelColor: "main",
        labelFlush: "main",
        labelFlushOffset: "main",
        labelFont: "main",
        labelFontSize: "main",
        labelFontStyle: "main",
        labelFontWeight: "main",
        labelLimit: "main",
        labelLineHeight: "main",
        labelOffset: "main",
        labelOpacity: "main",
        labelOverlap: "main",
        labelPadding: "main",
        labels: "main",
        labelSeparation: "main",
        maxExtent: "main",
        minExtent: "main",
        offset: "both",
        position: "main",
        tickCap: "main",
        tickColor: "main",
        tickDash: "main",
        tickDashOffset: "main",
        tickMinStep: "both",
        tickOffset: "both",
        tickOpacity: "main",
        tickRound: "both",
        ticks: "main",
        tickSize: "main",
        tickWidth: "both",
        title: "main",
        titleAlign: "main",
        titleAnchor: "main",
        titleAngle: "main",
        titleBaseline: "main",
        titleColor: "main",
        titleFont: "main",
        titleFontSize: "main",
        titleFontStyle: "main",
        titleFontWeight: "main",
        titleLimit: "main",
        titleLineHeight: "main",
        titleOpacity: "main",
        titlePadding: "main",
        titleX: "main",
        titleY: "main",
        encode: "both",
        scale: "both",
        tickBand: "both",
        tickCount: "both",
        tickExtra: "both",
        translate: "both",
        values: "both",
        zindex: "both",
      };
      const sl = {
        orient: 1,
        aria: 1,
        bandPosition: 1,
        description: 1,
        domain: 1,
        domainCap: 1,
        domainColor: 1,
        domainDash: 1,
        domainDashOffset: 1,
        domainOpacity: 1,
        domainWidth: 1,
        format: 1,
        formatType: 1,
        grid: 1,
        gridCap: 1,
        gridColor: 1,
        gridDash: 1,
        gridDashOffset: 1,
        gridOpacity: 1,
        gridWidth: 1,
        labelAlign: 1,
        labelAngle: 1,
        labelBaseline: 1,
        labelBound: 1,
        labelColor: 1,
        labelFlush: 1,
        labelFlushOffset: 1,
        labelFont: 1,
        labelFontSize: 1,
        labelFontStyle: 1,
        labelFontWeight: 1,
        labelLimit: 1,
        labelLineHeight: 1,
        labelOffset: 1,
        labelOpacity: 1,
        labelOverlap: 1,
        labelPadding: 1,
        labels: 1,
        labelSeparation: 1,
        maxExtent: 1,
        minExtent: 1,
        offset: 1,
        position: 1,
        tickBand: 1,
        tickCap: 1,
        tickColor: 1,
        tickCount: 1,
        tickDash: 1,
        tickDashOffset: 1,
        tickExtra: 1,
        tickMinStep: 1,
        tickOffset: 1,
        tickOpacity: 1,
        tickRound: 1,
        ticks: 1,
        tickSize: 1,
        tickWidth: 1,
        title: 1,
        titleAlign: 1,
        titleAnchor: 1,
        titleAngle: 1,
        titleBaseline: 1,
        titleColor: 1,
        titleFont: 1,
        titleFontSize: 1,
        titleFontStyle: 1,
        titleFontWeight: 1,
        titleLimit: 1,
        titleLineHeight: 1,
        titleOpacity: 1,
        titlePadding: 1,
        titleX: 1,
        titleY: 1,
        translate: 1,
        values: 1,
        zindex: 1,
      };
      const ol = Object.assign(Object.assign({}, sl), { style: 1, labelExpr: 1, encoding: 1 });
      function al(e) {
        return !!ol[e];
      }
      const cl = A(ol);
      const ll = {
        axis: 1,
        axisBand: 1,
        axisBottom: 1,
        axisDiscrete: 1,
        axisLeft: 1,
        axisPoint: 1,
        axisQuantitative: 1,
        axisRight: 1,
        axisTemporal: 1,
        axisTop: 1,
        axisX: 1,
        axisXBand: 1,
        axisXDiscrete: 1,
        axisXPoint: 1,
        axisXQuantitative: 1,
        axisXTemporal: 1,
        axisY: 1,
        axisYBand: 1,
        axisYDiscrete: 1,
        axisYPoint: 1,
        axisYQuantitative: 1,
        axisYTemporal: 1,
      };
      const ul = A(ll);
      function fl(e) {
        return "mark" in e;
      }
      class dl {
        constructor(e, n) {
          this.name = e;
          this.run = n;
        }
        hasMatchingType(e) {
          if (fl(e)) {
            return Oa(e.mark) === this.name;
          }
          return false;
        }
      }
      var pl =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      function gl(e, n) {
        const t = e && e[n];
        if (t) {
          if ((0, r.kJ)(t)) {
            return k(t, (e) => !!e.field);
          } else {
            return fc(t) || cc(t);
          }
        }
        return false;
      }
      function ml(e, n) {
        const t = e && e[n];
        if (t) {
          if ((0, r.kJ)(t)) {
            return k(t, (e) => !!e.field);
          } else {
            return fc(t) || pc(t) || lc(t);
          }
        }
        return false;
      }
      function hl(e, n) {
        if (Wn(n)) {
          const t = e[n];
          if ((fc(t) || pc(t)) && Js(t.type)) {
            const t = xn(n);
            return ml(e, t);
          }
        }
        return false;
      }
      function bl(e) {
        return k(en, (n) => {
          if (gl(e, n)) {
            const t = e[n];
            if ((0, r.kJ)(t)) {
              return k(t, (e) => !!e.aggregate);
            } else {
              const e = Rc(t);
              return e && !!e.aggregate;
            }
          }
          return false;
        });
      }
      function yl(e, n) {
        const t = [];
        const i = [];
        const r = [];
        const s = [];
        const o = {};
        wl(e, (a, c) => {
          if (fc(a)) {
            const { field: l, aggregate: u, bin: f, timeUnit: d } = a,
              p = pl(a, ["field", "aggregate", "bin", "timeUnit"]);
            if (u || d || f) {
              const e = Mc(a);
              const g = e === null || e === void 0 ? void 0 : e.title;
              let m = Sc(a, { forAs: true });
              const h = Object.assign(Object.assign(Object.assign({}, g ? [] : { title: Ac(a, n, { allowDisabling: true }) }), p), { field: m });
              if (u) {
                let e;
                if (vt(u)) {
                  e = "argmax";
                  m = Sc({ op: "argmax", field: u.argmax }, { forAs: true });
                  h.field = `${m}.${l}`;
                } else if (yt(u)) {
                  e = "argmin";
                  m = Sc({ op: "argmin", field: u.argmin }, { forAs: true });
                  h.field = `${m}.${l}`;
                } else if (u !== "boxplot" && u !== "errorbar" && u !== "errorband") {
                  e = u;
                }
                if (e) {
                  const n = { op: e, as: m };
                  if (l) {
                    n.field = l;
                  }
                  s.push(n);
                }
              } else {
                t.push(m);
                if (yc(a) && Dt(f)) {
                  i.push({ bin: f, field: l, as: m });
                  t.push(Sc(a, { binSuffix: "end" }));
                  if (el(a, c)) {
                    t.push(Sc(a, { binSuffix: "range" }));
                  }
                  if (Wn(c)) {
                    const e = { field: `${m}_end` };
                    o[`${c}2`] = e;
                  }
                  h.bin = "binned";
                  if (!mn(c)) {
                    h["type"] = Gs;
                  }
                } else if (d) {
                  r.push({ timeUnit: d, field: l, as: m });
                  const e = yc(a) && a.type !== Vs && "time";
                  if (e) {
                    if (c === Ne || c === Le) {
                      h["formatType"] = e;
                    } else if (st(c)) {
                      h["legend"] = Object.assign({ formatType: e }, h["legend"]);
                    } else if (Wn(c)) {
                      h["axis"] = Object.assign({ formatType: e }, h["axis"]);
                    }
                  }
                }
              }
              o[c] = h;
            } else {
              t.push(l);
              o[c] = e[c];
            }
          } else {
            o[c] = e[c];
          }
        });
        return { bins: i, timeUnits: r, aggregate: s, groupby: t, encoding: o };
      }
      function vl(e, n, t) {
        const i = ut(n, t);
        if (!i) {
          return false;
        } else if (i === "binned") {
          const t = e[n === fe ? le : ue];
          if (fc(t) && fc(e[n]) && _t(t.bin)) {
            return true;
          } else {
            return false;
          }
        }
        return true;
      }
      function Ol(e, n, t, i) {
        const s = {};
        for (const r of A(e)) {
          if (!pn(r)) {
            Vr(Qi(r));
          }
        }
        for (let o of wn) {
          if (!e[o]) {
            continue;
          }
          const a = e[o];
          if (Xn(o)) {
            const e = jn(o);
            const n = s[e];
            if (fc(n)) {
              if (Bs(n.type)) {
                if (fc(a)) {
                  Vr(qi(e));
                  continue;
                }
              }
            } else {
              o = e;
              Vr(Ii(e));
            }
          }
          if (o === "angle" && n === "arc" && !e.theta) {
            Vr(Li);
            o = be;
          }
          if (!vl(e, o, n)) {
            Vr(Ki(o, n));
            continue;
          }
          if (o === De && n === "line") {
            const n = Rc(e[o]);
            if (n === null || n === void 0 ? void 0 : n.aggregate) {
              Vr(Vi);
              continue;
            }
          }
          if (o === we && (t ? "fill" in e : "stroke" in e)) {
            Vr(Ji("encoding", { fill: "fill" in e, stroke: "stroke" in e }));
            continue;
          }
          if (o === Ae || (o === Te && !(0, r.kJ)(a) && !vc(a)) || (o === Le && (0, r.kJ)(a))) {
            if (a) {
              s[o] = (0, r.IX)(a).reduce((e, n) => {
                if (!fc(n)) {
                  Vr(Xi(n, o));
                } else {
                  e.push(Jc(n, o));
                }
                return e;
              }, []);
            }
          } else {
            if (o === Le && a === null) {
              s[o] = null;
            } else if (!fc(a) && !pc(a) && !vc(a) && !ac(a) && !Mt(a)) {
              Vr(Xi(a, o));
              continue;
            }
            s[o] = Uc(a, o, i);
          }
        }
        return s;
      }
      function xl(e, n) {
        const t = {};
        for (const i of A(e)) {
          const r = Uc(e[i], i, n, { compositeMark: true });
          t[i] = r;
        }
        return t;
      }
      function jl(e) {
        const n = [];
        for (const t of A(e)) {
          if (gl(e, t)) {
            const i = e[t];
            const s = (0, r.IX)(i);
            for (const e of s) {
              if (fc(e)) {
                n.push(e);
              } else if (cc(e)) {
                n.push(e.condition);
              }
            }
          }
        }
        return n;
      }
      function wl(e, n, t) {
        if (!e) {
          return;
        }
        for (const i of A(e)) {
          const s = e[i];
          if ((0, r.kJ)(s)) {
            for (const e of s) {
              n.call(t, e, i);
            }
          } else {
            n.call(t, s, i);
          }
        }
      }
      function $l(e, n, t, i) {
        if (!e) {
          return t;
        }
        return A(e).reduce((t, s) => {
          const o = e[s];
          if ((0, r.kJ)(o)) {
            return o.reduce((e, t) => n.call(i, e, t, s), t);
          } else {
            return n.call(i, t, o, s);
          }
        }, t);
      }
      function kl(e, n) {
        return A(n).reduce((t, i) => {
          switch (i) {
            case le:
            case ue:
            case qe:
            case Re:
            case Ie:
            case fe:
            case de:
            case pe:
            case ge:
            case be:
            case ye:
            case me:
            case he:
            case ve:
            case Oe:
            case xe:
            case je:
            case Ne:
            case Se:
            case _e:
            case Le:
              return t;
            case Te:
              if (e === "line" || e === "trail") {
                return t;
              }
            case Ae:
            case Me: {
              const e = n[i];
              if ((0, r.kJ)(e) || fc(e)) {
                for (const n of (0, r.IX)(e)) {
                  if (!n.aggregate) {
                    t.push(Sc(n, {}));
                  }
                }
              }
              return t;
            }
            case De:
              if (e === "trail") {
                return t;
              }
            case we:
            case $e:
            case ke:
            case Pe:
            case Fe:
            case ze:
            case Ee:
            case Ce: {
              const e = Rc(n[i]);
              if (e && !e.aggregate) {
                t.push(Sc(e, {}));
              }
              return t;
            }
          }
        }, []);
      }
      var Sl =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      function Dl(e) {
        const { tooltip: n } = e,
          t = Sl(e, ["tooltip"]);
        if (!n) {
          return { filteredEncoding: t };
        }
        let i;
        let s;
        if ((0, r.kJ)(n)) {
          for (const e of n) {
            if (e.aggregate) {
              if (!i) {
                i = [];
              }
              i.push(e);
            } else {
              if (!s) {
                s = [];
              }
              s.push(e);
            }
          }
          if (i) {
            t.tooltip = i;
          }
        } else {
          if (n["aggregate"]) {
            t.tooltip = n;
          } else {
            s = n;
          }
        }
        if ((0, r.kJ)(s) && s.length === 1) {
          s = s[0];
        }
        return { customTooltipWithoutAggregatedField: s, filteredEncoding: t };
      }
      function _l(e, n, t, i = true) {
        if ("tooltip" in t) {
          return { tooltip: t.tooltip };
        }
        const r = e.map(({ fieldPrefix: e, titlePrefix: t }) => {
          const r = i ? ` of ${Pl(n)}` : "";
          return { field: e + n.field, type: n.type, title: Mt(t) ? { signal: `${t}"${escape(r)}"` } : t + r };
        });
        const s = jl(t).map($c);
        return { tooltip: [...r, ...P(s, j)] };
      }
      function Pl(e) {
        const { title: n, field: t } = e;
        return Y(n, t);
      }
      function Fl(e, n, t, i, s) {
        const { scale: o, axis: a } = t;
        return ({ partName: c, mark: l, positionPrefix: u, endPositionPrefix: f = undefined, extraEncoding: d = {} }) => {
          const p = Pl(t);
          return zl(e, c, s, {
            mark: l,
            encoding: Object.assign(
              Object.assign(
                Object.assign(
                  {
                    [n]: Object.assign(
                      Object.assign(
                        Object.assign({ field: `${u}_${t.field}`, type: t.type }, p !== undefined ? { title: p } : {}),
                        o !== undefined ? { scale: o } : {}
                      ),
                      a !== undefined ? { axis: a } : {}
                    ),
                  },
                  (0, r.HD)(f) ? { [`${n}2`]: { field: `${f}_${t.field}` } } : {}
                ),
                i
              ),
              d
            ),
          });
        };
      }
      function zl(e, n, t, i) {
        const { clip: s, color: o, opacity: a } = e;
        const c = e.type;
        if (e[n] || (e[n] === undefined && t[n])) {
          return [
            Object.assign(Object.assign({}, i), {
              mark: Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(Object.assign(Object.assign({}, t[n]), s ? { clip: s } : {}), o ? { color: o } : {}),
                      a ? { opacity: a } : {}
                    ),
                    ia(i.mark) ? i.mark : { type: i.mark }
                  ),
                  { style: `${c}-${String(n)}` }
                ),
                (0, r.jn)(e[n]) ? {} : e[n]
              ),
            }),
          ];
        }
        return [];
      }
      function Cl(e, n, t) {
        const { encoding: i } = e;
        const r = n === "vertical" ? "y" : "x";
        const s = i[r];
        const o = i[`${r}2`];
        const a = i[`${r}Error`];
        const c = i[`${r}Error2`];
        return {
          continuousAxisChannelDef: El(s, t),
          continuousAxisChannelDef2: El(o, t),
          continuousAxisChannelDefError: El(a, t),
          continuousAxisChannelDefError2: El(c, t),
          continuousAxis: r,
        };
      }
      function El(e, n) {
        if (e === null || e === void 0 ? void 0 : e.aggregate) {
          const { aggregate: t } = e,
            i = Sl(e, ["aggregate"]);
          if (t !== n) {
            Vr(Nr(t, n));
          }
          return i;
        } else {
          return e;
        }
      }
      function Nl(e, n) {
        const { mark: t, encoding: i } = e;
        const { x: r, y: s } = i;
        if (ia(t) && t.orient) {
          return t.orient;
        }
        if (gc(r)) {
          if (gc(s)) {
            const e = fc(r) && r.aggregate;
            const t = fc(s) && s.aggregate;
            if (!e && t === n) {
              return "vertical";
            } else if (!t && e === n) {
              return "horizontal";
            } else if (e === n && t === n) {
              throw new Error("Both x and y cannot have aggregate");
            } else {
              if (Kc(s) && !Kc(r)) {
                return "horizontal";
              }
              return "vertical";
            }
          }
          return "horizontal";
        } else if (gc(s)) {
          return "vertical";
        } else {
          throw new Error(`Need a valid continuous axis for ${n}s`);
        }
      }
      var Tl =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      const Al = "boxplot";
      const Ml = ["box", "median", "outliers", "rule", "ticks"];
      const Ll = new dl(Al, Il);
      function ql(e) {
        if ((0, r.hj)(e)) {
          return "tukey";
        }
        return e;
      }
      function Il(e, { config: n }) {
        var t, i;
        e = Object.assign(Object.assign({}, e), { encoding: xl(e.encoding, n) });
        const { mark: s, encoding: o, params: a, projection: c } = e,
          l = Tl(e, ["mark", "encoding", "params", "projection"]);
        const u = ia(s) ? s : { type: s };
        if (a) {
          Vr(Oi("boxplot"));
        }
        const f = (t = u.extent) !== null && t !== void 0 ? t : n.boxplot.extent;
        const d = ii("size", u, n);
        const p = u.invalid;
        const g = ql(f);
        const {
          bins: m,
          timeUnits: h,
          transform: b,
          continuousAxisChannelDef: y,
          continuousAxis: v,
          groupby: x,
          aggregate: j,
          encodingWithoutContinuousAxis: w,
          ticksOrient: $,
          boxOrient: k,
          customTooltipWithoutAggregatedField: S,
        } = Wl(e, f, n);
        const { color: D, size: _ } = w,
          P = Tl(w, ["color", "size"]);
        const F = (e) => Fl(u, v, y, e, n.boxplot);
        const z = F(P);
        const C = F(w);
        const E = F(Object.assign(Object.assign({}, P), _ ? { size: _ } : {}));
        const N = _l(
          [
            { fieldPrefix: g === "min-max" ? "upper_whisker_" : "max_", titlePrefix: "Max" },
            { fieldPrefix: "upper_box_", titlePrefix: "Q3" },
            { fieldPrefix: "mid_box_", titlePrefix: "Median" },
            { fieldPrefix: "lower_box_", titlePrefix: "Q1" },
            { fieldPrefix: g === "min-max" ? "lower_whisker_" : "min_", titlePrefix: "Min" },
          ],
          y,
          w
        );
        const A = { type: "tick", color: "black", opacity: 1, orient: $, invalid: p, aria: false };
        const M =
          g === "min-max"
            ? N
            : _l(
                [
                  { fieldPrefix: "upper_whisker_", titlePrefix: "Upper Whisker" },
                  { fieldPrefix: "lower_whisker_", titlePrefix: "Lower Whisker" },
                ],
                y,
                w
              );
        const L = [
          ...z({
            partName: "rule",
            mark: { type: "rule", invalid: p, aria: false },
            positionPrefix: "lower_whisker",
            endPositionPrefix: "lower_box",
            extraEncoding: M,
          }),
          ...z({
            partName: "rule",
            mark: { type: "rule", invalid: p, aria: false },
            positionPrefix: "upper_box",
            endPositionPrefix: "upper_whisker",
            extraEncoding: M,
          }),
          ...z({ partName: "ticks", mark: A, positionPrefix: "lower_whisker", extraEncoding: M }),
          ...z({ partName: "ticks", mark: A, positionPrefix: "upper_whisker", extraEncoding: M }),
        ];
        const q = [
          ...(g !== "tukey" ? L : []),
          ...C({
            partName: "box",
            mark: Object.assign(Object.assign({ type: "bar" }, d ? { size: d } : {}), { orient: k, invalid: p, ariaRoleDescription: "box" }),
            positionPrefix: "lower_box",
            endPositionPrefix: "upper_box",
            extraEncoding: N,
          }),
          ...E({
            partName: "median",
            mark: Object.assign(
              Object.assign(
                Object.assign(
                  { type: "tick", invalid: p },
                  (0, r.Kn)(n.boxplot.median) && n.boxplot.median.color ? { color: n.boxplot.median.color } : {}
                ),
                d ? { size: d } : {}
              ),
              { orient: $, aria: false }
            ),
            positionPrefix: "mid_box",
            extraEncoding: N,
          }),
        ];
        if (g === "min-max") {
          return Object.assign(Object.assign({}, l), { transform: ((i = l.transform) !== null && i !== void 0 ? i : []).concat(b), layer: q });
        }
        const I = `datum["lower_box_${y.field}"]`;
        const R = `datum["upper_box_${y.field}"]`;
        const W = `(${R} - ${I})`;
        const U = `${I} - ${f} * ${W}`;
        const H = `${R} + ${f} * ${W}`;
        const B = `datum["${y.field}"]`;
        const J = { joinaggregate: Rl(y.field), groupby: x };
        const G = {
          transform: [
            { filter: `(${U} <= ${B}) && (${B} <= ${H})` },
            {
              aggregate: [
                { op: "min", field: y.field, as: `lower_whisker_${y.field}` },
                { op: "max", field: y.field, as: `upper_whisker_${y.field}` },
                { op: "min", field: `lower_box_${y.field}`, as: `lower_box_${y.field}` },
                { op: "max", field: `upper_box_${y.field}`, as: `upper_box_${y.field}` },
                ...j,
              ],
              groupby: x,
            },
          ],
          layer: L,
        };
        const { tooltip: X } = P,
          V = Tl(P, ["tooltip"]);
        const { scale: K, axis: Y } = y;
        const Q = Pl(y);
        const Z = O(Y, ["title"]);
        const ee = zl(u, "outliers", n.boxplot, {
          transform: [{ filter: `(${B} < ${U}) || (${B} > ${H})` }],
          mark: "point",
          encoding: Object.assign(
            Object.assign(
              Object.assign(
                {
                  [v]: Object.assign(
                    Object.assign(
                      Object.assign({ field: y.field, type: y.type }, Q !== undefined ? { title: Q } : {}),
                      K !== undefined ? { scale: K } : {}
                    ),
                    T(Z) ? {} : { axis: Z }
                  ),
                },
                V
              ),
              D ? { color: D } : {}
            ),
            S ? { tooltip: S } : {}
          ),
        })[0];
        let ne;
        const te = [...m, ...h, J];
        if (ee) {
          ne = { transform: te, layer: [ee, G] };
        } else {
          ne = G;
          ne.transform.unshift(...te);
        }
        return Object.assign(Object.assign({}, l), { layer: [ne, { transform: b, layer: q }] });
      }
      function Rl(e) {
        return [
          { op: "q1", field: e, as: `lower_box_${e}` },
          { op: "q3", field: e, as: `upper_box_${e}` },
        ];
      }
      function Wl(e, n, t) {
        const i = Nl(e, Al);
        const { continuousAxisChannelDef: r, continuousAxis: s } = Cl(e, i, Al);
        const o = r.field;
        const a = ql(n);
        const c = [
          ...Rl(o),
          { op: "median", field: o, as: `mid_box_${o}` },
          { op: "min", field: o, as: (a === "min-max" ? "lower_whisker_" : "min_") + o },
          { op: "max", field: o, as: (a === "min-max" ? "upper_whisker_" : "max_") + o },
        ];
        const l =
          a === "min-max" || a === "tukey"
            ? []
            : [
                { calculate: `datum["upper_box_${o}"] - datum["lower_box_${o}"]`, as: `iqr_${o}` },
                { calculate: `min(datum["upper_box_${o}"] + datum["iqr_${o}"] * ${n}, datum["max_${o}"])`, as: `upper_whisker_${o}` },
                { calculate: `max(datum["lower_box_${o}"] - datum["iqr_${o}"] * ${n}, datum["min_${o}"])`, as: `lower_whisker_${o}` },
              ];
        const u = e.encoding,
          f = s,
          d = u[f],
          p = Tl(u, [typeof f === "symbol" ? f : f + ""]);
        const { customTooltipWithoutAggregatedField: g, filteredEncoding: m } = Dl(p);
        const { bins: h, timeUnits: b, aggregate: y, groupby: v, encoding: O } = yl(m, t);
        const x = i === "vertical" ? "horizontal" : "vertical";
        const j = i;
        const w = [...h, ...b, { aggregate: [...y, ...c], groupby: v }, ...l];
        return {
          bins: h,
          timeUnits: b,
          transform: w,
          groupby: v,
          aggregate: y,
          continuousAxisChannelDef: r,
          continuousAxis: s,
          encodingWithoutContinuousAxis: O,
          ticksOrient: x,
          boxOrient: j,
          customTooltipWithoutAggregatedField: g,
        };
      }
      var Ul =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      const Hl = "errorbar";
      const Bl = ["ticks", "rule"];
      const Jl = new dl(Hl, Gl);
      function Gl(e, { config: n }) {
        e = Object.assign(Object.assign({}, e), { encoding: xl(e.encoding, n) });
        const {
          transform: t,
          continuousAxisChannelDef: i,
          continuousAxis: r,
          encodingWithoutContinuousAxis: s,
          ticksOrient: o,
          markDef: a,
          outerSpec: c,
          tooltipEncoding: l,
        } = Ql(e, Hl, n);
        delete s["size"];
        const u = Fl(a, r, i, s, n.errorbar);
        const f = a.thickness;
        const d = a.size;
        const p = Object.assign(
          Object.assign({ type: "tick", orient: o, aria: false }, f !== undefined ? { thickness: f } : {}),
          d !== undefined ? { size: d } : {}
        );
        const g = [
          ...u({ partName: "ticks", mark: p, positionPrefix: "lower", extraEncoding: l }),
          ...u({ partName: "ticks", mark: p, positionPrefix: "upper", extraEncoding: l }),
          ...u({
            partName: "rule",
            mark: Object.assign({ type: "rule", ariaRoleDescription: "errorbar" }, f !== undefined ? { size: f } : {}),
            positionPrefix: "lower",
            endPositionPrefix: "upper",
            extraEncoding: l,
          }),
        ];
        return Object.assign(Object.assign(Object.assign({}, c), { transform: t }), g.length > 1 ? { layer: g } : Object.assign({}, g[0]));
      }
      function Xl(e, n) {
        const { encoding: t } = e;
        if (Vl(t)) {
          return { orient: Nl(e, n), inputType: "raw" };
        }
        const i = Kl(t);
        const r = Yl(t);
        const s = t.x;
        const o = t.y;
        if (i) {
          if (r) {
            throw new Error(`${n} cannot be both type aggregated-upper-lower and aggregated-error`);
          }
          const e = t.x2;
          const i = t.y2;
          if (bc(e) && bc(i)) {
            throw new Error(`${n} cannot have both x2 and y2`);
          } else if (bc(e)) {
            if (gc(s)) {
              return { orient: "horizontal", inputType: "aggregated-upper-lower" };
            } else {
              throw new Error(`Both x and x2 have to be quantitative in ${n}`);
            }
          } else if (bc(i)) {
            if (gc(o)) {
              return { orient: "vertical", inputType: "aggregated-upper-lower" };
            } else {
              throw new Error(`Both y and y2 have to be quantitative in ${n}`);
            }
          }
          throw new Error("No ranged axis");
        } else {
          const e = t.xError;
          const i = t.xError2;
          const r = t.yError;
          const a = t.yError2;
          if (bc(i) && !bc(e)) {
            throw new Error(`${n} cannot have xError2 without xError`);
          }
          if (bc(a) && !bc(r)) {
            throw new Error(`${n} cannot have yError2 without yError`);
          }
          if (bc(e) && bc(r)) {
            throw new Error(`${n} cannot have both xError and yError with both are quantiative`);
          } else if (bc(e)) {
            if (gc(s)) {
              return { orient: "horizontal", inputType: "aggregated-error" };
            } else {
              throw new Error("All x, xError, and xError2 (if exist) have to be quantitative");
            }
          } else if (bc(r)) {
            if (gc(o)) {
              return { orient: "vertical", inputType: "aggregated-error" };
            } else {
              throw new Error("All y, yError, and yError2 (if exist) have to be quantitative");
            }
          }
          throw new Error("No ranged axis");
        }
      }
      function Vl(e) {
        return (bc(e.x) || bc(e.y)) && !bc(e.x2) && !bc(e.y2) && !bc(e.xError) && !bc(e.xError2) && !bc(e.yError) && !bc(e.yError2);
      }
      function Kl(e) {
        return bc(e.x2) || bc(e.y2);
      }
      function Yl(e) {
        return bc(e.xError) || bc(e.xError2) || bc(e.yError) || bc(e.yError2);
      }
      function Ql(e, n, t) {
        var i;
        const { mark: r, encoding: s, params: o, projection: a } = e,
          c = Ul(e, ["mark", "encoding", "params", "projection"]);
        const l = ia(r) ? r : { type: r };
        if (o) {
          Vr(Oi(n));
        }
        const { orient: u, inputType: f } = Xl(e, n);
        const {
          continuousAxisChannelDef: d,
          continuousAxisChannelDef2: p,
          continuousAxisChannelDefError: g,
          continuousAxisChannelDefError2: m,
          continuousAxis: h,
        } = Cl(e, u, n);
        const {
          errorBarSpecificAggregate: b,
          postAggregateCalculates: y,
          tooltipSummary: v,
          tooltipTitleWithFieldName: O,
        } = Zl(l, d, p, g, m, f, n, t);
        const x = s,
          j = h,
          w = x[j],
          $ = h === "x" ? "x2" : "y2",
          k = x[$],
          S = h === "x" ? "xError" : "yError",
          D = x[S],
          _ = h === "x" ? "xError2" : "yError2",
          P = x[_],
          F = Ul(x, [
            typeof j === "symbol" ? j : j + "",
            typeof $ === "symbol" ? $ : $ + "",
            typeof S === "symbol" ? S : S + "",
            typeof _ === "symbol" ? _ : _ + "",
          ]);
        const { bins: z, timeUnits: C, aggregate: E, groupby: N, encoding: T } = yl(F, t);
        const A = [...E, ...b];
        const M = f !== "raw" ? [] : N;
        const L = _l(v, d, T, O);
        return {
          transform: [
            ...((i = c.transform) !== null && i !== void 0 ? i : []),
            ...z,
            ...C,
            ...(A.length === 0 ? [] : [{ aggregate: A, groupby: M }]),
            ...y,
          ],
          groupby: M,
          continuousAxisChannelDef: d,
          continuousAxis: h,
          encodingWithoutContinuousAxis: T,
          ticksOrient: u === "vertical" ? "horizontal" : "vertical",
          markDef: l,
          outerSpec: c,
          tooltipEncoding: L,
        };
      }
      function Zl(e, n, t, i, r, s, o, a) {
        let c = [];
        let l = [];
        const u = n.field;
        let f;
        let d = false;
        if (s === "raw") {
          const n = e.center ? e.center : e.extent ? (e.extent === "iqr" ? "median" : "mean") : a.errorbar.center;
          const t = e.extent ? e.extent : n === "mean" ? "stderr" : "iqr";
          if ((n === "median") !== (t === "iqr")) {
            Vr(Er(n, t, o));
          }
          if (t === "stderr" || t === "stdev") {
            c = [
              { op: t, field: u, as: `extent_${u}` },
              { op: n, field: u, as: `center_${u}` },
            ];
            l = [
              { calculate: `datum["center_${u}"] + datum["extent_${u}"]`, as: `upper_${u}` },
              { calculate: `datum["center_${u}"] - datum["extent_${u}"]`, as: `lower_${u}` },
            ];
            f = [
              { fieldPrefix: "center_", titlePrefix: U(n) },
              { fieldPrefix: "upper_", titlePrefix: eu(n, t, "+") },
              { fieldPrefix: "lower_", titlePrefix: eu(n, t, "-") },
            ];
            d = true;
          } else {
            let e;
            let n;
            let i;
            if (t === "ci") {
              e = "mean";
              n = "ci0";
              i = "ci1";
            } else {
              e = "median";
              n = "q1";
              i = "q3";
            }
            c = [
              { op: n, field: u, as: `lower_${u}` },
              { op: i, field: u, as: `upper_${u}` },
              { op: e, field: u, as: `center_${u}` },
            ];
            f = [
              { fieldPrefix: "upper_", titlePrefix: Ac({ field: u, aggregate: i, type: "quantitative" }, a, { allowDisabling: false }) },
              { fieldPrefix: "lower_", titlePrefix: Ac({ field: u, aggregate: n, type: "quantitative" }, a, { allowDisabling: false }) },
              { fieldPrefix: "center_", titlePrefix: Ac({ field: u, aggregate: e, type: "quantitative" }, a, { allowDisabling: false }) },
            ];
          }
        } else {
          if (e.center || e.extent) {
            Vr(Cr(e.center, e.extent));
          }
          if (s === "aggregated-upper-lower") {
            f = [];
            l = [
              { calculate: `datum["${t.field}"]`, as: `upper_${u}` },
              { calculate: `datum["${u}"]`, as: `lower_${u}` },
            ];
          } else if (s === "aggregated-error") {
            f = [{ fieldPrefix: "", titlePrefix: u }];
            l = [{ calculate: `datum["${u}"] + datum["${i.field}"]`, as: `upper_${u}` }];
            if (r) {
              l.push({ calculate: `datum["${u}"] + datum["${r.field}"]`, as: `lower_${u}` });
            } else {
              l.push({ calculate: `datum["${u}"] - datum["${i.field}"]`, as: `lower_${u}` });
            }
          }
          for (const e of l) {
            f.push({ fieldPrefix: e.as.substring(0, 6), titlePrefix: X(X(e.calculate, 'datum["', ""), '"]', "") });
          }
        }
        return { postAggregateCalculates: l, errorBarSpecificAggregate: c, tooltipSummary: f, tooltipTitleWithFieldName: d };
      }
      function eu(e, n, t) {
        return `${U(e)} ${t} ${n}`;
      }
      const nu = "errorband";
      const tu = ["band", "borders"];
      const iu = new dl(nu, ru);
      function ru(e, { config: n }) {
        e = Object.assign(Object.assign({}, e), { encoding: xl(e.encoding, n) });
        const {
          transform: t,
          continuousAxisChannelDef: i,
          continuousAxis: r,
          encodingWithoutContinuousAxis: s,
          markDef: o,
          outerSpec: a,
          tooltipEncoding: c,
        } = Ql(e, nu, n);
        const l = o;
        const u = Fl(l, r, i, s, n.errorband);
        const f = e.encoding.x !== undefined && e.encoding.y !== undefined;
        let d = { type: f ? "area" : "rect" };
        let p = { type: f ? "line" : "rule" };
        const g = Object.assign(
          Object.assign({}, l.interpolate ? { interpolate: l.interpolate } : {}),
          l.tension && l.interpolate ? { tension: l.tension } : {}
        );
        if (f) {
          d = Object.assign(Object.assign(Object.assign({}, d), g), { ariaRoleDescription: "errorband" });
          p = Object.assign(Object.assign(Object.assign({}, p), g), { aria: false });
        } else if (l.interpolate) {
          Vr(Tr("interpolate"));
        } else if (l.tension) {
          Vr(Tr("tension"));
        }
        return Object.assign(Object.assign({}, a), {
          transform: t,
          layer: [
            ...u({ partName: "band", mark: d, positionPrefix: "lower", endPositionPrefix: "upper", extraEncoding: c }),
            ...u({ partName: "borders", mark: p, positionPrefix: "lower", extraEncoding: c }),
            ...u({ partName: "borders", mark: p, positionPrefix: "upper", extraEncoding: c }),
          ],
        });
      }
      const su = {};
      function ou(e, n, t) {
        const i = new dl(e, n);
        su[e] = { normalizer: i, parts: t };
      }
      function au(e) {
        delete su[e];
      }
      function cu() {
        return A(su);
      }
      ou(Al, Il, Ml);
      ou(Hl, Gl, Bl);
      ou(nu, ru, tu);
      const lu = [
        "gradientHorizontalMaxLength",
        "gradientHorizontalMinLength",
        "gradientVerticalMaxLength",
        "gradientVerticalMinLength",
        "unselectedOpacity",
      ];
      const uu = {
        titleAlign: "align",
        titleAnchor: "anchor",
        titleAngle: "angle",
        titleBaseline: "baseline",
        titleColor: "color",
        titleFont: "font",
        titleFontSize: "fontSize",
        titleFontStyle: "fontStyle",
        titleFontWeight: "fontWeight",
        titleLimit: "limit",
        titleLineHeight: "lineHeight",
        titleOrient: "orient",
        titlePadding: "offset",
      };
      const fu = {
        labelAlign: "align",
        labelAnchor: "anchor",
        labelAngle: "angle",
        labelBaseline: "baseline",
        labelColor: "color",
        labelFont: "font",
        labelFontSize: "fontSize",
        labelFontStyle: "fontStyle",
        labelFontWeight: "fontWeight",
        labelLimit: "limit",
        labelLineHeight: "lineHeight",
        labelOrient: "orient",
        labelPadding: "offset",
      };
      const du = A(uu);
      const pu = A(fu);
      const gu = { header: 1, headerRow: 1, headerColumn: 1, headerFacet: 1 };
      const mu = A(gu);
      const hu = ["size", "shape", "fill", "stroke", "strokeDash", "strokeWidth", "opacity"];
      const bu = {
        gradientHorizontalMaxLength: 200,
        gradientHorizontalMinLength: 100,
        gradientVerticalMaxLength: 200,
        gradientVerticalMinLength: 64,
        unselectedOpacity: 0.35,
      };
      const yu = {
        aria: 1,
        clipHeight: 1,
        columnPadding: 1,
        columns: 1,
        cornerRadius: 1,
        description: 1,
        direction: 1,
        fillColor: 1,
        format: 1,
        formatType: 1,
        gradientLength: 1,
        gradientOpacity: 1,
        gradientStrokeColor: 1,
        gradientStrokeWidth: 1,
        gradientThickness: 1,
        gridAlign: 1,
        labelAlign: 1,
        labelBaseline: 1,
        labelColor: 1,
        labelFont: 1,
        labelFontSize: 1,
        labelFontStyle: 1,
        labelFontWeight: 1,
        labelLimit: 1,
        labelOffset: 1,
        labelOpacity: 1,
        labelOverlap: 1,
        labelPadding: 1,
        labelSeparation: 1,
        legendX: 1,
        legendY: 1,
        offset: 1,
        orient: 1,
        padding: 1,
        rowPadding: 1,
        strokeColor: 1,
        symbolDash: 1,
        symbolDashOffset: 1,
        symbolFillColor: 1,
        symbolLimit: 1,
        symbolOffset: 1,
        symbolOpacity: 1,
        symbolSize: 1,
        symbolStrokeColor: 1,
        symbolStrokeWidth: 1,
        symbolType: 1,
        tickCount: 1,
        tickMinStep: 1,
        title: 1,
        titleAlign: 1,
        titleAnchor: 1,
        titleBaseline: 1,
        titleColor: 1,
        titleFont: 1,
        titleFontSize: 1,
        titleFontStyle: 1,
        titleFontWeight: 1,
        titleLimit: 1,
        titleLineHeight: 1,
        titleOpacity: 1,
        titleOrient: 1,
        titlePadding: 1,
        type: 1,
        values: 1,
        zindex: 1,
      };
      const vu = A(yu);
      const Ou = "_vgsid_";
      const xu = {
        point: { on: "click", fields: [Ou], toggle: "event.shiftKey", resolve: "global", clear: "dblclick" },
        interval: {
          on: "[mousedown, window:mouseup] > window:mousemove!",
          encodings: ["x", "y"],
          translate: "[mousedown, window:mouseup] > window:mousemove!",
          zoom: "wheel!",
          mark: { fill: "#333", fillOpacity: 0.125, stroke: "white" },
          resolve: "global",
          clear: "dblclick",
        },
      };
      function ju(e) {
        return e === "legend" || !!(e === null || e === void 0 ? void 0 : e.legend);
      }
      function wu(e) {
        return ju(e) && (0, r.Kn)(e);
      }
      function $u(e) {
        return !!(e === null || e === void 0 ? void 0 : e["select"]);
      }
      var ku =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      function Su(e) {
        const n = [];
        for (const t of e || []) {
          if ($u(t)) continue;
          const { expr: e, bind: i } = t,
            r = ku(t, ["expr", "bind"]);
          if (i && e) {
            const t = Object.assign(Object.assign({}, r), { bind: i, init: e });
            n.push(t);
          } else {
            const t = Object.assign(Object.assign(Object.assign({}, r), e ? { update: e } : {}), i ? { bind: i } : {});
            n.push(t);
          }
        }
        return n;
      }
      function Du(e) {
        return Pu(e) || Fu(e) || _u(e);
      }
      function _u(e) {
        return "concat" in e;
      }
      function Pu(e) {
        return "vconcat" in e;
      }
      function Fu(e) {
        return "hconcat" in e;
      }
      function zu({ step: e, offsetIsDiscrete: n }) {
        var t;
        if (n) {
          return (t = e.for) !== null && t !== void 0 ? t : "offset";
        } else {
          return "position";
        }
      }
      function Cu(e) {
        return (0, r.Kn)(e) && e["step"] !== undefined;
      }
      function Eu(e) {
        return e["view"] || e["width"] || e["height"];
      }
      const Nu = 20;
      const Tu = { align: 1, bounds: 1, center: 1, columns: 1, spacing: 1 };
      const Au = A(Tu);
      function Mu(e, n, t) {
        var i, s;
        const o = t[n];
        const a = {};
        const { spacing: c, columns: l } = o;
        if (c !== undefined) {
          a.spacing = c;
        }
        if (l !== undefined) {
          if ((Qa(e) && !Ka(e.facet)) || _u(e)) {
            a.columns = l;
          }
        }
        if (Pu(e)) {
          a.columns = 1;
        }
        for (const u of Au) {
          if (e[u] !== undefined) {
            if (u === "spacing") {
              const n = e[u];
              a[u] = (0, r.hj)(n)
                ? n
                : { row: (i = n.row) !== null && i !== void 0 ? i : c, column: (s = n.column) !== null && s !== void 0 ? s : c };
            } else {
              a[u] = e[u];
            }
          }
        }
        return a;
      }
      var Lu =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      function qu(e, n) {
        var t;
        return (t = e[n]) !== null && t !== void 0 ? t : e[n === "width" ? "continuousWidth" : "continuousHeight"];
      }
      function Iu(e, n) {
        const t = Ru(e, n);
        return Cu(t) ? t.step : Wu;
      }
      function Ru(e, n) {
        var t;
        const i = (t = e[n]) !== null && t !== void 0 ? t : e[n === "width" ? "discreteWidth" : "discreteHeight"];
        return Y(i, { step: e.step });
      }
      const Wu = 20;
      const Uu = { continuousWidth: 200, continuousHeight: 200, step: Wu };
      function Hu(e) {
        return e && !!e["scheme"];
      }
      const Bu = {
        background: "white",
        padding: 5,
        timeFormat: "%b %d, %Y",
        countTitle: "Count of Records",
        view: Uu,
        mark: fa,
        arc: {},
        area: {},
        bar: ba,
        circle: {},
        geoshape: {},
        image: {},
        line: {},
        point: {},
        rect: ya,
        rule: { color: "black" },
        square: {},
        text: { color: "black" },
        tick: va,
        trail: {},
        boxplot: { size: 14, extent: 1.5, box: {}, median: { color: "white" }, outliers: {}, rule: {}, ticks: null },
        errorbar: { center: "mean", rule: true, ticks: false },
        errorband: { band: { opacity: 0.3 }, borders: false },
        scale: vo,
        projection: {},
        legend: bu,
        header: { titlePadding: 10, labelPadding: 10 },
        headerColumn: {},
        headerRow: {},
        headerFacet: {},
        selection: xu,
        style: {},
        title: {},
        facet: { spacing: Nu },
        concat: { spacing: Nu },
        normalizedNumberFormat: ".0%",
      };
      const Ju = ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"];
      const Gu = { text: 11, guideLabel: 10, guideTitle: 11, groupTitle: 13, groupSubtitle: 12 };
      const Xu = {
        blue: Ju[0],
        orange: Ju[1],
        red: Ju[2],
        teal: Ju[3],
        green: Ju[4],
        yellow: Ju[5],
        purple: Ju[6],
        pink: Ju[7],
        brown: Ju[8],
        gray0: "#000",
        gray1: "#111",
        gray2: "#222",
        gray3: "#333",
        gray4: "#444",
        gray5: "#555",
        gray6: "#666",
        gray7: "#777",
        gray8: "#888",
        gray9: "#999",
        gray10: "#aaa",
        gray11: "#bbb",
        gray12: "#ccc",
        gray13: "#ddd",
        gray14: "#eee",
        gray15: "#fff",
      };
      function Vu(e = {}) {
        return {
          signals: [{ name: "color", value: (0, r.Kn)(e) ? Object.assign(Object.assign({}, Xu), e) : Xu }],
          mark: { color: { signal: "color.blue" } },
          rule: { color: { signal: "color.gray0" } },
          text: { color: { signal: "color.gray0" } },
          style: {
            "guide-label": { fill: { signal: "color.gray0" } },
            "guide-title": { fill: { signal: "color.gray0" } },
            "group-title": { fill: { signal: "color.gray0" } },
            "group-subtitle": { fill: { signal: "color.gray0" } },
            cell: { stroke: { signal: "color.gray8" } },
          },
          axis: { domainColor: { signal: "color.gray13" }, gridColor: { signal: "color.gray8" }, tickColor: { signal: "color.gray13" } },
          range: {
            category: [
              { signal: "color.blue" },
              { signal: "color.orange" },
              { signal: "color.red" },
              { signal: "color.teal" },
              { signal: "color.green" },
              { signal: "color.yellow" },
              { signal: "color.purple" },
              { signal: "color.pink" },
              { signal: "color.brown" },
              { signal: "color.grey8" },
            ],
          },
        };
      }
      function Ku(e) {
        return {
          signals: [{ name: "fontSize", value: (0, r.Kn)(e) ? Object.assign(Object.assign({}, Gu), e) : Gu }],
          text: { fontSize: { signal: "fontSize.text" } },
          style: {
            "guide-label": { fontSize: { signal: "fontSize.guideLabel" } },
            "guide-title": { fontSize: { signal: "fontSize.guideTitle" } },
            "group-title": { fontSize: { signal: "fontSize.groupTitle" } },
            "group-subtitle": { fontSize: { signal: "fontSize.groupSubtitle" } },
          },
        };
      }
      function Yu(e) {
        return {
          text: { font: e },
          style: { "guide-label": { font: e }, "guide-title": { font: e }, "group-title": { font: e }, "group-subtitle": { font: e } },
        };
      }
      function Qu(e) {
        const n = A(e || {});
        const t = {};
        for (const i of n) {
          const n = e[i];
          t[i] = tl(n) ? Xt(n) : Vt(n);
        }
        return t;
      }
      function Zu(e) {
        const n = A(e);
        const t = {};
        for (const i of n) {
          t[i] = Qu(e[i]);
        }
        return t;
      }
      const ef = [...pa, ...ul, ...mu, "background", "padding", "legend", "lineBreak", "scale", "style", "title", "view"];
      function nf(e = {}) {
        const { color: n, font: t, fontSize: i, selection: s } = e,
          o = Lu(e, ["color", "font", "fontSize", "selection"]);
        const a = (0, r.fE)({}, b(Bu), t ? Yu(t) : {}, n ? Vu(n) : {}, i ? Ku(i) : {}, o || {});
        if (s) {
          (0, Ws.writeConfig)(a, "selection", s, true);
        }
        const c = O(a, ef);
        for (const r of ["background", "lineBreak", "padding"]) {
          if (a[r]) {
            c[r] = Vt(a[r]);
          }
        }
        for (const r of pa) {
          if (a[r]) {
            c[r] = Et(a[r]);
          }
        }
        for (const r of ul) {
          if (a[r]) {
            c[r] = Qu(a[r]);
          }
        }
        for (const r of mu) {
          if (a[r]) {
            c[r] = Et(a[r]);
          }
        }
        if (a.legend) {
          c.legend = Et(a.legend);
        }
        if (a.scale) {
          c.scale = Et(a.scale);
        }
        if (a.style) {
          c.style = Zu(a.style);
        }
        if (a.title) {
          c.title = Et(a.title);
        }
        if (a.view) {
          c.view = Et(a.view);
        }
        return c;
      }
      const tf = new Set(["view", ...ta]);
      const rf = [
        "color",
        "fontSize",
        "background",
        "padding",
        "facet",
        "concat",
        "numberFormat",
        "numberFormatType",
        "normalizedNumberFormat",
        "normalizedNumberFormatType",
        "timeFormat",
        "countTitle",
        "header",
        "axisQuantitative",
        "axisTemporal",
        "axisDiscrete",
        "axisPoint",
        "axisXBand",
        "axisXPoint",
        "axisXDiscrete",
        "axisXQuantitative",
        "axisXTemporal",
        "axisYBand",
        "axisYPoint",
        "axisYDiscrete",
        "axisYQuantitative",
        "axisYTemporal",
        "scale",
        "selection",
        "overlay",
      ];
      const sf = Object.assign({ view: ["continuousWidth", "continuousHeight", "discreteWidth", "discreteHeight", "step"] }, ua);
      function of(e) {
        e = b(e);
        for (const n of rf) {
          delete e[n];
        }
        if (e.axis) {
          for (const n in e.axis) {
            if (tl(e.axis[n])) {
              delete e.axis[n];
            }
          }
        }
        if (e.legend) {
          for (const n of lu) {
            delete e.legend[n];
          }
        }
        if (e.mark) {
          for (const n of la) {
            delete e.mark[n];
          }
          if (e.mark.tooltip && (0, r.Kn)(e.mark.tooltip)) {
            delete e.mark.tooltip;
          }
        }
        if (e.params) {
          e.signals = (e.signals || []).concat(Su(e.params));
          delete e.params;
        }
        for (const n of tf) {
          for (const i of la) {
            delete e[n][i];
          }
          const t = sf[n];
          if (t) {
            for (const i of t) {
              delete e[n][i];
            }
          }
          cf(e, n);
        }
        for (const n of cu()) {
          delete e[n];
        }
        af(e);
        for (const n in e) {
          if ((0, r.Kn)(e[n]) && T(e[n])) {
            delete e[n];
          }
        }
        return T(e) ? undefined : e;
      }
      function af(e) {
        const { titleMarkConfig: n, subtitleMarkConfig: t, subtitle: i } = Tt(e.title);
        if (!T(n)) {
          e.style["group-title"] = Object.assign(Object.assign({}, e.style["group-title"]), n);
        }
        if (!T(t)) {
          e.style["group-subtitle"] = Object.assign(Object.assign({}, e.style["group-subtitle"]), t);
        }
        if (!T(i)) {
          e.title = i;
        } else {
          delete e.title;
        }
      }
      function cf(e, n, t, i) {
        const r = i ? e[n][i] : e[n];
        if (n === "view") {
          t = "cell";
        }
        const s = Object.assign(Object.assign({}, r), e.style[t !== null && t !== void 0 ? t : n]);
        if (!T(s)) {
          e.style[t !== null && t !== void 0 ? t : n] = s;
        }
        if (!i) {
          delete e[n];
        }
      }
      function lf(e) {
        return "layer" in e;
      }
      function uf(e) {
        return "repeat" in e;
      }
      function ff(e) {
        return !(0, r.kJ)(e.repeat) && e.repeat["layer"];
      }
      var df =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      class pf {
        map(e, n) {
          if (Qa(e)) {
            return this.mapFacet(e, n);
          } else if (uf(e)) {
            return this.mapRepeat(e, n);
          } else if (Fu(e)) {
            return this.mapHConcat(e, n);
          } else if (Pu(e)) {
            return this.mapVConcat(e, n);
          } else if (_u(e)) {
            return this.mapConcat(e, n);
          } else {
            return this.mapLayerOrUnit(e, n);
          }
        }
        mapLayerOrUnit(e, n) {
          if (lf(e)) {
            return this.mapLayer(e, n);
          } else if (fl(e)) {
            return this.mapUnit(e, n);
          }
          throw new Error(fi(e));
        }
        mapLayer(e, n) {
          return Object.assign(Object.assign({}, e), { layer: e.layer.map((e) => this.mapLayerOrUnit(e, n)) });
        }
        mapHConcat(e, n) {
          return Object.assign(Object.assign({}, e), { hconcat: e.hconcat.map((e) => this.map(e, n)) });
        }
        mapVConcat(e, n) {
          return Object.assign(Object.assign({}, e), { vconcat: e.vconcat.map((e) => this.map(e, n)) });
        }
        mapConcat(e, n) {
          const { concat: t } = e,
            i = df(e, ["concat"]);
          return Object.assign(Object.assign({}, i), { concat: t.map((e) => this.map(e, n)) });
        }
        mapFacet(e, n) {
          return Object.assign(Object.assign({}, e), { spec: this.map(e.spec, n) });
        }
        mapRepeat(e, n) {
          return Object.assign(Object.assign({}, e), { spec: this.map(e.spec, n) });
        }
      }
      const gf = { zero: 1, center: 1, normalize: 1 };
      function mf(e) {
        return e in gf;
      }
      const hf = new Set([qo, Ro, Io, Jo, Ho, Ko, Yo, Uo, Go, Xo]);
      const bf = new Set([Ro, Io, qo]);
      function yf(e) {
        return fc(e) && dc(e) === "quantitative" && !e.bin;
      }
      function vf(e, n) {
        var t, i;
        const r = n === "x" ? "y" : "radius";
        const s = e[n];
        const o = e[r];
        if (fc(s) && fc(o)) {
          if (yf(s) && yf(o)) {
            if (s.stack) {
              return n;
            } else if (o.stack) {
              return r;
            }
            const e = fc(s) && !!s.aggregate;
            const a = fc(o) && !!o.aggregate;
            if (e !== a) {
              return e ? n : r;
            } else {
              const e = (t = s.scale) === null || t === void 0 ? void 0 : t.type;
              const a = (i = o.scale) === null || i === void 0 ? void 0 : i.type;
              if (e && e !== "linear") {
                return r;
              } else if (a && a !== "linear") {
                return n;
              }
            }
          } else if (yf(s)) {
            return n;
          } else if (yf(o)) {
            return r;
          }
        } else if (yf(s)) {
          return n;
        } else if (yf(o)) {
          return r;
        }
        return undefined;
      }
      function Of(e) {
        switch (e) {
          case "x":
            return "y";
          case "y":
            return "x";
          case "theta":
            return "radius";
          case "radius":
            return "theta";
        }
      }
      function xf(e, n) {
        var t, i;
        const s = ia(e) ? e.type : e;
        if (!hf.has(s)) {
          return null;
        }
        const o = vf(n, "x") || vf(n, "theta");
        if (!o) {
          return null;
        }
        const a = n[o];
        const c = fc(a) ? Sc(a, {}) : undefined;
        const l = Of(o);
        const u = [];
        const f = new Set();
        if (n[l]) {
          const e = n[l];
          const t = fc(e) ? Sc(e, {}) : undefined;
          if (t && t !== c) {
            u.push(l);
            f.add(t);
          }
          const i = l === "x" ? "xOffset" : "yOffset";
          const r = n[i];
          const s = fc(r) ? Sc(r, {}) : undefined;
          if (s && s !== c) {
            u.push(i);
            f.add(s);
          }
        }
        const d = qn.reduce((e, t) => {
          if (t !== "tooltip" && gl(n, t)) {
            const i = n[t];
            for (const n of (0, r.IX)(i)) {
              const i = Rc(n);
              if (i.aggregate) {
                continue;
              }
              const r = Sc(i, {});
              if (!r || !f.has(r)) {
                e.push({ channel: t, fieldDef: i });
              }
            }
          }
          return e;
        }, []);
        let p;
        if (a.stack !== undefined) {
          if ((0, r.jn)(a.stack)) {
            p = a.stack ? "zero" : null;
          } else {
            p = a.stack;
          }
        } else if (bf.has(s)) {
          p = "zero";
        }
        if (!p || !mf(p)) {
          return null;
        }
        if (bl(n) && d.length === 0) {
          return null;
        }
        if (
          ((t = a === null || a === void 0 ? void 0 : a.scale) === null || t === void 0 ? void 0 : t.type) &&
          ((i = a === null || a === void 0 ? void 0 : a.scale) === null || i === void 0 ? void 0 : i.type) !== no.LINEAR
        ) {
          Vr(_r(a.scale.type));
          return null;
        }
        if (bc(n[yn(o)])) {
          if (a.stack !== undefined) {
            Vr(Dr(o));
          }
          return null;
        }
        if (fc(a) && a.aggregate && !$t.has(a.aggregate)) {
          Vr(Pr(a.aggregate));
        }
        return { groupbyChannels: u, groupbyFields: f, fieldChannel: o, impute: a.impute === null ? false : ea(s), stackBy: d, offset: p };
      }
      var jf =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      function wf(e) {
        const { point: n, line: t } = e,
          i = jf(e, ["point", "line"]);
        return A(i).length > 1 ? i : i.type;
      }
      function $f(e) {
        for (const n of ["line", "area", "rule", "trail"]) {
          if (e[n]) {
            e = Object.assign(Object.assign({}, e), { [n]: O(e[n], ["point", "line"]) });
          }
        }
        return e;
      }
      function kf(e, n = {}, t) {
        if (e.point === "transparent") {
          return { opacity: 0 };
        } else if (e.point) {
          return (0, r.Kn)(e.point) ? e.point : {};
        } else if (e.point !== undefined) {
          return null;
        } else {
          if (n.point || t.shape) {
            return (0, r.Kn)(n.point) ? n.point : {};
          }
          return undefined;
        }
      }
      function Sf(e, n = {}) {
        if (e.line) {
          return e.line === true ? {} : e.line;
        } else if (e.line !== undefined) {
          return null;
        } else {
          if (n.line) {
            return n.line === true ? {} : n.line;
          }
          return undefined;
        }
      }
      class Df {
        constructor() {
          this.name = "path-overlay";
        }
        hasMatchingType(e, n) {
          if (fl(e)) {
            const { mark: t, encoding: i } = e;
            const r = ia(t) ? t : { type: t };
            switch (r.type) {
              case "line":
              case "rule":
              case "trail":
                return !!kf(r, n[r.type], i);
              case "area":
                return !!kf(r, n[r.type], i) || !!Sf(r, n[r.type]);
            }
          }
          return false;
        }
        run(e, n, t) {
          const { config: i } = n;
          const { params: r, projection: s, mark: o, encoding: a } = e,
            c = jf(e, ["params", "projection", "mark", "encoding"]);
          const l = xl(a, i);
          const u = ia(o) ? o : { type: o };
          const f = kf(u, i[u.type], l);
          const d = u.type === "area" && Sf(u, i[u.type]);
          const p = [
            Object.assign(Object.assign({}, r ? { params: r } : {}), {
              mark: wf(
                Object.assign(
                  Object.assign({}, u.type === "area" && u.opacity === undefined && u.fillOpacity === undefined ? { opacity: 0.7 } : {}),
                  u
                )
              ),
              encoding: O(l, ["shape"]),
            }),
          ];
          const g = xf(u, l);
          let m = l;
          if (g) {
            const { fieldChannel: e, offset: n } = g;
            m = Object.assign(Object.assign({}, l), { [e]: Object.assign(Object.assign({}, l[e]), n ? { stack: n } : {}) });
          }
          m = O(m, ["y2", "x2"]);
          if (d) {
            p.push(
              Object.assign(Object.assign({}, s ? { projection: s } : {}), {
                mark: Object.assign(Object.assign({ type: "line" }, v(u, ["clip", "interpolate", "tension", "tooltip"])), d),
                encoding: m,
              })
            );
          }
          if (f) {
            p.push(
              Object.assign(Object.assign({}, s ? { projection: s } : {}), {
                mark: Object.assign(Object.assign({ type: "point", opacity: 1, filled: true }, v(u, ["clip", "tooltip"])), f),
                encoding: m,
              })
            );
          }
          return t(Object.assign(Object.assign({}, c), { layer: p }), Object.assign(Object.assign({}, n), { config: $f(i) }));
        }
      }
      var _f =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      function Pf(e, n) {
        if (!n) {
          return e;
        }
        if (Ka(e)) {
          return Tf(e, n);
        }
        return Cf(e, n);
      }
      function Ff(e, n) {
        if (!n) {
          return e;
        }
        return Tf(e, n);
      }
      function zf(e, n, t) {
        const i = n[e];
        if (nc(i)) {
          if (i.repeat in t) {
            return Object.assign(Object.assign({}, n), { [e]: t[i.repeat] });
          } else {
            Vr(_i(i.repeat));
            return undefined;
          }
        }
        return n;
      }
      function Cf(e, n) {
        e = zf("field", e, n);
        if (e === undefined) {
          return undefined;
        } else if (e === null) {
          return null;
        }
        if (ic(e) && Xa(e.sort)) {
          const t = zf("field", e.sort, n);
          e = Object.assign(Object.assign({}, e), t ? { sort: t } : {});
        }
        return e;
      }
      function Ef(e, n) {
        if (fc(e)) {
          return Cf(e, n);
        } else {
          const t = zf("datum", e, n);
          if (t !== e && !t.type) {
            t.type = "nominal";
          }
          return t;
        }
      }
      function Nf(e, n) {
        if (bc(e)) {
          const t = Ef(e, n);
          if (t) {
            return t;
          } else if (ac(e)) {
            return { condition: e.condition };
          }
        } else {
          if (lc(e)) {
            const t = Ef(e.condition, n);
            if (t) {
              return Object.assign(Object.assign({}, e), { condition: t });
            } else {
              const { condition: n } = e,
                t = _f(e, ["condition"]);
              return t;
            }
          }
          return e;
        }
        return undefined;
      }
      function Tf(e, n) {
        const t = {};
        for (const i in e) {
          if ((0, r.nr)(e, i)) {
            const s = e[i];
            if ((0, r.kJ)(s)) {
              t[i] = s.map((e) => Nf(e, n)).filter((e) => e);
            } else {
              const e = Nf(s, n);
              if (e !== undefined) {
                t[i] = e;
              }
            }
          }
        }
        return t;
      }
      class Af {
        constructor() {
          this.name = "RuleForRangedLine";
        }
        hasMatchingType(e) {
          if (fl(e)) {
            const { encoding: n, mark: t } = e;
            if (t === "line" || (ia(t) && t.type === "line")) {
              for (const e of gn) {
                const t = hn(e);
                const i = n[t];
                if (n[e]) {
                  if ((fc(i) && !_t(i.bin)) || pc(i)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        }
        run(e, n, t) {
          const { encoding: i, mark: s } = e;
          Vr(rr(!!i.x2, !!i.y2));
          return t(Object.assign(Object.assign({}, e), { mark: (0, r.Kn)(s) ? Object.assign(Object.assign({}, s), { type: "rule" }) : "rule" }), n);
        }
      }
      var Mf =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      class Lf extends pf {
        constructor() {
          super(...arguments);
          this.nonFacetUnitNormalizers = [Ll, Jl, iu, new Df(), new Af()];
        }
        map(e, n) {
          if (fl(e)) {
            const t = gl(e.encoding, oe);
            const i = gl(e.encoding, ae);
            const r = gl(e.encoding, ce);
            if (t || i || r) {
              return this.mapFacetedUnit(e, n);
            }
          }
          return super.map(e, n);
        }
        mapUnit(e, n) {
          const { parentEncoding: t, parentProjection: i } = n;
          const r = Ff(e.encoding, n.repeater);
          const s = Object.assign(Object.assign({}, e), r ? { encoding: r } : {});
          if (t || i) {
            return this.mapUnitWithParentEncodingOrProjection(s, n);
          }
          const o = this.mapLayerOrUnit.bind(this);
          for (const a of this.nonFacetUnitNormalizers) {
            if (a.hasMatchingType(s, n.config)) {
              return a.run(s, n, o);
            }
          }
          return s;
        }
        mapRepeat(e, n) {
          if (ff(e)) {
            return this.mapLayerRepeat(e, n);
          } else {
            return this.mapNonLayerRepeat(e, n);
          }
        }
        mapLayerRepeat(e, n) {
          const { repeat: t, spec: i } = e,
            r = Mf(e, ["repeat", "spec"]);
          const { row: s, column: o, layer: a } = t;
          const { repeater: c = {}, repeaterPrefix: l = "" } = n;
          if (s || o) {
            return this.mapRepeat(
              Object.assign(Object.assign({}, e), {
                repeat: Object.assign(Object.assign({}, s ? { row: s } : {}), o ? { column: o } : {}),
                spec: { repeat: { layer: a }, spec: i },
              }),
              n
            );
          } else {
            return Object.assign(Object.assign({}, r), {
              layer: a.map((e) => {
                const t = Object.assign(Object.assign({}, c), { layer: e });
                const r = `${(i.name || "") + l}child__layer_${I(e)}`;
                const s = this.mapLayerOrUnit(i, Object.assign(Object.assign({}, n), { repeater: t, repeaterPrefix: r }));
                s.name = r;
                return s;
              }),
            });
          }
        }
        mapNonLayerRepeat(e, n) {
          var t;
          const { repeat: i, spec: s, data: o } = e,
            a = Mf(e, ["repeat", "spec", "data"]);
          if (!(0, r.kJ)(i) && e.columns) {
            e = O(e, ["columns"]);
            Vr(Pi("repeat"));
          }
          const c = [];
          const { repeater: l = {}, repeaterPrefix: u = "" } = n;
          const f = (!(0, r.kJ)(i) && i.row) || [l ? l.row : null];
          const d = (!(0, r.kJ)(i) && i.column) || [l ? l.column : null];
          const p = ((0, r.kJ)(i) && i) || [l ? l.repeat : null];
          for (const m of p) {
            for (const e of f) {
              for (const t of d) {
                const o = { repeat: m, row: e, column: t, layer: l.layer };
                const a =
                  (s.name || "") + u + "child__" + ((0, r.kJ)(i) ? `${I(m)}` : (i.row ? `row_${I(e)}` : "") + (i.column ? `column_${I(t)}` : ""));
                const f = this.map(s, Object.assign(Object.assign({}, n), { repeater: o, repeaterPrefix: a }));
                f.name = a;
                c.push(O(f, ["data"]));
              }
            }
          }
          const g = (0, r.kJ)(i) ? e.columns : i.column ? i.column.length : 1;
          return Object.assign(Object.assign({ data: (t = s.data) !== null && t !== void 0 ? t : o, align: "all" }, a), { columns: g, concat: c });
        }
        mapFacet(e, n) {
          const { facet: t } = e;
          if (Ka(t) && e.columns) {
            e = O(e, ["columns"]);
            Vr(Pi("facet"));
          }
          return super.mapFacet(e, n);
        }
        mapUnitWithParentEncodingOrProjection(e, n) {
          const { encoding: t, projection: i } = e;
          const { parentEncoding: r, parentProjection: s, config: o } = n;
          const a = If({ parentProjection: s, projection: i });
          const c = qf({ parentEncoding: r, encoding: Ff(t, n.repeater) });
          return this.mapUnit(Object.assign(Object.assign(Object.assign({}, e), a ? { projection: a } : {}), c ? { encoding: c } : {}), {
            config: o,
          });
        }
        mapFacetedUnit(e, n) {
          const t = e.encoding,
            { row: i, column: r, facet: s } = t,
            o = Mf(t, ["row", "column", "facet"]);
          const { mark: a, width: c, projection: l, height: u, view: f, params: d, encoding: p } = e,
            g = Mf(e, ["mark", "width", "projection", "height", "view", "params", "encoding"]);
          const { facetMapping: m, layout: h } = this.getFacetMappingAndLayout({ row: i, column: r, facet: s }, n);
          const b = Ff(o, n.repeater);
          return this.mapFacet(
            Object.assign(Object.assign(Object.assign({}, g), h), {
              facet: m,
              spec: Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(Object.assign(Object.assign({}, c ? { width: c } : {}), u ? { height: u } : {}), f ? { view: f } : {}),
                    l ? { projection: l } : {}
                  ),
                  { mark: a, encoding: b }
                ),
                d ? { params: d } : {}
              ),
            }),
            n
          );
        }
        getFacetMappingAndLayout(e, n) {
          var t;
          const { row: i, column: r, facet: s } = e;
          if (i || r) {
            if (s) {
              Vr(nr([...(i ? [oe] : []), ...(r ? [ae] : [])]));
            }
            const n = {};
            const o = {};
            for (const i of [oe, ae]) {
              const r = e[i];
              if (r) {
                const { align: e, center: s, spacing: a, columns: c } = r,
                  l = Mf(r, ["align", "center", "spacing", "columns"]);
                n[i] = l;
                for (const n of ["align", "center", "spacing"]) {
                  if (r[n] !== undefined) {
                    (t = o[n]) !== null && t !== void 0 ? t : (o[n] = {});
                    o[n][i] = r[n];
                  }
                }
              }
            }
            return { facetMapping: n, layout: o };
          } else {
            const { align: e, center: t, spacing: i, columns: r } = s,
              o = Mf(s, ["align", "center", "spacing", "columns"]);
            return {
              facetMapping: Pf(o, n.repeater),
              layout: Object.assign(
                Object.assign(Object.assign(Object.assign({}, e ? { align: e } : {}), t ? { center: t } : {}), i ? { spacing: i } : {}),
                r ? { columns: r } : {}
              ),
            };
          }
        }
        mapLayer(e, n) {
          var { parentEncoding: t, parentProjection: i } = n,
            r = Mf(n, ["parentEncoding", "parentProjection"]);
          const { encoding: s, projection: o } = e,
            a = Mf(e, ["encoding", "projection"]);
          const c = Object.assign(Object.assign({}, r), {
            parentEncoding: qf({ parentEncoding: t, encoding: s, layer: true }),
            parentProjection: If({ parentProjection: i, projection: o }),
          });
          return super.mapLayer(a, c);
        }
      }
      function qf({ parentEncoding: e, encoding: n = {}, layer: t }) {
        let i = {};
        if (e) {
          const s = new Set([...A(e), ...A(n)]);
          for (const o of s) {
            const s = n[o];
            const a = e[o];
            if (bc(s)) {
              const e = Object.assign(Object.assign({}, a), s);
              i[o] = e;
            } else if (lc(s)) {
              i[o] = Object.assign(Object.assign({}, s), { condition: Object.assign(Object.assign({}, a), s.condition) });
            } else if (s || s === null) {
              i[o] = s;
            } else if (t || vc(a) || Mt(a) || bc(a) || (0, r.kJ)(a)) {
              i[o] = a;
            }
          }
        } else {
          i = n;
        }
        return !i || T(i) ? undefined : i;
      }
      function If(e) {
        const { parentProjection: n, projection: t } = e;
        if (n && t) {
          Vr(Mi({ parentProjection: n, projection: t }));
        }
        return t !== null && t !== void 0 ? t : n;
      }
      function Rf(e) {
        return "filter" in e;
      }
      function Wf(e) {
        return (e === null || e === void 0 ? void 0 : e["stop"]) !== undefined;
      }
      function Uf(e) {
        return "lookup" in e;
      }
      function Hf(e) {
        return "data" in e;
      }
      function Bf(e) {
        return "param" in e;
      }
      function Jf(e) {
        return "pivot" in e;
      }
      function Gf(e) {
        return "density" in e;
      }
      function Xf(e) {
        return "quantile" in e;
      }
      function Vf(e) {
        return "regression" in e;
      }
      function Kf(e) {
        return "loess" in e;
      }
      function Yf(e) {
        return "sample" in e;
      }
      function Qf(e) {
        return "window" in e;
      }
      function Zf(e) {
        return "joinaggregate" in e;
      }
      function ed(e) {
        return "flatten" in e;
      }
      function nd(e) {
        return "calculate" in e;
      }
      function td(e) {
        return "bin" in e;
      }
      function id(e) {
        return "impute" in e;
      }
      function rd(e) {
        return "timeUnit" in e;
      }
      function sd(e) {
        return "aggregate" in e;
      }
      function od(e) {
        return "stack" in e;
      }
      function ad(e) {
        return "fold" in e;
      }
      function cd(e) {
        return e.map((e) => {
          if (Rf(e)) {
            return { filter: m(e.filter, Rs) };
          }
          return e;
        });
      }
      var ld =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      class ud extends pf {
        map(e, n) {
          var t, i;
          (t = n.emptySelections) !== null && t !== void 0 ? t : (n.emptySelections = {});
          (i = n.selectionPredicates) !== null && i !== void 0 ? i : (n.selectionPredicates = {});
          e = fd(e, n);
          return super.map(e, n);
        }
        mapLayerOrUnit(e, n) {
          e = fd(e, n);
          if (e.encoding) {
            const t = {};
            for (const [i, r] of L(e.encoding)) {
              t[i] = dd(r, n);
            }
            e = Object.assign(Object.assign({}, e), { encoding: t });
          }
          return super.mapLayerOrUnit(e, n);
        }
        mapUnit(e, n) {
          const t = e,
            { selection: i } = t,
            r = ld(t, ["selection"]);
          if (i) {
            return Object.assign(Object.assign({}, r), {
              params: L(i).map(([e, t]) => {
                var i;
                const r = t,
                  { init: s, bind: o, empty: a } = r,
                  c = ld(r, ["init", "bind", "empty"]);
                if (c.type === "single") {
                  c.type = "point";
                  c.toggle = false;
                } else if (c.type === "multi") {
                  c.type = "point";
                }
                n.emptySelections[e] = a !== "none";
                for (const l of M((i = n.selectionPredicates[e]) !== null && i !== void 0 ? i : {})) {
                  l.empty = a !== "none";
                }
                return { name: e, value: s, select: c, bind: o };
              }),
            });
          }
          return e;
        }
      }
      function fd(e, n) {
        const { transform: t } = e,
          i = ld(e, ["transform"]);
        if (t) {
          const e = t.map((e) => {
            if (Rf(e)) {
              return { filter: gd(e, n) };
            } else if (td(e) && Pt(e.bin)) {
              return Object.assign(Object.assign({}, e), { bin: pd(e.bin) });
            } else if (Uf(e)) {
              const n = e.from,
                { selection: t } = n,
                i = ld(n, ["selection"]);
              return t ? Object.assign(Object.assign({}, e), { from: Object.assign({ param: t }, i) }) : e;
            }
            return e;
          });
          return Object.assign(Object.assign({}, i), { transform: e });
        }
        return e;
      }
      function dd(e, n) {
        var t, i;
        const r = b(e);
        if (fc(r) && Pt(r.bin)) {
          r.bin = pd(r.bin);
        }
        if (Oc(r) && ((i = (t = r.scale) === null || t === void 0 ? void 0 : t.domain) === null || i === void 0 ? void 0 : i.selection)) {
          const e = r.scale.domain,
            { selection: n } = e,
            t = ld(e, ["selection"]);
          r.scale.domain = Object.assign(Object.assign({}, t), n ? { param: n } : {});
        }
        if (ac(r)) {
          if ((0, Ws.isArray)(r.condition)) {
            r.condition = r.condition.map((e) => {
              const { selection: t, param: i, test: r } = e,
                s = ld(e, ["selection", "param", "test"]);
              return i ? e : Object.assign(Object.assign({}, s), { test: gd(e, n) });
            });
          } else {
            const e = dd(r.condition, n),
              { selection: t, param: i, test: s } = e,
              o = ld(e, ["selection", "param", "test"]);
            r.condition = i ? r.condition : Object.assign(Object.assign({}, o), { test: gd(r.condition, n) });
          }
        }
        return r;
      }
      function pd(e) {
        const n = e.extent;
        if (n === null || n === void 0 ? void 0 : n.selection) {
          const { selection: t } = n,
            i = ld(n, ["selection"]);
          return Object.assign(Object.assign({}, e), { extent: Object.assign(Object.assign({}, i), { param: t }) });
        }
        return e;
      }
      function gd(e, n) {
        const t = (e) =>
          m(e, (e) => {
            var t, i;
            var r;
            const s = (t = n.emptySelections[e]) !== null && t !== void 0 ? t : true;
            const o = { param: e, empty: s };
            (i = (r = n.selectionPredicates)[e]) !== null && i !== void 0 ? i : (r[e] = []);
            n.selectionPredicates[e].push(o);
            return o;
          });
        return e.selection ? t(e.selection) : m(e.test || e.filter, (e) => (e.selection ? t(e.selection) : e));
      }
      class md extends pf {
        map(e, n) {
          var t;
          const i = (t = n.selections) !== null && t !== void 0 ? t : [];
          if (e.params && !fl(e)) {
            const n = [];
            for (const t of e.params) {
              if ($u(t)) {
                i.push(t);
              } else {
                n.push(t);
              }
            }
            e.params = n;
          }
          n.selections = i;
          return super.map(e, hd(e, n));
        }
        mapUnit(e, n) {
          var t;
          const i = n.selections;
          if (!i || !i.length) return e;
          const r = ((t = n.path) !== null && t !== void 0 ? t : []).concat(e.name);
          const s = [];
          for (const o of i) {
            if (!o.views || !o.views.length) {
              s.push(o);
            } else {
              for (const n of o.views) {
                if (
                  ((0, Ws.isString)(n) && (n === e.name || r.indexOf(n) >= 0)) ||
                  ((0, Ws.isArray)(n) && n.map((e) => r.indexOf(e)).every((e, n, t) => e !== -1 && (n === 0 || e > t[n - 1])))
                ) {
                  s.push(o);
                }
              }
            }
          }
          if (s.length) e.params = s;
          return e;
        }
      }
      for (const MO of ["mapFacet", "mapRepeat", "mapHConcat", "mapVConcat", "mapLayer"]) {
        const e = md.prototype[MO];
        md.prototype[MO] = function (n, t) {
          return e.call(this, n, hd(n, t));
        };
      }
      function hd(e, n) {
        var t;
        return e.name ? Object.assign(Object.assign({}, n), { path: ((t = n.path) !== null && t !== void 0 ? t : []).concat(e.name) }) : n;
      }
      function bd(e, n) {
        if (n === undefined) {
          n = nf(e.config);
        }
        const t = xd(e, n);
        const { width: i, height: r } = e;
        const s = wd(t, { width: i, height: r, autosize: e.autosize }, n);
        return Object.assign(Object.assign({}, t), s ? { autosize: s } : {});
      }
      const yd = new Lf();
      const vd = new ud();
      const Od = new md();
      function xd(e, n = {}) {
        const t = { config: n };
        return Od.map(yd.map(vd.map(e, t), t), t);
      }
      function jd(e) {
        return (0, r.HD)(e) ? { type: e } : e !== null && e !== void 0 ? e : {};
      }
      function wd(e, n, t) {
        let { width: i, height: r } = n;
        const s = fl(e) || lf(e);
        const o = {};
        if (!s) {
          if (i == "container") {
            Vr(pi("width"));
            i = undefined;
          }
          if (r == "container") {
            Vr(pi("height"));
            r = undefined;
          }
        } else {
          if (i == "container" && r == "container") {
            o.type = "fit";
            o.contains = "padding";
          } else if (i == "container") {
            o.type = "fit-x";
            o.contains = "padding";
          } else if (r == "container") {
            o.type = "fit-y";
            o.contains = "padding";
          }
        }
        const a = Object.assign(Object.assign(Object.assign({ type: "pad" }, o), t ? jd(t.autosize) : {}), jd(e.autosize));
        if (a.type === "fit" && !s) {
          Vr(di);
          a.type = "pad";
        }
        if (i == "container" && !(a.type == "fit" || a.type == "fit-x")) {
          Vr(gi("width"));
        }
        if (r == "container" && !(a.type == "fit" || a.type == "fit-y")) {
          Vr(gi("height"));
        }
        if (h(a, { type: "pad" })) {
          return undefined;
        }
        return a;
      }
      function $d(e) {
        return e === "fit" || e === "fit-x" || e === "fit-y";
      }
      function kd(e) {
        return e ? `fit-${Bn(e)}` : "fit";
      }
      const Sd = ["background", "padding"];
      function Dd(e, n) {
        const t = {};
        for (const i of Sd) {
          if (e && e[i] !== undefined) {
            t[i] = Vt(e[i]);
          }
        }
        if (n) {
          t.params = e.params;
        }
        return t;
      }
      class _d {
        constructor(e = {}, n = {}) {
          this.explicit = e;
          this.implicit = n;
        }
        clone() {
          return new _d(b(this.explicit), b(this.implicit));
        }
        combine() {
          return Object.assign(Object.assign({}, this.explicit), this.implicit);
        }
        get(e) {
          return Y(this.explicit[e], this.implicit[e]);
        }
        getWithExplicit(e) {
          if (this.explicit[e] !== undefined) {
            return { explicit: true, value: this.explicit[e] };
          } else if (this.implicit[e] !== undefined) {
            return { explicit: false, value: this.implicit[e] };
          }
          return { explicit: false, value: undefined };
        }
        setWithExplicit(e, { value: n, explicit: t }) {
          if (n !== undefined) {
            this.set(e, n, t);
          }
        }
        set(e, n, t) {
          delete this[t ? "implicit" : "explicit"][e];
          this[t ? "explicit" : "implicit"][e] = n;
          return this;
        }
        copyKeyFromSplit(e, { explicit: n, implicit: t }) {
          if (n[e] !== undefined) {
            this.set(e, n[e], true);
          } else if (t[e] !== undefined) {
            this.set(e, t[e], false);
          }
        }
        copyKeyFromObject(e, n) {
          if (n[e] !== undefined) {
            this.set(e, n[e], true);
          }
        }
        copyAll(e) {
          for (const n of A(e.combine())) {
            const t = e.getWithExplicit(n);
            this.setWithExplicit(n, t);
          }
        }
      }
      function Pd(e) {
        return { explicit: true, value: e };
      }
      function Fd(e) {
        return { explicit: false, value: e };
      }
      function zd(e) {
        return (n, t, i, r) => {
          const s = e(n.value, t.value);
          if (s > 0) {
            return n;
          } else if (s < 0) {
            return t;
          }
          return Cd(n, t, i, r);
        };
      }
      function Cd(e, n, t, i) {
        if (e.explicit && n.explicit) {
          Vr(yr(t, i, e.value, n.value));
        }
        return e;
      }
      function Ed(e, n, t, i, r = Cd) {
        if (e === undefined || e.value === undefined) {
          return n;
        }
        if (e.explicit && !n.explicit) {
          return e;
        } else if (n.explicit && !e.explicit) {
          return n;
        } else if (h(e.value, n.value)) {
          return e;
        } else {
          return r(e, n, t, i);
        }
      }
      class Nd extends _d {
        constructor(e = {}, n = {}, t = false) {
          super(e, n);
          this.explicit = e;
          this.implicit = n;
          this.parseNothing = t;
        }
        clone() {
          const e = super.clone();
          e.parseNothing = this.parseNothing;
          return e;
        }
      }
      function Td(e) {
        return "url" in e;
      }
      function Ad(e) {
        return "values" in e;
      }
      function Md(e) {
        return "name" in e && !Td(e) && !Ad(e) && !Ld(e);
      }
      function Ld(e) {
        return e && (qd(e) || Id(e) || Rd(e));
      }
      function qd(e) {
        return "sequence" in e;
      }
      function Id(e) {
        return "sphere" in e;
      }
      function Rd(e) {
        return "graticule" in e;
      }
      var Wd;
      (function (e) {
        e[(e["Raw"] = 0)] = "Raw";
        e[(e["Main"] = 1)] = "Main";
        e[(e["Row"] = 2)] = "Row";
        e[(e["Column"] = 3)] = "Column";
        e[(e["Lookup"] = 4)] = "Lookup";
      })(Wd || (Wd = {}));
      var Ud = t(83082);
      var Hd =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      function Bd(e, n = true, t = r.yR) {
        if ((0, r.kJ)(e)) {
          const i = e.map((e) => Bd(e, n, t));
          return n ? `[${i.join(", ")}]` : i;
        } else if (Qr(e)) {
          if (n) {
            return t(as(e));
          } else {
            return t(ls(e));
          }
        }
        return n ? t(x(e)) : e;
      }
      function Jd(e, n) {
        var t;
        for (const i of M((t = e.component.selection) !== null && t !== void 0 ? t : {})) {
          const t = i.name;
          let s = `${t}${Fg}, ${i.resolve === "global" ? "true" : `{unit: ${Ag(e)}}`}`;
          for (const r of Ng) {
            if (!r.defined(i)) continue;
            if (r.signals) n = r.signals(e, i, n);
            if (r.modifyExpr) s = r.modifyExpr(e, i, s);
          }
          n.push({ name: t + zg, on: [{ events: { signal: i.name + Fg }, update: `modify(${(0, r.m8)(i.name + Pg)}, ${s})` }] });
        }
        return Zd(n);
      }
      function Gd(e, n) {
        if (e.component.selection && A(e.component.selection).length) {
          const t = (0, r.m8)(e.getName("cell"));
          n.unshift({
            name: "facet",
            value: {},
            on: [{ events: (0, Ud.r)("mousemove", "scope"), update: `isTuple(facet) ? facet : group(${t}).datum` }],
          });
        }
        return Zd(n);
      }
      function Xd(e, n) {
        var t;
        let i = false;
        for (const s of M((t = e.component.selection) !== null && t !== void 0 ? t : {})) {
          const t = s.name;
          const o = (0, r.m8)(t + Pg);
          const a = n.filter((e) => e.name === t);
          if (a.length === 0) {
            const e = s.resolve === "global" ? "union" : s.resolve;
            const t = s.type === "point" ? ", true, true)" : ")";
            n.push({ name: s.name, update: `${Eg}(${o}, ${(0, r.m8)(e)}${t}` });
          }
          i = true;
          for (const i of Ng) {
            if (i.defined(s) && i.topLevelSignals) {
              n = i.topLevelSignals(e, s, n);
            }
          }
        }
        if (i) {
          const e = n.filter((e) => e.name === "unit");
          if (e.length === 0) {
            n.unshift({ name: "unit", value: {}, on: [{ events: "mousemove", update: "isTuple(group()) ? group() : unit" }] });
          }
        }
        return Zd(n);
      }
      function Vd(e, n) {
        var t;
        const i = [...n];
        const r = Ag(e, { escape: false });
        for (const s of M((t = e.component.selection) !== null && t !== void 0 ? t : {})) {
          const e = { name: s.name + Pg };
          if (s.project.hasSelectionId) {
            e.transform = [{ type: "collect", sort: { field: Ou } }];
          }
          if (s.init) {
            const n = s.project.items.map((e) => {
              const { signals: n } = e,
                t = Hd(e, ["signals"]);
              return t;
            });
            e.values = s.project.hasSelectionId
              ? s.init.map((e) => ({ unit: r, [Ou]: Bd(e, false)[0] }))
              : s.init.map((e) => ({ unit: r, fields: n, values: Bd(e, false) }));
          }
          const n = i.filter((e) => e.name === s.name + Pg);
          if (!n.length) {
            i.push(e);
          }
        }
        return i;
      }
      function Kd(e, n) {
        var t;
        for (const i of M((t = e.component.selection) !== null && t !== void 0 ? t : {})) {
          for (const t of Ng) {
            if (t.defined(i) && t.marks) {
              n = t.marks(e, i, n);
            }
          }
        }
        return n;
      }
      function Yd(e, n) {
        for (const t of e.children) {
          if (Uy(t)) {
            n = Kd(t, n);
          }
        }
        return n;
      }
      function Qd(e, n, t, i) {
        const s = Jg(e, n.param, n);
        return { signal: ho(t.get("type")) && (0, r.kJ)(i) && i[0] > i[1] ? `isValid(${s}) && reverse(${s})` : s };
      }
      function Zd(e) {
        return e.map((e) => {
          if (e.on && !e.on.length) delete e.on;
          return e;
        });
      }
      class ep {
        constructor(e, n) {
          this.debugName = n;
          this._children = [];
          this._parent = null;
          if (e) {
            this.parent = e;
          }
        }
        clone() {
          throw new Error("Cannot clone node");
        }
        get parent() {
          return this._parent;
        }
        set parent(e) {
          this._parent = e;
          if (e) {
            e.addChild(this);
          }
        }
        get children() {
          return this._children;
        }
        numChildren() {
          return this._children.length;
        }
        addChild(e, n) {
          if (this._children.includes(e)) {
            Vr(Ei);
            return;
          }
          if (n !== undefined) {
            this._children.splice(n, 0, e);
          } else {
            this._children.push(e);
          }
        }
        removeChild(e) {
          const n = this._children.indexOf(e);
          this._children.splice(n, 1);
          return n;
        }
        remove() {
          let e = this._parent.removeChild(this);
          for (const n of this._children) {
            n._parent = this._parent;
            this._parent.addChild(n, e++);
          }
        }
        insertAsParentOf(e) {
          const n = e.parent;
          n.removeChild(this);
          this.parent = n;
          e.parent = this;
        }
        swapWithParent() {
          const e = this._parent;
          const n = e.parent;
          for (const i of this._children) {
            i.parent = e;
          }
          this._children = [];
          e.removeChild(this);
          const t = e.parent.removeChild(e);
          this._parent = n;
          n.addChild(this, t);
          e.parent = this;
        }
      }
      class np extends ep {
        clone() {
          const e = new this.constructor();
          e.debugName = `clone_${this.debugName}`;
          e._source = this._source;
          e._name = `clone_${this._name}`;
          e.type = this.type;
          e.refCounts = this.refCounts;
          e.refCounts[e._name] = 0;
          return e;
        }
        constructor(e, n, t, i) {
          super(e, n);
          this.type = t;
          this.refCounts = i;
          this._source = this._name = n;
          if (this.refCounts && !(this._name in this.refCounts)) {
            this.refCounts[this._name] = 0;
          }
        }
        dependentFields() {
          return new Set();
        }
        producedFields() {
          return new Set();
        }
        hash() {
          if (this._hash === undefined) {
            this._hash = `Output ${Z()}`;
          }
          return this._hash;
        }
        getSource() {
          this.refCounts[this._name]++;
          return this._source;
        }
        isRequired() {
          return !!this.refCounts[this._name];
        }
        setSource(e) {
          this._source = e;
        }
      }
      var tp =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      class ip extends ep {
        clone() {
          return new ip(null, b(this.formula));
        }
        constructor(e, n) {
          super(e);
          this.formula = n;
        }
        static makeFromEncoding(e, n) {
          const t = n.reduceFieldDef((e, n) => {
            const { field: t, timeUnit: i } = n;
            if (i) {
              const r = Sc(n, { forAs: true });
              e[j({ as: r, field: t, timeUnit: i })] = { as: r, field: t, timeUnit: i };
            }
            return e;
          }, {});
          if (T(t)) {
            return null;
          }
          return new ip(e, t);
        }
        static makeFromTransform(e, n) {
          const t = Object.assign({}, n),
            { timeUnit: i } = t,
            r = tp(t, ["timeUnit"]);
          const s = ks(i);
          const o = Object.assign(Object.assign({}, r), { timeUnit: s });
          return new ip(e, { [j(o)]: o });
        }
        merge(e) {
          this.formula = Object.assign({}, this.formula);
          for (const n in e.formula) {
            if (!this.formula[n]) {
              this.formula[n] = e.formula[n];
            }
          }
          for (const n of e.children) {
            e.removeChild(n);
            n.parent = this;
          }
          e.remove();
        }
        removeFormulas(e) {
          const n = {};
          for (const [t, i] of L(this.formula)) {
            if (!e.has(i.as)) {
              n[t] = i;
            }
          }
          this.formula = n;
        }
        producedFields() {
          return new Set(M(this.formula).map((e) => e.as));
        }
        dependentFields() {
          return new Set(M(this.formula).map((e) => e.field));
        }
        hash() {
          return `TimeUnit ${j(this.formula)}`;
        }
        assemble() {
          const e = [];
          for (const n of M(this.formula)) {
            const { field: t, as: i, timeUnit: r } = n;
            const s = ks(r),
              { unit: o, utc: a } = s,
              c = tp(s, ["unit", "utc"]);
            e.push(
              Object.assign(
                Object.assign(
                  Object.assign(Object.assign({ field: G(t), type: "timeunit" }, o ? { units: Os(o) } : {}), a ? { timezone: "utc" } : {}),
                  c
                ),
                { as: [i, `${i}_end`] }
              )
            );
          }
          return e;
        }
      }
      var rp =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      const sp = "_tuple_fields";
      class op {
        constructor(...e) {
          this.items = e;
          this.hasChannel = {};
          this.hasField = {};
          this.hasSelectionId = false;
        }
      }
      const ap = {
        defined: () => true,
        parse: (e, n, t) => {
          var i;
          const s = n.name;
          const o = (i = n.project) !== null && i !== void 0 ? i : (n.project = new op());
          const a = {};
          const c = {};
          const l = new Set();
          const u = (e, n) => {
            const t = n === "visual" ? e.channel : e.field;
            let i = I(`${s}_${t}`);
            for (let r = 1; l.has(i); r++) {
              i = I(`${s}_${t}_${r}`);
            }
            l.add(i);
            return { [n]: i };
          };
          const f = n.type;
          const d = e.config.selection[f];
          const p = t.value !== undefined ? (0, r.IX)(t.value) : null;
          let { fields: g, encodings: m } = (0, r.Kn)(t.select) ? t.select : {};
          if (!g && !m && p) {
            for (const e of p) {
              if (!(0, r.Kn)(e)) {
                continue;
              }
              for (const n of A(e)) {
                if (dn(n)) {
                  (m || (m = [])).push(n);
                } else {
                  if (f === "interval") {
                    Vr(Di);
                    m = d.encodings;
                  } else {
                    (g || (g = [])).push(n);
                  }
                }
              }
            }
          }
          if (!g && !m) {
            m = d.encodings;
            if ("fields" in d) {
              g = d.fields;
            }
          }
          for (const r of m !== null && m !== void 0 ? m : []) {
            const n = e.fieldDef(r);
            if (n) {
              let t = n.field;
              if (n.aggregate) {
                Vr(yi(r, n.aggregate));
                continue;
              } else if (!t) {
                Vr(bi(r));
                continue;
              }
              if (n.timeUnit) {
                t = e.vgField(r);
                const i = { timeUnit: n.timeUnit, as: t, field: n.field };
                c[j(i)] = i;
              }
              if (!a[t]) {
                let i = "E";
                if (f === "interval") {
                  const n = e.getScaleComponent(r).get("type");
                  if (ho(n)) {
                    i = "R";
                  }
                } else if (n.bin) {
                  i = "R-RE";
                }
                const s = { field: t, channel: r, type: i };
                s.signals = Object.assign(Object.assign({}, u(s, "data")), u(s, "visual"));
                o.items.push((a[t] = s));
                o.hasField[t] = o.hasChannel[r] = a[t];
                o.hasSelectionId = o.hasSelectionId || t === Ou;
              }
            } else {
              Vr(bi(r));
            }
          }
          for (const r of g !== null && g !== void 0 ? g : []) {
            if (o.hasField[r]) continue;
            const e = { type: "E", field: r };
            e.signals = Object.assign({}, u(e, "data"));
            o.items.push(e);
            o.hasField[r] = e;
            o.hasSelectionId = o.hasSelectionId || r === Ou;
          }
          if (p) {
            n.init = p.map((e) => o.items.map((n) => ((0, r.Kn)(e) ? (e[n.channel] !== undefined ? e[n.channel] : e[n.field]) : e)));
          }
          if (!T(c)) {
            o.timeUnit = new ip(null, c);
          }
        },
        signals: (e, n, t) => {
          const i = n.name + sp;
          const r = t.filter((e) => e.name === i);
          return r.length > 0 || n.project.hasSelectionId
            ? t
            : t.concat({
                name: i,
                value: n.project.items.map((e) => {
                  const { signals: n, hasLegend: t } = e,
                    i = rp(e, ["signals", "hasLegend"]);
                  i.field = G(i.field);
                  return i;
                }),
              });
        },
      };
      const cp = ap;
      const lp = {
        defined: (e) => e.type === "interval" && e.resolve === "global" && e.bind && e.bind === "scales",
        parse: (e, n) => {
          const t = (n.scales = []);
          for (const i of n.project.items) {
            const r = i.channel;
            if (!lt(r)) {
              continue;
            }
            const s = e.getScaleComponent(r);
            const o = s ? s.get("type") : undefined;
            if (!s || !ho(o)) {
              Vr(ji);
              continue;
            }
            s.set("selectionExtent", { param: n.name, field: i.field }, true);
            t.push(i);
          }
        },
        topLevelSignals: (e, n, t) => {
          const i = n.scales.filter((e) => t.filter((n) => n.name === e.signals.data).length === 0);
          if (!e.parent || dp(e) || i.length === 0) {
            return t;
          }
          const s = t.filter((e) => e.name === n.name)[0];
          let o = s.update;
          if (o.indexOf(Eg) >= 0) {
            s.update = `{${i.map((e) => `${(0, r.m8)(G(e.field))}: ${e.signals.data}`).join(", ")}}`;
          } else {
            for (const e of i) {
              const n = `${(0, r.m8)(G(e.field))}: ${e.signals.data}`;
              if (!o.includes(n)) {
                o = `${o.substring(0, o.length - 1)}, ${n}}`;
              }
            }
            s.update = o;
          }
          return t.concat(i.map((e) => ({ name: e.signals.data })));
        },
        signals: (e, n, t) => {
          if (e.parent && !dp(e)) {
            for (const e of n.scales) {
              const n = t.filter((n) => n.name === e.signals.data)[0];
              n.push = "outer";
              delete n.value;
              delete n.update;
            }
          }
          return t;
        },
      };
      const up = lp;
      function fp(e, n) {
        const t = (0, r.m8)(e.scaleName(n));
        return `domain(${t})`;
      }
      function dp(e) {
        var n;
        return e.parent && Jy(e.parent) && ((n = !e.parent.parent) !== null && n !== void 0 ? n : dp(e.parent.parent));
      }
      var pp =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      const gp = "_brush";
      const mp = "_scale_trigger";
      const hp = {
        defined: (e) => e.type === "interval",
        signals: (e, n, t) => {
          const i = n.name;
          const s = i + sp;
          const o = up.defined(n);
          const a = n.init ? n.init[0] : null;
          const c = [];
          const l = [];
          if (n.translate && !o) {
            const e = `!event.item || event.item.mark.name !== ${(0, r.m8)(i + gp)}`;
            vp(n, (n, t) => {
              var i;
              var s;
              const o = (0, r.IX)((i = (s = t.between[0]).filter) !== null && i !== void 0 ? i : (s.filter = []));
              if (!o.includes(e)) {
                o.push(e);
              }
              return n;
            });
          }
          n.project.items.forEach((i, s) => {
            const o = i.channel;
            if (o !== le && o !== ue) {
              Vr("Interval selections only support x and y encoding channels.");
              return;
            }
            const u = a ? a[s] : null;
            const f = yp(e, n, i, u);
            const d = i.signals.data;
            const p = i.signals.visual;
            const g = (0, r.m8)(e.scaleName(o));
            const m = e.getScaleComponent(o).get("type");
            const h = ho(m) ? "+" : "";
            t.push(...f);
            c.push(d);
            l.push({
              scaleName: e.scaleName(o),
              expr: `(!isArray(${d}) || ` + `(${h}invert(${g}, ${p})[0] === ${h}${d}[0] && ` + `${h}invert(${g}, ${p})[1] === ${h}${d}[1]))`,
            });
          });
          if (!o && l.length) {
            t.push({
              name: i + mp,
              value: {},
              on: [{ events: l.map((e) => ({ scale: e.scaleName })), update: `${l.map((e) => e.expr).join(" && ")} ? ${i + mp} : {}` }],
            });
          }
          const u = `unit: ${Ag(e)}, fields: ${s}, values`;
          return t.concat(
            Object.assign(
              Object.assign({ name: i + Fg }, a ? { init: `{${u}: ${Bd(a)}}` } : {}),
              c.length ? { on: [{ events: [{ signal: c.join(" || ") }], update: `${c.join(" && ")} ? {${u}: [${c}]} : null` }] } : {}
            )
          );
        },
        marks: (e, n, t) => {
          const i = n.name;
          const { x: s, y: o } = n.project.hasChannel;
          const a = s === null || s === void 0 ? void 0 : s.signals.visual;
          const c = o === null || o === void 0 ? void 0 : o.signals.visual;
          const l = `data(${(0, r.m8)(n.name + Pg)})`;
          if (up.defined(n) || (!s && !o)) {
            return t;
          }
          const u = {
            x: s !== undefined ? { signal: `${a}[0]` } : { value: 0 },
            y: o !== undefined ? { signal: `${c}[0]` } : { value: 0 },
            x2: s !== undefined ? { signal: `${a}[1]` } : { field: { group: "width" } },
            y2: o !== undefined ? { signal: `${c}[1]` } : { field: { group: "height" } },
          };
          if (n.resolve === "global") {
            for (const n of A(u)) {
              u[n] = [Object.assign({ test: `${l}.length && ${l}[0].unit === ${Ag(e)}` }, u[n]), { value: 0 }];
            }
          }
          const f = n.mark,
            { fill: d, fillOpacity: p, cursor: g } = f,
            m = pp(f, ["fill", "fillOpacity", "cursor"]);
          const h = A(m).reduce((e, n) => {
            e[n] = [
              {
                test: [s !== undefined && `${a}[0] !== ${a}[1]`, o !== undefined && `${c}[0] !== ${c}[1]`].filter((e) => e).join(" && "),
                value: m[n],
              },
              { value: null },
            ];
            return e;
          }, {});
          return [
            { name: `${i + gp}_bg`, type: "rect", clip: true, encode: { enter: { fill: { value: d }, fillOpacity: { value: p } }, update: u } },
            ...t,
            {
              name: i + gp,
              type: "rect",
              clip: true,
              encode: {
                enter: Object.assign(Object.assign({}, g ? { cursor: { value: g } } : {}), { fill: { value: "transparent" } }),
                update: Object.assign(Object.assign({}, u), h),
              },
            },
          ];
        },
      };
      const bp = hp;
      function yp(e, n, t, i) {
        const s = t.channel;
        const o = t.signals.visual;
        const a = t.signals.data;
        const c = up.defined(n);
        const l = (0, r.m8)(e.scaleName(s));
        const u = e.getScaleComponent(s);
        const f = u ? u.get("type") : undefined;
        const d = (e) => `scale(${l}, ${e})`;
        const p = e.getSizeSignalRef(s === le ? "width" : "height").signal;
        const g = `${s}(unit)`;
        const m = vp(n, (e, n) => [...e, { events: n.between[0], update: `[${g}, ${g}]` }, { events: n, update: `[${o}[0], clamp(${g}, 0, ${p})]` }]);
        m.push({ events: { signal: n.name + mp }, update: ho(f) ? `[${d(`${a}[0]`)}, ${d(`${a}[1]`)}]` : `[0, 0]` });
        return c
          ? [{ name: a, on: [] }]
          : [
              Object.assign(Object.assign({ name: o }, i ? { init: Bd(i, true, d) } : { value: [] }), { on: m }),
              Object.assign(Object.assign({ name: a }, i ? { init: Bd(i) } : {}), {
                on: [{ events: { signal: o }, update: `${o}[0] === ${o}[1] ? null : invert(${l}, ${o})` }],
              }),
            ];
      }
      function vp(e, n) {
        return e.events.reduce((e, t) => {
          if (!t.between) {
            Vr(`${t} is not an ordered event stream for interval selections.`);
            return e;
          }
          return n(e, t);
        }, []);
      }
      const Op = {
        defined: (e) => e.type === "point",
        signals: (e, n, t) => {
          var i;
          const s = n.name;
          const o = s + sp;
          const a = n.project;
          const c = "(item().isVoronoi ? datum.datum : datum)";
          const l = M((i = e.component.selection) !== null && i !== void 0 ? i : {})
            .reduce((e, n) => (n.type === "interval" ? e.concat(n.name + gp) : e), [])
            .map((e) => `indexof(item().mark.name, '${e}') < 0`)
            .join(" && ");
          const u = `datum && item().mark.marktype !== 'group' && indexof(item().mark.role, 'legend') < 0${l ? ` && ${l}` : ""}`;
          let f = `unit: ${Ag(e)}, `;
          if (n.project.hasSelectionId) {
            f += `${Ou}: ${c}[${(0, r.m8)(Ou)}]`;
          } else {
            const n = a.items
              .map((n) => {
                const t = e.fieldDef(n.channel);
                return (t === null || t === void 0 ? void 0 : t.bin)
                  ? `[${c}[${(0, r.m8)(e.vgField(n.channel, {}))}], ` + `${c}[${(0, r.m8)(e.vgField(n.channel, { binSuffix: "end" }))}]]`
                  : `${c}[${(0, r.m8)(n.field)}]`;
              })
              .join(", ");
            f += `fields: ${o}, values: [${n}]`;
          }
          const d = n.events;
          return t.concat([{ name: s + Fg, on: d ? [{ events: d, update: `${u} ? {${f}} : null`, force: true }] : [] }]);
        },
      };
      const xp = Op;
      function jp(e, n, t, i) {
        const s = ac(n) && n.condition;
        const o = i(n);
        if (s) {
          const n = (0, r.IX)(s);
          const a = n.map((n) => {
            const t = i(n);
            if (ec(n)) {
              const { param: i, empty: r } = n;
              const s = Bg(e, { param: i, empty: r });
              return Object.assign({ test: s }, t);
            } else {
              const i = Xg(e, n.test);
              return Object.assign({ test: i }, t);
            }
          });
          return { [t]: [...a, ...(o !== undefined ? [o] : [])] };
        } else {
          return o !== undefined ? { [t]: o } : {};
        }
      }
      function wp(e, n = "text") {
        const t = e.encoding[n];
        return jp(e, t, n, (n) => $p(n, e.config));
      }
      function $p(e, n, t = "datum") {
        if (e) {
          if (vc(e)) {
            return Yt(e.value);
          }
          if (bc(e)) {
            const { format: i, formatType: r } = qc(e);
            return Ea({ fieldOrDatumDef: e, format: i, formatType: r, expr: t, config: n });
          }
        }
        return undefined;
      }
      function kp(e, n = {}) {
        const { encoding: t, markDef: i, config: s, stack: o } = e;
        const a = t.tooltip;
        if ((0, r.kJ)(a)) {
          return { tooltip: Dp({ tooltip: a }, o, s, n) };
        } else {
          const c = n.reactiveGeom ? "datum.datum" : "datum";
          return jp(e, a, "tooltip", (e) => {
            const a = $p(e, s, c);
            if (a) {
              return a;
            }
            if (e === null) {
              return undefined;
            }
            let l = ii("tooltip", i, s);
            if (l === true) {
              l = { content: "encoding" };
            }
            if ((0, r.HD)(l)) {
              return { value: l };
            } else if ((0, r.Kn)(l)) {
              if (Mt(l)) {
                return l;
              } else if (l.content === "encoding") {
                return Dp(t, o, s, n);
              } else {
                return { signal: c };
              }
            }
            return undefined;
          });
        }
      }
      function Sp(e, n, t, { reactiveGeom: i } = {}) {
        const s = {};
        const o = i ? "datum.datum" : "datum";
        const a = [];
        function c(i, c) {
          const l = hn(c);
          const u = yc(i) ? i : Object.assign(Object.assign({}, i), { type: e[l].type });
          const f = u.title || Lc(u, t);
          const d = (0, r.IX)(f).join(", ");
          let p;
          if (Wn(c)) {
            const n = c === "x" ? "x2" : "y2";
            const i = Rc(e[n]);
            if (_t(u.bin) && i) {
              const e = Sc(u, { expr: o });
              const r = Sc(i, { expr: o });
              const { format: a, formatType: c } = qc(u);
              p = Wa(e, r, a, c, t);
              s[n] = true;
            }
          }
          if ((Wn(c) || c === be || c === me) && n && n.fieldChannel === c && n.offset === "normalize") {
            const { format: e, formatType: n } = qc(u);
            p = Ea({ fieldOrDatumDef: u, format: e, formatType: n, expr: o, config: t, normalizeStack: true }).signal;
          }
          p !== null && p !== void 0 ? p : (p = $p(u, t, o).signal);
          a.push({ channel: c, key: d, value: p });
        }
        wl(e, (e, n) => {
          if (fc(e)) {
            c(e, n);
          } else if (cc(e)) {
            c(e.condition, n);
          }
        });
        const l = {};
        for (const { channel: r, key: u, value: f } of a) {
          if (!s[r] && !l[u]) {
            l[u] = f;
          }
        }
        return l;
      }
      function Dp(e, n, t, { reactiveGeom: i } = {}) {
        const r = Sp(e, n, t, { reactiveGeom: i });
        const s = L(r).map(([e, n]) => `"${e}": ${n}`);
        return s.length > 0 ? { signal: `{${s.join(", ")}}` } : undefined;
      }
      function _p(e) {
        const { markDef: n, config: t } = e;
        const i = ii("aria", n, t);
        if (i === false) {
          return {};
        }
        return Object.assign(Object.assign(Object.assign({}, i ? { aria: i } : {}), Pp(e)), Fp(e));
      }
      function Pp(e) {
        const { mark: n, markDef: t, config: i } = e;
        if (i.aria === false) {
          return {};
        }
        const r = ii("ariaRoleDescription", t, i);
        if (r != null) {
          return { ariaRoleDescription: { value: r } };
        }
        return n in Ht ? {} : { ariaRoleDescription: { value: n } };
      }
      function Fp(e) {
        const { encoding: n, markDef: t, config: i, stack: r } = e;
        const s = n.description;
        if (s) {
          return jp(e, s, "description", (n) => $p(n, e.config));
        }
        const o = ii("description", t, i);
        if (o != null) {
          return { description: Yt(o) };
        }
        if (i.aria === false) {
          return {};
        }
        const a = Sp(n, r, i);
        if (T(a)) {
          return undefined;
        }
        return {
          description: {
            signal: L(a)
              .map(([e, n], t) => `"${t > 0 ? "; " : ""}${e}: " + (${n})`)
              .join(" + "),
          },
        };
      }
      function zp(e, n, t = {}) {
        const { markDef: i, encoding: r, config: s } = n;
        const { vgChannel: o } = t;
        let { defaultRef: a, defaultValue: c } = t;
        if (a === undefined) {
          c !== null && c !== void 0 ? c : (c = ii(e, i, s, { vgChannel: o, ignoreVgConfig: true }));
          if (c !== undefined) {
            a = Yt(c);
          }
        }
        const l = r[e];
        return jp(n, l, o !== null && o !== void 0 ? o : e, (t) =>
          _a({
            channel: e,
            channelDef: t,
            markDef: i,
            config: s,
            scaleName: n.scaleName(e),
            scale: n.getScaleComponent(e),
            stack: null,
            defaultRef: a,
          })
        );
      }
      function Cp(e, n = { filled: undefined }) {
        var t, i, r, s;
        const { markDef: o, encoding: a, config: c } = e;
        const { type: l } = o;
        const u = (t = n.filled) !== null && t !== void 0 ? t : ii("filled", o, c);
        const f = $(["bar", "point", "circle", "square", "geoshape"], l) ? "transparent" : undefined;
        const d =
          (r =
            (i = ii(u === true ? "color" : undefined, o, c, { vgChannel: "fill" })) !== null && i !== void 0 ? i : c.mark[u === true && "color"]) !==
            null && r !== void 0
            ? r
            : f;
        const p =
          (s = ii(u === false ? "color" : undefined, o, c, { vgChannel: "stroke" })) !== null && s !== void 0 ? s : c.mark[u === false && "color"];
        const g = u ? "fill" : "stroke";
        const m = Object.assign(Object.assign({}, d ? { fill: Yt(d) } : {}), p ? { stroke: Yt(p) } : {});
        if (o.color && (u ? o.fill : o.stroke)) {
          Vr(Ji("property", { fill: "fill" in o, stroke: "stroke" in o }));
        }
        return Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, m), zp("color", e, { vgChannel: g, defaultValue: u ? d : p })),
            zp("fill", e, { defaultValue: a.fill ? d : undefined })
          ),
          zp("stroke", e, { defaultValue: a.stroke ? p : undefined })
        );
      }
      function Ep(e) {
        const { encoding: n, mark: t } = e;
        const i = n.order;
        if (!ea(t) && vc(i)) {
          return jp(e, i, "zindex", (e) => Yt(e.value));
        }
        return {};
      }
      function Np({ channel: e, markDef: n, encoding: t = {}, model: i, bandPosition: r }) {
        const s = `${e}Offset`;
        const o = n[s];
        const a = t[s];
        if ((s === "xOffset" || s === "yOffset") && a) {
          const e = _a({
            channel: s,
            channelDef: a,
            markDef: n,
            config: i === null || i === void 0 ? void 0 : i.config,
            scaleName: i.scaleName(s),
            scale: i.getScaleComponent(s),
            stack: null,
            defaultRef: Yt(o),
            bandPosition: r,
          });
          return { offsetType: "encoding", offset: e };
        }
        const c = n[s];
        if (c) {
          return { offsetType: "visual", offset: c };
        }
        return {};
      }
      function Tp(e, n, { defaultPos: t, vgChannel: i }) {
        const { encoding: r, markDef: s, config: o, stack: a } = n;
        const c = r[e];
        const l = r[yn(e)];
        const u = n.scaleName(e);
        const f = n.getScaleComponent(e);
        const { offset: d, offsetType: p } = Np({ channel: e, markDef: s, encoding: r, model: n, bandPosition: 0.5 });
        const g = Mp({ model: n, defaultPos: t, channel: e, scaleName: u, scale: f });
        const m =
          !c && Wn(e) && (r.latitude || r.longitude)
            ? { field: n.getName(e) }
            : Ap({
                channel: e,
                channelDef: c,
                channel2Def: l,
                markDef: s,
                config: o,
                scaleName: u,
                scale: f,
                stack: a,
                offset: d,
                defaultRef: g,
                bandPosition: p === "encoding" ? 0 : undefined,
              });
        return m ? { [i || e]: m } : undefined;
      }
      function Ap(e) {
        const { channel: n, channelDef: t, scaleName: i, stack: r, offset: s, markDef: o } = e;
        if (bc(t) && r && n === r.fieldChannel) {
          if (fc(t)) {
            let e = t.bandPosition;
            if (e === undefined && o.type === "text" && (n === "radius" || n === "theta")) {
              e = 0.5;
            }
            if (e !== undefined) {
              return Da({ scaleName: i, fieldOrDatumDef: t, startSuffix: "start", bandPosition: e, offset: s });
            }
          }
          return Sa(t, i, { suffix: "end" }, { offset: s });
        }
        return xa(e);
      }
      function Mp({ model: e, defaultPos: n, channel: t, scaleName: i, scale: r }) {
        const { markDef: s, config: o } = e;
        return () => {
          const a = hn(t);
          const c = bn(t);
          const l = ii(t, s, o, { vgChannel: c });
          if (l !== undefined) {
            return Pa(t, l);
          }
          switch (n) {
            case "zeroOrMin":
            case "zeroOrMax":
              if (i) {
                const e = r.get("type");
                if ($([no.LOG, no.TIME, no.UTC], e)) {
                } else {
                  if (r.domainDefinitelyIncludesZero()) {
                    return { scale: i, value: 0 };
                  }
                }
              }
              if (n === "zeroOrMin") {
                return a === "y" ? { field: { group: "height" } } : { value: 0 };
              } else {
                switch (a) {
                  case "radius":
                    return { signal: `min(${e.width.signal},${e.height.signal})/2` };
                  case "theta":
                    return { signal: "2*PI" };
                  case "x":
                    return { field: { group: "width" } };
                  case "y":
                    return { value: 0 };
                }
              }
              break;
            case "mid": {
              const n = e[vn(t)];
              return Object.assign(Object.assign({}, n), { mult: 0.5 });
            }
          }
          return undefined;
        };
      }
      const Lp = { left: "x", center: "xc", right: "x2" };
      const qp = { top: "y", middle: "yc", bottom: "y2" };
      function Ip(e, n, t, i = "middle") {
        if (e === "radius" || e === "theta") {
          return bn(e);
        }
        const r = e === "x" ? "align" : "baseline";
        const s = ii(r, n, t);
        let o;
        if (Mt(s)) {
          Vr(ir(r));
          o = undefined;
        } else {
          o = s;
        }
        if (e === "x") {
          return Lp[o || (i === "top" ? "left" : "center")];
        } else {
          return qp[o || i];
        }
      }
      function Rp(e, n, { defaultPos: t, defaultPos2: i, range: r }) {
        if (r) {
          return Wp(e, n, { defaultPos: t, defaultPos2: i });
        }
        return Tp(e, n, { defaultPos: t });
      }
      function Wp(e, n, { defaultPos: t, defaultPos2: i }) {
        const { markDef: r, config: s } = n;
        const o = yn(e);
        const a = vn(e);
        const c = Up(n, i, o);
        const l = c[a] ? Ip(e, r, s) : bn(e);
        return Object.assign(Object.assign({}, Tp(e, n, { defaultPos: t, vgChannel: l })), c);
      }
      function Up(e, n, t) {
        const { encoding: i, mark: r, markDef: s, stack: o, config: a } = e;
        const c = hn(t);
        const l = vn(t);
        const u = bn(t);
        const f = i[c];
        const d = e.scaleName(c);
        const p = e.getScaleComponent(c);
        const { offset: g } =
          t in i || t in s ? Np({ channel: t, markDef: s, encoding: i, model: e }) : Np({ channel: c, markDef: s, encoding: i, model: e });
        if (!f && (t === "x2" || t === "y2") && (i.latitude || i.longitude)) {
          const n = vn(t);
          const i = e.markDef[n];
          if (i != null) {
            return { [n]: { value: i } };
          } else {
            return { [u]: { field: e.getName(t) } };
          }
        }
        const m = Hp({
          channel: t,
          channelDef: f,
          channel2Def: i[t],
          markDef: s,
          config: a,
          scaleName: d,
          scale: p,
          stack: o,
          offset: g,
          defaultRef: undefined,
        });
        if (m !== undefined) {
          return { [u]: m };
        }
        return (
          Bp(t, s) ||
          Bp(t, { [t]: si(t, s, a.style), [l]: si(l, s, a.style) }) ||
          Bp(t, a[r]) ||
          Bp(t, a.mark) || { [u]: Mp({ model: e, defaultPos: n, channel: t, scaleName: d, scale: p })() }
        );
      }
      function Hp({ channel: e, channelDef: n, channel2Def: t, markDef: i, config: r, scaleName: s, scale: o, stack: a, offset: c, defaultRef: l }) {
        if (bc(n) && a && e.charAt(0) === a.fieldChannel.charAt(0)) {
          return Sa(n, s, { suffix: "start" }, { offset: c });
        }
        return xa({ channel: e, channelDef: t, scaleName: s, scale: o, stack: a, markDef: i, config: r, offset: c, defaultRef: l });
      }
      function Bp(e, n) {
        const t = vn(e);
        const i = bn(e);
        if (n[i] !== undefined) {
          return { [i]: Pa(e, n[i]) };
        } else if (n[e] !== undefined) {
          return { [i]: Pa(e, n[e]) };
        } else if (n[t]) {
          const i = n[t];
          if (ga(i)) {
            Vr(Gi(t));
          } else {
            return { [t]: Pa(e, i) };
          }
        }
        return undefined;
      }
      function Jp(e, n) {
        var t, i;
        const { config: r, encoding: s, markDef: o } = e;
        const a = o.type;
        const c = yn(n);
        const l = vn(n);
        const u = s[n];
        const f = s[c];
        const d = e.getScaleComponent(n);
        const p = d ? d.get("type") : undefined;
        const g = o.orient;
        const m = (i = (t = s[l]) !== null && t !== void 0 ? t : s.size) !== null && i !== void 0 ? i : ii("size", o, r, { vgChannel: l });
        const h = a === "bar" && (n === "x" ? g === "vertical" : g === "horizontal");
        if (fc(u) && (Dt(u.bin) || _t(u.bin) || (u.timeUnit && !f)) && !(m && !ga(m)) && !mo(p)) {
          return Kp({ fieldDef: u, fieldDef2: f, channel: n, model: e });
        } else if (((bc(u) && mo(p)) || h) && !f) {
          return Xp(u, n, e);
        } else {
          return Wp(n, e, { defaultPos: "zeroOrMax", defaultPos2: "zeroOrMin" });
        }
      }
      function Gp(e, n, t, i, s) {
        if (ga(s)) {
          if (t) {
            const e = t.get("type");
            if (e === "band") {
              let e = `bandwidth('${n}')`;
              if (s.band !== 1) {
                e = `${s.band} * ${e}`;
              }
              return { signal: `max(0.25, ${e})` };
            } else if (s.band !== 1) {
              Vr(cr(e));
              s = undefined;
            }
          } else {
            return { mult: s.band, field: { group: e } };
          }
        } else if (Mt(s)) {
          return s;
        } else if (s) {
          return { value: s };
        }
        if (t) {
          const e = t.get("range");
          if (Lt(e) && (0, r.hj)(e.step)) {
            return { value: e.step - 2 };
          }
        }
        const o = Iu(i.view, e);
        return { value: o - 2 };
      }
      function Xp(e, n, t) {
        const { markDef: i, encoding: s, config: o, stack: a } = t;
        const c = i.orient;
        const l = t.scaleName(n);
        const u = t.getScaleComponent(n);
        const f = vn(n);
        const d = yn(n);
        const p = On(n);
        const g = t.scaleName(p);
        const m = (c === "horizontal" && n === "y") || (c === "vertical" && n === "x");
        let h;
        if (s.size || i.size) {
          if (m) {
            h = zp("size", t, { vgChannel: f, defaultRef: Yt(i.size) });
          } else {
            Vr(dr(i.type));
          }
        }
        const b = !!h;
        const y = sc({
          channel: n,
          fieldDef: e,
          markDef: i,
          config: o,
          scaleType: u === null || u === void 0 ? void 0 : u.get("type"),
          useVlSizeChannel: m,
        });
        h = h || { [f]: Gp(f, g || l, u, o, y) };
        const v = (u === null || u === void 0 ? void 0 : u.get("type")) === "band" && ga(y) && !b ? "top" : "middle";
        const O = Ip(n, i, o, v);
        const x = O === "xc" || O === "yc";
        const { offset: j, offsetType: w } = Np({ channel: n, markDef: i, encoding: s, model: t, bandPosition: x ? 0.5 : 0 });
        const $ = xa({
          channel: n,
          channelDef: e,
          markDef: i,
          config: o,
          scaleName: l,
          scale: u,
          stack: a,
          offset: j,
          defaultRef: Mp({ model: t, defaultPos: "mid", channel: n, scaleName: l, scale: u }),
          bandPosition: x ? (w === "encoding" ? 0 : 0.5) : Mt(y) ? { signal: `(1-${y})/2` } : ga(y) ? (1 - y.band) / 2 : 0,
        });
        if (f) {
          return Object.assign({ [O]: $ }, h);
        } else {
          const e = bn(d);
          const n = h[f];
          const t = j ? Object.assign(Object.assign({}, n), { offset: j }) : n;
          return {
            [O]: $,
            [e]: (0, r.kJ)($) ? [$[0], Object.assign(Object.assign({}, $[1]), { offset: t })] : Object.assign(Object.assign({}, $), { offset: t }),
          };
        }
      }
      function Vp(e, n, t, i, r) {
        if (He(e)) {
          return 0;
        }
        const s = e === "x" || e === "y2" ? -n / 2 : n / 2;
        if (Mt(t) || Mt(r) || Mt(i)) {
          const e = ei(t);
          const n = ei(r);
          const o = ei(i);
          const a = o ? `${o} + ` : "";
          const c = e ? `(${e} ? -1 : 1) * ` : "";
          const l = n ? `(${n} + ${s})` : s;
          return { signal: a + c + l };
        } else {
          r = r || 0;
          return i + (t ? -r - s : +r + s);
        }
      }
      function Kp({ fieldDef: e, fieldDef2: n, channel: t, model: i }) {
        var r, s, o;
        const { config: a, markDef: c, encoding: l } = i;
        const u = i.getScaleComponent(t);
        const f = i.scaleName(t);
        const d = u ? u.get("type") : undefined;
        const p = u.get("reverse");
        const g = sc({ channel: t, fieldDef: e, markDef: c, config: a, scaleType: d });
        const m = (r = i.component.axes[t]) === null || r === void 0 ? void 0 : r[0];
        const h = (s = m === null || m === void 0 ? void 0 : m.get("translate")) !== null && s !== void 0 ? s : 0.5;
        const b = Wn(t) ? ((o = ii("binSpacing", c, a)) !== null && o !== void 0 ? o : 0) : 0;
        const y = yn(t);
        const v = bn(t);
        const O = bn(y);
        const { offset: x } = Np({ channel: t, markDef: c, encoding: l, model: i, bandPosition: 0 });
        const j = Mt(g) ? { signal: `(1-${g.signal})/2` } : ga(g) ? (1 - g.band) / 2 : 0.5;
        if (Dt(e.bin) || e.timeUnit) {
          return {
            [O]: Yp({ fieldDef: e, scaleName: f, bandPosition: j, offset: Vp(y, b, p, h, x) }),
            [v]: Yp({ fieldDef: e, scaleName: f, bandPosition: Mt(j) ? { signal: `1-${j.signal}` } : 1 - j, offset: Vp(t, b, p, h, x) }),
          };
        } else if (_t(e.bin)) {
          const i = Sa(e, f, {}, { offset: Vp(y, b, p, h, x) });
          if (fc(n)) {
            return { [O]: i, [v]: Sa(n, f, {}, { offset: Vp(t, b, p, h, x) }) };
          } else if (Pt(e.bin) && e.bin.step) {
            return { [O]: i, [v]: { signal: `scale("${f}", ${Sc(e, { expr: "datum" })} + ${e.bin.step})`, offset: Vp(t, b, p, h, x) } };
          }
        }
        Vr(Ar(y));
        return undefined;
      }
      function Yp({ fieldDef: e, scaleName: n, bandPosition: t, offset: i }) {
        return Da({ scaleName: n, fieldOrDatumDef: e, bandPosition: t, offset: i });
      }
      const Qp = new Set(["aria", "width", "height"]);
      function Zp(e, n) {
        const { fill: t = undefined, stroke: i = undefined } = n.color === "include" ? Cp(e) : {};
        return Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(Object.assign(Object.assign({}, ng(e.markDef, n)), eg(e, "fill", t)), eg(e, "stroke", i)),
                          zp("opacity", e)
                        ),
                        zp("fillOpacity", e)
                      ),
                      zp("strokeOpacity", e)
                    ),
                    zp("strokeWidth", e)
                  ),
                  zp("strokeDash", e)
                ),
                Ep(e)
              ),
              kp(e)
            ),
            wp(e, "href")
          ),
          _p(e)
        );
      }
      function eg(e, n, t) {
        const { config: i, mark: s, markDef: o } = e;
        const a = ii("invalid", o, i);
        if (a === "hide" && t && !ea(s)) {
          const i = tg(e, { invalid: true, channels: ct });
          if (i) {
            return { [n]: [{ test: i, value: null }, ...(0, r.IX)(t)] };
          }
        }
        return t ? { [n]: t } : {};
      }
      function ng(e, n) {
        return Ut.reduce((t, i) => {
          if (!Qp.has(i) && e[i] !== undefined && n[i] !== "ignore") {
            t[i] = Yt(e[i]);
          }
          return t;
        }, {});
      }
      function tg(e, { invalid: n = false, channels: t }) {
        const i = t.reduce((n, t) => {
          const i = e.getScaleComponent(t);
          if (i) {
            const r = i.get("type");
            const s = e.vgField(t, { expr: "datum" });
            if (s && ho(r)) {
              n[s] = true;
            }
          }
          return n;
        }, {});
        const r = A(i);
        if (r.length > 0) {
          const e = n ? "||" : "&&";
          return r.map((e) => $a(e, n)).join(` ${e} `);
        }
        return undefined;
      }
      function ig(e) {
        const { config: n, markDef: t } = e;
        const i = ii("invalid", t, n);
        if (i) {
          const n = rg(e, { channels: Rn });
          if (n) {
            return { defined: { signal: n } };
          }
        }
        return {};
      }
      function rg(e, { invalid: n = false, channels: t }) {
        const i = t.reduce((n, t) => {
          var i;
          const r = e.getScaleComponent(t);
          if (r) {
            const s = r.get("type");
            const o = e.vgField(t, { expr: "datum", binSuffix: ((i = e.stack) === null || i === void 0 ? void 0 : i.impute) ? "mid" : undefined });
            if (o && ho(s)) {
              n[o] = true;
            }
          }
          return n;
        }, {});
        const r = A(i);
        if (r.length > 0) {
          const e = n ? "||" : "&&";
          return r.map((e) => $a(e, n)).join(` ${e} `);
        }
        return undefined;
      }
      function sg(e, n) {
        if (n !== undefined) {
          return { [e]: Yt(n) };
        }
        return undefined;
      }
      const og = "voronoi";
      const ag = {
        defined: (e) => e.type === "point" && e.nearest,
        parse: (e, n) => {
          if (n.events) {
            for (const t of n.events) {
              t.markname = e.getName(og);
            }
          }
        },
        marks: (e, n, t) => {
          const { x: i, y: r } = n.project.hasChannel;
          const s = e.mark;
          if (ea(s)) {
            Vr(vi(s));
            return t;
          }
          const o = {
            name: e.getName(og),
            type: "path",
            interactive: true,
            from: { data: e.getName("marks") },
            encode: {
              update: Object.assign(
                { fill: { value: "transparent" }, strokeWidth: { value: 0.35 }, stroke: { value: "transparent" }, isVoronoi: { value: true } },
                kp(e, { reactiveGeom: true })
              ),
            },
            transform: [
              {
                type: "voronoi",
                x: { expr: i || !r ? "datum.datum.x || 0" : "0" },
                y: { expr: r || !i ? "datum.datum.y || 0" : "0" },
                size: [e.getSizeSignalRef("width"), e.getSizeSignalRef("height")],
              },
            ],
          };
          let a = 0;
          let c = false;
          t.forEach((n, t) => {
            var i;
            const r = (i = n.name) !== null && i !== void 0 ? i : "";
            if (r === e.component.mark[0].name) {
              a = t;
            } else if (r.indexOf(og) >= 0) {
              c = true;
            }
          });
          if (!c) {
            t.splice(a + 1, 0, o);
          }
          return t;
        },
      };
      const cg = ag;
      const lg = {
        defined: (e) => e.type === "point" && e.resolve === "global" && e.bind && e.bind !== "scales" && !ju(e.bind),
        parse: (e, n, t) => Lg(n, t),
        topLevelSignals: (e, n, t) => {
          const i = n.name;
          const s = n.project;
          const o = n.bind;
          const a = n.init && n.init[0];
          const c = cg.defined(n) ? "(item().isVoronoi ? datum.datum : datum)" : "datum";
          s.items.forEach((e, s) => {
            var l, u;
            const f = I(`${i}_${e.field}`);
            const d = t.filter((e) => e.name === f);
            if (!d.length) {
              t.unshift(
                Object.assign(Object.assign({ name: f }, a ? { init: Bd(a[s]) } : { value: null }), {
                  on: n.events
                    ? [{ events: n.events, update: `datum && item().mark.marktype !== 'group' ? ${c}[${(0, r.m8)(e.field)}] : null` }]
                    : [],
                  bind: (u = (l = o[e.field]) !== null && l !== void 0 ? l : o[e.channel]) !== null && u !== void 0 ? u : o,
                })
              );
            }
          });
          return t;
        },
        signals: (e, n, t) => {
          const i = n.name;
          const r = n.project;
          const s = t.filter((e) => e.name === i + Fg)[0];
          const o = i + sp;
          const a = r.items.map((e) => I(`${i}_${e.field}`));
          const c = a.map((e) => `${e} !== null`).join(" && ");
          if (a.length) {
            s.update = `${c} ? {fields: ${o}, values: [${a.join(", ")}]} : null`;
          }
          delete s.value;
          delete s.on;
          return t;
        },
      };
      const ug = lg;
      const fg = "_toggle";
      const dg = {
        defined: (e) => e.type === "point" && !!e.toggle,
        signals: (e, n, t) => t.concat({ name: n.name + fg, value: false, on: [{ events: n.events, update: n.toggle }] }),
        modifyExpr: (e, n) => {
          const t = n.name + Fg;
          const i = n.name + fg;
          return (
            `${i} ? null : ${t}, ` + (n.resolve === "global" ? `${i} ? null : true, ` : `${i} ? null : {unit: ${Ag(e)}}, `) + `${i} ? ${t} : null`
          );
        },
      };
      const pg = dg;
      const gg = {
        defined: (e) => e.clear !== undefined && e.clear !== false,
        parse: (e, n) => {
          if (n.clear) {
            n.clear = (0, r.HD)(n.clear) ? (0, Ud.r)(n.clear, "view") : n.clear;
          }
        },
        topLevelSignals: (e, n, t) => {
          if (ug.defined(n)) {
            for (const e of n.project.items) {
              const i = t.findIndex((t) => t.name === I(`${n.name}_${e.field}`));
              if (i !== -1) {
                t[i].on.push({ events: n.clear, update: "null" });
              }
            }
          }
          return t;
        },
        signals: (e, n, t) => {
          function i(e, i) {
            if (e !== -1 && t[e].on) {
              t[e].on.push({ events: n.clear, update: i });
            }
          }
          if (n.type === "interval") {
            for (const e of n.project.items) {
              const n = t.findIndex((n) => n.name === e.signals.visual);
              i(n, "[0, 0]");
              if (n === -1) {
                const n = t.findIndex((n) => n.name === e.signals.data);
                i(n, "null");
              }
            }
          } else {
            let e = t.findIndex((e) => e.name === n.name + Fg);
            i(e, "null");
            if (pg.defined(n)) {
              e = t.findIndex((e) => e.name === n.name + fg);
              i(e, "false");
            }
          }
          return t;
        },
      };
      const mg = gg;
      const hg = {
        defined: (e) => {
          const n = e.resolve === "global" && e.bind && ju(e.bind);
          const t = e.project.items.length === 1 && e.project.items[0].field !== Ou;
          if (n && !t) {
            Vr(wi);
          }
          return n && t;
        },
        parse: (e, n, t) => {
          var i;
          const s = b(t);
          s.select = (0, r.HD)(s.select) ? { type: s.select, toggle: n.toggle } : Object.assign(Object.assign({}, s.select), { toggle: n.toggle });
          Lg(n, s);
          if ((0, Ws.isObject)(t.select) && (t.select.on || t.select.clear)) {
            const e = 'event.item && indexof(event.item.mark.role, "legend") < 0';
            for (const t of n.events) {
              t.filter = (0, r.IX)((i = t.filter) !== null && i !== void 0 ? i : []);
              if (!t.filter.includes(e)) {
                t.filter.push(e);
              }
            }
          }
          const o = wu(n.bind) ? n.bind.legend : "click";
          const a = (0, r.HD)(o) ? (0, Ud.r)(o, "view") : (0, r.IX)(o);
          n.bind = { legend: { merge: a } };
        },
        topLevelSignals: (e, n, t) => {
          const i = n.name;
          const r = wu(n.bind) && n.bind.legend;
          const s = (e) => (n) => {
            const t = b(n);
            t.markname = e;
            return t;
          };
          for (const o of n.project.items) {
            if (!o.hasLegend) continue;
            const e = `${I(o.field)}_legend`;
            const a = `${i}_${e}`;
            const c = t.filter((e) => e.name === a);
            if (c.length === 0) {
              const i = r.merge
                .map(s(`${e}_symbols`))
                .concat(r.merge.map(s(`${e}_labels`)))
                .concat(r.merge.map(s(`${e}_entries`)));
              t.unshift(
                Object.assign(Object.assign({ name: a }, !n.init ? { value: null } : {}), {
                  on: [
                    { events: i, update: "datum.value || item().items[0].items[0].datum.value", force: true },
                    { events: r.merge, update: `!event.item || !datum ? null : ${a}`, force: true },
                  ],
                })
              );
            }
          }
          return t;
        },
        signals: (e, n, t) => {
          const i = n.name;
          const r = n.project;
          const s = t.find((e) => e.name === i + Fg);
          const o = i + sp;
          const a = r.items.filter((e) => e.hasLegend).map((e) => I(`${i}_${I(e.field)}_legend`));
          const c = a.map((e) => `${e} !== null`).join(" && ");
          const l = `${c} ? {fields: ${o}, values: [${a.join(", ")}]} : null`;
          if (n.events && a.length > 0) {
            s.on.push({ events: a.map((e) => ({ signal: e })), update: l });
          } else if (a.length > 0) {
            s.update = l;
            delete s.value;
            delete s.on;
          }
          const u = t.find((e) => e.name === i + fg);
          const f = wu(n.bind) && n.bind.legend;
          if (u) {
            if (!n.events) u.on[0].events = f;
            else u.on.push(Object.assign(Object.assign({}, u.on[0]), { events: f }));
          }
          return t;
        },
      };
      const bg = hg;
      function yg(e, n, t) {
        var i, r, s, o;
        const a = (i = e.fieldDef(n)) === null || i === void 0 ? void 0 : i.field;
        for (const c of M((r = e.component.selection) !== null && r !== void 0 ? r : {})) {
          const e = (s = c.project.hasField[a]) !== null && s !== void 0 ? s : c.project.hasChannel[n];
          if (e && hg.defined(c)) {
            const n = (o = t.get("selections")) !== null && o !== void 0 ? o : [];
            n.push(c.name);
            t.set("selections", n, false);
            e.hasLegend = true;
          }
        }
      }
      const vg = "_translate_anchor";
      const Og = "_translate_delta";
      const xg = {
        defined: (e) => e.type === "interval" && e.translate,
        signals: (e, n, t) => {
          const i = n.name;
          const r = up.defined(n);
          const s = i + vg;
          const { x: o, y: a } = n.project.hasChannel;
          let c = (0, Ud.r)(n.translate, "scope");
          if (!r) {
            c = c.map((e) => ((e.between[0].markname = i + gp), e));
          }
          t.push(
            {
              name: s,
              value: {},
              on: [
                {
                  events: c.map((e) => e.between[0]),
                  update:
                    "{x: x(unit), y: y(unit)" +
                    (o !== undefined ? `, extent_x: ${r ? fp(e, le) : `slice(${o.signals.visual})`}` : "") +
                    (a !== undefined ? `, extent_y: ${r ? fp(e, ue) : `slice(${a.signals.visual})`}` : "") +
                    "}",
                },
              ],
            },
            { name: i + Og, value: {}, on: [{ events: c, update: `{x: ${s}.x - x(unit), y: ${s}.y - y(unit)}` }] }
          );
          if (o !== undefined) {
            wg(e, n, o, "width", t);
          }
          if (a !== undefined) {
            wg(e, n, a, "height", t);
          }
          return t;
        },
      };
      const jg = xg;
      function wg(e, n, t, i, r) {
        var s, o;
        const a = n.name;
        const c = a + vg;
        const l = a + Og;
        const u = t.channel;
        const f = up.defined(n);
        const d = r.filter((e) => e.name === t.signals[f ? "data" : "visual"])[0];
        const p = e.getSizeSignalRef(i).signal;
        const g = e.getScaleComponent(u);
        const m = g.get("type");
        const h = g.get("reverse");
        const b = !f ? "" : u === le ? (h ? "" : "-") : h ? "-" : "";
        const y = `${c}.extent_${u}`;
        const v = `${b}${l}.${u} / ${f ? `${p}` : `span(${y})`}`;
        const O = !f ? "panLinear" : m === "log" ? "panLog" : m === "symlog" ? "panSymlog" : m === "pow" ? "panPow" : "panLinear";
        const x = !f
          ? ""
          : m === "pow"
            ? `, ${(s = g.get("exponent")) !== null && s !== void 0 ? s : 1}`
            : m === "symlog"
              ? `, ${(o = g.get("constant")) !== null && o !== void 0 ? o : 1}`
              : "";
        const j = `${O}(${y}, ${v}${x})`;
        d.on.push({ events: { signal: l }, update: f ? j : `clampRange(${j}, 0, ${p})` });
      }
      const $g = "_zoom_anchor";
      const kg = "_zoom_delta";
      const Sg = {
        defined: (e) => e.type === "interval" && e.zoom,
        signals: (e, n, t) => {
          const i = n.name;
          const s = up.defined(n);
          const o = i + kg;
          const { x: a, y: c } = n.project.hasChannel;
          const l = (0, r.m8)(e.scaleName(le));
          const u = (0, r.m8)(e.scaleName(ue));
          let f = (0, Ud.r)(n.zoom, "scope");
          if (!s) {
            f = f.map((e) => ((e.markname = i + gp), e));
          }
          t.push(
            {
              name: i + $g,
              on: [
                {
                  events: f,
                  update: !s
                    ? `{x: x(unit), y: y(unit)}`
                    : "{" + [l ? `x: invert(${l}, x(unit))` : "", u ? `y: invert(${u}, y(unit))` : ""].filter((e) => !!e).join(", ") + "}",
                },
              ],
            },
            { name: o, on: [{ events: f, force: true, update: "pow(1.001, event.deltaY * pow(16, event.deltaMode))" }] }
          );
          if (a !== undefined) {
            _g(e, n, a, "width", t);
          }
          if (c !== undefined) {
            _g(e, n, c, "height", t);
          }
          return t;
        },
      };
      const Dg = Sg;
      function _g(e, n, t, i, r) {
        var s, o;
        const a = n.name;
        const c = t.channel;
        const l = up.defined(n);
        const u = r.filter((e) => e.name === t.signals[l ? "data" : "visual"])[0];
        const f = e.getSizeSignalRef(i).signal;
        const d = e.getScaleComponent(c);
        const p = d.get("type");
        const g = l ? fp(e, c) : u.name;
        const m = a + kg;
        const h = `${a}${$g}.${c}`;
        const b = !l ? "zoomLinear" : p === "log" ? "zoomLog" : p === "symlog" ? "zoomSymlog" : p === "pow" ? "zoomPow" : "zoomLinear";
        const y = !l
          ? ""
          : p === "pow"
            ? `, ${(s = d.get("exponent")) !== null && s !== void 0 ? s : 1}`
            : p === "symlog"
              ? `, ${(o = d.get("constant")) !== null && o !== void 0 ? o : 1}`
              : "";
        const v = `${b}(${g}, ${h}, ${m}${y})`;
        u.on.push({ events: { signal: m }, update: l ? v : `clampRange(${v}, 0, ${f})` });
      }
      const Pg = "_store";
      const Fg = "_tuple";
      const zg = "_modify";
      const Cg = "_selection_domain_";
      const Eg = "vlSelectionResolve";
      const Ng = [xp, bp, cp, pg, ug, up, bg, mg, jg, Dg, cg];
      function Tg(e) {
        let n = e.parent;
        while (n) {
          if (Hy(n)) break;
          n = n.parent;
        }
        return n;
      }
      function Ag(e, { escape: n } = { escape: true }) {
        let t = n ? (0, r.m8)(e.name) : e.name;
        const i = Tg(e);
        if (i) {
          const { facet: e } = i;
          for (const n of Qe) {
            if (e[n]) {
              t += ` + '__facet_${n}_' + (facet[${(0, r.m8)(i.vgField(n))}])`;
            }
          }
        }
        return t;
      }
      function Mg(e) {
        var n;
        return M((n = e.component.selection) !== null && n !== void 0 ? n : {}).reduce((e, n) => e || n.project.hasSelectionId, false);
      }
      function Lg(e, n) {
        if ((0, Ws.isString)(n.select) || !n.select.on) delete e.events;
        if ((0, Ws.isString)(n.select) || !n.select.clear) delete e.clear;
        if ((0, Ws.isString)(n.select) || !n.select.toggle) delete e.toggle;
      }
      var qg = t(25693);
      function Ig(e) {
        const n = [];
        if (e.type === "Identifier") {
          return [e.name];
        }
        if (e.type === "Literal") {
          return [e.value];
        }
        if (e.type === "MemberExpression") {
          n.push(...Ig(e.object));
          n.push(...Ig(e.property));
        }
        return n;
      }
      function Rg(e) {
        if (e.object.type === "MemberExpression") {
          return Rg(e.object);
        }
        return e.object.name === "datum";
      }
      function Wg(e) {
        const n = (0, qg.BJ)(e);
        const t = new Set();
        n.visit((e) => {
          if (e.type === "MemberExpression" && Rg(e)) {
            t.add(Ig(e).slice(1).join("."));
          }
        });
        return t;
      }
      class Ug extends ep {
        clone() {
          return new Ug(null, this.model, b(this.filter));
        }
        constructor(e, n, t) {
          super(e);
          this.model = n;
          this.filter = t;
          this.expr = Xg(this.model, this.filter, this);
          this._dependentFields = Wg(this.expr);
        }
        dependentFields() {
          return this._dependentFields;
        }
        producedFields() {
          return new Set();
        }
        assemble() {
          return { type: "filter", expr: this.expr };
        }
        hash() {
          return `Filter ${this.expr}`;
        }
      }
      function Hg(e, n) {
        var t;
        const i = {};
        const s = e.config.selection;
        if (!n || !n.length) return i;
        for (const o of n) {
          const n = I(o.name);
          const a = o.select;
          const c = (0, r.HD)(a) ? a : a.type;
          const l = (0, r.Kn)(a) ? b(a) : { type: c };
          const u = s[c];
          for (const e in u) {
            if (e === "fields" || e === "encodings") {
              continue;
            }
            if (e === "mark") {
              l[e] = Object.assign(Object.assign({}, u[e]), l[e]);
            }
            if (l[e] === undefined || l[e] === true) {
              l[e] = (t = u[e]) !== null && t !== void 0 ? t : l[e];
            }
          }
          const f = (i[n] = Object.assign(Object.assign({}, l), {
            name: n,
            type: c,
            init: o.value,
            bind: o.bind,
            events: (0, r.HD)(l.on) ? (0, Ud.r)(l.on, "scope") : (0, r.IX)(b(l.on)),
          }));
          for (const t of Ng) {
            if (t.defined(f) && t.parse) {
              t.parse(e, f, o);
            }
          }
        }
        return i;
      }
      function Bg(e, n, t, i = "datum") {
        const s = (0, r.HD)(n) ? n : n.param;
        const o = I(s);
        const a = (0, r.m8)(o + Pg);
        let c;
        try {
          c = e.getSelectionComponent(o, s);
        } catch (p) {
          return `!!${o}`;
        }
        if (c.project.timeUnit) {
          const n = t !== null && t !== void 0 ? t : e.component.data.raw;
          const i = c.project.timeUnit.clone();
          if (n.parent) {
            i.insertAsParentOf(n);
          } else {
            n.parent = i;
          }
        }
        const l = c.project.hasSelectionId ? "vlSelectionIdTest(" : "vlSelectionTest(";
        const u = c.resolve === "global" ? ")" : `, ${(0, r.m8)(c.resolve)})`;
        const f = `${l}${a}, ${i}${u}`;
        const d = `length(data(${a}))`;
        return n.empty === false ? `${d} && ${f}` : `!${d} || ${f}`;
      }
      function Jg(e, n, t) {
        const i = I(n);
        const s = t["encoding"];
        let o = t["field"];
        let a;
        try {
          a = e.getSelectionComponent(i, n);
        } catch (c) {
          return i;
        }
        if (!s && !o) {
          o = a.project.items[0].field;
          if (a.project.items.length > 1) {
            Vr('A "field" or "encoding" must be specified when using a selection as a scale domain. ' + `Using "field": ${(0, r.m8)(o)}.`);
          }
        } else if (s && !o) {
          const e = a.project.items.filter((e) => e.channel === s);
          if (!e.length || e.length > 1) {
            o = a.project.items[0].field;
            Vr(
              (!e.length ? "No " : "Multiple ") +
                `matching ${(0, r.m8)(s)} encoding found for selection ${(0, r.m8)(t.param)}. ` +
                `Using "field": ${(0, r.m8)(o)}.`
            );
          } else {
            o = e[0].field;
          }
        }
        return `${a.name}[${(0, r.m8)(G(o))}]`;
      }
      function Gg(e, n) {
        var t;
        for (const [i, r] of L((t = e.component.selection) !== null && t !== void 0 ? t : {})) {
          const t = e.getName(`lookup_${i}`);
          e.component.data.outputNodes[t] = r.materialized = new np(new Ug(n, e, { param: i }), t, Wd.Lookup, e.component.data.outputNodeRefCounts);
        }
      }
      function Xg(e, n, t) {
        return R(n, (n) => {
          if ((0, r.HD)(n)) {
            return n;
          } else if (Ds(n)) {
            return Bg(e, n, t);
          } else {
            return qs(n);
          }
        });
      }
      var Vg =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      function Kg(e, n) {
        if (!e) {
          return undefined;
        }
        if ((0, r.kJ)(e) && !At(e)) {
          return e.map((e) => Lc(e, n)).join(", ");
        }
        return e;
      }
      function Yg(e, n, t, i) {
        var r, s, o;
        var a, c;
        (r = e.encode) !== null && r !== void 0 ? r : (e.encode = {});
        (s = (a = e.encode)[n]) !== null && s !== void 0 ? s : (a[n] = {});
        (o = (c = e.encode[n]).update) !== null && o !== void 0 ? o : (c.update = {});
        e.encode[n].update[t] = i;
      }
      function Qg(e, n, t, i = { header: false }) {
        var s, o;
        const a = e.combine(),
          { disable: c, orient: l, scale: u, labelExpr: f, title: d, zindex: p } = a,
          g = Vg(a, ["disable", "orient", "scale", "labelExpr", "title", "zindex"]);
        if (c) {
          return undefined;
        }
        for (const m in g) {
          const e = rl[m];
          const t = g[m];
          if (e && e !== n && e !== "both") {
            delete g[m];
          } else if (tl(t)) {
            const { condition: e } = t,
              n = Vg(t, ["condition"]);
            const i = (0, r.IX)(e);
            const s = nl[m];
            if (s) {
              const { vgProp: e, part: t } = s;
              const r = [
                ...i.map((e) => {
                  const { test: n } = e,
                    t = Vg(e, ["test"]);
                  return Object.assign({ test: Xg(null, n) }, t);
                }),
                n,
              ];
              Yg(g, t, e, r);
              delete g[m];
            } else if (s === null) {
              const e = {
                signal:
                  i
                    .map((e) => {
                      const { test: n } = e,
                        t = Vg(e, ["test"]);
                      return `${Xg(null, n)} ? ${Zt(t)} : `;
                    })
                    .join("") + Zt(n),
              };
              g[m] = e;
            }
          } else if (Mt(t)) {
            const e = nl[m];
            if (e) {
              const { vgProp: n, part: i } = e;
              Yg(g, i, n, t);
              delete g[m];
            }
          }
          if ($(["labelAlign", "labelBaseline"], m) && g[m] === null) {
            delete g[m];
          }
        }
        if (n === "grid") {
          if (!g.grid) {
            return undefined;
          }
          if (g.encode) {
            const { grid: e } = g.encode;
            g.encode = Object.assign({}, e ? { grid: e } : {});
            if (T(g.encode)) {
              delete g.encode;
            }
          }
          return Object.assign(Object.assign({ scale: u, orient: l }, g), {
            domain: false,
            labels: false,
            aria: false,
            maxExtent: 0,
            minExtent: 0,
            ticks: false,
            zindex: Y(p, 0),
          });
        } else {
          if (!i.header && e.mainExtracted) {
            return undefined;
          }
          if (f !== undefined) {
            let e = f;
            if (
              ((o = (s = g.encode) === null || s === void 0 ? void 0 : s.labels) === null || o === void 0 ? void 0 : o.update) &&
              Mt(g.encode.labels.update.text)
            ) {
              e = X(f, "datum.label", g.encode.labels.update.text.signal);
            }
            Yg(g, "labels", "text", { signal: e });
          }
          if (g.labelAlign === null) {
            delete g.labelAlign;
          }
          if (g.encode) {
            for (const n of il) {
              if (!e.hasAxisPart(n)) {
                delete g.encode[n];
              }
            }
            if (T(g.encode)) {
              delete g.encode;
            }
          }
          const n = Kg(d, t);
          return Object.assign(
            Object.assign(
              Object.assign(Object.assign({ scale: u, orient: l, grid: false }, n ? { title: n } : {}), g),
              t.aria === false ? { aria: false } : {}
            ),
            { zindex: Y(p, 0) }
          );
        }
      }
      function Zg(e) {
        const { axes: n } = e.component;
        const t = [];
        for (const i of Rn) {
          if (n[i]) {
            for (const r of n[i]) {
              if (!r.get("disable") && !r.get("gridScale")) {
                const n = i === "x" ? "height" : "width";
                const r = e.getSizeSignalRef(n).signal;
                if (n !== r) {
                  t.push({ name: n, update: r });
                }
              }
            }
          }
        }
        return t;
      }
      function em(e, n) {
        const { x: t = [], y: i = [] } = e;
        return [
          ...t.map((e) => Qg(e, "grid", n)),
          ...i.map((e) => Qg(e, "grid", n)),
          ...t.map((e) => Qg(e, "main", n)),
          ...i.map((e) => Qg(e, "main", n)),
        ].filter((e) => e);
      }
      function nm(e, n, t, i) {
        return Object.assign.apply(null, [
          {},
          ...e.map((e) => {
            if (e === "axisOrient") {
              const e = t === "x" ? "bottom" : "left";
              const r = n[t === "x" ? "axisBottom" : "axisLeft"] || {};
              const s = n[t === "x" ? "axisTop" : "axisRight"] || {};
              const o = new Set([...A(r), ...A(s)]);
              const a = {};
              for (const n of o.values()) {
                a[n] = { signal: `${i["signal"]} === "${e}" ? ${ei(r[n])} : ${ei(s[n])}` };
              }
              return a;
            }
            return n[e];
          }),
        ]);
      }
      function tm(e, n, t, i) {
        const r =
          n === "band"
            ? ["axisDiscrete", "axisBand"]
            : n === "point"
              ? ["axisDiscrete", "axisPoint"]
              : lo(n)
                ? ["axisQuantitative"]
                : n === "time" || n === "utc"
                  ? ["axisTemporal"]
                  : [];
        const s = e === "x" ? "axisX" : "axisY";
        const o = Mt(t) ? "axisOrient" : `axis${U(t)}`;
        const a = [...r, ...r.map((e) => s + e.substr(4))];
        const c = ["axis", o, s];
        return { vlOnlyAxisConfig: nm(a, i, e, t), vgAxisConfig: nm(c, i, e, t), axisConfigStyle: im([...c, ...a], i) };
      }
      function im(e, n) {
        var t;
        const i = [{}];
        for (const s of e) {
          let e = (t = n[s]) === null || t === void 0 ? void 0 : t.style;
          if (e) {
            e = (0, r.IX)(e);
            for (const t of e) {
              i.push(n.style[t]);
            }
          }
        }
        return Object.assign.apply(null, i);
      }
      function rm(e, n, t, i = {}) {
        var r;
        const s = oi(e, t, n);
        if (s !== undefined) {
          return { configFrom: "style", configValue: s };
        }
        for (const o of ["vlOnlyAxisConfig", "vgAxisConfig", "axisConfigStyle"]) {
          if (((r = i[o]) === null || r === void 0 ? void 0 : r[e]) !== undefined) {
            return { configFrom: o, configValue: i[o][e] };
          }
        }
        return {};
      }
      const sm = {
        scale: ({ model: e, channel: n }) => e.scaleName(n),
        format: ({ fieldOrDatumDef: e, config: n, axis: t }) => {
          const { format: i, formatType: r } = t;
          return Aa(e, e.type, i, r, n, true);
        },
        formatType: ({ axis: e, fieldOrDatumDef: n, scaleType: t }) => {
          const { formatType: i } = e;
          return Ma(i, n, t);
        },
        grid: ({ fieldOrDatumDef: e, axis: n, scaleType: t }) => {
          var i;
          return (i = n.grid) !== null && i !== void 0 ? i : om(t, e);
        },
        gridScale: ({ model: e, channel: n }) => am(e, n),
        labelAlign: ({ axis: e, labelAngle: n, orient: t, channel: i }) => e.labelAlign || fm(n, t, i),
        labelAngle: ({ labelAngle: e }) => e,
        labelBaseline: ({ axis: e, labelAngle: n, orient: t, channel: i }) => e.labelBaseline || um(n, t, i),
        labelFlush: ({ axis: e, fieldOrDatumDef: n, channel: t }) => {
          var i;
          return (i = e.labelFlush) !== null && i !== void 0 ? i : dm(n.type, t);
        },
        labelOverlap: ({ axis: e, fieldOrDatumDef: n, scaleType: t }) => {
          var i;
          return (i = e.labelOverlap) !== null && i !== void 0 ? i : pm(n.type, t, fc(n) && !!n.timeUnit, fc(n) ? n.sort : undefined);
        },
        orient: ({ orient: e }) => e,
        tickCount: ({ channel: e, model: n, axis: t, fieldOrDatumDef: i, scaleType: r }) => {
          var s;
          const o = e === "x" ? "width" : e === "y" ? "height" : undefined;
          const a = o ? n.getSizeSignalRef(o) : undefined;
          return (s = t.tickCount) !== null && s !== void 0 ? s : mm({ fieldOrDatumDef: i, scaleType: r, size: a, values: t.values });
        },
        title: ({ axis: e, model: n, channel: t }) => {
          if (e.title !== undefined) {
            return e.title;
          }
          const i = hm(n, t);
          if (i !== undefined) {
            return i;
          }
          const r = n.typedFieldDef(t);
          const s = t === "x" ? "x2" : "y2";
          const o = n.fieldDef(s);
          return ci(r ? [tc(r)] : [], fc(o) ? [tc(o)] : []);
        },
        values: ({ axis: e, fieldOrDatumDef: n }) => bm(e, n),
        zindex: ({ axis: e, fieldOrDatumDef: n, mark: t }) => {
          var i;
          return (i = e.zindex) !== null && i !== void 0 ? i : ym(t, n);
        },
      };
      function om(e, n) {
        return !mo(e) && fc(n) && !Dt(n === null || n === void 0 ? void 0 : n.bin) && !_t(n === null || n === void 0 ? void 0 : n.bin);
      }
      function am(e, n) {
        const t = n === "x" ? "y" : "x";
        if (e.getScaleComponent(t)) {
          return e.scaleName(t);
        }
        return undefined;
      }
      function cm(e, n, t, i, r) {
        const s = n === null || n === void 0 ? void 0 : n.labelAngle;
        if (s !== undefined) {
          return Mt(s) ? s : ie(s);
        } else {
          const { configValue: s } = rm("labelAngle", i, n === null || n === void 0 ? void 0 : n.style, r);
          if (s !== undefined) {
            return ie(s);
          } else {
            if (t === le && $([Ks, Xs], e.type) && !(fc(e) && e.timeUnit)) {
              return 270;
            }
            return undefined;
          }
        }
      }
      function lm(e) {
        return `(((${e.signal} % 360) + 360) % 360)`;
      }
      function um(e, n, t, i) {
        if (e !== undefined) {
          if (t === "x") {
            if (Mt(e)) {
              const t = lm(e);
              const i = Mt(n) ? `(${n.signal} === "top")` : n === "top";
              return {
                signal:
                  `(45 < ${t} && ${t} < 135) || (225 < ${t} && ${t} < 315) ? "middle" :` + `(${t} <= 45 || 315 <= ${t}) === ${i} ? "bottom" : "top"`,
              };
            }
            if ((45 < e && e < 135) || (225 < e && e < 315)) {
              return "middle";
            }
            if (Mt(n)) {
              const t = e <= 45 || 315 <= e ? "===" : "!==";
              return { signal: `${n.signal} ${t} "top" ? "bottom" : "top"` };
            }
            return (e <= 45 || 315 <= e) === (n === "top") ? "bottom" : "top";
          } else {
            if (Mt(e)) {
              const t = lm(e);
              const r = Mt(n) ? `(${n.signal} === "left")` : n === "left";
              const s = i ? '"middle"' : "null";
              return {
                signal: `${t} <= 45 || 315 <= ${t} || (135 <= ${t} && ${t} <= 225) ? ${s} : (45 <= ${t} && ${t} <= 135) === ${r} ? "top" : "bottom"`,
              };
            }
            if (e <= 45 || 315 <= e || (135 <= e && e <= 225)) {
              return i ? "middle" : null;
            }
            if (Mt(n)) {
              const t = 45 <= e && e <= 135 ? "===" : "!==";
              return { signal: `${n.signal} ${t} "left" ? "top" : "bottom"` };
            }
            return (45 <= e && e <= 135) === (n === "left") ? "top" : "bottom";
          }
        }
        return undefined;
      }
      function fm(e, n, t) {
        if (e === undefined) {
          return undefined;
        }
        const i = t === "x";
        const r = i ? 0 : 90;
        const s = i ? "bottom" : "left";
        if (Mt(e)) {
          const t = lm(e);
          const o = Mt(n) ? `(${n.signal} === "${s}")` : n === s;
          return {
            signal:
              `(${r ? `(${t} + 90)` : t} % 180 === 0) ? ${i ? null : '"center"'} :` +
              `(${r} < ${t} && ${t} < ${180 + r}) === ${o} ? "left" : "right"`,
          };
        }
        if ((e + r) % 180 === 0) {
          return i ? null : "center";
        }
        if (Mt(n)) {
          const t = r < e && e < 180 + r ? "===" : "!==";
          const i = `${n.signal} ${t} "${s}"`;
          return { signal: `${i} ? "left" : "right"` };
        }
        if ((r < e && e < 180 + r) === (n === s)) {
          return "left";
        }
        return "right";
      }
      function dm(e, n) {
        if (n === "x" && $(["quantitative", "temporal"], e)) {
          return true;
        }
        return undefined;
      }
      function pm(e, n, t, i) {
        if ((t && !(0, r.Kn)(i)) || (e !== "nominal" && e !== "ordinal")) {
          if (n === "log" || n === "symlog") {
            return "greedy";
          }
          return true;
        }
        return undefined;
      }
      function gm(e) {
        return e === "x" ? "bottom" : "left";
      }
      function mm({ fieldOrDatumDef: e, scaleType: n, size: t, values: i }) {
        var r;
        if (!i && !mo(n) && n !== "log") {
          if (fc(e)) {
            if (Dt(e.bin)) {
              return { signal: `ceil(${t.signal}/10)` };
            }
            if (e.timeUnit && $(["month", "hours", "day", "quarter"], (r = ks(e.timeUnit)) === null || r === void 0 ? void 0 : r.unit)) {
              return undefined;
            }
          }
          return { signal: `ceil(${t.signal}/40)` };
        }
        return undefined;
      }
      function hm(e, n) {
        const t = n === "x" ? "x2" : "y2";
        const i = e.fieldDef(n);
        const r = e.fieldDef(t);
        const s = i ? i.title : undefined;
        const o = r ? r.title : undefined;
        if (s && o) {
          return li(s, o);
        } else if (s) {
          return s;
        } else if (o) {
          return o;
        } else if (s !== undefined) {
          return s;
        } else if (o !== undefined) {
          return o;
        }
        return undefined;
      }
      function bm(e, n) {
        const t = e.values;
        if ((0, r.kJ)(t)) {
          return Zc(n, t);
        } else if (Mt(t)) {
          return t;
        }
        return undefined;
      }
      function ym(e, n) {
        if (e === "rect" && Dc(n)) {
          return 1;
        }
        return 0;
      }
      class vm extends ep {
        clone() {
          return new vm(null, b(this.transform));
        }
        constructor(e, n) {
          super(e);
          this.transform = n;
          this._dependentFields = Wg(this.transform.calculate);
        }
        static parseAllForSortIndex(e, n) {
          n.forEachFieldDef((n, t) => {
            if (!Oc(n)) {
              return;
            }
            if (Va(n.sort)) {
              const { field: i, timeUnit: r } = n;
              const s = n.sort;
              const o = s.map((e, n) => `${qs({ field: i, timeUnit: r, equal: e })} ? ${n} : `).join("") + s.length;
              e = new vm(e, { calculate: o, as: Om(n, t, { forAs: true }) });
            }
          });
          return e;
        }
        producedFields() {
          return new Set([this.transform.as]);
        }
        dependentFields() {
          return this._dependentFields;
        }
        assemble() {
          return { type: "formula", expr: this.transform.calculate, as: this.transform.as };
        }
        hash() {
          return `Calculate ${j(this.transform)}`;
        }
      }
      function Om(e, n, t) {
        return Sc(e, Object.assign({ prefix: n, suffix: "sort_index" }, t !== null && t !== void 0 ? t : {}));
      }
      function xm(e, n) {
        if ($(["top", "bottom"], n)) {
          return "column";
        } else if ($(["left", "right"], n)) {
          return "row";
        }
        return e === "row" ? "row" : "column";
      }
      function jm(e, n, t, i) {
        const r = i === "row" ? t.headerRow : i === "column" ? t.headerColumn : t.headerFacet;
        return Y((n || {})[e], r[e], t.header[e]);
      }
      function wm(e, n, t, i) {
        const r = {};
        for (const s of e) {
          const e = jm(s, n || {}, t, i);
          if (e !== undefined) {
            r[s] = e;
          }
        }
        return r;
      }
      const $m = ["row", "column"];
      const km = ["header", "footer"];
      function Sm(e, n) {
        const t = e.component.layoutHeaders[n].title;
        const i = e.config ? e.config : undefined;
        const r = e.component.layoutHeaders[n].facetFieldDef ? e.component.layoutHeaders[n].facetFieldDef : undefined;
        const { titleAnchor: s, titleAngle: o, titleOrient: a } = wm(["titleAnchor", "titleAngle", "titleOrient"], r.header, i, n);
        const c = xm(n, a);
        const l = ie(o);
        return {
          name: `${n}-title`,
          type: "group",
          role: `${c}-title`,
          title: Object.assign(
            Object.assign(
              Object.assign(Object.assign(Object.assign({ text: t }, n === "row" ? { orient: "left" } : {}), { style: "guide-title" }), _m(l, c)),
              Dm(c, l, s)
            ),
            Am(i, r, n, du, uu)
          ),
        };
      }
      function Dm(e, n, t = "middle") {
        switch (t) {
          case "start":
            return { align: "left" };
          case "end":
            return { align: "right" };
        }
        const i = fm(n, e === "row" ? "left" : "top", e === "row" ? "y" : "x");
        return i ? { align: i } : {};
      }
      function _m(e, n) {
        const t = um(e, n === "row" ? "left" : "top", n === "row" ? "y" : "x", true);
        return t ? { baseline: t } : {};
      }
      function Pm(e, n) {
        const t = e.component.layoutHeaders[n];
        const i = [];
        for (const r of km) {
          if (t[r]) {
            for (const s of t[r]) {
              const o = Cm(e, n, r, t, s);
              if (o != null) {
                i.push(o);
              }
            }
          }
        }
        return i;
      }
      function Fm(e, n) {
        var t;
        const { sort: i } = e;
        if (Xa(i)) {
          return { field: Sc(i, { expr: "datum" }), order: (t = i.order) !== null && t !== void 0 ? t : "ascending" };
        } else if ((0, r.kJ)(i)) {
          return { field: Om(e, n, { expr: "datum" }), order: "ascending" };
        } else {
          return { field: Sc(e, { expr: "datum" }), order: i !== null && i !== void 0 ? i : "ascending" };
        }
      }
      function zm(e, n, t) {
        const {
          format: i,
          formatType: r,
          labelAngle: s,
          labelAnchor: o,
          labelOrient: a,
          labelExpr: c,
        } = wm(["format", "formatType", "labelAngle", "labelAnchor", "labelOrient", "labelExpr"], e.header, t, n);
        const l = Ea({ fieldOrDatumDef: e, format: i, formatType: r, expr: "parent", config: t }).signal;
        const u = xm(n, a);
        return Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  { text: { signal: c ? X(X(c, "datum.label", l), "datum.value", Sc(e, { expr: "parent" })) : l } },
                  n === "row" ? { orient: "left" } : {}
                ),
                { style: "guide-label", frame: "group" }
              ),
              _m(s, u)
            ),
            Dm(u, s, o)
          ),
          Am(t, e, n, pu, fu)
        );
      }
      function Cm(e, n, t, i, r) {
        if (r) {
          let s = null;
          const { facetFieldDef: o } = i;
          const a = e.config ? e.config : undefined;
          if (o && r.labels) {
            const { labelOrient: e } = wm(["labelOrient"], o.header, a, n);
            if ((n === "row" && !$(["top", "bottom"], e)) || (n === "column" && !$(["left", "right"], e))) {
              s = zm(o, n, a);
            }
          }
          const c = Hy(e) && !Ka(e.facet);
          const l = r.axes;
          const u = (l === null || l === void 0 ? void 0 : l.length) > 0;
          if (s || u) {
            const a = n === "row" ? "height" : "width";
            return Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      { name: e.getName(`${n}_${t}`), type: "group", role: `${n}-${t}` },
                      i.facetFieldDef ? { from: { data: e.getName(`${n}_domain`) }, sort: Fm(o, n) } : {}
                    ),
                    u && c ? { from: { data: e.getName(`facet_domain_${n}`) } } : {}
                  ),
                  s ? { title: s } : {}
                ),
                r.sizeSignal ? { encode: { update: { [a]: r.sizeSignal } } } : {}
              ),
              u ? { axes: l } : {}
            );
          }
        }
        return null;
      }
      const Em = { column: { start: 0, end: 1 }, row: { start: 1, end: 0 } };
      function Nm(e, n) {
        return Em[n][e];
      }
      function Tm(e, n) {
        const t = {};
        for (const i of Qe) {
          const r = e[i];
          if (r === null || r === void 0 ? void 0 : r.facetFieldDef) {
            const { titleAnchor: e, titleOrient: s } = wm(["titleAnchor", "titleOrient"], r.facetFieldDef.header, n, i);
            const o = xm(i, s);
            const a = Nm(e, o);
            if (a !== undefined) {
              t[o] = a;
            }
          }
        }
        return T(t) ? undefined : t;
      }
      function Am(e, n, t, i, r) {
        const s = {};
        for (const o of i) {
          if (!r[o]) {
            continue;
          }
          const i = jm(o, n === null || n === void 0 ? void 0 : n.header, e, t);
          if (i !== undefined) {
            s[r[o]] = i;
          }
        }
        return s;
      }
      function Mm(e) {
        return [...Lm(e, "width"), ...Lm(e, "height"), ...Lm(e, "childWidth"), ...Lm(e, "childHeight")];
      }
      function Lm(e, n) {
        const t = n === "width" ? "x" : "y";
        const i = e.component.layoutSize.get(n);
        if (!i || i === "merged") {
          return [];
        }
        const r = e.getSizeSignalRef(n).signal;
        if (i === "step") {
          const n = e.getScaleComponent(t);
          if (n) {
            const i = n.get("type");
            const s = n.get("range");
            if (mo(i) && Lt(s)) {
              const i = e.scaleName(t);
              if (Hy(e.parent)) {
                const n = e.parent.component.resolve;
                if (n.scale[t] === "independent") {
                  return [qm(i, s)];
                }
              }
              return [qm(i, s), { name: r, update: Im(i, n, `domain('${i}').length`) }];
            }
          }
          throw new Error("layout size is step although width/height is not step.");
        } else if (i == "container") {
          const n = r.endsWith("width");
          const t = n ? "containerSize()[0]" : "containerSize()[1]";
          const i = qu(e.config.view, n ? "width" : "height");
          const s = `isFinite(${t}) ? ${t} : ${i}`;
          return [{ name: r, init: s, on: [{ update: s, events: "window:resize" }] }];
        } else {
          return [{ name: r, value: i }];
        }
      }
      function qm(e, n) {
        const t = `${e}_step`;
        if (Mt(n.step)) {
          return { name: t, update: n.step.signal };
        } else {
          return { name: t, value: n.step };
        }
      }
      function Im(e, n, t) {
        const i = n.get("type");
        const r = n.get("padding");
        const s = Y(n.get("paddingOuter"), r);
        let o = n.get("paddingInner");
        o = i === "band" ? (o !== undefined ? o : r) : 1;
        return `bandspace(${t}, ${ei(o)}, ${ei(s)}) * ${e}_step`;
      }
      function Rm(e) {
        return e === "childWidth" ? "width" : e === "childHeight" ? "height" : e;
      }
      function Wm(e, n) {
        return A(e).reduce((t, i) => {
          const r = e[i];
          return Object.assign(
            Object.assign({}, t),
            jp(n, r, i, (e) => Yt(e.value))
          );
        }, {});
      }
      function Um(e, n) {
        if (Hy(n)) {
          return e === "theta" ? "independent" : "shared";
        } else if (Jy(n)) {
          return "shared";
        } else if (By(n)) {
          return Wn(e) || e === "theta" || e === "radius" ? "independent" : "shared";
        }
        throw new Error("invalid model type for resolve");
      }
      function Hm(e, n) {
        const t = e.scale[n];
        const i = Wn(n) ? "axis" : "legend";
        if (t === "independent") {
          if (e[i][n] === "shared") {
            Vr(Or(n));
          }
          return "independent";
        }
        return e[i][n] || "shared";
      }
      const Bm = Object.assign(Object.assign({}, yu), {
        disable: 1,
        labelExpr: 1,
        selections: 1,
        opacity: 1,
        shape: 1,
        stroke: 1,
        fill: 1,
        size: 1,
        strokeWidth: 1,
        strokeDash: 1,
        encode: 1,
      });
      const Jm = A(Bm);
      class Gm extends _d {}
      const Xm = { symbols: Vm, gradient: Km, labels: Ym, entries: Qm };
      function Vm(e, { fieldOrDatumDef: n, model: t, channel: i, legendCmpt: s, legendType: o }) {
        var a, c, l, u, f, d, p, g;
        if (o !== "symbol") {
          return undefined;
        }
        const { markDef: m, encoding: h, config: b, mark: y } = t;
        const v = m.filled && y !== "trail";
        let O = Object.assign(Object.assign({}, ni({}, t, aa)), Cp(t, { filled: v }));
        const x = (a = s.get("symbolOpacity")) !== null && a !== void 0 ? a : b.legend.symbolOpacity;
        const j = (c = s.get("symbolFillColor")) !== null && c !== void 0 ? c : b.legend.symbolFillColor;
        const w = (l = s.get("symbolStrokeColor")) !== null && l !== void 0 ? l : b.legend.symbolStrokeColor;
        const $ = x === undefined ? ((u = Zm(h.opacity)) !== null && u !== void 0 ? u : m.opacity) : undefined;
        if (O.fill) {
          if (i === "fill" || (v && i === we)) {
            delete O.fill;
          } else {
            if (O.fill["field"]) {
              if (j) {
                delete O.fill;
              } else {
                O.fill = Yt((f = b.legend.symbolBaseFillColor) !== null && f !== void 0 ? f : "black");
                O.fillOpacity = Yt($ !== null && $ !== void 0 ? $ : 1);
              }
            } else if ((0, r.kJ)(O.fill)) {
              const e =
                (g = (p = eh((d = h.fill) !== null && d !== void 0 ? d : h.color)) !== null && p !== void 0 ? p : m.fill) !== null && g !== void 0
                  ? g
                  : v && m.color;
              if (e) {
                O.fill = Yt(e);
              }
            }
          }
        }
        if (O.stroke) {
          if (i === "stroke" || (!v && i === we)) {
            delete O.stroke;
          } else {
            if (O.stroke["field"] || w) {
              delete O.stroke;
            } else if ((0, r.kJ)(O.stroke)) {
              const e = Y(eh(h.stroke || h.color), m.stroke, v ? m.color : undefined);
              if (e) {
                O.stroke = { value: e };
              }
            }
          }
        }
        if (i !== Pe) {
          const e = fc(n) && th(t, s, n);
          if (e) {
            O.opacity = [Object.assign({ test: e }, Yt($ !== null && $ !== void 0 ? $ : 1)), Yt(b.legend.unselectedOpacity)];
          } else if ($) {
            O.opacity = Yt($);
          }
        }
        O = Object.assign(Object.assign({}, O), e);
        return T(O) ? undefined : O;
      }
      function Km(e, { model: n, legendType: t, legendCmpt: i }) {
        var r;
        if (t !== "gradient") {
          return undefined;
        }
        const { config: s, markDef: o, encoding: a } = n;
        let c = {};
        const l = (r = i.get("gradientOpacity")) !== null && r !== void 0 ? r : s.legend.gradientOpacity;
        const u = l === undefined ? Zm(a.opacity) || o.opacity : undefined;
        if (u) {
          c.opacity = Yt(u);
        }
        c = Object.assign(Object.assign({}, c), e);
        return T(c) ? undefined : c;
      }
      function Ym(e, { fieldOrDatumDef: n, model: t, channel: i, legendCmpt: r }) {
        const s = t.legend(i) || {};
        const o = t.config;
        const a = fc(n) ? th(t, r, n) : undefined;
        const c = a ? [{ test: a, value: 1 }, { value: o.legend.unselectedOpacity }] : undefined;
        const { format: l, formatType: u } = s;
        let f = undefined;
        if (Fa(u)) {
          f = Ta({ fieldOrDatumDef: n, field: "datum.value", format: l, formatType: u, config: o });
        } else if (l === undefined && u === undefined && o.customFormatTypes) {
          if (n.type === "quantitative" && o.numberFormatType) {
            f = Ta({ fieldOrDatumDef: n, field: "datum.value", format: o.numberFormat, formatType: o.numberFormatType, config: o });
          } else if (n.type === "temporal" && o.timeFormatType && fc(n) && n.timeUnit === undefined) {
            f = Ta({ fieldOrDatumDef: n, field: "datum.value", format: o.timeFormat, formatType: o.timeFormatType, config: o });
          }
        }
        const d = Object.assign(Object.assign(Object.assign({}, c ? { opacity: c } : {}), f ? { text: f } : {}), e);
        return T(d) ? undefined : d;
      }
      function Qm(e, { legendCmpt: n }) {
        const t = n.get("selections");
        return (t === null || t === void 0 ? void 0 : t.length) ? Object.assign(Object.assign({}, e), { fill: { value: "transparent" } }) : e;
      }
      function Zm(e) {
        return nh(e, (e, n) => Math.max(e, n.value));
      }
      function eh(e) {
        return nh(e, (e, n) => Y(e, n.value));
      }
      function nh(e, n) {
        if (uc(e)) {
          return (0, r.IX)(e.condition).reduce(n, e.value);
        } else if (vc(e)) {
          return e.value;
        }
        return undefined;
      }
      function th(e, n, t) {
        const i = n.get("selections");
        if (!(i === null || i === void 0 ? void 0 : i.length)) return undefined;
        const s = (0, r.m8)(t.field);
        return i
          .map((e) => {
            const n = (0, r.m8)(I(e) + Pg);
            return `(!length(data(${n})) || (${e}[${s}] && indexof(${e}[${s}], datum.value) >= 0))`;
          })
          .join(" || ");
      }
      const ih = {
        direction: ({ direction: e }) => e,
        format: ({ fieldOrDatumDef: e, legend: n, config: t }) => {
          const { format: i, formatType: r } = n;
          return Aa(e, e.type, i, r, t, false);
        },
        formatType: ({ legend: e, fieldOrDatumDef: n, scaleType: t }) => {
          const { formatType: i } = e;
          return Ma(i, n, t);
        },
        gradientLength: (e) => {
          var n, t;
          const { legend: i, legendConfig: r } = e;
          return (t = (n = i.gradientLength) !== null && n !== void 0 ? n : r.gradientLength) !== null && t !== void 0 ? t : fh(e);
        },
        labelOverlap: ({ legend: e, legendConfig: n, scaleType: t }) => {
          var i, r;
          return (r = (i = e.labelOverlap) !== null && i !== void 0 ? i : n.labelOverlap) !== null && r !== void 0 ? r : ph(t);
        },
        symbolType: ({ legend: e, markDef: n, channel: t, encoding: i }) => {
          var r;
          return (r = e.symbolType) !== null && r !== void 0 ? r : sh(n.type, t, i.shape, n.shape);
        },
        title: ({ fieldOrDatumDef: e, config: n }) => Ac(e, n, { allowDisabling: true }),
        type: ({ legendType: e, scaleType: n, channel: t }) => {
          if (Ke(t) && bo(n)) {
            if (e === "gradient") {
              return undefined;
            }
          } else if (e === "symbol") {
            return undefined;
          }
          return e;
        },
        values: ({ fieldOrDatumDef: e, legend: n }) => rh(n, e),
      };
      function rh(e, n) {
        const t = e.values;
        if ((0, r.kJ)(t)) {
          return Zc(n, t);
        } else if (Mt(t)) {
          return t;
        }
        return undefined;
      }
      function sh(e, n, t, i) {
        var r;
        if (n !== "shape") {
          const e = (r = eh(t)) !== null && r !== void 0 ? r : i;
          if (e) {
            return e;
          }
        }
        switch (e) {
          case "bar":
          case "rect":
          case "image":
          case "square":
            return "square";
          case "line":
          case "trail":
          case "rule":
            return "stroke";
          case "arc":
          case "point":
          case "circle":
          case "tick":
          case "geoshape":
          case "area":
          case "text":
            return "circle";
        }
      }
      function oh(e) {
        if (e === "gradient") {
          return 20;
        }
        return undefined;
      }
      function ah(e) {
        const { legend: n } = e;
        return Y(n.type, ch(e));
      }
      function ch({ channel: e, timeUnit: n, scaleType: t }) {
        if (Ke(e)) {
          if ($(["quarter", "month", "day"], n)) {
            return "symbol";
          }
          if (bo(t)) {
            return "gradient";
          }
        }
        return "symbol";
      }
      function lh({ legendConfig: e, legendType: n, orient: t, legend: i }) {
        var r, s;
        return (s = (r = i.direction) !== null && r !== void 0 ? r : e[n ? "gradientDirection" : "symbolDirection"]) !== null && s !== void 0
          ? s
          : uh(t, n);
      }
      function uh(e, n) {
        switch (e) {
          case "top":
          case "bottom":
            return "horizontal";
          case "left":
          case "right":
          case "none":
          case undefined:
            return undefined;
          default:
            return n === "gradient" ? "horizontal" : undefined;
        }
      }
      function fh({ legendConfig: e, model: n, direction: t, orient: i, scaleType: r }) {
        const { gradientHorizontalMaxLength: s, gradientHorizontalMinLength: o, gradientVerticalMaxLength: a, gradientVerticalMinLength: c } = e;
        if (bo(r)) {
          if (t === "horizontal") {
            if (i === "top" || i === "bottom") {
              return dh(n, "width", o, s);
            } else {
              return o;
            }
          } else {
            return dh(n, "height", c, a);
          }
        }
        return undefined;
      }
      function dh(e, n, t, i) {
        const r = e.getSizeSignalRef(n).signal;
        return { signal: `clamp(${r}, ${t}, ${i})` };
      }
      function ph(e) {
        if ($(["quantile", "threshold", "log", "symlog"], e)) {
          return "greedy";
        }
        return undefined;
      }
      function gh(e) {
        const n = Uy(e) ? mh(e) : vh(e);
        e.component.legends = n;
        return n;
      }
      function mh(e) {
        const { encoding: n } = e;
        const t = {};
        for (const i of [we, ...hu]) {
          const r = Wc(n[i]);
          if (!r || !e.getScaleComponent(i)) {
            continue;
          }
          if (i === Se && fc(r) && r.type === Ys) {
            continue;
          }
          t[i] = yh(e, i);
        }
        return t;
      }
      function hh(e, n) {
        const t = e.scaleName(n);
        if (e.mark === "trail") {
          if (n === "color") {
            return { stroke: t };
          } else if (n === "size") {
            return { strokeWidth: t };
          }
        }
        if (n === "color") {
          return e.markDef.filled ? { fill: t } : { stroke: t };
        }
        return { [n]: t };
      }
      function bh(e, n, t, i) {
        switch (n) {
          case "disable":
            return t !== undefined;
          case "values":
            return !!(t === null || t === void 0 ? void 0 : t.values);
          case "title":
            if (n === "title" && e === (i === null || i === void 0 ? void 0 : i.title)) {
              return true;
            }
        }
        return e === (t || {})[n];
      }
      function yh(e, n) {
        var t, i, r;
        let s = e.legend(n);
        const { markDef: o, encoding: a, config: c } = e;
        const l = c.legend;
        const u = new Gm({}, hh(e, n));
        yg(e, n, u);
        const f = s !== undefined ? !s : l.disable;
        u.set("disable", f, s !== undefined);
        if (f) {
          return u;
        }
        s = s || {};
        const d = e.getScaleComponent(n).get("type");
        const p = Wc(a[n]);
        const g = fc(p) ? ((t = ks(p.timeUnit)) === null || t === void 0 ? void 0 : t.unit) : undefined;
        const m = s.orient || c.legend.orient || "right";
        const h = ah({ legend: s, channel: n, timeUnit: g, scaleType: d });
        const b = lh({ legend: s, legendType: h, orient: m, legendConfig: l });
        const y = {
          legend: s,
          channel: n,
          model: e,
          markDef: o,
          encoding: a,
          fieldOrDatumDef: p,
          legendConfig: l,
          config: c,
          scaleType: d,
          orient: m,
          legendType: h,
          direction: b,
        };
        for (const w of Jm) {
          if ((h === "gradient" && w.startsWith("symbol")) || (h === "symbol" && w.startsWith("gradient"))) {
            continue;
          }
          const t = w in ih ? ih[w](y) : s[w];
          if (t !== undefined) {
            const i = bh(t, w, s, e.fieldDef(n));
            if (i || c.legend[w] === undefined) {
              u.set(w, t, i);
            }
          }
        }
        const v = (i = s === null || s === void 0 ? void 0 : s.encoding) !== null && i !== void 0 ? i : {};
        const O = u.get("selections");
        const x = {};
        const j = { fieldOrDatumDef: p, model: e, channel: n, legendCmpt: u, legendType: h };
        for (const w of ["labels", "legend", "title", "symbols", "gradient", "entries"]) {
          const n = Wm((r = v[w]) !== null && r !== void 0 ? r : {}, e);
          const t = w in Xm ? Xm[w](n, j) : n;
          if (t !== undefined && !T(t)) {
            x[w] = Object.assign(
              Object.assign(
                Object.assign({}, (O === null || O === void 0 ? void 0 : O.length) && fc(p) ? { name: `${I(p.field)}_legend_${w}` } : {}),
                (O === null || O === void 0 ? void 0 : O.length) ? { interactive: !!O } : {}
              ),
              { update: t }
            );
          }
        }
        if (!T(x)) {
          u.set("encode", x, !!(s === null || s === void 0 ? void 0 : s.encoding));
        }
        return u;
      }
      function vh(e) {
        const { legends: n, resolve: t } = e.component;
        for (const i of e.children) {
          gh(i);
          for (const r of A(i.component.legends)) {
            t.legend[r] = Hm(e.component.resolve, r);
            if (t.legend[r] === "shared") {
              n[r] = Oh(n[r], i.component.legends[r]);
              if (!n[r]) {
                t.legend[r] = "independent";
                delete n[r];
              }
            }
          }
        }
        for (const i of A(n)) {
          for (const n of e.children) {
            if (!n.component.legends[i]) {
              continue;
            }
            if (t.legend[i] === "shared") {
              delete n.component.legends[i];
            }
          }
        }
        return n;
      }
      function Oh(e, n) {
        var t, i, r, s;
        if (!e) {
          return n.clone();
        }
        const o = e.getWithExplicit("orient");
        const a = n.getWithExplicit("orient");
        if (o.explicit && a.explicit && o.value !== a.value) {
          return undefined;
        }
        let c = false;
        for (const l of Jm) {
          const t = Ed(e.getWithExplicit(l), n.getWithExplicit(l), l, "legend", (e, n) => {
            switch (l) {
              case "symbolType":
                return xh(e, n);
              case "title":
                return ui(e, n);
              case "type":
                c = true;
                return Fd("symbol");
            }
            return Cd(e, n, l, "legend");
          });
          e.setWithExplicit(l, t);
        }
        if (c) {
          if ((i = (t = e.implicit) === null || t === void 0 ? void 0 : t.encode) === null || i === void 0 ? void 0 : i.gradient) {
            W(e.implicit, ["encode", "gradient"]);
          }
          if ((s = (r = e.explicit) === null || r === void 0 ? void 0 : r.encode) === null || s === void 0 ? void 0 : s.gradient) {
            W(e.explicit, ["encode", "gradient"]);
          }
        }
        return e;
      }
      function xh(e, n) {
        if (n.value === "circle") {
          return n;
        }
        return e;
      }
      var jh =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      function wh(e, n, t, i) {
        var r, s, o;
        var a, c;
        (r = e.encode) !== null && r !== void 0 ? r : (e.encode = {});
        (s = (a = e.encode)[n]) !== null && s !== void 0 ? s : (a[n] = {});
        (o = (c = e.encode[n]).update) !== null && o !== void 0 ? o : (c.update = {});
        e.encode[n].update[t] = i;
      }
      function $h(e) {
        const n = e.component.legends;
        const t = {};
        for (const r of A(n)) {
          const i = e.getScaleComponent(r);
          const s = x(i.get("domains"));
          if (t[s]) {
            for (const e of t[s]) {
              const i = Oh(e, n[r]);
              if (!i) {
                t[s].push(n[r]);
              }
            }
          } else {
            t[s] = [n[r].clone()];
          }
        }
        const i = M(t)
          .flat()
          .map((n) => kh(n, e.config))
          .filter((e) => e !== undefined);
        return i;
      }
      function kh(e, n) {
        var t, i, r;
        const s = e.combine(),
          { disable: o, labelExpr: a, selections: c } = s,
          l = jh(s, ["disable", "labelExpr", "selections"]);
        if (o) {
          return undefined;
        }
        if (n.aria === false && l.aria == undefined) {
          l.aria = false;
        }
        if ((t = l.encode) === null || t === void 0 ? void 0 : t.symbols) {
          const e = l.encode.symbols.update;
          if (e.fill && e.fill["value"] !== "transparent" && !e.stroke && !l.stroke) {
            e.stroke = { value: "transparent" };
          }
          for (const n of hu) {
            if (l[n]) {
              delete e[n];
            }
          }
        }
        if (!l.title) {
          delete l.title;
        }
        if (a !== undefined) {
          let e = a;
          if (
            ((r = (i = l.encode) === null || i === void 0 ? void 0 : i.labels) === null || r === void 0 ? void 0 : r.update) &&
            Mt(l.encode.labels.update.text)
          ) {
            e = X(a, "datum.label", l.encode.labels.update.text.signal);
          }
          wh(l, "labels", "text", { signal: e });
        }
        return l;
      }
      function Sh(e) {
        if (Jy(e) || By(e)) {
          return Dh(e);
        } else {
          return _h(e);
        }
      }
      function Dh(e) {
        return e.children.reduce((e, n) => e.concat(n.assembleProjections()), _h(e));
      }
      function _h(e) {
        const n = e.component.projection;
        if (!n || n.merged) {
          return [];
        }
        const t = n.combine();
        const { name: i } = t;
        if (!n.data) {
          return [Object.assign(Object.assign({ name: i }, { translate: { signal: "[width / 2, height / 2]" } }), t)];
        } else {
          const r = { signal: `[${n.size.map((e) => e.signal).join(", ")}]` };
          const s = n.data.reduce((n, t) => {
            const i = Mt(t) ? t.signal : `data('${e.lookupDataSource(t)}')`;
            if (!$(n, i)) {
              n.push(i);
            }
            return n;
          }, []);
          if (s.length <= 0) {
            throw new Error("Projection's fit didn't find any data sources");
          }
          return [Object.assign({ name: i, size: r, fit: { signal: s.length > 1 ? `[${s.join(", ")}]` : s[0] } }, t)];
        }
      }
      const Ph = [
        "type",
        "clipAngle",
        "clipExtent",
        "center",
        "rotate",
        "precision",
        "reflectX",
        "reflectY",
        "coefficient",
        "distance",
        "fraction",
        "lobes",
        "parallel",
        "radius",
        "ratio",
        "spacing",
        "tilt",
      ];
      class Fh extends _d {
        constructor(e, n, t, i) {
          super(Object.assign({}, n), { name: e });
          this.specifiedProjection = n;
          this.size = t;
          this.data = i;
          this.merged = false;
        }
        get isFit() {
          return !!this.data;
        }
      }
      function zh(e) {
        e.component.projection = Uy(e) ? Ch(e) : Th(e);
      }
      function Ch(e) {
        var n;
        if (e.hasProjection) {
          const t = Et(e.specifiedProjection);
          const i = !(t && (t.scale != null || t.translate != null));
          const r = i ? [e.getSizeSignalRef("width"), e.getSizeSignalRef("height")] : undefined;
          const s = i ? Eh(e) : undefined;
          const o = new Fh(
            e.projectionName(true),
            Object.assign(Object.assign({}, (n = Et(e.config.projection)) !== null && n !== void 0 ? n : {}), t !== null && t !== void 0 ? t : {}),
            r,
            s
          );
          if (!o.get("type")) {
            o.set("type", "equalEarth", false);
          }
          return o;
        }
        return undefined;
      }
      function Eh(e) {
        const n = [];
        const { encoding: t } = e;
        for (const i of [
          [Oe, ve],
          [je, xe],
        ]) {
          if (Wc(t[i[0]]) || Wc(t[i[1]])) {
            n.push({ signal: e.getName(`geojson_${n.length}`) });
          }
        }
        if (e.channelHasField(Se) && e.typedFieldDef(Se).type === Ys) {
          n.push({ signal: e.getName(`geojson_${n.length}`) });
        }
        if (n.length === 0) {
          n.push(e.requestDataName(Wd.Main));
        }
        return n;
      }
      function Nh(e, n) {
        const t = S(Ph, (t) => {
          if (!(0, r.nr)(e.explicit, t) && !(0, r.nr)(n.explicit, t)) {
            return true;
          }
          if ((0, r.nr)(e.explicit, t) && (0, r.nr)(n.explicit, t) && h(e.get(t), n.get(t))) {
            return true;
          }
          return false;
        });
        const i = h(e.size, n.size);
        if (i) {
          if (t) {
            return e;
          } else if (h(e.explicit, {})) {
            return n;
          } else if (h(n.explicit, {})) {
            return e;
          }
        }
        return null;
      }
      function Th(e) {
        if (e.children.length === 0) {
          return undefined;
        }
        let n;
        for (const i of e.children) {
          zh(i);
        }
        const t = S(e.children, (e) => {
          const t = e.component.projection;
          if (!t) {
            return true;
          } else if (!n) {
            n = t;
            return true;
          } else {
            const e = Nh(n, t);
            if (e) {
              n = e;
            }
            return !!e;
          }
        });
        if (n && t) {
          const t = e.projectionName(true);
          const i = new Fh(t, n.specifiedProjection, n.size, b(n.data));
          for (const n of e.children) {
            const e = n.component.projection;
            if (e) {
              if (e.isFit) {
                i.data.push(...n.component.projection.data);
              }
              n.renameProjection(e.get("name"), t);
              e.merged = true;
            }
          }
          return i;
        }
        return undefined;
      }
      var Ah =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      function Mh(e, n, t, i) {
        var r, s;
        if (el(n, t)) {
          const o = Uy(e) ? ((s = (r = e.axis(t)) !== null && r !== void 0 ? r : e.legend(t)) !== null && s !== void 0 ? s : {}) : {};
          const a = Sc(n, { expr: "datum" });
          const c = Sc(n, { expr: "datum", binSuffix: "end" });
          return { formulaAs: Sc(n, { binSuffix: "range", forAs: true }), formula: Wa(a, c, o.format, o.formatType, i) };
        }
        return {};
      }
      function Lh(e, n) {
        return `${St(e)}_${n}`;
      }
      function qh(e, n) {
        return { signal: e.getName(`${n}_bins`), extentSignal: e.getName(`${n}_extent`) };
      }
      function Ih(e, n, t) {
        var i;
        const r = (i = Gc(t, undefined)) !== null && i !== void 0 ? i : {};
        const s = Lh(r, n);
        return e.getName(`${s}_bins`);
      }
      function Rh(e) {
        return "as" in e;
      }
      function Wh(e, n, t) {
        let i;
        let s;
        if (Rh(e)) {
          i = (0, r.HD)(e.as) ? [e.as, `${e.as}_end`] : [e.as[0], e.as[1]];
        } else {
          i = [Sc(e, { forAs: true }), Sc(e, { binSuffix: "end", forAs: true })];
        }
        const o = Object.assign({}, Gc(n, undefined));
        const a = Lh(o, e.field);
        const { signal: c, extentSignal: l } = qh(t, a);
        if (Ft(o.extent)) {
          const e = o.extent;
          s = Jg(t, e.param, e);
          delete o.extent;
        }
        const u = Object.assign(
          Object.assign(Object.assign({ bin: o, field: e.field, as: [i] }, c ? { signal: c } : {}), l ? { extentSignal: l } : {}),
          s ? { span: s } : {}
        );
        return { key: a, binComponent: u };
      }
      class Uh extends ep {
        clone() {
          return new Uh(null, b(this.bins));
        }
        constructor(e, n) {
          super(e);
          this.bins = n;
        }
        static makeFromEncoding(e, n) {
          const t = n.reduceFieldDef((e, t, i) => {
            if (yc(t) && Dt(t.bin)) {
              const { key: r, binComponent: s } = Wh(t, t.bin, n);
              e[r] = Object.assign(Object.assign(Object.assign({}, s), e[r]), Mh(n, t, i, n.config));
            }
            return e;
          }, {});
          if (T(t)) {
            return null;
          }
          return new Uh(e, t);
        }
        static makeFromTransform(e, n, t) {
          const { key: i, binComponent: r } = Wh(n, n.bin, t);
          return new Uh(e, { [i]: r });
        }
        merge(e, n) {
          for (const t of A(e.bins)) {
            if (t in this.bins) {
              n(e.bins[t].signal, this.bins[t].signal);
              this.bins[t].as = P([...this.bins[t].as, ...e.bins[t].as], j);
            } else {
              this.bins[t] = e.bins[t];
            }
          }
          for (const t of e.children) {
            e.removeChild(t);
            t.parent = this;
          }
          e.remove();
        }
        producedFields() {
          return new Set(
            M(this.bins)
              .map((e) => e.as)
              .flat(2)
          );
        }
        dependentFields() {
          return new Set(M(this.bins).map((e) => e.field));
        }
        hash() {
          return `Bin ${j(this.bins)}`;
        }
        assemble() {
          return M(this.bins).flatMap((e) => {
            const n = [];
            const [t, ...i] = e.as;
            const r = e.bin,
              { extent: s } = r,
              o = Ah(r, ["extent"]);
            const a = Object.assign(
              Object.assign(
                Object.assign({ type: "bin", field: G(e.field), as: t, signal: e.signal }, !Ft(s) ? { extent: s } : { extent: null }),
                e.span ? { span: { signal: `span(${e.span})` } } : {}
              ),
              o
            );
            if (!s && e.extentSignal) {
              n.push({ type: "extent", field: G(e.field), signal: e.extentSignal });
              a.extent = { signal: e.extentSignal };
            }
            n.push(a);
            for (const c of i) {
              for (let e = 0; e < 2; e++) {
                n.push({ type: "formula", expr: Sc({ field: t[e] }, { expr: "datum" }), as: c[e] });
              }
            }
            if (e.formula) {
              n.push({ type: "formula", expr: e.formula, as: e.formulaAs });
            }
            return n;
          });
        }
      }
      function Hh(e, n, t, i) {
        var r;
        const s = Uy(i) ? i.encoding[yn(n)] : undefined;
        if (yc(t) && Uy(i) && oc(t, s, i.markDef, i.config)) {
          e.add(Sc(t, {}));
          e.add(Sc(t, { suffix: "end" }));
          if (t.bin && el(t, n)) {
            e.add(Sc(t, { binSuffix: "range" }));
          }
        } else if (Ge(n)) {
          const t = Je(n);
          e.add(i.getName(t));
        } else {
          e.add(Sc(t));
        }
        if (Oc(t) && wo((r = t.scale) === null || r === void 0 ? void 0 : r.range)) {
          e.add(t.scale.range.field);
        }
        return e;
      }
      function Bh(e, n) {
        var t;
        for (const i of A(n)) {
          const r = n[i];
          for (const n of A(r)) {
            if (i in e) {
              e[i][n] = new Set([...((t = e[i][n]) !== null && t !== void 0 ? t : []), ...r[n]]);
            } else {
              e[i] = { [n]: r[n] };
            }
          }
        }
      }
      class Jh extends ep {
        clone() {
          return new Jh(null, new Set(this.dimensions), b(this.measures));
        }
        constructor(e, n, t) {
          super(e);
          this.dimensions = n;
          this.measures = t;
        }
        get groupBy() {
          return this.dimensions;
        }
        static makeFromEncoding(e, n) {
          let t = false;
          n.forEachFieldDef((e) => {
            if (e.aggregate) {
              t = true;
            }
          });
          const i = {};
          const r = new Set();
          if (!t) {
            return null;
          }
          n.forEachFieldDef((e, t) => {
            var s, o, a, c;
            const { aggregate: l, field: u } = e;
            if (l) {
              if (l === "count") {
                (s = i["*"]) !== null && s !== void 0 ? s : (i["*"] = {});
                i["*"]["count"] = new Set([Sc(e, { forAs: true })]);
              } else {
                if (yt(l) || vt(l)) {
                  const e = yt(l) ? "argmin" : "argmax";
                  const n = l[e];
                  (o = i[n]) !== null && o !== void 0 ? o : (i[n] = {});
                  i[n][e] = new Set([Sc({ op: e, field: n }, { forAs: true })]);
                } else {
                  (a = i[u]) !== null && a !== void 0 ? a : (i[u] = {});
                  i[u][l] = new Set([Sc(e, { forAs: true })]);
                }
                if (lt(t) && n.scaleDomain(t) === "unaggregated") {
                  (c = i[u]) !== null && c !== void 0 ? c : (i[u] = {});
                  i[u]["min"] = new Set([Sc({ field: u, aggregate: "min" }, { forAs: true })]);
                  i[u]["max"] = new Set([Sc({ field: u, aggregate: "max" }, { forAs: true })]);
                }
              }
            } else {
              Hh(r, t, e, n);
            }
          });
          if (r.size + A(i).length === 0) {
            return null;
          }
          return new Jh(e, r, i);
        }
        static makeFromTransform(e, n) {
          var t, i, r;
          const s = new Set();
          const o = {};
          for (const a of n.aggregate) {
            const { op: e, field: n, as: r } = a;
            if (e) {
              if (e === "count") {
                (t = o["*"]) !== null && t !== void 0 ? t : (o["*"] = {});
                o["*"]["count"] = new Set([r ? r : Sc(a, { forAs: true })]);
              } else {
                (i = o[n]) !== null && i !== void 0 ? i : (o[n] = {});
                o[n][e] = new Set([r ? r : Sc(a, { forAs: true })]);
              }
            }
          }
          for (const a of (r = n.groupby) !== null && r !== void 0 ? r : []) {
            s.add(a);
          }
          if (s.size + A(o).length === 0) {
            return null;
          }
          return new Jh(e, s, o);
        }
        merge(e) {
          if (z(this.dimensions, e.dimensions)) {
            Bh(this.measures, e.measures);
            return true;
          }
          Yr("different dimensions, cannot merge");
          return false;
        }
        addDimensions(e) {
          e.forEach(this.dimensions.add, this.dimensions);
        }
        dependentFields() {
          return new Set([...this.dimensions, ...A(this.measures)]);
        }
        producedFields() {
          const e = new Set();
          for (const n of A(this.measures)) {
            for (const t of A(this.measures[n])) {
              const i = this.measures[n][t];
              if (i.size === 0) {
                e.add(`${t}_${n}`);
              } else {
                i.forEach(e.add, e);
              }
            }
          }
          return e;
        }
        hash() {
          return `Aggregate ${j({ dimensions: this.dimensions, measures: this.measures })}`;
        }
        assemble() {
          const e = [];
          const n = [];
          const t = [];
          for (const r of A(this.measures)) {
            for (const i of A(this.measures[r])) {
              for (const s of this.measures[r][i]) {
                t.push(s);
                e.push(i);
                n.push(r === "*" ? null : G(r));
              }
            }
          }
          const i = { type: "aggregate", groupby: [...this.dimensions].map(G), ops: e, fields: n, as: t };
          return i;
        }
      }
      class Gh extends ep {
        constructor(e, n, t, i) {
          super(e);
          this.model = n;
          this.name = t;
          this.data = i;
          for (const s of Qe) {
            const e = n.facet[s];
            if (e) {
              const { bin: t, sort: i } = e;
              this[s] = Object.assign(
                { name: n.getName(`${s}_domain`), fields: [Sc(e), ...(Dt(t) ? [Sc(e, { binSuffix: "end" })] : [])] },
                Xa(i) ? { sortField: i } : (0, r.kJ)(i) ? { sortIndexField: Om(e, s) } : {}
              );
            }
          }
          this.childModel = n.child;
        }
        hash() {
          let e = `Facet`;
          for (const n of Qe) {
            if (this[n]) {
              e += ` ${n.charAt(0)}:${j(this[n])}`;
            }
          }
          return e;
        }
        get fields() {
          var e;
          const n = [];
          for (const t of Qe) {
            if ((e = this[t]) === null || e === void 0 ? void 0 : e.fields) {
              n.push(...this[t].fields);
            }
          }
          return n;
        }
        dependentFields() {
          const e = new Set(this.fields);
          for (const n of Qe) {
            if (this[n]) {
              if (this[n].sortField) {
                e.add(this[n].sortField.field);
              }
              if (this[n].sortIndexField) {
                e.add(this[n].sortIndexField);
              }
            }
          }
          return e;
        }
        producedFields() {
          return new Set();
        }
        getSource() {
          return this.name;
        }
        getChildIndependentFieldsWithStep() {
          const e = {};
          for (const n of Rn) {
            const t = this.childModel.component.scales[n];
            if (t && !t.merged) {
              const i = t.get("type");
              const r = t.get("range");
              if (mo(i) && Lt(r)) {
                const t = Zb(this.childModel, n);
                const i = Qb(t);
                if (i) {
                  e[n] = i;
                } else {
                  Vr(hi(n));
                }
              }
            }
          }
          return e;
        }
        assembleRowColumnHeaderData(e, n, t) {
          const i = { row: "y", column: "x", facet: undefined }[e];
          const r = [];
          const s = [];
          const o = [];
          if (i && t && t[i]) {
            if (n) {
              r.push(`distinct_${t[i]}`);
              s.push("max");
            } else {
              r.push(t[i]);
              s.push("distinct");
            }
            o.push(`distinct_${t[i]}`);
          }
          const { sortField: a, sortIndexField: c } = this[e];
          if (a) {
            const { op: e = Ha, field: n } = a;
            r.push(n);
            s.push(e);
            o.push(Sc(a, { forAs: true }));
          } else if (c) {
            r.push(c);
            s.push("max");
            o.push(c);
          }
          return {
            name: this[e].name,
            source: n !== null && n !== void 0 ? n : this.data,
            transform: [Object.assign({ type: "aggregate", groupby: this[e].fields }, r.length ? { fields: r, ops: s, as: o } : {})],
          };
        }
        assembleFacetHeaderData(e) {
          var n, t;
          const { columns: i } = this.model.layout;
          const { layoutHeaders: r } = this.model.component;
          const s = [];
          const o = {};
          for (const l of $m) {
            for (const e of km) {
              const i = (n = r[l] && r[l][e]) !== null && n !== void 0 ? n : [];
              for (const e of i) {
                if (((t = e.axes) === null || t === void 0 ? void 0 : t.length) > 0) {
                  o[l] = true;
                  break;
                }
              }
            }
            if (o[l]) {
              const e = `length(data("${this.facet.name}"))`;
              const n = l === "row" ? (i ? { signal: `ceil(${e} / ${i})` } : 1) : i ? { signal: `min(${e}, ${i})` } : { signal: e };
              s.push({ name: `${this.facet.name}_${l}`, transform: [{ type: "sequence", start: 0, stop: n }] });
            }
          }
          const { row: a, column: c } = o;
          if (a || c) {
            s.unshift(this.assembleRowColumnHeaderData("facet", null, e));
          }
          return s;
        }
        assemble() {
          var e, n;
          const t = [];
          let i = null;
          const r = this.getChildIndependentFieldsWithStep();
          const { column: s, row: o, facet: a } = this;
          if (s && o && (r.x || r.y)) {
            i = `cross_${this.column.name}_${this.row.name}`;
            const s = [].concat((e = r.x) !== null && e !== void 0 ? e : [], (n = r.y) !== null && n !== void 0 ? n : []);
            const o = s.map(() => "distinct");
            t.push({ name: i, source: this.data, transform: [{ type: "aggregate", groupby: this.fields, fields: s, ops: o }] });
          }
          for (const c of [ae, oe]) {
            if (this[c]) {
              t.push(this.assembleRowColumnHeaderData(c, i, r));
            }
          }
          if (a) {
            const e = this.assembleFacetHeaderData(r);
            if (e) {
              t.push(...e);
            }
          }
          return t;
        }
      }
      function Xh(e) {
        if ((e.startsWith("'") && e.endsWith("'")) || (e.startsWith('"') && e.endsWith('"'))) {
          return e.slice(1, -1);
        }
        return e;
      }
      function Vh(e, n) {
        const t = H(e);
        if (n === "number") {
          return `toNumber(${t})`;
        } else if (n === "boolean") {
          return `toBoolean(${t})`;
        } else if (n === "string") {
          return `toString(${t})`;
        } else if (n === "date") {
          return `toDate(${t})`;
        } else if (n === "flatten") {
          return t;
        } else if (n.startsWith("date:")) {
          const e = Xh(n.slice(5, n.length));
          return `timeParse(${t},'${e}')`;
        } else if (n.startsWith("utc:")) {
          const e = Xh(n.slice(4, n.length));
          return `utcParse(${t},'${e}')`;
        } else {
          Vr(zi(n));
          return null;
        }
      }
      function Kh(e) {
        const n = {};
        g(e.filter, (e) => {
          var t;
          if (As(e)) {
            let i = null;
            if (_s(e)) {
              i = Vt(e.equal);
            } else if (Fs(e)) {
              i = Vt(e.lte);
            } else if (Ps(e)) {
              i = Vt(e.lt);
            } else if (zs(e)) {
              i = Vt(e.gt);
            } else if (Cs(e)) {
              i = Vt(e.gte);
            } else if (Es(e)) {
              i = e.range[0];
            } else if (Ns(e)) {
              i = ((t = e.oneOf) !== null && t !== void 0 ? t : e["in"])[0];
            }
            if (i) {
              if (Qr(i)) {
                n[e.field] = "date";
              } else if ((0, r.hj)(i)) {
                n[e.field] = "number";
              } else if ((0, r.HD)(i)) {
                n[e.field] = "string";
              }
            }
            if (e.timeUnit) {
              n[e.field] = "date";
            }
          }
        });
        return n;
      }
      function Yh(e) {
        const n = {};
        function t(e) {
          if (Kc(e)) {
            n[e.field] = "date";
          } else if (e.type === "quantitative" && wt(e.aggregate)) {
            n[e.field] = "number";
          } else if (K(e.field) > 1) {
            if (!(e.field in n)) {
              n[e.field] = "flatten";
            }
          } else if (Oc(e) && Xa(e.sort) && K(e.sort.field) > 1) {
            if (!(e.sort.field in n)) {
              n[e.sort.field] = "flatten";
            }
          }
        }
        if (Uy(e) || Hy(e)) {
          e.forEachFieldDef((n, i) => {
            if (yc(n)) {
              t(n);
            } else {
              const r = hn(i);
              const s = e.fieldDef(r);
              t(Object.assign(Object.assign({}, n), { type: s.type }));
            }
          });
        }
        if (Uy(e)) {
          const { mark: t, markDef: i, encoding: r } = e;
          if (ea(t) && !e.encoding.order) {
            const e = i.orient === "horizontal" ? "y" : "x";
            const t = r[e];
            if (fc(t) && t.type === "quantitative" && !(t.field in n)) {
              n[t.field] = "number";
            }
          }
        }
        return n;
      }
      function Qh(e) {
        const n = {};
        if (Uy(e) && e.component.selection) {
          for (const t of A(e.component.selection)) {
            const i = e.component.selection[t];
            for (const e of i.project.items) {
              if (!e.channel && K(e.field) > 1) {
                n[e.field] = "flatten";
              }
            }
          }
        }
        return n;
      }
      class Zh extends ep {
        clone() {
          return new Zh(null, b(this._parse));
        }
        constructor(e, n) {
          super(e);
          this._parse = n;
        }
        hash() {
          return `Parse ${j(this._parse)}`;
        }
        static makeExplicit(e, n, t) {
          var i;
          let r = {};
          const s = n.data;
          if (!Ld(s) && ((i = s === null || s === void 0 ? void 0 : s.format) === null || i === void 0 ? void 0 : i.parse)) {
            r = s.format.parse;
          }
          return this.makeWithAncestors(e, r, {}, t);
        }
        static makeWithAncestors(e, n, t, i) {
          for (const o of A(t)) {
            const e = i.getWithExplicit(o);
            if (e.value !== undefined) {
              if (e.explicit || e.value === t[o] || e.value === "derived" || t[o] === "flatten") {
                delete t[o];
              } else {
                Vr(Ci(o, t[o], e.value));
              }
            }
          }
          for (const o of A(n)) {
            const e = i.get(o);
            if (e !== undefined) {
              if (e === n[o]) {
                delete n[o];
              } else {
                Vr(Ci(o, n[o], e));
              }
            }
          }
          const r = new _d(n, t);
          i.copyAll(r);
          const s = {};
          for (const o of A(r.combine())) {
            const e = r.get(o);
            if (e !== null) {
              s[o] = e;
            }
          }
          if (A(s).length === 0 || i.parseNothing) {
            return null;
          }
          return new Zh(e, s);
        }
        get parse() {
          return this._parse;
        }
        merge(e) {
          this._parse = Object.assign(Object.assign({}, this._parse), e.parse);
          e.remove();
        }
        assembleFormatParse() {
          const e = {};
          for (const n of A(this._parse)) {
            const t = this._parse[n];
            if (K(n) === 1) {
              e[n] = t;
            }
          }
          return e;
        }
        producedFields() {
          return new Set(A(this._parse));
        }
        dependentFields() {
          return new Set(A(this._parse));
        }
        assembleTransforms(e = false) {
          return A(this._parse)
            .filter((n) => (e ? K(n) > 1 : true))
            .map((e) => {
              const n = Vh(e, this._parse[e]);
              if (!n) {
                return null;
              }
              const t = { type: "formula", expr: n, as: V(e) };
              return t;
            })
            .filter((e) => e !== null);
        }
      }
      class eb extends ep {
        clone() {
          return new eb(null);
        }
        constructor(e) {
          super(e);
        }
        dependentFields() {
          return new Set();
        }
        producedFields() {
          return new Set([Ou]);
        }
        hash() {
          return "Identifier";
        }
        assemble() {
          return { type: "identifier", as: Ou };
        }
      }
      class nb extends ep {
        clone() {
          return new nb(null, this.params);
        }
        constructor(e, n) {
          super(e);
          this.params = n;
        }
        dependentFields() {
          return new Set();
        }
        producedFields() {
          return undefined;
        }
        hash() {
          return `Graticule ${j(this.params)}`;
        }
        assemble() {
          return Object.assign({ type: "graticule" }, this.params === true ? {} : this.params);
        }
      }
      class tb extends ep {
        clone() {
          return new tb(null, this.params);
        }
        constructor(e, n) {
          super(e);
          this.params = n;
        }
        dependentFields() {
          return new Set();
        }
        producedFields() {
          var e;
          return new Set([(e = this.params.as) !== null && e !== void 0 ? e : "data"]);
        }
        hash() {
          return `Hash ${j(this.params)}`;
        }
        assemble() {
          return Object.assign({ type: "sequence" }, this.params);
        }
      }
      class ib extends ep {
        constructor(e) {
          super(null);
          e !== null && e !== void 0 ? e : (e = { name: "source" });
          let n;
          if (!Ld(e)) {
            n = e.format ? Object.assign({}, O(e.format, ["parse"])) : {};
          }
          if (Ad(e)) {
            this._data = { values: e.values };
          } else if (Td(e)) {
            this._data = { url: e.url };
            if (!n.type) {
              let t = /(?:\.([^.]+))?$/.exec(e.url)[1];
              if (!$(["json", "csv", "tsv", "dsv", "topojson"], t)) {
                t = "json";
              }
              n.type = t;
            }
          } else if (Id(e)) {
            this._data = { values: [{ type: "Sphere" }] };
          } else if (Md(e) || Ld(e)) {
            this._data = {};
          }
          this._generator = Ld(e);
          if (e.name) {
            this._name = e.name;
          }
          if (n && !T(n)) {
            this._data.format = n;
          }
        }
        dependentFields() {
          return new Set();
        }
        producedFields() {
          return undefined;
        }
        get data() {
          return this._data;
        }
        hasName() {
          return !!this._name;
        }
        get isGenerator() {
          return this._generator;
        }
        get dataName() {
          return this._name;
        }
        set dataName(e) {
          this._name = e;
        }
        set parent(e) {
          throw new Error("Source nodes have to be roots.");
        }
        remove() {
          throw new Error("Source nodes are roots and cannot be removed.");
        }
        hash() {
          throw new Error("Cannot hash sources");
        }
        assemble() {
          return Object.assign(Object.assign({ name: this._name }, this._data), { transform: [] });
        }
      }
      var rb =
        (undefined && undefined.__classPrivateFieldSet) ||
        function (e, n, t, i, r) {
          if (i === "m") throw new TypeError("Private method is not writable");
          if (i === "a" && !r) throw new TypeError("Private accessor was defined without a setter");
          if (typeof n === "function" ? e !== n || !r : !n.has(e))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return i === "a" ? r.call(e, t) : r ? (r.value = t) : n.set(e, t), t;
        };
      var sb =
        (undefined && undefined.__classPrivateFieldGet) ||
        function (e, n, t, i) {
          if (t === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
          if (typeof n === "function" ? e !== n || !i : !n.has(e))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return t === "m" ? i : t === "a" ? i.call(e) : i ? i.value : n.get(e);
        };
      var ob;
      function ab(e) {
        return e instanceof ib || e instanceof nb || e instanceof tb;
      }
      class cb {
        constructor() {
          ob.set(this, void 0);
          rb(this, ob, false, "f");
        }
        setModified() {
          rb(this, ob, true, "f");
        }
        get modifiedFlag() {
          return sb(this, ob, "f");
        }
      }
      ob = new WeakMap();
      class lb extends cb {
        getNodeDepths(e, n, t) {
          t.set(e, n);
          for (const i of e.children) {
            this.getNodeDepths(i, n + 1, t);
          }
          return t;
        }
        optimize(e) {
          const n = this.getNodeDepths(e, 0, new Map());
          const t = [...n.entries()].sort((e, n) => n[1] - e[1]);
          for (const i of t) {
            this.run(i[0]);
          }
          return this.modifiedFlag;
        }
      }
      class ub extends cb {
        optimize(e) {
          this.run(e);
          for (const n of e.children) {
            this.optimize(n);
          }
          return this.modifiedFlag;
        }
      }
      class fb extends ub {
        mergeNodes(e, n) {
          const t = n.shift();
          for (const i of n) {
            e.removeChild(i);
            i.parent = t;
            i.remove();
          }
        }
        run(e) {
          const n = e.children.map((e) => e.hash());
          const t = {};
          for (let i = 0; i < n.length; i++) {
            if (t[n[i]] === undefined) {
              t[n[i]] = [e.children[i]];
            } else {
              t[n[i]].push(e.children[i]);
            }
          }
          for (const i of A(t)) {
            if (t[i].length > 1) {
              this.setModified();
              this.mergeNodes(e, t[i]);
            }
          }
        }
      }
      class db extends ub {
        constructor(e) {
          super();
          this.requiresSelectionId = e && Mg(e);
        }
        run(e) {
          if (e instanceof eb) {
            if (!(this.requiresSelectionId && (ab(e.parent) || e.parent instanceof Jh || e.parent instanceof Zh))) {
              this.setModified();
              e.remove();
            }
          }
        }
      }
      class pb extends cb {
        optimize(e) {
          this.run(e, new Set());
          return this.modifiedFlag;
        }
        run(e, n) {
          let t = new Set();
          if (e instanceof ip) {
            t = e.producedFields();
            if (C(t, n)) {
              this.setModified();
              e.removeFormulas(n);
              if (e.producedFields.length === 0) {
                e.remove();
              }
            }
          }
          for (const i of e.children) {
            this.run(i, new Set([...n, ...t]));
          }
        }
      }
      class gb extends ub {
        constructor() {
          super();
        }
        run(e) {
          if (e instanceof np && !e.isRequired()) {
            this.setModified();
            e.remove();
          }
        }
      }
      class mb extends lb {
        run(e) {
          if (ab(e)) {
            return;
          }
          if (e.numChildren() > 1) {
            return;
          }
          for (const n of e.children) {
            if (n instanceof Zh) {
              if (e instanceof Zh) {
                this.setModified();
                e.merge(n);
              } else {
                if (N(e.producedFields(), n.dependentFields())) {
                  continue;
                }
                this.setModified();
                n.swapWithParent();
              }
            }
          }
          return;
        }
      }
      class hb extends lb {
        run(e) {
          const n = [...e.children];
          const t = e.children.filter((e) => e instanceof Zh);
          if (e.numChildren() > 1 && t.length >= 1) {
            const i = {};
            const r = new Set();
            for (const e of t) {
              const n = e.parse;
              for (const e of A(n)) {
                if (!(e in i)) {
                  i[e] = n[e];
                } else if (i[e] !== n[e]) {
                  r.add(e);
                }
              }
            }
            for (const e of r) {
              delete i[e];
            }
            if (!T(i)) {
              this.setModified();
              const t = new Zh(e, i);
              for (const r of n) {
                if (r instanceof Zh) {
                  for (const e of A(i)) {
                    delete r.parse[e];
                  }
                }
                e.removeChild(r);
                r.parent = t;
                if (r instanceof Zh && A(r.parse).length === 0) {
                  r.remove();
                }
              }
            }
          }
        }
      }
      class bb extends lb {
        run(e) {
          if (e instanceof np || e.numChildren() > 0 || e instanceof Gh) {
          } else if (e instanceof ib) {
          } else {
            this.setModified();
            e.remove();
          }
        }
      }
      class yb extends lb {
        run(e) {
          const n = e.children.filter((e) => e instanceof ip);
          const t = n.pop();
          for (const i of n) {
            this.setModified();
            t.merge(i);
          }
        }
      }
      class vb extends lb {
        run(e) {
          const n = e.children.filter((e) => e instanceof Jh);
          const t = {};
          for (const i of n) {
            const e = j(i.groupBy);
            if (!(e in t)) {
              t[e] = [];
            }
            t[e].push(i);
          }
          for (const i of A(t)) {
            const n = t[i];
            if (n.length > 1) {
              const t = n.pop();
              for (const i of n) {
                if (t.merge(i)) {
                  e.removeChild(i);
                  i.parent = t;
                  i.remove();
                  this.setModified();
                }
              }
            }
          }
        }
      }
      class Ob extends lb {
        constructor(e) {
          super();
          this.model = e;
        }
        run(e) {
          const n = !(ab(e) || e instanceof Ug || e instanceof Zh || e instanceof eb);
          const t = [];
          const i = [];
          for (const r of e.children) {
            if (r instanceof Uh) {
              if (n && !N(e.producedFields(), r.dependentFields())) {
                t.push(r);
              } else {
                i.push(r);
              }
            }
          }
          if (t.length > 0) {
            const n = t.pop();
            for (const e of t) {
              n.merge(e, this.model.renameSignal.bind(this.model));
            }
            this.setModified();
            if (e instanceof Uh) {
              e.merge(n, this.model.renameSignal.bind(this.model));
            } else {
              n.swapWithParent();
            }
          }
          if (i.length > 1) {
            const e = i.pop();
            for (const n of i) {
              e.merge(n, this.model.renameSignal.bind(this.model));
            }
            this.setModified();
          }
        }
      }
      class xb extends lb {
        run(e) {
          const n = [...e.children];
          const t = k(n, (e) => e instanceof np);
          if (!t || e.numChildren() <= 1) {
            return;
          }
          const i = [];
          let r;
          for (const s of n) {
            if (s instanceof np) {
              let n = s;
              while (n.numChildren() === 1) {
                const [e] = n.children;
                if (e instanceof np) {
                  n = e;
                } else {
                  break;
                }
              }
              i.push(...n.children);
              if (r) {
                e.removeChild(s);
                s.parent = r.parent;
                r.parent.removeChild(r);
                r.parent = n;
                this.setModified();
              } else {
                r = n;
              }
            } else {
              i.push(s);
            }
          }
          if (i.length) {
            this.setModified();
            for (const e of i) {
              e.parent.removeChild(e);
              e.parent = r;
            }
          }
        }
      }
      class jb extends ep {
        clone() {
          return new jb(null, b(this.transform));
        }
        constructor(e, n) {
          super(e);
          this.transform = n;
        }
        addDimensions(e) {
          this.transform.groupby = P(this.transform.groupby.concat(e), (e) => e);
        }
        dependentFields() {
          const e = new Set();
          if (this.transform.groupby) {
            this.transform.groupby.forEach(e.add, e);
          }
          this.transform.joinaggregate
            .map((e) => e.field)
            .filter((e) => e !== undefined)
            .forEach(e.add, e);
          return e;
        }
        producedFields() {
          return new Set(this.transform.joinaggregate.map(this.getDefaultName));
        }
        getDefaultName(e) {
          var n;
          return (n = e.as) !== null && n !== void 0 ? n : Sc(e);
        }
        hash() {
          return `JoinAggregateTransform ${j(this.transform)}`;
        }
        assemble() {
          const e = [];
          const n = [];
          const t = [];
          for (const r of this.transform.joinaggregate) {
            n.push(r.op);
            t.push(this.getDefaultName(r));
            e.push(r.field === undefined ? null : r.field);
          }
          const i = this.transform.groupby;
          return Object.assign({ type: "joinaggregate", as: t, ops: n, fields: e }, i !== undefined ? { groupby: i } : {});
        }
      }
      function wb(e) {
        return e.stack.stackBy.reduce((e, n) => {
          const t = n.fieldDef;
          const i = Sc(t);
          if (i) {
            e.push(i);
          }
          return e;
        }, []);
      }
      function $b(e) {
        return (0, r.kJ)(e) && e.every((e) => (0, r.HD)(e)) && e.length > 1;
      }
      class kb extends ep {
        clone() {
          return new kb(null, b(this._stack));
        }
        constructor(e, n) {
          super(e);
          this._stack = n;
        }
        static makeFromTransform(e, n) {
          const { stack: t, groupby: i, as: s, offset: o = "zero" } = n;
          const a = [];
          const c = [];
          if (n.sort !== undefined) {
            for (const e of n.sort) {
              a.push(e.field);
              c.push(Y(e.order, "ascending"));
            }
          }
          const l = { field: a, order: c };
          let u;
          if ($b(s)) {
            u = s;
          } else if ((0, r.HD)(s)) {
            u = [s, `${s}_end`];
          } else {
            u = [`${n.stack}_start`, `${n.stack}_end`];
          }
          return new kb(e, { dimensionFieldDefs: [], stackField: t, groupby: i, offset: o, sort: l, facetby: [], as: u });
        }
        static makeFromEncoding(e, n) {
          const t = n.stack;
          const { encoding: i } = n;
          if (!t) {
            return null;
          }
          const { groupbyChannels: s, fieldChannel: o, offset: a, impute: c } = t;
          const l = s
            .map((e) => {
              const n = i[e];
              return Rc(n);
            })
            .filter((e) => !!e);
          const u = wb(n);
          const f = n.encoding.order;
          let d;
          if ((0, r.kJ)(f) || fc(f)) {
            d = ai(f);
          } else {
            d = u.reduce(
              (e, n) => {
                e.field.push(n);
                e.order.push(o === "y" ? "descending" : "ascending");
                return e;
              },
              { field: [], order: [] }
            );
          }
          return new kb(e, {
            dimensionFieldDefs: l,
            stackField: n.vgField(o),
            facetby: [],
            stackby: u,
            sort: d,
            offset: a,
            impute: c,
            as: [n.vgField(o, { suffix: "start", forAs: true }), n.vgField(o, { suffix: "end", forAs: true })],
          });
        }
        get stack() {
          return this._stack;
        }
        addDimensions(e) {
          this._stack.facetby.push(...e);
        }
        dependentFields() {
          const e = new Set();
          e.add(this._stack.stackField);
          this.getGroupbyFields().forEach(e.add, e);
          this._stack.facetby.forEach(e.add, e);
          this._stack.sort.field.forEach(e.add, e);
          return e;
        }
        producedFields() {
          return new Set(this._stack.as);
        }
        hash() {
          return `Stack ${j(this._stack)}`;
        }
        getGroupbyFields() {
          const { dimensionFieldDefs: e, impute: n, groupby: t } = this._stack;
          if (e.length > 0) {
            return e
              .map((e) => {
                if (e.bin) {
                  if (n) {
                    return [Sc(e, { binSuffix: "mid" })];
                  }
                  return [Sc(e, {}), Sc(e, { binSuffix: "end" })];
                }
                return [Sc(e)];
              })
              .flat();
          }
          return t !== null && t !== void 0 ? t : [];
        }
        assemble() {
          const e = [];
          const { facetby: n, dimensionFieldDefs: t, stackField: i, stackby: r, sort: s, offset: o, impute: a, as: c } = this._stack;
          if (a) {
            for (const s of t) {
              const { bandPosition: t = 0.5, bin: o } = s;
              if (o) {
                const n = Sc(s, { expr: "datum" });
                const i = Sc(s, { expr: "datum", binSuffix: "end" });
                e.push({ type: "formula", expr: `${t}*${n}+${1 - t}*${i}`, as: Sc(s, { binSuffix: "mid", forAs: true }) });
              }
              e.push({ type: "impute", field: i, groupby: [...r, ...n], key: Sc(s, { binSuffix: "mid" }), method: "value", value: 0 });
            }
          }
          e.push({ type: "stack", groupby: [...this.getGroupbyFields(), ...n], field: i, sort: s, as: c, offset: o });
          return e;
        }
      }
      class Sb extends ep {
        clone() {
          return new Sb(null, b(this.transform));
        }
        constructor(e, n) {
          super(e);
          this.transform = n;
        }
        addDimensions(e) {
          this.transform.groupby = P(this.transform.groupby.concat(e), (e) => e);
        }
        dependentFields() {
          var e, n;
          const t = new Set();
          ((e = this.transform.groupby) !== null && e !== void 0 ? e : []).forEach(t.add, t);
          ((n = this.transform.sort) !== null && n !== void 0 ? n : []).forEach((e) => t.add(e.field));
          this.transform.window
            .map((e) => e.field)
            .filter((e) => e !== undefined)
            .forEach(t.add, t);
          return t;
        }
        producedFields() {
          return new Set(this.transform.window.map(this.getDefaultName));
        }
        getDefaultName(e) {
          var n;
          return (n = e.as) !== null && n !== void 0 ? n : Sc(e);
        }
        hash() {
          return `WindowTransform ${j(this.transform)}`;
        }
        assemble() {
          var e;
          const n = [];
          const t = [];
          const i = [];
          const r = [];
          for (const f of this.transform.window) {
            t.push(f.op);
            i.push(this.getDefaultName(f));
            r.push(f.param === undefined ? null : f.param);
            n.push(f.field === undefined ? null : f.field);
          }
          const s = this.transform.frame;
          const o = this.transform.groupby;
          if (s && s[0] === null && s[1] === null && t.every((e) => Ot(e))) {
            return Object.assign({ type: "joinaggregate", as: i, ops: t, fields: n }, o !== undefined ? { groupby: o } : {});
          }
          const a = [];
          const c = [];
          if (this.transform.sort !== undefined) {
            for (const n of this.transform.sort) {
              a.push(n.field);
              c.push((e = n.order) !== null && e !== void 0 ? e : "ascending");
            }
          }
          const l = { field: a, order: c };
          const u = this.transform.ignorePeers;
          return Object.assign(
            Object.assign(
              Object.assign({ type: "window", params: r, as: i, ops: t, fields: n, sort: l }, u !== undefined ? { ignorePeers: u } : {}),
              o !== undefined ? { groupby: o } : {}
            ),
            s !== undefined ? { frame: s } : {}
          );
        }
      }
      function Db(e) {
        function n(t) {
          if (!(t instanceof Gh)) {
            const i = t.clone();
            if (i instanceof np) {
              const n = Fb + i.getSource();
              i.setSource(n);
              e.model.component.data.outputNodes[n] = i;
            } else if (i instanceof Jh || i instanceof kb || i instanceof Sb || i instanceof jb) {
              i.addDimensions(e.fields);
            }
            for (const e of t.children.flatMap(n)) {
              e.parent = i;
            }
            return [i];
          }
          return t.children.flatMap(n);
        }
        return n;
      }
      function _b(e) {
        if (e instanceof Gh) {
          if (e.numChildren() === 1 && !(e.children[0] instanceof np)) {
            const n = e.children[0];
            if (n instanceof Jh || n instanceof kb || n instanceof Sb || n instanceof jb) {
              n.addDimensions(e.fields);
            }
            n.swapWithParent();
            _b(e);
          } else {
            const n = e.model.component.data.main;
            Pb(n);
            const t = Db(e);
            const i = e.children.map(t).flat();
            for (const e of i) {
              e.parent = n;
            }
          }
        } else {
          e.children.map(_b);
        }
      }
      function Pb(e) {
        if (e instanceof np && e.type === Wd.Main) {
          if (e.numChildren() === 1) {
            const n = e.children[0];
            if (!(n instanceof Gh)) {
              n.swapWithParent();
              Pb(e);
            }
          }
        }
      }
      const Fb = "scale_";
      const zb = 5;
      function Cb(e) {
        for (const n of e) {
          for (const e of n.children) {
            if (e.parent !== n) {
              return false;
            }
          }
          if (!Cb(n.children)) {
            return false;
          }
        }
        return true;
      }
      function Eb(e, n) {
        let t = false;
        for (const i of n) {
          t = e.optimize(i) || t;
        }
        return t;
      }
      function Nb(e, n, t) {
        let i = e.sources;
        let r = false;
        r = Eb(new gb(), i) || r;
        r = Eb(new db(n), i) || r;
        i = i.filter((e) => e.numChildren() > 0);
        r = Eb(new bb(), i) || r;
        i = i.filter((e) => e.numChildren() > 0);
        if (!t) {
          r = Eb(new mb(), i) || r;
          r = Eb(new Ob(n), i) || r;
          r = Eb(new pb(), i) || r;
          r = Eb(new hb(), i) || r;
          r = Eb(new vb(), i) || r;
          r = Eb(new yb(), i) || r;
          r = Eb(new fb(), i) || r;
          r = Eb(new xb(), i) || r;
        }
        e.sources = i;
        return r;
      }
      function Tb(e, n) {
        Cb(e.sources);
        let t = 0;
        let i = 0;
        for (let r = 0; r < zb; r++) {
          if (!Nb(e, n, true)) {
            break;
          }
          t++;
        }
        e.sources.map(_b);
        for (let r = 0; r < zb; r++) {
          if (!Nb(e, n, false)) {
            break;
          }
          i++;
        }
        Cb(e.sources);
        if (Math.max(t, i) === zb) {
          Vr(`Maximum optimization runs(${zb}) reached.`);
        }
      }
      class Ab {
        constructor(e) {
          Object.defineProperty(this, "signal", { enumerable: true, get: e });
        }
        static fromName(e, n) {
          return new Ab(() => e(n));
        }
      }
      var Mb =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      function Lb(e) {
        if (Uy(e)) {
          qb(e);
        } else {
          Ib(e);
        }
      }
      function qb(e) {
        const n = e.component.scales;
        for (const t of A(n)) {
          const i = Wb(e, t);
          const r = n[t];
          r.setWithExplicit("domains", i);
          Gb(e, t);
          if (e.component.data.isFaceted) {
            let n = e;
            while (!Hy(n) && n.parent) {
              n = n.parent;
            }
            const r = n.component.resolve.scale[t];
            if (r === "shared") {
              for (const e of i.value) {
                if (Rt(e)) {
                  e.data = Fb + e.data.replace(Fb, "");
                }
              }
            }
          }
        }
      }
      function Ib(e) {
        for (const t of e.children) {
          Lb(t);
        }
        const n = e.component.scales;
        for (const t of A(n)) {
          let i;
          let r = null;
          for (const n of e.children) {
            const e = n.component.scales[t];
            if (e) {
              if (i === undefined) {
                i = e.getWithExplicit("domains");
              } else {
                i = Ed(i, e.getWithExplicit("domains"), "domains", "scale", Kb);
              }
              const n = e.get("selectionExtent");
              if (r && n && r.param !== n.param) {
                Vr(Si);
              }
              r = n;
            }
          }
          n[t].setWithExplicit("domains", i);
          if (r) {
            n[t].set("selectionExtent", r, true);
          }
        }
      }
      function Rb(e, n, t, i) {
        if (e === "unaggregated") {
          const { valid: e, reason: i } = Vb(n, t);
          if (!e) {
            Vr(i);
            return undefined;
          }
        } else if (e === undefined && i.useUnaggregatedDomain) {
          const { valid: e } = Vb(n, t);
          if (e) {
            return "unaggregated";
          }
        }
        return e;
      }
      function Wb(e, n) {
        const t = e.getScaleComponent(n).get("type");
        const { encoding: i } = e;
        const r = Rb(e.scaleDomain(n), e.typedFieldDef(n), t, e.config.scale);
        if (r !== e.scaleDomain(n)) {
          e.specifiedScales[n] = Object.assign(Object.assign({}, e.specifiedScales[n]), { domain: r });
        }
        if (n === "x" && Wc(i.x2)) {
          if (Wc(i.x)) {
            return Ed(Bb(t, r, e, "x"), Bb(t, r, e, "x2"), "domain", "scale", Kb);
          } else {
            return Bb(t, r, e, "x2");
          }
        } else if (n === "y" && Wc(i.y2)) {
          if (Wc(i.y)) {
            return Ed(Bb(t, r, e, "y"), Bb(t, r, e, "y2"), "domain", "scale", Kb);
          } else {
            return Bb(t, r, e, "y2");
          }
        }
        return Bb(t, r, e, n);
      }
      function Ub(e, n, t) {
        return e.map((e) => {
          const i = Qc(e, { timeUnit: t, type: n });
          return { signal: `{data: ${i}}` };
        });
      }
      function Hb(e, n, t) {
        var i;
        const r = (i = ks(t)) === null || i === void 0 ? void 0 : i.unit;
        if (n === "temporal" || r) {
          return Ub(e, n, r);
        }
        return [e];
      }
      function Bb(e, n, t, i) {
        const { encoding: s } = t;
        const o = Wc(s[i]);
        const { type: a } = o;
        const c = o["timeUnit"];
        if (jo(n)) {
          const r = Bb(e, undefined, t, i);
          const s = Hb(n.unionWith, a, c);
          return Pd([...s, ...r.value]);
        } else if (Mt(n)) {
          return Pd([n]);
        } else if (n && n !== "unaggregated" && !xo(n)) {
          return Pd(Hb(n, a, c));
        }
        const l = t.stack;
        if (l && i === l.fieldChannel) {
          if (l.offset === "normalize") {
            return Fd([[0, 1]]);
          }
          const e = t.requestDataName(Wd.Main);
          return Fd([
            { data: e, field: t.vgField(i, { suffix: "start" }) },
            { data: e, field: t.vgField(i, { suffix: "end" }) },
          ]);
        }
        const u = lt(i) && fc(o) ? Xb(t, i, e) : undefined;
        if (pc(o)) {
          const e = Hb([o.datum], a, c);
          return Fd(e);
        }
        const f = o;
        if (n === "unaggregated") {
          const e = t.requestDataName(Wd.Main);
          const { field: n } = o;
          return Fd([
            { data: e, field: Sc({ field: n, aggregate: "min" }) },
            { data: e, field: Sc({ field: n, aggregate: "max" }) },
          ]);
        } else if (Dt(f.bin)) {
          if (mo(e)) {
            if (e === "bin-ordinal") {
              return Fd([]);
            }
            return Fd([
              {
                data: q(u) ? t.requestDataName(Wd.Main) : t.requestDataName(Wd.Raw),
                field: t.vgField(i, el(f, i) ? { binSuffix: "range" } : {}),
                sort: u === true || !(0, r.Kn)(u) ? { field: t.vgField(i, {}), op: "min" } : u,
              },
            ]);
          } else {
            const { bin: e } = f;
            if (Dt(e)) {
              const n = Ih(t, f.field, e);
              return Fd([
                new Ab(() => {
                  const e = t.getSignalName(n);
                  return `[${e}.start, ${e}.stop]`;
                }),
              ]);
            } else {
              return Fd([{ data: t.requestDataName(Wd.Main), field: t.vgField(i, {}) }]);
            }
          }
        } else if (f.timeUnit && $(["time", "utc"], e) && oc(f, Uy(t) ? t.encoding[yn(i)] : undefined, t.markDef, t.config)) {
          const e = t.requestDataName(Wd.Main);
          return Fd([
            { data: e, field: t.vgField(i) },
            { data: e, field: t.vgField(i, { suffix: "end" }) },
          ]);
        } else if (u) {
          return Fd([{ data: q(u) ? t.requestDataName(Wd.Main) : t.requestDataName(Wd.Raw), field: t.vgField(i), sort: u }]);
        } else {
          return Fd([{ data: t.requestDataName(Wd.Main), field: t.vgField(i) }]);
        }
      }
      function Jb(e, n) {
        const { op: t, field: i, order: r } = e;
        return Object.assign(Object.assign({ op: t !== null && t !== void 0 ? t : n ? "sum" : Ha }, i ? { field: G(i) } : {}), r ? { order: r } : {});
      }
      function Gb(e, n) {
        var t;
        const i = e.component.scales[n];
        const r = e.specifiedScales[n].domain;
        const s = (t = e.fieldDef(n)) === null || t === void 0 ? void 0 : t.bin;
        const o = xo(r) && r;
        const a = Pt(s) && Ft(s.extent) && s.extent;
        if (o || a) {
          i.set("selectionExtent", o !== null && o !== void 0 ? o : a, true);
        }
      }
      function Xb(e, n, t) {
        if (!mo(t)) {
          return undefined;
        }
        const i = e.fieldDef(n);
        const r = i.sort;
        if (Va(r)) {
          return { op: "min", field: Om(i, n), order: "ascending" };
        }
        const { stack: s } = e;
        const o = s ? new Set([...s.groupbyFields, ...s.stackBy.map((e) => e.fieldDef.field)]) : undefined;
        if (Xa(r)) {
          const e = s && !o.has(r.field);
          return Jb(r, e);
        } else if (Ga(r)) {
          const { encoding: n, order: t } = r;
          const i = e.fieldDef(n);
          const { aggregate: a, field: c } = i;
          const l = s && !o.has(c);
          if (yt(a) || vt(a)) {
            return Jb({ field: Sc(i), order: t }, l);
          } else if (Ot(a) || !a) {
            return Jb({ op: a, field: c, order: t }, l);
          }
        } else if (r === "descending") {
          return { op: "min", field: e.vgField(n), order: "descending" };
        } else if ($(["ascending", undefined], r)) {
          return true;
        }
        return undefined;
      }
      function Vb(e, n) {
        const { aggregate: t, type: i } = e;
        if (!t) {
          return { valid: false, reason: lr(e) };
        }
        if ((0, r.HD)(t) && !kt.has(t)) {
          return { valid: false, reason: ur(t) };
        }
        if (i === "quantitative") {
          if (n === "log") {
            return { valid: false, reason: fr(e) };
          }
        }
        return { valid: true };
      }
      function Kb(e, n, t, i) {
        if (e.explicit && n.explicit) {
          Vr(vr(t, i, e.value, n.value));
        }
        return { explicit: e.explicit, value: [...e.value, ...n.value] };
      }
      function Yb(e) {
        const n = P(
          e.map((e) => {
            if (Rt(e)) {
              const { sort: n } = e,
                t = Mb(e, ["sort"]);
              return t;
            }
            return e;
          }),
          j
        );
        const t = P(
          e
            .map((e) => {
              if (Rt(e)) {
                const n = e.sort;
                if (n !== undefined && !q(n)) {
                  if ("op" in n && n.op === "count") {
                    delete n.field;
                  }
                  if (n.order === "ascending") {
                    delete n.order;
                  }
                }
                return n;
              }
              return undefined;
            })
            .filter((e) => e !== undefined),
          j
        );
        if (n.length === 0) {
          return undefined;
        } else if (n.length === 1) {
          const n = e[0];
          if (Rt(n) && t.length > 0) {
            let e = t[0];
            if (t.length > 1) {
              Vr(jr);
              e = true;
            } else {
              if ((0, r.Kn)(e) && "field" in e) {
                const t = e.field;
                if (n.field === t) {
                  e = e.order ? { order: e.order } : true;
                }
              }
            }
            return Object.assign(Object.assign({}, n), { sort: e });
          }
          return n;
        }
        const i = P(
          t.map((e) => {
            if (q(e) || !("op" in e) || ((0, r.HD)(e.op) && e.op in bt)) {
              return e;
            }
            Vr(xr(e));
            return true;
          }),
          j
        );
        let s;
        if (i.length === 1) {
          s = i[0];
        } else if (i.length > 1) {
          Vr(jr);
          s = true;
        }
        const o = P(
          e.map((e) => {
            if (Rt(e)) {
              return e.data;
            }
            return null;
          }),
          (e) => e
        );
        if (o.length === 1 && o[0] !== null) {
          const e = Object.assign({ data: o[0], fields: n.map((e) => e.field) }, s ? { sort: s } : {});
          return e;
        }
        return Object.assign({ fields: n }, s ? { sort: s } : {});
      }
      function Qb(e) {
        if (Rt(e) && (0, r.HD)(e.field)) {
          return e.field;
        } else if (qt(e)) {
          let n;
          for (const t of e.fields) {
            if (Rt(t) && (0, r.HD)(t.field)) {
              if (!n) {
                n = t.field;
              } else if (n !== t.field) {
                Vr(wr);
                return n;
              }
            }
          }
          Vr($r);
          return n;
        } else if (It(e)) {
          Vr(kr);
          const n = e.fields[0];
          return (0, r.HD)(n) ? n : undefined;
        }
        return undefined;
      }
      function Zb(e, n) {
        const t = e.component.scales[n];
        const i = t.get("domains").map((n) => {
          if (Rt(n)) {
            n.data = e.lookupDataSource(n.data);
          }
          return n;
        });
        return Yb(i);
      }
      var ey =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      function ny(e) {
        if (Jy(e) || By(e)) {
          return e.children.reduce((e, n) => e.concat(ny(n)), ty(e));
        } else {
          return ty(e);
        }
      }
      function ty(e) {
        return A(e.component.scales).reduce((n, t) => {
          const i = e.component.scales[t];
          if (i.merged) {
            return n;
          }
          const r = i.combine();
          const { name: s, type: o, selectionExtent: a, domains: c, range: l, reverse: u } = r,
            f = ey(r, ["name", "type", "selectionExtent", "domains", "range", "reverse"]);
          const d = iy(r.range, s, t, e);
          const p = Zb(e, t);
          const g = a ? Qd(e, a, i, p) : null;
          n.push(
            Object.assign(
              Object.assign(
                Object.assign(Object.assign(Object.assign({ name: s, type: o }, p ? { domain: p } : {}), g ? { domainRaw: g } : {}), { range: d }),
                u !== undefined ? { reverse: u } : {}
              ),
              f
            )
          );
          return n;
        }, []);
      }
      function iy(e, n, t, i) {
        if (Wn(t)) {
          if (Lt(e)) {
            return { step: { signal: `${n}_step` } };
          }
        } else if ((0, r.Kn)(e) && Rt(e)) {
          return Object.assign(Object.assign({}, e), { data: i.lookupDataSource(e.data) });
        }
        return e;
      }
      class ry extends _d {
        constructor(e, n) {
          super({}, { name: e });
          this.merged = false;
          this.setWithExplicit("type", n);
        }
        domainDefinitelyIncludesZero() {
          if (this.get("zero") !== false) {
            return true;
          }
          return k(this.get("domains"), (e) => (0, r.kJ)(e) && e.length === 2 && e[0] <= 0 && e[1] >= 0);
        }
      }
      const sy = ["range", "scheme"];
      function oy(e) {
        const n = e.component.scales;
        for (const t of ct) {
          const i = n[t];
          if (!i) {
            continue;
          }
          const r = cy(t, e);
          i.setWithExplicit("range", r);
        }
      }
      function ay(e, n) {
        const t = e.fieldDef(n);
        if (t === null || t === void 0 ? void 0 : t.bin) {
          const { bin: i, field: s } = t;
          const o = vn(n);
          const a = e.getName(o);
          if ((0, r.Kn)(i) && i.binned && i.step !== undefined) {
            return new Ab(() => {
              const t = e.scaleName(n);
              const r = `(domain("${t}")[1] - domain("${t}")[0]) / ${i.step}`;
              return `${e.getSignalName(a)} / (${r})`;
            });
          } else if (Dt(i)) {
            const n = Ih(e, s, i);
            return new Ab(() => {
              const t = e.getSignalName(n);
              const i = `(${t}.stop - ${t}.start) / ${t}.step`;
              return `${e.getSignalName(a)} / (${i})`;
            });
          }
        }
        return undefined;
      }
      function cy(e, n) {
        const t = n.specifiedScales[e];
        const { size: i } = n;
        const s = n.getScaleComponent(e);
        const o = s.get("type");
        for (const d of sy) {
          if (t[d] !== undefined) {
            const i = No(o, d);
            const s = To(e, d);
            if (!i) {
              Vr(mr(o, d, e));
            } else if (s) {
              Vr(s);
            } else {
              switch (d) {
                case "range": {
                  const i = t.range;
                  if ((0, r.kJ)(i)) {
                    if (Wn(e)) {
                      return Pd(
                        i.map((e) => {
                          if (e === "width" || e === "height") {
                            const t = n.getName(e);
                            const i = n.getSignalName.bind(n);
                            return Ab.fromName(i, t);
                          }
                          return e;
                        })
                      );
                    }
                  } else if ((0, r.Kn)(i)) {
                    return Pd({ data: n.requestDataName(Wd.Main), field: i.field, sort: { op: "min", field: n.vgField(e) } });
                  }
                  return Pd(i);
                }
                case "scheme":
                  return Pd(ly(t[d]));
              }
            }
          }
        }
        const a = e === le || e === "xOffset" ? "width" : "height";
        const c = i[a];
        if (Cu(c)) {
          if (Wn(e)) {
            if (mo(o)) {
              const t = fy(c, n, e);
              if (t) {
                return Pd({ step: t });
              }
            } else {
              Vr(br(a));
            }
          } else if (Xn(e)) {
            const t = e === pe ? "x" : "y";
            const i = n.getScaleComponent(t);
            const r = i.get("type");
            if (r === "band") {
              const e = dy(c, o);
              if (e) {
                return Pd(e);
              }
            }
          }
        }
        const { rangeMin: l, rangeMax: u } = t;
        const f = uy(e, n);
        if ((l !== undefined || u !== undefined) && No(o, "rangeMin") && (0, r.kJ)(f) && f.length === 2) {
          return Pd([l !== null && l !== void 0 ? l : f[0], u !== null && u !== void 0 ? u : f[1]]);
        }
        return Fd(f);
      }
      function ly(e) {
        if (Oo(e)) {
          return Object.assign({ scheme: e.name }, O(e, ["name"]));
        }
        return { scheme: e };
      }
      function uy(e, n) {
        const { size: t, config: i, mark: r, encoding: s } = n;
        const o = n.getSignalName.bind(n);
        const { type: a } = Wc(s[e]);
        const c = n.getScaleComponent(e);
        const l = c.get("type");
        const { domain: u, domainMid: f } = n.specifiedScales[e];
        switch (e) {
          case le:
          case ue: {
            if ($(["point", "band"], l)) {
              const r = gy(e, t, i.view);
              if (Cu(r)) {
                const t = fy(r, n, e);
                return { step: t };
              }
            }
            const r = vn(e);
            const s = n.getName(r);
            if (e === ue && ho(l)) {
              return [Ab.fromName(o, s), 0];
            } else {
              return [0, Ab.fromName(o, s)];
            }
          }
          case pe:
          case ge:
            return py(e, n, l);
          case De: {
            const s = n.component.scales[e].get("zero");
            const o = by(r, s, i);
            const a = vy(r, t, n, i);
            if (yo(l)) {
              return hy(o, a, my(l, i, u, e));
            } else {
              return [o, a];
            }
          }
          case be:
            return [0, Math.PI * 2];
          case _e:
            return [0, 360];
          case me: {
            return [
              0,
              new Ab(() => {
                const e = n.getSignalName("width");
                const t = n.getSignalName("height");
                return `min(${e},${t})/2`;
              }),
            ];
          }
          case Ce:
            return [i.scale.minStrokeWidth, i.scale.maxStrokeWidth];
          case Ee:
            return [
              [1, 0],
              [4, 2],
              [2, 1],
              [1, 1],
              [1, 2, 4, 2],
            ];
          case Se:
            return "symbol";
          case we:
          case $e:
          case ke:
            if (l === "ordinal") {
              return a === "nominal" ? "category" : "ordinal";
            } else {
              if (f !== undefined) {
                return "diverging";
              } else {
                return r === "rect" || r === "geoshape" ? "heatmap" : "ramp";
              }
            }
          case Pe:
          case Fe:
          case ze:
            return [i.scale.minOpacity, i.scale.maxOpacity];
        }
      }
      function fy(e, n, t) {
        var i, r, s, o, a;
        const { encoding: c } = n;
        const l = n.getScaleComponent(t);
        const u = xn(t);
        const f = c[u];
        const d = zu({ step: e, offsetIsDiscrete: bc(f) && Js(f.type) });
        if (d === "offset" && ml(c, u)) {
          const t = n.getScaleComponent(u);
          const c = n.scaleName(u);
          let f = `domain('${c}').length`;
          if (t.get("type") === "band") {
            const e = (r = (i = t.get("paddingInner")) !== null && i !== void 0 ? i : t.get("padding")) !== null && r !== void 0 ? r : 0;
            const n = (o = (s = t.get("paddingOuter")) !== null && s !== void 0 ? s : t.get("padding")) !== null && o !== void 0 ? o : 0;
            f = `bandspace(${f}, ${e}, ${n})`;
          }
          const d = (a = l.get("paddingInner")) !== null && a !== void 0 ? a : l.get("padding");
          return { signal: `${e.step} * ${f} / (1-${Qt(d)})` };
        } else {
          return e.step;
        }
      }
      function dy(e, n) {
        const t = zu({ step: e, offsetIsDiscrete: mo(n) });
        if (t === "offset") {
          return { step: e.step };
        }
        return undefined;
      }
      function py(e, n, t) {
        const i = e === pe ? "x" : "y";
        const r = n.getScaleComponent(i);
        const s = r.get("type");
        const o = n.scaleName(i);
        if (s === "band") {
          const e = gy(i, n.size, n.config.view);
          if (Cu(e)) {
            const n = dy(e, t);
            if (n) {
              return n;
            }
          }
          return [0, { signal: `bandwidth('${o}')` }];
        } else {
          return y(`Cannot use ${e} scale if ${i} scale is not discrete.`);
        }
      }
      function gy(e, n, t) {
        const i = e === le ? "width" : "height";
        const r = n[i];
        if (r) {
          return r;
        }
        return Ru(t, i);
      }
      function my(e, n, t, i) {
        switch (e) {
          case "quantile":
            return n.scale.quantileCount;
          case "quantize":
            return n.scale.quantizeCount;
          case "threshold":
            if (t !== undefined && (0, r.kJ)(t)) {
              return t.length + 1;
            } else {
              Vr(Lr(i));
              return 3;
            }
        }
      }
      function hy(e, n, t) {
        const i = () => {
          const i = ei(n);
          const r = ei(e);
          const s = `(${i} - ${r}) / (${t} - 1)`;
          return `sequence(${r}, ${i} + ${s}, ${s})`;
        };
        if (Mt(n)) {
          return new Ab(i);
        } else {
          return { signal: i() };
        }
      }
      function by(e, n, t) {
        if (n) {
          if (Mt(n)) {
            return { signal: `${n.signal} ? 0 : ${by(e, false, t)}` };
          } else {
            return 0;
          }
        }
        switch (e) {
          case "bar":
          case "tick":
            return t.scale.minBandSize;
          case "line":
          case "trail":
          case "rule":
            return t.scale.minStrokeWidth;
          case "text":
            return t.scale.minFontSize;
          case "point":
          case "square":
          case "circle":
            return t.scale.minSize;
        }
        throw new Error(Ki("size", e));
      }
      const yy = 0.95;
      function vy(e, n, t, i) {
        const s = { x: ay(t, "x"), y: ay(t, "y") };
        switch (e) {
          case "bar":
          case "tick": {
            if (i.scale.maxBandSize !== undefined) {
              return i.scale.maxBandSize;
            }
            const e = Oy(n, s, i.view);
            if ((0, r.hj)(e)) {
              return e - 1;
            } else {
              return new Ab(() => `${e.signal} - 1`);
            }
          }
          case "line":
          case "trail":
          case "rule":
            return i.scale.maxStrokeWidth;
          case "text":
            return i.scale.maxFontSize;
          case "point":
          case "square":
          case "circle": {
            if (i.scale.maxSize) {
              return i.scale.maxSize;
            }
            const e = Oy(n, s, i.view);
            if ((0, r.hj)(e)) {
              return Math.pow(yy * e, 2);
            } else {
              return new Ab(() => `pow(${yy} * ${e.signal}, 2)`);
            }
          }
        }
        throw new Error(Ki("size", e));
      }
      function Oy(e, n, t) {
        const i = Cu(e.width) ? e.width.step : Iu(t, "width");
        const r = Cu(e.height) ? e.height.step : Iu(t, "height");
        if (n.x || n.y) {
          return new Ab(() => {
            const e = [n.x ? n.x.signal : i, n.y ? n.y.signal : r];
            return `min(${e.join(", ")})`;
          });
        }
        return Math.min(i, r);
      }
      function xy(e, n) {
        if (Uy(e)) {
          jy(e, n);
        } else {
          ky(e, n);
        }
      }
      function jy(e, n) {
        const t = e.component.scales;
        const { config: i, encoding: r, markDef: s, specifiedScales: o } = e;
        for (const a of A(t)) {
          const c = o[a];
          const l = t[a];
          const u = e.getScaleComponent(a);
          const f = Wc(r[a]);
          const d = c[n];
          const p = u.get("type");
          const g = u.get("padding");
          const m = u.get("paddingInner");
          const h = No(p, n);
          const b = To(a, n);
          if (d !== undefined) {
            if (!h) {
              Vr(mr(p, n, a));
            } else if (b) {
              Vr(b);
            }
          }
          if (h && b === undefined) {
            if (d !== undefined) {
              const e = f["timeUnit"];
              const t = f.type;
              switch (n) {
                case "domainMax":
                case "domainMin":
                  if (Qr(c[n]) || t === "temporal" || e) {
                    l.set(n, { signal: Qc(c[n], { type: t, timeUnit: e }) }, true);
                  } else {
                    l.set(n, c[n], true);
                  }
                  break;
                default:
                  l.copyKeyFromObject(n, c);
              }
            } else {
              const t =
                n in wy
                  ? wy[n]({
                      model: e,
                      channel: a,
                      fieldOrDatumDef: f,
                      scaleType: p,
                      scalePadding: g,
                      scalePaddingInner: m,
                      domain: c.domain,
                      domainMin: c.domainMin,
                      domainMax: c.domainMax,
                      markDef: s,
                      config: i,
                      hasNestedOffsetScale: hl(r, a),
                      hasSecondaryRangeChannel: !!r[yn(a)],
                    })
                  : i.scale[n];
              if (t !== undefined) {
                l.set(n, t, false);
              }
            }
          }
        }
      }
      const wy = {
        bins: ({ model: e, fieldOrDatumDef: n }) => (fc(n) ? Sy(e, n) : undefined),
        interpolate: ({ channel: e, fieldOrDatumDef: n }) => Dy(e, n.type),
        nice: ({ scaleType: e, channel: n, domain: t, domainMin: i, domainMax: r, fieldOrDatumDef: s }) => _y(e, n, t, i, r, s),
        padding: ({ channel: e, scaleType: n, fieldOrDatumDef: t, markDef: i, config: r }) => Py(e, n, r.scale, t, i, r.bar),
        paddingInner: ({ scalePadding: e, channel: n, markDef: t, scaleType: i, config: r, hasNestedOffsetScale: s }) =>
          Fy(e, n, t.type, i, r.scale, s),
        paddingOuter: ({ scalePadding: e, channel: n, scaleType: t, scalePaddingInner: i, config: r, hasNestedOffsetScale: s }) =>
          zy(e, n, t, i, r.scale, s),
        reverse: ({ fieldOrDatumDef: e, scaleType: n, channel: t, config: i }) => {
          const r = fc(e) ? e.sort : undefined;
          return Cy(n, r, t, i.scale);
        },
        zero: ({ channel: e, fieldOrDatumDef: n, domain: t, markDef: i, scaleType: r, config: s, hasSecondaryRangeChannel: o }) =>
          Ey(e, n, t, i, r, s.scale, o),
      };
      function $y(e) {
        if (Uy(e)) {
          oy(e);
        } else {
          ky(e, "range");
        }
      }
      function ky(e, n) {
        const t = e.component.scales;
        for (const i of e.children) {
          if (n === "range") {
            $y(i);
          } else {
            xy(i, n);
          }
        }
        for (const i of A(t)) {
          let r;
          for (const t of e.children) {
            const e = t.component.scales[i];
            if (e) {
              const t = e.getWithExplicit(n);
              r = Ed(
                r,
                t,
                n,
                "scale",
                zd((e, t) => {
                  switch (n) {
                    case "range":
                      if (e.step && t.step) {
                        return e.step - t.step;
                      }
                      return 0;
                  }
                  return 0;
                })
              );
            }
          }
          t[i].setWithExplicit(n, r);
        }
      }
      function Sy(e, n) {
        const t = n.bin;
        if (Dt(t)) {
          const i = Ih(e, n.field, t);
          return new Ab(() => e.getSignalName(i));
        } else if (_t(t) && Pt(t) && t.step !== undefined) {
          return { step: t.step };
        }
        return undefined;
      }
      function Dy(e, n) {
        if ($([we, $e, ke], e) && n !== "nominal") {
          return "hcl";
        }
        return undefined;
      }
      function _y(e, n, t, i, s, o) {
        var a;
        if (((a = Rc(o)) === null || a === void 0 ? void 0 : a.bin) || (0, r.kJ)(t) || s != null || i != null || $([no.TIME, no.UTC], e)) {
          return undefined;
        }
        return Wn(n) ? true : undefined;
      }
      function Py(e, n, t, i, r, s) {
        if (Wn(e)) {
          if (bo(n)) {
            if (t.continuousPadding !== undefined) {
              return t.continuousPadding;
            }
            const { type: n, orient: o } = r;
            if (n === "bar" && !(fc(i) && (i.bin || i.timeUnit))) {
              if ((o === "vertical" && e === "x") || (o === "horizontal" && e === "y")) {
                return s.continuousBandSize;
              }
            }
          }
          if (n === no.POINT) {
            return t.pointPadding;
          }
        }
        return undefined;
      }
      function Fy(e, n, t, i, r, s = false) {
        if (e !== undefined) {
          return undefined;
        }
        if (Wn(n)) {
          const { bandPaddingInner: e, barBandPaddingInner: n, rectBandPaddingInner: i, bandWithNestedOffsetPaddingInner: o } = r;
          if (s) {
            return o;
          }
          return Y(e, t === "bar" ? n : i);
        } else if (Xn(n)) {
          if (i === no.BAND) {
            return r.offsetBandPaddingInner;
          }
        }
        return undefined;
      }
      function zy(e, n, t, i, r, s = false) {
        if (e !== undefined) {
          return undefined;
        }
        if (Wn(n)) {
          const { bandPaddingOuter: e, bandWithNestedOffsetPaddingOuter: n } = r;
          if (s) {
            return n;
          }
          if (t === no.BAND) {
            return Y(e, Mt(i) ? { signal: `${i.signal}/2` } : i / 2);
          }
        } else if (Xn(n)) {
          if (t === no.POINT) {
            return 0.5;
          } else if (t === no.BAND) {
            return r.offsetBandPaddingOuter;
          }
        }
        return undefined;
      }
      function Cy(e, n, t, i) {
        if (t === "x" && i.xReverse !== undefined) {
          if (ho(e) && n === "descending") {
            if (Mt(i.xReverse)) {
              return { signal: `!${i.xReverse.signal}` };
            } else {
              return !i.xReverse;
            }
          }
          return i.xReverse;
        }
        if (ho(e) && n === "descending") {
          return true;
        }
        return undefined;
      }
      function Ey(e, n, t, i, s, o, a) {
        const c = !!t && t !== "unaggregated";
        if (c) {
          if (ho(s)) {
            if ((0, r.kJ)(t)) {
              const e = t[0];
              const n = t[t.length - 1];
              if (e <= 0 && n >= 0) {
                return true;
              }
            }
            return false;
          }
        }
        if (e === "size" && n.type === "quantitative" && !yo(s)) {
          return true;
        }
        if (!(fc(n) && n.bin) && $([...Rn, ...Hn], e)) {
          const { orient: n, type: t } = i;
          if ($(["bar", "area", "line", "trail"], t)) {
            if ((n === "horizontal" && e === "y") || (n === "vertical" && e === "x")) {
              return false;
            }
          }
          if ($(["bar", "area"], t) && !a) {
            return true;
          }
          return o === null || o === void 0 ? void 0 : o.zero;
        }
        return false;
      }
      function Ny(e, n, t, i, r = false) {
        const s = Ty(n, t, i, r);
        const { type: o } = e;
        if (!lt(n)) {
          return null;
        }
        if (o !== undefined) {
          if (!Mo(n, o)) {
            Vr(pr(n, o, s));
            return s;
          }
          if (fc(t) && !Ao(o, t.type)) {
            Vr(gr(o, s));
            return s;
          }
          return o;
        }
        return s;
      }
      function Ty(e, n, t, i) {
        var r;
        switch (n.type) {
          case "nominal":
          case "ordinal": {
            if (Ke(e) || mt(e) === "discrete") {
              if (e === "shape" && n.type === "ordinal") {
                Vr(tr(e, "ordinal"));
              }
              return "ordinal";
            }
            if (Wn(e) || Xn(e)) {
              if ($(["rect", "bar", "image", "rule"], t.type)) {
                return "band";
              }
              if (i) {
                return "band";
              }
            } else if (t.type === "arc" && e in Un) {
              return "band";
            }
            const s = t[vn(e)];
            if (ga(s)) {
              return "band";
            }
            if (xc(n) && ((r = n.axis) === null || r === void 0 ? void 0 : r.tickBand)) {
              return "band";
            }
            return "point";
          }
          case "temporal":
            if (Ke(e)) {
              return "time";
            } else if (mt(e) === "discrete") {
              Vr(tr(e, "temporal"));
              return "ordinal";
            } else if (fc(n) && n.timeUnit && ks(n.timeUnit).utc) {
              return "utc";
            }
            return "time";
          case "quantitative":
            if (Ke(e)) {
              if (fc(n) && Dt(n.bin)) {
                return "bin-ordinal";
              }
              return "linear";
            } else if (mt(e) === "discrete") {
              Vr(tr(e, "quantitative"));
              return "ordinal";
            }
            return "linear";
          case "geojson":
            return undefined;
        }
        throw new Error(Wi(n.type));
      }
      function Ay(e, { ignoreRange: n } = {}) {
        My(e);
        Lb(e);
        for (const t of Eo) {
          xy(e, t);
        }
        if (!n) {
          $y(e);
        }
      }
      function My(e) {
        if (Uy(e)) {
          e.component.scales = Ly(e);
        } else {
          e.component.scales = Iy(e);
        }
      }
      function Ly(e) {
        const { encoding: n, mark: t, markDef: i } = e;
        const r = {};
        for (const s of ct) {
          const o = Wc(n[s]);
          if (o && t === Qo && s === Se && o.type === Ys) {
            continue;
          }
          let a = o && o["scale"];
          if (Xn(s)) {
            const e = jn(s);
            if (!hl(n, e)) {
              if (a) {
                Vr(Yi(s));
              }
              continue;
            }
          }
          if (o && a !== null && a !== false) {
            a !== null && a !== void 0 ? a : (a = {});
            const t = hl(n, s);
            const c = Ny(a, s, o, i, t);
            r[s] = new ry(e.scaleName(`${s}`, true), { value: c, explicit: a.type === c });
          }
        }
        return r;
      }
      const qy = zd((e, n) => oo(e) - oo(n));
      function Iy(e) {
        var n;
        var t;
        const i = (e.component.scales = {});
        const r = {};
        const s = e.component.resolve;
        for (const o of e.children) {
          My(o);
          for (const i of A(o.component.scales)) {
            (n = (t = s.scale)[i]) !== null && n !== void 0 ? n : (t[i] = Um(i, e));
            if (s.scale[i] === "shared") {
              const e = r[i];
              const n = o.component.scales[i].getWithExplicit("type");
              if (e) {
                if (ro(e.value, n.value)) {
                  r[i] = Ed(e, n, "type", "scale", qy);
                } else {
                  s.scale[i] = "independent";
                  delete r[i];
                }
              } else {
                r[i] = n;
              }
            }
          }
        }
        for (const o of A(r)) {
          const n = e.scaleName(o, true);
          const t = r[o];
          i[o] = new ry(n, t);
          for (const i of e.children) {
            const e = i.component.scales[o];
            if (e) {
              i.renameScale(e.get("name"), n);
              e.merged = true;
            }
          }
        }
        return i;
      }
      var Ry =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      class Wy {
        constructor() {
          this.nameMap = {};
        }
        rename(e, n) {
          this.nameMap[e] = n;
        }
        has(e) {
          return this.nameMap[e] !== undefined;
        }
        get(e) {
          while (this.nameMap[e] && e !== this.nameMap[e]) {
            e = this.nameMap[e];
          }
          return e;
        }
      }
      function Uy(e) {
        return (e === null || e === void 0 ? void 0 : e.type) === "unit";
      }
      function Hy(e) {
        return (e === null || e === void 0 ? void 0 : e.type) === "facet";
      }
      function By(e) {
        return (e === null || e === void 0 ? void 0 : e.type) === "concat";
      }
      function Jy(e) {
        return (e === null || e === void 0 ? void 0 : e.type) === "layer";
      }
      class Gy {
        constructor(e, n, t, i, r, s, o) {
          var a, c;
          this.type = n;
          this.parent = t;
          this.config = r;
          this.correctDataNames = (e) => {
            var n, t, i;
            if ((n = e.from) === null || n === void 0 ? void 0 : n.data) {
              e.from.data = this.lookupDataSource(e.from.data);
            }
            if ((i = (t = e.from) === null || t === void 0 ? void 0 : t.facet) === null || i === void 0 ? void 0 : i.data) {
              e.from.facet.data = this.lookupDataSource(e.from.facet.data);
            }
            return e;
          };
          this.parent = t;
          this.config = r;
          this.view = Et(o);
          this.name = (a = e.name) !== null && a !== void 0 ? a : i;
          this.title = At(e.title) ? { text: e.title } : e.title ? Et(e.title) : undefined;
          this.scaleNameMap = t ? t.scaleNameMap : new Wy();
          this.projectionNameMap = t ? t.projectionNameMap : new Wy();
          this.signalNameMap = t ? t.signalNameMap : new Wy();
          this.data = e.data;
          this.description = e.description;
          this.transforms = cd((c = e.transform) !== null && c !== void 0 ? c : []);
          this.layout = n === "layer" || n === "unit" ? {} : Mu(e, n, r);
          this.component = {
            data: {
              sources: t ? t.component.data.sources : [],
              outputNodes: t ? t.component.data.outputNodes : {},
              outputNodeRefCounts: t ? t.component.data.outputNodeRefCounts : {},
              isFaceted: Qa(e) || ((t === null || t === void 0 ? void 0 : t.component.data.isFaceted) && e.data === undefined),
            },
            layoutSize: new _d(),
            layoutHeaders: { row: {}, column: {}, facet: {} },
            mark: null,
            resolve: Object.assign({ scale: {}, axis: {}, legend: {} }, s ? b(s) : {}),
            selection: null,
            scales: null,
            projection: null,
            axes: {},
            legends: {},
          };
        }
        get width() {
          return this.getSizeSignalRef("width");
        }
        get height() {
          return this.getSizeSignalRef("height");
        }
        parse() {
          this.parseScale();
          this.parseLayoutSize();
          this.renameTopLevelLayoutSizeSignal();
          this.parseSelections();
          this.parseProjection();
          this.parseData();
          this.parseAxesAndHeaders();
          this.parseLegends();
          this.parseMarkGroup();
        }
        parseScale() {
          Ay(this);
        }
        parseProjection() {
          zh(this);
        }
        renameTopLevelLayoutSizeSignal() {
          if (this.getName("width") !== "width") {
            this.renameSignal(this.getName("width"), "width");
          }
          if (this.getName("height") !== "height") {
            this.renameSignal(this.getName("height"), "height");
          }
        }
        parseLegends() {
          gh(this);
        }
        assembleEncodeFromView(e) {
          const { style: n } = e,
            t = Ry(e, ["style"]);
          const i = {};
          for (const r of A(t)) {
            const e = t[r];
            if (e !== undefined) {
              i[r] = Yt(e);
            }
          }
          return i;
        }
        assembleGroupEncodeEntry(e) {
          let n = {};
          if (this.view) {
            n = this.assembleEncodeFromView(this.view);
          }
          if (!e) {
            if (this.description) {
              n["description"] = Yt(this.description);
            }
            if (this.type === "unit" || this.type === "layer") {
              return Object.assign(
                { width: this.getSizeSignalRef("width"), height: this.getSizeSignalRef("height") },
                n !== null && n !== void 0 ? n : {}
              );
            }
          }
          return T(n) ? undefined : n;
        }
        assembleLayout() {
          if (!this.layout) {
            return undefined;
          }
          const e = this.layout,
            { spacing: n } = e,
            t = Ry(e, ["spacing"]);
          const { component: i, config: r } = this;
          const s = Tm(i.layoutHeaders, r);
          return Object.assign(Object.assign(Object.assign({ padding: n }, this.assembleDefaultLayout()), t), s ? { titleBand: s } : {});
        }
        assembleDefaultLayout() {
          return {};
        }
        assembleHeaderMarks() {
          const { layoutHeaders: e } = this.component;
          let n = [];
          for (const t of Qe) {
            if (e[t].title) {
              n.push(Sm(this, t));
            }
          }
          for (const t of $m) {
            n = n.concat(Pm(this, t));
          }
          return n;
        }
        assembleAxes() {
          return em(this.component.axes, this.config);
        }
        assembleLegends() {
          return $h(this);
        }
        assembleProjections() {
          return Sh(this);
        }
        assembleTitle() {
          var e, n, t;
          const i = (e = this.title) !== null && e !== void 0 ? e : {},
            { encoding: r } = i,
            s = Ry(i, ["encoding"]);
          const o = Object.assign(
            Object.assign(Object.assign({}, Tt(this.config.title).nonMarkTitleProperties), s),
            r ? { encode: { update: r } } : {}
          );
          if (o.text) {
            if ($(["unit", "layer"], this.type)) {
              if ($(["middle", undefined], o.anchor)) {
                (n = o.frame) !== null && n !== void 0 ? n : (o.frame = "group");
              }
            } else {
              (t = o.anchor) !== null && t !== void 0 ? t : (o.anchor = "start");
            }
            return T(o) ? undefined : o;
          }
          return undefined;
        }
        assembleGroup(e = []) {
          const n = {};
          e = e.concat(this.assembleSignals());
          if (e.length > 0) {
            n.signals = e;
          }
          const t = this.assembleLayout();
          if (t) {
            n.layout = t;
          }
          n.marks = [].concat(this.assembleHeaderMarks(), this.assembleMarks());
          const i = !this.parent || Hy(this.parent) ? ny(this) : [];
          if (i.length > 0) {
            n.scales = i;
          }
          const r = this.assembleAxes();
          if (r.length > 0) {
            n.axes = r;
          }
          const s = this.assembleLegends();
          if (s.length > 0) {
            n.legends = s;
          }
          return n;
        }
        getName(e) {
          return I((this.name ? `${this.name}_` : "") + e);
        }
        getDataName(e) {
          return this.getName(Wd[e].toLowerCase());
        }
        requestDataName(e) {
          const n = this.getDataName(e);
          const t = this.component.data.outputNodeRefCounts;
          t[n] = (t[n] || 0) + 1;
          return n;
        }
        getSizeSignalRef(e) {
          if (Hy(this.parent)) {
            const n = Rm(e);
            const t = Bn(n);
            const i = this.component.scales[t];
            if (i && !i.merged) {
              const e = i.get("type");
              const n = i.get("range");
              if (mo(e) && Lt(n)) {
                const e = i.get("name");
                const n = Zb(this, t);
                const r = Qb(n);
                if (r) {
                  const n = Sc({ aggregate: "distinct", field: r }, { expr: "datum" });
                  return { signal: Im(e, i, n) };
                } else {
                  Vr(hi(t));
                  return null;
                }
              }
            }
          }
          return { signal: this.signalNameMap.get(this.getName(e)) };
        }
        lookupDataSource(e) {
          const n = this.component.data.outputNodes[e];
          if (!n) {
            return e;
          }
          return n.getSource();
        }
        getSignalName(e) {
          return this.signalNameMap.get(e);
        }
        renameSignal(e, n) {
          this.signalNameMap.rename(e, n);
        }
        renameScale(e, n) {
          this.scaleNameMap.rename(e, n);
        }
        renameProjection(e, n) {
          this.projectionNameMap.rename(e, n);
        }
        scaleName(e, n) {
          if (n) {
            return this.getName(e);
          }
          if ((pn(e) && lt(e) && this.component.scales[e]) || this.scaleNameMap.has(this.getName(e))) {
            return this.scaleNameMap.get(this.getName(e));
          }
          return undefined;
        }
        projectionName(e) {
          if (e) {
            return this.getName("projection");
          }
          if ((this.component.projection && !this.component.projection.merged) || this.projectionNameMap.has(this.getName("projection"))) {
            return this.projectionNameMap.get(this.getName("projection"));
          }
          return undefined;
        }
        getScaleComponent(e) {
          if (!this.component.scales) {
            throw new Error(
              "getScaleComponent cannot be called before parseScale(). Make sure you have called parseScale or use parseUnitModelWithScale()."
            );
          }
          const n = this.component.scales[e];
          if (n && !n.merged) {
            return n;
          }
          return this.parent ? this.parent.getScaleComponent(e) : undefined;
        }
        getSelectionComponent(e, n) {
          let t = this.component.selection[e];
          if (!t && this.parent) {
            t = this.parent.getSelectionComponent(e, n);
          }
          if (!t) {
            throw new Error(xi(n));
          }
          return t;
        }
        hasAxisOrientSignalRef() {
          var e, n;
          return (
            ((e = this.component.axes.x) === null || e === void 0 ? void 0 : e.some((e) => e.hasOrientSignalRef())) ||
            ((n = this.component.axes.y) === null || n === void 0 ? void 0 : n.some((e) => e.hasOrientSignalRef()))
          );
        }
      }
      class Xy extends Gy {
        vgField(e, n = {}) {
          const t = this.fieldDef(e);
          if (!t) {
            return undefined;
          }
          return Sc(t, n);
        }
        reduceFieldDef(e, n) {
          return $l(
            this.getMapping(),
            (n, t, i) => {
              const r = Rc(t);
              if (r) {
                return e(n, r, i);
              }
              return n;
            },
            n
          );
        }
        forEachFieldDef(e, n) {
          wl(
            this.getMapping(),
            (n, t) => {
              const i = Rc(n);
              if (i) {
                e(i, t);
              }
            },
            n
          );
        }
      }
      var Vy =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      class Ky extends ep {
        clone() {
          return new Ky(null, b(this.transform));
        }
        constructor(e, n) {
          var t, i, r;
          super(e);
          this.transform = n;
          this.transform = b(n);
          const s = (t = this.transform.as) !== null && t !== void 0 ? t : [undefined, undefined];
          this.transform.as = [(i = s[0]) !== null && i !== void 0 ? i : "value", (r = s[1]) !== null && r !== void 0 ? r : "density"];
          if (n.groupby && n.minsteps == null && n.maxsteps == null && n.steps == null) {
            this.transform.steps = 200;
          }
        }
        dependentFields() {
          var e;
          return new Set([this.transform.density, ...((e = this.transform.groupby) !== null && e !== void 0 ? e : [])]);
        }
        producedFields() {
          return new Set(this.transform.as);
        }
        hash() {
          return `DensityTransform ${j(this.transform)}`;
        }
        assemble() {
          const e = this.transform,
            { density: n } = e,
            t = Vy(e, ["density"]);
          const i = Object.assign({ type: "kde", field: n }, t);
          return i;
        }
      }
      class Yy extends ep {
        clone() {
          return new Yy(null, Object.assign({}, this.filter));
        }
        constructor(e, n) {
          super(e);
          this.filter = n;
        }
        static make(e, n) {
          const { config: t, mark: i, markDef: r } = n;
          const s = ii("invalid", r, t);
          if (s !== "filter") {
            return null;
          }
          const o = n.reduceFieldDef((e, t, r) => {
            const s = lt(r) && n.getScaleComponent(r);
            if (s) {
              const n = s.get("type");
              if (ho(n) && t.aggregate !== "count" && !ea(i)) {
                e[t.field] = t;
              }
            }
            return e;
          }, {});
          if (!A(o).length) {
            return null;
          }
          return new Yy(e, o);
        }
        dependentFields() {
          return new Set(A(this.filter));
        }
        producedFields() {
          return new Set();
        }
        hash() {
          return `FilterInvalid ${j(this.filter)}`;
        }
        assemble() {
          const e = A(this.filter).reduce((e, n) => {
            const t = this.filter[n];
            const i = Sc(t, { expr: "datum" });
            if (t !== null) {
              if (t.type === "temporal") {
                e.push(`(isDate(${i}) || (isValid(${i}) && isFinite(+${i})))`);
              } else if (t.type === "quantitative") {
                e.push(`isValid(${i})`);
                e.push(`isFinite(+${i})`);
              } else {
              }
            }
            return e;
          }, []);
          return e.length > 0 ? { type: "filter", expr: e.join(" && ") } : null;
        }
      }
      class Qy extends ep {
        clone() {
          return new Qy(this.parent, b(this.transform));
        }
        constructor(e, n) {
          super(e);
          this.transform = n;
          this.transform = b(n);
          const { flatten: t, as: i = [] } = this.transform;
          this.transform.as = t.map((e, n) => {
            var t;
            return (t = i[n]) !== null && t !== void 0 ? t : e;
          });
        }
        dependentFields() {
          return new Set(this.transform.flatten);
        }
        producedFields() {
          return new Set(this.transform.as);
        }
        hash() {
          return `FlattenTransform ${j(this.transform)}`;
        }
        assemble() {
          const { flatten: e, as: n } = this.transform;
          const t = { type: "flatten", fields: e, as: n };
          return t;
        }
      }
      class Zy extends ep {
        clone() {
          return new Zy(null, b(this.transform));
        }
        constructor(e, n) {
          var t, i, r;
          super(e);
          this.transform = n;
          this.transform = b(n);
          const s = (t = this.transform.as) !== null && t !== void 0 ? t : [undefined, undefined];
          this.transform.as = [(i = s[0]) !== null && i !== void 0 ? i : "key", (r = s[1]) !== null && r !== void 0 ? r : "value"];
        }
        dependentFields() {
          return new Set(this.transform.fold);
        }
        producedFields() {
          return new Set(this.transform.as);
        }
        hash() {
          return `FoldTransform ${j(this.transform)}`;
        }
        assemble() {
          const { fold: e, as: n } = this.transform;
          const t = { type: "fold", fields: e, as: n };
          return t;
        }
      }
      class ev extends ep {
        clone() {
          return new ev(null, b(this.fields), this.geojson, this.signal);
        }
        static parseAll(e, n) {
          if (n.component.projection && !n.component.projection.isFit) {
            return e;
          }
          let t = 0;
          for (const i of [
            [Oe, ve],
            [je, xe],
          ]) {
            const r = i.map((e) => {
              const t = Wc(n.encoding[e]);
              return fc(t) ? t.field : pc(t) ? { expr: `${t.datum}` } : vc(t) ? { expr: `${t["value"]}` } : undefined;
            });
            if (r[0] || r[1]) {
              e = new ev(e, r, null, n.getName(`geojson_${t++}`));
            }
          }
          if (n.channelHasField(Se)) {
            const i = n.typedFieldDef(Se);
            if (i.type === Ys) {
              e = new ev(e, null, i.field, n.getName(`geojson_${t++}`));
            }
          }
          return e;
        }
        constructor(e, n, t, i) {
          super(e);
          this.fields = n;
          this.geojson = t;
          this.signal = i;
        }
        dependentFields() {
          var e;
          const n = ((e = this.fields) !== null && e !== void 0 ? e : []).filter(r.HD);
          return new Set([...(this.geojson ? [this.geojson] : []), ...n]);
        }
        producedFields() {
          return new Set();
        }
        hash() {
          return `GeoJSON ${this.geojson} ${this.signal} ${j(this.fields)}`;
        }
        assemble() {
          return [
            ...(this.geojson ? [{ type: "filter", expr: `isValid(datum["${this.geojson}"])` }] : []),
            Object.assign(
              Object.assign(
                Object.assign({ type: "geojson" }, this.fields ? { fields: this.fields } : {}),
                this.geojson ? { geojson: this.geojson } : {}
              ),
              { signal: this.signal }
            ),
          ];
        }
      }
      class nv extends ep {
        clone() {
          return new nv(null, this.projection, b(this.fields), b(this.as));
        }
        constructor(e, n, t, i) {
          super(e);
          this.projection = n;
          this.fields = t;
          this.as = i;
        }
        static parseAll(e, n) {
          if (!n.projectionName()) {
            return e;
          }
          for (const t of [
            [Oe, ve],
            [je, xe],
          ]) {
            const i = t.map((e) => {
              const t = Wc(n.encoding[e]);
              return fc(t) ? t.field : pc(t) ? { expr: `${t.datum}` } : vc(t) ? { expr: `${t["value"]}` } : undefined;
            });
            const r = t[0] === je ? "2" : "";
            if (i[0] || i[1]) {
              e = new nv(e, n.projectionName(), i, [n.getName(`x${r}`), n.getName(`y${r}`)]);
            }
          }
          return e;
        }
        dependentFields() {
          return new Set(this.fields.filter(r.HD));
        }
        producedFields() {
          return new Set(this.as);
        }
        hash() {
          return `Geopoint ${this.projection} ${j(this.fields)} ${j(this.as)}`;
        }
        assemble() {
          return { type: "geopoint", projection: this.projection, fields: this.fields, as: this.as };
        }
      }
      class tv extends ep {
        clone() {
          return new tv(null, b(this.transform));
        }
        constructor(e, n) {
          super(e);
          this.transform = n;
        }
        dependentFields() {
          var e;
          return new Set([this.transform.impute, this.transform.key, ...((e = this.transform.groupby) !== null && e !== void 0 ? e : [])]);
        }
        producedFields() {
          return new Set([this.transform.impute]);
        }
        processSequence(e) {
          const { start: n = 0, stop: t, step: i } = e;
          const r = [n, t, ...(i ? [i] : [])].join(",");
          return { signal: `sequence(${r})` };
        }
        static makeFromTransform(e, n) {
          return new tv(e, n);
        }
        static makeFromEncoding(e, n) {
          const t = n.encoding;
          const i = t.x;
          const r = t.y;
          if (fc(i) && fc(r)) {
            const s = i.impute ? i : r.impute ? r : undefined;
            if (s === undefined) {
              return undefined;
            }
            const o = i.impute ? r : r.impute ? i : undefined;
            const { method: a, value: c, frame: l, keyvals: u } = s.impute;
            const f = kl(n.mark, t);
            return new tv(
              e,
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(Object.assign({ impute: s.field, key: o.field }, a ? { method: a } : {}), c !== undefined ? { value: c } : {}),
                    l ? { frame: l } : {}
                  ),
                  u !== undefined ? { keyvals: u } : {}
                ),
                f.length ? { groupby: f } : {}
              )
            );
          }
          return null;
        }
        hash() {
          return `Impute ${j(this.transform)}`;
        }
        assemble() {
          const { impute: e, key: n, keyvals: t, method: i, groupby: r, value: s, frame: o = [null, null] } = this.transform;
          const a = Object.assign(
            Object.assign(
              Object.assign(Object.assign({ type: "impute", field: e, key: n }, t ? { keyvals: Wf(t) ? this.processSequence(t) : t } : {}), {
                method: "value",
              }),
              r ? { groupby: r } : {}
            ),
            { value: !i || i === "value" ? s : null }
          );
          if (i && i !== "value") {
            const n = Object.assign(
              { type: "window", as: [`imputed_${e}_value`], ops: [i], fields: [e], frame: o, ignorePeers: false },
              r ? { groupby: r } : {}
            );
            const t = { type: "formula", expr: `datum.${e} === null ? datum.imputed_${e}_value : datum.${e}`, as: e };
            return [a, n, t];
          } else {
            return [a];
          }
        }
      }
      var iv =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      class rv extends ep {
        clone() {
          return new rv(null, b(this.transform));
        }
        constructor(e, n) {
          var t, i, r;
          super(e);
          this.transform = n;
          this.transform = b(n);
          const s = (t = this.transform.as) !== null && t !== void 0 ? t : [undefined, undefined];
          this.transform.as = [(i = s[0]) !== null && i !== void 0 ? i : n.on, (r = s[1]) !== null && r !== void 0 ? r : n.loess];
        }
        dependentFields() {
          var e;
          return new Set([this.transform.loess, this.transform.on, ...((e = this.transform.groupby) !== null && e !== void 0 ? e : [])]);
        }
        producedFields() {
          return new Set(this.transform.as);
        }
        hash() {
          return `LoessTransform ${j(this.transform)}`;
        }
        assemble() {
          const e = this.transform,
            { loess: n, on: t } = e,
            i = iv(e, ["loess", "on"]);
          const r = Object.assign({ type: "loess", x: t, y: n }, i);
          return r;
        }
      }
      class sv extends ep {
        clone() {
          return new sv(null, b(this.transform), this.secondary);
        }
        constructor(e, n, t) {
          super(e);
          this.transform = n;
          this.secondary = t;
        }
        static make(e, n, t, i) {
          const r = n.component.data.sources;
          const { from: s } = t;
          let o = null;
          if (Hf(s)) {
            let e = Pv(s.data, r);
            if (!e) {
              e = new ib(s.data);
              r.push(e);
            }
            const t = n.getName(`lookup_${i}`);
            o = new np(e, t, Wd.Lookup, n.component.data.outputNodeRefCounts);
            n.component.data.outputNodes[t] = o;
          } else if (Bf(s)) {
            const e = s.param;
            t = Object.assign({ as: e }, t);
            let i;
            try {
              i = n.getSelectionComponent(I(e), e);
            } catch (a) {
              throw new Error($i(e));
            }
            o = i.materialized;
            if (!o) {
              throw new Error(ki(e));
            }
          }
          return new sv(e, t, o.getSource());
        }
        dependentFields() {
          return new Set([this.transform.lookup]);
        }
        producedFields() {
          return new Set(this.transform.as ? (0, r.IX)(this.transform.as) : this.transform.from.fields);
        }
        hash() {
          return `Lookup ${j({ transform: this.transform, secondary: this.secondary })}`;
        }
        assemble() {
          let e;
          if (this.transform.from.fields) {
            e = Object.assign({ values: this.transform.from.fields }, this.transform.as ? { as: (0, r.IX)(this.transform.as) } : {});
          } else {
            let n = this.transform.as;
            if (!(0, r.HD)(n)) {
              Vr(Ti);
              n = "_lookup";
            }
            e = { as: [n] };
          }
          return Object.assign(
            Object.assign({ type: "lookup", from: this.secondary, key: this.transform.from.key, fields: [this.transform.lookup] }, e),
            this.transform.default ? { default: this.transform.default } : {}
          );
        }
      }
      var ov =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      class av extends ep {
        clone() {
          return new av(null, b(this.transform));
        }
        constructor(e, n) {
          var t, i, r;
          super(e);
          this.transform = n;
          this.transform = b(n);
          const s = (t = this.transform.as) !== null && t !== void 0 ? t : [undefined, undefined];
          this.transform.as = [(i = s[0]) !== null && i !== void 0 ? i : "prob", (r = s[1]) !== null && r !== void 0 ? r : "value"];
        }
        dependentFields() {
          var e;
          return new Set([this.transform.quantile, ...((e = this.transform.groupby) !== null && e !== void 0 ? e : [])]);
        }
        producedFields() {
          return new Set(this.transform.as);
        }
        hash() {
          return `QuantileTransform ${j(this.transform)}`;
        }
        assemble() {
          const e = this.transform,
            { quantile: n } = e,
            t = ov(e, ["quantile"]);
          const i = Object.assign({ type: "quantile", field: n }, t);
          return i;
        }
      }
      var cv =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      class lv extends ep {
        clone() {
          return new lv(null, b(this.transform));
        }
        constructor(e, n) {
          var t, i, r;
          super(e);
          this.transform = n;
          this.transform = b(n);
          const s = (t = this.transform.as) !== null && t !== void 0 ? t : [undefined, undefined];
          this.transform.as = [(i = s[0]) !== null && i !== void 0 ? i : n.on, (r = s[1]) !== null && r !== void 0 ? r : n.regression];
        }
        dependentFields() {
          var e;
          return new Set([this.transform.regression, this.transform.on, ...((e = this.transform.groupby) !== null && e !== void 0 ? e : [])]);
        }
        producedFields() {
          return new Set(this.transform.as);
        }
        hash() {
          return `RegressionTransform ${j(this.transform)}`;
        }
        assemble() {
          const e = this.transform,
            { regression: n, on: t } = e,
            i = cv(e, ["regression", "on"]);
          const r = Object.assign({ type: "regression", x: t, y: n }, i);
          return r;
        }
      }
      class uv extends ep {
        clone() {
          return new uv(null, b(this.transform));
        }
        constructor(e, n) {
          super(e);
          this.transform = n;
        }
        addDimensions(e) {
          var n;
          this.transform.groupby = P(((n = this.transform.groupby) !== null && n !== void 0 ? n : []).concat(e), (e) => e);
        }
        producedFields() {
          return undefined;
        }
        dependentFields() {
          var e;
          return new Set([this.transform.pivot, this.transform.value, ...((e = this.transform.groupby) !== null && e !== void 0 ? e : [])]);
        }
        hash() {
          return `PivotTransform ${j(this.transform)}`;
        }
        assemble() {
          const { pivot: e, value: n, groupby: t, limit: i, op: r } = this.transform;
          return Object.assign(
            Object.assign(
              Object.assign({ type: "pivot", field: e, value: n }, i !== undefined ? { limit: i } : {}),
              r !== undefined ? { op: r } : {}
            ),
            t !== undefined ? { groupby: t } : {}
          );
        }
      }
      class fv extends ep {
        clone() {
          return new fv(null, b(this.transform));
        }
        constructor(e, n) {
          super(e);
          this.transform = n;
        }
        dependentFields() {
          return new Set();
        }
        producedFields() {
          return new Set();
        }
        hash() {
          return `SampleTransform ${j(this.transform)}`;
        }
        assemble() {
          return { type: "sample", size: this.transform.sample };
        }
      }
      function dv(e) {
        let n = 0;
        function t(i, r) {
          var s;
          if (i instanceof ib) {
            if (!i.isGenerator && !Td(i.data)) {
              e.push(r);
              const n = { name: null, source: r.name, transform: [] };
              r = n;
            }
          }
          if (i instanceof Zh) {
            if (i.parent instanceof ib && !r.source) {
              r.format = Object.assign(Object.assign({}, (s = r.format) !== null && s !== void 0 ? s : {}), { parse: i.assembleFormatParse() });
              r.transform.push(...i.assembleTransforms(true));
            } else {
              r.transform.push(...i.assembleTransforms());
            }
          }
          if (i instanceof Gh) {
            if (!r.name) {
              r.name = `data_${n++}`;
            }
            if (!r.source || r.transform.length > 0) {
              e.push(r);
              i.data = r.name;
            } else {
              i.data = r.source;
            }
            e.push(...i.assemble());
            return;
          }
          if (
            i instanceof nb ||
            i instanceof tb ||
            i instanceof Yy ||
            i instanceof Ug ||
            i instanceof vm ||
            i instanceof nv ||
            i instanceof Jh ||
            i instanceof sv ||
            i instanceof Sb ||
            i instanceof jb ||
            i instanceof Zy ||
            i instanceof Qy ||
            i instanceof Ky ||
            i instanceof rv ||
            i instanceof av ||
            i instanceof lv ||
            i instanceof eb ||
            i instanceof fv ||
            i instanceof uv
          ) {
            r.transform.push(i.assemble());
          }
          if (i instanceof Uh || i instanceof ip || i instanceof tv || i instanceof kb || i instanceof ev) {
            r.transform.push(...i.assemble());
          }
          if (i instanceof np) {
            if (r.source && r.transform.length === 0) {
              i.setSource(r.source);
            } else if (i.parent instanceof np) {
              i.setSource(r.name);
            } else {
              if (!r.name) {
                r.name = `data_${n++}`;
              }
              i.setSource(r.name);
              if (i.numChildren() === 1) {
                e.push(r);
                const n = { name: null, source: r.name, transform: [] };
                r = n;
              }
            }
          }
          switch (i.numChildren()) {
            case 0:
              if (i instanceof np && (!r.source || r.transform.length > 0)) {
                e.push(r);
              }
              break;
            case 1:
              t(i.children[0], r);
              break;
            default: {
              if (!r.name) {
                r.name = `data_${n++}`;
              }
              let s = r.name;
              if (!r.source || r.transform.length > 0) {
                e.push(r);
              } else {
                s = r.source;
              }
              for (const e of i.children) {
                const n = { name: null, source: s, transform: [] };
                t(e, n);
              }
              break;
            }
          }
        }
        return t;
      }
      function pv(e) {
        const n = [];
        const t = dv(n);
        for (const i of e.children) {
          t(i, { source: e.name, name: null, transform: [] });
        }
        return n;
      }
      function gv(e, n) {
        var t, i;
        const r = [];
        const s = dv(r);
        let o = 0;
        for (const c of e.sources) {
          if (!c.hasName()) {
            c.dataName = `source_${o++}`;
          }
          const e = c.assemble();
          s(c, e);
        }
        for (const c of r) {
          if (c.transform.length === 0) {
            delete c.transform;
          }
        }
        let a = 0;
        for (const [c, l] of r.entries()) {
          if (((t = l.transform) !== null && t !== void 0 ? t : []).length === 0 && !l.source) {
            r.splice(a++, 0, r.splice(c, 1)[0]);
          }
        }
        for (const c of r) {
          for (const n of (i = c.transform) !== null && i !== void 0 ? i : []) {
            if (n.type === "lookup") {
              n.from = e.outputNodes[n.from].getSource();
            }
          }
        }
        for (const c of r) {
          if (c.name in n) {
            c.values = n[c.name];
          }
        }
        return r;
      }
      function mv(e) {
        if (e === "top" || e === "left" || Mt(e)) {
          return "header";
        }
        return "footer";
      }
      function hv(e) {
        for (const n of Qe) {
          bv(e, n);
        }
        vv(e, "x");
        vv(e, "y");
      }
      function bv(e, n) {
        var t;
        const { facet: i, config: s, child: o, component: a } = e;
        if (e.channelHasField(n)) {
          const c = i[n];
          const l = jm("title", null, s, n);
          let u = Ac(c, s, { allowDisabling: true, includeDefault: l === undefined || !!l });
          if (o.component.layoutHeaders[n].title) {
            u = (0, r.kJ)(u) ? u.join(", ") : u;
            u += ` / ${o.component.layoutHeaders[n].title}`;
            o.component.layoutHeaders[n].title = null;
          }
          const f = jm("labelOrient", c.header, s, n);
          const d = c.header !== null ? Y((t = c.header) === null || t === void 0 ? void 0 : t.labels, s.header.labels, true) : false;
          const p = $(["bottom", "right"], f) ? "footer" : "header";
          a.layoutHeaders[n] = { title: c.header !== null ? u : null, facetFieldDef: c, [p]: n === "facet" ? [] : [yv(e, n, d)] };
        }
      }
      function yv(e, n, t) {
        const i = n === "row" ? "height" : "width";
        return { labels: t, sizeSignal: e.child.component.layoutSize.get(i) ? e.child.getSizeSignalRef(i) : undefined, axes: [] };
      }
      function vv(e, n) {
        var t;
        const { child: i } = e;
        if (i.component.axes[n]) {
          const { layoutHeaders: r, resolve: s } = e.component;
          s.axis[n] = Hm(s, n);
          if (s.axis[n] === "shared") {
            const s = n === "x" ? "column" : "row";
            const o = r[s];
            for (const r of i.component.axes[n]) {
              const n = mv(r.get("orient"));
              (t = o[n]) !== null && t !== void 0 ? t : (o[n] = [yv(e, s, false)]);
              const i = Qg(r, "main", e.config, { header: true });
              if (i) {
                o[n][0].axes.push(i);
              }
              r.mainExtracted = true;
            }
          } else {
          }
        }
      }
      function Ov(e) {
        jv(e);
        wv(e, "width");
        wv(e, "height");
      }
      function xv(e) {
        jv(e);
        const n = e.layout.columns === 1 ? "width" : "childWidth";
        const t = e.layout.columns === undefined ? "height" : "childHeight";
        wv(e, n);
        wv(e, t);
      }
      function jv(e) {
        for (const n of e.children) {
          n.parseLayoutSize();
        }
      }
      function wv(e, n) {
        var t;
        const i = Rm(n);
        const r = Bn(i);
        const s = e.component.resolve;
        const o = e.component.layoutSize;
        let a;
        for (const c of e.children) {
          const n = c.component.layoutSize.getWithExplicit(i);
          const o = (t = s.scale[r]) !== null && t !== void 0 ? t : Um(r, e);
          if (o === "independent" && n.value === "step") {
            a = undefined;
            break;
          }
          if (a) {
            if (o === "independent" && a.value !== n.value) {
              a = undefined;
              break;
            }
            a = Ed(a, n, i, "");
          } else {
            a = n;
          }
        }
        if (a) {
          for (const t of e.children) {
            e.renameSignal(t.getName(i), e.getName(n));
            t.component.layoutSize.set(i, "merged", false);
          }
          o.setWithExplicit(n, a);
        } else {
          o.setWithExplicit(n, { explicit: false, value: undefined });
        }
      }
      function $v(e) {
        const { size: n, component: t } = e;
        for (const i of Rn) {
          const r = vn(i);
          if (n[r]) {
            const e = n[r];
            t.layoutSize.set(r, Cu(e) ? "step" : e, true);
          } else {
            const n = kv(e, r);
            t.layoutSize.set(r, n, false);
          }
        }
      }
      function kv(e, n) {
        const t = n === "width" ? "x" : "y";
        const i = e.config;
        const r = e.getScaleComponent(t);
        if (r) {
          const e = r.get("type");
          const t = r.get("range");
          if (mo(e)) {
            const e = Ru(i.view, n);
            if (Lt(t) || Cu(e)) {
              return "step";
            } else {
              return e;
            }
          } else {
            return qu(i.view, n);
          }
        } else if (e.hasProjection || e.mark === "arc") {
          return qu(i.view, n);
        } else {
          const e = Ru(i.view, n);
          return Cu(e) ? e.step : e;
        }
      }
      function Sv(e, n, t) {
        return Sc(n, Object.assign({ suffix: `by_${Sc(e)}` }, t !== null && t !== void 0 ? t : {}));
      }
      class Dv extends Xy {
        constructor(e, n, t, i) {
          super(e, "facet", n, t, i, e.resolve);
          this.child = zO(e.spec, this, this.getName("child"), undefined, i);
          this.children = [this.child];
          this.facet = this.initFacet(e.facet);
        }
        initFacet(e) {
          if (!Ka(e)) {
            return { facet: this.initFacetFieldDef(e, "facet") };
          }
          const n = A(e);
          const t = {};
          for (const i of n) {
            if (![oe, ae].includes(i)) {
              Vr(Ki(i, "facet"));
              break;
            }
            const n = e[i];
            if (n.field === undefined) {
              Vr(Xi(n, i));
              break;
            }
            t[i] = this.initFacetFieldDef(n, i);
          }
          return t;
        }
        initFacetFieldDef(e, n) {
          const t = Jc(e, n);
          if (t.header) {
            t.header = Et(t.header);
          } else if (t.header === null) {
            t.header = null;
          }
          return t;
        }
        channelHasField(e) {
          return !!this.facet[e];
        }
        fieldDef(e) {
          return this.facet[e];
        }
        parseData() {
          this.component.data = Cv(this);
          this.child.parseData();
        }
        parseLayoutSize() {
          jv(this);
        }
        parseSelections() {
          this.child.parseSelections();
          this.component.selection = this.child.component.selection;
        }
        parseMarkGroup() {
          this.child.parseMarkGroup();
        }
        parseAxesAndHeaders() {
          this.child.parseAxesAndHeaders();
          hv(this);
        }
        assembleSelectionTopLevelSignals(e) {
          return this.child.assembleSelectionTopLevelSignals(e);
        }
        assembleSignals() {
          this.child.assembleSignals();
          return [];
        }
        assembleSelectionData(e) {
          return this.child.assembleSelectionData(e);
        }
        getHeaderLayoutMixins() {
          var e, n, t;
          const i = {};
          for (const r of Qe) {
            for (const s of km) {
              const o = this.component.layoutHeaders[r];
              const a = o[s];
              const { facetFieldDef: c } = o;
              if (c) {
                const n = jm("titleOrient", c.header, this.config, r);
                if (["right", "bottom"].includes(n)) {
                  const t = xm(r, n);
                  (e = i.titleAnchor) !== null && e !== void 0 ? e : (i.titleAnchor = {});
                  i.titleAnchor[t] = "end";
                }
              }
              if (a === null || a === void 0 ? void 0 : a[0]) {
                const e = r === "row" ? "height" : "width";
                const a = s === "header" ? "headerBand" : "footerBand";
                if (r !== "facet" && !this.child.component.layoutSize.get(e)) {
                  (n = i[a]) !== null && n !== void 0 ? n : (i[a] = {});
                  i[a][r] = 0.5;
                }
                if (o.title) {
                  (t = i.offset) !== null && t !== void 0 ? t : (i.offset = {});
                  i.offset[r === "row" ? "rowTitle" : "columnTitle"] = 10;
                }
              }
            }
          }
          return i;
        }
        assembleDefaultLayout() {
          const { column: e, row: n } = this.facet;
          const t = e ? this.columnDistinctSignal() : n ? 1 : undefined;
          let i = "all";
          if (!n && this.component.resolve.scale.x === "independent") {
            i = "none";
          } else if (!e && this.component.resolve.scale.y === "independent") {
            i = "none";
          }
          return Object.assign(Object.assign(Object.assign({}, this.getHeaderLayoutMixins()), t ? { columns: t } : {}), { bounds: "full", align: i });
        }
        assembleLayoutSignals() {
          return this.child.assembleLayoutSignals();
        }
        columnDistinctSignal() {
          if (this.parent && this.parent instanceof Dv) {
            return undefined;
          } else {
            const e = this.getName("column_domain");
            return { signal: `length(data('${e}'))` };
          }
        }
        assembleGroupStyle() {
          return undefined;
        }
        assembleGroup(e) {
          if (this.parent && this.parent instanceof Dv) {
            return Object.assign(
              Object.assign(
                {},
                this.channelHasField("column") ? { encode: { update: { columns: { field: Sc(this.facet.column, { prefix: "distinct" }) } } } } : {}
              ),
              super.assembleGroup(e)
            );
          }
          return super.assembleGroup(e);
        }
        getCardinalityAggregateForChild() {
          const e = [];
          const n = [];
          const t = [];
          if (this.child instanceof Dv) {
            if (this.child.channelHasField("column")) {
              const i = Sc(this.child.facet.column);
              e.push(i);
              n.push("distinct");
              t.push(`distinct_${i}`);
            }
          } else {
            for (const i of Rn) {
              const r = this.child.component.scales[i];
              if (r && !r.merged) {
                const s = r.get("type");
                const o = r.get("range");
                if (mo(s) && Lt(o)) {
                  const r = Zb(this.child, i);
                  const s = Qb(r);
                  if (s) {
                    e.push(s);
                    n.push("distinct");
                    t.push(`distinct_${s}`);
                  } else {
                    Vr(hi(i));
                  }
                }
              }
            }
          }
          return { fields: e, ops: n, as: t };
        }
        assembleFacet() {
          const { name: e, data: n } = this.component.data.facetRoot;
          const { row: t, column: i } = this.facet;
          const { fields: s, ops: o, as: a } = this.getCardinalityAggregateForChild();
          const c = [];
          for (const u of Qe) {
            const e = this.facet[u];
            if (e) {
              c.push(Sc(e));
              const { bin: n, sort: l } = e;
              if (Dt(n)) {
                c.push(Sc(e, { binSuffix: "end" }));
              }
              if (Xa(l)) {
                const { field: n, op: r = Ha } = l;
                const c = Sv(e, l);
                if (t && i) {
                  s.push(c);
                  o.push("max");
                  a.push(c);
                } else {
                  s.push(n);
                  o.push(r);
                  a.push(c);
                }
              } else if ((0, r.kJ)(l)) {
                const n = Om(e, u);
                s.push(n);
                o.push("max");
                a.push(n);
              }
            }
          }
          const l = !!t && !!i;
          return Object.assign(
            { name: e, data: n, groupby: c },
            l || s.length > 0
              ? { aggregate: Object.assign(Object.assign({}, l ? { cross: l } : {}), s.length ? { fields: s, ops: o, as: a } : {}) }
              : {}
          );
        }
        facetSortFields(e) {
          const { facet: n } = this;
          const t = n[e];
          if (t) {
            if (Xa(t.sort)) {
              return [Sv(t, t.sort, { expr: "datum" })];
            } else if ((0, r.kJ)(t.sort)) {
              return [Om(t, e, { expr: "datum" })];
            }
            return [Sc(t, { expr: "datum" })];
          }
          return [];
        }
        facetSortOrder(e) {
          const { facet: n } = this;
          const t = n[e];
          if (t) {
            const { sort: e } = t;
            const n = (Xa(e) ? e.order : !(0, r.kJ)(e) && e) || "ascending";
            return [n];
          }
          return [];
        }
        assembleLabelTitle() {
          var e;
          const { facet: n, config: t } = this;
          if (n.facet) {
            return zm(n.facet, "facet", t);
          }
          const i = { row: ["top", "bottom"], column: ["left", "right"] };
          for (const r of $m) {
            if (n[r]) {
              const s = jm("labelOrient", (e = n[r]) === null || e === void 0 ? void 0 : e.header, t, r);
              if (i[r].includes(s)) {
                return zm(n[r], r, t);
              }
            }
          }
          return undefined;
        }
        assembleMarks() {
          const { child: e } = this;
          const n = this.component.data.facetRoot;
          const t = pv(n);
          const i = e.assembleGroupEncodeEntry(false);
          const r = this.assembleLabelTitle() || e.assembleTitle();
          const s = e.assembleGroupStyle();
          const o = Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(Object.assign({ name: this.getName("cell"), type: "group" }, r ? { title: r } : {}), s ? { style: s } : {}),
                  {
                    from: { facet: this.assembleFacet() },
                    sort: { field: Qe.map((e) => this.facetSortFields(e)).flat(), order: Qe.map((e) => this.facetSortOrder(e)).flat() },
                  }
                ),
                t.length > 0 ? { data: t } : {}
              ),
              i ? { encode: { update: i } } : {}
            ),
            e.assembleGroup(Gd(this, []))
          );
          return [o];
        }
        getMapping() {
          return this.facet;
        }
      }
      function _v(e, n) {
        const { row: t, column: i } = n;
        if (t && i) {
          let n = null;
          for (const r of [t, i]) {
            if (Xa(r.sort)) {
              const { field: t, op: i = Ha } = r.sort;
              e = n = new jb(e, { joinaggregate: [{ op: i, field: t, as: Sv(r, r.sort, { forAs: true }) }], groupby: [Sc(r)] });
            }
          }
          return n;
        }
        return null;
      }
      function Pv(e, n) {
        var t, i, r, s;
        for (const o of n) {
          const n = o.data;
          if (e.name && o.hasName() && e.name !== o.dataName) {
            continue;
          }
          const a = (t = e["format"]) === null || t === void 0 ? void 0 : t.mesh;
          const c = (i = n.format) === null || i === void 0 ? void 0 : i.feature;
          if (a && c) {
            continue;
          }
          const l = (r = e["format"]) === null || r === void 0 ? void 0 : r.feature;
          if ((l || c) && l !== c) {
            continue;
          }
          const u = (s = n.format) === null || s === void 0 ? void 0 : s.mesh;
          if ((a || u) && a !== u) {
            continue;
          }
          if (Ad(e) && Ad(n)) {
            if (h(e.values, n.values)) {
              return o;
            }
          } else if (Td(e) && Td(n)) {
            if (e.url === n.url) {
              return o;
            }
          } else if (Md(e)) {
            if (e.name === o.dataName) {
              return o;
            }
          }
        }
        return null;
      }
      function Fv(e, n) {
        if (e.data || !e.parent) {
          if (e.data === null) {
            const e = new ib({ values: [] });
            n.push(e);
            return e;
          }
          const t = Pv(e.data, n);
          if (t) {
            if (!Ld(e.data)) {
              t.data.format = D({}, e.data.format, t.data.format);
            }
            if (!t.hasName() && e.data.name) {
              t.dataName = e.data.name;
            }
            return t;
          } else {
            const t = new ib(e.data);
            n.push(t);
            return t;
          }
        } else {
          return e.parent.component.data.facetRoot ? e.parent.component.data.facetRoot : e.parent.component.data.main;
        }
      }
      function zv(e, n, t) {
        var i, r;
        let s = 0;
        for (const o of n.transforms) {
          let a = undefined;
          let c;
          if (nd(o)) {
            c = e = new vm(e, o);
            a = "derived";
          } else if (Rf(o)) {
            const r = Kh(o);
            c = e = (i = Zh.makeWithAncestors(e, {}, r, t)) !== null && i !== void 0 ? i : e;
            e = new Ug(e, n, o.filter);
          } else if (td(o)) {
            c = e = Uh.makeFromTransform(e, o, n);
            a = "number";
          } else if (rd(o)) {
            a = "date";
            const n = t.getWithExplicit(o.field);
            if (n.value === undefined) {
              e = new Zh(e, { [o.field]: a });
              t.set(o.field, a, false);
            }
            c = e = ip.makeFromTransform(e, o);
          } else if (sd(o)) {
            c = e = Jh.makeFromTransform(e, o);
            a = "number";
            if (Mg(n)) {
              e = new eb(e);
            }
          } else if (Uf(o)) {
            c = e = sv.make(e, n, o, s++);
            a = "derived";
          } else if (Qf(o)) {
            c = e = new Sb(e, o);
            a = "number";
          } else if (Zf(o)) {
            c = e = new jb(e, o);
            a = "number";
          } else if (od(o)) {
            c = e = kb.makeFromTransform(e, o);
            a = "derived";
          } else if (ad(o)) {
            c = e = new Zy(e, o);
            a = "derived";
          } else if (ed(o)) {
            c = e = new Qy(e, o);
            a = "derived";
          } else if (Jf(o)) {
            c = e = new uv(e, o);
            a = "derived";
          } else if (Yf(o)) {
            e = new fv(e, o);
          } else if (id(o)) {
            c = e = tv.makeFromTransform(e, o);
            a = "derived";
          } else if (Gf(o)) {
            c = e = new Ky(e, o);
            a = "derived";
          } else if (Xf(o)) {
            c = e = new av(e, o);
            a = "derived";
          } else if (Vf(o)) {
            c = e = new lv(e, o);
            a = "derived";
          } else if (Kf(o)) {
            c = e = new rv(e, o);
            a = "derived";
          } else {
            Vr(Ni(o));
            continue;
          }
          if (c && a !== undefined) {
            for (const e of (r = c.producedFields()) !== null && r !== void 0 ? r : []) {
              t.set(e, a, false);
            }
          }
        }
        return e;
      }
      function Cv(e) {
        var n, t, i, r, s, o, a, c, l, u;
        let f = Fv(e, e.component.data.sources);
        const { outputNodes: d, outputNodeRefCounts: p } = e.component.data;
        const g = e.data;
        const m = g && (Ld(g) || Td(g) || Ad(g));
        const h = !m && e.parent ? e.parent.component.data.ancestorParse.clone() : new Nd();
        if (Ld(g)) {
          if (qd(g)) {
            f = new tb(f, g.sequence);
          } else if (Rd(g)) {
            f = new nb(f, g.graticule);
          }
          h.parseNothing = true;
        } else if (((n = g === null || g === void 0 ? void 0 : g.format) === null || n === void 0 ? void 0 : n.parse) === null) {
          h.parseNothing = true;
        }
        f = (t = Zh.makeExplicit(f, e, h)) !== null && t !== void 0 ? t : f;
        f = new eb(f);
        const b = e.parent && Jy(e.parent);
        if (Uy(e) || Hy(e)) {
          if (b) {
            f = (i = Uh.makeFromEncoding(f, e)) !== null && i !== void 0 ? i : f;
          }
        }
        if (e.transforms.length > 0) {
          f = zv(f, e, h);
        }
        const y = Qh(e);
        const v = Yh(e);
        f = (r = Zh.makeWithAncestors(f, {}, Object.assign(Object.assign({}, y), v), h)) !== null && r !== void 0 ? r : f;
        if (Uy(e)) {
          f = ev.parseAll(f, e);
          f = nv.parseAll(f, e);
        }
        if (Uy(e) || Hy(e)) {
          if (!b) {
            f = (s = Uh.makeFromEncoding(f, e)) !== null && s !== void 0 ? s : f;
          }
          f = (o = ip.makeFromEncoding(f, e)) !== null && o !== void 0 ? o : f;
          f = vm.parseAllForSortIndex(f, e);
        }
        const O = e.getDataName(Wd.Raw);
        const x = new np(f, O, Wd.Raw, p);
        d[O] = x;
        f = x;
        if (Uy(e)) {
          const n = Jh.makeFromEncoding(f, e);
          if (n) {
            f = n;
            if (Mg(e)) {
              f = new eb(f);
            }
          }
          f = (a = tv.makeFromEncoding(f, e)) !== null && a !== void 0 ? a : f;
          f = (c = kb.makeFromEncoding(f, e)) !== null && c !== void 0 ? c : f;
        }
        if (Uy(e)) {
          f = (l = Yy.make(f, e)) !== null && l !== void 0 ? l : f;
        }
        const j = e.getDataName(Wd.Main);
        const w = new np(f, j, Wd.Main, p);
        d[j] = w;
        f = w;
        if (Uy(e)) {
          Gg(e, w);
        }
        let $ = null;
        if (Hy(e)) {
          const n = e.getName("facet");
          f = (u = _v(f, e.facet)) !== null && u !== void 0 ? u : f;
          $ = new Gh(f, e, n, w.getSource());
          d[n] = $;
        }
        return Object.assign(Object.assign({}, e.component.data), {
          outputNodes: d,
          outputNodeRefCounts: p,
          raw: x,
          main: w,
          facetRoot: $,
          ancestorParse: h,
        });
      }
      class Ev extends Gy {
        constructor(e, n, t, i) {
          var r, s, o, a;
          super(e, "concat", n, t, i, e.resolve);
          if (
            ((s = (r = e.resolve) === null || r === void 0 ? void 0 : r.axis) === null || s === void 0 ? void 0 : s.x) === "shared" ||
            ((a = (o = e.resolve) === null || o === void 0 ? void 0 : o.axis) === null || a === void 0 ? void 0 : a.y) === "shared"
          ) {
            Vr(Fi);
          }
          this.children = this.getChildren(e).map((e, n) => zO(e, this, this.getName(`concat_${n}`), undefined, i));
        }
        parseData() {
          this.component.data = Cv(this);
          for (const e of this.children) {
            e.parseData();
          }
        }
        parseSelections() {
          this.component.selection = {};
          for (const e of this.children) {
            e.parseSelections();
            for (const n of A(e.component.selection)) {
              this.component.selection[n] = e.component.selection[n];
            }
          }
        }
        parseMarkGroup() {
          for (const e of this.children) {
            e.parseMarkGroup();
          }
        }
        parseAxesAndHeaders() {
          for (const e of this.children) {
            e.parseAxesAndHeaders();
          }
        }
        getChildren(e) {
          if (Pu(e)) {
            return e.vconcat;
          } else if (Fu(e)) {
            return e.hconcat;
          }
          return e.concat;
        }
        parseLayoutSize() {
          xv(this);
        }
        parseAxisGroup() {
          return null;
        }
        assembleSelectionTopLevelSignals(e) {
          return this.children.reduce((e, n) => n.assembleSelectionTopLevelSignals(e), e);
        }
        assembleSignals() {
          this.children.forEach((e) => e.assembleSignals());
          return [];
        }
        assembleLayoutSignals() {
          const e = Mm(this);
          for (const n of this.children) {
            e.push(...n.assembleLayoutSignals());
          }
          return e;
        }
        assembleSelectionData(e) {
          return this.children.reduce((e, n) => n.assembleSelectionData(e), e);
        }
        assembleMarks() {
          return this.children.map((e) => {
            const n = e.assembleTitle();
            const t = e.assembleGroupStyle();
            const i = e.assembleGroupEncodeEntry(false);
            return Object.assign(
              Object.assign(
                Object.assign(Object.assign({ type: "group", name: e.getName("group") }, n ? { title: n } : {}), t ? { style: t } : {}),
                i ? { encode: { update: i } } : {}
              ),
              e.assembleGroup()
            );
          });
        }
        assembleGroupStyle() {
          return undefined;
        }
        assembleDefaultLayout() {
          const e = this.layout.columns;
          return Object.assign(Object.assign({}, e != null ? { columns: e } : {}), { bounds: "full", align: "each" });
        }
      }
      function Nv(e) {
        return e === false || e === null;
      }
      const Tv = Object.assign(Object.assign({ disable: 1, gridScale: 1, scale: 1 }, sl), { labelExpr: 1, encode: 1 });
      const Av = A(Tv);
      class Mv extends _d {
        constructor(e = {}, n = {}, t = false) {
          super();
          this.explicit = e;
          this.implicit = n;
          this.mainExtracted = t;
        }
        clone() {
          return new Mv(b(this.explicit), b(this.implicit), this.mainExtracted);
        }
        hasAxisPart(e) {
          if (e === "axis") {
            return true;
          }
          if (e === "grid" || e === "title") {
            return !!this.get(e);
          }
          return !Nv(this.get(e));
        }
        hasOrientSignalRef() {
          return Mt(this.explicit.orient);
        }
      }
      function Lv(e, n, t) {
        var i;
        const { encoding: r, config: s } = e;
        const o = (i = Wc(r[n])) !== null && i !== void 0 ? i : Wc(r[yn(n)]);
        const a = e.axis(n) || {};
        const { format: c, formatType: l } = a;
        if (Fa(l)) {
          return Object.assign({ text: Ta({ fieldOrDatumDef: o, field: "datum.value", format: c, formatType: l, config: s }) }, t);
        } else if (c === undefined && l === undefined && s.customFormatTypes) {
          if (dc(o) === "quantitative") {
            if (xc(o) && o.stack === "normalize" && s.normalizedNumberFormatType) {
              return Object.assign(
                {
                  text: Ta({
                    fieldOrDatumDef: o,
                    field: "datum.value",
                    format: s.normalizedNumberFormat,
                    formatType: s.normalizedNumberFormatType,
                    config: s,
                  }),
                },
                t
              );
            } else if (s.numberFormatType) {
              return Object.assign(
                { text: Ta({ fieldOrDatumDef: o, field: "datum.value", format: s.numberFormat, formatType: s.numberFormatType, config: s }) },
                t
              );
            }
          }
          if (dc(o) === "temporal" && s.timeFormatType && fc(o) && !o.timeUnit) {
            return Object.assign(
              { text: Ta({ fieldOrDatumDef: o, field: "datum.value", format: s.timeFormat, formatType: s.timeFormatType, config: s }) },
              t
            );
          }
        }
        return t;
      }
      function qv(e) {
        return Rn.reduce((n, t) => {
          if (e.component.scales[t]) {
            n[t] = [Jv(t, e)];
          }
          return n;
        }, {});
      }
      const Iv = { bottom: "top", top: "bottom", left: "right", right: "left" };
      function Rv(e) {
        var n;
        const { axes: t, resolve: i } = e.component;
        const r = { top: 0, bottom: 0, right: 0, left: 0 };
        for (const s of e.children) {
          s.parseAxesAndHeaders();
          for (const n of A(s.component.axes)) {
            i.axis[n] = Hm(e.component.resolve, n);
            if (i.axis[n] === "shared") {
              t[n] = Wv(t[n], s.component.axes[n]);
              if (!t[n]) {
                i.axis[n] = "independent";
                delete t[n];
              }
            }
          }
        }
        for (const s of Rn) {
          for (const o of e.children) {
            if (!o.component.axes[s]) {
              continue;
            }
            if (i.axis[s] === "independent") {
              t[s] = ((n = t[s]) !== null && n !== void 0 ? n : []).concat(o.component.axes[s]);
              for (const e of o.component.axes[s]) {
                const { value: n, explicit: t } = e.getWithExplicit("orient");
                if (Mt(n)) {
                  continue;
                }
                if (r[n] > 0 && !t) {
                  const t = Iv[n];
                  if (r[n] > r[t]) {
                    e.set("orient", t, false);
                  }
                }
                r[n]++;
              }
            }
            delete o.component.axes[s];
          }
          if (i.axis[s] === "independent" && t[s] && t[s].length > 1) {
            for (const e of t[s]) {
              if (!!e.get("grid") && !e.explicit.grid) {
                e.implicit.grid = false;
              }
            }
          }
        }
      }
      function Wv(e, n) {
        if (e) {
          if (e.length !== n.length) {
            return undefined;
          }
          const t = e.length;
          for (let i = 0; i < t; i++) {
            const t = e[i];
            const r = n[i];
            if (!!t !== !!r) {
              return undefined;
            } else if (t && r) {
              const n = t.getWithExplicit("orient");
              const s = r.getWithExplicit("orient");
              if (n.explicit && s.explicit && n.value !== s.value) {
                return undefined;
              } else {
                e[i] = Uv(t, r);
              }
            }
          }
        } else {
          return n.map((e) => e.clone());
        }
        return e;
      }
      function Uv(e, n) {
        for (const t of Av) {
          const i = Ed(e.getWithExplicit(t), n.getWithExplicit(t), t, "axis", (e, n) => {
            switch (t) {
              case "title":
                return ui(e, n);
              case "gridScale":
                return { explicit: e.explicit, value: Y(e.value, n.value) };
            }
            return Cd(e, n, t, "axis");
          });
          e.setWithExplicit(t, i);
        }
        return e;
      }
      function Hv(e, n, t, i, r) {
        if (n === "disable") {
          return t !== undefined;
        }
        t = t || {};
        switch (n) {
          case "titleAngle":
          case "labelAngle":
            return e === (Mt(t.labelAngle) ? t.labelAngle : ie(t.labelAngle));
          case "values":
            return !!t.values;
          case "encode":
            return !!t.encoding || !!t.labelAngle;
          case "title":
            if (e === hm(i, r)) {
              return true;
            }
        }
        return e === t[n];
      }
      const Bv = new Set(["grid", "translate", "format", "formatType", "orient", "labelExpr", "tickCount", "position", "tickMinStep"]);
      function Jv(e, n) {
        var t, i, r;
        let s = n.axis(e);
        const o = new Mv();
        const a = Wc(n.encoding[e]);
        const { mark: c, config: l } = n;
        const u =
          (s === null || s === void 0 ? void 0 : s.orient) ||
          ((t = l[e === "x" ? "axisX" : "axisY"]) === null || t === void 0 ? void 0 : t.orient) ||
          ((i = l.axis) === null || i === void 0 ? void 0 : i.orient) ||
          gm(e);
        const f = n.getScaleComponent(e).get("type");
        const d = tm(e, f, u, n.config);
        const p = s !== undefined ? !s : rm("disable", l.style, s === null || s === void 0 ? void 0 : s.style, d).configValue;
        o.set("disable", p, s !== undefined);
        if (p) {
          return o;
        }
        s = s || {};
        const g = cm(a, s, e, l.style, d);
        const m = { fieldOrDatumDef: a, axis: s, channel: e, model: n, scaleType: f, orient: u, labelAngle: g, mark: c, config: l };
        for (const y of Av) {
          const t = y in sm ? sm[y](m) : al(y) ? s[y] : undefined;
          const i = t !== undefined;
          const r = Hv(t, y, s, n, e);
          if (i && r) {
            o.set(y, t, r);
          } else {
            const { configValue: e = undefined, configFrom: n = undefined } = al(y) && y !== "values" ? rm(y, l.style, s.style, d) : {};
            const a = e !== undefined;
            if (i && !a) {
              o.set(y, t, r);
            } else if (!(n === "vgAxisConfig") || (Bv.has(y) && a) || tl(e) || Mt(e)) {
              o.set(y, e, false);
            }
          }
        }
        const h = (r = s.encoding) !== null && r !== void 0 ? r : {};
        const b = il.reduce((t, i) => {
          var r;
          if (!o.hasAxisPart(i)) {
            return t;
          }
          const s = Wm((r = h[i]) !== null && r !== void 0 ? r : {}, n);
          const a = i === "labels" ? Lv(n, e, s) : s;
          if (a !== undefined && !T(a)) {
            t[i] = { update: a };
          }
          return t;
        }, {});
        if (!T(b)) {
          o.set("encode", b, !!s.encoding || s.labelAngle !== undefined);
        }
        return o;
      }
      function Gv({ encoding: e, size: n }) {
        for (const t of Rn) {
          const i = vn(t);
          if (Cu(n[i])) {
            if (gc(e[t])) {
              delete n[i];
              Vr(br(i));
            }
          }
        }
        return n;
      }
      function Xv(e, n, t) {
        const i = Et(e);
        const r = ii("orient", i, t);
        i.orient = Qv(i.type, n, r);
        if (r !== undefined && r !== i.orient) {
          Vr(sr(i.orient, r));
        }
        if (i.type === "bar" && i.orient) {
          const e = ii("cornerRadiusEnd", i, t);
          if (e !== undefined) {
            const t = (i.orient === "horizontal" && n.x2) || (i.orient === "vertical" && n.y2) ? ["cornerRadius"] : ma[i.orient];
            for (const n of t) {
              i[n] = e;
            }
            if (i.cornerRadiusEnd !== undefined) {
              delete i.cornerRadiusEnd;
            }
          }
        }
        const s = ii("opacity", i, t);
        if (s === undefined) {
          i.opacity = Kv(i.type, n);
        }
        const o = ii("cursor", i, t);
        if (o === undefined) {
          i.cursor = Vv(i, n, t);
        }
        return i;
      }
      function Vv(e, n, t) {
        if (n.href || e.href || ii("href", e, t)) {
          return "pointer";
        }
        return e.cursor;
      }
      function Kv(e, n) {
        if ($([Ho, Xo, Ko, Yo], e)) {
          if (!bl(n)) {
            return 0.7;
          }
        }
        return undefined;
      }
      function Yv(e, n, { graticule: t }) {
        if (t) {
          return false;
        }
        const i = ri("filled", e, n);
        const r = e.type;
        return Y(i, r !== Ho && r !== Uo && r !== Jo);
      }
      function Qv(e, n, t) {
        switch (e) {
          case Ho:
          case Ko:
          case Yo:
          case Go:
          case Bo:
          case Wo:
            return undefined;
        }
        const { x: i, y: r, x2: s, y2: o } = n;
        switch (e) {
          case Ro:
            if (fc(i) && (_t(i.bin) || (fc(r) && r.aggregate && !i.aggregate))) {
              return "vertical";
            }
            if (fc(r) && (_t(r.bin) || (fc(i) && i.aggregate && !r.aggregate))) {
              return "horizontal";
            }
            if (o || s) {
              if (t) {
                return t;
              }
              if (!s) {
                if ((fc(i) && i.type === Gs && !Dt(i.bin)) || hc(i)) {
                  if (fc(r) && _t(r.bin)) {
                    return "horizontal";
                  }
                }
                return "vertical";
              }
              if (!o) {
                if ((fc(r) && r.type === Gs && !Dt(r.bin)) || hc(r)) {
                  if (fc(i) && _t(i.bin)) {
                    return "vertical";
                  }
                }
                return "horizontal";
              }
            }
          case Jo:
            if (s && !(fc(i) && _t(i.bin)) && o && !(fc(r) && _t(r.bin))) {
              return undefined;
            }
          case Io:
            if (o) {
              if (fc(r) && _t(r.bin)) {
                return "horizontal";
              } else {
                return "vertical";
              }
            } else if (s) {
              if (fc(i) && _t(i.bin)) {
                return "vertical";
              } else {
                return "horizontal";
              }
            } else if (e === Jo) {
              if (i && !r) {
                return "vertical";
              } else if (r && !i) {
                return "horizontal";
              }
            }
          case Uo:
          case Xo: {
            const n = gc(i);
            const s = gc(r);
            if (t) {
              return t;
            } else if (n && !s) {
              return e !== "tick" ? "horizontal" : "vertical";
            } else if (!n && s) {
              return e !== "tick" ? "vertical" : "horizontal";
            } else if (n && s) {
              const n = i;
              const t = r;
              const s = n.type === Vs;
              const o = t.type === Vs;
              if (s && !o) {
                return e !== "tick" ? "vertical" : "horizontal";
              } else if (!s && o) {
                return e !== "tick" ? "horizontal" : "vertical";
              }
              if (!n.aggregate && t.aggregate) {
                return e !== "tick" ? "vertical" : "horizontal";
              } else if (n.aggregate && !t.aggregate) {
                return e !== "tick" ? "horizontal" : "vertical";
              }
              return "vertical";
            } else {
              return undefined;
            }
          }
        }
        return "vertical";
      }
      const Zv = {
        vgMark: "arc",
        encodeEntry: (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    Zp(e, { align: "ignore", baseline: "ignore", color: "include", size: "ignore", orient: "ignore", theta: "ignore" })
                  ),
                  Tp("x", e, { defaultPos: "mid" })
                ),
                Tp("y", e, { defaultPos: "mid" })
              ),
              Jp(e, "radius")
            ),
            Jp(e, "theta")
          ),
      };
      const eO = {
        vgMark: "area",
        encodeEntry: (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  Zp(e, { align: "ignore", baseline: "ignore", color: "include", orient: "include", size: "ignore", theta: "ignore" })
                ),
                Rp("x", e, { defaultPos: "zeroOrMin", defaultPos2: "zeroOrMin", range: e.markDef.orient === "horizontal" })
              ),
              Rp("y", e, { defaultPos: "zeroOrMin", defaultPos2: "zeroOrMin", range: e.markDef.orient === "vertical" })
            ),
            ig(e)
          ),
      };
      const nO = {
        vgMark: "rect",
        encodeEntry: (e) =>
          Object.assign(
            Object.assign(
              Object.assign({}, Zp(e, { align: "ignore", baseline: "ignore", color: "include", orient: "ignore", size: "ignore", theta: "ignore" })),
              Jp(e, "x")
            ),
            Jp(e, "y")
          ),
      };
      const tO = {
        vgMark: "shape",
        encodeEntry: (e) =>
          Object.assign({}, Zp(e, { align: "ignore", baseline: "ignore", color: "include", size: "ignore", orient: "ignore", theta: "ignore" })),
        postEncodingTransform: (e) => {
          const { encoding: n } = e;
          const t = n.shape;
          const i = Object.assign(
            { type: "geoshape", projection: e.projectionName() },
            t && fc(t) && t.type === Ys ? { field: Sc(t, { expr: "datum" }) } : {}
          );
          return [i];
        },
      };
      const iO = {
        vgMark: "image",
        encodeEntry: (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign({}, Zp(e, { align: "ignore", baseline: "ignore", color: "ignore", orient: "ignore", size: "ignore", theta: "ignore" })),
                Jp(e, "x")
              ),
              Jp(e, "y")
            ),
            wp(e, "url")
          ),
      };
      const rO = {
        vgMark: "line",
        encodeEntry: (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    Zp(e, { align: "ignore", baseline: "ignore", color: "include", size: "ignore", orient: "ignore", theta: "ignore" })
                  ),
                  Tp("x", e, { defaultPos: "mid" })
                ),
                Tp("y", e, { defaultPos: "mid" })
              ),
              zp("size", e, { vgChannel: "strokeWidth" })
            ),
            ig(e)
          ),
      };
      const sO = {
        vgMark: "trail",
        encodeEntry: (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    Zp(e, { align: "ignore", baseline: "ignore", color: "include", size: "include", orient: "ignore", theta: "ignore" })
                  ),
                  Tp("x", e, { defaultPos: "mid" })
                ),
                Tp("y", e, { defaultPos: "mid" })
              ),
              zp("size", e)
            ),
            ig(e)
          ),
      };
      function oO(e, n) {
        const { config: t } = e;
        return Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    Zp(e, { align: "ignore", baseline: "ignore", color: "include", size: "include", orient: "ignore", theta: "ignore" })
                  ),
                  Tp("x", e, { defaultPos: "mid" })
                ),
                Tp("y", e, { defaultPos: "mid" })
              ),
              zp("size", e)
            ),
            zp("angle", e)
          ),
          aO(e, t, n)
        );
      }
      function aO(e, n, t) {
        if (t) {
          return { shape: { value: t } };
        }
        return zp("shape", e);
      }
      const cO = { vgMark: "symbol", encodeEntry: (e) => oO(e) };
      const lO = { vgMark: "symbol", encodeEntry: (e) => oO(e, "circle") };
      const uO = { vgMark: "symbol", encodeEntry: (e) => oO(e, "square") };
      const fO = {
        vgMark: "rect",
        encodeEntry: (e) =>
          Object.assign(
            Object.assign(
              Object.assign({}, Zp(e, { align: "ignore", baseline: "ignore", color: "include", orient: "ignore", size: "ignore", theta: "ignore" })),
              Jp(e, "x")
            ),
            Jp(e, "y")
          ),
      };
      const dO = {
        vgMark: "rule",
        encodeEntry: (e) => {
          const { markDef: n } = e;
          const t = n.orient;
          if (!e.encoding.x && !e.encoding.y && !e.encoding.latitude && !e.encoding.longitude) {
            return {};
          }
          return Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  Zp(e, { align: "ignore", baseline: "ignore", color: "include", orient: "ignore", size: "ignore", theta: "ignore" })
                ),
                Rp("x", e, { defaultPos: t === "horizontal" ? "zeroOrMax" : "mid", defaultPos2: "zeroOrMin", range: t !== "vertical" })
              ),
              Rp("y", e, { defaultPos: t === "vertical" ? "zeroOrMax" : "mid", defaultPos2: "zeroOrMin", range: t !== "horizontal" })
            ),
            zp("size", e, { vgChannel: "strokeWidth" })
          );
        },
      };
      const pO = {
        vgMark: "text",
        encodeEntry: (e) => {
          const { config: n, encoding: t } = e;
          return Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              {},
                              Zp(e, { align: "include", baseline: "include", color: "include", size: "ignore", orient: "ignore", theta: "include" })
                            ),
                            Tp("x", e, { defaultPos: "mid" })
                          ),
                          Tp("y", e, { defaultPos: "mid" })
                        ),
                        wp(e)
                      ),
                      zp("size", e, { vgChannel: "fontSize" })
                    ),
                    zp("angle", e)
                  ),
                  sg("align", gO(e.markDef, t, n))
                ),
                sg("baseline", mO(e.markDef, t, n))
              ),
              Tp("radius", e, { defaultPos: null })
            ),
            Tp("theta", e, { defaultPos: null })
          );
        },
      };
      function gO(e, n, t) {
        const i = ii("align", e, t);
        if (i === undefined) {
          return "center";
        }
        return undefined;
      }
      function mO(e, n, t) {
        const i = ii("baseline", e, t);
        if (i === undefined) {
          return "middle";
        }
        return undefined;
      }
      const hO = {
        vgMark: "rect",
        encodeEntry: (e) => {
          const { config: n, markDef: t } = e;
          const i = t.orient;
          const r = i === "horizontal" ? "width" : "height";
          const s = i === "horizontal" ? "height" : "width";
          return Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    Zp(e, { align: "ignore", baseline: "ignore", color: "include", orient: "ignore", size: "ignore", theta: "ignore" })
                  ),
                  Tp("x", e, { defaultPos: "mid", vgChannel: "xc" })
                ),
                Tp("y", e, { defaultPos: "mid", vgChannel: "yc" })
              ),
              zp("size", e, { defaultValue: bO(e), vgChannel: r })
            ),
            { [s]: Yt(ii("thickness", t, n)) }
          );
        },
      };
      function bO(e) {
        var n;
        const { config: t, markDef: i } = e;
        const { orient: s } = i;
        const o = s === "horizontal" ? "width" : "height";
        const a = e.getScaleComponent(s === "horizontal" ? "x" : "y");
        const c = (n = ii("size", i, t, { vgChannel: o })) !== null && n !== void 0 ? n : t.tick.bandSize;
        if (c !== undefined) {
          return c;
        } else {
          const e = a ? a.get("range") : undefined;
          if (e && Lt(e) && (0, r.hj)(e.step)) {
            return (e.step * 3) / 4;
          }
          const n = Iu(t.view, o);
          return (n * 3) / 4;
        }
      }
      const yO = {
        arc: Zv,
        area: eO,
        bar: nO,
        circle: lO,
        geoshape: tO,
        image: iO,
        line: rO,
        point: cO,
        rect: fO,
        rule: dO,
        square: uO,
        text: pO,
        tick: hO,
        trail: sO,
      };
      function vO(e) {
        if ($([Uo, Io, Vo], e.mark)) {
          const n = kl(e.mark, e.encoding);
          if (n.length > 0) {
            return xO(e, n);
          }
        } else if (e.mark === Ro) {
          const n = Bt.some((n) => ii(n, e.markDef, e.config));
          if (e.stack && !e.fieldDef("size") && n) {
            return wO(e);
          }
        }
        return kO(e);
      }
      const OO = "faceted_path_";
      function xO(e, n) {
        return [
          {
            name: e.getName("pathgroup"),
            type: "group",
            from: { facet: { name: OO + e.requestDataName(Wd.Main), data: e.requestDataName(Wd.Main), groupby: n } },
            encode: { update: { width: { field: { group: "width" } }, height: { field: { group: "height" } } } },
            marks: kO(e, { fromPrefix: OO }),
          },
        ];
      }
      const jO = "stack_group_";
      function wO(e) {
        var n;
        const [t] = kO(e, { fromPrefix: jO });
        const i = e.scaleName(e.stack.fieldChannel);
        const r = (n = {}) => e.vgField(e.stack.fieldChannel, n);
        const s = (e, n) => {
          const t = [
            r({ prefix: "min", suffix: "start", expr: n }),
            r({ prefix: "max", suffix: "start", expr: n }),
            r({ prefix: "min", suffix: "end", expr: n }),
            r({ prefix: "max", suffix: "end", expr: n }),
          ];
          return `${e}(${t.map((e) => `scale('${i}',${e})`).join(",")})`;
        };
        let o;
        let a;
        if (e.stack.fieldChannel === "x") {
          o = Object.assign(Object.assign({}, v(t.encode.update, ["y", "yc", "y2", "height", ...Bt])), {
            x: { signal: s("min", "datum") },
            x2: { signal: s("max", "datum") },
            clip: { value: true },
          });
          a = { x: { field: { group: "x" }, mult: -1 }, height: { field: { group: "height" } } };
          t.encode.update = Object.assign(Object.assign({}, O(t.encode.update, ["y", "yc", "y2"])), { height: { field: { group: "height" } } });
        } else {
          o = Object.assign(Object.assign({}, v(t.encode.update, ["x", "xc", "x2", "width"])), {
            y: { signal: s("min", "datum") },
            y2: { signal: s("max", "datum") },
            clip: { value: true },
          });
          a = { y: { field: { group: "y" }, mult: -1 }, width: { field: { group: "width" } } };
          t.encode.update = Object.assign(Object.assign({}, O(t.encode.update, ["x", "xc", "x2"])), { width: { field: { group: "width" } } });
        }
        for (const u of Bt) {
          const n = ri(u, e.markDef, e.config);
          if (t.encode.update[u]) {
            o[u] = t.encode.update[u];
            delete t.encode.update[u];
          } else if (n) {
            o[u] = Yt(n);
          }
          if (n) {
            t.encode.update[u] = { value: 0 };
          }
        }
        const c = [];
        if (((n = e.stack.groupbyChannels) === null || n === void 0 ? void 0 : n.length) > 0) {
          for (const n of e.stack.groupbyChannels) {
            const t = e.fieldDef(n);
            const i = Sc(t);
            if (i) {
              c.push(i);
            }
            if ((t === null || t === void 0 ? void 0 : t.bin) || (t === null || t === void 0 ? void 0 : t.timeUnit)) {
              c.push(Sc(t, { binSuffix: "end" }));
            }
          }
        }
        const l = ["stroke", "strokeWidth", "strokeJoin", "strokeCap", "strokeDash", "strokeDashOffset", "strokeMiterLimit", "strokeOpacity"];
        o = l.reduce((n, i) => {
          if (t.encode.update[i]) {
            return Object.assign(Object.assign({}, n), { [i]: t.encode.update[i] });
          } else {
            const t = ri(i, e.markDef, e.config);
            if (t !== undefined) {
              return Object.assign(Object.assign({}, n), { [i]: Yt(t) });
            } else {
              return n;
            }
          }
        }, o);
        if (o.stroke) {
          o.strokeForeground = { value: true };
          o.strokeOffset = { value: 0 };
        }
        return [
          {
            type: "group",
            from: {
              facet: {
                data: e.requestDataName(Wd.Main),
                name: jO + e.requestDataName(Wd.Main),
                groupby: c,
                aggregate: {
                  fields: [r({ suffix: "start" }), r({ suffix: "start" }), r({ suffix: "end" }), r({ suffix: "end" })],
                  ops: ["min", "max", "min", "max"],
                },
              },
            },
            encode: { update: o },
            marks: [{ type: "group", encode: { update: a }, marks: [t] }],
          },
        ];
      }
      function $O(e) {
        var n;
        const { encoding: t, stack: i, mark: s, markDef: o, config: a } = e;
        const c = t.order;
        if ((!(0, r.kJ)(c) && vc(c) && w(c.value)) || (!c && w(ii("order", o, a)))) {
          return undefined;
        } else if (((0, r.kJ)(c) || fc(c)) && !i) {
          return ai(c, { expr: "datum" });
        } else if (ea(s)) {
          const i = o.orient === "horizontal" ? "y" : "x";
          const s = t[i];
          if (fc(s)) {
            const t = s.sort;
            if ((0, r.kJ)(t)) {
              return { field: Sc(s, { prefix: i, suffix: "sort_index", expr: "datum" }) };
            } else if (Xa(t)) {
              return { field: Sc({ aggregate: bl(e.encoding) ? t.op : undefined, field: t.field }, { expr: "datum" }) };
            } else if (Ga(t)) {
              const n = e.fieldDef(t.encoding);
              return { field: Sc(n, { expr: "datum" }), order: t.order };
            } else if (t === null) {
              return undefined;
            } else {
              return { field: Sc(s, { binSuffix: ((n = e.stack) === null || n === void 0 ? void 0 : n.impute) ? "mid" : undefined, expr: "datum" }) };
            }
          }
          return undefined;
        }
        return undefined;
      }
      function kO(e, n = { fromPrefix: "" }) {
        const { mark: t, markDef: i, encoding: r, config: s } = e;
        const o = Y(i.clip, SO(e), DO(e));
        const a = ti(i);
        const c = r.key;
        const l = $O(e);
        const u = _O(e);
        const f = ii("aria", i, s);
        const d = yO[t].postEncodingTransform ? yO[t].postEncodingTransform(e) : null;
        return [
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(Object.assign({ name: e.getName("marks"), type: yO[t].vgMark }, o ? { clip: true } : {}), a ? { style: a } : {}),
                      c ? { key: c.field } : {}
                    ),
                    l ? { sort: l } : {}
                  ),
                  u ? u : {}
                ),
                f === false ? { aria: f } : {}
              ),
              { from: { data: n.fromPrefix + e.requestDataName(Wd.Main) }, encode: { update: yO[t].encodeEntry(e) } }
            ),
            d ? { transform: d } : {}
          ),
        ];
      }
      function SO(e) {
        const n = e.getScaleComponent("x");
        const t = e.getScaleComponent("y");
        return (n === null || n === void 0 ? void 0 : n.get("selectionExtent")) || (t === null || t === void 0 ? void 0 : t.get("selectionExtent"))
          ? true
          : undefined;
      }
      function DO(e) {
        const n = e.component.projection;
        return n && !n.isFit ? true : undefined;
      }
      function _O(e) {
        if (!e.component.selection) return null;
        const n = A(e.component.selection).length;
        let t = n;
        let i = e.parent;
        while (i && t === 0) {
          t = A(i.component.selection).length;
          i = i.parent;
        }
        return t ? { interactive: n > 0 || !!e.encoding.tooltip } : null;
      }
      class PO extends Xy {
        constructor(e, n, t, i = {}, r) {
          var s;
          super(e, "unit", n, t, r, undefined, Eu(e) ? e.view : undefined);
          this.specifiedScales = {};
          this.specifiedAxes = {};
          this.specifiedLegends = {};
          this.specifiedProjection = {};
          this.selection = [];
          this.children = [];
          const o = ia(e.mark) ? Object.assign({}, e.mark) : { type: e.mark };
          const a = o.type;
          if (o.filled === undefined) {
            o.filled = Yv(o, r, { graticule: e.data && Rd(e.data) });
          }
          const c = (this.encoding = Ol(e.encoding || {}, a, o.filled, r));
          this.markDef = Xv(o, c, r);
          this.size = Gv({
            encoding: c,
            size: Eu(e)
              ? Object.assign(Object.assign(Object.assign({}, i), e.width ? { width: e.width } : {}), e.height ? { height: e.height } : {})
              : i,
          });
          this.stack = xf(a, c);
          this.specifiedScales = this.initScales(a, c);
          this.specifiedAxes = this.initAxes(c);
          this.specifiedLegends = this.initLegends(c);
          this.specifiedProjection = e.projection;
          this.selection = ((s = e.params) !== null && s !== void 0 ? s : []).filter((e) => $u(e));
        }
        get hasProjection() {
          const { encoding: e } = this;
          const n = this.mark === Qo;
          const t = e && Xe.some((n) => bc(e[n]));
          return n || t;
        }
        scaleDomain(e) {
          const n = this.specifiedScales[e];
          return n ? n.domain : undefined;
        }
        axis(e) {
          return this.specifiedAxes[e];
        }
        legend(e) {
          return this.specifiedLegends[e];
        }
        initScales(e, n) {
          return ct.reduce((e, t) => {
            var i;
            const r = Wc(n[t]);
            if (r) {
              e[t] = this.initScale((i = r.scale) !== null && i !== void 0 ? i : {});
            }
            return e;
          }, {});
        }
        initScale(e) {
          const { domain: n, range: t } = e;
          const i = Et(e);
          if ((0, r.kJ)(n)) {
            i.domain = n.map(Vt);
          }
          if ((0, r.kJ)(t)) {
            i.range = t.map(Vt);
          }
          return i;
        }
        initAxes(e) {
          return Rn.reduce((n, t) => {
            const i = e[t];
            if (bc(i) || (t === le && bc(e.x2)) || (t === ue && bc(e.y2))) {
              const e = bc(i) ? i.axis : undefined;
              n[t] = e ? this.initAxis(Object.assign({}, e)) : e;
            }
            return n;
          }, {});
        }
        initAxis(e) {
          const n = A(e);
          const t = {};
          for (const i of n) {
            const n = e[i];
            t[i] = tl(n) ? Xt(n) : Vt(n);
          }
          return t;
        }
        initLegends(e) {
          return rt.reduce((n, t) => {
            const i = Wc(e[t]);
            if (i && ot(t)) {
              const e = i.legend;
              n[t] = e ? Et(e) : e;
            }
            return n;
          }, {});
        }
        parseData() {
          this.component.data = Cv(this);
        }
        parseLayoutSize() {
          $v(this);
        }
        parseSelections() {
          this.component.selection = Hg(this, this.selection);
        }
        parseMarkGroup() {
          this.component.mark = vO(this);
        }
        parseAxesAndHeaders() {
          this.component.axes = qv(this);
        }
        assembleSelectionTopLevelSignals(e) {
          return Xd(this, e);
        }
        assembleSignals() {
          return [...Zg(this), ...Jd(this, [])];
        }
        assembleSelectionData(e) {
          return Vd(this, e);
        }
        assembleLayout() {
          return null;
        }
        assembleLayoutSignals() {
          return Mm(this);
        }
        assembleMarks() {
          var e;
          let n = (e = this.component.mark) !== null && e !== void 0 ? e : [];
          if (!this.parent || !Jy(this.parent)) {
            n = Kd(this, n);
          }
          return n.map(this.correctDataNames);
        }
        assembleGroupStyle() {
          const { style: e } = this.view || {};
          if (e !== undefined) {
            return e;
          }
          if (this.encoding.x || this.encoding.y) {
            return "cell";
          } else {
            return undefined;
          }
        }
        getMapping() {
          return this.encoding;
        }
        get mark() {
          return this.markDef.type;
        }
        channelHasField(e) {
          return gl(this.encoding, e);
        }
        fieldDef(e) {
          const n = this.encoding[e];
          return Rc(n);
        }
        typedFieldDef(e) {
          const n = this.fieldDef(e);
          if (yc(n)) {
            return n;
          }
          return null;
        }
      }
      class FO extends Gy {
        constructor(e, n, t, i, r) {
          super(e, "layer", n, t, r, e.resolve, e.view);
          const s = Object.assign(Object.assign(Object.assign({}, i), e.width ? { width: e.width } : {}), e.height ? { height: e.height } : {});
          this.children = e.layer.map((e, n) => {
            if (lf(e)) {
              return new FO(e, this, this.getName(`layer_${n}`), s, r);
            } else if (fl(e)) {
              return new PO(e, this, this.getName(`layer_${n}`), s, r);
            }
            throw new Error(fi(e));
          });
        }
        parseData() {
          this.component.data = Cv(this);
          for (const e of this.children) {
            e.parseData();
          }
        }
        parseLayoutSize() {
          Ov(this);
        }
        parseSelections() {
          this.component.selection = {};
          for (const e of this.children) {
            e.parseSelections();
            for (const n of A(e.component.selection)) {
              this.component.selection[n] = e.component.selection[n];
            }
          }
        }
        parseMarkGroup() {
          for (const e of this.children) {
            e.parseMarkGroup();
          }
        }
        parseAxesAndHeaders() {
          Rv(this);
        }
        assembleSelectionTopLevelSignals(e) {
          return this.children.reduce((e, n) => n.assembleSelectionTopLevelSignals(e), e);
        }
        assembleSignals() {
          return this.children.reduce((e, n) => e.concat(n.assembleSignals()), Zg(this));
        }
        assembleLayoutSignals() {
          return this.children.reduce((e, n) => e.concat(n.assembleLayoutSignals()), Mm(this));
        }
        assembleSelectionData(e) {
          return this.children.reduce((e, n) => n.assembleSelectionData(e), e);
        }
        assembleGroupStyle() {
          const e = new Set();
          for (const t of this.children) {
            for (const n of (0, r.IX)(t.assembleGroupStyle())) {
              e.add(n);
            }
          }
          const n = Array.from(e);
          return n.length > 1 ? n : n.length === 1 ? n[0] : undefined;
        }
        assembleTitle() {
          let e = super.assembleTitle();
          if (e) {
            return e;
          }
          for (const n of this.children) {
            e = n.assembleTitle();
            if (e) {
              return e;
            }
          }
          return undefined;
        }
        assembleLayout() {
          return null;
        }
        assembleMarks() {
          return Yd(
            this,
            this.children.flatMap((e) => e.assembleMarks())
          );
        }
        assembleLegends() {
          return this.children.reduce((e, n) => e.concat(n.assembleLegends()), $h(this));
        }
      }
      function zO(e, n, t, i, r) {
        if (Qa(e)) {
          return new Dv(e, n, t, r);
        } else if (lf(e)) {
          return new FO(e, n, t, i, r);
        } else if (fl(e)) {
          return new PO(e, n, t, i, r);
        } else if (Du(e)) {
          return new Ev(e, n, t, r);
        }
        throw new Error(fi(e));
      }
      var CO =
        (undefined && undefined.__rest) ||
        function (e, n) {
          var t = {};
          for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0) t[i] = e[i];
          if (e != null && typeof Object.getOwnPropertySymbols === "function")
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) {
              if (n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) t[i[r]] = e[i[r]];
            }
          return t;
        };
      function EO(e, n = {}) {
        if (n.logger) {
          Jr(n.logger);
        }
        if (n.fieldTitle) {
          Nc(n.fieldTitle);
        }
        try {
          const t = nf((0, r.fE)(n.config, e.config));
          const i = bd(e, t);
          const s = zO(i, null, "", undefined, t);
          s.parse();
          Tb(s.component.data, s);
          const o = TO(s, NO(e, i.autosize, t, s), e.datasets, e.usermeta);
          return { spec: o, normalized: i };
        } finally {
          if (n.logger) {
            Gr();
          }
          if (n.fieldTitle) {
            Tc();
          }
        }
      }
      function NO(e, n, t, i) {
        const s = i.component.layoutSize.get("width");
        const o = i.component.layoutSize.get("height");
        if (n === undefined) {
          n = { type: "pad" };
          if (i.hasAxisOrientSignalRef()) {
            n.resize = true;
          }
        } else if ((0, r.HD)(n)) {
          n = { type: n };
        }
        if (s && o && $d(n.type)) {
          if (s === "step" && o === "step") {
            Vr(mi());
            n.type = "pad";
          } else if (s === "step" || o === "step") {
            const e = s === "step" ? "width" : "height";
            Vr(mi(Bn(e)));
            const t = e === "width" ? "height" : "width";
            n.type = kd(t);
          }
        }
        return Object.assign(
          Object.assign(
            Object.assign({}, A(n).length === 1 && n.type ? (n.type === "pad" ? {} : { autosize: n.type }) : { autosize: n }),
            Dd(t, false)
          ),
          Dd(e, true)
        );
      }
      function TO(e, n, t = {}, i) {
        const r = e.config ? of(e.config) : undefined;
        const s = [].concat(e.assembleSelectionData([]), gv(e.component.data, t));
        const o = e.assembleProjections();
        const a = e.assembleTitle();
        const c = e.assembleGroupStyle();
        const l = e.assembleGroupEncodeEntry(true);
        let u = e.assembleLayoutSignals();
        u = u.filter((e) => {
          if ((e.name === "width" || e.name === "height") && e.value !== undefined) {
            n[e.name] = +e.value;
            return false;
          }
          return true;
        });
        const { params: f } = n,
          d = CO(n, ["params"]);
        return Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            { $schema: "https://vega.github.io/schema/vega/v5.json" },
                            e.description ? { description: e.description } : {}
                          ),
                          d
                        ),
                        a ? { title: a } : {}
                      ),
                      c ? { style: c } : {}
                    ),
                    l ? { encode: { update: l } } : {}
                  ),
                  { data: s }
                ),
                o.length > 0 ? { projections: o } : {}
              ),
              e.assembleGroup([...u, ...e.assembleSelectionTopLevelSignals([]), ...Su(f)])
            ),
            r ? { config: r } : {}
          ),
          i ? { usermeta: i } : {}
        );
      }
      const AO = i.i8;
    },
    72886: (e) => {
      var n = (function () {
        "use strict";
        function e(e, n) {
          return n != null && e instanceof n;
        }
        var n;
        try {
          n = Map;
        } catch (u) {
          n = function () {};
        }
        var t;
        try {
          t = Set;
        } catch (u) {
          t = function () {};
        }
        var i;
        try {
          i = Promise;
        } catch (u) {
          i = function () {};
        }
        function r(s, o, a, c, u) {
          if (typeof o === "object") {
            a = o.depth;
            c = o.prototype;
            u = o.includeNonEnumerable;
            o = o.circular;
          }
          var f = [];
          var d = [];
          var p = typeof Buffer != "undefined";
          if (typeof o == "undefined") o = true;
          if (typeof a == "undefined") a = Infinity;
          function g(s, a) {
            if (s === null) return null;
            if (a === 0) return s;
            var m;
            var h;
            if (typeof s != "object") {
              return s;
            }
            if (e(s, n)) {
              m = new n();
            } else if (e(s, t)) {
              m = new t();
            } else if (e(s, i)) {
              m = new i(function (e, n) {
                s.then(
                  function (n) {
                    e(g(n, a - 1));
                  },
                  function (e) {
                    n(g(e, a - 1));
                  }
                );
              });
            } else if (r.__isArray(s)) {
              m = [];
            } else if (r.__isRegExp(s)) {
              m = new RegExp(s.source, l(s));
              if (s.lastIndex) m.lastIndex = s.lastIndex;
            } else if (r.__isDate(s)) {
              m = new Date(s.getTime());
            } else if (p && Buffer.isBuffer(s)) {
              if (Buffer.allocUnsafe) {
                m = Buffer.allocUnsafe(s.length);
              } else {
                m = new Buffer(s.length);
              }
              s.copy(m);
              return m;
            } else if (e(s, Error)) {
              m = Object.create(s);
            } else {
              if (typeof c == "undefined") {
                h = Object.getPrototypeOf(s);
                m = Object.create(h);
              } else {
                m = Object.create(c);
                h = c;
              }
            }
            if (o) {
              var b = f.indexOf(s);
              if (b != -1) {
                return d[b];
              }
              f.push(s);
              d.push(m);
            }
            if (e(s, n)) {
              s.forEach(function (e, n) {
                var t = g(n, a - 1);
                var i = g(e, a - 1);
                m.set(t, i);
              });
            }
            if (e(s, t)) {
              s.forEach(function (e) {
                var n = g(e, a - 1);
                m.add(n);
              });
            }
            for (var y in s) {
              var v;
              if (h) {
                v = Object.getOwnPropertyDescriptor(h, y);
              }
              if (v && v.set == null) {
                continue;
              }
              m[y] = g(s[y], a - 1);
            }
            if (Object.getOwnPropertySymbols) {
              var O = Object.getOwnPropertySymbols(s);
              for (var y = 0; y < O.length; y++) {
                var x = O[y];
                var j = Object.getOwnPropertyDescriptor(s, x);
                if (j && !j.enumerable && !u) {
                  continue;
                }
                m[x] = g(s[x], a - 1);
                if (!j.enumerable) {
                  Object.defineProperty(m, x, { enumerable: false });
                }
              }
            }
            if (u) {
              var w = Object.getOwnPropertyNames(s);
              for (var y = 0; y < w.length; y++) {
                var $ = w[y];
                var j = Object.getOwnPropertyDescriptor(s, $);
                if (j && j.enumerable) {
                  continue;
                }
                m[$] = g(s[$], a - 1);
                Object.defineProperty(m, $, { enumerable: false });
              }
            }
            return m;
          }
          return g(s, a);
        }
        r.clonePrototype = function e(n) {
          if (n === null) return null;
          var t = function () {};
          t.prototype = n;
          return new t();
        };
        function s(e) {
          return Object.prototype.toString.call(e);
        }
        r.__objToStr = s;
        function o(e) {
          return typeof e === "object" && s(e) === "[object Date]";
        }
        r.__isDate = o;
        function a(e) {
          return typeof e === "object" && s(e) === "[object Array]";
        }
        r.__isArray = a;
        function c(e) {
          return typeof e === "object" && s(e) === "[object RegExp]";
        }
        r.__isRegExp = c;
        function l(e) {
          var n = "";
          if (e.global) n += "g";
          if (e.ignoreCase) n += "i";
          if (e.multiline) n += "m";
          return n;
        }
        r.__getRegExpFlags = l;
        return r;
      })();
      if (true && e.exports) {
        e.exports = n;
      }
    },
  },
]);
