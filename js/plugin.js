/*for menu*/
/**
 * Create an anonymous function to avoid library conflicts
 */
!function(e){e.fn.responsiveMenu=function(s){e.fn.responsiveMenu.defaultOptions={menuIcon_text:"",menuslide_overlap:!1,menuslide_push:!1,menuslide_direction:""};var s=e.extend({},e.fn.responsiveMenu.defaultOptions,s);return this.each(function(n){function i(e){e.removeClass("desk"),r.next().stop(!0,!0).slideUp(),u.removeClass("up"),v&&e.slideUp(),e.find(".menu-icon").removeClass("active")}function o(n){0==n.prev(".menu-icon").length&&(n.wrapAll('<div class="enumenu_container"></div>'),e('<div class="menu-icon"> <div class="menu-box"><span></span><span></span><span></span> </div>'+s.menuIcon_text+"</div>").insertBefore(n),e("> li > a",n).addClass("firstLevel"),n.find("li").each(function(){(e(this).children("ul").length||e(this).children("div").length)&&(e(this).addClass("has-children"),e(this).children("a").addClass("menubelow"))})),r=n.find("a.menubelow"),0==n.find(".arrow").length&&(r.each(function(){e(this).closest("li").prepend('<span class="arrow"></span>'),e(this).next().addClass("sb-menu")}),u=n.find(".arrow")),s.menuslide_overlap?e("body").addClass("menuOverlap"):s.menuslide_push&&e("body").addClass("menuslide_push"),(s.menuslide_overlap||s.menuslide_push)&&""==s.menuslide_direction&&e("body").addClass("slidemenuRight"),"left"==s.menuslide_direction?e("body").addClass("slidemenuLeft"):"right"==s.menuslide_direction&&e("body").addClass("slidemenuRight")}function t(s){s.find(".arrow").on("touchstart click",function(n){n.stopImmediatePropagation(),n.preventDefault();var i=e(this).closest("li").children(".sb-menu"),o=e(this).closest("li").siblings(),t=e(this).closest("li");s.prev(".menu-icon").is(":visible")&&(i.length>0&&(o.find(".sb-menu").stop(!0,!0).slideUp(),o.find(".sb-menu").each(function(){e(this).closest("li").find(">span").removeClass("up")})),i.is(":hidden")?(i.slideUp(),t.find(">span").removeClass("up")):(i.find(".sb-menu").each(function(){e(this).stop().slideUp(),e(this).closest("li").find("span").removeClass("up")}),i.stop().slideDown(),t.find(">span").addClass("up")))})}function a(s){s.find(".menubelow").each(function(){e(this).removeAttr("style"),e(this).next().removeAttr("style")}),s.find(".arrow").remove(),s.prev(".menu-icon").removeClass("active"),s.addClass("desk").removeAttr("style"),s.removeAttr("style"),e("body").removeClass("menu-open"),h=!1}function l(n){(0==s.menuslide_overlap&&0==s.menuslide_push||1==s.menuslide_overlap&&1==s.menuslide_push)&&(v=!0),n.prev(".menu-icon").is(":visible")?m||(i(n),o(n),t(n),m=!0,h=!1,n.removeClass("desk"),e("body").removeClass("desk"),n.addClass("mob"),e("body").addClass("mob")):h||(a(n),m=!1,h=!0,n.removeClass("mob"),e("body").removeClass("mob"),n.addClass("desk"),e("body").addClass("desk"))}function d(s){e("body").removeClass("menu-open"),v&&s.stop().slideUp(),s.prev(".menu-icon").removeClass("active"),s.find(".arrow").removeClass("up"),s.find(".sb-menu").stop(!0,!0).slideUp()}var r,u,c=e(this),m=!1,h=!1,v=!1;o(c),l(c),e(window).resize(function(e){l(c)}),c.prev(".menu-icon").on("click",function(s){s.stopPropagation(),s.preventDefault(),e(this).hasClass("active")?d(c):(v&&e(this).next().slideDown(),e(this).addClass("active"),e("body").addClass("menu-open"))}),e("body").on("click touchstart",function(s){c.prev(".menu-icon").is(":visible")&&(0!=e(s.target).closest(".enumenu_container").length||e(s.target).hasClass("active")||d(c))}),"ontouchstart"in window?(c.find("a").click(function(s){!e(this).hasClass("link")&&!e("body").hasClass("mob")&&e(this).next().length>0&&(s.preventDefault(),e(this).hasClass("firstLevel")&&(c.find("a").removeClass("link"),c.find("a").parent().removeClass("hover")),e(this).addClass("link"),e(this).parent().addClass("hover"))}),e("body").on("click touchstart",function(s){0==e(s.target).closest(".enumenu_container").length&&c.find("a").each(function(){e(this).removeClass("link"),e(this).parent().removeClass("hover")})})):(c.find("li").mouseenter(function(){e(this).addClass("hover")}),c.find("li").mouseleave(function(){e(this).removeClass("hover")}),e(".menu-icon").on("mouseenter",function(){e(this).addClass("hover")}).mouseleave(function(){e(this).removeClass("hover")}))})}}(jQuery);