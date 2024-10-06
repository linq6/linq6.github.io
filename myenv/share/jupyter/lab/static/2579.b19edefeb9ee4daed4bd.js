"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2579],
  {
    52579: (t, e, a) => {
      a.r(e);
      a.d(e, { diagram: () => M });
      var r = a(96778);
      var n = a(34596);
      var i = a(96001);
      var d = a(67058);
      var o = a(23787);
      var s = a(27484);
      var l = a.n(s);
      var p = a(17967);
      var c = a(27856);
      var g = a.n(c);
      let h = 0;
      const f = function (t, e, a, r, i) {
        const d = function (t) {
          switch (t) {
            case i.db.relationType.AGGREGATION:
              return "aggregation";
            case i.db.relationType.EXTENSION:
              return "extension";
            case i.db.relationType.COMPOSITION:
              return "composition";
            case i.db.relationType.DEPENDENCY:
              return "dependency";
            case i.db.relationType.LOLLIPOP:
              return "lollipop";
          }
        };
        e.points = e.points.filter((t) => !Number.isNaN(t.y));
        const s = e.points;
        const l = (0, n.jvg)()
          .x(function (t) {
            return t.x;
          })
          .y(function (t) {
            return t.y;
          })
          .curve(n.$0Z);
        const p = t
          .append("path")
          .attr("d", l(s))
          .attr("id", "edge" + h)
          .attr("class", "relation");
        let c = "";
        if (r.arrowMarkerAbsolute) {
          c = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
          c = c.replace(/\(/g, "\\(");
          c = c.replace(/\)/g, "\\)");
        }
        if (a.relation.lineType == 1) {
          p.attr("class", "relation dashed-line");
        }
        if (a.relation.lineType == 10) {
          p.attr("class", "relation dotted-line");
        }
        if (a.relation.type1 !== "none") {
          p.attr("marker-start", "url(" + c + "#" + d(a.relation.type1) + "Start)");
        }
        if (a.relation.type2 !== "none") {
          p.attr("marker-end", "url(" + c + "#" + d(a.relation.type2) + "End)");
        }
        let g, f;
        const x = e.points.length;
        let u = o.u.calcLabelPosition(e.points);
        g = u.x;
        f = u.y;
        let y, b;
        let m, w;
        if (x % 2 !== 0 && x > 1) {
          let t = o.u.calcCardinalityPosition(a.relation.type1 !== "none", e.points, e.points[0]);
          let r = o.u.calcCardinalityPosition(a.relation.type2 !== "none", e.points, e.points[x - 1]);
          o.l.debug("cardinality_1_point " + JSON.stringify(t));
          o.l.debug("cardinality_2_point " + JSON.stringify(r));
          y = t.x;
          b = t.y;
          m = r.x;
          w = r.y;
        }
        if (a.title !== void 0) {
          const e = t.append("g").attr("class", "classLabel");
          const n = e.append("text").attr("class", "label").attr("x", g).attr("y", f).attr("fill", "red").attr("text-anchor", "middle").text(a.title);
          window.label = n;
          const i = n.node().getBBox();
          e.insert("rect", ":first-child")
            .attr("class", "box")
            .attr("x", i.x - r.padding / 2)
            .attr("y", i.y - r.padding / 2)
            .attr("width", i.width + r.padding)
            .attr("height", i.height + r.padding);
        }
        o.l.info("Rendering relation " + JSON.stringify(a));
        if (a.relationTitle1 !== void 0 && a.relationTitle1 !== "none") {
          const e = t.append("g").attr("class", "cardinality");
          e.append("text").attr("class", "type1").attr("x", y).attr("y", b).attr("fill", "black").attr("font-size", "6").text(a.relationTitle1);
        }
        if (a.relationTitle2 !== void 0 && a.relationTitle2 !== "none") {
          const e = t.append("g").attr("class", "cardinality");
          e.append("text").attr("class", "type2").attr("x", m).attr("y", w).attr("fill", "black").attr("font-size", "6").text(a.relationTitle2);
        }
        h++;
      };
      const x = function (t, e, a, r) {
        o.l.debug("Rendering class ", e, a);
        const n = e.id;
        const i = { id: n, label: e.id, width: 0, height: 0 };
        const d = t.append("g").attr("id", r.db.lookUpDomId(n)).attr("class", "classGroup");
        let s;
        if (e.link) {
          s = d
            .append("svg:a")
            .attr("xlink:href", e.link)
            .attr("target", e.linkTarget)
            .append("text")
            .attr("y", a.textHeight + a.padding)
            .attr("x", 0);
        } else {
          s = d
            .append("text")
            .attr("y", a.textHeight + a.padding)
            .attr("x", 0);
        }
        let l = true;
        e.annotations.forEach(function (t) {
          const e = s.append("tspan").text("«" + t + "»");
          if (!l) {
            e.attr("dy", a.textHeight);
          }
          l = false;
        });
        let p = u(e);
        const c = s.append("tspan").text(p).attr("class", "title");
        if (!l) {
          c.attr("dy", a.textHeight);
        }
        const g = s.node().getBBox().height;
        let h;
        let f;
        let x;
        if (e.members.length > 0) {
          h = d
            .append("line")
            .attr("x1", 0)
            .attr("y1", a.padding + g + a.dividerMargin / 2)
            .attr("y2", a.padding + g + a.dividerMargin / 2);
          const t = d
            .append("text")
            .attr("x", a.padding)
            .attr("y", g + a.dividerMargin + a.textHeight)
            .attr("fill", "white")
            .attr("class", "classText");
          l = true;
          e.members.forEach(function (e) {
            b(t, e, l, a);
            l = false;
          });
          f = t.node().getBBox();
        }
        if (e.methods.length > 0) {
          x = d
            .append("line")
            .attr("x1", 0)
            .attr("y1", a.padding + g + a.dividerMargin + f.height)
            .attr("y2", a.padding + g + a.dividerMargin + f.height);
          const t = d
            .append("text")
            .attr("x", a.padding)
            .attr("y", g + 2 * a.dividerMargin + f.height + a.textHeight)
            .attr("fill", "white")
            .attr("class", "classText");
          l = true;
          e.methods.forEach(function (e) {
            b(t, e, l, a);
            l = false;
          });
        }
        const y = d.node().getBBox();
        var m = " ";
        if (e.cssClasses.length > 0) {
          m = m + e.cssClasses.join(" ");
        }
        const w = d
          .insert("rect", ":first-child")
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", y.width + 2 * a.padding)
          .attr("height", y.height + a.padding + 0.5 * a.dividerMargin)
          .attr("class", m);
        const k = w.node().getBBox().width;
        s.node().childNodes.forEach(function (t) {
          t.setAttribute("x", (k - t.getBBox().width) / 2);
        });
        if (e.tooltip) {
          s.insert("title").text(e.tooltip);
        }
        if (h) {
          h.attr("x2", k);
        }
        if (x) {
          x.attr("x2", k);
        }
        i.width = k;
        i.height = y.height + a.padding + 0.5 * a.dividerMargin;
        return i;
      };
      const u = function (t) {
        let e = t.id;
        if (t.type) {
          e += "<" + (0, o.v)(t.type) + ">";
        }
        return e;
      };
      const y = function (t, e, a, r) {
        o.l.debug("Rendering note ", e, a);
        const n = e.id;
        const i = { id: n, text: e.text, width: 0, height: 0 };
        const d = t.append("g").attr("id", n).attr("class", "classGroup");
        let s = d
          .append("text")
          .attr("y", a.textHeight + a.padding)
          .attr("x", 0);
        const l = JSON.parse(`"${e.text}"`).split("\n");
        l.forEach(function (t) {
          o.l.debug(`Adding line: ${t}`);
          s.append("tspan").text(t).attr("class", "title").attr("dy", a.textHeight);
        });
        const p = d.node().getBBox();
        const c = d
          .insert("rect", ":first-child")
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", p.width + 2 * a.padding)
          .attr("height", p.height + l.length * a.textHeight + a.padding + 0.5 * a.dividerMargin);
        const g = c.node().getBBox().width;
        s.node().childNodes.forEach(function (t) {
          t.setAttribute("x", (g - t.getBBox().width) / 2);
        });
        i.width = g;
        i.height = p.height + l.length * a.textHeight + a.padding + 0.5 * a.dividerMargin;
        return i;
      };
      const b = function (t, e, a, r) {
        const { displayText: n, cssStyle: i } = e.getDisplayDetails();
        const d = t.append("tspan").attr("x", r.padding).text(n);
        if (i !== "") {
          d.attr("style", e.cssStyle);
        }
        if (!a) {
          d.attr("dy", r.textHeight);
        }
      };
      const m = { getClassTitleString: u, drawClass: x, drawEdge: f, drawNote: y };
      let w = {};
      const k = 20;
      const v = function (t) {
        const e = Object.entries(w).find((e) => e[1].label === t);
        if (e) {
          return e[0];
        }
      };
      const E = function (t) {
        t.append("defs")
          .append("marker")
          .attr("id", "extensionStart")
          .attr("class", "extension")
          .attr("refX", 0)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,7 L18,13 V 1 Z");
        t.append("defs")
          .append("marker")
          .attr("id", "extensionEnd")
          .attr("refX", 19)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 V 13 L18,7 Z");
        t.append("defs")
          .append("marker")
          .attr("id", "compositionStart")
          .attr("class", "extension")
          .attr("refX", 0)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        t.append("defs")
          .append("marker")
          .attr("id", "compositionEnd")
          .attr("refX", 19)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        t.append("defs")
          .append("marker")
          .attr("id", "aggregationStart")
          .attr("class", "extension")
          .attr("refX", 0)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        t.append("defs")
          .append("marker")
          .attr("id", "aggregationEnd")
          .attr("refX", 19)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        t.append("defs")
          .append("marker")
          .attr("id", "dependencyStart")
          .attr("class", "extension")
          .attr("refX", 0)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
        t.append("defs")
          .append("marker")
          .attr("id", "dependencyEnd")
          .attr("refX", 19)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
      };
      const L = function (t, e, a, r) {
        const s = (0, o.c)().class;
        w = {};
        o.l.info("Rendering diagram " + t);
        const l = (0, o.c)().securityLevel;
        let p;
        if (l === "sandbox") {
          p = (0, n.Ys)("#i" + e);
        }
        const c = l === "sandbox" ? (0, n.Ys)(p.nodes()[0].contentDocument.body) : (0, n.Ys)("body");
        const g = c.select(`[id='${e}']`);
        E(g);
        const h = new d.k({ multigraph: true });
        h.setGraph({ isMultiGraph: true });
        h.setDefaultEdgeLabel(function () {
          return {};
        });
        const f = r.db.getClasses();
        const x = Object.keys(f);
        for (const n of x) {
          const t = f[n];
          const e = m.drawClass(g, t, s, r);
          w[e.id] = e;
          h.setNode(e.id, e);
          o.l.info("Org height: " + e.height);
        }
        const u = r.db.getRelations();
        u.forEach(function (t) {
          o.l.info("tjoho" + v(t.id1) + v(t.id2) + JSON.stringify(t));
          h.setEdge(v(t.id1), v(t.id2), { relation: t }, t.title || "DEFAULT");
        });
        const y = r.db.getNotes();
        y.forEach(function (t) {
          o.l.debug(`Adding note: ${JSON.stringify(t)}`);
          const e = m.drawNote(g, t, s, r);
          w[e.id] = e;
          h.setNode(e.id, e);
          if (t.class && t.class in f) {
            h.setEdge(
              t.id,
              v(t.class),
              { relation: { id1: t.id, id2: t.class, relation: { type1: "none", type2: "none", lineType: 10 } } },
              "DEFAULT"
            );
          }
        });
        (0, i.bK)(h);
        h.nodes().forEach(function (t) {
          if (t !== void 0 && h.node(t) !== void 0) {
            o.l.debug("Node " + t + ": " + JSON.stringify(h.node(t)));
            c.select("#" + (r.db.lookUpDomId(t) || t)).attr(
              "transform",
              "translate(" + (h.node(t).x - h.node(t).width / 2) + "," + (h.node(t).y - h.node(t).height / 2) + " )"
            );
          }
        });
        h.edges().forEach(function (t) {
          if (t !== void 0 && h.edge(t) !== void 0) {
            o.l.debug("Edge " + t.v + " -> " + t.w + ": " + JSON.stringify(h.edge(t)));
            m.drawEdge(g, h.edge(t), h.edge(t).relation, s, r);
          }
        });
        const b = g.node().getBBox();
        const L = b.width + k * 2;
        const N = b.height + k * 2;
        (0, o.i)(g, N, L, s.useMaxWidth);
        const M = `${b.x - k} ${b.y - k} ${L} ${N}`;
        o.l.debug(`viewBox ${M}`);
        g.attr("viewBox", M);
      };
      const N = { draw: L };
      const M = {
        parser: r.p,
        db: r.d,
        renderer: N,
        styles: r.s,
        init: (t) => {
          if (!t.class) {
            t.class = {};
          }
          t.class.arrowMarkerAbsolute = t.arrowMarkerAbsolute;
          r.d.clear();
        },
      };
    },
  },
]);
