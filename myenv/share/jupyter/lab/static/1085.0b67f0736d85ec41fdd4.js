"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1085],
  {
    41085: (e, t, n) => {
      n.r(t);
      n.d(t, { groovy: () => v });
      function r(e) {
        var t = {},
          n = e.split(" ");
        for (var r = 0; r < n.length; ++r) t[n[r]] = true;
        return t;
      }
      var i = r(
        "abstract as assert boolean break byte case catch char class const continue def default " +
          "do double else enum extends final finally float for goto if implements import in " +
          "instanceof int interface long native new package private protected public return " +
          "short static strictfp super switch synchronized threadsafe throw throws trait transient " +
          "try void volatile while"
      );
      var a = r("catch class def do else enum finally for if interface switch trait try while");
      var l = r("return break continue");
      var o = r("null true false this");
      var s;
      function u(e, t) {
        var n = e.next();
        if (n == '"' || n == "'") {
          return f(n, e, t);
        }
        if (/[\[\]{}\(\),;\:\.]/.test(n)) {
          s = n;
          return null;
        }
        if (/\d/.test(n)) {
          e.eatWhile(/[\w\.]/);
          if (e.eat(/eE/)) {
            e.eat(/\+\-/);
            e.eatWhile(/\d/);
          }
          return "number";
        }
        if (n == "/") {
          if (e.eat("*")) {
            t.tokenize.push(h);
            return h(e, t);
          }
          if (e.eat("/")) {
            e.skipToEnd();
            return "comment";
          }
          if (k(t.lastToken, false)) {
            return f(n, e, t);
          }
        }
        if (n == "-" && e.eat(">")) {
          s = "->";
          return null;
        }
        if (/[+\-*&%=<>!?|\/~]/.test(n)) {
          e.eatWhile(/[+\-*&%=<>|~]/);
          return "operator";
        }
        e.eatWhile(/[\w\$_]/);
        if (n == "@") {
          e.eatWhile(/[\w\$_\.]/);
          return "meta";
        }
        if (t.lastToken == ".") return "property";
        if (e.eat(":")) {
          s = "proplabel";
          return "property";
        }
        var r = e.current();
        if (o.propertyIsEnumerable(r)) {
          return "atom";
        }
        if (i.propertyIsEnumerable(r)) {
          if (a.propertyIsEnumerable(r)) s = "newstatement";
          else if (l.propertyIsEnumerable(r)) s = "standalone";
          return "keyword";
        }
        return "variable";
      }
      u.isBase = true;
      function f(e, t, n) {
        var r = false;
        if (e != "/" && t.eat(e)) {
          if (t.eat(e)) r = true;
          else return "string";
        }
        function i(t, n) {
          var i = false,
            a,
            l = !r;
          while ((a = t.next()) != null) {
            if (a == e && !i) {
              if (!r) {
                break;
              }
              if (t.match(e + e)) {
                l = true;
                break;
              }
            }
            if (e == '"' && a == "$" && !i) {
              if (t.eat("{")) {
                n.tokenize.push(p());
                return "string";
              } else if (t.match(/^\w/, false)) {
                n.tokenize.push(c);
                return "string";
              }
            }
            i = !i && a == "\\";
          }
          if (l) n.tokenize.pop();
          return "string";
        }
        n.tokenize.push(i);
        return i(t, n);
      }
      function p() {
        var e = 1;
        function t(t, n) {
          if (t.peek() == "}") {
            e--;
            if (e == 0) {
              n.tokenize.pop();
              return n.tokenize[n.tokenize.length - 1](t, n);
            }
          } else if (t.peek() == "{") {
            e++;
          }
          return u(t, n);
        }
        t.isBase = true;
        return t;
      }
      function c(e, t) {
        var n = e.match(/^(\.|[\w\$_]+)/);
        if (!n) {
          t.tokenize.pop();
          return t.tokenize[t.tokenize.length - 1](e, t);
        }
        return n[0] == "." ? null : "variable";
      }
      function h(e, t) {
        var n = false,
          r;
        while ((r = e.next())) {
          if (r == "/" && n) {
            t.tokenize.pop();
            break;
          }
          n = r == "*";
        }
        return "comment";
      }
      function k(e, t) {
        return (
          !e ||
          e == "operator" ||
          e == "->" ||
          /[\.\[\{\(,;:]/.test(e) ||
          e == "newstatement" ||
          e == "keyword" ||
          e == "proplabel" ||
          (e == "standalone" && !t)
        );
      }
      function m(e, t, n, r, i) {
        this.indented = e;
        this.column = t;
        this.type = n;
        this.align = r;
        this.prev = i;
      }
      function d(e, t, n) {
        return (e.context = new m(e.indented, t, n, null, e.context));
      }
      function y(e) {
        var t = e.context.type;
        if (t == ")" || t == "]" || t == "}") e.indented = e.context.indented;
        return (e.context = e.context.prev);
      }
      const v = {
        name: "groovy",
        startState: function (e) {
          return { tokenize: [u], context: new m(-e, 0, "top", false), indented: 0, startOfLine: true, lastToken: null };
        },
        token: function (e, t) {
          var n = t.context;
          if (e.sol()) {
            if (n.align == null) n.align = false;
            t.indented = e.indentation();
            t.startOfLine = true;
            if (n.type == "statement" && !k(t.lastToken, true)) {
              y(t);
              n = t.context;
            }
          }
          if (e.eatSpace()) return null;
          s = null;
          var r = t.tokenize[t.tokenize.length - 1](e, t);
          if (r == "comment") return r;
          if (n.align == null) n.align = true;
          if ((s == ";" || s == ":") && n.type == "statement") y(t);
          else if (s == "->" && n.type == "statement" && n.prev.type == "}") {
            y(t);
            t.context.align = false;
          } else if (s == "{") d(t, e.column(), "}");
          else if (s == "[") d(t, e.column(), "]");
          else if (s == "(") d(t, e.column(), ")");
          else if (s == "}") {
            while (n.type == "statement") n = y(t);
            if (n.type == "}") n = y(t);
            while (n.type == "statement") n = y(t);
          } else if (s == n.type) y(t);
          else if (n.type == "}" || n.type == "top" || (n.type == "statement" && s == "newstatement")) d(t, e.column(), "statement");
          t.startOfLine = false;
          t.lastToken = s || r;
          return r;
        },
        indent: function (e, t, n) {
          if (!e.tokenize[e.tokenize.length - 1].isBase) return null;
          var r = t && t.charAt(0),
            i = e.context;
          if (i.type == "statement" && !k(e.lastToken, true)) i = i.prev;
          var a = r == i.type;
          if (i.type == "statement") return i.indented + (r == "{" ? 0 : n.unit);
          else if (i.align) return i.column + (a ? 0 : 1);
          else return i.indented + (a ? 0 : n.unit);
        },
        languageData: {
          indentOnInput: /^\s*[{}]$/,
          commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
          closeBrackets: { brackets: ["(", "[", "{", "'", '"', "'''", '"""'] },
        },
      };
    },
  },
]);
