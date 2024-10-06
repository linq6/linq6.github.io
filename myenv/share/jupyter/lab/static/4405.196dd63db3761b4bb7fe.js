"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [4405],
  {
    74405: (t, e, n) => {
      n.r(e);
      n.d(e, {
        Annotation: () => ct,
        AnnotationType: () => ut,
        ChangeDesc: () => A,
        ChangeSet: () => C,
        CharCategory: () => bt,
        Compartment: () => Y,
        EditorSelection: () => J,
        EditorState: () => Ct,
        Facet: () => q,
        Line: () => u,
        MapMode: () => M,
        Prec: () => Q,
        Range: () => Tt,
        RangeSet: () => Nt,
        RangeSetBuilder: () => Jt,
        RangeValue: () => Ot,
        SelectionRange: () => D,
        StateEffect: () => dt,
        StateEffectType: () => gt,
        StateField: () => G,
        Text: () => i,
        Transaction: () => pt,
        codePointAt: () => I,
        codePointSize: () => P,
        combineConfig: () => Rt,
        countColumn: () => Ht,
        findClusterBreak: () => x,
        findColumn: () => Kt,
        fromCodePoint: () => b,
      });
      class i {
        lineAt(t) {
          if (t < 0 || t > this.length) throw new RangeError(`Invalid position ${t} in document of length ${this.length}`);
          return this.lineInner(t, false, 1, 0);
        }
        line(t) {
          if (t < 1 || t > this.lines) throw new RangeError(`Invalid line number ${t} in ${this.lines}-line document`);
          return this.lineInner(t, true, 1, 0);
        }
        replace(t, e, n) {
          [t, e] = g(this, t, e);
          let i = [];
          this.decompose(0, t, i, 2);
          if (n.length) n.decompose(0, n.length, i, 1 | 2);
          this.decompose(e, this.length, i, 1);
          return r.from(i, this.length - (e - t) + n.length);
        }
        append(t) {
          return this.replace(this.length, this.length, t);
        }
        slice(t, e = this.length) {
          [t, e] = g(this, t, e);
          let n = [];
          this.decompose(t, e, n, 0);
          return r.from(n, e - t);
        }
        eq(t) {
          if (t == this) return true;
          if (t.length != this.length || t.lines != this.lines) return false;
          let e = this.scanIdentical(t, 1),
            n = this.length - this.scanIdentical(t, -1);
          let i = new a(this),
            s = new a(t);
          for (let r = e, l = e; ; ) {
            i.next(r);
            s.next(r);
            r = 0;
            if (i.lineBreak != s.lineBreak || i.done != s.done || i.value != s.value) return false;
            l += i.value.length;
            if (i.done || l >= n) return true;
          }
        }
        iter(t = 1) {
          return new a(this, t);
        }
        iterRange(t, e = this.length) {
          return new f(this, t, e);
        }
        iterLines(t, e) {
          let n;
          if (t == null) {
            n = this.iter();
          } else {
            if (e == null) e = this.lines + 1;
            let i = this.line(t).from;
            n = this.iterRange(i, Math.max(i, e == this.lines + 1 ? this.length : e <= 1 ? 0 : this.line(e - 1).to));
          }
          return new c(n);
        }
        toString() {
          return this.sliceString(0);
        }
        toJSON() {
          let t = [];
          this.flatten(t);
          return t;
        }
        constructor() {}
        static of(t) {
          if (t.length == 0) throw new RangeError("A document must have at least one line");
          if (t.length == 1 && !t[0]) return i.empty;
          return t.length <= 32 ? new s(t) : r.from(s.split(t, []));
        }
      }
      class s extends i {
        constructor(t, e = l(t)) {
          super();
          this.text = t;
          this.length = e;
        }
        get lines() {
          return this.text.length;
        }
        get children() {
          return null;
        }
        lineInner(t, e, n, i) {
          for (let s = 0; ; s++) {
            let r = this.text[s],
              l = i + r.length;
            if ((e ? n : l) >= t) return new u(i, l, n, r);
            i = l + 1;
            n++;
          }
        }
        decompose(t, e, n, i) {
          let r = t <= 0 && e >= this.length ? this : new s(o(this.text, t, e), Math.min(e, this.length) - Math.max(0, t));
          if (i & 1) {
            let t = n.pop();
            let e = h(r.text, t.text.slice(), 0, r.length);
            if (e.length <= 32) {
              n.push(new s(e, t.length + r.length));
            } else {
              let t = e.length >> 1;
              n.push(new s(e.slice(0, t)), new s(e.slice(t)));
            }
          } else {
            n.push(r);
          }
        }
        replace(t, e, n) {
          if (!(n instanceof s)) return super.replace(t, e, n);
          [t, e] = g(this, t, e);
          let i = h(this.text, h(n.text, o(this.text, 0, t)), e);
          let l = this.length + n.length - (e - t);
          if (i.length <= 32) return new s(i, l);
          return r.from(s.split(i, []), l);
        }
        sliceString(t, e = this.length, n = "\n") {
          [t, e] = g(this, t, e);
          let i = "";
          for (let s = 0, r = 0; s <= e && r < this.text.length; r++) {
            let l = this.text[r],
              h = s + l.length;
            if (s > t && r) i += n;
            if (t < h && e > s) i += l.slice(Math.max(0, t - s), e - s);
            s = h + 1;
          }
          return i;
        }
        flatten(t) {
          for (let e of this.text) t.push(e);
        }
        scanIdentical() {
          return 0;
        }
        static split(t, e) {
          let n = [],
            i = -1;
          for (let r of t) {
            n.push(r);
            i += r.length + 1;
            if (n.length == 32) {
              e.push(new s(n, i));
              n = [];
              i = -1;
            }
          }
          if (i > -1) e.push(new s(n, i));
          return e;
        }
      }
      class r extends i {
        constructor(t, e) {
          super();
          this.children = t;
          this.length = e;
          this.lines = 0;
          for (let n of t) this.lines += n.lines;
        }
        lineInner(t, e, n, i) {
          for (let s = 0; ; s++) {
            let r = this.children[s],
              l = i + r.length,
              h = n + r.lines - 1;
            if ((e ? h : l) >= t) return r.lineInner(t, e, n, i);
            i = l + 1;
            n = h + 1;
          }
        }
        decompose(t, e, n, i) {
          for (let s = 0, r = 0; r <= e && s < this.children.length; s++) {
            let l = this.children[s],
              h = r + l.length;
            if (t <= h && e >= r) {
              let s = i & ((r <= t ? 1 : 0) | (h >= e ? 2 : 0));
              if (r >= t && h <= e && !s) n.push(l);
              else l.decompose(t - r, e - r, n, s);
            }
            r = h + 1;
          }
        }
        replace(t, e, n) {
          [t, e] = g(this, t, e);
          if (n.lines < this.lines)
            for (let i = 0, s = 0; i < this.children.length; i++) {
              let l = this.children[i],
                h = s + l.length;
              if (t >= s && e <= h) {
                let o = l.replace(t - s, e - s, n);
                let a = this.lines - l.lines + o.lines;
                if (o.lines < a >> (5 - 1) && o.lines > a >> (5 + 1)) {
                  let s = this.children.slice();
                  s[i] = o;
                  return new r(s, this.length - (e - t) + n.length);
                }
                return super.replace(s, h, o);
              }
              s = h + 1;
            }
          return super.replace(t, e, n);
        }
        sliceString(t, e = this.length, n = "\n") {
          [t, e] = g(this, t, e);
          let i = "";
          for (let s = 0, r = 0; s < this.children.length && r <= e; s++) {
            let l = this.children[s],
              h = r + l.length;
            if (r > t && s) i += n;
            if (t < h && e > r) i += l.sliceString(t - r, e - r, n);
            r = h + 1;
          }
          return i;
        }
        flatten(t) {
          for (let e of this.children) e.flatten(t);
        }
        scanIdentical(t, e) {
          if (!(t instanceof r)) return 0;
          let n = 0;
          let [i, s, l, h] = e > 0 ? [0, 0, this.children.length, t.children.length] : [this.children.length - 1, t.children.length - 1, -1, -1];
          for (; ; i += e, s += e) {
            if (i == l || s == h) return n;
            let r = this.children[i],
              o = t.children[s];
            if (r != o) return n + r.scanIdentical(o, e);
            n += r.length + 1;
          }
        }
        static from(t, e = t.reduce((t, e) => t + e.length + 1, -1)) {
          let n = 0;
          for (let s of t) n += s.lines;
          if (n < 32) {
            let n = [];
            for (let e of t) e.flatten(n);
            return new s(n, e);
          }
          let i = Math.max(32, n >> 5),
            l = i << 1,
            h = i >> 1;
          let o = [],
            a = 0,
            f = -1,
            c = [];
          function u(t) {
            let e;
            if (t.lines > l && t instanceof r) {
              for (let e of t.children) u(e);
            } else if (t.lines > h && (a > h || !a)) {
              g();
              o.push(t);
            } else if (t instanceof s && a && (e = c[c.length - 1]) instanceof s && t.lines + e.lines <= 32) {
              a += t.lines;
              f += t.length + 1;
              c[c.length - 1] = new s(e.text.concat(t.text), e.length + 1 + t.length);
            } else {
              if (a + t.lines > i) g();
              a += t.lines;
              f += t.length + 1;
              c.push(t);
            }
          }
          function g() {
            if (a == 0) return;
            o.push(c.length == 1 ? c[0] : r.from(c, f));
            f = -1;
            a = c.length = 0;
          }
          for (let s of t) u(s);
          g();
          return o.length == 1 ? o[0] : new r(o, e);
        }
      }
      i.empty = new s([""], 0);
      function l(t) {
        let e = -1;
        for (let n of t) e += n.length + 1;
        return e;
      }
      function h(t, e, n = 0, i = 1e9) {
        for (let s = 0, r = 0, l = true; r < t.length && s <= i; r++) {
          let h = t[r],
            o = s + h.length;
          if (o >= n) {
            if (o > i) h = h.slice(0, i - s);
            if (s < n) h = h.slice(n - s);
            if (l) {
              e[e.length - 1] += h;
              l = false;
            } else e.push(h);
          }
          s = o + 1;
        }
        return e;
      }
      function o(t, e, n) {
        return h(t, [""], e, n);
      }
      class a {
        constructor(t, e = 1) {
          this.dir = e;
          this.done = false;
          this.lineBreak = false;
          this.value = "";
          this.nodes = [t];
          this.offsets = [e > 0 ? 1 : (t instanceof s ? t.text.length : t.children.length) << 1];
        }
        nextInner(t, e) {
          this.done = this.lineBreak = false;
          for (;;) {
            let n = this.nodes.length - 1;
            let i = this.nodes[n],
              r = this.offsets[n],
              l = r >> 1;
            let h = i instanceof s ? i.text.length : i.children.length;
            if (l == (e > 0 ? h : 0)) {
              if (n == 0) {
                this.done = true;
                this.value = "";
                return this;
              }
              if (e > 0) this.offsets[n - 1]++;
              this.nodes.pop();
              this.offsets.pop();
            } else if ((r & 1) == (e > 0 ? 0 : 1)) {
              this.offsets[n] += e;
              if (t == 0) {
                this.lineBreak = true;
                this.value = "\n";
                return this;
              }
              t--;
            } else if (i instanceof s) {
              let s = i.text[l + (e < 0 ? -1 : 0)];
              this.offsets[n] += e;
              if (s.length > Math.max(0, t)) {
                this.value = t == 0 ? s : e > 0 ? s.slice(t) : s.slice(0, s.length - t);
                return this;
              }
              t -= s.length;
            } else {
              let r = i.children[l + (e < 0 ? -1 : 0)];
              if (t > r.length) {
                t -= r.length;
                this.offsets[n] += e;
              } else {
                if (e < 0) this.offsets[n]--;
                this.nodes.push(r);
                this.offsets.push(e > 0 ? 1 : (r instanceof s ? r.text.length : r.children.length) << 1);
              }
            }
          }
        }
        next(t = 0) {
          if (t < 0) {
            this.nextInner(-t, -this.dir);
            t = this.value.length;
          }
          return this.nextInner(t, this.dir);
        }
      }
      class f {
        constructor(t, e, n) {
          this.value = "";
          this.done = false;
          this.cursor = new a(t, e > n ? -1 : 1);
          this.pos = e > n ? t.length : 0;
          this.from = Math.min(e, n);
          this.to = Math.max(e, n);
        }
        nextInner(t, e) {
          if (e < 0 ? this.pos <= this.from : this.pos >= this.to) {
            this.value = "";
            this.done = true;
            return this;
          }
          t += Math.max(0, e < 0 ? this.pos - this.to : this.from - this.pos);
          let n = e < 0 ? this.pos - this.from : this.to - this.pos;
          if (t > n) t = n;
          n -= t;
          let { value: i } = this.cursor.next(t);
          this.pos += (i.length + t) * e;
          this.value = i.length <= n ? i : e < 0 ? i.slice(i.length - n) : i.slice(0, n);
          this.done = !this.value;
          return this;
        }
        next(t = 0) {
          if (t < 0) t = Math.max(t, this.from - this.pos);
          else if (t > 0) t = Math.min(t, this.to - this.pos);
          return this.nextInner(t, this.cursor.dir);
        }
        get lineBreak() {
          return this.cursor.lineBreak && this.value != "";
        }
      }
      class c {
        constructor(t) {
          this.inner = t;
          this.afterBreak = true;
          this.value = "";
          this.done = false;
        }
        next(t = 0) {
          let { done: e, lineBreak: n, value: i } = this.inner.next(t);
          if (e && this.afterBreak) {
            this.value = "";
            this.afterBreak = false;
          } else if (e) {
            this.done = true;
            this.value = "";
          } else if (n) {
            if (this.afterBreak) {
              this.value = "";
            } else {
              this.afterBreak = true;
              this.next();
            }
          } else {
            this.value = i;
            this.afterBreak = false;
          }
          return this;
        }
        get lineBreak() {
          return false;
        }
      }
      if (typeof Symbol != "undefined") {
        i.prototype[Symbol.iterator] = function () {
          return this.iter();
        };
        a.prototype[Symbol.iterator] =
          f.prototype[Symbol.iterator] =
          c.prototype[Symbol.iterator] =
            function () {
              return this;
            };
      }
      class u {
        constructor(t, e, n, i) {
          this.from = t;
          this.to = e;
          this.number = n;
          this.text = i;
        }
        get length() {
          return this.to - this.from;
        }
      }
      function g(t, e, n) {
        e = Math.max(0, Math.min(t.length, e));
        return [e, Math.max(e, Math.min(t.length, n))];
      }
      let d =
        "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o"
          .split(",")
          .map((t) => (t ? parseInt(t, 36) : 1));
      for (let Xt = 1; Xt < d.length; Xt++) d[Xt] += d[Xt - 1];
      function p(t) {
        for (let e = 1; e < d.length; e += 2) if (d[e] > t) return d[e - 1] <= t;
        return false;
      }
      function m(t) {
        return t >= 127462 && t <= 127487;
      }
      const w = 8205;
      function x(t, e, n = true, i = true) {
        return (n ? v : k)(t, e, i);
      }
      function v(t, e, n) {
        if (e == t.length) return e;
        if (e && y(t.charCodeAt(e)) && S(t.charCodeAt(e - 1))) e--;
        let i = I(t, e);
        e += P(i);
        while (e < t.length) {
          let s = I(t, e);
          if (i == w || s == w || (n && p(s))) {
            e += P(s);
            i = s;
          } else if (m(s)) {
            let n = 0,
              i = e - 2;
            while (i >= 0 && m(I(t, i))) {
              n++;
              i -= 2;
            }
            if (n % 2 == 0) break;
            else e += 2;
          } else {
            break;
          }
        }
        return e;
      }
      function k(t, e, n) {
        while (e > 0) {
          let i = v(t, e - 2, n);
          if (i < e) return i;
          e--;
        }
        return 0;
      }
      function y(t) {
        return t >= 56320 && t < 57344;
      }
      function S(t) {
        return t >= 55296 && t < 56320;
      }
      function I(t, e) {
        let n = t.charCodeAt(e);
        if (!S(n) || e + 1 == t.length) return n;
        let i = t.charCodeAt(e + 1);
        if (!y(i)) return n;
        return ((n - 55296) << 10) + (i - 56320) + 65536;
      }
      function b(t) {
        if (t <= 65535) return String.fromCharCode(t);
        t -= 65536;
        return String.fromCharCode((t >> 10) + 55296, (t & 1023) + 56320);
      }
      function P(t) {
        return t < 65536 ? 1 : 2;
      }
      const E = /\r\n?|\n/;
      var M = (function (t) {
        t[(t["Simple"] = 0)] = "Simple";
        t[(t["TrackDel"] = 1)] = "TrackDel";
        t[(t["TrackBefore"] = 2)] = "TrackBefore";
        t[(t["TrackAfter"] = 3)] = "TrackAfter";
        return t;
      })(M || (M = {}));
      class A {
        constructor(t) {
          this.sections = t;
        }
        get length() {
          let t = 0;
          for (let e = 0; e < this.sections.length; e += 2) t += this.sections[e];
          return t;
        }
        get newLength() {
          let t = 0;
          for (let e = 0; e < this.sections.length; e += 2) {
            let n = this.sections[e + 1];
            t += n < 0 ? this.sections[e] : n;
          }
          return t;
        }
        get empty() {
          return this.sections.length == 0 || (this.sections.length == 2 && this.sections[1] < 0);
        }
        iterGaps(t) {
          for (let e = 0, n = 0, i = 0; e < this.sections.length; ) {
            let s = this.sections[e++],
              r = this.sections[e++];
            if (r < 0) {
              t(n, i, s);
              i += s;
            } else {
              i += r;
            }
            n += s;
          }
        }
        iterChangedRanges(t, e = false) {
          T(this, t, e);
        }
        get invertedDesc() {
          let t = [];
          for (let e = 0; e < this.sections.length; ) {
            let n = this.sections[e++],
              i = this.sections[e++];
            if (i < 0) t.push(n, i);
            else t.push(i, n);
          }
          return new A(t);
        }
        composeDesc(t) {
          return this.empty ? t : t.empty ? this : B(this, t);
        }
        mapDesc(t, e = false) {
          return t.empty ? this : F(this, t, e);
        }
        mapPos(t, e = -1, n = M.Simple) {
          let i = 0,
            s = 0;
          for (let r = 0; r < this.sections.length; ) {
            let l = this.sections[r++],
              h = this.sections[r++],
              o = i + l;
            if (h < 0) {
              if (o > t) return s + (t - i);
              s += l;
            } else {
              if (n != M.Simple && o >= t && ((n == M.TrackDel && i < t && o > t) || (n == M.TrackBefore && i < t) || (n == M.TrackAfter && o > t)))
                return null;
              if (o > t || (o == t && e < 0 && !l)) return t == i || e < 0 ? s : s + h;
              s += h;
            }
            i = o;
          }
          if (t > i) throw new RangeError(`Position ${t} is out of range for changeset of length ${i}`);
          return s;
        }
        touchesRange(t, e = t) {
          for (let n = 0, i = 0; n < this.sections.length && i <= e; ) {
            let s = this.sections[n++],
              r = this.sections[n++],
              l = i + s;
            if (r >= 0 && i <= e && l >= t) return i < t && l > e ? "cover" : true;
            i = l;
          }
          return false;
        }
        toString() {
          let t = "";
          for (let e = 0; e < this.sections.length; ) {
            let n = this.sections[e++],
              i = this.sections[e++];
            t += (t ? " " : "") + n + (i >= 0 ? ":" + i : "");
          }
          return t;
        }
        toJSON() {
          return this.sections;
        }
        static fromJSON(t) {
          if (!Array.isArray(t) || t.length % 2 || t.some((t) => typeof t != "number"))
            throw new RangeError("Invalid JSON representation of ChangeDesc");
          return new A(t);
        }
        static create(t) {
          return new A(t);
        }
      }
      class C extends A {
        constructor(t, e) {
          super(t);
          this.inserted = e;
        }
        apply(t) {
          if (this.length != t.length) throw new RangeError("Applying change set to a document with the wrong length");
          T(this, (e, n, i, s, r) => (t = t.replace(i, i + (n - e), r)), false);
          return t;
        }
        mapDesc(t, e = false) {
          return F(this, t, e, true);
        }
        invert(t) {
          let e = this.sections.slice(),
            n = [];
          for (let s = 0, r = 0; s < e.length; s += 2) {
            let l = e[s],
              h = e[s + 1];
            if (h >= 0) {
              e[s] = h;
              e[s + 1] = l;
              let o = s >> 1;
              while (n.length < o) n.push(i.empty);
              n.push(l ? t.slice(r, r + l) : i.empty);
            }
            r += l;
          }
          return new C(e, n);
        }
        compose(t) {
          return this.empty ? t : t.empty ? this : B(this, t, true);
        }
        map(t, e = false) {
          return t.empty ? this : F(this, t, e, true);
        }
        iterChanges(t, e = false) {
          T(this, t, e);
        }
        get desc() {
          return A.create(this.sections);
        }
        filter(t) {
          let e = [],
            n = [],
            i = [];
          let s = new N(this);
          t: for (let r = 0, l = 0; ; ) {
            let h = r == t.length ? 1e9 : t[r++];
            while (l < h || (l == h && s.len == 0)) {
              if (s.done) break t;
              let t = Math.min(s.len, h - l);
              R(i, t, -1);
              let r = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
              R(e, t, r);
              if (r > 0) O(n, e, s.text);
              s.forward(t);
              l += t;
            }
            let o = t[r++];
            while (l < o) {
              if (s.done) break t;
              let t = Math.min(s.len, o - l);
              R(e, t, -1);
              R(i, t, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0);
              s.forward(t);
              l += t;
            }
          }
          return { changes: new C(e, n), filtered: A.create(i) };
        }
        toJSON() {
          let t = [];
          for (let e = 0; e < this.sections.length; e += 2) {
            let n = this.sections[e],
              i = this.sections[e + 1];
            if (i < 0) t.push(n);
            else if (i == 0) t.push([n]);
            else t.push([n].concat(this.inserted[e >> 1].toJSON()));
          }
          return t;
        }
        static of(t, e, n) {
          let s = [],
            r = [],
            l = 0;
          let h = null;
          function o(t = false) {
            if (!t && !s.length) return;
            if (l < e) R(s, e - l, -1);
            let n = new C(s, r);
            h = h ? h.compose(n.map(h)) : n;
            s = [];
            r = [];
            l = 0;
          }
          function a(t) {
            if (Array.isArray(t)) {
              for (let e of t) a(e);
            } else if (t instanceof C) {
              if (t.length != e) throw new RangeError(`Mismatched change set length (got ${t.length}, expected ${e})`);
              o();
              h = h ? h.compose(t.map(h)) : t;
            } else {
              let { from: h, to: a = h, insert: f } = t;
              if (h > a || h < 0 || a > e) throw new RangeError(`Invalid change range ${h} to ${a} (in doc of length ${e})`);
              let c = !f ? i.empty : typeof f == "string" ? i.of(f.split(n || E)) : f;
              let u = c.length;
              if (h == a && u == 0) return;
              if (h < l) o();
              if (h > l) R(s, h - l, -1);
              R(s, a - h, u);
              O(r, s, c);
              l = a;
            }
          }
          a(t);
          o(!h);
          return h;
        }
        static empty(t) {
          return new C(t ? [t, -1] : [], []);
        }
        static fromJSON(t) {
          if (!Array.isArray(t)) throw new RangeError("Invalid JSON representation of ChangeSet");
          let e = [],
            n = [];
          for (let s = 0; s < t.length; s++) {
            let r = t[s];
            if (typeof r == "number") {
              e.push(r, -1);
            } else if (!Array.isArray(r) || typeof r[0] != "number" || r.some((t, e) => e && typeof t != "string")) {
              throw new RangeError("Invalid JSON representation of ChangeSet");
            } else if (r.length == 1) {
              e.push(r[0], 0);
            } else {
              while (n.length < s) n.push(i.empty);
              n[s] = i.of(r.slice(1));
              e.push(r[0], n[s].length);
            }
          }
          return new C(e, n);
        }
        static createSet(t, e) {
          return new C(t, e);
        }
      }
      function R(t, e, n, i = false) {
        if (e == 0 && n <= 0) return;
        let s = t.length - 2;
        if (s >= 0 && n <= 0 && n == t[s + 1]) t[s] += e;
        else if (e == 0 && t[s] == 0) t[s + 1] += n;
        else if (i) {
          t[s] += e;
          t[s + 1] += n;
        } else t.push(e, n);
      }
      function O(t, e, n) {
        if (n.length == 0) return;
        let s = (e.length - 2) >> 1;
        if (s < t.length) {
          t[t.length - 1] = t[t.length - 1].append(n);
        } else {
          while (t.length < s) t.push(i.empty);
          t.push(n);
        }
      }
      function T(t, e, n) {
        let s = t.inserted;
        for (let r = 0, l = 0, h = 0; h < t.sections.length; ) {
          let o = t.sections[h++],
            a = t.sections[h++];
          if (a < 0) {
            r += o;
            l += o;
          } else {
            let f = r,
              c = l,
              u = i.empty;
            for (;;) {
              f += o;
              c += a;
              if (a && s) u = u.append(s[(h - 2) >> 1]);
              if (n || h == t.sections.length || t.sections[h + 1] < 0) break;
              o = t.sections[h++];
              a = t.sections[h++];
            }
            e(r, f, l, c, u);
            r = f;
            l = c;
          }
        }
      }
      function F(t, e, n, i = false) {
        let s = [],
          r = i ? [] : null;
        let l = new N(t),
          h = new N(e);
        for (let o = -1; ; ) {
          if (l.ins == -1 && h.ins == -1) {
            let t = Math.min(l.len, h.len);
            R(s, t, -1);
            l.forward(t);
            h.forward(t);
          } else if (h.ins >= 0 && (l.ins < 0 || o == l.i || (l.off == 0 && (h.len < l.len || (h.len == l.len && !n))))) {
            let t = h.len;
            R(s, h.ins, -1);
            while (t) {
              let e = Math.min(l.len, t);
              if (l.ins >= 0 && o < l.i && l.len <= e) {
                R(s, 0, l.ins);
                if (r) O(r, s, l.text);
                o = l.i;
              }
              l.forward(e);
              t -= e;
            }
            h.next();
          } else if (l.ins >= 0) {
            let t = 0,
              e = l.len;
            while (e) {
              if (h.ins == -1) {
                let n = Math.min(e, h.len);
                t += n;
                e -= n;
                h.forward(n);
              } else if (h.ins == 0 && h.len < e) {
                e -= h.len;
                h.next();
              } else {
                break;
              }
            }
            R(s, t, o < l.i ? l.ins : 0);
            if (r && o < l.i) O(r, s, l.text);
            o = l.i;
            l.forward(l.len - e);
          } else if (l.done && h.done) {
            return r ? C.createSet(s, r) : A.create(s);
          } else {
            throw new Error("Mismatched change set lengths");
          }
        }
      }
      function B(t, e, n = false) {
        let i = [];
        let s = n ? [] : null;
        let r = new N(t),
          l = new N(e);
        for (let h = false; ; ) {
          if (r.done && l.done) {
            return s ? C.createSet(i, s) : A.create(i);
          } else if (r.ins == 0) {
            R(i, r.len, 0, h);
            r.next();
          } else if (l.len == 0 && !l.done) {
            R(i, 0, l.ins, h);
            if (s) O(s, i, l.text);
            l.next();
          } else if (r.done || l.done) {
            throw new Error("Mismatched change set lengths");
          } else {
            let t = Math.min(r.len2, l.len),
              e = i.length;
            if (r.ins == -1) {
              let e = l.ins == -1 ? -1 : l.off ? 0 : l.ins;
              R(i, t, e, h);
              if (s && e) O(s, i, l.text);
            } else if (l.ins == -1) {
              R(i, r.off ? 0 : r.len, t, h);
              if (s) O(s, i, r.textBit(t));
            } else {
              R(i, r.off ? 0 : r.len, l.off ? 0 : l.ins, h);
              if (s && !l.off) O(s, i, l.text);
            }
            h = (r.ins > t || (l.ins >= 0 && l.len > t)) && (h || i.length > e);
            r.forward2(t);
            l.forward(t);
          }
        }
      }
      class N {
        constructor(t) {
          this.set = t;
          this.i = 0;
          this.next();
        }
        next() {
          let { sections: t } = this.set;
          if (this.i < t.length) {
            this.len = t[this.i++];
            this.ins = t[this.i++];
          } else {
            this.len = 0;
            this.ins = -2;
          }
          this.off = 0;
        }
        get done() {
          return this.ins == -2;
        }
        get len2() {
          return this.ins < 0 ? this.len : this.ins;
        }
        get text() {
          let { inserted: t } = this.set,
            e = (this.i - 2) >> 1;
          return e >= t.length ? i.empty : t[e];
        }
        textBit(t) {
          let { inserted: e } = this.set,
            n = (this.i - 2) >> 1;
          return n >= e.length && !t ? i.empty : e[n].slice(this.off, t == null ? undefined : this.off + t);
        }
        forward(t) {
          if (t == this.len) this.next();
          else {
            this.len -= t;
            this.off += t;
          }
        }
        forward2(t) {
          if (this.ins == -1) this.forward(t);
          else if (t == this.ins) this.next();
          else {
            this.ins -= t;
            this.off += t;
          }
        }
      }
      class D {
        constructor(t, e, n) {
          this.from = t;
          this.to = e;
          this.flags = n;
        }
        get anchor() {
          return this.flags & 32 ? this.to : this.from;
        }
        get head() {
          return this.flags & 32 ? this.from : this.to;
        }
        get empty() {
          return this.from == this.to;
        }
        get assoc() {
          return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
        }
        get bidiLevel() {
          let t = this.flags & 7;
          return t == 7 ? null : t;
        }
        get goalColumn() {
          let t = this.flags >> 6;
          return t == 16777215 ? undefined : t;
        }
        map(t, e = -1) {
          let n, i;
          if (this.empty) {
            n = i = t.mapPos(this.from, e);
          } else {
            n = t.mapPos(this.from, 1);
            i = t.mapPos(this.to, -1);
          }
          return n == this.from && i == this.to ? this : new D(n, i, this.flags);
        }
        extend(t, e = t) {
          if (t <= this.anchor && e >= this.anchor) return J.range(t, e);
          let n = Math.abs(t - this.anchor) > Math.abs(e - this.anchor) ? t : e;
          return J.range(this.anchor, n);
        }
        eq(t, e = false) {
          return this.anchor == t.anchor && this.head == t.head && (!e || !this.empty || this.assoc == t.assoc);
        }
        toJSON() {
          return { anchor: this.anchor, head: this.head };
        }
        static fromJSON(t) {
          if (!t || typeof t.anchor != "number" || typeof t.head != "number") throw new RangeError("Invalid JSON representation for SelectionRange");
          return J.range(t.anchor, t.head);
        }
        static create(t, e, n) {
          return new D(t, e, n);
        }
      }
      class J {
        constructor(t, e) {
          this.ranges = t;
          this.mainIndex = e;
        }
        map(t, e = -1) {
          if (t.empty) return this;
          return J.create(
            this.ranges.map((n) => n.map(t, e)),
            this.mainIndex
          );
        }
        eq(t, e = false) {
          if (this.ranges.length != t.ranges.length || this.mainIndex != t.mainIndex) return false;
          for (let n = 0; n < this.ranges.length; n++) if (!this.ranges[n].eq(t.ranges[n], e)) return false;
          return true;
        }
        get main() {
          return this.ranges[this.mainIndex];
        }
        asSingle() {
          return this.ranges.length == 1 ? this : new J([this.main], 0);
        }
        addRange(t, e = true) {
          return J.create([t].concat(this.ranges), e ? 0 : this.mainIndex + 1);
        }
        replaceRange(t, e = this.mainIndex) {
          let n = this.ranges.slice();
          n[e] = t;
          return J.create(n, this.mainIndex);
        }
        toJSON() {
          return { ranges: this.ranges.map((t) => t.toJSON()), main: this.mainIndex };
        }
        static fromJSON(t) {
          if (!t || !Array.isArray(t.ranges) || typeof t.main != "number" || t.main >= t.ranges.length)
            throw new RangeError("Invalid JSON representation for EditorSelection");
          return new J(
            t.ranges.map((t) => D.fromJSON(t)),
            t.main
          );
        }
        static single(t, e = t) {
          return new J([J.range(t, e)], 0);
        }
        static create(t, e = 0) {
          if (t.length == 0) throw new RangeError("A selection needs at least one range");
          for (let n = 0, i = 0; i < t.length; i++) {
            let s = t[i];
            if (s.empty ? s.from <= n : s.from < n) return J.normalized(t.slice(), e);
            n = s.to;
          }
          return new J(t, e);
        }
        static cursor(t, e = 0, n, i) {
          return D.create(
            t,
            t,
            (e == 0 ? 0 : e < 0 ? 8 : 16) | (n == null ? 7 : Math.min(6, n)) | ((i !== null && i !== void 0 ? i : 16777215) << 6)
          );
        }
        static range(t, e, n, i) {
          let s = ((n !== null && n !== void 0 ? n : 16777215) << 6) | (i == null ? 7 : Math.min(6, i));
          return e < t ? D.create(e, t, 32 | 16 | s) : D.create(t, e, (e > t ? 8 : 0) | s);
        }
        static normalized(t, e = 0) {
          let n = t[e];
          t.sort((t, e) => t.from - e.from);
          e = t.indexOf(n);
          for (let i = 1; i < t.length; i++) {
            let n = t[i],
              s = t[i - 1];
            if (n.empty ? n.from <= s.to : n.from < s.to) {
              let r = s.from,
                l = Math.max(n.to, s.to);
              if (i <= e) e--;
              t.splice(--i, 2, n.anchor > n.head ? J.range(l, r) : J.range(r, l));
            }
          }
          return new J(t, e);
        }
      }
      function L(t, e) {
        for (let n of t.ranges) if (n.to > e) throw new RangeError("Selection points outside of document");
      }
      let j = 0;
      class q {
        constructor(t, e, n, i, s) {
          this.combine = t;
          this.compareInput = e;
          this.compare = n;
          this.isStatic = i;
          this.id = j++;
          this.default = t([]);
          this.extensions = typeof s == "function" ? s(this) : s;
        }
        get reader() {
          return this;
        }
        static define(t = {}) {
          return new q(
            t.combine || ((t) => t),
            t.compareInput || ((t, e) => t === e),
            t.compare || (!t.combine ? $ : (t, e) => t === e),
            !!t.static,
            t.enables
          );
        }
        of(t) {
          return new _([], this, 0, t);
        }
        compute(t, e) {
          if (this.isStatic) throw new Error("Can't compute a static facet");
          return new _(t, this, 1, e);
        }
        computeN(t, e) {
          if (this.isStatic) throw new Error("Can't compute a static facet");
          return new _(t, this, 2, e);
        }
        from(t, e) {
          if (!e) e = (t) => t;
          return this.compute([t], (n) => e(n.field(t)));
        }
      }
      function $(t, e) {
        return t == e || (t.length == e.length && t.every((t, n) => t === e[n]));
      }
      class _ {
        constructor(t, e, n, i) {
          this.dependencies = t;
          this.facet = e;
          this.type = n;
          this.value = i;
          this.id = j++;
        }
        dynamicSlot(t) {
          var e;
          let n = this.value;
          let i = this.facet.compareInput;
          let s = this.id,
            r = t[s] >> 1,
            l = this.type == 2;
          let h = false,
            o = false,
            a = [];
          for (let f of this.dependencies) {
            if (f == "doc") h = true;
            else if (f == "selection") o = true;
            else if ((((e = t[f.id]) !== null && e !== void 0 ? e : 1) & 1) == 0) a.push(t[f.id]);
          }
          return {
            create(t) {
              t.values[r] = n(t);
              return 1;
            },
            update(t, e) {
              if ((h && e.docChanged) || (o && (e.docChanged || e.selection)) || V(t, a)) {
                let e = n(t);
                if (l ? !z(e, t.values[r], i) : !i(e, t.values[r])) {
                  t.values[r] = e;
                  return 1;
                }
              }
              return 0;
            },
            reconfigure: (t, e) => {
              let h,
                o = e.config.address[s];
              if (o != null) {
                let s = it(e, o);
                if (
                  this.dependencies.every((n) =>
                    n instanceof q ? e.facet(n) === t.facet(n) : n instanceof G ? e.field(n, false) == t.field(n, false) : true
                  ) ||
                  (l ? z((h = n(t)), s, i) : i((h = n(t)), s))
                ) {
                  t.values[r] = s;
                  return 0;
                }
              } else {
                h = n(t);
              }
              t.values[r] = h;
              return 1;
            },
          };
        }
      }
      function z(t, e, n) {
        if (t.length != e.length) return false;
        for (let i = 0; i < t.length; i++) if (!n(t[i], e[i])) return false;
        return true;
      }
      function V(t, e) {
        let n = false;
        for (let i of e) if (nt(t, i) & 1) n = true;
        return n;
      }
      function W(t, e, n) {
        let i = n.map((e) => t[e.id]);
        let s = n.map((t) => t.type);
        let r = i.filter((t) => !(t & 1));
        let l = t[e.id] >> 1;
        function h(t) {
          let n = [];
          for (let e = 0; e < i.length; e++) {
            let r = it(t, i[e]);
            if (s[e] == 2) for (let t of r) n.push(t);
            else n.push(r);
          }
          return e.combine(n);
        }
        return {
          create(t) {
            for (let e of i) nt(t, e);
            t.values[l] = h(t);
            return 1;
          },
          update(t, n) {
            if (!V(t, r)) return 0;
            let i = h(t);
            if (e.compare(i, t.values[l])) return 0;
            t.values[l] = i;
            return 1;
          },
          reconfigure(t, s) {
            let r = V(t, i);
            let o = s.config.facets[e.id],
              a = s.facet(e);
            if (o && !r && $(n, o)) {
              t.values[l] = a;
              return 0;
            }
            let f = h(t);
            if (e.compare(f, a)) {
              t.values[l] = a;
              return 0;
            }
            t.values[l] = f;
            return 1;
          },
        };
      }
      const U = q.define({ static: true });
      class G {
        constructor(t, e, n, i, s) {
          this.id = t;
          this.createF = e;
          this.updateF = n;
          this.compareF = i;
          this.spec = s;
          this.provides = undefined;
        }
        static define(t) {
          let e = new G(j++, t.create, t.update, t.compare || ((t, e) => t === e), t);
          if (t.provide) e.provides = t.provide(e);
          return e;
        }
        create(t) {
          let e = t.facet(U).find((t) => t.field == this);
          return ((e === null || e === void 0 ? void 0 : e.create) || this.createF)(t);
        }
        slot(t) {
          let e = t[this.id] >> 1;
          return {
            create: (t) => {
              t.values[e] = this.create(t);
              return 1;
            },
            update: (t, n) => {
              let i = t.values[e];
              let s = this.updateF(i, n);
              if (this.compareF(i, s)) return 0;
              t.values[e] = s;
              return 1;
            },
            reconfigure: (t, n) => {
              if (n.config.address[this.id] != null) {
                t.values[e] = n.field(this);
                return 0;
              }
              t.values[e] = this.create(t);
              return 1;
            },
          };
        }
        init(t) {
          return [this, U.of({ field: this, create: t })];
        }
        get extension() {
          return this;
        }
      }
      const H = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
      function K(t) {
        return (e) => new X(e, t);
      }
      const Q = { highest: K(H.highest), high: K(H.high), default: K(H.default), low: K(H.low), lowest: K(H.lowest) };
      class X {
        constructor(t, e) {
          this.inner = t;
          this.prec = e;
        }
      }
      class Y {
        of(t) {
          return new Z(this, t);
        }
        reconfigure(t) {
          return Y.reconfigure.of({ compartment: this, extension: t });
        }
        get(t) {
          return t.config.compartments.get(this);
        }
      }
      class Z {
        constructor(t, e) {
          this.compartment = t;
          this.inner = e;
        }
      }
      class tt {
        constructor(t, e, n, i, s, r) {
          this.base = t;
          this.compartments = e;
          this.dynamicSlots = n;
          this.address = i;
          this.staticValues = s;
          this.facets = r;
          this.statusTemplate = [];
          while (this.statusTemplate.length < n.length) this.statusTemplate.push(0);
        }
        staticFacet(t) {
          let e = this.address[t.id];
          return e == null ? t.default : this.staticValues[e >> 1];
        }
        static resolve(t, e, n) {
          let i = [];
          let s = Object.create(null);
          let r = new Map();
          for (let c of et(t, e, r)) {
            if (c instanceof G) i.push(c);
            else (s[c.facet.id] || (s[c.facet.id] = [])).push(c);
          }
          let l = Object.create(null);
          let h = [];
          let o = [];
          for (let c of i) {
            l[c.id] = o.length << 1;
            o.push((t) => c.slot(t));
          }
          let a = n === null || n === void 0 ? void 0 : n.config.facets;
          for (let c in s) {
            let t = s[c],
              e = t[0].facet;
            let i = (a && a[c]) || [];
            if (t.every((t) => t.type == 0)) {
              l[e.id] = (h.length << 1) | 1;
              if ($(i, t)) {
                h.push(n.facet(e));
              } else {
                let i = e.combine(t.map((t) => t.value));
                h.push(n && e.compare(i, n.facet(e)) ? n.facet(e) : i);
              }
            } else {
              for (let e of t) {
                if (e.type == 0) {
                  l[e.id] = (h.length << 1) | 1;
                  h.push(e.value);
                } else {
                  l[e.id] = o.length << 1;
                  o.push((t) => e.dynamicSlot(t));
                }
              }
              l[e.id] = o.length << 1;
              o.push((n) => W(n, e, t));
            }
          }
          let f = o.map((t) => t(l));
          return new tt(t, r, f, l, h, s);
        }
      }
      function et(t, e, n) {
        let i = [[], [], [], [], []];
        let s = new Map();
        function r(t, l) {
          let h = s.get(t);
          if (h != null) {
            if (h <= l) return;
            let e = i[h].indexOf(t);
            if (e > -1) i[h].splice(e, 1);
            if (t instanceof Z) n.delete(t.compartment);
          }
          s.set(t, l);
          if (Array.isArray(t)) {
            for (let e of t) r(e, l);
          } else if (t instanceof Z) {
            if (n.has(t.compartment)) throw new RangeError(`Duplicate use of compartment in extensions`);
            let i = e.get(t.compartment) || t.inner;
            n.set(t.compartment, i);
            r(i, l);
          } else if (t instanceof X) {
            r(t.inner, t.prec);
          } else if (t instanceof G) {
            i[l].push(t);
            if (t.provides) r(t.provides, l);
          } else if (t instanceof _) {
            i[l].push(t);
            if (t.facet.extensions) r(t.facet.extensions, H.default);
          } else {
            let e = t.extension;
            if (!e)
              throw new Error(
                `Unrecognized extension value in extension set (${t}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`
              );
            r(e, l);
          }
        }
        r(t, H.default);
        return i.reduce((t, e) => t.concat(e));
      }
      function nt(t, e) {
        if (e & 1) return 2;
        let n = e >> 1;
        let i = t.status[n];
        if (i == 4) throw new Error("Cyclic dependency between fields and/or facets");
        if (i & 2) return i;
        t.status[n] = 4;
        let s = t.computeSlot(t, t.config.dynamicSlots[n]);
        return (t.status[n] = 2 | s);
      }
      function it(t, e) {
        return e & 1 ? t.config.staticValues[e >> 1] : t.values[e >> 1];
      }
      const st = q.define();
      const rt = q.define({ combine: (t) => t.some((t) => t), static: true });
      const lt = q.define({ combine: (t) => (t.length ? t[0] : undefined), static: true });
      const ht = q.define();
      const ot = q.define();
      const at = q.define();
      const ft = q.define({ combine: (t) => (t.length ? t[0] : false) });
      class ct {
        constructor(t, e) {
          this.type = t;
          this.value = e;
        }
        static define() {
          return new ut();
        }
      }
      class ut {
        of(t) {
          return new ct(this, t);
        }
      }
      class gt {
        constructor(t) {
          this.map = t;
        }
        of(t) {
          return new dt(this, t);
        }
      }
      class dt {
        constructor(t, e) {
          this.type = t;
          this.value = e;
        }
        map(t) {
          let e = this.type.map(this.value, t);
          return e === undefined ? undefined : e == this.value ? this : new dt(this.type, e);
        }
        is(t) {
          return this.type == t;
        }
        static define(t = {}) {
          return new gt(t.map || ((t) => t));
        }
        static mapEffects(t, e) {
          if (!t.length) return t;
          let n = [];
          for (let i of t) {
            let t = i.map(e);
            if (t) n.push(t);
          }
          return n;
        }
      }
      dt.reconfigure = dt.define();
      dt.appendConfig = dt.define();
      class pt {
        constructor(t, e, n, i, s, r) {
          this.startState = t;
          this.changes = e;
          this.selection = n;
          this.effects = i;
          this.annotations = s;
          this.scrollIntoView = r;
          this._doc = null;
          this._state = null;
          if (n) L(n, e.newLength);
          if (!s.some((t) => t.type == pt.time)) this.annotations = s.concat(pt.time.of(Date.now()));
        }
        static create(t, e, n, i, s, r) {
          return new pt(t, e, n, i, s, r);
        }
        get newDoc() {
          return this._doc || (this._doc = this.changes.apply(this.startState.doc));
        }
        get newSelection() {
          return this.selection || this.startState.selection.map(this.changes);
        }
        get state() {
          if (!this._state) this.startState.applyTransaction(this);
          return this._state;
        }
        annotation(t) {
          for (let e of this.annotations) if (e.type == t) return e.value;
          return undefined;
        }
        get docChanged() {
          return !this.changes.empty;
        }
        get reconfigured() {
          return this.startState.config != this.state.config;
        }
        isUserEvent(t) {
          let e = this.annotation(pt.userEvent);
          return !!(e && (e == t || (e.length > t.length && e.slice(0, t.length) == t && e[t.length] == ".")));
        }
      }
      pt.time = ct.define();
      pt.userEvent = ct.define();
      pt.addToHistory = ct.define();
      pt.remote = ct.define();
      function mt(t, e) {
        let n = [];
        for (let i = 0, s = 0; ; ) {
          let r, l;
          if (i < t.length && (s == e.length || e[s] >= t[i])) {
            r = t[i++];
            l = t[i++];
          } else if (s < e.length) {
            r = e[s++];
            l = e[s++];
          } else return n;
          if (!n.length || n[n.length - 1] < r) n.push(r, l);
          else if (n[n.length - 1] < l) n[n.length - 1] = l;
        }
      }
      function wt(t, e, n) {
        var i;
        let s, r, l;
        if (n) {
          s = e.changes;
          r = C.empty(e.changes.length);
          l = t.changes.compose(e.changes);
        } else {
          s = e.changes.map(t.changes);
          r = t.changes.mapDesc(e.changes, true);
          l = t.changes.compose(s);
        }
        return {
          changes: l,
          selection: e.selection ? e.selection.map(r) : (i = t.selection) === null || i === void 0 ? void 0 : i.map(s),
          effects: dt.mapEffects(t.effects, s).concat(dt.mapEffects(e.effects, r)),
          annotations: t.annotations.length ? t.annotations.concat(e.annotations) : e.annotations,
          scrollIntoView: t.scrollIntoView || e.scrollIntoView,
        };
      }
      function xt(t, e, n) {
        let i = e.selection,
          s = It(e.annotations);
        if (e.userEvent) s = s.concat(pt.userEvent.of(e.userEvent));
        return {
          changes: e.changes instanceof C ? e.changes : C.of(e.changes || [], n, t.facet(lt)),
          selection: i && (i instanceof J ? i : J.single(i.anchor, i.head)),
          effects: It(e.effects),
          annotations: s,
          scrollIntoView: !!e.scrollIntoView,
        };
      }
      function vt(t, e, n) {
        let i = xt(t, e.length ? e[0] : {}, t.doc.length);
        if (e.length && e[0].filter === false) n = false;
        for (let r = 1; r < e.length; r++) {
          if (e[r].filter === false) n = false;
          let s = !!e[r].sequential;
          i = wt(i, xt(t, e[r], s ? i.changes.newLength : t.doc.length), s);
        }
        let s = pt.create(t, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
        return yt(n ? kt(s) : s);
      }
      function kt(t) {
        let e = t.startState;
        let n = true;
        for (let s of e.facet(ht)) {
          let e = s(t);
          if (e === false) {
            n = false;
            break;
          }
          if (Array.isArray(e)) n = n === true ? e : mt(n, e);
        }
        if (n !== true) {
          let i, s;
          if (n === false) {
            s = t.changes.invertedDesc;
            i = C.empty(e.doc.length);
          } else {
            let e = t.changes.filter(n);
            i = e.changes;
            s = e.filtered.mapDesc(e.changes).invertedDesc;
          }
          t = pt.create(e, i, t.selection && t.selection.map(s), dt.mapEffects(t.effects, s), t.annotations, t.scrollIntoView);
        }
        let i = e.facet(ot);
        for (let s = i.length - 1; s >= 0; s--) {
          let n = i[s](t);
          if (n instanceof pt) t = n;
          else if (Array.isArray(n) && n.length == 1 && n[0] instanceof pt) t = n[0];
          else t = vt(e, It(n), false);
        }
        return t;
      }
      function yt(t) {
        let e = t.startState,
          n = e.facet(at),
          i = t;
        for (let s = n.length - 1; s >= 0; s--) {
          let r = n[s](t);
          if (r && Object.keys(r).length) i = wt(i, xt(e, r, t.changes.newLength), true);
        }
        return i == t ? t : pt.create(e, t.changes, t.selection, i.effects, i.annotations, i.scrollIntoView);
      }
      const St = [];
      function It(t) {
        return t == null ? St : Array.isArray(t) ? t : [t];
      }
      var bt = (function (t) {
        t[(t["Word"] = 0)] = "Word";
        t[(t["Space"] = 1)] = "Space";
        t[(t["Other"] = 2)] = "Other";
        return t;
      })(bt || (bt = {}));
      const Pt = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      let Et;
      try {
        Et = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
      } catch (Qt) {}
      function Mt(t) {
        if (Et) return Et.test(t);
        for (let e = 0; e < t.length; e++) {
          let n = t[e];
          if (/\w/.test(n) || (n > "" && (n.toUpperCase() != n.toLowerCase() || Pt.test(n)))) return true;
        }
        return false;
      }
      function At(t) {
        return (e) => {
          if (!/\S/.test(e)) return bt.Space;
          if (Mt(e)) return bt.Word;
          for (let n = 0; n < t.length; n++) if (e.indexOf(t[n]) > -1) return bt.Word;
          return bt.Other;
        };
      }
      class Ct {
        constructor(t, e, n, i, s, r) {
          this.config = t;
          this.doc = e;
          this.selection = n;
          this.values = i;
          this.status = t.statusTemplate.slice();
          this.computeSlot = s;
          if (r) r._state = this;
          for (let l = 0; l < this.config.dynamicSlots.length; l++) nt(this, l << 1);
          this.computeSlot = null;
        }
        field(t, e = true) {
          let n = this.config.address[t.id];
          if (n == null) {
            if (e) throw new RangeError("Field is not present in this state");
            return undefined;
          }
          nt(this, n);
          return it(this, n);
        }
        update(...t) {
          return vt(this, t, true);
        }
        applyTransaction(t) {
          let e = this.config,
            { base: n, compartments: i } = e;
          for (let l of t.effects) {
            if (l.is(Y.reconfigure)) {
              if (e) {
                i = new Map();
                e.compartments.forEach((t, e) => i.set(e, t));
                e = null;
              }
              i.set(l.value.compartment, l.value.extension);
            } else if (l.is(dt.reconfigure)) {
              e = null;
              n = l.value;
            } else if (l.is(dt.appendConfig)) {
              e = null;
              n = It(n).concat(l.value);
            }
          }
          let s;
          if (!e) {
            e = tt.resolve(n, i, this);
            let t = new Ct(
              e,
              this.doc,
              this.selection,
              e.dynamicSlots.map(() => null),
              (t, e) => e.reconfigure(t, this),
              null
            );
            s = t.values;
          } else {
            s = t.startState.values.slice();
          }
          let r = t.startState.facet(rt) ? t.newSelection : t.newSelection.asSingle();
          new Ct(e, t.newDoc, r, s, (e, n) => n.update(e, t), t);
        }
        replaceSelection(t) {
          if (typeof t == "string") t = this.toText(t);
          return this.changeByRange((e) => ({ changes: { from: e.from, to: e.to, insert: t }, range: J.cursor(e.from + t.length) }));
        }
        changeByRange(t) {
          let e = this.selection;
          let n = t(e.ranges[0]);
          let i = this.changes(n.changes),
            s = [n.range];
          let r = It(n.effects);
          for (let l = 1; l < e.ranges.length; l++) {
            let n = t(e.ranges[l]);
            let h = this.changes(n.changes),
              o = h.map(i);
            for (let t = 0; t < l; t++) s[t] = s[t].map(o);
            let a = i.mapDesc(h, true);
            s.push(n.range.map(a));
            i = i.compose(o);
            r = dt.mapEffects(r, o).concat(dt.mapEffects(It(n.effects), a));
          }
          return { changes: i, selection: J.create(s, e.mainIndex), effects: r };
        }
        changes(t = []) {
          if (t instanceof C) return t;
          return C.of(t, this.doc.length, this.facet(Ct.lineSeparator));
        }
        toText(t) {
          return i.of(t.split(this.facet(Ct.lineSeparator) || E));
        }
        sliceDoc(t = 0, e = this.doc.length) {
          return this.doc.sliceString(t, e, this.lineBreak);
        }
        facet(t) {
          let e = this.config.address[t.id];
          if (e == null) return t.default;
          nt(this, e);
          return it(this, e);
        }
        toJSON(t) {
          let e = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
          if (t)
            for (let n in t) {
              let i = t[n];
              if (i instanceof G && this.config.address[i.id] != null) e[n] = i.spec.toJSON(this.field(t[n]), this);
            }
          return e;
        }
        static fromJSON(t, e = {}, n) {
          if (!t || typeof t.doc != "string") throw new RangeError("Invalid JSON representation for EditorState");
          let i = [];
          if (n)
            for (let s in n) {
              if (Object.prototype.hasOwnProperty.call(t, s)) {
                let e = n[s],
                  r = t[s];
                i.push(e.init((t) => e.spec.fromJSON(r, t)));
              }
            }
          return Ct.create({ doc: t.doc, selection: J.fromJSON(t.selection), extensions: e.extensions ? i.concat([e.extensions]) : i });
        }
        static create(t = {}) {
          let e = tt.resolve(t.extensions || [], new Map());
          let n = t.doc instanceof i ? t.doc : i.of((t.doc || "").split(e.staticFacet(Ct.lineSeparator) || E));
          let s = !t.selection ? J.single(0) : t.selection instanceof J ? t.selection : J.single(t.selection.anchor, t.selection.head);
          L(s, n.length);
          if (!e.staticFacet(rt)) s = s.asSingle();
          return new Ct(
            e,
            n,
            s,
            e.dynamicSlots.map(() => null),
            (t, e) => e.create(t),
            null
          );
        }
        get tabSize() {
          return this.facet(Ct.tabSize);
        }
        get lineBreak() {
          return this.facet(Ct.lineSeparator) || "\n";
        }
        get readOnly() {
          return this.facet(ft);
        }
        phrase(t, ...e) {
          for (let n of this.facet(Ct.phrases))
            if (Object.prototype.hasOwnProperty.call(n, t)) {
              t = n[t];
              break;
            }
          if (e.length)
            t = t.replace(/\$(\$|\d*)/g, (t, n) => {
              if (n == "$") return "$";
              let i = +(n || 1);
              return !i || i > e.length ? t : e[i - 1];
            });
          return t;
        }
        languageDataAt(t, e, n = -1) {
          let i = [];
          for (let s of this.facet(st)) {
            for (let r of s(this, e, n)) {
              if (Object.prototype.hasOwnProperty.call(r, t)) i.push(r[t]);
            }
          }
          return i;
        }
        charCategorizer(t) {
          return At(this.languageDataAt("wordChars", t).join(""));
        }
        wordAt(t) {
          let { text: e, from: n, length: i } = this.doc.lineAt(t);
          let s = this.charCategorizer(t);
          let r = t - n,
            l = t - n;
          while (r > 0) {
            let t = x(e, r, false);
            if (s(e.slice(t, r)) != bt.Word) break;
            r = t;
          }
          while (l < i) {
            let t = x(e, l);
            if (s(e.slice(l, t)) != bt.Word) break;
            l = t;
          }
          return r == l ? null : J.range(r + n, l + n);
        }
      }
      Ct.allowMultipleSelections = rt;
      Ct.tabSize = q.define({ combine: (t) => (t.length ? t[0] : 4) });
      Ct.lineSeparator = lt;
      Ct.readOnly = ft;
      Ct.phrases = q.define({
        compare(t, e) {
          let n = Object.keys(t),
            i = Object.keys(e);
          return n.length == i.length && n.every((n) => t[n] == e[n]);
        },
      });
      Ct.languageData = st;
      Ct.changeFilter = ht;
      Ct.transactionFilter = ot;
      Ct.transactionExtender = at;
      Y.reconfigure = dt.define();
      function Rt(t, e, n = {}) {
        let i = {};
        for (let s of t)
          for (let t of Object.keys(s)) {
            let e = s[t],
              r = i[t];
            if (r === undefined) i[t] = e;
            else if (r === e || e === undefined);
            else if (Object.hasOwnProperty.call(n, t)) i[t] = n[t](r, e);
            else throw new Error("Config merge conflict for field " + t);
          }
        for (let s in e) if (i[s] === undefined) i[s] = e[s];
        return i;
      }
      class Ot {
        eq(t) {
          return this == t;
        }
        range(t, e = t) {
          return Tt.create(t, e, this);
        }
      }
      Ot.prototype.startSide = Ot.prototype.endSide = 0;
      Ot.prototype.point = false;
      Ot.prototype.mapMode = M.TrackDel;
      class Tt {
        constructor(t, e, n) {
          this.from = t;
          this.to = e;
          this.value = n;
        }
        static create(t, e, n) {
          return new Tt(t, e, n);
        }
      }
      function Ft(t, e) {
        return t.from - e.from || t.value.startSide - e.value.startSide;
      }
      class Bt {
        constructor(t, e, n, i) {
          this.from = t;
          this.to = e;
          this.value = n;
          this.maxPoint = i;
        }
        get length() {
          return this.to[this.to.length - 1];
        }
        findIndex(t, e, n, i = 0) {
          let s = n ? this.to : this.from;
          for (let r = i, l = s.length; ; ) {
            if (r == l) return r;
            let i = (r + l) >> 1;
            let h = s[i] - t || (n ? this.value[i].endSide : this.value[i].startSide) - e;
            if (i == r) return h >= 0 ? r : l;
            if (h >= 0) l = i;
            else r = i + 1;
          }
        }
        between(t, e, n, i) {
          for (let s = this.findIndex(e, -1e9, true), r = this.findIndex(n, 1e9, false, s); s < r; s++)
            if (i(this.from[s] + t, this.to[s] + t, this.value[s]) === false) return false;
        }
        map(t, e) {
          let n = [],
            i = [],
            s = [],
            r = -1,
            l = -1;
          for (let h = 0; h < this.value.length; h++) {
            let o = this.value[h],
              a = this.from[h] + t,
              f = this.to[h] + t,
              c,
              u;
            if (a == f) {
              let t = e.mapPos(a, o.startSide, o.mapMode);
              if (t == null) continue;
              c = u = t;
              if (o.startSide != o.endSide) {
                u = e.mapPos(a, o.endSide);
                if (u < c) continue;
              }
            } else {
              c = e.mapPos(a, o.startSide);
              u = e.mapPos(f, o.endSide);
              if (c > u || (c == u && o.startSide > 0 && o.endSide <= 0)) continue;
            }
            if ((u - c || o.endSide - o.startSide) < 0) continue;
            if (r < 0) r = c;
            if (o.point) l = Math.max(l, u - c);
            n.push(o);
            i.push(c - r);
            s.push(u - r);
          }
          return { mapped: n.length ? new Bt(i, s, n, l) : null, pos: r };
        }
      }
      class Nt {
        constructor(t, e, n, i) {
          this.chunkPos = t;
          this.chunk = e;
          this.nextLayer = n;
          this.maxPoint = i;
        }
        static create(t, e, n, i) {
          return new Nt(t, e, n, i);
        }
        get length() {
          let t = this.chunk.length - 1;
          return t < 0 ? 0 : Math.max(this.chunkEnd(t), this.nextLayer.length);
        }
        get size() {
          if (this.isEmpty) return 0;
          let t = this.nextLayer.size;
          for (let e of this.chunk) t += e.value.length;
          return t;
        }
        chunkEnd(t) {
          return this.chunkPos[t] + this.chunk[t].length;
        }
        update(t) {
          let { add: e = [], sort: n = false, filterFrom: i = 0, filterTo: s = this.length } = t;
          let r = t.filter;
          if (e.length == 0 && !r) return this;
          if (n) e = e.slice().sort(Ft);
          if (this.isEmpty) return e.length ? Nt.of(e) : this;
          let l = new jt(this, null, -1).goto(0),
            h = 0,
            o = [];
          let a = new Jt();
          while (l.value || h < e.length) {
            if (h < e.length && (l.from - e[h].from || l.startSide - e[h].value.startSide) >= 0) {
              let t = e[h++];
              if (!a.addInner(t.from, t.to, t.value)) o.push(t);
            } else if (
              l.rangeIndex == 1 &&
              l.chunkIndex < this.chunk.length &&
              (h == e.length || this.chunkEnd(l.chunkIndex) < e[h].from) &&
              (!r || i > this.chunkEnd(l.chunkIndex) || s < this.chunkPos[l.chunkIndex]) &&
              a.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex])
            ) {
              l.nextChunk();
            } else {
              if (!r || i > l.to || s < l.from || r(l.from, l.to, l.value)) {
                if (!a.addInner(l.from, l.to, l.value)) o.push(Tt.create(l.from, l.to, l.value));
              }
              l.next();
            }
          }
          return a.finishInner(
            this.nextLayer.isEmpty && !o.length ? Nt.empty : this.nextLayer.update({ add: o, filter: r, filterFrom: i, filterTo: s })
          );
        }
        map(t) {
          if (t.empty || this.isEmpty) return this;
          let e = [],
            n = [],
            i = -1;
          for (let r = 0; r < this.chunk.length; r++) {
            let s = this.chunkPos[r],
              l = this.chunk[r];
            let h = t.touchesRange(s, s + l.length);
            if (h === false) {
              i = Math.max(i, l.maxPoint);
              e.push(l);
              n.push(t.mapPos(s));
            } else if (h === true) {
              let { mapped: r, pos: h } = l.map(s, t);
              if (r) {
                i = Math.max(i, r.maxPoint);
                e.push(r);
                n.push(h);
              }
            }
          }
          let s = this.nextLayer.map(t);
          return e.length == 0 ? s : new Nt(n, e, s || Nt.empty, i);
        }
        between(t, e, n) {
          if (this.isEmpty) return;
          for (let i = 0; i < this.chunk.length; i++) {
            let s = this.chunkPos[i],
              r = this.chunk[i];
            if (e >= s && t <= s + r.length && r.between(s, t - s, e - s, n) === false) return;
          }
          this.nextLayer.between(t, e, n);
        }
        iter(t = 0) {
          return qt.from([this]).goto(t);
        }
        get isEmpty() {
          return this.nextLayer == this;
        }
        static iter(t, e = 0) {
          return qt.from(t).goto(e);
        }
        static compare(t, e, n, i, s = -1) {
          let r = t.filter((t) => t.maxPoint > 0 || (!t.isEmpty && t.maxPoint >= s));
          let l = e.filter((t) => t.maxPoint > 0 || (!t.isEmpty && t.maxPoint >= s));
          let h = Lt(r, l, n);
          let o = new _t(r, h, s);
          let a = new _t(l, h, s);
          n.iterGaps((t, e, n) => zt(o, t, a, e, n, i));
          if (n.empty && n.length == 0) zt(o, 0, a, 0, 0, i);
        }
        static eq(t, e, n = 0, i) {
          if (i == null) i = 1e9 - 1;
          let s = t.filter((t) => !t.isEmpty && e.indexOf(t) < 0);
          let r = e.filter((e) => !e.isEmpty && t.indexOf(e) < 0);
          if (s.length != r.length) return false;
          if (!s.length) return true;
          let l = Lt(s, r);
          let h = new _t(s, l, 0).goto(n),
            o = new _t(r, l, 0).goto(n);
          for (;;) {
            if (h.to != o.to || !Vt(h.active, o.active) || (h.point && (!o.point || !h.point.eq(o.point)))) return false;
            if (h.to > i) return true;
            h.next();
            o.next();
          }
        }
        static spans(t, e, n, i, s = -1) {
          let r = new _t(t, null, s).goto(e),
            l = e;
          let h = r.openStart;
          for (;;) {
            let t = Math.min(r.to, n);
            if (r.point) {
              let n = r.activeForPoint(r.to);
              let s = r.pointFrom < e ? n.length + 1 : r.point.startSide < 0 ? n.length : Math.min(n.length, h);
              i.point(l, t, r.point, n, s, r.pointRank);
              h = Math.min(r.openEnd(t), n.length);
            } else if (t > l) {
              i.span(l, t, r.active, h);
              h = r.openEnd(t);
            }
            if (r.to > n) return h + (r.point && r.to > n ? 1 : 0);
            l = r.to;
            r.next();
          }
        }
        static of(t, e = false) {
          let n = new Jt();
          for (let i of t instanceof Tt ? [t] : e ? Dt(t) : t) n.add(i.from, i.to, i.value);
          return n.finish();
        }
        static join(t) {
          if (!t.length) return Nt.empty;
          let e = t[t.length - 1];
          for (let n = t.length - 2; n >= 0; n--) {
            for (let i = t[n]; i != Nt.empty; i = i.nextLayer) e = new Nt(i.chunkPos, i.chunk, e, Math.max(i.maxPoint, e.maxPoint));
          }
          return e;
        }
      }
      Nt.empty = new Nt([], [], null, -1);
      function Dt(t) {
        if (t.length > 1)
          for (let e = t[0], n = 1; n < t.length; n++) {
            let i = t[n];
            if (Ft(e, i) > 0) return t.slice().sort(Ft);
            e = i;
          }
        return t;
      }
      Nt.empty.nextLayer = Nt.empty;
      class Jt {
        finishChunk(t) {
          this.chunks.push(new Bt(this.from, this.to, this.value, this.maxPoint));
          this.chunkPos.push(this.chunkStart);
          this.chunkStart = -1;
          this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint);
          this.maxPoint = -1;
          if (t) {
            this.from = [];
            this.to = [];
            this.value = [];
          }
        }
        constructor() {
          this.chunks = [];
          this.chunkPos = [];
          this.chunkStart = -1;
          this.last = null;
          this.lastFrom = -1e9;
          this.lastTo = -1e9;
          this.from = [];
          this.to = [];
          this.value = [];
          this.maxPoint = -1;
          this.setMaxPoint = -1;
          this.nextLayer = null;
        }
        add(t, e, n) {
          if (!this.addInner(t, e, n)) (this.nextLayer || (this.nextLayer = new Jt())).add(t, e, n);
        }
        addInner(t, e, n) {
          let i = t - this.lastTo || n.startSide - this.last.endSide;
          if (i <= 0 && (t - this.lastFrom || n.startSide - this.last.startSide) < 0)
            throw new Error("Ranges must be added sorted by `from` position and `startSide`");
          if (i < 0) return false;
          if (this.from.length == 250) this.finishChunk(true);
          if (this.chunkStart < 0) this.chunkStart = t;
          this.from.push(t - this.chunkStart);
          this.to.push(e - this.chunkStart);
          this.last = n;
          this.lastFrom = t;
          this.lastTo = e;
          this.value.push(n);
          if (n.point) this.maxPoint = Math.max(this.maxPoint, e - t);
          return true;
        }
        addChunk(t, e) {
          if ((t - this.lastTo || e.value[0].startSide - this.last.endSide) < 0) return false;
          if (this.from.length) this.finishChunk(true);
          this.setMaxPoint = Math.max(this.setMaxPoint, e.maxPoint);
          this.chunks.push(e);
          this.chunkPos.push(t);
          let n = e.value.length - 1;
          this.last = e.value[n];
          this.lastFrom = e.from[n] + t;
          this.lastTo = e.to[n] + t;
          return true;
        }
        finish() {
          return this.finishInner(Nt.empty);
        }
        finishInner(t) {
          if (this.from.length) this.finishChunk(false);
          if (this.chunks.length == 0) return t;
          let e = Nt.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t) : t, this.setMaxPoint);
          this.from = null;
          return e;
        }
      }
      function Lt(t, e, n) {
        let i = new Map();
        for (let r of t) for (let t = 0; t < r.chunk.length; t++) if (r.chunk[t].maxPoint <= 0) i.set(r.chunk[t], r.chunkPos[t]);
        let s = new Set();
        for (let r of e)
          for (let t = 0; t < r.chunk.length; t++) {
            let e = i.get(r.chunk[t]);
            if (
              e != null &&
              (n ? n.mapPos(e) : e) == r.chunkPos[t] &&
              !(n === null || n === void 0 ? void 0 : n.touchesRange(e, e + r.chunk[t].length))
            )
              s.add(r.chunk[t]);
          }
        return s;
      }
      class jt {
        constructor(t, e, n, i = 0) {
          this.layer = t;
          this.skip = e;
          this.minPoint = n;
          this.rank = i;
        }
        get startSide() {
          return this.value ? this.value.startSide : 0;
        }
        get endSide() {
          return this.value ? this.value.endSide : 0;
        }
        goto(t, e = -1e9) {
          this.chunkIndex = this.rangeIndex = 0;
          this.gotoInner(t, e, false);
          return this;
        }
        gotoInner(t, e, n) {
          while (this.chunkIndex < this.layer.chunk.length) {
            let e = this.layer.chunk[this.chunkIndex];
            if (!((this.skip && this.skip.has(e)) || this.layer.chunkEnd(this.chunkIndex) < t || e.maxPoint < this.minPoint)) break;
            this.chunkIndex++;
            n = false;
          }
          if (this.chunkIndex < this.layer.chunk.length) {
            let i = this.layer.chunk[this.chunkIndex].findIndex(t - this.layer.chunkPos[this.chunkIndex], e, true);
            if (!n || this.rangeIndex < i) this.setRangeIndex(i);
          }
          this.next();
        }
        forward(t, e) {
          if ((this.to - t || this.endSide - e) < 0) this.gotoInner(t, e, true);
        }
        next() {
          for (;;) {
            if (this.chunkIndex == this.layer.chunk.length) {
              this.from = this.to = 1e9;
              this.value = null;
              break;
            } else {
              let t = this.layer.chunkPos[this.chunkIndex],
                e = this.layer.chunk[this.chunkIndex];
              let n = t + e.from[this.rangeIndex];
              this.from = n;
              this.to = t + e.to[this.rangeIndex];
              this.value = e.value[this.rangeIndex];
              this.setRangeIndex(this.rangeIndex + 1);
              if (this.minPoint < 0 || (this.value.point && this.to - this.from >= this.minPoint)) break;
            }
          }
        }
        setRangeIndex(t) {
          if (t == this.layer.chunk[this.chunkIndex].value.length) {
            this.chunkIndex++;
            if (this.skip) {
              while (this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex])) this.chunkIndex++;
            }
            this.rangeIndex = 0;
          } else {
            this.rangeIndex = t;
          }
        }
        nextChunk() {
          this.chunkIndex++;
          this.rangeIndex = 0;
          this.next();
        }
        compare(t) {
          return this.from - t.from || this.startSide - t.startSide || this.rank - t.rank || this.to - t.to || this.endSide - t.endSide;
        }
      }
      class qt {
        constructor(t) {
          this.heap = t;
        }
        static from(t, e = null, n = -1) {
          let i = [];
          for (let s = 0; s < t.length; s++) {
            for (let r = t[s]; !r.isEmpty; r = r.nextLayer) {
              if (r.maxPoint >= n) i.push(new jt(r, e, n, s));
            }
          }
          return i.length == 1 ? i[0] : new qt(i);
        }
        get startSide() {
          return this.value ? this.value.startSide : 0;
        }
        goto(t, e = -1e9) {
          for (let n of this.heap) n.goto(t, e);
          for (let n = this.heap.length >> 1; n >= 0; n--) $t(this.heap, n);
          this.next();
          return this;
        }
        forward(t, e) {
          for (let n of this.heap) n.forward(t, e);
          for (let n = this.heap.length >> 1; n >= 0; n--) $t(this.heap, n);
          if ((this.to - t || this.value.endSide - e) < 0) this.next();
        }
        next() {
          if (this.heap.length == 0) {
            this.from = this.to = 1e9;
            this.value = null;
            this.rank = -1;
          } else {
            let t = this.heap[0];
            this.from = t.from;
            this.to = t.to;
            this.value = t.value;
            this.rank = t.rank;
            if (t.value) t.next();
            $t(this.heap, 0);
          }
        }
      }
      function $t(t, e) {
        for (let n = t[e]; ; ) {
          let i = (e << 1) + 1;
          if (i >= t.length) break;
          let s = t[i];
          if (i + 1 < t.length && s.compare(t[i + 1]) >= 0) {
            s = t[i + 1];
            i++;
          }
          if (n.compare(s) < 0) break;
          t[i] = n;
          t[e] = s;
          e = i;
        }
      }
      class _t {
        constructor(t, e, n) {
          this.minPoint = n;
          this.active = [];
          this.activeTo = [];
          this.activeRank = [];
          this.minActive = -1;
          this.point = null;
          this.pointFrom = 0;
          this.pointRank = 0;
          this.to = -1e9;
          this.endSide = 0;
          this.openStart = -1;
          this.cursor = qt.from(t, e, n);
        }
        goto(t, e = -1e9) {
          this.cursor.goto(t, e);
          this.active.length = this.activeTo.length = this.activeRank.length = 0;
          this.minActive = -1;
          this.to = t;
          this.endSide = e;
          this.openStart = -1;
          this.next();
          return this;
        }
        forward(t, e) {
          while (this.minActive > -1 && (this.activeTo[this.minActive] - t || this.active[this.minActive].endSide - e) < 0)
            this.removeActive(this.minActive);
          this.cursor.forward(t, e);
        }
        removeActive(t) {
          Wt(this.active, t);
          Wt(this.activeTo, t);
          Wt(this.activeRank, t);
          this.minActive = Gt(this.active, this.activeTo);
        }
        addActive(t) {
          let e = 0,
            { value: n, to: i, rank: s } = this.cursor;
          while (e < this.activeRank.length && (s - this.activeRank[e] || i - this.activeTo[e]) > 0) e++;
          Ut(this.active, e, n);
          Ut(this.activeTo, e, i);
          Ut(this.activeRank, e, s);
          if (t) Ut(t, e, this.cursor.from);
          this.minActive = Gt(this.active, this.activeTo);
        }
        next() {
          let t = this.to,
            e = this.point;
          this.point = null;
          let n = this.openStart < 0 ? [] : null;
          for (;;) {
            let i = this.minActive;
            if (i > -1 && (this.activeTo[i] - this.cursor.from || this.active[i].endSide - this.cursor.startSide) < 0) {
              if (this.activeTo[i] > t) {
                this.to = this.activeTo[i];
                this.endSide = this.active[i].endSide;
                break;
              }
              this.removeActive(i);
              if (n) Wt(n, i);
            } else if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break;
            } else if (this.cursor.from > t) {
              this.to = this.cursor.from;
              this.endSide = this.cursor.startSide;
              break;
            } else {
              let t = this.cursor.value;
              if (!t.point) {
                this.addActive(n);
                this.cursor.next();
              } else if (e && this.cursor.to == this.to && this.cursor.from < this.cursor.to) {
                this.cursor.next();
              } else {
                this.point = t;
                this.pointFrom = this.cursor.from;
                this.pointRank = this.cursor.rank;
                this.to = this.cursor.to;
                this.endSide = t.endSide;
                this.cursor.next();
                this.forward(this.to, this.endSide);
                break;
              }
            }
          }
          if (n) {
            this.openStart = 0;
            for (let e = n.length - 1; e >= 0 && n[e] < t; e--) this.openStart++;
          }
        }
        activeForPoint(t) {
          if (!this.active.length) return this.active;
          let e = [];
          for (let n = this.active.length - 1; n >= 0; n--) {
            if (this.activeRank[n] < this.pointRank) break;
            if (this.activeTo[n] > t || (this.activeTo[n] == t && this.active[n].endSide >= this.point.endSide)) e.push(this.active[n]);
          }
          return e.reverse();
        }
        openEnd(t) {
          let e = 0;
          for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > t; n--) e++;
          return e;
        }
      }
      function zt(t, e, n, i, s, r) {
        t.goto(e);
        n.goto(i);
        let l = i + s;
        let h = i,
          o = i - e;
        for (;;) {
          let e = t.to + o - n.to || t.endSide - n.endSide;
          let i = e < 0 ? t.to + o : n.to,
            s = Math.min(i, l);
          if (t.point || n.point) {
            if (!(t.point && n.point && (t.point == n.point || t.point.eq(n.point)) && Vt(t.activeForPoint(t.to), n.activeForPoint(n.to))))
              r.comparePoint(h, s, t.point, n.point);
          } else {
            if (s > h && !Vt(t.active, n.active)) r.compareRange(h, s, t.active, n.active);
          }
          if (i > l) break;
          h = i;
          if (e <= 0) t.next();
          if (e >= 0) n.next();
        }
      }
      function Vt(t, e) {
        if (t.length != e.length) return false;
        for (let n = 0; n < t.length; n++) if (t[n] != e[n] && !t[n].eq(e[n])) return false;
        return true;
      }
      function Wt(t, e) {
        for (let n = e, i = t.length - 1; n < i; n++) t[n] = t[n + 1];
        t.pop();
      }
      function Ut(t, e, n) {
        for (let i = t.length - 1; i >= e; i--) t[i + 1] = t[i];
        t[e] = n;
      }
      function Gt(t, e) {
        let n = -1,
          i = 1e9;
        for (let s = 0; s < e.length; s++)
          if ((e[s] - i || t[s].endSide - t[n].endSide) < 0) {
            n = s;
            i = e[s];
          }
        return n;
      }
      function Ht(t, e, n = t.length) {
        let i = 0;
        for (let s = 0; s < n; ) {
          if (t.charCodeAt(s) == 9) {
            i += e - (i % e);
            s++;
          } else {
            i++;
            s = x(t, s);
          }
        }
        return i;
      }
      function Kt(t, e, n, i) {
        for (let s = 0, r = 0; ; ) {
          if (r >= e) return s;
          if (s == t.length) break;
          r += t.charCodeAt(s) == 9 ? n - (r % n) : 1;
          s = x(t, s);
        }
        return i === true ? -1 : t.length;
      }
    },
  },
]);
