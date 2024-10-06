"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [6532],
  {
    16532: (e, t, n) => {
      n.r(t);
      n.d(t, { cython: () => c, mkPython: () => s, python: () => u });
      function r(e) {
        return new RegExp("^((" + e.join(")|(") + "))\\b");
      }
      var i = r(["and", "or", "not", "is"]);
      var a = [
        "as",
        "assert",
        "break",
        "class",
        "continue",
        "def",
        "del",
        "elif",
        "else",
        "except",
        "finally",
        "for",
        "from",
        "global",
        "if",
        "import",
        "lambda",
        "pass",
        "raise",
        "return",
        "try",
        "while",
        "with",
        "yield",
        "in",
        "False",
        "True",
      ];
      var o = [
        "abs",
        "all",
        "any",
        "bin",
        "bool",
        "bytearray",
        "callable",
        "chr",
        "classmethod",
        "compile",
        "complex",
        "delattr",
        "dict",
        "dir",
        "divmod",
        "enumerate",
        "eval",
        "filter",
        "float",
        "format",
        "frozenset",
        "getattr",
        "globals",
        "hasattr",
        "hash",
        "help",
        "hex",
        "id",
        "input",
        "int",
        "isinstance",
        "issubclass",
        "iter",
        "len",
        "list",
        "locals",
        "map",
        "max",
        "memoryview",
        "min",
        "next",
        "object",
        "oct",
        "open",
        "ord",
        "pow",
        "property",
        "range",
        "repr",
        "reversed",
        "round",
        "set",
        "setattr",
        "slice",
        "sorted",
        "staticmethod",
        "str",
        "sum",
        "super",
        "tuple",
        "type",
        "vars",
        "zip",
        "__import__",
        "NotImplemented",
        "Ellipsis",
        "__debug__",
      ];
      function l(e) {
        return e.scopes[e.scopes.length - 1];
      }
      function s(e) {
        var t = "error";
        var n = e.delimiters || e.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/;
        var s = [
          e.singleOperators,
          e.doubleOperators,
          e.doubleDelimiters,
          e.tripleDelimiters,
          e.operators || /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/,
        ];
        for (var f = 0; f < s.length; f++) if (!s[f]) s.splice(f--, 1);
        var u = e.hangingIndent;
        var c = a,
          p = o;
        if (e.extra_keywords != undefined) c = c.concat(e.extra_keywords);
        if (e.extra_builtins != undefined) p = p.concat(e.extra_builtins);
        var d = !(e.version && Number(e.version) < 3);
        if (d) {
          var m = e.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
          c = c.concat(["nonlocal", "None", "aiter", "anext", "async", "await", "breakpoint", "match", "case"]);
          p = p.concat(["ascii", "bytes", "exec", "print"]);
          var h = new RegExp("^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|\"{3}|['\"]))", "i");
        } else {
          var m = e.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
          c = c.concat(["exec", "print"]);
          p = p.concat([
            "apply",
            "basestring",
            "buffer",
            "cmp",
            "coerce",
            "execfile",
            "file",
            "intern",
            "long",
            "raw_input",
            "reduce",
            "reload",
            "unichr",
            "unicode",
            "xrange",
            "None",
          ]);
          var h = new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))", "i");
        }
        var b = r(c);
        var y = r(p);
        function g(e, n) {
          var r = e.sol() && n.lastToken != "\\";
          if (r) n.indent = e.indentation();
          if (r && l(n).type == "py") {
            var i = l(n).offset;
            if (e.eatSpace()) {
              var a = e.indentation();
              if (a > i) _(e, n);
              else if (a < i && z(e, n) && e.peek() != "#") n.errorToken = true;
              return null;
            } else {
              var o = v(e, n);
              if (i > 0 && z(e, n)) o += " " + t;
              return o;
            }
          }
          return v(e, n);
        }
        function v(e, r, a) {
          if (e.eatSpace()) return null;
          if (!a && e.match(/^#.*/)) return "comment";
          if (e.match(/^[0-9\.]/, false)) {
            var o = false;
            if (e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)) {
              o = true;
            }
            if (e.match(/^[\d_]+\.\d*/)) {
              o = true;
            }
            if (e.match(/^\.\d+/)) {
              o = true;
            }
            if (o) {
              e.eat(/J/i);
              return "number";
            }
            var l = false;
            if (e.match(/^0x[0-9a-f_]+/i)) l = true;
            if (e.match(/^0b[01_]+/i)) l = true;
            if (e.match(/^0o[0-7_]+/i)) l = true;
            if (e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)) {
              e.eat(/J/i);
              l = true;
            }
            if (e.match(/^0(?![\dx])/i)) l = true;
            if (l) {
              e.eat(/L/i);
              return "number";
            }
          }
          if (e.match(h)) {
            var f = e.current().toLowerCase().indexOf("f") !== -1;
            if (!f) {
              r.tokenize = x(e.current(), r.tokenize);
              return r.tokenize(e, r);
            } else {
              r.tokenize = k(e.current(), r.tokenize);
              return r.tokenize(e, r);
            }
          }
          for (var u = 0; u < s.length; u++) if (e.match(s[u])) return "operator";
          if (e.match(n)) return "punctuation";
          if (r.lastToken == "." && e.match(m)) return "property";
          if (e.match(b) || e.match(i)) return "keyword";
          if (e.match(y)) return "builtin";
          if (e.match(/^(self|cls)\b/)) return "self";
          if (e.match(m)) {
            if (r.lastToken == "def" || r.lastToken == "class") return "def";
            return "variable";
          }
          e.next();
          return a ? null : t;
        }
        function k(n, r) {
          while ("rubf".indexOf(n.charAt(0).toLowerCase()) >= 0) n = n.substr(1);
          var i = n.length == 1;
          var a = "string";
          function o(e) {
            return function (t, n) {
              var r = v(t, n, true);
              if (r == "punctuation") {
                if (t.current() == "{") {
                  n.tokenize = o(e + 1);
                } else if (t.current() == "}") {
                  if (e > 1) n.tokenize = o(e - 1);
                  else n.tokenize = l;
                }
              }
              return r;
            };
          }
          function l(l, s) {
            while (!l.eol()) {
              l.eatWhile(/[^'"\{\}\\]/);
              if (l.eat("\\")) {
                l.next();
                if (i && l.eol()) return a;
              } else if (l.match(n)) {
                s.tokenize = r;
                return a;
              } else if (l.match("{{")) {
                return a;
              } else if (l.match("{", false)) {
                s.tokenize = o(0);
                if (l.current()) return a;
                else return s.tokenize(l, s);
              } else if (l.match("}}")) {
                return a;
              } else if (l.match("}")) {
                return t;
              } else {
                l.eat(/['"]/);
              }
            }
            if (i) {
              if (e.singleLineStringErrors) return t;
              else s.tokenize = r;
            }
            return a;
          }
          l.isString = true;
          return l;
        }
        function x(n, r) {
          while ("rubf".indexOf(n.charAt(0).toLowerCase()) >= 0) n = n.substr(1);
          var i = n.length == 1;
          var a = "string";
          function o(o, l) {
            while (!o.eol()) {
              o.eatWhile(/[^'"\\]/);
              if (o.eat("\\")) {
                o.next();
                if (i && o.eol()) return a;
              } else if (o.match(n)) {
                l.tokenize = r;
                return a;
              } else {
                o.eat(/['"]/);
              }
            }
            if (i) {
              if (e.singleLineStringErrors) return t;
              else l.tokenize = r;
            }
            return a;
          }
          o.isString = true;
          return o;
        }
        function _(e, t) {
          while (l(t).type != "py") t.scopes.pop();
          t.scopes.push({ offset: l(t).offset + e.indentUnit, type: "py", align: null });
        }
        function w(e, t, n) {
          var r = e.match(/^[\s\[\{\(]*(?:#|$)/, false) ? null : e.column() + 1;
          t.scopes.push({ offset: t.indent + (u || e.indentUnit), type: n, align: r });
        }
        function z(e, t) {
          var n = e.indentation();
          while (t.scopes.length > 1 && l(t).offset > n) {
            if (l(t).type != "py") return true;
            t.scopes.pop();
          }
          return l(t).offset != n;
        }
        function F(e, n) {
          if (e.sol()) {
            n.beginningOfLine = true;
            n.dedent = false;
          }
          var r = n.tokenize(e, n);
          var i = e.current();
          if (n.beginningOfLine && i == "@") return e.match(m, false) ? "meta" : d ? "operator" : t;
          if (/\S/.test(i)) n.beginningOfLine = false;
          if ((r == "variable" || r == "builtin") && n.lastToken == "meta") r = "meta";
          if (i == "pass" || i == "return") n.dedent = true;
          if (i == "lambda") n.lambda = true;
          if (i == ":" && !n.lambda && l(n).type == "py" && e.match(/^\s*(?:#|$)/, false)) _(e, n);
          if (i.length == 1 && !/string|comment/.test(r)) {
            var a = "[({".indexOf(i);
            if (a != -1) w(e, n, "])}".slice(a, a + 1));
            a = "])}".indexOf(i);
            if (a != -1) {
              if (l(n).type == i) n.indent = n.scopes.pop().offset - (u || e.indentUnit);
              else return t;
            }
          }
          if (n.dedent && e.eol() && l(n).type == "py" && n.scopes.length > 1) n.scopes.pop();
          return r;
        }
        return {
          name: "python",
          startState: function () {
            return { tokenize: g, scopes: [{ offset: 0, type: "py", align: null }], indent: 0, lastToken: null, lambda: false, dedent: 0 };
          },
          token: function (e, n) {
            var r = n.errorToken;
            if (r) n.errorToken = false;
            var i = F(e, n);
            if (i && i != "comment") n.lastToken = i == "keyword" || i == "punctuation" ? e.current() : i;
            if (i == "punctuation") i = null;
            if (e.eol() && n.lambda) n.lambda = false;
            return r ? t : i;
          },
          indent: function (e, t, n) {
            if (e.tokenize != g) return e.tokenize.isString ? null : 0;
            var r = l(e);
            var i = r.type == t.charAt(0) || (r.type == "py" && !e.dedent && /^(else:|elif |except |finally:)/.test(t));
            if (r.align != null) return r.align - (i ? 1 : 0);
            else return r.offset - (i ? u || n.unit : 0);
          },
          languageData: {
            autocomplete: a.concat(o).concat(["exec", "print"]),
            indentOnInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/,
            commentTokens: { line: "#" },
            closeBrackets: { brackets: ["(", "[", "{", "'", '"', "'''", '"""'] },
          },
        };
      }
      var f = function (e) {
        return e.split(" ");
      };
      const u = s({});
      const c = s({
        extra_keywords: f(
          "by cdef cimport cpdef ctypedef enum except " + "extern gil include nogil property public " + "readonly struct union DEF IF ELIF ELSE"
        ),
      });
    },
  },
]);
