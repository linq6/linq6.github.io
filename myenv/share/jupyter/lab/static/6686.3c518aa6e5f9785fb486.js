"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [6686, 786],
  {
    73132: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.VERSION = void 0;
      e.VERSION = "3.2.2";
    },
    43582: function (t, e, r) {
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
      Object.defineProperty(e, "__esModule", { value: true });
      e.HandlerList = void 0;
      var o = r(4180);
      var a = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.register = function (t) {
          return this.add(t, t.priority);
        };
        e.prototype.unregister = function (t) {
          this.remove(t);
        };
        e.prototype.handlesDocument = function (t) {
          var e, r;
          try {
            for (var n = i(this), o = n.next(); !o.done; o = n.next()) {
              var a = o.value;
              var s = a.item;
              if (s.handlesDocument(t)) {
                return s;
              }
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
          throw new Error("Can't find handler for document");
        };
        e.prototype.document = function (t, e) {
          if (e === void 0) {
            e = null;
          }
          return this.handlesDocument(t).create(t, e);
        };
        return e;
      })(o.PrioritizedList);
      e.HandlerList = a;
    },
    23644: function (t, e, r) {
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
      Object.defineProperty(e, "__esModule", { value: true });
      e.ParserConfiguration = e.ConfigurationHandler = e.Configuration = void 0;
      var o = r(36059);
      var a = r(84858);
      var s = r(64905);
      var l = r(4180);
      var u = r(56711);
      var c = (function () {
        function t(t, e, r, n, i, o, a, s, l, u, c, f, h) {
          if (e === void 0) {
            e = {};
          }
          if (r === void 0) {
            r = {};
          }
          if (n === void 0) {
            n = {};
          }
          if (i === void 0) {
            i = {};
          }
          if (o === void 0) {
            o = {};
          }
          if (a === void 0) {
            a = {};
          }
          if (s === void 0) {
            s = [];
          }
          if (l === void 0) {
            l = [];
          }
          if (u === void 0) {
            u = null;
          }
          if (c === void 0) {
            c = null;
          }
          this.name = t;
          this.handler = e;
          this.fallback = r;
          this.items = n;
          this.tags = i;
          this.options = o;
          this.nodes = a;
          this.preprocessors = s;
          this.postprocessors = l;
          this.initMethod = u;
          this.configMethod = c;
          this.priority = f;
          this.parser = h;
          this.handler = Object.assign({ character: [], delimiter: [], macro: [], environment: [] }, e);
        }
        t.makeProcessor = function (t, e) {
          return Array.isArray(t) ? t : [t, e];
        };
        t._create = function (e, r) {
          var n = this;
          if (r === void 0) {
            r = {};
          }
          var i = r.priority || l.PrioritizedList.DEFAULTPRIORITY;
          var o = r.init ? this.makeProcessor(r.init, i) : null;
          var a = r.config ? this.makeProcessor(r.config, i) : null;
          var s = (r.preprocessors || []).map(function (t) {
            return n.makeProcessor(t, i);
          });
          var u = (r.postprocessors || []).map(function (t) {
            return n.makeProcessor(t, i);
          });
          var c = r.parser || "tex";
          return new t(e, r.handler || {}, r.fallback || {}, r.items || {}, r.tags || {}, r.options || {}, r.nodes || {}, s, u, o, a, i, c);
        };
        t.create = function (e, r) {
          if (r === void 0) {
            r = {};
          }
          var n = t._create(e, r);
          f.set(e, n);
          return n;
        };
        t.local = function (e) {
          if (e === void 0) {
            e = {};
          }
          return t._create("", e);
        };
        Object.defineProperty(t.prototype, "init", {
          get: function () {
            return this.initMethod ? this.initMethod[0] : null;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "config", {
          get: function () {
            return this.configMethod ? this.configMethod[0] : null;
          },
          enumerable: false,
          configurable: true,
        });
        return t;
      })();
      e.Configuration = c;
      var f;
      (function (t) {
        var e = new Map();
        t.set = function (t, r) {
          e.set(t, r);
        };
        t.get = function (t) {
          return e.get(t);
        };
        t.keys = function () {
          return e.keys();
        };
      })((f = e.ConfigurationHandler || (e.ConfigurationHandler = {})));
      var h = (function () {
        function t(t, e) {
          var r, i, o, u;
          if (e === void 0) {
            e = ["tex"];
          }
          this.initMethod = new s.FunctionList();
          this.configMethod = new s.FunctionList();
          this.configurations = new l.PrioritizedList();
          this.parsers = [];
          this.handlers = new a.SubHandlers();
          this.items = {};
          this.tags = {};
          this.options = {};
          this.nodes = {};
          this.parsers = e;
          try {
            for (var c = n(t.slice().reverse()), f = c.next(); !f.done; f = c.next()) {
              var h = f.value;
              this.addPackage(h);
            }
          } catch (m) {
            r = { error: m };
          } finally {
            try {
              if (f && !f.done && (i = c.return)) i.call(c);
            } finally {
              if (r) throw r.error;
            }
          }
          try {
            for (var p = n(this.configurations), d = p.next(); !d.done; d = p.next()) {
              var v = d.value,
                y = v.item,
                g = v.priority;
              this.append(y, g);
            }
          } catch (b) {
            o = { error: b };
          } finally {
            try {
              if (d && !d.done && (u = p.return)) u.call(p);
            } finally {
              if (o) throw o.error;
            }
          }
        }
        t.prototype.init = function () {
          this.initMethod.execute(this);
        };
        t.prototype.config = function (t) {
          var e, r;
          this.configMethod.execute(this, t);
          try {
            for (var i = n(this.configurations), o = i.next(); !o.done; o = i.next()) {
              var a = o.value;
              this.addFilters(t, a.item);
            }
          } catch (s) {
            e = { error: s };
          } finally {
            try {
              if (o && !o.done && (r = i.return)) r.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
        };
        t.prototype.addPackage = function (t) {
          var e = typeof t === "string" ? t : t[0];
          var r = this.getPackage(e);
          r && this.configurations.add(r, typeof t === "string" ? r.priority : t[1]);
        };
        t.prototype.add = function (t, e, r) {
          var i, a;
          if (r === void 0) {
            r = {};
          }
          var s = this.getPackage(t);
          this.append(s);
          this.configurations.add(s, s.priority);
          this.init();
          var l = e.parseOptions;
          l.nodeFactory.setCreators(s.nodes);
          try {
            for (var c = n(Object.keys(s.items)), f = c.next(); !f.done; f = c.next()) {
              var h = f.value;
              l.itemFactory.setNodeClass(h, s.items[h]);
            }
          } catch (p) {
            i = { error: p };
          } finally {
            try {
              if (f && !f.done && (a = c.return)) a.call(c);
            } finally {
              if (i) throw i.error;
            }
          }
          u.TagsFactory.addTags(s.tags);
          (0, o.defaultOptions)(l.options, s.options);
          (0, o.userOptions)(l.options, r);
          this.addFilters(e, s);
          if (s.config) {
            s.config(this, e);
          }
        };
        t.prototype.getPackage = function (t) {
          var e = f.get(t);
          if (e && this.parsers.indexOf(e.parser) < 0) {
            throw Error("Package ".concat(t, " doesn't target the proper parser"));
          }
          return e;
        };
        t.prototype.append = function (t, e) {
          e = e || t.priority;
          if (t.initMethod) {
            this.initMethod.add(t.initMethod[0], t.initMethod[1]);
          }
          if (t.configMethod) {
            this.configMethod.add(t.configMethod[0], t.configMethod[1]);
          }
          this.handlers.add(t.handler, t.fallback, e);
          Object.assign(this.items, t.items);
          Object.assign(this.tags, t.tags);
          (0, o.defaultOptions)(this.options, t.options);
          Object.assign(this.nodes, t.nodes);
        };
        t.prototype.addFilters = function (t, e) {
          var r, o, a, s;
          try {
            for (var l = n(e.preprocessors), u = l.next(); !u.done; u = l.next()) {
              var c = i(u.value, 2),
                f = c[0],
                h = c[1];
              t.preFilters.add(f, h);
            }
          } catch (g) {
            r = { error: g };
          } finally {
            try {
              if (u && !u.done && (o = l.return)) o.call(l);
            } finally {
              if (r) throw r.error;
            }
          }
          try {
            for (var p = n(e.postprocessors), d = p.next(); !d.done; d = p.next()) {
              var v = i(d.value, 2),
                y = v[0],
                h = v[1];
              t.postFilters.add(y, h);
            }
          } catch (m) {
            a = { error: m };
          } finally {
            try {
              if (d && !d.done && (s = p.return)) s.call(p);
            } finally {
              if (a) throw a.error;
            }
          }
        };
        return t;
      })();
      e.ParserConfiguration = h;
    },
    84858: function (t, e, r) {
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
      Object.defineProperty(e, "__esModule", { value: true });
      e.SubHandlers = e.SubHandler = e.MapHandler = void 0;
      var o = r(4180);
      var a = r(64905);
      var s;
      (function (t) {
        var e = new Map();
        t.register = function (t) {
          e.set(t.name, t);
        };
        t.getMap = function (t) {
          return e.get(t);
        };
      })((s = e.MapHandler || (e.MapHandler = {})));
      var l = (function () {
        function t() {
          this._configuration = new o.PrioritizedList();
          this._fallback = new a.FunctionList();
        }
        t.prototype.add = function (t, e, r) {
          var i, a;
          if (r === void 0) {
            r = o.PrioritizedList.DEFAULTPRIORITY;
          }
          try {
            for (var l = n(t.slice().reverse()), u = l.next(); !u.done; u = l.next()) {
              var c = u.value;
              var f = s.getMap(c);
              if (!f) {
                this.warn("Configuration " + c + " not found! Omitted.");
                return;
              }
              this._configuration.add(f, r);
            }
          } catch (h) {
            i = { error: h };
          } finally {
            try {
              if (u && !u.done && (a = l.return)) a.call(l);
            } finally {
              if (i) throw i.error;
            }
          }
          if (e) {
            this._fallback.add(e, r);
          }
        };
        t.prototype.parse = function (t) {
          var e, r;
          try {
            for (var o = n(this._configuration), a = o.next(); !a.done; a = o.next()) {
              var s = a.value.item;
              var l = s.parse(t);
              if (l) {
                return l;
              }
            }
          } catch (h) {
            e = { error: h };
          } finally {
            try {
              if (a && !a.done && (r = o.return)) r.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
          var u = i(t, 2),
            c = u[0],
            f = u[1];
          Array.from(this._fallback)[0].item(c, f);
        };
        t.prototype.lookup = function (t) {
          var e = this.applicable(t);
          return e ? e.lookup(t) : null;
        };
        t.prototype.contains = function (t) {
          return this.applicable(t) ? true : false;
        };
        t.prototype.toString = function () {
          var t, e;
          var r = [];
          try {
            for (var i = n(this._configuration), o = i.next(); !o.done; o = i.next()) {
              var a = o.value.item;
              r.push(a.name);
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
          return r.join(", ");
        };
        t.prototype.applicable = function (t) {
          var e, r;
          try {
            for (var i = n(this._configuration), o = i.next(); !o.done; o = i.next()) {
              var a = o.value.item;
              if (a.contains(t)) {
                return a;
              }
            }
          } catch (s) {
            e = { error: s };
          } finally {
            try {
              if (o && !o.done && (r = i.return)) r.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          return null;
        };
        t.prototype.retrieve = function (t) {
          var e, r;
          try {
            for (var i = n(this._configuration), o = i.next(); !o.done; o = i.next()) {
              var a = o.value.item;
              if (a.name === t) {
                return a;
              }
            }
          } catch (s) {
            e = { error: s };
          } finally {
            try {
              if (o && !o.done && (r = i.return)) r.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          return null;
        };
        t.prototype.warn = function (t) {
          console.log("TexParser Warning: " + t);
        };
        return t;
      })();
      e.SubHandler = l;
      var u = (function () {
        function t() {
          this.map = new Map();
        }
        t.prototype.add = function (t, e, r) {
          var i, a;
          if (r === void 0) {
            r = o.PrioritizedList.DEFAULTPRIORITY;
          }
          try {
            for (var s = n(Object.keys(t)), u = s.next(); !u.done; u = s.next()) {
              var c = u.value;
              var f = c;
              var h = this.get(f);
              if (!h) {
                h = new l();
                this.set(f, h);
              }
              h.add(t[f], e[f], r);
            }
          } catch (p) {
            i = { error: p };
          } finally {
            try {
              if (u && !u.done && (a = s.return)) a.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
        };
        t.prototype.set = function (t, e) {
          this.map.set(t, e);
        };
        t.prototype.get = function (t) {
          return this.map.get(t);
        };
        t.prototype.retrieve = function (t) {
          var e, r;
          try {
            for (var i = n(this.map.values()), o = i.next(); !o.done; o = i.next()) {
              var a = o.value;
              var s = a.retrieve(t);
              if (s) {
                return s;
              }
            }
          } catch (l) {
            e = { error: l };
          } finally {
            try {
              if (o && !o.done && (r = i.return)) r.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          return null;
        };
        t.prototype.keys = function () {
          return this.map.keys();
        };
        return t;
      })();
      e.SubHandlers = u;
    },
    72895: function (t, e, r) {
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
      var a = r(18426);
      var s = r(5213);
      var l;
      (function (t) {
        var e = new Map([
          ["autoOP", true],
          ["fnOP", true],
          ["movesupsub", true],
          ["subsupOK", true],
          ["texprimestyle", true],
          ["useHeight", true],
          ["variantForm", true],
          ["withDelims", true],
          ["mathaccent", true],
          ["open", true],
          ["close", true],
        ]);
        function r(t) {
          return String.fromCodePoint(parseInt(t, 16));
        }
        t.createEntity = r;
        function l(t) {
          return t.childNodes;
        }
        t.getChildren = l;
        function u(t) {
          return t.getText();
        }
        t.getText = u;
        function c(t, e) {
          var r, i;
          try {
            for (var o = n(e), a = o.next(); !a.done; a = o.next()) {
              var s = a.value;
              t.appendChild(s);
            }
          } catch (l) {
            r = { error: l };
          } finally {
            try {
              if (a && !a.done && (i = o.return)) i.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
        }
        t.appendChildren = c;
        function f(t, e, r) {
          t.attributes.set(e, r);
        }
        t.setAttribute = f;
        function h(t, e, r) {
          t.setProperty(e, r);
        }
        t.setProperty = h;
        function p(t, r) {
          var i, o;
          try {
            for (var a = n(Object.keys(r)), s = a.next(); !s.done; s = a.next()) {
              var l = s.value;
              var u = r[l];
              if (l === "texClass") {
                t.texClass = u;
                t.setProperty(l, u);
              } else if (l === "movablelimits") {
                t.setProperty("movablelimits", u);
                if (t.isKind("mo") || t.isKind("mstyle")) {
                  t.attributes.set("movablelimits", u);
                }
              } else if (l === "inferred") {
              } else if (e.has(l)) {
                t.setProperty(l, u);
              } else {
                t.attributes.set(l, u);
              }
            }
          } catch (c) {
            i = { error: c };
          } finally {
            try {
              if (s && !s.done && (o = a.return)) o.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
        }
        t.setProperties = p;
        function d(t, e) {
          return t.getProperty(e);
        }
        t.getProperty = d;
        function v(t, e) {
          return t.attributes.get(e);
        }
        t.getAttribute = v;
        function y(t) {
          var e = [];
          for (var r = 1; r < arguments.length; r++) {
            e[r - 1] = arguments[r];
          }
          t.removeProperty.apply(t, o([], i(e), false));
        }
        t.removeProperties = y;
        function g(t, e) {
          return t.childNodes[e];
        }
        t.getChildAt = g;
        function m(t, e, r) {
          var n = t.childNodes;
          n[e] = r;
          if (r) {
            r.parent = t;
          }
        }
        t.setChild = m;
        function b(t, e) {
          var r = t.childNodes;
          for (var n = 0; n < r.length; n++) {
            m(e, n, r[n]);
          }
        }
        t.copyChildren = b;
        function w(t, e) {
          e.attributes = t.attributes;
          p(e, t.getAllProperties());
        }
        t.copyAttributes = w;
        function _(t, e) {
          return t.isKind(e);
        }
        t.isType = _;
        function x(t) {
          return t.isEmbellished;
        }
        t.isEmbellished = x;
        function T(t) {
          return t.texClass;
        }
        t.getTexClass = T;
        function S(t) {
          return t.coreMO();
        }
        t.getCoreMO = S;
        function P(t) {
          return t instanceof a.AbstractMmlNode || t instanceof a.AbstractMmlEmptyNode;
        }
        t.isNode = P;
        function k(t) {
          return t.isInferred;
        }
        t.isInferred = k;
        function O(t) {
          var e, r;
          if (!_(t, "mo")) {
            return null;
          }
          var i = t;
          var o = i.getForms();
          try {
            for (var a = n(o), l = a.next(); !l.done; l = a.next()) {
              var u = l.value;
              var c = s.MmlMo.OPTABLE[u][i.getText()];
              if (c) {
                return c;
              }
            }
          } catch (f) {
            e = { error: f };
          } finally {
            try {
              if (l && !l.done && (r = a.return)) r.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
          return null;
        }
        t.getForm = O;
      })(l || (l = {}));
      e["default"] = l;
    },
    3378: function (t, e, r) {
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
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, "__esModule", { value: true });
      var a = r(18426);
      var s = o(r(72895));
      var l = o(r(42880));
      var u = o(r(48406));
      var c = r(63411);
      var f;
      (function (t) {
        var e = 7.2;
        var r = 72;
        var o = {
          em: function (t) {
            return t;
          },
          ex: function (t) {
            return t * 0.43;
          },
          pt: function (t) {
            return t / 10;
          },
          pc: function (t) {
            return t * 1.2;
          },
          px: function (t) {
            return (t * e) / r;
          },
          in: function (t) {
            return t * e;
          },
          cm: function (t) {
            return (t * e) / 2.54;
          },
          mm: function (t) {
            return (t * e) / 25.4;
          },
          mu: function (t) {
            return t / 18;
          },
        };
        var f = "([-+]?([.,]\\d+|\\d+([.,]\\d*)?))";
        var h = "(pt|em|ex|mu|px|mm|cm|in|pc)";
        var p = RegExp("^\\s*" + f + "\\s*" + h + "\\s*$");
        var d = RegExp("^\\s*" + f + "\\s*" + h + " ?");
        function v(t, e) {
          if (e === void 0) {
            e = false;
          }
          var r = t.match(e ? d : p);
          return r ? y([r[1].replace(/,/, "."), r[4], r[0].length]) : [null, null, 0];
        }
        t.matchDimen = v;
        function y(t) {
          var e = n(t, 3),
            r = e[0],
            i = e[1],
            a = e[2];
          if (i !== "mu") {
            return [r, i, a];
          }
          var s = m(o[i](parseFloat(r || "1")));
          return [s.slice(0, -2), "em", a];
        }
        function g(t) {
          var e = n(v(t), 2),
            r = e[0],
            i = e[1];
          var a = parseFloat(r || "1");
          var s = o[i];
          return s ? s(a) : 0;
        }
        t.dimen2em = g;
        function m(t) {
          if (Math.abs(t) < 6e-4) {
            return "0em";
          }
          return t.toFixed(3).replace(/\.?0+$/, "") + "em";
        }
        t.Em = m;
        function b() {
          var t = [];
          for (var e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
          }
          return t
            .map(function (t) {
              return m(t);
            })
            .join(" ");
        }
        t.cols = b;
        function w(t, e, r, n, i, o) {
          if (i === void 0) {
            i = "";
          }
          if (o === void 0) {
            o = "";
          }
          var u = t.nodeFactory;
          var c = u.create("node", "mrow", [], { open: e, close: n, texClass: a.TEXCLASS.INNER });
          var f;
          if (i) {
            f = new l.default("\\" + i + "l" + e, t.parser.stack.env, t).mml();
          } else {
            var h = u.create("text", e);
            f = u.create("node", "mo", [], { fence: true, stretchy: true, symmetric: true, texClass: a.TEXCLASS.OPEN }, h);
          }
          s.default.appendChildren(c, [f, r]);
          if (i) {
            f = new l.default("\\" + i + "r" + n, t.parser.stack.env, t).mml();
          } else {
            var p = u.create("text", n);
            f = u.create("node", "mo", [], { fence: true, stretchy: true, symmetric: true, texClass: a.TEXCLASS.CLOSE }, p);
          }
          o && f.attributes.set("mathcolor", o);
          s.default.appendChildren(c, [f]);
          return c;
        }
        t.fenced = w;
        function _(t, e, r, n) {
          var i = t.nodeFactory.create("node", "mrow", [], { open: e, close: n, texClass: a.TEXCLASS.ORD });
          if (e) {
            s.default.appendChildren(i, [x(t, e, "l")]);
          }
          if (s.default.isType(r, "mrow")) {
            s.default.appendChildren(i, s.default.getChildren(r));
          } else {
            s.default.appendChildren(i, [r]);
          }
          if (n) {
            s.default.appendChildren(i, [x(t, n, "r")]);
          }
          return i;
        }
        t.fixedFence = _;
        function x(t, e, r) {
          if (e === "{" || e === "}") {
            e = "\\" + e;
          }
          var n = "{\\bigg" + r + " " + e + "}";
          var i = "{\\big" + r + " " + e + "}";
          return new l.default("\\mathchoice" + n + i + i + i, {}, t).mml();
        }
        t.mathPalette = x;
        function T(t, e) {
          for (var r = 0, n = e.length; r < n; r++) {
            var i = e[r];
            if (
              i &&
              !s.default.isType(i, "mspace") &&
              (!s.default.isType(i, "TeXAtom") || (s.default.getChildren(i)[0] && s.default.getChildren(s.default.getChildren(i)[0]).length))
            ) {
              if (s.default.isEmbellished(i) || (s.default.isType(i, "TeXAtom") && s.default.getTexClass(i) === a.TEXCLASS.REL)) {
                var o = t.nodeFactory.create("node", "mi");
                e.unshift(o);
              }
              break;
            }
          }
        }
        t.fixInitialMO = T;
        function S(t, e, r, n) {
          if (t.configuration.options.internalMath) {
            return t.configuration.options.internalMath(t, e, r, n);
          }
          var i = n || t.stack.env.font;
          var o = i ? { mathvariant: i } : {};
          var a = [],
            s = 0,
            c = 0,
            f,
            h,
            p = "",
            d = 0;
          if (e.match(/\\?[${}\\]|\\\(|\\(eq)?ref\s*\{/)) {
            while (s < e.length) {
              f = e.charAt(s++);
              if (f === "$") {
                if (p === "$" && d === 0) {
                  h = t.create("node", "TeXAtom", [new l.default(e.slice(c, s - 1), {}, t.configuration).mml()]);
                  a.push(h);
                  p = "";
                  c = s;
                } else if (p === "") {
                  if (c < s - 1) {
                    a.push(P(t, e.slice(c, s - 1), o));
                  }
                  p = "$";
                  c = s;
                }
              } else if (f === "{" && p !== "") {
                d++;
              } else if (f === "}") {
                if (p === "}" && d === 0) {
                  var v = new l.default(e.slice(c, s), {}, t.configuration).mml();
                  h = t.create("node", "TeXAtom", [v], o);
                  a.push(h);
                  p = "";
                  c = s;
                } else if (p !== "") {
                  if (d) {
                    d--;
                  }
                }
              } else if (f === "\\") {
                if (p === "" && e.substr(s).match(/^(eq)?ref\s*\{/)) {
                  var y = RegExp["$&"].length;
                  if (c < s - 1) {
                    a.push(P(t, e.slice(c, s - 1), o));
                  }
                  p = "}";
                  c = s - 1;
                  s += y;
                } else {
                  f = e.charAt(s++);
                  if (f === "(" && p === "") {
                    if (c < s - 2) {
                      a.push(P(t, e.slice(c, s - 2), o));
                    }
                    p = ")";
                    c = s;
                  } else if (f === ")" && p === ")" && d === 0) {
                    h = t.create("node", "TeXAtom", [new l.default(e.slice(c, s - 2), {}, t.configuration).mml()]);
                    a.push(h);
                    p = "";
                    c = s;
                  } else if (f.match(/[${}\\]/) && p === "") {
                    s--;
                    e = e.substr(0, s - 1) + e.substr(s);
                  }
                }
              }
            }
            if (p !== "") {
              throw new u.default("MathNotTerminated", "Math not terminated in text box");
            }
          }
          if (c < e.length) {
            a.push(P(t, e.slice(c), o));
          }
          if (r != null) {
            a = [t.create("node", "mstyle", a, { displaystyle: false, scriptlevel: r })];
          } else if (a.length > 1) {
            a = [t.create("node", "mrow", a)];
          }
          return a;
        }
        t.internalMath = S;
        function P(t, e, r) {
          e = e.replace(/^\s+/, c.entities.nbsp).replace(/\s+$/, c.entities.nbsp);
          var n = t.create("text", e);
          return t.create("node", "mtext", [], r, n);
        }
        t.internalText = P;
        function k(e, r, n, i, o) {
          t.checkMovableLimits(r);
          if (s.default.isType(r, "munderover") && s.default.isEmbellished(r)) {
            s.default.setProperties(s.default.getCoreMO(r), { lspace: 0, rspace: 0 });
            var l = e.create("node", "mo", [], { rspace: 0 });
            r = e.create("node", "mrow", [l, r]);
          }
          var u = e.create("node", "munderover", [r]);
          s.default.setChild(u, i === "over" ? u.over : u.under, n);
          var c = u;
          if (o) {
            c = e.create("node", "TeXAtom", [u], { texClass: a.TEXCLASS.OP, movesupsub: true });
          }
          s.default.setProperty(c, "subsupOK", true);
          return c;
        }
        t.underOver = k;
        function O(t) {
          var e = s.default.isType(t, "mo") ? s.default.getForm(t) : null;
          if (s.default.getProperty(t, "movablelimits") || (e && e[3] && e[3].movablelimits)) {
            s.default.setProperties(t, { movablelimits: false });
          }
        }
        t.checkMovableLimits = O;
        function M(t) {
          if (typeof t !== "string") {
            return t;
          }
          var e = t.trim();
          if (e.match(/\\$/) && t.match(/ $/)) {
            e += " ";
          }
          return e;
        }
        t.trimSpaces = M;
        function E(e, r) {
          r = t.trimSpaces(r || "");
          if (r === "t") {
            e.arraydef.align = "baseline 1";
          } else if (r === "b") {
            e.arraydef.align = "baseline -1";
          } else if (r === "c") {
            e.arraydef.align = "axis";
          } else if (r) {
            e.arraydef.align = r;
          }
          return e;
        }
        t.setArrayAlign = E;
        function C(t, e, r) {
          var n = "";
          var i = "";
          var o = 0;
          while (o < r.length) {
            var a = r.charAt(o++);
            if (a === "\\") {
              n += a + r.charAt(o++);
            } else if (a === "#") {
              a = r.charAt(o++);
              if (a === "#") {
                n += a;
              } else {
                if (!a.match(/[1-9]/) || parseInt(a, 10) > e.length) {
                  throw new u.default("IllegalMacroParam", "Illegal macro parameter reference");
                }
                i = A(t, A(t, i, n), e[parseInt(a, 10) - 1]);
                n = "";
              }
            } else {
              n += a;
            }
          }
          return A(t, i, n);
        }
        t.substituteArgs = C;
        function A(t, e, r) {
          if (r.match(/^[a-z]/i) && e.match(/(^|[^\\])(\\\\)*\\[a-z]+$/i)) {
            e += " ";
          }
          if (e.length + r.length > t.configuration.options["maxBuffer"]) {
            throw new u.default("MaxBufferSize", "MathJax internal buffer size exceeded; is there a" + " recursive macro call?");
          }
          return e + r;
        }
        t.addArgs = A;
        function L(t, e) {
          if (e === void 0) {
            e = true;
          }
          if (++t.macroCount <= t.configuration.options["maxMacros"]) {
            return;
          }
          if (e) {
            throw new u.default("MaxMacroSub1", "MathJax maximum macro substitution count exceeded; " + "is here a recursive macro call?");
          } else {
            throw new u.default("MaxMacroSub2", "MathJax maximum substitution count exceeded; " + "is there a recursive latex environment?");
          }
        }
        t.checkMaxMacros = L;
        function j(t) {
          if (t.stack.global.eqnenv) {
            throw new u.default("ErroneousNestingEq", "Erroneous nesting of equation structures");
          }
          t.stack.global.eqnenv = true;
        }
        t.checkEqnEnv = j;
        function F(t, e) {
          var r = t.copy();
          var n = e.configuration;
          r.walkTree(function (t) {
            var e, r;
            n.addNode(t.kind, t);
            var o = (t.getProperty("in-lists") || "").split(/,/);
            try {
              for (var a = i(o), s = a.next(); !s.done; s = a.next()) {
                var l = s.value;
                l && n.addNode(l, t);
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
          });
          return r;
        }
        t.copyNode = F;
        function I(t, e, r) {
          return r;
        }
        t.MmlFilterAttribute = I;
        function q(t) {
          var e = t.stack.env["font"];
          return e ? { mathvariant: e } : {};
        }
        t.getFontDef = q;
        function D(t, e, r) {
          var n, o;
          if (e === void 0) {
            e = null;
          }
          if (r === void 0) {
            r = false;
          }
          var a = N(t);
          if (e) {
            try {
              for (var s = i(Object.keys(a)), l = s.next(); !l.done; l = s.next()) {
                var c = l.value;
                if (!e.hasOwnProperty(c)) {
                  if (r) {
                    throw new u.default("InvalidOption", "Invalid option: %1", c);
                  }
                  delete a[c];
                }
              }
            } catch (f) {
              n = { error: f };
            } finally {
              try {
                if (l && !l.done && (o = s.return)) o.call(s);
              } finally {
                if (n) throw n.error;
              }
            }
          }
          return a;
        }
        t.keyvalOptions = D;
        function N(t) {
          var e, r;
          var i = {};
          var o = t;
          var a, s, l;
          while (o) {
            (e = n(G(o, ["=", ","]), 3)), (s = e[0]), (a = e[1]), (o = e[2]);
            if (a === "=") {
              (r = n(G(o, [","]), 3)), (l = r[0]), (a = r[1]), (o = r[2]);
              l = l === "false" || l === "true" ? JSON.parse(l) : l;
              i[s] = l;
            } else if (s) {
              i[s] = true;
            }
          }
          return i;
        }
        function R(t, e) {
          while (e > 0) {
            t = t.trim().slice(1, -1);
            e--;
          }
          return t.trim();
        }
        function G(t, e) {
          var r = t.length;
          var n = 0;
          var i = "";
          var o = 0;
          var a = 0;
          var s = true;
          var l = false;
          while (o < r) {
            var c = t[o++];
            switch (c) {
              case " ":
                break;
              case "{":
                if (s) {
                  a++;
                } else {
                  l = false;
                  if (a > n) {
                    a = n;
                  }
                }
                n++;
                break;
              case "}":
                if (n) {
                  n--;
                }
                if (s || l) {
                  a--;
                  l = true;
                }
                s = false;
                break;
              default:
                if (!n && e.indexOf(c) !== -1) {
                  return [l ? "true" : R(i, a), c, t.slice(o)];
                }
                s = false;
                l = false;
            }
            i += c;
          }
          if (n) {
            throw new u.default("ExtraOpenMissingClose", "Extra open brace or missing close brace");
          }
          return [l ? "true" : R(i, a), "", t.slice(o)];
        }
      })(f || (f = {}));
      e["default"] = f;
    },
    14577: function (t, e, r) {
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
      var a =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, "__esModule", { value: true });
      var s = a(r(72895));
      var l = (function () {
        function t(t, e, r) {
          this._factory = t;
          this._env = e;
          this.global = {};
          this.stack = [];
          this.global = { isInner: r };
          this.stack = [this._factory.create("start", this.global)];
          if (e) {
            this.stack[0].env = e;
          }
          this.env = this.stack[0].env;
        }
        Object.defineProperty(t.prototype, "env", {
          get: function () {
            return this._env;
          },
          set: function (t) {
            this._env = t;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.Push = function () {
          var t, e;
          var r = [];
          for (var a = 0; a < arguments.length; a++) {
            r[a] = arguments[a];
          }
          try {
            for (var l = n(r), u = l.next(); !u.done; u = l.next()) {
              var c = u.value;
              if (!c) {
                continue;
              }
              var f = s.default.isNode(c) ? this._factory.create("mml", c) : c;
              f.global = this.global;
              var h = i(this.stack.length ? this.Top().checkItem(f) : [null, true], 2),
                p = h[0],
                d = h[1];
              if (!d) {
                continue;
              }
              if (p) {
                this.Pop();
                this.Push.apply(this, o([], i(p), false));
                continue;
              }
              this.stack.push(f);
              if (f.env) {
                if (f.copyEnv) {
                  Object.assign(f.env, this.env);
                }
                this.env = f.env;
              } else {
                f.env = this.env;
              }
            }
          } catch (v) {
            t = { error: v };
          } finally {
            try {
              if (u && !u.done && (e = l.return)) e.call(l);
            } finally {
              if (t) throw t.error;
            }
          }
        };
        t.prototype.Pop = function () {
          var t = this.stack.pop();
          if (!t.isOpen) {
            delete t.env;
          }
          this.env = this.stack.length ? this.Top().env : {};
          return t;
        };
        t.prototype.Top = function (t) {
          if (t === void 0) {
            t = 1;
          }
          return this.stack.length < t ? null : this.stack[this.stack.length - t];
        };
        t.prototype.Prev = function (t) {
          var e = this.Top();
          return t ? e.First : e.Pop();
        };
        t.prototype.toString = function () {
          return "stack[\n  " + this.stack.join("\n  ") + "\n]";
        };
        return t;
      })();
      e["default"] = l;
    },
    56941: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.Macro = e.Symbol = void 0;
      var r = (function () {
        function t(t, e, r) {
          this._symbol = t;
          this._char = e;
          this._attributes = r;
        }
        Object.defineProperty(t.prototype, "symbol", {
          get: function () {
            return this._symbol;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "char", {
          get: function () {
            return this._char;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "attributes", {
          get: function () {
            return this._attributes;
          },
          enumerable: false,
          configurable: true,
        });
        return t;
      })();
      e.Symbol = r;
      var n = (function () {
        function t(t, e, r) {
          if (r === void 0) {
            r = [];
          }
          this._symbol = t;
          this._func = e;
          this._args = r;
        }
        Object.defineProperty(t.prototype, "symbol", {
          get: function () {
            return this._symbol;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "func", {
          get: function () {
            return this._func;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "args", {
          get: function () {
            return this._args;
          },
          enumerable: false,
          configurable: true,
        });
        return t;
      })();
      e.Macro = n;
    },
    92715: function (t, e, r) {
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
      e.EnvironmentMap =
        e.CommandMap =
        e.MacroMap =
        e.DelimiterMap =
        e.CharacterMap =
        e.AbstractParseMap =
        e.RegExpMap =
        e.AbstractSymbolMap =
        e.parseResult =
          void 0;
      var s = r(56941);
      var l = r(84858);
      function u(t) {
        return t === void 0 ? true : t;
      }
      e.parseResult = u;
      var c = (function () {
        function t(t, e) {
          this._name = t;
          this._parser = e;
          l.MapHandler.register(this);
        }
        Object.defineProperty(t.prototype, "name", {
          get: function () {
            return this._name;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.parserFor = function (t) {
          return this.contains(t) ? this.parser : null;
        };
        t.prototype.parse = function (t) {
          var e = i(t, 2),
            r = e[0],
            n = e[1];
          var o = this.parserFor(n);
          var a = this.lookup(n);
          return o && a ? u(o(r, a)) : null;
        };
        Object.defineProperty(t.prototype, "parser", {
          get: function () {
            return this._parser;
          },
          set: function (t) {
            this._parser = t;
          },
          enumerable: false,
          configurable: true,
        });
        return t;
      })();
      e.AbstractSymbolMap = c;
      var f = (function (t) {
        n(e, t);
        function e(e, r, n) {
          var i = t.call(this, e, r) || this;
          i._regExp = n;
          return i;
        }
        e.prototype.contains = function (t) {
          return this._regExp.test(t);
        };
        e.prototype.lookup = function (t) {
          return this.contains(t) ? t : null;
        };
        return e;
      })(c);
      e.RegExpMap = f;
      var h = (function (t) {
        n(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.map = new Map();
          return e;
        }
        e.prototype.lookup = function (t) {
          return this.map.get(t);
        };
        e.prototype.contains = function (t) {
          return this.map.has(t);
        };
        e.prototype.add = function (t, e) {
          this.map.set(t, e);
        };
        e.prototype.remove = function (t) {
          this.map.delete(t);
        };
        return e;
      })(c);
      e.AbstractParseMap = h;
      var p = (function (t) {
        n(e, t);
        function e(e, r, n) {
          var a, l;
          var u = t.call(this, e, r) || this;
          try {
            for (var c = o(Object.keys(n)), f = c.next(); !f.done; f = c.next()) {
              var h = f.value;
              var p = n[h];
              var d = i(typeof p === "string" ? [p, null] : p, 2),
                v = d[0],
                y = d[1];
              var g = new s.Symbol(h, v, y);
              u.add(h, g);
            }
          } catch (m) {
            a = { error: m };
          } finally {
            try {
              if (f && !f.done && (l = c.return)) l.call(c);
            } finally {
              if (a) throw a.error;
            }
          }
          return u;
        }
        return e;
      })(h);
      e.CharacterMap = p;
      var d = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.parse = function (e) {
          var r = i(e, 2),
            n = r[0],
            o = r[1];
          return t.prototype.parse.call(this, [n, "\\" + o]);
        };
        return e;
      })(p);
      e.DelimiterMap = d;
      var v = (function (t) {
        n(e, t);
        function e(e, r, n) {
          var a, l;
          var u = t.call(this, e, null) || this;
          try {
            for (var c = o(Object.keys(r)), f = c.next(); !f.done; f = c.next()) {
              var h = f.value;
              var p = r[h];
              var d = i(typeof p === "string" ? [p] : p),
                v = d[0],
                y = d.slice(1);
              var g = new s.Macro(h, n[v], y);
              u.add(h, g);
            }
          } catch (m) {
            a = { error: m };
          } finally {
            try {
              if (f && !f.done && (l = c.return)) l.call(c);
            } finally {
              if (a) throw a.error;
            }
          }
          return u;
        }
        e.prototype.parserFor = function (t) {
          var e = this.lookup(t);
          return e ? e.func : null;
        };
        e.prototype.parse = function (t) {
          var e = i(t, 2),
            r = e[0],
            n = e[1];
          var o = this.lookup(n);
          var s = this.parserFor(n);
          if (!o || !s) {
            return null;
          }
          return u(s.apply(void 0, a([r, o.symbol], i(o.args), false)));
        };
        return e;
      })(h);
      e.MacroMap = v;
      var y = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.parse = function (t) {
          var e = i(t, 2),
            r = e[0],
            n = e[1];
          var o = this.lookup(n);
          var s = this.parserFor(n);
          if (!o || !s) {
            return null;
          }
          var l = r.currentCS;
          r.currentCS = "\\" + n;
          var c = s.apply(void 0, a([r, "\\" + o.symbol], i(o.args), false));
          r.currentCS = l;
          return u(c);
        };
        return e;
      })(v);
      e.CommandMap = y;
      var g = (function (t) {
        n(e, t);
        function e(e, r, n, i) {
          var o = t.call(this, e, n, i) || this;
          o.parser = r;
          return o;
        }
        e.prototype.parse = function (t) {
          var e = i(t, 2),
            r = e[0],
            n = e[1];
          var o = this.lookup(n);
          var a = this.parserFor(n);
          if (!o || !a) {
            return null;
          }
          return u(this.parser(r, o.symbol, a, o.args));
        };
        return e;
      })(v);
      e.EnvironmentMap = g;
    },
    56711: function (t, e, r) {
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
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.TagsFactory = e.AllTags = e.NoTags = e.AbstractTags = e.TagInfo = e.Label = void 0;
      var a = o(r(42880));
      var s = (function () {
        function t(t, e) {
          if (t === void 0) {
            t = "???";
          }
          if (e === void 0) {
            e = "";
          }
          this.tag = t;
          this.id = e;
        }
        return t;
      })();
      e.Label = s;
      var l = (function () {
        function t(t, e, r, n, i, o, a, s) {
          if (t === void 0) {
            t = "";
          }
          if (e === void 0) {
            e = false;
          }
          if (r === void 0) {
            r = false;
          }
          if (n === void 0) {
            n = null;
          }
          if (i === void 0) {
            i = "";
          }
          if (o === void 0) {
            o = "";
          }
          if (a === void 0) {
            a = false;
          }
          if (s === void 0) {
            s = "";
          }
          this.env = t;
          this.taggable = e;
          this.defaultTags = r;
          this.tag = n;
          this.tagId = i;
          this.tagFormat = o;
          this.noTag = a;
          this.labelId = s;
        }
        return t;
      })();
      e.TagInfo = l;
      var u = (function () {
        function t() {
          this.counter = 0;
          this.allCounter = 0;
          this.configuration = null;
          this.ids = {};
          this.allIds = {};
          this.labels = {};
          this.allLabels = {};
          this.redo = false;
          this.refUpdate = false;
          this.currentTag = new l();
          this.history = [];
          this.stack = [];
          this.enTag = function (t, e) {
            var r = this.configuration.nodeFactory;
            var n = r.create("node", "mtd", [t]);
            var i = r.create("node", "mlabeledtr", [e, n]);
            var o = r.create("node", "mtable", [i], {
              side: this.configuration.options["tagSide"],
              minlabelspacing: this.configuration.options["tagIndent"],
              displaystyle: true,
            });
            return o;
          };
        }
        t.prototype.start = function (t, e, r) {
          if (this.currentTag) {
            this.stack.push(this.currentTag);
          }
          this.currentTag = new l(t, e, r);
        };
        Object.defineProperty(t.prototype, "env", {
          get: function () {
            return this.currentTag.env;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.end = function () {
          this.history.push(this.currentTag);
          this.currentTag = this.stack.pop();
        };
        t.prototype.tag = function (t, e) {
          this.currentTag.tag = t;
          this.currentTag.tagFormat = e ? t : this.formatTag(t);
          this.currentTag.noTag = false;
        };
        t.prototype.notag = function () {
          this.tag("", true);
          this.currentTag.noTag = true;
        };
        Object.defineProperty(t.prototype, "noTag", {
          get: function () {
            return this.currentTag.noTag;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "label", {
          get: function () {
            return this.currentTag.labelId;
          },
          set: function (t) {
            this.currentTag.labelId = t;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.formatUrl = function (t, e) {
          return e + "#" + encodeURIComponent(t);
        };
        t.prototype.formatTag = function (t) {
          return "(" + t + ")";
        };
        t.prototype.formatId = function (t) {
          return "mjx-eqn:" + t.replace(/\s/g, "_");
        };
        t.prototype.formatNumber = function (t) {
          return t.toString();
        };
        t.prototype.autoTag = function () {
          if (this.currentTag.tag == null) {
            this.counter++;
            this.tag(this.formatNumber(this.counter), false);
          }
        };
        t.prototype.clearTag = function () {
          this.label = "";
          this.tag(null, true);
          this.currentTag.tagId = "";
        };
        t.prototype.getTag = function (t) {
          if (t === void 0) {
            t = false;
          }
          if (t) {
            this.autoTag();
            return this.makeTag();
          }
          var e = this.currentTag;
          if (e.taggable && !e.noTag) {
            if (e.defaultTags) {
              this.autoTag();
            }
            if (e.tag) {
              return this.makeTag();
            }
          }
          return null;
        };
        t.prototype.resetTag = function () {
          this.history = [];
          this.redo = false;
          this.refUpdate = false;
          this.clearTag();
        };
        t.prototype.reset = function (t) {
          if (t === void 0) {
            t = 0;
          }
          this.resetTag();
          this.counter = this.allCounter = t;
          this.allLabels = {};
          this.allIds = {};
        };
        t.prototype.startEquation = function (t) {
          this.history = [];
          this.stack = [];
          this.clearTag();
          this.currentTag = new l("", undefined, undefined);
          this.labels = {};
          this.ids = {};
          this.counter = this.allCounter;
          this.redo = false;
          var e = t.inputData.recompile;
          if (e) {
            this.refUpdate = true;
            this.counter = e.counter;
          }
        };
        t.prototype.finishEquation = function (t) {
          if (this.redo) {
            t.inputData.recompile = { state: t.state(), counter: this.allCounter };
          }
          if (!this.refUpdate) {
            this.allCounter = this.counter;
          }
          Object.assign(this.allIds, this.ids);
          Object.assign(this.allLabels, this.labels);
        };
        t.prototype.finalize = function (t, e) {
          if (!e.display || this.currentTag.env || this.currentTag.tag == null) {
            return t;
          }
          var r = this.makeTag();
          var n = this.enTag(t, r);
          return n;
        };
        t.prototype.makeId = function () {
          this.currentTag.tagId = this.formatId(this.configuration.options["useLabelIds"] ? this.label || this.currentTag.tag : this.currentTag.tag);
        };
        t.prototype.makeTag = function () {
          this.makeId();
          if (this.label) {
            this.labels[this.label] = new s(this.currentTag.tag, this.currentTag.tagId);
          }
          var t = new a.default("\\text{" + this.currentTag.tagFormat + "}", {}, this.configuration).mml();
          return this.configuration.nodeFactory.create("node", "mtd", [t], { id: this.currentTag.tagId });
        };
        return t;
      })();
      e.AbstractTags = u;
      var c = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.autoTag = function () {};
        e.prototype.getTag = function () {
          return !this.currentTag.tag ? null : t.prototype.getTag.call(this);
        };
        return e;
      })(u);
      e.NoTags = c;
      var f = (function (t) {
        n(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.finalize = function (t, e) {
          if (
            !e.display ||
            this.history.find(function (t) {
              return t.taggable;
            })
          ) {
            return t;
          }
          var r = this.getTag(true);
          return this.enTag(t, r);
        };
        return e;
      })(u);
      e.AllTags = f;
      var h;
      (function (t) {
        var e = new Map([
          ["none", c],
          ["all", f],
        ]);
        var r = "none";
        t.OPTIONS = { tags: r, tagSide: "right", tagIndent: "0.8em", useLabelIds: true, ignoreDuplicateLabels: false };
        t.add = function (t, r) {
          e.set(t, r);
        };
        t.addTags = function (e) {
          var r, n;
          try {
            for (var o = i(Object.keys(e)), a = o.next(); !a.done; a = o.next()) {
              var s = a.value;
              t.add(s, e[s]);
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
        t.create = function (t) {
          var n = e.get(t) || e.get(r);
          if (!n) {
            throw Error("Unknown tags class");
          }
          return new n();
        };
        t.setDefault = function (t) {
          r = t;
        };
        t.getDefault = function () {
          return t.create(r);
        };
      })((h = e.TagsFactory || (e.TagsFactory = {})));
    },
    48406: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: true });
      var r = (function () {
        function t(e, r) {
          var n = [];
          for (var i = 2; i < arguments.length; i++) {
            n[i - 2] = arguments[i];
          }
          this.id = e;
          this.message = t.processString(r, n);
        }
        t.processString = function (e, r) {
          var n = e.split(t.pattern);
          for (var i = 1, o = n.length; i < o; i += 2) {
            var a = n[i].charAt(0);
            if (a >= "0" && a <= "9") {
              n[i] = r[parseInt(n[i], 10) - 1];
              if (typeof n[i] === "number") {
                n[i] = n[i].toString();
              }
            } else if (a === "{") {
              a = n[i].substr(1);
              if (a >= "0" && a <= "9") {
                n[i] = r[parseInt(n[i].substr(1, n[i].length - 2), 10) - 1];
                if (typeof n[i] === "number") {
                  n[i] = n[i].toString();
                }
              } else {
                var s = n[i].match(/^\{([a-z]+):%(\d+)\|(.*)\}$/);
                if (s) {
                  n[i] = "%" + n[i];
                }
              }
            }
            if (n[i] == null) {
              n[i] = "???";
            }
          }
          return n.join("");
        };
        t.pattern = /%(\d+|\{\d+\}|\{[a-z]+:\%\d+(?:\|(?:%\{\d+\}|%.|[^\}])*)+\}|.)/g;
        return t;
      })();
      e["default"] = r;
    },
    42880: function (t, e, r) {
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
      var a =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, "__esModule", { value: true });
      var s = a(r(3378));
      var l = a(r(14577));
      var u = a(r(48406));
      var c = r(18426);
      var f = (function () {
        function t(t, e, r) {
          var i, o;
          this._string = t;
          this.configuration = r;
          this.macroCount = 0;
          this.i = 0;
          this.currentCS = "";
          var a = e.hasOwnProperty("isInner");
          var s = e["isInner"];
          delete e["isInner"];
          var u;
          if (e) {
            u = {};
            try {
              for (var c = n(Object.keys(e)), f = c.next(); !f.done; f = c.next()) {
                var h = f.value;
                u[h] = e[h];
              }
            } catch (p) {
              i = { error: p };
            } finally {
              try {
                if (f && !f.done && (o = c.return)) o.call(c);
              } finally {
                if (i) throw i.error;
              }
            }
          }
          this.configuration.pushParser(this);
          this.stack = new l.default(this.itemFactory, u, a ? s : true);
          this.Parse();
          this.Push(this.itemFactory.create("stop"));
        }
        Object.defineProperty(t.prototype, "options", {
          get: function () {
            return this.configuration.options;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "itemFactory", {
          get: function () {
            return this.configuration.itemFactory;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "tags", {
          get: function () {
            return this.configuration.tags;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "string", {
          get: function () {
            return this._string;
          },
          set: function (t) {
            this._string = t;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.parse = function (t, e) {
          return this.configuration.handlers.get(t).parse(e);
        };
        t.prototype.lookup = function (t, e) {
          return this.configuration.handlers.get(t).lookup(e);
        };
        t.prototype.contains = function (t, e) {
          return this.configuration.handlers.get(t).contains(e);
        };
        t.prototype.toString = function () {
          var t, e;
          var r = "";
          try {
            for (var i = n(Array.from(this.configuration.handlers.keys())), o = i.next(); !o.done; o = i.next()) {
              var a = o.value;
              r += a + ": " + this.configuration.handlers.get(a) + "\n";
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
          return r;
        };
        t.prototype.Parse = function () {
          var t;
          while (this.i < this.string.length) {
            t = this.getCodePoint();
            this.i += t.length;
            this.parse("character", [this, t]);
          }
        };
        t.prototype.Push = function (t) {
          if (t instanceof c.AbstractMmlNode && t.isInferred) {
            this.PushAll(t.childNodes);
          } else {
            this.stack.Push(t);
          }
        };
        t.prototype.PushAll = function (t) {
          var e, r;
          try {
            for (var i = n(t), o = i.next(); !o.done; o = i.next()) {
              var a = o.value;
              this.stack.Push(a);
            }
          } catch (s) {
            e = { error: s };
          } finally {
            try {
              if (o && !o.done && (r = i.return)) r.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
        };
        t.prototype.mml = function () {
          if (!this.stack.Top().isKind("mml")) {
            return null;
          }
          var t = this.stack.Top().First;
          this.configuration.popParser();
          return t;
        };
        t.prototype.convertDelimiter = function (t) {
          var e = this.lookup("delimiter", t);
          return e ? e.char : null;
        };
        t.prototype.getCodePoint = function () {
          var t = this.string.codePointAt(this.i);
          return t === undefined ? "" : String.fromCodePoint(t);
        };
        t.prototype.nextIsSpace = function () {
          return !!this.string.charAt(this.i).match(/\s/);
        };
        t.prototype.GetNext = function () {
          while (this.nextIsSpace()) {
            this.i++;
          }
          return this.getCodePoint();
        };
        t.prototype.GetCS = function () {
          var t = this.string.slice(this.i).match(/^(([a-z]+) ?|[\uD800-\uDBFF].|.)/i);
          if (t) {
            this.i += t[0].length;
            return t[2] || t[1];
          } else {
            this.i++;
            return " ";
          }
        };
        t.prototype.GetArgument = function (t, e) {
          switch (this.GetNext()) {
            case "":
              if (!e) {
                throw new u.default("MissingArgFor", "Missing argument for %1", this.currentCS);
              }
              return null;
            case "}":
              if (!e) {
                throw new u.default("ExtraCloseMissingOpen", "Extra close brace or missing open brace");
              }
              return null;
            case "\\":
              this.i++;
              return "\\" + this.GetCS();
            case "{":
              var r = ++this.i,
                n = 1;
              while (this.i < this.string.length) {
                switch (this.string.charAt(this.i++)) {
                  case "\\":
                    this.i++;
                    break;
                  case "{":
                    n++;
                    break;
                  case "}":
                    if (--n === 0) {
                      return this.string.slice(r, this.i - 1);
                    }
                    break;
                }
              }
              throw new u.default("MissingCloseBrace", "Missing close brace");
          }
          var i = this.getCodePoint();
          this.i += i.length;
          return i;
        };
        t.prototype.GetBrackets = function (t, e) {
          if (this.GetNext() !== "[") {
            return e;
          }
          var r = ++this.i,
            n = 0;
          while (this.i < this.string.length) {
            switch (this.string.charAt(this.i++)) {
              case "{":
                n++;
                break;
              case "\\":
                this.i++;
                break;
              case "}":
                if (n-- <= 0) {
                  throw new u.default("ExtraCloseLooking", "Extra close brace while looking for %1", "']'");
                }
                break;
              case "]":
                if (n === 0) {
                  return this.string.slice(r, this.i - 1);
                }
                break;
            }
          }
          throw new u.default("MissingCloseBracket", "Could not find closing ']' for argument to %1", this.currentCS);
        };
        t.prototype.GetDelimiter = function (t, e) {
          var r = this.GetNext();
          this.i += r.length;
          if (this.i <= this.string.length) {
            if (r === "\\") {
              r += this.GetCS();
            } else if (r === "{" && e) {
              this.i--;
              r = this.GetArgument(t).trim();
            }
            if (this.contains("delimiter", r)) {
              return this.convertDelimiter(r);
            }
          }
          throw new u.default("MissingOrUnrecognizedDelim", "Missing or unrecognized delimiter for %1", this.currentCS);
        };
        t.prototype.GetDimen = function (t) {
          if (this.GetNext() === "{") {
            var e = this.GetArgument(t);
            var r = i(s.default.matchDimen(e), 2),
              n = r[0],
              o = r[1];
            if (n) {
              return n + o;
            }
          } else {
            var e = this.string.slice(this.i);
            var a = i(s.default.matchDimen(e, true), 3),
              n = a[0],
              o = a[1],
              l = a[2];
            if (n) {
              this.i += l;
              return n + o;
            }
          }
          throw new u.default("MissingDimOrUnits", "Missing dimension or its units for %1", this.currentCS);
        };
        t.prototype.GetUpTo = function (t, e) {
          while (this.nextIsSpace()) {
            this.i++;
          }
          var r = this.i;
          var n = 0;
          while (this.i < this.string.length) {
            var i = this.i;
            var o = this.GetNext();
            this.i += o.length;
            switch (o) {
              case "\\":
                o += this.GetCS();
                break;
              case "{":
                n++;
                break;
              case "}":
                if (n === 0) {
                  throw new u.default("ExtraCloseLooking", "Extra close brace while looking for %1", e);
                }
                n--;
                break;
            }
            if (n === 0 && o === e) {
              return this.string.slice(r, i);
            }
          }
          throw new u.default("TokenNotFoundForCommand", "Could not find %1 for %2", e, this.currentCS);
        };
        t.prototype.ParseArg = function (e) {
          return new t(this.GetArgument(e), this.stack.env, this.configuration).mml();
        };
        t.prototype.ParseUpTo = function (e, r) {
          return new t(this.GetUpTo(e, r), this.stack.env, this.configuration).mml();
        };
        t.prototype.GetDelimiterArg = function (t) {
          var e = s.default.trimSpaces(this.GetArgument(t));
          if (e === "") {
            return null;
          }
          if (this.contains("delimiter", e)) {
            return e;
          }
          throw new u.default("MissingOrUnrecognizedDelim", "Missing or unrecognized delimiter for %1", this.currentCS);
        };
        t.prototype.GetStar = function () {
          var t = this.GetNext() === "*";
          if (t) {
            this.i++;
          }
          return t;
        };
        t.prototype.create = function (t) {
          var e;
          var r = [];
          for (var n = 1; n < arguments.length; n++) {
            r[n - 1] = arguments[n];
          }
          return (e = this.configuration.nodeFactory).create.apply(e, o([t], i(r), false));
        };
        return t;
      })();
      e["default"] = f;
    },
    90786: (t, e, r) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.mathjax = void 0;
      var n = r(73132);
      var i = r(43582);
      var o = r(97e3);
      e.mathjax = {
        version: n.VERSION,
        handlers: new i.HandlerList(),
        document: function (t, r) {
          return e.mathjax.handlers.document(t, r);
        },
        handleRetriesFor: o.handleRetriesFor,
        retryAfter: o.retryAfter,
        asyncLoad: null,
      };
    },
    26859: (t, e, r) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.asyncLoad = void 0;
      var n = r(90786);
      function i(t) {
        if (!n.mathjax.asyncLoad) {
          return Promise.reject("Can't load '".concat(t, "': No asyncLoad method specified"));
        }
        return new Promise(function (e, r) {
          var i = n.mathjax.asyncLoad(t);
          if (i instanceof Promise) {
            i.then(function (t) {
              return e(t);
            }).catch(function (t) {
              return r(t);
            });
          } else {
            e(i);
          }
        });
      }
      e.asyncLoad = i;
    },
    63411: (t, e, r) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.numeric = e.translate = e.remove = e.add = e.entities = e.options = void 0;
      var n = r(97e3);
      var i = r(26859);
      e.options = { loadMissingEntities: true };
      e.entities = {
        ApplyFunction: "⁡",
        Backslash: "∖",
        Because: "∵",
        Breve: "˘",
        Cap: "⋒",
        CenterDot: "·",
        CircleDot: "⊙",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        Congruent: "≡",
        ContourIntegral: "∮",
        Coproduct: "∐",
        Cross: "⨯",
        Cup: "⋓",
        CupCap: "≍",
        Dagger: "‡",
        Del: "∇",
        Delta: "Δ",
        Diamond: "⋄",
        DifferentialD: "ⅆ",
        DotEqual: "≐",
        DoubleDot: "¨",
        DoubleRightTee: "⊨",
        DoubleVerticalBar: "∥",
        DownArrow: "↓",
        DownLeftVector: "↽",
        DownRightVector: "⇁",
        DownTee: "⊤",
        Downarrow: "⇓",
        Element: "∈",
        EqualTilde: "≂",
        Equilibrium: "⇌",
        Exists: "∃",
        ExponentialE: "ⅇ",
        FilledVerySmallSquare: "▪",
        ForAll: "∀",
        Gamma: "Γ",
        Gg: "⋙",
        GreaterEqual: "≥",
        GreaterEqualLess: "⋛",
        GreaterFullEqual: "≧",
        GreaterLess: "≷",
        GreaterSlantEqual: "⩾",
        GreaterTilde: "≳",
        Hacek: "ˇ",
        Hat: "^",
        HumpDownHump: "≎",
        HumpEqual: "≏",
        Im: "ℑ",
        ImaginaryI: "ⅈ",
        Integral: "∫",
        Intersection: "⋂",
        InvisibleComma: "⁣",
        InvisibleTimes: "⁢",
        Lambda: "Λ",
        Larr: "↞",
        LeftAngleBracket: "⟨",
        LeftArrow: "←",
        LeftArrowRightArrow: "⇆",
        LeftCeiling: "⌈",
        LeftDownVector: "⇃",
        LeftFloor: "⌊",
        LeftRightArrow: "↔",
        LeftTee: "⊣",
        LeftTriangle: "⊲",
        LeftTriangleEqual: "⊴",
        LeftUpVector: "↿",
        LeftVector: "↼",
        Leftarrow: "⇐",
        Leftrightarrow: "⇔",
        LessEqualGreater: "⋚",
        LessFullEqual: "≦",
        LessGreater: "≶",
        LessSlantEqual: "⩽",
        LessTilde: "≲",
        Ll: "⋘",
        Lleftarrow: "⇚",
        LongLeftArrow: "⟵",
        LongLeftRightArrow: "⟷",
        LongRightArrow: "⟶",
        Longleftarrow: "⟸",
        Longleftrightarrow: "⟺",
        Longrightarrow: "⟹",
        Lsh: "↰",
        MinusPlus: "∓",
        NestedGreaterGreater: "≫",
        NestedLessLess: "≪",
        NotDoubleVerticalBar: "∦",
        NotElement: "∉",
        NotEqual: "≠",
        NotExists: "∄",
        NotGreater: "≯",
        NotGreaterEqual: "≱",
        NotLeftTriangle: "⋪",
        NotLeftTriangleEqual: "⋬",
        NotLess: "≮",
        NotLessEqual: "≰",
        NotPrecedes: "⊀",
        NotPrecedesSlantEqual: "⋠",
        NotRightTriangle: "⋫",
        NotRightTriangleEqual: "⋭",
        NotSubsetEqual: "⊈",
        NotSucceeds: "⊁",
        NotSucceedsSlantEqual: "⋡",
        NotSupersetEqual: "⊉",
        NotTilde: "≁",
        NotVerticalBar: "∤",
        Omega: "Ω",
        OverBar: "‾",
        OverBrace: "⏞",
        PartialD: "∂",
        Phi: "Φ",
        Pi: "Π",
        PlusMinus: "±",
        Precedes: "≺",
        PrecedesEqual: "⪯",
        PrecedesSlantEqual: "≼",
        PrecedesTilde: "≾",
        Product: "∏",
        Proportional: "∝",
        Psi: "Ψ",
        Rarr: "↠",
        Re: "ℜ",
        ReverseEquilibrium: "⇋",
        RightAngleBracket: "⟩",
        RightArrow: "→",
        RightArrowLeftArrow: "⇄",
        RightCeiling: "⌉",
        RightDownVector: "⇂",
        RightFloor: "⌋",
        RightTee: "⊢",
        RightTeeArrow: "↦",
        RightTriangle: "⊳",
        RightTriangleEqual: "⊵",
        RightUpVector: "↾",
        RightVector: "⇀",
        Rightarrow: "⇒",
        Rrightarrow: "⇛",
        Rsh: "↱",
        Sigma: "Σ",
        SmallCircle: "∘",
        Sqrt: "√",
        Square: "□",
        SquareIntersection: "⊓",
        SquareSubset: "⊏",
        SquareSubsetEqual: "⊑",
        SquareSuperset: "⊐",
        SquareSupersetEqual: "⊒",
        SquareUnion: "⊔",
        Star: "⋆",
        Subset: "⋐",
        SubsetEqual: "⊆",
        Succeeds: "≻",
        SucceedsEqual: "⪰",
        SucceedsSlantEqual: "≽",
        SucceedsTilde: "≿",
        SuchThat: "∋",
        Sum: "∑",
        Superset: "⊃",
        SupersetEqual: "⊇",
        Supset: "⋑",
        Therefore: "∴",
        Theta: "Θ",
        Tilde: "∼",
        TildeEqual: "≃",
        TildeFullEqual: "≅",
        TildeTilde: "≈",
        UnderBar: "_",
        UnderBrace: "⏟",
        Union: "⋃",
        UnionPlus: "⊎",
        UpArrow: "↑",
        UpDownArrow: "↕",
        UpTee: "⊥",
        Uparrow: "⇑",
        Updownarrow: "⇕",
        Upsilon: "Υ",
        Vdash: "⊩",
        Vee: "⋁",
        VerticalBar: "∣",
        VerticalTilde: "≀",
        Vvdash: "⊪",
        Wedge: "⋀",
        Xi: "Ξ",
        amp: "&",
        acute: "´",
        aleph: "ℵ",
        alpha: "α",
        amalg: "⨿",
        and: "∧",
        ang: "∠",
        angmsd: "∡",
        angsph: "∢",
        ape: "≊",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        beta: "β",
        beth: "ℶ",
        between: "≬",
        bigcirc: "◯",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        blacklozenge: "⧫",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        bowtie: "⋈",
        boxdl: "┐",
        boxdr: "┌",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxul: "┘",
        boxur: "└",
        bsol: "\\",
        bull: "•",
        cap: "∩",
        check: "✓",
        chi: "χ",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledR: "®",
        circledS: "Ⓢ",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        clubs: "♣",
        colon: ":",
        comp: "∁",
        ctdot: "⋯",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cup: "∪",
        curarr: "↷",
        curlyvee: "⋎",
        curlywedge: "⋏",
        dagger: "†",
        daleth: "ℸ",
        ddarr: "⇊",
        deg: "°",
        delta: "δ",
        digamma: "ϝ",
        div: "÷",
        divideontimes: "⋇",
        dot: "˙",
        doteqdot: "≑",
        dotplus: "∔",
        dotsquare: "⊡",
        dtdot: "⋱",
        ecir: "≖",
        efDot: "≒",
        egs: "⪖",
        ell: "ℓ",
        els: "⪕",
        empty: "∅",
        epsi: "ε",
        epsiv: "ϵ",
        erDot: "≓",
        eta: "η",
        eth: "ð",
        flat: "♭",
        fork: "⋔",
        frown: "⌢",
        gEl: "⪌",
        gamma: "γ",
        gap: "⪆",
        gimel: "ℷ",
        gnE: "≩",
        gnap: "⪊",
        gne: "⪈",
        gnsim: "⋧",
        gt: ">",
        gtdot: "⋗",
        harrw: "↭",
        hbar: "ℏ",
        hellip: "…",
        hookleftarrow: "↩",
        hookrightarrow: "↪",
        imath: "ı",
        infin: "∞",
        intcal: "⊺",
        iota: "ι",
        jmath: "ȷ",
        kappa: "κ",
        kappav: "ϰ",
        lEg: "⪋",
        lambda: "λ",
        lap: "⪅",
        larrlp: "↫",
        larrtl: "↢",
        lbrace: "{",
        lbrack: "[",
        le: "≤",
        leftleftarrows: "⇇",
        leftthreetimes: "⋋",
        lessdot: "⋖",
        lmoust: "⎰",
        lnE: "≨",
        lnap: "⪉",
        lne: "⪇",
        lnsim: "⋦",
        longmapsto: "⟼",
        looparrowright: "↬",
        lowast: "∗",
        loz: "◊",
        lt: "<",
        ltimes: "⋉",
        ltri: "◃",
        macr: "¯",
        malt: "✠",
        mho: "℧",
        mu: "μ",
        multimap: "⊸",
        nLeftarrow: "⇍",
        nLeftrightarrow: "⇎",
        nRightarrow: "⇏",
        nVDash: "⊯",
        nVdash: "⊮",
        natur: "♮",
        nearr: "↗",
        nharr: "↮",
        nlarr: "↚",
        not: "¬",
        nrarr: "↛",
        nu: "ν",
        nvDash: "⊭",
        nvdash: "⊬",
        nwarr: "↖",
        omega: "ω",
        omicron: "ο",
        or: "∨",
        osol: "⊘",
        period: ".",
        phi: "φ",
        phiv: "ϕ",
        pi: "π",
        piv: "ϖ",
        prap: "⪷",
        precnapprox: "⪹",
        precneqq: "⪵",
        precnsim: "⋨",
        prime: "′",
        psi: "ψ",
        quot: '"',
        rarrtl: "↣",
        rbrace: "}",
        rbrack: "]",
        rho: "ρ",
        rhov: "ϱ",
        rightrightarrows: "⇉",
        rightthreetimes: "⋌",
        ring: "˚",
        rmoust: "⎱",
        rtimes: "⋊",
        rtri: "▹",
        scap: "⪸",
        scnE: "⪶",
        scnap: "⪺",
        scnsim: "⋩",
        sdot: "⋅",
        searr: "↘",
        sect: "§",
        sharp: "♯",
        sigma: "σ",
        sigmav: "ς",
        simne: "≆",
        smile: "⌣",
        spades: "♠",
        sub: "⊂",
        subE: "⫅",
        subnE: "⫋",
        subne: "⊊",
        supE: "⫆",
        supnE: "⫌",
        supne: "⊋",
        swarr: "↙",
        tau: "τ",
        theta: "θ",
        thetav: "ϑ",
        tilde: "˜",
        times: "×",
        triangle: "▵",
        triangleq: "≜",
        upsi: "υ",
        upuparrows: "⇈",
        veebar: "⊻",
        vellip: "⋮",
        weierp: "℘",
        xi: "ξ",
        yen: "¥",
        zeta: "ζ",
        zigrarr: "⇝",
        nbsp: " ",
        rsquo: "’",
        lsquo: "‘",
      };
      var o = {};
      function a(t, r) {
        Object.assign(e.entities, t);
        o[r] = true;
      }
      e.add = a;
      function s(t) {
        delete e.entities[t];
      }
      e.remove = s;
      function l(t) {
        return t.replace(/&([a-z][a-z0-9]*|#(?:[0-9]+|x[0-9a-f]+));/gi, u);
      }
      e.translate = l;
      function u(t, r) {
        if (r.charAt(0) === "#") {
          return c(r.slice(1));
        }
        if (e.entities[r]) {
          return e.entities[r];
        }
        if (e.options["loadMissingEntities"]) {
          var a = r.match(/^[a-zA-Z](fr|scr|opf)$/) ? RegExp.$1 : r.charAt(0).toLowerCase();
          if (!o[a]) {
            o[a] = true;
            (0, n.retryAfter)((0, i.asyncLoad)("./util/entities/" + a + ".js"));
          }
        }
        return t;
      }
      function c(t) {
        var e = t.charAt(0) === "x" ? parseInt(t.slice(1), 16) : parseInt(t);
        return String.fromCodePoint(e);
      }
      e.numeric = c;
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
          } catch (f) {
            t = { error: f };
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
    97e3: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.retryAfter = e.handleRetriesFor = void 0;
      function r(t) {
        return new Promise(function e(r, n) {
          try {
            r(t());
          } catch (i) {
            if (i.retry && i.retry instanceof Promise) {
              i.retry
                .then(function () {
                  return e(r, n);
                })
                .catch(function (t) {
                  return n(t);
                });
            } else if (i.restart && i.restart.isCallback) {
              MathJax.Callback.After(function () {
                return e(r, n);
              }, i.restart);
            } else {
              n(i);
            }
          }
        });
      }
      e.handleRetriesFor = r;
      function n(t) {
        var e = new Error("MathJax retry");
        e.retry = t;
        throw e;
      }
      e.retryAfter = n;
    },
  },
]);
