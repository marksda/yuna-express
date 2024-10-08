// ----------------------------------------------------------------------------------------------------
// ScrollMe
// A jQuery plugin for adding simple scrolling effects to web pages
// http://scrollme.nckprsn.com
// ----------------------------------------------------------------------------------------------------
var scrollme = (function(a) {
    var d = {};
    var c = a(document);
    var b = a(window);
    d.body_height = 0;
    d.viewport_height = 0;
    d.viewport_top = 0;
    d.viewport_bottom = 0;
    d.viewport_top_previous = -1;
    d.elements = [];
    d.elements_in_view = [];
    d.property_defaults = {
        opacity: 1,
        translatex: 0,
        translatey: 0,
        translatez: 0,
        rotatex: 0,
        rotatey: 0,
        rotatez: 0,
        scale: 1,
        scalex: 1,
        scaley: 1,
        scalez: 1
    };
    d.scrollme_selector = ".scrollme";
    d.animateme_selector = ".animateme";
    d.update_interval = 10;
    d.easing_functions = {
        linear: function(e) {
            return e
        },
        easeout: function(e) {
            return e * e * e
        },
        easein: function(e) {
            e = 1 - e;
            return 1 - (e * e * e)
        },
        easeinout: function(e) {
            if (e < 0.5) {
                return (4 * e * e * e)
            } else {
                e = 1 - e;
                return 1 - (4 * e * e * e)
            }
        }
    };
    d.init_events = ["ready", "page:load", "page:change"];
    d.init_if = function() {
        return true
    }
    ;
    d.init = function() {
        if (!d.init_if()) {
            return false
        }
        d.init_elements();
        d.on_resize();
        b.on("resize orientationchange", function() {
            d.on_resize()
        });
        b.load(function() {
            setTimeout(function() {
                d.on_resize()
            }, 100)
        });
        setInterval(d.update, d.update_interval);
        return true
    }
    ;
    d.init_elements = function() {
        a(d.scrollme_selector).each(function() {
            var e = {};
            e.element = a(this);
            var f = [];
            a(this).find(d.animateme_selector).addBack(d.animateme_selector).each(function() {
                var h = {};
                h.element = a(this);
                h.when = h.element.data("when");
                h.from = h.element.data("from");
                h.to = h.element.data("to");
                if (h.element.is("[data-crop]")) {
                    h.crop = h.element.data("crop")
                } else {
                    h.crop = true
                }
                if (h.element.is("[data-easing]")) {
                    h.easing = d.easing_functions[h.element.data("easing")]
                } else {
                    h.easing = d.easing_functions.easeout
                }
                var g = {};
                if (h.element.is("[data-opacity]")) {
                    g.opacity = h.element.data("opacity")
                }
                if (h.element.is("[data-translatex]")) {
                    g.translatex = h.element.data("translatex")
                }
                if (h.element.is("[data-translatey]")) {
                    g.translatey = h.element.data("translatey")
                }
                if (h.element.is("[data-translatez]")) {
                    g.translatez = h.element.data("translatez")
                }
                if (h.element.is("[data-rotatex]")) {
                    g.rotatex = h.element.data("rotatex")
                }
                if (h.element.is("[data-rotatey]")) {
                    g.rotatey = h.element.data("rotatey")
                }
                if (h.element.is("[data-rotatez]")) {
                    g.rotatez = h.element.data("rotatez")
                }
                if (h.element.is("[data-scale]")) {
                    g.scale = h.element.data("scale")
                }
                if (h.element.is("[data-scalex]")) {
                    g.scalex = h.element.data("scalex")
                }
                if (h.element.is("[data-scaley]")) {
                    g.scaley = h.element.data("scaley")
                }
                if (h.element.is("[data-scalez]")) {
                    g.scalez = h.element.data("scalez")
                }
                h.properties = g;
                f.push(h)
            });
            e.effects = f;
            d.elements.push(e)
        })
    }
    ;
    d.update = function() {
        window.requestAnimationFrame(function() {
            d.update_viewport_position();
            if (d.viewport_top_previous != d.viewport_top) {
                d.update_elements_in_view();
                d.animate()
            }
            d.viewport_top_previous = d.viewport_top
        })
    }
    ;
    d.animate = function() {
        var C = d.elements_in_view.length;
        for (var A = 0; A < C; A++) {
            var h = d.elements_in_view[A];
            var f = h.effects.length;
            for (var D = 0; D < f; D++) {
                var w = h.effects[D];
                switch (w.when) {
                case "view":
                case "span":
                    var r = h.top - d.viewport_height;
                    var n = h.bottom;
                    break;
                case "exit":
                    var r = h.bottom - d.viewport_height;
                    var n = h.bottom;
                    break;
                default:
                    var r = h.top - d.viewport_height;
                    var n = h.top;
                    break
                }
                if (w.crop) {
                    if (r < 0) {
                        r = 0
                    }
                    if (n > (d.body_height - d.viewport_height)) {
                        n = d.body_height - d.viewport_height
                    }
                }
                var g = (d.viewport_top - r) / (n - r);
                var x = w.from;
                var j = w.to;
                var o = j - x;
                var k = (g - x) / o;
                var v = w.easing(k);
                var l = d.animate_value(g, v, x, j, w, "opacity");
                var t = d.animate_value(g, v, x, j, w, "translatey");
                var u = d.animate_value(g, v, x, j, w, "translatex");
                var s = d.animate_value(g, v, x, j, w, "translatez");
                var B = d.animate_value(g, v, x, j, w, "rotatex");
                var z = d.animate_value(g, v, x, j, w, "rotatey");
                var y = d.animate_value(g, v, x, j, w, "rotatez");
                var E = d.animate_value(g, v, x, j, w, "scale");
                var q = d.animate_value(g, v, x, j, w, "scalex");
                var p = d.animate_value(g, v, x, j, w, "scaley");
                var m = d.animate_value(g, v, x, j, w, "scalez");
                if ("scale"in w.properties) {
                    q = E;
                    p = E;
                    m = E
                }
                w.element.css({
                    opacity: l,
                    transform: "translate3d( " + u + "px , " + t + "px , " + s + "px ) rotateX( " + B + "deg ) rotateY( " + z + "deg ) rotateZ( " + y + "deg ) scale3d( " + q + " , " + p + " , " + m + " )"
                })
            }
        }
    }
    ;
    d.animate_value = function(i, h, j, k, n, m) {
        var g = d.property_defaults[m];
        if (!(m in n.properties)) {
            return g
        }
        var e = n.properties[m];
        var f = (k > j) ? true : false;
        if (i < j && f) {
            return g
        }
        if (i > k && f) {
            return e
        }
        if (i > j && !f) {
            return g
        }
        if (i < k && !f) {
            return e
        }
        var l = g + (h * (e - g));
        switch (m) {
        case "opacity":
            l = l.toFixed(2);
            break;
        case "translatex":
            l = l.toFixed(0);
            break;
        case "translatey":
            l = l.toFixed(0);
            break;
        case "translatez":
            l = l.toFixed(0);
            break;
        case "rotatex":
            l = l.toFixed(1);
            break;
        case "rotatey":
            l = l.toFixed(1);
            break;
        case "rotatez":
            l = l.toFixed(1);
            break;
        case "scale":
            l = l.toFixed(3);
            break;
        default:
            break
        }
        return l
    }
    ;
    d.update_viewport_position = function() {
        d.viewport_top = b.scrollTop();
        d.viewport_bottom = d.viewport_top + d.viewport_height
    }
    ;
    d.update_elements_in_view = function() {
        d.elements_in_view = [];
        var f = d.elements.length;
        for (var e = 0; e < f; e++) {
            if ((d.elements[e].top < d.viewport_bottom) && (d.elements[e].bottom > d.viewport_top)) {
                d.elements_in_view.push(d.elements[e])
            }
        }
    }
    ;
    d.on_resize = function() {
        d.update_viewport();
        d.update_element_heights();
        d.update_viewport_position();
        d.update_elements_in_view();
        d.animate()
    }
    ;
    d.update_viewport = function() {
        d.body_height = c.height();
        d.viewport_height = b.height()
    }
    ;
    d.update_element_heights = function() {
        var g = d.elements.length;
        for (var f = 0; f < g; f++) {
            var h = d.elements[f].element.outerHeight();
            var e = d.elements[f].element.offset();
            d.elements[f].height = h;
            d.elements[f].top = e.top;
            d.elements[f].bottom = e.top + h
        }
    }
    ;
    c.on(d.init_events.join(" "), function() {
        d.init()
    });
    return d
}
)(jQuery);
