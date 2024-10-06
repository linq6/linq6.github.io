"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [3871, 6059],
  {
    7013: function (t, e) {
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
      e.Attributes = e.INHERIT = void 0;
      e.INHERIT = "_inherit_";
      var i = (function () {
        function t(t, e) {
          this.global = e;
          this.defaults = Object.create(e);
          this.inherited = Object.create(this.defaults);
          this.attributes = Object.create(this.inherited);
          Object.assign(this.defaults, t);
        }
        t.prototype.set = function (t, e) {
          this.attributes[t] = e;
        };
        t.prototype.setList = function (t) {
          Object.assign(this.attributes, t);
        };
        t.prototype.get = function (t) {
          var r = this.attributes[t];
          if (r === e.INHERIT) {
            r = this.global[t];
          }
          return r;
        };
        t.prototype.getExplicit = function (t) {
          if (!this.attributes.hasOwnProperty(t)) {
            return undefined;
          }
          return this.attributes[t];
        };
        t.prototype.getList = function () {
          var t, e;
          var i = [];
          for (var n = 0; n < arguments.length; n++) {
            i[n] = arguments[n];
          }
          var O = {};
          try {
            for (var o = r(i), E = o.next(); !E.done; E = o.next()) {
              var s = E.value;
              O[s] = this.get(s);
            }
          } catch (a) {
            t = { error: a };
          } finally {
            try {
              if (E && !E.done && (e = o.return)) e.call(o);
            } finally {
              if (t) throw t.error;
            }
          }
          return O;
        };
        t.prototype.setInherited = function (t, e) {
          this.inherited[t] = e;
        };
        t.prototype.getInherited = function (t) {
          return this.inherited[t];
        };
        t.prototype.getDefault = function (t) {
          return this.defaults[t];
        };
        t.prototype.isSet = function (t) {
          return this.attributes.hasOwnProperty(t) || this.inherited.hasOwnProperty(t);
        };
        t.prototype.hasDefault = function (t) {
          return t in this.defaults;
        };
        t.prototype.getExplicitNames = function () {
          return Object.keys(this.attributes);
        };
        t.prototype.getInheritedNames = function () {
          return Object.keys(this.inherited);
        };
        t.prototype.getDefaultNames = function () {
          return Object.keys(this.defaults);
        };
        t.prototype.getGlobalNames = function () {
          return Object.keys(this.global);
        };
        t.prototype.getAllAttributes = function () {
          return this.attributes;
        };
        t.prototype.getAllInherited = function () {
          return this.inherited;
        };
        t.prototype.getAllDefaults = function () {
          return this.defaults;
        };
        t.prototype.getAllGlobals = function () {
          return this.global;
        };
        return t;
      })();
      e.Attributes = i;
    },
    18426: function (t, e, r) {
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
      var O =
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
            O = [],
            o;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) O.push(n.value);
          } catch (E) {
            o = { error: E };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return O;
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.XMLNode =
        e.TextNode =
        e.AbstractMmlEmptyNode =
        e.AbstractMmlBaseNode =
        e.AbstractMmlLayoutNode =
        e.AbstractMmlTokenNode =
        e.AbstractMmlNode =
        e.indentAttributes =
        e.TEXCLASSNAMES =
        e.TEXCLASS =
          void 0;
      var E = r(7013);
      var s = r(62335);
      e.TEXCLASS = { ORD: 0, OP: 1, BIN: 2, REL: 3, OPEN: 4, CLOSE: 5, PUNCT: 6, INNER: 7, VCENTER: 8, NONE: -1 };
      e.TEXCLASSNAMES = ["ORD", "OP", "BIN", "REL", "OPEN", "CLOSE", "PUNCT", "INNER", "VCENTER"];
      var a = ["", "thinmathspace", "mediummathspace", "thickmathspace"];
      var M = [
        [0, -1, 2, 3, 0, 0, 0, 1],
        [-1, -1, 0, 3, 0, 0, 0, 1],
        [2, 2, 0, 0, 2, 0, 0, 2],
        [3, 3, 0, 0, 3, 0, 0, 3],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, -1, 2, 3, 0, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1],
        [1, -1, 2, 3, 1, 0, 1, 1],
      ];
      e.indentAttributes = ["indentalign", "indentalignfirst", "indentshift", "indentshiftfirst"];
      var l = (function (t) {
        i(r, t);
        function r(e, r, i) {
          if (r === void 0) {
            r = {};
          }
          if (i === void 0) {
            i = [];
          }
          var n = t.call(this, e) || this;
          n.prevClass = null;
          n.prevLevel = null;
          n.texclass = null;
          if (n.arity < 0) {
            n.childNodes = [e.create("inferredMrow")];
            n.childNodes[0].parent = n;
          }
          n.setChildren(i);
          n.attributes = new E.Attributes(e.getNodeClass(n.kind).defaults, e.getNodeClass("math").defaults);
          n.attributes.setList(r);
          return n;
        }
        r.prototype.copy = function (t) {
          var e, r, i, o;
          if (t === void 0) {
            t = false;
          }
          var E = this.factory.create(this.kind);
          E.properties = n({}, this.properties);
          if (this.attributes) {
            var s = this.attributes.getAllAttributes();
            try {
              for (var a = O(Object.keys(s)), M = a.next(); !M.done; M = a.next()) {
                var l = M.value;
                if (l !== "id" || t) {
                  E.attributes.set(l, s[l]);
                }
              }
            } catch (R) {
              e = { error: R };
            } finally {
              try {
                if (M && !M.done && (r = a.return)) r.call(a);
              } finally {
                if (e) throw e.error;
              }
            }
          }
          if (this.childNodes && this.childNodes.length) {
            var u = this.childNodes;
            if (u.length === 1 && u[0].isInferred) {
              u = u[0].childNodes;
            }
            try {
              for (var c = O(u), f = c.next(); !f.done; f = c.next()) {
                var L = f.value;
                if (L) {
                  E.appendChild(L.copy());
                } else {
                  E.childNodes.push(null);
                }
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
          return E;
        };
        Object.defineProperty(r.prototype, "texClass", {
          get: function () {
            return this.texclass;
          },
          set: function (t) {
            this.texclass = t;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "isToken", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "isEmbellished", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "isSpacelike", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "linebreakContainer", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "hasNewLine", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "arity", {
          get: function () {
            return Infinity;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "isInferred", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "Parent", {
          get: function () {
            var t = this.parent;
            while (t && t.notParent) {
              t = t.Parent;
            }
            return t;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "notParent", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        r.prototype.setChildren = function (e) {
          if (this.arity < 0) {
            return this.childNodes[0].setChildren(e);
          }
          return t.prototype.setChildren.call(this, e);
        };
        r.prototype.appendChild = function (e) {
          var r, i;
          var n = this;
          if (this.arity < 0) {
            this.childNodes[0].appendChild(e);
            return e;
          }
          if (e.isInferred) {
            if (this.arity === Infinity) {
              e.childNodes.forEach(function (e) {
                return t.prototype.appendChild.call(n, e);
              });
              return e;
            }
            var o = e;
            e = this.factory.create("mrow");
            e.setChildren(o.childNodes);
            e.attributes = o.attributes;
            try {
              for (var E = O(o.getPropertyNames()), s = E.next(); !s.done; s = E.next()) {
                var a = s.value;
                e.setProperty(a, o.getProperty(a));
              }
            } catch (M) {
              r = { error: M };
            } finally {
              try {
                if (s && !s.done && (i = E.return)) i.call(E);
              } finally {
                if (r) throw r.error;
              }
            }
          }
          return t.prototype.appendChild.call(this, e);
        };
        r.prototype.replaceChild = function (e, r) {
          if (this.arity < 0) {
            this.childNodes[0].replaceChild(e, r);
            return e;
          }
          return t.prototype.replaceChild.call(this, e, r);
        };
        r.prototype.core = function () {
          return this;
        };
        r.prototype.coreMO = function () {
          return this;
        };
        r.prototype.coreIndex = function () {
          return 0;
        };
        r.prototype.childPosition = function () {
          var t, e;
          var r = this;
          var i = r.parent;
          while (i && i.notParent) {
            r = i;
            i = i.parent;
          }
          if (i) {
            var n = 0;
            try {
              for (var o = O(i.childNodes), E = o.next(); !E.done; E = o.next()) {
                var s = E.value;
                if (s === r) {
                  return n;
                }
                n++;
              }
            } catch (a) {
              t = { error: a };
            } finally {
              try {
                if (E && !E.done && (e = o.return)) e.call(o);
              } finally {
                if (t) throw t.error;
              }
            }
          }
          return null;
        };
        r.prototype.setTeXclass = function (t) {
          this.getPrevClass(t);
          return this.texClass != null ? this : t;
        };
        r.prototype.updateTeXclass = function (t) {
          if (t) {
            this.prevClass = t.prevClass;
            this.prevLevel = t.prevLevel;
            t.prevClass = t.prevLevel = null;
            this.texClass = t.texClass;
          }
        };
        r.prototype.getPrevClass = function (t) {
          if (t) {
            this.prevClass = t.texClass;
            this.prevLevel = t.attributes.get("scriptlevel");
          }
        };
        r.prototype.texSpacing = function () {
          var t = this.prevClass != null ? this.prevClass : e.TEXCLASS.NONE;
          var r = this.texClass || e.TEXCLASS.ORD;
          if (t === e.TEXCLASS.NONE || r === e.TEXCLASS.NONE) {
            return "";
          }
          if (t === e.TEXCLASS.VCENTER) {
            t = e.TEXCLASS.ORD;
          }
          if (r === e.TEXCLASS.VCENTER) {
            r = e.TEXCLASS.ORD;
          }
          var i = M[t][r];
          if ((this.prevLevel > 0 || this.attributes.get("scriptlevel") > 0) && i >= 0) {
            return "";
          }
          return a[Math.abs(i)];
        };
        r.prototype.hasSpacingAttributes = function () {
          return this.isEmbellished && this.coreMO().hasSpacingAttributes();
        };
        r.prototype.setInheritedAttributes = function (t, e, i, n) {
          var E, s;
          if (t === void 0) {
            t = {};
          }
          if (e === void 0) {
            e = false;
          }
          if (i === void 0) {
            i = 0;
          }
          if (n === void 0) {
            n = false;
          }
          var a = this.attributes.getAllDefaults();
          try {
            for (var M = O(Object.keys(t)), l = M.next(); !l.done; l = M.next()) {
              var u = l.value;
              if (a.hasOwnProperty(u) || r.alwaysInherit.hasOwnProperty(u)) {
                var c = o(t[u], 2),
                  f = c[0],
                  L = c[1];
                var R = (r.noInherit[f] || {})[this.kind] || {};
                if (!R[u]) {
                  this.attributes.setInherited(u, L);
                }
              }
            }
          } catch (C) {
            E = { error: C };
          } finally {
            try {
              if (l && !l.done && (s = M.return)) s.call(M);
            } finally {
              if (E) throw E.error;
            }
          }
          var p = this.attributes.getExplicit("displaystyle");
          if (p === undefined) {
            this.attributes.setInherited("displaystyle", e);
          }
          var h = this.attributes.getExplicit("scriptlevel");
          if (h === undefined) {
            this.attributes.setInherited("scriptlevel", i);
          }
          if (n) {
            this.setProperty("texprimestyle", n);
          }
          var N = this.arity;
          if (N >= 0 && N !== Infinity && ((N === 1 && this.childNodes.length === 0) || (N !== 1 && this.childNodes.length !== N))) {
            if (N < this.childNodes.length) {
              this.childNodes = this.childNodes.slice(0, N);
            } else {
              while (this.childNodes.length < N) {
                this.appendChild(this.factory.create("mrow"));
              }
            }
          }
          this.setChildInheritedAttributes(t, e, i, n);
        };
        r.prototype.setChildInheritedAttributes = function (t, e, r, i) {
          var n, o;
          try {
            for (var E = O(this.childNodes), s = E.next(); !s.done; s = E.next()) {
              var a = s.value;
              a.setInheritedAttributes(t, e, r, i);
            }
          } catch (M) {
            n = { error: M };
          } finally {
            try {
              if (s && !s.done && (o = E.return)) o.call(E);
            } finally {
              if (n) throw n.error;
            }
          }
        };
        r.prototype.addInheritedAttributes = function (t, e) {
          var r, i;
          var o = n({}, t);
          try {
            for (var E = O(Object.keys(e)), s = E.next(); !s.done; s = E.next()) {
              var a = s.value;
              if (a !== "displaystyle" && a !== "scriptlevel" && a !== "style") {
                o[a] = [this.kind, e[a]];
              }
            }
          } catch (M) {
            r = { error: M };
          } finally {
            try {
              if (s && !s.done && (i = E.return)) i.call(E);
            } finally {
              if (r) throw r.error;
            }
          }
          return o;
        };
        r.prototype.inheritAttributesFrom = function (t) {
          var e = t.attributes;
          var r = e.get("displaystyle");
          var i = e.get("scriptlevel");
          var n = !e.isSet("mathsize") ? {} : { mathsize: ["math", e.get("mathsize")] };
          var O = t.getProperty("texprimestyle") || false;
          this.setInheritedAttributes(n, r, i, O);
        };
        r.prototype.verifyTree = function (t) {
          if (t === void 0) {
            t = null;
          }
          if (t === null) {
            return;
          }
          this.verifyAttributes(t);
          var e = this.arity;
          if (t["checkArity"]) {
            if (e >= 0 && e !== Infinity && ((e === 1 && this.childNodes.length === 0) || (e !== 1 && this.childNodes.length !== e))) {
              this.mError('Wrong number of children for "' + this.kind + '" node', t, true);
            }
          }
          this.verifyChildren(t);
        };
        r.prototype.verifyAttributes = function (t) {
          var e, r;
          if (t["checkAttributes"]) {
            var i = this.attributes;
            var n = [];
            try {
              for (var o = O(i.getExplicitNames()), E = o.next(); !E.done; E = o.next()) {
                var s = E.value;
                if (s.substr(0, 5) !== "data-" && i.getDefault(s) === undefined && !s.match(/^(?:class|style|id|(?:xlink:)?href)$/)) {
                  n.push(s);
                }
              }
            } catch (a) {
              e = { error: a };
            } finally {
              try {
                if (E && !E.done && (r = o.return)) r.call(o);
              } finally {
                if (e) throw e.error;
              }
            }
            if (n.length) {
              this.mError("Unknown attributes for " + this.kind + " node: " + n.join(", "), t);
            }
          }
        };
        r.prototype.verifyChildren = function (t) {
          var e, r;
          try {
            for (var i = O(this.childNodes), n = i.next(); !n.done; n = i.next()) {
              var o = n.value;
              o.verifyTree(t);
            }
          } catch (E) {
            e = { error: E };
          } finally {
            try {
              if (n && !n.done && (r = i.return)) r.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
        };
        r.prototype.mError = function (t, e, r) {
          if (r === void 0) {
            r = false;
          }
          if (this.parent && this.parent.isKind("merror")) {
            return null;
          }
          var i = this.factory.create("merror");
          i.attributes.set("data-mjx-message", t);
          if (e["fullErrors"] || r) {
            var n = this.factory.create("mtext");
            var O = this.factory.create("text");
            O.setText(e["fullErrors"] ? t : this.kind);
            n.appendChild(O);
            i.appendChild(n);
            this.parent.replaceChild(i, this);
          } else {
            this.parent.replaceChild(i, this);
            i.appendChild(this);
          }
          return i;
        };
        r.defaults = { mathbackground: E.INHERIT, mathcolor: E.INHERIT, mathsize: E.INHERIT, dir: E.INHERIT };
        r.noInherit = {
          mstyle: {
            mpadded: { width: true, height: true, depth: true, lspace: true, voffset: true },
            mtable: { width: true, height: true, depth: true, align: true },
          },
          maligngroup: { mrow: { groupalign: true }, mtable: { groupalign: true } },
        };
        r.alwaysInherit = { scriptminsize: true, scriptsizemultiplier: true };
        r.verifyDefaults = { checkArity: true, checkAttributes: false, fullErrors: false, fixMmultiscripts: true, fixMtables: true };
        return r;
      })(s.AbstractNode);
      e.AbstractMmlNode = l;
      var u = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "isToken", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.getText = function () {
          var t, e;
          var r = "";
          try {
            for (var i = O(this.childNodes), n = i.next(); !n.done; n = i.next()) {
              var o = n.value;
              if (o instanceof R) {
                r += o.getText();
              }
            }
          } catch (E) {
            t = { error: E };
          } finally {
            try {
              if (n && !n.done && (e = i.return)) e.call(i);
            } finally {
              if (t) throw t.error;
            }
          }
          return r;
        };
        e.prototype.setChildInheritedAttributes = function (t, e, r, i) {
          var n, o;
          try {
            for (var E = O(this.childNodes), s = E.next(); !s.done; s = E.next()) {
              var a = s.value;
              if (a instanceof l) {
                a.setInheritedAttributes(t, e, r, i);
              }
            }
          } catch (M) {
            n = { error: M };
          } finally {
            try {
              if (s && !s.done && (o = E.return)) o.call(E);
            } finally {
              if (n) throw n.error;
            }
          }
        };
        e.prototype.walkTree = function (t, e) {
          var r, i;
          t(this, e);
          try {
            for (var n = O(this.childNodes), o = n.next(); !o.done; o = n.next()) {
              var E = o.value;
              if (E instanceof l) {
                E.walkTree(t, e);
              }
            }
          } catch (s) {
            r = { error: s };
          } finally {
            try {
              if (o && !o.done && (i = n.return)) i.call(n);
            } finally {
              if (r) throw r.error;
            }
          }
          return e;
        };
        e.defaults = n(n({}, l.defaults), { mathvariant: "normal", mathsize: E.INHERIT });
        return e;
      })(l);
      e.AbstractMmlTokenNode = u;
      var c = (function (t) {
        i(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "isSpacelike", {
          get: function () {
            return this.childNodes[0].isSpacelike;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "isEmbellished", {
          get: function () {
            return this.childNodes[0].isEmbellished;
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
        e.prototype.core = function () {
          return this.childNodes[0];
        };
        e.prototype.coreMO = function () {
          return this.childNodes[0].coreMO();
        };
        e.prototype.setTeXclass = function (t) {
          t = this.childNodes[0].setTeXclass(t);
          this.updateTeXclass(this.childNodes[0]);
          return t;
        };
        e.defaults = l.defaults;
        return e;
      })(l);
      e.AbstractMmlLayoutNode = c;
      var f = (function (t) {
        i(r, t);
        function r() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(r.prototype, "isEmbellished", {
          get: function () {
            return this.childNodes[0].isEmbellished;
          },
          enumerable: false,
          configurable: true,
        });
        r.prototype.core = function () {
          return this.childNodes[0];
        };
        r.prototype.coreMO = function () {
          return this.childNodes[0].coreMO();
        };
        r.prototype.setTeXclass = function (t) {
          var r, i;
          this.getPrevClass(t);
          this.texClass = e.TEXCLASS.ORD;
          var n = this.childNodes[0];
          if (n) {
            if (this.isEmbellished || n.isKind("mi")) {
              t = n.setTeXclass(t);
              this.updateTeXclass(this.core());
            } else {
              n.setTeXclass(null);
              t = this;
            }
          } else {
            t = this;
          }
          try {
            for (var o = O(this.childNodes.slice(1)), E = o.next(); !E.done; E = o.next()) {
              var s = E.value;
              if (s) {
                s.setTeXclass(null);
              }
            }
          } catch (a) {
            r = { error: a };
          } finally {
            try {
              if (E && !E.done && (i = o.return)) i.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
          return t;
        };
        r.defaults = l.defaults;
        return r;
      })(l);
      e.AbstractMmlBaseNode = f;
      var L = (function (t) {
        i(r, t);
        function r() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(r.prototype, "isToken", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "isEmbellished", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "isSpacelike", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "linebreakContainer", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "hasNewLine", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "arity", {
          get: function () {
            return 0;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "isInferred", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "notParent", {
          get: function () {
            return false;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "Parent", {
          get: function () {
            return this.parent;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "texClass", {
          get: function () {
            return e.TEXCLASS.NONE;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "prevClass", {
          get: function () {
            return e.TEXCLASS.NONE;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(r.prototype, "prevLevel", {
          get: function () {
            return 0;
          },
          enumerable: false,
          configurable: true,
        });
        r.prototype.hasSpacingAttributes = function () {
          return false;
        };
        Object.defineProperty(r.prototype, "attributes", {
          get: function () {
            return null;
          },
          enumerable: false,
          configurable: true,
        });
        r.prototype.core = function () {
          return this;
        };
        r.prototype.coreMO = function () {
          return this;
        };
        r.prototype.coreIndex = function () {
          return 0;
        };
        r.prototype.childPosition = function () {
          return 0;
        };
        r.prototype.setTeXclass = function (t) {
          return t;
        };
        r.prototype.texSpacing = function () {
          return "";
        };
        r.prototype.setInheritedAttributes = function (t, e, r, i) {};
        r.prototype.inheritAttributesFrom = function (t) {};
        r.prototype.verifyTree = function (t) {};
        r.prototype.mError = function (t, e, r) {
          if (r === void 0) {
            r = false;
          }
          return null;
        };
        return r;
      })(s.AbstractEmptyNode);
      e.AbstractMmlEmptyNode = L;
      var R = (function (t) {
        i(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.text = "";
          return e;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "text";
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.getText = function () {
          return this.text;
        };
        e.prototype.setText = function (t) {
          this.text = t;
          return this;
        };
        e.prototype.copy = function () {
          return this.factory.create(this.kind).setText(this.getText());
        };
        e.prototype.toString = function () {
          return this.text;
        };
        return e;
      })(L);
      e.TextNode = R;
      var p = (function (t) {
        i(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.xml = null;
          e.adaptor = null;
          return e;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "XML";
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.getXML = function () {
          return this.xml;
        };
        e.prototype.setXML = function (t, e) {
          if (e === void 0) {
            e = null;
          }
          this.xml = t;
          this.adaptor = e;
          return this;
        };
        e.prototype.getSerializedXML = function () {
          return this.adaptor.serializeXML(this.xml);
        };
        e.prototype.copy = function () {
          return this.factory.create(this.kind).setXML(this.adaptor.clone(this.xml));
        };
        e.prototype.toString = function () {
          return "XML data";
        };
        return e;
      })(L);
      e.XMLNode = p;
    },
    5213: function (t, e, r) {
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
      var O =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            O = [],
            o;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) O.push(n.value);
          } catch (E) {
            o = { error: E };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return O;
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
      e.MmlMo = void 0;
      var E = r(18426);
      var s = r(64432);
      var a = r(33353);
      var M = (function (t) {
        i(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e._texClass = null;
          e.lspace = 5 / 18;
          e.rspace = 5 / 18;
          return e;
        }
        Object.defineProperty(e.prototype, "texClass", {
          get: function () {
            if (this._texClass === null) {
              var t = this.getText();
              var e = O(this.handleExplicitForm(this.getForms()), 3),
                r = e[0],
                i = e[1],
                n = e[2];
              var o = this.constructor.OPTABLE;
              var s = o[r][t] || o[i][t] || o[n][t];
              return s ? s[2] : E.TEXCLASS.REL;
            }
            return this._texClass;
          },
          set: function (t) {
            this._texClass = t;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mo";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "isEmbellished", {
          get: function () {
            return true;
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "hasNewLine", {
          get: function () {
            return this.attributes.get("linebreak") === "newline";
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.coreParent = function () {
          var t = this;
          var e = this;
          var r = this.factory.getNodeClass("math");
          while (e && e.isEmbellished && e.coreMO() === this && !(e instanceof r)) {
            t = e;
            e = e.parent;
          }
          return t;
        };
        e.prototype.coreText = function (t) {
          if (!t) {
            return "";
          }
          if (t.isEmbellished) {
            return t.coreMO().getText();
          }
          while (
            (((t.isKind("mrow") || (t.isKind("TeXAtom") && t.texClass !== E.TEXCLASS.VCENTER) || t.isKind("mstyle") || t.isKind("mphantom")) &&
              t.childNodes.length === 1) ||
              t.isKind("munderover")) &&
            t.childNodes[0]
          ) {
            t = t.childNodes[0];
          }
          return t.isToken ? t.getText() : "";
        };
        e.prototype.hasSpacingAttributes = function () {
          return this.attributes.isSet("lspace") || this.attributes.isSet("rspace");
        };
        Object.defineProperty(e.prototype, "isAccent", {
          get: function () {
            var t = false;
            var e = this.coreParent().parent;
            if (e) {
              var r = e.isKind("mover")
                ? e.childNodes[e.over].coreMO()
                  ? "accent"
                  : ""
                : e.isKind("munder")
                  ? e.childNodes[e.under].coreMO()
                    ? "accentunder"
                    : ""
                  : e.isKind("munderover")
                    ? this === e.childNodes[e.over].coreMO()
                      ? "accent"
                      : this === e.childNodes[e.under].coreMO()
                        ? "accentunder"
                        : ""
                    : "";
              if (r) {
                var i = e.attributes.getExplicit(r);
                t = i !== undefined ? t : this.attributes.get("accent");
              }
            }
            return t;
          },
          enumerable: false,
          configurable: true,
        });
        e.prototype.setTeXclass = function (t) {
          var e = this.attributes.getList("form", "fence"),
            r = e.form,
            i = e.fence;
          if (this.getProperty("texClass") === undefined && (this.attributes.isSet("lspace") || this.attributes.isSet("rspace"))) {
            return null;
          }
          if (i && this.texClass === E.TEXCLASS.REL) {
            if (r === "prefix") {
              this.texClass = E.TEXCLASS.OPEN;
            }
            if (r === "postfix") {
              this.texClass = E.TEXCLASS.CLOSE;
            }
          }
          return this.adjustTeXclass(t);
        };
        e.prototype.adjustTeXclass = function (t) {
          var e = this.texClass;
          var r = this.prevClass;
          if (e === E.TEXCLASS.NONE) {
            return t;
          }
          if (t) {
            if (t.getProperty("autoOP") && (e === E.TEXCLASS.BIN || e === E.TEXCLASS.REL)) {
              r = t.texClass = E.TEXCLASS.ORD;
            }
            r = this.prevClass = t.texClass || E.TEXCLASS.ORD;
            this.prevLevel = this.attributes.getInherited("scriptlevel");
          } else {
            r = this.prevClass = E.TEXCLASS.NONE;
          }
          if (
            e === E.TEXCLASS.BIN &&
            (r === E.TEXCLASS.NONE ||
              r === E.TEXCLASS.BIN ||
              r === E.TEXCLASS.OP ||
              r === E.TEXCLASS.REL ||
              r === E.TEXCLASS.OPEN ||
              r === E.TEXCLASS.PUNCT)
          ) {
            this.texClass = E.TEXCLASS.ORD;
          } else if (r === E.TEXCLASS.BIN && (e === E.TEXCLASS.REL || e === E.TEXCLASS.CLOSE || e === E.TEXCLASS.PUNCT)) {
            t.texClass = this.prevClass = E.TEXCLASS.ORD;
          } else if (e === E.TEXCLASS.BIN) {
            var i = this;
            var n = this.parent;
            while (n && n.parent && n.isEmbellished && (n.childNodes.length === 1 || (!n.isKind("mrow") && n.core() === i))) {
              i = n;
              n = n.parent;
            }
            if (n.childNodes[n.childNodes.length - 1] === i) {
              this.texClass = E.TEXCLASS.ORD;
            }
          }
          return this;
        };
        e.prototype.setInheritedAttributes = function (e, r, i, n) {
          if (e === void 0) {
            e = {};
          }
          if (r === void 0) {
            r = false;
          }
          if (i === void 0) {
            i = 0;
          }
          if (n === void 0) {
            n = false;
          }
          t.prototype.setInheritedAttributes.call(this, e, r, i, n);
          var O = this.getText();
          this.checkOperatorTable(O);
          this.checkPseudoScripts(O);
          this.checkPrimes(O);
          this.checkMathAccent(O);
        };
        e.prototype.checkOperatorTable = function (t) {
          var e, r;
          var i = O(this.handleExplicitForm(this.getForms()), 3),
            n = i[0],
            E = i[1],
            a = i[2];
          this.attributes.setInherited("form", n);
          var M = this.constructor.OPTABLE;
          var l = M[n][t] || M[E][t] || M[a][t];
          if (l) {
            if (this.getProperty("texClass") === undefined) {
              this.texClass = l[2];
            }
            try {
              for (var u = o(Object.keys(l[3] || {})), c = u.next(); !c.done; c = u.next()) {
                var f = c.value;
                this.attributes.setInherited(f, l[3][f]);
              }
            } catch (p) {
              e = { error: p };
            } finally {
              try {
                if (c && !c.done && (r = u.return)) r.call(u);
              } finally {
                if (e) throw e.error;
              }
            }
            this.lspace = (l[0] + 1) / 18;
            this.rspace = (l[1] + 1) / 18;
          } else {
            var L = (0, s.getRange)(t);
            if (L) {
              if (this.getProperty("texClass") === undefined) {
                this.texClass = L[2];
              }
              var R = this.constructor.MMLSPACING[L[2]];
              this.lspace = (R[0] + 1) / 18;
              this.rspace = (R[1] + 1) / 18;
            }
          }
        };
        e.prototype.getForms = function () {
          var t = this;
          var e = this.parent;
          var r = this.Parent;
          while (r && r.isEmbellished) {
            t = e;
            e = r.parent;
            r = r.Parent;
          }
          if (e && e.isKind("mrow") && e.nonSpaceLength() !== 1) {
            if (e.firstNonSpace() === t) {
              return ["prefix", "infix", "postfix"];
            }
            if (e.lastNonSpace() === t) {
              return ["postfix", "infix", "prefix"];
            }
          }
          return ["infix", "prefix", "postfix"];
        };
        e.prototype.handleExplicitForm = function (t) {
          if (this.attributes.isSet("form")) {
            var e = this.attributes.get("form");
            t = [e].concat(
              t.filter(function (t) {
                return t !== e;
              })
            );
          }
          return t;
        };
        e.prototype.checkPseudoScripts = function (t) {
          var e = this.constructor.pseudoScripts;
          if (!t.match(e)) return;
          var r = this.coreParent().Parent;
          var i = !r || !(r.isKind("msubsup") && !r.isKind("msub"));
          this.setProperty("pseudoscript", i);
          if (i) {
            this.attributes.setInherited("lspace", 0);
            this.attributes.setInherited("rspace", 0);
          }
        };
        e.prototype.checkPrimes = function (t) {
          var e = this.constructor.primes;
          if (!t.match(e)) return;
          var r = this.constructor.remapPrimes;
          var i = (0, a.unicodeString)(
            (0, a.unicodeChars)(t).map(function (t) {
              return r[t];
            })
          );
          this.setProperty("primes", i);
        };
        e.prototype.checkMathAccent = function (t) {
          var e = this.Parent;
          if (this.getProperty("mathaccent") !== undefined || !e || !e.isKind("munderover")) return;
          var r = e.childNodes[0];
          if (r.isEmbellished && r.coreMO() === this) return;
          var i = this.constructor.mathaccents;
          if (t.match(i)) {
            this.setProperty("mathaccent", true);
          }
        };
        e.defaults = n(n({}, E.AbstractMmlTokenNode.defaults), {
          form: "infix",
          fence: false,
          separator: false,
          lspace: "thickmathspace",
          rspace: "thickmathspace",
          stretchy: false,
          symmetric: false,
          maxsize: "infinity",
          minsize: "0em",
          largeop: false,
          movablelimits: false,
          accent: false,
          linebreak: "auto",
          lineleading: "1ex",
          linebreakstyle: "before",
          indentalign: "auto",
          indentshift: "0",
          indenttarget: "",
          indentalignfirst: "indentalign",
          indentshiftfirst: "indentshift",
          indentalignlast: "indentalign",
          indentshiftlast: "indentshift",
        });
        e.MMLSPACING = s.MMLSPACING;
        e.OPTABLE = s.OPTABLE;
        e.pseudoScripts = new RegExp(["^[\"'*`", "ª", "°", "²-´", "¹", "º", "‘-‟", "′-‷⁗", "⁰ⁱ", "⁴-ⁿ", "₀-₎", "]+$"].join(""));
        e.primes = new RegExp(["^[\"'`", "‘-‟", "]+$"].join(""));
        e.remapPrimes = {
          34: 8243,
          39: 8242,
          96: 8245,
          8216: 8245,
          8217: 8242,
          8218: 8242,
          8219: 8245,
          8220: 8246,
          8221: 8243,
          8222: 8243,
          8223: 8246,
        };
        e.mathaccents = new RegExp(["^[", "´́ˊ", "`̀ˋ", "¨̈", "~̃˜", "¯̄ˉ", "˘̆", "ˇ̌", "^̂ˆ", "→⃗", "˙̇", "˚̊", "⃛", "⃜", "]$"].join(""));
        return e;
      })(E.AbstractMmlTokenNode);
      e.MmlMo = M;
    },
    64432: function (t, e, r) {
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
      e.OPTABLE = e.MMLSPACING = e.getRange = e.RANGES = e.MO = e.OPDEF = void 0;
      var n = r(18426);
      function O(t, e, r, i) {
        if (r === void 0) {
          r = n.TEXCLASS.BIN;
        }
        if (i === void 0) {
          i = null;
        }
        return [t, e, r, i];
      }
      e.OPDEF = O;
      e.MO = {
        ORD: O(0, 0, n.TEXCLASS.ORD),
        ORD11: O(1, 1, n.TEXCLASS.ORD),
        ORD21: O(2, 1, n.TEXCLASS.ORD),
        ORD02: O(0, 2, n.TEXCLASS.ORD),
        ORD55: O(5, 5, n.TEXCLASS.ORD),
        NONE: O(0, 0, n.TEXCLASS.NONE),
        OP: O(1, 2, n.TEXCLASS.OP, { largeop: true, movablelimits: true, symmetric: true }),
        OPFIXED: O(1, 2, n.TEXCLASS.OP, { largeop: true, movablelimits: true }),
        INTEGRAL: O(0, 1, n.TEXCLASS.OP, { largeop: true, symmetric: true }),
        INTEGRAL2: O(1, 2, n.TEXCLASS.OP, { largeop: true, symmetric: true }),
        BIN3: O(3, 3, n.TEXCLASS.BIN),
        BIN4: O(4, 4, n.TEXCLASS.BIN),
        BIN01: O(0, 1, n.TEXCLASS.BIN),
        BIN5: O(5, 5, n.TEXCLASS.BIN),
        TALLBIN: O(4, 4, n.TEXCLASS.BIN, { stretchy: true }),
        BINOP: O(4, 4, n.TEXCLASS.BIN, { largeop: true, movablelimits: true }),
        REL: O(5, 5, n.TEXCLASS.REL),
        REL1: O(1, 1, n.TEXCLASS.REL, { stretchy: true }),
        REL4: O(4, 4, n.TEXCLASS.REL),
        RELSTRETCH: O(5, 5, n.TEXCLASS.REL, { stretchy: true }),
        RELACCENT: O(5, 5, n.TEXCLASS.REL, { accent: true }),
        WIDEREL: O(5, 5, n.TEXCLASS.REL, { accent: true, stretchy: true }),
        OPEN: O(0, 0, n.TEXCLASS.OPEN, { fence: true, stretchy: true, symmetric: true }),
        CLOSE: O(0, 0, n.TEXCLASS.CLOSE, { fence: true, stretchy: true, symmetric: true }),
        INNER: O(0, 0, n.TEXCLASS.INNER),
        PUNCT: O(0, 3, n.TEXCLASS.PUNCT),
        ACCENT: O(0, 0, n.TEXCLASS.ORD, { accent: true }),
        WIDEACCENT: O(0, 0, n.TEXCLASS.ORD, { accent: true, stretchy: true }),
      };
      e.RANGES = [
        [32, 127, n.TEXCLASS.REL, "mo"],
        [160, 191, n.TEXCLASS.ORD, "mo"],
        [192, 591, n.TEXCLASS.ORD, "mi"],
        [688, 879, n.TEXCLASS.ORD, "mo"],
        [880, 6688, n.TEXCLASS.ORD, "mi"],
        [6832, 6911, n.TEXCLASS.ORD, "mo"],
        [6912, 7615, n.TEXCLASS.ORD, "mi"],
        [7616, 7679, n.TEXCLASS.ORD, "mo"],
        [7680, 8191, n.TEXCLASS.ORD, "mi"],
        [8192, 8303, n.TEXCLASS.ORD, "mo"],
        [8304, 8351, n.TEXCLASS.ORD, "mo"],
        [8448, 8527, n.TEXCLASS.ORD, "mi"],
        [8528, 8591, n.TEXCLASS.ORD, "mn"],
        [8592, 8703, n.TEXCLASS.REL, "mo"],
        [8704, 8959, n.TEXCLASS.BIN, "mo"],
        [8960, 9215, n.TEXCLASS.ORD, "mo"],
        [9312, 9471, n.TEXCLASS.ORD, "mn"],
        [9472, 10223, n.TEXCLASS.ORD, "mo"],
        [10224, 10239, n.TEXCLASS.REL, "mo"],
        [10240, 10495, n.TEXCLASS.ORD, "mtext"],
        [10496, 10623, n.TEXCLASS.REL, "mo"],
        [10624, 10751, n.TEXCLASS.ORD, "mo"],
        [10752, 11007, n.TEXCLASS.BIN, "mo"],
        [11008, 11055, n.TEXCLASS.ORD, "mo"],
        [11056, 11087, n.TEXCLASS.REL, "mo"],
        [11088, 11263, n.TEXCLASS.ORD, "mo"],
        [11264, 11744, n.TEXCLASS.ORD, "mi"],
        [11776, 11903, n.TEXCLASS.ORD, "mo"],
        [11904, 12255, n.TEXCLASS.ORD, "mi", "normal"],
        [12272, 12351, n.TEXCLASS.ORD, "mo"],
        [12352, 42143, n.TEXCLASS.ORD, "mi", "normal"],
        [42192, 43055, n.TEXCLASS.ORD, "mi"],
        [43056, 43071, n.TEXCLASS.ORD, "mn"],
        [43072, 55295, n.TEXCLASS.ORD, "mi"],
        [63744, 64255, n.TEXCLASS.ORD, "mi", "normal"],
        [64256, 65023, n.TEXCLASS.ORD, "mi"],
        [65024, 65135, n.TEXCLASS.ORD, "mo"],
        [65136, 65791, n.TEXCLASS.ORD, "mi"],
        [65792, 65935, n.TEXCLASS.ORD, "mn"],
        [65936, 74751, n.TEXCLASS.ORD, "mi", "normal"],
        [74752, 74879, n.TEXCLASS.ORD, "mn"],
        [74880, 113823, n.TEXCLASS.ORD, "mi", "normal"],
        [113824, 119391, n.TEXCLASS.ORD, "mo"],
        [119648, 119679, n.TEXCLASS.ORD, "mn"],
        [119808, 120781, n.TEXCLASS.ORD, "mi"],
        [120782, 120831, n.TEXCLASS.ORD, "mn"],
        [122624, 129023, n.TEXCLASS.ORD, "mo"],
        [129024, 129279, n.TEXCLASS.REL, "mo"],
        [129280, 129535, n.TEXCLASS.ORD, "mo"],
        [131072, 195103, n.TEXCLASS.ORD, "mi", "normnal"],
      ];
      function o(t) {
        var r, n;
        var O = t.codePointAt(0);
        try {
          for (var o = i(e.RANGES), E = o.next(); !E.done; E = o.next()) {
            var s = E.value;
            if (O <= s[1]) {
              if (O >= s[0]) {
                return s;
              }
              break;
            }
          }
        } catch (a) {
          r = { error: a };
        } finally {
          try {
            if (E && !E.done && (n = o.return)) n.call(o);
          } finally {
            if (r) throw r.error;
          }
        }
        return null;
      }
      e.getRange = o;
      e.MMLSPACING = [
        [0, 0],
        [1, 2],
        [3, 3],
        [4, 4],
        [0, 0],
        [0, 0],
        [0, 3],
      ];
      e.OPTABLE = {
        prefix: {
          "(": e.MO.OPEN,
          "+": e.MO.BIN01,
          "-": e.MO.BIN01,
          "[": e.MO.OPEN,
          "{": e.MO.OPEN,
          "|": e.MO.OPEN,
          "||": [0, 0, n.TEXCLASS.BIN, { fence: true, stretchy: true, symmetric: true }],
          "|||": [0, 0, n.TEXCLASS.ORD, { fence: true, stretchy: true, symmetric: true }],
          "¬": e.MO.ORD21,
          "±": e.MO.BIN01,
          "‖": [0, 0, n.TEXCLASS.ORD, { fence: true, stretchy: true }],
          "‘": [0, 0, n.TEXCLASS.OPEN, { fence: true }],
          "“": [0, 0, n.TEXCLASS.OPEN, { fence: true }],
          ⅅ: e.MO.ORD21,
          ⅆ: O(2, 0, n.TEXCLASS.ORD),
          "∀": e.MO.ORD21,
          "∂": e.MO.ORD21,
          "∃": e.MO.ORD21,
          "∄": e.MO.ORD21,
          "∇": e.MO.ORD21,
          "∏": e.MO.OP,
          "∐": e.MO.OP,
          "∑": e.MO.OP,
          "−": e.MO.BIN01,
          "∓": e.MO.BIN01,
          "√": [1, 1, n.TEXCLASS.ORD, { stretchy: true }],
          "∛": e.MO.ORD11,
          "∜": e.MO.ORD11,
          "∠": e.MO.ORD,
          "∡": e.MO.ORD,
          "∢": e.MO.ORD,
          "∫": e.MO.INTEGRAL,
          "∬": e.MO.INTEGRAL,
          "∭": e.MO.INTEGRAL,
          "∮": e.MO.INTEGRAL,
          "∯": e.MO.INTEGRAL,
          "∰": e.MO.INTEGRAL,
          "∱": e.MO.INTEGRAL,
          "∲": e.MO.INTEGRAL,
          "∳": e.MO.INTEGRAL,
          "⋀": e.MO.OP,
          "⋁": e.MO.OP,
          "⋂": e.MO.OP,
          "⋃": e.MO.OP,
          "⌈": e.MO.OPEN,
          "⌊": e.MO.OPEN,
          "〈": e.MO.OPEN,
          "❲": e.MO.OPEN,
          "⟦": e.MO.OPEN,
          "⟨": e.MO.OPEN,
          "⟪": e.MO.OPEN,
          "⟬": e.MO.OPEN,
          "⟮": e.MO.OPEN,
          "⦀": [0, 0, n.TEXCLASS.ORD, { fence: true, stretchy: true }],
          "⦃": e.MO.OPEN,
          "⦅": e.MO.OPEN,
          "⦇": e.MO.OPEN,
          "⦉": e.MO.OPEN,
          "⦋": e.MO.OPEN,
          "⦍": e.MO.OPEN,
          "⦏": e.MO.OPEN,
          "⦑": e.MO.OPEN,
          "⦓": e.MO.OPEN,
          "⦕": e.MO.OPEN,
          "⦗": e.MO.OPEN,
          "⧼": e.MO.OPEN,
          "⨀": e.MO.OP,
          "⨁": e.MO.OP,
          "⨂": e.MO.OP,
          "⨃": e.MO.OP,
          "⨄": e.MO.OP,
          "⨅": e.MO.OP,
          "⨆": e.MO.OP,
          "⨇": e.MO.OP,
          "⨈": e.MO.OP,
          "⨉": e.MO.OP,
          "⨊": e.MO.OP,
          "⨋": e.MO.INTEGRAL2,
          "⨌": e.MO.INTEGRAL,
          "⨍": e.MO.INTEGRAL2,
          "⨎": e.MO.INTEGRAL2,
          "⨏": e.MO.INTEGRAL2,
          "⨐": e.MO.OP,
          "⨑": e.MO.OP,
          "⨒": e.MO.OP,
          "⨓": e.MO.OP,
          "⨔": e.MO.OP,
          "⨕": e.MO.INTEGRAL2,
          "⨖": e.MO.INTEGRAL2,
          "⨗": e.MO.INTEGRAL2,
          "⨘": e.MO.INTEGRAL2,
          "⨙": e.MO.INTEGRAL2,
          "⨚": e.MO.INTEGRAL2,
          "⨛": e.MO.INTEGRAL2,
          "⨜": e.MO.INTEGRAL2,
          "⫼": e.MO.OP,
          "⫿": e.MO.OP,
        },
        postfix: {
          "!!": O(1, 0),
          "!": [1, 0, n.TEXCLASS.CLOSE, null],
          '"': e.MO.ACCENT,
          "&": e.MO.ORD,
          ")": e.MO.CLOSE,
          "++": O(0, 0),
          "--": O(0, 0),
          "..": O(0, 0),
          "...": e.MO.ORD,
          "'": e.MO.ACCENT,
          "]": e.MO.CLOSE,
          "^": e.MO.WIDEACCENT,
          _: e.MO.WIDEACCENT,
          "`": e.MO.ACCENT,
          "|": e.MO.CLOSE,
          "}": e.MO.CLOSE,
          "~": e.MO.WIDEACCENT,
          "||": [0, 0, n.TEXCLASS.BIN, { fence: true, stretchy: true, symmetric: true }],
          "|||": [0, 0, n.TEXCLASS.ORD, { fence: true, stretchy: true, symmetric: true }],
          "¨": e.MO.ACCENT,
          ª: e.MO.ACCENT,
          "¯": e.MO.WIDEACCENT,
          "°": e.MO.ORD,
          "²": e.MO.ACCENT,
          "³": e.MO.ACCENT,
          "´": e.MO.ACCENT,
          "¸": e.MO.ACCENT,
          "¹": e.MO.ACCENT,
          º: e.MO.ACCENT,
          ˆ: e.MO.WIDEACCENT,
          ˇ: e.MO.WIDEACCENT,
          ˉ: e.MO.WIDEACCENT,
          ˊ: e.MO.ACCENT,
          ˋ: e.MO.ACCENT,
          ˍ: e.MO.WIDEACCENT,
          "˘": e.MO.ACCENT,
          "˙": e.MO.ACCENT,
          "˚": e.MO.ACCENT,
          "˜": e.MO.WIDEACCENT,
          "˝": e.MO.ACCENT,
          "˷": e.MO.WIDEACCENT,
          "̂": e.MO.WIDEACCENT,
          "̑": e.MO.ACCENT,
          "϶": e.MO.REL,
          "‖": [0, 0, n.TEXCLASS.ORD, { fence: true, stretchy: true }],
          "’": [0, 0, n.TEXCLASS.CLOSE, { fence: true }],
          "‚": e.MO.ACCENT,
          "‛": e.MO.ACCENT,
          "”": [0, 0, n.TEXCLASS.CLOSE, { fence: true }],
          "„": e.MO.ACCENT,
          "‟": e.MO.ACCENT,
          "′": e.MO.ORD,
          "″": e.MO.ACCENT,
          "‴": e.MO.ACCENT,
          "‵": e.MO.ACCENT,
          "‶": e.MO.ACCENT,
          "‷": e.MO.ACCENT,
          "‾": e.MO.WIDEACCENT,
          "⁗": e.MO.ACCENT,
          "⃛": e.MO.ACCENT,
          "⃜": e.MO.ACCENT,
          "⌉": e.MO.CLOSE,
          "⌋": e.MO.CLOSE,
          "〉": e.MO.CLOSE,
          "⎴": e.MO.WIDEACCENT,
          "⎵": e.MO.WIDEACCENT,
          "⏜": e.MO.WIDEACCENT,
          "⏝": e.MO.WIDEACCENT,
          "⏞": e.MO.WIDEACCENT,
          "⏟": e.MO.WIDEACCENT,
          "⏠": e.MO.WIDEACCENT,
          "⏡": e.MO.WIDEACCENT,
          "■": e.MO.BIN3,
          "□": e.MO.BIN3,
          "▪": e.MO.BIN3,
          "▫": e.MO.BIN3,
          "▭": e.MO.BIN3,
          "▮": e.MO.BIN3,
          "▯": e.MO.BIN3,
          "▰": e.MO.BIN3,
          "▱": e.MO.BIN3,
          "▲": e.MO.BIN4,
          "▴": e.MO.BIN4,
          "▶": e.MO.BIN4,
          "▷": e.MO.BIN4,
          "▸": e.MO.BIN4,
          "▼": e.MO.BIN4,
          "▾": e.MO.BIN4,
          "◀": e.MO.BIN4,
          "◁": e.MO.BIN4,
          "◂": e.MO.BIN4,
          "◄": e.MO.BIN4,
          "◅": e.MO.BIN4,
          "◆": e.MO.BIN4,
          "◇": e.MO.BIN4,
          "◈": e.MO.BIN4,
          "◉": e.MO.BIN4,
          "◌": e.MO.BIN4,
          "◍": e.MO.BIN4,
          "◎": e.MO.BIN4,
          "●": e.MO.BIN4,
          "◖": e.MO.BIN4,
          "◗": e.MO.BIN4,
          "◦": e.MO.BIN4,
          "♭": e.MO.ORD02,
          "♮": e.MO.ORD02,
          "♯": e.MO.ORD02,
          "❳": e.MO.CLOSE,
          "⟧": e.MO.CLOSE,
          "⟩": e.MO.CLOSE,
          "⟫": e.MO.CLOSE,
          "⟭": e.MO.CLOSE,
          "⟯": e.MO.CLOSE,
          "⦀": [0, 0, n.TEXCLASS.ORD, { fence: true, stretchy: true }],
          "⦄": e.MO.CLOSE,
          "⦆": e.MO.CLOSE,
          "⦈": e.MO.CLOSE,
          "⦊": e.MO.CLOSE,
          "⦌": e.MO.CLOSE,
          "⦎": e.MO.CLOSE,
          "⦐": e.MO.CLOSE,
          "⦒": e.MO.CLOSE,
          "⦔": e.MO.CLOSE,
          "⦖": e.MO.CLOSE,
          "⦘": e.MO.CLOSE,
          "⧽": e.MO.CLOSE,
        },
        infix: {
          "!=": e.MO.BIN4,
          "#": e.MO.ORD,
          $: e.MO.ORD,
          "%": [3, 3, n.TEXCLASS.ORD, null],
          "&&": e.MO.BIN4,
          "": e.MO.ORD,
          "*": e.MO.BIN3,
          "**": O(1, 1),
          "*=": e.MO.BIN4,
          "+": e.MO.BIN4,
          "+=": e.MO.BIN4,
          ",": [0, 3, n.TEXCLASS.PUNCT, { linebreakstyle: "after", separator: true }],
          "-": e.MO.BIN4,
          "-=": e.MO.BIN4,
          "->": e.MO.BIN5,
          ".": [0, 3, n.TEXCLASS.PUNCT, { separator: true }],
          "/": e.MO.ORD11,
          "//": O(1, 1),
          "/=": e.MO.BIN4,
          ":": [1, 2, n.TEXCLASS.REL, null],
          ":=": e.MO.BIN4,
          ";": [0, 3, n.TEXCLASS.PUNCT, { linebreakstyle: "after", separator: true }],
          "<": e.MO.REL,
          "<=": e.MO.BIN5,
          "<>": O(1, 1),
          "=": e.MO.REL,
          "==": e.MO.BIN4,
          ">": e.MO.REL,
          ">=": e.MO.BIN5,
          "?": [1, 1, n.TEXCLASS.CLOSE, null],
          "@": e.MO.ORD11,
          "\\": e.MO.ORD,
          "^": e.MO.ORD11,
          _: e.MO.ORD11,
          "|": [2, 2, n.TEXCLASS.ORD, { fence: true, stretchy: true, symmetric: true }],
          "||": [2, 2, n.TEXCLASS.BIN, { fence: true, stretchy: true, symmetric: true }],
          "|||": [2, 2, n.TEXCLASS.ORD, { fence: true, stretchy: true, symmetric: true }],
          "±": e.MO.BIN4,
          "·": e.MO.BIN4,
          "×": e.MO.BIN4,
          "÷": e.MO.BIN4,
          ʹ: e.MO.ORD,
          "̀": e.MO.ACCENT,
          "́": e.MO.ACCENT,
          "̃": e.MO.WIDEACCENT,
          "̄": e.MO.ACCENT,
          "̆": e.MO.ACCENT,
          "̇": e.MO.ACCENT,
          "̈": e.MO.ACCENT,
          "̌": e.MO.ACCENT,
          "̲": e.MO.WIDEACCENT,
          "̸": e.MO.REL4,
          "―": [0, 0, n.TEXCLASS.ORD, { stretchy: true }],
          "‗": [0, 0, n.TEXCLASS.ORD, { stretchy: true }],
          "†": e.MO.BIN3,
          "‡": e.MO.BIN3,
          "•": e.MO.BIN4,
          "…": e.MO.INNER,
          "⁃": e.MO.BIN4,
          "⁄": e.MO.TALLBIN,
          "⁡": e.MO.NONE,
          "⁢": e.MO.NONE,
          "⁣": [0, 0, n.TEXCLASS.NONE, { linebreakstyle: "after", separator: true }],
          "⁤": e.MO.NONE,
          "⃗": e.MO.ACCENT,
          ℑ: e.MO.ORD,
          ℓ: e.MO.ORD,
          "℘": e.MO.ORD,
          ℜ: e.MO.ORD,
          "←": e.MO.WIDEREL,
          "↑": e.MO.RELSTRETCH,
          "→": e.MO.WIDEREL,
          "↓": e.MO.RELSTRETCH,
          "↔": e.MO.WIDEREL,
          "↕": e.MO.RELSTRETCH,
          "↖": e.MO.RELSTRETCH,
          "↗": e.MO.RELSTRETCH,
          "↘": e.MO.RELSTRETCH,
          "↙": e.MO.RELSTRETCH,
          "↚": e.MO.RELACCENT,
          "↛": e.MO.RELACCENT,
          "↜": e.MO.WIDEREL,
          "↝": e.MO.WIDEREL,
          "↞": e.MO.WIDEREL,
          "↟": e.MO.WIDEREL,
          "↠": e.MO.WIDEREL,
          "↡": e.MO.RELSTRETCH,
          "↢": e.MO.WIDEREL,
          "↣": e.MO.WIDEREL,
          "↤": e.MO.WIDEREL,
          "↥": e.MO.RELSTRETCH,
          "↦": e.MO.WIDEREL,
          "↧": e.MO.RELSTRETCH,
          "↨": e.MO.RELSTRETCH,
          "↩": e.MO.WIDEREL,
          "↪": e.MO.WIDEREL,
          "↫": e.MO.WIDEREL,
          "↬": e.MO.WIDEREL,
          "↭": e.MO.WIDEREL,
          "↮": e.MO.RELACCENT,
          "↯": e.MO.RELSTRETCH,
          "↰": e.MO.RELSTRETCH,
          "↱": e.MO.RELSTRETCH,
          "↲": e.MO.RELSTRETCH,
          "↳": e.MO.RELSTRETCH,
          "↴": e.MO.RELSTRETCH,
          "↵": e.MO.RELSTRETCH,
          "↶": e.MO.RELACCENT,
          "↷": e.MO.RELACCENT,
          "↸": e.MO.REL,
          "↹": e.MO.WIDEREL,
          "↺": e.MO.REL,
          "↻": e.MO.REL,
          "↼": e.MO.WIDEREL,
          "↽": e.MO.WIDEREL,
          "↾": e.MO.RELSTRETCH,
          "↿": e.MO.RELSTRETCH,
          "⇀": e.MO.WIDEREL,
          "⇁": e.MO.WIDEREL,
          "⇂": e.MO.RELSTRETCH,
          "⇃": e.MO.RELSTRETCH,
          "⇄": e.MO.WIDEREL,
          "⇅": e.MO.RELSTRETCH,
          "⇆": e.MO.WIDEREL,
          "⇇": e.MO.WIDEREL,
          "⇈": e.MO.RELSTRETCH,
          "⇉": e.MO.WIDEREL,
          "⇊": e.MO.RELSTRETCH,
          "⇋": e.MO.WIDEREL,
          "⇌": e.MO.WIDEREL,
          "⇍": e.MO.RELACCENT,
          "⇎": e.MO.RELACCENT,
          "⇏": e.MO.RELACCENT,
          "⇐": e.MO.WIDEREL,
          "⇑": e.MO.RELSTRETCH,
          "⇒": e.MO.WIDEREL,
          "⇓": e.MO.RELSTRETCH,
          "⇔": e.MO.WIDEREL,
          "⇕": e.MO.RELSTRETCH,
          "⇖": e.MO.RELSTRETCH,
          "⇗": e.MO.RELSTRETCH,
          "⇘": e.MO.RELSTRETCH,
          "⇙": e.MO.RELSTRETCH,
          "⇚": e.MO.WIDEREL,
          "⇛": e.MO.WIDEREL,
          "⇜": e.MO.WIDEREL,
          "⇝": e.MO.WIDEREL,
          "⇞": e.MO.REL,
          "⇟": e.MO.REL,
          "⇠": e.MO.WIDEREL,
          "⇡": e.MO.RELSTRETCH,
          "⇢": e.MO.WIDEREL,
          "⇣": e.MO.RELSTRETCH,
          "⇤": e.MO.WIDEREL,
          "⇥": e.MO.WIDEREL,
          "⇦": e.MO.WIDEREL,
          "⇧": e.MO.RELSTRETCH,
          "⇨": e.MO.WIDEREL,
          "⇩": e.MO.RELSTRETCH,
          "⇪": e.MO.RELSTRETCH,
          "⇫": e.MO.RELSTRETCH,
          "⇬": e.MO.RELSTRETCH,
          "⇭": e.MO.RELSTRETCH,
          "⇮": e.MO.RELSTRETCH,
          "⇯": e.MO.RELSTRETCH,
          "⇰": e.MO.WIDEREL,
          "⇱": e.MO.REL,
          "⇲": e.MO.REL,
          "⇳": e.MO.RELSTRETCH,
          "⇴": e.MO.RELACCENT,
          "⇵": e.MO.RELSTRETCH,
          "⇶": e.MO.WIDEREL,
          "⇷": e.MO.RELACCENT,
          "⇸": e.MO.RELACCENT,
          "⇹": e.MO.RELACCENT,
          "⇺": e.MO.RELACCENT,
          "⇻": e.MO.RELACCENT,
          "⇼": e.MO.RELACCENT,
          "⇽": e.MO.WIDEREL,
          "⇾": e.MO.WIDEREL,
          "⇿": e.MO.WIDEREL,
          "∁": O(1, 2, n.TEXCLASS.ORD),
          "∅": e.MO.ORD,
          "∆": e.MO.BIN3,
          "∈": e.MO.REL,
          "∉": e.MO.REL,
          "∊": e.MO.REL,
          "∋": e.MO.REL,
          "∌": e.MO.REL,
          "∍": e.MO.REL,
          "∎": e.MO.BIN3,
          "−": e.MO.BIN4,
          "∓": e.MO.BIN4,
          "∔": e.MO.BIN4,
          "∕": e.MO.TALLBIN,
          "∖": e.MO.BIN4,
          "∗": e.MO.BIN4,
          "∘": e.MO.BIN4,
          "∙": e.MO.BIN4,
          "∝": e.MO.REL,
          "∞": e.MO.ORD,
          "∟": e.MO.REL,
          "∣": e.MO.REL,
          "∤": e.MO.REL,
          "∥": e.MO.REL,
          "∦": e.MO.REL,
          "∧": e.MO.BIN4,
          "∨": e.MO.BIN4,
          "∩": e.MO.BIN4,
          "∪": e.MO.BIN4,
          "∴": e.MO.REL,
          "∵": e.MO.REL,
          "∶": e.MO.REL,
          "∷": e.MO.REL,
          "∸": e.MO.BIN4,
          "∹": e.MO.REL,
          "∺": e.MO.BIN4,
          "∻": e.MO.REL,
          "∼": e.MO.REL,
          "∽": e.MO.REL,
          "∽̱": e.MO.BIN3,
          "∾": e.MO.REL,
          "∿": e.MO.BIN3,
          "≀": e.MO.BIN4,
          "≁": e.MO.REL,
          "≂": e.MO.REL,
          "≂̸": e.MO.REL,
          "≃": e.MO.REL,
          "≄": e.MO.REL,
          "≅": e.MO.REL,
          "≆": e.MO.REL,
          "≇": e.MO.REL,
          "≈": e.MO.REL,
          "≉": e.MO.REL,
          "≊": e.MO.REL,
          "≋": e.MO.REL,
          "≌": e.MO.REL,
          "≍": e.MO.REL,
          "≎": e.MO.REL,
          "≎̸": e.MO.REL,
          "≏": e.MO.REL,
          "≏̸": e.MO.REL,
          "≐": e.MO.REL,
          "≑": e.MO.REL,
          "≒": e.MO.REL,
          "≓": e.MO.REL,
          "≔": e.MO.REL,
          "≕": e.MO.REL,
          "≖": e.MO.REL,
          "≗": e.MO.REL,
          "≘": e.MO.REL,
          "≙": e.MO.REL,
          "≚": e.MO.REL,
          "≛": e.MO.REL,
          "≜": e.MO.REL,
          "≝": e.MO.REL,
          "≞": e.MO.REL,
          "≟": e.MO.REL,
          "≠": e.MO.REL,
          "≡": e.MO.REL,
          "≢": e.MO.REL,
          "≣": e.MO.REL,
          "≤": e.MO.REL,
          "≥": e.MO.REL,
          "≦": e.MO.REL,
          "≦̸": e.MO.REL,
          "≧": e.MO.REL,
          "≨": e.MO.REL,
          "≩": e.MO.REL,
          "≪": e.MO.REL,
          "≪̸": e.MO.REL,
          "≫": e.MO.REL,
          "≫̸": e.MO.REL,
          "≬": e.MO.REL,
          "≭": e.MO.REL,
          "≮": e.MO.REL,
          "≯": e.MO.REL,
          "≰": e.MO.REL,
          "≱": e.MO.REL,
          "≲": e.MO.REL,
          "≳": e.MO.REL,
          "≴": e.MO.REL,
          "≵": e.MO.REL,
          "≶": e.MO.REL,
          "≷": e.MO.REL,
          "≸": e.MO.REL,
          "≹": e.MO.REL,
          "≺": e.MO.REL,
          "≻": e.MO.REL,
          "≼": e.MO.REL,
          "≽": e.MO.REL,
          "≾": e.MO.REL,
          "≿": e.MO.REL,
          "≿̸": e.MO.REL,
          "⊀": e.MO.REL,
          "⊁": e.MO.REL,
          "⊂": e.MO.REL,
          "⊂⃒": e.MO.REL,
          "⊃": e.MO.REL,
          "⊃⃒": e.MO.REL,
          "⊄": e.MO.REL,
          "⊅": e.MO.REL,
          "⊆": e.MO.REL,
          "⊇": e.MO.REL,
          "⊈": e.MO.REL,
          "⊉": e.MO.REL,
          "⊊": e.MO.REL,
          "⊋": e.MO.REL,
          "⊌": e.MO.BIN4,
          "⊍": e.MO.BIN4,
          "⊎": e.MO.BIN4,
          "⊏": e.MO.REL,
          "⊏̸": e.MO.REL,
          "⊐": e.MO.REL,
          "⊐̸": e.MO.REL,
          "⊑": e.MO.REL,
          "⊒": e.MO.REL,
          "⊓": e.MO.BIN4,
          "⊔": e.MO.BIN4,
          "⊕": e.MO.BIN4,
          "⊖": e.MO.BIN4,
          "⊗": e.MO.BIN4,
          "⊘": e.MO.BIN4,
          "⊙": e.MO.BIN4,
          "⊚": e.MO.BIN4,
          "⊛": e.MO.BIN4,
          "⊜": e.MO.BIN4,
          "⊝": e.MO.BIN4,
          "⊞": e.MO.BIN4,
          "⊟": e.MO.BIN4,
          "⊠": e.MO.BIN4,
          "⊡": e.MO.BIN4,
          "⊢": e.MO.REL,
          "⊣": e.MO.REL,
          "⊤": e.MO.ORD55,
          "⊥": e.MO.REL,
          "⊦": e.MO.REL,
          "⊧": e.MO.REL,
          "⊨": e.MO.REL,
          "⊩": e.MO.REL,
          "⊪": e.MO.REL,
          "⊫": e.MO.REL,
          "⊬": e.MO.REL,
          "⊭": e.MO.REL,
          "⊮": e.MO.REL,
          "⊯": e.MO.REL,
          "⊰": e.MO.REL,
          "⊱": e.MO.REL,
          "⊲": e.MO.REL,
          "⊳": e.MO.REL,
          "⊴": e.MO.REL,
          "⊵": e.MO.REL,
          "⊶": e.MO.REL,
          "⊷": e.MO.REL,
          "⊸": e.MO.REL,
          "⊹": e.MO.REL,
          "⊺": e.MO.BIN4,
          "⊻": e.MO.BIN4,
          "⊼": e.MO.BIN4,
          "⊽": e.MO.BIN4,
          "⊾": e.MO.BIN3,
          "⊿": e.MO.BIN3,
          "⋄": e.MO.BIN4,
          "⋅": e.MO.BIN4,
          "⋆": e.MO.BIN4,
          "⋇": e.MO.BIN4,
          "⋈": e.MO.REL,
          "⋉": e.MO.BIN4,
          "⋊": e.MO.BIN4,
          "⋋": e.MO.BIN4,
          "⋌": e.MO.BIN4,
          "⋍": e.MO.REL,
          "⋎": e.MO.BIN4,
          "⋏": e.MO.BIN4,
          "⋐": e.MO.REL,
          "⋑": e.MO.REL,
          "⋒": e.MO.BIN4,
          "⋓": e.MO.BIN4,
          "⋔": e.MO.REL,
          "⋕": e.MO.REL,
          "⋖": e.MO.REL,
          "⋗": e.MO.REL,
          "⋘": e.MO.REL,
          "⋙": e.MO.REL,
          "⋚": e.MO.REL,
          "⋛": e.MO.REL,
          "⋜": e.MO.REL,
          "⋝": e.MO.REL,
          "⋞": e.MO.REL,
          "⋟": e.MO.REL,
          "⋠": e.MO.REL,
          "⋡": e.MO.REL,
          "⋢": e.MO.REL,
          "⋣": e.MO.REL,
          "⋤": e.MO.REL,
          "⋥": e.MO.REL,
          "⋦": e.MO.REL,
          "⋧": e.MO.REL,
          "⋨": e.MO.REL,
          "⋩": e.MO.REL,
          "⋪": e.MO.REL,
          "⋫": e.MO.REL,
          "⋬": e.MO.REL,
          "⋭": e.MO.REL,
          "⋮": e.MO.ORD55,
          "⋯": e.MO.INNER,
          "⋰": e.MO.REL,
          "⋱": [5, 5, n.TEXCLASS.INNER, null],
          "⋲": e.MO.REL,
          "⋳": e.MO.REL,
          "⋴": e.MO.REL,
          "⋵": e.MO.REL,
          "⋶": e.MO.REL,
          "⋷": e.MO.REL,
          "⋸": e.MO.REL,
          "⋹": e.MO.REL,
          "⋺": e.MO.REL,
          "⋻": e.MO.REL,
          "⋼": e.MO.REL,
          "⋽": e.MO.REL,
          "⋾": e.MO.REL,
          "⋿": e.MO.REL,
          "⌅": e.MO.BIN3,
          "⌆": e.MO.BIN3,
          "⌢": e.MO.REL4,
          "⌣": e.MO.REL4,
          "〈": e.MO.OPEN,
          "〉": e.MO.CLOSE,
          "⎪": e.MO.ORD,
          "⎯": [0, 0, n.TEXCLASS.ORD, { stretchy: true }],
          "⎰": e.MO.OPEN,
          "⎱": e.MO.CLOSE,
          "─": e.MO.ORD,
          "△": e.MO.BIN4,
          "▵": e.MO.BIN4,
          "▹": e.MO.BIN4,
          "▽": e.MO.BIN4,
          "▿": e.MO.BIN4,
          "◃": e.MO.BIN4,
          "◯": e.MO.BIN3,
          "♠": e.MO.ORD,
          "♡": e.MO.ORD,
          "♢": e.MO.ORD,
          "♣": e.MO.ORD,
          "❘": e.MO.REL,
          "⟰": e.MO.RELSTRETCH,
          "⟱": e.MO.RELSTRETCH,
          "⟵": e.MO.WIDEREL,
          "⟶": e.MO.WIDEREL,
          "⟷": e.MO.WIDEREL,
          "⟸": e.MO.WIDEREL,
          "⟹": e.MO.WIDEREL,
          "⟺": e.MO.WIDEREL,
          "⟻": e.MO.WIDEREL,
          "⟼": e.MO.WIDEREL,
          "⟽": e.MO.WIDEREL,
          "⟾": e.MO.WIDEREL,
          "⟿": e.MO.WIDEREL,
          "⤀": e.MO.RELACCENT,
          "⤁": e.MO.RELACCENT,
          "⤂": e.MO.RELACCENT,
          "⤃": e.MO.RELACCENT,
          "⤄": e.MO.RELACCENT,
          "⤅": e.MO.RELACCENT,
          "⤆": e.MO.RELACCENT,
          "⤇": e.MO.RELACCENT,
          "⤈": e.MO.REL,
          "⤉": e.MO.REL,
          "⤊": e.MO.RELSTRETCH,
          "⤋": e.MO.RELSTRETCH,
          "⤌": e.MO.WIDEREL,
          "⤍": e.MO.WIDEREL,
          "⤎": e.MO.WIDEREL,
          "⤏": e.MO.WIDEREL,
          "⤐": e.MO.WIDEREL,
          "⤑": e.MO.RELACCENT,
          "⤒": e.MO.RELSTRETCH,
          "⤓": e.MO.RELSTRETCH,
          "⤔": e.MO.RELACCENT,
          "⤕": e.MO.RELACCENT,
          "⤖": e.MO.RELACCENT,
          "⤗": e.MO.RELACCENT,
          "⤘": e.MO.RELACCENT,
          "⤙": e.MO.RELACCENT,
          "⤚": e.MO.RELACCENT,
          "⤛": e.MO.RELACCENT,
          "⤜": e.MO.RELACCENT,
          "⤝": e.MO.RELACCENT,
          "⤞": e.MO.RELACCENT,
          "⤟": e.MO.RELACCENT,
          "⤠": e.MO.RELACCENT,
          "⤡": e.MO.RELSTRETCH,
          "⤢": e.MO.RELSTRETCH,
          "⤣": e.MO.REL,
          "⤤": e.MO.REL,
          "⤥": e.MO.REL,
          "⤦": e.MO.REL,
          "⤧": e.MO.REL,
          "⤨": e.MO.REL,
          "⤩": e.MO.REL,
          "⤪": e.MO.REL,
          "⤫": e.MO.REL,
          "⤬": e.MO.REL,
          "⤭": e.MO.REL,
          "⤮": e.MO.REL,
          "⤯": e.MO.REL,
          "⤰": e.MO.REL,
          "⤱": e.MO.REL,
          "⤲": e.MO.REL,
          "⤳": e.MO.RELACCENT,
          "⤴": e.MO.REL,
          "⤵": e.MO.REL,
          "⤶": e.MO.REL,
          "⤷": e.MO.REL,
          "⤸": e.MO.REL,
          "⤹": e.MO.REL,
          "⤺": e.MO.RELACCENT,
          "⤻": e.MO.RELACCENT,
          "⤼": e.MO.RELACCENT,
          "⤽": e.MO.RELACCENT,
          "⤾": e.MO.REL,
          "⤿": e.MO.REL,
          "⥀": e.MO.REL,
          "⥁": e.MO.REL,
          "⥂": e.MO.RELACCENT,
          "⥃": e.MO.RELACCENT,
          "⥄": e.MO.RELACCENT,
          "⥅": e.MO.RELACCENT,
          "⥆": e.MO.RELACCENT,
          "⥇": e.MO.RELACCENT,
          "⥈": e.MO.RELACCENT,
          "⥉": e.MO.REL,
          "⥊": e.MO.RELACCENT,
          "⥋": e.MO.RELACCENT,
          "⥌": e.MO.REL,
          "⥍": e.MO.REL,
          "⥎": e.MO.WIDEREL,
          "⥏": e.MO.RELSTRETCH,
          "⥐": e.MO.WIDEREL,
          "⥑": e.MO.RELSTRETCH,
          "⥒": e.MO.WIDEREL,
          "⥓": e.MO.WIDEREL,
          "⥔": e.MO.RELSTRETCH,
          "⥕": e.MO.RELSTRETCH,
          "⥖": e.MO.RELSTRETCH,
          "⥗": e.MO.RELSTRETCH,
          "⥘": e.MO.RELSTRETCH,
          "⥙": e.MO.RELSTRETCH,
          "⥚": e.MO.WIDEREL,
          "⥛": e.MO.WIDEREL,
          "⥜": e.MO.RELSTRETCH,
          "⥝": e.MO.RELSTRETCH,
          "⥞": e.MO.WIDEREL,
          "⥟": e.MO.WIDEREL,
          "⥠": e.MO.RELSTRETCH,
          "⥡": e.MO.RELSTRETCH,
          "⥢": e.MO.RELACCENT,
          "⥣": e.MO.REL,
          "⥤": e.MO.RELACCENT,
          "⥥": e.MO.REL,
          "⥦": e.MO.RELACCENT,
          "⥧": e.MO.RELACCENT,
          "⥨": e.MO.RELACCENT,
          "⥩": e.MO.RELACCENT,
          "⥪": e.MO.RELACCENT,
          "⥫": e.MO.RELACCENT,
          "⥬": e.MO.RELACCENT,
          "⥭": e.MO.RELACCENT,
          "⥮": e.MO.RELSTRETCH,
          "⥯": e.MO.RELSTRETCH,
          "⥰": e.MO.RELACCENT,
          "⥱": e.MO.RELACCENT,
          "⥲": e.MO.RELACCENT,
          "⥳": e.MO.RELACCENT,
          "⥴": e.MO.RELACCENT,
          "⥵": e.MO.RELACCENT,
          "⥶": e.MO.RELACCENT,
          "⥷": e.MO.RELACCENT,
          "⥸": e.MO.RELACCENT,
          "⥹": e.MO.RELACCENT,
          "⥺": e.MO.RELACCENT,
          "⥻": e.MO.RELACCENT,
          "⥼": e.MO.RELACCENT,
          "⥽": e.MO.RELACCENT,
          "⥾": e.MO.REL,
          "⥿": e.MO.REL,
          "⦁": e.MO.BIN3,
          "⦂": e.MO.BIN3,
          "⦙": e.MO.BIN3,
          "⦚": e.MO.BIN3,
          "⦛": e.MO.BIN3,
          "⦜": e.MO.BIN3,
          "⦝": e.MO.BIN3,
          "⦞": e.MO.BIN3,
          "⦟": e.MO.BIN3,
          "⦠": e.MO.BIN3,
          "⦡": e.MO.BIN3,
          "⦢": e.MO.BIN3,
          "⦣": e.MO.BIN3,
          "⦤": e.MO.BIN3,
          "⦥": e.MO.BIN3,
          "⦦": e.MO.BIN3,
          "⦧": e.MO.BIN3,
          "⦨": e.MO.BIN3,
          "⦩": e.MO.BIN3,
          "⦪": e.MO.BIN3,
          "⦫": e.MO.BIN3,
          "⦬": e.MO.BIN3,
          "⦭": e.MO.BIN3,
          "⦮": e.MO.BIN3,
          "⦯": e.MO.BIN3,
          "⦰": e.MO.BIN3,
          "⦱": e.MO.BIN3,
          "⦲": e.MO.BIN3,
          "⦳": e.MO.BIN3,
          "⦴": e.MO.BIN3,
          "⦵": e.MO.BIN3,
          "⦶": e.MO.BIN4,
          "⦷": e.MO.BIN4,
          "⦸": e.MO.BIN4,
          "⦹": e.MO.BIN4,
          "⦺": e.MO.BIN4,
          "⦻": e.MO.BIN4,
          "⦼": e.MO.BIN4,
          "⦽": e.MO.BIN4,
          "⦾": e.MO.BIN4,
          "⦿": e.MO.BIN4,
          "⧀": e.MO.REL,
          "⧁": e.MO.REL,
          "⧂": e.MO.BIN3,
          "⧃": e.MO.BIN3,
          "⧄": e.MO.BIN4,
          "⧅": e.MO.BIN4,
          "⧆": e.MO.BIN4,
          "⧇": e.MO.BIN4,
          "⧈": e.MO.BIN4,
          "⧉": e.MO.BIN3,
          "⧊": e.MO.BIN3,
          "⧋": e.MO.BIN3,
          "⧌": e.MO.BIN3,
          "⧍": e.MO.BIN3,
          "⧎": e.MO.REL,
          "⧏": e.MO.REL,
          "⧏̸": e.MO.REL,
          "⧐": e.MO.REL,
          "⧐̸": e.MO.REL,
          "⧑": e.MO.REL,
          "⧒": e.MO.REL,
          "⧓": e.MO.REL,
          "⧔": e.MO.REL,
          "⧕": e.MO.REL,
          "⧖": e.MO.BIN4,
          "⧗": e.MO.BIN4,
          "⧘": e.MO.BIN3,
          "⧙": e.MO.BIN3,
          "⧛": e.MO.BIN3,
          "⧜": e.MO.BIN3,
          "⧝": e.MO.BIN3,
          "⧞": e.MO.REL,
          "⧟": e.MO.BIN3,
          "⧠": e.MO.BIN3,
          "⧡": e.MO.REL,
          "⧢": e.MO.BIN4,
          "⧣": e.MO.REL,
          "⧤": e.MO.REL,
          "⧥": e.MO.REL,
          "⧦": e.MO.REL,
          "⧧": e.MO.BIN3,
          "⧨": e.MO.BIN3,
          "⧩": e.MO.BIN3,
          "⧪": e.MO.BIN3,
          "⧫": e.MO.BIN3,
          "⧬": e.MO.BIN3,
          "⧭": e.MO.BIN3,
          "⧮": e.MO.BIN3,
          "⧯": e.MO.BIN3,
          "⧰": e.MO.BIN3,
          "⧱": e.MO.BIN3,
          "⧲": e.MO.BIN3,
          "⧳": e.MO.BIN3,
          "⧴": e.MO.REL,
          "⧵": e.MO.BIN4,
          "⧶": e.MO.BIN4,
          "⧷": e.MO.BIN4,
          "⧸": e.MO.BIN3,
          "⧹": e.MO.BIN3,
          "⧺": e.MO.BIN3,
          "⧻": e.MO.BIN3,
          "⧾": e.MO.BIN4,
          "⧿": e.MO.BIN4,
          "⨝": e.MO.BIN3,
          "⨞": e.MO.BIN3,
          "⨟": e.MO.BIN3,
          "⨠": e.MO.BIN3,
          "⨡": e.MO.BIN3,
          "⨢": e.MO.BIN4,
          "⨣": e.MO.BIN4,
          "⨤": e.MO.BIN4,
          "⨥": e.MO.BIN4,
          "⨦": e.MO.BIN4,
          "⨧": e.MO.BIN4,
          "⨨": e.MO.BIN4,
          "⨩": e.MO.BIN4,
          "⨪": e.MO.BIN4,
          "⨫": e.MO.BIN4,
          "⨬": e.MO.BIN4,
          "⨭": e.MO.BIN4,
          "⨮": e.MO.BIN4,
          "⨯": e.MO.BIN4,
          "⨰": e.MO.BIN4,
          "⨱": e.MO.BIN4,
          "⨲": e.MO.BIN4,
          "⨳": e.MO.BIN4,
          "⨴": e.MO.BIN4,
          "⨵": e.MO.BIN4,
          "⨶": e.MO.BIN4,
          "⨷": e.MO.BIN4,
          "⨸": e.MO.BIN4,
          "⨹": e.MO.BIN4,
          "⨺": e.MO.BIN4,
          "⨻": e.MO.BIN4,
          "⨼": e.MO.BIN4,
          "⨽": e.MO.BIN4,
          "⨾": e.MO.BIN4,
          "⨿": e.MO.BIN4,
          "⩀": e.MO.BIN4,
          "⩁": e.MO.BIN4,
          "⩂": e.MO.BIN4,
          "⩃": e.MO.BIN4,
          "⩄": e.MO.BIN4,
          "⩅": e.MO.BIN4,
          "⩆": e.MO.BIN4,
          "⩇": e.MO.BIN4,
          "⩈": e.MO.BIN4,
          "⩉": e.MO.BIN4,
          "⩊": e.MO.BIN4,
          "⩋": e.MO.BIN4,
          "⩌": e.MO.BIN4,
          "⩍": e.MO.BIN4,
          "⩎": e.MO.BIN4,
          "⩏": e.MO.BIN4,
          "⩐": e.MO.BIN4,
          "⩑": e.MO.BIN4,
          "⩒": e.MO.BIN4,
          "⩓": e.MO.BIN4,
          "⩔": e.MO.BIN4,
          "⩕": e.MO.BIN4,
          "⩖": e.MO.BIN4,
          "⩗": e.MO.BIN4,
          "⩘": e.MO.BIN4,
          "⩙": e.MO.REL,
          "⩚": e.MO.BIN4,
          "⩛": e.MO.BIN4,
          "⩜": e.MO.BIN4,
          "⩝": e.MO.BIN4,
          "⩞": e.MO.BIN4,
          "⩟": e.MO.BIN4,
          "⩠": e.MO.BIN4,
          "⩡": e.MO.BIN4,
          "⩢": e.MO.BIN4,
          "⩣": e.MO.BIN4,
          "⩤": e.MO.BIN4,
          "⩥": e.MO.BIN4,
          "⩦": e.MO.REL,
          "⩧": e.MO.REL,
          "⩨": e.MO.REL,
          "⩩": e.MO.REL,
          "⩪": e.MO.REL,
          "⩫": e.MO.REL,
          "⩬": e.MO.REL,
          "⩭": e.MO.REL,
          "⩮": e.MO.REL,
          "⩯": e.MO.REL,
          "⩰": e.MO.REL,
          "⩱": e.MO.BIN4,
          "⩲": e.MO.BIN4,
          "⩳": e.MO.REL,
          "⩴": e.MO.REL,
          "⩵": e.MO.REL,
          "⩶": e.MO.REL,
          "⩷": e.MO.REL,
          "⩸": e.MO.REL,
          "⩹": e.MO.REL,
          "⩺": e.MO.REL,
          "⩻": e.MO.REL,
          "⩼": e.MO.REL,
          "⩽": e.MO.REL,
          "⩽̸": e.MO.REL,
          "⩾": e.MO.REL,
          "⩾̸": e.MO.REL,
          "⩿": e.MO.REL,
          "⪀": e.MO.REL,
          "⪁": e.MO.REL,
          "⪂": e.MO.REL,
          "⪃": e.MO.REL,
          "⪄": e.MO.REL,
          "⪅": e.MO.REL,
          "⪆": e.MO.REL,
          "⪇": e.MO.REL,
          "⪈": e.MO.REL,
          "⪉": e.MO.REL,
          "⪊": e.MO.REL,
          "⪋": e.MO.REL,
          "⪌": e.MO.REL,
          "⪍": e.MO.REL,
          "⪎": e.MO.REL,
          "⪏": e.MO.REL,
          "⪐": e.MO.REL,
          "⪑": e.MO.REL,
          "⪒": e.MO.REL,
          "⪓": e.MO.REL,
          "⪔": e.MO.REL,
          "⪕": e.MO.REL,
          "⪖": e.MO.REL,
          "⪗": e.MO.REL,
          "⪘": e.MO.REL,
          "⪙": e.MO.REL,
          "⪚": e.MO.REL,
          "⪛": e.MO.REL,
          "⪜": e.MO.REL,
          "⪝": e.MO.REL,
          "⪞": e.MO.REL,
          "⪟": e.MO.REL,
          "⪠": e.MO.REL,
          "⪡": e.MO.REL,
          "⪡̸": e.MO.REL,
          "⪢": e.MO.REL,
          "⪢̸": e.MO.REL,
          "⪣": e.MO.REL,
          "⪤": e.MO.REL,
          "⪥": e.MO.REL,
          "⪦": e.MO.REL,
          "⪧": e.MO.REL,
          "⪨": e.MO.REL,
          "⪩": e.MO.REL,
          "⪪": e.MO.REL,
          "⪫": e.MO.REL,
          "⪬": e.MO.REL,
          "⪭": e.MO.REL,
          "⪮": e.MO.REL,
          "⪯": e.MO.REL,
          "⪯̸": e.MO.REL,
          "⪰": e.MO.REL,
          "⪰̸": e.MO.REL,
          "⪱": e.MO.REL,
          "⪲": e.MO.REL,
          "⪳": e.MO.REL,
          "⪴": e.MO.REL,
          "⪵": e.MO.REL,
          "⪶": e.MO.REL,
          "⪷": e.MO.REL,
          "⪸": e.MO.REL,
          "⪹": e.MO.REL,
          "⪺": e.MO.REL,
          "⪻": e.MO.REL,
          "⪼": e.MO.REL,
          "⪽": e.MO.REL,
          "⪾": e.MO.REL,
          "⪿": e.MO.REL,
          "⫀": e.MO.REL,
          "⫁": e.MO.REL,
          "⫂": e.MO.REL,
          "⫃": e.MO.REL,
          "⫄": e.MO.REL,
          "⫅": e.MO.REL,
          "⫆": e.MO.REL,
          "⫇": e.MO.REL,
          "⫈": e.MO.REL,
          "⫉": e.MO.REL,
          "⫊": e.MO.REL,
          "⫋": e.MO.REL,
          "⫌": e.MO.REL,
          "⫍": e.MO.REL,
          "⫎": e.MO.REL,
          "⫏": e.MO.REL,
          "⫐": e.MO.REL,
          "⫑": e.MO.REL,
          "⫒": e.MO.REL,
          "⫓": e.MO.REL,
          "⫔": e.MO.REL,
          "⫕": e.MO.REL,
          "⫖": e.MO.REL,
          "⫗": e.MO.REL,
          "⫘": e.MO.REL,
          "⫙": e.MO.REL,
          "⫚": e.MO.REL,
          "⫛": e.MO.REL,
          "⫝": e.MO.REL,
          "⫝̸": e.MO.REL,
          "⫞": e.MO.REL,
          "⫟": e.MO.REL,
          "⫠": e.MO.REL,
          "⫡": e.MO.REL,
          "⫢": e.MO.REL,
          "⫣": e.MO.REL,
          "⫤": e.MO.REL,
          "⫥": e.MO.REL,
          "⫦": e.MO.REL,
          "⫧": e.MO.REL,
          "⫨": e.MO.REL,
          "⫩": e.MO.REL,
          "⫪": e.MO.REL,
          "⫫": e.MO.REL,
          "⫬": e.MO.REL,
          "⫭": e.MO.REL,
          "⫮": e.MO.REL,
          "⫯": e.MO.REL,
          "⫰": e.MO.REL,
          "⫱": e.MO.REL,
          "⫲": e.MO.REL,
          "⫳": e.MO.REL,
          "⫴": e.MO.BIN4,
          "⫵": e.MO.BIN4,
          "⫶": e.MO.BIN4,
          "⫷": e.MO.REL,
          "⫸": e.MO.REL,
          "⫹": e.MO.REL,
          "⫺": e.MO.REL,
          "⫻": e.MO.BIN4,
          "⫽": e.MO.BIN4,
          "⫾": e.MO.BIN3,
          "⭅": e.MO.RELSTRETCH,
          "⭆": e.MO.RELSTRETCH,
          "〈": e.MO.OPEN,
          "〉": e.MO.CLOSE,
          "︷": e.MO.WIDEACCENT,
          "︸": e.MO.WIDEACCENT,
        },
      };
      e.OPTABLE.infix["^"] = e.MO.WIDEREL;
      e.OPTABLE.infix._ = e.MO.WIDEREL;
      e.OPTABLE.infix["⫝̸"] = e.MO.REL;
    },
    62335: function (t, e) {
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
        (this && this.__assign) ||
        function () {
          i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, i = arguments.length; r < i; r++) {
                e = arguments[r];
                for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) t[n] = e[n];
              }
              return t;
            };
          return i.apply(this, arguments);
        };
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
      e.AbstractEmptyNode = e.AbstractNode = void 0;
      var O = (function () {
        function t(t, e, r) {
          var i, O;
          if (e === void 0) {
            e = {};
          }
          if (r === void 0) {
            r = [];
          }
          this.factory = t;
          this.parent = null;
          this.properties = {};
          this.childNodes = [];
          try {
            for (var o = n(Object.keys(e)), E = o.next(); !E.done; E = o.next()) {
              var s = E.value;
              this.setProperty(s, e[s]);
            }
          } catch (a) {
            i = { error: a };
          } finally {
            try {
              if (E && !E.done && (O = o.return)) O.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          if (r.length) {
            this.setChildren(r);
          }
        }
        Object.defineProperty(t.prototype, "kind", {
          get: function () {
            return "unknown";
          },
          enumerable: false,
          configurable: true,
        });
        t.prototype.setProperty = function (t, e) {
          this.properties[t] = e;
        };
        t.prototype.getProperty = function (t) {
          return this.properties[t];
        };
        t.prototype.getPropertyNames = function () {
          return Object.keys(this.properties);
        };
        t.prototype.getAllProperties = function () {
          return this.properties;
        };
        t.prototype.removeProperty = function () {
          var t, e;
          var r = [];
          for (var i = 0; i < arguments.length; i++) {
            r[i] = arguments[i];
          }
          try {
            for (var O = n(r), o = O.next(); !o.done; o = O.next()) {
              var E = o.value;
              delete this.properties[E];
            }
          } catch (s) {
            t = { error: s };
          } finally {
            try {
              if (o && !o.done && (e = O.return)) e.call(O);
            } finally {
              if (t) throw t.error;
            }
          }
        };
        t.prototype.isKind = function (t) {
          return this.factory.nodeIsKind(this, t);
        };
        t.prototype.setChildren = function (t) {
          var e, r;
          this.childNodes = [];
          try {
            for (var i = n(t), O = i.next(); !O.done; O = i.next()) {
              var o = O.value;
              this.appendChild(o);
            }
          } catch (E) {
            e = { error: E };
          } finally {
            try {
              if (O && !O.done && (r = i.return)) r.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
        };
        t.prototype.appendChild = function (t) {
          this.childNodes.push(t);
          t.parent = this;
          return t;
        };
        t.prototype.replaceChild = function (t, e) {
          var r = this.childIndex(e);
          if (r !== null) {
            this.childNodes[r] = t;
            t.parent = this;
            e.parent = null;
          }
          return t;
        };
        t.prototype.removeChild = function (t) {
          var e = this.childIndex(t);
          if (e !== null) {
            this.childNodes.splice(e, 1);
            t.parent = null;
          }
          return t;
        };
        t.prototype.childIndex = function (t) {
          var e = this.childNodes.indexOf(t);
          return e === -1 ? null : e;
        };
        t.prototype.copy = function () {
          var t, e;
          var r = this.factory.create(this.kind);
          r.properties = i({}, this.properties);
          try {
            for (var O = n(this.childNodes || []), o = O.next(); !o.done; o = O.next()) {
              var E = o.value;
              if (E) {
                r.appendChild(E.copy());
              }
            }
          } catch (s) {
            t = { error: s };
          } finally {
            try {
              if (o && !o.done && (e = O.return)) e.call(O);
            } finally {
              if (t) throw t.error;
            }
          }
          return r;
        };
        t.prototype.findNodes = function (t) {
          var e = [];
          this.walkTree(function (r) {
            if (r.isKind(t)) {
              e.push(r);
            }
          });
          return e;
        };
        t.prototype.walkTree = function (t, e) {
          var r, i;
          t(this, e);
          try {
            for (var O = n(this.childNodes), o = O.next(); !o.done; o = O.next()) {
              var E = o.value;
              if (E) {
                E.walkTree(t, e);
              }
            }
          } catch (s) {
            r = { error: s };
          } finally {
            try {
              if (o && !o.done && (i = O.return)) i.call(O);
            } finally {
              if (r) throw r.error;
            }
          }
          return e;
        };
        t.prototype.toString = function () {
          return this.kind + "(" + this.childNodes.join(",") + ")";
        };
        return t;
      })();
      e.AbstractNode = O;
      var o = (function (t) {
        r(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.setChildren = function (t) {};
        e.prototype.appendChild = function (t) {
          return t;
        };
        e.prototype.replaceChild = function (t, e) {
          return e;
        };
        e.prototype.childIndex = function (t) {
          return null;
        };
        e.prototype.walkTree = function (t, e) {
          t(this, e);
          return e;
        };
        e.prototype.toString = function () {
          return this.kind;
        };
        return e;
      })(O);
      e.AbstractEmptyNode = o;
    },
    36059: function (t, e) {
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
            O = [],
            o;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) O.push(n.value);
          } catch (E) {
            o = { error: E };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return O;
        };
      var n =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, O; i < n; i++) {
              if (O || !(i in e)) {
                if (!O) O = Array.prototype.slice.call(e, 0, i);
                O[i] = e[i];
              }
            }
          return t.concat(O || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.lookup =
        e.separateOptions =
        e.selectOptionsFromKeys =
        e.selectOptions =
        e.userOptions =
        e.defaultOptions =
        e.insert =
        e.copy =
        e.keys =
        e.makeArray =
        e.expandable =
        e.Expandable =
        e.OPTIONS =
        e.REMOVE =
        e.APPEND =
        e.isObject =
          void 0;
      var O = {}.constructor;
      function o(t) {
        return typeof t === "object" && t !== null && (t.constructor === O || t.constructor === E);
      }
      e.isObject = o;
      e.APPEND = "[+]";
      e.REMOVE = "[-]";
      e.OPTIONS = {
        invalidOption: "warn",
        optionError: function (t, r) {
          if (e.OPTIONS.invalidOption === "fatal") {
            throw new Error(t);
          }
          console.warn("MathJax: " + t);
        },
      };
      var E = (function () {
        function t() {}
        return t;
      })();
      e.Expandable = E;
      function s(t) {
        return Object.assign(Object.create(E.prototype), t);
      }
      e.expandable = s;
      function a(t) {
        return Array.isArray(t) ? t : [t];
      }
      e.makeArray = a;
      function M(t) {
        if (!t) {
          return [];
        }
        return Object.keys(t).concat(Object.getOwnPropertySymbols(t));
      }
      e.keys = M;
      function l(t) {
        var e, i;
        var n = {};
        try {
          for (var O = r(M(t)), a = O.next(); !a.done; a = O.next()) {
            var c = a.value;
            var f = Object.getOwnPropertyDescriptor(t, c);
            var L = f.value;
            if (Array.isArray(L)) {
              f.value = u([], L, false);
            } else if (o(L)) {
              f.value = l(L);
            }
            if (f.enumerable) {
              n[c] = f;
            }
          }
        } catch (R) {
          e = { error: R };
        } finally {
          try {
            if (a && !a.done && (i = O.return)) i.call(O);
          } finally {
            if (e) throw e.error;
          }
        }
        return Object.defineProperties(t.constructor === E ? s({}) : {}, n);
      }
      e.copy = l;
      function u(t, O, s) {
        var a, c;
        if (s === void 0) {
          s = true;
        }
        var f = function (r) {
          if (s && t[r] === undefined && t.constructor !== E) {
            if (typeof r === "symbol") {
              r = r.toString();
            }
            e.OPTIONS.optionError('Invalid option "'.concat(r, '" (no default value).'), r);
            return "continue";
          }
          var a = O[r],
            c = t[r];
          if (o(a) && c !== null && (typeof c === "object" || typeof c === "function")) {
            var f = M(a);
            if (
              Array.isArray(c) &&
              ((f.length === 1 && (f[0] === e.APPEND || f[0] === e.REMOVE) && Array.isArray(a[f[0]])) ||
                (f.length === 2 && f.sort().join(",") === e.APPEND + "," + e.REMOVE && Array.isArray(a[e.APPEND]) && Array.isArray(a[e.REMOVE])))
            ) {
              if (a[e.REMOVE]) {
                c = t[r] = c.filter(function (t) {
                  return a[e.REMOVE].indexOf(t) < 0;
                });
              }
              if (a[e.APPEND]) {
                t[r] = n(n([], i(c), false), i(a[e.APPEND]), false);
              }
            } else {
              u(c, a, s);
            }
          } else if (Array.isArray(a)) {
            t[r] = [];
            u(t[r], a, false);
          } else if (o(a)) {
            t[r] = l(a);
          } else {
            t[r] = a;
          }
        };
        try {
          for (var L = r(M(O)), R = L.next(); !R.done; R = L.next()) {
            var p = R.value;
            f(p);
          }
        } catch (h) {
          a = { error: h };
        } finally {
          try {
            if (R && !R.done && (c = L.return)) c.call(L);
          } finally {
            if (a) throw a.error;
          }
        }
        return t;
      }
      e.insert = u;
      function c(t) {
        var e = [];
        for (var r = 1; r < arguments.length; r++) {
          e[r - 1] = arguments[r];
        }
        e.forEach(function (e) {
          return u(t, e, false);
        });
        return t;
      }
      e.defaultOptions = c;
      function f(t) {
        var e = [];
        for (var r = 1; r < arguments.length; r++) {
          e[r - 1] = arguments[r];
        }
        e.forEach(function (e) {
          return u(t, e, true);
        });
        return t;
      }
      e.userOptions = f;
      function L(t) {
        var e, i;
        var n = [];
        for (var O = 1; O < arguments.length; O++) {
          n[O - 1] = arguments[O];
        }
        var o = {};
        try {
          for (var E = r(n), s = E.next(); !s.done; s = E.next()) {
            var a = s.value;
            if (t.hasOwnProperty(a)) {
              o[a] = t[a];
            }
          }
        } catch (M) {
          e = { error: M };
        } finally {
          try {
            if (s && !s.done && (i = E.return)) i.call(E);
          } finally {
            if (e) throw e.error;
          }
        }
        return o;
      }
      e.selectOptions = L;
      function R(t, e) {
        return L.apply(void 0, n([t], i(Object.keys(e)), false));
      }
      e.selectOptionsFromKeys = R;
      function p(t) {
        var e, i, n, O;
        var o = [];
        for (var E = 1; E < arguments.length; E++) {
          o[E - 1] = arguments[E];
        }
        var s = [];
        try {
          for (var a = r(o), M = a.next(); !M.done; M = a.next()) {
            var l = M.value;
            var u = {},
              c = {};
            try {
              for (var f = ((n = void 0), r(Object.keys(t || {}))), L = f.next(); !L.done; L = f.next()) {
                var R = L.value;
                (l[R] === undefined ? c : u)[R] = t[R];
              }
            } catch (p) {
              n = { error: p };
            } finally {
              try {
                if (L && !L.done && (O = f.return)) O.call(f);
              } finally {
                if (n) throw n.error;
              }
            }
            s.push(u);
            t = c;
          }
        } catch (h) {
          e = { error: h };
        } finally {
          try {
            if (M && !M.done && (i = a.return)) i.call(a);
          } finally {
            if (e) throw e.error;
          }
        }
        s.unshift(t);
        return s;
      }
      e.separateOptions = p;
      function h(t, e, r) {
        if (r === void 0) {
          r = null;
        }
        return e.hasOwnProperty(t) ? e[t] : r;
      }
      e.lookup = h;
    },
    33353: function (t, e) {
      var r =
        (this && this.__read) ||
        function (t, e) {
          var r = typeof Symbol === "function" && t[Symbol.iterator];
          if (!r) return t;
          var i = r.call(t),
            n,
            O = [],
            o;
          try {
            while ((e === void 0 || e-- > 0) && !(n = i.next()).done) O.push(n.value);
          } catch (E) {
            o = { error: E };
          } finally {
            try {
              if (n && !n.done && (r = i["return"])) r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return O;
        };
      var i =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || arguments.length === 2)
            for (var i = 0, n = e.length, O; i < n; i++) {
              if (O || !(i in e)) {
                if (!O) O = Array.prototype.slice.call(e, 0, i);
                O[i] = e[i];
              }
            }
          return t.concat(O || Array.prototype.slice.call(e));
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.split = e.isPercent = e.unicodeString = e.unicodeChars = e.quotePattern = e.sortLength = void 0;
      function n(t, e) {
        return t.length !== e.length ? e.length - t.length : t === e ? 0 : t < e ? -1 : 1;
      }
      e.sortLength = n;
      function O(t) {
        return t.replace(/([\^$(){}+*?\-|\[\]\:\\])/g, "\\$1");
      }
      e.quotePattern = O;
      function o(t) {
        return Array.from(t).map(function (t) {
          return t.codePointAt(0);
        });
      }
      e.unicodeChars = o;
      function E(t) {
        return String.fromCodePoint.apply(String, i([], r(t), false));
      }
      e.unicodeString = E;
      function s(t) {
        return !!t.match(/%\s*$/);
      }
      e.isPercent = s;
      function a(t) {
        return t.trim().split(/\s+/);
      }
      e.split = a;
    },
  },
]);
