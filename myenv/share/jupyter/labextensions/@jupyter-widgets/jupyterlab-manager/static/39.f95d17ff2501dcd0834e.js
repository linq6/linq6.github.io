"use strict";
(self.webpackChunk_jupyter_widgets_jupyterlab_manager = self.webpackChunk_jupyter_widgets_jupyterlab_manager || []).push([
  [39, 420],
  {
    4420: (e, t, u) => {
      u.r(t), u.d(t, { OUTPUT_WIDGET_VERSION: () => _, OutputModel: () => d, OutputView: () => l });
      var s = u(988);
      const _ = "1.0.0";
      class d extends s.DOMWidgetModel {
        defaults() {
          return Object.assign(Object.assign({}, super.defaults()), {
            _model_name: "OutputModel",
            _view_name: "OutputView",
            _model_module: "@jupyter-widgets/output",
            _view_module: "@jupyter-widgets/output",
            _model_module_version: _,
            _view_module_version: _,
          });
        }
      }
      class l extends s.DOMWidgetView {}
    },
  },
]);
