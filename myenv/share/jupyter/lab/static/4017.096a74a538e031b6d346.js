"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [4017],
  {
    4017: (e, t, n) => {
      n.r(t);
      n.d(t, { factor: () => a });
      var r = n(11176);
      const a = (0, r.Q)({
        start: [
          { regex: /#?!.*/, token: "comment" },
          { regex: /"""/, token: "string", next: "string3" },
          { regex: /(STRING:)(\s)/, token: ["keyword", null], next: "string2" },
          { regex: /\S*?"/, token: "string", next: "string" },
          { regex: /(?:0x[\d,a-f]+)|(?:0o[0-7]+)|(?:0b[0,1]+)|(?:\-?\d+.?\d*)(?=\s)/, token: "number" },
          { regex: /((?:GENERIC)|\:?\:)(\s+)(\S+)(\s+)(\()/, token: ["keyword", null, "def", null, "bracket"], next: "stack" },
          { regex: /(M\:)(\s+)(\S+)(\s+)(\S+)/, token: ["keyword", null, "def", null, "tag"] },
          { regex: /USING\:/, token: "keyword", next: "vocabulary" },
          { regex: /(USE\:|IN\:)(\s+)(\S+)(?=\s|$)/, token: ["keyword", null, "tag"] },
          { regex: /(\S+\:)(\s+)(\S+)(?=\s|$)/, token: ["keyword", null, "def"] },
          { regex: /(?:;|\\|t|f|if|loop|while|until|do|PRIVATE>|<PRIVATE|\.|\S*\[|\]|\S*\{|\})(?=\s|$)/, token: "keyword" },
          { regex: /\S+[\)>\.\*\?]+(?=\s|$)/, token: "builtin" },
          { regex: /[\)><]+\S+(?=\s|$)/, token: "builtin" },
          { regex: /(?:[\+\-\=\/\*<>])(?=\s|$)/, token: "keyword" },
          { regex: /\S+/, token: "variable" },
          { regex: /\s+|./, token: null },
        ],
        vocabulary: [
          { regex: /;/, token: "keyword", next: "start" },
          { regex: /\S+/, token: "tag" },
          { regex: /\s+|./, token: null },
        ],
        string: [
          { regex: /(?:[^\\]|\\.)*?"/, token: "string", next: "start" },
          { regex: /.*/, token: "string" },
        ],
        string2: [
          { regex: /^;/, token: "keyword", next: "start" },
          { regex: /.*/, token: "string" },
        ],
        string3: [
          { regex: /(?:[^\\]|\\.)*?"""/, token: "string", next: "start" },
          { regex: /.*/, token: "string" },
        ],
        stack: [
          { regex: /\)/, token: "bracket", next: "start" },
          { regex: /--/, token: "bracket" },
          { regex: /\S+/, token: "meta" },
          { regex: /\s+|./, token: null },
        ],
        languageData: { name: "factor", dontIndentStates: ["start", "vocabulary", "string", "string3", "stack"], commentTokens: { line: "!" } },
      });
    },
    11176: (e, t, n) => {
      n.d(t, { Q: () => r });
      function r(e) {
        a(e, "start");
        var t = {},
          n = e.languageData || {},
          r = false;
        for (var i in e)
          if (i != n && e.hasOwnProperty(i)) {
            var s = (t[i] = []),
              u = e[i];
            for (var d = 0; d < u.length; d++) {
              var k = u[d];
              s.push(new o(k, e));
              if (k.indent || k.dedent) r = true;
            }
          }
        return {
          name: n.name,
          startState: function () {
            return { state: "start", pending: null, indent: r ? [] : null };
          },
          copyState: function (e) {
            var t = { state: e.state, pending: e.pending, indent: e.indent && e.indent.slice(0) };
            if (e.stack) t.stack = e.stack.slice(0);
            return t;
          },
          token: g(t),
          indent: l(t, n),
          languageData: n,
        };
      }
      function a(e, t) {
        if (!e.hasOwnProperty(t)) throw new Error("Undefined state " + t + " in simple mode");
      }
      function i(e, t) {
        if (!e) return /(?:)/;
        var n = "";
        if (e instanceof RegExp) {
          if (e.ignoreCase) n = "i";
          e = e.source;
        } else {
          e = String(e);
        }
        return new RegExp((t === false ? "" : "^") + "(?:" + e + ")", n);
      }
      function s(e) {
        if (!e) return null;
        if (e.apply) return e;
        if (typeof e == "string") return e.replace(/\./g, " ");
        var t = [];
        for (var n = 0; n < e.length; n++) t.push(e[n] && e[n].replace(/\./g, " "));
        return t;
      }
      function o(e, t) {
        if (e.next || e.push) a(t, e.next || e.push);
        this.regex = i(e.regex);
        this.token = s(e.token);
        this.data = e;
      }
      function g(e) {
        return function (t, n) {
          if (n.pending) {
            var r = n.pending.shift();
            if (n.pending.length == 0) n.pending = null;
            t.pos += r.text.length;
            return r.token;
          }
          var a = e[n.state];
          for (var i = 0; i < a.length; i++) {
            var s = a[i];
            var o = (!s.data.sol || t.sol()) && t.match(s.regex);
            if (o) {
              if (s.data.next) {
                n.state = s.data.next;
              } else if (s.data.push) {
                (n.stack || (n.stack = [])).push(n.state);
                n.state = s.data.push;
              } else if (s.data.pop && n.stack && n.stack.length) {
                n.state = n.stack.pop();
              }
              if (s.data.indent) n.indent.push(t.indentation() + t.indentUnit);
              if (s.data.dedent) n.indent.pop();
              var g = s.token;
              if (g && g.apply) g = g(o);
              if (o.length > 2 && s.token && typeof s.token != "string") {
                n.pending = [];
                for (var l = 2; l < o.length; l++) if (o[l]) n.pending.push({ text: o[l], token: s.token[l - 1] });
                t.backUp(o[0].length - (o[1] ? o[1].length : 0));
                return g[0];
              } else if (g && g.join) {
                return g[0];
              } else {
                return g;
              }
            }
          }
          t.next();
          return null;
        };
      }
      function l(e, t) {
        return function (n, r) {
          if (n.indent == null || (t.dontIndentStates && t.doneIndentState.indexOf(n.state) > -1)) return null;
          var a = n.indent.length - 1,
            i = e[n.state];
          e: for (;;) {
            for (var s = 0; s < i.length; s++) {
              var o = i[s];
              if (o.data.dedent && o.data.dedentIfLineStart !== false) {
                var g = o.regex.exec(r);
                if (g && g[0]) {
                  a--;
                  if (o.next || o.push) i = e[o.next || o.push];
                  r = r.slice(g[0].length);
                  continue e;
                }
              }
            }
            break;
          }
          return a < 0 ? 0 : n.indent[a];
        };
      }
    },
  },
]);
