jQuery.extend({
    getURLParam: function(strParamName) {
        var strReturn = ""
          , strHref = window.location.href
          , bFound = false
          , cmpstring = strParamName + "=";
        cmplen = cmpstring.length;
        if (strHref.indexOf("?") > -1) {
            var strQueryString = strHref.substr(strHref.indexOf("?") + 1)
              , aQueryString = strQueryString.split("&");
            for (var iParam = 0; iParam < aQueryString.length; iParam++) {
                if (aQueryString[iParam].substr(0, cmplen) == cmpstring) {
                    var aParam = aQueryString[iParam].split("=");
                    strReturn = aParam[1];
                    bFound = true;
                    break;
                }
            }
        }
        if (bFound == false) {
            return null;
        }
        if (strReturn.indexOf("#") > -1) {
            return strReturn.split("#")[0];
        }
        return strReturn;
    },
    format: function jQuery_dotnet_string_format(text) {
        if (arguments.length <= 1) {
            return text;
        }
        var tokenCount = arguments.length - 2;
        for (var token = 0; token <= tokenCount; ++token) {
            text = text.replace(new RegExp("\\{" + token + "\\}","gi"), arguments[token + 1]);
        }
        return text;
    }
});

BlockUIManager = {
    blockUI: function(obj, width, height, top, params) {
        try {
            width = parseInt(width || 0);
            height = parseInt(height || 0);
            left = parseInt(-width / 2);
            top = parseInt(top || -height / 2);
            var overlayBackgroundColor = '#ffffff'
              , overlayOpacity = '0.5';
            if (typeof (params) != "undefined") {
                if (params.hasOwnProperty("overlayBackgroundColor")) {
                    overlayBackgroundColor = params.overlayBackgroundColor;
                }
                if (params.hasOwnProperty("overlayOpacity")) {
                    overlayOpacity = params.overlayOpacity;
                }
            }
            $.blockUI({
                message: $(obj),
                css: {
                    left: '50%',
                    top: '50%',
                    opacity: '1',
                    border: 'none',
                    padding: '0px',
                    width: width > 0 ? width + 'px' : 'auto',
                    height: height > 0 ? height + 'px' : 'auto',
                    cursor: 'default',
                    textAlign: 'left',
                    position: 'fixed',
                    'margin-left': left + 'px',
                    'margin-top': top + 'px',
                    'background-color': 'Transparent'
                },
                overlayCSS: {
                    backgroundColor: overlayBackgroundColor,
                    cursor: 'default',
                    opacity: overlayOpacity
                },
                blockMsgClass: "blockDialog",
                focusInput: true,
                baseZ: 666,
                fadeIn: 0,
                fadeOut: 0,
                onBlock: function() {
                    if (typeof (params) != "undefined" && params.hasOwnProperty("onBlock") && typeof (params.onBlock) == "function") {
                        params.onBlock();
                    }
                    var $blockUI = $(obj).parents('div.blockUI:first')
                      , blockUI = $blockUI.get(0)
                      , cssText = '';
                    if ($.browser.msie && $.browser.version < 9 && $blockUI.length !== 0) {
                        var prefix = ' '
                          , cssText = prefix + blockUI.style.cssText
                          , startPos = cssText.toLowerCase().indexOf(prefix + 'filter:')
                          , endPos = cssText.indexOf(';', startPos);
                        if (startPos !== -1) {
                            if (endPos !== -1) {
                                blockUI.style.cssText = [cssText.substring(prefix.length, startPos), cssText.substring(endPos + 1)].join('');
                            } else {
                                blockUI.style.cssText = cssText.substring(prefix.length, startPos);
                            }
                        }
                    }
                }
            });
        } catch (e) {}
    }
};

LoadingBanner = function() {
    var animateDelay = 2000
      , displayDelay = 500
      , displayOpacity = 1
      , loaderCss = ""
      , loaderId = "loadingBanner"
      , strLoading = "Loading..."
      , strDescription = "Please wait...";
    return {
        animateDelay: animateDelay,
        displayDelay: displayDelay,
        displayOpacity: displayOpacity,
        loaderCss: loaderCss,
        loaderId: loaderId,
        strLoading: strLoading,
        strDescription: strDescription,
        displayLoading: function(withoutDelay, withBackdrop) {
            var id = "#" + LoadingBanner.loaderId;
            if ($(id).length != 0)
                return;
            var innerHtml = $.format('<div id="{0}" class="loadingBanner {1}">{2}<div>{3}</div></div>', LoadingBanner.loaderId, LoadingBanner.loaderCss, LoadingBanner.strLoading, LoadingBanner.strDescription);
            if (withBackdrop)
                $("body").append('<div class="loadingBannerBackDrop"></div>');
            $("body").append(innerHtml).addClass("loading");
            if ($.browser.mobile) {
                $(id).css("top", $(window).scrollTop() + "px");
            }
            $(id).animate({
                opacity: 0
            }, withoutDelay === true ? 0 : LoadingBanner.displayDelay, function() {
                $(id).animate({
                    opacity: LoadingBanner.displayOpacity
                }, LoadingBanner.animateDelay);
            });
        },
        hideLoading: function() {
            $("#" + LoadingBanner.loaderId).remove();
            $(".loadingBannerBackDrop").remove();
            $("body").removeClass("loading");
        }
    };
}();

