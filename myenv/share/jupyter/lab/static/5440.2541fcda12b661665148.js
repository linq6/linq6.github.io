(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [5440, 4155],
  {
    96562: (e) => {
      "use strict";
      function t(e, t) {
        var r = e;
        t.slice(0, -1).forEach(function (e) {
          r = r[e] || {};
        });
        var n = t[t.length - 1];
        return n in r;
      }
      function r(e) {
        if (typeof e === "number") {
          return true;
        }
        if (/^0x[0-9a-f]+$/i.test(e)) {
          return true;
        }
        return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e);
      }
      function n(e, t) {
        return (t === "constructor" && typeof e[t] === "function") || t === "__proto__";
      }
      e.exports = function (e, o) {
        if (!o) {
          o = {};
        }
        var i = { bools: {}, strings: {}, unknownFn: null };
        if (typeof o.unknown === "function") {
          i.unknownFn = o.unknown;
        }
        if (typeof o.boolean === "boolean" && o.boolean) {
          i.allBools = true;
        } else {
          []
            .concat(o.boolean)
            .filter(Boolean)
            .forEach(function (e) {
              i.bools[e] = true;
            });
        }
        var s = {};
        function a(e) {
          return s[e].some(function (e) {
            return i.bools[e];
          });
        }
        Object.keys(o.alias || {}).forEach(function (e) {
          s[e] = [].concat(o.alias[e]);
          s[e].forEach(function (t) {
            s[t] = [e].concat(
              s[e].filter(function (e) {
                return t !== e;
              })
            );
          });
        });
        []
          .concat(o.string)
          .filter(Boolean)
          .forEach(function (e) {
            i.strings[e] = true;
            if (s[e]) {
              [].concat(s[e]).forEach(function (e) {
                i.strings[e] = true;
              });
            }
          });
        var f = o.default || {};
        var l = { _: [] };
        function u(e, t) {
          return (i.allBools && /^--[^=]+$/.test(t)) || i.strings[e] || i.bools[e] || s[e];
        }
        function c(e, t, r) {
          var o = e;
          for (var s = 0; s < t.length - 1; s++) {
            var a = t[s];
            if (n(o, a)) {
              return;
            }
            if (o[a] === undefined) {
              o[a] = {};
            }
            if (o[a] === Object.prototype || o[a] === Number.prototype || o[a] === String.prototype) {
              o[a] = {};
            }
            if (o[a] === Array.prototype) {
              o[a] = [];
            }
            o = o[a];
          }
          var f = t[t.length - 1];
          if (n(o, f)) {
            return;
          }
          if (o === Object.prototype || o === Number.prototype || o === String.prototype) {
            o = {};
          }
          if (o === Array.prototype) {
            o = [];
          }
          if (o[f] === undefined || i.bools[f] || typeof o[f] === "boolean") {
            o[f] = r;
          } else if (Array.isArray(o[f])) {
            o[f].push(r);
          } else {
            o[f] = [o[f], r];
          }
        }
        function h(e, t, n) {
          if (n && i.unknownFn && !u(e, n)) {
            if (i.unknownFn(n) === false) {
              return;
            }
          }
          var o = !i.strings[e] && r(t) ? Number(t) : t;
          c(l, e.split("."), o);
          (s[e] || []).forEach(function (e) {
            c(l, e.split("."), o);
          });
        }
        Object.keys(i.bools).forEach(function (e) {
          h(e, f[e] === undefined ? false : f[e]);
        });
        var p = [];
        if (e.indexOf("--") !== -1) {
          p = e.slice(e.indexOf("--") + 1);
          e = e.slice(0, e.indexOf("--"));
        }
        for (var d = 0; d < e.length; d++) {
          var v = e[d];
          var g;
          var m;
          if (/^--.+=/.test(v)) {
            var b = v.match(/^--([^=]+)=([\s\S]*)$/);
            g = b[1];
            var y = b[2];
            if (i.bools[g]) {
              y = y !== "false";
            }
            h(g, y, v);
          } else if (/^--no-.+/.test(v)) {
            g = v.match(/^--no-(.+)/)[1];
            h(g, false, v);
          } else if (/^--.+/.test(v)) {
            g = v.match(/^--(.+)/)[1];
            m = e[d + 1];
            if (m !== undefined && !/^(-|--)[^-]/.test(m) && !i.bools[g] && !i.allBools && (s[g] ? !a(g) : true)) {
              h(g, m, v);
              d += 1;
            } else if (/^(true|false)$/.test(m)) {
              h(g, m === "true", v);
              d += 1;
            } else {
              h(g, i.strings[g] ? "" : true, v);
            }
          } else if (/^-[^-]+/.test(v)) {
            var w = v.slice(1, -1).split("");
            var C = false;
            for (var A = 0; A < w.length; A++) {
              m = v.slice(A + 2);
              if (m === "-") {
                h(w[A], m, v);
                continue;
              }
              if (/[A-Za-z]/.test(w[A]) && m[0] === "=") {
                h(w[A], m.slice(1), v);
                C = true;
                break;
              }
              if (/[A-Za-z]/.test(w[A]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(m)) {
                h(w[A], m, v);
                C = true;
                break;
              }
              if (w[A + 1] && w[A + 1].match(/\W/)) {
                h(w[A], v.slice(A + 2), v);
                C = true;
                break;
              } else {
                h(w[A], i.strings[w[A]] ? "" : true, v);
              }
            }
            g = v.slice(-1)[0];
            if (!C && g !== "-") {
              if (e[d + 1] && !/^(-|--)[^-]/.test(e[d + 1]) && !i.bools[g] && (s[g] ? !a(g) : true)) {
                h(g, e[d + 1], v);
                d += 1;
              } else if (e[d + 1] && /^(true|false)$/.test(e[d + 1])) {
                h(g, e[d + 1] === "true", v);
                d += 1;
              } else {
                h(g, i.strings[g] ? "" : true, v);
              }
            }
          } else {
            if (!i.unknownFn || i.unknownFn(v) !== false) {
              l._.push(i.strings._ || !r(v) ? v : Number(v));
            }
            if (o.stopEarly) {
              l._.push.apply(l._, e.slice(d + 1));
              break;
            }
          }
        }
        Object.keys(f).forEach(function (e) {
          if (!t(l, e.split("."))) {
            c(l, e.split("."), f[e]);
            (s[e] || []).forEach(function (t) {
              c(l, t.split("."), f[e]);
            });
          }
        });
        if (o["--"]) {
          l["--"] = p.slice();
        } else {
          p.forEach(function (e) {
            l._.push(e);
          });
        }
        return l;
      };
    },
    26470: (e, t, r) => {
      "use strict";
      var n = r(34155);
      function o(e) {
        if (typeof e !== "string") {
          throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
        }
      }
      function i(e, t) {
        var r = "";
        var n = 0;
        var o = -1;
        var i = 0;
        var s;
        for (var a = 0; a <= e.length; ++a) {
          if (a < e.length) s = e.charCodeAt(a);
          else if (s === 47) break;
          else s = 47;
          if (s === 47) {
            if (o === a - 1 || i === 1) {
            } else if (o !== a - 1 && i === 2) {
              if (r.length < 2 || n !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
                if (r.length > 2) {
                  var f = r.lastIndexOf("/");
                  if (f !== r.length - 1) {
                    if (f === -1) {
                      r = "";
                      n = 0;
                    } else {
                      r = r.slice(0, f);
                      n = r.length - 1 - r.lastIndexOf("/");
                    }
                    o = a;
                    i = 0;
                    continue;
                  }
                } else if (r.length === 2 || r.length === 1) {
                  r = "";
                  n = 0;
                  o = a;
                  i = 0;
                  continue;
                }
              }
              if (t) {
                if (r.length > 0) r += "/..";
                else r = "..";
                n = 2;
              }
            } else {
              if (r.length > 0) r += "/" + e.slice(o + 1, a);
              else r = e.slice(o + 1, a);
              n = a - o - 1;
            }
            o = a;
            i = 0;
          } else if (s === 46 && i !== -1) {
            ++i;
          } else {
            i = -1;
          }
        }
        return r;
      }
      function s(e, t) {
        var r = t.dir || t.root;
        var n = t.base || (t.name || "") + (t.ext || "");
        if (!r) {
          return n;
        }
        if (r === t.root) {
          return r + n;
        }
        return r + e + n;
      }
      var a = {
        resolve: function e() {
          var t = "";
          var r = false;
          var s;
          for (var a = arguments.length - 1; a >= -1 && !r; a--) {
            var f;
            if (a >= 0) f = arguments[a];
            else {
              if (s === undefined) s = n.cwd();
              f = s;
            }
            o(f);
            if (f.length === 0) {
              continue;
            }
            t = f + "/" + t;
            r = f.charCodeAt(0) === 47;
          }
          t = i(t, !r);
          if (r) {
            if (t.length > 0) return "/" + t;
            else return "/";
          } else if (t.length > 0) {
            return t;
          } else {
            return ".";
          }
        },
        normalize: function e(t) {
          o(t);
          if (t.length === 0) return ".";
          var r = t.charCodeAt(0) === 47;
          var n = t.charCodeAt(t.length - 1) === 47;
          t = i(t, !r);
          if (t.length === 0 && !r) t = ".";
          if (t.length > 0 && n) t += "/";
          if (r) return "/" + t;
          return t;
        },
        isAbsolute: function e(t) {
          o(t);
          return t.length > 0 && t.charCodeAt(0) === 47;
        },
        join: function e() {
          if (arguments.length === 0) return ".";
          var t;
          for (var r = 0; r < arguments.length; ++r) {
            var n = arguments[r];
            o(n);
            if (n.length > 0) {
              if (t === undefined) t = n;
              else t += "/" + n;
            }
          }
          if (t === undefined) return ".";
          return a.normalize(t);
        },
        relative: function e(t, r) {
          o(t);
          o(r);
          if (t === r) return "";
          t = a.resolve(t);
          r = a.resolve(r);
          if (t === r) return "";
          var n = 1;
          for (; n < t.length; ++n) {
            if (t.charCodeAt(n) !== 47) break;
          }
          var i = t.length;
          var s = i - n;
          var f = 1;
          for (; f < r.length; ++f) {
            if (r.charCodeAt(f) !== 47) break;
          }
          var l = r.length;
          var u = l - f;
          var c = s < u ? s : u;
          var h = -1;
          var p = 0;
          for (; p <= c; ++p) {
            if (p === c) {
              if (u > c) {
                if (r.charCodeAt(f + p) === 47) {
                  return r.slice(f + p + 1);
                } else if (p === 0) {
                  return r.slice(f + p);
                }
              } else if (s > c) {
                if (t.charCodeAt(n + p) === 47) {
                  h = p;
                } else if (p === 0) {
                  h = 0;
                }
              }
              break;
            }
            var d = t.charCodeAt(n + p);
            var v = r.charCodeAt(f + p);
            if (d !== v) break;
            else if (d === 47) h = p;
          }
          var g = "";
          for (p = n + h + 1; p <= i; ++p) {
            if (p === i || t.charCodeAt(p) === 47) {
              if (g.length === 0) g += "..";
              else g += "/..";
            }
          }
          if (g.length > 0) return g + r.slice(f + h);
          else {
            f += h;
            if (r.charCodeAt(f) === 47) ++f;
            return r.slice(f);
          }
        },
        _makeLong: function e(t) {
          return t;
        },
        dirname: function e(t) {
          o(t);
          if (t.length === 0) return ".";
          var r = t.charCodeAt(0);
          var n = r === 47;
          var i = -1;
          var s = true;
          for (var a = t.length - 1; a >= 1; --a) {
            r = t.charCodeAt(a);
            if (r === 47) {
              if (!s) {
                i = a;
                break;
              }
            } else {
              s = false;
            }
          }
          if (i === -1) return n ? "/" : ".";
          if (n && i === 1) return "//";
          return t.slice(0, i);
        },
        basename: function e(t, r) {
          if (r !== undefined && typeof r !== "string") throw new TypeError('"ext" argument must be a string');
          o(t);
          var n = 0;
          var i = -1;
          var s = true;
          var a;
          if (r !== undefined && r.length > 0 && r.length <= t.length) {
            if (r.length === t.length && r === t) return "";
            var f = r.length - 1;
            var l = -1;
            for (a = t.length - 1; a >= 0; --a) {
              var u = t.charCodeAt(a);
              if (u === 47) {
                if (!s) {
                  n = a + 1;
                  break;
                }
              } else {
                if (l === -1) {
                  s = false;
                  l = a + 1;
                }
                if (f >= 0) {
                  if (u === r.charCodeAt(f)) {
                    if (--f === -1) {
                      i = a;
                    }
                  } else {
                    f = -1;
                    i = l;
                  }
                }
              }
            }
            if (n === i) i = l;
            else if (i === -1) i = t.length;
            return t.slice(n, i);
          } else {
            for (a = t.length - 1; a >= 0; --a) {
              if (t.charCodeAt(a) === 47) {
                if (!s) {
                  n = a + 1;
                  break;
                }
              } else if (i === -1) {
                s = false;
                i = a + 1;
              }
            }
            if (i === -1) return "";
            return t.slice(n, i);
          }
        },
        extname: function e(t) {
          o(t);
          var r = -1;
          var n = 0;
          var i = -1;
          var s = true;
          var a = 0;
          for (var f = t.length - 1; f >= 0; --f) {
            var l = t.charCodeAt(f);
            if (l === 47) {
              if (!s) {
                n = f + 1;
                break;
              }
              continue;
            }
            if (i === -1) {
              s = false;
              i = f + 1;
            }
            if (l === 46) {
              if (r === -1) r = f;
              else if (a !== 1) a = 1;
            } else if (r !== -1) {
              a = -1;
            }
          }
          if (r === -1 || i === -1 || a === 0 || (a === 1 && r === i - 1 && r === n + 1)) {
            return "";
          }
          return t.slice(r, i);
        },
        format: function e(t) {
          if (t === null || typeof t !== "object") {
            throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof t);
          }
          return s("/", t);
        },
        parse: function e(t) {
          o(t);
          var r = { root: "", dir: "", base: "", ext: "", name: "" };
          if (t.length === 0) return r;
          var n = t.charCodeAt(0);
          var i = n === 47;
          var s;
          if (i) {
            r.root = "/";
            s = 1;
          } else {
            s = 0;
          }
          var a = -1;
          var f = 0;
          var l = -1;
          var u = true;
          var c = t.length - 1;
          var h = 0;
          for (; c >= s; --c) {
            n = t.charCodeAt(c);
            if (n === 47) {
              if (!u) {
                f = c + 1;
                break;
              }
              continue;
            }
            if (l === -1) {
              u = false;
              l = c + 1;
            }
            if (n === 46) {
              if (a === -1) a = c;
              else if (h !== 1) h = 1;
            } else if (a !== -1) {
              h = -1;
            }
          }
          if (a === -1 || l === -1 || h === 0 || (h === 1 && a === l - 1 && a === f + 1)) {
            if (l !== -1) {
              if (f === 0 && i) r.base = r.name = t.slice(1, l);
              else r.base = r.name = t.slice(f, l);
            }
          } else {
            if (f === 0 && i) {
              r.name = t.slice(1, a);
              r.base = t.slice(1, l);
            } else {
              r.name = t.slice(f, a);
              r.base = t.slice(f, l);
            }
            r.ext = t.slice(a, l);
          }
          if (f > 0) r.dir = t.slice(0, f - 1);
          else if (i) r.dir = "/";
          return r;
        },
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null,
      };
      a.posix = a;
      e.exports = a;
    },
    34155: (e) => {
      var t = (e.exports = {});
      var r;
      var n;
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function i() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          if (typeof setTimeout === "function") {
            r = setTimeout;
          } else {
            r = o;
          }
        } catch (e) {
          r = o;
        }
        try {
          if (typeof clearTimeout === "function") {
            n = clearTimeout;
          } else {
            n = i;
          }
        } catch (e) {
          n = i;
        }
      })();
      function s(e) {
        if (r === setTimeout) {
          return setTimeout(e, 0);
        }
        if ((r === o || !r) && setTimeout) {
          r = setTimeout;
          return setTimeout(e, 0);
        }
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
      function a(e) {
        if (n === clearTimeout) {
          return clearTimeout(e);
        }
        if ((n === i || !n) && clearTimeout) {
          n = clearTimeout;
          return clearTimeout(e);
        }
        try {
          return n(e);
        } catch (t) {
          try {
            return n.call(null, e);
          } catch (t) {
            return n.call(this, e);
          }
        }
      }
      var f = [];
      var l = false;
      var u;
      var c = -1;
      function h() {
        if (!l || !u) {
          return;
        }
        l = false;
        if (u.length) {
          f = u.concat(f);
        } else {
          c = -1;
        }
        if (f.length) {
          p();
        }
      }
      function p() {
        if (l) {
          return;
        }
        var e = s(h);
        l = true;
        var t = f.length;
        while (t) {
          u = f;
          f = [];
          while (++c < t) {
            if (u) {
              u[c].run();
            }
          }
          c = -1;
          t = f.length;
        }
        u = null;
        l = false;
        a(e);
      }
      t.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var r = 1; r < arguments.length; r++) {
            t[r - 1] = arguments[r];
          }
        }
        f.push(new d(e, t));
        if (f.length === 1 && !l) {
          s(p);
        }
      };
      function d(e, t) {
        this.fun = e;
        this.array = t;
      }
      d.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      t.title = "browser";
      t.browser = true;
      t.env = {};
      t.argv = [];
      t.version = "";
      t.versions = {};
      function v() {}
      t.on = v;
      t.addListener = v;
      t.once = v;
      t.off = v;
      t.removeListener = v;
      t.removeAllListeners = v;
      t.emit = v;
      t.prependListener = v;
      t.prependOnceListener = v;
      t.listeners = function (e) {
        return [];
      };
      t.binding = function (e) {
        throw new Error("process.binding is not supported");
      };
      t.cwd = function () {
        return "/";
      };
      t.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      };
      t.umask = function () {
        return 0;
      };
    },
    57129: (e, t) => {
      "use strict";
      var r = Object.prototype.hasOwnProperty,
        n;
      function o(e) {
        try {
          return decodeURIComponent(e.replace(/\+/g, " "));
        } catch (t) {
          return null;
        }
      }
      function i(e) {
        try {
          return encodeURIComponent(e);
        } catch (t) {
          return null;
        }
      }
      function s(e) {
        var t = /([^=?#&]+)=?([^&]*)/g,
          r = {},
          n;
        while ((n = t.exec(e))) {
          var i = o(n[1]),
            s = o(n[2]);
          if (i === null || s === null || i in r) continue;
          r[i] = s;
        }
        return r;
      }
      function a(e, t) {
        t = t || "";
        var o = [],
          s,
          a;
        if ("string" !== typeof t) t = "?";
        for (a in e) {
          if (r.call(e, a)) {
            s = e[a];
            if (!s && (s === null || s === n || isNaN(s))) {
              s = "";
            }
            a = i(a);
            s = i(s);
            if (a === null || s === null) continue;
            o.push(a + "=" + s);
          }
        }
        return o.length ? t + o.join("&") : "";
      }
      t.stringify = a;
      t.parse = s;
    },
    47418: (e) => {
      "use strict";
      e.exports = function e(t, r) {
        r = r.split(":")[0];
        t = +t;
        if (!t) return false;
        switch (r) {
          case "http":
          case "ws":
            return t !== 80;
          case "https":
          case "wss":
            return t !== 443;
          case "ftp":
            return t !== 21;
          case "gopher":
            return t !== 70;
          case "file":
            return false;
        }
        return t !== 0;
      };
    },
    84564: (e, t, r) => {
      "use strict";
      var n = r(47418),
        o = r(57129),
        i = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
        s = /[\n\r\t]/g,
        a = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        f = /:\d+$/,
        l = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
        u = /^[a-zA-Z]:/;
      function c(e) {
        return (e ? e : "").toString().replace(i, "");
      }
      var h = [
        ["#", "hash"],
        ["?", "query"],
        function e(t, r) {
          return v(r.protocol) ? t.replace(/\\/g, "/") : t;
        },
        ["/", "pathname"],
        ["@", "auth", 1],
        [NaN, "host", undefined, 1, 1],
        [/:(\d*)$/, "port", undefined, 1],
        [NaN, "hostname", undefined, 1, 1],
      ];
      var p = { hash: 1, query: 1 };
      function d(e) {
        var t;
        if (typeof window !== "undefined") t = window;
        else if (typeof r.g !== "undefined") t = r.g;
        else if (typeof self !== "undefined") t = self;
        else t = {};
        var n = t.location || {};
        e = e || n;
        var o = {},
          i = typeof e,
          s;
        if ("blob:" === e.protocol) {
          o = new b(unescape(e.pathname), {});
        } else if ("string" === i) {
          o = new b(e, {});
          for (s in p) delete o[s];
        } else if ("object" === i) {
          for (s in e) {
            if (s in p) continue;
            o[s] = e[s];
          }
          if (o.slashes === undefined) {
            o.slashes = a.test(e.href);
          }
        }
        return o;
      }
      function v(e) {
        return e === "file:" || e === "ftp:" || e === "http:" || e === "https:" || e === "ws:" || e === "wss:";
      }
      function g(e, t) {
        e = c(e);
        e = e.replace(s, "");
        t = t || {};
        var r = l.exec(e);
        var n = r[1] ? r[1].toLowerCase() : "";
        var o = !!r[2];
        var i = !!r[3];
        var a = 0;
        var f;
        if (o) {
          if (i) {
            f = r[2] + r[3] + r[4];
            a = r[2].length + r[3].length;
          } else {
            f = r[2] + r[4];
            a = r[2].length;
          }
        } else {
          if (i) {
            f = r[3] + r[4];
            a = r[3].length;
          } else {
            f = r[4];
          }
        }
        if (n === "file:") {
          if (a >= 2) {
            f = f.slice(2);
          }
        } else if (v(n)) {
          f = r[4];
        } else if (n) {
          if (o) {
            f = f.slice(2);
          }
        } else if (a >= 2 && v(t.protocol)) {
          f = r[4];
        }
        return { protocol: n, slashes: o || v(n), slashesCount: a, rest: f };
      }
      function m(e, t) {
        if (e === "") return t;
        var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")),
          n = r.length,
          o = r[n - 1],
          i = false,
          s = 0;
        while (n--) {
          if (r[n] === ".") {
            r.splice(n, 1);
          } else if (r[n] === "..") {
            r.splice(n, 1);
            s++;
          } else if (s) {
            if (n === 0) i = true;
            r.splice(n, 1);
            s--;
          }
        }
        if (i) r.unshift("");
        if (o === "." || o === "..") r.push("");
        return r.join("/");
      }
      function b(e, t, r) {
        e = c(e);
        e = e.replace(s, "");
        if (!(this instanceof b)) {
          return new b(e, t, r);
        }
        var i,
          a,
          f,
          l,
          p,
          y,
          w = h.slice(),
          C = typeof t,
          A = this,
          k = 0;
        if ("object" !== C && "string" !== C) {
          r = t;
          t = null;
        }
        if (r && "function" !== typeof r) r = o.parse;
        t = d(t);
        a = g(e || "", t);
        i = !a.protocol && !a.slashes;
        A.slashes = a.slashes || (i && t.slashes);
        A.protocol = a.protocol || t.protocol || "";
        e = a.rest;
        if ((a.protocol === "file:" && (a.slashesCount !== 2 || u.test(e))) || (!a.slashes && (a.protocol || a.slashesCount < 2 || !v(A.protocol)))) {
          w[3] = [/(.*)/, "pathname"];
        }
        for (; k < w.length; k++) {
          l = w[k];
          if (typeof l === "function") {
            e = l(e, A);
            continue;
          }
          f = l[0];
          y = l[1];
          if (f !== f) {
            A[y] = e;
          } else if ("string" === typeof f) {
            p = f === "@" ? e.lastIndexOf(f) : e.indexOf(f);
            if (~p) {
              if ("number" === typeof l[2]) {
                A[y] = e.slice(0, p);
                e = e.slice(p + l[2]);
              } else {
                A[y] = e.slice(p);
                e = e.slice(0, p);
              }
            }
          } else if ((p = f.exec(e))) {
            A[y] = p[1];
            e = e.slice(0, p.index);
          }
          A[y] = A[y] || (i && l[3] ? t[y] || "" : "");
          if (l[4]) A[y] = A[y].toLowerCase();
        }
        if (r) A.query = r(A.query);
        if (i && t.slashes && A.pathname.charAt(0) !== "/" && (A.pathname !== "" || t.pathname !== "")) {
          A.pathname = m(A.pathname, t.pathname);
        }
        if (A.pathname.charAt(0) !== "/" && v(A.protocol)) {
          A.pathname = "/" + A.pathname;
        }
        if (!n(A.port, A.protocol)) {
          A.host = A.hostname;
          A.port = "";
        }
        A.username = A.password = "";
        if (A.auth) {
          p = A.auth.indexOf(":");
          if (~p) {
            A.username = A.auth.slice(0, p);
            A.username = encodeURIComponent(decodeURIComponent(A.username));
            A.password = A.auth.slice(p + 1);
            A.password = encodeURIComponent(decodeURIComponent(A.password));
          } else {
            A.username = encodeURIComponent(decodeURIComponent(A.auth));
          }
          A.auth = A.password ? A.username + ":" + A.password : A.username;
        }
        A.origin = A.protocol !== "file:" && v(A.protocol) && A.host ? A.protocol + "//" + A.host : "null";
        A.href = A.toString();
      }
      function y(e, t, r) {
        var i = this;
        switch (e) {
          case "query":
            if ("string" === typeof t && t.length) {
              t = (r || o.parse)(t);
            }
            i[e] = t;
            break;
          case "port":
            i[e] = t;
            if (!n(t, i.protocol)) {
              i.host = i.hostname;
              i[e] = "";
            } else if (t) {
              i.host = i.hostname + ":" + t;
            }
            break;
          case "hostname":
            i[e] = t;
            if (i.port) t += ":" + i.port;
            i.host = t;
            break;
          case "host":
            i[e] = t;
            if (f.test(t)) {
              t = t.split(":");
              i.port = t.pop();
              i.hostname = t.join(":");
            } else {
              i.hostname = t;
              i.port = "";
            }
            break;
          case "protocol":
            i.protocol = t.toLowerCase();
            i.slashes = !r;
            break;
          case "pathname":
          case "hash":
            if (t) {
              var s = e === "pathname" ? "/" : "#";
              i[e] = t.charAt(0) !== s ? s + t : t;
            } else {
              i[e] = t;
            }
            break;
          case "username":
          case "password":
            i[e] = encodeURIComponent(t);
            break;
          case "auth":
            var a = t.indexOf(":");
            if (~a) {
              i.username = t.slice(0, a);
              i.username = encodeURIComponent(decodeURIComponent(i.username));
              i.password = t.slice(a + 1);
              i.password = encodeURIComponent(decodeURIComponent(i.password));
            } else {
              i.username = encodeURIComponent(decodeURIComponent(t));
            }
        }
        for (var l = 0; l < h.length; l++) {
          var u = h[l];
          if (u[4]) i[u[1]] = i[u[1]].toLowerCase();
        }
        i.auth = i.password ? i.username + ":" + i.password : i.username;
        i.origin = i.protocol !== "file:" && v(i.protocol) && i.host ? i.protocol + "//" + i.host : "null";
        i.href = i.toString();
        return i;
      }
      function w(e) {
        if (!e || "function" !== typeof e) e = o.stringify;
        var t,
          r = this,
          n = r.host,
          i = r.protocol;
        if (i && i.charAt(i.length - 1) !== ":") i += ":";
        var s = i + ((r.protocol && r.slashes) || v(r.protocol) ? "//" : "");
        if (r.username) {
          s += r.username;
          if (r.password) s += ":" + r.password;
          s += "@";
        } else if (r.password) {
          s += ":" + r.password;
          s += "@";
        } else if (r.protocol !== "file:" && v(r.protocol) && !n && r.pathname !== "/") {
          s += "@";
        }
        if (n[n.length - 1] === ":" || (f.test(r.hostname) && !r.port)) {
          n += ":";
        }
        s += n + r.pathname;
        t = "object" === typeof r.query ? e(r.query) : r.query;
        if (t) s += "?" !== t.charAt(0) ? "?" + t : t;
        if (r.hash) s += r.hash;
        return s;
      }
      b.prototype = { set: y, toString: w };
      b.extractProtocol = g;
      b.location = d;
      b.trimLeft = c;
      b.qs = o;
      e.exports = b;
    },
  },
]);
