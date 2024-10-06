"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2145],
  {
    92145: (e, t, r) => {
      r.r(t);
      r.d(t, { powerShell: () => z });
      function n(e, t) {
        t = t || {};
        var r = t.prefix !== undefined ? t.prefix : "^";
        var n = t.suffix !== undefined ? t.suffix : "\\b";
        for (var i = 0; i < e.length; i++) {
          if (e[i] instanceof RegExp) {
            e[i] = e[i].source;
          } else {
            e[i] = e[i].replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          }
        }
        return new RegExp(r + "(" + e.join("|") + ")" + n, "i");
      }
      var i = "(?=[^A-Za-z\\d\\-_]|$)";
      var o = /[\w\-:]/;
      var a = n(
        [
          /begin|break|catch|continue|data|default|do|dynamicparam/,
          /else|elseif|end|exit|filter|finally|for|foreach|from|function|if|in/,
          /param|process|return|switch|throw|trap|try|until|where|while/,
        ],
        { suffix: i }
      );
      var s = /[\[\]{},;`\\\.]|@[({]/;
      var u = n(
        [
          "f",
          /b?not/,
          /[ic]?split/,
          "join",
          /is(not)?/,
          "as",
          /[ic]?(eq|ne|[gl][te])/,
          /[ic]?(not)?(like|match|contains)/,
          /[ic]?replace/,
          /b?(and|or|xor)/,
        ],
        { prefix: "-" }
      );
      var c = /[+\-*\/%]=|\+\+|--|\.\.|[+\-*&^%:=!|\/]|<(?!#)|(?!#)>/;
      var l = n([u, c], { suffix: "" });
      var p = /^((0x[\da-f]+)|((\d+\.\d+|\d\.|\.\d+|\d+)(e[\+\-]?\d+)?))[ld]?([kmgtp]b)?/i;
      var m = /^[A-Za-z\_][A-Za-z\-\_\d]*\b/;
      var S = /[A-Z]:|%|\?/i;
      var f = n(
        [
          /Add-(Computer|Content|History|Member|PSSnapin|Type)/,
          /Checkpoint-Computer/,
          /Clear-(Content|EventLog|History|Host|Item(Property)?|Variable)/,
          /Compare-Object/,
          /Complete-Transaction/,
          /Connect-PSSession/,
          /ConvertFrom-(Csv|Json|SecureString|StringData)/,
          /Convert-Path/,
          /ConvertTo-(Csv|Html|Json|SecureString|Xml)/,
          /Copy-Item(Property)?/,
          /Debug-Process/,
          /Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,
          /Disconnect-PSSession/,
          /Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,
          /(Enter|Exit)-PSSession/,
          /Export-(Alias|Clixml|Console|Counter|Csv|FormatData|ModuleMember|PSSession)/,
          /ForEach-Object/,
          /Format-(Custom|List|Table|Wide)/,
          new RegExp(
            "Get-(Acl|Alias|AuthenticodeSignature|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Counter|Credential" +
              "|Culture|Date|Event|EventLog|EventSubscriber|ExecutionPolicy|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job" +
              "|Location|Member|Module|PfxCertificate|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration" +
              "|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|Verb|WinEvent|WmiObject)"
          ),
          /Group-Object/,
          /Import-(Alias|Clixml|Counter|Csv|LocalizedData|Module|PSSession)/,
          /ImportSystemModules/,
          /Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)/,
          /Join-Path/,
          /Limit-EventLog/,
          /Measure-(Command|Object)/,
          /Move-Item(Property)?/,
          new RegExp(
            "New-(Alias|Event|EventLog|Item(Property)?|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile" +
              "|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy|WinEvent)"
          ),
          /Out-(Default|File|GridView|Host|Null|Printer|String)/,
          /Pause/,
          /(Pop|Push)-Location/,
          /Read-Host/,
          /Receive-(Job|PSSession)/,
          /Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)/,
          /Remove-(Computer|Event|EventLog|Item(Property)?|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)/,
          /Rename-(Computer|Item(Property)?)/,
          /Reset-ComputerMachinePassword/,
          /Resolve-Path/,
          /Restart-(Computer|Service)/,
          /Restore-Computer/,
          /Resume-(Job|Service)/,
          /Save-Help/,
          /Select-(Object|String|Xml)/,
          /Send-MailMessage/,
          new RegExp(
            "Set-(Acl|Alias|AuthenticodeSignature|Content|Date|ExecutionPolicy|Item(Property)?|Location|PSBreakpoint|PSDebug" +
              "|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)"
          ),
          /Show-(Command|ControlPanelItem|EventLog)/,
          /Sort-Object/,
          /Split-Path/,
          /Start-(Job|Process|Service|Sleep|Transaction|Transcript)/,
          /Stop-(Computer|Job|Process|Service|Transcript)/,
          /Suspend-(Job|Service)/,
          /TabExpansion2/,
          /Tee-Object/,
          /Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)/,
          /Trace-Command/,
          /Unblock-File/,
          /Undo-Transaction/,
          /Unregister-(Event|PSSessionConfiguration)/,
          /Update-(FormatData|Help|List|TypeData)/,
          /Use-Transaction/,
          /Wait-(Event|Job|Process)/,
          /Where-Object/,
          /Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning)/,
          /cd|help|mkdir|more|oss|prompt/,
          /ac|asnp|cat|cd|chdir|clc|clear|clhy|cli|clp|cls|clv|cnsn|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|dnsn|ebp/,
          /echo|epal|epcsv|epsn|erase|etsn|exsn|fc|fl|foreach|ft|fw|gal|gbp|gc|gci|gcm|gcs|gdr|ghy|gi|gjb|gl|gm|gmo|gp|gps/,
          /group|gsn|gsnp|gsv|gu|gv|gwmi|h|history|icm|iex|ihy|ii|ipal|ipcsv|ipmo|ipsn|irm|ise|iwmi|iwr|kill|lp|ls|man|md/,
          /measure|mi|mount|move|mp|mv|nal|ndr|ni|nmo|npssc|nsn|nv|ogv|oh|popd|ps|pushd|pwd|r|rbp|rcjb|rcsn|rd|rdr|ren|ri/,
          /rjb|rm|rmdir|rmo|rni|rnp|rp|rsn|rsnp|rujb|rv|rvpa|rwmi|sajb|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls/,
          /sort|sp|spjb|spps|spsv|start|sujb|sv|swmi|tee|trcm|type|where|wjb|write/,
        ],
        { prefix: "", suffix: "" }
      );
      var v = n(
        [
          /[$?^_]|Args|ConfirmPreference|ConsoleFileName|DebugPreference|Error|ErrorActionPreference|ErrorView|ExecutionContext/,
          /FormatEnumerationLimit|Home|Host|Input|MaximumAliasCount|MaximumDriveCount|MaximumErrorCount|MaximumFunctionCount/,
          /MaximumHistoryCount|MaximumVariableCount|MyInvocation|NestedPromptLevel|OutputEncoding|Pid|Profile|ProgressPreference/,
          /PSBoundParameters|PSCommandPath|PSCulture|PSDefaultParameterValues|PSEmailServer|PSHome|PSScriptRoot|PSSessionApplicationName/,
          /PSSessionConfigurationName|PSSessionOption|PSUICulture|PSVersionTable|Pwd|ShellId|StackTrace|VerbosePreference/,
          /WarningPreference|WhatIfPreference/,
          /Event|EventArgs|EventSubscriber|Sender/,
          /Matches|Ofs|ForEach|LastExitCode|PSCmdlet|PSItem|PSSenderInfo|This/,
          /true|false|null/,
        ],
        { prefix: "\\$", suffix: "" }
      );
      var P = n([S, f, v], { suffix: i });
      var d = { keyword: a, number: p, operator: l, builtin: P, punctuation: s, variable: m };
      function g(e, t) {
        var r = t.returnStack[t.returnStack.length - 1];
        if (r && r.shouldReturnFrom(t)) {
          t.tokenize = r.tokenize;
          t.returnStack.pop();
          return t.tokenize(e, t);
        }
        if (e.eatSpace()) {
          return null;
        }
        if (e.eat("(")) {
          t.bracketNesting += 1;
          return "punctuation";
        }
        if (e.eat(")")) {
          t.bracketNesting -= 1;
          return "punctuation";
        }
        for (var n in d) {
          if (e.match(d[n])) {
            return n;
          }
        }
        var i = e.next();
        if (i === "'") {
          return b(e, t);
        }
        if (i === "$") {
          return y(e, t);
        }
        if (i === '"') {
          return C(e, t);
        }
        if (i === "<" && e.eat("#")) {
          t.tokenize = w;
          return w(e, t);
        }
        if (i === "#") {
          e.skipToEnd();
          return "comment";
        }
        if (i === "@") {
          var a = e.eat(/["']/);
          if (a && e.eol()) {
            t.tokenize = R;
            t.startQuote = a[0];
            return R(e, t);
          } else if (e.eol()) {
            return "error";
          } else if (e.peek().match(/[({]/)) {
            return "punctuation";
          } else if (e.peek().match(o)) {
            return y(e, t);
          }
        }
        return "error";
      }
      function b(e, t) {
        var r;
        while ((r = e.peek()) != null) {
          e.next();
          if (r === "'" && !e.eat("'")) {
            t.tokenize = g;
            return "string";
          }
        }
        return "error";
      }
      function C(e, t) {
        var r;
        while ((r = e.peek()) != null) {
          if (r === "$") {
            t.tokenize = k;
            return "string";
          }
          e.next();
          if (r === "`") {
            e.next();
            continue;
          }
          if (r === '"' && !e.eat('"')) {
            t.tokenize = g;
            return "string";
          }
        }
        return "error";
      }
      function k(e, t) {
        return E(e, t, C);
      }
      function h(e, t) {
        t.tokenize = R;
        t.startQuote = '"';
        return R(e, t);
      }
      function x(e, t) {
        return E(e, t, h);
      }
      function E(e, t, r) {
        if (e.match("$(")) {
          var n = t.bracketNesting;
          t.returnStack.push({
            shouldReturnFrom: function (e) {
              return e.bracketNesting === n;
            },
            tokenize: r,
          });
          t.tokenize = g;
          t.bracketNesting += 1;
          return "punctuation";
        } else {
          e.next();
          t.returnStack.push({
            shouldReturnFrom: function () {
              return true;
            },
            tokenize: r,
          });
          t.tokenize = y;
          return t.tokenize(e, t);
        }
      }
      function w(e, t) {
        var r = false,
          n;
        while ((n = e.next()) != null) {
          if (r && n == ">") {
            t.tokenize = g;
            break;
          }
          r = n === "#";
        }
        return "comment";
      }
      function y(e, t) {
        var r = e.peek();
        if (e.eat("{")) {
          t.tokenize = M;
          return M(e, t);
        } else if (r != undefined && r.match(o)) {
          e.eatWhile(o);
          t.tokenize = g;
          return "variable";
        } else {
          t.tokenize = g;
          return "error";
        }
      }
      function M(e, t) {
        var r;
        while ((r = e.next()) != null) {
          if (r === "}") {
            t.tokenize = g;
            break;
          }
        }
        return "variable";
      }
      function R(e, t) {
        var r = t.startQuote;
        if (e.sol() && e.match(new RegExp(r + "@"))) {
          t.tokenize = g;
        } else if (r === '"') {
          while (!e.eol()) {
            var n = e.peek();
            if (n === "$") {
              t.tokenize = x;
              return "string";
            }
            e.next();
            if (n === "`") {
              e.next();
            }
          }
        } else {
          e.skipToEnd();
        }
        return "string";
      }
      const z = {
        name: "powershell",
        startState: function () {
          return { returnStack: [], bracketNesting: 0, tokenize: g };
        },
        token: function (e, t) {
          return t.tokenize(e, t);
        },
        languageData: { commentTokens: { line: "#", block: { open: "<#", close: "#>" } } },
      };
    },
  },
]);
