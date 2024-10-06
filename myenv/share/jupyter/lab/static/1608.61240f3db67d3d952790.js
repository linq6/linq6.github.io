"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [1608],
  {
    31608: (t, r, e) => {
      e.r(r);
      e.d(r, { mscgen: () => n, msgenny: () => i, xu: () => a });
      function o(t) {
        return {
          name: "mscgen",
          startState: u,
          copyState: l,
          token: m(t),
          languageData: { commentTokens: { line: "#", block: { open: "/*", close: "*/" } } },
        };
      }
      const n = o({
        keywords: ["msc"],
        options: ["hscale", "width", "arcgradient", "wordwraparcs"],
        constants: ["true", "false", "on", "off"],
        attributes: [
          "label",
          "idurl",
          "id",
          "url",
          "linecolor",
          "linecolour",
          "textcolor",
          "textcolour",
          "textbgcolor",
          "textbgcolour",
          "arclinecolor",
          "arclinecolour",
          "arctextcolor",
          "arctextcolour",
          "arctextbgcolor",
          "arctextbgcolour",
          "arcskip",
        ],
        brackets: ["\\{", "\\}"],
        arcsWords: ["note", "abox", "rbox", "box"],
        arcsOthers: [
          "\\|\\|\\|",
          "\\.\\.\\.",
          "---",
          "--",
          "<->",
          "==",
          "<<=>>",
          "<=>",
          "\\.\\.",
          "<<>>",
          "::",
          "<:>",
          "->",
          "=>>",
          "=>",
          ">>",
          ":>",
          "<-",
          "<<=",
          "<=",
          "<<",
          "<:",
          "x-",
          "-x",
        ],
        singlecomment: ["//", "#"],
        operators: ["="],
      });
      const i = o({
        keywords: null,
        options: ["hscale", "width", "arcgradient", "wordwraparcs", "wordwrapentities", "watermark"],
        constants: ["true", "false", "on", "off", "auto"],
        attributes: null,
        brackets: ["\\{", "\\}"],
        arcsWords: [
          "note",
          "abox",
          "rbox",
          "box",
          "alt",
          "else",
          "opt",
          "break",
          "par",
          "seq",
          "strict",
          "neg",
          "critical",
          "ignore",
          "consider",
          "assert",
          "loop",
          "ref",
          "exc",
        ],
        arcsOthers: [
          "\\|\\|\\|",
          "\\.\\.\\.",
          "---",
          "--",
          "<->",
          "==",
          "<<=>>",
          "<=>",
          "\\.\\.",
          "<<>>",
          "::",
          "<:>",
          "->",
          "=>>",
          "=>",
          ">>",
          ":>",
          "<-",
          "<<=",
          "<=",
          "<<",
          "<:",
          "x-",
          "-x",
        ],
        singlecomment: ["//", "#"],
        operators: ["="],
      });
      const a = o({
        keywords: ["msc", "xu"],
        options: ["hscale", "width", "arcgradient", "wordwraparcs", "wordwrapentities", "watermark"],
        constants: ["true", "false", "on", "off", "auto"],
        attributes: [
          "label",
          "idurl",
          "id",
          "url",
          "linecolor",
          "linecolour",
          "textcolor",
          "textcolour",
          "textbgcolor",
          "textbgcolour",
          "arclinecolor",
          "arclinecolour",
          "arctextcolor",
          "arctextcolour",
          "arctextbgcolor",
          "arctextbgcolour",
          "arcskip",
          "title",
          "deactivate",
          "activate",
          "activation",
        ],
        brackets: ["\\{", "\\}"],
        arcsWords: [
          "note",
          "abox",
          "rbox",
          "box",
          "alt",
          "else",
          "opt",
          "break",
          "par",
          "seq",
          "strict",
          "neg",
          "critical",
          "ignore",
          "consider",
          "assert",
          "loop",
          "ref",
          "exc",
        ],
        arcsOthers: [
          "\\|\\|\\|",
          "\\.\\.\\.",
          "---",
          "--",
          "<->",
          "==",
          "<<=>>",
          "<=>",
          "\\.\\.",
          "<<>>",
          "::",
          "<:>",
          "->",
          "=>>",
          "=>",
          ">>",
          ":>",
          "<-",
          "<<=",
          "<=",
          "<<",
          "<:",
          "x-",
          "-x",
        ],
        singlecomment: ["//", "#"],
        operators: ["="],
      });
      function c(t) {
        return new RegExp("^\\b(" + t.join("|") + ")\\b", "i");
      }
      function s(t) {
        return new RegExp("^(?:" + t.join("|") + ")", "i");
      }
      function u() {
        return { inComment: false, inString: false, inAttributeList: false, inScript: false };
      }
      function l(t) {
        return { inComment: t.inComment, inString: t.inString, inAttributeList: t.inAttributeList, inScript: t.inScript };
      }
      function m(t) {
        return function (r, e) {
          if (r.match(s(t.brackets), true, true)) {
            return "bracket";
          }
          if (!e.inComment) {
            if (r.match(/\/\*[^\*\/]*/, true, true)) {
              e.inComment = true;
              return "comment";
            }
            if (r.match(s(t.singlecomment), true, true)) {
              r.skipToEnd();
              return "comment";
            }
          }
          if (e.inComment) {
            if (r.match(/[^\*\/]*\*\//, true, true)) e.inComment = false;
            else r.skipToEnd();
            return "comment";
          }
          if (!e.inString && r.match(/\"(\\\"|[^\"])*/, true, true)) {
            e.inString = true;
            return "string";
          }
          if (e.inString) {
            if (r.match(/[^\"]*\"/, true, true)) e.inString = false;
            else r.skipToEnd();
            return "string";
          }
          if (!!t.keywords && r.match(c(t.keywords), true, true)) return "keyword";
          if (r.match(c(t.options), true, true)) return "keyword";
          if (r.match(c(t.arcsWords), true, true)) return "keyword";
          if (r.match(s(t.arcsOthers), true, true)) return "keyword";
          if (!!t.operators && r.match(s(t.operators), true, true)) return "operator";
          if (!!t.constants && r.match(s(t.constants), true, true)) return "variable";
          if (!t.inAttributeList && !!t.attributes && r.match("[", true, true)) {
            t.inAttributeList = true;
            return "bracket";
          }
          if (t.inAttributeList) {
            if (t.attributes !== null && r.match(c(t.attributes), true, true)) {
              return "attribute";
            }
            if (r.match("]", true, true)) {
              t.inAttributeList = false;
              return "bracket";
            }
          }
          r.next();
          return null;
        };
      }
    },
  },
]);
