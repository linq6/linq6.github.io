(self.webpackChunk_jupyter_widgets_jupyterlab_manager = self.webpackChunk_jupyter_widgets_jupyterlab_manager || []).push([
  [327],
  {
    6084: (e, t, o) => {
      "use strict";
      o.r(t),
        o.d(t, {
          CONTROL_COMM_PROTOCOL_VERSION: () => g,
          CONTROL_COMM_TARGET: () => f,
          CONTROL_COMM_TIMEOUT: () => p,
          ManagerBase: () => v,
          base64ToBuffer: () => d,
          bufferToBase64: () => m,
          bufferToHex: () => a,
          hexToBuffer: () => i,
          serialize_state: () => b,
        });
      var s = o(988),
        n = o(7262),
        r = o(7991);
      const l = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "0A",
        "0B",
        "0C",
        "0D",
        "0E",
        "0F",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "1A",
        "1B",
        "1C",
        "1D",
        "1E",
        "1F",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "2A",
        "2B",
        "2C",
        "2D",
        "2E",
        "2F",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "3A",
        "3B",
        "3C",
        "3D",
        "3E",
        "3F",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "4A",
        "4B",
        "4C",
        "4D",
        "4E",
        "4F",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
        "5A",
        "5B",
        "5C",
        "5D",
        "5E",
        "5F",
        "60",
        "61",
        "62",
        "63",
        "64",
        "65",
        "66",
        "67",
        "68",
        "69",
        "6A",
        "6B",
        "6C",
        "6D",
        "6E",
        "6F",
        "70",
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "78",
        "79",
        "7A",
        "7B",
        "7C",
        "7D",
        "7E",
        "7F",
        "80",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
        "88",
        "89",
        "8A",
        "8B",
        "8C",
        "8D",
        "8E",
        "8F",
        "90",
        "91",
        "92",
        "93",
        "94",
        "95",
        "96",
        "97",
        "98",
        "99",
        "9A",
        "9B",
        "9C",
        "9D",
        "9E",
        "9F",
        "A0",
        "A1",
        "A2",
        "A3",
        "A4",
        "A5",
        "A6",
        "A7",
        "A8",
        "A9",
        "AA",
        "AB",
        "AC",
        "AD",
        "AE",
        "AF",
        "B0",
        "B1",
        "B2",
        "B3",
        "B4",
        "B5",
        "B6",
        "B7",
        "B8",
        "B9",
        "BA",
        "BB",
        "BC",
        "BD",
        "BE",
        "BF",
        "C0",
        "C1",
        "C2",
        "C3",
        "C4",
        "C5",
        "C6",
        "C7",
        "C8",
        "C9",
        "CA",
        "CB",
        "CC",
        "CD",
        "CE",
        "CF",
        "D0",
        "D1",
        "D2",
        "D3",
        "D4",
        "D5",
        "D6",
        "D7",
        "D8",
        "D9",
        "DA",
        "DB",
        "DC",
        "DD",
        "DE",
        "DF",
        "E0",
        "E1",
        "E2",
        "E3",
        "E4",
        "E5",
        "E6",
        "E7",
        "E8",
        "E9",
        "EA",
        "EB",
        "EC",
        "ED",
        "EE",
        "EF",
        "F0",
        "F1",
        "F2",
        "F3",
        "F4",
        "F5",
        "F6",
        "F7",
        "F8",
        "F9",
        "FA",
        "FB",
        "FC",
        "FD",
        "FE",
        "FF",
      ];
      function a(e) {
        const t = new Uint8Array(e),
          o = [];
        for (let e = 0; e < t.length; e++) o.push(l[t[e]]);
        return o.join("");
      }
      function i(e) {
        const t = new Uint8Array(e.length / 2);
        for (let o = 0; o < e.length; o += 2) t[o / 2] = parseInt(e.slice(o, o + 2), 16);
        return t.buffer;
      }
      function m(e) {
        return (0, r.iI)(new Uint8Array(e));
      }
      function d(e) {
        return (0, r.bg)(e).buffer;
      }
      const _ = /(\$\$?|\\(?:begin|end)\{[a-z]*\*?\}|\\[{}$]|[{}]|(?:\n\s*)+|@@\d+@@|\\\\(?:\(|\)|\[|\]))/i;
      function c(e, t, o, s, n) {
        let r = n
          .slice(e, t + 1)
          .join("")
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
        for (navigator && "Microsoft Internet Explorer" === navigator.appName && (r = r.replace(/(%[^\n]*)\n/g, "$1<br/>\n")); t > e; )
          (n[t] = ""), t--;
        return (n[e] = "@@" + s.length + "@@"), o && (r = o(r)), s.push(r), n;
      }
      var u = o(7521),
        h = o.n(u);
      const w = s.PROTOCOL_VERSION.split(".", 1)[0],
        f = "jupyter.widget.control",
        g = "1.0.0",
        p = 4e3;
      class v {
        constructor() {
          (this.comm_target_name = "jupyter.widget"), (this._models = Object.create(null));
        }
        setViewOptions(e = {}) {
          return e;
        }
        create_view(e, t = {}) {
          const o = (0, s.uuid)(),
            n = (e.state_change = e.state_change.then(async () => {
              const n = e.get("_view_name"),
                r = e.get("_view_module");
              try {
                const s = new (await this.loadViewClass(n, r, e.get("_view_module_version")))({ model: e, options: this.setViewOptions(t) });
                return (
                  s.listenTo(e, "destroy", s.remove),
                  await s.render(),
                  s.once("remove", () => {
                    e.views && delete e.views[o];
                  }),
                  s
                );
              } catch (o) {
                console.error(`Could not create a view for model id ${e.model_id}`);
                const l = `Failed to create view for '${n}' from module '${r}' with model '${e.name}' from module '${e.module}'`,
                  a = new (s.createErrorWidgetModel(o, l))(),
                  i = new s.ErrorWidgetView({ model: a, options: this.setViewOptions(t) });
                return await i.render(), i;
              }
            }));
          return e.views && (e.views[o] = n), n;
        }
        callbacks(e) {
          return {};
        }
        async get_model(e) {
          const t = this._models[e];
          if (void 0 === t) throw new Error("widget model not found");
          return t;
        }
        has_model(e) {
          return void 0 !== this._models[e];
        }
        handle_comm_open(e, t) {
          const o = (t.metadata || {}).version || "";
          if (o.split(".", 1)[0] !== w) {
            const e = `Wrong widget protocol version: received protocol version '${o}', but was expecting major version '${w}'`;
            return console.error(e), Promise.reject(e);
          }
          const n = t.content.data,
            r = n.buffer_paths || [],
            l = t.buffers || [];
          return (
            (0, s.put_buffers)(n.state, r, l),
            this.new_model(
              { model_name: n.state._model_name, model_module: n.state._model_module, model_module_version: n.state._model_module_version, comm: e },
              n.state
            ).catch((0, s.reject)("Could not create a model.", !0))
          );
        }
        new_widget(e, t = {}) {
          let o;
          if (void 0 === e.view_name || void 0 === e.view_module || void 0 === e.view_module_version)
            return Promise.reject("new_widget(...) must be given view information in the options.");
          o = e.comm
            ? Promise.resolve(e.comm)
            : this._create_comm(
                this.comm_target_name,
                e.model_id,
                {
                  state: {
                    _model_module: e.model_module,
                    _model_module_version: e.model_module_version,
                    _model_name: e.model_name,
                    _view_module: e.view_module,
                    _view_module_version: e.view_module_version,
                    _view_name: e.view_name,
                  },
                },
                { version: s.PROTOCOL_VERSION }
              );
          const n = Object.assign({}, e);
          return o.then(
            (e) => ((n.comm = e), this.new_model(n, t).then((e) => (e.sync("create", e), e))),
            () => (n.model_id || (n.model_id = (0, s.uuid)()), this.new_model(n, t))
          );
        }
        register_model(e, t) {
          (this._models[e] = t),
            t.then((t) => {
              t.once("comm:close", () => {
                delete this._models[e];
              });
            });
        }
        async new_model(e, t = {}) {
          var o, s;
          const n = null !== (o = e.model_id) && void 0 !== o ? o : null === (s = e.comm) || void 0 === s ? void 0 : s.comm_id;
          if (!n) throw new Error("Neither comm nor model_id provided in options object. At least one must exist.");
          e.model_id = n;
          const r = this._make_model(e, t);
          return this.register_model(n, r), await r;
        }
        async _loadFromKernel() {
          let e, t;
          try {
            const o = await this._create_comm(f, (0, s.uuid)(), {}, { version: g });
            await new Promise((s, n) => {
              o.on_msg((o) => {
                (e = o.content.data),
                  "update_states" === e.method
                    ? ((t = (o.buffers || []).map((e) => (e instanceof DataView ? e : new DataView(e instanceof ArrayBuffer ? e : e.buffer)))),
                      s(null))
                    : console.warn(`\n              Unknown ${e.method} message on the Control channel\n            `);
              }),
                o.on_close(() => n("Control comm was closed too early")),
                o.send({ method: "request_states" }, {}),
                setTimeout(() => n("Control comm did not respond in time"), p);
            }),
              o.close();
          } catch (e) {
            return this._loadFromKernelModels();
          }
          const o = e.states,
            n = {},
            r = {};
          for (let o = 0; o < e.buffer_paths.length; o++) {
            const [s, ...l] = e.buffer_paths[o],
              a = t[o];
            n[s] || ((n[s] = []), (r[s] = [])), n[s].push(l), r[s].push(a);
          }
          const l = await Promise.all(
            Object.keys(o).map(async (e) => ({ widget_id: e, comm: this.has_model(e) ? void 0 : await this._create_comm("jupyter.widget", e) }))
          );
          await Promise.all(
            l.map(async ({ widget_id: e, comm: t }) => {
              const l = o[e];
              e in n && (0, s.put_buffers)(l, n[e], r[e]);
              try {
                if (t)
                  await this.new_model(
                    { model_name: l.model_name, model_module: l.model_module, model_module_version: l.model_module_version, model_id: e, comm: t },
                    l.state
                  );
                else {
                  const t = await this.get_model(e),
                    o = await t.constructor._deserialize_state(l.state, this);
                  t.set_state(o);
                }
              } catch (e) {
                console.error(e);
              }
            })
          );
        }
        async _loadFromKernelModels() {
          const e = await this._get_comm_info(),
            t = await Promise.all(
              Object.keys(e).map(async (e) => {
                if (this.has_model(e)) return;
                const t = await this._create_comm(this.comm_target_name, e);
                let o = "";
                const r = new n.PromiseDelegate();
                return (
                  t.on_msg((e) => {
                    if (e.parent_header.msg_id === o && "comm_msg" === e.header.msg_type && "update" === e.content.data.method) {
                      const o = e.content.data,
                        n = o.buffer_paths || [],
                        l = e.buffers || [];
                      (0, s.put_buffers)(o.state, n, l), r.resolve({ comm: t, msg: e });
                    }
                  }),
                  (o = t.send({ method: "request_state" }, this.callbacks(void 0))),
                  r.promise
                );
              })
            );
          await Promise.all(
            t.map(async (e) => {
              if (!e) return;
              const t = e.msg.content;
              await this.new_model(
                {
                  model_name: t.data.state._model_name,
                  model_module: t.data.state._model_module,
                  model_module_version: t.data.state._model_module_version,
                  comm: e.comm,
                },
                t.data.state
              );
            })
          );
        }
        async _make_model(e, t = {}) {
          const o = e.model_id,
            n = this.loadModelClass(e.model_name, e.model_module, e.model_module_version);
          let r;
          const l = (e, t) => new (s.createErrorWidgetModel(e, t))();
          try {
            r = await n;
          } catch (e) {
            const t = "Could not instantiate widget";
            return console.error(t), l(e, t);
          }
          if (!r) {
            const t = "Could not instantiate widget";
            return console.error(t), l(new Error(`Cannot find model module ${e.model_module}@${e.model_module_version}, ${e.model_name}`), t);
          }
          let a;
          try {
            const s = await r._deserialize_state(t, this);
            a = new r(s, { widget_manager: this, model_id: o, comm: e.comm });
          } catch (t) {
            console.error(t), (a = l(t, `Model class '${e.model_name}' from module '${e.model_module}' is loaded but can not be instantiated`));
          }
          return (a.name = e.model_name), (a.module = e.model_module), a;
        }
        clear_state() {
          return (0, s.resolvePromisesDict)(this._models).then((e) => {
            Object.keys(e).forEach((t) => e[t].close()), (this._models = Object.create(null));
          });
        }
        get_state(e = {}) {
          const t = Object.keys(this._models).map((e) => this._models[e]);
          return Promise.all(t).then((t) => b(t, e));
        }
        set_state(e) {
          if (!(e.version_major && e.version_major <= 2)) throw "Unsupported widget state format";
          const t = e.state;
          return this._get_comm_info().then((e) =>
            Promise.all(
              Object.keys(t).map((o) => {
                const n = { base64: d, hex: i },
                  r = t[o],
                  l = r.state;
                if (r.buffers) {
                  const e = r.buffers.map((e) => e.path),
                    t = r.buffers.map((e) => new DataView(n[e.encoding](e.data)));
                  (0, s.put_buffers)(r.state, e, t);
                }
                if (this.has_model(o))
                  return this.get_model(o).then((e) => e.constructor._deserialize_state(l || {}, this).then((t) => (e.set_state(t), e)));
                const a = { model_id: o, model_name: r.model_name, model_module: r.model_module, model_module_version: r.model_module_version };
                return Object.prototype.hasOwnProperty.call(e, "model_id")
                  ? this._create_comm(this.comm_target_name, o).then((e) => ((a.comm = e), this.new_model(a)))
                  : this.new_model(a, l);
              })
            )
          );
        }
        disconnect() {
          Object.keys(this._models).forEach((e) => {
            this._models[e].then((e) => {
              e.comm_live = !1;
            });
          });
        }
        resolveUrl(e) {
          return Promise.resolve(e);
        }
        inline_sanitize(e) {
          const t = (function (e) {
            const t = [];
            let o,
              s = null,
              n = null,
              r = null,
              l = 0;
            /`/.test(e)
              ? ((e = e.replace(/~/g, "~T").replace(/(^|[^\\])(`+)([^\n]*?[^`\n])\2(?!`)/gm, (e) => e.replace(/\$/g, "~D"))),
                (o = (e) => e.replace(/~([TD])/g, (e, t) => ("T" === t ? "~" : "$"))))
              : (o = (e) => e);
            let a = e.replace(/\r\n?/g, "\n").split(_);
            for (let e = 1, i = a.length; e < i; e += 2) {
              const i = a[e];
              "@" === i.charAt(0)
                ? ((a[e] = "@@" + t.length + "@@"), t.push(i))
                : null !== s
                  ? i === n
                    ? l
                      ? (r = e)
                      : ((a = c(s, e, o, t, a)), (s = null), (n = null), (r = null))
                    : i.match(/\n.*\n/)
                      ? (null !== r && ((e = r), (a = c(s, e, o, t, a))), (s = null), (n = null), (r = null), (l = 0))
                      : "{" === i
                        ? l++
                        : "}" === i && l && l--
                  : "$" === i || "$$" === i
                    ? ((s = e), (n = i), (l = 0))
                    : "\\\\(" === i || "\\\\[" === i
                      ? ((s = e), (n = "(" === i.slice(-1) ? "\\\\)" : "\\\\]"), (l = 0))
                      : "begin" === i.substr(1, 5) && ((s = e), (n = "\\end" + i.substr(6)), (l = 0));
            }
            return null !== s && null !== r && ((a = c(s, r, o, t, a)), (s = null), (n = null), (r = null)), { text: o(a.join("")), math: t };
          })(e);
          var o, s, n;
          return (
            (s =
              ((o = t.text),
              h()(o, {
                allowedTags: ["a", "abbr", "b", "code", "em", "i", "img", "li", "ol", "span", "strong", "ul"],
                allowedAttributes: { "*": ["aria-*", "class", "style", "title"], a: ["href"], img: ["src"], style: ["media", "type"] },
              }))),
            (n = t.math),
            s.replace(/@@(\d+)@@/g, (e, t) => {
              let o = n[t];
              return (
                "\\\\(" === o.substr(0, 3) && "\\\\)" === o.substr(o.length - 3)
                  ? (o = "\\(" + o.substring(3, o.length - 3) + "\\)")
                  : "\\\\[" === o.substr(0, 3) && "\\\\]" === o.substr(o.length - 3) && (o = "\\[" + o.substring(3, o.length - 3) + "\\]"),
                o
              );
            })
          );
        }
        async loadModelClass(e, t, o) {
          try {
            const s = this.loadClass(e, t, o);
            return await s, s;
          } catch (o) {
            console.error(o);
            const n = `Failed to load model class '${e}' from module '${t}'`;
            return s.createErrorWidgetModel(o, n);
          }
        }
        async loadViewClass(e, t, o) {
          try {
            const s = this.loadClass(e, t, o);
            return await s, s;
          } catch (o) {
            console.error(o);
            const n = `Failed to load view class '${e}' from module '${t}'`;
            return s.createErrorWidgetView(o, n);
          }
        }
        filterExistingModelState(e) {
          let t = e.state;
          return (
            (t = Object.keys(t)
              .filter((e) => !this.has_model(e))
              .reduce((e, o) => ((e[o] = t[o]), e), {})),
            Object.assign(Object.assign({}, e), { state: t })
          );
        }
      }
      function b(e, t = {}) {
        const o = {};
        return (
          e.forEach((e) => {
            const n = e.model_id,
              r = (0, s.remove_buffers)(e.serialize(e.get_state(t.drop_defaults))),
              l = r.buffers.map((e, t) => ({ data: m(e), path: r.buffer_paths[t], encoding: "base64" }));
            (o[n] = { model_name: e.name, model_module: e.module, model_module_version: e.get("_model_module_version"), state: r.state }),
              l.length > 0 && (o[n].buffers = l);
          }),
          { version_major: 2, version_minor: 0, state: o }
        );
      }
    },
    3215: () => {},
    8892: () => {},
    5324: () => {},
    8645: () => {},
    588: () => {},
  },
]);
