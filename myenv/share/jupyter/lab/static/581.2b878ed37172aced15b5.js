"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [581],
  {
    30581: (e, t, n) => {
      n.r(t);
      n.d(t, { ttcn: () => M });
      function r(e) {
        var t = {},
          n = e.split(" ");
        for (var r = 0; r < n.length; ++r) t[n[r]] = true;
        return t;
      }
      const i = {
        name: "ttcn",
        keywords: r(
          "activate address alive all alt altstep and and4b any" +
            " break case component const continue control deactivate" +
            " display do else encode enumerated except exception" +
            " execute extends extension external for from function" +
            " goto group if import in infinity inout interleave" +
            " label language length log match message mixed mod" +
            " modifies module modulepar mtc noblock not not4b nowait" +
            " of on optional or or4b out override param pattern port" +
            " procedure record recursive rem repeat return runs select" +
            " self sender set signature system template testcase to" +
            " type union value valueof var variant while with xor xor4b"
        ),
        builtin: r(
          "bit2hex bit2int bit2oct bit2str char2int char2oct encvalue" +
            " decomp decvalue float2int float2str hex2bit hex2int" +
            " hex2oct hex2str int2bit int2char int2float int2hex" +
            " int2oct int2str int2unichar isbound ischosen ispresent" +
            " isvalue lengthof log2str oct2bit oct2char oct2hex oct2int" +
            " oct2str regexp replace rnd sizeof str2bit str2float" +
            " str2hex str2int str2oct substr unichar2int unichar2char" +
            " enum2int"
        ),
        types: r("anytype bitstring boolean char charstring default float" + " hexstring integer objid octetstring universal verdicttype timer"),
        timerOps: r("read running start stop timeout"),
        portOps: r("call catch check clear getcall getreply halt raise receive" + " reply send trigger"),
        configOps: r("create connect disconnect done kill killed map unmap"),
        verdictOps: r("getverdict setverdict"),
        sutOps: r("action"),
        functionOps: r("apply derefers refers"),
        verdictConsts: r("error fail inconc none pass"),
        booleanConsts: r("true false"),
        otherConsts: r("null NULL omit"),
        visibilityModifiers: r("private public friend"),
        templateMatch: r("complement ifpresent subset superset permutation"),
        multiLineStrings: true,
      };
      var o = [];
      function a(e) {
        if (e) for (var t in e) if (e.hasOwnProperty(t)) o.push(t);
      }
      a(i.keywords);
      a(i.builtin);
      a(i.timerOps);
      a(i.portOps);
      var s = i.keywords || {},
        l = i.builtin || {},
        u = i.timerOps || {},
        c = i.portOps || {},
        p = i.configOps || {},
        f = i.verdictOps || {},
        m = i.sutOps || {},
        d = i.functionOps || {},
        h = i.verdictConsts || {},
        b = i.booleanConsts || {},
        y = i.otherConsts || {},
        v = i.types || {},
        g = i.visibilityModifiers || {},
        x = i.templateMatch || {},
        k = i.multiLineStrings,
        w = i.indentStatements !== false;
      var O = /[+\-*&@=<>!\/]/;
      var E;
      function I(e, t) {
        var n = e.next();
        if (n == '"' || n == "'") {
          t.tokenize = z(n);
          return t.tokenize(e, t);
        }
        if (/[\[\]{}\(\),;\\:\?\.]/.test(n)) {
          E = n;
          return "punctuation";
        }
        if (n == "#") {
          e.skipToEnd();
          return "atom";
        }
        if (n == "%") {
          e.eatWhile(/\b/);
          return "atom";
        }
        if (/\d/.test(n)) {
          e.eatWhile(/[\w\.]/);
          return "number";
        }
        if (n == "/") {
          if (e.eat("*")) {
            t.tokenize = C;
            return C(e, t);
          }
          if (e.eat("/")) {
            e.skipToEnd();
            return "comment";
          }
        }
        if (O.test(n)) {
          if (n == "@") {
            if (e.match("try") || e.match("catch") || e.match("lazy")) {
              return "keyword";
            }
          }
          e.eatWhile(O);
          return "operator";
        }
        e.eatWhile(/[\w\$_\xa1-\uffff]/);
        var r = e.current();
        if (s.propertyIsEnumerable(r)) return "keyword";
        if (l.propertyIsEnumerable(r)) return "builtin";
        if (u.propertyIsEnumerable(r)) return "def";
        if (p.propertyIsEnumerable(r)) return "def";
        if (f.propertyIsEnumerable(r)) return "def";
        if (c.propertyIsEnumerable(r)) return "def";
        if (m.propertyIsEnumerable(r)) return "def";
        if (d.propertyIsEnumerable(r)) return "def";
        if (h.propertyIsEnumerable(r)) return "string";
        if (b.propertyIsEnumerable(r)) return "string";
        if (y.propertyIsEnumerable(r)) return "string";
        if (v.propertyIsEnumerable(r)) return "typeName.standard";
        if (g.propertyIsEnumerable(r)) return "modifier";
        if (x.propertyIsEnumerable(r)) return "atom";
        return "variable";
      }
      function z(e) {
        return function (t, n) {
          var r = false,
            i,
            o = false;
          while ((i = t.next()) != null) {
            if (i == e && !r) {
              var a = t.peek();
              if (a) {
                a = a.toLowerCase();
                if (a == "b" || a == "h" || a == "o") t.next();
              }
              o = true;
              break;
            }
            r = !r && i == "\\";
          }
          if (o || !(r || k)) n.tokenize = null;
          return "string";
        };
      }
      function C(e, t) {
        var n = false,
          r;
        while ((r = e.next())) {
          if (r == "/" && n) {
            t.tokenize = null;
            break;
          }
          n = r == "*";
        }
        return "comment";
      }
      function L(e, t, n, r, i) {
        this.indented = e;
        this.column = t;
        this.type = n;
        this.align = r;
        this.prev = i;
      }
      function _(e, t, n) {
        var r = e.indented;
        if (e.context && e.context.type == "statement") r = e.context.indented;
        return (e.context = new L(r, t, n, null, e.context));
      }
      function S(e) {
        var t = e.context.type;
        if (t == ")" || t == "]" || t == "}") e.indented = e.context.indented;
        return (e.context = e.context.prev);
      }
      const M = {
        name: "ttcn",
        startState: function () {
          return { tokenize: null, context: new L(0, 0, "top", false), indented: 0, startOfLine: true };
        },
        token: function (e, t) {
          var n = t.context;
          if (e.sol()) {
            if (n.align == null) n.align = false;
            t.indented = e.indentation();
            t.startOfLine = true;
          }
          if (e.eatSpace()) return null;
          E = null;
          var r = (t.tokenize || I)(e, t);
          if (r == "comment") return r;
          if (n.align == null) n.align = true;
          if ((E == ";" || E == ":" || E == ",") && n.type == "statement") {
            S(t);
          } else if (E == "{") _(t, e.column(), "}");
          else if (E == "[") _(t, e.column(), "]");
          else if (E == "(") _(t, e.column(), ")");
          else if (E == "}") {
            while (n.type == "statement") n = S(t);
            if (n.type == "}") n = S(t);
            while (n.type == "statement") n = S(t);
          } else if (E == n.type) S(t);
          else if (w && (((n.type == "}" || n.type == "top") && E != ";") || (n.type == "statement" && E == "newstatement")))
            _(t, e.column(), "statement");
          t.startOfLine = false;
          return r;
        },
        languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: "//", block: { open: "/*", close: "*/" } }, autocomplete: o },
      };
    },
  },
]);
