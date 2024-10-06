"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [526],
  {
    50526: (t, e, n) => {
      n.r(e);
      n.d(e, { diagram: () => it });
      var i = n(23787);
      var s = n(34596);
      var r = n(80561);
      var a = n(23235);
      var o = n(61364);
      var c = n(27484);
      var l = n.n(c);
      var h = n(17967);
      var d = n(27856);
      var u = n.n(d);
      var p = (function () {
        var t = function (t, e, n, i) {
            for (n = n || {}, i = t.length; i--; n[t[i]] = e);
            return n;
          },
          e = [6, 8, 10, 11, 12, 14, 16, 17, 20, 21],
          n = [1, 9],
          i = [1, 10],
          s = [1, 11],
          r = [1, 12],
          a = [1, 13],
          o = [1, 16],
          c = [1, 17];
        var l = {
          trace: function t() {},
          yy: {},
          symbols_: {
            error: 2,
            start: 3,
            timeline: 4,
            document: 5,
            EOF: 6,
            line: 7,
            SPACE: 8,
            statement: 9,
            NEWLINE: 10,
            title: 11,
            acc_title: 12,
            acc_title_value: 13,
            acc_descr: 14,
            acc_descr_value: 15,
            acc_descr_multiline_value: 16,
            section: 17,
            period_statement: 18,
            event_statement: 19,
            period: 20,
            event: 21,
            $accept: 0,
            $end: 1,
          },
          terminals_: {
            2: "error",
            4: "timeline",
            6: "EOF",
            8: "SPACE",
            10: "NEWLINE",
            11: "title",
            12: "acc_title",
            13: "acc_title_value",
            14: "acc_descr",
            15: "acc_descr_value",
            16: "acc_descr_multiline_value",
            17: "section",
            20: "period",
            21: "event",
          },
          productions_: [
            0,
            [3, 3],
            [5, 0],
            [5, 2],
            [7, 2],
            [7, 1],
            [7, 1],
            [7, 1],
            [9, 1],
            [9, 2],
            [9, 2],
            [9, 1],
            [9, 1],
            [9, 1],
            [9, 1],
            [18, 1],
            [19, 1],
          ],
          performAction: function t(e, n, i, s, r, a, o) {
            var c = a.length - 1;
            switch (r) {
              case 1:
                return a[c - 1];
              case 2:
                this.$ = [];
                break;
              case 3:
                a[c - 1].push(a[c]);
                this.$ = a[c - 1];
                break;
              case 4:
              case 5:
                this.$ = a[c];
                break;
              case 6:
              case 7:
                this.$ = [];
                break;
              case 8:
                s.getCommonDb().setDiagramTitle(a[c].substr(6));
                this.$ = a[c].substr(6);
                break;
              case 9:
                this.$ = a[c].trim();
                s.getCommonDb().setAccTitle(this.$);
                break;
              case 10:
              case 11:
                this.$ = a[c].trim();
                s.getCommonDb().setAccDescription(this.$);
                break;
              case 12:
                s.addSection(a[c].substr(8));
                this.$ = a[c].substr(8);
                break;
              case 15:
                s.addTask(a[c], 0, "");
                this.$ = a[c];
                break;
              case 16:
                s.addEvent(a[c].substr(2));
                this.$ = a[c];
                break;
            }
          },
          table: [
            { 3: 1, 4: [1, 2] },
            { 1: [3] },
            t(e, [2, 2], { 5: 3 }),
            { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: n, 12: i, 14: s, 16: r, 17: a, 18: 14, 19: 15, 20: o, 21: c },
            t(e, [2, 7], { 1: [2, 1] }),
            t(e, [2, 3]),
            { 9: 18, 11: n, 12: i, 14: s, 16: r, 17: a, 18: 14, 19: 15, 20: o, 21: c },
            t(e, [2, 5]),
            t(e, [2, 6]),
            t(e, [2, 8]),
            { 13: [1, 19] },
            { 15: [1, 20] },
            t(e, [2, 11]),
            t(e, [2, 12]),
            t(e, [2, 13]),
            t(e, [2, 14]),
            t(e, [2, 15]),
            t(e, [2, 16]),
            t(e, [2, 4]),
            t(e, [2, 9]),
            t(e, [2, 10]),
          ],
          defaultActions: {},
          parseError: function t(e, n) {
            if (n.recoverable) {
              this.trace(e);
            } else {
              var i = new Error(e);
              i.hash = n;
              throw i;
            }
          },
          parse: function t(e) {
            var n = this,
              i = [0],
              s = [],
              r = [null],
              a = [],
              o = this.table,
              c = "",
              l = 0,
              h = 0,
              d = 2,
              u = 1;
            var p = a.slice.call(arguments, 1);
            var f = Object.create(this.lexer);
            var y = { yy: {} };
            for (var g in this.yy) {
              if (Object.prototype.hasOwnProperty.call(this.yy, g)) {
                y.yy[g] = this.yy[g];
              }
            }
            f.setInput(e, y.yy);
            y.yy.lexer = f;
            y.yy.parser = this;
            if (typeof f.yylloc == "undefined") {
              f.yylloc = {};
            }
            var m = f.yylloc;
            a.push(m);
            var x = f.options && f.options.ranges;
            if (typeof y.yy.parseError === "function") {
              this.parseError = y.yy.parseError;
            } else {
              this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function b() {
              var t;
              t = s.pop() || f.lex() || u;
              if (typeof t !== "number") {
                if (t instanceof Array) {
                  s = t;
                  t = s.pop();
                }
                t = n.symbols_[t] || t;
              }
              return t;
            }
            var _,
              k,
              v,
              w,
              S = {},
              $,
              E,
              I,
              M;
            while (true) {
              k = i[i.length - 1];
              if (this.defaultActions[k]) {
                v = this.defaultActions[k];
              } else {
                if (_ === null || typeof _ == "undefined") {
                  _ = b();
                }
                v = o[k] && o[k][_];
              }
              if (typeof v === "undefined" || !v.length || !v[0]) {
                var T = "";
                M = [];
                for ($ in o[k]) {
                  if (this.terminals_[$] && $ > d) {
                    M.push("'" + this.terminals_[$] + "'");
                  }
                }
                if (f.showPosition) {
                  T =
                    "Parse error on line " +
                    (l + 1) +
                    ":\n" +
                    f.showPosition() +
                    "\nExpecting " +
                    M.join(", ") +
                    ", got '" +
                    (this.terminals_[_] || _) +
                    "'";
                } else {
                  T = "Parse error on line " + (l + 1) + ": Unexpected " + (_ == u ? "end of input" : "'" + (this.terminals_[_] || _) + "'");
                }
                this.parseError(T, { text: f.match, token: this.terminals_[_] || _, line: f.yylineno, loc: m, expected: M });
              }
              if (v[0] instanceof Array && v.length > 1) {
                throw new Error("Parse Error: multiple actions possible at state: " + k + ", token: " + _);
              }
              switch (v[0]) {
                case 1:
                  i.push(_);
                  r.push(f.yytext);
                  a.push(f.yylloc);
                  i.push(v[1]);
                  _ = null;
                  {
                    h = f.yyleng;
                    c = f.yytext;
                    l = f.yylineno;
                    m = f.yylloc;
                  }
                  break;
                case 2:
                  E = this.productions_[v[1]][1];
                  S.$ = r[r.length - E];
                  S._$ = {
                    first_line: a[a.length - (E || 1)].first_line,
                    last_line: a[a.length - 1].last_line,
                    first_column: a[a.length - (E || 1)].first_column,
                    last_column: a[a.length - 1].last_column,
                  };
                  if (x) {
                    S._$.range = [a[a.length - (E || 1)].range[0], a[a.length - 1].range[1]];
                  }
                  w = this.performAction.apply(S, [c, h, l, y.yy, v[1], r, a].concat(p));
                  if (typeof w !== "undefined") {
                    return w;
                  }
                  if (E) {
                    i = i.slice(0, -1 * E * 2);
                    r = r.slice(0, -1 * E);
                    a = a.slice(0, -1 * E);
                  }
                  i.push(this.productions_[v[1]][0]);
                  r.push(S.$);
                  a.push(S._$);
                  I = o[i[i.length - 2]][i[i.length - 1]];
                  i.push(I);
                  break;
                case 3:
                  return true;
              }
            }
            return true;
          },
        };
        var h = (function () {
          var t = {
            EOF: 1,
            parseError: function t(e, n) {
              if (this.yy.parser) {
                this.yy.parser.parseError(e, n);
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
              var n = t.split(/(?:\r\n?|\n)/g);
              this._input = t + this._input;
              this.yytext = this.yytext.substr(0, this.yytext.length - e);
              this.offset -= e;
              var i = this.match.split(/(?:\r\n?|\n)/g);
              this.match = this.match.substr(0, this.match.length - 1);
              this.matched = this.matched.substr(0, this.matched.length - 1);
              if (n.length - 1) {
                this.yylineno -= n.length - 1;
              }
              var s = this.yylloc.range;
              this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: n
                  ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length
                  : this.yylloc.first_column - e,
              };
              if (this.options.ranges) {
                this.yylloc.range = [s[0], s[0] + this.yyleng - e];
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
              var n, i, s;
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
              n = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]);
              if (this.done && this._input) {
                this.done = false;
              }
              if (n) {
                return n;
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
              var t, e, n, i;
              if (!this._more) {
                this.yytext = "";
                this.match = "";
              }
              var s = this._currentRules();
              for (var r = 0; r < s.length; r++) {
                n = this._input.match(this.rules[s[r]]);
                if (n && (!e || n[0].length > e[0].length)) {
                  e = n;
                  i = r;
                  if (this.options.backtrack_lexer) {
                    t = this.test_match(n, s[r]);
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
                t = this.test_match(e, s[i]);
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
            performAction: function t(e, n, i, s) {
              switch (i) {
                case 0:
                  break;
                case 1:
                  break;
                case 2:
                  return 10;
                case 3:
                  break;
                case 4:
                  break;
                case 5:
                  return 4;
                case 6:
                  return 11;
                case 7:
                  this.begin("acc_title");
                  return 12;
                case 8:
                  this.popState();
                  return "acc_title_value";
                case 9:
                  this.begin("acc_descr");
                  return 14;
                case 10:
                  this.popState();
                  return "acc_descr_value";
                case 11:
                  this.begin("acc_descr_multiline");
                  break;
                case 12:
                  this.popState();
                  break;
                case 13:
                  return "acc_descr_multiline_value";
                case 14:
                  return 17;
                case 15:
                  return 21;
                case 16:
                  return 20;
                case 17:
                  return 6;
                case 18:
                  return "INVALID";
              }
            },
            rules: [
              /^(?:%(?!\{)[^\n]*)/i,
              /^(?:[^\}]%%[^\n]*)/i,
              /^(?:[\n]+)/i,
              /^(?:\s+)/i,
              /^(?:#[^\n]*)/i,
              /^(?:timeline\b)/i,
              /^(?:title\s[^#\n;]+)/i,
              /^(?:accTitle\s*:\s*)/i,
              /^(?:(?!\n||)*[^\n]*)/i,
              /^(?:accDescr\s*:\s*)/i,
              /^(?:(?!\n||)*[^\n]*)/i,
              /^(?:accDescr\s*\{\s*)/i,
              /^(?:[\}])/i,
              /^(?:[^\}]*)/i,
              /^(?:section\s[^#:\n;]+)/i,
              /^(?::\s[^#:\n;]+)/i,
              /^(?:[^#:\n;]+)/i,
              /^(?:$)/i,
              /^(?:.)/i,
            ],
            conditions: {
              acc_descr_multiline: { rules: [12, 13], inclusive: false },
              acc_descr: { rules: [10], inclusive: false },
              acc_title: { rules: [8], inclusive: false },
              INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18], inclusive: true },
            },
          };
          return t;
        })();
        l.lexer = h;
        function d() {
          this.yy = {};
        }
        d.prototype = l;
        l.Parser = d;
        return new d();
      })();
      p.parser = p;
      const f = p;
      let y = "";
      let g = 0;
      const m = [];
      const x = [];
      const b = [];
      const _ = () => i.K;
      const k = function () {
        m.length = 0;
        x.length = 0;
        y = "";
        b.length = 0;
        (0, i.t)();
      };
      const v = function (t) {
        y = t;
        m.push(t);
      };
      const w = function () {
        return m;
      };
      const S = function () {
        let t = M();
        const e = 100;
        let n = 0;
        while (!t && n < e) {
          t = M();
          n++;
        }
        x.push(...b);
        return x;
      };
      const $ = function (t, e, n) {
        const i = { id: g++, section: y, type: y, task: t, score: e ? e : 0, events: n ? [n] : [] };
        b.push(i);
      };
      const E = function (t) {
        const e = b.find((t) => t.id === g - 1);
        e.events.push(t);
      };
      const I = function (t) {
        const e = { section: y, type: y, description: t, task: t, classes: [] };
        x.push(e);
      };
      const M = function () {
        const t = function (t) {
          return b[t].processed;
        };
        let e = true;
        for (const [n, i] of b.entries()) {
          t(n);
          e = e && i.processed;
        }
        return e;
      };
      const T = { clear: k, getCommonDb: _, addSection: v, getSections: w, getTasks: S, addTask: $, addTaskOrg: I, addEvent: E };
      const N = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            addEvent: E,
            addSection: v,
            addTask: $,
            addTaskOrg: I,
            clear: k,
            default: T,
            getCommonDb: _,
            getSections: w,
            getTasks: S,
          },
          Symbol.toStringTag,
          { value: "Module" }
        )
      );
      const A = 12;
      const C = function (t, e) {
        const n = t.append("rect");
        n.attr("x", e.x);
        n.attr("y", e.y);
        n.attr("fill", e.fill);
        n.attr("stroke", e.stroke);
        n.attr("width", e.width);
        n.attr("height", e.height);
        n.attr("rx", e.rx);
        n.attr("ry", e.ry);
        if (e.class !== void 0) {
          n.attr("class", e.class);
        }
        return n;
      };
      const L = function (t, e) {
        const n = 15;
        const i = t
          .append("circle")
          .attr("cx", e.cx)
          .attr("cy", e.cy)
          .attr("class", "face")
          .attr("r", n)
          .attr("stroke-width", 2)
          .attr("overflow", "visible");
        const r = t.append("g");
        r.append("circle")
          .attr("cx", e.cx - n / 3)
          .attr("cy", e.cy - n / 3)
          .attr("r", 1.5)
          .attr("stroke-width", 2)
          .attr("fill", "#666")
          .attr("stroke", "#666");
        r.append("circle")
          .attr("cx", e.cx + n / 3)
          .attr("cy", e.cy - n / 3)
          .attr("r", 1.5)
          .attr("stroke-width", 2)
          .attr("fill", "#666")
          .attr("stroke", "#666");
        function a(t) {
          const i = (0, s.Nb1)()
            .startAngle(Math.PI / 2)
            .endAngle(3 * (Math.PI / 2))
            .innerRadius(n / 2)
            .outerRadius(n / 2.2);
          t.append("path")
            .attr("class", "mouth")
            .attr("d", i)
            .attr("transform", "translate(" + e.cx + "," + (e.cy + 2) + ")");
        }
        function o(t) {
          const i = (0, s.Nb1)()
            .startAngle((3 * Math.PI) / 2)
            .endAngle(5 * (Math.PI / 2))
            .innerRadius(n / 2)
            .outerRadius(n / 2.2);
          t.append("path")
            .attr("class", "mouth")
            .attr("d", i)
            .attr("transform", "translate(" + e.cx + "," + (e.cy + 7) + ")");
        }
        function c(t) {
          t.append("line")
            .attr("class", "mouth")
            .attr("stroke", 2)
            .attr("x1", e.cx - 5)
            .attr("y1", e.cy + 7)
            .attr("x2", e.cx + 5)
            .attr("y2", e.cy + 7)
            .attr("class", "mouth")
            .attr("stroke-width", "1px")
            .attr("stroke", "#666");
        }
        if (e.score > 3) {
          a(r);
        } else if (e.score < 3) {
          o(r);
        } else {
          c(r);
        }
        return i;
      };
      const H = function (t, e) {
        const n = t.append("circle");
        n.attr("cx", e.cx);
        n.attr("cy", e.cy);
        n.attr("class", "actor-" + e.pos);
        n.attr("fill", e.fill);
        n.attr("stroke", e.stroke);
        n.attr("r", e.r);
        if (n.class !== void 0) {
          n.attr("class", n.class);
        }
        if (e.title !== void 0) {
          n.append("title").text(e.title);
        }
        return n;
      };
      const O = function (t, e) {
        const n = e.text.replace(/<br\s*\/?>/gi, " ");
        const i = t.append("text");
        i.attr("x", e.x);
        i.attr("y", e.y);
        i.attr("class", "legend");
        i.style("text-anchor", e.anchor);
        if (e.class !== void 0) {
          i.attr("class", e.class);
        }
        const s = i.append("tspan");
        s.attr("x", e.x + e.textMargin * 2);
        s.text(n);
        return i;
      };
      const P = function (t, e) {
        function n(t, e, n, i, s) {
          return (
            t +
            "," +
            e +
            " " +
            (t + n) +
            "," +
            e +
            " " +
            (t + n) +
            "," +
            (e + i - s) +
            " " +
            (t + n - s * 1.2) +
            "," +
            (e + i) +
            " " +
            t +
            "," +
            (e + i)
          );
        }
        const i = t.append("polygon");
        i.attr("points", n(e.x, e.y, 50, 20, 7));
        i.attr("class", "labelBox");
        e.y = e.y + e.labelMargin;
        e.x = e.x + 0.5 * e.labelMargin;
        O(t, e);
      };
      const j = function (t, e, n) {
        const i = t.append("g");
        const s = B();
        s.x = e.x;
        s.y = e.y;
        s.fill = e.fill;
        s.width = n.width;
        s.height = n.height;
        s.class = "journey-section section-type-" + e.num;
        s.rx = 3;
        s.ry = 3;
        C(i, s);
        F(n)(e.text, i, s.x, s.y, s.width, s.height, { class: "journey-section section-type-" + e.num }, n, e.colour);
      };
      let z = -1;
      const D = function (t, e, n) {
        const i = e.x + n.width / 2;
        const s = t.append("g");
        z++;
        const r = 300 + 5 * 30;
        s.append("line")
          .attr("id", "task" + z)
          .attr("x1", i)
          .attr("y1", e.y)
          .attr("x2", i)
          .attr("y2", r)
          .attr("class", "task-line")
          .attr("stroke-width", "1px")
          .attr("stroke-dasharray", "4 2")
          .attr("stroke", "#666");
        L(s, { cx: i, cy: 300 + (5 - e.score) * 30, score: e.score });
        const a = B();
        a.x = e.x;
        a.y = e.y;
        a.fill = e.fill;
        a.width = n.width;
        a.height = n.height;
        a.class = "task task-type-" + e.num;
        a.rx = 3;
        a.ry = 3;
        C(s, a);
        e.x + 14;
        F(n)(e.task, s, a.x, a.y, a.width, a.height, { class: "task" }, n, e.colour);
      };
      const R = function (t, e) {
        const n = C(t, { x: e.startx, y: e.starty, width: e.stopx - e.startx, height: e.stopy - e.starty, fill: e.fill, class: "rect" });
        n.lower();
      };
      const W = function () {
        return { x: 0, y: 0, fill: void 0, "text-anchor": "start", width: 100, height: 100, textMargin: 0, rx: 0, ry: 0 };
      };
      const B = function () {
        return { x: 0, y: 0, width: 100, anchor: "start", height: 100, rx: 0, ry: 0 };
      };
      const F = (function () {
        function t(t, e, n, s, r, a, o, c) {
          const l = e
            .append("text")
            .attr("x", n + r / 2)
            .attr("y", s + a / 2 + 5)
            .style("font-color", c)
            .style("text-anchor", "middle")
            .text(t);
          i(l, o);
        }
        function e(t, e, n, s, r, a, o, c, l) {
          const { taskFontSize: h, taskFontFamily: d } = c;
          const u = t.split(/<br\s*\/?>/gi);
          for (let p = 0; p < u.length; p++) {
            const t = p * h - (h * (u.length - 1)) / 2;
            const c = e
              .append("text")
              .attr("x", n + r / 2)
              .attr("y", s)
              .attr("fill", l)
              .style("text-anchor", "middle")
              .style("font-size", h)
              .style("font-family", d);
            c.append("tspan")
              .attr("x", n + r / 2)
              .attr("dy", t)
              .text(u[p]);
            c.attr("y", s + a / 2)
              .attr("dominant-baseline", "central")
              .attr("alignment-baseline", "central");
            i(c, o);
          }
        }
        function n(t, n, s, r, a, o, c, l) {
          const h = n.append("switch");
          const d = h.append("foreignObject").attr("x", s).attr("y", r).attr("width", a).attr("height", o).attr("position", "fixed");
          const u = d.append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
          u.append("div")
            .attr("class", "label")
            .style("display", "table-cell")
            .style("text-align", "center")
            .style("vertical-align", "middle")
            .text(t);
          e(t, h, s, r, a, o, c, l);
          i(u, c);
        }
        function i(t, e) {
          for (const n in e) {
            if (n in e) {
              t.attr(n, e[n]);
            }
          }
        }
        return function (i) {
          return i.textPlacement === "fo" ? n : i.textPlacement === "old" ? t : e;
        };
      })();
      const V = function (t) {
        t.append("defs")
          .append("marker")
          .attr("id", "arrowhead")
          .attr("refX", 5)
          .attr("refY", 2)
          .attr("markerWidth", 6)
          .attr("markerHeight", 4)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 0,0 V 4 L6,2 Z");
      };
      function Y(t, e) {
        t.each(function () {
          var t = (0, s.Ys)(this),
            n = t
              .text()
              .split(/(\s+|<br>)/)
              .reverse(),
            i,
            r = [],
            a = 1.1,
            o = t.attr("y"),
            c = parseFloat(t.attr("dy")),
            l = t
              .text(null)
              .append("tspan")
              .attr("x", 0)
              .attr("y", o)
              .attr("dy", c + "em");
          for (let s = 0; s < n.length; s++) {
            i = n[n.length - 1 - s];
            r.push(i);
            l.text(r.join(" ").trim());
            if (l.node().getComputedTextLength() > e || i === "<br>") {
              r.pop();
              l.text(r.join(" ").trim());
              if (i === "<br>") {
                r = [""];
              } else {
                r = [i];
              }
              l = t
                .append("tspan")
                .attr("x", 0)
                .attr("y", o)
                .attr("dy", a + "em")
                .text(i);
            }
          }
        });
      }
      const Z = function (t, e, n, i) {
        const s = (n % A) - 1;
        const r = t.append("g");
        e.section = s;
        r.attr("class", (e.class ? e.class + " " : "") + "timeline-node " + ("section-" + s));
        const a = r.append("g");
        const o = r.append("g");
        const c = o
          .append("text")
          .text(e.descr)
          .attr("dy", "1em")
          .attr("alignment-baseline", "middle")
          .attr("dominant-baseline", "middle")
          .attr("text-anchor", "middle")
          .call(Y, e.width);
        const l = c.node().getBBox();
        const h = i.fontSize && i.fontSize.replace ? i.fontSize.replace("px", "") : i.fontSize;
        e.height = l.height + h * 1.1 * 0.5 + e.padding;
        e.height = Math.max(e.height, e.maxHeight);
        e.width = e.width + 2 * e.padding;
        o.attr("transform", "translate(" + e.width / 2 + ", " + e.padding / 2 + ")");
        G(a, e, s);
        return e;
      };
      const q = function (t, e, n) {
        const i = t.append("g");
        const s = i
          .append("text")
          .text(e.descr)
          .attr("dy", "1em")
          .attr("alignment-baseline", "middle")
          .attr("dominant-baseline", "middle")
          .attr("text-anchor", "middle")
          .call(Y, e.width);
        const r = s.node().getBBox();
        const a = n.fontSize && n.fontSize.replace ? n.fontSize.replace("px", "") : n.fontSize;
        i.remove();
        return r.height + a * 1.1 * 0.5 + e.padding;
      };
      const G = function (t, e, n) {
        const i = 5;
        t.append("path")
          .attr("id", "node-" + e.id)
          .attr("class", "node-bkg node-" + e.type)
          .attr("d", `M0 ${e.height - i} v${-e.height + 2 * i} q0,-5 5,-5 h${e.width - 2 * i} q5,0 5,5 v${e.height - i} H0 Z`);
        t.append("line")
          .attr("class", "node-line-" + n)
          .attr("x1", 0)
          .attr("y1", e.height)
          .attr("x2", e.width)
          .attr("y2", e.height);
      };
      const U = {
        drawRect: C,
        drawCircle: H,
        drawSection: j,
        drawText: O,
        drawLabel: P,
        drawTask: D,
        drawBackgroundRect: R,
        getTextObj: W,
        getNoteRect: B,
        initGraphics: V,
        drawNode: Z,
        getVirtualNodeHeight: q,
      };
      const K = function (t, e, n, r) {
        var a, o;
        const c = (0, i.c)();
        const l = c.leftMargin ?? 50;
        i.l.debug("timeline", r.db);
        const h = c.securityLevel;
        let d;
        if (h === "sandbox") {
          d = (0, s.Ys)("#i" + e);
        }
        const u = h === "sandbox" ? (0, s.Ys)(d.nodes()[0].contentDocument.body) : (0, s.Ys)("body");
        const p = u.select("#" + e);
        p.append("g");
        const f = r.db.getTasks();
        const y = r.db.getCommonDb().getDiagramTitle();
        i.l.debug("task", f);
        U.initGraphics(p);
        const g = r.db.getSections();
        i.l.debug("sections", g);
        let m = 0;
        let x = 0;
        let b = 0;
        let _ = 0;
        let k = 50 + l;
        let v = 50;
        _ = 50;
        let w = 0;
        let S = true;
        g.forEach(function (t) {
          const e = { number: w, descr: t, section: w, width: 150, padding: 20, maxHeight: m };
          const n = U.getVirtualNodeHeight(p, e, c);
          i.l.debug("sectionHeight before draw", n);
          m = Math.max(m, n + 20);
        });
        let $ = 0;
        let E = 0;
        i.l.debug("tasks.length", f.length);
        for (const [s, T] of f.entries()) {
          const t = { number: s, descr: T, section: T.section, width: 150, padding: 20, maxHeight: x };
          const e = U.getVirtualNodeHeight(p, t, c);
          i.l.debug("taskHeight before draw", e);
          x = Math.max(x, e + 20);
          $ = Math.max($, T.events.length);
          let n = 0;
          for (let i = 0; i < T.events.length; i++) {
            const t = T.events[i];
            const e = { descr: t, section: T.section, number: T.section, width: 150, padding: 20, maxHeight: 50 };
            n += U.getVirtualNodeHeight(p, e, c);
          }
          E = Math.max(E, n);
        }
        i.l.debug("maxSectionHeight before draw", m);
        i.l.debug("maxTaskHeight before draw", x);
        if (g && g.length > 0) {
          g.forEach((t) => {
            const e = f.filter((e) => e.section === t);
            const n = { number: w, descr: t, section: w, width: 200 * Math.max(e.length, 1) - 50, padding: 20, maxHeight: m };
            i.l.debug("sectionNode", n);
            const s = p.append("g");
            const r = U.drawNode(s, n, w, c);
            i.l.debug("sectionNode output", r);
            s.attr("transform", `translate(${k}, ${_})`);
            v += m + 50;
            if (e.length > 0) {
              X(p, e, w, k, v, x, c, $, E, m, false);
            }
            k += 200 * Math.max(e.length, 1);
            v = _;
            w++;
          });
        } else {
          S = false;
          X(p, f, w, k, v, x, c, $, E, m, true);
        }
        const I = p.node().getBBox();
        i.l.debug("bounds", I);
        if (y) {
          p.append("text")
            .text(y)
            .attr("x", I.width / 2 - l)
            .attr("font-size", "4ex")
            .attr("font-weight", "bold")
            .attr("y", 20);
        }
        b = S ? m + x + 150 : x + 100;
        const M = p.append("g").attr("class", "lineWrapper");
        M.append("line")
          .attr("x1", l)
          .attr("y1", b)
          .attr("x2", I.width + 3 * l)
          .attr("y2", b)
          .attr("stroke-width", 4)
          .attr("stroke", "black")
          .attr("marker-end", "url(#arrowhead)");
        (0, i.o)(void 0, p, ((a = c.timeline) == null ? void 0 : a.padding) ?? 50, ((o = c.timeline) == null ? void 0 : o.useMaxWidth) ?? false);
      };
      const X = function (t, e, n, s, r, a, o, c, l, h, d) {
        var u;
        for (const p of e) {
          const e = { descr: p.task, section: n, number: n, width: 150, padding: 20, maxHeight: a };
          i.l.debug("taskNode", e);
          const c = t.append("g").attr("class", "taskWrapper");
          const f = U.drawNode(c, e, n, o);
          const y = f.height;
          i.l.debug("taskHeight after draw", y);
          c.attr("transform", `translate(${s}, ${r})`);
          a = Math.max(a, y);
          if (p.events) {
            const e = t.append("g").attr("class", "lineWrapper");
            let i = a;
            r += 100;
            i = i + J(t, p.events, n, s, r, o);
            r -= 100;
            e.append("line")
              .attr("x1", s + 190 / 2)
              .attr("y1", r + a)
              .attr("x2", s + 190 / 2)
              .attr("y2", r + a + (d ? a : h) + l + 120)
              .attr("stroke-width", 2)
              .attr("stroke", "black")
              .attr("marker-end", "url(#arrowhead)")
              .attr("stroke-dasharray", "5,5");
          }
          s = s + 200;
          if (d && !((u = o.timeline) == null ? void 0 : u.disableMulticolor)) {
            n++;
          }
        }
        r = r - 10;
      };
      const J = function (t, e, n, s, r, a) {
        let o = 0;
        const c = r;
        r = r + 100;
        for (const l of e) {
          const e = { descr: l, section: n, number: n, width: 150, padding: 20, maxHeight: 50 };
          i.l.debug("eventNode", e);
          const c = t.append("g").attr("class", "eventWrapper");
          const h = U.drawNode(c, e, n, a);
          const d = h.height;
          o = o + d;
          c.attr("transform", `translate(${s}, ${r})`);
          r = r + 10 + d;
        }
        r = c;
        return o;
      };
      const Q = { setConf: () => {}, draw: K };
      const tt = (t) => {
        let e = "";
        for (let n = 0; n < t.THEME_COLOR_LIMIT; n++) {
          t["lineColor" + n] = t["lineColor" + n] || t["cScaleInv" + n];
          if ((0, r.Z)(t["lineColor" + n])) {
            t["lineColor" + n] = (0, a.Z)(t["lineColor" + n], 20);
          } else {
            t["lineColor" + n] = (0, o.Z)(t["lineColor" + n], 20);
          }
        }
        for (let n = 0; n < t.THEME_COLOR_LIMIT; n++) {
          const i = "" + (17 - 3 * n);
          e += `\n    .section-${n - 1} rect, .section-${n - 1} path, .section-${n - 1} circle, .section-${n - 1} path  {\n      fill: ${t["cScale" + n]};\n    }\n    .section-${n - 1} text {\n     fill: ${t["cScaleLabel" + n]};\n    }\n    .node-icon-${n - 1} {\n      font-size: 40px;\n      color: ${t["cScaleLabel" + n]};\n    }\n    .section-edge-${n - 1}{\n      stroke: ${t["cScale" + n]};\n    }\n    .edge-depth-${n - 1}{\n      stroke-width: ${i};\n    }\n    .section-${n - 1} line {\n      stroke: ${t["cScaleInv" + n]} ;\n      stroke-width: 3;\n    }\n\n    .lineWrapper line{\n      stroke: ${t["cScaleLabel" + n]} ;\n    }\n\n    .disabled, .disabled circle, .disabled text {\n      fill: lightgray;\n    }\n    .disabled text {\n      fill: #efefef;\n    }\n    `;
        }
        return e;
      };
      const et = (t) =>
        `\n  .edge {\n    stroke-width: 3;\n  }\n  ${tt(t)}\n  .section-root rect, .section-root path, .section-root circle  {\n    fill: ${t.git0};\n  }\n  .section-root text {\n    fill: ${t.gitBranchLabel0};\n  }\n  .icon-container {\n    height:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .edge {\n    fill: none;\n  }\n  .eventWrapper  {\n   filter: brightness(120%);\n  }\n`;
      const nt = et;
      const it = { db: N, renderer: Q, parser: f, styles: nt };
    },
  },
]);
