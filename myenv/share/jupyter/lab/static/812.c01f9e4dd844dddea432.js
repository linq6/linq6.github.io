"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [812],
  {
    37796: (e, t, o) => {
      o.r(t);
      o.d(t, { main: () => H });
      var r = o(88110);
      var n = o(95171);
      var s = o(48435);
      var l = o(69858);
      var a = o(48641);
      var i = o(64331);
      var c = o(55834);
      var u = o(28180);
      var p = o(2542);
      var f = o(7920);
      var _ = o(38710);
      var A = o(81554);
      var y = o(67014);
      var h = o(77552);
      var d = o(71821);
      var b = o(13313);
      var x = o(23454);
      var j = o(34802);
      var m = o(42584);
      var v = o(54244);
      var g = o(93814);
      var w = o(64897);
      var C = o(94679);
      var P = o(92121);
      var k = o(83417);
      var E = o(83344);
      var S = o(52109);
      var O = o(32805);
      var N = o(63008);
      var R = o(32747);
      var J = o(39721);
      var L = o(55337);
      var Q = o(32977);
      var B = o(78624);
      var I = o(95528);
      var M = o(3268);
      var T = o(99204);
      var U = o(38970);
      var Y = o(50168);
      var z = o(52714);
      var G = o(4002);
      var K = o(57385);
      var V = o(65540);
      var q = o(1733);
      var D = o(30124);
      var F = o(78815);
      async function $(e, t) {
        try {
          const o = await window._JUPYTERLAB[e].get(t);
          const r = o();
          r.__scope__ = e;
          return r;
        } catch (o) {
          console.warn(`Failed to create module: package: ${e}; module: ${t}`);
          throw o;
        }
      }
      async function H() {
        var e = r.PageConfig.getOption("browserTest");
        if (e.toLowerCase() === "true") {
          var t = document.createElement("div");
          t.id = "browserTest";
          document.body.appendChild(t);
          t.textContent = "[]";
          t.style.display = "none";
          var n = [];
          var s = false;
          var l = 25e3;
          var a = function () {
            if (s) {
              return;
            }
            s = true;
            t.className = "completed";
          };
          window.onerror = function (e, o, r, s, l) {
            n.push(String(l));
            t.textContent = JSON.stringify(n);
          };
          console.error = function (e) {
            n.push(String(e));
            t.textContent = JSON.stringify(n);
          };
        }
        var i = o(16679).JupyterLab;
        var c = [];
        var u = [];
        var p = [];
        var f = [];
        const _ = [];
        const A = [];
        const y = [];
        const h = JSON.parse(r.PageConfig.getOption("federated_extensions"));
        const d = [];
        h.forEach((e) => {
          if (e.extension) {
            d.push(e.name);
            _.push($(e.name, e.extension));
          }
          if (e.mimeExtension) {
            d.push(e.name);
            A.push($(e.name, e.mimeExtension));
          }
          if (e.style && !r.PageConfig.Extension.isDisabled(e.name)) {
            y.push($(e.name, e.style));
          }
        });
        const b = [];
        function* x(e) {
          let t;
          if (e.hasOwnProperty("__esModule")) {
            t = e.default;
          } else {
            t = e;
          }
          let o = Array.isArray(t) ? t : [t];
          for (let n of o) {
            const t = r.PageConfig.Extension.isDisabled(n.id);
            b.push({
              id: n.id,
              description: n.description,
              requires: n.requires ?? [],
              optional: n.optional ?? [],
              provides: n.provides ?? null,
              autoStart: n.autoStart,
              enabled: !t,
              extension: e.__scope__,
            });
            if (t) {
              c.push(n.id);
              continue;
            }
            if (r.PageConfig.Extension.isDeferred(n.id)) {
              u.push(n.id);
              p.push(n.id);
            }
            yield n;
          }
        }
        const j = [];
        if (!d.includes("@jupyterlab/javascript-extension")) {
          try {
            let e = o(16125);
            e.__scope__ = "@jupyterlab/javascript-extension";
            for (let t of x(e)) {
              j.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/json-extension")) {
          try {
            let e = o(15850);
            e.__scope__ = "@jupyterlab/json-extension";
            for (let t of x(e)) {
              j.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/mermaid-extension")) {
          try {
            let e = o(89861);
            e.__scope__ = "@jupyterlab/mermaid-extension";
            for (let t of x(e)) {
              j.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/pdf-extension")) {
          try {
            let e = o(49812);
            e.__scope__ = "@jupyterlab/pdf-extension";
            for (let t of x(e)) {
              j.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/vega5-extension")) {
          try {
            let e = o(68148);
            e.__scope__ = "@jupyterlab/vega5-extension";
            for (let t of x(e)) {
              j.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        const m = await Promise.allSettled(A);
        m.forEach((e) => {
          if (e.status === "fulfilled") {
            for (let t of x(e.value)) {
              j.push(t);
            }
          } else {
            console.error(e.reason);
          }
        });
        if (!d.includes("@jupyterlab/application-extension")) {
          try {
            let e = o(97891);
            e.__scope__ = "@jupyterlab/application-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/apputils-extension")) {
          try {
            let e = o(46510);
            e.__scope__ = "@jupyterlab/apputils-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/cell-toolbar-extension")) {
          try {
            let e = o(7370);
            e.__scope__ = "@jupyterlab/cell-toolbar-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/celltags-extension")) {
          try {
            let e = o(83290);
            e.__scope__ = "@jupyterlab/celltags-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/codemirror-extension")) {
          try {
            let e = o(67701);
            e.__scope__ = "@jupyterlab/codemirror-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/completer-extension")) {
          try {
            let e = o(56323);
            e.__scope__ = "@jupyterlab/completer-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/console-extension")) {
          try {
            let e = o(95783);
            e.__scope__ = "@jupyterlab/console-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/csvviewer-extension")) {
          try {
            let e = o(97325);
            e.__scope__ = "@jupyterlab/csvviewer-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/debugger-extension")) {
          try {
            let e = o(88127);
            e.__scope__ = "@jupyterlab/debugger-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/docmanager-extension")) {
          try {
            let e = o(31728);
            e.__scope__ = "@jupyterlab/docmanager-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/documentsearch-extension")) {
          try {
            let e = o(74692);
            e.__scope__ = "@jupyterlab/documentsearch-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/extensionmanager-extension")) {
          try {
            let e = o(55528);
            e.__scope__ = "@jupyterlab/extensionmanager-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/filebrowser-extension")) {
          try {
            let e = o(12941);
            e.__scope__ = "@jupyterlab/filebrowser-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/fileeditor-extension")) {
          try {
            let e = o(15461);
            e.__scope__ = "@jupyterlab/fileeditor-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/help-extension")) {
          try {
            let e = o(99579);
            e.__scope__ = "@jupyterlab/help-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/htmlviewer-extension")) {
          try {
            let e = o(23491);
            e.__scope__ = "@jupyterlab/htmlviewer-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/hub-extension")) {
          try {
            let e = o(14387);
            e.__scope__ = "@jupyterlab/hub-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/imageviewer-extension")) {
          try {
            let e = o(26925);
            e.__scope__ = "@jupyterlab/imageviewer-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/inspector-extension")) {
          try {
            let e = o(96252);
            e.__scope__ = "@jupyterlab/inspector-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/launcher-extension")) {
          try {
            let e = o(65862);
            e.__scope__ = "@jupyterlab/launcher-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/logconsole-extension")) {
          try {
            let e = o(98789);
            e.__scope__ = "@jupyterlab/logconsole-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/lsp-extension")) {
          try {
            let e = o(93194);
            e.__scope__ = "@jupyterlab/lsp-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/mainmenu-extension")) {
          try {
            let e = o(53311);
            e.__scope__ = "@jupyterlab/mainmenu-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/markdownviewer-extension")) {
          try {
            let e = o(85258);
            e.__scope__ = "@jupyterlab/markdownviewer-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/markedparser-extension")) {
          try {
            let e = o(46735);
            e.__scope__ = "@jupyterlab/markedparser-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/mathjax-extension")) {
          try {
            let e = o(13750);
            e.__scope__ = "@jupyterlab/mathjax-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/mermaid-extension")) {
          try {
            let e = o(30110);
            e.__scope__ = "@jupyterlab/mermaid-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/metadataform-extension")) {
          try {
            let e = o(899);
            e.__scope__ = "@jupyterlab/metadataform-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/notebook-extension")) {
          try {
            let e = o(32910);
            e.__scope__ = "@jupyterlab/notebook-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/pluginmanager-extension")) {
          try {
            let e = o(31566);
            e.__scope__ = "@jupyterlab/pluginmanager-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/rendermime-extension")) {
          try {
            let e = o(98012);
            e.__scope__ = "@jupyterlab/rendermime-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/running-extension")) {
          try {
            let e = o(84754);
            e.__scope__ = "@jupyterlab/running-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/settingeditor-extension")) {
          try {
            let e = o(55166);
            e.__scope__ = "@jupyterlab/settingeditor-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/shortcuts-extension")) {
          try {
            let e = o(4774);
            e.__scope__ = "@jupyterlab/shortcuts-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/statusbar-extension")) {
          try {
            let e = o(24105);
            e.__scope__ = "@jupyterlab/statusbar-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/terminal-extension")) {
          try {
            let e = o(41562);
            e.__scope__ = "@jupyterlab/terminal-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/theme-dark-extension")) {
          try {
            let e = o(74290);
            e.__scope__ = "@jupyterlab/theme-dark-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/theme-dark-high-contrast-extension")) {
          try {
            let e = o(39110);
            e.__scope__ = "@jupyterlab/theme-dark-high-contrast-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/theme-light-extension")) {
          try {
            let e = o(11665);
            e.__scope__ = "@jupyterlab/theme-light-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/toc-extension")) {
          try {
            let e = o(14888);
            e.__scope__ = "@jupyterlab/toc-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/tooltip-extension")) {
          try {
            let e = o(60503);
            e.__scope__ = "@jupyterlab/tooltip-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/translation-extension")) {
          try {
            let e = o(89060);
            e.__scope__ = "@jupyterlab/translation-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/ui-components-extension")) {
          try {
            let e = o(86356);
            e.__scope__ = "@jupyterlab/ui-components-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        if (!d.includes("@jupyterlab/workspaces-extension")) {
          try {
            let e = o(5331);
            e.__scope__ = "@jupyterlab/workspaces-extension";
            for (let t of x(e)) {
              f.push(t);
            }
          } catch (P) {
            console.error(P);
          }
        }
        const v = await Promise.allSettled(_);
        v.forEach((e) => {
          if (e.status === "fulfilled") {
            for (let t of x(e.value)) {
              f.push(t);
            }
          } else {
            console.error(e.reason);
          }
        });
        (await Promise.allSettled(y))
          .filter(({ status: e }) => e === "rejected")
          .forEach(({ reason: e }) => {
            console.error(e);
          });
        const g = new i({
          mimeExtensions: j,
          disabled: {
            matches: c,
            patterns: r.PageConfig.Extension.disabled.map(function (e) {
              return e.raw;
            }),
          },
          deferred: {
            matches: u,
            patterns: r.PageConfig.Extension.deferred.map(function (e) {
              return e.raw;
            }),
          },
          availablePlugins: b,
        });
        f.forEach(function (e) {
          g.registerPluginModule(e);
        });
        g.start({ ignorePlugins: p, bubblingKeydown: true });
        var w = (r.PageConfig.getOption("exposeAppInBrowser") || "").toLowerCase() === "true";
        var C = (r.PageConfig.getOption("devMode") || "").toLowerCase() === "true";
        if (w || C) {
          window.jupyterapp = g;
        }
        if (e.toLowerCase() === "true") {
          g.restored
            .then(function () {
              a(n);
            })
            .catch(function (e) {
              a([`RestoreError: ${e.message}`]);
            });
          window.setTimeout(function () {
            a(n);
          }, l);
        }
      }
    },
    7413: (e) => {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVQIHQGlAFr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7+r3zKmT0/+pk9P/7+r3zAAAAAAAAAAABAAAAAAAAAAA6OPzM+/q9wAAAAAA6OPzMwAAAAAAAAAAAgAAAAAAAAAAGR8NiRQaCgAZIA0AGR8NiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQyoYJ/SY80UAAAAASUVORK5CYII=";
    },
  },
]);
