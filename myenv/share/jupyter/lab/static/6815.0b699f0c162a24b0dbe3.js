"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [6815],
  {
    96815: (e, t, n) => {
      n.r(t);
      n.d(t, { xQuery: () => w });
      var r = (function () {
        function e(e) {
          return { type: e, style: "keyword" };
        }
        var t = e("operator"),
          n = { type: "atom", style: "atom" },
          r = { type: "punctuation", style: null },
          i = { type: "axis_specifier", style: "qualifier" };
        var a = { ",": r };
        var s = [
          "after",
          "all",
          "allowing",
          "ancestor",
          "ancestor-or-self",
          "any",
          "array",
          "as",
          "ascending",
          "at",
          "attribute",
          "base-uri",
          "before",
          "boundary-space",
          "by",
          "case",
          "cast",
          "castable",
          "catch",
          "child",
          "collation",
          "comment",
          "construction",
          "contains",
          "content",
          "context",
          "copy",
          "copy-namespaces",
          "count",
          "decimal-format",
          "declare",
          "default",
          "delete",
          "descendant",
          "descendant-or-self",
          "descending",
          "diacritics",
          "different",
          "distance",
          "document",
          "document-node",
          "element",
          "else",
          "empty",
          "empty-sequence",
          "encoding",
          "end",
          "entire",
          "every",
          "exactly",
          "except",
          "external",
          "first",
          "following",
          "following-sibling",
          "for",
          "from",
          "ftand",
          "ftnot",
          "ft-option",
          "ftor",
          "function",
          "fuzzy",
          "greatest",
          "group",
          "if",
          "import",
          "in",
          "inherit",
          "insensitive",
          "insert",
          "instance",
          "intersect",
          "into",
          "invoke",
          "is",
          "item",
          "language",
          "last",
          "lax",
          "least",
          "let",
          "levels",
          "lowercase",
          "map",
          "modify",
          "module",
          "most",
          "namespace",
          "next",
          "no",
          "node",
          "nodes",
          "no-inherit",
          "no-preserve",
          "not",
          "occurs",
          "of",
          "only",
          "option",
          "order",
          "ordered",
          "ordering",
          "paragraph",
          "paragraphs",
          "parent",
          "phrase",
          "preceding",
          "preceding-sibling",
          "preserve",
          "previous",
          "processing-instruction",
          "relationship",
          "rename",
          "replace",
          "return",
          "revalidation",
          "same",
          "satisfies",
          "schema",
          "schema-attribute",
          "schema-element",
          "score",
          "self",
          "sensitive",
          "sentence",
          "sentences",
          "sequence",
          "skip",
          "sliding",
          "some",
          "stable",
          "start",
          "stemming",
          "stop",
          "strict",
          "strip",
          "switch",
          "text",
          "then",
          "thesaurus",
          "times",
          "to",
          "transform",
          "treat",
          "try",
          "tumbling",
          "type",
          "typeswitch",
          "union",
          "unordered",
          "update",
          "updating",
          "uppercase",
          "using",
          "validate",
          "value",
          "variable",
          "version",
          "weight",
          "when",
          "where",
          "wildcards",
          "window",
          "with",
          "without",
          "word",
          "words",
          "xquery",
        ];
        for (var o = 0, l = s.length; o < l; o++) {
          a[s[o]] = e(s[o]);
        }
        var u = [
          "xs:anyAtomicType",
          "xs:anySimpleType",
          "xs:anyType",
          "xs:anyURI",
          "xs:base64Binary",
          "xs:boolean",
          "xs:byte",
          "xs:date",
          "xs:dateTime",
          "xs:dateTimeStamp",
          "xs:dayTimeDuration",
          "xs:decimal",
          "xs:double",
          "xs:duration",
          "xs:ENTITIES",
          "xs:ENTITY",
          "xs:float",
          "xs:gDay",
          "xs:gMonth",
          "xs:gMonthDay",
          "xs:gYear",
          "xs:gYearMonth",
          "xs:hexBinary",
          "xs:ID",
          "xs:IDREF",
          "xs:IDREFS",
          "xs:int",
          "xs:integer",
          "xs:item",
          "xs:java",
          "xs:language",
          "xs:long",
          "xs:Name",
          "xs:NCName",
          "xs:negativeInteger",
          "xs:NMTOKEN",
          "xs:NMTOKENS",
          "xs:nonNegativeInteger",
          "xs:nonPositiveInteger",
          "xs:normalizedString",
          "xs:NOTATION",
          "xs:numeric",
          "xs:positiveInteger",
          "xs:precisionDecimal",
          "xs:QName",
          "xs:short",
          "xs:string",
          "xs:time",
          "xs:token",
          "xs:unsignedByte",
          "xs:unsignedInt",
          "xs:unsignedLong",
          "xs:unsignedShort",
          "xs:untyped",
          "xs:untypedAtomic",
          "xs:yearMonthDuration",
        ];
        for (var o = 0, l = u.length; o < l; o++) {
          a[u[o]] = n;
        }
        var c = [
          "eq",
          "ne",
          "lt",
          "le",
          "gt",
          "ge",
          ":=",
          "=",
          ">",
          ">=",
          "<",
          "<=",
          ".",
          "|",
          "?",
          "and",
          "or",
          "div",
          "idiv",
          "mod",
          "*",
          "/",
          "+",
          "-",
        ];
        for (var o = 0, l = c.length; o < l; o++) {
          a[c[o]] = t;
        }
        var f = [
          "self::",
          "attribute::",
          "child::",
          "descendant::",
          "descendant-or-self::",
          "parent::",
          "ancestor::",
          "ancestor-or-self::",
          "following::",
          "preceding::",
          "following-sibling::",
          "preceding-sibling::",
        ];
        for (var o = 0, l = f.length; o < l; o++) {
          a[f[o]] = i;
        }
        return a;
      })();
      function i(e, t, n) {
        t.tokenize = n;
        return n(e, t);
      }
      function a(e, t) {
        var n = e.next(),
          a = false,
          c = y(e);
        if (n == "<") {
          if (e.match("!--", true)) return i(e, t, f);
          if (e.match("![CDATA", false)) {
            t.tokenize = p;
            return "tag";
          }
          if (e.match("?", false)) {
            return i(e, t, m);
          }
          var x = e.eat("/");
          e.eatSpace();
          var h = "",
            v;
          while ((v = e.eat(/[^\s\u00a0=<>\"\'\/?]/))) h += v;
          return i(e, t, u(h, x));
        } else if (n == "{") {
          k(t, { type: "codeblock" });
          return null;
        } else if (n == "}") {
          b(t);
          return null;
        } else if (g(t)) {
          if (n == ">") return "tag";
          else if (n == "/" && e.eat(">")) {
            b(t);
            return "tag";
          } else return "variable";
        } else if (/\d/.test(n)) {
          e.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/);
          return "atom";
        } else if (n === "(" && e.eat(":")) {
          k(t, { type: "comment" });
          return i(e, t, s);
        } else if (!c && (n === '"' || n === "'")) return i(e, t, o(n));
        else if (n === "$") {
          return i(e, t, l);
        } else if (n === ":" && e.eat("=")) {
          return "keyword";
        } else if (n === "(") {
          k(t, { type: "paren" });
          return null;
        } else if (n === ")") {
          b(t);
          return null;
        } else if (n === "[") {
          k(t, { type: "bracket" });
          return null;
        } else if (n === "]") {
          b(t);
          return null;
        } else {
          var w = r.propertyIsEnumerable(n) && r[n];
          if (c && n === '"') while (e.next() !== '"') {}
          if (c && n === "'") while (e.next() !== "'") {}
          if (!w) e.eatWhile(/[\w\$_-]/);
          var z = e.eat(":");
          if (!e.eat(":") && z) {
            e.eatWhile(/[\w\$_-]/);
          }
          if (e.match(/^[ \t]*\(/, false)) {
            a = true;
          }
          var I = e.current();
          w = r.propertyIsEnumerable(I) && r[I];
          if (a && !w) w = { type: "function_call", style: "def" };
          if (d(t)) {
            b(t);
            return "variable";
          }
          if (I == "element" || I == "attribute" || w.type == "axis_specifier") k(t, { type: "xmlconstructor" });
          return w ? w.style : "variable";
        }
      }
      function s(e, t) {
        var n = false,
          r = false,
          i = 0,
          a;
        while ((a = e.next())) {
          if (a == ")" && n) {
            if (i > 0) i--;
            else {
              b(t);
              break;
            }
          } else if (a == ":" && r) {
            i++;
          }
          n = a == ":";
          r = a == "(";
        }
        return "comment";
      }
      function o(e, t) {
        return function (n, r) {
          var i;
          if (h(r) && n.current() == e) {
            b(r);
            if (t) r.tokenize = t;
            return "string";
          }
          k(r, { type: "string", name: e, tokenize: o(e, t) });
          if (n.match("{", false) && x(r)) {
            r.tokenize = a;
            return "string";
          }
          while ((i = n.next())) {
            if (i == e) {
              b(r);
              if (t) r.tokenize = t;
              break;
            } else {
              if (n.match("{", false) && x(r)) {
                r.tokenize = a;
                return "string";
              }
            }
          }
          return "string";
        };
      }
      function l(e, t) {
        var n = /[\w\$_-]/;
        if (e.eat('"')) {
          while (e.next() !== '"') {}
          e.eat(":");
        } else {
          e.eatWhile(n);
          if (!e.match(":=", false)) e.eat(":");
        }
        e.eatWhile(n);
        t.tokenize = a;
        return "variable";
      }
      function u(e, t) {
        return function (n, r) {
          n.eatSpace();
          if (t && n.eat(">")) {
            b(r);
            r.tokenize = a;
            return "tag";
          }
          if (!n.eat("/")) k(r, { type: "tag", name: e, tokenize: a });
          if (!n.eat(">")) {
            r.tokenize = c;
            return "tag";
          } else {
            r.tokenize = a;
          }
          return "tag";
        };
      }
      function c(e, t) {
        var n = e.next();
        if (n == "/" && e.eat(">")) {
          if (x(t)) b(t);
          if (g(t)) b(t);
          return "tag";
        }
        if (n == ">") {
          if (x(t)) b(t);
          return "tag";
        }
        if (n == "=") return null;
        if (n == '"' || n == "'") return i(e, t, o(n, c));
        if (!x(t)) k(t, { type: "attribute", tokenize: c });
        e.eat(/[a-zA-Z_:]/);
        e.eatWhile(/[-a-zA-Z0-9_:.]/);
        e.eatSpace();
        if (e.match(">", false) || e.match("/", false)) {
          b(t);
          t.tokenize = a;
        }
        return "attribute";
      }
      function f(e, t) {
        var n;
        while ((n = e.next())) {
          if (n == "-" && e.match("->", true)) {
            t.tokenize = a;
            return "comment";
          }
        }
      }
      function p(e, t) {
        var n;
        while ((n = e.next())) {
          if (n == "]" && e.match("]", true)) {
            t.tokenize = a;
            return "comment";
          }
        }
      }
      function m(e, t) {
        var n;
        while ((n = e.next())) {
          if (n == "?" && e.match(">", true)) {
            t.tokenize = a;
            return "processingInstruction";
          }
        }
      }
      function g(e) {
        return v(e, "tag");
      }
      function x(e) {
        return v(e, "attribute");
      }
      function d(e) {
        return v(e, "xmlconstructor");
      }
      function h(e) {
        return v(e, "string");
      }
      function y(e) {
        if (e.current() === '"') return e.match(/^[^\"]+\"\:/, false);
        else if (e.current() === "'") return e.match(/^[^\"]+\'\:/, false);
        else return false;
      }
      function v(e, t) {
        return e.stack.length && e.stack[e.stack.length - 1].type == t;
      }
      function k(e, t) {
        e.stack.push(t);
      }
      function b(e) {
        e.stack.pop();
        var t = e.stack.length && e.stack[e.stack.length - 1].tokenize;
        e.tokenize = t || a;
      }
      const w = {
        name: "xquery",
        startState: function () {
          return { tokenize: a, cc: [], stack: [] };
        },
        token: function (e, t) {
          if (e.eatSpace()) return null;
          var n = t.tokenize(e, t);
          return n;
        },
        languageData: { commentTokens: { block: { open: "(:", close: ":)" } } },
      };
    },
  },
]);
