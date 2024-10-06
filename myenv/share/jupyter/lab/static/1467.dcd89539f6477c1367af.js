"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1467],
  {
    41467: (e, t, r) => {
      r.r(t);
      r.d(t, { eiffel: () => s });
      function n(e) {
        var t = {};
        for (var r = 0, n = e.length; r < n; ++r) t[e[r]] = true;
        return t;
      }
      var a = n([
        "note",
        "across",
        "when",
        "variant",
        "until",
        "unique",
        "undefine",
        "then",
        "strip",
        "select",
        "retry",
        "rescue",
        "require",
        "rename",
        "reference",
        "redefine",
        "prefix",
        "once",
        "old",
        "obsolete",
        "loop",
        "local",
        "like",
        "is",
        "inspect",
        "infix",
        "include",
        "if",
        "frozen",
        "from",
        "external",
        "export",
        "ensure",
        "end",
        "elseif",
        "else",
        "do",
        "creation",
        "create",
        "check",
        "alias",
        "agent",
        "separate",
        "invariant",
        "inherit",
        "indexing",
        "feature",
        "expanded",
        "deferred",
        "class",
        "Void",
        "True",
        "Result",
        "Precursor",
        "False",
        "Current",
        "create",
        "attached",
        "detachable",
        "as",
        "and",
        "implies",
        "not",
        "or",
      ]);
      var i = n([":=", "and then", "and", "or", "<<", ">>"]);
      function u(e, t, r) {
        r.tokenize.push(e);
        return e(t, r);
      }
      function l(e, t) {
        if (e.eatSpace()) return null;
        var r = e.next();
        if (r == '"' || r == "'") {
          return u(o(r, "string"), e, t);
        } else if (r == "-" && e.eat("-")) {
          e.skipToEnd();
          return "comment";
        } else if (r == ":" && e.eat("=")) {
          return "operator";
        } else if (/[0-9]/.test(r)) {
          e.eatWhile(/[xXbBCc0-9\.]/);
          e.eat(/[\?\!]/);
          return "variable";
        } else if (/[a-zA-Z_0-9]/.test(r)) {
          e.eatWhile(/[a-zA-Z_0-9]/);
          e.eat(/[\?\!]/);
          return "variable";
        } else if (/[=+\-\/*^%<>~]/.test(r)) {
          e.eatWhile(/[=+\-\/*^%<>~]/);
          return "operator";
        } else {
          return null;
        }
      }
      function o(e, t, r) {
        return function (n, a) {
          var i = false,
            u;
          while ((u = n.next()) != null) {
            if (u == e && (r || !i)) {
              a.tokenize.pop();
              break;
            }
            i = !i && u == "%";
          }
          return t;
        };
      }
      const s = {
        name: "eiffel",
        startState: function () {
          return { tokenize: [l] };
        },
        token: function (e, t) {
          var r = t.tokenize[t.tokenize.length - 1](e, t);
          if (r == "variable") {
            var n = e.current();
            r = a.propertyIsEnumerable(e.current())
              ? "keyword"
              : i.propertyIsEnumerable(e.current())
                ? "operator"
                : /^[A-Z][A-Z_0-9]*$/g.test(n)
                  ? "tag"
                  : /^0[bB][0-1]+$/g.test(n)
                    ? "number"
                    : /^0[cC][0-7]+$/g.test(n)
                      ? "number"
                      : /^0[xX][a-fA-F0-9]+$/g.test(n)
                        ? "number"
                        : /^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(n)
                          ? "number"
                          : /^[0-9]+$/g.test(n)
                            ? "number"
                            : "variable";
          }
          return r;
        },
        languageData: { commentTokens: { line: "--" } },
      };
    },
  },
]);
