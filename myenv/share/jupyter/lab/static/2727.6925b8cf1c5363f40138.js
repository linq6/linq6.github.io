"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2727],
  {
    62727: (t, e, n) => {
      n.r(e);
      n.d(e, { diagram: () => K });
      var s = n(23787);
      var i = n(34596);
      var r = n(75458);
      var a = n(27484);
      var o = n.n(a);
      var c = n(17967);
      var l = n(27856);
      var h = n.n(l);
      var u = (function () {
        var t = function (t, e, n, s) {
            for (n = n || {}, s = t.length; s--; n[t[s]] = e);
            return n;
          },
          e = [6, 8, 10, 11, 12, 14, 16, 17, 18],
          n = [1, 9],
          s = [1, 10],
          i = [1, 11],
          r = [1, 12],
          a = [1, 13],
          o = [1, 14];
        var c = {
          trace: function t() {},
          yy: {},
          symbols_: {
            error: 2,
            start: 3,
            journey: 4,
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
            taskName: 18,
            taskData: 19,
            $accept: 0,
            $end: 1,
          },
          terminals_: {
            2: "error",
            4: "journey",
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
            18: "taskName",
            19: "taskData",
          },
          productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 2]],
          performAction: function t(e, n, s, i, r, a, o) {
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
                i.setDiagramTitle(a[c].substr(6));
                this.$ = a[c].substr(6);
                break;
              case 9:
                this.$ = a[c].trim();
                i.setAccTitle(this.$);
                break;
              case 10:
              case 11:
                this.$ = a[c].trim();
                i.setAccDescription(this.$);
                break;
              case 12:
                i.addSection(a[c].substr(8));
                this.$ = a[c].substr(8);
                break;
              case 13:
                i.addTask(a[c - 1], a[c]);
                this.$ = "task";
                break;
            }
          },
          table: [
            { 3: 1, 4: [1, 2] },
            { 1: [3] },
            t(e, [2, 2], { 5: 3 }),
            { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: n, 12: s, 14: i, 16: r, 17: a, 18: o },
            t(e, [2, 7], { 1: [2, 1] }),
            t(e, [2, 3]),
            { 9: 15, 11: n, 12: s, 14: i, 16: r, 17: a, 18: o },
            t(e, [2, 5]),
            t(e, [2, 6]),
            t(e, [2, 8]),
            { 13: [1, 16] },
            { 15: [1, 17] },
            t(e, [2, 11]),
            t(e, [2, 12]),
            { 19: [1, 18] },
            t(e, [2, 4]),
            t(e, [2, 9]),
            t(e, [2, 10]),
            t(e, [2, 13]),
          ],
          defaultActions: {},
          parseError: function t(e, n) {
            if (n.recoverable) {
              this.trace(e);
            } else {
              var s = new Error(e);
              s.hash = n;
              throw s;
            }
          },
          parse: function t(e) {
            var n = this,
              s = [0],
              i = [],
              r = [null],
              a = [],
              o = this.table,
              c = "",
              l = 0,
              h = 0,
              u = 2,
              y = 1;
            var f = a.slice.call(arguments, 1);
            var p = Object.create(this.lexer);
            var d = { yy: {} };
            for (var g in this.yy) {
              if (Object.prototype.hasOwnProperty.call(this.yy, g)) {
                d.yy[g] = this.yy[g];
              }
            }
            p.setInput(e, d.yy);
            d.yy.lexer = p;
            d.yy.parser = this;
            if (typeof p.yylloc == "undefined") {
              p.yylloc = {};
            }
            var x = p.yylloc;
            a.push(x);
            var m = p.options && p.options.ranges;
            if (typeof d.yy.parseError === "function") {
              this.parseError = d.yy.parseError;
            } else {
              this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function k() {
              var t;
              t = i.pop() || p.lex() || y;
              if (typeof t !== "number") {
                if (t instanceof Array) {
                  i = t;
                  t = i.pop();
                }
                t = n.symbols_[t] || t;
              }
              return t;
            }
            var _,
              b,
              v,
              w,
              $ = {},
              M,
              T,
              E,
              S;
            while (true) {
              b = s[s.length - 1];
              if (this.defaultActions[b]) {
                v = this.defaultActions[b];
              } else {
                if (_ === null || typeof _ == "undefined") {
                  _ = k();
                }
                v = o[b] && o[b][_];
              }
              if (typeof v === "undefined" || !v.length || !v[0]) {
                var A = "";
                S = [];
                for (M in o[b]) {
                  if (this.terminals_[M] && M > u) {
                    S.push("'" + this.terminals_[M] + "'");
                  }
                }
                if (p.showPosition) {
                  A =
                    "Parse error on line " +
                    (l + 1) +
                    ":\n" +
                    p.showPosition() +
                    "\nExpecting " +
                    S.join(", ") +
                    ", got '" +
                    (this.terminals_[_] || _) +
                    "'";
                } else {
                  A = "Parse error on line " + (l + 1) + ": Unexpected " + (_ == y ? "end of input" : "'" + (this.terminals_[_] || _) + "'");
                }
                this.parseError(A, { text: p.match, token: this.terminals_[_] || _, line: p.yylineno, loc: x, expected: S });
              }
              if (v[0] instanceof Array && v.length > 1) {
                throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + _);
              }
              switch (v[0]) {
                case 1:
                  s.push(_);
                  r.push(p.yytext);
                  a.push(p.yylloc);
                  s.push(v[1]);
                  _ = null;
                  {
                    h = p.yyleng;
                    c = p.yytext;
                    l = p.yylineno;
                    x = p.yylloc;
                  }
                  break;
                case 2:
                  T = this.productions_[v[1]][1];
                  $.$ = r[r.length - T];
                  $._$ = {
                    first_line: a[a.length - (T || 1)].first_line,
                    last_line: a[a.length - 1].last_line,
                    first_column: a[a.length - (T || 1)].first_column,
                    last_column: a[a.length - 1].last_column,
                  };
                  if (m) {
                    $._$.range = [a[a.length - (T || 1)].range[0], a[a.length - 1].range[1]];
                  }
                  w = this.performAction.apply($, [c, h, l, d.yy, v[1], r, a].concat(f));
                  if (typeof w !== "undefined") {
                    return w;
                  }
                  if (T) {
                    s = s.slice(0, -1 * T * 2);
                    r = r.slice(0, -1 * T);
                    a = a.slice(0, -1 * T);
                  }
                  s.push(this.productions_[v[1]][0]);
                  r.push($.$);
                  a.push($._$);
                  E = o[s[s.length - 2]][s[s.length - 1]];
                  s.push(E);
                  break;
                case 3:
                  return true;
              }
            }
            return true;
          },
        };
        var l = (function () {
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
              var s = this.match.split(/(?:\r\n?|\n)/g);
              this.match = this.match.substr(0, this.match.length - 1);
              this.matched = this.matched.substr(0, this.matched.length - 1);
              if (n.length - 1) {
                this.yylineno -= n.length - 1;
              }
              var i = this.yylloc.range;
              this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: n
                  ? (n.length === s.length ? this.yylloc.first_column : 0) + s[s.length - n.length].length - n[0].length
                  : this.yylloc.first_column - e,
              };
              if (this.options.ranges) {
                this.yylloc.range = [i[0], i[0] + this.yyleng - e];
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
              var n, s, i;
              if (this.options.backtrack_lexer) {
                i = {
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
                  i.yylloc.range = this.yylloc.range.slice(0);
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
              n = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]);
              if (this.done && this._input) {
                this.done = false;
              }
              if (n) {
                return n;
              } else if (this._backtrack) {
                for (var r in i) {
                  this[r] = i[r];
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
              var t, e, n, s;
              if (!this._more) {
                this.yytext = "";
                this.match = "";
              }
              var i = this._currentRules();
              for (var r = 0; r < i.length; r++) {
                n = this._input.match(this.rules[i[r]]);
                if (n && (!e || n[0].length > e[0].length)) {
                  e = n;
                  s = r;
                  if (this.options.backtrack_lexer) {
                    t = this.test_match(n, i[r]);
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
                t = this.test_match(e, i[s]);
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
            performAction: function t(e, n, s, i) {
              switch (s) {
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
                  return 18;
                case 16:
                  return 19;
                case 17:
                  return ":";
                case 18:
                  return 6;
                case 19:
                  return "INVALID";
              }
            },
            rules: [
              /^(?:%(?!\{)[^\n]*)/i,
              /^(?:[^\}]%%[^\n]*)/i,
              /^(?:[\n]+)/i,
              /^(?:\s+)/i,
              /^(?:#[^\n]*)/i,
              /^(?:journey\b)/i,
              /^(?:title\s[^#\n;]+)/i,
              /^(?:accTitle\s*:\s*)/i,
              /^(?:(?!\n||)*[^\n]*)/i,
              /^(?:accDescr\s*:\s*)/i,
              /^(?:(?!\n||)*[^\n]*)/i,
              /^(?:accDescr\s*\{\s*)/i,
              /^(?:[\}])/i,
              /^(?:[^\}]*)/i,
              /^(?:section\s[^#:\n;]+)/i,
              /^(?:[^#:\n;]+)/i,
              /^(?::[^#\n;]+)/i,
              /^(?::)/i,
              /^(?:$)/i,
              /^(?:.)/i,
            ],
            conditions: {
              acc_descr_multiline: { rules: [12, 13], inclusive: false },
              acc_descr: { rules: [10], inclusive: false },
              acc_title: { rules: [8], inclusive: false },
              INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19], inclusive: true },
            },
          };
          return t;
        })();
        c.lexer = l;
        function h() {
          this.yy = {};
        }
        h.prototype = c;
        c.Parser = h;
        return new h();
      })();
      u.parser = u;
      const y = u;
      let f = "";
      const p = [];
      const d = [];
      const g = [];
      const x = function () {
        p.length = 0;
        d.length = 0;
        f = "";
        g.length = 0;
        (0, s.t)();
      };
      const m = function (t) {
        f = t;
        p.push(t);
      };
      const k = function () {
        return p;
      };
      const _ = function () {
        let t = $();
        const e = 100;
        let n = 0;
        while (!t && n < e) {
          t = $();
          n++;
        }
        d.push(...g);
        return d;
      };
      const b = function () {
        const t = [];
        d.forEach((e) => {
          if (e.people) {
            t.push(...e.people);
          }
        });
        const e = new Set(t);
        return [...e].sort();
      };
      const v = function (t, e) {
        const n = e.substr(1).split(":");
        let s = 0;
        let i = [];
        if (n.length === 1) {
          s = Number(n[0]);
          i = [];
        } else {
          s = Number(n[0]);
          i = n[1].split(",");
        }
        const r = i.map((t) => t.trim());
        const a = { section: f, type: f, people: r, task: t, score: s };
        g.push(a);
      };
      const w = function (t) {
        const e = { section: f, type: f, description: t, task: t, classes: [] };
        d.push(e);
      };
      const $ = function () {
        const t = function (t) {
          return g[t].processed;
        };
        let e = true;
        for (const [n, s] of g.entries()) {
          t(n);
          e = e && s.processed;
        }
        return e;
      };
      const M = function () {
        return b();
      };
      const T = {
        getConfig: () => (0, s.c)().journey,
        clear: x,
        setDiagramTitle: s.q,
        getDiagramTitle: s.r,
        setAccTitle: s.s,
        getAccTitle: s.g,
        setAccDescription: s.b,
        getAccDescription: s.a,
        addSection: m,
        getSections: k,
        getTasks: _,
        addTask: v,
        addTaskOrg: w,
        getActors: M,
      };
      const E = (t) =>
        `.label {\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    color: ${t.textColor};\n  }\n  .mouth {\n    stroke: #666;\n  }\n\n  line {\n    stroke: ${t.textColor}\n  }\n\n  .legend {\n    fill: ${t.textColor};\n  }\n\n  .label text {\n    fill: #333;\n  }\n  .label {\n    color: ${t.textColor}\n  }\n\n  .face {\n    ${t.faceColor ? `fill: ${t.faceColor}` : "fill: #FFF8DC"};\n    stroke: #999;\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${t.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${t.lineColor};\n    stroke-width: 1.5px;\n  }\n\n  .flowchart-link {\n    stroke: ${t.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${t.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n  }\n\n  .cluster text {\n    fill: ${t.titleColor};\n  }\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    font-size: 12px;\n    background: ${t.tertiaryColor};\n    border: 1px solid ${t.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .task-type-0, .section-type-0  {\n    ${t.fillType0 ? `fill: ${t.fillType0}` : ""};\n  }\n  .task-type-1, .section-type-1  {\n    ${t.fillType0 ? `fill: ${t.fillType1}` : ""};\n  }\n  .task-type-2, .section-type-2  {\n    ${t.fillType0 ? `fill: ${t.fillType2}` : ""};\n  }\n  .task-type-3, .section-type-3  {\n    ${t.fillType0 ? `fill: ${t.fillType3}` : ""};\n  }\n  .task-type-4, .section-type-4  {\n    ${t.fillType0 ? `fill: ${t.fillType4}` : ""};\n  }\n  .task-type-5, .section-type-5  {\n    ${t.fillType0 ? `fill: ${t.fillType5}` : ""};\n  }\n  .task-type-6, .section-type-6  {\n    ${t.fillType0 ? `fill: ${t.fillType6}` : ""};\n  }\n  .task-type-7, .section-type-7  {\n    ${t.fillType0 ? `fill: ${t.fillType7}` : ""};\n  }\n\n  .actor-0 {\n    ${t.actor0 ? `fill: ${t.actor0}` : ""};\n  }\n  .actor-1 {\n    ${t.actor1 ? `fill: ${t.actor1}` : ""};\n  }\n  .actor-2 {\n    ${t.actor2 ? `fill: ${t.actor2}` : ""};\n  }\n  .actor-3 {\n    ${t.actor3 ? `fill: ${t.actor3}` : ""};\n  }\n  .actor-4 {\n    ${t.actor4 ? `fill: ${t.actor4}` : ""};\n  }\n  .actor-5 {\n    ${t.actor5 ? `fill: ${t.actor5}` : ""};\n  }\n`;
      const S = E;
      const A = function (t, e) {
        return (0, r.d)(t, e);
      };
      const C = function (t, e) {
        const n = 15;
        const s = t
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
          const s = (0, i.Nb1)()
            .startAngle(Math.PI / 2)
            .endAngle(3 * (Math.PI / 2))
            .innerRadius(n / 2)
            .outerRadius(n / 2.2);
          t.append("path")
            .attr("class", "mouth")
            .attr("d", s)
            .attr("transform", "translate(" + e.cx + "," + (e.cy + 2) + ")");
        }
        function o(t) {
          const s = (0, i.Nb1)()
            .startAngle((3 * Math.PI) / 2)
            .endAngle(5 * (Math.PI / 2))
            .innerRadius(n / 2)
            .outerRadius(n / 2.2);
          t.append("path")
            .attr("class", "mouth")
            .attr("d", s)
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
        return s;
      };
      const I = function (t, e) {
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
      const P = function (t, e) {
        return (0, r.f)(t, e);
      };
      const j = function (t, e) {
        function n(t, e, n, s, i) {
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
            (e + s - i) +
            " " +
            (t + n - i * 1.2) +
            "," +
            (e + s) +
            " " +
            t +
            "," +
            (e + s)
          );
        }
        const s = t.append("polygon");
        s.attr("points", n(e.x, e.y, 50, 20, 7));
        s.attr("class", "labelBox");
        e.y = e.y + e.labelMargin;
        e.x = e.x + 0.5 * e.labelMargin;
        P(t, e);
      };
      const N = function (t, e, n) {
        const s = t.append("g");
        const i = (0, r.g)();
        i.x = e.x;
        i.y = e.y;
        i.fill = e.fill;
        i.width = n.width * e.taskCount + n.diagramMarginX * (e.taskCount - 1);
        i.height = n.height;
        i.class = "journey-section section-type-" + e.num;
        i.rx = 3;
        i.ry = 3;
        A(s, i);
        L(n)(e.text, s, i.x, i.y, i.width, i.height, { class: "journey-section section-type-" + e.num }, n, e.colour);
      };
      let V = -1;
      const D = function (t, e, n) {
        const s = e.x + n.width / 2;
        const i = t.append("g");
        V++;
        const a = 300 + 5 * 30;
        i.append("line")
          .attr("id", "task" + V)
          .attr("x1", s)
          .attr("y1", e.y)
          .attr("x2", s)
          .attr("y2", a)
          .attr("class", "task-line")
          .attr("stroke-width", "1px")
          .attr("stroke-dasharray", "4 2")
          .attr("stroke", "#666");
        C(i, { cx: s, cy: 300 + (5 - e.score) * 30, score: e.score });
        const o = (0, r.g)();
        o.x = e.x;
        o.y = e.y;
        o.fill = e.fill;
        o.width = n.width;
        o.height = n.height;
        o.class = "task task-type-" + e.num;
        o.rx = 3;
        o.ry = 3;
        A(i, o);
        let c = e.x + 14;
        e.people.forEach((t) => {
          const n = e.actors[t].color;
          const s = { cx: c, cy: e.y, r: 7, fill: n, stroke: "#000", title: t, pos: e.actors[t].position };
          I(i, s);
          c += 10;
        });
        L(n)(e.task, i, o.x, o.y, o.width, o.height, { class: "task" }, n, e.colour);
      };
      const O = function (t, e) {
        (0, r.a)(t, e);
      };
      const L = (function () {
        function t(t, e, n, i, r, a, o, c) {
          const l = e
            .append("text")
            .attr("x", n + r / 2)
            .attr("y", i + a / 2 + 5)
            .style("font-color", c)
            .style("text-anchor", "middle")
            .text(t);
          s(l, o);
        }
        function e(t, e, n, i, r, a, o, c, l) {
          const { taskFontSize: h, taskFontFamily: u } = c;
          const y = t.split(/<br\s*\/?>/gi);
          for (let f = 0; f < y.length; f++) {
            const t = f * h - (h * (y.length - 1)) / 2;
            const c = e
              .append("text")
              .attr("x", n + r / 2)
              .attr("y", i)
              .attr("fill", l)
              .style("text-anchor", "middle")
              .style("font-size", h)
              .style("font-family", u);
            c.append("tspan")
              .attr("x", n + r / 2)
              .attr("dy", t)
              .text(y[f]);
            c.attr("y", i + a / 2)
              .attr("dominant-baseline", "central")
              .attr("alignment-baseline", "central");
            s(c, o);
          }
        }
        function n(t, n, i, r, a, o, c, l) {
          const h = n.append("switch");
          const u = h.append("foreignObject").attr("x", i).attr("y", r).attr("width", a).attr("height", o).attr("position", "fixed");
          const y = u.append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
          y.append("div")
            .attr("class", "label")
            .style("display", "table-cell")
            .style("text-align", "center")
            .style("vertical-align", "middle")
            .text(t);
          e(t, h, i, r, a, o, c, l);
          s(y, c);
        }
        function s(t, e) {
          for (const n in e) {
            if (n in e) {
              t.attr(n, e[n]);
            }
          }
        }
        return function (s) {
          return s.textPlacement === "fo" ? n : s.textPlacement === "old" ? t : e;
        };
      })();
      const F = function (t) {
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
      const B = { drawRect: A, drawCircle: I, drawSection: N, drawText: P, drawLabel: j, drawTask: D, drawBackgroundRect: O, initGraphics: F };
      const R = function (t) {
        const e = Object.keys(t);
        e.forEach(function (e) {
          q[e] = t[e];
        });
      };
      const Y = {};
      function z(t) {
        const e = (0, s.c)().journey;
        let n = 60;
        Object.keys(Y).forEach((s) => {
          const i = Y[s].color;
          const r = { cx: 20, cy: n, r: 7, fill: i, stroke: "#000", pos: Y[s].position };
          B.drawCircle(t, r);
          const a = { x: 40, y: n + 7, fill: "#666", text: s, textMargin: e.boxTextMargin | 5 };
          B.drawText(t, a);
          n += 20;
        });
      }
      const q = (0, s.c)().journey;
      const W = q.leftMargin;
      const X = function (t, e, n, r) {
        const a = (0, s.c)().journey;
        const o = (0, s.c)().securityLevel;
        let c;
        if (o === "sandbox") {
          c = (0, i.Ys)("#i" + e);
        }
        const l = o === "sandbox" ? (0, i.Ys)(c.nodes()[0].contentDocument.body) : (0, i.Ys)("body");
        G.init();
        const h = l.select("#" + e);
        B.initGraphics(h);
        const u = r.db.getTasks();
        const y = r.db.getDiagramTitle();
        const f = r.db.getActors();
        for (const s in Y) {
          delete Y[s];
        }
        let p = 0;
        f.forEach((t) => {
          Y[t] = { color: a.actorColours[p % a.actorColours.length], position: p };
          p++;
        });
        z(h);
        G.insert(0, 0, W, Object.keys(Y).length * 50);
        Z(h, u, 0);
        const d = G.getBounds();
        if (y) {
          h.append("text").text(y).attr("x", W).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 25);
        }
        const g = d.stopy - d.starty + 2 * a.diagramMarginY;
        const x = W + d.stopx + 2 * a.diagramMarginX;
        (0, s.i)(h, g, x, a.useMaxWidth);
        h.append("line")
          .attr("x1", W)
          .attr("y1", a.height * 4)
          .attr("x2", x - W - 4)
          .attr("y2", a.height * 4)
          .attr("stroke-width", 4)
          .attr("stroke", "black")
          .attr("marker-end", "url(#arrowhead)");
        const m = y ? 70 : 0;
        h.attr("viewBox", `${d.startx} -25 ${x} ${g + m}`);
        h.attr("preserveAspectRatio", "xMinYMin meet");
        h.attr("height", g + m + 25);
      };
      const G = {
        data: { startx: void 0, stopx: void 0, starty: void 0, stopy: void 0 },
        verticalPos: 0,
        sequenceItems: [],
        init: function () {
          this.sequenceItems = [];
          this.data = { startx: void 0, stopx: void 0, starty: void 0, stopy: void 0 };
          this.verticalPos = 0;
        },
        updateVal: function (t, e, n, s) {
          if (t[e] === void 0) {
            t[e] = n;
          } else {
            t[e] = s(n, t[e]);
          }
        },
        updateBounds: function (t, e, n, i) {
          const r = (0, s.c)().journey;
          const a = this;
          let o = 0;
          function c(s) {
            return function c(l) {
              o++;
              const h = a.sequenceItems.length - o + 1;
              a.updateVal(l, "starty", e - h * r.boxMargin, Math.min);
              a.updateVal(l, "stopy", i + h * r.boxMargin, Math.max);
              a.updateVal(G.data, "startx", t - h * r.boxMargin, Math.min);
              a.updateVal(G.data, "stopx", n + h * r.boxMargin, Math.max);
              if (!(s === "activation")) {
                a.updateVal(l, "startx", t - h * r.boxMargin, Math.min);
                a.updateVal(l, "stopx", n + h * r.boxMargin, Math.max);
                a.updateVal(G.data, "starty", e - h * r.boxMargin, Math.min);
                a.updateVal(G.data, "stopy", i + h * r.boxMargin, Math.max);
              }
            };
          }
          this.sequenceItems.forEach(c());
        },
        insert: function (t, e, n, s) {
          const i = Math.min(t, n);
          const r = Math.max(t, n);
          const a = Math.min(e, s);
          const o = Math.max(e, s);
          this.updateVal(G.data, "startx", i, Math.min);
          this.updateVal(G.data, "starty", a, Math.min);
          this.updateVal(G.data, "stopx", r, Math.max);
          this.updateVal(G.data, "stopy", o, Math.max);
          this.updateBounds(i, a, r, o);
        },
        bumpVerticalPos: function (t) {
          this.verticalPos = this.verticalPos + t;
          this.data.stopy = this.verticalPos;
        },
        getVerticalPos: function () {
          return this.verticalPos;
        },
        getBounds: function () {
          return this.data;
        },
      };
      const H = q.sectionFills;
      const U = q.sectionColours;
      const Z = function (t, e, n) {
        const i = (0, s.c)().journey;
        let r = "";
        const a = i.height * 2 + i.diagramMarginY;
        const o = n + a;
        let c = 0;
        let l = "#CCC";
        let h = "black";
        let u = 0;
        for (const [s, y] of e.entries()) {
          if (r !== y.section) {
            l = H[c % H.length];
            u = c % H.length;
            h = U[c % U.length];
            let n = 0;
            const a = y.section;
            for (let t = s; t < e.length; t++) {
              if (e[t].section == a) {
                n = n + 1;
              } else {
                break;
              }
            }
            const o = { x: s * i.taskMargin + s * i.width + W, y: 50, text: y.section, fill: l, num: u, colour: h, taskCount: n };
            B.drawSection(t, o, i);
            r = y.section;
            c++;
          }
          const n = y.people.reduce((t, e) => {
            if (Y[e]) {
              t[e] = Y[e];
            }
            return t;
          }, {});
          y.x = s * i.taskMargin + s * i.width + W;
          y.y = o;
          y.width = i.diagramMarginX;
          y.height = i.diagramMarginY;
          y.colour = h;
          y.fill = l;
          y.num = u;
          y.actors = n;
          B.drawTask(t, y, i);
          G.insert(y.x, y.y, y.x + y.width + i.taskMargin, 300 + 5 * 30);
        }
      };
      const J = { setConf: R, draw: X };
      const K = {
        parser: y,
        db: T,
        renderer: J,
        styles: S,
        init: (t) => {
          J.setConf(t.journey);
          T.clear();
        },
      };
    },
    75458: (t, e, n) => {
      n.d(e, { a: () => a, b: () => l, c: () => c, d: () => r, e: () => u, f: () => o, g: () => h });
      var s = n(17967);
      var i = n(23787);
      const r = (t, e) => {
        const n = t.append("rect");
        n.attr("x", e.x);
        n.attr("y", e.y);
        n.attr("fill", e.fill);
        n.attr("stroke", e.stroke);
        n.attr("width", e.width);
        n.attr("height", e.height);
        e.rx !== void 0 && n.attr("rx", e.rx);
        e.ry !== void 0 && n.attr("ry", e.ry);
        if (e.attrs !== void 0) {
          for (const t in e.attrs) {
            n.attr(t, e.attrs[t]);
          }
        }
        e.class !== void 0 && n.attr("class", e.class);
        return n;
      };
      const a = (t, e) => {
        const n = { x: e.startx, y: e.starty, width: e.stopx - e.startx, height: e.stopy - e.starty, fill: e.fill, stroke: e.stroke, class: "rect" };
        const s = r(t, n);
        s.lower();
      };
      const o = (t, e) => {
        const n = e.text.replace(i.H, " ");
        const s = t.append("text");
        s.attr("x", e.x);
        s.attr("y", e.y);
        s.attr("class", "legend");
        s.style("text-anchor", e.anchor);
        e.class !== void 0 && s.attr("class", e.class);
        const r = s.append("tspan");
        r.attr("x", e.x + e.textMargin * 2);
        r.text(n);
        return s;
      };
      const c = (t, e, n, i) => {
        const r = t.append("image");
        r.attr("x", e);
        r.attr("y", n);
        const a = (0, s.Nm)(i);
        r.attr("xlink:href", a);
      };
      const l = (t, e, n, i) => {
        const r = t.append("use");
        r.attr("x", e);
        r.attr("y", n);
        const a = (0, s.Nm)(i);
        r.attr("xlink:href", `#${a}`);
      };
      const h = () => {
        const t = { x: 0, y: 0, width: 100, height: 100, fill: "#EDF2AE", stroke: "#666", anchor: "start", rx: 0, ry: 0 };
        return t;
      };
      const u = () => {
        const t = { x: 0, y: 0, width: 100, height: 100, "text-anchor": "start", style: "#666", textMargin: 0, rx: 0, ry: 0, tspan: true };
        return t;
      };
    },
  },
]);
