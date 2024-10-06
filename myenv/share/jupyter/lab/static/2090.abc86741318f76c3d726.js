"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2090],
  {
    52090: (e, t, a) => {
      a.r(t);
      a.d(t, { yaml: () => n });
      var i = ["true", "false", "on", "off", "yes", "no"];
      var r = new RegExp("\\b((" + i.join(")|(") + "))$", "i");
      const n = {
        name: "yaml",
        token: function (e, t) {
          var a = e.peek();
          var i = t.escaped;
          t.escaped = false;
          if (a == "#" && (e.pos == 0 || /\s/.test(e.string.charAt(e.pos - 1)))) {
            e.skipToEnd();
            return "comment";
          }
          if (e.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/)) return "string";
          if (t.literal && e.indentation() > t.keyCol) {
            e.skipToEnd();
            return "string";
          } else if (t.literal) {
            t.literal = false;
          }
          if (e.sol()) {
            t.keyCol = 0;
            t.pair = false;
            t.pairStart = false;
            if (e.match("---")) {
              return "def";
            }
            if (e.match("...")) {
              return "def";
            }
            if (e.match(/^\s*-\s+/)) {
              return "meta";
            }
          }
          if (e.match(/^(\{|\}|\[|\])/)) {
            if (a == "{") t.inlinePairs++;
            else if (a == "}") t.inlinePairs--;
            else if (a == "[") t.inlineList++;
            else t.inlineList--;
            return "meta";
          }
          if (t.inlineList > 0 && !i && a == ",") {
            e.next();
            return "meta";
          }
          if (t.inlinePairs > 0 && !i && a == ",") {
            t.keyCol = 0;
            t.pair = false;
            t.pairStart = false;
            e.next();
            return "meta";
          }
          if (t.pairStart) {
            if (e.match(/^\s*(\||\>)\s*/)) {
              t.literal = true;
              return "meta";
            }
            if (e.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i)) {
              return "variable";
            }
            if (t.inlinePairs == 0 && e.match(/^\s*-?[0-9\.\,]+\s?$/)) {
              return "number";
            }
            if (t.inlinePairs > 0 && e.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/)) {
              return "number";
            }
            if (e.match(r)) {
              return "keyword";
            }
          }
          if (!t.pair && e.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)) {
            t.pair = true;
            t.keyCol = e.indentation();
            return "atom";
          }
          if (t.pair && e.match(/^:\s*/)) {
            t.pairStart = true;
            return "meta";
          }
          t.pairStart = false;
          t.escaped = a == "\\";
          e.next();
          return null;
        },
        startState: function () {
          return { pair: false, pairStart: false, keyCol: 0, inlinePairs: 0, inlineList: 0, literal: false, escaped: false };
        },
        languageData: { commentTokens: { line: "#" } },
      };
    },
  },
]);
