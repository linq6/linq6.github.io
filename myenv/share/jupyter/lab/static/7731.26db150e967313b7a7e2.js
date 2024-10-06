"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7731],
  {
    47731: (e, r, a) => {
      a.r(r);
      a.d(r, { mbox: () => v });
      var t = [
        "From",
        "Sender",
        "Reply-To",
        "To",
        "Cc",
        "Bcc",
        "Message-ID",
        "In-Reply-To",
        "References",
        "Resent-From",
        "Resent-Sender",
        "Resent-To",
        "Resent-Cc",
        "Resent-Bcc",
        "Resent-Message-ID",
        "Return-Path",
        "Received",
      ];
      var n = ["Date", "Subject", "Comments", "Keywords", "Resent-Date"];
      var i = /^[ \t]/;
      var s = /^From /;
      var u = new RegExp("^(" + t.join("|") + "): ");
      var o = new RegExp("^(" + n.join("|") + "): ");
      var l = /^[^:]+:/;
      var c = /^[^ ]+@[^ ]+/;
      var d = /^.*?(?=[^ ]+?@[^ ]+)/;
      var m = /^<.*?>/;
      var f = /^.*?(?=<.*>)/;
      function p(e) {
        if (e === "Subject") return "header";
        return "string";
      }
      function h(e, r) {
        if (e.sol()) {
          r.inSeparator = false;
          if (r.inHeader && e.match(i)) {
            return null;
          } else {
            r.inHeader = false;
            r.header = null;
          }
          if (e.match(s)) {
            r.inHeaders = true;
            r.inSeparator = true;
            return "atom";
          }
          var a;
          var t = false;
          if ((a = e.match(o)) || ((t = true) && (a = e.match(u)))) {
            r.inHeaders = true;
            r.inHeader = true;
            r.emailPermitted = t;
            r.header = a[1];
            return "atom";
          }
          if (r.inHeaders && (a = e.match(l))) {
            r.inHeader = true;
            r.emailPermitted = true;
            r.header = a[1];
            return "atom";
          }
          r.inHeaders = false;
          e.skipToEnd();
          return null;
        }
        if (r.inSeparator) {
          if (e.match(c)) return "link";
          if (e.match(d)) return "atom";
          e.skipToEnd();
          return "atom";
        }
        if (r.inHeader) {
          var n = p(r.header);
          if (r.emailPermitted) {
            if (e.match(m)) return n + " link";
            if (e.match(f)) return n;
          }
          e.skipToEnd();
          return n;
        }
        e.skipToEnd();
        return null;
      }
      const v = {
        name: "mbox",
        startState: function () {
          return { inSeparator: false, inHeader: false, emailPermitted: false, header: null, inHeaders: false };
        },
        token: h,
        blankLine: function (e) {
          e.inHeaders = e.inSeparator = e.inHeader = false;
        },
        languageData: { autocomplete: t.concat(n) },
      };
    },
  },
]);
