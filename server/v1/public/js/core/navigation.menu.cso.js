$(function() {
    var menuBreakpoint = '1024';
    var headerShadowed = false;

    var toggleSubMenuProduk = function(element) {
        var submenuId = $(element).attr('id') + '_submenu';
        var submenuIdLast = $(element).attr('id') + '_sub';
        $('.pushy-submenu > #navitem_produk_menu > ul > li:not(.last), [id$="_submenu"], #navitem_produk').hide();
        $('.pushy-submenu > #navitem_produk_menu > ul > li:not(.last), [id$="_sub"], #navitem_produk').hide();
        $('.pushy-submenu > #navitem_produk_menu > ul > li:nth-child(2)').show();
        $('.pushy-submenu > #navitem_produk_menu > ul > li:nth-child(3)').show();
        $('#' + submenuId).show();
        $('#' + submenuIdLast).show();
        catchSubMenuHeight();
    };

    var refreshSubMenuProduk = function() {
        if (window.innerWidth < menuBreakpoint) {
            $('[id$="_submenu"]').show();
            $('#navitem_produk_akuntansi, #navitem_produk_medis, #navitem_produk_kantor, #navitem_produk_messageapi').removeClass('selected');
        }
    };

    var catchSubMenuHeight = function() {
        if (window.innerWidth < menuBreakpoint) {
            var menuItems = document.querySelectorAll('.pushy-submenu > #navitem_produk_menu > .dropdown-content.akkordeon > li:nth-child(2)');
            var lastMenuItem = document.querySelector('.pushy-submenu > #navitem_produk_menu > .dropdown-content.akkordeon > li.last');
            var pushyContentHeight = document.querySelector('.pushy-content').offsetHeight;
            if (window.innerHeight > 570) {
                var lastMenuItemHeight = lastMenuItem.offsetHeight;
                var availableHeight = pushyContentHeight - lastMenuItemHeight - 20;
                menuItems.forEach(function(item) {
                    item.style.height = availableHeight + 'px';
                });
            } else {
                lastMenuItem.style.position = 'relative';
                lastMenuItem.style.marginTop = '16px';
                menuItems.forEach(function(item) {
                    item.style.height = "unset";
                });
            }
        }
    };

    var catchSubMenuHeightPrices = function() {
        if (window.innerWidth < menuBreakpoint) {
            var menuItemsPrices = document.querySelectorAll('.pushy-submenu > #navitem_portofolio_menu > .dropdown-content.akkordeon > li.pushy-link');
            $("#navitem_portofolio").on("click", function() {
                var pushyContentHeightPrices = document.querySelector('.pushy-content').offsetHeight - 356;
                menuItemsPrices.forEach(function(item) {
                    item.style.height = pushyContentHeightPrices + 'px';
                });
            })
        }
    };

    var moveHighlight = function() {
        var bodyId = $("body").attr('id');
        var bodyClsDocSpace = $("body").hasClass("docspace");
        if (window.innerWidth > menuBreakpoint) {
            if (bodyId == "collaborationroomspage" || bodyId == "formfillingroomspage" || bodyId == "zapierpage" || bodyId == "zoompage" || bodyId == "publicroomspage" || bodyId == "drupalpage" || bodyId == "wordpresspage" || bodyId == "customroomspage" || bodyId == "docspacepage" || (bodyClsDocSpace && (bodyId == "officesuitedoceditorpage" || bodyId == "officesuitespeditorpage" || bodyId == "officesuitepreditorpage" || bodyId == "pdfreaderpage" || bodyId == "formcreatorpage" || bodyId == "ebookpage" || bodyId == "collaborationpage"))) {
                $('#navitem_produk_docspace').trigger('click').addClass("selected");
            } else if (bodyId == "collaborationdocmanagepage" || bodyId == "collaborationcrmpage" || bodyId == "collaborationprojectspage" || bodyId == "collaborationmailpage" || bodyId == "collaborationcalendarpage" || bodyId == "workspacepage") {
                $('#navitem_produk_workspace').trigger('click').addClass("selected");
            } else {
                $('#navitem_produk_akuntansi').trigger('click').addClass("selected");
            }
        }
    };

    function navHeight() {
        var phoneWrapperPosition = $(".phone_wrapper").css("position")
          , menuHeight = $(".all-menu-items").innerHeight()
          , windowHeight = window.innerHeight;
        if (phoneWrapperPosition == "fixed") {
            menuHeight = menuHeight + 140;
        } else {
            menuHeight = menuHeight;
        }
    }

    if ($("div.pushy-link").length) {
        $(".pushy-link").on("click", function() {
            $(".pushy-submenu").addClass('pushy-submenu-closed').removeClass('pushy-submenu-open');
            if (window.innerWidth < menuBreakpoint) {
                var submenuOpen = $('.pushy-submenu.pushy-submenu-open');
                if (submenuOpen != null) {
                    $('.pushy-submenu').css('display', 'block');
                } else {
                    $('.pushy-submenu').show();
                }
            }
        });
    }

    $(".ham_menu").on("click", function() {
        $('.pushy-submenu.phone').hide();
        if (!headerShadowed) {
            $("header").addClass("overlayed");
            $(".narrowheader").addClass("overlayed");
            headerShadowed = true;
        } else {
            $("header").removeClass("overlayed");
            $(".narrowheader").removeClass("overlayed");
            headerShadowed = false;
        }
    });
/*
    var onlyofficeCookie = $.cookies.get('onlyoffice_cookie');
    if (onlyofficeCookie == null || onlyofficeCookie == false) {
        if (!$('body').hasClass('desktop'))
            $('.cookie_mess').show();
    }
    $('.cookie_mess_button').click(function() {
        $('.cookie_mess').hide();
        var d = new Date();
        d.setFullYear(d.getFullYear() + 1);
        $.cookies.set('onlyoffice_cookie', true, {
            expiresAt: d
        });
    });
*/
    $('header').mouseleave(function() {
        mouseleaveCloseMenu();
    });

    $('nav > div > ul > li > div').mouseleave(function() {
        mouseleaveCloseMenu();
    });

    $('.phone_icon').mouseleave(function() {
        mouseleaveCloseMenu();
    });

    var doc = $(document), header = $('header');
    var $adventAnnounce = $('.advent-announce');
    var $header = $("header");
    var top, bannerHeight;

    $(window).on('scroll', function() {
        top = $(window).scrollTop();
        $adventAnnounce.each(function() {
            if ($(this).css('display') != 'none') {
                bannerHeight = $(this).outerHeight();
            }
        });

        if (top >= bannerHeight) {
            $header.addClass("onscrolling");
            var $headerHeight = 0;
            if (window.innerWidth >= menuBreakpoint) {
                $headerHeight = $header.height();
            }
            $header.next("article").css("top", $headerHeight);
            $header.next("article").css("marginBottom", $headerHeight);
        }
        else {
            $header.removeClass("onscrolling");
            $header.next("article").css("top", "");
            $header.next("article").css("marginBottom", "");
        }

        // if (onlyofficeCookie == null || onlyofficeCookie == false) {
        //     var docTop = doc.scrollTop()
        //       , headerTop = $('.cookie_mess').height();
        //     if (docTop > headerTop) {
        //         if (!header.hasClass('fixed')) {
        //             header.addClass('fixed');
        //         }
        //     } else {
        //         if (header.hasClass('fixed')) {
        //             header.removeClass('fixed');
        //         }
        //     }
        // } 
        // else {
        //     header.addClass('fixed');
        // }
    });

    $('body').on("click", "a.nav_2nd_menu_link", function() {
        if (window.innerWidth < menuBreakpoint) {
            $('.pushy-link').trigger('click');
            $('body').removeClass('pushy-open-left');
            var href = $(this).attr('href');
        } else {
            mouseleaveCloseMenu();
            var href = $(this).attr('href');
        }
    });

    $('.pushy.pushy-left').click(function() {
        checkOpen();
        if ($('.menuitem.active').length > 0) {
            $(".pushy-submenu").addClass('pushy-submenu-closed').removeClass('pushy-submenu-open');
            if (window.innerWidth < menuBreakpoint) {
                var submenuOpen = $('.pushy-submenu.pushy-submenu-open');
                if (submenuOpen != null) {
                    $('.pushy-submenu').css('display', 'block');
                } else {
                    $('.pushy-submenu').show();
                }
            }
        }
    });

    $('.menuitem').click(function() {
        var menuitem = $(this);
        if (window.innerWidth < menuBreakpoint) {
            if ($($(this)[0].parentNode).hasClass('pushy-submenu-closed')) {
                $('.pushy-submenu').hide();
                $($(this)[0].parentNode).show();
            } 
            else {
                $('.pushy-submenu').show();
                $(this).removeClass("mobile-menuitem-hover");
            }
        } 
        else {
            $('ul.akkordeon li > a').addClass('active');
            $('ul.akkordeon li > div').show();
            if ($(this).attr('id') == "navitem_produk") {
                moveHighlight();
            }
            $('.top_border').removeClass('top_border');
            setTimeout(function() {
                menuitem.next().addClass('top_border');
            }, 100);
        }
    }).hover(function(event) {
        if (window.innerWidth >= menuBreakpoint) {
            var menuitem = $(this);
            if (!menuitem.hasClass('active')) {
                menuitem.click();
            }
        }
    });

    var mobileMenu = function() {
        $('ul.akkordeon > li > a').removeClass('active');
        $('ul.akkordeon > li > a').unbind('click');
        $('ul.akkordeon > li > a').click(function(event) {
            event.stopPropagation();
        });
        $(".all-menu-items > li > a").on("mouseenter", function() {
            $(this).addClass("mobile-menuitem-hover");
        });
        $(".all-menu-items > li > a").on("mouseleave", function() {
            $(this).removeClass("mobile-menuitem-hover");
            $('#navitem_produk').show();
            $('#LanguageSelector').show();
            $('.search-box-container').show();
            $('.phone_wrapper').show();
            $('.pushy-submenu > #navitem_produk_menu > ul > li:not(.last), [id$="_sub"], [id$="_submenu"]').hide();
            $('.pushy-submenu > #navitem_produk_menu > ul > li:nth-child(1)').show();
        });
        $('.pushy-submenu.phone').hide();
        checkOpen();
    };

    var desktopMenu = function() {
        $('ul.akkordeon > li > a').unbind('click');
        $('ul.akkordeon > li > a').addClass('active');
        $('.pushy-content').append($(".phone_wrapper"));
    };

    var mouseleaveCloseMenu = function() {
        if (window.innerWidth > menuBreakpoint) {
            $('.menuitem.active').click();
        } else {
            $("header").removeClass("overlayed");
            $(".narrowheader").removeClass("overlayed");
            headerShadowed = false;
        }
    };

    var checkOpen = function() {
        if (window.innerWidth < menuBreakpoint) {
            if ($('.pushy-submenu').hasClass("pushy-submenu-open")) {
                $(".search-box-container").hide();
                $(".phone_wrapper").hide();
            } else {
                $(".search-box-container").show();
                $(".phone_wrapper").show();
            }
        }
    };

    function preventScroll(event) {
        var menuContent = $('.pushy-submenu .pushy-content')[0];
        var isInsideMenu = menuContent.contains(event.target);
        if (!isInsideMenu) {
            event.preventDefault();
        }
    }

    var checkmobOpen = function() {
        if (window.innerWidth < menuBreakpoint) {
            if ($("body").hasClass('pushy-open-left')) {
                document.documentElement.classList.add("noscroll");
                document.body.addEventListener('touchmove', preventScroll, {
                    passive: false
                });
            } else {
                document.documentElement.classList.remove("noscroll");
                document.body.removeEventListener('touchmove', preventScroll, {
                    passive: false
                });
            }
        }
    };

    var menuFunc = function() {
        $('#navitem_produk_akuntansi, #navitem_produk_medis, #navitem_kantor, #navitem_produk_messageapi').off("click touchstart touchend");
        if (window.innerWidth > menuBreakpoint) {
            $('#navitem_produk_akuntansi, #navitem_produk_medis, #navitem_produk_kantor, #navitem_produk_messageapi').on("click touchstart touchend", function(event) {
                var submenuId = $(this).attr('id') + '_submenu';
                var submenuIdLast = $(this).attr('id') + '_sub';
                event.stopPropagation();
                event.preventDefault();
                $('[id$="_submenu"]').hide();
                $('[id$="_sub"]').hide();
                $('#navitem_produk_akuntansi, #navitem_produk_medis, #navitem_produk_kantor, #navitem_produk_messageapi').removeClass('selected');
                $(this).addClass("selected");
                $('#' + submenuId).show();
                $('#' + submenuIdLast).show();
            });
        } else {
            $('#navitem_produk_akuntansi, #navitem_produk_medis, #navitem_produk_kantor, #navitem_produk_messageapi').on("click touchstart touchend", function(event) {
                event.stopPropagation();
                event.preventDefault();
                toggleSubMenuProduk(this);
            });
            $("#navitem_produk_akuntansi_mobile, #navitem_produk_medis_mobile, #navitem_produk_kantor_mobile, #navitem_produk_messageapi_mobile").click(function(event) {
                event.stopPropagation();
                event.preventDefault();
                $('.pushy-submenu > #navitem_produk_menu > ul > li:not(:nth-child(3)), #navitem_produk').show();
                $('.pushy-submenu > #navitem_produk_menu > ul > li:nth-child(2)').hide();
            });
        }
    };

    $(document).ready(function() {
        menuFunc();
        if (window.innerWidth >= menuBreakpoint) {
            desktopMenu();
        } else {
            mobileMenu();
            navHeight();
            catchSubMenuHeight();
            catchSubMenuHeightPrices();
            $(".pushy-link, .site-overlay").on("click", function() {
                var zopim = $(".zopim");
                if ($("body").hasClass("pushy-open-left")) {
                    zopim.hide()
                } else {
                    for (var i = 0; i < zopim.length; i++) {
                        (zopim[i].getAttribute("data-test-id") == "ChatWidgetMobileButton" || zopim[i].getAttribute("data-test-id") == "ChatWidgetButton") && $(zopim[i]).show();
                    }
                }
            });
        }
        var desktopPhoneControlInput = $('body.desktop .signuppageform .dataForm.formSteps div.step .dataItem input.phoneControlInput');

        desktopPhoneControlInput.focus(function() {
            $('.phoneControlContainer').addClass('focus');
        });

        desktopPhoneControlInput.focusout(function() {
            $('.phoneControlContainer').removeClass('focus');
        });

        $('.produk-sub-submenu').css('display', 'none!important');
    });

    $(".all-menu-items").on("mresize", function() {
        if (window.innerWidth < menuBreakpoint) {
            navHeight();
        }
    });
    $(document.body).trigger("resize");
    $(document.body).on("click touchstart touchend", function() {
        if (window.innerWidth < menuBreakpoint) {
            checkmobOpen();
        }
    });
    $(window).resize(function() {
        refreshSubMenuProduk();
        menuFunc();
        if (window.innerWidth >= menuBreakpoint) {
            $('.pushy-submenu').css('display', 'inline-block');
            desktopMenu();
        } else {
            mobileMenu();
            navHeight();
            checkOpen();
            catchSubMenuHeight();
            catchSubMenuHeightPrices();
            var submenuOpen = $('.pushy-submenu.pushy-submenu-open');
            if (submenuOpen != null) {
                $('.pushy-submenu').css('display', 'block');
                submenuOpen.click();
            } else {
                $('.pushy-submenu').show();
            }
        }
        ;
    });

    $.dropdownToggle({
        dropdownID: "navitem_produk_menu",
        switcherSelector: "#navitem_produk",
        simpleToggle: true,
        showFunction: function(switcherObj, dropdownItem) {
            if (dropdownItem.is(":hidden")) {
                switcherObj.addClass("active");
            } else {
                switcherObj.removeClass("active");
            }
        },
        hideFunction: function() {
            $("#navitem_produk").removeClass("active");
        }
    });

    $.dropdownToggle({
        dropdownID: "navitem_solusi_menu",
        switcherSelector: "#navitem_solusi",
        simpleToggle: true,
        showFunction: function(switcherObj, dropdownItem) {
            if (dropdownItem.is(":hidden")) {
                switcherObj.addClass("active");
            } else {
                switcherObj.removeClass("active");
            }
        },
        hideFunction: function() {
            $("#navitem_solusi").removeClass("active");
        },
    });

    $.dropdownToggle({
        dropdownID: "navitem_layanan_menu",
        switcherSelector: "#navitem_layanan",
        simpleToggle: true,
        showFunction: function(switcherObj, dropdownItem) {
            if (dropdownItem.is(":hidden")) {
                switcherObj.addClass("active");
            } else {
                switcherObj.removeClass("active");
            }
        },
        hideFunction: function() {
            $("#navitem_layanan").removeClass("active");
        }
    });

    $.dropdownToggle({
        dropdownID: "navitem_media_menu",
        switcherSelector: "#navitem_media",
        simpleToggle: true,
        showFunction: function(switcherObj, dropdownItem) {
            if (dropdownItem.is(":hidden")) {
                switcherObj.addClass("active");
            } else {
                switcherObj.removeClass("active");
            }
        },
        hideFunction: function() {
            $("#navitem_media").removeClass("active");
        }
    });

    $.dropdownToggle({
        dropdownID: "navitem_portofolio_menu",
        switcherSelector: "#navitem_portofolio",
        simpleToggle: true,
        showFunction: function(switcherObj, dropdownItem) {
            if (dropdownItem.is(":hidden")) {
                switcherObj.addClass("active");
            } else {
                switcherObj.removeClass("active");
            }
        },
        hideFunction: function() {
            $("#navitem_portofolio").removeClass("active");
        }
    });
    
    NavigationMenuManager.bindEvents();

    // $("#reseller_div").on("click", function() {
    //     location.href = $("#navitem_portofolio_reseller").attr("href");
    // });

    // $("#see_it_div").on("click", function() {
    //     location.href = $("#navitem_produk_see_it").attr("href");
    // });

    // $("#latest_events_div").on("click", function() {
    //     location.href = $("#navitem_latest_events").attr("href");
    // });
});
