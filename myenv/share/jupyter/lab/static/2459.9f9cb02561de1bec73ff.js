"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2459],
  {
    12459: (e, t, n) => {
      n.r(t);
      n.d(t, { q: () => f });
      var r,
        i = s([
          "abs",
          "acos",
          "aj",
          "aj0",
          "all",
          "and",
          "any",
          "asc",
          "asin",
          "asof",
          "atan",
          "attr",
          "avg",
          "avgs",
          "bin",
          "by",
          "ceiling",
          "cols",
          "cor",
          "cos",
          "count",
          "cov",
          "cross",
          "csv",
          "cut",
          "delete",
          "deltas",
          "desc",
          "dev",
          "differ",
          "distinct",
          "div",
          "do",
          "each",
          "ej",
          "enlist",
          "eval",
          "except",
          "exec",
          "exit",
          "exp",
          "fby",
          "fills",
          "first",
          "fkeys",
          "flip",
          "floor",
          "from",
          "get",
          "getenv",
          "group",
          "gtime",
          "hclose",
          "hcount",
          "hdel",
          "hopen",
          "hsym",
          "iasc",
          "idesc",
          "if",
          "ij",
          "in",
          "insert",
          "inter",
          "inv",
          "key",
          "keys",
          "last",
          "like",
          "list",
          "lj",
          "load",
          "log",
          "lower",
          "lsq",
          "ltime",
          "ltrim",
          "mavg",
          "max",
          "maxs",
          "mcount",
          "md5",
          "mdev",
          "med",
          "meta",
          "min",
          "mins",
          "mmax",
          "mmin",
          "mmu",
          "mod",
          "msum",
          "neg",
          "next",
          "not",
          "null",
          "or",
          "over",
          "parse",
          "peach",
          "pj",
          "plist",
          "prd",
          "prds",
          "prev",
          "prior",
          "rand",
          "rank",
          "ratios",
          "raze",
          "read0",
          "read1",
          "reciprocal",
          "reverse",
          "rload",
          "rotate",
          "rsave",
          "rtrim",
          "save",
          "scan",
          "select",
          "set",
          "setenv",
          "show",
          "signum",
          "sin",
          "sqrt",
          "ss",
          "ssr",
          "string",
          "sublist",
          "sum",
          "sums",
          "sv",
          "system",
          "tables",
          "tan",
          "til",
          "trim",
          "txf",
          "type",
          "uj",
          "ungroup",
          "union",
          "update",
          "upper",
          "upsert",
          "value",
          "var",
          "view",
          "views",
          "vs",
          "wavg",
          "where",
          "where",
          "while",
          "within",
          "wj",
          "wj1",
          "wsum",
          "xasc",
          "xbar",
          "xcol",
          "xcols",
          "xdesc",
          "xexp",
          "xgroup",
          "xkey",
          "xlog",
          "xprev",
          "xrank",
        ]),
        o = /[|/&^!+:\\\-*%$=~#;@><,?_\'\"\[\(\]\)\s{}]/;
      function s(e) {
        return new RegExp("^(" + e.join("|") + ")$");
      }
      function a(e, t) {
        var n = e.sol(),
          s = e.next();
        r = null;
        if (n)
          if (s == "/") return (t.tokenize = c)(e, t);
          else if (s == "\\") {
            if (e.eol() || /\s/.test(e.peek())) return e.skipToEnd(), /^\\\s*$/.test(e.current()) ? (t.tokenize = u)(e) : (t.tokenize = a), "comment";
            else return (t.tokenize = a), "builtin";
          }
        if (/\s/.test(s)) return e.peek() == "/" ? (e.skipToEnd(), "comment") : "null";
        if (s == '"') return (t.tokenize = p)(e, t);
        if (s == "`") return e.eatWhile(/[A-Za-z\d_:\/.]/), "macroName";
        if (("." == s && /\d/.test(e.peek())) || /\d/.test(s)) {
          var l = null;
          e.backUp(1);
          if (
            e.match(/^\d{4}\.\d{2}(m|\.\d{2}([DT](\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)?)?)/) ||
            e.match(/^\d+D(\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)/) ||
            e.match(/^\d{2}:\d{2}(:\d{2}(\.\d{1,9})?)?/) ||
            e.match(/^\d+[ptuv]{1}/)
          )
            l = "temporal";
          else if (
            e.match(/^0[NwW]{1}/) ||
            e.match(/^0x[\da-fA-F]*/) ||
            e.match(/^[01]+[b]{1}/) ||
            e.match(/^\d+[chijn]{1}/) ||
            e.match(/-?\d*(\.\d*)?(e[+\-]?\d+)?(e|f)?/)
          )
            l = "number";
          return l && (!(s = e.peek()) || o.test(s)) ? l : (e.next(), "error");
        }
        if (/[A-Za-z]|\./.test(s)) return e.eatWhile(/[A-Za-z._\d]/), i.test(e.current()) ? "keyword" : "variable";
        if (/[|/&^!+:\\\-*%$=~#;@><\.,?_\']/.test(s)) return null;
        if (/[{}\(\[\]\)]/.test(s)) return null;
        return "error";
      }
      function c(e, t) {
        return e.skipToEnd(), /\/\s*$/.test(e.current()) ? (t.tokenize = l)(e, t) : (t.tokenize = a), "comment";
      }
      function l(e, t) {
        var n = e.sol() && e.peek() == "\\";
        e.skipToEnd();
        if (n && /^\\\s*$/.test(e.current())) t.tokenize = a;
        return "comment";
      }
      function u(e) {
        return e.skipToEnd(), "comment";
      }
      function p(e, t) {
        var n = false,
          r,
          i = false;
        while ((r = e.next())) {
          if (r == '"' && !n) {
            i = true;
            break;
          }
          n = !n && r == "\\";
        }
        if (i) t.tokenize = a;
        return "string";
      }
      function d(e, t, n) {
        e.context = { prev: e.context, indent: e.indent, col: n, type: t };
      }
      function m(e) {
        e.indent = e.context.indent;
        e.context = e.context.prev;
      }
      const f = {
        name: "q",
        startState: function () {
          return { tokenize: a, context: null, indent: 0, col: 0 };
        },
        token: function (e, t) {
          if (e.sol()) {
            if (t.context && t.context.align == null) t.context.align = false;
            t.indent = e.indentation();
          }
          var n = t.tokenize(e, t);
          if (n != "comment" && t.context && t.context.align == null && t.context.type != "pattern") {
            t.context.align = true;
          }
          if (r == "(") d(t, ")", e.column());
          else if (r == "[") d(t, "]", e.column());
          else if (r == "{") d(t, "}", e.column());
          else if (/[\]\}\)]/.test(r)) {
            while (t.context && t.context.type == "pattern") m(t);
            if (t.context && r == t.context.type) m(t);
          } else if (r == "." && t.context && t.context.type == "pattern") m(t);
          else if (/atom|string|variable/.test(n) && t.context) {
            if (/[\}\]]/.test(t.context.type)) d(t, "pattern", e.column());
            else if (t.context.type == "pattern" && !t.context.align) {
              t.context.align = true;
              t.context.col = e.column();
            }
          }
          return n;
        },
        indent: function (e, t, n) {
          var r = t && t.charAt(0);
          var i = e.context;
          if (/[\]\}]/.test(r)) while (i && i.type == "pattern") i = i.prev;
          var o = i && r == i.type;
          if (!i) return 0;
          else if (i.type == "pattern") return i.col;
          else if (i.align) return i.col + (o ? 0 : 1);
          else return i.indent + (o ? 0 : n.unit);
        },
      };
    },
  },
]);
