"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [49],
  {
    60049: (e, t, a) => {
      a.r(t);
      a.d(t, {
        autoCloseTags: () => ze,
        html: () => Je,
        htmlCompletionSource: () => Re,
        htmlCompletionSourceWith: () => We,
        htmlLanguage: () => Ue,
        htmlPlain: () => je,
      });
      var n = a(11705);
      var l = a(6016);
      var r = a(73265);
      const s = 54,
        o = 1,
        u = 55,
        O = 2,
        i = 56,
        p = 3,
        c = 4,
        d = 5,
        f = 6,
        h = 7,
        m = 8,
        S = 9,
        g = 10,
        P = 11,
        x = 12,
        b = 13,
        V = 57,
        v = 14,
        _ = 58,
        q = 20,
        y = 22,
        T = 23,
        w = 24,
        $ = 26,
        Q = 27,
        X = 28,
        A = 31,
        C = 34,
        k = 36,
        Y = 37,
        M = 0,
        B = 1;
      const G = {
        area: true,
        base: true,
        br: true,
        col: true,
        command: true,
        embed: true,
        frame: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true,
        menuitem: true,
      };
      const Z = {
        dd: true,
        li: true,
        optgroup: true,
        option: true,
        p: true,
        rp: true,
        rt: true,
        tbody: true,
        td: true,
        tfoot: true,
        th: true,
        tr: true,
      };
      const D = {
        dd: { dd: true, dt: true },
        dt: { dd: true, dt: true },
        li: { li: true },
        option: { option: true, optgroup: true },
        optgroup: { optgroup: true },
        p: {
          address: true,
          article: true,
          aside: true,
          blockquote: true,
          dir: true,
          div: true,
          dl: true,
          fieldset: true,
          footer: true,
          form: true,
          h1: true,
          h2: true,
          h3: true,
          h4: true,
          h5: true,
          h6: true,
          header: true,
          hgroup: true,
          hr: true,
          menu: true,
          nav: true,
          ol: true,
          p: true,
          pre: true,
          section: true,
          table: true,
          ul: true,
        },
        rp: { rp: true, rt: true },
        rt: { rp: true, rt: true },
        tbody: { tbody: true, tfoot: true },
        td: { td: true, th: true },
        tfoot: { tbody: true },
        th: { td: true, th: true },
        thead: { tbody: true, tfoot: true },
        tr: { tr: true },
      };
      function E(e) {
        return e == 45 || e == 46 || e == 58 || (e >= 65 && e <= 90) || e == 95 || (e >= 97 && e <= 122) || e >= 161;
      }
      function R(e) {
        return e == 9 || e == 10 || e == 13 || e == 32;
      }
      let W = null,
        H = null,
        N = 0;
      function I(e, t) {
        let a = e.pos + t;
        if (N == a && H == e) return W;
        let n = e.peek(t);
        while (R(n)) n = e.peek(++t);
        let l = "";
        for (;;) {
          if (!E(n)) break;
          l += String.fromCharCode(n);
          n = e.peek(++t);
        }
        H = e;
        N = a;
        return (W = l ? l.toLowerCase() : n == L || n == z ? undefined : null);
      }
      const j = 60,
        U = 62,
        J = 47,
        L = 63,
        z = 33,
        F = 45;
      function K(e, t) {
        this.name = e;
        this.parent = t;
        this.hash = t ? t.hash : 0;
        for (let a = 0; a < e.length; a++) this.hash += (this.hash << 4) + e.charCodeAt(a) + (e.charCodeAt(a) << 8);
      }
      const ee = [f, g, h, m, S];
      const te = new n.IK({
        start: null,
        shift(e, t, a, n) {
          return ee.indexOf(t) > -1 ? new K(I(n, 1) || "", e) : e;
        },
        reduce(e, t) {
          return t == q && e ? e.parent : e;
        },
        reuse(e, t, a, n) {
          let l = t.type.id;
          return l == f || l == k ? new K(I(n, 1) || "", e) : e;
        },
        hash(e) {
          return e ? e.hash : 0;
        },
        strict: false,
      });
      const ae = new n.Jq(
        (e, t) => {
          if (e.next != j) {
            if (e.next < 0 && t.context) e.acceptToken(V);
            return;
          }
          e.advance();
          let a = e.next == J;
          if (a) e.advance();
          let n = I(e, 0);
          if (n === undefined) return;
          if (!n) return e.acceptToken(a ? v : f);
          let l = t.context ? t.context.name : null;
          if (a) {
            if (n == l) return e.acceptToken(P);
            if (l && Z[l]) return e.acceptToken(V, -2);
            if (t.dialectEnabled(M)) return e.acceptToken(x);
            for (let e = t.context; e; e = e.parent) if (e.name == n) return;
            e.acceptToken(b);
          } else {
            if (n == "script") return e.acceptToken(h);
            if (n == "style") return e.acceptToken(m);
            if (n == "textarea") return e.acceptToken(S);
            if (G.hasOwnProperty(n)) return e.acceptToken(g);
            if (l && D[l] && D[l][n]) e.acceptToken(V, -1);
            else e.acceptToken(f);
          }
        },
        { contextual: true }
      );
      const ne = new n.Jq((e) => {
        for (let t = 0, a = 0; ; a++) {
          if (e.next < 0) {
            if (a) e.acceptToken(_);
            break;
          }
          if (e.next == F) {
            t++;
          } else if (e.next == U && t >= 2) {
            if (a > 3) e.acceptToken(_, -2);
            break;
          } else {
            t = 0;
          }
          e.advance();
        }
      });
      function le(e) {
        for (; e; e = e.parent) if (e.name == "svg" || e.name == "math") return true;
        return false;
      }
      const re = new n.Jq((e, t) => {
        if (e.next == J && e.peek(1) == U) {
          let a = t.dialectEnabled(B) || le(t.context);
          e.acceptToken(a ? d : c, 2);
        } else if (e.next == U) {
          e.acceptToken(c, 1);
        }
      });
      function se(e, t, a) {
        let l = 2 + e.length;
        return new n.Jq((n) => {
          for (let r = 0, s = 0, o = 0; ; o++) {
            if (n.next < 0) {
              if (o) n.acceptToken(t);
              break;
            }
            if ((r == 0 && n.next == j) || (r == 1 && n.next == J) || (r >= 2 && r < l && n.next == e.charCodeAt(r - 2))) {
              r++;
              s++;
            } else if ((r == 2 || r == l) && R(n.next)) {
              s++;
            } else if (r == l && n.next == U) {
              if (o > s) n.acceptToken(t, -s);
              else n.acceptToken(a, -(s - 2));
              break;
            } else if ((n.next == 10 || n.next == 13) && o) {
              n.acceptToken(t, 1);
              break;
            } else {
              r = s = 0;
            }
            n.advance();
          }
        });
      }
      const oe = se("script", s, o);
      const ue = se("style", u, O);
      const Oe = se("textarea", i, p);
      const ie = (0, l.styleTags)({
        "Text RawText": l.tags.content,
        "StartTag StartCloseTag SelfClosingEndTag EndTag": l.tags.angleBracket,
        TagName: l.tags.tagName,
        "MismatchedCloseTag/TagName": [l.tags.tagName, l.tags.invalid],
        AttributeName: l.tags.attributeName,
        "AttributeValue UnquotedAttributeValue": l.tags.attributeValue,
        Is: l.tags.definitionOperator,
        "EntityReference CharacterReference": l.tags.character,
        Comment: l.tags.blockComment,
        ProcessingInst: l.tags.processingInstruction,
        DoctypeDecl: l.tags.documentMeta,
      });
      const pe = n.WQ.deserialize({
        version: 14,
        states:
          ",xOVO!rOOO!WQ#tO'#CqO!]Q#tO'#CzO!bQ#tO'#C}O!gQ#tO'#DQO!lQ#tO'#DSO!qOaO'#CpO!|ObO'#CpO#XOdO'#CpO$eO!rO'#CpOOO`'#Cp'#CpO$lO$fO'#DTO$tQ#tO'#DVO$yQ#tO'#DWOOO`'#Dk'#DkOOO`'#DY'#DYQVO!rOOO%OQ&rO,59]O%WQ&rO,59fO%`Q&rO,59iO%hQ&rO,59lO%sQ&rO,59nOOOa'#D^'#D^O%{OaO'#CxO&WOaO,59[OOOb'#D_'#D_O&`ObO'#C{O&kObO,59[OOOd'#D`'#D`O&sOdO'#DOO'OOdO,59[OOO`'#Da'#DaO'WO!rO,59[O'_Q#tO'#DROOO`,59[,59[OOOp'#Db'#DbO'dO$fO,59oOOO`,59o,59oO'lQ#|O,59qO'qQ#|O,59rOOO`-E7W-E7WO'vQ&rO'#CsOOQW'#DZ'#DZO(UQ&rO1G.wOOOa1G.w1G.wO(^Q&rO1G/QOOOb1G/Q1G/QO(fQ&rO1G/TOOOd1G/T1G/TO(nQ&rO1G/WOOO`1G/W1G/WOOO`1G/Y1G/YO(yQ&rO1G/YOOOa-E7[-E7[O)RQ#tO'#CyOOO`1G.v1G.vOOOb-E7]-E7]O)WQ#tO'#C|OOOd-E7^-E7^O)]Q#tO'#DPOOO`-E7_-E7_O)bQ#|O,59mOOOp-E7`-E7`OOO`1G/Z1G/ZOOO`1G/]1G/]OOO`1G/^1G/^O)gQ,UO,59_OOQW-E7X-E7XOOOa7+$c7+$cOOOb7+$l7+$lOOOd7+$o7+$oOOO`7+$r7+$rOOO`7+$t7+$tO)rQ#|O,59eO)wQ#|O,59hO)|Q#|O,59kOOO`1G/X1G/XO*RO7[O'#CvO*dOMhO'#CvOOQW1G.y1G.yOOO`1G/P1G/POOO`1G/S1G/SOOO`1G/V1G/VOOOO'#D['#D[O*uO7[O,59bOOQW,59b,59bOOOO'#D]'#D]O+WOMhO,59bOOOO-E7Y-E7YOOQW1G.|1G.|OOOO-E7Z-E7Z",
        stateData:
          "+s~O!^OS~OUSOVPOWQOXROYTO[]O][O^^O`^Oa^Ob^Oc^Ox^O{_O!dZO~OfaO~OfbO~OfcO~OfdO~OfeO~O!WfOPlP!ZlP~O!XiOQoP!ZoP~O!YlORrP!ZrP~OUSOVPOWQOXROYTOZqO[]O][O^^O`^Oa^Ob^Oc^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OfvO~OfwO~OS|OhyO~OS!OOhyO~OS!QOhyO~OS!SOT!TOhyO~OS!TOhyO~O!WfOPlX!ZlX~OP!WO!Z!XO~O!XiOQoX!ZoX~OQ!ZO!Z!XO~O!YlORrX!ZrX~OR!]O!Z!XO~O!Z!XO~P#dOf!_O~O![sO!e!aO~OS!bO~OS!cO~Oi!dOSgXhgXTgX~OS!fOhyO~OS!gOhyO~OS!hOhyO~OS!iOT!jOhyO~OS!jOhyO~Of!kO~Of!lO~Of!mO~OS!nO~Ok!qO!`!oO!b!pO~OS!rO~OS!sO~OS!tO~Oa!uOb!uOc!uO!`!wO!a!uO~Oa!xOb!xOc!xO!b!wO!c!xO~Oa!uOb!uOc!uO!`!{O!a!uO~Oa!xOb!xOc!xO!b!{O!c!xO~OT~bac!dx{!d~",
        goto: "%p!`PPPPPPPPPPPPPPPPPPPP!a!gP!mPP!yP!|#P#S#Y#]#`#f#i#l#r#x!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{}!P!R!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ}bQ!PcQ!RdQ!UeZ!e{}!P!R!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",
        nodeNames:
          "⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",
        maxTerm: 67,
        context: te,
        nodeProps: [
          ["closedBy", -10, 1, 2, 3, 7, 8, 9, 10, 11, 12, 13, "EndTag", 6, "EndTag SelfClosingEndTag", -4, 21, 30, 33, 36, "CloseTag"],
          ["openedBy", 4, "StartTag StartCloseTag", 5, "StartTag", -4, 29, 32, 35, 37, "OpenTag"],
          ["group", -9, 14, 17, 18, 19, 20, 39, 40, 41, 42, "Entity", 16, "Entity TextContent", -3, 28, 31, 34, "TextContent Entity"],
        ],
        propSources: [ie],
        skippedNodes: [0],
        repeatNodeCount: 9,
        tokenData:
          "#%g!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs4ysv-_vw5iwxJ^x}-_}!OKP!O!P-_!P!Q$q!Q![-_![!]!!O!]!^-_!^!_!&W!_!`#$o!`!a&X!a!c-_!c!}!!O!}#R-_#R#S!!O#S#T3V#T#o!!O#o#s-_#s$f$q$f%W-_%W%o!!O%o%p-_%p&a!!O&a&b-_&b1p!!O1p4U-_4U4d!!O4d4e-_4e$IS!!O$IS$I`-_$I`$Ib!!O$Ib$Kh-_$Kh%#t!!O%#t&/x-_&/x&Et!!O&Et&FV-_&FV;'S!!O;'S;:j!&Q;:j;=`4s<%l?&r-_?&r?Ah!!O?Ah?BY$q?BY?Mn!!O?MnO$q!Z$|c`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT`POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYkWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]``P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_1n!_!a&X!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/echSkWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0uXhSqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0pS1eP;=`<%l0p[1kP;=`<%l/^!U1wbhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!U3SP;=`<%l1n!V3bchS`P!a`!cpOq&Xqr3Vrs&}sv3Vvw0pwx(tx!P3V!P!Q&X!Q!^3V!^!_1n!_!a&X!a#s3V#s$f&X$f;'S3V;'S;=`4m<%l?Ah3V?Ah?BY&X?BY?Mn3V?MnO&X!V4pP;=`<%l3V!_4vP;=`<%l-_!Z5SV!`h`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_5rjhSkWc!ROX7dXZ8qZ[7d[^8q^p7dqr:crs8qst@Ttw:cwx8qx!P:c!P!Q7d!Q!]:c!]!^/^!^!_=p!_!a8q!a#S:c#S#T=p#T#s:c#s$f7d$f;'S:c;'S;=`?}<%l?Ah:c?Ah?BY7d?BY?Mn:c?MnO7d!Z7ibkWOX7dXZ8qZ[7d[^8q^p7dqr7drs8qst+Ptw7dwx8qx!]7d!]!^9f!^!a8q!a#S7d#S#T8q#T;'S7d;'S;=`:]<%lO7d!R8tVOp8qqs8qt!]8q!]!^9Z!^;'S8q;'S;=`9`<%lO8q!R9`Oa!R!R9cP;=`<%l8q!Z9mYkWa!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z:`P;=`<%l7d!_:jjhSkWOX7dXZ8qZ[7d[^8q^p7dqr:crs8qst/^tw:cwx8qx!P:c!P!Q7d!Q!]:c!]!^<[!^!_=p!_!a8q!a#S:c#S#T=p#T#s:c#s$f7d$f;'S:c;'S;=`?}<%l?Ah:c?Ah?BY7d?BY?Mn:c?MnO7d!_<echSkWa!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V=udhSOp8qqr=prs8qst0ptw=pwx8qx!P=p!P!Q8q!Q!]=p!]!^?T!^!_=p!_!a8q!a#s=p#s$f8q$f;'S=p;'S;=`?w<%l?Ah=p?Ah?BY8q?BY?Mn=p?MnO8q!V?[XhSa!Rqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0p!V?zP;=`<%l=p!_@QP;=`<%l:c!_@[ihSkWOXAyXZCTZ[Ay[^CT^pAyqrDrrsCTswDrwxCTx!PDr!P!QAy!Q!]Dr!]!^/^!^!_G|!_!aCT!a#SDr#S#TG|#T#sDr#s$fAy$f;'SDr;'S;=`JW<%l?AhDr?Ah?BYAy?BY?MnDr?MnOAy!ZBOakWOXAyXZCTZ[Ay[^CT^pAyqrAyrsCTswAywxCTx!]Ay!]!^Cu!^!aCT!a#SAy#S#TCT#T;'SAy;'S;=`Dl<%lOAy!RCWUOpCTq!]CT!]!^Cj!^;'SCT;'S;=`Co<%lOCT!RCoOb!R!RCrP;=`<%lCT!ZC|YkWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZDoP;=`<%lAy!_DyihSkWOXAyXZCTZ[Ay[^CT^pAyqrDrrsCTswDrwxCTx!PDr!P!QAy!Q!]Dr!]!^Fh!^!_G|!_!aCT!a#SDr#S#TG|#T#sDr#s$fAy$f;'SDr;'S;=`JW<%l?AhDr?Ah?BYAy?BY?MnDr?MnOAy!_FqchSkWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VHRchSOpCTqrG|rsCTswG|wxCTx!PG|!P!QCT!Q!]G|!]!^I^!^!_G|!_!aCT!a#sG|#s$fCT$f;'SG|;'S;=`JQ<%l?AhG|?Ah?BYCT?BY?MnG|?MnOCT!VIeXhSb!Rqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0p!VJTP;=`<%lG|!_JZP;=`<%lDr!ZJgW!bx`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aK^lhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMU!O!P-_!P!Q$q!Q!^-_!^!_1n!_!a&X!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aMckhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_1n!_!`&X!`!a! W!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!T! cX`P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!a!!_!ZhSfQ`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!O!!O!O!P!!O!P!Q$q!Q![!!O![!]!!O!]!^-_!^!_1n!_!a&X!a!c-_!c!}!!O!}#R-_#R#S!!O#S#T3V#T#o!!O#o#s-_#s$f$q$f$}-_$}%O!!O%O%W-_%W%o!!O%o%p-_%p&a!!O&a&b-_&b1p!!O1p4U!!O4U4d!!O4d4e-_4e$IS!!O$IS$I`-_$I`$Ib!!O$Ib$Je-_$Je$Jg!!O$Jg$Kh-_$Kh%#t!!O%#t&/x-_&/x&Et!!O&Et&FV-_&FV;'S!!O;'S;:j!&Q;:j;=`4s<%l?&r-_?&r?Ah!!O?Ah?BY$q?BY?Mn!!O?MnO$q!a!&TP;=`<%l!!O!V!&achS!a`!cpOq*Vqr!'lrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!b!Ey!b#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!'uhhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex}1n}!O!)a!O!P1n!P!Q*V!Q!_1n!_!a*V!a!f1n!f!g!,]!g#W1n#W#X!<y#X#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!)jdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex}1n}!O!*x!O!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!+TbhS!a`!cp!dPOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!,fdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!q1n!q!r!-t!r#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!-}dhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!e1n!e!f!/]!f#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!/fdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!v1n!v!w!0t!w#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!0}dhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!{1n!{!|!2]!|#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!2fdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!r1n!r!s!3t!s#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!3}dhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!g1n!g!h!5]!h#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!5fchS!a`!cpOq!6qqr!5]rs!7hsv!5]vw!;`wx!9[x!P!5]!P!Q!6q!Q!_!5]!_!`!6q!`!a!:j!a#s!5]#s$f!6q$f;'S!5];'S;=`!<s<%l?Ah!5]?Ah?BY!6q?BY?Mn!5]?MnO!6q!R!6xY!a`!cpOr!6qrs!7hsv!6qvw!8Swx!9[x!`!6q!`!a!:j!a;'S!6q;'S;=`!;Y<%lO!6qq!7mV!cpOv!7hvx!8Sx!`!7h!`!a!8q!a;'S!7h;'S;=`!9U<%lO!7hP!8VTO!`!8S!`!a!8f!a;'S!8S;'S;=`!8k<%lO!8SP!8kO{PP!8nP;=`<%l!8Sq!8xS!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!9XP;=`<%l!7ha!9aX!a`Or!9[rs!8Ssv!9[vw!8Sw!`!9[!`!a!9|!a;'S!9[;'S;=`!:d<%lO!9[a!:TT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!:gP;=`<%l!9[!R!:sV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;]P;=`<%l!6qT!;ebhSOq!8Sqr!;`rs!8Ssw!;`wx!8Sx!P!;`!P!Q!8S!Q!_!;`!_!`!8S!`!a!8f!a#s!;`#s$f!8S$f;'S!;`;'S;=`!<m<%l?Ah!;`?Ah?BY!8S?BY?Mn!;`?MnO!8ST!<pP;=`<%l!;`!V!<vP;=`<%l!5]!V!=SdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#c1n#c#d!>b#d#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!>kdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#V1n#V#W!?y#W#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!@SdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#h1n#h#i!Ab#i#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!AkdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#m1n#m#n!By#n#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!CSdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#d1n#d#e!Db#e#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!DkdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#X1n#X#Y!5]#Y#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!FSchS!a`!cpOq!G_qr!Eyrs!HUsv!Eyvw!Ncwx!Jvx!P!Ey!P!Q!G_!Q!_!Ey!_!a!G_!a!b##T!b#s!Ey#s$f!G_$f;'S!Ey;'S;=`#$i<%l?Ah!Ey?Ah?BY!G_?BY?Mn!Ey?MnO!G_!R!GfY!a`!cpOr!G_rs!HUsv!G_vw!Hpwx!Jvx!a!G_!a!b!Lv!b;'S!G_;'S;=`!N]<%lO!G_q!HZV!cpOv!HUvx!Hpx!a!HU!a!b!Iq!b;'S!HU;'S;=`!Jp<%lO!HUP!HsTO!a!Hp!a!b!IS!b;'S!Hp;'S;=`!Ik<%lO!HpP!IVTO!`!Hp!`!a!If!a;'S!Hp;'S;=`!Ik<%lO!HpP!IkOxPP!InP;=`<%l!Hpq!IvV!cpOv!HUvx!Hpx!`!HU!`!a!J]!a;'S!HU;'S;=`!Jp<%lO!HUq!JdS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!JsP;=`<%l!HUa!J{X!a`Or!Jvrs!Hpsv!Jvvw!Hpw!a!Jv!a!b!Kh!b;'S!Jv;'S;=`!Lp<%lO!Jva!KmX!a`Or!Jvrs!Hpsv!Jvvw!Hpw!`!Jv!`!a!LY!a;'S!Jv;'S;=`!Lp<%lO!Jva!LaT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!LsP;=`<%l!Jv!R!L}Y!a`!cpOr!G_rs!HUsv!G_vw!Hpwx!Jvx!`!G_!`!a!Mm!a;'S!G_;'S;=`!N]<%lO!G_!R!MvV!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!N`P;=`<%l!G_T!NhbhSOq!Hpqr!Ncrs!Hpsw!Ncwx!Hpx!P!Nc!P!Q!Hp!Q!_!Nc!_!a!Hp!a!b# p!b#s!Nc#s$f!Hp$f;'S!Nc;'S;=`#!}<%l?Ah!Nc?Ah?BY!Hp?BY?Mn!Nc?MnO!HpT# ubhSOq!Hpqr!Ncrs!Hpsw!Ncwx!Hpx!P!Nc!P!Q!Hp!Q!_!Nc!_!`!Hp!`!a!If!a#s!Nc#s$f!Hp$f;'S!Nc;'S;=`#!}<%l?Ah!Nc?Ah?BY!Hp?BY?Mn!Nc?MnO!HpT##QP;=`<%l!Nc!V##^chS!a`!cpOq!G_qr!Eyrs!HUsv!Eyvw!Ncwx!Jvx!P!Ey!P!Q!G_!Q!_!Ey!_!`!G_!`!a!Mm!a#s!Ey#s$f!G_$f;'S!Ey;'S;=`#$i<%l?Ah!Ey?Ah?BY!G_?BY?Mn!Ey?MnO!G_!V#$lP;=`<%l!Ey!V#$zXiS`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",
        tokenizers: [oe, ue, Oe, re, ae, ne, 0, 1, 2, 3, 4, 5],
        topRules: { Document: [0, 15] },
        dialects: { noMatch: 0, selfClosing: 485 },
        tokenPrec: 487,
      });
      function ce(e, t) {
        let a = Object.create(null);
        for (let n of e.getChildren(T)) {
          let e = n.getChild(w),
            l = n.getChild($) || n.getChild(Q);
          if (e) a[t.read(e.from, e.to)] = !l ? "" : l.type.id == $ ? t.read(l.from + 1, l.to - 1) : t.read(l.from, l.to);
        }
        return a;
      }
      function de(e, t) {
        let a = e.getChild(y);
        return a ? t.read(a.from, a.to) : " ";
      }
      function fe(e, t, a) {
        let n;
        for (let l of a) {
          if (!l.attrs || l.attrs(n || (n = ce(e.node.parent.firstChild, t)))) return { parser: l.parser };
        }
        return null;
      }
      function he(e = [], t = []) {
        let a = [],
          n = [],
          l = [],
          s = [];
        for (let r of e) {
          let e = r.tag == "script" ? a : r.tag == "style" ? n : r.tag == "textarea" ? l : s;
          e.push(r);
        }
        let o = t.length ? Object.create(null) : null;
        for (let r of t) (o[r.name] || (o[r.name] = [])).push(r);
        return (0, r.parseMixed)((e, t) => {
          let r = e.type.id;
          if (r == X) return fe(e, t, a);
          if (r == A) return fe(e, t, n);
          if (r == C) return fe(e, t, l);
          if (r == k && s.length) {
            let a = e.node,
              n = de(a, t),
              l;
            for (let r of s) {
              if (r.tag == n && (!r.attrs || r.attrs(l || (l = ce(a, t))))) {
                let t = a.parent.lastChild;
                return { parser: r.parser, overlay: [{ from: e.to, to: t.type.id == Y ? t.from : a.parent.to }] };
              }
            }
          }
          if (o && r == T) {
            let a = e.node,
              n;
            if ((n = a.firstChild)) {
              let e = o[t.read(n.from, n.to)];
              if (e)
                for (let n of e) {
                  if (n.tagName && n.tagName != de(a.parent, t)) continue;
                  let e = a.lastChild;
                  if (e.type.id == $) {
                    let t = e.from + 1;
                    let a = e.lastChild,
                      l = e.to - (a && a.isError ? 0 : 1);
                    if (l > t) return { parser: n.parser, overlay: [{ from: t, to: l }] };
                  } else if (e.type.id == Q) {
                    return { parser: n.parser, overlay: [{ from: e.from, to: e.to }] };
                  }
                }
            }
          }
          return null;
        });
      }
      var me = a(75201);
      var Se = a(62091);
      var ge = a(66143);
      var Pe = a(37496);
      var xe = a(24104);
      const be = ["_blank", "_self", "_top", "_parent"];
      const Ve = ["ascii", "utf-8", "utf-16", "latin1", "latin1"];
      const ve = ["get", "post", "put", "delete"];
      const _e = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"];
      const qe = ["true", "false"];
      const ye = {};
      const Te = {
        a: { attrs: { href: null, ping: null, type: null, media: null, target: be, hreflang: null } },
        abbr: ye,
        address: ye,
        area: {
          attrs: {
            alt: null,
            coords: null,
            href: null,
            target: null,
            ping: null,
            media: null,
            hreflang: null,
            type: null,
            shape: ["default", "rect", "circle", "poly"],
          },
        },
        article: ye,
        aside: ye,
        audio: {
          attrs: {
            src: null,
            mediagroup: null,
            crossorigin: ["anonymous", "use-credentials"],
            preload: ["none", "metadata", "auto"],
            autoplay: ["autoplay"],
            loop: ["loop"],
            controls: ["controls"],
          },
        },
        b: ye,
        base: { attrs: { href: null, target: be } },
        bdi: ye,
        bdo: ye,
        blockquote: { attrs: { cite: null } },
        body: ye,
        br: ye,
        button: {
          attrs: {
            form: null,
            formaction: null,
            name: null,
            value: null,
            autofocus: ["autofocus"],
            disabled: ["autofocus"],
            formenctype: _e,
            formmethod: ve,
            formnovalidate: ["novalidate"],
            formtarget: be,
            type: ["submit", "reset", "button"],
          },
        },
        canvas: { attrs: { width: null, height: null } },
        caption: ye,
        center: ye,
        cite: ye,
        code: ye,
        col: { attrs: { span: null } },
        colgroup: { attrs: { span: null } },
        command: {
          attrs: {
            type: ["command", "checkbox", "radio"],
            label: null,
            icon: null,
            radiogroup: null,
            command: null,
            title: null,
            disabled: ["disabled"],
            checked: ["checked"],
          },
        },
        data: { attrs: { value: null } },
        datagrid: { attrs: { disabled: ["disabled"], multiple: ["multiple"] } },
        datalist: { attrs: { data: null } },
        dd: ye,
        del: { attrs: { cite: null, datetime: null } },
        details: { attrs: { open: ["open"] } },
        dfn: ye,
        div: ye,
        dl: ye,
        dt: ye,
        em: ye,
        embed: { attrs: { src: null, type: null, width: null, height: null } },
        eventsource: { attrs: { src: null } },
        fieldset: { attrs: { disabled: ["disabled"], form: null, name: null } },
        figcaption: ye,
        figure: ye,
        footer: ye,
        form: {
          attrs: {
            action: null,
            name: null,
            "accept-charset": Ve,
            autocomplete: ["on", "off"],
            enctype: _e,
            method: ve,
            novalidate: ["novalidate"],
            target: be,
          },
        },
        h1: ye,
        h2: ye,
        h3: ye,
        h4: ye,
        h5: ye,
        h6: ye,
        head: { children: ["title", "base", "link", "style", "meta", "script", "noscript", "command"] },
        header: ye,
        hgroup: ye,
        hr: ye,
        html: { attrs: { manifest: null } },
        i: ye,
        iframe: {
          attrs: {
            src: null,
            srcdoc: null,
            name: null,
            width: null,
            height: null,
            sandbox: ["allow-top-navigation", "allow-same-origin", "allow-forms", "allow-scripts"],
            seamless: ["seamless"],
          },
        },
        img: { attrs: { alt: null, src: null, ismap: null, usemap: null, width: null, height: null, crossorigin: ["anonymous", "use-credentials"] } },
        input: {
          attrs: {
            alt: null,
            dirname: null,
            form: null,
            formaction: null,
            height: null,
            list: null,
            max: null,
            maxlength: null,
            min: null,
            name: null,
            pattern: null,
            placeholder: null,
            size: null,
            src: null,
            step: null,
            value: null,
            width: null,
            accept: ["audio/*", "video/*", "image/*"],
            autocomplete: ["on", "off"],
            autofocus: ["autofocus"],
            checked: ["checked"],
            disabled: ["disabled"],
            formenctype: _e,
            formmethod: ve,
            formnovalidate: ["novalidate"],
            formtarget: be,
            multiple: ["multiple"],
            readonly: ["readonly"],
            required: ["required"],
            type: [
              "hidden",
              "text",
              "search",
              "tel",
              "url",
              "email",
              "password",
              "datetime",
              "date",
              "month",
              "week",
              "time",
              "datetime-local",
              "number",
              "range",
              "color",
              "checkbox",
              "radio",
              "file",
              "submit",
              "image",
              "reset",
              "button",
            ],
          },
        },
        ins: { attrs: { cite: null, datetime: null } },
        kbd: ye,
        keygen: { attrs: { challenge: null, form: null, name: null, autofocus: ["autofocus"], disabled: ["disabled"], keytype: ["RSA"] } },
        label: { attrs: { for: null, form: null } },
        legend: ye,
        li: { attrs: { value: null } },
        link: { attrs: { href: null, type: null, hreflang: null, media: null, sizes: ["all", "16x16", "16x16 32x32", "16x16 32x32 64x64"] } },
        map: { attrs: { name: null } },
        mark: ye,
        menu: { attrs: { label: null, type: ["list", "context", "toolbar"] } },
        meta: {
          attrs: {
            content: null,
            charset: Ve,
            name: ["viewport", "application-name", "author", "description", "generator", "keywords"],
            "http-equiv": ["content-language", "content-type", "default-style", "refresh"],
          },
        },
        meter: { attrs: { value: null, min: null, low: null, high: null, max: null, optimum: null } },
        nav: ye,
        noscript: ye,
        object: {
          attrs: { data: null, type: null, name: null, usemap: null, form: null, width: null, height: null, typemustmatch: ["typemustmatch"] },
        },
        ol: { attrs: { reversed: ["reversed"], start: null, type: ["1", "a", "A", "i", "I"] }, children: ["li", "script", "template", "ul", "ol"] },
        optgroup: { attrs: { disabled: ["disabled"], label: null } },
        option: { attrs: { disabled: ["disabled"], label: null, selected: ["selected"], value: null } },
        output: { attrs: { for: null, form: null, name: null } },
        p: ye,
        param: { attrs: { name: null, value: null } },
        pre: ye,
        progress: { attrs: { value: null, max: null } },
        q: { attrs: { cite: null } },
        rp: ye,
        rt: ye,
        ruby: ye,
        samp: ye,
        script: { attrs: { type: ["text/javascript"], src: null, async: ["async"], defer: ["defer"], charset: Ve } },
        section: ye,
        select: { attrs: { form: null, name: null, size: null, autofocus: ["autofocus"], disabled: ["disabled"], multiple: ["multiple"] } },
        slot: { attrs: { name: null } },
        small: ye,
        source: { attrs: { src: null, type: null, media: null } },
        span: ye,
        strong: ye,
        style: { attrs: { type: ["text/css"], media: null, scoped: null } },
        sub: ye,
        summary: ye,
        sup: ye,
        table: ye,
        tbody: ye,
        td: { attrs: { colspan: null, rowspan: null, headers: null } },
        template: ye,
        textarea: {
          attrs: {
            dirname: null,
            form: null,
            maxlength: null,
            name: null,
            placeholder: null,
            rows: null,
            cols: null,
            autofocus: ["autofocus"],
            disabled: ["disabled"],
            readonly: ["readonly"],
            required: ["required"],
            wrap: ["soft", "hard"],
          },
        },
        tfoot: ye,
        th: { attrs: { colspan: null, rowspan: null, headers: null, scope: ["row", "col", "rowgroup", "colgroup"] } },
        thead: ye,
        time: { attrs: { datetime: null } },
        title: ye,
        tr: ye,
        track: {
          attrs: { src: null, label: null, default: null, kind: ["subtitles", "captions", "descriptions", "chapters", "metadata"], srclang: null },
        },
        ul: { children: ["li", "script", "template", "ul", "ol"] },
        var: ye,
        video: {
          attrs: {
            src: null,
            poster: null,
            width: null,
            height: null,
            crossorigin: ["anonymous", "use-credentials"],
            preload: ["auto", "metadata", "none"],
            autoplay: ["autoplay"],
            mediagroup: ["movie"],
            muted: ["muted"],
            controls: ["controls"],
          },
        },
        wbr: ye,
      };
      const we = {
        accesskey: null,
        class: null,
        contenteditable: qe,
        contextmenu: null,
        dir: ["ltr", "rtl", "auto"],
        draggable: ["true", "false", "auto"],
        dropzone: ["copy", "move", "link", "string:", "file:"],
        hidden: ["hidden"],
        id: null,
        inert: ["inert"],
        itemid: null,
        itemprop: null,
        itemref: null,
        itemscope: ["itemscope"],
        itemtype: null,
        lang: ["ar", "bn", "de", "en-GB", "en-US", "es", "fr", "hi", "id", "ja", "pa", "pt", "ru", "tr", "zh"],
        spellcheck: qe,
        autocorrect: qe,
        autocapitalize: qe,
        style: null,
        tabindex: null,
        title: null,
        translate: ["yes", "no"],
        rel: [
          "stylesheet",
          "alternate",
          "author",
          "bookmark",
          "help",
          "license",
          "next",
          "nofollow",
          "noreferrer",
          "prefetch",
          "prev",
          "search",
          "tag",
        ],
        role: "alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(
          " "
        ),
        "aria-activedescendant": null,
        "aria-atomic": qe,
        "aria-autocomplete": ["inline", "list", "both", "none"],
        "aria-busy": qe,
        "aria-checked": ["true", "false", "mixed", "undefined"],
        "aria-controls": null,
        "aria-describedby": null,
        "aria-disabled": qe,
        "aria-dropeffect": null,
        "aria-expanded": ["true", "false", "undefined"],
        "aria-flowto": null,
        "aria-grabbed": ["true", "false", "undefined"],
        "aria-haspopup": qe,
        "aria-hidden": qe,
        "aria-invalid": ["true", "false", "grammar", "spelling"],
        "aria-label": null,
        "aria-labelledby": null,
        "aria-level": null,
        "aria-live": ["off", "polite", "assertive"],
        "aria-multiline": qe,
        "aria-multiselectable": qe,
        "aria-owns": null,
        "aria-posinset": null,
        "aria-pressed": ["true", "false", "mixed", "undefined"],
        "aria-readonly": qe,
        "aria-relevant": null,
        "aria-required": qe,
        "aria-selected": ["true", "false", "undefined"],
        "aria-setsize": null,
        "aria-sort": ["ascending", "descending", "none", "other"],
        "aria-valuemax": null,
        "aria-valuemin": null,
        "aria-valuenow": null,
        "aria-valuetext": null,
      };
      const $e = (
        "beforeunload copy cut dragstart dragover dragleave dragenter dragend " +
        "drag paste focus blur change click load mousedown mouseenter mouseleave " +
        "mouseup keydown keyup resize scroll unload"
      )
        .split(" ")
        .map((e) => "on" + e);
      for (let Fe of $e) we[Fe] = null;
      class Qe {
        constructor(e, t) {
          this.tags = Object.assign(Object.assign({}, Te), e);
          this.globalAttrs = Object.assign(Object.assign({}, we), t);
          this.allTags = Object.keys(this.tags);
          this.globalAttrNames = Object.keys(this.globalAttrs);
        }
      }
      Qe.default = new Qe();
      function Xe(e, t, a = e.length) {
        if (!t) return "";
        let n = t.firstChild;
        let l = n && n.getChild("TagName");
        return l ? e.sliceString(l.from, Math.min(l.to, a)) : "";
      }
      function Ae(e, t = false) {
        for (; e; e = e.parent)
          if (e.name == "Element") {
            if (t) t = false;
            else return e;
          }
        return null;
      }
      function Ce(e, t, a) {
        let n = a.tags[Xe(e, Ae(t))];
        return (n === null || n === void 0 ? void 0 : n.children) || a.allTags;
      }
      function ke(e, t) {
        let a = [];
        for (let n = Ae(t); n && !n.type.isTop; n = Ae(n.parent)) {
          let l = Xe(e, n);
          if (l && n.lastChild.name == "CloseTag") break;
          if (l && a.indexOf(l) < 0 && (t.name == "EndTag" || t.from >= n.firstChild.to)) a.push(l);
        }
        return a;
      }
      const Ye = /^[:\-\.\w\u00b7-\uffff]*$/;
      function Me(e, t, a, n, l) {
        let r = /\s*>/.test(e.sliceDoc(l, l + 5)) ? "" : ">";
        let s = Ae(a, true);
        return {
          from: n,
          to: l,
          options: Ce(e.doc, s, t)
            .map((e) => ({ label: e, type: "type" }))
            .concat(ke(e.doc, a).map((e, t) => ({ label: "/" + e, apply: "/" + e + r, type: "type", boost: 99 - t }))),
          validFor: /^\/?[:\-\.\w\u00b7-\uffff]*$/,
        };
      }
      function Be(e, t, a, n) {
        let l = /\s*>/.test(e.sliceDoc(n, n + 5)) ? "" : ">";
        return { from: a, to: n, options: ke(e.doc, t).map((e, t) => ({ label: e, apply: e + l, type: "type", boost: 99 - t })), validFor: Ye };
      }
      function Ge(e, t, a, n) {
        let l = [],
          r = 0;
        for (let s of Ce(e.doc, a, t)) l.push({ label: "<" + s, type: "type" });
        for (let s of ke(e.doc, a)) l.push({ label: "</" + s + ">", type: "type", boost: 99 - r++ });
        return { from: n, to: n, options: l, validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/ };
      }
      function Ze(e, t, a, n, l) {
        let r = Ae(a),
          s = r ? t.tags[Xe(e.doc, r)] : null;
        let o = s && s.attrs ? Object.keys(s.attrs) : [];
        let u = s && s.globalAttrs === false ? o : o.length ? o.concat(t.globalAttrNames) : t.globalAttrNames;
        return { from: n, to: l, options: u.map((e) => ({ label: e, type: "property" })), validFor: Ye };
      }
      function De(e, t, a, n, l) {
        var r;
        let s = (r = a.parent) === null || r === void 0 ? void 0 : r.getChild("AttributeName");
        let o = [],
          u = undefined;
        if (s) {
          let r = e.sliceDoc(s.from, s.to);
          let O = t.globalAttrs[r];
          if (!O) {
            let n = Ae(a),
              l = n ? t.tags[Xe(e.doc, n)] : null;
            O = (l === null || l === void 0 ? void 0 : l.attrs) && l.attrs[r];
          }
          if (O) {
            let t = e.sliceDoc(n, l).toLowerCase(),
              a = '"',
              r = '"';
            if (/^['"]/.test(t)) {
              u = t[0] == '"' ? /^[^"]*$/ : /^[^']*$/;
              a = "";
              r = e.sliceDoc(l, l + 1) == t[0] ? "" : t[0];
              t = t.slice(1);
              n++;
            } else {
              u = /^[^\s<>='"]*$/;
            }
            for (let e of O) o.push({ label: e, apply: a + e + r, type: "constant" });
          }
        }
        return { from: n, to: l, options: o, validFor: u };
      }
      function Ee(e, t) {
        let { state: a, pos: n } = t,
          l = (0, xe.syntaxTree)(a).resolveInner(n, -1),
          r = l.resolve(n);
        for (let s = n, o; r == l && (o = l.childBefore(s)); ) {
          let e = o.lastChild;
          if (!e || !e.type.isError || e.from < e.to) break;
          r = l = o;
          s = e.from;
        }
        if (l.name == "TagName") {
          return l.parent && /CloseTag$/.test(l.parent.name) ? Be(a, l, l.from, n) : Me(a, e, l, l.from, n);
        } else if (l.name == "StartTag") {
          return Me(a, e, l, n, n);
        } else if (l.name == "StartCloseTag" || l.name == "IncompleteCloseTag") {
          return Be(a, l, n, n);
        } else if (l.name == "OpenTag" || l.name == "SelfClosingTag" || l.name == "AttributeName") {
          return Ze(a, e, l, l.name == "AttributeName" ? l.from : n, n);
        } else if (l.name == "Is" || l.name == "AttributeValue" || l.name == "UnquotedAttributeValue") {
          return De(a, e, l, l.name == "Is" ? n : l.from, n);
        } else if (t.explicit && (r.name == "Element" || r.name == "Text" || r.name == "Document")) {
          return Ge(a, e, l, n);
        } else {
          return null;
        }
      }
      function Re(e) {
        return Ee(Qe.default, e);
      }
      function We(e) {
        let { extraTags: t, extraGlobalAttributes: a } = e;
        let n = a || t ? new Qe(t, a) : Qe.default;
        return (e) => Ee(n, e);
      }
      const He = Se.javascriptLanguage.parser.configure({ top: "SingleExpression" });
      const Ne = [
        { tag: "script", attrs: (e) => e.type == "text/typescript" || e.lang == "ts", parser: Se.typescriptLanguage.parser },
        { tag: "script", attrs: (e) => e.type == "text/babel" || e.type == "text/jsx", parser: Se.jsxLanguage.parser },
        { tag: "script", attrs: (e) => e.type == "text/typescript-jsx", parser: Se.tsxLanguage.parser },
        {
          tag: "script",
          attrs(e) {
            return /^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(e.type);
          },
          parser: He,
        },
        {
          tag: "script",
          attrs(e) {
            return !e.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e.type);
          },
          parser: Se.javascriptLanguage.parser,
        },
        {
          tag: "style",
          attrs(e) {
            return (!e.lang || e.lang == "css") && (!e.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type));
          },
          parser: me.cssLanguage.parser,
        },
      ];
      const Ie = [{ name: "style", parser: me.cssLanguage.parser.configure({ top: "Styles" }) }].concat(
        $e.map((e) => ({ name: e, parser: Se.javascriptLanguage.parser }))
      );
      const je = xe.LRLanguage.define({
        name: "html",
        parser: pe.configure({
          props: [
            xe.indentNodeProp.add({
              Element(e) {
                let t = /^(\s*)(<\/)?/.exec(e.textAfter);
                if (e.node.to <= e.pos + t[0].length) return e.continue();
                return e.lineIndent(e.node.from) + (t[2] ? 0 : e.unit);
              },
              "OpenTag CloseTag SelfClosingTag"(e) {
                return e.column(e.node.from) + e.unit;
              },
              Document(e) {
                if (e.pos + /\s*/.exec(e.textAfter)[0].length < e.node.to) return e.continue();
                let t = null,
                  a;
                for (let n = e.node; ; ) {
                  let e = n.lastChild;
                  if (!e || e.name != "Element" || e.to != n.to) break;
                  t = n = e;
                }
                if (t && !((a = t.lastChild) && (a.name == "CloseTag" || a.name == "SelfClosingTag"))) return e.lineIndent(t.from) + e.unit;
                return null;
              },
            }),
            xe.foldNodeProp.add({
              Element(e) {
                let t = e.firstChild,
                  a = e.lastChild;
                if (!t || t.name != "OpenTag") return null;
                return { from: t.to, to: a.name == "CloseTag" ? a.from : e.to };
              },
            }),
            xe.bracketMatchingHandle.add({ "OpenTag CloseTag": (e) => e.getChild("TagName") }),
          ],
        }),
        languageData: { commentTokens: { block: { open: "\x3c!--", close: "--\x3e" } }, indentOnInput: /^\s*<\/\w+\W$/, wordChars: "-._" },
      });
      const Ue = je.configure({ wrap: he(Ne, Ie) });
      function Je(e = {}) {
        let t = "",
          a;
        if (e.matchClosingTags === false) t = "noMatch";
        if (e.selfClosingTags === true) t = (t ? t + " " : "") + "selfClosing";
        if ((e.nestedLanguages && e.nestedLanguages.length) || (e.nestedAttributes && e.nestedAttributes.length))
          a = he((e.nestedLanguages || []).concat(Ne), (e.nestedAttributes || []).concat(Ie));
        let n = a ? je.configure({ wrap: a, dialect: t }) : t ? Ue.configure({ dialect: t }) : Ue;
        return new xe.LanguageSupport(n, [
          Ue.data.of({ autocomplete: We(e) }),
          e.autoCloseTags !== false ? ze : [],
          (0, Se.javascript)().support,
          (0, me.css)().support,
        ]);
      }
      const Le = new Set("area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" "));
      const ze = ge.EditorView.inputHandler.of((e, t, a, n, l) => {
        if (e.composing || e.state.readOnly || t != a || (n != ">" && n != "/") || !Ue.isActiveAt(e.state, t, -1)) return false;
        let r = l(),
          { state: s } = r;
        let o = s.changeByRange((e) => {
          var t, a, l;
          let r = s.doc.sliceString(e.from - 1, e.to) == n;
          let { head: o } = e,
            u = (0, xe.syntaxTree)(s).resolveInner(o - 1, -1),
            O;
          if (u.name == "TagName" || u.name == "StartTag") u = u.parent;
          if (r && n == ">" && u.name == "OpenTag") {
            if (
              ((a = (t = u.parent) === null || t === void 0 ? void 0 : t.lastChild) === null || a === void 0 ? void 0 : a.name) != "CloseTag" &&
              (O = Xe(s.doc, u.parent, o)) &&
              !Le.has(O)
            ) {
              let t = o + (s.doc.sliceString(o, o + 1) === ">" ? 1 : 0);
              let a = `</${O}>`;
              return { range: e, changes: { from: o, to: t, insert: a } };
            }
          } else if (r && n == "/" && u.name == "IncompleteCloseTag") {
            let e = u.parent;
            if (
              u.from == o - 2 &&
              ((l = e.lastChild) === null || l === void 0 ? void 0 : l.name) != "CloseTag" &&
              (O = Xe(s.doc, e, o)) &&
              !Le.has(O)
            ) {
              let e = o + (s.doc.sliceString(o, o + 1) === ">" ? 1 : 0);
              let t = `${O}>`;
              return { range: Pe.EditorSelection.cursor(o + t.length, -1), changes: { from: o, to: e, insert: t } };
            }
          }
          return { range: e };
        });
        if (o.changes.empty) return false;
        e.dispatch([r, s.update(o, { userEvent: "input.complete", scrollIntoView: true })]);
        return true;
      });
    },
  },
]);
