"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [9545],
  {
    10318: (t, n, e) => {
      e.d(n, { Z: () => i });
      function i(t, n) {
        return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      }
    },
    44355: (t, n, e) => {
      e.d(n, { Nw: () => u, ZP: () => c, ml: () => a });
      var i = e(10318);
      var r = e(2725);
      var s = e(62921);
      const o = (0, r.Z)(i.Z);
      const a = o.right;
      const u = o.left;
      const h = (0, r.Z)(s.Z).center;
      const c = a;
    },
    2725: (t, n, e) => {
      e.d(n, { Z: () => s });
      var i = e(10318);
      function r(t, n) {
        return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
      }
      function s(t) {
        let n, e, s;
        if (t.length !== 2) {
          n = i.Z;
          e = (n, e) => (0, i.Z)(t(n), e);
          s = (n, e) => t(n) - e;
        } else {
          n = t === i.Z || t === r ? t : o;
          e = t;
          s = t;
        }
        function a(t, i, r = 0, s = t.length) {
          if (r < s) {
            if (n(i, i) !== 0) return s;
            do {
              const n = (r + s) >>> 1;
              if (e(t[n], i) < 0) r = n + 1;
              else s = n;
            } while (r < s);
          }
          return r;
        }
        function u(t, i, r = 0, s = t.length) {
          if (r < s) {
            if (n(i, i) !== 0) return s;
            do {
              const n = (r + s) >>> 1;
              if (e(t[n], i) <= 0) r = n + 1;
              else s = n;
            } while (r < s);
          }
          return r;
        }
        function h(t, n, e = 0, i = t.length) {
          const r = a(t, n, e, i - 1);
          return r > e && s(t[r - 1], n) > -s(t[r], n) ? r - 1 : r;
        }
        return { left: a, center: h, right: u };
      }
      function o() {
        return 0;
      }
    },
    98823: (t, n, e) => {
      e.d(n, { Z: () => i });
      function i(t, n) {
        let e;
        if (n === undefined) {
          for (const n of t) {
            if (n != null && (e < n || (e === undefined && n >= n))) {
              e = n;
            }
          }
        } else {
          let i = -1;
          for (let r of t) {
            if ((r = n(r, ++i, t)) != null && (e < r || (e === undefined && r >= r))) {
              e = r;
            }
          }
        }
        return e;
      }
    },
    47622: (t, n, e) => {
      e.d(n, { Z: () => i });
      function i(t, n) {
        let e;
        if (n === undefined) {
          for (const n of t) {
            if (n != null && (e > n || (e === undefined && n >= n))) {
              e = n;
            }
          }
        } else {
          let i = -1;
          for (let r of t) {
            if ((r = n(r, ++i, t)) != null && (e > r || (e === undefined && r >= r))) {
              e = r;
            }
          }
        }
        return e;
      }
    },
    62921: (t, n, e) => {
      e.d(n, { K: () => r, Z: () => i });
      function i(t) {
        return t === null ? NaN : +t;
      }
      function* r(t, n) {
        if (n === undefined) {
          for (let n of t) {
            if (n != null && (n = +n) >= n) {
              yield n;
            }
          }
        } else {
          let e = -1;
          for (let i of t) {
            if ((i = n(i, ++e, t)) != null && (i = +i) >= i) {
              yield i;
            }
          }
        }
      }
    },
    34893: (t, n, e) => {
      e.d(n, { Z: () => i });
      function i(t, n, e) {
        (t = +t), (n = +n), (e = (r = arguments.length) < 2 ? ((n = t), (t = 0), 1) : r < 3 ? 1 : +e);
        var i = -1,
          r = Math.max(0, Math.ceil((n - t) / e)) | 0,
          s = new Array(r);
        while (++i < r) {
          s[i] = t + i * e;
        }
        return s;
      }
    },
    67614: (t, n, e) => {
      e.d(n, { G9: () => u, ZP: () => a, ly: () => h });
      const i = Math.sqrt(50),
        r = Math.sqrt(10),
        s = Math.sqrt(2);
      function o(t, n, e) {
        const a = (n - t) / Math.max(0, e),
          u = Math.floor(Math.log10(a)),
          h = a / Math.pow(10, u),
          c = h >= i ? 10 : h >= r ? 5 : h >= s ? 2 : 1;
        let l, f, _;
        if (u < 0) {
          _ = Math.pow(10, -u) / c;
          l = Math.round(t * _);
          f = Math.round(n * _);
          if (l / _ < t) ++l;
          if (f / _ > n) --f;
          _ = -_;
        } else {
          _ = Math.pow(10, u) * c;
          l = Math.round(t / _);
          f = Math.round(n / _);
          if (l * _ < t) ++l;
          if (f * _ > n) --f;
        }
        if (f < l && 0.5 <= e && e < 2) return o(t, n, e * 2);
        return [l, f, _];
      }
      function a(t, n, e) {
        (n = +n), (t = +t), (e = +e);
        if (!(e > 0)) return [];
        if (t === n) return [t];
        const i = n < t,
          [r, s, a] = i ? o(n, t, e) : o(t, n, e);
        if (!(s >= r)) return [];
        const u = s - r + 1,
          h = new Array(u);
        if (i) {
          if (a < 0) for (let t = 0; t < u; ++t) h[t] = (s - t) / -a;
          else for (let t = 0; t < u; ++t) h[t] = (s - t) * a;
        } else {
          if (a < 0) for (let t = 0; t < u; ++t) h[t] = (r + t) / -a;
          else for (let t = 0; t < u; ++t) h[t] = (r + t) * a;
        }
        return h;
      }
      function u(t, n, e) {
        (n = +n), (t = +t), (e = +e);
        return o(t, n, e)[2];
      }
      function h(t, n, e) {
        (n = +n), (t = +t), (e = +e);
        const i = n < t,
          r = i ? u(n, t, e) : u(t, n, e);
        return (i ? -1 : 1) * (r < 0 ? 1 / -r : r);
      }
    },
    16372: (t, n, e) => {
      e.d(n, { B8: () => k, Il: () => r, J5: () => o, SU: () => T, Ss: () => N, Ym: () => A, ZP: () => b, xV: () => s });
      var i = e(44087);
      function r() {}
      var s = 0.7;
      var o = 1 / s;
      var a = "\\s*([+-]?\\d+)\\s*",
        u = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        h = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        c = /^#([0-9a-f]{3,8})$/,
        l = new RegExp(`^rgb\\(${a},${a},${a}\\)$`),
        f = new RegExp(`^rgb\\(${h},${h},${h}\\)$`),
        _ = new RegExp(`^rgba\\(${a},${a},${a},${u}\\)$`),
        p = new RegExp(`^rgba\\(${h},${h},${h},${u}\\)$`),
        y = new RegExp(`^hsl\\(${u},${h},${h}\\)$`),
        g = new RegExp(`^hsla\\(${u},${h},${h},${u}\\)$`);
      var d = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
      };
      (0, i.Z)(r, b, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: v,
        formatHex: v,
        formatHex8: x,
        formatHsl: w,
        formatRgb: m,
        toString: m,
      });
      function v() {
        return this.rgb().formatHex();
      }
      function x() {
        return this.rgb().formatHex8();
      }
      function w() {
        return E(this).formatHsl();
      }
      function m() {
        return this.rgb().formatRgb();
      }
      function b(t) {
        var n, e;
        t = (t + "").trim().toLowerCase();
        return (n = c.exec(t))
          ? ((e = n[1].length),
            (n = parseInt(n[1], 16)),
            e === 6
              ? M(n)
              : e === 3
                ? new N(((n >> 8) & 15) | ((n >> 4) & 240), ((n >> 4) & 15) | (n & 240), ((n & 15) << 4) | (n & 15), 1)
                : e === 8
                  ? Z((n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, (n & 255) / 255)
                  : e === 4
                    ? Z(
                        ((n >> 12) & 15) | ((n >> 8) & 240),
                        ((n >> 8) & 15) | ((n >> 4) & 240),
                        ((n >> 4) & 15) | (n & 240),
                        (((n & 15) << 4) | (n & 15)) / 255
                      )
                    : null)
          : (n = l.exec(t))
            ? new N(n[1], n[2], n[3], 1)
            : (n = f.exec(t))
              ? new N((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, 1)
              : (n = _.exec(t))
                ? Z(n[1], n[2], n[3], n[4])
                : (n = p.exec(t))
                  ? Z((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, n[4])
                  : (n = y.exec(t))
                    ? Y(n[1], n[2] / 100, n[3] / 100, 1)
                    : (n = g.exec(t))
                      ? Y(n[1], n[2] / 100, n[3] / 100, n[4])
                      : d.hasOwnProperty(t)
                        ? M(d[t])
                        : t === "transparent"
                          ? new N(NaN, NaN, NaN, 0)
                          : null;
      }
      function M(t) {
        return new N((t >> 16) & 255, (t >> 8) & 255, t & 255, 1);
      }
      function Z(t, n, e, i) {
        if (i <= 0) t = n = e = NaN;
        return new N(t, n, e, i);
      }
      function T(t) {
        if (!(t instanceof r)) t = b(t);
        if (!t) return new N();
        t = t.rgb();
        return new N(t.r, t.g, t.b, t.opacity);
      }
      function k(t, n, e, i) {
        return arguments.length === 1 ? T(t) : new N(t, n, e, i == null ? 1 : i);
      }
      function N(t, n, e, i) {
        this.r = +t;
        this.g = +n;
        this.b = +e;
        this.opacity = +i;
      }
      (0, i.Z)(
        N,
        k,
        (0, i.l)(r, {
          brighter(t) {
            t = t == null ? o : Math.pow(o, t);
            return new N(this.r * t, this.g * t, this.b * t, this.opacity);
          },
          darker(t) {
            t = t == null ? s : Math.pow(s, t);
            return new N(this.r * t, this.g * t, this.b * t, this.opacity);
          },
          rgb() {
            return this;
          },
          clamp() {
            return new N(S(this.r), S(this.g), S(this.b), D(this.opacity));
          },
          displayable() {
            return (
              -0.5 <= this.r &&
              this.r < 255.5 &&
              -0.5 <= this.g &&
              this.g < 255.5 &&
              -0.5 <= this.b &&
              this.b < 255.5 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: $,
          formatHex: $,
          formatHex8: C,
          formatRgb: U,
          toString: U,
        })
      );
      function $() {
        return `#${P(this.r)}${P(this.g)}${P(this.b)}`;
      }
      function C() {
        return `#${P(this.r)}${P(this.g)}${P(this.b)}${P((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
      }
      function U() {
        const t = D(this.opacity);
        return `${t === 1 ? "rgb(" : "rgba("}${S(this.r)}, ${S(this.g)}, ${S(this.b)}${t === 1 ? ")" : `, ${t})`}`;
      }
      function D(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function S(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function P(t) {
        t = S(t);
        return (t < 16 ? "0" : "") + t.toString(16);
      }
      function Y(t, n, e, i) {
        if (i <= 0) t = n = e = NaN;
        else if (e <= 0 || e >= 1) t = n = NaN;
        else if (n <= 0) t = NaN;
        return new H(t, n, e, i);
      }
      function E(t) {
        if (t instanceof H) return new H(t.h, t.s, t.l, t.opacity);
        if (!(t instanceof r)) t = b(t);
        if (!t) return new H();
        if (t instanceof H) return t;
        t = t.rgb();
        var n = t.r / 255,
          e = t.g / 255,
          i = t.b / 255,
          s = Math.min(n, e, i),
          o = Math.max(n, e, i),
          a = NaN,
          u = o - s,
          h = (o + s) / 2;
        if (u) {
          if (n === o) a = (e - i) / u + (e < i) * 6;
          else if (e === o) a = (i - n) / u + 2;
          else a = (n - e) / u + 4;
          u /= h < 0.5 ? o + s : 2 - o - s;
          a *= 60;
        } else {
          u = h > 0 && h < 1 ? 0 : a;
        }
        return new H(a, u, h, t.opacity);
      }
      function A(t, n, e, i) {
        return arguments.length === 1 ? E(t) : new H(t, n, e, i == null ? 1 : i);
      }
      function H(t, n, e, i) {
        this.h = +t;
        this.s = +n;
        this.l = +e;
        this.opacity = +i;
      }
      (0, i.Z)(
        H,
        A,
        (0, i.l)(r, {
          brighter(t) {
            t = t == null ? o : Math.pow(o, t);
            return new H(this.h, this.s, this.l * t, this.opacity);
          },
          darker(t) {
            t = t == null ? s : Math.pow(s, t);
            return new H(this.h, this.s, this.l * t, this.opacity);
          },
          rgb() {
            var t = (this.h % 360) + (this.h < 0) * 360,
              n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              e = this.l,
              i = e + (e < 0.5 ? e : 1 - e) * n,
              r = 2 * e - i;
            return new N(B(t >= 240 ? t - 240 : t + 120, r, i), B(t, r, i), B(t < 120 ? t + 240 : t - 120, r, i), this.opacity);
          },
          clamp() {
            return new H(F(this.h), j(this.s), j(this.l), D(this.opacity));
          },
          displayable() {
            return ((0 <= this.s && this.s <= 1) || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
          },
          formatHsl() {
            const t = D(this.opacity);
            return `${t === 1 ? "hsl(" : "hsla("}${F(this.h)}, ${j(this.s) * 100}%, ${j(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
          },
        })
      );
      function F(t) {
        t = (t || 0) % 360;
        return t < 0 ? t + 360 : t;
      }
      function j(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function B(t, n, e) {
        return (t < 60 ? n + ((e - n) * t) / 60 : t < 180 ? e : t < 240 ? n + ((e - n) * (240 - t)) / 60 : n) * 255;
      }
    },
    44087: (t, n, e) => {
      e.d(n, { Z: () => i, l: () => r });
      function i(t, n, e) {
        t.prototype = n.prototype = e;
        e.constructor = t;
      }
      function r(t, n) {
        var e = Object.create(t.prototype);
        for (var i in n) e[i] = n[i];
        return e;
      }
    },
    80241: (t, n, e) => {
      e.d(n, { Uc: () => Z, ZP: () => g });
      var i = e(44087);
      var r = e(16372);
      var s = e(11144);
      const o = 18,
        a = 0.96422,
        u = 1,
        h = 0.82521,
        c = 4 / 29,
        l = 6 / 29,
        f = 3 * l * l,
        _ = l * l * l;
      function p(t) {
        if (t instanceof d) return new d(t.l, t.a, t.b, t.opacity);
        if (t instanceof T) return k(t);
        if (!(t instanceof r.Ss)) t = (0, r.SU)(t);
        var n = m(t.r),
          e = m(t.g),
          i = m(t.b),
          s = v((0.2225045 * n + 0.7168786 * e + 0.0606169 * i) / u),
          o,
          c;
        if (n === e && e === i) o = c = s;
        else {
          o = v((0.4360747 * n + 0.3850649 * e + 0.1430804 * i) / a);
          c = v((0.0139322 * n + 0.0971045 * e + 0.7141733 * i) / h);
        }
        return new d(116 * s - 16, 500 * (o - s), 200 * (s - c), t.opacity);
      }
      function y(t, n) {
        return new d(t, 0, 0, n == null ? 1 : n);
      }
      function g(t, n, e, i) {
        return arguments.length === 1 ? p(t) : new d(t, n, e, i == null ? 1 : i);
      }
      function d(t, n, e, i) {
        this.l = +t;
        this.a = +n;
        this.b = +e;
        this.opacity = +i;
      }
      (0, i.Z)(
        d,
        g,
        (0, i.l)(r.Il, {
          brighter(t) {
            return new d(this.l + o * (t == null ? 1 : t), this.a, this.b, this.opacity);
          },
          darker(t) {
            return new d(this.l - o * (t == null ? 1 : t), this.a, this.b, this.opacity);
          },
          rgb() {
            var t = (this.l + 16) / 116,
              n = isNaN(this.a) ? t : t + this.a / 500,
              e = isNaN(this.b) ? t : t - this.b / 200;
            n = a * x(n);
            t = u * x(t);
            e = h * x(e);
            return new r.Ss(
              w(3.1338561 * n - 1.6168667 * t - 0.4906146 * e),
              w(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
              w(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
              this.opacity
            );
          },
        })
      );
      function v(t) {
        return t > _ ? Math.pow(t, 1 / 3) : t / f + c;
      }
      function x(t) {
        return t > l ? t * t * t : f * (t - c);
      }
      function w(t) {
        return 255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
      }
      function m(t) {
        return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
      }
      function b(t) {
        if (t instanceof T) return new T(t.h, t.c, t.l, t.opacity);
        if (!(t instanceof d)) t = p(t);
        if (t.a === 0 && t.b === 0) return new T(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
        var n = Math.atan2(t.b, t.a) * s.R;
        return new T(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
      }
      function M(t, n, e, i) {
        return arguments.length === 1 ? b(t) : new T(e, n, t, i == null ? 1 : i);
      }
      function Z(t, n, e, i) {
        return arguments.length === 1 ? b(t) : new T(t, n, e, i == null ? 1 : i);
      }
      function T(t, n, e, i) {
        this.h = +t;
        this.c = +n;
        this.l = +e;
        this.opacity = +i;
      }
      function k(t) {
        if (isNaN(t.h)) return new d(t.l, 0, 0, t.opacity);
        var n = t.h * s.u;
        return new d(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
      }
      (0, i.Z)(
        T,
        Z,
        (0, i.l)(r.Il, {
          brighter(t) {
            return new T(this.h, this.c, this.l + o * (t == null ? 1 : t), this.opacity);
          },
          darker(t) {
            return new T(this.h, this.c, this.l - o * (t == null ? 1 : t), this.opacity);
          },
          rgb() {
            return k(this).rgb();
          },
        })
      );
    },
    11144: (t, n, e) => {
      e.d(n, { R: () => r, u: () => i });
      const i = Math.PI / 180;
      const r = 180 / Math.PI;
    },
    92626: (t, n, e) => {
      e.d(n, { Z: () => h });
      var i = { value: () => {} };
      function r() {
        for (var t = 0, n = arguments.length, e = {}, i; t < n; ++t) {
          if (!(i = arguments[t] + "") || i in e || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
          e[i] = [];
        }
        return new s(e);
      }
      function s(t) {
        this._ = t;
      }
      function o(t, n) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var e = "",
              i = t.indexOf(".");
            if (i >= 0) (e = t.slice(i + 1)), (t = t.slice(0, i));
            if (t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            return { type: t, name: e };
          });
      }
      s.prototype = r.prototype = {
        constructor: s,
        on: function (t, n) {
          var e = this._,
            i = o(t + "", e),
            r,
            s = -1,
            h = i.length;
          if (arguments.length < 2) {
            while (++s < h) if ((r = (t = i[s]).type) && (r = a(e[r], t.name))) return r;
            return;
          }
          if (n != null && typeof n !== "function") throw new Error("invalid callback: " + n);
          while (++s < h) {
            if ((r = (t = i[s]).type)) e[r] = u(e[r], t.name, n);
            else if (n == null) for (r in e) e[r] = u(e[r], t.name, null);
          }
          return this;
        },
        copy: function () {
          var t = {},
            n = this._;
          for (var e in n) t[e] = n[e].slice();
          return new s(t);
        },
        call: function (t, n) {
          if ((r = arguments.length - 2) > 0) for (var e = new Array(r), i = 0, r, s; i < r; ++i) e[i] = arguments[i + 2];
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          for (s = this._[t], i = 0, r = s.length; i < r; ++i) s[i].value.apply(n, e);
        },
        apply: function (t, n, e) {
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          for (var i = this._[t], r = 0, s = i.length; r < s; ++r) i[r].value.apply(n, e);
        },
      };
      function a(t, n) {
        for (var e = 0, i = t.length, r; e < i; ++e) {
          if ((r = t[e]).name === n) {
            return r.value;
          }
        }
      }
      function u(t, n, e) {
        for (var r = 0, s = t.length; r < s; ++r) {
          if (t[r].name === n) {
            (t[r] = i), (t = t.slice(0, r).concat(t.slice(r + 1)));
            break;
          }
        }
        if (e != null) t.push({ name: n, value: e });
        return t;
      }
      const h = r;
    },
    47539: (t, n, e) => {
      e.d(n, { WU: () => s, jH: () => o });
      var i = e(14261);
      var r;
      var s;
      var o;
      a({ thousands: ",", grouping: [3], currency: ["$", ""] });
      function a(t) {
        r = (0, i.Z)(t);
        s = r.format;
        o = r.formatPrefix;
        return r;
      }
    },
    33085: (t, n, e) => {
      e.d(n, { Z: () => r });
      var i = e(38885);
      function r(t) {
        return (t = (0, i.V)(Math.abs(t))), t ? t[1] : NaN;
      }
    },
    38885: (t, n, e) => {
      e.d(n, { V: () => r, Z: () => i });
      function i(t) {
        return Math.abs((t = Math.round(t))) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
      }
      function r(t, n) {
        if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var e,
          i = t.slice(0, e);
        return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(e + 1)];
      }
    },
    46196: (t, n, e) => {
      e.d(n, { Z: () => r });
      var i = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function r(t) {
        if (!(n = i.exec(t))) throw new Error("invalid format: " + t);
        var n;
        return new s({
          fill: n[1],
          align: n[2],
          sign: n[3],
          symbol: n[4],
          zero: n[5],
          width: n[6],
          comma: n[7],
          precision: n[8] && n[8].slice(1),
          trim: n[9],
          type: n[10],
        });
      }
      r.prototype = s.prototype;
      function s(t) {
        this.fill = t.fill === undefined ? " " : t.fill + "";
        this.align = t.align === undefined ? ">" : t.align + "";
        this.sign = t.sign === undefined ? "-" : t.sign + "";
        this.symbol = t.symbol === undefined ? "" : t.symbol + "";
        this.zero = !!t.zero;
        this.width = t.width === undefined ? undefined : +t.width;
        this.comma = !!t.comma;
        this.precision = t.precision === undefined ? undefined : +t.precision;
        this.trim = !!t.trim;
        this.type = t.type === undefined ? "" : t.type + "";
      }
      s.prototype.toString = function () {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? "0" : "") +
          (this.width === undefined ? "" : Math.max(1, this.width | 0)) +
          (this.comma ? "," : "") +
          (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) +
          (this.trim ? "~" : "") +
          this.type
        );
      };
    },
    14261: (t, n, e) => {
      e.d(n, { Z: () => g });
      var i = e(33085);
      function r(t, n) {
        return function (e, i) {
          var r = e.length,
            s = [],
            o = 0,
            a = t[0],
            u = 0;
          while (r > 0 && a > 0) {
            if (u + a + 1 > i) a = Math.max(1, i - u);
            s.push(e.substring((r -= a), r + a));
            if ((u += a + 1) > i) break;
            a = t[(o = (o + 1) % t.length)];
          }
          return s.reverse().join(n);
        };
      }
      function s(t) {
        return function (n) {
          return n.replace(/[0-9]/g, function (n) {
            return t[+n];
          });
        };
      }
      var o = e(46196);
      function a(t) {
        t: for (var n = t.length, e = 1, i = -1, r; e < n; ++e) {
          switch (t[e]) {
            case ".":
              i = r = e;
              break;
            case "0":
              if (i === 0) i = e;
              r = e;
              break;
            default:
              if (!+t[e]) break t;
              if (i > 0) i = 0;
              break;
          }
        }
        return i > 0 ? t.slice(0, i) + t.slice(r + 1) : t;
      }
      var u = e(38885);
      var h;
      function c(t, n) {
        var e = (0, u.V)(t, n);
        if (!e) return t + "";
        var i = e[0],
          r = e[1],
          s = r - (h = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1,
          o = i.length;
        return s === o
          ? i
          : s > o
            ? i + new Array(s - o + 1).join("0")
            : s > 0
              ? i.slice(0, s) + "." + i.slice(s)
              : "0." + new Array(1 - s).join("0") + (0, u.V)(t, Math.max(0, n + s - 1))[0];
      }
      function l(t, n) {
        var e = (0, u.V)(t, n);
        if (!e) return t + "";
        var i = e[0],
          r = e[1];
        return r < 0
          ? "0." + new Array(-r).join("0") + i
          : i.length > r + 1
            ? i.slice(0, r + 1) + "." + i.slice(r + 1)
            : i + new Array(r - i.length + 2).join("0");
      }
      const f = {
        "%": (t, n) => (t * 100).toFixed(n),
        b: (t) => Math.round(t).toString(2),
        c: (t) => t + "",
        d: u.Z,
        e: (t, n) => t.toExponential(n),
        f: (t, n) => t.toFixed(n),
        g: (t, n) => t.toPrecision(n),
        o: (t) => Math.round(t).toString(8),
        p: (t, n) => l(t * 100, n),
        r: l,
        s: c,
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function _(t) {
        return t;
      }
      var p = Array.prototype.map,
        y = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
      function g(t) {
        var n = t.grouping === undefined || t.thousands === undefined ? _ : r(p.call(t.grouping, Number), t.thousands + ""),
          e = t.currency === undefined ? "" : t.currency[0] + "",
          u = t.currency === undefined ? "" : t.currency[1] + "",
          c = t.decimal === undefined ? "." : t.decimal + "",
          l = t.numerals === undefined ? _ : s(p.call(t.numerals, String)),
          g = t.percent === undefined ? "%" : t.percent + "",
          d = t.minus === undefined ? "−" : t.minus + "",
          v = t.nan === undefined ? "NaN" : t.nan + "";
        function x(t) {
          t = (0, o.Z)(t);
          var i = t.fill,
            r = t.align,
            s = t.sign,
            _ = t.symbol,
            p = t.zero,
            x = t.width,
            w = t.comma,
            m = t.precision,
            b = t.trim,
            M = t.type;
          if (M === "n") (w = true), (M = "g");
          else if (!f[M]) m === undefined && (m = 12), (b = true), (M = "g");
          if (p || (i === "0" && r === "=")) (p = true), (i = "0"), (r = "=");
          var Z = _ === "$" ? e : _ === "#" && /[boxX]/.test(M) ? "0" + M.toLowerCase() : "",
            T = _ === "$" ? u : /[%p]/.test(M) ? g : "";
          var k = f[M],
            N = /[defgprs%]/.test(M);
          m = m === undefined ? 6 : /[gprs]/.test(M) ? Math.max(1, Math.min(21, m)) : Math.max(0, Math.min(20, m));
          function $(t) {
            var e = Z,
              o = T,
              u,
              f,
              _;
            if (M === "c") {
              o = k(t) + o;
              t = "";
            } else {
              t = +t;
              var g = t < 0 || 1 / t < 0;
              t = isNaN(t) ? v : k(Math.abs(t), m);
              if (b) t = a(t);
              if (g && +t === 0 && s !== "+") g = false;
              e = (g ? (s === "(" ? s : d) : s === "-" || s === "(" ? "" : s) + e;
              o = (M === "s" ? y[8 + h / 3] : "") + o + (g && s === "(" ? ")" : "");
              if (N) {
                (u = -1), (f = t.length);
                while (++u < f) {
                  if (((_ = t.charCodeAt(u)), 48 > _ || _ > 57)) {
                    o = (_ === 46 ? c + t.slice(u + 1) : t.slice(u)) + o;
                    t = t.slice(0, u);
                    break;
                  }
                }
              }
            }
            if (w && !p) t = n(t, Infinity);
            var $ = e.length + t.length + o.length,
              C = $ < x ? new Array(x - $ + 1).join(i) : "";
            if (w && p) (t = n(C + t, C.length ? x - o.length : Infinity)), (C = "");
            switch (r) {
              case "<":
                t = e + t + o + C;
                break;
              case "=":
                t = e + C + t + o;
                break;
              case "^":
                t = C.slice(0, ($ = C.length >> 1)) + e + t + o + C.slice($);
                break;
              default:
                t = C + e + t + o;
                break;
            }
            return l(t);
          }
          $.toString = function () {
            return t + "";
          };
          return $;
        }
        function w(t, n) {
          var e = x(((t = (0, o.Z)(t)), (t.type = "f"), t)),
            r = Math.max(-8, Math.min(8, Math.floor((0, i.Z)(n) / 3))) * 3,
            s = Math.pow(10, -r),
            a = y[8 + r / 3];
          return function (t) {
            return e(s * t) + a;
          };
        }
        return { format: x, formatPrefix: w };
      }
    },
    68195: (t, n, e) => {
      e.d(n, { Z: () => r });
      var i = e(33085);
      function r(t) {
        return Math.max(0, -(0, i.Z)(Math.abs(t)));
      }
    },
    53726: (t, n, e) => {
      e.d(n, { Z: () => r });
      var i = e(33085);
      function r(t, n) {
        return Math.max(0, Math.max(-8, Math.min(8, Math.floor((0, i.Z)(n) / 3))) * 3 - (0, i.Z)(Math.abs(t)));
      }
    },
    37655: (t, n, e) => {
      e.d(n, { Z: () => r });
      var i = e(33085);
      function r(t, n) {
        (t = Math.abs(t)), (n = Math.abs(n) - t);
        return Math.max(0, (0, i.Z)(n) - (0, i.Z)(t)) + 1;
      }
    },
    88122: (t, n, e) => {
      e.d(n, { M: () => o, Z: () => s });
      var i = e(81265);
      var r = e(67896);
      function s(t, n) {
        return ((0, r.v)(n) ? r.Z : o)(t, n);
      }
      function o(t, n) {
        var e = n ? n.length : 0,
          r = t ? Math.min(e, t.length) : 0,
          s = new Array(r),
          o = new Array(e),
          a;
        for (a = 0; a < r; ++a) s[a] = (0, i.Z)(t[a], n[a]);
        for (; a < e; ++a) o[a] = n[a];
        return function (t) {
          for (a = 0; a < r; ++a) o[a] = s[a](t);
          return o;
        };
      }
    },
    49885: (t, n, e) => {
      e.d(n, { Z: () => r, t: () => i });
      function i(t, n, e, i, r) {
        var s = t * t,
          o = s * t;
        return ((1 - 3 * t + 3 * s - o) * n + (4 - 6 * s + 3 * o) * e + (1 + 3 * t + 3 * s - 3 * o) * i + o * r) / 6;
      }
      function r(t) {
        var n = t.length - 1;
        return function (e) {
          var r = e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
            s = t[r],
            o = t[r + 1],
            a = r > 0 ? t[r - 1] : 2 * s - o,
            u = r < n - 1 ? t[r + 2] : 2 * o - s;
          return i((e - r / n) * n, a, s, o, u);
        };
      }
    },
    54306: (t, n, e) => {
      e.d(n, { Z: () => r });
      var i = e(49885);
      function r(t) {
        var n = t.length;
        return function (e) {
          var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
            s = t[(r + n - 1) % n],
            o = t[r % n],
            a = t[(r + 1) % n],
            u = t[(r + 2) % n];
          return (0, i.t)((e - r / n) * n, s, o, a, u);
        };
      }
    },
    85910: (t, n, e) => {
      e.d(n, { ZP: () => u, wx: () => o, yi: () => a });
      var i = e(55302);
      function r(t, n) {
        return function (e) {
          return t + e * n;
        };
      }
      function s(t, n, e) {
        return (
          (t = Math.pow(t, e)),
          (n = Math.pow(n, e) - t),
          (e = 1 / e),
          function (i) {
            return Math.pow(t + i * n, e);
          }
        );
      }
      function o(t, n) {
        var e = n - t;
        return e ? r(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : (0, i.Z)(isNaN(t) ? n : t);
      }
      function a(t) {
        return (t = +t) === 1
          ? u
          : function (n, e) {
              return e - n ? s(n, e, t) : (0, i.Z)(isNaN(n) ? e : n);
            };
      }
      function u(t, n) {
        var e = n - t;
        return e ? r(t, e) : (0, i.Z)(isNaN(t) ? n : t);
      }
    },
    55302: (t, n, e) => {
      e.d(n, { Z: () => i });
      const i = (t) => () => t;
    },
    70088: (t, n, e) => {
      e.d(n, { Z: () => i });
      function i(t, n) {
        var e = new Date();
        return (
          (t = +t),
          (n = +n),
          function (i) {
            return e.setTime(t * (1 - i) + n * i), e;
          }
        );
      }
    },
    33566: (t, n, e) => {
      e.r(n);
      e.d(n, {
        interpolate: () => i.Z,
        interpolateArray: () => r.Z,
        interpolateBasis: () => s.Z,
        interpolateBasisClosed: () => o.Z,
        interpolateCubehelix: () => z,
        interpolateCubehelixLong: () => J,
        interpolateDate: () => a.Z,
        interpolateDiscrete: () => u,
        interpolateHcl: () => U,
        interpolateHclLong: () => D,
        interpolateHsl: () => T,
        interpolateHslLong: () => k,
        interpolateHue: () => c,
        interpolateLab: () => $,
        interpolateNumber: () => l.Z,
        interpolateNumberArray: () => f.Z,
        interpolateObject: () => _.Z,
        interpolateRgb: () => b.ZP,
        interpolateRgbBasis: () => b.hD,
        interpolateRgbBasisClosed: () => b.YD,
        interpolateRound: () => p.Z,
        interpolateString: () => y.Z,
        interpolateTransformCss: () => g.Y,
        interpolateTransformSvg: () => g.w,
        interpolateZoom: () => m,
        piecewise: () => V.Z,
        quantize: () => X,
      });
      var i = e(81265);
      var r = e(88122);
      var s = e(49885);
      var o = e(54306);
      var a = e(70088);
      function u(t) {
        var n = t.length;
        return function (e) {
          return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
        };
      }
      var h = e(85910);
      function c(t, n) {
        var e = (0, h.wx)(+t, +n);
        return function (t) {
          var n = e(t);
          return n - 360 * Math.floor(n / 360);
        };
      }
      var l = e(73626);
      var f = e(67896);
      var _ = e(191);
      var p = e(55720);
      var y = e(59843);
      var g = e(18983);
      var d = 1e-12;
      function v(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2;
      }
      function x(t) {
        return ((t = Math.exp(t)) - 1 / t) / 2;
      }
      function w(t) {
        return ((t = Math.exp(2 * t)) - 1) / (t + 1);
      }
      const m = (function t(n, e, i) {
        function r(t, r) {
          var s = t[0],
            o = t[1],
            a = t[2],
            u = r[0],
            h = r[1],
            c = r[2],
            l = u - s,
            f = h - o,
            _ = l * l + f * f,
            p,
            y;
          if (_ < d) {
            y = Math.log(c / a) / n;
            p = function (t) {
              return [s + t * l, o + t * f, a * Math.exp(n * t * y)];
            };
          } else {
            var g = Math.sqrt(_),
              m = (c * c - a * a + i * _) / (2 * a * e * g),
              b = (c * c - a * a - i * _) / (2 * c * e * g),
              M = Math.log(Math.sqrt(m * m + 1) - m),
              Z = Math.log(Math.sqrt(b * b + 1) - b);
            y = (Z - M) / n;
            p = function (t) {
              var i = t * y,
                r = v(M),
                u = (a / (e * g)) * (r * w(n * i + M) - x(M));
              return [s + u * l, o + u * f, (a * r) / v(n * i + M)];
            };
          }
          p.duration = (y * 1e3 * n) / Math.SQRT2;
          return p;
        }
        r.rho = function (n) {
          var e = Math.max(0.001, +n),
            i = e * e,
            r = i * i;
          return t(e, i, r);
        };
        return r;
      })(Math.SQRT2, 2, 4);
      var b = e(93414);
      var M = e(16372);
      function Z(t) {
        return function (n, e) {
          var i = t((n = (0, M.Ym)(n)).h, (e = (0, M.Ym)(e)).h),
            r = (0, h.ZP)(n.s, e.s),
            s = (0, h.ZP)(n.l, e.l),
            o = (0, h.ZP)(n.opacity, e.opacity);
          return function (t) {
            n.h = i(t);
            n.s = r(t);
            n.l = s(t);
            n.opacity = o(t);
            return n + "";
          };
        };
      }
      const T = Z(h.wx);
      var k = Z(h.ZP);
      var N = e(80241);
      function $(t, n) {
        var e = (0, h.ZP)((t = (0, N.ZP)(t)).l, (n = (0, N.ZP)(n)).l),
          i = (0, h.ZP)(t.a, n.a),
          r = (0, h.ZP)(t.b, n.b),
          s = (0, h.ZP)(t.opacity, n.opacity);
        return function (n) {
          t.l = e(n);
          t.a = i(n);
          t.b = r(n);
          t.opacity = s(n);
          return t + "";
        };
      }
      function C(t) {
        return function (n, e) {
          var i = t((n = (0, N.Uc)(n)).h, (e = (0, N.Uc)(e)).h),
            r = (0, h.ZP)(n.c, e.c),
            s = (0, h.ZP)(n.l, e.l),
            o = (0, h.ZP)(n.opacity, e.opacity);
          return function (t) {
            n.h = i(t);
            n.c = r(t);
            n.l = s(t);
            n.opacity = o(t);
            return n + "";
          };
        };
      }
      const U = C(h.wx);
      var D = C(h.ZP);
      var S = e(44087);
      var P = e(11144);
      var Y = -0.14861,
        E = +1.78277,
        A = -0.29227,
        H = -0.90649,
        F = +1.97294,
        j = F * H,
        B = F * E,
        O = E * A - H * Y;
      function q(t) {
        if (t instanceof L) return new L(t.h, t.s, t.l, t.opacity);
        if (!(t instanceof M.Ss)) t = (0, M.SU)(t);
        var n = t.r / 255,
          e = t.g / 255,
          i = t.b / 255,
          r = (O * i + j * n - B * e) / (O + j - B),
          s = i - r,
          o = (F * (e - r) - A * s) / H,
          a = Math.sqrt(o * o + s * s) / (F * r * (1 - r)),
          u = a ? Math.atan2(o, s) * P.R - 120 : NaN;
        return new L(u < 0 ? u + 360 : u, a, r, t.opacity);
      }
      function I(t, n, e, i) {
        return arguments.length === 1 ? q(t) : new L(t, n, e, i == null ? 1 : i);
      }
      function L(t, n, e, i) {
        this.h = +t;
        this.s = +n;
        this.l = +e;
        this.opacity = +i;
      }
      (0, S.Z)(
        L,
        I,
        (0, S.l)(M.Il, {
          brighter(t) {
            t = t == null ? M.J5 : Math.pow(M.J5, t);
            return new L(this.h, this.s, this.l * t, this.opacity);
          },
          darker(t) {
            t = t == null ? M.xV : Math.pow(M.xV, t);
            return new L(this.h, this.s, this.l * t, this.opacity);
          },
          rgb() {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * P.u,
              n = +this.l,
              e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
              i = Math.cos(t),
              r = Math.sin(t);
            return new M.Ss(255 * (n + e * (Y * i + E * r)), 255 * (n + e * (A * i + H * r)), 255 * (n + e * (F * i)), this.opacity);
          },
        })
      );
      function R(t) {
        return (function n(e) {
          e = +e;
          function i(n, i) {
            var r = t((n = I(n)).h, (i = I(i)).h),
              s = (0, h.ZP)(n.s, i.s),
              o = (0, h.ZP)(n.l, i.l),
              a = (0, h.ZP)(n.opacity, i.opacity);
            return function (t) {
              n.h = r(t);
              n.s = s(t);
              n.l = o(Math.pow(t, e));
              n.opacity = a(t);
              return n + "";
            };
          }
          i.gamma = n;
          return i;
        })(1);
      }
      const z = R(h.wx);
      var J = R(h.ZP);
      var V = e(30108);
      function X(t, n) {
        var e = new Array(n);
        for (var i = 0; i < n; ++i) e[i] = t(i / (n - 1));
        return e;
      }
    },
    73626: (t, n, e) => {
      e.d(n, { Z: () => i });
      function i(t, n) {
        return (
          (t = +t),
          (n = +n),
          function (e) {
            return t * (1 - e) + n * e;
          }
        );
      }
    },
    67896: (t, n, e) => {
      e.d(n, { Z: () => i, v: () => r });
      function i(t, n) {
        if (!n) n = [];
        var e = t ? Math.min(n.length, t.length) : 0,
          i = n.slice(),
          r;
        return function (s) {
          for (r = 0; r < e; ++r) i[r] = t[r] * (1 - s) + n[r] * s;
          return i;
        };
      }
      function r(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView);
      }
    },
    191: (t, n, e) => {
      e.d(n, { Z: () => r });
      var i = e(81265);
      function r(t, n) {
        var e = {},
          r = {},
          s;
        if (t === null || typeof t !== "object") t = {};
        if (n === null || typeof n !== "object") n = {};
        for (s in n) {
          if (s in t) {
            e[s] = (0, i.Z)(t[s], n[s]);
          } else {
            r[s] = n[s];
          }
        }
        return function (t) {
          for (s in e) r[s] = e[s](t);
          return r;
        };
      }
    },
    30108: (t, n, e) => {
      e.d(n, { Z: () => r });
      var i = e(81265);
      function r(t, n) {
        if (n === undefined) (n = t), (t = i.Z);
        var e = 0,
          r = n.length - 1,
          s = n[0],
          o = new Array(r < 0 ? 0 : r);
        while (e < r) o[e] = t(s, (s = n[++e]));
        return function (t) {
          var n = Math.max(0, Math.min(r - 1, Math.floor((t *= r))));
          return o[n](t - n);
        };
      }
    },
    93414: (t, n, e) => {
      e.d(n, { YD: () => c, ZP: () => a, hD: () => h });
      var i = e(16372);
      var r = e(49885);
      var s = e(54306);
      var o = e(85910);
      const a = (function t(n) {
        var e = (0, o.yi)(n);
        function r(t, n) {
          var r = e((t = (0, i.B8)(t)).r, (n = (0, i.B8)(n)).r),
            s = e(t.g, n.g),
            a = e(t.b, n.b),
            u = (0, o.ZP)(t.opacity, n.opacity);
          return function (n) {
            t.r = r(n);
            t.g = s(n);
            t.b = a(n);
            t.opacity = u(n);
            return t + "";
          };
        }
        r.gamma = t;
        return r;
      })(1);
      function u(t) {
        return function (n) {
          var e = n.length,
            r = new Array(e),
            s = new Array(e),
            o = new Array(e),
            a,
            u;
          for (a = 0; a < e; ++a) {
            u = (0, i.B8)(n[a]);
            r[a] = u.r || 0;
            s[a] = u.g || 0;
            o[a] = u.b || 0;
          }
          r = t(r);
          s = t(s);
          o = t(o);
          u.opacity = 1;
          return function (t) {
            u.r = r(t);
            u.g = s(t);
            u.b = o(t);
            return u + "";
          };
        };
      }
      var h = u(r.Z);
      var c = u(s.Z);
    },
    55720: (t, n, e) => {
      e.d(n, { Z: () => i });
      function i(t, n) {
        return (
          (t = +t),
          (n = +n),
          function (e) {
            return Math.round(t * (1 - e) + n * e);
          }
        );
      }
    },
    59843: (t, n, e) => {
      e.d(n, { Z: () => u });
      var i = e(73626);
      var r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        s = new RegExp(r.source, "g");
      function o(t) {
        return function () {
          return t;
        };
      }
      function a(t) {
        return function (n) {
          return t(n) + "";
        };
      }
      function u(t, n) {
        var e = (r.lastIndex = s.lastIndex = 0),
          u,
          h,
          c,
          l = -1,
          f = [],
          _ = [];
        (t = t + ""), (n = n + "");
        while ((u = r.exec(t)) && (h = s.exec(n))) {
          if ((c = h.index) > e) {
            c = n.slice(e, c);
            if (f[l]) f[l] += c;
            else f[++l] = c;
          }
          if ((u = u[0]) === (h = h[0])) {
            if (f[l]) f[l] += h;
            else f[++l] = h;
          } else {
            f[++l] = null;
            _.push({ i: l, x: (0, i.Z)(u, h) });
          }
          e = s.lastIndex;
        }
        if (e < n.length) {
          c = n.slice(e);
          if (f[l]) f[l] += c;
          else f[++l] = c;
        }
        return f.length < 2
          ? _[0]
            ? a(_[0].x)
            : o(n)
          : ((n = _.length),
            function (t) {
              for (var e = 0, i; e < n; ++e) f[(i = _[e]).i] = i.x(t);
              return f.join("");
            });
      }
    },
    18983: (t, n, e) => {
      e.d(n, { Y: () => l, w: () => f });
      var i = e(73626);
      var r = 180 / Math.PI;
      var s = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
      function o(t, n, e, i, s, o) {
        var a, u, h;
        if ((a = Math.sqrt(t * t + n * n))) (t /= a), (n /= a);
        if ((h = t * e + n * i)) (e -= t * h), (i -= n * h);
        if ((u = Math.sqrt(e * e + i * i))) (e /= u), (i /= u), (h /= u);
        if (t * i < n * e) (t = -t), (n = -n), (h = -h), (a = -a);
        return { translateX: s, translateY: o, rotate: Math.atan2(n, t) * r, skewX: Math.atan(h) * r, scaleX: a, scaleY: u };
      }
      var a;
      function u(t) {
        const n = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
        return n.isIdentity ? s : o(n.a, n.b, n.c, n.d, n.e, n.f);
      }
      function h(t) {
        if (t == null) return s;
        if (!a) a = document.createElementNS("http://www.w3.org/2000/svg", "g");
        a.setAttribute("transform", t);
        if (!(t = a.transform.baseVal.consolidate())) return s;
        t = t.matrix;
        return o(t.a, t.b, t.c, t.d, t.e, t.f);
      }
      function c(t, n, e, r) {
        function s(t) {
          return t.length ? t.pop() + " " : "";
        }
        function o(t, r, s, o, a, u) {
          if (t !== s || r !== o) {
            var h = a.push("translate(", null, n, null, e);
            u.push({ i: h - 4, x: (0, i.Z)(t, s) }, { i: h - 2, x: (0, i.Z)(r, o) });
          } else if (s || o) {
            a.push("translate(" + s + n + o + e);
          }
        }
        function a(t, n, e, o) {
          if (t !== n) {
            if (t - n > 180) n += 360;
            else if (n - t > 180) t += 360;
            o.push({ i: e.push(s(e) + "rotate(", null, r) - 2, x: (0, i.Z)(t, n) });
          } else if (n) {
            e.push(s(e) + "rotate(" + n + r);
          }
        }
        function u(t, n, e, o) {
          if (t !== n) {
            o.push({ i: e.push(s(e) + "skewX(", null, r) - 2, x: (0, i.Z)(t, n) });
          } else if (n) {
            e.push(s(e) + "skewX(" + n + r);
          }
        }
        function h(t, n, e, r, o, a) {
          if (t !== e || n !== r) {
            var u = o.push(s(o) + "scale(", null, ",", null, ")");
            a.push({ i: u - 4, x: (0, i.Z)(t, e) }, { i: u - 2, x: (0, i.Z)(n, r) });
          } else if (e !== 1 || r !== 1) {
            o.push(s(o) + "scale(" + e + "," + r + ")");
          }
        }
        return function (n, e) {
          var i = [],
            r = [];
          (n = t(n)), (e = t(e));
          o(n.translateX, n.translateY, e.translateX, e.translateY, i, r);
          a(n.rotate, e.rotate, i, r);
          u(n.skewX, e.skewX, i, r);
          h(n.scaleX, n.scaleY, e.scaleX, e.scaleY, i, r);
          n = e = null;
          return function (t) {
            var n = -1,
              e = r.length,
              s;
            while (++n < e) i[(s = r[n]).i] = s.x(t);
            return i.join("");
          };
        };
      }
      var l = c(u, "px, ", "px)", "deg)");
      var f = c(h, ", ", ")", ")");
    },
    81265: (t, n, e) => {
      e.d(n, { Z: () => f });
      var i = e(16372);
      var r = e(93414);
      var s = e(88122);
      var o = e(70088);
      var a = e(73626);
      var u = e(191);
      var h = e(59843);
      var c = e(55302);
      var l = e(67896);
      function f(t, n) {
        var e = typeof n,
          f;
        return n == null || e === "boolean"
          ? (0, c.Z)(n)
          : (e === "number"
              ? a.Z
              : e === "string"
                ? (f = (0, i.ZP)(n))
                  ? ((n = f), r.ZP)
                  : h.Z
                : n instanceof i.ZP
                  ? r.ZP
                  : n instanceof Date
                    ? o.Z
                    : (0, l.v)(n)
                      ? l.Z
                      : Array.isArray(n)
                        ? s.M
                        : (typeof n.valueOf !== "function" && typeof n.toString !== "function") || isNaN(n)
                          ? u.Z
                          : a.Z)(t, n);
      }
    },
    11108: (t, n, e) => {
      e.d(n, { ET: () => c, y$: () => h });
      const i = Math.PI,
        r = 2 * i,
        s = 1e-6,
        o = r - s;
      function a(t) {
        this._ += t[0];
        for (let n = 1, e = t.length; n < e; ++n) {
          this._ += arguments[n] + t[n];
        }
      }
      function u(t) {
        let n = Math.floor(t);
        if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
        if (n > 15) return a;
        const e = 10 ** n;
        return function (t) {
          this._ += t[0];
          for (let n = 1, i = t.length; n < i; ++n) {
            this._ += Math.round(arguments[n] * e) / e + t[n];
          }
        };
      }
      class h {
        constructor(t) {
          this._x0 = this._y0 = this._x1 = this._y1 = null;
          this._ = "";
          this._append = t == null ? a : u(t);
        }
        moveTo(t, n) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}`;
        }
        closePath() {
          if (this._x1 !== null) {
            (this._x1 = this._x0), (this._y1 = this._y0);
            this._append`Z`;
          }
        }
        lineTo(t, n) {
          this._append`L${(this._x1 = +t)},${(this._y1 = +n)}`;
        }
        quadraticCurveTo(t, n, e, i) {
          this._append`Q${+t},${+n},${(this._x1 = +e)},${(this._y1 = +i)}`;
        }
        bezierCurveTo(t, n, e, i, r, s) {
          this._append`C${+t},${+n},${+e},${+i},${(this._x1 = +r)},${(this._y1 = +s)}`;
        }
        arcTo(t, n, e, r, o) {
          (t = +t), (n = +n), (e = +e), (r = +r), (o = +o);
          if (o < 0) throw new Error(`negative radius: ${o}`);
          let a = this._x1,
            u = this._y1,
            h = e - t,
            c = r - n,
            l = a - t,
            f = u - n,
            _ = l * l + f * f;
          if (this._x1 === null) {
            this._append`M${(this._x1 = t)},${(this._y1 = n)}`;
          } else if (!(_ > s));
          else if (!(Math.abs(f * h - c * l) > s) || !o) {
            this._append`L${(this._x1 = t)},${(this._y1 = n)}`;
          } else {
            let p = e - a,
              y = r - u,
              g = h * h + c * c,
              d = p * p + y * y,
              v = Math.sqrt(g),
              x = Math.sqrt(_),
              w = o * Math.tan((i - Math.acos((g + _ - d) / (2 * v * x))) / 2),
              m = w / x,
              b = w / v;
            if (Math.abs(m - 1) > s) {
              this._append`L${t + m * l},${n + m * f}`;
            }
            this._append`A${o},${o},0,0,${+(f * p > l * y)},${(this._x1 = t + b * h)},${(this._y1 = n + b * c)}`;
          }
        }
        arc(t, n, e, a, u, h) {
          (t = +t), (n = +n), (e = +e), (h = !!h);
          if (e < 0) throw new Error(`negative radius: ${e}`);
          let c = e * Math.cos(a),
            l = e * Math.sin(a),
            f = t + c,
            _ = n + l,
            p = 1 ^ h,
            y = h ? a - u : u - a;
          if (this._x1 === null) {
            this._append`M${f},${_}`;
          } else if (Math.abs(this._x1 - f) > s || Math.abs(this._y1 - _) > s) {
            this._append`L${f},${_}`;
          }
          if (!e) return;
          if (y < 0) y = (y % r) + r;
          if (y > o) {
            this._append`A${e},${e},0,1,${p},${t - c},${n - l}A${e},${e},0,1,${p},${(this._x1 = f)},${(this._y1 = _)}`;
          } else if (y > s) {
            this._append`A${e},${e},0,${+(y >= i)},${p},${(this._x1 = t + e * Math.cos(u))},${(this._y1 = n + e * Math.sin(u))}`;
          }
        }
        rect(t, n, e, i) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}h${(e = +e)}v${+i}h${-e}Z`;
        }
        toString() {
          return this._;
        }
      }
      function c() {
        return new h();
      }
      c.prototype = h.prototype;
      function l(t = 3) {
        return new h(+t);
      }
    },
    56290: (t, n, e) => {
      e.d(n, { JG: () => y, ZP: () => d, yR: () => c, l4: () => g });
      var i = e(44355);
      var r = e(81265);
      var s = e(73626);
      var o = e(55720);
      function a(t) {
        return function () {
          return t;
        };
      }
      var u = e(34299);
      var h = [0, 1];
      function c(t) {
        return t;
      }
      function l(t, n) {
        return (n -= t = +t)
          ? function (e) {
              return (e - t) / n;
            }
          : a(isNaN(n) ? NaN : 0.5);
      }
      function f(t, n) {
        var e;
        if (t > n) (e = t), (t = n), (n = e);
        return function (e) {
          return Math.max(t, Math.min(n, e));
        };
      }
      function _(t, n, e) {
        var i = t[0],
          r = t[1],
          s = n[0],
          o = n[1];
        if (r < i) (i = l(r, i)), (s = e(o, s));
        else (i = l(i, r)), (s = e(s, o));
        return function (t) {
          return s(i(t));
        };
      }
      function p(t, n, e) {
        var r = Math.min(t.length, n.length) - 1,
          s = new Array(r),
          o = new Array(r),
          a = -1;
        if (t[r] < t[0]) {
          t = t.slice().reverse();
          n = n.slice().reverse();
        }
        while (++a < r) {
          s[a] = l(t[a], t[a + 1]);
          o[a] = e(n[a], n[a + 1]);
        }
        return function (n) {
          var e = (0, i.ZP)(t, n, 1, r) - 1;
          return o[e](s[e](n));
        };
      }
      function y(t, n) {
        return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
      }
      function g() {
        var t = h,
          n = h,
          e = r.Z,
          i,
          a,
          l,
          y = c,
          g,
          d,
          v;
        function x() {
          var e = Math.min(t.length, n.length);
          if (y !== c) y = f(t[0], t[e - 1]);
          g = e > 2 ? p : _;
          d = v = null;
          return w;
        }
        function w(r) {
          return r == null || isNaN((r = +r)) ? l : (d || (d = g(t.map(i), n, e)))(i(y(r)));
        }
        w.invert = function (e) {
          return y(a((v || (v = g(n, t.map(i), s.Z)))(e)));
        };
        w.domain = function (n) {
          return arguments.length ? ((t = Array.from(n, u.Z)), x()) : t.slice();
        };
        w.range = function (t) {
          return arguments.length ? ((n = Array.from(t)), x()) : n.slice();
        };
        w.rangeRound = function (t) {
          return (n = Array.from(t)), (e = o.Z), x();
        };
        w.clamp = function (t) {
          return arguments.length ? ((y = t ? true : c), x()) : y !== c;
        };
        w.interpolate = function (t) {
          return arguments.length ? ((e = t), x()) : e;
        };
        w.unknown = function (t) {
          return arguments.length ? ((l = t), w) : l;
        };
        return function (t, n) {
          (i = t), (a = n);
          return x();
        };
      }
      function d() {
        return g()(c, c);
      }
    },
    48348: (t, n, e) => {
      e.d(n, { O: () => r, o: () => i });
      function i(t, n) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t);
            break;
          default:
            this.range(n).domain(t);
            break;
        }
        return this;
      }
      function r(t, n) {
        switch (arguments.length) {
          case 0:
            break;
          case 1: {
            if (typeof t === "function") this.interpolator(t);
            else this.range(t);
            break;
          }
          default: {
            this.domain(t);
            if (typeof n === "function") this.interpolator(n);
            else this.range(n);
            break;
          }
        }
        return this;
      }
    },
    50289: (t, n, e) => {
      e.d(n, { Q: () => a, Z: () => u });
      var i = e(67614);
      var r = e(56290);
      var s = e(48348);
      var o = e(47197);
      function a(t) {
        var n = t.domain;
        t.ticks = function (t) {
          var e = n();
          return (0, i.ZP)(e[0], e[e.length - 1], t == null ? 10 : t);
        };
        t.tickFormat = function (t, e) {
          var i = n();
          return (0, o.Z)(i[0], i[i.length - 1], t == null ? 10 : t, e);
        };
        t.nice = function (e) {
          if (e == null) e = 10;
          var r = n();
          var s = 0;
          var o = r.length - 1;
          var a = r[s];
          var u = r[o];
          var h;
          var c;
          var l = 10;
          if (u < a) {
            (c = a), (a = u), (u = c);
            (c = s), (s = o), (o = c);
          }
          while (l-- > 0) {
            c = (0, i.G9)(a, u, e);
            if (c === h) {
              r[s] = a;
              r[o] = u;
              return n(r);
            } else if (c > 0) {
              a = Math.floor(a / c) * c;
              u = Math.ceil(u / c) * c;
            } else if (c < 0) {
              a = Math.ceil(a * c) / c;
              u = Math.floor(u * c) / c;
            } else {
              break;
            }
            h = c;
          }
          return t;
        };
        return t;
      }
      function u() {
        var t = (0, r.ZP)();
        t.copy = function () {
          return (0, r.JG)(t, u());
        };
        s.o.apply(t, arguments);
        return a(t);
      }
    },
    37604: (t, n, e) => {
      e.d(n, { Z: () => i });
      function i(t, n) {
        t = t.slice();
        var e = 0,
          i = t.length - 1,
          r = t[e],
          s = t[i],
          o;
        if (s < r) {
          (o = e), (e = i), (i = o);
          (o = r), (r = s), (s = o);
        }
        t[e] = n.floor(r);
        t[i] = n.ceil(s);
        return t;
      }
    },
    34299: (t, n, e) => {
      e.d(n, { Z: () => i });
      function i(t) {
        return +t;
      }
    },
    57603: (t, n, e) => {
      e.d(n, { O: () => s, Z: () => o });
      var i = e(28419);
      var r = e(48348);
      const s = Symbol("implicit");
      function o() {
        var t = new i.L(),
          n = [],
          e = [],
          a = s;
        function u(i) {
          let r = t.get(i);
          if (r === undefined) {
            if (a !== s) return a;
            t.set(i, (r = n.push(i) - 1));
          }
          return e[r % e.length];
        }
        u.domain = function (e) {
          if (!arguments.length) return n.slice();
          (n = []), (t = new i.L());
          for (const i of e) {
            if (t.has(i)) continue;
            t.set(i, n.push(i) - 1);
          }
          return u;
        };
        u.range = function (t) {
          return arguments.length ? ((e = Array.from(t)), u) : e.slice();
        };
        u.unknown = function (t) {
          return arguments.length ? ((a = t), u) : a;
        };
        u.copy = function () {
          return o(n, e).unknown(a);
        };
        r.o.apply(u, arguments);
        return u;
      }
    },
    47197: (t, n, e) => {
      e.d(n, { Z: () => h });
      var i = e(67614);
      var r = e(46196);
      var s = e(53726);
      var o = e(47539);
      var a = e(37655);
      var u = e(68195);
      function h(t, n, e, h) {
        var c = (0, i.ly)(t, n, e),
          l;
        h = (0, r.Z)(h == null ? ",f" : h);
        switch (h.type) {
          case "s": {
            var f = Math.max(Math.abs(t), Math.abs(n));
            if (h.precision == null && !isNaN((l = (0, s.Z)(c, f)))) h.precision = l;
            return (0, o.jH)(h, f);
          }
          case "":
          case "e":
          case "g":
          case "p":
          case "r": {
            if (h.precision == null && !isNaN((l = (0, a.Z)(c, Math.max(Math.abs(t), Math.abs(n)))))) h.precision = l - (h.type === "e");
            break;
          }
          case "f":
          case "%": {
            if (h.precision == null && !isNaN((l = (0, u.Z)(c)))) h.precision = l - (h.type === "%") * 2;
            break;
          }
        }
        return (0, o.WU)(h);
      }
    },
    88383: (t, n, e) => {
      e.d(n, { Y: () => d, Z: () => v });
      var i = e(41955);
      var r = e(82209);
      var s = e(4584);
      var o = e(22776);
      var a = e(69478);
      var u = e(42784);
      var h = e(7197);
      var c = e(15086);
      var l = e(90317);
      var f = e(56290);
      var _ = e(48348);
      var p = e(37604);
      function y(t) {
        return new Date(t);
      }
      function g(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function d(t, n, e, i, r, s, o, a, u, h) {
        var c = (0, f.ZP)(),
          l = c.invert,
          _ = c.domain;
        var v = h(".%L"),
          x = h(":%S"),
          w = h("%I:%M"),
          m = h("%I %p"),
          b = h("%a %d"),
          M = h("%b %d"),
          Z = h("%B"),
          T = h("%Y");
        function k(t) {
          return (u(t) < t ? v : a(t) < t ? x : o(t) < t ? w : s(t) < t ? m : i(t) < t ? (r(t) < t ? b : M) : e(t) < t ? Z : T)(t);
        }
        c.invert = function (t) {
          return new Date(l(t));
        };
        c.domain = function (t) {
          return arguments.length ? _(Array.from(t, g)) : _().map(y);
        };
        c.ticks = function (n) {
          var e = _();
          return t(e[0], e[e.length - 1], n == null ? 10 : n);
        };
        c.tickFormat = function (t, n) {
          return n == null ? k : h(n);
        };
        c.nice = function (t) {
          var e = _();
          if (!t || typeof t.range !== "function") t = n(e[0], e[e.length - 1], t == null ? 10 : t);
          return t ? _((0, p.Z)(e, t)) : c;
        };
        c.copy = function () {
          return (0, f.JG)(c, d(t, n, e, i, r, s, o, a, u, h));
        };
        return c;
      }
      function v() {
        return _.o.apply(d(i.jK, i._g, r.jB, s.F0, o.Zy, a.rr, u.WQ, h.Z_, c.E, l.i$).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
      }
    },
    10233: (t, n, e) => {
      e.d(n, { Z: () => _ });
      var i = e(93072);
      var r = e(44915);
      var s = e(99372);
      function o(t) {
        return t.innerRadius;
      }
      function a(t) {
        return t.outerRadius;
      }
      function u(t) {
        return t.startAngle;
      }
      function h(t) {
        return t.endAngle;
      }
      function c(t) {
        return t && t.padAngle;
      }
      function l(t, n, e, i, s, o, a, u) {
        var h = e - t,
          c = i - n,
          l = a - s,
          f = u - o,
          _ = f * h - l * c;
        if (_ * _ < r.Ho) return;
        _ = (l * (n - o) - f * (t - s)) / _;
        return [t + _ * h, n + _ * c];
      }
      function f(t, n, e, i, s, o, a) {
        var u = t - e,
          h = n - i,
          c = (a ? o : -o) / (0, r._b)(u * u + h * h),
          l = c * h,
          f = -c * u,
          _ = t + l,
          p = n + f,
          y = e + l,
          g = i + f,
          d = (_ + y) / 2,
          v = (p + g) / 2,
          x = y - _,
          w = g - p,
          m = x * x + w * w,
          b = s - o,
          M = _ * g - y * p,
          Z = (w < 0 ? -1 : 1) * (0, r._b)((0, r.Fp)(0, b * b * m - M * M)),
          T = (M * w - x * Z) / m,
          k = (-M * x - w * Z) / m,
          N = (M * w + x * Z) / m,
          $ = (-M * x + w * Z) / m,
          C = T - d,
          U = k - v,
          D = N - d,
          S = $ - v;
        if (C * C + U * U > D * D + S * S) (T = N), (k = $);
        return { cx: T, cy: k, x01: -l, y01: -f, x11: T * (s / b - 1), y11: k * (s / b - 1) };
      }
      function _() {
        var t = o,
          n = a,
          e = (0, i.Z)(0),
          _ = null,
          p = u,
          y = h,
          g = c,
          d = null,
          v = (0, s.d)(x);
        function x() {
          var i,
            s,
            o = +t.apply(this, arguments),
            a = +n.apply(this, arguments),
            u = p.apply(this, arguments) - r.ou,
            h = y.apply(this, arguments) - r.ou,
            c = (0, r.Wn)(h - u),
            x = h > u;
          if (!d) d = i = v();
          if (a < o) (s = a), (a = o), (o = s);
          if (!(a > r.Ho)) d.moveTo(0, 0);
          else if (c > r.BZ - r.Ho) {
            d.moveTo(a * (0, r.mC)(u), a * (0, r.O$)(u));
            d.arc(0, 0, a, u, h, !x);
            if (o > r.Ho) {
              d.moveTo(o * (0, r.mC)(h), o * (0, r.O$)(h));
              d.arc(0, 0, o, h, u, x);
            }
          } else {
            var w = u,
              m = h,
              b = u,
              M = h,
              Z = c,
              T = c,
              k = g.apply(this, arguments) / 2,
              N = k > r.Ho && (_ ? +_.apply(this, arguments) : (0, r._b)(o * o + a * a)),
              $ = (0, r.VV)((0, r.Wn)(a - o) / 2, +e.apply(this, arguments)),
              C = $,
              U = $,
              D,
              S;
            if (N > r.Ho) {
              var P = (0, r.ZR)((N / o) * (0, r.O$)(k)),
                Y = (0, r.ZR)((N / a) * (0, r.O$)(k));
              if ((Z -= P * 2) > r.Ho) (P *= x ? 1 : -1), (b += P), (M -= P);
              else (Z = 0), (b = M = (u + h) / 2);
              if ((T -= Y * 2) > r.Ho) (Y *= x ? 1 : -1), (w += Y), (m -= Y);
              else (T = 0), (w = m = (u + h) / 2);
            }
            var E = a * (0, r.mC)(w),
              A = a * (0, r.O$)(w),
              H = o * (0, r.mC)(M),
              F = o * (0, r.O$)(M);
            if ($ > r.Ho) {
              var j = a * (0, r.mC)(m),
                B = a * (0, r.O$)(m),
                O = o * (0, r.mC)(b),
                q = o * (0, r.O$)(b),
                I;
              if (c < r.pi) {
                if ((I = l(E, A, O, q, j, B, H, F))) {
                  var L = E - I[0],
                    R = A - I[1],
                    z = j - I[0],
                    J = B - I[1],
                    V = 1 / (0, r.O$)((0, r.Kh)((L * z + R * J) / ((0, r._b)(L * L + R * R) * (0, r._b)(z * z + J * J))) / 2),
                    X = (0, r._b)(I[0] * I[0] + I[1] * I[1]);
                  C = (0, r.VV)($, (o - X) / (V - 1));
                  U = (0, r.VV)($, (a - X) / (V + 1));
                } else {
                  C = U = 0;
                }
              }
            }
            if (!(T > r.Ho)) d.moveTo(E, A);
            else if (U > r.Ho) {
              D = f(O, q, E, A, a, U, x);
              S = f(j, B, H, F, a, U, x);
              d.moveTo(D.cx + D.x01, D.cy + D.y01);
              if (U < $) d.arc(D.cx, D.cy, U, (0, r.fv)(D.y01, D.x01), (0, r.fv)(S.y01, S.x01), !x);
              else {
                d.arc(D.cx, D.cy, U, (0, r.fv)(D.y01, D.x01), (0, r.fv)(D.y11, D.x11), !x);
                d.arc(0, 0, a, (0, r.fv)(D.cy + D.y11, D.cx + D.x11), (0, r.fv)(S.cy + S.y11, S.cx + S.x11), !x);
                d.arc(S.cx, S.cy, U, (0, r.fv)(S.y11, S.x11), (0, r.fv)(S.y01, S.x01), !x);
              }
            } else d.moveTo(E, A), d.arc(0, 0, a, w, m, !x);
            if (!(o > r.Ho) || !(Z > r.Ho)) d.lineTo(H, F);
            else if (C > r.Ho) {
              D = f(H, F, j, B, o, -C, x);
              S = f(E, A, O, q, o, -C, x);
              d.lineTo(D.cx + D.x01, D.cy + D.y01);
              if (C < $) d.arc(D.cx, D.cy, C, (0, r.fv)(D.y01, D.x01), (0, r.fv)(S.y01, S.x01), !x);
              else {
                d.arc(D.cx, D.cy, C, (0, r.fv)(D.y01, D.x01), (0, r.fv)(D.y11, D.x11), !x);
                d.arc(0, 0, o, (0, r.fv)(D.cy + D.y11, D.cx + D.x11), (0, r.fv)(S.cy + S.y11, S.cx + S.x11), x);
                d.arc(S.cx, S.cy, C, (0, r.fv)(S.y11, S.x11), (0, r.fv)(S.y01, S.x01), !x);
              }
            } else d.arc(0, 0, o, M, b, x);
          }
          d.closePath();
          if (i) return (d = null), i + "" || null;
        }
        x.centroid = function () {
          var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
            i = (+p.apply(this, arguments) + +y.apply(this, arguments)) / 2 - r.pi / 2;
          return [(0, r.mC)(i) * e, (0, r.O$)(i) * e];
        };
        x.innerRadius = function (n) {
          return arguments.length ? ((t = typeof n === "function" ? n : (0, i.Z)(+n)), x) : t;
        };
        x.outerRadius = function (t) {
          return arguments.length ? ((n = typeof t === "function" ? t : (0, i.Z)(+t)), x) : n;
        };
        x.cornerRadius = function (t) {
          return arguments.length ? ((e = typeof t === "function" ? t : (0, i.Z)(+t)), x) : e;
        };
        x.padRadius = function (t) {
          return arguments.length ? ((_ = t == null ? null : typeof t === "function" ? t : (0, i.Z)(+t)), x) : _;
        };
        x.startAngle = function (t) {
          return arguments.length ? ((p = typeof t === "function" ? t : (0, i.Z)(+t)), x) : p;
        };
        x.endAngle = function (t) {
          return arguments.length ? ((y = typeof t === "function" ? t : (0, i.Z)(+t)), x) : y;
        };
        x.padAngle = function (t) {
          return arguments.length ? ((g = typeof t === "function" ? t : (0, i.Z)(+t)), x) : g;
        };
        x.context = function (t) {
          return arguments.length ? ((d = t == null ? null : t), x) : d;
        };
        return x;
      }
    },
    5742: (t, n, e) => {
      e.d(n, { Z: () => r });
      var i = Array.prototype.slice;
      function r(t) {
        return typeof t === "object" && "length" in t ? t : Array.from(t);
      }
    },
    93072: (t, n, e) => {
      e.d(n, { Z: () => i });
      function i(t) {
        return function n() {
          return t;
        };
      }
    },
    67829: (t, n, e) => {
      e.d(n, { ZP: () => s, fE: () => r, xm: () => i });
      function i(t, n, e) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + n) / 6,
          (t._y0 + 4 * t._y1 + e) / 6
        );
      }
      function r(t) {
        this._context = t;
      }
      r.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._y0 = this._y1 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              i(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
              break;
          }
          if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
              i(this, t, n);
              break;
          }
          (this._x0 = this._x1), (this._x1 = t);
          (this._y0 = this._y1), (this._y1 = n);
        },
      };
      function s(t) {
        return new r(t);
      }
    },
    79938: (t, n, e) => {
      e.d(n, { Z: () => o });
      var i = e(33046);
      var r = e(67829);
      function s(t) {
        this._context = t;
      }
      s.prototype = {
        areaStart: i.Z,
        areaEnd: i.Z,
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 1: {
              this._context.moveTo(this._x2, this._y2);
              this._context.closePath();
              break;
            }
            case 2: {
              this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
              this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
              this._context.closePath();
              break;
            }
            case 3: {
              this.point(this._x2, this._y2);
              this.point(this._x3, this._y3);
              this.point(this._x4, this._y4);
              break;
            }
          }
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          switch (this._point) {
            case 0:
              this._point = 1;
              (this._x2 = t), (this._y2 = n);
              break;
            case 1:
              this._point = 2;
              (this._x3 = t), (this._y3 = n);
              break;
            case 2:
              this._point = 3;
              (this._x4 = t), (this._y4 = n);
              this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
              break;
            default:
              (0, r.xm)(this, t, n);
              break;
          }
          (this._x0 = this._x1), (this._x1 = t);
          (this._y0 = this._y1), (this._y1 = n);
        },
      };
      function o(t) {
        return new s(t);
      }
    },
    99717: (t, n, e) => {
      e.d(n, { Z: () => s });
      var i = e(67829);
      function r(t) {
        this._context = t;
      }
      r.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._y0 = this._y1 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          switch (this._point) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              var e = (this._x0 + 4 * this._x1 + t) / 6,
                r = (this._y0 + 4 * this._y1 + n) / 6;
              this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
              break;
            case 3:
              this._point = 4;
            default:
              (0, i.xm)(this, t, n);
              break;
          }
          (this._x0 = this._x1), (this._x1 = t);
          (this._y0 = this._y1), (this._y1 = n);
        },
      };
      function s(t) {
        return new r(t);
      }
    },
    24849: (t, n, e) => {
      e.d(n, { Z: () => s });
      var i = e(67829);
      function r(t, n) {
        this._basis = new i.fE(t);
        this._beta = n;
      }
      r.prototype = {
        lineStart: function () {
          this._x = [];
          this._y = [];
          this._basis.lineStart();
        },
        lineEnd: function () {
          var t = this._x,
            n = this._y,
            e = t.length - 1;
          if (e > 0) {
            var i = t[0],
              r = n[0],
              s = t[e] - i,
              o = n[e] - r,
              a = -1,
              u;
            while (++a <= e) {
              u = a / e;
              this._basis.point(this._beta * t[a] + (1 - this._beta) * (i + u * s), this._beta * n[a] + (1 - this._beta) * (r + u * o));
            }
          }
          this._x = this._y = null;
          this._basis.lineEnd();
        },
        point: function (t, n) {
          this._x.push(+t);
          this._y.push(+n);
        },
      };
      const s = (function t(n) {
        function e(t) {
          return n === 1 ? new i.fE(t) : new r(t, n);
        }
        e.beta = function (n) {
          return t(+n);
        };
        return e;
      })(0.85);
    },
    97018: (t, n, e) => {
      e.d(n, { ZP: () => s, pC: () => r, xm: () => i });
      function i(t, n, e) {
        t._context.bezierCurveTo(
          t._x1 + t._k * (t._x2 - t._x0),
          t._y1 + t._k * (t._y2 - t._y0),
          t._x2 + t._k * (t._x1 - n),
          t._y2 + t._k * (t._y1 - e),
          t._x2,
          t._y2
        );
      }
      function r(t, n) {
        this._context = t;
        this._k = (1 - n) / 6;
      }
      r.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              i(this, this._x1, this._y1);
              break;
          }
          if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              (this._x1 = t), (this._y1 = n);
              break;
            case 2:
              this._point = 3;
            default:
              i(this, t, n);
              break;
          }
          (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
          (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
        },
      };
      const s = (function t(n) {
        function e(t) {
          return new r(t, n);
        }
        e.tension = function (n) {
          return t(+n);
        };
        return e;
      })(0);
    },
    85200: (t, n, e) => {
      e.d(n, { U: () => s, Z: () => o });
      var i = e(33046);
      var r = e(97018);
      function s(t, n) {
        this._context = t;
        this._k = (1 - n) / 6;
      }
      s.prototype = {
        areaStart: i.Z,
        areaEnd: i.Z,
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 1: {
              this._context.moveTo(this._x3, this._y3);
              this._context.closePath();
              break;
            }
            case 2: {
              this._context.lineTo(this._x3, this._y3);
              this._context.closePath();
              break;
            }
            case 3: {
              this.point(this._x3, this._y3);
              this.point(this._x4, this._y4);
              this.point(this._x5, this._y5);
              break;
            }
          }
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          switch (this._point) {
            case 0:
              this._point = 1;
              (this._x3 = t), (this._y3 = n);
              break;
            case 1:
              this._point = 2;
              this._context.moveTo((this._x4 = t), (this._y4 = n));
              break;
            case 2:
              this._point = 3;
              (this._x5 = t), (this._y5 = n);
              break;
            default:
              (0, r.xm)(this, t, n);
              break;
          }
          (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
          (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
        },
      };
      const o = (function t(n) {
        function e(t) {
          return new s(t, n);
        }
        e.tension = function (n) {
          return t(+n);
        };
        return e;
      })(0);
    },
    55669: (t, n, e) => {
      e.d(n, { T: () => r, Z: () => s });
      var i = e(97018);
      function r(t, n) {
        this._context = t;
        this._k = (1 - n) / 6;
      }
      r.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          switch (this._point) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              (0, i.xm)(this, t, n);
              break;
          }
          (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
          (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
        },
      };
      const s = (function t(n) {
        function e(t) {
          return new r(t, n);
        }
        e.tension = function (n) {
          return t(+n);
        };
        return e;
      })(0);
    },
    79039: (t, n, e) => {
      e.d(n, { Z: () => a, x: () => s });
      var i = e(44915);
      var r = e(97018);
      function s(t, n, e) {
        var r = t._x1,
          s = t._y1,
          o = t._x2,
          a = t._y2;
        if (t._l01_a > i.Ho) {
          var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            h = 3 * t._l01_a * (t._l01_a + t._l12_a);
          r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / h;
          s = (s * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / h;
        }
        if (t._l23_a > i.Ho) {
          var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            l = 3 * t._l23_a * (t._l23_a + t._l12_a);
          o = (o * c + t._x1 * t._l23_2a - n * t._l12_2a) / l;
          a = (a * c + t._y1 * t._l23_2a - e * t._l12_2a) / l;
        }
        t._context.bezierCurveTo(r, s, o, a, t._x2, t._y2);
      }
      function o(t, n) {
        this._context = t;
        this._alpha = n;
      }
      o.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
          this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              this.point(this._x2, this._y2);
              break;
          }
          if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          if (this._point) {
            var e = this._x2 - t,
              i = this._y2 - n;
            this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + i * i, this._alpha)));
          }
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
            default:
              s(this, t, n);
              break;
          }
          (this._l01_a = this._l12_a), (this._l12_a = this._l23_a);
          (this._l01_2a = this._l12_2a), (this._l12_2a = this._l23_2a);
          (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
          (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
        },
      };
      const a = (function t(n) {
        function e(t) {
          return n ? new o(t, n) : new r.pC(t, 0);
        }
        e.alpha = function (n) {
          return t(+n);
        };
        return e;
      })(0.5);
    },
    68286: (t, n, e) => {
      e.d(n, { Z: () => a });
      var i = e(85200);
      var r = e(33046);
      var s = e(79039);
      function o(t, n) {
        this._context = t;
        this._alpha = n;
      }
      o.prototype = {
        areaStart: r.Z,
        areaEnd: r.Z,
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
          this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 1: {
              this._context.moveTo(this._x3, this._y3);
              this._context.closePath();
              break;
            }
            case 2: {
              this._context.lineTo(this._x3, this._y3);
              this._context.closePath();
              break;
            }
            case 3: {
              this.point(this._x3, this._y3);
              this.point(this._x4, this._y4);
              this.point(this._x5, this._y5);
              break;
            }
          }
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          if (this._point) {
            var e = this._x2 - t,
              i = this._y2 - n;
            this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + i * i, this._alpha)));
          }
          switch (this._point) {
            case 0:
              this._point = 1;
              (this._x3 = t), (this._y3 = n);
              break;
            case 1:
              this._point = 2;
              this._context.moveTo((this._x4 = t), (this._y4 = n));
              break;
            case 2:
              this._point = 3;
              (this._x5 = t), (this._y5 = n);
              break;
            default:
              (0, s.x)(this, t, n);
              break;
          }
          (this._l01_a = this._l12_a), (this._l12_a = this._l23_a);
          (this._l01_2a = this._l12_2a), (this._l12_2a = this._l23_2a);
          (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
          (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
        },
      };
      const a = (function t(n) {
        function e(t) {
          return n ? new o(t, n) : new i.U(t, 0);
        }
        e.alpha = function (n) {
          return t(+n);
        };
        return e;
      })(0.5);
    },
    33506: (t, n, e) => {
      e.d(n, { Z: () => o });
      var i = e(55669);
      var r = e(79039);
      function s(t, n) {
        this._context = t;
        this._alpha = n;
      }
      s.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
          this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
        },
        lineEnd: function () {
          if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          if (this._point) {
            var e = this._x2 - t,
              i = this._y2 - n;
            this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + i * i, this._alpha)));
          }
          switch (this._point) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              (0, r.x)(this, t, n);
              break;
          }
          (this._l01_a = this._l12_a), (this._l12_a = this._l23_a);
          (this._l01_2a = this._l12_2a), (this._l12_2a = this._l23_2a);
          (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
          (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
        },
      };
      const o = (function t(n) {
        function e(t) {
          return n ? new s(t, n) : new i.T(t, 0);
        }
        e.alpha = function (n) {
          return t(+n);
        };
        return e;
      })(0.5);
    },
    18143: (t, n, e) => {
      e.d(n, { Z: () => r });
      function i(t) {
        this._context = t;
      }
      i.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(t, n);
              break;
          }
        },
      };
      function r(t) {
        return new i(t);
      }
    },
    57481: (t, n, e) => {
      e.d(n, { Z: () => s });
      var i = e(33046);
      function r(t) {
        this._context = t;
      }
      r.prototype = {
        areaStart: i.Z,
        areaEnd: i.Z,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          if (this._point) this._context.closePath();
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          if (this._point) this._context.lineTo(t, n);
          else (this._point = 1), this._context.moveTo(t, n);
        },
      };
      function s(t) {
        return new r(t);
      }
    },
    65165: (t, n, e) => {
      e.d(n, { Z: () => c, s: () => l });
      function i(t) {
        return t < 0 ? -1 : 1;
      }
      function r(t, n, e) {
        var r = t._x1 - t._x0,
          s = n - t._x1,
          o = (t._y1 - t._y0) / (r || (s < 0 && -0)),
          a = (e - t._y1) / (s || (r < 0 && -0)),
          u = (o * s + a * r) / (r + s);
        return (i(o) + i(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(u)) || 0;
      }
      function s(t, n) {
        var e = t._x1 - t._x0;
        return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
      }
      function o(t, n, e) {
        var i = t._x0,
          r = t._y0,
          s = t._x1,
          o = t._y1,
          a = (s - i) / 3;
        t._context.bezierCurveTo(i + a, r + a * n, s - a, o - a * e, s, o);
      }
      function a(t) {
        this._context = t;
      }
      a.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x1, this._y1);
              break;
            case 3:
              o(this, this._t0, s(this, this._t0));
              break;
          }
          if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
          this._line = 1 - this._line;
        },
        point: function (t, n) {
          var e = NaN;
          (t = +t), (n = +n);
          if (t === this._x1 && n === this._y1) return;
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              o(this, s(this, (e = r(this, t, n))), e);
              break;
            default:
              o(this, this._t0, (e = r(this, t, n)));
              break;
          }
          (this._x0 = this._x1), (this._x1 = t);
          (this._y0 = this._y1), (this._y1 = n);
          this._t0 = e;
        },
      };
      function u(t) {
        this._context = new h(t);
      }
      (u.prototype = Object.create(a.prototype)).point = function (t, n) {
        a.prototype.point.call(this, n, t);
      };
      function h(t) {
        this._context = t;
      }
      h.prototype = {
        moveTo: function (t, n) {
          this._context.moveTo(n, t);
        },
        closePath: function () {
          this._context.closePath();
        },
        lineTo: function (t, n) {
          this._context.lineTo(n, t);
        },
        bezierCurveTo: function (t, n, e, i, r, s) {
          this._context.bezierCurveTo(n, t, i, e, s, r);
        },
      };
      function c(t) {
        return new a(t);
      }
      function l(t) {
        return new u(t);
      }
    },
    56732: (t, n, e) => {
      e.d(n, { Z: () => s });
      function i(t) {
        this._context = t;
      }
      i.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x = [];
          this._y = [];
        },
        lineEnd: function () {
          var t = this._x,
            n = this._y,
            e = t.length;
          if (e) {
            this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]);
            if (e === 2) {
              this._context.lineTo(t[1], n[1]);
            } else {
              var i = r(t),
                s = r(n);
              for (var o = 0, a = 1; a < e; ++o, ++a) {
                this._context.bezierCurveTo(i[0][o], s[0][o], i[1][o], s[1][o], t[a], n[a]);
              }
            }
          }
          if (this._line || (this._line !== 0 && e === 1)) this._context.closePath();
          this._line = 1 - this._line;
          this._x = this._y = null;
        },
        point: function (t, n) {
          this._x.push(+t);
          this._y.push(+n);
        },
      };
      function r(t) {
        var n,
          e = t.length - 1,
          i,
          r = new Array(e),
          s = new Array(e),
          o = new Array(e);
        (r[0] = 0), (s[0] = 2), (o[0] = t[0] + 2 * t[1]);
        for (n = 1; n < e - 1; ++n) (r[n] = 1), (s[n] = 4), (o[n] = 4 * t[n] + 2 * t[n + 1]);
        (r[e - 1] = 2), (s[e - 1] = 7), (o[e - 1] = 8 * t[e - 1] + t[e]);
        for (n = 1; n < e; ++n) (i = r[n] / s[n - 1]), (s[n] -= i), (o[n] -= i * o[n - 1]);
        r[e - 1] = o[e - 1] / s[e - 1];
        for (n = e - 2; n >= 0; --n) r[n] = (o[n] - r[n + 1]) / s[n];
        s[e - 1] = (t[e] + r[e - 1]) / 2;
        for (n = 0; n < e - 1; ++n) s[n] = 2 * t[n + 1] - r[n + 1];
        return [r, s];
      }
      function s(t) {
        return new i(t);
      }
    },
    77059: (t, n, e) => {
      e.d(n, { RN: () => s, ZP: () => r, cD: () => o });
      function i(t, n) {
        this._context = t;
        this._t = n;
      }
      i.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._x = this._y = NaN;
          this._point = 0;
        },
        lineEnd: function () {
          if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
          if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
          if (this._line >= 0) (this._t = 1 - this._t), (this._line = 1 - this._line);
        },
        point: function (t, n) {
          (t = +t), (n = +n);
          switch (this._point) {
            case 0:
              this._point = 1;
              this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
            default: {
              if (this._t <= 0) {
                this._context.lineTo(this._x, n);
                this._context.lineTo(t, n);
              } else {
                var e = this._x * (1 - this._t) + t * this._t;
                this._context.lineTo(e, this._y);
                this._context.lineTo(e, n);
              }
              break;
            }
          }
          (this._x = t), (this._y = n);
        },
      };
      function r(t) {
        return new i(t, 0.5);
      }
      function s(t) {
        return new i(t, 0);
      }
      function o(t) {
        return new i(t, 1);
      }
    },
    25049: (t, n, e) => {
      e.d(n, { Z: () => u });
      var i = e(5742);
      var r = e(93072);
      var s = e(18143);
      var o = e(99372);
      var a = e(78260);
      function u(t, n) {
        var e = (0, r.Z)(true),
          u = null,
          h = s.Z,
          c = null,
          l = (0, o.d)(f);
        t = typeof t === "function" ? t : t === undefined ? a.x : (0, r.Z)(t);
        n = typeof n === "function" ? n : n === undefined ? a.y : (0, r.Z)(n);
        function f(r) {
          var s,
            o = (r = (0, i.Z)(r)).length,
            a,
            f = false,
            _;
          if (u == null) c = h((_ = l()));
          for (s = 0; s <= o; ++s) {
            if (!(s < o && e((a = r[s]), s, r)) === f) {
              if ((f = !f)) c.lineStart();
              else c.lineEnd();
            }
            if (f) c.point(+t(a, s, r), +n(a, s, r));
          }
          if (_) return (c = null), _ + "" || null;
        }
        f.x = function (n) {
          return arguments.length ? ((t = typeof n === "function" ? n : (0, r.Z)(+n)), f) : t;
        };
        f.y = function (t) {
          return arguments.length ? ((n = typeof t === "function" ? t : (0, r.Z)(+t)), f) : n;
        };
        f.defined = function (t) {
          return arguments.length ? ((e = typeof t === "function" ? t : (0, r.Z)(!!t)), f) : e;
        };
        f.curve = function (t) {
          return arguments.length ? ((h = t), u != null && (c = h(u)), f) : h;
        };
        f.context = function (t) {
          return arguments.length ? (t == null ? (u = c = null) : (c = h((u = t))), f) : u;
        };
        return f;
      }
    },
    44915: (t, n, e) => {
      e.d(n, {
        BZ: () => _,
        Fp: () => o,
        Ho: () => c,
        Kh: () => p,
        O$: () => u,
        VV: () => a,
        Wn: () => i,
        ZR: () => y,
        _b: () => h,
        fv: () => r,
        mC: () => s,
        ou: () => f,
        pi: () => l,
      });
      const i = Math.abs;
      const r = Math.atan2;
      const s = Math.cos;
      const o = Math.max;
      const a = Math.min;
      const u = Math.sin;
      const h = Math.sqrt;
      const c = 1e-12;
      const l = Math.PI;
      const f = l / 2;
      const _ = 2 * l;
      function p(t) {
        return t > 1 ? 0 : t < -1 ? l : Math.acos(t);
      }
      function y(t) {
        return t >= 1 ? f : t <= -1 ? -f : Math.asin(t);
      }
    },
    33046: (t, n, e) => {
      e.d(n, { Z: () => i });
      function i() {}
    },
    99372: (t, n, e) => {
      e.d(n, { d: () => r });
      var i = e(11108);
      function r(t) {
        let n = 3;
        t.digits = function (e) {
          if (!arguments.length) return n;
          if (e == null) {
            n = null;
          } else {
            const t = Math.floor(e);
            if (!(t >= 0)) throw new RangeError(`invalid digits: ${e}`);
            n = t;
          }
          return t;
        };
        return () => new i.y$(n);
      }
    },
    78260: (t, n, e) => {
      e.d(n, { x: () => i, y: () => r });
      function i(t) {
        return t[0];
      }
      function r(t) {
        return t[1];
      }
    },
    90317: (t, n, e) => {
      e.d(n, { Z1: () => o, g0: () => a, i$: () => s, wp: () => u });
      var i = e(30472);
      var r;
      var s;
      var o;
      var a;
      var u;
      h({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      });
      function h(t) {
        r = (0, i.Z)(t);
        s = r.format;
        o = r.parse;
        a = r.utcFormat;
        u = r.utcParse;
        return r;
      }
    },
    30472: (t, n, e) => {
      e.d(n, { Z: () => h });
      var i = e(22776);
      var r = e(69478);
      var s = e(82209);
      function o(t) {
        if (0 <= t.y && t.y < 100) {
          var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          n.setFullYear(t.y);
          return n;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function a(t) {
        if (0 <= t.y && t.y < 100) {
          var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          n.setUTCFullYear(t.y);
          return n;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function u(t, n, e) {
        return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
      }
      function h(t) {
        var n = t.dateTime,
          e = t.date,
          s = t.time,
          h = t.periods,
          l = t.days,
          f = t.shortDays,
          _ = t.months,
          p = t.shortMonths;
        var y = g(h),
          X = d(h),
          yt = g(l),
          Nt = d(l),
          $t = g(f),
          Ct = d(f),
          Ut = g(_),
          Dt = d(_),
          St = g(p),
          Pt = d(p);
        var Yt = {
          a: Vt,
          A: Xt,
          b: Wt,
          B: Qt,
          c: null,
          d: F,
          e: F,
          f: I,
          g: tt,
          G: et,
          H: j,
          I: B,
          j: O,
          L: q,
          m: L,
          M: R,
          p: Gt,
          q: Kt,
          Q: Tt,
          s: kt,
          S: z,
          u: J,
          U: V,
          V: W,
          w: Q,
          W: G,
          x: null,
          X: null,
          y: K,
          Y: nt,
          Z: it,
          "%": Zt,
        };
        var Et = {
          a: tn,
          A: nn,
          b: en,
          B: rn,
          c: null,
          d: rt,
          e: rt,
          f: ht,
          g: wt,
          G: bt,
          H: st,
          I: ot,
          j: at,
          L: ut,
          m: ct,
          M: lt,
          p: sn,
          q: on,
          Q: Tt,
          s: kt,
          S: ft,
          u: _t,
          U: pt,
          V: gt,
          w: dt,
          W: vt,
          x: null,
          X: null,
          y: xt,
          Y: mt,
          Z: Mt,
          "%": Zt,
        };
        var At = {
          a: Ot,
          A: qt,
          b: It,
          B: Lt,
          c: Rt,
          d: $,
          e: $,
          f: Y,
          g: Z,
          G: M,
          H: U,
          I: U,
          j: C,
          L: P,
          m: N,
          M: D,
          p: Bt,
          q: k,
          Q: A,
          s: H,
          S,
          u: x,
          U: w,
          V: m,
          w: v,
          W: b,
          x: zt,
          X: Jt,
          y: Z,
          Y: M,
          Z: T,
          "%": E,
        };
        Yt.x = Ht(e, Yt);
        Yt.X = Ht(s, Yt);
        Yt.c = Ht(n, Yt);
        Et.x = Ht(e, Et);
        Et.X = Ht(s, Et);
        Et.c = Ht(n, Et);
        function Ht(t, n) {
          return function (e) {
            var i = [],
              r = -1,
              s = 0,
              o = t.length,
              a,
              u,
              h;
            if (!(e instanceof Date)) e = new Date(+e);
            while (++r < o) {
              if (t.charCodeAt(r) === 37) {
                i.push(t.slice(s, r));
                if ((u = c[(a = t.charAt(++r))]) != null) a = t.charAt(++r);
                else u = a === "e" ? " " : "0";
                if ((h = n[a])) a = h(e, u);
                i.push(a);
                s = r + 1;
              }
            }
            i.push(t.slice(s, r));
            return i.join("");
          };
        }
        function Ft(t, n) {
          return function (e) {
            var s = u(1900, undefined, 1),
              h = jt(s, t, (e += ""), 0),
              c,
              l;
            if (h != e.length) return null;
            if ("Q" in s) return new Date(s.Q);
            if ("s" in s) return new Date(s.s * 1e3 + ("L" in s ? s.L : 0));
            if (n && !("Z" in s)) s.Z = 0;
            if ("p" in s) s.H = (s.H % 12) + s.p * 12;
            if (s.m === undefined) s.m = "q" in s ? s.q : 0;
            if ("V" in s) {
              if (s.V < 1 || s.V > 53) return null;
              if (!("w" in s)) s.w = 1;
              if ("Z" in s) {
                (c = a(u(s.y, 0, 1))), (l = c.getUTCDay());
                c = l > 4 || l === 0 ? i.l6.ceil(c) : (0, i.l6)(c);
                c = r.AN.offset(c, (s.V - 1) * 7);
                s.y = c.getUTCFullYear();
                s.m = c.getUTCMonth();
                s.d = c.getUTCDate() + ((s.w + 6) % 7);
              } else {
                (c = o(u(s.y, 0, 1))), (l = c.getDay());
                c = l > 4 || l === 0 ? i.Ox.ceil(c) : (0, i.Ox)(c);
                c = r.rr.offset(c, (s.V - 1) * 7);
                s.y = c.getFullYear();
                s.m = c.getMonth();
                s.d = c.getDate() + ((s.w + 6) % 7);
              }
            } else if ("W" in s || "U" in s) {
              if (!("w" in s)) s.w = "u" in s ? s.u % 7 : "W" in s ? 1 : 0;
              l = "Z" in s ? a(u(s.y, 0, 1)).getUTCDay() : o(u(s.y, 0, 1)).getDay();
              s.m = 0;
              s.d = "W" in s ? ((s.w + 6) % 7) + s.W * 7 - ((l + 5) % 7) : s.w + s.U * 7 - ((l + 6) % 7);
            }
            if ("Z" in s) {
              s.H += (s.Z / 100) | 0;
              s.M += s.Z % 100;
              return a(s);
            }
            return o(s);
          };
        }
        function jt(t, n, e, i) {
          var r = 0,
            s = n.length,
            o = e.length,
            a,
            u;
          while (r < s) {
            if (i >= o) return -1;
            a = n.charCodeAt(r++);
            if (a === 37) {
              a = n.charAt(r++);
              u = At[a in c ? n.charAt(r++) : a];
              if (!u || (i = u(t, e, i)) < 0) return -1;
            } else if (a != e.charCodeAt(i++)) {
              return -1;
            }
          }
          return i;
        }
        function Bt(t, n, e) {
          var i = y.exec(n.slice(e));
          return i ? ((t.p = X.get(i[0].toLowerCase())), e + i[0].length) : -1;
        }
        function Ot(t, n, e) {
          var i = $t.exec(n.slice(e));
          return i ? ((t.w = Ct.get(i[0].toLowerCase())), e + i[0].length) : -1;
        }
        function qt(t, n, e) {
          var i = yt.exec(n.slice(e));
          return i ? ((t.w = Nt.get(i[0].toLowerCase())), e + i[0].length) : -1;
        }
        function It(t, n, e) {
          var i = St.exec(n.slice(e));
          return i ? ((t.m = Pt.get(i[0].toLowerCase())), e + i[0].length) : -1;
        }
        function Lt(t, n, e) {
          var i = Ut.exec(n.slice(e));
          return i ? ((t.m = Dt.get(i[0].toLowerCase())), e + i[0].length) : -1;
        }
        function Rt(t, e, i) {
          return jt(t, n, e, i);
        }
        function zt(t, n, i) {
          return jt(t, e, n, i);
        }
        function Jt(t, n, e) {
          return jt(t, s, n, e);
        }
        function Vt(t) {
          return f[t.getDay()];
        }
        function Xt(t) {
          return l[t.getDay()];
        }
        function Wt(t) {
          return p[t.getMonth()];
        }
        function Qt(t) {
          return _[t.getMonth()];
        }
        function Gt(t) {
          return h[+(t.getHours() >= 12)];
        }
        function Kt(t) {
          return 1 + ~~(t.getMonth() / 3);
        }
        function tn(t) {
          return f[t.getUTCDay()];
        }
        function nn(t) {
          return l[t.getUTCDay()];
        }
        function en(t) {
          return p[t.getUTCMonth()];
        }
        function rn(t) {
          return _[t.getUTCMonth()];
        }
        function sn(t) {
          return h[+(t.getUTCHours() >= 12)];
        }
        function on(t) {
          return 1 + ~~(t.getUTCMonth() / 3);
        }
        return {
          format: function (t) {
            var n = Ht((t += ""), Yt);
            n.toString = function () {
              return t;
            };
            return n;
          },
          parse: function (t) {
            var n = Ft((t += ""), false);
            n.toString = function () {
              return t;
            };
            return n;
          },
          utcFormat: function (t) {
            var n = Ht((t += ""), Et);
            n.toString = function () {
              return t;
            };
            return n;
          },
          utcParse: function (t) {
            var n = Ft((t += ""), true);
            n.toString = function () {
              return t;
            };
            return n;
          },
        };
      }
      var c = { "-": "", _: " ", 0: "0" },
        l = /^\s*\d+/,
        f = /^%/,
        _ = /[\\^$*+?|[\]().{}]/g;
      function p(t, n, e) {
        var i = t < 0 ? "-" : "",
          r = (i ? -t : t) + "",
          s = r.length;
        return i + (s < e ? new Array(e - s + 1).join(n) + r : r);
      }
      function y(t) {
        return t.replace(_, "\\$&");
      }
      function g(t) {
        return new RegExp("^(?:" + t.map(y).join("|") + ")", "i");
      }
      function d(t) {
        return new Map(t.map((t, n) => [t.toLowerCase(), n]));
      }
      function v(t, n, e) {
        var i = l.exec(n.slice(e, e + 1));
        return i ? ((t.w = +i[0]), e + i[0].length) : -1;
      }
      function x(t, n, e) {
        var i = l.exec(n.slice(e, e + 1));
        return i ? ((t.u = +i[0]), e + i[0].length) : -1;
      }
      function w(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.U = +i[0]), e + i[0].length) : -1;
      }
      function m(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.V = +i[0]), e + i[0].length) : -1;
      }
      function b(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.W = +i[0]), e + i[0].length) : -1;
      }
      function M(t, n, e) {
        var i = l.exec(n.slice(e, e + 4));
        return i ? ((t.y = +i[0]), e + i[0].length) : -1;
      }
      function Z(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3)), e + i[0].length) : -1;
      }
      function T(t, n, e) {
        var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
        return i ? ((t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00"))), e + i[0].length) : -1;
      }
      function k(t, n, e) {
        var i = l.exec(n.slice(e, e + 1));
        return i ? ((t.q = i[0] * 3 - 3), e + i[0].length) : -1;
      }
      function N(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.m = i[0] - 1), e + i[0].length) : -1;
      }
      function $(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.d = +i[0]), e + i[0].length) : -1;
      }
      function C(t, n, e) {
        var i = l.exec(n.slice(e, e + 3));
        return i ? ((t.m = 0), (t.d = +i[0]), e + i[0].length) : -1;
      }
      function U(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.H = +i[0]), e + i[0].length) : -1;
      }
      function D(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.M = +i[0]), e + i[0].length) : -1;
      }
      function S(t, n, e) {
        var i = l.exec(n.slice(e, e + 2));
        return i ? ((t.S = +i[0]), e + i[0].length) : -1;
      }
      function P(t, n, e) {
        var i = l.exec(n.slice(e, e + 3));
        return i ? ((t.L = +i[0]), e + i[0].length) : -1;
      }
      function Y(t, n, e) {
        var i = l.exec(n.slice(e, e + 6));
        return i ? ((t.L = Math.floor(i[0] / 1e3)), e + i[0].length) : -1;
      }
      function E(t, n, e) {
        var i = f.exec(n.slice(e, e + 1));
        return i ? e + i[0].length : -1;
      }
      function A(t, n, e) {
        var i = l.exec(n.slice(e));
        return i ? ((t.Q = +i[0]), e + i[0].length) : -1;
      }
      function H(t, n, e) {
        var i = l.exec(n.slice(e));
        return i ? ((t.s = +i[0]), e + i[0].length) : -1;
      }
      function F(t, n) {
        return p(t.getDate(), n, 2);
      }
      function j(t, n) {
        return p(t.getHours(), n, 2);
      }
      function B(t, n) {
        return p(t.getHours() % 12 || 12, n, 2);
      }
      function O(t, n) {
        return p(1 + r.rr.count((0, s.jB)(t), t), n, 3);
      }
      function q(t, n) {
        return p(t.getMilliseconds(), n, 3);
      }
      function I(t, n) {
        return q(t, n) + "000";
      }
      function L(t, n) {
        return p(t.getMonth() + 1, n, 2);
      }
      function R(t, n) {
        return p(t.getMinutes(), n, 2);
      }
      function z(t, n) {
        return p(t.getSeconds(), n, 2);
      }
      function J(t) {
        var n = t.getDay();
        return n === 0 ? 7 : n;
      }
      function V(t, n) {
        return p(i.Zy.count((0, s.jB)(t) - 1, t), n, 2);
      }
      function X(t) {
        var n = t.getDay();
        return n >= 4 || n === 0 ? (0, i.Ig)(t) : i.Ig.ceil(t);
      }
      function W(t, n) {
        t = X(t);
        return p(i.Ig.count((0, s.jB)(t), t) + ((0, s.jB)(t).getDay() === 4), n, 2);
      }
      function Q(t) {
        return t.getDay();
      }
      function G(t, n) {
        return p(i.Ox.count((0, s.jB)(t) - 1, t), n, 2);
      }
      function K(t, n) {
        return p(t.getFullYear() % 100, n, 2);
      }
      function tt(t, n) {
        t = X(t);
        return p(t.getFullYear() % 100, n, 2);
      }
      function nt(t, n) {
        return p(t.getFullYear() % 1e4, n, 4);
      }
      function et(t, n) {
        var e = t.getDay();
        t = e >= 4 || e === 0 ? (0, i.Ig)(t) : i.Ig.ceil(t);
        return p(t.getFullYear() % 1e4, n, 4);
      }
      function it(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? "-" : ((n *= -1), "+")) + p((n / 60) | 0, "0", 2) + p(n % 60, "0", 2);
      }
      function rt(t, n) {
        return p(t.getUTCDate(), n, 2);
      }
      function st(t, n) {
        return p(t.getUTCHours(), n, 2);
      }
      function ot(t, n) {
        return p(t.getUTCHours() % 12 || 12, n, 2);
      }
      function at(t, n) {
        return p(1 + r.AN.count((0, s.ol)(t), t), n, 3);
      }
      function ut(t, n) {
        return p(t.getUTCMilliseconds(), n, 3);
      }
      function ht(t, n) {
        return ut(t, n) + "000";
      }
      function ct(t, n) {
        return p(t.getUTCMonth() + 1, n, 2);
      }
      function lt(t, n) {
        return p(t.getUTCMinutes(), n, 2);
      }
      function ft(t, n) {
        return p(t.getUTCSeconds(), n, 2);
      }
      function _t(t) {
        var n = t.getUTCDay();
        return n === 0 ? 7 : n;
      }
      function pt(t, n) {
        return p(i.pI.count((0, s.ol)(t) - 1, t), n, 2);
      }
      function yt(t) {
        var n = t.getUTCDay();
        return n >= 4 || n === 0 ? (0, i.hB)(t) : i.hB.ceil(t);
      }
      function gt(t, n) {
        t = yt(t);
        return p(i.hB.count((0, s.ol)(t), t) + ((0, s.ol)(t).getUTCDay() === 4), n, 2);
      }
      function dt(t) {
        return t.getUTCDay();
      }
      function vt(t, n) {
        return p(i.l6.count((0, s.ol)(t) - 1, t), n, 2);
      }
      function xt(t, n) {
        return p(t.getUTCFullYear() % 100, n, 2);
      }
      function wt(t, n) {
        t = yt(t);
        return p(t.getUTCFullYear() % 100, n, 2);
      }
      function mt(t, n) {
        return p(t.getUTCFullYear() % 1e4, n, 4);
      }
      function bt(t, n) {
        var e = t.getUTCDay();
        t = e >= 4 || e === 0 ? (0, i.hB)(t) : i.hB.ceil(t);
        return p(t.getUTCFullYear() % 1e4, n, 4);
      }
      function Mt() {
        return "+0000";
      }
      function Zt() {
        return "%";
      }
      function Tt(t) {
        return +t;
      }
      function kt(t) {
        return Math.floor(+t / 1e3);
      }
    },
    69478: (t, n, e) => {
      e.d(n, { AN: () => a, KB: () => h, rr: () => s });
      var i = e(11829);
      var r = e(61222);
      const s = (0, i.J)(
        (t) => t.setHours(0, 0, 0, 0),
        (t, n) => t.setDate(t.getDate() + n),
        (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * r.yB) / r.UD,
        (t) => t.getDate() - 1
      );
      const o = s.range;
      const a = (0, i.J)(
        (t) => {
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setUTCDate(t.getUTCDate() + n);
        },
        (t, n) => (n - t) / r.UD,
        (t) => t.getUTCDate() - 1
      );
      const u = a.range;
      const h = (0, i.J)(
        (t) => {
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setUTCDate(t.getUTCDate() + n);
        },
        (t, n) => (n - t) / r.UD,
        (t) => Math.floor(t / r.UD)
      );
      const c = h.range;
    },
    61222: (t, n, e) => {
      e.d(n, { UD: () => o, Y2: () => s, Ym: () => i, iM: () => a, jz: () => u, qz: () => h, yB: () => r });
      const i = 1e3;
      const r = i * 60;
      const s = r * 60;
      const o = s * 24;
      const a = o * 7;
      const u = o * 30;
      const h = o * 365;
    },
    42784: (t, n, e) => {
      e.d(n, { WQ: () => s, lM: () => a });
      var i = e(11829);
      var r = e(61222);
      const s = (0, i.J)(
        (t) => {
          t.setTime(t - t.getMilliseconds() - t.getSeconds() * r.Ym - t.getMinutes() * r.yB);
        },
        (t, n) => {
          t.setTime(+t + n * r.Y2);
        },
        (t, n) => (n - t) / r.Y2,
        (t) => t.getHours()
      );
      const o = s.range;
      const a = (0, i.J)(
        (t) => {
          t.setUTCMinutes(0, 0, 0);
        },
        (t, n) => {
          t.setTime(+t + n * r.Y2);
        },
        (t, n) => (n - t) / r.Y2,
        (t) => t.getUTCHours()
      );
      const u = a.range;
    },
    11829: (t, n, e) => {
      e.d(n, { J: () => s });
      const i = new Date(),
        r = new Date();
      function s(t, n, e, o) {
        function a(n) {
          return t((n = arguments.length === 0 ? new Date() : new Date(+n))), n;
        }
        a.floor = (n) => (t((n = new Date(+n))), n);
        a.ceil = (e) => (t((e = new Date(e - 1))), n(e, 1), t(e), e);
        a.round = (t) => {
          const n = a(t),
            e = a.ceil(t);
          return t - n < e - t ? n : e;
        };
        a.offset = (t, e) => (n((t = new Date(+t)), e == null ? 1 : Math.floor(e)), t);
        a.range = (e, i, r) => {
          const s = [];
          e = a.ceil(e);
          r = r == null ? 1 : Math.floor(r);
          if (!(e < i) || !(r > 0)) return s;
          let o;
          do {
            s.push((o = new Date(+e))), n(e, r), t(e);
          } while (o < e && e < i);
          return s;
        };
        a.filter = (e) =>
          s(
            (n) => {
              if (n >= n) while ((t(n), !e(n))) n.setTime(n - 1);
            },
            (t, i) => {
              if (t >= t) {
                if (i < 0)
                  while (++i <= 0) {
                    while ((n(t, -1), !e(t))) {}
                  }
                else
                  while (--i >= 0) {
                    while ((n(t, +1), !e(t))) {}
                  }
              }
            }
          );
        if (e) {
          a.count = (n, s) => {
            i.setTime(+n), r.setTime(+s);
            t(i), t(r);
            return Math.floor(e(i, r));
          };
          a.every = (t) => {
            t = Math.floor(t);
            return !isFinite(t) || !(t > 0) ? null : !(t > 1) ? a : a.filter(o ? (n) => o(n) % t === 0 : (n) => a.count(0, n) % t === 0);
          };
        }
        return a;
      }
    },
    98179: (t, n, e) => {
      e.d(n, { A: () => r });
      var i = e(11829);
      const r = (0, i.J)(
        () => {},
        (t, n) => {
          t.setTime(+t + n);
        },
        (t, n) => n - t
      );
      r.every = (t) => {
        t = Math.floor(t);
        if (!isFinite(t) || !(t > 0)) return null;
        if (!(t > 1)) return r;
        return (0, i.J)(
          (n) => {
            n.setTime(Math.floor(n / t) * t);
          },
          (n, e) => {
            n.setTime(+n + e * t);
          },
          (n, e) => (e - n) / t
        );
      };
      const s = r.range;
    },
    7197: (t, n, e) => {
      e.d(n, { Z_: () => s, rz: () => a });
      var i = e(11829);
      var r = e(61222);
      const s = (0, i.J)(
        (t) => {
          t.setTime(t - t.getMilliseconds() - t.getSeconds() * r.Ym);
        },
        (t, n) => {
          t.setTime(+t + n * r.yB);
        },
        (t, n) => (n - t) / r.yB,
        (t) => t.getMinutes()
      );
      const o = s.range;
      const a = (0, i.J)(
        (t) => {
          t.setUTCSeconds(0, 0);
        },
        (t, n) => {
          t.setTime(+t + n * r.yB);
        },
        (t, n) => (n - t) / r.yB,
        (t) => t.getUTCMinutes()
      );
      const u = a.range;
    },
    4584: (t, n, e) => {
      e.d(n, { F0: () => r, me: () => o });
      var i = e(11829);
      const r = (0, i.J)(
        (t) => {
          t.setDate(1);
          t.setHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setMonth(t.getMonth() + n);
        },
        (t, n) => n.getMonth() - t.getMonth() + (n.getFullYear() - t.getFullYear()) * 12,
        (t) => t.getMonth()
      );
      const s = r.range;
      const o = (0, i.J)(
        (t) => {
          t.setUTCDate(1);
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setUTCMonth(t.getUTCMonth() + n);
        },
        (t, n) => n.getUTCMonth() - t.getUTCMonth() + (n.getUTCFullYear() - t.getUTCFullYear()) * 12,
        (t) => t.getUTCMonth()
      );
      const a = o.range;
    },
    15086: (t, n, e) => {
      e.d(n, { E: () => s });
      var i = e(11829);
      var r = e(61222);
      const s = (0, i.J)(
        (t) => {
          t.setTime(t - t.getMilliseconds());
        },
        (t, n) => {
          t.setTime(+t + n * r.Ym);
        },
        (t, n) => (n - t) / r.Ym,
        (t) => t.getUTCSeconds()
      );
      const o = s.range;
    },
    41955: (t, n, e) => {
      e.d(n, { WG: () => y, _g: () => v, jK: () => d, jo: () => g });
      var i = e(2725);
      var r = e(67614);
      var s = e(61222);
      var o = e(98179);
      var a = e(15086);
      var u = e(7197);
      var h = e(42784);
      var c = e(69478);
      var l = e(22776);
      var f = e(4584);
      var _ = e(82209);
      function p(t, n, e, u, h, c) {
        const l = [
          [a.E, 1, s.Ym],
          [a.E, 5, 5 * s.Ym],
          [a.E, 15, 15 * s.Ym],
          [a.E, 30, 30 * s.Ym],
          [c, 1, s.yB],
          [c, 5, 5 * s.yB],
          [c, 15, 15 * s.yB],
          [c, 30, 30 * s.yB],
          [h, 1, s.Y2],
          [h, 3, 3 * s.Y2],
          [h, 6, 6 * s.Y2],
          [h, 12, 12 * s.Y2],
          [u, 1, s.UD],
          [u, 2, 2 * s.UD],
          [e, 1, s.iM],
          [n, 1, s.jz],
          [n, 3, 3 * s.jz],
          [t, 1, s.qz],
        ];
        function f(t, n, e) {
          const i = n < t;
          if (i) [t, n] = [n, t];
          const r = e && typeof e.range === "function" ? e : _(t, n, e);
          const s = r ? r.range(t, +n + 1) : [];
          return i ? s.reverse() : s;
        }
        function _(n, e, a) {
          const u = Math.abs(e - n) / a;
          const h = (0, i.Z)(([, , t]) => t).right(l, u);
          if (h === l.length) return t.every((0, r.ly)(n / s.qz, e / s.qz, a));
          if (h === 0) return o.A.every(Math.max((0, r.ly)(n, e, a), 1));
          const [c, f] = l[u / l[h - 1][2] < l[h][2] / u ? h - 1 : h];
          return c.every(f);
        }
        return [f, _];
      }
      const [y, g] = p(_.ol, f.me, l.pI, c.KB, h.lM, u.rz);
      const [d, v] = p(_.jB, f.F0, l.Zy, c.rr, h.WQ, u.Z_);
    },
    22776: (t, n, e) => {
      e.d(n, { EF: () => h, Ig: () => c, Lq: () => f, Ox: () => a, YD: () => u, Zy: () => o, hB: () => T, l6: () => b, pI: () => m, y2: () => l });
      var i = e(11829);
      var r = e(61222);
      function s(t) {
        return (0, i.J)(
          (n) => {
            n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7));
            n.setHours(0, 0, 0, 0);
          },
          (t, n) => {
            t.setDate(t.getDate() + n * 7);
          },
          (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * r.yB) / r.iM
        );
      }
      const o = s(0);
      const a = s(1);
      const u = s(2);
      const h = s(3);
      const c = s(4);
      const l = s(5);
      const f = s(6);
      const _ = o.range;
      const p = a.range;
      const y = u.range;
      const g = h.range;
      const d = c.range;
      const v = l.range;
      const x = f.range;
      function w(t) {
        return (0, i.J)(
          (n) => {
            n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7));
            n.setUTCHours(0, 0, 0, 0);
          },
          (t, n) => {
            t.setUTCDate(t.getUTCDate() + n * 7);
          },
          (t, n) => (n - t) / r.iM
        );
      }
      const m = w(0);
      const b = w(1);
      const M = w(2);
      const Z = w(3);
      const T = w(4);
      const k = w(5);
      const N = w(6);
      const $ = m.range;
      const C = b.range;
      const U = M.range;
      const D = Z.range;
      const S = T.range;
      const P = k.range;
      const Y = N.range;
    },
    82209: (t, n, e) => {
      e.d(n, { jB: () => r, ol: () => o });
      var i = e(11829);
      const r = (0, i.J)(
        (t) => {
          t.setMonth(0, 1);
          t.setHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n);
        },
        (t, n) => n.getFullYear() - t.getFullYear(),
        (t) => t.getFullYear()
      );
      r.every = (t) =>
        !isFinite((t = Math.floor(t))) || !(t > 0)
          ? null
          : (0, i.J)(
              (n) => {
                n.setFullYear(Math.floor(n.getFullYear() / t) * t);
                n.setMonth(0, 1);
                n.setHours(0, 0, 0, 0);
              },
              (n, e) => {
                n.setFullYear(n.getFullYear() + e * t);
              }
            );
      const s = r.range;
      const o = (0, i.J)(
        (t) => {
          t.setUTCMonth(0, 1);
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n);
        },
        (t, n) => n.getUTCFullYear() - t.getUTCFullYear(),
        (t) => t.getUTCFullYear()
      );
      o.every = (t) =>
        !isFinite((t = Math.floor(t))) || !(t > 0)
          ? null
          : (0, i.J)(
              (n) => {
                n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t);
                n.setUTCMonth(0, 1);
                n.setUTCHours(0, 0, 0, 0);
              },
              (n, e) => {
                n.setUTCFullYear(n.getUTCFullYear() + e * t);
              }
            );
      const a = o.range;
    },
    35374: (t, n, e) => {
      e.d(n, { B7: () => g, HT: () => d, zO: () => p });
      var i = 0,
        r = 0,
        s = 0,
        o = 1e3,
        a,
        u,
        h = 0,
        c = 0,
        l = 0,
        f = typeof performance === "object" && performance.now ? performance : Date,
        _ =
          typeof window === "object" && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (t) {
                setTimeout(t, 17);
              };
      function p() {
        return c || (_(y), (c = f.now() + l));
      }
      function y() {
        c = 0;
      }
      function g() {
        this._call = this._time = this._next = null;
      }
      g.prototype = d.prototype = {
        constructor: g,
        restart: function (t, n, e) {
          if (typeof t !== "function") throw new TypeError("callback is not a function");
          e = (e == null ? p() : +e) + (n == null ? 0 : +n);
          if (!this._next && u !== this) {
            if (u) u._next = this;
            else a = this;
            u = this;
          }
          this._call = t;
          this._time = e;
          b();
        },
        stop: function () {
          if (this._call) {
            this._call = null;
            this._time = Infinity;
            b();
          }
        },
      };
      function d(t, n, e) {
        var i = new g();
        i.restart(t, n, e);
        return i;
      }
      function v() {
        p();
        ++i;
        var t = a,
          n;
        while (t) {
          if ((n = c - t._time) >= 0) t._call.call(undefined, n);
          t = t._next;
        }
        --i;
      }
      function x() {
        c = (h = f.now()) + l;
        i = r = 0;
        try {
          v();
        } finally {
          i = 0;
          m();
          c = 0;
        }
      }
      function w() {
        var t = f.now(),
          n = t - h;
        if (n > o) (l -= n), (h = t);
      }
      function m() {
        var t,
          n = a,
          e,
          i = Infinity;
        while (n) {
          if (n._call) {
            if (i > n._time) i = n._time;
            (t = n), (n = n._next);
          } else {
            (e = n._next), (n._next = null);
            n = t ? (t._next = e) : (a = e);
          }
        }
        u = t;
        b(i);
      }
      function b(t) {
        if (i) return;
        if (r) r = clearTimeout(r);
        var n = t - c;
        if (n > 24) {
          if (t < Infinity) r = setTimeout(x, t - f.now() - l);
          if (s) s = clearInterval(s);
        } else {
          if (!s) (h = f.now()), (s = setInterval(w, o));
          (i = 1), _(x);
        }
      }
    },
    28419: (t, n, e) => {
      e.d(n, { H: () => r, L: () => i });
      class i extends Map {
        constructor(t, n = u) {
          super();
          Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: n } });
          if (t != null) for (const [e, i] of t) this.set(e, i);
        }
        get(t) {
          return super.get(s(this, t));
        }
        has(t) {
          return super.has(s(this, t));
        }
        set(t, n) {
          return super.set(o(this, t), n);
        }
        delete(t) {
          return super.delete(a(this, t));
        }
      }
      class r extends Set {
        constructor(t, n = u) {
          super();
          Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: n } });
          if (t != null) for (const e of t) this.add(e);
        }
        has(t) {
          return super.has(s(this, t));
        }
        add(t) {
          return super.add(o(this, t));
        }
        delete(t) {
          return super.delete(a(this, t));
        }
      }
      function s({ _intern: t, _key: n }, e) {
        const i = n(e);
        return t.has(i) ? t.get(i) : e;
      }
      function o({ _intern: t, _key: n }, e) {
        const i = n(e);
        if (t.has(i)) return t.get(i);
        t.set(i, e);
        return e;
      }
      function a({ _intern: t, _key: n }, e) {
        const i = n(e);
        if (t.has(i)) {
          e = t.get(e);
          t.delete(i);
        }
        return e;
      }
      function u(t) {
        return t !== null && typeof t === "object" ? t.valueOf() : t;
      }
    },
  },
]);
