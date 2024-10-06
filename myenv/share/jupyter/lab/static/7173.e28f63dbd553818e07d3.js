"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7173],
  {
    67173: (e, t, r) => {
      r.r(t);
      r.d(t, { vb: () => O });
      var n = "error";
      function a(e) {
        return new RegExp("^((" + e.join(")|(") + "))\\b", "i");
      }
      var i = new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]");
      var o = new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]");
      var c = new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))");
      var u = new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))");
      var l = new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))");
      var s = new RegExp("^[_A-Za-z][_A-Za-z0-9]*");
      var f = [
        "class",
        "module",
        "sub",
        "enum",
        "select",
        "while",
        "if",
        "function",
        "get",
        "set",
        "property",
        "try",
        "structure",
        "synclock",
        "using",
        "with",
      ];
      var d = ["else", "elseif", "case", "catch", "finally"];
      var h = ["next", "loop"];
      var m = ["and", "andalso", "or", "orelse", "xor", "in", "not", "is", "isnot", "like"];
      var v = a(m);
      var p = [
        "#const",
        "#else",
        "#elseif",
        "#end",
        "#if",
        "#region",
        "addhandler",
        "addressof",
        "alias",
        "as",
        "byref",
        "byval",
        "cbool",
        "cbyte",
        "cchar",
        "cdate",
        "cdbl",
        "cdec",
        "cint",
        "clng",
        "cobj",
        "compare",
        "const",
        "continue",
        "csbyte",
        "cshort",
        "csng",
        "cstr",
        "cuint",
        "culng",
        "cushort",
        "declare",
        "default",
        "delegate",
        "dim",
        "directcast",
        "each",
        "erase",
        "error",
        "event",
        "exit",
        "explicit",
        "false",
        "for",
        "friend",
        "gettype",
        "goto",
        "handles",
        "implements",
        "imports",
        "infer",
        "inherits",
        "interface",
        "isfalse",
        "istrue",
        "lib",
        "me",
        "mod",
        "mustinherit",
        "mustoverride",
        "my",
        "mybase",
        "myclass",
        "namespace",
        "narrowing",
        "new",
        "nothing",
        "notinheritable",
        "notoverridable",
        "of",
        "off",
        "on",
        "operator",
        "option",
        "optional",
        "out",
        "overloads",
        "overridable",
        "overrides",
        "paramarray",
        "partial",
        "private",
        "protected",
        "public",
        "raiseevent",
        "readonly",
        "redim",
        "removehandler",
        "resume",
        "return",
        "shadows",
        "shared",
        "static",
        "step",
        "stop",
        "strict",
        "then",
        "throw",
        "to",
        "true",
        "trycast",
        "typeof",
        "until",
        "until",
        "when",
        "widening",
        "withevents",
        "writeonly",
      ];
      var b = [
        "object",
        "boolean",
        "char",
        "string",
        "byte",
        "sbyte",
        "short",
        "ushort",
        "int16",
        "uint16",
        "integer",
        "uinteger",
        "int32",
        "uint32",
        "long",
        "ulong",
        "int64",
        "uint64",
        "decimal",
        "single",
        "double",
        "float",
        "date",
        "datetime",
        "intptr",
        "uintptr",
      ];
      var g = a(p);
      var y = a(b);
      var k = '"';
      var w = a(f);
      var x = a(d);
      var I = a(h);
      var z = a(["end"]);
      var L = a(["do"]);
      var E = null;
      function _(e, t) {
        t.currentIndent++;
      }
      function C(e, t) {
        t.currentIndent--;
      }
      function R(e, t) {
        if (e.eatSpace()) {
          return null;
        }
        var r = e.peek();
        if (r === "'") {
          e.skipToEnd();
          return "comment";
        }
        if (e.match(/^((&H)|(&O))?[0-9\.a-f]/i, false)) {
          var a = false;
          if (e.match(/^\d*\.\d+F?/i)) {
            a = true;
          } else if (e.match(/^\d+\.\d*F?/)) {
            a = true;
          } else if (e.match(/^\.\d+F?/)) {
            a = true;
          }
          if (a) {
            e.eat(/J/i);
            return "number";
          }
          var f = false;
          if (e.match(/^&H[0-9a-f]+/i)) {
            f = true;
          } else if (e.match(/^&O[0-7]+/i)) {
            f = true;
          } else if (e.match(/^[1-9]\d*F?/)) {
            e.eat(/J/i);
            f = true;
          } else if (e.match(/^0(?![\dx])/i)) {
            f = true;
          }
          if (f) {
            e.eat(/L/i);
            return "number";
          }
        }
        if (e.match(k)) {
          t.tokenize = j(e.current());
          return t.tokenize(e, t);
        }
        if (e.match(l) || e.match(u)) {
          return null;
        }
        if (e.match(c) || e.match(i) || e.match(v)) {
          return "operator";
        }
        if (e.match(o)) {
          return null;
        }
        if (e.match(L)) {
          _(e, t);
          t.doInCurrentLine = true;
          return "keyword";
        }
        if (e.match(w)) {
          if (!t.doInCurrentLine) _(e, t);
          else t.doInCurrentLine = false;
          return "keyword";
        }
        if (e.match(x)) {
          return "keyword";
        }
        if (e.match(z)) {
          C(e, t);
          C(e, t);
          return "keyword";
        }
        if (e.match(I)) {
          C(e, t);
          return "keyword";
        }
        if (e.match(y)) {
          return "keyword";
        }
        if (e.match(g)) {
          return "keyword";
        }
        if (e.match(s)) {
          return "variable";
        }
        e.next();
        return n;
      }
      function j(e) {
        var t = e.length == 1;
        var r = "string";
        return function (n, a) {
          while (!n.eol()) {
            n.eatWhile(/[^'"]/);
            if (n.match(e)) {
              a.tokenize = R;
              return r;
            } else {
              n.eat(/['"]/);
            }
          }
          if (t) {
            a.tokenize = R;
          }
          return r;
        };
      }
      function F(e, t) {
        var r = t.tokenize(e, t);
        var a = e.current();
        if (a === ".") {
          r = t.tokenize(e, t);
          if (r === "variable") {
            return "variable";
          } else {
            return n;
          }
        }
        var i = "[({".indexOf(a);
        if (i !== -1) {
          _(e, t);
        }
        if (E === "dedent") {
          if (C(e, t)) {
            return n;
          }
        }
        i = "])}".indexOf(a);
        if (i !== -1) {
          if (C(e, t)) {
            return n;
          }
        }
        return r;
      }
      const O = {
        name: "vb",
        startState: function () {
          return { tokenize: R, lastToken: null, currentIndent: 0, nextLineIndent: 0, doInCurrentLine: false };
        },
        token: function (e, t) {
          if (e.sol()) {
            t.currentIndent += t.nextLineIndent;
            t.nextLineIndent = 0;
            t.doInCurrentLine = 0;
          }
          var r = F(e, t);
          t.lastToken = { style: r, content: e.current() };
          return r;
        },
        indent: function (e, t, r) {
          var n = t.replace(/^\s+|\s+$/g, "");
          if (n.match(I) || n.match(z) || n.match(x)) return r.unit * (e.currentIndent - 1);
          if (e.currentIndent < 0) return 0;
          return e.currentIndent * r.unit;
        },
        languageData: {
          closeBrackets: { brackets: ["(", "[", "{", '"'] },
          commentTokens: { line: "'" },
          autocomplete: f.concat(d).concat(h).concat(m).concat(p).concat(b),
        },
      };
    },
  },
]);
