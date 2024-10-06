(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [226, 745, 9265, 7245],
  {
    41311: (e, t, r) => {
      "use strict";
      r.d(t, { ZP: () => fn });
      var n = r(85893);
      var s = r(28416);
      var i = r(42329);
      var a = r(27361);
      var o = r.n(a);
      var l = r(41609);
      var c = r.n(l);
      var d = r(78718);
      var u = r.n(d);
      var h = r(30084);
      var m = r.n(h);
      var p = r(50361);
      var f = r.n(p);
      var g = r(13218);
      var y = r.n(g);
      var S = r(36968);
      var v = r.n(S);
      let x = (e) => crypto.getRandomValues(new Uint8Array(e));
      let b = (e, t, r) => {
        let n = (2 << (Math.log(e.length - 1) / Math.LN2)) - 1;
        let s = -~((1.6 * n * t) / e.length);
        return (i = t) => {
          let a = "";
          while (true) {
            let t = r(s);
            let o = s;
            while (o--) {
              a += e[t[o] & n] || "";
              if (a.length === i) return a;
            }
          }
        };
      };
      let C = (e, t = 21) => b(e, t, x);
      let k = (e = 21) =>
        crypto.getRandomValues(new Uint8Array(e)).reduce((e, t) => {
          t &= 63;
          if (t < 36) {
            e += t.toString(36);
          } else if (t < 62) {
            e += (t - 26).toString(36).toUpperCase();
          } else if (t > 62) {
            e += "-";
          } else {
            e += "_";
          }
          return e;
        }, "");
      function F() {
        return k();
      }
      function j(e) {
        return !Array.isArray(e) ? [] : e.map((e) => ({ key: F(), item: e }));
      }
      function O(e) {
        if (Array.isArray(e)) {
          return e.map((e) => e.item);
        }
        return [];
      }
      class T extends s.Component {
        constructor(e) {
          super(e);
          this._getNewFormDataRow = () => {
            const { schema: e, registry: t } = this.props;
            const { schemaUtils: r } = t;
            let n = e.items;
            if ((0, i.isFixedItems)(e) && (0, i.allowAdditionalItems)(e)) {
              n = e.additionalItems;
            }
            return r.getDefaultFormState(n);
          };
          this.onAddClick = (e) => {
            this._handleAddClick(e);
          };
          this.onAddIndexClick = (e) => (t) => {
            this._handleAddClick(t, e);
          };
          this.onCopyIndexClick = (e) => (t) => {
            if (t) {
              t.preventDefault();
            }
            const { onChange: r, errorSchema: n } = this.props;
            const { keyedFormData: s } = this.state;
            let i;
            if (n) {
              i = {};
              for (const t in n) {
                const r = parseInt(t);
                if (r <= e) {
                  v()(i, [r], n[t]);
                } else if (r > e) {
                  v()(i, [r + 1], n[t]);
                }
              }
            }
            const a = { key: F(), item: f()(s[e].item) };
            const o = [...s];
            if (e !== undefined) {
              o.splice(e + 1, 0, a);
            } else {
              o.push(a);
            }
            this.setState({ keyedFormData: o, updatedKeyedFormData: true }, () => r(O(o), i));
          };
          this.onDropIndexClick = (e) => (t) => {
            if (t) {
              t.preventDefault();
            }
            const { onChange: r, errorSchema: n } = this.props;
            const { keyedFormData: s } = this.state;
            let i;
            if (n) {
              i = {};
              for (const t in n) {
                const r = parseInt(t);
                if (r < e) {
                  v()(i, [r], n[t]);
                } else if (r > e) {
                  v()(i, [r - 1], n[t]);
                }
              }
            }
            const a = s.filter((t, r) => r !== e);
            this.setState({ keyedFormData: a, updatedKeyedFormData: true }, () => r(O(a), i));
          };
          this.onReorderClick = (e, t) => (r) => {
            if (r) {
              r.preventDefault();
              r.currentTarget.blur();
            }
            const { onChange: n, errorSchema: s } = this.props;
            let i;
            if (s) {
              i = {};
              for (const r in s) {
                const n = parseInt(r);
                if (n == e) {
                  v()(i, [t], s[e]);
                } else if (n == t) {
                  v()(i, [e], s[t]);
                } else {
                  v()(i, [r], s[n]);
                }
              }
            }
            const { keyedFormData: a } = this.state;
            function o() {
              const r = a.slice();
              r.splice(e, 1);
              r.splice(t, 0, a[e]);
              return r;
            }
            const l = o();
            this.setState({ keyedFormData: l }, () => n(O(l), i));
          };
          this.onChangeForIndex = (e) => (t, r, n) => {
            const { formData: s, onChange: i, errorSchema: a } = this.props;
            const o = Array.isArray(s) ? s : [];
            const l = o.map((r, n) => {
              const s = typeof t === "undefined" ? null : t;
              return e === n ? s : r;
            });
            i(l, a && a && { ...a, [e]: r }, n);
          };
          this.onSelectChange = (e) => {
            const { onChange: t, idSchema: r } = this.props;
            t(e, undefined, r && r.$id);
          };
          const { formData: t = [] } = e;
          const r = j(t);
          this.state = { keyedFormData: r, updatedKeyedFormData: false };
        }
        static getDerivedStateFromProps(e, t) {
          if (t.updatedKeyedFormData) {
            return { updatedKeyedFormData: false };
          }
          const r = Array.isArray(e.formData) ? e.formData : [];
          const n = t.keyedFormData || [];
          const s = r.length === n.length ? n.map((e, t) => ({ key: e.key, item: r[t] })) : j(r);
          return { keyedFormData: s };
        }
        get itemTitle() {
          const { schema: e, registry: t } = this.props;
          const { translateString: r } = t;
          return o()(e, [i.ITEMS_KEY, "title"], o()(e, [i.ITEMS_KEY, "description"], r(i.TranslatableString.ArrayItemTitle)));
        }
        isItemRequired(e) {
          if (Array.isArray(e.type)) {
            return !e.type.includes("null");
          }
          return e.type !== "null";
        }
        canAddItem(e) {
          const { schema: t, uiSchema: r, registry: n } = this.props;
          let { addable: s } = (0, i.getUiOptions)(r, n.globalUiOptions);
          if (s !== false) {
            if (t.maxItems !== undefined) {
              s = e.length < t.maxItems;
            } else {
              s = true;
            }
          }
          return s;
        }
        _handleAddClick(e, t) {
          if (e) {
            e.preventDefault();
          }
          const { onChange: r, errorSchema: n } = this.props;
          const { keyedFormData: s } = this.state;
          let i;
          if (n) {
            i = {};
            for (const e in n) {
              const r = parseInt(e);
              if (t === undefined || r < t) {
                v()(i, [r], n[e]);
              } else if (r >= t) {
                v()(i, [r + 1], n[e]);
              }
            }
          }
          const a = { key: F(), item: this._getNewFormDataRow() };
          const o = [...s];
          if (t !== undefined) {
            o.splice(t, 0, a);
          } else {
            o.push(a);
          }
          this.setState({ keyedFormData: o, updatedKeyedFormData: true }, () => r(O(o), i));
        }
        render() {
          const { schema: e, uiSchema: t, idSchema: r, registry: s } = this.props;
          const { schemaUtils: a, translateString: o } = s;
          if (!(i.ITEMS_KEY in e)) {
            const a = (0, i.getUiOptions)(t);
            const l = (0, i.getTemplate)("UnsupportedFieldTemplate", s, a);
            return (0, n.jsx)(l, { schema: e, idSchema: r, reason: o(i.TranslatableString.MissingItems), registry: s });
          }
          if (a.isMultiSelect(e)) {
            return this.renderMultiSelect();
          }
          if ((0, i.isCustomWidget)(t)) {
            return this.renderCustomWidget();
          }
          if ((0, i.isFixedItems)(e)) {
            return this.renderFixedArray();
          }
          if (a.isFilesArray(e, t)) {
            return this.renderFiles();
          }
          return this.renderNormalArray();
        }
        renderNormalArray() {
          const {
            schema: e,
            uiSchema: t = {},
            errorSchema: r,
            idSchema: s,
            name: a,
            disabled: o = false,
            readonly: l = false,
            autofocus: c = false,
            required: d = false,
            registry: u,
            onBlur: h,
            onFocus: m,
            idPrefix: p,
            idSeparator: f = "_",
            rawErrors: g,
          } = this.props;
          const { keyedFormData: S } = this.state;
          const v = e.title === undefined ? a : e.title;
          const { schemaUtils: x, formContext: b } = u;
          const C = (0, i.getUiOptions)(t);
          const k = y()(e.items) ? e.items : {};
          const F = x.retrieveSchema(k);
          const j = O(this.state.keyedFormData);
          const T = this.canAddItem(j);
          const D = {
            canAdd: T,
            items: S.map((e, n) => {
              const { key: i, item: o } = e;
              const l = o;
              const d = x.retrieveSchema(k, l);
              const u = r ? r[n] : undefined;
              const y = s.$id + f + n;
              const v = x.toIdSchema(d, y, l, p, f);
              return this.renderArrayFieldItem({
                key: i,
                index: n,
                name: a && `${a}-${n}`,
                canAdd: T,
                canMoveUp: n > 0,
                canMoveDown: n < j.length - 1,
                itemSchema: d,
                itemIdSchema: v,
                itemErrorSchema: u,
                itemData: l,
                itemUiSchema: t.items,
                autofocus: c && n === 0,
                onBlur: h,
                onFocus: m,
                rawErrors: g,
                totalItems: S.length,
              });
            }),
            className: `field field-array field-array-of-${F.type}`,
            disabled: o,
            idSchema: s,
            uiSchema: t,
            onAddClick: this.onAddClick,
            readonly: l,
            required: d,
            schema: e,
            title: v,
            formContext: b,
            formData: j,
            rawErrors: g,
            registry: u,
          };
          const w = (0, i.getTemplate)("ArrayFieldTemplate", u, C);
          return (0, n.jsx)(w, { ...D });
        }
        renderCustomWidget() {
          var e;
          const {
            schema: t,
            idSchema: r,
            uiSchema: s,
            disabled: a = false,
            readonly: o = false,
            autofocus: l = false,
            required: c = false,
            hideError: d,
            placeholder: u,
            onBlur: h,
            onFocus: m,
            formData: p = [],
            registry: f,
            rawErrors: g,
            name: y,
          } = this.props;
          const { widgets: S, formContext: v, globalUiOptions: x, schemaUtils: b } = f;
          const { widget: C, title: k, ...F } = (0, i.getUiOptions)(s, x);
          const j = (0, i.getWidget)(t, C, S);
          const O = (e = k !== null && k !== void 0 ? k : t.title) !== null && e !== void 0 ? e : y;
          const T = b.getDisplayLabel(t, s, x);
          return (0, n.jsx)(j, {
            id: r.$id,
            name: y,
            multiple: true,
            onChange: this.onSelectChange,
            onBlur: h,
            onFocus: m,
            options: F,
            schema: t,
            uiSchema: s,
            registry: f,
            value: p,
            disabled: a,
            readonly: o,
            hideError: d,
            required: c,
            label: O,
            hideLabel: !T,
            placeholder: u,
            formContext: v,
            autofocus: l,
            rawErrors: g,
          });
        }
        renderMultiSelect() {
          var e;
          const {
            schema: t,
            idSchema: r,
            uiSchema: s,
            formData: a = [],
            disabled: o = false,
            readonly: l = false,
            autofocus: c = false,
            required: d = false,
            placeholder: u,
            onBlur: h,
            onFocus: m,
            registry: p,
            rawErrors: f,
            name: g,
          } = this.props;
          const { widgets: y, schemaUtils: S, formContext: v, globalUiOptions: x } = p;
          const b = S.retrieveSchema(t.items, a);
          const C = (0, i.optionsList)(b);
          const { widget: k = "select", title: F, ...j } = (0, i.getUiOptions)(s, x);
          const O = (0, i.getWidget)(t, k, y);
          const T = (e = F !== null && F !== void 0 ? F : t.title) !== null && e !== void 0 ? e : g;
          const D = S.getDisplayLabel(t, s, x);
          return (0, n.jsx)(O, {
            id: r.$id,
            name: g,
            multiple: true,
            onChange: this.onSelectChange,
            onBlur: h,
            onFocus: m,
            options: { ...j, enumOptions: C },
            schema: t,
            uiSchema: s,
            registry: p,
            value: a,
            disabled: o,
            readonly: l,
            required: d,
            label: T,
            hideLabel: !D,
            placeholder: u,
            formContext: v,
            autofocus: c,
            rawErrors: f,
          });
        }
        renderFiles() {
          var e;
          const {
            schema: t,
            uiSchema: r,
            idSchema: s,
            name: a,
            disabled: o = false,
            readonly: l = false,
            autofocus: c = false,
            required: d = false,
            onBlur: u,
            onFocus: h,
            registry: m,
            formData: p = [],
            rawErrors: f,
          } = this.props;
          const { widgets: g, formContext: y, globalUiOptions: S, schemaUtils: v } = m;
          const { widget: x = "files", title: b, ...C } = (0, i.getUiOptions)(r, S);
          const k = (0, i.getWidget)(t, x, g);
          const F = (e = b !== null && b !== void 0 ? b : t.title) !== null && e !== void 0 ? e : a;
          const j = v.getDisplayLabel(t, r, S);
          return (0, n.jsx)(k, {
            options: C,
            id: s.$id,
            name: a,
            multiple: true,
            onChange: this.onSelectChange,
            onBlur: u,
            onFocus: h,
            schema: t,
            uiSchema: r,
            value: p,
            disabled: o,
            readonly: l,
            required: d,
            registry: m,
            formContext: y,
            autofocus: c,
            rawErrors: f,
            label: F,
            hideLabel: !j,
          });
        }
        renderFixedArray() {
          const {
            schema: e,
            uiSchema: t = {},
            formData: r = [],
            errorSchema: s,
            idPrefix: a,
            idSeparator: o = "_",
            idSchema: l,
            name: c,
            disabled: d = false,
            readonly: u = false,
            autofocus: h = false,
            required: m = false,
            registry: p,
            onBlur: f,
            onFocus: g,
            rawErrors: S,
          } = this.props;
          const { keyedFormData: v } = this.state;
          let { formData: x = [] } = this.props;
          const b = e.title || c;
          const C = (0, i.getUiOptions)(t);
          const { schemaUtils: k, formContext: F } = p;
          const j = y()(e.items) ? e.items : [];
          const O = j.map((e, t) => k.retrieveSchema(e, r[t]));
          const T = y()(e.additionalItems) ? k.retrieveSchema(e.additionalItems, r) : null;
          if (!x || x.length < O.length) {
            x = x || [];
            x = x.concat(new Array(O.length - x.length));
          }
          const D = this.canAddItem(x) && !!T;
          const w = {
            canAdd: D,
            className: "field field-array field-array-fixed-items",
            disabled: d,
            idSchema: l,
            formData: r,
            items: v.map((r, n) => {
              const { key: i, item: d } = r;
              const u = d;
              const m = n >= O.length;
              const p = (m && y()(e.additionalItems) ? k.retrieveSchema(e.additionalItems, u) : O[n]) || {};
              const b = l.$id + o + n;
              const C = k.toIdSchema(p, b, u, a, o);
              const F = m ? t.additionalItems || {} : Array.isArray(t.items) ? t.items[n] : t.items || {};
              const j = s ? s[n] : undefined;
              return this.renderArrayFieldItem({
                key: i,
                index: n,
                name: c && `${c}-${n}`,
                canAdd: D,
                canRemove: m,
                canMoveUp: n >= O.length + 1,
                canMoveDown: m && n < x.length - 1,
                itemSchema: p,
                itemData: u,
                itemUiSchema: F,
                itemIdSchema: C,
                itemErrorSchema: j,
                autofocus: h && n === 0,
                onBlur: f,
                onFocus: g,
                rawErrors: S,
                totalItems: v.length,
              });
            }),
            onAddClick: this.onAddClick,
            readonly: u,
            required: m,
            registry: p,
            schema: e,
            uiSchema: t,
            title: b,
            formContext: F,
            rawErrors: S,
          };
          const I = (0, i.getTemplate)("ArrayFieldTemplate", p, C);
          return (0, n.jsx)(I, { ...w });
        }
        renderArrayFieldItem(e) {
          const {
            key: t,
            index: r,
            name: s,
            canAdd: a,
            canRemove: o = true,
            canMoveUp: l,
            canMoveDown: c,
            itemSchema: d,
            itemData: u,
            itemUiSchema: h,
            itemIdSchema: m,
            itemErrorSchema: p,
            autofocus: f,
            onBlur: g,
            onFocus: y,
            rawErrors: S,
            totalItems: v,
          } = e;
          const { disabled: x, hideError: b, idPrefix: C, idSeparator: k, readonly: F, uiSchema: j, registry: O, formContext: T } = this.props;
          const {
            fields: { ArraySchemaField: D, SchemaField: w },
            globalUiOptions: I,
          } = O;
          const _ = D || w;
          const { orderable: E = true, removable: A = true, copyable: N = false } = (0, i.getUiOptions)(j, I);
          const B = { moveUp: E && l, moveDown: E && c, copy: N && a, remove: A && o, toolbar: false };
          B.toolbar = Object.keys(B).some((e) => B[e]);
          return {
            children: (0, n.jsx)(_, {
              name: s,
              index: r,
              schema: d,
              uiSchema: h,
              formData: u,
              formContext: T,
              errorSchema: p,
              idPrefix: C,
              idSeparator: k,
              idSchema: m,
              required: this.isItemRequired(d),
              onChange: this.onChangeForIndex(r),
              onBlur: g,
              onFocus: y,
              registry: O,
              disabled: x,
              readonly: F,
              hideError: b,
              autofocus: f,
              rawErrors: S,
            }),
            className: "array-item",
            disabled: x,
            canAdd: a,
            hasCopy: B.copy,
            hasToolbar: B.toolbar,
            hasMoveUp: B.moveUp,
            hasMoveDown: B.moveDown,
            hasRemove: B.remove,
            index: r,
            totalItems: v,
            key: t,
            onAddIndexClick: this.onAddIndexClick,
            onCopyIndexClick: this.onCopyIndexClick,
            onDropIndexClick: this.onDropIndexClick,
            onReorderClick: this.onReorderClick,
            readonly: F,
            registry: O,
            schema: d,
            uiSchema: h,
          };
        }
      }
      const D = T;
      function w(e) {
        var t, r;
        const {
          schema: s,
          name: a,
          uiSchema: o,
          idSchema: l,
          formData: c,
          registry: d,
          required: u,
          disabled: h,
          readonly: m,
          hideError: p,
          autofocus: f,
          onChange: g,
          onFocus: S,
          onBlur: v,
          rawErrors: x,
        } = e;
        const { title: b } = s;
        const { widgets: C, formContext: k, translateString: F, globalUiOptions: j } = d;
        const { widget: O = "checkbox", title: T, label: D = true, ...w } = (0, i.getUiOptions)(o, j);
        const I = (0, i.getWidget)(s, O, C);
        const _ = F(i.TranslatableString.YesLabel);
        const E = F(i.TranslatableString.NoLabel);
        let A;
        const N = (t = T !== null && T !== void 0 ? T : b) !== null && t !== void 0 ? t : a;
        if (Array.isArray(s.oneOf)) {
          A = (0, i.optionsList)({
            oneOf: s.oneOf
              .map((e) => {
                if (y()(e)) {
                  return { ...e, title: e.title || (e.const === true ? _ : E) };
                }
                return undefined;
              })
              .filter((e) => e),
          });
        } else {
          const e = s;
          const t = (r = s.enum) !== null && r !== void 0 ? r : [true, false];
          if (!e.enumNames && t.length === 2 && t.every((e) => typeof e === "boolean")) {
            A = [
              { value: t[0], label: t[0] ? _ : E },
              { value: t[1], label: t[1] ? _ : E },
            ];
          } else {
            A = (0, i.optionsList)({ enum: t, enumNames: e.enumNames });
          }
        }
        return (0, n.jsx)(I, {
          options: { ...w, enumOptions: A },
          schema: s,
          uiSchema: o,
          id: l.$id,
          name: a,
          onChange: g,
          onFocus: S,
          onBlur: v,
          label: N,
          hideLabel: !D,
          value: c,
          required: u,
          disabled: h,
          readonly: m,
          hideError: p,
          registry: d,
          formContext: k,
          autofocus: f,
          rawErrors: x,
        });
      }
      const I = w;
      var _ = r(57557);
      var E = r.n(_);
      class A extends s.Component {
        constructor(e) {
          super(e);
          this.onOptionChange = (e) => {
            const { selectedOption: t, retrievedOptions: r } = this.state;
            const { formData: n, onChange: s, registry: i } = this.props;
            const { schemaUtils: a } = i;
            const o = e !== undefined ? parseInt(e, 10) : -1;
            if (o === t) {
              return;
            }
            const l = o >= 0 ? r[o] : undefined;
            const c = t >= 0 ? r[t] : undefined;
            let d = a.sanitizeDataForNewSchema(l, c, n);
            if (d && l) {
              d = a.getDefaultFormState(l, d, "excludeObjectChildren");
            }
            s(d, undefined, this.getFieldId());
            this.setState({ selectedOption: o });
          };
          const {
            formData: t,
            options: r,
            registry: { schemaUtils: n },
          } = this.props;
          const s = r.map((e) => n.retrieveSchema(e, t));
          this.state = { retrievedOptions: s, selectedOption: this.getMatchingOption(0, t, s) };
        }
        componentDidUpdate(e, t) {
          const { formData: r, options: n, idSchema: s } = this.props;
          const { selectedOption: a } = this.state;
          let o = this.state;
          if (!(0, i.deepEquals)(e.options, n)) {
            const {
              registry: { schemaUtils: e },
            } = this.props;
            const t = n.map((t) => e.retrieveSchema(t, r));
            o = { selectedOption: a, retrievedOptions: t };
          }
          if (!(0, i.deepEquals)(r, e.formData) && s.$id === e.idSchema.$id) {
            const { retrievedOptions: e } = o;
            const n = this.getMatchingOption(a, r, e);
            if (t && n !== a) {
              o = { selectedOption: n, retrievedOptions: e };
            }
          }
          if (o !== this.state) {
            this.setState(o);
          }
        }
        getMatchingOption(e, t, r) {
          const {
            schema: n,
            registry: { schemaUtils: s },
          } = this.props;
          const a = (0, i.getDiscriminatorFieldFromSchema)(n);
          const o = s.getClosestMatchingOption(t, r, e, a);
          return o;
        }
        getFieldId() {
          const { idSchema: e, schema: t } = this.props;
          return `${e.$id}${t.oneOf ? "__oneof_select" : "__anyof_select"}`;
        }
        render() {
          const {
            name: e,
            disabled: t = false,
            errorSchema: r = {},
            formContext: s,
            onBlur: a,
            onFocus: l,
            registry: d,
            schema: u,
            uiSchema: h,
          } = this.props;
          const { widgets: m, fields: p, translateString: f, globalUiOptions: g, schemaUtils: y } = d;
          const { SchemaField: S } = p;
          const { selectedOption: v, retrievedOptions: x } = this.state;
          const { widget: b = "select", placeholder: C, autofocus: k, autocomplete: F, title: j = u.title, ...O } = (0, i.getUiOptions)(h, g);
          const T = (0, i.getWidget)({ type: "number" }, b, m);
          const D = o()(r, i.ERRORS_KEY, []);
          const w = E()(r, [i.ERRORS_KEY]);
          const I = y.getDisplayLabel(u, h, g);
          const _ = v >= 0 ? x[v] || null : null;
          let A;
          if (_) {
            const { required: e } = u;
            A = e ? (0, i.mergeSchemas)({ required: e }, _) : _;
          }
          const N = j ? i.TranslatableString.TitleOptionPrefix : i.TranslatableString.OptionPrefix;
          const B = j ? [j] : [];
          const U = x.map((e, t) => ({ label: e.title || f(N, B.concat(String(t + 1))), value: t }));
          return (0, n.jsxs)("div", {
            className: "panel panel-default panel-body",
            children: [
              (0, n.jsx)("div", {
                className: "form-group",
                children: (0, n.jsx)(T, {
                  id: this.getFieldId(),
                  name: `${e}${u.oneOf ? "__oneof_select" : "__anyof_select"}`,
                  schema: { type: "number", default: 0 },
                  onChange: this.onOptionChange,
                  onBlur: a,
                  onFocus: l,
                  disabled: t || c()(U),
                  multiple: false,
                  rawErrors: D,
                  errorSchema: w,
                  value: v >= 0 ? v : undefined,
                  options: { enumOptions: U, ...O },
                  registry: d,
                  formContext: s,
                  placeholder: C,
                  autocomplete: F,
                  autofocus: k,
                  label: j !== null && j !== void 0 ? j : e,
                  hideLabel: !I,
                }),
              }),
              _ !== null && (0, n.jsx)(S, { ...this.props, schema: A }),
            ],
          });
        }
      }
      const N = A;
      const B = /\.([0-9]*0)*$/;
      const U = /[0.]0*$/;
      function $(e) {
        const { registry: t, onChange: r, formData: a, value: o } = e;
        const [l, c] = (0, s.useState)(o);
        const { StringField: d } = t.fields;
        let u = a;
        const h = (0, s.useCallback)(
          (e) => {
            c(e);
            if (`${e}`.charAt(0) === ".") {
              e = `0${e}`;
            }
            const t = typeof e === "string" && e.match(B) ? (0, i.asNumber)(e.replace(U, "")) : (0, i.asNumber)(e);
            r(t);
          },
          [r]
        );
        if (typeof l === "string" && typeof u === "number") {
          const e = new RegExp(`${u}`.replace(".", "\\.") + "\\.?0*$");
          if (l.match(e)) {
            u = l;
          }
        }
        return (0, n.jsx)(d, { ...e, formData: u, onChange: h });
      }
      const R = $;
      function P() {
        return (
          (P = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          P.apply(this, arguments)
        );
      }
      const L = ["children", "options"],
        M = [
          "allowFullScreen",
          "allowTransparency",
          "autoComplete",
          "autoFocus",
          "autoPlay",
          "cellPadding",
          "cellSpacing",
          "charSet",
          "className",
          "classId",
          "colSpan",
          "contentEditable",
          "contextMenu",
          "crossOrigin",
          "encType",
          "formAction",
          "formEncType",
          "formMethod",
          "formNoValidate",
          "formTarget",
          "frameBorder",
          "hrefLang",
          "inputMode",
          "keyParams",
          "keyType",
          "marginHeight",
          "marginWidth",
          "maxLength",
          "mediaGroup",
          "minLength",
          "noValidate",
          "radioGroup",
          "readOnly",
          "rowSpan",
          "spellCheck",
          "srcDoc",
          "srcLang",
          "srcSet",
          "tabIndex",
          "useMap",
        ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: "htmlFor" }),
        q = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" },
        W = ["style", "script"],
        V = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
        H = /mailto:/i,
        K = /\n{2,}$/,
        G = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
        Y = /^ *> ?/gm,
        z = /^ {2,}\n/,
        X = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
        Z = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
        J = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
        Q = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        ee = /^(?:\n *)*\n/,
        te = /\r\n?/g,
        re = /^\[\^([^\]]+)](:.*)\n/,
        ne = /^\[\^([^\]]+)]/,
        se = /\f/g,
        ie = /^\s*?\[(x|\s)\]/,
        ae = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        oe = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        le = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
        ce = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
        de = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
        ue = /^<!--[\s\S]*?(?:-->)/,
        he = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
        me = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
        pe = /^\{.*\}$/,
        fe = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        ge = /^<([^ >]+@[^ >]+)>/,
        ye = /^<([^ >]+:\/[^ >]+)>/,
        Se = /-([a-z])?/gi,
        ve = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
        xe = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
        be = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
        Ce = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
        ke = /(\[|\])/g,
        Fe = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
        je = /\t/g,
        Oe = /^ *\| */,
        Te = /(^ *\||\| *$)/g,
        De = / *$/,
        we = /^ *:-+: *$/,
        Ie = /^ *:-+ *$/,
        _e = /^ *-+: *$/,
        Ee = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
        Ae = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
        Ne = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
        Be = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
        Ue = /^\\([^0-9A-Za-z\s])/,
        $e = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
        Re = /^\n+/,
        Pe = /^([ \t]*)/,
        Le = /\\([^\\])/g,
        Me = / *\n+$/,
        qe = /(?:^|\n)( *)$/,
        We = "(?:\\d+\\.)",
        Ve = "(?:[*+-])";
      function He(e) {
        return "( *)(" + (1 === e ? We : Ve) + ") +";
      }
      const Ke = He(1),
        Ge = He(2);
      function Ye(e) {
        return new RegExp("^" + (1 === e ? Ke : Ge));
      }
      const ze = Ye(1),
        Xe = Ye(2);
      function Ze(e) {
        return new RegExp("^" + (1 === e ? Ke : Ge) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? We : Ve) + " )[^\\n]*)*(\\n|$)", "gm");
      }
      const Je = Ze(1),
        Qe = Ze(2);
      function et(e) {
        const t = 1 === e ? We : Ve;
        return new RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
      }
      const tt = et(1),
        rt = et(2);
      function nt(e, t) {
        const r = 1 === t,
          n = r ? tt : rt,
          s = r ? Je : Qe,
          i = r ? ze : Xe;
        return {
          t(e, t, r) {
            const s = qe.exec(r);
            return s && (t.o || (!t._ && !t.u)) ? n.exec((e = s[1] + e)) : null;
          },
          i: Dt.HIGH,
          l(e, t, n) {
            const a = r ? +e[2] : void 0,
              o = e[0].replace(K, "\n").match(s);
            let l = !1;
            return {
              p: o.map(function (e, r) {
                const s = i.exec(e)[0].length,
                  a = new RegExp("^ {1," + s + "}", "gm"),
                  c = e.replace(a, "").replace(i, ""),
                  d = r === o.length - 1,
                  u = -1 !== c.indexOf("\n\n") || (d && l);
                l = u;
                const h = n._,
                  m = n.o;
                let p;
                (n.o = !0), u ? ((n._ = !1), (p = c.replace(Me, "\n\n"))) : ((n._ = !0), (p = c.replace(Me, "")));
                const f = t(p, n);
                return (n._ = h), (n.o = m), f;
              }),
              m: r,
              g: a,
            };
          },
          h: (t, r, n) =>
            e(
              t.m ? "ol" : "ul",
              { key: n.k, start: t.g },
              t.p.map(function (t, s) {
                return e("li", { key: s }, r(t, n));
              })
            ),
        };
      }
      const st = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        it = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        at = [G, Z, J, ae, le, oe, ue, ve, Je, tt, Qe, rt],
        ot = [...at, /^[^\n]+(?:  \n|\n{2,})/, ce, me];
      function lt(e) {
        return e
          .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a")
          .replace(/[çÇ]/g, "c")
          .replace(/[ðÐ]/g, "d")
          .replace(/[ÈÉÊËéèêë]/g, "e")
          .replace(/[ÏïÎîÍíÌì]/g, "i")
          .replace(/[Ññ]/g, "n")
          .replace(/[øØœŒÕõÔôÓóÒò]/g, "o")
          .replace(/[ÜüÛûÚúÙù]/g, "u")
          .replace(/[ŸÿÝý]/g, "y")
          .replace(/[^a-z0-9- ]/gi, "")
          .replace(/ /gi, "-")
          .toLowerCase();
      }
      function ct(e) {
        return _e.test(e) ? "right" : we.test(e) ? "center" : Ie.test(e) ? "left" : null;
      }
      function dt(e, t, r) {
        const n = r.$;
        r.$ = !0;
        const s = t(e.trim(), r);
        r.$ = n;
        let i = [[]];
        return (
          s.forEach(function (e, t) {
            "tableSeparator" === e.type
              ? 0 !== t && t !== s.length - 1 && i.push([])
              : ("text" !== e.type || (null != s[t + 1] && "tableSeparator" !== s[t + 1].type) || (e.v = e.v.replace(De, "")),
                i[i.length - 1].push(e));
          }),
          i
        );
      }
      function ut(e, t, r) {
        r._ = !0;
        const n = dt(e[1], t, r),
          s = e[2].replace(Te, "").split("|").map(ct),
          i = (function (e, t, r) {
            return e
              .trim()
              .split("\n")
              .map(function (e) {
                return dt(e, t, r);
              });
          })(e[3], t, r);
        return (r._ = !1), { S: s, A: i, L: n, type: "table" };
      }
      function ht(e, t) {
        return null == e.S[t] ? {} : { textAlign: e.S[t] };
      }
      function mt(e) {
        return function (t, r) {
          return r._ ? e.exec(t) : null;
        };
      }
      function pt(e) {
        return function (t, r) {
          return r._ || r.u ? e.exec(t) : null;
        };
      }
      function ft(e) {
        return function (t, r) {
          return r._ || r.u ? null : e.exec(t);
        };
      }
      function gt(e) {
        return function (t) {
          return e.exec(t);
        };
      }
      function yt(e, t, r) {
        if (t._ || t.u) return null;
        if (r && !r.endsWith("\n")) return null;
        let n = "";
        e.split("\n").every((e) => !at.some((t) => t.test(e)) && ((n += e + "\n"), e.trim()));
        const s = n.trimEnd();
        return "" == s ? null : [n, s];
      }
      function St(e) {
        try {
          if (
            decodeURIComponent(e)
              .replace(/[^A-Za-z0-9/:]/g, "")
              .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
          )
            return;
        } catch (e) {
          return null;
        }
        return e;
      }
      function vt(e) {
        return e.replace(Le, "$1");
      }
      function xt(e, t, r) {
        const n = r._ || !1,
          s = r.u || !1;
        (r._ = !0), (r.u = !0);
        const i = e(t, r);
        return (r._ = n), (r.u = s), i;
      }
      function bt(e, t, r) {
        const n = r._ || !1,
          s = r.u || !1;
        (r._ = !1), (r.u = !0);
        const i = e(t, r);
        return (r._ = n), (r.u = s), i;
      }
      function Ct(e, t, r) {
        return (r._ = !1), e(t, r);
      }
      const kt = (e, t, r) => ({ v: xt(t, e[1], r) });
      function Ft() {
        return {};
      }
      function jt() {
        return null;
      }
      function Ot(...e) {
        return e.filter(Boolean).join(" ");
      }
      function Tt(e, t, r) {
        let n = e;
        const s = t.split(".");
        for (; s.length && ((n = n[s[0]]), void 0 !== n); ) s.shift();
        return n || r;
      }
      var Dt;
      function wt(e, t = {}) {
        (t.overrides = t.overrides || {}),
          (t.slugify = t.slugify || lt),
          (t.namedCodesToUnicode = t.namedCodesToUnicode ? P({}, q, t.namedCodesToUnicode) : q);
        const r = t.createElement || s.createElement;
        function n(e, n, ...s) {
          const i = Tt(t.overrides, `${e}.props`, {});
          return r(
            (function (e, t) {
              const r = Tt(t, e);
              return r ? ("function" == typeof r || ("object" == typeof r && "render" in r) ? r : Tt(t, `${e}.component`, e)) : e;
            })(e, t.overrides),
            P({}, n, i, { className: Ot(null == n ? void 0 : n.className, i.className) || void 0 }),
            ...s
          );
        }
        function i(e) {
          let r = !1;
          t.forceInline ? (r = !0) : t.forceBlock || (r = !1 === Fe.test(e));
          const i = u(d(r ? e : `${e.trimEnd().replace(Re, "")}\n\n`, { _: r }));
          for (; "string" == typeof i[i.length - 1] && !i[i.length - 1].trim(); ) i.pop();
          if (null === t.wrapper) return i;
          const a = t.wrapper || (r ? "span" : "div");
          let o;
          if (i.length > 1 || t.forceWrapper) o = i;
          else {
            if (1 === i.length) return (o = i[0]), "string" == typeof o ? n("span", { key: "outer" }, o) : o;
            o = null;
          }
          return s.createElement(a, { key: "outer" }, o);
        }
        function a(e) {
          const t = e.match(V);
          return t
            ? t.reduce(function (e, t, r) {
                const n = t.indexOf("=");
                if (-1 !== n) {
                  const a = (function (e) {
                      return (
                        -1 !== e.indexOf("-") &&
                          null === e.match(he) &&
                          (e = e.replace(Se, function (e, t) {
                            return t.toUpperCase();
                          })),
                        e
                      );
                    })(t.slice(0, n)).trim(),
                    o = (function (e) {
                      const t = e[0];
                      return ('"' === t || "'" === t) && e.length >= 2 && e[e.length - 1] === t ? e.slice(1, -1) : e;
                    })(t.slice(n + 1).trim()),
                    l = M[a] || a,
                    c = (e[l] = (function (e, t) {
                      return "style" === e
                        ? t.split(/;\s?/).reduce(function (e, t) {
                            const r = t.slice(0, t.indexOf(":"));
                            return (e[r.replace(/(-[a-z])/g, (e) => e[1].toUpperCase())] = t.slice(r.length + 1).trim()), e;
                          }, {})
                        : "href" === e
                          ? St(t)
                          : (t.match(pe) && (t = t.slice(1, t.length - 1)), "true" === t || ("false" !== t && t));
                    })(a, o));
                  "string" == typeof c && (ce.test(c) || me.test(c)) && (e[l] = s.cloneElement(i(c.trim()), { key: r }));
                } else "style" !== t && (e[M[t] || t] = !0);
                return e;
              }, {})
            : null;
        }
        const o = [],
          l = {},
          c = {
            blockQuote: {
              t: ft(G),
              i: Dt.HIGH,
              l: (e, t, r) => ({ v: t(e[0].replace(Y, ""), r) }),
              h: (e, t, r) => n("blockquote", { key: r.k }, t(e.v, r)),
            },
            breakLine: { t: gt(z), i: Dt.HIGH, l: Ft, h: (e, t, r) => n("br", { key: r.k }) },
            breakThematic: { t: ft(X), i: Dt.HIGH, l: Ft, h: (e, t, r) => n("hr", { key: r.k }) },
            codeBlock: {
              t: ft(J),
              i: Dt.MAX,
              l: (e) => ({ v: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""), M: void 0 }),
              h: (e, t, r) => n("pre", { key: r.k }, n("code", P({}, e.O, { className: e.M ? `lang-${e.M}` : "" }), e.v)),
            },
            codeFenced: { t: ft(Z), i: Dt.MAX, l: (e) => ({ O: a(e[3] || ""), v: e[4], M: e[2] || void 0, type: "codeBlock" }) },
            codeInline: { t: pt(Q), i: Dt.LOW, l: (e) => ({ v: e[2] }), h: (e, t, r) => n("code", { key: r.k }, e.v) },
            footnote: { t: ft(re), i: Dt.MAX, l: (e) => (o.push({ I: e[2], j: e[1] }), {}), h: jt },
            footnoteReference: {
              t: mt(ne),
              i: Dt.HIGH,
              l: (e) => ({ v: e[1], B: `#${t.slugify(e[1])}` }),
              h: (e, t, r) => n("a", { key: r.k, href: St(e.B) }, n("sup", { key: r.k }, e.v)),
            },
            gfmTask: {
              t: mt(ie),
              i: Dt.HIGH,
              l: (e) => ({ R: "x" === e[1].toLowerCase() }),
              h: (e, t, r) => n("input", { checked: e.R, key: r.k, readOnly: !0, type: "checkbox" }),
            },
            heading: {
              t: ft(t.enforceAtxHeadings ? oe : ae),
              i: Dt.HIGH,
              l: (e, r, n) => ({ v: xt(r, e[2], n), T: t.slugify(e[2]), C: e[1].length }),
              h: (e, t, r) => n(`h${e.C}`, { id: e.T, key: r.k }, t(e.v, r)),
            },
            headingSetext: { t: ft(le), i: Dt.MAX, l: (e, t, r) => ({ v: xt(t, e[1], r), C: "=" === e[2] ? 1 : 2, type: "heading" }) },
            htmlComment: { t: gt(ue), i: Dt.HIGH, l: () => ({}), h: jt },
            image: {
              t: pt(it),
              i: Dt.HIGH,
              l: (e) => ({ D: e[1], B: vt(e[2]), F: e[3] }),
              h: (e, t, r) => n("img", { key: r.k, alt: e.D || void 0, title: e.F || void 0, src: St(e.B) }),
            },
            link: {
              t: mt(st),
              i: Dt.LOW,
              l: (e, t, r) => ({ v: bt(t, e[1], r), B: vt(e[2]), F: e[3] }),
              h: (e, t, r) => n("a", { key: r.k, href: St(e.B), title: e.F }, t(e.v, r)),
            },
            linkAngleBraceStyleDetector: { t: mt(ye), i: Dt.MAX, l: (e) => ({ v: [{ v: e[1], type: "text" }], B: e[1], type: "link" }) },
            linkBareUrlDetector: {
              t: (e, t) => (t.N ? null : mt(fe)(e, t)),
              i: Dt.MAX,
              l: (e) => ({ v: [{ v: e[1], type: "text" }], B: e[1], F: void 0, type: "link" }),
            },
            linkMailtoDetector: {
              t: mt(ge),
              i: Dt.MAX,
              l(e) {
                let t = e[1],
                  r = e[1];
                return H.test(r) || (r = "mailto:" + r), { v: [{ v: t.replace("mailto:", ""), type: "text" }], B: r, type: "link" };
              },
            },
            orderedList: nt(n, 1),
            unorderedList: nt(n, 2),
            newlineCoalescer: { t: ft(ee), i: Dt.LOW, l: Ft, h: () => "\n" },
            paragraph: { t: yt, i: Dt.LOW, l: kt, h: (e, t, r) => n("p", { key: r.k }, t(e.v, r)) },
            ref: { t: mt(xe), i: Dt.MAX, l: (e) => ((l[e[1]] = { B: e[2], F: e[4] }), {}), h: jt },
            refImage: {
              t: pt(be),
              i: Dt.MAX,
              l: (e) => ({ D: e[1] || void 0, P: e[2] }),
              h: (e, t, r) => n("img", { key: r.k, alt: e.D, src: St(l[e.P].B), title: l[e.P].F }),
            },
            refLink: {
              t: mt(Ce),
              i: Dt.MAX,
              l: (e, t, r) => ({ v: t(e[1], r), Z: t(e[0].replace(ke, "\\$1"), r), P: e[2] }),
              h: (e, t, r) => (l[e.P] ? n("a", { key: r.k, href: St(l[e.P].B), title: l[e.P].F }, t(e.v, r)) : n("span", { key: r.k }, t(e.Z, r))),
            },
            table: {
              t: ft(ve),
              i: Dt.HIGH,
              l: ut,
              h: (e, t, r) =>
                n(
                  "table",
                  { key: r.k },
                  n(
                    "thead",
                    null,
                    n(
                      "tr",
                      null,
                      e.L.map(function (s, i) {
                        return n("th", { key: i, style: ht(e, i) }, t(s, r));
                      })
                    )
                  ),
                  n(
                    "tbody",
                    null,
                    e.A.map(function (s, i) {
                      return n(
                        "tr",
                        { key: i },
                        s.map(function (s, i) {
                          return n("td", { key: i, style: ht(e, i) }, t(s, r));
                        })
                      );
                    })
                  )
                ),
            },
            tableSeparator: {
              t: function (e, t) {
                return t.$ ? ((t._ = !0), Oe.exec(e)) : null;
              },
              i: Dt.HIGH,
              l: function () {
                return { type: "tableSeparator" };
              },
              h: () => " | ",
            },
            text: {
              t: gt($e),
              i: Dt.MIN,
              l: (e) => ({ v: e[0].replace(de, (e, r) => (t.namedCodesToUnicode[r] ? t.namedCodesToUnicode[r] : e)) }),
              h: (e) => e.v,
            },
            textBolded: { t: pt(Ee), i: Dt.MED, l: (e, t, r) => ({ v: t(e[2], r) }), h: (e, t, r) => n("strong", { key: r.k }, t(e.v, r)) },
            textEmphasized: { t: pt(Ae), i: Dt.LOW, l: (e, t, r) => ({ v: t(e[2], r) }), h: (e, t, r) => n("em", { key: r.k }, t(e.v, r)) },
            textEscaped: { t: pt(Ue), i: Dt.HIGH, l: (e) => ({ v: e[1], type: "text" }) },
            textMarked: { t: pt(Ne), i: Dt.LOW, l: kt, h: (e, t, r) => n("mark", { key: r.k }, t(e.v, r)) },
            textStrikethroughed: { t: pt(Be), i: Dt.LOW, l: kt, h: (e, t, r) => n("del", { key: r.k }, t(e.v, r)) },
          };
        !0 !== t.disableParsingRawHTML &&
          ((c.htmlBlock = {
            t: gt(ce),
            i: Dt.HIGH,
            l(e, t, r) {
              const [, n] = e[3].match(Pe),
                s = new RegExp(`^${n}`, "gm"),
                i = e[3].replace(s, ""),
                o = ((l = i), ot.some((e) => e.test(l)) ? Ct : xt);
              var l;
              const c = e[1].toLowerCase(),
                d = -1 !== W.indexOf(c);
              r.N = r.N || "a" === c;
              const u = d ? e[3] : o(t, i, r);
              return (r.N = !1), { O: a(e[2]), v: u, G: d, H: d ? c : e[1] };
            },
            h: (e, t, r) => n(e.H, P({ key: r.k }, e.O), e.G ? e.v : t(e.v, r)),
          }),
          (c.htmlSelfClosing = {
            t: gt(me),
            i: Dt.HIGH,
            l: (e) => ({ O: a(e[2] || ""), H: e[1] }),
            h: (e, t, r) => n(e.H, P({}, e.O, { key: r.k })),
          }));
        const d = (function (e) {
            let t = Object.keys(e);
            function r(n, s) {
              let i = [],
                a = "";
              for (; n; ) {
                let o = 0;
                for (; o < t.length; ) {
                  const l = t[o],
                    c = e[l],
                    d = c.t(n, s, a);
                  if (d) {
                    const e = d[0];
                    n = n.substring(e.length);
                    const t = c.l(d, r, s);
                    null == t.type && (t.type = l), i.push(t), (a = e);
                    break;
                  }
                  o++;
                }
              }
              return i;
            }
            return (
              t.sort(function (t, r) {
                let n = e[t].i,
                  s = e[r].i;
                return n !== s ? n - s : t < r ? -1 : 1;
              }),
              function (e, t) {
                return r(
                  (function (e) {
                    return e.replace(te, "\n").replace(se, "").replace(je, "    ");
                  })(e),
                  t
                );
              }
            );
          })(c),
          u =
            ((h = (function (e) {
              return function (t, r, n) {
                return e[t.type].h(t, r, n);
              };
            })(c)),
            function e(t, r = {}) {
              if (Array.isArray(t)) {
                const n = r.k,
                  s = [];
                let i = !1;
                for (let a = 0; a < t.length; a++) {
                  r.k = a;
                  const n = e(t[a], r),
                    o = "string" == typeof n;
                  o && i ? (s[s.length - 1] += n) : null !== n && s.push(n), (i = o);
                }
                return (r.k = n), s;
              }
              return h(t, e, r);
            });
        var h;
        const m = i(e);
        return o.length
          ? n(
              "div",
              null,
              m,
              n(
                "footer",
                { key: "footer" },
                o.map(function (e) {
                  return n("div", { id: t.slugify(e.j), key: e.j }, e.j, u(d(e.I, { _: !0 })));
                })
              )
            )
          : m;
      }
      !(function (e) {
        (e[(e.MAX = 0)] = "MAX"), (e[(e.HIGH = 1)] = "HIGH"), (e[(e.MED = 2)] = "MED"), (e[(e.LOW = 3)] = "LOW"), (e[(e.MIN = 4)] = "MIN");
      })(Dt || (Dt = {}));
      const It = (e) => {
        let { children: t, options: r } = e,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              s = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++) t.indexOf((r = i[n])) >= 0 || (s[r] = e[r]);
            return s;
          })(e, L);
        return s.cloneElement(wt(t, r), n);
      };
      var _t = r(18721);
      var Et = r.n(_t);
      var At = r(98601);
      var Nt = r.n(At);
      class Bt extends s.Component {
        constructor() {
          super(...arguments);
          this.state = { wasPropertyKeyModified: false, additionalProperties: {} };
          this.onPropertyChange =
            (e, t = false) =>
            (r, n, s) => {
              const { formData: i, onChange: a, errorSchema: o } = this.props;
              if (r === undefined && t) {
                r = "";
              }
              const l = { ...i, [e]: r };
              a(l, o && o && { ...o, [e]: n }, s);
            };
          this.onDropPropertyClick = (e) => (t) => {
            t.preventDefault();
            const { onChange: r, formData: n } = this.props;
            const s = { ...n };
            Nt()(s, e);
            r(s);
          };
          this.getAvailableKey = (e, t) => {
            const { uiSchema: r, registry: n } = this.props;
            const { duplicateKeySuffixSeparator: s = "-" } = (0, i.getUiOptions)(r, n.globalUiOptions);
            let a = 0;
            let o = e;
            while (Et()(t, o)) {
              o = `${e}${s}${++a}`;
            }
            return o;
          };
          this.onKeyChange = (e) => (t, r) => {
            if (e === t) {
              return;
            }
            const { formData: n, onChange: s, errorSchema: i } = this.props;
            t = this.getAvailableKey(t, n);
            const a = { ...n };
            const o = { [e]: t };
            const l = Object.keys(a).map((e) => {
              const t = o[e] || e;
              return { [t]: a[e] };
            });
            const c = Object.assign({}, ...l);
            this.setState({ wasPropertyKeyModified: true });
            s(c, i && i && { ...i, [t]: r });
          };
          this.handleAddClick = (e) => () => {
            if (!e.additionalProperties) {
              return;
            }
            const { formData: t, onChange: r, registry: n } = this.props;
            const s = { ...t };
            let a = undefined;
            if (y()(e.additionalProperties)) {
              a = e.additionalProperties.type;
              let r = e.additionalProperties;
              if (i.REF_KEY in r) {
                const { schemaUtils: e } = n;
                r = e.retrieveSchema({ $ref: r[i.REF_KEY] }, t);
                a = r.type;
              }
              if (!a && (i.ANY_OF_KEY in r || i.ONE_OF_KEY in r)) {
                a = "object";
              }
            }
            const o = this.getAvailableKey("newKey", s);
            v()(s, o, this.getDefaultValue(a));
            r(s);
          };
        }
        isRequired(e) {
          const { schema: t } = this.props;
          return Array.isArray(t.required) && t.required.indexOf(e) !== -1;
        }
        getDefaultValue(e) {
          const {
            registry: { translateString: t },
          } = this.props;
          switch (e) {
            case "array":
              return [];
            case "boolean":
              return false;
            case "null":
              return null;
            case "number":
              return 0;
            case "object":
              return {};
            case "string":
            default:
              return t(i.TranslatableString.NewStringDefault);
          }
        }
        render() {
          var e, t, r;
          const {
            schema: s,
            uiSchema: a = {},
            formData: l,
            errorSchema: c,
            idSchema: d,
            name: u,
            required: h = false,
            disabled: m = false,
            readonly: p = false,
            hideError: f,
            idPrefix: g,
            idSeparator: y,
            onBlur: S,
            onFocus: v,
            registry: x,
          } = this.props;
          const { fields: b, formContext: C, schemaUtils: k, translateString: F, globalUiOptions: j } = x;
          const { SchemaField: O } = b;
          const T = k.retrieveSchema(s, l);
          const D = (0, i.getUiOptions)(a, j);
          const { properties: w = {} } = T;
          const I = (t = (e = D.title) !== null && e !== void 0 ? e : T.title) !== null && t !== void 0 ? t : u;
          const _ = (r = D.description) !== null && r !== void 0 ? r : T.description;
          let E;
          try {
            const e = Object.keys(w);
            E = (0, i.orderProperties)(e, D.order);
          } catch (B) {
            return (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)("p", {
                  className: "config-error",
                  style: { color: "red" },
                  children: (0, n.jsx)(It, { children: F(i.TranslatableString.InvalidObjectField, [u || "root", B.message]) }),
                }),
                (0, n.jsx)("pre", { children: JSON.stringify(T) }),
              ],
            });
          }
          const A = (0, i.getTemplate)("ObjectFieldTemplate", x, D);
          const N = {
            title: D.label === false ? "" : I,
            description: D.label === false ? undefined : _,
            properties: E.map((e) => {
              const t = Et()(T, [i.PROPERTIES_KEY, e, i.ADDITIONAL_PROPERTY_FLAG]);
              const r = t ? a.additionalProperties : a[e];
              const s = (0, i.getUiOptions)(r).widget === "hidden";
              const u = o()(d, [e], {});
              return {
                content: (0, n.jsx)(
                  O,
                  {
                    name: e,
                    required: this.isRequired(e),
                    schema: o()(T, [i.PROPERTIES_KEY, e], {}),
                    uiSchema: r,
                    errorSchema: o()(c, e),
                    idSchema: u,
                    idPrefix: g,
                    idSeparator: y,
                    formData: o()(l, e),
                    formContext: C,
                    wasPropertyKeyModified: this.state.wasPropertyKeyModified,
                    onKeyChange: this.onKeyChange(e),
                    onChange: this.onPropertyChange(e, t),
                    onBlur: S,
                    onFocus: v,
                    registry: x,
                    disabled: m,
                    readonly: p,
                    hideError: f,
                    onDropPropertyClick: this.onDropPropertyClick,
                  },
                  e
                ),
                name: e,
                readonly: p,
                disabled: m,
                required: h,
                hidden: s,
              };
            }),
            readonly: p,
            disabled: m,
            required: h,
            idSchema: d,
            uiSchema: a,
            errorSchema: c,
            schema: T,
            formData: l,
            formContext: C,
            registry: x,
          };
          return (0, n.jsx)(A, { ...N, onAddClick: this.handleAddClick });
        }
      }
      const Ut = Bt;
      const $t = {
        array: "ArrayField",
        boolean: "BooleanField",
        integer: "NumberField",
        number: "NumberField",
        object: "ObjectField",
        string: "StringField",
        null: "NullField",
      };
      function Rt(e, t, r, s) {
        const a = t.field;
        const { fields: o, translateString: l } = s;
        if (typeof a === "function") {
          return a;
        }
        if (typeof a === "string" && a in o) {
          return o[a];
        }
        const c = (0, i.getSchemaType)(e);
        const d = Array.isArray(c) ? c[0] : c || "";
        const u = e.$id;
        let h = $t[d];
        if (u && u in o) {
          h = u;
        }
        if (!h && (e.anyOf || e.oneOf)) {
          return () => null;
        }
        return h in o
          ? o[h]
          : () => {
              const a = (0, i.getTemplate)("UnsupportedFieldTemplate", s, t);
              return (0, n.jsx)(a, { schema: e, idSchema: r, reason: l(i.TranslatableString.UnknownFieldType, [String(e.type)]), registry: s });
            };
      }
      function Pt(e) {
        const {
          schema: t,
          idSchema: r,
          uiSchema: a,
          formData: o,
          errorSchema: l,
          idPrefix: c,
          idSeparator: d,
          name: u,
          onChange: h,
          onKeyChange: m,
          onDropPropertyClick: p,
          required: f,
          registry: g,
          wasPropertyKeyModified: S = false,
        } = e;
        const { formContext: v, schemaUtils: x, globalUiOptions: b } = g;
        const C = (0, i.getUiOptions)(a, b);
        const k = (0, i.getTemplate)("FieldTemplate", g, C);
        const F = (0, i.getTemplate)("DescriptionFieldTemplate", g, C);
        const j = (0, i.getTemplate)("FieldHelpTemplate", g, C);
        const O = (0, i.getTemplate)("FieldErrorTemplate", g, C);
        const T = x.retrieveSchema(t, o);
        const D = r[i.ID_KEY];
        const w = (0, i.mergeObjects)(x.toIdSchema(T, D, o, c, d), r);
        const I = (0, s.useCallback)(
          (e, t, r) => {
            const n = r || D;
            return h(e, t, n);
          },
          [D, h]
        );
        const _ = Rt(T, C, w, g);
        const A = Boolean(e.disabled || C.disabled);
        const N = Boolean(e.readonly || C.readonly || e.schema.readOnly || T.readOnly);
        const B = C.hideError;
        const U = B === undefined ? e.hideError : Boolean(B);
        const $ = Boolean(e.autofocus || C.autofocus);
        if (Object.keys(T).length === 0) {
          return null;
        }
        const R = x.getDisplayLabel(T, a, b);
        const { __errors: P, ...L } = l || {};
        const M = E()(a, ["ui:classNames", "classNames", "ui:style"]);
        if (i.UI_OPTIONS_KEY in M) {
          M[i.UI_OPTIONS_KEY] = E()(M[i.UI_OPTIONS_KEY], ["classNames", "style"]);
        }
        const q = (0, n.jsx)(_, {
          ...e,
          onChange: I,
          idSchema: w,
          schema: T,
          uiSchema: M,
          disabled: A,
          readonly: N,
          hideError: U,
          autofocus: $,
          errorSchema: L,
          formContext: v,
          rawErrors: P,
        });
        const W = w[i.ID_KEY];
        let V;
        if (S) {
          V = u;
        } else {
          V = i.ADDITIONAL_PROPERTY_FLAG in T ? u : C.title || e.schema.title || T.title || u;
        }
        const H = C.description || e.schema.description || T.description || "";
        const K = C.enableMarkdownInDescription ? (0, n.jsx)(It, { children: H }) : H;
        const G = C.help;
        const Y = C.widget === "hidden";
        const z = ["form-group", "field", `field-${(0, i.getSchemaType)(T)}`];
        if (!U && P && P.length > 0) {
          z.push("field-error has-error has-danger");
        }
        if (a === null || a === void 0 ? void 0 : a.classNames) {
          if (false) {
          }
          z.push(a.classNames);
        }
        if (C.classNames) {
          z.push(C.classNames);
        }
        const X = (0, n.jsx)(j, { help: G, idSchema: w, schema: T, uiSchema: a, hasErrors: !U && P && P.length > 0, registry: g });
        const Z =
          U || ((T.anyOf || T.oneOf) && !x.isSelect(T))
            ? undefined
            : (0, n.jsx)(O, { errors: P, errorSchema: l, idSchema: w, schema: T, uiSchema: a, registry: g });
        const J = {
          description: (0, n.jsx)(F, { id: (0, i.descriptionId)(W), description: K, schema: T, uiSchema: a, registry: g }),
          rawDescription: H,
          help: X,
          rawHelp: typeof G === "string" ? G : undefined,
          errors: Z,
          rawErrors: U ? undefined : P,
          id: W,
          label: V,
          hidden: Y,
          onChange: h,
          onKeyChange: m,
          onDropPropertyClick: p,
          required: f,
          disabled: A,
          readonly: N,
          hideError: U,
          displayLabel: R,
          classNames: z.join(" ").trim(),
          style: C.style,
          formContext: v,
          formData: o,
          schema: T,
          uiSchema: a,
          registry: g,
        };
        const Q = g.fields.AnyOfField;
        const ee = g.fields.OneOfField;
        const te =
          (a === null || a === void 0 ? void 0 : a["ui:field"]) && (a === null || a === void 0 ? void 0 : a["ui:fieldReplacesAnyOrOneOf"]) === true;
        return (0, n.jsx)(k, {
          ...J,
          children: (0, n.jsxs)(n.Fragment, {
            children: [
              q,
              T.anyOf &&
                !te &&
                !x.isSelect(T) &&
                (0, n.jsx)(Q, {
                  name: u,
                  disabled: A,
                  readonly: N,
                  hideError: U,
                  errorSchema: l,
                  formData: o,
                  formContext: v,
                  idPrefix: c,
                  idSchema: w,
                  idSeparator: d,
                  onBlur: e.onBlur,
                  onChange: e.onChange,
                  onFocus: e.onFocus,
                  options: T.anyOf.map((e) => x.retrieveSchema(y()(e) ? e : {}, o)),
                  registry: g,
                  schema: T,
                  uiSchema: a,
                }),
              T.oneOf &&
                !te &&
                !x.isSelect(T) &&
                (0, n.jsx)(ee, {
                  name: u,
                  disabled: A,
                  readonly: N,
                  hideError: U,
                  errorSchema: l,
                  formData: o,
                  formContext: v,
                  idPrefix: c,
                  idSchema: w,
                  idSeparator: d,
                  onBlur: e.onBlur,
                  onChange: e.onChange,
                  onFocus: e.onFocus,
                  options: T.oneOf.map((e) => x.retrieveSchema(y()(e) ? e : {}, o)),
                  registry: g,
                  schema: T,
                  uiSchema: a,
                }),
            ],
          }),
        });
      }
      class Lt extends s.Component {
        shouldComponentUpdate(e) {
          return !(0, i.deepEquals)(this.props, e);
        }
        render() {
          return (0, n.jsx)(Pt, { ...this.props });
        }
      }
      const Mt = Lt;
      function qt(e) {
        var t;
        const {
          schema: r,
          name: s,
          uiSchema: a,
          idSchema: o,
          formData: l,
          required: c,
          disabled: d = false,
          readonly: u = false,
          autofocus: h = false,
          onChange: m,
          onBlur: p,
          onFocus: f,
          registry: g,
          rawErrors: y,
          hideError: S,
        } = e;
        const { title: v, format: x } = r;
        const { widgets: b, formContext: C, schemaUtils: k, globalUiOptions: F } = g;
        const j = k.isSelect(r) ? (0, i.optionsList)(r) : undefined;
        let O = j ? "select" : "text";
        if (x && (0, i.hasWidget)(r, x, b)) {
          O = x;
        }
        const { widget: T = O, placeholder: D = "", title: w, ...I } = (0, i.getUiOptions)(a);
        const _ = k.getDisplayLabel(r, a, F);
        const E = (t = w !== null && w !== void 0 ? w : v) !== null && t !== void 0 ? t : s;
        const A = (0, i.getWidget)(r, T, b);
        return (0, n.jsx)(A, {
          options: { ...I, enumOptions: j },
          schema: r,
          uiSchema: a,
          id: o.$id,
          name: s,
          label: E,
          hideLabel: !_,
          hideError: S,
          value: l,
          onChange: m,
          onBlur: p,
          onFocus: f,
          required: c,
          disabled: d,
          readonly: u,
          formContext: C,
          autofocus: h,
          registry: g,
          placeholder: D,
          rawErrors: y,
        });
      }
      const Wt = qt;
      function Vt(e) {
        const { formData: t, onChange: r } = e;
        (0, s.useEffect)(() => {
          if (t === undefined) {
            r(null);
          }
        }, [t, r]);
        return null;
      }
      const Ht = Vt;
      function Kt() {
        return {
          AnyOfField: N,
          ArrayField: D,
          BooleanField: I,
          NumberField: R,
          ObjectField: Ut,
          OneOfField: N,
          SchemaField: Mt,
          StringField: Wt,
          NullField: Ht,
        };
      }
      const Gt = Kt;
      function Yt(e) {
        const { idSchema: t, description: r, registry: s, schema: a, uiSchema: o } = e;
        const l = (0, i.getUiOptions)(o, s.globalUiOptions);
        const { label: c = true } = l;
        if (!r || !c) {
          return null;
        }
        const d = (0, i.getTemplate)("DescriptionFieldTemplate", s, l);
        return (0, n.jsx)(d, { id: (0, i.descriptionId)(t), description: r, schema: a, uiSchema: o, registry: s });
      }
      function zt(e) {
        const {
          children: t,
          className: r,
          disabled: s,
          hasToolbar: i,
          hasMoveDown: a,
          hasMoveUp: o,
          hasRemove: l,
          hasCopy: c,
          index: d,
          onCopyIndexClick: u,
          onDropIndexClick: h,
          onReorderClick: m,
          readonly: p,
          registry: f,
          uiSchema: g,
        } = e;
        const { CopyButton: y, MoveDownButton: S, MoveUpButton: v, RemoveButton: x } = f.templates.ButtonTemplates;
        const b = { flex: 1, paddingLeft: 6, paddingRight: 6, fontWeight: "bold" };
        return (0, n.jsxs)("div", {
          className: r,
          children: [
            (0, n.jsx)("div", { className: i ? "col-xs-9" : "col-xs-12", children: t }),
            i &&
              (0, n.jsx)("div", {
                className: "col-xs-3 array-item-toolbox",
                children: (0, n.jsxs)("div", {
                  className: "btn-group",
                  style: { display: "flex", justifyContent: "space-around" },
                  children: [
                    (o || a) && (0, n.jsx)(v, { style: b, disabled: s || p || !o, onClick: m(d, d - 1), uiSchema: g, registry: f }),
                    (o || a) && (0, n.jsx)(S, { style: b, disabled: s || p || !a, onClick: m(d, d + 1), uiSchema: g, registry: f }),
                    c && (0, n.jsx)(y, { style: b, disabled: s || p, onClick: u(d), uiSchema: g, registry: f }),
                    l && (0, n.jsx)(x, { style: b, disabled: s || p, onClick: h(d), uiSchema: g, registry: f }),
                  ],
                }),
              }),
          ],
        });
      }
      function Xt(e) {
        const {
          canAdd: t,
          className: r,
          disabled: s,
          idSchema: a,
          uiSchema: o,
          items: l,
          onAddClick: c,
          readonly: d,
          registry: u,
          required: h,
          schema: m,
          title: p,
        } = e;
        const f = (0, i.getUiOptions)(o);
        const g = (0, i.getTemplate)("ArrayFieldDescriptionTemplate", u, f);
        const y = (0, i.getTemplate)("ArrayFieldItemTemplate", u, f);
        const S = (0, i.getTemplate)("ArrayFieldTitleTemplate", u, f);
        const {
          ButtonTemplates: { AddButton: v },
        } = u.templates;
        return (0, n.jsxs)("fieldset", {
          className: r,
          id: a.$id,
          children: [
            (0, n.jsx)(S, { idSchema: a, title: f.title || p, required: h, schema: m, uiSchema: o, registry: u }),
            (0, n.jsx)(g, { idSchema: a, description: f.description || m.description, schema: m, uiSchema: o, registry: u }),
            (0, n.jsx)("div", { className: "row array-item-list", children: l && l.map(({ key: e, ...t }) => (0, n.jsx)(y, { ...t }, e)) }),
            t && (0, n.jsx)(v, { className: "array-item-add", onClick: c, disabled: s || d, uiSchema: o, registry: u }),
          ],
        });
      }
      function Zt(e) {
        const { idSchema: t, title: r, schema: s, uiSchema: a, required: o, registry: l } = e;
        const c = (0, i.getUiOptions)(a, l.globalUiOptions);
        const { label: d = true } = c;
        if (!r || !d) {
          return null;
        }
        const u = (0, i.getTemplate)("TitleFieldTemplate", l, c);
        return (0, n.jsx)(u, { id: (0, i.titleId)(t), title: r, required: o, schema: s, uiSchema: a, registry: l });
      }
      function Jt(e) {
        const {
          id: t,
          name: r,
          value: a,
          readonly: o,
          disabled: l,
          autofocus: c,
          onBlur: d,
          onFocus: u,
          onChange: h,
          onChangeOverride: m,
          options: p,
          schema: f,
          uiSchema: g,
          formContext: y,
          registry: S,
          rawErrors: v,
          type: x,
          hideLabel: b,
          hideError: C,
          ...k
        } = e;
        if (!t) {
          console.log("No id for", e);
          throw new Error(`no id for props ${JSON.stringify(e)}`);
        }
        const F = { ...k, ...(0, i.getInputProps)(f, x, p) };
        let j;
        if (F.type === "number" || F.type === "integer") {
          j = a || a === 0 ? a : "";
        } else {
          j = a == null ? "" : a;
        }
        const O = (0, s.useCallback)(({ target: { value: e } }) => h(e === "" ? p.emptyValue : e), [h, p]);
        const T = (0, s.useCallback)(({ target: { value: e } }) => d(t, e), [d, t]);
        const D = (0, s.useCallback)(({ target: { value: e } }) => u(t, e), [u, t]);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("input", {
              id: t,
              name: t,
              className: "form-control",
              readOnly: o,
              disabled: l,
              autoFocus: c,
              value: j,
              ...F,
              list: f.examples ? (0, i.examplesId)(t) : undefined,
              onChange: m || O,
              onBlur: T,
              onFocus: D,
              "aria-describedby": (0, i.ariaDescribedByIds)(t, !!f.examples),
            }),
            Array.isArray(f.examples) &&
              (0, n.jsx)(
                "datalist",
                {
                  id: (0, i.examplesId)(t),
                  children: f.examples
                    .concat(f.default && !f.examples.includes(f.default) ? [f.default] : [])
                    .map((e) => (0, n.jsx)("option", { value: e }, e)),
                },
                `datalist_${t}`
              ),
          ],
        });
      }
      function Qt({ uiSchema: e }) {
        const { submitText: t, norender: r, props: s = {} } = (0, i.getSubmitButtonOptions)(e);
        if (r) {
          return null;
        }
        return (0, n.jsx)("div", {
          children: (0, n.jsx)("button", { type: "submit", ...s, className: `btn btn-info ${s.className || ""}`, children: t }),
        });
      }
      function er(e) {
        const { iconType: t = "default", icon: r, className: s, uiSchema: i, registry: a, ...o } = e;
        return (0, n.jsx)("button", {
          type: "button",
          className: `btn btn-${t} ${s}`,
          ...o,
          children: (0, n.jsx)("i", { className: `glyphicon glyphicon-${r}` }),
        });
      }
      function tr(e) {
        const {
          registry: { translateString: t },
        } = e;
        return (0, n.jsx)(er, { title: t(i.TranslatableString.CopyButton), className: "array-item-copy", ...e, icon: "copy" });
      }
      function rr(e) {
        const {
          registry: { translateString: t },
        } = e;
        return (0, n.jsx)(er, { title: t(i.TranslatableString.MoveDownButton), className: "array-item-move-down", ...e, icon: "arrow-down" });
      }
      function nr(e) {
        const {
          registry: { translateString: t },
        } = e;
        return (0, n.jsx)(er, { title: t(i.TranslatableString.MoveUpButton), className: "array-item-move-up", ...e, icon: "arrow-up" });
      }
      function sr(e) {
        const {
          registry: { translateString: t },
        } = e;
        return (0, n.jsx)(er, {
          title: t(i.TranslatableString.RemoveButton),
          className: "array-item-remove",
          ...e,
          iconType: "danger",
          icon: "remove",
        });
      }
      function ir({ className: e, onClick: t, disabled: r, registry: s }) {
        const { translateString: a } = s;
        return (0, n.jsx)("div", {
          className: "row",
          children: (0, n.jsx)("p", {
            className: `col-xs-3 col-xs-offset-9 text-right ${e}`,
            children: (0, n.jsx)(er, {
              iconType: "info",
              icon: "plus",
              className: "btn-add col-xs-12",
              title: a(i.TranslatableString.AddButton),
              onClick: t,
              disabled: r,
              registry: s,
            }),
          }),
        });
      }
      function ar() {
        return { SubmitButton: Qt, AddButton: ir, CopyButton: tr, MoveDownButton: rr, MoveUpButton: nr, RemoveButton: sr };
      }
      const or = ar;
      function lr(e) {
        const { id: t, description: r } = e;
        if (!r) {
          return null;
        }
        if (typeof r === "string") {
          return (0, n.jsx)("p", { id: t, className: "field-description", children: r });
        } else {
          return (0, n.jsx)("div", { id: t, className: "field-description", children: r });
        }
      }
      function cr({ errors: e, registry: t }) {
        const { translateString: r } = t;
        return (0, n.jsxs)("div", {
          className: "panel panel-danger errors",
          children: [
            (0, n.jsx)("div", {
              className: "panel-heading",
              children: (0, n.jsx)("h3", { className: "panel-title", children: r(i.TranslatableString.ErrorsLabel) }),
            }),
            (0, n.jsx)("ul", {
              className: "list-group",
              children: e.map((e, t) => (0, n.jsx)("li", { className: "list-group-item text-danger", children: e.stack }, t)),
            }),
          ],
        });
      }
      const dr = "*";
      function ur(e) {
        const { label: t, required: r, id: s } = e;
        if (!t) {
          return null;
        }
        return (0, n.jsxs)("label", {
          className: "control-label",
          htmlFor: s,
          children: [t, r && (0, n.jsx)("span", { className: "required", children: dr })],
        });
      }
      function hr(e) {
        const {
          id: t,
          label: r,
          children: s,
          errors: a,
          help: o,
          description: l,
          hidden: c,
          required: d,
          displayLabel: u,
          registry: h,
          uiSchema: m,
        } = e;
        const p = (0, i.getUiOptions)(m);
        const f = (0, i.getTemplate)("WrapIfAdditionalTemplate", h, p);
        if (c) {
          return (0, n.jsx)("div", { className: "hidden", children: s });
        }
        return (0, n.jsxs)(f, { ...e, children: [u && (0, n.jsx)(ur, { label: r, required: d, id: t }), u && l ? l : null, s, a, o] });
      }
      const mr = hr;
      function pr(e) {
        const { errors: t = [], idSchema: r } = e;
        if (t.length === 0) {
          return null;
        }
        const s = (0, i.errorId)(r);
        return (0, n.jsx)("div", {
          children: (0, n.jsx)("ul", {
            id: s,
            className: "error-detail bs-callout bs-callout-info",
            children: t.filter((e) => !!e).map((e, t) => (0, n.jsx)("li", { className: "text-danger", children: e }, t)),
          }),
        });
      }
      function fr(e) {
        const { idSchema: t, help: r } = e;
        if (!r) {
          return null;
        }
        const s = (0, i.helpId)(t);
        if (typeof r === "string") {
          return (0, n.jsx)("p", { id: s, className: "help-block", children: r });
        }
        return (0, n.jsx)("div", { id: s, className: "help-block", children: r });
      }
      function gr(e) {
        const {
          description: t,
          disabled: r,
          formData: s,
          idSchema: a,
          onAddClick: o,
          properties: l,
          readonly: c,
          registry: d,
          required: u,
          schema: h,
          title: m,
          uiSchema: p,
        } = e;
        const f = (0, i.getUiOptions)(p);
        const g = (0, i.getTemplate)("TitleFieldTemplate", d, f);
        const y = (0, i.getTemplate)("DescriptionFieldTemplate", d, f);
        const {
          ButtonTemplates: { AddButton: S },
        } = d.templates;
        return (0, n.jsxs)("fieldset", {
          id: a.$id,
          children: [
            m && (0, n.jsx)(g, { id: (0, i.titleId)(a), title: m, required: u, schema: h, uiSchema: p, registry: d }),
            t && (0, n.jsx)(y, { id: (0, i.descriptionId)(a), description: t, schema: h, uiSchema: p, registry: d }),
            l.map((e) => e.content),
            (0, i.canExpand)(h, p, s) &&
              (0, n.jsx)(S, { className: "object-property-expand", onClick: o(h), disabled: r || c, uiSchema: p, registry: d }),
          ],
        });
      }
      const yr = "*";
      function Sr(e) {
        const { id: t, title: r, required: s } = e;
        return (0, n.jsxs)("legend", { id: t, children: [r, s && (0, n.jsx)("span", { className: "required", children: yr })] });
      }
      function vr(e) {
        const { schema: t, idSchema: r, reason: s, registry: a } = e;
        const { translateString: o } = a;
        let l = i.TranslatableString.UnsupportedField;
        const c = [];
        if (r && r.$id) {
          l = i.TranslatableString.UnsupportedFieldWithId;
          c.push(r.$id);
        }
        if (s) {
          l =
            l === i.TranslatableString.UnsupportedField
              ? i.TranslatableString.UnsupportedFieldWithReason
              : i.TranslatableString.UnsupportedFieldWithIdAndReason;
          c.push(s);
        }
        return (0, n.jsxs)("div", {
          className: "unsupported-field",
          children: [
            (0, n.jsx)("p", { children: (0, n.jsx)(It, { children: o(l, c) }) }),
            t && (0, n.jsx)("pre", { children: JSON.stringify(t, null, 2) }),
          ],
        });
      }
      const xr = vr;
      function br(e) {
        const {
          id: t,
          classNames: r,
          style: s,
          disabled: a,
          label: o,
          onKeyChange: l,
          onDropPropertyClick: c,
          readonly: d,
          required: u,
          schema: h,
          children: m,
          uiSchema: p,
          registry: f,
        } = e;
        const { templates: g, translateString: y } = f;
        const { RemoveButton: S } = g.ButtonTemplates;
        const v = y(i.TranslatableString.KeyLabel, [o]);
        const x = i.ADDITIONAL_PROPERTY_FLAG in h;
        if (!x) {
          return (0, n.jsx)("div", { className: r, style: s, children: m });
        }
        return (0, n.jsx)("div", {
          className: r,
          style: s,
          children: (0, n.jsxs)("div", {
            className: "row",
            children: [
              (0, n.jsx)("div", {
                className: "col-xs-5 form-additional",
                children: (0, n.jsxs)("div", {
                  className: "form-group",
                  children: [
                    (0, n.jsx)(ur, { label: v, required: u, id: `${t}-key` }),
                    (0, n.jsx)("input", {
                      className: "form-control",
                      type: "text",
                      id: `${t}-key`,
                      onBlur: (e) => l(e.target.value),
                      defaultValue: o,
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("div", { className: "form-additional form-group col-xs-5", children: m }),
              (0, n.jsx)("div", {
                className: "col-xs-2",
                children: (0, n.jsx)(S, {
                  className: "array-item-remove btn-block",
                  style: { border: "0" },
                  disabled: a || d,
                  onClick: c(o),
                  uiSchema: p,
                  registry: f,
                }),
              }),
            ],
          }),
        });
      }
      function Cr() {
        return {
          ArrayFieldDescriptionTemplate: Yt,
          ArrayFieldItemTemplate: zt,
          ArrayFieldTemplate: Xt,
          ArrayFieldTitleTemplate: Zt,
          ButtonTemplates: or(),
          BaseInputTemplate: Jt,
          DescriptionFieldTemplate: lr,
          ErrorListTemplate: cr,
          FieldTemplate: mr,
          FieldErrorTemplate: pr,
          FieldHelpTemplate: fr,
          ObjectFieldTemplate: gr,
          TitleFieldTemplate: Sr,
          UnsupportedFieldTemplate: xr,
          WrapIfAdditionalTemplate: br,
        };
      }
      const kr = Cr;
      function Fr(e, t) {
        const r = [];
        for (let n = e; n <= t; n++) {
          r.push({ value: n, label: (0, i.pad)(n, 2) });
        }
        return r;
      }
      function jr(e) {
        return Object.values(e).every((e) => e !== -1);
      }
      function Or(e, t, r = [1900, new Date().getFullYear() + 2]) {
        const { year: n, month: s, day: i, hour: a, minute: o, second: l } = e;
        const c = [
          { type: "year", range: r, value: n },
          { type: "month", range: [1, 12], value: s },
          { type: "day", range: [1, 31], value: i },
        ];
        if (t) {
          c.push(
            { type: "hour", range: [0, 23], value: a },
            { type: "minute", range: [0, 59], value: o },
            { type: "second", range: [0, 59], value: l }
          );
        }
        return c;
      }
      function Tr({
        type: e,
        range: t,
        value: r,
        select: s,
        rootId: a,
        name: o,
        disabled: l,
        readonly: c,
        autofocus: d,
        registry: u,
        onBlur: h,
        onFocus: m,
      }) {
        const p = a + "_" + e;
        const { SelectWidget: f } = u.widgets;
        return (0, n.jsx)(f, {
          schema: { type: "integer" },
          id: p,
          name: o,
          className: "form-control",
          options: { enumOptions: Fr(t[0], t[1]) },
          placeholder: e,
          value: r,
          disabled: l,
          readonly: c,
          autofocus: d,
          onChange: (t) => s(e, t),
          onBlur: h,
          onFocus: m,
          registry: u,
          label: "",
          "aria-describedby": (0, i.ariaDescribedByIds)(a),
        });
      }
      function Dr({
        time: e = false,
        disabled: t = false,
        readonly: r = false,
        autofocus: a = false,
        options: o,
        id: l,
        name: c,
        registry: d,
        onBlur: u,
        onFocus: h,
        onChange: m,
        value: p,
      }) {
        const { translateString: f } = d;
        const [g, y] = (0, s.useState)(p);
        const [S, v] = (0, s.useReducer)((e, t) => ({ ...e, ...t }), (0, i.parseDateString)(p, e));
        (0, s.useEffect)(() => {
          const t = (0, i.toDateString)(S, e);
          if (jr(S) && t !== p) {
            m(t);
          } else if (g !== p) {
            y(p);
            v((0, i.parseDateString)(p, e));
          }
        }, [e, p, m, S, g]);
        const x = (0, s.useCallback)((e, t) => {
          v({ [e]: t });
        }, []);
        const b = (0, s.useCallback)(
          (n) => {
            n.preventDefault();
            if (t || r) {
              return;
            }
            const s = (0, i.parseDateString)(new Date().toJSON(), e);
            m((0, i.toDateString)(s, e));
          },
          [t, r, e]
        );
        const C = (0, s.useCallback)(
          (e) => {
            e.preventDefault();
            if (t || r) {
              return;
            }
            m(undefined);
          },
          [t, r, m]
        );
        return (0, n.jsxs)("ul", {
          className: "list-inline",
          children: [
            Or(S, e, o.yearsRange).map((e, s) =>
              (0, n.jsx)(
                "li",
                {
                  className: "list-inline-item",
                  children: (0, n.jsx)(Tr, {
                    rootId: l,
                    name: c,
                    select: x,
                    ...e,
                    disabled: t,
                    readonly: r,
                    registry: d,
                    onBlur: u,
                    onFocus: h,
                    autofocus: a && s === 0,
                  }),
                },
                s
              )
            ),
            (o.hideNowButton !== "undefined" ? !o.hideNowButton : true) &&
              (0, n.jsx)("li", {
                className: "list-inline-item",
                children: (0, n.jsx)("a", { href: "#", className: "btn btn-info btn-now", onClick: b, children: f(i.TranslatableString.NowLabel) }),
              }),
            (o.hideClearButton !== "undefined" ? !o.hideClearButton : true) &&
              (0, n.jsx)("li", {
                className: "list-inline-item",
                children: (0, n.jsx)("a", {
                  href: "#",
                  className: "btn btn-warning btn-clear",
                  onClick: C,
                  children: f(i.TranslatableString.ClearLabel),
                }),
              }),
          ],
        });
      }
      const wr = Dr;
      function Ir({ time: e = true, ...t }) {
        const { AltDateWidget: r } = t.registry.widgets;
        return (0, n.jsx)(r, { time: e, ...t });
      }
      const _r = Ir;
      function Er({
        schema: e,
        uiSchema: t,
        options: r,
        id: a,
        value: o,
        disabled: l,
        readonly: c,
        label: d,
        hideLabel: u,
        autofocus: h = false,
        onBlur: m,
        onFocus: p,
        onChange: f,
        registry: g,
      }) {
        var y;
        const S = (0, i.getTemplate)("DescriptionFieldTemplate", g, r);
        const v = (0, i.schemaRequiresTrueValue)(e);
        const x = (0, s.useCallback)((e) => f(e.target.checked), [f]);
        const b = (0, s.useCallback)((e) => m(a, e.target.checked), [m, a]);
        const C = (0, s.useCallback)((e) => p(a, e.target.checked), [p, a]);
        const k = (y = r.description) !== null && y !== void 0 ? y : e.description;
        return (0, n.jsxs)("div", {
          className: `checkbox ${l || c ? "disabled" : ""}`,
          children: [
            !u && !!k && (0, n.jsx)(S, { id: (0, i.descriptionId)(a), description: k, schema: e, uiSchema: t, registry: g }),
            (0, n.jsxs)("label", {
              children: [
                (0, n.jsx)("input", {
                  type: "checkbox",
                  id: a,
                  name: a,
                  checked: typeof o === "undefined" ? false : o,
                  required: v,
                  disabled: l || c,
                  autoFocus: h,
                  onChange: x,
                  onBlur: b,
                  onFocus: C,
                  "aria-describedby": (0, i.ariaDescribedByIds)(a),
                }),
                (0, i.labelValue)((0, n.jsx)("span", { children: d }), u),
              ],
            }),
          ],
        });
      }
      const Ar = Er;
      function Nr({
        id: e,
        disabled: t,
        options: { inline: r = false, enumOptions: a, enumDisabled: o, emptyValue: l },
        value: c,
        autofocus: d = false,
        readonly: u,
        onChange: h,
        onBlur: m,
        onFocus: p,
      }) {
        const f = Array.isArray(c) ? c : [c];
        const g = (0, s.useCallback)(({ target: { value: t } }) => m(e, (0, i.enumOptionsValueForIndex)(t, a, l)), [m, e]);
        const y = (0, s.useCallback)(({ target: { value: t } }) => p(e, (0, i.enumOptionsValueForIndex)(t, a, l)), [p, e]);
        return (0, n.jsx)("div", {
          className: "checkboxes",
          id: e,
          children:
            Array.isArray(a) &&
            a.map((s, l) => {
              const c = (0, i.enumOptionsIsSelected)(s.value, f);
              const m = Array.isArray(o) && o.indexOf(s.value) !== -1;
              const p = t || m || u ? "disabled" : "";
              const S = (e) => {
                if (e.target.checked) {
                  h((0, i.enumOptionsSelectValue)(l, f, a));
                } else {
                  h((0, i.enumOptionsDeselectValue)(l, f, a));
                }
              };
              const v = (0, n.jsxs)("span", {
                children: [
                  (0, n.jsx)("input", {
                    type: "checkbox",
                    id: (0, i.optionId)(e, l),
                    name: e,
                    checked: c,
                    value: String(l),
                    disabled: t || m || u,
                    autoFocus: d && l === 0,
                    onChange: S,
                    onBlur: g,
                    onFocus: y,
                    "aria-describedby": (0, i.ariaDescribedByIds)(e),
                  }),
                  (0, n.jsx)("span", { children: s.label }),
                ],
              });
              return r
                ? (0, n.jsx)("label", { className: `checkbox-inline ${p}`, children: v }, l)
                : (0, n.jsx)("div", { className: `checkbox ${p}`, children: (0, n.jsx)("label", { children: v }) }, l);
            }),
        });
      }
      const Br = Nr;
      function Ur(e) {
        const { disabled: t, readonly: r, options: s, registry: a } = e;
        const o = (0, i.getTemplate)("BaseInputTemplate", a, s);
        return (0, n.jsx)(o, { type: "color", ...e, disabled: t || r });
      }
      function $r(e) {
        const { onChange: t, options: r, registry: a } = e;
        const o = (0, i.getTemplate)("BaseInputTemplate", a, r);
        const l = (0, s.useCallback)((e) => t(e || undefined), [t]);
        return (0, n.jsx)(o, { type: "date", ...e, onChange: l });
      }
      function Rr(e) {
        const { onChange: t, value: r, options: s, registry: a } = e;
        const o = (0, i.getTemplate)("BaseInputTemplate", a, s);
        return (0, n.jsx)(o, { type: "datetime-local", ...e, value: (0, i.utcToLocal)(r), onChange: (e) => t((0, i.localToUTC)(e)) });
      }
      function Pr(e) {
        const { options: t, registry: r } = e;
        const s = (0, i.getTemplate)("BaseInputTemplate", r, t);
        return (0, n.jsx)(s, { type: "email", ...e });
      }
      function Lr(e, t) {
        if (e === null) {
          return null;
        }
        return e.replace(";base64", `;name=${encodeURIComponent(t)};base64`);
      }
      function Mr(e) {
        const { name: t, size: r, type: n } = e;
        return new Promise((s, i) => {
          const a = new window.FileReader();
          a.onerror = i;
          a.onload = (e) => {
            var i;
            if (typeof ((i = e.target) === null || i === void 0 ? void 0 : i.result) === "string") {
              s({ dataURL: Lr(e.target.result, t), name: t, size: r, type: n });
            } else {
              s({ dataURL: null, name: t, size: r, type: n });
            }
          };
          a.readAsDataURL(e);
        });
      }
      function qr(e) {
        return Promise.all(Array.from(e).map(Mr));
      }
      function Wr({ fileInfo: e, registry: t }) {
        const { translateString: r } = t;
        const { dataURL: s, type: a, name: o } = e;
        if (!s) {
          return null;
        }
        if (a.indexOf("image") !== -1) {
          return (0, n.jsx)("img", { src: s, style: { maxWidth: "100%" }, className: "file-preview" });
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            " ",
            (0, n.jsx)("a", { download: `preview-${o}`, href: s, className: "file-download", children: r(i.TranslatableString.PreviewLabel) }),
          ],
        });
      }
      function Vr({ filesInfo: e, registry: t, preview: r }) {
        if (e.length === 0) {
          return null;
        }
        const { translateString: s } = t;
        return (0, n.jsx)("ul", {
          className: "file-info",
          children: e.map((e, a) => {
            const { name: o, size: l, type: c } = e;
            return (0, n.jsxs)(
              "li",
              {
                children: [
                  (0, n.jsx)(It, { children: s(i.TranslatableString.FilesInfo, [o, c, String(l)]) }),
                  r && (0, n.jsx)(Wr, { fileInfo: e, registry: t }),
                ],
              },
              a
            );
          }),
        });
      }
      function Hr(e) {
        return e
          .filter((e) => e)
          .map((e) => {
            const { blob: t, name: r } = (0, i.dataURItoBlob)(e);
            return { dataURL: e, name: r, size: t.size, type: t.type };
          });
      }
      function Kr(e) {
        const { disabled: t, readonly: r, required: a, multiple: o, onChange: l, value: c, options: d, registry: u } = e;
        const h = (0, i.getTemplate)("BaseInputTemplate", u, d);
        const [m, p] = (0, s.useState)(Array.isArray(c) ? Hr(c) : Hr([c]));
        const f = (0, s.useCallback)(
          (e) => {
            if (!e.target.files) {
              return;
            }
            qr(e.target.files).then((e) => {
              const t = e.map((e) => e.dataURL);
              if (o) {
                p(m.concat(e[0]));
                l(c.concat(t[0]));
              } else {
                p(e);
                l(t[0]);
              }
            });
          },
          [o, c, m, l]
        );
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)(h, {
              ...e,
              disabled: t || r,
              type: "file",
              required: c ? false : a,
              onChangeOverride: f,
              value: "",
              accept: d.accept ? String(d.accept) : undefined,
            }),
            (0, n.jsx)(Vr, { filesInfo: m, registry: u, preview: d.filePreview }),
          ],
        });
      }
      const Gr = Kr;
      function Yr({ id: e, value: t }) {
        return (0, n.jsx)("input", { type: "hidden", id: e, name: e, value: typeof t === "undefined" ? "" : t });
      }
      const zr = Yr;
      function Xr(e) {
        const { options: t, registry: r } = e;
        const s = (0, i.getTemplate)("BaseInputTemplate", r, t);
        return (0, n.jsx)(s, { type: "password", ...e });
      }
      function Zr({ options: e, value: t, required: r, disabled: a, readonly: o, autofocus: l = false, onBlur: c, onFocus: d, onChange: u, id: h }) {
        const { enumOptions: m, enumDisabled: p, inline: f, emptyValue: g } = e;
        const y = (0, s.useCallback)(({ target: { value: e } }) => c(h, (0, i.enumOptionsValueForIndex)(e, m, g)), [c, h]);
        const S = (0, s.useCallback)(({ target: { value: e } }) => d(h, (0, i.enumOptionsValueForIndex)(e, m, g)), [d, h]);
        return (0, n.jsx)("div", {
          className: "field-radio-group",
          id: h,
          children:
            Array.isArray(m) &&
            m.map((e, s) => {
              const c = (0, i.enumOptionsIsSelected)(e.value, t);
              const d = Array.isArray(p) && p.indexOf(e.value) !== -1;
              const m = a || d || o ? "disabled" : "";
              const g = () => u(e.value);
              const v = (0, n.jsxs)("span", {
                children: [
                  (0, n.jsx)("input", {
                    type: "radio",
                    id: (0, i.optionId)(h, s),
                    checked: c,
                    name: h,
                    required: r,
                    value: String(s),
                    disabled: a || d || o,
                    autoFocus: l && s === 0,
                    onChange: g,
                    onBlur: y,
                    onFocus: S,
                    "aria-describedby": (0, i.ariaDescribedByIds)(h),
                  }),
                  (0, n.jsx)("span", { children: e.label }),
                ],
              });
              return f
                ? (0, n.jsx)("label", { className: `radio-inline ${m}`, children: v }, s)
                : (0, n.jsx)("div", { className: `radio ${m}`, children: (0, n.jsx)("label", { children: v }) }, s);
            }),
        });
      }
      const Jr = Zr;
      function Qr(e) {
        const {
          value: t,
          registry: {
            templates: { BaseInputTemplate: r },
          },
        } = e;
        return (0, n.jsxs)("div", {
          className: "field-range-wrapper",
          children: [(0, n.jsx)(r, { type: "range", ...e }), (0, n.jsx)("span", { className: "range-view", children: t })],
        });
      }
      function en(e, t) {
        if (t) {
          return Array.from(e.target.options)
            .slice()
            .filter((e) => e.selected)
            .map((e) => e.value);
        }
        return e.target.value;
      }
      function tn({
        schema: e,
        id: t,
        options: r,
        value: a,
        required: o,
        disabled: l,
        readonly: c,
        multiple: d = false,
        autofocus: u = false,
        onChange: h,
        onBlur: m,
        onFocus: p,
        placeholder: f,
      }) {
        const { enumOptions: g, enumDisabled: y, emptyValue: S } = r;
        const v = d ? [] : "";
        const x = (0, s.useCallback)(
          (e) => {
            const r = en(e, d);
            return p(t, (0, i.enumOptionsValueForIndex)(r, g, S));
          },
          [p, t, e, d, r]
        );
        const b = (0, s.useCallback)(
          (e) => {
            const r = en(e, d);
            return m(t, (0, i.enumOptionsValueForIndex)(r, g, S));
          },
          [m, t, e, d, r]
        );
        const C = (0, s.useCallback)(
          (e) => {
            const t = en(e, d);
            return h((0, i.enumOptionsValueForIndex)(t, g, S));
          },
          [h, e, d, r]
        );
        const k = (0, i.enumOptionsIndexForValue)(a, g, d);
        return (0, n.jsxs)("select", {
          id: t,
          name: t,
          multiple: d,
          className: "form-control",
          value: typeof k === "undefined" ? v : k,
          required: o,
          disabled: l || c,
          autoFocus: u,
          onBlur: b,
          onFocus: x,
          onChange: C,
          "aria-describedby": (0, i.ariaDescribedByIds)(t),
          children: [
            !d && e.default === undefined && (0, n.jsx)("option", { value: "", children: f }),
            Array.isArray(g) &&
              g.map(({ value: e, label: t }, r) => {
                const s = y && y.indexOf(e) !== -1;
                return (0, n.jsx)("option", { value: String(r), disabled: s, children: t }, r);
              }),
          ],
        });
      }
      const rn = tn;
      function nn({
        id: e,
        options: t = {},
        placeholder: r,
        value: a,
        required: o,
        disabled: l,
        readonly: c,
        autofocus: d = false,
        onChange: u,
        onBlur: h,
        onFocus: m,
      }) {
        const p = (0, s.useCallback)(({ target: { value: e } }) => u(e === "" ? t.emptyValue : e), [u, t.emptyValue]);
        const f = (0, s.useCallback)(({ target: { value: t } }) => h(e, t), [h, e]);
        const g = (0, s.useCallback)(({ target: { value: t } }) => m(e, t), [e, m]);
        return (0, n.jsx)("textarea", {
          id: e,
          name: e,
          className: "form-control",
          value: a ? a : "",
          placeholder: r,
          required: o,
          disabled: l,
          readOnly: c,
          autoFocus: d,
          rows: t.rows,
          onBlur: f,
          onFocus: g,
          onChange: p,
          "aria-describedby": (0, i.ariaDescribedByIds)(e),
        });
      }
      nn.defaultProps = { autofocus: false, options: {} };
      const sn = nn;
      function an(e) {
        const { options: t, registry: r } = e;
        const s = (0, i.getTemplate)("BaseInputTemplate", r, t);
        return (0, n.jsx)(s, { ...e });
      }
      function on(e) {
        const { onChange: t, options: r, registry: a } = e;
        const o = (0, i.getTemplate)("BaseInputTemplate", a, r);
        const l = (0, s.useCallback)((e) => t(e ? `${e}:00` : undefined), [t]);
        return (0, n.jsx)(o, { type: "time", ...e, onChange: l });
      }
      function ln(e) {
        const { options: t, registry: r } = e;
        const s = (0, i.getTemplate)("BaseInputTemplate", r, t);
        return (0, n.jsx)(s, { type: "url", ...e });
      }
      function cn(e) {
        const { options: t, registry: r } = e;
        const s = (0, i.getTemplate)("BaseInputTemplate", r, t);
        return (0, n.jsx)(s, { type: "number", ...e });
      }
      function dn() {
        return {
          AltDateWidget: wr,
          AltDateTimeWidget: _r,
          CheckboxWidget: Ar,
          CheckboxesWidget: Br,
          ColorWidget: Ur,
          DateWidget: $r,
          DateTimeWidget: Rr,
          EmailWidget: Pr,
          FileWidget: Gr,
          HiddenWidget: zr,
          PasswordWidget: Xr,
          RadioWidget: Jr,
          RangeWidget: Qr,
          SelectWidget: rn,
          TextWidget: an,
          TextareaWidget: sn,
          TimeWidget: on,
          UpDownWidget: cn,
          URLWidget: ln,
        };
      }
      const un = dn;
      function hn() {
        return { fields: Gt(), templates: kr(), widgets: un(), rootSchema: {}, formContext: {}, translateString: i.englishStringTranslator };
      }
      class mn extends s.Component {
        constructor(e) {
          super(e);
          this.getUsedFormData = (e, t) => {
            if (t.length === 0 && typeof e !== "object") {
              return e;
            }
            const r = u()(e, t);
            if (Array.isArray(e)) {
              return Object.keys(r).map((e) => r[e]);
            }
            return r;
          };
          this.getFieldNames = (e, t) => {
            const r = (e, n = [], s = [[]]) => {
              Object.keys(e).forEach((a) => {
                if (typeof e[a] === "object") {
                  const t = s.map((e) => [...e, a]);
                  if (e[a][i.RJSF_ADDITONAL_PROPERTIES_FLAG] && e[a][i.NAME_KEY] !== "") {
                    n.push(e[a][i.NAME_KEY]);
                  } else {
                    r(e[a], n, t);
                  }
                } else if (a === i.NAME_KEY && e[a] !== "") {
                  s.forEach((e) => {
                    const r = o()(t, e);
                    if (typeof r !== "object" || c()(r)) {
                      n.push(e);
                    }
                  });
                }
              });
              return n;
            };
            return r(e);
          };
          this.onChange = (e, t, r) => {
            const { extraErrors: n, omitExtraData: s, liveOmit: a, noValidate: o, liveValidate: l, onChange: c } = this.props;
            const { schemaUtils: d, schema: u, retrievedSchema: h } = this.state;
            if ((0, i.isObject)(e) || Array.isArray(e)) {
              const t = this.getStateFromProps(this.props, e, h);
              e = t.formData;
            }
            const m = !o && l;
            let p = { formData: e, schema: u };
            let f = e;
            let g;
            if (s === true && a === true) {
              g = d.retrieveSchema(u, e);
              const t = d.toPathSchema(g, "", e);
              const r = this.getFieldNames(t, e);
              f = this.getUsedFormData(e, r);
              p = { formData: f };
            }
            if (m) {
              const e = this.validate(f, u, d, h);
              let t = e.errors;
              let r = e.errorSchema;
              const s = t;
              const a = r;
              if (n) {
                const s = (0, i.validationDataMerge)(e, n);
                r = s.errorSchema;
                t = s.errors;
              }
              p = { formData: f, errors: t, errorSchema: r, schemaValidationErrors: s, schemaValidationErrorSchema: a };
            } else if (!o && t) {
              const e = n ? (0, i.mergeObjects)(t, n, "preventDuplicates") : t;
              p = { formData: f, errorSchema: e, errors: (0, i.toErrorList)(e) };
            }
            if (g) {
              p.retrievedSchema = g;
            }
            this.setState(p, () => c && c({ ...this.state, ...p }, r));
          };
          this.reset = () => {
            const { onChange: e } = this.props;
            const t = this.getStateFromProps(this.props, undefined);
            const r = t.formData;
            const n = { formData: r, errorSchema: {}, errors: [], schemaValidationErrors: [], schemaValidationErrorSchema: {} };
            this.setState(n, () => e && e({ ...this.state, ...n }));
          };
          this.onBlur = (e, t) => {
            const { onBlur: r } = this.props;
            if (r) {
              r(e, t);
            }
          };
          this.onFocus = (e, t) => {
            const { onFocus: r } = this.props;
            if (r) {
              r(e, t);
            }
          };
          this.onSubmit = (e) => {
            e.preventDefault();
            if (e.target !== e.currentTarget) {
              return;
            }
            e.persist();
            const { omitExtraData: t, extraErrors: r, noValidate: n, onSubmit: s } = this.props;
            let { formData: a } = this.state;
            const { schema: o, schemaUtils: l } = this.state;
            if (t === true) {
              const e = l.retrieveSchema(o, a);
              const t = l.toPathSchema(e, "", a);
              const r = this.getFieldNames(t, a);
              a = this.getUsedFormData(a, r);
            }
            if (n || this.validateForm()) {
              const t = r || {};
              const n = r ? (0, i.toErrorList)(r) : [];
              this.setState({ formData: a, errors: n, errorSchema: t, schemaValidationErrors: [], schemaValidationErrorSchema: {} }, () => {
                if (s) {
                  s({ ...this.state, formData: a, status: "submitted" }, e);
                }
              });
            }
          };
          if (!e.validator) {
            throw new Error("A validator is required for Form functionality to work");
          }
          this.state = this.getStateFromProps(e, e.formData);
          if (this.props.onChange && !(0, i.deepEquals)(this.state.formData, this.props.formData)) {
            this.props.onChange(this.state);
          }
          this.formElement = (0, s.createRef)();
        }
        getSnapshotBeforeUpdate(e, t) {
          if (!(0, i.deepEquals)(this.props, e)) {
            const r = this.getStateFromProps(
              this.props,
              this.props.formData,
              e.schema !== this.props.schema ? undefined : this.state.retrievedSchema
            );
            const n = !(0, i.deepEquals)(r, t);
            return { nextState: r, shouldUpdate: n };
          }
          return { shouldUpdate: false };
        }
        componentDidUpdate(e, t, r) {
          if (r.shouldUpdate) {
            const { nextState: e } = r;
            if (!(0, i.deepEquals)(e.formData, this.props.formData) && !(0, i.deepEquals)(e.formData, t.formData) && this.props.onChange) {
              this.props.onChange(e);
            }
            this.setState(e);
          }
        }
        getStateFromProps(e, t, r) {
          const n = this.state || {};
          const s = "schema" in e ? e.schema : this.props.schema;
          const a = ("uiSchema" in e ? e.uiSchema : this.props.uiSchema) || {};
          const o = typeof t !== "undefined";
          const l = "liveValidate" in e ? e.liveValidate : this.props.liveValidate;
          const c = o && !e.noValidate && l;
          const d = s;
          const u =
            "experimental_defaultFormStateBehavior" in e ? e.experimental_defaultFormStateBehavior : this.props.experimental_defaultFormStateBehavior;
          let h = n.schemaUtils;
          if (!h || h.doesSchemaUtilsDiffer(e.validator, d, u)) {
            h = (0, i.createSchemaUtils)(e.validator, d, u);
          }
          const m = h.getDefaultFormState(s, t);
          const p = r !== null && r !== void 0 ? r : h.retrieveSchema(s, m);
          const f = () => {
            if (e.noValidate) {
              return { errors: [], errorSchema: {} };
            } else if (!e.liveValidate) {
              return { errors: n.schemaValidationErrors || [], errorSchema: n.schemaValidationErrorSchema || {} };
            }
            return { errors: n.errors || [], errorSchema: n.errorSchema || {} };
          };
          let g;
          let y;
          let S = n.schemaValidationErrors;
          let v = n.schemaValidationErrorSchema;
          if (c) {
            const e = this.validate(m, s, h, p);
            g = e.errors;
            y = e.errorSchema;
            S = g;
            v = y;
          } else {
            const e = f();
            g = e.errors;
            y = e.errorSchema;
          }
          if (e.extraErrors) {
            const t = (0, i.validationDataMerge)({ errorSchema: y, errors: g }, e.extraErrors);
            y = t.errorSchema;
            g = t.errors;
          }
          const x = h.toIdSchema(p, a["ui:rootFieldId"], m, e.idPrefix, e.idSeparator);
          const b = {
            schemaUtils: h,
            schema: s,
            uiSchema: a,
            idSchema: x,
            formData: m,
            edit: o,
            errors: g,
            errorSchema: y,
            schemaValidationErrors: S,
            schemaValidationErrorSchema: v,
            retrievedSchema: p,
          };
          return b;
        }
        shouldComponentUpdate(e, t) {
          return (0, i.shouldRender)(this, e, t);
        }
        validate(e, t = this.props.schema, r, n) {
          const s = r ? r : this.state.schemaUtils;
          const { customValidate: i, transformErrors: a, uiSchema: o } = this.props;
          const l = n !== null && n !== void 0 ? n : s.retrieveSchema(t, e);
          return s.getValidator().validateFormData(e, l, i, a, o);
        }
        renderErrors(e) {
          const { errors: t, errorSchema: r, schema: s, uiSchema: a } = this.state;
          const { formContext: o } = this.props;
          const l = (0, i.getUiOptions)(a);
          const c = (0, i.getTemplate)("ErrorListTemplate", e, l);
          if (t && t.length) {
            return (0, n.jsx)(c, { errors: t, errorSchema: r || {}, schema: s, uiSchema: a, formContext: o, registry: e });
          }
          return null;
        }
        getRegistry() {
          var e;
          const { translateString: t, uiSchema: r = {} } = this.props;
          const { schemaUtils: n } = this.state;
          const { fields: s, templates: a, widgets: o, formContext: l, translateString: c } = hn();
          return {
            fields: { ...s, ...this.props.fields },
            templates: {
              ...a,
              ...this.props.templates,
              ButtonTemplates: { ...a.ButtonTemplates, ...((e = this.props.templates) === null || e === void 0 ? void 0 : e.ButtonTemplates) },
            },
            widgets: { ...o, ...this.props.widgets },
            rootSchema: this.props.schema,
            formContext: this.props.formContext || l,
            schemaUtils: n,
            translateString: t || c,
            globalUiOptions: r[i.UI_GLOBAL_OPTIONS_KEY],
          };
        }
        submit() {
          if (this.formElement.current) {
            this.formElement.current.dispatchEvent(new CustomEvent("submit", { cancelable: true }));
            this.formElement.current.requestSubmit();
          }
        }
        focusOnError(e) {
          const { idPrefix: t = "root", idSeparator: r = "_" } = this.props;
          const { property: n } = e;
          const s = m()(n);
          if (s[0] === "") {
            s[0] = t;
          } else {
            s.unshift(t);
          }
          const i = s.join(r);
          let a = this.formElement.current.elements[i];
          if (!a) {
            a = this.formElement.current.querySelector(`input[id^=${i}`);
          }
          if (a && a.length) {
            a = a[0];
          }
          if (a) {
            a.focus();
          }
        }
        validateForm() {
          const { extraErrors: e, extraErrorsBlockSubmit: t, focusOnFirstError: r, onError: n } = this.props;
          const { formData: s, errors: a } = this.state;
          const o = this.validate(s);
          let l = o.errors;
          let c = o.errorSchema;
          const d = l;
          const u = c;
          const h = l.length > 0 || (e && t);
          if (h) {
            if (e) {
              const t = (0, i.validationDataMerge)(o, e);
              c = t.errorSchema;
              l = t.errors;
            }
            if (r) {
              if (typeof r === "function") {
                r(l[0]);
              } else {
                this.focusOnError(l[0]);
              }
            }
            this.setState({ errors: l, errorSchema: c, schemaValidationErrors: d, schemaValidationErrorSchema: u }, () => {
              if (n) {
                n(l);
              } else {
                console.error("Form validation failed", l);
              }
            });
          } else if (a.length > 0) {
            this.setState({ errors: [], errorSchema: {}, schemaValidationErrors: [], schemaValidationErrorSchema: {} });
          }
          return !h;
        }
        render() {
          const {
            children: e,
            id: t,
            idPrefix: r,
            idSeparator: s,
            className: a = "",
            tagName: o,
            name: l,
            method: c,
            target: d,
            action: u,
            autoComplete: h,
            enctype: m,
            acceptcharset: p,
            noHtml5Validate: f = false,
            disabled: g = false,
            readonly: y = false,
            formContext: S,
            showErrorList: v = "top",
            _internalFormWrapper: x,
          } = this.props;
          const { schema: b, uiSchema: C, formData: k, errorSchema: F, idSchema: j } = this.state;
          const O = this.getRegistry();
          const { SchemaField: T } = O.fields;
          const { SubmitButton: D } = O.templates.ButtonTemplates;
          const w = x ? o : undefined;
          const I = x || o || "form";
          let { [i.SUBMIT_BTN_OPTIONS_KEY]: _ = {} } = (0, i.getUiOptions)(C);
          if (g) {
            _ = { ..._, props: { ..._.props, disabled: true } };
          }
          const E = { [i.UI_OPTIONS_KEY]: { [i.SUBMIT_BTN_OPTIONS_KEY]: _ } };
          return (0, n.jsxs)(I, {
            className: a ? a : "rjsf",
            id: t,
            name: l,
            method: c,
            target: d,
            action: u,
            autoComplete: h,
            encType: m,
            acceptCharset: p,
            noValidate: f,
            onSubmit: this.onSubmit,
            as: w,
            ref: this.formElement,
            children: [
              v === "top" && this.renderErrors(O),
              (0, n.jsx)(T, {
                name: "",
                schema: b,
                uiSchema: C,
                errorSchema: F,
                idSchema: j,
                idPrefix: r,
                idSeparator: s,
                formContext: S,
                formData: k,
                onChange: this.onChange,
                onBlur: this.onBlur,
                onFocus: this.onFocus,
                registry: O,
                disabled: g,
                readonly: y,
              }),
              e ? e : (0, n.jsx)(D, { uiSchema: E, registry: O }),
              v === "bottom" && this.renderErrors(O),
            ],
          });
        }
      }
      function pn(e) {
        return forwardRef(({ fields: t, widgets: r, templates: n, ...s }, i) => {
          var a;
          t = { ...(e === null || e === void 0 ? void 0 : e.fields), ...t };
          r = { ...(e === null || e === void 0 ? void 0 : e.widgets), ...r };
          n = {
            ...(e === null || e === void 0 ? void 0 : e.templates),
            ...n,
            ButtonTemplates: {
              ...((a = e === null || e === void 0 ? void 0 : e.templates) === null || a === void 0 ? void 0 : a.ButtonTemplates),
              ...(n === null || n === void 0 ? void 0 : n.ButtonTemplates),
            },
          };
          return _jsx(Form, { ...e, ...s, fields: t, widgets: r, templates: n, ref: i });
        });
      }
      const fn = mn;
    },
    10859: (e, t, r) => {
      "use strict";
      r.r(t);
      r.d(t, { Cache: () => S, FreeStyle: () => k, Rule: () => b, Selector: () => v, Style: () => x, create: () => F });
      let n = 0;
      const s = Object.create(null);
      const i = [
        "animation-iteration-count",
        "border-image-outset",
        "border-image-slice",
        "border-image-width",
        "box-flex",
        "box-flex-group",
        "box-ordinal-group",
        "column-count",
        "columns",
        "counter-increment",
        "counter-reset",
        "flex",
        "flex-grow",
        "flex-positive",
        "flex-shrink",
        "flex-negative",
        "flex-order",
        "font-weight",
        "grid-area",
        "grid-column",
        "grid-column-end",
        "grid-column-span",
        "grid-column-start",
        "grid-row",
        "grid-row-end",
        "grid-row-span",
        "grid-row-start",
        "line-clamp",
        "line-height",
        "opacity",
        "order",
        "orphans",
        "tab-size",
        "widows",
        "z-index",
        "zoom",
        "fill-opacity",
        "flood-opacity",
        "stop-opacity",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
      ];
      for (const j of i) {
        for (const e of ["-webkit-", "-ms-", "-moz-", "-o-", ""]) {
          s[e + j] = true;
        }
      }
      function a(e) {
        return e.replace(/[ !#$%&()*+,./;<=>?@[\]^`{|}~"'\\]/g, "\\$&");
      }
      function o(e) {
        return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`).replace(/^ms-/, "-ms-");
      }
      function l(e) {
        let t = 5381;
        let r = e.length;
        while (r--) t = (t * 33) ^ e.charCodeAt(r);
        return (t >>> 0).toString(36);
      }
      function c(e, t) {
        if (t && typeof t === "number" && !s[e]) {
          return `${e}:${t}px`;
        }
        return `${e}:${t}`;
      }
      function d(e) {
        return e.sort((e, t) => (e[0] > t[0] ? 1 : -1));
      }
      function u(e, t) {
        const r = [];
        const n = [];
        for (const s of Object.keys(e)) {
          const t = s.trim();
          const i = e[s];
          if (t.charCodeAt(0) !== 36 && i != null) {
            if (typeof i === "object" && !Array.isArray(i)) {
              n.push([t, i]);
            } else {
              r.push([o(t), i]);
            }
          }
        }
        return { style: h(d(r)), nested: t ? n : d(n), isUnique: !!e.$unique };
      }
      function h(e) {
        return e
          .map(([e, t]) => {
            if (!Array.isArray(t)) return c(e, t);
            return t.map((t) => c(e, t)).join(";");
          })
          .join(";");
      }
      function m(e, t) {
        if (e.indexOf("&") === -1) return `${t} ${e}`;
        return e.replace(/&/g, t);
      }
      function p(e, t, r, n, s) {
        const { style: i, nested: a, isUnique: o } = u(t, e !== "");
        let l = i;
        if (e.charCodeAt(0) === 64) {
          const t = { selector: e, styles: [], rules: [], style: s ? "" : i };
          r.push(t);
          if (i && s) {
            t.styles.push({ selector: s, style: i, isUnique: o });
          }
          for (const [e, r] of a) {
            l += e + p(e, r, t.rules, t.styles, s);
          }
        } else {
          const t = s ? m(e, s) : e;
          if (i) n.push({ selector: t, style: i, isUnique: o });
          for (const [e, s] of a) {
            l += e + p(e, s, r, n, t);
          }
        }
        return l;
      }
      function f(e, t, r, s, i, a) {
        for (const { selector: o, style: l, isUnique: c } of s) {
          const r = a ? m(o, i) : o;
          const s = c ? `u\0${(++n).toString(36)}` : `s\0${t}\0${l}`;
          const d = new x(l, s);
          d.add(new v(r, `k\0${t}\0${r}`));
          e.add(d);
        }
        for (const { selector: n, style: o, rules: l, styles: c } of r) {
          const r = new b(n, o, `r\0${t}\0${n}\0${o}`);
          f(r, t, l, c, i, a);
          e.add(r);
        }
      }
      function g(e) {
        let t = "";
        for (let r = 0; r < e.length; r++) t += e[r];
        return t;
      }
      const y = { add: () => undefined, change: () => undefined, remove: () => undefined };
      class S {
        constructor(e = y) {
          this.changes = e;
          this.sheet = [];
          this.changeId = 0;
          this._keys = [];
          this._children = Object.create(null);
          this._counters = Object.create(null);
        }
        add(e) {
          const t = this._counters[e.id] || 0;
          const r = this._children[e.id] || e.clone();
          this._counters[e.id] = t + 1;
          if (t === 0) {
            this._children[r.id] = r;
            this._keys.push(r.id);
            this.sheet.push(r.getStyles());
            this.changeId++;
            this.changes.add(r, this._keys.length - 1);
          } else if (r instanceof S && e instanceof S) {
            const t = this._keys.indexOf(e.id);
            const n = r.changeId;
            r.merge(e);
            if (r.changeId !== n) {
              this.sheet.splice(t, 1, r.getStyles());
              this.changeId++;
              this.changes.change(r, t, t);
            }
          }
        }
        remove(e) {
          const t = this._counters[e.id];
          if (t) {
            this._counters[e.id] = t - 1;
            const r = this._children[e.id];
            const n = this._keys.indexOf(r.id);
            if (t === 1) {
              delete this._counters[e.id];
              delete this._children[e.id];
              this._keys.splice(n, 1);
              this.sheet.splice(n, 1);
              this.changeId++;
              this.changes.remove(r, n);
            } else if (r instanceof S && e instanceof S) {
              const t = r.changeId;
              r.unmerge(e);
              if (r.changeId !== t) {
                this.sheet.splice(n, 1, r.getStyles());
                this.changeId++;
                this.changes.change(r, n, n);
              }
            }
          }
        }
        values() {
          return this._keys.map((e) => this._children[e]);
        }
        merge(e) {
          for (const t of e.values()) this.add(t);
          return this;
        }
        unmerge(e) {
          for (const t of e.values()) this.remove(t);
          return this;
        }
        clone() {
          return new S().merge(this);
        }
      }
      class v {
        constructor(e, t) {
          this.selector = e;
          this.id = t;
        }
        getStyles() {
          return this.selector;
        }
        clone() {
          return this;
        }
      }
      class x extends S {
        constructor(e, t) {
          super();
          this.style = e;
          this.id = t;
        }
        getStyles() {
          return `${this.sheet.join(",")}{${this.style}}`;
        }
        clone() {
          return new x(this.style, this.id).merge(this);
        }
      }
      class b extends S {
        constructor(e, t, r) {
          super();
          this.rule = e;
          this.style = t;
          this.id = r;
        }
        getStyles() {
          return `${this.rule}{${this.style}${g(this.sheet)}}`;
        }
        clone() {
          return new b(this.rule, this.style, this.id).merge(this);
        }
      }
      function C(e, t) {
        const r = `f${l(e)}`;
        if (true) return r;
        return `${t.$displayName}_${r}`;
      }
      class k extends S {
        constructor(e, t) {
          super(t);
          this.id = e;
        }
        registerStyle(e) {
          const t = [];
          const r = [];
          const n = p("&", e, t, r);
          const s = C(n, e);
          const i = `.${true ? s : 0}`;
          f(this, n, t, r, i, true);
          return s;
        }
        registerKeyframes(e) {
          return this.registerHashRule("@keyframes", e);
        }
        registerHashRule(e, t) {
          const r = [];
          const n = [];
          const s = p("", t, r, n);
          const i = C(s, t);
          const a = `${e} ${true ? i : 0}`;
          const o = new b(a, "", `h\0${s}\0${e}`);
          f(o, s, r, n, "", false);
          this.add(o);
          return i;
        }
        registerRule(e, t) {
          const r = [];
          const n = [];
          const s = p(e, t, r, n);
          f(this, s, r, n, "", false);
        }
        registerCss(e) {
          return this.registerRule("", e);
        }
        getStyles() {
          return g(this.sheet);
        }
        clone() {
          return new k(this.id, this.changes).merge(this);
        }
      }
      function F(e) {
        return new k(`f${(++n).toString(36)}`, e);
      }
    },
    25970: (e, t, r) => {
      var n = r(63012),
        s = r(79095);
      function i(e, t) {
        return n(e, t, function (t, r) {
          return s(e, r);
        });
      }
      e.exports = i;
    },
    63012: (e, t, r) => {
      var n = r(97786),
        s = r(10611),
        i = r(71811);
      function a(e, t, r) {
        var a = -1,
          o = t.length,
          l = {};
        while (++a < o) {
          var c = t[a],
            d = n(e, c);
          if (r(d, c)) {
            s(l, i(c, e), d);
          }
        }
        return l;
      }
      e.exports = a;
    },
    78718: (e, t, r) => {
      var n = r(25970),
        s = r(99021);
      var i = s(function (e, t) {
        return e == null ? {} : n(e, t);
      });
      e.exports = i;
    },
    98601: (e, t, r) => {
      var n = r(57406);
      function s(e, t) {
        return e == null ? true : n(e, t);
      }
      e.exports = s;
    },
    20745: (e, t, r) => {
      "use strict";
      var n;
      var s = r(31051);
      if (true) {
        t.s = s.createRoot;
        n = s.hydrateRoot;
      } else {
        var i;
      }
    },
    44570: (e, t, r) => {
      "use strict";
      var n;
      n = { value: true };
      var s = r(34717);
      n = s.TypeStyle;
      var i = r(27582);
      n = i;
      var a = r(64367);
      n = a.extend;
      n = a.classes;
      n = a.media;
      var o = new s.TypeStyle({ autoGenerateTag: true });
      n = o.setStylesTarget;
      n = o.cssRaw;
      n = o.cssRule;
      n = o.forceRenderStyles;
      n = o.fontFace;
      n = o.getStyles;
      n = o.keyframes;
      n = o.reinit;
      t.oB = o.style;
      n = o.stylesheet;
      function l(e) {
        var t = new s.TypeStyle({ autoGenerateTag: false });
        if (e) {
          t.setStylesTarget(e);
        }
        return t;
      }
      n = l;
    },
    95457: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      function r(e) {
        var t = {};
        for (var n in e) {
          var s = e[n];
          if (n === "$nest") {
            var i = s;
            for (var a in i) {
              var o = i[a];
              t[a] = r(o);
            }
          } else if (n === "$debugName") {
            t.$displayName = s;
          } else {
            t[n] = s;
          }
        }
        return t;
      }
      t.convertToStyles = r;
      function n(e) {
        var t = {};
        for (var r in e) {
          if (r !== "$debugName") {
            t[r] = e[r];
          }
        }
        if (e.$debugName) {
          t.$displayName = e.$debugName;
        }
        return t;
      }
      t.convertToKeyframes = n;
    },
    34717: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      var n = r(10859);
      var s = r(95457);
      var i = r(64367);
      var a = function () {
        return n.create();
      };
      var o = (function () {
        function e(e) {
          var t = this;
          var r = e.autoGenerateTag;
          this.cssRaw = function (e) {
            if (!e) {
              return;
            }
            t._raw += e || "";
            t._pendingRawChange = true;
            t._styleUpdated();
          };
          this.cssRule = function (e) {
            var r = [];
            for (var n = 1; n < arguments.length; n++) {
              r[n - 1] = arguments[n];
            }
            var a = s.convertToStyles(i.extend.apply(void 0, r));
            t._freeStyle.registerRule(e, a);
            t._styleUpdated();
            return;
          };
          this.forceRenderStyles = function () {
            var e = t._getTag();
            if (!e) {
              return;
            }
            e.textContent = t.getStyles();
          };
          this.fontFace = function () {
            var e = [];
            for (var r = 0; r < arguments.length; r++) {
              e[r] = arguments[r];
            }
            var n = t._freeStyle;
            for (var s = 0, i = e; s < i.length; s++) {
              var a = i[s];
              n.registerRule("@font-face", a);
            }
            t._styleUpdated();
            return;
          };
          this.getStyles = function () {
            return (t._raw || "") + t._freeStyle.getStyles();
          };
          this.keyframes = function (e) {
            var r = s.convertToKeyframes(e);
            var n = t._freeStyle.registerKeyframes(r);
            t._styleUpdated();
            return n;
          };
          this.reinit = function () {
            var e = a();
            t._freeStyle = e;
            t._lastFreeStyleChangeId = e.changeId;
            t._raw = "";
            t._pendingRawChange = false;
            var r = t._getTag();
            if (r) {
              r.textContent = "";
            }
          };
          this.setStylesTarget = function (e) {
            if (t._tag) {
              t._tag.textContent = "";
            }
            t._tag = e;
            t.forceRenderStyles();
          };
          this.stylesheet = function (e) {
            var r = Object.getOwnPropertyNames(e);
            var n = {};
            for (var s = 0, i = r; s < i.length; s++) {
              var a = i[s];
              var o = e[a];
              if (o) {
                o.$debugName = a;
                n[a] = t.style(o);
              }
            }
            return n;
          };
          var n = a();
          this._autoGenerateTag = r;
          this._freeStyle = n;
          this._lastFreeStyleChangeId = n.changeId;
          this._pending = 0;
          this._pendingRawChange = false;
          this._raw = "";
          this._tag = undefined;
          this.style = this.style.bind(this);
        }
        e.prototype._afterAllSync = function (e) {
          var t = this;
          this._pending++;
          var r = this._pending;
          i.raf(function () {
            if (r !== t._pending) {
              return;
            }
            e();
          });
        };
        e.prototype._getTag = function () {
          if (this._tag) {
            return this._tag;
          }
          if (this._autoGenerateTag) {
            var e = typeof window === "undefined" ? { textContent: "" } : document.createElement("style");
            if (typeof document !== "undefined") {
              document.head.appendChild(e);
            }
            this._tag = e;
            return e;
          }
          return undefined;
        };
        e.prototype._styleUpdated = function () {
          var e = this;
          var t = this._freeStyle.changeId;
          var r = this._lastFreeStyleChangeId;
          if (!this._pendingRawChange && t === r) {
            return;
          }
          this._lastFreeStyleChangeId = t;
          this._pendingRawChange = false;
          this._afterAllSync(function () {
            return e.forceRenderStyles();
          });
        };
        e.prototype.style = function () {
          var e = this._freeStyle.registerStyle(s.convertToStyles(i.extend.apply(undefined, arguments)));
          this._styleUpdated();
          return e;
        };
        return e;
      })();
      t.TypeStyle = o;
    },
    64367: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.raf =
        typeof requestAnimationFrame === "undefined"
          ? function (e) {
              return setTimeout(e);
            }
          : typeof window === "undefined"
            ? requestAnimationFrame
            : requestAnimationFrame.bind(window);
      function r() {
        var e = [];
        for (var t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        return e
          .map(function (e) {
            return e && typeof e === "object"
              ? Object.keys(e).map(function (t) {
                  return !!e[t] && t;
                })
              : [e];
          })
          .reduce(function (e, t) {
            return e.concat(t);
          }, [])
          .filter(function (e) {
            return !!e;
          })
          .join(" ");
      }
      t.classes = r;
      function n() {
        var e = [];
        for (var t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        var r = {};
        for (var s = 0, i = e; s < i.length; s++) {
          var a = i[s];
          if (a == null || a === false) {
            continue;
          }
          for (var o in a) {
            var l = a[o];
            if (!l && l !== 0) {
              continue;
            }
            if (o === "$nest" && l) {
              r[o] = r["$nest"] ? n(r["$nest"], l) : l;
            } else if (o.indexOf("&") !== -1 || o.indexOf("@media") === 0) {
              r[o] = r[o] ? n(r[o], l) : l;
            } else {
              r[o] = l;
            }
          }
        }
        return r;
      }
      t.extend = n;
      t.media = function (e) {
        var t;
        var r = [];
        for (var i = 1; i < arguments.length; i++) {
          r[i - 1] = arguments[i];
        }
        var a = [];
        if (e.type) a.push(e.type);
        if (e.orientation) a.push("(orientation: " + e.orientation + ")");
        if (e.minWidth) a.push("(min-width: " + s(e.minWidth) + ")");
        if (e.maxWidth) a.push("(max-width: " + s(e.maxWidth) + ")");
        if (e.minHeight) a.push("(min-height: " + s(e.minHeight) + ")");
        if (e.maxHeight) a.push("(max-height: " + s(e.maxHeight) + ")");
        if (e.prefersColorScheme) a.push("(prefers-color-scheme: " + e.prefersColorScheme + ")");
        var o = "@media " + a.join(" and ");
        var l = { $nest: ((t = {}), (t[o] = n.apply(void 0, r)), t) };
        return l;
      };
      var s = function (e) {
        return typeof e === "string" ? e : e + "px";
      };
    },
    27582: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
    },
  },
]);
