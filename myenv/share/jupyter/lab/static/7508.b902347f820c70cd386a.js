"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7508],
  {
    73290: (t, e, r) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.AbstractOutputJax = void 0;
      var i = r(36059);
      var n = r(64905);
      var o = (function () {
        function t(t) {
          if (t === void 0) {
            t = {};
          }
          this.adaptor = null;
          var e = this.constructor;
          this.options = (0, i.userOptions)((0, i.defaultOptions)({}, e.OPTIONS), t);
          this.postFilters = new n.FunctionList();
        }
        Object.defineProperty(t.prototype, "name", {
          get: function () {
            return this.constructor.NAME;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.setAdaptor = function (t) {
          this.adaptor = t;
        };
        t.prototype.initialize = function () {};
        t.prototype.reset = function () {
          var t = [];
          for (var e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
          }
        };
        t.prototype.getMetrics = function (t) {};
        t.prototype.styleSheet = function (t) {
          return null;
        };
        t.prototype.pageElements = function (t) {
          return null;
        };
        t.prototype.executeFilters = function (t, e, r, i) {
          var n = { math: e, document: r, data: i };
          t.execute(n);
          return n.data;
        };
        t.NAME = "generic";
        t.OPTIONS = {};
        return t;
      })();
      e.AbstractOutputJax = o;
    },
    96301: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.AbstractWrapper = void 0;
      var r = (function () {
        function t(t, e) {
          this.factory = t;
          this.node = e;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return this.node.kind;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.wrap = function (t) {
          return this.factory.wrap(t);
        };
        return t;
      })();
      e.AbstractWrapper = r;
    },
    56586: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var o =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.AbstractWrapperFactory = void 0;
      var a = r(86161);
      var s = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.wrap = function (t) {
          var e = [];
          for (var r = 1; r < arguments.length; r++) {
            e[r - 1] = arguments[r];
          }
          return this.create.apply(this, o([t.kind, t], n(e), false));
        };
        return e;
      })(a.AbstractFactory);
      e.AbstractWrapperFactory = s;
    },
    37508: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__assign) ||
        function () {
          n =
            Object.assign ||
            function (t) {
              for (var e, r = 1, i = arguments.length; r < i; r++) {
                e = arguments[r];
                for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) t[n] = e[n];
              }
              return t;
            };
          return n.apply(this, arguments);
        };
      var o =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, e, r, i) {
              if (i === undefined) i = r;
              var n = Object.getOwnPropertyDescriptor(e, r);
              if (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) {
                n = {
                  enumerable: true,
                  get: function () {
                    return e[r];
                  },
                };
              }
              Object.defineProperty(t, i, n);
            }
          : function (t, e, r, i) {
              if (i === undefined) i = r;
              t[i] = e[r];
            });
      var a =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (t, e) {
              Object.defineProperty(t, "default", { enumerable: true, value: e });
            }
          : function (t, e) {
              t["default"] = e;
            });
      var s =
        (this && this.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (t != null) for (var r in t) if (r !== "default" && Object.prototype.hasOwnProperty.call(t, r)) o(e, t, r);
          a(e, t);
          return e;
        };
      var l =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTML = void 0;
      var h = r(90247);
      var c = r(24219);
      var u = r(65008);
      var f = r(92931);
      var p = r(59230);
      var d = s(r(77130));
      var y = r(33353);
      var v = (function (t) {
        i(e, t);
        function e(e) {
          if (e === void 0) {
            e = null;
          }
          var r = t.call(this, e, u.CHTMLWrapperFactory, p.TeXFont) || this;
          r.chtmlStyles = null;
          r.font.adaptiveCSS(r.options.adaptiveCSS);
          r.wrapperUsage = new f.Usage();
          return r;
        }
        e.prototype.escaped = function (t, e) {
          this.setDocument(e);
          return this.html("span", {}, [this.text(t.math)]);
        };
        e.prototype.styleSheet = function (r) {
          if (this.chtmlStyles) {
            if (this.options.adaptiveCSS) {
              var i = new c.CssStyles();
              this.addWrapperStyles(i);
              this.updateFontStyles(i);
              this.adaptor.insertRules(this.chtmlStyles, i.getStyleRules());
            }
            return this.chtmlStyles;
          }
          var n = (this.chtmlStyles = t.prototype.styleSheet.call(this, r));
          this.adaptor.setAttribute(n, "id", e.STYLESHEETID);
          this.wrapperUsage.update();
          return n;
        };
        e.prototype.updateFontStyles = function (t) {
          t.addStyles(this.font.updateStyles({}));
        };
        e.prototype.addWrapperStyles = function (e) {
          var r, i;
          if (!this.options.adaptiveCSS) {
            t.prototype.addWrapperStyles.call(this, e);
            return;
          }
          try {
            for (var n = l(this.wrapperUsage.update()), o = n.next(); !o.done; o = n.next()) {
              var a = o.value;
              var s = this.factory.getNodeClass(a);
              s && this.addClassStyles(s, e);
            }
          } catch (h) {
            r = { error: h };
          } finally {
            try {
              if (o && !o.done && (i = n.return)) i.call(n);
            } finally {
              if (r) throw r.error;
            }
          }
        };
        e.prototype.addClassStyles = function (e, r) {
          var i;
          var n = e;
          if (n.autoStyle && n.kind !== "unknown") {
            r.addStyles(((i = {}), (i["mjx-" + n.kind] = { display: "inline-block", "text-align": "left" }), i));
          }
          this.wrapperUsage.add(n.kind);
          t.prototype.addClassStyles.call(this, e, r);
        };
        e.prototype.processMath = function (t, e) {
          this.factory.wrap(t).toCHTML(e);
        };
        e.prototype.clearCache = function () {
          this.cssStyles.clear();
          this.font.clearCache();
          this.wrapperUsage.clear();
          this.chtmlStyles = null;
        };
        e.prototype.reset = function () {
          this.clearCache();
        };
        e.prototype.unknownText = function (t, e, r) {
          if (r === void 0) {
            r = null;
          }
          var i = {};
          var n = 100 / this.math.metrics.scale;
          if (n !== 100) {
            i["font-size"] = this.fixed(n, 1) + "%";
            i.padding = d.em(75 / n) + " 0 " + d.em(20 / n) + " 0";
          }
          if (e !== "-explicitFont") {
            var o = (0, y.unicodeChars)(t);
            if (o.length !== 1 || o[0] < 119808 || o[0] > 120831) {
              this.cssFontStyles(this.font.getCssFont(e), i);
            }
          }
          if (r !== null) {
            var a = this.math.metrics;
            i.width = Math.round(r * a.em * a.scale) + "px";
          }
          return this.html("mjx-utext", { variant: e, style: i }, [this.text(t)]);
        };
        e.prototype.measureTextNode = function (t) {
          var e = this.adaptor;
          var r = e.clone(t);
          e.setStyle(r, "font-family", e.getStyle(r, "font-family").replace(/MJXZERO, /g, ""));
          var i = { position: "absolute", "white-space": "nowrap" };
          var n = this.html("mjx-measure-text", { style: i }, [r]);
          e.append(e.parent(this.math.start.node), this.container);
          e.append(this.container, n);
          var o = e.nodeSize(r, this.math.metrics.em)[0] / this.math.metrics.scale;
          e.remove(this.container);
          e.remove(n);
          return { w: o, h: 0.75, d: 0.2 };
        };
        e.NAME = "CHTML";
        e.OPTIONS = n(n({}, h.CommonOutputJax.OPTIONS), { adaptiveCSS: true, matchFontHeight: true });
        e.commonStyles = {
          'mjx-container[jax="CHTML"]': { "line-height": 0 },
          'mjx-container [space="1"]': { "margin-left": ".111em" },
          'mjx-container [space="2"]': { "margin-left": ".167em" },
          'mjx-container [space="3"]': { "margin-left": ".222em" },
          'mjx-container [space="4"]': { "margin-left": ".278em" },
          'mjx-container [space="5"]': { "margin-left": ".333em" },
          'mjx-container [rspace="1"]': { "margin-right": ".111em" },
          'mjx-container [rspace="2"]': { "margin-right": ".167em" },
          'mjx-container [rspace="3"]': { "margin-right": ".222em" },
          'mjx-container [rspace="4"]': { "margin-right": ".278em" },
          'mjx-container [rspace="5"]': { "margin-right": ".333em" },
          'mjx-container [size="s"]': { "font-size": "70.7%" },
          'mjx-container [size="ss"]': { "font-size": "50%" },
          'mjx-container [size="Tn"]': { "font-size": "60%" },
          'mjx-container [size="sm"]': { "font-size": "85%" },
          'mjx-container [size="lg"]': { "font-size": "120%" },
          'mjx-container [size="Lg"]': { "font-size": "144%" },
          'mjx-container [size="LG"]': { "font-size": "173%" },
          'mjx-container [size="hg"]': { "font-size": "207%" },
          'mjx-container [size="HG"]': { "font-size": "249%" },
          'mjx-container [width="full"]': { width: "100%" },
          "mjx-box": { display: "inline-block" },
          "mjx-block": { display: "block" },
          "mjx-itable": { display: "inline-table" },
          "mjx-row": { display: "table-row" },
          "mjx-row > *": { display: "table-cell" },
          "mjx-mtext": { display: "inline-block" },
          "mjx-mstyle": { display: "inline-block" },
          "mjx-merror": { display: "inline-block", color: "red", "background-color": "yellow" },
          "mjx-mphantom": { visibility: "hidden" },
          "_::-webkit-full-page-media, _:future, :root mjx-container": { "will-change": "opacity" },
        };
        e.STYLESHEETID = "MJX-CHTML-styles";
        return e;
      })(h.CommonOutputJax);
      e.CHTML = v;
    },
    55043: function (t, e, r) {
      var i =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, e, r, i) {
              if (i === undefined) i = r;
              var n = Object.getOwnPropertyDescriptor(e, r);
              if (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) {
                n = {
                  enumerable: true,
                  get: function () {
                    return e[r];
                  },
                };
              }
              Object.defineProperty(t, i, n);
            }
          : function (t, e, r, i) {
              if (i === undefined) i = r;
              t[i] = e[r];
            });
      var n =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (t, e) {
              Object.defineProperty(t, "default", { enumerable: true, value: e });
            }
          : function (t, e) {
              t["default"] = e;
            });
      var o =
        (this && this.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (t != null) for (var r in t) if (r !== "default" && Object.prototype.hasOwnProperty.call(t, r)) i(e, t, r);
          n(e, t);
          return e;
        };
      var a =
        (this && this.__exportStar) ||
        function (t, e) {
          for (var r in t) if (r !== "default" && !Object.prototype.hasOwnProperty.call(e, r)) i(e, t, r);
        };
      var s =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.Arrow = e.DiagonalArrow = e.DiagonalStrike = e.Border2 = e.Border = e.RenderElement = void 0;
      var l = o(r(77988));
      a(r(77988), e);
      var h = function (t, e) {
        if (e === void 0) {
          e = "";
        }
        return function (r, i) {
          var n = r.adjustBorder(r.html("mjx-" + t));
          if (e) {
            var o = r.getOffset(e);
            if (r.thickness !== l.THICKNESS || o) {
              var a = "translate".concat(e, "(").concat(r.em(r.thickness / 2 - o), ")");
              r.adaptor.setStyle(n, "transform", a);
            }
          }
          r.adaptor.append(r.chtml, n);
        };
      };
      e.RenderElement = h;
      var c = function (t) {
        return l.CommonBorder(function (e, r) {
          e.adaptor.setStyle(r, "border-" + t, e.em(e.thickness) + " solid");
        })(t);
      };
      e.Border = c;
      var u = function (t, e, r) {
        return l.CommonBorder2(function (t, i) {
          var n = t.em(t.thickness) + " solid";
          t.adaptor.setStyle(i, "border-" + e, n);
          t.adaptor.setStyle(i, "border-" + r, n);
        })(t, e, r);
      };
      e.Border2 = u;
      var f = function (t, e) {
        return l.CommonDiagonalStrike(function (t) {
          return function (r, i) {
            var n = r.getBBox(),
              o = n.w,
              a = n.h,
              l = n.d;
            var h = s(r.getArgMod(o, a + l), 2),
              c = h[0],
              u = h[1];
            var f = (e * r.thickness) / 2;
            var p = r.adjustBorder(r.html(t, { style: { width: r.em(u), transform: "rotate(" + r.fixed(-e * c) + "rad) translateY(" + f + "em)" } }));
            r.adaptor.append(r.chtml, p);
          };
        })(t);
      };
      e.DiagonalStrike = f;
      var p = function (t) {
        return l.CommonDiagonalArrow(function (t, e) {
          t.adaptor.append(t.chtml, e);
        })(t);
      };
      e.DiagonalArrow = p;
      var d = function (t) {
        return l.CommonArrow(function (t, e) {
          t.adaptor.append(t.chtml, e);
        })(t);
      };
      e.Arrow = d;
    },
    81129: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, e, r, i) {
              if (i === undefined) i = r;
              var n = Object.getOwnPropertyDescriptor(e, r);
              if (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) {
                n = {
                  enumerable: true,
                  get: function () {
                    return e[r];
                  },
                };
              }
              Object.defineProperty(t, i, n);
            }
          : function (t, e, r, i) {
              if (i === undefined) i = r;
              t[i] = e[r];
            });
      var o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (t, e) {
              Object.defineProperty(t, "default", { enumerable: true, value: e });
            }
          : function (t, e) {
              t["default"] = e;
            });
      var a =
        (this && this.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (t != null) for (var r in t) if (r !== "default" && Object.prototype.hasOwnProperty.call(t, r)) n(e, t, r);
          o(e, t);
          return e;
        };
      var s =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var l =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var h;
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLWrapper = e.SPACE = e.FONTSIZE = void 0;
      var c = a(r(77130));
      var u = r(56757);
      var f = r(83292);
      e.FONTSIZE = {
        "70.7%": "s",
        "70%": "s",
        "50%": "ss",
        "60%": "Tn",
        "85%": "sm",
        "120%": "lg",
        "144%": "Lg",
        "173%": "LG",
        "207%": "hg",
        "249%": "HG",
      };
      e.SPACE =
        ((h = {}), (h[c.em(2 / 18)] = "1"), (h[c.em(3 / 18)] = "2"), (h[c.em(4 / 18)] = "3"), (h[c.em(5 / 18)] = "4"), (h[c.em(6 / 18)] = "5"), h);
      var p = (function (t) {
        i(r, t);
        function r() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.chtml = null;
          return e;
        }
        r.prototype.toCHTML = function (t) {
          var e, r;
          var i = this.standardCHTMLnode(t);
          try {
            for (var n = s(this.childNodes), o = n.next(); !o.done; o = n.next()) {
              var a = o.value;
              a.toCHTML(i);
            }
          } catch (l) {
            e = { error: l };
          } finally {
            try {
              if (o && !o.done && (r = n.return)) r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
        };
        r.prototype.standardCHTMLnode = function (t) {
          this.markUsed();
          var e = this.createCHTMLnode(t);
          this.handleStyles();
          this.handleVariant();
          this.handleScale();
          this.handleColor();
          this.handleSpace();
          this.handleAttributes();
          this.handlePWidth();
          return e;
        };
        r.prototype.markUsed = function () {
          this.jax.wrapperUsage.add(this.kind);
        };
        r.prototype.createCHTMLnode = function (t) {
          var e = this.node.attributes.get("href");
          if (e) {
            t = this.adaptor.append(t, this.html("a", { href: e }));
          }
          this.chtml = this.adaptor.append(t, this.html("mjx-" + this.node.kind));
          return this.chtml;
        };
        r.prototype.handleStyles = function () {
          if (!this.styles) return;
          var t = this.styles.cssText;
          if (t) {
            this.adaptor.setAttribute(this.chtml, "style", t);
            var e = this.styles.get("font-family");
            if (e) {
              this.adaptor.setStyle(this.chtml, "font-family", "MJXZERO, " + e);
            }
          }
        };
        r.prototype.handleVariant = function () {
          if (this.node.isToken && this.variant !== "-explicitFont") {
            this.adaptor.setAttribute(this.chtml, "class", (this.font.getVariant(this.variant) || this.font.getVariant("normal")).classes);
          }
        };
        r.prototype.handleScale = function () {
          this.setScale(this.chtml, this.bbox.rscale);
        };
        r.prototype.setScale = function (t, r) {
          var i = Math.abs(r - 1) < 0.001 ? 1 : r;
          if (t && i !== 1) {
            var n = this.percent(i);
            if (e.FONTSIZE[n]) {
              this.adaptor.setAttribute(t, "size", e.FONTSIZE[n]);
            } else {
              this.adaptor.setStyle(t, "fontSize", n);
            }
          }
          return t;
        };
        r.prototype.handleSpace = function () {
          var t, r;
          try {
            for (
              var i = s([
                  [this.bbox.L, "space", "marginLeft"],
                  [this.bbox.R, "rspace", "marginRight"],
                ]),
                n = i.next();
              !n.done;
              n = i.next()
            ) {
              var o = n.value;
              var a = l(o, 3),
                h = a[0],
                c = a[1],
                u = a[2];
              if (h) {
                var f = this.em(h);
                if (e.SPACE[f]) {
                  this.adaptor.setAttribute(this.chtml, c, e.SPACE[f]);
                } else {
                  this.adaptor.setStyle(this.chtml, u, f);
                }
              }
            }
          } catch (p) {
            t = { error: p };
          } finally {
            try {
              if (n && !n.done && (r = i.return)) r.call(i);
            } finally {
              if (t) throw t.error;
            }
          }
        };
        r.prototype.handleColor = function () {
          var t = this.node.attributes;
          var e = t.getExplicit("mathcolor");
          var r = t.getExplicit("color");
          var i = t.getExplicit("mathbackground");
          var n = t.getExplicit("background");
          if (e || r) {
            this.adaptor.setStyle(this.chtml, "color", e || r);
          }
          if (i || n) {
            this.adaptor.setStyle(this.chtml, "backgroundColor", i || n);
          }
        };
        r.prototype.handleAttributes = function () {
          var t, e, i, n;
          var o = this.node.attributes;
          var a = o.getAllDefaults();
          var l = r.skipAttributes;
          try {
            for (var h = s(o.getExplicitNames()), c = h.next(); !c.done; c = h.next()) {
              var u = c.value;
              if (l[u] === false || (!(u in a) && !l[u] && !this.adaptor.hasAttribute(this.chtml, u))) {
                this.adaptor.setAttribute(this.chtml, u, o.getExplicit(u));
              }
            }
          } catch (v) {
            t = { error: v };
          } finally {
            try {
              if (c && !c.done && (e = h.return)) e.call(h);
            } finally {
              if (t) throw t.error;
            }
          }
          if (o.get("class")) {
            var f = o.get("class").trim().split(/ +/);
            try {
              for (var p = s(f), d = p.next(); !d.done; d = p.next()) {
                var y = d.value;
                this.adaptor.addClass(this.chtml, y);
              }
            } catch (m) {
              i = { error: m };
            } finally {
              try {
                if (d && !d.done && (n = p.return)) n.call(p);
              } finally {
                if (i) throw i.error;
              }
            }
          }
        };
        r.prototype.handlePWidth = function () {
          if (this.bbox.pwidth) {
            if (this.bbox.pwidth === f.BBox.fullWidth) {
              this.adaptor.setAttribute(this.chtml, "width", "full");
            } else {
              this.adaptor.setStyle(this.chtml, "width", this.bbox.pwidth);
            }
          }
        };
        r.prototype.setIndent = function (t, e, r) {
          var i = this.adaptor;
          if (e === "center" || e === "left") {
            var n = this.getBBox().L;
            i.setStyle(t, "margin-left", this.em(r + n));
          }
          if (e === "center" || e === "right") {
            var o = this.getBBox().R;
            i.setStyle(t, "margin-right", this.em(-r + o));
          }
        };
        r.prototype.drawBBox = function () {
          var t = this.getBBox(),
            e = t.w,
            r = t.h,
            i = t.d,
            n = t.R;
          var o = this.html("mjx-box", { style: { opacity: 0.25, "margin-left": this.em(-e - n) } }, [
            this.html("mjx-box", { style: { height: this.em(r), width: this.em(e), "background-color": "red" } }),
            this.html("mjx-box", {
              style: {
                height: this.em(i),
                width: this.em(e),
                "margin-left": this.em(-e),
                "vertical-align": this.em(-i),
                "background-color": "green",
              },
            }),
          ]);
          var a = this.chtml || this.parent.chtml;
          var s = this.adaptor.getAttribute(a, "size");
          if (s) {
            this.adaptor.setAttribute(o, "size", s);
          }
          var l = this.adaptor.getStyle(a, "fontSize");
          if (l) {
            this.adaptor.setStyle(o, "fontSize", l);
          }
          this.adaptor.append(this.adaptor.parent(a), o);
          this.adaptor.setStyle(a, "backgroundColor", "#FFEE00");
        };
        r.prototype.html = function (t, e, r) {
          if (e === void 0) {
            e = {};
          }
          if (r === void 0) {
            r = [];
          }
          return this.jax.html(t, e, r);
        };
        r.prototype.text = function (t) {
          return this.jax.text(t);
        };
        r.prototype.char = function (t) {
          return this.font.charSelector(t).substr(1);
        };
        r.kind = "unknown";
        r.autoStyle = true;
        return r;
      })(u.CommonWrapper);
      e.CHTMLWrapper = p;
    },
    65008: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLWrapperFactory = void 0;
      var n = r(49557);
      var o = r(2166);
      var a = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.defaultNodes = o.CHTMLWrappers;
        return e;
      })(n.CommonWrapperFactory);
      e.CHTMLWrapperFactory = a;
    },
    2166: (t, e, r) => {
      var i;
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLWrappers = void 0;
      var n = r(81129);
      var o = r(5229);
      var a = r(91307);
      var s = r(53241);
      var l = r(61422);
      var h = r(16851);
      var c = r(90659);
      var u = r(48929);
      var f = r(74926);
      var p = r(49469);
      var d = r(86255);
      var y = r(7233);
      var v = r(72929);
      var m = r(10128);
      var b = r(32829);
      var g = r(37717);
      var x = r(94987);
      var w = r(7331);
      var _ = r(48582);
      var M = r(93594);
      var j = r(82132);
      var C = r(64677);
      var S = r(47354);
      var O = r(8044);
      var T = r(51534);
      var B = r(12853);
      e.CHTMLWrappers =
        ((i = {}),
        (i[o.CHTMLmath.kind] = o.CHTMLmath),
        (i[d.CHTMLmrow.kind] = d.CHTMLmrow),
        (i[d.CHTMLinferredMrow.kind] = d.CHTMLinferredMrow),
        (i[a.CHTMLmi.kind] = a.CHTMLmi),
        (i[s.CHTMLmo.kind] = s.CHTMLmo),
        (i[l.CHTMLmn.kind] = l.CHTMLmn),
        (i[h.CHTMLms.kind] = h.CHTMLms),
        (i[c.CHTMLmtext.kind] = c.CHTMLmtext),
        (i[u.CHTMLmspace.kind] = u.CHTMLmspace),
        (i[f.CHTMLmpadded.kind] = f.CHTMLmpadded),
        (i[p.CHTMLmenclose.kind] = p.CHTMLmenclose),
        (i[v.CHTMLmfrac.kind] = v.CHTMLmfrac),
        (i[m.CHTMLmsqrt.kind] = m.CHTMLmsqrt),
        (i[b.CHTMLmroot.kind] = b.CHTMLmroot),
        (i[g.CHTMLmsub.kind] = g.CHTMLmsub),
        (i[g.CHTMLmsup.kind] = g.CHTMLmsup),
        (i[g.CHTMLmsubsup.kind] = g.CHTMLmsubsup),
        (i[x.CHTMLmunder.kind] = x.CHTMLmunder),
        (i[x.CHTMLmover.kind] = x.CHTMLmover),
        (i[x.CHTMLmunderover.kind] = x.CHTMLmunderover),
        (i[w.CHTMLmmultiscripts.kind] = w.CHTMLmmultiscripts),
        (i[y.CHTMLmfenced.kind] = y.CHTMLmfenced),
        (i[_.CHTMLmtable.kind] = _.CHTMLmtable),
        (i[M.CHTMLmtr.kind] = M.CHTMLmtr),
        (i[M.CHTMLmlabeledtr.kind] = M.CHTMLmlabeledtr),
        (i[j.CHTMLmtd.kind] = j.CHTMLmtd),
        (i[C.CHTMLmaction.kind] = C.CHTMLmaction),
        (i[S.CHTMLmglyph.kind] = S.CHTMLmglyph),
        (i[O.CHTMLsemantics.kind] = O.CHTMLsemantics),
        (i[O.CHTMLannotation.kind] = O.CHTMLannotation),
        (i[O.CHTMLannotationXML.kind] = O.CHTMLannotationXML),
        (i[O.CHTMLxml.kind] = O.CHTMLxml),
        (i[T.CHTMLTeXAtom.kind] = T.CHTMLTeXAtom),
        (i[B.CHTMLTextNode.kind] = B.CHTMLTextNode),
        (i[n.CHTMLWrapper.kind] = n.CHTMLWrapper),
        i);
    },
    51534: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLTeXAtom = void 0;
      var n = r(81129);
      var o = r(28324);
      var a = r(66846);
      var s = r(18426);
      var l = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (e) {
          t.prototype.toCHTML.call(this, e);
          this.adaptor.setAttribute(this.chtml, "texclass", s.TEXCLASSNAMES[this.node.texClass]);
          if (this.node.texClass === s.TEXCLASS.VCENTER) {
            var r = this.childNodes[0].getBBox();
            var i = r.h,
              n = r.d;
            var o = this.font.params.axis_height;
            var a = (i + n) / 2 + o - i;
            this.adaptor.setStyle(this.chtml, "verticalAlign", this.em(a));
          }
        };
        e.kind = a.TeXAtom.prototype.kind;
        return e;
      })((0, o.CommonTeXAtomMixin)(n.CHTMLWrapper));
      e.CHTMLTeXAtom = l;
    },
    12853: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLTextNode = void 0;
      var o = r(18426);
      var a = r(81129);
      var s = r(2169);
      var l = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (t) {
          var e, r;
          this.markUsed();
          var i = this.adaptor;
          var o = this.parent.variant;
          var a = this.node.getText();
          if (a.length === 0) return;
          if (o === "-explicitFont") {
            i.append(t, this.jax.unknownText(a, o, this.getBBox().w));
          } else {
            var s = this.remappedText(a, o);
            try {
              for (var l = n(s), h = l.next(); !h.done; h = l.next()) {
                var c = h.value;
                var u = this.getVariantChar(o, c)[3];
                var f = u.f ? " TEX-" + u.f : "";
                var p = u.unknown ? this.jax.unknownText(String.fromCodePoint(c), o) : this.html("mjx-c", { class: this.char(c) + f });
                i.append(t, p);
                !u.unknown && this.font.charUsage.add([o, c]);
              }
            } catch (d) {
              e = { error: d };
            } finally {
              try {
                if (h && !h.done && (r = l.return)) r.call(l);
              } finally {
                if (e) throw e.error;
              }
            }
          }
        };
        e.kind = o.TextNode.prototype.kind;
        e.autoStyle = false;
        e.styles = { "mjx-c": { display: "inline-block" }, "mjx-utext": { display: "inline-block", padding: ".75em 0 .2em 0" } };
        return e;
      })((0, s.CommonTextNodeMixin)(a.CHTMLWrapper));
      e.CHTMLTextNode = l;
    },
    64677: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmaction = void 0;
      var n = r(81129);
      var o = r(86561);
      var a = r(86561);
      var s = r(79024);
      var l = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (t) {
          var e = this.standardCHTMLnode(t);
          var r = this.selected;
          r.toCHTML(e);
          this.action(this, this.data);
        };
        e.prototype.setEventHandler = function (t, e) {
          this.chtml.addEventListener(t, e);
        };
        e.kind = s.MmlMaction.prototype.kind;
        e.styles = {
          "mjx-maction": { position: "relative" },
          "mjx-maction > mjx-tool": { display: "none", position: "absolute", bottom: 0, right: 0, width: 0, height: 0, "z-index": 500 },
          "mjx-tool > mjx-tip": {
            display: "inline-block",
            padding: ".2em",
            border: "1px solid #888",
            "font-size": "70%",
            "background-color": "#F8F8F8",
            color: "black",
            "box-shadow": "2px 2px 5px #AAAAAA",
          },
          "mjx-maction[toggle]": { cursor: "pointer" },
          "mjx-status": {
            display: "block",
            position: "fixed",
            left: "1em",
            bottom: "1em",
            "min-width": "25%",
            padding: ".2em .4em",
            border: "1px solid #888",
            "font-size": "90%",
            "background-color": "#F8F8F8",
            color: "black",
          },
        };
        e.actions = new Map([
          [
            "toggle",
            [
              function (t, e) {
                t.adaptor.setAttribute(t.chtml, "toggle", t.node.attributes.get("selection"));
                var r = t.factory.jax.math;
                var i = t.factory.jax.document;
                var n = t.node;
                t.setEventHandler("click", function (t) {
                  if (!r.end.node) {
                    r.start.node = r.end.node = r.typesetRoot;
                    r.start.n = r.end.n = 0;
                  }
                  n.nextToggleSelection();
                  r.rerender(i);
                  t.stopPropagation();
                });
              },
              {},
            ],
          ],
          [
            "tooltip",
            [
              function (t, e) {
                var r = t.childNodes[1];
                if (!r) return;
                if (r.node.isKind("mtext")) {
                  var i = r.node.getText();
                  t.adaptor.setAttribute(t.chtml, "title", i);
                } else {
                  var n = t.adaptor;
                  var o = n.append(t.chtml, t.html("mjx-tool", { style: { bottom: t.em(-t.dy), right: t.em(-t.dx) } }, [t.html("mjx-tip")]));
                  r.toCHTML(n.firstChild(o));
                  t.setEventHandler("mouseover", function (r) {
                    e.stopTimers(t, e);
                    var i = setTimeout(function () {
                      return n.setStyle(o, "display", "block");
                    }, e.postDelay);
                    e.hoverTimer.set(t, i);
                    r.stopPropagation();
                  });
                  t.setEventHandler("mouseout", function (r) {
                    e.stopTimers(t, e);
                    var i = setTimeout(function () {
                      return n.setStyle(o, "display", "");
                    }, e.clearDelay);
                    e.clearTimer.set(t, i);
                    r.stopPropagation();
                  });
                }
              },
              a.TooltipData,
            ],
          ],
          [
            "statusline",
            [
              function (t, e) {
                var r = t.childNodes[1];
                if (!r) return;
                if (r.node.isKind("mtext")) {
                  var i = t.adaptor;
                  var n = r.node.getText();
                  i.setAttribute(t.chtml, "statusline", n);
                  t.setEventHandler("mouseover", function (r) {
                    if (e.status === null) {
                      var o = i.body(i.document);
                      e.status = i.append(o, t.html("mjx-status", {}, [t.text(n)]));
                    }
                    r.stopPropagation();
                  });
                  t.setEventHandler("mouseout", function (t) {
                    if (e.status) {
                      i.remove(e.status);
                      e.status = null;
                    }
                    t.stopPropagation();
                  });
                }
              },
              { status: null },
            ],
          ],
        ]);
        return e;
      })((0, o.CommonMactionMixin)(n.CHTMLWrapper));
      e.CHTMLmaction = l;
    },
    5229: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmath = void 0;
      var o = r(81129);
      var a = r(68467);
      var s = r(27225);
      var l = r(83292);
      var h = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (e) {
          t.prototype.toCHTML.call(this, e);
          var r = this.chtml;
          var i = this.adaptor;
          var n = this.node.attributes.get("display") === "block";
          if (n) {
            i.setAttribute(r, "display", "true");
            i.setAttribute(e, "display", "true");
            this.handleDisplay(e);
          } else {
            this.handleInline(e);
          }
          i.addClass(r, "MJX-TEX");
        };
        e.prototype.handleDisplay = function (t) {
          var e = this.adaptor;
          var r = n(this.getAlignShift(), 2),
            i = r[0],
            o = r[1];
          if (i !== "center") {
            e.setAttribute(t, "justify", i);
          }
          if (this.bbox.pwidth === l.BBox.fullWidth) {
            e.setAttribute(t, "width", "full");
            if (this.jax.table) {
              var a = this.jax.table.getOuterBBox(),
                s = a.L,
                h = a.w,
                c = a.R;
              if (i === "right") {
                c = Math.max(c || -o, -o);
              } else if (i === "left") {
                s = Math.max(s || o, o);
              } else if (i === "center") {
                h += 2 * Math.abs(o);
              }
              var u = this.em(Math.max(0, s + h + c));
              e.setStyle(t, "min-width", u);
              e.setStyle(this.jax.table.chtml, "min-width", u);
            }
          } else {
            this.setIndent(this.chtml, i, o);
          }
        };
        e.prototype.handleInline = function (t) {
          var e = this.adaptor;
          var r = e.getStyle(this.chtml, "margin-right");
          if (r) {
            e.setStyle(this.chtml, "margin-right", "");
            e.setStyle(t, "margin-right", r);
            e.setStyle(t, "width", "0");
          }
        };
        e.prototype.setChildPWidths = function (e, r, i) {
          if (r === void 0) {
            r = null;
          }
          if (i === void 0) {
            i = true;
          }
          return this.parent ? t.prototype.setChildPWidths.call(this, e, r, i) : false;
        };
        e.kind = s.MmlMath.prototype.kind;
        e.styles = {
          "mjx-math": {
            "line-height": 0,
            "text-align": "left",
            "text-indent": 0,
            "font-style": "normal",
            "font-weight": "normal",
            "font-size": "100%",
            "font-size-adjust": "none",
            "letter-spacing": "normal",
            "border-collapse": "collapse",
            "word-wrap": "normal",
            "word-spacing": "normal",
            "white-space": "nowrap",
            direction: "ltr",
            padding: "1px 0",
          },
          'mjx-container[jax="CHTML"][display="true"]': { display: "block", "text-align": "center", margin: "1em 0" },
          'mjx-container[jax="CHTML"][display="true"][width="full"]': { display: "flex" },
          'mjx-container[jax="CHTML"][display="true"] mjx-math': { padding: 0 },
          'mjx-container[jax="CHTML"][justify="left"]': { "text-align": "left" },
          'mjx-container[jax="CHTML"][justify="right"]': { "text-align": "right" },
        };
        return e;
      })((0, a.CommonMathMixin)(o.CHTMLWrapper));
      e.CHTMLmath = h;
    },
    49469: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, e, r, i) {
              if (i === undefined) i = r;
              var n = Object.getOwnPropertyDescriptor(e, r);
              if (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) {
                n = {
                  enumerable: true,
                  get: function () {
                    return e[r];
                  },
                };
              }
              Object.defineProperty(t, i, n);
            }
          : function (t, e, r, i) {
              if (i === undefined) i = r;
              t[i] = e[r];
            });
      var o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (t, e) {
              Object.defineProperty(t, "default", { enumerable: true, value: e });
            }
          : function (t, e) {
              t["default"] = e;
            });
      var a =
        (this && this.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (t != null) for (var r in t) if (r !== "default" && Object.prototype.hasOwnProperty.call(t, r)) n(e, t, r);
          o(e, t);
          return e;
        };
      var s =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var l =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmenclose = void 0;
      var h = r(81129);
      var c = r(32306);
      var u = a(r(55043));
      var f = r(22599);
      var p = r(77130);
      function d(t, e) {
        return Math.atan2(t, e)
          .toFixed(3)
          .replace(/\.?0+$/, "");
      }
      var y = d(u.ARROWDX, u.ARROWY);
      var v = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (t) {
          var e, r, i, n;
          var o = this.adaptor;
          var a = this.standardCHTMLnode(t);
          var l = o.append(a, this.html("mjx-box"));
          if (this.renderChild) {
            this.renderChild(this, l);
          } else {
            this.childNodes[0].toCHTML(l);
          }
          try {
            for (var h = s(Object.keys(this.notations)), c = h.next(); !c.done; c = h.next()) {
              var f = c.value;
              var p = this.notations[f];
              !p.renderChild && p.renderer(this, l);
            }
          } catch (g) {
            e = { error: g };
          } finally {
            try {
              if (c && !c.done && (r = h.return)) r.call(h);
            } finally {
              if (e) throw e.error;
            }
          }
          var d = this.getPadding();
          try {
            for (var y = s(u.sideNames), v = y.next(); !v.done; v = y.next()) {
              var m = v.value;
              var b = u.sideIndex[m];
              d[b] > 0 && o.setStyle(l, "padding-" + m, this.em(d[b]));
            }
          } catch (x) {
            i = { error: x };
          } finally {
            try {
              if (v && !v.done && (n = y.return)) n.call(y);
            } finally {
              if (i) throw i.error;
            }
          }
        };
        e.prototype.arrow = function (t, e, r, i, n) {
          if (i === void 0) {
            i = "";
          }
          if (n === void 0) {
            n = 0;
          }
          var o = this.getBBox().w;
          var a = { width: this.em(t) };
          if (o !== t) {
            a.left = this.em((o - t) / 2);
          }
          if (e) {
            a.transform = "rotate(" + this.fixed(e) + "rad)";
          }
          var s = this.html("mjx-arrow", { style: a }, [this.html("mjx-aline"), this.html("mjx-rthead"), this.html("mjx-rbhead")]);
          if (r) {
            this.adaptor.append(s, this.html("mjx-lthead"));
            this.adaptor.append(s, this.html("mjx-lbhead"));
            this.adaptor.setAttribute(s, "double", "true");
          }
          this.adjustArrow(s, r);
          this.moveArrow(s, i, n);
          return s;
        };
        e.prototype.adjustArrow = function (t, e) {
          var r = this;
          var i = this.thickness;
          var n = this.arrowhead;
          if (n.x === u.ARROWX && n.y === u.ARROWY && n.dx === u.ARROWDX && i === u.THICKNESS) return;
          var o = l(
              [i * n.x, i * n.y].map(function (t) {
                return r.em(t);
              }),
              2
            ),
            a = o[0],
            s = o[1];
          var h = d(n.dx, n.y);
          var c = l(this.adaptor.childNodes(t), 5),
            f = c[0],
            p = c[1],
            y = c[2],
            v = c[3],
            m = c[4];
          this.adjustHead(p, [s, "0", "1px", a], h);
          this.adjustHead(y, ["1px", "0", s, a], "-" + h);
          this.adjustHead(v, [s, a, "1px", "0"], "-" + h);
          this.adjustHead(m, ["1px", a, s, "0"], h);
          this.adjustLine(f, i, n.x, e);
        };
        e.prototype.adjustHead = function (t, e, r) {
          if (t) {
            this.adaptor.setStyle(t, "border-width", e.join(" "));
            this.adaptor.setStyle(t, "transform", "skewX(" + r + "rad)");
          }
        };
        e.prototype.adjustLine = function (t, e, r, i) {
          this.adaptor.setStyle(t, "borderTop", this.em(e) + " solid");
          this.adaptor.setStyle(t, "top", this.em(-e / 2));
          this.adaptor.setStyle(t, "right", this.em(e * (r - 1)));
          if (i) {
            this.adaptor.setStyle(t, "left", this.em(e * (r - 1)));
          }
        };
        e.prototype.moveArrow = function (t, e, r) {
          if (!r) return;
          var i = this.adaptor.getStyle(t, "transform");
          this.adaptor.setStyle(
            t,
            "transform",
            "translate"
              .concat(e, "(")
              .concat(this.em(-r), ")")
              .concat(i ? " " + i : "")
          );
        };
        e.prototype.adjustBorder = function (t) {
          if (this.thickness !== u.THICKNESS) {
            this.adaptor.setStyle(t, "borderWidth", this.em(this.thickness));
          }
          return t;
        };
        e.prototype.adjustThickness = function (t) {
          if (this.thickness !== u.THICKNESS) {
            this.adaptor.setStyle(t, "strokeWidth", this.fixed(this.thickness));
          }
          return t;
        };
        e.prototype.fixed = function (t, e) {
          if (e === void 0) {
            e = 3;
          }
          if (Math.abs(t) < 6e-4) {
            return "0";
          }
          return t.toFixed(e).replace(/\.?0+$/, "");
        };
        e.prototype.em = function (e) {
          return t.prototype.em.call(this, e);
        };
        e.kind = f.MmlMenclose.prototype.kind;
        e.styles = {
          "mjx-menclose": { position: "relative" },
          "mjx-menclose > mjx-dstrike": {
            display: "inline-block",
            left: 0,
            top: 0,
            position: "absolute",
            "border-top": u.SOLID,
            "transform-origin": "top left",
          },
          "mjx-menclose > mjx-ustrike": {
            display: "inline-block",
            left: 0,
            bottom: 0,
            position: "absolute",
            "border-top": u.SOLID,
            "transform-origin": "bottom left",
          },
          "mjx-menclose > mjx-hstrike": {
            "border-top": u.SOLID,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: "50%",
            transform: "translateY(" + (0, p.em)(u.THICKNESS / 2) + ")",
          },
          "mjx-menclose > mjx-vstrike": {
            "border-left": u.SOLID,
            position: "absolute",
            top: 0,
            bottom: 0,
            right: "50%",
            transform: "translateX(" + (0, p.em)(u.THICKNESS / 2) + ")",
          },
          "mjx-menclose > mjx-rbox": {
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            border: u.SOLID,
            "border-radius": (0, p.em)(u.THICKNESS + u.PADDING),
          },
          "mjx-menclose > mjx-cbox": { position: "absolute", top: 0, bottom: 0, right: 0, left: 0, border: u.SOLID, "border-radius": "50%" },
          "mjx-menclose > mjx-arrow": { position: "absolute", left: 0, bottom: "50%", height: 0, width: 0 },
          "mjx-menclose > mjx-arrow > *": {
            display: "block",
            position: "absolute",
            "transform-origin": "bottom",
            "border-left": (0, p.em)(u.THICKNESS * u.ARROWX) + " solid",
            "border-right": 0,
            "box-sizing": "border-box",
          },
          "mjx-menclose > mjx-arrow > mjx-aline": {
            left: 0,
            top: (0, p.em)(-u.THICKNESS / 2),
            right: (0, p.em)(u.THICKNESS * (u.ARROWX - 1)),
            height: 0,
            "border-top": (0, p.em)(u.THICKNESS) + " solid",
            "border-left": 0,
          },
          "mjx-menclose > mjx-arrow[double] > mjx-aline": { left: (0, p.em)(u.THICKNESS * (u.ARROWX - 1)), height: 0 },
          "mjx-menclose > mjx-arrow > mjx-rthead": {
            transform: "skewX(" + y + "rad)",
            right: 0,
            bottom: "-1px",
            "border-bottom": "1px solid transparent",
            "border-top": (0, p.em)(u.THICKNESS * u.ARROWY) + " solid transparent",
          },
          "mjx-menclose > mjx-arrow > mjx-rbhead": {
            transform: "skewX(-" + y + "rad)",
            "transform-origin": "top",
            right: 0,
            top: "-1px",
            "border-top": "1px solid transparent",
            "border-bottom": (0, p.em)(u.THICKNESS * u.ARROWY) + " solid transparent",
          },
          "mjx-menclose > mjx-arrow > mjx-lthead": {
            transform: "skewX(-" + y + "rad)",
            left: 0,
            bottom: "-1px",
            "border-left": 0,
            "border-right": (0, p.em)(u.THICKNESS * u.ARROWX) + " solid",
            "border-bottom": "1px solid transparent",
            "border-top": (0, p.em)(u.THICKNESS * u.ARROWY) + " solid transparent",
          },
          "mjx-menclose > mjx-arrow > mjx-lbhead": {
            transform: "skewX(" + y + "rad)",
            "transform-origin": "top",
            left: 0,
            top: "-1px",
            "border-left": 0,
            "border-right": (0, p.em)(u.THICKNESS * u.ARROWX) + " solid",
            "border-top": "1px solid transparent",
            "border-bottom": (0, p.em)(u.THICKNESS * u.ARROWY) + " solid transparent",
          },
          "mjx-menclose > dbox": {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: (0, p.em)(-1.5 * u.PADDING),
            width: (0, p.em)(3 * u.PADDING),
            border: (0, p.em)(u.THICKNESS) + " solid",
            "border-radius": "50%",
            "clip-path": "inset(0 0 0 " + (0, p.em)(1.5 * u.PADDING) + ")",
            "box-sizing": "border-box",
          },
        };
        e.notations = new Map([
          u.Border("top"),
          u.Border("right"),
          u.Border("bottom"),
          u.Border("left"),
          u.Border2("actuarial", "top", "right"),
          u.Border2("madruwb", "bottom", "right"),
          u.DiagonalStrike("up", 1),
          u.DiagonalStrike("down", -1),
          [
            "horizontalstrike",
            {
              renderer: u.RenderElement("hstrike", "Y"),
              bbox: function (t) {
                return [0, t.padding, 0, t.padding];
              },
            },
          ],
          [
            "verticalstrike",
            {
              renderer: u.RenderElement("vstrike", "X"),
              bbox: function (t) {
                return [t.padding, 0, t.padding, 0];
              },
            },
          ],
          [
            "box",
            {
              renderer: function (t, e) {
                t.adaptor.setStyle(e, "border", t.em(t.thickness) + " solid");
              },
              bbox: u.fullBBox,
              border: u.fullBorder,
              remove: "left right top bottom",
            },
          ],
          ["roundedbox", { renderer: u.RenderElement("rbox"), bbox: u.fullBBox }],
          ["circle", { renderer: u.RenderElement("cbox"), bbox: u.fullBBox }],
          [
            "phasorangle",
            {
              renderer: function (t, e) {
                var r = t.getBBox(),
                  i = r.h,
                  n = r.d;
                var o = l(t.getArgMod(1.75 * t.padding, i + n), 2),
                  a = o[0],
                  s = o[1];
                var h = t.thickness * Math.sin(a) * 0.9;
                t.adaptor.setStyle(e, "border-bottom", t.em(t.thickness) + " solid");
                var c = t.adjustBorder(
                  t.html("mjx-ustrike", { style: { width: t.em(s), transform: "translateX(" + t.em(h) + ") rotate(" + t.fixed(-a) + "rad)" } })
                );
                t.adaptor.append(t.chtml, c);
              },
              bbox: function (t) {
                var e = t.padding / 2;
                var r = t.thickness;
                return [2 * e, e, e + r, 3 * e + r];
              },
              border: function (t) {
                return [0, 0, t.thickness, 0];
              },
              remove: "bottom",
            },
          ],
          u.Arrow("up"),
          u.Arrow("down"),
          u.Arrow("left"),
          u.Arrow("right"),
          u.Arrow("updown"),
          u.Arrow("leftright"),
          u.DiagonalArrow("updiagonal"),
          u.DiagonalArrow("northeast"),
          u.DiagonalArrow("southeast"),
          u.DiagonalArrow("northwest"),
          u.DiagonalArrow("southwest"),
          u.DiagonalArrow("northeastsouthwest"),
          u.DiagonalArrow("northwestsoutheast"),
          [
            "longdiv",
            {
              renderer: function (t, e) {
                var r = t.adaptor;
                r.setStyle(e, "border-top", t.em(t.thickness) + " solid");
                var i = r.append(t.chtml, t.html("dbox"));
                var n = t.thickness;
                var o = t.padding;
                if (n !== u.THICKNESS) {
                  r.setStyle(i, "border-width", t.em(n));
                }
                if (o !== u.PADDING) {
                  r.setStyle(i, "left", t.em(-1.5 * o));
                  r.setStyle(i, "width", t.em(3 * o));
                  r.setStyle(i, "clip-path", "inset(0 0 0 " + t.em(1.5 * o) + ")");
                }
              },
              bbox: function (t) {
                var e = t.padding;
                var r = t.thickness;
                return [e + r, e, e, 2 * e + r / 2];
              },
            },
          ],
          [
            "radical",
            {
              renderer: function (t, e) {
                t.msqrt.toCHTML(e);
                var r = t.sqrtTRBL();
                t.adaptor.setStyle(
                  t.msqrt.chtml,
                  "margin",
                  r
                    .map(function (e) {
                      return t.em(-e);
                    })
                    .join(" ")
                );
              },
              init: function (t) {
                t.msqrt = t.createMsqrt(t.childNodes[0]);
              },
              bbox: function (t) {
                return t.sqrtTRBL();
              },
              renderChild: true,
            },
          ],
        ]);
        return e;
      })((0, c.CommonMencloseMixin)(h.CHTMLWrapper));
      e.CHTMLmenclose = v;
    },
    7233: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmfenced = void 0;
      var n = r(81129);
      var o = r(5043);
      var a = r(90719);
      var s = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (t) {
          var e = this.standardCHTMLnode(t);
          this.mrow.toCHTML(e);
        };
        e.kind = a.MmlMfenced.prototype.kind;
        return e;
      })((0, o.CommonMfencedMixin)(n.CHTMLWrapper));
      e.CHTMLmfenced = s;
    },
    72929: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__assign) ||
        function () {
          n =
            Object.assign ||
            function (t) {
              for (var e, r = 1, i = arguments.length; r < i; r++) {
                e = arguments[r];
                for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) t[n] = e[n];
              }
              return t;
            };
          return n.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmfrac = void 0;
      var o = r(81129);
      var a = r(30811);
      var s = r(294);
      var l = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (t) {
          this.standardCHTMLnode(t);
          var e = this.node.attributes.getList("linethickness", "bevelled"),
            r = e.linethickness,
            i = e.bevelled;
          var n = this.isDisplay();
          if (i) {
            this.makeBevelled(n);
          } else {
            var o = this.length2em(String(r), 0.06);
            if (o === 0) {
              this.makeAtop(n);
            } else {
              this.makeFraction(n, o);
            }
          }
        };
        e.prototype.makeFraction = function (t, e) {
          var r = this.node.attributes.getList("numalign", "denomalign"),
            i = r.numalign,
            o = r.denomalign;
          var a = this.node.getProperty("withDelims");
          var s = t ? { type: "d" } : {};
          var l = a ? n(n({}, s), { delims: "true" }) : n({}, s);
          var h = i !== "center" ? { align: i } : {};
          var c = o !== "center" ? { align: o } : {};
          var u = n({}, s),
            f = n({}, s);
          var p = this.font.params;
          if (e !== 0.06) {
            var d = p.axis_height;
            var y = this.em(e);
            var v = this.getTUV(t, e),
              m = v.T,
              b = v.u,
              g = v.v;
            var x = (t ? this.em(3 * e) : y) + " -.1em";
            s.style = { height: y, "border-top": y + " solid", margin: x };
            var w = this.em(Math.max(0, b));
            f.style = { height: w, "vertical-align": "-" + w };
            u.style = { height: this.em(Math.max(0, g)) };
            l.style = { "vertical-align": this.em(d - m) };
          }
          var _, M;
          this.adaptor.append(
            this.chtml,
            this.html("mjx-frac", l, [
              (_ = this.html("mjx-num", h, [this.html("mjx-nstrut", f)])),
              this.html("mjx-dbox", {}, [
                this.html("mjx-dtable", {}, [
                  this.html("mjx-line", s),
                  this.html("mjx-row", {}, [(M = this.html("mjx-den", c, [this.html("mjx-dstrut", u)]))]),
                ]),
              ]),
            ])
          );
          this.childNodes[0].toCHTML(_);
          this.childNodes[1].toCHTML(M);
        };
        e.prototype.makeAtop = function (t) {
          var e = this.node.attributes.getList("numalign", "denomalign"),
            r = e.numalign,
            i = e.denomalign;
          var o = this.node.getProperty("withDelims");
          var a = t ? { type: "d", atop: true } : { atop: true };
          var s = o ? n(n({}, a), { delims: true }) : n({}, a);
          var l = r !== "center" ? { align: r } : {};
          var h = i !== "center" ? { align: i } : {};
          var c = this.getUVQ(t),
            u = c.v,
            f = c.q;
          l.style = { "padding-bottom": this.em(f) };
          s.style = { "vertical-align": this.em(-u) };
          var p, d;
          this.adaptor.append(this.chtml, this.html("mjx-frac", s, [(p = this.html("mjx-num", l)), (d = this.html("mjx-den", h))]));
          this.childNodes[0].toCHTML(p);
          this.childNodes[1].toCHTML(d);
        };
        e.prototype.makeBevelled = function (t) {
          var e = this.adaptor;
          e.setAttribute(this.chtml, "bevelled", "ture");
          var r = e.append(this.chtml, this.html("mjx-num"));
          this.childNodes[0].toCHTML(r);
          this.bevel.toCHTML(this.chtml);
          var i = e.append(this.chtml, this.html("mjx-den"));
          this.childNodes[1].toCHTML(i);
          var n = this.getBevelData(t),
            o = n.u,
            a = n.v,
            s = n.delta,
            l = n.nbox,
            h = n.dbox;
          if (o) {
            e.setStyle(r, "verticalAlign", this.em(o / l.scale));
          }
          if (a) {
            e.setStyle(i, "verticalAlign", this.em(a / h.scale));
          }
          var c = this.em(-s / 2);
          e.setStyle(this.bevel.chtml, "marginLeft", c);
          e.setStyle(this.bevel.chtml, "marginRight", c);
        };
        e.kind = s.MmlMfrac.prototype.kind;
        e.styles = {
          "mjx-frac": { display: "inline-block", "vertical-align": "0.17em", padding: "0 .22em" },
          'mjx-frac[type="d"]': { "vertical-align": ".04em" },
          "mjx-frac[delims]": { padding: "0 .1em" },
          "mjx-frac[atop]": { padding: "0 .12em" },
          "mjx-frac[atop][delims]": { padding: "0" },
          "mjx-dtable": { display: "inline-table", width: "100%" },
          "mjx-dtable > *": { "font-size": "2000%" },
          "mjx-dbox": { display: "block", "font-size": "5%" },
          "mjx-num": { display: "block", "text-align": "center" },
          "mjx-den": { display: "block", "text-align": "center" },
          "mjx-mfrac[bevelled] > mjx-num": { display: "inline-block" },
          "mjx-mfrac[bevelled] > mjx-den": { display: "inline-block" },
          'mjx-den[align="right"], mjx-num[align="right"]': { "text-align": "right" },
          'mjx-den[align="left"], mjx-num[align="left"]': { "text-align": "left" },
          "mjx-nstrut": { display: "inline-block", height: ".054em", width: 0, "vertical-align": "-.054em" },
          'mjx-nstrut[type="d"]': { height: ".217em", "vertical-align": "-.217em" },
          "mjx-dstrut": { display: "inline-block", height: ".505em", width: 0 },
          'mjx-dstrut[type="d"]': { height: ".726em" },
          "mjx-line": {
            display: "block",
            "box-sizing": "border-box",
            "min-height": "1px",
            height: ".06em",
            "border-top": ".06em solid",
            margin: ".06em -.1em",
            overflow: "hidden",
          },
          'mjx-line[type="d"]': { margin: ".18em -.1em" },
        };
        return e;
      })((0, a.CommonMfracMixin)(o.CHTMLWrapper));
      e.CHTMLmfrac = l;
    },
    47354: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmglyph = void 0;
      var n = r(81129);
      var o = r(981);
      var a = r(83954);
      var s = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (t) {
          var e = this.standardCHTMLnode(t);
          if (this.charWrapper) {
            this.charWrapper.toCHTML(e);
            return;
          }
          var r = this.node.attributes.getList("src", "alt"),
            i = r.src,
            n = r.alt;
          var o = { width: this.em(this.width), height: this.em(this.height) };
          if (this.valign) {
            o.verticalAlign = this.em(this.valign);
          }
          var a = this.html("img", { src: i, style: o, alt: n, title: n });
          this.adaptor.append(e, a);
        };
        e.kind = a.MmlMglyph.prototype.kind;
        e.styles = { "mjx-mglyph > img": { display: "inline-block", border: 0, padding: 0 } };
        return e;
      })((0, o.CommonMglyphMixin)(n.CHTMLWrapper));
      e.CHTMLmglyph = s;
    },
    91307: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmi = void 0;
      var n = r(81129);
      var o = r(98296);
      var a = r(16689);
      var s = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.kind = a.MmlMi.prototype.kind;
        return e;
      })((0, o.CommonMiMixin)(n.CHTMLWrapper));
      e.CHTMLmi = s;
    },
    7331: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmmultiscripts = void 0;
      var o = r(37717);
      var a = r(86720);
      var s = r(13195);
      var l = r(33353);
      var h = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (t) {
          var e = this.standardCHTMLnode(t);
          var r = this.scriptData;
          var i = this.node.getProperty("scriptalign") || "right left";
          var o = n((0, l.split)(i + " " + i), 2),
            a = o[0],
            s = o[1];
          var h = this.combinePrePost(r.sub, r.psub);
          var c = this.combinePrePost(r.sup, r.psup);
          var u = n(this.getUVQ(h, c), 2),
            f = u[0],
            p = u[1];
          if (r.numPrescripts) {
            var d = this.addScripts(f, -p, true, r.psub, r.psup, this.firstPrescript, r.numPrescripts);
            a !== "right" && this.adaptor.setAttribute(d, "script-align", a);
          }
          this.childNodes[0].toCHTML(e);
          if (r.numScripts) {
            var d = this.addScripts(f, -p, false, r.sub, r.sup, 1, r.numScripts);
            s !== "left" && this.adaptor.setAttribute(d, "script-align", s);
          }
        };
        e.prototype.addScripts = function (t, e, r, i, n, o, a) {
          var s = this.adaptor;
          var l = t - n.d + (e - i.h);
          var h = t < 0 && e === 0 ? i.h + t : t;
          var c = l > 0 ? { style: { height: this.em(l) } } : {};
          var u = h ? { style: { "vertical-align": this.em(h) } } : {};
          var f = this.html("mjx-row");
          var p = this.html("mjx-row", c);
          var d = this.html("mjx-row");
          var y = "mjx-" + (r ? "pre" : "") + "scripts";
          var v = o + 2 * a;
          while (o < v) {
            this.childNodes[o++].toCHTML(s.append(d, this.html("mjx-cell")));
            this.childNodes[o++].toCHTML(s.append(f, this.html("mjx-cell")));
          }
          return s.append(this.chtml, this.html(y, u, [f, p, d]));
        };
        e.kind = s.MmlMmultiscripts.prototype.kind;
        e.styles = {
          "mjx-prescripts": { display: "inline-table", "padding-left": ".05em" },
          "mjx-scripts": { display: "inline-table", "padding-right": ".05em" },
          "mjx-prescripts > mjx-row > mjx-cell": { "text-align": "right" },
          '[script-align="left"] > mjx-row > mjx-cell': { "text-align": "left" },
          '[script-align="center"] > mjx-row > mjx-cell': { "text-align": "center" },
          '[script-align="right"] > mjx-row > mjx-cell': { "text-align": "right" },
        };
        return e;
      })((0, a.CommonMmultiscriptsMixin)(o.CHTMLmsubsup));
      e.CHTMLmmultiscripts = h;
    },
    61422: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmn = void 0;
      var n = r(81129);
      var o = r(72309);
      var a = r(94411);
      var s = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.kind = a.MmlMn.prototype.kind;
        return e;
      })((0, o.CommonMnMixin)(n.CHTMLWrapper));
      e.CHTMLmn = s;
    },
    53241: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmo = void 0;
      var o = r(81129);
      var a = r(9579);
      var s = r(5213);
      var l = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (t) {
          var e, r;
          var i = this.node.attributes;
          var o = i.get("symmetric") && this.stretch.dir !== 2;
          var a = this.stretch.dir !== 0;
          if (a && this.size === null) {
            this.getStretchedVariant([]);
          }
          var s = this.standardCHTMLnode(t);
          if (a && this.size < 0) {
            this.stretchHTML(s);
          } else {
            if (o || i.get("largeop")) {
              var l = this.em(this.getCenterOffset());
              if (l !== "0") {
                this.adaptor.setStyle(s, "verticalAlign", l);
              }
            }
            if (this.node.getProperty("mathaccent")) {
              this.adaptor.setStyle(s, "width", "0");
              this.adaptor.setStyle(s, "margin-left", this.em(this.getAccentOffset()));
            }
            try {
              for (var h = n(this.childNodes), c = h.next(); !c.done; c = h.next()) {
                var u = c.value;
                u.toCHTML(s);
              }
            } catch (f) {
              e = { error: f };
            } finally {
              try {
                if (c && !c.done && (r = h.return)) r.call(h);
              } finally {
                if (e) throw e.error;
              }
            }
          }
        };
        e.prototype.stretchHTML = function (t) {
          var e = this.getText().codePointAt(0);
          this.font.delimUsage.add(e);
          this.childNodes[0].markUsed();
          var r = this.stretch;
          var i = r.stretch;
          var n = [];
          if (i[0]) {
            n.push(this.html("mjx-beg", {}, [this.html("mjx-c")]));
          }
          n.push(this.html("mjx-ext", {}, [this.html("mjx-c")]));
          if (i.length === 4) {
            n.push(this.html("mjx-mid", {}, [this.html("mjx-c")]), this.html("mjx-ext", {}, [this.html("mjx-c")]));
          }
          if (i[2]) {
            n.push(this.html("mjx-end", {}, [this.html("mjx-c")]));
          }
          var o = {};
          var s = this.bbox,
            l = s.h,
            h = s.d,
            c = s.w;
          if (r.dir === 1) {
            n.push(this.html("mjx-mark"));
            o.height = this.em(l + h);
            o.verticalAlign = this.em(-h);
          } else {
            o.width = this.em(c);
          }
          var u = a.DirectionVH[r.dir];
          var f = { class: this.char(r.c || e), style: o };
          var p = this.html("mjx-stretchy-" + u, f, n);
          this.adaptor.append(t, p);
        };
        e.kind = s.MmlMo.prototype.kind;
        e.styles = {
          "mjx-stretchy-h": { display: "inline-table", width: "100%" },
          "mjx-stretchy-h > *": { display: "table-cell", width: 0 },
          "mjx-stretchy-h > * > mjx-c": { display: "inline-block", transform: "scalex(1.0000001)" },
          "mjx-stretchy-h > * > mjx-c::before": { display: "inline-block", width: "initial" },
          "mjx-stretchy-h > mjx-ext": { "/* IE */ overflow": "hidden", "/* others */ overflow": "clip visible", width: "100%" },
          "mjx-stretchy-h > mjx-ext > mjx-c::before": { transform: "scalex(500)" },
          "mjx-stretchy-h > mjx-ext > mjx-c": { width: 0 },
          "mjx-stretchy-h > mjx-beg > mjx-c": { "margin-right": "-.1em" },
          "mjx-stretchy-h > mjx-end > mjx-c": { "margin-left": "-.1em" },
          "mjx-stretchy-v": { display: "inline-block" },
          "mjx-stretchy-v > *": { display: "block" },
          "mjx-stretchy-v > mjx-beg": { height: 0 },
          "mjx-stretchy-v > mjx-end > mjx-c": { display: "block" },
          "mjx-stretchy-v > * > mjx-c": { transform: "scaley(1.0000001)", "transform-origin": "left center", overflow: "hidden" },
          "mjx-stretchy-v > mjx-ext": {
            display: "block",
            height: "100%",
            "box-sizing": "border-box",
            border: "0px solid transparent",
            "/* IE */ overflow": "hidden",
            "/* others */ overflow": "visible clip",
          },
          "mjx-stretchy-v > mjx-ext > mjx-c::before": { width: "initial", "box-sizing": "border-box" },
          "mjx-stretchy-v > mjx-ext > mjx-c": { transform: "scaleY(500) translateY(.075em)", overflow: "visible" },
          "mjx-mark": { display: "inline-block", height: "0px" },
        };
        return e;
      })((0, a.CommonMoMixin)(o.CHTMLWrapper));
      e.CHTMLmo = l;
    },
    74926: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var o =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmpadded = void 0;
      var a = r(81129);
      var s = r(50303);
      var l = r(38480);
      var h = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (t) {
          var e, r;
          var i = this.standardCHTMLnode(t);
          var a = [];
          var s = {};
          var l = n(this.getDimens(), 9),
            h = l[2],
            c = l[3],
            u = l[4],
            f = l[5],
            p = l[6],
            d = l[7],
            y = l[8];
          if (f) {
            s.width = this.em(h + f);
          }
          if (c || u) {
            s.margin = this.em(c) + " 0 " + this.em(u);
          }
          if (p + y || d) {
            s.position = "relative";
            var v = this.html("mjx-rbox", { style: { left: this.em(p + y), top: this.em(-d), "max-width": s.width } });
            if (p + y && this.childNodes[0].getBBox().pwidth) {
              this.adaptor.setAttribute(v, "width", "full");
              this.adaptor.setStyle(v, "left", this.em(p));
            }
            a.push(v);
          }
          i = this.adaptor.append(i, this.html("mjx-block", { style: s }, a));
          try {
            for (var m = o(this.childNodes), b = m.next(); !b.done; b = m.next()) {
              var g = b.value;
              g.toCHTML(a[0] || i);
            }
          } catch (x) {
            e = { error: x };
          } finally {
            try {
              if (b && !b.done && (r = m.return)) r.call(m);
            } finally {
              if (e) throw e.error;
            }
          }
        };
        e.kind = l.MmlMpadded.prototype.kind;
        e.styles = { "mjx-mpadded": { display: "inline-block" }, "mjx-rbox": { display: "inline-block", position: "relative" } };
        return e;
      })((0, s.CommonMpaddedMixin)(a.CHTMLWrapper));
      e.CHTMLmpadded = h;
    },
    32829: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmroot = void 0;
      var o = r(10128);
      var a = r(62315);
      var s = r(68091);
      var l = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.addRoot = function (t, e, r, i) {
          e.toCHTML(t);
          var o = n(this.getRootDimens(r, i), 3),
            a = o[0],
            s = o[1],
            l = o[2];
          this.adaptor.setStyle(t, "verticalAlign", this.em(s));
          this.adaptor.setStyle(t, "width", this.em(a));
          if (l) {
            this.adaptor.setStyle(this.adaptor.firstChild(t), "paddingLeft", this.em(l));
          }
        };
        e.kind = s.MmlMroot.prototype.kind;
        return e;
      })((0, a.CommonMrootMixin)(o.CHTMLmsqrt));
      e.CHTMLmroot = l;
    },
    86255: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLinferredMrow = e.CHTMLmrow = void 0;
      var o = r(81129);
      var a = r(33257);
      var s = r(33257);
      var l = r(68550);
      var h = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (t) {
          var e, r;
          var i = this.node.isInferred ? (this.chtml = t) : this.standardCHTMLnode(t);
          var o = false;
          try {
            for (var a = n(this.childNodes), s = a.next(); !s.done; s = a.next()) {
              var l = s.value;
              l.toCHTML(i);
              if (l.bbox.w < 0) {
                o = true;
              }
            }
          } catch (c) {
            e = { error: c };
          } finally {
            try {
              if (s && !s.done && (r = a.return)) r.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
          if (o) {
            var h = this.getBBox().w;
            if (h) {
              this.adaptor.setStyle(i, "width", this.em(Math.max(0, h)));
              if (h < 0) {
                this.adaptor.setStyle(i, "marginRight", this.em(h));
              }
            }
          }
        };
        e.kind = l.MmlMrow.prototype.kind;
        return e;
      })((0, a.CommonMrowMixin)(o.CHTMLWrapper));
      e.CHTMLmrow = h;
      var c = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.kind = l.MmlInferredMrow.prototype.kind;
        return e;
      })((0, s.CommonInferredMrowMixin)(h));
      e.CHTMLinferredMrow = c;
    },
    16851: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLms = void 0;
      var n = r(81129);
      var o = r(23745);
      var a = r(17931);
      var s = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.kind = a.MmlMs.prototype.kind;
        return e;
      })((0, o.CommonMsMixin)(n.CHTMLWrapper));
      e.CHTMLms = s;
    },
    48929: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmspace = void 0;
      var n = r(81129);
      var o = r(84533);
      var a = r(4254);
      var s = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (t) {
          var e = this.standardCHTMLnode(t);
          var r = this.getBBox(),
            i = r.w,
            n = r.h,
            o = r.d;
          if (i < 0) {
            this.adaptor.setStyle(e, "marginRight", this.em(i));
            i = 0;
          }
          if (i) {
            this.adaptor.setStyle(e, "width", this.em(i));
          }
          n = Math.max(0, n + o);
          if (n) {
            this.adaptor.setStyle(e, "height", this.em(Math.max(0, n)));
          }
          if (o) {
            this.adaptor.setStyle(e, "verticalAlign", this.em(-o));
          }
        };
        e.kind = a.MmlMspace.prototype.kind;
        return e;
      })((0, o.CommonMspaceMixin)(n.CHTMLWrapper));
      e.CHTMLmspace = s;
    },
    10128: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmsqrt = void 0;
      var o = r(81129);
      var a = r(29266);
      var s = r(53162);
      var l = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (t) {
          var e = this.childNodes[this.surd];
          var r = this.childNodes[this.base];
          var i = e.getBBox();
          var o = r.getOuterBBox();
          var a = n(this.getPQ(i), 2),
            s = a[1];
          var l = this.font.params.rule_thickness;
          var h = o.h + s + l;
          var c = this.standardCHTMLnode(t);
          var u, f, p, d;
          if (this.root != null) {
            p = this.adaptor.append(c, this.html("mjx-root"));
            d = this.childNodes[this.root];
          }
          var y = this.adaptor.append(
            c,
            this.html("mjx-sqrt", {}, [(u = this.html("mjx-surd")), (f = this.html("mjx-box", { style: { paddingTop: this.em(s) } }))])
          );
          this.addRoot(p, d, i, h);
          e.toCHTML(u);
          r.toCHTML(f);
          if (e.size < 0) {
            this.adaptor.addClass(y, "mjx-tall");
          }
        };
        e.prototype.addRoot = function (t, e, r, i) {};
        e.kind = s.MmlMsqrt.prototype.kind;
        e.styles = {
          "mjx-root": { display: "inline-block", "white-space": "nowrap" },
          "mjx-surd": { display: "inline-block", "vertical-align": "top" },
          "mjx-sqrt": { display: "inline-block", "padding-top": ".07em" },
          "mjx-sqrt > mjx-box": { "border-top": ".07em solid" },
          "mjx-sqrt.mjx-tall > mjx-box": { "padding-left": ".3em", "margin-left": "-.3em" },
        };
        return e;
      })((0, a.CommonMsqrtMixin)(o.CHTMLWrapper));
      e.CHTMLmsqrt = l;
    },
    37717: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmsubsup = e.CHTMLmsup = e.CHTMLmsub = void 0;
      var o = r(90949);
      var a = r(27726);
      var s = r(27726);
      var l = r(27726);
      var h = r(74529);
      var c = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.kind = h.MmlMsub.prototype.kind;
        return e;
      })((0, a.CommonMsubMixin)(o.CHTMLscriptbase));
      e.CHTMLmsub = c;
      var u = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.kind = h.MmlMsup.prototype.kind;
        return e;
      })((0, s.CommonMsupMixin)(o.CHTMLscriptbase));
      e.CHTMLmsup = u;
      var f = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (t) {
          var e = this.adaptor;
          var r = this.standardCHTMLnode(t);
          var i = n([this.baseChild, this.supChild, this.subChild], 3),
            o = i[0],
            a = i[1],
            s = i[2];
          var l = n(this.getUVQ(), 3),
            h = l[1],
            c = l[2];
          var u = { "vertical-align": this.em(h) };
          o.toCHTML(r);
          var f = e.append(r, this.html("mjx-script", { style: u }));
          a.toCHTML(f);
          e.append(f, this.html("mjx-spacer", { style: { "margin-top": this.em(c) } }));
          s.toCHTML(f);
          var p = this.getAdjustedIc();
          if (p) {
            e.setStyle(a.chtml, "marginLeft", this.em(p / a.bbox.rscale));
          }
          if (this.baseRemoveIc) {
            e.setStyle(f, "marginLeft", this.em(-this.baseIc));
          }
        };
        e.kind = h.MmlMsubsup.prototype.kind;
        e.styles = {
          "mjx-script": { display: "inline-block", "padding-right": ".05em", "padding-left": ".033em" },
          "mjx-script > mjx-spacer": { display: "block" },
        };
        return e;
      })((0, l.CommonMsubsupMixin)(o.CHTMLscriptbase));
      e.CHTMLmsubsup = f;
    },
    48582: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var o =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmtable = void 0;
      var a = r(81129);
      var s = r(8747);
      var l = r(7252);
      var h = r(33353);
      var c = (function (t) {
        i(e, t);
        function e(e, r, i) {
          if (i === void 0) {
            i = null;
          }
          var n = t.call(this, e, r, i) || this;
          n.itable = n.html("mjx-itable");
          n.labels = n.html("mjx-itable");
          return n;
        }
        e.prototype.getAlignShift = function () {
          var e = t.prototype.getAlignShift.call(this);
          if (!this.isTop) {
            e[1] = 0;
          }
          return e;
        };
        e.prototype.toCHTML = function (t) {
          var e, r;
          var i = this.standardCHTMLnode(t);
          this.adaptor.append(i, this.html("mjx-table", {}, [this.itable]));
          try {
            for (var o = n(this.childNodes), a = o.next(); !a.done; a = o.next()) {
              var s = a.value;
              s.toCHTML(this.itable);
            }
          } catch (l) {
            e = { error: l };
          } finally {
            try {
              if (a && !a.done && (r = o.return)) r.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
          this.padRows();
          this.handleColumnSpacing();
          this.handleColumnLines();
          this.handleColumnWidths();
          this.handleRowSpacing();
          this.handleRowLines();
          this.handleRowHeights();
          this.handleFrame();
          this.handleWidth();
          this.handleLabels();
          this.handleAlign();
          this.handleJustify();
          this.shiftColor();
        };
        e.prototype.shiftColor = function () {
          var t = this.adaptor;
          var e = t.getStyle(this.chtml, "backgroundColor");
          if (e) {
            t.setStyle(this.chtml, "backgroundColor", "");
            t.setStyle(this.itable, "backgroundColor", e);
          }
        };
        e.prototype.padRows = function () {
          var t, e;
          var r = this.adaptor;
          try {
            for (var i = n(r.childNodes(this.itable)), o = i.next(); !o.done; o = i.next()) {
              var a = o.value;
              while (r.childNodes(a).length < this.numCols) {
                r.append(a, this.html("mjx-mtd", { extra: true }));
              }
            }
          } catch (s) {
            t = { error: s };
          } finally {
            try {
              if (o && !o.done && (e = i.return)) e.call(i);
            } finally {
              if (t) throw t.error;
            }
          }
        };
        e.prototype.handleColumnSpacing = function () {
          var t, e, r, i;
          var o = this.childNodes[0] ? 1 / this.childNodes[0].getBBox().rscale : 1;
          var a = this.getEmHalfSpacing(this.fSpace[0], this.cSpace, o);
          var s = this.frame;
          try {
            for (var l = n(this.tableRows), h = l.next(); !h.done; h = l.next()) {
              var c = h.value;
              var u = 0;
              try {
                for (var f = ((r = void 0), n(c.tableCells)), p = f.next(); !p.done; p = f.next()) {
                  var d = p.value;
                  var y = a[u++];
                  var v = a[u];
                  var m = d ? d.chtml : this.adaptor.childNodes(c.chtml)[u];
                  if ((u > 1 && y !== "0.4em") || (s && u === 1)) {
                    this.adaptor.setStyle(m, "paddingLeft", y);
                  }
                  if ((u < this.numCols && v !== "0.4em") || (s && u === this.numCols)) {
                    this.adaptor.setStyle(m, "paddingRight", v);
                  }
                }
              } catch (b) {
                r = { error: b };
              } finally {
                try {
                  if (p && !p.done && (i = f.return)) i.call(f);
                } finally {
                  if (r) throw r.error;
                }
              }
            }
          } catch (g) {
            t = { error: g };
          } finally {
            try {
              if (h && !h.done && (e = l.return)) e.call(l);
            } finally {
              if (t) throw t.error;
            }
          }
        };
        e.prototype.handleColumnLines = function () {
          var t, e, r, i;
          if (this.node.attributes.get("columnlines") === "none") return;
          var o = this.getColumnAttributes("columnlines");
          try {
            for (var a = n(this.childNodes), s = a.next(); !s.done; s = a.next()) {
              var l = s.value;
              var h = 0;
              try {
                for (var c = ((r = void 0), n(this.adaptor.childNodes(l.chtml).slice(1))), u = c.next(); !u.done; u = c.next()) {
                  var f = u.value;
                  var p = o[h++];
                  if (p === "none") continue;
                  this.adaptor.setStyle(f, "borderLeft", ".07em " + p);
                }
              } catch (d) {
                r = { error: d };
              } finally {
                try {
                  if (u && !u.done && (i = c.return)) i.call(c);
                } finally {
                  if (r) throw r.error;
                }
              }
            }
          } catch (y) {
            t = { error: y };
          } finally {
            try {
              if (s && !s.done && (e = a.return)) e.call(a);
            } finally {
              if (t) throw t.error;
            }
          }
        };
        e.prototype.handleColumnWidths = function () {
          var t, e, r, i;
          try {
            for (var o = n(this.childNodes), a = o.next(); !a.done; a = o.next()) {
              var s = a.value;
              var l = 0;
              try {
                for (var h = ((r = void 0), n(this.adaptor.childNodes(s.chtml))), c = h.next(); !c.done; c = h.next()) {
                  var u = c.value;
                  var f = this.cWidths[l++];
                  if (f !== null) {
                    var p = typeof f === "number" ? this.em(f) : f;
                    this.adaptor.setStyle(u, "width", p);
                    this.adaptor.setStyle(u, "maxWidth", p);
                    this.adaptor.setStyle(u, "minWidth", p);
                  }
                }
              } catch (d) {
                r = { error: d };
              } finally {
                try {
                  if (c && !c.done && (i = h.return)) i.call(h);
                } finally {
                  if (r) throw r.error;
                }
              }
            }
          } catch (y) {
            t = { error: y };
          } finally {
            try {
              if (a && !a.done && (e = o.return)) e.call(o);
            } finally {
              if (t) throw t.error;
            }
          }
        };
        e.prototype.handleRowSpacing = function () {
          var t, e, r, i;
          var o = this.childNodes[0] ? 1 / this.childNodes[0].getBBox().rscale : 1;
          var a = this.getEmHalfSpacing(this.fSpace[1], this.rSpace, o);
          var s = this.frame;
          var l = 0;
          try {
            for (var h = n(this.childNodes), c = h.next(); !c.done; c = h.next()) {
              var u = c.value;
              var f = a[l++];
              var p = a[l];
              try {
                for (var d = ((r = void 0), n(u.childNodes)), y = d.next(); !y.done; y = d.next()) {
                  var v = y.value;
                  if ((l > 1 && f !== "0.215em") || (s && l === 1)) {
                    this.adaptor.setStyle(v.chtml, "paddingTop", f);
                  }
                  if ((l < this.numRows && p !== "0.215em") || (s && l === this.numRows)) {
                    this.adaptor.setStyle(v.chtml, "paddingBottom", p);
                  }
                }
              } catch (m) {
                r = { error: m };
              } finally {
                try {
                  if (y && !y.done && (i = d.return)) i.call(d);
                } finally {
                  if (r) throw r.error;
                }
              }
            }
          } catch (b) {
            t = { error: b };
          } finally {
            try {
              if (c && !c.done && (e = h.return)) e.call(h);
            } finally {
              if (t) throw t.error;
            }
          }
        };
        e.prototype.handleRowLines = function () {
          var t, e, r, i;
          if (this.node.attributes.get("rowlines") === "none") return;
          var o = this.getRowAttributes("rowlines");
          var a = 0;
          try {
            for (var s = n(this.childNodes.slice(1)), l = s.next(); !l.done; l = s.next()) {
              var h = l.value;
              var c = o[a++];
              if (c === "none") continue;
              try {
                for (var u = ((r = void 0), n(this.adaptor.childNodes(h.chtml))), f = u.next(); !f.done; f = u.next()) {
                  var p = f.value;
                  this.adaptor.setStyle(p, "borderTop", ".07em " + c);
                }
              } catch (d) {
                r = { error: d };
              } finally {
                try {
                  if (f && !f.done && (i = u.return)) i.call(u);
                } finally {
                  if (r) throw r.error;
                }
              }
            }
          } catch (y) {
            t = { error: y };
          } finally {
            try {
              if (l && !l.done && (e = s.return)) e.call(s);
            } finally {
              if (t) throw t.error;
            }
          }
        };
        e.prototype.handleRowHeights = function () {
          if (this.node.attributes.get("equalrows")) {
            this.handleEqualRows();
          }
        };
        e.prototype.handleEqualRows = function () {
          var t = this.getRowHalfSpacing();
          var e = this.getTableData(),
            r = e.H,
            i = e.D,
            n = e.NH,
            o = e.ND;
          var a = this.getEqualRowHeight();
          for (var s = 0; s < this.numRows; s++) {
            var l = this.childNodes[s];
            this.setRowHeight(l, a + t[s] + t[s + 1] + this.rLines[s]);
            if (a !== n[s] + o[s]) {
              this.setRowBaseline(l, a, (a - r[s] + i[s]) / 2);
            }
          }
        };
        e.prototype.setRowHeight = function (t, e) {
          this.adaptor.setStyle(t.chtml, "height", this.em(e));
        };
        e.prototype.setRowBaseline = function (t, e, r) {
          var i, o;
          var a = t.node.attributes.get("rowalign");
          try {
            for (var s = n(t.childNodes), l = s.next(); !l.done; l = s.next()) {
              var h = l.value;
              if (this.setCellBaseline(h, a, e, r)) break;
            }
          } catch (c) {
            i = { error: c };
          } finally {
            try {
              if (l && !l.done && (o = s.return)) o.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
        };
        e.prototype.setCellBaseline = function (t, e, r, i) {
          var n = t.node.attributes.get("rowalign");
          if (n === "baseline" || n === "axis") {
            var o = this.adaptor;
            var a = o.lastChild(t.chtml);
            o.setStyle(a, "height", this.em(r));
            o.setStyle(a, "verticalAlign", this.em(-i));
            var s = t.parent;
            if ((!s.node.isKind("mlabeledtr") || t !== s.childNodes[0]) && (e === "baseline" || e === "axis")) {
              return true;
            }
          }
          return false;
        };
        e.prototype.handleFrame = function () {
          if (this.frame && this.fLine) {
            this.adaptor.setStyle(this.itable, "border", ".07em " + this.node.attributes.get("frame"));
          }
        };
        e.prototype.handleWidth = function () {
          var t = this.adaptor;
          var e = this.getBBox(),
            r = e.w,
            i = e.L,
            n = e.R;
          t.setStyle(this.chtml, "minWidth", this.em(i + r + n));
          var o = this.node.attributes.get("width");
          if ((0, h.isPercent)(o)) {
            t.setStyle(this.chtml, "width", "");
            t.setAttribute(this.chtml, "width", "full");
          } else if (!this.hasLabels) {
            if (o === "auto") return;
            o = this.em(this.length2em(o) + 2 * this.fLine);
          }
          var a = t.firstChild(this.chtml);
          t.setStyle(a, "width", o);
          t.setStyle(a, "minWidth", this.em(r));
          if (i || n) {
            t.setStyle(this.chtml, "margin", "");
            var s = this.node.attributes.get("data-width-includes-label") ? "padding" : "margin";
            if (i === n) {
              t.setStyle(a, s, "0 " + this.em(n));
            } else {
              t.setStyle(a, s, "0 " + this.em(n) + " 0 " + this.em(i));
            }
          }
          t.setAttribute(this.itable, "width", "full");
        };
        e.prototype.handleAlign = function () {
          var t = o(this.getAlignmentRow(), 2),
            e = t[0],
            r = t[1];
          if (r === null) {
            if (e !== "axis") {
              this.adaptor.setAttribute(this.chtml, "align", e);
            }
          } else {
            var i = this.getVerticalPosition(r, e);
            this.adaptor.setAttribute(this.chtml, "align", "top");
            this.adaptor.setStyle(this.chtml, "verticalAlign", this.em(i));
          }
        };
        e.prototype.handleJustify = function () {
          var t = this.getAlignShift()[0];
          if (t !== "center") {
            this.adaptor.setAttribute(this.chtml, "justify", t);
          }
        };
        e.prototype.handleLabels = function () {
          if (!this.hasLabels) return;
          var t = this.labels;
          var e = this.node.attributes;
          var r = this.adaptor;
          var i = e.get("side");
          r.setAttribute(this.chtml, "side", i);
          r.setAttribute(t, "align", i);
          r.setStyle(t, i, "0");
          var n = o(this.addLabelPadding(i), 2),
            a = n[0],
            s = n[1];
          if (s) {
            var l = r.firstChild(this.chtml);
            this.setIndent(l, a, s);
          }
          this.updateRowHeights();
          this.addLabelSpacing();
        };
        e.prototype.addLabelPadding = function (t) {
          var e = o(this.getPadAlignShift(t), 3),
            r = e[1],
            i = e[2];
          var n = {};
          if (t === "right" && !this.node.attributes.get("data-width-includes-label")) {
            var a = this.node.attributes.get("width");
            var s = this.getBBox(),
              l = s.w,
              c = s.L,
              u = s.R;
            n.style = { width: (0, h.isPercent)(a) ? "calc(" + a + " + " + this.em(c + u) + ")" : this.em(c + l + u) };
          }
          this.adaptor.append(this.chtml, this.html("mjx-labels", n, [this.labels]));
          return [r, i];
        };
        e.prototype.updateRowHeights = function () {
          var t = this.getTableData(),
            e = t.H,
            r = t.D,
            i = t.NH,
            n = t.ND;
          var o = this.getRowHalfSpacing();
          for (var a = 0; a < this.numRows; a++) {
            var s = this.childNodes[a];
            this.setRowHeight(s, e[a] + r[a] + o[a] + o[a + 1] + this.rLines[a]);
            if (e[a] !== i[a] || r[a] !== n[a]) {
              this.setRowBaseline(s, e[a] + r[a], r[a]);
            } else if (s.node.isKind("mlabeledtr")) {
              this.setCellBaseline(s.childNodes[0], "", e[a] + r[a], r[a]);
            }
          }
        };
        e.prototype.addLabelSpacing = function () {
          var t = this.adaptor;
          var e = this.node.attributes.get("equalrows");
          var r = this.getTableData(),
            i = r.H,
            n = r.D;
          var o = e ? this.getEqualRowHeight() : 0;
          var a = this.getRowHalfSpacing();
          var s = this.fLine;
          var l = t.firstChild(this.labels);
          for (var h = 0; h < this.numRows; h++) {
            var c = this.childNodes[h];
            if (c.node.isKind("mlabeledtr")) {
              s && t.insert(this.html("mjx-mtr", { style: { height: this.em(s) } }), l);
              t.setStyle(l, "height", this.em((e ? o : i[h] + n[h]) + a[h] + a[h + 1]));
              l = t.next(l);
              s = this.rLines[h];
            } else {
              s += a[h] + (e ? o : i[h] + n[h]) + a[h + 1] + this.rLines[h];
            }
          }
        };
        e.kind = l.MmlMtable.prototype.kind;
        e.styles = {
          "mjx-mtable": {
            "vertical-align": ".25em",
            "text-align": "center",
            position: "relative",
            "box-sizing": "border-box",
            "border-spacing": 0,
            "border-collapse": "collapse",
          },
          'mjx-mstyle[size="s"] mjx-mtable': { "vertical-align": ".354em" },
          "mjx-labels": { position: "absolute", left: 0, top: 0 },
          "mjx-table": { display: "inline-block", "vertical-align": "-.5ex", "box-sizing": "border-box" },
          "mjx-table > mjx-itable": { "vertical-align": "middle", "text-align": "left", "box-sizing": "border-box" },
          "mjx-labels > mjx-itable": { position: "absolute", top: 0 },
          'mjx-mtable[justify="left"]': { "text-align": "left" },
          'mjx-mtable[justify="right"]': { "text-align": "right" },
          'mjx-mtable[justify="left"][side="left"]': { "padding-right": "0 ! important" },
          'mjx-mtable[justify="left"][side="right"]': { "padding-left": "0 ! important" },
          'mjx-mtable[justify="right"][side="left"]': { "padding-right": "0 ! important" },
          'mjx-mtable[justify="right"][side="right"]': { "padding-left": "0 ! important" },
          "mjx-mtable[align]": { "vertical-align": "baseline" },
          'mjx-mtable[align="top"] > mjx-table': { "vertical-align": "top" },
          'mjx-mtable[align="bottom"] > mjx-table': { "vertical-align": "bottom" },
          'mjx-mtable[side="right"] mjx-labels': { "min-width": "100%" },
        };
        return e;
      })((0, s.CommonMtableMixin)(a.CHTMLWrapper));
      e.CHTMLmtable = c;
    },
    82132: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmtd = void 0;
      var n = r(81129);
      var o = r(32506);
      var a = r(49016);
      var s = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (e) {
          t.prototype.toCHTML.call(this, e);
          var r = this.node.attributes.get("rowalign");
          var i = this.node.attributes.get("columnalign");
          var n = this.parent.node.attributes.get("rowalign");
          if (r !== n) {
            this.adaptor.setAttribute(this.chtml, "rowalign", r);
          }
          if (
            i !== "center" &&
            (this.parent.kind !== "mlabeledtr" || this !== this.parent.childNodes[0] || i !== this.parent.parent.node.attributes.get("side"))
          ) {
            this.adaptor.setStyle(this.chtml, "textAlign", i);
          }
          if (this.parent.parent.node.getProperty("useHeight")) {
            this.adaptor.append(this.chtml, this.html("mjx-tstrut"));
          }
        };
        e.kind = a.MmlMtd.prototype.kind;
        e.styles = {
          "mjx-mtd": { display: "table-cell", "text-align": "center", padding: ".215em .4em" },
          "mjx-mtd:first-child": { "padding-left": 0 },
          "mjx-mtd:last-child": { "padding-right": 0 },
          "mjx-mtable > * > mjx-itable > *:first-child > mjx-mtd": { "padding-top": 0 },
          "mjx-mtable > * > mjx-itable > *:last-child > mjx-mtd": { "padding-bottom": 0 },
          "mjx-tstrut": { display: "inline-block", height: "1em", "vertical-align": "-.25em" },
          'mjx-labels[align="left"] > mjx-mtr > mjx-mtd': { "text-align": "left" },
          'mjx-labels[align="right"] > mjx-mtr > mjx-mtd': { "text-align": "right" },
          "mjx-mtd[extra]": { padding: 0 },
          'mjx-mtd[rowalign="top"]': { "vertical-align": "top" },
          'mjx-mtd[rowalign="center"]': { "vertical-align": "middle" },
          'mjx-mtd[rowalign="bottom"]': { "vertical-align": "bottom" },
          'mjx-mtd[rowalign="baseline"]': { "vertical-align": "baseline" },
          'mjx-mtd[rowalign="axis"]': { "vertical-align": ".25em" },
        };
        return e;
      })((0, o.CommonMtdMixin)(n.CHTMLWrapper));
      e.CHTMLmtd = s;
    },
    90659: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmtext = void 0;
      var n = r(81129);
      var o = r(84894);
      var a = r(86237);
      var s = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.kind = a.MmlMtext.prototype.kind;
        return e;
      })((0, o.CommonMtextMixin)(n.CHTMLWrapper));
      e.CHTMLmtext = s;
    },
    93594: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmlabeledtr = e.CHTMLmtr = void 0;
      var n = r(81129);
      var o = r(79598);
      var a = r(79598);
      var s = r(2117);
      var l = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (e) {
          t.prototype.toCHTML.call(this, e);
          var r = this.node.attributes.get("rowalign");
          if (r !== "baseline") {
            this.adaptor.setAttribute(this.chtml, "rowalign", r);
          }
        };
        e.kind = s.MmlMtr.prototype.kind;
        e.styles = {
          "mjx-mtr": { display: "table-row" },
          'mjx-mtr[rowalign="top"] > mjx-mtd': { "vertical-align": "top" },
          'mjx-mtr[rowalign="center"] > mjx-mtd': { "vertical-align": "middle" },
          'mjx-mtr[rowalign="bottom"] > mjx-mtd': { "vertical-align": "bottom" },
          'mjx-mtr[rowalign="baseline"] > mjx-mtd': { "vertical-align": "baseline" },
          'mjx-mtr[rowalign="axis"] > mjx-mtd': { "vertical-align": ".25em" },
        };
        return e;
      })((0, o.CommonMtrMixin)(n.CHTMLWrapper));
      e.CHTMLmtr = l;
      var h = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (e) {
          t.prototype.toCHTML.call(this, e);
          var r = this.adaptor.firstChild(this.chtml);
          if (r) {
            this.adaptor.remove(r);
            var i = this.node.attributes.get("rowalign");
            var n = i !== "baseline" && i !== "axis" ? { rowalign: i } : {};
            var o = this.html("mjx-mtr", n, [r]);
            this.adaptor.append(this.parent.labels, o);
          }
        };
        e.prototype.markUsed = function () {
          t.prototype.markUsed.call(this);
          this.jax.wrapperUsage.add(l.kind);
        };
        e.kind = s.MmlMlabeledtr.prototype.kind;
        e.styles = {
          "mjx-mlabeledtr": { display: "table-row" },
          'mjx-mlabeledtr[rowalign="top"] > mjx-mtd': { "vertical-align": "top" },
          'mjx-mlabeledtr[rowalign="center"] > mjx-mtd': { "vertical-align": "middle" },
          'mjx-mlabeledtr[rowalign="bottom"] > mjx-mtd': { "vertical-align": "bottom" },
          'mjx-mlabeledtr[rowalign="baseline"] > mjx-mtd': { "vertical-align": "baseline" },
          'mjx-mlabeledtr[rowalign="axis"] > mjx-mtd': { "vertical-align": ".25em" },
        };
        return e;
      })((0, a.CommonMlabeledtrMixin)(l));
      e.CHTMLmlabeledtr = h;
    },
    94987: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLmunderover = e.CHTMLmover = e.CHTMLmunder = void 0;
      var n = r(37717);
      var o = r(17358);
      var a = r(17358);
      var s = r(17358);
      var l = r(75723);
      var h = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (e) {
          if (this.hasMovableLimits()) {
            t.prototype.toCHTML.call(this, e);
            this.adaptor.setAttribute(this.chtml, "limits", "false");
            return;
          }
          this.chtml = this.standardCHTMLnode(e);
          var r = this.adaptor.append(this.adaptor.append(this.chtml, this.html("mjx-row")), this.html("mjx-base"));
          var i = this.adaptor.append(this.adaptor.append(this.chtml, this.html("mjx-row")), this.html("mjx-under"));
          this.baseChild.toCHTML(r);
          this.scriptChild.toCHTML(i);
          var n = this.baseChild.getOuterBBox();
          var o = this.scriptChild.getOuterBBox();
          var a = this.getUnderKV(n, o)[0];
          var s = this.isLineBelow ? 0 : this.getDelta(true);
          this.adaptor.setStyle(i, "paddingTop", this.em(a));
          this.setDeltaW([r, i], this.getDeltaW([n, o], [0, -s]));
          this.adjustUnderDepth(i, o);
        };
        e.kind = l.MmlMunder.prototype.kind;
        e.styles = {
          "mjx-over": { "text-align": "left" },
          'mjx-munder:not([limits="false"])': { display: "inline-table" },
          "mjx-munder > mjx-row": { "text-align": "left" },
          "mjx-under": { "padding-bottom": ".1em" },
        };
        return e;
      })((0, o.CommonMunderMixin)(n.CHTMLmsub));
      e.CHTMLmunder = h;
      var c = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (e) {
          if (this.hasMovableLimits()) {
            t.prototype.toCHTML.call(this, e);
            this.adaptor.setAttribute(this.chtml, "limits", "false");
            return;
          }
          this.chtml = this.standardCHTMLnode(e);
          var r = this.adaptor.append(this.chtml, this.html("mjx-over"));
          var i = this.adaptor.append(this.chtml, this.html("mjx-base"));
          this.scriptChild.toCHTML(r);
          this.baseChild.toCHTML(i);
          var n = this.scriptChild.getOuterBBox();
          var o = this.baseChild.getOuterBBox();
          this.adjustBaseHeight(i, o);
          var a = this.getOverKU(o, n)[0];
          var s = this.isLineAbove ? 0 : this.getDelta();
          this.adaptor.setStyle(r, "paddingBottom", this.em(a));
          this.setDeltaW([i, r], this.getDeltaW([o, n], [0, s]));
          this.adjustOverDepth(r, n);
        };
        e.kind = l.MmlMover.prototype.kind;
        e.styles = {
          'mjx-mover:not([limits="false"])': { "padding-top": ".1em" },
          'mjx-mover:not([limits="false"]) > *': { display: "block", "text-align": "left" },
        };
        return e;
      })((0, a.CommonMoverMixin)(n.CHTMLmsup));
      e.CHTMLmover = c;
      var u = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (e) {
          if (this.hasMovableLimits()) {
            t.prototype.toCHTML.call(this, e);
            this.adaptor.setAttribute(this.chtml, "limits", "false");
            return;
          }
          this.chtml = this.standardCHTMLnode(e);
          var r = this.adaptor.append(this.chtml, this.html("mjx-over"));
          var i = this.adaptor.append(this.adaptor.append(this.chtml, this.html("mjx-box")), this.html("mjx-munder"));
          var n = this.adaptor.append(this.adaptor.append(i, this.html("mjx-row")), this.html("mjx-base"));
          var o = this.adaptor.append(this.adaptor.append(i, this.html("mjx-row")), this.html("mjx-under"));
          this.overChild.toCHTML(r);
          this.baseChild.toCHTML(n);
          this.underChild.toCHTML(o);
          var a = this.overChild.getOuterBBox();
          var s = this.baseChild.getOuterBBox();
          var l = this.underChild.getOuterBBox();
          this.adjustBaseHeight(n, s);
          var h = this.getOverKU(s, a)[0];
          var c = this.getUnderKV(s, l)[0];
          var u = this.getDelta();
          this.adaptor.setStyle(r, "paddingBottom", this.em(h));
          this.adaptor.setStyle(o, "paddingTop", this.em(c));
          this.setDeltaW([n, o, r], this.getDeltaW([s, l, a], [0, this.isLineBelow ? 0 : -u, this.isLineAbove ? 0 : u]));
          this.adjustOverDepth(r, a);
          this.adjustUnderDepth(o, l);
        };
        e.prototype.markUsed = function () {
          t.prototype.markUsed.call(this);
          this.jax.wrapperUsage.add(n.CHTMLmsubsup.kind);
        };
        e.kind = l.MmlMunderover.prototype.kind;
        e.styles = {
          'mjx-munderover:not([limits="false"])': { "padding-top": ".1em" },
          'mjx-munderover:not([limits="false"]) > *': { display: "block" },
        };
        return e;
      })((0, s.CommonMunderoverMixin)(n.CHTMLmsubsup));
      e.CHTMLmunderover = u;
    },
    90949: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var o =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLscriptbase = void 0;
      var a = r(81129);
      var s = r(78214);
      var l = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (t) {
          this.chtml = this.standardCHTMLnode(t);
          var e = n(this.getOffset(), 2),
            r = e[0],
            i = e[1];
          var o = r - (this.baseRemoveIc ? this.baseIc : 0);
          var a = { "vertical-align": this.em(i) };
          if (o) {
            a["margin-left"] = this.em(o);
          }
          this.baseChild.toCHTML(this.chtml);
          this.scriptChild.toCHTML(this.adaptor.append(this.chtml, this.html("mjx-script", { style: a })));
        };
        e.prototype.setDeltaW = function (t, e) {
          for (var r = 0; r < e.length; r++) {
            if (e[r]) {
              this.adaptor.setStyle(t[r], "paddingLeft", this.em(e[r]));
            }
          }
        };
        e.prototype.adjustOverDepth = function (t, e) {
          if (e.d >= 0) return;
          this.adaptor.setStyle(t, "marginBottom", this.em(e.d * e.rscale));
        };
        e.prototype.adjustUnderDepth = function (t, e) {
          var r, i;
          if (e.d >= 0) return;
          var n = this.adaptor;
          var a = this.em(e.d);
          var s = this.html("mjx-box", { style: { "margin-bottom": a, "vertical-align": a } });
          try {
            for (var l = o(n.childNodes(n.firstChild(t))), h = l.next(); !h.done; h = l.next()) {
              var c = h.value;
              n.append(s, c);
            }
          } catch (u) {
            r = { error: u };
          } finally {
            try {
              if (h && !h.done && (i = l.return)) i.call(l);
            } finally {
              if (r) throw r.error;
            }
          }
          n.append(n.firstChild(t), s);
        };
        e.prototype.adjustBaseHeight = function (t, e) {
          if (this.node.attributes.get("accent")) {
            var r = this.font.params.x_height * e.scale;
            if (e.h < r) {
              this.adaptor.setStyle(t, "paddingTop", this.em(r - e.h));
              e.h = r;
            }
          }
        };
        e.kind = "scriptbase";
        return e;
      })((0, s.CommonScriptbaseMixin)(a.CHTMLWrapper));
      e.CHTMLscriptbase = l;
    },
    8044: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CHTMLxml = e.CHTMLannotationXML = e.CHTMLannotation = e.CHTMLsemantics = void 0;
      var n = r(81129);
      var o = r(44974);
      var a = r(19223);
      var s = r(18426);
      var l = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (t) {
          var e = this.standardCHTMLnode(t);
          if (this.childNodes.length) {
            this.childNodes[0].toCHTML(e);
          }
        };
        e.kind = a.MmlSemantics.prototype.kind;
        return e;
      })((0, o.CommonSemanticsMixin)(n.CHTMLWrapper));
      e.CHTMLsemantics = l;
      var h = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (e) {
          t.prototype.toCHTML.call(this, e);
        };
        e.prototype.computeBBox = function () {
          return this.bbox;
        };
        e.kind = a.MmlAnnotation.prototype.kind;
        return e;
      })(n.CHTMLWrapper);
      e.CHTMLannotation = h;
      var c = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.kind = a.MmlAnnotationXML.prototype.kind;
        e.styles = { "mjx-annotation-xml": { "font-family": "initial", "line-height": "normal" } };
        return e;
      })(n.CHTMLWrapper);
      e.CHTMLannotationXML = c;
      var u = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.toCHTML = function (t) {
          this.chtml = this.adaptor.append(t, this.adaptor.clone(this.node.getXML()));
        };
        e.prototype.computeBBox = function (t, e) {
          if (e === void 0) {
            e = false;
          }
          var r = this.jax.measureXMLnode(this.node.getXML()),
            i = r.w,
            n = r.h,
            o = r.d;
          t.w = i;
          t.h = n;
          t.d = o;
        };
        e.prototype.getStyles = function () {};
        e.prototype.getScale = function () {};
        e.prototype.getVariant = function () {};
        e.kind = s.XMLNode.prototype.kind;
        e.autoStyle = false;
        return e;
      })(n.CHTMLWrapper);
      e.CHTMLxml = u;
    },
    77988: function (t, e) {
      var r =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonArrow =
        e.CommonDiagonalArrow =
        e.CommonDiagonalStrike =
        e.CommonBorder2 =
        e.CommonBorder =
        e.arrowBBox =
        e.diagonalArrowDef =
        e.arrowDef =
        e.arrowBBoxW =
        e.arrowBBoxHD =
        e.arrowHead =
        e.fullBorder =
        e.fullPadding =
        e.fullBBox =
        e.sideNames =
        e.sideIndex =
        e.SOLID =
        e.PADDING =
        e.THICKNESS =
        e.ARROWY =
        e.ARROWDX =
        e.ARROWX =
          void 0;
      (e.ARROWX = 4), (e.ARROWDX = 1), (e.ARROWY = 2);
      e.THICKNESS = 0.067;
      e.PADDING = 0.2;
      e.SOLID = e.THICKNESS + "em solid";
      e.sideIndex = { top: 0, right: 1, bottom: 2, left: 3 };
      e.sideNames = Object.keys(e.sideIndex);
      e.fullBBox = function (t) {
        return new Array(4).fill(t.thickness + t.padding);
      };
      e.fullPadding = function (t) {
        return new Array(4).fill(t.padding);
      };
      e.fullBorder = function (t) {
        return new Array(4).fill(t.thickness);
      };
      var i = function (t) {
        return Math.max(t.padding, t.thickness * (t.arrowhead.x + t.arrowhead.dx + 1));
      };
      e.arrowHead = i;
      var n = function (t, e) {
        if (t.childNodes[0]) {
          var r = t.childNodes[0].getBBox(),
            i = r.h,
            n = r.d;
          e[0] = e[2] = Math.max(0, t.thickness * t.arrowhead.y - (i + n) / 2);
        }
        return e;
      };
      e.arrowBBoxHD = n;
      var o = function (t, e) {
        if (t.childNodes[0]) {
          var r = t.childNodes[0].getBBox().w;
          e[1] = e[3] = Math.max(0, t.thickness * t.arrowhead.y - r / 2);
        }
        return e;
      };
      e.arrowBBoxW = o;
      e.arrowDef = {
        up: [-Math.PI / 2, false, true, "verticalstrike"],
        down: [Math.PI / 2, false, true, "verticakstrike"],
        right: [0, false, false, "horizontalstrike"],
        left: [Math.PI, false, false, "horizontalstrike"],
        updown: [Math.PI / 2, true, true, "verticalstrike uparrow downarrow"],
        leftright: [0, true, false, "horizontalstrike leftarrow rightarrow"],
      };
      e.diagonalArrowDef = {
        updiagonal: [-1, 0, false, "updiagonalstrike northeastarrow"],
        northeast: [-1, 0, false, "updiagonalstrike updiagonalarrow"],
        southeast: [1, 0, false, "downdiagonalstrike"],
        northwest: [1, Math.PI, false, "downdiagonalstrike"],
        southwest: [-1, Math.PI, false, "updiagonalstrike"],
        northeastsouthwest: [-1, 0, true, "updiagonalstrike northeastarrow updiagonalarrow southwestarrow"],
        northwestsoutheast: [1, 0, true, "downdiagonalstrike northwestarrow southeastarrow"],
      };
      e.arrowBBox = {
        up: function (t) {
          return (0, e.arrowBBoxW)(t, [(0, e.arrowHead)(t), 0, t.padding, 0]);
        },
        down: function (t) {
          return (0, e.arrowBBoxW)(t, [t.padding, 0, (0, e.arrowHead)(t), 0]);
        },
        right: function (t) {
          return (0, e.arrowBBoxHD)(t, [0, (0, e.arrowHead)(t), 0, t.padding]);
        },
        left: function (t) {
          return (0, e.arrowBBoxHD)(t, [0, t.padding, 0, (0, e.arrowHead)(t)]);
        },
        updown: function (t) {
          return (0, e.arrowBBoxW)(t, [(0, e.arrowHead)(t), 0, (0, e.arrowHead)(t), 0]);
        },
        leftright: function (t) {
          return (0, e.arrowBBoxHD)(t, [0, (0, e.arrowHead)(t), 0, (0, e.arrowHead)(t)]);
        },
      };
      var a = function (t) {
        return function (r) {
          var i = e.sideIndex[r];
          return [
            r,
            {
              renderer: t,
              bbox: function (t) {
                var e = [0, 0, 0, 0];
                e[i] = t.thickness + t.padding;
                return e;
              },
              border: function (t) {
                var e = [0, 0, 0, 0];
                e[i] = t.thickness;
                return e;
              },
            },
          ];
        };
      };
      e.CommonBorder = a;
      var s = function (t) {
        return function (r, i, n) {
          var o = e.sideIndex[i];
          var a = e.sideIndex[n];
          return [
            r,
            {
              renderer: t,
              bbox: function (t) {
                var e = t.thickness + t.padding;
                var r = [0, 0, 0, 0];
                r[o] = r[a] = e;
                return r;
              },
              border: function (t) {
                var e = [0, 0, 0, 0];
                e[o] = e[a] = t.thickness;
                return e;
              },
              remove: i + " " + n,
            },
          ];
        };
      };
      e.CommonBorder2 = s;
      var l = function (t) {
        return function (r) {
          var i = "mjx-" + r.charAt(0) + "strike";
          return [r + "diagonalstrike", { renderer: t(i), bbox: e.fullBBox }];
        };
      };
      e.CommonDiagonalStrike = l;
      var h = function (t) {
        return function (i) {
          var n = r(e.diagonalArrowDef[i], 4),
            o = n[0],
            a = n[1],
            s = n[2],
            l = n[3];
          return [
            i + "arrow",
            {
              renderer: function (e, i) {
                var n = r(e.arrowAW(), 2),
                  l = n[0],
                  h = n[1];
                var c = e.arrow(h, o * (l - a), s);
                t(e, c);
              },
              bbox: function (t) {
                var e = t.arrowData(),
                  i = e.a,
                  n = e.x,
                  o = e.y;
                var a = r([t.arrowhead.x, t.arrowhead.y, t.arrowhead.dx], 3),
                  s = a[0],
                  l = a[1],
                  h = a[2];
                var c = r(t.getArgMod(s + h, l), 2),
                  u = c[0],
                  f = c[1];
                var p = o + (u > i ? t.thickness * f * Math.sin(u - i) : 0);
                var d = n + (u > Math.PI / 2 - i ? t.thickness * f * Math.sin(u + i - Math.PI / 2) : 0);
                return [p, d, p, d];
              },
              remove: l,
            },
          ];
        };
      };
      e.CommonDiagonalArrow = h;
      var c = function (t) {
        return function (i) {
          var n = r(e.arrowDef[i], 4),
            o = n[0],
            a = n[1],
            s = n[2],
            l = n[3];
          return [
            i + "arrow",
            {
              renderer: function (e, i) {
                var n = e.getBBox(),
                  l = n.w,
                  h = n.h,
                  c = n.d;
                var u = r(s ? [h + c, "X"] : [l, "Y"], 2),
                  f = u[0],
                  p = u[1];
                var d = e.getOffset(p);
                var y = e.arrow(f, o, a, p, d);
                t(e, y);
              },
              bbox: e.arrowBBox[i],
              remove: l,
            },
          ];
        };
      };
      e.CommonArrow = c;
    },
    90247: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__assign) ||
        function () {
          n =
            Object.assign ||
            function (t) {
              for (var e, r = 1, i = arguments.length; r < i; r++) {
                e = arguments[r];
                for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) t[n] = e[n];
              }
              return t;
            };
          return n.apply(this, arguments);
        };
      var o =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var a =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonOutputJax = void 0;
      var s = r(73290);
      var l = r(59719);
      var h = r(36059);
      var c = r(77130);
      var u = r(30502);
      var f = r(24219);
      var p = (function (t) {
        i(e, t);
        function e(e, r, i) {
          if (e === void 0) {
            e = null;
          }
          if (r === void 0) {
            r = null;
          }
          if (i === void 0) {
            i = null;
          }
          var n = this;
          var a = o((0, h.separateOptions)(e, i.OPTIONS), 2),
            s = a[0],
            l = a[1];
          n = t.call(this, s) || this;
          n.factory = n.options.wrapperFactory || new r();
          n.factory.jax = n;
          n.cssStyles = n.options.cssStyles || new f.CssStyles();
          n.font = n.options.font || new i(l);
          n.unknownCache = new Map();
          return n;
        }
        e.prototype.typeset = function (t, e) {
          this.setDocument(e);
          var r = this.createNode();
          this.toDOM(t, r, e);
          return r;
        };
        e.prototype.createNode = function () {
          var t = this.constructor.NAME;
          return this.html("mjx-container", { class: "MathJax", jax: t });
        };
        e.prototype.setScale = function (t) {
          var e = this.math.metrics.scale * this.options.scale;
          if (e !== 1) {
            this.adaptor.setStyle(t, "fontSize", (0, c.percent)(e));
          }
        };
        e.prototype.toDOM = function (t, e, r) {
          if (r === void 0) {
            r = null;
          }
          this.setDocument(r);
          this.math = t;
          this.pxPerEm = t.metrics.ex / this.font.params.x_height;
          t.root.setTeXclass(null);
          this.setScale(e);
          this.nodeMap = new Map();
          this.container = e;
          this.processMath(t.root, e);
          this.nodeMap = null;
          this.executeFilters(this.postFilters, t, r, e);
        };
        e.prototype.getBBox = function (t, e) {
          this.setDocument(e);
          this.math = t;
          t.root.setTeXclass(null);
          this.nodeMap = new Map();
          var r = this.factory.wrap(t.root).getOuterBBox();
          this.nodeMap = null;
          return r;
        };
        e.prototype.getMetrics = function (t) {
          var e, r;
          this.setDocument(t);
          var i = this.adaptor;
          var n = this.getMetricMaps(t);
          try {
            for (var o = a(t.math), s = o.next(); !s.done; s = o.next()) {
              var h = s.value;
              var c = i.parent(h.start.node);
              if (h.state() < l.STATE.METRICS && c) {
                var u = n[h.display ? 1 : 0];
                var f = u.get(c),
                  p = f.em,
                  d = f.ex,
                  y = f.containerWidth,
                  v = f.lineWidth,
                  m = f.scale,
                  b = f.family;
                h.setMetrics(p, d, y, v, m);
                if (this.options.mtextInheritFont) {
                  h.outputData.mtextFamily = b;
                }
                if (this.options.merrorInheritFont) {
                  h.outputData.merrorFamily = b;
                }
                h.state(l.STATE.METRICS);
              }
            }
          } catch (g) {
            e = { error: g };
          } finally {
            try {
              if (s && !s.done && (r = o.return)) r.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
        };
        e.prototype.getMetricsFor = function (t, e) {
          var r = this.options.mtextInheritFont || this.options.merrorInheritFont;
          var i = this.getTestElement(t, e);
          var n = this.measureMetrics(i, r);
          this.adaptor.remove(i);
          return n;
        };
        e.prototype.getMetricMaps = function (t) {
          var e, r, i, n, o, s, h, c, u, f;
          var p = this.adaptor;
          var d = [new Map(), new Map()];
          try {
            for (var y = a(t.math), v = y.next(); !v.done; v = y.next()) {
              var m = v.value;
              var b = p.parent(m.start.node);
              if (b && m.state() < l.STATE.METRICS) {
                var g = d[m.display ? 1 : 0];
                if (!g.has(b)) {
                  g.set(b, this.getTestElement(b, m.display));
                }
              }
            }
          } catch (H) {
            e = { error: H };
          } finally {
            try {
              if (v && !v.done && (r = y.return)) r.call(y);
            } finally {
              if (e) throw e.error;
            }
          }
          var x = this.options.mtextInheritFont || this.options.merrorInheritFont;
          var w = [new Map(), new Map()];
          try {
            for (var _ = a(w.keys()), M = _.next(); !M.done; M = _.next()) {
              var j = M.value;
              try {
                for (var C = ((o = void 0), a(d[j].keys())), S = C.next(); !S.done; S = C.next()) {
                  var b = S.value;
                  w[j].set(b, this.measureMetrics(d[j].get(b), x));
                }
              } catch (A) {
                o = { error: A };
              } finally {
                try {
                  if (S && !S.done && (s = C.return)) s.call(C);
                } finally {
                  if (o) throw o.error;
                }
              }
            }
          } catch (P) {
            i = { error: P };
          } finally {
            try {
              if (M && !M.done && (n = _.return)) n.call(_);
            } finally {
              if (i) throw i.error;
            }
          }
          try {
            for (var O = a(w.keys()), T = O.next(); !T.done; T = O.next()) {
              var j = T.value;
              try {
                for (var B = ((u = void 0), a(d[j].values())), L = B.next(); !L.done; L = B.next()) {
                  var b = L.value;
                  p.remove(b);
                }
              } catch (k) {
                u = { error: k };
              } finally {
                try {
                  if (L && !L.done && (f = B.return)) f.call(B);
                } finally {
                  if (u) throw u.error;
                }
              }
            }
          } catch (N) {
            h = { error: N };
          } finally {
            try {
              if (T && !T.done && (c = O.return)) c.call(O);
            } finally {
              if (h) throw h.error;
            }
          }
          return w;
        };
        e.prototype.getTestElement = function (t, e) {
          var r = this.adaptor;
          if (!this.testInline) {
            this.testInline = this.html(
              "mjx-test",
              {
                style: {
                  display: "inline-block",
                  width: "100%",
                  "font-style": "normal",
                  "font-weight": "normal",
                  "font-size": "100%",
                  "font-size-adjust": "none",
                  "text-indent": 0,
                  "text-transform": "none",
                  "letter-spacing": "normal",
                  "word-spacing": "normal",
                  overflow: "hidden",
                  height: "1px",
                  "margin-right": "-1px",
                },
              },
              [
                this.html("mjx-left-box", { style: { display: "inline-block", width: 0, float: "left" } }),
                this.html("mjx-ex-box", { style: { position: "absolute", overflow: "hidden", width: "1px", height: "60ex" } }),
                this.html("mjx-right-box", { style: { display: "inline-block", width: 0, float: "right" } }),
              ]
            );
            this.testDisplay = r.clone(this.testInline);
            r.setStyle(this.testDisplay, "display", "table");
            r.setStyle(this.testDisplay, "margin-right", "");
            r.setStyle(r.firstChild(this.testDisplay), "display", "none");
            var i = r.lastChild(this.testDisplay);
            r.setStyle(i, "display", "table-cell");
            r.setStyle(i, "width", "10000em");
            r.setStyle(i, "float", "");
          }
          return r.append(t, r.clone(e ? this.testDisplay : this.testInline));
        };
        e.prototype.measureMetrics = function (t, e) {
          var r = this.adaptor;
          var i = e ? r.fontFamily(t) : "";
          var n = r.fontSize(t);
          var a = o(r.nodeSize(r.childNode(t, 1)), 2),
            s = a[0],
            l = a[1];
          var h = s ? l / 60 : n * this.options.exFactor;
          var c = !s
            ? 1e6
            : r.getStyle(t, "display") === "table"
              ? r.nodeSize(r.lastChild(t))[0] - 1
              : r.nodeBBox(r.lastChild(t)).left - r.nodeBBox(r.firstChild(t)).left - 2;
          var u = Math.max(this.options.minScale, this.options.matchFontHeight ? h / this.font.params.x_height / n : 1);
          var f = 1e6;
          return { em: n, ex: h, containerWidth: c, lineWidth: f, scale: u, family: i };
        };
        e.prototype.styleSheet = function (t) {
          var e, r;
          this.setDocument(t);
          this.cssStyles.clear();
          this.cssStyles.addStyles(this.constructor.commonStyles);
          if ("getStyles" in t) {
            try {
              for (var i = a(t.getStyles()), n = i.next(); !n.done; n = i.next()) {
                var o = n.value;
                this.cssStyles.addStyles(o);
              }
            } catch (l) {
              e = { error: l };
            } finally {
              try {
                if (n && !n.done && (r = i.return)) r.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
          }
          this.addWrapperStyles(this.cssStyles);
          this.addFontStyles(this.cssStyles);
          var s = this.html("style", { id: "MJX-styles" }, [this.text("\n" + this.cssStyles.cssText + "\n")]);
          return s;
        };
        e.prototype.addFontStyles = function (t) {
          t.addStyles(this.font.styles);
        };
        e.prototype.addWrapperStyles = function (t) {
          var e, r;
          try {
            for (var i = a(this.factory.getKinds()), n = i.next(); !n.done; n = i.next()) {
              var o = n.value;
              this.addClassStyles(this.factory.getNodeClass(o), t);
            }
          } catch (s) {
            e = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i.return)) r.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
        };
        e.prototype.addClassStyles = function (t, e) {
          e.addStyles(t.styles);
        };
        e.prototype.setDocument = function (t) {
          if (t) {
            this.document = t;
            this.adaptor.document = t.document;
          }
        };
        e.prototype.html = function (t, e, r, i) {
          if (e === void 0) {
            e = {};
          }
          if (r === void 0) {
            r = [];
          }
          return this.adaptor.node(t, e, r, i);
        };
        e.prototype.text = function (t) {
          return this.adaptor.text(t);
        };
        e.prototype.fixed = function (t, e) {
          if (e === void 0) {
            e = 3;
          }
          if (Math.abs(t) < 6e-4) {
            return "0";
          }
          return t.toFixed(e).replace(/\.?0+$/, "");
        };
        e.prototype.measureText = function (t, e, r) {
          if (r === void 0) {
            r = ["", false, false];
          }
          var i = this.unknownText(t, e);
          if (e === "-explicitFont") {
            var n = this.cssFontStyles(r);
            this.adaptor.setAttributes(i, { style: n });
          }
          return this.measureTextNodeWithCache(i, t, e, r);
        };
        e.prototype.measureTextNodeWithCache = function (t, e, r, i) {
          if (i === void 0) {
            i = ["", false, false];
          }
          if (r === "-explicitFont") {
            r = [i[0], i[1] ? "T" : "F", i[2] ? "T" : "F", ""].join("-");
          }
          if (!this.unknownCache.has(r)) {
            this.unknownCache.set(r, new Map());
          }
          var n = this.unknownCache.get(r);
          var o = n.get(e);
          if (o) return o;
          var a = this.measureTextNode(t);
          n.set(e, a);
          return a;
        };
        e.prototype.measureXMLnode = function (t) {
          var e = this.adaptor;
          var r = this.html("mjx-xml-block", { style: { display: "inline-block" } }, [e.clone(t)]);
          var i = this.html("mjx-baseline", { style: { display: "inline-block", width: 0, height: 0 } });
          var n = { position: "absolute", display: "inline-block", "font-family": "initial", "line-height": "normal" };
          var o = this.html("mjx-measure-xml", { style: n }, [i, r]);
          e.append(e.parent(this.math.start.node), this.container);
          e.append(this.container, o);
          var a = this.math.metrics.em * this.math.metrics.scale;
          var s = e.nodeBBox(r),
            l = s.left,
            h = s.right,
            c = s.bottom,
            u = s.top;
          var f = (h - l) / a;
          var p = (e.nodeBBox(i).top - u) / a;
          var d = (c - u) / a - p;
          e.remove(this.container);
          e.remove(o);
          return { w: f, h: p, d };
        };
        e.prototype.cssFontStyles = function (t, e) {
          if (e === void 0) {
            e = {};
          }
          var r = o(t, 3),
            i = r[0],
            n = r[1],
            a = r[2];
          e["font-family"] = this.font.getFamily(i);
          if (n) e["font-style"] = "italic";
          if (a) e["font-weight"] = "bold";
          return e;
        };
        e.prototype.getFontData = function (t) {
          if (!t) {
            t = new u.Styles();
          }
          return [this.font.getFamily(t.get("font-family")), t.get("font-style") === "italic", t.get("font-weight") === "bold"];
        };
        e.NAME = "Common";
        e.OPTIONS = n(n({}, s.AbstractOutputJax.OPTIONS), {
          scale: 1,
          minScale: 0.5,
          mtextInheritFont: false,
          merrorInheritFont: false,
          mtextFont: "",
          merrorFont: "serif",
          mathmlSpacing: false,
          skipAttributes: {},
          exFactor: 0.5,
          displayAlign: "center",
          displayIndent: "0",
          wrapperFactory: null,
          font: null,
          cssStyles: null,
        });
        e.commonStyles = {};
        return e;
      })(s.AbstractOutputJax);
      e.CommonOutputJax = p;
    },
    56757: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, e, r, i) {
              if (i === undefined) i = r;
              var n = Object.getOwnPropertyDescriptor(e, r);
              if (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) {
                n = {
                  enumerable: true,
                  get: function () {
                    return e[r];
                  },
                };
              }
              Object.defineProperty(t, i, n);
            }
          : function (t, e, r, i) {
              if (i === undefined) i = r;
              t[i] = e[r];
            });
      var o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (t, e) {
              Object.defineProperty(t, "default", { enumerable: true, value: e });
            }
          : function (t, e) {
              t["default"] = e;
            });
      var a =
        (this && this.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (t != null) for (var r in t) if (r !== "default" && Object.prototype.hasOwnProperty.call(t, r)) n(e, t, r);
          o(e, t);
          return e;
        };
      var s =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var l =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var h =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonWrapper = void 0;
      var c = r(96301);
      var u = r(18426);
      var f = r(33353);
      var p = a(r(77130));
      var d = r(30502);
      var y = r(83292);
      var v = r(88284);
      var m = 2 / 18;
      function b(t, e) {
        return t ? (e < m ? 0 : m) : e;
      }
      var g = (function (t) {
        i(e, t);
        function e(e, r, i) {
          if (i === void 0) {
            i = null;
          }
          var n = t.call(this, e, r) || this;
          n.parent = null;
          n.removedStyles = null;
          n.styles = null;
          n.variant = "";
          n.bboxComputed = false;
          n.stretch = v.NOSTRETCH;
          n.font = null;
          n.parent = i;
          n.font = e.jax.font;
          n.bbox = y.BBox.zero();
          n.getStyles();
          n.getVariant();
          n.getScale();
          n.getSpace();
          n.childNodes = r.childNodes.map(function (t) {
            var e = n.wrap(t);
            if (e.bbox.pwidth && (r.notParent || r.isKind("math"))) {
              n.bbox.pwidth = y.BBox.fullWidth;
            }
            return e;
          });
          return n;
        }
        Object.defineProperty(e.prototype, "jax", {
          get: function () {
            return this.factory.jax;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "adaptor", {
          get: function () {
            return this.factory.jax.adaptor;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "metrics", {
          get: function () {
            return this.factory.jax.math.metrics;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "fixesPWidth", {
          get: function () {
            return !this.node.notParent && !this.node.isToken;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.wrap = function (t, e) {
          if (e === void 0) {
            e = null;
          }
          var r = this.factory.wrap(t, e || this);
          if (e) {
            e.childNodes.push(r);
          }
          this.jax.nodeMap.set(t, r);
          return r;
        };
        e.prototype.getBBox = function (t) {
          if (t === void 0) {
            t = true;
          }
          if (this.bboxComputed) {
            return this.bbox;
          }
          var e = t ? this.bbox : y.BBox.zero();
          this.computeBBox(e);
          this.bboxComputed = t;
          return e;
        };
        e.prototype.getOuterBBox = function (t) {
          var e, r;
          if (t === void 0) {
            t = true;
          }
          var i = this.getBBox(t);
          if (!this.styles) return i;
          var n = new y.BBox();
          Object.assign(n, i);
          try {
            for (var o = s(y.BBox.StyleAdjust), a = o.next(); !a.done; a = o.next()) {
              var h = l(a.value, 2),
                c = h[0],
                u = h[1];
              var f = this.styles.get(c);
              if (f) {
                n[u] += this.length2em(f, 1, n.rscale);
              }
            }
          } catch (p) {
            e = { error: p };
          } finally {
            try {
              if (a && !a.done && (r = o.return)) r.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
          return n;
        };
        e.prototype.computeBBox = function (t, e) {
          var r, i;
          if (e === void 0) {
            e = false;
          }
          t.empty();
          try {
            for (var n = s(this.childNodes), o = n.next(); !o.done; o = n.next()) {
              var a = o.value;
              t.append(a.getOuterBBox());
            }
          } catch (l) {
            r = { error: l };
          } finally {
            try {
              if (o && !o.done && (i = n.return)) i.call(n);
            } finally {
              if (r) throw r.error;
            }
          }
          t.clean();
          if (this.fixesPWidth && this.setChildPWidths(e)) {
            this.computeBBox(t, true);
          }
        };
        e.prototype.setChildPWidths = function (t, e, r) {
          var i, n;
          if (e === void 0) {
            e = null;
          }
          if (r === void 0) {
            r = true;
          }
          if (t) {
            return false;
          }
          if (r) {
            this.bbox.pwidth = "";
          }
          var o = false;
          try {
            for (var a = s(this.childNodes), l = a.next(); !l.done; l = a.next()) {
              var h = l.value;
              var c = h.getOuterBBox();
              if (c.pwidth && h.setChildPWidths(t, e === null ? c.w : e, r)) {
                o = true;
              }
            }
          } catch (u) {
            i = { error: u };
          } finally {
            try {
              if (l && !l.done && (n = a.return)) n.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        };
        e.prototype.invalidateBBox = function () {
          if (this.bboxComputed) {
            this.bboxComputed = false;
            if (this.parent) {
              this.parent.invalidateBBox();
            }
          }
        };
        e.prototype.copySkewIC = function (t) {
          var e = this.childNodes[0];
          if (e === null || e === void 0 ? void 0 : e.bbox.sk) {
            t.sk = e.bbox.sk;
          }
          if (e === null || e === void 0 ? void 0 : e.bbox.dx) {
            t.dx = e.bbox.dx;
          }
          var r = this.childNodes[this.childNodes.length - 1];
          if (r === null || r === void 0 ? void 0 : r.bbox.ic) {
            t.ic = r.bbox.ic;
            t.w += t.ic;
          }
        };
        e.prototype.getStyles = function () {
          var t = this.node.attributes.getExplicit("style");
          if (!t) return;
          var r = (this.styles = new d.Styles(t));
          for (var i = 0, n = e.removeStyles.length; i < n; i++) {
            var o = e.removeStyles[i];
            if (r.get(o)) {
              if (!this.removedStyles) this.removedStyles = {};
              this.removedStyles[o] = r.get(o);
              r.set(o, "");
            }
          }
        };
        e.prototype.getVariant = function () {
          if (!this.node.isToken) return;
          var t = this.node.attributes;
          var r = t.get("mathvariant");
          if (!t.getExplicit("mathvariant")) {
            var i = t.getList("fontfamily", "fontweight", "fontstyle");
            if (this.removedStyles) {
              var n = this.removedStyles;
              if (n.fontFamily) i.family = n.fontFamily;
              if (n.fontWeight) i.weight = n.fontWeight;
              if (n.fontStyle) i.style = n.fontStyle;
            }
            if (i.fontfamily) i.family = i.fontfamily;
            if (i.fontweight) i.weight = i.fontweight;
            if (i.fontstyle) i.style = i.fontstyle;
            if (i.weight && i.weight.match(/^\d+$/)) {
              i.weight = parseInt(i.weight) > 600 ? "bold" : "normal";
            }
            if (i.family) {
              r = this.explicitVariant(i.family, i.weight, i.style);
            } else {
              if (this.node.getProperty("variantForm")) r = "-tex-variant";
              r = (e.BOLDVARIANTS[i.weight] || {})[r] || r;
              r = (e.ITALICVARIANTS[i.style] || {})[r] || r;
            }
          }
          this.variant = r;
        };
        e.prototype.explicitVariant = function (t, e, r) {
          var i = this.styles;
          if (!i) i = this.styles = new d.Styles();
          i.set("fontFamily", t);
          if (e) i.set("fontWeight", e);
          if (r) i.set("fontStyle", r);
          return "-explicitFont";
        };
        e.prototype.getScale = function () {
          var t = 1,
            e = this.parent;
          var r = e ? e.bbox.scale : 1;
          var i = this.node.attributes;
          var n = Math.min(i.get("scriptlevel"), 2);
          var o = i.get("fontsize");
          var a = this.node.isToken || this.node.isKind("mstyle") ? i.get("mathsize") : i.getInherited("mathsize");
          if (n !== 0) {
            t = Math.pow(i.get("scriptsizemultiplier"), n);
            var s = this.length2em(i.get("scriptminsize"), 0.8, 1);
            if (t < s) t = s;
          }
          if (this.removedStyles && this.removedStyles.fontSize && !o) {
            o = this.removedStyles.fontSize;
          }
          if (o && !i.getExplicit("mathsize")) {
            a = o;
          }
          if (a !== "1") {
            t *= this.length2em(a, 1, 1);
          }
          this.bbox.scale = t;
          this.bbox.rscale = t / r;
        };
        e.prototype.getSpace = function () {
          var t = this.isTopEmbellished();
          var e = this.node.hasSpacingAttributes();
          if (this.jax.options.mathmlSpacing || e) {
            t && this.getMathMLSpacing();
          } else {
            this.getTeXSpacing(t, e);
          }
        };
        e.prototype.getMathMLSpacing = function () {
          var t = this.node.coreMO();
          var e = t.coreParent();
          var r = e.parent;
          if (!r || !r.isKind("mrow") || r.childNodes.length === 1) return;
          var i = t.attributes;
          var n = i.get("scriptlevel") > 0;
          this.bbox.L = i.isSet("lspace") ? Math.max(0, this.length2em(i.get("lspace"))) : b(n, t.lspace);
          this.bbox.R = i.isSet("rspace") ? Math.max(0, this.length2em(i.get("rspace"))) : b(n, t.rspace);
          var o = r.childIndex(e);
          if (o === 0) return;
          var a = r.childNodes[o - 1];
          if (!a.isEmbellished) return;
          var s = this.jax.nodeMap.get(a).getBBox();
          if (s.R) {
            this.bbox.L = Math.max(0, this.bbox.L - s.R);
          }
        };
        e.prototype.getTeXSpacing = function (t, e) {
          if (!e) {
            var r = this.node.texSpacing();
            if (r) {
              this.bbox.L = this.length2em(r);
            }
          }
          if (t || e) {
            var i = this.node.coreMO().attributes;
            if (i.isSet("lspace")) {
              this.bbox.L = Math.max(0, this.length2em(i.get("lspace")));
            }
            if (i.isSet("rspace")) {
              this.bbox.R = Math.max(0, this.length2em(i.get("rspace")));
            }
          }
        };
        e.prototype.isTopEmbellished = function () {
          return this.node.isEmbellished && !(this.node.parent && this.node.parent.isEmbellished);
        };
        e.prototype.core = function () {
          return this.jax.nodeMap.get(this.node.core());
        };
        e.prototype.coreMO = function () {
          return this.jax.nodeMap.get(this.node.coreMO());
        };
        e.prototype.getText = function () {
          var t, e;
          var r = "";
          if (this.node.isToken) {
            try {
              for (var i = s(this.node.childNodes), n = i.next(); !n.done; n = i.next()) {
                var o = n.value;
                if (o instanceof u.TextNode) {
                  r += o.getText();
                }
              }
            } catch (a) {
              t = { error: a };
            } finally {
              try {
                if (n && !n.done && (e = i.return)) e.call(i);
              } finally {
                if (t) throw t.error;
              }
            }
          }
          return r;
        };
        e.prototype.canStretch = function (t) {
          this.stretch = v.NOSTRETCH;
          if (this.node.isEmbellished) {
            var e = this.core();
            if (e && e.node !== this.node) {
              if (e.canStretch(t)) {
                this.stretch = e.stretch;
              }
            }
          }
          return this.stretch.dir !== 0;
        };
        e.prototype.getAlignShift = function () {
          var t;
          var e = (t = this.node.attributes).getList.apply(t, h([], l(u.indentAttributes), false)),
            r = e.indentalign,
            i = e.indentshift,
            n = e.indentalignfirst,
            o = e.indentshiftfirst;
          if (n !== "indentalign") {
            r = n;
          }
          if (r === "auto") {
            r = this.jax.options.displayAlign;
          }
          if (o !== "indentshift") {
            i = o;
          }
          if (i === "auto") {
            i = this.jax.options.displayIndent;
            if (r === "right" && !i.match(/^\s*0[a-z]*\s*$/)) {
              i = ("-" + i.trim()).replace(/^--/, "");
            }
          }
          var a = this.length2em(i, this.metrics.containerWidth);
          return [r, a];
        };
        e.prototype.getAlignX = function (t, e, r) {
          return r === "right" ? t - (e.w + e.R) * e.rscale : r === "left" ? e.L * e.rscale : (t - e.w * e.rscale) / 2;
        };
        e.prototype.getAlignY = function (t, e, r, i, n) {
          return n === "top" ? t - r : n === "bottom" ? i - e : n === "center" ? (t - r - (e - i)) / 2 : 0;
        };
        e.prototype.getWrapWidth = function (t) {
          return this.childNodes[t].getBBox().w;
        };
        e.prototype.getChildAlign = function (t) {
          return "left";
        };
        e.prototype.percent = function (t) {
          return p.percent(t);
        };
        e.prototype.em = function (t) {
          return p.em(t);
        };
        e.prototype.px = function (t, e) {
          if (e === void 0) {
            e = -p.BIGDIMEN;
          }
          return p.px(t, e, this.metrics.em);
        };
        e.prototype.length2em = function (t, e, r) {
          if (e === void 0) {
            e = 1;
          }
          if (r === void 0) {
            r = null;
          }
          if (r === null) {
            r = this.bbox.scale;
          }
          return p.length2em(t, e, r, this.jax.pxPerEm);
        };
        e.prototype.unicodeChars = function (t, e) {
          if (e === void 0) {
            e = this.variant;
          }
          var r = (0, f.unicodeChars)(t);
          var i = this.font.getVariant(e);
          if (i && i.chars) {
            var n = i.chars;
            r = r.map(function (t) {
              return ((n[t] || [])[3] || {}).smp || t;
            });
          }
          return r;
        };
        e.prototype.remapChars = function (t) {
          return t;
        };
        e.prototype.mmlText = function (t) {
          return this.node.factory.create("text").setText(t);
        };
        e.prototype.mmlNode = function (t, e, r) {
          if (e === void 0) {
            e = {};
          }
          if (r === void 0) {
            r = [];
          }
          return this.node.factory.create(t, e, r);
        };
        e.prototype.createMo = function (t) {
          var e = this.node.factory;
          var r = e.create("text").setText(t);
          var i = e.create("mo", { stretchy: true }, [r]);
          i.inheritAttributesFrom(this.node);
          var n = this.wrap(i);
          n.parent = this;
          return n;
        };
        e.prototype.getVariantChar = function (t, e) {
          var r = this.font.getChar(t, e) || [0, 0, 0, { unknown: true }];
          if (r.length === 3) {
            r[3] = {};
          }
          return r;
        };
        e.kind = "unknown";
        e.styles = {};
        e.removeStyles = ["fontSize", "fontFamily", "fontWeight", "fontStyle", "fontVariant", "font"];
        e.skipAttributes = {
          fontfamily: true,
          fontsize: true,
          fontweight: true,
          fontstyle: true,
          color: true,
          background: true,
          class: true,
          href: true,
          style: true,
          xmlns: true,
        };
        e.BOLDVARIANTS = {
          bold: {
            normal: "bold",
            italic: "bold-italic",
            fraktur: "bold-fraktur",
            script: "bold-script",
            "sans-serif": "bold-sans-serif",
            "sans-serif-italic": "sans-serif-bold-italic",
          },
          normal: {
            bold: "normal",
            "bold-italic": "italic",
            "bold-fraktur": "fraktur",
            "bold-script": "script",
            "bold-sans-serif": "sans-serif",
            "sans-serif-bold-italic": "sans-serif-italic",
          },
        };
        e.ITALICVARIANTS = {
          italic: { normal: "italic", bold: "bold-italic", "sans-serif": "sans-serif-italic", "bold-sans-serif": "sans-serif-bold-italic" },
          normal: { italic: "normal", "bold-italic": "bold", "sans-serif-italic": "sans-serif", "sans-serif-bold-italic": "bold-sans-serif" },
        };
        return e;
      })(c.AbstractWrapper);
      e.CommonWrapper = g;
    },
    49557: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonWrapperFactory = void 0;
      var n = r(56586);
      var o = (function (t) {
        i(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.jax = null;
          return e;
        }
        Object.defineProperty(e.prototype, "Wrappers", {
          get: function () {
            return this.node;
          },
          enumerable: false,
          configurable: true,
        });
        e.defaultNodes = {};
        return e;
      })(n.AbstractWrapperFactory);
      e.CommonWrapperFactory = o;
    },
    28324: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonTeXAtomMixin = void 0;
      var n = r(18426);
      function o(t) {
        return (function (t) {
          i(e, t);
          function e() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          e.prototype.computeBBox = function (e, r) {
            if (r === void 0) {
              r = false;
            }
            t.prototype.computeBBox.call(this, e, r);
            if (this.childNodes[0] && this.childNodes[0].bbox.ic) {
              e.ic = this.childNodes[0].bbox.ic;
            }
            if (this.node.texClass === n.TEXCLASS.VCENTER) {
              var i = e.h,
                o = e.d;
              var a = this.font.params.axis_height;
              var s = (i + o) / 2 + a - i;
              e.h += s;
              e.d -= s;
            }
          };
          return e;
        })(t);
      }
      e.CommonTeXAtomMixin = o;
    },
    2169: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var i =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonTextNodeMixin = void 0;
      function o(t) {
        return (function (t) {
          r(e, t);
          function e() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          e.prototype.computeBBox = function (t, e) {
            var r, o;
            if (e === void 0) {
              e = false;
            }
            var a = this.parent.variant;
            var s = this.node.getText();
            if (a === "-explicitFont") {
              var l = this.jax.getFontData(this.parent.styles);
              var h = this.jax.measureText(s, a, l),
                c = h.w,
                u = h.h,
                f = h.d;
              t.h = u;
              t.d = f;
              t.w = c;
            } else {
              var p = this.remappedText(s, a);
              t.empty();
              try {
                for (var d = i(p), y = d.next(); !y.done; y = d.next()) {
                  var v = y.value;
                  var m = n(this.getVariantChar(a, v), 4),
                    u = m[0],
                    f = m[1],
                    c = m[2],
                    b = m[3];
                  if (b.unknown) {
                    var g = this.jax.measureText(String.fromCodePoint(v), a);
                    c = g.w;
                    u = g.h;
                    f = g.d;
                  }
                  t.w += c;
                  if (u > t.h) t.h = u;
                  if (f > t.d) t.d = f;
                  t.ic = b.ic || 0;
                  t.sk = b.sk || 0;
                  t.dx = b.dx || 0;
                }
              } catch (x) {
                r = { error: x };
              } finally {
                try {
                  if (y && !y.done && (o = d.return)) o.call(d);
                } finally {
                  if (r) throw r.error;
                }
              }
              if (p.length > 1) {
                t.sk = 0;
              }
              t.clean();
            }
          };
          e.prototype.remappedText = function (t, e) {
            var r = this.parent.stretch.c;
            return r ? [r] : this.parent.remapChars(this.unicodeChars(t, e));
          };
          e.prototype.getStyles = function () {};
          e.prototype.getVariant = function () {};
          e.prototype.getScale = function () {};
          e.prototype.getSpace = function () {};
          return e;
        })(t);
      }
      e.CommonTextNodeMixin = o;
    },
    86561: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var o =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMactionMixin = e.TooltipData = void 0;
      var a = r(33353);
      e.TooltipData = {
        dx: ".2em",
        dy: ".1em",
        postDelay: 600,
        clearDelay: 100,
        hoverTimer: new Map(),
        clearTimer: new Map(),
        stopTimers: function (t, e) {
          if (e.clearTimer.has(t)) {
            clearTimeout(e.clearTimer.get(t));
            e.clearTimer.delete(t);
          }
          if (e.hoverTimer.has(t)) {
            clearTimeout(e.hoverTimer.get(t));
            e.hoverTimer.delete(t);
          }
        },
      };
      function s(t) {
        return (function (t) {
          i(r, t);
          function r() {
            var e = [];
            for (var r = 0; r < arguments.length; r++) {
              e[r] = arguments[r];
            }
            var i = t.apply(this, o([], n(e), false)) || this;
            var a = i.constructor.actions;
            var s = i.node.attributes.get("actiontype");
            var l = n(a.get(s) || [function (t, e) {}, {}], 2),
              h = l[0],
              c = l[1];
            i.action = h;
            i.data = c;
            i.getParameters();
            return i;
          }
          Object.defineProperty(r.prototype, "selected", {
            get: function () {
              var t = this.node.attributes.get("selection");
              var e = Math.max(1, Math.min(this.childNodes.length, t)) - 1;
              return this.childNodes[e] || this.wrap(this.node.selected);
            },
            enumerable: false,
            configurable: true,
          });
          r.prototype.getParameters = function () {
            var t = this.node.attributes.get("data-offsets");
            var r = n((0, a.split)(t || ""), 2),
              i = r[0],
              o = r[1];
            this.dx = this.length2em(i || e.TooltipData.dx);
            this.dy = this.length2em(o || e.TooltipData.dy);
          };
          r.prototype.computeBBox = function (t, e) {
            if (e === void 0) {
              e = false;
            }
            t.updateFrom(this.selected.getOuterBBox());
            this.selected.setChildPWidths(e);
          };
          return r;
        })(t);
      }
      e.CommonMactionMixin = s;
    },
    68467: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMathMixin = void 0;
      function i(t) {
        return (function (t) {
          r(e, t);
          function e() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          e.prototype.getWrapWidth = function (t) {
            return this.parent ? this.getBBox().w : this.metrics.containerWidth / this.jax.pxPerEm;
          };
          return e;
        })(t);
      }
      e.CommonMathMixin = i;
    },
    32306: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, e, r, i) {
              if (i === undefined) i = r;
              var n = Object.getOwnPropertyDescriptor(e, r);
              if (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) {
                n = {
                  enumerable: true,
                  get: function () {
                    return e[r];
                  },
                };
              }
              Object.defineProperty(t, i, n);
            }
          : function (t, e, r, i) {
              if (i === undefined) i = r;
              t[i] = e[r];
            });
      var o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (t, e) {
              Object.defineProperty(t, "default", { enumerable: true, value: e });
            }
          : function (t, e) {
              t["default"] = e;
            });
      var a =
        (this && this.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (t != null) for (var r in t) if (r !== "default" && Object.prototype.hasOwnProperty.call(t, r)) n(e, t, r);
          o(e, t);
          return e;
        };
      var s =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var l =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      var h =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMencloseMixin = void 0;
      var c = a(r(77988));
      var u = r(33353);
      function f(t) {
        return (function (t) {
          i(e, t);
          function e() {
            var e = [];
            for (var r = 0; r < arguments.length; r++) {
              e[r] = arguments[r];
            }
            var i = t.apply(this, l([], s(e), false)) || this;
            i.notations = {};
            i.renderChild = null;
            i.msqrt = null;
            i.padding = c.PADDING;
            i.thickness = c.THICKNESS;
            i.arrowhead = { x: c.ARROWX, y: c.ARROWY, dx: c.ARROWDX };
            i.TRBL = [0, 0, 0, 0];
            i.getParameters();
            i.getNotations();
            i.removeRedundantNotations();
            i.initializeNotations();
            i.TRBL = i.getBBoxExtenders();
            return i;
          }
          e.prototype.getParameters = function () {
            var t = this.node.attributes;
            var e = t.get("data-padding");
            if (e !== undefined) {
              this.padding = this.length2em(e, c.PADDING);
            }
            var r = t.get("data-thickness");
            if (r !== undefined) {
              this.thickness = this.length2em(r, c.THICKNESS);
            }
            var i = t.get("data-arrowhead");
            if (i !== undefined) {
              var n = s((0, u.split)(i), 3),
                o = n[0],
                a = n[1],
                l = n[2];
              this.arrowhead = { x: o ? parseFloat(o) : c.ARROWX, y: a ? parseFloat(a) : c.ARROWY, dx: l ? parseFloat(l) : c.ARROWDX };
            }
          };
          e.prototype.getNotations = function () {
            var t, e;
            var r = this.constructor.notations;
            try {
              for (var i = h((0, u.split)(this.node.attributes.get("notation"))), n = i.next(); !n.done; n = i.next()) {
                var o = n.value;
                var a = r.get(o);
                if (a) {
                  this.notations[o] = a;
                  if (a.renderChild) {
                    this.renderChild = a.renderer;
                  }
                }
              }
            } catch (s) {
              t = { error: s };
            } finally {
              try {
                if (n && !n.done && (e = i.return)) e.call(i);
              } finally {
                if (t) throw t.error;
              }
            }
          };
          e.prototype.removeRedundantNotations = function () {
            var t, e, r, i;
            try {
              for (var n = h(Object.keys(this.notations)), o = n.next(); !o.done; o = n.next()) {
                var a = o.value;
                if (this.notations[a]) {
                  var s = this.notations[a].remove || "";
                  try {
                    for (var l = ((r = void 0), h(s.split(/ /))), c = l.next(); !c.done; c = l.next()) {
                      var u = c.value;
                      delete this.notations[u];
                    }
                  } catch (f) {
                    r = { error: f };
                  } finally {
                    try {
                      if (c && !c.done && (i = l.return)) i.call(l);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                }
              }
            } catch (p) {
              t = { error: p };
            } finally {
              try {
                if (o && !o.done && (e = n.return)) e.call(n);
              } finally {
                if (t) throw t.error;
              }
            }
          };
          e.prototype.initializeNotations = function () {
            var t, e;
            try {
              for (var r = h(Object.keys(this.notations)), i = r.next(); !i.done; i = r.next()) {
                var n = i.value;
                var o = this.notations[n].init;
                o && o(this);
              }
            } catch (a) {
              t = { error: a };
            } finally {
              try {
                if (i && !i.done && (e = r.return)) e.call(r);
              } finally {
                if (t) throw t.error;
              }
            }
          };
          e.prototype.computeBBox = function (t, e) {
            if (e === void 0) {
              e = false;
            }
            var r = s(this.TRBL, 4),
              i = r[0],
              n = r[1],
              o = r[2],
              a = r[3];
            var l = this.childNodes[0].getBBox();
            t.combine(l, a, 0);
            t.h += i;
            t.d += o;
            t.w += n;
            this.setChildPWidths(e);
          };
          e.prototype.getBBoxExtenders = function () {
            var t, e;
            var r = [0, 0, 0, 0];
            try {
              for (var i = h(Object.keys(this.notations)), n = i.next(); !n.done; n = i.next()) {
                var o = n.value;
                this.maximizeEntries(r, this.notations[o].bbox(this));
              }
            } catch (a) {
              t = { error: a };
            } finally {
              try {
                if (n && !n.done && (e = i.return)) e.call(i);
              } finally {
                if (t) throw t.error;
              }
            }
            return r;
          };
          e.prototype.getPadding = function () {
            var t, e;
            var r = this;
            var i = [0, 0, 0, 0];
            try {
              for (var n = h(Object.keys(this.notations)), o = n.next(); !o.done; o = n.next()) {
                var a = o.value;
                var s = this.notations[a].border;
                if (s) {
                  this.maximizeEntries(i, s(this));
                }
              }
            } catch (l) {
              t = { error: l };
            } finally {
              try {
                if (o && !o.done && (e = n.return)) e.call(n);
              } finally {
                if (t) throw t.error;
              }
            }
            return [0, 1, 2, 3].map(function (t) {
              return r.TRBL[t] - i[t];
            });
          };
          e.prototype.maximizeEntries = function (t, e) {
            for (var r = 0; r < t.length; r++) {
              if (t[r] < e[r]) {
                t[r] = e[r];
              }
            }
          };
          e.prototype.getOffset = function (t) {
            var e = s(this.TRBL, 4),
              r = e[0],
              i = e[1],
              n = e[2],
              o = e[3];
            var a = (t === "X" ? i - o : n - r) / 2;
            return Math.abs(a) > 0.001 ? a : 0;
          };
          e.prototype.getArgMod = function (t, e) {
            return [Math.atan2(e, t), Math.sqrt(t * t + e * e)];
          };
          e.prototype.arrow = function (t, e, r, i, n) {
            if (i === void 0) {
              i = "";
            }
            if (n === void 0) {
              n = 0;
            }
            return null;
          };
          e.prototype.arrowData = function () {
            var t = s([this.padding, this.thickness], 2),
              e = t[0],
              r = t[1];
            var i = r * (this.arrowhead.x + Math.max(1, this.arrowhead.dx));
            var n = this.childNodes[0].getBBox(),
              o = n.h,
              a = n.d,
              l = n.w;
            var h = o + a;
            var c = Math.sqrt(h * h + l * l);
            var u = Math.max(e, (i * l) / c);
            var f = Math.max(e, (i * h) / c);
            var p = s(this.getArgMod(l + 2 * u, h + 2 * f), 2),
              d = p[0],
              y = p[1];
            return { a: d, W: y, x: u, y: f };
          };
          e.prototype.arrowAW = function () {
            var t = this.childNodes[0].getBBox(),
              e = t.h,
              r = t.d,
              i = t.w;
            var n = s(this.TRBL, 4),
              o = n[0],
              a = n[1],
              l = n[2],
              h = n[3];
            return this.getArgMod(h + i + a, o + e + r + l);
          };
          e.prototype.createMsqrt = function (t) {
            var e = this.node.factory;
            var r = e.create("msqrt");
            r.inheritAttributesFrom(this.node);
            r.childNodes[0] = t.node;
            var i = this.wrap(r);
            i.parent = this;
            return i;
          };
          e.prototype.sqrtTRBL = function () {
            var t = this.msqrt.getBBox();
            var e = this.msqrt.childNodes[0].getBBox();
            return [t.h - e.h, 0, t.d - e.d, t.w - e.w];
          };
          return e;
        })(t);
      }
      e.CommonMencloseMixin = f;
    },
    5043: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var i =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var n =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      var o =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMfencedMixin = void 0;
      function a(t) {
        return (function (t) {
          r(e, t);
          function e() {
            var e = [];
            for (var r = 0; r < arguments.length; r++) {
              e[r] = arguments[r];
            }
            var o = t.apply(this, n([], i(e), false)) || this;
            o.mrow = null;
            o.createMrow();
            o.addMrowChildren();
            return o;
          }
          e.prototype.createMrow = function () {
            var t = this.node.factory;
            var e = t.create("inferredMrow");
            e.inheritAttributesFrom(this.node);
            this.mrow = this.wrap(e);
            this.mrow.parent = this;
          };
          e.prototype.addMrowChildren = function () {
            var t, e;
            var r = this.node;
            var i = this.mrow;
            this.addMo(r.open);
            if (this.childNodes.length) {
              i.childNodes.push(this.childNodes[0]);
            }
            var n = 0;
            try {
              for (var a = o(this.childNodes.slice(1)), s = a.next(); !s.done; s = a.next()) {
                var l = s.value;
                this.addMo(r.separators[n++]);
                i.childNodes.push(l);
              }
            } catch (h) {
              t = { error: h };
            } finally {
              try {
                if (s && !s.done && (e = a.return)) e.call(a);
              } finally {
                if (t) throw t.error;
              }
            }
            this.addMo(r.close);
            i.stretchChildren();
          };
          e.prototype.addMo = function (t) {
            if (!t) return;
            var e = this.wrap(t);
            this.mrow.childNodes.push(e);
            e.parent = this.mrow;
          };
          e.prototype.computeBBox = function (t, e) {
            if (e === void 0) {
              e = false;
            }
            t.updateFrom(this.mrow.getOuterBBox());
            this.setChildPWidths(e);
          };
          return e;
        })(t);
      }
      e.CommonMfencedMixin = a;
    },
    30811: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var i =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var n =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMfracMixin = void 0;
      function o(t) {
        return (function (t) {
          r(e, t);
          function e() {
            var e = [];
            for (var r = 0; r < arguments.length; r++) {
              e[r] = arguments[r];
            }
            var o = t.apply(this, n([], i(e), false)) || this;
            o.bevel = null;
            o.pad = o.node.getProperty("withDelims") ? 0 : o.font.params.nulldelimiterspace;
            if (o.node.attributes.get("bevelled")) {
              var a = o.getBevelData(o.isDisplay()).H;
              var s = (o.bevel = o.createMo("/"));
              s.node.attributes.set("symmetric", true);
              s.canStretch(1);
              s.getStretchedVariant([a], true);
            }
            return o;
          }
          e.prototype.computeBBox = function (t, e) {
            if (e === void 0) {
              e = false;
            }
            t.empty();
            var r = this.node.attributes.getList("linethickness", "bevelled"),
              i = r.linethickness,
              n = r.bevelled;
            var o = this.isDisplay();
            var a = null;
            if (n) {
              this.getBevelledBBox(t, o);
            } else {
              var s = this.length2em(String(i), 0.06);
              a = -2 * this.pad;
              if (s === 0) {
                this.getAtopBBox(t, o);
              } else {
                this.getFractionBBox(t, o, s);
                a -= 0.2;
              }
              a += t.w;
            }
            t.clean();
            this.setChildPWidths(e, a);
          };
          e.prototype.getFractionBBox = function (t, e, r) {
            var i = this.childNodes[0].getOuterBBox();
            var n = this.childNodes[1].getOuterBBox();
            var o = this.font.params;
            var a = o.axis_height;
            var s = this.getTUV(e, r),
              l = s.T,
              h = s.u,
              c = s.v;
            t.combine(i, 0, a + l + Math.max(i.d * i.rscale, h));
            t.combine(n, 0, a - l - Math.max(n.h * n.rscale, c));
            t.w += 2 * this.pad + 0.2;
          };
          e.prototype.getTUV = function (t, e) {
            var r = this.font.params;
            var i = r.axis_height;
            var n = (t ? 3.5 : 1.5) * e;
            return { T: (t ? 3.5 : 1.5) * e, u: (t ? r.num1 : r.num2) - i - n, v: (t ? r.denom1 : r.denom2) + i - n };
          };
          e.prototype.getAtopBBox = function (t, e) {
            var r = this.getUVQ(e),
              i = r.u,
              n = r.v,
              o = r.nbox,
              a = r.dbox;
            t.combine(o, 0, i);
            t.combine(a, 0, -n);
            t.w += 2 * this.pad;
          };
          e.prototype.getUVQ = function (t) {
            var e = this.childNodes[0].getOuterBBox();
            var r = this.childNodes[1].getOuterBBox();
            var n = this.font.params;
            var o = i(t ? [n.num1, n.denom1] : [n.num3, n.denom2], 2),
              a = o[0],
              s = o[1];
            var l = (t ? 7 : 3) * n.rule_thickness;
            var h = a - e.d * e.scale - (r.h * r.scale - s);
            if (h < l) {
              a += (l - h) / 2;
              s += (l - h) / 2;
              h = l;
            }
            return { u: a, v: s, q: h, nbox: e, dbox: r };
          };
          e.prototype.getBevelledBBox = function (t, e) {
            var r = this.getBevelData(e),
              i = r.u,
              n = r.v,
              o = r.delta,
              a = r.nbox,
              s = r.dbox;
            var l = this.bevel.getOuterBBox();
            t.combine(a, 0, i);
            t.combine(l, t.w - o / 2, 0);
            t.combine(s, t.w - o / 2, n);
          };
          e.prototype.getBevelData = function (t) {
            var e = this.childNodes[0].getOuterBBox();
            var r = this.childNodes[1].getOuterBBox();
            var i = t ? 0.4 : 0.15;
            var n = Math.max(e.scale * (e.h + e.d), r.scale * (r.h + r.d)) + 2 * i;
            var o = this.font.params.axis_height;
            var a = (e.scale * (e.d - e.h)) / 2 + o + i;
            var s = (r.scale * (r.d - r.h)) / 2 + o - i;
            return { H: n, delta: i, u: a, v: s, nbox: e, dbox: r };
          };
          e.prototype.canStretch = function (t) {
            return false;
          };
          e.prototype.isDisplay = function () {
            var t = this.node.attributes.getList("displaystyle", "scriptlevel"),
              e = t.displaystyle,
              r = t.scriptlevel;
            return e && r === 0;
          };
          e.prototype.getWrapWidth = function (t) {
            var e = this.node.attributes;
            if (e.get("bevelled")) {
              return this.childNodes[t].getOuterBBox().w;
            }
            var r = this.getBBox().w;
            var i = this.length2em(e.get("linethickness"));
            return r - (i ? 0.2 : 0) - 2 * this.pad;
          };
          e.prototype.getChildAlign = function (t) {
            var e = this.node.attributes;
            return e.get("bevelled") ? "left" : e.get(["numalign", "denomalign"][t]);
          };
          return e;
        })(t);
      }
      e.CommonMfracMixin = o;
    },
    981: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var i =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var n =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMglyphMixin = void 0;
      function o(t) {
        return (function (t) {
          r(e, t);
          function e() {
            var e = [];
            for (var r = 0; r < arguments.length; r++) {
              e[r] = arguments[r];
            }
            var o = t.apply(this, n([], i(e), false)) || this;
            o.getParameters();
            return o;
          }
          e.prototype.getParameters = function () {
            var t = this.node.attributes.getList("width", "height", "valign", "src", "index"),
              e = t.width,
              r = t.height,
              i = t.valign,
              n = t.src,
              o = t.index;
            if (n) {
              this.width = e === "auto" ? 1 : this.length2em(e);
              this.height = r === "auto" ? 1 : this.length2em(r);
              this.valign = this.length2em(i || "0");
            } else {
              var a = String.fromCodePoint(parseInt(o));
              var s = this.node.factory;
              this.charWrapper = this.wrap(s.create("text").setText(a));
              this.charWrapper.parent = this;
            }
          };
          e.prototype.computeBBox = function (t, e) {
            if (e === void 0) {
              e = false;
            }
            if (this.charWrapper) {
              t.updateFrom(this.charWrapper.getBBox());
            } else {
              t.w = this.width;
              t.h = this.height + this.valign;
              t.d = -this.valign;
            }
          };
          return e;
        })(t);
      }
      e.CommonMglyphMixin = o;
    },
    98296: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMiMixin = void 0;
      function i(t) {
        return (function (t) {
          r(e, t);
          function e() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          e.prototype.computeBBox = function (e, r) {
            if (r === void 0) {
              r = false;
            }
            t.prototype.computeBBox.call(this, e);
            this.copySkewIC(e);
          };
          return e;
        })(t);
      }
      e.CommonMiMixin = i;
    },
    86720: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var o =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      var a =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMmultiscriptsMixin = e.ScriptNames = e.NextScript = void 0;
      var s = r(83292);
      e.NextScript = { base: "subList", subList: "supList", supList: "subList", psubList: "psupList", psupList: "psubList" };
      e.ScriptNames = ["sup", "sup", "psup", "psub"];
      function l(t) {
        return (function (t) {
          i(r, t);
          function r() {
            var e = [];
            for (var r = 0; r < arguments.length; r++) {
              e[r] = arguments[r];
            }
            var i = t.apply(this, o([], n(e), false)) || this;
            i.scriptData = null;
            i.firstPrescript = 0;
            i.getScriptData();
            return i;
          }
          r.prototype.combinePrePost = function (t, e) {
            var r = new s.BBox(t);
            r.combine(e, 0, 0);
            return r;
          };
          r.prototype.computeBBox = function (t, e) {
            if (e === void 0) {
              e = false;
            }
            var r = this.font.params.scriptspace;
            var i = this.scriptData;
            var o = this.combinePrePost(i.sub, i.psub);
            var a = this.combinePrePost(i.sup, i.psup);
            var s = n(this.getUVQ(o, a), 2),
              l = s[0],
              h = s[1];
            t.empty();
            if (i.numPrescripts) {
              t.combine(i.psup, r, l);
              t.combine(i.psub, r, h);
            }
            t.append(i.base);
            if (i.numScripts) {
              var c = t.w;
              t.combine(i.sup, c, l);
              t.combine(i.sub, c, h);
              t.w += r;
            }
            t.clean();
            this.setChildPWidths(e);
          };
          r.prototype.getScriptData = function () {
            var t = (this.scriptData = {
              base: null,
              sub: s.BBox.empty(),
              sup: s.BBox.empty(),
              psub: s.BBox.empty(),
              psup: s.BBox.empty(),
              numPrescripts: 0,
              numScripts: 0,
            });
            var e = this.getScriptBBoxLists();
            this.combineBBoxLists(t.sub, t.sup, e.subList, e.supList);
            this.combineBBoxLists(t.psub, t.psup, e.psubList, e.psupList);
            t.base = e.base[0];
            t.numPrescripts = e.psubList.length;
            t.numScripts = e.subList.length;
          };
          r.prototype.getScriptBBoxLists = function () {
            var t, r;
            var i = { base: [], subList: [], supList: [], psubList: [], psupList: [] };
            var n = "base";
            try {
              for (var o = a(this.childNodes), s = o.next(); !s.done; s = o.next()) {
                var l = s.value;
                if (l.node.isKind("mprescripts")) {
                  n = "psubList";
                } else {
                  i[n].push(l.getOuterBBox());
                  n = e.NextScript[n];
                }
              }
            } catch (h) {
              t = { error: h };
            } finally {
              try {
                if (s && !s.done && (r = o.return)) r.call(o);
              } finally {
                if (t) throw t.error;
              }
            }
            this.firstPrescript = i.subList.length + i.supList.length + 2;
            this.padLists(i.subList, i.supList);
            this.padLists(i.psubList, i.psupList);
            return i;
          };
          r.prototype.padLists = function (t, e) {
            if (t.length > e.length) {
              e.push(s.BBox.empty());
            }
          };
          r.prototype.combineBBoxLists = function (t, e, r, i) {
            for (var o = 0; o < r.length; o++) {
              var a = n(this.getScaledWHD(r[o]), 3),
                s = a[0],
                l = a[1],
                h = a[2];
              var c = n(this.getScaledWHD(i[o]), 3),
                u = c[0],
                f = c[1],
                p = c[2];
              var d = Math.max(s, u);
              t.w += d;
              e.w += d;
              if (l > t.h) t.h = l;
              if (h > t.d) t.d = h;
              if (f > e.h) e.h = f;
              if (p > e.d) e.d = p;
            }
          };
          r.prototype.getScaledWHD = function (t) {
            var e = t.w,
              r = t.h,
              i = t.d,
              n = t.rscale;
            return [e * n, r * n, i * n];
          };
          r.prototype.getUVQ = function (e, r) {
            var i;
            if (!this.UVQ) {
              var o = n([0, 0, 0], 3),
                a = o[0],
                s = o[1],
                l = o[2];
              if (e.h === 0 && e.d === 0) {
                a = this.getU();
              } else if (r.h === 0 && r.d === 0) {
                a = -this.getV();
              } else {
                (i = n(t.prototype.getUVQ.call(this, e, r), 3)), (a = i[0]), (s = i[1]), (l = i[2]);
              }
              this.UVQ = [a, s, l];
            }
            return this.UVQ;
          };
          return r;
        })(t);
      }
      e.CommonMmultiscriptsMixin = l;
    },
    72309: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMnMixin = void 0;
      function i(t) {
        return (function (t) {
          r(e, t);
          function e() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          e.prototype.remapChars = function (t) {
            if (t.length) {
              var e = this.font.getRemappedChar("mn", t[0]);
              if (e) {
                var r = this.unicodeChars(e, this.variant);
                if (r.length === 1) {
                  t[0] = r[0];
                } else {
                  t = r.concat(t.slice(1));
                }
              }
            }
            return t;
          };
          return e;
        })(t);
      }
      e.CommonMnMixin = i;
    },
    9579: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__assign) ||
        function () {
          n =
            Object.assign ||
            function (t) {
              for (var e, r = 1, i = arguments.length; r < i; r++) {
                e = arguments[r];
                for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) t[n] = e[n];
              }
              return t;
            };
          return n.apply(this, arguments);
        };
      var o =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var a =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      var s =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var l;
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMoMixin = e.DirectionVH = void 0;
      var h = r(83292);
      var c = r(33353);
      var u = r(88284);
      e.DirectionVH = ((l = {}), (l[1] = "v"), (l[2] = "h"), l);
      function f(t) {
        return (function (t) {
          i(e, t);
          function e() {
            var e = [];
            for (var r = 0; r < arguments.length; r++) {
              e[r] = arguments[r];
            }
            var i = t.apply(this, a([], o(e), false)) || this;
            i.size = null;
            i.isAccent = i.node.isAccent;
            return i;
          }
          e.prototype.computeBBox = function (t, e) {
            if (e === void 0) {
              e = false;
            }
            this.protoBBox(t);
            if (this.node.attributes.get("symmetric") && this.stretch.dir !== 2) {
              var r = this.getCenterOffset(t);
              t.h += r;
              t.d -= r;
            }
            if (this.node.getProperty("mathaccent") && (this.stretch.dir === 0 || this.size >= 0)) {
              t.w = 0;
            }
          };
          e.prototype.protoBBox = function (e) {
            var r = this.stretch.dir !== 0;
            if (r && this.size === null) {
              this.getStretchedVariant([0]);
            }
            if (r && this.size < 0) return;
            t.prototype.computeBBox.call(this, e);
            this.copySkewIC(e);
          };
          e.prototype.getAccentOffset = function () {
            var t = h.BBox.empty();
            this.protoBBox(t);
            return -t.w / 2;
          };
          e.prototype.getCenterOffset = function (e) {
            if (e === void 0) {
              e = null;
            }
            if (!e) {
              e = h.BBox.empty();
              t.prototype.computeBBox.call(this, e);
            }
            return (e.h + e.d) / 2 + this.font.params.axis_height - e.h;
          };
          e.prototype.getVariant = function () {
            if (this.node.attributes.get("largeop")) {
              this.variant = this.node.attributes.get("displaystyle") ? "-largeop" : "-smallop";
              return;
            }
            if (!this.node.attributes.getExplicit("mathvariant") && this.node.getProperty("pseudoscript") === false) {
              this.variant = "-tex-variant";
              return;
            }
            t.prototype.getVariant.call(this);
          };
          e.prototype.canStretch = function (t) {
            if (this.stretch.dir !== 0) {
              return this.stretch.dir === t;
            }
            var e = this.node.attributes;
            if (!e.get("stretchy")) return false;
            var r = this.getText();
            if (Array.from(r).length !== 1) return false;
            var i = this.font.getDelimiter(r.codePointAt(0));
            this.stretch = i && i.dir === t ? i : u.NOSTRETCH;
            return this.stretch.dir !== 0;
          };
          e.prototype.getStretchedVariant = function (t, e) {
            var r, i;
            if (e === void 0) {
              e = false;
            }
            if (this.stretch.dir !== 0) {
              var o = this.getWH(t);
              var a = this.getSize("minsize", 0);
              var l = this.getSize("maxsize", Infinity);
              var h = this.node.getProperty("mathaccent");
              o = Math.max(a, Math.min(l, o));
              var c = this.font.params.delimiterfactor / 1e3;
              var u = this.font.params.delimitershortfall;
              var f = a || e ? o : h ? Math.min(o / c, o + u) : Math.max(o * c, o - u);
              var p = this.stretch;
              var d = p.c || this.getText().codePointAt(0);
              var y = 0;
              if (p.sizes) {
                try {
                  for (var v = s(p.sizes), m = v.next(); !m.done; m = v.next()) {
                    var b = m.value;
                    if (b >= f) {
                      if (h && y) {
                        y--;
                      }
                      this.variant = this.font.getSizeVariant(d, y);
                      this.size = y;
                      if (p.schar && p.schar[y]) {
                        this.stretch = n(n({}, this.stretch), { c: p.schar[y] });
                      }
                      return;
                    }
                    y++;
                  }
                } catch (g) {
                  r = { error: g };
                } finally {
                  try {
                    if (m && !m.done && (i = v.return)) i.call(v);
                  } finally {
                    if (r) throw r.error;
                  }
                }
              }
              if (p.stretch) {
                this.size = -1;
                this.invalidateBBox();
                this.getStretchBBox(t, this.checkExtendedHeight(o, p), p);
              } else {
                this.variant = this.font.getSizeVariant(d, y - 1);
                this.size = y - 1;
              }
            }
          };
          e.prototype.getSize = function (t, e) {
            var r = this.node.attributes;
            if (r.isSet(t)) {
              e = this.length2em(r.get(t), 1, 1);
            }
            return e;
          };
          e.prototype.getWH = function (t) {
            if (t.length === 0) return 0;
            if (t.length === 1) return t[0];
            var e = o(t, 2),
              r = e[0],
              i = e[1];
            var n = this.font.params.axis_height;
            return this.node.attributes.get("symmetric") ? 2 * Math.max(r - n, i + n) : r + i;
          };
          e.prototype.getStretchBBox = function (t, e, r) {
            var i;
            if (r.hasOwnProperty("min") && r.min > e) {
              e = r.min;
            }
            var n = o(r.HDW, 3),
              a = n[0],
              s = n[1],
              l = n[2];
            if (this.stretch.dir === 1) {
              (i = o(this.getBaseline(t, e, r), 2)), (a = i[0]), (s = i[1]);
            } else {
              l = e;
            }
            this.bbox.h = a;
            this.bbox.d = s;
            this.bbox.w = l;
          };
          e.prototype.getBaseline = function (t, e, r) {
            var i = t.length === 2 && t[0] + t[1] === e;
            var n = this.node.attributes.get("symmetric");
            var a = o(i ? t : [e, 0], 2),
              s = a[0],
              l = a[1];
            var h = o([s + l, 0], 2),
              c = h[0],
              u = h[1];
            if (n) {
              var f = this.font.params.axis_height;
              if (i) {
                c = 2 * Math.max(s - f, l + f);
              }
              u = c / 2 - f;
            } else if (i) {
              u = l;
            } else {
              var p = o(r.HDW || [0.75, 0.25], 2),
                d = p[0],
                y = p[1];
              u = y * (c / (d + y));
            }
            return [c - u, u];
          };
          e.prototype.checkExtendedHeight = function (t, e) {
            if (e.fullExt) {
              var r = o(e.fullExt, 2),
                i = r[0],
                n = r[1];
              var a = Math.ceil(Math.max(0, t - n) / i);
              t = n + a * i;
            }
            return t;
          };
          e.prototype.remapChars = function (t) {
            var e = this.node.getProperty("primes");
            if (e) {
              return (0, c.unicodeChars)(e);
            }
            if (t.length === 1) {
              var r = this.node.coreParent().parent;
              var i = this.isAccent && !r.isKind("mrow");
              var n = i ? "accent" : "mo";
              var o = this.font.getRemappedChar(n, t[0]);
              if (o) {
                t = this.unicodeChars(o, this.variant);
              }
            }
            return t;
          };
          return e;
        })(t);
      }
      e.CommonMoMixin = f;
    },
    50303: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var i =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMpaddedMixin = void 0;
      function n(t) {
        return (function (t) {
          r(e, t);
          function e() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          e.prototype.getDimens = function () {
            var t = this.node.attributes.getList("width", "height", "depth", "lspace", "voffset");
            var e = this.childNodes[0].getBBox();
            var r = e.w,
              i = e.h,
              n = e.d;
            var o = r,
              a = i,
              s = n,
              l = 0,
              h = 0,
              c = 0;
            if (t.width !== "") r = this.dimen(t.width, e, "w", 0);
            if (t.height !== "") i = this.dimen(t.height, e, "h", 0);
            if (t.depth !== "") n = this.dimen(t.depth, e, "d", 0);
            if (t.voffset !== "") h = this.dimen(t.voffset, e);
            if (t.lspace !== "") l = this.dimen(t.lspace, e);
            var u = this.node.attributes.get("data-align");
            if (u) {
              c = this.getAlignX(r, e, u);
            }
            return [a, s, o, i - a, n - s, r - o, l, h, c];
          };
          e.prototype.dimen = function (t, e, r, i) {
            if (r === void 0) {
              r = "";
            }
            if (i === void 0) {
              i = null;
            }
            t = String(t);
            var n = t.match(/width|height|depth/);
            var o = n ? e[n[0].charAt(0)] : r ? e[r] : 0;
            var a = this.length2em(t, o) || 0;
            if (t.match(/^[-+]/) && r) {
              a += o;
            }
            if (i != null) {
              a = Math.max(i, a);
            }
            return a;
          };
          e.prototype.computeBBox = function (t, e) {
            if (e === void 0) {
              e = false;
            }
            var r = i(this.getDimens(), 6),
              n = r[0],
              o = r[1],
              a = r[2],
              s = r[3],
              l = r[4],
              h = r[5];
            t.w = a + h;
            t.h = n + s;
            t.d = o + l;
            this.setChildPWidths(e, t.w);
          };
          e.prototype.getWrapWidth = function (t) {
            return this.getBBox().w;
          };
          e.prototype.getChildAlign = function (t) {
            return this.node.attributes.get("data-align") || "left";
          };
          return e;
        })(t);
      }
      e.CommonMpaddedMixin = n;
    },
    62315: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMrootMixin = void 0;
      function i(t) {
        return (function (t) {
          r(e, t);
          function e() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          Object.defineProperty(e.prototype, "surd", {
            get: function () {
              return 2;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(e.prototype, "root", {
            get: function () {
              return 1;
            },
            enumerable: false,
            configurable: true,
          });
          e.prototype.combineRootBBox = function (t, e, r) {
            var i = this.childNodes[this.root].getOuterBBox();
            var n = this.getRootDimens(e, r)[1];
            t.combine(i, 0, n);
          };
          e.prototype.getRootDimens = function (t, e) {
            var r = this.childNodes[this.surd];
            var i = this.childNodes[this.root].getOuterBBox();
            var n = (r.size < 0 ? 0.5 : 0.6) * t.w;
            var o = i.w,
              a = i.rscale;
            var s = Math.max(o, n / a);
            var l = Math.max(0, s - o);
            var h = this.rootHeight(i, t, r.size, e);
            var c = s * a - n;
            return [c, h, l];
          };
          e.prototype.rootHeight = function (t, e, r, i) {
            var n = e.h + e.d;
            var o = (r < 0 ? 1.9 : 0.55 * n) - (n - i);
            return o + Math.max(0, t.d * t.rscale);
          };
          return e;
        })(t);
      }
      e.CommonMrootMixin = i;
    },
    33257: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var o =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      var a =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonInferredMrowMixin = e.CommonMrowMixin = void 0;
      var s = r(83292);
      function l(t) {
        return (function (t) {
          i(e, t);
          function e() {
            var e, r;
            var i = [];
            for (var l = 0; l < arguments.length; l++) {
              i[l] = arguments[l];
            }
            var h = t.apply(this, o([], n(i), false)) || this;
            h.stretchChildren();
            try {
              for (var c = a(h.childNodes), u = c.next(); !u.done; u = c.next()) {
                var f = u.value;
                if (f.bbox.pwidth) {
                  h.bbox.pwidth = s.BBox.fullWidth;
                  break;
                }
              }
            } catch (p) {
              e = { error: p };
            } finally {
              try {
                if (u && !u.done && (r = c.return)) r.call(c);
              } finally {
                if (e) throw e.error;
              }
            }
            return h;
          }
          Object.defineProperty(e.prototype, "fixesPWidth", {
            get: function () {
              return false;
            },
            enumerable: false,
            configurable: true,
          });
          e.prototype.stretchChildren = function () {
            var t, e, r, i, n, o;
            var s = [];
            try {
              for (var l = a(this.childNodes), h = l.next(); !h.done; h = l.next()) {
                var c = h.value;
                if (c.canStretch(1)) {
                  s.push(c);
                }
              }
            } catch (C) {
              t = { error: C };
            } finally {
              try {
                if (h && !h.done && (e = l.return)) e.call(l);
              } finally {
                if (t) throw t.error;
              }
            }
            var u = s.length;
            var f = this.childNodes.length;
            if (u && f > 1) {
              var p = 0,
                d = 0;
              var y = u > 1 && u === f;
              try {
                for (var v = a(this.childNodes), m = v.next(); !m.done; m = v.next()) {
                  var c = m.value;
                  var b = c.stretch.dir === 0;
                  if (y || b) {
                    var g = c.getOuterBBox(b),
                      x = g.h,
                      w = g.d,
                      _ = g.rscale;
                    x *= _;
                    w *= _;
                    if (x > p) p = x;
                    if (w > d) d = w;
                  }
                }
              } catch (S) {
                r = { error: S };
              } finally {
                try {
                  if (m && !m.done && (i = v.return)) i.call(v);
                } finally {
                  if (r) throw r.error;
                }
              }
              try {
                for (var M = a(s), j = M.next(); !j.done; j = M.next()) {
                  var c = j.value;
                  c.coreMO().getStretchedVariant([p, d]);
                }
              } catch (O) {
                n = { error: O };
              } finally {
                try {
                  if (j && !j.done && (o = M.return)) o.call(M);
                } finally {
                  if (n) throw n.error;
                }
              }
            }
          };
          return e;
        })(t);
      }
      e.CommonMrowMixin = l;
      function h(t) {
        return (function (t) {
          i(e, t);
          function e() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          e.prototype.getScale = function () {
            this.bbox.scale = this.parent.bbox.scale;
            this.bbox.rscale = 1;
          };
          return e;
        })(t);
      }
      e.CommonInferredMrowMixin = h;
    },
    23745: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var i =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var n =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMsMixin = void 0;
      function o(t) {
        return (function (t) {
          r(e, t);
          function e() {
            var e = [];
            for (var r = 0; r < arguments.length; r++) {
              e[r] = arguments[r];
            }
            var o = t.apply(this, n([], i(e), false)) || this;
            var a = o.node.attributes;
            var s = a.getList("lquote", "rquote");
            if (o.variant !== "monospace") {
              if (!a.isSet("lquote") && s.lquote === '"') s.lquote = "“";
              if (!a.isSet("rquote") && s.rquote === '"') s.rquote = "”";
            }
            o.childNodes.unshift(o.createText(s.lquote));
            o.childNodes.push(o.createText(s.rquote));
            return o;
          }
          e.prototype.createText = function (t) {
            var e = this.wrap(this.mmlText(t));
            e.parent = this;
            return e;
          };
          return e;
        })(t);
      }
      e.CommonMsMixin = o;
    },
    84533: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMspaceMixin = void 0;
      function i(t) {
        return (function (t) {
          r(e, t);
          function e() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          e.prototype.computeBBox = function (t, e) {
            if (e === void 0) {
              e = false;
            }
            var r = this.node.attributes;
            t.w = this.length2em(r.get("width"), 0);
            t.h = this.length2em(r.get("height"), 0);
            t.d = this.length2em(r.get("depth"), 0);
          };
          e.prototype.handleVariant = function () {};
          return e;
        })(t);
      }
      e.CommonMspaceMixin = i;
    },
    29266: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var o =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMsqrtMixin = void 0;
      var a = r(83292);
      function s(t) {
        return (function (t) {
          i(e, t);
          function e() {
            var e = [];
            for (var r = 0; r < arguments.length; r++) {
              e[r] = arguments[r];
            }
            var i = t.apply(this, o([], n(e), false)) || this;
            var a = i.createMo("√");
            a.canStretch(1);
            var s = i.childNodes[i.base].getOuterBBox(),
              l = s.h,
              h = s.d;
            var c = i.font.params.rule_thickness;
            var u = i.node.attributes.get("displaystyle") ? i.font.params.x_height : c;
            i.surdH = l + h + 2 * c + u / 4;
            a.getStretchedVariant([i.surdH - h, h], true);
            return i;
          }
          Object.defineProperty(e.prototype, "base", {
            get: function () {
              return 0;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(e.prototype, "surd", {
            get: function () {
              return 1;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(e.prototype, "root", {
            get: function () {
              return null;
            },
            enumerable: false,
            configurable: true,
          });
          e.prototype.createMo = function (e) {
            var r = t.prototype.createMo.call(this, e);
            this.childNodes.push(r);
            return r;
          };
          e.prototype.computeBBox = function (t, e) {
            if (e === void 0) {
              e = false;
            }
            var r = this.childNodes[this.surd].getBBox();
            var i = new a.BBox(this.childNodes[this.base].getOuterBBox());
            var o = this.getPQ(r)[1];
            var s = this.font.params.rule_thickness;
            var l = i.h + o + s;
            var h = n(this.getRootDimens(r, l), 1),
              c = h[0];
            t.h = l + s;
            this.combineRootBBox(t, r, l);
            t.combine(r, c, l - r.h);
            t.combine(i, c + r.w, 0);
            t.clean();
            this.setChildPWidths(e);
          };
          e.prototype.combineRootBBox = function (t, e, r) {};
          e.prototype.getPQ = function (t) {
            var e = this.font.params.rule_thickness;
            var r = this.node.attributes.get("displaystyle") ? this.font.params.x_height : e;
            var i = t.h + t.d > this.surdH ? (t.h + t.d - (this.surdH - 2 * e - r / 2)) / 2 : e + r / 4;
            return [r, i];
          };
          e.prototype.getRootDimens = function (t, e) {
            return [0, 0, 0, 0];
          };
          return e;
        })(t);
      }
      e.CommonMsqrtMixin = s;
    },
    27726: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var i =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMsubsupMixin = e.CommonMsupMixin = e.CommonMsubMixin = void 0;
      function n(t) {
        var e;
        return (
          (e = (function (t) {
            r(e, t);
            function e() {
              return (t !== null && t.apply(this, arguments)) || this;
            }
            Object.defineProperty(e.prototype, "scriptChild", {
              get: function () {
                return this.childNodes[this.node.sub];
              },
              enumerable: false,
              configurable: true,
            });
            e.prototype.getOffset = function () {
              return [0, -this.getV()];
            };
            return e;
          })(t)),
          (e.useIC = false),
          e
        );
      }
      e.CommonMsubMixin = n;
      function o(t) {
        return (function (t) {
          r(e, t);
          function e() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          Object.defineProperty(e.prototype, "scriptChild", {
            get: function () {
              return this.childNodes[this.node.sup];
            },
            enumerable: false,
            configurable: true,
          });
          e.prototype.getOffset = function () {
            var t = this.getAdjustedIc() - (this.baseRemoveIc ? 0 : this.baseIc);
            return [t, this.getU()];
          };
          return e;
        })(t);
      }
      e.CommonMsupMixin = o;
      function a(t) {
        var e;
        return (
          (e = (function (t) {
            r(e, t);
            function e() {
              var e = (t !== null && t.apply(this, arguments)) || this;
              e.UVQ = null;
              return e;
            }
            Object.defineProperty(e.prototype, "subChild", {
              get: function () {
                return this.childNodes[this.node.sub];
              },
              enumerable: false,
              configurable: true,
            });
            Object.defineProperty(e.prototype, "supChild", {
              get: function () {
                return this.childNodes[this.node.sup];
              },
              enumerable: false,
              configurable: true,
            });
            e.prototype.computeBBox = function (t, e) {
              if (e === void 0) {
                e = false;
              }
              var r = this.baseChild.getOuterBBox();
              var n = i([this.subChild.getOuterBBox(), this.supChild.getOuterBBox()], 2),
                o = n[0],
                a = n[1];
              t.empty();
              t.append(r);
              var s = this.getBaseWidth();
              var l = this.getAdjustedIc();
              var h = i(this.getUVQ(), 2),
                c = h[0],
                u = h[1];
              t.combine(o, s, u);
              t.combine(a, s + l, c);
              t.w += this.font.params.scriptspace;
              t.clean();
              this.setChildPWidths(e);
            };
            e.prototype.getUVQ = function (t, e) {
              if (t === void 0) {
                t = this.subChild.getOuterBBox();
              }
              if (e === void 0) {
                e = this.supChild.getOuterBBox();
              }
              var r = this.baseCore.getOuterBBox();
              if (this.UVQ) return this.UVQ;
              var n = this.font.params;
              var o = 3 * n.rule_thickness;
              var a = this.length2em(this.node.attributes.get("subscriptshift"), n.sub2);
              var s = this.baseCharZero(r.d * this.baseScale + n.sub_drop * t.rscale);
              var l = i([this.getU(), Math.max(s, a)], 2),
                h = l[0],
                c = l[1];
              var u = h - e.d * e.rscale - (t.h * t.rscale - c);
              if (u < o) {
                c += o - u;
                var f = (4 / 5) * n.x_height - (h - e.d * e.rscale);
                if (f > 0) {
                  h += f;
                  c -= f;
                }
              }
              h = Math.max(this.length2em(this.node.attributes.get("superscriptshift"), h), h);
              c = Math.max(this.length2em(this.node.attributes.get("subscriptshift"), c), c);
              u = h - e.d * e.rscale - (t.h * t.rscale - c);
              this.UVQ = [h, -c, u];
              return this.UVQ;
            };
            return e;
          })(t)),
          (e.useIC = false),
          e
        );
      }
      e.CommonMsubsupMixin = a;
    },
    8747: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var o =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      var a =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMtableMixin = void 0;
      var s = r(83292);
      var l = r(33353);
      var h = r(72125);
      function c(t) {
        return (function (t) {
          i(e, t);
          function e() {
            var e = [];
            for (var r = 0; r < arguments.length; r++) {
              e[r] = arguments[r];
            }
            var i = t.apply(this, o([], n(e), false)) || this;
            i.numCols = 0;
            i.numRows = 0;
            i.data = null;
            i.pwidthCells = [];
            i.pWidth = 0;
            i.numCols = (0, h.max)(
              i.tableRows.map(function (t) {
                return t.numCells;
              })
            );
            i.numRows = i.childNodes.length;
            i.hasLabels = i.childNodes.reduce(function (t, e) {
              return t || e.node.isKind("mlabeledtr");
            }, false);
            i.findContainer();
            i.isTop = !i.container || (i.container.node.isKind("math") && !i.container.parent);
            if (i.isTop) {
              i.jax.table = i;
            }
            i.getPercentageWidth();
            var a = i.node.attributes;
            i.frame = a.get("frame") !== "none";
            i.fLine = i.frame && a.get("frame") ? 0.07 : 0;
            i.fSpace = i.frame ? i.convertLengths(i.getAttributeArray("framespacing")) : [0, 0];
            i.cSpace = i.convertLengths(i.getColumnAttributes("columnspacing"));
            i.rSpace = i.convertLengths(i.getRowAttributes("rowspacing"));
            i.cLines = i.getColumnAttributes("columnlines").map(function (t) {
              return t === "none" ? 0 : 0.07;
            });
            i.rLines = i.getRowAttributes("rowlines").map(function (t) {
              return t === "none" ? 0 : 0.07;
            });
            i.cWidths = i.getColumnWidths();
            i.stretchRows();
            i.stretchColumns();
            return i;
          }
          Object.defineProperty(e.prototype, "tableRows", {
            get: function () {
              return this.childNodes;
            },
            enumerable: false,
            configurable: true,
          });
          e.prototype.findContainer = function () {
            var t = this;
            var e = t.parent;
            while (e && (e.node.notParent || e.node.isKind("mrow"))) {
              t = e;
              e = e.parent;
            }
            this.container = e;
            this.containerI = t.node.childPosition();
          };
          e.prototype.getPercentageWidth = function () {
            if (this.hasLabels) {
              this.bbox.pwidth = s.BBox.fullWidth;
            } else {
              var t = this.node.attributes.get("width");
              if ((0, l.isPercent)(t)) {
                this.bbox.pwidth = t;
              }
            }
          };
          e.prototype.stretchRows = function () {
            var t = this.node.attributes.get("equalrows");
            var e = t ? this.getEqualRowHeight() : 0;
            var r = t ? this.getTableData() : { H: [0], D: [0] },
              i = r.H,
              n = r.D;
            var o = this.tableRows;
            for (var a = 0; a < this.numRows; a++) {
              var s = t ? [(e + i[a] - n[a]) / 2, (e - i[a] + n[a]) / 2] : null;
              o[a].stretchChildren(s);
            }
          };
          e.prototype.stretchColumns = function () {
            for (var t = 0; t < this.numCols; t++) {
              var e = typeof this.cWidths[t] === "number" ? this.cWidths[t] : null;
              this.stretchColumn(t, e);
            }
          };
          e.prototype.stretchColumn = function (t, e) {
            var r, i, n, o, s, l;
            var h = [];
            try {
              for (var c = a(this.tableRows), u = c.next(); !u.done; u = c.next()) {
                var f = u.value;
                var p = f.getChild(t);
                if (p) {
                  var d = p.childNodes[0];
                  if (d.stretch.dir === 0 && d.canStretch(2)) {
                    h.push(d);
                  }
                }
              }
            } catch (j) {
              r = { error: j };
            } finally {
              try {
                if (u && !u.done && (i = c.return)) i.call(c);
              } finally {
                if (r) throw r.error;
              }
            }
            var y = h.length;
            var v = this.childNodes.length;
            if (y && v > 1) {
              if (e === null) {
                e = 0;
                var m = y > 1 && y === v;
                try {
                  for (var b = a(this.tableRows), g = b.next(); !g.done; g = b.next()) {
                    var f = g.value;
                    var p = f.getChild(t);
                    if (p) {
                      var d = p.childNodes[0];
                      var x = d.stretch.dir === 0;
                      if (m || x) {
                        var w = d.getBBox(x).w;
                        if (w > e) {
                          e = w;
                        }
                      }
                    }
                  }
                } catch (C) {
                  n = { error: C };
                } finally {
                  try {
                    if (g && !g.done && (o = b.return)) o.call(b);
                  } finally {
                    if (n) throw n.error;
                  }
                }
              }
              try {
                for (var _ = a(h), M = _.next(); !M.done; M = _.next()) {
                  var d = M.value;
                  d.coreMO().getStretchedVariant([e]);
                }
              } catch (S) {
                s = { error: S };
              } finally {
                try {
                  if (M && !M.done && (l = _.return)) l.call(_);
                } finally {
                  if (s) throw s.error;
                }
              }
            }
          };
          e.prototype.getTableData = function () {
            if (this.data) {
              return this.data;
            }
            var t = new Array(this.numRows).fill(0);
            var e = new Array(this.numRows).fill(0);
            var r = new Array(this.numCols).fill(0);
            var i = new Array(this.numRows);
            var n = new Array(this.numRows);
            var o = [0];
            var a = this.tableRows;
            for (var s = 0; s < a.length; s++) {
              var l = 0;
              var h = a[s];
              var c = h.node.attributes.get("rowalign");
              for (var u = 0; u < h.numCells; u++) {
                var f = h.getChild(u);
                l = this.updateHDW(f, u, s, c, t, e, r, l);
                this.recordPWidthCell(f, u);
              }
              i[s] = t[s];
              n[s] = e[s];
              if (h.labeled) {
                l = this.updateHDW(h.childNodes[0], 0, s, c, t, e, o, l);
              }
              this.extendHD(s, t, e, l);
              this.extendHD(s, i, n, l);
            }
            var p = o[0];
            this.data = { H: t, D: e, W: r, NH: i, ND: n, L: p };
            return this.data;
          };
          e.prototype.updateHDW = function (t, e, r, i, n, o, a, s) {
            var l = t.getBBox(),
              h = l.h,
              c = l.d,
              u = l.w;
            var f = t.parent.bbox.rscale;
            if (t.parent.bbox.rscale !== 1) {
              h *= f;
              c *= f;
              u *= f;
            }
            if (this.node.getProperty("useHeight")) {
              if (h < 0.75) h = 0.75;
              if (c < 0.25) c = 0.25;
            }
            var p = 0;
            i = t.node.attributes.get("rowalign") || i;
            if (i !== "baseline" && i !== "axis") {
              p = h + c;
              h = c = 0;
            }
            if (h > n[r]) n[r] = h;
            if (c > o[r]) o[r] = c;
            if (p > s) s = p;
            if (a && u > a[e]) a[e] = u;
            return s;
          };
          e.prototype.extendHD = function (t, e, r, i) {
            var n = (i - (e[t] + r[t])) / 2;
            if (n < 1e-5) return;
            e[t] += n;
            r[t] += n;
          };
          e.prototype.recordPWidthCell = function (t, e) {
            if (t.childNodes[0] && t.childNodes[0].getBBox().pwidth) {
              this.pwidthCells.push([t, e]);
            }
          };
          e.prototype.computeBBox = function (t, e) {
            if (e === void 0) {
              e = false;
            }
            var r = this.getTableData(),
              i = r.H,
              o = r.D;
            var a, s;
            if (this.node.attributes.get("equalrows")) {
              var c = this.getEqualRowHeight();
              a = (0, h.sum)([].concat(this.rLines, this.rSpace)) + c * this.numRows;
            } else {
              a = (0, h.sum)(i.concat(o, this.rLines, this.rSpace));
            }
            a += 2 * (this.fLine + this.fSpace[1]);
            var u = this.getComputedWidths();
            s = (0, h.sum)(u.concat(this.cLines, this.cSpace)) + 2 * (this.fLine + this.fSpace[0]);
            var f = this.node.attributes.get("width");
            if (f !== "auto") {
              s = Math.max(this.length2em(f, 0) + 2 * this.fLine, s);
            }
            var p = n(this.getBBoxHD(a), 2),
              d = p[0],
              y = p[1];
            t.h = d;
            t.d = y;
            t.w = s;
            var v = n(this.getBBoxLR(), 2),
              m = v[0],
              b = v[1];
            t.L = m;
            t.R = b;
            if (!(0, l.isPercent)(f)) {
              this.setColumnPWidths();
            }
          };
          e.prototype.setChildPWidths = function (t, e, r) {
            var i = this.node.attributes.get("width");
            if (!(0, l.isPercent)(i)) return false;
            if (!this.hasLabels) {
              this.bbox.pwidth = "";
              this.container.bbox.pwidth = "";
            }
            var n = this.bbox,
              o = n.w,
              a = n.L,
              s = n.R;
            var c = this.node.attributes.get("data-width-includes-label");
            var u = Math.max(o, this.length2em(i, Math.max(e, a + o + s))) - (c ? a + s : 0);
            var f = this.node.attributes.get("equalcolumns")
              ? Array(this.numCols).fill(this.percent(1 / Math.max(1, this.numCols)))
              : this.getColumnAttributes("columnwidth", 0);
            this.cWidths = this.getColumnWidthsFixed(f, u);
            var p = this.getComputedWidths();
            this.pWidth = (0, h.sum)(p.concat(this.cLines, this.cSpace)) + 2 * (this.fLine + this.fSpace[0]);
            if (this.isTop) {
              this.bbox.w = this.pWidth;
            }
            this.setColumnPWidths();
            if (this.pWidth !== o) {
              this.parent.invalidateBBox();
            }
            return this.pWidth !== o;
          };
          e.prototype.setColumnPWidths = function () {
            var t, e;
            var r = this.cWidths;
            try {
              for (var i = a(this.pwidthCells), o = i.next(); !o.done; o = i.next()) {
                var s = n(o.value, 2),
                  l = s[0],
                  h = s[1];
                if (l.setChildPWidths(false, r[h])) {
                  l.invalidateBBox();
                  l.getBBox();
                }
              }
            } catch (c) {
              t = { error: c };
            } finally {
              try {
                if (o && !o.done && (e = i.return)) e.call(i);
              } finally {
                if (t) throw t.error;
              }
            }
          };
          e.prototype.getBBoxHD = function (t) {
            var e = n(this.getAlignmentRow(), 2),
              r = e[0],
              i = e[1];
            if (i === null) {
              var o = this.font.params.axis_height;
              var a = t / 2;
              var s = { top: [0, t], center: [a, a], bottom: [t, 0], baseline: [a, a], axis: [a + o, a - o] };
              return s[r] || [a, a];
            } else {
              var l = this.getVerticalPosition(i, r);
              return [l, t - l];
            }
          };
          e.prototype.getBBoxLR = function () {
            if (this.hasLabels) {
              var t = this.node.attributes;
              var e = t.get("side");
              var r = n(this.getPadAlignShift(e), 2),
                i = r[0],
                o = r[1];
              var a = this.hasLabels && !!t.get("data-width-includes-label");
              if (a && this.frame && this.fSpace[0]) {
                i -= this.fSpace[0];
              }
              return o === "center" && !a ? [i, i] : e === "left" ? [i, 0] : [0, i];
            }
            return [0, 0];
          };
          e.prototype.getPadAlignShift = function (t) {
            var e = this.getTableData().L;
            var r = this.length2em(this.node.attributes.get("minlabelspacing"));
            var i = e + r;
            var o = n(this.styles == null ? ["", ""] : [this.styles.get("padding-left"), this.styles.get("padding-right")], 2),
              a = o[0],
              s = o[1];
            if (a || s) {
              i = Math.max(i, this.length2em(a || "0"), this.length2em(s || "0"));
            }
            var l = n(this.getAlignShift(), 2),
              h = l[0],
              c = l[1];
            if (h === t) {
              c = t === "left" ? Math.max(i, c) - i : Math.min(-i, c) + i;
            }
            return [i, h, c];
          };
          e.prototype.getAlignShift = function () {
            return this.isTop ? t.prototype.getAlignShift.call(this) : [this.container.getChildAlign(this.containerI), 0];
          };
          e.prototype.getWidth = function () {
            return this.pWidth || this.getBBox().w;
          };
          e.prototype.getEqualRowHeight = function () {
            var t = this.getTableData(),
              e = t.H,
              r = t.D;
            var i = Array.from(e.keys()).map(function (t) {
              return e[t] + r[t];
            });
            return Math.max.apply(Math, i);
          };
          e.prototype.getComputedWidths = function () {
            var t = this;
            var e = this.getTableData().W;
            var r = Array.from(e.keys()).map(function (r) {
              return typeof t.cWidths[r] === "number" ? t.cWidths[r] : e[r];
            });
            if (this.node.attributes.get("equalcolumns")) {
              r = Array(r.length).fill((0, h.max)(r));
            }
            return r;
          };
          e.prototype.getColumnWidths = function () {
            var t = this.node.attributes.get("width");
            if (this.node.attributes.get("equalcolumns")) {
              return this.getEqualColumns(t);
            }
            var e = this.getColumnAttributes("columnwidth", 0);
            if (t === "auto") {
              return this.getColumnWidthsAuto(e);
            }
            if ((0, l.isPercent)(t)) {
              return this.getColumnWidthsPercent(e);
            }
            return this.getColumnWidthsFixed(e, this.length2em(t));
          };
          e.prototype.getEqualColumns = function (t) {
            var e = Math.max(1, this.numCols);
            var r;
            if (t === "auto") {
              var i = this.getTableData().W;
              r = (0, h.max)(i);
            } else if ((0, l.isPercent)(t)) {
              r = this.percent(1 / e);
            } else {
              var n = (0, h.sum)([].concat(this.cLines, this.cSpace)) + 2 * this.fSpace[0];
              r = Math.max(0, this.length2em(t) - n) / e;
            }
            return Array(this.numCols).fill(r);
          };
          e.prototype.getColumnWidthsAuto = function (t) {
            var e = this;
            return t.map(function (t) {
              if (t === "auto" || t === "fit") return null;
              if ((0, l.isPercent)(t)) return t;
              return e.length2em(t);
            });
          };
          e.prototype.getColumnWidthsPercent = function (t) {
            var e = this;
            var r = t.indexOf("fit") >= 0;
            var i = (r ? this.getTableData() : { W: null }).W;
            return Array.from(t.keys()).map(function (n) {
              var o = t[n];
              if (o === "fit") return null;
              if (o === "auto") return r ? i[n] : null;
              if ((0, l.isPercent)(o)) return o;
              return e.length2em(o);
            });
          };
          e.prototype.getColumnWidthsFixed = function (t, e) {
            var r = this;
            var i = Array.from(t.keys());
            var n = i.filter(function (e) {
              return t[e] === "fit";
            });
            var o = i.filter(function (e) {
              return t[e] === "auto";
            });
            var a = n.length || o.length;
            var s = (a ? this.getTableData() : { W: null }).W;
            var l = e - (0, h.sum)([].concat(this.cLines, this.cSpace)) - 2 * this.fSpace[0];
            var c = l;
            i.forEach(function (e) {
              var i = t[e];
              c -= i === "fit" || i === "auto" ? s[e] : r.length2em(i, l);
            });
            var u = a && c > 0 ? c / a : 0;
            return i.map(function (e) {
              var i = t[e];
              if (i === "fit") return s[e] + u;
              if (i === "auto") return s[e] + (n.length === 0 ? u : 0);
              return r.length2em(i, l);
            });
          };
          e.prototype.getVerticalPosition = function (t, e) {
            var r = this.node.attributes.get("equalrows");
            var i = this.getTableData(),
              o = i.H,
              a = i.D;
            var s = r ? this.getEqualRowHeight() : 0;
            var l = this.getRowHalfSpacing();
            var h = this.fLine;
            for (var c = 0; c < t; c++) {
              h += l[c] + (r ? s : o[c] + a[c]) + l[c + 1] + this.rLines[c];
            }
            var u = n(r ? [(s + o[t] - a[t]) / 2, (s - o[t] + a[t]) / 2] : [o[t], a[t]], 2),
              f = u[0],
              p = u[1];
            var d = { top: 0, center: l[t] + (f + p) / 2, bottom: l[t] + f + p + l[t + 1], baseline: l[t] + f, axis: l[t] + f - 0.25 };
            h += d[e] || 0;
            return h;
          };
          e.prototype.getEmHalfSpacing = function (t, e, r) {
            if (r === void 0) {
              r = 1;
            }
            var i = this.em(t * r);
            var n = this.addEm(e, 2 / r);
            n.unshift(i);
            n.push(i);
            return n;
          };
          e.prototype.getRowHalfSpacing = function () {
            var t = this.rSpace.map(function (t) {
              return t / 2;
            });
            t.unshift(this.fSpace[1]);
            t.push(this.fSpace[1]);
            return t;
          };
          e.prototype.getColumnHalfSpacing = function () {
            var t = this.cSpace.map(function (t) {
              return t / 2;
            });
            t.unshift(this.fSpace[0]);
            t.push(this.fSpace[0]);
            return t;
          };
          e.prototype.getAlignmentRow = function () {
            var t = n((0, l.split)(this.node.attributes.get("align")), 2),
              e = t[0],
              r = t[1];
            if (r == null) return [e, null];
            var i = parseInt(r);
            if (i < 0) i += this.numRows + 1;
            return [e, i < 1 || i > this.numRows ? null : i - 1];
          };
          e.prototype.getColumnAttributes = function (t, e) {
            if (e === void 0) {
              e = 1;
            }
            var r = this.numCols - e;
            var i = this.getAttributeArray(t);
            if (i.length === 0) return null;
            while (i.length < r) {
              i.push(i[i.length - 1]);
            }
            if (i.length > r) {
              i.splice(r);
            }
            return i;
          };
          e.prototype.getRowAttributes = function (t, e) {
            if (e === void 0) {
              e = 1;
            }
            var r = this.numRows - e;
            var i = this.getAttributeArray(t);
            if (i.length === 0) return null;
            while (i.length < r) {
              i.push(i[i.length - 1]);
            }
            if (i.length > r) {
              i.splice(r);
            }
            return i;
          };
          e.prototype.getAttributeArray = function (t) {
            var e = this.node.attributes.get(t);
            if (!e) return [this.node.attributes.getDefault(t)];
            return (0, l.split)(e);
          };
          e.prototype.addEm = function (t, e) {
            var r = this;
            if (e === void 0) {
              e = 1;
            }
            if (!t) return null;
            return t.map(function (t) {
              return r.em(t / e);
            });
          };
          e.prototype.convertLengths = function (t) {
            var e = this;
            if (!t) return null;
            return t.map(function (t) {
              return e.length2em(t);
            });
          };
          return e;
        })(t);
      }
      e.CommonMtableMixin = c;
    },
    32506: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMtdMixin = void 0;
      function i(t) {
        return (function (t) {
          r(e, t);
          function e() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          Object.defineProperty(e.prototype, "fixesPWidth", {
            get: function () {
              return false;
            },
            enumerable: false,
            configurable: true,
          });
          e.prototype.invalidateBBox = function () {
            this.bboxComputed = false;
          };
          e.prototype.getWrapWidth = function (t) {
            var e = this.parent.parent;
            var r = this.parent;
            var i = this.node.childPosition() - (r.labeled ? 1 : 0);
            return typeof e.cWidths[i] === "number" ? e.cWidths[i] : e.getTableData().W[i];
          };
          e.prototype.getChildAlign = function (t) {
            return this.node.attributes.get("columnalign");
          };
          return e;
        })(t);
      }
      e.CommonMtdMixin = i;
    },
    84894: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMtextMixin = void 0;
      function i(t) {
        var e;
        return (
          (e = (function (t) {
            r(e, t);
            function e() {
              return (t !== null && t.apply(this, arguments)) || this;
            }
            e.prototype.getVariant = function () {
              var e = this.jax.options;
              var r = this.jax.math.outputData;
              var i = (!!r.merrorFamily || !!e.merrorFont) && this.node.Parent.isKind("merror");
              if (!!r.mtextFamily || !!e.mtextFont || i) {
                var n = this.node.attributes.get("mathvariant");
                var o = this.constructor.INHERITFONTS[n] || this.jax.font.getCssFont(n);
                var a = o[0] || (i ? r.merrorFamily || e.merrorFont : r.mtextFamily || e.mtextFont);
                this.variant = this.explicitVariant(a, o[2] ? "bold" : "", o[1] ? "italic" : "");
                return;
              }
              t.prototype.getVariant.call(this);
            };
            return e;
          })(t)),
          (e.INHERITFONTS = { normal: ["", false, false], bold: ["", false, true], italic: ["", true, false], "bold-italic": ["", true, true] }),
          e
        );
      }
      e.CommonMtextMixin = i;
    },
    79598: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var i =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMlabeledtrMixin = e.CommonMtrMixin = void 0;
      function n(t) {
        return (function (t) {
          r(e, t);
          function e() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          Object.defineProperty(e.prototype, "fixesPWidth", {
            get: function () {
              return false;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(e.prototype, "numCells", {
            get: function () {
              return this.childNodes.length;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(e.prototype, "labeled", {
            get: function () {
              return false;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(e.prototype, "tableCells", {
            get: function () {
              return this.childNodes;
            },
            enumerable: false,
            configurable: true,
          });
          e.prototype.getChild = function (t) {
            return this.childNodes[t];
          };
          e.prototype.getChildBBoxes = function () {
            return this.childNodes.map(function (t) {
              return t.getBBox();
            });
          };
          e.prototype.stretchChildren = function (t) {
            var e, r, n, o, a, s;
            if (t === void 0) {
              t = null;
            }
            var l = [];
            var h = this.labeled ? this.childNodes.slice(1) : this.childNodes;
            try {
              for (var c = i(h), u = c.next(); !u.done; u = c.next()) {
                var f = u.value;
                var p = f.childNodes[0];
                if (p.canStretch(1)) {
                  l.push(p);
                }
              }
            } catch (O) {
              e = { error: O };
            } finally {
              try {
                if (u && !u.done && (r = c.return)) r.call(c);
              } finally {
                if (e) throw e.error;
              }
            }
            var d = l.length;
            var y = this.childNodes.length;
            if (d && y > 1) {
              if (t === null) {
                var v = 0,
                  m = 0;
                var b = d > 1 && d === y;
                try {
                  for (var g = i(h), x = g.next(); !x.done; x = g.next()) {
                    var f = x.value;
                    var p = f.childNodes[0];
                    var w = p.stretch.dir === 0;
                    if (b || w) {
                      var _ = p.getBBox(w),
                        M = _.h,
                        j = _.d;
                      if (M > v) {
                        v = M;
                      }
                      if (j > m) {
                        m = j;
                      }
                    }
                  }
                } catch (T) {
                  n = { error: T };
                } finally {
                  try {
                    if (x && !x.done && (o = g.return)) o.call(g);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                t = [v, m];
              }
              try {
                for (var C = i(l), S = C.next(); !S.done; S = C.next()) {
                  var p = S.value;
                  p.coreMO().getStretchedVariant(t);
                }
              } catch (B) {
                a = { error: B };
              } finally {
                try {
                  if (S && !S.done && (s = C.return)) s.call(C);
                } finally {
                  if (a) throw a.error;
                }
              }
            }
          };
          return e;
        })(t);
      }
      e.CommonMtrMixin = n;
      function o(t) {
        return (function (t) {
          r(e, t);
          function e() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          Object.defineProperty(e.prototype, "numCells", {
            get: function () {
              return Math.max(0, this.childNodes.length - 1);
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(e.prototype, "labeled", {
            get: function () {
              return true;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(e.prototype, "tableCells", {
            get: function () {
              return this.childNodes.slice(1);
            },
            enumerable: false,
            configurable: true,
          });
          e.prototype.getChild = function (t) {
            return this.childNodes[t + 1];
          };
          e.prototype.getChildBBoxes = function () {
            return this.childNodes.slice(1).map(function (t) {
              return t.getBBox();
            });
          };
          return e;
        })(t);
      }
      e.CommonMlabeledtrMixin = o;
    },
    17358: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var i =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var n =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonMunderoverMixin = e.CommonMoverMixin = e.CommonMunderMixin = void 0;
      function o(t) {
        return (function (t) {
          r(e, t);
          function e() {
            var e = [];
            for (var r = 0; r < arguments.length; r++) {
              e[r] = arguments[r];
            }
            var o = t.apply(this, n([], i(e), false)) || this;
            o.stretchChildren();
            return o;
          }
          Object.defineProperty(e.prototype, "scriptChild", {
            get: function () {
              return this.childNodes[this.node.under];
            },
            enumerable: false,
            configurable: true,
          });
          e.prototype.computeBBox = function (e, r) {
            if (r === void 0) {
              r = false;
            }
            if (this.hasMovableLimits()) {
              t.prototype.computeBBox.call(this, e, r);
              return;
            }
            e.empty();
            var n = this.baseChild.getOuterBBox();
            var o = this.scriptChild.getOuterBBox();
            var a = this.getUnderKV(n, o)[1];
            var s = this.isLineBelow ? 0 : this.getDelta(true);
            var l = i(this.getDeltaW([n, o], [0, -s]), 2),
              h = l[0],
              c = l[1];
            e.combine(n, h, 0);
            e.combine(o, c, a);
            e.d += this.font.params.big_op_spacing5;
            e.clean();
            this.setChildPWidths(r);
          };
          return e;
        })(t);
      }
      e.CommonMunderMixin = o;
      function a(t) {
        return (function (t) {
          r(e, t);
          function e() {
            var e = [];
            for (var r = 0; r < arguments.length; r++) {
              e[r] = arguments[r];
            }
            var o = t.apply(this, n([], i(e), false)) || this;
            o.stretchChildren();
            return o;
          }
          Object.defineProperty(e.prototype, "scriptChild", {
            get: function () {
              return this.childNodes[this.node.over];
            },
            enumerable: false,
            configurable: true,
          });
          e.prototype.computeBBox = function (e) {
            if (this.hasMovableLimits()) {
              t.prototype.computeBBox.call(this, e);
              return;
            }
            e.empty();
            var r = this.baseChild.getOuterBBox();
            var n = this.scriptChild.getOuterBBox();
            if (this.node.attributes.get("accent")) {
              r.h = Math.max(r.h, this.font.params.x_height * r.scale);
            }
            var o = this.getOverKU(r, n)[1];
            var a = this.isLineAbove ? 0 : this.getDelta();
            var s = i(this.getDeltaW([r, n], [0, a]), 2),
              l = s[0],
              h = s[1];
            e.combine(r, l, 0);
            e.combine(n, h, o);
            e.h += this.font.params.big_op_spacing5;
            e.clean();
          };
          return e;
        })(t);
      }
      e.CommonMoverMixin = a;
      function s(t) {
        return (function (t) {
          r(e, t);
          function e() {
            var e = [];
            for (var r = 0; r < arguments.length; r++) {
              e[r] = arguments[r];
            }
            var o = t.apply(this, n([], i(e), false)) || this;
            o.stretchChildren();
            return o;
          }
          Object.defineProperty(e.prototype, "underChild", {
            get: function () {
              return this.childNodes[this.node.under];
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(e.prototype, "overChild", {
            get: function () {
              return this.childNodes[this.node.over];
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(e.prototype, "subChild", {
            get: function () {
              return this.underChild;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(e.prototype, "supChild", {
            get: function () {
              return this.overChild;
            },
            enumerable: false,
            configurable: true,
          });
          e.prototype.computeBBox = function (e) {
            if (this.hasMovableLimits()) {
              t.prototype.computeBBox.call(this, e);
              return;
            }
            e.empty();
            var r = this.overChild.getOuterBBox();
            var n = this.baseChild.getOuterBBox();
            var o = this.underChild.getOuterBBox();
            if (this.node.attributes.get("accent")) {
              n.h = Math.max(n.h, this.font.params.x_height * n.scale);
            }
            var a = this.getOverKU(n, r)[1];
            var s = this.getUnderKV(n, o)[1];
            var l = this.getDelta();
            var h = i(this.getDeltaW([n, o, r], [0, this.isLineBelow ? 0 : -l, this.isLineAbove ? 0 : l]), 3),
              c = h[0],
              u = h[1],
              f = h[2];
            e.combine(n, c, 0);
            e.combine(r, f, a);
            e.combine(o, u, s);
            var p = this.font.params.big_op_spacing5;
            e.h += p;
            e.d += p;
            e.clean();
          };
          return e;
        })(t);
      }
      e.CommonMunderoverMixin = s;
    },
    78214: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var o =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      var a =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonScriptbaseMixin = void 0;
      var s = r(18426);
      function l(t) {
        var e;
        return (
          (e = (function (t) {
            i(e, t);
            function e() {
              var e = [];
              for (var r = 0; r < arguments.length; r++) {
                e[r] = arguments[r];
              }
              var i = t.apply(this, o([], n(e), false)) || this;
              i.baseScale = 1;
              i.baseIc = 0;
              i.baseRemoveIc = false;
              i.baseIsChar = false;
              i.baseHasAccentOver = null;
              i.baseHasAccentUnder = null;
              i.isLineAbove = false;
              i.isLineBelow = false;
              i.isMathAccent = false;
              var a = (i.baseCore = i.getBaseCore());
              if (!a) return i;
              i.setBaseAccentsFor(a);
              i.baseScale = i.getBaseScale();
              i.baseIc = i.getBaseIc();
              i.baseIsChar = i.isCharBase();
              i.isMathAccent = i.baseIsChar && i.scriptChild && !!i.scriptChild.coreMO().node.getProperty("mathaccent");
              i.checkLineAccents();
              i.baseRemoveIc = !i.isLineAbove && !i.isLineBelow && (!i.constructor.useIC || i.isMathAccent);
              return i;
            }
            Object.defineProperty(e.prototype, "baseChild", {
              get: function () {
                return this.childNodes[this.node.base];
              },
              enumerable: false,
              configurable: true,
            });
            Object.defineProperty(e.prototype, "scriptChild", {
              get: function () {
                return this.childNodes[1];
              },
              enumerable: false,
              configurable: true,
            });
            e.prototype.getBaseCore = function () {
              var t = this.getSemanticBase() || this.childNodes[0];
              while (
                t &&
                ((t.childNodes.length === 1 &&
                  (t.node.isKind("mrow") ||
                    (t.node.isKind("TeXAtom") && t.node.texClass !== s.TEXCLASS.VCENTER) ||
                    t.node.isKind("mstyle") ||
                    t.node.isKind("mpadded") ||
                    t.node.isKind("mphantom") ||
                    t.node.isKind("semantics"))) ||
                  (t.node.isKind("munderover") && t.isMathAccent))
              ) {
                this.setBaseAccentsFor(t);
                t = t.childNodes[0];
              }
              if (!t) {
                this.baseHasAccentOver = this.baseHasAccentUnder = false;
              }
              return t || this.childNodes[0];
            };
            e.prototype.setBaseAccentsFor = function (t) {
              if (t.node.isKind("munderover")) {
                if (this.baseHasAccentOver === null) {
                  this.baseHasAccentOver = !!t.node.attributes.get("accent");
                }
                if (this.baseHasAccentUnder === null) {
                  this.baseHasAccentUnder = !!t.node.attributes.get("accentunder");
                }
              }
            };
            e.prototype.getSemanticBase = function () {
              var t = this.node.attributes.getExplicit("data-semantic-fencepointer");
              return this.getBaseFence(this.baseChild, t);
            };
            e.prototype.getBaseFence = function (t, e) {
              var r, i;
              if (!t || !t.node.attributes || !e) {
                return null;
              }
              if (t.node.attributes.getExplicit("data-semantic-id") === e) {
                return t;
              }
              try {
                for (var n = a(t.childNodes), o = n.next(); !o.done; o = n.next()) {
                  var s = o.value;
                  var l = this.getBaseFence(s, e);
                  if (l) {
                    return l;
                  }
                }
              } catch (h) {
                r = { error: h };
              } finally {
                try {
                  if (o && !o.done && (i = n.return)) i.call(n);
                } finally {
                  if (r) throw r.error;
                }
              }
              return null;
            };
            e.prototype.getBaseScale = function () {
              var t = this.baseCore;
              var e = 1;
              while (t && t !== this) {
                var r = t.getOuterBBox();
                e *= r.rscale;
                t = t.parent;
              }
              return e;
            };
            e.prototype.getBaseIc = function () {
              return this.baseCore.getOuterBBox().ic * this.baseScale;
            };
            e.prototype.getAdjustedIc = function () {
              var t = this.baseCore.getOuterBBox();
              return (t.ic ? 1.05 * t.ic + 0.05 : 0) * this.baseScale;
            };
            e.prototype.isCharBase = function () {
              var t = this.baseCore;
              return (
                ((t.node.isKind("mo") && t.size === null) || t.node.isKind("mi") || t.node.isKind("mn")) &&
                t.bbox.rscale === 1 &&
                Array.from(t.getText()).length === 1
              );
            };
            e.prototype.checkLineAccents = function () {
              if (!this.node.isKind("munderover")) return;
              if (this.node.isKind("mover")) {
                this.isLineAbove = this.isLineAccent(this.scriptChild);
              } else if (this.node.isKind("munder")) {
                this.isLineBelow = this.isLineAccent(this.scriptChild);
              } else {
                var t = this;
                this.isLineAbove = this.isLineAccent(t.overChild);
                this.isLineBelow = this.isLineAccent(t.underChild);
              }
            };
            e.prototype.isLineAccent = function (t) {
              var e = t.coreMO().node;
              return e.isToken && e.getText() === "―";
            };
            e.prototype.getBaseWidth = function () {
              var t = this.baseChild.getOuterBBox();
              return t.w * t.rscale - (this.baseRemoveIc ? this.baseIc : 0) + this.font.params.extra_ic;
            };
            e.prototype.computeBBox = function (t, e) {
              if (e === void 0) {
                e = false;
              }
              var r = this.getBaseWidth();
              var i = n(this.getOffset(), 2),
                o = i[0],
                a = i[1];
              t.append(this.baseChild.getOuterBBox());
              t.combine(this.scriptChild.getOuterBBox(), r + o, a);
              t.w += this.font.params.scriptspace;
              t.clean();
              this.setChildPWidths(e);
            };
            e.prototype.getOffset = function () {
              return [0, 0];
            };
            e.prototype.baseCharZero = function (t) {
              var e = !!this.baseCore.node.attributes.get("largeop");
              var r = this.baseScale;
              return this.baseIsChar && !e && r === 1 ? 0 : t;
            };
            e.prototype.getV = function () {
              var t = this.baseCore.getOuterBBox();
              var e = this.scriptChild.getOuterBBox();
              var r = this.font.params;
              var i = this.length2em(this.node.attributes.get("subscriptshift"), r.sub1);
              return Math.max(this.baseCharZero(t.d * this.baseScale + r.sub_drop * e.rscale), i, e.h * e.rscale - (4 / 5) * r.x_height);
            };
            e.prototype.getU = function () {
              var t = this.baseCore.getOuterBBox();
              var e = this.scriptChild.getOuterBBox();
              var r = this.font.params;
              var i = this.node.attributes.getList("displaystyle", "superscriptshift");
              var n = this.node.getProperty("texprimestyle");
              var o = n ? r.sup3 : i.displaystyle ? r.sup1 : r.sup2;
              var a = this.length2em(i.superscriptshift, o);
              return Math.max(this.baseCharZero(t.h * this.baseScale - r.sup_drop * e.rscale), a, e.d * e.rscale + (1 / 4) * r.x_height);
            };
            e.prototype.hasMovableLimits = function () {
              var t = this.node.attributes.get("displaystyle");
              var e = this.baseChild.coreMO().node;
              return !t && !!e.attributes.get("movablelimits");
            };
            e.prototype.getOverKU = function (t, e) {
              var r = this.node.attributes.get("accent");
              var i = this.font.params;
              var n = e.d * e.rscale;
              var o = i.rule_thickness * i.separation_factor;
              var a = this.baseHasAccentOver ? o : 0;
              var s = this.isLineAbove ? 3 * i.rule_thickness : o;
              var l = (r ? s : Math.max(i.big_op_spacing1, i.big_op_spacing3 - Math.max(0, n))) - a;
              return [l, t.h * t.rscale + l + n];
            };
            e.prototype.getUnderKV = function (t, e) {
              var r = this.node.attributes.get("accentunder");
              var i = this.font.params;
              var n = e.h * e.rscale;
              var o = i.rule_thickness * i.separation_factor;
              var a = this.baseHasAccentUnder ? o : 0;
              var s = this.isLineBelow ? 3 * i.rule_thickness : o;
              var l = (r ? s : Math.max(i.big_op_spacing2, i.big_op_spacing4 - n)) - a;
              return [l, -(t.d * t.rscale + l + n)];
            };
            e.prototype.getDeltaW = function (t, e) {
              var r, i, s, l;
              if (e === void 0) {
                e = [0, 0, 0];
              }
              var h = this.node.attributes.get("align");
              var c = t.map(function (t) {
                return t.w * t.rscale;
              });
              c[0] -= this.baseRemoveIc && !this.baseCore.node.attributes.get("largeop") ? this.baseIc : 0;
              var u = Math.max.apply(Math, o([], n(c), false));
              var f = [];
              var p = 0;
              try {
                for (var d = a(c.keys()), y = d.next(); !y.done; y = d.next()) {
                  var v = y.value;
                  f[v] = (h === "center" ? (u - c[v]) / 2 : h === "right" ? u - c[v] : 0) + e[v];
                  if (f[v] < p) {
                    p = -f[v];
                  }
                }
              } catch (g) {
                r = { error: g };
              } finally {
                try {
                  if (y && !y.done && (i = d.return)) i.call(d);
                } finally {
                  if (r) throw r.error;
                }
              }
              if (p) {
                try {
                  for (var m = a(f.keys()), b = m.next(); !b.done; b = m.next()) {
                    var v = b.value;
                    f[v] += p;
                  }
                } catch (x) {
                  s = { error: x };
                } finally {
                  try {
                    if (b && !b.done && (l = m.return)) l.call(m);
                  } finally {
                    if (s) throw s.error;
                  }
                }
              }
              [1, 2].map(function (e) {
                return (f[e] += t[e] ? t[e].dx * t[0].scale : 0);
              });
              return f;
            };
            e.prototype.getDelta = function (t) {
              if (t === void 0) {
                t = false;
              }
              var e = this.node.attributes.get("accent");
              var r = this.baseCore.getOuterBBox(),
                i = r.sk,
                n = r.ic;
              return ((e && !t ? i : 0) + this.font.skewIcFactor * n) * this.baseScale;
            };
            e.prototype.stretchChildren = function () {
              var t, e, r, i, n, o;
              var s = [];
              try {
                for (var l = a(this.childNodes), h = l.next(); !h.done; h = l.next()) {
                  var c = h.value;
                  if (c.canStretch(2)) {
                    s.push(c);
                  }
                }
              } catch (M) {
                t = { error: M };
              } finally {
                try {
                  if (h && !h.done && (e = l.return)) e.call(l);
                } finally {
                  if (t) throw t.error;
                }
              }
              var u = s.length;
              var f = this.childNodes.length;
              if (u && f > 1) {
                var p = 0;
                var d = u > 1 && u === f;
                try {
                  for (var y = a(this.childNodes), v = y.next(); !v.done; v = y.next()) {
                    var c = v.value;
                    var m = c.stretch.dir === 0;
                    if (d || m) {
                      var b = c.getOuterBBox(m),
                        g = b.w,
                        x = b.rscale;
                      if (g * x > p) p = g * x;
                    }
                  }
                } catch (j) {
                  r = { error: j };
                } finally {
                  try {
                    if (v && !v.done && (i = y.return)) i.call(y);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                try {
                  for (var w = a(s), _ = w.next(); !_.done; _ = w.next()) {
                    var c = _.value;
                    c.coreMO().getStretchedVariant([p / c.bbox.rscale]);
                  }
                } catch (C) {
                  n = { error: C };
                } finally {
                  try {
                    if (_ && !_.done && (o = w.return)) o.call(w);
                  } finally {
                    if (n) throw n.error;
                  }
                }
              }
            };
            return e;
          })(t)),
          (e.useIC = true),
          e
        );
      }
      e.CommonScriptbaseMixin = l;
    },
    44974: function (t, e) {
      var r =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.CommonSemanticsMixin = void 0;
      function i(t) {
        return (function (t) {
          r(e, t);
          function e() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          e.prototype.computeBBox = function (t, e) {
            if (e === void 0) {
              e = false;
            }
            if (this.childNodes.length) {
              var r = this.childNodes[0].getBBox(),
                i = r.w,
                n = r.h,
                o = r.d;
              t.w = i;
              t.h = n;
              t.d = o;
            }
          };
          return e;
        })(t);
      }
      e.CommonSemanticsMixin = i;
    },
    83292: (t, e, r) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.BBox = void 0;
      var i = r(77130);
      var n = (function () {
        function t(t) {
          if (t === void 0) {
            t = { w: 0, h: -i.BIGDIMEN, d: -i.BIGDIMEN };
          }
          this.w = t.w || 0;
          this.h = "h" in t ? t.h : -i.BIGDIMEN;
          this.d = "d" in t ? t.d : -i.BIGDIMEN;
          this.L = this.R = this.ic = this.sk = this.dx = 0;
          this.scale = this.rscale = 1;
          this.pwidth = "";
        }
        t.zero = function () {
          return new t({ h: 0, d: 0, w: 0 });
        };
        t.empty = function () {
          return new t();
        };
        t.prototype.empty = function () {
          this.w = 0;
          this.h = this.d = -i.BIGDIMEN;
          return this;
        };
        t.prototype.clean = function () {
          if (this.w === -i.BIGDIMEN) this.w = 0;
          if (this.h === -i.BIGDIMEN) this.h = 0;
          if (this.d === -i.BIGDIMEN) this.d = 0;
        };
        t.prototype.rescale = function (t) {
          this.w *= t;
          this.h *= t;
          this.d *= t;
        };
        t.prototype.combine = function (t, e, r) {
          if (e === void 0) {
            e = 0;
          }
          if (r === void 0) {
            r = 0;
          }
          var i = t.rscale;
          var n = e + i * (t.w + t.L + t.R);
          var o = r + i * t.h;
          var a = i * t.d - r;
          if (n > this.w) this.w = n;
          if (o > this.h) this.h = o;
          if (a > this.d) this.d = a;
        };
        t.prototype.append = function (t) {
          var e = t.rscale;
          this.w += e * (t.w + t.L + t.R);
          if (e * t.h > this.h) {
            this.h = e * t.h;
          }
          if (e * t.d > this.d) {
            this.d = e * t.d;
          }
        };
        t.prototype.updateFrom = function (t) {
          this.h = t.h;
          this.d = t.d;
          this.w = t.w;
          if (t.pwidth) {
            this.pwidth = t.pwidth;
          }
        };
        t.fullWidth = "100%";
        t.StyleAdjust = [
          ["borderTopWidth", "h"],
          ["borderRightWidth", "w"],
          ["borderBottomWidth", "d"],
          ["borderLeftWidth", "w", 0],
          ["paddingTop", "h"],
          ["paddingRight", "w"],
          ["paddingBottom", "d"],
          ["paddingLeft", "w", 0],
        ];
        return t;
      })();
      e.BBox = n;
    },
    64905: function (t, e, r) {
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
              };
            return t(e, r);
          };
          return function (e, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            t(e, r);
            function i() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((i.prototype = r.prototype), new i());
          };
        })();
      var n =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var o =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var a =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.FunctionList = void 0;
      var s = r(4180);
      var l = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.execute = function () {
          var t, e;
          var r = [];
          for (var i = 0; i < arguments.length; i++) {
            r[i] = arguments[i];
          }
          try {
            for (var s = n(this), l = s.next(); !l.done; l = s.next()) {
              var h = l.value;
              var c = h.item.apply(h, a([], o(r), false));
              if (c === false) {
                return false;
              }
            }
          } catch (u) {
            t = { error: u };
          } finally {
            try {
              if (l && !l.done && (e = s.return)) e.call(s);
            } finally {
              if (t) throw t.error;
            }
          }
          return true;
        };
        e.prototype.asyncExecute = function () {
          var t = [];
          for (var e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
          }
          var r = -1;
          var i = this.items;
          return new Promise(function (e, n) {
            (function s() {
              var l;
              while (++r < i.length) {
                var h = (l = i[r]).item.apply(l, a([], o(t), false));
                if (h instanceof Promise) {
                  h.then(s).catch(function (t) {
                    return n(t);
                  });
                  return;
                }
                if (h === false) {
                  e(false);
                  return;
                }
              }
              e(true);
            })();
          });
        };
        return e;
      })(s.PrioritizedList);
      e.FunctionList = l;
    },
    4180: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.PrioritizedList = void 0;
      var r = (function () {
        function t() {
          this.items = [];
          this.items = [];
        }
        t.prototype[Symbol.iterator] = function () {
          var t = 0;
          var e = this.items;
          return {
            next: function () {
              return { value: e[t++], done: t > e.length };
            },
          };
        };
        t.prototype.add = function (e, r) {
          if (r === void 0) {
            r = t.DEFAULTPRIORITY;
          }
          var i = this.items.length;
          do {
            i--;
          } while (i >= 0 && r < this.items[i].priority);
          this.items.splice(i + 1, 0, { item: e, priority: r });
          return e;
        };
        t.prototype.remove = function (t) {
          var e = this.items.length;
          do {
            e--;
          } while (e >= 0 && this.items[e].item !== t);
          if (e >= 0) {
            this.items.splice(e, 1);
          }
        };
        t.DEFAULTPRIORITY = 5;
        return t;
      })();
      e.PrioritizedList = r;
    },
    24219: function (t, e) {
      var r =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.CssStyles = void 0;
      var i = (function () {
        function t(t) {
          if (t === void 0) {
            t = null;
          }
          this.styles = {};
          this.addStyles(t);
        }
        Object.defineProperty(t.prototype, "cssText", {
          get: function () {
            return this.getStyleString();
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.addStyles = function (t) {
          var e, i;
          if (!t) return;
          try {
            for (var n = r(Object.keys(t)), o = n.next(); !o.done; o = n.next()) {
              var a = o.value;
              if (!this.styles[a]) {
                this.styles[a] = {};
              }
              Object.assign(this.styles[a], t[a]);
            }
          } catch (s) {
            e = { error: s };
          } finally {
            try {
              if (o && !o.done && (i = n.return)) i.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
        };
        t.prototype.removeStyles = function () {
          var t, e;
          var i = [];
          for (var n = 0; n < arguments.length; n++) {
            i[n] = arguments[n];
          }
          try {
            for (var o = r(i), a = o.next(); !a.done; a = o.next()) {
              var s = a.value;
              delete this.styles[s];
            }
          } catch (l) {
            t = { error: l };
          } finally {
            try {
              if (a && !a.done && (e = o.return)) e.call(o);
            } finally {
              if (t) throw t.error;
            }
          }
        };
        t.prototype.clear = function () {
          this.styles = {};
        };
        t.prototype.getStyleString = function () {
          return this.getStyleRules().join("\n\n");
        };
        t.prototype.getStyleRules = function () {
          var t, e;
          var i = Object.keys(this.styles);
          var n = new Array(i.length);
          var o = 0;
          try {
            for (var a = r(i), s = a.next(); !s.done; s = a.next()) {
              var l = s.value;
              n[o++] = l + " {\n" + this.getStyleDefString(this.styles[l]) + "\n}";
            }
          } catch (h) {
            t = { error: h };
          } finally {
            try {
              if (s && !s.done && (e = a.return)) e.call(a);
            } finally {
              if (t) throw t.error;
            }
          }
          return n;
        };
        t.prototype.getStyleDefString = function (t) {
          var e, i;
          var n = Object.keys(t);
          var o = new Array(n.length);
          var a = 0;
          try {
            for (var s = r(n), l = s.next(); !l.done; l = s.next()) {
              var h = l.value;
              o[a++] = "  " + h + ": " + t[h] + ";";
            }
          } catch (c) {
            e = { error: c };
          } finally {
            try {
              if (l && !l.done && (i = s.return)) i.call(s);
            } finally {
              if (e) throw e.error;
            }
          }
          return o.join("\n");
        };
        return t;
      })();
      e.CssStyles = i;
    },
    30502: function (t, e) {
      var r =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && i >= t.length) t = void 0;
                return { value: t && t[i++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var i =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) o.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var n =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, o; i < n; i++) {
              if (o || !(i in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, i);
                o[i] = e[i];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.Styles = void 0;
      var o = ["top", "right", "bottom", "left"];
      var a = ["width", "style", "color"];
      function s(t) {
        var e = t.split(/((?:'[^']*'|"[^"]*"|,[\s\n]|[^\s\n])*)/g);
        var r = [];
        while (e.length > 1) {
          e.shift();
          r.push(e.shift());
        }
        return r;
      }
      function l(t) {
        var e, i;
        var n = s(this.styles[t]);
        if (n.length === 0) {
          n.push("");
        }
        if (n.length === 1) {
          n.push(n[0]);
        }
        if (n.length === 2) {
          n.push(n[0]);
        }
        if (n.length === 3) {
          n.push(n[1]);
        }
        try {
          for (var o = r(g.connect[t].children), a = o.next(); !a.done; a = o.next()) {
            var l = a.value;
            this.setStyle(this.childName(t, l), n.shift());
          }
        } catch (h) {
          e = { error: h };
        } finally {
          try {
            if (a && !a.done && (i = o.return)) i.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
      }
      function h(t) {
        var e, i;
        var n = g.connect[t].children;
        var o = [];
        try {
          for (var a = r(n), s = a.next(); !s.done; s = a.next()) {
            var l = s.value;
            var h = this.styles[t + "-" + l];
            if (!h) {
              delete this.styles[t];
              return;
            }
            o.push(h);
          }
        } catch (c) {
          e = { error: c };
        } finally {
          try {
            if (s && !s.done && (i = a.return)) i.call(a);
          } finally {
            if (e) throw e.error;
          }
        }
        if (o[3] === o[1]) {
          o.pop();
          if (o[2] === o[0]) {
            o.pop();
            if (o[1] === o[0]) {
              o.pop();
            }
          }
        }
        this.styles[t] = o.join(" ");
      }
      function c(t) {
        var e, i;
        try {
          for (var n = r(g.connect[t].children), o = n.next(); !o.done; o = n.next()) {
            var a = o.value;
            this.setStyle(this.childName(t, a), this.styles[t]);
          }
        } catch (s) {
          e = { error: s };
        } finally {
          try {
            if (o && !o.done && (i = n.return)) i.call(n);
          } finally {
            if (e) throw e.error;
          }
        }
      }
      function u(t) {
        var e, o;
        var a = n([], i(g.connect[t].children), false);
        var s = this.styles[this.childName(t, a.shift())];
        try {
          for (var l = r(a), h = l.next(); !h.done; h = l.next()) {
            var c = h.value;
            if (this.styles[this.childName(t, c)] !== s) {
              delete this.styles[t];
              return;
            }
          }
        } catch (u) {
          e = { error: u };
        } finally {
          try {
            if (h && !h.done && (o = l.return)) o.call(l);
          } finally {
            if (e) throw e.error;
          }
        }
        this.styles[t] = s;
      }
      var f = {
        width: /^(?:[\d.]+(?:[a-z]+)|thin|medium|thick|inherit|initial|unset)$/,
        style: /^(?:none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit|initial|unset)$/,
      };
      function p(t) {
        var e, i, n, o;
        var a = { width: "", style: "", color: "" };
        try {
          for (var l = r(s(this.styles[t])), h = l.next(); !h.done; h = l.next()) {
            var c = h.value;
            if (c.match(f.width) && a.width === "") {
              a.width = c;
            } else if (c.match(f.style) && a.style === "") {
              a.style = c;
            } else {
              a.color = c;
            }
          }
        } catch (y) {
          e = { error: y };
        } finally {
          try {
            if (h && !h.done && (i = l.return)) i.call(l);
          } finally {
            if (e) throw e.error;
          }
        }
        try {
          for (var u = r(g.connect[t].children), p = u.next(); !p.done; p = u.next()) {
            var d = p.value;
            this.setStyle(this.childName(t, d), a[d]);
          }
        } catch (v) {
          n = { error: v };
        } finally {
          try {
            if (p && !p.done && (o = u.return)) o.call(u);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      function d(t) {
        var e, i;
        var n = [];
        try {
          for (var o = r(g.connect[t].children), a = o.next(); !a.done; a = o.next()) {
            var s = a.value;
            var l = this.styles[this.childName(t, s)];
            if (l) {
              n.push(l);
            }
          }
        } catch (h) {
          e = { error: h };
        } finally {
          try {
            if (a && !a.done && (i = o.return)) i.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
        if (n.length) {
          this.styles[t] = n.join(" ");
        } else {
          delete this.styles[t];
        }
      }
      var y = {
        style: /^(?:normal|italic|oblique|inherit|initial|unset)$/,
        variant: new RegExp(
          "^(?:" +
            [
              "normal|none",
              "inherit|initial|unset",
              "common-ligatures|no-common-ligatures",
              "discretionary-ligatures|no-discretionary-ligatures",
              "historical-ligatures|no-historical-ligatures",
              "contextual|no-contextual",
              "(?:stylistic|character-variant|swash|ornaments|annotation)\\([^)]*\\)",
              "small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
              "lining-nums|oldstyle-nums|proportional-nums|tabular-nums",
              "diagonal-fractions|stacked-fractions",
              "ordinal|slashed-zero",
              "jis78|jis83|jis90|jis04|simplified|traditional",
              "full-width|proportional-width",
              "ruby",
            ].join("|") +
            ")$"
        ),
        weight: /^(?:normal|bold|bolder|lighter|[1-9]00|inherit|initial|unset)$/,
        stretch: new RegExp(
          "^(?:" + ["normal", "(?:(?:ultra|extra|semi)-)?condensed", "(?:(?:semi|extra|ulta)-)?expanded", "inherit|initial|unset"].join("|") + ")$"
        ),
        size: new RegExp(
          "^(?:" +
            ["xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller", "[d.]+%|[d.]+[a-z]+", "inherit|initial|unset"].join("|") +
            ")" +
            "(?:/(?:normal|[d.+](?:%|[a-z]+)?))?$"
        ),
      };
      function v(t) {
        var e, n, o, a;
        var l = s(this.styles[t]);
        var h = { style: "", variant: [], weight: "", stretch: "", size: "", family: "", "line-height": "" };
        try {
          for (var c = r(l), u = c.next(); !u.done; u = c.next()) {
            var f = u.value;
            h.family = f;
            try {
              for (var p = ((o = void 0), r(Object.keys(y))), d = p.next(); !d.done; d = p.next()) {
                var v = d.value;
                if ((Array.isArray(h[v]) || h[v] === "") && f.match(y[v])) {
                  if (v === "size") {
                    var b = i(f.split(/\//), 2),
                      g = b[0],
                      x = b[1];
                    h[v] = g;
                    if (x) {
                      h["line-height"] = x;
                    }
                  } else if (h.size === "") {
                    if (Array.isArray(h[v])) {
                      h[v].push(f);
                    } else {
                      h[v] = f;
                    }
                  }
                }
              }
            } catch (w) {
              o = { error: w };
            } finally {
              try {
                if (d && !d.done && (a = p.return)) a.call(p);
              } finally {
                if (o) throw o.error;
              }
            }
          }
        } catch (_) {
          e = { error: _ };
        } finally {
          try {
            if (u && !u.done && (n = c.return)) n.call(c);
          } finally {
            if (e) throw e.error;
          }
        }
        m(t, h);
        delete this.styles[t];
      }
      function m(t, e) {
        var i, n;
        try {
          for (var o = r(g.connect[t].children), a = o.next(); !a.done; a = o.next()) {
            var s = a.value;
            var l = this.childName(t, s);
            if (Array.isArray(e[s])) {
              var h = e[s];
              if (h.length) {
                this.styles[l] = h.join(" ");
              }
            } else if (e[s] !== "") {
              this.styles[l] = e[s];
            }
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            if (a && !a.done && (n = o.return)) n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
      }
      function b(t) {}
      var g = (function () {
        function t(t) {
          if (t === void 0) {
            t = "";
          }
          this.parse(t);
        }
        Object.defineProperty(t.prototype, "cssText", {
          get: function () {
            var t, e;
            var i = [];
            try {
              for (var n = r(Object.keys(this.styles)), o = n.next(); !o.done; o = n.next()) {
                var a = o.value;
                var s = this.parentName(a);
                if (!this.styles[s]) {
                  i.push(a + ": " + this.styles[a] + ";");
                }
              }
            } catch (l) {
              t = { error: l };
            } finally {
              try {
                if (o && !o.done && (e = n.return)) e.call(n);
              } finally {
                if (t) throw t.error;
              }
            }
            return i.join(" ");
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.set = function (e, r) {
          e = this.normalizeName(e);
          this.setStyle(e, r);
          if (t.connect[e] && !t.connect[e].combine) {
            this.combineChildren(e);
            delete this.styles[e];
          }
          while (e.match(/-/)) {
            e = this.parentName(e);
            if (!t.connect[e]) break;
            t.connect[e].combine.call(this, e);
          }
        };
        t.prototype.get = function (t) {
          t = this.normalizeName(t);
          return this.styles.hasOwnProperty(t) ? this.styles[t] : "";
        };
        t.prototype.setStyle = function (e, r) {
          this.styles[e] = r;
          if (t.connect[e] && t.connect[e].children) {
            t.connect[e].split.call(this, e);
          }
          if (r === "") {
            delete this.styles[e];
          }
        };
        t.prototype.combineChildren = function (e) {
          var i, n;
          var o = this.parentName(e);
          try {
            for (var a = r(t.connect[e].children), s = a.next(); !s.done; s = a.next()) {
              var l = s.value;
              var h = this.childName(o, l);
              t.connect[h].combine.call(this, h);
            }
          } catch (c) {
            i = { error: c };
          } finally {
            try {
              if (s && !s.done && (n = a.return)) n.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
        };
        t.prototype.parentName = function (t) {
          var e = t.replace(/-[^-]*$/, "");
          return t === e ? "" : e;
        };
        t.prototype.childName = function (e, r) {
          if (r.match(/-/)) {
            return r;
          }
          if (t.connect[e] && !t.connect[e].combine) {
            r += e.replace(/.*-/, "-");
            e = this.parentName(e);
          }
          return e + "-" + r;
        };
        t.prototype.normalizeName = function (t) {
          return t.replace(/[A-Z]/g, function (t) {
            return "-" + t.toLowerCase();
          });
        };
        t.prototype.parse = function (t) {
          if (t === void 0) {
            t = "";
          }
          var e = this.constructor.pattern;
          this.styles = {};
          var r = t.replace(e.comment, "").split(e.style);
          while (r.length > 1) {
            var n = i(r.splice(0, 3), 3),
              o = n[0],
              a = n[1],
              s = n[2];
            if (o.match(/[^\s\n]/)) return;
            this.set(a, s);
          }
        };
        t.pattern = { style: /([-a-z]+)[\s\n]*:[\s\n]*((?:'[^']*'|"[^"]*"|\n|.)*?)[\s\n]*(?:;|$)/g, comment: /\/\*[^]*?\*\//g };
        t.connect = {
          padding: { children: o, split: l, combine: h },
          border: { children: o, split: c, combine: u },
          "border-top": { children: a, split: p, combine: d },
          "border-right": { children: a, split: p, combine: d },
          "border-bottom": { children: a, split: p, combine: d },
          "border-left": { children: a, split: p, combine: d },
          "border-width": { children: o, split: l, combine: null },
          "border-style": { children: o, split: l, combine: null },
          "border-color": { children: o, split: l, combine: null },
          font: { children: ["style", "variant", "weight", "stretch", "line-height", "size", "family"], split: v, combine: b },
        };
        return t;
      })();
      e.Styles = g;
    },
    72125: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.max = e.sum = void 0;
      function r(t) {
        return t.reduce(function (t, e) {
          return t + e;
        }, 0);
      }
      e.sum = r;
      function i(t) {
        return t.reduce(function (t, e) {
          return Math.max(t, e);
        }, 0);
      }
      e.max = i;
    },
  },
]);
