"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2995],
  {
    2995: (e, t, n) => {
      n.r(t);
      n.d(t, { sparql: () => x });
      var r;
      function a(e) {
        return new RegExp("^(?:" + e.join("|") + ")$", "i");
      }
      var i = a([
        "str",
        "lang",
        "langmatches",
        "datatype",
        "bound",
        "sameterm",
        "isiri",
        "isuri",
        "iri",
        "uri",
        "bnode",
        "count",
        "sum",
        "min",
        "max",
        "avg",
        "sample",
        "group_concat",
        "rand",
        "abs",
        "ceil",
        "floor",
        "round",
        "concat",
        "substr",
        "strlen",
        "replace",
        "ucase",
        "lcase",
        "encode_for_uri",
        "contains",
        "strstarts",
        "strends",
        "strbefore",
        "strafter",
        "year",
        "month",
        "day",
        "hours",
        "minutes",
        "seconds",
        "timezone",
        "tz",
        "now",
        "uuid",
        "struuid",
        "md5",
        "sha1",
        "sha256",
        "sha384",
        "sha512",
        "coalesce",
        "if",
        "strlang",
        "strdt",
        "isnumeric",
        "regex",
        "exists",
        "isblank",
        "isliteral",
        "a",
        "bind",
      ]);
      var u = a([
        "base",
        "prefix",
        "select",
        "distinct",
        "reduced",
        "construct",
        "describe",
        "ask",
        "from",
        "named",
        "where",
        "order",
        "limit",
        "offset",
        "filter",
        "optional",
        "graph",
        "by",
        "asc",
        "desc",
        "as",
        "having",
        "undef",
        "values",
        "group",
        "minus",
        "in",
        "not",
        "service",
        "silent",
        "using",
        "insert",
        "delete",
        "union",
        "true",
        "false",
        "with",
        "data",
        "copy",
        "to",
        "move",
        "add",
        "create",
        "drop",
        "clear",
        "load",
        "into",
      ]);
      var o = /[*+\-<>=&|\^\/!\?]/;
      var s = "[A-Za-z_\\-0-9]";
      var l = new RegExp("[A-Za-z]");
      var c = new RegExp("((" + s + "|\\.)*(" + s + "))?:");
      function f(e, t) {
        var n = e.next();
        r = null;
        if (n == "$" || n == "?") {
          if (n == "?" && e.match(/\s/, false)) {
            return "operator";
          }
          e.match(
            /^[A-Za-z0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][A-Za-z0-9_\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*/
          );
          return "variableName.local";
        } else if (n == "<" && !e.match(/^[\s\u00a0=]/, false)) {
          e.match(/^[^\s\u00a0>]*>?/);
          return "atom";
        } else if (n == '"' || n == "'") {
          t.tokenize = d(n);
          return t.tokenize(e, t);
        } else if (/[{}\(\),\.;\[\]]/.test(n)) {
          r = n;
          return "bracket";
        } else if (n == "#") {
          e.skipToEnd();
          return "comment";
        } else if (o.test(n)) {
          return "operator";
        } else if (n == ":") {
          p(e);
          return "atom";
        } else if (n == "@") {
          e.eatWhile(/[a-z\d\-]/i);
          return "meta";
        } else if (l.test(n) && e.match(c)) {
          p(e);
          return "atom";
        }
        e.eatWhile(/[_\w\d]/);
        var a = e.current();
        if (i.test(a)) return "builtin";
        else if (u.test(a)) return "keyword";
        else return "variable";
      }
      function p(e) {
        e.match(/(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])+/i);
      }
      function d(e) {
        return function (t, n) {
          var r = false,
            a;
          while ((a = t.next()) != null) {
            if (a == e && !r) {
              n.tokenize = f;
              break;
            }
            r = !r && a == "\\";
          }
          return "string";
        };
      }
      function m(e, t, n) {
        e.context = { prev: e.context, indent: e.indent, col: n, type: t };
      }
      function F(e) {
        e.indent = e.context.indent;
        e.context = e.context.prev;
      }
      const x = {
        name: "sparql",
        startState: function () {
          return { tokenize: f, context: null, indent: 0, col: 0 };
        },
        token: function (e, t) {
          if (e.sol()) {
            if (t.context && t.context.align == null) t.context.align = false;
            t.indent = e.indentation();
          }
          if (e.eatSpace()) return null;
          var n = t.tokenize(e, t);
          if (n != "comment" && t.context && t.context.align == null && t.context.type != "pattern") {
            t.context.align = true;
          }
          if (r == "(") m(t, ")", e.column());
          else if (r == "[") m(t, "]", e.column());
          else if (r == "{") m(t, "}", e.column());
          else if (/[\]\}\)]/.test(r)) {
            while (t.context && t.context.type == "pattern") F(t);
            if (t.context && r == t.context.type) {
              F(t);
              if (r == "}" && t.context && t.context.type == "pattern") F(t);
            }
          } else if (r == "." && t.context && t.context.type == "pattern") F(t);
          else if (/atom|string|variable/.test(n) && t.context) {
            if (/[\}\]]/.test(t.context.type)) m(t, "pattern", e.column());
            else if (t.context.type == "pattern" && !t.context.align) {
              t.context.align = true;
              t.context.col = e.column();
            }
          }
          return n;
        },
        indent: function (e, t, n) {
          var r = t && t.charAt(0);
          var a = e.context;
          if (/[\]\}]/.test(r)) while (a && a.type == "pattern") a = a.prev;
          var i = a && r == a.type;
          if (!a) return 0;
          else if (a.type == "pattern") return a.col;
          else if (a.align) return a.col + (i ? 0 : 1);
          else return a.indent + (i ? 0 : n.unit);
        },
        languageData: { commentTokens: { line: "#" } },
      };
    },
  },
]);
