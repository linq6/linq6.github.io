"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [3549],
  {
    23549: (i, l, e) => {
      e.r(l);
      e.d(l, { gas: () => t, gasArm: () => n });
      function a(i) {
        var l = [];
        var e = "";
        var a = {
          ".abort": "builtin",
          ".align": "builtin",
          ".altmacro": "builtin",
          ".ascii": "builtin",
          ".asciz": "builtin",
          ".balign": "builtin",
          ".balignw": "builtin",
          ".balignl": "builtin",
          ".bundle_align_mode": "builtin",
          ".bundle_lock": "builtin",
          ".bundle_unlock": "builtin",
          ".byte": "builtin",
          ".cfi_startproc": "builtin",
          ".comm": "builtin",
          ".data": "builtin",
          ".def": "builtin",
          ".desc": "builtin",
          ".dim": "builtin",
          ".double": "builtin",
          ".eject": "builtin",
          ".else": "builtin",
          ".elseif": "builtin",
          ".end": "builtin",
          ".endef": "builtin",
          ".endfunc": "builtin",
          ".endif": "builtin",
          ".equ": "builtin",
          ".equiv": "builtin",
          ".eqv": "builtin",
          ".err": "builtin",
          ".error": "builtin",
          ".exitm": "builtin",
          ".extern": "builtin",
          ".fail": "builtin",
          ".file": "builtin",
          ".fill": "builtin",
          ".float": "builtin",
          ".func": "builtin",
          ".global": "builtin",
          ".gnu_attribute": "builtin",
          ".hidden": "builtin",
          ".hword": "builtin",
          ".ident": "builtin",
          ".if": "builtin",
          ".incbin": "builtin",
          ".include": "builtin",
          ".int": "builtin",
          ".internal": "builtin",
          ".irp": "builtin",
          ".irpc": "builtin",
          ".lcomm": "builtin",
          ".lflags": "builtin",
          ".line": "builtin",
          ".linkonce": "builtin",
          ".list": "builtin",
          ".ln": "builtin",
          ".loc": "builtin",
          ".loc_mark_labels": "builtin",
          ".local": "builtin",
          ".long": "builtin",
          ".macro": "builtin",
          ".mri": "builtin",
          ".noaltmacro": "builtin",
          ".nolist": "builtin",
          ".octa": "builtin",
          ".offset": "builtin",
          ".org": "builtin",
          ".p2align": "builtin",
          ".popsection": "builtin",
          ".previous": "builtin",
          ".print": "builtin",
          ".protected": "builtin",
          ".psize": "builtin",
          ".purgem": "builtin",
          ".pushsection": "builtin",
          ".quad": "builtin",
          ".reloc": "builtin",
          ".rept": "builtin",
          ".sbttl": "builtin",
          ".scl": "builtin",
          ".section": "builtin",
          ".set": "builtin",
          ".short": "builtin",
          ".single": "builtin",
          ".size": "builtin",
          ".skip": "builtin",
          ".sleb128": "builtin",
          ".space": "builtin",
          ".stab": "builtin",
          ".string": "builtin",
          ".struct": "builtin",
          ".subsection": "builtin",
          ".symver": "builtin",
          ".tag": "builtin",
          ".text": "builtin",
          ".title": "builtin",
          ".type": "builtin",
          ".uleb128": "builtin",
          ".val": "builtin",
          ".version": "builtin",
          ".vtable_entry": "builtin",
          ".vtable_inherit": "builtin",
          ".warning": "builtin",
          ".weak": "builtin",
          ".weakref": "builtin",
          ".word": "builtin",
        };
        var t = {};
        function n() {
          e = "#";
          t.al = "variable";
          t.ah = "variable";
          t.ax = "variable";
          t.eax = "variableName.special";
          t.rax = "variableName.special";
          t.bl = "variable";
          t.bh = "variable";
          t.bx = "variable";
          t.ebx = "variableName.special";
          t.rbx = "variableName.special";
          t.cl = "variable";
          t.ch = "variable";
          t.cx = "variable";
          t.ecx = "variableName.special";
          t.rcx = "variableName.special";
          t.dl = "variable";
          t.dh = "variable";
          t.dx = "variable";
          t.edx = "variableName.special";
          t.rdx = "variableName.special";
          t.si = "variable";
          t.esi = "variableName.special";
          t.rsi = "variableName.special";
          t.di = "variable";
          t.edi = "variableName.special";
          t.rdi = "variableName.special";
          t.sp = "variable";
          t.esp = "variableName.special";
          t.rsp = "variableName.special";
          t.bp = "variable";
          t.ebp = "variableName.special";
          t.rbp = "variableName.special";
          t.ip = "variable";
          t.eip = "variableName.special";
          t.rip = "variableName.special";
          t.cs = "keyword";
          t.ds = "keyword";
          t.ss = "keyword";
          t.es = "keyword";
          t.fs = "keyword";
          t.gs = "keyword";
        }
        function b() {
          e = "@";
          a.syntax = "builtin";
          t.r0 = "variable";
          t.r1 = "variable";
          t.r2 = "variable";
          t.r3 = "variable";
          t.r4 = "variable";
          t.r5 = "variable";
          t.r6 = "variable";
          t.r7 = "variable";
          t.r8 = "variable";
          t.r9 = "variable";
          t.r10 = "variable";
          t.r11 = "variable";
          t.r12 = "variable";
          t.sp = "variableName.special";
          t.lr = "variableName.special";
          t.pc = "variableName.special";
          t.r13 = t.sp;
          t.r14 = t.lr;
          t.r15 = t.pc;
          l.push(function (i, l) {
            if (i === "#") {
              l.eatWhile(/\w/);
              return "number";
            }
          });
        }
        if (i === "x86") {
          n();
        } else if (i === "arm" || i === "armv6") {
          b();
        }
        function r(i, l) {
          var e = false,
            a;
          while ((a = i.next()) != null) {
            if (a === l && !e) {
              return false;
            }
            e = !e && a === "\\";
          }
          return e;
        }
        function u(i, l) {
          var e = false,
            a;
          while ((a = i.next()) != null) {
            if (a === "/" && e) {
              l.tokenize = null;
              break;
            }
            e = a === "*";
          }
          return "comment";
        }
        return {
          name: "gas",
          startState: function () {
            return { tokenize: null };
          },
          token: function (i, n) {
            if (n.tokenize) {
              return n.tokenize(i, n);
            }
            if (i.eatSpace()) {
              return null;
            }
            var b,
              s,
              c = i.next();
            if (c === "/") {
              if (i.eat("*")) {
                n.tokenize = u;
                return u(i, n);
              }
            }
            if (c === e) {
              i.skipToEnd();
              return "comment";
            }
            if (c === '"') {
              r(i, '"');
              return "string";
            }
            if (c === ".") {
              i.eatWhile(/\w/);
              s = i.current().toLowerCase();
              b = a[s];
              return b || null;
            }
            if (c === "=") {
              i.eatWhile(/\w/);
              return "tag";
            }
            if (c === "{") {
              return "bracket";
            }
            if (c === "}") {
              return "bracket";
            }
            if (/\d/.test(c)) {
              if (c === "0" && i.eat("x")) {
                i.eatWhile(/[0-9a-fA-F]/);
                return "number";
              }
              i.eatWhile(/\d/);
              return "number";
            }
            if (/\w/.test(c)) {
              i.eatWhile(/\w/);
              if (i.eat(":")) {
                return "tag";
              }
              s = i.current().toLowerCase();
              b = t[s];
              return b || null;
            }
            for (var o = 0; o < l.length; o++) {
              b = l[o](c, i, n);
              if (b) {
                return b;
              }
            }
          },
          languageData: { commentTokens: { line: e, block: { open: "/*", close: "*/" } } },
        };
      }
      const t = a("x86");
      const n = a("arm");
    },
  },
]);
