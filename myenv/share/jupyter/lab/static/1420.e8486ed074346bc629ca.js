"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1420],
  {
    61420: (e, t, n) => {
      n.r(t);
      n.d(t, { commonLisp: () => p });
      var r =
        /^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/;
      var l = /^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/;
      var i = /^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/;
      var o = /[^\s'`,@()\[\]";]/;
      var a;
      function s(e) {
        var t;
        while ((t = e.next())) {
          if (t == "\\") e.next();
          else if (!o.test(t)) {
            e.backUp(1);
            break;
          }
        }
        return e.current();
      }
      function c(e, t) {
        if (e.eatSpace()) {
          a = "ws";
          return null;
        }
        if (e.match(i)) return "number";
        var n = e.next();
        if (n == "\\") n = e.next();
        if (n == '"') return (t.tokenize = u)(e, t);
        else if (n == "(") {
          a = "open";
          return "bracket";
        } else if (n == ")" || n == "]") {
          a = "close";
          return "bracket";
        } else if (n == ";") {
          e.skipToEnd();
          a = "ws";
          return "comment";
        } else if (/['`,@]/.test(n)) return null;
        else if (n == "|") {
          if (e.skipTo("|")) {
            e.next();
            return "variableName";
          } else {
            e.skipToEnd();
            return "error";
          }
        } else if (n == "#") {
          var n = e.next();
          if (n == "(") {
            a = "open";
            return "bracket";
          } else if (/[+\-=\.']/.test(n)) return null;
          else if (/\d/.test(n) && e.match(/^\d*#/)) return null;
          else if (n == "|") return (t.tokenize = f)(e, t);
          else if (n == ":") {
            s(e);
            return "meta";
          } else if (n == "\\") {
            e.next();
            s(e);
            return "string.special";
          } else return "error";
        } else {
          var o = s(e);
          if (o == ".") return null;
          a = "symbol";
          if (o == "nil" || o == "t" || o.charAt(0) == ":") return "atom";
          if (t.lastType == "open" && (r.test(o) || l.test(o))) return "keyword";
          if (o.charAt(0) == "&") return "variableName.special";
          return "variableName";
        }
      }
      function u(e, t) {
        var n = false,
          r;
        while ((r = e.next())) {
          if (r == '"' && !n) {
            t.tokenize = c;
            break;
          }
          n = !n && r == "\\";
        }
        return "string";
      }
      function f(e, t) {
        var n, r;
        while ((n = e.next())) {
          if (n == "#" && r == "|") {
            t.tokenize = c;
            break;
          }
          r = n;
        }
        a = "ws";
        return "comment";
      }
      const p = {
        name: "commonlisp",
        startState: function () {
          return { ctx: { prev: null, start: 0, indentTo: 0 }, lastType: null, tokenize: c };
        },
        token: function (e, t) {
          if (e.sol() && typeof t.ctx.indentTo != "number") t.ctx.indentTo = t.ctx.start + 1;
          a = null;
          var n = t.tokenize(e, t);
          if (a != "ws") {
            if (t.ctx.indentTo == null) {
              if (a == "symbol" && l.test(e.current())) t.ctx.indentTo = t.ctx.start + e.indentUnit;
              else t.ctx.indentTo = "next";
            } else if (t.ctx.indentTo == "next") {
              t.ctx.indentTo = e.column();
            }
            t.lastType = a;
          }
          if (a == "open") t.ctx = { prev: t.ctx, start: e.column(), indentTo: null };
          else if (a == "close") t.ctx = t.ctx.prev || t.ctx;
          return n;
        },
        indent: function (e) {
          var t = e.ctx.indentTo;
          return typeof t == "number" ? t : e.ctx.start + 1;
        },
        languageData: { commentTokens: { line: ";;", block: { open: "#|", close: "|#" } }, closeBrackets: { brackets: ["(", "[", "{", '"'] } },
      };
    },
  },
]);
