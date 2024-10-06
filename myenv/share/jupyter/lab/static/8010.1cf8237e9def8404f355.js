"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [8010],
  {
    38010: (t, e, n) => {
      n.r(e);
      n.d(e, { stex: () => a, stexMath: () => i });
      function r(t) {
        function e(t, e) {
          t.cmdState.push(e);
        }
        function n(t) {
          if (t.cmdState.length > 0) {
            return t.cmdState[t.cmdState.length - 1];
          } else {
            return null;
          }
        }
        function r(t) {
          var e = t.cmdState.pop();
          if (e) {
            e.closeBracket();
          }
        }
        function a(t) {
          var e = t.cmdState;
          for (var n = e.length - 1; n >= 0; n--) {
            var r = e[n];
            if (r.name == "DEFAULT") {
              continue;
            }
            return r;
          }
          return {
            styleIdentifier: function () {
              return null;
            },
          };
        }
        function i(t, e, n) {
          return function () {
            this.name = t;
            this.bracketNo = 0;
            this.style = e;
            this.styles = n;
            this.argument = null;
            this.styleIdentifier = function () {
              return this.styles[this.bracketNo - 1] || null;
            };
            this.openBracket = function () {
              this.bracketNo++;
              return "bracket";
            };
            this.closeBracket = function () {};
          };
        }
        var u = {};
        u["importmodule"] = i("importmodule", "tag", ["string", "builtin"]);
        u["documentclass"] = i("documentclass", "tag", ["", "atom"]);
        u["usepackage"] = i("usepackage", "tag", ["atom"]);
        u["begin"] = i("begin", "tag", ["atom"]);
        u["end"] = i("end", "tag", ["atom"]);
        u["label"] = i("label", "tag", ["atom"]);
        u["ref"] = i("ref", "tag", ["atom"]);
        u["eqref"] = i("eqref", "tag", ["atom"]);
        u["cite"] = i("cite", "tag", ["atom"]);
        u["bibitem"] = i("bibitem", "tag", ["atom"]);
        u["Bibitem"] = i("Bibitem", "tag", ["atom"]);
        u["RBibitem"] = i("RBibitem", "tag", ["atom"]);
        u["DEFAULT"] = function () {
          this.name = "DEFAULT";
          this.style = "tag";
          this.styleIdentifier = this.openBracket = this.closeBracket = function () {};
        };
        function c(t, e) {
          t.f = e;
        }
        function f(t, r) {
          var i;
          if (t.match(/^\\[a-zA-Z@\xc0-\u1fff\u2060-\uffff]+/)) {
            var f = t.current().slice(1);
            i = u.hasOwnProperty(f) ? u[f] : u["DEFAULT"];
            i = new i();
            e(r, i);
            c(r, s);
            return i.style;
          }
          if (t.match(/^\\[$&%#{}_]/)) {
            return "tag";
          }
          if (t.match(/^\\[,;!\/\\]/)) {
            return "tag";
          }
          if (t.match("\\[")) {
            c(r, function (t, e) {
              return o(t, e, "\\]");
            });
            return "keyword";
          }
          if (t.match("\\(")) {
            c(r, function (t, e) {
              return o(t, e, "\\)");
            });
            return "keyword";
          }
          if (t.match("$$")) {
            c(r, function (t, e) {
              return o(t, e, "$$");
            });
            return "keyword";
          }
          if (t.match("$")) {
            c(r, function (t, e) {
              return o(t, e, "$");
            });
            return "keyword";
          }
          var m = t.next();
          if (m == "%") {
            t.skipToEnd();
            return "comment";
          } else if (m == "}" || m == "]") {
            i = n(r);
            if (i) {
              i.closeBracket(m);
              c(r, s);
            } else {
              return "error";
            }
            return "bracket";
          } else if (m == "{" || m == "[") {
            i = u["DEFAULT"];
            i = new i();
            e(r, i);
            return "bracket";
          } else if (/\d/.test(m)) {
            t.eatWhile(/[\w.%]/);
            return "atom";
          } else {
            t.eatWhile(/[\w\-_]/);
            i = a(r);
            if (i.name == "begin") {
              i.argument = t.current();
            }
            return i.styleIdentifier();
          }
        }
        function o(t, e, n) {
          if (t.eatSpace()) {
            return null;
          }
          if (n && t.match(n)) {
            c(e, f);
            return "keyword";
          }
          if (t.match(/^\\[a-zA-Z@]+/)) {
            return "tag";
          }
          if (t.match(/^[a-zA-Z]+/)) {
            return "variableName.special";
          }
          if (t.match(/^\\[$&%#{}_]/)) {
            return "tag";
          }
          if (t.match(/^\\[,;!\/]/)) {
            return "tag";
          }
          if (t.match(/^[\^_&]/)) {
            return "tag";
          }
          if (t.match(/^[+\-<>|=,\/@!*:;'"`~#?]/)) {
            return null;
          }
          if (t.match(/^(\d+\.\d*|\d*\.\d+|\d+)/)) {
            return "number";
          }
          var r = t.next();
          if (r == "{" || r == "}" || r == "[" || r == "]" || r == "(" || r == ")") {
            return "bracket";
          }
          if (r == "%") {
            t.skipToEnd();
            return "comment";
          }
          return "error";
        }
        function s(t, e) {
          var a = t.peek(),
            i;
          if (a == "{" || a == "[") {
            i = n(e);
            i.openBracket(a);
            t.eat(a);
            c(e, f);
            return "bracket";
          }
          if (/[ \t\r]/.test(a)) {
            t.eat(a);
            return null;
          }
          c(e, f);
          r(e);
          return f(t, e);
        }
        return {
          name: "stex",
          startState: function () {
            var e = t
              ? function (t, e) {
                  return o(t, e);
                }
              : f;
            return { cmdState: [], f: e };
          },
          copyState: function (t) {
            return { cmdState: t.cmdState.slice(), f: t.f };
          },
          token: function (t, e) {
            return e.f(t, e);
          },
          blankLine: function (t) {
            t.f = f;
            t.cmdState.length = 0;
          },
          languageData: { commentTokens: { line: "%" } },
        };
      }
      const a = r(false);
      const i = r(true);
    },
  },
]);
