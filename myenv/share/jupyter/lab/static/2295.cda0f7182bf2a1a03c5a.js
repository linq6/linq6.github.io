"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2295],
  {
    22295: (e, t, r) => {
      r.r(t);
      r.d(t, { ez80: () => l, z80: () => n });
      function i(e) {
        var t, r;
        if (e) {
          t =
            /^(exx?|(ld|cp)([di]r?)?|[lp]ea|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|[de]i|halt|im|in([di]mr?|ir?|irx|2r?)|ot(dmr?|[id]rx|imr?)|out(0?|[di]r?|[di]2r?)|tst(io)?|slp)(\.([sl]?i)?[sl])?\b/i;
          r = /^(((call|j[pr]|rst|ret[in]?)(\.([sl]?i)?[sl])?)|(rs|st)mix)\b/i;
        } else {
          t =
            /^(exx?|(ld|cp|in)([di]r?)?|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|rst|[de]i|halt|im|ot[di]r|out[di]?)\b/i;
          r = /^(call|j[pr]|ret[in]?|b_?(call|jump))\b/i;
        }
        var i = /^(af?|bc?|c|de?|e|hl?|l|i[xy]?|r|sp)\b/i;
        var n = /^(n?[zc]|p[oe]?|m)\b/i;
        var l = /^([hl][xy]|i[xy][hl]|slia|sll)\b/i;
        var a = /^([\da-f]+h|[0-7]+o|[01]+b|\d+d?)\b/i;
        return {
          name: "z80",
          startState: function () {
            return { context: 0 };
          },
          token: function (s, c) {
            if (!s.column()) c.context = 0;
            if (s.eatSpace()) return null;
            var u;
            if (s.eatWhile(/\w/)) {
              if (e && s.eat(".")) {
                s.eatWhile(/\w/);
              }
              u = s.current();
              if (s.indentation()) {
                if ((c.context == 1 || c.context == 4) && i.test(u)) {
                  c.context = 4;
                  return "variable";
                }
                if (c.context == 2 && n.test(u)) {
                  c.context = 4;
                  return "variableName.special";
                }
                if (t.test(u)) {
                  c.context = 1;
                  return "keyword";
                } else if (r.test(u)) {
                  c.context = 2;
                  return "keyword";
                } else if (c.context == 4 && a.test(u)) {
                  return "number";
                }
                if (l.test(u)) return "error";
              } else if (s.match(a)) {
                return "number";
              } else {
                return null;
              }
            } else if (s.eat(";")) {
              s.skipToEnd();
              return "comment";
            } else if (s.eat('"')) {
              while ((u = s.next())) {
                if (u == '"') break;
                if (u == "\\") s.next();
              }
              return "string";
            } else if (s.eat("'")) {
              if (s.match(/\\?.'/)) return "number";
            } else if (s.eat(".") || (s.sol() && s.eat("#"))) {
              c.context = 5;
              if (s.eatWhile(/\w/)) return "def";
            } else if (s.eat("$")) {
              if (s.eatWhile(/[\da-f]/i)) return "number";
            } else if (s.eat("%")) {
              if (s.eatWhile(/[01]/)) return "number";
            } else {
              s.next();
            }
            return null;
          },
        };
      }
      const n = i(false);
      const l = i(true);
    },
  },
]);
