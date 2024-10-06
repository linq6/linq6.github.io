"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2485],
  {
    92485: (e, t, n) => {
      n.r(t);
      n.d(t, { dockerFile: () => f });
      var r = n(11176);
      var a = "from";
      var o = new RegExp("^(\\s*)\\b(" + a + ")\\b", "i");
      var s = ["run", "cmd", "entrypoint", "shell"];
      var l = new RegExp("^(\\s*)(" + s.join("|") + ")(\\s+\\[)", "i");
      var i = "expose";
      var u = new RegExp("^(\\s*)(" + i + ")(\\s+)", "i");
      var g = [
        "arg",
        "from",
        "maintainer",
        "label",
        "env",
        "add",
        "copy",
        "volume",
        "user",
        "workdir",
        "onbuild",
        "stopsignal",
        "healthcheck",
        "shell",
      ];
      var d = [a, i].concat(s).concat(g),
        p = "(" + d.join("|") + ")",
        x = new RegExp("^(\\s*)" + p + "(\\s*)(#.*)?$", "i"),
        k = new RegExp("^(\\s*)" + p + "(\\s+)", "i");
      const f = (0, r.Q)({
        start: [
          { regex: /^\s*#.*$/, sol: true, token: "comment" },
          { regex: o, token: [null, "keyword"], sol: true, next: "from" },
          { regex: x, token: [null, "keyword", null, "error"], sol: true },
          { regex: l, token: [null, "keyword", null], sol: true, next: "array" },
          { regex: u, token: [null, "keyword", null], sol: true, next: "expose" },
          { regex: k, token: [null, "keyword", null], sol: true, next: "arguments" },
          { regex: /./, token: null },
        ],
        from: [
          { regex: /\s*$/, token: null, next: "start" },
          { regex: /(\s*)(#.*)$/, token: [null, "error"], next: "start" },
          { regex: /(\s*\S+\s+)(as)/i, token: [null, "keyword"], next: "start" },
          { token: null, next: "start" },
        ],
        single: [
          { regex: /(?:[^\\']|\\.)/, token: "string" },
          { regex: /'/, token: "string", pop: true },
        ],
        double: [
          { regex: /(?:[^\\"]|\\.)/, token: "string" },
          { regex: /"/, token: "string", pop: true },
        ],
        array: [
          { regex: /\]/, token: null, next: "start" },
          { regex: /"(?:[^\\"]|\\.)*"?/, token: "string" },
        ],
        expose: [
          { regex: /\d+$/, token: "number", next: "start" },
          { regex: /[^\d]+$/, token: null, next: "start" },
          { regex: /\d+/, token: "number" },
          { regex: /[^\d]+/, token: null },
          { token: null, next: "start" },
        ],
        arguments: [
          { regex: /^\s*#.*$/, sol: true, token: "comment" },
          { regex: /"(?:[^\\"]|\\.)*"?$/, token: "string", next: "start" },
          { regex: /"/, token: "string", push: "double" },
          { regex: /'(?:[^\\']|\\.)*'?$/, token: "string", next: "start" },
          { regex: /'/, token: "string", push: "single" },
          { regex: /[^#"']+[\\`]$/, token: null },
          { regex: /[^#"']+$/, token: null, next: "start" },
          { regex: /[^#"']+/, token: null },
          { token: null, next: "start" },
        ],
        languageData: { commentTokens: { line: "#" } },
      });
    },
    11176: (e, t, n) => {
      n.d(t, { Q: () => r });
      function r(e) {
        a(e, "start");
        var t = {},
          n = e.languageData || {},
          r = false;
        for (var o in e)
          if (o != n && e.hasOwnProperty(o)) {
            var s = (t[o] = []),
              g = e[o];
            for (var d = 0; d < g.length; d++) {
              var p = g[d];
              s.push(new l(p, e));
              if (p.indent || p.dedent) r = true;
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
          token: i(t),
          indent: u(t, n),
          languageData: n,
        };
      }
      function a(e, t) {
        if (!e.hasOwnProperty(t)) throw new Error("Undefined state " + t + " in simple mode");
      }
      function o(e, t) {
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
      function l(e, t) {
        if (e.next || e.push) a(t, e.next || e.push);
        this.regex = o(e.regex);
        this.token = s(e.token);
        this.data = e;
      }
      function i(e) {
        return function (t, n) {
          if (n.pending) {
            var r = n.pending.shift();
            if (n.pending.length == 0) n.pending = null;
            t.pos += r.text.length;
            return r.token;
          }
          var a = e[n.state];
          for (var o = 0; o < a.length; o++) {
            var s = a[o];
            var l = (!s.data.sol || t.sol()) && t.match(s.regex);
            if (l) {
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
              var i = s.token;
              if (i && i.apply) i = i(l);
              if (l.length > 2 && s.token && typeof s.token != "string") {
                n.pending = [];
                for (var u = 2; u < l.length; u++) if (l[u]) n.pending.push({ text: l[u], token: s.token[u - 1] });
                t.backUp(l[0].length - (l[1] ? l[1].length : 0));
                return i[0];
              } else if (i && i.join) {
                return i[0];
              } else {
                return i;
              }
            }
          }
          t.next();
          return null;
        };
      }
      function u(e, t) {
        return function (n, r) {
          if (n.indent == null || (t.dontIndentStates && t.doneIndentState.indexOf(n.state) > -1)) return null;
          var a = n.indent.length - 1,
            o = e[n.state];
          e: for (;;) {
            for (var s = 0; s < o.length; s++) {
              var l = o[s];
              if (l.data.dedent && l.data.dedentIfLineStart !== false) {
                var i = l.regex.exec(r);
                if (i && i[0]) {
                  a--;
                  if (l.next || l.push) o = e[l.next || l.push];
                  r = r.slice(i[0].length);
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
