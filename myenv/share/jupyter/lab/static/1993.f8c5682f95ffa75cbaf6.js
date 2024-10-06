"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1993],
  {
    91993: (e, t, n) => {
      n.r(t);
      n.d(t, { scheme: () => C });
      var a = "builtin",
        i = "comment",
        r = "string",
        s = "symbol",
        l = "atom",
        c = "number",
        o = "bracket";
      var d = 2;
      function f(e) {
        var t = {},
          n = e.split(" ");
        for (var a = 0; a < n.length; ++a) t[n[a]] = true;
        return t;
      }
      var u = f(
        "λ case-lambda call/cc class cond-expand define-class define-values exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax define-macro defmacro delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"
      );
      var p = f(
        "define let letrec let* lambda define-macro defmacro let-syntax letrec-syntax let-values let*-values define-syntax syntax-rules define-values when unless"
      );
      function m(e, t, n) {
        this.indent = e;
        this.type = t;
        this.prev = n;
      }
      function h(e, t, n) {
        e.indentStack = new m(t, n, e.indentStack);
      }
      function g(e) {
        e.indentStack = e.indentStack.prev;
      }
      var x = new RegExp(
        /^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i
      );
      var b = new RegExp(
        /^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i
      );
      var v = new RegExp(
        /^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i
      );
      var k = new RegExp(
        /^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i
      );
      function y(e) {
        return e.match(x);
      }
      function w(e) {
        return e.match(b);
      }
      function E(e, t) {
        if (t === true) {
          e.backUp(1);
        }
        return e.match(k);
      }
      function S(e) {
        return e.match(v);
      }
      function q(e, t) {
        var n,
          a = false;
        while ((n = e.next()) != null) {
          if (n == t.token && !a) {
            t.state.mode = false;
            break;
          }
          a = !a && n == "\\";
        }
      }
      const C = {
        name: "scheme",
        startState: function () {
          return { indentStack: null, indentation: 0, mode: false, sExprComment: false, sExprQuote: false };
        },
        token: function (e, t) {
          if (t.indentStack == null && e.sol()) {
            t.indentation = e.indentation();
          }
          if (e.eatSpace()) {
            return null;
          }
          var n = null;
          switch (t.mode) {
            case "string":
              q(e, { token: '"', state: t });
              n = r;
              break;
            case "symbol":
              q(e, { token: "|", state: t });
              n = s;
              break;
            case "comment":
              var f,
                m = false;
              while ((f = e.next()) != null) {
                if (f == "#" && m) {
                  t.mode = false;
                  break;
                }
                m = f == "|";
              }
              n = i;
              break;
            case "s-expr-comment":
              t.mode = false;
              if (e.peek() == "(" || e.peek() == "[") {
                t.sExprComment = 0;
              } else {
                e.eatWhile(/[^\s\(\)\[\]]/);
                n = i;
                break;
              }
            default:
              var x = e.next();
              if (x == '"') {
                t.mode = "string";
                n = r;
              } else if (x == "'") {
                if (e.peek() == "(" || e.peek() == "[") {
                  if (typeof t.sExprQuote != "number") {
                    t.sExprQuote = 0;
                  }
                  n = l;
                } else {
                  e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/);
                  n = l;
                }
              } else if (x == "|") {
                t.mode = "symbol";
                n = s;
              } else if (x == "#") {
                if (e.eat("|")) {
                  t.mode = "comment";
                  n = i;
                } else if (e.eat(/[tf]/i)) {
                  n = l;
                } else if (e.eat(";")) {
                  t.mode = "s-expr-comment";
                  n = i;
                } else {
                  var b = null,
                    v = false,
                    k = true;
                  if (e.eat(/[ei]/i)) {
                    v = true;
                  } else {
                    e.backUp(1);
                  }
                  if (e.match(/^#b/i)) {
                    b = y;
                  } else if (e.match(/^#o/i)) {
                    b = w;
                  } else if (e.match(/^#x/i)) {
                    b = S;
                  } else if (e.match(/^#d/i)) {
                    b = E;
                  } else if (e.match(/^[-+0-9.]/, false)) {
                    k = false;
                    b = E;
                  } else if (!v) {
                    e.eat("#");
                  }
                  if (b != null) {
                    if (k && !v) {
                      e.match(/^#[ei]/i);
                    }
                    if (b(e)) n = c;
                  }
                }
              } else if (/^[-+0-9.]/.test(x) && E(e, true)) {
                n = c;
              } else if (x == ";") {
                e.skipToEnd();
                n = i;
              } else if (x == "(" || x == "[") {
                var C = "";
                var Q = e.column(),
                  _;
                while ((_ = e.eat(/[^\s\(\[\;\)\]]/)) != null) {
                  C += _;
                }
                if (C.length > 0 && p.propertyIsEnumerable(C)) {
                  h(t, Q + d, x);
                } else {
                  e.eatSpace();
                  if (e.eol() || e.peek() == ";") {
                    h(t, Q + 1, x);
                  } else {
                    h(t, Q + e.current().length, x);
                  }
                }
                e.backUp(e.current().length - 1);
                if (typeof t.sExprComment == "number") t.sExprComment++;
                if (typeof t.sExprQuote == "number") t.sExprQuote++;
                n = o;
              } else if (x == ")" || x == "]") {
                n = o;
                if (t.indentStack != null && t.indentStack.type == (x == ")" ? "(" : "[")) {
                  g(t);
                  if (typeof t.sExprComment == "number") {
                    if (--t.sExprComment == 0) {
                      n = i;
                      t.sExprComment = false;
                    }
                  }
                  if (typeof t.sExprQuote == "number") {
                    if (--t.sExprQuote == 0) {
                      n = l;
                      t.sExprQuote = false;
                    }
                  }
                }
              } else {
                e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/);
                if (u && u.propertyIsEnumerable(e.current())) {
                  n = a;
                } else n = "variable";
              }
          }
          return typeof t.sExprComment == "number" ? i : typeof t.sExprQuote == "number" ? l : n;
        },
        indent: function (e) {
          if (e.indentStack == null) return e.indentation;
          return e.indentStack.indent;
        },
        languageData: { closeBrackets: { brackets: ["(", "[", "{", '"'] }, commentTokens: { line: ";;" } },
      };
    },
  },
]);
