"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7823],
  {
    27823: (e, t, n) => {
      n.r(t);
      n.d(t, { nsis: () => r });
      var i = n(11176);
      const r = (0, i.Q)({
        start: [
          { regex: /(?:[+-]?)(?:0x[\d,a-f]+)|(?:0o[0-7]+)|(?:0b[0,1]+)|(?:\d+.?\d*)/, token: "number" },
          { regex: /"(?:[^\\"]|\\.)*"?/, token: "string" },
          { regex: /'(?:[^\\']|\\.)*'?/, token: "string" },
          { regex: /`(?:[^\\`]|\\.)*`?/, token: "string" },
          {
            regex:
              /^\s*(?:\!(addincludedir|addplugindir|appendfile|assert|cd|define|delfile|echo|error|execute|finalize|getdllversion|gettlbversion|include|insertmacro|macro|macroend|makensis|packhdr|pragma|searchparse|searchreplace|system|tempfile|undef|uninstfinalize|verbose|warning))\b/i,
            token: "keyword",
          },
          { regex: /^\s*(?:\!(if(?:n?def)?|ifmacron?def|macro))\b/i, token: "keyword", indent: true },
          { regex: /^\s*(?:\!(else|endif|macroend))\b/i, token: "keyword", dedent: true },
          {
            regex:
              /^\s*(?:Abort|AddBrandingImage|AddSize|AllowRootDirInstall|AllowSkipFiles|AutoCloseWindow|BGFont|BGGradient|BrandingText|BringToFront|Call|CallInstDLL|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|CRCCheck|CreateDirectory|CreateFont|CreateShortCut|Delete|DeleteINISec|DeleteINIStr|DeleteRegKey|DeleteRegValue|DetailPrint|DetailsButtonText|DirText|DirVar|DirVerify|EnableWindow|EnumRegKey|EnumRegValue|Exch|Exec|ExecShell|ExecShellWait|ExecWait|ExpandEnvStrings|File|FileBufSize|FileClose|FileErrorText|FileOpen|FileRead|FileReadByte|FileReadUTF16LE|FileReadWord|FileWriteUTF16LE|FileSeek|FileWrite|FileWriteByte|FileWriteWord|FindClose|FindFirst|FindNext|FindWindow|FlushINI|GetCurInstType|GetCurrentAddress|GetDlgItem|GetDLLVersion|GetDLLVersionLocal|GetErrorLevel|GetFileTime|GetFileTimeLocal|GetFullPathName|GetFunctionAddress|GetInstDirError|GetKnownFolderPath|GetLabelAddress|GetTempFileName|GetWinVer|Goto|HideWindow|Icon|IfAbort|IfErrors|IfFileExists|IfRebootFlag|IfRtlLanguage|IfShellVarContextAll|IfSilent|InitPluginsDir|InstallButtonText|InstallColors|InstallDir|InstallDirRegKey|InstProgressFlags|InstType|InstTypeGetText|InstTypeSetText|Int64Cmp|Int64CmpU|Int64Fmt|IntCmp|IntCmpU|IntFmt|IntOp|IntPtrCmp|IntPtrCmpU|IntPtrOp|IsWindow|LangString|LicenseBkColor|LicenseData|LicenseForceSelection|LicenseLangString|LicenseText|LoadAndSetImage|LoadLanguageFile|LockWindow|LogSet|LogText|ManifestDPIAware|ManifestLongPathAware|ManifestMaxVersionTested|ManifestSupportedOS|MessageBox|MiscButtonText|Name|Nop|OutFile|Page|PageCallbacks|PEAddResource|PEDllCharacteristics|PERemoveResource|PESubsysVer|Pop|Push|Quit|ReadEnvStr|ReadINIStr|ReadRegDWORD|ReadRegStr|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|RMDir|SearchPath|SectionGetFlags|SectionGetInstTypes|SectionGetSize|SectionGetText|SectionIn|SectionSetFlags|SectionSetInstTypes|SectionSetSize|SectionSetText|SendMessage|SetAutoClose|SetBrandingImage|SetCompress|SetCompressor|SetCompressorDictSize|SetCtlColors|SetCurInstType|SetDatablockOptimize|SetDateSave|SetDetailsPrint|SetDetailsView|SetErrorLevel|SetErrors|SetFileAttributes|SetFont|SetOutPath|SetOverwrite|SetRebootFlag|SetRegView|SetShellVarContext|SetSilent|ShowInstDetails|ShowUninstDetails|ShowWindow|SilentInstall|SilentUnInstall|Sleep|SpaceTexts|StrCmp|StrCmpS|StrCpy|StrLen|SubCaption|Target|Unicode|UninstallButtonText|UninstallCaption|UninstallIcon|UninstallSubCaption|UninstallText|UninstPage|UnRegDLL|Var|VIAddVersionKey|VIFileVersion|VIProductVersion|WindowIcon|WriteINIStr|WriteRegBin|WriteRegDWORD|WriteRegExpandStr|WriteRegMultiStr|WriteRegNone|WriteRegStr|WriteUninstaller|XPStyle)\b/i,
            token: "keyword",
          },
          { regex: /^\s*(?:Function|PageEx|Section(?:Group)?)\b/i, token: "keyword", indent: true },
          { regex: /^\s*(?:(Function|PageEx|Section(?:Group)?)End)\b/i, token: "keyword", dedent: true },
          {
            regex:
              /\b(?:ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_HIDDEN|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HIDDEN|HKCC|HKCR(32|64)?|HKCU(32|64)?|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM(32|64)?|HKPD|HKU|IDABORT|IDCANCEL|IDD_DIR|IDD_INST|IDD_INSTFILES|IDD_LICENSE|IDD_SELCOM|IDD_UNINST|IDD_VERIFY|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|MB_YESNOCANCEL|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SW_HIDE|SW_SHOWDEFAULT|SW_SHOWMAXIMIZED|SW_SHOWMINIMIZED|SW_SHOWNORMAL|SYSTEM|TEMPORARY)\b/i,
            token: "atom",
          },
          {
            regex:
              /\b(?:admin|all|amd64-unicode|auto|both|bottom|bzip2|components|current|custom|directory|false|force|hide|highest|ifdiff|ifnewer|instfiles|lastused|leave|left|license|listonly|lzma|nevershow|none|normal|notset|off|on|right|show|silent|silentlog|textonly|top|true|try|un\.components|un\.custom|un\.directory|un\.instfiles|un\.license|uninstConfirm|user|Win10|Win7|Win8|WinVista|x-86-(ansi|unicode)|zlib)\b/i,
            token: "builtin",
          },
          {
            regex:
              /\$\{(?:And(?:If(?:Not)?|Unless)|Break|Case(?:2|3|4|5|Else)?|Continue|Default|Do(?:Until|While)?|Else(?:If(?:Not)?|Unless)?|End(?:If|Select|Switch)|Exit(?:Do|For|While)|For(?:Each)?|If(?:Cmd|Not(?:Then)?|Then)?|Loop(?:Until|While)?|Or(?:If(?:Not)?|Unless)|Select|Switch|Unless|While)\}/i,
            token: "variable-2",
            indent: true,
          },
          {
            regex:
              /\$\{(?:BannerTrimPath|DirState|DriveSpace|Get(BaseName|Drives|ExeName|ExePath|FileAttributes|FileExt|FileName|FileVersion|Options|OptionsS|Parameters|Parent|Root|Size|Time)|Locate|RefreshShellIcons)\}/i,
            token: "variable-2",
            dedent: true,
          },
          { regex: /\$\{(?:Memento(?:Section(?:Done|End|Restore|Save)?|UnselectedSection))\}/i, token: "variable-2", dedent: true },
          {
            regex:
              /\$\{(?:Config(?:Read|ReadS|Write|WriteS)|File(?:Join|ReadFromEnd|Recode)|Line(?:Find|Read|Sum)|Text(?:Compare|CompareS)|TrimNewLines)\}/i,
            token: "variable-2",
            dedent: true,
          },
          {
            regex: /\$\{(?:(?:At(?:Least|Most)|Is)(?:ServicePack|Win(?:7|8|10|95|98|200(?:0|3|8(?:R2)?)|ME|NT4|Vista|XP))|Is(?:NT|Server))\}/i,
            token: "variable",
            dedent: true,
          },
          {
            regex: /\$\{(?:StrFilterS?|Version(?:Compare|Convert)|Word(?:AddS?|Find(?:(?:2|3)X)?S?|InsertS?|ReplaceS?))\}/i,
            token: "keyword",
            dedent: true,
          },
          { regex: /\$\{(?:RunningX64)\}/i, token: "variable", dedent: true },
          { regex: /\$\{(?:Disable|Enable)X64FSRedirection\}/i, token: "keyword", dedent: true },
          { regex: /(#|;).*/, token: "comment" },
          { regex: /\/\*/, token: "comment", next: "comment" },
          { regex: /[-+\/*=<>!]+/, token: "operator" },
          { regex: /\$\w[\w\.]*/, token: "variable" },
          { regex: /\${[\!\w\.:-]+}/, token: "variableName.constant" },
          { regex: /\$\([\!\w\.:-]+\)/, token: "atom" },
        ],
        comment: [
          { regex: /.*?\*\//, token: "comment", next: "start" },
          { regex: /.*/, token: "comment" },
        ],
        languageData: {
          name: "nsis",
          indentOnInput: /^\s*((Function|PageEx|Section|Section(Group)?)End|(\!(endif|macroend))|\$\{(End(If|Unless|While)|Loop(Until)|Next)\})$/i,
          commentTokens: { line: "#", block: { open: "/*", close: "*/" } },
        },
      });
    },
    11176: (e, t, n) => {
      n.d(t, { Q: () => i });
      function i(e) {
        r(e, "start");
        var t = {},
          n = e.languageData || {},
          i = false;
        for (var o in e)
          if (o != n && e.hasOwnProperty(o)) {
            var a = (t[o] = []),
              S = e[o];
            for (var c = 0; c < S.length; c++) {
              var u = S[c];
              a.push(new s(u, e));
              if (u.indent || u.dedent) i = true;
            }
          }
        return {
          name: n.name,
          startState: function () {
            return { state: "start", pending: null, indent: i ? [] : null };
          },
          copyState: function (e) {
            var t = { state: e.state, pending: e.pending, indent: e.indent && e.indent.slice(0) };
            if (e.stack) t.stack = e.stack.slice(0);
            return t;
          },
          token: l(t),
          indent: d(t, n),
          languageData: n,
        };
      }
      function r(e, t) {
        if (!e.hasOwnProperty(t)) throw new Error("Undefined state " + t + " in simple mode");
      }
      function o(e, t) {
        if (!e) return /(?:)/;
        var n = "";
        if (e instanceof RegExp) {
          if (e.ignoreCase) n = "i";
          e = e.source;
        } else {
          e = String(e);
        }
        return new RegExp((t === false ? "" : "^") + "(?:" + e + ")", n);
      }
      function a(e) {
        if (!e) return null;
        if (e.apply) return e;
        if (typeof e == "string") return e.replace(/\./g, " ");
        var t = [];
        for (var n = 0; n < e.length; n++) t.push(e[n] && e[n].replace(/\./g, " "));
        return t;
      }
      function s(e, t) {
        if (e.next || e.push) r(t, e.next || e.push);
        this.regex = o(e.regex);
        this.token = a(e.token);
        this.data = e;
      }
      function l(e) {
        return function (t, n) {
          if (n.pending) {
            var i = n.pending.shift();
            if (n.pending.length == 0) n.pending = null;
            t.pos += i.text.length;
            return i.token;
          }
          var r = e[n.state];
          for (var o = 0; o < r.length; o++) {
            var a = r[o];
            var s = (!a.data.sol || t.sol()) && t.match(a.regex);
            if (s) {
              if (a.data.next) {
                n.state = a.data.next;
              } else if (a.data.push) {
                (n.stack || (n.stack = [])).push(n.state);
                n.state = a.data.push;
              } else if (a.data.pop && n.stack && n.stack.length) {
                n.state = n.stack.pop();
              }
              if (a.data.indent) n.indent.push(t.indentation() + t.indentUnit);
              if (a.data.dedent) n.indent.pop();
              var l = a.token;
              if (l && l.apply) l = l(s);
              if (s.length > 2 && a.token && typeof a.token != "string") {
                n.pending = [];
                for (var d = 2; d < s.length; d++) if (s[d]) n.pending.push({ text: s[d], token: a.token[d - 1] });
                t.backUp(s[0].length - (s[1] ? s[1].length : 0));
                return l[0];
              } else if (l && l.join) {
                return l[0];
              } else {
                return l;
              }
            }
          }
          t.next();
          return null;
        };
      }
      function d(e, t) {
        return function (n, i) {
          if (n.indent == null || (t.dontIndentStates && t.doneIndentState.indexOf(n.state) > -1)) return null;
          var r = n.indent.length - 1,
            o = e[n.state];
          e: for (;;) {
            for (var a = 0; a < o.length; a++) {
              var s = o[a];
              if (s.data.dedent && s.data.dedentIfLineStart !== false) {
                var l = s.regex.exec(i);
                if (l && l[0]) {
                  r--;
                  if (s.next || s.push) o = e[s.next || s.push];
                  i = i.slice(l[0].length);
                  continue e;
                }
              }
            }
            break;
          }
          return r < 0 ? 0 : n.indent[r];
        };
      }
    },
  },
]);
