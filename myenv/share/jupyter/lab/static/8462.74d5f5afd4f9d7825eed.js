"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [8462],
  {
    57161: (t, e, n) => {
      n.r(e);
      n.d(e, { mangle: () => r });
      function r() {
        return {
          mangle: false,
          walkTokens(t) {
            if (t.type !== "link") {
              return;
            }
            if (!t.href.startsWith("mailto:")) {
              return;
            }
            const e = t.href.substring(7);
            const n = o(e);
            t.href = `mailto:${n}`;
            if (t.tokens.length !== 1 || t.tokens[0].type !== "text" || t.tokens[0].text !== e) {
              return;
            }
            t.text = n;
            t.tokens[0].text = n;
          },
        };
      }
      function o(t) {
        let e = "",
          n,
          r;
        const o = t.length;
        for (n = 0; n < o; n++) {
          r = t.charCodeAt(n);
          if (Math.random() > 0.5) {
            r = "x" + r.toString(16);
          }
          e += "&#" + r + ";";
        }
        return e;
      }
    },
  },
]);
