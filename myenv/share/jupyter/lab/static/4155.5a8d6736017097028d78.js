(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [4155],
  {
    34155: (e) => {
      var t = (e.exports = {});
      var r;
      var n;
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          if (typeof setTimeout === "function") {
            r = setTimeout;
          } else {
            r = i;
          }
        } catch (e) {
          r = i;
        }
        try {
          if (typeof clearTimeout === "function") {
            n = clearTimeout;
          } else {
            n = o;
          }
        } catch (e) {
          n = o;
        }
      })();
      function u(e) {
        if (r === setTimeout) {
          return setTimeout(e, 0);
        }
        if ((r === i || !r) && setTimeout) {
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
      function c(e) {
        if (n === clearTimeout) {
          return clearTimeout(e);
        }
        if ((n === o || !n) && clearTimeout) {
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
      var a = [];
      var l = false;
      var s;
      var f = -1;
      function h() {
        if (!l || !s) {
          return;
        }
        l = false;
        if (s.length) {
          a = s.concat(a);
        } else {
          f = -1;
        }
        if (a.length) {
          p();
        }
      }
      function p() {
        if (l) {
          return;
        }
        var e = u(h);
        l = true;
        var t = a.length;
        while (t) {
          s = a;
          a = [];
          while (++f < t) {
            if (s) {
              s[f].run();
            }
          }
          f = -1;
          t = a.length;
        }
        s = null;
        l = false;
        c(e);
      }
      t.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var r = 1; r < arguments.length; r++) {
            t[r - 1] = arguments[r];
          }
        }
        a.push(new m(e, t));
        if (a.length === 1 && !l) {
          u(p);
        }
      };
      function m(e, t) {
        this.fun = e;
        this.array = t;
      }
      m.prototype.run = function () {
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
  },
]);
