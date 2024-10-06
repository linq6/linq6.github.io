"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1168],
  {
    61168: (t, e, s) => {
      s.r(e);
      s.d(e, {
        YBaseCell: () => S,
        YCodeCell: () => C,
        YDocument: () => b,
        YFile: () => v,
        YMarkdownCell: () => U,
        YNotebook: () => D,
        YRawCell: () => V,
        convertYMapEventToMapChange: () => n,
        createMutex: () => a,
        createStandaloneCell: () => k,
      });
      function n(t) {
        let e = new Map();
        t.changes.keys.forEach((t, s) => {
          e.set(s, { action: t.action, oldValue: t.oldValue, newValue: this.ymeta.get(s) });
        });
        return e;
      }
      const a = () => {
        let t = true;
        return (e) => {
          if (t) {
            t = false;
            try {
              e();
            } finally {
              t = true;
            }
          }
        };
      };
      var o = s(5596);
      var i = s(71372);
      var r = s(20817);
      var d = s(14247);
      var l = s(58290);
      var c = s(97027);
      var h = s(66350);
      const u = 3e4;
      class g extends l.y {
        constructor(t) {
          super();
          this.doc = t;
          this.clientID = t.clientID;
          this.states = new Map();
          this.meta = new Map();
          this._checkInterval = setInterval(
            () => {
              const t = r.ZG();
              if (this.getLocalState() !== null && u / 2 <= t - this.meta.get(this.clientID).lastUpdated) {
                this.setLocalState(this.getLocalState());
              }
              const e = [];
              this.meta.forEach((s, n) => {
                if (n !== this.clientID && u <= t - s.lastUpdated && this.states.has(n)) {
                  e.push(n);
                }
              });
              if (e.length > 0) {
                p(this, e, "timeout");
              }
            },
            d.GW(u / 10)
          );
          t.on("destroy", () => {
            this.destroy();
          });
          this.setLocalState({});
        }
        destroy() {
          this.emit("destroy", [this]);
          this.setLocalState(null);
          super.destroy();
          clearInterval(this._checkInterval);
        }
        getLocalState() {
          return this.states.get(this.clientID) || null;
        }
        setLocalState(t) {
          const e = this.clientID;
          const s = this.meta.get(e);
          const n = s === undefined ? 0 : s.clock + 1;
          const a = this.states.get(e);
          if (t === null) {
            this.states.delete(e);
          } else {
            this.states.set(e, t);
          }
          this.meta.set(e, { clock: n, lastUpdated: r.ZG() });
          const o = [];
          const i = [];
          const d = [];
          const l = [];
          if (t === null) {
            l.push(e);
          } else if (a == null) {
            if (t != null) {
              o.push(e);
            }
          } else {
            i.push(e);
            if (!c.Hi(a, t)) {
              d.push(e);
            }
          }
          if (o.length > 0 || d.length > 0 || l.length > 0) {
            this.emit("change", [{ added: o, updated: d, removed: l }, "local"]);
          }
          this.emit("update", [{ added: o, updated: i, removed: l }, "local"]);
        }
        setLocalStateField(t, e) {
          const s = this.getLocalState();
          if (s !== null) {
            this.setLocalState({ ...s, [t]: e });
          }
        }
        getStates() {
          return this.states;
        }
      }
      const p = (t, e, s) => {
        const n = [];
        for (let a = 0; a < e.length; a++) {
          const s = e[a];
          if (t.states.has(s)) {
            t.states.delete(s);
            if (s === t.clientID) {
              const e = t.meta.get(s);
              t.meta.set(s, { clock: e.clock + 1, lastUpdated: r.ZG() });
            }
            n.push(s);
          }
        }
        if (n.length > 0) {
          t.emit("change", [{ added: [], updated: [], removed: n }, s]);
          t.emit("update", [{ added: [], updated: [], removed: n }, s]);
        }
      };
      const m = (t, e, s = t.states) => {
        const n = e.length;
        const a = encoding.createEncoder();
        encoding.writeVarUint(a, n);
        for (let o = 0; o < n; o++) {
          const n = e[o];
          const i = s.get(n) || null;
          const r = t.meta.get(n).clock;
          encoding.writeVarUint(a, n);
          encoding.writeVarUint(a, r);
          encoding.writeVarString(a, JSON.stringify(i));
        }
        return encoding.toUint8Array(a);
      };
      const y = (t, e) => {
        const s = decoding.createDecoder(t);
        const n = encoding.createEncoder();
        const a = decoding.readVarUint(s);
        encoding.writeVarUint(n, a);
        for (let o = 0; o < a; o++) {
          const t = decoding.readVarUint(s);
          const a = decoding.readVarUint(s);
          const o = JSON.parse(decoding.readVarString(s));
          const i = e(o);
          encoding.writeVarUint(n, t);
          encoding.writeVarUint(n, a);
          encoding.writeVarString(n, JSON.stringify(i));
        }
        return encoding.toUint8Array(n);
      };
      const _ = (t, e, s) => {
        const n = decoding.createDecoder(e);
        const a = time.getUnixTime();
        const o = [];
        const i = [];
        const r = [];
        const d = [];
        const l = decoding.readVarUint(n);
        for (let c = 0; c < l; c++) {
          const e = decoding.readVarUint(n);
          let s = decoding.readVarUint(n);
          const l = JSON.parse(decoding.readVarString(n));
          const c = t.meta.get(e);
          const h = t.states.get(e);
          const u = c === undefined ? 0 : c.clock;
          if (u < s || (u === s && l === null && t.states.has(e))) {
            if (l === null) {
              if (e === t.clientID && t.getLocalState() != null) {
                s++;
              } else {
                t.states.delete(e);
              }
            } else {
              t.states.set(e, l);
            }
            t.meta.set(e, { clock: s, lastUpdated: a });
            if (c === undefined && l !== null) {
              o.push(e);
            } else if (c !== undefined && l === null) {
              d.push(e);
            } else if (l !== null) {
              if (!f.equalityDeep(l, h)) {
                r.push(e);
              }
              i.push(e);
            }
          }
        }
        if (o.length > 0 || r.length > 0 || d.length > 0) {
          t.emit("change", [{ added: o, updated: r, removed: d }, s]);
        }
        if (o.length > 0 || i.length > 0 || d.length > 0) {
          t.emit("update", [{ added: o, updated: i, removed: d }, s]);
        }
      };
      class b {
        constructor(t) {
          var e;
          this.onStateChanged = (t) => {
            const e = new Array();
            t.keysChanged.forEach((s) => {
              const n = t.changes.keys.get(s);
              if (n) {
                e.push({ name: s, oldValue: n.oldValue, newValue: this.ystate.get(s) });
              }
            });
            this._changed.emit({ stateChange: e });
          };
          this._changed = new i.Signal(this);
          this._isDisposed = false;
          this._disposed = new i.Signal(this);
          this._ydoc = (e = t === null || t === void 0 ? void 0 : t.ydoc) !== null && e !== void 0 ? e : new h.Doc();
          this._ystate = this._ydoc.getMap("state");
          this._undoManager = new h.UndoManager([], { trackedOrigins: new Set([this]), doc: this._ydoc });
          this._awareness = new g(this._ydoc);
          this._ystate.observe(this.onStateChanged);
        }
        get ydoc() {
          return this._ydoc;
        }
        get ystate() {
          return this._ystate;
        }
        get undoManager() {
          return this._undoManager;
        }
        get awareness() {
          return this._awareness;
        }
        get changed() {
          return this._changed;
        }
        get disposed() {
          return this._disposed;
        }
        get isDisposed() {
          return this._isDisposed;
        }
        get state() {
          return o.JSONExt.deepCopy(this.ystate.toJSON());
        }
        canUndo() {
          return this.undoManager.undoStack.length > 0;
        }
        canRedo() {
          return this.undoManager.redoStack.length > 0;
        }
        dispose() {
          if (this._isDisposed) {
            return;
          }
          this._isDisposed = true;
          this.ystate.unobserve(this.onStateChanged);
          this.awareness.destroy();
          this.undoManager.destroy();
          this.ydoc.destroy();
          this._disposed.emit();
          i.Signal.clearData(this);
        }
        getState(t) {
          const e = this.ystate.get(t);
          return typeof e === "undefined" ? e : o.JSONExt.deepCopy(e);
        }
        setState(t, e) {
          if (!o.JSONExt.deepEqual(this.ystate.get(t), e)) {
            this.ystate.set(t, e);
          }
        }
        undo() {
          this.undoManager.undo();
        }
        redo() {
          this.undoManager.redo();
        }
        clearUndoHistory() {
          this.undoManager.clear();
        }
        transact(t, e = true) {
          this.ydoc.transact(t, e ? this : null);
        }
      }
      class v extends b {
        constructor() {
          super();
          this.version = "1.0.0";
          this.ysource = this.ydoc.getText("source");
          this._modelObserver = (t) => {
            this._changed.emit({ sourceChange: t.changes.delta });
          };
          this.undoManager.addToScope(this.ysource);
          this.ysource.observe(this._modelObserver);
        }
        static create() {
          return new v();
        }
        get source() {
          return this.getSource();
        }
        set source(t) {
          this.setSource(t);
        }
        dispose() {
          if (this.isDisposed) {
            return;
          }
          this.ysource.unobserve(this._modelObserver);
          super.dispose();
        }
        getSource() {
          return this.ysource.toString();
        }
        setSource(t) {
          this.transact(() => {
            const e = this.ysource;
            e.delete(0, e.length);
            e.insert(0, t);
          });
        }
        updateSource(t, e, s = "") {
          this.transact(() => {
            const n = this.ysource;
            n.insert(t, s);
            n.delete(t + s.length, e - t);
          });
        }
      }
      const M = (t, e = {}) => {
        switch (t.get("cell_type")) {
          case "code":
            return new C(t, t.get("source"), t.get("outputs"), e);
          case "markdown":
            return new U(t, t.get("source"), e);
          case "raw":
            return new V(t, t.get("source"), e);
          default:
            throw new Error("Found unknown cell type");
        }
      };
      const w = (t, e) => {
        var s, n;
        const a = new h.Map();
        const i = new h.Text();
        const r = new h.Map();
        a.set("source", i);
        a.set("metadata", r);
        a.set("cell_type", t.cell_type);
        a.set("id", (s = t.id) !== null && s !== void 0 ? s : o.UUID.uuid4());
        let d;
        switch (t.cell_type) {
          case "markdown": {
            d = new U(a, i, { notebook: e }, r);
            if (t.attachments != null) {
              d.setAttachments(t.attachments);
            }
            break;
          }
          case "code": {
            const s = new h.Array();
            a.set("outputs", s);
            d = new C(a, i, s, { notebook: e }, r);
            const o = t;
            d.execution_count = (n = o.execution_count) !== null && n !== void 0 ? n : null;
            if (o.outputs) {
              d.setOutputs(o.outputs);
            }
            break;
          }
          default: {
            d = new V(a, i, { notebook: e }, r);
            if (t.attachments) {
              d.setAttachments(t.attachments);
            }
            break;
          }
        }
        if (t.metadata != null) {
          d.setMetadata(t.metadata);
        }
        if (t.source != null) {
          d.setSource(typeof t.source === "string" ? t.source : t.source.join(""));
        }
        return d;
      };
      const k = (t) => w(t);
      class S {
        static create(t) {
          return w({ id: t, cell_type: this.prototype.cell_type });
        }
        constructor(t, e, s = {}, n) {
          this._modelObserver = (t) => {
            this._changed.emit(this.getChanges(t));
          };
          this._metadataChanged = new i.Signal(this);
          this._notebook = null;
          this._changed = new i.Signal(this);
          this._disposed = new i.Signal(this);
          this._isDisposed = false;
          this._undoManager = null;
          this.ymodel = t;
          this._ysource = e;
          this._ymetadata = n !== null && n !== void 0 ? n : this.ymodel.get("metadata");
          this._prevSourceLength = e ? e.length : 0;
          this._notebook = null;
          this._awareness = null;
          this._undoManager = null;
          if (s.notebook) {
            this._notebook = s.notebook;
          } else {
            const t = new h.Doc();
            t.getArray().insert(0, [this.ymodel]);
            this._awareness = new g(t);
            this._undoManager = new h.UndoManager([this.ymodel], { trackedOrigins: new Set([this]) });
          }
          this.ymodel.observeDeep(this._modelObserver);
        }
        get awareness() {
          var t, e, s;
          return (s = (t = this._awareness) !== null && t !== void 0 ? t : (e = this.notebook) === null || e === void 0 ? void 0 : e.awareness) !==
            null && s !== void 0
            ? s
            : null;
        }
        get cell_type() {
          throw new Error("A YBaseCell must not be constructed");
        }
        get changed() {
          return this._changed;
        }
        get disposed() {
          return this._disposed;
        }
        get id() {
          return this.getId();
        }
        get isDisposed() {
          return this._isDisposed;
        }
        get isStandalone() {
          return this._notebook !== null;
        }
        get metadata() {
          return this.getMetadata();
        }
        set metadata(t) {
          this.setMetadata(t);
        }
        get metadataChanged() {
          return this._metadataChanged;
        }
        get notebook() {
          return this._notebook;
        }
        get source() {
          return this.getSource();
        }
        set source(t) {
          this.setSource(t);
        }
        get undoManager() {
          var t;
          if (!this.notebook) {
            return this._undoManager;
          }
          return ((t = this.notebook) === null || t === void 0 ? void 0 : t.disableDocumentWideUndoRedo)
            ? this._undoManager
            : this.notebook.undoManager;
        }
        setUndoManager() {
          if (this._undoManager) {
            throw new Error("The cell undo manager is already set.");
          }
          if (this._notebook && this._notebook.disableDocumentWideUndoRedo) {
            this._undoManager = new h.UndoManager([this.ymodel], { trackedOrigins: new Set([this]) });
          }
        }
        get ysource() {
          return this._ysource;
        }
        canUndo() {
          return !!this.undoManager && this.undoManager.undoStack.length > 0;
        }
        canRedo() {
          return !!this.undoManager && this.undoManager.redoStack.length > 0;
        }
        clearUndoHistory() {
          var t;
          (t = this.undoManager) === null || t === void 0 ? void 0 : t.clear();
        }
        undo() {
          var t;
          (t = this.undoManager) === null || t === void 0 ? void 0 : t.undo();
        }
        redo() {
          var t;
          (t = this.undoManager) === null || t === void 0 ? void 0 : t.redo();
        }
        dispose() {
          var t;
          if (this._isDisposed) return;
          this._isDisposed = true;
          this.ymodel.unobserveDeep(this._modelObserver);
          if (this._awareness) {
            const t = this._awareness.doc;
            this._awareness.destroy();
            t.destroy();
          }
          if (this._undoManager) {
            if (this._undoManager === ((t = this.notebook) === null || t === void 0 ? void 0 : t.undoManager)) {
              this._undoManager = null;
            } else {
              this._undoManager.destroy();
            }
          }
          this._disposed.emit();
          i.Signal.clearData(this);
        }
        getId() {
          return this.ymodel.get("id");
        }
        getSource() {
          return this.ysource.toString();
        }
        setSource(t) {
          this.transact(() => {
            this.ysource.delete(0, this.ysource.length);
            this.ysource.insert(0, t);
          });
        }
        updateSource(t, e, s = "") {
          this.transact(() => {
            const n = this.ysource;
            n.insert(t, s);
            n.delete(t + s.length, e - t);
          });
        }
        deleteMetadata(t) {
          if (typeof this.getMetadata(t) === "undefined") {
            return;
          }
          this.transact(() => {
            this._ymetadata.delete(t);
            const e = this.getMetadata("jupyter");
            if (t === "collapsed" && e) {
              const { outputs_hidden: t, ...s } = e;
              if (Object.keys(s).length === 0) {
                this._ymetadata.delete("jupyter");
              } else {
                this._ymetadata.set("jupyter", s);
              }
            } else if (t === "jupyter") {
              this._ymetadata.delete("collapsed");
            }
          }, false);
        }
        getMetadata(t) {
          const e = this._ymetadata;
          if (e === undefined) {
            return undefined;
          }
          if (typeof t === "string") {
            const s = e.get(t);
            return typeof s === "undefined" ? undefined : o.JSONExt.deepCopy(e.get(t));
          } else {
            return o.JSONExt.deepCopy(e.toJSON());
          }
        }
        setMetadata(t, e) {
          var s, n;
          if (typeof t === "string") {
            if (typeof e === "undefined") {
              throw new TypeError(`Metadata value for ${t} cannot be 'undefined'; use deleteMetadata.`);
            }
            const n = t;
            if (o.JSONExt.deepEqual((s = this.getMetadata(n)) !== null && s !== void 0 ? s : null, e)) {
              return;
            }
            this.transact(() => {
              var t;
              this._ymetadata.set(n, e);
              if (n === "collapsed") {
                const s = (t = this.getMetadata("jupyter")) !== null && t !== void 0 ? t : {};
                if (s.outputs_hidden !== e) {
                  this.setMetadata("jupyter", { ...s, outputs_hidden: e });
                }
              } else if (n === "jupyter") {
                const t = e["outputs_hidden"];
                if (typeof t !== "undefined") {
                  if (this.getMetadata("collapsed") !== t) {
                    this.setMetadata("collapsed", t);
                  }
                } else {
                  this.deleteMetadata("collapsed");
                }
              }
            }, false);
          } else {
            const e = o.JSONExt.deepCopy(t);
            if (e.collapsed != null) {
              e.jupyter = e.jupyter || {};
              e.jupyter.outputs_hidden = e.collapsed;
            } else if (((n = e === null || e === void 0 ? void 0 : e.jupyter) === null || n === void 0 ? void 0 : n.outputs_hidden) != null) {
              e.collapsed = e.jupyter.outputs_hidden;
            }
            if (!o.JSONExt.deepEqual(e, this.getMetadata())) {
              this.transact(() => {
                for (const [t, s] of Object.entries(e)) {
                  this._ymetadata.set(t, s);
                }
              }, false);
            }
          }
        }
        toJSON() {
          return { id: this.getId(), cell_type: this.cell_type, source: this.getSource(), metadata: this.getMetadata() };
        }
        transact(t, e = true) {
          !this.notebook || this.notebook.disableDocumentWideUndoRedo
            ? this.ymodel.doc == null
              ? t()
              : this.ymodel.doc.transact(t, e ? this : null)
            : this.notebook.transact(t, e);
        }
        getChanges(t) {
          const e = {};
          const s = t.find((t) => t.target === this.ymodel.get("source"));
          if (s) {
            e.sourceChange = s.changes.delta;
          }
          const n = t.find((t) => t.target === this._ymetadata);
          if (n) {
            e.metadataChange = n.changes.keys;
            n.changes.keys.forEach((t, e) => {
              switch (t.action) {
                case "add":
                  this._metadataChanged.emit({ key: e, newValue: this._ymetadata.get(e), type: "add" });
                  break;
                case "delete":
                  this._metadataChanged.emit({ key: e, oldValue: t.oldValue, type: "remove" });
                  break;
                case "update":
                  {
                    const s = this._ymetadata.get(e);
                    const n = t.oldValue;
                    let a = true;
                    if (typeof n == "object" && typeof s == "object") {
                      a = o.JSONExt.deepEqual(n, s);
                    } else {
                      a = n === s;
                    }
                    if (!a) {
                      this._metadataChanged.emit({ key: e, type: "change", oldValue: n, newValue: s });
                    }
                  }
                  break;
              }
            });
          }
          const a = t.find((t) => t.target === this.ymodel);
          const i = this.ymodel.get("source");
          if (a && a.keysChanged.has("source")) {
            e.sourceChange = [{ delete: this._prevSourceLength }, { insert: i.toString() }];
          }
          this._prevSourceLength = i.length;
          return e;
        }
      }
      class C extends S {
        static create(t) {
          return super.create(t);
        }
        constructor(t, e, s, n = {}, a) {
          super(t, e, n, a);
          this._youtputs = s;
        }
        get cell_type() {
          return "code";
        }
        get execution_count() {
          return this.ymodel.get("execution_count") || null;
        }
        set execution_count(t) {
          if (this.ymodel.get("execution_count") !== t) {
            this.transact(() => {
              this.ymodel.set("execution_count", t);
            }, false);
          }
        }
        get outputs() {
          return this.getOutputs();
        }
        set outputs(t) {
          this.setOutputs(t);
        }
        getOutputs() {
          return o.JSONExt.deepCopy(this._youtputs.toArray());
        }
        setOutputs(t) {
          this.transact(() => {
            this._youtputs.delete(0, this._youtputs.length);
            this._youtputs.insert(0, t);
          }, false);
        }
        updateOutputs(t, e, s = []) {
          const n = e < this._youtputs.length ? e - t : this._youtputs.length - t;
          this.transact(() => {
            this._youtputs.delete(t, n);
            this._youtputs.insert(t, s);
          }, false);
        }
        toJSON() {
          return { ...super.toJSON(), outputs: this.getOutputs(), execution_count: this.execution_count };
        }
        getChanges(t) {
          const e = super.getChanges(t);
          const s = t.find((t) => t.target === this.ymodel.get("outputs"));
          if (s) {
            e.outputsChange = s.changes.delta;
          }
          const n = t.find((t) => t.target === this.ymodel);
          if (n && n.keysChanged.has("execution_count")) {
            const t = n.changes.keys.get("execution_count");
            e.executionCountChange = { oldValue: t.oldValue, newValue: this.ymodel.get("execution_count") };
          }
          return e;
        }
      }
      class O extends S {
        get attachments() {
          return this.getAttachments();
        }
        set attachments(t) {
          this.setAttachments(t);
        }
        getAttachments() {
          return this.ymodel.get("attachments");
        }
        setAttachments(t) {
          this.transact(() => {
            if (t == null) {
              this.ymodel.delete("attachments");
            } else {
              this.ymodel.set("attachments", t);
            }
          }, false);
        }
        getChanges(t) {
          const e = super.getChanges(t);
          const s = t.find((t) => t.target === this.ymodel);
          if (s && s.keysChanged.has("attachments")) {
            const t = s.changes.keys.get("attachments");
            e.executionCountChange = { oldValue: t.oldValue, newValue: this.ymodel.get("attachments") };
          }
          return e;
        }
      }
      class V extends O {
        static create(t) {
          return super.create(t);
        }
        get cell_type() {
          return "raw";
        }
        toJSON() {
          return { id: this.getId(), cell_type: "raw", source: this.getSource(), metadata: this.getMetadata(), attachments: this.getAttachments() };
        }
      }
      class U extends O {
        static create(t) {
          return super.create(t);
        }
        get cell_type() {
          return "markdown";
        }
        toJSON() {
          return {
            id: this.getId(),
            cell_type: "markdown",
            source: this.getSource(),
            metadata: this.getMetadata(),
            attachments: this.getAttachments(),
          };
        }
      }
      class D extends b {
        constructor(t = {}) {
          var e;
          super();
          this.version = "1.0.0";
          this.ymeta = this.ydoc.getMap("meta");
          this._onMetaChanged = (t) => {
            const e = t.find((t) => t.target === this.ymeta.get("metadata"));
            if (e) {
              const t = e.changes.keys;
              const s = this.ymeta.get("metadata");
              e.changes.keys.forEach((t, e) => {
                switch (t.action) {
                  case "add":
                    this._metadataChanged.emit({ key: e, type: "add", newValue: s.get(e) });
                    break;
                  case "delete":
                    this._metadataChanged.emit({ key: e, type: "remove", oldValue: t.oldValue });
                    break;
                  case "update":
                    {
                      const n = s.get(e);
                      const a = t.oldValue;
                      let i = true;
                      if (typeof a == "object" && typeof n == "object") {
                        i = o.JSONExt.deepEqual(a, n);
                      } else {
                        i = a === n;
                      }
                      if (!i) {
                        this._metadataChanged.emit({ key: e, type: "change", oldValue: a, newValue: n });
                      }
                    }
                    break;
                }
              });
              this._changed.emit({ metadataChange: t });
            }
            const s = t.find((t) => t.target === this.ymeta);
            if (!s) {
              return;
            }
            if (s.keysChanged.has("metadata")) {
              const t = s.changes.keys.get("metadata");
              if ((t === null || t === void 0 ? void 0 : t.action) === "add" && !t.oldValue) {
                const t = new Map();
                for (const e of Object.keys(this.metadata)) {
                  t.set(e, { action: "add", oldValue: undefined });
                  this._metadataChanged.emit({ key: e, type: "add", newValue: this.getMetadata(e) });
                }
                this._changed.emit({ metadataChange: t });
              }
            }
            if (s.keysChanged.has("nbformat")) {
              const t = s.changes.keys.get("nbformat");
              const e = {
                key: "nbformat",
                oldValue: (t === null || t === void 0 ? void 0 : t.oldValue) ? t.oldValue : undefined,
                newValue: this.nbformat,
              };
              this._changed.emit({ nbformatChanged: e });
            }
            if (s.keysChanged.has("nbformat_minor")) {
              const t = s.changes.keys.get("nbformat_minor");
              const e = {
                key: "nbformat_minor",
                oldValue: (t === null || t === void 0 ? void 0 : t.oldValue) ? t.oldValue : undefined,
                newValue: this.nbformat_minor,
              };
              this._changed.emit({ nbformatChanged: e });
            }
          };
          this._onYCellsChanged = (t) => {
            t.changes.added.forEach((t) => {
              const e = t.content.type;
              if (!this._ycellMapping.has(e)) {
                const t = M(e, { notebook: this });
                t.setUndoManager();
                this._ycellMapping.set(e, t);
              }
            });
            t.changes.deleted.forEach((t) => {
              const e = t.content.type;
              const s = this._ycellMapping.get(e);
              if (s) {
                s.dispose();
                this._ycellMapping.delete(e);
              }
            });
            let e = 0;
            const s = [];
            t.changes.delta.forEach((t) => {
              if (t.insert != null) {
                const n = t.insert.map((t) => this._ycellMapping.get(t));
                s.push({ insert: n });
                this.cells.splice(e, 0, ...n);
                e += t.insert.length;
              } else if (t.delete != null) {
                s.push(t);
                this.cells.splice(e, t.delete);
              } else if (t.retain != null) {
                s.push(t);
                e += t.retain;
              }
            });
            this._changed.emit({ cellsChange: s });
          };
          this._metadataChanged = new i.Signal(this);
          this._ycells = this.ydoc.getArray("cells");
          this._ycellMapping = new WeakMap();
          this._disableDocumentWideUndoRedo = (e = t.disableDocumentWideUndoRedo) !== null && e !== void 0 ? e : false;
          this.cells = this._ycells.toArray().map((t) => {
            if (!this._ycellMapping.has(t)) {
              this._ycellMapping.set(t, M(t, { notebook: this }));
            }
            return this._ycellMapping.get(t);
          });
          this.undoManager.addToScope(this._ycells);
          this._ycells.observe(this._onYCellsChanged);
          this.ymeta.observeDeep(this._onMetaChanged);
        }
        static create(t = {}) {
          var e, s, n, a, o, i, r, d, l;
          const c = new D({ disableDocumentWideUndoRedo: (e = t.disableDocumentWideUndoRedo) !== null && e !== void 0 ? e : false });
          const h = {
            cells: (n = (s = t.data) === null || s === void 0 ? void 0 : s.cells) !== null && n !== void 0 ? n : [],
            nbformat: (o = (a = t.data) === null || a === void 0 ? void 0 : a.nbformat) !== null && o !== void 0 ? o : 4,
            nbformat_minor: (r = (i = t.data) === null || i === void 0 ? void 0 : i.nbformat_minor) !== null && r !== void 0 ? r : 5,
            metadata: (l = (d = t.data) === null || d === void 0 ? void 0 : d.metadata) !== null && l !== void 0 ? l : {},
          };
          c.fromJSON(h);
          return c;
        }
        get disableDocumentWideUndoRedo() {
          return this._disableDocumentWideUndoRedo;
        }
        get metadata() {
          return this.getMetadata();
        }
        set metadata(t) {
          this.setMetadata(t);
        }
        get metadataChanged() {
          return this._metadataChanged;
        }
        get nbformat() {
          return this.ymeta.get("nbformat");
        }
        set nbformat(t) {
          this.transact(() => {
            this.ymeta.set("nbformat", t);
          }, false);
        }
        get nbformat_minor() {
          return this.ymeta.get("nbformat_minor");
        }
        set nbformat_minor(t) {
          this.transact(() => {
            this.ymeta.set("nbformat_minor", t);
          }, false);
        }
        dispose() {
          if (this.isDisposed) {
            return;
          }
          this._ycells.unobserve(this._onYCellsChanged);
          this.ymeta.unobserveDeep(this._onMetaChanged);
          super.dispose();
        }
        getCell(t) {
          return this.cells[t];
        }
        addCell(t) {
          return this.insertCell(this._ycells.length, t);
        }
        insertCell(t, e) {
          return this.insertCells(t, [e])[0];
        }
        insertCells(t, e) {
          const s = e.map((t) => {
            const e = w(t, this);
            this._ycellMapping.set(e.ymodel, e);
            return e;
          });
          this.transact(() => {
            this._ycells.insert(
              t,
              s.map((t) => t.ymodel)
            );
          });
          s.forEach((t) => {
            t.setUndoManager();
          });
          return s;
        }
        moveCell(t, e) {
          this.moveCells(t, e);
        }
        moveCells(t, e, s = 1) {
          const n = new Array(s).fill(true).map((e, s) => this.getCell(t + s).toJSON());
          this.transact(() => {
            this._ycells.delete(t, s);
            this._ycells.insert(
              t > e ? e : e - s + 1,
              n.map((t) => w(t, this).ymodel)
            );
          });
        }
        deleteCell(t) {
          this.deleteCellRange(t, t + 1);
        }
        deleteCellRange(t, e) {
          this.transact(() => {
            this._ycells.delete(t, e - t);
          });
        }
        deleteMetadata(t) {
          if (typeof this.getMetadata(t) === "undefined") {
            return;
          }
          const e = this.metadata;
          delete e[t];
          this.setMetadata(e);
        }
        getMetadata(t) {
          const e = this.ymeta.get("metadata");
          if (e === undefined) {
            return undefined;
          }
          if (typeof t === "string") {
            const s = e.get(t);
            return typeof s === "undefined" ? undefined : o.JSONExt.deepCopy(s);
          } else {
            return o.JSONExt.deepCopy(e.toJSON());
          }
        }
        setMetadata(t, e) {
          var s;
          if (typeof t === "string") {
            if (typeof e === "undefined") {
              throw new TypeError(`Metadata value for ${t} cannot be 'undefined'; use deleteMetadata.`);
            }
            if (o.JSONExt.deepEqual((s = this.getMetadata(t)) !== null && s !== void 0 ? s : null, e)) {
              return;
            }
            const n = {};
            n[t] = e;
            this.updateMetadata(n);
          } else {
            if (!this.metadata || !o.JSONExt.deepEqual(this.metadata, t)) {
              const e = o.JSONExt.deepCopy(t);
              const s = this.ymeta.get("metadata");
              if (s === undefined) {
                return undefined;
              }
              this.transact(() => {
                s.clear();
                for (const [t, n] of Object.entries(e)) {
                  s.set(t, n);
                }
              });
            }
          }
        }
        updateMetadata(t) {
          const e = o.JSONExt.deepCopy(t);
          const s = this.ymeta.get("metadata");
          if (s === undefined) {
            return undefined;
          }
          this.transact(() => {
            for (const [t, n] of Object.entries(e)) {
              s.set(t, n);
            }
          });
        }
        fromJSON(t) {
          this.transact(() => {
            this.nbformat = t.nbformat;
            this.nbformat_minor = t.nbformat_minor;
            const e = t.metadata;
            if (e["orig_nbformat"] !== undefined) {
              delete e["orig_nbformat"];
            }
            if (!this.metadata) {
              const t = new h.Map();
              for (const [s, n] of Object.entries(e)) {
                t.set(s, n);
              }
              this.ymeta.set("metadata", t);
            } else {
              this.metadata = e;
            }
            const s = t.nbformat === 4 && t.nbformat_minor >= 5;
            const n = t.cells.map((t) => {
              if (!s) {
                delete t.id;
              }
              return t;
            });
            this.insertCells(this.cells.length, n);
            this.deleteCellRange(0, this.cells.length);
          });
        }
        toJSON() {
          const t = this.nbformat === 4 && this.nbformat_minor <= 4;
          return {
            metadata: this.metadata,
            nbformat_minor: this.nbformat_minor,
            nbformat: this.nbformat,
            cells: this.cells.map((e) => {
              const s = e.toJSON();
              if (t) {
                delete s.id;
              }
              return s;
            }),
          };
        }
      }
    },
    7049: (t, e, s) => {
      s.d(e, { Dp: () => r, Z$: () => n, kJ: () => u, s7: () => i });
      const n = (t) => t[t.length - 1];
      const a = () => [];
      const o = (t) => t.slice();
      const i = (t, e) => {
        for (let s = 0; s < e.length; s++) {
          t.push(e[s]);
        }
      };
      const r = Array.from;
      const d = (t, e) => {
        for (let s = 0; s < t.length; s++) {
          if (!e(t[s], s, t)) {
            return false;
          }
        }
        return true;
      };
      const l = (t, e) => {
        for (let s = 0; s < t.length; s++) {
          if (e(t[s], s, t)) {
            return true;
          }
        }
        return false;
      };
      const c = (t, e) => t.length === e.length && d(t, (t, s) => t === e[s]);
      const h = (t) => t.reduce((t, e) => t.concat(e), []);
      const u = Array.isArray;
      const g = (t) => r(set.from(t));
      const f = (t, e) => {
        const s = set.create();
        const n = [];
        for (let a = 0; a < t.length; a++) {
          const o = t[a];
          const i = e(o);
          if (!s.has(i)) {
            s.add(i);
            n.push(o);
          }
        }
        return n;
      };
    },
    97027: (t, e, s) => {
      s.d(e, { Hi: () => c, PP: () => a, gB: () => h });
      var n = s(59735);
      const a = (t, e, s = 0) => {
        try {
          for (; s < t.length; s++) {
            t[s](...e);
          }
        } finally {
          if (s < t.length) {
            a(t, e, s + 1);
          }
        }
      };
      const o = () => {};
      const i = (t) => t();
      const r = (t) => t;
      const d = (t, e) => t === e;
      const l = (t, e) =>
        t === e ||
        (t != null &&
          e != null &&
          t.constructor === e.constructor &&
          ((t instanceof Array && array.equalFlat(t, e)) || (typeof t === "object" && object.equalFlat(t, e))));
      const c = (t, e) => {
        if (t == null || e == null) {
          return d(t, e);
        }
        if (t.constructor !== e.constructor) {
          return false;
        }
        if (t === e) {
          return true;
        }
        switch (t.constructor) {
          case ArrayBuffer:
            t = new Uint8Array(t);
            e = new Uint8Array(e);
          case Uint8Array: {
            if (t.byteLength !== e.byteLength) {
              return false;
            }
            for (let s = 0; s < t.length; s++) {
              if (t[s] !== e[s]) {
                return false;
              }
            }
            break;
          }
          case Set: {
            if (t.size !== e.size) {
              return false;
            }
            for (const s of t) {
              if (!e.has(s)) {
                return false;
              }
            }
            break;
          }
          case Map: {
            if (t.size !== e.size) {
              return false;
            }
            for (const s of t.keys()) {
              if (!e.has(s) || !c(t.get(s), e.get(s))) {
                return false;
              }
            }
            break;
          }
          case Object:
            if (n.kE(t) !== n.kE(e)) {
              return false;
            }
            for (const s in t) {
              if (!n.l$(t, s) || !c(t[s], e[s])) {
                return false;
              }
            }
            break;
          case Array:
            if (t.length !== e.length) {
              return false;
            }
            for (let s = 0; s < t.length; s++) {
              if (!c(t[s], e[s])) {
                return false;
              }
            }
            break;
          default:
            return false;
        }
        return true;
      };
      const h = (t, e) => e.includes(t);
    },
    72382: (t, e, s) => {
      s.d(e, { JG: () => a, UI: () => i, Ue: () => n, Yj: () => r, Yu: () => o });
      const n = () => new Map();
      const a = (t) => {
        const e = n();
        t.forEach((t, s) => {
          e.set(s, t);
        });
        return e;
      };
      const o = (t, e, s) => {
        let n = t.get(e);
        if (n === undefined) {
          t.set(e, (n = s()));
        }
        return n;
      };
      const i = (t, e) => {
        const s = [];
        for (const [n, a] of t) {
          s.push(e(a, n));
        }
        return s;
      };
      const r = (t, e) => {
        for (const [s, n] of t) {
          if (e(n, s)) {
            return true;
          }
        }
        return false;
      };
      const d = (t, e) => {
        for (const [s, n] of t) {
          if (!e(n, s)) {
            return false;
          }
        }
        return true;
      };
    },
    14247: (t, e, s) => {
      s.d(e, { Fp: () => f, GR: () => b, GW: () => n, VV: () => g, Wn: () => o });
      const n = Math.floor;
      const a = Math.ceil;
      const o = Math.abs;
      const i = Math.imul;
      const r = Math.round;
      const d = Math.log10;
      const l = Math.log2;
      const c = Math.log;
      const h = Math.sqrt;
      const u = (t, e) => t + e;
      const g = (t, e) => (t < e ? t : e);
      const f = (t, e) => (t > e ? t : e);
      const p = Number.isNaN;
      const m = Math.pow;
      const y = (t) => Math.pow(10, t);
      const _ = Math.sign;
      const b = (t) => (t !== 0 ? t < 0 : 1 / t < 0);
    },
    59735: (t, e, s) => {
      s.d(e, { $m: () => g, kE: () => d, l$: () => u });
      const n = () => Object.create(null);
      const a = Object.assign;
      const o = Object.keys;
      const i = (t, e) => {
        for (const s in t) {
          e(t[s], s);
        }
      };
      const r = (t, e) => {
        const s = [];
        for (const n in t) {
          s.push(e(t[n], n));
        }
        return s;
      };
      const d = (t) => o(t).length;
      const l = (t, e) => {
        for (const s in t) {
          if (e(t[s], s)) {
            return true;
          }
        }
        return false;
      };
      const c = (t) => {
        for (const e in t) {
          return false;
        }
        return true;
      };
      const h = (t, e) => {
        for (const s in t) {
          if (!e(t[s], s)) {
            return false;
          }
        }
        return true;
      };
      const u = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
      const g = (t, e) => t === e || (d(t) === d(e) && h(t, (t, s) => (t !== undefined || u(e, s)) && e[s] === t));
    },
    58290: (t, e, s) => {
      s.d(e, { y: () => i });
      var n = s(72382);
      var a = s(48307);
      var o = s(7049);
      class i {
        constructor() {
          this._observers = n.Ue();
        }
        on(t, e) {
          n.Yu(this._observers, t, a.Ue).add(e);
        }
        once(t, e) {
          const s = (...n) => {
            this.off(t, s);
            e(...n);
          };
          this.on(t, s);
        }
        off(t, e) {
          const s = this._observers.get(t);
          if (s !== undefined) {
            s.delete(e);
            if (s.size === 0) {
              this._observers.delete(t);
            }
          }
        }
        emit(t, e) {
          return o.Dp((this._observers.get(t) || n.Ue()).values()).forEach((t) => t(...e));
        }
        destroy() {
          this._observers = n.Ue();
        }
      }
    },
    48307: (t, e, s) => {
      s.d(e, { Ue: () => n });
      const n = () => new Set();
      const a = (t) => Array.from(t);
      const o = (t) => t.values().next().value || undefined;
      const i = (t) => new Set(t);
    },
    20817: (t, e, s) => {
      s.d(e, { ZG: () => a });
      const n = () => new Date();
      const a = Date.now;
      const o = (t) => {
        if (t < 6e4) {
          const e = metric.prefix(t, -1);
          return math.round(e.n * 100) / 100 + e.prefix + "s";
        }
        t = math.floor(t / 1e3);
        const e = t % 60;
        const s = math.floor(t / 60) % 60;
        const n = math.floor(t / 3600) % 24;
        const a = math.floor(t / 86400);
        if (a > 0) {
          return a + "d" + (n > 0 || s > 30 ? " " + (s > 30 ? n + 1 : n) + "h" : "");
        }
        if (n > 0) {
          return n + "h" + (s > 0 || e > 30 ? " " + (e > 30 ? s + 1 : s) + "min" : "");
        }
        return s + "min" + (e > 0 ? " " + e + "s" : "");
      };
    },
  },
]);
