"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [9440],
  {
    89440: (t, i, e) => {
      e.r(i);
      e.d(i, { diagram: () => rt });
      var s = e(23787);
      var n = e(73711);
      var a = e(34596);
      var h = e(27484);
      var o = e.n(h);
      var r = e(17967);
      var l = e(27856);
      var c = e.n(l);
      var u = (function () {
        var t = function (t, i, e, s) {
            for (e = e || {}, s = t.length; s--; e[t[s]] = i);
            return e;
          },
          i = [1, 10, 12, 14, 16, 18, 19, 21, 23],
          e = [2, 6],
          s = [1, 3],
          n = [1, 5],
          a = [1, 6],
          h = [1, 7],
          o = [1, 5, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36],
          r = [1, 25],
          l = [1, 26],
          c = [1, 28],
          u = [1, 29],
          g = [1, 30],
          x = [1, 31],
          f = [1, 32],
          d = [1, 33],
          p = [1, 34],
          y = [1, 35],
          m = [1, 36],
          b = [1, 37],
          A = [1, 43],
          w = [1, 42],
          S = [1, 47],
          k = [1, 50],
          C = [1, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36],
          _ = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36],
          T = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
          R = [1, 64];
        var D = {
          trace: function t() {},
          yy: {},
          symbols_: {
            error: 2,
            start: 3,
            eol: 4,
            XYCHART: 5,
            chartConfig: 6,
            document: 7,
            CHART_ORIENTATION: 8,
            statement: 9,
            title: 10,
            text: 11,
            X_AXIS: 12,
            parseXAxis: 13,
            Y_AXIS: 14,
            parseYAxis: 15,
            LINE: 16,
            plotData: 17,
            BAR: 18,
            acc_title: 19,
            acc_title_value: 20,
            acc_descr: 21,
            acc_descr_value: 22,
            acc_descr_multiline_value: 23,
            SQUARE_BRACES_START: 24,
            commaSeparatedNumbers: 25,
            SQUARE_BRACES_END: 26,
            NUMBER_WITH_DECIMAL: 27,
            COMMA: 28,
            xAxisData: 29,
            bandData: 30,
            ARROW_DELIMITER: 31,
            commaSeparatedTexts: 32,
            yAxisData: 33,
            NEWLINE: 34,
            SEMI: 35,
            EOF: 36,
            alphaNum: 37,
            STR: 38,
            MD_STR: 39,
            alphaNumToken: 40,
            AMP: 41,
            NUM: 42,
            ALPHA: 43,
            PLUS: 44,
            EQUALS: 45,
            MULT: 46,
            DOT: 47,
            BRKT: 48,
            MINUS: 49,
            UNDERSCORE: 50,
            $accept: 0,
            $end: 1,
          },
          terminals_: {
            2: "error",
            5: "XYCHART",
            8: "CHART_ORIENTATION",
            10: "title",
            12: "X_AXIS",
            14: "Y_AXIS",
            16: "LINE",
            18: "BAR",
            19: "acc_title",
            20: "acc_title_value",
            21: "acc_descr",
            22: "acc_descr_value",
            23: "acc_descr_multiline_value",
            24: "SQUARE_BRACES_START",
            26: "SQUARE_BRACES_END",
            27: "NUMBER_WITH_DECIMAL",
            28: "COMMA",
            31: "ARROW_DELIMITER",
            34: "NEWLINE",
            35: "SEMI",
            36: "EOF",
            38: "STR",
            39: "MD_STR",
            41: "AMP",
            42: "NUM",
            43: "ALPHA",
            44: "PLUS",
            45: "EQUALS",
            46: "MULT",
            47: "DOT",
            48: "BRKT",
            49: "MINUS",
            50: "UNDERSCORE",
          },
          productions_: [
            0,
            [3, 2],
            [3, 3],
            [3, 2],
            [3, 1],
            [6, 1],
            [7, 0],
            [7, 2],
            [9, 2],
            [9, 2],
            [9, 2],
            [9, 2],
            [9, 2],
            [9, 3],
            [9, 2],
            [9, 3],
            [9, 2],
            [9, 2],
            [9, 1],
            [17, 3],
            [25, 3],
            [25, 1],
            [13, 1],
            [13, 2],
            [13, 1],
            [29, 1],
            [29, 3],
            [30, 3],
            [32, 3],
            [32, 1],
            [15, 1],
            [15, 2],
            [15, 1],
            [33, 3],
            [4, 1],
            [4, 1],
            [4, 1],
            [11, 1],
            [11, 1],
            [11, 1],
            [37, 1],
            [37, 2],
            [40, 1],
            [40, 1],
            [40, 1],
            [40, 1],
            [40, 1],
            [40, 1],
            [40, 1],
            [40, 1],
            [40, 1],
            [40, 1],
          ],
          performAction: function t(i, e, s, n, a, h, o) {
            var r = h.length - 1;
            switch (a) {
              case 5:
                n.setOrientation(h[r]);
                break;
              case 9:
                n.setDiagramTitle(h[r].text.trim());
                break;
              case 12:
                n.setLineData({ text: "", type: "text" }, h[r]);
                break;
              case 13:
                n.setLineData(h[r - 1], h[r]);
                break;
              case 14:
                n.setBarData({ text: "", type: "text" }, h[r]);
                break;
              case 15:
                n.setBarData(h[r - 1], h[r]);
                break;
              case 16:
                this.$ = h[r].trim();
                n.setAccTitle(this.$);
                break;
              case 17:
              case 18:
                this.$ = h[r].trim();
                n.setAccDescription(this.$);
                break;
              case 19:
                this.$ = h[r - 1];
                break;
              case 20:
                this.$ = [Number(h[r - 2]), ...h[r]];
                break;
              case 21:
                this.$ = [Number(h[r])];
                break;
              case 22:
                n.setXAxisTitle(h[r]);
                break;
              case 23:
                n.setXAxisTitle(h[r - 1]);
                break;
              case 24:
                n.setXAxisTitle({ type: "text", text: "" });
                break;
              case 25:
                n.setXAxisBand(h[r]);
                break;
              case 26:
                n.setXAxisRangeData(Number(h[r - 2]), Number(h[r]));
                break;
              case 27:
                this.$ = h[r - 1];
                break;
              case 28:
                this.$ = [h[r - 2], ...h[r]];
                break;
              case 29:
                this.$ = [h[r]];
                break;
              case 30:
                n.setYAxisTitle(h[r]);
                break;
              case 31:
                n.setYAxisTitle(h[r - 1]);
                break;
              case 32:
                n.setYAxisTitle({ type: "text", text: "" });
                break;
              case 33:
                n.setYAxisRangeData(Number(h[r - 2]), Number(h[r]));
                break;
              case 37:
                this.$ = { text: h[r], type: "text" };
                break;
              case 38:
                this.$ = { text: h[r], type: "text" };
                break;
              case 39:
                this.$ = { text: h[r], type: "markdown" };
                break;
              case 40:
                this.$ = h[r];
                break;
              case 41:
                this.$ = h[r - 1] + "" + h[r];
                break;
            }
          },
          table: [
            t(i, e, { 3: 1, 4: 2, 7: 4, 5: s, 34: n, 35: a, 36: h }),
            { 1: [3] },
            t(i, e, { 4: 2, 7: 4, 3: 8, 5: s, 34: n, 35: a, 36: h }),
            t(i, e, { 4: 2, 7: 4, 6: 9, 3: 10, 5: s, 8: [1, 11], 34: n, 35: a, 36: h }),
            { 1: [2, 4], 9: 12, 10: [1, 13], 12: [1, 14], 14: [1, 15], 16: [1, 16], 18: [1, 17], 19: [1, 18], 21: [1, 19], 23: [1, 20] },
            t(o, [2, 34]),
            t(o, [2, 35]),
            t(o, [2, 36]),
            { 1: [2, 1] },
            t(i, e, { 4: 2, 7: 4, 3: 21, 5: s, 34: n, 35: a, 36: h }),
            { 1: [2, 3] },
            t(o, [2, 5]),
            t(i, [2, 7], { 4: 22, 34: n, 35: a, 36: h }),
            { 11: 23, 37: 24, 38: r, 39: l, 40: 27, 41: c, 42: u, 43: g, 44: x, 45: f, 46: d, 47: p, 48: y, 49: m, 50: b },
            {
              11: 39,
              13: 38,
              24: A,
              27: w,
              29: 40,
              30: 41,
              37: 24,
              38: r,
              39: l,
              40: 27,
              41: c,
              42: u,
              43: g,
              44: x,
              45: f,
              46: d,
              47: p,
              48: y,
              49: m,
              50: b,
            },
            { 11: 45, 15: 44, 27: S, 33: 46, 37: 24, 38: r, 39: l, 40: 27, 41: c, 42: u, 43: g, 44: x, 45: f, 46: d, 47: p, 48: y, 49: m, 50: b },
            { 11: 49, 17: 48, 24: k, 37: 24, 38: r, 39: l, 40: 27, 41: c, 42: u, 43: g, 44: x, 45: f, 46: d, 47: p, 48: y, 49: m, 50: b },
            { 11: 52, 17: 51, 24: k, 37: 24, 38: r, 39: l, 40: 27, 41: c, 42: u, 43: g, 44: x, 45: f, 46: d, 47: p, 48: y, 49: m, 50: b },
            { 20: [1, 53] },
            { 22: [1, 54] },
            t(C, [2, 18]),
            { 1: [2, 2] },
            t(C, [2, 8]),
            t(C, [2, 9]),
            t(_, [2, 37], { 40: 55, 41: c, 42: u, 43: g, 44: x, 45: f, 46: d, 47: p, 48: y, 49: m, 50: b }),
            t(_, [2, 38]),
            t(_, [2, 39]),
            t(T, [2, 40]),
            t(T, [2, 42]),
            t(T, [2, 43]),
            t(T, [2, 44]),
            t(T, [2, 45]),
            t(T, [2, 46]),
            t(T, [2, 47]),
            t(T, [2, 48]),
            t(T, [2, 49]),
            t(T, [2, 50]),
            t(T, [2, 51]),
            t(C, [2, 10]),
            t(C, [2, 22], { 30: 41, 29: 56, 24: A, 27: w }),
            t(C, [2, 24]),
            t(C, [2, 25]),
            { 31: [1, 57] },
            { 11: 59, 32: 58, 37: 24, 38: r, 39: l, 40: 27, 41: c, 42: u, 43: g, 44: x, 45: f, 46: d, 47: p, 48: y, 49: m, 50: b },
            t(C, [2, 11]),
            t(C, [2, 30], { 33: 60, 27: S }),
            t(C, [2, 32]),
            { 31: [1, 61] },
            t(C, [2, 12]),
            { 17: 62, 24: k },
            { 25: 63, 27: R },
            t(C, [2, 14]),
            { 17: 65, 24: k },
            t(C, [2, 16]),
            t(C, [2, 17]),
            t(T, [2, 41]),
            t(C, [2, 23]),
            { 27: [1, 66] },
            { 26: [1, 67] },
            { 26: [2, 29], 28: [1, 68] },
            t(C, [2, 31]),
            { 27: [1, 69] },
            t(C, [2, 13]),
            { 26: [1, 70] },
            { 26: [2, 21], 28: [1, 71] },
            t(C, [2, 15]),
            t(C, [2, 26]),
            t(C, [2, 27]),
            { 11: 59, 32: 72, 37: 24, 38: r, 39: l, 40: 27, 41: c, 42: u, 43: g, 44: x, 45: f, 46: d, 47: p, 48: y, 49: m, 50: b },
            t(C, [2, 33]),
            t(C, [2, 19]),
            { 25: 73, 27: R },
            { 26: [2, 28] },
            { 26: [2, 20] },
          ],
          defaultActions: { 8: [2, 1], 10: [2, 3], 21: [2, 2], 72: [2, 28], 73: [2, 20] },
          parseError: function t(i, e) {
            if (e.recoverable) {
              this.trace(i);
            } else {
              var s = new Error(i);
              s.hash = e;
              throw s;
            }
          },
          parse: function t(i) {
            var e = this,
              s = [0],
              n = [],
              a = [null],
              h = [],
              o = this.table,
              r = "",
              l = 0,
              c = 0,
              u = 2,
              g = 1;
            var x = h.slice.call(arguments, 1);
            var f = Object.create(this.lexer);
            var d = { yy: {} };
            for (var p in this.yy) {
              if (Object.prototype.hasOwnProperty.call(this.yy, p)) {
                d.yy[p] = this.yy[p];
              }
            }
            f.setInput(i, d.yy);
            d.yy.lexer = f;
            d.yy.parser = this;
            if (typeof f.yylloc == "undefined") {
              f.yylloc = {};
            }
            var y = f.yylloc;
            h.push(y);
            var m = f.options && f.options.ranges;
            if (typeof d.yy.parseError === "function") {
              this.parseError = d.yy.parseError;
            } else {
              this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function b() {
              var t;
              t = n.pop() || f.lex() || g;
              if (typeof t !== "number") {
                if (t instanceof Array) {
                  n = t;
                  t = n.pop();
                }
                t = e.symbols_[t] || t;
              }
              return t;
            }
            var A,
              w,
              S,
              k,
              C = {},
              _,
              T,
              R,
              D;
            while (true) {
              w = s[s.length - 1];
              if (this.defaultActions[w]) {
                S = this.defaultActions[w];
              } else {
                if (A === null || typeof A == "undefined") {
                  A = b();
                }
                S = o[w] && o[w][A];
              }
              if (typeof S === "undefined" || !S.length || !S[0]) {
                var L = "";
                D = [];
                for (_ in o[w]) {
                  if (this.terminals_[_] && _ > u) {
                    D.push("'" + this.terminals_[_] + "'");
                  }
                }
                if (f.showPosition) {
                  L =
                    "Parse error on line " +
                    (l + 1) +
                    ":\n" +
                    f.showPosition() +
                    "\nExpecting " +
                    D.join(", ") +
                    ", got '" +
                    (this.terminals_[A] || A) +
                    "'";
                } else {
                  L = "Parse error on line " + (l + 1) + ": Unexpected " + (A == g ? "end of input" : "'" + (this.terminals_[A] || A) + "'");
                }
                this.parseError(L, { text: f.match, token: this.terminals_[A] || A, line: f.yylineno, loc: y, expected: D });
              }
              if (S[0] instanceof Array && S.length > 1) {
                throw new Error("Parse Error: multiple actions possible at state: " + w + ", token: " + A);
              }
              switch (S[0]) {
                case 1:
                  s.push(A);
                  a.push(f.yytext);
                  h.push(f.yylloc);
                  s.push(S[1]);
                  A = null;
                  {
                    c = f.yyleng;
                    r = f.yytext;
                    l = f.yylineno;
                    y = f.yylloc;
                  }
                  break;
                case 2:
                  T = this.productions_[S[1]][1];
                  C.$ = a[a.length - T];
                  C._$ = {
                    first_line: h[h.length - (T || 1)].first_line,
                    last_line: h[h.length - 1].last_line,
                    first_column: h[h.length - (T || 1)].first_column,
                    last_column: h[h.length - 1].last_column,
                  };
                  if (m) {
                    C._$.range = [h[h.length - (T || 1)].range[0], h[h.length - 1].range[1]];
                  }
                  k = this.performAction.apply(C, [r, c, l, d.yy, S[1], a, h].concat(x));
                  if (typeof k !== "undefined") {
                    return k;
                  }
                  if (T) {
                    s = s.slice(0, -1 * T * 2);
                    a = a.slice(0, -1 * T);
                    h = h.slice(0, -1 * T);
                  }
                  s.push(this.productions_[S[1]][0]);
                  a.push(C.$);
                  h.push(C._$);
                  R = o[s[s.length - 2]][s[s.length - 1]];
                  s.push(R);
                  break;
                case 3:
                  return true;
              }
            }
            return true;
          },
        };
        var L = (function () {
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
              var s = this.match.split(/(?:\r\n?|\n)/g);
              this.match = this.match.substr(0, this.match.length - 1);
              this.matched = this.matched.substr(0, this.matched.length - 1);
              if (e.length - 1) {
                this.yylineno -= e.length - 1;
              }
              var n = this.yylloc.range;
              this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: e
                  ? (e.length === s.length ? this.yylloc.first_column : 0) + s[s.length - e.length].length - e[0].length
                  : this.yylloc.first_column - i,
              };
              if (this.options.ranges) {
                this.yylloc.range = [n[0], n[0] + this.yyleng - i];
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
              var e, s, n;
              if (this.options.backtrack_lexer) {
                n = {
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
                  n.yylloc.range = this.yylloc.range.slice(0);
                }
              }
              s = t[0].match(/(?:\r\n?|\n).*/g);
              if (s) {
                this.yylineno += s.length;
              }
              this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length,
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
                for (var a in n) {
                  this[a] = n[a];
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
              var t, i, e, s;
              if (!this._more) {
                this.yytext = "";
                this.match = "";
              }
              var n = this._currentRules();
              for (var a = 0; a < n.length; a++) {
                e = this._input.match(this.rules[n[a]]);
                if (e && (!i || e[0].length > i[0].length)) {
                  i = e;
                  s = a;
                  if (this.options.backtrack_lexer) {
                    t = this.test_match(e, n[a]);
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
                t = this.test_match(i, n[s]);
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
            performAction: function t(i, e, s, n) {
              switch (s) {
                case 0:
                  break;
                case 1:
                  break;
                case 2:
                  this.popState();
                  return 34;
                case 3:
                  this.popState();
                  return 34;
                case 4:
                  return 34;
                case 5:
                  break;
                case 6:
                  return 10;
                case 7:
                  this.pushState("acc_title");
                  return 19;
                case 8:
                  this.popState();
                  return "acc_title_value";
                case 9:
                  this.pushState("acc_descr");
                  return 21;
                case 10:
                  this.popState();
                  return "acc_descr_value";
                case 11:
                  this.pushState("acc_descr_multiline");
                  break;
                case 12:
                  this.popState();
                  break;
                case 13:
                  return "acc_descr_multiline_value";
                case 14:
                  return 5;
                case 15:
                  return 8;
                case 16:
                  this.pushState("axis_data");
                  return "X_AXIS";
                case 17:
                  this.pushState("axis_data");
                  return "Y_AXIS";
                case 18:
                  this.pushState("axis_band_data");
                  return 24;
                case 19:
                  return 31;
                case 20:
                  this.pushState("data");
                  return 16;
                case 21:
                  this.pushState("data");
                  return 18;
                case 22:
                  this.pushState("data_inner");
                  return 24;
                case 23:
                  return 27;
                case 24:
                  this.popState();
                  return 26;
                case 25:
                  this.popState();
                  break;
                case 26:
                  this.pushState("string");
                  break;
                case 27:
                  this.popState();
                  break;
                case 28:
                  return "STR";
                case 29:
                  return 24;
                case 30:
                  return 26;
                case 31:
                  return 43;
                case 32:
                  return "COLON";
                case 33:
                  return 44;
                case 34:
                  return 28;
                case 35:
                  return 45;
                case 36:
                  return 46;
                case 37:
                  return 48;
                case 38:
                  return 50;
                case 39:
                  return 47;
                case 40:
                  return 41;
                case 41:
                  return 49;
                case 42:
                  return 42;
                case 43:
                  break;
                case 44:
                  return 35;
                case 45:
                  return 36;
              }
            },
            rules: [
              /^(?:%%(?!\{)[^\n]*)/i,
              /^(?:[^\}]%%[^\n]*)/i,
              /^(?:(\r?\n))/i,
              /^(?:(\r?\n))/i,
              /^(?:[\n\r]+)/i,
              /^(?:%%[^\n]*)/i,
              /^(?:title\b)/i,
              /^(?:accTitle\s*:\s*)/i,
              /^(?:(?!\n||)*[^\n]*)/i,
              /^(?:accDescr\s*:\s*)/i,
              /^(?:(?!\n||)*[^\n]*)/i,
              /^(?:accDescr\s*\{\s*)/i,
              /^(?:\{)/i,
              /^(?:[^\}]*)/i,
              /^(?:xychart-beta\b)/i,
              /^(?:(?:vertical|horizontal))/i,
              /^(?:x-axis\b)/i,
              /^(?:y-axis\b)/i,
              /^(?:\[)/i,
              /^(?:-->)/i,
              /^(?:line\b)/i,
              /^(?:bar\b)/i,
              /^(?:\[)/i,
              /^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,
              /^(?:\])/i,
              /^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,
              /^(?:["])/i,
              /^(?:["])/i,
              /^(?:[^"]*)/i,
              /^(?:\[)/i,
              /^(?:\])/i,
              /^(?:[A-Za-z]+)/i,
              /^(?::)/i,
              /^(?:\+)/i,
              /^(?:,)/i,
              /^(?:=)/i,
              /^(?:\*)/i,
              /^(?:#)/i,
              /^(?:[\_])/i,
              /^(?:\.)/i,
              /^(?:&)/i,
              /^(?:-)/i,
              /^(?:[0-9]+)/i,
              /^(?:\s+)/i,
              /^(?:;)/i,
              /^(?:$)/i,
            ],
            conditions: {
              data_inner: {
                rules: [
                  0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 23, 24, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
                ],
                inclusive: true,
              },
              data: {
                rules: [
                  0, 1, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 22, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
                ],
                inclusive: true,
              },
              axis_band_data: {
                rules: [
                  0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 24, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
                ],
                inclusive: true,
              },
              axis_data: {
                rules: [
                  0, 1, 2, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
                  44, 45,
                ],
                inclusive: true,
              },
              acc_descr_multiline: { rules: [12, 13], inclusive: false },
              acc_descr: { rules: [10], inclusive: false },
              acc_title: { rules: [8], inclusive: false },
              title: { rules: [], inclusive: false },
              md_string: { rules: [], inclusive: false },
              string: { rules: [27, 28], inclusive: false },
              INITIAL: {
                rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                inclusive: true,
              },
            },
          };
          return t;
        })();
        D.lexer = L;
        function v() {
          this.yy = {};
        }
        v.prototype = D;
        D.Parser = v;
        return new v();
      })();
      u.parser = u;
      const g = u;
      function x(t) {
        return t.type === "bar";
      }
      function f(t) {
        return t.type === "band";
      }
      function d(t) {
        return t.type === "linear";
      }
      class p {
        constructor(t) {
          this.parentGroup = t;
        }
        getMaxDimension(t, i) {
          if (!this.parentGroup) {
            return { width: t.reduce((t, i) => Math.max(i.length, t), 0) * i, height: i };
          }
          const e = { width: 0, height: 0 };
          const s = this.parentGroup.append("g").attr("visibility", "hidden").attr("font-size", i);
          for (const a of t) {
            const t = (0, n.c)(s, 1, a);
            const h = t ? t.width : a.length * i;
            const o = t ? t.height : i;
            e.width = Math.max(e.width, h);
            e.height = Math.max(e.height, o);
          }
          s.remove();
          return e;
        }
      }
      const y = 0.7;
      const m = 0.2;
      class b {
        constructor(t, i, e, s) {
          this.axisConfig = t;
          this.title = i;
          this.textDimensionCalculator = e;
          this.axisThemeConfig = s;
          this.boundingRect = { x: 0, y: 0, width: 0, height: 0 };
          this.axisPosition = "left";
          this.showTitle = false;
          this.showLabel = false;
          this.showTick = false;
          this.showAxisLine = false;
          this.outerPadding = 0;
          this.titleTextHeight = 0;
          this.labelTextHeight = 0;
          this.range = [0, 10];
          this.boundingRect = { x: 0, y: 0, width: 0, height: 0 };
          this.axisPosition = "left";
        }
        setRange(t) {
          this.range = t;
          if (this.axisPosition === "left" || this.axisPosition === "right") {
            this.boundingRect.height = t[1] - t[0];
          } else {
            this.boundingRect.width = t[1] - t[0];
          }
          this.recalculateScale();
        }
        getRange() {
          return [this.range[0] + this.outerPadding, this.range[1] - this.outerPadding];
        }
        setAxisPosition(t) {
          this.axisPosition = t;
          this.setRange(this.range);
        }
        getTickDistance() {
          const t = this.getRange();
          return Math.abs(t[0] - t[1]) / this.getTickValues().length;
        }
        getAxisOuterPadding() {
          return this.outerPadding;
        }
        getLabelDimension() {
          return this.textDimensionCalculator.getMaxDimension(
            this.getTickValues().map((t) => t.toString()),
            this.axisConfig.labelFontSize
          );
        }
        recalculateOuterPaddingToDrawBar() {
          if (y * this.getTickDistance() > this.outerPadding * 2) {
            this.outerPadding = Math.floor((y * this.getTickDistance()) / 2);
          }
          this.recalculateScale();
        }
        calculateSpaceIfDrawnHorizontally(t) {
          let i = t.height;
          if (this.axisConfig.showAxisLine && i > this.axisConfig.axisLineWidth) {
            i -= this.axisConfig.axisLineWidth;
            this.showAxisLine = true;
          }
          if (this.axisConfig.showLabel) {
            const e = this.getLabelDimension();
            const s = m * t.width;
            this.outerPadding = Math.min(e.width / 2, s);
            const n = e.height + this.axisConfig.labelPadding * 2;
            this.labelTextHeight = e.height;
            if (n <= i) {
              i -= n;
              this.showLabel = true;
            }
          }
          if (this.axisConfig.showTick && i >= this.axisConfig.tickLength) {
            this.showTick = true;
            i -= this.axisConfig.tickLength;
          }
          if (this.axisConfig.showTitle && this.title) {
            const t = this.textDimensionCalculator.getMaxDimension([this.title], this.axisConfig.titleFontSize);
            const e = t.height + this.axisConfig.titlePadding * 2;
            this.titleTextHeight = t.height;
            if (e <= i) {
              i -= e;
              this.showTitle = true;
            }
          }
          this.boundingRect.width = t.width;
          this.boundingRect.height = t.height - i;
        }
        calculateSpaceIfDrawnVertical(t) {
          let i = t.width;
          if (this.axisConfig.showAxisLine && i > this.axisConfig.axisLineWidth) {
            i -= this.axisConfig.axisLineWidth;
            this.showAxisLine = true;
          }
          if (this.axisConfig.showLabel) {
            const e = this.getLabelDimension();
            const s = m * t.height;
            this.outerPadding = Math.min(e.height / 2, s);
            const n = e.width + this.axisConfig.labelPadding * 2;
            if (n <= i) {
              i -= n;
              this.showLabel = true;
            }
          }
          if (this.axisConfig.showTick && i >= this.axisConfig.tickLength) {
            this.showTick = true;
            i -= this.axisConfig.tickLength;
          }
          if (this.axisConfig.showTitle && this.title) {
            const t = this.textDimensionCalculator.getMaxDimension([this.title], this.axisConfig.titleFontSize);
            const e = t.height + this.axisConfig.titlePadding * 2;
            this.titleTextHeight = t.height;
            if (e <= i) {
              i -= e;
              this.showTitle = true;
            }
          }
          this.boundingRect.width = t.width - i;
          this.boundingRect.height = t.height;
        }
        calculateSpace(t) {
          if (this.axisPosition === "left" || this.axisPosition === "right") {
            this.calculateSpaceIfDrawnVertical(t);
          } else {
            this.calculateSpaceIfDrawnHorizontally(t);
          }
          this.recalculateScale();
          return { width: this.boundingRect.width, height: this.boundingRect.height };
        }
        setBoundingBoxXY(t) {
          this.boundingRect.x = t.x;
          this.boundingRect.y = t.y;
        }
        getDrawableElementsForLeftAxis() {
          const t = [];
          if (this.showAxisLine) {
            const i = this.boundingRect.x + this.boundingRect.width - this.axisConfig.axisLineWidth / 2;
            t.push({
              type: "path",
              groupTexts: ["left-axis", "axisl-line"],
              data: [
                {
                  path: `M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y + this.boundingRect.height} `,
                  strokeFill: this.axisThemeConfig.axisLineColor,
                  strokeWidth: this.axisConfig.axisLineWidth,
                },
              ],
            });
          }
          if (this.showLabel) {
            t.push({
              type: "text",
              groupTexts: ["left-axis", "label"],
              data: this.getTickValues().map((t) => ({
                text: t.toString(),
                x:
                  this.boundingRect.x +
                  this.boundingRect.width -
                  (this.showLabel ? this.axisConfig.labelPadding : 0) -
                  (this.showTick ? this.axisConfig.tickLength : 0) -
                  (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
                y: this.getScaleValue(t),
                fill: this.axisThemeConfig.labelColor,
                fontSize: this.axisConfig.labelFontSize,
                rotation: 0,
                verticalPos: "middle",
                horizontalPos: "right",
              })),
            });
          }
          if (this.showTick) {
            const i = this.boundingRect.x + this.boundingRect.width - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
            t.push({
              type: "path",
              groupTexts: ["left-axis", "ticks"],
              data: this.getTickValues().map((t) => ({
                path: `M ${i},${this.getScaleValue(t)} L ${i - this.axisConfig.tickLength},${this.getScaleValue(t)}`,
                strokeFill: this.axisThemeConfig.tickColor,
                strokeWidth: this.axisConfig.tickWidth,
              })),
            });
          }
          if (this.showTitle) {
            t.push({
              type: "text",
              groupTexts: ["left-axis", "title"],
              data: [
                {
                  text: this.title,
                  x: this.boundingRect.x + this.axisConfig.titlePadding,
                  y: this.boundingRect.y + this.boundingRect.height / 2,
                  fill: this.axisThemeConfig.titleColor,
                  fontSize: this.axisConfig.titleFontSize,
                  rotation: 270,
                  verticalPos: "top",
                  horizontalPos: "center",
                },
              ],
            });
          }
          return t;
        }
        getDrawableElementsForBottomAxis() {
          const t = [];
          if (this.showAxisLine) {
            const i = this.boundingRect.y + this.axisConfig.axisLineWidth / 2;
            t.push({
              type: "path",
              groupTexts: ["bottom-axis", "axis-line"],
              data: [
                {
                  path: `M ${this.boundingRect.x},${i} L ${this.boundingRect.x + this.boundingRect.width},${i}`,
                  strokeFill: this.axisThemeConfig.axisLineColor,
                  strokeWidth: this.axisConfig.axisLineWidth,
                },
              ],
            });
          }
          if (this.showLabel) {
            t.push({
              type: "text",
              groupTexts: ["bottom-axis", "label"],
              data: this.getTickValues().map((t) => ({
                text: t.toString(),
                x: this.getScaleValue(t),
                y:
                  this.boundingRect.y +
                  this.axisConfig.labelPadding +
                  (this.showTick ? this.axisConfig.tickLength : 0) +
                  (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
                fill: this.axisThemeConfig.labelColor,
                fontSize: this.axisConfig.labelFontSize,
                rotation: 0,
                verticalPos: "top",
                horizontalPos: "center",
              })),
            });
          }
          if (this.showTick) {
            const i = this.boundingRect.y + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
            t.push({
              type: "path",
              groupTexts: ["bottom-axis", "ticks"],
              data: this.getTickValues().map((t) => ({
                path: `M ${this.getScaleValue(t)},${i} L ${this.getScaleValue(t)},${i + this.axisConfig.tickLength}`,
                strokeFill: this.axisThemeConfig.tickColor,
                strokeWidth: this.axisConfig.tickWidth,
              })),
            });
          }
          if (this.showTitle) {
            t.push({
              type: "text",
              groupTexts: ["bottom-axis", "title"],
              data: [
                {
                  text: this.title,
                  x: this.range[0] + (this.range[1] - this.range[0]) / 2,
                  y: this.boundingRect.y + this.boundingRect.height - this.axisConfig.titlePadding - this.titleTextHeight,
                  fill: this.axisThemeConfig.titleColor,
                  fontSize: this.axisConfig.titleFontSize,
                  rotation: 0,
                  verticalPos: "top",
                  horizontalPos: "center",
                },
              ],
            });
          }
          return t;
        }
        getDrawableElementsForTopAxis() {
          const t = [];
          if (this.showAxisLine) {
            const i = this.boundingRect.y + this.boundingRect.height - this.axisConfig.axisLineWidth / 2;
            t.push({
              type: "path",
              groupTexts: ["top-axis", "axis-line"],
              data: [
                {
                  path: `M ${this.boundingRect.x},${i} L ${this.boundingRect.x + this.boundingRect.width},${i}`,
                  strokeFill: this.axisThemeConfig.axisLineColor,
                  strokeWidth: this.axisConfig.axisLineWidth,
                },
              ],
            });
          }
          if (this.showLabel) {
            t.push({
              type: "text",
              groupTexts: ["top-axis", "label"],
              data: this.getTickValues().map((t) => ({
                text: t.toString(),
                x: this.getScaleValue(t),
                y:
                  this.boundingRect.y + (this.showTitle ? this.titleTextHeight + this.axisConfig.titlePadding * 2 : 0) + this.axisConfig.labelPadding,
                fill: this.axisThemeConfig.labelColor,
                fontSize: this.axisConfig.labelFontSize,
                rotation: 0,
                verticalPos: "top",
                horizontalPos: "center",
              })),
            });
          }
          if (this.showTick) {
            const i = this.boundingRect.y;
            t.push({
              type: "path",
              groupTexts: ["top-axis", "ticks"],
              data: this.getTickValues().map((t) => ({
                path: `M ${this.getScaleValue(t)},${i + this.boundingRect.height - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)} L ${this.getScaleValue(t)},${i + this.boundingRect.height - this.axisConfig.tickLength - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)}`,
                strokeFill: this.axisThemeConfig.tickColor,
                strokeWidth: this.axisConfig.tickWidth,
              })),
            });
          }
          if (this.showTitle) {
            t.push({
              type: "text",
              groupTexts: ["top-axis", "title"],
              data: [
                {
                  text: this.title,
                  x: this.boundingRect.x + this.boundingRect.width / 2,
                  y: this.boundingRect.y + this.axisConfig.titlePadding,
                  fill: this.axisThemeConfig.titleColor,
                  fontSize: this.axisConfig.titleFontSize,
                  rotation: 0,
                  verticalPos: "top",
                  horizontalPos: "center",
                },
              ],
            });
          }
          return t;
        }
        getDrawableElements() {
          if (this.axisPosition === "left") {
            return this.getDrawableElementsForLeftAxis();
          }
          if (this.axisPosition === "right") {
            throw Error("Drawing of right axis is not implemented");
          }
          if (this.axisPosition === "bottom") {
            return this.getDrawableElementsForBottomAxis();
          }
          if (this.axisPosition === "top") {
            return this.getDrawableElementsForTopAxis();
          }
          return [];
        }
      }
      class A extends b {
        constructor(t, i, e, s, n) {
          super(t, s, n, i);
          this.categories = e;
          this.scale = (0, a.tiA)().domain(this.categories).range(this.getRange());
        }
        setRange(t) {
          super.setRange(t);
        }
        recalculateScale() {
          this.scale = (0, a.tiA)().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(0.5);
          s.l.trace("BandAxis axis final categories, range: ", this.categories, this.getRange());
        }
        getTickValues() {
          return this.categories;
        }
        getScaleValue(t) {
          return this.scale(t) || this.getRange()[0];
        }
      }
      class w extends b {
        constructor(t, i, e, s, n) {
          super(t, s, n, i);
          this.domain = e;
          this.scale = (0, a.BYU)().domain(this.domain).range(this.getRange());
        }
        getTickValues() {
          return this.scale.ticks();
        }
        recalculateScale() {
          const t = [...this.domain];
          if (this.axisPosition === "left") {
            t.reverse();
          }
          this.scale = (0, a.BYU)().domain(t).range(this.getRange());
        }
        getScaleValue(t) {
          return this.scale(t);
        }
      }
      function S(t, i, e, s) {
        const n = new p(s);
        if (f(t)) {
          return new A(i, e, t.categories, t.title, n);
        }
        return new w(i, e, [t.min, t.max], t.title, n);
      }
      class k {
        constructor(t, i, e, s) {
          this.textDimensionCalculator = t;
          this.chartConfig = i;
          this.chartData = e;
          this.chartThemeConfig = s;
          this.boundingRect = { x: 0, y: 0, width: 0, height: 0 };
          this.showChartTitle = false;
        }
        setBoundingBoxXY(t) {
          this.boundingRect.x = t.x;
          this.boundingRect.y = t.y;
        }
        calculateSpace(t) {
          const i = this.textDimensionCalculator.getMaxDimension([this.chartData.title], this.chartConfig.titleFontSize);
          const e = Math.max(i.width, t.width);
          const s = i.height + 2 * this.chartConfig.titlePadding;
          if (i.width <= e && i.height <= s && this.chartConfig.showTitle && this.chartData.title) {
            this.boundingRect.width = e;
            this.boundingRect.height = s;
            this.showChartTitle = true;
          }
          return { width: this.boundingRect.width, height: this.boundingRect.height };
        }
        getDrawableElements() {
          const t = [];
          if (this.showChartTitle) {
            t.push({
              groupTexts: ["chart-title"],
              type: "text",
              data: [
                {
                  fontSize: this.chartConfig.titleFontSize,
                  text: this.chartData.title,
                  verticalPos: "middle",
                  horizontalPos: "center",
                  x: this.boundingRect.x + this.boundingRect.width / 2,
                  y: this.boundingRect.y + this.boundingRect.height / 2,
                  fill: this.chartThemeConfig.titleColor,
                  rotation: 0,
                },
              ],
            });
          }
          return t;
        }
      }
      function C(t, i, e, s) {
        const n = new p(s);
        return new k(n, t, i, e);
      }
      class _ {
        constructor(t, i, e, s, n) {
          this.plotData = t;
          this.xAxis = i;
          this.yAxis = e;
          this.orientation = s;
          this.plotIndex = n;
        }
        getDrawableElement() {
          const t = this.plotData.data.map((t) => [this.xAxis.getScaleValue(t[0]), this.yAxis.getScaleValue(t[1])]);
          let i;
          if (this.orientation === "horizontal") {
            i = (0, a.jvg)()
              .y((t) => t[0])
              .x((t) => t[1])(t);
          } else {
            i = (0, a.jvg)()
              .x((t) => t[0])
              .y((t) => t[1])(t);
          }
          if (!i) {
            return [];
          }
          return [
            {
              groupTexts: ["plot", `line-plot-${this.plotIndex}`],
              type: "path",
              data: [{ path: i, strokeFill: this.plotData.strokeFill, strokeWidth: this.plotData.strokeWidth }],
            },
          ];
        }
      }
      class T {
        constructor(t, i, e, s, n, a) {
          this.barData = t;
          this.boundingRect = i;
          this.xAxis = e;
          this.yAxis = s;
          this.orientation = n;
          this.plotIndex = a;
        }
        getDrawableElement() {
          const t = this.barData.data.map((t) => [this.xAxis.getScaleValue(t[0]), this.yAxis.getScaleValue(t[1])]);
          const i = 0.05;
          const e = Math.min(this.xAxis.getAxisOuterPadding() * 2, this.xAxis.getTickDistance()) * (1 - i);
          const s = e / 2;
          if (this.orientation === "horizontal") {
            return [
              {
                groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
                type: "rect",
                data: t.map((t) => ({
                  x: this.boundingRect.x,
                  y: t[0] - s,
                  height: e,
                  width: t[1] - this.boundingRect.x,
                  fill: this.barData.fill,
                  strokeWidth: 0,
                  strokeFill: this.barData.fill,
                })),
              },
            ];
          }
          return [
            {
              groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
              type: "rect",
              data: t.map((t) => ({
                x: t[0] - s,
                y: t[1],
                width: e,
                height: this.boundingRect.y + this.boundingRect.height - t[1],
                fill: this.barData.fill,
                strokeWidth: 0,
                strokeFill: this.barData.fill,
              })),
            },
          ];
        }
      }
      class R {
        constructor(t, i, e) {
          this.chartConfig = t;
          this.chartData = i;
          this.chartThemeConfig = e;
          this.boundingRect = { x: 0, y: 0, width: 0, height: 0 };
        }
        setAxes(t, i) {
          this.xAxis = t;
          this.yAxis = i;
        }
        setBoundingBoxXY(t) {
          this.boundingRect.x = t.x;
          this.boundingRect.y = t.y;
        }
        calculateSpace(t) {
          this.boundingRect.width = t.width;
          this.boundingRect.height = t.height;
          return { width: this.boundingRect.width, height: this.boundingRect.height };
        }
        getDrawableElements() {
          if (!(this.xAxis && this.yAxis)) {
            throw Error("Axes must be passed to render Plots");
          }
          const t = [];
          for (const [i, e] of this.chartData.plots.entries()) {
            switch (e.type) {
              case "line":
                {
                  const s = new _(e, this.xAxis, this.yAxis, this.chartConfig.chartOrientation, i);
                  t.push(...s.getDrawableElement());
                }
                break;
              case "bar":
                {
                  const s = new T(e, this.boundingRect, this.xAxis, this.yAxis, this.chartConfig.chartOrientation, i);
                  t.push(...s.getDrawableElement());
                }
                break;
            }
          }
          return t;
        }
      }
      function D(t, i, e) {
        return new R(t, i, e);
      }
      class L {
        constructor(t, i, e, s) {
          this.chartConfig = t;
          this.chartData = i;
          this.componentStore = {
            title: C(t, i, e, s),
            plot: D(t, i, e),
            xAxis: S(
              i.xAxis,
              t.xAxis,
              { titleColor: e.xAxisTitleColor, labelColor: e.xAxisLabelColor, tickColor: e.xAxisTickColor, axisLineColor: e.xAxisLineColor },
              s
            ),
            yAxis: S(
              i.yAxis,
              t.yAxis,
              { titleColor: e.yAxisTitleColor, labelColor: e.yAxisLabelColor, tickColor: e.yAxisTickColor, axisLineColor: e.yAxisLineColor },
              s
            ),
          };
        }
        calculateVerticalSpace() {
          let t = this.chartConfig.width;
          let i = this.chartConfig.height;
          let e = 0;
          let s = 0;
          let n = Math.floor((t * this.chartConfig.plotReservedSpacePercent) / 100);
          let a = Math.floor((i * this.chartConfig.plotReservedSpacePercent) / 100);
          let h = this.componentStore.plot.calculateSpace({ width: n, height: a });
          t -= h.width;
          i -= h.height;
          h = this.componentStore.title.calculateSpace({ width: this.chartConfig.width, height: i });
          s = h.height;
          i -= h.height;
          this.componentStore.xAxis.setAxisPosition("bottom");
          h = this.componentStore.xAxis.calculateSpace({ width: t, height: i });
          i -= h.height;
          this.componentStore.yAxis.setAxisPosition("left");
          h = this.componentStore.yAxis.calculateSpace({ width: t, height: i });
          e = h.width;
          t -= h.width;
          if (t > 0) {
            n += t;
            t = 0;
          }
          if (i > 0) {
            a += i;
            i = 0;
          }
          this.componentStore.plot.calculateSpace({ width: n, height: a });
          this.componentStore.plot.setBoundingBoxXY({ x: e, y: s });
          this.componentStore.xAxis.setRange([e, e + n]);
          this.componentStore.xAxis.setBoundingBoxXY({ x: e, y: s + a });
          this.componentStore.yAxis.setRange([s, s + a]);
          this.componentStore.yAxis.setBoundingBoxXY({ x: 0, y: s });
          if (this.chartData.plots.some((t) => x(t))) {
            this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
          }
        }
        calculateHorizonatalSpace() {
          let t = this.chartConfig.width;
          let i = this.chartConfig.height;
          let e = 0;
          let s = 0;
          let n = 0;
          let a = Math.floor((t * this.chartConfig.plotReservedSpacePercent) / 100);
          let h = Math.floor((i * this.chartConfig.plotReservedSpacePercent) / 100);
          let o = this.componentStore.plot.calculateSpace({ width: a, height: h });
          t -= o.width;
          i -= o.height;
          o = this.componentStore.title.calculateSpace({ width: this.chartConfig.width, height: i });
          e = o.height;
          i -= o.height;
          this.componentStore.xAxis.setAxisPosition("left");
          o = this.componentStore.xAxis.calculateSpace({ width: t, height: i });
          t -= o.width;
          s = o.width;
          this.componentStore.yAxis.setAxisPosition("top");
          o = this.componentStore.yAxis.calculateSpace({ width: t, height: i });
          i -= o.height;
          n = e + o.height;
          if (t > 0) {
            a += t;
            t = 0;
          }
          if (i > 0) {
            h += i;
            i = 0;
          }
          this.componentStore.plot.calculateSpace({ width: a, height: h });
          this.componentStore.plot.setBoundingBoxXY({ x: s, y: n });
          this.componentStore.yAxis.setRange([s, s + a]);
          this.componentStore.yAxis.setBoundingBoxXY({ x: s, y: e });
          this.componentStore.xAxis.setRange([n, n + h]);
          this.componentStore.xAxis.setBoundingBoxXY({ x: 0, y: n });
          if (this.chartData.plots.some((t) => x(t))) {
            this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
          }
        }
        calculateSpace() {
          if (this.chartConfig.chartOrientation === "horizontal") {
            this.calculateHorizonatalSpace();
          } else {
            this.calculateVerticalSpace();
          }
        }
        getDrawableElement() {
          this.calculateSpace();
          const t = [];
          this.componentStore.plot.setAxes(this.componentStore.xAxis, this.componentStore.yAxis);
          for (const i of Object.values(this.componentStore)) {
            t.push(...i.getDrawableElements());
          }
          return t;
        }
      }
      class v {
        static build(t, i, e, s) {
          const n = new L(t, i, e, s);
          return n.getDrawableElement();
        }
      }
      let P = 0;
      let E;
      let I = F();
      let $ = W();
      let M = N();
      let B = $.plotColorPalette.split(",").map((t) => t.trim());
      let z = false;
      let O = false;
      function W() {
        const t = (0, s.D)();
        const i = (0, s.E)();
        return (0, s.B)(t.xyChart, i.themeVariables.xyChart);
      }
      function F() {
        const t = (0, s.E)();
        return (0, s.B)(s.A.xyChart, t.xyChart);
      }
      function N() {
        return {
          yAxis: { type: "linear", title: "", min: Infinity, max: -Infinity },
          xAxis: { type: "band", title: "", categories: [] },
          title: "",
          plots: [],
        };
      }
      function V(t) {
        const i = (0, s.E)();
        return (0, s.d)(t.trim(), i);
      }
      function X(t) {
        E = t;
      }
      function Y(t) {
        if (t === "horizontal") {
          I.chartOrientation = "horizontal";
        } else {
          I.chartOrientation = "vertical";
        }
      }
      function U(t) {
        M.xAxis.title = V(t.text);
      }
      function H(t, i) {
        M.xAxis = { type: "linear", title: M.xAxis.title, min: t, max: i };
        z = true;
      }
      function j(t) {
        M.xAxis = { type: "band", title: M.xAxis.title, categories: t.map((t) => V(t.text)) };
        z = true;
      }
      function G(t) {
        M.yAxis.title = V(t.text);
      }
      function Q(t, i) {
        M.yAxis = { type: "linear", title: M.yAxis.title, min: t, max: i };
        O = true;
      }
      function K(t) {
        const i = Math.min(...t);
        const e = Math.max(...t);
        const s = d(M.yAxis) ? M.yAxis.min : Infinity;
        const n = d(M.yAxis) ? M.yAxis.max : -Infinity;
        M.yAxis = { type: "linear", title: M.yAxis.title, min: Math.min(s, i), max: Math.max(n, e) };
      }
      function q(t) {
        let i = [];
        if (t.length === 0) {
          return i;
        }
        if (!z) {
          const i = d(M.xAxis) ? M.xAxis.min : Infinity;
          const e = d(M.xAxis) ? M.xAxis.max : -Infinity;
          H(Math.min(i, 1), Math.max(e, t.length));
        }
        if (!O) {
          K(t);
        }
        if (f(M.xAxis)) {
          i = M.xAxis.categories.map((i, e) => [i, t[e]]);
        }
        if (d(M.xAxis)) {
          const e = M.xAxis.min;
          const s = M.xAxis.max;
          const n = (s - e + 1) / t.length;
          const a = [];
          for (let t = e; t <= s; t += n) {
            a.push(`${t}`);
          }
          i = a.map((i, e) => [i, t[e]]);
        }
        return i;
      }
      function Z(t) {
        return B[t === 0 ? 0 : t % B.length];
      }
      function J(t, i) {
        const e = q(i);
        M.plots.push({ type: "line", strokeFill: Z(P), strokeWidth: 2, data: e });
        P++;
      }
      function tt(t, i) {
        const e = q(i);
        M.plots.push({ type: "bar", fill: Z(P), data: e });
        P++;
      }
      function it() {
        if (M.plots.length === 0) {
          throw Error("No Plot to render, please provide a plot with some data");
        }
        M.title = (0, s.r)();
        return v.build(I, M, $, E);
      }
      function et() {
        return $;
      }
      function st() {
        return I;
      }
      const nt = function () {
        (0, s.t)();
        P = 0;
        I = F();
        M = N();
        $ = W();
        B = $.plotColorPalette.split(",").map((t) => t.trim());
        z = false;
        O = false;
      };
      const at = {
        getDrawableElem: it,
        clear: nt,
        setAccTitle: s.s,
        getAccTitle: s.g,
        setDiagramTitle: s.q,
        getDiagramTitle: s.r,
        getAccDescription: s.a,
        setAccDescription: s.b,
        setOrientation: Y,
        setXAxisTitle: U,
        setXAxisRangeData: H,
        setXAxisBand: j,
        setYAxisTitle: G,
        setYAxisRangeData: Q,
        setLineData: J,
        setBarData: tt,
        setTmpSVGG: X,
        getChartThemeConfig: et,
        getChartConfig: st,
      };
      const ht = (t, i, e, n) => {
        const a = n.db;
        const h = a.getChartThemeConfig();
        const o = a.getChartConfig();
        function r(t) {
          return t === "top" ? "text-before-edge" : "middle";
        }
        function l(t) {
          return t === "left" ? "start" : t === "right" ? "end" : "middle";
        }
        function c(t) {
          return `translate(${t.x}, ${t.y}) rotate(${t.rotation || 0})`;
        }
        s.l.debug("Rendering xychart chart\n" + t);
        const u = (0, s.z)(i);
        const g = u.append("g").attr("class", "main");
        const x = g.append("rect").attr("width", o.width).attr("height", o.height).attr("class", "background");
        (0, s.i)(u, o.height, o.width, true);
        u.attr("viewBox", `0 0 ${o.width} ${o.height}`);
        x.attr("fill", h.backgroundColor);
        a.setTmpSVGG(u.append("g").attr("class", "mermaid-tmp-group"));
        const f = a.getDrawableElem();
        const d = {};
        function p(t) {
          let i = g;
          let e = "";
          for (const [s] of t.entries()) {
            let n = g;
            if (s > 0 && d[e]) {
              n = d[e];
            }
            e += t[s];
            i = d[e];
            if (!i) {
              i = d[e] = n.append("g").attr("class", t[s]);
            }
          }
          return i;
        }
        for (const s of f) {
          if (s.data.length === 0) {
            continue;
          }
          const t = p(s.groupTexts);
          switch (s.type) {
            case "rect":
              t.selectAll("rect")
                .data(s.data)
                .enter()
                .append("rect")
                .attr("x", (t) => t.x)
                .attr("y", (t) => t.y)
                .attr("width", (t) => t.width)
                .attr("height", (t) => t.height)
                .attr("fill", (t) => t.fill)
                .attr("stroke", (t) => t.strokeFill)
                .attr("stroke-width", (t) => t.strokeWidth);
              break;
            case "text":
              t.selectAll("text")
                .data(s.data)
                .enter()
                .append("text")
                .attr("x", 0)
                .attr("y", 0)
                .attr("fill", (t) => t.fill)
                .attr("font-size", (t) => t.fontSize)
                .attr("dominant-baseline", (t) => r(t.verticalPos))
                .attr("text-anchor", (t) => l(t.horizontalPos))
                .attr("transform", (t) => c(t))
                .text((t) => t.text);
              break;
            case "path":
              t.selectAll("path")
                .data(s.data)
                .enter()
                .append("path")
                .attr("d", (t) => t.path)
                .attr("fill", (t) => (t.fill ? t.fill : "none"))
                .attr("stroke", (t) => t.strokeFill)
                .attr("stroke-width", (t) => t.strokeWidth);
              break;
          }
        }
      };
      const ot = { draw: ht };
      const rt = { parser: g, db: at, renderer: ot };
    },
  },
]);
