"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7112],
  {
    77112: (e, t, r) => {
      r.r(t);
      r.d(t, { mumps: () => f });
      function n(e) {
        return new RegExp("^((" + e.join(")|(") + "))\\b", "i");
      }
      var a = new RegExp("^[\\+\\-\\*/&#!_?\\\\<>=\\'\\[\\]]");
      var o = new RegExp("^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))");
      var $ = new RegExp("^[\\.,:]");
      var i = new RegExp("[()]");
      var c = new RegExp("^[%A-Za-z][A-Za-z0-9]*");
      var l = [
        "break",
        "close",
        "do",
        "else",
        "for",
        "goto",
        "halt",
        "hang",
        "if",
        "job",
        "kill",
        "lock",
        "merge",
        "new",
        "open",
        "quit",
        "read",
        "set",
        "tcommit",
        "trollback",
        "tstart",
        "use",
        "view",
        "write",
        "xecute",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "q",
        "r",
        "s",
        "tc",
        "tro",
        "ts",
        "u",
        "v",
        "w",
        "x",
      ];
      var s = [
        "\\$ascii",
        "\\$char",
        "\\$data",
        "\\$ecode",
        "\\$estack",
        "\\$etrap",
        "\\$extract",
        "\\$find",
        "\\$fnumber",
        "\\$get",
        "\\$horolog",
        "\\$io",
        "\\$increment",
        "\\$job",
        "\\$justify",
        "\\$length",
        "\\$name",
        "\\$next",
        "\\$order",
        "\\$piece",
        "\\$qlength",
        "\\$qsubscript",
        "\\$query",
        "\\$quit",
        "\\$random",
        "\\$reverse",
        "\\$select",
        "\\$stack",
        "\\$test",
        "\\$text",
        "\\$translate",
        "\\$view",
        "\\$x",
        "\\$y",
        "\\$a",
        "\\$c",
        "\\$d",
        "\\$e",
        "\\$ec",
        "\\$es",
        "\\$et",
        "\\$f",
        "\\$fn",
        "\\$g",
        "\\$h",
        "\\$i",
        "\\$j",
        "\\$l",
        "\\$n",
        "\\$na",
        "\\$o",
        "\\$p",
        "\\$q",
        "\\$ql",
        "\\$qs",
        "\\$r",
        "\\$re",
        "\\$s",
        "\\$st",
        "\\$t",
        "\\$tr",
        "\\$v",
        "\\$z",
      ];
      var m = n(s);
      var u = n(l);
      function d(e, t) {
        if (e.sol()) {
          t.label = true;
          t.commandMode = 0;
        }
        var r = e.peek();
        if (r == " " || r == "\t") {
          t.label = false;
          if (t.commandMode == 0) t.commandMode = 1;
          else if (t.commandMode < 0 || t.commandMode == 2) t.commandMode = 0;
        } else if (r != "." && t.commandMode > 0) {
          if (r == ":") t.commandMode = -1;
          else t.commandMode = 2;
        }
        if (r === "(" || r === "\t") t.label = false;
        if (r === ";") {
          e.skipToEnd();
          return "comment";
        }
        if (e.match(/^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/)) return "number";
        if (r == '"') {
          if (e.skipTo('"')) {
            e.next();
            return "string";
          } else {
            e.skipToEnd();
            return "error";
          }
        }
        if (e.match(o) || e.match(a)) return "operator";
        if (e.match($)) return null;
        if (i.test(r)) {
          e.next();
          return "bracket";
        }
        if (t.commandMode > 0 && e.match(u)) return "controlKeyword";
        if (e.match(m)) return "builtin";
        if (e.match(c)) return "variable";
        if (r === "$" || r === "^") {
          e.next();
          return "builtin";
        }
        if (r === "@") {
          e.next();
          return "string.special";
        }
        if (/[\w%]/.test(r)) {
          e.eatWhile(/[\w%]/);
          return "variable";
        }
        e.next();
        return "error";
      }
      const f = {
        name: "mumps",
        startState: function () {
          return { label: false, commandMode: 0 };
        },
        token: function (e, t) {
          var r = d(e, t);
          if (t.label) return "tag";
          return r;
        },
      };
    },
  },
]);
