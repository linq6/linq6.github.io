"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [3962],
  {
    93962: (e, t, T) => {
      T.r(t);
      T.d(t, { ttcnCfg: () => s });
      function n(e) {
        var t = {},
          T = e.split(" ");
        for (var n = 0; n < T.length; ++n) t[T[n]] = true;
        return t;
      }
      const E = {
        name: "ttcn-cfg",
        keywords: n(
          "Yes No LogFile FileMask ConsoleMask AppendFile" +
            " TimeStampFormat LogEventTypes SourceInfoFormat" +
            " LogEntityName LogSourceInfo DiskFullAction" +
            " LogFileNumber LogFileSize MatchingHints Detailed" +
            " Compact SubCategories Stack Single None Seconds" +
            " DateTime Time Stop Error Retry Delete TCPPort KillTimer" +
            " NumHCs UnixSocketsEnabled LocalAddress"
        ),
        fileNCtrlMaskOptions: n(
          "TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING" +
            " TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP" +
            " TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION" +
            " TTCN_USER TTCN_FUNCTION TTCN_STATISTICS" +
            " TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG" +
            " EXECUTOR ERROR WARNING PORTEVENT TIMEROP" +
            " VERDICTOP DEFAULTOP TESTCASE ACTION USER" +
            " FUNCTION STATISTICS PARALLEL MATCHING DEBUG" +
            " LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED" +
            " DEBUG_ENCDEC DEBUG_TESTPORT" +
            " DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE" +
            " DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT" +
            " DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED" +
            " EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA" +
            " EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS" +
            " EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED" +
            " FUNCTION_RND FUNCTION_UNQUALIFIED" +
            " MATCHING_DONE MATCHING_MCSUCCESS" +
            " MATCHING_MCUNSUCC MATCHING_MMSUCCESS" +
            " MATCHING_MMUNSUCC MATCHING_PCSUCCESS" +
            " MATCHING_PCUNSUCC MATCHING_PMSUCCESS" +
            " MATCHING_PMUNSUCC MATCHING_PROBLEM" +
            " MATCHING_TIMEOUT MATCHING_UNQUALIFIED" +
            " PARALLEL_PORTCONN PARALLEL_PORTMAP" +
            " PARALLEL_PTC PARALLEL_UNQUALIFIED" +
            " PORTEVENT_DUALRECV PORTEVENT_DUALSEND" +
            " PORTEVENT_MCRECV PORTEVENT_MCSEND" +
            " PORTEVENT_MMRECV PORTEVENT_MMSEND" +
            " PORTEVENT_MQUEUE PORTEVENT_PCIN" +
            " PORTEVENT_PCOUT PORTEVENT_PMIN" +
            " PORTEVENT_PMOUT PORTEVENT_PQUEUE" +
            " PORTEVENT_STATE PORTEVENT_UNQUALIFIED" +
            " STATISTICS_UNQUALIFIED STATISTICS_VERDICT" +
            " TESTCASE_FINISH TESTCASE_START" +
            " TESTCASE_UNQUALIFIED TIMEROP_GUARD" +
            " TIMEROP_READ TIMEROP_START TIMEROP_STOP" +
            " TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED" +
            " USER_UNQUALIFIED VERDICTOP_FINAL" +
            " VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT" +
            " VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED"
        ),
        externalCommands: n("BeginControlPart EndControlPart BeginTestCase" + " EndTestCase"),
        multiLineStrings: true,
      };
      var i = E.keywords,
        C = E.fileNCtrlMaskOptions,
        r = E.externalCommands,
        N = E.multiLineStrings,
        I = E.indentStatements !== false;
      var o = /[\|]/;
      var a;
      function _(e, t) {
        var T = e.next();
        if (T == '"' || T == "'") {
          t.tokenize = l(T);
          return t.tokenize(e, t);
        }
        if (/[:=]/.test(T)) {
          a = T;
          return "punctuation";
        }
        if (T == "#") {
          e.skipToEnd();
          return "comment";
        }
        if (/\d/.test(T)) {
          e.eatWhile(/[\w\.]/);
          return "number";
        }
        if (o.test(T)) {
          e.eatWhile(o);
          return "operator";
        }
        if (T == "[") {
          e.eatWhile(/[\w_\]]/);
          return "number";
        }
        e.eatWhile(/[\w\$_]/);
        var n = e.current();
        if (i.propertyIsEnumerable(n)) return "keyword";
        if (C.propertyIsEnumerable(n)) return "atom";
        if (r.propertyIsEnumerable(n)) return "deleted";
        return "variable";
      }
      function l(e) {
        return function (t, T) {
          var n = false,
            E,
            i = false;
          while ((E = t.next()) != null) {
            if (E == e && !n) {
              var C = t.peek();
              if (C) {
                C = C.toLowerCase();
                if (C == "b" || C == "h" || C == "o") t.next();
              }
              i = true;
              break;
            }
            n = !n && E == "\\";
          }
          if (i || !(n || N)) T.tokenize = null;
          return "string";
        };
      }
      function A(e, t, T, n, E) {
        this.indented = e;
        this.column = t;
        this.type = T;
        this.align = n;
        this.prev = E;
      }
      function O(e, t, T) {
        var n = e.indented;
        if (e.context && e.context.type == "statement") n = e.context.indented;
        return (e.context = new A(n, t, T, null, e.context));
      }
      function U(e) {
        var t = e.context.type;
        if (t == ")" || t == "]" || t == "}") e.indented = e.context.indented;
        return (e.context = e.context.prev);
      }
      const s = {
        name: "ttcn",
        startState: function () {
          return { tokenize: null, context: new A(0, 0, "top", false), indented: 0, startOfLine: true };
        },
        token: function (e, t) {
          var T = t.context;
          if (e.sol()) {
            if (T.align == null) T.align = false;
            t.indented = e.indentation();
            t.startOfLine = true;
          }
          if (e.eatSpace()) return null;
          a = null;
          var n = (t.tokenize || _)(e, t);
          if (n == "comment") return n;
          if (T.align == null) T.align = true;
          if ((a == ";" || a == ":" || a == ",") && T.type == "statement") {
            U(t);
          } else if (a == "{") O(t, e.column(), "}");
          else if (a == "[") O(t, e.column(), "]");
          else if (a == "(") O(t, e.column(), ")");
          else if (a == "}") {
            while (T.type == "statement") T = U(t);
            if (T.type == "}") T = U(t);
            while (T.type == "statement") T = U(t);
          } else if (a == T.type) U(t);
          else if (I && (((T.type == "}" || T.type == "top") && a != ";") || (T.type == "statement" && a == "newstatement")))
            O(t, e.column(), "statement");
          t.startOfLine = false;
          return n;
        },
        languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: "#" } },
      };
    },
  },
]);
