"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [7734],
  {
    27734: (t, e, r) => {
      r.d(e, {
        a: () => w,
        b: () => dt,
        c: () => k,
        d: () => kt,
        e: () => lt,
        f: () => vt,
        g: () => Bt,
        h: () => St,
        i: () => P,
        j: () => yt,
        k: () => ut,
        l: () => v,
        p: () => ht,
        s: () => ct,
        u: () => L,
      });
      var a = r(23787);
      var n = r(34596);
      var s = r(73711);
      const i = (t, e, r, a) => {
        e.forEach((e) => {
          u[e](t, r, a);
        });
      };
      const o = (t, e, r) => {
        a.l.trace("Making markers for ", r);
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-extensionStart")
          .attr("class", "marker extension " + e)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,7 L18,13 V 1 Z");
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-extensionEnd")
          .attr("class", "marker extension " + e)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 V 13 L18,7 Z");
      };
      const l = (t, e, r) => {
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-compositionStart")
          .attr("class", "marker composition " + e)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-compositionEnd")
          .attr("class", "marker composition " + e)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
      };
      const c = (t, e, r) => {
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-aggregationStart")
          .attr("class", "marker aggregation " + e)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-aggregationEnd")
          .attr("class", "marker aggregation " + e)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
      };
      const d = (t, e, r) => {
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-dependencyStart")
          .attr("class", "marker dependency " + e)
          .attr("refX", 6)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-dependencyEnd")
          .attr("class", "marker dependency " + e)
          .attr("refX", 13)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
      };
      const h = (t, e, r) => {
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-lollipopStart")
          .attr("class", "marker lollipop " + e)
          .attr("refX", 13)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("circle")
          .attr("stroke", "black")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6);
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-lollipopEnd")
          .attr("class", "marker lollipop " + e)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("circle")
          .attr("stroke", "black")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6);
      };
      const p = (t, e, r) => {
        t.append("marker")
          .attr("id", r + "_" + e + "-pointEnd")
          .attr("class", "marker " + e)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 6)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 12)
          .attr("markerHeight", 12)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 0 0 L 10 5 L 0 10 z")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
        t.append("marker")
          .attr("id", r + "_" + e + "-pointStart")
          .attr("class", "marker " + e)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 4.5)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 12)
          .attr("markerHeight", 12)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 0 5 L 10 10 L 10 0 z")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
      };
      const f = (t, e, r) => {
        t.append("marker")
          .attr("id", r + "_" + e + "-circleEnd")
          .attr("class", "marker " + e)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 11)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("circle")
          .attr("cx", "5")
          .attr("cy", "5")
          .attr("r", "5")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
        t.append("marker")
          .attr("id", r + "_" + e + "-circleStart")
          .attr("class", "marker " + e)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", -1)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("circle")
          .attr("cx", "5")
          .attr("cy", "5")
          .attr("r", "5")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
      };
      const g = (t, e, r) => {
        t.append("marker")
          .attr("id", r + "_" + e + "-crossEnd")
          .attr("class", "marker cross " + e)
          .attr("viewBox", "0 0 11 11")
          .attr("refX", 12)
          .attr("refY", 5.2)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 l 9,9 M 10,1 l -9,9")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 2)
          .style("stroke-dasharray", "1,0");
        t.append("marker")
          .attr("id", r + "_" + e + "-crossStart")
          .attr("class", "marker cross " + e)
          .attr("viewBox", "0 0 11 11")
          .attr("refX", -1)
          .attr("refY", 5.2)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 l 9,9 M 10,1 l -9,9")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 2)
          .style("stroke-dasharray", "1,0");
      };
      const y = (t, e, r) => {
        t.append("defs")
          .append("marker")
          .attr("id", r + "_" + e + "-barbEnd")
          .attr("refX", 19)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 14)
          .attr("markerUnits", "strokeWidth")
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
      };
      const u = { extension: o, composition: l, aggregation: c, dependency: d, lollipop: h, point: p, circle: f, cross: g, barb: y };
      const w = i;
      function x(t, e) {
        if (e) {
          t.attr("style", e);
        }
      }
      function b(t) {
        const e = (0, n.Ys)(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"));
        const r = e.append("xhtml:div");
        const a = t.label;
        const s = t.isNode ? "nodeLabel" : "edgeLabel";
        r.html('<span class="' + s + '" ' + (t.labelStyle ? 'style="' + t.labelStyle + '"' : "") + ">" + a + "</span>");
        x(r, t.labelStyle);
        r.style("display", "inline-block");
        r.style("white-space", "nowrap");
        r.attr("xmlns", "http://www.w3.org/1999/xhtml");
        return e.node();
      }
      const m = (t, e, r, n) => {
        let s = t || "";
        if (typeof s === "object") {
          s = s[0];
        }
        if ((0, a.m)((0, a.c)().flowchart.htmlLabels)) {
          s = s.replace(/\\n|\n/g, "<br />");
          a.l.info("vertexText" + s);
          const t = {
            isNode: n,
            label: (0, a.J)(s).replace(/fa[blrs]?:fa-[\w-]+/g, (t) => `<i class='${t.replace(":", " ")}'></i>`),
            labelStyle: e.replace("fill:", "color:"),
          };
          let r = b(t);
          return r;
        } else {
          const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
          t.setAttribute("style", e.replace("color:", "fill:"));
          let a = [];
          if (typeof s === "string") {
            a = s.split(/\\n|\n|<br\s*\/?>/gi);
          } else if (Array.isArray(s)) {
            a = s;
          } else {
            a = [];
          }
          for (const e of a) {
            const a = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
            a.setAttribute("dy", "1em");
            a.setAttribute("x", "0");
            if (r) {
              a.setAttribute("class", "title-row");
            } else {
              a.setAttribute("class", "row");
            }
            a.textContent = e.trim();
            t.appendChild(a);
          }
          return t;
        }
      };
      const k = m;
      const v = async (t, e, r, i) => {
        let o;
        const l = e.useHtmlLabels || (0, a.m)((0, a.c)().flowchart.htmlLabels);
        if (!r) {
          o = "node default";
        } else {
          o = r;
        }
        const c = t
          .insert("g")
          .attr("class", o)
          .attr("id", e.domId || e.id);
        const d = c.insert("g").attr("class", "label").attr("style", e.labelStyle);
        let h;
        if (e.labelText === void 0) {
          h = "";
        } else {
          h = typeof e.labelText === "string" ? e.labelText : e.labelText[0];
        }
        const p = d.node();
        let f;
        if (e.labelType === "markdown") {
          f = (0, s.a)(d, (0, a.d)((0, a.J)(h), (0, a.c)()), {
            useHtmlLabels: l,
            width: e.width || (0, a.c)().flowchart.wrappingWidth,
            classes: "markdown-node-label",
          });
        } else {
          f = p.appendChild(k((0, a.d)((0, a.J)(h), (0, a.c)()), e.labelStyle, false, i));
        }
        let g = f.getBBox();
        const y = e.padding / 2;
        if ((0, a.m)((0, a.c)().flowchart.htmlLabels)) {
          const t = f.children[0];
          const e = (0, n.Ys)(f);
          const r = t.getElementsByTagName("img");
          if (r) {
            const t = h.replace(/<img[^>]*>/g, "").trim() === "";
            await Promise.all(
              [...r].map(
                (e) =>
                  new Promise((r) => {
                    function n() {
                      e.style.display = "flex";
                      e.style.flexDirection = "column";
                      if (t) {
                        const t = (0, a.c)().fontSize ? (0, a.c)().fontSize : window.getComputedStyle(document.body).fontSize;
                        const r = 5;
                        const n = parseInt(t, 10) * r + "px";
                        e.style.minWidth = n;
                        e.style.maxWidth = n;
                      } else {
                        e.style.width = "100%";
                      }
                      r(e);
                    }
                    setTimeout(() => {
                      if (e.complete) {
                        n();
                      }
                    });
                    e.addEventListener("error", n);
                    e.addEventListener("load", n);
                  })
              )
            );
          }
          g = t.getBoundingClientRect();
          e.attr("width", g.width);
          e.attr("height", g.height);
        }
        if (l) {
          d.attr("transform", "translate(" + -g.width / 2 + ", " + -g.height / 2 + ")");
        } else {
          d.attr("transform", "translate(0, " + -g.height / 2 + ")");
        }
        if (e.centerLabel) {
          d.attr("transform", "translate(" + -g.width / 2 + ", " + -g.height / 2 + ")");
        }
        d.insert("rect", ":first-child");
        return { shapeSvg: c, bbox: g, halfPadding: y, label: d };
      };
      const L = (t, e) => {
        const r = e.node().getBBox();
        t.width = r.width;
        t.height = r.height;
      };
      function S(t, e, r, a) {
        return t
          .insert("polygon", ":first-child")
          .attr(
            "points",
            a
              .map(function (t) {
                return t.x + "," + t.y;
              })
              .join(" ")
          )
          .attr("class", "label-container")
          .attr("transform", "translate(" + -e / 2 + "," + r / 2 + ")");
      }
      function M(t, e) {
        return t.intersect(e);
      }
      function T(t, e, r, a) {
        var n = t.x;
        var s = t.y;
        var i = n - a.x;
        var o = s - a.y;
        var l = Math.sqrt(e * e * o * o + r * r * i * i);
        var c = Math.abs((e * r * i) / l);
        if (a.x < n) {
          c = -c;
        }
        var d = Math.abs((e * r * o) / l);
        if (a.y < s) {
          d = -d;
        }
        return { x: n + c, y: s + d };
      }
      function _(t, e, r) {
        return T(t, e, e, r);
      }
      function B(t, e, r, a) {
        var n, s, i, o, l, c;
        var d, h, p, f;
        var g, y, u;
        var w, x;
        n = e.y - t.y;
        i = t.x - e.x;
        l = e.x * t.y - t.x * e.y;
        p = n * r.x + i * r.y + l;
        f = n * a.x + i * a.y + l;
        if (p !== 0 && f !== 0 && C(p, f)) {
          return;
        }
        s = a.y - r.y;
        o = r.x - a.x;
        c = a.x * r.y - r.x * a.y;
        d = s * t.x + o * t.y + c;
        h = s * e.x + o * e.y + c;
        if (d !== 0 && h !== 0 && C(d, h)) {
          return;
        }
        g = n * o - s * i;
        if (g === 0) {
          return;
        }
        y = Math.abs(g / 2);
        u = i * c - o * l;
        w = u < 0 ? (u - y) / g : (u + y) / g;
        u = s * l - n * c;
        x = u < 0 ? (u - y) / g : (u + y) / g;
        return { x: w, y: x };
      }
      function C(t, e) {
        return t * e > 0;
      }
      function E(t, e, r) {
        var a = t.x;
        var n = t.y;
        var s = [];
        var i = Number.POSITIVE_INFINITY;
        var o = Number.POSITIVE_INFINITY;
        if (typeof e.forEach === "function") {
          e.forEach(function (t) {
            i = Math.min(i, t.x);
            o = Math.min(o, t.y);
          });
        } else {
          i = Math.min(i, e.x);
          o = Math.min(o, e.y);
        }
        var l = a - t.width / 2 - i;
        var c = n - t.height / 2 - o;
        for (var d = 0; d < e.length; d++) {
          var h = e[d];
          var p = e[d < e.length - 1 ? d + 1 : 0];
          var f = B(t, r, { x: l + h.x, y: c + h.y }, { x: l + p.x, y: c + p.y });
          if (f) {
            s.push(f);
          }
        }
        if (!s.length) {
          return t;
        }
        if (s.length > 1) {
          s.sort(function (t, e) {
            var a = t.x - r.x;
            var n = t.y - r.y;
            var s = Math.sqrt(a * a + n * n);
            var i = e.x - r.x;
            var o = e.y - r.y;
            var l = Math.sqrt(i * i + o * o);
            return s < l ? -1 : s === l ? 0 : 1;
          });
        }
        return s[0];
      }
      const Y = (t, e) => {
        var r = t.x;
        var a = t.y;
        var n = e.x - r;
        var s = e.y - a;
        var i = t.width / 2;
        var o = t.height / 2;
        var l, c;
        if (Math.abs(s) * i > Math.abs(n) * o) {
          if (s < 0) {
            o = -o;
          }
          l = s === 0 ? 0 : (o * n) / s;
          c = o;
        } else {
          if (n < 0) {
            i = -i;
          }
          l = i;
          c = n === 0 ? 0 : (i * s) / n;
        }
        return { x: r + l, y: a + c };
      };
      const P = Y;
      const $ = { node: M, circle: _, ellipse: T, polygon: E, rect: P };
      const R = async (t, e) => {
        const r = e.useHtmlLabels || (0, a.c)().flowchart.htmlLabels;
        if (!r) {
          e.centerLabel = true;
        }
        const { shapeSvg: n, bbox: s, halfPadding: i } = await v(t, e, "node " + e.classes, true);
        a.l.info("Classes = ", e.classes);
        const o = n.insert("rect", ":first-child");
        o.attr("rx", e.rx)
          .attr("ry", e.ry)
          .attr("x", -s.width / 2 - i)
          .attr("y", -s.height / 2 - i)
          .attr("width", s.width + e.padding)
          .attr("height", s.height + e.padding);
        L(e, o);
        e.intersect = function (t) {
          return $.rect(e, t);
        };
        return n;
      };
      const W = R;
      const X = (t) => {
        if (t) {
          return " " + t;
        }
        return "";
      };
      const j = (t, e) => `${e ? e : "node default"}${X(t.classes)} ${X(t.class)}`;
      const H = async (t, e) => {
        const { shapeSvg: r, bbox: n } = await v(t, e, j(e, void 0), true);
        const s = n.width + e.padding;
        const i = n.height + e.padding;
        const o = s + i;
        const l = [
          { x: o / 2, y: 0 },
          { x: o, y: -o / 2 },
          { x: o / 2, y: -o },
          { x: 0, y: -o / 2 },
        ];
        a.l.info("Question main (Circle)");
        const c = S(r, o, o, l);
        c.attr("style", e.style);
        L(e, c);
        e.intersect = function (t) {
          a.l.warn("Intersect called");
          return $.polygon(e, l, t);
        };
        return r;
      };
      const I = (t, e) => {
        const r = t
          .insert("g")
          .attr("class", "node default")
          .attr("id", e.domId || e.id);
        const a = 28;
        const n = [
          { x: 0, y: a / 2 },
          { x: a / 2, y: 0 },
          { x: 0, y: -a / 2 },
          { x: -a / 2, y: 0 },
        ];
        const s = r.insert("polygon", ":first-child").attr(
          "points",
          n
            .map(function (t) {
              return t.x + "," + t.y;
            })
            .join(" ")
        );
        s.attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28);
        e.width = 28;
        e.height = 28;
        e.intersect = function (t) {
          return $.circle(e, 14, t);
        };
        return r;
      };
      const O = async (t, e) => {
        const { shapeSvg: r, bbox: a } = await v(t, e, j(e, void 0), true);
        const n = 4;
        const s = a.height + e.padding;
        const i = s / n;
        const o = a.width + 2 * i + e.padding;
        const l = [
          { x: i, y: 0 },
          { x: o - i, y: 0 },
          { x: o, y: -s / 2 },
          { x: o - i, y: -s },
          { x: i, y: -s },
          { x: 0, y: -s / 2 },
        ];
        const c = S(r, o, s, l);
        c.attr("style", e.style);
        L(e, c);
        e.intersect = function (t) {
          return $.polygon(e, l, t);
        };
        return r;
      };
      const D = async (t, e) => {
        const { shapeSvg: r, bbox: a } = await v(t, e, j(e, void 0), true);
        const n = a.width + e.padding;
        const s = a.height + e.padding;
        const i = [
          { x: -s / 2, y: 0 },
          { x: n, y: 0 },
          { x: n, y: -s },
          { x: -s / 2, y: -s },
          { x: 0, y: -s / 2 },
        ];
        const o = S(r, n, s, i);
        o.attr("style", e.style);
        e.width = n + s;
        e.height = s;
        e.intersect = function (t) {
          return $.polygon(e, i, t);
        };
        return r;
      };
      const N = async (t, e) => {
        const { shapeSvg: r, bbox: a } = await v(t, e, j(e), true);
        const n = a.width + e.padding;
        const s = a.height + e.padding;
        const i = [
          { x: (-2 * s) / 6, y: 0 },
          { x: n - s / 6, y: 0 },
          { x: n + (2 * s) / 6, y: -s },
          { x: s / 6, y: -s },
        ];
        const o = S(r, n, s, i);
        o.attr("style", e.style);
        L(e, o);
        e.intersect = function (t) {
          return $.polygon(e, i, t);
        };
        return r;
      };
      const U = async (t, e) => {
        const { shapeSvg: r, bbox: a } = await v(t, e, j(e, void 0), true);
        const n = a.width + e.padding;
        const s = a.height + e.padding;
        const i = [
          { x: (2 * s) / 6, y: 0 },
          { x: n + s / 6, y: 0 },
          { x: n - (2 * s) / 6, y: -s },
          { x: -s / 6, y: -s },
        ];
        const o = S(r, n, s, i);
        o.attr("style", e.style);
        L(e, o);
        e.intersect = function (t) {
          return $.polygon(e, i, t);
        };
        return r;
      };
      const A = async (t, e) => {
        const { shapeSvg: r, bbox: a } = await v(t, e, j(e, void 0), true);
        const n = a.width + e.padding;
        const s = a.height + e.padding;
        const i = [
          { x: (-2 * s) / 6, y: 0 },
          { x: n + (2 * s) / 6, y: 0 },
          { x: n - s / 6, y: -s },
          { x: s / 6, y: -s },
        ];
        const o = S(r, n, s, i);
        o.attr("style", e.style);
        L(e, o);
        e.intersect = function (t) {
          return $.polygon(e, i, t);
        };
        return r;
      };
      const Z = async (t, e) => {
        const { shapeSvg: r, bbox: a } = await v(t, e, j(e, void 0), true);
        const n = a.width + e.padding;
        const s = a.height + e.padding;
        const i = [
          { x: s / 6, y: 0 },
          { x: n - s / 6, y: 0 },
          { x: n + (2 * s) / 6, y: -s },
          { x: (-2 * s) / 6, y: -s },
        ];
        const o = S(r, n, s, i);
        o.attr("style", e.style);
        L(e, o);
        e.intersect = function (t) {
          return $.polygon(e, i, t);
        };
        return r;
      };
      const q = async (t, e) => {
        const { shapeSvg: r, bbox: a } = await v(t, e, j(e, void 0), true);
        const n = a.width + e.padding;
        const s = a.height + e.padding;
        const i = [
          { x: 0, y: 0 },
          { x: n + s / 2, y: 0 },
          { x: n, y: -s / 2 },
          { x: n + s / 2, y: -s },
          { x: 0, y: -s },
        ];
        const o = S(r, n, s, i);
        o.attr("style", e.style);
        L(e, o);
        e.intersect = function (t) {
          return $.polygon(e, i, t);
        };
        return r;
      };
      const z = async (t, e) => {
        const { shapeSvg: r, bbox: a } = await v(t, e, j(e, void 0), true);
        const n = a.width + e.padding;
        const s = n / 2;
        const i = s / (2.5 + n / 50);
        const o = a.height + i + e.padding;
        const l =
          "M 0," +
          i +
          " a " +
          s +
          "," +
          i +
          " 0,0,0 " +
          n +
          " 0 a " +
          s +
          "," +
          i +
          " 0,0,0 " +
          -n +
          " 0 l 0," +
          o +
          " a " +
          s +
          "," +
          i +
          " 0,0,0 " +
          n +
          " 0 l 0," +
          -o;
        const c = r
          .attr("label-offset-y", i)
          .insert("path", ":first-child")
          .attr("style", e.style)
          .attr("d", l)
          .attr("transform", "translate(" + -n / 2 + "," + -(o / 2 + i) + ")");
        L(e, c);
        e.intersect = function (t) {
          const r = $.rect(e, t);
          const a = r.x - e.x;
          if (s != 0 && (Math.abs(a) < e.width / 2 || (Math.abs(a) == e.width / 2 && Math.abs(r.y - e.y) > e.height / 2 - i))) {
            let n = i * i * (1 - (a * a) / (s * s));
            if (n != 0) {
              n = Math.sqrt(n);
            }
            n = i - n;
            if (t.y - e.y > 0) {
              n = -n;
            }
            r.y += n;
          }
          return r;
        };
        return r;
      };
      const J = async (t, e) => {
        const { shapeSvg: r, bbox: n, halfPadding: s } = await v(t, e, "node " + e.classes + " " + e.class, true);
        const i = r.insert("rect", ":first-child");
        const o = n.width + e.padding;
        const l = n.height + e.padding;
        i.attr("class", "basic label-container")
          .attr("style", e.style)
          .attr("rx", e.rx)
          .attr("ry", e.ry)
          .attr("x", -n.width / 2 - s)
          .attr("y", -n.height / 2 - s)
          .attr("width", o)
          .attr("height", l);
        if (e.props) {
          const t = new Set(Object.keys(e.props));
          if (e.props.borders) {
            Q(i, e.props.borders, o, l);
            t.delete("borders");
          }
          t.forEach((t) => {
            a.l.warn(`Unknown node property ${t}`);
          });
        }
        L(e, i);
        e.intersect = function (t) {
          return $.rect(e, t);
        };
        return r;
      };
      const V = async (t, e) => {
        const { shapeSvg: r } = await v(t, e, "label", true);
        a.l.trace("Classes = ", e.class);
        const n = r.insert("rect", ":first-child");
        const s = 0;
        const i = 0;
        n.attr("width", s).attr("height", i);
        r.attr("class", "label edgeLabel");
        if (e.props) {
          const t = new Set(Object.keys(e.props));
          if (e.props.borders) {
            Q(n, e.props.borders, s, i);
            t.delete("borders");
          }
          t.forEach((t) => {
            a.l.warn(`Unknown node property ${t}`);
          });
        }
        L(e, n);
        e.intersect = function (t) {
          return $.rect(e, t);
        };
        return r;
      };
      function Q(t, e, r, n) {
        const s = [];
        const i = (t) => {
          s.push(t, 0);
        };
        const o = (t) => {
          s.push(0, t);
        };
        if (e.includes("t")) {
          a.l.debug("add top border");
          i(r);
        } else {
          o(r);
        }
        if (e.includes("r")) {
          a.l.debug("add right border");
          i(n);
        } else {
          o(n);
        }
        if (e.includes("b")) {
          a.l.debug("add bottom border");
          i(r);
        } else {
          o(r);
        }
        if (e.includes("l")) {
          a.l.debug("add left border");
          i(n);
        } else {
          o(n);
        }
        t.attr("stroke-dasharray", s.join(" "));
      }
      const F = (t, e) => {
        let r;
        if (!e.classes) {
          r = "node default";
        } else {
          r = "node " + e.classes;
        }
        const s = t
          .insert("g")
          .attr("class", r)
          .attr("id", e.domId || e.id);
        const i = s.insert("rect", ":first-child");
        const o = s.insert("line");
        const l = s.insert("g").attr("class", "label");
        const c = e.labelText.flat ? e.labelText.flat() : e.labelText;
        let d = "";
        if (typeof c === "object") {
          d = c[0];
        } else {
          d = c;
        }
        a.l.info("Label text abc79", d, c, typeof c === "object");
        const h = l.node().appendChild(k(d, e.labelStyle, true, true));
        let p = { width: 0, height: 0 };
        if ((0, a.m)((0, a.c)().flowchart.htmlLabels)) {
          const t = h.children[0];
          const e = (0, n.Ys)(h);
          p = t.getBoundingClientRect();
          e.attr("width", p.width);
          e.attr("height", p.height);
        }
        a.l.info("Text 2", c);
        const f = c.slice(1, c.length);
        let g = h.getBBox();
        const y = l.node().appendChild(k(f.join ? f.join("<br/>") : f, e.labelStyle, true, true));
        if ((0, a.m)((0, a.c)().flowchart.htmlLabels)) {
          const t = y.children[0];
          const e = (0, n.Ys)(y);
          p = t.getBoundingClientRect();
          e.attr("width", p.width);
          e.attr("height", p.height);
        }
        const u = e.padding / 2;
        (0, n.Ys)(y).attr("transform", "translate( " + (p.width > g.width ? 0 : (g.width - p.width) / 2) + ", " + (g.height + u + 5) + ")");
        (0, n.Ys)(h).attr("transform", "translate( " + (p.width < g.width ? 0 : -(g.width - p.width) / 2) + ", 0)");
        p = l.node().getBBox();
        l.attr("transform", "translate(" + -p.width / 2 + ", " + (-p.height / 2 - u + 3) + ")");
        i.attr("class", "outer title-state")
          .attr("x", -p.width / 2 - u)
          .attr("y", -p.height / 2 - u)
          .attr("width", p.width + e.padding)
          .attr("height", p.height + e.padding);
        o.attr("class", "divider")
          .attr("x1", -p.width / 2 - u)
          .attr("x2", p.width / 2 + u)
          .attr("y1", -p.height / 2 - u + g.height + u)
          .attr("y2", -p.height / 2 - u + g.height + u);
        L(e, i);
        e.intersect = function (t) {
          return $.rect(e, t);
        };
        return s;
      };
      const G = async (t, e) => {
        const { shapeSvg: r, bbox: a } = await v(t, e, j(e, void 0), true);
        const n = a.height + e.padding;
        const s = a.width + n / 4 + e.padding;
        const i = r
          .insert("rect", ":first-child")
          .attr("style", e.style)
          .attr("rx", n / 2)
          .attr("ry", n / 2)
          .attr("x", -s / 2)
          .attr("y", -n / 2)
          .attr("width", s)
          .attr("height", n);
        L(e, i);
        e.intersect = function (t) {
          return $.rect(e, t);
        };
        return r;
      };
      const K = async (t, e) => {
        const { shapeSvg: r, bbox: n, halfPadding: s } = await v(t, e, j(e, void 0), true);
        const i = r.insert("circle", ":first-child");
        i.attr("style", e.style)
          .attr("rx", e.rx)
          .attr("ry", e.ry)
          .attr("r", n.width / 2 + s)
          .attr("width", n.width + e.padding)
          .attr("height", n.height + e.padding);
        a.l.info("Circle main");
        L(e, i);
        e.intersect = function (t) {
          a.l.info("Circle intersect", e, n.width / 2 + s, t);
          return $.circle(e, n.width / 2 + s, t);
        };
        return r;
      };
      const tt = async (t, e) => {
        const { shapeSvg: r, bbox: n, halfPadding: s } = await v(t, e, j(e, void 0), true);
        const i = 5;
        const o = r.insert("g", ":first-child");
        const l = o.insert("circle");
        const c = o.insert("circle");
        o.attr("class", e.class);
        l.attr("style", e.style)
          .attr("rx", e.rx)
          .attr("ry", e.ry)
          .attr("r", n.width / 2 + s + i)
          .attr("width", n.width + e.padding + i * 2)
          .attr("height", n.height + e.padding + i * 2);
        c.attr("style", e.style)
          .attr("rx", e.rx)
          .attr("ry", e.ry)
          .attr("r", n.width / 2 + s)
          .attr("width", n.width + e.padding)
          .attr("height", n.height + e.padding);
        a.l.info("DoubleCircle main");
        L(e, l);
        e.intersect = function (t) {
          a.l.info("DoubleCircle intersect", e, n.width / 2 + s + i, t);
          return $.circle(e, n.width / 2 + s + i, t);
        };
        return r;
      };
      const et = async (t, e) => {
        const { shapeSvg: r, bbox: a } = await v(t, e, j(e, void 0), true);
        const n = a.width + e.padding;
        const s = a.height + e.padding;
        const i = [
          { x: 0, y: 0 },
          { x: n, y: 0 },
          { x: n, y: -s },
          { x: 0, y: -s },
          { x: 0, y: 0 },
          { x: -8, y: 0 },
          { x: n + 8, y: 0 },
          { x: n + 8, y: -s },
          { x: -8, y: -s },
          { x: -8, y: 0 },
        ];
        const o = S(r, n, s, i);
        o.attr("style", e.style);
        L(e, o);
        e.intersect = function (t) {
          return $.polygon(e, i, t);
        };
        return r;
      };
      const rt = (t, e) => {
        const r = t
          .insert("g")
          .attr("class", "node default")
          .attr("id", e.domId || e.id);
        const a = r.insert("circle", ":first-child");
        a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
        L(e, a);
        e.intersect = function (t) {
          return $.circle(e, 7, t);
        };
        return r;
      };
      const at = (t, e, r) => {
        const a = t
          .insert("g")
          .attr("class", "node default")
          .attr("id", e.domId || e.id);
        let n = 70;
        let s = 10;
        if (r === "LR") {
          n = 10;
          s = 70;
        }
        const i = a
          .append("rect")
          .attr("x", (-1 * n) / 2)
          .attr("y", (-1 * s) / 2)
          .attr("width", n)
          .attr("height", s)
          .attr("class", "fork-join");
        L(e, i);
        e.height = e.height + e.padding / 2;
        e.width = e.width + e.padding / 2;
        e.intersect = function (t) {
          return $.rect(e, t);
        };
        return a;
      };
      const nt = (t, e) => {
        const r = t
          .insert("g")
          .attr("class", "node default")
          .attr("id", e.domId || e.id);
        const a = r.insert("circle", ":first-child");
        const n = r.insert("circle", ":first-child");
        n.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
        a.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10);
        L(e, n);
        e.intersect = function (t) {
          return $.circle(e, 7, t);
        };
        return r;
      };
      const st = (t, e) => {
        const r = e.padding / 2;
        const s = 4;
        const i = 8;
        let o;
        if (!e.classes) {
          o = "node default";
        } else {
          o = "node " + e.classes;
        }
        const l = t
          .insert("g")
          .attr("class", o)
          .attr("id", e.domId || e.id);
        const c = l.insert("rect", ":first-child");
        const d = l.insert("line");
        const h = l.insert("line");
        let p = 0;
        let f = s;
        const g = l.insert("g").attr("class", "label");
        let y = 0;
        const u = e.classData.annotations && e.classData.annotations[0];
        const w = e.classData.annotations[0] ? "«" + e.classData.annotations[0] + "»" : "";
        const x = g.node().appendChild(k(w, e.labelStyle, true, true));
        let b = x.getBBox();
        if ((0, a.m)((0, a.c)().flowchart.htmlLabels)) {
          const t = x.children[0];
          const e = (0, n.Ys)(x);
          b = t.getBoundingClientRect();
          e.attr("width", b.width);
          e.attr("height", b.height);
        }
        if (e.classData.annotations[0]) {
          f += b.height + s;
          p += b.width;
        }
        let m = e.classData.label;
        if (e.classData.type !== void 0 && e.classData.type !== "") {
          if ((0, a.c)().flowchart.htmlLabels) {
            m += "&lt;" + e.classData.type + "&gt;";
          } else {
            m += "<" + e.classData.type + ">";
          }
        }
        const v = g.node().appendChild(k(m, e.labelStyle, true, true));
        (0, n.Ys)(v).attr("class", "classTitle");
        let S = v.getBBox();
        if ((0, a.m)((0, a.c)().flowchart.htmlLabels)) {
          const t = v.children[0];
          const e = (0, n.Ys)(v);
          S = t.getBoundingClientRect();
          e.attr("width", S.width);
          e.attr("height", S.height);
        }
        f += S.height + s;
        if (S.width > p) {
          p = S.width;
        }
        const M = [];
        e.classData.members.forEach((t) => {
          const r = t.getDisplayDetails();
          let i = r.displayText;
          if ((0, a.c)().flowchart.htmlLabels) {
            i = i.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          }
          const o = g.node().appendChild(k(i, r.cssStyle ? r.cssStyle : e.labelStyle, true, true));
          let l = o.getBBox();
          if ((0, a.m)((0, a.c)().flowchart.htmlLabels)) {
            const t = o.children[0];
            const e = (0, n.Ys)(o);
            l = t.getBoundingClientRect();
            e.attr("width", l.width);
            e.attr("height", l.height);
          }
          if (l.width > p) {
            p = l.width;
          }
          f += l.height + s;
          M.push(o);
        });
        f += i;
        const T = [];
        e.classData.methods.forEach((t) => {
          const r = t.getDisplayDetails();
          let i = r.displayText;
          if ((0, a.c)().flowchart.htmlLabels) {
            i = i.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          }
          const o = g.node().appendChild(k(i, r.cssStyle ? r.cssStyle : e.labelStyle, true, true));
          let l = o.getBBox();
          if ((0, a.m)((0, a.c)().flowchart.htmlLabels)) {
            const t = o.children[0];
            const e = (0, n.Ys)(o);
            l = t.getBoundingClientRect();
            e.attr("width", l.width);
            e.attr("height", l.height);
          }
          if (l.width > p) {
            p = l.width;
          }
          f += l.height + s;
          T.push(o);
        });
        f += i;
        if (u) {
          let t = (p - b.width) / 2;
          (0, n.Ys)(x).attr("transform", "translate( " + ((-1 * p) / 2 + t) + ", " + (-1 * f) / 2 + ")");
          y = b.height + s;
        }
        let _ = (p - S.width) / 2;
        (0, n.Ys)(v).attr("transform", "translate( " + ((-1 * p) / 2 + _) + ", " + ((-1 * f) / 2 + y) + ")");
        y += S.height + s;
        d.attr("class", "divider")
          .attr("x1", -p / 2 - r)
          .attr("x2", p / 2 + r)
          .attr("y1", -f / 2 - r + i + y)
          .attr("y2", -f / 2 - r + i + y);
        y += i;
        M.forEach((t) => {
          (0, n.Ys)(t).attr("transform", "translate( " + -p / 2 + ", " + ((-1 * f) / 2 + y + i / 2) + ")");
          const e = t == null ? void 0 : t.getBBox();
          y += ((e == null ? void 0 : e.height) ?? 0) + s;
        });
        y += i;
        h.attr("class", "divider")
          .attr("x1", -p / 2 - r)
          .attr("x2", p / 2 + r)
          .attr("y1", -f / 2 - r + i + y)
          .attr("y2", -f / 2 - r + i + y);
        y += i;
        T.forEach((t) => {
          (0, n.Ys)(t).attr("transform", "translate( " + -p / 2 + ", " + ((-1 * f) / 2 + y) + ")");
          const e = t == null ? void 0 : t.getBBox();
          y += ((e == null ? void 0 : e.height) ?? 0) + s;
        });
        c.attr("style", e.style)
          .attr("class", "outer title-state")
          .attr("x", -p / 2 - r)
          .attr("y", -(f / 2) - r)
          .attr("width", p + e.padding)
          .attr("height", f + e.padding);
        L(e, c);
        e.intersect = function (t) {
          return $.rect(e, t);
        };
        return l;
      };
      const it = {
        rhombus: H,
        question: H,
        rect: J,
        labelRect: V,
        rectWithTitle: F,
        choice: I,
        circle: K,
        doublecircle: tt,
        stadium: G,
        hexagon: O,
        rect_left_inv_arrow: D,
        lean_right: N,
        lean_left: U,
        trapezoid: A,
        inv_trapezoid: Z,
        rect_right_inv_arrow: q,
        cylinder: z,
        start: rt,
        end: nt,
        note: W,
        subroutine: et,
        fork: at,
        join: at,
        class_box: st,
      };
      let ot = {};
      const lt = async (t, e, r) => {
        let n;
        let s;
        if (e.link) {
          let i;
          if ((0, a.c)().securityLevel === "sandbox") {
            i = "_top";
          } else if (e.linkTarget) {
            i = e.linkTarget || "_blank";
          }
          n = t.insert("svg:a").attr("xlink:href", e.link).attr("target", i);
          s = await it[e.shape](n, e, r);
        } else {
          s = await it[e.shape](t, e, r);
          n = s;
        }
        if (e.tooltip) {
          s.attr("title", e.tooltip);
        }
        if (e.class) {
          s.attr("class", "node default " + e.class);
        }
        ot[e.id] = n;
        if (e.haveCallback) {
          ot[e.id].attr("class", ot[e.id].attr("class") + " clickable");
        }
        return n;
      };
      const ct = (t, e) => {
        ot[e.id] = t;
      };
      const dt = () => {
        ot = {};
      };
      const ht = (t) => {
        const e = ot[t.id];
        a.l.trace("Transforming node", t.diff, t, "translate(" + (t.x - t.width / 2 - 5) + ", " + t.width / 2 + ")");
        const r = 8;
        const n = t.diff || 0;
        if (t.clusterNode) {
          e.attr("transform", "translate(" + (t.x + n - t.width / 2) + ", " + (t.y - t.height / 2 - r) + ")");
        } else {
          e.attr("transform", "translate(" + t.x + ", " + t.y + ")");
        }
        return n;
      };
      const pt = { aggregation: 18, extension: 18, composition: 18, dependency: 6, lollipop: 13.5, arrow_point: 5.3 };
      function ft(t, e) {
        if (t === void 0 || e === void 0) {
          return { angle: 0, deltaX: 0, deltaY: 0 };
        }
        t = gt(t);
        e = gt(e);
        const [r, a] = [t.x, t.y];
        const [n, s] = [e.x, e.y];
        const i = n - r;
        const o = s - a;
        return { angle: Math.atan(o / i), deltaX: i, deltaY: o };
      }
      const gt = (t) => {
        if (Array.isArray(t)) {
          return { x: t[0], y: t[1] };
        }
        return t;
      };
      const yt = (t) => ({
        x: function (e, r, a) {
          let n = 0;
          if (r === 0 && Object.hasOwn(pt, t.arrowTypeStart)) {
            const { angle: e, deltaX: r } = ft(a[0], a[1]);
            n = pt[t.arrowTypeStart] * Math.cos(e) * (r >= 0 ? 1 : -1);
          } else if (r === a.length - 1 && Object.hasOwn(pt, t.arrowTypeEnd)) {
            const { angle: e, deltaX: r } = ft(a[a.length - 1], a[a.length - 2]);
            n = pt[t.arrowTypeEnd] * Math.cos(e) * (r >= 0 ? 1 : -1);
          }
          return gt(e).x + n;
        },
        y: function (e, r, a) {
          let n = 0;
          if (r === 0 && Object.hasOwn(pt, t.arrowTypeStart)) {
            const { angle: e, deltaY: r } = ft(a[0], a[1]);
            n = pt[t.arrowTypeStart] * Math.abs(Math.sin(e)) * (r >= 0 ? 1 : -1);
          } else if (r === a.length - 1 && Object.hasOwn(pt, t.arrowTypeEnd)) {
            const { angle: e, deltaY: r } = ft(a[a.length - 1], a[a.length - 2]);
            n = pt[t.arrowTypeEnd] * Math.abs(Math.sin(e)) * (r >= 0 ? 1 : -1);
          }
          return gt(e).y + n;
        },
      });
      const ut = (t, e, r, a, n) => {
        if (e.arrowTypeStart) {
          xt(t, "start", e.arrowTypeStart, r, a, n);
        }
        if (e.arrowTypeEnd) {
          xt(t, "end", e.arrowTypeEnd, r, a, n);
        }
      };
      const wt = {
        arrow_cross: "cross",
        arrow_point: "point",
        arrow_barb: "barb",
        arrow_circle: "circle",
        aggregation: "aggregation",
        extension: "extension",
        composition: "composition",
        dependency: "dependency",
        lollipop: "lollipop",
      };
      const xt = (t, e, r, n, s, i) => {
        const o = wt[r];
        if (!o) {
          a.l.warn(`Unknown arrow type: ${r}`);
          return;
        }
        const l = e === "start" ? "Start" : "End";
        t.attr(`marker-${e}`, `url(${n}#${s}_${i}-${o}${l})`);
      };
      let bt = {};
      let mt = {};
      const kt = () => {
        bt = {};
        mt = {};
      };
      const vt = (t, e) => {
        const r = (0, a.m)((0, a.c)().flowchart.htmlLabels);
        const i =
          e.labelType === "markdown"
            ? (0, s.a)(t, e.label, { style: e.labelStyle, useHtmlLabels: r, addSvgBackground: true })
            : k(e.label, e.labelStyle);
        a.l.info("abc82", e, e.labelType);
        const o = t.insert("g").attr("class", "edgeLabel");
        const l = o.insert("g").attr("class", "label");
        l.node().appendChild(i);
        let c = i.getBBox();
        if (r) {
          const t = i.children[0];
          const e = (0, n.Ys)(i);
          c = t.getBoundingClientRect();
          e.attr("width", c.width);
          e.attr("height", c.height);
        }
        l.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")");
        bt[e.id] = o;
        e.width = c.width;
        e.height = c.height;
        let d;
        if (e.startLabelLeft) {
          const r = k(e.startLabelLeft, e.labelStyle);
          const a = t.insert("g").attr("class", "edgeTerminals");
          const n = a.insert("g").attr("class", "inner");
          d = n.node().appendChild(r);
          const s = r.getBBox();
          n.attr("transform", "translate(" + -s.width / 2 + ", " + -s.height / 2 + ")");
          if (!mt[e.id]) {
            mt[e.id] = {};
          }
          mt[e.id].startLeft = a;
          Lt(d, e.startLabelLeft);
        }
        if (e.startLabelRight) {
          const r = k(e.startLabelRight, e.labelStyle);
          const a = t.insert("g").attr("class", "edgeTerminals");
          const n = a.insert("g").attr("class", "inner");
          d = a.node().appendChild(r);
          n.node().appendChild(r);
          const s = r.getBBox();
          n.attr("transform", "translate(" + -s.width / 2 + ", " + -s.height / 2 + ")");
          if (!mt[e.id]) {
            mt[e.id] = {};
          }
          mt[e.id].startRight = a;
          Lt(d, e.startLabelRight);
        }
        if (e.endLabelLeft) {
          const r = k(e.endLabelLeft, e.labelStyle);
          const a = t.insert("g").attr("class", "edgeTerminals");
          const n = a.insert("g").attr("class", "inner");
          d = n.node().appendChild(r);
          const s = r.getBBox();
          n.attr("transform", "translate(" + -s.width / 2 + ", " + -s.height / 2 + ")");
          a.node().appendChild(r);
          if (!mt[e.id]) {
            mt[e.id] = {};
          }
          mt[e.id].endLeft = a;
          Lt(d, e.endLabelLeft);
        }
        if (e.endLabelRight) {
          const r = k(e.endLabelRight, e.labelStyle);
          const a = t.insert("g").attr("class", "edgeTerminals");
          const n = a.insert("g").attr("class", "inner");
          d = n.node().appendChild(r);
          const s = r.getBBox();
          n.attr("transform", "translate(" + -s.width / 2 + ", " + -s.height / 2 + ")");
          a.node().appendChild(r);
          if (!mt[e.id]) {
            mt[e.id] = {};
          }
          mt[e.id].endRight = a;
          Lt(d, e.endLabelRight);
        }
        return i;
      };
      function Lt(t, e) {
        if ((0, a.c)().flowchart.htmlLabels && t) {
          t.style.width = e.length * 9 + "px";
          t.style.height = "12px";
        }
      }
      const St = (t, e) => {
        a.l.info("Moving label abc78 ", t.id, t.label, bt[t.id]);
        let r = e.updatedPath ? e.updatedPath : e.originalPath;
        if (t.label) {
          const n = bt[t.id];
          let s = t.x;
          let i = t.y;
          if (r) {
            const n = a.u.calcLabelPosition(r);
            a.l.info("Moving label " + t.label + " from (", s, ",", i, ") to (", n.x, ",", n.y, ") abc78");
            if (e.updatedPath) {
              s = n.x;
              i = n.y;
            }
          }
          n.attr("transform", "translate(" + s + ", " + i + ")");
        }
        if (t.startLabelLeft) {
          const e = mt[t.id].startLeft;
          let n = t.x;
          let s = t.y;
          if (r) {
            const e = a.u.calcTerminalLabelPosition(t.arrowTypeStart ? 10 : 0, "start_left", r);
            n = e.x;
            s = e.y;
          }
          e.attr("transform", "translate(" + n + ", " + s + ")");
        }
        if (t.startLabelRight) {
          const e = mt[t.id].startRight;
          let n = t.x;
          let s = t.y;
          if (r) {
            const e = a.u.calcTerminalLabelPosition(t.arrowTypeStart ? 10 : 0, "start_right", r);
            n = e.x;
            s = e.y;
          }
          e.attr("transform", "translate(" + n + ", " + s + ")");
        }
        if (t.endLabelLeft) {
          const e = mt[t.id].endLeft;
          let n = t.x;
          let s = t.y;
          if (r) {
            const e = a.u.calcTerminalLabelPosition(t.arrowTypeEnd ? 10 : 0, "end_left", r);
            n = e.x;
            s = e.y;
          }
          e.attr("transform", "translate(" + n + ", " + s + ")");
        }
        if (t.endLabelRight) {
          const e = mt[t.id].endRight;
          let n = t.x;
          let s = t.y;
          if (r) {
            const e = a.u.calcTerminalLabelPosition(t.arrowTypeEnd ? 10 : 0, "end_right", r);
            n = e.x;
            s = e.y;
          }
          e.attr("transform", "translate(" + n + ", " + s + ")");
        }
      };
      const Mt = (t, e) => {
        const r = t.x;
        const a = t.y;
        const n = Math.abs(e.x - r);
        const s = Math.abs(e.y - a);
        const i = t.width / 2;
        const o = t.height / 2;
        if (n >= i || s >= o) {
          return true;
        }
        return false;
      };
      const Tt = (t, e, r) => {
        a.l.warn(
          `intersection calc abc89:\n  outsidePoint: ${JSON.stringify(e)}\n  insidePoint : ${JSON.stringify(r)}\n  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`
        );
        const n = t.x;
        const s = t.y;
        const i = Math.abs(n - r.x);
        const o = t.width / 2;
        let l = r.x < e.x ? o - i : o + i;
        const c = t.height / 2;
        const d = Math.abs(e.y - r.y);
        const h = Math.abs(e.x - r.x);
        if (Math.abs(s - e.y) * o > Math.abs(n - e.x) * c) {
          let t = r.y < e.y ? e.y - c - s : s - c - e.y;
          l = (h * t) / d;
          const n = { x: r.x < e.x ? r.x + l : r.x - h + l, y: r.y < e.y ? r.y + d - t : r.y - d + t };
          if (l === 0) {
            n.x = e.x;
            n.y = e.y;
          }
          if (h === 0) {
            n.x = e.x;
          }
          if (d === 0) {
            n.y = e.y;
          }
          a.l.warn(`abc89 topp/bott calc, Q ${d}, q ${t}, R ${h}, r ${l}`, n);
          return n;
        } else {
          if (r.x < e.x) {
            l = e.x - o - n;
          } else {
            l = n - o - e.x;
          }
          let t = (d * l) / h;
          let s = r.x < e.x ? r.x + h - l : r.x - h + l;
          let i = r.y < e.y ? r.y + t : r.y - t;
          a.l.warn(`sides calc abc89, Q ${d}, q ${t}, R ${h}, r ${l}`, { _x: s, _y: i });
          if (l === 0) {
            s = e.x;
            i = e.y;
          }
          if (h === 0) {
            s = e.x;
          }
          if (d === 0) {
            i = e.y;
          }
          return { x: s, y: i };
        }
      };
      const _t = (t, e) => {
        a.l.warn("abc88 cutPathAtIntersect", t, e);
        let r = [];
        let n = t[0];
        let s = false;
        t.forEach((t) => {
          a.l.info("abc88 checking point", t, e);
          if (!Mt(e, t) && !s) {
            const i = Tt(e, n, t);
            a.l.warn("abc88 inside", t, n, i);
            a.l.warn("abc88 intersection", i);
            let o = false;
            r.forEach((t) => {
              o = o || (t.x === i.x && t.y === i.y);
            });
            if (!r.some((t) => t.x === i.x && t.y === i.y)) {
              r.push(i);
            } else {
              a.l.warn("abc88 no intersect", i, r);
            }
            s = true;
          } else {
            a.l.warn("abc88 outside", t, n);
            n = t;
            if (!s) {
              r.push(t);
            }
          }
        });
        a.l.warn("abc88 returning points", r);
        return r;
      };
      const Bt = function (t, e, r, s, i, o, l) {
        let c = r.points;
        let d = false;
        const h = o.node(e.v);
        var p = o.node(e.w);
        a.l.info("abc88 InsertEdge: ", r);
        if (p.intersect && h.intersect) {
          c = c.slice(1, r.points.length - 1);
          c.unshift(h.intersect(c[0]));
          a.l.info("Last point", c[c.length - 1], p, p.intersect(c[c.length - 1]));
          c.push(p.intersect(c[c.length - 1]));
        }
        if (r.toCluster) {
          a.l.info("to cluster abc88", s[r.toCluster]);
          c = _t(r.points, s[r.toCluster].node);
          d = true;
        }
        if (r.fromCluster) {
          a.l.info("from cluster abc88", s[r.fromCluster]);
          c = _t(c.reverse(), s[r.fromCluster].node).reverse();
          d = true;
        }
        const f = c.filter((t) => !Number.isNaN(t.y));
        let g = n.$0Z;
        if (r.curve && (i === "graph" || i === "flowchart")) {
          g = r.curve;
        }
        const { x: y, y: u } = yt(r);
        const w = (0, n.jvg)().x(y).y(u).curve(g);
        let x;
        switch (r.thickness) {
          case "normal":
            x = "edge-thickness-normal";
            break;
          case "thick":
            x = "edge-thickness-thick";
            break;
          case "invisible":
            x = "edge-thickness-thick";
            break;
          default:
            x = "";
        }
        switch (r.pattern) {
          case "solid":
            x += " edge-pattern-solid";
            break;
          case "dotted":
            x += " edge-pattern-dotted";
            break;
          case "dashed":
            x += " edge-pattern-dashed";
            break;
        }
        const b = t
          .append("path")
          .attr("d", w(f))
          .attr("id", r.id)
          .attr("class", " " + x + (r.classes ? " " + r.classes : ""))
          .attr("style", r.style);
        let m = "";
        if ((0, a.c)().flowchart.arrowMarkerAbsolute || (0, a.c)().state.arrowMarkerAbsolute) {
          m = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
          m = m.replace(/\(/g, "\\(");
          m = m.replace(/\)/g, "\\)");
        }
        a.l.info("arrowTypeStart", r.arrowTypeStart);
        a.l.info("arrowTypeEnd", r.arrowTypeEnd);
        ut(b, r, m, l, i);
        let k = {};
        if (d) {
          k.updatedPath = c;
        }
        k.originalPath = r.points;
        return k;
      };
    },
  },
]);
