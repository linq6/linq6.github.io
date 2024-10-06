"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1954],
  {
    21954: (e, n, t) => {
      t.r(n);
      t.d(n, { octave: () => k });
      function r(e) {
        return new RegExp("^((" + e.join(")|(") + "))\\b");
      }
      var a = new RegExp("^[\\+\\-\\*/&|\\^~<>!@'\\\\]");
      var i = new RegExp("^[\\(\\[\\{\\},:=;\\.]");
      var o = new RegExp("^((==)|(~=)|(<=)|(>=)|(<<)|(>>)|(\\.[\\+\\-\\*/\\^\\\\]))");
      var u = new RegExp("^((!=)|(\\+=)|(\\-=)|(\\*=)|(/=)|(&=)|(\\|=)|(\\^=))");
      var c = new RegExp("^((>>=)|(<<=))");
      var s = new RegExp("^[\\]\\)]");
      var f = new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*");
      var m = r([
        "error",
        "eval",
        "function",
        "abs",
        "acos",
        "atan",
        "asin",
        "cos",
        "cosh",
        "exp",
        "log",
        "prod",
        "sum",
        "log10",
        "max",
        "min",
        "sign",
        "sin",
        "sinh",
        "sqrt",
        "tan",
        "reshape",
        "break",
        "zeros",
        "default",
        "margin",
        "round",
        "ones",
        "rand",
        "syn",
        "ceil",
        "floor",
        "size",
        "clear",
        "zeros",
        "eye",
        "mean",
        "std",
        "cov",
        "det",
        "eig",
        "inv",
        "norm",
        "rank",
        "trace",
        "expm",
        "logm",
        "sqrtm",
        "linspace",
        "plot",
        "title",
        "xlabel",
        "ylabel",
        "legend",
        "text",
        "grid",
        "meshgrid",
        "mesh",
        "num2str",
        "fft",
        "ifft",
        "arrayfun",
        "cellfun",
        "input",
        "fliplr",
        "flipud",
        "ismember",
      ]);
      var l = r([
        "return",
        "case",
        "switch",
        "else",
        "elseif",
        "end",
        "endif",
        "endfunction",
        "if",
        "otherwise",
        "do",
        "for",
        "while",
        "try",
        "catch",
        "classdef",
        "properties",
        "events",
        "methods",
        "global",
        "persistent",
        "endfor",
        "endwhile",
        "printf",
        "sprintf",
        "disp",
        "until",
        "continue",
        "pkg",
      ]);
      function p(e, n) {
        if (!e.sol() && e.peek() === "'") {
          e.next();
          n.tokenize = d;
          return "operator";
        }
        n.tokenize = d;
        return d(e, n);
      }
      function h(e, n) {
        if (e.match(/^.*%}/)) {
          n.tokenize = d;
          return "comment";
        }
        e.skipToEnd();
        return "comment";
      }
      function d(e, n) {
        if (e.eatSpace()) return null;
        if (e.match("%{")) {
          n.tokenize = h;
          e.skipToEnd();
          return "comment";
        }
        if (e.match(/^[%#]/)) {
          e.skipToEnd();
          return "comment";
        }
        if (e.match(/^[0-9\.+-]/, false)) {
          if (e.match(/^[+-]?0x[0-9a-fA-F]+[ij]?/)) {
            e.tokenize = d;
            return "number";
          }
          if (e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?[ij]?/)) {
            return "number";
          }
          if (e.match(/^[+-]?\d+([EeDd][+-]?\d+)?[ij]?/)) {
            return "number";
          }
        }
        if (e.match(r(["nan", "NaN", "inf", "Inf"]))) {
          return "number";
        }
        var t = e.match(/^"(?:[^"]|"")*("|$)/) || e.match(/^'(?:[^']|'')*('|$)/);
        if (t) {
          return t[1] ? "string" : "error";
        }
        if (e.match(l)) {
          return "keyword";
        }
        if (e.match(m)) {
          return "builtin";
        }
        if (e.match(f)) {
          return "variable";
        }
        if (e.match(a) || e.match(o)) {
          return "operator";
        }
        if (e.match(i) || e.match(u) || e.match(c)) {
          return null;
        }
        if (e.match(s)) {
          n.tokenize = p;
          return null;
        }
        e.next();
        return "error";
      }
      const k = {
        name: "octave",
        startState: function () {
          return { tokenize: d };
        },
        token: function (e, n) {
          var t = n.tokenize(e, n);
          if (t === "number" || t === "variable") {
            n.tokenize = p;
          }
          return t;
        },
        languageData: { commentTokens: { line: "%" } },
      };
    },
  },
]);
