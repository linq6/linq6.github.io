(self.webpackChunk_jupyter_widgets_jupyterlab_manager = self.webpackChunk_jupyter_widgets_jupyterlab_manager || []).push([
  [727],
  {
    8996: (t, e, r) => {
      "use strict";
      function n(t, e, r) {
        (t.prototype = e.prototype = r), (r.constructor = t);
      }
      function i(t, e) {
        var r = Object.create(t.prototype);
        for (var n in e) r[n] = e[n];
        return r;
      }
      function o() {}
      r.d(e, { Ay: () => x });
      var a = 0.7,
        s = 1 / a,
        l = "\\s*([+-]?\\d+)\\s*",
        u = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        c = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        h = /^#([0-9a-f]{3,8})$/,
        p = new RegExp(`^rgb\\(${l},${l},${l}\\)$`),
        f = new RegExp(`^rgb\\(${c},${c},${c}\\)$`),
        d = new RegExp(`^rgba\\(${l},${l},${l},${u}\\)$`),
        m = new RegExp(`^rgba\\(${c},${c},${c},${u}\\)$`),
        g = new RegExp(`^hsl\\(${u},${c},${c}\\)$`),
        v = new RegExp(`^hsla\\(${u},${c},${c},${u}\\)$`),
        b = {
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
      function y() {
        return this.rgb().formatHex();
      }
      function w() {
        return this.rgb().formatRgb();
      }
      function x(t) {
        var e, r;
        return (
          (t = (t + "").trim().toLowerCase()),
          (e = h.exec(t))
            ? ((r = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === r
                ? S(e)
                : 3 === r
                  ? new N(((e >> 8) & 15) | ((e >> 4) & 240), ((e >> 4) & 15) | (240 & e), ((15 & e) << 4) | (15 & e), 1)
                  : 8 === r
                    ? E((e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, (255 & e) / 255)
                    : 4 === r
                      ? E(
                          ((e >> 12) & 15) | ((e >> 8) & 240),
                          ((e >> 8) & 15) | ((e >> 4) & 240),
                          ((e >> 4) & 15) | (240 & e),
                          (((15 & e) << 4) | (15 & e)) / 255
                        )
                      : null)
            : (e = p.exec(t))
              ? new N(e[1], e[2], e[3], 1)
              : (e = f.exec(t))
                ? new N((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, 1)
                : (e = d.exec(t))
                  ? E(e[1], e[2], e[3], e[4])
                  : (e = m.exec(t))
                    ? E((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, e[4])
                    : (e = g.exec(t))
                      ? A(e[1], e[2] / 100, e[3] / 100, 1)
                      : (e = v.exec(t))
                        ? A(e[1], e[2] / 100, e[3] / 100, e[4])
                        : b.hasOwnProperty(t)
                          ? S(b[t])
                          : "transparent" === t
                            ? new N(NaN, NaN, NaN, 0)
                            : null
        );
      }
      function S(t) {
        return new N((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function E(t, e, r, n) {
        return n <= 0 && (t = e = r = NaN), new N(t, e, r, n);
      }
      function N(t, e, r, n) {
        (this.r = +t), (this.g = +e), (this.b = +r), (this.opacity = +n);
      }
      function k() {
        return `#${V(this.r)}${V(this.g)}${V(this.b)}`;
      }
      function P() {
        const t = M(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${C(this.r)}, ${C(this.g)}, ${C(this.b)}${1 === t ? ")" : `, ${t})`}`;
      }
      function M(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function C(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function V(t) {
        return ((t = C(t)) < 16 ? "0" : "") + t.toString(16);
      }
      function A(t, e, r, n) {
        return n <= 0 ? (t = e = r = NaN) : r <= 0 || r >= 1 ? (t = e = NaN) : e <= 0 && (t = NaN), new U(t, e, r, n);
      }
      function $(t) {
        if (t instanceof U) return new U(t.h, t.s, t.l, t.opacity);
        if ((t instanceof o || (t = x(t)), !t)) return new U();
        if (t instanceof U) return t;
        var e = (t = t.rgb()).r / 255,
          r = t.g / 255,
          n = t.b / 255,
          i = Math.min(e, r, n),
          a = Math.max(e, r, n),
          s = NaN,
          l = a - i,
          u = (a + i) / 2;
        return (
          l
            ? ((s = e === a ? (r - n) / l + 6 * (r < n) : r === a ? (n - e) / l + 2 : (e - r) / l + 4), (l /= u < 0.5 ? a + i : 2 - a - i), (s *= 60))
            : (l = u > 0 && u < 1 ? 0 : s),
          new U(s, l, u, t.opacity)
        );
      }
      function U(t, e, r, n) {
        (this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +n);
      }
      function D(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function O(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function L(t, e, r) {
        return 255 * (t < 60 ? e + ((r - e) * t) / 60 : t < 180 ? r : t < 240 ? e + ((r - e) * (240 - t)) / 60 : e);
      }
      n(o, x, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: y,
        formatHex: y,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return $(this).formatHsl();
        },
        formatRgb: w,
        toString: w,
      }),
        n(
          N,
          function (t, e, r, n) {
            return 1 === arguments.length
              ? ((i = t) instanceof o || (i = x(i)), i ? new N((i = i.rgb()).r, i.g, i.b, i.opacity) : new N())
              : new N(t, e, r, null == n ? 1 : n);
            var i;
          },
          i(o, {
            brighter(t) {
              return (t = null == t ? s : Math.pow(s, t)), new N(this.r * t, this.g * t, this.b * t, this.opacity);
            },
            darker(t) {
              return (t = null == t ? a : Math.pow(a, t)), new N(this.r * t, this.g * t, this.b * t, this.opacity);
            },
            rgb() {
              return this;
            },
            clamp() {
              return new N(C(this.r), C(this.g), C(this.b), M(this.opacity));
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
            hex: k,
            formatHex: k,
            formatHex8: function () {
              return `#${V(this.r)}${V(this.g)}${V(this.b)}${V(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
            },
            formatRgb: P,
            toString: P,
          })
        ),
        n(
          U,
          function (t, e, r, n) {
            return 1 === arguments.length ? $(t) : new U(t, e, r, null == n ? 1 : n);
          },
          i(o, {
            brighter(t) {
              return (t = null == t ? s : Math.pow(s, t)), new U(this.h, this.s, this.l * t, this.opacity);
            },
            darker(t) {
              return (t = null == t ? a : Math.pow(a, t)), new U(this.h, this.s, this.l * t, this.opacity);
            },
            rgb() {
              var t = (this.h % 360) + 360 * (this.h < 0),
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                r = this.l,
                n = r + (r < 0.5 ? r : 1 - r) * e,
                i = 2 * r - n;
              return new N(L(t >= 240 ? t - 240 : t + 120, i, n), L(t, i, n), L(t < 120 ? t + 240 : t - 120, i, n), this.opacity);
            },
            clamp() {
              return new U(D(this.h), O(this.s), O(this.l), M(this.opacity));
            },
            displayable() {
              return ((0 <= this.s && this.s <= 1) || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
            },
            formatHsl() {
              const t = M(this.opacity);
              return `${1 === t ? "hsl(" : "hsla("}${D(this.h)}, ${100 * O(this.s)}%, ${100 * O(this.l)}%${1 === t ? ")" : `, ${t})`}`;
            },
          })
        );
    },
    7102: (t, e, r) => {
      "use strict";
      function n(t, e) {
        if ((r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var r,
          n = t.slice(0, r);
        return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(r + 1)];
      }
      r.d(e, { GP: () => p });
      var i,
        o = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function a(t) {
        if (!(e = o.exec(t))) throw new Error("invalid format: " + t);
        var e;
        return new s({
          fill: e[1],
          align: e[2],
          sign: e[3],
          symbol: e[4],
          zero: e[5],
          width: e[6],
          comma: e[7],
          precision: e[8] && e[8].slice(1),
          trim: e[9],
          type: e[10],
        });
      }
      function s(t) {
        (this.fill = void 0 === t.fill ? " " : t.fill + ""),
          (this.align = void 0 === t.align ? ">" : t.align + ""),
          (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
          (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? "" : t.type + "");
      }
      function l(t, e) {
        var r = n(t, e);
        if (!r) return t + "";
        var i = r[0],
          o = r[1];
        return o < 0
          ? "0." + new Array(-o).join("0") + i
          : i.length > o + 1
            ? i.slice(0, o + 1) + "." + i.slice(o + 1)
            : i + new Array(o - i.length + 2).join("0");
      }
      (a.prototype = s.prototype),
        (s.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        });
      const u = {
        "%": (t, e) => (100 * t).toFixed(e),
        b: (t) => Math.round(t).toString(2),
        c: (t) => t + "",
        d: function (t) {
          return Math.abs((t = Math.round(t))) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
        },
        e: (t, e) => t.toExponential(e),
        f: (t, e) => t.toFixed(e),
        g: (t, e) => t.toPrecision(e),
        o: (t) => Math.round(t).toString(8),
        p: (t, e) => l(100 * t, e),
        r: l,
        s: function (t, e) {
          var r = n(t, e);
          if (!r) return t + "";
          var o = r[0],
            a = r[1],
            s = a - (i = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1,
            l = o.length;
          return s === l
            ? o
            : s > l
              ? o + new Array(s - l + 1).join("0")
              : s > 0
                ? o.slice(0, s) + "." + o.slice(s)
                : "0." + new Array(1 - s).join("0") + n(t, Math.max(0, e + s - 1))[0];
        },
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function c(t) {
        return t;
      }
      var h,
        p,
        f = Array.prototype.map,
        d = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
      (h = (function (t) {
        var e,
          r,
          o =
            void 0 === t.grouping || void 0 === t.thousands
              ? c
              : ((e = f.call(t.grouping, Number)),
                (r = t.thousands + ""),
                function (t, n) {
                  for (
                    var i = t.length, o = [], a = 0, s = e[0], l = 0;
                    i > 0 && s > 0 && (l + s + 1 > n && (s = Math.max(1, n - l)), o.push(t.substring((i -= s), i + s)), !((l += s + 1) > n));

                  )
                    s = e[(a = (a + 1) % e.length)];
                  return o.reverse().join(r);
                }),
          s = void 0 === t.currency ? "" : t.currency[0] + "",
          l = void 0 === t.currency ? "" : t.currency[1] + "",
          h = void 0 === t.decimal ? "." : t.decimal + "",
          p =
            void 0 === t.numerals
              ? c
              : (function (t) {
                  return function (e) {
                    return e.replace(/[0-9]/g, function (e) {
                      return t[+e];
                    });
                  };
                })(f.call(t.numerals, String)),
          m = void 0 === t.percent ? "%" : t.percent + "",
          g = void 0 === t.minus ? "−" : t.minus + "",
          v = void 0 === t.nan ? "NaN" : t.nan + "";
        function b(t) {
          var e = (t = a(t)).fill,
            r = t.align,
            n = t.sign,
            c = t.symbol,
            f = t.zero,
            b = t.width,
            y = t.comma,
            w = t.precision,
            x = t.trim,
            S = t.type;
          "n" === S ? ((y = !0), (S = "g")) : u[S] || (void 0 === w && (w = 12), (x = !0), (S = "g")),
            (f || ("0" === e && "=" === r)) && ((f = !0), (e = "0"), (r = "="));
          var E = "$" === c ? s : "#" === c && /[boxX]/.test(S) ? "0" + S.toLowerCase() : "",
            N = "$" === c ? l : /[%p]/.test(S) ? m : "",
            k = u[S],
            P = /[defgprs%]/.test(S);
          function M(t) {
            var a,
              s,
              l,
              u = E,
              c = N;
            if ("c" === S) (c = k(t) + c), (t = "");
            else {
              var m = (t = +t) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? v : k(Math.abs(t), w)),
                x &&
                  (t = (function (t) {
                    t: for (var e, r = t.length, n = 1, i = -1; n < r; ++n)
                      switch (t[n]) {
                        case ".":
                          i = e = n;
                          break;
                        case "0":
                          0 === i && (i = n), (e = n);
                          break;
                        default:
                          if (!+t[n]) break t;
                          i > 0 && (i = 0);
                      }
                    return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t;
                  })(t)),
                m && 0 == +t && "+" !== n && (m = !1),
                (u = (m ? ("(" === n ? n : g) : "-" === n || "(" === n ? "" : n) + u),
                (c = ("s" === S ? d[8 + i / 3] : "") + c + (m && "(" === n ? ")" : "")),
                P)
              )
                for (a = -1, s = t.length; ++a < s; )
                  if (48 > (l = t.charCodeAt(a)) || l > 57) {
                    (c = (46 === l ? h + t.slice(a + 1) : t.slice(a)) + c), (t = t.slice(0, a));
                    break;
                  }
            }
            y && !f && (t = o(t, 1 / 0));
            var M = u.length + t.length + c.length,
              C = M < b ? new Array(b - M + 1).join(e) : "";
            switch ((y && f && ((t = o(C + t, C.length ? b - c.length : 1 / 0)), (C = "")), r)) {
              case "<":
                t = u + t + c + C;
                break;
              case "=":
                t = u + C + t + c;
                break;
              case "^":
                t = C.slice(0, (M = C.length >> 1)) + u + t + c + C.slice(M);
                break;
              default:
                t = C + u + t + c;
            }
            return p(t);
          }
          return (
            (w = void 0 === w ? 6 : /[gprs]/.test(S) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w))),
            (M.toString = function () {
              return t + "";
            }),
            M
          );
        }
        return {
          format: b,
          formatPrefix: function (t, e) {
            var r,
              i = b((((t = a(t)).type = "f"), t)),
              o = 3 * Math.max(-8, Math.min(8, Math.floor(((r = e), ((r = n(Math.abs(r))) ? r[1] : NaN) / 3)))),
              s = Math.pow(10, -o),
              l = d[8 + o / 3];
            return function (t) {
              return i(s * t) + l;
            };
          },
        };
      })({ thousands: ",", grouping: [3], currency: ["$", ""] })),
        (p = h.format),
        h.formatPrefix;
    },
    5715: function (t, e) {
      !(function (t) {
        "use strict";
        function e(t) {
          return "object" == typeof t && "function" == typeof t.to;
        }
        function r(t) {
          t.parentElement.removeChild(t);
        }
        function n(t) {
          return null != t;
        }
        function i(t) {
          t.preventDefault();
        }
        function o(t) {
          return "number" == typeof t && !isNaN(t) && isFinite(t);
        }
        function a(t, e, r) {
          r > 0 &&
            (c(t, e),
            setTimeout(function () {
              h(t, e);
            }, r));
        }
        function s(t) {
          return Math.max(Math.min(t, 100), 0);
        }
        function l(t) {
          return Array.isArray(t) ? t : [t];
        }
        function u(t) {
          var e = (t = String(t)).split(".");
          return e.length > 1 ? e[1].length : 0;
        }
        function c(t, e) {
          t.classList && !/\s/.test(e) ? t.classList.add(e) : (t.className += " " + e);
        }
        function h(t, e) {
          t.classList && !/\s/.test(e)
            ? t.classList.remove(e)
            : (t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "));
        }
        function p(t) {
          var e = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (t.compatMode || "");
          return {
            x: e ? window.pageXOffset : r ? t.documentElement.scrollLeft : t.body.scrollLeft,
            y: e ? window.pageYOffset : r ? t.documentElement.scrollTop : t.body.scrollTop,
          };
        }
        function f(t, e) {
          return 100 / (e - t);
        }
        function d(t, e, r) {
          return (100 * e) / (t[r + 1] - t[r]);
        }
        function m(t, e) {
          for (var r = 1; t >= e[r]; ) r += 1;
          return r;
        }
        function g(t, e, r) {
          if (r >= t.slice(-1)[0]) return 100;
          var n = m(r, t),
            i = t[n - 1],
            o = t[n],
            a = e[n - 1],
            s = e[n];
          return (
            a +
            (function (t, e) {
              return d(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0], 0);
            })([i, o], r) /
              f(a, s)
          );
        }
        function v(t, e, r, n) {
          if (100 === n) return n;
          var i = m(n, t),
            o = t[i - 1],
            a = t[i];
          return r
            ? n - o > (a - o) / 2
              ? a
              : o
            : e[i - 1]
              ? t[i - 1] +
                (function (t, e) {
                  return Math.round(t / e) * e;
                })(n - t[i - 1], e[i - 1])
              : n;
        }
        var b, y;
        (t.PipsMode = void 0),
          ((y = t.PipsMode || (t.PipsMode = {})).Range = "range"),
          (y.Steps = "steps"),
          (y.Positions = "positions"),
          (y.Count = "count"),
          (y.Values = "values"),
          (t.PipsType = void 0),
          ((b = t.PipsType || (t.PipsType = {}))[(b.None = -1)] = "None"),
          (b[(b.NoValue = 0)] = "NoValue"),
          (b[(b.LargeValue = 1)] = "LargeValue"),
          (b[(b.SmallValue = 2)] = "SmallValue");
        var w = (function () {
            function t(t, e, r) {
              var n;
              (this.xPct = []),
                (this.xVal = []),
                (this.xSteps = []),
                (this.xNumSteps = []),
                (this.xHighestCompleteStep = []),
                (this.xSteps = [r || !1]),
                (this.xNumSteps = [!1]),
                (this.snap = e);
              var i = [];
              for (
                Object.keys(t).forEach(function (e) {
                  i.push([l(t[e]), e]);
                }),
                  i.sort(function (t, e) {
                    return t[0][0] - e[0][0];
                  }),
                  n = 0;
                n < i.length;
                n++
              )
                this.handleEntryPoint(i[n][1], i[n][0]);
              for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) this.handleStepPoint(n, this.xNumSteps[n]);
            }
            return (
              (t.prototype.getDistance = function (t) {
                var e,
                  r = [];
                for (e = 0; e < this.xNumSteps.length - 1; e++) {
                  var n = this.xNumSteps[e];
                  if (n && (t / n) % 1 != 0)
                    throw new Error("noUiSlider: 'limit', 'margin' and 'padding' of " + this.xPct[e] + "% range must be divisible by step.");
                  r[e] = d(this.xVal, t, e);
                }
                return r;
              }),
              (t.prototype.getAbsoluteDistance = function (t, e, r) {
                var n,
                  i = 0;
                if (t < this.xPct[this.xPct.length - 1]) for (; t > this.xPct[i + 1]; ) i++;
                else t === this.xPct[this.xPct.length - 1] && (i = this.xPct.length - 2);
                r || t !== this.xPct[i + 1] || i++, null === e && (e = []);
                var o = 1,
                  a = e[i],
                  s = 0,
                  l = 0,
                  u = 0,
                  c = 0;
                for (
                  n = r ? (t - this.xPct[i]) / (this.xPct[i + 1] - this.xPct[i]) : (this.xPct[i + 1] - t) / (this.xPct[i + 1] - this.xPct[i]);
                  a > 0;

                )
                  (s = this.xPct[i + 1 + c] - this.xPct[i + c]),
                    e[i + c] * o + 100 - 100 * n > 100
                      ? ((l = s * n), (o = (a - 100 * n) / e[i + c]), (n = 1))
                      : ((l = ((e[i + c] * s) / 100) * o), (o = 0)),
                    r ? ((u -= l), this.xPct.length + c >= 1 && c--) : ((u += l), this.xPct.length - c >= 1 && c++),
                    (a = e[i + c] * o);
                return t + u;
              }),
              (t.prototype.toStepping = function (t) {
                return g(this.xVal, this.xPct, t);
              }),
              (t.prototype.fromStepping = function (t) {
                return (function (t, e, r) {
                  if (r >= 100) return t.slice(-1)[0];
                  var n = m(r, e),
                    i = t[n - 1],
                    o = t[n],
                    a = e[n - 1];
                  return (function (t, e) {
                    return (e * (t[1] - t[0])) / 100 + t[0];
                  })([i, o], (r - a) * f(a, e[n]));
                })(this.xVal, this.xPct, t);
              }),
              (t.prototype.getStep = function (t) {
                return v(this.xPct, this.xSteps, this.snap, t);
              }),
              (t.prototype.getDefaultStep = function (t, e, r) {
                var n = m(t, this.xPct);
                return (100 === t || (e && t === this.xPct[n - 1])) && (n = Math.max(n - 1, 1)), (this.xVal[n] - this.xVal[n - 1]) / r;
              }),
              (t.prototype.getNearbySteps = function (t) {
                var e = m(t, this.xPct);
                return {
                  stepBefore: { startValue: this.xVal[e - 2], step: this.xNumSteps[e - 2], highestStep: this.xHighestCompleteStep[e - 2] },
                  thisStep: { startValue: this.xVal[e - 1], step: this.xNumSteps[e - 1], highestStep: this.xHighestCompleteStep[e - 1] },
                  stepAfter: { startValue: this.xVal[e], step: this.xNumSteps[e], highestStep: this.xHighestCompleteStep[e] },
                };
              }),
              (t.prototype.countStepDecimals = function () {
                var t = this.xNumSteps.map(u);
                return Math.max.apply(null, t);
              }),
              (t.prototype.hasNoSize = function () {
                return this.xVal[0] === this.xVal[this.xVal.length - 1];
              }),
              (t.prototype.convert = function (t) {
                return this.getStep(this.toStepping(t));
              }),
              (t.prototype.handleEntryPoint = function (t, e) {
                var r;
                if (!o((r = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t))) || !o(e[0]))
                  throw new Error("noUiSlider: 'range' value isn't numeric.");
                this.xPct.push(r), this.xVal.push(e[0]);
                var n = Number(e[1]);
                r ? this.xSteps.push(!isNaN(n) && n) : isNaN(n) || (this.xSteps[0] = n), this.xHighestCompleteStep.push(0);
              }),
              (t.prototype.handleStepPoint = function (t, e) {
                if (e)
                  if (this.xVal[t] !== this.xVal[t + 1]) {
                    this.xSteps[t] = d([this.xVal[t], this.xVal[t + 1]], e, 0) / f(this.xPct[t], this.xPct[t + 1]);
                    var r = (this.xVal[t + 1] - this.xVal[t]) / this.xNumSteps[t],
                      n = Math.ceil(Number(r.toFixed(3)) - 1),
                      i = this.xVal[t] + this.xNumSteps[t] * n;
                    this.xHighestCompleteStep[t] = i;
                  } else this.xSteps[t] = this.xHighestCompleteStep[t] = this.xVal[t];
              }),
              t
            );
          })(),
          x = {
            to: function (t) {
              return void 0 === t ? "" : t.toFixed(2);
            },
            from: Number,
          },
          S = {
            target: "target",
            base: "base",
            origin: "origin",
            handle: "handle",
            handleLower: "handle-lower",
            handleUpper: "handle-upper",
            touchArea: "touch-area",
            horizontal: "horizontal",
            vertical: "vertical",
            background: "background",
            connect: "connect",
            connects: "connects",
            ltr: "ltr",
            rtl: "rtl",
            textDirectionLtr: "txt-dir-ltr",
            textDirectionRtl: "txt-dir-rtl",
            draggable: "draggable",
            drag: "state-drag",
            tap: "state-tap",
            active: "active",
            tooltip: "tooltip",
            pips: "pips",
            pipsHorizontal: "pips-horizontal",
            pipsVertical: "pips-vertical",
            marker: "marker",
            markerHorizontal: "marker-horizontal",
            markerVertical: "marker-vertical",
            markerNormal: "marker-normal",
            markerLarge: "marker-large",
            markerSub: "marker-sub",
            value: "value",
            valueHorizontal: "value-horizontal",
            valueVertical: "value-vertical",
            valueNormal: "value-normal",
            valueLarge: "value-large",
            valueSub: "value-sub",
          },
          E = { tooltips: ".__tooltips", aria: ".__aria" };
        function N(t, e) {
          if (!o(e)) throw new Error("noUiSlider: 'step' is not numeric.");
          t.singleStep = e;
        }
        function k(t, e) {
          if (!o(e)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
          t.keyboardPageMultiplier = e;
        }
        function P(t, e) {
          if (!o(e)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
          t.keyboardMultiplier = e;
        }
        function M(t, e) {
          if (!o(e)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
          t.keyboardDefaultStep = e;
        }
        function C(t, e) {
          if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider: 'range' is not an object.");
          if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
          t.spectrum = new w(e, t.snap || !1, t.singleStep);
        }
        function V(t, e) {
          if (((e = l(e)), !Array.isArray(e) || !e.length)) throw new Error("noUiSlider: 'start' option is incorrect.");
          (t.handles = e.length), (t.start = e);
        }
        function A(t, e) {
          if ("boolean" != typeof e) throw new Error("noUiSlider: 'snap' option must be a boolean.");
          t.snap = e;
        }
        function $(t, e) {
          if ("boolean" != typeof e) throw new Error("noUiSlider: 'animate' option must be a boolean.");
          t.animate = e;
        }
        function U(t, e) {
          if ("number" != typeof e) throw new Error("noUiSlider: 'animationDuration' option must be a number.");
          t.animationDuration = e;
        }
        function D(t, e) {
          var r,
            n = [!1];
          if (("lower" === e ? (e = [!0, !1]) : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e)) {
            for (r = 1; r < t.handles; r++) n.push(e);
            n.push(!1);
          } else {
            if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1)
              throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
            n = e;
          }
          t.connect = n;
        }
        function O(t, e) {
          switch (e) {
            case "horizontal":
              t.ort = 0;
              break;
            case "vertical":
              t.ort = 1;
              break;
            default:
              throw new Error("noUiSlider: 'orientation' option is invalid.");
          }
        }
        function L(t, e) {
          if (!o(e)) throw new Error("noUiSlider: 'margin' option must be numeric.");
          0 !== e && (t.margin = t.spectrum.getDistance(e));
        }
        function j(t, e) {
          if (!o(e)) throw new Error("noUiSlider: 'limit' option must be numeric.");
          if (((t.limit = t.spectrum.getDistance(e)), !t.limit || t.handles < 2))
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
        function T(t, e) {
          var r;
          if (!o(e) && !Array.isArray(e)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
          if (Array.isArray(e) && 2 !== e.length && !o(e[0]) && !o(e[1]))
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
          if (0 !== e) {
            for (
              Array.isArray(e) || (e = [e, e]), t.padding = [t.spectrum.getDistance(e[0]), t.spectrum.getDistance(e[1])], r = 0;
              r < t.spectrum.xNumSteps.length - 1;
              r++
            )
              if (t.padding[0][r] < 0 || t.padding[1][r] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            var n = e[0] + e[1],
              i = t.spectrum.xVal[0];
            if (n / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - i) > 1)
              throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
          }
        }
        function z(t, e) {
          switch (e) {
            case "ltr":
              t.dir = 0;
              break;
            case "rtl":
              t.dir = 1;
              break;
            default:
              throw new Error("noUiSlider: 'direction' option was not recognized.");
          }
        }
        function H(t, e) {
          if ("string" != typeof e) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
          var r = e.indexOf("tap") >= 0,
            n = e.indexOf("drag") >= 0,
            i = e.indexOf("fixed") >= 0,
            o = e.indexOf("snap") >= 0,
            a = e.indexOf("hover") >= 0,
            s = e.indexOf("unconstrained") >= 0,
            l = e.indexOf("drag-all") >= 0;
          if (i) {
            if (2 !== t.handles) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            L(t, t.start[1] - t.start[0]);
          }
          if (s && (t.margin || t.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
          t.events = { tap: r || o, drag: n, dragAll: l, fixed: i, snap: o, hover: a, unconstrained: s };
        }
        function R(t, r) {
          if (!1 !== r)
            if (!0 === r || e(r)) {
              t.tooltips = [];
              for (var n = 0; n < t.handles; n++) t.tooltips.push(r);
            } else {
              if ((r = l(r)).length !== t.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
              r.forEach(function (t) {
                if ("boolean" != typeof t && !e(t)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
              }),
                (t.tooltips = r);
            }
        }
        function F(t, e) {
          if (e.length !== t.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
          t.handleAttributes = e;
        }
        function _(t, r) {
          if (!e(r)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
          t.ariaFormat = r;
        }
        function q(t, r) {
          if (
            !(function (t) {
              return e(t) && "function" == typeof t.from;
            })(r)
          )
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
          t.format = r;
        }
        function X(t, e) {
          if ("boolean" != typeof e) throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
          t.keyboardSupport = e;
        }
        function B(t, e) {
          t.documentElement = e;
        }
        function Y(t, e) {
          if ("string" != typeof e && !1 !== e) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
          t.cssPrefix = e;
        }
        function I(t, e) {
          if ("object" != typeof e) throw new Error("noUiSlider: 'cssClasses' must be an object.");
          "string" == typeof t.cssPrefix
            ? ((t.cssClasses = {}),
              Object.keys(e).forEach(function (r) {
                t.cssClasses[r] = t.cssPrefix + e[r];
              }))
            : (t.cssClasses = e);
        }
        function G(t) {
          var e = { margin: null, limit: null, padding: null, animate: !0, animationDuration: 300, ariaFormat: x, format: x },
            r = {
              step: { r: !1, t: N },
              keyboardPageMultiplier: { r: !1, t: k },
              keyboardMultiplier: { r: !1, t: P },
              keyboardDefaultStep: { r: !1, t: M },
              start: { r: !0, t: V },
              connect: { r: !0, t: D },
              direction: { r: !0, t: z },
              snap: { r: !1, t: A },
              animate: { r: !1, t: $ },
              animationDuration: { r: !1, t: U },
              range: { r: !0, t: C },
              orientation: { r: !1, t: O },
              margin: { r: !1, t: L },
              limit: { r: !1, t: j },
              padding: { r: !1, t: T },
              behaviour: { r: !0, t: H },
              ariaFormat: { r: !1, t: _ },
              format: { r: !1, t: q },
              tooltips: { r: !1, t: R },
              keyboardSupport: { r: !0, t: X },
              documentElement: { r: !1, t: B },
              cssPrefix: { r: !0, t: Y },
              cssClasses: { r: !0, t: I },
              handleAttributes: { r: !1, t: F },
            },
            i = {
              connect: !1,
              direction: "ltr",
              behaviour: "tap",
              orientation: "horizontal",
              keyboardSupport: !0,
              cssPrefix: "noUi-",
              cssClasses: S,
              keyboardPageMultiplier: 5,
              keyboardMultiplier: 1,
              keyboardDefaultStep: 10,
            };
          t.format && !t.ariaFormat && (t.ariaFormat = t.format),
            Object.keys(r).forEach(function (o) {
              if (n(t[o]) || void 0 !== i[o]) r[o].t(e, n(t[o]) ? t[o] : i[o]);
              else if (r[o].r) throw new Error("noUiSlider: '" + o + "' is required.");
            }),
            (e.pips = t.pips);
          var o = document.createElement("div"),
            a = void 0 !== o.style.msTransform,
            s = void 0 !== o.style.transform;
          e.transformRule = s ? "transform" : a ? "msTransform" : "webkitTransform";
          return (
            (e.style = [
              ["left", "top"],
              ["right", "bottom"],
            ][e.dir][e.ort]),
            e
          );
        }
        function W(e, o, u) {
          var f,
            d,
            m,
            g,
            v,
            b,
            y,
            w = window.navigator.pointerEnabled
              ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
              : window.navigator.msPointerEnabled
                ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }
                : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" },
            x =
              window.CSS &&
              CSS.supports &&
              CSS.supports("touch-action", "none") &&
              (function () {
                var t = !1;
                try {
                  var e = Object.defineProperty({}, "passive", {
                    get: function () {
                      t = !0;
                    },
                  });
                  window.addEventListener("test", null, e);
                } catch (t) {}
                return t;
              })(),
            S = e,
            N = o.spectrum,
            k = [],
            P = [],
            M = [],
            C = 0,
            V = {},
            A = e.ownerDocument,
            $ = o.documentElement || A.documentElement,
            U = A.body,
            D = "rtl" === A.dir || 1 === o.ort ? 0 : 100;
          function O(t, e) {
            var r = A.createElement("div");
            return e && c(r, e), t.appendChild(r), r;
          }
          function L(t, e) {
            var r = O(t, o.cssClasses.origin),
              n = O(r, o.cssClasses.handle);
            if (
              (O(n, o.cssClasses.touchArea),
              n.setAttribute("data-handle", String(e)),
              o.keyboardSupport &&
                (n.setAttribute("tabindex", "0"),
                n.addEventListener("keydown", function (t) {
                  return (function (t, e) {
                    if (z() || H(e)) return !1;
                    var r = ["Left", "Right"],
                      n = ["Down", "Up"],
                      i = ["PageDown", "PageUp"],
                      a = ["Home", "End"];
                    o.dir && !o.ort ? r.reverse() : o.ort && !o.dir && (n.reverse(), i.reverse());
                    var s,
                      l = t.key.replace("Arrow", ""),
                      u = l === i[0],
                      c = l === i[1],
                      h = l === n[0] || l === r[0] || u,
                      p = l === n[1] || l === r[1] || c,
                      f = l === a[0],
                      d = l === a[1];
                    if (!(h || p || f || d)) return !0;
                    if ((t.preventDefault(), p || h)) {
                      var m = h ? 0 : 1,
                        g = gt(e)[m];
                      if (null === g) return !1;
                      !1 === g && (g = N.getDefaultStep(P[e], h, o.keyboardDefaultStep)),
                        (g *= c || u ? o.keyboardPageMultiplier : o.keyboardMultiplier),
                        (g = Math.max(g, 1e-7)),
                        (g *= h ? -1 : 1),
                        (s = k[e] + g);
                    } else s = d ? o.spectrum.xVal[o.spectrum.xVal.length - 1] : o.spectrum.xVal[0];
                    return ht(e, N.toStepping(s), !0, !0), ot("slide", e), ot("update", e), ot("change", e), ot("set", e), !1;
                  })(t, e);
                })),
              void 0 !== o.handleAttributes)
            ) {
              var i = o.handleAttributes[e];
              Object.keys(i).forEach(function (t) {
                n.setAttribute(t, i[t]);
              });
            }
            return (
              n.setAttribute("role", "slider"),
              n.setAttribute("aria-orientation", o.ort ? "vertical" : "horizontal"),
              0 === e ? c(n, o.cssClasses.handleLower) : e === o.handles - 1 && c(n, o.cssClasses.handleUpper),
              r
            );
          }
          function j(t, e) {
            return !!e && O(t, o.cssClasses.connect);
          }
          function T(t, e) {
            return !(!o.tooltips || !o.tooltips[e]) && O(t.firstChild, o.cssClasses.tooltip);
          }
          function z() {
            return S.hasAttribute("disabled");
          }
          function H(t) {
            return d[t].hasAttribute("disabled");
          }
          function R() {
            v &&
              (it("update" + E.tooltips),
              v.forEach(function (t) {
                t && r(t);
              }),
              (v = null));
          }
          function F() {
            R(),
              (v = d.map(T)),
              nt("update" + E.tooltips, function (t, e, r) {
                if (v && o.tooltips && !1 !== v[e]) {
                  var n = t[e];
                  !0 !== o.tooltips[e] && (n = o.tooltips[e].to(r[e])), (v[e].innerHTML = n);
                }
              });
          }
          function _(t, e) {
            return t.map(function (t) {
              return N.fromStepping(e ? N.getStep(t) : t);
            });
          }
          function q(e) {
            var r,
              n = (function (e) {
                if (e.mode === t.PipsMode.Range || e.mode === t.PipsMode.Steps) return N.xVal;
                if (e.mode === t.PipsMode.Count) {
                  if (e.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                  for (var r = e.values - 1, n = 100 / r, i = []; r--; ) i[r] = r * n;
                  return i.push(100), _(i, e.stepped);
                }
                return e.mode === t.PipsMode.Positions
                  ? _(e.values, e.stepped)
                  : e.mode === t.PipsMode.Values
                    ? e.stepped
                      ? e.values.map(function (t) {
                          return N.fromStepping(N.getStep(N.toStepping(t)));
                        })
                      : e.values
                    : [];
              })(e),
              i = {},
              o = N.xVal[0],
              a = N.xVal[N.xVal.length - 1],
              s = !1,
              l = !1,
              u = 0;
            return (
              ((r = n.slice().sort(function (t, e) {
                return t - e;
              })),
              (n = r.filter(function (t) {
                return !this[t] && (this[t] = !0);
              }, {})))[0] !== o && (n.unshift(o), (s = !0)),
              n[n.length - 1] !== a && (n.push(a), (l = !0)),
              n.forEach(function (r, o) {
                var a,
                  c,
                  h,
                  p,
                  f,
                  d,
                  m,
                  g,
                  v,
                  b,
                  y = r,
                  w = n[o + 1],
                  x = e.mode === t.PipsMode.Steps;
                for (
                  x && (a = N.xNumSteps[o]), a || (a = w - y), void 0 === w && (w = y), a = Math.max(a, 1e-7), c = y;
                  c <= w;
                  c = Number((c + a).toFixed(7))
                ) {
                  for (g = (f = (p = N.toStepping(c)) - u) / (e.density || 1), b = f / (v = Math.round(g)), h = 1; h <= v; h += 1)
                    i[(d = u + h * b).toFixed(5)] = [N.fromStepping(d), 0];
                  (m = n.indexOf(c) > -1 ? t.PipsType.LargeValue : x ? t.PipsType.SmallValue : t.PipsType.NoValue),
                    !o && s && c !== w && (m = 0),
                    (c === w && l) || (i[p.toFixed(5)] = [c, m]),
                    (u = p);
                }
              }),
              i
            );
          }
          function X(e, r, n) {
            var i,
              a,
              s = A.createElement("div"),
              l =
                (((i = {})[t.PipsType.None] = ""),
                (i[t.PipsType.NoValue] = o.cssClasses.valueNormal),
                (i[t.PipsType.LargeValue] = o.cssClasses.valueLarge),
                (i[t.PipsType.SmallValue] = o.cssClasses.valueSub),
                i),
              u =
                (((a = {})[t.PipsType.None] = ""),
                (a[t.PipsType.NoValue] = o.cssClasses.markerNormal),
                (a[t.PipsType.LargeValue] = o.cssClasses.markerLarge),
                (a[t.PipsType.SmallValue] = o.cssClasses.markerSub),
                a),
              h = [o.cssClasses.valueHorizontal, o.cssClasses.valueVertical],
              p = [o.cssClasses.markerHorizontal, o.cssClasses.markerVertical];
            function f(t, e) {
              var r = e === o.cssClasses.value,
                n = r ? l : u;
              return e + " " + (r ? h : p)[o.ort] + " " + n[t];
            }
            return (
              c(s, o.cssClasses.pips),
              c(s, 0 === o.ort ? o.cssClasses.pipsHorizontal : o.cssClasses.pipsVertical),
              Object.keys(e).forEach(function (i) {
                !(function (e, i, a) {
                  if ((a = r ? r(i, a) : a) !== t.PipsType.None) {
                    var l = O(s, !1);
                    (l.className = f(a, o.cssClasses.marker)),
                      (l.style[o.style] = e + "%"),
                      a > t.PipsType.NoValue &&
                        (((l = O(s, !1)).className = f(a, o.cssClasses.value)),
                        l.setAttribute("data-value", String(i)),
                        (l.style[o.style] = e + "%"),
                        (l.innerHTML = String(n.to(i))));
                  }
                })(i, e[i][0], e[i][1]);
              }),
              s
            );
          }
          function B() {
            g && (r(g), (g = null));
          }
          function Y(t) {
            B();
            var e = q(t),
              r = t.filter,
              n = t.format || {
                to: function (t) {
                  return String(Math.round(t));
                },
              };
            return (g = S.appendChild(X(e, r, n)));
          }
          function I() {
            var t = f.getBoundingClientRect(),
              e = "offset" + ["Width", "Height"][o.ort];
            return 0 === o.ort ? t.width || f[e] : t.height || f[e];
          }
          function W(t, e, r, n) {
            var i = function (i) {
                var a,
                  s,
                  l = (function (t, e, r) {
                    var n = 0 === t.type.indexOf("touch"),
                      i = 0 === t.type.indexOf("mouse"),
                      o = 0 === t.type.indexOf("pointer"),
                      a = 0,
                      s = 0;
                    if ((0 === t.type.indexOf("MSPointer") && (o = !0), "mousedown" === t.type && !t.buttons && !t.touches)) return !1;
                    if (n) {
                      var l = function (e) {
                        var n = e.target;
                        return n === r || r.contains(n) || (t.composed && t.composedPath().shift() === r);
                      };
                      if ("touchstart" === t.type) {
                        var u = Array.prototype.filter.call(t.touches, l);
                        if (u.length > 1) return !1;
                        (a = u[0].pageX), (s = u[0].pageY);
                      } else {
                        var c = Array.prototype.find.call(t.changedTouches, l);
                        if (!c) return !1;
                        (a = c.pageX), (s = c.pageY);
                      }
                    }
                    return (
                      (e = e || p(A)),
                      (i || o) && ((a = t.clientX + e.x), (s = t.clientY + e.y)),
                      (t.pageOffset = e),
                      (t.points = [a, s]),
                      (t.cursor = i || o),
                      t
                    );
                  })(i, n.pageOffset, n.target || e);
                return (
                  !!l &&
                  !(z() && !n.doNotReject) &&
                  ((a = S),
                  (s = o.cssClasses.tap),
                  !((a.classList ? a.classList.contains(s) : new RegExp("\\b" + s + "\\b").test(a.className)) && !n.doNotReject)) &&
                  !(t === w.start && void 0 !== l.buttons && l.buttons > 1) &&
                  (!n.hover || !l.buttons) &&
                  (x || l.preventDefault(), (l.calcPoint = l.points[o.ort]), void r(l, n))
                );
              },
              a = [];
            return (
              t.split(" ").forEach(function (t) {
                e.addEventListener(t, i, !!x && { passive: !0 }), a.push([t, i]);
              }),
              a
            );
          }
          function Z(t) {
            var e,
              r,
              n,
              i,
              a,
              l,
              u =
                (100 *
                  (t -
                    ((e = f),
                    (r = o.ort),
                    (n = e.getBoundingClientRect()),
                    (i = e.ownerDocument),
                    (a = i.documentElement),
                    (l = p(i)),
                    /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (l.x = 0),
                    r ? n.top + l.y - a.clientTop : n.left + l.x - a.clientLeft))) /
                I();
            return (u = s(u)), o.dir ? 100 - u : u;
          }
          function J(t, e) {
            "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && Q(t, e);
          }
          function K(t, e) {
            if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return Q(t, e);
            var r = (o.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
            lt(r > 0, (100 * r) / e.baseSize, e.locations, e.handleNumbers, e.connect);
          }
          function Q(t, e) {
            e.handle && (h(e.handle, o.cssClasses.active), (C -= 1)),
              e.listeners.forEach(function (t) {
                $.removeEventListener(t[0], t[1]);
              }),
              0 === C && (h(S, o.cssClasses.drag), ct(), t.cursor && ((U.style.cursor = ""), U.removeEventListener("selectstart", i))),
              e.handleNumbers.forEach(function (t) {
                ot("change", t), ot("set", t), ot("end", t);
              });
          }
          function tt(t, e) {
            if (!e.handleNumbers.some(H)) {
              var r;
              1 === e.handleNumbers.length && ((r = d[e.handleNumbers[0]].children[0]), (C += 1), c(r, o.cssClasses.active)), t.stopPropagation();
              var n = [],
                a = W(w.move, $, K, {
                  target: t.target,
                  handle: r,
                  connect: e.connect,
                  listeners: n,
                  startCalcPoint: t.calcPoint,
                  baseSize: I(),
                  pageOffset: t.pageOffset,
                  handleNumbers: e.handleNumbers,
                  buttonsProperty: t.buttons,
                  locations: P.slice(),
                }),
                s = W(w.end, $, Q, { target: t.target, handle: r, listeners: n, doNotReject: !0, handleNumbers: e.handleNumbers }),
                l = W("mouseout", $, J, { target: t.target, handle: r, listeners: n, doNotReject: !0, handleNumbers: e.handleNumbers });
              n.push.apply(n, a.concat(s, l)),
                t.cursor &&
                  ((U.style.cursor = getComputedStyle(t.target).cursor),
                  d.length > 1 && c(S, o.cssClasses.drag),
                  U.addEventListener("selectstart", i, !1)),
                e.handleNumbers.forEach(function (t) {
                  ot("start", t);
                });
            }
          }
          function et(t) {
            t.stopPropagation();
            var e = Z(t.calcPoint),
              r = (function (t) {
                var e = 100,
                  r = !1;
                return (
                  d.forEach(function (n, i) {
                    if (!H(i)) {
                      var o = P[i],
                        a = Math.abs(o - t);
                      (a < e || (a <= e && t > o) || (100 === a && 100 === e)) && ((r = i), (e = a));
                    }
                  }),
                  r
                );
              })(e);
            !1 !== r &&
              (o.events.snap || a(S, o.cssClasses.tap, o.animationDuration),
              ht(r, e, !0, !0),
              ct(),
              ot("slide", r, !0),
              ot("update", r, !0),
              o.events.snap ? tt(t, { handleNumbers: [r] }) : (ot("change", r, !0), ot("set", r, !0)));
          }
          function rt(t) {
            var e = Z(t.calcPoint),
              r = N.getStep(e),
              n = N.fromStepping(r);
            Object.keys(V).forEach(function (t) {
              "hover" === t.split(".")[0] &&
                V[t].forEach(function (t) {
                  t.call(vt, n);
                });
            });
          }
          function nt(t, e) {
            (V[t] = V[t] || []),
              V[t].push(e),
              "update" === t.split(".")[0] &&
                d.forEach(function (t, e) {
                  ot("update", e);
                });
          }
          function it(t) {
            var e = t && t.split(".")[0],
              r = e ? t.substring(e.length) : t;
            Object.keys(V).forEach(function (t) {
              var n = t.split(".")[0],
                i = t.substring(n.length);
              (e && e !== n) ||
                (r && r !== i) ||
                ((function (t) {
                  return t === E.aria || t === E.tooltips;
                })(i) &&
                  r !== i) ||
                delete V[t];
            });
          }
          function ot(t, e, r) {
            Object.keys(V).forEach(function (n) {
              var i = n.split(".")[0];
              t === i &&
                V[n].forEach(function (t) {
                  t.call(vt, k.map(o.format.to), e, k.slice(), r || !1, P.slice(), vt);
                });
            });
          }
          function at(t, e, r, n, i, a) {
            var l;
            return (
              d.length > 1 &&
                !o.events.unconstrained &&
                (n && e > 0 && ((l = N.getAbsoluteDistance(t[e - 1], o.margin, !1)), (r = Math.max(r, l))),
                i && e < d.length - 1 && ((l = N.getAbsoluteDistance(t[e + 1], o.margin, !0)), (r = Math.min(r, l)))),
              d.length > 1 &&
                o.limit &&
                (n && e > 0 && ((l = N.getAbsoluteDistance(t[e - 1], o.limit, !1)), (r = Math.min(r, l))),
                i && e < d.length - 1 && ((l = N.getAbsoluteDistance(t[e + 1], o.limit, !0)), (r = Math.max(r, l)))),
              o.padding &&
                (0 === e && ((l = N.getAbsoluteDistance(0, o.padding[0], !1)), (r = Math.max(r, l))),
                e === d.length - 1 && ((l = N.getAbsoluteDistance(100, o.padding[1], !0)), (r = Math.min(r, l)))),
              !((r = s((r = N.getStep(r)))) === t[e] && !a) && r
            );
          }
          function st(t, e) {
            var r = o.ort;
            return (r ? e : t) + ", " + (r ? t : e);
          }
          function lt(t, e, r, n, i) {
            var o = r.slice(),
              a = n[0],
              s = [!t, t],
              l = [t, !t];
            (n = n.slice()),
              t && n.reverse(),
              n.length > 1
                ? n.forEach(function (t, r) {
                    var n = at(o, t, o[t] + e, s[r], l[r], !1);
                    !1 === n ? (e = 0) : ((e = n - o[t]), (o[t] = n));
                  })
                : (s = l = [!0]);
            var u = !1;
            n.forEach(function (t, n) {
              u = ht(t, r[t] + e, s[n], l[n]) || u;
            }),
              u &&
                (n.forEach(function (t) {
                  ot("update", t), ot("slide", t);
                }),
                null != i && ot("drag", a));
          }
          function ut(t, e) {
            return o.dir ? 100 - t - e : t;
          }
          function ct() {
            M.forEach(function (t) {
              var e = P[t] > 50 ? -1 : 1,
                r = 3 + (d.length + e * t);
              d[t].style.zIndex = String(r);
            });
          }
          function ht(t, e, r, n, i) {
            return (
              i || (e = at(P, t, e, r, n, !1)),
              !1 !== e &&
                ((function (t, e) {
                  (P[t] = e), (k[t] = N.fromStepping(e));
                  var r = "translate(" + st(10 * (ut(e, 0) - D) + "%", "0") + ")";
                  (d[t].style[o.transformRule] = r), pt(t), pt(t + 1);
                })(t, e),
                !0)
            );
          }
          function pt(t) {
            if (m[t]) {
              var e = 0,
                r = 100;
              0 !== t && (e = P[t - 1]), t !== m.length - 1 && (r = P[t]);
              var n = r - e,
                i = "translate(" + st(ut(e, n) + "%", "0") + ")",
                a = "scale(" + st(n / 100, "1") + ")";
              m[t].style[o.transformRule] = i + " " + a;
            }
          }
          function ft(t, e) {
            return null === t || !1 === t || void 0 === t
              ? P[e]
              : ("number" == typeof t && (t = String(t)), !1 !== (t = o.format.from(t)) && (t = N.toStepping(t)), !1 === t || isNaN(t) ? P[e] : t);
          }
          function dt(t, e, r) {
            var n = l(t),
              i = void 0 === P[0];
            (e = void 0 === e || e),
              o.animate && !i && a(S, o.cssClasses.tap, o.animationDuration),
              M.forEach(function (t) {
                ht(t, ft(n[t], t), !0, !1, r);
              });
            var s = 1 === M.length ? 0 : 1;
            if (i && N.hasNoSize() && ((r = !0), (P[0] = 0), M.length > 1)) {
              var u = 100 / (M.length - 1);
              M.forEach(function (t) {
                P[t] = t * u;
              });
            }
            for (; s < M.length; ++s)
              M.forEach(function (t) {
                ht(t, P[t], !0, !0, r);
              });
            ct(),
              M.forEach(function (t) {
                ot("update", t), null !== n[t] && e && ot("set", t);
              });
          }
          function mt(t) {
            if ((void 0 === t && (t = !1), t)) return 1 === k.length ? k[0] : k.slice(0);
            var e = k.map(o.format.to);
            return 1 === e.length ? e[0] : e;
          }
          function gt(t) {
            var e = P[t],
              r = N.getNearbySteps(e),
              n = k[t],
              i = r.thisStep.step,
              a = null;
            if (o.snap) return [n - r.stepBefore.startValue || null, r.stepAfter.startValue - n || null];
            !1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n),
              (a = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep),
              100 === e ? (i = null) : 0 === e && (a = null);
            var s = N.countStepDecimals();
            return null !== i && !1 !== i && (i = Number(i.toFixed(s))), null !== a && !1 !== a && (a = Number(a.toFixed(s))), [a, i];
          }
          c((y = S), o.cssClasses.target),
            0 === o.dir ? c(y, o.cssClasses.ltr) : c(y, o.cssClasses.rtl),
            0 === o.ort ? c(y, o.cssClasses.horizontal) : c(y, o.cssClasses.vertical),
            c(y, "rtl" === getComputedStyle(y).direction ? o.cssClasses.textDirectionRtl : o.cssClasses.textDirectionLtr),
            (f = O(y, o.cssClasses.base)),
            (function (t, e) {
              var r = O(e, o.cssClasses.connects);
              (d = []), (m = []).push(j(r, t[0]));
              for (var n = 0; n < o.handles; n++) d.push(L(e, n)), (M[n] = n), m.push(j(r, t[n + 1]));
            })(o.connect, f),
            (b = o.events).fixed ||
              d.forEach(function (t, e) {
                W(w.start, t.children[0], tt, { handleNumbers: [e] });
              }),
            b.tap && W(w.start, f, et, {}),
            b.hover && W(w.move, f, rt, { hover: !0 }),
            b.drag &&
              m.forEach(function (t, e) {
                if (!1 !== t && 0 !== e && e !== m.length - 1) {
                  var r = d[e - 1],
                    n = d[e],
                    i = [t],
                    a = [r, n],
                    s = [e - 1, e];
                  c(t, o.cssClasses.draggable),
                    b.fixed && (i.push(r.children[0]), i.push(n.children[0])),
                    b.dragAll && ((a = d), (s = M)),
                    i.forEach(function (e) {
                      W(w.start, e, tt, { handles: a, handleNumbers: s, connect: t });
                    });
                }
              }),
            dt(o.start),
            o.pips && Y(o.pips),
            o.tooltips && F(),
            it("update" + E.aria),
            nt("update" + E.aria, function (t, e, r, n, i) {
              M.forEach(function (t) {
                var e = d[t],
                  n = at(P, t, 0, !0, !0, !0),
                  a = at(P, t, 100, !0, !0, !0),
                  s = i[t],
                  l = String(o.ariaFormat.to(r[t]));
                (n = N.fromStepping(n).toFixed(1)),
                  (a = N.fromStepping(a).toFixed(1)),
                  (s = N.fromStepping(s).toFixed(1)),
                  e.children[0].setAttribute("aria-valuemin", n),
                  e.children[0].setAttribute("aria-valuemax", a),
                  e.children[0].setAttribute("aria-valuenow", s),
                  e.children[0].setAttribute("aria-valuetext", l);
              });
            });
          var vt = {
            destroy: function () {
              for (
                it(E.aria),
                  it(E.tooltips),
                  Object.keys(o.cssClasses).forEach(function (t) {
                    h(S, o.cssClasses[t]);
                  });
                S.firstChild;

              )
                S.removeChild(S.firstChild);
              delete S.noUiSlider;
            },
            steps: function () {
              return M.map(gt);
            },
            on: nt,
            off: it,
            get: mt,
            set: dt,
            setHandle: function (t, e, r, n) {
              if (!((t = Number(t)) >= 0 && t < M.length)) throw new Error("noUiSlider: invalid handle number, got: " + t);
              ht(t, ft(e, t), !0, !0, n), ot("update", t), r && ot("set", t);
            },
            reset: function (t) {
              dt(o.start, t);
            },
            __moveHandles: function (t, e, r) {
              lt(t, e, P, r);
            },
            options: u,
            updateOptions: function (t, e) {
              var r = mt(),
                i = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
              i.forEach(function (e) {
                void 0 !== t[e] && (u[e] = t[e]);
              });
              var a = G(u);
              i.forEach(function (e) {
                void 0 !== t[e] && (o[e] = a[e]);
              }),
                (N = a.spectrum),
                (o.margin = a.margin),
                (o.limit = a.limit),
                (o.padding = a.padding),
                o.pips ? Y(o.pips) : B(),
                o.tooltips ? F() : R(),
                (P = []),
                dt(n(t.start) ? t.start : r, e);
            },
            target: S,
            removePips: B,
            removeTooltips: R,
            getPositions: function () {
              return P.slice();
            },
            getTooltips: function () {
              return v;
            },
            getOrigins: function () {
              return d;
            },
            pips: Y,
          };
          return vt;
        }
        function Z(t, e) {
          if (!t || !t.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + t);
          if (t.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
          var r = W(t, G(e), e);
          return (t.noUiSlider = r), r;
        }
        var J = { __spectrum: w, cssClasses: S, create: Z };
        (t.create = Z), (t.cssClasses = S), (t.default = J), Object.defineProperty(t, "__esModule", { value: !0 });
      })(e);
    },
  },
]);
