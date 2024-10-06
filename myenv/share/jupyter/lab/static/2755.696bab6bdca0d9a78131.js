(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2755],
  {
    28734: function (t) {
      !(function (e, n) {
        true ? (t.exports = n()) : 0;
      })(this, function () {
        "use strict";
        return function (t, e) {
          var n = e.prototype,
            i = n.format;
          n.format = function (t) {
            var e = this,
              n = this.$locale();
            if (!this.isValid()) return i.bind(this)(t);
            var s = this.$utils(),
              r = (t || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function (t) {
                switch (t) {
                  case "Q":
                    return Math.ceil((e.$M + 1) / 3);
                  case "Do":
                    return n.ordinal(e.$D);
                  case "gggg":
                    return e.weekYear();
                  case "GGGG":
                    return e.isoWeekYear();
                  case "wo":
                    return n.ordinal(e.week(), "W");
                  case "w":
                  case "ww":
                    return s.s(e.week(), "w" === t ? 1 : 2, "0");
                  case "W":
                  case "WW":
                    return s.s(e.isoWeek(), "W" === t ? 1 : 2, "0");
                  case "k":
                  case "kk":
                    return s.s(String(0 === e.$H ? 24 : e.$H), "k" === t ? 1 : 2, "0");
                  case "X":
                    return Math.floor(e.$d.getTime() / 1e3);
                  case "x":
                    return e.$d.getTime();
                  case "z":
                    return "[" + e.offsetName() + "]";
                  case "zzz":
                    return "[" + e.offsetName("long") + "]";
                  default:
                    return t;
                }
              });
            return i.bind(this)(r);
          };
        };
      });
    },
    10285: function (t) {
      !(function (e, n) {
        true ? (t.exports = n()) : 0;
      })(this, function () {
        "use strict";
        var t = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
          },
          e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
          n = /\d\d/,
          i = /\d\d?/,
          s = /\d*[^-_:/,()\s\d]+/,
          r = {},
          a = function (t) {
            return (t = +t) + (t > 68 ? 1900 : 2e3);
          };
        var o = function (t) {
            return function (e) {
              this[t] = +e;
            };
          },
          c = [
            /[+-]\d\d:?(\d\d)?|Z/,
            function (t) {
              (this.zone || (this.zone = {})).offset = (function (t) {
                if (!t) return 0;
                if ("Z" === t) return 0;
                var e = t.match(/([+-]|\d\d)/g),
                  n = 60 * e[1] + (+e[2] || 0);
                return 0 === n ? 0 : "+" === e[0] ? -n : n;
              })(t);
            },
          ],
          l = function (t) {
            var e = r[t];
            return e && (e.indexOf ? e : e.s.concat(e.f));
          },
          u = function (t, e) {
            var n,
              i = r.meridiem;
            if (i) {
              for (var s = 1; s <= 24; s += 1)
                if (t.indexOf(i(s, 0, e)) > -1) {
                  n = s > 12;
                  break;
                }
            } else n = t === (e ? "pm" : "PM");
            return n;
          },
          d = {
            A: [
              s,
              function (t) {
                this.afternoon = u(t, !1);
              },
            ],
            a: [
              s,
              function (t) {
                this.afternoon = u(t, !0);
              },
            ],
            S: [
              /\d/,
              function (t) {
                this.milliseconds = 100 * +t;
              },
            ],
            SS: [
              n,
              function (t) {
                this.milliseconds = 10 * +t;
              },
            ],
            SSS: [
              /\d{3}/,
              function (t) {
                this.milliseconds = +t;
              },
            ],
            s: [i, o("seconds")],
            ss: [i, o("seconds")],
            m: [i, o("minutes")],
            mm: [i, o("minutes")],
            H: [i, o("hours")],
            h: [i, o("hours")],
            HH: [i, o("hours")],
            hh: [i, o("hours")],
            D: [i, o("day")],
            DD: [n, o("day")],
            Do: [
              s,
              function (t) {
                var e = r.ordinal,
                  n = t.match(/\d+/);
                if (((this.day = n[0]), e)) for (var i = 1; i <= 31; i += 1) e(i).replace(/\[|\]/g, "") === t && (this.day = i);
              },
            ],
            M: [i, o("month")],
            MM: [n, o("month")],
            MMM: [
              s,
              function (t) {
                var e = l("months"),
                  n =
                    (
                      l("monthsShort") ||
                      e.map(function (t) {
                        return t.slice(0, 3);
                      })
                    ).indexOf(t) + 1;
                if (n < 1) throw new Error();
                this.month = n % 12 || n;
              },
            ],
            MMMM: [
              s,
              function (t) {
                var e = l("months").indexOf(t) + 1;
                if (e < 1) throw new Error();
                this.month = e % 12 || e;
              },
            ],
            Y: [/[+-]?\d+/, o("year")],
            YY: [
              n,
              function (t) {
                this.year = a(t);
              },
            ],
            YYYY: [/\d{4}/, o("year")],
            Z: c,
            ZZ: c,
          };
        function f(n) {
          var i, s;
          (i = n), (s = r && r.formats);
          for (
            var a = (n = i.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (e, n, i) {
                var r = i && i.toUpperCase();
                return (
                  n ||
                  s[i] ||
                  t[i] ||
                  s[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (t, e, n) {
                    return e || n.slice(1);
                  })
                );
              })).match(e),
              o = a.length,
              c = 0;
            c < o;
            c += 1
          ) {
            var l = a[c],
              u = d[l],
              f = u && u[0],
              h = u && u[1];
            a[c] = h ? { regex: f, parser: h } : l.replace(/^\[|\]$/g, "");
          }
          return function (t) {
            for (var e = {}, n = 0, i = 0; n < o; n += 1) {
              var s = a[n];
              if ("string" == typeof s) i += s.length;
              else {
                var r = s.regex,
                  c = s.parser,
                  l = t.slice(i),
                  u = r.exec(l)[0];
                c.call(e, u), (t = t.replace(u, ""));
              }
            }
            return (
              (function (t) {
                var e = t.afternoon;
                if (void 0 !== e) {
                  var n = t.hours;
                  e ? n < 12 && (t.hours += 12) : 12 === n && (t.hours = 0), delete t.afternoon;
                }
              })(e),
              e
            );
          };
        }
        return function (t, e, n) {
          (n.p.customParseFormat = !0), t && t.parseTwoDigitYear && (a = t.parseTwoDigitYear);
          var i = e.prototype,
            s = i.parse;
          i.parse = function (t) {
            var e = t.date,
              i = t.utc,
              a = t.args;
            this.$u = i;
            var o = a[1];
            if ("string" == typeof o) {
              var c = !0 === a[2],
                l = !0 === a[3],
                u = c || l,
                d = a[2];
              l && (d = a[2]),
                (r = this.$locale()),
                !c && d && (r = n.Ls[d]),
                (this.$d = (function (t, e, n) {
                  try {
                    if (["x", "X"].indexOf(e) > -1) return new Date(("X" === e ? 1e3 : 1) * t);
                    var i = f(e)(t),
                      s = i.year,
                      r = i.month,
                      a = i.day,
                      o = i.hours,
                      c = i.minutes,
                      l = i.seconds,
                      u = i.milliseconds,
                      d = i.zone,
                      h = new Date(),
                      y = a || (s || r ? 1 : h.getDate()),
                      m = s || h.getFullYear(),
                      k = 0;
                    (s && !r) || (k = r > 0 ? r - 1 : h.getMonth());
                    var p = o || 0,
                      g = c || 0,
                      b = l || 0,
                      v = u || 0;
                    return d
                      ? new Date(Date.UTC(m, k, y, p, g, b, v + 60 * d.offset * 1e3))
                      : n
                        ? new Date(Date.UTC(m, k, y, p, g, b, v))
                        : new Date(m, k, y, p, g, b, v);
                  } catch (t) {
                    return new Date("");
                  }
                })(e, o, i)),
                this.init(),
                d && !0 !== d && (this.$L = this.locale(d).$L),
                u && e != this.format(o) && (this.$d = new Date("")),
                (r = {});
            } else if (o instanceof Array)
              for (var h = o.length, y = 1; y <= h; y += 1) {
                a[1] = o[y - 1];
                var m = n.apply(this, a);
                if (m.isValid()) {
                  (this.$d = m.$d), (this.$L = m.$L), this.init();
                  break;
                }
                y === h && (this.$d = new Date(""));
              }
            else s.call(this, t);
          };
        };
      });
    },
    59542: function (t) {
      !(function (e, n) {
        true ? (t.exports = n()) : 0;
      })(this, function () {
        "use strict";
        var t = "day";
        return function (e, n, i) {
          var s = function (e) {
              return e.add(4 - e.isoWeekday(), t);
            },
            r = n.prototype;
          (r.isoWeekYear = function () {
            return s(this).year();
          }),
            (r.isoWeek = function (e) {
              if (!this.$utils().u(e)) return this.add(7 * (e - this.isoWeek()), t);
              var n,
                r,
                a,
                o,
                c = s(this),
                l =
                  ((n = this.isoWeekYear()),
                  (r = this.$u),
                  (a = (r ? i.utc : i)().year(n).startOf("year")),
                  (o = 4 - a.isoWeekday()),
                  a.isoWeekday() > 4 && (o += 7),
                  a.add(o, t));
              return c.diff(l, "week") + 1;
            }),
            (r.isoWeekday = function (t) {
              return this.$utils().u(t) ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7);
            });
          var a = r.startOf;
          r.startOf = function (t, e) {
            var n = this.$utils(),
              i = !!n.u(e) || e;
            return "isoweek" === n.p(t)
              ? i
                ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day")
                : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day")
              : a.bind(this)(t, e);
          };
        };
      });
    },
    72755: (t, e, n) => {
      "use strict";
      n.r(e);
      n.d(e, { diagram: () => zt });
      var i = n(17967);
      var s = n(27484);
      var r = n.n(s);
      var a = n(59542);
      var o = n.n(a);
      var c = n(10285);
      var l = n.n(c);
      var u = n(28734);
      var d = n.n(u);
      var f = n(23787);
      var h = n(34596);
      var y = n(27856);
      var m = n.n(y);
      var k = (function () {
        var t = function (t, e, n, i) {
            for (n = n || {}, i = t.length; i--; n[t[i]] = e);
            return n;
          },
          e = [6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 32, 33, 35, 37],
          n = [1, 25],
          i = [1, 26],
          s = [1, 27],
          r = [1, 28],
          a = [1, 29],
          o = [1, 30],
          c = [1, 31],
          l = [1, 9],
          u = [1, 10],
          d = [1, 11],
          f = [1, 12],
          h = [1, 13],
          y = [1, 14],
          m = [1, 15],
          k = [1, 16],
          p = [1, 18],
          g = [1, 19],
          b = [1, 20],
          v = [1, 21],
          T = [1, 22],
          x = [1, 24],
          _ = [1, 32];
        var w = {
          trace: function t() {},
          yy: {},
          symbols_: {
            error: 2,
            start: 3,
            gantt: 4,
            document: 5,
            EOF: 6,
            line: 7,
            SPACE: 8,
            statement: 9,
            NL: 10,
            weekday: 11,
            weekday_monday: 12,
            weekday_tuesday: 13,
            weekday_wednesday: 14,
            weekday_thursday: 15,
            weekday_friday: 16,
            weekday_saturday: 17,
            weekday_sunday: 18,
            dateFormat: 19,
            inclusiveEndDates: 20,
            topAxis: 21,
            axisFormat: 22,
            tickInterval: 23,
            excludes: 24,
            includes: 25,
            todayMarker: 26,
            title: 27,
            acc_title: 28,
            acc_title_value: 29,
            acc_descr: 30,
            acc_descr_value: 31,
            acc_descr_multiline_value: 32,
            section: 33,
            clickStatement: 34,
            taskTxt: 35,
            taskData: 36,
            click: 37,
            callbackname: 38,
            callbackargs: 39,
            href: 40,
            clickStatementDebug: 41,
            $accept: 0,
            $end: 1,
          },
          terminals_: {
            2: "error",
            4: "gantt",
            6: "EOF",
            8: "SPACE",
            10: "NL",
            12: "weekday_monday",
            13: "weekday_tuesday",
            14: "weekday_wednesday",
            15: "weekday_thursday",
            16: "weekday_friday",
            17: "weekday_saturday",
            18: "weekday_sunday",
            19: "dateFormat",
            20: "inclusiveEndDates",
            21: "topAxis",
            22: "axisFormat",
            23: "tickInterval",
            24: "excludes",
            25: "includes",
            26: "todayMarker",
            27: "title",
            28: "acc_title",
            29: "acc_title_value",
            30: "acc_descr",
            31: "acc_descr_value",
            32: "acc_descr_multiline_value",
            33: "section",
            35: "taskTxt",
            36: "taskData",
            37: "click",
            38: "callbackname",
            39: "callbackargs",
            40: "href",
          },
          productions_: [
            0,
            [3, 3],
            [5, 0],
            [5, 2],
            [7, 2],
            [7, 1],
            [7, 1],
            [7, 1],
            [11, 1],
            [11, 1],
            [11, 1],
            [11, 1],
            [11, 1],
            [11, 1],
            [11, 1],
            [9, 1],
            [9, 1],
            [9, 1],
            [9, 1],
            [9, 1],
            [9, 1],
            [9, 1],
            [9, 1],
            [9, 1],
            [9, 1],
            [9, 2],
            [9, 2],
            [9, 1],
            [9, 1],
            [9, 1],
            [9, 2],
            [34, 2],
            [34, 3],
            [34, 3],
            [34, 4],
            [34, 3],
            [34, 4],
            [34, 2],
            [41, 2],
            [41, 3],
            [41, 3],
            [41, 4],
            [41, 3],
            [41, 4],
            [41, 2],
          ],
          performAction: function t(e, n, i, s, r, a, o) {
            var c = a.length - 1;
            switch (r) {
              case 1:
                return a[c - 1];
              case 2:
                this.$ = [];
                break;
              case 3:
                a[c - 1].push(a[c]);
                this.$ = a[c - 1];
                break;
              case 4:
              case 5:
                this.$ = a[c];
                break;
              case 6:
              case 7:
                this.$ = [];
                break;
              case 8:
                s.setWeekday("monday");
                break;
              case 9:
                s.setWeekday("tuesday");
                break;
              case 10:
                s.setWeekday("wednesday");
                break;
              case 11:
                s.setWeekday("thursday");
                break;
              case 12:
                s.setWeekday("friday");
                break;
              case 13:
                s.setWeekday("saturday");
                break;
              case 14:
                s.setWeekday("sunday");
                break;
              case 15:
                s.setDateFormat(a[c].substr(11));
                this.$ = a[c].substr(11);
                break;
              case 16:
                s.enableInclusiveEndDates();
                this.$ = a[c].substr(18);
                break;
              case 17:
                s.TopAxis();
                this.$ = a[c].substr(8);
                break;
              case 18:
                s.setAxisFormat(a[c].substr(11));
                this.$ = a[c].substr(11);
                break;
              case 19:
                s.setTickInterval(a[c].substr(13));
                this.$ = a[c].substr(13);
                break;
              case 20:
                s.setExcludes(a[c].substr(9));
                this.$ = a[c].substr(9);
                break;
              case 21:
                s.setIncludes(a[c].substr(9));
                this.$ = a[c].substr(9);
                break;
              case 22:
                s.setTodayMarker(a[c].substr(12));
                this.$ = a[c].substr(12);
                break;
              case 24:
                s.setDiagramTitle(a[c].substr(6));
                this.$ = a[c].substr(6);
                break;
              case 25:
                this.$ = a[c].trim();
                s.setAccTitle(this.$);
                break;
              case 26:
              case 27:
                this.$ = a[c].trim();
                s.setAccDescription(this.$);
                break;
              case 28:
                s.addSection(a[c].substr(8));
                this.$ = a[c].substr(8);
                break;
              case 30:
                s.addTask(a[c - 1], a[c]);
                this.$ = "task";
                break;
              case 31:
                this.$ = a[c - 1];
                s.setClickEvent(a[c - 1], a[c], null);
                break;
              case 32:
                this.$ = a[c - 2];
                s.setClickEvent(a[c - 2], a[c - 1], a[c]);
                break;
              case 33:
                this.$ = a[c - 2];
                s.setClickEvent(a[c - 2], a[c - 1], null);
                s.setLink(a[c - 2], a[c]);
                break;
              case 34:
                this.$ = a[c - 3];
                s.setClickEvent(a[c - 3], a[c - 2], a[c - 1]);
                s.setLink(a[c - 3], a[c]);
                break;
              case 35:
                this.$ = a[c - 2];
                s.setClickEvent(a[c - 2], a[c], null);
                s.setLink(a[c - 2], a[c - 1]);
                break;
              case 36:
                this.$ = a[c - 3];
                s.setClickEvent(a[c - 3], a[c - 1], a[c]);
                s.setLink(a[c - 3], a[c - 2]);
                break;
              case 37:
                this.$ = a[c - 1];
                s.setLink(a[c - 1], a[c]);
                break;
              case 38:
              case 44:
                this.$ = a[c - 1] + " " + a[c];
                break;
              case 39:
              case 40:
              case 42:
                this.$ = a[c - 2] + " " + a[c - 1] + " " + a[c];
                break;
              case 41:
              case 43:
                this.$ = a[c - 3] + " " + a[c - 2] + " " + a[c - 1] + " " + a[c];
                break;
            }
          },
          table: [
            { 3: 1, 4: [1, 2] },
            { 1: [3] },
            t(e, [2, 2], { 5: 3 }),
            {
              6: [1, 4],
              7: 5,
              8: [1, 6],
              9: 7,
              10: [1, 8],
              11: 17,
              12: n,
              13: i,
              14: s,
              15: r,
              16: a,
              17: o,
              18: c,
              19: l,
              20: u,
              21: d,
              22: f,
              23: h,
              24: y,
              25: m,
              26: k,
              27: p,
              28: g,
              30: b,
              32: v,
              33: T,
              34: 23,
              35: x,
              37: _,
            },
            t(e, [2, 7], { 1: [2, 1] }),
            t(e, [2, 3]),
            {
              9: 33,
              11: 17,
              12: n,
              13: i,
              14: s,
              15: r,
              16: a,
              17: o,
              18: c,
              19: l,
              20: u,
              21: d,
              22: f,
              23: h,
              24: y,
              25: m,
              26: k,
              27: p,
              28: g,
              30: b,
              32: v,
              33: T,
              34: 23,
              35: x,
              37: _,
            },
            t(e, [2, 5]),
            t(e, [2, 6]),
            t(e, [2, 15]),
            t(e, [2, 16]),
            t(e, [2, 17]),
            t(e, [2, 18]),
            t(e, [2, 19]),
            t(e, [2, 20]),
            t(e, [2, 21]),
            t(e, [2, 22]),
            t(e, [2, 23]),
            t(e, [2, 24]),
            { 29: [1, 34] },
            { 31: [1, 35] },
            t(e, [2, 27]),
            t(e, [2, 28]),
            t(e, [2, 29]),
            { 36: [1, 36] },
            t(e, [2, 8]),
            t(e, [2, 9]),
            t(e, [2, 10]),
            t(e, [2, 11]),
            t(e, [2, 12]),
            t(e, [2, 13]),
            t(e, [2, 14]),
            { 38: [1, 37], 40: [1, 38] },
            t(e, [2, 4]),
            t(e, [2, 25]),
            t(e, [2, 26]),
            t(e, [2, 30]),
            t(e, [2, 31], { 39: [1, 39], 40: [1, 40] }),
            t(e, [2, 37], { 38: [1, 41] }),
            t(e, [2, 32], { 40: [1, 42] }),
            t(e, [2, 33]),
            t(e, [2, 35], { 39: [1, 43] }),
            t(e, [2, 34]),
            t(e, [2, 36]),
          ],
          defaultActions: {},
          parseError: function t(e, n) {
            if (n.recoverable) {
              this.trace(e);
            } else {
              var i = new Error(e);
              i.hash = n;
              throw i;
            }
          },
          parse: function t(e) {
            var n = this,
              i = [0],
              s = [],
              r = [null],
              a = [],
              o = this.table,
              c = "",
              l = 0,
              u = 0,
              d = 2,
              f = 1;
            var h = a.slice.call(arguments, 1);
            var y = Object.create(this.lexer);
            var m = { yy: {} };
            for (var k in this.yy) {
              if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
                m.yy[k] = this.yy[k];
              }
            }
            y.setInput(e, m.yy);
            m.yy.lexer = y;
            m.yy.parser = this;
            if (typeof y.yylloc == "undefined") {
              y.yylloc = {};
            }
            var p = y.yylloc;
            a.push(p);
            var g = y.options && y.options.ranges;
            if (typeof m.yy.parseError === "function") {
              this.parseError = m.yy.parseError;
            } else {
              this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function b() {
              var t;
              t = s.pop() || y.lex() || f;
              if (typeof t !== "number") {
                if (t instanceof Array) {
                  s = t;
                  t = s.pop();
                }
                t = n.symbols_[t] || t;
              }
              return t;
            }
            var v,
              T,
              x,
              _,
              w = {},
              $,
              D,
              S,
              C;
            while (true) {
              T = i[i.length - 1];
              if (this.defaultActions[T]) {
                x = this.defaultActions[T];
              } else {
                if (v === null || typeof v == "undefined") {
                  v = b();
                }
                x = o[T] && o[T][v];
              }
              if (typeof x === "undefined" || !x.length || !x[0]) {
                var E = "";
                C = [];
                for ($ in o[T]) {
                  if (this.terminals_[$] && $ > d) {
                    C.push("'" + this.terminals_[$] + "'");
                  }
                }
                if (y.showPosition) {
                  E =
                    "Parse error on line " +
                    (l + 1) +
                    ":\n" +
                    y.showPosition() +
                    "\nExpecting " +
                    C.join(", ") +
                    ", got '" +
                    (this.terminals_[v] || v) +
                    "'";
                } else {
                  E = "Parse error on line " + (l + 1) + ": Unexpected " + (v == f ? "end of input" : "'" + (this.terminals_[v] || v) + "'");
                }
                this.parseError(E, { text: y.match, token: this.terminals_[v] || v, line: y.yylineno, loc: p, expected: C });
              }
              if (x[0] instanceof Array && x.length > 1) {
                throw new Error("Parse Error: multiple actions possible at state: " + T + ", token: " + v);
              }
              switch (x[0]) {
                case 1:
                  i.push(v);
                  r.push(y.yytext);
                  a.push(y.yylloc);
                  i.push(x[1]);
                  v = null;
                  {
                    u = y.yyleng;
                    c = y.yytext;
                    l = y.yylineno;
                    p = y.yylloc;
                  }
                  break;
                case 2:
                  D = this.productions_[x[1]][1];
                  w.$ = r[r.length - D];
                  w._$ = {
                    first_line: a[a.length - (D || 1)].first_line,
                    last_line: a[a.length - 1].last_line,
                    first_column: a[a.length - (D || 1)].first_column,
                    last_column: a[a.length - 1].last_column,
                  };
                  if (g) {
                    w._$.range = [a[a.length - (D || 1)].range[0], a[a.length - 1].range[1]];
                  }
                  _ = this.performAction.apply(w, [c, u, l, m.yy, x[1], r, a].concat(h));
                  if (typeof _ !== "undefined") {
                    return _;
                  }
                  if (D) {
                    i = i.slice(0, -1 * D * 2);
                    r = r.slice(0, -1 * D);
                    a = a.slice(0, -1 * D);
                  }
                  i.push(this.productions_[x[1]][0]);
                  r.push(w.$);
                  a.push(w._$);
                  S = o[i[i.length - 2]][i[i.length - 1]];
                  i.push(S);
                  break;
                case 3:
                  return true;
              }
            }
            return true;
          },
        };
        var $ = (function () {
          var t = {
            EOF: 1,
            parseError: function t(e, n) {
              if (this.yy.parser) {
                this.yy.parser.parseError(e, n);
              } else {
                throw new Error(e);
              }
            },
            setInput: function (t, e) {
              this.yy = e || this.yy || {};
              this._input = t;
              this._more = this._backtrack = this.done = false;
              this.yylineno = this.yyleng = 0;
              this.yytext = this.matched = this.match = "";
              this.conditionStack = ["INITIAL"];
              this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
              if (this.options.ranges) {
                this.yylloc.range = [0, 0];
              }
              this.offset = 0;
              return this;
            },
            input: function () {
              var t = this._input[0];
              this.yytext += t;
              this.yyleng++;
              this.offset++;
              this.match += t;
              this.matched += t;
              var e = t.match(/(?:\r\n?|\n).*/g);
              if (e) {
                this.yylineno++;
                this.yylloc.last_line++;
              } else {
                this.yylloc.last_column++;
              }
              if (this.options.ranges) {
                this.yylloc.range[1]++;
              }
              this._input = this._input.slice(1);
              return t;
            },
            unput: function (t) {
              var e = t.length;
              var n = t.split(/(?:\r\n?|\n)/g);
              this._input = t + this._input;
              this.yytext = this.yytext.substr(0, this.yytext.length - e);
              this.offset -= e;
              var i = this.match.split(/(?:\r\n?|\n)/g);
              this.match = this.match.substr(0, this.match.length - 1);
              this.matched = this.matched.substr(0, this.matched.length - 1);
              if (n.length - 1) {
                this.yylineno -= n.length - 1;
              }
              var s = this.yylloc.range;
              this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: n
                  ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length
                  : this.yylloc.first_column - e,
              };
              if (this.options.ranges) {
                this.yylloc.range = [s[0], s[0] + this.yyleng - e];
              }
              this.yyleng = this.yytext.length;
              return this;
            },
            more: function () {
              this._more = true;
              return this;
            },
            reject: function () {
              if (this.options.backtrack_lexer) {
                this._backtrack = true;
              } else {
                return this.parseError(
                  "Lexical error on line " +
                    (this.yylineno + 1) +
                    ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" +
                    this.showPosition(),
                  { text: "", token: null, line: this.yylineno }
                );
              }
              return this;
            },
            less: function (t) {
              this.unput(this.match.slice(t));
            },
            pastInput: function () {
              var t = this.matched.substr(0, this.matched.length - this.match.length);
              return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function () {
              var t = this.match;
              if (t.length < 20) {
                t += this._input.substr(0, 20 - t.length);
              }
              return (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
            },
            showPosition: function () {
              var t = this.pastInput();
              var e = new Array(t.length + 1).join("-");
              return t + this.upcomingInput() + "\n" + e + "^";
            },
            test_match: function (t, e) {
              var n, i, s;
              if (this.options.backtrack_lexer) {
                s = {
                  yylineno: this.yylineno,
                  yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column,
                  },
                  yytext: this.yytext,
                  match: this.match,
                  matches: this.matches,
                  matched: this.matched,
                  yyleng: this.yyleng,
                  offset: this.offset,
                  _more: this._more,
                  _input: this._input,
                  yy: this.yy,
                  conditionStack: this.conditionStack.slice(0),
                  done: this.done,
                };
                if (this.options.ranges) {
                  s.yylloc.range = this.yylloc.range.slice(0);
                }
              }
              i = t[0].match(/(?:\r\n?|\n).*/g);
              if (i) {
                this.yylineno += i.length;
              }
              this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length,
              };
              this.yytext += t[0];
              this.match += t[0];
              this.matches = t;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                this.yylloc.range = [this.offset, (this.offset += this.yyleng)];
              }
              this._more = false;
              this._backtrack = false;
              this._input = this._input.slice(t[0].length);
              this.matched += t[0];
              n = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]);
              if (this.done && this._input) {
                this.done = false;
              }
              if (n) {
                return n;
              } else if (this._backtrack) {
                for (var r in s) {
                  this[r] = s[r];
                }
                return false;
              }
              return false;
            },
            next: function () {
              if (this.done) {
                return this.EOF;
              }
              if (!this._input) {
                this.done = true;
              }
              var t, e, n, i;
              if (!this._more) {
                this.yytext = "";
                this.match = "";
              }
              var s = this._currentRules();
              for (var r = 0; r < s.length; r++) {
                n = this._input.match(this.rules[s[r]]);
                if (n && (!e || n[0].length > e[0].length)) {
                  e = n;
                  i = r;
                  if (this.options.backtrack_lexer) {
                    t = this.test_match(n, s[r]);
                    if (t !== false) {
                      return t;
                    } else if (this._backtrack) {
                      e = false;
                      continue;
                    } else {
                      return false;
                    }
                  } else if (!this.options.flex) {
                    break;
                  }
                }
              }
              if (e) {
                t = this.test_match(e, s[i]);
                if (t !== false) {
                  return t;
                }
                return false;
              }
              if (this._input === "") {
                return this.EOF;
              } else {
                return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                  text: "",
                  token: null,
                  line: this.yylineno,
                });
              }
            },
            lex: function t() {
              var e = this.next();
              if (e) {
                return e;
              } else {
                return this.lex();
              }
            },
            begin: function t(e) {
              this.conditionStack.push(e);
            },
            popState: function t() {
              var e = this.conditionStack.length - 1;
              if (e > 0) {
                return this.conditionStack.pop();
              } else {
                return this.conditionStack[0];
              }
            },
            _currentRules: function t() {
              if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
              } else {
                return this.conditions["INITIAL"].rules;
              }
            },
            topState: function t(e) {
              e = this.conditionStack.length - 1 - Math.abs(e || 0);
              if (e >= 0) {
                return this.conditionStack[e];
              } else {
                return "INITIAL";
              }
            },
            pushState: function t(e) {
              this.begin(e);
            },
            stateStackSize: function t() {
              return this.conditionStack.length;
            },
            options: { "case-insensitive": true },
            performAction: function t(e, n, i, s) {
              switch (i) {
                case 0:
                  this.begin("open_directive");
                  return "open_directive";
                case 1:
                  this.begin("acc_title");
                  return 28;
                case 2:
                  this.popState();
                  return "acc_title_value";
                case 3:
                  this.begin("acc_descr");
                  return 30;
                case 4:
                  this.popState();
                  return "acc_descr_value";
                case 5:
                  this.begin("acc_descr_multiline");
                  break;
                case 6:
                  this.popState();
                  break;
                case 7:
                  return "acc_descr_multiline_value";
                case 8:
                  break;
                case 9:
                  break;
                case 10:
                  break;
                case 11:
                  return 10;
                case 12:
                  break;
                case 13:
                  break;
                case 14:
                  break;
                case 15:
                  this.begin("href");
                  break;
                case 16:
                  this.popState();
                  break;
                case 17:
                  return 40;
                case 18:
                  this.begin("callbackname");
                  break;
                case 19:
                  this.popState();
                  break;
                case 20:
                  this.popState();
                  this.begin("callbackargs");
                  break;
                case 21:
                  return 38;
                case 22:
                  this.popState();
                  break;
                case 23:
                  return 39;
                case 24:
                  this.begin("click");
                  break;
                case 25:
                  this.popState();
                  break;
                case 26:
                  return 37;
                case 27:
                  return 4;
                case 28:
                  return 19;
                case 29:
                  return 20;
                case 30:
                  return 21;
                case 31:
                  return 22;
                case 32:
                  return 23;
                case 33:
                  return 25;
                case 34:
                  return 24;
                case 35:
                  return 26;
                case 36:
                  return 12;
                case 37:
                  return 13;
                case 38:
                  return 14;
                case 39:
                  return 15;
                case 40:
                  return 16;
                case 41:
                  return 17;
                case 42:
                  return 18;
                case 43:
                  return "date";
                case 44:
                  return 27;
                case 45:
                  return "accDescription";
                case 46:
                  return 33;
                case 47:
                  return 35;
                case 48:
                  return 36;
                case 49:
                  return ":";
                case 50:
                  return 6;
                case 51:
                  return "INVALID";
              }
            },
            rules: [
              /^(?:%%\{)/i,
              /^(?:accTitle\s*:\s*)/i,
              /^(?:(?!\n||)*[^\n]*)/i,
              /^(?:accDescr\s*:\s*)/i,
              /^(?:(?!\n||)*[^\n]*)/i,
              /^(?:accDescr\s*\{\s*)/i,
              /^(?:[\}])/i,
              /^(?:[^\}]*)/i,
              /^(?:%%(?!\{)*[^\n]*)/i,
              /^(?:[^\}]%%*[^\n]*)/i,
              /^(?:%%*[^\n]*[\n]*)/i,
              /^(?:[\n]+)/i,
              /^(?:\s+)/i,
              /^(?:#[^\n]*)/i,
              /^(?:%[^\n]*)/i,
              /^(?:href[\s]+["])/i,
              /^(?:["])/i,
              /^(?:[^"]*)/i,
              /^(?:call[\s]+)/i,
              /^(?:\([\s]*\))/i,
              /^(?:\()/i,
              /^(?:[^(]*)/i,
              /^(?:\))/i,
              /^(?:[^)]*)/i,
              /^(?:click[\s]+)/i,
              /^(?:[\s\n])/i,
              /^(?:[^\s\n]*)/i,
              /^(?:gantt\b)/i,
              /^(?:dateFormat\s[^#\n;]+)/i,
              /^(?:inclusiveEndDates\b)/i,
              /^(?:topAxis\b)/i,
              /^(?:axisFormat\s[^#\n;]+)/i,
              /^(?:tickInterval\s[^#\n;]+)/i,
              /^(?:includes\s[^#\n;]+)/i,
              /^(?:excludes\s[^#\n;]+)/i,
              /^(?:todayMarker\s[^\n;]+)/i,
              /^(?:weekday\s+monday\b)/i,
              /^(?:weekday\s+tuesday\b)/i,
              /^(?:weekday\s+wednesday\b)/i,
              /^(?:weekday\s+thursday\b)/i,
              /^(?:weekday\s+friday\b)/i,
              /^(?:weekday\s+saturday\b)/i,
              /^(?:weekday\s+sunday\b)/i,
              /^(?:\d\d\d\d-\d\d-\d\d\b)/i,
              /^(?:title\s[^#\n;]+)/i,
              /^(?:accDescription\s[^#\n;]+)/i,
              /^(?:section\s[^#:\n;]+)/i,
              /^(?:[^#:\n;]+)/i,
              /^(?::[^#\n;]+)/i,
              /^(?::)/i,
              /^(?:$)/i,
              /^(?:.)/i,
            ],
            conditions: {
              acc_descr_multiline: { rules: [6, 7], inclusive: false },
              acc_descr: { rules: [4], inclusive: false },
              acc_title: { rules: [2], inclusive: false },
              callbackargs: { rules: [22, 23], inclusive: false },
              callbackname: { rules: [19, 20, 21], inclusive: false },
              href: { rules: [16, 17], inclusive: false },
              click: { rules: [25, 26], inclusive: false },
              INITIAL: {
                rules: [
                  0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 15, 18, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
                  47, 48, 49, 50, 51,
                ],
                inclusive: true,
              },
            },
          };
          return t;
        })();
        w.lexer = $;
        function D() {
          this.yy = {};
        }
        D.prototype = w;
        w.Parser = D;
        return new D();
      })();
      k.parser = k;
      const p = k;
      r().extend(o());
      r().extend(l());
      r().extend(d());
      let g = "";
      let b = "";
      let v = void 0;
      let T = "";
      let x = [];
      let _ = [];
      let w = {};
      let $ = [];
      let D = [];
      let S = "";
      let C = "";
      const E = ["active", "done", "crit", "milestone"];
      let M = [];
      let Y = false;
      let A = false;
      let L = "sunday";
      let I = 0;
      const O = function () {
        $ = [];
        D = [];
        S = "";
        M = [];
        ft = 0;
        kt = void 0;
        pt = void 0;
        gt = [];
        g = "";
        b = "";
        C = "";
        v = void 0;
        T = "";
        x = [];
        _ = [];
        Y = false;
        A = false;
        I = 0;
        w = {};
        (0, f.t)();
        L = "sunday";
      };
      const F = function (t) {
        b = t;
      };
      const W = function () {
        return b;
      };
      const B = function (t) {
        v = t;
      };
      const P = function () {
        return v;
      };
      const z = function (t) {
        T = t;
      };
      const N = function () {
        return T;
      };
      const j = function (t) {
        g = t;
      };
      const H = function () {
        Y = true;
      };
      const Z = function () {
        return Y;
      };
      const G = function () {
        A = true;
      };
      const V = function () {
        return A;
      };
      const q = function (t) {
        C = t;
      };
      const R = function () {
        return C;
      };
      const U = function () {
        return g;
      };
      const X = function (t) {
        x = t.toLowerCase().split(/[\s,]+/);
      };
      const Q = function () {
        return x;
      };
      const K = function (t) {
        _ = t.toLowerCase().split(/[\s,]+/);
      };
      const J = function () {
        return _;
      };
      const tt = function () {
        return w;
      };
      const et = function (t) {
        S = t;
        $.push(t);
      };
      const nt = function () {
        return $;
      };
      const it = function () {
        let t = _t();
        const e = 10;
        let n = 0;
        while (!t && n < e) {
          t = _t();
          n++;
        }
        D = gt;
        return D;
      };
      const st = function (t, e, n, i) {
        if (i.includes(t.format(e.trim()))) {
          return false;
        }
        if (t.isoWeekday() >= 6 && n.includes("weekends")) {
          return true;
        }
        if (n.includes(t.format("dddd").toLowerCase())) {
          return true;
        }
        return n.includes(t.format(e.trim()));
      };
      const rt = function (t) {
        L = t;
      };
      const at = function () {
        return L;
      };
      const ot = function (t, e, n, i) {
        if (!n.length || t.manualEndTime) {
          return;
        }
        let s;
        if (t.startTime instanceof Date) {
          s = r()(t.startTime);
        } else {
          s = r()(t.startTime, e, true);
        }
        s = s.add(1, "d");
        let a;
        if (t.endTime instanceof Date) {
          a = r()(t.endTime);
        } else {
          a = r()(t.endTime, e, true);
        }
        const [o, c] = ct(s, a, e, n, i);
        t.endTime = o.toDate();
        t.renderEndTime = c;
      };
      const ct = function (t, e, n, i, s) {
        let r = false;
        let a = null;
        while (t <= e) {
          if (!r) {
            a = e.toDate();
          }
          r = st(t, n, i, s);
          if (r) {
            e = e.add(1, "d");
          }
          t = t.add(1, "d");
        }
        return [e, a];
      };
      const lt = function (t, e, n) {
        n = n.trim();
        const i = /^after\s+([\d\w- ]+)/;
        const s = i.exec(n.trim());
        if (s !== null) {
          let t = null;
          s[1].split(" ").forEach(function (e) {
            let n = Tt(e);
            if (n !== void 0) {
              if (!t) {
                t = n;
              } else {
                if (n.endTime > t.endTime) {
                  t = n;
                }
              }
            }
          });
          if (!t) {
            const t = new Date();
            t.setHours(0, 0, 0, 0);
            return t;
          } else {
            return t.endTime;
          }
        }
        let a = r()(n, e.trim(), true);
        if (a.isValid()) {
          return a.toDate();
        } else {
          f.l.debug("Invalid date:" + n);
          f.l.debug("With date format:" + e.trim());
          const t = new Date(n);
          if (t === void 0 || isNaN(t.getTime()) || t.getFullYear() < -1e4 || t.getFullYear() > 1e4) {
            throw new Error("Invalid date:" + n);
          }
          return t;
        }
      };
      const ut = function (t) {
        const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());
        if (e !== null) {
          return [Number.parseFloat(e[1]), e[2]];
        }
        return [NaN, "ms"];
      };
      const dt = function (t, e, n, i = false) {
        n = n.trim();
        let s = r()(n, e.trim(), true);
        if (s.isValid()) {
          if (i) {
            s = s.add(1, "d");
          }
          return s.toDate();
        }
        let a = r()(t);
        const [o, c] = ut(n);
        if (!Number.isNaN(o)) {
          const t = a.add(o, c);
          if (t.isValid()) {
            a = t;
          }
        }
        return a.toDate();
      };
      let ft = 0;
      const ht = function (t) {
        if (t === void 0) {
          ft = ft + 1;
          return "task" + ft;
        }
        return t;
      };
      const yt = function (t, e) {
        let n;
        if (e.substr(0, 1) === ":") {
          n = e.substr(1, e.length);
        } else {
          n = e;
        }
        const i = n.split(",");
        const s = {};
        Yt(i, s, E);
        for (let r = 0; r < i.length; r++) {
          i[r] = i[r].trim();
        }
        let a = "";
        switch (i.length) {
          case 1:
            s.id = ht();
            s.startTime = t.endTime;
            a = i[0];
            break;
          case 2:
            s.id = ht();
            s.startTime = lt(void 0, g, i[0]);
            a = i[1];
            break;
          case 3:
            s.id = ht(i[0]);
            s.startTime = lt(void 0, g, i[1]);
            a = i[2];
            break;
        }
        if (a) {
          s.endTime = dt(s.startTime, g, a, Y);
          s.manualEndTime = r()(a, "YYYY-MM-DD", true).isValid();
          ot(s, g, _, x);
        }
        return s;
      };
      const mt = function (t, e) {
        let n;
        if (e.substr(0, 1) === ":") {
          n = e.substr(1, e.length);
        } else {
          n = e;
        }
        const i = n.split(",");
        const s = {};
        Yt(i, s, E);
        for (let r = 0; r < i.length; r++) {
          i[r] = i[r].trim();
        }
        switch (i.length) {
          case 1:
            s.id = ht();
            s.startTime = { type: "prevTaskEnd", id: t };
            s.endTime = { data: i[0] };
            break;
          case 2:
            s.id = ht();
            s.startTime = { type: "getStartDate", startData: i[0] };
            s.endTime = { data: i[1] };
            break;
          case 3:
            s.id = ht(i[0]);
            s.startTime = { type: "getStartDate", startData: i[1] };
            s.endTime = { data: i[2] };
            break;
        }
        return s;
      };
      let kt;
      let pt;
      let gt = [];
      const bt = {};
      const vt = function (t, e) {
        const n = { section: S, type: S, processed: false, manualEndTime: false, renderEndTime: null, raw: { data: e }, task: t, classes: [] };
        const i = mt(pt, e);
        n.raw.startTime = i.startTime;
        n.raw.endTime = i.endTime;
        n.id = i.id;
        n.prevTaskId = pt;
        n.active = i.active;
        n.done = i.done;
        n.crit = i.crit;
        n.milestone = i.milestone;
        n.order = I;
        I++;
        const s = gt.push(n);
        pt = n.id;
        bt[n.id] = s - 1;
      };
      const Tt = function (t) {
        const e = bt[t];
        return gt[e];
      };
      const xt = function (t, e) {
        const n = { section: S, type: S, description: t, task: t, classes: [] };
        const i = yt(kt, e);
        n.startTime = i.startTime;
        n.endTime = i.endTime;
        n.id = i.id;
        n.active = i.active;
        n.done = i.done;
        n.crit = i.crit;
        n.milestone = i.milestone;
        kt = n;
        D.push(n);
      };
      const _t = function () {
        const t = function (t) {
          const e = gt[t];
          let n = "";
          switch (gt[t].raw.startTime.type) {
            case "prevTaskEnd": {
              const t = Tt(e.prevTaskId);
              e.startTime = t.endTime;
              break;
            }
            case "getStartDate":
              n = lt(void 0, g, gt[t].raw.startTime.startData);
              if (n) {
                gt[t].startTime = n;
              }
              break;
          }
          if (gt[t].startTime) {
            gt[t].endTime = dt(gt[t].startTime, g, gt[t].raw.endTime.data, Y);
            if (gt[t].endTime) {
              gt[t].processed = true;
              gt[t].manualEndTime = r()(gt[t].raw.endTime.data, "YYYY-MM-DD", true).isValid();
              ot(gt[t], g, _, x);
            }
          }
          return gt[t].processed;
        };
        let e = true;
        for (const [n, i] of gt.entries()) {
          t(n);
          e = e && i.processed;
        }
        return e;
      };
      const wt = function (t, e) {
        let n = e;
        if ((0, f.c)().securityLevel !== "loose") {
          n = (0, i.Nm)(e);
        }
        t.split(",").forEach(function (t) {
          let e = Tt(t);
          if (e !== void 0) {
            St(t, () => {
              window.open(n, "_self");
            });
            w[t] = n;
          }
        });
        $t(t, "clickable");
      };
      const $t = function (t, e) {
        t.split(",").forEach(function (t) {
          let n = Tt(t);
          if (n !== void 0) {
            n.classes.push(e);
          }
        });
      };
      const Dt = function (t, e, n) {
        if ((0, f.c)().securityLevel !== "loose") {
          return;
        }
        if (e === void 0) {
          return;
        }
        let i = [];
        if (typeof n === "string") {
          i = n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
          for (let t = 0; t < i.length; t++) {
            let e = i[t].trim();
            if (e.charAt(0) === '"' && e.charAt(e.length - 1) === '"') {
              e = e.substr(1, e.length - 2);
            }
            i[t] = e;
          }
        }
        if (i.length === 0) {
          i.push(t);
        }
        let s = Tt(t);
        if (s !== void 0) {
          St(t, () => {
            f.u.runFunc(e, ...i);
          });
        }
      };
      const St = function (t, e) {
        M.push(
          function () {
            const n = document.querySelector(`[id="${t}"]`);
            if (n !== null) {
              n.addEventListener("click", function () {
                e();
              });
            }
          },
          function () {
            const n = document.querySelector(`[id="${t}-text"]`);
            if (n !== null) {
              n.addEventListener("click", function () {
                e();
              });
            }
          }
        );
      };
      const Ct = function (t, e, n) {
        t.split(",").forEach(function (t) {
          Dt(t, e, n);
        });
        $t(t, "clickable");
      };
      const Et = function (t) {
        M.forEach(function (e) {
          e(t);
        });
      };
      const Mt = {
        getConfig: () => (0, f.c)().gantt,
        clear: O,
        setDateFormat: j,
        getDateFormat: U,
        enableInclusiveEndDates: H,
        endDatesAreInclusive: Z,
        enableTopAxis: G,
        topAxisEnabled: V,
        setAxisFormat: F,
        getAxisFormat: W,
        setTickInterval: B,
        getTickInterval: P,
        setTodayMarker: z,
        getTodayMarker: N,
        setAccTitle: f.s,
        getAccTitle: f.g,
        setDiagramTitle: f.q,
        getDiagramTitle: f.r,
        setDisplayMode: q,
        getDisplayMode: R,
        setAccDescription: f.b,
        getAccDescription: f.a,
        addSection: et,
        getSections: nt,
        getTasks: it,
        addTask: vt,
        findTaskById: Tt,
        addTaskOrg: xt,
        setIncludes: X,
        getIncludes: Q,
        setExcludes: K,
        getExcludes: J,
        setClickEvent: Ct,
        setLink: wt,
        getLinks: tt,
        bindFunctions: Et,
        parseDuration: ut,
        isInvalidDate: st,
        setWeekday: rt,
        getWeekday: at,
      };
      function Yt(t, e, n) {
        let i = true;
        while (i) {
          i = false;
          n.forEach(function (n) {
            const s = "^\\s*" + n + "\\s*$";
            const r = new RegExp(s);
            if (t[0].match(r)) {
              e[n] = true;
              t.shift(1);
              i = true;
            }
          });
        }
      }
      const At = function () {
        f.l.debug("Something is calling, setConf, remove the call");
      };
      const Lt = { monday: h.Ox9, tuesday: h.YDX, wednesday: h.EFj, thursday: h.Igq, friday: h.y2j, saturday: h.LqH, sunday: h.Zyz };
      const It = (t, e) => {
        let n = [...t].map(() => -Infinity);
        let i = [...t].sort((t, e) => t.startTime - e.startTime || t.order - e.order);
        let s = 0;
        for (const r of i) {
          for (let t = 0; t < n.length; t++) {
            if (r.startTime >= n[t]) {
              n[t] = r.endTime;
              r.order = t + e;
              if (t > s) {
                s = t;
              }
              break;
            }
          }
        }
        return s;
      };
      let Ot;
      const Ft = function (t, e, n, i) {
        const s = (0, f.c)().gantt;
        const a = (0, f.c)().securityLevel;
        let o;
        if (a === "sandbox") {
          o = (0, h.Ys)("#i" + e);
        }
        const c = a === "sandbox" ? (0, h.Ys)(o.nodes()[0].contentDocument.body) : (0, h.Ys)("body");
        const l = a === "sandbox" ? o.nodes()[0].contentDocument : document;
        const u = l.getElementById(e);
        Ot = u.parentElement.offsetWidth;
        if (Ot === void 0) {
          Ot = 1200;
        }
        if (s.useWidth !== void 0) {
          Ot = s.useWidth;
        }
        const d = i.db.getTasks();
        let y = [];
        for (const r of d) {
          y.push(r.type);
        }
        y = D(y);
        const m = {};
        let k = 2 * s.topPadding;
        if (i.db.getDisplayMode() === "compact" || s.displayMode === "compact") {
          const t = {};
          for (const n of d) {
            if (t[n.section] === void 0) {
              t[n.section] = [n];
            } else {
              t[n.section].push(n);
            }
          }
          let e = 0;
          for (const n of Object.keys(t)) {
            const i = It(t[n], e) + 1;
            e += i;
            k += i * (s.barHeight + s.barGap);
            m[n] = i;
          }
        } else {
          k += d.length * (s.barHeight + s.barGap);
          for (const t of y) {
            m[t] = d.filter((e) => e.type === t).length;
          }
        }
        u.setAttribute("viewBox", "0 0 " + Ot + " " + k);
        const p = c.select(`[id="${e}"]`);
        const g = (0, h.Xf)()
          .domain([
            (0, h.VV$)(d, function (t) {
              return t.startTime;
            }),
            (0, h.Fp7)(d, function (t) {
              return t.endTime;
            }),
          ])
          .rangeRound([0, Ot - s.leftPadding - s.rightPadding]);
        function b(t, e) {
          const n = t.startTime;
          const i = e.startTime;
          let s = 0;
          if (n > i) {
            s = 1;
          } else if (n < i) {
            s = -1;
          }
          return s;
        }
        d.sort(b);
        v(d, Ot, k);
        (0, f.i)(p, k, Ot, s.useMaxWidth);
        p.append("text")
          .text(i.db.getDiagramTitle())
          .attr("x", Ot / 2)
          .attr("y", s.titleTopMargin)
          .attr("class", "titleText");
        function v(t, e, n) {
          const r = s.barHeight;
          const a = r + s.barGap;
          const o = s.topPadding;
          const c = s.leftPadding;
          const l = (0, h.BYU)().domain([0, y.length]).range(["#00B9FA", "#F95002"]).interpolate(h.JHv);
          x(a, o, c, e, n, t, i.db.getExcludes(), i.db.getIncludes());
          _(c, o, e, n);
          T(t, a, o, c, r, l, e);
          w(a, o);
          $(c, o, e, n);
        }
        function T(t, n, r, a, o, c, l) {
          const u = [...new Set(t.map((t) => t.order))];
          const d = u.map((e) => t.find((t) => t.order === e));
          p.append("g")
            .selectAll("rect")
            .data(d)
            .enter()
            .append("rect")
            .attr("x", 0)
            .attr("y", function (t, e) {
              e = t.order;
              return e * n + r - 2;
            })
            .attr("width", function () {
              return l - s.rightPadding / 2;
            })
            .attr("height", n)
            .attr("class", function (t) {
              for (const [e, n] of y.entries()) {
                if (t.type === n) {
                  return "section section" + (e % s.numberSectionStyles);
                }
              }
              return "section section0";
            });
          const m = p.append("g").selectAll("rect").data(t).enter();
          const k = i.db.getLinks();
          m.append("rect")
            .attr("id", function (t) {
              return t.id;
            })
            .attr("rx", 3)
            .attr("ry", 3)
            .attr("x", function (t) {
              if (t.milestone) {
                return g(t.startTime) + a + 0.5 * (g(t.endTime) - g(t.startTime)) - 0.5 * o;
              }
              return g(t.startTime) + a;
            })
            .attr("y", function (t, e) {
              e = t.order;
              return e * n + r;
            })
            .attr("width", function (t) {
              if (t.milestone) {
                return o;
              }
              return g(t.renderEndTime || t.endTime) - g(t.startTime);
            })
            .attr("height", o)
            .attr("transform-origin", function (t, e) {
              e = t.order;
              return (g(t.startTime) + a + 0.5 * (g(t.endTime) - g(t.startTime))).toString() + "px " + (e * n + r + 0.5 * o).toString() + "px";
            })
            .attr("class", function (t) {
              const e = "task";
              let n = "";
              if (t.classes.length > 0) {
                n = t.classes.join(" ");
              }
              let i = 0;
              for (const [a, o] of y.entries()) {
                if (t.type === o) {
                  i = a % s.numberSectionStyles;
                }
              }
              let r = "";
              if (t.active) {
                if (t.crit) {
                  r += " activeCrit";
                } else {
                  r = " active";
                }
              } else if (t.done) {
                if (t.crit) {
                  r = " doneCrit";
                } else {
                  r = " done";
                }
              } else {
                if (t.crit) {
                  r += " crit";
                }
              }
              if (r.length === 0) {
                r = " task";
              }
              if (t.milestone) {
                r = " milestone " + r;
              }
              r += i;
              r += " " + n;
              return e + r;
            });
          m.append("text")
            .attr("id", function (t) {
              return t.id + "-text";
            })
            .text(function (t) {
              return t.task;
            })
            .attr("font-size", s.fontSize)
            .attr("x", function (t) {
              let e = g(t.startTime);
              let n = g(t.renderEndTime || t.endTime);
              if (t.milestone) {
                e += 0.5 * (g(t.endTime) - g(t.startTime)) - 0.5 * o;
              }
              if (t.milestone) {
                n = e + o;
              }
              const i = this.getBBox().width;
              if (i > n - e) {
                if (n + i + 1.5 * s.leftPadding > l) {
                  return e + a - 5;
                } else {
                  return n + a + 5;
                }
              } else {
                return (n - e) / 2 + e + a;
              }
            })
            .attr("y", function (t, e) {
              e = t.order;
              return e * n + s.barHeight / 2 + (s.fontSize / 2 - 2) + r;
            })
            .attr("text-height", o)
            .attr("class", function (t) {
              const e = g(t.startTime);
              let n = g(t.endTime);
              if (t.milestone) {
                n = e + o;
              }
              const i = this.getBBox().width;
              let r = "";
              if (t.classes.length > 0) {
                r = t.classes.join(" ");
              }
              let a = 0;
              for (const [o, l] of y.entries()) {
                if (t.type === l) {
                  a = o % s.numberSectionStyles;
                }
              }
              let c = "";
              if (t.active) {
                if (t.crit) {
                  c = "activeCritText" + a;
                } else {
                  c = "activeText" + a;
                }
              }
              if (t.done) {
                if (t.crit) {
                  c = c + " doneCritText" + a;
                } else {
                  c = c + " doneText" + a;
                }
              } else {
                if (t.crit) {
                  c = c + " critText" + a;
                }
              }
              if (t.milestone) {
                c += " milestoneText";
              }
              if (i > n - e) {
                if (n + i + 1.5 * s.leftPadding > l) {
                  return r + " taskTextOutsideLeft taskTextOutside" + a + " " + c;
                } else {
                  return r + " taskTextOutsideRight taskTextOutside" + a + " " + c + " width-" + i;
                }
              } else {
                return r + " taskText taskText" + a + " " + c + " width-" + i;
              }
            });
          const b = (0, f.c)().securityLevel;
          if (b === "sandbox") {
            let t;
            t = (0, h.Ys)("#i" + e);
            const n = t.nodes()[0].contentDocument;
            m.filter(function (t) {
              return k[t.id] !== void 0;
            }).each(function (t) {
              var e = n.querySelector("#" + t.id);
              var i = n.querySelector("#" + t.id + "-text");
              const s = e.parentNode;
              var r = n.createElement("a");
              r.setAttribute("xlink:href", k[t.id]);
              r.setAttribute("target", "_top");
              s.appendChild(r);
              r.appendChild(e);
              r.appendChild(i);
            });
          }
        }
        function x(t, e, n, a, o, c, l, u) {
          if (l.length === 0 && u.length === 0) {
            return;
          }
          let d;
          let h;
          for (const { startTime: i, endTime: s } of c) {
            if (d === void 0 || i < d) {
              d = i;
            }
            if (h === void 0 || s > h) {
              h = s;
            }
          }
          if (!d || !h) {
            return;
          }
          if (r()(h).diff(r()(d), "year") > 5) {
            f.l.warn(
              "The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days."
            );
            return;
          }
          const y = i.db.getDateFormat();
          const m = [];
          let k = null;
          let b = r()(d);
          while (b.valueOf() <= h) {
            if (i.db.isInvalidDate(b, y, l, u)) {
              if (!k) {
                k = { start: b, end: b };
              } else {
                k.end = b;
              }
            } else {
              if (k) {
                m.push(k);
                k = null;
              }
            }
            b = b.add(1, "d");
          }
          const v = p.append("g").selectAll("rect").data(m).enter();
          v.append("rect")
            .attr("id", function (t) {
              return "exclude-" + t.start.format("YYYY-MM-DD");
            })
            .attr("x", function (t) {
              return g(t.start) + n;
            })
            .attr("y", s.gridLineStartPadding)
            .attr("width", function (t) {
              const e = t.end.add(1, "day");
              return g(e) - g(t.start);
            })
            .attr("height", o - e - s.gridLineStartPadding)
            .attr("transform-origin", function (e, i) {
              return (g(e.start) + n + 0.5 * (g(e.end) - g(e.start))).toString() + "px " + (i * t + 0.5 * o).toString() + "px";
            })
            .attr("class", "exclude-range");
        }
        function _(t, e, n, r) {
          let a = (0, h.LLu)(g)
            .tickSize(-r + e + s.gridLineStartPadding)
            .tickFormat((0, h.i$Z)(i.db.getAxisFormat() || s.axisFormat || "%Y-%m-%d"));
          const o = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/;
          const c = o.exec(i.db.getTickInterval() || s.tickInterval);
          if (c !== null) {
            const t = c[1];
            const e = c[2];
            const n = i.db.getWeekday() || s.weekday;
            switch (e) {
              case "millisecond":
                a.ticks(h.U8T.every(t));
                break;
              case "second":
                a.ticks(h.S1K.every(t));
                break;
              case "minute":
                a.ticks(h.Z_i.every(t));
                break;
              case "hour":
                a.ticks(h.WQD.every(t));
                break;
              case "day":
                a.ticks(h.rr1.every(t));
                break;
              case "week":
                a.ticks(Lt[n].every(t));
                break;
              case "month":
                a.ticks(h.F0B.every(t));
                break;
            }
          }
          p.append("g")
            .attr("class", "grid")
            .attr("transform", "translate(" + t + ", " + (r - 50) + ")")
            .call(a)
            .selectAll("text")
            .style("text-anchor", "middle")
            .attr("fill", "#000")
            .attr("stroke", "none")
            .attr("font-size", 10)
            .attr("dy", "1em");
          if (i.db.topAxisEnabled() || s.topAxis) {
            let n = (0, h.F5q)(g)
              .tickSize(-r + e + s.gridLineStartPadding)
              .tickFormat((0, h.i$Z)(i.db.getAxisFormat() || s.axisFormat || "%Y-%m-%d"));
            if (c !== null) {
              const t = c[1];
              const e = c[2];
              const r = i.db.getWeekday() || s.weekday;
              switch (e) {
                case "millisecond":
                  n.ticks(h.U8T.every(t));
                  break;
                case "second":
                  n.ticks(h.S1K.every(t));
                  break;
                case "minute":
                  n.ticks(h.Z_i.every(t));
                  break;
                case "hour":
                  n.ticks(h.WQD.every(t));
                  break;
                case "day":
                  n.ticks(h.rr1.every(t));
                  break;
                case "week":
                  n.ticks(Lt[r].every(t));
                  break;
                case "month":
                  n.ticks(h.F0B.every(t));
                  break;
              }
            }
            p.append("g")
              .attr("class", "grid")
              .attr("transform", "translate(" + t + ", " + e + ")")
              .call(n)
              .selectAll("text")
              .style("text-anchor", "middle")
              .attr("fill", "#000")
              .attr("stroke", "none")
              .attr("font-size", 10);
          }
        }
        function w(t, e) {
          let n = 0;
          const i = Object.keys(m).map((t) => [t, m[t]]);
          p.append("g")
            .selectAll("text")
            .data(i)
            .enter()
            .append(function (t) {
              const e = t[0].split(f.e.lineBreakRegex);
              const n = -(e.length - 1) / 2;
              const i = l.createElementNS("http://www.w3.org/2000/svg", "text");
              i.setAttribute("dy", n + "em");
              for (const [s, r] of e.entries()) {
                const t = l.createElementNS("http://www.w3.org/2000/svg", "tspan");
                t.setAttribute("alignment-baseline", "central");
                t.setAttribute("x", "10");
                if (s > 0) {
                  t.setAttribute("dy", "1em");
                }
                t.textContent = r;
                i.appendChild(t);
              }
              return i;
            })
            .attr("x", 10)
            .attr("y", function (s, r) {
              if (r > 0) {
                for (let a = 0; a < r; a++) {
                  n += i[r - 1][1];
                  return (s[1] * t) / 2 + n * t + e;
                }
              } else {
                return (s[1] * t) / 2 + e;
              }
            })
            .attr("font-size", s.sectionFontSize)
            .attr("class", function (t) {
              for (const [e, n] of y.entries()) {
                if (t[0] === n) {
                  return "sectionTitle sectionTitle" + (e % s.numberSectionStyles);
                }
              }
              return "sectionTitle";
            });
        }
        function $(t, e, n, r) {
          const a = i.db.getTodayMarker();
          if (a === "off") {
            return;
          }
          const o = p.append("g").attr("class", "today");
          const c = new Date();
          const l = o.append("line");
          l.attr("x1", g(c) + t)
            .attr("x2", g(c) + t)
            .attr("y1", s.titleTopMargin)
            .attr("y2", r - s.titleTopMargin)
            .attr("class", "today");
          if (a !== "") {
            l.attr("style", a.replace(/,/g, ";"));
          }
        }
        function D(t) {
          const e = {};
          const n = [];
          for (let i = 0, s = t.length; i < s; ++i) {
            if (!Object.prototype.hasOwnProperty.call(e, t[i])) {
              e[t[i]] = true;
              n.push(t[i]);
            }
          }
          return n;
        }
      };
      const Wt = { setConf: At, draw: Ft };
      const Bt = (t) =>
        `\n  .mermaid-main-font {\n    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);\n  }\n\n  .exclude-range {\n    fill: ${t.excludeBkgColor};\n  }\n\n  .section {\n    stroke: none;\n    opacity: 0.2;\n  }\n\n  .section0 {\n    fill: ${t.sectionBkgColor};\n  }\n\n  .section2 {\n    fill: ${t.sectionBkgColor2};\n  }\n\n  .section1,\n  .section3 {\n    fill: ${t.altSectionBkgColor};\n    opacity: 0.2;\n  }\n\n  .sectionTitle0 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle1 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle2 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle3 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle {\n    text-anchor: start;\n    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);\n  }\n\n\n  /* Grid and axis */\n\n  .grid .tick {\n    stroke: ${t.gridColor};\n    opacity: 0.8;\n    shape-rendering: crispEdges;\n  }\n\n  .grid .tick text {\n    font-family: ${t.fontFamily};\n    fill: ${t.textColor};\n  }\n\n  .grid path {\n    stroke-width: 0;\n  }\n\n\n  /* Today line */\n\n  .today {\n    fill: none;\n    stroke: ${t.todayLineColor};\n    stroke-width: 2px;\n  }\n\n\n  /* Task styling */\n\n  /* Default task */\n\n  .task {\n    stroke-width: 2;\n  }\n\n  .taskText {\n    text-anchor: middle;\n    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);\n  }\n\n  .taskTextOutsideRight {\n    fill: ${t.taskTextDarkColor};\n    text-anchor: start;\n    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);\n  }\n\n  .taskTextOutsideLeft {\n    fill: ${t.taskTextDarkColor};\n    text-anchor: end;\n  }\n\n\n  /* Special case clickable */\n\n  .task.clickable {\n    cursor: pointer;\n  }\n\n  .taskText.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  .taskTextOutsideLeft.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  .taskTextOutsideRight.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n\n  /* Specific task settings for the sections*/\n\n  .taskText0,\n  .taskText1,\n  .taskText2,\n  .taskText3 {\n    fill: ${t.taskTextColor};\n  }\n\n  .task0,\n  .task1,\n  .task2,\n  .task3 {\n    fill: ${t.taskBkgColor};\n    stroke: ${t.taskBorderColor};\n  }\n\n  .taskTextOutside0,\n  .taskTextOutside2\n  {\n    fill: ${t.taskTextOutsideColor};\n  }\n\n  .taskTextOutside1,\n  .taskTextOutside3 {\n    fill: ${t.taskTextOutsideColor};\n  }\n\n\n  /* Active task */\n\n  .active0,\n  .active1,\n  .active2,\n  .active3 {\n    fill: ${t.activeTaskBkgColor};\n    stroke: ${t.activeTaskBorderColor};\n  }\n\n  .activeText0,\n  .activeText1,\n  .activeText2,\n  .activeText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n\n  /* Completed task */\n\n  .done0,\n  .done1,\n  .done2,\n  .done3 {\n    stroke: ${t.doneTaskBorderColor};\n    fill: ${t.doneTaskBkgColor};\n    stroke-width: 2;\n  }\n\n  .doneText0,\n  .doneText1,\n  .doneText2,\n  .doneText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n\n  /* Tasks on the critical line */\n\n  .crit0,\n  .crit1,\n  .crit2,\n  .crit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.critBkgColor};\n    stroke-width: 2;\n  }\n\n  .activeCrit0,\n  .activeCrit1,\n  .activeCrit2,\n  .activeCrit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.activeTaskBkgColor};\n    stroke-width: 2;\n  }\n\n  .doneCrit0,\n  .doneCrit1,\n  .doneCrit2,\n  .doneCrit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.doneTaskBkgColor};\n    stroke-width: 2;\n    cursor: pointer;\n    shape-rendering: crispEdges;\n  }\n\n  .milestone {\n    transform: rotate(45deg) scale(0.8,0.8);\n  }\n\n  .milestoneText {\n    font-style: italic;\n  }\n  .doneCritText0,\n  .doneCritText1,\n  .doneCritText2,\n  .doneCritText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n  .activeCritText0,\n  .activeCritText1,\n  .activeCritText2,\n  .activeCritText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n  .titleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.titleColor || t.textColor};\n    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);\n  }\n`;
      const Pt = Bt;
      const zt = { parser: p, db: Mt, renderer: Wt, styles: Pt };
    },
  },
]);
