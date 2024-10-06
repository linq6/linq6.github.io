"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1550],
  {
    71550: (r, t, n) => {
      n.r(t);
      n.d(t, { http: () => f });
      function e(r, t) {
        r.skipToEnd();
        t.cur = s;
        return "error";
      }
      function u(r, t) {
        if (r.match(/^HTTP\/\d\.\d/)) {
          t.cur = c;
          return "keyword";
        } else if (r.match(/^[A-Z]+/) && /[ \t]/.test(r.peek())) {
          t.cur = o;
          return "keyword";
        } else {
          return e(r, t);
        }
      }
      function c(r, t) {
        var n = r.match(/^\d+/);
        if (!n) return e(r, t);
        t.cur = i;
        var u = Number(n[0]);
        if (u >= 100 && u < 400) {
          return "atom";
        } else {
          return "error";
        }
      }
      function i(r, t) {
        r.skipToEnd();
        t.cur = s;
        return null;
      }
      function o(r, t) {
        r.eatWhile(/\S/);
        t.cur = a;
        return "string.special";
      }
      function a(r, t) {
        if (r.match(/^HTTP\/\d\.\d$/)) {
          t.cur = s;
          return "keyword";
        } else {
          return e(r, t);
        }
      }
      function s(r) {
        if (r.sol() && !r.eat(/[ \t]/)) {
          if (r.match(/^.*?:/)) {
            return "atom";
          } else {
            r.skipToEnd();
            return "error";
          }
        } else {
          r.skipToEnd();
          return "string";
        }
      }
      function l(r) {
        r.skipToEnd();
        return null;
      }
      const f = {
        name: "http",
        token: function (r, t) {
          var n = t.cur;
          if (n != s && n != l && r.eatSpace()) return null;
          return n(r, t);
        },
        blankLine: function (r) {
          r.cur = l;
        },
        startState: function () {
          return { cur: u };
        },
      };
    },
  },
]);
