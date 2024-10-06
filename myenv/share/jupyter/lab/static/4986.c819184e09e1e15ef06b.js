"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [4986],
  {
    54986: (t, e, i) => {
      i.r(e);
      i.d(e, {
        BidiSpan: () => qt,
        BlockInfo: () => Ji,
        BlockType: () => xt,
        Decoration: () => Mt,
        Direction: () => Lt,
        EditorView: () => js,
        GutterMarker: () => qn,
        MatchDecorator: () => Vo,
        RectangleMarker: () => fo,
        ViewPlugin: () => ve,
        ViewUpdate: () => Re,
        WidgetType: () => St,
        __test: () => yr,
        closeHoverTooltips: () => Hn,
        crosshairCursor: () => dn,
        drawSelection: () => xo,
        dropCursor: () => Lo,
        getDrawSelectionConfig: () => Mo,
        getPanel: () => Fn,
        getTooltip: () => Rn,
        gutter: () => Gn,
        gutterLineClass: () => Yn,
        gutters: () => $n,
        hasHoverTooltips: () => Bn,
        highlightActiveLine: () => Jo,
        highlightActiveLineGutter: () => dr,
        highlightSpecialChars: () => qo,
        highlightTrailingWhitespace: () => br,
        highlightWhitespace: () => wr,
        hoverTooltip: () => En,
        keymap: () => so,
        layer: () => bo,
        lineNumberMarkers: () => sr,
        lineNumbers: () => ar,
        logException: () => pe,
        panels: () => Nn,
        placeholder: () => sn,
        rectangularSelection: () => hn,
        repositionTooltips: () => Pn,
        runScopeHandlers: () => ro,
        scrollPastEnd: () => Qo,
        showPanel: () => In,
        showTooltip: () => xn,
        tooltips: () => gn,
      });
      var s = i(37496);
      var o = i(67737);
      var n = {
        8: "Backspace",
        9: "Tab",
        10: "Enter",
        12: "NumLock",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        44: "PrintScreen",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Meta",
        92: "Meta",
        106: "*",
        107: "+",
        108: ",",
        109: "-",
        110: ".",
        111: "/",
        144: "NumLock",
        145: "ScrollLock",
        160: "Shift",
        161: "Shift",
        162: "Control",
        163: "Control",
        164: "Alt",
        165: "Alt",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
      };
      var r = {
        48: ")",
        49: "!",
        50: "@",
        51: "#",
        52: "$",
        53: "%",
        54: "^",
        55: "&",
        56: "*",
        57: "(",
        59: ":",
        61: "+",
        173: "_",
        186: ":",
        187: "+",
        188: "<",
        189: "_",
        190: ">",
        191: "?",
        192: "~",
        219: "{",
        220: "|",
        221: "}",
        222: '"',
      };
      var l = typeof navigator != "undefined" && /Chrome\/(\d+)/.exec(navigator.userAgent);
      var a = typeof navigator != "undefined" && /Gecko\/\d+/.test(navigator.userAgent);
      var h = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
      var c = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
      var f = h || (l && +l[1] < 57);
      for (var d = 0; d < 10; d++) n[48 + d] = n[96 + d] = String(d);
      for (var d = 1; d <= 24; d++) n[d + 111] = "F" + d;
      for (var d = 65; d <= 90; d++) {
        n[d] = String.fromCharCode(d + 32);
        r[d] = String.fromCharCode(d);
      }
      for (var u in n) if (!r.hasOwnProperty(u)) r[u] = n[u];
      function p(t) {
        var e = (f && (t.ctrlKey || t.altKey || t.metaKey)) || (c && t.shiftKey && t.key && t.key.length == 1) || t.key == "Unidentified";
        var i = (!e && t.key) || (t.shiftKey ? r : n)[t.keyCode] || t.key || "Unidentified";
        if (i == "Esc") i = "Escape";
        if (i == "Del") i = "Delete";
        if (i == "Left") i = "ArrowLeft";
        if (i == "Up") i = "ArrowUp";
        if (i == "Right") i = "ArrowRight";
        if (i == "Down") i = "ArrowDown";
        return i;
      }
      function g(t) {
        let e;
        if (t.nodeType == 11) {
          e = t.getSelection ? t : t.ownerDocument;
        } else {
          e = t;
        }
        return e.getSelection();
      }
      function m(t, e) {
        return e ? t == e || t.contains(e.nodeType != 1 ? e.parentNode : e) : false;
      }
      function w(t) {
        let e = t.activeElement;
        while (e && e.shadowRoot) e = e.shadowRoot.activeElement;
        return e;
      }
      function v(t, e) {
        if (!e.anchorNode) return false;
        try {
          return m(t, e.anchorNode);
        } catch (i) {
          return false;
        }
      }
      function b(t) {
        if (t.nodeType == 3) return L(t, 0, t.nodeValue.length).getClientRects();
        else if (t.nodeType == 1) return t.getClientRects();
        else return [];
      }
      function y(t, e, i, s) {
        return i ? x(t, e, i, s, -1) || x(t, e, i, s, 1) : false;
      }
      function S(t) {
        for (var e = 0; ; e++) {
          t = t.previousSibling;
          if (!t) return e;
        }
      }
      function x(t, e, i, s, o) {
        for (;;) {
          if (t == i && e == s) return true;
          if (e == (o < 0 ? 0 : M(t))) {
            if (t.nodeName == "DIV") return false;
            let i = t.parentNode;
            if (!i || i.nodeType != 1) return false;
            e = S(t) + (o < 0 ? 0 : 1);
            t = i;
          } else if (t.nodeType == 1) {
            t = t.childNodes[e + (o < 0 ? -1 : 0)];
            if (t.nodeType == 1 && t.contentEditable == "false") return false;
            e = o < 0 ? M(t) : 0;
          } else {
            return false;
          }
        }
      }
      function M(t) {
        return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
      }
      function k(t, e) {
        let i = e ? t.left : t.right;
        return { left: i, right: i, top: t.top, bottom: t.bottom };
      }
      function C(t) {
        let e = t.visualViewport;
        if (e) return { left: 0, right: e.width, top: 0, bottom: e.height };
        return { left: 0, right: t.innerWidth, top: 0, bottom: t.innerHeight };
      }
      function A(t, e) {
        let i = e.width / t.offsetWidth;
        let s = e.height / t.offsetHeight;
        if ((i > 0.995 && i < 1.005) || !isFinite(i) || Math.abs(e.width - t.offsetWidth) < 1) i = 1;
        if ((s > 0.995 && s < 1.005) || !isFinite(s) || Math.abs(e.height - t.offsetHeight) < 1) s = 1;
        return { scaleX: i, scaleY: s };
      }
      function D(t, e, i, s, o, n, r, l) {
        let a = t.ownerDocument,
          h = a.defaultView || window;
        for (let c = t, f = false; c && !f; ) {
          if (c.nodeType == 1) {
            let t,
              d = c == a.body;
            let u = 1,
              p = 1;
            if (d) {
              t = C(h);
            } else {
              if (/^(fixed|sticky)$/.test(getComputedStyle(c).position)) f = true;
              if (c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
                c = c.assignedSlot || c.parentNode;
                continue;
              }
              let e = c.getBoundingClientRect();
              ({ scaleX: u, scaleY: p } = A(c, e));
              t = { left: e.left, right: e.left + c.clientWidth * u, top: e.top, bottom: e.top + c.clientHeight * p };
            }
            let g = 0,
              m = 0;
            if (o == "nearest") {
              if (e.top < t.top) {
                m = -(t.top - e.top + r);
                if (i > 0 && e.bottom > t.bottom + m) m = e.bottom - t.bottom + m + r;
              } else if (e.bottom > t.bottom) {
                m = e.bottom - t.bottom + r;
                if (i < 0 && e.top - m < t.top) m = -(t.top + m - e.top + r);
              }
            } else {
              let s = e.bottom - e.top,
                n = t.bottom - t.top;
              let l = o == "center" && s <= n ? e.top + s / 2 - n / 2 : o == "start" || (o == "center" && i < 0) ? e.top - r : e.bottom - n + r;
              m = l - t.top;
            }
            if (s == "nearest") {
              if (e.left < t.left) {
                g = -(t.left - e.left + n);
                if (i > 0 && e.right > t.right + g) g = e.right - t.right + g + n;
              } else if (e.right > t.right) {
                g = e.right - t.right + n;
                if (i < 0 && e.left < t.left + g) g = -(t.left + g - e.left + n);
              }
            } else {
              let i =
                s == "center"
                  ? e.left + (e.right - e.left) / 2 - (t.right - t.left) / 2
                  : (s == "start") == l
                    ? e.left - n
                    : e.right - (t.right - t.left) + n;
              g = i - t.left;
            }
            if (g || m) {
              if (d) {
                h.scrollBy(g, m);
              } else {
                let t = 0,
                  i = 0;
                if (m) {
                  let t = c.scrollTop;
                  c.scrollTop += m / p;
                  i = (c.scrollTop - t) * p;
                }
                if (g) {
                  let e = c.scrollLeft;
                  c.scrollLeft += g / u;
                  t = (c.scrollLeft - e) * u;
                }
                e = { left: e.left - t, top: e.top - i, right: e.right - t, bottom: e.bottom - i };
                if (t && Math.abs(t - g) < 1) s = "nearest";
                if (i && Math.abs(i - m) < 1) o = "nearest";
              }
            }
            if (d) break;
            c = c.assignedSlot || c.parentNode;
          } else if (c.nodeType == 11) {
            c = c.host;
          } else {
            break;
          }
        }
      }
      function T(t) {
        let e = t.ownerDocument;
        for (let i = t.parentNode; i; ) {
          if (i == e.body) {
            break;
          } else if (i.nodeType == 1) {
            if (i.scrollHeight > i.clientHeight || i.scrollWidth > i.clientWidth) return i;
            i = i.assignedSlot || i.parentNode;
          } else if (i.nodeType == 11) {
            i = i.host;
          } else {
            break;
          }
        }
        return null;
      }
      class O {
        constructor() {
          this.anchorNode = null;
          this.anchorOffset = 0;
          this.focusNode = null;
          this.focusOffset = 0;
        }
        eq(t) {
          return (
            this.anchorNode == t.anchorNode &&
            this.anchorOffset == t.anchorOffset &&
            this.focusNode == t.focusNode &&
            this.focusOffset == t.focusOffset
          );
        }
        setRange(t) {
          let { anchorNode: e, focusNode: i } = t;
          this.set(e, Math.min(t.anchorOffset, e ? M(e) : 0), i, Math.min(t.focusOffset, i ? M(i) : 0));
        }
        set(t, e, i, s) {
          this.anchorNode = t;
          this.anchorOffset = e;
          this.focusNode = i;
          this.focusOffset = s;
        }
      }
      let E = null;
      function R(t) {
        if (t.setActive) return t.setActive();
        if (E) return t.focus(E);
        let e = [];
        for (let i = t; i; i = i.parentNode) {
          e.push(i, i.scrollTop, i.scrollLeft);
          if (i == i.ownerDocument) break;
        }
        t.focus(
          E == null
            ? {
                get preventScroll() {
                  E = { preventScroll: true };
                  return true;
                },
              }
            : undefined
        );
        if (!E) {
          E = false;
          for (let t = 0; t < e.length; ) {
            let i = e[t++],
              s = e[t++],
              o = e[t++];
            if (i.scrollTop != s) i.scrollTop = s;
            if (i.scrollLeft != o) i.scrollLeft = o;
          }
        }
      }
      let B;
      function L(t, e, i = e) {
        let s = B || (B = document.createRange());
        s.setEnd(t, i);
        s.setStart(t, e);
        return s;
      }
      function H(t, e, i, s) {
        let o = { key: e, code: e, keyCode: i, which: i, cancelable: true };
        if (s) ({ altKey: o.altKey, ctrlKey: o.ctrlKey, shiftKey: o.shiftKey, metaKey: o.metaKey } = s);
        let n = new KeyboardEvent("keydown", o);
        n.synthetic = true;
        t.dispatchEvent(n);
        let r = new KeyboardEvent("keyup", o);
        r.synthetic = true;
        t.dispatchEvent(r);
        return n.defaultPrevented || r.defaultPrevented;
      }
      function P(t) {
        while (t) {
          if (t && (t.nodeType == 9 || (t.nodeType == 11 && t.host))) return t;
          t = t.assignedSlot || t.parentNode;
        }
        return null;
      }
      function V(t) {
        while (t.attributes.length) t.removeAttributeNode(t.attributes[0]);
      }
      function N(t, e) {
        let i = e.focusNode,
          s = e.focusOffset;
        if (!i || e.anchorNode != i || e.anchorOffset != s) return false;
        s = Math.min(s, M(i));
        for (;;) {
          if (s) {
            if (i.nodeType != 1) return false;
            let t = i.childNodes[s - 1];
            if (t.contentEditable == "false") s--;
            else {
              i = t;
              s = M(i);
            }
          } else if (i == t) {
            return true;
          } else {
            s = S(i);
            i = i.parentNode;
          }
        }
      }
      function F(t) {
        return t.scrollTop > Math.max(1, t.scrollHeight - t.clientHeight - 4);
      }
      class W {
        constructor(t, e, i = true) {
          this.node = t;
          this.offset = e;
          this.precise = i;
        }
        static before(t, e) {
          return new W(t.parentNode, S(t), e);
        }
        static after(t, e) {
          return new W(t.parentNode, S(t) + 1, e);
        }
      }
      const z = [];
      class K {
        constructor() {
          this.parent = null;
          this.dom = null;
          this.flags = 2;
        }
        get overrideDOMText() {
          return null;
        }
        get posAtStart() {
          return this.parent ? this.parent.posBefore(this) : 0;
        }
        get posAtEnd() {
          return this.posAtStart + this.length;
        }
        posBefore(t) {
          let e = this.posAtStart;
          for (let i of this.children) {
            if (i == t) return e;
            e += i.length + i.breakAfter;
          }
          throw new RangeError("Invalid child in posBefore");
        }
        posAfter(t) {
          return this.posBefore(t) + t.length;
        }
        sync(t, e) {
          if (this.flags & 2) {
            let i = this.dom;
            let s = null,
              o;
            for (let n of this.children) {
              if (n.flags & 7) {
                if (!n.dom && (o = s ? s.nextSibling : i.firstChild)) {
                  let t = K.get(o);
                  if (!t || (!t.parent && t.canReuseDOM(n))) n.reuseDOM(o);
                }
                n.sync(t, e);
                n.flags &= ~7;
              }
              o = s ? s.nextSibling : i.firstChild;
              if (e && !e.written && e.node == i && o != n.dom) e.written = true;
              if (n.dom.parentNode == i) {
                while (o && o != n.dom) o = I(o);
              } else {
                i.insertBefore(n.dom, o);
              }
              s = n.dom;
            }
            o = s ? s.nextSibling : i.firstChild;
            if (o && e && e.node == i) e.written = true;
            while (o) o = I(o);
          } else if (this.flags & 1) {
            for (let i of this.children)
              if (i.flags & 7) {
                i.sync(t, e);
                i.flags &= ~7;
              }
          }
        }
        reuseDOM(t) {}
        localPosFromDOM(t, e) {
          let i;
          if (t == this.dom) {
            i = this.dom.childNodes[e];
          } else {
            let s = M(t) == 0 ? 0 : e == 0 ? -1 : 1;
            for (;;) {
              let e = t.parentNode;
              if (e == this.dom) break;
              if (s == 0 && e.firstChild != e.lastChild) {
                if (t == e.firstChild) s = -1;
                else s = 1;
              }
              t = e;
            }
            if (s < 0) i = t;
            else i = t.nextSibling;
          }
          if (i == this.dom.firstChild) return 0;
          while (i && !K.get(i)) i = i.nextSibling;
          if (!i) return this.length;
          for (let s = 0, o = 0; ; s++) {
            let t = this.children[s];
            if (t.dom == i) return o;
            o += t.length + t.breakAfter;
          }
        }
        domBoundsAround(t, e, i = 0) {
          let s = -1,
            o = -1,
            n = -1,
            r = -1;
          for (let l = 0, a = i, h = i; l < this.children.length; l++) {
            let i = this.children[l],
              c = a + i.length;
            if (a < t && c > e) return i.domBoundsAround(t, e, a);
            if (c >= t && s == -1) {
              s = l;
              o = a;
            }
            if (a > e && i.dom.parentNode == this.dom) {
              n = l;
              r = h;
              break;
            }
            h = c;
            a = c + i.breakAfter;
          }
          return {
            from: o,
            to: r < 0 ? i + this.length : r,
            startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild,
            endDOM: n < this.children.length && n >= 0 ? this.children[n].dom : null,
          };
        }
        markDirty(t = false) {
          this.flags |= 2;
          this.markParentsDirty(t);
        }
        markParentsDirty(t) {
          for (let e = this.parent; e; e = e.parent) {
            if (t) e.flags |= 2;
            if (e.flags & 1) return;
            e.flags |= 1;
            t = false;
          }
        }
        setParent(t) {
          if (this.parent != t) {
            this.parent = t;
            if (this.flags & 7) this.markParentsDirty(true);
          }
        }
        setDOM(t) {
          if (this.dom == t) return;
          if (this.dom) this.dom.cmView = null;
          this.dom = t;
          t.cmView = this;
        }
        get rootView() {
          for (let t = this; ; ) {
            let e = t.parent;
            if (!e) return t;
            t = e;
          }
        }
        replaceChildren(t, e, i = z) {
          this.markDirty();
          for (let s = t; s < e; s++) {
            let t = this.children[s];
            if (t.parent == this && i.indexOf(t) < 0) t.destroy();
          }
          this.children.splice(t, e - t, ...i);
          for (let s = 0; s < i.length; s++) i[s].setParent(this);
        }
        ignoreMutation(t) {
          return false;
        }
        ignoreEvent(t) {
          return false;
        }
        childCursor(t = this.length) {
          return new q(this.children, t, this.children.length);
        }
        childPos(t, e = 1) {
          return this.childCursor().findPos(t, e);
        }
        toString() {
          let t = this.constructor.name.replace("View", "");
          return (
            t +
            (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (t == "Text" ? this.text : this.length) + "]" : "") +
            (this.breakAfter ? "#" : "")
          );
        }
        static get(t) {
          return t.cmView;
        }
        get isEditable() {
          return true;
        }
        get isWidget() {
          return false;
        }
        get isHidden() {
          return false;
        }
        merge(t, e, i, s, o, n) {
          return false;
        }
        become(t) {
          return false;
        }
        canReuseDOM(t) {
          return t.constructor == this.constructor && !((this.flags | t.flags) & 8);
        }
        getSide() {
          return 0;
        }
        destroy() {
          for (let t of this.children) if (t.parent == this) t.destroy();
          this.parent = null;
        }
      }
      K.prototype.breakAfter = 0;
      function I(t) {
        let e = t.nextSibling;
        t.parentNode.removeChild(t);
        return e;
      }
      class q {
        constructor(t, e, i) {
          this.children = t;
          this.pos = e;
          this.i = i;
          this.off = 0;
        }
        findPos(t, e = 1) {
          for (;;) {
            if (t > this.pos || (t == this.pos && (e > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))) {
              this.off = t - this.pos;
              return this;
            }
            let i = this.children[--this.i];
            this.pos -= i.length + i.breakAfter;
          }
        }
      }
      function Y(t, e, i, s, o, n, r, l, a) {
        let { children: h } = t;
        let c = h.length ? h[e] : null;
        let f = n.length ? n[n.length - 1] : null;
        let d = f ? f.breakAfter : r;
        if (e == s && c && !r && !d && n.length < 2 && c.merge(i, o, n.length ? f : null, i == 0, l, a)) return;
        if (s < h.length) {
          let t = h[s];
          if (t && (o < t.length || (t.breakAfter && (f === null || f === void 0 ? void 0 : f.breakAfter)))) {
            if (e == s) {
              t = t.split(o);
              o = 0;
            }
            if (!d && f && t.merge(0, o, f, true, 0, a)) {
              n[n.length - 1] = t;
            } else {
              if (o || (t.children.length && !t.children[0].length)) t.merge(0, o, null, false, 0, a);
              n.push(t);
            }
          } else if (t === null || t === void 0 ? void 0 : t.breakAfter) {
            if (f) f.breakAfter = 1;
            else r = 1;
          }
          s++;
        }
        if (c) {
          c.breakAfter = r;
          if (i > 0) {
            if (!r && n.length && c.merge(i, c.length, n[0], false, l, 0)) {
              c.breakAfter = n.shift().breakAfter;
            } else if (i < c.length || (c.children.length && c.children[c.children.length - 1].length == 0)) {
              c.merge(i, c.length, null, false, l, 0);
            }
            e++;
          }
        }
        while (e < s && n.length) {
          if (h[s - 1].become(n[n.length - 1])) {
            s--;
            n.pop();
            a = n.length ? 0 : l;
          } else if (h[e].become(n[0])) {
            e++;
            n.shift();
            l = n.length ? 0 : a;
          } else {
            break;
          }
        }
        if (!n.length && e && s < h.length && !h[e - 1].breakAfter && h[s].merge(0, 0, h[e - 1], false, l, a)) e--;
        if (e < s || n.length) t.replaceChildren(e, s, n);
      }
      function X(t, e, i, s, o, n) {
        let r = t.childCursor();
        let { i: l, off: a } = r.findPos(i, 1);
        let { i: h, off: c } = r.findPos(e, -1);
        let f = e - i;
        for (let d of s) f += d.length;
        t.length += f;
        Y(t, h, c, l, a, s, 0, o, n);
      }
      let _ = typeof navigator != "undefined" ? navigator : { userAgent: "", vendor: "", platform: "" };
      let G = typeof document != "undefined" ? document : { documentElement: { style: {} } };
      const j = /Edge\/(\d+)/.exec(_.userAgent);
      const $ = /MSIE \d/.test(_.userAgent);
      const U = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(_.userAgent);
      const Q = !!($ || U || j);
      const J = !Q && /gecko\/(\d+)/i.test(_.userAgent);
      const Z = !Q && /Chrome\/(\d+)/.exec(_.userAgent);
      const tt = "webkitFontSmoothing" in G.documentElement.style;
      const et = !Q && /Apple Computer/.test(_.vendor);
      const it = et && (/Mobile\/\w+/.test(_.userAgent) || _.maxTouchPoints > 2);
      var st = {
        mac: it || /Mac/.test(_.platform),
        windows: /Win/.test(_.platform),
        linux: /Linux|X11/.test(_.platform),
        ie: Q,
        ie_version: $ ? G.documentMode || 6 : U ? +U[1] : j ? +j[1] : 0,
        gecko: J,
        gecko_version: J ? +(/Firefox\/(\d+)/.exec(_.userAgent) || [0, 0])[1] : 0,
        chrome: !!Z,
        chrome_version: Z ? +Z[1] : 0,
        ios: it,
        android: /Android\b/.test(_.userAgent),
        webkit: tt,
        safari: et,
        webkit_version: tt ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
        tabSize: G.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size",
      };
      const ot = 256;
      class nt extends K {
        constructor(t) {
          super();
          this.text = t;
        }
        get length() {
          return this.text.length;
        }
        createDOM(t) {
          this.setDOM(t || document.createTextNode(this.text));
        }
        sync(t, e) {
          if (!this.dom) this.createDOM();
          if (this.dom.nodeValue != this.text) {
            if (e && e.node == this.dom) e.written = true;
            this.dom.nodeValue = this.text;
          }
        }
        reuseDOM(t) {
          if (t.nodeType == 3) this.createDOM(t);
        }
        merge(t, e, i) {
          if (this.flags & 8 || (i && (!(i instanceof nt) || this.length - (e - t) + i.length > ot || i.flags & 8))) return false;
          this.text = this.text.slice(0, t) + (i ? i.text : "") + this.text.slice(e);
          this.markDirty();
          return true;
        }
        split(t) {
          let e = new nt(this.text.slice(t));
          this.text = this.text.slice(0, t);
          this.markDirty();
          e.flags |= this.flags & 8;
          return e;
        }
        localPosFromDOM(t, e) {
          return t == this.dom ? e : e ? this.text.length : 0;
        }
        domAtPos(t) {
          return new W(this.dom, t);
        }
        domBoundsAround(t, e, i) {
          return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
        }
        coordsAt(t, e) {
          return lt(this.dom, t, e);
        }
      }
      class rt extends K {
        constructor(t, e = [], i = 0) {
          super();
          this.mark = t;
          this.children = e;
          this.length = i;
          for (let s of e) s.setParent(this);
        }
        setAttrs(t) {
          V(t);
          if (this.mark.class) t.className = this.mark.class;
          if (this.mark.attrs) for (let e in this.mark.attrs) t.setAttribute(e, this.mark.attrs[e]);
          return t;
        }
        canReuseDOM(t) {
          return super.canReuseDOM(t) && !((this.flags | t.flags) & 8);
        }
        reuseDOM(t) {
          if (t.nodeName == this.mark.tagName.toUpperCase()) {
            this.setDOM(t);
            this.flags |= 4 | 2;
          }
        }
        sync(t, e) {
          if (!this.dom) this.setDOM(this.setAttrs(document.createElement(this.mark.tagName)));
          else if (this.flags & 4) this.setAttrs(this.dom);
          super.sync(t, e);
        }
        merge(t, e, i, s, o, n) {
          if (i && (!(i instanceof rt && i.mark.eq(this.mark)) || (t && o <= 0) || (e < this.length && n <= 0))) return false;
          X(this, t, e, i ? i.children.slice() : [], o - 1, n - 1);
          this.markDirty();
          return true;
        }
        split(t) {
          let e = [],
            i = 0,
            s = -1,
            o = 0;
          for (let r of this.children) {
            let n = i + r.length;
            if (n > t) e.push(i < t ? r.split(t - i) : r);
            if (s < 0 && i >= t) s = o;
            i = n;
            o++;
          }
          let n = this.length - t;
          this.length = t;
          if (s > -1) {
            this.children.length = s;
            this.markDirty();
          }
          return new rt(this.mark, e, n);
        }
        domAtPos(t) {
          return ct(this, t);
        }
        coordsAt(t, e) {
          return dt(this, t, e);
        }
      }
      function lt(t, e, i) {
        let s = t.nodeValue.length;
        if (e > s) e = s;
        let o = e,
          n = e,
          r = 0;
        if ((e == 0 && i < 0) || (e == s && i >= 0)) {
          if (!(st.chrome || st.gecko)) {
            if (e) {
              o--;
              r = 1;
            } else if (n < s) {
              n++;
              r = -1;
            }
          }
        } else {
          if (i < 0) o--;
          else if (n < s) n++;
        }
        let l = L(t, o, n).getClientRects();
        if (!l.length) return null;
        let a = l[(r ? r < 0 : i >= 0) ? 0 : l.length - 1];
        if (st.safari && !r && a.width == 0) a = Array.prototype.find.call(l, (t) => t.width) || a;
        return r ? k(a, r < 0) : a || null;
      }
      class at extends K {
        static create(t, e, i) {
          return new at(t, e, i);
        }
        constructor(t, e, i) {
          super();
          this.widget = t;
          this.length = e;
          this.side = i;
          this.prevWidget = null;
        }
        split(t) {
          let e = at.create(this.widget, this.length - t, this.side);
          this.length -= t;
          return e;
        }
        sync(t) {
          if (!this.dom || !this.widget.updateDOM(this.dom, t)) {
            if (this.dom && this.prevWidget) this.prevWidget.destroy(this.dom);
            this.prevWidget = null;
            this.setDOM(this.widget.toDOM(t));
            if (!this.widget.editable) this.dom.contentEditable = "false";
          }
        }
        getSide() {
          return this.side;
        }
        merge(t, e, i, s, o, n) {
          if (i && (!(i instanceof at) || !this.widget.compare(i.widget) || (t > 0 && o <= 0) || (e < this.length && n <= 0))) return false;
          this.length = t + (i ? i.length : 0) + (this.length - e);
          return true;
        }
        become(t) {
          if (t instanceof at && t.side == this.side && this.widget.constructor == t.widget.constructor) {
            if (!this.widget.compare(t.widget)) this.markDirty(true);
            if (this.dom && !this.prevWidget) this.prevWidget = this.widget;
            this.widget = t.widget;
            this.length = t.length;
            return true;
          }
          return false;
        }
        ignoreMutation() {
          return true;
        }
        ignoreEvent(t) {
          return this.widget.ignoreEvent(t);
        }
        get overrideDOMText() {
          if (this.length == 0) return s.Text.empty;
          let t = this;
          while (t.parent) t = t.parent;
          let { view: e } = t,
            i = e && e.state.doc,
            o = this.posAtStart;
          return i ? i.slice(o, o + this.length) : s.Text.empty;
        }
        domAtPos(t) {
          return (this.length ? t == 0 : this.side > 0) ? W.before(this.dom) : W.after(this.dom, t == this.length);
        }
        domBoundsAround() {
          return null;
        }
        coordsAt(t, e) {
          let i = this.widget.coordsAt(this.dom, t, e);
          if (i) return i;
          let s = this.dom.getClientRects(),
            o = null;
          if (!s.length) return null;
          let n = this.side ? this.side < 0 : t > 0;
          for (let r = n ? s.length - 1 : 0; ; r += n ? -1 : 1) {
            o = s[r];
            if (t > 0 ? r == 0 : r == s.length - 1 || o.top < o.bottom) break;
          }
          return k(o, !n);
        }
        get isEditable() {
          return false;
        }
        get isWidget() {
          return true;
        }
        get isHidden() {
          return this.widget.isHidden;
        }
        destroy() {
          super.destroy();
          if (this.dom) this.widget.destroy(this.dom);
        }
      }
      class ht extends K {
        constructor(t) {
          super();
          this.side = t;
        }
        get length() {
          return 0;
        }
        merge() {
          return false;
        }
        become(t) {
          return t instanceof ht && t.side == this.side;
        }
        split() {
          return new ht(this.side);
        }
        sync() {
          if (!this.dom) {
            let t = document.createElement("img");
            t.className = "cm-widgetBuffer";
            t.setAttribute("aria-hidden", "true");
            this.setDOM(t);
          }
        }
        getSide() {
          return this.side;
        }
        domAtPos(t) {
          return this.side > 0 ? W.before(this.dom) : W.after(this.dom);
        }
        localPosFromDOM() {
          return 0;
        }
        domBoundsAround() {
          return null;
        }
        coordsAt(t) {
          return this.dom.getBoundingClientRect();
        }
        get overrideDOMText() {
          return s.Text.empty;
        }
        get isHidden() {
          return true;
        }
      }
      nt.prototype.children = at.prototype.children = ht.prototype.children = z;
      function ct(t, e) {
        let i = t.dom,
          { children: s } = t,
          o = 0;
        for (let n = 0; o < s.length; o++) {
          let t = s[o],
            r = n + t.length;
          if (r == n && t.getSide() <= 0) continue;
          if (e > n && e < r && t.dom.parentNode == i) return t.domAtPos(e - n);
          if (e <= n) break;
          n = r;
        }
        for (let n = o; n > 0; n--) {
          let t = s[n - 1];
          if (t.dom.parentNode == i) return t.domAtPos(t.length);
        }
        for (let n = o; n < s.length; n++) {
          let t = s[n];
          if (t.dom.parentNode == i) return t.domAtPos(0);
        }
        return new W(i, 0);
      }
      function ft(t, e, i) {
        let s,
          { children: o } = t;
        if (i > 0 && e instanceof rt && o.length && (s = o[o.length - 1]) instanceof rt && s.mark.eq(e.mark)) {
          ft(s, e.children[0], i - 1);
        } else {
          o.push(e);
          e.setParent(t);
        }
        t.length += e.length;
      }
      function dt(t, e, i) {
        let s = null,
          o = -1,
          n = null,
          r = -1;
        function l(t, e) {
          for (let a = 0, h = 0; a < t.children.length && h <= e; a++) {
            let c = t.children[a],
              f = h + c.length;
            if (f >= e) {
              if (c.children.length) {
                l(c, e - h);
              } else if ((!n || (n.isHidden && i > 0)) && (f > e || (h == f && c.getSide() > 0))) {
                n = c;
                r = e - h;
              } else if (h < e || (h == f && c.getSide() < 0 && !c.isHidden)) {
                s = c;
                o = e - h;
              }
            }
            h = f;
          }
        }
        l(t, e);
        let a = (i < 0 ? s : n) || s || n;
        if (a) return a.coordsAt(Math.max(0, a == s ? o : r), i);
        return ut(t);
      }
      function ut(t) {
        let e = t.dom.lastChild;
        if (!e) return t.dom.getBoundingClientRect();
        let i = b(e);
        return i[i.length - 1] || null;
      }
      function pt(t, e) {
        for (let i in t) {
          if (i == "class" && e.class) e.class += " " + t.class;
          else if (i == "style" && e.style) e.style += ";" + t.style;
          else e[i] = t[i];
        }
        return e;
      }
      const gt = Object.create(null);
      function mt(t, e, i) {
        if (t == e) return true;
        if (!t) t = gt;
        if (!e) e = gt;
        let s = Object.keys(t),
          o = Object.keys(e);
        if (s.length - (i && s.indexOf(i) > -1 ? 1 : 0) != o.length - (i && o.indexOf(i) > -1 ? 1 : 0)) return false;
        for (let n of s) {
          if (n != i && (o.indexOf(n) == -1 || t[n] !== e[n])) return false;
        }
        return true;
      }
      function wt(t, e, i) {
        let s = false;
        if (e)
          for (let o in e)
            if (!(i && o in i)) {
              s = true;
              if (o == "style") t.style.cssText = "";
              else t.removeAttribute(o);
            }
        if (i)
          for (let o in i)
            if (!(e && e[o] == i[o])) {
              s = true;
              if (o == "style") t.style.cssText = i[o];
              else t.setAttribute(o, i[o]);
            }
        return s;
      }
      function vt(t) {
        let e = Object.create(null);
        for (let i = 0; i < t.attributes.length; i++) {
          let s = t.attributes[i];
          e[s.name] = s.value;
        }
        return e;
      }
      class bt extends K {
        constructor() {
          super(...arguments);
          this.children = [];
          this.length = 0;
          this.prevAttrs = undefined;
          this.attrs = null;
          this.breakAfter = 0;
        }
        merge(t, e, i, s, o, n) {
          if (i) {
            if (!(i instanceof bt)) return false;
            if (!this.dom) i.transferDOM(this);
          }
          if (s) this.setDeco(i ? i.attrs : null);
          X(this, t, e, i ? i.children.slice() : [], o, n);
          return true;
        }
        split(t) {
          let e = new bt();
          e.breakAfter = this.breakAfter;
          if (this.length == 0) return e;
          let { i, off: s } = this.childPos(t);
          if (s) {
            e.append(this.children[i].split(s), 0);
            this.children[i].merge(s, this.children[i].length, null, false, 0, 0);
            i++;
          }
          for (let o = i; o < this.children.length; o++) e.append(this.children[o], 0);
          while (i > 0 && this.children[i - 1].length == 0) this.children[--i].destroy();
          this.children.length = i;
          this.markDirty();
          this.length = t;
          return e;
        }
        transferDOM(t) {
          if (!this.dom) return;
          this.markDirty();
          t.setDOM(this.dom);
          t.prevAttrs = this.prevAttrs === undefined ? this.attrs : this.prevAttrs;
          this.prevAttrs = undefined;
          this.dom = null;
        }
        setDeco(t) {
          if (!mt(this.attrs, t)) {
            if (this.dom) {
              this.prevAttrs = this.attrs;
              this.markDirty();
            }
            this.attrs = t;
          }
        }
        append(t, e) {
          ft(this, t, e);
        }
        addLineDeco(t) {
          let e = t.spec.attributes,
            i = t.spec.class;
          if (e) this.attrs = pt(e, this.attrs || {});
          if (i) this.attrs = pt({ class: i }, this.attrs || {});
        }
        domAtPos(t) {
          return ct(this, t);
        }
        reuseDOM(t) {
          if (t.nodeName == "DIV") {
            this.setDOM(t);
            this.flags |= 4 | 2;
          }
        }
        sync(t, e) {
          var i;
          if (!this.dom) {
            this.setDOM(document.createElement("div"));
            this.dom.className = "cm-line";
            this.prevAttrs = this.attrs ? null : undefined;
          } else if (this.flags & 4) {
            V(this.dom);
            this.dom.className = "cm-line";
            this.prevAttrs = this.attrs ? null : undefined;
          }
          if (this.prevAttrs !== undefined) {
            wt(this.dom, this.prevAttrs, this.attrs);
            this.dom.classList.add("cm-line");
            this.prevAttrs = undefined;
          }
          super.sync(t, e);
          let s = this.dom.lastChild;
          while (s && K.get(s) instanceof rt) s = s.lastChild;
          if (
            !s ||
            !this.length ||
            (s.nodeName != "BR" &&
              ((i = K.get(s)) === null || i === void 0 ? void 0 : i.isEditable) == false &&
              (!st.ios || !this.children.some((t) => t instanceof nt)))
          ) {
            let t = document.createElement("BR");
            t.cmIgnore = true;
            this.dom.appendChild(t);
          }
        }
        measureTextSize() {
          if (this.children.length == 0 || this.length > 20) return null;
          let t = 0,
            e;
          for (let i of this.children) {
            if (!(i instanceof nt) || /[^ -~]/.test(i.text)) return null;
            let s = b(i.dom);
            if (s.length != 1) return null;
            t += s[0].width;
            e = s[0].height;
          }
          return !t ? null : { lineHeight: this.dom.getBoundingClientRect().height, charWidth: t / this.length, textHeight: e };
        }
        coordsAt(t, e) {
          let i = dt(this, t, e);
          if (!this.children.length && i && this.parent) {
            let { heightOracle: t } = this.parent.view.viewState,
              e = i.bottom - i.top;
            if (Math.abs(e - t.lineHeight) < 2 && t.textHeight < e) {
              let s = (e - t.textHeight) / 2;
              return { top: i.top + s, bottom: i.bottom - s, left: i.left, right: i.left };
            }
          }
          return i;
        }
        become(t) {
          return false;
        }
        covers() {
          return true;
        }
        static find(t, e) {
          for (let i = 0, s = 0; i < t.children.length; i++) {
            let o = t.children[i],
              n = s + o.length;
            if (n >= e) {
              if (o instanceof bt) return o;
              if (n > e) break;
            }
            s = n + o.breakAfter;
          }
          return null;
        }
      }
      class yt extends K {
        constructor(t, e, i) {
          super();
          this.widget = t;
          this.length = e;
          this.deco = i;
          this.breakAfter = 0;
          this.prevWidget = null;
        }
        merge(t, e, i, s, o, n) {
          if (i && (!(i instanceof yt) || !this.widget.compare(i.widget) || (t > 0 && o <= 0) || (e < this.length && n <= 0))) return false;
          this.length = t + (i ? i.length : 0) + (this.length - e);
          return true;
        }
        domAtPos(t) {
          return t == 0 ? W.before(this.dom) : W.after(this.dom, t == this.length);
        }
        split(t) {
          let e = this.length - t;
          this.length = t;
          let i = new yt(this.widget, e, this.deco);
          i.breakAfter = this.breakAfter;
          return i;
        }
        get children() {
          return z;
        }
        sync(t) {
          if (!this.dom || !this.widget.updateDOM(this.dom, t)) {
            if (this.dom && this.prevWidget) this.prevWidget.destroy(this.dom);
            this.prevWidget = null;
            this.setDOM(this.widget.toDOM(t));
            if (!this.widget.editable) this.dom.contentEditable = "false";
          }
        }
        get overrideDOMText() {
          return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : s.Text.empty;
        }
        domBoundsAround() {
          return null;
        }
        become(t) {
          if (t instanceof yt && t.widget.constructor == this.widget.constructor) {
            if (!t.widget.compare(this.widget)) this.markDirty(true);
            if (this.dom && !this.prevWidget) this.prevWidget = this.widget;
            this.widget = t.widget;
            this.length = t.length;
            this.deco = t.deco;
            this.breakAfter = t.breakAfter;
            return true;
          }
          return false;
        }
        ignoreMutation() {
          return true;
        }
        ignoreEvent(t) {
          return this.widget.ignoreEvent(t);
        }
        get isEditable() {
          return false;
        }
        get isWidget() {
          return true;
        }
        coordsAt(t, e) {
          return this.widget.coordsAt(this.dom, t, e);
        }
        destroy() {
          super.destroy();
          if (this.dom) this.widget.destroy(this.dom);
        }
        covers(t) {
          let { startSide: e, endSide: i } = this.deco;
          return e == i ? false : t < 0 ? e < 0 : i > 0;
        }
      }
      class St {
        eq(t) {
          return false;
        }
        updateDOM(t, e) {
          return false;
        }
        compare(t) {
          return this == t || (this.constructor == t.constructor && this.eq(t));
        }
        get estimatedHeight() {
          return -1;
        }
        get lineBreaks() {
          return 0;
        }
        ignoreEvent(t) {
          return true;
        }
        coordsAt(t, e, i) {
          return null;
        }
        get isHidden() {
          return false;
        }
        get editable() {
          return false;
        }
        destroy(t) {}
      }
      var xt = (function (t) {
        t[(t["Text"] = 0)] = "Text";
        t[(t["WidgetBefore"] = 1)] = "WidgetBefore";
        t[(t["WidgetAfter"] = 2)] = "WidgetAfter";
        t[(t["WidgetRange"] = 3)] = "WidgetRange";
        return t;
      })(xt || (xt = {}));
      class Mt extends s.RangeValue {
        constructor(t, e, i, s) {
          super();
          this.startSide = t;
          this.endSide = e;
          this.widget = i;
          this.spec = s;
        }
        get heightRelevant() {
          return false;
        }
        static mark(t) {
          return new kt(t);
        }
        static widget(t) {
          let e = Math.max(-1e4, Math.min(1e4, t.side || 0)),
            i = !!t.block;
          e += i && !t.inlineOrder ? (e > 0 ? 3e8 : -4e8) : e > 0 ? 1e8 : -1e8;
          return new At(t, e, e, i, t.widget || null, false);
        }
        static replace(t) {
          let e = !!t.block,
            i,
            s;
          if (t.isBlockGap) {
            i = -5e8;
            s = 4e8;
          } else {
            let { start: o, end: n } = Dt(t, e);
            i = (o ? (e ? -3e8 : -1) : 5e8) - 1;
            s = (n ? (e ? 2e8 : 1) : -6e8) + 1;
          }
          return new At(t, i, s, e, t.widget || null, true);
        }
        static line(t) {
          return new Ct(t);
        }
        static set(t, e = false) {
          return s.RangeSet.of(t, e);
        }
        hasHeight() {
          return this.widget ? this.widget.estimatedHeight > -1 : false;
        }
      }
      Mt.none = s.RangeSet.empty;
      class kt extends Mt {
        constructor(t) {
          let { start: e, end: i } = Dt(t);
          super(e ? -1 : 5e8, i ? 1 : -6e8, null, t);
          this.tagName = t.tagName || "span";
          this.class = t.class || "";
          this.attrs = t.attributes || null;
        }
        eq(t) {
          var e, i;
          return (
            this == t ||
            (t instanceof kt &&
              this.tagName == t.tagName &&
              (this.class || ((e = this.attrs) === null || e === void 0 ? void 0 : e.class)) ==
                (t.class || ((i = t.attrs) === null || i === void 0 ? void 0 : i.class)) &&
              mt(this.attrs, t.attrs, "class"))
          );
        }
        range(t, e = t) {
          if (t >= e) throw new RangeError("Mark decorations may not be empty");
          return super.range(t, e);
        }
      }
      kt.prototype.point = false;
      class Ct extends Mt {
        constructor(t) {
          super(-2e8, -2e8, null, t);
        }
        eq(t) {
          return t instanceof Ct && this.spec.class == t.spec.class && mt(this.spec.attributes, t.spec.attributes);
        }
        range(t, e = t) {
          if (e != t) throw new RangeError("Line decoration ranges must be zero-length");
          return super.range(t, e);
        }
      }
      Ct.prototype.mapMode = s.MapMode.TrackBefore;
      Ct.prototype.point = true;
      class At extends Mt {
        constructor(t, e, i, o, n, r) {
          super(e, i, n, t);
          this.block = o;
          this.isReplace = r;
          this.mapMode = !o ? s.MapMode.TrackDel : e <= 0 ? s.MapMode.TrackBefore : s.MapMode.TrackAfter;
        }
        get type() {
          return this.startSide != this.endSide ? xt.WidgetRange : this.startSide <= 0 ? xt.WidgetBefore : xt.WidgetAfter;
        }
        get heightRelevant() {
          return this.block || (!!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0));
        }
        eq(t) {
          return t instanceof At && Tt(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
        }
        range(t, e = t) {
          if (this.isReplace && (t > e || (t == e && this.startSide > 0 && this.endSide <= 0)))
            throw new RangeError("Invalid range for replacement decoration");
          if (!this.isReplace && e != t) throw new RangeError("Widget decorations can only have zero-length ranges");
          return super.range(t, e);
        }
      }
      At.prototype.point = true;
      function Dt(t, e = false) {
        let { inclusiveStart: i, inclusiveEnd: s } = t;
        if (i == null) i = t.inclusive;
        if (s == null) s = t.inclusive;
        return { start: i !== null && i !== void 0 ? i : e, end: s !== null && s !== void 0 ? s : e };
      }
      function Tt(t, e) {
        return t == e || !!(t && e && t.compare(e));
      }
      function Ot(t, e, i, s = 0) {
        let o = i.length - 1;
        if (o >= 0 && i[o] + s >= t) i[o] = Math.max(i[o], e);
        else i.push(t, e);
      }
      class Et {
        constructor(t, e, i, s) {
          this.doc = t;
          this.pos = e;
          this.end = i;
          this.disallowBlockEffectsFor = s;
          this.content = [];
          this.curLine = null;
          this.breakAtStart = 0;
          this.pendingBuffer = 0;
          this.bufferMarks = [];
          this.atCursorPos = true;
          this.openStart = -1;
          this.openEnd = -1;
          this.text = "";
          this.textOff = 0;
          this.cursor = t.iter();
          this.skip = e;
        }
        posCovered() {
          if (this.content.length == 0) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
          let t = this.content[this.content.length - 1];
          return !(t.breakAfter || (t instanceof yt && t.deco.endSide < 0));
        }
        getLine() {
          if (!this.curLine) {
            this.content.push((this.curLine = new bt()));
            this.atCursorPos = true;
          }
          return this.curLine;
        }
        flushBuffer(t = this.bufferMarks) {
          if (this.pendingBuffer) {
            this.curLine.append(Rt(new ht(-1), t), t.length);
            this.pendingBuffer = 0;
          }
        }
        addBlockWidget(t) {
          this.flushBuffer();
          this.curLine = null;
          this.content.push(t);
        }
        finish(t) {
          if (this.pendingBuffer && t <= this.bufferMarks.length) this.flushBuffer();
          else this.pendingBuffer = 0;
          if (!this.posCovered() && !(t && this.content.length && this.content[this.content.length - 1] instanceof yt)) this.getLine();
        }
        buildText(t, e, i) {
          while (t > 0) {
            if (this.textOff == this.text.length) {
              let { value: e, lineBreak: i, done: s } = this.cursor.next(this.skip);
              this.skip = 0;
              if (s) throw new Error("Ran out of text content when drawing inline views");
              if (i) {
                if (!this.posCovered()) this.getLine();
                if (this.content.length) this.content[this.content.length - 1].breakAfter = 1;
                else this.breakAtStart = 1;
                this.flushBuffer();
                this.curLine = null;
                this.atCursorPos = true;
                t--;
                continue;
              } else {
                this.text = e;
                this.textOff = 0;
              }
            }
            let s = Math.min(this.text.length - this.textOff, t, 512);
            this.flushBuffer(e.slice(e.length - i));
            this.getLine().append(Rt(new nt(this.text.slice(this.textOff, this.textOff + s)), e), i);
            this.atCursorPos = true;
            this.textOff += s;
            t -= s;
            i = 0;
          }
        }
        span(t, e, i, s) {
          this.buildText(e - t, i, s);
          this.pos = e;
          if (this.openStart < 0) this.openStart = s;
        }
        point(t, e, i, s, o, n) {
          if (this.disallowBlockEffectsFor[n] && i instanceof At) {
            if (i.block) throw new RangeError("Block decorations may not be specified via plugins");
            if (e > this.doc.lineAt(this.pos).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
          }
          let r = e - t;
          if (i instanceof At) {
            if (i.block) {
              if (i.startSide > 0 && !this.posCovered()) this.getLine();
              this.addBlockWidget(new yt(i.widget || Bt.block, r, i));
            } else {
              let n = at.create(i.widget || Bt.inline, r, r ? 0 : i.startSide);
              let l = this.atCursorPos && !n.isEditable && o <= s.length && (t < e || i.startSide > 0);
              let a = !n.isEditable && (t < e || o > s.length || i.startSide <= 0);
              let h = this.getLine();
              if (this.pendingBuffer == 2 && !l && !n.isEditable) this.pendingBuffer = 0;
              this.flushBuffer(s);
              if (l) {
                h.append(Rt(new ht(1), s), o);
                o = s.length + Math.max(0, o - s.length);
              }
              h.append(Rt(n, s), o);
              this.atCursorPos = a;
              this.pendingBuffer = !a ? 0 : t < e || o > s.length ? 1 : 2;
              if (this.pendingBuffer) this.bufferMarks = s.slice();
            }
          } else if (this.doc.lineAt(this.pos).from == this.pos) {
            this.getLine().addLineDeco(i);
          }
          if (r) {
            if (this.textOff + r <= this.text.length) {
              this.textOff += r;
            } else {
              this.skip += r - (this.text.length - this.textOff);
              this.text = "";
              this.textOff = 0;
            }
            this.pos = e;
          }
          if (this.openStart < 0) this.openStart = o;
        }
        static build(t, e, i, o, n) {
          let r = new Et(t, e, i, n);
          r.openEnd = s.RangeSet.spans(o, e, i, r);
          if (r.openStart < 0) r.openStart = r.openEnd;
          r.finish(r.openEnd);
          return r;
        }
      }
      function Rt(t, e) {
        for (let i of e) t = new rt(i, [t], t.length);
        return t;
      }
      class Bt extends St {
        constructor(t) {
          super();
          this.tag = t;
        }
        eq(t) {
          return t.tag == this.tag;
        }
        toDOM() {
          return document.createElement(this.tag);
        }
        updateDOM(t) {
          return t.nodeName.toLowerCase() == this.tag;
        }
        get isHidden() {
          return true;
        }
      }
      Bt.inline = new Bt("span");
      Bt.block = new Bt("div");
      var Lt = (function (t) {
        t[(t["LTR"] = 0)] = "LTR";
        t[(t["RTL"] = 1)] = "RTL";
        return t;
      })(Lt || (Lt = {}));
      const Ht = Lt.LTR,
        Pt = Lt.RTL;
      function Vt(t) {
        let e = [];
        for (let i = 0; i < t.length; i++) e.push(1 << +t[i]);
        return e;
      }
      const Nt = Vt(
        "88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"
      );
      const Ft = Vt(
        "4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"
      );
      const Wt = Object.create(null),
        zt = [];
      for (let Sr of ["()", "[]", "{}"]) {
        let t = Sr.charCodeAt(0),
          e = Sr.charCodeAt(1);
        Wt[t] = e;
        Wt[e] = -t;
      }
      function Kt(t) {
        return t <= 247
          ? Nt[t]
          : 1424 <= t && t <= 1524
            ? 2
            : 1536 <= t && t <= 1785
              ? Ft[t - 1536]
              : 1774 <= t && t <= 2220
                ? 4
                : 8192 <= t && t <= 8204
                  ? 256
                  : 64336 <= t && t <= 65023
                    ? 4
                    : 1;
      }
      const It = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
      class qt {
        get dir() {
          return this.level % 2 ? Pt : Ht;
        }
        constructor(t, e, i) {
          this.from = t;
          this.to = e;
          this.level = i;
        }
        side(t, e) {
          return (this.dir == e) == t ? this.to : this.from;
        }
        forward(t, e) {
          return t == (this.dir == e);
        }
        static find(t, e, i, s) {
          let o = -1;
          for (let n = 0; n < t.length; n++) {
            let r = t[n];
            if (r.from <= e && r.to >= e) {
              if (r.level == i) return n;
              if (o < 0 || (s != 0 ? (s < 0 ? r.from < e : r.to > e) : t[o].level > r.level)) o = n;
            }
          }
          if (o < 0) throw new RangeError("Index out of range");
          return o;
        }
      }
      function Yt(t, e) {
        if (t.length != e.length) return false;
        for (let i = 0; i < t.length; i++) {
          let s = t[i],
            o = e[i];
          if (s.from != o.from || s.to != o.to || s.direction != o.direction || !Yt(s.inner, o.inner)) return false;
        }
        return true;
      }
      const Xt = [];
      function _t(t, e, i, s, o) {
        for (let n = 0; n <= s.length; n++) {
          let r = n ? s[n - 1].to : e,
            l = n < s.length ? s[n].from : i;
          let a = n ? 256 : o;
          for (let e = r, i = a, s = a; e < l; e++) {
            let o = Kt(t.charCodeAt(e));
            if (o == 512) o = i;
            else if (o == 8 && s == 4) o = 16;
            Xt[e] = o == 4 ? 2 : o;
            if (o & 7) s = o;
            i = o;
          }
          for (let t = r, e = a, s = a; t < l; t++) {
            let o = Xt[t];
            if (o == 128) {
              if (t < l - 1 && e == Xt[t + 1] && e & 24) o = Xt[t] = e;
              else Xt[t] = 256;
            } else if (o == 64) {
              let o = t + 1;
              while (o < l && Xt[o] == 64) o++;
              let n = (t && e == 8) || (o < i && Xt[o] == 8) ? (s == 1 ? 1 : 8) : 256;
              for (let e = t; e < o; e++) Xt[e] = n;
              t = o - 1;
            } else if (o == 8 && s == 1) {
              Xt[t] = 1;
            }
            e = o;
            if (o & 7) s = o;
          }
        }
      }
      function Gt(t, e, i, s, o) {
        let n = o == 1 ? 2 : 1;
        for (let r = 0, l = 0, a = 0; r <= s.length; r++) {
          let h = r ? s[r - 1].to : e,
            c = r < s.length ? s[r].from : i;
          for (let e = h, i, s, r; e < c; e++) {
            if ((s = Wt[(i = t.charCodeAt(e))])) {
              if (s < 0) {
                for (let t = l - 3; t >= 0; t -= 3) {
                  if (zt[t + 1] == -s) {
                    let i = zt[t + 2];
                    let s = i & 2 ? o : !(i & 4) ? 0 : i & 1 ? n : o;
                    if (s) Xt[e] = Xt[zt[t]] = s;
                    l = t;
                    break;
                  }
                }
              } else if (zt.length == 189) {
                break;
              } else {
                zt[l++] = e;
                zt[l++] = i;
                zt[l++] = a;
              }
            } else if ((r = Xt[e]) == 2 || r == 1) {
              let t = r == o;
              a = t ? 0 : 1;
              for (let e = l - 3; e >= 0; e -= 3) {
                let i = zt[e + 2];
                if (i & 2) break;
                if (t) {
                  zt[e + 2] |= 2;
                } else {
                  if (i & 4) break;
                  zt[e + 2] |= 4;
                }
              }
            }
          }
        }
      }
      function jt(t, e, i, s) {
        for (let o = 0, n = s; o <= i.length; o++) {
          let r = o ? i[o - 1].to : t,
            l = o < i.length ? i[o].from : e;
          for (let a = r; a < l; ) {
            let r = Xt[a];
            if (r == 256) {
              let r = a + 1;
              for (;;) {
                if (r == l) {
                  if (o == i.length) break;
                  r = i[o++].to;
                  l = o < i.length ? i[o].from : e;
                } else if (Xt[r] == 256) {
                  r++;
                } else {
                  break;
                }
              }
              let h = n == 1;
              let c = (r < e ? Xt[r] : s) == 1;
              let f = h == c ? (h ? 1 : 2) : s;
              for (let e = r, s = o, n = s ? i[s - 1].to : t; e > a; ) {
                if (e == n) {
                  e = i[--s].from;
                  n = s ? i[s - 1].to : t;
                }
                Xt[--e] = f;
              }
              a = r;
            } else {
              n = r;
              a++;
            }
          }
        }
      }
      function $t(t, e, i, s, o, n, r) {
        let l = s % 2 ? 2 : 1;
        if (s % 2 == o % 2) {
          for (let a = e, h = 0; a < i; ) {
            let e = true,
              c = false;
            if (h == n.length || a < n[h].from) {
              let t = Xt[a];
              if (t != l) {
                e = false;
                c = t == 16;
              }
            }
            let f = !e && l == 1 ? [] : null;
            let d = e ? s : s + 1;
            let u = a;
            t: for (;;) {
              if (h < n.length && u == n[h].from) {
                if (c) break t;
                let p = n[h];
                if (!e)
                  for (let t = p.to, e = h + 1; ; ) {
                    if (t == i) break t;
                    if (e < n.length && n[e].from == t) t = n[e++].to;
                    else if (Xt[t] == l) break t;
                    else break;
                  }
                h++;
                if (f) {
                  f.push(p);
                } else {
                  if (p.from > a) r.push(new qt(a, p.from, d));
                  let e = (p.direction == Ht) != !(d % 2);
                  Ut(t, e ? s + 1 : s, o, p.inner, p.from, p.to, r);
                  a = p.to;
                }
                u = p.to;
              } else if (u == i || (e ? Xt[u] != l : Xt[u] == l)) {
                break;
              } else {
                u++;
              }
            }
            if (f) $t(t, a, u, s + 1, o, f, r);
            else if (a < u) r.push(new qt(a, u, d));
            a = u;
          }
        } else {
          for (let a = i, h = n.length; a > e; ) {
            let i = true,
              c = false;
            if (!h || a > n[h - 1].to) {
              let t = Xt[a - 1];
              if (t != l) {
                i = false;
                c = t == 16;
              }
            }
            let f = !i && l == 1 ? [] : null;
            let d = i ? s : s + 1;
            let u = a;
            t: for (;;) {
              if (h && u == n[h - 1].to) {
                if (c) break t;
                let p = n[--h];
                if (!i)
                  for (let t = p.from, i = h; ; ) {
                    if (t == e) break t;
                    if (i && n[i - 1].to == t) t = n[--i].from;
                    else if (Xt[t - 1] == l) break t;
                    else break;
                  }
                if (f) {
                  f.push(p);
                } else {
                  if (p.to < a) r.push(new qt(p.to, a, d));
                  let e = (p.direction == Ht) != !(d % 2);
                  Ut(t, e ? s + 1 : s, o, p.inner, p.from, p.to, r);
                  a = p.from;
                }
                u = p.from;
              } else if (u == e || (i ? Xt[u - 1] != l : Xt[u - 1] == l)) {
                break;
              } else {
                u--;
              }
            }
            if (f) $t(t, u, a, s + 1, o, f, r);
            else if (u < a) r.push(new qt(u, a, d));
            a = u;
          }
        }
      }
      function Ut(t, e, i, s, o, n, r) {
        let l = e % 2 ? 2 : 1;
        _t(t, o, n, s, l);
        Gt(t, o, n, s, l);
        jt(o, n, s, l);
        $t(t, o, n, e, i, s, r);
      }
      function Qt(t, e, i) {
        if (!t) return [new qt(0, 0, e == Pt ? 1 : 0)];
        if (e == Ht && !i.length && !It.test(t)) return Jt(t.length);
        if (i.length) while (t.length > Xt.length) Xt[Xt.length] = 256;
        let s = [],
          o = e == Ht ? 0 : 1;
        Ut(t, o, o, i, 0, t.length, s);
        return s;
      }
      function Jt(t) {
        return [new qt(0, t, 0)];
      }
      let Zt = "";
      function te(t, e, i, o, n) {
        var r;
        let l = o.head - t.from;
        let a = qt.find(e, l, (r = o.bidiLevel) !== null && r !== void 0 ? r : -1, o.assoc);
        let h = e[a],
          c = h.side(n, i);
        if (l == c) {
          let t = (a += n ? 1 : -1);
          if (t < 0 || t >= e.length) return null;
          h = e[(a = t)];
          l = h.side(!n, i);
          c = h.side(n, i);
        }
        let f = (0, s.findClusterBreak)(t.text, l, h.forward(n, i));
        if (f < h.from || f > h.to) f = c;
        Zt = t.text.slice(Math.min(l, f), Math.max(l, f));
        let d = a == (n ? e.length - 1 : 0) ? null : e[a + (n ? 1 : -1)];
        if (d && f == c && d.level + (n ? 0 : 1) < h.level)
          return s.EditorSelection.cursor(d.side(!n, i) + t.from, d.forward(n, i) ? 1 : -1, d.level);
        return s.EditorSelection.cursor(f + t.from, h.forward(n, i) ? -1 : 1, h.level);
      }
      function ee(t, e, i) {
        for (let s = e; s < i; s++) {
          let e = Kt(t.charCodeAt(s));
          if (e == 1) return Ht;
          if (e == 2 || e == 4) return Pt;
        }
        return Ht;
      }
      const ie = s.Facet.define();
      const se = s.Facet.define();
      const oe = s.Facet.define();
      const ne = s.Facet.define();
      const re = s.Facet.define();
      const le = s.Facet.define();
      const ae = s.Facet.define();
      const he = s.Facet.define({ combine: (t) => t.some((t) => t) });
      const ce = s.Facet.define({ combine: (t) => t.some((t) => t) });
      const fe = s.Facet.define();
      class de {
        constructor(t, e = "nearest", i = "nearest", s = 5, o = 5, n = false) {
          this.range = t;
          this.y = e;
          this.x = i;
          this.yMargin = s;
          this.xMargin = o;
          this.isSnapshot = n;
        }
        map(t) {
          return t.empty ? this : new de(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
        }
        clip(t) {
          return this.range.to <= t.doc.length
            ? this
            : new de(s.EditorSelection.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
        }
      }
      const ue = s.StateEffect.define({ map: (t, e) => t.map(e) });
      function pe(t, e, i) {
        let s = t.facet(ne);
        if (s.length) s[0](e);
        else if (window.onerror) window.onerror(String(e), i, undefined, undefined, e);
        else if (i) console.error(i + ":", e);
        else console.error(e);
      }
      const ge = s.Facet.define({ combine: (t) => (t.length ? t[0] : true) });
      let me = 0;
      const we = s.Facet.define();
      class ve {
        constructor(t, e, i, s, o) {
          this.id = t;
          this.create = e;
          this.domEventHandlers = i;
          this.domEventObservers = s;
          this.extension = o(this);
        }
        static define(t, e) {
          const { eventHandlers: i, eventObservers: s, provide: o, decorations: n } = e || {};
          return new ve(me++, t, i, s, (t) => {
            let e = [we.of(t)];
            if (n)
              e.push(
                xe.of((e) => {
                  let i = e.plugin(t);
                  return i ? n(i) : Mt.none;
                })
              );
            if (o) e.push(o(t));
            return e;
          });
        }
        static fromClass(t, e) {
          return ve.define((e) => new t(e), e);
        }
      }
      class be {
        constructor(t) {
          this.spec = t;
          this.mustUpdate = null;
          this.value = null;
        }
        update(t) {
          if (!this.value) {
            if (this.spec) {
              try {
                this.value = this.spec.create(t);
              } catch (e) {
                pe(t.state, e, "CodeMirror plugin crashed");
                this.deactivate();
              }
            }
          } else if (this.mustUpdate) {
            let t = this.mustUpdate;
            this.mustUpdate = null;
            if (this.value.update) {
              try {
                this.value.update(t);
              } catch (e) {
                pe(t.state, e, "CodeMirror plugin crashed");
                if (this.value.destroy)
                  try {
                    this.value.destroy();
                  } catch (i) {}
                this.deactivate();
              }
            }
          }
          return this;
        }
        destroy(t) {
          var e;
          if ((e = this.value) === null || e === void 0 ? void 0 : e.destroy) {
            try {
              this.value.destroy();
            } catch (i) {
              pe(t.state, i, "CodeMirror plugin crashed");
            }
          }
        }
        deactivate() {
          this.spec = this.value = null;
        }
      }
      const ye = s.Facet.define();
      const Se = s.Facet.define();
      const xe = s.Facet.define();
      const Me = s.Facet.define();
      const ke = s.Facet.define();
      const Ce = s.Facet.define();
      function Ae(t, e) {
        let i = t.state.facet(Ce);
        if (!i.length) return i;
        let o = i.map((e) => (e instanceof Function ? e(t) : e));
        let n = [];
        s.RangeSet.spans(o, e.from, e.to, {
          point() {},
          span(t, i, s, o) {
            let r = t - e.from,
              l = i - e.from;
            let a = n;
            for (let n = s.length - 1; n >= 0; n--, o--) {
              let t = s[n].spec.bidiIsolate,
                i;
              if (t == null) t = ee(e.text, r, l);
              if (o > 0 && a.length && (i = a[a.length - 1]).to == r && i.direction == t) {
                i.to = l;
                a = i.inner;
              } else {
                let e = { from: r, to: l, direction: t, inner: [] };
                a.push(e);
                a = e.inner;
              }
            }
          },
        });
        return n;
      }
      const De = s.Facet.define();
      function Te(t) {
        let e = 0,
          i = 0,
          s = 0,
          o = 0;
        for (let n of t.state.facet(De)) {
          let r = n(t);
          if (r) {
            if (r.left != null) e = Math.max(e, r.left);
            if (r.right != null) i = Math.max(i, r.right);
            if (r.top != null) s = Math.max(s, r.top);
            if (r.bottom != null) o = Math.max(o, r.bottom);
          }
        }
        return { left: e, right: i, top: s, bottom: o };
      }
      const Oe = s.Facet.define();
      class Ee {
        constructor(t, e, i, s) {
          this.fromA = t;
          this.toA = e;
          this.fromB = i;
          this.toB = s;
        }
        join(t) {
          return new Ee(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
        }
        addToSet(t) {
          let e = t.length,
            i = this;
          for (; e > 0; e--) {
            let s = t[e - 1];
            if (s.fromA > i.toA) continue;
            if (s.toA < i.fromA) break;
            i = i.join(s);
            t.splice(e - 1, 1);
          }
          t.splice(e, 0, i);
          return t;
        }
        static extendWithRanges(t, e) {
          if (e.length == 0) return t;
          let i = [];
          for (let s = 0, o = 0, n = 0, r = 0; ; s++) {
            let l = s == t.length ? null : t[s],
              a = n - r;
            let h = l ? l.fromB : 1e9;
            while (o < e.length && e[o] < h) {
              let t = e[o],
                s = e[o + 1];
              let n = Math.max(r, t),
                l = Math.min(h, s);
              if (n <= l) new Ee(n + a, l + a, n, l).addToSet(i);
              if (s > h) break;
              else o += 2;
            }
            if (!l) return i;
            new Ee(l.fromA, l.toA, l.fromB, l.toB).addToSet(i);
            n = l.toA;
            r = l.toB;
          }
        }
      }
      class Re {
        constructor(t, e, i) {
          this.view = t;
          this.state = e;
          this.transactions = i;
          this.flags = 0;
          this.startState = t.state;
          this.changes = s.ChangeSet.empty(this.startState.doc.length);
          for (let s of i) this.changes = this.changes.compose(s.changes);
          let o = [];
          this.changes.iterChangedRanges((t, e, i, s) => o.push(new Ee(t, e, i, s)));
          this.changedRanges = o;
        }
        static create(t, e, i) {
          return new Re(t, e, i);
        }
        get viewportChanged() {
          return (this.flags & 4) > 0;
        }
        get heightChanged() {
          return (this.flags & 2) > 0;
        }
        get geometryChanged() {
          return this.docChanged || (this.flags & (8 | 2)) > 0;
        }
        get focusChanged() {
          return (this.flags & 1) > 0;
        }
        get docChanged() {
          return !this.changes.empty;
        }
        get selectionSet() {
          return this.transactions.some((t) => t.selection);
        }
        get empty() {
          return this.flags == 0 && this.transactions.length == 0;
        }
      }
      class Be extends K {
        get length() {
          return this.view.state.doc.length;
        }
        constructor(t) {
          super();
          this.view = t;
          this.decorations = [];
          this.dynamicDecorationMap = [false];
          this.domChanged = null;
          this.hasComposition = null;
          this.markedForComposition = new Set();
          this.compositionBarrier = Mt.none;
          this.minWidth = 0;
          this.minWidthFrom = 0;
          this.minWidthTo = 0;
          this.impreciseAnchor = null;
          this.impreciseHead = null;
          this.forceSelection = false;
          this.lastUpdate = Date.now();
          this.setDOM(t.contentDOM);
          this.children = [new bt()];
          this.children[0].setParent(this);
          this.updateDeco();
          this.updateInner([new Ee(0, 0, 0, t.state.doc.length)], 0, null);
        }
        update(t) {
          var e;
          let i = t.changedRanges;
          if (this.minWidth > 0 && i.length) {
            if (!i.every(({ fromA: t, toA: e }) => e < this.minWidthFrom || t > this.minWidthTo)) {
              this.minWidth = this.minWidthFrom = this.minWidthTo = 0;
            } else {
              this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1);
              this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1);
            }
          }
          let s = -1;
          if (this.view.inputState.composing >= 0) {
            if ((e = this.domChanged) === null || e === void 0 ? void 0 : e.newSel) s = this.domChanged.newSel.head;
            else if (!qe(t.changes, this.hasComposition) && !t.selectionSet) s = t.state.selection.main.head;
          }
          let o = s > -1 ? Ne(this.view, t.changes, s) : null;
          this.domChanged = null;
          if (this.hasComposition) {
            this.markedForComposition.clear();
            let { from: e, to: s } = this.hasComposition;
            i = new Ee(e, s, t.changes.mapPos(e, -1), t.changes.mapPos(s, 1)).addToSet(i.slice());
          }
          this.hasComposition = o ? { from: o.range.fromB, to: o.range.toB } : null;
          if ((st.ie || st.chrome) && !o && t && t.state.doc.lines != t.startState.doc.lines) this.forceSelection = true;
          let n = this.decorations,
            r = this.updateDeco();
          let l = Ke(n, r, t.changes);
          i = Ee.extendWithRanges(i, l);
          if (!(this.flags & 7) && i.length == 0) {
            return false;
          } else {
            this.updateInner(i, t.startState.doc.length, o);
            if (t.transactions.length) this.lastUpdate = Date.now();
            return true;
          }
        }
        updateInner(t, e, i) {
          this.view.viewState.mustMeasureContent = true;
          this.updateChildren(t, e, i);
          let { observer: s } = this.view;
          s.ignore(() => {
            this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px";
            this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
            let t = st.chrome || st.ios ? { node: s.selectionRange.focusNode, written: false } : undefined;
            this.sync(this.view, t);
            this.flags &= ~7;
            if (t && (t.written || s.selectionRange.focusNode != t.node)) this.forceSelection = true;
            this.dom.style.height = "";
          });
          this.markedForComposition.forEach((t) => (t.flags &= ~8));
          let o = [];
          if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
            for (let n of this.children) if (n instanceof yt && n.widget instanceof Pe) o.push(n.dom);
          s.updateGaps(o);
        }
        updateChildren(t, e, i) {
          let s = i ? i.range.addToSet(t.slice()) : t;
          let o = this.childCursor(e);
          for (let n = s.length - 1; ; n--) {
            let t = n >= 0 ? s[n] : null;
            if (!t) break;
            let { fromA: e, toA: r, fromB: l, toB: a } = t,
              h,
              c,
              f,
              d;
            if (i && i.range.fromB < a && i.range.toB > l) {
              let t = Et.build(this.view.state.doc, l, i.range.fromB, this.decorations, this.dynamicDecorationMap);
              let e = Et.build(this.view.state.doc, i.range.toB, a, this.decorations, this.dynamicDecorationMap);
              c = t.breakAtStart;
              f = t.openStart;
              d = e.openEnd;
              let s = this.compositionView(i);
              if (e.breakAtStart) {
                s.breakAfter = 1;
              } else if (e.content.length && s.merge(s.length, s.length, e.content[0], false, e.openStart, 0)) {
                s.breakAfter = e.content[0].breakAfter;
                e.content.shift();
              }
              if (t.content.length && s.merge(0, 0, t.content[t.content.length - 1], true, 0, t.openEnd)) {
                t.content.pop();
              }
              h = t.content.concat(s).concat(e.content);
            } else {
              ({
                content: h,
                breakAtStart: c,
                openStart: f,
                openEnd: d,
              } = Et.build(this.view.state.doc, l, a, this.decorations, this.dynamicDecorationMap));
            }
            let { i: u, off: p } = o.findPos(r, 1);
            let { i: g, off: m } = o.findPos(e, -1);
            Y(this, g, m, u, p, h, c, f, d);
          }
          if (i) this.fixCompositionDOM(i);
        }
        compositionView(t) {
          let e = new nt(t.text.nodeValue);
          e.flags |= 8;
          for (let { deco: s } of t.marks) e = new rt(s, [e], e.length);
          let i = new bt();
          i.append(e, 0);
          return i;
        }
        fixCompositionDOM(t) {
          let e = (t, e) => {
            e.flags |= 8 | (e.children.some((t) => t.flags & 7) ? 1 : 0);
            this.markedForComposition.add(e);
            let i = K.get(t);
            if (i && i != e) i.dom = null;
            e.setDOM(t);
          };
          let i = this.childPos(t.range.fromB, 1);
          let s = this.children[i.i];
          e(t.line, s);
          for (let o = t.marks.length - 1; o >= -1; o--) {
            i = s.childPos(i.off, 1);
            s = s.children[i.i];
            e(o >= 0 ? t.marks[o].node : t.text, s);
          }
        }
        updateSelection(t = false, e = false) {
          if (t || !this.view.observer.selectionRange.focusNode) this.view.observer.readSelectionRange();
          let i = this.view.root.activeElement,
            s = i == this.dom;
          let o = !s && v(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
          if (!(s || e || o)) return;
          let n = this.forceSelection;
          this.forceSelection = false;
          let r = this.view.state.selection.main;
          let l = this.moveToLine(this.domAtPos(r.anchor));
          let a = r.empty ? l : this.moveToLine(this.domAtPos(r.head));
          if (st.gecko && r.empty && !this.hasComposition && He(l)) {
            let t = document.createTextNode("");
            this.view.observer.ignore(() => l.node.insertBefore(t, l.node.childNodes[l.offset] || null));
            l = a = new W(t, 0);
            n = true;
          }
          let h = this.view.observer.selectionRange;
          if (
            n ||
            !h.focusNode ||
            ((!y(l.node, l.offset, h.anchorNode, h.anchorOffset) || !y(a.node, a.offset, h.focusNode, h.focusOffset)) &&
              !this.suppressWidgetCursorChange(h, r))
          ) {
            this.view.observer.ignore(() => {
              if (st.android && st.chrome && this.dom.contains(h.focusNode) && Ie(h.focusNode, this.dom)) {
                this.dom.blur();
                this.dom.focus({ preventScroll: true });
              }
              let t = g(this.view.root);
              if (!t);
              else if (r.empty) {
                if (st.gecko) {
                  let t = We(l.node, l.offset);
                  if (t && t != (1 | 2)) {
                    let e = Fe(l.node, l.offset, t == 1 ? 1 : -1);
                    if (e) l = new W(e.node, e.offset);
                  }
                }
                t.collapse(l.node, l.offset);
                if (r.bidiLevel != null && t.caretBidiLevel !== undefined) t.caretBidiLevel = r.bidiLevel;
              } else if (t.extend) {
                t.collapse(l.node, l.offset);
                try {
                  t.extend(a.node, a.offset);
                } catch (e) {}
              } else {
                let e = document.createRange();
                if (r.anchor > r.head) [l, a] = [a, l];
                e.setEnd(a.node, a.offset);
                e.setStart(l.node, l.offset);
                t.removeAllRanges();
                t.addRange(e);
              }
              if (o && this.view.root.activeElement == this.dom) {
                this.dom.blur();
                if (i) i.focus();
              }
            });
            this.view.observer.setSelectionRange(l, a);
          }
          this.impreciseAnchor = l.precise ? null : new W(h.anchorNode, h.anchorOffset);
          this.impreciseHead = a.precise ? null : new W(h.focusNode, h.focusOffset);
        }
        suppressWidgetCursorChange(t, e) {
          return (
            this.hasComposition &&
            e.empty &&
            !this.compositionBarrier.size &&
            y(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset) &&
            this.posFromDOM(t.focusNode, t.focusOffset) == e.head
          );
        }
        enforceCursorAssoc() {
          if (this.hasComposition) return;
          let { view: t } = this,
            e = t.state.selection.main;
          let i = g(t.root);
          let { anchorNode: s, anchorOffset: o } = t.observer.selectionRange;
          if (!i || !e.empty || !e.assoc || !i.modify) return;
          let n = bt.find(this, e.head);
          if (!n) return;
          let r = n.posAtStart;
          if (e.head == r || e.head == r + n.length) return;
          let l = this.coordsAt(e.head, -1),
            a = this.coordsAt(e.head, 1);
          if (!l || !a || l.bottom > a.top) return;
          let h = this.domAtPos(e.head + e.assoc);
          i.collapse(h.node, h.offset);
          i.modify("move", e.assoc < 0 ? "forward" : "backward", "lineboundary");
          t.observer.readSelectionRange();
          let c = t.observer.selectionRange;
          if (t.docView.posFromDOM(c.anchorNode, c.anchorOffset) != e.from) i.collapse(s, o);
        }
        moveToLine(t) {
          let e = this.dom,
            i;
          if (t.node != e) return t;
          for (let s = t.offset; !i && s < e.childNodes.length; s++) {
            let t = K.get(e.childNodes[s]);
            if (t instanceof bt) i = t.domAtPos(0);
          }
          for (let s = t.offset - 1; !i && s >= 0; s--) {
            let t = K.get(e.childNodes[s]);
            if (t instanceof bt) i = t.domAtPos(t.length);
          }
          return i ? new W(i.node, i.offset, true) : t;
        }
        nearest(t) {
          for (let e = t; e; ) {
            let t = K.get(e);
            if (t && t.rootView == this) return t;
            e = e.parentNode;
          }
          return null;
        }
        posFromDOM(t, e) {
          let i = this.nearest(t);
          if (!i) throw new RangeError("Trying to find position for a DOM position outside of the document");
          return i.localPosFromDOM(t, e) + i.posAtStart;
        }
        domAtPos(t) {
          let { i: e, off: i } = this.childCursor().findPos(t, -1);
          for (; e < this.children.length - 1; ) {
            let t = this.children[e];
            if (i < t.length || t instanceof bt) break;
            e++;
            i = 0;
          }
          return this.children[e].domAtPos(i);
        }
        coordsAt(t, e) {
          let i = null,
            s = 0;
          for (let o = this.length, n = this.children.length - 1; n >= 0; n--) {
            let r = this.children[n],
              l = o - r.breakAfter,
              a = l - r.length;
            if (l < t) break;
            if (a <= t && (a < t || r.covers(-1)) && (l > t || r.covers(1)) && (!i || (r instanceof bt && !(i instanceof bt && e >= 0)))) {
              i = r;
              s = a;
            }
            o = a;
          }
          return i ? i.coordsAt(t - s, e) : null;
        }
        coordsForChar(t) {
          let { i: e, off: i } = this.childPos(t, 1),
            o = this.children[e];
          if (!(o instanceof bt)) return null;
          while (o.children.length) {
            let { i: t, off: e } = o.childPos(i, 1);
            for (; ; t++) {
              if (t == o.children.length) return null;
              if ((o = o.children[t]).length) break;
            }
            i = e;
          }
          if (!(o instanceof nt)) return null;
          let n = (0, s.findClusterBreak)(o.text, i);
          if (n == i) return null;
          let r = L(o.dom, i, n).getClientRects();
          for (let s = 0; s < r.length; s++) {
            let t = r[s];
            if (s == r.length - 1 || (t.top < t.bottom && t.left < t.right)) return t;
          }
          return null;
        }
        measureVisibleLineHeights(t) {
          let e = [],
            { from: i, to: s } = t;
          let o = this.view.contentDOM.clientWidth;
          let n = o > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1;
          let r = -1,
            l = this.view.textDirection == Lt.LTR;
          for (let a = 0, h = 0; h < this.children.length; h++) {
            let t = this.children[h],
              c = a + t.length;
            if (c > s) break;
            if (a >= i) {
              let i = t.dom.getBoundingClientRect();
              e.push(i.height);
              if (n) {
                let e = t.dom.lastChild;
                let s = e ? b(e) : [];
                if (s.length) {
                  let t = s[s.length - 1];
                  let e = l ? t.right - i.left : i.right - t.left;
                  if (e > r) {
                    r = e;
                    this.minWidth = o;
                    this.minWidthFrom = a;
                    this.minWidthTo = c;
                  }
                }
              }
            }
            a = c + t.breakAfter;
          }
          return e;
        }
        textDirectionAt(t) {
          let { i: e } = this.childPos(t, 1);
          return getComputedStyle(this.children[e].dom).direction == "rtl" ? Lt.RTL : Lt.LTR;
        }
        measureTextSize() {
          for (let o of this.children) {
            if (o instanceof bt) {
              let t = o.measureTextSize();
              if (t) return t;
            }
          }
          let t = document.createElement("div"),
            e,
            i,
            s;
          t.className = "cm-line";
          t.style.width = "99999px";
          t.style.position = "absolute";
          t.textContent = "abc def ghi jkl mno pqr stu";
          this.view.observer.ignore(() => {
            this.dom.appendChild(t);
            let o = b(t.firstChild)[0];
            e = t.getBoundingClientRect().height;
            i = o ? o.width / 27 : 7;
            s = o ? o.height : e;
            t.remove();
          });
          return { lineHeight: e, charWidth: i, textHeight: s };
        }
        childCursor(t = this.length) {
          let e = this.children.length;
          if (e) t -= this.children[--e].length;
          return new q(this.children, t, e);
        }
        computeBlockGapDeco() {
          let t = [],
            e = this.view.viewState;
          for (let i = 0, s = 0; ; s++) {
            let o = s == e.viewports.length ? null : e.viewports[s];
            let n = o ? o.from - 1 : this.length;
            if (n > i) {
              let s = (e.lineBlockAt(n).bottom - e.lineBlockAt(i).top) / this.view.scaleY;
              t.push(Mt.replace({ widget: new Pe(s), block: true, inclusive: true, isBlockGap: true }).range(i, n));
            }
            if (!o) break;
            i = o.to + 1;
          }
          return Mt.set(t);
        }
        updateDeco() {
          let t = 1;
          let e = this.view.state.facet(xe).map((e) => {
            let i = (this.dynamicDecorationMap[t++] = typeof e == "function");
            return i ? e(this.view) : e;
          });
          let i = false,
            o = this.view.state.facet(Me).map((t, e) => {
              let s = typeof t == "function";
              if (s) i = true;
              return s ? t(this.view) : t;
            });
          if (o.length) {
            this.dynamicDecorationMap[t++] = i;
            e.push(s.RangeSet.join(o));
          }
          this.decorations = [this.compositionBarrier, ...e, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco];
          while (t < this.decorations.length) this.dynamicDecorationMap[t++] = false;
          return this.decorations;
        }
        maybeCreateCompositionBarrier() {
          let {
            main: { head: t, empty: e },
          } = this.view.state.selection;
          if (!e) return false;
          let i = null;
          for (let s of this.decorations) {
            s.between(t, t, (e, s, o) => {
              if (o.point) i = false;
              else if (o.endSide < 0 && e < t && s == t) i = true;
            });
            if (i === false) break;
          }
          this.compositionBarrier = i ? Mt.set(Le.range(t)) : Mt.none;
          return !!i;
        }
        clearCompositionBarrier() {
          this.compositionBarrier = Mt.none;
        }
        scrollIntoView(t) {
          if (t.isSnapshot) {
            let e = this.view.viewState.lineBlockAt(t.range.head);
            this.view.scrollDOM.scrollTop = e.top - t.yMargin;
            this.view.scrollDOM.scrollLeft = t.xMargin;
            return;
          }
          for (let h of this.view.state.facet(fe)) {
            try {
              if (h(this.view, t.range, t)) return true;
            } catch (a) {
              pe(this.view.state, a, "scroll handler");
            }
          }
          let { range: e } = t;
          let i = this.coordsAt(e.head, e.empty ? e.assoc : e.head > e.anchor ? -1 : 1),
            s;
          if (!i) return;
          if (!e.empty && (s = this.coordsAt(e.anchor, e.anchor > e.head ? -1 : 1)))
            i = {
              left: Math.min(i.left, s.left),
              top: Math.min(i.top, s.top),
              right: Math.max(i.right, s.right),
              bottom: Math.max(i.bottom, s.bottom),
            };
          let o = Te(this.view);
          let n = { left: i.left - o.left, top: i.top - o.top, right: i.right + o.right, bottom: i.bottom + o.bottom };
          let { offsetWidth: r, offsetHeight: l } = this.view.scrollDOM;
          D(
            this.view.scrollDOM,
            n,
            e.head < e.anchor ? -1 : 1,
            t.x,
            t.y,
            Math.max(Math.min(t.xMargin, r), -r),
            Math.max(Math.min(t.yMargin, l), -l),
            this.view.textDirection == Lt.LTR
          );
        }
      }
      const Le = Mt.widget({ side: -1, widget: Bt.inline });
      function He(t) {
        return (
          t.node.nodeType == 1 &&
          t.node.firstChild &&
          (t.offset == 0 || t.node.childNodes[t.offset - 1].contentEditable == "false") &&
          (t.offset == t.node.childNodes.length || t.node.childNodes[t.offset].contentEditable == "false")
        );
      }
      class Pe extends St {
        constructor(t) {
          super();
          this.height = t;
        }
        toDOM() {
          let t = document.createElement("div");
          t.className = "cm-gap";
          this.updateDOM(t);
          return t;
        }
        eq(t) {
          return t.height == this.height;
        }
        updateDOM(t) {
          t.style.height = this.height + "px";
          return true;
        }
        get editable() {
          return true;
        }
        get estimatedHeight() {
          return this.height;
        }
        ignoreEvent() {
          return false;
        }
      }
      function Ve(t, e) {
        let i = t.observer.selectionRange;
        let s = i.focusNode && Fe(i.focusNode, i.focusOffset, 0);
        if (!s) return null;
        let o = e - s.offset;
        return { from: o, to: o + s.node.nodeValue.length, node: s.node };
      }
      function Ne(t, e, i) {
        let s = Ve(t, i);
        if (!s) return null;
        let { node: o, from: n, to: r } = s,
          l = o.nodeValue;
        if (/[\n\r]/.test(l)) return null;
        if (t.state.doc.sliceString(s.from, s.to) != l) return null;
        let a = e.invertedDesc;
        let h = new Ee(a.mapPos(n), a.mapPos(r), n, r);
        let c = [];
        for (let f = o.parentNode; ; f = f.parentNode) {
          let e = K.get(f);
          if (e instanceof rt) c.push({ node: f, deco: e.mark });
          else if (e instanceof bt || (f.nodeName == "DIV" && f.parentNode == t.contentDOM)) return { range: h, text: o, marks: c, line: f };
          else if (f != t.contentDOM) c.push({ node: f, deco: new kt({ inclusive: true, attributes: vt(f), tagName: f.tagName.toLowerCase() }) });
          else return null;
        }
      }
      function Fe(t, e, i) {
        if (i <= 0)
          for (let s = t, o = e; ; ) {
            if (s.nodeType == 3) return { node: s, offset: o };
            if (s.nodeType == 1 && o > 0) {
              s = s.childNodes[o - 1];
              o = M(s);
            } else {
              break;
            }
          }
        if (i >= 0)
          for (let s = t, o = e; ; ) {
            if (s.nodeType == 3) return { node: s, offset: o };
            if (s.nodeType == 1 && o < s.childNodes.length && i >= 0) {
              s = s.childNodes[o];
              o = 0;
            } else {
              break;
            }
          }
        return null;
      }
      function We(t, e) {
        if (t.nodeType != 1) return 0;
        return (
          (e && t.childNodes[e - 1].contentEditable == "false" ? 1 : 0) |
          (e < t.childNodes.length && t.childNodes[e].contentEditable == "false" ? 2 : 0)
        );
      }
      let ze = class t {
        constructor() {
          this.changes = [];
        }
        compareRange(t, e) {
          Ot(t, e, this.changes);
        }
        comparePoint(t, e) {
          Ot(t, e, this.changes);
        }
      };
      function Ke(t, e, i) {
        let o = new ze();
        s.RangeSet.compare(t, e, i, o);
        return o.changes;
      }
      function Ie(t, e) {
        for (let i = t; i && i != e; i = i.assignedSlot || i.parentNode) {
          if (i.nodeType == 1 && i.contentEditable == "false") {
            return true;
          }
        }
        return false;
      }
      function qe(t, e) {
        let i = false;
        if (e)
          t.iterChangedRanges((t, s) => {
            if (t < e.to && s > e.from) i = true;
          });
        return i;
      }
      function Ye(t, e, i = 1) {
        let o = t.charCategorizer(e);
        let n = t.doc.lineAt(e),
          r = e - n.from;
        if (n.length == 0) return s.EditorSelection.cursor(e);
        if (r == 0) i = 1;
        else if (r == n.length) i = -1;
        let l = r,
          a = r;
        if (i < 0) l = (0, s.findClusterBreak)(n.text, r, false);
        else a = (0, s.findClusterBreak)(n.text, r);
        let h = o(n.text.slice(l, a));
        while (l > 0) {
          let t = (0, s.findClusterBreak)(n.text, l, false);
          if (o(n.text.slice(t, l)) != h) break;
          l = t;
        }
        while (a < n.length) {
          let t = (0, s.findClusterBreak)(n.text, a);
          if (o(n.text.slice(a, t)) != h) break;
          a = t;
        }
        return s.EditorSelection.range(l + n.from, a + n.from);
      }
      function Xe(t, e) {
        return e.left > t ? e.left - t : Math.max(0, t - e.right);
      }
      function _e(t, e) {
        return e.top > t ? e.top - t : Math.max(0, t - e.bottom);
      }
      function Ge(t, e) {
        return t.top < e.bottom - 1 && t.bottom > e.top + 1;
      }
      function je(t, e) {
        return e < t.top ? { top: e, left: t.left, right: t.right, bottom: t.bottom } : t;
      }
      function $e(t, e) {
        return e > t.bottom ? { top: t.top, left: t.left, right: t.right, bottom: e } : t;
      }
      function Ue(t, e, i) {
        let s,
          o,
          n,
          r,
          l = false;
        let a, h, c, f;
        for (let p = t.firstChild; p; p = p.nextSibling) {
          let t = b(p);
          for (let d = 0; d < t.length; d++) {
            let u = t[d];
            if (o && Ge(o, u)) u = je($e(u, o.bottom), o.top);
            let g = Xe(e, u),
              m = _e(i, u);
            if (g == 0 && m == 0) return p.nodeType == 3 ? Qe(p, e, i) : Ue(p, e, i);
            if (!s || r > m || (r == m && n > g)) {
              s = p;
              o = u;
              n = g;
              r = m;
              let a = m ? (i < u.top ? -1 : 1) : g ? (e < u.left ? -1 : 1) : 0;
              l = !a || (a > 0 ? d < t.length - 1 : d > 0);
            }
            if (g == 0) {
              if (i > u.bottom && (!c || c.bottom < u.bottom)) {
                a = p;
                c = u;
              } else if (i < u.top && (!f || f.top > u.top)) {
                h = p;
                f = u;
              }
            } else if (c && Ge(c, u)) {
              c = $e(c, u.bottom);
            } else if (f && Ge(f, u)) {
              f = je(f, u.top);
            }
          }
        }
        if (c && c.bottom >= i) {
          s = a;
          o = c;
        } else if (f && f.top <= i) {
          s = h;
          o = f;
        }
        if (!s) return { node: t, offset: 0 };
        let d = Math.max(o.left, Math.min(o.right, e));
        if (s.nodeType == 3) return Qe(s, d, i);
        if (l && s.contentEditable != "false") return Ue(s, d, i);
        let u = Array.prototype.indexOf.call(t.childNodes, s) + (e >= (o.left + o.right) / 2 ? 1 : 0);
        return { node: t, offset: u };
      }
      function Qe(t, e, i) {
        let s = t.nodeValue.length;
        let o = -1,
          n = 1e9,
          r = 0;
        for (let l = 0; l < s; l++) {
          let s = L(t, l, l + 1).getClientRects();
          for (let a = 0; a < s.length; a++) {
            let h = s[a];
            if (h.top == h.bottom) continue;
            if (!r) r = e - h.left;
            let c = (h.top > i ? h.top - i : i - h.bottom) - 1;
            if (h.left - 1 <= e && h.right + 1 >= e && c < n) {
              let i = e >= (h.left + h.right) / 2,
                s = i;
              if (st.chrome || st.gecko) {
                let e = L(t, l).getBoundingClientRect();
                if (e.left == h.right) s = !i;
              }
              if (c <= 0) return { node: t, offset: l + (s ? 1 : 0) };
              o = l + (s ? 1 : 0);
              n = c;
            }
          }
        }
        return { node: t, offset: o > -1 ? o : r > 0 ? t.nodeValue.length : 0 };
      }
      function Je(t, e, i, s = -1) {
        var o, n;
        let r = t.contentDOM.getBoundingClientRect(),
          l = r.top + t.viewState.paddingTop;
        let a,
          { docHeight: h } = t.viewState;
        let { x: c, y: f } = e,
          d = f - l;
        if (d < 0) return 0;
        if (d > h) return t.state.doc.length;
        for (let y = t.viewState.heightOracle.textHeight / 2, S = false; ; ) {
          a = t.elementAtHeight(d);
          if (a.type == xt.Text) break;
          for (;;) {
            d = s > 0 ? a.bottom + y : a.top - y;
            if (d >= 0 && d <= h) break;
            if (S) return i ? null : 0;
            S = true;
            s = -s;
          }
        }
        f = l + d;
        let u = a.from;
        if (u < t.viewport.from) return t.viewport.from == 0 ? 0 : i ? null : Ze(t, r, a, c, f);
        if (u > t.viewport.to) return t.viewport.to == t.state.doc.length ? t.state.doc.length : i ? null : Ze(t, r, a, c, f);
        let p = t.dom.ownerDocument;
        let g = t.root.elementFromPoint ? t.root : p;
        let m = g.elementFromPoint(c, f);
        if (m && !t.contentDOM.contains(m)) m = null;
        if (!m) {
          c = Math.max(r.left + 1, Math.min(r.right - 1, c));
          m = g.elementFromPoint(c, f);
          if (m && !t.contentDOM.contains(m)) m = null;
        }
        let w,
          v = -1;
        if (m && ((o = t.docView.nearest(m)) === null || o === void 0 ? void 0 : o.isEditable) != false) {
          if (p.caretPositionFromPoint) {
            let t = p.caretPositionFromPoint(c, f);
            if (t) ({ offsetNode: w, offset: v } = t);
          } else if (p.caretRangeFromPoint) {
            let e = p.caretRangeFromPoint(c, f);
            if (e) {
              ({ startContainer: w, startOffset: v } = e);
              if (!t.contentDOM.contains(w) || (st.safari && ti(w, v, c)) || (st.chrome && ei(w, v, c))) w = undefined;
            }
          }
        }
        if (!w || !t.docView.dom.contains(w)) {
          let e = bt.find(t.docView, u);
          if (!e) return d > a.top + a.height / 2 ? a.to : a.from;
          ({ node: w, offset: v } = Ue(e.dom, c, f));
        }
        let b = t.docView.nearest(w);
        if (!b) return null;
        if (b.isWidget && ((n = b.dom) === null || n === void 0 ? void 0 : n.nodeType) == 1) {
          let t = b.dom.getBoundingClientRect();
          return e.y < t.top || (e.y <= t.bottom && e.x <= (t.left + t.right) / 2) ? b.posAtStart : b.posAtEnd;
        } else {
          return b.localPosFromDOM(w, v) + b.posAtStart;
        }
      }
      function Ze(t, e, i, o, n) {
        let r = Math.round((o - e.left) * t.defaultCharacterWidth);
        if (t.lineWrapping && i.height > t.defaultLineHeight * 1.5) {
          let e = t.viewState.heightOracle.textHeight;
          let s = Math.floor((n - i.top - (t.defaultLineHeight - e) * 0.5) / e);
          r += s * t.viewState.heightOracle.lineLength;
        }
        let l = t.state.sliceDoc(i.from, i.to);
        return i.from + (0, s.findColumn)(l, r, t.state.tabSize);
      }
      function ti(t, e, i) {
        let s;
        if (t.nodeType != 3 || e != (s = t.nodeValue.length)) return false;
        for (let o = t.nextSibling; o; o = o.nextSibling) if (o.nodeType != 1 || o.nodeName != "BR") return false;
        return L(t, s - 1, s).getBoundingClientRect().left > i;
      }
      function ei(t, e, i) {
        if (e != 0) return false;
        for (let o = t; ; ) {
          let t = o.parentNode;
          if (!t || t.nodeType != 1 || t.firstChild != o) return false;
          if (t.classList.contains("cm-line")) break;
          o = t;
        }
        let s = t.nodeType == 1 ? t.getBoundingClientRect() : L(t, 0, Math.max(t.nodeValue.length, 1)).getBoundingClientRect();
        return i - s.left > 5;
      }
      function ii(t, e) {
        let i = t.lineBlockAt(e);
        if (Array.isArray(i.type))
          for (let s of i.type) {
            if (s.to > e || (s.to == e && (s.to == i.to || s.type == xt.Text))) return s;
          }
        return i;
      }
      function si(t, e, i, o) {
        let n = ii(t, e.head);
        let r =
          !o || n.type != xt.Text || !(t.lineWrapping || n.widgetLineBreaks)
            ? null
            : t.coordsAtPos(e.assoc < 0 && e.head > n.from ? e.head - 1 : e.head);
        if (r) {
          let e = t.dom.getBoundingClientRect();
          let o = t.textDirectionAt(n.from);
          let l = t.posAtCoords({ x: i == (o == Lt.LTR) ? e.right - 1 : e.left + 1, y: (r.top + r.bottom) / 2 });
          if (l != null) return s.EditorSelection.cursor(l, i ? -1 : 1);
        }
        return s.EditorSelection.cursor(i ? n.to : n.from, i ? -1 : 1);
      }
      function oi(t, e, i, s) {
        let o = t.state.doc.lineAt(e.head),
          n = t.bidiSpans(o);
        let r = t.textDirectionAt(o.from);
        for (let l = e, a = null; ; ) {
          let e = te(o, n, r, l, i),
            h = Zt;
          if (!e) {
            if (o.number == (i ? t.state.doc.lines : 1)) return l;
            h = "\n";
            o = t.state.doc.line(o.number + (i ? 1 : -1));
            n = t.bidiSpans(o);
            e = t.visualLineSide(o, !i);
          }
          if (!a) {
            if (!s) return e;
            a = s(h);
          } else if (!a(h)) {
            return l;
          }
          l = e;
        }
      }
      function ni(t, e, i) {
        let o = t.state.charCategorizer(e);
        let n = o(i);
        return (t) => {
          let e = o(t);
          if (n == s.CharCategory.Space) n = e;
          return n == e;
        };
      }
      function ri(t, e, i, o) {
        let n = e.head,
          r = i ? 1 : -1;
        if (n == (i ? t.state.doc.length : 0)) return s.EditorSelection.cursor(n, e.assoc);
        let l = e.goalColumn,
          a;
        let h = t.contentDOM.getBoundingClientRect();
        let c = t.coordsAtPos(n, e.assoc || -1),
          f = t.documentTop;
        if (c) {
          if (l == null) l = c.left - h.left;
          a = r < 0 ? c.top : c.bottom;
        } else {
          let e = t.viewState.lineBlockAt(n);
          if (l == null) l = Math.min(h.right - h.left, t.defaultCharacterWidth * (n - e.from));
          a = (r < 0 ? e.top : e.bottom) + f;
        }
        let d = h.left + l;
        let u = o !== null && o !== void 0 ? o : t.viewState.heightOracle.textHeight >> 1;
        for (let p = 0; ; p += 10) {
          let e = a + (u + p) * r;
          let i = Je(t, { x: d, y: e }, false, r);
          if (e < h.top || e > h.bottom || (r < 0 ? i < n : i > n)) {
            let o = t.docView.coordsForChar(i);
            let n = !o || e < o.top ? -1 : 1;
            return s.EditorSelection.cursor(i, n, undefined, l);
          }
        }
      }
      function li(t, e, i) {
        for (;;) {
          let s = 0;
          for (let o of t) {
            o.between(e - 1, e + 1, (t, o, n) => {
              if (e > t && e < o) {
                let n = s || i || (e - t < o - e ? -1 : 1);
                e = n < 0 ? t : o;
                s = n;
              }
            });
          }
          if (!s) return e;
        }
      }
      function ai(t, e, i) {
        let o = li(
          t.state.facet(ke).map((e) => e(t)),
          i.from,
          e.head > i.from ? -1 : 1
        );
        return o == i.from ? i : s.EditorSelection.cursor(o, o < i.from ? 1 : -1);
      }
      class hi {
        setSelectionOrigin(t) {
          this.lastSelectionOrigin = t;
          this.lastSelectionTime = Date.now();
        }
        constructor(t) {
          this.view = t;
          this.lastKeyCode = 0;
          this.lastKeyTime = 0;
          this.lastTouchTime = 0;
          this.lastFocusTime = 0;
          this.lastScrollTop = 0;
          this.lastScrollLeft = 0;
          this.pendingIOSKey = undefined;
          this.lastSelectionOrigin = null;
          this.lastSelectionTime = 0;
          this.lastEscPress = 0;
          this.lastContextMenu = 0;
          this.scrollHandlers = [];
          this.handlers = Object.create(null);
          this.composing = -1;
          this.compositionFirstChange = null;
          this.compositionEndedAt = 0;
          this.compositionPendingKey = false;
          this.compositionPendingChange = false;
          this.mouseSelection = null;
          this.draggedContent = null;
          this.handleEvent = this.handleEvent.bind(this);
          this.notifiedFocused = t.hasFocus;
          if (st.safari) t.contentDOM.addEventListener("input", () => null);
          if (st.gecko) ji(t.contentDOM.ownerDocument);
        }
        handleEvent(t) {
          if (!xi(this.view, t) || this.ignoreDuringComposition(t)) return;
          if (t.type == "keydown" && this.keydown(t)) return;
          this.runHandlers(t.type, t);
        }
        runHandlers(t, e) {
          let i = this.handlers[t];
          if (i) {
            for (let t of i.observers) t(this.view, e);
            for (let t of i.handlers) {
              if (e.defaultPrevented) break;
              if (t(this.view, e)) {
                e.preventDefault();
                break;
              }
            }
          }
        }
        ensureHandlers(t) {
          let e = fi(t),
            i = this.handlers,
            s = this.view.contentDOM;
          for (let o in e)
            if (o != "scroll") {
              let t = !e[o].handlers.length;
              let n = i[o];
              if (n && t != !n.handlers.length) {
                s.removeEventListener(o, this.handleEvent);
                n = null;
              }
              if (!n) s.addEventListener(o, this.handleEvent, { passive: t });
            }
          for (let o in i) if (o != "scroll" && !e[o]) s.removeEventListener(o, this.handleEvent);
          this.handlers = e;
        }
        keydown(t) {
          this.lastKeyCode = t.keyCode;
          this.lastKeyTime = Date.now();
          if (t.keyCode == 9 && Date.now() < this.lastEscPress + 2e3) return true;
          if (t.keyCode != 27 && pi.indexOf(t.keyCode) < 0) this.view.inputState.lastEscPress = 0;
          if (st.android && st.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8)) {
            this.view.observer.delayAndroidKey(t.key, t.keyCode);
            return true;
          }
          let e;
          if (
            st.ios &&
            !t.synthetic &&
            !t.altKey &&
            !t.metaKey &&
            (((e = di.find((e) => e.keyCode == t.keyCode)) && !t.ctrlKey) || (ui.indexOf(t.key) > -1 && t.ctrlKey && !t.shiftKey))
          ) {
            this.pendingIOSKey = e || t;
            setTimeout(() => this.flushIOSKey(), 250);
            return true;
          }
          if (t.keyCode != 229) this.view.observer.forceFlush();
          return false;
        }
        flushIOSKey(t) {
          let e = this.pendingIOSKey;
          if (!e) return false;
          if (e.key == "Enter" && t && t.from < t.to && /^\S+$/.test(t.insert.toString())) return false;
          this.pendingIOSKey = undefined;
          return H(this.view.contentDOM, e.key, e.keyCode, e instanceof KeyboardEvent ? e : undefined);
        }
        ignoreDuringComposition(t) {
          if (!/^key/.test(t.type)) return false;
          if (this.composing > 0) return true;
          if (st.safari && !st.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) {
            this.compositionPendingKey = false;
            return true;
          }
          return false;
        }
        startMouseSelection(t) {
          if (this.mouseSelection) this.mouseSelection.destroy();
          this.mouseSelection = t;
        }
        update(t) {
          if (this.mouseSelection) this.mouseSelection.update(t);
          if (this.draggedContent && t.docChanged) this.draggedContent = this.draggedContent.map(t.changes);
          if (t.transactions.length) this.lastKeyCode = this.lastSelectionTime = 0;
        }
        destroy() {
          if (this.mouseSelection) this.mouseSelection.destroy();
        }
      }
      function ci(t, e) {
        return (i, s) => {
          try {
            return e.call(t, s, i);
          } catch (o) {
            pe(i.state, o);
          }
        };
      }
      function fi(t) {
        let e = Object.create(null);
        function i(t) {
          return e[t] || (e[t] = { observers: [], handlers: [] });
        }
        for (let s of t) {
          let t = s.spec;
          if (t && t.domEventHandlers)
            for (let e in t.domEventHandlers) {
              let o = t.domEventHandlers[e];
              if (o) i(e).handlers.push(ci(s.value, o));
            }
          if (t && t.domEventObservers)
            for (let e in t.domEventObservers) {
              let o = t.domEventObservers[e];
              if (o) i(e).observers.push(ci(s.value, o));
            }
        }
        for (let s in Mi) i(s).handlers.push(Mi[s]);
        for (let s in ki) i(s).observers.push(ki[s]);
        return e;
      }
      const di = [
        { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
        { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
        { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
        { key: "Delete", keyCode: 46, inputType: "deleteContentForward" },
      ];
      const ui = "dthko";
      const pi = [16, 17, 18, 20, 91, 92, 224, 225];
      const gi = 6;
      function mi(t) {
        return Math.max(0, t) * 0.7 + 8;
      }
      function wi(t, e) {
        return Math.max(Math.abs(t.clientX - e.clientX), Math.abs(t.clientY - e.clientY));
      }
      class vi {
        constructor(t, e, i, o) {
          this.view = t;
          this.startEvent = e;
          this.style = i;
          this.mustSelect = o;
          this.scrollSpeed = { x: 0, y: 0 };
          this.scrolling = -1;
          this.lastEvent = e;
          this.scrollParent = T(t.contentDOM);
          this.atoms = t.state.facet(ke).map((e) => e(t));
          let n = t.contentDOM.ownerDocument;
          n.addEventListener("mousemove", (this.move = this.move.bind(this)));
          n.addEventListener("mouseup", (this.up = this.up.bind(this)));
          this.extend = e.shiftKey;
          this.multiple = t.state.facet(s.EditorState.allowMultipleSelections) && bi(t, e);
          this.dragging = Si(t, e) && Ni(e) == 1 ? null : false;
        }
        start(t) {
          if (this.dragging === false) this.select(t);
        }
        move(t) {
          var e;
          if (t.buttons == 0) return this.destroy();
          if (this.dragging || (this.dragging == null && wi(this.startEvent, t) < 10)) return;
          this.select((this.lastEvent = t));
          let i = 0,
            s = 0;
          let o = ((e = this.scrollParent) === null || e === void 0 ? void 0 : e.getBoundingClientRect()) || {
            left: 0,
            top: 0,
            right: this.view.win.innerWidth,
            bottom: this.view.win.innerHeight,
          };
          let n = Te(this.view);
          if (t.clientX - n.left <= o.left + gi) i = -mi(o.left - t.clientX);
          else if (t.clientX + n.right >= o.right - gi) i = mi(t.clientX - o.right);
          if (t.clientY - n.top <= o.top + gi) s = -mi(o.top - t.clientY);
          else if (t.clientY + n.bottom >= o.bottom - gi) s = mi(t.clientY - o.bottom);
          this.setScrollSpeed(i, s);
        }
        up(t) {
          if (this.dragging == null) this.select(this.lastEvent);
          if (!this.dragging) t.preventDefault();
          this.destroy();
        }
        destroy() {
          this.setScrollSpeed(0, 0);
          let t = this.view.contentDOM.ownerDocument;
          t.removeEventListener("mousemove", this.move);
          t.removeEventListener("mouseup", this.up);
          this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
        }
        setScrollSpeed(t, e) {
          this.scrollSpeed = { x: t, y: e };
          if (t || e) {
            if (this.scrolling < 0) this.scrolling = setInterval(() => this.scroll(), 50);
          } else if (this.scrolling > -1) {
            clearInterval(this.scrolling);
            this.scrolling = -1;
          }
        }
        scroll() {
          if (this.scrollParent) {
            this.scrollParent.scrollLeft += this.scrollSpeed.x;
            this.scrollParent.scrollTop += this.scrollSpeed.y;
          } else {
            this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y);
          }
          if (this.dragging === false) this.select(this.lastEvent);
        }
        skipAtoms(t) {
          let e = null;
          for (let i = 0; i < t.ranges.length; i++) {
            let o = t.ranges[i],
              n = null;
            if (o.empty) {
              let t = li(this.atoms, o.from, 0);
              if (t != o.from) n = s.EditorSelection.cursor(t, -1);
            } else {
              let t = li(this.atoms, o.from, -1);
              let e = li(this.atoms, o.to, 1);
              if (t != o.from || e != o.to) n = s.EditorSelection.range(o.from == o.anchor ? t : e, o.from == o.head ? t : e);
            }
            if (n) {
              if (!e) e = t.ranges.slice();
              e[i] = n;
            }
          }
          return e ? s.EditorSelection.create(e, t.mainIndex) : t;
        }
        select(t) {
          let { view: e } = this,
            i = this.skipAtoms(this.style.get(t, this.extend, this.multiple));
          if (this.mustSelect || !i.eq(e.state.selection, this.dragging === false)) this.view.dispatch({ selection: i, userEvent: "select.pointer" });
          this.mustSelect = false;
        }
        update(t) {
          if (this.style.update(t)) setTimeout(() => this.select(this.lastEvent), 20);
        }
      }
      function bi(t, e) {
        let i = t.state.facet(ie);
        return i.length ? i[0](e) : st.mac ? e.metaKey : e.ctrlKey;
      }
      function yi(t, e) {
        let i = t.state.facet(se);
        return i.length ? i[0](e) : st.mac ? !e.altKey : !e.ctrlKey;
      }
      function Si(t, e) {
        let { main: i } = t.state.selection;
        if (i.empty) return false;
        let s = g(t.root);
        if (!s || s.rangeCount == 0) return true;
        let o = s.getRangeAt(0).getClientRects();
        for (let n = 0; n < o.length; n++) {
          let t = o[n];
          if (t.left <= e.clientX && t.right >= e.clientX && t.top <= e.clientY && t.bottom >= e.clientY) return true;
        }
        return false;
      }
      function xi(t, e) {
        if (!e.bubbles) return true;
        if (e.defaultPrevented) return false;
        for (let i = e.target, s; i != t.contentDOM; i = i.parentNode)
          if (!i || i.nodeType == 11 || ((s = K.get(i)) && s.ignoreEvent(e))) return false;
        return true;
      }
      const Mi = Object.create(null);
      const ki = Object.create(null);
      const Ci = (st.ie && st.ie_version < 15) || (st.ios && st.webkit_version < 604);
      function Ai(t) {
        let e = t.dom.parentNode;
        if (!e) return;
        let i = e.appendChild(document.createElement("textarea"));
        i.style.cssText = "position: fixed; left: -10000px; top: 10px";
        i.focus();
        setTimeout(() => {
          t.focus();
          i.remove();
          Di(t, i.value);
        }, 50);
      }
      function Di(t, e) {
        let { state: i } = t,
          o,
          n = 1,
          r = i.toText(e);
        let l = r.lines == i.selection.ranges.length;
        let a = qi != null && i.selection.ranges.every((t) => t.empty) && qi == r.toString();
        if (a) {
          let t = -1;
          o = i.changeByRange((o) => {
            let a = i.doc.lineAt(o.from);
            if (a.from == t) return { range: o };
            t = a.from;
            let h = i.toText((l ? r.line(n++).text : e) + i.lineBreak);
            return { changes: { from: a.from, insert: h }, range: s.EditorSelection.cursor(o.from + h.length) };
          });
        } else if (l) {
          o = i.changeByRange((t) => {
            let e = r.line(n++);
            return { changes: { from: t.from, to: t.to, insert: e.text }, range: s.EditorSelection.cursor(t.from + e.length) };
          });
        } else {
          o = i.replaceSelection(r);
        }
        t.dispatch(o, { userEvent: "input.paste", scrollIntoView: true });
      }
      ki.scroll = (t) => {
        t.inputState.lastScrollTop = t.scrollDOM.scrollTop;
        t.inputState.lastScrollLeft = t.scrollDOM.scrollLeft;
      };
      Mi.keydown = (t, e) => {
        t.inputState.setSelectionOrigin("select");
        if (e.keyCode == 27) t.inputState.lastEscPress = Date.now();
        return false;
      };
      ki.touchstart = (t, e) => {
        t.inputState.lastTouchTime = Date.now();
        t.inputState.setSelectionOrigin("select.pointer");
      };
      ki.touchmove = (t) => {
        t.inputState.setSelectionOrigin("select.pointer");
      };
      Mi.mousedown = (t, e) => {
        t.observer.flush();
        if (t.inputState.lastTouchTime > Date.now() - 2e3) return false;
        let i = null;
        for (let s of t.state.facet(oe)) {
          i = s(t, e);
          if (i) break;
        }
        if (!i && e.button == 0) i = Fi(t, e);
        if (i) {
          let s = !t.hasFocus;
          t.inputState.startMouseSelection(new vi(t, e, i, s));
          if (s) t.observer.ignore(() => R(t.contentDOM));
          let o = t.inputState.mouseSelection;
          if (o) {
            o.start(e);
            return o.dragging === false;
          }
        }
        return false;
      };
      function Ti(t, e, i, o) {
        if (o == 1) {
          return s.EditorSelection.cursor(e, i);
        } else if (o == 2) {
          return Ye(t.state, e, i);
        } else {
          let i = bt.find(t.docView, e),
            o = t.state.doc.lineAt(i ? i.posAtEnd : e);
          let n = i ? i.posAtStart : o.from,
            r = i ? i.posAtEnd : o.to;
          if (r < t.state.doc.length && r == o.to) r++;
          return s.EditorSelection.range(n, r);
        }
      }
      let Oi = (t, e) => t >= e.top && t <= e.bottom;
      let Ei = (t, e, i) => Oi(e, i) && t >= i.left && t <= i.right;
      function Ri(t, e, i, s) {
        let o = bt.find(t.docView, e);
        if (!o) return 1;
        let n = e - o.posAtStart;
        if (n == 0) return 1;
        if (n == o.length) return -1;
        let r = o.coordsAt(n, -1);
        if (r && Ei(i, s, r)) return -1;
        let l = o.coordsAt(n, 1);
        if (l && Ei(i, s, l)) return 1;
        return r && Oi(s, r) ? -1 : 1;
      }
      function Bi(t, e) {
        let i = t.posAtCoords({ x: e.clientX, y: e.clientY }, false);
        return { pos: i, bias: Ri(t, i, e.clientX, e.clientY) };
      }
      const Li = st.ie && st.ie_version <= 11;
      let Hi = null,
        Pi = 0,
        Vi = 0;
      function Ni(t) {
        if (!Li) return t.detail;
        let e = Hi,
          i = Vi;
        Hi = t;
        Vi = Date.now();
        return (Pi = !e || (i > Date.now() - 400 && Math.abs(e.clientX - t.clientX) < 2 && Math.abs(e.clientY - t.clientY) < 2) ? (Pi + 1) % 3 : 1);
      }
      function Fi(t, e) {
        let i = Bi(t, e),
          o = Ni(e);
        let n = t.state.selection;
        return {
          update(t) {
            if (t.docChanged) {
              i.pos = t.changes.mapPos(i.pos);
              n = n.map(t.changes);
            }
          },
          get(e, r, l) {
            let a = Bi(t, e),
              h;
            let c = Ti(t, a.pos, a.bias, o);
            if (i.pos != a.pos && !r) {
              let e = Ti(t, i.pos, i.bias, o);
              let n = Math.min(e.from, c.from),
                r = Math.max(e.to, c.to);
              c = n < c.from ? s.EditorSelection.range(n, r) : s.EditorSelection.range(r, n);
            }
            if (r) return n.replaceRange(n.main.extend(c.from, c.to));
            else if (l && o == 1 && n.ranges.length > 1 && (h = Wi(n, a.pos))) return h;
            else if (l) return n.addRange(c);
            else return s.EditorSelection.create([c]);
          },
        };
      }
      function Wi(t, e) {
        for (let i = 0; i < t.ranges.length; i++) {
          let { from: o, to: n } = t.ranges[i];
          if (o <= e && n >= e)
            return s.EditorSelection.create(
              t.ranges.slice(0, i).concat(t.ranges.slice(i + 1)),
              t.mainIndex == i ? 0 : t.mainIndex - (t.mainIndex > i ? 1 : 0)
            );
        }
        return null;
      }
      Mi.dragstart = (t, e) => {
        let {
          selection: { main: i },
        } = t.state;
        if (e.target.draggable) {
          let o = t.docView.nearest(e.target);
          if (o && o.isWidget) {
            let t = o.posAtStart,
              e = t + o.length;
            if (t >= i.to || e <= i.from) i = s.EditorSelection.range(t, e);
          }
        }
        let { inputState: o } = t;
        if (o.mouseSelection) o.mouseSelection.dragging = true;
        o.draggedContent = i;
        if (e.dataTransfer) {
          e.dataTransfer.setData("Text", t.state.sliceDoc(i.from, i.to));
          e.dataTransfer.effectAllowed = "copyMove";
        }
        return false;
      };
      Mi.dragend = (t) => {
        t.inputState.draggedContent = null;
        return false;
      };
      function zi(t, e, i, s) {
        if (!i) return;
        let o = t.posAtCoords({ x: e.clientX, y: e.clientY }, false);
        let { draggedContent: n } = t.inputState;
        let r = s && n && yi(t, e) ? { from: n.from, to: n.to } : null;
        let l = { from: o, insert: i };
        let a = t.state.changes(r ? [r, l] : l);
        t.focus();
        t.dispatch({ changes: a, selection: { anchor: a.mapPos(o, -1), head: a.mapPos(o, 1) }, userEvent: r ? "move.drop" : "input.drop" });
        t.inputState.draggedContent = null;
      }
      Mi.drop = (t, e) => {
        if (!e.dataTransfer) return false;
        if (t.state.readOnly) return true;
        let i = e.dataTransfer.files;
        if (i && i.length) {
          let s = Array(i.length),
            o = 0;
          let n = () => {
            if (++o == i.length) zi(t, e, s.filter((t) => t != null).join(t.state.lineBreak), false);
          };
          for (let t = 0; t < i.length; t++) {
            let e = new FileReader();
            e.onerror = n;
            e.onload = () => {
              if (!/[\x00-\x08\x0e-\x1f]{2}/.test(e.result)) s[t] = e.result;
              n();
            };
            e.readAsText(i[t]);
          }
          return true;
        } else {
          let i = e.dataTransfer.getData("Text");
          if (i) {
            zi(t, e, i, true);
            return true;
          }
        }
        return false;
      };
      Mi.paste = (t, e) => {
        if (t.state.readOnly) return true;
        t.observer.flush();
        let i = Ci ? null : e.clipboardData;
        if (i) {
          Di(t, i.getData("text/plain") || i.getData("text/uri-list"));
          return true;
        } else {
          Ai(t);
          return false;
        }
      };
      function Ki(t, e) {
        let i = t.dom.parentNode;
        if (!i) return;
        let s = i.appendChild(document.createElement("textarea"));
        s.style.cssText = "position: fixed; left: -10000px; top: 10px";
        s.value = e;
        s.focus();
        s.selectionEnd = e.length;
        s.selectionStart = 0;
        setTimeout(() => {
          s.remove();
          t.focus();
        }, 50);
      }
      function Ii(t) {
        let e = [],
          i = [],
          s = false;
        for (let o of t.selection.ranges)
          if (!o.empty) {
            e.push(t.sliceDoc(o.from, o.to));
            i.push(o);
          }
        if (!e.length) {
          let o = -1;
          for (let { from: s } of t.selection.ranges) {
            let n = t.doc.lineAt(s);
            if (n.number > o) {
              e.push(n.text);
              i.push({ from: n.from, to: Math.min(t.doc.length, n.to + 1) });
            }
            o = n.number;
          }
          s = true;
        }
        return { text: e.join(t.lineBreak), ranges: i, linewise: s };
      }
      let qi = null;
      Mi.copy = Mi.cut = (t, e) => {
        let { text: i, ranges: s, linewise: o } = Ii(t.state);
        if (!i && !o) return false;
        qi = o ? i : null;
        if (e.type == "cut" && !t.state.readOnly) t.dispatch({ changes: s, scrollIntoView: true, userEvent: "delete.cut" });
        let n = Ci ? null : e.clipboardData;
        if (n) {
          n.clearData();
          n.setData("text/plain", i);
          return true;
        } else {
          Ki(t, i);
          return false;
        }
      };
      const Yi = s.Annotation.define();
      function Xi(t, e) {
        let i = [];
        for (let s of t.facet(ae)) {
          let o = s(t, e);
          if (o) i.push(o);
        }
        return i ? t.update({ effects: i, annotations: Yi.of(true) }) : null;
      }
      function _i(t) {
        setTimeout(() => {
          let e = t.hasFocus;
          if (e != t.inputState.notifiedFocused) {
            let i = Xi(t.state, e);
            if (i) t.dispatch(i);
            else t.update([]);
          }
        }, 10);
      }
      ki.focus = (t) => {
        t.inputState.lastFocusTime = Date.now();
        if (!t.scrollDOM.scrollTop && (t.inputState.lastScrollTop || t.inputState.lastScrollLeft)) {
          t.scrollDOM.scrollTop = t.inputState.lastScrollTop;
          t.scrollDOM.scrollLeft = t.inputState.lastScrollLeft;
        }
        _i(t);
      };
      ki.blur = (t) => {
        t.observer.clearSelectionRange();
        _i(t);
      };
      ki.compositionstart = ki.compositionupdate = (t) => {
        if (t.inputState.compositionFirstChange == null) t.inputState.compositionFirstChange = true;
        if (t.inputState.composing < 0) {
          t.inputState.composing = 0;
          if (t.docView.maybeCreateCompositionBarrier()) {
            t.update([]);
            t.docView.clearCompositionBarrier();
          }
        }
      };
      ki.compositionend = (t) => {
        t.inputState.composing = -1;
        t.inputState.compositionEndedAt = Date.now();
        t.inputState.compositionPendingKey = true;
        t.inputState.compositionPendingChange = t.observer.pendingRecords().length > 0;
        t.inputState.compositionFirstChange = null;
        if (st.chrome && st.android) {
          t.observer.flushSoon();
        } else if (t.inputState.compositionPendingChange) {
          Promise.resolve().then(() => t.observer.flush());
        } else {
          setTimeout(() => {
            if (t.inputState.composing < 0 && t.docView.hasComposition) t.update([]);
          }, 50);
        }
      };
      ki.contextmenu = (t) => {
        t.inputState.lastContextMenu = Date.now();
      };
      Mi.beforeinput = (t, e) => {
        var i;
        let s;
        if (st.chrome && st.android && (s = di.find((t) => t.inputType == e.inputType))) {
          t.observer.delayAndroidKey(s.key, s.keyCode);
          if (s.key == "Backspace" || s.key == "Delete") {
            let e = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
            setTimeout(() => {
              var i;
              if ((((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0) > e + 10 && t.hasFocus) {
                t.contentDOM.blur();
                t.focus();
              }
            }, 100);
          }
        }
        if (st.ios && e.inputType == "deleteContentForward") {
          t.observer.flushSoon();
        }
        return false;
      };
      const Gi = new Set();
      function ji(t) {
        if (!Gi.has(t)) {
          Gi.add(t);
          t.addEventListener("copy", () => {});
          t.addEventListener("cut", () => {});
        }
      }
      const $i = ["pre-wrap", "normal", "pre-line", "break-spaces"];
      class Ui {
        constructor(t) {
          this.lineWrapping = t;
          this.doc = s.Text.empty;
          this.heightSamples = {};
          this.lineHeight = 14;
          this.charWidth = 7;
          this.textHeight = 14;
          this.lineLength = 30;
          this.heightChanged = false;
        }
        heightForGap(t, e) {
          let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
          if (this.lineWrapping) i += Math.max(0, Math.ceil((e - t - i * this.lineLength * 0.5) / this.lineLength));
          return this.lineHeight * i;
        }
        heightForLine(t) {
          if (!this.lineWrapping) return this.lineHeight;
          let e = 1 + Math.max(0, Math.ceil((t - this.lineLength) / (this.lineLength - 5)));
          return e * this.lineHeight;
        }
        setDoc(t) {
          this.doc = t;
          return this;
        }
        mustRefreshForWrapping(t) {
          return $i.indexOf(t) > -1 != this.lineWrapping;
        }
        mustRefreshForHeights(t) {
          let e = false;
          for (let i = 0; i < t.length; i++) {
            let s = t[i];
            if (s < 0) {
              i++;
            } else if (!this.heightSamples[Math.floor(s * 10)]) {
              e = true;
              this.heightSamples[Math.floor(s * 10)] = true;
            }
          }
          return e;
        }
        refresh(t, e, i, s, o, n) {
          let r = $i.indexOf(t) > -1;
          let l = Math.round(e) != Math.round(this.lineHeight) || this.lineWrapping != r;
          this.lineWrapping = r;
          this.lineHeight = e;
          this.charWidth = i;
          this.textHeight = s;
          this.lineLength = o;
          if (l) {
            this.heightSamples = {};
            for (let t = 0; t < n.length; t++) {
              let e = n[t];
              if (e < 0) t++;
              else this.heightSamples[Math.floor(e * 10)] = true;
            }
          }
          return l;
        }
      }
      class Qi {
        constructor(t, e) {
          this.from = t;
          this.heights = e;
          this.index = 0;
        }
        get more() {
          return this.index < this.heights.length;
        }
      }
      class Ji {
        constructor(t, e, i, s, o) {
          this.from = t;
          this.length = e;
          this.top = i;
          this.height = s;
          this._content = o;
        }
        get type() {
          return typeof this._content == "number" ? xt.Text : Array.isArray(this._content) ? this._content : this._content.type;
        }
        get to() {
          return this.from + this.length;
        }
        get bottom() {
          return this.top + this.height;
        }
        get widget() {
          return this._content instanceof At ? this._content.widget : null;
        }
        get widgetLineBreaks() {
          return typeof this._content == "number" ? this._content : 0;
        }
        join(t) {
          let e = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t._content) ? t._content : [t]);
          return new Ji(this.from, this.length + t.length, this.top, this.height + t.height, e);
        }
      }
      var Zi = (function (t) {
        t[(t["ByPos"] = 0)] = "ByPos";
        t[(t["ByHeight"] = 1)] = "ByHeight";
        t[(t["ByPosNoHeight"] = 2)] = "ByPosNoHeight";
        return t;
      })(Zi || (Zi = {}));
      const ts = 0.001;
      class es {
        constructor(t, e, i = 2) {
          this.length = t;
          this.height = e;
          this.flags = i;
        }
        get outdated() {
          return (this.flags & 2) > 0;
        }
        set outdated(t) {
          this.flags = (t ? 2 : 0) | (this.flags & ~2);
        }
        setHeight(t, e) {
          if (this.height != e) {
            if (Math.abs(this.height - e) > ts) t.heightChanged = true;
            this.height = e;
          }
        }
        replace(t, e, i) {
          return es.of(i);
        }
        decomposeLeft(t, e) {
          e.push(this);
        }
        decomposeRight(t, e) {
          e.push(this);
        }
        applyChanges(t, e, i, s) {
          let o = this,
            n = i.doc;
          for (let r = s.length - 1; r >= 0; r--) {
            let { fromA: l, toA: a, fromB: h, toB: c } = s[r];
            let f = o.lineAt(l, Zi.ByPosNoHeight, i.setDoc(e), 0, 0);
            let d = f.to >= a ? f : o.lineAt(a, Zi.ByPosNoHeight, i, 0, 0);
            c += d.to - a;
            a = d.to;
            while (r > 0 && f.from <= s[r - 1].toA) {
              l = s[r - 1].fromA;
              h = s[r - 1].fromB;
              r--;
              if (l < f.from) f = o.lineAt(l, Zi.ByPosNoHeight, i, 0, 0);
            }
            h += f.from - l;
            l = f.from;
            let u = as.build(i.setDoc(n), t, h, c);
            o = o.replace(l, a, u);
          }
          return o.updateHeight(i, 0);
        }
        static empty() {
          return new ss(0, 0);
        }
        static of(t) {
          if (t.length == 1) return t[0];
          let e = 0,
            i = t.length,
            s = 0,
            o = 0;
          for (;;) {
            if (e == i) {
              if (s > o * 2) {
                let o = t[e - 1];
                if (o.break) t.splice(--e, 1, o.left, null, o.right);
                else t.splice(--e, 1, o.left, o.right);
                i += 1 + o.break;
                s -= o.size;
              } else if (o > s * 2) {
                let e = t[i];
                if (e.break) t.splice(i, 1, e.left, null, e.right);
                else t.splice(i, 1, e.left, e.right);
                i += 2 + e.break;
                o -= e.size;
              } else {
                break;
              }
            } else if (s < o) {
              let i = t[e++];
              if (i) s += i.size;
            } else {
              let e = t[--i];
              if (e) o += e.size;
            }
          }
          let n = 0;
          if (t[e - 1] == null) {
            n = 1;
            e--;
          } else if (t[e] == null) {
            n = 1;
            i++;
          }
          return new ns(es.of(t.slice(0, e)), n, es.of(t.slice(i)));
        }
      }
      es.prototype.size = 1;
      class is extends es {
        constructor(t, e, i) {
          super(t, e);
          this.deco = i;
        }
        blockAt(t, e, i, s) {
          return new Ji(s, this.length, i, this.height, this.deco || 0);
        }
        lineAt(t, e, i, s, o) {
          return this.blockAt(0, i, s, o);
        }
        forEachLine(t, e, i, s, o, n) {
          if (t <= o + this.length && e >= o) n(this.blockAt(0, i, s, o));
        }
        updateHeight(t, e = 0, i = false, s) {
          if (s && s.from <= e && s.more) this.setHeight(t, s.heights[s.index++]);
          this.outdated = false;
          return this;
        }
        toString() {
          return `block(${this.length})`;
        }
      }
      class ss extends is {
        constructor(t, e) {
          super(t, e, null);
          this.collapsed = 0;
          this.widgetHeight = 0;
          this.breaks = 0;
        }
        blockAt(t, e, i, s) {
          return new Ji(s, this.length, i, this.height, this.breaks);
        }
        replace(t, e, i) {
          let s = i[0];
          if (i.length == 1 && (s instanceof ss || (s instanceof os && s.flags & 4)) && Math.abs(this.length - s.length) < 10) {
            if (s instanceof os) s = new ss(s.length, this.height);
            else s.height = this.height;
            if (!this.outdated) s.outdated = false;
            return s;
          } else {
            return es.of(i);
          }
        }
        updateHeight(t, e = 0, i = false, s) {
          if (s && s.from <= e && s.more) this.setHeight(t, s.heights[s.index++]);
          else if (i || this.outdated)
            this.setHeight(t, Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed)) + this.breaks * t.lineHeight);
          this.outdated = false;
          return this;
        }
        toString() {
          return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
        }
      }
      class os extends es {
        constructor(t) {
          super(t, 0);
        }
        heightMetrics(t, e) {
          let i = t.doc.lineAt(e).number,
            s = t.doc.lineAt(e + this.length).number;
          let o = s - i + 1;
          let n,
            r = 0;
          if (t.lineWrapping) {
            let e = Math.min(this.height, t.lineHeight * o);
            n = e / o;
            if (this.length > o + 1) r = (this.height - e) / (this.length - o - 1);
          } else {
            n = this.height / o;
          }
          return { firstLine: i, lastLine: s, perLine: n, perChar: r };
        }
        blockAt(t, e, i, s) {
          let { firstLine: o, lastLine: n, perLine: r, perChar: l } = this.heightMetrics(e, s);
          if (e.lineWrapping) {
            let o = s + Math.round(Math.max(0, Math.min(1, (t - i) / this.height)) * this.length);
            let n = e.doc.lineAt(o),
              a = r + n.length * l;
            let h = Math.max(i, t - a / 2);
            return new Ji(n.from, n.length, h, a, 0);
          } else {
            let s = Math.max(0, Math.min(n - o, Math.floor((t - i) / r)));
            let { from: l, length: a } = e.doc.line(o + s);
            return new Ji(l, a, i + r * s, r, 0);
          }
        }
        lineAt(t, e, i, s, o) {
          if (e == Zi.ByHeight) return this.blockAt(t, i, s, o);
          if (e == Zi.ByPosNoHeight) {
            let { from: e, to: s } = i.doc.lineAt(t);
            return new Ji(e, s - e, 0, 0, 0);
          }
          let { firstLine: n, perLine: r, perChar: l } = this.heightMetrics(i, o);
          let a = i.doc.lineAt(t),
            h = r + a.length * l;
          let c = a.number - n;
          let f = s + r * c + l * (a.from - o - c);
          return new Ji(a.from, a.length, Math.max(s, Math.min(f, s + this.height - h)), h, 0);
        }
        forEachLine(t, e, i, s, o, n) {
          t = Math.max(t, o);
          e = Math.min(e, o + this.length);
          let { firstLine: r, perLine: l, perChar: a } = this.heightMetrics(i, o);
          for (let h = t, c = s; h <= e; ) {
            let e = i.doc.lineAt(h);
            if (h == t) {
              let i = e.number - r;
              c += l * i + a * (t - o - i);
            }
            let s = l + a * e.length;
            n(new Ji(e.from, e.length, c, s, 0));
            c += s;
            h = e.to + 1;
          }
        }
        replace(t, e, i) {
          let s = this.length - e;
          if (s > 0) {
            let t = i[i.length - 1];
            if (t instanceof os) i[i.length - 1] = new os(t.length + s);
            else i.push(null, new os(s - 1));
          }
          if (t > 0) {
            let e = i[0];
            if (e instanceof os) i[0] = new os(t + e.length);
            else i.unshift(new os(t - 1), null);
          }
          return es.of(i);
        }
        decomposeLeft(t, e) {
          e.push(new os(t - 1), null);
        }
        decomposeRight(t, e) {
          e.push(null, new os(this.length - t - 1));
        }
        updateHeight(t, e = 0, i = false, s) {
          let o = e + this.length;
          if (s && s.from <= e + this.length && s.more) {
            let i = [],
              n = Math.max(e, s.from),
              r = -1;
            if (s.from > e) i.push(new os(s.from - e - 1).updateHeight(t, e));
            while (n <= o && s.more) {
              let e = t.doc.lineAt(n).length;
              if (i.length) i.push(null);
              let o = s.heights[s.index++];
              if (r == -1) r = o;
              else if (Math.abs(o - r) >= ts) r = -2;
              let l = new ss(e, o);
              l.outdated = false;
              i.push(l);
              n += e + 1;
            }
            if (n <= o) i.push(null, new os(o - n).updateHeight(t, n));
            let l = es.of(i);
            if (r < 0 || Math.abs(l.height - this.height) >= ts || Math.abs(r - this.heightMetrics(t, e).perLine) >= ts) t.heightChanged = true;
            return l;
          } else if (i || this.outdated) {
            this.setHeight(t, t.heightForGap(e, e + this.length));
            this.outdated = false;
          }
          return this;
        }
        toString() {
          return `gap(${this.length})`;
        }
      }
      class ns extends es {
        constructor(t, e, i) {
          super(t.length + e + i.length, t.height + i.height, e | (t.outdated || i.outdated ? 2 : 0));
          this.left = t;
          this.right = i;
          this.size = t.size + i.size;
        }
        get break() {
          return this.flags & 1;
        }
        blockAt(t, e, i, s) {
          let o = i + this.left.height;
          return t < o ? this.left.blockAt(t, e, i, s) : this.right.blockAt(t, e, o, s + this.left.length + this.break);
        }
        lineAt(t, e, i, s, o) {
          let n = s + this.left.height,
            r = o + this.left.length + this.break;
          let l = e == Zi.ByHeight ? t < n : t < r;
          let a = l ? this.left.lineAt(t, e, i, s, o) : this.right.lineAt(t, e, i, n, r);
          if (this.break || (l ? a.to < r : a.from > r)) return a;
          let h = e == Zi.ByPosNoHeight ? Zi.ByPosNoHeight : Zi.ByPos;
          if (l) return a.join(this.right.lineAt(r, h, i, n, r));
          else return this.left.lineAt(r, h, i, s, o).join(a);
        }
        forEachLine(t, e, i, s, o, n) {
          let r = s + this.left.height,
            l = o + this.left.length + this.break;
          if (this.break) {
            if (t < l) this.left.forEachLine(t, e, i, s, o, n);
            if (e >= l) this.right.forEachLine(t, e, i, r, l, n);
          } else {
            let a = this.lineAt(l, Zi.ByPos, i, s, o);
            if (t < a.from) this.left.forEachLine(t, a.from - 1, i, s, o, n);
            if (a.to >= t && a.from <= e) n(a);
            if (e > a.to) this.right.forEachLine(a.to + 1, e, i, r, l, n);
          }
        }
        replace(t, e, i) {
          let s = this.left.length + this.break;
          if (e < s) return this.balanced(this.left.replace(t, e, i), this.right);
          if (t > this.left.length) return this.balanced(this.left, this.right.replace(t - s, e - s, i));
          let o = [];
          if (t > 0) this.decomposeLeft(t, o);
          let n = o.length;
          for (let r of i) o.push(r);
          if (t > 0) rs(o, n - 1);
          if (e < this.length) {
            let t = o.length;
            this.decomposeRight(e, o);
            rs(o, t);
          }
          return es.of(o);
        }
        decomposeLeft(t, e) {
          let i = this.left.length;
          if (t <= i) return this.left.decomposeLeft(t, e);
          e.push(this.left);
          if (this.break) {
            i++;
            if (t >= i) e.push(null);
          }
          if (t > i) this.right.decomposeLeft(t - i, e);
        }
        decomposeRight(t, e) {
          let i = this.left.length,
            s = i + this.break;
          if (t >= s) return this.right.decomposeRight(t - s, e);
          if (t < i) this.left.decomposeRight(t, e);
          if (this.break && t < s) e.push(null);
          e.push(this.right);
        }
        balanced(t, e) {
          if (t.size > 2 * e.size || e.size > 2 * t.size) return es.of(this.break ? [t, null, e] : [t, e]);
          this.left = t;
          this.right = e;
          this.height = t.height + e.height;
          this.outdated = t.outdated || e.outdated;
          this.size = t.size + e.size;
          this.length = t.length + this.break + e.length;
          return this;
        }
        updateHeight(t, e = 0, i = false, s) {
          let { left: o, right: n } = this,
            r = e + o.length + this.break,
            l = null;
          if (s && s.from <= e + o.length && s.more) l = o = o.updateHeight(t, e, i, s);
          else o.updateHeight(t, e, i);
          if (s && s.from <= r + n.length && s.more) l = n = n.updateHeight(t, r, i, s);
          else n.updateHeight(t, r, i);
          if (l) return this.balanced(o, n);
          this.height = this.left.height + this.right.height;
          this.outdated = false;
          return this;
        }
        toString() {
          return this.left + (this.break ? " " : "-") + this.right;
        }
      }
      function rs(t, e) {
        let i, s;
        if (t[e] == null && (i = t[e - 1]) instanceof os && (s = t[e + 1]) instanceof os) t.splice(e - 1, 3, new os(i.length + 1 + s.length));
      }
      const ls = 5;
      class as {
        constructor(t, e) {
          this.pos = t;
          this.oracle = e;
          this.nodes = [];
          this.lineStart = -1;
          this.lineEnd = -1;
          this.covering = null;
          this.writtenTo = t;
        }
        get isCovered() {
          return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
        }
        span(t, e) {
          if (this.lineStart > -1) {
            let t = Math.min(e, this.lineEnd),
              i = this.nodes[this.nodes.length - 1];
            if (i instanceof ss) i.length += t - this.pos;
            else if (t > this.pos || !this.isCovered) this.nodes.push(new ss(t - this.pos, -1));
            this.writtenTo = t;
            if (e > t) {
              this.nodes.push(null);
              this.writtenTo++;
              this.lineStart = -1;
            }
          }
          this.pos = e;
        }
        point(t, e, i) {
          if (t < e || i.heightRelevant) {
            let s = i.widget ? i.widget.estimatedHeight : 0;
            let o = i.widget ? i.widget.lineBreaks : 0;
            if (s < 0) s = this.oracle.lineHeight;
            let n = e - t;
            if (i.block) {
              this.addBlock(new is(n, s, i));
            } else if (n || o || s >= ls) {
              this.addLineDeco(s, o, n);
            }
          } else if (e > t) {
            this.span(t, e);
          }
          if (this.lineEnd > -1 && this.lineEnd < this.pos) this.lineEnd = this.oracle.doc.lineAt(this.pos).to;
        }
        enterLine() {
          if (this.lineStart > -1) return;
          let { from: t, to: e } = this.oracle.doc.lineAt(this.pos);
          this.lineStart = t;
          this.lineEnd = e;
          if (this.writtenTo < t) {
            if (this.writtenTo < t - 1 || this.nodes[this.nodes.length - 1] == null) this.nodes.push(this.blankContent(this.writtenTo, t - 1));
            this.nodes.push(null);
          }
          if (this.pos > t) this.nodes.push(new ss(this.pos - t, -1));
          this.writtenTo = this.pos;
        }
        blankContent(t, e) {
          let i = new os(e - t);
          if (this.oracle.doc.lineAt(t).to == e) i.flags |= 4;
          return i;
        }
        ensureLine() {
          this.enterLine();
          let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
          if (t instanceof ss) return t;
          let e = new ss(0, -1);
          this.nodes.push(e);
          return e;
        }
        addBlock(t) {
          this.enterLine();
          let e = t.deco;
          if (e && e.startSide > 0 && !this.isCovered) this.ensureLine();
          this.nodes.push(t);
          this.writtenTo = this.pos = this.pos + t.length;
          if (e && e.endSide > 0) this.covering = t;
        }
        addLineDeco(t, e, i) {
          let s = this.ensureLine();
          s.length += i;
          s.collapsed += i;
          s.widgetHeight = Math.max(s.widgetHeight, t);
          s.breaks += e;
          this.writtenTo = this.pos = this.pos + i;
        }
        finish(t) {
          let e = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
          if (this.lineStart > -1 && !(e instanceof ss) && !this.isCovered) this.nodes.push(new ss(0, -1));
          else if (this.writtenTo < this.pos || e == null) this.nodes.push(this.blankContent(this.writtenTo, this.pos));
          let i = t;
          for (let s of this.nodes) {
            if (s instanceof ss) s.updateHeight(this.oracle, i);
            i += s ? s.length : 1;
          }
          return this.nodes;
        }
        static build(t, e, i, o) {
          let n = new as(i, t);
          s.RangeSet.spans(e, i, o, n, 0);
          return n.finish(i);
        }
      }
      function hs(t, e, i) {
        let o = new cs();
        s.RangeSet.compare(t, e, i, o, 0);
        return o.changes;
      }
      class cs {
        constructor() {
          this.changes = [];
        }
        compareRange() {}
        comparePoint(t, e, i, s) {
          if (t < e || (i && i.heightRelevant) || (s && s.heightRelevant)) Ot(t, e, this.changes, 5);
        }
      }
      function fs(t, e) {
        let i = t.getBoundingClientRect();
        let s = t.ownerDocument,
          o = s.defaultView || window;
        let n = Math.max(0, i.left),
          r = Math.min(o.innerWidth, i.right);
        let l = Math.max(0, i.top),
          a = Math.min(o.innerHeight, i.bottom);
        for (let h = t.parentNode; h && h != s.body; ) {
          if (h.nodeType == 1) {
            let e = h;
            let i = window.getComputedStyle(e);
            if ((e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth) && i.overflow != "visible") {
              let i = e.getBoundingClientRect();
              n = Math.max(n, i.left);
              r = Math.min(r, i.right);
              l = Math.max(l, i.top);
              a = h == t.parentNode ? i.bottom : Math.min(a, i.bottom);
            }
            h = i.position == "absolute" || i.position == "fixed" ? e.offsetParent : e.parentNode;
          } else if (h.nodeType == 11) {
            h = h.host;
          } else {
            break;
          }
        }
        return { left: n - i.left, right: Math.max(n, r) - i.left, top: l - (i.top + e), bottom: Math.max(l, a) - (i.top + e) };
      }
      function ds(t, e) {
        let i = t.getBoundingClientRect();
        return { left: 0, right: i.right - i.left, top: e, bottom: i.bottom - (i.top + e) };
      }
      class us {
        constructor(t, e, i) {
          this.from = t;
          this.to = e;
          this.size = i;
        }
        static same(t, e) {
          if (t.length != e.length) return false;
          for (let i = 0; i < t.length; i++) {
            let s = t[i],
              o = e[i];
            if (s.from != o.from || s.to != o.to || s.size != o.size) return false;
          }
          return true;
        }
        draw(t, e) {
          return Mt.replace({ widget: new ps(this.size * (e ? t.scaleY : t.scaleX), e) }).range(this.from, this.to);
        }
      }
      class ps extends St {
        constructor(t, e) {
          super();
          this.size = t;
          this.vertical = e;
        }
        eq(t) {
          return t.size == this.size && t.vertical == this.vertical;
        }
        toDOM() {
          let t = document.createElement("div");
          if (this.vertical) {
            t.style.height = this.size + "px";
          } else {
            t.style.width = this.size + "px";
            t.style.height = "2px";
            t.style.display = "inline-block";
          }
          return t;
        }
        get estimatedHeight() {
          return this.vertical ? this.size : -1;
        }
      }
      class gs {
        constructor(t) {
          this.state = t;
          this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 };
          this.inView = true;
          this.paddingTop = 0;
          this.paddingBottom = 0;
          this.contentDOMWidth = 0;
          this.contentDOMHeight = 0;
          this.editorHeight = 0;
          this.editorWidth = 0;
          this.scrollTop = 0;
          this.scrolledToBottom = true;
          this.scaleX = 1;
          this.scaleY = 1;
          this.scrollAnchorPos = 0;
          this.scrollAnchorHeight = -1;
          this.scaler = Ss;
          this.scrollTarget = null;
          this.printing = false;
          this.mustMeasureContent = true;
          this.defaultTextDirection = Lt.LTR;
          this.visibleRanges = [];
          this.mustEnforceCursorAssoc = false;
          let e = t.facet(Se).some((t) => typeof t != "function" && t.class == "cm-lineWrapping");
          this.heightOracle = new Ui(e);
          this.stateDeco = t.facet(xe).filter((t) => typeof t != "function");
          this.heightMap = es.empty().applyChanges(this.stateDeco, s.Text.empty, this.heightOracle.setDoc(t.doc), [new Ee(0, 0, 0, t.doc.length)]);
          this.viewport = this.getViewport(0, null);
          this.updateViewportLines();
          this.updateForViewport();
          this.lineGaps = this.ensureLineGaps([]);
          this.lineGapDeco = Mt.set(this.lineGaps.map((t) => t.draw(this, false)));
          this.computeVisibleRanges();
        }
        updateForViewport() {
          let t = [this.viewport],
            { main: e } = this.state.selection;
          for (let i = 0; i <= 1; i++) {
            let s = i ? e.head : e.anchor;
            if (!t.some(({ from: t, to: e }) => s >= t && s <= e)) {
              let { from: e, to: i } = this.lineBlockAt(s);
              t.push(new ms(e, i));
            }
          }
          this.viewports = t.sort((t, e) => t.from - e.from);
          this.scaler = this.heightMap.height <= 7e6 ? Ss : new xs(this.heightOracle, this.heightMap, this.viewports);
        }
        updateViewportLines() {
          this.viewportLines = [];
          this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t) => {
            this.viewportLines.push(this.scaler.scale == 1 ? t : Ms(t, this.scaler));
          });
        }
        update(t, e = null) {
          this.state = t.state;
          let i = this.stateDeco;
          this.stateDeco = this.state.facet(xe).filter((t) => typeof t != "function");
          let o = t.changedRanges;
          let n = Ee.extendWithRanges(o, hs(i, this.stateDeco, t ? t.changes : s.ChangeSet.empty(this.state.doc.length)));
          let r = this.heightMap.height;
          let l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
          this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), n);
          if (this.heightMap.height != r) t.flags |= 2;
          if (l) {
            this.scrollAnchorPos = t.changes.mapPos(l.from, -1);
            this.scrollAnchorHeight = l.top;
          } else {
            this.scrollAnchorPos = -1;
            this.scrollAnchorHeight = this.heightMap.height;
          }
          let a = n.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
          if ((e && (e.range.head < a.from || e.range.head > a.to)) || !this.viewportIsAppropriate(a)) a = this.getViewport(0, e);
          let h = !t.changes.empty || t.flags & 2 || a.from != this.viewport.from || a.to != this.viewport.to;
          this.viewport = a;
          this.updateForViewport();
          if (h) this.updateViewportLines();
          if (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1)
            this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes)));
          t.flags |= this.computeVisibleRanges();
          if (e) this.scrollTarget = e;
          if (
            !this.mustEnforceCursorAssoc &&
            t.selectionSet &&
            t.view.lineWrapping &&
            t.state.selection.main.empty &&
            t.state.selection.main.assoc &&
            !t.state.facet(ce)
          )
            this.mustEnforceCursorAssoc = true;
        }
        measure(t) {
          let e = t.contentDOM,
            i = window.getComputedStyle(e);
          let o = this.heightOracle;
          let n = i.whiteSpace;
          this.defaultTextDirection = i.direction == "rtl" ? Lt.RTL : Lt.LTR;
          let r = this.heightOracle.mustRefreshForWrapping(n);
          let l = e.getBoundingClientRect();
          let a = r || this.mustMeasureContent || this.contentDOMHeight != l.height;
          this.contentDOMHeight = l.height;
          this.mustMeasureContent = false;
          let h = 0,
            c = 0;
          if (l.width && l.height) {
            let { scaleX: t, scaleY: i } = A(e, l);
            if ((t > 0.005 && Math.abs(this.scaleX - t) > 0.005) || (i > 0.005 && Math.abs(this.scaleY - i) > 0.005)) {
              this.scaleX = t;
              this.scaleY = i;
              h |= 8;
              r = a = true;
            }
          }
          let f = (parseInt(i.paddingTop) || 0) * this.scaleY;
          let d = (parseInt(i.paddingBottom) || 0) * this.scaleY;
          if (this.paddingTop != f || this.paddingBottom != d) {
            this.paddingTop = f;
            this.paddingBottom = d;
            h |= 8 | 2;
          }
          if (this.editorWidth != t.scrollDOM.clientWidth) {
            if (o.lineWrapping) a = true;
            this.editorWidth = t.scrollDOM.clientWidth;
            h |= 8;
          }
          let u = t.scrollDOM.scrollTop * this.scaleY;
          if (this.scrollTop != u) {
            this.scrollAnchorHeight = -1;
            this.scrollTop = u;
          }
          this.scrolledToBottom = F(t.scrollDOM);
          let p = (this.printing ? ds : fs)(e, this.paddingTop);
          let g = p.top - this.pixelViewport.top,
            m = p.bottom - this.pixelViewport.bottom;
          this.pixelViewport = p;
          let w = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
          if (w != this.inView) {
            this.inView = w;
            if (w) a = true;
          }
          if (!this.inView && !this.scrollTarget) return 0;
          let v = l.width;
          if (this.contentDOMWidth != v || this.editorHeight != t.scrollDOM.clientHeight) {
            this.contentDOMWidth = l.width;
            this.editorHeight = t.scrollDOM.clientHeight;
            h |= 8;
          }
          if (a) {
            let e = t.docView.measureVisibleLineHeights(this.viewport);
            if (o.mustRefreshForHeights(e)) r = true;
            if (r || (o.lineWrapping && Math.abs(v - this.contentDOMWidth) > o.charWidth)) {
              let { lineHeight: i, charWidth: s, textHeight: l } = t.docView.measureTextSize();
              r = i > 0 && o.refresh(n, i, s, l, v / s, e);
              if (r) {
                t.docView.minWidth = 0;
                h |= 8;
              }
            }
            if (g > 0 && m > 0) c = Math.max(g, m);
            else if (g < 0 && m < 0) c = Math.min(g, m);
            o.heightChanged = false;
            for (let i of this.viewports) {
              let n = i.from == this.viewport.from ? e : t.docView.measureVisibleLineHeights(i);
              this.heightMap = (
                r ? es.empty().applyChanges(this.stateDeco, s.Text.empty, this.heightOracle, [new Ee(0, 0, 0, t.state.doc.length)]) : this.heightMap
              ).updateHeight(o, 0, r, new Qi(i.from, n));
            }
            if (o.heightChanged) h |= 2;
          }
          let b =
            !this.viewportIsAppropriate(this.viewport, c) ||
            (this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to));
          if (b) this.viewport = this.getViewport(c, this.scrollTarget);
          this.updateForViewport();
          if (h & 2 || b) this.updateViewportLines();
          if (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1)
            this.updateLineGaps(this.ensureLineGaps(r ? [] : this.lineGaps, t));
          h |= this.computeVisibleRanges();
          if (this.mustEnforceCursorAssoc) {
            this.mustEnforceCursorAssoc = false;
            t.docView.enforceCursorAssoc();
          }
          return h;
        }
        get visibleTop() {
          return this.scaler.fromDOM(this.pixelViewport.top);
        }
        get visibleBottom() {
          return this.scaler.fromDOM(this.pixelViewport.bottom);
        }
        getViewport(t, e) {
          let i = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2));
          let s = this.heightMap,
            o = this.heightOracle;
          let { visibleTop: n, visibleBottom: r } = this;
          let l = new ms(s.lineAt(n - i * 1e3, Zi.ByHeight, o, 0, 0).from, s.lineAt(r + (1 - i) * 1e3, Zi.ByHeight, o, 0, 0).to);
          if (e) {
            let { head: t } = e.range;
            if (t < l.from || t > l.to) {
              let i = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top);
              let n = s.lineAt(t, Zi.ByPos, o, 0, 0),
                r;
              if (e.y == "center") r = (n.top + n.bottom) / 2 - i / 2;
              else if (e.y == "start" || (e.y == "nearest" && t < l.from)) r = n.top;
              else r = n.bottom - i;
              l = new ms(s.lineAt(r - 1e3 / 2, Zi.ByHeight, o, 0, 0).from, s.lineAt(r + i + 1e3 / 2, Zi.ByHeight, o, 0, 0).to);
            }
          }
          return l;
        }
        mapViewport(t, e) {
          let i = e.mapPos(t.from, -1),
            s = e.mapPos(t.to, 1);
          return new ms(
            this.heightMap.lineAt(i, Zi.ByPos, this.heightOracle, 0, 0).from,
            this.heightMap.lineAt(s, Zi.ByPos, this.heightOracle, 0, 0).to
          );
        }
        viewportIsAppropriate({ from: t, to: e }, i = 0) {
          if (!this.inView) return true;
          let { top: s } = this.heightMap.lineAt(t, Zi.ByPos, this.heightOracle, 0, 0);
          let { bottom: o } = this.heightMap.lineAt(e, Zi.ByPos, this.heightOracle, 0, 0);
          let { visibleTop: n, visibleBottom: r } = this;
          return (
            (t == 0 || s <= n - Math.max(10, Math.min(-i, 250))) &&
            (e == this.state.doc.length || o >= r + Math.max(10, Math.min(i, 250))) &&
            s > n - 2 * 1e3 &&
            o < r + 2 * 1e3
          );
        }
        mapLineGaps(t, e) {
          if (!t.length || e.empty) return t;
          let i = [];
          for (let s of t) if (!e.touchesRange(s.from, s.to)) i.push(new us(e.mapPos(s.from), e.mapPos(s.to), s.size));
          return i;
        }
        ensureLineGaps(t, e) {
          let i = this.heightOracle.lineWrapping;
          let o = i ? 1e4 : 2e3,
            n = o >> 1,
            r = o << 1;
          if (this.defaultTextDirection != Lt.LTR && !i) return [];
          let l = [];
          let a = (o, r, h, c) => {
            if (r - o < n) return;
            let f = this.state.selection.main,
              d = [f.from];
            if (!f.empty) d.push(f.to);
            for (let t of d) {
              if (t > o && t < r) {
                a(o, t - 10, h, c);
                a(t + 10, r, h, c);
                return;
              }
            }
            let u = ys(
              t,
              (t) => t.from >= h.from && t.to <= h.to && Math.abs(t.from - o) < n && Math.abs(t.to - r) < n && !d.some((e) => t.from < e && t.to > e)
            );
            if (!u) {
              if (r < h.to && e && i && e.visibleRanges.some((t) => t.from <= r && t.to >= r)) {
                let t = e.moveToLineBoundary(s.EditorSelection.cursor(r), false, true).head;
                if (t > o) r = t;
              }
              u = new us(o, r, this.gapSize(h, o, r, c));
            }
            l.push(u);
          };
          for (let s of this.viewportLines) {
            if (s.length < r) continue;
            let t = ws(s.from, s.to, this.stateDeco);
            if (t.total < r) continue;
            let e = this.scrollTarget ? this.scrollTarget.range.head : null;
            let n, l;
            if (i) {
              let i = (o / this.heightOracle.lineLength) * this.heightOracle.lineHeight;
              let r, a;
              if (e != null) {
                let o = bs(t, e);
                let n = ((this.visibleBottom - this.visibleTop) / 2 + i) / s.height;
                r = o - n;
                a = o + n;
              } else {
                r = (this.visibleTop - s.top - i) / s.height;
                a = (this.visibleBottom - s.top + i) / s.height;
              }
              n = vs(t, r);
              l = vs(t, a);
            } else {
              let i = t.total * this.heightOracle.charWidth;
              let s = o * this.heightOracle.charWidth;
              let r, a;
              if (e != null) {
                let o = bs(t, e);
                let n = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + s) / i;
                r = o - n;
                a = o + n;
              } else {
                r = (this.pixelViewport.left - s) / i;
                a = (this.pixelViewport.right + s) / i;
              }
              n = vs(t, r);
              l = vs(t, a);
            }
            if (n > s.from) a(s.from, n, s, t);
            if (l < s.to) a(l, s.to, s, t);
          }
          return l;
        }
        gapSize(t, e, i, s) {
          let o = bs(s, i) - bs(s, e);
          if (this.heightOracle.lineWrapping) {
            return t.height * o;
          } else {
            return s.total * this.heightOracle.charWidth * o;
          }
        }
        updateLineGaps(t) {
          if (!us.same(t, this.lineGaps)) {
            this.lineGaps = t;
            this.lineGapDeco = Mt.set(t.map((t) => t.draw(this, this.heightOracle.lineWrapping)));
          }
        }
        computeVisibleRanges() {
          let t = this.stateDeco;
          if (this.lineGaps.length) t = t.concat(this.lineGapDeco);
          let e = [];
          s.RangeSet.spans(
            t,
            this.viewport.from,
            this.viewport.to,
            {
              span(t, i) {
                e.push({ from: t, to: i });
              },
              point() {},
            },
            20
          );
          let i = e.length != this.visibleRanges.length || this.visibleRanges.some((t, i) => t.from != e[i].from || t.to != e[i].to);
          this.visibleRanges = e;
          return i ? 4 : 0;
        }
        lineBlockAt(t) {
          return (
            (t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e) => e.from <= t && e.to >= t)) ||
            Ms(this.heightMap.lineAt(t, Zi.ByPos, this.heightOracle, 0, 0), this.scaler)
          );
        }
        lineBlockAtHeight(t) {
          return Ms(this.heightMap.lineAt(this.scaler.fromDOM(t), Zi.ByHeight, this.heightOracle, 0, 0), this.scaler);
        }
        scrollAnchorAt(t) {
          let e = this.lineBlockAtHeight(t + 8);
          return e.from >= this.viewport.from || this.viewportLines[0].top - t > 200 ? e : this.viewportLines[0];
        }
        elementAtHeight(t) {
          return Ms(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler);
        }
        get docHeight() {
          return this.scaler.toDOM(this.heightMap.height);
        }
        get contentHeight() {
          return this.docHeight + this.paddingTop + this.paddingBottom;
        }
      }
      class ms {
        constructor(t, e) {
          this.from = t;
          this.to = e;
        }
      }
      function ws(t, e, i) {
        let o = [],
          n = t,
          r = 0;
        s.RangeSet.spans(
          i,
          t,
          e,
          {
            span() {},
            point(t, e) {
              if (t > n) {
                o.push({ from: n, to: t });
                r += t - n;
              }
              n = e;
            },
          },
          20
        );
        if (n < e) {
          o.push({ from: n, to: e });
          r += e - n;
        }
        return { total: r, ranges: o };
      }
      function vs({ total: t, ranges: e }, i) {
        if (i <= 0) return e[0].from;
        if (i >= 1) return e[e.length - 1].to;
        let s = Math.floor(t * i);
        for (let o = 0; ; o++) {
          let { from: t, to: i } = e[o],
            n = i - t;
          if (s <= n) return t + s;
          s -= n;
        }
      }
      function bs(t, e) {
        let i = 0;
        for (let { from: s, to: o } of t.ranges) {
          if (e <= o) {
            i += e - s;
            break;
          }
          i += o - s;
        }
        return i / t.total;
      }
      function ys(t, e) {
        for (let i of t) if (e(i)) return i;
        return undefined;
      }
      const Ss = {
        toDOM(t) {
          return t;
        },
        fromDOM(t) {
          return t;
        },
        scale: 1,
      };
      class xs {
        constructor(t, e, i) {
          let s = 0,
            o = 0,
            n = 0;
          this.viewports = i.map(({ from: i, to: o }) => {
            let n = e.lineAt(i, Zi.ByPos, t, 0, 0).top;
            let r = e.lineAt(o, Zi.ByPos, t, 0, 0).bottom;
            s += r - n;
            return { from: i, to: o, top: n, bottom: r, domTop: 0, domBottom: 0 };
          });
          this.scale = (7e6 - s) / (e.height - s);
          for (let r of this.viewports) {
            r.domTop = n + (r.top - o) * this.scale;
            n = r.domBottom = r.domTop + (r.bottom - r.top);
            o = r.bottom;
          }
        }
        toDOM(t) {
          for (let e = 0, i = 0, s = 0; ; e++) {
            let o = e < this.viewports.length ? this.viewports[e] : null;
            if (!o || t < o.top) return s + (t - i) * this.scale;
            if (t <= o.bottom) return o.domTop + (t - o.top);
            i = o.bottom;
            s = o.domBottom;
          }
        }
        fromDOM(t) {
          for (let e = 0, i = 0, s = 0; ; e++) {
            let o = e < this.viewports.length ? this.viewports[e] : null;
            if (!o || t < o.domTop) return i + (t - s) / this.scale;
            if (t <= o.domBottom) return o.top + (t - o.domTop);
            i = o.bottom;
            s = o.domBottom;
          }
        }
      }
      function Ms(t, e) {
        if (e.scale == 1) return t;
        let i = e.toDOM(t.top),
          s = e.toDOM(t.bottom);
        return new Ji(t.from, t.length, i, s - i, Array.isArray(t._content) ? t._content.map((t) => Ms(t, e)) : t._content);
      }
      const ks = s.Facet.define({ combine: (t) => t.join(" ") });
      const Cs = s.Facet.define({ combine: (t) => t.indexOf(true) > -1 });
      const As = o.StyleModule.newName(),
        Ds = o.StyleModule.newName(),
        Ts = o.StyleModule.newName();
      const Os = { "&light": "." + Ds, "&dark": "." + Ts };
      function Es(t, e, i) {
        return new o.StyleModule(e, {
          finish(e) {
            return /&/.test(e)
              ? e.replace(/&\w*/, (e) => {
                  if (e == "&") return t;
                  if (!i || !i[e]) throw new RangeError(`Unsupported selector: ${e}`);
                  return i[e];
                })
              : t + " " + e;
          },
        });
      }
      const Rs = Es(
        "." + As,
        {
          "&": {
            position: "relative !important",
            boxSizing: "border-box",
            "&.cm-focused": { outline: "1px dotted #212121" },
            display: "flex !important",
            flexDirection: "column",
          },
          ".cm-scroller": {
            display: "flex !important",
            alignItems: "flex-start !important",
            fontFamily: "monospace",
            lineHeight: 1.4,
            height: "100%",
            overflowX: "auto",
            position: "relative",
            zIndex: 0,
          },
          ".cm-content": {
            margin: 0,
            flexGrow: 2,
            flexShrink: 0,
            display: "block",
            whiteSpace: "pre",
            wordWrap: "normal",
            boxSizing: "border-box",
            minHeight: "100%",
            padding: "4px 0",
            outline: "none",
            "&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" },
          },
          ".cm-lineWrapping": {
            whiteSpace_fallback: "pre-wrap",
            whiteSpace: "break-spaces",
            wordBreak: "break-word",
            overflowWrap: "anywhere",
            flexShrink: 1,
          },
          "&light .cm-content": { caretColor: "black" },
          "&dark .cm-content": { caretColor: "white" },
          ".cm-line": { display: "block", padding: "0 2px 0 6px" },
          ".cm-layer": { position: "absolute", left: 0, top: 0, contain: "size style", "& > *": { position: "absolute" } },
          "&light .cm-selectionBackground": { background: "#d9d9d9" },
          "&dark .cm-selectionBackground": { background: "#222" },
          "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#d7d4f0" },
          "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#233" },
          ".cm-cursorLayer": { pointerEvents: "none" },
          "&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: "steps(1) cm-blink 1.2s infinite" },
          "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
          "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
          ".cm-cursor, .cm-dropCursor": { borderLeft: "1.2px solid black", marginLeft: "-0.6px", pointerEvents: "none" },
          ".cm-cursor": { display: "none" },
          "&dark .cm-cursor": { borderLeftColor: "#444" },
          ".cm-dropCursor": { position: "absolute" },
          "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" },
          ".cm-iso": { unicodeBidi: "isolate" },
          ".cm-announced": { position: "fixed", top: "-10000px" },
          "@media print": { ".cm-announced": { display: "none" } },
          "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
          "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
          "&light .cm-specialChar": { color: "red" },
          "&dark .cm-specialChar": { color: "#f78" },
          ".cm-gutters": { flexShrink: 0, display: "flex", height: "100%", boxSizing: "border-box", insetInlineStart: 0, zIndex: 200 },
          "&light .cm-gutters": { backgroundColor: "#f5f5f5", color: "#6c6c6c", borderRight: "1px solid #ddd" },
          "&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" },
          ".cm-gutter": {
            display: "flex !important",
            flexDirection: "column",
            flexShrink: 0,
            boxSizing: "border-box",
            minHeight: "100%",
            overflow: "hidden",
          },
          ".cm-gutterElement": { boxSizing: "border-box" },
          ".cm-lineNumbers .cm-gutterElement": { padding: "0 3px 0 5px", minWidth: "20px", textAlign: "right", whiteSpace: "nowrap" },
          "&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" },
          "&dark .cm-activeLineGutter": { backgroundColor: "#222227" },
          ".cm-panels": { boxSizing: "border-box", position: "sticky", left: 0, right: 0 },
          "&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" },
          "&light .cm-panels-top": { borderBottom: "1px solid #ddd" },
          "&light .cm-panels-bottom": { borderTop: "1px solid #ddd" },
          "&dark .cm-panels": { backgroundColor: "#333338", color: "white" },
          ".cm-tab": { display: "inline-block", overflow: "hidden", verticalAlign: "bottom" },
          ".cm-widgetBuffer": { verticalAlign: "text-top", height: "1em", width: 0, display: "inline" },
          ".cm-placeholder": { color: "#888", display: "inline-block", verticalAlign: "top" },
          ".cm-highlightSpace:before": { content: "attr(data-display)", position: "absolute", pointerEvents: "none", color: "#888" },
          ".cm-highlightTab": {
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
            backgroundSize: "auto 100%",
            backgroundPosition: "right 90%",
            backgroundRepeat: "no-repeat",
          },
          ".cm-trailingSpace": { backgroundColor: "#ff332255" },
          ".cm-button": { verticalAlign: "middle", color: "inherit", fontSize: "70%", padding: ".2em 1em", borderRadius: "1px" },
          "&light .cm-button": {
            backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
            border: "1px solid #888",
            "&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" },
          },
          "&dark .cm-button": {
            backgroundImage: "linear-gradient(#393939, #111)",
            border: "1px solid #888",
            "&:active": { backgroundImage: "linear-gradient(#111, #333)" },
          },
          ".cm-textfield": { verticalAlign: "middle", color: "inherit", fontSize: "70%", border: "1px solid silver", padding: ".2em .5em" },
          "&light .cm-textfield": { backgroundColor: "white" },
          "&dark .cm-textfield": { border: "1px solid #555", backgroundColor: "inherit" },
        },
        Os
      );
      const Bs = "￿";
      class Ls {
        constructor(t, e) {
          this.points = t;
          this.text = "";
          this.lineSeparator = e.facet(s.EditorState.lineSeparator);
        }
        append(t) {
          this.text += t;
        }
        lineBreak() {
          this.text += Bs;
        }
        readRange(t, e) {
          if (!t) return this;
          let i = t.parentNode;
          for (let s = t; ; ) {
            this.findPointBefore(i, s);
            let t = this.text.length;
            this.readNode(s);
            let o = s.nextSibling;
            if (o == e) break;
            let n = K.get(s),
              r = K.get(o);
            if (n && r ? n.breakAfter : (n ? n.breakAfter : Ps(s)) || (Ps(o) && (s.nodeName != "BR" || s.cmIgnore) && this.text.length > t))
              this.lineBreak();
            s = o;
          }
          this.findPointBefore(i, e);
          return this;
        }
        readTextNode(t) {
          let e = t.nodeValue;
          for (let i of this.points) if (i.node == t) i.pos = this.text.length + Math.min(i.offset, e.length);
          for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
            let o = -1,
              n = 1,
              r;
            if (this.lineSeparator) {
              o = e.indexOf(this.lineSeparator, i);
              n = this.lineSeparator.length;
            } else if ((r = s.exec(e))) {
              o = r.index;
              n = r[0].length;
            }
            this.append(e.slice(i, o < 0 ? e.length : o));
            if (o < 0) break;
            this.lineBreak();
            if (n > 1) for (let e of this.points) if (e.node == t && e.pos > this.text.length) e.pos -= n - 1;
            i = o + n;
          }
        }
        readNode(t) {
          if (t.cmIgnore) return;
          let e = K.get(t);
          let i = e && e.overrideDOMText;
          if (i != null) {
            this.findPointInside(t, i.length);
            for (let t = i.iter(); !t.next().done; ) {
              if (t.lineBreak) this.lineBreak();
              else this.append(t.value);
            }
          } else if (t.nodeType == 3) {
            this.readTextNode(t);
          } else if (t.nodeName == "BR") {
            if (t.nextSibling) this.lineBreak();
          } else if (t.nodeType == 1) {
            this.readRange(t.firstChild, null);
          }
        }
        findPointBefore(t, e) {
          for (let i of this.points) if (i.node == t && t.childNodes[i.offset] == e) i.pos = this.text.length;
        }
        findPointInside(t, e) {
          for (let i of this.points)
            if (t.nodeType == 3 ? i.node == t : t.contains(i.node)) i.pos = this.text.length + (Hs(t, i.node, i.offset) ? e : 0);
        }
      }
      function Hs(t, e, i) {
        for (;;) {
          if (!e || i < M(e)) return false;
          if (e == t) return true;
          i = S(e) + 1;
          e = e.parentNode;
        }
      }
      function Ps(t) {
        return t.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName);
      }
      class Vs {
        constructor(t, e) {
          this.node = t;
          this.offset = e;
          this.pos = -1;
        }
      }
      class Ns {
        constructor(t, e, i, o) {
          this.typeOver = o;
          this.bounds = null;
          this.text = "";
          let { impreciseHead: n, impreciseAnchor: r } = t.docView;
          if (t.state.readOnly && e > -1) {
            this.newSel = null;
          } else if (e > -1 && (this.bounds = t.docView.domBoundsAround(e, i, 0))) {
            let e = n || r ? [] : Ks(t);
            let i = new Ls(e, t.state);
            i.readRange(this.bounds.startDOM, this.bounds.endDOM);
            this.text = i.text;
            this.newSel = Is(e, this.bounds.from);
          } else {
            let e = t.observer.selectionRange;
            let i =
              (n && n.node == e.focusNode && n.offset == e.focusOffset) || !m(t.contentDOM, e.focusNode)
                ? t.state.selection.main.head
                : t.docView.posFromDOM(e.focusNode, e.focusOffset);
            let o =
              (r && r.node == e.anchorNode && r.offset == e.anchorOffset) || !m(t.contentDOM, e.anchorNode)
                ? t.state.selection.main.anchor
                : t.docView.posFromDOM(e.anchorNode, e.anchorOffset);
            let l = t.viewport;
            if ((st.ios || st.chrome) && t.state.selection.main.empty && i != o && (l.from > 0 || l.to < t.state.doc.length)) {
              let e = Math.min(i, o),
                s = Math.max(i, o);
              let n = l.from - e,
                r = l.to - s;
              if ((n == 0 || n == 1 || e == 0) && (r == 0 || r == -1 || s == t.state.doc.length)) {
                i = 0;
                o = t.state.doc.length;
              }
            }
            this.newSel = s.EditorSelection.single(o, i);
          }
        }
      }
      function Fs(t, e) {
        let i;
        let { newSel: o } = e,
          n = t.state.selection.main;
        let r = t.inputState.lastKeyTime > Date.now() - 100 ? t.inputState.lastKeyCode : -1;
        if (e.bounds) {
          let { from: o, to: l } = e.bounds;
          let a = n.from,
            h = null;
          if (r === 8 || (st.android && e.text.length < l - o)) {
            a = n.to;
            h = "end";
          }
          let c = zs(t.state.doc.sliceString(o, l, Bs), e.text, a - o, h);
          if (c) {
            if (st.chrome && r == 13 && c.toB == c.from + 2 && e.text.slice(c.from, c.toB) == Bs + Bs) c.toB--;
            i = { from: o + c.from, to: o + c.toA, insert: s.Text.of(e.text.slice(c.from, c.toB).split(Bs)) };
          }
        } else if (o && ((!t.hasFocus && t.state.facet(ge)) || o.main.eq(n))) {
          o = null;
        }
        if (!i && !o) return false;
        if (!i && e.typeOver && !n.empty && o && o.main.empty) {
          i = { from: n.from, to: n.to, insert: t.state.doc.slice(n.from, n.to) };
        } else if (i && i.from >= n.from && i.to <= n.to && (i.from != n.from || i.to != n.to) && n.to - n.from - (i.to - i.from) <= 4) {
          i = { from: n.from, to: n.to, insert: t.state.doc.slice(n.from, i.from).append(i.insert).append(t.state.doc.slice(i.to, n.to)) };
        } else if (
          (st.mac || st.android) &&
          i &&
          i.from == i.to &&
          i.from == n.head - 1 &&
          /^\. ?$/.test(i.insert.toString()) &&
          t.contentDOM.getAttribute("autocorrect") == "off"
        ) {
          if (o && i.insert.length == 2) o = s.EditorSelection.single(o.main.anchor - 1, o.main.head - 1);
          i = { from: n.from, to: n.to, insert: s.Text.of([" "]) };
        } else if (st.chrome && i && i.from == i.to && i.from == n.head && i.insert.toString() == "\n " && t.lineWrapping) {
          if (o) o = s.EditorSelection.single(o.main.anchor - 1, o.main.head - 1);
          i = { from: n.from, to: n.to, insert: s.Text.of([" "]) };
        }
        if (i) {
          if (st.ios && t.inputState.flushIOSKey(i)) return true;
          if (
            st.android &&
            ((i.to == n.to &&
              (i.from == n.from || (i.from == n.from - 1 && t.state.sliceDoc(i.from, n.from) == " ")) &&
              i.insert.length == 1 &&
              i.insert.lines == 2 &&
              H(t.contentDOM, "Enter", 13)) ||
              (((i.from == n.from - 1 && i.to == n.to && i.insert.length == 0) || (r == 8 && i.insert.length < i.to - i.from && i.to > n.head)) &&
                H(t.contentDOM, "Backspace", 8)) ||
              (i.from == n.from && i.to == n.to + 1 && i.insert.length == 0 && H(t.contentDOM, "Delete", 46)))
          )
            return true;
          let e = i.insert.toString();
          if (t.inputState.composing >= 0) t.inputState.composing++;
          let s;
          let l = () => s || (s = Ws(t, i, o));
          if (!t.state.facet(le).some((s) => s(t, i.from, i.to, e, l))) t.dispatch(l());
          return true;
        } else if (o && !o.main.eq(n)) {
          let e = false,
            i = "select";
          if (t.inputState.lastSelectionTime > Date.now() - 50) {
            if (t.inputState.lastSelectionOrigin == "select") e = true;
            i = t.inputState.lastSelectionOrigin;
          }
          t.dispatch({ selection: o, scrollIntoView: e, userEvent: i });
          return true;
        } else {
          return false;
        }
      }
      function Ws(t, e, i) {
        let o,
          n = t.state,
          r = n.selection.main;
        if (
          e.from >= r.from &&
          e.to <= r.to &&
          e.to - e.from >= (r.to - r.from) / 3 &&
          (!i || (i.main.empty && i.main.from == e.from + e.insert.length)) &&
          t.inputState.composing < 0
        ) {
          let i = r.from < e.from ? n.sliceDoc(r.from, e.from) : "";
          let s = r.to > e.to ? n.sliceDoc(e.to, r.to) : "";
          o = n.replaceSelection(t.state.toText(i + e.insert.sliceString(0, undefined, t.state.lineBreak) + s));
        } else {
          let l = n.changes(e);
          let a = i && i.main.to <= l.newLength ? i.main : undefined;
          if (n.selection.ranges.length > 1 && t.inputState.composing >= 0 && e.to <= r.to && e.to >= r.to - 10) {
            let h = t.state.sliceDoc(e.from, e.to);
            let c,
              f = i && Ve(t, i.main.head);
            if (f) {
              let t = e.insert.length - (e.to - e.from);
              c = { from: f.from, to: f.to - t };
            } else {
              c = t.state.doc.lineAt(r.head);
            }
            let d = r.to - e.to,
              u = r.to - r.from;
            o = n.changeByRange((i) => {
              if (i.from == r.from && i.to == r.to) return { changes: l, range: a || i.map(l) };
              let o = i.to - d,
                f = o - h.length;
              if (i.to - i.from != u || t.state.sliceDoc(f, o) != h || (i.to >= c.from && i.from <= c.to)) return { range: i };
              let p = n.changes({ from: f, to: o, insert: e.insert }),
                g = i.to - r.to;
              return { changes: p, range: !a ? i.map(p) : s.EditorSelection.range(Math.max(0, a.anchor + g), Math.max(0, a.head + g)) };
            });
          } else {
            o = { changes: l, selection: a && n.selection.replaceRange(a) };
          }
        }
        let l = "input.type";
        if (t.composing || (t.inputState.compositionPendingChange && t.inputState.compositionEndedAt > Date.now() - 50)) {
          t.inputState.compositionPendingChange = false;
          l += ".compose";
          if (t.inputState.compositionFirstChange) {
            l += ".start";
            t.inputState.compositionFirstChange = false;
          }
        }
        return n.update(o, { userEvent: l, scrollIntoView: true });
      }
      function zs(t, e, i, s) {
        let o = Math.min(t.length, e.length);
        let n = 0;
        while (n < o && t.charCodeAt(n) == e.charCodeAt(n)) n++;
        if (n == o && t.length == e.length) return null;
        let r = t.length,
          l = e.length;
        while (r > 0 && l > 0 && t.charCodeAt(r - 1) == e.charCodeAt(l - 1)) {
          r--;
          l--;
        }
        if (s == "end") {
          let t = Math.max(0, n - Math.min(r, l));
          i -= r + t - n;
        }
        if (r < n && t.length < e.length) {
          let t = i <= n && i >= r ? n - i : 0;
          n -= t;
          l = n + (l - r);
          r = n;
        } else if (l < n) {
          let t = i <= n && i >= l ? n - i : 0;
          n -= t;
          r = n + (r - l);
          l = n;
        }
        return { from: n, toA: r, toB: l };
      }
      function Ks(t) {
        let e = [];
        if (t.root.activeElement != t.contentDOM) return e;
        let { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: n } = t.observer.selectionRange;
        if (i) {
          e.push(new Vs(i, s));
          if (o != i || n != s) e.push(new Vs(o, n));
        }
        return e;
      }
      function Is(t, e) {
        if (t.length == 0) return null;
        let i = t[0].pos,
          o = t.length == 2 ? t[1].pos : i;
        return i > -1 && o > -1 ? s.EditorSelection.single(i + e, o + e) : null;
      }
      const qs = { childList: true, characterData: true, subtree: true, attributes: true, characterDataOldValue: true };
      const Ys = st.ie && st.ie_version <= 11;
      class Xs {
        constructor(t) {
          this.view = t;
          this.active = false;
          this.selectionRange = new O();
          this.selectionChanged = false;
          this.delayedFlush = -1;
          this.resizeTimeout = -1;
          this.queue = [];
          this.delayedAndroidKey = null;
          this.flushingAndroidKey = -1;
          this.lastChange = 0;
          this.scrollTargets = [];
          this.intersection = null;
          this.resizeScroll = null;
          this.intersecting = false;
          this.gapIntersection = null;
          this.gaps = [];
          this.printQuery = null;
          this.parentCheck = -1;
          this.dom = t.contentDOM;
          this.observer = new MutationObserver((e) => {
            for (let t of e) this.queue.push(t);
            if (
              ((st.ie && st.ie_version <= 11) || (st.ios && t.composing)) &&
              e.some(
                (t) =>
                  (t.type == "childList" && t.removedNodes.length) || (t.type == "characterData" && t.oldValue.length > t.target.nodeValue.length)
              )
            )
              this.flushSoon();
            else this.flush();
          });
          if (Ys)
            this.onCharData = (t) => {
              this.queue.push({ target: t.target, type: "characterData", oldValue: t.prevValue });
              this.flushSoon();
            };
          this.onSelectionChange = this.onSelectionChange.bind(this);
          this.onResize = this.onResize.bind(this);
          this.onPrint = this.onPrint.bind(this);
          this.onScroll = this.onScroll.bind(this);
          if (window.matchMedia) this.printQuery = window.matchMedia("print");
          if (typeof ResizeObserver == "function") {
            this.resizeScroll = new ResizeObserver(() => {
              var t;
              if (((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75) this.onResize();
            });
            this.resizeScroll.observe(t.scrollDOM);
          }
          this.addWindowListeners((this.win = t.win));
          this.start();
          if (typeof IntersectionObserver == "function") {
            this.intersection = new IntersectionObserver(
              (t) => {
                if (this.parentCheck < 0) this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3);
                if (t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting) {
                  this.intersecting = !this.intersecting;
                  if (this.intersecting != this.view.inView) this.onScrollChanged(document.createEvent("Event"));
                }
              },
              { threshold: [0, 0.001] }
            );
            this.intersection.observe(this.dom);
            this.gapIntersection = new IntersectionObserver((t) => {
              if (t.length > 0 && t[t.length - 1].intersectionRatio > 0) this.onScrollChanged(document.createEvent("Event"));
            }, {});
          }
          this.listenForScroll();
          this.readSelectionRange();
        }
        onScrollChanged(t) {
          this.view.inputState.runHandlers("scroll", t);
          if (this.intersecting) this.view.measure();
        }
        onScroll(t) {
          if (this.intersecting) this.flush(false);
          this.onScrollChanged(t);
        }
        onResize() {
          if (this.resizeTimeout < 0)
            this.resizeTimeout = setTimeout(() => {
              this.resizeTimeout = -1;
              this.view.requestMeasure();
            }, 50);
        }
        onPrint(t) {
          if (t.type == "change" && !t.matches) return;
          this.view.viewState.printing = true;
          this.view.measure();
          setTimeout(() => {
            this.view.viewState.printing = false;
            this.view.requestMeasure();
          }, 500);
        }
        updateGaps(t) {
          if (this.gapIntersection && (t.length != this.gaps.length || this.gaps.some((e, i) => e != t[i]))) {
            this.gapIntersection.disconnect();
            for (let e of t) this.gapIntersection.observe(e);
            this.gaps = t;
          }
        }
        onSelectionChange(t) {
          let e = this.selectionChanged;
          if (!this.readSelectionRange() || this.delayedAndroidKey) return;
          let { view: i } = this,
            s = this.selectionRange;
          if (i.state.facet(ge) ? i.root.activeElement != this.dom : !v(i.dom, s)) return;
          let o = s.anchorNode && i.docView.nearest(s.anchorNode);
          if (o && o.ignoreEvent(t)) {
            if (!e) this.selectionChanged = false;
            return;
          }
          if (
            ((st.ie && st.ie_version <= 11) || (st.android && st.chrome)) &&
            !i.state.selection.main.empty &&
            s.focusNode &&
            y(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset)
          )
            this.flushSoon();
          else this.flush(false);
        }
        readSelectionRange() {
          let { view: t } = this;
          let e = (st.safari && t.root.nodeType == 11 && w(this.dom.ownerDocument) == this.dom && Gs(this.view)) || g(t.root);
          if (!e || this.selectionRange.eq(e)) return false;
          let i = v(this.dom, e);
          if (
            i &&
            !this.selectionChanged &&
            t.inputState.lastFocusTime > Date.now() - 200 &&
            t.inputState.lastTouchTime < Date.now() - 300 &&
            N(this.dom, e)
          ) {
            this.view.inputState.lastFocusTime = 0;
            t.docView.updateSelection();
            return false;
          }
          this.selectionRange.setRange(e);
          if (i) this.selectionChanged = true;
          return true;
        }
        setSelectionRange(t, e) {
          this.selectionRange.set(t.node, t.offset, e.node, e.offset);
          this.selectionChanged = false;
        }
        clearSelectionRange() {
          this.selectionRange.set(null, 0, null, 0);
        }
        listenForScroll() {
          this.parentCheck = -1;
          let t = 0,
            e = null;
          for (let i = this.dom; i; ) {
            if (i.nodeType == 1) {
              if (!e && t < this.scrollTargets.length && this.scrollTargets[t] == i) t++;
              else if (!e) e = this.scrollTargets.slice(0, t);
              if (e) e.push(i);
              i = i.assignedSlot || i.parentNode;
            } else if (i.nodeType == 11) {
              i = i.host;
            } else {
              break;
            }
          }
          if (t < this.scrollTargets.length && !e) e = this.scrollTargets.slice(0, t);
          if (e) {
            for (let t of this.scrollTargets) t.removeEventListener("scroll", this.onScroll);
            for (let t of (this.scrollTargets = e)) t.addEventListener("scroll", this.onScroll);
          }
        }
        ignore(t) {
          if (!this.active) return t();
          try {
            this.stop();
            return t();
          } finally {
            this.start();
            this.clear();
          }
        }
        start() {
          if (this.active) return;
          this.observer.observe(this.dom, qs);
          if (Ys) this.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
          this.active = true;
        }
        stop() {
          if (!this.active) return;
          this.active = false;
          this.observer.disconnect();
          if (Ys) this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
        }
        clear() {
          this.processRecords();
          this.queue.length = 0;
          this.selectionChanged = false;
        }
        delayAndroidKey(t, e) {
          var i;
          if (!this.delayedAndroidKey) {
            let t = () => {
              let t = this.delayedAndroidKey;
              if (t) {
                this.clearDelayedAndroidKey();
                this.view.inputState.lastKeyCode = t.keyCode;
                this.view.inputState.lastKeyTime = Date.now();
                let e = this.flush();
                if (!e && t.force) H(this.dom, t.key, t.keyCode);
              }
            };
            this.flushingAndroidKey = this.view.win.requestAnimationFrame(t);
          }
          if (!this.delayedAndroidKey || t == "Enter")
            this.delayedAndroidKey = {
              key: t,
              keyCode: e,
              force: this.lastChange < Date.now() - 50 || !!((i = this.delayedAndroidKey) === null || i === void 0 ? void 0 : i.force),
            };
        }
        clearDelayedAndroidKey() {
          this.win.cancelAnimationFrame(this.flushingAndroidKey);
          this.delayedAndroidKey = null;
          this.flushingAndroidKey = -1;
        }
        flushSoon() {
          if (this.delayedFlush < 0)
            this.delayedFlush = this.view.win.requestAnimationFrame(() => {
              this.delayedFlush = -1;
              this.flush();
            });
        }
        forceFlush() {
          if (this.delayedFlush >= 0) {
            this.view.win.cancelAnimationFrame(this.delayedFlush);
            this.delayedFlush = -1;
          }
          this.flush();
        }
        pendingRecords() {
          for (let t of this.observer.takeRecords()) this.queue.push(t);
          return this.queue;
        }
        processRecords() {
          let t = this.pendingRecords();
          if (t.length) this.queue = [];
          let e = -1,
            i = -1,
            s = false;
          for (let o of t) {
            let t = this.readMutation(o);
            if (!t) continue;
            if (t.typeOver) s = true;
            if (e == -1) {
              ({ from: e, to: i } = t);
            } else {
              e = Math.min(t.from, e);
              i = Math.max(t.to, i);
            }
          }
          return { from: e, to: i, typeOver: s };
        }
        readChange() {
          let { from: t, to: e, typeOver: i } = this.processRecords();
          let s = this.selectionChanged && v(this.dom, this.selectionRange);
          if (t < 0 && !s) return null;
          if (t > -1) this.lastChange = Date.now();
          this.view.inputState.lastFocusTime = 0;
          this.selectionChanged = false;
          let o = new Ns(this.view, t, e, i);
          this.view.docView.domChanged = { newSel: o.newSel ? o.newSel.main : null };
          return o;
        }
        flush(t = true) {
          if (this.delayedFlush >= 0 || this.delayedAndroidKey) return false;
          if (t) this.readSelectionRange();
          let e = this.readChange();
          if (!e) {
            this.view.requestMeasure();
            return false;
          }
          let i = this.view.state;
          let s = Fs(this.view, e);
          if (this.view.state == i) this.view.update([]);
          return s;
        }
        readMutation(t) {
          let e = this.view.docView.nearest(t.target);
          if (!e || e.ignoreMutation(t)) return null;
          e.markDirty(t.type == "attributes");
          if (t.type == "attributes") e.flags |= 4;
          if (t.type == "childList") {
            let i = _s(e, t.previousSibling || t.target.previousSibling, -1);
            let s = _s(e, t.nextSibling || t.target.nextSibling, 1);
            return { from: i ? e.posAfter(i) : e.posAtStart, to: s ? e.posBefore(s) : e.posAtEnd, typeOver: false };
          } else if (t.type == "characterData") {
            return { from: e.posAtStart, to: e.posAtEnd, typeOver: t.target.nodeValue == t.oldValue };
          } else {
            return null;
          }
        }
        setWindow(t) {
          if (t != this.win) {
            this.removeWindowListeners(this.win);
            this.win = t;
            this.addWindowListeners(this.win);
          }
        }
        addWindowListeners(t) {
          t.addEventListener("resize", this.onResize);
          if (this.printQuery) this.printQuery.addEventListener("change", this.onPrint);
          else t.addEventListener("beforeprint", this.onPrint);
          t.addEventListener("scroll", this.onScroll);
          t.document.addEventListener("selectionchange", this.onSelectionChange);
        }
        removeWindowListeners(t) {
          t.removeEventListener("scroll", this.onScroll);
          t.removeEventListener("resize", this.onResize);
          if (this.printQuery) this.printQuery.removeEventListener("change", this.onPrint);
          else t.removeEventListener("beforeprint", this.onPrint);
          t.document.removeEventListener("selectionchange", this.onSelectionChange);
        }
        destroy() {
          var t, e, i;
          this.stop();
          (t = this.intersection) === null || t === void 0 ? void 0 : t.disconnect();
          (e = this.gapIntersection) === null || e === void 0 ? void 0 : e.disconnect();
          (i = this.resizeScroll) === null || i === void 0 ? void 0 : i.disconnect();
          for (let s of this.scrollTargets) s.removeEventListener("scroll", this.onScroll);
          this.removeWindowListeners(this.win);
          clearTimeout(this.parentCheck);
          clearTimeout(this.resizeTimeout);
          this.win.cancelAnimationFrame(this.delayedFlush);
          this.win.cancelAnimationFrame(this.flushingAndroidKey);
        }
      }
      function _s(t, e, i) {
        while (e) {
          let s = K.get(e);
          if (s && s.parent == t) return s;
          let o = e.parentNode;
          e = o != t.dom ? o : i > 0 ? e.nextSibling : e.previousSibling;
        }
        return null;
      }
      function Gs(t) {
        let e = null;
        function i(t) {
          t.preventDefault();
          t.stopImmediatePropagation();
          e = t.getTargetRanges()[0];
        }
        t.contentDOM.addEventListener("beforeinput", i, true);
        t.dom.ownerDocument.execCommand("indent");
        t.contentDOM.removeEventListener("beforeinput", i, true);
        if (!e) return null;
        let s = e.startContainer,
          o = e.startOffset;
        let n = e.endContainer,
          r = e.endOffset;
        let l = t.docView.domAtPos(t.state.selection.main.anchor);
        if (y(l.node, l.offset, n, r)) [s, o, n, r] = [n, r, s, o];
        return { anchorNode: s, anchorOffset: o, focusNode: n, focusOffset: r };
      }
      class js {
        get state() {
          return this.viewState.state;
        }
        get viewport() {
          return this.viewState.viewport;
        }
        get visibleRanges() {
          return this.viewState.visibleRanges;
        }
        get inView() {
          return this.viewState.inView;
        }
        get composing() {
          return this.inputState.composing > 0;
        }
        get compositionStarted() {
          return this.inputState.composing >= 0;
        }
        get root() {
          return this._root;
        }
        get win() {
          return this.dom.ownerDocument.defaultView || window;
        }
        constructor(t = {}) {
          this.plugins = [];
          this.pluginMap = new Map();
          this.editorAttrs = {};
          this.contentAttrs = {};
          this.bidiCache = [];
          this.destroyed = false;
          this.updateState = 2;
          this.measureScheduled = -1;
          this.measureRequests = [];
          this.contentDOM = document.createElement("div");
          this.scrollDOM = document.createElement("div");
          this.scrollDOM.tabIndex = -1;
          this.scrollDOM.className = "cm-scroller";
          this.scrollDOM.appendChild(this.contentDOM);
          this.announceDOM = document.createElement("div");
          this.announceDOM.className = "cm-announced";
          this.announceDOM.setAttribute("aria-live", "polite");
          this.dom = document.createElement("div");
          this.dom.appendChild(this.announceDOM);
          this.dom.appendChild(this.scrollDOM);
          if (t.parent) t.parent.appendChild(this.dom);
          let { dispatch: e } = t;
          this.dispatchTransactions = t.dispatchTransactions || (e && ((t) => t.forEach((t) => e(t, this)))) || ((t) => this.update(t));
          this.dispatch = this.dispatch.bind(this);
          this._root = t.root || P(t.parent) || document;
          this.viewState = new gs(t.state || s.EditorState.create(t));
          if (t.scrollTo && t.scrollTo.is(ue)) this.viewState.scrollTarget = t.scrollTo.value.clip(this.viewState.state);
          this.plugins = this.state.facet(we).map((t) => new be(t));
          for (let i of this.plugins) i.update(this);
          this.observer = new Xs(this);
          this.inputState = new hi(this);
          this.inputState.ensureHandlers(this.plugins);
          this.docView = new Be(this);
          this.mountStyles();
          this.updateAttrs();
          this.updateState = 0;
          this.requestMeasure();
        }
        dispatch(...t) {
          let e = t.length == 1 && t[0] instanceof s.Transaction ? t : t.length == 1 && Array.isArray(t[0]) ? t[0] : [this.state.update(...t)];
          this.dispatchTransactions(e, this);
        }
        update(t) {
          if (this.updateState != 0) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
          let e = false,
            i = false,
            o;
          let n = this.state;
          for (let s of t) {
            if (s.startState != n) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
            n = s.state;
          }
          if (this.destroyed) {
            this.viewState.state = n;
            return;
          }
          let r = this.hasFocus,
            l = 0,
            a = null;
          if (t.some((t) => t.annotation(Yi))) {
            this.inputState.notifiedFocused = r;
            l = 1;
          } else if (r != this.inputState.notifiedFocused) {
            this.inputState.notifiedFocused = r;
            a = Xi(n, r);
            if (!a) l = 1;
          }
          let h = this.observer.delayedAndroidKey,
            c = null;
          if (h) {
            this.observer.clearDelayedAndroidKey();
            c = this.observer.readChange();
            if ((c && !this.state.doc.eq(n.doc)) || !this.state.selection.eq(n.selection)) c = null;
          } else {
            this.observer.clear();
          }
          if (n.facet(s.EditorState.phrases) != this.state.facet(s.EditorState.phrases)) return this.setState(n);
          o = Re.create(this, n, t);
          o.flags |= l;
          let f = this.viewState.scrollTarget;
          try {
            this.updateState = 2;
            for (let e of t) {
              if (f) f = f.map(e.changes);
              if (e.scrollIntoView) {
                let { main: t } = e.state.selection;
                f = new de(t.empty ? t : s.EditorSelection.cursor(t.head, t.head > t.anchor ? -1 : 1));
              }
              for (let t of e.effects) if (t.is(ue)) f = t.value.clip(this.state);
            }
            this.viewState.update(o, f);
            this.bidiCache = Qs.update(this.bidiCache, o.changes);
            if (!o.empty) {
              this.updatePlugins(o);
              this.inputState.update(o);
            }
            e = this.docView.update(o);
            if (this.state.facet(Oe) != this.styleModules) this.mountStyles();
            i = this.updateAttrs();
            this.showAnnouncements(t);
            this.docView.updateSelection(
              e,
              t.some((t) => t.isUserEvent("select.pointer"))
            );
          } finally {
            this.updateState = 0;
          }
          if (o.startState.facet(ks) != o.state.facet(ks)) this.viewState.mustMeasureContent = true;
          if (e || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) this.requestMeasure();
          if (e) this.docViewUpdate();
          if (!o.empty)
            for (let s of this.state.facet(re)) {
              try {
                s(o);
              } catch (d) {
                pe(this.state, d, "update listener");
              }
            }
          if (a || c)
            Promise.resolve().then(() => {
              if (a && this.state == a.startState) this.dispatch(a);
              if (c) {
                if (!Fs(this, c) && h.force) H(this.contentDOM, h.key, h.keyCode);
              }
            });
        }
        setState(t) {
          if (this.updateState != 0) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
          if (this.destroyed) {
            this.viewState.state = t;
            return;
          }
          this.updateState = 2;
          let e = this.hasFocus;
          try {
            for (let t of this.plugins) t.destroy(this);
            this.viewState = new gs(t);
            this.plugins = t.facet(we).map((t) => new be(t));
            this.pluginMap.clear();
            for (let t of this.plugins) t.update(this);
            this.docView.destroy();
            this.docView = new Be(this);
            this.inputState.ensureHandlers(this.plugins);
            this.mountStyles();
            this.updateAttrs();
            this.bidiCache = [];
          } finally {
            this.updateState = 0;
          }
          if (e) this.focus();
          this.requestMeasure();
        }
        updatePlugins(t) {
          let e = t.startState.facet(we),
            i = t.state.facet(we);
          if (e != i) {
            let s = [];
            for (let o of i) {
              let i = e.indexOf(o);
              if (i < 0) {
                s.push(new be(o));
              } else {
                let e = this.plugins[i];
                e.mustUpdate = t;
                s.push(e);
              }
            }
            for (let e of this.plugins) if (e.mustUpdate != t) e.destroy(this);
            this.plugins = s;
            this.pluginMap.clear();
          } else {
            for (let e of this.plugins) e.mustUpdate = t;
          }
          for (let s = 0; s < this.plugins.length; s++) this.plugins[s].update(this);
          if (e != i) this.inputState.ensureHandlers(this.plugins);
        }
        docViewUpdate() {
          for (let e of this.plugins) {
            let i = e.value;
            if (i && i.docViewUpdate) {
              try {
                i.docViewUpdate(this);
              } catch (t) {
                pe(this.state, t, "doc view update listener");
              }
            }
          }
        }
        measure(t = true) {
          if (this.destroyed) return;
          if (this.measureScheduled > -1) this.win.cancelAnimationFrame(this.measureScheduled);
          if (this.observer.delayedAndroidKey) {
            this.measureScheduled = -1;
            this.requestMeasure();
            return;
          }
          this.measureScheduled = 0;
          if (t) this.observer.forceFlush();
          let e = null;
          let i = this.scrollDOM,
            s = i.scrollTop * this.scaleY;
          let { scrollAnchorPos: o, scrollAnchorHeight: n } = this.viewState;
          if (Math.abs(s - this.viewState.scrollTop) > 1) n = -1;
          this.viewState.scrollAnchorHeight = -1;
          try {
            for (let t = 0; ; t++) {
              if (n < 0) {
                if (F(i)) {
                  o = -1;
                  n = this.viewState.heightMap.height;
                } else {
                  let t = this.viewState.scrollAnchorAt(s);
                  o = t.from;
                  n = t.top;
                }
              }
              this.updateState = 1;
              let l = this.viewState.measure(this);
              if (!l && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
              if (t > 5) {
                console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
                break;
              }
              let a = [];
              if (!(l & 4)) [this.measureRequests, a] = [a, this.measureRequests];
              let h = a.map((t) => {
                try {
                  return t.read(this);
                } catch (e) {
                  pe(this.state, e);
                  return Us;
                }
              });
              let c = Re.create(this, this.state, []),
                f = false;
              c.flags |= l;
              if (!e) e = c;
              else e.flags |= l;
              this.updateState = 2;
              if (!c.empty) {
                this.updatePlugins(c);
                this.inputState.update(c);
                this.updateAttrs();
                f = this.docView.update(c);
                if (f) this.docViewUpdate();
              }
              for (let t = 0; t < a.length; t++)
                if (h[t] != Us) {
                  try {
                    let e = a[t];
                    if (e.write) e.write(h[t], this);
                  } catch (r) {
                    pe(this.state, r);
                  }
                }
              if (f) this.docView.updateSelection(true);
              if (!c.viewportChanged && this.measureRequests.length == 0) {
                if (this.viewState.editorHeight) {
                  if (this.viewState.scrollTarget) {
                    this.docView.scrollIntoView(this.viewState.scrollTarget);
                    this.viewState.scrollTarget = null;
                    n = -1;
                    continue;
                  } else {
                    let t = o < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(o).top;
                    let e = t - n;
                    if (e > 1 || e < -1) {
                      s = s + e;
                      i.scrollTop = s / this.scaleY;
                      n = -1;
                      continue;
                    }
                  }
                }
                break;
              }
            }
          } finally {
            this.updateState = 0;
            this.measureScheduled = -1;
          }
          if (e && !e.empty) for (let l of this.state.facet(re)) l(e);
        }
        get themeClasses() {
          return As + " " + (this.state.facet(Cs) ? Ts : Ds) + " " + this.state.facet(ks);
        }
        updateAttrs() {
          let t = Js(this, ye, { class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses });
          let e = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            translate: "no",
            contenteditable: !this.state.facet(ge) ? "false" : "true",
            class: "cm-content",
            style: `${st.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true",
          };
          if (this.state.readOnly) e["aria-readonly"] = "true";
          Js(this, Se, e);
          let i = this.observer.ignore(() => {
            let i = wt(this.contentDOM, this.contentAttrs, e);
            let s = wt(this.dom, this.editorAttrs, t);
            return i || s;
          });
          this.editorAttrs = t;
          this.contentAttrs = e;
          return i;
        }
        showAnnouncements(t) {
          let e = true;
          for (let i of t)
            for (let t of i.effects)
              if (t.is(js.announce)) {
                if (e) this.announceDOM.textContent = "";
                e = false;
                let i = this.announceDOM.appendChild(document.createElement("div"));
                i.textContent = t.value;
              }
        }
        mountStyles() {
          this.styleModules = this.state.facet(Oe);
          let t = this.state.facet(js.cspNonce);
          o.StyleModule.mount(this.root, this.styleModules.concat(Rs).reverse(), t ? { nonce: t } : undefined);
        }
        readMeasured() {
          if (this.updateState == 2) throw new Error("Reading the editor layout isn't allowed during an update");
          if (this.updateState == 0 && this.measureScheduled > -1) this.measure(false);
        }
        requestMeasure(t) {
          if (this.measureScheduled < 0) this.measureScheduled = this.win.requestAnimationFrame(() => this.measure());
          if (t) {
            if (this.measureRequests.indexOf(t) > -1) return;
            if (t.key != null)
              for (let e = 0; e < this.measureRequests.length; e++) {
                if (this.measureRequests[e].key === t.key) {
                  this.measureRequests[e] = t;
                  return;
                }
              }
            this.measureRequests.push(t);
          }
        }
        plugin(t) {
          let e = this.pluginMap.get(t);
          if (e === undefined || (e && e.spec != t)) this.pluginMap.set(t, (e = this.plugins.find((e) => e.spec == t) || null));
          return e && e.update(this).value;
        }
        get documentTop() {
          return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
        }
        get documentPadding() {
          return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
        }
        get scaleX() {
          return this.viewState.scaleX;
        }
        get scaleY() {
          return this.viewState.scaleY;
        }
        elementAtHeight(t) {
          this.readMeasured();
          return this.viewState.elementAtHeight(t);
        }
        lineBlockAtHeight(t) {
          this.readMeasured();
          return this.viewState.lineBlockAtHeight(t);
        }
        get viewportLineBlocks() {
          return this.viewState.viewportLines;
        }
        lineBlockAt(t) {
          return this.viewState.lineBlockAt(t);
        }
        get contentHeight() {
          return this.viewState.contentHeight;
        }
        moveByChar(t, e, i) {
          return ai(this, t, oi(this, t, e, i));
        }
        moveByGroup(t, e) {
          return ai(
            this,
            t,
            oi(this, t, e, (e) => ni(this, t.head, e))
          );
        }
        visualLineSide(t, e) {
          let i = this.bidiSpans(t),
            o = this.textDirectionAt(t.from);
          let n = i[e ? i.length - 1 : 0];
          return s.EditorSelection.cursor(n.side(e, o) + t.from, n.forward(!e, o) ? 1 : -1);
        }
        moveToLineBoundary(t, e, i = true) {
          return si(this, t, e, i);
        }
        moveVertically(t, e, i) {
          return ai(this, t, ri(this, t, e, i));
        }
        domAtPos(t) {
          return this.docView.domAtPos(t);
        }
        posAtDOM(t, e = 0) {
          return this.docView.posFromDOM(t, e);
        }
        posAtCoords(t, e = true) {
          this.readMeasured();
          return Je(this, t, e);
        }
        coordsAtPos(t, e = 1) {
          this.readMeasured();
          let i = this.docView.coordsAt(t, e);
          if (!i || i.left == i.right) return i;
          let s = this.state.doc.lineAt(t),
            o = this.bidiSpans(s);
          let n = o[qt.find(o, t - s.from, -1, e)];
          return k(i, (n.dir == Lt.LTR) == e > 0);
        }
        coordsForChar(t) {
          this.readMeasured();
          return this.docView.coordsForChar(t);
        }
        get defaultCharacterWidth() {
          return this.viewState.heightOracle.charWidth;
        }
        get defaultLineHeight() {
          return this.viewState.heightOracle.lineHeight;
        }
        get textDirection() {
          return this.viewState.defaultTextDirection;
        }
        textDirectionAt(t) {
          let e = this.state.facet(he);
          if (!e || t < this.viewport.from || t > this.viewport.to) return this.textDirection;
          this.readMeasured();
          return this.docView.textDirectionAt(t);
        }
        get lineWrapping() {
          return this.viewState.heightOracle.lineWrapping;
        }
        bidiSpans(t) {
          if (t.length > $s) return Jt(t.length);
          let e = this.textDirectionAt(t.from),
            i;
          for (let o of this.bidiCache) {
            if (o.from == t.from && o.dir == e && (o.fresh || Yt(o.isolates, (i = Ae(this, t))))) return o.order;
          }
          if (!i) i = Ae(this, t);
          let s = Qt(t.text, e, i);
          this.bidiCache.push(new Qs(t.from, t.to, e, i, true, s));
          return s;
        }
        get hasFocus() {
          var t;
          return (
            (this.dom.ownerDocument.hasFocus() ||
              (st.safari && ((t = this.inputState) === null || t === void 0 ? void 0 : t.lastContextMenu) > Date.now() - 3e4)) &&
            this.root.activeElement == this.contentDOM
          );
        }
        focus() {
          this.observer.ignore(() => {
            R(this.contentDOM);
            this.docView.updateSelection();
          });
        }
        setRoot(t) {
          if (this._root != t) {
            this._root = t;
            this.observer.setWindow((t.nodeType == 9 ? t : t.ownerDocument).defaultView || window);
            this.mountStyles();
          }
        }
        destroy() {
          for (let t of this.plugins) t.destroy(this);
          this.plugins = [];
          this.inputState.destroy();
          this.docView.destroy();
          this.dom.remove();
          this.observer.destroy();
          if (this.measureScheduled > -1) this.win.cancelAnimationFrame(this.measureScheduled);
          this.destroyed = true;
        }
        static scrollIntoView(t, e = {}) {
          return ue.of(new de(typeof t == "number" ? s.EditorSelection.cursor(t) : t, e.y, e.x, e.yMargin, e.xMargin));
        }
        scrollSnapshot() {
          let { scrollTop: t, scrollLeft: e } = this.scrollDOM;
          let i = this.viewState.scrollAnchorAt(t);
          return ue.of(new de(s.EditorSelection.cursor(i.from), "start", "start", i.top - t, e, true));
        }
        static domEventHandlers(t) {
          return ve.define(() => ({}), { eventHandlers: t });
        }
        static domEventObservers(t) {
          return ve.define(() => ({}), { eventObservers: t });
        }
        static theme(t, e) {
          let i = o.StyleModule.newName();
          let s = [ks.of(i), Oe.of(Es(`.${i}`, t))];
          if (e && e.dark) s.push(Cs.of(true));
          return s;
        }
        static baseTheme(t) {
          return s.Prec.lowest(Oe.of(Es("." + As, t, Os)));
        }
        static findFromDOM(t) {
          var e;
          let i = t.querySelector(".cm-content");
          let s = (i && K.get(i)) || K.get(t);
          return ((e = s === null || s === void 0 ? void 0 : s.rootView) === null || e === void 0 ? void 0 : e.view) || null;
        }
      }
      js.styleModule = Oe;
      js.inputHandler = le;
      js.scrollHandler = fe;
      js.focusChangeEffect = ae;
      js.perLineTextDirection = he;
      js.exceptionSink = ne;
      js.updateListener = re;
      js.editable = ge;
      js.mouseSelectionStyle = oe;
      js.dragMovesSelection = se;
      js.clickAddsSelectionRange = ie;
      js.decorations = xe;
      js.outerDecorations = Me;
      js.atomicRanges = ke;
      js.bidiIsolatedRanges = Ce;
      js.scrollMargins = De;
      js.darkTheme = Cs;
      js.cspNonce = s.Facet.define({ combine: (t) => (t.length ? t[0] : "") });
      js.contentAttributes = Se;
      js.editorAttributes = ye;
      js.lineWrapping = js.contentAttributes.of({ class: "cm-lineWrapping" });
      js.announce = s.StateEffect.define();
      const $s = 4096;
      const Us = {};
      class Qs {
        constructor(t, e, i, s, o, n) {
          this.from = t;
          this.to = e;
          this.dir = i;
          this.isolates = s;
          this.fresh = o;
          this.order = n;
        }
        static update(t, e) {
          if (e.empty && !t.some((t) => t.fresh)) return t;
          let i = [],
            s = t.length ? t[t.length - 1].dir : Lt.LTR;
          for (let o = Math.max(0, t.length - 10); o < t.length; o++) {
            let n = t[o];
            if (n.dir == s && !e.touchesRange(n.from, n.to))
              i.push(new Qs(e.mapPos(n.from, 1), e.mapPos(n.to, -1), n.dir, n.isolates, false, n.order));
          }
          return i;
        }
      }
      function Js(t, e, i) {
        for (let s = t.state.facet(e), o = s.length - 1; o >= 0; o--) {
          let e = s[o],
            n = typeof e == "function" ? e(t) : e;
          if (n) pt(n, i);
        }
        return i;
      }
      const Zs = st.mac ? "mac" : st.windows ? "win" : st.linux ? "linux" : "key";
      function to(t, e) {
        const i = t.split(/-(?!$)/);
        let s = i[i.length - 1];
        if (s == "Space") s = " ";
        let o, n, r, l;
        for (let a = 0; a < i.length - 1; ++a) {
          const t = i[a];
          if (/^(cmd|meta|m)$/i.test(t)) l = true;
          else if (/^a(lt)?$/i.test(t)) o = true;
          else if (/^(c|ctrl|control)$/i.test(t)) n = true;
          else if (/^s(hift)?$/i.test(t)) r = true;
          else if (/^mod$/i.test(t)) {
            if (e == "mac") l = true;
            else n = true;
          } else throw new Error("Unrecognized modifier name: " + t);
        }
        if (o) s = "Alt-" + s;
        if (n) s = "Ctrl-" + s;
        if (l) s = "Meta-" + s;
        if (r) s = "Shift-" + s;
        return s;
      }
      function eo(t, e, i) {
        if (e.altKey) t = "Alt-" + t;
        if (e.ctrlKey) t = "Ctrl-" + t;
        if (e.metaKey) t = "Meta-" + t;
        if (i !== false && e.shiftKey) t = "Shift-" + t;
        return t;
      }
      const io = s.Prec["default"](
        js.domEventHandlers({
          keydown(t, e) {
            return co(no(e.state), t, e, "editor");
          },
        })
      );
      const so = s.Facet.define({ enables: io });
      const oo = new WeakMap();
      function no(t) {
        let e = t.facet(so);
        let i = oo.get(e);
        if (!i) oo.set(e, (i = ho(e.reduce((t, e) => t.concat(e), []))));
        return i;
      }
      function ro(t, e, i) {
        return co(no(t.state), e, t, i);
      }
      let lo = null;
      const ao = 4e3;
      function ho(t, e = Zs) {
        let i = Object.create(null);
        let s = Object.create(null);
        let o = (t, e) => {
          let i = s[t];
          if (i == null) s[t] = e;
          else if (i != e) throw new Error("Key binding " + t + " is used both as a regular binding and as a multi-stroke prefix");
        };
        let n = (t, s, n, r, l) => {
          var a, h;
          let c = i[t] || (i[t] = Object.create(null));
          let f = s.split(/ (?!$)/).map((t) => to(t, e));
          for (let e = 1; e < f.length; e++) {
            let i = f.slice(0, e).join(" ");
            o(i, true);
            if (!c[i])
              c[i] = {
                preventDefault: true,
                stopPropagation: false,
                run: [
                  (e) => {
                    let s = (lo = { view: e, prefix: i, scope: t });
                    setTimeout(() => {
                      if (lo == s) lo = null;
                    }, ao);
                    return true;
                  },
                ],
              };
          }
          let d = f.join(" ");
          o(d, false);
          let u =
            c[d] ||
            (c[d] = {
              preventDefault: false,
              stopPropagation: false,
              run: ((h = (a = c._any) === null || a === void 0 ? void 0 : a.run) === null || h === void 0 ? void 0 : h.slice()) || [],
            });
          if (n) u.run.push(n);
          if (r) u.preventDefault = true;
          if (l) u.stopPropagation = true;
        };
        for (let r of t) {
          let t = r.scope ? r.scope.split(" ") : ["editor"];
          if (r.any)
            for (let e of t) {
              let t = i[e] || (i[e] = Object.create(null));
              if (!t._any) t._any = { preventDefault: false, stopPropagation: false, run: [] };
              for (let e in t) t[e].run.push(r.any);
            }
          let s = r[e] || r.key;
          if (!s) continue;
          for (let e of t) {
            n(e, s, r.run, r.preventDefault, r.stopPropagation);
            if (r.shift) n(e, "Shift-" + s, r.shift, r.preventDefault, r.stopPropagation);
          }
        }
        return i;
      }
      function co(t, e, i, o) {
        let l = p(e);
        let a = (0, s.codePointAt)(l, 0),
          h = (0, s.codePointSize)(a) == l.length && l != " ";
        let c = "",
          f = false,
          d = false,
          u = false;
        if (lo && lo.view == i && lo.scope == o) {
          c = lo.prefix + " ";
          if (pi.indexOf(e.keyCode) < 0) {
            d = true;
            lo = null;
          }
        }
        let g = new Set();
        let m = (t) => {
          if (t) {
            for (let s of t.run)
              if (!g.has(s)) {
                g.add(s);
                if (s(i, e)) {
                  if (t.stopPropagation) u = true;
                  return true;
                }
              }
            if (t.preventDefault) {
              if (t.stopPropagation) u = true;
              d = true;
            }
          }
          return false;
        };
        let w = t[o],
          v,
          b;
        if (w) {
          if (m(w[c + eo(l, e, !h)])) {
            f = true;
          } else if (h && (e.altKey || e.metaKey || e.ctrlKey) && !(st.windows && e.ctrlKey && e.altKey) && (v = n[e.keyCode]) && v != l) {
            if (m(w[c + eo(v, e, true)])) {
              f = true;
            } else if (e.shiftKey && (b = r[e.keyCode]) != l && b != v && m(w[c + eo(b, e, false)])) {
              f = true;
            }
          } else if (h && e.shiftKey && m(w[c + eo(l, e, true)])) {
            f = true;
          }
          if (!f && m(w._any)) f = true;
        }
        if (d) f = true;
        if (f && u) e.stopPropagation();
        return f;
      }
      class fo {
        constructor(t, e, i, s, o) {
          this.className = t;
          this.left = e;
          this.top = i;
          this.width = s;
          this.height = o;
        }
        draw() {
          let t = document.createElement("div");
          t.className = this.className;
          this.adjust(t);
          return t;
        }
        update(t, e) {
          if (e.className != this.className) return false;
          this.adjust(t);
          return true;
        }
        adjust(t) {
          t.style.left = this.left + "px";
          t.style.top = this.top + "px";
          if (this.width != null) t.style.width = this.width + "px";
          t.style.height = this.height + "px";
        }
        eq(t) {
          return this.left == t.left && this.top == t.top && this.width == t.width && this.height == t.height && this.className == t.className;
        }
        static forRange(t, e, i) {
          if (i.empty) {
            let s = t.coordsAtPos(i.head, i.assoc || 1);
            if (!s) return [];
            let o = uo(t);
            return [new fo(e, s.left - o.left, s.top - o.top, null, s.bottom - s.top)];
          } else {
            return go(t, e, i);
          }
        }
      }
      function uo(t) {
        let e = t.scrollDOM.getBoundingClientRect();
        let i = t.textDirection == Lt.LTR ? e.left : e.right - t.scrollDOM.clientWidth * t.scaleX;
        return { left: i - t.scrollDOM.scrollLeft * t.scaleX, top: e.top - t.scrollDOM.scrollTop * t.scaleY };
      }
      function po(t, e, i) {
        let o = s.EditorSelection.cursor(e);
        return {
          from: Math.max(i.from, t.moveToLineBoundary(o, false, true).from),
          to: Math.min(i.to, t.moveToLineBoundary(o, true, true).from),
          type: xt.Text,
        };
      }
      function go(t, e, i) {
        if (i.to <= t.viewport.from || i.from >= t.viewport.to) return [];
        let s = Math.max(i.from, t.viewport.from),
          o = Math.min(i.to, t.viewport.to);
        let n = t.textDirection == Lt.LTR;
        let r = t.contentDOM,
          l = r.getBoundingClientRect(),
          a = uo(t);
        let h = r.querySelector(".cm-line"),
          c = h && window.getComputedStyle(h);
        let f = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0);
        let d = l.right - (c ? parseInt(c.paddingRight) : 0);
        let u = ii(t, s),
          p = ii(t, o);
        let g = u.type == xt.Text ? u : null;
        let m = p.type == xt.Text ? p : null;
        if (g && (t.lineWrapping || u.widgetLineBreaks)) g = po(t, s, g);
        if (m && (t.lineWrapping || p.widgetLineBreaks)) m = po(t, o, m);
        if (g && m && g.from == m.from) {
          return v(b(i.from, i.to, g));
        } else {
          let e = g ? b(i.from, null, g) : y(u, false);
          let s = m ? b(null, i.to, m) : y(p, true);
          let o = [];
          if ((g || u).to < (m || p).from - (g && m ? 1 : 0) || (u.widgetLineBreaks > 1 && e.bottom + t.defaultLineHeight / 2 < s.top))
            o.push(w(f, e.bottom, d, s.top));
          else if (e.bottom < s.top && t.elementAtHeight((e.bottom + s.top) / 2).type == xt.Text) e.bottom = s.top = (e.bottom + s.top) / 2;
          return v(e).concat(o).concat(v(s));
        }
        function w(t, i, s, o) {
          return new fo(e, t - a.left, i - a.top - 0.01, s - t, o - i + 0.01);
        }
        function v({ top: t, bottom: e, horizontal: i }) {
          let s = [];
          for (let o = 0; o < i.length; o += 2) s.push(w(i[o], t, i[o + 1], e));
          return s;
        }
        function b(e, i, s) {
          let o = 1e9,
            r = -1e9,
            l = [];
          function a(e, i, a, h, c) {
            let u = t.coordsAtPos(e, e == s.to ? -2 : 2);
            let p = t.coordsAtPos(a, a == s.from ? 2 : -2);
            if (!u || !p) return;
            o = Math.min(u.top, p.top, o);
            r = Math.max(u.bottom, p.bottom, r);
            if (c == Lt.LTR) l.push(n && i ? f : u.left, n && h ? d : p.right);
            else l.push(!n && h ? f : p.left, !n && i ? d : u.right);
          }
          let h = e !== null && e !== void 0 ? e : s.from,
            c = i !== null && i !== void 0 ? i : s.to;
          for (let n of t.visibleRanges)
            if (n.to > h && n.from < c) {
              for (let s = Math.max(n.from, h), o = Math.min(n.to, c); ; ) {
                let n = t.state.doc.lineAt(s);
                for (let r of t.bidiSpans(n)) {
                  let t = r.from + n.from,
                    l = r.to + n.from;
                  if (t >= o) break;
                  if (l > s) a(Math.max(t, s), e == null && t <= h, Math.min(l, o), i == null && l >= c, r.dir);
                }
                s = n.to + 1;
                if (s >= o) break;
              }
            }
          if (l.length == 0) a(h, e == null, c, i == null, t.textDirection);
          return { top: o, bottom: r, horizontal: l };
        }
        function y(t, e) {
          let i = l.top + (e ? t.top : t.bottom);
          return { top: i, bottom: i, horizontal: [] };
        }
      }
      function mo(t, e) {
        return t.constructor == e.constructor && t.eq(e);
      }
      class wo {
        constructor(t, e) {
          this.view = t;
          this.layer = e;
          this.drawn = [];
          this.scaleX = 1;
          this.scaleY = 1;
          this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) };
          this.dom = t.scrollDOM.appendChild(document.createElement("div"));
          this.dom.classList.add("cm-layer");
          if (e.above) this.dom.classList.add("cm-layer-above");
          if (e.class) this.dom.classList.add(e.class);
          this.scale();
          this.dom.setAttribute("aria-hidden", "true");
          this.setOrder(t.state);
          t.requestMeasure(this.measureReq);
          if (e.mount) e.mount(this.dom, t);
        }
        update(t) {
          if (t.startState.facet(vo) != t.state.facet(vo)) this.setOrder(t.state);
          if (this.layer.update(t, this.dom) || t.geometryChanged) {
            this.scale();
            t.view.requestMeasure(this.measureReq);
          }
        }
        docViewUpdate(t) {
          if (this.layer.updateOnDocViewUpdate !== false) t.requestMeasure(this.measureReq);
        }
        setOrder(t) {
          let e = 0,
            i = t.facet(vo);
          while (e < i.length && i[e] != this.layer) e++;
          this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - e);
        }
        measure() {
          return this.layer.markers(this.view);
        }
        scale() {
          let { scaleX: t, scaleY: e } = this.view;
          if (t != this.scaleX || e != this.scaleY) {
            this.scaleX = t;
            this.scaleY = e;
            this.dom.style.transform = `scale(${1 / t}, ${1 / e})`;
          }
        }
        draw(t) {
          if (t.length != this.drawn.length || t.some((t, e) => !mo(t, this.drawn[e]))) {
            let e = this.dom.firstChild,
              i = 0;
            for (let s of t) {
              if (s.update && e && s.constructor && this.drawn[i].constructor && s.update(e, this.drawn[i])) {
                e = e.nextSibling;
                i++;
              } else {
                this.dom.insertBefore(s.draw(), e);
              }
            }
            while (e) {
              let t = e.nextSibling;
              e.remove();
              e = t;
            }
            this.drawn = t;
          }
        }
        destroy() {
          if (this.layer.destroy) this.layer.destroy(this.dom, this.view);
          this.dom.remove();
        }
      }
      const vo = s.Facet.define();
      function bo(t) {
        return [ve.define((e) => new wo(e, t)), vo.of(t)];
      }
      const yo = !st.ios;
      const So = s.Facet.define({
        combine(t) {
          return (0, s.combineConfig)(
            t,
            { cursorBlinkRate: 1200, drawRangeCursor: true },
            { cursorBlinkRate: (t, e) => Math.min(t, e), drawRangeCursor: (t, e) => t || e }
          );
        },
      });
      function xo(t = {}) {
        return [So.of(t), Co, Do, Oo, ce.of(true)];
      }
      function Mo(t) {
        return t.facet(So);
      }
      function ko(t) {
        return t.startState.facet(So) != t.state.facet(So);
      }
      const Co = bo({
        above: true,
        markers(t) {
          let { state: e } = t,
            i = e.facet(So);
          let o = [];
          for (let n of e.selection.ranges) {
            let r = n == e.selection.main;
            if (n.empty ? !r || yo : i.drawRangeCursor) {
              let e = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary";
              let i = n.empty ? n : s.EditorSelection.cursor(n.head, n.head > n.anchor ? -1 : 1);
              for (let s of fo.forRange(t, e, i)) o.push(s);
            }
          }
          return o;
        },
        update(t, e) {
          if (t.transactions.some((t) => t.selection)) e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink";
          let i = ko(t);
          if (i) Ao(t.state, e);
          return t.docChanged || t.selectionSet || i;
        },
        mount(t, e) {
          Ao(e.state, t);
        },
        class: "cm-cursorLayer",
      });
      function Ao(t, e) {
        e.style.animationDuration = t.facet(So).cursorBlinkRate + "ms";
      }
      const Do = bo({
        above: false,
        markers(t) {
          return t.state.selection.ranges.map((e) => (e.empty ? [] : fo.forRange(t, "cm-selectionBackground", e))).reduce((t, e) => t.concat(e));
        },
        update(t, e) {
          return t.docChanged || t.selectionSet || t.viewportChanged || ko(t);
        },
        class: "cm-selectionLayer",
      });
      const To = {
        ".cm-line": { "& ::selection": { backgroundColor: "transparent !important" }, "&::selection": { backgroundColor: "transparent !important" } },
      };
      if (yo) {
        To[".cm-line"].caretColor = "transparent !important";
        To[".cm-content"] = { caretColor: "transparent !important" };
      }
      const Oo = s.Prec.highest(js.theme(To));
      const Eo = s.StateEffect.define({
        map(t, e) {
          return t == null ? null : e.mapPos(t);
        },
      });
      const Ro = s.StateField.define({
        create() {
          return null;
        },
        update(t, e) {
          if (t != null) t = e.changes.mapPos(t);
          return e.effects.reduce((t, e) => (e.is(Eo) ? e.value : t), t);
        },
      });
      const Bo = ve.fromClass(
        class {
          constructor(t) {
            this.view = t;
            this.cursor = null;
            this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
          }
          update(t) {
            var e;
            let i = t.state.field(Ro);
            if (i == null) {
              if (this.cursor != null) {
                (e = this.cursor) === null || e === void 0 ? void 0 : e.remove();
                this.cursor = null;
              }
            } else {
              if (!this.cursor) {
                this.cursor = this.view.scrollDOM.appendChild(document.createElement("div"));
                this.cursor.className = "cm-dropCursor";
              }
              if (t.startState.field(Ro) != i || t.docChanged || t.geometryChanged) this.view.requestMeasure(this.measureReq);
            }
          }
          readPos() {
            let { view: t } = this;
            let e = t.state.field(Ro);
            let i = e != null && t.coordsAtPos(e);
            if (!i) return null;
            let s = t.scrollDOM.getBoundingClientRect();
            return {
              left: i.left - s.left + t.scrollDOM.scrollLeft * t.scaleX,
              top: i.top - s.top + t.scrollDOM.scrollTop * t.scaleY,
              height: i.bottom - i.top,
            };
          }
          drawCursor(t) {
            if (this.cursor) {
              let { scaleX: e, scaleY: i } = this.view;
              if (t) {
                this.cursor.style.left = t.left / e + "px";
                this.cursor.style.top = t.top / i + "px";
                this.cursor.style.height = t.height / i + "px";
              } else {
                this.cursor.style.left = "-100000px";
              }
            }
          }
          destroy() {
            if (this.cursor) this.cursor.remove();
          }
          setDropPos(t) {
            if (this.view.state.field(Ro) != t) this.view.dispatch({ effects: Eo.of(t) });
          }
        },
        {
          eventObservers: {
            dragover(t) {
              this.setDropPos(this.view.posAtCoords({ x: t.clientX, y: t.clientY }));
            },
            dragleave(t) {
              if (t.target == this.view.contentDOM || !this.view.contentDOM.contains(t.relatedTarget)) this.setDropPos(null);
            },
            dragend() {
              this.setDropPos(null);
            },
            drop() {
              this.setDropPos(null);
            },
          },
        }
      );
      function Lo() {
        return [Ro, Bo];
      }
      function Ho(t, e, i, s, o) {
        e.lastIndex = 0;
        for (let n = t.iterRange(i, s), r = i, l; !n.next().done; r += n.value.length) {
          if (!n.lineBreak) while ((l = e.exec(n.value))) o(r + l.index, l);
        }
      }
      function Po(t, e) {
        let i = t.visibleRanges;
        if (i.length == 1 && i[0].from == t.viewport.from && i[0].to == t.viewport.to) return i;
        let s = [];
        for (let { from: o, to: n } of i) {
          o = Math.max(t.state.doc.lineAt(o).from, o - e);
          n = Math.min(t.state.doc.lineAt(n).to, n + e);
          if (s.length && s[s.length - 1].to >= o) s[s.length - 1].to = n;
          else s.push({ from: o, to: n });
        }
        return s;
      }
      class Vo {
        constructor(t) {
          const { regexp: e, decoration: i, decorate: s, boundary: o, maxLength: n = 1e3 } = t;
          if (!e.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
          this.regexp = e;
          if (s) {
            this.addMatch = (t, e, i, o) => s(o, i, i + t[0].length, t, e);
          } else if (typeof i == "function") {
            this.addMatch = (t, e, s, o) => {
              let n = i(t, e, s);
              if (n) o(s, s + t[0].length, n);
            };
          } else if (i) {
            this.addMatch = (t, e, s, o) => o(s, s + t[0].length, i);
          } else {
            throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          }
          this.boundary = o;
          this.maxLength = n;
        }
        createDeco(t) {
          let e = new s.RangeSetBuilder(),
            i = e.add.bind(e);
          for (let { from: s, to: o } of Po(t, this.maxLength)) Ho(t.state.doc, this.regexp, s, o, (e, s) => this.addMatch(s, t, e, i));
          return e.finish();
        }
        updateDeco(t, e) {
          let i = 1e9,
            s = -1;
          if (t.docChanged)
            t.changes.iterChanges((e, o, n, r) => {
              if (r > t.view.viewport.from && n < t.view.viewport.to) {
                i = Math.min(n, i);
                s = Math.max(r, s);
              }
            });
          if (t.viewportChanged || s - i > 1e3) return this.createDeco(t.view);
          if (s > -1) return this.updateRange(t.view, e.map(t.changes), i, s);
          return e;
        }
        updateRange(t, e, i, s) {
          for (let o of t.visibleRanges) {
            let n = Math.max(o.from, i),
              r = Math.min(o.to, s);
            if (r > n) {
              let i = t.state.doc.lineAt(n),
                s = i.to < r ? t.state.doc.lineAt(r) : i;
              let l = Math.max(o.from, i.from),
                a = Math.min(o.to, s.to);
              if (this.boundary) {
                for (; n > i.from; n--)
                  if (this.boundary.test(i.text[n - 1 - i.from])) {
                    l = n;
                    break;
                  }
                for (; r < s.to; r++)
                  if (this.boundary.test(s.text[r - s.from])) {
                    a = r;
                    break;
                  }
              }
              let h = [],
                c;
              let f = (t, e, i) => h.push(i.range(t, e));
              if (i == s) {
                this.regexp.lastIndex = l - i.from;
                while ((c = this.regexp.exec(i.text)) && c.index < a - i.from) this.addMatch(c, t, c.index + i.from, f);
              } else {
                Ho(t.state.doc, this.regexp, l, a, (e, i) => this.addMatch(i, t, e, f));
              }
              e = e.update({ filterFrom: l, filterTo: a, filter: (t, e) => t < l || e > a, add: h });
            }
          }
          return e;
        }
      }
      const No = /x/.unicode != null ? "gu" : "g";
      const Fo = new RegExp("[\0-\b\n--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\ufeff￹-￼]", No);
      const Wo = {
        0: "null",
        7: "bell",
        8: "backspace",
        10: "newline",
        11: "vertical tab",
        13: "carriage return",
        27: "escape",
        8203: "zero width space",
        8204: "zero width non-joiner",
        8205: "zero width joiner",
        8206: "left-to-right mark",
        8207: "right-to-left mark",
        8232: "line separator",
        8237: "left-to-right override",
        8238: "right-to-left override",
        8294: "left-to-right isolate",
        8295: "right-to-left isolate",
        8297: "pop directional isolate",
        8233: "paragraph separator",
        65279: "zero width no-break space",
        65532: "object replacement",
      };
      let zo = null;
      function Ko() {
        var t;
        if (zo == null && typeof document != "undefined" && document.body) {
          let e = document.body.style;
          zo = ((t = e.tabSize) !== null && t !== void 0 ? t : e.MozTabSize) != null;
        }
        return zo || false;
      }
      const Io = s.Facet.define({
        combine(t) {
          let e = (0, s.combineConfig)(t, { render: null, specialChars: Fo, addSpecialChars: null });
          if ((e.replaceTabs = !Ko())) e.specialChars = new RegExp("\t|" + e.specialChars.source, No);
          if (e.addSpecialChars) e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, No);
          return e;
        },
      });
      function qo(t = {}) {
        return [Io.of(t), Xo()];
      }
      let Yo = null;
      function Xo() {
        return (
          Yo ||
          (Yo = ve.fromClass(
            class {
              constructor(t) {
                this.view = t;
                this.decorations = Mt.none;
                this.decorationCache = Object.create(null);
                this.decorator = this.makeDecorator(t.state.facet(Io));
                this.decorations = this.decorator.createDeco(t);
              }
              makeDecorator(t) {
                return new Vo({
                  regexp: t.specialChars,
                  decoration: (e, i, o) => {
                    let { doc: n } = i.state;
                    let r = (0, s.codePointAt)(e[0], 0);
                    if (r == 9) {
                      let t = n.lineAt(o);
                      let e = i.state.tabSize,
                        r = (0, s.countColumn)(t.text, e, o - t.from);
                      return Mt.replace({ widget: new $o(((e - (r % e)) * this.view.defaultCharacterWidth) / this.view.scaleX) });
                    }
                    return this.decorationCache[r] || (this.decorationCache[r] = Mt.replace({ widget: new jo(t, r) }));
                  },
                  boundary: t.replaceTabs ? undefined : /[^]/,
                });
              }
              update(t) {
                let e = t.state.facet(Io);
                if (t.startState.facet(Io) != e) {
                  this.decorator = this.makeDecorator(e);
                  this.decorations = this.decorator.createDeco(t.view);
                } else {
                  this.decorations = this.decorator.updateDeco(t, this.decorations);
                }
              }
            },
            { decorations: (t) => t.decorations }
          ))
        );
      }
      const _o = "•";
      function Go(t) {
        if (t >= 32) return _o;
        if (t == 10) return "␤";
        return String.fromCharCode(9216 + t);
      }
      class jo extends St {
        constructor(t, e) {
          super();
          this.options = t;
          this.code = e;
        }
        eq(t) {
          return t.code == this.code;
        }
        toDOM(t) {
          let e = Go(this.code);
          let i = t.state.phrase("Control character") + " " + (Wo[this.code] || "0x" + this.code.toString(16));
          let s = this.options.render && this.options.render(this.code, i, e);
          if (s) return s;
          let o = document.createElement("span");
          o.textContent = e;
          o.title = i;
          o.setAttribute("aria-label", i);
          o.className = "cm-specialChar";
          return o;
        }
        ignoreEvent() {
          return false;
        }
      }
      class $o extends St {
        constructor(t) {
          super();
          this.width = t;
        }
        eq(t) {
          return t.width == this.width;
        }
        toDOM() {
          let t = document.createElement("span");
          t.textContent = "\t";
          t.className = "cm-tab";
          t.style.width = this.width + "px";
          return t;
        }
        ignoreEvent() {
          return false;
        }
      }
      const Uo = ve.fromClass(
        class {
          constructor() {
            this.height = 1e3;
            this.attrs = { style: "padding-bottom: 1000px" };
          }
          update(t) {
            let { view: e } = t;
            let i = e.viewState.editorHeight * e.scaleY - e.defaultLineHeight - e.documentPadding.top - 0.5;
            if (i >= 0 && i != this.height) {
              this.height = i;
              this.attrs = { style: `padding-bottom: ${i}px` };
            }
          }
        }
      );
      function Qo() {
        return [
          Uo,
          Se.of((t) => {
            var e;
            return ((e = t.plugin(Uo)) === null || e === void 0 ? void 0 : e.attrs) || null;
          }),
        ];
      }
      function Jo() {
        return tn;
      }
      const Zo = Mt.line({ class: "cm-activeLine" });
      const tn = ve.fromClass(
        class {
          constructor(t) {
            this.decorations = this.getDeco(t);
          }
          update(t) {
            if (t.docChanged || t.selectionSet) this.decorations = this.getDeco(t.view);
          }
          getDeco(t) {
            let e = -1,
              i = [];
            for (let s of t.state.selection.ranges) {
              let o = t.lineBlockAt(s.head);
              if (o.from > e) {
                i.push(Zo.range(o.from));
                e = o.from;
              }
            }
            return Mt.set(i);
          }
        },
        { decorations: (t) => t.decorations }
      );
      class en extends St {
        constructor(t) {
          super();
          this.content = t;
        }
        toDOM() {
          let t = document.createElement("span");
          t.className = "cm-placeholder";
          t.style.pointerEvents = "none";
          t.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : this.content);
          if (typeof this.content == "string") t.setAttribute("aria-label", "placeholder " + this.content);
          else t.setAttribute("aria-hidden", "true");
          return t;
        }
        coordsAt(t) {
          let e = t.firstChild ? b(t.firstChild) : [];
          if (!e.length) return null;
          let i = window.getComputedStyle(t.parentNode);
          let s = k(e[0], i.direction != "rtl");
          let o = parseInt(i.lineHeight);
          if (s.bottom - s.top > o * 1.5) return { left: s.left, right: s.right, top: s.top, bottom: s.top + o };
          return s;
        }
        ignoreEvent() {
          return false;
        }
      }
      function sn(t) {
        return ve.fromClass(
          class {
            constructor(e) {
              this.view = e;
              this.placeholder = t ? Mt.set([Mt.widget({ widget: new en(t), side: 1 }).range(0)]) : Mt.none;
            }
            get decorations() {
              return this.view.state.doc.length ? Mt.none : this.placeholder;
            }
          },
          { decorations: (t) => t.decorations }
        );
      }
      const on = 2e3;
      function nn(t, e, i) {
        let o = Math.min(e.line, i.line),
          n = Math.max(e.line, i.line);
        let r = [];
        if (e.off > on || i.off > on || e.col < 0 || i.col < 0) {
          let l = Math.min(e.off, i.off),
            a = Math.max(e.off, i.off);
          for (let e = o; e <= n; e++) {
            let i = t.doc.line(e);
            if (i.length <= a) r.push(s.EditorSelection.range(i.from + l, i.to + a));
          }
        } else {
          let l = Math.min(e.col, i.col),
            a = Math.max(e.col, i.col);
          for (let e = o; e <= n; e++) {
            let i = t.doc.line(e);
            let o = (0, s.findColumn)(i.text, l, t.tabSize, true);
            if (o < 0) {
              r.push(s.EditorSelection.cursor(i.to));
            } else {
              let e = (0, s.findColumn)(i.text, a, t.tabSize);
              r.push(s.EditorSelection.range(i.from + o, i.from + e));
            }
          }
        }
        return r;
      }
      function rn(t, e) {
        let i = t.coordsAtPos(t.viewport.from);
        return i ? Math.round(Math.abs((i.left - e) / t.defaultCharacterWidth)) : -1;
      }
      function ln(t, e) {
        let i = t.posAtCoords({ x: e.clientX, y: e.clientY }, false);
        let o = t.state.doc.lineAt(i),
          n = i - o.from;
        let r = n > on ? -1 : n == o.length ? rn(t, e.clientX) : (0, s.countColumn)(o.text, t.state.tabSize, i - o.from);
        return { line: o.number, col: r, off: n };
      }
      function an(t, e) {
        let i = ln(t, e),
          o = t.state.selection;
        if (!i) return null;
        return {
          update(t) {
            if (t.docChanged) {
              let e = t.changes.mapPos(t.startState.doc.line(i.line).from);
              let s = t.state.doc.lineAt(e);
              i = { line: s.number, col: i.col, off: Math.min(i.off, s.length) };
              o = o.map(t.changes);
            }
          },
          get(e, n, r) {
            let l = ln(t, e);
            if (!l) return o;
            let a = nn(t.state, i, l);
            if (!a.length) return o;
            if (r) return s.EditorSelection.create(a.concat(o.ranges));
            else return s.EditorSelection.create(a);
          },
        };
      }
      function hn(t) {
        let e = (t === null || t === void 0 ? void 0 : t.eventFilter) || ((t) => t.altKey && t.button == 0);
        return js.mouseSelectionStyle.of((t, i) => (e(i) ? an(t, i) : null));
      }
      const cn = {
        Alt: [18, (t) => !!t.altKey],
        Control: [17, (t) => !!t.ctrlKey],
        Shift: [16, (t) => !!t.shiftKey],
        Meta: [91, (t) => !!t.metaKey],
      };
      const fn = { style: "cursor: crosshair" };
      function dn(t = {}) {
        let [e, i] = cn[t.key || "Alt"];
        let s = ve.fromClass(
          class {
            constructor(t) {
              this.view = t;
              this.isDown = false;
            }
            set(t) {
              if (this.isDown != t) {
                this.isDown = t;
                this.view.update([]);
              }
            }
          },
          {
            eventObservers: {
              keydown(t) {
                this.set(t.keyCode == e || i(t));
              },
              keyup(t) {
                if (t.keyCode == e || !i(t)) this.set(false);
              },
              mousemove(t) {
                this.set(i(t));
              },
            },
          }
        );
        return [
          s,
          js.contentAttributes.of((t) => {
            var e;
            return ((e = t.plugin(s)) === null || e === void 0 ? void 0 : e.isDown) ? fn : null;
          }),
        ];
      }
      const un = "-10000px";
      class pn {
        constructor(t, e, i, s) {
          this.facet = e;
          this.createTooltipView = i;
          this.removeTooltipView = s;
          this.input = t.state.facet(e);
          this.tooltips = this.input.filter((t) => t);
          let o = null;
          this.tooltipViews = this.tooltips.map((t) => (o = i(t, o)));
        }
        update(t, e) {
          var i;
          let s = t.state.facet(this.facet);
          let o = s.filter((t) => t);
          if (s === this.input) {
            for (let e of this.tooltipViews) if (e.update) e.update(t);
            return false;
          }
          let n = [],
            r = e ? [] : null;
          for (let l = 0; l < o.length; l++) {
            let i = o[l],
              s = -1;
            if (!i) continue;
            for (let t = 0; t < this.tooltips.length; t++) {
              let e = this.tooltips[t];
              if (e && e.create == i.create) s = t;
            }
            if (s < 0) {
              n[l] = this.createTooltipView(i, l ? n[l - 1] : null);
              if (r) r[l] = !!i.above;
            } else {
              let i = (n[l] = this.tooltipViews[s]);
              if (r) r[l] = e[s];
              if (i.update) i.update(t);
            }
          }
          for (let l of this.tooltipViews)
            if (n.indexOf(l) < 0) {
              this.removeTooltipView(l);
              (i = l.destroy) === null || i === void 0 ? void 0 : i.call(l);
            }
          if (e) {
            r.forEach((t, i) => (e[i] = t));
            e.length = r.length;
          }
          this.input = s;
          this.tooltips = o;
          this.tooltipViews = n;
          return true;
        }
      }
      function gn(t = {}) {
        return wn.of(t);
      }
      function mn(t) {
        let { win: e } = t;
        return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
      }
      const wn = s.Facet.define({
        combine: (t) => {
          var e, i, s;
          return {
            position: st.ios ? "absolute" : ((e = t.find((t) => t.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
            parent: ((i = t.find((t) => t.parent)) === null || i === void 0 ? void 0 : i.parent) || null,
            tooltipSpace: ((s = t.find((t) => t.tooltipSpace)) === null || s === void 0 ? void 0 : s.tooltipSpace) || mn,
          };
        },
      });
      const vn = new WeakMap();
      const bn = ve.fromClass(
        class {
          constructor(t) {
            this.view = t;
            this.above = [];
            this.inView = true;
            this.madeAbsolute = false;
            this.lastTransaction = 0;
            this.measureTimeout = -1;
            let e = t.state.facet(wn);
            this.position = e.position;
            this.parent = e.parent;
            this.classes = t.themeClasses;
            this.createContainer();
            this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this };
            this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null;
            this.manager = new pn(
              t,
              xn,
              (t, e) => this.createTooltip(t, e),
              (t) => {
                if (this.resizeObserver) this.resizeObserver.unobserve(t.dom);
                t.dom.remove();
              }
            );
            this.above = this.manager.tooltips.map((t) => !!t.above);
            this.intersectionObserver =
              typeof IntersectionObserver == "function"
                ? new IntersectionObserver(
                    (t) => {
                      if (Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1) this.measureSoon();
                    },
                    { threshold: [1] }
                  )
                : null;
            this.observeIntersection();
            t.win.addEventListener("resize", (this.measureSoon = this.measureSoon.bind(this)));
            this.maybeMeasure();
          }
          createContainer() {
            if (this.parent) {
              this.container = document.createElement("div");
              this.container.style.position = "relative";
              this.container.className = this.view.themeClasses;
              this.parent.appendChild(this.container);
            } else {
              this.container = this.view.dom;
            }
          }
          observeIntersection() {
            if (this.intersectionObserver) {
              this.intersectionObserver.disconnect();
              for (let t of this.manager.tooltipViews) this.intersectionObserver.observe(t.dom);
            }
          }
          measureSoon() {
            if (this.measureTimeout < 0)
              this.measureTimeout = setTimeout(() => {
                this.measureTimeout = -1;
                this.maybeMeasure();
              }, 50);
          }
          update(t) {
            if (t.transactions.length) this.lastTransaction = Date.now();
            let e = this.manager.update(t, this.above);
            if (e) this.observeIntersection();
            let i = e || t.geometryChanged;
            let s = t.state.facet(wn);
            if (s.position != this.position && !this.madeAbsolute) {
              this.position = s.position;
              for (let t of this.manager.tooltipViews) t.dom.style.position = this.position;
              i = true;
            }
            if (s.parent != this.parent) {
              if (this.parent) this.container.remove();
              this.parent = s.parent;
              this.createContainer();
              for (let t of this.manager.tooltipViews) this.container.appendChild(t.dom);
              i = true;
            } else if (this.parent && this.view.themeClasses != this.classes) {
              this.classes = this.container.className = this.view.themeClasses;
            }
            if (i) this.maybeMeasure();
          }
          createTooltip(t, e) {
            let i = t.create(this.view);
            let s = e ? e.dom : null;
            i.dom.classList.add("cm-tooltip");
            if (t.arrow && !i.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
              let t = document.createElement("div");
              t.className = "cm-tooltip-arrow";
              i.dom.insertBefore(t, s);
            }
            i.dom.style.position = this.position;
            i.dom.style.top = un;
            i.dom.style.left = "0px";
            this.container.insertBefore(i.dom, s);
            if (i.mount) i.mount(this.view);
            if (this.resizeObserver) this.resizeObserver.observe(i.dom);
            return i;
          }
          destroy() {
            var t, e, i;
            this.view.win.removeEventListener("resize", this.measureSoon);
            for (let s of this.manager.tooltipViews) {
              s.dom.remove();
              (t = s.destroy) === null || t === void 0 ? void 0 : t.call(s);
            }
            if (this.parent) this.container.remove();
            (e = this.resizeObserver) === null || e === void 0 ? void 0 : e.disconnect();
            (i = this.intersectionObserver) === null || i === void 0 ? void 0 : i.disconnect();
            clearTimeout(this.measureTimeout);
          }
          readMeasure() {
            let t = this.view.dom.getBoundingClientRect();
            let e = 1,
              i = 1,
              s = false;
            if (this.position == "fixed" && this.manager.tooltipViews.length) {
              let { dom: t } = this.manager.tooltipViews[0];
              if (st.gecko) {
                s = t.offsetParent != this.container.ownerDocument.body;
              } else if (t.style.top == un && t.style.left == "0px") {
                let e = t.getBoundingClientRect();
                s = Math.abs(e.top + 1e4) > 1 || Math.abs(e.left) > 1;
              }
            }
            if (s || this.position == "absolute") {
              if (this.parent) {
                let t = this.parent.getBoundingClientRect();
                if (t.width && t.height) {
                  e = t.width / this.parent.offsetWidth;
                  i = t.height / this.parent.offsetHeight;
                }
              } else {
                ({ scaleX: e, scaleY: i } = this.view.viewState);
              }
            }
            return {
              editor: t,
              parent: this.parent ? this.container.getBoundingClientRect() : t,
              pos: this.manager.tooltips.map((t, e) => {
                let i = this.manager.tooltipViews[e];
                return i.getCoords ? i.getCoords(t.pos) : this.view.coordsAtPos(t.pos);
              }),
              size: this.manager.tooltipViews.map(({ dom: t }) => t.getBoundingClientRect()),
              space: this.view.state.facet(wn).tooltipSpace(this.view),
              scaleX: e,
              scaleY: i,
              makeAbsolute: s,
            };
          }
          writeMeasure(t) {
            var e;
            if (t.makeAbsolute) {
              this.madeAbsolute = true;
              this.position = "absolute";
              for (let t of this.manager.tooltipViews) t.dom.style.position = "absolute";
            }
            let { editor: i, space: s, scaleX: o, scaleY: n } = t;
            let r = [];
            for (let l = 0; l < this.manager.tooltips.length; l++) {
              let a = this.manager.tooltips[l],
                h = this.manager.tooltipViews[l],
                { dom: c } = h;
              let f = t.pos[l],
                d = t.size[l];
              if (
                !f ||
                f.bottom <= Math.max(i.top, s.top) ||
                f.top >= Math.min(i.bottom, s.bottom) ||
                f.right < Math.max(i.left, s.left) - 0.1 ||
                f.left > Math.min(i.right, s.right) + 0.1
              ) {
                c.style.top = un;
                continue;
              }
              let u = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null;
              let p = u ? 7 : 0;
              let g = d.right - d.left,
                m = (e = vn.get(h)) !== null && e !== void 0 ? e : d.bottom - d.top;
              let w = h.offset || Sn,
                v = this.view.textDirection == Lt.LTR;
              let b =
                d.width > s.right - s.left
                  ? v
                    ? s.left
                    : s.right - d.width
                  : v
                    ? Math.min(f.left - (u ? 14 : 0) + w.x, s.right - g)
                    : Math.max(s.left, f.left - g + (u ? 14 : 0) - w.x);
              let y = this.above[l];
              if (
                !a.strictSide &&
                (y ? f.top - (d.bottom - d.top) - w.y < s.top : f.bottom + (d.bottom - d.top) + w.y > s.bottom) &&
                y == s.bottom - f.bottom > f.top - s.top
              )
                y = this.above[l] = !y;
              let S = (y ? f.top - s.top : s.bottom - f.bottom) - p;
              if (S < m && h.resize !== false) {
                if (S < this.view.defaultLineHeight) {
                  c.style.top = un;
                  continue;
                }
                vn.set(h, m);
                c.style.height = (m = S) / n + "px";
              } else if (c.style.height) {
                c.style.height = "";
              }
              let x = y ? f.top - m - p - w.y : f.bottom + p + w.y;
              let M = b + g;
              if (h.overlap !== true)
                for (let t of r) if (t.left < M && t.right > b && t.top < x + m && t.bottom > x) x = y ? t.top - m - 2 - p : t.bottom + p + 2;
              if (this.position == "absolute") {
                c.style.top = (x - t.parent.top) / n + "px";
                c.style.left = (b - t.parent.left) / o + "px";
              } else {
                c.style.top = x / n + "px";
                c.style.left = b / o + "px";
              }
              if (u) {
                let t = f.left + (v ? w.x : -w.x) - (b + 14 - 7);
                u.style.left = t / o + "px";
              }
              if (h.overlap !== true) r.push({ left: b, top: x, right: M, bottom: x + m });
              c.classList.toggle("cm-tooltip-above", y);
              c.classList.toggle("cm-tooltip-below", !y);
              if (h.positioned) h.positioned(t.space);
            }
          }
          maybeMeasure() {
            if (this.manager.tooltips.length) {
              if (this.view.inView) this.view.requestMeasure(this.measureReq);
              if (this.inView != this.view.inView) {
                this.inView = this.view.inView;
                if (!this.inView) for (let t of this.manager.tooltipViews) t.dom.style.top = un;
              }
            }
          }
        },
        {
          eventObservers: {
            scroll() {
              this.maybeMeasure();
            },
          },
        }
      );
      const yn = js.baseTheme({
        ".cm-tooltip": { zIndex: 100, boxSizing: "border-box" },
        "&light .cm-tooltip": { border: "1px solid #bbb", backgroundColor: "#f5f5f5" },
        "&light .cm-tooltip-section:not(:first-child)": { borderTop: "1px solid #bbb" },
        "&dark .cm-tooltip": { backgroundColor: "#333338", color: "white" },
        ".cm-tooltip-arrow": {
          height: `${7}px`,
          width: `${7 * 2}px`,
          position: "absolute",
          zIndex: -1,
          overflow: "hidden",
          "&:before, &:after": {
            content: "''",
            position: "absolute",
            width: 0,
            height: 0,
            borderLeft: `${7}px solid transparent`,
            borderRight: `${7}px solid transparent`,
          },
          ".cm-tooltip-above &": {
            bottom: `-${7}px`,
            "&:before": { borderTop: `${7}px solid #bbb` },
            "&:after": { borderTop: `${7}px solid #f5f5f5`, bottom: "1px" },
          },
          ".cm-tooltip-below &": {
            top: `-${7}px`,
            "&:before": { borderBottom: `${7}px solid #bbb` },
            "&:after": { borderBottom: `${7}px solid #f5f5f5`, top: "1px" },
          },
        },
        "&dark .cm-tooltip .cm-tooltip-arrow": {
          "&:before": { borderTopColor: "#333338", borderBottomColor: "#333338" },
          "&:after": { borderTopColor: "transparent", borderBottomColor: "transparent" },
        },
      });
      const Sn = { x: 0, y: 0 };
      const xn = s.Facet.define({ enables: [bn, yn] });
      const Mn = s.Facet.define({ combine: (t) => t.reduce((t, e) => t.concat(e), []) });
      class kn {
        static create(t) {
          return new kn(t);
        }
        constructor(t) {
          this.view = t;
          this.mounted = false;
          this.dom = document.createElement("div");
          this.dom.classList.add("cm-tooltip-hover");
          this.manager = new pn(
            t,
            Mn,
            (t, e) => this.createHostedView(t, e),
            (t) => t.dom.remove()
          );
        }
        createHostedView(t, e) {
          let i = t.create(this.view);
          i.dom.classList.add("cm-tooltip-section");
          this.dom.insertBefore(i.dom, e ? e.dom.nextSibling : this.dom.firstChild);
          if (this.mounted && i.mount) i.mount(this.view);
          return i;
        }
        mount(t) {
          for (let e of this.manager.tooltipViews) {
            if (e.mount) e.mount(t);
          }
          this.mounted = true;
        }
        positioned(t) {
          for (let e of this.manager.tooltipViews) {
            if (e.positioned) e.positioned(t);
          }
        }
        update(t) {
          this.manager.update(t);
        }
        destroy() {
          var t;
          for (let e of this.manager.tooltipViews) (t = e.destroy) === null || t === void 0 ? void 0 : t.call(e);
        }
        passProp(t) {
          let e = undefined;
          for (let i of this.manager.tooltipViews) {
            let s = i[t];
            if (s !== undefined) {
              if (e === undefined) e = s;
              else if (e !== s) return undefined;
            }
          }
          return e;
        }
        get offset() {
          return this.passProp("offset");
        }
        get getCoords() {
          return this.passProp("getCoords");
        }
        get overlap() {
          return this.passProp("overlap");
        }
        get resize() {
          return this.passProp("resize");
        }
      }
      const Cn = xn.compute([Mn], (t) => {
        let e = t.facet(Mn);
        if (e.length === 0) return null;
        return {
          pos: Math.min(...e.map((t) => t.pos)),
          end: Math.max(
            ...e.map((t) => {
              var e;
              return (e = t.end) !== null && e !== void 0 ? e : t.pos;
            })
          ),
          create: kn.create,
          above: e[0].above,
          arrow: e.some((t) => t.arrow),
        };
      });
      class An {
        constructor(t, e, i, s, o) {
          this.view = t;
          this.source = e;
          this.field = i;
          this.setHover = s;
          this.hoverTime = o;
          this.hoverTimeout = -1;
          this.restartTimeout = -1;
          this.pending = null;
          this.lastMove = { x: 0, y: 0, target: t.dom, time: 0 };
          this.checkHover = this.checkHover.bind(this);
          t.dom.addEventListener("mouseleave", (this.mouseleave = this.mouseleave.bind(this)));
          t.dom.addEventListener("mousemove", (this.mousemove = this.mousemove.bind(this)));
        }
        update() {
          if (this.pending) {
            this.pending = null;
            clearTimeout(this.restartTimeout);
            this.restartTimeout = setTimeout(() => this.startHover(), 20);
          }
        }
        get active() {
          return this.view.state.field(this.field);
        }
        checkHover() {
          this.hoverTimeout = -1;
          if (this.active.length) return;
          let t = Date.now() - this.lastMove.time;
          if (t < this.hoverTime) this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t);
          else this.startHover();
        }
        startHover() {
          clearTimeout(this.restartTimeout);
          let { view: t, lastMove: e } = this;
          let i = t.docView.nearest(e.target);
          if (!i) return;
          let s,
            o = 1;
          if (i instanceof at) {
            s = i.posAtStart;
          } else {
            s = t.posAtCoords(e);
            if (s == null) return;
            let i = t.coordsAtPos(s);
            if (!i || e.y < i.top || e.y > i.bottom || e.x < i.left - t.defaultCharacterWidth || e.x > i.right + t.defaultCharacterWidth) return;
            let n = t.bidiSpans(t.state.doc.lineAt(s)).find((t) => t.from <= s && t.to >= s);
            let r = n && n.dir == Lt.RTL ? -1 : 1;
            o = e.x < i.left ? -r : r;
          }
          let n = this.source(t, s, o);
          if (n === null || n === void 0 ? void 0 : n.then) {
            let e = (this.pending = { pos: s });
            n.then(
              (i) => {
                if (this.pending == e) {
                  this.pending = null;
                  if (i && !(Array.isArray(i) && !i.length)) t.dispatch({ effects: this.setHover.of(Array.isArray(i) ? i : [i]) });
                }
              },
              (e) => pe(t.state, e, "hover tooltip")
            );
          } else if (n && !(Array.isArray(n) && !n.length)) {
            t.dispatch({ effects: this.setHover.of(Array.isArray(n) ? n : [n]) });
          }
        }
        get tooltip() {
          let t = this.view.plugin(bn);
          let e = t ? t.manager.tooltips.findIndex((t) => t.create == kn.create) : -1;
          return e > -1 ? t.manager.tooltipViews[e] : null;
        }
        mousemove(t) {
          var e, i;
          this.lastMove = { x: t.clientX, y: t.clientY, target: t.target, time: Date.now() };
          if (this.hoverTimeout < 0) this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime);
          let { active: s, tooltip: o } = this;
          if ((s.length && o && !Tn(o.dom, t)) || this.pending) {
            let { pos: o } = s[0] || this.pending,
              n = (i = (e = s[0]) === null || e === void 0 ? void 0 : e.end) !== null && i !== void 0 ? i : o;
            if (o == n ? this.view.posAtCoords(this.lastMove) != o : !On(this.view, o, n, t.clientX, t.clientY)) {
              this.view.dispatch({ effects: this.setHover.of([]) });
              this.pending = null;
            }
          }
        }
        mouseleave(t) {
          clearTimeout(this.hoverTimeout);
          this.hoverTimeout = -1;
          let { active: e } = this;
          if (e.length) {
            let { tooltip: e } = this;
            let i = e && e.dom.contains(t.relatedTarget);
            if (!i) this.view.dispatch({ effects: this.setHover.of([]) });
            else this.watchTooltipLeave(e.dom);
          }
        }
        watchTooltipLeave(t) {
          let e = (i) => {
            t.removeEventListener("mouseleave", e);
            if (this.active.length && !this.view.dom.contains(i.relatedTarget)) this.view.dispatch({ effects: this.setHover.of([]) });
          };
          t.addEventListener("mouseleave", e);
        }
        destroy() {
          clearTimeout(this.hoverTimeout);
          this.view.dom.removeEventListener("mouseleave", this.mouseleave);
          this.view.dom.removeEventListener("mousemove", this.mousemove);
        }
      }
      const Dn = 4;
      function Tn(t, e) {
        let i = t.getBoundingClientRect();
        return e.clientX >= i.left - Dn && e.clientX <= i.right + Dn && e.clientY >= i.top - Dn && e.clientY <= i.bottom + Dn;
      }
      function On(t, e, i, s, o, n) {
        let r = t.scrollDOM.getBoundingClientRect();
        let l = t.documentTop + t.documentPadding.top + t.contentHeight;
        if (r.left > s || r.right < s || r.top > o || Math.min(r.bottom, l) < o) return false;
        let a = t.posAtCoords({ x: s, y: o }, false);
        return a >= e && a <= i;
      }
      function En(t, e = {}) {
        let i = s.StateEffect.define();
        let o = s.StateField.define({
          create() {
            return [];
          },
          update(t, o) {
            if (t.length) {
              if (e.hideOnChange && (o.docChanged || o.selection)) t = [];
              else if (e.hideOn) t = t.filter((t) => !e.hideOn(o, t));
              if (o.docChanged) {
                let e = [];
                for (let i of t) {
                  let t = o.changes.mapPos(i.pos, -1, s.MapMode.TrackDel);
                  if (t != null) {
                    let s = Object.assign(Object.create(null), i);
                    s.pos = t;
                    if (s.end != null) s.end = o.changes.mapPos(s.end);
                    e.push(s);
                  }
                }
                t = e;
              }
            }
            for (let e of o.effects) {
              if (e.is(i)) t = e.value;
              if (e.is(Ln)) t = [];
            }
            return t;
          },
          provide: (t) => Mn.from(t),
        });
        return [o, ve.define((s) => new An(s, t, o, i, e.hoverTime || 300)), Cn];
      }
      function Rn(t, e) {
        let i = t.plugin(bn);
        if (!i) return null;
        let s = i.manager.tooltips.indexOf(e);
        return s < 0 ? null : i.manager.tooltipViews[s];
      }
      function Bn(t) {
        return t.facet(Mn).some((t) => t);
      }
      const Ln = s.StateEffect.define();
      const Hn = Ln.of(null);
      function Pn(t) {
        let e = t.plugin(bn);
        if (e) e.maybeMeasure();
      }
      const Vn = s.Facet.define({
        combine(t) {
          let e, i;
          for (let s of t) {
            e = e || s.topContainer;
            i = i || s.bottomContainer;
          }
          return { topContainer: e, bottomContainer: i };
        },
      });
      function Nn(t) {
        return t ? [Vn.of(t)] : [];
      }
      function Fn(t, e) {
        let i = t.plugin(Wn);
        let s = i ? i.specs.indexOf(e) : -1;
        return s > -1 ? i.panels[s] : null;
      }
      const Wn = ve.fromClass(
        class {
          constructor(t) {
            this.input = t.state.facet(In);
            this.specs = this.input.filter((t) => t);
            this.panels = this.specs.map((e) => e(t));
            let e = t.state.facet(Vn);
            this.top = new zn(t, true, e.topContainer);
            this.bottom = new zn(t, false, e.bottomContainer);
            this.top.sync(this.panels.filter((t) => t.top));
            this.bottom.sync(this.panels.filter((t) => !t.top));
            for (let i of this.panels) {
              i.dom.classList.add("cm-panel");
              if (i.mount) i.mount();
            }
          }
          update(t) {
            let e = t.state.facet(Vn);
            if (this.top.container != e.topContainer) {
              this.top.sync([]);
              this.top = new zn(t.view, true, e.topContainer);
            }
            if (this.bottom.container != e.bottomContainer) {
              this.bottom.sync([]);
              this.bottom = new zn(t.view, false, e.bottomContainer);
            }
            this.top.syncClasses();
            this.bottom.syncClasses();
            let i = t.state.facet(In);
            if (i != this.input) {
              let e = i.filter((t) => t);
              let s = [],
                o = [],
                n = [],
                r = [];
              for (let i of e) {
                let e = this.specs.indexOf(i),
                  l;
                if (e < 0) {
                  l = i(t.view);
                  r.push(l);
                } else {
                  l = this.panels[e];
                  if (l.update) l.update(t);
                }
                s.push(l);
                (l.top ? o : n).push(l);
              }
              this.specs = e;
              this.panels = s;
              this.top.sync(o);
              this.bottom.sync(n);
              for (let t of r) {
                t.dom.classList.add("cm-panel");
                if (t.mount) t.mount();
              }
            } else {
              for (let e of this.panels) if (e.update) e.update(t);
            }
          }
          destroy() {
            this.top.sync([]);
            this.bottom.sync([]);
          }
        },
        {
          provide: (t) =>
            js.scrollMargins.of((e) => {
              let i = e.plugin(t);
              return i && { top: i.top.scrollMargin(), bottom: i.bottom.scrollMargin() };
            }),
        }
      );
      class zn {
        constructor(t, e, i) {
          this.view = t;
          this.top = e;
          this.container = i;
          this.dom = undefined;
          this.classes = "";
          this.panels = [];
          this.syncClasses();
        }
        sync(t) {
          for (let e of this.panels) if (e.destroy && t.indexOf(e) < 0) e.destroy();
          this.panels = t;
          this.syncDOM();
        }
        syncDOM() {
          if (this.panels.length == 0) {
            if (this.dom) {
              this.dom.remove();
              this.dom = undefined;
            }
            return;
          }
          if (!this.dom) {
            this.dom = document.createElement("div");
            this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom";
            this.dom.style[this.top ? "top" : "bottom"] = "0";
            let t = this.container || this.view.dom;
            t.insertBefore(this.dom, this.top ? t.firstChild : null);
          }
          let t = this.dom.firstChild;
          for (let e of this.panels) {
            if (e.dom.parentNode == this.dom) {
              while (t != e.dom) t = Kn(t);
              t = t.nextSibling;
            } else {
              this.dom.insertBefore(e.dom, t);
            }
          }
          while (t) t = Kn(t);
        }
        scrollMargin() {
          return !this.dom || this.container
            ? 0
            : Math.max(
                0,
                this.top
                  ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top)
                  : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top
              );
        }
        syncClasses() {
          if (!this.container || this.classes == this.view.themeClasses) return;
          for (let t of this.classes.split(" ")) if (t) this.container.classList.remove(t);
          for (let t of (this.classes = this.view.themeClasses).split(" ")) if (t) this.container.classList.add(t);
        }
      }
      function Kn(t) {
        let e = t.nextSibling;
        t.remove();
        return e;
      }
      const In = s.Facet.define({ enables: Wn });
      class qn extends s.RangeValue {
        compare(t) {
          return this == t || (this.constructor == t.constructor && this.eq(t));
        }
        eq(t) {
          return false;
        }
        destroy(t) {}
      }
      qn.prototype.elementClass = "";
      qn.prototype.toDOM = undefined;
      qn.prototype.mapMode = s.MapMode.TrackBefore;
      qn.prototype.startSide = qn.prototype.endSide = -1;
      qn.prototype.point = true;
      const Yn = s.Facet.define();
      const Xn = {
        class: "",
        renderEmptyElements: false,
        elementStyle: "",
        markers: () => s.RangeSet.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
      };
      const _n = s.Facet.define();
      function Gn(t) {
        return [$n(), _n.of(Object.assign(Object.assign({}, Xn), t))];
      }
      const jn = s.Facet.define({ combine: (t) => t.some((t) => t) });
      function $n(t) {
        let e = [Un];
        if (t && t.fixed === false) e.push(jn.of(true));
        return e;
      }
      const Un = ve.fromClass(
        class {
          constructor(t) {
            this.view = t;
            this.prevViewport = t.viewport;
            this.dom = document.createElement("div");
            this.dom.className = "cm-gutters";
            this.dom.setAttribute("aria-hidden", "true");
            this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px";
            this.gutters = t.state.facet(_n).map((e) => new tr(t, e));
            for (let e of this.gutters) this.dom.appendChild(e.dom);
            this.fixed = !t.state.facet(jn);
            if (this.fixed) {
              this.dom.style.position = "sticky";
            }
            this.syncGutters(false);
            t.scrollDOM.insertBefore(this.dom, t.contentDOM);
          }
          update(t) {
            if (this.updateGutters(t)) {
              let e = this.prevViewport,
                i = t.view.viewport;
              let s = Math.min(e.to, i.to) - Math.max(e.from, i.from);
              this.syncGutters(s < (i.to - i.from) * 0.8);
            }
            if (t.geometryChanged) {
              this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px";
            }
            if (this.view.state.facet(jn) != !this.fixed) {
              this.fixed = !this.fixed;
              this.dom.style.position = this.fixed ? "sticky" : "";
            }
            this.prevViewport = t.view.viewport;
          }
          syncGutters(t) {
            let e = this.dom.nextSibling;
            if (t) this.dom.remove();
            let i = s.RangeSet.iter(this.view.state.facet(Yn), this.view.viewport.from);
            let o = [];
            let n = this.gutters.map((t) => new Zn(t, this.view.viewport, -this.view.documentPadding.top));
            for (let s of this.view.viewportLineBlocks) {
              if (o.length) o = [];
              if (Array.isArray(s.type)) {
                let t = true;
                for (let e of s.type) {
                  if (e.type == xt.Text && t) {
                    Jn(i, o, e.from);
                    for (let t of n) t.line(this.view, e, o);
                    t = false;
                  } else if (e.widget) {
                    for (let t of n) t.widget(this.view, e);
                  }
                }
              } else if (s.type == xt.Text) {
                Jn(i, o, s.from);
                for (let t of n) t.line(this.view, s, o);
              } else if (s.widget) {
                for (let t of n) t.widget(this.view, s);
              }
            }
            for (let s of n) s.finish();
            if (t) this.view.scrollDOM.insertBefore(this.dom, e);
          }
          updateGutters(t) {
            let e = t.startState.facet(_n),
              i = t.state.facet(_n);
            let o =
              t.docChanged ||
              t.heightChanged ||
              t.viewportChanged ||
              !s.RangeSet.eq(t.startState.facet(Yn), t.state.facet(Yn), t.view.viewport.from, t.view.viewport.to);
            if (e == i) {
              for (let e of this.gutters) if (e.update(t)) o = true;
            } else {
              o = true;
              let s = [];
              for (let o of i) {
                let i = e.indexOf(o);
                if (i < 0) {
                  s.push(new tr(this.view, o));
                } else {
                  this.gutters[i].update(t);
                  s.push(this.gutters[i]);
                }
              }
              for (let t of this.gutters) {
                t.dom.remove();
                if (s.indexOf(t) < 0) t.destroy();
              }
              for (let t of s) this.dom.appendChild(t.dom);
              this.gutters = s;
            }
            return o;
          }
          destroy() {
            for (let t of this.gutters) t.destroy();
            this.dom.remove();
          }
        },
        {
          provide: (t) =>
            js.scrollMargins.of((e) => {
              let i = e.plugin(t);
              if (!i || i.gutters.length == 0 || !i.fixed) return null;
              return e.textDirection == Lt.LTR ? { left: i.dom.offsetWidth * e.scaleX } : { right: i.dom.offsetWidth * e.scaleX };
            }),
        }
      );
      function Qn(t) {
        return Array.isArray(t) ? t : [t];
      }
      function Jn(t, e, i) {
        while (t.value && t.from <= i) {
          if (t.from == i) e.push(t.value);
          t.next();
        }
      }
      class Zn {
        constructor(t, e, i) {
          this.gutter = t;
          this.height = i;
          this.i = 0;
          this.cursor = s.RangeSet.iter(t.markers, e.from);
        }
        addElement(t, e, i) {
          let { gutter: s } = this,
            o = (e.top - this.height) / t.scaleY,
            n = e.height / t.scaleY;
          if (this.i == s.elements.length) {
            let e = new er(t, n, o, i);
            s.elements.push(e);
            s.dom.appendChild(e.dom);
          } else {
            s.elements[this.i].update(t, n, o, i);
          }
          this.height = e.bottom;
          this.i++;
        }
        line(t, e, i) {
          let s = [];
          Jn(this.cursor, s, e.from);
          if (i.length) s = s.concat(i);
          let o = this.gutter.config.lineMarker(t, e, s);
          if (o) s.unshift(o);
          let n = this.gutter;
          if (s.length == 0 && !n.config.renderEmptyElements) return;
          this.addElement(t, e, s);
        }
        widget(t, e) {
          let i = this.gutter.config.widgetMarker(t, e.widget, e);
          if (i) this.addElement(t, e, [i]);
        }
        finish() {
          let t = this.gutter;
          while (t.elements.length > this.i) {
            let e = t.elements.pop();
            t.dom.removeChild(e.dom);
            e.destroy();
          }
        }
      }
      class tr {
        constructor(t, e) {
          this.view = t;
          this.config = e;
          this.elements = [];
          this.spacer = null;
          this.dom = document.createElement("div");
          this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
          for (let i in e.domEventHandlers) {
            this.dom.addEventListener(i, (s) => {
              let o = s.target,
                n;
              if (o != this.dom && this.dom.contains(o)) {
                while (o.parentNode != this.dom) o = o.parentNode;
                let t = o.getBoundingClientRect();
                n = (t.top + t.bottom) / 2;
              } else {
                n = s.clientY;
              }
              let r = t.lineBlockAtHeight(n - t.documentTop);
              if (e.domEventHandlers[i](t, r, s)) s.preventDefault();
            });
          }
          this.markers = Qn(e.markers(t));
          if (e.initialSpacer) {
            this.spacer = new er(t, 0, 0, [e.initialSpacer(t)]);
            this.dom.appendChild(this.spacer.dom);
            this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none";
          }
        }
        update(t) {
          let e = this.markers;
          this.markers = Qn(this.config.markers(t.view));
          if (this.spacer && this.config.updateSpacer) {
            let e = this.config.updateSpacer(this.spacer.markers[0], t);
            if (e != this.spacer.markers[0]) this.spacer.update(t.view, 0, 0, [e]);
          }
          let i = t.view.viewport;
          return !s.RangeSet.eq(this.markers, e, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(t) : false);
        }
        destroy() {
          for (let t of this.elements) t.destroy();
        }
      }
      class er {
        constructor(t, e, i, s) {
          this.height = -1;
          this.above = 0;
          this.markers = [];
          this.dom = document.createElement("div");
          this.dom.className = "cm-gutterElement";
          this.update(t, e, i, s);
        }
        update(t, e, i, s) {
          if (this.height != e) {
            this.height = e;
            this.dom.style.height = e + "px";
          }
          if (this.above != i) this.dom.style.marginTop = (this.above = i) ? i + "px" : "";
          if (!ir(this.markers, s)) this.setMarkers(t, s);
        }
        setMarkers(t, e) {
          let i = "cm-gutterElement",
            s = this.dom.firstChild;
          for (let o = 0, n = 0; ; ) {
            let r = n,
              l = o < e.length ? e[o++] : null,
              a = false;
            if (l) {
              let t = l.elementClass;
              if (t) i += " " + t;
              for (let e = n; e < this.markers.length; e++)
                if (this.markers[e].compare(l)) {
                  r = e;
                  a = true;
                  break;
                }
            } else {
              r = this.markers.length;
            }
            while (n < r) {
              let t = this.markers[n++];
              if (t.toDOM) {
                t.destroy(s);
                let e = s.nextSibling;
                s.remove();
                s = e;
              }
            }
            if (!l) break;
            if (l.toDOM) {
              if (a) s = s.nextSibling;
              else this.dom.insertBefore(l.toDOM(t), s);
            }
            if (a) n++;
          }
          this.dom.className = i;
          this.markers = e;
        }
        destroy() {
          this.setMarkers(null, []);
        }
      }
      function ir(t, e) {
        if (t.length != e.length) return false;
        for (let i = 0; i < t.length; i++) if (!t[i].compare(e[i])) return false;
        return true;
      }
      const sr = s.Facet.define();
      const or = s.Facet.define({
        combine(t) {
          return (0, s.combineConfig)(
            t,
            { formatNumber: String, domEventHandlers: {} },
            {
              domEventHandlers(t, e) {
                let i = Object.assign({}, t);
                for (let s in e) {
                  let t = i[s],
                    o = e[s];
                  i[s] = t ? (e, i, s) => t(e, i, s) || o(e, i, s) : o;
                }
                return i;
              },
            }
          );
        },
      });
      class nr extends qn {
        constructor(t) {
          super();
          this.number = t;
        }
        eq(t) {
          return this.number == t.number;
        }
        toDOM() {
          return document.createTextNode(this.number);
        }
      }
      function rr(t, e) {
        return t.state.facet(or).formatNumber(e, t.state);
      }
      const lr = _n.compute([or], (t) => ({
        class: "cm-lineNumbers",
        renderEmptyElements: false,
        markers(t) {
          return t.state.facet(sr);
        },
        lineMarker(t, e, i) {
          if (i.some((t) => t.toDOM)) return null;
          return new nr(rr(t, t.state.doc.lineAt(e.from).number));
        },
        widgetMarker: () => null,
        lineMarkerChange: (t) => t.startState.facet(or) != t.state.facet(or),
        initialSpacer(t) {
          return new nr(rr(t, hr(t.state.doc.lines)));
        },
        updateSpacer(t, e) {
          let i = rr(e.view, hr(e.view.state.doc.lines));
          return i == t.number ? t : new nr(i);
        },
        domEventHandlers: t.facet(or).domEventHandlers,
      }));
      function ar(t = {}) {
        return [or.of(t), $n(), lr];
      }
      function hr(t) {
        let e = 9;
        while (e < t) e = e * 10 + 9;
        return e;
      }
      const cr = new (class extends qn {
        constructor() {
          super(...arguments);
          this.elementClass = "cm-activeLineGutter";
        }
      })();
      const fr = Yn.compute(["selection"], (t) => {
        let e = [],
          i = -1;
        for (let s of t.selection.ranges) {
          let o = t.doc.lineAt(s.head).from;
          if (o > i) {
            i = o;
            e.push(cr.range(o));
          }
        }
        return s.RangeSet.of(e);
      });
      function dr() {
        return fr;
      }
      const ur = new Map();
      function pr(t) {
        let e = ur.get(t);
        if (!e)
          ur.set(
            t,
            (e = Mt.mark({
              attributes: t === "\t" ? { class: "cm-highlightTab" } : { class: "cm-highlightSpace", "data-display": t.replace(/ /g, "·") },
            }))
          );
        return e;
      }
      function gr(t) {
        return ve.define(
          (e) => ({
            decorations: t.createDeco(e),
            update(e) {
              this.decorations = t.updateDeco(e, this.decorations);
            },
          }),
          { decorations: (t) => t.decorations }
        );
      }
      const mr = gr(new Vo({ regexp: /\t| +/g, decoration: (t) => pr(t[0]), boundary: /\S/ }));
      function wr() {
        return mr;
      }
      const vr = gr(new Vo({ regexp: /\s+$/g, decoration: Mt.mark({ class: "cm-trailingSpace" }), boundary: /\S/ }));
      function br() {
        return vr;
      }
      const yr = { HeightMap: es, HeightOracle: Ui, MeasuredHeights: Qi, QueryType: Zi, ChangedRange: Ee, computeOrder: Qt, moveVisually: te };
    },
  },
]);
