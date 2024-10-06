"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [3923],
  {
    63923: (e, r, t) => {
      t.r(r);
      t.d(r, { css: () => _, gss: () => S, keywords: () => q, less: () => O, mkCSS: () => i, sCSS: () => C });
      function i(e) {
        e = { ...K, ...e };
        var r = e.inline;
        var t = e.tokenHooks,
          i = e.documentTypes || {},
          o = e.mediaTypes || {},
          a = e.mediaFeatures || {},
          n = e.mediaValueKeywords || {},
          l = e.propertyKeywords || {},
          s = e.nonStandardPropertyKeywords || {},
          c = e.fontProperties || {},
          d = e.counterDescriptors || {},
          p = e.colorKeywords || {},
          u = e.valueKeywords || {},
          m = e.allowNested,
          f = e.lineComment,
          g = e.supportsAtComponent === true,
          h = e.highlightNonStandardPropertyKeywords !== false;
        var b, k;
        function y(e, r) {
          b = r;
          return e;
        }
        function w(e, r) {
          var i = e.next();
          if (t[i]) {
            var o = t[i](e, r);
            if (o !== false) return o;
          }
          if (i == "@") {
            e.eatWhile(/[\w\\\-]/);
            return y("def", e.current());
          } else if (i == "=" || ((i == "~" || i == "|") && e.eat("="))) {
            return y(null, "compare");
          } else if (i == '"' || i == "'") {
            r.tokenize = v(i);
            return r.tokenize(e, r);
          } else if (i == "#") {
            e.eatWhile(/[\w\\\-]/);
            return y("atom", "hash");
          } else if (i == "!") {
            e.match(/^\s*\w*/);
            return y("keyword", "important");
          } else if (/\d/.test(i) || (i == "." && e.eat(/\d/))) {
            e.eatWhile(/[\w.%]/);
            return y("number", "unit");
          } else if (i === "-") {
            if (/[\d.]/.test(e.peek())) {
              e.eatWhile(/[\w.%]/);
              return y("number", "unit");
            } else if (e.match(/^-[\w\\\-]*/)) {
              e.eatWhile(/[\w\\\-]/);
              if (e.match(/^\s*:/, false)) return y("def", "variable-definition");
              return y("variableName", "variable");
            } else if (e.match(/^\w+-/)) {
              return y("meta", "meta");
            }
          } else if (/[,+>*\/]/.test(i)) {
            return y(null, "select-op");
          } else if (i == "." && e.match(/^-?[_a-z][_a-z0-9-]*/i)) {
            return y("qualifier", "qualifier");
          } else if (/[:;{}\[\]\(\)]/.test(i)) {
            return y(null, i);
          } else if (e.match(/^[\w-.]+(?=\()/)) {
            if (/^(url(-prefix)?|domain|regexp)$/i.test(e.current())) {
              r.tokenize = x;
            }
            return y("variableName.function", "variable");
          } else if (/[\w\\\-]/.test(i)) {
            e.eatWhile(/[\w\\\-]/);
            return y("property", "word");
          } else {
            return y(null, null);
          }
        }
        function v(e) {
          return function (r, t) {
            var i = false,
              o;
            while ((o = r.next()) != null) {
              if (o == e && !i) {
                if (e == ")") r.backUp(1);
                break;
              }
              i = !i && o == "\\";
            }
            if (o == e || (!i && e != ")")) t.tokenize = null;
            return y("string", "string");
          };
        }
        function x(e, r) {
          e.next();
          if (!e.match(/^\s*[\"\')]/, false)) r.tokenize = v(")");
          else r.tokenize = null;
          return y(null, "(");
        }
        function z(e, r, t) {
          this.type = e;
          this.indent = r;
          this.prev = t;
        }
        function j(e, r, t, i) {
          e.context = new z(t, r.indentation() + (i === false ? 0 : r.indentUnit), e.context);
          return t;
        }
        function q(e) {
          if (e.context.prev) e.context = e.context.prev;
          return e.context.type;
        }
        function _(e, r, t) {
          return O[t.context.type](e, r, t);
        }
        function B(e, r, t, i) {
          for (var o = i || 1; o > 0; o--) t.context = t.context.prev;
          return _(e, r, t);
        }
        function C(e) {
          var r = e.current().toLowerCase();
          if (u.hasOwnProperty(r)) k = "atom";
          else if (p.hasOwnProperty(r)) k = "keyword";
          else k = "variable";
        }
        var O = {};
        O.top = function (e, r, t) {
          if (e == "{") {
            return j(t, r, "block");
          } else if (e == "}" && t.context.prev) {
            return q(t);
          } else if (g && /@component/i.test(e)) {
            return j(t, r, "atComponentBlock");
          } else if (/^@(-moz-)?document$/i.test(e)) {
            return j(t, r, "documentTypes");
          } else if (/^@(media|supports|(-moz-)?document|import)$/i.test(e)) {
            return j(t, r, "atBlock");
          } else if (/^@(font-face|counter-style)/i.test(e)) {
            t.stateArg = e;
            return "restricted_atBlock_before";
          } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e)) {
            return "keyframes";
          } else if (e && e.charAt(0) == "@") {
            return j(t, r, "at");
          } else if (e == "hash") {
            k = "builtin";
          } else if (e == "word") {
            k = "tag";
          } else if (e == "variable-definition") {
            return "maybeprop";
          } else if (e == "interpolation") {
            return j(t, r, "interpolation");
          } else if (e == ":") {
            return "pseudo";
          } else if (m && e == "(") {
            return j(t, r, "parens");
          }
          return t.context.type;
        };
        O.block = function (e, r, t) {
          if (e == "word") {
            var i = r.current().toLowerCase();
            if (l.hasOwnProperty(i)) {
              k = "property";
              return "maybeprop";
            } else if (s.hasOwnProperty(i)) {
              k = h ? "string.special" : "property";
              return "maybeprop";
            } else if (m) {
              k = r.match(/^\s*:(?:\s|$)/, false) ? "property" : "tag";
              return "block";
            } else {
              k = "error";
              return "maybeprop";
            }
          } else if (e == "meta") {
            return "block";
          } else if (!m && (e == "hash" || e == "qualifier")) {
            k = "error";
            return "block";
          } else {
            return O.top(e, r, t);
          }
        };
        O.maybeprop = function (e, r, t) {
          if (e == ":") return j(t, r, "prop");
          return _(e, r, t);
        };
        O.prop = function (e, r, t) {
          if (e == ";") return q(t);
          if (e == "{" && m) return j(t, r, "propBlock");
          if (e == "}" || e == "{") return B(e, r, t);
          if (e == "(") return j(t, r, "parens");
          if (e == "hash" && !/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(r.current())) {
            k = "error";
          } else if (e == "word") {
            C(r);
          } else if (e == "interpolation") {
            return j(t, r, "interpolation");
          }
          return "prop";
        };
        O.propBlock = function (e, r, t) {
          if (e == "}") return q(t);
          if (e == "word") {
            k = "property";
            return "maybeprop";
          }
          return t.context.type;
        };
        O.parens = function (e, r, t) {
          if (e == "{" || e == "}") return B(e, r, t);
          if (e == ")") return q(t);
          if (e == "(") return j(t, r, "parens");
          if (e == "interpolation") return j(t, r, "interpolation");
          if (e == "word") C(r);
          return "parens";
        };
        O.pseudo = function (e, r, t) {
          if (e == "meta") return "pseudo";
          if (e == "word") {
            k = "variableName.constant";
            return t.context.type;
          }
          return _(e, r, t);
        };
        O.documentTypes = function (e, r, t) {
          if (e == "word" && i.hasOwnProperty(r.current())) {
            k = "tag";
            return t.context.type;
          } else {
            return O.atBlock(e, r, t);
          }
        };
        O.atBlock = function (e, r, t) {
          if (e == "(") return j(t, r, "atBlock_parens");
          if (e == "}" || e == ";") return B(e, r, t);
          if (e == "{") return q(t) && j(t, r, m ? "block" : "top");
          if (e == "interpolation") return j(t, r, "interpolation");
          if (e == "word") {
            var i = r.current().toLowerCase();
            if (i == "only" || i == "not" || i == "and" || i == "or") k = "keyword";
            else if (o.hasOwnProperty(i)) k = "attribute";
            else if (a.hasOwnProperty(i)) k = "property";
            else if (n.hasOwnProperty(i)) k = "keyword";
            else if (l.hasOwnProperty(i)) k = "property";
            else if (s.hasOwnProperty(i)) k = h ? "string.special" : "property";
            else if (u.hasOwnProperty(i)) k = "atom";
            else if (p.hasOwnProperty(i)) k = "keyword";
            else k = "error";
          }
          return t.context.type;
        };
        O.atComponentBlock = function (e, r, t) {
          if (e == "}") return B(e, r, t);
          if (e == "{") return q(t) && j(t, r, m ? "block" : "top", false);
          if (e == "word") k = "error";
          return t.context.type;
        };
        O.atBlock_parens = function (e, r, t) {
          if (e == ")") return q(t);
          if (e == "{" || e == "}") return B(e, r, t, 2);
          return O.atBlock(e, r, t);
        };
        O.restricted_atBlock_before = function (e, r, t) {
          if (e == "{") return j(t, r, "restricted_atBlock");
          if (e == "word" && t.stateArg == "@counter-style") {
            k = "variable";
            return "restricted_atBlock_before";
          }
          return _(e, r, t);
        };
        O.restricted_atBlock = function (e, r, t) {
          if (e == "}") {
            t.stateArg = null;
            return q(t);
          }
          if (e == "word") {
            if (
              (t.stateArg == "@font-face" && !c.hasOwnProperty(r.current().toLowerCase())) ||
              (t.stateArg == "@counter-style" && !d.hasOwnProperty(r.current().toLowerCase()))
            )
              k = "error";
            else k = "property";
            return "maybeprop";
          }
          return "restricted_atBlock";
        };
        O.keyframes = function (e, r, t) {
          if (e == "word") {
            k = "variable";
            return "keyframes";
          }
          if (e == "{") return j(t, r, "top");
          return _(e, r, t);
        };
        O.at = function (e, r, t) {
          if (e == ";") return q(t);
          if (e == "{" || e == "}") return B(e, r, t);
          if (e == "word") k = "tag";
          else if (e == "hash") k = "builtin";
          return "at";
        };
        O.interpolation = function (e, r, t) {
          if (e == "}") return q(t);
          if (e == "{" || e == ";") return B(e, r, t);
          if (e == "word") k = "variable";
          else if (e != "variable" && e != "(" && e != ")") k = "error";
          return "interpolation";
        };
        return {
          name: e.name,
          startState: function () {
            return { tokenize: null, state: r ? "block" : "top", stateArg: null, context: new z(r ? "block" : "top", 0, null) };
          },
          token: function (e, r) {
            if (!r.tokenize && e.eatSpace()) return null;
            var t = (r.tokenize || w)(e, r);
            if (t && typeof t == "object") {
              b = t[1];
              t = t[0];
            }
            k = t;
            if (b != "comment") r.state = O[r.state](b, e, r);
            return k;
          },
          indent: function (e, r, t) {
            var i = e.context,
              o = r && r.charAt(0);
            var a = i.indent;
            if (i.type == "prop" && (o == "}" || o == ")")) i = i.prev;
            if (i.prev) {
              if (o == "}" && (i.type == "block" || i.type == "top" || i.type == "interpolation" || i.type == "restricted_atBlock")) {
                i = i.prev;
                a = i.indent;
              } else if ((o == ")" && (i.type == "parens" || i.type == "atBlock_parens")) || (o == "{" && (i.type == "at" || i.type == "atBlock"))) {
                a = Math.max(0, i.indent - t.unit);
              }
            }
            return a;
          },
          languageData: { indentOnInput: /^\s*\}$/, commentTokens: { line: f, block: { open: "/*", close: "*/" } }, autocomplete: P },
        };
      }
      function o(e) {
        var r = {};
        for (var t = 0; t < e.length; ++t) {
          r[e[t].toLowerCase()] = true;
        }
        return r;
      }
      var a = ["domain", "regexp", "url", "url-prefix"],
        n = o(a);
      var l = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"],
        s = o(l);
      var c = [
          "width",
          "min-width",
          "max-width",
          "height",
          "min-height",
          "max-height",
          "device-width",
          "min-device-width",
          "max-device-width",
          "device-height",
          "min-device-height",
          "max-device-height",
          "aspect-ratio",
          "min-aspect-ratio",
          "max-aspect-ratio",
          "device-aspect-ratio",
          "min-device-aspect-ratio",
          "max-device-aspect-ratio",
          "color",
          "min-color",
          "max-color",
          "color-index",
          "min-color-index",
          "max-color-index",
          "monochrome",
          "min-monochrome",
          "max-monochrome",
          "resolution",
          "min-resolution",
          "max-resolution",
          "scan",
          "grid",
          "orientation",
          "device-pixel-ratio",
          "min-device-pixel-ratio",
          "max-device-pixel-ratio",
          "pointer",
          "any-pointer",
          "hover",
          "any-hover",
          "prefers-color-scheme",
          "dynamic-range",
          "video-dynamic-range",
        ],
        d = o(c);
      var p = [
          "landscape",
          "portrait",
          "none",
          "coarse",
          "fine",
          "on-demand",
          "hover",
          "interlace",
          "progressive",
          "dark",
          "light",
          "standard",
          "high",
        ],
        u = o(p);
      var m = [
          "align-content",
          "align-items",
          "align-self",
          "alignment-adjust",
          "alignment-baseline",
          "all",
          "anchor-point",
          "animation",
          "animation-delay",
          "animation-direction",
          "animation-duration",
          "animation-fill-mode",
          "animation-iteration-count",
          "animation-name",
          "animation-play-state",
          "animation-timing-function",
          "appearance",
          "azimuth",
          "backdrop-filter",
          "backface-visibility",
          "background",
          "background-attachment",
          "background-blend-mode",
          "background-clip",
          "background-color",
          "background-image",
          "background-origin",
          "background-position",
          "background-position-x",
          "background-position-y",
          "background-repeat",
          "background-size",
          "baseline-shift",
          "binding",
          "bleed",
          "block-size",
          "bookmark-label",
          "bookmark-level",
          "bookmark-state",
          "bookmark-target",
          "border",
          "border-bottom",
          "border-bottom-color",
          "border-bottom-left-radius",
          "border-bottom-right-radius",
          "border-bottom-style",
          "border-bottom-width",
          "border-collapse",
          "border-color",
          "border-image",
          "border-image-outset",
          "border-image-repeat",
          "border-image-slice",
          "border-image-source",
          "border-image-width",
          "border-left",
          "border-left-color",
          "border-left-style",
          "border-left-width",
          "border-radius",
          "border-right",
          "border-right-color",
          "border-right-style",
          "border-right-width",
          "border-spacing",
          "border-style",
          "border-top",
          "border-top-color",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-top-style",
          "border-top-width",
          "border-width",
          "bottom",
          "box-decoration-break",
          "box-shadow",
          "box-sizing",
          "break-after",
          "break-before",
          "break-inside",
          "caption-side",
          "caret-color",
          "clear",
          "clip",
          "color",
          "color-profile",
          "column-count",
          "column-fill",
          "column-gap",
          "column-rule",
          "column-rule-color",
          "column-rule-style",
          "column-rule-width",
          "column-span",
          "column-width",
          "columns",
          "contain",
          "content",
          "counter-increment",
          "counter-reset",
          "crop",
          "cue",
          "cue-after",
          "cue-before",
          "cursor",
          "direction",
          "display",
          "dominant-baseline",
          "drop-initial-after-adjust",
          "drop-initial-after-align",
          "drop-initial-before-adjust",
          "drop-initial-before-align",
          "drop-initial-size",
          "drop-initial-value",
          "elevation",
          "empty-cells",
          "fit",
          "fit-content",
          "fit-position",
          "flex",
          "flex-basis",
          "flex-direction",
          "flex-flow",
          "flex-grow",
          "flex-shrink",
          "flex-wrap",
          "float",
          "float-offset",
          "flow-from",
          "flow-into",
          "font",
          "font-family",
          "font-feature-settings",
          "font-kerning",
          "font-language-override",
          "font-optical-sizing",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-synthesis",
          "font-variant",
          "font-variant-alternates",
          "font-variant-caps",
          "font-variant-east-asian",
          "font-variant-ligatures",
          "font-variant-numeric",
          "font-variant-position",
          "font-variation-settings",
          "font-weight",
          "gap",
          "grid",
          "grid-area",
          "grid-auto-columns",
          "grid-auto-flow",
          "grid-auto-rows",
          "grid-column",
          "grid-column-end",
          "grid-column-gap",
          "grid-column-start",
          "grid-gap",
          "grid-row",
          "grid-row-end",
          "grid-row-gap",
          "grid-row-start",
          "grid-template",
          "grid-template-areas",
          "grid-template-columns",
          "grid-template-rows",
          "hanging-punctuation",
          "height",
          "hyphens",
          "icon",
          "image-orientation",
          "image-rendering",
          "image-resolution",
          "inline-box-align",
          "inset",
          "inset-block",
          "inset-block-end",
          "inset-block-start",
          "inset-inline",
          "inset-inline-end",
          "inset-inline-start",
          "isolation",
          "justify-content",
          "justify-items",
          "justify-self",
          "left",
          "letter-spacing",
          "line-break",
          "line-height",
          "line-height-step",
          "line-stacking",
          "line-stacking-ruby",
          "line-stacking-shift",
          "line-stacking-strategy",
          "list-style",
          "list-style-image",
          "list-style-position",
          "list-style-type",
          "margin",
          "margin-bottom",
          "margin-left",
          "margin-right",
          "margin-top",
          "marks",
          "marquee-direction",
          "marquee-loop",
          "marquee-play-count",
          "marquee-speed",
          "marquee-style",
          "mask-clip",
          "mask-composite",
          "mask-image",
          "mask-mode",
          "mask-origin",
          "mask-position",
          "mask-repeat",
          "mask-size",
          "mask-type",
          "max-block-size",
          "max-height",
          "max-inline-size",
          "max-width",
          "min-block-size",
          "min-height",
          "min-inline-size",
          "min-width",
          "mix-blend-mode",
          "move-to",
          "nav-down",
          "nav-index",
          "nav-left",
          "nav-right",
          "nav-up",
          "object-fit",
          "object-position",
          "offset",
          "offset-anchor",
          "offset-distance",
          "offset-path",
          "offset-position",
          "offset-rotate",
          "opacity",
          "order",
          "orphans",
          "outline",
          "outline-color",
          "outline-offset",
          "outline-style",
          "outline-width",
          "overflow",
          "overflow-style",
          "overflow-wrap",
          "overflow-x",
          "overflow-y",
          "padding",
          "padding-bottom",
          "padding-left",
          "padding-right",
          "padding-top",
          "page",
          "page-break-after",
          "page-break-before",
          "page-break-inside",
          "page-policy",
          "pause",
          "pause-after",
          "pause-before",
          "perspective",
          "perspective-origin",
          "pitch",
          "pitch-range",
          "place-content",
          "place-items",
          "place-self",
          "play-during",
          "position",
          "presentation-level",
          "punctuation-trim",
          "quotes",
          "region-break-after",
          "region-break-before",
          "region-break-inside",
          "region-fragment",
          "rendering-intent",
          "resize",
          "rest",
          "rest-after",
          "rest-before",
          "richness",
          "right",
          "rotate",
          "rotation",
          "rotation-point",
          "row-gap",
          "ruby-align",
          "ruby-overhang",
          "ruby-position",
          "ruby-span",
          "scale",
          "scroll-behavior",
          "scroll-margin",
          "scroll-margin-block",
          "scroll-margin-block-end",
          "scroll-margin-block-start",
          "scroll-margin-bottom",
          "scroll-margin-inline",
          "scroll-margin-inline-end",
          "scroll-margin-inline-start",
          "scroll-margin-left",
          "scroll-margin-right",
          "scroll-margin-top",
          "scroll-padding",
          "scroll-padding-block",
          "scroll-padding-block-end",
          "scroll-padding-block-start",
          "scroll-padding-bottom",
          "scroll-padding-inline",
          "scroll-padding-inline-end",
          "scroll-padding-inline-start",
          "scroll-padding-left",
          "scroll-padding-right",
          "scroll-padding-top",
          "scroll-snap-align",
          "scroll-snap-type",
          "shape-image-threshold",
          "shape-inside",
          "shape-margin",
          "shape-outside",
          "size",
          "speak",
          "speak-as",
          "speak-header",
          "speak-numeral",
          "speak-punctuation",
          "speech-rate",
          "stress",
          "string-set",
          "tab-size",
          "table-layout",
          "target",
          "target-name",
          "target-new",
          "target-position",
          "text-align",
          "text-align-last",
          "text-combine-upright",
          "text-decoration",
          "text-decoration-color",
          "text-decoration-line",
          "text-decoration-skip",
          "text-decoration-skip-ink",
          "text-decoration-style",
          "text-emphasis",
          "text-emphasis-color",
          "text-emphasis-position",
          "text-emphasis-style",
          "text-height",
          "text-indent",
          "text-justify",
          "text-orientation",
          "text-outline",
          "text-overflow",
          "text-rendering",
          "text-shadow",
          "text-size-adjust",
          "text-space-collapse",
          "text-transform",
          "text-underline-position",
          "text-wrap",
          "top",
          "touch-action",
          "transform",
          "transform-origin",
          "transform-style",
          "transition",
          "transition-delay",
          "transition-duration",
          "transition-property",
          "transition-timing-function",
          "translate",
          "unicode-bidi",
          "user-select",
          "vertical-align",
          "visibility",
          "voice-balance",
          "voice-duration",
          "voice-family",
          "voice-pitch",
          "voice-range",
          "voice-rate",
          "voice-stress",
          "voice-volume",
          "volume",
          "white-space",
          "widows",
          "width",
          "will-change",
          "word-break",
          "word-spacing",
          "word-wrap",
          "writing-mode",
          "z-index",
          "clip-path",
          "clip-rule",
          "mask",
          "enable-background",
          "filter",
          "flood-color",
          "flood-opacity",
          "lighting-color",
          "stop-color",
          "stop-opacity",
          "pointer-events",
          "color-interpolation",
          "color-interpolation-filters",
          "color-rendering",
          "fill",
          "fill-opacity",
          "fill-rule",
          "image-rendering",
          "marker",
          "marker-end",
          "marker-mid",
          "marker-start",
          "paint-order",
          "shape-rendering",
          "stroke",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke-width",
          "text-rendering",
          "baseline-shift",
          "dominant-baseline",
          "glyph-orientation-horizontal",
          "glyph-orientation-vertical",
          "text-anchor",
          "writing-mode",
        ],
        f = o(m);
      var g = [
          "accent-color",
          "aspect-ratio",
          "border-block",
          "border-block-color",
          "border-block-end",
          "border-block-end-color",
          "border-block-end-style",
          "border-block-end-width",
          "border-block-start",
          "border-block-start-color",
          "border-block-start-style",
          "border-block-start-width",
          "border-block-style",
          "border-block-width",
          "border-inline",
          "border-inline-color",
          "border-inline-end",
          "border-inline-end-color",
          "border-inline-end-style",
          "border-inline-end-width",
          "border-inline-start",
          "border-inline-start-color",
          "border-inline-start-style",
          "border-inline-start-width",
          "border-inline-style",
          "border-inline-width",
          "content-visibility",
          "margin-block",
          "margin-block-end",
          "margin-block-start",
          "margin-inline",
          "margin-inline-end",
          "margin-inline-start",
          "overflow-anchor",
          "overscroll-behavior",
          "padding-block",
          "padding-block-end",
          "padding-block-start",
          "padding-inline",
          "padding-inline-end",
          "padding-inline-start",
          "scroll-snap-stop",
          "scrollbar-3d-light-color",
          "scrollbar-arrow-color",
          "scrollbar-base-color",
          "scrollbar-dark-shadow-color",
          "scrollbar-face-color",
          "scrollbar-highlight-color",
          "scrollbar-shadow-color",
          "scrollbar-track-color",
          "searchfield-cancel-button",
          "searchfield-decoration",
          "searchfield-results-button",
          "searchfield-results-decoration",
          "shape-inside",
          "zoom",
        ],
        h = o(g);
      var b = [
          "font-display",
          "font-family",
          "src",
          "unicode-range",
          "font-variant",
          "font-feature-settings",
          "font-stretch",
          "font-weight",
          "font-style",
        ],
        k = o(b);
      var y = ["additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system"],
        w = o(y);
      var v = [
          "aliceblue",
          "antiquewhite",
          "aqua",
          "aquamarine",
          "azure",
          "beige",
          "bisque",
          "black",
          "blanchedalmond",
          "blue",
          "blueviolet",
          "brown",
          "burlywood",
          "cadetblue",
          "chartreuse",
          "chocolate",
          "coral",
          "cornflowerblue",
          "cornsilk",
          "crimson",
          "cyan",
          "darkblue",
          "darkcyan",
          "darkgoldenrod",
          "darkgray",
          "darkgreen",
          "darkgrey",
          "darkkhaki",
          "darkmagenta",
          "darkolivegreen",
          "darkorange",
          "darkorchid",
          "darkred",
          "darksalmon",
          "darkseagreen",
          "darkslateblue",
          "darkslategray",
          "darkslategrey",
          "darkturquoise",
          "darkviolet",
          "deeppink",
          "deepskyblue",
          "dimgray",
          "dimgrey",
          "dodgerblue",
          "firebrick",
          "floralwhite",
          "forestgreen",
          "fuchsia",
          "gainsboro",
          "ghostwhite",
          "gold",
          "goldenrod",
          "gray",
          "grey",
          "green",
          "greenyellow",
          "honeydew",
          "hotpink",
          "indianred",
          "indigo",
          "ivory",
          "khaki",
          "lavender",
          "lavenderblush",
          "lawngreen",
          "lemonchiffon",
          "lightblue",
          "lightcoral",
          "lightcyan",
          "lightgoldenrodyellow",
          "lightgray",
          "lightgreen",
          "lightgrey",
          "lightpink",
          "lightsalmon",
          "lightseagreen",
          "lightskyblue",
          "lightslategray",
          "lightslategrey",
          "lightsteelblue",
          "lightyellow",
          "lime",
          "limegreen",
          "linen",
          "magenta",
          "maroon",
          "mediumaquamarine",
          "mediumblue",
          "mediumorchid",
          "mediumpurple",
          "mediumseagreen",
          "mediumslateblue",
          "mediumspringgreen",
          "mediumturquoise",
          "mediumvioletred",
          "midnightblue",
          "mintcream",
          "mistyrose",
          "moccasin",
          "navajowhite",
          "navy",
          "oldlace",
          "olive",
          "olivedrab",
          "orange",
          "orangered",
          "orchid",
          "palegoldenrod",
          "palegreen",
          "paleturquoise",
          "palevioletred",
          "papayawhip",
          "peachpuff",
          "peru",
          "pink",
          "plum",
          "powderblue",
          "purple",
          "rebeccapurple",
          "red",
          "rosybrown",
          "royalblue",
          "saddlebrown",
          "salmon",
          "sandybrown",
          "seagreen",
          "seashell",
          "sienna",
          "silver",
          "skyblue",
          "slateblue",
          "slategray",
          "slategrey",
          "snow",
          "springgreen",
          "steelblue",
          "tan",
          "teal",
          "thistle",
          "tomato",
          "turquoise",
          "violet",
          "wheat",
          "white",
          "whitesmoke",
          "yellow",
          "yellowgreen",
        ],
        x = o(v);
      var z = [
          "above",
          "absolute",
          "activeborder",
          "additive",
          "activecaption",
          "afar",
          "after-white-space",
          "ahead",
          "alias",
          "all",
          "all-scroll",
          "alphabetic",
          "alternate",
          "always",
          "amharic",
          "amharic-abegede",
          "antialiased",
          "appworkspace",
          "arabic-indic",
          "armenian",
          "asterisks",
          "attr",
          "auto",
          "auto-flow",
          "avoid",
          "avoid-column",
          "avoid-page",
          "avoid-region",
          "axis-pan",
          "background",
          "backwards",
          "baseline",
          "below",
          "bidi-override",
          "binary",
          "bengali",
          "blink",
          "block",
          "block-axis",
          "blur",
          "bold",
          "bolder",
          "border",
          "border-box",
          "both",
          "bottom",
          "break",
          "break-all",
          "break-word",
          "brightness",
          "bullets",
          "button",
          "buttonface",
          "buttonhighlight",
          "buttonshadow",
          "buttontext",
          "calc",
          "cambodian",
          "capitalize",
          "caps-lock-indicator",
          "caption",
          "captiontext",
          "caret",
          "cell",
          "center",
          "checkbox",
          "circle",
          "cjk-decimal",
          "cjk-earthly-branch",
          "cjk-heavenly-stem",
          "cjk-ideographic",
          "clear",
          "clip",
          "close-quote",
          "col-resize",
          "collapse",
          "color",
          "color-burn",
          "color-dodge",
          "column",
          "column-reverse",
          "compact",
          "condensed",
          "conic-gradient",
          "contain",
          "content",
          "contents",
          "content-box",
          "context-menu",
          "continuous",
          "contrast",
          "copy",
          "counter",
          "counters",
          "cover",
          "crop",
          "cross",
          "crosshair",
          "cubic-bezier",
          "currentcolor",
          "cursive",
          "cyclic",
          "darken",
          "dashed",
          "decimal",
          "decimal-leading-zero",
          "default",
          "default-button",
          "dense",
          "destination-atop",
          "destination-in",
          "destination-out",
          "destination-over",
          "devanagari",
          "difference",
          "disc",
          "discard",
          "disclosure-closed",
          "disclosure-open",
          "document",
          "dot-dash",
          "dot-dot-dash",
          "dotted",
          "double",
          "down",
          "drop-shadow",
          "e-resize",
          "ease",
          "ease-in",
          "ease-in-out",
          "ease-out",
          "element",
          "ellipse",
          "ellipsis",
          "embed",
          "end",
          "ethiopic",
          "ethiopic-abegede",
          "ethiopic-abegede-am-et",
          "ethiopic-abegede-gez",
          "ethiopic-abegede-ti-er",
          "ethiopic-abegede-ti-et",
          "ethiopic-halehame-aa-er",
          "ethiopic-halehame-aa-et",
          "ethiopic-halehame-am-et",
          "ethiopic-halehame-gez",
          "ethiopic-halehame-om-et",
          "ethiopic-halehame-sid-et",
          "ethiopic-halehame-so-et",
          "ethiopic-halehame-ti-er",
          "ethiopic-halehame-ti-et",
          "ethiopic-halehame-tig",
          "ethiopic-numeric",
          "ew-resize",
          "exclusion",
          "expanded",
          "extends",
          "extra-condensed",
          "extra-expanded",
          "fantasy",
          "fast",
          "fill",
          "fill-box",
          "fixed",
          "flat",
          "flex",
          "flex-end",
          "flex-start",
          "footnotes",
          "forwards",
          "from",
          "geometricPrecision",
          "georgian",
          "grayscale",
          "graytext",
          "grid",
          "groove",
          "gujarati",
          "gurmukhi",
          "hand",
          "hangul",
          "hangul-consonant",
          "hard-light",
          "hebrew",
          "help",
          "hidden",
          "hide",
          "higher",
          "highlight",
          "highlighttext",
          "hiragana",
          "hiragana-iroha",
          "horizontal",
          "hsl",
          "hsla",
          "hue",
          "hue-rotate",
          "icon",
          "ignore",
          "inactiveborder",
          "inactivecaption",
          "inactivecaptiontext",
          "infinite",
          "infobackground",
          "infotext",
          "inherit",
          "initial",
          "inline",
          "inline-axis",
          "inline-block",
          "inline-flex",
          "inline-grid",
          "inline-table",
          "inset",
          "inside",
          "intrinsic",
          "invert",
          "italic",
          "japanese-formal",
          "japanese-informal",
          "justify",
          "kannada",
          "katakana",
          "katakana-iroha",
          "keep-all",
          "khmer",
          "korean-hangul-formal",
          "korean-hanja-formal",
          "korean-hanja-informal",
          "landscape",
          "lao",
          "large",
          "larger",
          "left",
          "level",
          "lighter",
          "lighten",
          "line-through",
          "linear",
          "linear-gradient",
          "lines",
          "list-item",
          "listbox",
          "listitem",
          "local",
          "logical",
          "loud",
          "lower",
          "lower-alpha",
          "lower-armenian",
          "lower-greek",
          "lower-hexadecimal",
          "lower-latin",
          "lower-norwegian",
          "lower-roman",
          "lowercase",
          "ltr",
          "luminosity",
          "malayalam",
          "manipulation",
          "match",
          "matrix",
          "matrix3d",
          "media-play-button",
          "media-slider",
          "media-sliderthumb",
          "media-volume-slider",
          "media-volume-sliderthumb",
          "medium",
          "menu",
          "menulist",
          "menulist-button",
          "menutext",
          "message-box",
          "middle",
          "min-intrinsic",
          "mix",
          "mongolian",
          "monospace",
          "move",
          "multiple",
          "multiple_mask_images",
          "multiply",
          "myanmar",
          "n-resize",
          "narrower",
          "ne-resize",
          "nesw-resize",
          "no-close-quote",
          "no-drop",
          "no-open-quote",
          "no-repeat",
          "none",
          "normal",
          "not-allowed",
          "nowrap",
          "ns-resize",
          "numbers",
          "numeric",
          "nw-resize",
          "nwse-resize",
          "oblique",
          "octal",
          "opacity",
          "open-quote",
          "optimizeLegibility",
          "optimizeSpeed",
          "oriya",
          "oromo",
          "outset",
          "outside",
          "outside-shape",
          "overlay",
          "overline",
          "padding",
          "padding-box",
          "painted",
          "page",
          "paused",
          "persian",
          "perspective",
          "pinch-zoom",
          "plus-darker",
          "plus-lighter",
          "pointer",
          "polygon",
          "portrait",
          "pre",
          "pre-line",
          "pre-wrap",
          "preserve-3d",
          "progress",
          "push-button",
          "radial-gradient",
          "radio",
          "read-only",
          "read-write",
          "read-write-plaintext-only",
          "rectangle",
          "region",
          "relative",
          "repeat",
          "repeating-linear-gradient",
          "repeating-radial-gradient",
          "repeating-conic-gradient",
          "repeat-x",
          "repeat-y",
          "reset",
          "reverse",
          "rgb",
          "rgba",
          "ridge",
          "right",
          "rotate",
          "rotate3d",
          "rotateX",
          "rotateY",
          "rotateZ",
          "round",
          "row",
          "row-resize",
          "row-reverse",
          "rtl",
          "run-in",
          "running",
          "s-resize",
          "sans-serif",
          "saturate",
          "saturation",
          "scale",
          "scale3d",
          "scaleX",
          "scaleY",
          "scaleZ",
          "screen",
          "scroll",
          "scrollbar",
          "scroll-position",
          "se-resize",
          "searchfield",
          "searchfield-cancel-button",
          "searchfield-decoration",
          "searchfield-results-button",
          "searchfield-results-decoration",
          "self-start",
          "self-end",
          "semi-condensed",
          "semi-expanded",
          "separate",
          "sepia",
          "serif",
          "show",
          "sidama",
          "simp-chinese-formal",
          "simp-chinese-informal",
          "single",
          "skew",
          "skewX",
          "skewY",
          "skip-white-space",
          "slide",
          "slider-horizontal",
          "slider-vertical",
          "sliderthumb-horizontal",
          "sliderthumb-vertical",
          "slow",
          "small",
          "small-caps",
          "small-caption",
          "smaller",
          "soft-light",
          "solid",
          "somali",
          "source-atop",
          "source-in",
          "source-out",
          "source-over",
          "space",
          "space-around",
          "space-between",
          "space-evenly",
          "spell-out",
          "square",
          "square-button",
          "start",
          "static",
          "status-bar",
          "stretch",
          "stroke",
          "stroke-box",
          "sub",
          "subpixel-antialiased",
          "svg_masks",
          "super",
          "sw-resize",
          "symbolic",
          "symbols",
          "system-ui",
          "table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row",
          "table-row-group",
          "tamil",
          "telugu",
          "text",
          "text-bottom",
          "text-top",
          "textarea",
          "textfield",
          "thai",
          "thick",
          "thin",
          "threeddarkshadow",
          "threedface",
          "threedhighlight",
          "threedlightshadow",
          "threedshadow",
          "tibetan",
          "tigre",
          "tigrinya-er",
          "tigrinya-er-abegede",
          "tigrinya-et",
          "tigrinya-et-abegede",
          "to",
          "top",
          "trad-chinese-formal",
          "trad-chinese-informal",
          "transform",
          "translate",
          "translate3d",
          "translateX",
          "translateY",
          "translateZ",
          "transparent",
          "ultra-condensed",
          "ultra-expanded",
          "underline",
          "unidirectional-pan",
          "unset",
          "up",
          "upper-alpha",
          "upper-armenian",
          "upper-greek",
          "upper-hexadecimal",
          "upper-latin",
          "upper-norwegian",
          "upper-roman",
          "uppercase",
          "urdu",
          "url",
          "var",
          "vertical",
          "vertical-text",
          "view-box",
          "visible",
          "visibleFill",
          "visiblePainted",
          "visibleStroke",
          "visual",
          "w-resize",
          "wait",
          "wave",
          "wider",
          "window",
          "windowframe",
          "windowtext",
          "words",
          "wrap",
          "wrap-reverse",
          "x-large",
          "x-small",
          "xor",
          "xx-large",
          "xx-small",
        ],
        j = o(z);
      var P = a.concat(l).concat(c).concat(p).concat(m).concat(g).concat(v).concat(z);
      const q = { properties: m, colors: v, fonts: b, values: z, all: P };
      const K = {
        documentTypes: n,
        mediaTypes: s,
        mediaFeatures: d,
        mediaValueKeywords: u,
        propertyKeywords: f,
        nonStandardPropertyKeywords: h,
        fontProperties: k,
        counterDescriptors: w,
        colorKeywords: x,
        valueKeywords: j,
        tokenHooks: {
          "/": function (e, r) {
            if (!e.eat("*")) return false;
            r.tokenize = B;
            return B(e, r);
          },
        },
      };
      const _ = i({ name: "css" });
      function B(e, r) {
        var t = false,
          i;
        while ((i = e.next()) != null) {
          if (t && i == "/") {
            r.tokenize = null;
            break;
          }
          t = i == "*";
        }
        return ["comment", "comment"];
      }
      const C = i({
        name: "scss",
        mediaTypes: s,
        mediaFeatures: d,
        mediaValueKeywords: u,
        propertyKeywords: f,
        nonStandardPropertyKeywords: h,
        colorKeywords: x,
        valueKeywords: j,
        fontProperties: k,
        allowNested: true,
        lineComment: "//",
        tokenHooks: {
          "/": function (e, r) {
            if (e.eat("/")) {
              e.skipToEnd();
              return ["comment", "comment"];
            } else if (e.eat("*")) {
              r.tokenize = B;
              return B(e, r);
            } else {
              return ["operator", "operator"];
            }
          },
          ":": function (e) {
            if (e.match(/^\s*\{/, false)) return [null, null];
            return false;
          },
          $: function (e) {
            e.match(/^[\w-]+/);
            if (e.match(/^\s*:/, false)) return ["def", "variable-definition"];
            return ["variableName.special", "variable"];
          },
          "#": function (e) {
            if (!e.eat("{")) return false;
            return [null, "interpolation"];
          },
        },
      });
      const O = i({
        name: "less",
        mediaTypes: s,
        mediaFeatures: d,
        mediaValueKeywords: u,
        propertyKeywords: f,
        nonStandardPropertyKeywords: h,
        colorKeywords: x,
        valueKeywords: j,
        fontProperties: k,
        allowNested: true,
        lineComment: "//",
        tokenHooks: {
          "/": function (e, r) {
            if (e.eat("/")) {
              e.skipToEnd();
              return ["comment", "comment"];
            } else if (e.eat("*")) {
              r.tokenize = B;
              return B(e, r);
            } else {
              return ["operator", "operator"];
            }
          },
          "@": function (e) {
            if (e.eat("{")) return [null, "interpolation"];
            if (e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, false)) return false;
            e.eatWhile(/[\w\\\-]/);
            if (e.match(/^\s*:/, false)) return ["def", "variable-definition"];
            return ["variableName", "variable"];
          },
          "&": function () {
            return ["atom", "atom"];
          },
        },
      });
      const S = i({
        name: "gss",
        documentTypes: n,
        mediaTypes: s,
        mediaFeatures: d,
        propertyKeywords: f,
        nonStandardPropertyKeywords: h,
        fontProperties: k,
        counterDescriptors: w,
        colorKeywords: x,
        valueKeywords: j,
        supportsAtComponent: true,
        tokenHooks: {
          "/": function (e, r) {
            if (!e.eat("*")) return false;
            r.tokenize = B;
            return B(e, r);
          },
        },
      });
    },
  },
]);
