(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [6515],
  {
    26515: (e, t, r) => {
      "use strict";
      r.r(t);
      r.d(t, { createPrecompiledValidator: () => w, customizeValidator: () => z, default: () => E });
      var a = r(42329);
      var n = r(1581);
      var o = r.n(n);
      var i = r(5477);
      var s = r.n(i);
      var f = r(13218);
      var d = r.n(f);
      const c = { allErrors: true, multipleOfPrecision: 8, strict: false, verbose: true };
      const u =
        /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/;
      const l = /^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/;
      function m(e, t, r = {}, n, i = o()) {
        const f = new i({ ...c, ...r });
        if (n) {
          s()(f, n);
        } else if (n !== false) {
          s()(f);
        }
        f.addFormat("data-url", l);
        f.addFormat("color", u);
        f.addKeyword(a.ADDITIONAL_PROPERTY_FLAG);
        f.addKeyword(a.RJSF_ADDITONAL_PROPERTIES_FLAG);
        if (Array.isArray(e)) {
          f.addMetaSchema(e);
        }
        if (d()(t)) {
          Object.keys(t).forEach((e) => {
            f.addFormat(e, t[e]);
          });
        }
        return f;
      }
      var h = r(27361);
      var p = r.n(h);
      function v(e = [], t) {
        return e.map((e) => {
          const { instancePath: r, keyword: n, params: o, schemaPath: i, parentSchema: s, ...f } = e;
          let { message: d = "" } = f;
          let c = r.replace(/\//g, ".");
          let u = `${c} ${d}`.trim();
          if ("missingProperty" in o) {
            c = c ? `${c}.${o.missingProperty}` : o.missingProperty;
            const e = o.missingProperty;
            const r = (0, a.getUiOptions)(p()(t, `${c.replace(/^\./, "")}`)).title;
            if (r) {
              d = d.replace(e, r);
            } else {
              const t = p()(s, [a.PROPERTIES_KEY, e, "title"]);
              if (t) {
                d = d.replace(e, t);
              }
            }
            u = d;
          } else {
            const e = (0, a.getUiOptions)(p()(t, `${c.replace(/^\./, "")}`)).title;
            if (e) {
              u = `'${e}' ${d}`.trim();
            } else {
              const e = s === null || s === void 0 ? void 0 : s.title;
              if (e) {
                u = `'${e}' ${d}`.trim();
              }
            }
          }
          return { name: n, property: c, message: d, params: o, stack: u, schemaPath: i };
        });
      }
      function _(e, t, r, n, o, i, s) {
        const { validationError: f } = t;
        let d = v(t.errors, s);
        if (f) {
          d = [...d, { stack: f.message }];
        }
        if (typeof i === "function") {
          d = i(d, s);
        }
        let c = (0, a.toErrorSchema)(d);
        if (f) {
          c = { ...c, $schema: { __errors: [f.message] } };
        }
        if (typeof o !== "function") {
          return { errors: d, errorSchema: c };
        }
        const u = (0, a.getDefaultFormState)(e, n, r, n, true);
        const l = o(u, (0, a.createErrorHandler)(u), s);
        const m = (0, a.unwrapErrorHandler)(l);
        return (0, a.validationDataMerge)({ errors: d, errorSchema: c }, m);
      }
      class $ {
        constructor(e, t) {
          const { additionalMetaSchemas: r, customFormats: a, ajvOptionsOverrides: n, ajvFormatOptions: o, AjvClass: i } = e;
          this.ajv = m(r, a, n, o, i);
          this.localizer = t;
        }
        toErrorList(e, t = []) {
          return (0, a.toErrorList)(e, t);
        }
        rawValidation(e, t) {
          let r = undefined;
          let n;
          if (e[a.ID_KEY]) {
            n = this.ajv.getSchema(e[a.ID_KEY]);
          }
          try {
            if (n === undefined) {
              n = this.ajv.compile(e);
            }
            n(t);
          } catch (i) {
            r = i;
          }
          let o;
          if (n) {
            if (typeof this.localizer === "function") {
              this.localizer(n.errors);
            }
            o = n.errors || undefined;
            n.errors = null;
          }
          return { errors: o, validationError: r };
        }
        validateFormData(e, t, r, a, n) {
          const o = this.rawValidation(t, e);
          return _(this, o, e, t, r, a, n);
        }
        isValid(e, t, r) {
          var n, o;
          const i = (n = r[a.ID_KEY]) !== null && n !== void 0 ? n : a.ROOT_SCHEMA_PREFIX;
          try {
            this.ajv.addSchema(r, i);
            const n = (0, a.withIdRefPrefix)(e);
            const s = (o = n[a.ID_KEY]) !== null && o !== void 0 ? o : (0, a.hashForSchema)(n);
            let f;
            f = this.ajv.getSchema(s);
            if (f === undefined) {
              f = this.ajv.addSchema(n, s).getSchema(s) || this.ajv.compile(n);
            }
            const d = f(t);
            return d;
          } catch (s) {
            console.warn("Error encountered compiling schema:", s);
            return false;
          } finally {
            this.ajv.removeSchema(i);
          }
        }
      }
      function z(e = {}, t) {
        return new $(e, t);
      }
      var y = r(18446);
      var b = r.n(y);
      class g {
        constructor(e, t, r) {
          this.rootSchema = t;
          this.validateFns = e;
          this.localizer = r;
          this.mainValidator = this.getValidator(t);
        }
        getValidator(e) {
          const t = p()(e, a.ID_KEY) || (0, a.hashForSchema)(e);
          const r = this.validateFns[t];
          if (!r) {
            throw new Error(`No precompiled validator function was found for the given schema for "${t}"`);
          }
          return r;
        }
        ensureSameRootSchema(e, t) {
          if (!b()(e, this.rootSchema)) {
            const r = (0, a.retrieveSchema)(this, this.rootSchema, this.rootSchema, t);
            if (!b()(e, r)) {
              throw new Error("The schema associated with the precompiled validator differs from the rootSchema provided for validation");
            }
          }
          return true;
        }
        toErrorList(e, t = []) {
          return (0, a.toErrorList)(e, t);
        }
        rawValidation(e, t) {
          this.ensureSameRootSchema(e, t);
          this.mainValidator(t);
          if (typeof this.localizer === "function") {
            this.localizer(this.mainValidator.errors);
          }
          const r = this.mainValidator.errors || undefined;
          this.mainValidator.errors = null;
          return { errors: r };
        }
        validateFormData(e, t, r, a, n) {
          const o = this.rawValidation(t, e);
          return _(this, o, e, t, r, a, n);
        }
        isValid(e, t, r) {
          this.ensureSameRootSchema(r, t);
          if (p()(e, a.ID_KEY) === a.JUNK_OPTION_ID) {
            return false;
          }
          const n = this.getValidator(e);
          return n(t);
        }
      }
      function w(e, t, r) {
        return new g(e, t, r);
      }
      const E = z();
    },
    16870: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.formatNames = t.fastFormats = t.fullFormats = void 0;
      function r(e, t) {
        return { validate: e, compare: t };
      }
      t.fullFormats = {
        date: r(i, s),
        time: r(d, c),
        "date-time": r(l, m),
        duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
        uri: v,
        "uri-reference":
          /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
        "uri-template":
          /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
        url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
        email:
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
        hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
        ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
        ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
        regex: S,
        uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
        "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
        "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
        "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
        byte: $,
        int32: { type: "number", validate: b },
        int64: { type: "number", validate: g },
        float: { type: "number", validate: w },
        double: { type: "number", validate: w },
        password: true,
        binary: true,
      };
      t.fastFormats = {
        ...t.fullFormats,
        date: r(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, s),
        time: r(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, c),
        "date-time": r(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, m),
        uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
        "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
        email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
      };
      t.formatNames = Object.keys(t.fullFormats);
      function a(e) {
        return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
      }
      const n = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
      const o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function i(e) {
        const t = n.exec(e);
        if (!t) return false;
        const r = +t[1];
        const i = +t[2];
        const s = +t[3];
        return i >= 1 && i <= 12 && s >= 1 && s <= (i === 2 && a(r) ? 29 : o[i]);
      }
      function s(e, t) {
        if (!(e && t)) return undefined;
        if (e > t) return 1;
        if (e < t) return -1;
        return 0;
      }
      const f = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
      function d(e, t) {
        const r = f.exec(e);
        if (!r) return false;
        const a = +r[1];
        const n = +r[2];
        const o = +r[3];
        const i = r[5];
        return ((a <= 23 && n <= 59 && o <= 59) || (a === 23 && n === 59 && o === 60)) && (!t || i !== "");
      }
      function c(e, t) {
        if (!(e && t)) return undefined;
        const r = f.exec(e);
        const a = f.exec(t);
        if (!(r && a)) return undefined;
        e = r[1] + r[2] + r[3] + (r[4] || "");
        t = a[1] + a[2] + a[3] + (a[4] || "");
        if (e > t) return 1;
        if (e < t) return -1;
        return 0;
      }
      const u = /t|\s/i;
      function l(e) {
        const t = e.split(u);
        return t.length === 2 && i(t[0]) && d(t[1], true);
      }
      function m(e, t) {
        if (!(e && t)) return undefined;
        const [r, a] = e.split(u);
        const [n, o] = t.split(u);
        const i = s(r, n);
        if (i === undefined) return undefined;
        return i || c(a, o);
      }
      const h = /\/|:/;
      const p =
        /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
      function v(e) {
        return h.test(e) && p.test(e);
      }
      const _ = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
      function $(e) {
        _.lastIndex = 0;
        return _.test(e);
      }
      const z = -(2 ** 31);
      const y = 2 ** 31 - 1;
      function b(e) {
        return Number.isInteger(e) && e <= y && e >= z;
      }
      function g(e) {
        return Number.isInteger(e);
      }
      function w() {
        return true;
      }
      const E = /[^\\]\\Z/;
      function S(e) {
        if (E.test(e)) return false;
        try {
          new RegExp(e);
          return true;
        } catch (t) {
          return false;
        }
      }
    },
    5477: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      const a = r(16870);
      const n = r(57963);
      const o = r(93487);
      const i = new o.Name("fullFormats");
      const s = new o.Name("fastFormats");
      const f = (e, t = { keywords: true }) => {
        if (Array.isArray(t)) {
          d(e, t, a.fullFormats, i);
          return e;
        }
        const [r, o] = t.mode === "fast" ? [a.fastFormats, s] : [a.fullFormats, i];
        const f = t.formats || a.formatNames;
        d(e, f, r, o);
        if (t.keywords) n.default(e);
        return e;
      };
      f.get = (e, t = "full") => {
        const r = t === "fast" ? a.fastFormats : a.fullFormats;
        const n = r[e];
        if (!n) throw new Error(`Unknown format "${e}"`);
        return n;
      };
      function d(e, t, r, a) {
        var n;
        var i;
        (n = (i = e.opts.code).formats) !== null && n !== void 0 ? n : (i.formats = o._`require("ajv-formats/dist/formats").${a}`);
        for (const o of t) e.addFormat(o, r[o]);
      }
      e.exports = t = f;
      Object.defineProperty(t, "__esModule", { value: true });
      t["default"] = f;
    },
    57963: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.formatLimitDefinition = void 0;
      const a = r(1581);
      const n = r(93487);
      const o = n.operators;
      const i = {
        formatMaximum: { okStr: "<=", ok: o.LTE, fail: o.GT },
        formatMinimum: { okStr: ">=", ok: o.GTE, fail: o.LT },
        formatExclusiveMaximum: { okStr: "<", ok: o.LT, fail: o.GTE },
        formatExclusiveMinimum: { okStr: ">", ok: o.GT, fail: o.LTE },
      };
      const s = {
        message: ({ keyword: e, schemaCode: t }) => n.str`should be ${i[e].okStr} ${t}`,
        params: ({ keyword: e, schemaCode: t }) => n._`{comparison: ${i[e].okStr}, limit: ${t}}`,
      };
      t.formatLimitDefinition = {
        keyword: Object.keys(i),
        type: "string",
        schemaType: "string",
        $data: true,
        error: s,
        code(e) {
          const { gen: t, data: r, schemaCode: o, keyword: s, it: f } = e;
          const { opts: d, self: c } = f;
          if (!d.validateFormats) return;
          const u = new a.KeywordCxt(f, c.RULES.all.format.definition, "format");
          if (u.$data) l();
          else m();
          function l() {
            const r = t.scopeValue("formats", { ref: c.formats, code: d.code.formats });
            const a = t.const("fmt", n._`${r}[${u.schemaCode}]`);
            e.fail$data(n.or(n._`typeof ${a} != "object"`, n._`${a} instanceof RegExp`, n._`typeof ${a}.compare != "function"`, h(a)));
          }
          function m() {
            const r = u.schema;
            const a = c.formats[r];
            if (!a || a === true) return;
            if (typeof a != "object" || a instanceof RegExp || typeof a.compare != "function") {
              throw new Error(`"${s}": format "${r}" does not define "compare" function`);
            }
            const o = t.scopeValue("formats", { key: r, ref: a, code: d.code.formats ? n._`${d.code.formats}${n.getProperty(r)}` : undefined });
            e.fail$data(h(o));
          }
          function h(e) {
            return n._`${e}.compare(${r}, ${o}) ${i[s].fail} 0`;
          }
        },
        dependencies: ["format"],
      };
      const f = (e) => {
        e.addKeyword(t.formatLimitDefinition);
        return e;
      };
      t["default"] = f;
    },
    88668: (e, t, r) => {
      var a = r(83369),
        n = r(90619),
        o = r(72385);
      function i(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        this.__data__ = new a();
        while (++t < r) {
          this.add(e[t]);
        }
      }
      i.prototype.add = i.prototype.push = n;
      i.prototype.has = o;
      e.exports = i;
    },
    82908: (e) => {
      function t(e, t) {
        var r = -1,
          a = e == null ? 0 : e.length;
        while (++r < a) {
          if (t(e[r], r, e)) {
            return true;
          }
        }
        return false;
      }
      e.exports = t;
    },
    90939: (e, t, r) => {
      var a = r(2492),
        n = r(37005);
      function o(e, t, r, i, s) {
        if (e === t) {
          return true;
        }
        if (e == null || t == null || (!n(e) && !n(t))) {
          return e !== e && t !== t;
        }
        return a(e, t, r, i, o, s);
      }
      e.exports = o;
    },
    2492: (e, t, r) => {
      var a = r(46384),
        n = r(67114),
        o = r(18351),
        i = r(16096),
        s = r(64160),
        f = r(1469),
        d = r(44144),
        c = r(36719);
      var u = 1;
      var l = "[object Arguments]",
        m = "[object Array]",
        h = "[object Object]";
      var p = Object.prototype;
      var v = p.hasOwnProperty;
      function _(e, t, r, p, _, $) {
        var z = f(e),
          y = f(t),
          b = z ? m : s(e),
          g = y ? m : s(t);
        b = b == l ? h : b;
        g = g == l ? h : g;
        var w = b == h,
          E = g == h,
          S = b == g;
        if (S && d(e)) {
          if (!d(t)) {
            return false;
          }
          z = true;
          w = false;
        }
        if (S && !w) {
          $ || ($ = new a());
          return z || c(e) ? n(e, t, r, p, _, $) : o(e, t, b, r, p, _, $);
        }
        if (!(r & u)) {
          var j = w && v.call(e, "__wrapped__"),
            k = E && v.call(t, "__wrapped__");
          if (j || k) {
            var x = j ? e.value() : e,
              F = k ? t.value() : t;
            $ || ($ = new a());
            return _(x, F, r, p, $);
          }
        }
        if (!S) {
          return false;
        }
        $ || ($ = new a());
        return i(e, t, r, p, _, $);
      }
      e.exports = _;
    },
    74757: (e) => {
      function t(e, t) {
        return e.has(t);
      }
      e.exports = t;
    },
    67114: (e, t, r) => {
      var a = r(88668),
        n = r(82908),
        o = r(74757);
      var i = 1,
        s = 2;
      function f(e, t, r, f, d, c) {
        var u = r & i,
          l = e.length,
          m = t.length;
        if (l != m && !(u && m > l)) {
          return false;
        }
        var h = c.get(e);
        var p = c.get(t);
        if (h && p) {
          return h == t && p == e;
        }
        var v = -1,
          _ = true,
          $ = r & s ? new a() : undefined;
        c.set(e, t);
        c.set(t, e);
        while (++v < l) {
          var z = e[v],
            y = t[v];
          if (f) {
            var b = u ? f(y, z, v, t, e, c) : f(z, y, v, e, t, c);
          }
          if (b !== undefined) {
            if (b) {
              continue;
            }
            _ = false;
            break;
          }
          if ($) {
            if (
              !n(t, function (e, t) {
                if (!o($, t) && (z === e || d(z, e, r, f, c))) {
                  return $.push(t);
                }
              })
            ) {
              _ = false;
              break;
            }
          } else if (!(z === y || d(z, y, r, f, c))) {
            _ = false;
            break;
          }
        }
        c["delete"](e);
        c["delete"](t);
        return _;
      }
      e.exports = f;
    },
    18351: (e, t, r) => {
      var a = r(62705),
        n = r(11149),
        o = r(77813),
        i = r(67114),
        s = r(68776),
        f = r(21814);
      var d = 1,
        c = 2;
      var u = "[object Boolean]",
        l = "[object Date]",
        m = "[object Error]",
        h = "[object Map]",
        p = "[object Number]",
        v = "[object RegExp]",
        _ = "[object Set]",
        $ = "[object String]",
        z = "[object Symbol]";
      var y = "[object ArrayBuffer]",
        b = "[object DataView]";
      var g = a ? a.prototype : undefined,
        w = g ? g.valueOf : undefined;
      function E(e, t, r, a, g, E, S) {
        switch (r) {
          case b:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
              return false;
            }
            e = e.buffer;
            t = t.buffer;
          case y:
            if (e.byteLength != t.byteLength || !E(new n(e), new n(t))) {
              return false;
            }
            return true;
          case u:
          case l:
          case p:
            return o(+e, +t);
          case m:
            return e.name == t.name && e.message == t.message;
          case v:
          case $:
            return e == t + "";
          case h:
            var j = s;
          case _:
            var k = a & d;
            j || (j = f);
            if (e.size != t.size && !k) {
              return false;
            }
            var x = S.get(e);
            if (x) {
              return x == t;
            }
            a |= c;
            S.set(e, t);
            var F = i(j(e), j(t), a, g, E, S);
            S["delete"](e);
            return F;
          case z:
            if (w) {
              return w.call(e) == w.call(t);
            }
        }
        return false;
      }
      e.exports = E;
    },
    16096: (e, t, r) => {
      var a = r(58234);
      var n = 1;
      var o = Object.prototype;
      var i = o.hasOwnProperty;
      function s(e, t, r, o, s, f) {
        var d = r & n,
          c = a(e),
          u = c.length,
          l = a(t),
          m = l.length;
        if (u != m && !d) {
          return false;
        }
        var h = u;
        while (h--) {
          var p = c[h];
          if (!(d ? p in t : i.call(t, p))) {
            return false;
          }
        }
        var v = f.get(e);
        var _ = f.get(t);
        if (v && _) {
          return v == t && _ == e;
        }
        var $ = true;
        f.set(e, t);
        f.set(t, e);
        var z = d;
        while (++h < u) {
          p = c[h];
          var y = e[p],
            b = t[p];
          if (o) {
            var g = d ? o(b, y, p, t, e, f) : o(y, b, p, e, t, f);
          }
          if (!(g === undefined ? y === b || s(y, b, r, o, f) : g)) {
            $ = false;
            break;
          }
          z || (z = p == "constructor");
        }
        if ($ && !z) {
          var w = e.constructor,
            E = t.constructor;
          if (
            w != E &&
            "constructor" in e &&
            "constructor" in t &&
            !(typeof w == "function" && w instanceof w && typeof E == "function" && E instanceof E)
          ) {
            $ = false;
          }
        }
        f["delete"](e);
        f["delete"](t);
        return $;
      }
      e.exports = s;
    },
    68776: (e) => {
      function t(e) {
        var t = -1,
          r = Array(e.size);
        e.forEach(function (e, a) {
          r[++t] = [a, e];
        });
        return r;
      }
      e.exports = t;
    },
    90619: (e) => {
      var t = "__lodash_hash_undefined__";
      function r(e) {
        this.__data__.set(e, t);
        return this;
      }
      e.exports = r;
    },
    72385: (e) => {
      function t(e) {
        return this.__data__.has(e);
      }
      e.exports = t;
    },
    21814: (e) => {
      function t(e) {
        var t = -1,
          r = Array(e.size);
        e.forEach(function (e) {
          r[++t] = e;
        });
        return r;
      }
      e.exports = t;
    },
    18446: (e, t, r) => {
      var a = r(90939);
      function n(e, t) {
        return a(e, t);
      }
      e.exports = n;
    },
  },
]);