jQuery.fn.datepickerWithButton = function(options) {
    return this.datepicker(jQuery.extend({
        showOn: "both",
        buttonText: "",
        buttonImageOnly: false
    }, options));
};

jQuery.fn.scrollStopped = function(callback) {
    var $this = $(this)
      , self = this;
    $this.scroll(function() {
        if ($this.data('scrollTimeout')) {
            clearTimeout($this.data('scrollTimeout'));
        }
        $this.data('scrollTimeout', setTimeout(callback, 250, self));
    });
};

function displayModalPanel(panelID, params) {
    var panelElement = $('#' + panelID);
    if (panelElement.length != 1)
        return;
    BlockUIManager.blockUI('#' + panelID, panelElement.width(), panelElement.height(), 0, params);
}

function loginCallback(profile) {}

var TeamLabPortal = {
    IsEnterKey: function(keyCode) {
        if (keyCode == 13) {
            return true;
        }
        return false;
    },
    IsEscPressed: function(event) {
        var code;
        if (!e)
            var e = event;
        if (e.keyCode)
            code = e.keyCode;
        else if (e.which)
            code = e.which;
        return code == 27;
    },
    ExpandElement: function(element) {
        var hEl = $(element);
        var el = $('#' + element.id.replace(/_headdiv$/i, '') + '_sectiondiv');
        var hideFlag = 'hide';
        if (!el.hasClass('expand')) {
            hideFlag = 'show';
        }
        if (hEl.hasClass('exp')) {
            hEl.removeClass('exp');
        } else {
            hEl.addClass('exp');
        }
        el.animate({
            height: hideFlag,
            opacity: hideFlag
        }, 'fast');
        if (el.hasClass('expand')) {
            el.removeClass('expand');
        } else {
            el.addClass('expand');
        }
    },
    ForceIntegerOnly: function(ObjSelector, doIfInteger) {
        $(ObjSelector).each(function() {
            $(this).keypress(function(event) {
                var controlKeys = [8, 9];
                var isControlKey = controlKeys.join(",").match(new RegExp(event.which));
                if (!event.which || (48 <= event.which && event.which <= 57) || isControlKey) {
                    return;
                } else {
                    event.preventDefault();
                }
            });
            $(this).unbind('paste').bind('paste', function(e) {
                var oldValue = this.value;
                var $obj = this;
                setTimeout(function() {
                    var text = $($obj).val();
                    if (isNaN(text) || text.indexOf(".") != -1) {
                        $($obj).val(oldValue);
                    } else if (typeof (doIfInteger) === "function") {
                        doIfInteger();
                    }
                }, 0);
                return true;
            });
        });
    },
};

