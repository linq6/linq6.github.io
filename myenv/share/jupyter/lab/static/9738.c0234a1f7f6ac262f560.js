"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [9738],
  {
    39738: (e, t, r) => {
      r.r(t);
      r.d(t, { elm: () => g });
      function n(e, t, r) {
        t(r);
        return r(e, t);
      }
      var i = /[a-z]/;
      var a = /[A-Z]/;
      var u = /[a-zA-Z0-9_]/;
      var o = /[0-9]/;
      var f = /[0-9A-Fa-f]/;
      var l = /[-&*+.\\/<>=?^|:]/;
      var s = /[(),[\]{}]/;
      var c = /[ \v\f]/;
      function p() {
        return function (e, t) {
          if (e.eatWhile(c)) {
            return null;
          }
          var r = e.next();
          if (s.test(r)) {
            return r === "{" && e.eat("-") ? n(e, t, h(1)) : r === "[" && e.match("glsl|") ? n(e, t, w) : "builtin";
          }
          if (r === "'") {
            return n(e, t, m);
          }
          if (r === '"') {
            return e.eat('"') ? (e.eat('"') ? n(e, t, v) : "string") : n(e, t, k);
          }
          if (a.test(r)) {
            e.eatWhile(u);
            return "type";
          }
          if (i.test(r)) {
            var p = e.pos === 1;
            e.eatWhile(u);
            return p ? "def" : "variable";
          }
          if (o.test(r)) {
            if (r === "0") {
              if (e.eat(/[xX]/)) {
                e.eatWhile(f);
                return "number";
              }
            } else {
              e.eatWhile(o);
            }
            if (e.eat(".")) {
              e.eatWhile(o);
            }
            if (e.eat(/[eE]/)) {
              e.eat(/[-+]/);
              e.eatWhile(o);
            }
            return "number";
          }
          if (l.test(r)) {
            if (r === "-" && e.eat("-")) {
              e.skipToEnd();
              return "comment";
            }
            e.eatWhile(l);
            return "keyword";
          }
          if (r === "_") {
            return "keyword";
          }
          return "error";
        };
      }
      function h(e) {
        if (e == 0) {
          return p();
        }
        return function (t, r) {
          while (!t.eol()) {
            var n = t.next();
            if (n == "{" && t.eat("-")) {
              ++e;
            } else if (n == "-" && t.eat("}")) {
              --e;
              if (e === 0) {
                r(p());
                return "comment";
              }
            }
          }
          r(h(e));
          return "comment";
        };
      }
      function v(e, t) {
        while (!e.eol()) {
          var r = e.next();
          if (r === '"' && e.eat('"') && e.eat('"')) {
            t(p());
            return "string";
          }
        }
        return "string";
      }
      function k(e, t) {
        while (e.skipTo('\\"')) {
          e.next();
          e.next();
        }
        if (e.skipTo('"')) {
          e.next();
          t(p());
          return "string";
        }
        e.skipToEnd();
        t(p());
        return "error";
      }
      function m(e, t) {
        while (e.skipTo("\\'")) {
          e.next();
          e.next();
        }
        if (e.skipTo("'")) {
          e.next();
          t(p());
          return "string";
        }
        e.skipToEnd();
        t(p());
        return "error";
      }
      function w(e, t) {
        while (!e.eol()) {
          var r = e.next();
          if (r === "|" && e.eat("]")) {
            t(p());
            return "string";
          }
        }
        return "string";
      }
      var x = {
        case: 1,
        of: 1,
        as: 1,
        if: 1,
        then: 1,
        else: 1,
        let: 1,
        in: 1,
        type: 1,
        alias: 1,
        module: 1,
        where: 1,
        import: 1,
        exposing: 1,
        port: 1,
      };
      const g = {
        name: "elm",
        startState: function () {
          return { f: p() };
        },
        copyState: function (e) {
          return { f: e.f };
        },
        token: function (e, t) {
          var r = t.f(e, function (e) {
            t.f = e;
          });
          var n = e.current();
          return x.hasOwnProperty(n) ? "keyword" : r;
        },
        languageData: { commentTokens: { line: "--" } },
      };
    },
  },
]);
