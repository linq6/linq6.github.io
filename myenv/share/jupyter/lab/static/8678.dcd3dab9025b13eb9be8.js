"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [8678],
  {
    8678: function (t, e, r) {
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
      var o =
        (this && this.__assign) ||
        function () {
          o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, i = arguments.length; r < i; r++) {
                e = arguments[r];
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t[o] = e[o];
              }
              return t;
            };
          return o.apply(this, arguments);
        };
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            o,
            n = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(o = i.next()).done) n.push(o.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (o && !o.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return n;
        };
      var a =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, o = e.length, n; i < o; i++) {
              if (n || !(i in e)) {
                if (!n) n = Array.prototype.slice.call(e, 0, i);
                n[i] = e[i];
              }
            }
          return t.concat(n || Array.prototype.slice.call(e));
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
      Object.defineProperty(e, "__esModule", { value: true });
      e.AssistiveMmlHandler = e.AssistiveMmlMathDocumentMixin = e.AssistiveMmlMathItemMixin = e.LimitedMmlVisitor = void 0;
      var l = r(59719);
      var u = r(97810);
      var c = r(36059);
      var p = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.getAttributes = function (e) {
          return t.prototype.getAttributes.call(this, e).replace(/ ?id=".*?"/, "");
        };
        return e;
      })(u.SerializedMmlVisitor);
      e.LimitedMmlVisitor = p;
      (0, l.newState)("ASSISTIVEMML", 153);
      function f(t) {
        return (function (t) {
          i(e, t);
          function e() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          e.prototype.assistiveMml = function (t, e) {
            if (e === void 0) {
              e = false;
            }
            if (this.state() >= l.STATE.ASSISTIVEMML) return;
            if (!this.isEscaped && (t.options.enableAssistiveMml || e)) {
              var r = t.adaptor;
              var i = t
                .toMML(this.root)
                .replace(/\n */g, "")
                .replace(/<!--.*?-->/g, "");
              var o = r.firstChild(r.body(r.parse(i, "text/html")));
              var n = r.node("mjx-assistive-mml", { unselectable: "on", display: this.display ? "block" : "inline" }, [o]);
              r.setAttribute(r.firstChild(this.typesetRoot), "aria-hidden", "true");
              r.setStyle(this.typesetRoot, "position", "relative");
              r.append(this.typesetRoot, n);
            }
            this.state(l.STATE.ASSISTIVEMML);
          };
          return e;
        })(t);
      }
      e.AssistiveMmlMathItemMixin = f;
      function v(t) {
        var e;
        return (
          (e = (function (t) {
            i(e, t);
            function e() {
              var e = [];
              for (var r = 0; r < arguments.length; r++) {
                e[r] = arguments[r];
              }
              var i = t.apply(this, a([], n(e), false)) || this;
              var o = i.constructor;
              var s = o.ProcessBits;
              if (!s.has("assistive-mml")) {
                s.allocate("assistive-mml");
              }
              i.visitor = new p(i.mmlFactory);
              i.options.MathItem = f(i.options.MathItem);
              if ("addStyles" in i) {
                i.addStyles(o.assistiveStyles);
              }
              return i;
            }
            e.prototype.toMML = function (t) {
              return this.visitor.visitTree(t);
            };
            e.prototype.assistiveMml = function () {
              var t, e;
              if (!this.processed.isSet("assistive-mml")) {
                try {
                  for (var r = s(this.math), i = r.next(); !i.done; i = r.next()) {
                    var o = i.value;
                    o.assistiveMml(this);
                  }
                } catch (n) {
                  t = { error: n };
                } finally {
                  try {
                    if (i && !i.done && (e = r.return)) e.call(r);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                this.processed.set("assistive-mml");
              }
              return this;
            };
            e.prototype.state = function (e, r) {
              if (r === void 0) {
                r = false;
              }
              t.prototype.state.call(this, e, r);
              if (e < l.STATE.ASSISTIVEMML) {
                this.processed.clear("assistive-mml");
              }
              return this;
            };
            return e;
          })(t)),
          (e.OPTIONS = o(o({}, t.OPTIONS), {
            enableAssistiveMml: true,
            renderActions: (0, c.expandable)(o(o({}, t.OPTIONS.renderActions), { assistiveMml: [l.STATE.ASSISTIVEMML] })),
          })),
          (e.assistiveStyles = {
            "mjx-assistive-mml": {
              position: "absolute !important",
              top: "0px",
              left: "0px",
              clip: "rect(1px, 1px, 1px, 1px)",
              padding: "1px 0px 0px 0px !important",
              border: "0px !important",
              display: "block !important",
              width: "auto !important",
              overflow: "hidden !important",
              "-webkit-touch-callout": "none",
              "-webkit-user-select": "none",
              "-khtml-user-select": "none",
              "-moz-user-select": "none",
              "-ms-user-select": "none",
              "user-select": "none",
            },
            'mjx-assistive-mml[display="block"]': { width: "100% !important" },
          }),
          e
        );
      }
      e.AssistiveMmlMathDocumentMixin = v;
      function h(t) {
        t.documentClass = v(t.documentClass);
        return t;
      }
      e.AssistiveMmlHandler = h;
    },
    45626: function (t, e, r) {
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
      e.MmlVisitor = void 0;
      var o = r(61448);
      var n = r(91921);
      var a = (function (t) {
        i(e, t);
        function e(e) {
          if (e === void 0) {
            e = null;
          }
          if (!e) {
            e = new o.MmlFactory();
          }
          return t.call(this, e) || this;
        }
        e.prototype.visitTextNode = function (t) {
          var e = [];
          for (var r = 1; r < arguments.length; r++) {
            e[r - 1] = arguments[r];
          }
        };
        e.prototype.visitXMLNode = function (t) {
          var e = [];
          for (var r = 1; r < arguments.length; r++) {
            e[r - 1] = arguments[r];
          }
        };
        return e;
      })(n.AbstractVisitor);
      e.MmlVisitor = a;
    },
    97810: function (t, e, r) {
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
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            o,
            n = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(o = i.next()).done) n.push(o.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (o && !o.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return n;
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.SerializedMmlVisitor = e.toEntity = e.DATAMJX = void 0;
      var a = r(45626);
      var s = r(18426);
      var l = r(16689);
      e.DATAMJX = "data-mjx-";
      var u = function (t) {
        return "&#x" + t.codePointAt(0).toString(16).toUpperCase() + ";";
      };
      e.toEntity = u;
      var c = (function (t) {
        i(r, t);
        function r() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        r.prototype.visitTree = function (t) {
          return this.visitNode(t, "");
        };
        r.prototype.visitTextNode = function (t, e) {
          return this.quoteHTML(t.getText());
        };
        r.prototype.visitXMLNode = function (t, e) {
          return e + t.getSerializedXML();
        };
        r.prototype.visitInferredMrowNode = function (t, e) {
          var r, i;
          var n = [];
          try {
            for (var a = o(t.childNodes), s = a.next(); !s.done; s = a.next()) {
              var l = s.value;
              n.push(this.visitNode(l, e));
            }
          } catch (u) {
            r = { error: u };
          } finally {
            try {
              if (s && !s.done && (i = a.return)) i.call(a);
            } finally {
              if (r) throw r.error;
            }
          }
          return n.join("\n");
        };
        r.prototype.visitTeXAtomNode = function (t, e) {
          var r = this.childNodeMml(t, e + "  ", "\n");
          var i = e + "<mrow" + this.getAttributes(t) + ">" + (r.match(/\S/) ? "\n" + r + e : "") + "</mrow>";
          return i;
        };
        r.prototype.visitAnnotationNode = function (t, e) {
          return e + "<annotation" + this.getAttributes(t) + ">" + this.childNodeMml(t, "", "") + "</annotation>";
        };
        r.prototype.visitDefault = function (t, e) {
          var r = t.kind;
          var i = n(t.isToken || t.childNodes.length === 0 ? ["", ""] : ["\n", e], 2),
            o = i[0],
            a = i[1];
          var s = this.childNodeMml(t, e + "  ", o);
          return e + "<" + r + this.getAttributes(t) + ">" + (s.match(/\S/) ? o + s + a : "") + "</" + r + ">";
        };
        r.prototype.childNodeMml = function (t, e, r) {
          var i, n;
          var a = "";
          try {
            for (var s = o(t.childNodes), l = s.next(); !l.done; l = s.next()) {
              var u = l.value;
              a += this.visitNode(u, e) + r;
            }
          } catch (c) {
            i = { error: c };
          } finally {
            try {
              if (l && !l.done && (n = s.return)) n.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        };
        r.prototype.getAttributes = function (t) {
          var e, r;
          var i = [];
          var n = this.constructor.defaultAttributes[t.kind] || {};
          var a = Object.assign({}, n, this.getDataAttributes(t), t.attributes.getAllAttributes());
          var s = this.constructor.variants;
          if (a.hasOwnProperty("mathvariant") && s.hasOwnProperty(a.mathvariant)) {
            a.mathvariant = s[a.mathvariant];
          }
          try {
            for (var l = o(Object.keys(a)), u = l.next(); !u.done; u = l.next()) {
              var c = u.value;
              var p = String(a[c]);
              if (p === undefined) continue;
              i.push(c + '="' + this.quoteHTML(p) + '"');
            }
          } catch (f) {
            e = { error: f };
          } finally {
            try {
              if (u && !u.done && (r = l.return)) r.call(l);
            } finally {
              if (e) throw e.error;
            }
          }
          return i.length ? " " + i.join(" ") : "";
        };
        r.prototype.getDataAttributes = function (t) {
          var e = {};
          var r = t.attributes.getExplicit("mathvariant");
          var i = this.constructor.variants;
          r && i.hasOwnProperty(r) && this.setDataAttribute(e, "variant", r);
          t.getProperty("variantForm") && this.setDataAttribute(e, "alternate", "1");
          t.getProperty("pseudoscript") && this.setDataAttribute(e, "pseudoscript", "true");
          t.getProperty("autoOP") === false && this.setDataAttribute(e, "auto-op", "false");
          var o = t.getProperty("scriptalign");
          o && this.setDataAttribute(e, "script-align", o);
          var n = t.getProperty("texClass");
          if (n !== undefined) {
            var a = true;
            if (n === s.TEXCLASS.OP && t.isKind("mi")) {
              var u = t.getText();
              a = !(u.length > 1 && u.match(l.MmlMi.operatorName));
            }
            a && this.setDataAttribute(e, "texclass", n < 0 ? "NONE" : s.TEXCLASSNAMES[n]);
          }
          t.getProperty("scriptlevel") && t.getProperty("useHeight") === false && this.setDataAttribute(e, "smallmatrix", "true");
          return e;
        };
        r.prototype.setDataAttribute = function (t, r, i) {
          t[e.DATAMJX + r] = i;
        };
        r.prototype.quoteHTML = function (t) {
          return t
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\"/g, "&quot;")
            .replace(/[\uD800-\uDBFF]./g, e.toEntity)
            .replace(/[\u0080-\uD7FF\uE000-\uFFFF]/g, e.toEntity);
        };
        r.variants = {
          "-tex-calligraphic": "script",
          "-tex-bold-calligraphic": "bold-script",
          "-tex-oldstyle": "normal",
          "-tex-bold-oldstyle": "bold",
          "-tex-mathit": "italic",
        };
        r.defaultAttributes = { math: { xmlns: "http://www.w3.org/1998/Math/MathML" } };
        return r;
      })(a.MmlVisitor);
      e.SerializedMmlVisitor = c;
    },
    91921: function (t, e, r) {
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
      var o =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            o,
            n = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(o = i.next()).done) n.push(o.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (o && !o.done && (r = i["return"])) r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return n;
        };
      var n =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, o = e.length, n; i < o; i++) {
              if (n || !(i in e)) {
                if (!n) n = Array.prototype.slice.call(e, 0, i);
                n[i] = e[i];
              }
            }
          return t.concat(n || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.AbstractVisitor = void 0;
      var a = r(62335);
      var s = (function () {
        function t(e) {
          var r, o;
          this.nodeHandlers = new Map();
          try {
            for (var n = i(e.getKinds()), a = n.next(); !a.done; a = n.next()) {
              var s = a.value;
              var l = this[t.methodName(s)];
              if (l) {
                this.nodeHandlers.set(s, l);
              }
            }
          } catch (u) {
            r = { error: u };
          } finally {
            try {
              if (a && !a.done && (o = n.return)) o.call(n);
            } finally {
              if (r) throw r.error;
            }
          }
        }
        t.methodName = function (t) {
          return "visit" + (t.charAt(0).toUpperCase() + t.substr(1)).replace(/[^a-z0-9_]/gi, "_") + "Node";
        };
        t.prototype.visitTree = function (t) {
          var e = [];
          for (var r = 1; r < arguments.length; r++) {
            e[r - 1] = arguments[r];
          }
          return this.visitNode.apply(this, n([t], o(e), false));
        };
        t.prototype.visitNode = function (t) {
          var e = [];
          for (var r = 1; r < arguments.length; r++) {
            e[r - 1] = arguments[r];
          }
          var i = this.nodeHandlers.get(t.kind) || this.visitDefault;
          return i.call.apply(i, n([this, t], o(e), false));
        };
        t.prototype.visitDefault = function (t) {
          var e, r;
          var s = [];
          for (var l = 1; l < arguments.length; l++) {
            s[l - 1] = arguments[l];
          }
          if (t instanceof a.AbstractNode) {
            try {
              for (var u = i(t.childNodes), c = u.next(); !c.done; c = u.next()) {
                var p = c.value;
                this.visitNode.apply(this, n([p], o(s), false));
              }
            } catch (f) {
              e = { error: f };
            } finally {
              try {
                if (c && !c.done && (r = u.return)) r.call(u);
              } finally {
                if (e) throw e.error;
              }
            }
          }
        };
        t.prototype.setNodeHandler = function (t, e) {
          this.nodeHandlers.set(t, e);
        };
        t.prototype.removeNodeHandler = function (t) {
          this.nodeHandlers.delete(t);
        };
        return t;
      })();
      e.AbstractVisitor = s;
    },
  },
]);
