!function(t,e){function o(){this._state=[],this._defaults={classHolder:"sbHolder",classHolderDisabled:"sbHolderDisabled",classSelector:"sbSelector",classOptions:"sbOptions",classGroup:"sbGroup",classSub:"sbSub",classDisabled:"sbDisabled",classToggleOpen:"sbToggleOpen",classToggle:"sbToggle",classFocus:"sbFocus",hide_duplicate_option:!1,removeDefault_option_onselect:!1,countryflagDefault_txt:!1,useCustomscroll:!1,customScrollminHeight:120,speed:200,addcountryflag:!1,effect:"slide",onChange:null,onOpen:null,onClose:null}}var a="selectbox",n=!1,l=!1,s=!0;t.extend(o.prototype,{_isOpenSelectbox:function(t){if(!t)return n;var e=this._getInst(t);return e.isOpen},_isDisabledSelectbox:function(t){if(!t)return n;var e=this._getInst(t);return e.isDisabled},_attachSelectbox:function(e,o){function l(){var e,o,a=this.attr("id").split("_")[1];for(e in p._state)e!==a&&p._state.hasOwnProperty(e)&&(o=t("select[sb='"+e+"']")[0],o&&p._closeSelectbox(o))}function i(){var o=arguments[1]&&arguments[1].sub?!0:!1,a=arguments[1]&&arguments[1].disabled?!0:!1;arguments[0].each(function(n){var l,i=t(this),r=t("<li>");i.is(":selected")&&(c.html("<a href='#'>"+i.text()+"</a>"),f=s),n===b-1&&r.addClass("last"),i.is(":disabled")||a?(l=t("<span>",{text:i.text()}).addClass(m.settings.classDisabled),o&&l.addClass(m.settings.classSub),l.appendTo(r)):(l=t("<a>",{href:""+i.val(),rel:i.val()}).text(i.text()).bind("click.sb",function(o){o&&o.preventDefault&&o.preventDefault();var a=d,n=t(this);a.attr("id").split("_")[1];p._changeSelectbox(e,n.attr("rel"),n.closest("li").html()),p._closeSelectbox(e)}).bind("mouseover.sb",function(){var e=t(this);e.parent().siblings().find("a").removeClass(m.settings.classFocus),e.addClass(m.settings.classFocus)}).bind("mouseout.sb",function(){t(this).removeClass(m.settings.classFocus)}),o&&l.addClass(m.settings.classSub),i.is(":selected")&&l.addClass(m.settings.classFocus),l.appendTo(r)),r.appendTo(u)})}if(this._getInst(e))return n;var r,c,d,u,h=t(e),p=this,m=p._newInst(h),f=n,g=(h.find("optgroup"),h.find("option")),b=g.length;h.attr("sb",m.uid),t.extend(m.settings,p._defaults,o),p._state[m.uid]=n,h.focus(function(){},function(){}),h.hide(),r=t("<div>",{id:"sbHolder_"+m.uid,"class":m.settings.classHolder,tabindex:h.attr("tabindex"),width:"auto"}).focus(function(){r.hasClass("focused")||r.addClass("focused")}).blur(function(){r.removeClass("focused")}),c=t("<div>",{id:"sbSelector_"+m.uid,href:"#","class":m.settings.classSelector,click:function(o){o.preventDefault(),l.apply(t(this),[]);var a=t(this).attr("id").split("_")[1];p._state[a]?p._closeSelectbox(e):p._openSelectbox(e)},tabindex:"-1"}),d=t("<div>",{id:"sbToggle_"+m.uid,href:"#","class":m.settings.classToggle,click:function(o){o.preventDefault(),l.apply(t(this),[]);var a=t(this).attr("id").split("_")[1];p._state[a]?p._closeSelectbox(e):p._openSelectbox(e)},tabindex:"-1"}),d.appendTo(r),u=t("<ul>",{id:"sbOptions_"+m.uid,"class":m.settings.classOptions,css:{display:"none",width:"100%"}}),h.children().each(function(e){var o,a=t(this),n={};a.is("option")?i(a):a.is("optgroup")&&(o=t("<li>"),t("<span>",{text:a.attr("label")}).addClass(m.settings.classGroup).appendTo(o),o.appendTo(u),a.is(":disabled")&&(n.disabled=!0),n.sub=!0,i(a.find("option"),n))}),m.settings.addcountryflag&&!m.settings.display_default_Countryflag?u.find("li").each(function(e){if(e>0){var o=t(g[e]).attr("data-img-src");t(this).prepend("<img src="+o+">")}}):m.settings.addcountryflag&&m.settings.display_default_Countryflag&&(u.find("li").each(function(e){var o=t(g[e]).attr("data-img-src");t(g[e]).attr("data-img-src")?t(this).prepend("<img src="+o+">"):t(this).remove()}),console.log(u.find("li").eq(0).html()),c.html(u.find("li").eq(0).html())),f||c.text(g.first().text()),t.data(e,a,m),r.data("uid",m.uid).bind("keydown.sb",function(o){var n=o.charCode?o.charCode:o.keyCode?o.keyCode:0,l=t(this),s=l.data("uid"),i=l.siblings("select[sb='"+s+"']").data(a),r=l.siblings(["select[sb='",s,"']"].join("")).get(0),c=l.find("ul").find("a."+i.settings.classFocus);switch(n){case 37:case 38:if(c.length>0){var d;t("a",l).removeClass(i.settings.classFocus),d=c.parent().prevAll("li:has(a)").eq(0).find("a"),d.length>0&&(t(e)[0].selectedIndex=d.closest("li").index(),d.addClass(i.settings.classFocus).focus(),t("#sbSelector_"+s).html(d.closest("li").html()),i.input.trigger("change"))}break;case 39:case 40:var d;t("a",l).removeClass(i.settings.classFocus),d=c.length>0?c.parent().nextAll("li:has(a)").eq(0).find("a"):l.find("ul").find("a").eq(0),d.length>0&&(t(e)[0].selectedIndex=d.closest("li").index(),d.addClass(i.settings.classFocus).focus(),t("#sbSelector_"+s).html(d.closest("li").html()),i.input.trigger("change"));break;case 13:c.length>0&&p._changeSelectbox(r,c.attr("rel"),c.closest("li").html()),p._closeSelectbox(r);break;case 9:if(r){var i=p._getInst(r);i&&(c.length>0&&t("#sbSelector_"+s).html(d.closest("li").html()),p._closeSelectbox(r))}var u=parseInt(l.attr("tabindex"),10);o.shiftKey?u--:u++,t("*[tabindex='"+u+"']").focus();break;case 27:p._closeSelectbox(r)}return o.stopPropagation(),!1}).delegate("a","mouseover",function(e){t(this).addClass(m.settings.classFocus)}).delegate("a","mouseout",function(e){t(this).removeClass(m.settings.classFocus)}),c.appendTo(r),u.appendTo(r),r.insertAfter(h),t("html").on("mousedown touchstart",function(e){t("select").selectbox("close")}),r.on("touchstart",function(t){t.stopPropagation()}),t([".",m.settings.classHolder,", .",m.settings.classSelector].join("")).mousedown(function(t){t.stopPropagation()})},_detachSelectbox:function(e){var o=this._getInst(e);return o?(t("#sbHolder_"+o.uid).remove(),t.data(e,a,null),void t(e).show()):n},_changeSelectbox:function(e,o,a){var i,r=this._getInst(e);r&&(i=this._get(r,"onChange"),t("#sbSelector_"+r.uid).html(a)),r.settings.addcountryflag||(o=o.replace(/\'/g,"\\'")),r.settings.removeDefault_option_onselect&&!l&&(t("#sbOptions_"+r.uid).find("li").eq(0).remove(),l=!0),t(e).find("option").attr("selected",n),t(e).find("option[value='"+o+"']").attr("selected",s),t(e)[0].selectedIndex=t(e).find("option[value='"+o+"']").index(),t("#sbHolder_"+r.uid).addClass("focused").focus(),r&&i?i.apply(r.input?r.input[0]:null,[o,r]):r&&r.input&&r.input.trigger("change")},_enableSelectbox:function(e){var o=this._getInst(e);return o&&o.isDisabled?(t("#sbHolder_"+o.uid).removeClass(o.settings.classHolderDisabled),o.isDisabled=n,void t.data(e,a,o)):n},_disableSelectbox:function(e){var o=this._getInst(e);return!o||o.isDisabled?n:(t("#sbHolder_"+o.uid).addClass(o.settings.classHolderDisabled),o.isDisabled=s,void t.data(e,a,o))},_optionSelectbox:function(e,o,l){var s=this._getInst(e);return s?(s[o]=l,void t.data(e,a,s)):n},_openSelectbox:function(e){function o(){t(".mCSB_container").length<=0&&n.settings.useCustomscroll&&t("#sbOptions_"+n.uid).mCustomScrollbar({axis:"y"})}var n=this._getInst(e);if(n&&!n.isOpen&&!n.isDisabled){var l=t("#sbOptions_"+n.uid),i=parseInt(t(window).height(),10),r=t("#sbHolder_"+n.uid).offset(),c=t(window).scrollTop(),d=l.prev().outerHeight()+3,u=i-(r.top-c)-d/2,h=this._get(n,"onOpen"),p=d*t("#sbOptions_"+n.uid+" li").length;if(t("#sbOptions_"+n.uid).parent().offset().top+p-t(window).scrollTop()-p+n.settings.customScrollminHeight>=t(window).height()?l.css({bottom:d+"px",maxHeight:p+"px",top:""}):l.css({top:d+"px",maxHeight:u-d+"px",bottom:""}),setTimeout(function(){"fade"===n.settings.effect?l.fadeIn(n.settings.speed,function(){}):l.slideDown(n.settings.speed,function(){o()})},50),t("#sbToggle_"+n.uid).addClass(n.settings.classToggleOpen),this._state[n.uid]=s,n.isOpen=s,h&&h.apply(n.input?n.input[0]:null,[n]),t.data(e,a,n),t("#sbOptions_"+n.uid).find("li").removeAttr("style"),n.settings.hide_duplicate_option){var m=t("#sbSelector_"+n.uid).text();t("#sbOptions_"+n.uid+" li a").each(function(){m==t(this).text()?t(this).closest("li").hide():t(this).closest("li").show()})}}},_closeSelectbox:function(e){var o=this._getInst(e);if(o&&o.isOpen){var l=this._get(o,"onClose");"fade"===o.settings.effect?t("#sbOptions_"+o.uid).fadeOut(o.settings.speed):t("#sbOptions_"+o.uid).slideUp(o.settings.speed),t("#sbToggle_"+o.uid).removeClass(o.settings.classToggleOpen),this._state[o.uid]=n,o.isOpen=n,l&&l.apply(o.input?o.input[0]:null,[o]),t.data(e,a,o),t(".mCSB_container").length>0&&o.settings.useCustomscroll&&t("#sbOptions_"+o.uid).mCustomScrollbar("destroy")}},_newInst:function(t){var e=t[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:e,input:t,uid:Math.floor(99999999*Math.random()),isOpen:n,isDisabled:n,settings:{}}},_getInst:function(e){try{return t.data(e,a)}catch(o){throw"Missing instance data for this selectbox"}},_get:function(t,o){return t.settings[o]!==e?t.settings[o]:this._defaults[o]}}),t.fn.selectbox=function(e){var o=Array.prototype.slice.call(arguments,1);return"string"==typeof e&&"isDisabled"==e?t.selectbox["_"+e+"Selectbox"].apply(t.selectbox,[this[0]].concat(o)):"option"==e&&2==arguments.length&&"string"==typeof arguments[1]?t.selectbox["_"+e+"Selectbox"].apply(t.selectbox,[this[0]].concat(o)):this.each(function(){"string"==typeof e?t.selectbox["_"+e+"Selectbox"].apply(t.selectbox,[this].concat(o)):t.selectbox._attachSelectbox(this,e)})},t.selectbox=new o,t.selectbox.version="0.2"}(jQuery),function(t){function e(e){var o=e||window.event,a=[].slice.call(arguments,1),n=0,l=0,s=0;return e=t.event.fix(o),e.type="mousewheel",o.wheelDelta&&(n=o.wheelDelta/120),o.detail&&(n=-o.detail/3),s=n,void 0!==o.axis&&o.axis===o.HORIZONTAL_AXIS&&(s=0,l=-1*n),void 0!==o.wheelDeltaY&&(s=o.wheelDeltaY/120),void 0!==o.wheelDeltaX&&(l=-1*o.wheelDeltaX/120),a.unshift(e,n,l,s),(t.event.dispatch||t.event.handle).apply(this,a)}var o=["DOMMouseScroll","mousewheel"];if(t.event.fixHooks)for(var a=o.length;a;)t.event.fixHooks[o[--a]]=t.event.mouseHooks;t.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var t=o.length;t;)this.addEventListener(o[--t],e,!1);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var t=o.length;t;)this.removeEventListener(o[--t],e,!1);else this.onmousewheel=null}},t.fn.extend({mousewheel:function(t){return t?this.bind("mousewheel",t):this.trigger("mousewheel")},unmousewheel:function(t){return this.unbind("mousewheel",t)}})}(jQuery),function(t){var e={init:function(e){var o={set_width:!1,set_height:!1,horizontalScroll:!1,scrollInertia:950,mouseWheel:!0,mouseWheelPixels:"auto",autoDraggerLength:!0,autoHideScrollbar:!1,alwaysShowScrollbar:!1,snapAmount:null,snapOffset:0,scrollButtons:{enable:!1,scrollType:"continuous",scrollSpeed:"auto",scrollAmount:40},advanced:{updateOnBrowserResize:!0,updateOnContentResize:!1,autoExpandHorizontalScroll:!1,autoScrollOnFocus:!0,normalizeMouseWheelDelta:!1},contentTouchScroll:!0,callbacks:{onScrollStart:function(){},onScroll:function(){},onTotalScroll:function(){},onTotalScrollBack:function(){},onTotalScrollOffset:0,onTotalScrollBackOffset:0,whileScrolling:function(){}},theme:"light"},e=t.extend(!0,o,e);return this.each(function(){var o=t(this);if(e.set_width&&o.css("width",e.set_width),e.set_height&&o.css("height",e.set_height),t(document).data("mCustomScrollbar-index")){var a=parseInt(t(document).data("mCustomScrollbar-index"));t(document).data("mCustomScrollbar-index",a+1)}else t(document).data("mCustomScrollbar-index","1");o.wrapInner("<div class='mCustomScrollBox mCS-"+e.theme+"' id='mCSB_"+t(document).data("mCustomScrollbar-index")+"' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_"+t(document).data("mCustomScrollbar-index"));var n=o.children(".mCustomScrollBox");if(e.horizontalScroll){n.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");var l=n.children(".mCSB_h_wrapper");l.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({width:l.children().outerWidth(),position:"relative"}).unwrap()}else n.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />");var s=n.children(".mCSB_container");t.support.touch&&s.addClass("mCS_touch"),s.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");var i=n.children(".mCSB_scrollTools"),r=i.children(".mCSB_draggerContainer"),c=r.children(".mCSB_dragger");if(e.horizontalScroll?c.data("minDraggerWidth",c.width()):c.data("minDraggerHeight",c.height()),e.scrollButtons.enable&&(e.horizontalScroll?i.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>"):i.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")),n.bind("scroll",function(){o.is(".mCS_disabled")||n.scrollTop(0).scrollLeft(0)}),o.data({mCS_Init:!0,mCustomScrollbarIndex:t(document).data("mCustomScrollbar-index"),horizontalScroll:e.horizontalScroll,scrollInertia:e.scrollInertia,scrollEasing:"mcsEaseOut",mouseWheel:e.mouseWheel,mouseWheelPixels:e.mouseWheelPixels,autoDraggerLength:e.autoDraggerLength,autoHideScrollbar:e.autoHideScrollbar,alwaysShowScrollbar:e.alwaysShowScrollbar,snapAmount:e.snapAmount,snapOffset:e.snapOffset,scrollButtons_enable:e.scrollButtons.enable,scrollButtons_scrollType:e.scrollButtons.scrollType,scrollButtons_scrollSpeed:e.scrollButtons.scrollSpeed,scrollButtons_scrollAmount:e.scrollButtons.scrollAmount,autoExpandHorizontalScroll:e.advanced.autoExpandHorizontalScroll,autoScrollOnFocus:e.advanced.autoScrollOnFocus,normalizeMouseWheelDelta:e.advanced.normalizeMouseWheelDelta,contentTouchScroll:e.contentTouchScroll,onScrollStart_Callback:e.callbacks.onScrollStart,onScroll_Callback:e.callbacks.onScroll,onTotalScroll_Callback:e.callbacks.onTotalScroll,onTotalScrollBack_Callback:e.callbacks.onTotalScrollBack,onTotalScroll_Offset:e.callbacks.onTotalScrollOffset,onTotalScrollBack_Offset:e.callbacks.onTotalScrollBackOffset,whileScrolling_Callback:e.callbacks.whileScrolling,bindEvent_scrollbar_drag:!1,bindEvent_content_touch:!1,bindEvent_scrollbar_click:!1,bindEvent_mousewheel:!1,bindEvent_buttonsContinuous_y:!1,bindEvent_buttonsContinuous_x:!1,bindEvent_buttonsPixels_y:!1,bindEvent_buttonsPixels_x:!1,bindEvent_focusin:!1,bindEvent_autoHideScrollbar:!1,mCSB_buttonScrollRight:!1,mCSB_buttonScrollLeft:!1,mCSB_buttonScrollDown:!1,mCSB_buttonScrollUp:!1}),e.horizontalScroll)"none"!==o.css("max-width")&&(e.advanced.updateOnContentResize||(e.advanced.updateOnContentResize=!0));else if("none"!==o.css("max-height")){var d=!1,u=parseInt(o.css("max-height"));o.css("max-height").indexOf("%")>=0&&(d=u,u=o.parent().height()*d/100),o.css("overflow","hidden"),n.css("max-height",u)}if(o.mCustomScrollbar("update"),e.advanced.updateOnBrowserResize){var h,p=t(window).width(),m=t(window).height();t(window).bind("resize."+o.data("mCustomScrollbarIndex"),function(){h&&clearTimeout(h),h=setTimeout(function(){if(!o.is(".mCS_disabled")&&!o.is(".mCS_destroyed")){var e=t(window).width(),a=t(window).height();(p!==e||m!==a)&&("none"!==o.css("max-height")&&d&&n.css("max-height",o.parent().height()*d/100),o.mCustomScrollbar("update"),p=e,m=a)}},150)})}if(e.advanced.updateOnContentResize){var f;if(e.horizontalScroll)var g=s.outerWidth();else var g=s.outerHeight();f=setInterval(function(){if(e.horizontalScroll){e.advanced.autoExpandHorizontalScroll&&s.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:s.outerWidth(),position:"relative"}).unwrap();var t=s.outerWidth()}else var t=s.outerHeight();t!=g&&(o.mCustomScrollbar("update"),g=t)},300)}})},update:function(){var e=t(this),o=e.children(".mCustomScrollBox"),a=o.children(".mCSB_container");a.removeClass("mCS_no_scrollbar"),e.removeClass("mCS_disabled mCS_destroyed"),o.scrollTop(0).scrollLeft(0);var n=o.children(".mCSB_scrollTools"),l=n.children(".mCSB_draggerContainer"),s=l.children(".mCSB_dragger");if(e.data("horizontalScroll")){var i=n.children(".mCSB_buttonLeft"),r=n.children(".mCSB_buttonRight"),c=o.width();e.data("autoExpandHorizontalScroll")&&a.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:a.outerWidth(),position:"relative"}).unwrap();var d=a.outerWidth()}else var u=n.children(".mCSB_buttonUp"),h=n.children(".mCSB_buttonDown"),p=o.height(),m=a.outerHeight();if(m>p&&!e.data("horizontalScroll")){n.css("display","block");var f=l.height();if(e.data("autoDraggerLength")){var g=Math.round(p/m*f),b=s.data("minDraggerHeight");if(b>=g)s.css({height:b});else if(g>=f-10){var S=f-10;s.css({height:S})}else s.css({height:g});s.children(".mCSB_dragger_bar").css({"line-height":s.height()+"px"})}var _=s.height(),v=(m-p)/(f-_);e.data("scrollAmount",v).mCustomScrollbar("scrolling",o,a,l,s,u,h,i,r);var w=Math.abs(a.position().top);e.mCustomScrollbar("scrollTo",w,{scrollInertia:0,trigger:"internal"})}else if(d>c&&e.data("horizontalScroll")){n.css("display","block");var C=l.width();if(e.data("autoDraggerLength")){var x=Math.round(c/d*C),B=s.data("minDraggerWidth");if(B>=x)s.css({width:B});else if(x>=C-10){var T=C-10;s.css({width:T})}else s.css({width:x})}var y=s.width(),v=(d-c)/(C-y);e.data("scrollAmount",v).mCustomScrollbar("scrolling",o,a,l,s,u,h,i,r);var w=Math.abs(a.position().left);e.mCustomScrollbar("scrollTo",w,{scrollInertia:0,trigger:"internal"})}else o.unbind("mousewheel focusin"),e.data("horizontalScroll")?s.add(a).css("left",0):s.add(a).css("top",0),e.data("alwaysShowScrollbar")?e.data("horizontalScroll")?e.data("horizontalScroll")&&s.css({width:l.width()}):s.css({height:l.height()}):(n.css("display","none"),a.addClass("mCS_no_scrollbar")),e.data({bindEvent_mousewheel:!1,bindEvent_focusin:!1})},scrolling:function(e,a,n,l,s,i,r,c){function d(t,e,o,a){p.data("horizontalScroll")?p.mCustomScrollbar("scrollTo",l.position().left-e+a,{moveDragger:!0,trigger:"internal"}):p.mCustomScrollbar("scrollTo",l.position().top-t+o,{moveDragger:!0,trigger:"internal"})}function u(t){l.data("preventAction")||(l.data("preventAction",!0),p.mCustomScrollbar("scrollTo",t,{trigger:"internal"}))}function h(){var t=p.data("scrollButtons_scrollSpeed");return"auto"===p.data("scrollButtons_scrollSpeed")&&(t=Math.round((p.data("scrollInertia")+100)/40)),t}var p=t(this);if(!p.data("bindEvent_scrollbar_drag")){var m,f,g,b,S;t.support.pointer?(g="pointerdown",b="pointermove",S="pointerup"):t.support.msPointer&&(g="MSPointerDown",b="MSPointerMove",S="MSPointerUp"),t.support.pointer||t.support.msPointer?(l.bind(g,function(e){e.preventDefault(),p.data({on_drag:!0}),l.addClass("mCSB_dragger_onDrag");var o=t(this),a=o.offset(),n=e.originalEvent.pageX-a.left,s=e.originalEvent.pageY-a.top;n<o.width()&&n>0&&s<o.height()&&s>0&&(m=s,f=n)}),t(document).bind(b+"."+p.data("mCustomScrollbarIndex"),function(t){if(t.preventDefault(),p.data("on_drag")){var e=l,o=e.offset(),a=t.originalEvent.pageX-o.left,n=t.originalEvent.pageY-o.top;d(m,f,n,a)}}).bind(S+"."+p.data("mCustomScrollbarIndex"),function(t){p.data({on_drag:!1}),l.removeClass("mCSB_dragger_onDrag")})):(l.bind("mousedown touchstart",function(e){e.preventDefault(),e.stopImmediatePropagation();var o,a,n=t(this),s=n.offset();if("touchstart"===e.type){var i=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];o=i.pageX-s.left,a=i.pageY-s.top}else p.data({on_drag:!0}),l.addClass("mCSB_dragger_onDrag"),o=e.pageX-s.left,a=e.pageY-s.top;o<n.width()&&o>0&&a<n.height()&&a>0&&(m=a,f=o)}).bind("touchmove",function(e){e.preventDefault(),e.stopImmediatePropagation();var o=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],a=t(this),n=a.offset(),l=o.pageX-n.left,s=o.pageY-n.top;d(m,f,s,l)}),t(document).bind("mousemove."+p.data("mCustomScrollbarIndex"),function(t){if(p.data("on_drag")){var e=l,o=e.offset(),a=t.pageX-o.left,n=t.pageY-o.top;d(m,f,n,a)}}).bind("mouseup."+p.data("mCustomScrollbarIndex"),function(t){p.data({on_drag:!1}),l.removeClass("mCSB_dragger_onDrag")})),p.data({bindEvent_scrollbar_drag:!0})}if(t.support.touch&&p.data("contentTouchScroll")&&!p.data("bindEvent_content_touch")){var _,v,w,C,x,B,T;a.bind("touchstart",function(e){e.stopImmediatePropagation(),_=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],v=t(this),w=v.offset(),x=_.pageX-w.left,C=_.pageY-w.top,B=C,T=x}),a.bind("touchmove",function(e){e.preventDefault(),e.stopImmediatePropagation(),_=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],v=t(this).parent(),w=v.offset(),x=_.pageX-w.left,C=_.pageY-w.top,p.data("horizontalScroll")?p.mCustomScrollbar("scrollTo",T-x,{trigger:"internal"}):p.mCustomScrollbar("scrollTo",B-C,{trigger:"internal"})})}if(p.data("bindEvent_scrollbar_click")||(n.bind("click",function(e){var o=(e.pageY-n.offset().top)*p.data("scrollAmount"),a=t(e.target);p.data("horizontalScroll")&&(o=(e.pageX-n.offset().left)*p.data("scrollAmount")),(a.hasClass("mCSB_draggerContainer")||a.hasClass("mCSB_draggerRail"))&&p.mCustomScrollbar("scrollTo",o,{trigger:"internal",scrollEasing:"draggerRailEase"})}),p.data({bindEvent_scrollbar_click:!0})),p.data("mouseWheel")&&(p.data("bindEvent_mousewheel")||(e.bind("mousewheel",function(t,e){var o,s=p.data("mouseWheelPixels"),i=Math.abs(a.position().top),r=l.position().top,c=n.height()-l.height();p.data("normalizeMouseWheelDelta")&&(e=0>e?-1:1),"auto"===s&&(s=100+Math.round(p.data("scrollAmount")/2)),p.data("horizontalScroll")&&(r=l.position().left,c=n.width()-l.width(),i=Math.abs(a.position().left)),(e>0&&0!==r||0>e&&r!==c)&&(t.preventDefault(),t.stopImmediatePropagation()),o=i-e*s,p.mCustomScrollbar("scrollTo",o,{trigger:"internal"})}),p.data({bindEvent_mousewheel:!0}))),p.data("scrollButtons_enable"))if("pixels"===p.data("scrollButtons_scrollType"))p.data("horizontalScroll")?(c.add(r).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend",y,D),p.data({bindEvent_buttonsContinuous_x:!1}),p.data("bindEvent_buttonsPixels_x")||(c.bind("click",function(t){t.preventDefault(),u(Math.abs(a.position().left)+p.data("scrollButtons_scrollAmount"))}),r.bind("click",function(t){t.preventDefault(),u(Math.abs(a.position().left)-p.data("scrollButtons_scrollAmount"))}),p.data({bindEvent_buttonsPixels_x:!0}))):(i.add(s).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend",y,D),p.data({bindEvent_buttonsContinuous_y:!1}),p.data("bindEvent_buttonsPixels_y")||(i.bind("click",function(t){t.preventDefault(),u(Math.abs(a.position().top)+p.data("scrollButtons_scrollAmount"))}),s.bind("click",function(t){t.preventDefault(),u(Math.abs(a.position().top)-p.data("scrollButtons_scrollAmount"))}),p.data({bindEvent_buttonsPixels_y:!0})));else if(p.data("horizontalScroll")){if(c.add(r).unbind("click"),p.data({bindEvent_buttonsPixels_x:!1}),!p.data("bindEvent_buttonsContinuous_x")){c.bind("mousedown touchstart MSPointerDown pointerdown",function(t){t.preventDefault();var e=h();p.data({mCSB_buttonScrollRight:setInterval(function(){p.mCustomScrollbar("scrollTo",Math.abs(a.position().left)+e,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var y=function(t){t.preventDefault(),clearInterval(p.data("mCSB_buttonScrollRight"))};c.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout",y),r.bind("mousedown touchstart MSPointerDown pointerdown",function(t){t.preventDefault();var e=h();p.data({mCSB_buttonScrollLeft:setInterval(function(){p.mCustomScrollbar("scrollTo",Math.abs(a.position().left)-e,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var D=function(t){t.preventDefault(),clearInterval(p.data("mCSB_buttonScrollLeft"))};r.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout",D),p.data({bindEvent_buttonsContinuous_x:!0})}}else if(i.add(s).unbind("click"),p.data({bindEvent_buttonsPixels_y:!1}),!p.data("bindEvent_buttonsContinuous_y")){i.bind("mousedown touchstart MSPointerDown pointerdown",function(t){t.preventDefault();var e=h();p.data({mCSB_buttonScrollDown:setInterval(function(){p.mCustomScrollbar("scrollTo",Math.abs(a.position().top)+e,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var O=function(t){t.preventDefault(),clearInterval(p.data("mCSB_buttonScrollDown"))};i.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout",O),s.bind("mousedown touchstart MSPointerDown pointerdown",function(t){t.preventDefault();var e=h();p.data({mCSB_buttonScrollUp:setInterval(function(){p.mCustomScrollbar("scrollTo",Math.abs(a.position().top)-e,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var E=function(t){t.preventDefault(),clearInterval(p.data("mCSB_buttonScrollUp"))};s.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout",E),p.data({bindEvent_buttonsContinuous_y:!0})}p.data("autoScrollOnFocus")&&(p.data("bindEvent_focusin")||(e.bind("focusin",function(){e.scrollTop(0).scrollLeft(0);var o=t(document.activeElement);if(o.is("input,textarea,select,button,a[tabindex],area,object")){var n=a.position().top,l=o.position().top,s=e.height()-o.outerHeight();p.data("horizontalScroll")&&(n=a.position().left,l=o.position().left,s=e.width()-o.outerWidth()),(0>n+l||n+l>s)&&p.mCustomScrollbar("scrollTo",l,{trigger:"internal"})}}),p.data({bindEvent_focusin:!0}))),p.data("autoHideScrollbar")&&!p.data("alwaysShowScrollbar")&&(p.data("bindEvent_autoHideScrollbar")||(e.bind("mouseenter",function(t){e.addClass("mCS-mouse-over"),o.showScrollbar.call(e.children(".mCSB_scrollTools"))}).bind("mouseleave touchend",function(t){e.removeClass("mCS-mouse-over"),"mouseleave"===t.type&&o.hideScrollbar.call(e.children(".mCSB_scrollTools"))}),p.data({bindEvent_autoHideScrollbar:!0})))},scrollTo:function(e,a){function n(t){if(d.data("mCustomScrollbarIndex"))switch(this.mcs={top:p.position().top,left:p.position().left,draggerTop:g.position().top,draggerLeft:g.position().left,topPct:Math.round(100*Math.abs(p.position().top)/Math.abs(p.outerHeight()-h.height())),leftPct:Math.round(100*Math.abs(p.position().left)/Math.abs(p.outerWidth()-h.width()))},t){case"onScrollStart":d.data("mCS_tweenRunning",!0).data("onScrollStart_Callback").call(d,this.mcs);break;case"whileScrolling":d.data("whileScrolling_Callback").call(d,this.mcs);break;case"onScroll":d.data("onScroll_Callback").call(d,this.mcs);break;case"onTotalScrollBack":d.data("onTotalScrollBack_Callback").call(d,this.mcs);break;case"onTotalScroll":d.data("onTotalScroll_Callback").call(d,this.mcs)}}var l,s,i,r,c,d=t(this),u={moveDragger:!1,trigger:"external",callbacks:!0,scrollInertia:d.data("scrollInertia"),scrollEasing:d.data("scrollEasing")},a=t.extend(u,a),h=d.children(".mCustomScrollBox"),p=h.children(".mCSB_container"),m=h.children(".mCSB_scrollTools"),f=m.children(".mCSB_draggerContainer"),g=f.children(".mCSB_dragger"),b=draggerSpeed=a.scrollInertia;if(!p.hasClass("mCS_no_scrollbar")&&(d.data({mCS_trigger:a.trigger}),d.data("mCS_Init")&&(a.callbacks=!1),e||0===e)){if("number"==typeof e)a.moveDragger?(l=e,e=d.data("horizontalScroll")?g.position().left*d.data("scrollAmount"):g.position().top*d.data("scrollAmount"),draggerSpeed=0):l=e/d.data("scrollAmount");else if("string"==typeof e){var S;S="top"===e?0:"bottom"!==e||d.data("horizontalScroll")?"left"===e?0:"right"===e&&d.data("horizontalScroll")?p.outerWidth()-h.width():"first"===e?d.find(".mCSB_container").find(":first"):"last"===e?d.find(".mCSB_container").find(":last"):d.find(e):p.outerHeight()-h.height(),1===S.length?(e=d.data("horizontalScroll")?S.position().left:S.position().top,l=e/d.data("scrollAmount")):l=e=S}if(d.data("horizontalScroll")){d.data("onTotalScrollBack_Offset")&&(i=-d.data("onTotalScrollBack_Offset")),d.data("onTotalScroll_Offset")&&(c=h.width()-p.outerWidth()+d.data("onTotalScroll_Offset")),0>l?(l=e=0,clearInterval(d.data("mCSB_buttonScrollLeft")),i||(s=!0)):l>=f.width()-g.width()?(l=f.width()-g.width(),e=h.width()-p.outerWidth(),clearInterval(d.data("mCSB_buttonScrollRight")),c||(r=!0)):e=-e;var _=d.data("snapAmount");_&&(e=Math.round(e/_)*_-d.data("snapOffset")),o.mTweenAxis.call(this,g[0],"left",Math.round(l),draggerSpeed,a.scrollEasing),o.mTweenAxis.call(this,p[0],"left",Math.round(e),b,a.scrollEasing,{onStart:function(){a.callbacks&&!d.data("mCS_tweenRunning")&&n("onScrollStart"),d.data("autoHideScrollbar")&&!d.data("alwaysShowScrollbar")&&o.showScrollbar.call(m)},onUpdate:function(){a.callbacks&&n("whileScrolling")},onComplete:function(){a.callbacks&&(n("onScroll"),(s||i&&p.position().left>=i)&&n("onTotalScrollBack"),(r||c&&p.position().left<=c)&&n("onTotalScroll")),g.data("preventAction",!1),d.data("mCS_tweenRunning",!1),d.data("autoHideScrollbar")&&!d.data("alwaysShowScrollbar")&&(h.hasClass("mCS-mouse-over")||o.hideScrollbar.call(m))}})}else{d.data("onTotalScrollBack_Offset")&&(i=-d.data("onTotalScrollBack_Offset")),d.data("onTotalScroll_Offset")&&(c=h.height()-p.outerHeight()+d.data("onTotalScroll_Offset")),0>l?(l=e=0,clearInterval(d.data("mCSB_buttonScrollUp")),i||(s=!0)):l>=f.height()-g.height()?(l=f.height()-g.height(),e=h.height()-p.outerHeight(),clearInterval(d.data("mCSB_buttonScrollDown")),c||(r=!0)):e=-e;var _=d.data("snapAmount");_&&(e=Math.round(e/_)*_-d.data("snapOffset")),o.mTweenAxis.call(this,g[0],"top",Math.round(l),draggerSpeed,a.scrollEasing),o.mTweenAxis.call(this,p[0],"top",Math.round(e),b,a.scrollEasing,{onStart:function(){a.callbacks&&!d.data("mCS_tweenRunning")&&n("onScrollStart"),d.data("autoHideScrollbar")&&!d.data("alwaysShowScrollbar")&&o.showScrollbar.call(m)},onUpdate:function(){a.callbacks&&n("whileScrolling")},onComplete:function(){a.callbacks&&(n("onScroll"),(s||i&&p.position().top>=i)&&n("onTotalScrollBack"),(r||c&&p.position().top<=c)&&n("onTotalScroll")),g.data("preventAction",!1),d.data("mCS_tweenRunning",!1),d.data("autoHideScrollbar")&&!d.data("alwaysShowScrollbar")&&(h.hasClass("mCS-mouse-over")||o.hideScrollbar.call(m))}})}d.data("mCS_Init")&&d.data({mCS_Init:!1})}},stop:function(){var e=t(this),a=e.children().children(".mCSB_container"),n=e.children().children().children().children(".mCSB_dragger");o.mTweenAxisStop.call(this,a[0]),o.mTweenAxisStop.call(this,n[0])},disable:function(e){var o=t(this),a=o.children(".mCustomScrollBox"),n=a.children(".mCSB_container"),l=a.children(".mCSB_scrollTools"),s=l.children().children(".mCSB_dragger");a.unbind("mousewheel focusin mouseenter mouseleave touchend"),n.unbind("touchstart touchmove"),e&&(o.data("horizontalScroll")?s.add(n).css("left",0):s.add(n).css("top",0)),l.css("display","none"),n.addClass("mCS_no_scrollbar"),o.data({bindEvent_mousewheel:!1,bindEvent_focusin:!1,bindEvent_content_touch:!1,bindEvent_autoHideScrollbar:!1}).addClass("mCS_disabled")},destroy:function(){var e=t(this);e.removeClass("mCustomScrollbar _mCS_"+e.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove(),t(document).unbind("mousemove."+e.data("mCustomScrollbarIndex")+" mouseup."+e.data("mCustomScrollbarIndex")+" MSPointerMove."+e.data("mCustomScrollbarIndex")+" MSPointerUp."+e.data("mCustomScrollbarIndex")),t(window).unbind("resize."+e.data("mCustomScrollbarIndex"))}},o={showScrollbar:function(){this.stop().animate({opacity:1},"fast")},hideScrollbar:function(){this.stop().animate({opacity:0},"fast")},mTweenAxis:function(t,e,o,a,n,l){function s(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()}function i(){b||p.call(),b=s()-g,r(),b>=t._time&&(t._time=b>t._time?b+h-(b-t._time):b+h-1,t._time<b+1&&(t._time=b+1)),t._time<a?t._id=_request(i):f.call();
}function r(){a>0?(t.currVal=u(t._time,S,v,a,n),_[e]=Math.round(t.currVal)+"px"):_[e]=o+"px",m.call()}function c(){h=1e3/60,t._time=b+h,_request=window.requestAnimationFrame?window.requestAnimationFrame:function(t){return r(),setTimeout(t,.01)},t._id=_request(i)}function d(){null!=t._id&&(window.requestAnimationFrame?window.cancelAnimationFrame(t._id):clearTimeout(t._id),t._id=null)}function u(t,e,o,a,n){switch(n){case"linear":return o*t/a+e;case"easeOutQuad":return t/=a,-o*t*(t-2)+e;case"easeInOutQuad":return t/=a/2,1>t?o/2*t*t+e:(t--,-o/2*(t*(t-2)-1)+e);case"easeOutCubic":return t/=a,t--,o*(t*t*t+1)+e;case"easeOutQuart":return t/=a,t--,-o*(t*t*t*t-1)+e;case"easeOutQuint":return t/=a,t--,o*(t*t*t*t*t+1)+e;case"easeOutCirc":return t/=a,t--,o*Math.sqrt(1-t*t)+e;case"easeOutSine":return o*Math.sin(t/a*(Math.PI/2))+e;case"easeOutExpo":return o*(-Math.pow(2,-10*t/a)+1)+e;case"mcsEaseOut":var l=(t/=a)*t,s=l*t;return e+o*(.499999999999997*s*l+-2.5*l*l+5.5*s+-6.5*l+4*t);case"draggerRailEase":return t/=a/2,1>t?o/2*t*t*t+e:(t-=2,o/2*(t*t*t+2)+e)}}var h,l=l||{},p=l.onStart||function(){},m=l.onUpdate||function(){},f=l.onComplete||function(){},g=s(),b=0,S=t.offsetTop,_=t.style;"left"===e&&(S=t.offsetLeft);var v=o-S;d(),c()},mTweenAxisStop:function(t){null!=t._id&&(window.requestAnimationFrame?window.cancelAnimationFrame(t._id):clearTimeout(t._id),t._id=null)},rafPolyfill:function(){for(var t=["ms","moz","webkit","o"],e=t.length;--e>-1&&!window.requestAnimationFrame;)window.requestAnimationFrame=window[t[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[e]+"CancelAnimationFrame"]||window[t[e]+"CancelRequestAnimationFrame"]}};o.rafPolyfill.call(),t.support.touch=!!("ontouchstart"in window),t.support.pointer=window.navigator.pointerEnabled,t.support.msPointer=window.navigator.msPointerEnabled;var a="https:"==document.location.protocol?"https:":"http:";t.event.special.mousewheel||document.write('<script src="'+a+'//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"></script>'),t.fn.mCustomScrollbar=function(o){return e[o]?e[o].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof o&&o?void t.error("Method "+o+" does not exist"):e.init.apply(this,arguments)}}(jQuery);