var ScreentourManager = {
    Init: function(imgs, blockUIParams) {
        if (imgs.length == 0)
            return;
        if (window.innerWidth < 962)
            return;
        for (var i = 0, n = imgs.length; i < n; i++) {
            var $html = $("<li></li>");
            $("<img/>").attr("src", imgs[i]).appendTo($html);
            $html.appendTo("#ScreentourPanel .overview");
            $html = $("<li></li>");
            $("<a></a>").attr("class", "pagenum").attr("rel", i).text(i + 1).appendTo($html);
            $html.insertBefore("#ScreentourPanel .pager li.closeButton");
        }
        $("#ScreentourPanel").tinycarousel({
            pager: true,
            display: 1,
            animation: false,
            interval: false,
            rewind: true
        });
        var hidePopuByOutDocClick = function() {
            $.unblockUI();
            $(".blockUI.blockOverlay").off("click", hidePopuByOutDocClick);
            $(window).trigger('hidescreentour', []);
            enableScroll();
        };
        var screenshotSize = 0.59375
          , windowHeight = $(window).height() - 150
          , width = 1280
          , height = 760;
        if (windowHeight < 760) {
            width = Math.ceil(windowHeight / screenshotSize);
            height = window.innerWidth < 600 ? "auto" : windowHeight;
        }
        $(".screentour").on("click", function() {
            BlockUIManager.blockUI("#ScreentourPanel", width, height, 0, blockUIParams);
            setTimeout(function() {
                $(".blockUI.blockOverlay").on("click", hidePopuByOutDocClick);
            }, 0);
            $(window).trigger('showscreentour', []);
        });
        $(".screentour-link").on("click", function() {
            if (window.innerWidth < 962) {
                return false;
            }
            var num = $(this).attr("data-num");
            if (typeof (num) == "undefined" || num == null || num == "" || isNaN(parseInt(num))) {
                num = 0;
            }
            BlockUIManager.blockUI("#ScreentourPanel", width, height, 0, blockUIParams);
            $(".blockUI.blockOverlay").css('background-color', '#000');
            $("#ScreentourPanel .pagenum[rel='" + num + "']").click();
            setTimeout(function() {
                $(".blockUI.blockOverlay").on("click", hidePopuByOutDocClick);
            }, 0);
            $(window).trigger('showscreentour', []);
            disableScroll();
        });
        $("#ScreentourPanel a.closeButton").on("click", function() {
            hidePopuByOutDocClick();
        });
        var keys = {
            37: 1,
            38: 1,
            39: 1,
            40: 1
        };
        function preventDefault(e) {
            e = e || window.event;
            if (e.preventDefault)
                e.preventDefault();
            e.returnValue = false;
        }
        function preventDefaultForScrollKeys(e) {
            if (keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
        }
        function disableScroll() {
            if (window.addEventListener)
                window.addEventListener('DOMMouseScroll', preventDefault, false);
            window.onwheel = preventDefault;
            window.onmousewheel = document.onmousewheel = preventDefault;
            window.ontouchmove = preventDefault;
            document.onkeydown = preventDefaultForScrollKeys;
        }
        function enableScroll() {
            if (window.removeEventListener)
                window.removeEventListener('DOMMouseScroll', preventDefault, false);
            window.onmousewheel = document.onmousewheel = null;
            window.onwheel = null;
            window.ontouchmove = null;
            document.onkeydown = null;
        }
        $("#ScreentourPanel .ScreentourContent").on("click", function() {
            $('.next').click();
        });
        document.getElementById('ScreentourPanel').querySelector('.ScreentourContent').addEventListener('touchstart', function() {
            $('.next').click();
        }, {
            passive: true
        });
        document.getElementById('ScreentourPanel').querySelector('.closeButton').addEventListener('touchstart', function() {
            hidePopuByOutDocClick();
        }, {
            passive: true
        });
        document.getElementById('ScreentourPanel').querySelectorAll('.pagenum').forEach(function(item) {
            item.addEventListener('touchstart', function() {
                $(this).click();
            }, {
                passive: true
            });
        });
        document.getElementById('ScreentourPanel').querySelectorAll('.next, .prev').forEach(function(item) {
            item.addEventListener('touchstart', function() {
                $(this).click();
            }, {
                passive: true
            });
        });
        $(document).on("keyup", function(event) {
            if (!$('#ScreentourPanel').is(':visible'))
                return;
            var code;
            if (!e)
                var e = event;
            if (e.keyCode)
                code = e.keyCode;
            else if (e.which)
                code = e.which;
            if (code == 27) {
                hidePopuByOutDocClick();
            } else if (code == 37) {
                $("#ScreentourPanel .buttons.prev").click();
            } else if (code == 39) {
                $("#ScreentourPanel .buttons.next").click();
            }
        });
    }
};

var CookieManager = {
    setCookie: function createCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    },
    getCookie: function(name) {
        name = name + "=";
        var cookieArray = document.cookie.split(";");
        for (var i = 0; i < cookieArray.length; i++) {
            var cookie = cookieArray[i].trim();
            if (cookie.indexOf(name) == 0)
                return cookie.substring(name.length, cookie.length);
        }
        return null;
    },
    deleteCookie: function(name) {
        CookieManager.setCookie(name, "", -1);
    }
};

(function($, undefined) {
    $.extend($.ui.slider.prototype.options, {
        dragAnimate: true
    });
    var _mouseCapture = $.ui.slider.prototype._mouseCapture;
    $.widget("ui.slider", $.extend({}, $.ui.slider.prototype, {
        _mouseCapture: function(event) {
            _mouseCapture.apply(this, arguments);
            this.options.dragAnimate ? this._animateOff = false : this._animateOff = true;
            return true;
        }
    }));
}(jQuery));

