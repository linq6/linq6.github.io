(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [8267],
  {
    78267: (e) => {
      !(function (t, r) {
        true ? (e.exports = r()) : 0;
      })(self, () =>
        (() => {
          "use strict";
          var e = {};
          return (
            (() => {
              var t = e;
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.FitAddon = void 0),
                (t.FitAddon = class {
                  activate(e) {
                    this._terminal = e;
                  }
                  dispose() {}
                  fit() {
                    const e = this.proposeDimensions();
                    if (!e || !this._terminal || isNaN(e.cols) || isNaN(e.rows)) return;
                    const t = this._terminal._core;
                    (this._terminal.rows === e.rows && this._terminal.cols === e.cols) ||
                      (t._renderService.clear(), this._terminal.resize(e.cols, e.rows));
                  }
                  proposeDimensions() {
                    if (!this._terminal) return;
                    if (!this._terminal.element || !this._terminal.element.parentElement) return;
                    const e = this._terminal._core,
                      t = e._renderService.dimensions;
                    if (0 === t.css.cell.width || 0 === t.css.cell.height) return;
                    const r = 0 === this._terminal.options.scrollback ? 0 : e.viewport.scrollBarWidth,
                      i = window.getComputedStyle(this._terminal.element.parentElement),
                      s = parseInt(i.getPropertyValue("height")),
                      n = Math.max(0, parseInt(i.getPropertyValue("width"))),
                      a = window.getComputedStyle(this._terminal.element),
                      l = s - (parseInt(a.getPropertyValue("padding-top")) + parseInt(a.getPropertyValue("padding-bottom"))),
                      o = n - (parseInt(a.getPropertyValue("padding-right")) + parseInt(a.getPropertyValue("padding-left"))) - r;
                    return { cols: Math.max(2, Math.floor(o / t.css.cell.width)), rows: Math.max(1, Math.floor(l / t.css.cell.height)) };
                  }
                });
            })(),
            e
          );
        })()
      );
    },
  },
]);
