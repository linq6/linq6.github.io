"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1760],
  {
    91760: (t, e, s) => {
      s.d(e, { D: () => f, S: () => l, a: () => d, b: () => c, c: () => a, d: () => ct, p: () => r, s: () => ht });
      var i = s(23787);
      var n = (function () {
        var t = function (t, e, s, i) {
            for (s = s || {}, i = t.length; i--; s[t[i]] = e);
            return s;
          },
          e = [1, 2],
          s = [1, 3],
          i = [1, 4],
          n = [2, 4],
          r = [1, 9],
          o = [1, 11],
          a = [1, 15],
          c = [1, 16],
          l = [1, 17],
          h = [1, 18],
          u = [1, 30],
          f = [1, 19],
          d = [1, 20],
          p = [1, 21],
          y = [1, 22],
          m = [1, 23],
          S = [1, 25],
          g = [1, 26],
          _ = [1, 27],
          k = [1, 28],
          b = [1, 29],
          T = [1, 32],
          E = [1, 33],
          x = [1, 34],
          v = [1, 35],
          C = [1, 31],
          $ = [1, 4, 5, 15, 16, 18, 20, 21, 23, 24, 25, 26, 27, 28, 32, 34, 36, 37, 41, 44, 45, 46, 47, 50],
          D = [1, 4, 5, 13, 14, 15, 16, 18, 20, 21, 23, 24, 25, 26, 27, 28, 32, 34, 36, 37, 41, 44, 45, 46, 47, 50],
          A = [4, 5, 15, 16, 18, 20, 21, 23, 24, 25, 26, 27, 28, 32, 34, 36, 37, 41, 44, 45, 46, 47, 50];
        var L = {
          trace: function t() {},
          yy: {},
          symbols_: {
            error: 2,
            start: 3,
            SPACE: 4,
            NL: 5,
            SD: 6,
            document: 7,
            line: 8,
            statement: 9,
            classDefStatement: 10,
            cssClassStatement: 11,
            idStatement: 12,
            DESCR: 13,
            "--\x3e": 14,
            HIDE_EMPTY: 15,
            scale: 16,
            WIDTH: 17,
            COMPOSIT_STATE: 18,
            STRUCT_START: 19,
            STRUCT_STOP: 20,
            STATE_DESCR: 21,
            AS: 22,
            ID: 23,
            FORK: 24,
            JOIN: 25,
            CHOICE: 26,
            CONCURRENT: 27,
            note: 28,
            notePosition: 29,
            NOTE_TEXT: 30,
            direction: 31,
            acc_title: 32,
            acc_title_value: 33,
            acc_descr: 34,
            acc_descr_value: 35,
            acc_descr_multiline_value: 36,
            classDef: 37,
            CLASSDEF_ID: 38,
            CLASSDEF_STYLEOPTS: 39,
            DEFAULT: 40,
            class: 41,
            CLASSENTITY_IDS: 42,
            STYLECLASS: 43,
            direction_tb: 44,
            direction_bt: 45,
            direction_rl: 46,
            direction_lr: 47,
            eol: 48,
            ";": 49,
            EDGE_STATE: 50,
            STYLE_SEPARATOR: 51,
            left_of: 52,
            right_of: 53,
            $accept: 0,
            $end: 1,
          },
          terminals_: {
            2: "error",
            4: "SPACE",
            5: "NL",
            6: "SD",
            13: "DESCR",
            14: "--\x3e",
            15: "HIDE_EMPTY",
            16: "scale",
            17: "WIDTH",
            18: "COMPOSIT_STATE",
            19: "STRUCT_START",
            20: "STRUCT_STOP",
            21: "STATE_DESCR",
            22: "AS",
            23: "ID",
            24: "FORK",
            25: "JOIN",
            26: "CHOICE",
            27: "CONCURRENT",
            28: "note",
            30: "NOTE_TEXT",
            32: "acc_title",
            33: "acc_title_value",
            34: "acc_descr",
            35: "acc_descr_value",
            36: "acc_descr_multiline_value",
            37: "classDef",
            38: "CLASSDEF_ID",
            39: "CLASSDEF_STYLEOPTS",
            40: "DEFAULT",
            41: "class",
            42: "CLASSENTITY_IDS",
            43: "STYLECLASS",
            44: "direction_tb",
            45: "direction_bt",
            46: "direction_rl",
            47: "direction_lr",
            49: ";",
            50: "EDGE_STATE",
            51: "STYLE_SEPARATOR",
            52: "left_of",
            53: "right_of",
          },
          productions_: [
            0,
            [3, 2],
            [3, 2],
            [3, 2],
            [7, 0],
            [7, 2],
            [8, 2],
            [8, 1],
            [8, 1],
            [9, 1],
            [9, 1],
            [9, 1],
            [9, 2],
            [9, 3],
            [9, 4],
            [9, 1],
            [9, 2],
            [9, 1],
            [9, 4],
            [9, 3],
            [9, 6],
            [9, 1],
            [9, 1],
            [9, 1],
            [9, 1],
            [9, 4],
            [9, 4],
            [9, 1],
            [9, 2],
            [9, 2],
            [9, 1],
            [10, 3],
            [10, 3],
            [11, 3],
            [31, 1],
            [31, 1],
            [31, 1],
            [31, 1],
            [48, 1],
            [48, 1],
            [12, 1],
            [12, 1],
            [12, 3],
            [12, 3],
            [29, 1],
            [29, 1],
          ],
          performAction: function t(e, s, i, n, r, o, a) {
            var c = o.length - 1;
            switch (r) {
              case 3:
                n.setRootDoc(o[c]);
                return o[c];
              case 4:
                this.$ = [];
                break;
              case 5:
                if (o[c] != "nl") {
                  o[c - 1].push(o[c]);
                  this.$ = o[c - 1];
                }
                break;
              case 6:
              case 7:
                this.$ = o[c];
                break;
              case 8:
                this.$ = "nl";
                break;
              case 11:
                this.$ = o[c];
                break;
              case 12:
                const t = o[c - 1];
                t.description = n.trimColon(o[c]);
                this.$ = t;
                break;
              case 13:
                this.$ = { stmt: "relation", state1: o[c - 2], state2: o[c] };
                break;
              case 14:
                const e = n.trimColon(o[c]);
                this.$ = { stmt: "relation", state1: o[c - 3], state2: o[c - 1], description: e };
                break;
              case 18:
                this.$ = { stmt: "state", id: o[c - 3], type: "default", description: "", doc: o[c - 1] };
                break;
              case 19:
                var l = o[c];
                var h = o[c - 2].trim();
                if (o[c].match(":")) {
                  var u = o[c].split(":");
                  l = u[0];
                  h = [h, u[1]];
                }
                this.$ = { stmt: "state", id: l, type: "default", description: h };
                break;
              case 20:
                this.$ = { stmt: "state", id: o[c - 3], type: "default", description: o[c - 5], doc: o[c - 1] };
                break;
              case 21:
                this.$ = { stmt: "state", id: o[c], type: "fork" };
                break;
              case 22:
                this.$ = { stmt: "state", id: o[c], type: "join" };
                break;
              case 23:
                this.$ = { stmt: "state", id: o[c], type: "choice" };
                break;
              case 24:
                this.$ = { stmt: "state", id: n.getDividerId(), type: "divider" };
                break;
              case 25:
                this.$ = { stmt: "state", id: o[c - 1].trim(), note: { position: o[c - 2].trim(), text: o[c].trim() } };
                break;
              case 28:
                this.$ = o[c].trim();
                n.setAccTitle(this.$);
                break;
              case 29:
              case 30:
                this.$ = o[c].trim();
                n.setAccDescription(this.$);
                break;
              case 31:
              case 32:
                this.$ = { stmt: "classDef", id: o[c - 1].trim(), classes: o[c].trim() };
                break;
              case 33:
                this.$ = { stmt: "applyClass", id: o[c - 1].trim(), styleClass: o[c].trim() };
                break;
              case 34:
                n.setDirection("TB");
                this.$ = { stmt: "dir", value: "TB" };
                break;
              case 35:
                n.setDirection("BT");
                this.$ = { stmt: "dir", value: "BT" };
                break;
              case 36:
                n.setDirection("RL");
                this.$ = { stmt: "dir", value: "RL" };
                break;
              case 37:
                n.setDirection("LR");
                this.$ = { stmt: "dir", value: "LR" };
                break;
              case 40:
              case 41:
                this.$ = { stmt: "state", id: o[c].trim(), type: "default", description: "" };
                break;
              case 42:
                this.$ = { stmt: "state", id: o[c - 2].trim(), classes: [o[c].trim()], type: "default", description: "" };
                break;
              case 43:
                this.$ = { stmt: "state", id: o[c - 2].trim(), classes: [o[c].trim()], type: "default", description: "" };
                break;
            }
          },
          table: [
            { 3: 1, 4: e, 5: s, 6: i },
            { 1: [3] },
            { 3: 5, 4: e, 5: s, 6: i },
            { 3: 6, 4: e, 5: s, 6: i },
            t([1, 4, 5, 15, 16, 18, 21, 23, 24, 25, 26, 27, 28, 32, 34, 36, 37, 41, 44, 45, 46, 47, 50], n, { 7: 7 }),
            { 1: [2, 1] },
            { 1: [2, 2] },
            {
              1: [2, 3],
              4: r,
              5: o,
              8: 8,
              9: 10,
              10: 12,
              11: 13,
              12: 14,
              15: a,
              16: c,
              18: l,
              21: h,
              23: u,
              24: f,
              25: d,
              26: p,
              27: y,
              28: m,
              31: 24,
              32: S,
              34: g,
              36: _,
              37: k,
              41: b,
              44: T,
              45: E,
              46: x,
              47: v,
              50: C,
            },
            t($, [2, 5]),
            {
              9: 36,
              10: 12,
              11: 13,
              12: 14,
              15: a,
              16: c,
              18: l,
              21: h,
              23: u,
              24: f,
              25: d,
              26: p,
              27: y,
              28: m,
              31: 24,
              32: S,
              34: g,
              36: _,
              37: k,
              41: b,
              44: T,
              45: E,
              46: x,
              47: v,
              50: C,
            },
            t($, [2, 7]),
            t($, [2, 8]),
            t($, [2, 9]),
            t($, [2, 10]),
            t($, [2, 11], { 13: [1, 37], 14: [1, 38] }),
            t($, [2, 15]),
            { 17: [1, 39] },
            t($, [2, 17], { 19: [1, 40] }),
            { 22: [1, 41] },
            t($, [2, 21]),
            t($, [2, 22]),
            t($, [2, 23]),
            t($, [2, 24]),
            { 29: 42, 30: [1, 43], 52: [1, 44], 53: [1, 45] },
            t($, [2, 27]),
            { 33: [1, 46] },
            { 35: [1, 47] },
            t($, [2, 30]),
            { 38: [1, 48], 40: [1, 49] },
            { 42: [1, 50] },
            t(D, [2, 40], { 51: [1, 51] }),
            t(D, [2, 41], { 51: [1, 52] }),
            t($, [2, 34]),
            t($, [2, 35]),
            t($, [2, 36]),
            t($, [2, 37]),
            t($, [2, 6]),
            t($, [2, 12]),
            { 12: 53, 23: u, 50: C },
            t($, [2, 16]),
            t(A, n, { 7: 54 }),
            { 23: [1, 55] },
            { 23: [1, 56] },
            { 22: [1, 57] },
            { 23: [2, 44] },
            { 23: [2, 45] },
            t($, [2, 28]),
            t($, [2, 29]),
            { 39: [1, 58] },
            { 39: [1, 59] },
            { 43: [1, 60] },
            { 23: [1, 61] },
            { 23: [1, 62] },
            t($, [2, 13], { 13: [1, 63] }),
            {
              4: r,
              5: o,
              8: 8,
              9: 10,
              10: 12,
              11: 13,
              12: 14,
              15: a,
              16: c,
              18: l,
              20: [1, 64],
              21: h,
              23: u,
              24: f,
              25: d,
              26: p,
              27: y,
              28: m,
              31: 24,
              32: S,
              34: g,
              36: _,
              37: k,
              41: b,
              44: T,
              45: E,
              46: x,
              47: v,
              50: C,
            },
            t($, [2, 19], { 19: [1, 65] }),
            { 30: [1, 66] },
            { 23: [1, 67] },
            t($, [2, 31]),
            t($, [2, 32]),
            t($, [2, 33]),
            t(D, [2, 42]),
            t(D, [2, 43]),
            t($, [2, 14]),
            t($, [2, 18]),
            t(A, n, { 7: 68 }),
            t($, [2, 25]),
            t($, [2, 26]),
            {
              4: r,
              5: o,
              8: 8,
              9: 10,
              10: 12,
              11: 13,
              12: 14,
              15: a,
              16: c,
              18: l,
              20: [1, 69],
              21: h,
              23: u,
              24: f,
              25: d,
              26: p,
              27: y,
              28: m,
              31: 24,
              32: S,
              34: g,
              36: _,
              37: k,
              41: b,
              44: T,
              45: E,
              46: x,
              47: v,
              50: C,
            },
            t($, [2, 20]),
          ],
          defaultActions: { 5: [2, 1], 6: [2, 2], 44: [2, 44], 45: [2, 45] },
          parseError: function t(e, s) {
            if (s.recoverable) {
              this.trace(e);
            } else {
              var i = new Error(e);
              i.hash = s;
              throw i;
            }
          },
          parse: function t(e) {
            var s = this,
              i = [0],
              n = [],
              r = [null],
              o = [],
              a = this.table,
              c = "",
              l = 0,
              h = 0,
              u = 2,
              f = 1;
            var d = o.slice.call(arguments, 1);
            var p = Object.create(this.lexer);
            var y = { yy: {} };
            for (var m in this.yy) {
              if (Object.prototype.hasOwnProperty.call(this.yy, m)) {
                y.yy[m] = this.yy[m];
              }
            }
            p.setInput(e, y.yy);
            y.yy.lexer = p;
            y.yy.parser = this;
            if (typeof p.yylloc == "undefined") {
              p.yylloc = {};
            }
            var S = p.yylloc;
            o.push(S);
            var g = p.options && p.options.ranges;
            if (typeof y.yy.parseError === "function") {
              this.parseError = y.yy.parseError;
            } else {
              this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function _() {
              var t;
              t = n.pop() || p.lex() || f;
              if (typeof t !== "number") {
                if (t instanceof Array) {
                  n = t;
                  t = n.pop();
                }
                t = s.symbols_[t] || t;
              }
              return t;
            }
            var k,
              b,
              T,
              E,
              x = {},
              v,
              C,
              $,
              D;
            while (true) {
              b = i[i.length - 1];
              if (this.defaultActions[b]) {
                T = this.defaultActions[b];
              } else {
                if (k === null || typeof k == "undefined") {
                  k = _();
                }
                T = a[b] && a[b][k];
              }
              if (typeof T === "undefined" || !T.length || !T[0]) {
                var A = "";
                D = [];
                for (v in a[b]) {
                  if (this.terminals_[v] && v > u) {
                    D.push("'" + this.terminals_[v] + "'");
                  }
                }
                if (p.showPosition) {
                  A =
                    "Parse error on line " +
                    (l + 1) +
                    ":\n" +
                    p.showPosition() +
                    "\nExpecting " +
                    D.join(", ") +
                    ", got '" +
                    (this.terminals_[k] || k) +
                    "'";
                } else {
                  A = "Parse error on line " + (l + 1) + ": Unexpected " + (k == f ? "end of input" : "'" + (this.terminals_[k] || k) + "'");
                }
                this.parseError(A, { text: p.match, token: this.terminals_[k] || k, line: p.yylineno, loc: S, expected: D });
              }
              if (T[0] instanceof Array && T.length > 1) {
                throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + k);
              }
              switch (T[0]) {
                case 1:
                  i.push(k);
                  r.push(p.yytext);
                  o.push(p.yylloc);
                  i.push(T[1]);
                  k = null;
                  {
                    h = p.yyleng;
                    c = p.yytext;
                    l = p.yylineno;
                    S = p.yylloc;
                  }
                  break;
                case 2:
                  C = this.productions_[T[1]][1];
                  x.$ = r[r.length - C];
                  x._$ = {
                    first_line: o[o.length - (C || 1)].first_line,
                    last_line: o[o.length - 1].last_line,
                    first_column: o[o.length - (C || 1)].first_column,
                    last_column: o[o.length - 1].last_column,
                  };
                  if (g) {
                    x._$.range = [o[o.length - (C || 1)].range[0], o[o.length - 1].range[1]];
                  }
                  E = this.performAction.apply(x, [c, h, l, y.yy, T[1], r, o].concat(d));
                  if (typeof E !== "undefined") {
                    return E;
                  }
                  if (C) {
                    i = i.slice(0, -1 * C * 2);
                    r = r.slice(0, -1 * C);
                    o = o.slice(0, -1 * C);
                  }
                  i.push(this.productions_[T[1]][0]);
                  r.push(x.$);
                  o.push(x._$);
                  $ = a[i[i.length - 2]][i[i.length - 1]];
                  i.push($);
                  break;
                case 3:
                  return true;
              }
            }
            return true;
          },
        };
        var I = (function () {
          var t = {
            EOF: 1,
            parseError: function t(e, s) {
              if (this.yy.parser) {
                this.yy.parser.parseError(e, s);
              } else {
                throw new Error(e);
              }
            },
            setInput: function (t, e) {
              this.yy = e || this.yy || {};
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
              var e = t.match(/(?:\r\n?|\n).*/g);
              if (e) {
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
              var e = t.length;
              var s = t.split(/(?:\r\n?|\n)/g);
              this._input = t + this._input;
              this.yytext = this.yytext.substr(0, this.yytext.length - e);
              this.offset -= e;
              var i = this.match.split(/(?:\r\n?|\n)/g);
              this.match = this.match.substr(0, this.match.length - 1);
              this.matched = this.matched.substr(0, this.matched.length - 1);
              if (s.length - 1) {
                this.yylineno -= s.length - 1;
              }
              var n = this.yylloc.range;
              this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: s
                  ? (s.length === i.length ? this.yylloc.first_column : 0) + i[i.length - s.length].length - s[0].length
                  : this.yylloc.first_column - e,
              };
              if (this.options.ranges) {
                this.yylloc.range = [n[0], n[0] + this.yyleng - e];
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
              var e = new Array(t.length + 1).join("-");
              return t + this.upcomingInput() + "\n" + e + "^";
            },
            test_match: function (t, e) {
              var s, i, n;
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
              i = t[0].match(/(?:\r\n?|\n).*/g);
              if (i) {
                this.yylineno += i.length;
              }
              this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length,
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
              s = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]);
              if (this.done && this._input) {
                this.done = false;
              }
              if (s) {
                return s;
              } else if (this._backtrack) {
                for (var r in n) {
                  this[r] = n[r];
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
              var t, e, s, i;
              if (!this._more) {
                this.yytext = "";
                this.match = "";
              }
              var n = this._currentRules();
              for (var r = 0; r < n.length; r++) {
                s = this._input.match(this.rules[n[r]]);
                if (s && (!e || s[0].length > e[0].length)) {
                  e = s;
                  i = r;
                  if (this.options.backtrack_lexer) {
                    t = this.test_match(s, n[r]);
                    if (t !== false) {
                      return t;
                    } else if (this._backtrack) {
                      e = false;
                      continue;
                    } else {
                      return false;
                    }
                  } else if (!this.options.flex) {
                    break;
                  }
                }
              }
              if (e) {
                t = this.test_match(e, n[i]);
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
              var e = this.next();
              if (e) {
                return e;
              } else {
                return this.lex();
              }
            },
            begin: function t(e) {
              this.conditionStack.push(e);
            },
            popState: function t() {
              var e = this.conditionStack.length - 1;
              if (e > 0) {
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
            topState: function t(e) {
              e = this.conditionStack.length - 1 - Math.abs(e || 0);
              if (e >= 0) {
                return this.conditionStack[e];
              } else {
                return "INITIAL";
              }
            },
            pushState: function t(e) {
              this.begin(e);
            },
            stateStackSize: function t() {
              return this.conditionStack.length;
            },
            options: { "case-insensitive": true },
            performAction: function t(e, s, i, n) {
              switch (i) {
                case 0:
                  return 40;
                case 1:
                  return 44;
                case 2:
                  return 45;
                case 3:
                  return 46;
                case 4:
                  return 47;
                case 5:
                  break;
                case 6:
                  break;
                case 7:
                  return 5;
                case 8:
                  break;
                case 9:
                  break;
                case 10:
                  break;
                case 11:
                  break;
                case 12:
                  this.pushState("SCALE");
                  return 16;
                case 13:
                  return 17;
                case 14:
                  this.popState();
                  break;
                case 15:
                  this.begin("acc_title");
                  return 32;
                case 16:
                  this.popState();
                  return "acc_title_value";
                case 17:
                  this.begin("acc_descr");
                  return 34;
                case 18:
                  this.popState();
                  return "acc_descr_value";
                case 19:
                  this.begin("acc_descr_multiline");
                  break;
                case 20:
                  this.popState();
                  break;
                case 21:
                  return "acc_descr_multiline_value";
                case 22:
                  this.pushState("CLASSDEF");
                  return 37;
                case 23:
                  this.popState();
                  this.pushState("CLASSDEFID");
                  return "DEFAULT_CLASSDEF_ID";
                case 24:
                  this.popState();
                  this.pushState("CLASSDEFID");
                  return 38;
                case 25:
                  this.popState();
                  return 39;
                case 26:
                  this.pushState("CLASS");
                  return 41;
                case 27:
                  this.popState();
                  this.pushState("CLASS_STYLE");
                  return 42;
                case 28:
                  this.popState();
                  return 43;
                case 29:
                  this.pushState("SCALE");
                  return 16;
                case 30:
                  return 17;
                case 31:
                  this.popState();
                  break;
                case 32:
                  this.pushState("STATE");
                  break;
                case 33:
                  this.popState();
                  s.yytext = s.yytext.slice(0, -8).trim();
                  return 24;
                case 34:
                  this.popState();
                  s.yytext = s.yytext.slice(0, -8).trim();
                  return 25;
                case 35:
                  this.popState();
                  s.yytext = s.yytext.slice(0, -10).trim();
                  return 26;
                case 36:
                  this.popState();
                  s.yytext = s.yytext.slice(0, -8).trim();
                  return 24;
                case 37:
                  this.popState();
                  s.yytext = s.yytext.slice(0, -8).trim();
                  return 25;
                case 38:
                  this.popState();
                  s.yytext = s.yytext.slice(0, -10).trim();
                  return 26;
                case 39:
                  return 44;
                case 40:
                  return 45;
                case 41:
                  return 46;
                case 42:
                  return 47;
                case 43:
                  this.pushState("STATE_STRING");
                  break;
                case 44:
                  this.pushState("STATE_ID");
                  return "AS";
                case 45:
                  this.popState();
                  return "ID";
                case 46:
                  this.popState();
                  break;
                case 47:
                  return "STATE_DESCR";
                case 48:
                  return 18;
                case 49:
                  this.popState();
                  break;
                case 50:
                  this.popState();
                  this.pushState("struct");
                  return 19;
                case 51:
                  break;
                case 52:
                  this.popState();
                  return 20;
                case 53:
                  break;
                case 54:
                  this.begin("NOTE");
                  return 28;
                case 55:
                  this.popState();
                  this.pushState("NOTE_ID");
                  return 52;
                case 56:
                  this.popState();
                  this.pushState("NOTE_ID");
                  return 53;
                case 57:
                  this.popState();
                  this.pushState("FLOATING_NOTE");
                  break;
                case 58:
                  this.popState();
                  this.pushState("FLOATING_NOTE_ID");
                  return "AS";
                case 59:
                  break;
                case 60:
                  return "NOTE_TEXT";
                case 61:
                  this.popState();
                  return "ID";
                case 62:
                  this.popState();
                  this.pushState("NOTE_TEXT");
                  return 23;
                case 63:
                  this.popState();
                  s.yytext = s.yytext.substr(2).trim();
                  return 30;
                case 64:
                  this.popState();
                  s.yytext = s.yytext.slice(0, -8).trim();
                  return 30;
                case 65:
                  return 6;
                case 66:
                  return 6;
                case 67:
                  return 15;
                case 68:
                  return 50;
                case 69:
                  return 23;
                case 70:
                  s.yytext = s.yytext.trim();
                  return 13;
                case 71:
                  return 14;
                case 72:
                  return 27;
                case 73:
                  return 51;
                case 74:
                  return 5;
                case 75:
                  return "INVALID";
              }
            },
            rules: [
              /^(?:default\b)/i,
              /^(?:.*direction\s+TB[^\n]*)/i,
              /^(?:.*direction\s+BT[^\n]*)/i,
              /^(?:.*direction\s+RL[^\n]*)/i,
              /^(?:.*direction\s+LR[^\n]*)/i,
              /^(?:%%(?!\{)[^\n]*)/i,
              /^(?:[^\}]%%[^\n]*)/i,
              /^(?:[\n]+)/i,
              /^(?:[\s]+)/i,
              /^(?:((?!\n)\s)+)/i,
              /^(?:#[^\n]*)/i,
              /^(?:%[^\n]*)/i,
              /^(?:scale\s+)/i,
              /^(?:\d+)/i,
              /^(?:\s+width\b)/i,
              /^(?:accTitle\s*:\s*)/i,
              /^(?:(?!\n||)*[^\n]*)/i,
              /^(?:accDescr\s*:\s*)/i,
              /^(?:(?!\n||)*[^\n]*)/i,
              /^(?:accDescr\s*\{\s*)/i,
              /^(?:[\}])/i,
              /^(?:[^\}]*)/i,
              /^(?:classDef\s+)/i,
              /^(?:DEFAULT\s+)/i,
              /^(?:\w+\s+)/i,
              /^(?:[^\n]*)/i,
              /^(?:class\s+)/i,
              /^(?:(\w+)+((,\s*\w+)*))/i,
              /^(?:[^\n]*)/i,
              /^(?:scale\s+)/i,
              /^(?:\d+)/i,
              /^(?:\s+width\b)/i,
              /^(?:state\s+)/i,
              /^(?:.*<<fork>>)/i,
              /^(?:.*<<join>>)/i,
              /^(?:.*<<choice>>)/i,
              /^(?:.*\[\[fork\]\])/i,
              /^(?:.*\[\[join\]\])/i,
              /^(?:.*\[\[choice\]\])/i,
              /^(?:.*direction\s+TB[^\n]*)/i,
              /^(?:.*direction\s+BT[^\n]*)/i,
              /^(?:.*direction\s+RL[^\n]*)/i,
              /^(?:.*direction\s+LR[^\n]*)/i,
              /^(?:["])/i,
              /^(?:\s*as\s+)/i,
              /^(?:[^\n\{]*)/i,
              /^(?:["])/i,
              /^(?:[^"]*)/i,
              /^(?:[^\n\s\{]+)/i,
              /^(?:\n)/i,
              /^(?:\{)/i,
              /^(?:%%(?!\{)[^\n]*)/i,
              /^(?:\})/i,
              /^(?:[\n])/i,
              /^(?:note\s+)/i,
              /^(?:left of\b)/i,
              /^(?:right of\b)/i,
              /^(?:")/i,
              /^(?:\s*as\s*)/i,
              /^(?:["])/i,
              /^(?:[^"]*)/i,
              /^(?:[^\n]*)/i,
              /^(?:\s*[^:\n\s\-]+)/i,
              /^(?:\s*:[^:\n;]+)/i,
              /^(?:[\s\S]*?end note\b)/i,
              /^(?:stateDiagram\s+)/i,
              /^(?:stateDiagram-v2\s+)/i,
              /^(?:hide empty description\b)/i,
              /^(?:\[\*\])/i,
              /^(?:[^:\n\s\-\{]+)/i,
              /^(?:\s*:[^:\n;]+)/i,
              /^(?:-->)/i,
              /^(?:--)/i,
              /^(?::::)/i,
              /^(?:$)/i,
              /^(?:.)/i,
            ],
            conditions: {
              LINE: { rules: [9, 10], inclusive: false },
              struct: { rules: [9, 10, 22, 26, 32, 39, 40, 41, 42, 51, 52, 53, 54, 68, 69, 70, 71, 72], inclusive: false },
              FLOATING_NOTE_ID: { rules: [61], inclusive: false },
              FLOATING_NOTE: { rules: [58, 59, 60], inclusive: false },
              NOTE_TEXT: { rules: [63, 64], inclusive: false },
              NOTE_ID: { rules: [62], inclusive: false },
              NOTE: { rules: [55, 56, 57], inclusive: false },
              CLASS_STYLE: { rules: [28], inclusive: false },
              CLASS: { rules: [27], inclusive: false },
              CLASSDEFID: { rules: [25], inclusive: false },
              CLASSDEF: { rules: [23, 24], inclusive: false },
              acc_descr_multiline: { rules: [20, 21], inclusive: false },
              acc_descr: { rules: [18], inclusive: false },
              acc_title: { rules: [16], inclusive: false },
              SCALE: { rules: [13, 14, 30, 31], inclusive: false },
              ALIAS: { rules: [], inclusive: false },
              STATE_ID: { rules: [45], inclusive: false },
              STATE_STRING: { rules: [46, 47], inclusive: false },
              FORK_STATE: { rules: [], inclusive: false },
              STATE: { rules: [9, 10, 33, 34, 35, 36, 37, 38, 43, 44, 48, 49, 50], inclusive: false },
              ID: { rules: [9, 10], inclusive: false },
              INITIAL: {
                rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 15, 17, 19, 22, 26, 29, 32, 50, 54, 65, 66, 67, 68, 69, 70, 71, 73, 74, 75],
                inclusive: true,
              },
            },
          };
          return t;
        })();
        L.lexer = I;
        function O() {
          this.yy = {};
        }
        O.prototype = L;
        L.Parser = O;
        return new O();
      })();
      n.parser = n;
      const r = n;
      const o = "LR";
      const a = "TB";
      const c = "state";
      const l = "relation";
      const h = "classDef";
      const u = "applyClass";
      const f = "default";
      const d = "divider";
      const p = "[*]";
      const y = "start";
      const m = p;
      const S = "end";
      const g = "color";
      const _ = "fill";
      const k = "bgFill";
      const b = ",";
      function T() {
        return {};
      }
      let E = o;
      let x = [];
      let v = T();
      const C = () => ({ relations: [], states: {}, documents: {} });
      let $ = { root: C() };
      let D = $.root;
      let A = 0;
      let L = 0;
      const I = { LINE: 0, DOTTED_LINE: 1 };
      const O = { AGGREGATION: 0, EXTENSION: 1, COMPOSITION: 2, DEPENDENCY: 3 };
      const N = (t) => JSON.parse(JSON.stringify(t));
      const R = (t) => {
        i.l.info("Setting root doc", t);
        x = t;
      };
      const w = () => x;
      const B = (t, e, s) => {
        if (e.stmt === l) {
          B(t, e.state1, true);
          B(t, e.state2, false);
        } else {
          if (e.stmt === c) {
            if (e.id === "[*]") {
              e.id = s ? t.id + "_start" : t.id + "_end";
              e.start = s;
            } else {
              e.id = e.id.trim();
            }
          }
          if (e.doc) {
            const t = [];
            let s = [];
            let n;
            for (n = 0; n < e.doc.length; n++) {
              if (e.doc[n].type === d) {
                const i = N(e.doc[n]);
                i.doc = N(s);
                t.push(i);
                s = [];
              } else {
                s.push(e.doc[n]);
              }
            }
            if (t.length > 0 && s.length > 0) {
              const n = { stmt: c, id: (0, i.G)(), type: "divider", doc: N(s) };
              t.push(N(n));
              e.doc = t;
            }
            e.doc.forEach((t) => B(e, t, true));
          }
        }
      };
      const P = () => {
        B({ id: "root" }, { id: "root", doc: x }, true);
        return { id: "root", doc: x };
      };
      const F = (t) => {
        let e;
        if (t.doc) {
          e = t.doc;
        } else {
          e = t;
        }
        i.l.info(e);
        j(true);
        i.l.info("Extract", e);
        e.forEach((t) => {
          switch (t.stmt) {
            case c:
              G(t.id.trim(), t.type, t.doc, t.description, t.note, t.classes, t.styles, t.textStyles);
              break;
            case l:
              V(t.state1, t.state2, t.description);
              break;
            case h:
              tt(t.id.trim(), t.classes);
              break;
            case u:
              st(t.id.trim(), t.styleClass);
              break;
          }
        });
      };
      const G = function (t, e = f, s = null, n = null, r = null, o = null, a = null, c = null) {
        const l = t == null ? void 0 : t.trim();
        if (D.states[l] === void 0) {
          i.l.info("Adding state ", l, n);
          D.states[l] = { id: l, descriptions: [], type: e, doc: s, note: r, classes: [], styles: [], textStyles: [] };
        } else {
          if (!D.states[l].doc) {
            D.states[l].doc = s;
          }
          if (!D.states[l].type) {
            D.states[l].type = e;
          }
        }
        if (n) {
          i.l.info("Setting state description", l, n);
          if (typeof n === "string") {
            q(l, n.trim());
          }
          if (typeof n === "object") {
            n.forEach((t) => q(l, t.trim()));
          }
        }
        if (r) {
          D.states[l].note = r;
          D.states[l].note.text = i.e.sanitizeText(D.states[l].note.text, (0, i.c)());
        }
        if (o) {
          i.l.info("Setting state classes", l, o);
          const t = typeof o === "string" ? [o] : o;
          t.forEach((t) => st(l, t.trim()));
        }
        if (a) {
          i.l.info("Setting state styles", l, a);
          const t = typeof a === "string" ? [a] : a;
          t.forEach((t) => it(l, t.trim()));
        }
        if (c) {
          i.l.info("Setting state styles", l, a);
          const t = typeof c === "string" ? [c] : c;
          t.forEach((t) => nt(l, t.trim()));
        }
      };
      const j = function (t) {
        $ = { root: C() };
        D = $.root;
        A = 0;
        v = T();
        if (!t) {
          (0, i.t)();
        }
      };
      const Y = function (t) {
        return D.states[t];
      };
      const U = function () {
        return D.states;
      };
      const z = function () {
        i.l.info("Documents = ", $);
      };
      const H = function () {
        return D.relations;
      };
      function M(t = "") {
        let e = t;
        if (t === p) {
          A++;
          e = `${y}${A}`;
        }
        return e;
      }
      function X(t = "", e = f) {
        return t === p ? y : e;
      }
      function J(t = "") {
        let e = t;
        if (t === m) {
          A++;
          e = `${S}${A}`;
        }
        return e;
      }
      function K(t = "", e = f) {
        return t === m ? S : e;
      }
      function W(t, e, s) {
        let n = M(t.id.trim());
        let r = X(t.id.trim(), t.type);
        let o = M(e.id.trim());
        let a = X(e.id.trim(), e.type);
        G(n, r, t.doc, t.description, t.note, t.classes, t.styles, t.textStyles);
        G(o, a, e.doc, e.description, e.note, e.classes, e.styles, e.textStyles);
        D.relations.push({ id1: n, id2: o, relationTitle: i.e.sanitizeText(s, (0, i.c)()) });
      }
      const V = function (t, e, s) {
        if (typeof t === "object") {
          W(t, e, s);
        } else {
          const n = M(t.trim());
          const r = X(t);
          const o = J(e.trim());
          const a = K(e);
          G(n, r);
          G(o, a);
          D.relations.push({ id1: n, id2: o, title: i.e.sanitizeText(s, (0, i.c)()) });
        }
      };
      const q = function (t, e) {
        const s = D.states[t];
        const n = e.startsWith(":") ? e.replace(":", "").trim() : e;
        s.descriptions.push(i.e.sanitizeText(n, (0, i.c)()));
      };
      const Q = function (t) {
        if (t.substring(0, 1) === ":") {
          return t.substr(2).trim();
        } else {
          return t.trim();
        }
      };
      const Z = () => {
        L++;
        return "divider-id-" + L;
      };
      const tt = function (t, e = "") {
        if (v[t] === void 0) {
          v[t] = { id: t, styles: [], textStyles: [] };
        }
        const s = v[t];
        if (e !== void 0 && e !== null) {
          e.split(b).forEach((t) => {
            const e = t.replace(/([^;]*);/, "$1").trim();
            if (t.match(g)) {
              const t = e.replace(_, k);
              const i = t.replace(g, _);
              s.textStyles.push(i);
            }
            s.styles.push(e);
          });
        }
      };
      const et = function () {
        return v;
      };
      const st = function (t, e) {
        t.split(",").forEach(function (t) {
          let s = Y(t);
          if (s === void 0) {
            const e = t.trim();
            G(e);
            s = Y(e);
          }
          s.classes.push(e);
        });
      };
      const it = function (t, e) {
        const s = Y(t);
        if (s !== void 0) {
          s.textStyles.push(e);
        }
      };
      const nt = function (t, e) {
        const s = Y(t);
        if (s !== void 0) {
          s.textStyles.push(e);
        }
      };
      const rt = () => E;
      const ot = (t) => {
        E = t;
      };
      const at = (t) => (t && t[0] === ":" ? t.substr(1).trim() : t.trim());
      const ct = {
        getConfig: () => (0, i.c)().state,
        addState: G,
        clear: j,
        getState: Y,
        getStates: U,
        getRelations: H,
        getClasses: et,
        getDirection: rt,
        addRelation: V,
        getDividerId: Z,
        setDirection: ot,
        cleanupLabel: Q,
        lineType: I,
        relationType: O,
        logDocuments: z,
        getRootDoc: w,
        setRootDoc: R,
        getRootDocV2: P,
        extract: F,
        trimColon: at,
        getAccTitle: i.g,
        setAccTitle: i.s,
        getAccDescription: i.a,
        setAccDescription: i.b,
        addStyleClass: tt,
        setCssClass: st,
        addDescription: q,
        setDiagramTitle: i.q,
        getDiagramTitle: i.r,
      };
      const lt = (t) =>
        `\ndefs #statediagram-barbEnd {\n    fill: ${t.transitionColor};\n    stroke: ${t.transitionColor};\n  }\ng.stateGroup text {\n  fill: ${t.nodeBorder};\n  stroke: none;\n  font-size: 10px;\n}\ng.stateGroup text {\n  fill: ${t.textColor};\n  stroke: none;\n  font-size: 10px;\n\n}\ng.stateGroup .state-title {\n  font-weight: bolder;\n  fill: ${t.stateLabelColor};\n}\n\ng.stateGroup rect {\n  fill: ${t.mainBkg};\n  stroke: ${t.nodeBorder};\n}\n\ng.stateGroup line {\n  stroke: ${t.lineColor};\n  stroke-width: 1;\n}\n\n.transition {\n  stroke: ${t.transitionColor};\n  stroke-width: 1;\n  fill: none;\n}\n\n.stateGroup .composit {\n  fill: ${t.background};\n  border-bottom: 1px\n}\n\n.stateGroup .alt-composit {\n  fill: #e0e0e0;\n  border-bottom: 1px\n}\n\n.state-note {\n  stroke: ${t.noteBorderColor};\n  fill: ${t.noteBkgColor};\n\n  text {\n    fill: ${t.noteTextColor};\n    stroke: none;\n    font-size: 10px;\n  }\n}\n\n.stateLabel .box {\n  stroke: none;\n  stroke-width: 0;\n  fill: ${t.mainBkg};\n  opacity: 0.5;\n}\n\n.edgeLabel .label rect {\n  fill: ${t.labelBackgroundColor};\n  opacity: 0.5;\n}\n.edgeLabel .label text {\n  fill: ${t.transitionLabelColor || t.tertiaryTextColor};\n}\n.label div .edgeLabel {\n  color: ${t.transitionLabelColor || t.tertiaryTextColor};\n}\n\n.stateLabel text {\n  fill: ${t.stateLabelColor};\n  font-size: 10px;\n  font-weight: bold;\n}\n\n.node circle.state-start {\n  fill: ${t.specialStateColor};\n  stroke: ${t.specialStateColor};\n}\n\n.node .fork-join {\n  fill: ${t.specialStateColor};\n  stroke: ${t.specialStateColor};\n}\n\n.node circle.state-end {\n  fill: ${t.innerEndBackground};\n  stroke: ${t.background};\n  stroke-width: 1.5\n}\n.end-state-inner {\n  fill: ${t.compositeBackground || t.background};\n  // stroke: ${t.background};\n  stroke-width: 1.5\n}\n\n.node rect {\n  fill: ${t.stateBkg || t.mainBkg};\n  stroke: ${t.stateBorder || t.nodeBorder};\n  stroke-width: 1px;\n}\n.node polygon {\n  fill: ${t.mainBkg};\n  stroke: ${t.stateBorder || t.nodeBorder};;\n  stroke-width: 1px;\n}\n#statediagram-barbEnd {\n  fill: ${t.lineColor};\n}\n\n.statediagram-cluster rect {\n  fill: ${t.compositeTitleBackground};\n  stroke: ${t.stateBorder || t.nodeBorder};\n  stroke-width: 1px;\n}\n\n.cluster-label, .nodeLabel {\n  color: ${t.stateLabelColor};\n}\n\n.statediagram-cluster rect.outer {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-state .divider {\n  stroke: ${t.stateBorder || t.nodeBorder};\n}\n\n.statediagram-state .title-state {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-cluster.statediagram-cluster .inner {\n  fill: ${t.compositeBackground || t.background};\n}\n.statediagram-cluster.statediagram-cluster-alt .inner {\n  fill: ${t.altBackground ? t.altBackground : "#efefef"};\n}\n\n.statediagram-cluster .inner {\n  rx:0;\n  ry:0;\n}\n\n.statediagram-state rect.basic {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-state rect.divider {\n  stroke-dasharray: 10,10;\n  fill: ${t.altBackground ? t.altBackground : "#efefef"};\n}\n\n.note-edge {\n  stroke-dasharray: 5;\n}\n\n.statediagram-note rect {\n  fill: ${t.noteBkgColor};\n  stroke: ${t.noteBorderColor};\n  stroke-width: 1px;\n  rx: 0;\n  ry: 0;\n}\n.statediagram-note rect {\n  fill: ${t.noteBkgColor};\n  stroke: ${t.noteBorderColor};\n  stroke-width: 1px;\n  rx: 0;\n  ry: 0;\n}\n\n.statediagram-note text {\n  fill: ${t.noteTextColor};\n}\n\n.statediagram-note .nodeLabel {\n  color: ${t.noteTextColor};\n}\n.statediagram .edgeLabel {\n  color: red; // ${t.noteTextColor};\n}\n\n#dependencyStart, #dependencyEnd {\n  fill: ${t.lineColor};\n  stroke: ${t.lineColor};\n  stroke-width: 1;\n}\n\n.statediagramTitleText {\n  text-anchor: middle;\n  font-size: 18px;\n  fill: ${t.textColor};\n}\n`;
      const ht = lt;
    },
  },
]);
