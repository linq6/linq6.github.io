"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [8771],
  {
    28771: (e, t, a) => {
      a.r(t);
      a.d(t, {
        Cassandra: () => ze,
        MSSQL: () => Te,
        MariaSQL: () => Pe,
        MySQL: () => qe,
        PLSQL: () => Xe,
        PostgreSQL: () => we,
        SQLDialect: () => be,
        SQLite: () => Ue,
        StandardSQL: () => Oe,
        keywordCompletion: () => ve,
        keywordCompletionSource: () => _e,
        schemaCompletion: () => ke,
        schemaCompletionSource: () => ye,
        sql: () => xe,
      });
      var n = a(24104);
      var r = a.n(n);
      var i = a(6016);
      var s = a.n(i);
      var o = a(11705);
      var l = a(1065);
      const c = 36,
        d = 1,
        u = 2,
        m = 3,
        p = 4,
        f = 5,
        g = 6,
        h = 7,
        b = 8,
        _ = 9,
        v = 10,
        y = 11,
        k = 12,
        x = 13,
        O = 14,
        w = 15,
        Q = 16,
        C = 17,
        S = 18,
        q = 19,
        P = 20,
        T = 21,
        U = 22,
        z = 23,
        X = 24;
      function j(e) {
        return (e >= 65 && e <= 90) || (e >= 97 && e <= 122) || (e >= 48 && e <= 57);
      }
      function B(e) {
        return (e >= 48 && e <= 57) || (e >= 97 && e <= 102) || (e >= 65 && e <= 70);
      }
      function R(e, t, a) {
        for (let n = false; ; ) {
          if (e.next < 0) return;
          if (e.next == t && !n) {
            e.advance();
            return;
          }
          n = a && !n && e.next == 92;
          e.advance();
        }
      }
      function L(e) {
        for (;;) {
          if (e.next < 0 || e.peek(1) < 0) return;
          if (e.next == 36 && e.peek(1) == 36) {
            e.advance(2);
            return;
          }
          e.advance();
        }
      }
      function Z(e, t) {
        let a = "[{<(".indexOf(String.fromCharCode(t));
        let n = a < 0 ? t : "]}>)".charCodeAt(a);
        for (;;) {
          if (e.next < 0) return;
          if (e.next == n && e.peek(1) == 39) {
            e.advance(2);
            return;
          }
          e.advance();
        }
      }
      function N(e, t) {
        for (;;) {
          if (e.next != 95 && !j(e.next)) break;
          if (t != null) t += String.fromCharCode(e.next);
          e.advance();
        }
        return t;
      }
      function V(e) {
        if (e.next == 39 || e.next == 34 || e.next == 96) {
          let t = e.next;
          e.advance();
          R(e, t, false);
        } else {
          N(e);
        }
      }
      function D(e, t) {
        while (e.next == 48 || e.next == 49) e.advance();
        if (t && e.next == t) e.advance();
      }
      function I(e, t) {
        for (;;) {
          if (e.next == 46) {
            if (t) break;
            t = true;
          } else if (e.next < 48 || e.next > 57) {
            break;
          }
          e.advance();
        }
        if (e.next == 69 || e.next == 101) {
          e.advance();
          if (e.next == 43 || e.next == 45) e.advance();
          while (e.next >= 48 && e.next <= 57) e.advance();
        }
      }
      function $(e) {
        while (!(e.next < 0 || e.next == 10)) e.advance();
      }
      function E(e, t) {
        for (let a = 0; a < t.length; a++) if (t.charCodeAt(a) == e) return true;
        return false;
      }
      const W = " \t\r\n";
      function A(e, t, a) {
        let n = Object.create(null);
        n["true"] = n["false"] = f;
        n["null"] = n["unknown"] = g;
        for (let r of e.split(" ")) if (r) n[r] = P;
        for (let r of t.split(" ")) if (r) n[r] = T;
        for (let r of (a || "").split(" ")) if (r) n[r] = X;
        return n;
      }
      const G =
        "array binary bit boolean char character clob date decimal double float int integer interval large national nchar nclob numeric object precision real smallint time timestamp varchar varying ";
      const M =
        "absolute action add after all allocate alter and any are as asc assertion at authorization before begin between both breadth by call cascade cascaded case cast catalog check close collate collation column commit condition connect connection constraint constraints constructor continue corresponding count create cross cube current current_date current_default_transform_group current_transform_group_for_type current_path current_role current_time current_timestamp current_user cursor cycle data day deallocate declare default deferrable deferred delete depth deref desc describe descriptor deterministic diagnostics disconnect distinct do domain drop dynamic each else elseif end end-exec equals escape except exception exec execute exists exit external fetch first for foreign found from free full function general get global go goto grant group grouping handle having hold hour identity if immediate in indicator initially inner inout input insert intersect into is isolation join key language last lateral leading leave left level like limit local localtime localtimestamp locator loop map match method minute modifies module month names natural nesting new next no none not of old on only open option or order ordinality out outer output overlaps pad parameter partial path prepare preserve primary prior privileges procedure public read reads recursive redo ref references referencing relative release repeat resignal restrict result return returns revoke right role rollback rollup routine row rows savepoint schema scroll search second section select session session_user set sets signal similar size some space specific specifictype sql sqlexception sqlstate sqlwarning start state static system_user table temporary then timezone_hour timezone_minute to trailing transaction translation treat trigger under undo union unique unnest until update usage user using value values view when whenever where while with without work write year zone ";
      const Y = {
        backslashEscapes: false,
        hashComments: false,
        spaceAfterDashes: false,
        slashComments: false,
        doubleQuotedStrings: false,
        doubleDollarQuotedStrings: false,
        unquotedBitLiterals: false,
        treatBitsAsBytes: false,
        charSetCasts: false,
        plsqlQuotingMechanism: false,
        operatorChars: "*+-%<>!=&|~^/",
        specialVar: "?",
        identifierQuotes: '"',
        words: A(M, G),
      };
      function K(e, t, a, n) {
        let r = {};
        for (let i in Y) r[i] = (e.hasOwnProperty(i) ? e : Y)[i];
        if (t) r.words = A(t, a || "", n);
        return r;
      }
      function F(e) {
        return new o.Jq((t) => {
          var a;
          let { next: n } = t;
          t.advance();
          if (E(n, W)) {
            while (E(t.next, W)) t.advance();
            t.acceptToken(c);
          } else if (n == 36 && t.next == 36 && e.doubleDollarQuotedStrings) {
            L(t);
            t.acceptToken(m);
          } else if (n == 39 || (n == 34 && e.doubleQuotedStrings)) {
            R(t, n, e.backslashEscapes);
            t.acceptToken(m);
          } else if ((n == 35 && e.hashComments) || (n == 47 && t.next == 47 && e.slashComments)) {
            $(t);
            t.acceptToken(d);
          } else if (n == 45 && t.next == 45 && (!e.spaceAfterDashes || t.peek(1) == 32)) {
            $(t);
            t.acceptToken(d);
          } else if (n == 47 && t.next == 42) {
            t.advance();
            for (let e = 1; ; ) {
              let a = t.next;
              if (t.next < 0) break;
              t.advance();
              if (a == 42 && t.next == 47) {
                e--;
                t.advance();
                if (!e) break;
              } else if (a == 47 && t.next == 42) {
                e++;
                t.advance();
              }
            }
            t.acceptToken(u);
          } else if ((n == 101 || n == 69) && t.next == 39) {
            t.advance();
            R(t, 39, true);
          } else if ((n == 110 || n == 78) && t.next == 39 && e.charSetCasts) {
            t.advance();
            R(t, 39, e.backslashEscapes);
            t.acceptToken(m);
          } else if (n == 95 && e.charSetCasts) {
            for (let a = 0; ; a++) {
              if (t.next == 39 && a > 1) {
                t.advance();
                R(t, 39, e.backslashEscapes);
                t.acceptToken(m);
                break;
              }
              if (!j(t.next)) break;
              t.advance();
            }
          } else if (e.plsqlQuotingMechanism && (n == 113 || n == 81) && t.next == 39 && t.peek(1) > 0 && !E(t.peek(1), W)) {
            let e = t.peek(1);
            t.advance(2);
            Z(t, e);
            t.acceptToken(m);
          } else if (n == 40) {
            t.acceptToken(h);
          } else if (n == 41) {
            t.acceptToken(b);
          } else if (n == 123) {
            t.acceptToken(_);
          } else if (n == 125) {
            t.acceptToken(v);
          } else if (n == 91) {
            t.acceptToken(y);
          } else if (n == 93) {
            t.acceptToken(k);
          } else if (n == 59) {
            t.acceptToken(x);
          } else if (e.unquotedBitLiterals && n == 48 && t.next == 98) {
            t.advance();
            D(t);
            t.acceptToken(U);
          } else if ((n == 98 || n == 66) && (t.next == 39 || t.next == 34)) {
            const a = t.next;
            t.advance();
            if (e.treatBitsAsBytes) {
              R(t, a, e.backslashEscapes);
              t.acceptToken(z);
            } else {
              D(t, a);
              t.acceptToken(U);
            }
          } else if ((n == 48 && (t.next == 120 || t.next == 88)) || ((n == 120 || n == 88) && t.next == 39)) {
            let e = t.next == 39;
            t.advance();
            while (B(t.next)) t.advance();
            if (e && t.next == 39) t.advance();
            t.acceptToken(p);
          } else if (n == 46 && t.next >= 48 && t.next <= 57) {
            I(t, true);
            t.acceptToken(p);
          } else if (n == 46) {
            t.acceptToken(O);
          } else if (n >= 48 && n <= 57) {
            I(t, false);
            t.acceptToken(p);
          } else if (E(n, e.operatorChars)) {
            while (E(t.next, e.operatorChars)) t.advance();
            t.acceptToken(w);
          } else if (E(n, e.specialVar)) {
            if (t.next == n) t.advance();
            V(t);
            t.acceptToken(C);
          } else if (E(n, e.identifierQuotes)) {
            R(t, n, false);
            t.acceptToken(q);
          } else if (n == 58 || n == 44) {
            t.acceptToken(Q);
          } else if (j(n)) {
            let r = N(t, String.fromCharCode(n));
            t.acceptToken(t.next == 46 || t.peek(-r.length - 1) == 46 ? S : (a = e.words[r.toLowerCase()]) !== null && a !== void 0 ? a : S);
          }
        });
      }
      const J = F(Y);
      const H = o.WQ.deserialize({
        version: 14,
        states:
          "%vQ]QQOOO#wQRO'#DSO$OQQO'#CwO%eQQO'#CxO%lQQO'#CyO%sQQO'#CzOOQQ'#DS'#DSOOQQ'#C}'#C}O'UQRO'#C{OOQQ'#Cv'#CvOOQQ'#C|'#C|Q]QQOOQOQQOOO'`QQO'#DOO(xQRO,59cO)PQQO,59cO)UQQO'#DSOOQQ,59d,59dO)cQQO,59dOOQQ,59e,59eO)jQQO,59eOOQQ,59f,59fO)qQQO,59fOOQQ-E6{-E6{OOQQ,59b,59bOOQQ-E6z-E6zOOQQ,59j,59jOOQQ-E6|-E6|O+VQRO1G.}O+^QQO,59cOOQQ1G/O1G/OOOQQ1G/P1G/POOQQ1G/Q1G/QP+kQQO'#C}O+rQQO1G.}O)PQQO,59cO,PQQO'#Cw",
        stateData:
          ",[~OtOSPOSQOS~ORUOSUOTUOUUOVROXSOZTO]XO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O^]ORvXSvXTvXUvXVvXXvXZvX]vX_vX`vXavXbvXcvXdvXevXfvXgvXhvX~OsvX~P!jOa_Ob_Oc_O~ORUOSUOTUOUUOVROXSOZTO^tO_UO`UOa`Ob`Oc`OdUOeUOfUOgUOhUO~OWaO~P$ZOYcO~P$ZO[eO~P$ZORUOSUOTUOUUOVROXSOZTO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O]hOsoX~P%zOajObjOcjO~O^]ORkaSkaTkaUkaVkaXkaZka]ka_ka`kaakabkackadkaekafkagkahka~Oska~P'kO^]O~OWvXYvX[vX~P!jOWnO~P$ZOYoO~P$ZO[pO~P$ZO^]ORkiSkiTkiUkiVkiXkiZki]ki_ki`kiakibkickidkiekifkigkihki~Oski~P)xOWkaYka[ka~P'kO]hO~P$ZOWkiYki[ki~P)xOasObsOcsO~O",
        goto: "#hwPPPPPPPPPPPPPPPPPPPPPPPPPPx||||!Y!^!d!xPPP#[TYOZeUORSTWZbdfqT[OZQZORiZSWOZQbRQdSQfTZgWbdfqQ^PWk^lmrQl_Qm`RrseVORSTWZbdfq",
        nodeNames:
          "⚠ LineComment BlockComment String Number Bool Null ( ) { } [ ] ; . Operator Punctuation SpecialVar Identifier QuotedIdentifier Keyword Type Bits Bytes Builtin Script Statement CompositeIdentifier Parens Braces Brackets Statement",
        maxTerm: 38,
        nodeProps: [["isolate", -4, 1, 2, 3, 19, ""]],
        skippedNodes: [0, 1, 2],
        repeatNodeCount: 3,
        tokenData: "RORO",
        tokenizers: [0, J],
        topRules: { Script: [0, 25] },
        tokenPrec: 0,
      });
      function ee(e) {
        let t = e.cursor().moveTo(e.from, -1);
        while (/Comment/.test(t.name)) t.moveTo(t.from, -1);
        return t.node;
      }
      function te(e, t) {
        let a = e.sliceString(t.from, t.to);
        let n = /^([`'"])(.*)\1$/.exec(a);
        return n ? n[2] : a;
      }
      function ae(e) {
        return e && (e.name == "Identifier" || e.name == "QuotedIdentifier");
      }
      function ne(e, t) {
        if (t.name == "CompositeIdentifier") {
          let a = [];
          for (let n = t.firstChild; n; n = n.nextSibling) if (ae(n)) a.push(te(e, n));
          return a;
        }
        return [te(e, t)];
      }
      function re(e, t) {
        for (let a = []; ; ) {
          if (!t || t.name != ".") return a;
          let n = ee(t);
          if (!ae(n)) return a;
          a.unshift(te(e, n));
          t = ee(n);
        }
      }
      function ie(e, t) {
        let a = (0, n.syntaxTree)(e).resolveInner(t, -1);
        let r = oe(e.doc, a);
        if (a.name == "Identifier" || a.name == "QuotedIdentifier" || a.name == "Keyword") {
          return {
            from: a.from,
            quoted: a.name == "QuotedIdentifier" ? e.doc.sliceString(a.from, a.from + 1) : null,
            parents: re(e.doc, ee(a)),
            aliases: r,
          };
        }
        if (a.name == ".") {
          return { from: t, quoted: null, parents: re(e.doc, a), aliases: r };
        } else {
          return { from: t, quoted: null, parents: [], empty: true, aliases: r };
        }
      }
      const se = new Set("where group having order union intersect except all distinct limit offset fetch for".split(" "));
      function oe(e, t) {
        let a;
        for (let r = t; !a; r = r.parent) {
          if (!r) return null;
          if (r.name == "Statement") a = r;
        }
        let n = null;
        for (let r = a.firstChild, i = false, s = null; r; r = r.nextSibling) {
          let t = r.name == "Keyword" ? e.sliceString(r.from, r.to).toLowerCase() : null;
          let a = null;
          if (!i) {
            i = t == "from";
          } else if (t == "as" && s && ae(r.nextSibling)) {
            a = te(e, r.nextSibling);
          } else if (t && se.has(t)) {
            break;
          } else if (s && ae(r)) {
            a = te(e, r);
          }
          if (a) {
            if (!n) n = Object.create(null);
            n[a] = ne(e, s);
          }
          s = /Identifier$/.test(r.name) ? r : null;
        }
        return n;
      }
      function le(e, t) {
        if (!e) return t;
        return t.map((t) => Object.assign(Object.assign({}, t), { label: t.label[0] == e ? t.label : e + t.label + e, apply: undefined }));
      }
      const ce = /^\w*$/,
        de = /^[`'"]?\w*[`'"]?$/;
      function ue(e) {
        return e.self && typeof e.self.label == "string";
      }
      class me {
        constructor(e) {
          this.idQuote = e;
          this.list = [];
          this.children = undefined;
        }
        child(e) {
          let t = this.children || (this.children = Object.create(null));
          let a = t[e];
          if (a) return a;
          if (e && !this.list.some((t) => t.label == e)) this.list.push(pe(e, "type", this.idQuote));
          return (t[e] = new me(this.idQuote));
        }
        maybeChild(e) {
          return this.children ? this.children[e] : null;
        }
        addCompletion(e) {
          let t = this.list.findIndex((t) => t.label == e.label);
          if (t > -1) this.list[t] = e;
          else this.list.push(e);
        }
        addCompletions(e) {
          for (let t of e) this.addCompletion(typeof t == "string" ? pe(t, "property", this.idQuote) : t);
        }
        addNamespace(e) {
          if (Array.isArray(e)) {
            this.addCompletions(e);
          } else if (ue(e)) {
            this.addNamespace(e.children);
          } else {
            this.addNamespaceObject(e);
          }
        }
        addNamespaceObject(e) {
          for (let t of Object.keys(e)) {
            let a = e[t],
              n = null;
            let r = t.replace(/\\?\./g, (e) => (e == "." ? "\0" : e)).split("\0");
            let i = this;
            if (ue(a)) {
              n = a.self;
              a = a.children;
            }
            for (let e = 0; e < r.length; e++) {
              if (n && e == r.length - 1) i.addCompletion(n);
              i = i.child(r[e].replace(/\\\./g, "."));
            }
            i.addNamespace(a);
          }
        }
      }
      function pe(e, t, a) {
        if (/^[a-z_][a-z_\d]*$/.test(e)) return { label: e, type: t };
        return { label: e, type: t, apply: a + e + a };
      }
      function fe(e, t, a, n, r, i) {
        var s;
        let o = ((s = i === null || i === void 0 ? void 0 : i.spec.identifierQuotes) === null || s === void 0 ? void 0 : s[0]) || '"';
        let l = new me(o);
        let c = r ? l.child(r) : null;
        l.addNamespace(e);
        if (t) (c || l).addCompletions(t);
        if (a) l.addCompletions(a);
        if (c) l.addCompletions(c.list);
        if (n) l.addCompletions((c || l).child(n).list);
        return (e) => {
          let { parents: t, from: a, quoted: r, empty: i, aliases: s } = ie(e.state, e.pos);
          if (i && !e.explicit) return null;
          if (s && t.length == 1) t = s[t[0]] || t;
          let o = l;
          for (let m of t) {
            while (!o.children || !o.children[m]) {
              if (o == l) o = c;
              else if (o == c && n) o = o.child(n);
              else return null;
            }
            let e = o.maybeChild(m);
            if (!e) return null;
            o = e;
          }
          let d = r && e.state.sliceDoc(e.pos, e.pos + 1) == r;
          let u = o.list;
          if (o == l && s) u = u.concat(Object.keys(s).map((e) => ({ label: e, type: "constant" })));
          return { from: a, to: d ? e.pos + 1 : undefined, options: le(r, u), validFor: r ? de : ce };
        };
      }
      function ge(e, t) {
        let a = Object.keys(e).map((a) => ({
          label: t ? a.toUpperCase() : a,
          type: e[a] == T ? "type" : e[a] == P ? "keyword" : "variable",
          boost: -1,
        }));
        return (0, l.eC)(["QuotedIdentifier", "SpecialVar", "String", "LineComment", "BlockComment", "."], (0, l.Mb)(a));
      }
      let he = H.configure({
        props: [
          n.indentNodeProp.add({ Statement: (0, n.continuedIndent)() }),
          n.foldNodeProp.add({
            Statement(e) {
              return { from: e.firstChild.to, to: e.to };
            },
            BlockComment(e) {
              return { from: e.from + 2, to: e.to - 2 };
            },
          }),
          (0, i.styleTags)({
            Keyword: i.tags.keyword,
            Type: i.tags.typeName,
            Builtin: i.tags.standard(i.tags.name),
            Bits: i.tags.number,
            Bytes: i.tags.string,
            Bool: i.tags.bool,
            Null: i.tags["null"],
            Number: i.tags.number,
            String: i.tags.string,
            Identifier: i.tags.name,
            QuotedIdentifier: i.tags.special(i.tags.string),
            SpecialVar: i.tags.special(i.tags.name),
            LineComment: i.tags.lineComment,
            BlockComment: i.tags.blockComment,
            Operator: i.tags.operator,
            "Semi Punctuation": i.tags.punctuation,
            "( )": i.tags.paren,
            "{ }": i.tags.brace,
            "[ ]": i.tags.squareBracket,
          }),
        ],
      });
      class be {
        constructor(e, t, a) {
          this.dialect = e;
          this.language = t;
          this.spec = a;
        }
        get extension() {
          return this.language.extension;
        }
        static define(e) {
          let t = K(e, e.keywords, e.types, e.builtin);
          let a = n.LRLanguage.define({
            name: "sql",
            parser: he.configure({ tokenizers: [{ from: J, to: F(t) }] }),
            languageData: {
              commentTokens: { line: "--", block: { open: "/*", close: "*/" } },
              closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
            },
          });
          return new be(t, a, e);
        }
      }
      function _e(e, t = false) {
        return ge(e.dialect.words, t);
      }
      function ve(e, t = false) {
        return e.language.data.of({ autocomplete: _e(e, t) });
      }
      function ye(e) {
        return e.schema ? fe(e.schema, e.tables, e.schemas, e.defaultTable, e.defaultSchema, e.dialect || Oe) : () => null;
      }
      function ke(e) {
        return e.schema ? (e.dialect || Oe).language.data.of({ autocomplete: ye(e) }) : [];
      }
      function xe(e = {}) {
        let t = e.dialect || Oe;
        return new n.LanguageSupport(t.language, [ke(e), ve(t, !!e.upperCaseKeywords)]);
      }
      const Oe = be.define({});
      const we = be.define({
        charSetCasts: true,
        doubleDollarQuotedStrings: true,
        operatorChars: "+-*/<>=~!@#%^&|`?",
        specialVar: "",
        keywords:
          M +
          "a abort abs absent access according ada admin aggregate alias also always analyse analyze array_agg array_max_cardinality asensitive assert assignment asymmetric atomic attach attribute attributes avg backward base64 begin_frame begin_partition bernoulli bit_length blocked bom c cache called cardinality catalog_name ceil ceiling chain char_length character_length character_set_catalog character_set_name character_set_schema characteristics characters checkpoint class class_origin cluster coalesce cobol collation_catalog collation_name collation_schema collect column_name columns command_function command_function_code comment comments committed concurrently condition_number configuration conflict connection_name constant constraint_catalog constraint_name constraint_schema contains content control conversion convert copy corr cost covar_pop covar_samp csv cume_dist current_catalog current_row current_schema cursor_name database datalink datatype datetime_interval_code datetime_interval_precision db debug defaults defined definer degree delimiter delimiters dense_rank depends derived detach detail dictionary disable discard dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue document dump dynamic_function dynamic_function_code element elsif empty enable encoding encrypted end_frame end_partition endexec enforced enum errcode error event every exclude excluding exclusive exp explain expression extension extract family file filter final first_value flag floor following force foreach fortran forward frame_row freeze fs functions fusion g generated granted greatest groups handler header hex hierarchy hint id ignore ilike immediately immutable implementation implicit import include including increment indent index indexes info inherit inherits inline insensitive instance instantiable instead integrity intersection invoker isnull k key_member key_type label lag last_value lead leakproof least length library like_regex link listen ln load location lock locked log logged lower m mapping matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text min minvalue mod mode more move multiset mumps name namespace nfc nfd nfkc nfkd nil normalize normalized nothing notice notify notnull nowait nth_value ntile nullable nullif nulls number occurrences_regex octet_length octets off offset oids operator options ordering others over overlay overriding owned owner p parallel parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partition pascal passing passthrough password percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding prepared print_strict_params procedural procedures program publication query quote raise range rank reassign recheck recovery refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex rename repeatable replace replica requiring reset respect restart restore result_oid returned_cardinality returned_length returned_octet_length returned_sqlstate returning reverse routine_catalog routine_name routine_schema routines row_count row_number rowtype rule scale schema_name schemas scope scope_catalog scope_name scope_schema security selective self sensitive sequence sequences serializable server server_name setof share show simple skip slice snapshot source specific_name sqlcode sqlerror sqrt stable stacked standalone statement statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time t table_name tables tablesample tablespace temp template ties token top_level_count transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex trigger_catalog trigger_name trigger_schema trim trim_array truncate trusted type types uescape unbounded uncommitted unencrypted unlink unlisten unlogged unnamed untyped upper uri use_column use_variable user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema vacuum valid validate validator value_of var_pop var_samp varbinary variable_conflict variadic verbose version versioning views volatile warning whitespace width_bucket window within wrapper xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate yes",
        types:
          G +
          "bigint int8 bigserial serial8 varbit bool box bytea cidr circle precision float8 inet int4 json jsonb line lseg macaddr macaddr8 money numeric pg_lsn point polygon float4 int2 smallserial serial2 serial serial4 text timetz timestamptz tsquery tsvector txid_snapshot uuid xml",
      });
      const Qe =
        "accessible algorithm analyze asensitive authors auto_increment autocommit avg avg_row_length binlog btree cache catalog_name chain change changed checkpoint checksum class_origin client_statistics coalesce code collations columns comment committed completion concurrent consistent contains contributors convert database databases day_hour day_microsecond day_minute day_second delay_key_write delayed delimiter des_key_file dev_pop dev_samp deviance directory disable discard distinctrow div dual dumpfile enable enclosed ends engine engines enum errors escaped even event events every explain extended fast field fields flush force found_rows fulltext grants handler hash high_priority hosts hour_microsecond hour_minute hour_second ignore ignore_server_ids import index index_statistics infile innodb insensitive insert_method install invoker iterate keys kill linear lines list load lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modify mutex mysql_errno no_write_to_binlog offline offset one online optimize optionally outfile pack_keys parser partition partitions password phase plugin plugins prev processlist profile profiles purge query quick range read_write rebuild recover regexp relaylog remove rename reorganize repair repeatable replace require resume rlike row_format rtree schedule schema_name schemas second_microsecond security sensitive separator serializable server share show slave slow snapshot soname spatial sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result ssl starting starts std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace terminated triggers truncate uncommitted uninstall unlock upgrade use use_frm user_resources user_statistics utc_date utc_time utc_timestamp variables views warnings xa xor year_month zerofill";
      const Ce =
        G +
        "bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int1 int2 int3 int4 int8 float4 float8 varbinary varcharacter precision datetime unsigned signed";
      const Se = "charset clear edit ego help nopager notee nowarning pager print prompt quit rehash source status system tee";
      const qe = be.define({
        operatorChars: "*+-%<>!=&|^",
        charSetCasts: true,
        doubleQuotedStrings: true,
        unquotedBitLiterals: true,
        hashComments: true,
        spaceAfterDashes: true,
        specialVar: "@?",
        identifierQuotes: "`",
        keywords: M + "group_concat " + Qe,
        types: Ce,
        builtin: Se,
      });
      const Pe = be.define({
        operatorChars: "*+-%<>!=&|^",
        charSetCasts: true,
        doubleQuotedStrings: true,
        unquotedBitLiterals: true,
        hashComments: true,
        spaceAfterDashes: true,
        specialVar: "@?",
        identifierQuotes: "`",
        keywords: M + "always generated groupby_concat hard persistent shutdown soft virtual " + Qe,
        types: Ce,
        builtin: Se,
      });
      const Te = be.define({
        keywords:
          M +
          "trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock pivot readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx unpivot updlock with",
        types: G + "bigint smallint smallmoney tinyint money real text nvarchar ntext varbinary image hierarchyid uniqueidentifier sql_variant xml",
        builtin:
          "binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id",
        operatorChars: "*+-%<>!=^&|/",
        specialVar: "@",
      });
      const Ue = be.define({
        keywords:
          M +
          "abort analyze attach autoincrement conflict database detach exclusive fail glob ignore index indexed instead isnull notnull offset plan pragma query raise regexp reindex rename replace temp vacuum virtual",
        types:
          G +
          "bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int2 int8 unsigned signed real",
        builtin:
          "auth backup bail changes clone databases dbinfo dump echo eqp explain fullschema headers help import imposter indexes iotrace lint load log mode nullvalue once print prompt quit restore save scanstats separator shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width",
        operatorChars: "*+-%<>!=&|/~",
        identifierQuotes: '`"',
        specialVar: "@:?$",
      });
      const ze = be.define({
        keywords:
          "add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime infinity NaN",
        types: G + "ascii bigint blob counter frozen inet list map static text timeuuid tuple uuid varint",
        slashComments: true,
      });
      const Xe = be.define({
        keywords:
          M +
          "abort accept access add all alter and any arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body by case cast char_base check close cluster clusters colauth column comment commit compress connected constant constraint crash create current currval cursor data_base database dba deallocate debugoff debugon declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry exception exception_init exchange exclusive exists external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base of off offline on online only option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw rebuild record ref references refresh rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work",
        builtin:
          "appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define echo editfile embedded feedback flagger flush heading headsep instance linesize lno loboffset logsource longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar repfooter repheader serveroutput shiftinout show showmode spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout timing trimout trimspool ttitle underline verify version wrap",
        types: G + "ascii bfile bfilename bigserial bit blob dec long number nvarchar nvarchar2 serial smallint string text uid varchar2 xml",
        operatorChars: "*/+-%<>!=~",
        doubleQuotedStrings: true,
        charSetCasts: true,
        plsqlQuotingMechanism: true,
      });
    },
  },
]);
