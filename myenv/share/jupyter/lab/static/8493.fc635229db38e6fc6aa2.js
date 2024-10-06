"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [8493],
  {
    68493: (e, t, n) => {
      n.r(t);
      n.d(t, { dtd: () => f });
      var r;
      function l(e, t) {
        r = t;
        return e;
      }
      function a(e, t) {
        var n = e.next();
        if (n == "<" && e.eat("!")) {
          if (e.eatWhile(/[\-]/)) {
            t.tokenize = i;
            return i(e, t);
          } else if (e.eatWhile(/[\w]/)) return l("keyword", "doindent");
        } else if (n == "<" && e.eat("?")) {
          t.tokenize = s("meta", "?>");
          return l("meta", n);
        } else if (n == "#" && e.eatWhile(/[\w]/)) return l("atom", "tag");
        else if (n == "|") return l("keyword", "separator");
        else if (n.match(/[\(\)\[\]\-\.,\+\?>]/)) return l(null, n);
        else if (n.match(/[\[\]]/)) return l("rule", n);
        else if (n == '"' || n == "'") {
          t.tokenize = u(n);
          return t.tokenize(e, t);
        } else if (e.eatWhile(/[a-zA-Z\?\+\d]/)) {
          var r = e.current();
          if (r.substr(r.length - 1, r.length).match(/\?|\+/) !== null) e.backUp(1);
          return l("tag", "tag");
        } else if (n == "%" || n == "*") return l("number", "number");
        else {
          e.eatWhile(/[\w\\\-_%.{,]/);
          return l(null, null);
        }
      }
      function i(e, t) {
        var n = 0,
          r;
        while ((r = e.next()) != null) {
          if (n >= 2 && r == ">") {
            t.tokenize = a;
            break;
          }
          n = r == "-" ? n + 1 : 0;
        }
        return l("comment", "comment");
      }
      function u(e) {
        return function (t, n) {
          var r = false,
            i;
          while ((i = t.next()) != null) {
            if (i == e && !r) {
              n.tokenize = a;
              break;
            }
            r = !r && i == "\\";
          }
          return l("string", "tag");
        };
      }
      function s(e, t) {
        return function (n, r) {
          while (!n.eol()) {
            if (n.match(t)) {
              r.tokenize = a;
              break;
            }
            n.next();
          }
          return e;
        };
      }
      const f = {
        name: "dtd",
        startState: function () {
          return { tokenize: a, baseIndent: 0, stack: [] };
        },
        token: function (e, t) {
          if (e.eatSpace()) return null;
          var n = t.tokenize(e, t);
          var l = t.stack[t.stack.length - 1];
          if (e.current() == "[" || r === "doindent" || r == "[") t.stack.push("rule");
          else if (r === "endtag") t.stack[t.stack.length - 1] = "endtag";
          else if (e.current() == "]" || r == "]" || (r == ">" && l == "rule")) t.stack.pop();
          else if (r == "[") t.stack.push("[");
          return n;
        },
        indent: function (e, t, n) {
          var l = e.stack.length;
          if (t.charAt(0) === "]") l--;
          else if (t.substr(t.length - 1, t.length) === ">") {
            if (t.substr(0, 1) === "<") {
            } else if (r == "doindent" && t.length > 1) {
            } else if (r == "doindent") l--;
            else if (r == ">" && t.length > 1) {
            } else if (r == "tag" && t !== ">") {
            } else if (r == "tag" && e.stack[e.stack.length - 1] == "rule") l--;
            else if (r == "tag") l++;
            else if (t === ">" && e.stack[e.stack.length - 1] == "rule" && r === ">") l--;
            else if (t === ">" && e.stack[e.stack.length - 1] == "rule") {
            } else if (t.substr(0, 1) !== "<" && t.substr(0, 1) === ">") l = l - 1;
            else if (t === ">") {
            } else l = l - 1;
            if (r == null || r == "]") l--;
          }
          return e.baseIndent + l * n.unit;
        },
        languageData: { indentOnInput: /^\s*[\]>]$/ },
      };
    },
  },
]);
