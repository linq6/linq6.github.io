"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7390],
  {
    87390: (e, _, I) => {
      I.r(_);
      I.d(_, { ntriples: () => t });
      var R = {
        PRE_SUBJECT: 0,
        WRITING_SUB_URI: 1,
        WRITING_BNODE_URI: 2,
        PRE_PRED: 3,
        WRITING_PRED_URI: 4,
        PRE_OBJ: 5,
        WRITING_OBJ_URI: 6,
        WRITING_OBJ_BNODE: 7,
        WRITING_OBJ_LITERAL: 8,
        WRITING_LIT_LANG: 9,
        WRITING_LIT_TYPE: 10,
        POST_OBJ: 11,
        ERROR: 12,
      };
      function r(e, _) {
        var I = e.location;
        var r;
        if (I == R.PRE_SUBJECT && _ == "<") r = R.WRITING_SUB_URI;
        else if (I == R.PRE_SUBJECT && _ == "_") r = R.WRITING_BNODE_URI;
        else if (I == R.PRE_PRED && _ == "<") r = R.WRITING_PRED_URI;
        else if (I == R.PRE_OBJ && _ == "<") r = R.WRITING_OBJ_URI;
        else if (I == R.PRE_OBJ && _ == "_") r = R.WRITING_OBJ_BNODE;
        else if (I == R.PRE_OBJ && _ == '"') r = R.WRITING_OBJ_LITERAL;
        else if (I == R.WRITING_SUB_URI && _ == ">") r = R.PRE_PRED;
        else if (I == R.WRITING_BNODE_URI && _ == " ") r = R.PRE_PRED;
        else if (I == R.WRITING_PRED_URI && _ == ">") r = R.PRE_OBJ;
        else if (I == R.WRITING_OBJ_URI && _ == ">") r = R.POST_OBJ;
        else if (I == R.WRITING_OBJ_BNODE && _ == " ") r = R.POST_OBJ;
        else if (I == R.WRITING_OBJ_LITERAL && _ == '"') r = R.POST_OBJ;
        else if (I == R.WRITING_LIT_LANG && _ == " ") r = R.POST_OBJ;
        else if (I == R.WRITING_LIT_TYPE && _ == ">") r = R.POST_OBJ;
        else if (I == R.WRITING_OBJ_LITERAL && _ == "@") r = R.WRITING_LIT_LANG;
        else if (I == R.WRITING_OBJ_LITERAL && _ == "^") r = R.WRITING_LIT_TYPE;
        else if (_ == " " && (I == R.PRE_SUBJECT || I == R.PRE_PRED || I == R.PRE_OBJ || I == R.POST_OBJ)) r = I;
        else if (I == R.POST_OBJ && _ == ".") r = R.PRE_SUBJECT;
        else r = R.ERROR;
        e.location = r;
      }
      const t = {
        name: "ntriples",
        startState: function () {
          return { location: R.PRE_SUBJECT, uris: [], anchors: [], bnodes: [], langs: [], types: [] };
        },
        token: function (e, _) {
          var I = e.next();
          if (I == "<") {
            r(_, I);
            var R = "";
            e.eatWhile(function (e) {
              if (e != "#" && e != ">") {
                R += e;
                return true;
              }
              return false;
            });
            _.uris.push(R);
            if (e.match("#", false)) return "variable";
            e.next();
            r(_, ">");
            return "variable";
          }
          if (I == "#") {
            var t = "";
            e.eatWhile(function (e) {
              if (e != ">" && e != " ") {
                t += e;
                return true;
              }
              return false;
            });
            _.anchors.push(t);
            return "url";
          }
          if (I == ">") {
            r(_, ">");
            return "variable";
          }
          if (I == "_") {
            r(_, I);
            var i = "";
            e.eatWhile(function (e) {
              if (e != " ") {
                i += e;
                return true;
              }
              return false;
            });
            _.bnodes.push(i);
            e.next();
            r(_, " ");
            return "builtin";
          }
          if (I == '"') {
            r(_, I);
            e.eatWhile(function (e) {
              return e != '"';
            });
            e.next();
            if (e.peek() != "@" && e.peek() != "^") {
              r(_, '"');
            }
            return "string";
          }
          if (I == "@") {
            r(_, "@");
            var n = "";
            e.eatWhile(function (e) {
              if (e != " ") {
                n += e;
                return true;
              }
              return false;
            });
            _.langs.push(n);
            e.next();
            r(_, " ");
            return "string.special";
          }
          if (I == "^") {
            e.next();
            r(_, "^");
            var T = "";
            e.eatWhile(function (e) {
              if (e != ">") {
                T += e;
                return true;
              }
              return false;
            });
            _.types.push(T);
            e.next();
            r(_, ">");
            return "variable";
          }
          if (I == " ") {
            r(_, I);
          }
          if (I == ".") {
            r(_, I);
          }
        },
      };
    },
  },
]);
