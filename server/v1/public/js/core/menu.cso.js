var NavigationMenuManager = new function() {
    var hideTimer = null;
    var curMenu = '';
    var restoreNavMenu = function() {
        $('.subMenu').hide();
        $('div.navOverItem').attr('class', 'navItem');
        if (this.curMenu != '')
            $('#' + this.curMenu).attr('class', 'navCurrentItem');
    };
    var bindEvents = function() {
        $('div.subMenu').hover(function() {
            if (hideTimer != null) {
                clearTimeout(hideTimer);
            }
        }, function() {
            restoreNavMenu();
        });
        $('div.navItem, div.navCurrentItem').hover(function() {
            var menuID, top, left;
            if (curMenu == '') {
                curMenu = $('div.navCurrentItem').attr('id');
            }
            if (hideTimer != null) {
                clearTimeout(hideTimer);
            }
            menuID = $(this).attr('name');
            if ($('#' + menuID).is(':visible')) {
                return;
            }
            restoreNavMenu();
            $(this).attr('class', 'navOverItem');
            top = $(this).position().top + $(this).height() + 1;
            left = $(this).position().left - ($('.subMenu').width() - $(this).width()) / 2 + parseInt($(this).css('margin-left'));
            menuID = $(this).attr('name');
            $('#' + menuID).css({
                'top': top + 'px',
                'left': left + 'px'
            });
            $('#' + menuID).show();
        }, function() {
            hideTimer = setTimeout(function() {
                restoreNavMenu();
            }, 300);
        });
    };
    return {
        bindEvents: bindEvents
    };
};
