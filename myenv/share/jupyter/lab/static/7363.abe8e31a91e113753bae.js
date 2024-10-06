"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7363],
  {
    57363: (e, t, r) => {
      r.r(t);
      r.d(t, { velocity: () => p });
      function n(e) {
        var t = {},
          r = e.split(" ");
        for (var n = 0; n < r.length; ++n) t[r[n]] = true;
        return t;
      }
      var a = n("#end #else #break #stop #[[ #]] " + "#{end} #{else} #{break} #{stop}");
      var i = n(
        "#if #elseif #foreach #set #include #parse #macro #define #evaluate " +
          "#{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}"
      );
      var s = n(
        "$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent"
      );
      var l = /[+\-*&%=<>!?:\/|]/;
      function o(e, t, r) {
        t.tokenize = r;
        return r(e, t);
      }
      function u(e, t) {
        var r = t.beforeParams;
        t.beforeParams = false;
        var n = e.next();
        if (n == "'" && !t.inString && t.inParams) {
          t.lastTokenWasBuiltin = false;
          return o(e, t, f(n));
        } else if (n == '"') {
          t.lastTokenWasBuiltin = false;
          if (t.inString) {
            t.inString = false;
            return "string";
          } else if (t.inParams) return o(e, t, f(n));
        } else if (/[\[\]{}\(\),;\.]/.test(n)) {
          if (n == "(" && r) t.inParams = true;
          else if (n == ")") {
            t.inParams = false;
            t.lastTokenWasBuiltin = true;
          }
          return null;
        } else if (/\d/.test(n)) {
          t.lastTokenWasBuiltin = false;
          e.eatWhile(/[\w\.]/);
          return "number";
        } else if (n == "#" && e.eat("*")) {
          t.lastTokenWasBuiltin = false;
          return o(e, t, c);
        } else if (n == "#" && e.match(/ *\[ *\[/)) {
          t.lastTokenWasBuiltin = false;
          return o(e, t, k);
        } else if (n == "#" && e.eat("#")) {
          t.lastTokenWasBuiltin = false;
          e.skipToEnd();
          return "comment";
        } else if (n == "$") {
          e.eat("!");
          e.eatWhile(/[\w\d\$_\.{}-]/);
          if (s && s.propertyIsEnumerable(e.current())) {
            return "keyword";
          } else {
            t.lastTokenWasBuiltin = true;
            t.beforeParams = true;
            return "builtin";
          }
        } else if (l.test(n)) {
          t.lastTokenWasBuiltin = false;
          e.eatWhile(l);
          return "operator";
        } else {
          e.eatWhile(/[\w\$_{}@]/);
          var u = e.current();
          if (a && a.propertyIsEnumerable(u)) return "keyword";
          if (
            (i && i.propertyIsEnumerable(u)) ||
            (e.current().match(/^#@?[a-z0-9_]+ *$/i) && e.peek() == "(" && !(i && i.propertyIsEnumerable(u.toLowerCase())))
          ) {
            t.beforeParams = true;
            t.lastTokenWasBuiltin = false;
            return "keyword";
          }
          if (t.inString) {
            t.lastTokenWasBuiltin = false;
            return "string";
          }
          if (e.pos > u.length && e.string.charAt(e.pos - u.length - 1) == "." && t.lastTokenWasBuiltin) return "builtin";
          t.lastTokenWasBuiltin = false;
          return null;
        }
      }
      function f(e) {
        return function (t, r) {
          var n = false,
            a,
            i = false;
          while ((a = t.next()) != null) {
            if (a == e && !n) {
              i = true;
              break;
            }
            if (e == '"' && t.peek() == "$" && !n) {
              r.inString = true;
              i = true;
              break;
            }
            n = !n && a == "\\";
          }
          if (i) r.tokenize = u;
          return "string";
        };
      }
      function c(e, t) {
        var r = false,
          n;
        while ((n = e.next())) {
          if (n == "#" && r) {
            t.tokenize = u;
            break;
          }
          r = n == "*";
        }
        return "comment";
      }
      function k(e, t) {
        var r = 0,
          n;
        while ((n = e.next())) {
          if (n == "#" && r == 2) {
            t.tokenize = u;
            break;
          }
          if (n == "]") r++;
          else if (n != " ") r = 0;
        }
        return "meta";
      }
      const p = {
        name: "velocity",
        startState: function () {
          return { tokenize: u, beforeParams: false, inParams: false, inString: false, lastTokenWasBuiltin: false };
        },
        token: function (e, t) {
          if (e.eatSpace()) return null;
          return t.tokenize(e, t);
        },
        languageData: { commentTokens: { line: "##", block: { open: "#*", close: "*#" } } },
      };
    },
  },
]);
