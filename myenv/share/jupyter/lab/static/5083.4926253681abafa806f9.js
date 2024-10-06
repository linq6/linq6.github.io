"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [5083],
  {
    25083: (e, t, n) => {
      n.r(t);
      n.d(t, {
        Accordion: () => b,
        AccordionItem: () => N,
        Anchor: () => v,
        AnchoredRegion: () => J,
        Avatar: () => T,
        Badge: () => w,
        Breadcrumb: () => C,
        BreadcrumbItem: () => D,
        Button: () => S,
        Card: () => _,
        Checkbox: () => R,
        Combobox: () => A,
        DataGrid: () => I,
        DataGridCell: () => x,
        DataGridRow: () => k,
        DateField: () => P,
        DesignSystemProvider: () => E,
        Dialog: () => F,
        Disclosure: () => B,
        Divider: () => G,
        Listbox: () => M,
        Menu: () => O,
        MenuItem: () => L,
        NumberField: () => V,
        Option: () => $,
        Picker: () => ce,
        Progress: () => z,
        ProgressRing: () => H,
        Radio: () => U,
        RadioGroup: () => q,
        Search: () => K,
        Select: () => Q,
        Skeleton: () => W,
        Slider: () => X,
        SliderLabel: () => Y,
        Switch: () => Z,
        Tab: () => te,
        TabPanel: () => ee,
        Tabs: () => ne,
        TextArea: () => ae,
        TextField: () => se,
        Toolbar: () => oe,
        Tooltip: () => re,
        TreeItem: () => ie,
        TreeView: () => pe,
        wrap: () => j,
      });
      var a = n(13710);
      var s = n(81351);
      var o = n(16904);
      const r = new Set(["children", "localName", "ref", "style", "className"]);
      const i = Object.freeze(Object.create(null));
      const p = "_default";
      const c = new Map();
      function l(e, t) {
        if (typeof e === "function") {
          e(t);
        } else {
          e.current = t;
        }
      }
      function d(e, t) {
        if (!t.name) {
          const n = s.FASTElementDefinition.forType(e);
          if (n) {
            t.name = n.name;
          } else {
            throw new Error("React wrappers must wrap a FASTElement or be configured with a name.");
          }
        }
        return t.name;
      }
      function u(e) {
        return e.events || (e.events = {});
      }
      function y(e, t, n) {
        if (r.has(n)) {
          console.warn(
            `${d(e, t)} contains property ${n} which is a React ` + `reserved property. It will be used by React and not set on ` + `the element.`
          );
          return false;
        }
        return true;
      }
      function m(e, t) {
        if (!t.keys) {
          if (t.properties) {
            t.keys = new Set(t.properties.concat(Object.keys(u(t))));
          } else {
            const n = new Set(Object.keys(u(t)));
            const a = s.Observable.getAccessors(e.prototype);
            if (a.length > 0) {
              for (const s of a) {
                if (y(e, t, s.name)) {
                  n.add(s.name);
                }
              }
            } else {
              for (const a in e.prototype) {
                if (!(a in HTMLElement.prototype) && y(e, t, a)) {
                  n.add(a);
                }
              }
            }
            t.keys = n;
          }
        }
        return t.keys;
      }
      function h(e, t) {
        let n = [];
        const a = {
          register(e, ...t) {
            n.forEach((n) => n.register(e, ...t));
            n = [];
          },
        };
        function s(a, s = {}) {
          var r, y;
          if (a instanceof o.FoundationElementRegistry) {
            if (t) {
              t.register(a);
            } else {
              n.push(a);
            }
            a = a.type;
          }
          const h = c.get(a);
          if (h) {
            const e = h.get((r = s.name) !== null && r !== void 0 ? r : p);
            if (e) {
              return e;
            }
          }
          class g extends e.Component {
            constructor() {
              super(...arguments);
              this._element = null;
            }
            _updateElement(e) {
              const t = this._element;
              if (t === null) {
                return;
              }
              const n = this.props;
              const a = e || i;
              const o = u(s);
              for (const s in this._elementProps) {
                const e = n[s];
                const r = o[s];
                if (r === undefined) {
                  t[s] = e;
                } else {
                  const n = a[s];
                  if (e === n) {
                    continue;
                  }
                  if (n !== undefined) {
                    t.removeEventListener(r, n);
                  }
                  if (e !== undefined) {
                    t.addEventListener(r, e);
                  }
                }
              }
            }
            componentDidMount() {
              this._updateElement();
            }
            componentDidUpdate(e) {
              this._updateElement(e);
            }
            render() {
              const t = this.props.__forwardedRef;
              if (this._ref === undefined || this._userRef !== t) {
                this._ref = (e) => {
                  if (this._element === null) {
                    this._element = e;
                  }
                  if (t !== null) {
                    l(t, e);
                  }
                  this._userRef = t;
                };
              }
              const n = { ref: this._ref };
              const o = (this._elementProps = {});
              const r = m(a, s);
              const i = this.props;
              for (const e in i) {
                const t = i[e];
                if (r.has(e)) {
                  o[e] = t;
                } else {
                  n[e === "className" ? "class" : e] = t;
                }
              }
              return e.createElement(d(a, s), n);
            }
          }
          const f = e.forwardRef((t, n) =>
            e.createElement(g, Object.assign(Object.assign({}, t), { __forwardedRef: n }), t === null || t === void 0 ? void 0 : t.children)
          );
          if (!c.has(a)) {
            c.set(a, new Map());
          }
          c.get(a).set((y = s.name) !== null && y !== void 0 ? y : p, f);
          return f;
        }
        return { wrap: s, registry: a };
      }
      var g = n(28416);
      var f = n.n(g);
      const { wrap: j } = h(f(), (0, a.provideJupyterDesignSystem)());
      const b = j((0, a.jpAccordion)(), { events: { onChange: "change" } });
      b.displayName = "Jupyter.Accordion";
      const N = j((0, a.jpAccordionItem)(), { events: { onChange: "change" } });
      N.displayName = "Jupyter.AccordionItem";
      const v = j((0, a.jpAnchor)());
      v.displayName = "Jupyter.Anchor";
      const J = j((0, a.jpAnchoredRegion)());
      J.displayName = "Jupyter.AnchoredRegion";
      const T = j((0, a.jpAvatar)());
      T.displayName = "Jupyter.Avatar";
      const w = j((0, a.jpBadge)());
      w.displayName = "Jupyter.Badge";
      const C = j((0, a.jpBreadcrumb)());
      C.displayName = "Jupyter.Breadcrumb";
      const D = j((0, a.jpBreadcrumbItem)());
      D.displayName = "Jupyter.BreadcrumbItem";
      const S = j((0, a.jpButton)());
      S.displayName = "Jupyter.Button";
      const _ = j((0, a.jpCard)());
      _.displayName = "Jupyter.Card";
      const R = j((0, a.jpCheckbox)(), { events: { onChange: "change" } });
      R.displayName = "Jupyter.Checkbox";
      const A = j((0, a.jpCombobox)(), { events: { onChange: "change", onInput: "input" } });
      A.displayName = "Jupyter.Combobox";
      const x = j((0, a.jpDataGridCell)(), { events: { onFocus: "cell-focused" } });
      x.displayName = "Jupyter.DataGridCell";
      const k = j((0, a.jpDataGridRow)(), { events: { onFocus: "row-focused" } });
      k.displayName = "Jupyter.DataGridRow";
      const I = j((0, a.jpDataGrid)());
      I.displayName = "Jupyter.DataGrid";
      const P = j((0, a.jpDateField)(), { events: { onChange: "change" } });
      P.displayName = "Jupyter.DateField";
      const E = j((0, a.jpDesignSystemProvider)());
      E.displayName = "Jupyter.DesignSystemProvider";
      const F = j((0, a.jpDialog)());
      F.displayName = "Jupyter.Dialog";
      const B = j((0, a.jpDisclosure)(), { events: { onToggle: "toggle" } });
      B.displayName = "Jupyter.Disclosure";
      const G = j((0, a.jpDivider)());
      G.displayName = "Jupyter.Divider";
      const M = j((0, a.jpListbox)());
      M.displayName = "Jupyter.Listbox";
      const O = j((0, a.jpMenu)());
      O.displayName = "Jupyter.Menu";
      const L = j((0, a.jpMenuItem)(), { events: { onExpand: "expanded-change" } });
      L.displayName = "Jupyter.MenuItem";
      const V = j((0, a.jpNumberField)(), { events: { onChange: "change", onInput: "input" } });
      V.displayName = "Jupyter.NumberField";
      const $ = j((0, a.jpOption)());
      $.displayName = "Juypter.Option";
      const z = j((0, a.jpProgress)(), { name: "jp-progress" });
      z.displayName = "Jupyter.Progress";
      const H = j((0, a.jpProgressRing)(), { name: "jp-progress-ring" });
      H.displayName = "Jupyter.ProgressRing";
      const U = j((0, a.jpRadio)(), { events: { onChange: "change" } });
      U.displayName = "Jupyter.Radio";
      const q = j((0, a.jpRadioGroup)(), { events: { onChange: "change" } });
      q.displayName = "Jupyter.RadioGroup";
      const K = j((0, a.jpSearch)(), { events: { onChange: "change", onInput: "input" } });
      K.displayName = "Jupyter.Search";
      const Q = j((0, a.jpSelect)(), { events: { onChange: "change", onInput: "input" } });
      Q.displayName = "Jupyter.Select";
      const W = j((0, a.jpSkeleton)());
      W.displayName = "Jupyter.Skeleton";
      const X = j((0, a.jpSlider)(), { events: { onChange: "change" } });
      X.displayName = "Jupyter.Slider";
      const Y = j((0, a.jpSliderLabel)());
      Y.displayName = "Jupyter.SliderLabel";
      const Z = j((0, a.jpSwitch)(), { events: { onChange: "change" } });
      Z.displayName = "Jupyter.Switch";
      const ee = j((0, a.jpTabPanel)());
      ee.displayName = "Jupyter.TabPanel";
      const te = j((0, a.jpTab)());
      te.displayName = "Jupyter.Tab";
      const ne = j((0, a.jpTabs)(), { events: { onChange: "change" } });
      ne.displayName = "Jupyter.Tabs";
      const ae = j((0, a.jpTextArea)(), { events: { onChange: "change" } });
      ae.displayName = "Jupyter.TextArea";
      const se = j((0, a.jpTextField)(), { events: { onChange: "change", onInput: "input" } });
      se.displayName = "Jupyter.TextField";
      const oe = j((0, a.jpToolbar)());
      oe.displayName = "Jupyter.Toolbar";
      const re = j((0, a.jpTooltip)());
      re.displayName = "Jupyter.Tooltip";
      const ie = j((0, a.jpTreeItem)(), { events: { onExpand: "expanded-change", onSelect: "selected-change" } });
      ie.displayName = "Jupyter.TreeItem";
      const pe = j((0, a.jpTreeView)());
      pe.displayName = "Jupyter.TreeView";
      const ce = j((0, a.jpPicker)(), { events: { onChange: "change", onInput: "input" } });
      ce.displayName = "Jupyter.Picker";
    },
  },
]);
