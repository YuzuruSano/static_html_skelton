!(function(t) {
  var n = {};
  function e(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  (e.m = t),
    (e.c = n),
    (e.d = function(t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
    }),
    (e.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (e.t = function(t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (e.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (var o in t)
          e.d(
            r,
            o,
            function(n) {
              return t[n];
            }.bind(null, o)
          );
      return r;
    }),
    (e.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function(t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = ""),
    e((e.s = 47));
})({
  2: function(t, n) {
    t.exports = jQuery;
  },
  47: function(t, n, e) {
    "use strict";
    e.r(n),
      function(t) {
        n.default = function() {
          t("a:not(:has(img))").each(function() {
            t(this).hasClass("no_linkicon") ||
              t(this).addClass("js--link_icon");
          }),
            t(".js--link_icon[href$=pdf]").each(function() {
              t(this)
                .addClass("js--link_icon-pdf")
                .attr({ target: "_blank" });
            }),
            t(
              ".js--link_icon[href$=xls],.js--link_icon[href$=xlsx],.js--link_icon[href$=xlsm]"
            )
              .addClass("js--link_icon-xls")
              .attr({ target: "_blank" }),
            t(".js--link_icon[href$=doc],.js--link_icon[href$=docx]")
              .addClass("js--link_icon-docx")
              .attr({ target: "_blank" }),
            t(
              ".js--link_icon[href$=pptx],.js--link_icon[href$=pptm],.js--link_icon[href$=ppt]"
            )
              .addClass("js--link_icon-pptx")
              .attr({ target: "_blank" }),
            t(
              '.js--link_icon[href^=http]:not([href*="' +
                location.hostname +
                '"],[href$=pdf],[href$=xls],[href$=xlsx],[href$=xlsm],[href$=doc],[href$=docx],[href$=pptx],[href$=pptm],[href$=ppt])'
            )
              .addClass("js--link_icon-ext")
              .attr({ target: "_blank" }),
            t(
              '.js--btn_link_icon[href^=http]:not([href*="' +
                location.hostname +
                '"],[href$=pdf],[href$=xls],[href$=xlsx],[href$=xlsm],[href$=doc],[href$=docx],[href$=pptx],[href$=pptm],[href$=ppt])'
            ).attr({ target: "_blank" });
        };
      }.call(this, e(2));
  }
});
//# sourceMappingURL=link_icon.js.map
