"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [3520],
  {
    93572: function (t, e, r) {
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
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            o = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && o >= t.length) t = void 0;
                return { value: t && t[o++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.HTMLAdaptor = void 0;
      var i = r(47810);
      var a = (function (t) {
        o(e, t);
        function e(e) {
          var r = t.call(this, e.document) || this;
          r.window = e;
          r.parser = new e.DOMParser();
          return r;
        }
        e.prototype.parse = function (t, e) {
          if (e === void 0) {
            e = "text/html";
          }
          return this.parser.parseFromString(t, e);
        };
        e.prototype.create = function (t, e) {
          return e ? this.document.createElementNS(e, t) : this.document.createElement(t);
        };
        e.prototype.text = function (t) {
          return this.document.createTextNode(t);
        };
        e.prototype.head = function (t) {
          return t.head || t;
        };
        e.prototype.body = function (t) {
          return t.body || t;
        };
        e.prototype.root = function (t) {
          return t.documentElement || t;
        };
        e.prototype.doctype = function (t) {
          return t.doctype ? "<!DOCTYPE ".concat(t.doctype.name, ">") : "";
        };
        e.prototype.tags = function (t, e, r) {
          if (r === void 0) {
            r = null;
          }
          var o = r ? t.getElementsByTagNameNS(r, e) : t.getElementsByTagName(e);
          return Array.from(o);
        };
        e.prototype.getElements = function (t, e) {
          var r, o;
          var i = [];
          try {
            for (var a = n(t), u = a.next(); !u.done; u = a.next()) {
              var l = u.value;
              if (typeof l === "string") {
                i = i.concat(Array.from(this.document.querySelectorAll(l)));
              } else if (Array.isArray(l)) {
                i = i.concat(Array.from(l));
              } else if (l instanceof this.window.NodeList || l instanceof this.window.HTMLCollection) {
                i = i.concat(Array.from(l));
              } else {
                i.push(l);
              }
            }
          } catch (p) {
            r = { error: p };
          } finally {
            try {
              if (u && !u.done && (o = a.return)) o.call(a);
            } finally {
              if (r) throw r.error;
            }
          }
          return i;
        };
        e.prototype.contains = function (t, e) {
          return t.contains(e);
        };
        e.prototype.parent = function (t) {
          return t.parentNode;
        };
        e.prototype.append = function (t, e) {
          return t.appendChild(e);
        };
        e.prototype.insert = function (t, e) {
          return this.parent(e).insertBefore(t, e);
        };
        e.prototype.remove = function (t) {
          return this.parent(t).removeChild(t);
        };
        e.prototype.replace = function (t, e) {
          return this.parent(e).replaceChild(t, e);
        };
        e.prototype.clone = function (t) {
          return t.cloneNode(true);
        };
        e.prototype.split = function (t, e) {
          return t.splitText(e);
        };
        e.prototype.next = function (t) {
          return t.nextSibling;
        };
        e.prototype.previous = function (t) {
          return t.previousSibling;
        };
        e.prototype.firstChild = function (t) {
          return t.firstChild;
        };
        e.prototype.lastChild = function (t) {
          return t.lastChild;
        };
        e.prototype.childNodes = function (t) {
          return Array.from(t.childNodes);
        };
        e.prototype.childNode = function (t, e) {
          return t.childNodes[e];
        };
        e.prototype.kind = function (t) {
          var e = t.nodeType;
          return e === 1 || e === 3 || e === 8 ? t.nodeName.toLowerCase() : "";
        };
        e.prototype.value = function (t) {
          return t.nodeValue || "";
        };
        e.prototype.textContent = function (t) {
          return t.textContent;
        };
        e.prototype.innerHTML = function (t) {
          return t.innerHTML;
        };
        e.prototype.outerHTML = function (t) {
          return t.outerHTML;
        };
        e.prototype.serializeXML = function (t) {
          var e = new this.window.XMLSerializer();
          return e.serializeToString(t);
        };
        e.prototype.setAttribute = function (t, e, r, o) {
          if (o === void 0) {
            o = null;
          }
          if (!o) {
            return t.setAttribute(e, r);
          }
          e = o.replace(/.*\//, "") + ":" + e.replace(/^.*:/, "");
          return t.setAttributeNS(o, e, r);
        };
        e.prototype.getAttribute = function (t, e) {
          return t.getAttribute(e);
        };
        e.prototype.removeAttribute = function (t, e) {
          return t.removeAttribute(e);
        };
        e.prototype.hasAttribute = function (t, e) {
          return t.hasAttribute(e);
        };
        e.prototype.allAttributes = function (t) {
          return Array.from(t.attributes).map(function (t) {
            return { name: t.name, value: t.value };
          });
        };
        e.prototype.addClass = function (t, e) {
          if (t.classList) {
            t.classList.add(e);
          } else {
            t.className = (t.className + " " + e).trim();
          }
        };
        e.prototype.removeClass = function (t, e) {
          if (t.classList) {
            t.classList.remove(e);
          } else {
            t.className = t.className
              .split(/ /)
              .filter(function (t) {
                return t !== e;
              })
              .join(" ");
          }
        };
        e.prototype.hasClass = function (t, e) {
          if (t.classList) {
            return t.classList.contains(e);
          }
          return t.className.split(/ /).indexOf(e) >= 0;
        };
        e.prototype.setStyle = function (t, e, r) {
          t.style[e] = r;
        };
        e.prototype.getStyle = function (t, e) {
          return t.style[e];
        };
        e.prototype.allStyles = function (t) {
          return t.style.cssText;
        };
        e.prototype.insertRules = function (t, e) {
          var r, o;
          try {
            for (var i = n(e.reverse()), a = i.next(); !a.done; a = i.next()) {
              var u = a.value;
              try {
                t.sheet.insertRule(u, 0);
              } catch (l) {
                console.warn("MathJax: can't insert css rule '".concat(u, "': ").concat(l.message));
              }
            }
          } catch (p) {
            r = { error: p };
          } finally {
            try {
              if (a && !a.done && (o = i.return)) o.call(i);
            } finally {
              if (r) throw r.error;
            }
          }
        };
        e.prototype.fontSize = function (t) {
          var e = this.window.getComputedStyle(t);
          return parseFloat(e.fontSize);
        };
        e.prototype.fontFamily = function (t) {
          var e = this.window.getComputedStyle(t);
          return e.fontFamily || "";
        };
        e.prototype.nodeSize = function (t, e, r) {
          if (e === void 0) {
            e = 1;
          }
          if (r === void 0) {
            r = false;
          }
          if (r && t.getBBox) {
            var o = t.getBBox(),
              n = o.width,
              i = o.height;
            return [n / e, i / e];
          }
          return [t.offsetWidth / e, t.offsetHeight / e];
        };
        e.prototype.nodeBBox = function (t) {
          var e = t.getBoundingClientRect(),
            r = e.left,
            o = e.right,
            n = e.top,
            i = e.bottom;
          return { left: r, right: o, top: n, bottom: i };
        };
        return e;
      })(i.AbstractDOMAdaptor);
      e.HTMLAdaptor = a;
    },
    53520: (t, e, r) => {
      Object.defineProperty(e, "__esModule", { value: true });
      e.browserAdaptor = void 0;
      var o = r(93572);
      function n() {
        return new o.HTMLAdaptor(window);
      }
      e.browserAdaptor = n;
    },
    47810: function (t, e) {
      var r =
        (this && this.__values) ||
        function (t) {
          var e = typeof Symbol === "function" && Symbol.iterator,
            r = e && t[e],
            o = 0;
          if (r) return r.call(t);
          if (t && typeof t.length === "number")
            return {
              next: function () {
                if (t && o >= t.length) t = void 0;
                return { value: t && t[o++], done: !t };
              },
            };
          throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      Object.defineProperty(e, "__esModule", { value: true });
      e.AbstractDOMAdaptor = void 0;
      var o = (function () {
        function t(t) {
          if (t === void 0) {
            t = null;
          }
          this.document = t;
        }
        t.prototype.node = function (t, e, o, n) {
          var i, a;
          if (e === void 0) {
            e = {};
          }
          if (o === void 0) {
            o = [];
          }
          var u = this.create(t, n);
          this.setAttributes(u, e);
          try {
            for (var l = r(o), p = l.next(); !p.done; p = l.next()) {
              var s = p.value;
              this.append(u, s);
            }
          } catch (c) {
            i = { error: c };
          } finally {
            try {
              if (p && !p.done && (a = l.return)) a.call(l);
            } finally {
              if (i) throw i.error;
            }
          }
          return u;
        };
        t.prototype.setAttributes = function (t, e) {
          var o, n, i, a, u, l;
          if (e.style && typeof e.style !== "string") {
            try {
              for (var p = r(Object.keys(e.style)), s = p.next(); !s.done; s = p.next()) {
                var c = s.value;
                this.setStyle(
                  t,
                  c.replace(/-([a-z])/g, function (t, e) {
                    return e.toUpperCase();
                  }),
                  e.style[c]
                );
              }
            } catch (v) {
              o = { error: v };
            } finally {
              try {
                if (s && !s.done && (n = p.return)) n.call(p);
              } finally {
                if (o) throw o.error;
              }
            }
          }
          if (e.properties) {
            try {
              for (var f = r(Object.keys(e.properties)), y = f.next(); !y.done; y = f.next()) {
                var c = y.value;
                t[c] = e.properties[c];
              }
            } catch (m) {
              i = { error: m };
            } finally {
              try {
                if (y && !y.done && (a = f.return)) a.call(f);
              } finally {
                if (i) throw i.error;
              }
            }
          }
          try {
            for (var d = r(Object.keys(e)), h = d.next(); !h.done; h = d.next()) {
              var c = h.value;
              if ((c !== "style" || typeof e.style === "string") && c !== "properties") {
                this.setAttribute(t, c, e[c]);
              }
            }
          } catch (b) {
            u = { error: b };
          } finally {
            try {
              if (h && !h.done && (l = d.return)) l.call(d);
            } finally {
              if (u) throw u.error;
            }
          }
        };
        t.prototype.replace = function (t, e) {
          this.insert(t, e);
          this.remove(e);
          return e;
        };
        t.prototype.childNode = function (t, e) {
          return this.childNodes(t)[e];
        };
        t.prototype.allClasses = function (t) {
          var e = this.getAttribute(t, "class");
          return !e ? [] : e.replace(/  +/g, " ").replace(/^ /, "").replace(/ $/, "").split(/ /);
        };
        return t;
      })();
      e.AbstractDOMAdaptor = o;
    },
  },
]);
