"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2646],
  {
    22646: (e, t, r) => {
      r.r(t);
      r.d(t, { coffeeScript: () => x });
      var n = "error";
      function i(e) {
        return new RegExp("^((" + e.join(")|(") + "))\\b");
      }
      var f = /^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/;
      var a = /^(?:[()\[\]{},:`=;]|\.\.?\.?)/;
      var o = /^[_A-Za-z$][_A-Za-z$0-9]*/;
      var c = /^@[_A-Za-z$][_A-Za-z$0-9]*/;
      var p = i(["and", "or", "not", "is", "isnt", "in", "instanceof", "typeof"]);
      var s = ["for", "while", "loop", "if", "unless", "else", "switch", "try", "catch", "finally", "class"];
      var u = [
        "break",
        "by",
        "continue",
        "debugger",
        "delete",
        "do",
        "in",
        "of",
        "new",
        "return",
        "then",
        "this",
        "@",
        "throw",
        "when",
        "until",
        "extends",
      ];
      var l = i(s.concat(u));
      s = i(s);
      var v = /^('{3}|\"{3}|['\"])/;
      var d = /^(\/{3}|\/)/;
      var h = ["Infinity", "NaN", "undefined", "null", "true", "false", "on", "off", "yes", "no"];
      var m = i(h);
      function k(e, t) {
        if (e.sol()) {
          if (t.scope.align === null) t.scope.align = false;
          var r = t.scope.offset;
          if (e.eatSpace()) {
            var i = e.indentation();
            if (i > r && t.scope.type == "coffee") {
              return "indent";
            } else if (i < r) {
              return "dedent";
            }
            return null;
          } else {
            if (r > 0) {
              z(e, t);
            }
          }
        }
        if (e.eatSpace()) {
          return null;
        }
        var s = e.peek();
        if (e.match("####")) {
          e.skipToEnd();
          return "comment";
        }
        if (e.match("###")) {
          t.tokenize = g;
          return t.tokenize(e, t);
        }
        if (s === "#") {
          e.skipToEnd();
          return "comment";
        }
        if (e.match(/^-?[0-9\.]/, false)) {
          var u = false;
          if (e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)) {
            u = true;
          }
          if (e.match(/^-?\d+\.\d*/)) {
            u = true;
          }
          if (e.match(/^-?\.\d+/)) {
            u = true;
          }
          if (u) {
            if (e.peek() == ".") {
              e.backUp(1);
            }
            return "number";
          }
          var h = false;
          if (e.match(/^-?0x[0-9a-f]+/i)) {
            h = true;
          }
          if (e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)) {
            h = true;
          }
          if (e.match(/^-?0(?![\dx])/i)) {
            h = true;
          }
          if (h) {
            return "number";
          }
        }
        if (e.match(v)) {
          t.tokenize = y(e.current(), false, "string");
          return t.tokenize(e, t);
        }
        if (e.match(d)) {
          if (e.current() != "/" || e.match(/^.*\//, false)) {
            t.tokenize = y(e.current(), true, "string.special");
            return t.tokenize(e, t);
          } else {
            e.backUp(1);
          }
        }
        if (e.match(f) || e.match(p)) {
          return "operator";
        }
        if (e.match(a)) {
          return "punctuation";
        }
        if (e.match(m)) {
          return "atom";
        }
        if (e.match(c) || (t.prop && e.match(o))) {
          return "property";
        }
        if (e.match(l)) {
          return "keyword";
        }
        if (e.match(o)) {
          return "variable";
        }
        e.next();
        return n;
      }
      function y(e, t, r) {
        return function (n, i) {
          while (!n.eol()) {
            n.eatWhile(/[^'"\/\\]/);
            if (n.eat("\\")) {
              n.next();
              if (t && n.eol()) {
                return r;
              }
            } else if (n.match(e)) {
              i.tokenize = k;
              return r;
            } else {
              n.eat(/['"\/]/);
            }
          }
          if (t) {
            i.tokenize = k;
          }
          return r;
        };
      }
      function g(e, t) {
        while (!e.eol()) {
          e.eatWhile(/[^#]/);
          if (e.match("###")) {
            t.tokenize = k;
            break;
          }
          e.eatWhile("#");
        }
        return "comment";
      }
      function b(e, t, r = "coffee") {
        var n = 0,
          i = false,
          f = null;
        for (var a = t.scope; a; a = a.prev) {
          if (a.type === "coffee" || a.type == "}") {
            n = a.offset + e.indentUnit;
            break;
          }
        }
        if (r !== "coffee") {
          i = null;
          f = e.column() + e.current().length;
        } else if (t.scope.align) {
          t.scope.align = false;
        }
        t.scope = { offset: n, type: r, prev: t.scope, align: i, alignOffset: f };
      }
      function z(e, t) {
        if (!t.scope.prev) return;
        if (t.scope.type === "coffee") {
          var r = e.indentation();
          var n = false;
          for (var i = t.scope; i; i = i.prev) {
            if (r === i.offset) {
              n = true;
              break;
            }
          }
          if (!n) {
            return true;
          }
          while (t.scope.prev && t.scope.offset !== r) {
            t.scope = t.scope.prev;
          }
          return false;
        } else {
          t.scope = t.scope.prev;
          return false;
        }
      }
      function w(e, t) {
        var r = t.tokenize(e, t);
        var i = e.current();
        if (i === "return") {
          t.dedent = true;
        }
        if (((i === "->" || i === "=>") && e.eol()) || r === "indent") {
          b(e, t);
        }
        var f = "[({".indexOf(i);
        if (f !== -1) {
          b(e, t, "])}".slice(f, f + 1));
        }
        if (s.exec(i)) {
          b(e, t);
        }
        if (i == "then") {
          z(e, t);
        }
        if (r === "dedent") {
          if (z(e, t)) {
            return n;
          }
        }
        f = "])}".indexOf(i);
        if (f !== -1) {
          while (t.scope.type == "coffee" && t.scope.prev) t.scope = t.scope.prev;
          if (t.scope.type == i) t.scope = t.scope.prev;
        }
        if (t.dedent && e.eol()) {
          if (t.scope.type == "coffee" && t.scope.prev) t.scope = t.scope.prev;
          t.dedent = false;
        }
        return r == "indent" || r == "dedent" ? null : r;
      }
      const x = {
        name: "coffeescript",
        startState: function () {
          return { tokenize: k, scope: { offset: 0, type: "coffee", prev: null, align: false }, prop: false, dedent: 0 };
        },
        token: function (e, t) {
          var r = t.scope.align === null && t.scope;
          if (r && e.sol()) r.align = false;
          var n = w(e, t);
          if (n && n != "comment") {
            if (r) r.align = true;
            t.prop = n == "punctuation" && e.current() == ".";
          }
          return n;
        },
        indent: function (e, t) {
          if (e.tokenize != k) return 0;
          var r = e.scope;
          var n = t && "])}".indexOf(t.charAt(0)) > -1;
          if (n) while (r.type == "coffee" && r.prev) r = r.prev;
          var i = n && r.type === t.charAt(0);
          if (r.align) return r.alignOffset - (i ? 1 : 0);
          else return (i ? r.prev : r).offset;
        },
        languageData: { commentTokens: { line: "#" } },
      };
    },
  },
]);
