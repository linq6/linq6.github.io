"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [6243],
  {
    86243: (e, O, T) => {
      T.r(O);
      T.d(O, { pig: () => u });
      function E(e) {
        var O = {},
          T = e.split(" ");
        for (var E = 0; E < T.length; ++E) O[T[E]] = true;
        return O;
      }
      var r =
        "ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL " +
        "CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS " +
        "DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG " +
        "FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN " +
        "INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER " +
        "ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS " +
        "LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  " +
        "PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE " +
        "SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG " +
        "TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ";
      var t =
        "VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP " +
        "JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL " +
        "PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE " +
        "SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE " +
        "NEQ MATCHES TRUE FALSE DUMP";
      var I = "BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ";
      var N = E(r),
        A = E(t),
        R = E(I);
      var S = /[*+\-%<>=&?:\/!|]/;
      function n(e, O, T) {
        O.tokenize = T;
        return T(e, O);
      }
      function L(e, O) {
        var T = false;
        var E;
        while ((E = e.next())) {
          if (E == "/" && T) {
            O.tokenize = i;
            break;
          }
          T = E == "*";
        }
        return "comment";
      }
      function a(e) {
        return function (O, T) {
          var E = false,
            r,
            t = false;
          while ((r = O.next()) != null) {
            if (r == e && !E) {
              t = true;
              break;
            }
            E = !E && r == "\\";
          }
          if (t || !E) T.tokenize = i;
          return "error";
        };
      }
      function i(e, O) {
        var T = e.next();
        if (T == '"' || T == "'") return n(e, O, a(T));
        else if (/[\[\]{}\(\),;\.]/.test(T)) return null;
        else if (/\d/.test(T)) {
          e.eatWhile(/[\w\.]/);
          return "number";
        } else if (T == "/") {
          if (e.eat("*")) {
            return n(e, O, L);
          } else {
            e.eatWhile(S);
            return "operator";
          }
        } else if (T == "-") {
          if (e.eat("-")) {
            e.skipToEnd();
            return "comment";
          } else {
            e.eatWhile(S);
            return "operator";
          }
        } else if (S.test(T)) {
          e.eatWhile(S);
          return "operator";
        } else {
          e.eatWhile(/[\w\$_]/);
          if (A && A.propertyIsEnumerable(e.current().toUpperCase())) {
            if (!e.eat(")") && !e.eat(".")) return "keyword";
          }
          if (N && N.propertyIsEnumerable(e.current().toUpperCase())) return "builtin";
          if (R && R.propertyIsEnumerable(e.current().toUpperCase())) return "type";
          return "variable";
        }
      }
      const u = {
        name: "pig",
        startState: function () {
          return { tokenize: i, startOfLine: true };
        },
        token: function (e, O) {
          if (e.eatSpace()) return null;
          var T = O.tokenize(e, O);
          return T;
        },
        languageData: { autocomplete: (r + I + t).split(" ") },
      };
    },
  },
]);
