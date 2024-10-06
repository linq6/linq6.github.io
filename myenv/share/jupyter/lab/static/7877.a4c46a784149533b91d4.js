"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7877],
  {
    83082: (u, e, t) => {
      t.d(e, { r: () => f });
      const r = "view",
        n = "[",
        A = "]",
        i = "{",
        a = "}",
        s = ":",
        F = ",",
        o = "@",
        c = ">",
        C = /[[\]{}]/,
        l = { "*": 1, arc: 1, area: 1, group: 1, image: 1, line: 1, path: 1, rect: 1, rule: 1, shape: 1, symbol: 1, text: 1, trail: 1 };
      let D, B;
      function f(u, e, t) {
        D = e || r;
        B = t || l;
        return h(u.trim()).map(d);
      }
      function E(u) {
        return B[u];
      }
      function p(u, e, t, r, n) {
        const A = u.length;
        let i = 0,
          a;
        for (; e < A; ++e) {
          a = u[e];
          if (!i && a === t) return e;
          else if (n && n.indexOf(a) >= 0) --i;
          else if (r && r.indexOf(a) >= 0) ++i;
        }
        return e;
      }
      function h(u) {
        const e = [],
          t = u.length;
        let r = 0,
          s = 0;
        while (s < t) {
          s = p(u, s, F, n + i, A + a);
          e.push(u.substring(r, s).trim());
          r = ++s;
        }
        if (e.length === 0) {
          throw "Empty event selector: " + u;
        }
        return e;
      }
      function d(u) {
        return u[0] === "[" ? g(u) : m(u);
      }
      function g(u) {
        const e = u.length;
        let t = 1,
          r;
        t = p(u, t, A, n, A);
        if (t === e) {
          throw "Empty between selector: " + u;
        }
        r = h(u.substring(1, t));
        if (r.length !== 2) {
          throw "Between selector must have two elements: " + u;
        }
        u = u.slice(t + 1).trim();
        if (u[0] !== c) {
          throw "Expected '>' after between selector: " + u;
        }
        r = r.map(d);
        const i = d(u.slice(1).trim());
        if (i.between) {
          return { between: r, stream: i };
        } else {
          i.between = r;
        }
        return i;
      }
      function m(u) {
        const e = { source: D },
          t = [];
        let r = [0, 0],
          F = 0,
          c = 0,
          l = u.length,
          B = 0,
          f,
          h;
        if (u[l - 1] === a) {
          B = u.lastIndexOf(i);
          if (B >= 0) {
            try {
              r = w(u.substring(B + 1, l - 1));
            } catch (d) {
              throw "Invalid throttle specification: " + u;
            }
            u = u.slice(0, B).trim();
            l = u.length;
          } else throw "Unmatched right brace: " + u;
          B = 0;
        }
        if (!l) throw u;
        if (u[0] === o) F = ++B;
        f = p(u, B, s);
        if (f < l) {
          t.push(u.substring(c, f).trim());
          c = B = ++f;
        }
        B = p(u, B, n);
        if (B === l) {
          t.push(u.substring(c, l).trim());
        } else {
          t.push(u.substring(c, B).trim());
          h = [];
          c = ++B;
          if (c === l) throw "Unmatched left bracket: " + u;
        }
        while (B < l) {
          B = p(u, B, A);
          if (B === l) throw "Unmatched left bracket: " + u;
          h.push(u.substring(c, B).trim());
          if (B < l - 1 && u[++B] !== n) throw "Expected left bracket: " + u;
          c = ++B;
        }
        if (!(l = t.length) || C.test(t[l - 1])) {
          throw "Invalid event selector: " + u;
        }
        if (l > 1) {
          e.type = t[1];
          if (F) {
            e.markname = t[0].slice(1);
          } else if (E(t[0])) {
            e.marktype = t[0];
          } else {
            e.source = t[0];
          }
        } else {
          e.type = t[0];
        }
        if (e.type.slice(-1) === "!") {
          e.consume = true;
          e.type = e.type.slice(0, -1);
        }
        if (h != null) e.filter = h;
        if (r[0]) e.throttle = r[0];
        if (r[1]) e.debounce = r[1];
        return e;
      }
      function w(u) {
        const e = u.split(F);
        if (!u.length || e.length > 2) throw u;
        return e.map((e) => {
          const t = +e;
          if (t !== t) throw u;
          return t;
        });
      }
    },
    25693: (u, e, t) => {
      t.d(e, { BJ: () => oe, Lt: () => o, YP: () => De, _G: () => ce, t$: () => A, wk: () => Ce });
      var r = t(48823);
      const n = "RawCode";
      const A = "Literal";
      const i = "Property";
      const a = "Identifier";
      const s = "ArrayExpression";
      const F = "BinaryExpression";
      const o = "CallExpression";
      const c = "ConditionalExpression";
      const C = "LogicalExpression";
      const l = "MemberExpression";
      const D = "ObjectExpression";
      const B = "UnaryExpression";
      function f(u) {
        this.type = u;
      }
      f.prototype.visit = function (u) {
        let e, t, r;
        if (u(this)) return 1;
        for (e = E(this), t = 0, r = e.length; t < r; ++t) {
          if (e[t].visit(u)) return 1;
        }
      };
      function E(u) {
        switch (u.type) {
          case s:
            return u.elements;
          case F:
          case C:
            return [u.left, u.right];
          case o:
            return [u.callee].concat(u.arguments);
          case c:
            return [u.test, u.consequent, u.alternate];
          case l:
            return [u.object, u.property];
          case D:
            return u.properties;
          case i:
            return [u.key, u.value];
          case B:
            return [u.argument];
          case a:
          case A:
          case n:
          default:
            return [];
        }
      }
      var p, h, d, g, m;
      var w = 1,
        y = 2,
        x = 3,
        b = 4,
        v = 5,
        k = 6,
        M = 7,
        U = 8,
        O = 9;
      p = {};
      p[w] = "Boolean";
      p[y] = "<end>";
      p[x] = "Identifier";
      p[b] = "Keyword";
      p[v] = "Null";
      p[k] = "Numeric";
      p[M] = "Punctuator";
      p[U] = "String";
      p[O] = "RegularExpression";
      var L = "ArrayExpression",
        I = "BinaryExpression",
        S = "CallExpression",
        N = "ConditionalExpression",
        T = "Identifier",
        j = "Literal",
        R = "LogicalExpression",
        _ = "MemberExpression",
        P = "ObjectExpression",
        q = "Property",
        G = "UnaryExpression";
      var Q = "Unexpected token %0",
        V = "Unexpected number",
        $ = "Unexpected string",
        z = "Unexpected identifier",
        H = "Unexpected reserved word",
        X = "Unexpected end of input",
        Y = "Invalid regular expression",
        J = "Invalid regular expression: missing /",
        K = "Octal literals are not allowed in strict mode.",
        W = "Duplicate data property in object literal not allowed in strict mode";
      var Z = "ILLEGAL",
        uu = "Disabled.";
      var eu = new RegExp(
          "[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"
        ),
        tu = new RegExp(
          "[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0300-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u0483-\\u0487\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06FC\\u06FF\\u0710-\\u074A\\u074D-\\u07B1\\u07C0-\\u07F5\\u07FA\\u0800-\\u082D\\u0840-\\u085B\\u08A0-\\u08B2\\u08E4-\\u0963\\u0966-\\u096F\\u0971-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A66-\\u0A75\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C00-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58\\u0C59\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C81-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CDE\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D01-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D57\\u0D60-\\u0D63\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DE6-\\u0DEF\\u0DF2\\u0DF3\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDC-\\u0EDF\\u0F00\\u0F18\\u0F19\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F84\\u0F86-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1714\\u1720-\\u1734\\u1740-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772\\u1773\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u17E0-\\u17E9\\u180B-\\u180D\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u192B\\u1930-\\u193B\\u1946-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19D0-\\u19D9\\u1A00-\\u1A1B\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1A7F-\\u1A89\\u1A90-\\u1A99\\u1AA7\\u1AB0-\\u1ABD\\u1B00-\\u1B4B\\u1B50-\\u1B59\\u1B6B-\\u1B73\\u1B80-\\u1BF3\\u1C00-\\u1C37\\u1C40-\\u1C49\\u1C4D-\\u1C7D\\u1CD0-\\u1CD2\\u1CD4-\\u1CF6\\u1CF8\\u1CF9\\u1D00-\\u1DF5\\u1DFC-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u200C\\u200D\\u203F\\u2040\\u2054\\u2071\\u207F\\u2090-\\u209C\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D7F-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u2E2F\\u3005-\\u3007\\u3021-\\u302F\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u3099\\u309A\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA62B\\uA640-\\uA66F\\uA674-\\uA67D\\uA67F-\\uA69D\\uA69F-\\uA6F1\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA827\\uA840-\\uA873\\uA880-\\uA8C4\\uA8D0-\\uA8D9\\uA8E0-\\uA8F7\\uA8FB\\uA900-\\uA92D\\uA930-\\uA953\\uA960-\\uA97C\\uA980-\\uA9C0\\uA9CF-\\uA9D9\\uA9E0-\\uA9FE\\uAA00-\\uAA36\\uAA40-\\uAA4D\\uAA50-\\uAA59\\uAA60-\\uAA76\\uAA7A-\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEF\\uAAF2-\\uAAF6\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABEA\\uABEC\\uABED\\uABF0-\\uABF9\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE00-\\uFE0F\\uFE20-\\uFE2D\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF10-\\uFF19\\uFF21-\\uFF3A\\uFF3F\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"
        );
      function ru(u, e) {
        if (!u) {
          throw new Error("ASSERT: " + e);
        }
      }
      function nu(u) {
        return u >= 48 && u <= 57;
      }
      function Au(u) {
        return "0123456789abcdefABCDEF".indexOf(u) >= 0;
      }
      function iu(u) {
        return "01234567".indexOf(u) >= 0;
      }
      function au(u) {
        return (
          u === 32 ||
          u === 9 ||
          u === 11 ||
          u === 12 ||
          u === 160 ||
          (u >= 5760 && [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].indexOf(u) >= 0)
        );
      }
      function su(u) {
        return u === 10 || u === 13 || u === 8232 || u === 8233;
      }
      function Fu(u) {
        return u === 36 || u === 95 || (u >= 65 && u <= 90) || (u >= 97 && u <= 122) || u === 92 || (u >= 128 && eu.test(String.fromCharCode(u)));
      }
      function ou(u) {
        return (
          u === 36 ||
          u === 95 ||
          (u >= 65 && u <= 90) ||
          (u >= 97 && u <= 122) ||
          (u >= 48 && u <= 57) ||
          u === 92 ||
          (u >= 128 && tu.test(String.fromCharCode(u)))
        );
      }
      const cu = {
        if: 1,
        in: 1,
        do: 1,
        var: 1,
        for: 1,
        new: 1,
        try: 1,
        let: 1,
        this: 1,
        else: 1,
        case: 1,
        void: 1,
        with: 1,
        enum: 1,
        while: 1,
        break: 1,
        catch: 1,
        throw: 1,
        const: 1,
        yield: 1,
        class: 1,
        super: 1,
        return: 1,
        typeof: 1,
        delete: 1,
        switch: 1,
        export: 1,
        import: 1,
        public: 1,
        static: 1,
        default: 1,
        finally: 1,
        extends: 1,
        package: 1,
        private: 1,
        function: 1,
        continue: 1,
        debugger: 1,
        interface: 1,
        protected: 1,
        instanceof: 1,
        implements: 1,
      };
      function Cu() {
        while (d < g) {
          const u = h.charCodeAt(d);
          if (au(u) || su(u)) {
            ++d;
          } else {
            break;
          }
        }
      }
      function lu(u) {
        var e,
          t,
          r,
          n = 0;
        t = u === "u" ? 4 : 2;
        for (e = 0; e < t; ++e) {
          if (d < g && Au(h[d])) {
            r = h[d++];
            n = n * 16 + "0123456789abcdef".indexOf(r.toLowerCase());
          } else {
            qu({}, Q, Z);
          }
        }
        return String.fromCharCode(n);
      }
      function Du() {
        var u, e, t, r;
        u = h[d];
        e = 0;
        if (u === "}") {
          qu({}, Q, Z);
        }
        while (d < g) {
          u = h[d++];
          if (!Au(u)) {
            break;
          }
          e = e * 16 + "0123456789abcdef".indexOf(u.toLowerCase());
        }
        if (e > 1114111 || u !== "}") {
          qu({}, Q, Z);
        }
        if (e <= 65535) {
          return String.fromCharCode(e);
        }
        t = ((e - 65536) >> 10) + 55296;
        r = ((e - 65536) & 1023) + 56320;
        return String.fromCharCode(t, r);
      }
      function Bu() {
        var u, e;
        u = h.charCodeAt(d++);
        e = String.fromCharCode(u);
        if (u === 92) {
          if (h.charCodeAt(d) !== 117) {
            qu({}, Q, Z);
          }
          ++d;
          u = lu("u");
          if (!u || u === "\\" || !Fu(u.charCodeAt(0))) {
            qu({}, Q, Z);
          }
          e = u;
        }
        while (d < g) {
          u = h.charCodeAt(d);
          if (!ou(u)) {
            break;
          }
          ++d;
          e += String.fromCharCode(u);
          if (u === 92) {
            e = e.substr(0, e.length - 1);
            if (h.charCodeAt(d) !== 117) {
              qu({}, Q, Z);
            }
            ++d;
            u = lu("u");
            if (!u || u === "\\" || !ou(u.charCodeAt(0))) {
              qu({}, Q, Z);
            }
            e += u;
          }
        }
        return e;
      }
      function fu() {
        var u, e;
        u = d++;
        while (d < g) {
          e = h.charCodeAt(d);
          if (e === 92) {
            d = u;
            return Bu();
          }
          if (ou(e)) {
            ++d;
          } else {
            break;
          }
        }
        return h.slice(u, d);
      }
      function Eu() {
        var u, e, t;
        u = d;
        e = h.charCodeAt(d) === 92 ? Bu() : fu();
        if (e.length === 1) {
          t = x;
        } else if (cu.hasOwnProperty(e)) {
          t = b;
        } else if (e === "null") {
          t = v;
        } else if (e === "true" || e === "false") {
          t = w;
        } else {
          t = x;
        }
        return { type: t, value: e, start: u, end: d };
      }
      function pu() {
        var u = d,
          e = h.charCodeAt(d),
          t,
          r = h[d],
          n,
          A,
          i;
        switch (e) {
          case 46:
          case 40:
          case 41:
          case 59:
          case 44:
          case 123:
          case 125:
          case 91:
          case 93:
          case 58:
          case 63:
          case 126:
            ++d;
            return { type: M, value: String.fromCharCode(e), start: u, end: d };
          default:
            t = h.charCodeAt(d + 1);
            if (t === 61) {
              switch (e) {
                case 43:
                case 45:
                case 47:
                case 60:
                case 62:
                case 94:
                case 124:
                case 37:
                case 38:
                case 42:
                  d += 2;
                  return { type: M, value: String.fromCharCode(e) + String.fromCharCode(t), start: u, end: d };
                case 33:
                case 61:
                  d += 2;
                  if (h.charCodeAt(d) === 61) {
                    ++d;
                  }
                  return { type: M, value: h.slice(u, d), start: u, end: d };
              }
            }
        }
        i = h.substr(d, 4);
        if (i === ">>>=") {
          d += 4;
          return { type: M, value: i, start: u, end: d };
        }
        A = i.substr(0, 3);
        if (A === ">>>" || A === "<<=" || A === ">>=") {
          d += 3;
          return { type: M, value: A, start: u, end: d };
        }
        n = A.substr(0, 2);
        if ((r === n[1] && "+-<>&|".indexOf(r) >= 0) || n === "=>") {
          d += 2;
          return { type: M, value: n, start: u, end: d };
        }
        if (n === "//") {
          qu({}, Q, Z);
        }
        if ("<>=!+-*%&|^/".indexOf(r) >= 0) {
          ++d;
          return { type: M, value: r, start: u, end: d };
        }
        qu({}, Q, Z);
      }
      function hu(u) {
        let e = "";
        while (d < g) {
          if (!Au(h[d])) {
            break;
          }
          e += h[d++];
        }
        if (e.length === 0) {
          qu({}, Q, Z);
        }
        if (Fu(h.charCodeAt(d))) {
          qu({}, Q, Z);
        }
        return { type: k, value: parseInt("0x" + e, 16), start: u, end: d };
      }
      function du(u) {
        let e = "0" + h[d++];
        while (d < g) {
          if (!iu(h[d])) {
            break;
          }
          e += h[d++];
        }
        if (Fu(h.charCodeAt(d)) || nu(h.charCodeAt(d))) {
          qu({}, Q, Z);
        }
        return { type: k, value: parseInt(e, 8), octal: true, start: u, end: d };
      }
      function gu() {
        var u, e, t;
        t = h[d];
        ru(nu(t.charCodeAt(0)) || t === ".", "Numeric literal must start with a decimal digit or a decimal point");
        e = d;
        u = "";
        if (t !== ".") {
          u = h[d++];
          t = h[d];
          if (u === "0") {
            if (t === "x" || t === "X") {
              ++d;
              return hu(e);
            }
            if (iu(t)) {
              return du(e);
            }
            if (t && nu(t.charCodeAt(0))) {
              qu({}, Q, Z);
            }
          }
          while (nu(h.charCodeAt(d))) {
            u += h[d++];
          }
          t = h[d];
        }
        if (t === ".") {
          u += h[d++];
          while (nu(h.charCodeAt(d))) {
            u += h[d++];
          }
          t = h[d];
        }
        if (t === "e" || t === "E") {
          u += h[d++];
          t = h[d];
          if (t === "+" || t === "-") {
            u += h[d++];
          }
          if (nu(h.charCodeAt(d))) {
            while (nu(h.charCodeAt(d))) {
              u += h[d++];
            }
          } else {
            qu({}, Q, Z);
          }
        }
        if (Fu(h.charCodeAt(d))) {
          qu({}, Q, Z);
        }
        return { type: k, value: parseFloat(u), start: e, end: d };
      }
      function mu() {
        var u = "",
          e,
          t,
          r,
          n,
          A = false;
        e = h[d];
        ru(e === "'" || e === '"', "String literal must starts with a quote");
        t = d;
        ++d;
        while (d < g) {
          r = h[d++];
          if (r === e) {
            e = "";
            break;
          } else if (r === "\\") {
            r = h[d++];
            if (!r || !su(r.charCodeAt(0))) {
              switch (r) {
                case "u":
                case "x":
                  if (h[d] === "{") {
                    ++d;
                    u += Du();
                  } else {
                    u += lu(r);
                  }
                  break;
                case "n":
                  u += "\n";
                  break;
                case "r":
                  u += "\r";
                  break;
                case "t":
                  u += "\t";
                  break;
                case "b":
                  u += "\b";
                  break;
                case "f":
                  u += "\f";
                  break;
                case "v":
                  u += "\v";
                  break;
                default:
                  if (iu(r)) {
                    n = "01234567".indexOf(r);
                    if (n !== 0) {
                      A = true;
                    }
                    if (d < g && iu(h[d])) {
                      A = true;
                      n = n * 8 + "01234567".indexOf(h[d++]);
                      if ("0123".indexOf(r) >= 0 && d < g && iu(h[d])) {
                        n = n * 8 + "01234567".indexOf(h[d++]);
                      }
                    }
                    u += String.fromCharCode(n);
                  } else {
                    u += r;
                  }
                  break;
              }
            } else {
              if (r === "\r" && h[d] === "\n") {
                ++d;
              }
            }
          } else if (su(r.charCodeAt(0))) {
            break;
          } else {
            u += r;
          }
        }
        if (e !== "") {
          qu({}, Q, Z);
        }
        return { type: U, value: u, octal: A, start: t, end: d };
      }
      function wu(u, e) {
        let t = u;
        if (e.indexOf("u") >= 0) {
          t = t
            .replace(/\\u\{([0-9a-fA-F]+)\}/g, (u, e) => {
              if (parseInt(e, 16) <= 1114111) {
                return "x";
              }
              qu({}, Y);
            })
            .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "x");
        }
        try {
          new RegExp(t);
        } catch (r) {
          qu({}, Y);
        }
        try {
          return new RegExp(u, e);
        } catch (n) {
          return null;
        }
      }
      function yu() {
        var u, e, t, r, n;
        u = h[d];
        ru(u === "/", "Regular expression literal must start with a slash");
        e = h[d++];
        t = false;
        r = false;
        while (d < g) {
          u = h[d++];
          e += u;
          if (u === "\\") {
            u = h[d++];
            if (su(u.charCodeAt(0))) {
              qu({}, J);
            }
            e += u;
          } else if (su(u.charCodeAt(0))) {
            qu({}, J);
          } else if (t) {
            if (u === "]") {
              t = false;
            }
          } else {
            if (u === "/") {
              r = true;
              break;
            } else if (u === "[") {
              t = true;
            }
          }
        }
        if (!r) {
          qu({}, J);
        }
        n = e.substr(1, e.length - 2);
        return { value: n, literal: e };
      }
      function xu() {
        var u, e, t;
        e = "";
        t = "";
        while (d < g) {
          u = h[d];
          if (!ou(u.charCodeAt(0))) {
            break;
          }
          ++d;
          if (u === "\\" && d < g) {
            qu({}, Q, Z);
          } else {
            t += u;
            e += u;
          }
        }
        if (t.search(/[^gimuy]/g) >= 0) {
          qu({}, Y, t);
        }
        return { value: t, literal: e };
      }
      function bu() {
        var u, e, t, r;
        m = null;
        Cu();
        u = d;
        e = yu();
        t = xu();
        r = wu(e.value, t.value);
        return { literal: e.literal + t.literal, value: r, regex: { pattern: e.value, flags: t.value }, start: u, end: d };
      }
      function vu(u) {
        return u.type === x || u.type === b || u.type === w || u.type === v;
      }
      function ku() {
        Cu();
        if (d >= g) {
          return { type: y, start: d, end: d };
        }
        const u = h.charCodeAt(d);
        if (Fu(u)) {
          return Eu();
        }
        if (u === 40 || u === 41 || u === 59) {
          return pu();
        }
        if (u === 39 || u === 34) {
          return mu();
        }
        if (u === 46) {
          if (nu(h.charCodeAt(d + 1))) {
            return gu();
          }
          return pu();
        }
        if (nu(u)) {
          return gu();
        }
        return pu();
      }
      function Mu() {
        const u = m;
        d = u.end;
        m = ku();
        d = u.end;
        return u;
      }
      function Uu() {
        const u = d;
        m = ku();
        d = u;
      }
      function Ou(u) {
        const e = new f(L);
        e.elements = u;
        return e;
      }
      function Lu(u, e, t) {
        const r = new f(u === "||" || u === "&&" ? R : I);
        r.operator = u;
        r.left = e;
        r.right = t;
        return r;
      }
      function Iu(u, e) {
        const t = new f(S);
        t.callee = u;
        t.arguments = e;
        return t;
      }
      function Su(u, e, t) {
        const r = new f(N);
        r.test = u;
        r.consequent = e;
        r.alternate = t;
        return r;
      }
      function Nu(u) {
        const e = new f(T);
        e.name = u;
        return e;
      }
      function Tu(u) {
        const e = new f(j);
        e.value = u.value;
        e.raw = h.slice(u.start, u.end);
        if (u.regex) {
          if (e.raw === "//") {
            e.raw = "/(?:)/";
          }
          e.regex = u.regex;
        }
        return e;
      }
      function ju(u, e, t) {
        const r = new f(_);
        r.computed = u === "[";
        r.object = e;
        r.property = t;
        if (!r.computed) t.member = true;
        return r;
      }
      function Ru(u) {
        const e = new f(P);
        e.properties = u;
        return e;
      }
      function _u(u, e, t) {
        const r = new f(q);
        r.key = e;
        r.value = t;
        r.kind = u;
        return r;
      }
      function Pu(u, e) {
        const t = new f(G);
        t.operator = u;
        t.argument = e;
        t.prefix = true;
        return t;
      }
      function qu(u, e) {
        var t,
          r = Array.prototype.slice.call(arguments, 2),
          n = e.replace(/%(\d)/g, (u, e) => {
            ru(e < r.length, "Message reference must be in range");
            return r[e];
          });
        t = new Error(n);
        t.index = d;
        t.description = n;
        throw t;
      }
      function Gu(u) {
        if (u.type === y) {
          qu(u, X);
        }
        if (u.type === k) {
          qu(u, V);
        }
        if (u.type === U) {
          qu(u, $);
        }
        if (u.type === x) {
          qu(u, z);
        }
        if (u.type === b) {
          qu(u, H);
        }
        qu(u, Q, u.value);
      }
      function Qu(u) {
        const e = Mu();
        if (e.type !== M || e.value !== u) {
          Gu(e);
        }
      }
      function Vu(u) {
        return m.type === M && m.value === u;
      }
      function $u(u) {
        return m.type === b && m.value === u;
      }
      function zu() {
        const u = [];
        d = m.start;
        Qu("[");
        while (!Vu("]")) {
          if (Vu(",")) {
            Mu();
            u.push(null);
          } else {
            u.push(se());
            if (!Vu("]")) {
              Qu(",");
            }
          }
        }
        Mu();
        return Ou(u);
      }
      function Hu() {
        d = m.start;
        const u = Mu();
        if (u.type === U || u.type === k) {
          if (u.octal) {
            qu(u, K);
          }
          return Tu(u);
        }
        return Nu(u.value);
      }
      function Xu() {
        var u, e, t, r;
        d = m.start;
        u = m;
        if (u.type === x) {
          t = Hu();
          Qu(":");
          r = se();
          return _u("init", t, r);
        }
        if (u.type === y || u.type === M) {
          Gu(u);
        } else {
          e = Hu();
          Qu(":");
          r = se();
          return _u("init", e, r);
        }
      }
      function Yu() {
        var u = [],
          e,
          t,
          r,
          n = {},
          A = String;
        d = m.start;
        Qu("{");
        while (!Vu("}")) {
          e = Xu();
          if (e.key.type === T) {
            t = e.key.name;
          } else {
            t = A(e.key.value);
          }
          r = "$" + t;
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            qu({}, W);
          } else {
            n[r] = true;
          }
          u.push(e);
          if (!Vu("}")) {
            Qu(",");
          }
        }
        Qu("}");
        return Ru(u);
      }
      function Ju() {
        Qu("(");
        const u = Fe();
        Qu(")");
        return u;
      }
      const Ku = { if: 1 };
      function Wu() {
        var u, e, t;
        if (Vu("(")) {
          return Ju();
        }
        if (Vu("[")) {
          return zu();
        }
        if (Vu("{")) {
          return Yu();
        }
        u = m.type;
        d = m.start;
        if (u === x || Ku[m.value]) {
          t = Nu(Mu().value);
        } else if (u === U || u === k) {
          if (m.octal) {
            qu(m, K);
          }
          t = Tu(Mu());
        } else if (u === b) {
          throw new Error(uu);
        } else if (u === w) {
          e = Mu();
          e.value = e.value === "true";
          t = Tu(e);
        } else if (u === v) {
          e = Mu();
          e.value = null;
          t = Tu(e);
        } else if (Vu("/") || Vu("/=")) {
          t = Tu(bu());
          Uu();
        } else {
          Gu(Mu());
        }
        return t;
      }
      function Zu() {
        const u = [];
        Qu("(");
        if (!Vu(")")) {
          while (d < g) {
            u.push(se());
            if (Vu(")")) {
              break;
            }
            Qu(",");
          }
        }
        Qu(")");
        return u;
      }
      function ue() {
        d = m.start;
        const u = Mu();
        if (!vu(u)) {
          Gu(u);
        }
        return Nu(u.value);
      }
      function ee() {
        Qu(".");
        return ue();
      }
      function te() {
        Qu("[");
        const u = Fe();
        Qu("]");
        return u;
      }
      function re() {
        var u, e, t;
        u = Wu();
        for (;;) {
          if (Vu(".")) {
            t = ee();
            u = ju(".", u, t);
          } else if (Vu("(")) {
            e = Zu();
            u = Iu(u, e);
          } else if (Vu("[")) {
            t = te();
            u = ju("[", u, t);
          } else {
            break;
          }
        }
        return u;
      }
      function ne() {
        const u = re();
        if (m.type === M) {
          if (Vu("++") || Vu("--")) {
            throw new Error(uu);
          }
        }
        return u;
      }
      function Ae() {
        var u, e;
        if (m.type !== M && m.type !== b) {
          e = ne();
        } else if (Vu("++") || Vu("--")) {
          throw new Error(uu);
        } else if (Vu("+") || Vu("-") || Vu("~") || Vu("!")) {
          u = Mu();
          e = Ae();
          e = Pu(u.value, e);
        } else if ($u("delete") || $u("void") || $u("typeof")) {
          throw new Error(uu);
        } else {
          e = ne();
        }
        return e;
      }
      function ie(u) {
        let e = 0;
        if (u.type !== M && u.type !== b) {
          return 0;
        }
        switch (u.value) {
          case "||":
            e = 1;
            break;
          case "&&":
            e = 2;
            break;
          case "|":
            e = 3;
            break;
          case "^":
            e = 4;
            break;
          case "&":
            e = 5;
            break;
          case "==":
          case "!=":
          case "===":
          case "!==":
            e = 6;
            break;
          case "<":
          case ">":
          case "<=":
          case ">=":
          case "instanceof":
          case "in":
            e = 7;
            break;
          case "<<":
          case ">>":
          case ">>>":
            e = 8;
            break;
          case "+":
          case "-":
            e = 9;
            break;
          case "*":
          case "/":
          case "%":
            e = 11;
            break;
        }
        return e;
      }
      function ae() {
        var u, e, t, r, n, A, i, a, s, F;
        u = m;
        s = Ae();
        r = m;
        n = ie(r);
        if (n === 0) {
          return s;
        }
        r.prec = n;
        Mu();
        e = [u, m];
        i = Ae();
        A = [s, r, i];
        while ((n = ie(m)) > 0) {
          while (A.length > 2 && n <= A[A.length - 2].prec) {
            i = A.pop();
            a = A.pop().value;
            s = A.pop();
            e.pop();
            t = Lu(a, s, i);
            A.push(t);
          }
          r = Mu();
          r.prec = n;
          A.push(r);
          e.push(m);
          t = Ae();
          A.push(t);
        }
        F = A.length - 1;
        t = A[F];
        e.pop();
        while (F > 1) {
          e.pop();
          t = Lu(A[F - 1].value, A[F - 2], t);
          F -= 2;
        }
        return t;
      }
      function se() {
        var u, e, t;
        u = ae();
        if (Vu("?")) {
          Mu();
          e = se();
          Qu(":");
          t = se();
          u = Su(u, e, t);
        }
        return u;
      }
      function Fe() {
        const u = se();
        if (Vu(",")) {
          throw new Error(uu);
        }
        return u;
      }
      function oe(u) {
        h = u;
        d = 0;
        g = h.length;
        m = null;
        Uu();
        const e = Fe();
        if (m.type !== y) {
          throw new Error("Unexpect token after expression.");
        }
        return e;
      }
      var ce = {
        NaN: "NaN",
        E: "Math.E",
        LN2: "Math.LN2",
        LN10: "Math.LN10",
        LOG2E: "Math.LOG2E",
        LOG10E: "Math.LOG10E",
        PI: "Math.PI",
        SQRT1_2: "Math.SQRT1_2",
        SQRT2: "Math.SQRT2",
        MIN_VALUE: "Number.MIN_VALUE",
        MAX_VALUE: "Number.MAX_VALUE",
      };
      function Ce(u) {
        function e(e, t, r, n) {
          let A = u(t[0]);
          if (r) {
            A = r + "(" + A + ")";
            if (r.lastIndexOf("new ", 0) === 0) A = "(" + A + ")";
          }
          return A + "." + e + (n < 0 ? "" : n === 0 ? "()" : "(" + t.slice(1).map(u).join(",") + ")");
        }
        function t(u, t, r) {
          return (n) => e(u, n, t, r);
        }
        const n = "new Date",
          A = "String",
          i = "RegExp";
        return {
          isNaN: "Number.isNaN",
          isFinite: "Number.isFinite",
          abs: "Math.abs",
          acos: "Math.acos",
          asin: "Math.asin",
          atan: "Math.atan",
          atan2: "Math.atan2",
          ceil: "Math.ceil",
          cos: "Math.cos",
          exp: "Math.exp",
          floor: "Math.floor",
          log: "Math.log",
          max: "Math.max",
          min: "Math.min",
          pow: "Math.pow",
          random: "Math.random",
          round: "Math.round",
          sin: "Math.sin",
          sqrt: "Math.sqrt",
          tan: "Math.tan",
          clamp: function (e) {
            if (e.length < 3) (0, r.vU)("Missing arguments to clamp function.");
            if (e.length > 3) (0, r.vU)("Too many arguments to clamp function.");
            const t = e.map(u);
            return "Math.max(" + t[1] + ", Math.min(" + t[2] + "," + t[0] + "))";
          },
          now: "Date.now",
          utc: "Date.UTC",
          datetime: n,
          date: t("getDate", n, 0),
          day: t("getDay", n, 0),
          year: t("getFullYear", n, 0),
          month: t("getMonth", n, 0),
          hours: t("getHours", n, 0),
          minutes: t("getMinutes", n, 0),
          seconds: t("getSeconds", n, 0),
          milliseconds: t("getMilliseconds", n, 0),
          time: t("getTime", n, 0),
          timezoneoffset: t("getTimezoneOffset", n, 0),
          utcdate: t("getUTCDate", n, 0),
          utcday: t("getUTCDay", n, 0),
          utcyear: t("getUTCFullYear", n, 0),
          utcmonth: t("getUTCMonth", n, 0),
          utchours: t("getUTCHours", n, 0),
          utcminutes: t("getUTCMinutes", n, 0),
          utcseconds: t("getUTCSeconds", n, 0),
          utcmilliseconds: t("getUTCMilliseconds", n, 0),
          length: t("length", null, -1),
          parseFloat: "parseFloat",
          parseInt: "parseInt",
          upper: t("toUpperCase", A, 0),
          lower: t("toLowerCase", A, 0),
          substring: t("substring", A),
          split: t("split", A),
          trim: t("trim", A, 0),
          regexp: i,
          test: t("test", i),
          if: function (e) {
            if (e.length < 3) (0, r.vU)("Missing arguments to if function.");
            if (e.length > 3) (0, r.vU)("Too many arguments to if function.");
            const t = e.map(u);
            return "(" + t[0] + "?" + t[1] + ":" + t[2] + ")";
          },
        };
      }
      function le(u) {
        const e = u && u.length - 1;
        return e && ((u[0] === '"' && u[e] === '"') || (u[0] === "'" && u[e] === "'")) ? u.slice(1, -1) : u;
      }
      function De(u) {
        u = u || {};
        const e = u.allowed ? (0, r.Rg)(u.allowed) : {},
          t = u.forbidden ? (0, r.Rg)(u.forbidden) : {},
          n = u.constants || ce,
          A = (u.functions || Ce)(C),
          i = u.globalvar,
          a = u.fieldvar,
          s = (0, r.mf)(i) ? i : (u) => `${i}["${u}"]`;
        let F = {},
          o = {},
          c = 0;
        function C(u) {
          if ((0, r.HD)(u)) return u;
          const e = l[u.type];
          if (e == null) (0, r.vU)("Unsupported type: " + u.type);
          return e(u);
        }
        const l = {
          Literal: (u) => u.raw,
          Identifier: (u) => {
            const A = u.name;
            if (c > 0) {
              return A;
            } else if ((0, r.nr)(t, A)) {
              return (0, r.vU)("Illegal identifier: " + A);
            } else if ((0, r.nr)(n, A)) {
              return n[A];
            } else if ((0, r.nr)(e, A)) {
              return A;
            } else {
              F[A] = 1;
              return s(A);
            }
          },
          MemberExpression: (u) => {
            const e = !u.computed,
              t = C(u.object);
            if (e) c += 1;
            const r = C(u.property);
            if (t === a) {
              o[le(r)] = 1;
            }
            if (e) c -= 1;
            return t + (e ? "." + r : "[" + r + "]");
          },
          CallExpression: (u) => {
            if (u.callee.type !== "Identifier") {
              (0, r.vU)("Illegal callee type: " + u.callee.type);
            }
            const e = u.callee.name,
              t = u.arguments,
              n = (0, r.nr)(A, e) && A[e];
            if (!n) (0, r.vU)("Unrecognized function: " + e);
            return (0, r.mf)(n) ? n(t) : n + "(" + t.map(C).join(",") + ")";
          },
          ArrayExpression: (u) => "[" + u.elements.map(C).join(",") + "]",
          BinaryExpression: (u) => "(" + C(u.left) + " " + u.operator + " " + C(u.right) + ")",
          UnaryExpression: (u) => "(" + u.operator + C(u.argument) + ")",
          ConditionalExpression: (u) => "(" + C(u.test) + "?" + C(u.consequent) + ":" + C(u.alternate) + ")",
          LogicalExpression: (u) => "(" + C(u.left) + u.operator + C(u.right) + ")",
          ObjectExpression: (u) => "{" + u.properties.map(C).join(",") + "}",
          Property: (u) => {
            c += 1;
            const e = C(u.key);
            c -= 1;
            return e + ":" + C(u.value);
          },
        };
        function D(u) {
          const e = { code: C(u), globals: Object.keys(F), fields: Object.keys(o) };
          F = {};
          o = {};
          return e;
        }
        D.functions = A;
        D.constants = n;
        return D;
      }
    },
  },
]);