jQuery.fn.sliderWithSections = function(settings) {
    if (jQuery(this).length == 0)
        return undefined;
    if (typeof (settings) === "number" && jQuery(this).children(".ui-slider").length == 1) {
        var ui = {
            handle: jQuery(this).find(".ui-slider-handle:first"),
            value: settings
        };
        slideExt(null, ui);
        return this;
    }
    var options = jQuery.extend({
        value: null,
        values: null,
        defaultClasses: null,
        baseCssClass: 'green',
        sliderOptions: null,
        orientation: 'vertical',
        height: null,
        width: null,
        slide: function(e, ui) {}
    }, settings);
    function slideExt(e, ui) {
        var thisHandle = jQuery(ui.handle)
          , liItems = thisHandle.parent().children('ol.ui-slider-scale').children('li')
          , opts = thisHandle.data("options");
        thisHandle.attr('aria-valuenow', ui.value);
        for (var i = 0, n = liItems.length; i < n; i++) {
            if (i < ui.value + (opts.orientation == 'vertical' ? 1 : 0)) {
                jQuery(liItems[i]).addClass(opts.baseCssClass);
            } else {
                jQuery(liItems[i]).removeClass(opts.baseCssClass);
            }
        }
        if (e != null) {
            opts.value = ui.value;
            thisHandle.data("options", opts);
            opts.slide(e, ui);
        } else {
            thisHandle.parent().slider("option", "value", ui.value);
        }
    }
    ;var sliderOptions = {
        step: 1,
        animate: options.animate || 100,
        min: 0,
        max: options.values.length - 1,
        orientation: options.orientation || 'vertical',
        range: false,
        slide: function(e, ui) {
            slideExt(e, ui);
        },
        value: options.value
    };
    options.sliderOptions = (settings) ? jQuery.extend(sliderOptions, settings.sliderOptions) : sliderOptions;
    var sliderComponent = jQuery('<div></div>');
    jQuery(['<a tabindex="0" ', 'class="ui-slider-handle" ', 'role="slider" ', 'aria-valuenow="', options.value, '" ', '> </a>'].join('')).data("options", options).appendTo(sliderComponent);
    var scale = sliderComponent.append('<ol class="ui-slider-scale" role="presentation" style="width: ' + (options.width != null ? options.width : "100%") + ';' + ' height: ' + (options.height != null ? options.height : "100%") + ';"></ol>').find('.ui-slider-scale:eq(0)')
      , sliderHeight = 0
      , sliderWidth = 0
      , heightVal = 0
      , widthVal = 0
      , liClass = '';
    if (options.orientation === 'vertical') {
        sliderHeight = jQuery(this).css('height').replace('px', '') * 1;
        heightVal = (sliderHeight / (options.values.length - 1)).toFixed(0);
        for (var n = options.values.length, i = n - 1; i >= 0; i--) {
            liClass = (i < options.value) ? options.baseCssClass : '';
            if (i == n - 1) {
                liClass = options.baseCssClass + " bottomRadius8";
            }
            if (options.defaultClasses != null && typeof (options.defaultClasses[n - 1 - i]) !== "undefined" && options.defaultClasses[n - 1 - i] != "") {
                liClass += " " + options.defaultClasses[n - 1 - i];
            }
            scale.append(['<li class="', liClass, '" style="top:', (sliderHeight / (n - 1) * i).toFixed(0), 'px;', ' width: ', (options.width != null ? options.width : "100%"), '; height:', i !== n - 1 ? heightVal + 'px;' : jQuery(this).css('padding-bottom'), '"></li>'].join(''));
        }
        scale.append(['<li class="topRadius8 darkGrey" style="top:-', parseInt(jQuery(this).css('padding-top')), 'px; width: ', (options.width != null ? options.width : "100%"), '; height:', jQuery(this).css('padding-top'), '"></li>'].join(''));
    } else {
        sliderWidth = jQuery(this).css('width').replace('px', '') * 1;
        widthVal = (sliderWidth / (options.values.length - 1)).toFixed(0);
        for (var i = 0, n = options.values.length; i < n; i++) {
            liClass = (i < options.value) ? options.baseCssClass : '';
            if (i == 0) {
                liClass = "leftRadius " + options.baseCssClass;
            }
            if (options.defaultClasses != null && typeof (options.defaultClasses[i]) !== "undefined" && options.defaultClasses[i] != "") {
                liClass += " " + options.defaultClasses[i];
            }
            scale.append(['<li class="', liClass, '" style="left:', (widthVal * i).toFixed(0), 'px;', ' height: ', (options.height != null ? options.height : "100%"), '; width:', (i == n - 1 ? (sliderWidth - (widthVal * i)).toFixed(0) : widthVal), 'px;', '"></li>'].join(''));
        }
        scale.append(['<li class="rightRadius darkGrey" style="right:0;', ' height: ', (options.height != null ? options.height : "100%"), '; width:', jQuery(this).css('padding-right'), '"></li>'].join(''));
        scale.css("padding-right", jQuery(this).css('padding-right'));
    }
    sliderComponent.appendTo(jQuery(this)).slider(options.sliderOptions).attr('role', 'application');
    return this;
};
