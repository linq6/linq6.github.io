"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2953],
  {
    59719: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.newState = e.STATE = e.AbstractMathItem = e.protoItem = void 0;
      function r(t, e, r, n, o, i, s) {
        if (s === void 0) {
          s = null;
        }
        var a = { open: t, math: e, close: r, n, start: { n: o }, end: { n: i }, display: s };
        return a;
      }
      e.protoItem = r;
      var n = (function () {
        function t(t, r, n, o, i) {
          if (n === void 0) {
            n = true;
          }
          if (o === void 0) {
            o = { i: 0, n: 0, delim: "" };
          }
          if (i === void 0) {
            i = { i: 0, n: 0, delim: "" };
          }
          this.root = null;
          this.typesetRoot = null;
          this.metrics = {};
          this.inputData = {};
          this.outputData = {};
          this._state = e.STATE.UNPROCESSED;
          this.math = t;
          this.inputJax = r;
          this.display = n;
          this.start = o;
          this.end = i;
          this.root = null;
          this.typesetRoot = null;
          this.metrics = {};
          this.inputData = {};
          this.outputData = {};
        }
        Object.defineProperty(t.prototype, "isEscaped", {
          get: function () {
            return this.display === null;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.render = function (t) {
          t.renderActions.renderMath(this, t);
        };
        t.prototype.rerender = function (t, r) {
          if (r === void 0) {
            r = e.STATE.RERENDER;
          }
          if (this.state() >= r) {
            this.state(r - 1);
          }
          t.renderActions.renderMath(this, t, r);
        };
        t.prototype.convert = function (t, r) {
          if (r === void 0) {
            r = e.STATE.LAST;
          }
          t.renderActions.renderConvert(this, t, r);
        };
        t.prototype.compile = function (t) {
          if (this.state() < e.STATE.COMPILED) {
            this.root = this.inputJax.compile(this, t);
            this.state(e.STATE.COMPILED);
          }
        };
        t.prototype.typeset = function (t) {
          if (this.state() < e.STATE.TYPESET) {
            this.typesetRoot = t.outputJax[this.isEscaped ? "escaped" : "typeset"](this, t);
            this.state(e.STATE.TYPESET);
          }
        };
        t.prototype.updateDocument = function (t) {};
        t.prototype.removeFromDocument = function (t) {
          if (t === void 0) {
            t = false;
          }
        };
        t.prototype.setMetrics = function (t, e, r, n, o) {
          this.metrics = { em: t, ex: e, containerWidth: r, lineWidth: n, scale: o };
        };
        t.prototype.state = function (t, r) {
          if (t === void 0) {
            t = null;
          }
          if (r === void 0) {
            r = false;
          }
          if (t != null) {
            if (t < e.STATE.INSERTED && this._state >= e.STATE.INSERTED) {
              this.removeFromDocument(r);
            }
            if (t < e.STATE.TYPESET && this._state >= e.STATE.TYPESET) {
              this.outputData = {};
            }
            if (t < e.STATE.COMPILED && this._state >= e.STATE.COMPILED) {
              this.inputData = {};
            }
            this._state = t;
          }
          return this._state;
        };
        t.prototype.reset = function (t) {
          if (t === void 0) {
            t = false;
          }
          this.state(e.STATE.UNPROCESSED, t);
        };
        return t;
      })();
      e.AbstractMathItem = n;
      e.STATE = { UNPROCESSED: 0, FINDMATH: 10, COMPILED: 20, CONVERT: 100, METRICS: 110, RERENDER: 125, TYPESET: 150, INSERTED: 200, LAST: 1e4 };
      function o(t, r) {
        if (t in e.STATE) {
          throw Error("State " + t + " already exists");
        }
        e.STATE[t] = r;
      }
      e.newState = o;
    },
    66846: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.TeXAtom = void 0;
      var i = r(18426);
      var s = r(5213);
      var a = (function (t) {
        n(e, t);
        function e(e, r, n) {
          var o = t.call(this, e, r, n) || this;
          o.texclass = i.TEXCLASS.ORD;
          o.setProperty("texClass", o.texClass);
          return o;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "TeXAtom";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return -1;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "notParent", {
          get: function () {
            return this.childNodes[0] && this.childNodes[0].childNodes.length === 1;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.setTeXclass = function (t) {
          this.childNodes[0].setTeXclass(null);
          return this.adjustTeXclass(t);
        };
        e.prototype.adjustTeXclass = function (t) {
          return t;
        };
        e.defaults = o({}, i.AbstractMmlBaseNode.defaults);
        return e;
      })(i.AbstractMmlBaseNode);
      e.TeXAtom = a;
      a.prototype.adjustTeXclass = s.MmlMo.prototype.adjustTeXclass;
    },
    79024: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMaction = void 0;
      var i = r(18426);
      var s = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "maction";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return 1;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "selected", {
          get: function () {
            var t = this.attributes.get("selection");
            var e = Math.max(1, Math.min(this.childNodes.length, t)) - 1;
            return this.childNodes[e] || this.factory.create("mrow");
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "isEmbellished", {
          get: function () {
            return this.selected.isEmbellished;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "isSpacelike", {
          get: function () {
            return this.selected.isSpacelike;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.core = function () {
          return this.selected.core();
        };
        e.prototype.coreMO = function () {
          return this.selected.coreMO();
        };
        e.prototype.verifyAttributes = function (e) {
          t.prototype.verifyAttributes.call(this, e);
          if (this.attributes.get("actiontype") !== "toggle" && this.attributes.getExplicit("selection") !== undefined) {
            var r = this.attributes.getAllAttributes();
            delete r.selection;
          }
        };
        e.prototype.setTeXclass = function (t) {
          if (this.attributes.get("actiontype") === "tooltip" && this.childNodes[1]) {
            this.childNodes[1].setTeXclass(null);
          }
          var e = this.selected;
          t = e.setTeXclass(t);
          this.updateTeXclass(e);
          return t;
        };
        e.prototype.nextToggleSelection = function () {
          var t = Math.max(1, this.attributes.get("selection") + 1);
          if (t > this.childNodes.length) {
            t = 1;
          }
          this.attributes.set("selection", t);
        };
        e.defaults = o(o({}, i.AbstractMmlNode.defaults), { actiontype: "toggle", selection: 1 });
        return e;
      })(i.AbstractMmlNode);
      e.MmlMaction = s;
    },
    27225: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMath = void 0;
      var i = r(18426);
      var s = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "math";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "linebreakContainer", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.setChildInheritedAttributes = function (e, r, n, o) {
          if (this.attributes.get("mode") === "display") {
            this.attributes.setInherited("display", "block");
          }
          e = this.addInheritedAttributes(e, this.attributes.getAllAttributes());
          r = !!this.attributes.get("displaystyle") || (!this.attributes.get("displaystyle") && this.attributes.get("display") === "block");
          this.attributes.setInherited("displaystyle", r);
          n = this.attributes.get("scriptlevel") || this.constructor.defaults["scriptlevel"];
          t.prototype.setChildInheritedAttributes.call(this, e, r, n, o);
        };
        e.defaults = o(o({}, i.AbstractMmlLayoutNode.defaults), {
          mathvariant: "normal",
          mathsize: "normal",
          mathcolor: "",
          mathbackground: "transparent",
          dir: "ltr",
          scriptlevel: 0,
          displaystyle: false,
          display: "inline",
          maxwidth: "",
          overflow: "linebreak",
          altimg: "",
          "altimg-width": "",
          "altimg-height": "",
          "altimg-valign": "",
          alttext: "",
          cdgroup: "",
          scriptsizemultiplier: 1 / Math.sqrt(2),
          scriptminsize: "8px",
          infixlinebreakstyle: "before",
          lineleading: "1ex",
          linebreakmultchar: "⁢",
          indentshift: "auto",
          indentalign: "auto",
          indenttarget: "",
          indentalignfirst: "indentalign",
          indentshiftfirst: "indentshift",
          indentalignlast: "indentalign",
          indentshiftlast: "indentshift",
        });
        return e;
      })(i.AbstractMmlLayoutNode);
      e.MmlMath = s;
    },
    22599: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMenclose = void 0;
      var i = r(18426);
      var s = (function (t) {
        n(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.texclass = i.TEXCLASS.ORD;
          return e;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "menclose";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return -1;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "linebreakContininer", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.setTeXclass = function (t) {
          t = this.childNodes[0].setTeXclass(t);
          this.updateTeXclass(this.childNodes[0]);
          return t;
        };
        e.defaults = o(o({}, i.AbstractMmlNode.defaults), { notation: "longdiv" });
        return e;
      })(i.AbstractMmlNode);
      e.MmlMenclose = s;
    },
    90719: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      var i =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            n = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && n >= t.length) t = void 0;
                return { value: t && t[n++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMfenced = void 0;
      var s = r(18426);
      var a = (function (t) {
        n(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.texclass = s.TEXCLASS.INNER;
          e.separators = [];
          e.open = null;
          e.close = null;
          return e;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mfenced";
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.setTeXclass = function (t) {
          this.getPrevClass(t);
          if (this.open) {
            t = this.open.setTeXclass(t);
          }
          if (this.childNodes[0]) {
            t = this.childNodes[0].setTeXclass(t);
          }
          for (var e = 1, r = this.childNodes.length; e < r; e++) {
            if (this.separators[e - 1]) {
              t = this.separators[e - 1].setTeXclass(t);
            }
            if (this.childNodes[e]) {
              t = this.childNodes[e].setTeXclass(t);
            }
          }
          if (this.close) {
            t = this.close.setTeXclass(t);
          }
          this.updateTeXclass(this.open);
          return t;
        };
        e.prototype.setChildInheritedAttributes = function (e, r, n, o) {
          var s, a;
          this.addFakeNodes();
          try {
            for (var l = i([this.open, this.close].concat(this.separators)), u = l.next(); !u.done; u = l.next()) {
              var c = u.value;
              if (c) {
                c.setInheritedAttributes(e, r, n, o);
              }
            }
          } catch (f) {
            s = { error: f };
          } finally {
            try {
              if (u && !u.done && (a = l.return)) a.call(l);
            } finally {
              if (s) throw s.error;
            }
          }
          t.prototype.setChildInheritedAttributes.call(this, e, r, n, o);
        };
        e.prototype.addFakeNodes = function () {
          var t, e;
          var r = this.attributes.getList("open", "close", "separators"),
            n = r.open,
            o = r.close,
            a = r.separators;
          n = n.replace(/[ \t\n\r]/g, "");
          o = o.replace(/[ \t\n\r]/g, "");
          a = a.replace(/[ \t\n\r]/g, "");
          if (n) {
            this.open = this.fakeNode(n, { fence: true, form: "prefix" }, s.TEXCLASS.OPEN);
          }
          if (a) {
            while (a.length < this.childNodes.length - 1) {
              a += a.charAt(a.length - 1);
            }
            var l = 0;
            try {
              for (var u = i(this.childNodes.slice(1)), c = u.next(); !c.done; c = u.next()) {
                var f = c.value;
                if (f) {
                  this.separators.push(this.fakeNode(a.charAt(l++)));
                }
              }
            } catch (p) {
              t = { error: p };
            } finally {
              try {
                if (c && !c.done && (e = u.return)) e.call(u);
              } finally {
                if (t) throw t.error;
              }
            }
          }
          if (o) {
            this.close = this.fakeNode(o, { fence: true, form: "postfix" }, s.TEXCLASS.CLOSE);
          }
        };
        e.prototype.fakeNode = function (t, e, r) {
          if (e === void 0) {
            e = {};
          }
          if (r === void 0) {
            r = null;
          }
          var n = this.factory.create("text").setText(t);
          var o = this.factory.create("mo", e, [n]);
          o.texClass = r;
          o.parent = this;
          return o;
        };
        e.defaults = o(o({}, s.AbstractMmlNode.defaults), { open: "(", close: ")", separators: "," });
        return e;
      })(s.AbstractMmlNode);
      e.MmlMfenced = a;
    },
    294: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      var i =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            n = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && n >= t.length) t = void 0;
                return { value: t && t[n++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMfrac = void 0;
      var s = r(18426);
      var a = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mfrac";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return 2;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "linebreakContainer", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.setTeXclass = function (t) {
          var e, r;
          this.getPrevClass(t);
          try {
            for (var n = i(this.childNodes), o = n.next(); !o.done; o = n.next()) {
              var s = o.value;
              s.setTeXclass(null);
            }
          } catch (a) {
            e = { error: a };
          } finally {
            try {
              if (o && !o.done && (r = n.return)) r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          return this;
        };
        e.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          if (!e || r > 0) {
            r++;
          }
          this.childNodes[0].setInheritedAttributes(t, false, r, n);
          this.childNodes[1].setInheritedAttributes(t, false, r, true);
        };
        e.defaults = o(o({}, s.AbstractMmlBaseNode.defaults), { linethickness: "medium", numalign: "center", denomalign: "center", bevelled: false });
        return e;
      })(s.AbstractMmlBaseNode);
      e.MmlMfrac = a;
    },
    83954: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMglyph = void 0;
      var i = r(18426);
      var s = (function (t) {
        n(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.texclass = i.TEXCLASS.ORD;
          return e;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mglyph";
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.verifyAttributes = function (e) {
          var r = this.attributes.getList("src", "fontfamily", "index"),
            n = r.src,
            o = r.fontfamily,
            i = r.index;
          if (n === "" && (o === "" || i === "")) {
            this.mError("mglyph must have either src or fontfamily and index attributes", e, true);
          } else {
            t.prototype.verifyAttributes.call(this, e);
          }
        };
        e.defaults = o(o({}, i.AbstractMmlTokenNode.defaults), { alt: "", src: "", index: "", width: "auto", height: "auto", valign: "0em" });
        return e;
      })(i.AbstractMmlTokenNode);
      e.MmlMglyph = s;
    },
    16689: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMi = void 0;
      var i = r(18426);
      var s = (function (t) {
        n(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.texclass = i.TEXCLASS.ORD;
          return e;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mi";
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.setInheritedAttributes = function (r, n, o, i) {
          if (r === void 0) {
            r = {};
          }
          if (n === void 0) {
            n = false;
          }
          if (o === void 0) {
            o = 0;
          }
          if (i === void 0) {
            i = false;
          }
          t.prototype.setInheritedAttributes.call(this, r, n, o, i);
          var s = this.getText();
          if (s.match(e.singleCharacter) && !r.mathvariant) {
            this.attributes.setInherited("mathvariant", "italic");
          }
        };
        e.prototype.setTeXclass = function (t) {
          this.getPrevClass(t);
          var r = this.getText();
          if (
            r.length > 1 &&
            r.match(e.operatorName) &&
            this.attributes.get("mathvariant") === "normal" &&
            this.getProperty("autoOP") === undefined &&
            this.getProperty("texClass") === undefined
          ) {
            this.texClass = i.TEXCLASS.OP;
            this.setProperty("autoOP", true);
          }
          return this;
        };
        e.defaults = o({}, i.AbstractMmlTokenNode.defaults);
        e.operatorName = /^[a-z][a-z0-9]*$/i;
        e.singleCharacter = /^[\uD800-\uDBFF]?.[\u0300-\u036F\u1AB0-\u1ABE\u1DC0-\u1DFF\u20D0-\u20EF]*$/;
        return e;
      })(i.AbstractMmlTokenNode);
      e.MmlMi = s;
    },
    13195: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlNone = e.MmlMprescripts = e.MmlMmultiscripts = void 0;
      var i = r(18426);
      var s = r(74529);
      var a = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mmultiscripts";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return 1;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          this.childNodes[0].setInheritedAttributes(t, e, r, n);
          var o = false;
          for (var i = 1, s = 0; i < this.childNodes.length; i++) {
            var a = this.childNodes[i];
            if (a.isKind("mprescripts")) {
              if (!o) {
                o = true;
                if (i % 2 === 0) {
                  var l = this.factory.create("mrow");
                  this.childNodes.splice(i, 0, l);
                  l.parent = this;
                  i++;
                }
              }
            } else {
              var u = n || s % 2 === 0;
              a.setInheritedAttributes(t, false, r + 1, u);
              s++;
            }
          }
          if (this.childNodes.length % 2 === (o ? 1 : 0)) {
            this.appendChild(this.factory.create("mrow"));
            this.childNodes[this.childNodes.length - 1].setInheritedAttributes(t, false, r + 1, n);
          }
        };
        e.prototype.verifyChildren = function (e) {
          var r = false;
          var n = e["fixMmultiscripts"];
          for (var o = 0; o < this.childNodes.length; o++) {
            var i = this.childNodes[o];
            if (i.isKind("mprescripts")) {
              if (r) {
                i.mError(i.kind + " can only appear once in " + this.kind, e, true);
              } else {
                r = true;
                if (o % 2 === 0 && !n) {
                  this.mError("There must be an equal number of prescripts of each type", e);
                }
              }
            }
          }
          if (this.childNodes.length % 2 === (r ? 1 : 0) && !n) {
            this.mError("There must be an equal number of scripts of each type", e);
          }
          t.prototype.verifyChildren.call(this, e);
        };
        e.defaults = o({}, s.MmlMsubsup.defaults);
        return e;
      })(s.MmlMsubsup);
      e.MmlMmultiscripts = a;
      var l = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mprescripts";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return 0;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.verifyTree = function (e) {
          t.prototype.verifyTree.call(this, e);
          if (this.parent && !this.parent.isKind("mmultiscripts")) {
            this.mError(this.kind + " must be a child of mmultiscripts", e, true);
          }
        };
        e.defaults = o({}, i.AbstractMmlNode.defaults);
        return e;
      })(i.AbstractMmlNode);
      e.MmlMprescripts = l;
      var u = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "none";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return 0;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.verifyTree = function (e) {
          t.prototype.verifyTree.call(this, e);
          if (this.parent && !this.parent.isKind("mmultiscripts")) {
            this.mError(this.kind + " must be a child of mmultiscripts", e, true);
          }
        };
        e.defaults = o({}, i.AbstractMmlNode.defaults);
        return e;
      })(i.AbstractMmlNode);
      e.MmlNone = u;
    },
    94411: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMn = void 0;
      var i = r(18426);
      var s = (function (t) {
        n(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.texclass = i.TEXCLASS.ORD;
          return e;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mn";
          },
          enumerable: false,
          configurable: true,
        });
        e.defaults = o({}, i.AbstractMmlTokenNode.defaults);
        return e;
      })(i.AbstractMmlTokenNode);
      e.MmlMn = s;
    },
    38480: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMpadded = void 0;
      var i = r(18426);
      var s = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mpadded";
          },
          enumerable: false,
          configurable: true,
        });
        e.defaults = o(o({}, i.AbstractMmlLayoutNode.defaults), { width: "", height: "", depth: "", lspace: 0, voffset: 0 });
        return e;
      })(i.AbstractMmlLayoutNode);
      e.MmlMpadded = s;
    },
    68091: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMroot = void 0;
      var i = r(18426);
      var s = (function (t) {
        n(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.texclass = i.TEXCLASS.ORD;
          return e;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mroot";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return 2;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.setTeXclass = function (t) {
          this.getPrevClass(t);
          this.childNodes[0].setTeXclass(null);
          this.childNodes[1].setTeXclass(null);
          return this;
        };
        e.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          this.childNodes[0].setInheritedAttributes(t, e, r, true);
          this.childNodes[1].setInheritedAttributes(t, false, r + 2, n);
        };
        e.defaults = o({}, i.AbstractMmlNode.defaults);
        return e;
      })(i.AbstractMmlNode);
      e.MmlMroot = s;
    },
    68550: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      var i =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            n = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && n >= t.length) t = void 0;
                return { value: t && t[n++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlInferredMrow = e.MmlMrow = void 0;
      var s = r(18426);
      var a = (function (t) {
        n(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e._core = null;
          return e;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mrow";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "isSpacelike", {
          get: function () {
            var t, e;
            try {
              for (var r = i(this.childNodes), n = r.next(); !n.done; n = r.next()) {
                var o = n.value;
                if (!o.isSpacelike) {
                  return false;
                }
              }
            } catch (s) {
              t = { error: s };
            } finally {
              try {
                if (n && !n.done && (e = r.return)) e.call(r);
              } finally {
                if (t) throw t.error;
              }
            }
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "isEmbellished", {
          get: function () {
            var t, e;
            var r = false;
            var n = 0;
            try {
              for (var o = i(this.childNodes), s = o.next(); !s.done; s = o.next()) {
                var a = s.value;
                if (a) {
                  if (a.isEmbellished) {
                    if (r) {
                      return false;
                    }
                    r = true;
                    this._core = n;
                  } else if (!a.isSpacelike) {
                    return false;
                  }
                }
                n++;
              }
            } catch (l) {
              t = { error: l };
            } finally {
              try {
                if (s && !s.done && (e = o.return)) e.call(o);
              } finally {
                if (t) throw t.error;
              }
            }
            return r;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.core = function () {
          if (!this.isEmbellished || this._core == null) {
            return this;
          }
          return this.childNodes[this._core];
        };
        e.prototype.coreMO = function () {
          if (!this.isEmbellished || this._core == null) {
            return this;
          }
          return this.childNodes[this._core].coreMO();
        };
        e.prototype.nonSpaceLength = function () {
          var t, e;
          var r = 0;
          try {
            for (var n = i(this.childNodes), o = n.next(); !o.done; o = n.next()) {
              var s = o.value;
              if (s && !s.isSpacelike) {
                r++;
              }
            }
          } catch (a) {
            t = { error: a };
          } finally {
            try {
              if (o && !o.done && (e = n.return)) e.call(n);
            } finally {
              if (t) throw t.error;
            }
          }
          return r;
        };
        e.prototype.firstNonSpace = function () {
          var t, e;
          try {
            for (var r = i(this.childNodes), n = r.next(); !n.done; n = r.next()) {
              var o = n.value;
              if (o && !o.isSpacelike) {
                return o;
              }
            }
          } catch (s) {
            t = { error: s };
          } finally {
            try {
              if (n && !n.done && (e = r.return)) e.call(r);
            } finally {
              if (t) throw t.error;
            }
          }
          return null;
        };
        e.prototype.lastNonSpace = function () {
          var t = this.childNodes.length;
          while (--t >= 0) {
            var e = this.childNodes[t];
            if (e && !e.isSpacelike) {
              return e;
            }
          }
          return null;
        };
        e.prototype.setTeXclass = function (t) {
          var e, r, n, o;
          if (this.getProperty("open") != null || this.getProperty("close") != null) {
            this.getPrevClass(t);
            t = null;
            try {
              for (var a = i(this.childNodes), l = a.next(); !l.done; l = a.next()) {
                var u = l.value;
                t = u.setTeXclass(t);
              }
            } catch (p) {
              e = { error: p };
            } finally {
              try {
                if (l && !l.done && (r = a.return)) r.call(a);
              } finally {
                if (e) throw e.error;
              }
            }
            if (this.texClass == null) {
              this.texClass = s.TEXCLASS.INNER;
            }
          } else {
            try {
              for (var c = i(this.childNodes), f = c.next(); !f.done; f = c.next()) {
                var u = f.value;
                t = u.setTeXclass(t);
              }
            } catch (h) {
              n = { error: h };
            } finally {
              try {
                if (f && !f.done && (o = c.return)) o.call(c);
              } finally {
                if (n) throw n.error;
              }
            }
            if (this.childNodes[0]) {
              this.updateTeXclass(this.childNodes[0]);
            }
          }
          return t;
        };
        e.defaults = o({}, s.AbstractMmlNode.defaults);
        return e;
      })(s.AbstractMmlNode);
      e.MmlMrow = a;
      var l = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "inferredMrow";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "isInferred", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "notParent", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.toString = function () {
          return "[" + this.childNodes.join(",") + "]";
        };
        e.defaults = a.defaults;
        return e;
      })(a);
      e.MmlInferredMrow = l;
    },
    17931: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMs = void 0;
      var i = r(18426);
      var s = (function (t) {
        n(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.texclass = i.TEXCLASS.ORD;
          return e;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "ms";
          },
          enumerable: false,
          configurable: true,
        });
        e.defaults = o(o({}, i.AbstractMmlTokenNode.defaults), { lquote: '"', rquote: '"' });
        return e;
      })(i.AbstractMmlTokenNode);
      e.MmlMs = s;
    },
    4254: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMspace = void 0;
      var i = r(18426);
      var s = (function (t) {
        n(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.texclass = i.TEXCLASS.NONE;
          return e;
        }
        e.prototype.setTeXclass = function (t) {
          return t;
        };
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mspace";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return 0;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "isSpacelike", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "hasNewline", {
          get: function () {
            var t = this.attributes;
            return (
              t.getExplicit("width") == null && t.getExplicit("height") == null && t.getExplicit("depth") == null && t.get("linebreak") === "newline"
            );
          },
          enumerable: false,
          configurable: true,
        });
        e.defaults = o(o({}, i.AbstractMmlTokenNode.defaults), { width: "0em", height: "0ex", depth: "0ex", linebreak: "auto" });
        return e;
      })(i.AbstractMmlTokenNode);
      e.MmlMspace = s;
    },
    53162: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMsqrt = void 0;
      var i = r(18426);
      var s = (function (t) {
        n(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.texclass = i.TEXCLASS.ORD;
          return e;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "msqrt";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return -1;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "linebreakContainer", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.setTeXclass = function (t) {
          this.getPrevClass(t);
          this.childNodes[0].setTeXclass(null);
          return this;
        };
        e.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          this.childNodes[0].setInheritedAttributes(t, e, r, true);
        };
        e.defaults = o({}, i.AbstractMmlNode.defaults);
        return e;
      })(i.AbstractMmlNode);
      e.MmlMsqrt = s;
    },
    74529: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMsup = e.MmlMsub = e.MmlMsubsup = void 0;
      var i = r(18426);
      var s = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "msubsup";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return 3;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "base", {
          get: function () {
            return 0;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "sub", {
          get: function () {
            return 1;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "sup", {
          get: function () {
            return 2;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          var o = this.childNodes;
          o[0].setInheritedAttributes(t, e, r, n);
          o[1].setInheritedAttributes(t, false, r + 1, n || this.sub === 1);
          if (!o[2]) {
            return;
          }
          o[2].setInheritedAttributes(t, false, r + 1, n || this.sub === 2);
        };
        e.defaults = o(o({}, i.AbstractMmlBaseNode.defaults), { subscriptshift: "", superscriptshift: "" });
        return e;
      })(i.AbstractMmlBaseNode);
      e.MmlMsubsup = s;
      var a = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "msub";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return 2;
          },
          enumerable: false,
          configurable: true,
        });
        e.defaults = o({}, s.defaults);
        return e;
      })(s);
      e.MmlMsub = a;
      var l = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "msup";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return 2;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "sup", {
          get: function () {
            return 1;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "sub", {
          get: function () {
            return 2;
          },
          enumerable: false,
          configurable: true,
        });
        e.defaults = o({}, s.defaults);
        return e;
      })(s);
      e.MmlMsup = l;
    },
    7252: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      var i =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            n = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && n >= t.length) t = void 0;
                return { value: t && t[n++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMtable = void 0;
      var s = r(18426);
      var a = r(33353);
      var l = (function (t) {
        n(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.properties = { useHeight: true };
          e.texclass = s.TEXCLASS.ORD;
          return e;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mtable";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "linebreakContainer", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.setInheritedAttributes = function (e, r, n, o) {
          var a, l;
          try {
            for (var u = i(s.indentAttributes), c = u.next(); !c.done; c = u.next()) {
              var f = c.value;
              if (e[f]) {
                this.attributes.setInherited(f, e[f][1]);
              }
              if (this.attributes.getExplicit(f) !== undefined) {
                delete this.attributes.getAllAttributes()[f];
              }
            }
          } catch (p) {
            a = { error: p };
          } finally {
            try {
              if (c && !c.done && (l = u.return)) l.call(u);
            } finally {
              if (a) throw a.error;
            }
          }
          t.prototype.setInheritedAttributes.call(this, e, r, n, o);
        };
        e.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          var o, s, l, u;
          try {
            for (var c = i(this.childNodes), f = c.next(); !f.done; f = c.next()) {
              var p = f.value;
              if (!p.isKind("mtr")) {
                this.replaceChild(this.factory.create("mtr"), p).appendChild(p);
              }
            }
          } catch (v) {
            o = { error: v };
          } finally {
            try {
              if (f && !f.done && (s = c.return)) s.call(c);
            } finally {
              if (o) throw o.error;
            }
          }
          r = this.getProperty("scriptlevel") || r;
          e = !!(this.attributes.getExplicit("displaystyle") || this.attributes.getDefault("displaystyle"));
          t = this.addInheritedAttributes(t, { columnalign: this.attributes.get("columnalign"), rowalign: "center" });
          var h = this.attributes.getExplicit("data-cramped");
          var d = (0, a.split)(this.attributes.get("rowalign"));
          try {
            for (var y = i(this.childNodes), b = y.next(); !b.done; b = y.next()) {
              var p = b.value;
              t.rowalign[1] = d.shift() || t.rowalign[1];
              p.setInheritedAttributes(t, e, r, !!h);
            }
          } catch (g) {
            l = { error: g };
          } finally {
            try {
              if (b && !b.done && (u = y.return)) u.call(y);
            } finally {
              if (l) throw l.error;
            }
          }
        };
        e.prototype.verifyChildren = function (e) {
          var r = null;
          var n = this.factory;
          for (var o = 0; o < this.childNodes.length; o++) {
            var i = this.childNodes[o];
            if (i.isKind("mtr")) {
              r = null;
            } else {
              var s = i.isKind("mtd");
              if (r) {
                this.removeChild(i);
                o--;
              } else {
                r = this.replaceChild(n.create("mtr"), i);
              }
              r.appendChild(s ? i : n.create("mtd", {}, [i]));
              if (!e["fixMtables"]) {
                i.parent.removeChild(i);
                i.parent = this;
                s && r.appendChild(n.create("mtd"));
                var a = i.mError("Children of " + this.kind + " must be mtr or mlabeledtr", e, s);
                r.childNodes[r.childNodes.length - 1].appendChild(a);
              }
            }
          }
          t.prototype.verifyChildren.call(this, e);
        };
        e.prototype.setTeXclass = function (t) {
          var e, r;
          this.getPrevClass(t);
          try {
            for (var n = i(this.childNodes), o = n.next(); !o.done; o = n.next()) {
              var s = o.value;
              s.setTeXclass(null);
            }
          } catch (a) {
            e = { error: a };
          } finally {
            try {
              if (o && !o.done && (r = n.return)) r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          return this;
        };
        e.defaults = o(o({}, s.AbstractMmlNode.defaults), {
          align: "axis",
          rowalign: "baseline",
          columnalign: "center",
          groupalign: "{left}",
          alignmentscope: true,
          columnwidth: "auto",
          width: "auto",
          rowspacing: "1ex",
          columnspacing: ".8em",
          rowlines: "none",
          columnlines: "none",
          frame: "none",
          framespacing: "0.4em 0.5ex",
          equalrows: false,
          equalcolumns: false,
          displaystyle: false,
          side: "right",
          minlabelspacing: "0.8em",
        });
        return e;
      })(s.AbstractMmlNode);
      e.MmlMtable = l;
    },
    49016: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMtd = void 0;
      var i = r(18426);
      var s = r(7013);
      var a = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mtd";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return -1;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "linebreakContainer", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.verifyChildren = function (e) {
          if (this.parent && !this.parent.isKind("mtr")) {
            this.mError(this.kind + " can only be a child of an mtr or mlabeledtr", e, true);
            return;
          }
          t.prototype.verifyChildren.call(this, e);
        };
        e.prototype.setTeXclass = function (t) {
          this.getPrevClass(t);
          this.childNodes[0].setTeXclass(null);
          return this;
        };
        e.defaults = o(o({}, i.AbstractMmlBaseNode.defaults), {
          rowspan: 1,
          columnspan: 1,
          rowalign: s.INHERIT,
          columnalign: s.INHERIT,
          groupalign: s.INHERIT,
        });
        return e;
      })(i.AbstractMmlBaseNode);
      e.MmlMtd = a;
    },
    86237: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMtext = void 0;
      var i = r(18426);
      var s = (function (t) {
        n(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.texclass = i.TEXCLASS.ORD;
          return e;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mtext";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "isSpacelike", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        e.defaults = o({}, i.AbstractMmlTokenNode.defaults);
        return e;
      })(i.AbstractMmlTokenNode);
      e.MmlMtext = s;
    },
    2117: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      var i =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            n = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && n >= t.length) t = void 0;
                return { value: t && t[n++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMlabeledtr = e.MmlMtr = void 0;
      var s = r(18426);
      var a = r(7013);
      var l = r(33353);
      var u = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mtr";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "linebreakContainer", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          var o, s, a, u;
          try {
            for (var c = i(this.childNodes), f = c.next(); !f.done; f = c.next()) {
              var p = f.value;
              if (!p.isKind("mtd")) {
                this.replaceChild(this.factory.create("mtd"), p).appendChild(p);
              }
            }
          } catch (b) {
            o = { error: b };
          } finally {
            try {
              if (f && !f.done && (s = c.return)) s.call(c);
            } finally {
              if (o) throw o.error;
            }
          }
          var h = (0, l.split)(this.attributes.get("columnalign"));
          if (this.arity === 1) {
            h.unshift(this.parent.attributes.get("side"));
          }
          t = this.addInheritedAttributes(t, { rowalign: this.attributes.get("rowalign"), columnalign: "center" });
          try {
            for (var d = i(this.childNodes), y = d.next(); !y.done; y = d.next()) {
              var p = y.value;
              t.columnalign[1] = h.shift() || t.columnalign[1];
              p.setInheritedAttributes(t, e, r, n);
            }
          } catch (v) {
            a = { error: v };
          } finally {
            try {
              if (y && !y.done && (u = d.return)) u.call(d);
            } finally {
              if (a) throw a.error;
            }
          }
        };
        e.prototype.verifyChildren = function (e) {
          var r, n;
          if (this.parent && !this.parent.isKind("mtable")) {
            this.mError(this.kind + " can only be a child of an mtable", e, true);
            return;
          }
          try {
            for (var o = i(this.childNodes), s = o.next(); !s.done; s = o.next()) {
              var a = s.value;
              if (!a.isKind("mtd")) {
                var l = this.replaceChild(this.factory.create("mtd"), a);
                l.appendChild(a);
                if (!e["fixMtables"]) {
                  a.mError("Children of " + this.kind + " must be mtd", e);
                }
              }
            }
          } catch (u) {
            r = { error: u };
          } finally {
            try {
              if (s && !s.done && (n = o.return)) n.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
          t.prototype.verifyChildren.call(this, e);
        };
        e.prototype.setTeXclass = function (t) {
          var e, r;
          this.getPrevClass(t);
          try {
            for (var n = i(this.childNodes), o = n.next(); !o.done; o = n.next()) {
              var s = o.value;
              s.setTeXclass(null);
            }
          } catch (a) {
            e = { error: a };
          } finally {
            try {
              if (o && !o.done && (r = n.return)) r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          return this;
        };
        e.defaults = o(o({}, s.AbstractMmlNode.defaults), { rowalign: a.INHERIT, columnalign: a.INHERIT, groupalign: a.INHERIT });
        return e;
      })(s.AbstractMmlNode);
      e.MmlMtr = u;
      var c = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mlabeledtr";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return 1;
          },
          enumerable: false,
          configurable: true,
        });
        return e;
      })(u);
      e.MmlMlabeledtr = c;
    },
    75723: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMover = e.MmlMunder = e.MmlMunderover = void 0;
      var i = r(18426);
      var s = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "munderover";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return 3;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "base", {
          get: function () {
            return 0;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "under", {
          get: function () {
            return 1;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "over", {
          get: function () {
            return 2;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "linebreakContainer", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          var o = this.childNodes;
          o[0].setInheritedAttributes(t, e, r, n || !!o[this.over]);
          var i = !!(!e && o[0].coreMO().attributes.get("movablelimits"));
          var s = this.constructor.ACCENTS;
          o[1].setInheritedAttributes(t, false, this.getScriptlevel(s[1], i, r), n || this.under === 1);
          this.setInheritedAccent(1, s[1], e, r, n, i);
          if (!o[2]) {
            return;
          }
          o[2].setInheritedAttributes(t, false, this.getScriptlevel(s[2], i, r), n || this.under === 2);
          this.setInheritedAccent(2, s[2], e, r, n, i);
        };
        e.prototype.getScriptlevel = function (t, e, r) {
          if (e || !this.attributes.get(t)) {
            r++;
          }
          return r;
        };
        e.prototype.setInheritedAccent = function (t, e, r, n, o, i) {
          var s = this.childNodes[t];
          if (this.attributes.getExplicit(e) == null && s.isEmbellished) {
            var a = s.coreMO().attributes.get("accent");
            this.attributes.setInherited(e, a);
            if (a !== this.attributes.getDefault(e)) {
              s.setInheritedAttributes({}, r, this.getScriptlevel(e, i, n), o);
            }
          }
        };
        e.defaults = o(o({}, i.AbstractMmlBaseNode.defaults), { accent: false, accentunder: false, align: "center" });
        e.ACCENTS = ["", "accentunder", "accent"];
        return e;
      })(i.AbstractMmlBaseNode);
      e.MmlMunderover = s;
      var a = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "munder";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return 2;
          },
          enumerable: false,
          configurable: true,
        });
        e.defaults = o({}, s.defaults);
        return e;
      })(s);
      e.MmlMunder = a;
      var l = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mover";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return 2;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "over", {
          get: function () {
            return 1;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "under", {
          get: function () {
            return 2;
          },
          enumerable: false,
          configurable: true,
        });
        e.defaults = o({}, s.defaults);
        e.ACCENTS = ["", "accent", "accentunder"];
        return e;
      })(s);
      e.MmlMover = l;
    },
    19223: function (t, e, r) {
      var n =
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlAnnotation = e.MmlAnnotationXML = e.MmlSemantics = void 0;
      var i = r(18426);
      var s = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "semantics";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return 1;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "notParent", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        e.defaults = o(o({}, i.AbstractMmlBaseNode.defaults), { definitionUrl: null, encoding: null });
        return e;
      })(i.AbstractMmlBaseNode);
      e.MmlSemantics = s;
      var a = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "annotation-xml";
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.setChildInheritedAttributes = function () {};
        e.defaults = o(o({}, i.AbstractMmlNode.defaults), { definitionUrl: null, encoding: null, cd: "mathmlkeys", name: "", src: null });
        return e;
      })(i.AbstractMmlNode);
      e.MmlAnnotationXML = a;
      var l = (function (t) {
        n(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.properties = { isChars: true };
          return e;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "annotation";
          },
          enumerable: false,
          configurable: true,
        });
        e.defaults = o({}, a.defaults);
        return e;
      })(a);
      e.MmlAnnotation = l;
    },
    86161: function (t, e) {
      var r =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            n = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && n >= t.length) t = void 0;
                return { value: t && t[n++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var n = r.call(t),
            o,
            i = [],
            s;
          try {
            while ((e === void 0 || e-- > 0) && !(o = n.next()).done) i.push(o.value);
          } catch (a) {
            s = { error: a };
          } finally {
            try {
              if (o && !o.done && (r = n["return"])) r.call(n);
            } finally {
              if (s) throw s.error;
            }
          }
          return i;
        };
      var o =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var n = 0, o = e.length, i; n < o; n++) {
              if (i || !(n in e)) {
                if (!i) i = Array.prototype.slice.call(e, 0, n);
                i[n] = e[n];
              }
            }
          return t.concat(i || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.AbstractFactory = void 0;
      var i = (function () {
        function t(t) {
          var e, n;
          if (t === void 0) {
            t = null;
          }
          this.defaultKind = "unknown";
          this.nodeMap = new Map();
          this.node = {};
          if (t === null) {
            t = this.constructor.defaultNodes;
          }
          try {
            for (var o = r(Object.keys(t)), i = o.next(); !i.done; i = o.next()) {
              var s = i.value;
              this.setNodeClass(s, t[s]);
            }
          } catch (a) {
            e = { error: a };
          } finally {
            try {
              if (i && !i.done && (n = o.return)) n.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
        }
        t.prototype.create = function (t) {
          var e = [];
          for (var r = 1; r < arguments.length; r++) {
            e[r - 1] = arguments[r];
          }
          return (this.node[t] || this.node[this.defaultKind]).apply(void 0, o([], n(e), false));
        };
        t.prototype.setNodeClass = function (t, e) {
          this.nodeMap.set(t, e);
          var r = this;
          var i = this.nodeMap.get(t);
          this.node[t] = function () {
            var t = [];
            for (var e = 0; e < arguments.length; e++) {
              t[e] = arguments[e];
            }
            return new (i.bind.apply(i, o([void 0, r], n(t), false)))();
          };
        };
        t.prototype.getNodeClass = function (t) {
          return this.nodeMap.get(t);
        };
        t.prototype.deleteNodeClass = function (t) {
          this.nodeMap.delete(t);
          delete this.node[t];
        };
        t.prototype.nodeIsKind = function (t, e) {
          return t instanceof this.getNodeClass(e);
        };
        t.prototype.getKinds = function () {
          return Array.from(this.nodeMap.keys());
        };
        t.defaultNodes = {};
        return t;
      })();
      e.AbstractFactory = i;
    },
  },
]);
