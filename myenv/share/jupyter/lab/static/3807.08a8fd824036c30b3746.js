"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [3807],
  {
    73807: (e, r, t) => {
      t.r(r);
      t.d(r, { tcl: () => p });
      function a(e) {
        var r = {},
          t = e.split(" ");
        for (var a = 0; a < t.length; ++a) r[t[a]] = true;
        return r;
      }
      var n = a(
        "Tcl safe after append array auto_execok auto_import auto_load " +
          "auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror " +
          "binary break catch cd close concat continue dde eof encoding error " +
          "eval exec exit expr fblocked fconfigure fcopy file fileevent filename " +
          "filename flush for foreach format gets glob global history http if " +
          "incr info interp join lappend lindex linsert list llength load lrange " +
          "lreplace lsearch lset lsort memory msgcat namespace open package parray " +
          "pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp " +
          "registry regsub rename resource return scan seek set socket source split " +
          "string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord " +
          "tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest " +
          "tclvars tell time trace unknown unset update uplevel upvar variable " +
          "vwait"
      );
      var i = a("if elseif else and not or eq ne in ni for foreach while switch");
      var l = /[+\-*&%=<>!?^\/\|]/;
      function o(e, r, t) {
        r.tokenize = t;
        return t(e, r);
      }
      function s(e, r) {
        var t = r.beforeParams;
        r.beforeParams = false;
        var a = e.next();
        if ((a == '"' || a == "'") && r.inParams) {
          return o(e, r, f(a));
        } else if (/[\[\]{}\(\),;\.]/.test(a)) {
          if (a == "(" && t) r.inParams = true;
          else if (a == ")") r.inParams = false;
          return null;
        } else if (/\d/.test(a)) {
          e.eatWhile(/[\w\.]/);
          return "number";
        } else if (a == "#") {
          if (e.eat("*")) return o(e, r, u);
          if (a == "#" && e.match(/ *\[ *\[/)) return o(e, r, c);
          e.skipToEnd();
          return "comment";
        } else if (a == '"') {
          e.skipTo(/"/);
          return "comment";
        } else if (a == "$") {
          e.eatWhile(/[$_a-z0-9A-Z\.{:]/);
          e.eatWhile(/}/);
          r.beforeParams = true;
          return "builtin";
        } else if (l.test(a)) {
          e.eatWhile(l);
          return "comment";
        } else {
          e.eatWhile(/[\w\$_{}\xa1-\uffff]/);
          var s = e.current().toLowerCase();
          if (n && n.propertyIsEnumerable(s)) return "keyword";
          if (i && i.propertyIsEnumerable(s)) {
            r.beforeParams = true;
            return "keyword";
          }
          return null;
        }
      }
      function f(e) {
        return function (r, t) {
          var a = false,
            n,
            i = false;
          while ((n = r.next()) != null) {
            if (n == e && !a) {
              i = true;
              break;
            }
            a = !a && n == "\\";
          }
          if (i) t.tokenize = s;
          return "string";
        };
      }
      function u(e, r) {
        var t = false,
          a;
        while ((a = e.next())) {
          if (a == "#" && t) {
            r.tokenize = s;
            break;
          }
          t = a == "*";
        }
        return "comment";
      }
      function c(e, r) {
        var t = 0,
          a;
        while ((a = e.next())) {
          if (a == "#" && t == 2) {
            r.tokenize = s;
            break;
          }
          if (a == "]") t++;
          else if (a != " ") t = 0;
        }
        return "meta";
      }
      const p = {
        name: "tcl",
        startState: function () {
          return { tokenize: s, beforeParams: false, inParams: false };
        },
        token: function (e, r) {
          if (e.eatSpace()) return null;
          return r.tokenize(e, r);
        },
        languageData: { commentTokens: { line: "#" } },
      };
    },
  },
]);
