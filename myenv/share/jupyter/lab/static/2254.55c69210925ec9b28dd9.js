"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2254],
  {
    52254: (O, e, t) => {
      t.r(e);
      t.d(e, { json: () => c, jsonLanguage: () => i, jsonParseLinter: () => P });
      var r = t(11705);
      var a = t(6016);
      const n = (0, a.styleTags)({
        String: a.tags.string,
        Number: a.tags.number,
        "True False": a.tags.bool,
        PropertyName: a.tags.propertyName,
        Null: a.tags["null"],
        ",": a.tags.separator,
        "[ ]": a.tags.squareBracket,
        "{ }": a.tags.brace,
      });
      const s = r.WQ.deserialize({
        version: 14,
        states:
          "$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",
        stateData: "#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",
        goto: "!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",
        nodeNames: "⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",
        maxTerm: 25,
        nodeProps: [
          ["openedBy", 7, "{", 12, "["],
          ["closedBy", 8, "}", 13, "]"],
        ],
        propSources: [n],
        skippedNodes: [0],
        repeatNodeCount: 2,
        tokenData:
          "(p~RaXY!WYZ!W]^!Wpq!Wrs!]|}$i}!O$n!Q!R$w!R![&V![!]&h!}#O&m#P#Q&r#Y#Z&w#b#c'f#h#i'}#o#p(f#q#r(k~!]Oc~~!`Upq!]qr!]rs!rs#O!]#O#P!w#P~!]~!wOe~~!zXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#g~#jR!Q![#s!c!i#s#T#Z#s~#vR!Q![$P!c!i$P#T#Z$P~$SR!Q![$]!c!i$]#T#Z$]~$`R!Q![!]!c!i!]#T#Z!]~$nOh~~$qQ!Q!R$w!R![&V~$|RT~!O!P%V!g!h%k#X#Y%k~%YP!Q![%]~%bRT~!Q![%]!g!h%k#X#Y%k~%nR{|%w}!O%w!Q![%}~%zP!Q![%}~&SPT~!Q![%}~&[ST~!O!P%V!Q![&V!g!h%k#X#Y%k~&mOg~~&rO]~~&wO[~~&zP#T#U&}~'QP#`#a'T~'WP#g#h'Z~'^P#X#Y'a~'fOR~~'iP#i#j'l~'oP#`#a'r~'uP#`#a'x~'}OS~~(QP#f#g(T~(WP#i#j(Z~(^P#X#Y(a~(fOQ~~(kOW~~(pOV~",
        tokenizers: [0],
        topRules: { JsonText: [0, 1] },
        tokenPrec: 0,
      });
      var o = t(24104);
      const P = () => (O) => {
        try {
          JSON.parse(O.state.doc.toString());
        } catch (e) {
          if (!(e instanceof SyntaxError)) throw e;
          const t = Q(e, O.state.doc);
          return [{ from: t, message: e.message, severity: "error", to: t }];
        }
        return [];
      };
      function Q(O, e) {
        let t;
        if ((t = O.message.match(/at position (\d+)/))) return Math.min(+t[1], e.length);
        if ((t = O.message.match(/at line (\d+) column (\d+)/))) return Math.min(e.line(+t[1]).from + +t[2] - 1, e.length);
        return 0;
      }
      const i = o.LRLanguage.define({
        name: "json",
        parser: s.configure({
          props: [
            o.indentNodeProp.add({ Object: (0, o.continuedIndent)({ except: /^\s*\}/ }), Array: (0, o.continuedIndent)({ except: /^\s*\]/ }) }),
            o.foldNodeProp.add({ "Object Array": o.foldInside }),
          ],
        }),
        languageData: { closeBrackets: { brackets: ["[", "{", '"'] }, indentOnInput: /^\s*[\}\]]$/ },
      });
      function c() {
        return new o.LanguageSupport(i);
      }
    },
  },
]);
