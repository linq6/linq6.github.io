"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [8285],
  {
    98285: (r, e, t) => {
      t.r(e);
      t.d(e, { rpmChanges: () => c, rpmSpec: () => m });
      var a = /^-+$/;
      var n = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)  ?\d{1,2} \d{2}:\d{2}(:\d{2})? [A-Z]{3,4} \d{4} - /;
      var i = /^[\w+.-]+@[\w.-]+/;
      const c = {
        name: "rpmchanges",
        token: function (r) {
          if (r.sol()) {
            if (r.match(a)) {
              return "tag";
            }
            if (r.match(n)) {
              return "tag";
            }
          }
          if (r.match(i)) {
            return "string";
          }
          r.next();
          return null;
        },
      };
      var o = /^(i386|i586|i686|x86_64|ppc64le|ppc64|ppc|ia64|s390x|s390|sparc64|sparcv9|sparc|noarch|alphaev6|alpha|hppa|mipsel)/;
      var p = /^[a-zA-Z0-9()]+:/;
      var l =
        /^%(debug_package|package|description|prep|build|install|files|clean|changelog|preinstall|preun|postinstall|postun|pretrans|posttrans|pre|post|triggerin|triggerun|verifyscript|check|triggerpostun|triggerprein|trigger)/;
      var u = /^%(ifnarch|ifarch|if)/;
      var s = /^%(else|endif)/;
      var f = /^(\!|\?|\<\=|\<|\>\=|\>|\=\=|\&\&|\|\|)/;
      const m = {
        name: "rpmspec",
        startState: function () {
          return { controlFlow: false, macroParameters: false, section: false };
        },
        token: function (r, e) {
          var t = r.peek();
          if (t == "#") {
            r.skipToEnd();
            return "comment";
          }
          if (r.sol()) {
            if (r.match(p)) {
              return "header";
            }
            if (r.match(l)) {
              return "atom";
            }
          }
          if (r.match(/^\$\w+/)) {
            return "def";
          }
          if (r.match(/^\$\{\w+\}/)) {
            return "def";
          }
          if (r.match(s)) {
            return "keyword";
          }
          if (r.match(u)) {
            e.controlFlow = true;
            return "keyword";
          }
          if (e.controlFlow) {
            if (r.match(f)) {
              return "operator";
            }
            if (r.match(/^(\d+)/)) {
              return "number";
            }
            if (r.eol()) {
              e.controlFlow = false;
            }
          }
          if (r.match(o)) {
            if (r.eol()) {
              e.controlFlow = false;
            }
            return "number";
          }
          if (r.match(/^%[\w]+/)) {
            if (r.match("(")) {
              e.macroParameters = true;
            }
            return "keyword";
          }
          if (e.macroParameters) {
            if (r.match(/^\d+/)) {
              return "number";
            }
            if (r.match(")")) {
              e.macroParameters = false;
              return "keyword";
            }
          }
          if (r.match(/^%\{\??[\w \-\:\!]+\}/)) {
            if (r.eol()) {
              e.controlFlow = false;
            }
            return "def";
          }
          r.next();
          return null;
        },
      };
    },
  },
]);
