"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [8152],
  {
    8152: (t, i, e) => {
      e.r(i);
      e.d(i, { diagram: () => v });
      var n = e(23787);
      var s = e(27484);
      var r = e.n(s);
      var o = e(17967);
      var h = e(34596);
      var l = e(27856);
      var a = e.n(l);
      var c = (function () {
        var t = function (t, i, e, n) {
            for (e = e || {}, n = t.length; n--; e[t[n]] = i);
            return e;
          },
          i = [6, 9, 10];
        var e = {
          trace: function t() {},
          yy: {},
          symbols_: { error: 2, start: 3, info: 4, document: 5, EOF: 6, line: 7, statement: 8, NL: 9, showInfo: 10, $accept: 0, $end: 1 },
          terminals_: { 2: "error", 4: "info", 6: "EOF", 9: "NL", 10: "showInfo" },
          productions_: [0, [3, 3], [5, 0], [5, 2], [7, 1], [7, 1], [8, 1]],
          performAction: function t(i, e, n, s, r, o, h) {
            o.length - 1;
            switch (r) {
              case 1:
                return s;
              case 4:
                break;
              case 6:
                s.setInfo(true);
                break;
            }
          },
          table: [
            { 3: 1, 4: [1, 2] },
            { 1: [3] },
            t(i, [2, 2], { 5: 3 }),
            { 6: [1, 4], 7: 5, 8: 6, 9: [1, 7], 10: [1, 8] },
            { 1: [2, 1] },
            t(i, [2, 3]),
            t(i, [2, 4]),
            t(i, [2, 5]),
            t(i, [2, 6]),
          ],
          defaultActions: { 4: [2, 1] },
          parseError: function t(i, e) {
            if (e.recoverable) {
              this.trace(i);
            } else {
              var n = new Error(i);
              n.hash = e;
              throw n;
            }
          },
          parse: function t(i) {
            var e = this,
              n = [0],
              s = [],
              r = [null],
              o = [],
              h = this.table,
              l = "",
              a = 0,
              c = 0,
              u = 2,
              y = 1;
            var f = o.slice.call(arguments, 1);
            var p = Object.create(this.lexer);
            var g = { yy: {} };
            for (var _ in this.yy) {
              if (Object.prototype.hasOwnProperty.call(this.yy, _)) {
                g.yy[_] = this.yy[_];
              }
            }
            p.setInput(i, g.yy);
            g.yy.lexer = p;
            g.yy.parser = this;
            if (typeof p.yylloc == "undefined") {
              p.yylloc = {};
            }
            var m = p.yylloc;
            o.push(m);
            var d = p.options && p.options.ranges;
            if (typeof g.yy.parseError === "function") {
              this.parseError = g.yy.parseError;
            } else {
              this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function k() {
              var t;
              t = s.pop() || p.lex() || y;
              if (typeof t !== "number") {
                if (t instanceof Array) {
                  s = t;
                  t = s.pop();
                }
                t = e.symbols_[t] || t;
              }
              return t;
            }
            var v,
              b,
              x,
              w,
              I = {},
              S,
              E,
              A,
              P;
            while (true) {
              b = n[n.length - 1];
              if (this.defaultActions[b]) {
                x = this.defaultActions[b];
              } else {
                if (v === null || typeof v == "undefined") {
                  v = k();
                }
                x = h[b] && h[b][v];
              }
              if (typeof x === "undefined" || !x.length || !x[0]) {
                var O = "";
                P = [];
                for (S in h[b]) {
                  if (this.terminals_[S] && S > u) {
                    P.push("'" + this.terminals_[S] + "'");
                  }
                }
                if (p.showPosition) {
                  O =
                    "Parse error on line " +
                    (a + 1) +
                    ":\n" +
                    p.showPosition() +
                    "\nExpecting " +
                    P.join(", ") +
                    ", got '" +
                    (this.terminals_[v] || v) +
                    "'";
                } else {
                  O = "Parse error on line " + (a + 1) + ": Unexpected " + (v == y ? "end of input" : "'" + (this.terminals_[v] || v) + "'");
                }
                this.parseError(O, { text: p.match, token: this.terminals_[v] || v, line: p.yylineno, loc: m, expected: P });
              }
              if (x[0] instanceof Array && x.length > 1) {
                throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + v);
              }
              switch (x[0]) {
                case 1:
                  n.push(v);
                  r.push(p.yytext);
                  o.push(p.yylloc);
                  n.push(x[1]);
                  v = null;
                  {
                    c = p.yyleng;
                    l = p.yytext;
                    a = p.yylineno;
                    m = p.yylloc;
                  }
                  break;
                case 2:
                  E = this.productions_[x[1]][1];
                  I.$ = r[r.length - E];
                  I._$ = {
                    first_line: o[o.length - (E || 1)].first_line,
                    last_line: o[o.length - 1].last_line,
                    first_column: o[o.length - (E || 1)].first_column,
                    last_column: o[o.length - 1].last_column,
                  };
                  if (d) {
                    I._$.range = [o[o.length - (E || 1)].range[0], o[o.length - 1].range[1]];
                  }
                  w = this.performAction.apply(I, [l, c, a, g.yy, x[1], r, o].concat(f));
                  if (typeof w !== "undefined") {
                    return w;
                  }
                  if (E) {
                    n = n.slice(0, -1 * E * 2);
                    r = r.slice(0, -1 * E);
                    o = o.slice(0, -1 * E);
                  }
                  n.push(this.productions_[x[1]][0]);
                  r.push(I.$);
                  o.push(I._$);
                  A = h[n[n.length - 2]][n[n.length - 1]];
                  n.push(A);
                  break;
                case 3:
                  return true;
              }
            }
            return true;
          },
        };
        var n = (function () {
          var t = {
            EOF: 1,
            parseError: function t(i, e) {
              if (this.yy.parser) {
                this.yy.parser.parseError(i, e);
              } else {
                throw new Error(i);
              }
            },
            setInput: function (t, i) {
              this.yy = i || this.yy || {};
              this._input = t;
              this._more = this._backtrack = this.done = false;
              this.yylineno = this.yyleng = 0;
              this.yytext = this.matched = this.match = "";
              this.conditionStack = ["INITIAL"];
              this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
              if (this.options.ranges) {
                this.yylloc.range = [0, 0];
              }
              this.offset = 0;
              return this;
            },
            input: function () {
              var t = this._input[0];
              this.yytext += t;
              this.yyleng++;
              this.offset++;
              this.match += t;
              this.matched += t;
              var i = t.match(/(?:\r\n?|\n).*/g);
              if (i) {
                this.yylineno++;
                this.yylloc.last_line++;
              } else {
                this.yylloc.last_column++;
              }
              if (this.options.ranges) {
                this.yylloc.range[1]++;
              }
              this._input = this._input.slice(1);
              return t;
            },
            unput: function (t) {
              var i = t.length;
              var e = t.split(/(?:\r\n?|\n)/g);
              this._input = t + this._input;
              this.yytext = this.yytext.substr(0, this.yytext.length - i);
              this.offset -= i;
              var n = this.match.split(/(?:\r\n?|\n)/g);
              this.match = this.match.substr(0, this.match.length - 1);
              this.matched = this.matched.substr(0, this.matched.length - 1);
              if (e.length - 1) {
                this.yylineno -= e.length - 1;
              }
              var s = this.yylloc.range;
              this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: e
                  ? (e.length === n.length ? this.yylloc.first_column : 0) + n[n.length - e.length].length - e[0].length
                  : this.yylloc.first_column - i,
              };
              if (this.options.ranges) {
                this.yylloc.range = [s[0], s[0] + this.yyleng - i];
              }
              this.yyleng = this.yytext.length;
              return this;
            },
            more: function () {
              this._more = true;
              return this;
            },
            reject: function () {
              if (this.options.backtrack_lexer) {
                this._backtrack = true;
              } else {
                return this.parseError(
                  "Lexical error on line " +
                    (this.yylineno + 1) +
                    ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" +
                    this.showPosition(),
                  { text: "", token: null, line: this.yylineno }
                );
              }
              return this;
            },
            less: function (t) {
              this.unput(this.match.slice(t));
            },
            pastInput: function () {
              var t = this.matched.substr(0, this.matched.length - this.match.length);
              return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function () {
              var t = this.match;
              if (t.length < 20) {
                t += this._input.substr(0, 20 - t.length);
              }
              return (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
            },
            showPosition: function () {
              var t = this.pastInput();
              var i = new Array(t.length + 1).join("-");
              return t + this.upcomingInput() + "\n" + i + "^";
            },
            test_match: function (t, i) {
              var e, n, s;
              if (this.options.backtrack_lexer) {
                s = {
                  yylineno: this.yylineno,
                  yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column,
                  },
                  yytext: this.yytext,
                  match: this.match,
                  matches: this.matches,
                  matched: this.matched,
                  yyleng: this.yyleng,
                  offset: this.offset,
                  _more: this._more,
                  _input: this._input,
                  yy: this.yy,
                  conditionStack: this.conditionStack.slice(0),
                  done: this.done,
                };
                if (this.options.ranges) {
                  s.yylloc.range = this.yylloc.range.slice(0);
                }
              }
              n = t[0].match(/(?:\r\n?|\n).*/g);
              if (n) {
                this.yylineno += n.length;
              }
              this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: n ? n[n.length - 1].length - n[n.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length,
              };
              this.yytext += t[0];
              this.match += t[0];
              this.matches = t;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                this.yylloc.range = [this.offset, (this.offset += this.yyleng)];
              }
              this._more = false;
              this._backtrack = false;
              this._input = this._input.slice(t[0].length);
              this.matched += t[0];
              e = this.performAction.call(this, this.yy, this, i, this.conditionStack[this.conditionStack.length - 1]);
              if (this.done && this._input) {
                this.done = false;
              }
              if (e) {
                return e;
              } else if (this._backtrack) {
                for (var r in s) {
                  this[r] = s[r];
                }
                return false;
              }
              return false;
            },
            next: function () {
              if (this.done) {
                return this.EOF;
              }
              if (!this._input) {
                this.done = true;
              }
              var t, i, e, n;
              if (!this._more) {
                this.yytext = "";
                this.match = "";
              }
              var s = this._currentRules();
              for (var r = 0; r < s.length; r++) {
                e = this._input.match(this.rules[s[r]]);
                if (e && (!i || e[0].length > i[0].length)) {
                  i = e;
                  n = r;
                  if (this.options.backtrack_lexer) {
                    t = this.test_match(e, s[r]);
                    if (t !== false) {
                      return t;
                    } else if (this._backtrack) {
                      i = false;
                      continue;
                    } else {
                      return false;
                    }
                  } else if (!this.options.flex) {
                    break;
                  }
                }
              }
              if (i) {
                t = this.test_match(i, s[n]);
                if (t !== false) {
                  return t;
                }
                return false;
              }
              if (this._input === "") {
                return this.EOF;
              } else {
                return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                  text: "",
                  token: null,
                  line: this.yylineno,
                });
              }
            },
            lex: function t() {
              var i = this.next();
              if (i) {
                return i;
              } else {
                return this.lex();
              }
            },
            begin: function t(i) {
              this.conditionStack.push(i);
            },
            popState: function t() {
              var i = this.conditionStack.length - 1;
              if (i > 0) {
                return this.conditionStack.pop();
              } else {
                return this.conditionStack[0];
              }
            },
            _currentRules: function t() {
              if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
              } else {
                return this.conditions["INITIAL"].rules;
              }
            },
            topState: function t(i) {
              i = this.conditionStack.length - 1 - Math.abs(i || 0);
              if (i >= 0) {
                return this.conditionStack[i];
              } else {
                return "INITIAL";
              }
            },
            pushState: function t(i) {
              this.begin(i);
            },
            stateStackSize: function t() {
              return this.conditionStack.length;
            },
            options: { "case-insensitive": true },
            performAction: function t(i, e, n, s) {
              switch (n) {
                case 0:
                  return 4;
                case 1:
                  return 9;
                case 2:
                  return "space";
                case 3:
                  return 10;
                case 4:
                  return 6;
                case 5:
                  return "TXT";
              }
            },
            rules: [/^(?:info\b)/i, /^(?:[\s\n\r]+)/i, /^(?:[\s]+)/i, /^(?:showInfo\b)/i, /^(?:$)/i, /^(?:.)/i],
            conditions: { INITIAL: { rules: [0, 1, 2, 3, 4, 5], inclusive: true } },
          };
          return t;
        })();
        e.lexer = n;
        function s() {
          this.yy = {};
        }
        s.prototype = e;
        e.Parser = s;
        return new s();
      })();
      c.parser = c;
      const u = c;
      const y = { info: false };
      let f = y.info;
      const p = (t) => {
        f = t;
      };
      const g = () => f;
      const _ = () => {
        f = y.info;
      };
      const m = { clear: _, setInfo: p, getInfo: g };
      const d = (t, i, e) => {
        n.l.debug("rendering info diagram\n" + t);
        const s = (0, n.z)(i);
        (0, n.i)(s, 100, 400, true);
        const r = s.append("g");
        r.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${e}`);
      };
      const k = { draw: d };
      const v = { parser: u, db: m, renderer: k };
    },
  },
]);
