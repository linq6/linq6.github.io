"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1716],
  {
    21716: (e, t, r) => {
      r.r(t);
      r.d(t, { tiddlyWiki: () => y });
      var n = {};
      var i = {
        allTags: true,
        closeAll: true,
        list: true,
        newJournal: true,
        newTiddler: true,
        permaview: true,
        saveChanges: true,
        search: true,
        slider: true,
        tabs: true,
        tag: true,
        tagging: true,
        tags: true,
        tiddler: true,
        timeline: true,
        today: true,
        version: true,
        option: true,
        with: true,
        filter: true,
      };
      var u = /[\w_\-]/i,
        a = /^\-\-\-\-+$/,
        f = /^\/\*\*\*$/,
        l = /^\*\*\*\/$/,
        o = /^<<<$/,
        c = /^\/\/\{\{\{$/,
        m = /^\/\/\}\}\}$/,
        s = /^<!--\{\{\{-->$/,
        h = /^<!--\}\}\}-->$/,
        k = /^\{\{\{$/,
        p = /^\}\}\}$/,
        b = /.*?\}\}\}/;
      function d(e, t, r) {
        t.tokenize = r;
        return r(e, t);
      }
      function w(e, t) {
        var r = e.sol(),
          i = e.peek();
        t.block = false;
        if (r && /[<\/\*{}\-]/.test(i)) {
          if (e.match(k)) {
            t.block = true;
            return d(e, t, $);
          }
          if (e.match(o)) return "quote";
          if (e.match(f) || e.match(l)) return "comment";
          if (e.match(c) || e.match(m) || e.match(s) || e.match(h)) return "comment";
          if (e.match(a)) return "contentSeparator";
        }
        e.next();
        if (r && /[\/\*!#;:>|]/.test(i)) {
          if (i == "!") {
            e.skipToEnd();
            return "header";
          }
          if (i == "*") {
            e.eatWhile("*");
            return "comment";
          }
          if (i == "#") {
            e.eatWhile("#");
            return "comment";
          }
          if (i == ";") {
            e.eatWhile(";");
            return "comment";
          }
          if (i == ":") {
            e.eatWhile(":");
            return "comment";
          }
          if (i == ">") {
            e.eatWhile(">");
            return "quote";
          }
          if (i == "|") return "header";
        }
        if (i == "{" && e.match("{{")) return d(e, t, $);
        if (/[hf]/i.test(i) && /[ti]/i.test(e.peek()) && e.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))
          return "link";
        if (i == '"') return "string";
        if (i == "~") return "brace";
        if (/[\[\]]/.test(i) && e.match(i)) return "brace";
        if (i == "@") {
          e.eatWhile(u);
          return "link";
        }
        if (/\d/.test(i)) {
          e.eatWhile(/\d/);
          return "number";
        }
        if (i == "/") {
          if (e.eat("%")) {
            return d(e, t, v);
          } else if (e.eat("/")) {
            return d(e, t, z);
          }
        }
        if (i == "_" && e.eat("_")) return d(e, t, W);
        if (i == "-" && e.eat("-")) {
          if (e.peek() != " ") return d(e, t, g);
          if (e.peek() == " ") return "brace";
        }
        if (i == "'" && e.eat("'")) return d(e, t, _);
        if (i == "<" && e.eat("<")) return d(e, t, x);
        e.eatWhile(/[\w\$_]/);
        return n.propertyIsEnumerable(e.current()) ? "keyword" : null;
      }
      function v(e, t) {
        var r = false,
          n;
        while ((n = e.next())) {
          if (n == "/" && r) {
            t.tokenize = w;
            break;
          }
          r = n == "%";
        }
        return "comment";
      }
      function _(e, t) {
        var r = false,
          n;
        while ((n = e.next())) {
          if (n == "'" && r) {
            t.tokenize = w;
            break;
          }
          r = n == "'";
        }
        return "strong";
      }
      function $(e, t) {
        var r = t.block;
        if (r && e.current()) {
          return "comment";
        }
        if (!r && e.match(b)) {
          t.tokenize = w;
          return "comment";
        }
        if (r && e.sol() && e.match(p)) {
          t.tokenize = w;
          return "comment";
        }
        e.next();
        return "comment";
      }
      function z(e, t) {
        var r = false,
          n;
        while ((n = e.next())) {
          if (n == "/" && r) {
            t.tokenize = w;
            break;
          }
          r = n == "/";
        }
        return "emphasis";
      }
      function W(e, t) {
        var r = false,
          n;
        while ((n = e.next())) {
          if (n == "_" && r) {
            t.tokenize = w;
            break;
          }
          r = n == "_";
        }
        return "link";
      }
      function g(e, t) {
        var r = false,
          n;
        while ((n = e.next())) {
          if (n == "-" && r) {
            t.tokenize = w;
            break;
          }
          r = n == "-";
        }
        return "deleted";
      }
      function x(e, t) {
        if (e.current() == "<<") {
          return "meta";
        }
        var r = e.next();
        if (!r) {
          t.tokenize = w;
          return null;
        }
        if (r == ">") {
          if (e.peek() == ">") {
            e.next();
            t.tokenize = w;
            return "meta";
          }
        }
        e.eatWhile(/[\w\$_]/);
        return i.propertyIsEnumerable(e.current()) ? "keyword" : null;
      }
      const y = {
        name: "tiddlywiki",
        startState: function () {
          return { tokenize: w };
        },
        token: function (e, t) {
          if (e.eatSpace()) return null;
          var r = t.tokenize(e, t);
          return r;
        },
      };
    },
  },
]);
