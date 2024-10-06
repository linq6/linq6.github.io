"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1294],
  {
    21294: (e, r, t) => {
      t.r(r);
      t.d(r, { haskell: () => w });
      function n(e, r, t) {
        r(t);
        return t(e, r);
      }
      var a = /[a-z_]/;
      var i = /[A-Z]/;
      var o = /\d/;
      var l = /[0-9A-Fa-f]/;
      var u = /[0-7]/;
      var s = /[a-z_A-Z0-9'\xa1-\uffff]/;
      var f = /[-!#$%&*+.\/<=>?@\\^|~:]/;
      var c = /[(),;[\]`{}]/;
      var d = /[ \t\v\f]/;
      function p(e, r) {
        if (e.eatWhile(d)) {
          return null;
        }
        var t = e.next();
        if (c.test(t)) {
          if (t == "{" && e.eat("-")) {
            var p = "comment";
            if (e.eat("#")) {
              p = "meta";
            }
            return n(e, r, m(p, 1));
          }
          return null;
        }
        if (t == "'") {
          if (e.eat("\\")) {
            e.next();
          } else {
            e.next();
          }
          if (e.eat("'")) {
            return "string";
          }
          return "error";
        }
        if (t == '"') {
          return n(e, r, h);
        }
        if (i.test(t)) {
          e.eatWhile(s);
          if (e.eat(".")) {
            return "qualifier";
          }
          return "type";
        }
        if (a.test(t)) {
          e.eatWhile(s);
          return "variable";
        }
        if (o.test(t)) {
          if (t == "0") {
            if (e.eat(/[xX]/)) {
              e.eatWhile(l);
              return "integer";
            }
            if (e.eat(/[oO]/)) {
              e.eatWhile(u);
              return "number";
            }
          }
          e.eatWhile(o);
          var p = "number";
          if (e.match(/^\.\d+/)) {
            p = "number";
          }
          if (e.eat(/[eE]/)) {
            p = "number";
            e.eat(/[-+]/);
            e.eatWhile(o);
          }
          return p;
        }
        if (t == "." && e.eat(".")) return "keyword";
        if (f.test(t)) {
          if (t == "-" && e.eat(/-/)) {
            e.eatWhile(/-/);
            if (!e.eat(f)) {
              e.skipToEnd();
              return "comment";
            }
          }
          e.eatWhile(f);
          return "variable";
        }
        return "error";
      }
      function m(e, r) {
        if (r == 0) {
          return p;
        }
        return function (t, n) {
          var a = r;
          while (!t.eol()) {
            var i = t.next();
            if (i == "{" && t.eat("-")) {
              ++a;
            } else if (i == "-" && t.eat("}")) {
              --a;
              if (a == 0) {
                n(p);
                return e;
              }
            }
          }
          n(m(e, a));
          return e;
        };
      }
      function h(e, r) {
        while (!e.eol()) {
          var t = e.next();
          if (t == '"') {
            r(p);
            return "string";
          }
          if (t == "\\") {
            if (e.eol() || e.eat(d)) {
              r(g);
              return "string";
            }
            if (e.eat("&")) {
            } else {
              e.next();
            }
          }
        }
        r(p);
        return "error";
      }
      function g(e, r) {
        if (e.eat("\\")) {
          return n(e, r, h);
        }
        e.next();
        r(p);
        return "error";
      }
      var v = (function () {
        var e = {};
        function r(r) {
          return function () {
            for (var t = 0; t < arguments.length; t++) e[arguments[t]] = r;
          };
        }
        r("keyword")(
          "case",
          "class",
          "data",
          "default",
          "deriving",
          "do",
          "else",
          "foreign",
          "if",
          "import",
          "in",
          "infix",
          "infixl",
          "infixr",
          "instance",
          "let",
          "module",
          "newtype",
          "of",
          "then",
          "type",
          "where",
          "_"
        );
        r("keyword")("..", ":", "::", "=", "\\", "<-", "->", "@", "~", "=>");
        r("builtin")(
          "!!",
          "$!",
          "$",
          "&&",
          "+",
          "++",
          "-",
          ".",
          "/",
          "/=",
          "<",
          "<*",
          "<=",
          "<$>",
          "<*>",
          "=<<",
          "==",
          ">",
          ">=",
          ">>",
          ">>=",
          "^",
          "^^",
          "||",
          "*",
          "*>",
          "**"
        );
        r("builtin")(
          "Applicative",
          "Bool",
          "Bounded",
          "Char",
          "Double",
          "EQ",
          "Either",
          "Enum",
          "Eq",
          "False",
          "FilePath",
          "Float",
          "Floating",
          "Fractional",
          "Functor",
          "GT",
          "IO",
          "IOError",
          "Int",
          "Integer",
          "Integral",
          "Just",
          "LT",
          "Left",
          "Maybe",
          "Monad",
          "Nothing",
          "Num",
          "Ord",
          "Ordering",
          "Rational",
          "Read",
          "ReadS",
          "Real",
          "RealFloat",
          "RealFrac",
          "Right",
          "Show",
          "ShowS",
          "String",
          "True"
        );
        r("builtin")(
          "abs",
          "acos",
          "acosh",
          "all",
          "and",
          "any",
          "appendFile",
          "asTypeOf",
          "asin",
          "asinh",
          "atan",
          "atan2",
          "atanh",
          "break",
          "catch",
          "ceiling",
          "compare",
          "concat",
          "concatMap",
          "const",
          "cos",
          "cosh",
          "curry",
          "cycle",
          "decodeFloat",
          "div",
          "divMod",
          "drop",
          "dropWhile",
          "either",
          "elem",
          "encodeFloat",
          "enumFrom",
          "enumFromThen",
          "enumFromThenTo",
          "enumFromTo",
          "error",
          "even",
          "exp",
          "exponent",
          "fail",
          "filter",
          "flip",
          "floatDigits",
          "floatRadix",
          "floatRange",
          "floor",
          "fmap",
          "foldl",
          "foldl1",
          "foldr",
          "foldr1",
          "fromEnum",
          "fromInteger",
          "fromIntegral",
          "fromRational",
          "fst",
          "gcd",
          "getChar",
          "getContents",
          "getLine",
          "head",
          "id",
          "init",
          "interact",
          "ioError",
          "isDenormalized",
          "isIEEE",
          "isInfinite",
          "isNaN",
          "isNegativeZero",
          "iterate",
          "last",
          "lcm",
          "length",
          "lex",
          "lines",
          "log",
          "logBase",
          "lookup",
          "map",
          "mapM",
          "mapM_",
          "max",
          "maxBound",
          "maximum",
          "maybe",
          "min",
          "minBound",
          "minimum",
          "mod",
          "negate",
          "not",
          "notElem",
          "null",
          "odd",
          "or",
          "otherwise",
          "pi",
          "pred",
          "print",
          "product",
          "properFraction",
          "pure",
          "putChar",
          "putStr",
          "putStrLn",
          "quot",
          "quotRem",
          "read",
          "readFile",
          "readIO",
          "readList",
          "readLn",
          "readParen",
          "reads",
          "readsPrec",
          "realToFrac",
          "recip",
          "rem",
          "repeat",
          "replicate",
          "return",
          "reverse",
          "round",
          "scaleFloat",
          "scanl",
          "scanl1",
          "scanr",
          "scanr1",
          "seq",
          "sequence",
          "sequence_",
          "show",
          "showChar",
          "showList",
          "showParen",
          "showString",
          "shows",
          "showsPrec",
          "significand",
          "signum",
          "sin",
          "sinh",
          "snd",
          "span",
          "splitAt",
          "sqrt",
          "subtract",
          "succ",
          "sum",
          "tail",
          "take",
          "takeWhile",
          "tan",
          "tanh",
          "toEnum",
          "toInteger",
          "toRational",
          "truncate",
          "uncurry",
          "undefined",
          "unlines",
          "until",
          "unwords",
          "unzip",
          "unzip3",
          "userError",
          "words",
          "writeFile",
          "zip",
          "zip3",
          "zipWith",
          "zipWith3"
        );
        return e;
      })();
      const w = {
        name: "haskell",
        startState: function () {
          return { f: p };
        },
        copyState: function (e) {
          return { f: e.f };
        },
        token: function (e, r) {
          var t = r.f(e, function (e) {
            r.f = e;
          });
          var n = e.current();
          return v.hasOwnProperty(n) ? v[n] : t;
        },
        languageData: { commentTokens: { line: "--", block: { open: "{-", close: "-}" } } },
      };
    },
  },
]);
