"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [8012],
  {
    28012: (e, t, n) => {
      n.r(t);
      n.d(t, { smalltalk: () => h });
      var a = /[+\-\/\\*~<>=@%|&?!.,:;^]/;
      var i = /true|false|nil|self|super|thisContext/;
      var r = function (e, t) {
        this.next = e;
        this.parent = t;
      };
      var s = function (e, t, n) {
        this.name = e;
        this.context = t;
        this.eos = n;
      };
      var l = function () {
        this.context = new r(o, null);
        this.expectVariable = true;
        this.indentation = 0;
        this.userIndentationDelta = 0;
      };
      l.prototype.userIndent = function (e, t) {
        this.userIndentationDelta = e > 0 ? e / t - this.indentation : 0;
      };
      var o = function (e, t, n) {
        var l = new s(null, t, false);
        var o = e.next();
        if (o === '"') {
          l = u(e, new r(u, t));
        } else if (o === "'") {
          l = c(e, new r(c, t));
        } else if (o === "#") {
          if (e.peek() === "'") {
            e.next();
            l = f(e, new r(f, t));
          } else {
            if (e.eatWhile(/[^\s.{}\[\]()]/)) l.name = "string.special";
            else l.name = "meta";
          }
        } else if (o === "$") {
          if (e.next() === "<") {
            e.eatWhile(/[^\s>]/);
            e.next();
          }
          l.name = "string.special";
        } else if (o === "|" && n.expectVariable) {
          l.context = new r(p, t);
        } else if (/[\[\]{}()]/.test(o)) {
          l.name = "bracket";
          l.eos = /[\[{(]/.test(o);
          if (o === "[") {
            n.indentation++;
          } else if (o === "]") {
            n.indentation = Math.max(0, n.indentation - 1);
          }
        } else if (a.test(o)) {
          e.eatWhile(a);
          l.name = "operator";
          l.eos = o !== ";";
        } else if (/\d/.test(o)) {
          e.eatWhile(/[\w\d]/);
          l.name = "number";
        } else if (/[\w_]/.test(o)) {
          e.eatWhile(/[\w\d_]/);
          l.name = n.expectVariable ? (i.test(e.current()) ? "keyword" : "variable") : null;
        } else {
          l.eos = n.expectVariable;
        }
        return l;
      };
      var u = function (e, t) {
        e.eatWhile(/[^"]/);
        return new s("comment", e.eat('"') ? t.parent : t, true);
      };
      var c = function (e, t) {
        e.eatWhile(/[^']/);
        return new s("string", e.eat("'") ? t.parent : t, false);
      };
      var f = function (e, t) {
        e.eatWhile(/[^']/);
        return new s("string.special", e.eat("'") ? t.parent : t, false);
      };
      var p = function (e, t) {
        var n = new s(null, t, false);
        var a = e.next();
        if (a === "|") {
          n.context = t.parent;
          n.eos = true;
        } else {
          e.eatWhile(/[^|]/);
          n.name = "variable";
        }
        return n;
      };
      const h = {
        name: "smalltalk",
        startState: function () {
          return new l();
        },
        token: function (e, t) {
          t.userIndent(e.indentation(), e.indentUnit);
          if (e.eatSpace()) {
            return null;
          }
          var n = t.context.next(e, t.context, t);
          t.context = n.context;
          t.expectVariable = n.eos;
          return n.name;
        },
        blankLine: function (e, t) {
          e.userIndent(0, t);
        },
        indent: function (e, t, n) {
          var a = e.context.next === o && t && t.charAt(0) === "]" ? -1 : e.userIndentationDelta;
          return (e.indentation + a) * n.unit;
        },
        languageData: { indentOnInput: /^\s*\]$/ },
      };
    },
  },
]);
