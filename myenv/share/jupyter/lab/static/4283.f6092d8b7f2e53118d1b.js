"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [4283],
  {
    34283: (e, t, r) => {
      r.r(t);
      r.d(t, { asciiArmor: () => s });
      function a(e) {
        var t = e.match(/^\s*\S/);
        e.skipToEnd();
        return t ? "error" : null;
      }
      const s = {
        name: "asciiarmor",
        token: function (e, t) {
          var r;
          if (t.state == "top") {
            if (e.sol() && (r = e.match(/^-----BEGIN (.*)?-----\s*$/))) {
              t.state = "headers";
              t.type = r[1];
              return "tag";
            }
            return a(e);
          } else if (t.state == "headers") {
            if (e.sol() && e.match(/^\w+:/)) {
              t.state = "header";
              return "atom";
            } else {
              var s = a(e);
              if (s) t.state = "body";
              return s;
            }
          } else if (t.state == "header") {
            e.skipToEnd();
            t.state = "headers";
            return "string";
          } else if (t.state == "body") {
            if (e.sol() && (r = e.match(/^-----END (.*)?-----\s*$/))) {
              if (r[1] != t.type) return "error";
              t.state = "end";
              return "tag";
            } else {
              if (e.eatWhile(/[A-Za-z0-9+\/=]/)) {
                return null;
              } else {
                e.next();
                return "error";
              }
            }
          } else if (t.state == "end") {
            return a(e);
          }
        },
        blankLine: function (e) {
          if (e.state == "headers") e.state = "body";
        },
        startState: function () {
          return { state: "top", type: null };
        },
      };
    },
  },
]);
