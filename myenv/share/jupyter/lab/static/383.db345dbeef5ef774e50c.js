(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [383, 4155],
  {
    7049: (t, e, n) => {
      "use strict";
      n.d(e, { Dp: () => c, Z$: () => s, kJ: () => d, s7: () => o });
      const s = (t) => t[t.length - 1];
      const r = () => [];
      const i = (t) => t.slice();
      const o = (t, e) => {
        for (let n = 0; n < e.length; n++) {
          t.push(e[n]);
        }
      };
      const c = Array.from;
      const l = (t, e) => {
        for (let n = 0; n < t.length; n++) {
          if (!e(t[n], n, t)) {
            return false;
          }
        }
        return true;
      };
      const h = (t, e) => {
        for (let n = 0; n < t.length; n++) {
          if (e(t[n], n, t)) {
            return true;
          }
        }
        return false;
      };
      const a = (t, e) => t.length === e.length && l(t, (t, n) => t === e[n]);
      const u = (t) => t.reduce((t, e) => t.concat(e), []);
      const d = Array.isArray;
      const f = (t) => c(set.from(t));
      const g = (t, e) => {
        const n = set.create();
        const s = [];
        for (let r = 0; r < t.length; r++) {
          const i = t[r];
          const o = e(i);
          if (!n.has(o)) {
            n.add(o);
            s.push(i);
          }
        }
        return s;
      };
    },
    97027: (t, e, n) => {
      "use strict";
      n.d(e, { Hi: () => a, PP: () => r, gB: () => u });
      var s = n(59735);
      const r = (t, e, n = 0) => {
        try {
          for (; n < t.length; n++) {
            t[n](...e);
          }
        } finally {
          if (n < t.length) {
            r(t, e, n + 1);
          }
        }
      };
      const i = () => {};
      const o = (t) => t();
      const c = (t) => t;
      const l = (t, e) => t === e;
      const h = (t, e) =>
        t === e ||
        (t != null &&
          e != null &&
          t.constructor === e.constructor &&
          ((t instanceof Array && array.equalFlat(t, e)) || (typeof t === "object" && object.equalFlat(t, e))));
      const a = (t, e) => {
        if (t == null || e == null) {
          return l(t, e);
        }
        if (t.constructor !== e.constructor) {
          return false;
        }
        if (t === e) {
          return true;
        }
        switch (t.constructor) {
          case ArrayBuffer:
            t = new Uint8Array(t);
            e = new Uint8Array(e);
          case Uint8Array: {
            if (t.byteLength !== e.byteLength) {
              return false;
            }
            for (let n = 0; n < t.length; n++) {
              if (t[n] !== e[n]) {
                return false;
              }
            }
            break;
          }
          case Set: {
            if (t.size !== e.size) {
              return false;
            }
            for (const n of t) {
              if (!e.has(n)) {
                return false;
              }
            }
            break;
          }
          case Map: {
            if (t.size !== e.size) {
              return false;
            }
            for (const n of t.keys()) {
              if (!e.has(n) || !a(t.get(n), e.get(n))) {
                return false;
              }
            }
            break;
          }
          case Object:
            if (s.kE(t) !== s.kE(e)) {
              return false;
            }
            for (const n in t) {
              if (!s.l$(t, n) || !a(t[n], e[n])) {
                return false;
              }
            }
            break;
          case Array:
            if (t.length !== e.length) {
              return false;
            }
            for (let n = 0; n < t.length; n++) {
              if (!a(t[n], e[n])) {
                return false;
              }
            }
            break;
          default:
            return false;
        }
        return true;
      };
      const u = (t, e) => e.includes(t);
    },
    72382: (t, e, n) => {
      "use strict";
      n.d(e, { JG: () => r, UI: () => o, Ue: () => s, Yj: () => c, Yu: () => i });
      const s = () => new Map();
      const r = (t) => {
        const e = s();
        t.forEach((t, n) => {
          e.set(n, t);
        });
        return e;
      };
      const i = (t, e, n) => {
        let s = t.get(e);
        if (s === undefined) {
          t.set(e, (s = n()));
        }
        return s;
      };
      const o = (t, e) => {
        const n = [];
        for (const [s, r] of t) {
          n.push(e(r, s));
        }
        return n;
      };
      const c = (t, e) => {
        for (const [n, s] of t) {
          if (e(s, n)) {
            return true;
          }
        }
        return false;
      };
      const l = (t, e) => {
        for (const [n, s] of t) {
          if (!e(s, n)) {
            return false;
          }
        }
        return true;
      };
    },
    14247: (t, e, n) => {
      "use strict";
      n.d(e, { Fp: () => g, GR: () => b, GW: () => s, VV: () => f, Wn: () => i });
      const s = Math.floor;
      const r = Math.ceil;
      const i = Math.abs;
      const o = Math.imul;
      const c = Math.round;
      const l = Math.log10;
      const h = Math.log2;
      const a = Math.log;
      const u = Math.sqrt;
      const d = (t, e) => t + e;
      const f = (t, e) => (t < e ? t : e);
      const g = (t, e) => (t > e ? t : e);
      const p = Number.isNaN;
      const w = Math.pow;
      const m = (t) => Math.pow(10, t);
      const y = Math.sign;
      const b = (t) => (t !== 0 ? t < 0 : 1 / t < 0);
    },
    59735: (t, e, n) => {
      "use strict";
      n.d(e, { $m: () => f, kE: () => l, l$: () => d });
      const s = () => Object.create(null);
      const r = Object.assign;
      const i = Object.keys;
      const o = (t, e) => {
        for (const n in t) {
          e(t[n], n);
        }
      };
      const c = (t, e) => {
        const n = [];
        for (const s in t) {
          n.push(e(t[s], s));
        }
        return n;
      };
      const l = (t) => i(t).length;
      const h = (t, e) => {
        for (const n in t) {
          if (e(t[n], n)) {
            return true;
          }
        }
        return false;
      };
      const a = (t) => {
        for (const e in t) {
          return false;
        }
        return true;
      };
      const u = (t, e) => {
        for (const n in t) {
          if (!e(t[n], n)) {
            return false;
          }
        }
        return true;
      };
      const d = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
      const f = (t, e) => t === e || (l(t) === l(e) && u(t, (t, n) => (t !== undefined || d(e, n)) && e[n] === t));
    },
    58290: (t, e, n) => {
      "use strict";
      n.d(e, { y: () => o });
      var s = n(72382);
      var r = n(48307);
      var i = n(7049);
      class o {
        constructor() {
          this._observers = s.Ue();
        }
        on(t, e) {
          s.Yu(this._observers, t, r.Ue).add(e);
        }
        once(t, e) {
          const n = (...s) => {
            this.off(t, n);
            e(...s);
          };
          this.on(t, n);
        }
        off(t, e) {
          const n = this._observers.get(t);
          if (n !== undefined) {
            n.delete(e);
            if (n.size === 0) {
              this._observers.delete(t);
            }
          }
        }
        emit(t, e) {
          return i.Dp((this._observers.get(t) || s.Ue()).values()).forEach((t) => t(...e));
        }
        destroy() {
          this._observers = s.Ue();
        }
      }
    },
    48307: (t, e, n) => {
      "use strict";
      n.d(e, { Ue: () => s });
      const s = () => new Set();
      const r = (t) => Array.from(t);
      const i = (t) => t.values().next().value || undefined;
      const o = (t) => new Set(t);
    },
    20817: (t, e, n) => {
      "use strict";
      n.d(e, { ZG: () => r });
      const s = () => new Date();
      const r = Date.now;
      const i = (t) => {
        if (t < 6e4) {
          const e = metric.prefix(t, -1);
          return math.round(e.n * 100) / 100 + e.prefix + "s";
        }
        t = math.floor(t / 1e3);
        const e = t % 60;
        const n = math.floor(t / 60) % 60;
        const s = math.floor(t / 3600) % 24;
        const r = math.floor(t / 86400);
        if (r > 0) {
          return r + "d" + (s > 0 || n > 30 ? " " + (n > 30 ? s + 1 : s) + "h" : "");
        }
        if (s > 0) {
          return s + "h" + (n > 0 || e > 30 ? " " + (e > 30 ? n + 1 : n) + "min" : "");
        }
        return n + "min" + (e > 0 ? " " + e + "s" : "");
      };
    },
    34155: (t) => {
      var e = (t.exports = {});
      var n;
      var s;
      function r() {
        throw new Error("setTimeout has not been defined");
      }
      function i() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          if (typeof setTimeout === "function") {
            n = setTimeout;
          } else {
            n = r;
          }
        } catch (t) {
          n = r;
        }
        try {
          if (typeof clearTimeout === "function") {
            s = clearTimeout;
          } else {
            s = i;
          }
        } catch (t) {
          s = i;
        }
      })();
      function o(t) {
        if (n === setTimeout) {
          return setTimeout(t, 0);
        }
        if ((n === r || !n) && setTimeout) {
          n = setTimeout;
          return setTimeout(t, 0);
        }
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      function c(t) {
        if (s === clearTimeout) {
          return clearTimeout(t);
        }
        if ((s === i || !s) && clearTimeout) {
          s = clearTimeout;
          return clearTimeout(t);
        }
        try {
          return s(t);
        } catch (e) {
          try {
            return s.call(null, t);
          } catch (e) {
            return s.call(this, t);
          }
        }
      }
      var l = [];
      var h = false;
      var a;
      var u = -1;
      function d() {
        if (!h || !a) {
          return;
        }
        h = false;
        if (a.length) {
          l = a.concat(l);
        } else {
          u = -1;
        }
        if (l.length) {
          f();
        }
      }
      function f() {
        if (h) {
          return;
        }
        var t = o(d);
        h = true;
        var e = l.length;
        while (e) {
          a = l;
          l = [];
          while (++u < e) {
            if (a) {
              a[u].run();
            }
          }
          u = -1;
          e = l.length;
        }
        a = null;
        h = false;
        c(t);
      }
      e.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var n = 1; n < arguments.length; n++) {
            e[n - 1] = arguments[n];
          }
        }
        l.push(new g(t, e));
        if (l.length === 1 && !h) {
          o(f);
        }
      };
      function g(t, e) {
        this.fun = t;
        this.array = e;
      }
      g.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      e.title = "browser";
      e.browser = true;
      e.env = {};
      e.argv = [];
      e.version = "";
      e.versions = {};
      function p() {}
      e.on = p;
      e.addListener = p;
      e.once = p;
      e.off = p;
      e.removeListener = p;
      e.removeAllListeners = p;
      e.emit = p;
      e.prependListener = p;
      e.prependOnceListener = p;
      e.listeners = function (t) {
        return [];
      };
      e.binding = function (t) {
        throw new Error("process.binding is not supported");
      };
      e.cwd = function () {
        return "/";
      };
      e.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      };
      e.umask = function () {
        return 0;
      };
    },
    10383: (t, e, n) => {
      "use strict";
      n.r(e);
      n.d(e, {
        AbsolutePosition: () => to,
        AbstractConnector: () => qr,
        AbstractStruct: () => vl,
        AbstractType: () => xc,
        Array: () => qc,
        ContentAny: () => Jl,
        ContentBinary: () => Tl,
        ContentDeleted: () => Ml,
        ContentEmbed: () => Pl,
        ContentFormat: () => Fl,
        ContentJSON: () => jl,
        ContentString: () => zl,
        ContentType: () => eh,
        Doc: () => ai,
        GC: () => Ul,
        ID: () => $i,
        Item: () => ch,
        Map: () => Xc,
        PermanentUserData: () => Ki,
        RelativePosition: () => Zi,
        Snapshot: () => ao,
        Text: () => pl,
        Transaction: () => No,
        UndoManager: () => Yo,
        UpdateEncoderV1: () => wi,
        XmlElement: () => kl,
        XmlFragment: () => yl,
        XmlHook: () => El,
        XmlText: () => Dl,
        YArrayEvent: () => Hc,
        YEvent: () => wc,
        YMapEvent: () => Zc,
        YTextEvent: () => gl,
        YXmlEvent: () => Sl,
        applyUpdate: () => vi,
        applyUpdateV2: () => Ai,
        cleanupYTextFormatting: () => dl,
        compareIDs: () => Ji,
        compareRelativePositions: () => ho,
        convertUpdateFormatV1ToV2: () => gc,
        convertUpdateFormatV2ToV1: () => pc,
        createAbsolutePositionFromRelativePosition: () => lo,
        createDeleteSet: () => ri,
        createDeleteSetFromStructStore: () => ii,
        createDocFromSnapshot: () => So,
        createID: () => Wi,
        createRelativePositionFromJSON: () => Qi,
        createRelativePositionFromTypeIndex: () => so,
        createSnapshot: () => mo,
        decodeRelativePosition: () => co,
        decodeSnapshot: () => wo,
        decodeSnapshotV2: () => po,
        decodeStateVector: () => Mi,
        decodeUpdate: () => Xo,
        decodeUpdateV2: () => Qo,
        diffUpdate: () => hc,
        diffUpdateV2: () => lc,
        emptySnapshot: () => yo,
        encodeRelativePosition: () => io,
        encodeSnapshot: () => go,
        encodeSnapshotV2: () => fo,
        encodeStateAsUpdate: () => Ti,
        encodeStateAsUpdateV2: () => Ui,
        encodeStateVector: () => Ri,
        encodeStateVectorFromUpdate: () => sc,
        encodeStateVectorFromUpdateV2: () => nc,
        equalSnapshots: () => uo,
        findIndexSS: () => vo,
        findRootTypeKey: () => Yi,
        getItem: () => Uo,
        getState: () => Do,
        getTypeChildren: () => Ac,
        isDeleted: () => ti,
        isParentOf: () => Hi,
        iterateDeletedStructs: () => Xr,
        logType: () => qi,
        logUpdate: () => Ko,
        logUpdateV2: () => Zo,
        mergeUpdates: () => ec,
        mergeUpdatesV2: () => cc,
        parseUpdateMeta: () => ic,
        parseUpdateMetaV2: () => rc,
        readUpdate: () => Di,
        readUpdateV2: () => Ci,
        relativePositionToJSON: () => Xi,
        snapshot: () => bo,
        transact: () => Jo,
        tryGc: () => jo,
        typeListToArraySnapshot: () => Ic,
        typeMapGetSnapshot: () => Gc,
      });
      var s = n(58290);
      var r = n(7049);
      var i = n(14247);
      var o = n(72382);
      const c = String.fromCharCode;
      const l = String.fromCodePoint;
      const h = (t) => t.toLowerCase();
      const a = /^\s*/g;
      const u = (t) => t.replace(a, "");
      const d = /([A-Z])/g;
      const f = (t, e) => u(t.replace(d, (t) => `${e}${h(t)}`));
      const g = (t) => unescape(encodeURIComponent(t)).length;
      const p = (t) => {
        const e = unescape(encodeURIComponent(t));
        const n = e.length;
        const s = new Uint8Array(n);
        for (let r = 0; r < n; r++) {
          s[r] = e.codePointAt(r);
        }
        return s;
      };
      const w = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;
      const m = (t) => w.encode(t);
      const y = w ? m : p;
      const b = (t) => {
        let e = t.length;
        let n = "";
        let s = 0;
        while (e > 0) {
          const r = e < 1e4 ? e : 1e4;
          const i = t.subarray(s, s + r);
          s += r;
          n += String.fromCodePoint.apply(null, i);
          e -= r;
        }
        return decodeURIComponent(escape(n));
      };
      let k = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
      if (k && k.decode(new Uint8Array()).length === 1) {
        k = null;
      }
      const _ = (t) => k.decode(t);
      const S = null && (k ? _ : b);
      const E = (t, e, n, s = "") => t.slice(0, e) + s + t.slice(e + n);
      const C = (t) => (t === undefined ? null : t);
      class D {
        constructor() {
          this.map = new Map();
        }
        setItem(t, e) {
          this.map.set(t, e);
        }
        getItem(t) {
          return this.map.get(t);
        }
      }
      let A = new D();
      let v = true;
      try {
        if (typeof localStorage !== "undefined") {
          A = localStorage;
          v = false;
        }
      } catch (gh) {}
      const x = A;
      const U = (t) => v || addEventListener("storage", t);
      var T = n(97027);
      var I = n(34155);
      const M = typeof I !== "undefined" && I.release && /node|io\.js/.test(I.release.name);
      const O = typeof window !== "undefined" && typeof document !== "undefined" && !M;
      const L = typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
      let N;
      const R = [];
      const P = () => {
        if (N === undefined) {
          if (M) {
            N = o.Ue();
            const t = I.argv;
            let e = null;
            for (let n = 0; n < t.length; n++) {
              const s = t[n];
              if (s[0] === "-") {
                if (e !== null) {
                  N.set(e, "");
                }
                e = s;
              } else {
                if (e !== null) {
                  N.set(e, s);
                  e = null;
                } else {
                  R.push(s);
                }
              }
            }
            if (e !== null) {
              N.set(e, "");
            }
          } else if (typeof location === "object") {
            N = o.Ue();
            (location.search || "?")
              .slice(1)
              .split("&")
              .forEach((t) => {
                if (t.length !== 0) {
                  const [e, n] = t.split("=");
                  N.set(`--${f(e, "-")}`, n);
                  N.set(`-${f(e, "-")}`, n);
                }
              });
          } else {
            N = o.Ue();
          }
        }
        return N;
      };
      const V = (t) => P().has(t);
      const F = (t, e) => P().get(t) || e;
      const B = (t) => (M ? C(I.env[t.toUpperCase()]) : C(x.getItem(t)));
      const j = (t) => P().get("--" + t) || B(t);
      const $ = (t) => V("--" + t) || B(t) !== null;
      const J = $("production");
      const W = M && T.gB(I.env.FORCE_COLOR, ["true", "1", "2"]);
      const z =
        !V("no-colors") && (!M || I.stdout.isTTY || W) && (!M || V("color") || W || B("COLORTERM") !== null || (B("TERM") || "").includes("color"));
      const G = (t) => new Uint8Array(t);
      const Y = (t, e, n) => new Uint8Array(t, e, n);
      const H = (t) => new Uint8Array(t);
      const q = (t) => {
        let e = "";
        for (let n = 0; n < t.byteLength; n++) {
          e += c(t[n]);
        }
        return btoa(e);
      };
      const K = (t) => Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("base64");
      const Z = (t) => {
        const e = atob(t);
        const n = G(e.length);
        for (let s = 0; s < e.length; s++) {
          n[s] = e.charCodeAt(s);
        }
        return n;
      };
      const X = (t) => {
        const e = Buffer.from(t, "base64");
        return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      };
      const Q = O ? q : K;
      const tt = O ? Z : X;
      const et = (t) => {
        const e = G(t.byteLength);
        e.set(t);
        return e;
      };
      const nt = (t) => {
        const e = encoding.createEncoder();
        encoding.writeAny(e, t);
        return encoding.toUint8Array(e);
      };
      const st = (t) => decoding.readAny(decoding.createDecoder(t));
      const rt = 1;
      const it = 2;
      const ot = 4;
      const ct = 8;
      const lt = 16;
      const ht = 32;
      const at = 64;
      const ut = 128;
      const dt = 256;
      const ft = 512;
      const gt = 1024;
      const pt = 2048;
      const wt = 4096;
      const mt = 8192;
      const yt = 16384;
      const bt = 32768;
      const kt = 65536;
      const _t = 1 << 17;
      const St = 1 << 18;
      const Et = 1 << 19;
      const Ct = 1 << 20;
      const Dt = 1 << 21;
      const At = 1 << 22;
      const vt = 1 << 23;
      const xt = 1 << 24;
      const Ut = 1 << 25;
      const Tt = 1 << 26;
      const It = 1 << 27;
      const Mt = 1 << 28;
      const Ot = 1 << 29;
      const Lt = 1 << 30;
      const Nt = null && 1 << 31;
      const Rt = 0;
      const Pt = 1;
      const Vt = 3;
      const Ft = 7;
      const Bt = 15;
      const jt = 31;
      const $t = 63;
      const Jt = 127;
      const Wt = 255;
      const zt = 511;
      const Gt = 1023;
      const Yt = 2047;
      const Ht = 4095;
      const qt = 8191;
      const Kt = 16383;
      const Zt = 32767;
      const Xt = 65535;
      const Qt = _t - 1;
      const te = St - 1;
      const ee = Et - 1;
      const ne = Ct - 1;
      const se = Dt - 1;
      const re = At - 1;
      const ie = vt - 1;
      const oe = xt - 1;
      const ce = Ut - 1;
      const le = Tt - 1;
      const he = It - 1;
      const ae = Mt - 1;
      const ue = Ot - 1;
      const de = Lt - 1;
      const fe = 2147483647;
      const ge = 4294967295;
      const pe = Number.MAX_SAFE_INTEGER;
      const we = Number.MIN_SAFE_INTEGER;
      const me = null && 1 << 31;
      const ye = fe;
      const be = Number.isInteger || ((t) => typeof t === "number" && isFinite(t) && i.GW(t) === t);
      const ke = Number.isNaN;
      const _e = Number.parseInt;
      class Se {
        constructor() {
          this.cpos = 0;
          this.cbuf = new Uint8Array(100);
          this.bufs = [];
        }
      }
      const Ee = () => new Se();
      const Ce = (t) => {
        let e = t.cpos;
        for (let n = 0; n < t.bufs.length; n++) {
          e += t.bufs[n].length;
        }
        return e;
      };
      const De = (t) => {
        const e = new Uint8Array(Ce(t));
        let n = 0;
        for (let s = 0; s < t.bufs.length; s++) {
          const r = t.bufs[s];
          e.set(r, n);
          n += r.length;
        }
        e.set(Y(t.cbuf.buffer, 0, t.cpos), n);
        return e;
      };
      const Ae = (t, e) => {
        const n = t.cbuf.length;
        if (n - t.cpos < e) {
          t.bufs.push(Y(t.cbuf.buffer, 0, t.cpos));
          t.cbuf = new Uint8Array(i.Fp(n, e) * 2);
          t.cpos = 0;
        }
      };
      const ve = (t, e) => {
        const n = t.cbuf.length;
        if (t.cpos === n) {
          t.bufs.push(t.cbuf);
          t.cbuf = new Uint8Array(n * 2);
          t.cpos = 0;
        }
        t.cbuf[t.cpos++] = e;
      };
      const xe = (t, e, n) => {
        let s = null;
        for (let r = 0; r < t.bufs.length && s === null; r++) {
          const n = t.bufs[r];
          if (e < n.length) {
            s = n;
          } else {
            e -= n.length;
          }
        }
        if (s === null) {
          s = t.cbuf;
        }
        s[e] = n;
      };
      const Ue = ve;
      const Te = null && xe;
      const Ie = (t, e) => {
        ve(t, e & binary.BITS8);
        ve(t, (e >>> 8) & binary.BITS8);
      };
      const Me = (t, e, n) => {
        xe(t, e, n & binary.BITS8);
        xe(t, e + 1, (n >>> 8) & binary.BITS8);
      };
      const Oe = (t, e) => {
        for (let n = 0; n < 4; n++) {
          ve(t, e & binary.BITS8);
          e >>>= 8;
        }
      };
      const Le = (t, e) => {
        for (let n = 3; n >= 0; n--) {
          ve(t, (e >>> (8 * n)) & binary.BITS8);
        }
      };
      const Ne = (t, e, n) => {
        for (let s = 0; s < 4; s++) {
          xe(t, e + s, n & binary.BITS8);
          n >>>= 8;
        }
      };
      const Re = (t, e) => {
        while (e > Jt) {
          ve(t, ut | (Jt & e));
          e = i.GW(e / 128);
        }
        ve(t, Jt & e);
      };
      const Pe = (t, e) => {
        const n = i.GR(e);
        if (n) {
          e = -e;
        }
        ve(t, (e > $t ? ut : 0) | (n ? at : 0) | ($t & e));
        e = i.GW(e / 64);
        while (e > 0) {
          ve(t, (e > Jt ? ut : 0) | (Jt & e));
          e = i.GW(e / 128);
        }
      };
      const Ve = new Uint8Array(3e4);
      const Fe = Ve.length / 3;
      const Be = (t, e) => {
        if (e.length < Fe) {
          const n = w.encodeInto(e, Ve).written || 0;
          Re(t, n);
          for (let e = 0; e < n; e++) {
            ve(t, Ve[e]);
          }
        } else {
          ze(t, y(e));
        }
      };
      const je = (t, e) => {
        const n = unescape(encodeURIComponent(e));
        const s = n.length;
        Re(t, s);
        for (let r = 0; r < s; r++) {
          ve(t, n.codePointAt(r));
        }
      };
      const $e = w && w.encodeInto ? Be : je;
      const Je = (t, e) => We(t, De(e));
      const We = (t, e) => {
        const n = t.cbuf.length;
        const s = t.cpos;
        const r = i.VV(n - s, e.length);
        const o = e.length - r;
        t.cbuf.set(e.subarray(0, r), s);
        t.cpos += r;
        if (o > 0) {
          t.bufs.push(t.cbuf);
          t.cbuf = new Uint8Array(i.Fp(n * 2, o));
          t.cbuf.set(e.subarray(r));
          t.cpos = o;
        }
      };
      const ze = (t, e) => {
        Re(t, e.byteLength);
        We(t, e);
      };
      const Ge = (t, e) => {
        Ae(t, e);
        const n = new DataView(t.cbuf.buffer, t.cpos, e);
        t.cpos += e;
        return n;
      };
      const Ye = (t, e) => Ge(t, 4).setFloat32(0, e, false);
      const He = (t, e) => Ge(t, 8).setFloat64(0, e, false);
      const qe = (t, e) => Ge(t, 8).setBigInt64(0, e, false);
      const Ke = (t, e) => Ge(t, 8).setBigUint64(0, e, false);
      const Ze = new DataView(new ArrayBuffer(4));
      const Xe = (t) => {
        Ze.setFloat32(0, t);
        return Ze.getFloat32(0) === t;
      };
      const Qe = (t, e) => {
        switch (typeof e) {
          case "string":
            ve(t, 119);
            $e(t, e);
            break;
          case "number":
            if (be(e) && i.Wn(e) <= fe) {
              ve(t, 125);
              Pe(t, e);
            } else if (Xe(e)) {
              ve(t, 124);
              Ye(t, e);
            } else {
              ve(t, 123);
              He(t, e);
            }
            break;
          case "bigint":
            ve(t, 122);
            qe(t, e);
            break;
          case "object":
            if (e === null) {
              ve(t, 126);
            } else if (e instanceof Array) {
              ve(t, 117);
              Re(t, e.length);
              for (let n = 0; n < e.length; n++) {
                Qe(t, e[n]);
              }
            } else if (e instanceof Uint8Array) {
              ve(t, 116);
              ze(t, e);
            } else {
              ve(t, 118);
              const n = Object.keys(e);
              Re(t, n.length);
              for (let s = 0; s < n.length; s++) {
                const r = n[s];
                $e(t, r);
                Qe(t, e[r]);
              }
            }
            break;
          case "boolean":
            ve(t, e ? 120 : 121);
            break;
          default:
            ve(t, 127);
        }
      };
      class tn extends Se {
        constructor(t) {
          super();
          this.w = t;
          this.s = null;
          this.count = 0;
        }
        write(t) {
          if (this.s === t) {
            this.count++;
          } else {
            if (this.count > 0) {
              Re(this, this.count - 1);
            }
            this.count = 1;
            this.w(this, t);
            this.s = t;
          }
        }
      }
      class en extends (null && Se) {
        constructor(t) {
          super();
          this.s = t;
        }
        write(t) {
          Pe(this, t - this.s);
          this.s = t;
        }
      }
      class nn extends (null && Se) {
        constructor(t) {
          super();
          this.s = t;
          this.count = 0;
        }
        write(t) {
          if (this.s === t && this.count > 0) {
            this.count++;
          } else {
            if (this.count > 0) {
              Re(this, this.count - 1);
            }
            this.count = 1;
            Pe(this, t - this.s);
            this.s = t;
          }
        }
      }
      const sn = (t) => {
        if (t.count > 0) {
          Pe(t.encoder, t.count === 1 ? t.s : -t.s);
          if (t.count > 1) {
            Re(t.encoder, t.count - 2);
          }
        }
      };
      class rn {
        constructor() {
          this.encoder = new Se();
          this.s = 0;
          this.count = 0;
        }
        write(t) {
          if (this.s === t) {
            this.count++;
          } else {
            sn(this);
            this.count = 1;
            this.s = t;
          }
        }
        toUint8Array() {
          sn(this);
          return De(this.encoder);
        }
      }
      class on {
        constructor() {
          this.encoder = new Se();
          this.s = 0;
          this.count = 0;
        }
        write(t) {
          if (this.s + this.count === t) {
            this.count++;
          } else {
            sn(this);
            this.count = 1;
            this.s = t;
          }
        }
        toUint8Array() {
          sn(this);
          return De(this.encoder);
        }
      }
      const cn = (t) => {
        if (t.count > 0) {
          const e = t.diff * 2 + (t.count === 1 ? 0 : 1);
          Pe(t.encoder, e);
          if (t.count > 1) {
            Re(t.encoder, t.count - 2);
          }
        }
      };
      class ln {
        constructor() {
          this.encoder = new Se();
          this.s = 0;
          this.count = 0;
          this.diff = 0;
        }
        write(t) {
          if (this.diff === t - this.s) {
            this.s = t;
            this.count++;
          } else {
            cn(this);
            this.count = 1;
            this.diff = t - this.s;
            this.s = t;
          }
        }
        toUint8Array() {
          cn(this);
          return De(this.encoder);
        }
      }
      class hn {
        constructor() {
          this.sarr = [];
          this.s = "";
          this.lensE = new rn();
        }
        write(t) {
          this.s += t;
          if (this.s.length > 19) {
            this.sarr.push(this.s);
            this.s = "";
          }
          this.lensE.write(t.length);
        }
        toUint8Array() {
          const t = new Se();
          this.sarr.push(this.s);
          this.s = "";
          $e(t, this.sarr.join(""));
          We(t, this.lensE.toUint8Array());
          return De(t);
        }
      }
      const an = (t) => new Error(t);
      const un = () => {
        throw an("Method unimplemented");
      };
      const dn = () => {
        throw an("Unexpected case");
      };
      const fn = an("Unexpected end of array");
      const gn = an("Integer out of Range");
      class pn {
        constructor(t) {
          this.arr = t;
          this.pos = 0;
        }
      }
      const wn = (t) => new pn(t);
      const mn = (t) => t.pos !== t.arr.length;
      const yn = (t, e = t.pos) => {
        const n = wn(t.arr);
        n.pos = e;
        return n;
      };
      const bn = (t, e) => {
        const n = Y(t.arr.buffer, t.pos + t.arr.byteOffset, e);
        t.pos += e;
        return n;
      };
      const kn = (t) => bn(t, Tn(t));
      const _n = (t) => bn(t, t.arr.length - t.pos);
      const Sn = (t) => t.pos++;
      const En = (t) => t.arr[t.pos++];
      const Cn = (t) => {
        const e = t.arr[t.pos] + (t.arr[t.pos + 1] << 8);
        t.pos += 2;
        return e;
      };
      const Dn = (t) => {
        const e = (t.arr[t.pos] + (t.arr[t.pos + 1] << 8) + (t.arr[t.pos + 2] << 16) + (t.arr[t.pos + 3] << 24)) >>> 0;
        t.pos += 4;
        return e;
      };
      const An = (t) => {
        const e = (t.arr[t.pos + 3] + (t.arr[t.pos + 2] << 8) + (t.arr[t.pos + 1] << 16) + (t.arr[t.pos] << 24)) >>> 0;
        t.pos += 4;
        return e;
      };
      const vn = (t) => t.arr[t.pos];
      const xn = (t) => t.arr[t.pos] + (t.arr[t.pos + 1] << 8);
      const Un = (t) => (t.arr[t.pos] + (t.arr[t.pos + 1] << 8) + (t.arr[t.pos + 2] << 16) + (t.arr[t.pos + 3] << 24)) >>> 0;
      const Tn = (t) => {
        let e = 0;
        let n = 1;
        const s = t.arr.length;
        while (t.pos < s) {
          const s = t.arr[t.pos++];
          e = e + (s & Jt) * n;
          n *= 128;
          if (s < ut) {
            return e;
          }
          if (e > pe) {
            throw gn;
          }
        }
        throw fn;
      };
      const In = (t) => {
        let e = t.arr[t.pos++];
        let n = e & $t;
        let s = 64;
        const r = (e & at) > 0 ? -1 : 1;
        if ((e & ut) === 0) {
          return r * n;
        }
        const i = t.arr.length;
        while (t.pos < i) {
          e = t.arr[t.pos++];
          n = n + (e & Jt) * s;
          s *= 128;
          if (e < ut) {
            return r * n;
          }
          if (n > pe) {
            throw gn;
          }
        }
        throw fn;
      };
      const Mn = (t) => {
        const e = t.pos;
        const n = Tn(t);
        t.pos = e;
        return n;
      };
      const On = (t) => {
        const e = t.pos;
        const n = In(t);
        t.pos = e;
        return n;
      };
      const Ln = (t) => {
        let e = Tn(t);
        if (e === 0) {
          return "";
        } else {
          let n = String.fromCodePoint(En(t));
          if (--e < 100) {
            while (e--) {
              n += String.fromCodePoint(En(t));
            }
          } else {
            while (e > 0) {
              const s = e < 1e4 ? e : 1e4;
              const r = t.arr.subarray(t.pos, t.pos + s);
              t.pos += s;
              n += String.fromCodePoint.apply(null, r);
              e -= s;
            }
          }
          return decodeURIComponent(escape(n));
        }
      };
      const Nn = (t) => k.decode(kn(t));
      const Rn = k ? Nn : Ln;
      const Pn = (t) => {
        const e = t.pos;
        const n = Rn(t);
        t.pos = e;
        return n;
      };
      const Vn = (t, e) => {
        const n = new DataView(t.arr.buffer, t.arr.byteOffset + t.pos, e);
        t.pos += e;
        return n;
      };
      const Fn = (t) => Vn(t, 4).getFloat32(0, false);
      const Bn = (t) => Vn(t, 8).getFloat64(0, false);
      const jn = (t) => Vn(t, 8).getBigInt64(0, false);
      const $n = (t) => Vn(t, 8).getBigUint64(0, false);
      const Jn = [
        (t) => undefined,
        (t) => null,
        In,
        Fn,
        Bn,
        jn,
        (t) => false,
        (t) => true,
        Rn,
        (t) => {
          const e = Tn(t);
          const n = {};
          for (let s = 0; s < e; s++) {
            const e = Rn(t);
            n[e] = Wn(t);
          }
          return n;
        },
        (t) => {
          const e = Tn(t);
          const n = [];
          for (let s = 0; s < e; s++) {
            n.push(Wn(t));
          }
          return n;
        },
        kn,
      ];
      const Wn = (t) => Jn[127 - En(t)](t);
      class zn extends pn {
        constructor(t, e) {
          super(t);
          this.reader = e;
          this.s = null;
          this.count = 0;
        }
        read() {
          if (this.count === 0) {
            this.s = this.reader(this);
            if (mn(this)) {
              this.count = Tn(this) + 1;
            } else {
              this.count = -1;
            }
          }
          this.count--;
          return this.s;
        }
      }
      class Gn extends (null && pn) {
        constructor(t, e) {
          super(t);
          this.s = e;
        }
        read() {
          this.s += In(this);
          return this.s;
        }
      }
      class Yn extends (null && pn) {
        constructor(t, e) {
          super(t);
          this.s = e;
          this.count = 0;
        }
        read() {
          if (this.count === 0) {
            this.s += In(this);
            if (mn(this)) {
              this.count = Tn(this) + 1;
            } else {
              this.count = -1;
            }
          }
          this.count--;
          return this.s;
        }
      }
      class Hn extends pn {
        constructor(t) {
          super(t);
          this.s = 0;
          this.count = 0;
        }
        read() {
          if (this.count === 0) {
            this.s = In(this);
            const t = i.GR(this.s);
            this.count = 1;
            if (t) {
              this.s = -this.s;
              this.count = Tn(this) + 2;
            }
          }
          this.count--;
          return this.s;
        }
      }
      class qn extends (null && pn) {
        constructor(t) {
          super(t);
          this.s = 0;
          this.count = 0;
        }
        read() {
          if (this.count === 0) {
            this.s = In(this);
            const t = math.isNegativeZero(this.s);
            this.count = 1;
            if (t) {
              this.s = -this.s;
              this.count = Tn(this) + 2;
            }
          }
          this.count--;
          return this.s++;
        }
      }
      class Kn extends pn {
        constructor(t) {
          super(t);
          this.s = 0;
          this.count = 0;
          this.diff = 0;
        }
        read() {
          if (this.count === 0) {
            const t = In(this);
            const e = t & 1;
            this.diff = i.GW(t / 2);
            this.count = 1;
            if (e) {
              this.count = Tn(this) + 2;
            }
          }
          this.s += this.diff;
          this.count--;
          return this.s;
        }
      }
      class Zn {
        constructor(t) {
          this.decoder = new Hn(t);
          this.str = Rn(this.decoder);
          this.spos = 0;
        }
        read() {
          const t = this.spos + this.decoder.read();
          const e = this.str.slice(this.spos, t);
          this.spos = t;
          return e;
        }
      }
      const Xn = typeof window === "undefined" ? null : (typeof window.performance !== "undefined" && window.performance) || null;
      const Qn = typeof crypto === "undefined" ? null : crypto;
      const ts =
        Qn !== null
          ? (t) => {
              const e = new ArrayBuffer(t);
              const n = new Uint8Array(e);
              Qn.getRandomValues(n);
              return e;
            }
          : (t) => {
              const e = new ArrayBuffer(t);
              const n = new Uint8Array(e);
              for (let s = 0; s < t; s++) {
                n[s] = Math.ceil((Math.random() * 4294967295) >>> 0);
              }
              return e;
            };
      const es = Math.random;
      const ns = () => new Uint32Array(ts(4))[0];
      const ss = () => {
        const t = new Uint32Array(cryptoRandomBuffer(8));
        return (t[0] & binary.BITS21) * (binary.BITS32 + 1) + (t[1] >>> 0);
      };
      const rs = (t) => t[math.floor(es() * t.length)];
      const is = [1e7] + -1e3 + -4e3 + -8e3 + -1e11;
      const os = () => is.replace(/[018]/g, (t) => (t ^ (ns() & (15 >> (t / 4)))).toString(16));
      const cs = (t) => new Promise(t);
      const ls = (t) => new Promise(t);
      const hs = (t) => Promise.all(t);
      const as = (t) => Promise.reject(t);
      const us = (t) => Promise.resolve(t);
      const ds = (t) => Promise.resolve(t);
      const fs = (t, e, n = 10) =>
        cs((s, r) => {
          const i = time.getUnixTime();
          const o = t > 0;
          const c = () => {
            if (e()) {
              clearInterval(l);
              s();
            } else if (o) {
              if (time.getUnixTime() - i > t) {
                clearInterval(l);
                r(new Error("Timeout"));
              }
            }
          };
          const l = setInterval(c, n);
        });
      const gs = (t) => cs((e, n) => setTimeout(e, t));
      const ps = (t) => t instanceof Promise || (t && t.then && t.catch && t.finally);
      var ws = n(48307);
      const ms = Symbol;
      const ys = (t) => typeof t === "symbol";
      class bs {
        constructor(t, e) {
          this.left = t;
          this.right = e;
        }
      }
      const ks = (t, e) => new bs(t, e);
      const _s = (t, e) => new bs(e, t);
      const Ss = (t, e) => t.forEach((t) => e(t.left, t.right));
      const Es = (t, e) => t.map((t) => e(t.left, t.right));
      const Cs = typeof document !== "undefined" ? document : {};
      const Ds = (t) => Cs.createElement(t);
      const As = () => Cs.createDocumentFragment();
      const vs = (t) => Cs.createTextNode(t);
      const xs = typeof DOMParser !== "undefined" ? new DOMParser() : null;
      const Us = (t, e, n) => t.dispatchEvent(new CustomEvent(e, n));
      const Ts = (t, e) => {
        pair.forEach(e, (e, n) => {
          if (n === false) {
            t.removeAttribute(e);
          } else if (n === true) {
            t.setAttribute(e, "");
          } else {
            t.setAttribute(e, n);
          }
        });
        return t;
      };
      const Is = (t, e) => {
        e.forEach((e, n) => {
          t.setAttribute(n, e);
        });
        return t;
      };
      const Ms = (t) => {
        const e = As();
        for (let n = 0; n < t.length; n++) {
          Qs(e, t[n]);
        }
        return e;
      };
      const Os = (t, e) => {
        Qs(t, Ms(e));
        return t;
      };
      const Ls = (t) => t.remove();
      const Ns = (t, e, n) => t.addEventListener(e, n);
      const Rs = (t, e, n) => t.removeEventListener(e, n);
      const Ps = (t, e) => {
        pair.forEach(e, (e, n) => Ns(t, e, n));
        return t;
      };
      const Vs = (t, e) => {
        pair.forEach(e, (e, n) => Rs(t, e, n));
        return t;
      };
      const Fs = (t, e = [], n = []) => Os(Ts(Ds(t), e), n);
      const Bs = (t, e) => {
        const n = Ds("canvas");
        n.height = e;
        n.width = t;
        return n;
      };
      const js = null && vs;
      const $s = (t) => `${t.left}:${t.right};`;
      const Js = (t) => t.map($s).join("");
      const Ws = (t) => o.UI(t, (t, e) => `${e}:${t};`).join("");
      const zs = (t, e) => t.querySelector(e);
      const Gs = (t, e) => t.querySelectorAll(e);
      const Ys = (t) => Cs.getElementById(t);
      const Hs = (t) => xs.parseFromString(`<html><body>${t}</body></html>`, "text/html").body;
      const qs = (t) => Ms(Hs(t).childNodes);
      const Ks = (t) => Hs(t).firstElementChild;
      const Zs = (t, e) => t.replaceWith(e);
      const Xs = (t, e, n) => t.insertBefore(e, n);
      const Qs = (t, e) => t.appendChild(e);
      const tr = Cs.ELEMENT_NODE;
      const er = Cs.TEXT_NODE;
      const nr = Cs.CDATA_SECTION_NODE;
      const sr = Cs.COMMENT_NODE;
      const rr = Cs.DOCUMENT_NODE;
      const ir = Cs.DOCUMENT_TYPE_NODE;
      const or = Cs.DOCUMENT_FRAGMENT_NODE;
      const cr = (t, e) => t.nodeType === e;
      const lr = (t, e) => {
        let n = e.parentNode;
        while (n && n !== t) {
          n = n.parentNode;
        }
        return n === t;
      };
      var hr = n(20817);
      const ar = ms();
      const ur = ms();
      const dr = ms();
      const fr = ms();
      const gr = ms();
      const pr = ms();
      const wr = ms();
      const mr = ms();
      const yr = ms();
      const br = {
        [ar]: ks("font-weight", "bold"),
        [ur]: ks("font-weight", "normal"),
        [dr]: ks("color", "blue"),
        [gr]: ks("color", "green"),
        [fr]: ks("color", "grey"),
        [pr]: ks("color", "red"),
        [wr]: ks("color", "purple"),
        [mr]: ks("color", "orange"),
        [yr]: ks("color", "black"),
      };
      const kr = { [ar]: "[1m", [ur]: "[2m", [dr]: "[34m", [gr]: "[32m", [fr]: "[37m", [pr]: "[31m", [wr]: "[35m", [mr]: "[38;5;208m", [yr]: "[0m" };
      const _r = (t) => {
        const e = [];
        const n = [];
        const s = o.Ue();
        let r = [];
        let i = 0;
        for (; i < t.length; i++) {
          const r = t[i];
          const o = br[r];
          if (o !== undefined) {
            s.set(o.left, o.right);
          } else {
            if (r.constructor === String || r.constructor === Number) {
              const t = Ws(s);
              if (i > 0 || t.length > 0) {
                e.push("%c" + r);
                n.push(t);
              } else {
                e.push(r);
              }
            } else {
              break;
            }
          }
        }
        if (i > 0) {
          r = n;
          r.unshift(e.join(""));
        }
        for (; i < t.length; i++) {
          const e = t[i];
          if (!(e instanceof Symbol)) {
            r.push(e);
          }
        }
        return r;
      };
      const Sr = (t) => {
        const e = [];
        const n = [];
        let s = 0;
        for (; s < t.length; s++) {
          const n = t[s];
          const r = kr[n];
          if (r === undefined) {
            if (n.constructor === String || n.constructor === Number) {
              e.push(n);
            } else {
              break;
            }
          }
        }
        if (s > 0) {
          n.push(e.join(""));
        }
        for (; s < t.length; s++) {
          const e = t[s];
          if (!(e instanceof Symbol)) {
            if (e.constructor === Object) {
              n.push(JSON.stringify(e));
            } else {
              n.push(e);
            }
          }
        }
        return n;
      };
      const Er = (t) => {
        const e = [];
        const n = [];
        let s = 0;
        for (; s < t.length; s++) {
          const n = t[s];
          const r = kr[n];
          if (r !== undefined) {
            e.push(r);
          } else {
            if (n.constructor === String || n.constructor === Number) {
              e.push(n);
            } else {
              break;
            }
          }
        }
        if (s > 0) {
          e.push("[0m");
          n.push(e.join(""));
        }
        for (; s < t.length; s++) {
          const e = t[s];
          if (!(e instanceof Symbol)) {
            n.push(e);
          }
        }
        return n;
      };
      const Cr = z ? (M ? Er : _r) : Sr;
      const Dr = (...t) => {
        console.log(...Cr(t));
        Nr.forEach((e) => e.print(t));
      };
      const Ar = (...t) => {
        console.warn(...Cr(t));
        t.unshift(mr);
        Nr.forEach((e) => e.print(t));
      };
      const vr = (t) => {
        console.error(t);
        Nr.forEach((e) => e.printError(t));
      };
      const xr = (t, e) => {
        if (env.isBrowser) {
          console.log(
            "%c                      ",
            `font-size: ${e}px; background-size: contain; background-repeat: no-repeat; background-image: url(${t})`
          );
        }
        Nr.forEach((n) => n.printImg(t, e));
      };
      const Ur = (t, e) => xr(`data:image/gif;base64,${t}`, e);
      const Tr = (...t) => {
        console.group(...Cr(t));
        Nr.forEach((e) => e.group(t));
      };
      const Ir = (...t) => {
        console.groupCollapsed(...Cr(t));
        Nr.forEach((e) => e.groupCollapsed(t));
      };
      const Mr = () => {
        console.groupEnd();
        Nr.forEach((t) => t.groupEnd());
      };
      const Or = (t) => Nr.forEach((e) => e.printDom(t()));
      const Lr = (t, e) => xr(t.toDataURL(), e);
      const Nr = ws.Ue();
      const Rr = (t) => {
        const e = [];
        const n = new Map();
        let s = 0;
        for (; s < t.length; s++) {
          const r = t[s];
          const i = br[r];
          if (i !== undefined) {
            n.set(i.left, i.right);
          } else {
            if (r.constructor === String || r.constructor === Number) {
              const t = dom.element("span", [pair.create("style", dom.mapToStyleString(n))], [dom.text(r.toString())]);
              if (t.innerHTML === "") {
                t.innerHTML = "&nbsp;";
              }
              e.push(t);
            } else {
              break;
            }
          }
        }
        for (; s < t.length; s++) {
          let n = t[s];
          if (!(n instanceof Symbol)) {
            if (n.constructor !== String && n.constructor !== Number) {
              n = " " + json.stringify(n) + " ";
            }
            e.push(dom.element("span", [], [dom.text(n)]));
          }
        }
        return e;
      };
      const Pr = "font-family:monospace;border-bottom:1px solid #e2e2e2;padding:2px;";
      class Vr {
        constructor(t) {
          this.dom = t;
          this.ccontainer = this.dom;
          this.depth = 0;
          Nr.add(this);
        }
        group(t, e = false) {
          eventloop.enqueue(() => {
            const n = dom.element("span", [pair.create("hidden", e), pair.create("style", "color:grey;font-size:120%;")], [dom.text("▼")]);
            const s = dom.element("span", [pair.create("hidden", !e), pair.create("style", "color:grey;font-size:125%;")], [dom.text("▶")]);
            const r = dom.element("div", [pair.create("style", `${Pr};padding-left:${this.depth * 10}px`)], [n, s, dom.text(" ")].concat(Rr(t)));
            const i = dom.element("div", [pair.create("hidden", e)]);
            const o = dom.element("div", [], [r, i]);
            dom.append(this.ccontainer, [o]);
            this.ccontainer = i;
            this.depth++;
            dom.addEventListener(r, "click", (t) => {
              i.toggleAttribute("hidden");
              n.toggleAttribute("hidden");
              s.toggleAttribute("hidden");
            });
          });
        }
        groupCollapsed(t) {
          this.group(t, true);
        }
        groupEnd() {
          eventloop.enqueue(() => {
            if (this.depth > 0) {
              this.depth--;
              this.ccontainer = this.ccontainer.parentElement.parentElement;
            }
          });
        }
        print(t) {
          eventloop.enqueue(() => {
            dom.append(this.ccontainer, [dom.element("div", [pair.create("style", `${Pr};padding-left:${this.depth * 10}px`)], Rr(t))]);
          });
        }
        printError(t) {
          this.print([pr, ar, t.toString()]);
        }
        printImg(t, e) {
          eventloop.enqueue(() => {
            dom.append(this.ccontainer, [dom.element("img", [pair.create("src", t), pair.create("height", `${math.round(e * 1.5)}px`)])]);
          });
        }
        printDom(t) {
          eventloop.enqueue(() => {
            dom.append(this.ccontainer, [t]);
          });
        }
        destroy() {
          eventloop.enqueue(() => {
            Nr.delete(this);
          });
        }
      }
      const Fr = (t) => new Vr(t);
      const Br = [gr, wr, mr, dr];
      let jr = 0;
      let $r = hr.ZG();
      const Jr = (t) => {
        const e = Br[jr];
        const n = env.getVariable("log");
        const s = n !== null && (n === "*" || n === "true" || new RegExp(n, "gi").test(t));
        jr = (jr + 1) % Br.length;
        t += ": ";
        return !s
          ? func.nop
          : (...n) => {
              const s = time.getUnixTime();
              const r = s - $r;
              $r = s;
              Dr(e, t, yr, ...n.map((t) => (typeof t === "string" || typeof t === "symbol" ? t : JSON.stringify(t))), e, " +" + r + "ms");
            };
      };
      const Wr = (t, e) => ({
        [Symbol.iterator]() {
          return this;
        },
        next() {
          const n = t.next();
          return { value: n.done ? undefined : e(n.value), done: n.done };
        },
      });
      const zr = (t) => ({
        [Symbol.iterator]() {
          return this;
        },
        next: t,
      });
      const Gr = (t, e) =>
        zr(() => {
          let n;
          do {
            n = t.next();
          } while (!n.done && !e(n.value));
          return n;
        });
      const Yr = (t, e) =>
        zr(() => {
          const { done: n, value: s } = t.next();
          return { done: n, value: n ? undefined : e(s) };
        });
      var Hr = n(59735);
      class qr extends s.y {
        constructor(t, e) {
          super();
          this.doc = t;
          this.awareness = e;
        }
      }
      class Kr {
        constructor(t, e) {
          this.clock = t;
          this.len = e;
        }
      }
      class Zr {
        constructor() {
          this.clients = new Map();
        }
      }
      const Xr = (t, e, n) =>
        e.clients.forEach((e, s) => {
          const r = t.doc.store.clients.get(s);
          for (let i = 0; i < e.length; i++) {
            const s = e[i];
            Lo(t, r, s.clock, s.len, n);
          }
        });
      const Qr = (t, e) => {
        let n = 0;
        let s = t.length - 1;
        while (n <= s) {
          const r = i.GW((n + s) / 2);
          const o = t[r];
          const c = o.clock;
          if (c <= e) {
            if (e < c + o.len) {
              return r;
            }
            n = r + 1;
          } else {
            s = r - 1;
          }
        }
        return null;
      };
      const ti = (t, e) => {
        const n = t.clients.get(e.client);
        return n !== undefined && Qr(n, e.clock) !== null;
      };
      const ei = (t) => {
        t.clients.forEach((t) => {
          t.sort((t, e) => t.clock - e.clock);
          let e, n;
          for (e = 1, n = 1; e < t.length; e++) {
            const s = t[n - 1];
            const r = t[e];
            if (s.clock + s.len >= r.clock) {
              s.len = i.Fp(s.len, r.clock + r.len - s.clock);
            } else {
              if (n < e) {
                t[n] = r;
              }
              n++;
            }
          }
          t.length = n;
        });
      };
      const ni = (t) => {
        const e = new Zr();
        for (let n = 0; n < t.length; n++) {
          t[n].clients.forEach((s, i) => {
            if (!e.clients.has(i)) {
              const o = s.slice();
              for (let e = n + 1; e < t.length; e++) {
                r.s7(o, t[e].clients.get(i) || []);
              }
              e.clients.set(i, o);
            }
          });
        }
        ei(e);
        return e;
      };
      const si = (t, e, n, s) => {
        o.Yu(t.clients, e, () => []).push(new Kr(n, s));
      };
      const ri = () => new Zr();
      const ii = (t) => {
        const e = ri();
        t.clients.forEach((t, n) => {
          const s = [];
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            if (n.deleted) {
              const r = n.id.clock;
              let i = n.length;
              if (e + 1 < t.length) {
                for (let n = t[e + 1]; e + 1 < t.length && n.deleted; n = t[++e + 1]) {
                  i += n.length;
                }
              }
              s.push(new Kr(r, i));
            }
          }
          if (s.length > 0) {
            e.clients.set(n, s);
          }
        });
        return e;
      };
      const oi = (t, e) => {
        Re(t.restEncoder, e.clients.size);
        r.Dp(e.clients.entries())
          .sort((t, e) => e[0] - t[0])
          .forEach(([e, n]) => {
            t.resetDsCurVal();
            Re(t.restEncoder, e);
            const s = n.length;
            Re(t.restEncoder, s);
            for (let r = 0; r < s; r++) {
              const e = n[r];
              t.writeDsClock(e.clock);
              t.writeDsLen(e.len);
            }
          });
      };
      const ci = (t) => {
        const e = new Zr();
        const n = Tn(t.restDecoder);
        for (let s = 0; s < n; s++) {
          t.resetDsCurVal();
          const n = Tn(t.restDecoder);
          const s = Tn(t.restDecoder);
          if (s > 0) {
            const r = o.Yu(e.clients, n, () => []);
            for (let e = 0; e < s; e++) {
              r.push(new Kr(t.readDsClock(), t.readDsLen()));
            }
          }
        }
        return e;
      };
      const li = (t, e, n) => {
        const s = new Zr();
        const r = Tn(t.restDecoder);
        for (let i = 0; i < r; i++) {
          t.resetDsCurVal();
          const r = Tn(t.restDecoder);
          const i = Tn(t.restDecoder);
          const o = n.clients.get(r) || [];
          const c = Do(n, r);
          for (let n = 0; n < i; n++) {
            const n = t.readDsClock();
            const i = n + t.readDsLen();
            if (n < c) {
              if (c < i) {
                si(s, r, c, i - c);
              }
              let t = vo(o, n);
              let l = o[t];
              if (!l.deleted && l.id.clock < n) {
                o.splice(t + 1, 0, ih(e, l, n - l.id.clock));
                t++;
              }
              while (t < o.length) {
                l = o[t++];
                if (l.id.clock < i) {
                  if (!l.deleted) {
                    if (i < l.id.clock + l.length) {
                      o.splice(t, 0, ih(e, l, i - l.id.clock));
                    }
                    l.delete(e);
                  }
                } else {
                  break;
                }
              }
            } else {
              si(s, r, n, i - n);
            }
          }
        }
        if (s.clients.size > 0) {
          const t = new yi();
          Re(t.restEncoder, 0);
          oi(t, s);
          return t.toUint8Array();
        }
        return null;
      };
      const hi = ns;
      class ai extends s.y {
        constructor({
          guid: t = os(),
          collectionid: e = null,
          gc: n = true,
          gcFilter: s = () => true,
          meta: r = null,
          autoLoad: i = false,
          shouldLoad: o = true,
        } = {}) {
          super();
          this.gc = n;
          this.gcFilter = s;
          this.clientID = hi();
          this.guid = t;
          this.collectionid = e;
          this.share = new Map();
          this.store = new Eo();
          this._transaction = null;
          this._transactionCleanups = [];
          this.subdocs = new Set();
          this._item = null;
          this.shouldLoad = o;
          this.autoLoad = i;
          this.meta = r;
          this.isLoaded = false;
          this.isSynced = false;
          this.whenLoaded = cs((t) => {
            this.on("load", () => {
              this.isLoaded = true;
              t(this);
            });
          });
          const c = () =>
            cs((t) => {
              const e = (n) => {
                if (n === undefined || n === true) {
                  this.off("sync", e);
                  t();
                }
              };
              this.on("sync", e);
            });
          this.on("sync", (t) => {
            if (t === false && this.isSynced) {
              this.whenSynced = c();
            }
            this.isSynced = t === undefined || t === true;
            if (!this.isLoaded) {
              this.emit("load", []);
            }
          });
          this.whenSynced = c();
        }
        load() {
          const t = this._item;
          if (t !== null && !this.shouldLoad) {
            Jo(
              t.parent.doc,
              (t) => {
                t.subdocsLoaded.add(this);
              },
              null,
              true
            );
          }
          this.shouldLoad = true;
        }
        getSubdocs() {
          return this.subdocs;
        }
        getSubdocGuids() {
          return new Set(r.Dp(this.subdocs).map((t) => t.guid));
        }
        transact(t, e = null) {
          Jo(this, t, e);
        }
        get(t, e = xc) {
          const n = o.Yu(this.share, t, () => {
            const t = new e();
            t._integrate(this, null);
            return t;
          });
          const s = n.constructor;
          if (e !== xc && s !== e) {
            if (s === xc) {
              const s = new e();
              s._map = n._map;
              n._map.forEach((t) => {
                for (; t !== null; t = t.left) {
                  t.parent = s;
                }
              });
              s._start = n._start;
              for (let t = s._start; t !== null; t = t.right) {
                t.parent = s;
              }
              s._length = n._length;
              this.share.set(t, s);
              s._integrate(this, null);
              return s;
            } else {
              throw new Error(`Type with the name ${t} has already been defined with a different constructor`);
            }
          }
          return n;
        }
        getArray(t = "") {
          return this.get(t, qc);
        }
        getText(t = "") {
          return this.get(t, pl);
        }
        getMap(t = "") {
          return this.get(t, Xc);
        }
        getXmlFragment(t = "") {
          return this.get(t, yl);
        }
        toJSON() {
          const t = {};
          this.share.forEach((e, n) => {
            t[n] = e.toJSON();
          });
          return t;
        }
        destroy() {
          r.Dp(this.subdocs).forEach((t) => t.destroy());
          const t = this._item;
          if (t !== null) {
            this._item = null;
            const e = t.content;
            e.doc = new ai({ guid: this.guid, ...e.opts, shouldLoad: false });
            e.doc._item = t;
            Jo(
              t.parent.doc,
              (n) => {
                const s = e.doc;
                if (!t.deleted) {
                  n.subdocsAdded.add(s);
                }
                n.subdocsRemoved.add(this);
              },
              null,
              true
            );
          }
          this.emit("destroyed", [true]);
          this.emit("destroy", [this]);
          super.destroy();
        }
        on(t, e) {
          super.on(t, e);
        }
        off(t, e) {
          super.off(t, e);
        }
      }
      class ui {
        constructor(t) {
          this.restDecoder = t;
        }
        resetDsCurVal() {}
        readDsClock() {
          return Tn(this.restDecoder);
        }
        readDsLen() {
          return Tn(this.restDecoder);
        }
      }
      class di extends ui {
        readLeftID() {
          return Wi(Tn(this.restDecoder), Tn(this.restDecoder));
        }
        readRightID() {
          return Wi(Tn(this.restDecoder), Tn(this.restDecoder));
        }
        readClient() {
          return Tn(this.restDecoder);
        }
        readInfo() {
          return En(this.restDecoder);
        }
        readString() {
          return Rn(this.restDecoder);
        }
        readParentInfo() {
          return Tn(this.restDecoder) === 1;
        }
        readTypeRef() {
          return Tn(this.restDecoder);
        }
        readLen() {
          return Tn(this.restDecoder);
        }
        readAny() {
          return Wn(this.restDecoder);
        }
        readBuf() {
          return et(kn(this.restDecoder));
        }
        readJSON() {
          return JSON.parse(Rn(this.restDecoder));
        }
        readKey() {
          return Rn(this.restDecoder);
        }
      }
      class fi {
        constructor(t) {
          this.dsCurrVal = 0;
          this.restDecoder = t;
        }
        resetDsCurVal() {
          this.dsCurrVal = 0;
        }
        readDsClock() {
          this.dsCurrVal += Tn(this.restDecoder);
          return this.dsCurrVal;
        }
        readDsLen() {
          const t = Tn(this.restDecoder) + 1;
          this.dsCurrVal += t;
          return t;
        }
      }
      class gi extends fi {
        constructor(t) {
          super(t);
          this.keys = [];
          Tn(t);
          this.keyClockDecoder = new Kn(kn(t));
          this.clientDecoder = new Hn(kn(t));
          this.leftClockDecoder = new Kn(kn(t));
          this.rightClockDecoder = new Kn(kn(t));
          this.infoDecoder = new zn(kn(t), En);
          this.stringDecoder = new Zn(kn(t));
          this.parentInfoDecoder = new zn(kn(t), En);
          this.typeRefDecoder = new Hn(kn(t));
          this.lenDecoder = new Hn(kn(t));
        }
        readLeftID() {
          return new $i(this.clientDecoder.read(), this.leftClockDecoder.read());
        }
        readRightID() {
          return new $i(this.clientDecoder.read(), this.rightClockDecoder.read());
        }
        readClient() {
          return this.clientDecoder.read();
        }
        readInfo() {
          return this.infoDecoder.read();
        }
        readString() {
          return this.stringDecoder.read();
        }
        readParentInfo() {
          return this.parentInfoDecoder.read() === 1;
        }
        readTypeRef() {
          return this.typeRefDecoder.read();
        }
        readLen() {
          return this.lenDecoder.read();
        }
        readAny() {
          return Wn(this.restDecoder);
        }
        readBuf() {
          return kn(this.restDecoder);
        }
        readJSON() {
          return Wn(this.restDecoder);
        }
        readKey() {
          const t = this.keyClockDecoder.read();
          if (t < this.keys.length) {
            return this.keys[t];
          } else {
            const t = this.stringDecoder.read();
            this.keys.push(t);
            return t;
          }
        }
      }
      class pi {
        constructor() {
          this.restEncoder = Ee();
        }
        toUint8Array() {
          return De(this.restEncoder);
        }
        resetDsCurVal() {}
        writeDsClock(t) {
          Re(this.restEncoder, t);
        }
        writeDsLen(t) {
          Re(this.restEncoder, t);
        }
      }
      class wi extends pi {
        writeLeftID(t) {
          Re(this.restEncoder, t.client);
          Re(this.restEncoder, t.clock);
        }
        writeRightID(t) {
          Re(this.restEncoder, t.client);
          Re(this.restEncoder, t.clock);
        }
        writeClient(t) {
          Re(this.restEncoder, t);
        }
        writeInfo(t) {
          Ue(this.restEncoder, t);
        }
        writeString(t) {
          $e(this.restEncoder, t);
        }
        writeParentInfo(t) {
          Re(this.restEncoder, t ? 1 : 0);
        }
        writeTypeRef(t) {
          Re(this.restEncoder, t);
        }
        writeLen(t) {
          Re(this.restEncoder, t);
        }
        writeAny(t) {
          Qe(this.restEncoder, t);
        }
        writeBuf(t) {
          ze(this.restEncoder, t);
        }
        writeJSON(t) {
          $e(this.restEncoder, JSON.stringify(t));
        }
        writeKey(t) {
          $e(this.restEncoder, t);
        }
      }
      class mi {
        constructor() {
          this.restEncoder = Ee();
          this.dsCurrVal = 0;
        }
        toUint8Array() {
          return De(this.restEncoder);
        }
        resetDsCurVal() {
          this.dsCurrVal = 0;
        }
        writeDsClock(t) {
          const e = t - this.dsCurrVal;
          this.dsCurrVal = t;
          Re(this.restEncoder, e);
        }
        writeDsLen(t) {
          if (t === 0) {
            dn();
          }
          Re(this.restEncoder, t - 1);
          this.dsCurrVal += t;
        }
      }
      class yi extends mi {
        constructor() {
          super();
          this.keyMap = new Map();
          this.keyClock = 0;
          this.keyClockEncoder = new ln();
          this.clientEncoder = new rn();
          this.leftClockEncoder = new ln();
          this.rightClockEncoder = new ln();
          this.infoEncoder = new tn(Ue);
          this.stringEncoder = new hn();
          this.parentInfoEncoder = new tn(Ue);
          this.typeRefEncoder = new rn();
          this.lenEncoder = new rn();
        }
        toUint8Array() {
          const t = Ee();
          Re(t, 0);
          ze(t, this.keyClockEncoder.toUint8Array());
          ze(t, this.clientEncoder.toUint8Array());
          ze(t, this.leftClockEncoder.toUint8Array());
          ze(t, this.rightClockEncoder.toUint8Array());
          ze(t, De(this.infoEncoder));
          ze(t, this.stringEncoder.toUint8Array());
          ze(t, De(this.parentInfoEncoder));
          ze(t, this.typeRefEncoder.toUint8Array());
          ze(t, this.lenEncoder.toUint8Array());
          We(t, De(this.restEncoder));
          return De(t);
        }
        writeLeftID(t) {
          this.clientEncoder.write(t.client);
          this.leftClockEncoder.write(t.clock);
        }
        writeRightID(t) {
          this.clientEncoder.write(t.client);
          this.rightClockEncoder.write(t.clock);
        }
        writeClient(t) {
          this.clientEncoder.write(t);
        }
        writeInfo(t) {
          this.infoEncoder.write(t);
        }
        writeString(t) {
          this.stringEncoder.write(t);
        }
        writeParentInfo(t) {
          this.parentInfoEncoder.write(t ? 1 : 0);
        }
        writeTypeRef(t) {
          this.typeRefEncoder.write(t);
        }
        writeLen(t) {
          this.lenEncoder.write(t);
        }
        writeAny(t) {
          Qe(this.restEncoder, t);
        }
        writeBuf(t) {
          ze(this.restEncoder, t);
        }
        writeJSON(t) {
          Qe(this.restEncoder, t);
        }
        writeKey(t) {
          const e = this.keyMap.get(t);
          if (e === undefined) {
            this.keyClockEncoder.write(this.keyClock++);
            this.stringEncoder.write(t);
          } else {
            this.keyClockEncoder.write(e);
          }
        }
      }
      const bi = (t, e, n, s) => {
        s = i.Fp(s, e[0].id.clock);
        const r = vo(e, s);
        Re(t.restEncoder, e.length - r);
        t.writeClient(n);
        Re(t.restEncoder, s);
        const o = e[r];
        o.write(t, s - o.id.clock);
        for (let i = r + 1; i < e.length; i++) {
          e[i].write(t, 0);
        }
      };
      const ki = (t, e, n) => {
        const s = new Map();
        n.forEach((t, n) => {
          if (Do(e, n) > t) {
            s.set(n, t);
          }
        });
        Co(e).forEach((t, e) => {
          if (!n.has(e)) {
            s.set(e, 0);
          }
        });
        Re(t.restEncoder, s.size);
        r.Dp(s.entries())
          .sort((t, e) => e[0] - t[0])
          .forEach(([n, s]) => {
            bi(t, e.clients.get(n), n, s);
          });
      };
      const _i = (t, e) => {
        const n = o.Ue();
        const s = Tn(t.restDecoder);
        for (let r = 0; r < s; r++) {
          const s = Tn(t.restDecoder);
          const r = new Array(s);
          const i = t.readClient();
          let o = Tn(t.restDecoder);
          n.set(i, { i: 0, refs: r });
          for (let n = 0; n < s; n++) {
            const s = t.readInfo();
            switch (jt & s) {
              case 0: {
                const e = t.readLen();
                r[n] = new Ul(Wi(i, o), e);
                o += e;
                break;
              }
              case 10: {
                const e = Tn(t.restDecoder);
                r[n] = new uh(Wi(i, o), e);
                o += e;
                break;
              }
              default: {
                const c = (s & (at | ut)) === 0;
                const l = new ch(
                  Wi(i, o),
                  null,
                  (s & ut) === ut ? t.readLeftID() : null,
                  null,
                  (s & at) === at ? t.readRightID() : null,
                  c ? (t.readParentInfo() ? e.get(t.readString()) : t.readLeftID()) : null,
                  c && (s & ht) === ht ? t.readString() : null,
                  lh(t, s)
                );
                r[n] = l;
                o += l.length;
              }
            }
          }
        }
        return n;
      };
      const Si = (t, e, n) => {
        const s = [];
        let i = r.Dp(n.keys()).sort((t, e) => t - e);
        if (i.length === 0) {
          return null;
        }
        const c = () => {
          if (i.length === 0) {
            return null;
          }
          let t = n.get(i[i.length - 1]);
          while (t.refs.length === t.i) {
            i.pop();
            if (i.length > 0) {
              t = n.get(i[i.length - 1]);
            } else {
              return null;
            }
          }
          return t;
        };
        let l = c();
        if (l === null && s.length === 0) {
          return null;
        }
        const h = new Eo();
        const a = new Map();
        const u = (t, e) => {
          const n = a.get(t);
          if (n == null || n > e) {
            a.set(t, e);
          }
        };
        let d = l.refs[l.i++];
        const f = new Map();
        const g = () => {
          for (const t of s) {
            const e = t.id.client;
            const s = n.get(e);
            if (s) {
              s.i--;
              h.clients.set(e, s.refs.slice(s.i));
              n.delete(e);
              s.i = 0;
              s.refs = [];
            } else {
              h.clients.set(e, [t]);
            }
            i = i.filter((t) => t !== e);
          }
          s.length = 0;
        };
        while (true) {
          if (d.constructor !== uh) {
            const r = o.Yu(f, d.id.client, () => Do(e, d.id.client));
            const i = r - d.id.clock;
            if (i < 0) {
              s.push(d);
              u(d.id.client, d.id.clock - 1);
              g();
            } else {
              const r = d.getMissing(t, e);
              if (r !== null) {
                s.push(d);
                const t = n.get(r) || { refs: [], i: 0 };
                if (t.refs.length === t.i) {
                  u(r, Do(e, r));
                  g();
                } else {
                  d = t.refs[t.i++];
                  continue;
                }
              } else if (i === 0 || i < d.length) {
                d.integrate(t, i);
                f.set(d.id.client, d.id.clock + d.length);
              }
            }
          }
          if (s.length > 0) {
            d = s.pop();
          } else if (l !== null && l.i < l.refs.length) {
            d = l.refs[l.i++];
          } else {
            l = c();
            if (l === null) {
              break;
            } else {
              d = l.refs[l.i++];
            }
          }
        }
        if (h.clients.size > 0) {
          const t = new yi();
          ki(t, h, new Map());
          Re(t.restEncoder, 0);
          return { missing: a, update: t.toUint8Array() };
        }
        return null;
      };
      const Ei = (t, e) => ki(t, e.doc.store, e.beforeState);
      const Ci = (t, e, n, s = new gi(t)) =>
        Jo(
          e,
          (t) => {
            t.local = false;
            let e = false;
            const n = t.doc;
            const r = n.store;
            const i = _i(s, n);
            const o = Si(t, r, i);
            const c = r.pendingStructs;
            if (c) {
              for (const [t, n] of c.missing) {
                if (n < Do(r, t)) {
                  e = true;
                  break;
                }
              }
              if (o) {
                for (const [t, e] of o.missing) {
                  const n = c.missing.get(t);
                  if (n == null || n > e) {
                    c.missing.set(t, e);
                  }
                }
                c.update = cc([c.update, o.update]);
              }
            } else {
              r.pendingStructs = o;
            }
            const l = li(s, t, r);
            if (r.pendingDs) {
              const e = new gi(wn(r.pendingDs));
              Tn(e.restDecoder);
              const n = li(e, t, r);
              if (l && n) {
                r.pendingDs = cc([l, n]);
              } else {
                r.pendingDs = l || n;
              }
            } else {
              r.pendingDs = l;
            }
            if (e) {
              const e = r.pendingStructs.update;
              r.pendingStructs = null;
              Ai(t.doc, e);
            }
          },
          n,
          false
        );
      const Di = (t, e, n) => Ci(t, e, n, new di(t));
      const Ai = (t, e, n, s = gi) => {
        const r = wn(e);
        Ci(r, t, n, new s(r));
      };
      const vi = (t, e, n) => Ai(t, e, n, di);
      const xi = (t, e, n = new Map()) => {
        ki(t, e.store, n);
        oi(t, ii(e.store));
      };
      const Ui = (t, e = new Uint8Array([0]), n = new yi()) => {
        const s = Mi(e);
        xi(n, t, s);
        const r = [n.toUint8Array()];
        if (t.store.pendingDs) {
          r.push(t.store.pendingDs);
        }
        if (t.store.pendingStructs) {
          r.push(lc(t.store.pendingStructs.update, e));
        }
        if (r.length > 1) {
          if (n.constructor === wi) {
            return ec(r.map((t, e) => (e === 0 ? t : pc(t))));
          } else if (n.constructor === yi) {
            return cc(r);
          }
        }
        return r[0];
      };
      const Ti = (t, e) => Ui(t, e, new wi());
      const Ii = (t) => {
        const e = new Map();
        const n = Tn(t.restDecoder);
        for (let s = 0; s < n; s++) {
          const n = Tn(t.restDecoder);
          const s = Tn(t.restDecoder);
          e.set(n, s);
        }
        return e;
      };
      const Mi = (t) => Ii(new ui(wn(t)));
      const Oi = (t, e) => {
        Re(t.restEncoder, e.size);
        r.Dp(e.entries())
          .sort((t, e) => e[0] - t[0])
          .forEach(([e, n]) => {
            Re(t.restEncoder, e);
            Re(t.restEncoder, n);
          });
        return t;
      };
      const Li = (t, e) => Oi(t, Co(e.store));
      const Ni = (t, e = new mi()) => {
        if (t instanceof Map) {
          Oi(e, t);
        } else {
          Li(e, t);
        }
        return e.toUint8Array();
      };
      const Ri = (t) => Ni(t, new pi());
      class Pi {
        constructor() {
          this.l = [];
        }
      }
      const Vi = () => new Pi();
      const Fi = (t, e) => t.l.push(e);
      const Bi = (t, e) => {
        const n = t.l;
        const s = n.length;
        t.l = n.filter((t) => e !== t);
        if (s === t.l.length) {
          console.error("[yjs] Tried to remove event handler that doesn't exist.");
        }
      };
      const ji = (t, e, n) => T.PP(t.l, [e, n]);
      class $i {
        constructor(t, e) {
          this.client = t;
          this.clock = e;
        }
      }
      const Ji = (t, e) => t === e || (t !== null && e !== null && t.client === e.client && t.clock === e.clock);
      const Wi = (t, e) => new $i(t, e);
      const zi = (t, e) => {
        Re(t, e.client);
        Re(t, e.clock);
      };
      const Gi = (t) => Wi(Tn(t), Tn(t));
      const Yi = (t) => {
        for (const [e, n] of t.doc.share.entries()) {
          if (n === t) {
            return e;
          }
        }
        throw dn();
      };
      const Hi = (t, e) => {
        while (e !== null) {
          if (e.parent === t) {
            return true;
          }
          e = e.parent._item;
        }
        return false;
      };
      const qi = (t) => {
        const e = [];
        let n = t._start;
        while (n) {
          e.push(n);
          n = n.right;
        }
        console.log("Children: ", e);
        console.log(
          "Children content: ",
          e.filter((t) => !t.deleted).map((t) => t.content)
        );
      };
      class Ki {
        constructor(t, e = t.getMap("users")) {
          const n = new Map();
          this.yusers = e;
          this.doc = t;
          this.clients = new Map();
          this.dss = n;
          const s = (t, e) => {
            const n = t.get("ds");
            const s = t.get("ids");
            const r = (t) => this.clients.set(t, e);
            n.observe((t) => {
              t.changes.added.forEach((t) => {
                t.content.getContent().forEach((t) => {
                  if (t instanceof Uint8Array) {
                    this.dss.set(e, ni([this.dss.get(e) || ri(), ci(new ui(wn(t)))]));
                  }
                });
              });
            });
            this.dss.set(e, ni(n.map((t) => ci(new ui(wn(t))))));
            s.observe((t) => t.changes.added.forEach((t) => t.content.getContent().forEach(r)));
            s.forEach(r);
          };
          e.observe((t) => {
            t.keysChanged.forEach((t) => s(e.get(t), t));
          });
          e.forEach(s);
        }
        setUserMapping(t, e, n, { filter: s = () => true } = {}) {
          const r = this.yusers;
          let i = r.get(n);
          if (!i) {
            i = new Xc();
            i.set("ids", new qc());
            i.set("ds", new qc());
            r.set(n, i);
          }
          i.get("ids").push([e]);
          r.observe((t) => {
            setTimeout(() => {
              const t = r.get(n);
              if (t !== i) {
                i = t;
                this.clients.forEach((t, e) => {
                  if (n === t) {
                    i.get("ids").push([e]);
                  }
                });
                const e = new pi();
                const s = this.dss.get(n);
                if (s) {
                  oi(e, s);
                  i.get("ds").push([e.toUint8Array()]);
                }
              }
            }, 0);
          });
          t.on("afterTransaction", (t) => {
            setTimeout(() => {
              const e = i.get("ds");
              const n = t.deleteSet;
              if (t.local && n.clients.size > 0 && s(t, n)) {
                const t = new pi();
                oi(t, n);
                e.push([t.toUint8Array()]);
              }
            });
          });
        }
        getUserByClientId(t) {
          return this.clients.get(t) || null;
        }
        getUserByDeletedId(t) {
          for (const [e, n] of this.dss.entries()) {
            if (ti(n, t)) {
              return e;
            }
          }
          return null;
        }
      }
      class Zi {
        constructor(t, e, n, s = 0) {
          this.type = t;
          this.tname = e;
          this.item = n;
          this.assoc = s;
        }
      }
      const Xi = (t) => {
        const e = {};
        if (t.type) {
          e.type = t.type;
        }
        if (t.tname) {
          e.tname = t.tname;
        }
        if (t.item) {
          e.item = t.item;
        }
        if (t.assoc != null) {
          e.assoc = t.assoc;
        }
        return e;
      };
      const Qi = (t) =>
        new Zi(
          t.type == null ? null : Wi(t.type.client, t.type.clock),
          t.tname || null,
          t.item == null ? null : Wi(t.item.client, t.item.clock),
          t.assoc == null ? 0 : t.assoc
        );
      class to {
        constructor(t, e, n = 0) {
          this.type = t;
          this.index = e;
          this.assoc = n;
        }
      }
      const eo = (t, e, n = 0) => new to(t, e, n);
      const no = (t, e, n) => {
        let s = null;
        let r = null;
        if (t._item === null) {
          r = Yi(t);
        } else {
          s = Wi(t._item.id.client, t._item.id.clock);
        }
        return new Zi(s, r, e, n);
      };
      const so = (t, e, n = 0) => {
        let s = t._start;
        if (n < 0) {
          if (e === 0) {
            return no(t, null, n);
          }
          e--;
        }
        while (s !== null) {
          if (!s.deleted && s.countable) {
            if (s.length > e) {
              return no(t, Wi(s.id.client, s.id.clock + e), n);
            }
            e -= s.length;
          }
          if (s.right === null && n < 0) {
            return no(t, s.lastId, n);
          }
          s = s.right;
        }
        return no(t, null, n);
      };
      const ro = (t, e) => {
        const { type: n, tname: s, item: r, assoc: i } = e;
        if (r !== null) {
          Re(t, 0);
          zi(t, r);
        } else if (s !== null) {
          Ue(t, 1);
          $e(t, s);
        } else if (n !== null) {
          Ue(t, 2);
          zi(t, n);
        } else {
          throw dn();
        }
        Pe(t, i);
        return t;
      };
      const io = (t) => {
        const e = Ee();
        ro(e, t);
        return De(e);
      };
      const oo = (t) => {
        let e = null;
        let n = null;
        let s = null;
        switch (Tn(t)) {
          case 0:
            s = Gi(t);
            break;
          case 1:
            n = Rn(t);
            break;
          case 2: {
            e = Gi(t);
          }
        }
        const r = mn(t) ? In(t) : 0;
        return new Zi(e, n, s, r);
      };
      const co = (t) => oo(wn(t));
      const lo = (t, e) => {
        const n = e.store;
        const s = t.item;
        const r = t.type;
        const i = t.tname;
        const o = t.assoc;
        let c = null;
        let l = 0;
        if (s !== null) {
          if (Do(n, s.client) <= s.clock) {
            return null;
          }
          const t = sh(n, s);
          const e = t.item;
          if (!(e instanceof ch)) {
            return null;
          }
          c = e.parent;
          if (c._item === null || !c._item.deleted) {
            l = e.deleted || !e.countable ? 0 : t.diff + (o >= 0 ? 0 : 1);
            let n = e.left;
            while (n !== null) {
              if (!n.deleted && n.countable) {
                l += n.length;
              }
              n = n.left;
            }
          }
        } else {
          if (i !== null) {
            c = e.get(i);
          } else if (r !== null) {
            if (Do(n, r.client) <= r.clock) {
              return null;
            }
            const { item: t } = sh(n, r);
            if (t instanceof ch && t.content instanceof eh) {
              c = t.content.type;
            } else {
              return null;
            }
          } else {
            throw dn();
          }
          if (o >= 0) {
            l = c._length;
          } else {
            l = 0;
          }
        }
        return eo(c, l, t.assoc);
      };
      const ho = (t, e) =>
        t === e || (t !== null && e !== null && t.tname === e.tname && Ji(t.item, e.item) && Ji(t.type, e.type) && t.assoc === e.assoc);
      class ao {
        constructor(t, e) {
          this.ds = t;
          this.sv = e;
        }
      }
      const uo = (t, e) => {
        const n = t.ds.clients;
        const s = e.ds.clients;
        const r = t.sv;
        const i = e.sv;
        if (r.size !== i.size || n.size !== s.size) {
          return false;
        }
        for (const [o, c] of r.entries()) {
          if (i.get(o) !== c) {
            return false;
          }
        }
        for (const [o, c] of n.entries()) {
          const t = s.get(o) || [];
          if (c.length !== t.length) {
            return false;
          }
          for (let e = 0; e < c.length; e++) {
            const n = c[e];
            const s = t[e];
            if (n.clock !== s.clock || n.len !== s.len) {
              return false;
            }
          }
        }
        return true;
      };
      const fo = (t, e = new mi()) => {
        oi(e, t.ds);
        Oi(e, t.sv);
        return e.toUint8Array();
      };
      const go = (t) => fo(t, new pi());
      const po = (t, e = new fi(wn(t))) => new ao(ci(e), Ii(e));
      const wo = (t) => po(t, new ui(wn(t)));
      const mo = (t, e) => new ao(t, e);
      const yo = mo(ri(), new Map());
      const bo = (t) => mo(ii(t.store), Co(t.store));
      const ko = (t, e) => (e === undefined ? !t.deleted : e.sv.has(t.id.client) && (e.sv.get(t.id.client) || 0) > t.id.clock && !ti(e.ds, t.id));
      const _o = (t, e) => {
        const n = o.Yu(t.meta, _o, ws.Ue);
        const s = t.doc.store;
        if (!n.has(e)) {
          e.sv.forEach((e, n) => {
            if (e < Do(s, n)) {
              Io(t, Wi(n, e));
            }
          });
          Xr(t, e.ds, (t) => {});
          n.add(e);
        }
      };
      const So = (t, e, n = new ai()) => {
        if (t.gc) {
          throw new Error("originDoc must not be garbage collected");
        }
        const { sv: s, ds: r } = e;
        const i = new yi();
        t.transact((e) => {
          let n = 0;
          s.forEach((t) => {
            if (t > 0) {
              n++;
            }
          });
          Re(i.restEncoder, n);
          for (const [r, o] of s) {
            if (o === 0) {
              continue;
            }
            if (o < Do(t.store, r)) {
              Io(e, Wi(r, o));
            }
            const n = t.store.clients.get(r) || [];
            const s = vo(n, o - 1);
            Re(i.restEncoder, s + 1);
            i.writeClient(r);
            Re(i.restEncoder, 0);
            for (let t = 0; t <= s; t++) {
              n[t].write(i, 0);
            }
          }
          oi(i, r);
        });
        Ai(n, i.toUint8Array(), "snapshot");
        return n;
      };
      class Eo {
        constructor() {
          this.clients = new Map();
          this.pendingStructs = null;
          this.pendingDs = null;
        }
      }
      const Co = (t) => {
        const e = new Map();
        t.clients.forEach((t, n) => {
          const s = t[t.length - 1];
          e.set(n, s.id.clock + s.length);
        });
        return e;
      };
      const Do = (t, e) => {
        const n = t.clients.get(e);
        if (n === undefined) {
          return 0;
        }
        const s = n[n.length - 1];
        return s.id.clock + s.length;
      };
      const Ao = (t, e) => {
        let n = t.clients.get(e.id.client);
        if (n === undefined) {
          n = [];
          t.clients.set(e.id.client, n);
        } else {
          const t = n[n.length - 1];
          if (t.id.clock + t.length !== e.id.clock) {
            throw dn();
          }
        }
        n.push(e);
      };
      const vo = (t, e) => {
        let n = 0;
        let s = t.length - 1;
        let r = t[s];
        let o = r.id.clock;
        if (o === e) {
          return s;
        }
        let c = i.GW((e / (o + r.length - 1)) * s);
        while (n <= s) {
          r = t[c];
          o = r.id.clock;
          if (o <= e) {
            if (e < o + r.length) {
              return c;
            }
            n = c + 1;
          } else {
            s = c - 1;
          }
          c = i.GW((n + s) / 2);
        }
        throw dn();
      };
      const xo = (t, e) => {
        const n = t.clients.get(e.client);
        return n[vo(n, e.clock)];
      };
      const Uo = xo;
      const To = (t, e, n) => {
        const s = vo(e, n);
        const r = e[s];
        if (r.id.clock < n && r instanceof ch) {
          e.splice(s + 1, 0, ih(t, r, n - r.id.clock));
          return s + 1;
        }
        return s;
      };
      const Io = (t, e) => {
        const n = t.doc.store.clients.get(e.client);
        return n[To(t, n, e.clock)];
      };
      const Mo = (t, e, n) => {
        const s = e.clients.get(n.client);
        const r = vo(s, n.clock);
        const i = s[r];
        if (n.clock !== i.id.clock + i.length - 1 && i.constructor !== Ul) {
          s.splice(r + 1, 0, ih(t, i, n.clock - i.id.clock + 1));
        }
        return i;
      };
      const Oo = (t, e, n) => {
        const s = t.clients.get(e.id.client);
        s[vo(s, e.id.clock)] = n;
      };
      const Lo = (t, e, n, s, r) => {
        if (s === 0) {
          return;
        }
        const i = n + s;
        let o = To(t, e, n);
        let c;
        do {
          c = e[o++];
          if (i < c.id.clock + c.length) {
            To(t, e, i);
          }
          r(c);
        } while (o < e.length && e[o].id.clock < i);
      };
      class No {
        constructor(t, e, n) {
          this.doc = t;
          this.deleteSet = new Zr();
          this.beforeState = Co(t.store);
          this.afterState = new Map();
          this.changed = new Map();
          this.changedParentTypes = new Map();
          this._mergeStructs = [];
          this.origin = e;
          this.meta = new Map();
          this.local = n;
          this.subdocsAdded = new Set();
          this.subdocsRemoved = new Set();
          this.subdocsLoaded = new Set();
        }
      }
      const Ro = (t, e) => {
        if (e.deleteSet.clients.size === 0 && !o.Yj(e.afterState, (t, n) => e.beforeState.get(n) !== t)) {
          return false;
        }
        ei(e.deleteSet);
        Ei(t, e);
        oi(t, e.deleteSet);
        return true;
      };
      const Po = (t, e, n) => {
        const s = e._item;
        if (s === null || (s.id.clock < (t.beforeState.get(s.id.client) || 0) && !s.deleted)) {
          o.Yu(t.changed, e, ws.Ue).add(n);
        }
      };
      const Vo = (t, e) => {
        const n = t[e - 1];
        const s = t[e];
        if (n.deleted === s.deleted && n.constructor === s.constructor) {
          if (n.mergeWith(s)) {
            t.splice(e, 1);
            if (s instanceof ch && s.parentSub !== null && s.parent._map.get(s.parentSub) === s) {
              s.parent._map.set(s.parentSub, n);
            }
          }
        }
      };
      const Fo = (t, e, n) => {
        for (const [s, r] of t.clients.entries()) {
          const t = e.clients.get(s);
          for (let s = r.length - 1; s >= 0; s--) {
            const i = r[s];
            const o = i.clock + i.len;
            for (let s = vo(t, i.clock), r = t[s]; s < t.length && r.id.clock < o; r = t[++s]) {
              const r = t[s];
              if (i.clock + i.len <= r.id.clock) {
                break;
              }
              if (r instanceof ch && r.deleted && !r.keep && n(r)) {
                r.gc(e, false);
              }
            }
          }
        }
      };
      const Bo = (t, e) => {
        t.clients.forEach((t, n) => {
          const s = e.clients.get(n);
          for (let e = t.length - 1; e >= 0; e--) {
            const n = t[e];
            const r = i.VV(s.length - 1, 1 + vo(s, n.clock + n.len - 1));
            for (let t = r, e = s[t]; t > 0 && e.id.clock >= n.clock; e = s[--t]) {
              Vo(s, t);
            }
          }
        });
      };
      const jo = (t, e, n) => {
        Fo(t, e, n);
        Bo(t, e);
      };
      const $o = (t, e) => {
        if (e < t.length) {
          const n = t[e];
          const s = n.doc;
          const r = s.store;
          const o = n.deleteSet;
          const c = n._mergeStructs;
          try {
            ei(o);
            n.afterState = Co(n.doc.store);
            s.emit("beforeObserverCalls", [n, s]);
            const t = [];
            n.changed.forEach((e, s) =>
              t.push(() => {
                if (s._item === null || !s._item.deleted) {
                  s._callObserver(n, e);
                }
              })
            );
            t.push(() => {
              n.changedParentTypes.forEach((e, s) =>
                t.push(() => {
                  if (s._item === null || !s._item.deleted) {
                    e = e.filter((t) => t.target._item === null || !t.target._item.deleted);
                    e.forEach((t) => {
                      t.currentTarget = s;
                    });
                    e.sort((t, e) => t.path.length - e.path.length);
                    ji(s._dEH, e, n);
                  }
                })
              );
              t.push(() => s.emit("afterTransaction", [n, s]));
            });
            (0, T.PP)(t, []);
          } finally {
            if (s.gc) {
              Fo(o, r, s.gcFilter);
            }
            Bo(o, r);
            n.afterState.forEach((t, e) => {
              const s = n.beforeState.get(e) || 0;
              if (s !== t) {
                const t = r.clients.get(e);
                const n = i.Fp(vo(t, s), 1);
                for (let e = t.length - 1; e >= n; e--) {
                  Vo(t, e);
                }
              }
            });
            for (let t = 0; t < c.length; t++) {
              const { client: e, clock: n } = c[t].id;
              const s = r.clients.get(e);
              const i = vo(s, n);
              if (i + 1 < s.length) {
                Vo(s, i + 1);
              }
              if (i > 0) {
                Vo(s, i);
              }
            }
            if (!n.local && n.afterState.get(s.clientID) !== n.beforeState.get(s.clientID)) {
              Dr(mr, ar, "[yjs] ", ur, pr, "Changed the client-id because another client seems to be using it.");
              s.clientID = hi();
            }
            s.emit("afterTransactionCleanup", [n, s]);
            if (s._observers.has("update")) {
              const t = new wi();
              const e = Ro(t, n);
              if (e) {
                s.emit("update", [t.toUint8Array(), n.origin, s, n]);
              }
            }
            if (s._observers.has("updateV2")) {
              const t = new yi();
              const e = Ro(t, n);
              if (e) {
                s.emit("updateV2", [t.toUint8Array(), n.origin, s, n]);
              }
            }
            const { subdocsAdded: l, subdocsLoaded: h, subdocsRemoved: a } = n;
            if (l.size > 0 || a.size > 0 || h.size > 0) {
              l.forEach((t) => {
                t.clientID = s.clientID;
                if (t.collectionid == null) {
                  t.collectionid = s.collectionid;
                }
                s.subdocs.add(t);
              });
              a.forEach((t) => s.subdocs.delete(t));
              s.emit("subdocs", [{ loaded: h, added: l, removed: a }, s, n]);
              a.forEach((t) => t.destroy());
            }
            if (t.length <= e + 1) {
              s._transactionCleanups = [];
              s.emit("afterAllTransactions", [s, t]);
            } else {
              $o(t, e + 1);
            }
          }
        }
      };
      const Jo = (t, e, n = null, s = true) => {
        const r = t._transactionCleanups;
        let i = false;
        let o = null;
        if (t._transaction === null) {
          i = true;
          t._transaction = new No(t, n, s);
          r.push(t._transaction);
          if (r.length === 1) {
            t.emit("beforeAllTransactions", [t]);
          }
          t.emit("beforeTransaction", [t._transaction, t]);
        }
        try {
          o = e(t._transaction);
        } finally {
          if (i) {
            const e = t._transaction === r[0];
            t._transaction = null;
            if (e) {
              $o(r, 0);
            }
          }
        }
        return o;
      };
      class Wo {
        constructor(t, e) {
          this.insertions = e;
          this.deletions = t;
          this.meta = new Map();
        }
      }
      const zo = (t, e, n) => {
        Xr(t, n.deletions, (t) => {
          if (t instanceof ch && e.scope.some((e) => Hi(e, t))) {
            rh(t, false);
          }
        });
      };
      const Go = (t, e, n) => {
        let s = null;
        let r = null;
        const i = t.doc;
        const o = t.scope;
        Jo(
          i,
          (n) => {
            while (e.length > 0 && s === null) {
              const r = i.store;
              const c = e.pop();
              const l = new Set();
              const h = [];
              let a = false;
              Xr(n, c.insertions, (t) => {
                if (t instanceof ch) {
                  if (t.redone !== null) {
                    let { item: e, diff: s } = sh(r, t.id);
                    if (s > 0) {
                      e = Io(n, Wi(e.id.client, e.id.clock + s));
                    }
                    t = e;
                  }
                  if (!t.deleted && o.some((e) => Hi(e, t))) {
                    h.push(t);
                  }
                }
              });
              Xr(n, c.deletions, (t) => {
                if (t instanceof ch && o.some((e) => Hi(e, t)) && !ti(c.insertions, t.id)) {
                  l.add(t);
                }
              });
              l.forEach((e) => {
                a = oh(n, e, l, c.insertions, t.ignoreRemoteMapChanges) !== null || a;
              });
              for (let e = h.length - 1; e >= 0; e--) {
                const s = h[e];
                if (t.deleteFilter(s)) {
                  s.delete(n);
                  a = true;
                }
              }
              s = a ? c : null;
            }
            n.changed.forEach((t, e) => {
              if (t.has(null) && e._searchMarker) {
                e._searchMarker.length = 0;
              }
            });
            r = n;
          },
          t
        );
        if (s != null) {
          const e = r.changedParentTypes;
          t.emit("stack-item-popped", [{ stackItem: s, type: n, changedParentTypes: e }, t]);
        }
        return s;
      };
      class Yo extends s.y {
        constructor(
          t,
          {
            captureTimeout: e = 500,
            captureTransaction: n = (t) => true,
            deleteFilter: s = () => true,
            trackedOrigins: i = new Set([null]),
            ignoreRemoteMapChanges: o = false,
            doc: c = r.kJ(t) ? t[0].doc : t.doc,
          } = {}
        ) {
          super();
          this.scope = [];
          this.addToScope(t);
          this.deleteFilter = s;
          i.add(this);
          this.trackedOrigins = i;
          this.captureTransaction = n;
          this.undoStack = [];
          this.redoStack = [];
          this.undoing = false;
          this.redoing = false;
          this.doc = c;
          this.lastChange = 0;
          this.ignoreRemoteMapChanges = o;
          this.captureTimeout = e;
          this.afterTransactionHandler = (t) => {
            if (
              !this.captureTransaction(t) ||
              !this.scope.some((e) => t.changedParentTypes.has(e)) ||
              (!this.trackedOrigins.has(t.origin) && (!t.origin || !this.trackedOrigins.has(t.origin.constructor)))
            ) {
              return;
            }
            const e = this.undoing;
            const n = this.redoing;
            const s = e ? this.redoStack : this.undoStack;
            if (e) {
              this.stopCapturing();
            } else if (!n) {
              this.clear(false, true);
            }
            const r = new Zr();
            t.afterState.forEach((e, n) => {
              const s = t.beforeState.get(n) || 0;
              const i = e - s;
              if (i > 0) {
                si(r, n, s, i);
              }
            });
            const i = hr.ZG();
            let o = false;
            if (this.lastChange > 0 && i - this.lastChange < this.captureTimeout && s.length > 0 && !e && !n) {
              const e = s[s.length - 1];
              e.deletions = ni([e.deletions, t.deleteSet]);
              e.insertions = ni([e.insertions, r]);
            } else {
              s.push(new Wo(t.deleteSet, r));
              o = true;
            }
            if (!e && !n) {
              this.lastChange = i;
            }
            Xr(t, t.deleteSet, (t) => {
              if (t instanceof ch && this.scope.some((e) => Hi(e, t))) {
                rh(t, true);
              }
            });
            const c = [{ stackItem: s[s.length - 1], origin: t.origin, type: e ? "redo" : "undo", changedParentTypes: t.changedParentTypes }, this];
            if (o) {
              this.emit("stack-item-added", c);
            } else {
              this.emit("stack-item-updated", c);
            }
          };
          this.doc.on("afterTransaction", this.afterTransactionHandler);
          this.doc.on("destroy", () => {
            this.destroy();
          });
        }
        addToScope(t) {
          t = r.kJ(t) ? t : [t];
          t.forEach((t) => {
            if (this.scope.every((e) => e !== t)) {
              this.scope.push(t);
            }
          });
        }
        addTrackedOrigin(t) {
          this.trackedOrigins.add(t);
        }
        removeTrackedOrigin(t) {
          this.trackedOrigins.delete(t);
        }
        clear(t = true, e = true) {
          if ((t && this.canUndo()) || (e && this.canRedo())) {
            this.doc.transact((n) => {
              if (t) {
                this.undoStack.forEach((t) => zo(n, this, t));
                this.undoStack = [];
              }
              if (e) {
                this.redoStack.forEach((t) => zo(n, this, t));
                this.redoStack = [];
              }
              this.emit("stack-cleared", [{ undoStackCleared: t, redoStackCleared: e }]);
            });
          }
        }
        stopCapturing() {
          this.lastChange = 0;
        }
        undo() {
          this.undoing = true;
          let t;
          try {
            t = Go(this, this.undoStack, "undo");
          } finally {
            this.undoing = false;
          }
          return t;
        }
        redo() {
          this.redoing = true;
          let t;
          try {
            t = Go(this, this.redoStack, "redo");
          } finally {
            this.redoing = false;
          }
          return t;
        }
        canUndo() {
          return this.undoStack.length > 0;
        }
        canRedo() {
          return this.redoStack.length > 0;
        }
        destroy() {
          this.trackedOrigins.delete(this);
          this.doc.off("afterTransaction", this.afterTransactionHandler);
          super.destroy();
        }
      }
      function* Ho(t) {
        const e = Tn(t.restDecoder);
        for (let n = 0; n < e; n++) {
          const e = Tn(t.restDecoder);
          const n = t.readClient();
          let s = Tn(t.restDecoder);
          for (let r = 0; r < e; r++) {
            const e = t.readInfo();
            if (e === 10) {
              const e = Tn(t.restDecoder);
              yield new uh(Wi(n, s), e);
              s += e;
            } else if ((jt & e) !== 0) {
              const r = (e & (at | ut)) === 0;
              const i = new ch(
                Wi(n, s),
                null,
                (e & ut) === ut ? t.readLeftID() : null,
                null,
                (e & at) === at ? t.readRightID() : null,
                r ? (t.readParentInfo() ? t.readString() : t.readLeftID()) : null,
                r && (e & ht) === ht ? t.readString() : null,
                lh(t, e)
              );
              yield i;
              s += i.length;
            } else {
              const e = t.readLen();
              yield new Ul(Wi(n, s), e);
              s += e;
            }
          }
        }
      }
      class qo {
        constructor(t, e) {
          this.gen = Ho(t);
          this.curr = null;
          this.done = false;
          this.filterSkips = e;
          this.next();
        }
        next() {
          do {
            this.curr = this.gen.next().value || null;
          } while (this.filterSkips && this.curr !== null && this.curr.constructor === uh);
          return this.curr;
        }
      }
      const Ko = (t) => Zo(t, di);
      const Zo = (t, e = gi) => {
        const n = [];
        const s = new e(wn(t));
        const r = new qo(s, false);
        for (let o = r.curr; o !== null; o = r.next()) {
          n.push(o);
        }
        Dr("Structs: ", n);
        const i = ci(s);
        Dr("DeleteSet: ", i);
      };
      const Xo = (t) => Qo(t, di);
      const Qo = (t, e = gi) => {
        const n = [];
        const s = new e(wn(t));
        const r = new qo(s, false);
        for (let i = r.curr; i !== null; i = r.next()) {
          n.push(i);
        }
        return { structs: n, ds: ci(s) };
      };
      class tc {
        constructor(t) {
          this.currClient = 0;
          this.startClock = 0;
          this.written = 0;
          this.encoder = t;
          this.clientStructs = [];
        }
      }
      const ec = (t) => cc(t, di, wi);
      const nc = (t, e = mi, n = gi) => {
        const s = new e();
        const r = new qo(new n(wn(t)), false);
        let i = r.curr;
        if (i !== null) {
          let t = 0;
          let e = i.id.client;
          let n = i.id.clock !== 0;
          let o = n ? 0 : i.id.clock + i.length;
          for (; i !== null; i = r.next()) {
            if (e !== i.id.client) {
              if (o !== 0) {
                t++;
                Re(s.restEncoder, e);
                Re(s.restEncoder, o);
              }
              e = i.id.client;
              o = 0;
              n = i.id.clock !== 0;
            }
            if (i.constructor === uh) {
              n = true;
            }
            if (!n) {
              o = i.id.clock + i.length;
            }
          }
          if (o !== 0) {
            t++;
            Re(s.restEncoder, e);
            Re(s.restEncoder, o);
          }
          const c = Ee();
          Re(c, t);
          Je(c, s.restEncoder);
          s.restEncoder = c;
          return s.toUint8Array();
        } else {
          Re(s.restEncoder, 0);
          return s.toUint8Array();
        }
      };
      const sc = (t) => nc(t, pi, di);
      const rc = (t, e = gi) => {
        const n = new Map();
        const s = new Map();
        const r = new qo(new e(wn(t)), false);
        let i = r.curr;
        if (i !== null) {
          let t = i.id.client;
          let e = i.id.clock;
          n.set(t, e);
          for (; i !== null; i = r.next()) {
            if (t !== i.id.client) {
              s.set(t, e);
              n.set(i.id.client, i.id.clock);
              t = i.id.client;
            }
            e = i.id.clock + i.length;
          }
          s.set(t, e);
        }
        return { from: n, to: s };
      };
      const ic = (t) => rc(t, di);
      const oc = (t, e) => {
        if (t.constructor === Ul) {
          const { client: n, clock: s } = t.id;
          return new Ul(Wi(n, s + e), t.length - e);
        } else if (t.constructor === uh) {
          const { client: n, clock: s } = t.id;
          return new uh(Wi(n, s + e), t.length - e);
        } else {
          const n = t;
          const { client: s, clock: r } = n.id;
          return new ch(Wi(s, r + e), null, Wi(s, r + e - 1), null, n.rightOrigin, n.parent, n.parentSub, n.content.splice(e));
        }
      };
      const cc = (t, e = gi, n = yi) => {
        if (t.length === 1) {
          return t[0];
        }
        const s = t.map((t) => new e(wn(t)));
        let r = s.map((t) => new qo(t, true));
        let i = null;
        const o = new n();
        const c = new tc(o);
        while (true) {
          r = r.filter((t) => t.curr !== null);
          r.sort((t, e) => {
            if (t.curr.id.client === e.curr.id.client) {
              const n = t.curr.id.clock - e.curr.id.clock;
              if (n === 0) {
                return t.curr.constructor === e.curr.constructor ? 0 : t.curr.constructor === uh ? 1 : -1;
              } else {
                return n;
              }
            } else {
              return e.curr.id.client - t.curr.id.client;
            }
          });
          if (r.length === 0) {
            break;
          }
          const t = r[0];
          const e = t.curr.id.client;
          if (i !== null) {
            let n = t.curr;
            let s = false;
            while (n !== null && n.id.clock + n.length <= i.struct.id.clock + i.struct.length && n.id.client >= i.struct.id.client) {
              n = t.next();
              s = true;
            }
            if (n === null || n.id.client !== e || (s && n.id.clock > i.struct.id.clock + i.struct.length)) {
              continue;
            }
            if (e !== i.struct.id.client) {
              uc(c, i.struct, i.offset);
              i = { struct: n, offset: 0 };
              t.next();
            } else {
              if (i.struct.id.clock + i.struct.length < n.id.clock) {
                if (i.struct.constructor === uh) {
                  i.struct.length = n.id.clock + n.length - i.struct.id.clock;
                } else {
                  uc(c, i.struct, i.offset);
                  const t = n.id.clock - i.struct.id.clock - i.struct.length;
                  const s = new uh(Wi(e, i.struct.id.clock + i.struct.length), t);
                  i = { struct: s, offset: 0 };
                }
              } else {
                const e = i.struct.id.clock + i.struct.length - n.id.clock;
                if (e > 0) {
                  if (i.struct.constructor === uh) {
                    i.struct.length -= e;
                  } else {
                    n = oc(n, e);
                  }
                }
                if (!i.struct.mergeWith(n)) {
                  uc(c, i.struct, i.offset);
                  i = { struct: n, offset: 0 };
                  t.next();
                }
              }
            }
          } else {
            i = { struct: t.curr, offset: 0 };
            t.next();
          }
          for (
            let n = t.curr;
            n !== null && n.id.client === e && n.id.clock === i.struct.id.clock + i.struct.length && n.constructor !== uh;
            n = t.next()
          ) {
            uc(c, i.struct, i.offset);
            i = { struct: n, offset: 0 };
          }
        }
        if (i !== null) {
          uc(c, i.struct, i.offset);
          i = null;
        }
        dc(c);
        const l = s.map((t) => ci(t));
        const h = ni(l);
        oi(o, h);
        return o.toUint8Array();
      };
      const lc = (t, e, n = gi, s = yi) => {
        const r = Mi(e);
        const o = new s();
        const c = new tc(o);
        const l = new n(wn(t));
        const h = new qo(l, false);
        while (h.curr) {
          const t = h.curr;
          const e = t.id.client;
          const n = r.get(e) || 0;
          if (h.curr.constructor === uh) {
            h.next();
            continue;
          }
          if (t.id.clock + t.length > n) {
            uc(c, t, i.Fp(n - t.id.clock, 0));
            h.next();
            while (h.curr && h.curr.id.client === e) {
              uc(c, h.curr, 0);
              h.next();
            }
          } else {
            while (h.curr && h.curr.id.client === e && h.curr.id.clock + h.curr.length <= n) {
              h.next();
            }
          }
        }
        dc(c);
        const a = ci(l);
        oi(o, a);
        return o.toUint8Array();
      };
      const hc = (t, e) => lc(t, e, di, wi);
      const ac = (t) => {
        if (t.written > 0) {
          t.clientStructs.push({ written: t.written, restEncoder: De(t.encoder.restEncoder) });
          t.encoder.restEncoder = Ee();
          t.written = 0;
        }
      };
      const uc = (t, e, n) => {
        if (t.written > 0 && t.currClient !== e.id.client) {
          ac(t);
        }
        if (t.written === 0) {
          t.currClient = e.id.client;
          t.encoder.writeClient(e.id.client);
          Re(t.encoder.restEncoder, e.id.clock + n);
        }
        e.write(t.encoder, n);
        t.written++;
      };
      const dc = (t) => {
        ac(t);
        const e = t.encoder.restEncoder;
        Re(e, t.clientStructs.length);
        for (let n = 0; n < t.clientStructs.length; n++) {
          const s = t.clientStructs[n];
          Re(e, s.written);
          We(e, s.restEncoder);
        }
      };
      const fc = (t, e, n) => {
        const s = new e(wn(t));
        const r = new qo(s, false);
        const i = new n();
        const o = new tc(i);
        for (let l = r.curr; l !== null; l = r.next()) {
          uc(o, l, 0);
        }
        dc(o);
        const c = ci(s);
        oi(i, c);
        return i.toUint8Array();
      };
      const gc = (t) => fc(t, di, yi);
      const pc = (t) => fc(t, gi, wi);
      class wc {
        constructor(t, e) {
          this.target = t;
          this.currentTarget = t;
          this.transaction = e;
          this._changes = null;
          this._keys = null;
          this._delta = null;
        }
        get path() {
          return mc(this.currentTarget, this.target);
        }
        deletes(t) {
          return ti(this.transaction.deleteSet, t.id);
        }
        get keys() {
          if (this._keys === null) {
            const t = new Map();
            const e = this.target;
            const n = this.transaction.changed.get(e);
            n.forEach((n) => {
              if (n !== null) {
                const s = e._map.get(n);
                let i;
                let o;
                if (this.adds(s)) {
                  let t = s.left;
                  while (t !== null && this.adds(t)) {
                    t = t.left;
                  }
                  if (this.deletes(s)) {
                    if (t !== null && this.deletes(t)) {
                      i = "delete";
                      o = r.Z$(t.content.getContent());
                    } else {
                      return;
                    }
                  } else {
                    if (t !== null && this.deletes(t)) {
                      i = "update";
                      o = r.Z$(t.content.getContent());
                    } else {
                      i = "add";
                      o = undefined;
                    }
                  }
                } else {
                  if (this.deletes(s)) {
                    i = "delete";
                    o = r.Z$(s.content.getContent());
                  } else {
                    return;
                  }
                }
                t.set(n, { action: i, oldValue: o });
              }
            });
            this._keys = t;
          }
          return this._keys;
        }
        get delta() {
          return this.changes.delta;
        }
        adds(t) {
          return t.id.clock >= (this.transaction.beforeState.get(t.id.client) || 0);
        }
        get changes() {
          let t = this._changes;
          if (t === null) {
            const e = this.target;
            const n = ws.Ue();
            const s = ws.Ue();
            const r = [];
            t = { added: n, deleted: s, delta: r, keys: this.keys };
            const i = this.transaction.changed.get(e);
            if (i.has(null)) {
              let t = null;
              const i = () => {
                if (t) {
                  r.push(t);
                }
              };
              for (let r = e._start; r !== null; r = r.right) {
                if (r.deleted) {
                  if (this.deletes(r) && !this.adds(r)) {
                    if (t === null || t.delete === undefined) {
                      i();
                      t = { delete: 0 };
                    }
                    t.delete += r.length;
                    s.add(r);
                  }
                } else {
                  if (this.adds(r)) {
                    if (t === null || t.insert === undefined) {
                      i();
                      t = { insert: [] };
                    }
                    t.insert = t.insert.concat(r.content.getContent());
                    n.add(r);
                  } else {
                    if (t === null || t.retain === undefined) {
                      i();
                      t = { retain: 0 };
                    }
                    t.retain += r.length;
                  }
                }
              }
              if (t !== null && t.retain === undefined) {
                i();
              }
            }
            this._changes = t;
          }
          return t;
        }
      }
      const mc = (t, e) => {
        const n = [];
        while (e._item !== null && e !== t) {
          if (e._item.parentSub !== null) {
            n.unshift(e._item.parentSub);
          } else {
            let t = 0;
            let s = e._item.parent._start;
            while (s !== e._item && s !== null) {
              if (!s.deleted) {
                t++;
              }
              s = s.right;
            }
            n.unshift(t);
          }
          e = e._item.parent;
        }
        return n;
      };
      const yc = 80;
      let bc = 0;
      class kc {
        constructor(t, e) {
          t.marker = true;
          this.p = t;
          this.index = e;
          this.timestamp = bc++;
        }
      }
      const _c = (t) => {
        t.timestamp = bc++;
      };
      const Sc = (t, e, n) => {
        t.p.marker = false;
        t.p = e;
        e.marker = true;
        t.index = n;
        t.timestamp = bc++;
      };
      const Ec = (t, e, n) => {
        if (t.length >= yc) {
          const s = t.reduce((t, e) => (t.timestamp < e.timestamp ? t : e));
          Sc(s, e, n);
          return s;
        } else {
          const s = new kc(e, n);
          t.push(s);
          return s;
        }
      };
      const Cc = (t, e) => {
        if (t._start === null || e === 0 || t._searchMarker === null) {
          return null;
        }
        const n = t._searchMarker.length === 0 ? null : t._searchMarker.reduce((t, n) => (i.Wn(e - t.index) < i.Wn(e - n.index) ? t : n));
        let s = t._start;
        let r = 0;
        if (n !== null) {
          s = n.p;
          r = n.index;
          _c(n);
        }
        while (s.right !== null && r < e) {
          if (!s.deleted && s.countable) {
            if (e < r + s.length) {
              break;
            }
            r += s.length;
          }
          s = s.right;
        }
        while (s.left !== null && r > e) {
          s = s.left;
          if (!s.deleted && s.countable) {
            r -= s.length;
          }
        }
        while (s.left !== null && s.left.id.client === s.id.client && s.left.id.clock + s.left.length === s.id.clock) {
          s = s.left;
          if (!s.deleted && s.countable) {
            r -= s.length;
          }
        }
        if (n !== null && i.Wn(n.index - r) < s.parent.length / yc) {
          Sc(n, s, r);
          return n;
        } else {
          return Ec(t._searchMarker, s, r);
        }
      };
      const Dc = (t, e, n) => {
        for (let s = t.length - 1; s >= 0; s--) {
          const r = t[s];
          if (n > 0) {
            let e = r.p;
            e.marker = false;
            while (e && (e.deleted || !e.countable)) {
              e = e.left;
              if (e && !e.deleted && e.countable) {
                r.index -= e.length;
              }
            }
            if (e === null || e.marker === true) {
              t.splice(s, 1);
              continue;
            }
            r.p = e;
            e.marker = true;
          }
          if (e < r.index || (n > 0 && e === r.index)) {
            r.index = i.Fp(e, r.index + n);
          }
        }
      };
      const Ac = (t) => {
        let e = t._start;
        const n = [];
        while (e) {
          n.push(e);
          e = e.right;
        }
        return n;
      };
      const vc = (t, e, n) => {
        const s = t;
        const r = e.changedParentTypes;
        while (true) {
          o.Yu(r, t, () => []).push(n);
          if (t._item === null) {
            break;
          }
          t = t._item.parent;
        }
        ji(s._eH, n, e);
      };
      class xc {
        constructor() {
          this._item = null;
          this._map = new Map();
          this._start = null;
          this.doc = null;
          this._length = 0;
          this._eH = Vi();
          this._dEH = Vi();
          this._searchMarker = null;
        }
        get parent() {
          return this._item ? this._item.parent : null;
        }
        _integrate(t, e) {
          this.doc = t;
          this._item = e;
        }
        _copy() {
          throw un();
        }
        clone() {
          throw un();
        }
        _write(t) {}
        get _first() {
          let t = this._start;
          while (t !== null && t.deleted) {
            t = t.right;
          }
          return t;
        }
        _callObserver(t, e) {
          if (!t.local && this._searchMarker) {
            this._searchMarker.length = 0;
          }
        }
        observe(t) {
          Fi(this._eH, t);
        }
        observeDeep(t) {
          Fi(this._dEH, t);
        }
        unobserve(t) {
          Bi(this._eH, t);
        }
        unobserveDeep(t) {
          Bi(this._dEH, t);
        }
        toJSON() {}
      }
      const Uc = (t, e, n) => {
        if (e < 0) {
          e = t._length + e;
        }
        if (n < 0) {
          n = t._length + n;
        }
        let s = n - e;
        const r = [];
        let i = t._start;
        while (i !== null && s > 0) {
          if (i.countable && !i.deleted) {
            const t = i.content.getContent();
            if (t.length <= e) {
              e -= t.length;
            } else {
              for (let n = e; n < t.length && s > 0; n++) {
                r.push(t[n]);
                s--;
              }
              e = 0;
            }
          }
          i = i.right;
        }
        return r;
      };
      const Tc = (t) => {
        const e = [];
        let n = t._start;
        while (n !== null) {
          if (n.countable && !n.deleted) {
            const t = n.content.getContent();
            for (let n = 0; n < t.length; n++) {
              e.push(t[n]);
            }
          }
          n = n.right;
        }
        return e;
      };
      const Ic = (t, e) => {
        const n = [];
        let s = t._start;
        while (s !== null) {
          if (s.countable && ko(s, e)) {
            const t = s.content.getContent();
            for (let e = 0; e < t.length; e++) {
              n.push(t[e]);
            }
          }
          s = s.right;
        }
        return n;
      };
      const Mc = (t, e) => {
        let n = 0;
        let s = t._start;
        while (s !== null) {
          if (s.countable && !s.deleted) {
            const r = s.content.getContent();
            for (let s = 0; s < r.length; s++) {
              e(r[s], n++, t);
            }
          }
          s = s.right;
        }
      };
      const Oc = (t, e) => {
        const n = [];
        Mc(t, (s, r) => {
          n.push(e(s, r, t));
        });
        return n;
      };
      const Lc = (t) => {
        let e = t._start;
        let n = null;
        let s = 0;
        return {
          [Symbol.iterator]() {
            return this;
          },
          next: () => {
            if (n === null) {
              while (e !== null && e.deleted) {
                e = e.right;
              }
              if (e === null) {
                return { done: true, value: undefined };
              }
              n = e.content.getContent();
              s = 0;
              e = e.right;
            }
            const t = n[s++];
            if (n.length <= s) {
              n = null;
            }
            return { done: false, value: t };
          },
        };
      };
      const Nc = (t, e) => {
        const n = Cc(t, e);
        let s = t._start;
        if (n !== null) {
          s = n.p;
          e -= n.index;
        }
        for (; s !== null; s = s.right) {
          if (!s.deleted && s.countable) {
            if (e < s.length) {
              return s.content.getContent()[e];
            }
            e -= s.length;
          }
        }
      };
      const Rc = (t, e, n, s) => {
        let r = n;
        const i = t.doc;
        const o = i.clientID;
        const c = i.store;
        const l = n === null ? e._start : n.right;
        let h = [];
        const a = () => {
          if (h.length > 0) {
            r = new ch(Wi(o, Do(c, o)), r, r && r.lastId, l, l && l.id, e, null, new Jl(h));
            r.integrate(t, 0);
            h = [];
          }
        };
        s.forEach((n) => {
          if (n === null) {
            h.push(n);
          } else {
            switch (n.constructor) {
              case Number:
              case Object:
              case Boolean:
              case Array:
              case String:
                h.push(n);
                break;
              default:
                a();
                switch (n.constructor) {
                  case Uint8Array:
                  case ArrayBuffer:
                    r = new ch(Wi(o, Do(c, o)), r, r && r.lastId, l, l && l.id, e, null, new Tl(new Uint8Array(n)));
                    r.integrate(t, 0);
                    break;
                  case ai:
                    r = new ch(Wi(o, Do(c, o)), r, r && r.lastId, l, l && l.id, e, null, new Nl(n));
                    r.integrate(t, 0);
                    break;
                  default:
                    if (n instanceof xc) {
                      r = new ch(Wi(o, Do(c, o)), r, r && r.lastId, l, l && l.id, e, null, new eh(n));
                      r.integrate(t, 0);
                    } else {
                      throw new Error("Unexpected content type in insert operation");
                    }
                }
            }
          }
        });
        a();
      };
      const Pc = an("Length exceeded!");
      const Vc = (t, e, n, s) => {
        if (n > e._length) {
          throw Pc;
        }
        if (n === 0) {
          if (e._searchMarker) {
            Dc(e._searchMarker, n, s.length);
          }
          return Rc(t, e, null, s);
        }
        const r = n;
        const i = Cc(e, n);
        let o = e._start;
        if (i !== null) {
          o = i.p;
          n -= i.index;
          if (n === 0) {
            o = o.prev;
            n += o && o.countable && !o.deleted ? o.length : 0;
          }
        }
        for (; o !== null; o = o.right) {
          if (!o.deleted && o.countable) {
            if (n <= o.length) {
              if (n < o.length) {
                Io(t, Wi(o.id.client, o.id.clock + n));
              }
              break;
            }
            n -= o.length;
          }
        }
        if (e._searchMarker) {
          Dc(e._searchMarker, r, s.length);
        }
        return Rc(t, e, o, s);
      };
      const Fc = (t, e, n) => {
        const s = (e._searchMarker || []).reduce((t, e) => (e.index > t.index ? e : t), { index: 0, p: e._start });
        let r = s.p;
        if (r) {
          while (r.right) {
            r = r.right;
          }
        }
        return Rc(t, e, r, n);
      };
      const Bc = (t, e, n, s) => {
        if (s === 0) {
          return;
        }
        const r = n;
        const i = s;
        const o = Cc(e, n);
        let c = e._start;
        if (o !== null) {
          c = o.p;
          n -= o.index;
        }
        for (; c !== null && n > 0; c = c.right) {
          if (!c.deleted && c.countable) {
            if (n < c.length) {
              Io(t, Wi(c.id.client, c.id.clock + n));
            }
            n -= c.length;
          }
        }
        while (s > 0 && c !== null) {
          if (!c.deleted) {
            if (s < c.length) {
              Io(t, Wi(c.id.client, c.id.clock + s));
            }
            c.delete(t);
            s -= c.length;
          }
          c = c.right;
        }
        if (s > 0) {
          throw Pc;
        }
        if (e._searchMarker) {
          Dc(e._searchMarker, r, -i + s);
        }
      };
      const jc = (t, e, n) => {
        const s = e._map.get(n);
        if (s !== undefined) {
          s.delete(t);
        }
      };
      const $c = (t, e, n, s) => {
        const r = e._map.get(n) || null;
        const i = t.doc;
        const o = i.clientID;
        let c;
        if (s == null) {
          c = new Jl([s]);
        } else {
          switch (s.constructor) {
            case Number:
            case Object:
            case Boolean:
            case Array:
            case String:
              c = new Jl([s]);
              break;
            case Uint8Array:
              c = new Tl(s);
              break;
            case ai:
              c = new Nl(s);
              break;
            default:
              if (s instanceof xc) {
                c = new eh(s);
              } else {
                throw new Error("Unexpected content type");
              }
          }
        }
        new ch(Wi(o, Do(i.store, o)), r, r && r.lastId, null, null, e, n, c).integrate(t, 0);
      };
      const Jc = (t, e) => {
        const n = t._map.get(e);
        return n !== undefined && !n.deleted ? n.content.getContent()[n.length - 1] : undefined;
      };
      const Wc = (t) => {
        const e = {};
        t._map.forEach((t, n) => {
          if (!t.deleted) {
            e[n] = t.content.getContent()[t.length - 1];
          }
        });
        return e;
      };
      const zc = (t, e) => {
        const n = t._map.get(e);
        return n !== undefined && !n.deleted;
      };
      const Gc = (t, e, n) => {
        let s = t._map.get(e) || null;
        while (s !== null && (!n.sv.has(s.id.client) || s.id.clock >= (n.sv.get(s.id.client) || 0))) {
          s = s.left;
        }
        return s !== null && ko(s, n) ? s.content.getContent()[s.length - 1] : undefined;
      };
      const Yc = (t) => Gr(t.entries(), (t) => !t[1].deleted);
      class Hc extends wc {
        constructor(t, e) {
          super(t, e);
          this._transaction = e;
        }
      }
      class qc extends xc {
        constructor() {
          super();
          this._prelimContent = [];
          this._searchMarker = [];
        }
        static from(t) {
          const e = new qc();
          e.push(t);
          return e;
        }
        _integrate(t, e) {
          super._integrate(t, e);
          this.insert(0, this._prelimContent);
          this._prelimContent = null;
        }
        _copy() {
          return new qc();
        }
        clone() {
          const t = new qc();
          t.insert(
            0,
            this.toArray().map((t) => (t instanceof xc ? t.clone() : t))
          );
          return t;
        }
        get length() {
          return this._prelimContent === null ? this._length : this._prelimContent.length;
        }
        _callObserver(t, e) {
          super._callObserver(t, e);
          vc(this, t, new Hc(this, t));
        }
        insert(t, e) {
          if (this.doc !== null) {
            Jo(this.doc, (n) => {
              Vc(n, this, t, e);
            });
          } else {
            this._prelimContent.splice(t, 0, ...e);
          }
        }
        push(t) {
          if (this.doc !== null) {
            Jo(this.doc, (e) => {
              Fc(e, this, t);
            });
          } else {
            this._prelimContent.push(...t);
          }
        }
        unshift(t) {
          this.insert(0, t);
        }
        delete(t, e = 1) {
          if (this.doc !== null) {
            Jo(this.doc, (n) => {
              Bc(n, this, t, e);
            });
          } else {
            this._prelimContent.splice(t, e);
          }
        }
        get(t) {
          return Nc(this, t);
        }
        toArray() {
          return Tc(this);
        }
        slice(t = 0, e = this.length) {
          return Uc(this, t, e);
        }
        toJSON() {
          return this.map((t) => (t instanceof xc ? t.toJSON() : t));
        }
        map(t) {
          return Oc(this, t);
        }
        forEach(t) {
          Mc(this, t);
        }
        [Symbol.iterator]() {
          return Lc(this);
        }
        _write(t) {
          t.writeTypeRef(Hl);
        }
      }
      const Kc = (t) => new qc();
      class Zc extends wc {
        constructor(t, e, n) {
          super(t, e);
          this.keysChanged = n;
        }
      }
      class Xc extends xc {
        constructor(t) {
          super();
          this._prelimContent = null;
          if (t === undefined) {
            this._prelimContent = new Map();
          } else {
            this._prelimContent = new Map(t);
          }
        }
        _integrate(t, e) {
          super._integrate(t, e);
          this._prelimContent.forEach((t, e) => {
            this.set(e, t);
          });
          this._prelimContent = null;
        }
        _copy() {
          return new Xc();
        }
        clone() {
          const t = new Xc();
          this.forEach((e, n) => {
            t.set(n, e instanceof xc ? e.clone() : e);
          });
          return t;
        }
        _callObserver(t, e) {
          vc(this, t, new Zc(this, t, e));
        }
        toJSON() {
          const t = {};
          this._map.forEach((e, n) => {
            if (!e.deleted) {
              const s = e.content.getContent()[e.length - 1];
              t[n] = s instanceof xc ? s.toJSON() : s;
            }
          });
          return t;
        }
        get size() {
          return [...Yc(this._map)].length;
        }
        keys() {
          return Yr(Yc(this._map), (t) => t[0]);
        }
        values() {
          return Yr(Yc(this._map), (t) => t[1].content.getContent()[t[1].length - 1]);
        }
        entries() {
          return Yr(Yc(this._map), (t) => [t[0], t[1].content.getContent()[t[1].length - 1]]);
        }
        forEach(t) {
          this._map.forEach((e, n) => {
            if (!e.deleted) {
              t(e.content.getContent()[e.length - 1], n, this);
            }
          });
        }
        [Symbol.iterator]() {
          return this.entries();
        }
        delete(t) {
          if (this.doc !== null) {
            Jo(this.doc, (e) => {
              jc(e, this, t);
            });
          } else {
            this._prelimContent.delete(t);
          }
        }
        set(t, e) {
          if (this.doc !== null) {
            Jo(this.doc, (n) => {
              $c(n, this, t, e);
            });
          } else {
            this._prelimContent.set(t, e);
          }
          return e;
        }
        get(t) {
          return Jc(this, t);
        }
        has(t) {
          return zc(this, t);
        }
        clear() {
          if (this.doc !== null) {
            Jo(this.doc, (t) => {
              this.forEach(function (e, n, s) {
                jc(t, s, n);
              });
            });
          } else {
            this._prelimContent.clear();
          }
        }
        _write(t) {
          t.writeTypeRef(ql);
        }
      }
      const Qc = (t) => new Xc();
      const tl = (t, e) => t === e || (typeof t === "object" && typeof e === "object" && t && e && Hr.$m(t, e));
      class el {
        constructor(t, e, n, s) {
          this.left = t;
          this.right = e;
          this.index = n;
          this.currentAttributes = s;
        }
        forward() {
          if (this.right === null) {
            dn();
          }
          switch (this.right.content.constructor) {
            case Fl:
              if (!this.right.deleted) {
                il(this.currentAttributes, this.right.content);
              }
              break;
            default:
              if (!this.right.deleted) {
                this.index += this.right.length;
              }
              break;
          }
          this.left = this.right;
          this.right = this.right.right;
        }
      }
      const nl = (t, e, n) => {
        while (e.right !== null && n > 0) {
          switch (e.right.content.constructor) {
            case Fl:
              if (!e.right.deleted) {
                il(e.currentAttributes, e.right.content);
              }
              break;
            default:
              if (!e.right.deleted) {
                if (n < e.right.length) {
                  Io(t, Wi(e.right.id.client, e.right.id.clock + n));
                }
                e.index += e.right.length;
                n -= e.right.length;
              }
              break;
          }
          e.left = e.right;
          e.right = e.right.right;
        }
        return e;
      };
      const sl = (t, e, n) => {
        const s = new Map();
        const r = Cc(e, n);
        if (r) {
          const e = new el(r.p.left, r.p, r.index, s);
          return nl(t, e, n - r.index);
        } else {
          const r = new el(null, e._start, 0, s);
          return nl(t, r, n);
        }
      };
      const rl = (t, e, n, s) => {
        while (
          n.right !== null &&
          (n.right.deleted === true || (n.right.content.constructor === Fl && tl(s.get(n.right.content.key), n.right.content.value)))
        ) {
          if (!n.right.deleted) {
            s.delete(n.right.content.key);
          }
          n.forward();
        }
        const r = t.doc;
        const i = r.clientID;
        s.forEach((s, o) => {
          const c = n.left;
          const l = n.right;
          const h = new ch(Wi(i, Do(r.store, i)), c, c && c.lastId, l, l && l.id, e, null, new Fl(o, s));
          h.integrate(t, 0);
          n.right = h;
          n.forward();
        });
      };
      const il = (t, e) => {
        const { key: n, value: s } = e;
        if (s === null) {
          t.delete(n);
        } else {
          t.set(n, s);
        }
      };
      const ol = (t, e) => {
        while (true) {
          if (t.right === null) {
            break;
          } else if (t.right.deleted || (t.right.content.constructor === Fl && tl(e[t.right.content.key] || null, t.right.content.value)));
          else {
            break;
          }
          t.forward();
        }
      };
      const cl = (t, e, n, s) => {
        const r = t.doc;
        const i = r.clientID;
        const o = new Map();
        for (const c in s) {
          const l = s[c];
          const h = n.currentAttributes.get(c) || null;
          if (!tl(h, l)) {
            o.set(c, h);
            const { left: s, right: a } = n;
            n.right = new ch(Wi(i, Do(r.store, i)), s, s && s.lastId, a, a && a.id, e, null, new Fl(c, l));
            n.right.integrate(t, 0);
            n.forward();
          }
        }
        return o;
      };
      const ll = (t, e, n, s, r) => {
        n.currentAttributes.forEach((t, e) => {
          if (r[e] === undefined) {
            r[e] = null;
          }
        });
        const i = t.doc;
        const o = i.clientID;
        ol(n, r);
        const c = cl(t, e, n, r);
        const l = s.constructor === String ? new zl(s) : s instanceof xc ? new eh(s) : new Pl(s);
        let { left: h, right: a, index: u } = n;
        if (e._searchMarker) {
          Dc(e._searchMarker, n.index, l.getLength());
        }
        a = new ch(Wi(o, Do(i.store, o)), h, h && h.lastId, a, a && a.id, e, null, l);
        a.integrate(t, 0);
        n.right = a;
        n.index = u;
        n.forward();
        rl(t, e, n, c);
      };
      const hl = (t, e, n, s, r) => {
        const i = t.doc;
        const o = i.clientID;
        ol(n, r);
        const c = cl(t, e, n, r);
        t: while (n.right !== null && (s > 0 || (c.size > 0 && (n.right.deleted || n.right.content.constructor === Fl)))) {
          if (!n.right.deleted) {
            switch (n.right.content.constructor) {
              case Fl: {
                const { key: e, value: i } = n.right.content;
                const o = r[e];
                if (o !== undefined) {
                  if (tl(o, i)) {
                    c.delete(e);
                  } else {
                    if (s === 0) {
                      break t;
                    }
                    c.set(e, i);
                  }
                  n.right.delete(t);
                } else {
                  n.currentAttributes.set(e, i);
                }
                break;
              }
              default:
                if (s < n.right.length) {
                  Io(t, Wi(n.right.id.client, n.right.id.clock + s));
                }
                s -= n.right.length;
                break;
            }
          }
          n.forward();
        }
        if (s > 0) {
          let r = "";
          for (; s > 0; s--) {
            r += "\n";
          }
          n.right = new ch(Wi(o, Do(i.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, e, null, new zl(r));
          n.right.integrate(t, 0);
          n.forward();
        }
        rl(t, e, n, c);
      };
      const al = (t, e, n, s, r) => {
        let i = e;
        const c = o.Ue();
        while (i && (!i.countable || i.deleted)) {
          if (!i.deleted && i.content.constructor === Fl) {
            const t = i.content;
            c.set(t.key, t);
          }
          i = i.right;
        }
        let l = 0;
        let h = false;
        while (e !== i) {
          if (n === e) {
            h = true;
          }
          if (!e.deleted) {
            const n = e.content;
            switch (n.constructor) {
              case Fl: {
                const { key: i, value: o } = n;
                const a = s.get(i) || null;
                if (c.get(i) !== n || a === o) {
                  e.delete(t);
                  l++;
                  if (!h && (r.get(i) || null) === o && a !== o) {
                    if (a === null) {
                      r.delete(i);
                    } else {
                      r.set(i, a);
                    }
                  }
                }
                if (!h && !e.deleted) {
                  il(r, n);
                }
                break;
              }
            }
          }
          e = e.right;
        }
        return l;
      };
      const ul = (t, e) => {
        while (e && e.right && (e.right.deleted || !e.right.countable)) {
          e = e.right;
        }
        const n = new Set();
        while (e && (e.deleted || !e.countable)) {
          if (!e.deleted && e.content.constructor === Fl) {
            const s = e.content.key;
            if (n.has(s)) {
              e.delete(t);
            } else {
              n.add(s);
            }
          }
          e = e.left;
        }
      };
      const dl = (t) => {
        let e = 0;
        Jo(t.doc, (n) => {
          let s = t._start;
          let r = t._start;
          let i = o.Ue();
          const c = o.JG(i);
          while (r) {
            if (r.deleted === false) {
              switch (r.content.constructor) {
                case Fl:
                  il(c, r.content);
                  break;
                default:
                  e += al(n, s, r, i, c);
                  i = o.JG(c);
                  s = r;
                  break;
              }
            }
            r = r.right;
          }
        });
        return e;
      };
      const fl = (t, e, n) => {
        const s = n;
        const r = o.JG(e.currentAttributes);
        const i = e.right;
        while (n > 0 && e.right !== null) {
          if (e.right.deleted === false) {
            switch (e.right.content.constructor) {
              case eh:
              case Pl:
              case zl:
                if (n < e.right.length) {
                  Io(t, Wi(e.right.id.client, e.right.id.clock + n));
                }
                n -= e.right.length;
                e.right.delete(t);
                break;
            }
          }
          e.forward();
        }
        if (i) {
          al(t, i, e.right, r, e.currentAttributes);
        }
        const c = (e.left || e.right).parent;
        if (c._searchMarker) {
          Dc(c._searchMarker, e.index, -s + n);
        }
        return e;
      };
      class gl extends wc {
        constructor(t, e, n) {
          super(t, e);
          this.childListChanged = false;
          this.keysChanged = new Set();
          n.forEach((t) => {
            if (t === null) {
              this.childListChanged = true;
            } else {
              this.keysChanged.add(t);
            }
          });
        }
        get changes() {
          if (this._changes === null) {
            const t = { keys: this.keys, delta: this.delta, added: new Set(), deleted: new Set() };
            this._changes = t;
          }
          return this._changes;
        }
        get delta() {
          if (this._delta === null) {
            const t = this.target.doc;
            const e = [];
            Jo(t, (t) => {
              const n = new Map();
              const s = new Map();
              let r = this.target._start;
              let i = null;
              const o = {};
              let c = "";
              let l = 0;
              let h = 0;
              const a = () => {
                if (i !== null) {
                  let t;
                  switch (i) {
                    case "delete":
                      t = { delete: h };
                      h = 0;
                      break;
                    case "insert":
                      t = { insert: c };
                      if (n.size > 0) {
                        t.attributes = {};
                        n.forEach((e, n) => {
                          if (e !== null) {
                            t.attributes[n] = e;
                          }
                        });
                      }
                      c = "";
                      break;
                    case "retain":
                      t = { retain: l };
                      if (Object.keys(o).length > 0) {
                        t.attributes = {};
                        for (const e in o) {
                          t.attributes[e] = o[e];
                        }
                      }
                      l = 0;
                      break;
                  }
                  e.push(t);
                  i = null;
                }
              };
              while (r !== null) {
                switch (r.content.constructor) {
                  case eh:
                  case Pl:
                    if (this.adds(r)) {
                      if (!this.deletes(r)) {
                        a();
                        i = "insert";
                        c = r.content.getContent()[0];
                        a();
                      }
                    } else if (this.deletes(r)) {
                      if (i !== "delete") {
                        a();
                        i = "delete";
                      }
                      h += 1;
                    } else if (!r.deleted) {
                      if (i !== "retain") {
                        a();
                        i = "retain";
                      }
                      l += 1;
                    }
                    break;
                  case zl:
                    if (this.adds(r)) {
                      if (!this.deletes(r)) {
                        if (i !== "insert") {
                          a();
                          i = "insert";
                        }
                        c += r.content.str;
                      }
                    } else if (this.deletes(r)) {
                      if (i !== "delete") {
                        a();
                        i = "delete";
                      }
                      h += r.length;
                    } else if (!r.deleted) {
                      if (i !== "retain") {
                        a();
                        i = "retain";
                      }
                      l += r.length;
                    }
                    break;
                  case Fl: {
                    const { key: e, value: c } = r.content;
                    if (this.adds(r)) {
                      if (!this.deletes(r)) {
                        const l = n.get(e) || null;
                        if (!tl(l, c)) {
                          if (i === "retain") {
                            a();
                          }
                          if (tl(c, s.get(e) || null)) {
                            delete o[e];
                          } else {
                            o[e] = c;
                          }
                        } else if (c !== null) {
                          r.delete(t);
                        }
                      }
                    } else if (this.deletes(r)) {
                      s.set(e, c);
                      const t = n.get(e) || null;
                      if (!tl(t, c)) {
                        if (i === "retain") {
                          a();
                        }
                        o[e] = t;
                      }
                    } else if (!r.deleted) {
                      s.set(e, c);
                      const n = o[e];
                      if (n !== undefined) {
                        if (!tl(n, c)) {
                          if (i === "retain") {
                            a();
                          }
                          if (c === null) {
                            delete o[e];
                          } else {
                            o[e] = c;
                          }
                        } else if (n !== null) {
                          r.delete(t);
                        }
                      }
                    }
                    if (!r.deleted) {
                      if (i === "insert") {
                        a();
                      }
                      il(n, r.content);
                    }
                    break;
                  }
                }
                r = r.right;
              }
              a();
              while (e.length > 0) {
                const t = e[e.length - 1];
                if (t.retain !== undefined && t.attributes === undefined) {
                  e.pop();
                } else {
                  break;
                }
              }
            });
            this._delta = e;
          }
          return this._delta;
        }
      }
      class pl extends xc {
        constructor(t) {
          super();
          this._pending = t !== undefined ? [() => this.insert(0, t)] : [];
          this._searchMarker = [];
        }
        get length() {
          return this._length;
        }
        _integrate(t, e) {
          super._integrate(t, e);
          try {
            this._pending.forEach((t) => t());
          } catch (gh) {
            console.error(gh);
          }
          this._pending = null;
        }
        _copy() {
          return new pl();
        }
        clone() {
          const t = new pl();
          t.applyDelta(this.toDelta());
          return t;
        }
        _callObserver(t, e) {
          super._callObserver(t, e);
          const n = new gl(this, t, e);
          const s = t.doc;
          vc(this, t, n);
          if (!t.local) {
            let e = false;
            for (const [n, r] of t.afterState.entries()) {
              const i = t.beforeState.get(n) || 0;
              if (r === i) {
                continue;
              }
              Lo(t, s.store.clients.get(n), i, r, (t) => {
                if (!t.deleted && t.content.constructor === Fl) {
                  e = true;
                }
              });
              if (e) {
                break;
              }
            }
            if (!e) {
              Xr(t, t.deleteSet, (t) => {
                if (t instanceof Ul || e) {
                  return;
                }
                if (t.parent === this && t.content.constructor === Fl) {
                  e = true;
                }
              });
            }
            Jo(s, (t) => {
              if (e) {
                dl(this);
              } else {
                Xr(t, t.deleteSet, (e) => {
                  if (e instanceof Ul) {
                    return;
                  }
                  if (e.parent === this) {
                    ul(t, e);
                  }
                });
              }
            });
          }
        }
        toString() {
          let t = "";
          let e = this._start;
          while (e !== null) {
            if (!e.deleted && e.countable && e.content.constructor === zl) {
              t += e.content.str;
            }
            e = e.right;
          }
          return t;
        }
        toJSON() {
          return this.toString();
        }
        applyDelta(t, { sanitize: e = true } = {}) {
          if (this.doc !== null) {
            Jo(this.doc, (n) => {
              const s = new el(null, this._start, 0, new Map());
              for (let r = 0; r < t.length; r++) {
                const i = t[r];
                if (i.insert !== undefined) {
                  const o =
                    !e && typeof i.insert === "string" && r === t.length - 1 && s.right === null && i.insert.slice(-1) === "\n"
                      ? i.insert.slice(0, -1)
                      : i.insert;
                  if (typeof o !== "string" || o.length > 0) {
                    ll(n, this, s, o, i.attributes || {});
                  }
                } else if (i.retain !== undefined) {
                  hl(n, this, s, i.retain, i.attributes || {});
                } else if (i.delete !== undefined) {
                  fl(n, s, i.delete);
                }
              }
            });
          } else {
            this._pending.push(() => this.applyDelta(t));
          }
        }
        toDelta(t, e, n) {
          const s = [];
          const r = new Map();
          const i = this.doc;
          let o = "";
          let c = this._start;
          function l() {
            if (o.length > 0) {
              const t = {};
              let e = false;
              r.forEach((n, s) => {
                e = true;
                t[s] = n;
              });
              const n = { insert: o };
              if (e) {
                n.attributes = t;
              }
              s.push(n);
              o = "";
            }
          }
          Jo(
            i,
            (i) => {
              if (t) {
                _o(i, t);
              }
              if (e) {
                _o(i, e);
              }
              while (c !== null) {
                if (ko(c, t) || (e !== undefined && ko(c, e))) {
                  switch (c.content.constructor) {
                    case zl: {
                      const s = r.get("ychange");
                      if (t !== undefined && !ko(c, t)) {
                        if (s === undefined || s.user !== c.id.client || s.type !== "removed") {
                          l();
                          r.set("ychange", n ? n("removed", c.id) : { type: "removed" });
                        }
                      } else if (e !== undefined && !ko(c, e)) {
                        if (s === undefined || s.user !== c.id.client || s.type !== "added") {
                          l();
                          r.set("ychange", n ? n("added", c.id) : { type: "added" });
                        }
                      } else if (s !== undefined) {
                        l();
                        r.delete("ychange");
                      }
                      o += c.content.str;
                      break;
                    }
                    case eh:
                    case Pl: {
                      l();
                      const t = { insert: c.content.getContent()[0] };
                      if (r.size > 0) {
                        const e = {};
                        t.attributes = e;
                        r.forEach((t, n) => {
                          e[n] = t;
                        });
                      }
                      s.push(t);
                      break;
                    }
                    case Fl:
                      if (ko(c, t)) {
                        l();
                        il(r, c.content);
                      }
                      break;
                  }
                }
                c = c.right;
              }
              l();
            },
            "cleanup"
          );
          return s;
        }
        insert(t, e, n) {
          if (e.length <= 0) {
            return;
          }
          const s = this.doc;
          if (s !== null) {
            Jo(s, (s) => {
              const r = sl(s, this, t);
              if (!n) {
                n = {};
                r.currentAttributes.forEach((t, e) => {
                  n[e] = t;
                });
              }
              ll(s, this, r, e, n);
            });
          } else {
            this._pending.push(() => this.insert(t, e, n));
          }
        }
        insertEmbed(t, e, n = {}) {
          const s = this.doc;
          if (s !== null) {
            Jo(s, (s) => {
              const r = sl(s, this, t);
              ll(s, this, r, e, n);
            });
          } else {
            this._pending.push(() => this.insertEmbed(t, e, n));
          }
        }
        delete(t, e) {
          if (e === 0) {
            return;
          }
          const n = this.doc;
          if (n !== null) {
            Jo(n, (n) => {
              fl(n, sl(n, this, t), e);
            });
          } else {
            this._pending.push(() => this.delete(t, e));
          }
        }
        format(t, e, n) {
          if (e === 0) {
            return;
          }
          const s = this.doc;
          if (s !== null) {
            Jo(s, (s) => {
              const r = sl(s, this, t);
              if (r.right === null) {
                return;
              }
              hl(s, this, r, e, n);
            });
          } else {
            this._pending.push(() => this.format(t, e, n));
          }
        }
        removeAttribute(t) {
          if (this.doc !== null) {
            Jo(this.doc, (e) => {
              jc(e, this, t);
            });
          } else {
            this._pending.push(() => this.removeAttribute(t));
          }
        }
        setAttribute(t, e) {
          if (this.doc !== null) {
            Jo(this.doc, (n) => {
              $c(n, this, t, e);
            });
          } else {
            this._pending.push(() => this.setAttribute(t, e));
          }
        }
        getAttribute(t) {
          return Jc(this, t);
        }
        getAttributes() {
          return Wc(this);
        }
        _write(t) {
          t.writeTypeRef(Kl);
        }
      }
      const wl = (t) => new pl();
      class ml {
        constructor(t, e = () => true) {
          this._filter = e;
          this._root = t;
          this._currentNode = t._start;
          this._firstCall = true;
        }
        [Symbol.iterator]() {
          return this;
        }
        next() {
          let t = this._currentNode;
          let e = t && t.content && t.content.type;
          if (t !== null && (!this._firstCall || t.deleted || !this._filter(e))) {
            do {
              e = t.content.type;
              if (!t.deleted && (e.constructor === kl || e.constructor === yl) && e._start !== null) {
                t = e._start;
              } else {
                while (t !== null) {
                  if (t.right !== null) {
                    t = t.right;
                    break;
                  } else if (t.parent === this._root) {
                    t = null;
                  } else {
                    t = t.parent._item;
                  }
                }
              }
            } while (t !== null && (t.deleted || !this._filter(t.content.type)));
          }
          this._firstCall = false;
          if (t === null) {
            return { value: undefined, done: true };
          }
          this._currentNode = t;
          return { value: t.content.type, done: false };
        }
      }
      class yl extends xc {
        constructor() {
          super();
          this._prelimContent = [];
        }
        get firstChild() {
          const t = this._first;
          return t ? t.content.getContent()[0] : null;
        }
        _integrate(t, e) {
          super._integrate(t, e);
          this.insert(0, this._prelimContent);
          this._prelimContent = null;
        }
        _copy() {
          return new yl();
        }
        clone() {
          const t = new yl();
          t.insert(
            0,
            this.toArray().map((t) => (t instanceof xc ? t.clone() : t))
          );
          return t;
        }
        get length() {
          return this._prelimContent === null ? this._length : this._prelimContent.length;
        }
        createTreeWalker(t) {
          return new ml(this, t);
        }
        querySelector(t) {
          t = t.toUpperCase();
          const e = new ml(this, (e) => e.nodeName && e.nodeName.toUpperCase() === t);
          const n = e.next();
          if (n.done) {
            return null;
          } else {
            return n.value;
          }
        }
        querySelectorAll(t) {
          t = t.toUpperCase();
          return r.Dp(new ml(this, (e) => e.nodeName && e.nodeName.toUpperCase() === t));
        }
        _callObserver(t, e) {
          vc(this, t, new Sl(this, e, t));
        }
        toString() {
          return Jo(this.doc, () => Oc(this, (t) => t.toString()).join(""));
        }
        toJSON() {
          return this.toString();
        }
        toDOM(t = document, e = {}, n) {
          const s = t.createDocumentFragment();
          if (n !== undefined) {
            n._createAssociation(s, this);
          }
          Mc(this, (r) => {
            s.insertBefore(r.toDOM(t, e, n), null);
          });
          return s;
        }
        insert(t, e) {
          if (this.doc !== null) {
            Jo(this.doc, (n) => {
              Vc(n, this, t, e);
            });
          } else {
            this._prelimContent.splice(t, 0, ...e);
          }
        }
        insertAfter(t, e) {
          if (this.doc !== null) {
            Jo(this.doc, (n) => {
              const s = t && t instanceof xc ? t._item : t;
              Rc(n, this, s, e);
            });
          } else {
            const n = this._prelimContent;
            const s = t === null ? 0 : n.findIndex((e) => e === t) + 1;
            if (s === 0 && t !== null) {
              throw an("Reference item not found");
            }
            n.splice(s, 0, ...e);
          }
        }
        delete(t, e = 1) {
          if (this.doc !== null) {
            Jo(this.doc, (n) => {
              Bc(n, this, t, e);
            });
          } else {
            this._prelimContent.splice(t, e);
          }
        }
        toArray() {
          return Tc(this);
        }
        push(t) {
          this.insert(this.length, t);
        }
        unshift(t) {
          this.insert(0, t);
        }
        get(t) {
          return Nc(this, t);
        }
        slice(t = 0, e = this.length) {
          return Uc(this, t, e);
        }
        forEach(t) {
          Mc(this, t);
        }
        _write(t) {
          t.writeTypeRef(Xl);
        }
      }
      const bl = (t) => new yl();
      class kl extends yl {
        constructor(t = "UNDEFINED") {
          super();
          this.nodeName = t;
          this._prelimAttrs = new Map();
        }
        get nextSibling() {
          const t = this._item ? this._item.next : null;
          return t ? t.content.type : null;
        }
        get prevSibling() {
          const t = this._item ? this._item.prev : null;
          return t ? t.content.type : null;
        }
        _integrate(t, e) {
          super._integrate(t, e);
          this._prelimAttrs.forEach((t, e) => {
            this.setAttribute(e, t);
          });
          this._prelimAttrs = null;
        }
        _copy() {
          return new kl(this.nodeName);
        }
        clone() {
          const t = new kl(this.nodeName);
          const e = this.getAttributes();
          for (const n in e) {
            t.setAttribute(n, e[n]);
          }
          t.insert(
            0,
            this.toArray().map((t) => (t instanceof xc ? t.clone() : t))
          );
          return t;
        }
        toString() {
          const t = this.getAttributes();
          const e = [];
          const n = [];
          for (const o in t) {
            n.push(o);
          }
          n.sort();
          const s = n.length;
          for (let o = 0; o < s; o++) {
            const s = n[o];
            e.push(s + '="' + t[s] + '"');
          }
          const r = this.nodeName.toLocaleLowerCase();
          const i = e.length > 0 ? " " + e.join(" ") : "";
          return `<${r}${i}>${super.toString()}</${r}>`;
        }
        removeAttribute(t) {
          if (this.doc !== null) {
            Jo(this.doc, (e) => {
              jc(e, this, t);
            });
          } else {
            this._prelimAttrs.delete(t);
          }
        }
        setAttribute(t, e) {
          if (this.doc !== null) {
            Jo(this.doc, (n) => {
              $c(n, this, t, e);
            });
          } else {
            this._prelimAttrs.set(t, e);
          }
        }
        getAttribute(t) {
          return Jc(this, t);
        }
        hasAttribute(t) {
          return zc(this, t);
        }
        getAttributes() {
          return Wc(this);
        }
        toDOM(t = document, e = {}, n) {
          const s = t.createElement(this.nodeName);
          const r = this.getAttributes();
          for (const i in r) {
            s.setAttribute(i, r[i]);
          }
          Mc(this, (r) => {
            s.appendChild(r.toDOM(t, e, n));
          });
          if (n !== undefined) {
            n._createAssociation(s, this);
          }
          return s;
        }
        _write(t) {
          t.writeTypeRef(Zl);
          t.writeKey(this.nodeName);
        }
      }
      const _l = (t) => new kl(t.readKey());
      class Sl extends wc {
        constructor(t, e, n) {
          super(t, n);
          this.childListChanged = false;
          this.attributesChanged = new Set();
          e.forEach((t) => {
            if (t === null) {
              this.childListChanged = true;
            } else {
              this.attributesChanged.add(t);
            }
          });
        }
      }
      class El extends Xc {
        constructor(t) {
          super();
          this.hookName = t;
        }
        _copy() {
          return new El(this.hookName);
        }
        clone() {
          const t = new El(this.hookName);
          this.forEach((e, n) => {
            t.set(n, e);
          });
          return t;
        }
        toDOM(t = document, e = {}, n) {
          const s = e[this.hookName];
          let r;
          if (s !== undefined) {
            r = s.createDom(this);
          } else {
            r = document.createElement(this.hookName);
          }
          r.setAttribute("data-yjs-hook", this.hookName);
          if (n !== undefined) {
            n._createAssociation(r, this);
          }
          return r;
        }
        _write(t) {
          t.writeTypeRef(Ql);
          t.writeKey(this.hookName);
        }
      }
      const Cl = (t) => new El(t.readKey());
      class Dl extends pl {
        get nextSibling() {
          const t = this._item ? this._item.next : null;
          return t ? t.content.type : null;
        }
        get prevSibling() {
          const t = this._item ? this._item.prev : null;
          return t ? t.content.type : null;
        }
        _copy() {
          return new Dl();
        }
        clone() {
          const t = new Dl();
          t.applyDelta(this.toDelta());
          return t;
        }
        toDOM(t = document, e, n) {
          const s = t.createTextNode(this.toString());
          if (n !== undefined) {
            n._createAssociation(s, this);
          }
          return s;
        }
        toString() {
          return this.toDelta()
            .map((t) => {
              const e = [];
              for (const s in t.attributes) {
                const n = [];
                for (const e in t.attributes[s]) {
                  n.push({ key: e, value: t.attributes[s][e] });
                }
                n.sort((t, e) => (t.key < e.key ? -1 : 1));
                e.push({ nodeName: s, attrs: n });
              }
              e.sort((t, e) => (t.nodeName < e.nodeName ? -1 : 1));
              let n = "";
              for (let s = 0; s < e.length; s++) {
                const t = e[s];
                n += `<${t.nodeName}`;
                for (let e = 0; e < t.attrs.length; e++) {
                  const s = t.attrs[e];
                  n += ` ${s.key}="${s.value}"`;
                }
                n += ">";
              }
              n += t.insert;
              for (let s = e.length - 1; s >= 0; s--) {
                n += `</${e[s].nodeName}>`;
              }
              return n;
            })
            .join("");
        }
        toJSON() {
          return this.toString();
        }
        _write(t) {
          t.writeTypeRef(th);
        }
      }
      const Al = (t) => new Dl();
      class vl {
        constructor(t, e) {
          this.id = t;
          this.length = e;
        }
        get deleted() {
          throw un();
        }
        mergeWith(t) {
          return false;
        }
        write(t, e, n) {
          throw un();
        }
        integrate(t, e) {
          throw un();
        }
      }
      const xl = 0;
      class Ul extends vl {
        get deleted() {
          return true;
        }
        delete() {}
        mergeWith(t) {
          if (this.constructor !== t.constructor) {
            return false;
          }
          this.length += t.length;
          return true;
        }
        integrate(t, e) {
          if (e > 0) {
            this.id.clock += e;
            this.length -= e;
          }
          Ao(t.doc.store, this);
        }
        write(t, e) {
          t.writeInfo(xl);
          t.writeLen(this.length - e);
        }
        getMissing(t, e) {
          return null;
        }
      }
      class Tl {
        constructor(t) {
          this.content = t;
        }
        getLength() {
          return 1;
        }
        getContent() {
          return [this.content];
        }
        isCountable() {
          return true;
        }
        copy() {
          return new Tl(this.content);
        }
        splice(t) {
          throw un();
        }
        mergeWith(t) {
          return false;
        }
        integrate(t, e) {}
        delete(t) {}
        gc(t) {}
        write(t, e) {
          t.writeBuf(this.content);
        }
        getRef() {
          return 3;
        }
      }
      const Il = (t) => new Tl(t.readBuf());
      class Ml {
        constructor(t) {
          this.len = t;
        }
        getLength() {
          return this.len;
        }
        getContent() {
          return [];
        }
        isCountable() {
          return false;
        }
        copy() {
          return new Ml(this.len);
        }
        splice(t) {
          const e = new Ml(this.len - t);
          this.len = t;
          return e;
        }
        mergeWith(t) {
          this.len += t.len;
          return true;
        }
        integrate(t, e) {
          si(t.deleteSet, e.id.client, e.id.clock, this.len);
          e.markDeleted();
        }
        delete(t) {}
        gc(t) {}
        write(t, e) {
          t.writeLen(this.len - e);
        }
        getRef() {
          return 1;
        }
      }
      const Ol = (t) => new Ml(t.readLen());
      const Ll = (t, e) => new ai({ guid: t, ...e, shouldLoad: e.shouldLoad || e.autoLoad || false });
      class Nl {
        constructor(t) {
          if (t._item) {
            console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid.");
          }
          this.doc = t;
          const e = {};
          this.opts = e;
          if (!t.gc) {
            e.gc = false;
          }
          if (t.autoLoad) {
            e.autoLoad = true;
          }
          if (t.meta !== null) {
            e.meta = t.meta;
          }
        }
        getLength() {
          return 1;
        }
        getContent() {
          return [this.doc];
        }
        isCountable() {
          return true;
        }
        copy() {
          return new Nl(Ll(this.doc.guid, this.opts));
        }
        splice(t) {
          throw un();
        }
        mergeWith(t) {
          return false;
        }
        integrate(t, e) {
          this.doc._item = e;
          t.subdocsAdded.add(this.doc);
          if (this.doc.shouldLoad) {
            t.subdocsLoaded.add(this.doc);
          }
        }
        delete(t) {
          if (t.subdocsAdded.has(this.doc)) {
            t.subdocsAdded.delete(this.doc);
          } else {
            t.subdocsRemoved.add(this.doc);
          }
        }
        gc(t) {}
        write(t, e) {
          t.writeString(this.doc.guid);
          t.writeAny(this.opts);
        }
        getRef() {
          return 9;
        }
      }
      const Rl = (t) => new Nl(Ll(t.readString(), t.readAny()));
      class Pl {
        constructor(t) {
          this.embed = t;
        }
        getLength() {
          return 1;
        }
        getContent() {
          return [this.embed];
        }
        isCountable() {
          return true;
        }
        copy() {
          return new Pl(this.embed);
        }
        splice(t) {
          throw un();
        }
        mergeWith(t) {
          return false;
        }
        integrate(t, e) {}
        delete(t) {}
        gc(t) {}
        write(t, e) {
          t.writeJSON(this.embed);
        }
        getRef() {
          return 5;
        }
      }
      const Vl = (t) => new Pl(t.readJSON());
      class Fl {
        constructor(t, e) {
          this.key = t;
          this.value = e;
        }
        getLength() {
          return 1;
        }
        getContent() {
          return [];
        }
        isCountable() {
          return false;
        }
        copy() {
          return new Fl(this.key, this.value);
        }
        splice(t) {
          throw un();
        }
        mergeWith(t) {
          return false;
        }
        integrate(t, e) {
          e.parent._searchMarker = null;
        }
        delete(t) {}
        gc(t) {}
        write(t, e) {
          t.writeKey(this.key);
          t.writeJSON(this.value);
        }
        getRef() {
          return 6;
        }
      }
      const Bl = (t) => new Fl(t.readKey(), t.readJSON());
      class jl {
        constructor(t) {
          this.arr = t;
        }
        getLength() {
          return this.arr.length;
        }
        getContent() {
          return this.arr;
        }
        isCountable() {
          return true;
        }
        copy() {
          return new jl(this.arr);
        }
        splice(t) {
          const e = new jl(this.arr.slice(t));
          this.arr = this.arr.slice(0, t);
          return e;
        }
        mergeWith(t) {
          this.arr = this.arr.concat(t.arr);
          return true;
        }
        integrate(t, e) {}
        delete(t) {}
        gc(t) {}
        write(t, e) {
          const n = this.arr.length;
          t.writeLen(n - e);
          for (let s = e; s < n; s++) {
            const e = this.arr[s];
            t.writeString(e === undefined ? "undefined" : JSON.stringify(e));
          }
        }
        getRef() {
          return 2;
        }
      }
      const $l = (t) => {
        const e = t.readLen();
        const n = [];
        for (let s = 0; s < e; s++) {
          const e = t.readString();
          if (e === "undefined") {
            n.push(undefined);
          } else {
            n.push(JSON.parse(e));
          }
        }
        return new jl(n);
      };
      class Jl {
        constructor(t) {
          this.arr = t;
        }
        getLength() {
          return this.arr.length;
        }
        getContent() {
          return this.arr;
        }
        isCountable() {
          return true;
        }
        copy() {
          return new Jl(this.arr);
        }
        splice(t) {
          const e = new Jl(this.arr.slice(t));
          this.arr = this.arr.slice(0, t);
          return e;
        }
        mergeWith(t) {
          this.arr = this.arr.concat(t.arr);
          return true;
        }
        integrate(t, e) {}
        delete(t) {}
        gc(t) {}
        write(t, e) {
          const n = this.arr.length;
          t.writeLen(n - e);
          for (let s = e; s < n; s++) {
            const e = this.arr[s];
            t.writeAny(e);
          }
        }
        getRef() {
          return 8;
        }
      }
      const Wl = (t) => {
        const e = t.readLen();
        const n = [];
        for (let s = 0; s < e; s++) {
          n.push(t.readAny());
        }
        return new Jl(n);
      };
      class zl {
        constructor(t) {
          this.str = t;
        }
        getLength() {
          return this.str.length;
        }
        getContent() {
          return this.str.split("");
        }
        isCountable() {
          return true;
        }
        copy() {
          return new zl(this.str);
        }
        splice(t) {
          const e = new zl(this.str.slice(t));
          this.str = this.str.slice(0, t);
          const n = this.str.charCodeAt(t - 1);
          if (n >= 55296 && n <= 56319) {
            this.str = this.str.slice(0, t - 1) + "�";
            e.str = "�" + e.str.slice(1);
          }
          return e;
        }
        mergeWith(t) {
          this.str += t.str;
          return true;
        }
        integrate(t, e) {}
        delete(t) {}
        gc(t) {}
        write(t, e) {
          t.writeString(e === 0 ? this.str : this.str.slice(e));
        }
        getRef() {
          return 4;
        }
      }
      const Gl = (t) => new zl(t.readString());
      const Yl = [Kc, Qc, wl, _l, bl, Cl, Al];
      const Hl = 0;
      const ql = 1;
      const Kl = 2;
      const Zl = 3;
      const Xl = 4;
      const Ql = 5;
      const th = 6;
      class eh {
        constructor(t) {
          this.type = t;
        }
        getLength() {
          return 1;
        }
        getContent() {
          return [this.type];
        }
        isCountable() {
          return true;
        }
        copy() {
          return new eh(this.type._copy());
        }
        splice(t) {
          throw un();
        }
        mergeWith(t) {
          return false;
        }
        integrate(t, e) {
          this.type._integrate(t.doc, e);
        }
        delete(t) {
          let e = this.type._start;
          while (e !== null) {
            if (!e.deleted) {
              e.delete(t);
            } else {
              t._mergeStructs.push(e);
            }
            e = e.right;
          }
          this.type._map.forEach((e) => {
            if (!e.deleted) {
              e.delete(t);
            } else {
              t._mergeStructs.push(e);
            }
          });
          t.changed.delete(this.type);
        }
        gc(t) {
          let e = this.type._start;
          while (e !== null) {
            e.gc(t, true);
            e = e.right;
          }
          this.type._start = null;
          this.type._map.forEach((e) => {
            while (e !== null) {
              e.gc(t, true);
              e = e.left;
            }
          });
          this.type._map = new Map();
        }
        write(t, e) {
          this.type._write(t);
        }
        getRef() {
          return 7;
        }
      }
      const nh = (t) => new eh(Yl[t.readTypeRef()](t));
      const sh = (t, e) => {
        let n = e;
        let s = 0;
        let r;
        do {
          if (s > 0) {
            n = Wi(n.client, n.clock + s);
          }
          r = Uo(t, n);
          s = n.clock - r.id.clock;
          n = r.redone;
        } while (n !== null && r instanceof ch);
        return { item: r, diff: s };
      };
      const rh = (t, e) => {
        while (t !== null && t.keep !== e) {
          t.keep = e;
          t = t.parent._item;
        }
      };
      const ih = (t, e, n) => {
        const { client: s, clock: r } = e.id;
        const i = new ch(Wi(s, r + n), e, Wi(s, r + n - 1), e.right, e.rightOrigin, e.parent, e.parentSub, e.content.splice(n));
        if (e.deleted) {
          i.markDeleted();
        }
        if (e.keep) {
          i.keep = true;
        }
        if (e.redone !== null) {
          i.redone = Wi(e.redone.client, e.redone.clock + n);
        }
        e.right = i;
        if (i.right !== null) {
          i.right.left = i;
        }
        t._mergeStructs.push(i);
        if (i.parentSub !== null && i.right === null) {
          i.parent._map.set(i.parentSub, i);
        }
        e.length = n;
        return i;
      };
      const oh = (t, e, n, s, r) => {
        const i = t.doc;
        const o = i.store;
        const c = i.clientID;
        const l = e.redone;
        if (l !== null) {
          return Io(t, l);
        }
        let h = e.parent._item;
        let a = null;
        let u;
        if (h !== null && h.deleted === true) {
          if (h.redone === null && (!n.has(h) || oh(t, h, n, s, r) === null)) {
            return null;
          }
          while (h.redone !== null) {
            h = Io(t, h.redone);
          }
        }
        const d = h === null ? e.parent : h.content.type;
        if (e.parentSub === null) {
          a = e.left;
          u = e;
          while (a !== null) {
            let e = a;
            while (e !== null && e.parent._item !== h) {
              e = e.redone === null ? null : Io(t, e.redone);
            }
            if (e !== null && e.parent._item === h) {
              a = e;
              break;
            }
            a = a.left;
          }
          while (u !== null) {
            let e = u;
            while (e !== null && e.parent._item !== h) {
              e = e.redone === null ? null : Io(t, e.redone);
            }
            if (e !== null && e.parent._item === h) {
              u = e;
              break;
            }
            u = u.right;
          }
        } else {
          u = null;
          if (e.right && !r) {
            a = e;
            while (a !== null && a.right !== null && ti(s, a.right.id)) {
              a = a.right;
            }
            while (a !== null && a.redone !== null) {
              a = Io(t, a.redone);
            }
            if (a && a.right !== null) {
              return null;
            }
          } else {
            a = d._map.get(e.parentSub) || null;
          }
        }
        const f = Do(o, c);
        const g = Wi(c, f);
        const p = new ch(g, a, a && a.lastId, u, u && u.id, d, e.parentSub, e.content.copy());
        e.redone = g;
        rh(p, true);
        p.integrate(t, 0);
        return p;
      };
      class ch extends vl {
        constructor(t, e, n, s, r, i, o, c) {
          super(t, c.getLength());
          this.origin = n;
          this.left = e;
          this.right = s;
          this.rightOrigin = r;
          this.parent = i;
          this.parentSub = o;
          this.redone = null;
          this.content = c;
          this.info = this.content.isCountable() ? it : 0;
        }
        set marker(t) {
          if ((this.info & ct) > 0 !== t) {
            this.info ^= ct;
          }
        }
        get marker() {
          return (this.info & ct) > 0;
        }
        get keep() {
          return (this.info & rt) > 0;
        }
        set keep(t) {
          if (this.keep !== t) {
            this.info ^= rt;
          }
        }
        get countable() {
          return (this.info & it) > 0;
        }
        get deleted() {
          return (this.info & ot) > 0;
        }
        set deleted(t) {
          if (this.deleted !== t) {
            this.info ^= ot;
          }
        }
        markDeleted() {
          this.info |= ot;
        }
        getMissing(t, e) {
          if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= Do(e, this.origin.client)) {
            return this.origin.client;
          }
          if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= Do(e, this.rightOrigin.client)) {
            return this.rightOrigin.client;
          }
          if (
            this.parent &&
            this.parent.constructor === $i &&
            this.id.client !== this.parent.client &&
            this.parent.clock >= Do(e, this.parent.client)
          ) {
            return this.parent.client;
          }
          if (this.origin) {
            this.left = Mo(t, e, this.origin);
            this.origin = this.left.lastId;
          }
          if (this.rightOrigin) {
            this.right = Io(t, this.rightOrigin);
            this.rightOrigin = this.right.id;
          }
          if ((this.left && this.left.constructor === Ul) || (this.right && this.right.constructor === Ul)) {
            this.parent = null;
          }
          if (!this.parent) {
            if (this.left && this.left.constructor === ch) {
              this.parent = this.left.parent;
              this.parentSub = this.left.parentSub;
            }
            if (this.right && this.right.constructor === ch) {
              this.parent = this.right.parent;
              this.parentSub = this.right.parentSub;
            }
          } else if (this.parent.constructor === $i) {
            const t = Uo(e, this.parent);
            if (t.constructor === Ul) {
              this.parent = null;
            } else {
              this.parent = t.content.type;
            }
          }
          return null;
        }
        integrate(t, e) {
          if (e > 0) {
            this.id.clock += e;
            this.left = Mo(t, t.doc.store, Wi(this.id.client, this.id.clock - 1));
            this.origin = this.left.lastId;
            this.content = this.content.splice(e);
            this.length -= e;
          }
          if (this.parent) {
            if ((!this.left && (!this.right || this.right.left !== null)) || (this.left && this.left.right !== this.right)) {
              let e = this.left;
              let n;
              if (e !== null) {
                n = e.right;
              } else if (this.parentSub !== null) {
                n = this.parent._map.get(this.parentSub) || null;
                while (n !== null && n.left !== null) {
                  n = n.left;
                }
              } else {
                n = this.parent._start;
              }
              const s = new Set();
              const r = new Set();
              while (n !== null && n !== this.right) {
                r.add(n);
                s.add(n);
                if (Ji(this.origin, n.origin)) {
                  if (n.id.client < this.id.client) {
                    e = n;
                    s.clear();
                  } else if (Ji(this.rightOrigin, n.rightOrigin)) {
                    break;
                  }
                } else if (n.origin !== null && r.has(Uo(t.doc.store, n.origin))) {
                  if (!s.has(Uo(t.doc.store, n.origin))) {
                    e = n;
                    s.clear();
                  }
                } else {
                  break;
                }
                n = n.right;
              }
              this.left = e;
            }
            if (this.left !== null) {
              const t = this.left.right;
              this.right = t;
              this.left.right = this;
            } else {
              let t;
              if (this.parentSub !== null) {
                t = this.parent._map.get(this.parentSub) || null;
                while (t !== null && t.left !== null) {
                  t = t.left;
                }
              } else {
                t = this.parent._start;
                this.parent._start = this;
              }
              this.right = t;
            }
            if (this.right !== null) {
              this.right.left = this;
            } else if (this.parentSub !== null) {
              this.parent._map.set(this.parentSub, this);
              if (this.left !== null) {
                this.left.delete(t);
              }
            }
            if (this.parentSub === null && this.countable && !this.deleted) {
              this.parent._length += this.length;
            }
            Ao(t.doc.store, this);
            this.content.integrate(t, this);
            Po(t, this.parent, this.parentSub);
            if ((this.parent._item !== null && this.parent._item.deleted) || (this.parentSub !== null && this.right !== null)) {
              this.delete(t);
            }
          } else {
            new Ul(this.id, this.length).integrate(t, 0);
          }
        }
        get next() {
          let t = this.right;
          while (t !== null && t.deleted) {
            t = t.right;
          }
          return t;
        }
        get prev() {
          let t = this.left;
          while (t !== null && t.deleted) {
            t = t.left;
          }
          return t;
        }
        get lastId() {
          return this.length === 1 ? this.id : Wi(this.id.client, this.id.clock + this.length - 1);
        }
        mergeWith(t) {
          if (
            this.constructor === t.constructor &&
            Ji(t.origin, this.lastId) &&
            this.right === t &&
            Ji(this.rightOrigin, t.rightOrigin) &&
            this.id.client === t.id.client &&
            this.id.clock + this.length === t.id.clock &&
            this.deleted === t.deleted &&
            this.redone === null &&
            t.redone === null &&
            this.content.constructor === t.content.constructor &&
            this.content.mergeWith(t.content)
          ) {
            const e = this.parent._searchMarker;
            if (e) {
              e.forEach((e) => {
                if (e.p === t) {
                  e.p = this;
                  if (!this.deleted && this.countable) {
                    e.index -= this.length;
                  }
                }
              });
            }
            if (t.keep) {
              this.keep = true;
            }
            this.right = t.right;
            if (this.right !== null) {
              this.right.left = this;
            }
            this.length += t.length;
            return true;
          }
          return false;
        }
        delete(t) {
          if (!this.deleted) {
            const e = this.parent;
            if (this.countable && this.parentSub === null) {
              e._length -= this.length;
            }
            this.markDeleted();
            si(t.deleteSet, this.id.client, this.id.clock, this.length);
            Po(t, e, this.parentSub);
            this.content.delete(t);
          }
        }
        gc(t, e) {
          if (!this.deleted) {
            throw dn();
          }
          this.content.gc(t);
          if (e) {
            Oo(t, this, new Ul(this.id, this.length));
          } else {
            this.content = new Ml(this.length);
          }
        }
        write(t, e) {
          const n = e > 0 ? Wi(this.id.client, this.id.clock + e - 1) : this.origin;
          const s = this.rightOrigin;
          const r = this.parentSub;
          const i = (this.content.getRef() & jt) | (n === null ? 0 : ut) | (s === null ? 0 : at) | (r === null ? 0 : ht);
          t.writeInfo(i);
          if (n !== null) {
            t.writeLeftID(n);
          }
          if (s !== null) {
            t.writeRightID(s);
          }
          if (n === null && s === null) {
            const e = this.parent;
            if (e._item !== undefined) {
              const n = e._item;
              if (n === null) {
                const n = Yi(e);
                t.writeParentInfo(true);
                t.writeString(n);
              } else {
                t.writeParentInfo(false);
                t.writeLeftID(n.id);
              }
            } else if (e.constructor === String) {
              t.writeParentInfo(true);
              t.writeString(e);
            } else if (e.constructor === $i) {
              t.writeParentInfo(false);
              t.writeLeftID(e);
            } else {
              dn();
            }
            if (r !== null) {
              t.writeString(r);
            }
          }
          this.content.write(t, e);
        }
      }
      const lh = (t, e) => hh[e & jt](t);
      const hh = [
        () => {
          dn();
        },
        Ol,
        $l,
        Il,
        Gl,
        Vl,
        Bl,
        nh,
        Wl,
        Rl,
        () => {
          dn();
        },
      ];
      const ah = 10;
      class uh extends vl {
        get deleted() {
          return true;
        }
        delete() {}
        mergeWith(t) {
          if (this.constructor !== t.constructor) {
            return false;
          }
          this.length += t.length;
          return true;
        }
        integrate(t, e) {
          dn();
        }
        write(t, e) {
          t.writeInfo(ah);
          Re(t.restEncoder, this.length - e);
        }
        getMissing(t, e) {
          return null;
        }
      }
      const dh = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof n.g !== "undefined" ? n.g : {};
      const fh = "__ $YJS$ __";
      if (dh[fh] === true) {
        console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
      }
      dh[fh] = true;
    },
  },
]);
