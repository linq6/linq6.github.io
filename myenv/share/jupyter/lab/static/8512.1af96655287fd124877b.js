"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [8512],
  {
    89733: function (t, e, r) {
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
      Object.defineProperty(e, "__esModule", { value: true });
      e.AbstractHandler = void 0;
      var i = r(14212);
      var o = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return e;
      })(i.AbstractMathDocument);
      var a = (function () {
        function t(t, e) {
          if (e === void 0) {
            e = 5;
          }
          this.documentClass = o;
          this.adaptor = t;
          this.priority = e;
        }
        Object.defineProperty(t.prototype, "name", {
          get: function () {
            return this.constructor.NAME;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.handlesDocument = function (t) {
          return false;
        };
        t.prototype.create = function (t, e) {
          return new this.documentClass(t, this.adaptor, e);
        };
        t.NAME = "generic";
        return t;
      })();
      e.AbstractHandler = a;
    },
    19068: (t, e, r) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.AbstractInputJax = void 0;
      var n = r(36059);
      var i = r(64905);
      var o = (function () {
        function t(t) {
          if (t === void 0) {
            t = {};
          }
          this.adaptor = null;
          this.mmlFactory = null;
          var e = this.constructor;
          this.options = (0, n.userOptions)((0, n.defaultOptions)({}, e.OPTIONS), t);
          this.preFilters = new i.FunctionList();
          this.postFilters = new i.FunctionList();
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
        t.prototype.executeFilters = function (t, e, r, n) {
          var i = { math: e, document: r, data: n };
          t.execute(i);
          return i.data;
        };
        t.NAME = "generic";
        t.OPTIONS = {};
        return t;
      })();
      e.AbstractInputJax = o;
    },
    14212: function (t, e, r) {
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
      var o =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var n = r.call(t),
            i,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(i = n.next()).done) o.push(i.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (i && !i.done && (r = n["return"])) r.call(n);
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
            for (var n = 0, i = e.length, o; n < i; n++) {
              if (o || !(n in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, n);
                o[n] = e[n];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.AbstractMathDocument = e.resetAllOptions = e.resetOptions = e.RenderList = void 0;
      var s = r(36059);
      var l = r(19068);
      var u = r(73290);
      var c = r(70020);
      var p = r(59719);
      var f = r(61448);
      var h = r(11033);
      var d = r(4180);
      var y = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.create = function (t) {
          var e, r;
          var n = new this();
          try {
            for (var a = i(Object.keys(t)), s = a.next(); !s.done; s = a.next()) {
              var l = s.value;
              var u = o(this.action(l, t[l]), 2),
                c = u[0],
                p = u[1];
              if (p) {
                n.add(c, p);
              }
            }
          } catch (f) {
            e = { error: f };
          } finally {
            try {
              if (s && !s.done && (r = a.return)) r.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
          return n;
        };
        e.action = function (t, e) {
          var r, n, i, a;
          var s, l;
          var u = true;
          var c = e[0];
          if (e.length === 1 || typeof e[1] === "boolean") {
            e.length === 2 && (u = e[1]);
            (r = o(this.methodActions(t), 2)), (s = r[0]), (l = r[1]);
          } else if (typeof e[1] === "string") {
            if (typeof e[2] === "string") {
              e.length === 4 && (u = e[3]);
              var p = o(e.slice(1), 2),
                f = p[0],
                h = p[1];
              (n = o(this.methodActions(f, h), 2)), (s = n[0]), (l = n[1]);
            } else {
              e.length === 3 && (u = e[2]);
              (i = o(this.methodActions(e[1]), 2)), (s = i[0]), (l = i[1]);
            }
          } else {
            e.length === 4 && (u = e[3]);
            (a = o(e.slice(1), 2)), (s = a[0]), (l = a[1]);
          }
          return [{ id: t, renderDoc: s, renderMath: l, convert: u }, c];
        };
        e.methodActions = function (t, e) {
          if (e === void 0) {
            e = t;
          }
          return [
            function (e) {
              t && e[t]();
              return false;
            },
            function (t, r) {
              e && t[e](r);
              return false;
            },
          ];
        };
        e.prototype.renderDoc = function (t, e) {
          var r, n;
          if (e === void 0) {
            e = p.STATE.UNPROCESSED;
          }
          try {
            for (var o = i(this.items), a = o.next(); !a.done; a = o.next()) {
              var s = a.value;
              if (s.priority >= e) {
                if (s.item.renderDoc(t)) return;
              }
            }
          } catch (l) {
            r = { error: l };
          } finally {
            try {
              if (a && !a.done && (n = o.return)) n.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
        };
        e.prototype.renderMath = function (t, e, r) {
          var n, o;
          if (r === void 0) {
            r = p.STATE.UNPROCESSED;
          }
          try {
            for (var a = i(this.items), s = a.next(); !s.done; s = a.next()) {
              var l = s.value;
              if (l.priority >= r) {
                if (l.item.renderMath(t, e)) return;
              }
            }
          } catch (u) {
            n = { error: u };
          } finally {
            try {
              if (s && !s.done && (o = a.return)) o.call(a);
            } finally {
              if (n) throw n.error;
            }
          }
        };
        e.prototype.renderConvert = function (t, e, r) {
          var n, o;
          if (r === void 0) {
            r = p.STATE.LAST;
          }
          try {
            for (var a = i(this.items), s = a.next(); !s.done; s = a.next()) {
              var l = s.value;
              if (l.priority > r) return;
              if (l.item.convert) {
                if (l.item.renderMath(t, e)) return;
              }
            }
          } catch (u) {
            n = { error: u };
          } finally {
            try {
              if (s && !s.done && (o = a.return)) o.call(a);
            } finally {
              if (n) throw n.error;
            }
          }
        };
        e.prototype.findID = function (t) {
          var e, r;
          try {
            for (var n = i(this.items), o = n.next(); !o.done; o = n.next()) {
              var a = o.value;
              if (a.item.id === t) {
                return a.item;
              }
            }
          } catch (s) {
            e = { error: s };
          } finally {
            try {
              if (o && !o.done && (r = n.return)) r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          return null;
        };
        return e;
      })(d.PrioritizedList);
      e.RenderList = y;
      e.resetOptions = { all: false, processed: false, inputJax: null, outputJax: null };
      e.resetAllOptions = { all: true, processed: true, inputJax: [], outputJax: [] };
      var v = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.compile = function (t) {
          return null;
        };
        return e;
      })(l.AbstractInputJax);
      var m = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.typeset = function (t, e) {
          if (e === void 0) {
            e = null;
          }
          return null;
        };
        e.prototype.escaped = function (t, e) {
          return null;
        };
        return e;
      })(u.AbstractOutputJax);
      var x = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return e;
      })(c.AbstractMathList);
      var b = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return e;
      })(p.AbstractMathItem);
      var g = (function () {
        function t(e, r, n) {
          var i = this;
          var o = this.constructor;
          this.document = e;
          this.options = (0, s.userOptions)((0, s.defaultOptions)({}, o.OPTIONS), n);
          this.math = new (this.options["MathList"] || x)();
          this.renderActions = y.create(this.options["renderActions"]);
          this.processed = new t.ProcessBits();
          this.outputJax = this.options["OutputJax"] || new m();
          var a = this.options["InputJax"] || [new v()];
          if (!Array.isArray(a)) {
            a = [a];
          }
          this.inputJax = a;
          this.adaptor = r;
          this.outputJax.setAdaptor(r);
          this.inputJax.map(function (t) {
            return t.setAdaptor(r);
          });
          this.mmlFactory = this.options["MmlFactory"] || new f.MmlFactory();
          this.inputJax.map(function (t) {
            return t.setMmlFactory(i.mmlFactory);
          });
          this.outputJax.initialize();
          this.inputJax.map(function (t) {
            return t.initialize();
          });
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return this.constructor.KIND;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.addRenderAction = function (t) {
          var e = [];
          for (var r = 1; r < arguments.length; r++) {
            e[r - 1] = arguments[r];
          }
          var n = o(y.action(t, e), 2),
            i = n[0],
            a = n[1];
          this.renderActions.add(i, a);
        };
        t.prototype.removeRenderAction = function (t) {
          var e = this.renderActions.findID(t);
          if (e) {
            this.renderActions.remove(e);
          }
        };
        t.prototype.render = function () {
          this.renderActions.renderDoc(this);
          return this;
        };
        t.prototype.rerender = function (t) {
          if (t === void 0) {
            t = p.STATE.RERENDER;
          }
          this.state(t - 1);
          this.render();
          return this;
        };
        t.prototype.convert = function (t, e) {
          if (e === void 0) {
            e = {};
          }
          var r = (0, s.userOptions)(
              {
                format: this.inputJax[0].name,
                display: true,
                end: p.STATE.LAST,
                em: 16,
                ex: 8,
                containerWidth: null,
                lineWidth: 1e6,
                scale: 1,
                family: "",
              },
              e
            ),
            n = r.format,
            i = r.display,
            o = r.end,
            a = r.ex,
            l = r.em,
            u = r.containerWidth,
            c = r.lineWidth,
            f = r.scale,
            h = r.family;
          if (u === null) {
            u = 80 * a;
          }
          var d = this.inputJax.reduce(function (t, e) {
            return e.name === n ? e : t;
          }, null);
          var y = new this.options.MathItem(t, d, i);
          y.start.node = this.adaptor.body(this.document);
          y.setMetrics(l, a, u, c, f);
          if (this.outputJax.options.mtextInheritFont) {
            y.outputData.mtextFamily = h;
          }
          if (this.outputJax.options.merrorInheritFont) {
            y.outputData.merrorFamily = h;
          }
          y.convert(this, o);
          return y.typesetRoot || y.root;
        };
        t.prototype.findMath = function (t) {
          if (t === void 0) {
            t = null;
          }
          this.processed.set("findMath");
          return this;
        };
        t.prototype.compile = function () {
          var t, e, r, n;
          if (!this.processed.isSet("compile")) {
            var o = [];
            try {
              for (var a = i(this.math), s = a.next(); !s.done; s = a.next()) {
                var l = s.value;
                this.compileMath(l);
                if (l.inputData.recompile !== undefined) {
                  o.push(l);
                }
              }
            } catch (f) {
              t = { error: f };
            } finally {
              try {
                if (s && !s.done && (e = a.return)) e.call(a);
              } finally {
                if (t) throw t.error;
              }
            }
            try {
              for (var u = i(o), c = u.next(); !c.done; c = u.next()) {
                var l = c.value;
                var p = l.inputData.recompile;
                l.state(p.state);
                l.inputData.recompile = p;
                this.compileMath(l);
              }
            } catch (h) {
              r = { error: h };
            } finally {
              try {
                if (c && !c.done && (n = u.return)) n.call(u);
              } finally {
                if (r) throw r.error;
              }
            }
            this.processed.set("compile");
          }
          return this;
        };
        t.prototype.compileMath = function (t) {
          try {
            t.compile(this);
          } catch (e) {
            if (e.retry || e.restart) {
              throw e;
            }
            this.options["compileError"](this, t, e);
            t.inputData["error"] = e;
          }
        };
        t.prototype.compileError = function (t, e) {
          t.root = this.mmlFactory.create("math", null, [
            this.mmlFactory.create("merror", { "data-mjx-error": e.message, title: e.message }, [
              this.mmlFactory.create("mtext", null, [this.mmlFactory.create("text").setText("Math input error")]),
            ]),
          ]);
          if (t.display) {
            t.root.attributes.set("display", "block");
          }
          t.inputData.error = e.message;
        };
        t.prototype.typeset = function () {
          var t, e;
          if (!this.processed.isSet("typeset")) {
            try {
              for (var r = i(this.math), n = r.next(); !n.done; n = r.next()) {
                var o = n.value;
                try {
                  o.typeset(this);
                } catch (a) {
                  if (a.retry || a.restart) {
                    throw a;
                  }
                  this.options["typesetError"](this, o, a);
                  o.outputData["error"] = a;
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
            this.processed.set("typeset");
          }
          return this;
        };
        t.prototype.typesetError = function (t, e) {
          t.typesetRoot = this.adaptor.node("mjx-container", { class: "MathJax mjx-output-error", jax: this.outputJax.name }, [
            this.adaptor.node(
              "span",
              { "data-mjx-error": e.message, title: e.message, style: { color: "red", "background-color": "yellow", "line-height": "normal" } },
              [this.adaptor.text("Math output error")]
            ),
          ]);
          if (t.display) {
            this.adaptor.setAttributes(t.typesetRoot, { style: { display: "block", margin: "1em 0", "text-align": "center" } });
          }
          t.outputData.error = e.message;
        };
        t.prototype.getMetrics = function () {
          if (!this.processed.isSet("getMetrics")) {
            this.outputJax.getMetrics(this);
            this.processed.set("getMetrics");
          }
          return this;
        };
        t.prototype.updateDocument = function () {
          var t, e;
          if (!this.processed.isSet("updateDocument")) {
            try {
              for (var r = i(this.math.reversed()), n = r.next(); !n.done; n = r.next()) {
                var o = n.value;
                o.updateDocument(this);
              }
            } catch (a) {
              t = { error: a };
            } finally {
              try {
                if (n && !n.done && (e = r.return)) e.call(r);
              } finally {
                if (t) throw t.error;
              }
            }
            this.processed.set("updateDocument");
          }
          return this;
        };
        t.prototype.removeFromDocument = function (t) {
          if (t === void 0) {
            t = false;
          }
          return this;
        };
        t.prototype.state = function (t, e) {
          var r, n;
          if (e === void 0) {
            e = false;
          }
          try {
            for (var o = i(this.math), a = o.next(); !a.done; a = o.next()) {
              var s = a.value;
              s.state(t, e);
            }
          } catch (l) {
            r = { error: l };
          } finally {
            try {
              if (a && !a.done && (n = o.return)) n.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
          if (t < p.STATE.INSERTED) {
            this.processed.clear("updateDocument");
          }
          if (t < p.STATE.TYPESET) {
            this.processed.clear("typeset");
            this.processed.clear("getMetrics");
          }
          if (t < p.STATE.COMPILED) {
            this.processed.clear("compile");
          }
          return this;
        };
        t.prototype.reset = function (t) {
          var r;
          if (t === void 0) {
            t = { processed: true };
          }
          t = (0, s.userOptions)(Object.assign({}, e.resetOptions), t);
          t.all && Object.assign(t, e.resetAllOptions);
          t.processed && this.processed.reset();
          t.inputJax &&
            this.inputJax.forEach(function (e) {
              return e.reset.apply(e, a([], o(t.inputJax), false));
            });
          t.outputJax && (r = this.outputJax).reset.apply(r, a([], o(t.outputJax), false));
          return this;
        };
        t.prototype.clear = function () {
          this.reset();
          this.math.clear();
          return this;
        };
        t.prototype.concat = function (t) {
          this.math.merge(t);
          return this;
        };
        t.prototype.clearMathItemsWithin = function (t) {
          var e;
          var r = this.getMathItemsWithin(t);
          (e = this.math).remove.apply(e, a([], o(r), false));
          return r;
        };
        t.prototype.getMathItemsWithin = function (t) {
          var e, r, n, o;
          if (!Array.isArray(t)) {
            t = [t];
          }
          var a = this.adaptor;
          var s = [];
          var l = a.getElements(t, this.document);
          try {
            t: for (var u = i(this.math), c = u.next(); !c.done; c = u.next()) {
              var p = c.value;
              try {
                for (var f = ((n = void 0), i(l)), h = f.next(); !h.done; h = f.next()) {
                  var d = h.value;
                  if (p.start.node && a.contains(d, p.start.node)) {
                    s.push(p);
                    continue t;
                  }
                }
              } catch (y) {
                n = { error: y };
              } finally {
                try {
                  if (h && !h.done && (o = f.return)) o.call(f);
                } finally {
                  if (n) throw n.error;
                }
              }
            }
          } catch (v) {
            e = { error: v };
          } finally {
            try {
              if (c && !c.done && (r = u.return)) r.call(u);
            } finally {
              if (e) throw e.error;
            }
          }
          return s;
        };
        t.KIND = "MathDocument";
        t.OPTIONS = {
          OutputJax: null,
          InputJax: null,
          MmlFactory: null,
          MathList: x,
          MathItem: b,
          compileError: function (t, e, r) {
            t.compileError(e, r);
          },
          typesetError: function (t, e, r) {
            t.typesetError(e, r);
          },
          renderActions: (0, s.expandable)({
            find: [p.STATE.FINDMATH, "findMath", "", false],
            compile: [p.STATE.COMPILED],
            metrics: [p.STATE.METRICS, "getMetrics", "", false],
            typeset: [p.STATE.TYPESET],
            update: [p.STATE.INSERTED, "updateDocument", false],
          }),
        };
        t.ProcessBits = (0, h.BitFieldClass)("findMath", "compile", "getMetrics", "typeset", "updateDocument");
        return t;
      })();
      e.AbstractMathDocument = g;
    },
    70020: function (t, e, r) {
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
      Object.defineProperty(e, "__esModule", { value: true });
      e.AbstractMathList = void 0;
      var i = r(24353);
      var o = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.isBefore = function (t, e) {
          return t.start.i < e.start.i || (t.start.i === e.start.i && t.start.n < e.start.n);
        };
        return e;
      })(i.LinkedList);
      e.AbstractMathList = o;
    },
    73290: (t, e, r) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.AbstractOutputJax = void 0;
      var n = r(36059);
      var i = r(64905);
      var o = (function () {
        function t(t) {
          if (t === void 0) {
            t = {};
          }
          this.adaptor = null;
          var e = this.constructor;
          this.options = (0, n.userOptions)((0, n.defaultOptions)({}, e.OPTIONS), t);
          this.postFilters = new i.FunctionList();
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
        t.prototype.executeFilters = function (t, e, r, n) {
          var i = { math: e, document: r, data: n };
          t.execute(i);
          return i.data;
        };
        t.NAME = "generic";
        t.OPTIONS = {};
        return t;
      })();
      e.AbstractOutputJax = o;
    },
    24577: function (t, e, r) {
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
      var i =
        (this && this.__assign) ||
        function () {
          i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) t[i] = e[i];
              }
              return t;
            };
          return i.apply(this, arguments);
        };
      var o =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var n = r.call(t),
            i,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(i = n.next()).done) o.push(i.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (i && !i.done && (r = n["return"])) r.call(n);
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
      e.HTMLDocument = void 0;
      var s = r(14212);
      var l = r(36059);
      var u = r(25815);
      var c = r(43845);
      var p = r(19062);
      var f = r(59719);
      var h = (function (t) {
        n(e, t);
        function e(e, r, n) {
          var i = this;
          var a = o((0, l.separateOptions)(n, p.HTMLDomStrings.OPTIONS), 2),
            s = a[0],
            u = a[1];
          i = t.call(this, e, r, s) || this;
          i.domStrings = i.options["DomStrings"] || new p.HTMLDomStrings(u);
          i.domStrings.adaptor = r;
          i.styles = [];
          return i;
        }
        e.prototype.findPosition = function (t, e, r, n) {
          var i, s;
          var l = this.adaptor;
          try {
            for (var u = a(n[t]), c = u.next(); !c.done; c = u.next()) {
              var p = c.value;
              var f = o(p, 2),
                h = f[0],
                d = f[1];
              if (e <= d && l.kind(h) === "#text") {
                return { node: h, n: Math.max(e, 0), delim: r };
              }
              e -= d;
            }
          } catch (y) {
            i = { error: y };
          } finally {
            try {
              if (c && !c.done && (s = u.return)) s.call(u);
            } finally {
              if (i) throw i.error;
            }
          }
          return { node: null, n: 0, delim: r };
        };
        e.prototype.mathItem = function (t, e, r) {
          var n = t.math;
          var i = this.findPosition(t.n, t.start.n, t.open, r);
          var o = this.findPosition(t.n, t.end.n, t.close, r);
          return new this.options.MathItem(n, e, t.display, i, o);
        };
        e.prototype.findMath = function (t) {
          var e, r, n, i, s, u, c, p, f;
          if (!this.processed.isSet("findMath")) {
            this.adaptor.document = this.document;
            t = (0, l.userOptions)({ elements: this.options.elements || [this.adaptor.body(this.document)] }, t);
            try {
              for (var h = a(this.adaptor.getElements(t["elements"], this.document)), d = h.next(); !d.done; d = h.next()) {
                var y = d.value;
                var v = o([null, null], 2),
                  m = v[0],
                  x = v[1];
                try {
                  for (var b = ((n = void 0), a(this.inputJax)), g = b.next(); !g.done; g = b.next()) {
                    var _ = g.value;
                    var w = new this.options["MathList"]();
                    if (_.processStrings) {
                      if (m === null) {
                        (s = o(this.domStrings.find(y), 2)), (m = s[0]), (x = s[1]);
                      }
                      try {
                        for (var S = ((u = void 0), a(_.findMath(m))), O = S.next(); !O.done; O = S.next()) {
                          var T = O.value;
                          w.push(this.mathItem(T, _, x));
                        }
                      } catch (D) {
                        u = { error: D };
                      } finally {
                        try {
                          if (O && !O.done && (c = S.return)) c.call(S);
                        } finally {
                          if (u) throw u.error;
                        }
                      }
                    } else {
                      try {
                        for (var M = ((p = void 0), a(_.findMath(y))), E = M.next(); !E.done; E = M.next()) {
                          var T = E.value;
                          var A = new this.options.MathItem(T.math, _, T.display, T.start, T.end);
                          w.push(A);
                        }
                      } catch (P) {
                        p = { error: P };
                      } finally {
                        try {
                          if (E && !E.done && (f = M.return)) f.call(M);
                        } finally {
                          if (p) throw p.error;
                        }
                      }
                    }
                    this.math.merge(w);
                  }
                } catch (j) {
                  n = { error: j };
                } finally {
                  try {
                    if (g && !g.done && (i = b.return)) i.call(b);
                  } finally {
                    if (n) throw n.error;
                  }
                }
              }
            } catch (I) {
              e = { error: I };
            } finally {
              try {
                if (d && !d.done && (r = h.return)) r.call(h);
              } finally {
                if (e) throw e.error;
              }
            }
            this.processed.set("findMath");
          }
          return this;
        };
        e.prototype.updateDocument = function () {
          if (!this.processed.isSet("updateDocument")) {
            this.addPageElements();
            this.addStyleSheet();
            t.prototype.updateDocument.call(this);
            this.processed.set("updateDocument");
          }
          return this;
        };
        e.prototype.addPageElements = function () {
          var t = this.adaptor.body(this.document);
          var e = this.documentPageElements();
          if (e) {
            this.adaptor.append(t, e);
          }
        };
        e.prototype.addStyleSheet = function () {
          var t = this.documentStyleSheet();
          var e = this.adaptor;
          if (t && !e.parent(t)) {
            var r = e.head(this.document);
            var n = this.findSheet(r, e.getAttribute(t, "id"));
            if (n) {
              e.replace(t, n);
            } else {
              e.append(r, t);
            }
          }
        };
        e.prototype.findSheet = function (t, e) {
          var r, n;
          if (e) {
            try {
              for (var i = a(this.adaptor.tags(t, "style")), o = i.next(); !o.done; o = i.next()) {
                var s = o.value;
                if (this.adaptor.getAttribute(s, "id") === e) {
                  return s;
                }
              }
            } catch (l) {
              r = { error: l };
            } finally {
              try {
                if (o && !o.done && (n = i.return)) n.call(i);
              } finally {
                if (r) throw r.error;
              }
            }
          }
          return null;
        };
        e.prototype.removeFromDocument = function (t) {
          var e, r;
          if (t === void 0) {
            t = false;
          }
          if (this.processed.isSet("updateDocument")) {
            try {
              for (var n = a(this.math), i = n.next(); !i.done; i = n.next()) {
                var o = i.value;
                if (o.state() >= f.STATE.INSERTED) {
                  o.state(f.STATE.TYPESET, t);
                }
              }
            } catch (s) {
              e = { error: s };
            } finally {
              try {
                if (i && !i.done && (r = n.return)) r.call(n);
              } finally {
                if (e) throw e.error;
              }
            }
          }
          this.processed.clear("updateDocument");
          return this;
        };
        e.prototype.documentStyleSheet = function () {
          return this.outputJax.styleSheet(this);
        };
        e.prototype.documentPageElements = function () {
          return this.outputJax.pageElements(this);
        };
        e.prototype.addStyles = function (t) {
          this.styles.push(t);
        };
        e.prototype.getStyles = function () {
          return this.styles;
        };
        e.KIND = "HTML";
        e.OPTIONS = i(i({}, s.AbstractMathDocument.OPTIONS), {
          renderActions: (0, l.expandable)(
            i(i({}, s.AbstractMathDocument.OPTIONS.renderActions), { styles: [f.STATE.INSERTED + 1, "", "updateStyleSheet", false] })
          ),
          MathList: c.HTMLMathList,
          MathItem: u.HTMLMathItem,
          DomStrings: null,
        });
        return e;
      })(s.AbstractMathDocument);
      e.HTMLDocument = h;
    },
    19062: function (t, e, r) {
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var n = r.call(t),
            i,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(i = n.next()).done) o.push(i.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (i && !i.done && (r = n["return"])) r.call(n);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.HTMLDomStrings = void 0;
      var i = r(36059);
      var o = (function () {
        function t(t) {
          if (t === void 0) {
            t = null;
          }
          var e = this.constructor;
          this.options = (0, i.userOptions)((0, i.defaultOptions)({}, e.OPTIONS), t);
          this.init();
          this.getPatterns();
        }
        t.prototype.init = function () {
          this.strings = [];
          this.string = "";
          this.snodes = [];
          this.nodes = [];
          this.stack = [];
        };
        t.prototype.getPatterns = function () {
          var t = (0, i.makeArray)(this.options["skipHtmlTags"]);
          var e = (0, i.makeArray)(this.options["ignoreHtmlClass"]);
          var r = (0, i.makeArray)(this.options["processHtmlClass"]);
          this.skipHtmlTags = new RegExp("^(?:" + t.join("|") + ")$", "i");
          this.ignoreHtmlClass = new RegExp("(?:^| )(?:" + e.join("|") + ")(?: |$)");
          this.processHtmlClass = new RegExp("(?:^| )(?:" + r + ")(?: |$)");
        };
        t.prototype.pushString = function () {
          if (this.string.match(/\S/)) {
            this.strings.push(this.string);
            this.nodes.push(this.snodes);
          }
          this.string = "";
          this.snodes = [];
        };
        t.prototype.extendString = function (t, e) {
          this.snodes.push([t, e.length]);
          this.string += e;
        };
        t.prototype.handleText = function (t, e) {
          if (!e) {
            this.extendString(t, this.adaptor.value(t));
          }
          return this.adaptor.next(t);
        };
        t.prototype.handleTag = function (t, e) {
          if (!e) {
            var r = this.options["includeHtmlTags"][this.adaptor.kind(t)];
            this.extendString(t, r);
          }
          return this.adaptor.next(t);
        };
        t.prototype.handleContainer = function (t, e) {
          this.pushString();
          var r = this.adaptor.getAttribute(t, "class") || "";
          var n = this.adaptor.kind(t) || "";
          var i = this.processHtmlClass.exec(r);
          var o = t;
          if (this.adaptor.firstChild(t) && !this.adaptor.getAttribute(t, "data-MJX") && (i || !this.skipHtmlTags.exec(n))) {
            if (this.adaptor.next(t)) {
              this.stack.push([this.adaptor.next(t), e]);
            }
            o = this.adaptor.firstChild(t);
            e = (e || this.ignoreHtmlClass.exec(r)) && !i;
          } else {
            o = this.adaptor.next(t);
          }
          return [o, e];
        };
        t.prototype.handleOther = function (t, e) {
          this.pushString();
          return this.adaptor.next(t);
        };
        t.prototype.find = function (t) {
          var e, r;
          this.init();
          var i = this.adaptor.next(t);
          var o = false;
          var a = this.options["includeHtmlTags"];
          while (t && t !== i) {
            var s = this.adaptor.kind(t);
            if (s === "#text") {
              t = this.handleText(t, o);
            } else if (a.hasOwnProperty(s)) {
              t = this.handleTag(t, o);
            } else if (s) {
              (e = n(this.handleContainer(t, o), 2)), (t = e[0]), (o = e[1]);
            } else {
              t = this.handleOther(t, o);
            }
            if (!t && this.stack.length) {
              this.pushString();
              (r = n(this.stack.pop(), 2)), (t = r[0]), (o = r[1]);
            }
          }
          this.pushString();
          var l = [this.strings, this.nodes];
          this.init();
          return l;
        };
        t.OPTIONS = {
          skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code", "annotation", "annotation-xml"],
          includeHtmlTags: { br: "\n", wbr: "", "#comment": "" },
          ignoreHtmlClass: "mathjax_ignore",
          processHtmlClass: "mathjax_process",
        };
        return t;
      })();
      e.HTMLDomStrings = o;
    },
    18512: function (t, e, r) {
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
      Object.defineProperty(e, "__esModule", { value: true });
      e.HTMLHandler = void 0;
      var i = r(89733);
      var o = r(24577);
      var a = (function (t) {
        n(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.documentClass = o.HTMLDocument;
          return e;
        }
        e.prototype.handlesDocument = function (t) {
          var e = this.adaptor;
          if (typeof t === "string") {
            try {
              t = e.parse(t, "text/html");
            } catch (r) {}
          }
          if (t instanceof e.window.Document || t instanceof e.window.HTMLElement || t instanceof e.window.DocumentFragment) {
            return true;
          }
          return false;
        };
        e.prototype.create = function (e, r) {
          var n = this.adaptor;
          if (typeof e === "string") {
            e = n.parse(e, "text/html");
          } else if (e instanceof n.window.HTMLElement || e instanceof n.window.DocumentFragment) {
            var i = e;
            e = n.parse("", "text/html");
            n.append(n.body(e), i);
          }
          return t.prototype.create.call(this, e, r);
        };
        return e;
      })(i.AbstractHandler);
      e.HTMLHandler = a;
    },
    25815: function (t, e, r) {
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
      Object.defineProperty(e, "__esModule", { value: true });
      e.HTMLMathItem = void 0;
      var i = r(59719);
      var o = (function (t) {
        n(e, t);
        function e(e, r, n, i, o) {
          if (n === void 0) {
            n = true;
          }
          if (i === void 0) {
            i = { node: null, n: 0, delim: "" };
          }
          if (o === void 0) {
            o = { node: null, n: 0, delim: "" };
          }
          return t.call(this, e, r, n, i, o) || this;
        }
        Object.defineProperty(e.prototype, "adaptor", {
          get: function () {
            return this.inputJax.adaptor;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.updateDocument = function (t) {
          if (this.state() < i.STATE.INSERTED) {
            if (this.inputJax.processStrings) {
              var e = this.start.node;
              if (e === this.end.node) {
                if (this.end.n && this.end.n < this.adaptor.value(this.end.node).length) {
                  this.adaptor.split(this.end.node, this.end.n);
                }
                if (this.start.n) {
                  e = this.adaptor.split(this.start.node, this.start.n);
                }
                this.adaptor.replace(this.typesetRoot, e);
              } else {
                if (this.start.n) {
                  e = this.adaptor.split(e, this.start.n);
                }
                while (e !== this.end.node) {
                  var r = this.adaptor.next(e);
                  this.adaptor.remove(e);
                  e = r;
                }
                this.adaptor.insert(this.typesetRoot, e);
                if (this.end.n < this.adaptor.value(e).length) {
                  this.adaptor.split(e, this.end.n);
                }
                this.adaptor.remove(e);
              }
            } else {
              this.adaptor.replace(this.typesetRoot, this.start.node);
            }
            this.start.node = this.end.node = this.typesetRoot;
            this.start.n = this.end.n = 0;
            this.state(i.STATE.INSERTED);
          }
        };
        e.prototype.updateStyleSheet = function (t) {
          t.addStyleSheet();
        };
        e.prototype.removeFromDocument = function (t) {
          if (t === void 0) {
            t = false;
          }
          if (this.state() >= i.STATE.TYPESET) {
            var e = this.adaptor;
            var r = this.start.node;
            var n = e.text("");
            if (t) {
              var o = this.start.delim + this.math + this.end.delim;
              if (this.inputJax.processStrings) {
                n = e.text(o);
              } else {
                var a = e.parse(o, "text/html");
                n = e.firstChild(e.body(a));
              }
            }
            if (e.parent(r)) {
              e.replace(n, r);
            }
            this.start.node = this.end.node = n;
            this.start.n = this.end.n = 0;
          }
        };
        return e;
      })(i.AbstractMathItem);
      e.HTMLMathItem = o;
    },
    43845: function (t, e, r) {
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
      Object.defineProperty(e, "__esModule", { value: true });
      e.HTMLMathList = void 0;
      var i = r(70020);
      var o = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return e;
      })(i.AbstractMathList);
      e.HTMLMathList = o;
    },
    11033: function (t, e) {
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
            function n() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
          };
        })();
      var n =
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
      var i =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var n = r.call(t),
            i,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(i = n.next()).done) o.push(i.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (i && !i.done && (r = n["return"])) r.call(n);
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
            for (var n = 0, i = e.length, o; n < i; n++) {
              if (o || !(n in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, n);
                o[n] = e[n];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.BitFieldClass = e.BitField = void 0;
      var a = (function () {
        function t() {
          this.bits = 0;
        }
        t.allocate = function () {
          var e, r;
          var i = [];
          for (var o = 0; o < arguments.length; o++) {
            i[o] = arguments[o];
          }
          try {
            for (var a = n(i), s = a.next(); !s.done; s = a.next()) {
              var l = s.value;
              if (this.has(l)) {
                throw new Error("Bit already allocated for " + l);
              }
              if (this.next === t.MAXBIT) {
                throw new Error("Maximum number of bits already allocated");
              }
              this.names.set(l, this.next);
              this.next <<= 1;
            }
          } catch (u) {
            e = { error: u };
          } finally {
            try {
              if (s && !s.done && (r = a.return)) r.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
        };
        t.has = function (t) {
          return this.names.has(t);
        };
        t.prototype.set = function (t) {
          this.bits |= this.getBit(t);
        };
        t.prototype.clear = function (t) {
          this.bits &= ~this.getBit(t);
        };
        t.prototype.isSet = function (t) {
          return !!(this.bits & this.getBit(t));
        };
        t.prototype.reset = function () {
          this.bits = 0;
        };
        t.prototype.getBit = function (t) {
          var e = this.constructor.names.get(t);
          if (!e) {
            throw new Error("Unknown bit-field name: " + t);
          }
          return e;
        };
        t.MAXBIT = 1 << 31;
        t.next = 1;
        t.names = new Map();
        return t;
      })();
      e.BitField = a;
      function s() {
        var t = [];
        for (var e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }
        var n = (function (t) {
          r(e, t);
          function e() {
            return (t !== null && t.apply(this, arguments)) || this;
          }
          return e;
        })(a);
        n.allocate.apply(n, o([], i(t), false));
        return n;
      }
      e.BitFieldClass = s;
    },
    64905: function (t, e, r) {
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
      var o =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var n = r.call(t),
            i,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(i = n.next()).done) o.push(i.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (i && !i.done && (r = n["return"])) r.call(n);
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
            for (var n = 0, i = e.length, o; n < i; n++) {
              if (o || !(n in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, n);
                o[n] = e[n];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.FunctionList = void 0;
      var s = r(4180);
      var l = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.execute = function () {
          var t, e;
          var r = [];
          for (var n = 0; n < arguments.length; n++) {
            r[n] = arguments[n];
          }
          try {
            for (var s = i(this), l = s.next(); !l.done; l = s.next()) {
              var u = l.value;
              var c = u.item.apply(u, a([], o(r), false));
              if (c === false) {
                return false;
              }
            }
          } catch (p) {
            t = { error: p };
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
          var n = this.items;
          return new Promise(function (e, i) {
            (function s() {
              var l;
              while (++r < n.length) {
                var u = (l = n[r]).item.apply(l, a([], o(t), false));
                if (u instanceof Promise) {
                  u.then(s).catch(function (t) {
                    return i(t);
                  });
                  return;
                }
                if (u === false) {
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
    24353: function (t, e) {
      var r =
        (this && this.__generator) ||
        function (t, e) {
          var r = {
              label: 0,
              sent: function () {
                if (o[0] & 1) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            },
            n,
            i,
            o,
            a;
          return (
            (a = { next: s(0), throw: s(1), return: s(2) }),
            typeof Symbol === "function" &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function s(t) {
            return function (e) {
              return l([t, e]);
            };
          }
          function l(a) {
            if (n) throw new TypeError("Generator is already executing.");
            while (r)
              try {
                if (
                  ((n = 1),
                  i &&
                    (o = a[0] & 2 ? i["return"] : a[0] ? i["throw"] || ((o = i["return"]) && o.call(i), 0) : i.next) &&
                    !(o = o.call(i, a[1])).done)
                )
                  return o;
                if (((i = 0), o)) a = [a[0] & 2, o.value];
                switch (a[0]) {
                  case 0:
                  case 1:
                    o = a;
                    break;
                  case 4:
                    r.label++;
                    return { value: a[1], done: false };
                  case 5:
                    r.label++;
                    i = a[1];
                    a = [0];
                    continue;
                  case 7:
                    a = r.ops.pop();
                    r.trys.pop();
                    continue;
                  default:
                    if (!((o = r.trys), (o = o.length > 0 && o[o.length - 1])) && (a[0] === 6 || a[0] === 2)) {
                      r = 0;
                      continue;
                    }
                    if (a[0] === 3 && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                      r.label = a[1];
                      break;
                    }
                    if (a[0] === 6 && r.label < o[1]) {
                      r.label = o[1];
                      o = a;
                      break;
                    }
                    if (o && r.label < o[2]) {
                      r.label = o[2];
                      r.ops.push(a);
                      break;
                    }
                    if (o[2]) r.ops.pop();
                    r.trys.pop();
                    continue;
                }
                a = e.call(t, r);
              } catch (s) {
                a = [6, s];
                i = 0;
              } finally {
                n = o = 0;
              }
            if (a[0] & 5) throw a[1];
            return { value: a[0] ? a[1] : void 0, done: true };
          }
        };
      var n =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var n = r.call(t),
            i,
            o = [],
            a;
          try {
            while ((e === void 0 || e-- > 0) && !(i = n.next()).done) o.push(i.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              if (i && !i.done && (r = n["return"])) r.call(n);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
      var i =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var n = 0, i = e.length, o; n < i; n++) {
              if (o || !(n in e)) {
                if (!o) o = Array.prototype.slice.call(e, 0, n);
                o[n] = e[n];
              }
            }
          return t.concat(o || Array.prototype.slice.call(e));
        };
      var o =
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
      e.LinkedList = e.ListItem = e.END = void 0;
      e.END = Symbol();
      var a = (function () {
        function t(t) {
          if (t === void 0) {
            t = null;
          }
          this.next = null;
          this.prev = null;
          this.data = t;
        }
        return t;
      })();
      e.ListItem = a;
      var s = (function () {
        function t() {
          var t = [];
          for (var r = 0; r < arguments.length; r++) {
            t[r] = arguments[r];
          }
          this.list = new a(e.END);
          this.list.next = this.list.prev = this.list;
          this.push.apply(this, i([], n(t), false));
        }
        t.prototype.isBefore = function (t, e) {
          return t < e;
        };
        t.prototype.push = function () {
          var t, e;
          var r = [];
          for (var n = 0; n < arguments.length; n++) {
            r[n] = arguments[n];
          }
          try {
            for (var i = o(r), s = i.next(); !s.done; s = i.next()) {
              var l = s.value;
              var u = new a(l);
              u.next = this.list;
              u.prev = this.list.prev;
              this.list.prev = u;
              u.prev.next = u;
            }
          } catch (c) {
            t = { error: c };
          } finally {
            try {
              if (s && !s.done && (e = i.return)) e.call(i);
            } finally {
              if (t) throw t.error;
            }
          }
          return this;
        };
        t.prototype.pop = function () {
          var t = this.list.prev;
          if (t.data === e.END) {
            return null;
          }
          this.list.prev = t.prev;
          t.prev.next = this.list;
          t.next = t.prev = null;
          return t.data;
        };
        t.prototype.unshift = function () {
          var t, e;
          var r = [];
          for (var n = 0; n < arguments.length; n++) {
            r[n] = arguments[n];
          }
          try {
            for (var i = o(r.slice(0).reverse()), s = i.next(); !s.done; s = i.next()) {
              var l = s.value;
              var u = new a(l);
              u.next = this.list.next;
              u.prev = this.list;
              this.list.next = u;
              u.next.prev = u;
            }
          } catch (c) {
            t = { error: c };
          } finally {
            try {
              if (s && !s.done && (e = i.return)) e.call(i);
            } finally {
              if (t) throw t.error;
            }
          }
          return this;
        };
        t.prototype.shift = function () {
          var t = this.list.next;
          if (t.data === e.END) {
            return null;
          }
          this.list.next = t.next;
          t.next.prev = this.list;
          t.next = t.prev = null;
          return t.data;
        };
        t.prototype.remove = function () {
          var t, r;
          var n = [];
          for (var i = 0; i < arguments.length; i++) {
            n[i] = arguments[i];
          }
          var a = new Map();
          try {
            for (var s = o(n), l = s.next(); !l.done; l = s.next()) {
              var u = l.value;
              a.set(u, true);
            }
          } catch (f) {
            t = { error: f };
          } finally {
            try {
              if (l && !l.done && (r = s.return)) r.call(s);
            } finally {
              if (t) throw t.error;
            }
          }
          var c = this.list.next;
          while (c.data !== e.END) {
            var p = c.next;
            if (a.has(c.data)) {
              c.prev.next = c.next;
              c.next.prev = c.prev;
              c.next = c.prev = null;
            }
            c = p;
          }
        };
        t.prototype.clear = function () {
          this.list.next.prev = this.list.prev.next = null;
          this.list.next = this.list.prev = this.list;
          return this;
        };
        t.prototype[Symbol.iterator] = function () {
          var t;
          return r(this, function (r) {
            switch (r.label) {
              case 0:
                t = this.list.next;
                r.label = 1;
              case 1:
                if (!(t.data !== e.END)) return [3, 3];
                return [4, t.data];
              case 2:
                r.sent();
                t = t.next;
                return [3, 1];
              case 3:
                return [2];
            }
          });
        };
        t.prototype.reversed = function () {
          var t;
          return r(this, function (r) {
            switch (r.label) {
              case 0:
                t = this.list.prev;
                r.label = 1;
              case 1:
                if (!(t.data !== e.END)) return [3, 3];
                return [4, t.data];
              case 2:
                r.sent();
                t = t.prev;
                return [3, 1];
              case 3:
                return [2];
            }
          });
        };
        t.prototype.insert = function (t, r) {
          if (r === void 0) {
            r = null;
          }
          if (r === null) {
            r = this.isBefore.bind(this);
          }
          var n = new a(t);
          var i = this.list.next;
          while (i.data !== e.END && r(i.data, n.data)) {
            i = i.next;
          }
          n.prev = i.prev;
          n.next = i;
          i.prev.next = i.prev = n;
          return this;
        };
        t.prototype.sort = function (e) {
          var r, n;
          if (e === void 0) {
            e = null;
          }
          if (e === null) {
            e = this.isBefore.bind(this);
          }
          var i = [];
          try {
            for (var a = o(this), s = a.next(); !s.done; s = a.next()) {
              var l = s.value;
              i.push(new t(l));
            }
          } catch (p) {
            r = { error: p };
          } finally {
            try {
              if (s && !s.done && (n = a.return)) n.call(a);
            } finally {
              if (r) throw r.error;
            }
          }
          this.list.next = this.list.prev = this.list;
          while (i.length > 1) {
            var u = i.shift();
            var c = i.shift();
            u.merge(c, e);
            i.push(u);
          }
          if (i.length) {
            this.list = i[0].list;
          }
          return this;
        };
        t.prototype.merge = function (t, r) {
          var i, o, a, s, l;
          if (r === void 0) {
            r = null;
          }
          if (r === null) {
            r = this.isBefore.bind(this);
          }
          var u = this.list.next;
          var c = t.list.next;
          while (u.data !== e.END && c.data !== e.END) {
            if (r(c.data, u.data)) {
              (i = n([u, c], 2)), (c.prev.next = i[0]), (u.prev.next = i[1]);
              (o = n([u.prev, c.prev], 2)), (c.prev = o[0]), (u.prev = o[1]);
              (a = n([t.list, this.list], 2)), (this.list.prev.next = a[0]), (t.list.prev.next = a[1]);
              (s = n([t.list.prev, this.list.prev], 2)), (this.list.prev = s[0]), (t.list.prev = s[1]);
              (l = n([c.next, u], 2)), (u = l[0]), (c = l[1]);
            } else {
              u = u.next;
            }
          }
          if (c.data !== e.END) {
            this.list.prev.next = t.list.next;
            t.list.next.prev = this.list.prev;
            t.list.prev.next = this.list;
            this.list.prev = t.list.prev;
            t.list.next = t.list.prev = t.list;
          }
          return this;
        };
        return t;
      })();
      e.LinkedList = s;
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
          var n = this.items.length;
          do {
            n--;
          } while (n >= 0 && r < this.items[n].priority);
          this.items.splice(n + 1, 0, { item: e, priority: r });
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
  },
]);
