"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7775],
  {
    86161: function (e, t) {
      var r =
        (this && this.__values) ||
        function (e) {
          var t = typeof Symbol === "function" && Symbol.iterator,
            r = t && e[t],
            a = 0;
          if (r) return r.call(e);
          if (e && typeof e.length === "number")
            return {
              next: function () {
                if (e && a >= e.length) e = void 0;
                return { value: e && e[a++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var a =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            i = [],
            o;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) i.push(n.value);
          } catch (s) {
            o = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        };
      var n =
        (this && this.__spreadArray) ||
        function (e, t, r) {
          if (r || arguments.length === 2)
            for (var a = 0, n = t.length, i; a < n; a++) {
              if (i || !(a in t)) {
                if (!i) i = Array.prototype.slice.call(t, 0, a);
                i[a] = t[a];
              }
            }
          return e.concat(i || Array.prototype.slice.call(t));
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.AbstractFactory = void 0;
      var i = (function () {
        function e(e) {
          var t, a;
          if (e === void 0) {
            e = null;
          }
          this.defaultKind = "unknown";
          this.nodeMap = new Map();
          this.node = {};
          if (e === null) {
            e = this.constructor.defaultNodes;
          }
          try {
            for (var n = r(Object.keys(e)), i = n.next(); !i.done; i = n.next()) {
              var o = i.value;
              this.setNodeClass(o, e[o]);
            }
          } catch (s) {
            t = { error: s };
          } finally {
            try {
              if (i && !i.done && (a = n.return)) a.call(n);
            } finally {
              if (t) throw t.error;
            }
          }
        }
        e.prototype.create = function (e) {
          var t = [];
          for (var r = 1; r < arguments.length; r++) {
            t[r - 1] = arguments[r];
          }
          return (this.node[e] || this.node[this.defaultKind]).apply(void 0, n([], a(t), false));
        };
        e.prototype.setNodeClass = function (e, t) {
          this.nodeMap.set(e, t);
          var r = this;
          var i = this.nodeMap.get(e);
          this.node[e] = function () {
            var e = [];
            for (var t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }
            return new (i.bind.apply(i, n([void 0, r], a(e), false)))();
          };
        };
        e.prototype.getNodeClass = function (e) {
          return this.nodeMap.get(e);
        };
        e.prototype.deleteNodeClass = function (e) {
          this.nodeMap.delete(e);
          delete this.node[e];
        };
        e.prototype.nodeIsKind = function (e, t) {
          return e instanceof this.getNodeClass(t);
        };
        e.prototype.getKinds = function () {
          return Array.from(this.nodeMap.keys());
        };
        e.defaultNodes = {};
        return e;
      })();
      t.AbstractFactory = i;
    },
    38624: function (e, t, r) {
      var a =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            i = [],
            o;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) i.push(n.value);
          } catch (s) {
            o = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        };
      var n =
        (this && this.__spreadArray) ||
        function (e, t, r) {
          if (r || arguments.length === 2)
            for (var a = 0, n = t.length, i; a < n; a++) {
              if (i || !(a in t)) {
                if (!i) i = Array.prototype.slice.call(t, 0, a);
                i[a] = t[a];
              }
            }
          return e.concat(i || Array.prototype.slice.call(t));
        };
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.NodeFactory = void 0;
      var o = i(r(72895));
      var s = (function () {
        function e() {
          this.mmlFactory = null;
          this.factory = { node: e.createNode, token: e.createToken, text: e.createText, error: e.createError };
        }
        e.createNode = function (e, t, r, a, n) {
          if (r === void 0) {
            r = [];
          }
          if (a === void 0) {
            a = {};
          }
          var i = e.mmlFactory.create(t);
          i.setChildren(r);
          if (n) {
            i.appendChild(n);
          }
          o.default.setProperties(i, a);
          return i;
        };
        e.createToken = function (e, t, r, a) {
          if (r === void 0) {
            r = {};
          }
          if (a === void 0) {
            a = "";
          }
          var n = e.create("text", a);
          return e.create("node", t, [], r, n);
        };
        e.createText = function (e, t) {
          if (t == null) {
            return null;
          }
          return e.mmlFactory.create("text").setText(t);
        };
        e.createError = function (e, t) {
          var r = e.create("text", t);
          var a = e.create("node", "mtext", [], {}, r);
          var n = e.create("node", "merror", [a], { "data-mjx-error": t });
          return n;
        };
        e.prototype.setMmlFactory = function (e) {
          this.mmlFactory = e;
        };
        e.prototype.set = function (e, t) {
          this.factory[e] = t;
        };
        e.prototype.setCreators = function (e) {
          for (var t in e) {
            this.set(t, e[t]);
          }
        };
        e.prototype.create = function (e) {
          var t = [];
          for (var r = 1; r < arguments.length; r++) {
            t[r - 1] = arguments[r];
          }
          var i = this.factory[e] || this.factory["node"];
          var o = i.apply(void 0, n([this, t[0]], a(t.slice(1)), false));
          if (e === "node") {
            this.configuration.addNode(t[0], o);
          }
          return o;
        };
        e.prototype.get = function (e) {
          return this.factory[e];
        };
        return e;
      })();
      t.NodeFactory = s;
    },
    96004: function (e, t, r) {
      var a =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            i = [],
            o;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) i.push(n.value);
          } catch (s) {
            o = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        };
      var n =
        (this && this.__spreadArray) ||
        function (e, t, r) {
          if (r || arguments.length === 2)
            for (var a = 0, n = t.length, i; a < n; a++) {
              if (i || !(a in t)) {
                if (!i) i = Array.prototype.slice.call(t, 0, a);
                i[a] = t[a];
              }
            }
          return e.concat(i || Array.prototype.slice.call(t));
        };
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var o = i(r(72895));
      var s = r(48948);
      var l = i(r(3378));
      var u;
      (function (e) {
        function t(e, t) {
          var r = l.default.getFontDef(e);
          var a = e.stack.env;
          if (a.multiLetterIdentifiers && a.font !== "") {
            t = e.string.substr(e.i - 1).match(a.multiLetterIdentifiers)[0];
            e.i += t.length - 1;
            if (r.mathvariant === s.TexConstant.Variant.NORMAL && a.noAutoOP && t.length > 1) {
              r.autoOP = false;
            }
          }
          var n = e.create("token", "mi", r, t);
          e.Push(n);
        }
        e.variable = t;
        function r(e, t) {
          var r;
          var a = e.configuration.options["digits"];
          var n = e.string.slice(e.i - 1).match(a);
          var i = l.default.getFontDef(e);
          if (n) {
            r = e.create("token", "mn", i, n[0].replace(/[{}]/g, ""));
            e.i += n[0].length - 1;
          } else {
            r = e.create("token", "mo", i, t);
          }
          e.Push(r);
        }
        e.digit = r;
        function i(e, t) {
          var r = e.GetCS();
          e.parse("macro", [e, r]);
        }
        e.controlSequence = i;
        function u(e, t) {
          var r = t.attributes || { mathvariant: s.TexConstant.Variant.ITALIC };
          var a = e.create("token", "mi", r, t.char);
          e.Push(a);
        }
        e.mathchar0mi = u;
        function c(e, t) {
          var r = t.attributes || {};
          r["stretchy"] = false;
          var a = e.create("token", "mo", r, t.char);
          o.default.setProperty(a, "fixStretchy", true);
          e.configuration.addNode("fixStretchy", a);
          e.Push(a);
        }
        e.mathchar0mo = c;
        function f(e, t) {
          var r = t.attributes || { mathvariant: s.TexConstant.Variant.NORMAL };
          if (e.stack.env["font"]) {
            r["mathvariant"] = e.stack.env["font"];
          }
          var a = e.create("token", "mi", r, t.char);
          e.Push(a);
        }
        e.mathchar7 = f;
        function p(e, t) {
          var r = t.attributes || {};
          r = Object.assign({ fence: false, stretchy: false }, r);
          var a = e.create("token", "mo", r, t.char);
          e.Push(a);
        }
        e.delimiter = p;
        function h(e, t, r, i) {
          var o = i[0];
          var s = e.itemFactory.create("begin").setProperties({ name: t, end: o });
          s = r.apply(void 0, n([e, s], a(i.slice(1)), false));
          e.Push(s);
        }
        e.environment = h;
      })(u || (u = {}));
      t["default"] = u;
    },
    1331: function (e, t, r) {
      var a =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            i = [],
            o;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) i.push(n.value);
          } catch (s) {
            o = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        };
      var n =
        (this && this.__spreadArray) ||
        function (e, t, r) {
          if (r || arguments.length === 2)
            for (var a = 0, n = t.length, i; a < n; a++) {
              if (i || !(a in t)) {
                if (!i) i = Array.prototype.slice.call(t, 0, a);
                i[a] = t[a];
              }
            }
          return e.concat(i || Array.prototype.slice.call(t));
        };
      var i =
        (this && this.__values) ||
        function (e) {
          var t = typeof Symbol === "function" && Symbol.iterator,
            r = t && e[t],
            a = 0;
          if (r) return r.call(e);
          if (e && typeof e.length === "number")
            return {
              next: function () {
                if (e && a >= e.length) e = void 0;
                return { value: e && e[a++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var s = o(r(57394));
      var l = r(38624);
      var u = o(r(72895));
      var c = r(36059);
      var f = (function () {
        function e(e, t) {
          if (t === void 0) {
            t = [];
          }
          this.options = {};
          this.packageData = new Map();
          this.parsers = [];
          this.root = null;
          this.nodeLists = {};
          this.error = false;
          this.handlers = e.handlers;
          this.nodeFactory = new l.NodeFactory();
          this.nodeFactory.configuration = this;
          this.nodeFactory.setCreators(e.nodes);
          this.itemFactory = new s.default(e.items);
          this.itemFactory.configuration = this;
          c.defaultOptions.apply(void 0, n([this.options], a(t), false));
          (0, c.defaultOptions)(this.options, e.options);
        }
        e.prototype.pushParser = function (e) {
          this.parsers.unshift(e);
        };
        e.prototype.popParser = function () {
          this.parsers.shift();
        };
        Object.defineProperty(e.prototype, "parser", {
          get: function () {
            return this.parsers[0];
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.clear = function () {
          this.parsers = [];
          this.root = null;
          this.nodeLists = {};
          this.error = false;
          this.tags.resetTag();
        };
        e.prototype.addNode = function (e, t) {
          var r = this.nodeLists[e];
          if (!r) {
            r = this.nodeLists[e] = [];
          }
          r.push(t);
          if (t.kind !== e) {
            var a = u.default.getProperty(t, "in-lists") || "";
            var n = (a ? a.split(/,/) : []).concat(e).join(",");
            u.default.setProperty(t, "in-lists", n);
          }
        };
        e.prototype.getList = function (e) {
          var t, r;
          var a = this.nodeLists[e] || [];
          var n = [];
          try {
            for (var o = i(a), s = o.next(); !s.done; s = o.next()) {
              var l = s.value;
              if (this.inTree(l)) {
                n.push(l);
              }
            }
          } catch (u) {
            t = { error: u };
          } finally {
            try {
              if (s && !s.done && (r = o.return)) r.call(o);
            } finally {
              if (t) throw t.error;
            }
          }
          this.nodeLists[e] = n;
          return n;
        };
        e.prototype.removeFromList = function (e, t) {
          var r, a;
          var n = this.nodeLists[e] || [];
          try {
            for (var o = i(t), s = o.next(); !s.done; s = o.next()) {
              var l = s.value;
              var u = n.indexOf(l);
              if (u >= 0) {
                n.splice(u, 1);
              }
            }
          } catch (c) {
            r = { error: c };
          } finally {
            try {
              if (s && !s.done && (a = o.return)) a.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
        };
        e.prototype.inTree = function (e) {
          while (e && e !== this.root) {
            e = e.parent;
          }
          return !!e;
        };
        return e;
      })();
      t["default"] = f;
    },
    34726: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      var n =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            i = [],
            o;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) i.push(n.value);
          } catch (s) {
            o = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        };
      var i =
        (this && this.__spreadArray) ||
        function (e, t, r) {
          if (r || arguments.length === 2)
            for (var a = 0, n = t.length, i; a < n; a++) {
              if (i || !(a in t)) {
                if (!i) i = Array.prototype.slice.call(t, 0, a);
                i[a] = t[a];
              }
            }
          return e.concat(i || Array.prototype.slice.call(t));
        };
      var o =
        (this && this.__values) ||
        function (e) {
          var t = typeof Symbol === "function" && Symbol.iterator,
            r = t && e[t],
            a = 0;
          if (r) return r.call(e);
          if (e && typeof e.length === "number")
            return {
              next: function () {
                if (e && a >= e.length) e = void 0;
                return { value: e && e[a++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var s =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.BaseItem = t.MmlStack = void 0;
      var l = s(r(48406));
      var u = (function () {
        function e(e) {
          this._nodes = e;
        }
        Object.defineProperty(e.prototype, "nodes", {
          get: function () {
            return this._nodes;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.Push = function () {
          var e;
          var t = [];
          for (var r = 0; r < arguments.length; r++) {
            t[r] = arguments[r];
          }
          (e = this._nodes).push.apply(e, i([], n(t), false));
        };
        e.prototype.Pop = function () {
          return this._nodes.pop();
        };
        Object.defineProperty(e.prototype, "First", {
          get: function () {
            return this._nodes[this.Size() - 1];
          },
          set: function (e) {
            this._nodes[this.Size() - 1] = e;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "Last", {
          get: function () {
            return this._nodes[0];
          },
          set: function (e) {
            this._nodes[0] = e;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.Peek = function (e) {
          if (e == null) {
            e = 1;
          }
          return this._nodes.slice(this.Size() - e);
        };
        e.prototype.Size = function () {
          return this._nodes.length;
        };
        e.prototype.Clear = function () {
          this._nodes = [];
        };
        e.prototype.toMml = function (e, t) {
          if (e === void 0) {
            e = true;
          }
          if (this._nodes.length === 1 && !t) {
            return this.First;
          }
          return this.create("node", e ? "inferredMrow" : "mrow", this._nodes, {});
        };
        e.prototype.create = function (e) {
          var t;
          var r = [];
          for (var a = 1; a < arguments.length; a++) {
            r[a - 1] = arguments[a];
          }
          return (t = this.factory.configuration.nodeFactory).create.apply(t, i([e], n(r), false));
        };
        return e;
      })();
      t.MmlStack = u;
      var c = (function (e) {
        a(t, e);
        function t(t) {
          var r = [];
          for (var a = 1; a < arguments.length; a++) {
            r[a - 1] = arguments[a];
          }
          var n = e.call(this, r) || this;
          n.factory = t;
          n.global = {};
          n._properties = {};
          if (n.isOpen) {
            n._env = {};
          }
          return n;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "base";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "env", {
          get: function () {
            return this._env;
          },
          set: function (e) {
            this._env = e;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "copyEnv", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.getProperty = function (e) {
          return this._properties[e];
        };
        t.prototype.setProperty = function (e, t) {
          this._properties[e] = t;
          return this;
        };
        Object.defineProperty(t.prototype, "isOpen", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isClose", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isFinal", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.isKind = function (e) {
          return e === this.kind;
        };
        t.prototype.checkItem = function (e) {
          if (e.isKind("over") && this.isOpen) {
            e.setProperty("num", this.toMml(false));
            this.Clear();
          }
          if (e.isKind("cell") && this.isOpen) {
            if (e.getProperty("linebreak")) {
              return t.fail;
            }
            throw new l.default("Misplaced", "Misplaced %1", e.getName());
          }
          if (e.isClose && this.getErrors(e.kind)) {
            var r = n(this.getErrors(e.kind), 2),
              a = r[0],
              i = r[1];
            throw new l.default(a, i, e.getName());
          }
          if (!e.isFinal) {
            return t.success;
          }
          this.Push(e.First);
          return t.fail;
        };
        t.prototype.clearEnv = function () {
          var e, t;
          try {
            for (var r = o(Object.keys(this.env)), a = r.next(); !a.done; a = r.next()) {
              var n = a.value;
              delete this.env[n];
            }
          } catch (i) {
            e = { error: i };
          } finally {
            try {
              if (a && !a.done && (t = r.return)) t.call(r);
            } finally {
              if (e) throw e.error;
            }
          }
        };
        t.prototype.setProperties = function (e) {
          Object.assign(this._properties, e);
          return this;
        };
        t.prototype.getName = function () {
          return this.getProperty("name");
        };
        t.prototype.toString = function () {
          return this.kind + "[" + this.nodes.join("; ") + "]";
        };
        t.prototype.getErrors = function (e) {
          var r = this.constructor;
          return (r.errors || {})[e] || t.errors[e];
        };
        t.fail = [null, false];
        t.success = [null, true];
        t.errors = {
          end: ["MissingBeginExtraEnd", "Missing \\begin{%1} or extra \\end{%1}"],
          close: ["ExtraCloseMissingOpen", "Extra close brace or missing open brace"],
          right: ["MissingLeftExtraRight", "Missing \\left or extra \\right"],
          middle: ["ExtraMiddle", "Extra \\middle"],
        };
        return t;
      })(u);
      t.BaseItem = c;
    },
    57394: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      var n;
      Object.defineProperty(t, "__esModule", { value: true });
      var i = r(34726);
      var o = r(86161);
      var s = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        return t;
      })(i.BaseItem);
      var l = (function (e) {
        a(t, e);
        function t() {
          var t = (e !== null && e.apply(this, arguments)) || this;
          t.defaultKind = "dummy";
          t.configuration = null;
          return t;
        }
        t.DefaultStackItems = ((n = {}), (n[s.prototype.kind] = s), n);
        return t;
      })(o.AbstractFactory);
      t["default"] = l;
    },
    48948: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.TexConstant = void 0;
      var r;
      (function (e) {
        e.Variant = {
          NORMAL: "normal",
          BOLD: "bold",
          ITALIC: "italic",
          BOLDITALIC: "bold-italic",
          DOUBLESTRUCK: "double-struck",
          FRAKTUR: "fraktur",
          BOLDFRAKTUR: "bold-fraktur",
          SCRIPT: "script",
          BOLDSCRIPT: "bold-script",
          SANSSERIF: "sans-serif",
          BOLDSANSSERIF: "bold-sans-serif",
          SANSSERIFITALIC: "sans-serif-italic",
          SANSSERIFBOLDITALIC: "sans-serif-bold-italic",
          MONOSPACE: "monospace",
          INITIAL: "inital",
          TAILED: "tailed",
          LOOPED: "looped",
          STRETCHED: "stretched",
          CALLIGRAPHIC: "-tex-calligraphic",
          BOLDCALLIGRAPHIC: "-tex-bold-calligraphic",
          OLDSTYLE: "-tex-oldstyle",
          BOLDOLDSTYLE: "-tex-bold-oldstyle",
          MATHITALIC: "-tex-mathit",
        };
        e.Form = { PREFIX: "prefix", INFIX: "infix", POSTFIX: "postfix" };
        e.LineBreak = { AUTO: "auto", NEWLINE: "newline", NOBREAK: "nobreak", GOODBREAK: "goodbreak", BADBREAK: "badbreak" };
        e.LineBreakStyle = { BEFORE: "before", AFTER: "after", DUPLICATE: "duplicate", INFIXLINBREAKSTYLE: "infixlinebreakstyle" };
        e.IndentAlign = { LEFT: "left", CENTER: "center", RIGHT: "right", AUTO: "auto", ID: "id", INDENTALIGN: "indentalign" };
        e.IndentShift = { INDENTSHIFT: "indentshift" };
        e.LineThickness = { THIN: "thin", MEDIUM: "medium", THICK: "thick" };
        e.Notation = {
          LONGDIV: "longdiv",
          ACTUARIAL: "actuarial",
          PHASORANGLE: "phasorangle",
          RADICAL: "radical",
          BOX: "box",
          ROUNDEDBOX: "roundedbox",
          CIRCLE: "circle",
          LEFT: "left",
          RIGHT: "right",
          TOP: "top",
          BOTTOM: "bottom",
          UPDIAGONALSTRIKE: "updiagonalstrike",
          DOWNDIAGONALSTRIKE: "downdiagonalstrike",
          VERTICALSTRIKE: "verticalstrike",
          HORIZONTALSTRIKE: "horizontalstrike",
          NORTHEASTARROW: "northeastarrow",
          MADRUWB: "madruwb",
          UPDIAGONALARROW: "updiagonalarrow",
        };
        e.Align = { TOP: "top", BOTTOM: "bottom", CENTER: "center", BASELINE: "baseline", AXIS: "axis", LEFT: "left", RIGHT: "right" };
        e.Lines = { NONE: "none", SOLID: "solid", DASHED: "dashed" };
        e.Side = { LEFT: "left", RIGHT: "right", LEFTOVERLAP: "leftoverlap", RIGHTOVERLAP: "rightoverlap" };
        e.Width = { AUTO: "auto", FIT: "fit" };
        e.Actiontype = { TOGGLE: "toggle", STATUSLINE: "statusline", TOOLTIP: "tooltip", INPUT: "input" };
        e.Overflow = { LINBREAK: "linebreak", SCROLL: "scroll", ELIDE: "elide", TRUNCATE: "truncate", SCALE: "scale" };
        e.Unit = { EM: "em", EX: "ex", PX: "px", IN: "in", CM: "cm", MM: "mm", PT: "pt", PC: "pc" };
      })((r = t.TexConstant || (t.TexConstant = {})));
    },
    19890: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, a) {
              if (a === undefined) a = r;
              var n = Object.getOwnPropertyDescriptor(t, r);
              if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) {
                n = {
                  enumerable: true,
                  get: function () {
                    return t[r];
                  },
                };
              }
              Object.defineProperty(e, a, n);
            }
          : function (e, t, r, a) {
              if (a === undefined) a = r;
              e[a] = t[r];
            });
      var i =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: true, value: t });
            }
          : function (e, t) {
              e["default"] = t;
            });
      var o =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null) for (var r in e) if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) n(t, e, r);
          i(t, e);
          return t;
        };
      var s =
        (this && this.__values) ||
        function (e) {
          var t = typeof Symbol === "function" && Symbol.iterator,
            r = t && e[t],
            a = 0;
          if (r) return r.call(e);
          if (e && typeof e.length === "number")
            return {
              next: function () {
                if (e && a >= e.length) e = void 0;
                return { value: e && e[a++], done: !e };
              },
            };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      var l =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      var u;
      Object.defineProperty(t, "__esModule", { value: true });
      t.BaseConfiguration = t.BaseTags = t.Other = void 0;
      var c = r(23644);
      var f = r(84858);
      var p = l(r(48406));
      var h = l(r(72895));
      var d = r(92715);
      var m = o(r(5065));
      var v = r(56711);
      r(83031);
      var y = r(64432);
      new d.CharacterMap("remap", null, { "-": "−", "*": "∗", "`": "‘" });
      function g(e, t) {
        var r = e.stack.env["font"];
        var a = r ? { mathvariant: e.stack.env["font"] } : {};
        var n = f.MapHandler.getMap("remap").lookup(t);
        var i = (0, y.getRange)(t);
        var o = i ? i[3] : "mo";
        var s = e.create("token", o, a, n ? n.char : t);
        i[4] && s.attributes.set("mathvariant", i[4]);
        if (o === "mo") {
          h.default.setProperty(s, "fixStretchy", true);
          e.configuration.addNode("fixStretchy", s);
        }
        e.Push(s);
      }
      t.Other = g;
      function b(e, t) {
        throw new p.default("UndefinedControlSequence", "Undefined control sequence %1", "\\" + t);
      }
      function A(e, t) {
        throw new p.default("UnknownEnv", "Unknown environment '%1'", t);
      }
      function S(e) {
        var t, r;
        var a = e.data;
        try {
          for (var n = s(a.getList("nonscript")), i = n.next(); !i.done; i = n.next()) {
            var o = i.value;
            if (o.attributes.get("scriptlevel") > 0) {
              var l = o.parent;
              l.childNodes.splice(l.childIndex(o), 1);
              a.removeFromList(o.kind, [o]);
              if (o.isKind("mrow")) {
                var u = o.childNodes[0];
                a.removeFromList("mstyle", [u]);
                a.removeFromList("mspace", u.childNodes[0].childNodes);
              }
            } else if (o.isKind("mrow")) {
              o.parent.replaceChild(o.childNodes[0], o);
              a.removeFromList("mrow", [o]);
            }
          }
        } catch (c) {
          t = { error: c };
        } finally {
          try {
            if (i && !i.done && (r = n.return)) r.call(n);
          } finally {
            if (t) throw t.error;
          }
        }
      }
      var P = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        return t;
      })(v.AbstractTags);
      t.BaseTags = P;
      t.BaseConfiguration = c.Configuration.create("base", {
        handler: {
          character: ["command", "special", "letter", "digit"],
          delimiter: ["delimiter"],
          macro: ["delimiter", "macros", "mathchar0mi", "mathchar0mo", "mathchar7"],
          environment: ["environment"],
        },
        fallback: { character: g, macro: b, environment: A },
        items:
          ((u = {}),
          (u[m.StartItem.prototype.kind] = m.StartItem),
          (u[m.StopItem.prototype.kind] = m.StopItem),
          (u[m.OpenItem.prototype.kind] = m.OpenItem),
          (u[m.CloseItem.prototype.kind] = m.CloseItem),
          (u[m.PrimeItem.prototype.kind] = m.PrimeItem),
          (u[m.SubsupItem.prototype.kind] = m.SubsupItem),
          (u[m.OverItem.prototype.kind] = m.OverItem),
          (u[m.LeftItem.prototype.kind] = m.LeftItem),
          (u[m.Middle.prototype.kind] = m.Middle),
          (u[m.RightItem.prototype.kind] = m.RightItem),
          (u[m.BeginItem.prototype.kind] = m.BeginItem),
          (u[m.EndItem.prototype.kind] = m.EndItem),
          (u[m.StyleItem.prototype.kind] = m.StyleItem),
          (u[m.PositionItem.prototype.kind] = m.PositionItem),
          (u[m.CellItem.prototype.kind] = m.CellItem),
          (u[m.MmlItem.prototype.kind] = m.MmlItem),
          (u[m.FnItem.prototype.kind] = m.FnItem),
          (u[m.NotItem.prototype.kind] = m.NotItem),
          (u[m.NonscriptItem.prototype.kind] = m.NonscriptItem),
          (u[m.DotsItem.prototype.kind] = m.DotsItem),
          (u[m.ArrayItem.prototype.kind] = m.ArrayItem),
          (u[m.EqnArrayItem.prototype.kind] = m.EqnArrayItem),
          (u[m.EquationItem.prototype.kind] = m.EquationItem),
          u),
        options: {
          maxMacros: 1e3,
          baseURL:
            typeof document === "undefined" || document.getElementsByTagName("base").length === 0
              ? ""
              : String(document.location).replace(/#.*$/, ""),
        },
        tags: { base: P },
        postprocessors: [[S, -4]],
      });
    },
    5065: function (e, t, r) {
      var a =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
              };
            return e(t, r);
          };
          return function (t, r) {
            if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            e(t, r);
            function a() {
              this.constructor = t;
            }
            t.prototype = r === null ? Object.create(r) : ((a.prototype = r.prototype), new a());
          };
        })();
      var n =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            i = [],
            o;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) i.push(n.value);
          } catch (s) {
            o = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        };
      var i =
        (this && this.__spreadArray) ||
        function (e, t, r) {
          if (r || arguments.length === 2)
            for (var a = 0, n = t.length, i; a < n; a++) {
              if (i || !(a in t)) {
                if (!i) i = Array.prototype.slice.call(t, 0, a);
                i[a] = t[a];
              }
            }
          return e.concat(i || Array.prototype.slice.call(t));
        };
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      t.EquationItem =
        t.EqnArrayItem =
        t.ArrayItem =
        t.DotsItem =
        t.NonscriptItem =
        t.NotItem =
        t.FnItem =
        t.MmlItem =
        t.CellItem =
        t.PositionItem =
        t.StyleItem =
        t.EndItem =
        t.BeginItem =
        t.RightItem =
        t.Middle =
        t.LeftItem =
        t.OverItem =
        t.SubsupItem =
        t.PrimeItem =
        t.CloseItem =
        t.OpenItem =
        t.StopItem =
        t.StartItem =
          void 0;
      var s = r(84858);
      var l = r(63411);
      var u = r(18426);
      var c = o(r(48406));
      var f = o(r(3378));
      var p = o(r(72895));
      var h = r(34726);
      var d = (function (e) {
        a(t, e);
        function t(t, r) {
          var a = e.call(this, t) || this;
          a.global = r;
          return a;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "start";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isOpen", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (t) {
          if (t.isKind("stop")) {
            var r = this.toMml();
            if (!this.global.isInner) {
              r = this.factory.configuration.tags.finalize(r, this.env);
            }
            return [[this.factory.create("mml", r)], true];
          }
          return e.prototype.checkItem.call(this, t);
        };
        return t;
      })(h.BaseItem);
      t.StartItem = d;
      var m = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "stop";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isClose", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        return t;
      })(h.BaseItem);
      t.StopItem = m;
      var v = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "open";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isOpen", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (t) {
          if (t.isKind("close")) {
            var r = this.toMml();
            var a = this.create("node", "TeXAtom", [r]);
            return [[this.factory.create("mml", a)], true];
          }
          return e.prototype.checkItem.call(this, t);
        };
        t.errors = Object.assign(Object.create(h.BaseItem.errors), { stop: ["ExtraOpenMissingClose", "Extra open brace or missing close brace"] });
        return t;
      })(h.BaseItem);
      t.OpenItem = v;
      var y = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "close";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isClose", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        return t;
      })(h.BaseItem);
      t.CloseItem = y;
      var g = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "prime";
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (e) {
          var t = n(this.Peek(2), 2),
            r = t[0],
            a = t[1];
          if (!p.default.isType(r, "msubsup") || p.default.isType(r, "msup")) {
            var i = this.create("node", "msup", [r, a]);
            return [[i, e], true];
          }
          p.default.setChild(r, r.sup, a);
          return [[r, e], true];
        };
        return t;
      })(h.BaseItem);
      t.PrimeItem = g;
      var b = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "subsup";
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (t) {
          if (t.isKind("open") || t.isKind("left")) {
            return h.BaseItem.success;
          }
          var r = this.First;
          var a = this.getProperty("position");
          if (t.isKind("mml")) {
            if (this.getProperty("primes")) {
              if (a !== 2) {
                p.default.setChild(r, 2, this.getProperty("primes"));
              } else {
                p.default.setProperty(this.getProperty("primes"), "variantForm", true);
                var o = this.create("node", "mrow", [this.getProperty("primes"), t.First]);
                t.First = o;
              }
            }
            p.default.setChild(r, a, t.First);
            if (this.getProperty("movesupsub") != null) {
              p.default.setProperty(r, "movesupsub", this.getProperty("movesupsub"));
            }
            var s = this.factory.create("mml", r);
            return [[s], true];
          }
          if (e.prototype.checkItem.call(this, t)[1]) {
            var l = this.getErrors(["", "sub", "sup"][a]);
            throw new (c.default.bind.apply(c.default, i([void 0, l[0], l[1]], n(l.splice(2)), false)))();
          }
          return null;
        };
        t.errors = Object.assign(Object.create(h.BaseItem.errors), {
          stop: ["MissingScript", "Missing superscript or subscript argument"],
          sup: ["MissingOpenForSup", "Missing open brace for superscript"],
          sub: ["MissingOpenForSub", "Missing open brace for subscript"],
        });
        return t;
      })(h.BaseItem);
      t.SubsupItem = b;
      var A = (function (e) {
        a(t, e);
        function t(t) {
          var r = e.call(this, t) || this;
          r.setProperty("name", "\\over");
          return r;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "over";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isClose", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (t) {
          if (t.isKind("over")) {
            throw new c.default("AmbiguousUseOf", "Ambiguous use of %1", t.getName());
          }
          if (t.isClose) {
            var r = this.create("node", "mfrac", [this.getProperty("num"), this.toMml(false)]);
            if (this.getProperty("thickness") != null) {
              p.default.setAttribute(r, "linethickness", this.getProperty("thickness"));
            }
            if (this.getProperty("open") || this.getProperty("close")) {
              p.default.setProperty(r, "withDelims", true);
              r = f.default.fixedFence(this.factory.configuration, this.getProperty("open"), r, this.getProperty("close"));
            }
            return [[this.factory.create("mml", r), t], true];
          }
          return e.prototype.checkItem.call(this, t);
        };
        t.prototype.toString = function () {
          return "over[" + this.getProperty("num") + " / " + this.nodes.join("; ") + "]";
        };
        return t;
      })(h.BaseItem);
      t.OverItem = A;
      var S = (function (e) {
        a(t, e);
        function t(t, r) {
          var a = e.call(this, t) || this;
          a.setProperty("delim", r);
          return a;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "left";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isOpen", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (t) {
          if (t.isKind("right")) {
            return [
              [
                this.factory.create(
                  "mml",
                  f.default.fenced(
                    this.factory.configuration,
                    this.getProperty("delim"),
                    this.toMml(),
                    t.getProperty("delim"),
                    "",
                    t.getProperty("color")
                  )
                ),
              ],
              true,
            ];
          }
          if (t.isKind("middle")) {
            var r = { stretchy: true };
            if (t.getProperty("color")) {
              r.mathcolor = t.getProperty("color");
            }
            this.Push(
              this.create("node", "TeXAtom", [], { texClass: u.TEXCLASS.CLOSE }),
              this.create("token", "mo", r, t.getProperty("delim")),
              this.create("node", "TeXAtom", [], { texClass: u.TEXCLASS.OPEN })
            );
            this.env = {};
            return [[this], true];
          }
          return e.prototype.checkItem.call(this, t);
        };
        t.errors = Object.assign(Object.create(h.BaseItem.errors), { stop: ["ExtraLeftMissingRight", "Extra \\left or missing \\right"] });
        return t;
      })(h.BaseItem);
      t.LeftItem = S;
      var P = (function (e) {
        a(t, e);
        function t(t, r, a) {
          var n = e.call(this, t) || this;
          n.setProperty("delim", r);
          a && n.setProperty("color", a);
          return n;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "middle";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isClose", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        return t;
      })(h.BaseItem);
      t.Middle = P;
      var C = (function (e) {
        a(t, e);
        function t(t, r, a) {
          var n = e.call(this, t) || this;
          n.setProperty("delim", r);
          a && n.setProperty("color", a);
          return n;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "right";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isClose", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        return t;
      })(h.BaseItem);
      t.RightItem = C;
      var T = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "begin";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isOpen", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (t) {
          if (t.isKind("end")) {
            if (t.getName() !== this.getName()) {
              throw new c.default("EnvBadEnd", "\\begin{%1} ended with \\end{%2}", this.getName(), t.getName());
            }
            if (!this.getProperty("end")) {
              return [[this.factory.create("mml", this.toMml())], true];
            }
            return h.BaseItem.fail;
          }
          if (t.isKind("stop")) {
            throw new c.default("EnvMissingEnd", "Missing \\end{%1}", this.getName());
          }
          return e.prototype.checkItem.call(this, t);
        };
        return t;
      })(h.BaseItem);
      t.BeginItem = T;
      var O = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "end";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isClose", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        return t;
      })(h.BaseItem);
      t.EndItem = O;
      var I = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "style";
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (t) {
          if (!t.isClose) {
            return e.prototype.checkItem.call(this, t);
          }
          var r = this.create("node", "mstyle", this.nodes, this.getProperty("styles"));
          return [[this.factory.create("mml", r), t], true];
        };
        return t;
      })(h.BaseItem);
      t.StyleItem = I;
      var M = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "position";
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (t) {
          if (t.isClose) {
            throw new c.default("MissingBoxFor", "Missing box for %1", this.getName());
          }
          if (t.isFinal) {
            var r = t.toMml();
            switch (this.getProperty("move")) {
              case "vertical":
                r = this.create("node", "mpadded", [r], {
                  height: this.getProperty("dh"),
                  depth: this.getProperty("dd"),
                  voffset: this.getProperty("dh"),
                });
                return [[this.factory.create("mml", r)], true];
              case "horizontal":
                return [[this.factory.create("mml", this.getProperty("left")), t, this.factory.create("mml", this.getProperty("right"))], true];
            }
          }
          return e.prototype.checkItem.call(this, t);
        };
        return t;
      })(h.BaseItem);
      t.PositionItem = M;
      var w = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "cell";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isClose", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        return t;
      })(h.BaseItem);
      t.CellItem = w;
      var E = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "isFinal", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "mml";
          },
          enumerable: false,
          configurable: true,
        });
        return t;
      })(h.BaseItem);
      t.MmlItem = E;
      var L = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "fn";
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (t) {
          var r = this.First;
          if (r) {
            if (t.isOpen) {
              return h.BaseItem.success;
            }
            if (!t.isKind("fn")) {
              var a = t.First;
              if (!t.isKind("mml") || !a) {
                return [[r, t], true];
              }
              if (
                (p.default.isType(a, "mstyle") && a.childNodes.length && p.default.isType(a.childNodes[0].childNodes[0], "mspace")) ||
                p.default.isType(a, "mspace")
              ) {
                return [[r, t], true];
              }
              if (p.default.isEmbellished(a)) {
                a = p.default.getCoreMO(a);
              }
              var n = p.default.getForm(a);
              if (n != null && [0, 0, 1, 1, 0, 1, 1, 0, 0, 0][n[2]]) {
                return [[r, t], true];
              }
            }
            var i = this.create("token", "mo", { texClass: u.TEXCLASS.NONE }, l.entities.ApplyFunction);
            return [[r, i, t], true];
          }
          return e.prototype.checkItem.apply(this, arguments);
        };
        return t;
      })(h.BaseItem);
      t.FnItem = L;
      var k = (function (e) {
        a(t, e);
        function t() {
          var t = (e !== null && e.apply(this, arguments)) || this;
          t.remap = s.MapHandler.getMap("not_remap");
          return t;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "not";
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (e) {
          var t;
          var r;
          var a;
          if (e.isKind("open") || e.isKind("left")) {
            return h.BaseItem.success;
          }
          if (e.isKind("mml") && (p.default.isType(e.First, "mo") || p.default.isType(e.First, "mi") || p.default.isType(e.First, "mtext"))) {
            t = e.First;
            r = p.default.getText(t);
            if (r.length === 1 && !p.default.getProperty(t, "movesupsub") && p.default.getChildren(t).length === 1) {
              if (this.remap.contains(r)) {
                a = this.create("text", this.remap.lookup(r).char);
                p.default.setChild(t, 0, a);
              } else {
                a = this.create("text", "̸");
                p.default.appendChildren(t, [a]);
              }
              return [[e], true];
            }
          }
          a = this.create("text", "⧸");
          var n = this.create("node", "mtext", [], {}, a);
          var i = this.create("node", "mpadded", [n], { width: 0 });
          t = this.create("node", "TeXAtom", [i], { texClass: u.TEXCLASS.REL });
          return [[t, e], true];
        };
        return t;
      })(h.BaseItem);
      t.NotItem = k;
      var x = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "nonscript";
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (e) {
          if (e.isKind("mml") && e.Size() === 1) {
            var t = e.First;
            if (t.isKind("mstyle") && t.notParent) {
              t = p.default.getChildren(p.default.getChildren(t)[0])[0];
            }
            if (t.isKind("mspace")) {
              if (t !== e.First) {
                var r = this.create("node", "mrow", [e.Pop()]);
                e.Push(r);
              }
              this.factory.configuration.addNode("nonscript", e.First);
            }
          }
          return [[e], true];
        };
        return t;
      })(h.BaseItem);
      t.NonscriptItem = x;
      var F = (function (e) {
        a(t, e);
        function t() {
          return (e !== null && e.apply(this, arguments)) || this;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "dots";
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (e) {
          if (e.isKind("open") || e.isKind("left")) {
            return h.BaseItem.success;
          }
          var t = this.getProperty("ldots");
          var r = e.First;
          if (e.isKind("mml") && p.default.isEmbellished(r)) {
            var a = p.default.getTexClass(p.default.getCoreMO(r));
            if (a === u.TEXCLASS.BIN || a === u.TEXCLASS.REL) {
              t = this.getProperty("cdots");
            }
          }
          return [[t, e], true];
        };
        return t;
      })(h.BaseItem);
      t.DotsItem = F;
      var N = (function (e) {
        a(t, e);
        function t() {
          var t = (e !== null && e.apply(this, arguments)) || this;
          t.table = [];
          t.row = [];
          t.frame = [];
          t.hfill = [];
          t.arraydef = {};
          t.dashed = false;
          return t;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "array";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isOpen", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "copyEnv", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (t) {
          if (t.isClose && !t.isKind("over")) {
            if (t.getProperty("isEntry")) {
              this.EndEntry();
              this.clearEnv();
              return h.BaseItem.fail;
            }
            if (t.getProperty("isCR")) {
              this.EndEntry();
              this.EndRow();
              this.clearEnv();
              return h.BaseItem.fail;
            }
            this.EndTable();
            this.clearEnv();
            var r = this.factory.create("mml", this.createMml());
            if (this.getProperty("requireClose")) {
              if (t.isKind("close")) {
                return [[r], true];
              }
              throw new c.default("MissingCloseBrace", "Missing close brace");
            }
            return [[r, t], true];
          }
          return e.prototype.checkItem.call(this, t);
        };
        t.prototype.createMml = function () {
          var e = this.arraydef["scriptlevel"];
          delete this.arraydef["scriptlevel"];
          var t = this.create("node", "mtable", this.table, this.arraydef);
          if (e) {
            t.setProperty("scriptlevel", e);
          }
          if (this.frame.length === 4) {
            p.default.setAttribute(t, "frame", this.dashed ? "dashed" : "solid");
          } else if (this.frame.length) {
            if (this.arraydef["rowlines"]) {
              this.arraydef["rowlines"] = this.arraydef["rowlines"].replace(/none( none)+$/, "none");
            }
            p.default.setAttribute(t, "frame", "");
            t = this.create("node", "menclose", [t], { notation: this.frame.join(" ") });
            if ((this.arraydef["columnlines"] || "none") !== "none" || (this.arraydef["rowlines"] || "none") !== "none") {
              p.default.setAttribute(t, "data-padding", 0);
            }
          }
          if (this.getProperty("open") || this.getProperty("close")) {
            t = f.default.fenced(this.factory.configuration, this.getProperty("open"), t, this.getProperty("close"));
          }
          return t;
        };
        t.prototype.EndEntry = function () {
          var e = this.create("node", "mtd", this.nodes);
          if (this.hfill.length) {
            if (this.hfill[0] === 0) {
              p.default.setAttribute(e, "columnalign", "right");
            }
            if (this.hfill[this.hfill.length - 1] === this.Size()) {
              p.default.setAttribute(e, "columnalign", p.default.getAttribute(e, "columnalign") ? "center" : "left");
            }
          }
          this.row.push(e);
          this.Clear();
          this.hfill = [];
        };
        t.prototype.EndRow = function () {
          var e;
          if (this.getProperty("isNumbered") && this.row.length === 3) {
            this.row.unshift(this.row.pop());
            e = this.create("node", "mlabeledtr", this.row);
          } else {
            e = this.create("node", "mtr", this.row);
          }
          this.table.push(e);
          this.row = [];
        };
        t.prototype.EndTable = function () {
          if (this.Size() || this.row.length) {
            this.EndEntry();
            this.EndRow();
          }
          this.checkLines();
        };
        t.prototype.checkLines = function () {
          if (this.arraydef["rowlines"]) {
            var e = this.arraydef["rowlines"].split(/ /);
            if (e.length === this.table.length) {
              this.frame.push("bottom");
              e.pop();
              this.arraydef["rowlines"] = e.join(" ");
            } else if (e.length < this.table.length - 1) {
              this.arraydef["rowlines"] += " none";
            }
          }
          if (this.getProperty("rowspacing")) {
            var t = this.arraydef["rowspacing"].split(/ /);
            while (t.length < this.table.length) {
              t.push(this.getProperty("rowspacing") + "em");
            }
            this.arraydef["rowspacing"] = t.join(" ");
          }
        };
        t.prototype.addRowSpacing = function (e) {
          if (this.arraydef["rowspacing"]) {
            var t = this.arraydef["rowspacing"].split(/ /);
            if (!this.getProperty("rowspacing")) {
              var r = f.default.dimen2em(t[0]);
              this.setProperty("rowspacing", r);
            }
            var a = this.getProperty("rowspacing");
            while (t.length < this.table.length) {
              t.push(f.default.Em(a));
            }
            t[this.table.length - 1] = f.default.Em(Math.max(0, a + f.default.dimen2em(e)));
            this.arraydef["rowspacing"] = t.join(" ");
          }
        };
        return t;
      })(h.BaseItem);
      t.ArrayItem = N;
      var R = (function (e) {
        a(t, e);
        function t(t) {
          var r = [];
          for (var a = 1; a < arguments.length; a++) {
            r[a - 1] = arguments[a];
          }
          var n = e.call(this, t) || this;
          n.maxrow = 0;
          n.factory.configuration.tags.start(r[0], r[2], r[1]);
          return n;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "eqnarray";
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.EndEntry = function () {
          if (this.row.length) {
            f.default.fixInitialMO(this.factory.configuration, this.nodes);
          }
          var e = this.create("node", "mtd", this.nodes);
          this.row.push(e);
          this.Clear();
        };
        t.prototype.EndRow = function () {
          if (this.row.length > this.maxrow) {
            this.maxrow = this.row.length;
          }
          var e = "mtr";
          var t = this.factory.configuration.tags.getTag();
          if (t) {
            this.row = [t].concat(this.row);
            e = "mlabeledtr";
          }
          this.factory.configuration.tags.clearTag();
          var r = this.create("node", e, this.row);
          this.table.push(r);
          this.row = [];
        };
        t.prototype.EndTable = function () {
          e.prototype.EndTable.call(this);
          this.factory.configuration.tags.end();
          this.extendArray("columnalign", this.maxrow);
          this.extendArray("columnwidth", this.maxrow);
          this.extendArray("columnspacing", this.maxrow - 1);
        };
        t.prototype.extendArray = function (e, t) {
          if (!this.arraydef[e]) return;
          var r = this.arraydef[e].split(/ /);
          var a = i([], n(r), false);
          if (a.length > 1) {
            while (a.length < t) {
              a.push.apply(a, i([], n(r), false));
            }
            this.arraydef[e] = a.slice(0, t).join(" ");
          }
        };
        return t;
      })(N);
      t.EqnArrayItem = R;
      var _ = (function (e) {
        a(t, e);
        function t(t) {
          var r = [];
          for (var a = 1; a < arguments.length; a++) {
            r[a - 1] = arguments[a];
          }
          var n = e.call(this, t) || this;
          n.factory.configuration.tags.start("equation", true, r[0]);
          return n;
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "equation";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(t.prototype, "isOpen", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.checkItem = function (t) {
          if (t.isKind("end")) {
            var r = this.toMml();
            var a = this.factory.configuration.tags.getTag();
            this.factory.configuration.tags.end();
            return [[a ? this.factory.configuration.tags.enTag(r, a) : r, t], true];
          }
          if (t.isKind("stop")) {
            throw new c.default("EnvMissingEnd", "Missing \\end{%1}", this.getName());
          }
          return e.prototype.checkItem.call(this, t);
        };
        return t;
      })(h.BaseItem);
      t.EquationItem = _;
    },
    83031: function (e, t, r) {
      var a =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, a) {
              if (a === undefined) a = r;
              var n = Object.getOwnPropertyDescriptor(t, r);
              if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) {
                n = {
                  enumerable: true,
                  get: function () {
                    return t[r];
                  },
                };
              }
              Object.defineProperty(e, a, n);
            }
          : function (e, t, r, a) {
              if (a === undefined) a = r;
              e[a] = t[r];
            });
      var n =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: true, value: t });
            }
          : function (e, t) {
              e["default"] = t;
            });
      var i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null) for (var r in e) if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) a(t, e, r);
          n(t, e);
          return t;
        };
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var s = i(r(92715));
      var l = r(48948);
      var u = o(r(40871));
      var c = o(r(96004));
      var f = o(r(3378));
      var p = r(18426);
      var h = r(77130);
      new s.RegExpMap("letter", c.default.variable, /[a-z]/i);
      new s.RegExpMap("digit", c.default.digit, /[0-9.,]/);
      new s.RegExpMap("command", c.default.controlSequence, /^\\/);
      new s.MacroMap(
        "special",
        {
          "{": "Open",
          "}": "Close",
          "~": "Tilde",
          "^": "Superscript",
          _: "Subscript",
          " ": "Space",
          "\t": "Space",
          "\r": "Space",
          "\n": "Space",
          "'": "Prime",
          "%": "Comment",
          "&": "Entry",
          "#": "Hash",
          " ": "Space",
          "’": "Prime",
        },
        u.default
      );
      new s.CharacterMap("mathchar0mi", c.default.mathchar0mi, {
        alpha: "α",
        beta: "β",
        gamma: "γ",
        delta: "δ",
        epsilon: "ϵ",
        zeta: "ζ",
        eta: "η",
        theta: "θ",
        iota: "ι",
        kappa: "κ",
        lambda: "λ",
        mu: "μ",
        nu: "ν",
        xi: "ξ",
        omicron: "ο",
        pi: "π",
        rho: "ρ",
        sigma: "σ",
        tau: "τ",
        upsilon: "υ",
        phi: "ϕ",
        chi: "χ",
        psi: "ψ",
        omega: "ω",
        varepsilon: "ε",
        vartheta: "ϑ",
        varpi: "ϖ",
        varrho: "ϱ",
        varsigma: "ς",
        varphi: "φ",
        S: ["§", { mathvariant: l.TexConstant.Variant.NORMAL }],
        aleph: ["ℵ", { mathvariant: l.TexConstant.Variant.NORMAL }],
        hbar: ["ℏ", { variantForm: true }],
        imath: "ı",
        jmath: "ȷ",
        ell: "ℓ",
        wp: ["℘", { mathvariant: l.TexConstant.Variant.NORMAL }],
        Re: ["ℜ", { mathvariant: l.TexConstant.Variant.NORMAL }],
        Im: ["ℑ", { mathvariant: l.TexConstant.Variant.NORMAL }],
        partial: ["∂", { mathvariant: l.TexConstant.Variant.ITALIC }],
        infty: ["∞", { mathvariant: l.TexConstant.Variant.NORMAL }],
        prime: ["′", { variantForm: true }],
        emptyset: ["∅", { mathvariant: l.TexConstant.Variant.NORMAL }],
        nabla: ["∇", { mathvariant: l.TexConstant.Variant.NORMAL }],
        top: ["⊤", { mathvariant: l.TexConstant.Variant.NORMAL }],
        bot: ["⊥", { mathvariant: l.TexConstant.Variant.NORMAL }],
        angle: ["∠", { mathvariant: l.TexConstant.Variant.NORMAL }],
        triangle: ["△", { mathvariant: l.TexConstant.Variant.NORMAL }],
        backslash: ["∖", { mathvariant: l.TexConstant.Variant.NORMAL }],
        forall: ["∀", { mathvariant: l.TexConstant.Variant.NORMAL }],
        exists: ["∃", { mathvariant: l.TexConstant.Variant.NORMAL }],
        neg: ["¬", { mathvariant: l.TexConstant.Variant.NORMAL }],
        lnot: ["¬", { mathvariant: l.TexConstant.Variant.NORMAL }],
        flat: ["♭", { mathvariant: l.TexConstant.Variant.NORMAL }],
        natural: ["♮", { mathvariant: l.TexConstant.Variant.NORMAL }],
        sharp: ["♯", { mathvariant: l.TexConstant.Variant.NORMAL }],
        clubsuit: ["♣", { mathvariant: l.TexConstant.Variant.NORMAL }],
        diamondsuit: ["♢", { mathvariant: l.TexConstant.Variant.NORMAL }],
        heartsuit: ["♡", { mathvariant: l.TexConstant.Variant.NORMAL }],
        spadesuit: ["♠", { mathvariant: l.TexConstant.Variant.NORMAL }],
      });
      new s.CharacterMap("mathchar0mo", c.default.mathchar0mo, {
        surd: "√",
        coprod: ["∐", { texClass: p.TEXCLASS.OP, movesupsub: true }],
        bigvee: ["⋁", { texClass: p.TEXCLASS.OP, movesupsub: true }],
        bigwedge: ["⋀", { texClass: p.TEXCLASS.OP, movesupsub: true }],
        biguplus: ["⨄", { texClass: p.TEXCLASS.OP, movesupsub: true }],
        bigcap: ["⋂", { texClass: p.TEXCLASS.OP, movesupsub: true }],
        bigcup: ["⋃", { texClass: p.TEXCLASS.OP, movesupsub: true }],
        int: ["∫", { texClass: p.TEXCLASS.OP }],
        intop: ["∫", { texClass: p.TEXCLASS.OP, movesupsub: true, movablelimits: true }],
        iint: ["∬", { texClass: p.TEXCLASS.OP }],
        iiint: ["∭", { texClass: p.TEXCLASS.OP }],
        prod: ["∏", { texClass: p.TEXCLASS.OP, movesupsub: true }],
        sum: ["∑", { texClass: p.TEXCLASS.OP, movesupsub: true }],
        bigotimes: ["⨂", { texClass: p.TEXCLASS.OP, movesupsub: true }],
        bigoplus: ["⨁", { texClass: p.TEXCLASS.OP, movesupsub: true }],
        bigodot: ["⨀", { texClass: p.TEXCLASS.OP, movesupsub: true }],
        oint: ["∮", { texClass: p.TEXCLASS.OP }],
        bigsqcup: ["⨆", { texClass: p.TEXCLASS.OP, movesupsub: true }],
        smallint: ["∫", { largeop: false }],
        triangleleft: "◃",
        triangleright: "▹",
        bigtriangleup: "△",
        bigtriangledown: "▽",
        wedge: "∧",
        land: "∧",
        vee: "∨",
        lor: "∨",
        cap: "∩",
        cup: "∪",
        ddagger: "‡",
        dagger: "†",
        sqcap: "⊓",
        sqcup: "⊔",
        uplus: "⊎",
        amalg: "⨿",
        diamond: "⋄",
        bullet: "∙",
        wr: "≀",
        div: "÷",
        divsymbol: "÷",
        odot: ["⊙", { largeop: false }],
        oslash: ["⊘", { largeop: false }],
        otimes: ["⊗", { largeop: false }],
        ominus: ["⊖", { largeop: false }],
        oplus: ["⊕", { largeop: false }],
        mp: "∓",
        pm: "±",
        circ: "∘",
        bigcirc: "◯",
        setminus: "∖",
        cdot: "⋅",
        ast: "∗",
        times: "×",
        star: "⋆",
        propto: "∝",
        sqsubseteq: "⊑",
        sqsupseteq: "⊒",
        parallel: "∥",
        mid: "∣",
        dashv: "⊣",
        vdash: "⊢",
        leq: "≤",
        le: "≤",
        geq: "≥",
        ge: "≥",
        lt: "<",
        gt: ">",
        succ: "≻",
        prec: "≺",
        approx: "≈",
        succeq: "⪰",
        preceq: "⪯",
        supset: "⊃",
        subset: "⊂",
        supseteq: "⊇",
        subseteq: "⊆",
        in: "∈",
        ni: "∋",
        notin: "∉",
        owns: "∋",
        gg: "≫",
        ll: "≪",
        sim: "∼",
        simeq: "≃",
        perp: "⊥",
        equiv: "≡",
        asymp: "≍",
        smile: "⌣",
        frown: "⌢",
        ne: "≠",
        neq: "≠",
        cong: "≅",
        doteq: "≐",
        bowtie: "⋈",
        models: "⊨",
        notChar: "⧸",
        Leftrightarrow: "⇔",
        Leftarrow: "⇐",
        Rightarrow: "⇒",
        leftrightarrow: "↔",
        leftarrow: "←",
        gets: "←",
        rightarrow: "→",
        to: ["→", { accent: false }],
        mapsto: "↦",
        leftharpoonup: "↼",
        leftharpoondown: "↽",
        rightharpoonup: "⇀",
        rightharpoondown: "⇁",
        nearrow: "↗",
        searrow: "↘",
        nwarrow: "↖",
        swarrow: "↙",
        rightleftharpoons: "⇌",
        hookrightarrow: "↪",
        hookleftarrow: "↩",
        longleftarrow: "⟵",
        Longleftarrow: "⟸",
        longrightarrow: "⟶",
        Longrightarrow: "⟹",
        Longleftrightarrow: "⟺",
        longleftrightarrow: "⟷",
        longmapsto: "⟼",
        ldots: "…",
        cdots: "⋯",
        vdots: "⋮",
        ddots: "⋱",
        dotsc: "…",
        dotsb: "⋯",
        dotsm: "⋯",
        dotsi: "⋯",
        dotso: "…",
        ldotp: [".", { texClass: p.TEXCLASS.PUNCT }],
        cdotp: ["⋅", { texClass: p.TEXCLASS.PUNCT }],
        colon: [":", { texClass: p.TEXCLASS.PUNCT }],
      });
      new s.CharacterMap("mathchar7", c.default.mathchar7, {
        Gamma: "Γ",
        Delta: "Δ",
        Theta: "Θ",
        Lambda: "Λ",
        Xi: "Ξ",
        Pi: "Π",
        Sigma: "Σ",
        Upsilon: "Υ",
        Phi: "Φ",
        Psi: "Ψ",
        Omega: "Ω",
        _: "_",
        "#": "#",
        $: "$",
        "%": "%",
        "&": "&",
        And: "&",
      });
      new s.DelimiterMap("delimiter", c.default.delimiter, {
        "(": "(",
        ")": ")",
        "[": "[",
        "]": "]",
        "<": "⟨",
        ">": "⟩",
        "\\lt": "⟨",
        "\\gt": "⟩",
        "/": "/",
        "|": ["|", { texClass: p.TEXCLASS.ORD }],
        ".": "",
        "\\\\": "\\",
        "\\lmoustache": "⎰",
        "\\rmoustache": "⎱",
        "\\lgroup": "⟮",
        "\\rgroup": "⟯",
        "\\arrowvert": "⏐",
        "\\Arrowvert": "‖",
        "\\bracevert": "⎪",
        "\\Vert": ["‖", { texClass: p.TEXCLASS.ORD }],
        "\\|": ["‖", { texClass: p.TEXCLASS.ORD }],
        "\\vert": ["|", { texClass: p.TEXCLASS.ORD }],
        "\\uparrow": "↑",
        "\\downarrow": "↓",
        "\\updownarrow": "↕",
        "\\Uparrow": "⇑",
        "\\Downarrow": "⇓",
        "\\Updownarrow": "⇕",
        "\\backslash": "\\",
        "\\rangle": "⟩",
        "\\langle": "⟨",
        "\\rbrace": "}",
        "\\lbrace": "{",
        "\\}": "}",
        "\\{": "{",
        "\\rceil": "⌉",
        "\\lceil": "⌈",
        "\\rfloor": "⌋",
        "\\lfloor": "⌊",
        "\\lbrack": "[",
        "\\rbrack": "]",
      });
      new s.CommandMap(
        "macros",
        {
          displaystyle: ["SetStyle", "D", true, 0],
          textstyle: ["SetStyle", "T", false, 0],
          scriptstyle: ["SetStyle", "S", false, 1],
          scriptscriptstyle: ["SetStyle", "SS", false, 2],
          rm: ["SetFont", l.TexConstant.Variant.NORMAL],
          mit: ["SetFont", l.TexConstant.Variant.ITALIC],
          oldstyle: ["SetFont", l.TexConstant.Variant.OLDSTYLE],
          cal: ["SetFont", l.TexConstant.Variant.CALLIGRAPHIC],
          it: ["SetFont", l.TexConstant.Variant.MATHITALIC],
          bf: ["SetFont", l.TexConstant.Variant.BOLD],
          bbFont: ["SetFont", l.TexConstant.Variant.DOUBLESTRUCK],
          scr: ["SetFont", l.TexConstant.Variant.SCRIPT],
          frak: ["SetFont", l.TexConstant.Variant.FRAKTUR],
          sf: ["SetFont", l.TexConstant.Variant.SANSSERIF],
          tt: ["SetFont", l.TexConstant.Variant.MONOSPACE],
          mathrm: ["MathFont", l.TexConstant.Variant.NORMAL],
          mathup: ["MathFont", l.TexConstant.Variant.NORMAL],
          mathnormal: ["MathFont", ""],
          mathbf: ["MathFont", l.TexConstant.Variant.BOLD],
          mathbfup: ["MathFont", l.TexConstant.Variant.BOLD],
          mathit: ["MathFont", l.TexConstant.Variant.MATHITALIC],
          mathbfit: ["MathFont", l.TexConstant.Variant.BOLDITALIC],
          mathbb: ["MathFont", l.TexConstant.Variant.DOUBLESTRUCK],
          Bbb: ["MathFont", l.TexConstant.Variant.DOUBLESTRUCK],
          mathfrak: ["MathFont", l.TexConstant.Variant.FRAKTUR],
          mathbffrak: ["MathFont", l.TexConstant.Variant.BOLDFRAKTUR],
          mathscr: ["MathFont", l.TexConstant.Variant.SCRIPT],
          mathbfscr: ["MathFont", l.TexConstant.Variant.BOLDSCRIPT],
          mathsf: ["MathFont", l.TexConstant.Variant.SANSSERIF],
          mathsfup: ["MathFont", l.TexConstant.Variant.SANSSERIF],
          mathbfsf: ["MathFont", l.TexConstant.Variant.BOLDSANSSERIF],
          mathbfsfup: ["MathFont", l.TexConstant.Variant.BOLDSANSSERIF],
          mathsfit: ["MathFont", l.TexConstant.Variant.SANSSERIFITALIC],
          mathbfsfit: ["MathFont", l.TexConstant.Variant.SANSSERIFBOLDITALIC],
          mathtt: ["MathFont", l.TexConstant.Variant.MONOSPACE],
          mathcal: ["MathFont", l.TexConstant.Variant.CALLIGRAPHIC],
          mathbfcal: ["MathFont", l.TexConstant.Variant.BOLDCALLIGRAPHIC],
          symrm: ["MathFont", l.TexConstant.Variant.NORMAL],
          symup: ["MathFont", l.TexConstant.Variant.NORMAL],
          symnormal: ["MathFont", ""],
          symbf: ["MathFont", l.TexConstant.Variant.BOLD],
          symbfup: ["MathFont", l.TexConstant.Variant.BOLD],
          symit: ["MathFont", l.TexConstant.Variant.ITALIC],
          symbfit: ["MathFont", l.TexConstant.Variant.BOLDITALIC],
          symbb: ["MathFont", l.TexConstant.Variant.DOUBLESTRUCK],
          symfrak: ["MathFont", l.TexConstant.Variant.FRAKTUR],
          symbffrak: ["MathFont", l.TexConstant.Variant.BOLDFRAKTUR],
          symscr: ["MathFont", l.TexConstant.Variant.SCRIPT],
          symbfscr: ["MathFont", l.TexConstant.Variant.BOLDSCRIPT],
          symsf: ["MathFont", l.TexConstant.Variant.SANSSERIF],
          symsfup: ["MathFont", l.TexConstant.Variant.SANSSERIF],
          symbfsf: ["MathFont", l.TexConstant.Variant.BOLDSANSSERIF],
          symbfsfup: ["MathFont", l.TexConstant.Variant.BOLDSANSSERIF],
          symsfit: ["MathFont", l.TexConstant.Variant.SANSSERIFITALIC],
          symbfsfit: ["MathFont", l.TexConstant.Variant.SANSSERIFBOLDITALIC],
          symtt: ["MathFont", l.TexConstant.Variant.MONOSPACE],
          symcal: ["MathFont", l.TexConstant.Variant.CALLIGRAPHIC],
          symbfcal: ["MathFont", l.TexConstant.Variant.BOLDCALLIGRAPHIC],
          textrm: ["HBox", null, l.TexConstant.Variant.NORMAL],
          textup: ["HBox", null, l.TexConstant.Variant.NORMAL],
          textnormal: ["HBox"],
          textit: ["HBox", null, l.TexConstant.Variant.ITALIC],
          textbf: ["HBox", null, l.TexConstant.Variant.BOLD],
          textsf: ["HBox", null, l.TexConstant.Variant.SANSSERIF],
          texttt: ["HBox", null, l.TexConstant.Variant.MONOSPACE],
          tiny: ["SetSize", 0.5],
          Tiny: ["SetSize", 0.6],
          scriptsize: ["SetSize", 0.7],
          small: ["SetSize", 0.85],
          normalsize: ["SetSize", 1],
          large: ["SetSize", 1.2],
          Large: ["SetSize", 1.44],
          LARGE: ["SetSize", 1.73],
          huge: ["SetSize", 2.07],
          Huge: ["SetSize", 2.49],
          arcsin: "NamedFn",
          arccos: "NamedFn",
          arctan: "NamedFn",
          arg: "NamedFn",
          cos: "NamedFn",
          cosh: "NamedFn",
          cot: "NamedFn",
          coth: "NamedFn",
          csc: "NamedFn",
          deg: "NamedFn",
          det: "NamedOp",
          dim: "NamedFn",
          exp: "NamedFn",
          gcd: "NamedOp",
          hom: "NamedFn",
          inf: "NamedOp",
          ker: "NamedFn",
          lg: "NamedFn",
          lim: "NamedOp",
          liminf: ["NamedOp", "lim&thinsp;inf"],
          limsup: ["NamedOp", "lim&thinsp;sup"],
          ln: "NamedFn",
          log: "NamedFn",
          max: "NamedOp",
          min: "NamedOp",
          Pr: "NamedOp",
          sec: "NamedFn",
          sin: "NamedFn",
          sinh: "NamedFn",
          sup: "NamedOp",
          tan: "NamedFn",
          tanh: "NamedFn",
          limits: ["Limits", 1],
          nolimits: ["Limits", 0],
          overline: ["UnderOver", "2015"],
          underline: ["UnderOver", "2015"],
          overbrace: ["UnderOver", "23DE", 1],
          underbrace: ["UnderOver", "23DF", 1],
          overparen: ["UnderOver", "23DC"],
          underparen: ["UnderOver", "23DD"],
          overrightarrow: ["UnderOver", "2192"],
          underrightarrow: ["UnderOver", "2192"],
          overleftarrow: ["UnderOver", "2190"],
          underleftarrow: ["UnderOver", "2190"],
          overleftrightarrow: ["UnderOver", "2194"],
          underleftrightarrow: ["UnderOver", "2194"],
          overset: "Overset",
          underset: "Underset",
          overunderset: "Overunderset",
          stackrel: ["Macro", "\\mathrel{\\mathop{#2}\\limits^{#1}}", 2],
          stackbin: ["Macro", "\\mathbin{\\mathop{#2}\\limits^{#1}}", 2],
          over: "Over",
          overwithdelims: "Over",
          atop: "Over",
          atopwithdelims: "Over",
          above: "Over",
          abovewithdelims: "Over",
          brace: ["Over", "{", "}"],
          brack: ["Over", "[", "]"],
          choose: ["Over", "(", ")"],
          frac: "Frac",
          sqrt: "Sqrt",
          root: "Root",
          uproot: ["MoveRoot", "upRoot"],
          leftroot: ["MoveRoot", "leftRoot"],
          left: "LeftRight",
          right: "LeftRight",
          middle: "LeftRight",
          llap: "Lap",
          rlap: "Lap",
          raise: "RaiseLower",
          lower: "RaiseLower",
          moveleft: "MoveLeftRight",
          moveright: "MoveLeftRight",
          ",": ["Spacer", h.MATHSPACE.thinmathspace],
          ":": ["Spacer", h.MATHSPACE.mediummathspace],
          ">": ["Spacer", h.MATHSPACE.mediummathspace],
          ";": ["Spacer", h.MATHSPACE.thickmathspace],
          "!": ["Spacer", h.MATHSPACE.negativethinmathspace],
          enspace: ["Spacer", 0.5],
          quad: ["Spacer", 1],
          qquad: ["Spacer", 2],
          thinspace: ["Spacer", h.MATHSPACE.thinmathspace],
          negthinspace: ["Spacer", h.MATHSPACE.negativethinmathspace],
          hskip: "Hskip",
          hspace: "Hskip",
          kern: "Hskip",
          mskip: "Hskip",
          mspace: "Hskip",
          mkern: "Hskip",
          rule: "rule",
          Rule: ["Rule"],
          Space: ["Rule", "blank"],
          nonscript: "Nonscript",
          big: ["MakeBig", p.TEXCLASS.ORD, 0.85],
          Big: ["MakeBig", p.TEXCLASS.ORD, 1.15],
          bigg: ["MakeBig", p.TEXCLASS.ORD, 1.45],
          Bigg: ["MakeBig", p.TEXCLASS.ORD, 1.75],
          bigl: ["MakeBig", p.TEXCLASS.OPEN, 0.85],
          Bigl: ["MakeBig", p.TEXCLASS.OPEN, 1.15],
          biggl: ["MakeBig", p.TEXCLASS.OPEN, 1.45],
          Biggl: ["MakeBig", p.TEXCLASS.OPEN, 1.75],
          bigr: ["MakeBig", p.TEXCLASS.CLOSE, 0.85],
          Bigr: ["MakeBig", p.TEXCLASS.CLOSE, 1.15],
          biggr: ["MakeBig", p.TEXCLASS.CLOSE, 1.45],
          Biggr: ["MakeBig", p.TEXCLASS.CLOSE, 1.75],
          bigm: ["MakeBig", p.TEXCLASS.REL, 0.85],
          Bigm: ["MakeBig", p.TEXCLASS.REL, 1.15],
          biggm: ["MakeBig", p.TEXCLASS.REL, 1.45],
          Biggm: ["MakeBig", p.TEXCLASS.REL, 1.75],
          mathord: ["TeXAtom", p.TEXCLASS.ORD],
          mathop: ["TeXAtom", p.TEXCLASS.OP],
          mathopen: ["TeXAtom", p.TEXCLASS.OPEN],
          mathclose: ["TeXAtom", p.TEXCLASS.CLOSE],
          mathbin: ["TeXAtom", p.TEXCLASS.BIN],
          mathrel: ["TeXAtom", p.TEXCLASS.REL],
          mathpunct: ["TeXAtom", p.TEXCLASS.PUNCT],
          mathinner: ["TeXAtom", p.TEXCLASS.INNER],
          vcenter: ["TeXAtom", p.TEXCLASS.VCENTER],
          buildrel: "BuildRel",
          hbox: ["HBox", 0],
          text: "HBox",
          mbox: ["HBox", 0],
          fbox: "FBox",
          boxed: ["Macro", "\\fbox{$\\displaystyle{#1}$}", 1],
          framebox: "FrameBox",
          strut: "Strut",
          mathstrut: ["Macro", "\\vphantom{(}"],
          phantom: "Phantom",
          vphantom: ["Phantom", 1, 0],
          hphantom: ["Phantom", 0, 1],
          smash: "Smash",
          acute: ["Accent", "00B4"],
          grave: ["Accent", "0060"],
          ddot: ["Accent", "00A8"],
          tilde: ["Accent", "007E"],
          bar: ["Accent", "00AF"],
          breve: ["Accent", "02D8"],
          check: ["Accent", "02C7"],
          hat: ["Accent", "005E"],
          vec: ["Accent", "2192"],
          dot: ["Accent", "02D9"],
          widetilde: ["Accent", "007E", 1],
          widehat: ["Accent", "005E", 1],
          matrix: "Matrix",
          array: "Matrix",
          pmatrix: ["Matrix", "(", ")"],
          cases: ["Matrix", "{", "", "left left", null, ".1em", null, true],
          eqalign: ["Matrix", null, null, "right left", (0, h.em)(h.MATHSPACE.thickmathspace), ".5em", "D"],
          displaylines: ["Matrix", null, null, "center", null, ".5em", "D"],
          cr: "Cr",
          "\\": "CrLaTeX",
          newline: ["CrLaTeX", true],
          hline: ["HLine", "solid"],
          hdashline: ["HLine", "dashed"],
          eqalignno: ["Matrix", null, null, "right left", (0, h.em)(h.MATHSPACE.thickmathspace), ".5em", "D", null, "right"],
          leqalignno: ["Matrix", null, null, "right left", (0, h.em)(h.MATHSPACE.thickmathspace), ".5em", "D", null, "left"],
          hfill: "HFill",
          hfil: "HFill",
          hfilll: "HFill",
          bmod: ["Macro", '\\mmlToken{mo}[lspace="thickmathspace"' + ' rspace="thickmathspace"]{mod}'],
          pmod: ["Macro", "\\pod{\\mmlToken{mi}{mod}\\kern 6mu #1}", 1],
          mod: ["Macro", "\\mathchoice{\\kern18mu}{\\kern12mu}" + "{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,#1", 1],
          pod: ["Macro", "\\mathchoice{\\kern18mu}{\\kern8mu}" + "{\\kern8mu}{\\kern8mu}(#1)", 1],
          iff: ["Macro", "\\;\\Longleftrightarrow\\;"],
          skew: ["Macro", "{{#2{#3\\mkern#1mu}\\mkern-#1mu}{}}", 3],
          pmb: ["Macro", "\\rlap{#1}\\kern1px{#1}", 1],
          TeX: ["Macro", "T\\kern-.14em\\lower.5ex{E}\\kern-.115em X"],
          LaTeX: ["Macro", "L\\kern-.325em\\raise.21em" + "{\\scriptstyle{A}}\\kern-.17em\\TeX"],
          " ": ["Macro", "\\text{ }"],
          not: "Not",
          dots: "Dots",
          space: "Tilde",
          " ": "Tilde",
          begin: "BeginEnd",
          end: "BeginEnd",
          label: "HandleLabel",
          ref: "HandleRef",
          nonumber: "HandleNoTag",
          mathchoice: "MathChoice",
          mmlToken: "MmlToken",
        },
        u.default
      );
      new s.EnvironmentMap(
        "environment",
        c.default.environment,
        {
          array: ["AlignedArray"],
          equation: ["Equation", null, true],
          eqnarray: ["EqnArray", null, true, true, "rcl", f.default.cols(0, h.MATHSPACE.thickmathspace), ".5em"],
        },
        u.default
      );
      new s.CharacterMap("not_remap", null, {
        "←": "↚",
        "→": "↛",
        "↔": "↮",
        "⇐": "⇍",
        "⇒": "⇏",
        "⇔": "⇎",
        "∈": "∉",
        "∋": "∌",
        "∣": "∤",
        "∥": "∦",
        "∼": "≁",
        "~": "≁",
        "≃": "≄",
        "≅": "≇",
        "≈": "≉",
        "≍": "≭",
        "=": "≠",
        "≡": "≢",
        "<": "≮",
        ">": "≯",
        "≤": "≰",
        "≥": "≱",
        "≲": "≴",
        "≳": "≵",
        "≶": "≸",
        "≷": "≹",
        "≺": "⊀",
        "≻": "⊁",
        "⊂": "⊄",
        "⊃": "⊅",
        "⊆": "⊈",
        "⊇": "⊉",
        "⊢": "⊬",
        "⊨": "⊭",
        "⊩": "⊮",
        "⊫": "⊯",
        "≼": "⋠",
        "≽": "⋡",
        "⊑": "⋢",
        "⊒": "⋣",
        "⊲": "⋪",
        "⊳": "⋫",
        "⊴": "⋬",
        "⊵": "⋭",
        "∃": "∄",
      });
    },
    40871: function (e, t, r) {
      var a =
        (this && this.__assign) ||
        function () {
          a =
            Object.assign ||
            function (e) {
              for (var t, r = 1, a = arguments.length; r < a; r++) {
                t = arguments[r];
                for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) e[n] = t[n];
              }
              return e;
            };
          return a.apply(this, arguments);
        };
      var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, r, a) {
              if (a === undefined) a = r;
              var n = Object.getOwnPropertyDescriptor(t, r);
              if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) {
                n = {
                  enumerable: true,
                  get: function () {
                    return t[r];
                  },
                };
              }
              Object.defineProperty(e, a, n);
            }
          : function (e, t, r, a) {
              if (a === undefined) a = r;
              e[a] = t[r];
            });
      var i =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: true, value: t });
            }
          : function (e, t) {
              e["default"] = t;
            });
      var o =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null) for (var r in e) if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) n(t, e, r);
          i(t, e);
          return t;
        };
      var s =
        (this && this.__read) ||
        function (e, t) {
          var r = typeof Symbol === "function" && e[Symbol.iterator];
          if (!r) return e;
          var a = r.call(e),
            n,
            i = [],
            o;
          try {
            while ((t === void 0 || t-- > 0) && !(n = a.next()).done) i.push(n.value);
          } catch (s) {
            o = { error: s };
          } finally {
            try {
              if (n && !n.done && (r = a["return"])) r.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        };
      var l =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: true });
      var u = o(r(5065));
      var c = l(r(72895));
      var f = l(r(48406));
      var p = l(r(42880));
      var h = r(48948);
      var d = l(r(3378));
      var m = r(18426);
      var v = r(56711);
      var y = r(77130);
      var g = r(63411);
      var b = r(36059);
      var A = {};
      var S = 1.2 / 0.85;
      var P = { fontfamily: 1, fontsize: 1, fontweight: 1, fontstyle: 1, color: 1, background: 1, id: 1, class: 1, href: 1, style: 1 };
      A.Open = function (e, t) {
        e.Push(e.itemFactory.create("open"));
      };
      A.Close = function (e, t) {
        e.Push(e.itemFactory.create("close"));
      };
      A.Tilde = function (e, t) {
        e.Push(e.create("token", "mtext", {}, g.entities.nbsp));
      };
      A.Space = function (e, t) {};
      A.Superscript = function (e, t) {
        var r;
        if (e.GetNext().match(/\d/)) {
          e.string = e.string.substr(0, e.i + 1) + " " + e.string.substr(e.i + 1);
        }
        var a;
        var n;
        var i = e.stack.Top();
        if (i.isKind("prime")) {
          (r = s(i.Peek(2), 2)), (n = r[0]), (a = r[1]);
          e.stack.Pop();
        } else {
          n = e.stack.Prev();
          if (!n) {
            n = e.create("token", "mi", {}, "");
          }
        }
        var o = c.default.getProperty(n, "movesupsub");
        var l = c.default.isType(n, "msubsup") ? n.sup : n.over;
        if (
          (c.default.isType(n, "msubsup") && !c.default.isType(n, "msup") && c.default.getChildAt(n, n.sup)) ||
          (c.default.isType(n, "munderover") &&
            !c.default.isType(n, "mover") &&
            c.default.getChildAt(n, n.over) &&
            !c.default.getProperty(n, "subsupOK"))
        ) {
          throw new f.default("DoubleExponent", "Double exponent: use braces to clarify");
        }
        if (!c.default.isType(n, "msubsup") || c.default.isType(n, "msup")) {
          if (o) {
            if (!c.default.isType(n, "munderover") || c.default.isType(n, "mover") || c.default.getChildAt(n, n.over)) {
              n = e.create("node", "munderover", [n], { movesupsub: true });
            }
            l = n.over;
          } else {
            n = e.create("node", "msubsup", [n]);
            l = n.sup;
          }
        }
        e.Push(e.itemFactory.create("subsup", n).setProperties({ position: l, primes: a, movesupsub: o }));
      };
      A.Subscript = function (e, t) {
        var r;
        if (e.GetNext().match(/\d/)) {
          e.string = e.string.substr(0, e.i + 1) + " " + e.string.substr(e.i + 1);
        }
        var a, n;
        var i = e.stack.Top();
        if (i.isKind("prime")) {
          (r = s(i.Peek(2), 2)), (n = r[0]), (a = r[1]);
          e.stack.Pop();
        } else {
          n = e.stack.Prev();
          if (!n) {
            n = e.create("token", "mi", {}, "");
          }
        }
        var o = c.default.getProperty(n, "movesupsub");
        var l = c.default.isType(n, "msubsup") ? n.sub : n.under;
        if (
          (c.default.isType(n, "msubsup") && !c.default.isType(n, "msup") && c.default.getChildAt(n, n.sub)) ||
          (c.default.isType(n, "munderover") &&
            !c.default.isType(n, "mover") &&
            c.default.getChildAt(n, n.under) &&
            !c.default.getProperty(n, "subsupOK"))
        ) {
          throw new f.default("DoubleSubscripts", "Double subscripts: use braces to clarify");
        }
        if (!c.default.isType(n, "msubsup") || c.default.isType(n, "msup")) {
          if (o) {
            if (!c.default.isType(n, "munderover") || c.default.isType(n, "mover") || c.default.getChildAt(n, n.under)) {
              n = e.create("node", "munderover", [n], { movesupsub: true });
            }
            l = n.under;
          } else {
            n = e.create("node", "msubsup", [n]);
            l = n.sub;
          }
        }
        e.Push(e.itemFactory.create("subsup", n).setProperties({ position: l, primes: a, movesupsub: o }));
      };
      A.Prime = function (e, t) {
        var r = e.stack.Prev();
        if (!r) {
          r = e.create("node", "mi");
        }
        if (c.default.isType(r, "msubsup") && !c.default.isType(r, "msup") && c.default.getChildAt(r, r.sup)) {
          throw new f.default("DoubleExponentPrime", "Prime causes double exponent: use braces to clarify");
        }
        var a = "";
        e.i--;
        do {
          a += g.entities.prime;
          e.i++, (t = e.GetNext());
        } while (t === "'" || t === g.entities.rsquo);
        a = ["", "′", "″", "‴", "⁗"][a.length] || a;
        var n = e.create("token", "mo", { variantForm: true }, a);
        e.Push(e.itemFactory.create("prime", r, n));
      };
      A.Comment = function (e, t) {
        while (e.i < e.string.length && e.string.charAt(e.i) !== "\n") {
          e.i++;
        }
      };
      A.Hash = function (e, t) {
        throw new f.default("CantUseHash1", "You can't use 'macro parameter character #' in math mode");
      };
      A.MathFont = function (e, t, r) {
        var n = e.GetArgument(t);
        var i = new p.default(n, a(a({}, e.stack.env), { font: r, multiLetterIdentifiers: /^[a-zA-Z]+/, noAutoOP: true }), e.configuration).mml();
        e.Push(e.create("node", "TeXAtom", [i]));
      };
      A.SetFont = function (e, t, r) {
        e.stack.env["font"] = r;
      };
      A.SetStyle = function (e, t, r, a, n) {
        e.stack.env["style"] = r;
        e.stack.env["level"] = n;
        e.Push(e.itemFactory.create("style").setProperty("styles", { displaystyle: a, scriptlevel: n }));
      };
      A.SetSize = function (e, t, r) {
        e.stack.env["size"] = r;
        e.Push(e.itemFactory.create("style").setProperty("styles", { mathsize: (0, y.em)(r) }));
      };
      A.Spacer = function (e, t, r) {
        var a = e.create("node", "mspace", [], { width: (0, y.em)(r) });
        var n = e.create("node", "mstyle", [a], { scriptlevel: 0 });
        e.Push(n);
      };
      A.LeftRight = function (e, t) {
        var r = t.substr(1);
        e.Push(e.itemFactory.create(r, e.GetDelimiter(t), e.stack.env.color));
      };
      A.NamedFn = function (e, t, r) {
        if (!r) {
          r = t.substr(1);
        }
        var a = e.create("token", "mi", { texClass: m.TEXCLASS.OP }, r);
        e.Push(e.itemFactory.create("fn", a));
      };
      A.NamedOp = function (e, t, r) {
        if (!r) {
          r = t.substr(1);
        }
        r = r.replace(/&thinsp;/, " ");
        var a = e.create("token", "mo", { movablelimits: true, movesupsub: true, form: h.TexConstant.Form.PREFIX, texClass: m.TEXCLASS.OP }, r);
        e.Push(a);
      };
      A.Limits = function (e, t, r) {
        var a = e.stack.Prev(true);
        if (!a || (c.default.getTexClass(c.default.getCoreMO(a)) !== m.TEXCLASS.OP && c.default.getProperty(a, "movesupsub") == null)) {
          throw new f.default("MisplacedLimits", "%1 is allowed only on operators", e.currentCS);
        }
        var n = e.stack.Top();
        var i;
        if (c.default.isType(a, "munderover") && !r) {
          i = e.create("node", "msubsup");
          c.default.copyChildren(a, i);
          a = n.Last = i;
        } else if (c.default.isType(a, "msubsup") && r) {
          i = e.create("node", "munderover");
          c.default.copyChildren(a, i);
          a = n.Last = i;
        }
        c.default.setProperty(a, "movesupsub", r ? true : false);
        c.default.setProperties(c.default.getCoreMO(a), { movablelimits: false });
        if (c.default.getAttribute(a, "movablelimits") || c.default.getProperty(a, "movablelimits")) {
          c.default.setProperties(a, { movablelimits: false });
        }
      };
      A.Over = function (e, t, r, a) {
        var n = e.itemFactory.create("over").setProperty("name", e.currentCS);
        if (r || a) {
          n.setProperty("open", r);
          n.setProperty("close", a);
        } else if (t.match(/withdelims$/)) {
          n.setProperty("open", e.GetDelimiter(t));
          n.setProperty("close", e.GetDelimiter(t));
        }
        if (t.match(/^\\above/)) {
          n.setProperty("thickness", e.GetDimen(t));
        } else if (t.match(/^\\atop/) || r || a) {
          n.setProperty("thickness", 0);
        }
        e.Push(n);
      };
      A.Frac = function (e, t) {
        var r = e.ParseArg(t);
        var a = e.ParseArg(t);
        var n = e.create("node", "mfrac", [r, a]);
        e.Push(n);
      };
      A.Sqrt = function (e, t) {
        var r = e.GetBrackets(t);
        var a = e.GetArgument(t);
        if (a === "\\frac") {
          a += "{" + e.GetArgument(a) + "}{" + e.GetArgument(a) + "}";
        }
        var n = new p.default(a, e.stack.env, e.configuration).mml();
        if (!r) {
          n = e.create("node", "msqrt", [n]);
        } else {
          n = e.create("node", "mroot", [n, C(e, r)]);
        }
        e.Push(n);
      };
      function C(e, t) {
        var r = e.stack.env;
        var a = r["inRoot"];
        r["inRoot"] = true;
        var n = new p.default(t, r, e.configuration);
        var i = n.mml();
        var o = n.stack.global;
        if (o["leftRoot"] || o["upRoot"]) {
          var s = {};
          if (o["leftRoot"]) {
            s["width"] = o["leftRoot"];
          }
          if (o["upRoot"]) {
            s["voffset"] = o["upRoot"];
            s["height"] = o["upRoot"];
          }
          i = e.create("node", "mpadded", [i], s);
        }
        r["inRoot"] = a;
        return i;
      }
      A.Root = function (e, t) {
        var r = e.GetUpTo(t, "\\of");
        var a = e.ParseArg(t);
        var n = e.create("node", "mroot", [a, C(e, r)]);
        e.Push(n);
      };
      A.MoveRoot = function (e, t, r) {
        if (!e.stack.env["inRoot"]) {
          throw new f.default("MisplacedMoveRoot", "%1 can appear only within a root", e.currentCS);
        }
        if (e.stack.global[r]) {
          throw new f.default("MultipleMoveRoot", "Multiple use of %1", e.currentCS);
        }
        var a = e.GetArgument(t);
        if (!a.match(/-?[0-9]+/)) {
          throw new f.default("IntegerArg", "The argument to %1 must be an integer", e.currentCS);
        }
        a = parseInt(a, 10) / 15 + "em";
        if (a.substr(0, 1) !== "-") {
          a = "+" + a;
        }
        e.stack.global[r] = a;
      };
      A.Accent = function (e, t, r, n) {
        var i = e.ParseArg(t);
        var o = a(a({}, d.default.getFontDef(e)), { accent: true, mathaccent: true });
        var s = c.default.createEntity(r);
        var l = e.create("token", "mo", o, s);
        var u = l;
        c.default.setAttribute(u, "stretchy", n ? true : false);
        var f = c.default.isEmbellished(i) ? c.default.getCoreMO(i) : i;
        if (c.default.isType(f, "mo") || c.default.getProperty(f, "movablelimits")) {
          c.default.setProperties(f, { movablelimits: false });
        }
        var p = e.create("node", "munderover");
        c.default.setChild(p, 0, i);
        c.default.setChild(p, 1, null);
        c.default.setChild(p, 2, u);
        var h = e.create("node", "TeXAtom", [p]);
        e.Push(h);
      };
      A.UnderOver = function (e, t, r, a) {
        var n = c.default.createEntity(r);
        var i = e.create("token", "mo", { stretchy: true, accent: true }, n);
        var o = t.charAt(1) === "o" ? "over" : "under";
        var s = e.ParseArg(t);
        e.Push(d.default.underOver(e, s, i, o, a));
      };
      A.Overset = function (e, t) {
        var r = e.ParseArg(t);
        var a = e.ParseArg(t);
        d.default.checkMovableLimits(a);
        if (r.isKind("mo")) {
          c.default.setAttribute(r, "accent", false);
        }
        var n = e.create("node", "mover", [a, r]);
        e.Push(n);
      };
      A.Underset = function (e, t) {
        var r = e.ParseArg(t);
        var a = e.ParseArg(t);
        d.default.checkMovableLimits(a);
        if (r.isKind("mo")) {
          c.default.setAttribute(r, "accent", false);
        }
        var n = e.create("node", "munder", [a, r], { accentunder: false });
        e.Push(n);
      };
      A.Overunderset = function (e, t) {
        var r = e.ParseArg(t);
        var a = e.ParseArg(t);
        var n = e.ParseArg(t);
        d.default.checkMovableLimits(n);
        if (r.isKind("mo")) {
          c.default.setAttribute(r, "accent", false);
        }
        if (a.isKind("mo")) {
          c.default.setAttribute(a, "accent", false);
        }
        var i = e.create("node", "munderover", [n, a, r], { accent: false, accentunder: false });
        e.Push(i);
      };
      A.TeXAtom = function (e, t, r) {
        var a = { texClass: r };
        var n;
        var i;
        var o;
        if (r === m.TEXCLASS.OP) {
          a["movesupsub"] = a["movablelimits"] = true;
          var s = e.GetArgument(t);
          var l = s.match(/^\s*\\rm\s+([a-zA-Z0-9 ]+)$/);
          if (l) {
            a["mathvariant"] = h.TexConstant.Variant.NORMAL;
            i = e.create("token", "mi", a, l[1]);
          } else {
            o = new p.default(s, e.stack.env, e.configuration).mml();
            i = e.create("node", "TeXAtom", [o], a);
          }
          n = e.itemFactory.create("fn", i);
        } else {
          o = e.ParseArg(t);
          n = e.create("node", "TeXAtom", [o], a);
        }
        e.Push(n);
      };
      A.MmlToken = function (e, t) {
        var r = e.GetArgument(t);
        var a = e.GetBrackets(t, "").replace(/^\s+/, "");
        var n = e.GetArgument(t);
        var i = {};
        var o = [];
        var s;
        try {
          s = e.create("node", r);
        } catch (h) {
          s = null;
        }
        if (!s || !s.isToken) {
          throw new f.default("NotMathMLToken", "%1 is not a token element", r);
        }
        while (a !== "") {
          var l = a.match(/^([a-z]+)\s*=\s*('[^']*'|"[^"]*"|[^ ,]*)\s*,?\s*/i);
          if (!l) {
            throw new f.default("InvalidMathMLAttr", "Invalid MathML attribute: %1", a);
          }
          if (!s.attributes.hasDefault(l[1]) && !P[l[1]]) {
            throw new f.default("UnknownAttrForElement", "%1 is not a recognized attribute for %2", l[1], r);
          }
          var u = d.default.MmlFilterAttribute(e, l[1], l[2].replace(/^(['"])(.*)\1$/, "$2"));
          if (u) {
            if (u.toLowerCase() === "true") {
              u = true;
            } else if (u.toLowerCase() === "false") {
              u = false;
            }
            i[l[1]] = u;
            o.push(l[1]);
          }
          a = a.substr(l[0].length);
        }
        if (o.length) {
          i["mjx-keep-attrs"] = o.join(" ");
        }
        var p = e.create("text", n);
        s.appendChild(p);
        c.default.setProperties(s, i);
        e.Push(s);
      };
      A.Strut = function (e, t) {
        var r = e.create("node", "mrow");
        var a = e.create("node", "mpadded", [r], { height: "8.6pt", depth: "3pt", width: 0 });
        e.Push(a);
      };
      A.Phantom = function (e, t, r, a) {
        var n = e.create("node", "mphantom", [e.ParseArg(t)]);
        if (r || a) {
          n = e.create("node", "mpadded", [n]);
          if (a) {
            c.default.setAttribute(n, "height", 0);
            c.default.setAttribute(n, "depth", 0);
          }
          if (r) {
            c.default.setAttribute(n, "width", 0);
          }
        }
        var i = e.create("node", "TeXAtom", [n]);
        e.Push(i);
      };
      A.Smash = function (e, t) {
        var r = d.default.trimSpaces(e.GetBrackets(t, ""));
        var a = e.create("node", "mpadded", [e.ParseArg(t)]);
        switch (r) {
          case "b":
            c.default.setAttribute(a, "depth", 0);
            break;
          case "t":
            c.default.setAttribute(a, "height", 0);
            break;
          default:
            c.default.setAttribute(a, "height", 0);
            c.default.setAttribute(a, "depth", 0);
        }
        var n = e.create("node", "TeXAtom", [a]);
        e.Push(n);
      };
      A.Lap = function (e, t) {
        var r = e.create("node", "mpadded", [e.ParseArg(t)], { width: 0 });
        if (t === "\\llap") {
          c.default.setAttribute(r, "lspace", "-1width");
        }
        var a = e.create("node", "TeXAtom", [r]);
        e.Push(a);
      };
      A.RaiseLower = function (e, t) {
        var r = e.GetDimen(t);
        var a = e.itemFactory.create("position").setProperties({ name: e.currentCS, move: "vertical" });
        if (r.charAt(0) === "-") {
          r = r.slice(1);
          t = t.substr(1) === "raise" ? "\\lower" : "\\raise";
        }
        if (t === "\\lower") {
          a.setProperty("dh", "-" + r);
          a.setProperty("dd", "+" + r);
        } else {
          a.setProperty("dh", "+" + r);
          a.setProperty("dd", "-" + r);
        }
        e.Push(a);
      };
      A.MoveLeftRight = function (e, t) {
        var r = e.GetDimen(t);
        var a = r.charAt(0) === "-" ? r.slice(1) : "-" + r;
        if (t === "\\moveleft") {
          var n = r;
          r = a;
          a = n;
        }
        e.Push(
          e.itemFactory
            .create("position")
            .setProperties({
              name: e.currentCS,
              move: "horizontal",
              left: e.create("node", "mspace", [], { width: r }),
              right: e.create("node", "mspace", [], { width: a }),
            })
        );
      };
      A.Hskip = function (e, t) {
        var r = e.create("node", "mspace", [], { width: e.GetDimen(t) });
        e.Push(r);
      };
      A.Nonscript = function (e, t) {
        e.Push(e.itemFactory.create("nonscript"));
      };
      A.Rule = function (e, t, r) {
        var a = e.GetDimen(t),
          n = e.GetDimen(t),
          i = e.GetDimen(t);
        var o = { width: a, height: n, depth: i };
        if (r !== "blank") {
          o["mathbackground"] = e.stack.env["color"] || "black";
        }
        var s = e.create("node", "mspace", [], o);
        e.Push(s);
      };
      A.rule = function (e, t) {
        var r = e.GetBrackets(t),
          a = e.GetDimen(t),
          n = e.GetDimen(t);
        var i = e.create("node", "mspace", [], { width: a, height: n, mathbackground: e.stack.env["color"] || "black" });
        if (r) {
          i = e.create("node", "mpadded", [i], { voffset: r });
          if (r.match(/^\-/)) {
            c.default.setAttribute(i, "height", r);
            c.default.setAttribute(i, "depth", "+" + r.substr(1));
          } else {
            c.default.setAttribute(i, "height", "+" + r);
          }
        }
        e.Push(i);
      };
      A.MakeBig = function (e, t, r, a) {
        a *= S;
        var n = String(a).replace(/(\.\d\d\d).+/, "$1") + "em";
        var i = e.GetDelimiter(t, true);
        var o = e.create("token", "mo", { minsize: n, maxsize: n, fence: true, stretchy: true, symmetric: true }, i);
        var s = e.create("node", "TeXAtom", [o], { texClass: r });
        e.Push(s);
      };
      A.BuildRel = function (e, t) {
        var r = e.ParseUpTo(t, "\\over");
        var a = e.ParseArg(t);
        var n = e.create("node", "munderover");
        c.default.setChild(n, 0, a);
        c.default.setChild(n, 1, null);
        c.default.setChild(n, 2, r);
        var i = e.create("node", "TeXAtom", [n], { texClass: m.TEXCLASS.REL });
        e.Push(i);
      };
      A.HBox = function (e, t, r, a) {
        e.PushAll(d.default.internalMath(e, e.GetArgument(t), r, a));
      };
      A.FBox = function (e, t) {
        var r = d.default.internalMath(e, e.GetArgument(t));
        var a = e.create("node", "menclose", r, { notation: "box" });
        e.Push(a);
      };
      A.FrameBox = function (e, t) {
        var r = e.GetBrackets(t);
        var a = e.GetBrackets(t) || "c";
        var n = d.default.internalMath(e, e.GetArgument(t));
        if (r) {
          n = [e.create("node", "mpadded", n, { width: r, "data-align": (0, b.lookup)(a, { l: "left", r: "right" }, "center") })];
        }
        var i = e.create("node", "TeXAtom", [e.create("node", "menclose", n, { notation: "box" })], { texClass: m.TEXCLASS.ORD });
        e.Push(i);
      };
      A.Not = function (e, t) {
        e.Push(e.itemFactory.create("not"));
      };
      A.Dots = function (e, t) {
        var r = c.default.createEntity("2026");
        var a = c.default.createEntity("22EF");
        var n = e.create("token", "mo", { stretchy: false }, r);
        var i = e.create("token", "mo", { stretchy: false }, a);
        e.Push(e.itemFactory.create("dots").setProperties({ ldots: n, cdots: i }));
      };
      A.Matrix = function (e, t, r, a, n, i, o, s, l, u) {
        var c = e.GetNext();
        if (c === "") {
          throw new f.default("MissingArgFor", "Missing argument for %1", e.currentCS);
        }
        if (c === "{") {
          e.i++;
        } else {
          e.string = c + "}" + e.string.slice(e.i + 1);
          e.i = 0;
        }
        var p = e.itemFactory.create("array").setProperty("requireClose", true);
        p.arraydef = { rowspacing: o || "4pt", columnspacing: i || "1em" };
        if (l) {
          p.setProperty("isCases", true);
        }
        if (u) {
          p.setProperty("isNumbered", true);
          p.arraydef.side = u;
        }
        if (r || a) {
          p.setProperty("open", r);
          p.setProperty("close", a);
        }
        if (s === "D") {
          p.arraydef.displaystyle = true;
        }
        if (n != null) {
          p.arraydef.columnalign = n;
        }
        e.Push(p);
      };
      A.Entry = function (e, t) {
        e.Push(e.itemFactory.create("cell").setProperties({ isEntry: true, name: t }));
        var r = e.stack.Top();
        var a = r.getProperty("casesEnv");
        var n = r.getProperty("isCases");
        if (!n && !a) return;
        var i = e.string;
        var o = 0,
          s = -1,
          l = e.i,
          u = i.length;
        var c = a ? new RegExp("^\\\\end\\s*\\{".concat(a.replace(/\*/, "\\*"), "\\}")) : null;
        while (l < u) {
          var p = i.charAt(l);
          if (p === "{") {
            o++;
            l++;
          } else if (p === "}") {
            if (o === 0) {
              u = 0;
            } else {
              o--;
              if (o === 0 && s < 0) {
                s = l - e.i;
              }
              l++;
            }
          } else if (p === "&" && o === 0) {
            throw new f.default("ExtraAlignTab", "Extra alignment tab in \\cases text");
          } else if (p === "\\") {
            var h = i.substr(l);
            if (h.match(/^((\\cr)[^a-zA-Z]|\\\\)/) || (c && h.match(c))) {
              u = 0;
            } else {
              l += 2;
            }
          } else {
            l++;
          }
        }
        var m = i.substr(e.i, l - e.i);
        if (!m.match(/^\s*\\text[^a-zA-Z]/) || s !== m.replace(/\s+$/, "").length - 1) {
          var v = d.default.internalMath(e, d.default.trimSpaces(m), 0);
          e.PushAll(v);
          e.i = l;
        }
      };
      A.Cr = function (e, t) {
        e.Push(e.itemFactory.create("cell").setProperties({ isCR: true, name: t }));
      };
      A.CrLaTeX = function (e, t, r) {
        if (r === void 0) {
          r = false;
        }
        var a;
        if (!r) {
          if (e.string.charAt(e.i) === "*") {
            e.i++;
          }
          if (e.string.charAt(e.i) === "[") {
            var n = e.GetBrackets(t, "");
            var i = s(d.default.matchDimen(n), 2),
              o = i[0],
              l = i[1];
            if (n && !o) {
              throw new f.default("BracketMustBeDimension", "Bracket argument to %1 must be a dimension", e.currentCS);
            }
            a = o + l;
          }
        }
        e.Push(e.itemFactory.create("cell").setProperties({ isCR: true, name: t, linebreak: true }));
        var c = e.stack.Top();
        var p;
        if (c instanceof u.ArrayItem) {
          if (a) {
            c.addRowSpacing(a);
          }
        } else {
          if (a) {
            p = e.create("node", "mspace", [], { depth: a });
            e.Push(p);
          }
          p = e.create("node", "mspace", [], { linebreak: h.TexConstant.LineBreak.NEWLINE });
          e.Push(p);
        }
      };
      A.HLine = function (e, t, r) {
        if (r == null) {
          r = "solid";
        }
        var a = e.stack.Top();
        if (!(a instanceof u.ArrayItem) || a.Size()) {
          throw new f.default("Misplaced", "Misplaced %1", e.currentCS);
        }
        if (!a.table.length) {
          a.frame.push("top");
        } else {
          var n = a.arraydef["rowlines"] ? a.arraydef["rowlines"].split(/ /) : [];
          while (n.length < a.table.length) {
            n.push("none");
          }
          n[a.table.length - 1] = r;
          a.arraydef["rowlines"] = n.join(" ");
        }
      };
      A.HFill = function (e, t) {
        var r = e.stack.Top();
        if (r instanceof u.ArrayItem) {
          r.hfill.push(r.Size());
        } else {
          throw new f.default("UnsupportedHFill", "Unsupported use of %1", e.currentCS);
        }
      };
      A.BeginEnd = function (e, t) {
        var r = e.GetArgument(t);
        if (r.match(/\\/i)) {
          throw new f.default("InvalidEnv", "Invalid environment name '%1'", r);
        }
        var a = e.configuration.handlers.get("environment").lookup(r);
        if (a && t === "\\end") {
          if (!a.args[0]) {
            var n = e.itemFactory.create("end").setProperty("name", r);
            e.Push(n);
            return;
          }
          e.stack.env["closing"] = r;
        }
        d.default.checkMaxMacros(e, false);
        e.parse("environment", [e, r]);
      };
      A.Array = function (e, t, r, a, n, i, o, s, l) {
        if (!n) {
          n = e.GetArgument("\\begin{" + t.getName() + "}");
        }
        var u = ("c" + n).replace(/[^clr|:]/g, "").replace(/[^|:]([|:])+/g, "$1");
        n = n
          .replace(/[^clr]/g, "")
          .split("")
          .join(" ");
        n = n.replace(/l/g, "left").replace(/r/g, "right").replace(/c/g, "center");
        var c = e.itemFactory.create("array");
        c.arraydef = { columnalign: n, columnspacing: i || "1em", rowspacing: o || "4pt" };
        if (u.match(/[|:]/)) {
          if (u.charAt(0).match(/[|:]/)) {
            c.frame.push("left");
            c.dashed = u.charAt(0) === ":";
          }
          if (u.charAt(u.length - 1).match(/[|:]/)) {
            c.frame.push("right");
          }
          u = u.substr(1, u.length - 2);
          c.arraydef.columnlines = u
            .split("")
            .join(" ")
            .replace(/[^|: ]/g, "none")
            .replace(/\|/g, "solid")
            .replace(/:/g, "dashed");
        }
        if (r) {
          c.setProperty("open", e.convertDelimiter(r));
        }
        if (a) {
          c.setProperty("close", e.convertDelimiter(a));
        }
        if ((s || "").charAt(1) === "'") {
          c.arraydef["data-cramped"] = true;
          s = s.charAt(0);
        }
        if (s === "D") {
          c.arraydef["displaystyle"] = true;
        } else if (s) {
          c.arraydef["displaystyle"] = false;
        }
        if (s === "S") {
          c.arraydef["scriptlevel"] = 1;
        }
        if (l) {
          c.arraydef["useHeight"] = false;
        }
        e.Push(t);
        return c;
      };
      A.AlignedArray = function (e, t) {
        var r = e.GetBrackets("\\begin{" + t.getName() + "}");
        var a = A.Array(e, t);
        return d.default.setArrayAlign(a, r);
      };
      A.Equation = function (e, t, r) {
        e.Push(t);
        d.default.checkEqnEnv(e);
        return e.itemFactory.create("equation", r).setProperty("name", t.getName());
      };
      A.EqnArray = function (e, t, r, a, n, i) {
        e.Push(t);
        if (a) {
          d.default.checkEqnEnv(e);
        }
        n = n
          .replace(/[^clr]/g, "")
          .split("")
          .join(" ");
        n = n.replace(/l/g, "left").replace(/r/g, "right").replace(/c/g, "center");
        var o = e.itemFactory.create("eqnarray", t.getName(), r, a, e.stack.global);
        o.arraydef = {
          displaystyle: true,
          columnalign: n,
          columnspacing: i || "1em",
          rowspacing: "3pt",
          side: e.options["tagSide"],
          minlabelspacing: e.options["tagIndent"],
        };
        return o;
      };
      A.HandleNoTag = function (e, t) {
        e.tags.notag();
      };
      A.HandleLabel = function (e, t) {
        var r = e.GetArgument(t);
        if (r === "") {
          return;
        }
        if (!e.tags.refUpdate) {
          if (e.tags.label) {
            throw new f.default("MultipleCommand", "Multiple %1", e.currentCS);
          }
          e.tags.label = r;
          if ((e.tags.allLabels[r] || e.tags.labels[r]) && !e.options["ignoreDuplicateLabels"]) {
            throw new f.default("MultipleLabel", "Label '%1' multiply defined", r);
          }
          e.tags.labels[r] = new v.Label();
        }
      };
      A.HandleRef = function (e, t, r) {
        var a = e.GetArgument(t);
        var n = e.tags.allLabels[a] || e.tags.labels[a];
        if (!n) {
          if (!e.tags.refUpdate) {
            e.tags.redo = true;
          }
          n = new v.Label();
        }
        var i = n.tag;
        if (r) {
          i = e.tags.formatTag(i);
        }
        var o = e.create("node", "mrow", d.default.internalMath(e, i), { href: e.tags.formatUrl(n.id, e.options.baseURL), class: "MathJax_ref" });
        e.Push(o);
      };
      A.Macro = function (e, t, r, a, n) {
        if (a) {
          var i = [];
          if (n != null) {
            var o = e.GetBrackets(t);
            i.push(o == null ? n : o);
          }
          for (var s = i.length; s < a; s++) {
            i.push(e.GetArgument(t));
          }
          r = d.default.substituteArgs(e, i, r);
        }
        e.string = d.default.addArgs(e, r, e.string.slice(e.i));
        e.i = 0;
        d.default.checkMaxMacros(e);
      };
      A.MathChoice = function (e, t) {
        var r = e.ParseArg(t);
        var a = e.ParseArg(t);
        var n = e.ParseArg(t);
        var i = e.ParseArg(t);
        e.Push(e.create("node", "MathChoice", [r, a, n, i]));
      };
      t["default"] = A;
    },
    77130: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: true });
      t.px = t.emRounded = t.em = t.percent = t.length2em = t.MATHSPACE = t.RELUNITS = t.UNITS = t.BIGDIMEN = void 0;
      t.BIGDIMEN = 1e6;
      t.UNITS = { px: 1, in: 96, cm: 96 / 2.54, mm: 96 / 25.4 };
      t.RELUNITS = { em: 1, ex: 0.431, pt: 1 / 10, pc: 12 / 10, mu: 1 / 18 };
      t.MATHSPACE = {
        veryverythinmathspace: 1 / 18,
        verythinmathspace: 2 / 18,
        thinmathspace: 3 / 18,
        mediummathspace: 4 / 18,
        thickmathspace: 5 / 18,
        verythickmathspace: 6 / 18,
        veryverythickmathspace: 7 / 18,
        negativeveryverythinmathspace: -1 / 18,
        negativeverythinmathspace: -2 / 18,
        negativethinmathspace: -3 / 18,
        negativemediummathspace: -4 / 18,
        negativethickmathspace: -5 / 18,
        negativeverythickmathspace: -6 / 18,
        negativeveryverythickmathspace: -7 / 18,
        thin: 0.04,
        medium: 0.06,
        thick: 0.1,
        normal: 1,
        big: 2,
        small: 1 / Math.sqrt(2),
        infinity: t.BIGDIMEN,
      };
      function r(e, r, a, n) {
        if (r === void 0) {
          r = 0;
        }
        if (a === void 0) {
          a = 1;
        }
        if (n === void 0) {
          n = 16;
        }
        if (typeof e !== "string") {
          e = String(e);
        }
        if (e === "" || e == null) {
          return r;
        }
        if (t.MATHSPACE[e]) {
          return t.MATHSPACE[e];
        }
        var i = e.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/);
        if (!i) {
          return r;
        }
        var o = parseFloat(i[1] || "1"),
          s = i[2];
        if (t.UNITS.hasOwnProperty(s)) {
          return (o * t.UNITS[s]) / n / a;
        }
        if (t.RELUNITS.hasOwnProperty(s)) {
          return o * t.RELUNITS[s];
        }
        if (s === "%") {
          return (o / 100) * r;
        }
        return o * r;
      }
      t.length2em = r;
      function a(e) {
        return (100 * e).toFixed(1).replace(/\.?0+$/, "") + "%";
      }
      t.percent = a;
      function n(e) {
        if (Math.abs(e) < 0.001) return "0";
        return e.toFixed(3).replace(/\.?0+$/, "") + "em";
      }
      t.em = n;
      function i(e, t) {
        if (t === void 0) {
          t = 16;
        }
        e = (Math.round(e * t) + 0.05) / t;
        if (Math.abs(e) < 0.001) return "0em";
        return e.toFixed(3).replace(/\.?0+$/, "") + "em";
      }
      t.emRounded = i;
      function o(e, r, a) {
        if (r === void 0) {
          r = -t.BIGDIMEN;
        }
        if (a === void 0) {
          a = 16;
        }
        e *= a;
        if (r && e < r) e = r;
        if (Math.abs(e) < 0.1) return "0";
        return e.toFixed(1).replace(/\.0$/, "") + "px";
      }
      t.px = o;
    },
  },
]);
