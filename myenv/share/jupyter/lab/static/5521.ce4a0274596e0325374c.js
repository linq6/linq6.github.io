"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [5521],
  {
    5521: (e, t, r) => {
      r.r(t);
      r.d(t, { perl: () => _ });
      function n(e, t) {
        return e.string.charAt(e.pos + (t || 0));
      }
      function i(e, t) {
        if (t) {
          var r = e.pos - t;
          return e.string.substr(r >= 0 ? r : 0, t);
        } else {
          return e.string.substr(0, e.pos - 1);
        }
      }
      function s(e, t) {
        var r = e.string.length;
        var n = r - e.pos + 1;
        return e.string.substr(e.pos, t && t < r ? t : n);
      }
      function u(e, t) {
        var r = e.pos + t;
        var n;
        if (r <= 0) e.pos = 0;
        else if (r >= (n = e.string.length - 1)) e.pos = n;
        else e.pos = r;
      }
      var a = {
        "->": 4,
        "++": 4,
        "--": 4,
        "**": 4,
        "=~": 4,
        "!~": 4,
        "*": 4,
        "/": 4,
        "%": 4,
        x: 4,
        "+": 4,
        "-": 4,
        ".": 4,
        "<<": 4,
        ">>": 4,
        "<": 4,
        ">": 4,
        "<=": 4,
        ">=": 4,
        lt: 4,
        gt: 4,
        le: 4,
        ge: 4,
        "==": 4,
        "!=": 4,
        "<=>": 4,
        eq: 4,
        ne: 4,
        cmp: 4,
        "~~": 4,
        "&": 4,
        "|": 4,
        "^": 4,
        "&&": 4,
        "||": 4,
        "//": 4,
        "..": 4,
        "...": 4,
        "?": 4,
        ":": 4,
        "=": 4,
        "+=": 4,
        "-=": 4,
        "*=": 4,
        ",": 4,
        "=>": 4,
        "::": 4,
        not: 4,
        and: 4,
        or: 4,
        xor: 4,
        BEGIN: [5, 1],
        END: [5, 1],
        PRINT: [5, 1],
        PRINTF: [5, 1],
        GETC: [5, 1],
        READ: [5, 1],
        READLINE: [5, 1],
        DESTROY: [5, 1],
        TIE: [5, 1],
        TIEHANDLE: [5, 1],
        UNTIE: [5, 1],
        STDIN: 5,
        STDIN_TOP: 5,
        STDOUT: 5,
        STDOUT_TOP: 5,
        STDERR: 5,
        STDERR_TOP: 5,
        $ARG: 5,
        $_: 5,
        "@ARG": 5,
        "@_": 5,
        $LIST_SEPARATOR: 5,
        '$"': 5,
        $PROCESS_ID: 5,
        $PID: 5,
        $$: 5,
        $REAL_GROUP_ID: 5,
        $GID: 5,
        "$(": 5,
        $EFFECTIVE_GROUP_ID: 5,
        $EGID: 5,
        "$)": 5,
        $PROGRAM_NAME: 5,
        $0: 5,
        $SUBSCRIPT_SEPARATOR: 5,
        $SUBSEP: 5,
        "$;": 5,
        $REAL_USER_ID: 5,
        $UID: 5,
        "$<": 5,
        $EFFECTIVE_USER_ID: 5,
        $EUID: 5,
        "$>": 5,
        $a: 5,
        $b: 5,
        $COMPILING: 5,
        "$^C": 5,
        $DEBUGGING: 5,
        "$^D": 5,
        "${^ENCODING}": 5,
        $ENV: 5,
        "%ENV": 5,
        $SYSTEM_FD_MAX: 5,
        "$^F": 5,
        "@F": 5,
        "${^GLOBAL_PHASE}": 5,
        "$^H": 5,
        "%^H": 5,
        "@INC": 5,
        "%INC": 5,
        $INPLACE_EDIT: 5,
        "$^I": 5,
        "$^M": 5,
        $OSNAME: 5,
        "$^O": 5,
        "${^OPEN}": 5,
        $PERLDB: 5,
        "$^P": 5,
        $SIG: 5,
        "%SIG": 5,
        $BASETIME: 5,
        "$^T": 5,
        "${^TAINT}": 5,
        "${^UNICODE}": 5,
        "${^UTF8CACHE}": 5,
        "${^UTF8LOCALE}": 5,
        $PERL_VERSION: 5,
        "$^V": 5,
        "${^WIN32_SLOPPY_STAT}": 5,
        $EXECUTABLE_NAME: 5,
        "$^X": 5,
        $1: 5,
        $MATCH: 5,
        "$&": 5,
        "${^MATCH}": 5,
        $PREMATCH: 5,
        "$`": 5,
        "${^PREMATCH}": 5,
        $POSTMATCH: 5,
        "$'": 5,
        "${^POSTMATCH}": 5,
        $LAST_PAREN_MATCH: 5,
        "$+": 5,
        $LAST_SUBMATCH_RESULT: 5,
        "$^N": 5,
        "@LAST_MATCH_END": 5,
        "@+": 5,
        "%LAST_PAREN_MATCH": 5,
        "%+": 5,
        "@LAST_MATCH_START": 5,
        "@-": 5,
        "%LAST_MATCH_START": 5,
        "%-": 5,
        $LAST_REGEXP_CODE_RESULT: 5,
        "$^R": 5,
        "${^RE_DEBUG_FLAGS}": 5,
        "${^RE_TRIE_MAXBUF}": 5,
        $ARGV: 5,
        "@ARGV": 5,
        ARGV: 5,
        ARGVOUT: 5,
        $OUTPUT_FIELD_SEPARATOR: 5,
        $OFS: 5,
        "$,": 5,
        $INPUT_LINE_NUMBER: 5,
        $NR: 5,
        "$.": 5,
        $INPUT_RECORD_SEPARATOR: 5,
        $RS: 5,
        "$/": 5,
        $OUTPUT_RECORD_SEPARATOR: 5,
        $ORS: 5,
        "$\\": 5,
        $OUTPUT_AUTOFLUSH: 5,
        "$|": 5,
        $ACCUMULATOR: 5,
        "$^A": 5,
        $FORMAT_FORMFEED: 5,
        "$^L": 5,
        $FORMAT_PAGE_NUMBER: 5,
        "$%": 5,
        $FORMAT_LINES_LEFT: 5,
        "$-": 5,
        $FORMAT_LINE_BREAK_CHARACTERS: 5,
        "$:": 5,
        $FORMAT_LINES_PER_PAGE: 5,
        "$=": 5,
        $FORMAT_TOP_NAME: 5,
        "$^": 5,
        $FORMAT_NAME: 5,
        "$~": 5,
        "${^CHILD_ERROR_NATIVE}": 5,
        $EXTENDED_OS_ERROR: 5,
        "$^E": 5,
        $EXCEPTIONS_BEING_CAUGHT: 5,
        "$^S": 5,
        $WARNING: 5,
        "$^W": 5,
        "${^WARNING_BITS}": 5,
        $OS_ERROR: 5,
        $ERRNO: 5,
        "$!": 5,
        "%OS_ERROR": 5,
        "%ERRNO": 5,
        "%!": 5,
        $CHILD_ERROR: 5,
        "$?": 5,
        $EVAL_ERROR: 5,
        "$@": 5,
        $OFMT: 5,
        "$#": 5,
        "$*": 5,
        $ARRAY_BASE: 5,
        "$[": 5,
        $OLD_PERL_VERSION: 5,
        "$]": 5,
        if: [1, 1],
        elsif: [1, 1],
        else: [1, 1],
        while: [1, 1],
        unless: [1, 1],
        for: [1, 1],
        foreach: [1, 1],
        abs: 1,
        accept: 1,
        alarm: 1,
        atan2: 1,
        bind: 1,
        binmode: 1,
        bless: 1,
        bootstrap: 1,
        break: 1,
        caller: 1,
        chdir: 1,
        chmod: 1,
        chomp: 1,
        chop: 1,
        chown: 1,
        chr: 1,
        chroot: 1,
        close: 1,
        closedir: 1,
        connect: 1,
        continue: [1, 1],
        cos: 1,
        crypt: 1,
        dbmclose: 1,
        dbmopen: 1,
        default: 1,
        defined: 1,
        delete: 1,
        die: 1,
        do: 1,
        dump: 1,
        each: 1,
        endgrent: 1,
        endhostent: 1,
        endnetent: 1,
        endprotoent: 1,
        endpwent: 1,
        endservent: 1,
        eof: 1,
        eval: 1,
        exec: 1,
        exists: 1,
        exit: 1,
        exp: 1,
        fcntl: 1,
        fileno: 1,
        flock: 1,
        fork: 1,
        format: 1,
        formline: 1,
        getc: 1,
        getgrent: 1,
        getgrgid: 1,
        getgrnam: 1,
        gethostbyaddr: 1,
        gethostbyname: 1,
        gethostent: 1,
        getlogin: 1,
        getnetbyaddr: 1,
        getnetbyname: 1,
        getnetent: 1,
        getpeername: 1,
        getpgrp: 1,
        getppid: 1,
        getpriority: 1,
        getprotobyname: 1,
        getprotobynumber: 1,
        getprotoent: 1,
        getpwent: 1,
        getpwnam: 1,
        getpwuid: 1,
        getservbyname: 1,
        getservbyport: 1,
        getservent: 1,
        getsockname: 1,
        getsockopt: 1,
        given: 1,
        glob: 1,
        gmtime: 1,
        goto: 1,
        grep: 1,
        hex: 1,
        import: 1,
        index: 1,
        int: 1,
        ioctl: 1,
        join: 1,
        keys: 1,
        kill: 1,
        last: 1,
        lc: 1,
        lcfirst: 1,
        length: 1,
        link: 1,
        listen: 1,
        local: 2,
        localtime: 1,
        lock: 1,
        log: 1,
        lstat: 1,
        m: null,
        map: 1,
        mkdir: 1,
        msgctl: 1,
        msgget: 1,
        msgrcv: 1,
        msgsnd: 1,
        my: 2,
        new: 1,
        next: 1,
        no: 1,
        oct: 1,
        open: 1,
        opendir: 1,
        ord: 1,
        our: 2,
        pack: 1,
        package: 1,
        pipe: 1,
        pop: 1,
        pos: 1,
        print: 1,
        printf: 1,
        prototype: 1,
        push: 1,
        q: null,
        qq: null,
        qr: null,
        quotemeta: null,
        qw: null,
        qx: null,
        rand: 1,
        read: 1,
        readdir: 1,
        readline: 1,
        readlink: 1,
        readpipe: 1,
        recv: 1,
        redo: 1,
        ref: 1,
        rename: 1,
        require: 1,
        reset: 1,
        return: 1,
        reverse: 1,
        rewinddir: 1,
        rindex: 1,
        rmdir: 1,
        s: null,
        say: 1,
        scalar: 1,
        seek: 1,
        seekdir: 1,
        select: 1,
        semctl: 1,
        semget: 1,
        semop: 1,
        send: 1,
        setgrent: 1,
        sethostent: 1,
        setnetent: 1,
        setpgrp: 1,
        setpriority: 1,
        setprotoent: 1,
        setpwent: 1,
        setservent: 1,
        setsockopt: 1,
        shift: 1,
        shmctl: 1,
        shmget: 1,
        shmread: 1,
        shmwrite: 1,
        shutdown: 1,
        sin: 1,
        sleep: 1,
        socket: 1,
        socketpair: 1,
        sort: 1,
        splice: 1,
        split: 1,
        sprintf: 1,
        sqrt: 1,
        srand: 1,
        stat: 1,
        state: 1,
        study: 1,
        sub: 1,
        substr: 1,
        symlink: 1,
        syscall: 1,
        sysopen: 1,
        sysread: 1,
        sysseek: 1,
        system: 1,
        syswrite: 1,
        tell: 1,
        telldir: 1,
        tie: 1,
        tied: 1,
        time: 1,
        times: 1,
        tr: null,
        truncate: 1,
        uc: 1,
        ucfirst: 1,
        umask: 1,
        undef: 1,
        unlink: 1,
        unpack: 1,
        unshift: 1,
        untie: 1,
        use: 1,
        utime: 1,
        values: 1,
        vec: 1,
        wait: 1,
        waitpid: 1,
        wantarray: 1,
        warn: 1,
        when: 1,
        write: 1,
        y: null,
      };
      var l = "string.special";
      var f = /[goseximacplud]/;
      function o(e, t, r, n, i) {
        t.chain = null;
        t.style = null;
        t.tail = null;
        t.tokenize = function (e, t) {
          var s = false,
            u,
            a = 0;
          while ((u = e.next())) {
            if (u === r[a] && !s) {
              if (r[++a] !== undefined) {
                t.chain = r[a];
                t.style = n;
                t.tail = i;
              } else if (i) e.eatWhile(i);
              t.tokenize = E;
              return n;
            }
            s = !s && u == "\\";
          }
          return n;
        };
        return t.tokenize(e, t);
      }
      function $(e, t, r) {
        t.tokenize = function (e, t) {
          if (e.string == r) t.tokenize = E;
          e.skipToEnd();
          return "string";
        };
        return t.tokenize(e, t);
      }
      function E(e, t) {
        if (e.eatSpace()) return null;
        if (t.chain) return o(e, t, t.chain, t.style, t.tail);
        if (e.match(/^(\-?((\d[\d_]*)?\.\d+(e[+-]?\d+)?|\d+\.\d*)|0x[\da-fA-F_]+|0b[01_]+|\d[\d_]*(e[+-]?\d+)?)/)) return "number";
        if (e.match(/^<<(?=[_a-zA-Z])/)) {
          e.eatWhile(/\w/);
          return $(e, t, e.current().substr(2));
        }
        if (e.sol() && e.match(/^\=item(?!\w)/)) {
          return $(e, t, "=cut");
        }
        var r = e.next();
        if (r == '"' || r == "'") {
          if (i(e, 3) == "<<" + r) {
            var E = e.pos;
            e.eatWhile(/\w/);
            var _ = e.current().substr(1);
            if (_ && e.eat(r)) return $(e, t, _);
            e.pos = E;
          }
          return o(e, t, [r], "string");
        }
        if (r == "q") {
          var p = n(e, -2);
          if (!(p && /\w/.test(p))) {
            p = n(e, 0);
            if (p == "x") {
              p = n(e, 1);
              if (p == "(") {
                u(e, 2);
                return o(e, t, [")"], l, f);
              }
              if (p == "[") {
                u(e, 2);
                return o(e, t, ["]"], l, f);
              }
              if (p == "{") {
                u(e, 2);
                return o(e, t, ["}"], l, f);
              }
              if (p == "<") {
                u(e, 2);
                return o(e, t, [">"], l, f);
              }
              if (/[\^'"!~\/]/.test(p)) {
                u(e, 1);
                return o(e, t, [e.eat(p)], l, f);
              }
            } else if (p == "q") {
              p = n(e, 1);
              if (p == "(") {
                u(e, 2);
                return o(e, t, [")"], "string");
              }
              if (p == "[") {
                u(e, 2);
                return o(e, t, ["]"], "string");
              }
              if (p == "{") {
                u(e, 2);
                return o(e, t, ["}"], "string");
              }
              if (p == "<") {
                u(e, 2);
                return o(e, t, [">"], "string");
              }
              if (/[\^'"!~\/]/.test(p)) {
                u(e, 1);
                return o(e, t, [e.eat(p)], "string");
              }
            } else if (p == "w") {
              p = n(e, 1);
              if (p == "(") {
                u(e, 2);
                return o(e, t, [")"], "bracket");
              }
              if (p == "[") {
                u(e, 2);
                return o(e, t, ["]"], "bracket");
              }
              if (p == "{") {
                u(e, 2);
                return o(e, t, ["}"], "bracket");
              }
              if (p == "<") {
                u(e, 2);
                return o(e, t, [">"], "bracket");
              }
              if (/[\^'"!~\/]/.test(p)) {
                u(e, 1);
                return o(e, t, [e.eat(p)], "bracket");
              }
            } else if (p == "r") {
              p = n(e, 1);
              if (p == "(") {
                u(e, 2);
                return o(e, t, [")"], l, f);
              }
              if (p == "[") {
                u(e, 2);
                return o(e, t, ["]"], l, f);
              }
              if (p == "{") {
                u(e, 2);
                return o(e, t, ["}"], l, f);
              }
              if (p == "<") {
                u(e, 2);
                return o(e, t, [">"], l, f);
              }
              if (/[\^'"!~\/]/.test(p)) {
                u(e, 1);
                return o(e, t, [e.eat(p)], l, f);
              }
            } else if (/[\^'"!~\/(\[{<]/.test(p)) {
              if (p == "(") {
                u(e, 1);
                return o(e, t, [")"], "string");
              }
              if (p == "[") {
                u(e, 1);
                return o(e, t, ["]"], "string");
              }
              if (p == "{") {
                u(e, 1);
                return o(e, t, ["}"], "string");
              }
              if (p == "<") {
                u(e, 1);
                return o(e, t, [">"], "string");
              }
              if (/[\^'"!~\/]/.test(p)) {
                return o(e, t, [e.eat(p)], "string");
              }
            }
          }
        }
        if (r == "m") {
          var p = n(e, -2);
          if (!(p && /\w/.test(p))) {
            p = e.eat(/[(\[{<\^'"!~\/]/);
            if (p) {
              if (/[\^'"!~\/]/.test(p)) {
                return o(e, t, [p], l, f);
              }
              if (p == "(") {
                return o(e, t, [")"], l, f);
              }
              if (p == "[") {
                return o(e, t, ["]"], l, f);
              }
              if (p == "{") {
                return o(e, t, ["}"], l, f);
              }
              if (p == "<") {
                return o(e, t, [">"], l, f);
              }
            }
          }
        }
        if (r == "s") {
          var p = /[\/>\]})\w]/.test(n(e, -2));
          if (!p) {
            p = e.eat(/[(\[{<\^'"!~\/]/);
            if (p) {
              if (p == "[") return o(e, t, ["]", "]"], l, f);
              if (p == "{") return o(e, t, ["}", "}"], l, f);
              if (p == "<") return o(e, t, [">", ">"], l, f);
              if (p == "(") return o(e, t, [")", ")"], l, f);
              return o(e, t, [p, p], l, f);
            }
          }
        }
        if (r == "y") {
          var p = /[\/>\]})\w]/.test(n(e, -2));
          if (!p) {
            p = e.eat(/[(\[{<\^'"!~\/]/);
            if (p) {
              if (p == "[") return o(e, t, ["]", "]"], l, f);
              if (p == "{") return o(e, t, ["}", "}"], l, f);
              if (p == "<") return o(e, t, [">", ">"], l, f);
              if (p == "(") return o(e, t, [")", ")"], l, f);
              return o(e, t, [p, p], l, f);
            }
          }
        }
        if (r == "t") {
          var p = /[\/>\]})\w]/.test(n(e, -2));
          if (!p) {
            p = e.eat("r");
            if (p) {
              p = e.eat(/[(\[{<\^'"!~\/]/);
              if (p) {
                if (p == "[") return o(e, t, ["]", "]"], l, f);
                if (p == "{") return o(e, t, ["}", "}"], l, f);
                if (p == "<") return o(e, t, [">", ">"], l, f);
                if (p == "(") return o(e, t, [")", ")"], l, f);
                return o(e, t, [p, p], l, f);
              }
            }
          }
        }
        if (r == "`") {
          return o(e, t, [r], "builtin");
        }
        if (r == "/") {
          if (!/~\s*$/.test(i(e))) return "operator";
          else return o(e, t, [r], l, f);
        }
        if (r == "$") {
          var E = e.pos;
          if (e.eatWhile(/\d/) || (e.eat("{") && e.eatWhile(/\d/) && e.eat("}"))) return "builtin";
          else e.pos = E;
        }
        if (/[$@%]/.test(r)) {
          var E = e.pos;
          if ((e.eat("^") && e.eat(/[A-Z]/)) || (!/[@$%&]/.test(n(e, -2)) && e.eat(/[=|\\\-#?@;:&`~\^!\[\]*'"$+.,\/<>()]/))) {
            var p = e.current();
            if (a[p]) return "builtin";
          }
          e.pos = E;
        }
        if (/[$@%&]/.test(r)) {
          if (e.eatWhile(/[\w$]/) || (e.eat("{") && e.eatWhile(/[\w$]/) && e.eat("}"))) {
            var p = e.current();
            if (a[p]) return "builtin";
            else return "variable";
          }
        }
        if (r == "#") {
          if (n(e, -2) != "$") {
            e.skipToEnd();
            return "comment";
          }
        }
        if (/[:+\-\^*$&%@=<>!?|\/~\.]/.test(r)) {
          var E = e.pos;
          e.eatWhile(/[:+\-\^*$&%@=<>!?|\/~\.]/);
          if (a[e.current()]) return "operator";
          else e.pos = E;
        }
        if (r == "_") {
          if (e.pos == 1) {
            if (s(e, 6) == "_END__") {
              return o(e, t, ["\0"], "comment");
            } else if (s(e, 7) == "_DATA__") {
              return o(e, t, ["\0"], "builtin");
            } else if (s(e, 7) == "_C__") {
              return o(e, t, ["\0"], "string");
            }
          }
        }
        if (/\w/.test(r)) {
          var E = e.pos;
          if (n(e, -2) == "{" && (n(e, 0) == "}" || (e.eatWhile(/\w/) && n(e, 0) == "}"))) return "string";
          else e.pos = E;
        }
        if (/[A-Z]/.test(r)) {
          var R = n(e, -2);
          var E = e.pos;
          e.eatWhile(/[A-Z_]/);
          if (/[\da-z]/.test(n(e, 0))) {
            e.pos = E;
          } else {
            var p = a[e.current()];
            if (!p) return "meta";
            if (p[1]) p = p[0];
            if (R != ":") {
              if (p == 1) return "keyword";
              else if (p == 2) return "def";
              else if (p == 3) return "atom";
              else if (p == 4) return "operator";
              else if (p == 5) return "builtin";
              else return "meta";
            } else return "meta";
          }
        }
        if (/[a-zA-Z_]/.test(r)) {
          var R = n(e, -2);
          e.eatWhile(/\w/);
          var p = a[e.current()];
          if (!p) return "meta";
          if (p[1]) p = p[0];
          if (R != ":") {
            if (p == 1) return "keyword";
            else if (p == 2) return "def";
            else if (p == 3) return "atom";
            else if (p == 4) return "operator";
            else if (p == 5) return "builtin";
            else return "meta";
          } else return "meta";
        }
        return null;
      }
      const _ = {
        name: "perl",
        startState: function () {
          return { tokenize: E, chain: null, style: null, tail: null };
        },
        token: function (e, t) {
          return (t.tokenize || E)(e, t);
        },
        languageData: { commentTokens: { line: "#" }, wordChars: "$" },
      };
    },
  },
]);
