"use strict";
(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([
  [5959],
  {
    15959: (e, t, n) => {
      n.r(t);
      n.d(t, { protobuf: () => p });
      function r(e) {
        return new RegExp("^((" + e.join(")|(") + "))\\b", "i");
      }
      var a = [
        "package",
        "message",
        "import",
        "syntax",
        "required",
        "optional",
        "repeated",
        "reserved",
        "default",
        "extensions",
        "packed",
        "bool",
        "bytes",
        "double",
        "enum",
        "float",
        "string",
        "int32",
        "int64",
        "uint32",
        "uint64",
        "sint32",
        "sint64",
        "fixed32",
        "fixed64",
        "sfixed32",
        "sfixed64",
        "option",
        "service",
        "rpc",
        "returns",
      ];
      var i = r(a);
      var u = new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*");
      function o(e) {
        if (e.eatSpace()) return null;
        if (e.match("//")) {
          e.skipToEnd();
          return "comment";
        }
        if (e.match(/^[0-9\.+-]/, false)) {
          if (e.match(/^[+-]?0x[0-9a-fA-F]+/)) return "number";
          if (e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/)) return "number";
          if (e.match(/^[+-]?\d+([EeDd][+-]?\d+)?/)) return "number";
        }
        if (e.match(/^"([^"]|(""))*"/)) {
          return "string";
        }
        if (e.match(/^'([^']|(''))*'/)) {
          return "string";
        }
        if (e.match(i)) {
          return "keyword";
        }
        if (e.match(u)) {
          return "variable";
        }
        e.next();
        return null;
      }
      const p = { name: "protobuf", token: o, languageData: { autocomplete: a } };
    },
  },
]);
