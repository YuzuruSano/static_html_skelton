window.$ = jQuery;
import swiper from "swiper";
import Responsive from "./Responsive";

const r = new Responsive();
//const template = require('./_instagram_template.html');
const infiniteSlide = require("./infiniteSlide.js");

function instagram(request_url, append_target, slide_target) {
  let is = {};

  (function($) {
    $(function() {
      const Request = {
        send: function(obj) {
          let defer = $.Deferred();
          $.ajax({
            type: "POST",
            url: request_url,
            dataType: "json",
            context: obj,
            success: defer.resolve,
            error: defer.reject
          });
          return defer.promise();
        }
      };
      Request.send($(this))
        .then(
          function(data) {
            let compiled = _.template(template);
            let compiled_data = _.map(data.data, function(d) {
              return compiled(d);
            });

            $(append_target).append(compiled_data);
          },
          function(data) {
            console.log("request failed：" + data);
          }
        )
        .then(function() {
          if (!r.state()()) {
            // if(typeof slide_event.destroy == 'function'){
            // 	slide_event.destroy();
            // }
            is = $(slide_target).infiniteslide();
          } else {
          }
        });
    });
  })(jQuery);
}
export default instagram;
