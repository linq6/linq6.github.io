"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7080],
  {
    97080: (e, t, n) => {
      n.r(t);
      n.d(t, { oz: () => g });
      function r(e) {
        return new RegExp("^((" + e.join(")|(") + "))\\b");
      }
      var a = /[\^@!\|<>#~\.\*\-\+\\/,=]/;
      var i = /(<-)|(:=)|(=<)|(>=)|(<=)|(<:)|(>:)|(=:)|(\\=)|(\\=:)|(!!)|(==)|(::)/;
      var u = /(:::)|(\.\.\.)|(=<:)|(>=:)/;
      var o = [
        "in",
        "then",
        "else",
        "of",
        "elseof",
        "elsecase",
        "elseif",
        "catch",
        "finally",
        "with",
        "require",
        "prepare",
        "import",
        "export",
        "define",
        "do",
      ];
      var c = ["end"];
      var f = r(["true", "false", "nil", "unit"]);
      var s = r([
        "andthen",
        "at",
        "attr",
        "declare",
        "feat",
        "from",
        "lex",
        "mod",
        "div",
        "mode",
        "orelse",
        "parser",
        "prod",
        "prop",
        "scanner",
        "self",
        "syn",
        "token",
      ]);
      var l = r([
        "local",
        "proc",
        "fun",
        "case",
        "class",
        "if",
        "cond",
        "or",
        "dis",
        "choice",
        "not",
        "thread",
        "try",
        "raise",
        "lock",
        "for",
        "suchthat",
        "meth",
        "functor",
      ]);
      var h = r(o);
      var d = r(c);
      function m(e, t) {
        if (e.eatSpace()) {
          return null;
        }
        if (e.match(/[{}]/)) {
          return "bracket";
        }
        if (e.match("[]")) {
          return "keyword";
        }
        if (e.match(u) || e.match(i)) {
          return "operator";
        }
        if (e.match(f)) {
          return "atom";
        }
        var n = e.match(l);
        if (n) {
          if (!t.doInCurrentLine) t.currentIndent++;
          else t.doInCurrentLine = false;
          if (n[0] == "proc" || n[0] == "fun") t.tokenize = z;
          else if (n[0] == "class") t.tokenize = p;
          else if (n[0] == "meth") t.tokenize = k;
          return "keyword";
        }
        if (e.match(h) || e.match(s)) {
          return "keyword";
        }
        if (e.match(d)) {
          t.currentIndent--;
          return "keyword";
        }
        var r = e.next();
        if (r == '"' || r == "'") {
          t.tokenize = b(r);
          return t.tokenize(e, t);
        }
        if (/[~\d]/.test(r)) {
          if (r == "~") {
            if (!/^[0-9]/.test(e.peek())) return null;
            else if ((e.next() == "0" && e.match(/^[xX][0-9a-fA-F]+/)) || e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/)) return "number";
          }
          if ((r == "0" && e.match(/^[xX][0-9a-fA-F]+/)) || e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/)) return "number";
          return null;
        }
        if (r == "%") {
          e.skipToEnd();
          return "comment";
        } else if (r == "/") {
          if (e.eat("*")) {
            t.tokenize = v;
            return v(e, t);
          }
        }
        if (a.test(r)) {
          return "operator";
        }
        e.eatWhile(/\w/);
        return "variable";
      }
      function p(e, t) {
        if (e.eatSpace()) {
          return null;
        }
        e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)/);
        t.tokenize = m;
        return "type";
      }
      function k(e, t) {
        if (e.eatSpace()) {
          return null;
        }
        e.match(/([a-zA-Z][A-Za-z0-9_]*)|(`.+`)/);
        t.tokenize = m;
        return "def";
      }
      function z(e, t) {
        if (e.eatSpace()) {
          return null;
        }
        if (!t.hasPassedFirstStage && e.eat("{")) {
          t.hasPassedFirstStage = true;
          return "bracket";
        } else if (t.hasPassedFirstStage) {
          e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)|\$/);
          t.hasPassedFirstStage = false;
          t.tokenize = m;
          return "def";
        } else {
          t.tokenize = m;
          return null;
        }
      }
      function v(e, t) {
        var n = false,
          r;
        while ((r = e.next())) {
          if (r == "/" && n) {
            t.tokenize = m;
            break;
          }
          n = r == "*";
        }
        return "comment";
      }
      function b(e) {
        return function (t, n) {
          var r = false,
            a,
            i = false;
          while ((a = t.next()) != null) {
            if (a == e && !r) {
              i = true;
              break;
            }
            r = !r && a == "\\";
          }
          if (i || !r) n.tokenize = m;
          return "string";
        };
      }
      function w() {
        var e = o.concat(c);
        return new RegExp("[\\[\\]]|(" + e.join("|") + ")$");
      }
      const g = {
        name: "oz",
        startState: function () {
          return { tokenize: m, currentIndent: 0, doInCurrentLine: false, hasPassedFirstStage: false };
        },
        token: function (e, t) {
          if (e.sol()) t.doInCurrentLine = 0;
          return t.tokenize(e, t);
        },
        indent: function (e, t, n) {
          var r = t.replace(/^\s+|\s+$/g, "");
          if (r.match(d) || r.match(h) || r.match(/(\[])/)) return n.unit * (e.currentIndent - 1);
          if (e.currentIndent < 0) return 0;
          return e.currentIndent * n.unit;
        },
        languageData: { indentOnInut: w(), commentTokens: { line: "%", block: { open: "/*", close: "*/" } } },
      };
    },
  },
]);
