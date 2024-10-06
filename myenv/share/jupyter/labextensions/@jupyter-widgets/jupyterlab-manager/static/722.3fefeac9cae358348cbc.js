(self.webpackChunk_jupyter_widgets_jupyterlab_manager = self.webpackChunk_jupyter_widgets_jupyterlab_manager || []).push([
  [722],
  {
    9907: (e) => {
      var r,
        t,
        s = (e.exports = {});
      function n() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function i(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === n || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
        try {
          return r(e, 0);
        } catch (t) {
          try {
            return r.call(null, e, 0);
          } catch (t) {
            return r.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          r = "function" == typeof setTimeout ? setTimeout : n;
        } catch (e) {
          r = n;
        }
        try {
          t = "function" == typeof clearTimeout ? clearTimeout : o;
        } catch (e) {
          t = o;
        }
      })();
      var a,
        l = [],
        c = !1,
        p = -1;
      function h() {
        c && a && ((c = !1), a.length ? (l = a.concat(l)) : (p = -1), l.length && E());
      }
      function E() {
        if (!c) {
          var e = i(h);
          c = !0;
          for (var r = l.length; r; ) {
            for (a = l, l = []; ++p < r; ) a && a[p].run();
            (p = -1), (r = l.length);
          }
          (a = null),
            (c = !1),
            (function (e) {
              if (t === clearTimeout) return clearTimeout(e);
              if ((t === o || !t) && clearTimeout) return (t = clearTimeout), clearTimeout(e);
              try {
                return t(e);
              } catch (r) {
                try {
                  return t.call(null, e);
                } catch (r) {
                  return t.call(this, e);
                }
              }
            })(e);
        }
      }
      function u(e, r) {
        (this.fun = e), (this.array = r);
      }
      function m() {}
      (s.nextTick = function (e) {
        var r = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
        l.push(new u(e, r)), 1 !== l.length || c || i(E);
      }),
        (u.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (s.title = "browser"),
        (s.browser = !0),
        (s.env = {}),
        (s.argv = []),
        (s.version = ""),
        (s.versions = {}),
        (s.on = m),
        (s.addListener = m),
        (s.once = m),
        (s.off = m),
        (s.removeListener = m),
        (s.removeAllListeners = m),
        (s.emit = m),
        (s.prependListener = m),
        (s.prependOnceListener = m),
        (s.listeners = function (e) {
          return [];
        }),
        (s.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (s.cwd = function () {
          return "/";
        }),
        (s.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (s.umask = function () {
          return 0;
        });
    },
    1565: (e, r, t) => {
      const s = Symbol("SemVer ANY");
      class n {
        static get ANY() {
          return s;
        }
        constructor(e, r) {
          if (((r = o(r)), e instanceof n)) {
            if (e.loose === !!r.loose) return e;
            e = e.value;
          }
          (e = e.trim().split(/\s+/).join(" ")),
            c("comparator", e, r),
            (this.options = r),
            (this.loose = !!r.loose),
            this.parse(e),
            this.semver === s ? (this.value = "") : (this.value = this.operator + this.semver.version),
            c("comp", this);
        }
        parse(e) {
          const r = this.options.loose ? i[a.COMPARATORLOOSE] : i[a.COMPARATOR],
            t = e.match(r);
          if (!t) throw new TypeError(`Invalid comparator: ${e}`);
          (this.operator = void 0 !== t[1] ? t[1] : ""),
            "=" === this.operator && (this.operator = ""),
            t[2] ? (this.semver = new p(t[2], this.options.loose)) : (this.semver = s);
        }
        toString() {
          return this.value;
        }
        test(e) {
          if ((c("Comparator.test", e, this.options.loose), this.semver === s || e === s)) return !0;
          if ("string" == typeof e)
            try {
              e = new p(e, this.options);
            } catch (e) {
              return !1;
            }
          return l(e, this.operator, this.semver, this.options);
        }
        intersects(e, r) {
          if (!(e instanceof n)) throw new TypeError("a Comparator is required");
          return "" === this.operator
            ? "" === this.value || new h(e.value, r).test(this.value)
            : "" === e.operator
              ? "" === e.value || new h(this.value, r).test(e.semver)
              : !(
                  ((r = o(r)).includePrerelease && ("<0.0.0-0" === this.value || "<0.0.0-0" === e.value)) ||
                  (!r.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))) ||
                  ((!this.operator.startsWith(">") || !e.operator.startsWith(">")) &&
                    (!this.operator.startsWith("<") || !e.operator.startsWith("<")) &&
                    (this.semver.version !== e.semver.version || !this.operator.includes("=") || !e.operator.includes("=")) &&
                    !(l(this.semver, "<", e.semver, r) && this.operator.startsWith(">") && e.operator.startsWith("<")) &&
                    !(l(this.semver, ">", e.semver, r) && this.operator.startsWith("<") && e.operator.startsWith(">")))
                );
        }
      }
      e.exports = n;
      const o = t(3990),
        { safeRe: i, t: a } = t(2841),
        l = t(4004),
        c = t(1361),
        p = t(4517),
        h = t(7476);
    },
    7476: (e, r, t) => {
      class s {
        constructor(e, r) {
          if (((r = o(r)), e instanceof s)) return e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease ? e : new s(e.raw, r);
          if (e instanceof i) return (this.raw = e.value), (this.set = [[e]]), this.format(), this;
          if (
            ((this.options = r),
            (this.loose = !!r.loose),
            (this.includePrerelease = !!r.includePrerelease),
            (this.raw = e.trim().split(/\s+/).join(" ")),
            (this.set = this.raw
              .split("||")
              .map((e) => this.parseRange(e.trim()))
              .filter((e) => e.length)),
            !this.set.length)
          )
            throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
          if (this.set.length > 1) {
            const e = this.set[0];
            if (((this.set = this.set.filter((e) => !$(e[0]))), 0 === this.set.length)) this.set = [e];
            else if (this.set.length > 1)
              for (const e of this.set)
                if (1 === e.length && R(e[0])) {
                  this.set = [e];
                  break;
                }
          }
          this.format();
        }
        format() {
          return (
            (this.range = this.set
              .map((e) => e.join(" ").trim())
              .join("||")
              .trim()),
            this.range
          );
        }
        toString() {
          return this.range;
        }
        parseRange(e) {
          const r = ((this.options.includePrerelease && m) | (this.options.loose && f)) + ":" + e,
            t = n.get(r);
          if (t) return t;
          const s = this.options.loose,
            o = s ? c[p.HYPHENRANGELOOSE] : c[p.HYPHENRANGE];
          (e = e.replace(o, P(this.options.includePrerelease))),
            a("hyphen replace", e),
            (e = e.replace(c[p.COMPARATORTRIM], h)),
            a("comparator trim", e),
            (e = e.replace(c[p.TILDETRIM], E)),
            a("tilde trim", e),
            (e = e.replace(c[p.CARETTRIM], u)),
            a("caret trim", e);
          let l = e
            .split(" ")
            .map((e) => L(e, this.options))
            .join(" ")
            .split(/\s+/)
            .map((e) => S(e, this.options));
          s && (l = l.filter((e) => (a("loose invalid filter", e, this.options), !!e.match(c[p.COMPARATORLOOSE])))), a("range list", l);
          const R = new Map(),
            I = l.map((e) => new i(e, this.options));
          for (const e of I) {
            if ($(e)) return [e];
            R.set(e.value, e);
          }
          R.size > 1 && R.has("") && R.delete("");
          const N = [...R.values()];
          return n.set(r, N), N;
        }
        intersects(e, r) {
          if (!(e instanceof s)) throw new TypeError("a Range is required");
          return this.set.some((t) => I(t, r) && e.set.some((e) => I(e, r) && t.every((t) => e.every((e) => t.intersects(e, r)))));
        }
        test(e) {
          if (!e) return !1;
          if ("string" == typeof e)
            try {
              e = new l(e, this.options);
            } catch (e) {
              return !1;
            }
          for (let r = 0; r < this.set.length; r++) if (C(this.set[r], e, this.options)) return !0;
          return !1;
        }
      }
      e.exports = s;
      const n = new (t(8953))(),
        o = t(3990),
        i = t(1565),
        a = t(1361),
        l = t(4517),
        { safeRe: c, t: p, comparatorTrimReplace: h, tildeTrimReplace: E, caretTrimReplace: u } = t(2841),
        { FLAG_INCLUDE_PRERELEASE: m, FLAG_LOOSE: f } = t(9543),
        $ = (e) => "<0.0.0-0" === e.value,
        R = (e) => "" === e.value,
        I = (e, r) => {
          let t = !0;
          const s = e.slice();
          let n = s.pop();
          for (; t && s.length; ) (t = s.every((e) => n.intersects(e, r))), (n = s.pop());
          return t;
        },
        L = (e, r) => (
          a("comp", e, r), (e = T(e, r)), a("caret", e), (e = v(e, r)), a("tildes", e), (e = A(e, r)), a("xrange", e), (e = w(e, r)), a("stars", e), e
        ),
        N = (e) => !e || "x" === e.toLowerCase() || "*" === e,
        v = (e, r) =>
          e
            .trim()
            .split(/\s+/)
            .map((e) => O(e, r))
            .join(" "),
        O = (e, r) => {
          const t = r.loose ? c[p.TILDELOOSE] : c[p.TILDE];
          return e.replace(t, (r, t, s, n, o) => {
            let i;
            return (
              a("tilde", e, r, t, s, n, o),
              N(t)
                ? (i = "")
                : N(s)
                  ? (i = `>=${t}.0.0 <${+t + 1}.0.0-0`)
                  : N(n)
                    ? (i = `>=${t}.${s}.0 <${t}.${+s + 1}.0-0`)
                    : o
                      ? (a("replaceTilde pr", o), (i = `>=${t}.${s}.${n}-${o} <${t}.${+s + 1}.0-0`))
                      : (i = `>=${t}.${s}.${n} <${t}.${+s + 1}.0-0`),
              a("tilde return", i),
              i
            );
          });
        },
        T = (e, r) =>
          e
            .trim()
            .split(/\s+/)
            .map((e) => d(e, r))
            .join(" "),
        d = (e, r) => {
          a("caret", e, r);
          const t = r.loose ? c[p.CARETLOOSE] : c[p.CARET],
            s = r.includePrerelease ? "-0" : "";
          return e.replace(t, (r, t, n, o, i) => {
            let l;
            return (
              a("caret", e, r, t, n, o, i),
              N(t)
                ? (l = "")
                : N(n)
                  ? (l = `>=${t}.0.0${s} <${+t + 1}.0.0-0`)
                  : N(o)
                    ? (l = "0" === t ? `>=${t}.${n}.0${s} <${t}.${+n + 1}.0-0` : `>=${t}.${n}.0${s} <${+t + 1}.0.0-0`)
                    : i
                      ? (a("replaceCaret pr", i),
                        (l =
                          "0" === t
                            ? "0" === n
                              ? `>=${t}.${n}.${o}-${i} <${t}.${n}.${+o + 1}-0`
                              : `>=${t}.${n}.${o}-${i} <${t}.${+n + 1}.0-0`
                            : `>=${t}.${n}.${o}-${i} <${+t + 1}.0.0-0`))
                      : (a("no pr"),
                        (l =
                          "0" === t
                            ? "0" === n
                              ? `>=${t}.${n}.${o}${s} <${t}.${n}.${+o + 1}-0`
                              : `>=${t}.${n}.${o}${s} <${t}.${+n + 1}.0-0`
                            : `>=${t}.${n}.${o} <${+t + 1}.0.0-0`)),
              a("caret return", l),
              l
            );
          });
        },
        A = (e, r) => (
          a("replaceXRanges", e, r),
          e
            .split(/\s+/)
            .map((e) => g(e, r))
            .join(" ")
        ),
        g = (e, r) => {
          e = e.trim();
          const t = r.loose ? c[p.XRANGELOOSE] : c[p.XRANGE];
          return e.replace(t, (t, s, n, o, i, l) => {
            a("xRange", e, t, s, n, o, i, l);
            const c = N(n),
              p = c || N(o),
              h = p || N(i),
              E = h;
            return (
              "=" === s && E && (s = ""),
              (l = r.includePrerelease ? "-0" : ""),
              c
                ? (t = ">" === s || "<" === s ? "<0.0.0-0" : "*")
                : s && E
                  ? (p && (o = 0),
                    (i = 0),
                    ">" === s
                      ? ((s = ">="), p ? ((n = +n + 1), (o = 0), (i = 0)) : ((o = +o + 1), (i = 0)))
                      : "<=" === s && ((s = "<"), p ? (n = +n + 1) : (o = +o + 1)),
                    "<" === s && (l = "-0"),
                    (t = `${s + n}.${o}.${i}${l}`))
                  : p
                    ? (t = `>=${n}.0.0${l} <${+n + 1}.0.0-0`)
                    : h && (t = `>=${n}.${o}.0${l} <${n}.${+o + 1}.0-0`),
              a("xRange return", t),
              t
            );
          });
        },
        w = (e, r) => (a("replaceStars", e, r), e.trim().replace(c[p.STAR], "")),
        S = (e, r) => (a("replaceGTE0", e, r), e.trim().replace(c[r.includePrerelease ? p.GTE0PRE : p.GTE0], "")),
        P = (e) => (r, t, s, n, o, i, a, l, c, p, h, E) =>
          `${(t = N(s) ? "" : N(n) ? `>=${s}.0.0${e ? "-0" : ""}` : N(o) ? `>=${s}.${n}.0${e ? "-0" : ""}` : i ? `>=${t}` : `>=${t}${e ? "-0" : ""}`)} ${(l = N(c) ? "" : N(p) ? `<${+c + 1}.0.0-0` : N(h) ? `<${c}.${+p + 1}.0-0` : E ? `<=${c}.${p}.${h}-${E}` : e ? `<${c}.${p}.${+h + 1}-0` : `<=${l}`)}`.trim(),
        C = (e, r, t) => {
          for (let t = 0; t < e.length; t++) if (!e[t].test(r)) return !1;
          if (r.prerelease.length && !t.includePrerelease) {
            for (let t = 0; t < e.length; t++)
              if ((a(e[t].semver), e[t].semver !== i.ANY && e[t].semver.prerelease.length > 0)) {
                const s = e[t].semver;
                if (s.major === r.major && s.minor === r.minor && s.patch === r.patch) return !0;
              }
            return !1;
          }
          return !0;
        };
    },
    4517: (e, r, t) => {
      const s = t(1361),
        { MAX_LENGTH: n, MAX_SAFE_INTEGER: o } = t(9543),
        { safeRe: i, t: a } = t(2841),
        l = t(3990),
        { compareIdentifiers: c } = t(3806);
      class p {
        constructor(e, r) {
          if (((r = l(r)), e instanceof p)) {
            if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease) return e;
            e = e.version;
          } else if ("string" != typeof e) throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
          if (e.length > n) throw new TypeError(`version is longer than ${n} characters`);
          s("SemVer", e, r), (this.options = r), (this.loose = !!r.loose), (this.includePrerelease = !!r.includePrerelease);
          const t = e.trim().match(r.loose ? i[a.LOOSE] : i[a.FULL]);
          if (!t) throw new TypeError(`Invalid Version: ${e}`);
          if (((this.raw = e), (this.major = +t[1]), (this.minor = +t[2]), (this.patch = +t[3]), this.major > o || this.major < 0))
            throw new TypeError("Invalid major version");
          if (this.minor > o || this.minor < 0) throw new TypeError("Invalid minor version");
          if (this.patch > o || this.patch < 0) throw new TypeError("Invalid patch version");
          t[4]
            ? (this.prerelease = t[4].split(".").map((e) => {
                if (/^[0-9]+$/.test(e)) {
                  const r = +e;
                  if (r >= 0 && r < o) return r;
                }
                return e;
              }))
            : (this.prerelease = []),
            (this.build = t[5] ? t[5].split(".") : []),
            this.format();
        }
        format() {
          return (
            (this.version = `${this.major}.${this.minor}.${this.patch}`),
            this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`),
            this.version
          );
        }
        toString() {
          return this.version;
        }
        compare(e) {
          if ((s("SemVer.compare", this.version, this.options, e), !(e instanceof p))) {
            if ("string" == typeof e && e === this.version) return 0;
            e = new p(e, this.options);
          }
          return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
        }
        compareMain(e) {
          return e instanceof p || (e = new p(e, this.options)), c(this.major, e.major) || c(this.minor, e.minor) || c(this.patch, e.patch);
        }
        comparePre(e) {
          if ((e instanceof p || (e = new p(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
          if (!this.prerelease.length && e.prerelease.length) return 1;
          if (!this.prerelease.length && !e.prerelease.length) return 0;
          let r = 0;
          do {
            const t = this.prerelease[r],
              n = e.prerelease[r];
            if ((s("prerelease compare", r, t, n), void 0 === t && void 0 === n)) return 0;
            if (void 0 === n) return 1;
            if (void 0 === t) return -1;
            if (t !== n) return c(t, n);
          } while (++r);
        }
        compareBuild(e) {
          e instanceof p || (e = new p(e, this.options));
          let r = 0;
          do {
            const t = this.build[r],
              n = e.build[r];
            if ((s("build compare", r, t, n), void 0 === t && void 0 === n)) return 0;
            if (void 0 === n) return 1;
            if (void 0 === t) return -1;
            if (t !== n) return c(t, n);
          } while (++r);
        }
        inc(e, r, t) {
          switch (e) {
            case "premajor":
              (this.prerelease.length = 0), (this.patch = 0), (this.minor = 0), this.major++, this.inc("pre", r, t);
              break;
            case "preminor":
              (this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc("pre", r, t);
              break;
            case "prepatch":
              (this.prerelease.length = 0), this.inc("patch", r, t), this.inc("pre", r, t);
              break;
            case "prerelease":
              0 === this.prerelease.length && this.inc("patch", r, t), this.inc("pre", r, t);
              break;
            case "major":
              (0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length) || this.major++,
                (this.minor = 0),
                (this.patch = 0),
                (this.prerelease = []);
              break;
            case "minor":
              (0 === this.patch && 0 !== this.prerelease.length) || this.minor++, (this.patch = 0), (this.prerelease = []);
              break;
            case "patch":
              0 === this.prerelease.length && this.patch++, (this.prerelease = []);
              break;
            case "pre": {
              const e = Number(t) ? 1 : 0;
              if (!r && !1 === t) throw new Error("invalid increment argument: identifier is empty");
              if (0 === this.prerelease.length) this.prerelease = [e];
              else {
                let s = this.prerelease.length;
                for (; --s >= 0; ) "number" == typeof this.prerelease[s] && (this.prerelease[s]++, (s = -2));
                if (-1 === s) {
                  if (r === this.prerelease.join(".") && !1 === t) throw new Error("invalid increment argument: identifier already exists");
                  this.prerelease.push(e);
                }
              }
              if (r) {
                let s = [r, e];
                !1 === t && (s = [r]), 0 === c(this.prerelease[0], r) ? isNaN(this.prerelease[1]) && (this.prerelease = s) : (this.prerelease = s);
              }
              break;
            }
            default:
              throw new Error(`invalid increment argument: ${e}`);
          }
          return (this.raw = this.format()), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
        }
      }
      e.exports = p;
    },
    2281: (e, r, t) => {
      const s = t(3955);
      e.exports = (e, r) => {
        const t = s(e.trim().replace(/^[=v]+/, ""), r);
        return t ? t.version : null;
      };
    },
    4004: (e, r, t) => {
      const s = t(8848),
        n = t(8220),
        o = t(9761),
        i = t(2386),
        a = t(1262),
        l = t(9639);
      e.exports = (e, r, t, c) => {
        switch (r) {
          case "===":
            return "object" == typeof e && (e = e.version), "object" == typeof t && (t = t.version), e === t;
          case "!==":
            return "object" == typeof e && (e = e.version), "object" == typeof t && (t = t.version), e !== t;
          case "":
          case "=":
          case "==":
            return s(e, t, c);
          case "!=":
            return n(e, t, c);
          case ">":
            return o(e, t, c);
          case ">=":
            return i(e, t, c);
          case "<":
            return a(e, t, c);
          case "<=":
            return l(e, t, c);
          default:
            throw new TypeError(`Invalid operator: ${r}`);
        }
      };
    },
    6783: (e, r, t) => {
      const s = t(4517),
        n = t(3955),
        { safeRe: o, t: i } = t(2841);
      e.exports = (e, r) => {
        if (e instanceof s) return e;
        if (("number" == typeof e && (e = String(e)), "string" != typeof e)) return null;
        let t = null;
        if ((r = r || {}).rtl) {
          const s = r.includePrerelease ? o[i.COERCERTLFULL] : o[i.COERCERTL];
          let n;
          for (; (n = s.exec(e)) && (!t || t.index + t[0].length !== e.length); )
            (t && n.index + n[0].length === t.index + t[0].length) || (t = n), (s.lastIndex = n.index + n[1].length + n[2].length);
          s.lastIndex = -1;
        } else t = e.match(r.includePrerelease ? o[i.COERCEFULL] : o[i.COERCE]);
        if (null === t) return null;
        const a = t[2],
          l = t[3] || "0",
          c = t[4] || "0",
          p = r.includePrerelease && t[5] ? `-${t[5]}` : "",
          h = r.includePrerelease && t[6] ? `+${t[6]}` : "";
        return n(`${a}.${l}.${c}${p}${h}`, r);
      };
    },
    6106: (e, r, t) => {
      const s = t(4517);
      e.exports = (e, r, t) => {
        const n = new s(e, t),
          o = new s(r, t);
        return n.compare(o) || n.compareBuild(o);
      };
    },
    2132: (e, r, t) => {
      const s = t(7851);
      e.exports = (e, r) => s(e, r, !0);
    },
    7851: (e, r, t) => {
      const s = t(4517);
      e.exports = (e, r, t) => new s(e, t).compare(new s(r, t));
    },
    3269: (e, r, t) => {
      const s = t(3955);
      e.exports = (e, r) => {
        const t = s(e, null, !0),
          n = s(r, null, !0),
          o = t.compare(n);
        if (0 === o) return null;
        const i = o > 0,
          a = i ? t : n,
          l = i ? n : t,
          c = !!a.prerelease.length;
        if (l.prerelease.length && !c) return l.patch || l.minor ? (a.patch ? "patch" : a.minor ? "minor" : "major") : "major";
        const p = c ? "pre" : "";
        return t.major !== n.major ? p + "major" : t.minor !== n.minor ? p + "minor" : t.patch !== n.patch ? p + "patch" : "prerelease";
      };
    },
    8848: (e, r, t) => {
      const s = t(7851);
      e.exports = (e, r, t) => 0 === s(e, r, t);
    },
    9761: (e, r, t) => {
      const s = t(7851);
      e.exports = (e, r, t) => s(e, r, t) > 0;
    },
    2386: (e, r, t) => {
      const s = t(7851);
      e.exports = (e, r, t) => s(e, r, t) >= 0;
    },
    8868: (e, r, t) => {
      const s = t(4517);
      e.exports = (e, r, t, n, o) => {
        "string" == typeof t && ((o = n), (n = t), (t = void 0));
        try {
          return new s(e instanceof s ? e.version : e, t).inc(r, n, o).version;
        } catch (e) {
          return null;
        }
      };
    },
    1262: (e, r, t) => {
      const s = t(7851);
      e.exports = (e, r, t) => s(e, r, t) < 0;
    },
    9639: (e, r, t) => {
      const s = t(7851);
      e.exports = (e, r, t) => s(e, r, t) <= 0;
    },
    6381: (e, r, t) => {
      const s = t(4517);
      e.exports = (e, r) => new s(e, r).major;
    },
    1353: (e, r, t) => {
      const s = t(4517);
      e.exports = (e, r) => new s(e, r).minor;
    },
    8220: (e, r, t) => {
      const s = t(7851);
      e.exports = (e, r, t) => 0 !== s(e, r, t);
    },
    3955: (e, r, t) => {
      const s = t(4517);
      e.exports = (e, r, t = !1) => {
        if (e instanceof s) return e;
        try {
          return new s(e, r);
        } catch (e) {
          if (!t) return null;
          throw e;
        }
      };
    },
    6082: (e, r, t) => {
      const s = t(4517);
      e.exports = (e, r) => new s(e, r).patch;
    },
    9428: (e, r, t) => {
      const s = t(3955);
      e.exports = (e, r) => {
        const t = s(e, r);
        return t && t.prerelease.length ? t.prerelease : null;
      };
    },
    7555: (e, r, t) => {
      const s = t(7851);
      e.exports = (e, r, t) => s(r, e, t);
    },
    3810: (e, r, t) => {
      const s = t(6106);
      e.exports = (e, r) => e.sort((e, t) => s(t, e, r));
    },
    7229: (e, r, t) => {
      const s = t(7476);
      e.exports = (e, r, t) => {
        try {
          r = new s(r, t);
        } catch (e) {
          return !1;
        }
        return r.test(e);
      };
    },
    4042: (e, r, t) => {
      const s = t(6106);
      e.exports = (e, r) => e.sort((e, t) => s(e, t, r));
    },
    8474: (e, r, t) => {
      const s = t(3955);
      e.exports = (e, r) => {
        const t = s(e, r);
        return t ? t.version : null;
      };
    },
    2722: (e, r, t) => {
      const s = t(2841),
        n = t(9543),
        o = t(4517),
        i = t(3806),
        a = t(3955),
        l = t(8474),
        c = t(2281),
        p = t(8868),
        h = t(3269),
        E = t(6381),
        u = t(1353),
        m = t(6082),
        f = t(9428),
        $ = t(7851),
        R = t(7555),
        I = t(2132),
        L = t(6106),
        N = t(4042),
        v = t(3810),
        O = t(9761),
        T = t(1262),
        d = t(8848),
        A = t(8220),
        g = t(2386),
        w = t(9639),
        S = t(4004),
        P = t(6783),
        C = t(1565),
        x = t(7476),
        y = t(7229),
        D = t(6364),
        G = t(5039),
        M = t(5357),
        j = t(1280),
        F = t(7403),
        b = t(8854),
        _ = t(7226),
        U = t(7183),
        X = t(8623),
        k = t(6486),
        V = t(583);
      e.exports = {
        parse: a,
        valid: l,
        clean: c,
        inc: p,
        diff: h,
        major: E,
        minor: u,
        patch: m,
        prerelease: f,
        compare: $,
        rcompare: R,
        compareLoose: I,
        compareBuild: L,
        sort: N,
        rsort: v,
        gt: O,
        lt: T,
        eq: d,
        neq: A,
        gte: g,
        lte: w,
        cmp: S,
        coerce: P,
        Comparator: C,
        Range: x,
        satisfies: y,
        toComparators: D,
        maxSatisfying: G,
        minSatisfying: M,
        minVersion: j,
        validRange: F,
        outside: b,
        gtr: _,
        ltr: U,
        intersects: X,
        simplifyRange: k,
        subset: V,
        SemVer: o,
        re: s.re,
        src: s.src,
        tokens: s.t,
        SEMVER_SPEC_VERSION: n.SEMVER_SPEC_VERSION,
        RELEASE_TYPES: n.RELEASE_TYPES,
        compareIdentifiers: i.compareIdentifiers,
        rcompareIdentifiers: i.rcompareIdentifiers,
      };
    },
    9543: (e) => {
      const r = Number.MAX_SAFE_INTEGER || 9007199254740991;
      e.exports = {
        MAX_LENGTH: 256,
        MAX_SAFE_COMPONENT_LENGTH: 16,
        MAX_SAFE_BUILD_LENGTH: 250,
        MAX_SAFE_INTEGER: r,
        RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"],
        SEMVER_SPEC_VERSION: "2.0.0",
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2,
      };
    },
    1361: (e, r, t) => {
      var s = t(9907);
      const n =
        "object" == typeof s && s.env && s.env.NODE_DEBUG && /\bsemver\b/i.test(s.env.NODE_DEBUG)
          ? (...e) => console.error("SEMVER", ...e)
          : () => {};
      e.exports = n;
    },
    3806: (e) => {
      const r = /^[0-9]+$/,
        t = (e, t) => {
          const s = r.test(e),
            n = r.test(t);
          return s && n && ((e = +e), (t = +t)), e === t ? 0 : s && !n ? -1 : n && !s ? 1 : e < t ? -1 : 1;
        };
      e.exports = { compareIdentifiers: t, rcompareIdentifiers: (e, r) => t(r, e) };
    },
    8953: (e) => {
      e.exports = class {
        constructor() {
          (this.max = 1e3), (this.map = new Map());
        }
        get(e) {
          const r = this.map.get(e);
          return void 0 === r ? void 0 : (this.map.delete(e), this.map.set(e, r), r);
        }
        delete(e) {
          return this.map.delete(e);
        }
        set(e, r) {
          if (!this.delete(e) && void 0 !== r) {
            if (this.map.size >= this.max) {
              const e = this.map.keys().next().value;
              this.delete(e);
            }
            this.map.set(e, r);
          }
          return this;
        }
      };
    },
    3990: (e) => {
      const r = Object.freeze({ loose: !0 }),
        t = Object.freeze({});
      e.exports = (e) => (e ? ("object" != typeof e ? r : e) : t);
    },
    2841: (e, r, t) => {
      const { MAX_SAFE_COMPONENT_LENGTH: s, MAX_SAFE_BUILD_LENGTH: n, MAX_LENGTH: o } = t(9543),
        i = t(1361),
        a = ((r = e.exports = {}).re = []),
        l = (r.safeRe = []),
        c = (r.src = []),
        p = (r.t = {});
      let h = 0;
      const E = "[a-zA-Z0-9-]",
        u = [
          ["\\s", 1],
          ["\\d", o],
          [E, n],
        ],
        m = (e, r, t) => {
          const s = ((e) => {
              for (const [r, t] of u) e = e.split(`${r}*`).join(`${r}{0,${t}}`).split(`${r}+`).join(`${r}{1,${t}}`);
              return e;
            })(r),
            n = h++;
          i(e, n, r), (p[e] = n), (c[n] = r), (a[n] = new RegExp(r, t ? "g" : void 0)), (l[n] = new RegExp(s, t ? "g" : void 0));
        };
      m("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
        m("NUMERICIDENTIFIERLOOSE", "\\d+"),
        m("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${E}*`),
        m("MAINVERSION", `(${c[p.NUMERICIDENTIFIER]})\\.(${c[p.NUMERICIDENTIFIER]})\\.(${c[p.NUMERICIDENTIFIER]})`),
        m("MAINVERSIONLOOSE", `(${c[p.NUMERICIDENTIFIERLOOSE]})\\.(${c[p.NUMERICIDENTIFIERLOOSE]})\\.(${c[p.NUMERICIDENTIFIERLOOSE]})`),
        m("PRERELEASEIDENTIFIER", `(?:${c[p.NUMERICIDENTIFIER]}|${c[p.NONNUMERICIDENTIFIER]})`),
        m("PRERELEASEIDENTIFIERLOOSE", `(?:${c[p.NUMERICIDENTIFIERLOOSE]}|${c[p.NONNUMERICIDENTIFIER]})`),
        m("PRERELEASE", `(?:-(${c[p.PRERELEASEIDENTIFIER]}(?:\\.${c[p.PRERELEASEIDENTIFIER]})*))`),
        m("PRERELEASELOOSE", `(?:-?(${c[p.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[p.PRERELEASEIDENTIFIERLOOSE]})*))`),
        m("BUILDIDENTIFIER", `${E}+`),
        m("BUILD", `(?:\\+(${c[p.BUILDIDENTIFIER]}(?:\\.${c[p.BUILDIDENTIFIER]})*))`),
        m("FULLPLAIN", `v?${c[p.MAINVERSION]}${c[p.PRERELEASE]}?${c[p.BUILD]}?`),
        m("FULL", `^${c[p.FULLPLAIN]}$`),
        m("LOOSEPLAIN", `[v=\\s]*${c[p.MAINVERSIONLOOSE]}${c[p.PRERELEASELOOSE]}?${c[p.BUILD]}?`),
        m("LOOSE", `^${c[p.LOOSEPLAIN]}$`),
        m("GTLT", "((?:<|>)?=?)"),
        m("XRANGEIDENTIFIERLOOSE", `${c[p.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
        m("XRANGEIDENTIFIER", `${c[p.NUMERICIDENTIFIER]}|x|X|\\*`),
        m(
          "XRANGEPLAIN",
          `[v=\\s]*(${c[p.XRANGEIDENTIFIER]})(?:\\.(${c[p.XRANGEIDENTIFIER]})(?:\\.(${c[p.XRANGEIDENTIFIER]})(?:${c[p.PRERELEASE]})?${c[p.BUILD]}?)?)?`
        ),
        m(
          "XRANGEPLAINLOOSE",
          `[v=\\s]*(${c[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[p.XRANGEIDENTIFIERLOOSE]})(?:${c[p.PRERELEASELOOSE]})?${c[p.BUILD]}?)?)?`
        ),
        m("XRANGE", `^${c[p.GTLT]}\\s*${c[p.XRANGEPLAIN]}$`),
        m("XRANGELOOSE", `^${c[p.GTLT]}\\s*${c[p.XRANGEPLAINLOOSE]}$`),
        m("COERCEPLAIN", `(^|[^\\d])(\\d{1,${s}})(?:\\.(\\d{1,${s}}))?(?:\\.(\\d{1,${s}}))?`),
        m("COERCE", `${c[p.COERCEPLAIN]}(?:$|[^\\d])`),
        m("COERCEFULL", c[p.COERCEPLAIN] + `(?:${c[p.PRERELEASE]})?` + `(?:${c[p.BUILD]})?(?:$|[^\\d])`),
        m("COERCERTL", c[p.COERCE], !0),
        m("COERCERTLFULL", c[p.COERCEFULL], !0),
        m("LONETILDE", "(?:~>?)"),
        m("TILDETRIM", `(\\s*)${c[p.LONETILDE]}\\s+`, !0),
        (r.tildeTrimReplace = "$1~"),
        m("TILDE", `^${c[p.LONETILDE]}${c[p.XRANGEPLAIN]}$`),
        m("TILDELOOSE", `^${c[p.LONETILDE]}${c[p.XRANGEPLAINLOOSE]}$`),
        m("LONECARET", "(?:\\^)"),
        m("CARETTRIM", `(\\s*)${c[p.LONECARET]}\\s+`, !0),
        (r.caretTrimReplace = "$1^"),
        m("CARET", `^${c[p.LONECARET]}${c[p.XRANGEPLAIN]}$`),
        m("CARETLOOSE", `^${c[p.LONECARET]}${c[p.XRANGEPLAINLOOSE]}$`),
        m("COMPARATORLOOSE", `^${c[p.GTLT]}\\s*(${c[p.LOOSEPLAIN]})$|^$`),
        m("COMPARATOR", `^${c[p.GTLT]}\\s*(${c[p.FULLPLAIN]})$|^$`),
        m("COMPARATORTRIM", `(\\s*)${c[p.GTLT]}\\s*(${c[p.LOOSEPLAIN]}|${c[p.XRANGEPLAIN]})`, !0),
        (r.comparatorTrimReplace = "$1$2$3"),
        m("HYPHENRANGE", `^\\s*(${c[p.XRANGEPLAIN]})\\s+-\\s+(${c[p.XRANGEPLAIN]})\\s*$`),
        m("HYPHENRANGELOOSE", `^\\s*(${c[p.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[p.XRANGEPLAINLOOSE]})\\s*$`),
        m("STAR", "(<|>)?=?\\s*\\*"),
        m("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
        m("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
    },
    7226: (e, r, t) => {
      const s = t(8854);
      e.exports = (e, r, t) => s(e, r, ">", t);
    },
    8623: (e, r, t) => {
      const s = t(7476);
      e.exports = (e, r, t) => ((e = new s(e, t)), (r = new s(r, t)), e.intersects(r, t));
    },
    7183: (e, r, t) => {
      const s = t(8854);
      e.exports = (e, r, t) => s(e, r, "<", t);
    },
    5039: (e, r, t) => {
      const s = t(4517),
        n = t(7476);
      e.exports = (e, r, t) => {
        let o = null,
          i = null,
          a = null;
        try {
          a = new n(r, t);
        } catch (e) {
          return null;
        }
        return (
          e.forEach((e) => {
            a.test(e) && ((o && -1 !== i.compare(e)) || ((o = e), (i = new s(o, t))));
          }),
          o
        );
      };
    },
    5357: (e, r, t) => {
      const s = t(4517),
        n = t(7476);
      e.exports = (e, r, t) => {
        let o = null,
          i = null,
          a = null;
        try {
          a = new n(r, t);
        } catch (e) {
          return null;
        }
        return (
          e.forEach((e) => {
            a.test(e) && ((o && 1 !== i.compare(e)) || ((o = e), (i = new s(o, t))));
          }),
          o
        );
      };
    },
    1280: (e, r, t) => {
      const s = t(4517),
        n = t(7476),
        o = t(9761);
      e.exports = (e, r) => {
        e = new n(e, r);
        let t = new s("0.0.0");
        if (e.test(t)) return t;
        if (((t = new s("0.0.0-0")), e.test(t))) return t;
        t = null;
        for (let r = 0; r < e.set.length; ++r) {
          const n = e.set[r];
          let i = null;
          n.forEach((e) => {
            const r = new s(e.semver.version);
            switch (e.operator) {
              case ">":
                0 === r.prerelease.length ? r.patch++ : r.prerelease.push(0), (r.raw = r.format());
              case "":
              case ">=":
                (i && !o(r, i)) || (i = r);
                break;
              case "<":
              case "<=":
                break;
              default:
                throw new Error(`Unexpected operation: ${e.operator}`);
            }
          }),
            !i || (t && !o(t, i)) || (t = i);
        }
        return t && e.test(t) ? t : null;
      };
    },
    8854: (e, r, t) => {
      const s = t(4517),
        n = t(1565),
        { ANY: o } = n,
        i = t(7476),
        a = t(7229),
        l = t(9761),
        c = t(1262),
        p = t(9639),
        h = t(2386);
      e.exports = (e, r, t, E) => {
        let u, m, f, $, R;
        switch (((e = new s(e, E)), (r = new i(r, E)), t)) {
          case ">":
            (u = l), (m = p), (f = c), ($ = ">"), (R = ">=");
            break;
          case "<":
            (u = c), (m = h), (f = l), ($ = "<"), (R = "<=");
            break;
          default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (a(e, r, E)) return !1;
        for (let t = 0; t < r.set.length; ++t) {
          const s = r.set[t];
          let i = null,
            a = null;
          if (
            (s.forEach((e) => {
              e.semver === o && (e = new n(">=0.0.0")),
                (i = i || e),
                (a = a || e),
                u(e.semver, i.semver, E) ? (i = e) : f(e.semver, a.semver, E) && (a = e);
            }),
            i.operator === $ || i.operator === R)
          )
            return !1;
          if ((!a.operator || a.operator === $) && m(e, a.semver)) return !1;
          if (a.operator === R && f(e, a.semver)) return !1;
        }
        return !0;
      };
    },
    6486: (e, r, t) => {
      const s = t(7229),
        n = t(7851);
      e.exports = (e, r, t) => {
        const o = [];
        let i = null,
          a = null;
        const l = e.sort((e, r) => n(e, r, t));
        for (const e of l) s(e, r, t) ? ((a = e), i || (i = e)) : (a && o.push([i, a]), (a = null), (i = null));
        i && o.push([i, null]);
        const c = [];
        for (const [e, r] of o)
          e === r ? c.push(e) : r || e !== l[0] ? (r ? (e === l[0] ? c.push(`<=${r}`) : c.push(`${e} - ${r}`)) : c.push(`>=${e}`)) : c.push("*");
        const p = c.join(" || "),
          h = "string" == typeof r.raw ? r.raw : String(r);
        return p.length < h.length ? p : r;
      };
    },
    583: (e, r, t) => {
      const s = t(7476),
        n = t(1565),
        { ANY: o } = n,
        i = t(7229),
        a = t(7851),
        l = [new n(">=0.0.0-0")],
        c = [new n(">=0.0.0")],
        p = (e, r, t) => {
          if (e === r) return !0;
          if (1 === e.length && e[0].semver === o) {
            if (1 === r.length && r[0].semver === o) return !0;
            e = t.includePrerelease ? l : c;
          }
          if (1 === r.length && r[0].semver === o) {
            if (t.includePrerelease) return !0;
            r = c;
          }
          const s = new Set();
          let n, p, u, m, f, $, R;
          for (const r of e)
            ">" === r.operator || ">=" === r.operator
              ? (n = h(n, r, t))
              : "<" === r.operator || "<=" === r.operator
                ? (p = E(p, r, t))
                : s.add(r.semver);
          if (s.size > 1) return null;
          if (n && p) {
            if (((u = a(n.semver, p.semver, t)), u > 0)) return null;
            if (0 === u && (">=" !== n.operator || "<=" !== p.operator)) return null;
          }
          for (const e of s) {
            if (n && !i(e, String(n), t)) return null;
            if (p && !i(e, String(p), t)) return null;
            for (const s of r) if (!i(e, String(s), t)) return !1;
            return !0;
          }
          let I = !(!p || t.includePrerelease || !p.semver.prerelease.length) && p.semver,
            L = !(!n || t.includePrerelease || !n.semver.prerelease.length) && n.semver;
          I && 1 === I.prerelease.length && "<" === p.operator && 0 === I.prerelease[0] && (I = !1);
          for (const e of r) {
            if (((R = R || ">" === e.operator || ">=" === e.operator), ($ = $ || "<" === e.operator || "<=" === e.operator), n))
              if (
                (L &&
                  e.semver.prerelease &&
                  e.semver.prerelease.length &&
                  e.semver.major === L.major &&
                  e.semver.minor === L.minor &&
                  e.semver.patch === L.patch &&
                  (L = !1),
                ">" === e.operator || ">=" === e.operator)
              ) {
                if (((m = h(n, e, t)), m === e && m !== n)) return !1;
              } else if (">=" === n.operator && !i(n.semver, String(e), t)) return !1;
            if (p)
              if (
                (I &&
                  e.semver.prerelease &&
                  e.semver.prerelease.length &&
                  e.semver.major === I.major &&
                  e.semver.minor === I.minor &&
                  e.semver.patch === I.patch &&
                  (I = !1),
                "<" === e.operator || "<=" === e.operator)
              ) {
                if (((f = E(p, e, t)), f === e && f !== p)) return !1;
              } else if ("<=" === p.operator && !i(p.semver, String(e), t)) return !1;
            if (!e.operator && (p || n) && 0 !== u) return !1;
          }
          return !((n && $ && !p && 0 !== u) || (p && R && !n && 0 !== u) || L || I);
        },
        h = (e, r, t) => {
          if (!e) return r;
          const s = a(e.semver, r.semver, t);
          return s > 0 ? e : s < 0 || (">" === r.operator && ">=" === e.operator) ? r : e;
        },
        E = (e, r, t) => {
          if (!e) return r;
          const s = a(e.semver, r.semver, t);
          return s < 0 ? e : s > 0 || ("<" === r.operator && "<=" === e.operator) ? r : e;
        };
      e.exports = (e, r, t = {}) => {
        if (e === r) return !0;
        (e = new s(e, t)), (r = new s(r, t));
        let n = !1;
        e: for (const s of e.set) {
          for (const e of r.set) {
            const r = p(s, e, t);
            if (((n = n || null !== r), r)) continue e;
          }
          if (n) return !1;
        }
        return !0;
      };
    },
    6364: (e, r, t) => {
      const s = t(7476);
      e.exports = (e, r) =>
        new s(e, r).set.map((e) =>
          e
            .map((e) => e.value)
            .join(" ")
            .trim()
            .split(" ")
        );
    },
    7403: (e, r, t) => {
      const s = t(7476);
      e.exports = (e, r) => {
        try {
          return new s(e, r).range || "*";
        } catch (e) {
          return null;
        }
      };
    },
  },
]);
