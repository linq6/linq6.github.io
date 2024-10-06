"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2551],
  {
    62551: (t, e, s) => {
      s.r(e);
      s.d(e, { diagram: () => ot });
      var o = s(91760);
      var n = s(67058);
      var i = s(34596);
      var r = s(23787);
      var c = s(29395);
      var a = s(27484);
      var l = s.n(a);
      var d = s(17967);
      var p = s(27856);
      var b = s.n(p);
      var u = s(96001);
      var g = s(21307);
      const f = "rect";
      const h = "rectWithTitle";
      const y = "start";
      const $ = "end";
      const w = "divider";
      const x = "roundedWithTitle";
      const m = "note";
      const v = "noteGroup";
      const T = "statediagram";
      const k = "state";
      const S = `${T}-${k}`;
      const D = "transition";
      const A = "note";
      const B = "note-edge";
      const _ = `${D} ${B}`;
      const C = `${T}-${A}`;
      const E = "cluster";
      const R = `${T}-${E}`;
      const V = "cluster-alt";
      const N = `${T}-${V}`;
      const j = "parent";
      const L = "note";
      const M = "state";
      const z = "----";
      const I = `${z}${L}`;
      const P = `${z}${j}`;
      const W = "fill:none";
      const Y = "fill: #333";
      const G = "c";
      const O = "text";
      const q = "normal";
      let F = {};
      let H = 0;
      const J = function (t) {
        const e = Object.keys(t);
        for (const s of e) {
          t[s];
        }
      };
      const K = function (t, e) {
        e.db.extract(e.db.getRootDocV2());
        return e.db.getClasses();
      };
      function Q(t) {
        if (t === void 0 || t === null) {
          return "";
        } else {
          if (t.classes) {
            return t.classes.join(" ");
          } else {
            return "";
          }
        }
      }
      function U(t = "", e = 0, s = "", o = z) {
        const n = s !== null && s.length > 0 ? `${o}${s}` : "";
        return `${M}-${t}${n}-${e}`;
      }
      const X = (t, e, s, n, i, c) => {
        const a = s.id;
        const l = Q(n[a]);
        if (a !== "root") {
          let e = f;
          if (s.start === true) {
            e = y;
          }
          if (s.start === false) {
            e = $;
          }
          if (s.type !== o.D) {
            e = s.type;
          }
          if (!F[a]) {
            F[a] = { id: a, shape: e, description: r.e.sanitizeText(a, (0, r.c)()), classes: `${l} ${S}` };
          }
          const n = F[a];
          if (s.description) {
            if (Array.isArray(n.description)) {
              n.shape = h;
              n.description.push(s.description);
            } else {
              if (n.description.length > 0) {
                n.shape = h;
                if (n.description === a) {
                  n.description = [s.description];
                } else {
                  n.description = [n.description, s.description];
                }
              } else {
                n.shape = f;
                n.description = s.description;
              }
            }
            n.description = r.e.sanitizeTextOrArray(n.description, (0, r.c)());
          }
          if (n.description.length === 1 && n.shape === h) {
            n.shape = f;
          }
          if (!n.type && s.doc) {
            r.l.info("Setting cluster for ", a, tt(s));
            n.type = "group";
            n.dir = tt(s);
            n.shape = s.type === o.a ? w : x;
            n.classes = n.classes + " " + R + " " + (c ? N : "");
          }
          const i = {
            labelStyle: "",
            shape: n.shape,
            labelText: n.description,
            classes: n.classes,
            style: "",
            id: a,
            dir: n.dir,
            domId: U(a, H),
            type: n.type,
            padding: 15,
          };
          i.centerLabel = true;
          if (s.note) {
            const e = {
              labelStyle: "",
              shape: m,
              labelText: s.note.text,
              classes: C,
              style: "",
              id: a + I + "-" + H,
              domId: U(a, H, L),
              type: n.type,
              padding: 15,
            };
            const o = {
              labelStyle: "",
              shape: v,
              labelText: s.note.text,
              classes: n.classes,
              style: "",
              id: a + P,
              domId: U(a, H, j),
              type: "group",
              padding: 0,
            };
            H++;
            const r = a + P;
            t.setNode(r, o);
            t.setNode(e.id, e);
            t.setNode(a, i);
            t.setParent(a, r);
            t.setParent(e.id, r);
            let c = a;
            let l = e.id;
            if (s.note.position === "left of") {
              c = e.id;
              l = a;
            }
            t.setEdge(c, l, {
              arrowhead: "none",
              arrowType: "",
              style: W,
              labelStyle: "",
              classes: _,
              arrowheadStyle: Y,
              labelpos: G,
              labelType: O,
              thickness: q,
            });
          } else {
            t.setNode(a, i);
          }
        }
        if (e && e.id !== "root") {
          r.l.trace("Setting node ", a, " to be child of its parent ", e.id);
          t.setParent(a, e.id);
        }
        if (s.doc) {
          r.l.trace("Adding nodes children ");
          Z(t, s, s.doc, n, i, !c);
        }
      };
      const Z = (t, e, s, n, i, c) => {
        r.l.trace("items", s);
        s.forEach((s) => {
          switch (s.stmt) {
            case o.b:
              X(t, e, s, n, i, c);
              break;
            case o.D:
              X(t, e, s, n, i, c);
              break;
            case o.S:
              {
                X(t, e, s.state1, n, i, c);
                X(t, e, s.state2, n, i, c);
                const o = {
                  id: "edge" + H,
                  arrowhead: "normal",
                  arrowTypeEnd: "arrow_barb",
                  style: W,
                  labelStyle: "",
                  label: r.e.sanitizeText(s.description, (0, r.c)()),
                  arrowheadStyle: Y,
                  labelpos: G,
                  labelType: O,
                  thickness: q,
                  classes: D,
                };
                t.setEdge(s.state1.id, s.state2.id, o, H);
                H++;
              }
              break;
          }
        });
      };
      const tt = (t, e = o.c) => {
        let s = e;
        if (t.doc) {
          for (let e = 0; e < t.doc.length; e++) {
            const o = t.doc[e];
            if (o.stmt === "dir") {
              s = o.value;
            }
          }
        }
        return s;
      };
      const et = async function (t, e, s, o) {
        r.l.info("Drawing state diagram (v2)", e);
        F = {};
        o.db.getDirection();
        const { securityLevel: a, state: l } = (0, r.c)();
        const d = l.nodeSpacing || 50;
        const p = l.rankSpacing || 50;
        r.l.info(o.db.getRootDocV2());
        o.db.extract(o.db.getRootDocV2());
        r.l.info(o.db.getRootDocV2());
        const b = o.db.getStates();
        const u = new n.k({ multigraph: true, compound: true })
          .setGraph({ rankdir: tt(o.db.getRootDocV2()), nodesep: d, ranksep: p, marginx: 8, marginy: 8 })
          .setDefaultEdgeLabel(function () {
            return {};
          });
        X(u, void 0, o.db.getRootDocV2(), b, o.db, true);
        let g;
        if (a === "sandbox") {
          g = (0, i.Ys)("#i" + e);
        }
        const h = a === "sandbox" ? (0, i.Ys)(g.nodes()[0].contentDocument.body) : (0, i.Ys)("body");
        const y = h.select(`[id="${e}"]`);
        const $ = h.select("#" + e + " g");
        await (0, c.r)($, u, ["barb"], T, e);
        const w = 8;
        r.u.insertTitle(y, "statediagramTitleText", l.titleTopMargin, o.db.getDiagramTitle());
        const x = y.node().getBBox();
        const m = x.width + w * 2;
        const v = x.height + w * 2;
        y.attr("class", T);
        const k = y.node().getBBox();
        (0, r.i)(y, v, m, l.useMaxWidth);
        const S = `${k.x - w} ${k.y - w} ${m} ${v}`;
        r.l.debug(`viewBox ${S}`);
        y.attr("viewBox", S);
        const D = document.querySelectorAll('[id="' + e + '"] .edgeLabel .label');
        for (const n of D) {
          const t = n.getBBox();
          const e = document.createElementNS("http://www.w3.org/2000/svg", f);
          e.setAttribute("rx", 0);
          e.setAttribute("ry", 0);
          e.setAttribute("width", t.width);
          e.setAttribute("height", t.height);
          n.insertBefore(e, n.firstChild);
        }
      };
      const st = { setConf: J, getClasses: K, draw: et };
      const ot = {
        parser: o.p,
        db: o.d,
        renderer: st,
        styles: o.s,
        init: (t) => {
          if (!t.state) {
            t.state = {};
          }
          t.state.arrowMarkerAbsolute = t.arrowMarkerAbsolute;
          o.d.clear();
        },
      };
    },
  },
]);
