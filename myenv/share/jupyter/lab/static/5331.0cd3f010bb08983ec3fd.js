"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [5331],
  {
    45331: (t, a, r) => {
      r.r(a);
      r.d(a, { troff: () => i });
      var n = {};
      function e(t) {
        if (t.eatSpace()) return null;
        var a = t.sol();
        var r = t.next();
        if (r === "\\") {
          if (t.match("fB") || t.match("fR") || t.match("fI") || t.match("u") || t.match("d") || t.match("%") || t.match("&")) {
            return "string";
          }
          if (t.match("m[")) {
            t.skipTo("]");
            t.next();
            return "string";
          }
          if (t.match("s+") || t.match("s-")) {
            t.eatWhile(/[\d-]/);
            return "string";
          }
          if (t.match("(") || t.match("*(")) {
            t.eatWhile(/[\w-]/);
            return "string";
          }
          return "string";
        }
        if (a && (r === "." || r === "'")) {
          if (t.eat("\\") && t.eat('"')) {
            t.skipToEnd();
            return "comment";
          }
        }
        if (a && r === ".") {
          if (t.match("B ") || t.match("I ") || t.match("R ")) {
            return "attribute";
          }
          if (t.match("TH ") || t.match("SH ") || t.match("SS ") || t.match("HP ")) {
            t.skipToEnd();
            return "quote";
          }
          if ((t.match(/[A-Z]/) && t.match(/[A-Z]/)) || (t.match(/[a-z]/) && t.match(/[a-z]/))) {
            return "attribute";
          }
        }
        t.eatWhile(/[\w-]/);
        var e = t.current();
        return n.hasOwnProperty(e) ? n[e] : null;
      }
      function c(t, a) {
        return (a.tokens[0] || e)(t, a);
      }
      const i = {
        name: "troff",
        startState: function () {
          return { tokens: [] };
        },
        token: function (t, a) {
          return c(t, a);
        },
      };
    },
  },
]);
