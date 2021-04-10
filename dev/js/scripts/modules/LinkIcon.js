const LinkIcon = function () {
  $("a:not(:has(img))").each(function() {
    if (!$(this).hasClass("no_linkicon")) {
      $(this).addClass("js--link_icon");
    }
  });

  //Pdf
  $(".js--link_icon[href$=pdf]").each(function() {
    $(this).addClass("js--link_icon-pdf").attr({ target: "_blank" });
  });
  //Excel
  $(
    ".js--link_icon[href$=xls],.js--link_icon[href$=xlsx],.js--link_icon[href$=xlsm]"
  )
    .addClass("js--link_icon-xls")
    .attr({ target: "_blank" });
  //Word
  $(".js--link_icon[href$=doc],.js--link_icon[href$=docx]")
    .addClass("js--link_icon-docx")
    .attr({ target: "_blank" });
  //PowerPoint
  $(
    ".js--link_icon[href$=pptx],.js--link_icon[href$=pptm],.js--link_icon[href$=ppt]"
  )
    .addClass("js--link_icon-pptx")
    .attr({ target: "_blank" });
  //外部リンク
  $(
    '.js--link_icon[href^=http]:not([href*="' +
      location.hostname +
      '"],[href$=pdf],[href$=xls],[href$=xlsx],[href$=xlsm],[href$=doc],[href$=docx],[href$=pptx],[href$=pptm],[href$=ppt])'
  )
    .addClass("js--link_icon-ext")
    .attr({ target: "_blank" });

  $(
    '.js--btn_link_icon[href^=http]:not([href*="' +
      location.hostname +
      '"],[href$=pdf],[href$=xls],[href$=xlsx],[href$=xlsm],[href$=doc],[href$=docx],[href$=pptx],[href$=pptm],[href$=ppt])'
  ).attr({ target: "_blank" });
}
export default LinkIcon;
