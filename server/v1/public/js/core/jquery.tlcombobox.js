// tl combobox
(function($, win, doc, body) {

    function isTouchDevice() {
        if (('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch)) {
            return true;
        }
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return window.matchMedia(query).matches;
    }

    function converText(str) {
        var o = document.createElement('textarea');
        o.innerHTML = str;
        return o.value;
    }

    function onBodyClick(evt) {
        $(document.body).unbind('click', onBodyClick);
        $('span.tl-combobox').addClass('un-showed').removeClass('showed-options').find('div.combobox-container:first').hide();
        setTimeout(function() {
            $('span.tl-combobox').removeClass('un-showed');
        }, 0);
    }

    function onHelperKeyup(evt) {
        return false;
    }

    function onHelperKeypress(evt) {
        if ([9, 13, 38, 40].indexOf(evt.keyCode) !== -1) {
            switch (evt.keyCode) {
                case 9:   //tab
                    onBodyClick();
                    return undefined;
                case 13:   //enter
                    onBodyClick();
                    setFocusedOption(this);
                    break;
                case 38:   //up
                case 40:   //down
                    changeFocusedOption(this, evt.keyCode);
                    break;
            }
            return false;
        }

        if (evt.hasOwnProperty("key") && typeof (evt.key) !== "undefined" && evt.key.length == 1) {
            var letter = evt.key.toUpperCase();
            changeFocusedOption(this, -1, letter);
        } else {
            var letter = String.fromCharCode(evt.keyCode).toUpperCase();
            changeFocusedOption(this, -1, letter);
        }
        return false;
    }

    function onSelectFocus(evt, needTitleClick) {
        $(this).parents('span.tl-combobox:first').find('input:first').trigger('focus', [needTitleClick]);
    }

    function onSelectChange(evt) {
        var
            $this = $(this),
            $combobox = $this.parents('span.tl-combobox:first'),
            $select = $combobox.find('select:first'),
            $helper = $combobox.find('input:first'),
            $option = null,
            value = $this.val(),
            title = $this.find('option[value="' + value + '"]').text();
        var
            classname = '',
            classes = $combobox.attr('class').split(/\s+/),
            classesInd = 0;
        classesInd = classes ? classes.length : 0;
        while (classesInd--) {
            classname = classes[classesInd];
            if (classname.indexOf('select-value-') === 0) {
                $combobox.removeClass(classname);
            }
        }

        $combobox.find('li.in-focus').removeClass('in-focus');
        $combobox.find('div.combobox-title-inner-text:first').text(title || ' ');
        $combobox.find('div.combobox-title-inner-text:first').attr('title', title || ' ');
        $combobox.attr('data-value', value).addClass('select-value-' + value)
        .find('li.option-item[data-value="' + value + '"]:first').addClass('selected-item').siblings().removeClass('selected-item');

        $helper.trigger('focus', [false]);
    }

    function onComboboxTitleClick(evt) {
        var
            $combobox = $(evt.target).parents('span.tl-combobox:first');

        if ($combobox.hasClass('disabled') || $combobox.hasClass('un-showed')) {
            return undefined;
        }

        if ($combobox.hasClass('showed-options')) {
            return undefined;
        }

        onBodyClick();

        if ($combobox.hasClass("auto-width")) {
            $combobox.find('div.combobox-container:first').css("width", $combobox.innerWidth());
        }
        $combobox.addClass('showed-options').find('div.combobox-container:first').show();

        var 
          $select = $combobox.find('select:first'),
          $helper = $combobox.find('input:first'),
          $options = $combobox.find('li.option-item'),
          $selected = $options.filter('.selected-item:first');

        $options.removeClass('in-focus');
        if ($selected.length === 0) {
            $selected = $options.not('.hidden').filter(':first');
        }
        if ($selected.length > 0) {
            var selected = $selected[0];
            selected.parentNode.scrollTop = selected.offsetTop;
        }
        $helper.trigger('focus', [false]);

        setTimeout(bindBodyEvents, 1);
    }

    function onComboboxOptionHover(evt) {
        $(this).addClass('in-focus').siblings().removeClass('in-focus');
    }

    function onComboboxOptionClick(evt) {
        var
            $combobox = $(this).parents('span.tl-combobox:first');

        if ($combobox.hasClass('disabled')) {
            return undefined;
        }

        var
            $select = $combobox.find('select:first'),
            $target = $(evt.target),
            value = $target.attr('data-value');

        if (value !== "") {
            $select.val(value).change();
        }
    }

    function onComboboxOptionGroupClick(evt) {
        $(document.body).unbind('click', onBodyClick);
        setTimeout(bindBodyEvents, 1);
    }

    function setFocusedOption(helper) {
        var
            $combobox = $(helper).parents('span.tl-combobox:first');

        if ($combobox.hasClass('disabled')) {
            return undefined;
        }

        var
            $select = $combobox.find('select:first'),
            $target = $combobox.find('li.option-item.in-focus'),
            value = $target.attr('data-value');

        if (value) {
            $select.val(value).change();
        }
    }

    function changeFocusedOption(helper, keycode, letter) {
        var
            $combobox = $(helper).parents('span.tl-combobox:first');

        if ($combobox.hasClass('disabled')) {
            return undefined;
        }

        var
            $options = $combobox.find('li.option-item').not('.hidden'),
            $infocus = $options.filter('.in-focus');

        if ($infocus.length === 0) {
            $infocus = $options.filter('.selected-item:first');
        }

        switch (keycode) {
        case 38:   //up
            while (($infocus = $infocus.prev()).length > 0) {
                if (!$infocus.hasClass('hidden')) {
                    break;
                }
            }
            if ($infocus.length === 0) {
                $infocus = $options.filter(':first');
            }
            break;
        case 40:   //down
            while (($infocus = $infocus.next()).length > 0) {
                if (!$infocus.hasClass('hidden')) {
                    break;
                }
            }
            if ($infocus.length === 0) {
                $infocus = $options.filter(':last');
            }
            break;
        case -1: //custom letter
            if (typeof (letter) == "undefined")
                break;
            $infocus = $options
                .filter(":not(.not-key-letter-processed)")
                .filter(function () { if ($.trim($(this).text()).indexOf(letter) === 0) { return $(this); } })
                .filter(':first');

            if ($infocus.length === 0) {
                $infocus = $options.filter(':first');
            }
            break;
        }
        if ($infocus.length > 0) {
            var 
        infocus = $infocus[0],
        parent = infocus.parentNode;
            if (infocus.offsetTop < parent.scrollTop) {
                parent.scrollTop = infocus.offsetTop;
            } else if (infocus.offsetTop + infocus.offsetHeight > parent.scrollTop + parent.offsetHeight) {
                parent.scrollTop = infocus.offsetTop - parent.offsetHeight + infocus.offsetHeight;
            }
        }
        $infocus.addClass('in-focus').siblings().removeClass('in-focus');
    }

    function renderOption(option, datavalue) {
        return [
        '<li',
          ' class="option-item',
            option.classname ? ' ' + option.classname : '',
            option.selected === true ? ' selected-item' : '',
          '"',
          ' data-value="' + datavalue + '"',
          ' title="' + (jQuery.trim(option.title) || '&nbsp;') + '"',
        '>',
        option.title || '&nbsp;',
        '</li>'
        ];
    }

    function renderOptgroup(optgroup) {
        return [
        '<li',
          ' class="option-group-item',
            optgroup.classname ? ' ' + optgroup.classname : '',
          '"',
          ' data-value="' + (jQuery.trim(optgroup.title) || '&nbsp;') + '"',
          ' title="' + (jQuery.trim(optgroup.title) || '&nbsp;') + '"',
        '>',
        optgroup.title || '&nbsp;',
        '</li>'
        ];
    }

    function renderCombobox(select, optionGroupsArray) {
        var
            html = [],

            option = null,
            optiongroup = null,

            optionGroupsArrayLength = optionGroupsArray.length,
            hasoptgroups = optionGroupsArrayLength > 1 || optionGroupsArray[0].title != "";

            optionsvalue = [],
            selectclassname = select.className,
            selectoption = null;
        for (var k = 0; k < optionGroupsArrayLength; k++) {
            optiongroup = optionGroupsArray[k];

            if (hasoptgroups) {
                html = html.concat(renderOptgroup(optiongroup));
            }

            for (var i = 0, n = optiongroup.options.length; i < n; i++) {
                option = optiongroup.options[i];
                if (option.selected === true) {
                    selectoption = option;
                }
                optionsvalue.push(option.value);
                html = html.concat(renderOption(option, optionsvalue.length - 1));
            }
        }
        if (selectoption == null) {
            selectoption = optionGroupsArray[0]
        }

        html = [
          '<div class="combobox-title">',
            '<div class="inner-text combobox-title-inner-text" title="' + converText(selectoption.title || '&nbsp;') + '">',
              selectoption.title || '&nbsp;',
            '</div>',
          '</div>',
          '<div class="combobox-wrapper">',
            '<div class="combobox-container">',
              '<div class="container-corner"></div>',
              '<ul class="combobox-options', hasoptgroups ? " has-optgroups" : "",'">',
                html.join(''),
              '</ul>',
            '</div>',
          '</div>'
        ];

        var o = doc.createElement('span');
        o.className = 'tl-combobox' + ' tl-combobox-container' + ' select-value-' + selectoption.value + (selectclassname ? ' ' + selectclassname : '');
        //if (typeof select.getAttribute('disabled') === 'string') {
        //  o.className += ' disabled';
        //}
        o.innerHTML = html.join('');

        var
            optionsvalueLen = optionsvalue.length,
            value = null,
            node = null,
            nodes = o.getElementsByTagName('li'),
            nodesInd = 0;
        nodesInd = nodes ? nodes.length : 0;
        while (nodesInd--) {
            node = nodes[nodesInd];
            value = node.getAttribute('data-value');
            value = isFinite(+value) ? +value : -1;
            if (value > -1 && value < optionsvalueLen) {
                node.setAttribute('data-value', optionsvalue[value]);
            }
        }

        return o;
    }

    function reRenderCombobox(o, select, optionGroupsArray) {
        var
            html = [],

            option = null,
            optgroup = null,

            optionGroupsArrayLength = optionGroupsArray.length,
            hasoptgroups = optionGroupsArrayLength > 1 || optionGroupsArray[0].title != "";

            optionsvalue = [],
            selectclassname = select.className,
            selectoption = null;


        for (var k = 0; k < optionGroupsArrayLength; k++) {
            optiongroup = optionGroupsArray[k];

            if (hasoptgroups) {
                html = html.concat(renderOptgroup(optiongroup));
            }

            for (var i = 0, n = optiongroup.options.length; i < n; i++) {
                option = optiongroup.options[i];
                if (option.selected === true) {
                    selectoption = option;
                }
                optionsvalue.push(option.value);
                html = html.concat(renderOption(option, optionsvalue.length - 1));
            }
        }

        try {
            var ul = select.previousSibling.firstChild.lastChild;
            ul.innerHTML = html.join('');
        } catch (err) { }

        if (selectoption !== null) {
            try {
                var title = o.firstChild.firstChild;
                title.innerHTML = selectoption.title || '&nbsp;';
                title.setAttribute('title', converText(selectoption.title || '&nbsp;'));
            } catch (err) { }
        }

        o.className = (select.className.indexOf('tl-combobox') === -1 ? 'tl-combobox ' : '') + 'tl-combobox-container' + ' select-value-' + selectoption.value + (selectclassname ? ' ' + selectclassname : '');

        var
            optionsvalueLen = optionsvalue.length,
            value = null,
            node = null,
            nodes = o.getElementsByTagName('li'),
            nodesInd = 0;
        nodesInd = nodes ? nodes.length : 0;
        while (nodesInd--) {
            node = nodes[nodesInd];
            value = node.getAttribute('data-value');
            value = isFinite(+value) ? +value : -1;
            if (value > -1 && value < optionsvalueLen) {
                node.setAttribute('data-value', optionsvalue[value]);
            }
        }
        return o;
    }

    function updateSelect(select) {
        var
            o = null,
            selectvalue = select.value,
            optionvalue = "",

            optsArray = [],
            optGroupsArray = [],

            options = null,
            optgroups = null,

            optionsInd = 0,
            optgroupsInd = 0,
            option = null,
            optgroup = null;

        onBodyClick();

        optgroups = select.getElementsByTagName('optgroup');
        optgroupsInd = optgroups ? optgroups.length : 0;

        if (optgroupsInd == 0) {
            options = select.getElementsByTagName('option');
            optionsInd = options ? options.length : 0;

            if (optionsInd > 0 && $(options).filter('[value="' + selectvalue + '"]').length == 0) {
                selectvalue = options[0].getAttribute('value');
            }

            while (optionsInd--) {
                option = options[optionsInd];
                optionvalue = option.getAttribute('value');
                optsArray.unshift({ classname: option.className, value: optionvalue, title: option.innerHTML, selected: optionvalue == selectvalue });
            }
            optGroupsArray.unshift({ title: "", classname: "", options: optsArray });
        } else {
            while (optgroupsInd--) {
                optsArray = [];
                optgroup = optgroups[optgroupsInd];
                options = optgroup.getElementsByTagName('option');
                optionsInd = options ? options.length : 0;
                while (optionsInd--) {
                    option = options[optionsInd];
                    optionvalue = option.getAttribute('value');
                    optsArray.unshift({ classname: option.className, value: optionvalue, title: option.innerHTML, selected: optionvalue == selectvalue });
                }
                if (optsArray.length != 0) {
                    optGroupsArray.unshift({ title: optgroup.getAttribute('label'), classname: optgroup.className, options: optsArray });
                }
            }
        }


        if (select.className.indexOf('tl-combobox') === -1) {
            o = renderCombobox(select, optGroupsArray);
            if (o) {
                select.parentNode.insertBefore(o, select);
                o.appendChild(select);
                if (select.className.indexOf('none-helper') === -1 && !isTouchDevice()) {
                    var helper = document.createElement('input');
                    o.appendChild(helper);
                }
                o.setAttribute('data-value', selectvalue);
                return o;
            }
        } else {
            o = select.parentNode;
            if (o) {
                reRenderCombobox(o, select, optGroupsArray);
                o.setAttribute('data-value', selectvalue);
                return o;
            }
        }

        return null;
    }

    function bindBodyEvents() {
        $(document.body).one('click', onBodyClick);
    }

    function bindComboboxEvents($select, $combobox) {
        setTimeout((function($select) {
            return function() {
                $select.unbind('focus', onSelectFocus).bind('focus', onSelectFocus);
            };
        })($select), 500);

        $select
        .off('change', onSelectChange).on('change', onSelectChange);

        $combobox.find('input')
        .off('keydown', onHelperKeypress).on('keydown', onHelperKeypress)
        .off('keyup', onHelperKeyup).on('keyup', onHelperKeyup);

        $combobox.find('ul.combobox-options:first')
        .off('click', 'li.option-item', onComboboxOptionClick).on('click', 'li.option-item', onComboboxOptionClick)
        .off('mouseenter mouseleave', 'li.option-item', onComboboxOptionHover).on('mouseenter mouseleave', 'li.option-item', onComboboxOptionHover);

        $combobox.find('ul.combobox-options:first')
        .off('click', 'li.option-group-item', onComboboxOptionGroupClick).on('click', 'li.option-group-item', onComboboxOptionGroupClick);

        $combobox.find('div.combobox-title:first')
        .off('click', onComboboxTitleClick).on('click', onComboboxTitleClick);
    }

    $.fn.tlCombobox = $.fn.tlcombobox = function(params) {
        var
            wasupdated = false,
            select = null,
            combobox = null,
            $selects = $(this),
            selectsInd = 0,
            $select = null;

        if (typeof params === 'boolean') {
            selectsInd = $selects.length;
            while (selectsInd--) {
                if (params === true) {
                    $($selects[selectsInd]).attr('disabled', false).parents('span.tl-combobox:first').removeClass('disabled');
                } else {
                    $($selects[selectsInd]).attr('disabled', true).parents('span.tl-combobox:first').addClass('disabled');
                }
            }
            return $selects;
        }

        if (typeof params === 'string') {
            switch (params) {
            case 'show':
                $($selects[selectsInd]).show().parents('span.tl-combobox:first').show();
                return $selects;
            case 'hide':
                $($selects[selectsInd]).hide().parents('span.tl-combobox:first').hide();
                return $selects;
            }
        }

        //if ($.browser.mobile === true) {
        //    return $selects;
        //}

        selectsInd = $selects.length;
        while (selectsInd--) {
            select = $selects[selectsInd];
            $select = $(select);

            combobox = updateSelect(select);

            if (select.className.indexOf('tl-combobox') !== -1) {
                $(combobox).addClass('un-showed');
            }

            bindComboboxEvents($select, $(combobox));

            if (select.className.indexOf('tl-combobox') === -1) {
                $select.addClass('tl-combobox');
            }
            wasupdated = true;
        }

        if (wasupdated) {
            var
                zindex = 0,
                $comboboxes = $('span.tl-combobox'),
                comboboxesInd = $comboboxes.length;
            while (comboboxesInd--) {
                $($comboboxes[comboboxesInd]).css('zIndex', ++zindex);
            }
        }

        return $selects;
    };
})(jQuery, window, document, document.body);