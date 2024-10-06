"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [6359],
  {
    6359: (e, t, n) => {
      n.r(t);
      n.d(t, { vhdl: () => b });
      function r(e) {
        var t = {},
          n = e.split(",");
        for (var r = 0; r < n.length; ++r) {
          var i = n[r].toUpperCase();
          var a = n[r].charAt(0).toUpperCase() + n[r].slice(1);
          t[n[r]] = true;
          t[i] = true;
          t[a] = true;
        }
        return t;
      }
      function i(e) {
        e.eatWhile(/[\w\$_]/);
        return "meta";
      }
      var a = r("null"),
        o = { "`": i, $: i },
        l = false;
      var u = r(
        "abs,access,after,alias,all,and,architecture,array,assert,attribute,begin,block," +
          "body,buffer,bus,case,component,configuration,constant,disconnect,downto,else,elsif,end,end block,end case," +
          "end component,end for,end generate,end if,end loop,end process,end record,end units,entity,exit,file,for," +
          "function,generate,generic,generic map,group,guarded,if,impure,in,inertial,inout,is,label,library,linkage," +
          "literal,loop,map,mod,nand,new,next,nor,null,of,on,open,or,others,out,package,package body,port,port map," +
          "postponed,procedure,process,pure,range,record,register,reject,rem,report,return,rol,ror,select,severity,signal," +
          "sla,sll,sra,srl,subtype,then,to,transport,type,unaffected,units,until,use,variable,wait,when,while,with,xnor,xor"
      );
      var s = r("architecture,entity,begin,case,port,else,elsif,end,for,function,if");
      var f = /[&|~><!\)\(*#%@+\/=?\:;}{,\.\^\-\[\]]/;
      var c;
      function p(e, t) {
        var n = e.next();
        if (o[n]) {
          var r = o[n](e, t);
          if (r !== false) return r;
        }
        if (n == '"') {
          t.tokenize = m(n);
          return t.tokenize(e, t);
        }
        if (n == "'") {
          t.tokenize = d(n);
          return t.tokenize(e, t);
        }
        if (/[\[\]{}\(\),;\:\.]/.test(n)) {
          c = n;
          return null;
        }
        if (/[\d']/.test(n)) {
          e.eatWhile(/[\w\.']/);
          return "number";
        }
        if (n == "-") {
          if (e.eat("-")) {
            e.skipToEnd();
            return "comment";
          }
        }
        if (f.test(n)) {
          e.eatWhile(f);
          return "operator";
        }
        e.eatWhile(/[\w\$_]/);
        var i = e.current();
        if (u.propertyIsEnumerable(i.toLowerCase())) {
          if (s.propertyIsEnumerable(i)) c = "newstatement";
          return "keyword";
        }
        if (a.propertyIsEnumerable(i)) return "atom";
        return "variable";
      }
      function d(e) {
        return function (t, n) {
          var r = false,
            i,
            a = false;
          while ((i = t.next()) != null) {
            if (i == e && !r) {
              a = true;
              break;
            }
            r = !r && i == "--";
          }
          if (a || !(r || l)) n.tokenize = p;
          return "string";
        };
      }
      function m(e) {
        return function (t, n) {
          var r = false,
            i,
            a = false;
          while ((i = t.next()) != null) {
            if (i == e && !r) {
              a = true;
              break;
            }
            r = !r && i == "--";
          }
          if (a || !(r || l)) n.tokenize = p;
          return "string.special";
        };
      }
      function h(e, t, n, r, i) {
        this.indented = e;
        this.column = t;
        this.type = n;
        this.align = r;
        this.prev = i;
      }
      function y(e, t, n) {
        return (e.context = new h(e.indented, t, n, null, e.context));
      }
      function g(e) {
        var t = e.context.type;
        if (t == ")" || t == "]" || t == "}") e.indented = e.context.indented;
        return (e.context = e.context.prev);
      }
      const b = {
        name: "vhdl",
        startState: function (e) {
          return { tokenize: null, context: new h(-e, 0, "top", false), indented: 0, startOfLine: true };
        },
        token: function (e, t) {
          var n = t.context;
          if (e.sol()) {
            if (n.align == null) n.align = false;
            t.indented = e.indentation();
            t.startOfLine = true;
          }
          if (e.eatSpace()) return null;
          c = null;
          var r = (t.tokenize || p)(e, t);
          if (r == "comment" || r == "meta") return r;
          if (n.align == null) n.align = true;
          if ((c == ";" || c == ":") && n.type == "statement") g(t);
          else if (c == "{") y(t, e.column(), "}");
          else if (c == "[") y(t, e.column(), "]");
          else if (c == "(") y(t, e.column(), ")");
          else if (c == "}") {
            while (n.type == "statement") n = g(t);
            if (n.type == "}") n = g(t);
            while (n.type == "statement") n = g(t);
          } else if (c == n.type) g(t);
          else if (n.type == "}" || n.type == "top" || (n.type == "statement" && c == "newstatement")) y(t, e.column(), "statement");
          t.startOfLine = false;
          return r;
        },
        indent: function (e, t, n) {
          if (e.tokenize != p && e.tokenize != null) return 0;
          var r = t && t.charAt(0),
            i = e.context,
            a = r == i.type;
          if (i.type == "statement") return i.indented + (r == "{" ? 0 : n.unit);
          else if (i.align) return i.column + (a ? 0 : 1);
          else return i.indented + (a ? 0 : n.unit);
        },
        languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: "--" } },
      };
    },
  },
]);
