"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [6560],
  {
    83663: (t, e, r) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.AbstractFindMath = void 0;
      var i = r(36059);
      var n = (function () {
        function t(t) {
          var e = this.constructor;
          this.options = (0, i.userOptions)((0, i.defaultOptions)({}, e.OPTIONS), t);
        }
        t.OPTIONS = {};
        return t;
      })();
      e.AbstractFindMath = n;
    },
    19068: (t, e, r) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.AbstractInputJax = void 0;
      var i = r(36059);
      var n = r(64905);
      var o = (function () {
        function t(t) {
          if (t === void 0) {
            t = {};
          }
          this.adaptor = null;
          this.mmlFactory = null;
          var e = this.constructor;
          this.options = (0, i.userOptions)((0, i.defaultOptions)({}, e.OPTIONS), t);
          this.preFilters = new n.FunctionList();
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
        t.prototype.setMmlFactory = function (t) {
          this.mmlFactory = t;
        };
        t.prototype.initialize = function () {};
        t.prototype.reset = function () {
          var t = [];
          for (var e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
          }
        };
        Object.defineProperty(t.prototype, "processStrings", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.findMath = function (t, e) {
          return [];
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
      e.AbstractInputJax = o;
    },
    59719: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.newState = e.STATE = e.AbstractMathItem = e.protoItem = void 0;
      function r(t, e, r, i, n, o, a) {
        if (a === void 0) {
          a = null;
        }
        var s = { open: t, math: e, close: r, n: i, start: { n }, end: { n: o }, display: a };
        return s;
      }
      e.protoItem = r;
      var i = (function () {
        function t(t, r, i, n, o) {
          if (i === void 0) {
            i = true;
          }
          if (n === void 0) {
            n = { i: 0, n: 0, delim: "" };
          }
          if (o === void 0) {
            o = { i: 0, n: 0, delim: "" };
          }
          this.root = null;
          this.typesetRoot = null;
          this.metrics = {};
          this.inputData = {};
          this.outputData = {};
          this._state = e.STATE.UNPROCESSED;
          this.math = t;
          this.inputJax = r;
          this.display = i;
          this.start = n;
          this.end = o;
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
        t.prototype.setMetrics = function (t, e, r, i, n) {
          this.metrics = { em: t, ex: e, containerWidth: r, lineWidth: i, scale: n };
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
      e.AbstractMathItem = i;
      e.STATE = { UNPROCESSED: 0, FINDMATH: 10, COMPILED: 20, CONVERT: 100, METRICS: 110, RERENDER: 125, TYPESET: 150, INSERTED: 200, LAST: 1e4 };
      function n(t, r) {
        if (t in e.STATE) {
          throw Error("State " + t + " already exists");
        }
        e.STATE[t] = r;
      }
      e.newState = n;
    },
    36560: function (t, e, r) {
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
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.TeX = void 0;
      var s = r(19068);
      var u = r(36059);
      var l = r(1791);
      var f = a(r(70503));
      var c = a(r(72895));
      var p = a(r(42880));
      var d = a(r(48406));
      var h = a(r(1331));
      var v = r(56711);
      var y = r(23644);
      r(19890);
      var m = (function (t) {
        i(e, t);
        function e(r) {
          if (r === void 0) {
            r = {};
          }
          var i = this;
          var n = o((0, u.separateOptions)(r, e.OPTIONS, l.FindTeX.OPTIONS), 3),
            a = n[0],
            s = n[1],
            c = n[2];
          i = t.call(this, s) || this;
          i.findTeX = i.options["FindTeX"] || new l.FindTeX(c);
          var p = i.options.packages;
          var d = (i.configuration = e.configure(p));
          var y = (i._parseOptions = new h.default(d, [i.options, v.TagsFactory.OPTIONS]));
          (0, u.userOptions)(y.options, a);
          d.config(i);
          e.tags(y, d);
          i.postFilters.add(f.default.cleanSubSup, -6);
          i.postFilters.add(f.default.setInherited, -5);
          i.postFilters.add(f.default.moveLimits, -4);
          i.postFilters.add(f.default.cleanStretchy, -3);
          i.postFilters.add(f.default.cleanAttributes, -2);
          i.postFilters.add(f.default.combineRelations, -1);
          return i;
        }
        e.configure = function (t) {
          var e = new y.ParserConfiguration(t, ["tex"]);
          e.init();
          return e;
        };
        e.tags = function (t, e) {
          v.TagsFactory.addTags(e.tags);
          v.TagsFactory.setDefault(t.options.tags);
          t.tags = v.TagsFactory.getDefault();
          t.tags.configuration = t;
        };
        e.prototype.setMmlFactory = function (e) {
          t.prototype.setMmlFactory.call(this, e);
          this._parseOptions.nodeFactory.setMmlFactory(e);
        };
        Object.defineProperty(e.prototype, "parseOptions", {
          get: function () {
            return this._parseOptions;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.reset = function (t) {
          if (t === void 0) {
            t = 0;
          }
          this.parseOptions.tags.reset(t);
        };
        e.prototype.compile = function (t, e) {
          this.parseOptions.clear();
          this.executeFilters(this.preFilters, t, e, this.parseOptions);
          var r = t.display;
          this.latex = t.math;
          var i;
          this.parseOptions.tags.startEquation(t);
          var n;
          try {
            var o = new p.default(this.latex, { display: r, isInner: false }, this.parseOptions);
            i = o.mml();
            n = o.stack.global;
          } catch (a) {
            if (!(a instanceof d.default)) {
              throw a;
            }
            this.parseOptions.error = true;
            i = this.options.formatError(this, a);
          }
          i = this.parseOptions.nodeFactory.create("node", "math", [i]);
          if (n === null || n === void 0 ? void 0 : n.indentalign) {
            c.default.setAttribute(i, "indentalign", n.indentalign);
          }
          if (r) {
            c.default.setAttribute(i, "display", "block");
          }
          this.parseOptions.tags.finishEquation(t);
          this.parseOptions.root = i;
          this.executeFilters(this.postFilters, t, e, this.parseOptions);
          this.mathNode = this.parseOptions.root;
          return this.mathNode;
        };
        e.prototype.findMath = function (t) {
          return this.findTeX.findMath(t);
        };
        e.prototype.formatError = function (t) {
          var e = t.message.replace(/\n.*/, "");
          return this.parseOptions.nodeFactory.create("error", e, t.id, this.latex);
        };
        e.NAME = "TeX";
        e.OPTIONS = n(n({}, s.AbstractInputJax.OPTIONS), {
          FindTeX: null,
          packages: ["base"],
          digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
          maxBuffer: 5 * 1024,
          formatError: function (t, e) {
            return t.formatError(e);
          },
        });
        return e;
      })(s.AbstractInputJax);
      e.TeX = m;
    },
    70503: function (t, e, r) {
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
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, "__esModule", { value: true });
      var o = r(18426);
      var a = n(r(72895));
      var s;
      (function (t) {
        t.cleanStretchy = function (t) {
          var e, r;
          var n = t.data;
          try {
            for (var o = i(n.getList("fixStretchy")), s = o.next(); !s.done; s = o.next()) {
              var u = s.value;
              if (a.default.getProperty(u, "fixStretchy")) {
                var l = a.default.getForm(u);
                if (l && l[3] && l[3]["stretchy"]) {
                  a.default.setAttribute(u, "stretchy", false);
                }
                var f = u.parent;
                if (!a.default.getTexClass(u) && (!l || !l[2])) {
                  var c = n.nodeFactory.create("node", "TeXAtom", [u]);
                  f.replaceChild(c, u);
                  c.inheritAttributesFrom(u);
                }
                a.default.removeProperties(u, "fixStretchy");
              }
            }
          } catch (p) {
            e = { error: p };
          } finally {
            try {
              if (s && !s.done && (r = o.return)) r.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
        };
        t.cleanAttributes = function (t) {
          var e = t.data.root;
          e.walkTree(function (t, e) {
            var r, n;
            var o = t.attributes;
            if (!o) {
              return;
            }
            var a = new Set((o.get("mjx-keep-attrs") || "").split(/ /));
            delete o.getAllAttributes()["mjx-keep-attrs"];
            try {
              for (var s = i(o.getExplicitNames()), u = s.next(); !u.done; u = s.next()) {
                var l = u.value;
                if (!a.has(l) && o.attributes[l] === t.attributes.getInherited(l)) {
                  delete o.attributes[l];
                }
              }
            } catch (f) {
              r = { error: f };
            } finally {
              try {
                if (u && !u.done && (n = s.return)) n.call(s);
              } finally {
                if (r) throw r.error;
              }
            }
          }, {});
        };
        t.combineRelations = function (t) {
          var n, s, u, l;
          var f = [];
          try {
            for (var c = i(t.data.getList("mo")), p = c.next(); !p.done; p = c.next()) {
              var d = p.value;
              if (
                d.getProperty("relationsCombined") ||
                !d.parent ||
                (d.parent && !a.default.isType(d.parent, "mrow")) ||
                a.default.getTexClass(d) !== o.TEXCLASS.REL
              ) {
                continue;
              }
              var h = d.parent;
              var v = void 0;
              var y = h.childNodes;
              var m = y.indexOf(d) + 1;
              var b = a.default.getProperty(d, "variantForm");
              while (m < y.length && (v = y[m]) && a.default.isType(v, "mo") && a.default.getTexClass(v) === o.TEXCLASS.REL) {
                if (b === a.default.getProperty(v, "variantForm") && r(d, v)) {
                  a.default.appendChildren(d, a.default.getChildren(v));
                  e(["stretchy", "rspace"], d, v);
                  try {
                    for (var g = ((u = void 0), i(v.getPropertyNames())), E = g.next(); !E.done; E = g.next()) {
                      var T = E.value;
                      d.setProperty(T, v.getProperty(T));
                    }
                  } catch (O) {
                    u = { error: O };
                  } finally {
                    try {
                      if (E && !E.done && (l = g.return)) l.call(g);
                    } finally {
                      if (u) throw u.error;
                    }
                  }
                  y.splice(m, 1);
                  f.push(v);
                  v.parent = null;
                  v.setProperty("relationsCombined", true);
                } else {
                  if (d.attributes.getExplicit("rspace") == null) {
                    a.default.setAttribute(d, "rspace", "0pt");
                  }
                  if (v.attributes.getExplicit("lspace") == null) {
                    a.default.setAttribute(v, "lspace", "0pt");
                  }
                  break;
                }
              }
              d.attributes.setInherited("form", d.getForms()[0]);
            }
          } catch (S) {
            n = { error: S };
          } finally {
            try {
              if (p && !p.done && (s = c.return)) s.call(c);
            } finally {
              if (n) throw n.error;
            }
          }
          t.data.removeFromList("mo", f);
        };
        var e = function (t, e, r) {
          var i = e.attributes;
          var n = r.attributes;
          t.forEach(function (t) {
            var e = n.getExplicit(t);
            if (e != null) {
              i.set(t, e);
            }
          });
        };
        var r = function (t, e) {
          var r, n;
          var o = function (t, e) {
            var r = t.getExplicitNames();
            return r.filter(function (r) {
              return r !== e && (r !== "stretchy" || t.getExplicit("stretchy"));
            });
          };
          var a = t.attributes;
          var s = e.attributes;
          var u = o(a, "lspace");
          var l = o(s, "rspace");
          if (u.length !== l.length) {
            return false;
          }
          try {
            for (var f = i(u), c = f.next(); !c.done; c = f.next()) {
              var p = c.value;
              if (a.getExplicit(p) !== s.getExplicit(p)) {
                return false;
              }
            }
          } catch (d) {
            r = { error: d };
          } finally {
            try {
              if (c && !c.done && (n = f.return)) n.call(f);
            } finally {
              if (r) throw r.error;
            }
          }
          return true;
        };
        var n = function (t, e, r) {
          var n, o;
          var s = [];
          try {
            for (var u = i(t.getList("m" + e + r)), l = u.next(); !l.done; l = u.next()) {
              var f = l.value;
              var c = f.childNodes;
              if (c[f[e]] && c[f[r]]) {
                continue;
              }
              var p = f.parent;
              var d = c[f[e]]
                ? t.nodeFactory.create("node", "m" + e, [c[f.base], c[f[e]]])
                : t.nodeFactory.create("node", "m" + r, [c[f.base], c[f[r]]]);
              a.default.copyAttributes(f, d);
              if (p) {
                p.replaceChild(d, f);
              } else {
                t.root = d;
              }
              s.push(f);
            }
          } catch (h) {
            n = { error: h };
          } finally {
            try {
              if (l && !l.done && (o = u.return)) o.call(u);
            } finally {
              if (n) throw n.error;
            }
          }
          t.removeFromList("m" + e + r, s);
        };
        t.cleanSubSup = function (t) {
          var e = t.data;
          if (e.error) {
            return;
          }
          n(e, "sub", "sup");
          n(e, "under", "over");
        };
        var s = function (t, e, r) {
          var n, o;
          var s = [];
          try {
            for (var u = i(t.getList(e)), l = u.next(); !l.done; l = u.next()) {
              var f = l.value;
              if (f.attributes.get("displaystyle")) {
                continue;
              }
              var c = f.childNodes[f.base];
              var p = c.coreMO();
              if (c.getProperty("movablelimits") && !p.attributes.getExplicit("movablelimits")) {
                var d = t.nodeFactory.create("node", r, f.childNodes);
                a.default.copyAttributes(f, d);
                if (f.parent) {
                  f.parent.replaceChild(d, f);
                } else {
                  t.root = d;
                }
                s.push(f);
              }
            }
          } catch (h) {
            n = { error: h };
          } finally {
            try {
              if (l && !l.done && (o = u.return)) o.call(u);
            } finally {
              if (n) throw n.error;
            }
          }
          t.removeFromList(e, s);
        };
        t.moveLimits = function (t) {
          var e = t.data;
          s(e, "munderover", "msubsup");
          s(e, "munder", "msub");
          s(e, "mover", "msup");
        };
        t.setInherited = function (t) {
          t.data.root.setInheritedAttributes({}, t.math["display"], 0, false);
        };
      })(s || (s = {}));
      e["default"] = s;
    },
    1791: function (t, e, r) {
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
      e.FindTeX = void 0;
      var o = r(83663);
      var a = r(33353);
      var s = r(59719);
      var u = (function (t) {
        i(e, t);
        function e(e) {
          var r = t.call(this, e) || this;
          r.getPatterns();
          return r;
        }
        e.prototype.getPatterns = function () {
          var t = this;
          var e = this.options;
          var r = [],
            i = [],
            n = [];
          this.end = {};
          this.env = this.sub = 0;
          var o = 1;
          e["inlineMath"].forEach(function (e) {
            return t.addPattern(r, e, false);
          });
          e["displayMath"].forEach(function (e) {
            return t.addPattern(r, e, true);
          });
          if (r.length) {
            i.push(r.sort(a.sortLength).join("|"));
          }
          if (e["processEnvironments"]) {
            i.push("\\\\begin\\s*\\{([^}]*)\\}");
            this.env = o;
            o++;
          }
          if (e["processEscapes"]) {
            n.push("\\\\([\\\\$])");
          }
          if (e["processRefs"]) {
            n.push("(\\\\(?:eq)?ref\\s*\\{[^}]*\\})");
          }
          if (n.length) {
            i.push("(" + n.join("|") + ")");
            this.sub = o;
          }
          this.start = new RegExp(i.join("|"), "g");
          this.hasPatterns = i.length > 0;
        };
        e.prototype.addPattern = function (t, e, r) {
          var i = n(e, 2),
            o = i[0],
            s = i[1];
          t.push((0, a.quotePattern)(o));
          this.end[o] = [s, r, this.endPattern(s)];
        };
        e.prototype.endPattern = function (t, e) {
          return new RegExp((e || (0, a.quotePattern)(t)) + "|\\\\(?:[a-zA-Z]|.)|[{}]", "g");
        };
        e.prototype.findEnd = function (t, e, r, i) {
          var o = n(i, 3),
            a = o[0],
            u = o[1],
            l = o[2];
          var f = (l.lastIndex = r.index + r[0].length);
          var c,
            p = 0;
          while ((c = l.exec(t))) {
            if ((c[1] || c[0]) === a && p === 0) {
              return (0, s.protoItem)(r[0], t.substr(f, c.index - f), c[0], e, r.index, c.index + c[0].length, u);
            } else if (c[0] === "{") {
              p++;
            } else if (c[0] === "}" && p) {
              p--;
            }
          }
          return null;
        };
        e.prototype.findMathInString = function (t, e, r) {
          var i, n;
          this.start.lastIndex = 0;
          while ((i = this.start.exec(r))) {
            if (i[this.env] !== undefined && this.env) {
              var o = "\\\\end\\s*(\\{" + (0, a.quotePattern)(i[this.env]) + "\\})";
              n = this.findEnd(r, e, i, ["{" + i[this.env] + "}", true, this.endPattern(null, o)]);
              if (n) {
                n.math = n.open + n.math + n.close;
                n.open = n.close = "";
              }
            } else if (i[this.sub] !== undefined && this.sub) {
              var u = i[this.sub];
              var o = i.index + i[this.sub].length;
              if (u.length === 2) {
                n = (0, s.protoItem)("", u.substr(1), "", e, i.index, o);
              } else {
                n = (0, s.protoItem)("", u, "", e, i.index, o, false);
              }
            } else {
              n = this.findEnd(r, e, i, this.end[i[0]]);
            }
            if (n) {
              t.push(n);
              this.start.lastIndex = n.end.n;
            }
          }
        };
        e.prototype.findMath = function (t) {
          var e = [];
          if (this.hasPatterns) {
            for (var r = 0, i = t.length; r < i; r++) {
              this.findMathInString(e, r, t[r]);
            }
          }
          return e;
        };
        e.OPTIONS = {
          inlineMath: [["\\(", "\\)"]],
          displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"],
          ],
          processEscapes: true,
          processEnvironments: true,
          processRefs: true,
        };
        return e;
      })(o.AbstractFindMath);
      e.FindTeX = u;
    },
  },
]);
