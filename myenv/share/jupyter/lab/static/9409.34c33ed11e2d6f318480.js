"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [9409],
  {
    89409: (e, n, t) => {
      t.r(n);
      t.d(n, { dylan: () => k });
      function i(e, n) {
        for (var t = 0; t < e.length; t++) n(e[t], t);
      }
      function r(e, n) {
        for (var t = 0; t < e.length; t++) if (n(e[t], t)) return true;
        return false;
      }
      var a = {
        unnamedDefinition: ["interface"],
        namedDefinition: ["module", "library", "macro", "C-struct", "C-union", "C-function", "C-callable-wrapper"],
        typeParameterizedDefinition: ["class", "C-subtype", "C-mapped-subtype"],
        otherParameterizedDefinition: ["method", "function", "C-variable", "C-address"],
        constantSimpleDefinition: ["constant"],
        variableSimpleDefinition: ["variable"],
        otherSimpleDefinition: ["generic", "domain", "C-pointer-type", "table"],
        statement: [
          "if",
          "block",
          "begin",
          "method",
          "case",
          "for",
          "select",
          "when",
          "unless",
          "until",
          "while",
          "iterate",
          "profiling",
          "dynamic-bind",
        ],
        separator: ["finally", "exception", "cleanup", "else", "elseif", "afterwards"],
        other: [
          "above",
          "below",
          "by",
          "from",
          "handler",
          "in",
          "instance",
          "let",
          "local",
          "otherwise",
          "slot",
          "subclass",
          "then",
          "to",
          "keyed-by",
          "virtual",
        ],
        signalingCalls: ["signal", "error", "cerror", "break", "check-type", "abort"],
      };
      a["otherDefinition"] = a["unnamedDefinition"].concat(a["namedDefinition"]).concat(a["otherParameterizedDefinition"]);
      a["definition"] = a["typeParameterizedDefinition"].concat(a["otherDefinition"]);
      a["parameterizedDefinition"] = a["typeParameterizedDefinition"].concat(a["otherParameterizedDefinition"]);
      a["simpleDefinition"] = a["constantSimpleDefinition"].concat(a["variableSimpleDefinition"]).concat(a["otherSimpleDefinition"]);
      a["keyword"] = a["statement"].concat(a["separator"]).concat(a["other"]);
      var o = "[-_a-zA-Z?!*@<>$%]+";
      var l = new RegExp("^" + o);
      var f = { symbolKeyword: o + ":", symbolClass: "<" + o + ">", symbolGlobal: "\\*" + o + "\\*", symbolConstant: "\\$" + o };
      var s = { symbolKeyword: "atom", symbolClass: "tag", symbolGlobal: "variableName.standard", symbolConstant: "variableName.constant" };
      for (var u in f) if (f.hasOwnProperty(u)) f[u] = new RegExp("^" + f[u]);
      f["keyword"] = [/^with(?:out)?-[-_a-zA-Z?!*@<>$%]+/];
      var c = {};
      c["keyword"] = "keyword";
      c["definition"] = "def";
      c["simpleDefinition"] = "def";
      c["signalingCalls"] = "builtin";
      var m = {};
      var p = {};
      i(["keyword", "definition", "simpleDefinition", "signalingCalls"], function (e) {
        i(a[e], function (n) {
          m[n] = e;
          p[n] = c[e];
        });
      });
      function d(e, n, t) {
        n.tokenize = t;
        return t(e, n);
      }
      function b(e, n) {
        var t = e.peek();
        if (t == "'" || t == '"') {
          e.next();
          return d(e, n, y(t, "string"));
        } else if (t == "/") {
          e.next();
          if (e.eat("*")) {
            return d(e, n, h);
          } else if (e.eat("/")) {
            e.skipToEnd();
            return "comment";
          }
          e.backUp(1);
        } else if (/[+\-\d\.]/.test(t)) {
          if (e.match(/^[+-]?[0-9]*\.[0-9]*([esdx][+-]?[0-9]+)?/i) || e.match(/^[+-]?[0-9]+([esdx][+-]?[0-9]+)/i) || e.match(/^[+-]?\d+/)) {
            return "number";
          }
        } else if (t == "#") {
          e.next();
          t = e.peek();
          if (t == '"') {
            e.next();
            return d(e, n, y('"', "string"));
          } else if (t == "b") {
            e.next();
            e.eatWhile(/[01]/);
            return "number";
          } else if (t == "x") {
            e.next();
            e.eatWhile(/[\da-f]/i);
            return "number";
          } else if (t == "o") {
            e.next();
            e.eatWhile(/[0-7]/);
            return "number";
          } else if (t == "#") {
            e.next();
            return "punctuation";
          } else if (t == "[" || t == "(") {
            e.next();
            return "bracket";
          } else if (e.match(/f|t|all-keys|include|key|next|rest/i)) {
            return "atom";
          } else {
            e.eatWhile(/[-a-zA-Z]/);
            return "error";
          }
        } else if (t == "~") {
          e.next();
          t = e.peek();
          if (t == "=") {
            e.next();
            t = e.peek();
            if (t == "=") {
              e.next();
              return "operator";
            }
            return "operator";
          }
          return "operator";
        } else if (t == ":") {
          e.next();
          t = e.peek();
          if (t == "=") {
            e.next();
            return "operator";
          } else if (t == ":") {
            e.next();
            return "punctuation";
          }
        } else if ("[](){}".indexOf(t) != -1) {
          e.next();
          return "bracket";
        } else if (".,".indexOf(t) != -1) {
          e.next();
          return "punctuation";
        } else if (e.match("end")) {
          return "keyword";
        }
        for (var i in f) {
          if (f.hasOwnProperty(i)) {
            var a = f[i];
            if (
              (a instanceof Array &&
                r(a, function (n) {
                  return e.match(n);
                })) ||
              e.match(a)
            )
              return s[i];
          }
        }
        if (/[+\-*\/^=<>&|]/.test(t)) {
          e.next();
          return "operator";
        }
        if (e.match("define")) {
          return "def";
        } else {
          e.eatWhile(/[\w\-]/);
          if (m.hasOwnProperty(e.current())) {
            return p[e.current()];
          } else if (e.current().match(l)) {
            return "variable";
          } else {
            e.next();
            return "variableName.standard";
          }
        }
      }
      function h(e, n) {
        var t = false,
          i = false,
          r = 0,
          a;
        while ((a = e.next())) {
          if (a == "/" && t) {
            if (r > 0) {
              r--;
            } else {
              n.tokenize = b;
              break;
            }
          } else if (a == "*" && i) {
            r++;
          }
          t = a == "*";
          i = a == "/";
        }
        return "comment";
      }
      function y(e, n) {
        return function (t, i) {
          var r = false,
            a,
            o = false;
          while ((a = t.next()) != null) {
            if (a == e && !r) {
              o = true;
              break;
            }
            r = !r && a == "\\";
          }
          if (o || !r) {
            i.tokenize = b;
          }
          return n;
        };
      }
      const k = {
        name: "dylan",
        startState: function () {
          return { tokenize: b, currentIndent: 0 };
        },
        token: function (e, n) {
          if (e.eatSpace()) return null;
          var t = n.tokenize(e, n);
          return t;
        },
        languageData: { commentTokens: { block: { open: "/*", close: "*/" } } },
      };
    },
  },
]);
