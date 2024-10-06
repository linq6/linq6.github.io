/*! For license information please see 9747.6dd327f4928c6989ea8a.js.LICENSE.txt */
"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [9747],
  {
    59747: (e, t, n) => {
      n.r(t);
      n.d(t, { tlv: () => d, verilog: () => a });
      function i(e) {
        var t = e.statementIndentUnit,
          n = e.dontAlignCalls,
          i = e.noIndentKeywords || [],
          a = e.multiLineStrings,
          r = e.hooks || {};
        function l(e) {
          var t = {},
            n = e.split(" ");
          for (var i = 0; i < n.length; ++i) t[n[i]] = true;
          return t;
        }
        var o = l(
          "accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind " +
            "bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config " +
            "const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable " +
            "dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup " +
            "endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask " +
            "enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin " +
            "function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import " +
            "incdir include initial inout input inside instance int integer interconnect interface intersect join join_any " +
            "join_none large let liblist library local localparam logic longint macromodule matches medium modport module " +
            "nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed " +
            "parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup " +
            "pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg " +
            "reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime " +
            "s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify " +
            "specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on " +
            "table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior " +
            "trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void " +
            "wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor"
        );
        var s = /[\+\-\*\/!~&|^%=?:]/;
        var c = /[\[\]{}()]/;
        var f = /\d[0-9_]*/;
        var u = /\d*\s*'s?d\s*\d[0-9_]*/i;
        var d = /\d*\s*'s?b\s*[xz01][xz01_]*/i;
        var m = /\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i;
        var p = /\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i;
        var v = /(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i;
        var h = /^((\w+)|[)}\]])/;
        var g = /[)}\]]/;
        var k;
        var y;
        var w = l(
          "case checker class clocking config function generate interface module package " + "primitive program property specify sequence table task"
        );
        var b = {};
        for (var _ in w) {
          b[_] = "end" + _;
        }
        b["begin"] = "end";
        b["casex"] = "endcase";
        b["casez"] = "endcase";
        b["do"] = "while";
        b["fork"] = "join;join_any;join_none";
        b["covergroup"] = "endgroup";
        for (var x in i) {
          var _ = i[x];
          if (b[_]) {
            b[_] = undefined;
          }
        }
        var C = l("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while");
        function I(e, t) {
          var n = e.peek(),
            i;
          if (r[n] && (i = r[n](e, t)) != false) return i;
          if (r.tokenBase && (i = r.tokenBase(e, t)) != false) return i;
          if (/[,;:\.]/.test(n)) {
            k = e.next();
            return null;
          }
          if (c.test(n)) {
            k = e.next();
            return "bracket";
          }
          if (n == "`") {
            e.next();
            if (e.eatWhile(/[\w\$_]/)) {
              return "def";
            } else {
              return null;
            }
          }
          if (n == "$") {
            e.next();
            if (e.eatWhile(/[\w\$_]/)) {
              return "meta";
            } else {
              return null;
            }
          }
          if (n == "#") {
            e.next();
            e.eatWhile(/[\d_.]/);
            return "def";
          }
          if (n == '"') {
            e.next();
            t.tokenize = z(n);
            return t.tokenize(e, t);
          }
          if (n == "/") {
            e.next();
            if (e.eat("*")) {
              t.tokenize = S;
              return S(e, t);
            }
            if (e.eat("/")) {
              e.skipToEnd();
              return "comment";
            }
            e.backUp(1);
          }
          if (e.match(v) || e.match(u) || e.match(d) || e.match(m) || e.match(p) || e.match(f) || e.match(v)) {
            return "number";
          }
          if (e.eatWhile(s)) {
            return "meta";
          }
          if (e.eatWhile(/[\w\$_]/)) {
            var a = e.current();
            if (o[a]) {
              if (b[a]) {
                k = "newblock";
              }
              if (C[a]) {
                k = "newstatement";
              }
              y = a;
              return "keyword";
            }
            return "variable";
          }
          e.next();
          return null;
        }
        function z(e) {
          return function (t, n) {
            var i = false,
              r,
              l = false;
            while ((r = t.next()) != null) {
              if (r == e && !i) {
                l = true;
                break;
              }
              i = !i && r == "\\";
            }
            if (l || !(i || a)) n.tokenize = I;
            return "string";
          };
        }
        function S(e, t) {
          var n = false,
            i;
          while ((i = e.next())) {
            if (i == "/" && n) {
              t.tokenize = I;
              break;
            }
            n = i == "*";
          }
          return "comment";
        }
        function j(e, t, n, i, a) {
          this.indented = e;
          this.column = t;
          this.type = n;
          this.align = i;
          this.prev = a;
        }
        function N(e, t, n) {
          var i = e.indented;
          var a = new j(i, t, n, null, e.context);
          return (e.context = a);
        }
        function $(e) {
          var t = e.context.type;
          if (t == ")" || t == "]" || t == "}") {
            e.indented = e.context.indented;
          }
          return (e.context = e.context.prev);
        }
        function B(e, t) {
          if (e == t) {
            return true;
          } else {
            var n = t.split(";");
            for (var i in n) {
              if (e == n[i]) {
                return true;
              }
            }
            return false;
          }
        }
        function q() {
          var e = [];
          for (var t in b) {
            if (b[t]) {
              var n = b[t].split(";");
              for (var i in n) {
                e.push(n[i]);
              }
            }
          }
          var a = new RegExp("[{}()\\[\\]]|(" + e.join("|") + ")$");
          return a;
        }
        return {
          name: "verilog",
          startState: function (e) {
            var t = { tokenize: null, context: new j(-e, 0, "top", false), indented: 0, startOfLine: true };
            if (r.startState) r.startState(t);
            return t;
          },
          token: function (e, t) {
            var n = t.context;
            if (e.sol()) {
              if (n.align == null) n.align = false;
              t.indented = e.indentation();
              t.startOfLine = true;
            }
            if (r.token) {
              var i = r.token(e, t);
              if (i !== undefined) {
                return i;
              }
            }
            if (e.eatSpace()) return null;
            k = null;
            y = null;
            var i = (t.tokenize || I)(e, t);
            if (i == "comment" || i == "meta" || i == "variable") return i;
            if (n.align == null) n.align = true;
            if (k == n.type) {
              $(t);
            } else if ((k == ";" && n.type == "statement") || (n.type && B(y, n.type))) {
              n = $(t);
              while (n && n.type == "statement") n = $(t);
            } else if (k == "{") {
              N(t, e.column(), "}");
            } else if (k == "[") {
              N(t, e.column(), "]");
            } else if (k == "(") {
              N(t, e.column(), ")");
            } else if (n && n.type == "endcase" && k == ":") {
              N(t, e.column(), "statement");
            } else if (k == "newstatement") {
              N(t, e.column(), "statement");
            } else if (k == "newblock") {
              if (y == "function" && n && (n.type == "statement" || n.type == "endgroup")) {
              } else if (y == "task" && n && n.type == "statement") {
              } else {
                var a = b[y];
                N(t, e.column(), a);
              }
            }
            t.startOfLine = false;
            return i;
          },
          indent: function (e, i, a) {
            if (e.tokenize != I && e.tokenize != null) return null;
            if (r.indent) {
              var l = r.indent(e);
              if (l >= 0) return l;
            }
            var o = e.context,
              s = i && i.charAt(0);
            if (o.type == "statement" && s == "}") o = o.prev;
            var c = false;
            var f = i.match(h);
            if (f) c = B(f[0], o.type);
            if (o.type == "statement") return o.indented + (s == "{" ? 0 : t || a.unit);
            else if (g.test(o.type) && o.align && !n) return o.column + (c ? 0 : 1);
            else if (o.type == ")" && !c) return o.indented + (t || a.unit);
            else return o.indented + (c ? 0 : a.unit);
          },
          languageData: { indentOnInput: q(), commentTokens: { line: "//", block: { open: "/*", close: "*/" } } },
        };
      }
      const a = i({});
      var r = {
        "|": "link",
        ">": "property",
        $: "variable",
        $$: "variable",
        "?$": "qualifier",
        "?*": "qualifier",
        "-": "contentSeparator",
        "/": "property",
        "/-": "property",
        "@": "variableName.special",
        "@-": "variableName.special",
        "@++": "variableName.special",
        "@+=": "variableName.special",
        "@+=-": "variableName.special",
        "@--": "variableName.special",
        "@-=": "variableName.special",
        "%+": "tag",
        "%-": "tag",
        "%": "tag",
        ">>": "tag",
        "<<": "tag",
        "<>": "tag",
        "#": "tag",
        "^": "attribute",
        "^^": "attribute",
        "^!": "attribute",
        "*": "variable",
        "**": "variable",
        "\\": "keyword",
        '"': "comment",
      };
      var l = { "/": "beh-hier", ">": "beh-hier", "-": "phys-hier", "|": "pipe", "?": "when", "@": "stage", "\\": "keyword" };
      var o = 3;
      var s = false;
      var c = /^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/;
      var f = /^[! ] */;
      var u = /^\/[\/\*]/;
      const d = i({
        hooks: {
          electricInput: false,
          token: function (e, t) {
            var n = undefined;
            var i;
            if (e.sol() && !t.tlvInBlockComment) {
              if (e.peek() == "\\") {
                n = "def";
                e.skipToEnd();
                if (e.string.match(/\\SV/)) {
                  t.tlvCodeActive = false;
                } else if (e.string.match(/\\TLV/)) {
                  t.tlvCodeActive = true;
                }
              }
              if (t.tlvCodeActive && e.pos == 0 && t.indented == 0 && (i = e.match(f, false))) {
                t.indented = i[0].length;
              }
              var a = t.indented;
              var d = a / o;
              if (d <= t.tlvIndentationStyle.length) {
                var m = e.string.length == a;
                var p = d * o;
                if (p < e.string.length) {
                  var v = e.string.slice(p);
                  var h = v[0];
                  if (l[h] && (i = v.match(c)) && r[i[1]]) {
                    a += o;
                    if (!(h == "\\" && p > 0)) {
                      t.tlvIndentationStyle[d] = l[h];
                      if (s) {
                        t.statementComment = false;
                      }
                      d++;
                    }
                  }
                }
                if (!m) {
                  while (t.tlvIndentationStyle.length > d) {
                    t.tlvIndentationStyle.pop();
                  }
                }
              }
              t.tlvNextIndent = a;
            }
            if (t.tlvCodeActive) {
              var g = false;
              if (s) {
                g = e.peek() != " " && n === undefined && !t.tlvInBlockComment && e.column() == t.tlvIndentationStyle.length * o;
                if (g) {
                  if (t.statementComment) {
                    g = false;
                  }
                  t.statementComment = e.match(u, false);
                }
              }
              var i;
              if (n !== undefined) {
              } else if (t.tlvInBlockComment) {
                if (e.match(/^.*?\*\//)) {
                  t.tlvInBlockComment = false;
                  if (s && !e.eol()) {
                    t.statementComment = false;
                  }
                } else {
                  e.skipToEnd();
                }
                n = "comment";
              } else if ((i = e.match(u)) && !t.tlvInBlockComment) {
                if (i[0] == "//") {
                  e.skipToEnd();
                } else {
                  t.tlvInBlockComment = true;
                }
                n = "comment";
              } else if ((i = e.match(c))) {
                var k = i[1];
                var y = i[2];
                if (r.hasOwnProperty(k) && (y.length > 0 || e.eol())) {
                  n = r[k];
                } else {
                  e.backUp(e.current().length - 1);
                }
              } else if (e.match(/^\t+/)) {
                n = "invalid";
              } else if (e.match(/^[\[\]{}\(\);\:]+/)) {
                n = "meta";
              } else if ((i = e.match(/^[mM]4([\+_])?[\w\d_]*/))) {
                n = i[1] == "+" ? "keyword.special" : "keyword";
              } else if (e.match(/^ +/)) {
                if (e.eol()) {
                  n = "error";
                }
              } else if (e.match(/^[\w\d_]+/)) {
                n = "number";
              } else {
                e.next();
              }
            } else {
              if (e.match(/^[mM]4([\w\d_]*)/)) {
                n = "keyword";
              }
            }
            return n;
          },
          indent: function (e) {
            return e.tlvCodeActive == true ? e.tlvNextIndent : -1;
          },
          startState: function (e) {
            e.tlvIndentationStyle = [];
            e.tlvCodeActive = true;
            e.tlvNextIndent = -1;
            e.tlvInBlockComment = false;
            if (s) {
              e.statementComment = false;
            }
          },
        },
      });
    },
  },
]);
