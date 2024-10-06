"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [5203],
  {
    75203: (e, t, a) => {
      a.r(t);
      a.d(t, { ebnf: () => c });
      var s = { slash: 0, parenthesis: 1 };
      var r = { comment: 0, _string: 1, characterClass: 2 };
      const c = {
        name: "ebnf",
        startState: function () {
          return { stringType: null, commentType: null, braced: 0, lhs: true, localState: null, stack: [], inDefinition: false };
        },
        token: function (e, t) {
          if (!e) return;
          if (t.stack.length === 0) {
            if (e.peek() == '"' || e.peek() == "'") {
              t.stringType = e.peek();
              e.next();
              t.stack.unshift(r._string);
            } else if (e.match("/*")) {
              t.stack.unshift(r.comment);
              t.commentType = s.slash;
            } else if (e.match("(*")) {
              t.stack.unshift(r.comment);
              t.commentType = s.parenthesis;
            }
          }
          switch (t.stack[0]) {
            case r._string:
              while (t.stack[0] === r._string && !e.eol()) {
                if (e.peek() === t.stringType) {
                  e.next();
                  t.stack.shift();
                } else if (e.peek() === "\\") {
                  e.next();
                  e.next();
                } else {
                  e.match(/^.[^\\\"\']*/);
                }
              }
              return t.lhs ? "property" : "string";
            case r.comment:
              while (t.stack[0] === r.comment && !e.eol()) {
                if (t.commentType === s.slash && e.match("*/")) {
                  t.stack.shift();
                  t.commentType = null;
                } else if (t.commentType === s.parenthesis && e.match("*)")) {
                  t.stack.shift();
                  t.commentType = null;
                } else {
                  e.match(/^.[^\*]*/);
                }
              }
              return "comment";
            case r.characterClass:
              while (t.stack[0] === r.characterClass && !e.eol()) {
                if (!(e.match(/^[^\]\\]+/) || e.match("."))) {
                  t.stack.shift();
                }
              }
              return "operator";
          }
          var a = e.peek();
          switch (a) {
            case "[":
              e.next();
              t.stack.unshift(r.characterClass);
              return "bracket";
            case ":":
            case "|":
            case ";":
              e.next();
              return "operator";
            case "%":
              if (e.match("%%")) {
                return "header";
              } else if (e.match(/[%][A-Za-z]+/)) {
                return "keyword";
              } else if (e.match(/[%][}]/)) {
                return "bracket";
              }
              break;
            case "/":
              if (e.match(/[\/][A-Za-z]+/)) {
                return "keyword";
              }
            case "\\":
              if (e.match(/[\][a-z]+/)) {
                return "string.special";
              }
            case ".":
              if (e.match(".")) {
                return "atom";
              }
            case "*":
            case "-":
            case "+":
            case "^":
              if (e.match(a)) {
                return "atom";
              }
            case "$":
              if (e.match("$$")) {
                return "builtin";
              } else if (e.match(/[$][0-9]+/)) {
                return "variableName.special";
              }
            case "<":
              if (e.match(/<<[a-zA-Z_]+>>/)) {
                return "builtin";
              }
          }
          if (e.match("//")) {
            e.skipToEnd();
            return "comment";
          } else if (e.match("return")) {
            return "operator";
          } else if (e.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)) {
            if (e.match(/(?=[\(.])/)) {
              return "variable";
            } else if (e.match(/(?=[\s\n]*[:=])/)) {
              return "def";
            }
            return "variableName.special";
          } else if (["[", "]", "(", ")"].indexOf(e.peek()) != -1) {
            e.next();
            return "bracket";
          } else if (!e.eatSpace()) {
            e.next();
          }
          return null;
        },
      };
    },
  },
]);
