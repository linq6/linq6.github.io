"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [2039],
  {
    72039: (e, t, i) => {
      i.r(t);
      i.d(t, { textile: () => m });
      var n = {
        addition: "inserted",
        attributes: "propertyName",
        bold: "strong",
        cite: "keyword",
        code: "monospace",
        definitionList: "list",
        deletion: "deleted",
        div: "punctuation",
        em: "emphasis",
        footnote: "variable",
        footCite: "qualifier",
        header: "heading",
        html: "comment",
        image: "atom",
        italic: "emphasis",
        link: "link",
        linkDefinition: "link",
        list1: "list",
        list2: "list.special",
        list3: "list",
        notextile: "string.special",
        pre: "operator",
        p: "content",
        quote: "bracket",
        span: "quote",
        specialChar: "character",
        strong: "strong",
        sub: "content.special",
        sup: "content.special",
        table: "variableName.special",
        tableHeading: "operator",
      };
      function a(e, t) {
        t.mode = d.newLayout;
        t.tableHeading = false;
        if (t.layoutType === "definitionList" && t.spanningLayout && e.match(p("definitionListEnd"), false)) t.spanningLayout = false;
      }
      function r(e, t, i) {
        if (i === "_") {
          if (e.eat("_")) return l(e, t, "italic", /__/, 2);
          else return l(e, t, "em", /_/, 1);
        }
        if (i === "*") {
          if (e.eat("*")) {
            return l(e, t, "bold", /\*\*/, 2);
          }
          return l(e, t, "strong", /\*/, 1);
        }
        if (i === "[") {
          if (e.match(/\d+\]/)) t.footCite = true;
          return s(t);
        }
        if (i === "(") {
          var a = e.match(/^(r|tm|c)\)/);
          if (a) return n.specialChar;
        }
        if (i === "<" && e.match(/(\w+)[^>]+>[^<]+<\/\1>/)) return n.html;
        if (i === "?" && e.eat("?")) return l(e, t, "cite", /\?\?/, 2);
        if (i === "=" && e.eat("=")) return l(e, t, "notextile", /==/, 2);
        if (i === "-" && !e.eat("-")) return l(e, t, "deletion", /-/, 1);
        if (i === "+") return l(e, t, "addition", /\+/, 1);
        if (i === "~") return l(e, t, "sub", /~/, 1);
        if (i === "^") return l(e, t, "sup", /\^/, 1);
        if (i === "%") return l(e, t, "span", /%/, 1);
        if (i === "@") return l(e, t, "code", /@/, 1);
        if (i === "!") {
          var r = l(e, t, "image", /(?:\([^\)]+\))?!/, 1);
          e.match(/^:\S+/);
          return r;
        }
        return s(t);
      }
      function l(e, t, i, n, a) {
        var r = e.pos > a ? e.string.charAt(e.pos - a - 1) : null;
        var l = e.peek();
        if (t[i]) {
          if ((!l || /\W/.test(l)) && r && /\S/.test(r)) {
            var o = s(t);
            t[i] = false;
            return o;
          }
        } else if ((!r || /\W/.test(r)) && l && /\S/.test(l) && e.match(new RegExp("^.*\\S" + n.source + "(?:\\W|$)"), false)) {
          t[i] = true;
          t.mode = d.attributes;
        }
        return s(t);
      }
      function s(e) {
        var t = o(e);
        if (t) return t;
        var i = [];
        if (e.layoutType) i.push(n[e.layoutType]);
        i = i.concat(
          u(
            e,
            "addition",
            "bold",
            "cite",
            "code",
            "deletion",
            "em",
            "footCite",
            "image",
            "italic",
            "link",
            "span",
            "strong",
            "sub",
            "sup",
            "table",
            "tableHeading"
          )
        );
        if (e.layoutType === "header") i.push(n.header + "-" + e.header);
        return i.length ? i.join(" ") : null;
      }
      function o(e) {
        var t = e.layoutType;
        switch (t) {
          case "notextile":
          case "code":
          case "pre":
            return n[t];
          default:
            if (e.notextile) return n.notextile + (t ? " " + n[t] : "");
            return null;
        }
      }
      function u(e) {
        var t = [];
        for (var i = 1; i < arguments.length; ++i) {
          if (e[arguments[i]]) t.push(n[arguments[i]]);
        }
        return t;
      }
      function c(e) {
        var t = e.spanningLayout,
          i = e.layoutType;
        for (var n in e) if (e.hasOwnProperty(n)) delete e[n];
        e.mode = d.newLayout;
        if (t) {
          e.layoutType = i;
          e.spanningLayout = true;
        }
      }
      var f = {
        cache: {},
        single: {
          bc: "bc",
          bq: "bq",
          definitionList: /- .*?:=+/,
          definitionListEnd: /.*=:\s*$/,
          div: "div",
          drawTable: /\|.*\|/,
          foot: /fn\d+/,
          header: /h[1-6]/,
          html: /\s*<(?:\/)?(\w+)(?:[^>]+)?>(?:[^<]+<\/\1>)?/,
          link: /[^"]+":\S/,
          linkDefinition: /\[[^\s\]]+\]\S+/,
          list: /(?:#+|\*+)/,
          notextile: "notextile",
          para: "p",
          pre: "pre",
          table: "table",
          tableCellAttributes: /[\/\\]\d+/,
          tableHeading: /\|_\./,
          tableText: /[^"_\*\[\(\?\+~\^%@|-]+/,
          text: /[^!"_=\*\[\(<\?\+~\^%@-]+/,
        },
        attributes: { align: /(?:<>|<|>|=)/, selector: /\([^\(][^\)]+\)/, lang: /\[[^\[\]]+\]/, pad: /(?:\(+|\)+){1,2}/, css: /\{[^\}]+\}/ },
        createRe: function (e) {
          switch (e) {
            case "drawTable":
              return f.makeRe("^", f.single.drawTable, "$");
            case "html":
              return f.makeRe("^", f.single.html, "(?:", f.single.html, ")*", "$");
            case "linkDefinition":
              return f.makeRe("^", f.single.linkDefinition, "$");
            case "listLayout":
              return f.makeRe("^", f.single.list, p("allAttributes"), "*\\s+");
            case "tableCellAttributes":
              return f.makeRe("^", f.choiceRe(f.single.tableCellAttributes, p("allAttributes")), "+\\.");
            case "type":
              return f.makeRe("^", p("allTypes"));
            case "typeLayout":
              return f.makeRe("^", p("allTypes"), p("allAttributes"), "*\\.\\.?", "(\\s+|$)");
            case "attributes":
              return f.makeRe("^", p("allAttributes"), "+");
            case "allTypes":
              return f.choiceRe(
                f.single.div,
                f.single.foot,
                f.single.header,
                f.single.bc,
                f.single.bq,
                f.single.notextile,
                f.single.pre,
                f.single.table,
                f.single.para
              );
            case "allAttributes":
              return f.choiceRe(f.attributes.selector, f.attributes.css, f.attributes.lang, f.attributes.align, f.attributes.pad);
            default:
              return f.makeRe("^", f.single[e]);
          }
        },
        makeRe: function () {
          var e = "";
          for (var t = 0; t < arguments.length; ++t) {
            var i = arguments[t];
            e += typeof i === "string" ? i : i.source;
          }
          return new RegExp(e);
        },
        choiceRe: function () {
          var e = [arguments[0]];
          for (var t = 1; t < arguments.length; ++t) {
            e[t * 2 - 1] = "|";
            e[t * 2] = arguments[t];
          }
          e.unshift("(?:");
          e.push(")");
          return f.makeRe.apply(null, e);
        },
      };
      function p(e) {
        return f.cache[e] || (f.cache[e] = f.createRe(e));
      }
      var d = {
        newLayout: function (e, t) {
          if (e.match(p("typeLayout"), false)) {
            t.spanningLayout = false;
            return (t.mode = d.blockType)(e, t);
          }
          var i;
          if (!o(t)) {
            if (e.match(p("listLayout"), false)) i = d.list;
            else if (e.match(p("drawTable"), false)) i = d.table;
            else if (e.match(p("linkDefinition"), false)) i = d.linkDefinition;
            else if (e.match(p("definitionList"))) i = d.definitionList;
            else if (e.match(p("html"), false)) i = d.html;
          }
          return (t.mode = i || d.text)(e, t);
        },
        blockType: function (e, t) {
          var i, n;
          t.layoutType = null;
          if ((i = e.match(p("type")))) n = i[0];
          else return (t.mode = d.text)(e, t);
          if ((i = n.match(p("header")))) {
            t.layoutType = "header";
            t.header = parseInt(i[0][1]);
          } else if (n.match(p("bq"))) {
            t.layoutType = "quote";
          } else if (n.match(p("bc"))) {
            t.layoutType = "code";
          } else if (n.match(p("foot"))) {
            t.layoutType = "footnote";
          } else if (n.match(p("notextile"))) {
            t.layoutType = "notextile";
          } else if (n.match(p("pre"))) {
            t.layoutType = "pre";
          } else if (n.match(p("div"))) {
            t.layoutType = "div";
          } else if (n.match(p("table"))) {
            t.layoutType = "table";
          }
          t.mode = d.attributes;
          return s(t);
        },
        text: function (e, t) {
          if (e.match(p("text"))) return s(t);
          var i = e.next();
          if (i === '"') return (t.mode = d.link)(e, t);
          return r(e, t, i);
        },
        attributes: function (e, t) {
          t.mode = d.layoutLength;
          if (e.match(p("attributes"))) return n.attributes;
          else return s(t);
        },
        layoutLength: function (e, t) {
          if (e.eat(".") && e.eat(".")) t.spanningLayout = true;
          t.mode = d.text;
          return s(t);
        },
        list: function (e, t) {
          var i = e.match(p("list"));
          t.listDepth = i[0].length;
          var n = (t.listDepth - 1) % 3;
          if (!n) t.layoutType = "list1";
          else if (n === 1) t.layoutType = "list2";
          else t.layoutType = "list3";
          t.mode = d.attributes;
          return s(t);
        },
        link: function (e, t) {
          t.mode = d.text;
          if (e.match(p("link"))) {
            e.match(/\S+/);
            return n.link;
          }
          return s(t);
        },
        linkDefinition: function (e) {
          e.skipToEnd();
          return n.linkDefinition;
        },
        definitionList: function (e, t) {
          e.match(p("definitionList"));
          t.layoutType = "definitionList";
          if (e.match(/\s*$/)) t.spanningLayout = true;
          else t.mode = d.attributes;
          return s(t);
        },
        html: function (e) {
          e.skipToEnd();
          return n.html;
        },
        table: function (e, t) {
          t.layoutType = "table";
          return (t.mode = d.tableCell)(e, t);
        },
        tableCell: function (e, t) {
          if (e.match(p("tableHeading"))) t.tableHeading = true;
          else e.eat("|");
          t.mode = d.tableCellAttributes;
          return s(t);
        },
        tableCellAttributes: function (e, t) {
          t.mode = d.tableText;
          if (e.match(p("tableCellAttributes"))) return n.attributes;
          else return s(t);
        },
        tableText: function (e, t) {
          if (e.match(p("tableText"))) return s(t);
          if (e.peek() === "|") {
            t.mode = d.tableCell;
            return s(t);
          }
          return r(e, t, e.next());
        },
      };
      const m = {
        name: "textile",
        startState: function () {
          return { mode: d.newLayout };
        },
        token: function (e, t) {
          if (e.sol()) a(e, t);
          return t.mode(e, t);
        },
        blankLine: c,
      };
    },
  },
]);
