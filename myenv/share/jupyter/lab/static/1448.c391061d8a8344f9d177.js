"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1448],
  {
    14616: (t, e, r) => {
      var o;
      Object.defineProperty(e, "__esModule", { value: true });
      e.MML = void 0;
      var n = r(18426);
      var i = r(27225);
      var a = r(16689);
      var l = r(94411);
      var u = r(5213);
      var p = r(86237);
      var s = r(4254);
      var c = r(17931);
      var f = r(68550);
      var y = r(294);
      var M = r(53162);
      var d = r(68091);
      var h = r(95546);
      var m = r(53583);
      var b = r(38480);
      var v = r(15837);
      var _ = r(90719);
      var g = r(22599);
      var O = r(79024);
      var j = r(74529);
      var k = r(75723);
      var P = r(13195);
      var w = r(7252);
      var A = r(2117);
      var N = r(49016);
      var x = r(89);
      var I = r(53698);
      var C = r(83954);
      var T = r(19223);
      var E = r(66846);
      var S = r(67801);
      e.MML =
        ((o = {}),
        (o[i.MmlMath.prototype.kind] = i.MmlMath),
        (o[a.MmlMi.prototype.kind] = a.MmlMi),
        (o[l.MmlMn.prototype.kind] = l.MmlMn),
        (o[u.MmlMo.prototype.kind] = u.MmlMo),
        (o[p.MmlMtext.prototype.kind] = p.MmlMtext),
        (o[s.MmlMspace.prototype.kind] = s.MmlMspace),
        (o[c.MmlMs.prototype.kind] = c.MmlMs),
        (o[f.MmlMrow.prototype.kind] = f.MmlMrow),
        (o[f.MmlInferredMrow.prototype.kind] = f.MmlInferredMrow),
        (o[y.MmlMfrac.prototype.kind] = y.MmlMfrac),
        (o[M.MmlMsqrt.prototype.kind] = M.MmlMsqrt),
        (o[d.MmlMroot.prototype.kind] = d.MmlMroot),
        (o[h.MmlMstyle.prototype.kind] = h.MmlMstyle),
        (o[m.MmlMerror.prototype.kind] = m.MmlMerror),
        (o[b.MmlMpadded.prototype.kind] = b.MmlMpadded),
        (o[v.MmlMphantom.prototype.kind] = v.MmlMphantom),
        (o[_.MmlMfenced.prototype.kind] = _.MmlMfenced),
        (o[g.MmlMenclose.prototype.kind] = g.MmlMenclose),
        (o[O.MmlMaction.prototype.kind] = O.MmlMaction),
        (o[j.MmlMsub.prototype.kind] = j.MmlMsub),
        (o[j.MmlMsup.prototype.kind] = j.MmlMsup),
        (o[j.MmlMsubsup.prototype.kind] = j.MmlMsubsup),
        (o[k.MmlMunder.prototype.kind] = k.MmlMunder),
        (o[k.MmlMover.prototype.kind] = k.MmlMover),
        (o[k.MmlMunderover.prototype.kind] = k.MmlMunderover),
        (o[P.MmlMmultiscripts.prototype.kind] = P.MmlMmultiscripts),
        (o[P.MmlMprescripts.prototype.kind] = P.MmlMprescripts),
        (o[P.MmlNone.prototype.kind] = P.MmlNone),
        (o[w.MmlMtable.prototype.kind] = w.MmlMtable),
        (o[A.MmlMlabeledtr.prototype.kind] = A.MmlMlabeledtr),
        (o[A.MmlMtr.prototype.kind] = A.MmlMtr),
        (o[N.MmlMtd.prototype.kind] = N.MmlMtd),
        (o[x.MmlMaligngroup.prototype.kind] = x.MmlMaligngroup),
        (o[I.MmlMalignmark.prototype.kind] = I.MmlMalignmark),
        (o[C.MmlMglyph.prototype.kind] = C.MmlMglyph),
        (o[T.MmlSemantics.prototype.kind] = T.MmlSemantics),
        (o[T.MmlAnnotation.prototype.kind] = T.MmlAnnotation),
        (o[T.MmlAnnotationXML.prototype.kind] = T.MmlAnnotationXML),
        (o[E.TeXAtom.prototype.kind] = E.TeXAtom),
        (o[S.MathChoice.prototype.kind] = S.MathChoice),
        (o[n.TextNode.prototype.kind] = n.TextNode),
        (o[n.XMLNode.prototype.kind] = n.XMLNode),
        o);
    },
    61448: function (t, e, r) {
      var o =
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
            function o() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((o.prototype = r.prototype), new o());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlFactory = void 0;
      var n = r(88100);
      var i = r(14616);
      var a = (function (t) {
        o(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "MML", {
          get: function () {
            return this.node;
          },
          enumerable: false,
          configurable: true,
        });
        e.defaultNodes = i.MML;
        return e;
      })(n.AbstractNodeFactory);
      e.MmlFactory = a;
    },
    89: function (t, e, r) {
      var o =
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
            function o() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((o.prototype = r.prototype), new o());
          };
        })();
      var n =
        (this && this.__assign) ||
        function () {
          n =
            Object.assign ||
            function (t) {
              for (var e, r = 1, o = arguments.length; r < o; r++) {
                e = arguments[r];
                for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) t[n] = e[n];
              }
              return t;
            };
          return n.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMaligngroup = void 0;
      var i = r(18426);
      var a = r(7013);
      var l = (function (t) {
        o(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "maligngroup";
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
        e.prototype.setChildInheritedAttributes = function (e, r, o, n) {
          e = this.addInheritedAttributes(e, this.attributes.getAllAttributes());
          t.prototype.setChildInheritedAttributes.call(this, e, r, o, n);
        };
        e.defaults = n(n({}, i.AbstractMmlLayoutNode.defaults), { groupalign: a.INHERIT });
        return e;
      })(i.AbstractMmlLayoutNode);
      e.MmlMaligngroup = l;
    },
    53698: function (t, e, r) {
      var o =
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
            function o() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((o.prototype = r.prototype), new o());
          };
        })();
      var n =
        (this && this.__assign) ||
        function () {
          n =
            Object.assign ||
            function (t) {
              for (var e, r = 1, o = arguments.length; r < o; r++) {
                e = arguments[r];
                for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) t[n] = e[n];
              }
              return t;
            };
          return n.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMalignmark = void 0;
      var i = r(18426);
      var a = (function (t) {
        o(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "malignmark";
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
        e.defaults = n(n({}, i.AbstractMmlNode.defaults), { edge: "left" });
        return e;
      })(i.AbstractMmlNode);
      e.MmlMalignmark = a;
    },
    67801: function (t, e, r) {
      var o =
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
            function o() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((o.prototype = r.prototype), new o());
          };
        })();
      var n =
        (this && this.__assign) ||
        function () {
          n =
            Object.assign ||
            function (t) {
              for (var e, r = 1, o = arguments.length; r < o; r++) {
                e = arguments[r];
                for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) t[n] = e[n];
              }
              return t;
            };
          return n.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MathChoice = void 0;
      var i = r(18426);
      var a = (function (t) {
        o(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "MathChoice";
          },
          enumerable: false,
          configurable: true,
        });
        Object.defineProperty(e.prototype, "arity", {
          get: function () {
            return 4;
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
        e.prototype.setInheritedAttributes = function (t, e, r, o) {
          var n = e ? 0 : Math.max(0, Math.min(r, 2)) + 1;
          var i = this.childNodes[n] || this.factory.create("mrow");
          this.parent.replaceChild(i, this);
          i.setInheritedAttributes(t, e, r, o);
        };
        e.defaults = n({}, i.AbstractMmlBaseNode.defaults);
        return e;
      })(i.AbstractMmlBaseNode);
      e.MathChoice = a;
    },
    53583: function (t, e, r) {
      var o =
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
            function o() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((o.prototype = r.prototype), new o());
          };
        })();
      var n =
        (this && this.__assign) ||
        function () {
          n =
            Object.assign ||
            function (t) {
              for (var e, r = 1, o = arguments.length; r < o; r++) {
                e = arguments[r];
                for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) t[n] = e[n];
              }
              return t;
            };
          return n.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMerror = void 0;
      var i = r(18426);
      var a = (function (t) {
        o(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.texclass = i.TEXCLASS.ORD;
          return e;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "merror";
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
        e.defaults = n({}, i.AbstractMmlNode.defaults);
        return e;
      })(i.AbstractMmlNode);
      e.MmlMerror = a;
    },
    15837: function (t, e, r) {
      var o =
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
            function o() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((o.prototype = r.prototype), new o());
          };
        })();
      var n =
        (this && this.__assign) ||
        function () {
          n =
            Object.assign ||
            function (t) {
              for (var e, r = 1, o = arguments.length; r < o; r++) {
                e = arguments[r];
                for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) t[n] = e[n];
              }
              return t;
            };
          return n.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMphantom = void 0;
      var i = r(18426);
      var a = (function (t) {
        o(e, t);
        function e() {
          var e = (t !== null && t.apply(this, arguments)) || this;
          e.texclass = i.TEXCLASS.ORD;
          return e;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mphantom";
          },
          enumerable: false,
          configurable: true,
        });
        e.defaults = n({}, i.AbstractMmlLayoutNode.defaults);
        return e;
      })(i.AbstractMmlLayoutNode);
      e.MmlMphantom = a;
    },
    95546: function (t, e, r) {
      var o =
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
            function o() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((o.prototype = r.prototype), new o());
          };
        })();
      var n =
        (this && this.__assign) ||
        function () {
          n =
            Object.assign ||
            function (t) {
              for (var e, r = 1, o = arguments.length; r < o; r++) {
                e = arguments[r];
                for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) t[n] = e[n];
              }
              return t;
            };
          return n.apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.MmlMstyle = void 0;
      var i = r(18426);
      var a = r(7013);
      var l = (function (t) {
        o(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        Object.defineProperty(e.prototype, "kind", {
          get: function () {
            return "mstyle";
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
        e.prototype.setChildInheritedAttributes = function (t, e, r, o) {
          var n = this.attributes.getExplicit("scriptlevel");
          if (n != null) {
            n = n.toString();
            if (n.match(/^\s*[-+]/)) {
              r += parseInt(n);
            } else {
              r = parseInt(n);
            }
            o = false;
          }
          var i = this.attributes.getExplicit("displaystyle");
          if (i != null) {
            e = i === true;
            o = false;
          }
          var a = this.attributes.getExplicit("data-cramped");
          if (a != null) {
            o = a;
          }
          t = this.addInheritedAttributes(t, this.attributes.getAllAttributes());
          this.childNodes[0].setInheritedAttributes(t, e, r, o);
        };
        e.defaults = n(n({}, i.AbstractMmlLayoutNode.defaults), {
          scriptlevel: a.INHERIT,
          displaystyle: a.INHERIT,
          scriptsizemultiplier: 1 / Math.sqrt(2),
          scriptminsize: "8px",
          mathbackground: a.INHERIT,
          mathcolor: a.INHERIT,
          dir: a.INHERIT,
          infixlinebreakstyle: "before",
        });
        return e;
      })(i.AbstractMmlLayoutNode);
      e.MmlMstyle = l;
    },
    88100: function (t, e, r) {
      var o =
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
            function o() {
              this.constructor = e;
            }
            e.prototype = r === null ? Object.create(r) : ((o.prototype = r.prototype), new o());
          };
        })();
      Object.defineProperty(e, "__esModule", { value: true });
      e.AbstractNodeFactory = void 0;
      var n = r(86161);
      var i = (function (t) {
        o(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        e.prototype.create = function (t, e, r) {
          if (e === void 0) {
            e = {};
          }
          if (r === void 0) {
            r = [];
          }
          return this.node[t](e, r);
        };
        return e;
      })(n.AbstractFactory);
      e.AbstractNodeFactory = i;
    },
  },
]);
