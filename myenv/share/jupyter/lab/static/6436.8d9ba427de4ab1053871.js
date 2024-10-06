"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [6436],
  {
    1497: (e, t, r) => {
      r.d(t, { a: () => l });
      var n = r(65915);
      function l(e, t) {
        var r = e.append("foreignObject").attr("width", "100000");
        var l = r.append("xhtml:div");
        l.attr("xmlns", "http://www.w3.org/1999/xhtml");
        var o = t.label;
        switch (typeof o) {
          case "function":
            l.insert(o);
            break;
          case "object":
            l.insert(function () {
              return o;
            });
            break;
          default:
            l.html(o);
        }
        n.bg(l, t.labelStyle);
        l.style("display", "inline-block");
        l.style("white-space", "nowrap");
        var a = l.node().getBoundingClientRect();
        r.attr("width", a.width).attr("height", a.height);
        return r;
      }
    },
    65915: (e, t, r) => {
      r.d(t, { $p: () => d, O1: () => a, WR: () => p, bF: () => o, bg: () => c });
      var n = r(30353);
      var l = r(25069);
      function o(e, t) {
        return !!e.children(t).length;
      }
      function a(e) {
        return i(e.v) + ":" + i(e.w) + ":" + i(e.name);
      }
      var s = /:/g;
      function i(e) {
        return e ? String(e).replace(s, "\\:") : "";
      }
      function c(e, t) {
        if (t) {
          e.attr("style", t);
        }
      }
      function d(e, t, r) {
        if (t) {
          e.attr("class", t).attr("class", r + " " + e.attr("class"));
        }
      }
      function p(e, t) {
        var r = t.graph();
        if (n.Z(r)) {
          var o = r.transition;
          if (l.Z(o)) {
            return o(e);
          }
        }
        return e;
      }
    },
    76436: (e, t, r) => {
      r.r(t);
      r.d(t, { diagram: () => u });
      var n = r(71929);
      var l = r(2386);
      var o = r(23787);
      var a = r(34596);
      var s = r(67058);
      var i = r(96001);
      var c = r(21307);
      var d = r(27484);
      var p = r.n(d);
      var b = r(17967);
      var f = r(27856);
      var w = r.n(f);
      const u = {
        parser: n.p,
        db: n.f,
        renderer: l.f,
        styles: l.a,
        init: (e) => {
          if (!e.flowchart) {
            e.flowchart = {};
          }
          e.flowchart.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
          (0, o.p)({ flowchart: { arrowMarkerAbsolute: e.arrowMarkerAbsolute } });
          l.f.setConf(e.flowchart);
          n.f.clear();
          n.f.setGen("gen-2");
        },
      };
    },
    2386: (e, t, r) => {
      r.d(t, { a: () => m, f: () => k });
      var n = r(67058);
      var l = r(34596);
      var o = r(23787);
      var a = r(29395);
      var s = r(1497);
      var i = r(52048);
      var c = r(37758);
      const d = (e, t) => i.Z.lang.round(c.Z.parse(e)[t]);
      const p = d;
      var b = r(76538);
      const f = {};
      const w = function (e) {
        const t = Object.keys(e);
        for (const r of t) {
          f[r] = e[r];
        }
      };
      const u = function (e, t, r, n, l, a) {
        const i = n.select(`[id="${r}"]`);
        const c = Object.keys(e);
        c.forEach(function (r) {
          const n = e[r];
          let c = "default";
          if (n.classes.length > 0) {
            c = n.classes.join(" ");
          }
          c = c + " flowchart-label";
          const d = (0, o.k)(n.styles);
          let p = n.text !== void 0 ? n.text : n.id;
          let b;
          o.l.info("vertex", n, n.labelType);
          if (n.labelType === "markdown") {
            o.l.info("vertex", n, n.labelType);
          } else {
            if ((0, o.m)((0, o.c)().flowchart.htmlLabels)) {
              const e = { label: p.replace(/fa[blrs]?:fa-[\w-]+/g, (e) => `<i class='${e.replace(":", " ")}'></i>`) };
              b = (0, s.a)(i, e).node();
              b.parentNode.removeChild(b);
            } else {
              const e = l.createElementNS("http://www.w3.org/2000/svg", "text");
              e.setAttribute("style", d.labelStyle.replace("color:", "fill:"));
              const t = p.split(o.e.lineBreakRegex);
              for (const r of t) {
                const t = l.createElementNS("http://www.w3.org/2000/svg", "tspan");
                t.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                t.setAttribute("dy", "1em");
                t.setAttribute("x", "1");
                t.textContent = r;
                e.appendChild(t);
              }
              b = e;
            }
          }
          let f = 0;
          let w = "";
          switch (n.type) {
            case "round":
              f = 5;
              w = "rect";
              break;
            case "square":
              w = "rect";
              break;
            case "diamond":
              w = "question";
              break;
            case "hexagon":
              w = "hexagon";
              break;
            case "odd":
              w = "rect_left_inv_arrow";
              break;
            case "lean_right":
              w = "lean_right";
              break;
            case "lean_left":
              w = "lean_left";
              break;
            case "trapezoid":
              w = "trapezoid";
              break;
            case "inv_trapezoid":
              w = "inv_trapezoid";
              break;
            case "odd_right":
              w = "rect_left_inv_arrow";
              break;
            case "circle":
              w = "circle";
              break;
            case "ellipse":
              w = "ellipse";
              break;
            case "stadium":
              w = "stadium";
              break;
            case "subroutine":
              w = "subroutine";
              break;
            case "cylinder":
              w = "cylinder";
              break;
            case "group":
              w = "rect";
              break;
            case "doublecircle":
              w = "doublecircle";
              break;
            default:
              w = "rect";
          }
          t.setNode(n.id, {
            labelStyle: d.labelStyle,
            shape: w,
            labelText: p,
            labelType: n.labelType,
            rx: f,
            ry: f,
            class: c,
            style: d.style,
            id: n.id,
            link: n.link,
            linkTarget: n.linkTarget,
            tooltip: a.db.getTooltip(n.id) || "",
            domId: a.db.lookUpDomId(n.id),
            haveCallback: n.haveCallback,
            width: n.type === "group" ? 500 : void 0,
            dir: n.dir,
            type: n.type,
            props: n.props,
            padding: (0, o.c)().flowchart.padding,
          });
          o.l.info("setNode", {
            labelStyle: d.labelStyle,
            labelType: n.labelType,
            shape: w,
            labelText: p,
            rx: f,
            ry: f,
            class: c,
            style: d.style,
            id: n.id,
            domId: a.db.lookUpDomId(n.id),
            width: n.type === "group" ? 500 : void 0,
            type: n.type,
            dir: n.dir,
            props: n.props,
            padding: (0, o.c)().flowchart.padding,
          });
        });
      };
      const h = function (e, t, r) {
        o.l.info("abc78 edges = ", e);
        let n = 0;
        let a = {};
        let s;
        let i;
        if (e.defaultStyle !== void 0) {
          const t = (0, o.k)(e.defaultStyle);
          s = t.style;
          i = t.labelStyle;
        }
        e.forEach(function (r) {
          n++;
          const c = "L-" + r.start + "-" + r.end;
          if (a[c] === void 0) {
            a[c] = 0;
            o.l.info("abc78 new entry", c, a[c]);
          } else {
            a[c]++;
            o.l.info("abc78 new entry", c, a[c]);
          }
          let d = c + "-" + a[c];
          o.l.info("abc78 new link id to be used is", c, d, a[c]);
          const p = "LS-" + r.start;
          const b = "LE-" + r.end;
          const w = { style: "", labelStyle: "" };
          w.minlen = r.length || 1;
          if (r.type === "arrow_open") {
            w.arrowhead = "none";
          } else {
            w.arrowhead = "normal";
          }
          w.arrowTypeStart = "arrow_open";
          w.arrowTypeEnd = "arrow_open";
          switch (r.type) {
            case "double_arrow_cross":
              w.arrowTypeStart = "arrow_cross";
            case "arrow_cross":
              w.arrowTypeEnd = "arrow_cross";
              break;
            case "double_arrow_point":
              w.arrowTypeStart = "arrow_point";
            case "arrow_point":
              w.arrowTypeEnd = "arrow_point";
              break;
            case "double_arrow_circle":
              w.arrowTypeStart = "arrow_circle";
            case "arrow_circle":
              w.arrowTypeEnd = "arrow_circle";
              break;
          }
          let u = "";
          let h = "";
          switch (r.stroke) {
            case "normal":
              u = "fill:none;";
              if (s !== void 0) {
                u = s;
              }
              if (i !== void 0) {
                h = i;
              }
              w.thickness = "normal";
              w.pattern = "solid";
              break;
            case "dotted":
              w.thickness = "normal";
              w.pattern = "dotted";
              w.style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
              break;
            case "thick":
              w.thickness = "thick";
              w.pattern = "solid";
              w.style = "stroke-width: 3.5px;fill:none;";
              break;
            case "invisible":
              w.thickness = "invisible";
              w.pattern = "solid";
              w.style = "stroke-width: 0;fill:none;";
              break;
          }
          if (r.style !== void 0) {
            const e = (0, o.k)(r.style);
            u = e.style;
            h = e.labelStyle;
          }
          w.style = w.style += u;
          w.labelStyle = w.labelStyle += h;
          if (r.interpolate !== void 0) {
            w.curve = (0, o.n)(r.interpolate, l.c_6);
          } else if (e.defaultInterpolate !== void 0) {
            w.curve = (0, o.n)(e.defaultInterpolate, l.c_6);
          } else {
            w.curve = (0, o.n)(f.curve, l.c_6);
          }
          if (r.text === void 0) {
            if (r.style !== void 0) {
              w.arrowheadStyle = "fill: #333";
            }
          } else {
            w.arrowheadStyle = "fill: #333";
            w.labelpos = "c";
          }
          w.labelType = r.labelType;
          w.label = r.text.replace(o.e.lineBreakRegex, "\n");
          if (r.style === void 0) {
            w.style = w.style || "stroke: #333; stroke-width: 1.5px;fill:none;";
          }
          w.labelStyle = w.labelStyle.replace("color:", "fill:");
          w.id = d;
          w.classes = "flowchart-link " + p + " " + b;
          t.setEdge(r.start, r.end, w, n);
        });
      };
      const g = function (e, t) {
        return t.db.getClasses();
      };
      const y = async function (e, t, r, s) {
        o.l.info("Drawing flowchart");
        let i = s.db.getDirection();
        if (i === void 0) {
          i = "TD";
        }
        const { securityLevel: c, flowchart: d } = (0, o.c)();
        const p = d.nodeSpacing || 50;
        const b = d.rankSpacing || 50;
        let f;
        if (c === "sandbox") {
          f = (0, l.Ys)("#i" + t);
        }
        const w = c === "sandbox" ? (0, l.Ys)(f.nodes()[0].contentDocument.body) : (0, l.Ys)("body");
        const g = c === "sandbox" ? f.nodes()[0].contentDocument : document;
        const y = new n.k({ multigraph: true, compound: true })
          .setGraph({ rankdir: i, nodesep: p, ranksep: b, marginx: 0, marginy: 0 })
          .setDefaultEdgeLabel(function () {
            return {};
          });
        let k;
        const v = s.db.getSubGraphs();
        o.l.info("Subgraphs - ", v);
        for (let n = v.length - 1; n >= 0; n--) {
          k = v[n];
          o.l.info("Subgraph - ", k);
          s.db.addVertex(k.id, { text: k.title, type: k.labelType }, "group", void 0, k.classes, k.dir);
        }
        const x = s.db.getVertices();
        const m = s.db.getEdges();
        o.l.info("Edges", m);
        let _ = 0;
        for (_ = v.length - 1; _ >= 0; _--) {
          k = v[_];
          (0, l.td_)("cluster").append("text");
          for (let e = 0; e < k.nodes.length; e++) {
            o.l.info("Setting up subgraphs", k.nodes[e], k.id);
            y.setParent(k.nodes[e], k.id);
          }
        }
        u(x, y, t, w, g, s);
        h(m, y);
        const S = w.select(`[id="${t}"]`);
        const T = w.select("#" + t + " g");
        await (0, a.r)(T, y, ["point", "circle", "cross"], "flowchart", t);
        o.u.insertTitle(S, "flowchartTitleText", d.titleTopMargin, s.db.getDiagramTitle());
        (0, o.o)(y, S, d.diagramPadding, d.useMaxWidth);
        s.db.indexNodes("subGraph" + _);
        if (!d.htmlLabels) {
          const e = g.querySelectorAll('[id="' + t + '"] .edgeLabel .label');
          for (const t of e) {
            const e = t.getBBox();
            const r = g.createElementNS("http://www.w3.org/2000/svg", "rect");
            r.setAttribute("rx", 0);
            r.setAttribute("ry", 0);
            r.setAttribute("width", e.width);
            r.setAttribute("height", e.height);
            t.insertBefore(r, t.firstChild);
          }
        }
        const C = Object.keys(x);
        C.forEach(function (e) {
          const r = x[e];
          if (r.link) {
            const n = (0, l.Ys)("#" + t + ' [id="' + e + '"]');
            if (n) {
              const e = g.createElementNS("http://www.w3.org/2000/svg", "a");
              e.setAttributeNS("http://www.w3.org/2000/svg", "class", r.classes.join(" "));
              e.setAttributeNS("http://www.w3.org/2000/svg", "href", r.link);
              e.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener");
              if (c === "sandbox") {
                e.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top");
              } else if (r.linkTarget) {
                e.setAttributeNS("http://www.w3.org/2000/svg", "target", r.linkTarget);
              }
              const t = n.insert(function () {
                return e;
              }, ":first-child");
              const l = n.select(".label-container");
              if (l) {
                t.append(function () {
                  return l.node();
                });
              }
              const o = n.select(".label");
              if (o) {
                t.append(function () {
                  return o.node();
                });
              }
            }
          }
        });
      };
      const k = { setConf: w, addVertices: u, addEdges: h, getClasses: g, draw: y };
      const v = (e, t) => {
        const r = p;
        const n = r(e, "r");
        const l = r(e, "g");
        const o = r(e, "b");
        return b.Z(n, l, o, t);
      };
      const x = (e) =>
        `.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor || e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor || e.textColor};\n    color: ${e.nodeTextColor || e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ${v(e.edgeLabelBackground, 0.5)};\n    // background-color: \n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`;
      const m = x;
    },
  },
]);
