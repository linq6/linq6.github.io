"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [9],
  {
    20009: (e, t, n) => {
      n.r(t);
      n.d(t, {
        commonmarkLanguage: () => Ge,
        deleteMarkupBackward: () => ft,
        insertNewlineContinueMarkup: () => it,
        markdown: () => dt,
        markdownKeymap: () => ut,
        markdownLanguage: () => We,
      });
      var r = n(37496);
      var s = n(66143);
      var i = n(24104);
      var l = n(1065);
      var o = n(73265);
      var a = n(6016);
      class h {
        static create(e, t, n, r, s) {
          let i = (r + (r << 8) + e + (t << 4)) | 0;
          return new h(e, t, n, i, s, [], []);
        }
        constructor(e, t, n, r, s, i, l) {
          this.type = e;
          this.value = t;
          this.from = n;
          this.hash = r;
          this.end = s;
          this.children = i;
          this.positions = l;
          this.hashProp = [[o.NodeProp.contextHash, r]];
        }
        addChild(e, t) {
          if (e.prop(o.NodeProp.contextHash) != this.hash) e = new o.Tree(e.type, e.children, e.positions, e.length, this.hashProp);
          this.children.push(e);
          this.positions.push(t);
        }
        toTree(e, t = this.end) {
          let n = this.children.length - 1;
          if (n >= 0) t = Math.max(t, this.positions[n] + this.children[n].length + this.from);
          return new o.Tree(e.types[this.type], this.children, this.positions, t - this.from).balance({
            makeTree: (e, t, n) => new o.Tree(o.NodeType.none, e, t, n, this.hashProp),
          });
        }
      }
      var f;
      (function (e) {
        e[(e["Document"] = 1)] = "Document";
        e[(e["CodeBlock"] = 2)] = "CodeBlock";
        e[(e["FencedCode"] = 3)] = "FencedCode";
        e[(e["Blockquote"] = 4)] = "Blockquote";
        e[(e["HorizontalRule"] = 5)] = "HorizontalRule";
        e[(e["BulletList"] = 6)] = "BulletList";
        e[(e["OrderedList"] = 7)] = "OrderedList";
        e[(e["ListItem"] = 8)] = "ListItem";
        e[(e["ATXHeading1"] = 9)] = "ATXHeading1";
        e[(e["ATXHeading2"] = 10)] = "ATXHeading2";
        e[(e["ATXHeading3"] = 11)] = "ATXHeading3";
        e[(e["ATXHeading4"] = 12)] = "ATXHeading4";
        e[(e["ATXHeading5"] = 13)] = "ATXHeading5";
        e[(e["ATXHeading6"] = 14)] = "ATXHeading6";
        e[(e["SetextHeading1"] = 15)] = "SetextHeading1";
        e[(e["SetextHeading2"] = 16)] = "SetextHeading2";
        e[(e["HTMLBlock"] = 17)] = "HTMLBlock";
        e[(e["LinkReference"] = 18)] = "LinkReference";
        e[(e["Paragraph"] = 19)] = "Paragraph";
        e[(e["CommentBlock"] = 20)] = "CommentBlock";
        e[(e["ProcessingInstructionBlock"] = 21)] = "ProcessingInstructionBlock";
        e[(e["Escape"] = 22)] = "Escape";
        e[(e["Entity"] = 23)] = "Entity";
        e[(e["HardBreak"] = 24)] = "HardBreak";
        e[(e["Emphasis"] = 25)] = "Emphasis";
        e[(e["StrongEmphasis"] = 26)] = "StrongEmphasis";
        e[(e["Link"] = 27)] = "Link";
        e[(e["Image"] = 28)] = "Image";
        e[(e["InlineCode"] = 29)] = "InlineCode";
        e[(e["HTMLTag"] = 30)] = "HTMLTag";
        e[(e["Comment"] = 31)] = "Comment";
        e[(e["ProcessingInstruction"] = 32)] = "ProcessingInstruction";
        e[(e["Autolink"] = 33)] = "Autolink";
        e[(e["HeaderMark"] = 34)] = "HeaderMark";
        e[(e["QuoteMark"] = 35)] = "QuoteMark";
        e[(e["ListMark"] = 36)] = "ListMark";
        e[(e["LinkMark"] = 37)] = "LinkMark";
        e[(e["EmphasisMark"] = 38)] = "EmphasisMark";
        e[(e["CodeMark"] = 39)] = "CodeMark";
        e[(e["CodeText"] = 40)] = "CodeText";
        e[(e["CodeInfo"] = 41)] = "CodeInfo";
        e[(e["LinkTitle"] = 42)] = "LinkTitle";
        e[(e["LinkLabel"] = 43)] = "LinkLabel";
        e[(e["URL"] = 44)] = "URL";
      })(f || (f = {}));
      class u {
        constructor(e, t) {
          this.start = e;
          this.content = t;
          this.marks = [];
          this.parsers = [];
        }
      }
      class c {
        constructor() {
          this.text = "";
          this.baseIndent = 0;
          this.basePos = 0;
          this.depth = 0;
          this.markers = [];
          this.pos = 0;
          this.indent = 0;
          this.next = -1;
        }
        forward() {
          if (this.basePos > this.pos) this.forwardInner();
        }
        forwardInner() {
          let e = this.skipSpace(this.basePos);
          this.indent = this.countIndent(e, this.pos, this.indent);
          this.pos = e;
          this.next = e == this.text.length ? -1 : this.text.charCodeAt(e);
        }
        skipSpace(e) {
          return m(this.text, e);
        }
        reset(e) {
          this.text = e;
          this.baseIndent = this.basePos = this.pos = this.indent = 0;
          this.forwardInner();
          this.depth = 1;
          while (this.markers.length) this.markers.pop();
        }
        moveBase(e) {
          this.basePos = e;
          this.baseIndent = this.countIndent(e, this.pos, this.indent);
        }
        moveBaseColumn(e) {
          this.baseIndent = e;
          this.basePos = this.findColumn(e);
        }
        addMarker(e) {
          this.markers.push(e);
        }
        countIndent(e, t = 0, n = 0) {
          for (let r = t; r < e; r++) n += this.text.charCodeAt(r) == 9 ? 4 - (n % 4) : 1;
          return n;
        }
        findColumn(e) {
          let t = 0;
          for (let n = 0; t < this.text.length && n < e; t++) n += this.text.charCodeAt(t) == 9 ? 4 - (n % 4) : 1;
          return t;
        }
        scrub() {
          if (!this.baseIndent) return this.text;
          let e = "";
          for (let t = 0; t < this.basePos; t++) e += " ";
          return e + this.text.slice(this.basePos);
        }
      }
      function d(e, t, n) {
        if (n.pos == n.text.length || (e != t.block && n.indent >= t.stack[n.depth + 1].value + n.baseIndent)) return true;
        if (n.indent >= n.baseIndent + 4) return false;
        let r = (e.type == f.OrderedList ? C : S)(n, t, false);
        return r > 0 && (e.type != f.BulletList || L(n, t, false) < 0) && n.text.charCodeAt(n.pos + r - 1) == e.value;
      }
      const p = {
        [f.Blockquote](e, t, n) {
          if (n.next != 62) return false;
          n.markers.push(J(f.QuoteMark, t.lineStart + n.pos, t.lineStart + n.pos + 1));
          n.moveBase(n.pos + (g(n.text.charCodeAt(n.pos + 1)) ? 2 : 1));
          e.end = t.lineStart + n.text.length;
          return true;
        },
        [f.ListItem](e, t, n) {
          if (n.indent < n.baseIndent + e.value && n.next > -1) return false;
          n.moveBaseColumn(n.baseIndent + e.value);
          return true;
        },
        [f.OrderedList]: d,
        [f.BulletList]: d,
        [f.Document]() {
          return true;
        },
      };
      function g(e) {
        return e == 32 || e == 9 || e == 10 || e == 13;
      }
      function m(e, t = 0) {
        while (t < e.length && g(e.charCodeAt(t))) t++;
        return t;
      }
      function k(e, t, n) {
        while (t > n && g(e.charCodeAt(t - 1))) t--;
        return t;
      }
      function x(e) {
        if (e.next != 96 && e.next != 126) return -1;
        let t = e.pos + 1;
        while (t < e.text.length && e.text.charCodeAt(t) == e.next) t++;
        if (t < e.pos + 3) return -1;
        if (e.next == 96) for (let n = t; n < e.text.length; n++) if (e.text.charCodeAt(n) == 96) return -1;
        return t;
      }
      function b(e) {
        return e.next != 62 ? -1 : e.text.charCodeAt(e.pos + 1) == 32 ? 2 : 1;
      }
      function L(e, t, n) {
        if (e.next != 42 && e.next != 45 && e.next != 95) return -1;
        let r = 1;
        for (let s = e.pos + 1; s < e.text.length; s++) {
          let t = e.text.charCodeAt(s);
          if (t == e.next) r++;
          else if (!g(t)) return -1;
        }
        if (n && e.next == 45 && T(e) > -1 && e.depth == t.stack.length) return -1;
        return r < 3 ? -1 : 1;
      }
      function w(e, t) {
        for (let n = e.stack.length - 1; n >= 0; n--) if (e.stack[n].type == t) return true;
        return false;
      }
      function S(e, t, n) {
        return (e.next == 45 || e.next == 43 || e.next == 42) &&
          (e.pos == e.text.length - 1 || g(e.text.charCodeAt(e.pos + 1))) &&
          (!n || w(t, f.BulletList) || e.skipSpace(e.pos + 2) < e.text.length)
          ? 1
          : -1;
      }
      function C(e, t, n) {
        let r = e.pos,
          s = e.next;
        for (;;) {
          if (s >= 48 && s <= 57) r++;
          else break;
          if (r == e.text.length) return -1;
          s = e.text.charCodeAt(r);
        }
        if (
          r == e.pos ||
          r > e.pos + 9 ||
          (s != 46 && s != 41) ||
          (r < e.text.length - 1 && !g(e.text.charCodeAt(r + 1))) ||
          (n && !w(t, f.OrderedList) && (e.skipSpace(r + 1) == e.text.length || r > e.pos + 1 || e.next != 49))
        )
          return -1;
        return r + 1 - e.pos;
      }
      function y(e) {
        if (e.next != 35) return -1;
        let t = e.pos + 1;
        while (t < e.text.length && e.text.charCodeAt(t) == 35) t++;
        if (t < e.text.length && e.text.charCodeAt(t) != 32) return -1;
        let n = t - e.pos;
        return n > 6 ? -1 : n;
      }
      function T(e) {
        if ((e.next != 45 && e.next != 61) || e.indent >= e.baseIndent + 4) return -1;
        let t = e.pos + 1;
        while (t < e.text.length && e.text.charCodeAt(t) == e.next) t++;
        let n = t;
        while (t < e.text.length && g(e.text.charCodeAt(t))) t++;
        return t == e.text.length ? n : -1;
      }
      const A = /^[ \t]*$/,
        I = /-->/,
        B = /\?>/;
      const E = [
        [/^<(?:script|pre|style)(?:\s|>|$)/i, /<\/(?:script|pre|style)>/i],
        [/^\s*<!--/, I],
        [/^\s*<\?/, B],
        [/^\s*<![A-Z]/, />/],
        [/^\s*<!\[CDATA\[/, /\]\]>/],
        [
          /^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i,
          A,
        ],
        [/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i, A],
      ];
      function M(e, t, n) {
        if (e.next != 60) return -1;
        let r = e.text.slice(e.pos);
        for (let s = 0, i = E.length - (n ? 1 : 0); s < i; s++) if (E[s][0].test(r)) return s;
        return -1;
      }
      function P(e, t) {
        let n = e.countIndent(t, e.pos, e.indent);
        let r = e.countIndent(e.skipSpace(t), t, n);
        return r >= n + 5 ? n + 1 : r;
      }
      function H(e, t, n) {
        let r = e.length - 1;
        if (r >= 0 && e[r].to == t && e[r].type == f.CodeText) e[r].to = n;
        else e.push(J(f.CodeText, t, n));
      }
      const v = {
        LinkReference: undefined,
        IndentedCode(e, t) {
          let n = t.baseIndent + 4;
          if (t.indent < n) return false;
          let r = t.findColumn(n);
          let s = e.lineStart + r,
            i = e.lineStart + t.text.length;
          let l = [],
            o = [];
          H(l, s, i);
          while (e.nextLine() && t.depth >= e.stack.length) {
            if (t.pos == t.text.length) {
              H(o, e.lineStart - 1, e.lineStart);
              for (let e of t.markers) o.push(e);
            } else if (t.indent < n) {
              break;
            } else {
              if (o.length) {
                for (let e of o) {
                  if (e.type == f.CodeText) H(l, e.from, e.to);
                  else l.push(e);
                }
                o = [];
              }
              H(l, e.lineStart - 1, e.lineStart);
              for (let e of t.markers) l.push(e);
              i = e.lineStart + t.text.length;
              let n = e.lineStart + t.findColumn(t.baseIndent + 4);
              if (n < i) H(l, n, i);
            }
          }
          if (o.length) {
            o = o.filter((e) => e.type != f.CodeText);
            if (o.length) t.markers = o.concat(t.markers);
          }
          e.addNode(e.buffer.writeElements(l, -s).finish(f.CodeBlock, i - s), s);
          return true;
        },
        FencedCode(e, t) {
          let n = x(t);
          if (n < 0) return false;
          let r = e.lineStart + t.pos,
            s = t.next,
            i = n - t.pos;
          let l = t.skipSpace(n),
            o = k(t.text, t.text.length, l);
          let a = [J(f.CodeMark, r, r + i)];
          if (l < o) a.push(J(f.CodeInfo, e.lineStart + l, e.lineStart + o));
          for (let h = true; e.nextLine() && t.depth >= e.stack.length; h = false) {
            let n = t.pos;
            if (t.indent - t.baseIndent < 4) while (n < t.text.length && t.text.charCodeAt(n) == s) n++;
            if (n - t.pos >= i && t.skipSpace(n) == t.text.length) {
              for (let e of t.markers) a.push(e);
              a.push(J(f.CodeMark, e.lineStart + t.pos, e.lineStart + n));
              e.nextLine();
              break;
            } else {
              if (!h) H(a, e.lineStart - 1, e.lineStart);
              for (let e of t.markers) a.push(e);
              let n = e.lineStart + t.basePos,
                r = e.lineStart + t.text.length;
              if (n < r) H(a, n, r);
            }
          }
          e.addNode(e.buffer.writeElements(a, -r).finish(f.FencedCode, e.prevLineEnd() - r), r);
          return true;
        },
        Blockquote(e, t) {
          let n = b(t);
          if (n < 0) return false;
          e.startContext(f.Blockquote, t.pos);
          e.addNode(f.QuoteMark, e.lineStart + t.pos, e.lineStart + t.pos + 1);
          t.moveBase(t.pos + n);
          return null;
        },
        HorizontalRule(e, t) {
          if (L(t, e, false) < 0) return false;
          let n = e.lineStart + t.pos;
          e.nextLine();
          e.addNode(f.HorizontalRule, n);
          return true;
        },
        BulletList(e, t) {
          let n = S(t, e, false);
          if (n < 0) return false;
          if (e.block.type != f.BulletList) e.startContext(f.BulletList, t.basePos, t.next);
          let r = P(t, t.pos + 1);
          e.startContext(f.ListItem, t.basePos, r - t.baseIndent);
          e.addNode(f.ListMark, e.lineStart + t.pos, e.lineStart + t.pos + n);
          t.moveBaseColumn(r);
          return null;
        },
        OrderedList(e, t) {
          let n = C(t, e, false);
          if (n < 0) return false;
          if (e.block.type != f.OrderedList) e.startContext(f.OrderedList, t.basePos, t.text.charCodeAt(t.pos + n - 1));
          let r = P(t, t.pos + n);
          e.startContext(f.ListItem, t.basePos, r - t.baseIndent);
          e.addNode(f.ListMark, e.lineStart + t.pos, e.lineStart + t.pos + n);
          t.moveBaseColumn(r);
          return null;
        },
        ATXHeading(e, t) {
          let n = y(t);
          if (n < 0) return false;
          let r = t.pos,
            s = e.lineStart + r;
          let i = k(t.text, t.text.length, r),
            l = i;
          while (l > r && t.text.charCodeAt(l - 1) == t.next) l--;
          if (l == i || l == r || !g(t.text.charCodeAt(l - 1))) l = t.text.length;
          let o = e.buffer.write(f.HeaderMark, 0, n).writeElements(e.parser.parseInline(t.text.slice(r + n + 1, l), s + n + 1), -s);
          if (l < t.text.length) o.write(f.HeaderMark, l - r, i - r);
          let a = o.finish(f.ATXHeading1 - 1 + n, t.text.length - r);
          e.nextLine();
          e.addNode(a, s);
          return true;
        },
        HTMLBlock(e, t) {
          let n = M(t, e, false);
          if (n < 0) return false;
          let r = e.lineStart + t.pos,
            s = E[n][1];
          let i = [],
            l = s != A;
          while (!s.test(t.text) && e.nextLine()) {
            if (t.depth < e.stack.length) {
              l = false;
              break;
            }
            for (let e of t.markers) i.push(e);
          }
          if (l) e.nextLine();
          let o = s == I ? f.CommentBlock : s == B ? f.ProcessingInstructionBlock : f.HTMLBlock;
          let a = e.prevLineEnd();
          e.addNode(e.buffer.writeElements(i, -r).finish(o, a - r), r);
          return true;
        },
        SetextHeading: undefined,
      };
      class N {
        constructor(e) {
          this.stage = 0;
          this.elts = [];
          this.pos = 0;
          this.start = e.start;
          this.advance(e.content);
        }
        nextLine(e, t, n) {
          if (this.stage == -1) return false;
          let r = n.content + "\n" + t.scrub();
          let s = this.advance(r);
          if (s > -1 && s < r.length) return this.complete(e, n, s);
          return false;
        }
        finish(e, t) {
          if ((this.stage == 2 || this.stage == 3) && m(t.content, this.pos) == t.content.length) return this.complete(e, t, t.content.length);
          return false;
        }
        complete(e, t, n) {
          e.addLeafElement(t, J(f.LinkReference, this.start, this.start + n, this.elts));
          return true;
        }
        nextStage(e) {
          if (e) {
            this.pos = e.to - this.start;
            this.elts.push(e);
            this.stage++;
            return true;
          }
          if (e === false) this.stage = -1;
          return false;
        }
        advance(e) {
          for (;;) {
            if (this.stage == -1) {
              return -1;
            } else if (this.stage == 0) {
              if (!this.nextStage(he(e, this.pos, this.start, true))) return -1;
              if (e.charCodeAt(this.pos) != 58) return (this.stage = -1);
              this.elts.push(J(f.LinkMark, this.pos + this.start, this.pos + this.start + 1));
              this.pos++;
            } else if (this.stage == 1) {
              if (!this.nextStage(oe(e, m(e, this.pos), this.start))) return -1;
            } else if (this.stage == 2) {
              let t = m(e, this.pos),
                n = 0;
              if (t > this.pos) {
                let r = ae(e, t, this.start);
                if (r) {
                  let t = O(e, r.to - this.start);
                  if (t > 0) {
                    this.nextStage(r);
                    n = t;
                  }
                }
              }
              if (!n) n = O(e, this.pos);
              return n > 0 && n < e.length ? n : -1;
            } else {
              return O(e, this.pos);
            }
          }
        }
      }
      function O(e, t) {
        for (; t < e.length; t++) {
          let n = e.charCodeAt(t);
          if (n == 10) break;
          if (!g(n)) return -1;
        }
        return t;
      }
      class R {
        nextLine(e, t, n) {
          let r = t.depth < e.stack.length ? -1 : T(t);
          let s = t.next;
          if (r < 0) return false;
          let i = J(f.HeaderMark, e.lineStart + t.pos, e.lineStart + r);
          e.nextLine();
          e.addLeafElement(
            n,
            J(s == 61 ? f.SetextHeading1 : f.SetextHeading2, n.start, e.prevLineEnd(), [...e.parser.parseInline(n.content, n.start), i])
          );
          return true;
        }
        finish() {
          return false;
        }
      }
      const X = {
        LinkReference(e, t) {
          return t.content.charCodeAt(0) == 91 ? new N(t) : null;
        },
        SetextHeading() {
          return new R();
        },
      };
      const D = [
        (e, t) => y(t) >= 0,
        (e, t) => x(t) >= 0,
        (e, t) => b(t) >= 0,
        (e, t) => S(t, e, true) >= 0,
        (e, t) => C(t, e, true) >= 0,
        (e, t) => L(t, e, true) >= 0,
        (e, t) => M(t, e, true) >= 0,
      ];
      const z = { text: "", end: 0 };
      class $ {
        constructor(e, t, n, r) {
          this.parser = e;
          this.input = t;
          this.ranges = r;
          this.line = new c();
          this.atEnd = false;
          this.reusePlaceholders = new Map();
          this.stoppedAt = null;
          this.rangeI = 0;
          this.to = r[r.length - 1].to;
          this.lineStart = this.absoluteLineStart = this.absoluteLineEnd = r[0].from;
          this.block = h.create(f.Document, 0, this.lineStart, 0, 0);
          this.stack = [this.block];
          this.fragments = n.length ? new de(n, t) : null;
          this.readLine();
        }
        get parsedPos() {
          return this.absoluteLineStart;
        }
        advance() {
          if (this.stoppedAt != null && this.absoluteLineStart > this.stoppedAt) return this.finish();
          let { line: e } = this;
          for (;;) {
            for (let t = 0; ; ) {
              let n = e.depth < this.stack.length ? this.stack[this.stack.length - 1] : null;
              while (t < e.markers.length && (!n || e.markers[t].from < n.end)) {
                let n = e.markers[t++];
                this.addNode(n.type, n.from, n.to);
              }
              if (!n) break;
              this.finishContext();
            }
            if (e.pos < e.text.length) break;
            if (!this.nextLine()) return this.finish();
          }
          if (this.fragments && this.reuseFragment(e.basePos)) return null;
          e: for (;;) {
            for (let t of this.parser.blockParsers)
              if (t) {
                let n = t(this, e);
                if (n != false) {
                  if (n == true) return null;
                  e.forward();
                  continue e;
                }
              }
            break;
          }
          let t = new u(this.lineStart + e.pos, e.text.slice(e.pos));
          for (let n of this.parser.leafBlockParsers)
            if (n) {
              let e = n(this, t);
              if (e) t.parsers.push(e);
            }
          e: while (this.nextLine()) {
            if (e.pos == e.text.length) break;
            if (e.indent < e.baseIndent + 4) {
              for (let n of this.parser.endLeafBlock) if (n(this, e, t)) break e;
            }
            for (let n of t.parsers) if (n.nextLine(this, e, t)) return null;
            t.content += "\n" + e.scrub();
            for (let n of e.markers) t.marks.push(n);
          }
          this.finishLeaf(t);
          return null;
        }
        stopAt(e) {
          if (this.stoppedAt != null && this.stoppedAt < e) throw new RangeError("Can't move stoppedAt forward");
          this.stoppedAt = e;
        }
        reuseFragment(e) {
          if (!this.fragments.moveTo(this.absoluteLineStart + e, this.absoluteLineStart) || !this.fragments.matches(this.block.hash)) return false;
          let t = this.fragments.takeNodes(this);
          if (!t) return false;
          this.absoluteLineStart += t;
          this.lineStart = pe(this.absoluteLineStart, this.ranges);
          this.moveRangeI();
          if (this.absoluteLineStart < this.to) {
            this.lineStart++;
            this.absoluteLineStart++;
            this.readLine();
          } else {
            this.atEnd = true;
            this.readLine();
          }
          return true;
        }
        get depth() {
          return this.stack.length;
        }
        parentType(e = this.depth - 1) {
          return this.parser.nodeSet.types[this.stack[e].type];
        }
        nextLine() {
          this.lineStart += this.line.text.length;
          if (this.absoluteLineEnd >= this.to) {
            this.absoluteLineStart = this.absoluteLineEnd;
            this.atEnd = true;
            this.readLine();
            return false;
          } else {
            this.lineStart++;
            this.absoluteLineStart = this.absoluteLineEnd + 1;
            this.moveRangeI();
            this.readLine();
            return true;
          }
        }
        moveRangeI() {
          while (this.rangeI < this.ranges.length - 1 && this.absoluteLineStart >= this.ranges[this.rangeI].to) {
            this.rangeI++;
            this.absoluteLineStart = Math.max(this.absoluteLineStart, this.ranges[this.rangeI].from);
          }
        }
        scanLine(e) {
          let t = z;
          t.end = e;
          if (e >= this.to) {
            t.text = "";
          } else {
            t.text = this.lineChunkAt(e);
            t.end += t.text.length;
            if (this.ranges.length > 1) {
              let e = this.absoluteLineStart,
                n = this.rangeI;
              while (this.ranges[n].to < t.end) {
                n++;
                let r = this.ranges[n].from;
                let s = this.lineChunkAt(r);
                t.end = r + s.length;
                t.text = t.text.slice(0, this.ranges[n - 1].to - e) + s;
                e = t.end - t.text.length;
              }
            }
          }
          return t;
        }
        readLine() {
          let { line: e } = this,
            { text: t, end: n } = this.scanLine(this.absoluteLineStart);
          this.absoluteLineEnd = n;
          e.reset(t);
          for (; e.depth < this.stack.length; e.depth++) {
            let t = this.stack[e.depth],
              n = this.parser.skipContextMarkup[t.type];
            if (!n) throw new Error("Unhandled block context " + f[t.type]);
            if (!n(t, this, e)) break;
            e.forward();
          }
        }
        lineChunkAt(e) {
          let t = this.input.chunk(e),
            n;
          if (!this.input.lineChunks) {
            let e = t.indexOf("\n");
            n = e < 0 ? t : t.slice(0, e);
          } else {
            n = t == "\n" ? "" : t;
          }
          return e + n.length > this.to ? n.slice(0, this.to - e) : n;
        }
        prevLineEnd() {
          return this.atEnd ? this.lineStart : this.lineStart - 1;
        }
        startContext(e, t, n = 0) {
          this.block = h.create(e, n, this.lineStart + t, this.block.hash, this.lineStart + this.line.text.length);
          this.stack.push(this.block);
        }
        startComposite(e, t, n = 0) {
          this.startContext(this.parser.getNodeType(e), t, n);
        }
        addNode(e, t, n) {
          if (typeof e == "number") e = new o.Tree(this.parser.nodeSet.types[e], Z, Z, (n !== null && n !== void 0 ? n : this.prevLineEnd()) - t);
          this.block.addChild(e, t - this.block.from);
        }
        addElement(e) {
          this.block.addChild(e.toTree(this.parser.nodeSet), e.from - this.block.from);
        }
        addLeafElement(e, t) {
          this.addNode(this.buffer.writeElements(ue(t.children, e.marks), -t.from).finish(t.type, t.to - t.from), t.from);
        }
        finishContext() {
          let e = this.stack.pop();
          let t = this.stack[this.stack.length - 1];
          t.addChild(e.toTree(this.parser.nodeSet), e.from - t.from);
          this.block = t;
        }
        finish() {
          while (this.stack.length > 1) this.finishContext();
          return this.addGaps(this.block.toTree(this.parser.nodeSet, this.lineStart));
        }
        addGaps(e) {
          return this.ranges.length > 1 ? F(this.ranges, 0, e.topNode, this.ranges[0].from, this.reusePlaceholders) : e;
        }
        finishLeaf(e) {
          for (let n of e.parsers) if (n.finish(this, e)) return;
          let t = ue(this.parser.parseInline(e.content, e.start), e.marks);
          this.addNode(this.buffer.writeElements(t, -e.start).finish(f.Paragraph, e.content.length), e.start);
        }
        elt(e, t, n, r) {
          if (typeof e == "string") return J(this.parser.getNodeType(e), t, n, r);
          return new G(e, t);
        }
        get buffer() {
          return new K(this.parser.nodeSet);
        }
      }
      function F(e, t, n, r, s) {
        let i = e[t].to;
        let l = [],
          a = [],
          h = n.from + r;
        function f(n, s) {
          while (s ? n >= i : n > i) {
            let s = e[t + 1].from - i;
            r += s;
            n += s;
            t++;
            i = e[t].to;
          }
        }
        for (let o = n.firstChild; o; o = o.nextSibling) {
          f(o.from + r, true);
          let n = o.from + r,
            u,
            c = s.get(o.tree);
          if (c) {
            u = c;
          } else if (o.to + r > i) {
            u = F(e, t, o, r, s);
            f(o.to + r, false);
          } else {
            u = o.toTree();
          }
          l.push(u);
          a.push(n - h);
        }
        f(n.to + r, false);
        return new o.Tree(n.type, l, a, n.to + r - h, n.tree ? n.tree.propValues : undefined);
      }
      class _ extends o.Parser {
        constructor(e, t, n, r, s, i, l, o, a) {
          super();
          this.nodeSet = e;
          this.blockParsers = t;
          this.leafBlockParsers = n;
          this.blockNames = r;
          this.endLeafBlock = s;
          this.skipContextMarkup = i;
          this.inlineParsers = l;
          this.inlineNames = o;
          this.wrappers = a;
          this.nodeTypes = Object.create(null);
          for (let h of e.types) this.nodeTypes[h.name] = h.id;
        }
        createParse(e, t, n) {
          let r = new $(this, e, t, n);
          for (let s of this.wrappers) r = s(r, e, t, n);
          return r;
        }
        configure(e) {
          let t = q(e);
          if (!t) return this;
          let { nodeSet: n, skipContextMarkup: r } = this;
          let s = this.blockParsers.slice(),
            i = this.leafBlockParsers.slice(),
            l = this.blockNames.slice(),
            h = this.inlineParsers.slice(),
            u = this.inlineNames.slice(),
            c = this.endLeafBlock.slice(),
            d = this.wrappers;
          if (j(t.defineNodes)) {
            r = Object.assign({}, r);
            let e = n.types.slice(),
              s;
            for (let n of t.defineNodes) {
              let { name: t, block: i, composite: l, style: h } = typeof n == "string" ? { name: n } : n;
              if (e.some((e) => e.name == t)) continue;
              if (l) r[e.length] = (e, t, n) => l(t, n, e.value);
              let u = e.length;
              let c = l
                ? ["Block", "BlockContext"]
                : !i
                  ? undefined
                  : u >= f.ATXHeading1 && u <= f.SetextHeading2
                    ? ["Block", "LeafBlock", "Heading"]
                    : ["Block", "LeafBlock"];
              e.push(o.NodeType.define({ id: u, name: t, props: c && [[o.NodeProp.group, c]] }));
              if (h) {
                if (!s) s = {};
                if (Array.isArray(h) || h instanceof a.Tag) s[t] = h;
                else Object.assign(s, h);
              }
            }
            n = new o.NodeSet(e);
            if (s) n = n.extend((0, a.styleTags)(s));
          }
          if (j(t.props)) n = n.extend(...t.props);
          if (j(t.remove)) {
            for (let e of t.remove) {
              let t = this.blockNames.indexOf(e),
                n = this.inlineNames.indexOf(e);
              if (t > -1) s[t] = i[t] = undefined;
              if (n > -1) h[n] = undefined;
            }
          }
          if (j(t.parseBlock)) {
            for (let e of t.parseBlock) {
              let t = l.indexOf(e.name);
              if (t > -1) {
                s[t] = e.parse;
                i[t] = e.leaf;
              } else {
                let t = e.before ? U(l, e.before) : e.after ? U(l, e.after) + 1 : l.length - 1;
                s.splice(t, 0, e.parse);
                i.splice(t, 0, e.leaf);
                l.splice(t, 0, e.name);
              }
              if (e.endLeaf) c.push(e.endLeaf);
            }
          }
          if (j(t.parseInline)) {
            for (let e of t.parseInline) {
              let t = u.indexOf(e.name);
              if (t > -1) {
                h[t] = e.parse;
              } else {
                let t = e.before ? U(u, e.before) : e.after ? U(u, e.after) + 1 : u.length - 1;
                h.splice(t, 0, e.parse);
                u.splice(t, 0, e.name);
              }
            }
          }
          if (t.wrap) d = d.concat(t.wrap);
          return new _(n, s, i, l, c, r, h, u, d);
        }
        getNodeType(e) {
          let t = this.nodeTypes[e];
          if (t == null) throw new RangeError(`Unknown node type '${e}'`);
          return t;
        }
        parseInline(e, t) {
          let n = new fe(this, e, t);
          e: for (let r = t; r < n.end; ) {
            let e = n.char(r);
            for (let t of this.inlineParsers)
              if (t) {
                let s = t(n, e, r);
                if (s >= 0) {
                  r = s;
                  continue e;
                }
              }
            r++;
          }
          return n.resolveMarkers(0);
        }
      }
      function j(e) {
        return e != null && e.length > 0;
      }
      function q(e) {
        if (!Array.isArray(e)) return e;
        if (e.length == 0) return null;
        let t = q(e[0]);
        if (e.length == 1) return t;
        let n = q(e.slice(1));
        if (!n || !t) return t || n;
        let r = (e, t) => (e || Z).concat(t || Z);
        let s = t.wrap,
          i = n.wrap;
        return {
          props: r(t.props, n.props),
          defineNodes: r(t.defineNodes, n.defineNodes),
          parseBlock: r(t.parseBlock, n.parseBlock),
          parseInline: r(t.parseInline, n.parseInline),
          remove: r(t.remove, n.remove),
          wrap: !s ? i : !i ? s : (e, t, n, r) => s(i(e, t, n, r), t, n, r),
        };
      }
      function U(e, t) {
        let n = e.indexOf(t);
        if (n < 0) throw new RangeError(`Position specified relative to unknown parser ${t}`);
        return n;
      }
      let Q = [o.NodeType.none];
      for (let xt = 1, bt; (bt = f[xt]); xt++) {
        Q[xt] = o.NodeType.define({
          id: xt,
          name: bt,
          props: xt >= f.Escape ? [] : [[o.NodeProp.group, xt in p ? ["Block", "BlockContext"] : ["Block", "LeafBlock"]]],
          top: bt == "Document",
        });
      }
      const Z = [];
      class K {
        constructor(e) {
          this.nodeSet = e;
          this.content = [];
          this.nodes = [];
        }
        write(e, t, n, r = 0) {
          this.content.push(e, t, n, 4 + r * 4);
          return this;
        }
        writeElements(e, t = 0) {
          for (let n of e) n.writeTo(this, t);
          return this;
        }
        finish(e, t) {
          return o.Tree.build({ buffer: this.content, nodeSet: this.nodeSet, reused: this.nodes, topID: e, length: t });
        }
      }
      class V {
        constructor(e, t, n, r = Z) {
          this.type = e;
          this.from = t;
          this.to = n;
          this.children = r;
        }
        writeTo(e, t) {
          let n = e.content.length;
          e.writeElements(this.children, t);
          e.content.push(this.type, this.from + t, this.to + t, e.content.length + 4 - n);
        }
        toTree(e) {
          return new K(e).writeElements(this.children, -this.from).finish(this.type, this.to - this.from);
        }
      }
      class G {
        constructor(e, t) {
          this.tree = e;
          this.from = t;
        }
        get to() {
          return this.from + this.tree.length;
        }
        get type() {
          return this.tree.type.id;
        }
        get children() {
          return Z;
        }
        writeTo(e, t) {
          e.nodes.push(this.tree);
          e.content.push(e.nodes.length - 1, this.from + t, this.to + t, -1);
        }
        toTree() {
          return this.tree;
        }
      }
      function J(e, t, n, r) {
        return new V(e, t, n, r);
      }
      const W = { resolve: "Emphasis", mark: "EmphasisMark" };
      const Y = { resolve: "Emphasis", mark: "EmphasisMark" };
      const ee = {},
        te = {};
      class ne {
        constructor(e, t, n, r) {
          this.type = e;
          this.from = t;
          this.to = n;
          this.side = r;
        }
      }
      const re = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      let se = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;
      try {
        se = new RegExp("[\\p{Pc}|\\p{Pd}|\\p{Pe}|\\p{Pf}|\\p{Pi}|\\p{Po}|\\p{Ps}]", "u");
      } catch (kt) {}
      const ie = {
        Escape(e, t, n) {
          if (t != 92 || n == e.end - 1) return -1;
          let r = e.char(n + 1);
          for (let s = 0; s < re.length; s++) if (re.charCodeAt(s) == r) return e.append(J(f.Escape, n, n + 2));
          return -1;
        },
        Entity(e, t, n) {
          if (t != 38) return -1;
          let r = /^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(e.slice(n + 1, n + 31));
          return r ? e.append(J(f.Entity, n, n + 1 + r[0].length)) : -1;
        },
        InlineCode(e, t, n) {
          if (t != 96 || (n && e.char(n - 1) == 96)) return -1;
          let r = n + 1;
          while (r < e.end && e.char(r) == 96) r++;
          let s = r - n,
            i = 0;
          for (; r < e.end; r++) {
            if (e.char(r) == 96) {
              i++;
              if (i == s && e.char(r + 1) != 96)
                return e.append(J(f.InlineCode, n, r + 1, [J(f.CodeMark, n, n + s), J(f.CodeMark, r + 1 - s, r + 1)]));
            } else {
              i = 0;
            }
          }
          return -1;
        },
        HTMLTag(e, t, n) {
          if (t != 60 || n == e.end - 1) return -1;
          let r = e.slice(n + 1, e.end);
          let s =
            /^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(
              r
            );
          if (s) {
            return e.append(
              J(f.Autolink, n, n + 1 + s[0].length, [
                J(f.LinkMark, n, n + 1),
                J(f.URL, n + 1, n + s[0].length),
                J(f.LinkMark, n + s[0].length, n + 1 + s[0].length),
              ])
            );
          }
          let i = /^!--[^>](?:-[^-]|[^-])*?-->/i.exec(r);
          if (i) return e.append(J(f.Comment, n, n + 1 + i[0].length));
          let l = /^\?[^]*?\?>/.exec(r);
          if (l) return e.append(J(f.ProcessingInstruction, n, n + 1 + l[0].length));
          let o =
            /^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(
              r
            );
          if (!o) return -1;
          return e.append(J(f.HTMLTag, n, n + 1 + o[0].length));
        },
        Emphasis(e, t, n) {
          if (t != 95 && t != 42) return -1;
          let r = n + 1;
          while (e.char(r) == t) r++;
          let s = e.slice(n - 1, n),
            i = e.slice(r, r + 1);
          let l = se.test(s),
            o = se.test(i);
          let a = /\s|^$/.test(s),
            h = /\s|^$/.test(i);
          let f = !h && (!o || a || l);
          let u = !a && (!l || h || o);
          let c = f && (t == 42 || !u || l);
          let d = u && (t == 42 || !f || o);
          return e.append(new ne(t == 95 ? W : Y, n, r, (c ? 1 : 0) | (d ? 2 : 0)));
        },
        HardBreak(e, t, n) {
          if (t == 92 && e.char(n + 1) == 10) return e.append(J(f.HardBreak, n, n + 2));
          if (t == 32) {
            let t = n + 1;
            while (e.char(t) == 32) t++;
            if (e.char(t) == 10 && t >= n + 2) return e.append(J(f.HardBreak, n, t + 1));
          }
          return -1;
        },
        Link(e, t, n) {
          return t == 91 ? e.append(new ne(ee, n, n + 1, 1)) : -1;
        },
        Image(e, t, n) {
          return t == 33 && e.char(n + 1) == 91 ? e.append(new ne(te, n, n + 2, 1)) : -1;
        },
        LinkEnd(e, t, n) {
          if (t != 93) return -1;
          for (let r = e.parts.length - 1; r >= 0; r--) {
            let t = e.parts[r];
            if (t instanceof ne && (t.type == ee || t.type == te)) {
              if (!t.side || (e.skipSpace(t.to) == n && !/[(\[]/.test(e.slice(n + 1, n + 2)))) {
                e.parts[r] = null;
                return -1;
              }
              let s = e.takeContent(r);
              let i = (e.parts[r] = le(e, s, t.type == ee ? f.Link : f.Image, t.from, n + 1));
              if (t.type == ee)
                for (let t = 0; t < r; t++) {
                  let n = e.parts[t];
                  if (n instanceof ne && n.type == ee) n.side = 0;
                }
              return i.to;
            }
          }
          return -1;
        },
      };
      function le(e, t, n, r, s) {
        let { text: i } = e,
          l = e.char(s),
          o = s;
        t.unshift(J(f.LinkMark, r, r + (n == f.Image ? 2 : 1)));
        t.push(J(f.LinkMark, s - 1, s));
        if (l == 40) {
          let n = e.skipSpace(s + 1);
          let r = oe(i, n - e.offset, e.offset),
            l;
          if (r) {
            n = e.skipSpace(r.to);
            if (n != r.to) {
              l = ae(i, n - e.offset, e.offset);
              if (l) n = e.skipSpace(l.to);
            }
          }
          if (e.char(n) == 41) {
            t.push(J(f.LinkMark, s, s + 1));
            o = n + 1;
            if (r) t.push(r);
            if (l) t.push(l);
            t.push(J(f.LinkMark, n, o));
          }
        } else if (l == 91) {
          let n = he(i, s - e.offset, e.offset, false);
          if (n) {
            t.push(n);
            o = n.to;
          }
        }
        return J(n, r, o, t);
      }
      function oe(e, t, n) {
        let r = e.charCodeAt(t);
        if (r == 60) {
          for (let r = t + 1; r < e.length; r++) {
            let s = e.charCodeAt(r);
            if (s == 62) return J(f.URL, t + n, r + 1 + n);
            if (s == 60 || s == 10) return false;
          }
          return null;
        } else {
          let r = 0,
            s = t;
          for (let t = false; s < e.length; s++) {
            let n = e.charCodeAt(s);
            if (g(n)) {
              break;
            } else if (t) {
              t = false;
            } else if (n == 40) {
              r++;
            } else if (n == 41) {
              if (!r) break;
              r--;
            } else if (n == 92) {
              t = true;
            }
          }
          return s > t ? J(f.URL, t + n, s + n) : s == e.length ? null : false;
        }
      }
      function ae(e, t, n) {
        let r = e.charCodeAt(t);
        if (r != 39 && r != 34 && r != 40) return false;
        let s = r == 40 ? 41 : r;
        for (let i = t + 1, l = false; i < e.length; i++) {
          let r = e.charCodeAt(i);
          if (l) l = false;
          else if (r == s) return J(f.LinkTitle, t + n, i + 1 + n);
          else if (r == 92) l = true;
        }
        return null;
      }
      function he(e, t, n, r) {
        for (let s = false, i = t + 1, l = Math.min(e.length, i + 999); i < l; i++) {
          let l = e.charCodeAt(i);
          if (s) s = false;
          else if (l == 93) return r ? false : J(f.LinkLabel, t + n, i + 1 + n);
          else {
            if (r && !g(l)) r = false;
            if (l == 91) return false;
            else if (l == 92) s = true;
          }
        }
        return null;
      }
      class fe {
        constructor(e, t, n) {
          this.parser = e;
          this.text = t;
          this.offset = n;
          this.parts = [];
        }
        char(e) {
          return e >= this.end ? -1 : this.text.charCodeAt(e - this.offset);
        }
        get end() {
          return this.offset + this.text.length;
        }
        slice(e, t) {
          return this.text.slice(e - this.offset, t - this.offset);
        }
        append(e) {
          this.parts.push(e);
          return e.to;
        }
        addDelimiter(e, t, n, r, s) {
          return this.append(new ne(e, t, n, (r ? 1 : 0) | (s ? 2 : 0)));
        }
        addElement(e) {
          return this.append(e);
        }
        resolveMarkers(e) {
          for (let n = e; n < this.parts.length; n++) {
            let t = this.parts[n];
            if (!(t instanceof ne && t.type.resolve && t.side & 2)) continue;
            let r = t.type == W || t.type == Y;
            let s = t.to - t.from;
            let i,
              l = n - 1;
            for (; l >= e; l--) {
              let e = this.parts[l];
              if (
                e instanceof ne &&
                e.side & 1 &&
                e.type == t.type &&
                !(r && (t.side & 1 || e.side & 2) && (e.to - e.from + s) % 3 == 0 && ((e.to - e.from) % 3 || s % 3))
              ) {
                i = e;
                break;
              }
            }
            if (!i) continue;
            let o = t.type.resolve,
              a = [];
            let h = i.from,
              f = t.to;
            if (r) {
              let e = Math.min(2, i.to - i.from, s);
              h = i.to - e;
              f = t.from + e;
              o = e == 1 ? "Emphasis" : "StrongEmphasis";
            }
            if (i.type.mark) a.push(this.elt(i.type.mark, h, i.to));
            for (let e = l + 1; e < n; e++) {
              if (this.parts[e] instanceof V) a.push(this.parts[e]);
              this.parts[e] = null;
            }
            if (t.type.mark) a.push(this.elt(t.type.mark, t.from, f));
            let u = this.elt(o, h, f, a);
            this.parts[l] = r && i.from != h ? new ne(i.type, i.from, h, i.side) : null;
            let c = (this.parts[n] = r && t.to != f ? new ne(t.type, f, t.to, t.side) : null);
            if (c) this.parts.splice(n, 0, u);
            else this.parts[n] = u;
          }
          let t = [];
          for (let n = e; n < this.parts.length; n++) {
            let e = this.parts[n];
            if (e instanceof V) t.push(e);
          }
          return t;
        }
        findOpeningDelimiter(e) {
          for (let t = this.parts.length - 1; t >= 0; t--) {
            let n = this.parts[t];
            if (n instanceof ne && n.type == e) return t;
          }
          return null;
        }
        takeContent(e) {
          let t = this.resolveMarkers(e);
          this.parts.length = e;
          return t;
        }
        skipSpace(e) {
          return m(this.text, e - this.offset) + this.offset;
        }
        elt(e, t, n, r) {
          if (typeof e == "string") return J(this.parser.getNodeType(e), t, n, r);
          return new G(e, t);
        }
      }
      function ue(e, t) {
        if (!t.length) return e;
        if (!e.length) return t;
        let n = e.slice(),
          r = 0;
        for (let s of t) {
          while (r < n.length && n[r].to < s.to) r++;
          if (r < n.length && n[r].from < s.from) {
            let e = n[r];
            if (e instanceof V) n[r] = new V(e.type, e.from, e.to, ue(e.children, [s]));
          } else {
            n.splice(r++, 0, s);
          }
        }
        return n;
      }
      const ce = [f.CodeBlock, f.ListItem, f.OrderedList, f.BulletList];
      class de {
        constructor(e, t) {
          this.fragments = e;
          this.input = t;
          this.i = 0;
          this.fragment = null;
          this.fragmentEnd = -1;
          this.cursor = null;
          if (e.length) this.fragment = e[this.i++];
        }
        nextFragment() {
          this.fragment = this.i < this.fragments.length ? this.fragments[this.i++] : null;
          this.cursor = null;
          this.fragmentEnd = -1;
        }
        moveTo(e, t) {
          while (this.fragment && this.fragment.to <= e) this.nextFragment();
          if (!this.fragment || this.fragment.from > (e ? e - 1 : 0)) return false;
          if (this.fragmentEnd < 0) {
            let e = this.fragment.to;
            while (e > 0 && this.input.read(e - 1, e) != "\n") e--;
            this.fragmentEnd = e ? e - 1 : 0;
          }
          let n = this.cursor;
          if (!n) {
            n = this.cursor = this.fragment.tree.cursor();
            n.firstChild();
          }
          let r = e + this.fragment.offset;
          while (n.to <= r) if (!n.parent()) return false;
          for (;;) {
            if (n.from >= r) return this.fragment.from <= t;
            if (!n.childAfter(r)) return false;
          }
        }
        matches(e) {
          let t = this.cursor.tree;
          return t && t.prop(o.NodeProp.contextHash) == e;
        }
        takeNodes(e) {
          let t = this.cursor,
            n = this.fragment.offset,
            r = this.fragmentEnd - (this.fragment.openEnd ? 1 : 0);
          let s = e.absoluteLineStart,
            i = s,
            l = e.block.children.length;
          let a = i,
            h = l;
          for (;;) {
            if (t.to - n > r) {
              if (t.type.isAnonymous && t.firstChild()) continue;
              break;
            }
            let s = pe(t.from - n, e.ranges);
            if (t.to - n <= e.ranges[e.rangeI].to) {
              e.addNode(t.tree, s);
            } else {
              let n = new o.Tree(e.parser.nodeSet.types[f.Paragraph], [], [], 0, e.block.hashProp);
              e.reusePlaceholders.set(n, t.tree);
              e.addNode(n, s);
            }
            if (t.type.is("Block")) {
              if (ce.indexOf(t.type.id) < 0) {
                i = t.to - n;
                l = e.block.children.length;
              } else {
                i = a;
                l = h;
                a = t.to - n;
                h = e.block.children.length;
              }
            }
            if (!t.nextSibling()) break;
          }
          while (e.block.children.length > l) {
            e.block.children.pop();
            e.block.positions.pop();
          }
          return i - s;
        }
      }
      function pe(e, t) {
        let n = e;
        for (let r = 1; r < t.length; r++) {
          let s = t[r - 1].to,
            i = t[r].from;
          if (s < e) n -= i - s;
        }
        return n;
      }
      const ge = (0, a.styleTags)({
        "Blockquote/...": a.tags.quote,
        HorizontalRule: a.tags.contentSeparator,
        "ATXHeading1/... SetextHeading1/...": a.tags.heading1,
        "ATXHeading2/... SetextHeading2/...": a.tags.heading2,
        "ATXHeading3/...": a.tags.heading3,
        "ATXHeading4/...": a.tags.heading4,
        "ATXHeading5/...": a.tags.heading5,
        "ATXHeading6/...": a.tags.heading6,
        "Comment CommentBlock": a.tags.comment,
        Escape: a.tags.escape,
        Entity: a.tags.character,
        "Emphasis/...": a.tags.emphasis,
        "StrongEmphasis/...": a.tags.strong,
        "Link/... Image/...": a.tags.link,
        "OrderedList/... BulletList/...": a.tags.list,
        "BlockQuote/...": a.tags.quote,
        "InlineCode CodeText": a.tags.monospace,
        "URL Autolink": a.tags.url,
        "HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark": a.tags.processingInstruction,
        "CodeInfo LinkLabel": a.tags.labelName,
        LinkTitle: a.tags.string,
        Paragraph: a.tags.content,
      });
      const me = new _(
        new o.NodeSet(Q).extend(ge),
        Object.keys(v).map((e) => v[e]),
        Object.keys(v).map((e) => X[e]),
        Object.keys(v),
        D,
        p,
        Object.keys(ie).map((e) => ie[e]),
        Object.keys(ie),
        []
      );
      function ke(e, t, n) {
        let r = [];
        for (let s = e.firstChild, i = t; ; s = s.nextSibling) {
          let e = s ? s.from : n;
          if (e > i) r.push({ from: i, to: e });
          if (!s) break;
          i = s.to;
        }
        return r;
      }
      function xe(e) {
        let { codeParser: t, htmlParser: n } = e;
        let r = (0, o.parseMixed)((e, r) => {
          let s = e.type.id;
          if (t && (s == f.CodeBlock || s == f.FencedCode)) {
            let n = "";
            if (s == f.FencedCode) {
              let t = e.node.getChild(f.CodeInfo);
              if (t) n = r.read(t.from, t.to);
            }
            let i = t(n);
            if (i) return { parser: i, overlay: (e) => e.type.id == f.CodeText };
          } else if (n && (s == f.HTMLBlock || s == f.HTMLTag)) {
            return { parser: n, overlay: ke(e.node, e.from, e.to) };
          }
          return null;
        });
        return { wrap: r };
      }
      const be = { resolve: "Strikethrough", mark: "StrikethroughMark" };
      const Le = {
        defineNodes: [
          { name: "Strikethrough", style: { "Strikethrough/...": a.tags.strikethrough } },
          { name: "StrikethroughMark", style: a.tags.processingInstruction },
        ],
        parseInline: [
          {
            name: "Strikethrough",
            parse(e, t, n) {
              if (t != 126 || e.char(n + 1) != 126 || e.char(n + 2) == 126) return -1;
              let r = e.slice(n - 1, n),
                s = e.slice(n + 2, n + 3);
              let i = /\s|^$/.test(r),
                l = /\s|^$/.test(s);
              let o = se.test(r),
                a = se.test(s);
              return e.addDelimiter(be, n, n + 2, !l && (!a || i || o), !i && (!o || l || a));
            },
            after: "Emphasis",
          },
        ],
      };
      function we(e, t, n = 0, r, s = 0) {
        let i = 0,
          l = true,
          o = -1,
          a = -1,
          h = false;
        let f = () => {
          r.push(e.elt("TableCell", s + o, s + a, e.parser.parseInline(t.slice(o, a), s + o)));
        };
        for (let u = n; u < t.length; u++) {
          let n = t.charCodeAt(u);
          if (n == 124 && !h) {
            if (!l || o > -1) i++;
            l = false;
            if (r) {
              if (o > -1) f();
              r.push(e.elt("TableDelimiter", u + s, u + s + 1));
            }
            o = a = -1;
          } else if (h || (n != 32 && n != 9)) {
            if (o < 0) o = u;
            a = u + 1;
          }
          h = !h && n == 92;
        }
        if (o > -1) {
          i++;
          if (r) f();
        }
        return i;
      }
      function Se(e, t) {
        for (let n = t; n < e.length; n++) {
          let t = e.charCodeAt(n);
          if (t == 124) return true;
          if (t == 92) n++;
        }
        return false;
      }
      const Ce = /^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/;
      class ye {
        constructor() {
          this.rows = null;
        }
        nextLine(e, t, n) {
          if (this.rows == null) {
            this.rows = false;
            let r;
            if ((t.next == 45 || t.next == 58 || t.next == 124) && Ce.test((r = t.text.slice(t.pos)))) {
              let s = [],
                i = we(e, n.content, 0, s, n.start);
              if (i == we(e, r, t.pos))
                this.rows = [
                  e.elt("TableHeader", n.start, n.start + n.content.length, s),
                  e.elt("TableDelimiter", e.lineStart + t.pos, e.lineStart + t.text.length),
                ];
            }
          } else if (this.rows) {
            let n = [];
            we(e, t.text, t.pos, n, e.lineStart);
            this.rows.push(e.elt("TableRow", e.lineStart + t.pos, e.lineStart + t.text.length, n));
          }
          return false;
        }
        finish(e, t) {
          if (!this.rows) return false;
          e.addLeafElement(t, e.elt("Table", t.start, t.start + t.content.length, this.rows));
          return true;
        }
      }
      const Te = {
        defineNodes: [
          { name: "Table", block: true },
          { name: "TableHeader", style: { "TableHeader/...": a.tags.heading } },
          "TableRow",
          { name: "TableCell", style: a.tags.content },
          { name: "TableDelimiter", style: a.tags.processingInstruction },
        ],
        parseBlock: [
          {
            name: "Table",
            leaf(e, t) {
              return Se(t.content, 0) ? new ye() : null;
            },
            endLeaf(e, t, n) {
              if (n.parsers.some((e) => e instanceof ye) || !Se(t.text, t.basePos)) return false;
              let r = e.scanLine(e.absoluteLineEnd + 1).text;
              return Ce.test(r) && we(e, t.text, t.basePos) == we(e, r, t.basePos);
            },
            before: "SetextHeading",
          },
        ],
      };
      class Ae {
        nextLine() {
          return false;
        }
        finish(e, t) {
          e.addLeafElement(
            t,
            e.elt("Task", t.start, t.start + t.content.length, [
              e.elt("TaskMarker", t.start, t.start + 3),
              ...e.parser.parseInline(t.content.slice(3), t.start + 3),
            ])
          );
          return true;
        }
      }
      const Ie = {
        defineNodes: [
          { name: "Task", block: true, style: a.tags.list },
          { name: "TaskMarker", style: a.tags.atom },
        ],
        parseBlock: [
          {
            name: "TaskList",
            leaf(e, t) {
              return /^\[[ xX]\][ \t]/.test(t.content) && e.parentType().name == "ListItem" ? new Ae() : null;
            },
            after: "SetextHeading",
          },
        ],
      };
      const Be = /(www\.)|(https?:\/\/)|([\w.+-]+@)|(mailto:|xmpp:)/gy;
      const Ee = /[\w-]+(\.[\w-]+)+(\/[^\s<]*)?/gy;
      const Me = /[\w-]+\.[\w-]+($|\/)/;
      const Pe = /[\w.+-]+@[\w-]+(\.[\w.-]+)+/gy;
      const He = /\/[a-zA-Z\d@.]+/gy;
      function ve(e, t, n, r) {
        let s = 0;
        for (let i = t; i < n; i++) if (e[i] == r) s++;
        return s;
      }
      function Ne(e, t) {
        Ee.lastIndex = t;
        let n = Ee.exec(e);
        if (!n || Me.exec(n[0])[0].indexOf("_") > -1) return -1;
        let r = t + n[0].length;
        for (;;) {
          let n = e[r - 1],
            s;
          if (/[?!.,:*_~]/.test(n) || (n == ")" && ve(e, t, r, ")") > ve(e, t, r, "("))) r--;
          else if (n == ";" && (s = /&(?:#\d+|#x[a-f\d]+|\w+);$/.exec(e.slice(t, r)))) r = t + s.index;
          else break;
        }
        return r;
      }
      function Oe(e, t) {
        Pe.lastIndex = t;
        let n = Pe.exec(e);
        if (!n) return -1;
        let r = n[0][n[0].length - 1];
        return r == "_" || r == "-" ? -1 : t + n[0].length - (r == "." ? 1 : 0);
      }
      const Re = {
        parseInline: [
          {
            name: "Autolink",
            parse(e, t, n) {
              let r = n - e.offset;
              Be.lastIndex = r;
              let s = Be.exec(e.text),
                i = -1;
              if (!s) return -1;
              if (s[1] || s[2]) {
                i = Ne(e.text, r + s[0].length);
              } else if (s[3]) {
                i = Oe(e.text, r);
              } else {
                i = Oe(e.text, r + s[0].length);
                if (i > -1 && s[0] == "xmpp:") {
                  He.lastIndex = i;
                  s = He.exec(e.text);
                  if (s) i = s.index + s[0].length;
                }
              }
              if (i < 0) return -1;
              e.addElement(e.elt("URL", n, i + e.offset));
              return i + e.offset;
            },
          },
        ],
      };
      const Xe = [Te, Ie, Le, Re];
      function De(e, t, n) {
        return (r, s, i) => {
          if (s != e || r.char(i + 1) == e) return -1;
          let l = [r.elt(n, i, i + 1)];
          for (let o = i + 1; o < r.end; o++) {
            let s = r.char(o);
            if (s == e) return r.addElement(r.elt(t, i, o + 1, l.concat(r.elt(n, o, o + 1))));
            if (s == 92) l.push(r.elt("Escape", o, o++ + 2));
            if (g(s)) break;
          }
          return -1;
        };
      }
      const ze = {
        defineNodes: [
          { name: "Superscript", style: a.tags.special(a.tags.content) },
          { name: "SuperscriptMark", style: a.tags.processingInstruction },
        ],
        parseInline: [{ name: "Superscript", parse: De(94, "Superscript", "SuperscriptMark") }],
      };
      const $e = {
        defineNodes: [
          { name: "Subscript", style: a.tags.special(a.tags.content) },
          { name: "SubscriptMark", style: a.tags.processingInstruction },
        ],
        parseInline: [{ name: "Subscript", parse: De(126, "Subscript", "SubscriptMark") }],
      };
      const Fe = {
        defineNodes: [{ name: "Emoji", style: a.tags.character }],
        parseInline: [
          {
            name: "Emoji",
            parse(e, t, n) {
              let r;
              if (t != 58 || !(r = /^[a-zA-Z_0-9]+:/.exec(e.slice(n + 1, e.end)))) return -1;
              return e.addElement(e.elt("Emoji", n, n + 1 + r[0].length));
            },
          },
        ],
      };
      var _e = n(60049);
      const je = (0, i.defineLanguageFacet)({ commentTokens: { block: { open: "\x3c!--", close: "--\x3e" } } });
      const qe = new o.NodeProp();
      const Ue = me.configure({
        props: [
          i.foldNodeProp.add((e) =>
            !e.is("Block") || e.is("Document") || Qe(e) != null ? undefined : (e, t) => ({ from: t.doc.lineAt(e.from).to, to: e.to })
          ),
          qe.add(Qe),
          i.indentNodeProp.add({ Document: () => null }),
          i.languageDataProp.add({ Document: je }),
        ],
      });
      function Qe(e) {
        let t = /^(?:ATX|Setext)Heading(\d)$/.exec(e.name);
        return t ? +t[1] : undefined;
      }
      function Ze(e, t) {
        let n = e;
        for (;;) {
          let e = n.nextSibling,
            r;
          if (!e || ((r = Qe(e.type)) != null && r <= t)) break;
          n = e;
        }
        return n.to;
      }
      const Ke = i.foldService.of((e, t, n) => {
        for (let r = (0, i.syntaxTree)(e).resolveInner(n, -1); r; r = r.parent) {
          if (r.from < t) break;
          let e = r.type.prop(qe);
          if (e == null) continue;
          let s = Ze(r, e);
          if (s > n) return { from: n, to: s };
        }
        return null;
      });
      function Ve(e) {
        return new i.Language(je, e, [Ke], "markdown");
      }
      const Ge = Ve(Ue);
      const Je = Ue.configure([Xe, $e, ze, Fe, { props: [i.foldNodeProp.add({ Table: (e, t) => ({ from: t.doc.lineAt(e.from).to, to: e.to }) })] }]);
      const We = Ve(Je);
      function Ye(e, t) {
        return (n) => {
          if (n && e) {
            let t = null;
            n = /\S*/.exec(n)[0];
            if (typeof e == "function") t = e(n);
            else t = i.LanguageDescription.matchLanguageName(e, n, true);
            if (t instanceof i.LanguageDescription) return t.support ? t.support.language.parser : i.ParseContext.getSkippingParser(t.load());
            else if (t) return t.parser;
          }
          return t ? t.parser : null;
        };
      }
      class et {
        constructor(e, t, n, r, s, i, l) {
          this.node = e;
          this.from = t;
          this.to = n;
          this.spaceBefore = r;
          this.spaceAfter = s;
          this.type = i;
          this.item = l;
        }
        blank(e, t = true) {
          let n = this.spaceBefore + (this.node.name == "Blockquote" ? ">" : "");
          if (e != null) {
            while (n.length < e) n += " ";
            return n;
          } else {
            for (let e = this.to - this.from - n.length - this.spaceAfter.length; e > 0; e--) n += " ";
            return n + (t ? this.spaceAfter : "");
          }
        }
        marker(e, t) {
          let n = this.node.name == "OrderedList" ? String(+nt(this.item, e)[2] + t) : "";
          return this.spaceBefore + n + this.type + this.spaceAfter;
        }
      }
      function tt(e, t) {
        let n = [];
        for (let s = e; s && s.name != "Document"; s = s.parent) {
          if (s.name == "ListItem" || s.name == "Blockquote" || s.name == "FencedCode") n.push(s);
        }
        let r = [];
        for (let s = n.length - 1; s >= 0; s--) {
          let e = n[s],
            i;
          let l = t.lineAt(e.from),
            o = e.from - l.from;
          if (e.name == "FencedCode") {
            r.push(new et(e, o, o, "", "", "", null));
          } else if (e.name == "Blockquote" && (i = /^ *>( ?)/.exec(l.text.slice(o)))) {
            r.push(new et(e, o, o + i[0].length, "", i[1], ">", null));
          } else if (e.name == "ListItem" && e.parent.name == "OrderedList" && (i = /^( *)\d+([.)])( *)/.exec(l.text.slice(o)))) {
            let t = i[3],
              n = i[0].length;
            if (t.length >= 4) {
              t = t.slice(0, t.length - 4);
              n -= 4;
            }
            r.push(new et(e.parent, o, o + n, i[1], t, i[2], e));
          } else if (e.name == "ListItem" && e.parent.name == "BulletList" && (i = /^( *)([-+*])( {1,4}\[[ xX]\])?( +)/.exec(l.text.slice(o)))) {
            let t = i[4],
              n = i[0].length;
            if (t.length > 4) {
              t = t.slice(0, t.length - 4);
              n -= 4;
            }
            let s = i[2];
            if (i[3]) s += i[3].replace(/[xX]/, " ");
            r.push(new et(e.parent, o, o + n, i[1], t, s, e));
          }
        }
        return r;
      }
      function nt(e, t) {
        return /^(\s*)(\d+)(?=[.)])/.exec(t.sliceString(e.from, e.from + 10));
      }
      function rt(e, t, n, r = 0) {
        for (let s = -1, i = e; ; ) {
          if (i.name == "ListItem") {
            let e = nt(i, t);
            let l = +e[2];
            if (s >= 0) {
              if (l != s + 1) return;
              n.push({ from: i.from + e[1].length, to: i.from + e[0].length, insert: String(s + 2 + r) });
            }
            s = l;
          }
          let e = i.nextSibling;
          if (!e) break;
          i = e;
        }
      }
      function st(e, t) {
        let n = /^[ \t]*/.exec(e)[0].length;
        if (!n || t.facet(i.indentUnit) != "\t") return e;
        let s = (0, r.countColumn)(e, 4, n);
        let l = "";
        for (let r = s; r > 0; ) {
          if (r >= 4) {
            l += "\t";
            r -= 4;
          } else {
            l += " ";
            r--;
          }
        }
        return l + e.slice(n);
      }
      const it = ({ state: e, dispatch: t }) => {
        let n = (0, i.syntaxTree)(e),
          { doc: s } = e;
        let l = null,
          o = e.changeByRange((t) => {
            if (!t.empty || !We.isActiveAt(e, t.from)) return (l = { range: t });
            let i = t.from,
              o = s.lineAt(i);
            let a = tt(n.resolveInner(i, -1), s);
            while (a.length && a[a.length - 1].from > i - o.from) a.pop();
            if (!a.length) return (l = { range: t });
            let h = a[a.length - 1];
            if (h.to - h.spaceAfter.length > i - o.from) return (l = { range: t });
            let f = i >= h.to - h.spaceAfter.length && !/\S/.test(o.text.slice(h.to));
            if (h.item && f) {
              let t = h.node.firstChild,
                n = h.node.getChild("ListItem", "ListItem");
              if (t.to >= i || (n && n.to < i) || (o.from > 0 && !/[^\s>]/.test(s.lineAt(o.from - 1).text))) {
                let e = a.length > 1 ? a[a.length - 2] : null;
                let t,
                  n = "";
                if (e && e.item) {
                  t = o.from + e.from;
                  n = e.marker(s, 1);
                } else {
                  t = o.from + (e ? e.to : 0);
                }
                let l = [{ from: t, to: i, insert: n }];
                if (h.node.name == "OrderedList") rt(h.item, s, l, -2);
                if (e && e.node.name == "OrderedList") rt(e.item, s, l);
                return { range: r.EditorSelection.cursor(t + n.length), changes: l };
              } else {
                let t = at(a, e, o);
                return { range: r.EditorSelection.cursor(i + t.length + 1), changes: { from: o.from, insert: t + e.lineBreak } };
              }
            }
            if (h.node.name == "Blockquote" && f && o.from) {
              let n = s.lineAt(o.from - 1),
                r = />\s*$/.exec(n.text);
              if (r && r.index == h.from) {
                let s = e.changes([
                  { from: n.from + r.index, to: n.to },
                  { from: o.from + h.from, to: o.to },
                ]);
                return { range: t.map(s), changes: s };
              }
            }
            let u = [];
            if (h.node.name == "OrderedList") rt(h.item, s, u);
            let c = h.item && h.item.from < o.from;
            let d = "";
            if (!c || /^[\s\d.)\-+*>]*/.exec(o.text)[0].length >= h.to) {
              for (let e = 0, t = a.length - 1; e <= t; e++) {
                d += e == t && !c ? a[e].marker(s, 1) : a[e].blank(e < t ? (0, r.countColumn)(o.text, 4, a[e + 1].from) - d.length : null);
              }
            }
            let p = i;
            while (p > o.from && /\s/.test(o.text.charAt(p - o.from - 1))) p--;
            d = st(d, e);
            if (ot(h.node, e.doc)) d = at(a, e, o) + e.lineBreak + d;
            u.push({ from: p, to: i, insert: e.lineBreak + d });
            return { range: r.EditorSelection.cursor(p + d.length + 1), changes: u };
          });
        if (l) return false;
        t(e.update(o, { scrollIntoView: true, userEvent: "input" }));
        return true;
      };
      function lt(e) {
        return e.name == "QuoteMark" || e.name == "ListMark";
      }
      function ot(e, t) {
        if (e.name != "OrderedList" && e.name != "BulletList") return false;
        let n = e.firstChild,
          r = e.getChild("ListItem", "ListItem");
        if (!r) return false;
        let s = t.lineAt(n.to),
          i = t.lineAt(r.from);
        let l = /^[\s>]*$/.test(s.text);
        return s.number + (l ? 0 : 1) < i.number;
      }
      function at(e, t, n) {
        let s = "";
        for (let i = 0, l = e.length - 2; i <= l; i++) {
          s += e[i].blank(i < l ? (0, r.countColumn)(n.text, 4, e[i + 1].from) - s.length : null, i < l);
        }
        return st(s, t);
      }
      function ht(e, t) {
        let n = e.resolveInner(t, -1),
          r = t;
        if (lt(n)) {
          r = n.from;
          n = n.parent;
        }
        for (let s; (s = n.childBefore(r)); ) {
          if (lt(s)) {
            r = s.from;
          } else if (s.name == "OrderedList" || s.name == "BulletList") {
            n = s.lastChild;
            r = n.to;
          } else {
            break;
          }
        }
        return n;
      }
      const ft = ({ state: e, dispatch: t }) => {
        let n = (0, i.syntaxTree)(e);
        let s = null,
          l = e.changeByRange((t) => {
            let i = t.from,
              { doc: l } = e;
            if (t.empty && We.isActiveAt(e, t.from)) {
              let t = l.lineAt(i);
              let s = tt(ht(n, i), l);
              if (s.length) {
                let n = s[s.length - 1];
                let l = n.to - n.spaceAfter.length + (n.spaceAfter ? 1 : 0);
                if (i - t.from > l && !/\S/.test(t.text.slice(l, i - t.from)))
                  return { range: r.EditorSelection.cursor(t.from + l), changes: { from: t.from + l, to: i } };
                if (i - t.from == l && (!n.item || t.from <= n.item.from || !/\S/.test(t.text.slice(0, n.to)))) {
                  let s = t.from + n.from;
                  if (n.item && n.node.from < n.item.from && /\S/.test(t.text.slice(n.from, n.to))) {
                    let i = n.blank((0, r.countColumn)(t.text, 4, n.to) - (0, r.countColumn)(t.text, 4, n.from));
                    if (s == t.from) i = st(i, e);
                    return { range: r.EditorSelection.cursor(s + i.length), changes: { from: s, to: t.from + n.to, insert: i } };
                  }
                  if (s < i) return { range: r.EditorSelection.cursor(s), changes: { from: s, to: i } };
                }
              }
            }
            return (s = { range: t });
          });
        if (s) return false;
        t(e.update(l, { scrollIntoView: true, userEvent: "delete" }));
        return true;
      };
      const ut = [
        { key: "Enter", run: it },
        { key: "Backspace", run: ft },
      ];
      const ct = (0, _e.html)({ matchClosingTags: false });
      function dt(e = {}) {
        let { codeLanguages: t, defaultCodeLanguage: n, addKeymap: l = true, base: { parser: o } = Ge, completeHTMLTags: a = true } = e;
        if (!(o instanceof _)) throw new RangeError("Base parser provided to `markdown` should be a Markdown parser");
        let h = e.extensions ? [e.extensions] : [];
        let f = [ct.support],
          u;
        if (n instanceof i.LanguageSupport) {
          f.push(n.support);
          u = n.language;
        } else if (n) {
          u = n;
        }
        let c = t || u ? Ye(t, u) : undefined;
        h.push(xe({ codeParser: c, htmlParser: ct.language.parser }));
        if (l) f.push(r.Prec.high(s.keymap.of(ut)));
        let d = Ve(o.configure(h));
        if (a) f.push(d.data.of({ autocomplete: pt }));
        return new i.LanguageSupport(d, f);
      }
      function pt(e) {
        let { state: t, pos: n } = e,
          r = /<[:\-\.\w\u00b7-\uffff]*$/.exec(t.sliceDoc(n - 25, n));
        if (!r) return null;
        let s = (0, i.syntaxTree)(t).resolveInner(n, -1);
        while (s && !s.type.isTop) {
          if (
            s.name == "CodeBlock" ||
            s.name == "FencedCode" ||
            s.name == "ProcessingInstructionBlock" ||
            s.name == "CommentBlock" ||
            s.name == "Link" ||
            s.name == "Image"
          )
            return null;
          s = s.parent;
        }
        return { from: n - r[0].length, to: n, options: mt(), validFor: /^<[:\-\.\w\u00b7-\uffff]*$/ };
      }
      let gt = null;
      function mt() {
        if (gt) return gt;
        let e = (0, _e.htmlCompletionSource)(new l.TK(r.EditorState.create({ extensions: ct }), 0, true));
        return (gt = e ? e.options : []);
      }
    },
  },
]);
