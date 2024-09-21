(function(jq, win, doc, body) {
    jq.fn.helper = function(options) {
        var options = jQuery.extend({
            addTop: 0,
            addLeft: 0,
            position: "absolute",
            BlockHelperElt: '', //obligatory  parameter
            enableAutoHide: true
        }, options);

        return this.each(function() {
            var w = jq(window),
                elem = jq(this),
                $helpBlock = options.BlockHelperElt;

            var scrWidth = w.width(),
                scrHeight = w.height(),
                addTop = options.addTop - 20,
                addLeft = options.addLeft - 29,         // the left padding of the arrow
                topPadding = w.scrollTop(),
                leftPadding = w.scrollLeft(),

                elemPos = elem.offset(),

                elemPosLeft = 0,
                elemPosTop = - $helpBlock.outerHeight();

            if (options.position == "fixed") {
                addTop -= topPadding;
                addLeft -= leftPadding;
            }
            if (options.BlockHelperElt.find('.cornerHelpBlock').length == 0) {
                $helpBlock.append('<div class="cornerHelpBlock pos_top"></div>');
            }

            if (options.enableAutoHide) {
                jq(document).click(function(e) {
                    if (!jq(e.target).parents().andSelf().is(elem)) {
                        $helpBlock.hide();
                    }
                });
            }

            $helpBlock.css(
            {
                "top": elemPosTop + addTop,
                "left": elemPosLeft + addLeft,
                "position": options.position
            });

            jq(window).resize(function() {
                elemPosLeft = elem.offset().left;
                $helpBlock.css(
                {
                    "left": elemPosLeft + addLeft
                });
            });

            if ($helpBlock.css('display') == "none") {
                $helpBlock.show();
            } else {
                $helpBlock.hide();
            }
        });
    };

})(jQuery, window, document, document.body);