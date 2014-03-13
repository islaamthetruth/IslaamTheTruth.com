jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function (e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function (e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function (e, f, a, h, g) {
        if((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function (e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function (e, f, a, h, g) {
        if((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function (e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function (e, f, a, h, g) {
        if((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function (e, f, a, h, g) {
        if((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function (e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function (e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function (e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function (e, f, a, h, g) {
        return(f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function (e, f, a, h, g) {
        return(f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function (e, f, a, h, g) {
        if(f == 0) {
            return a
        }
        if(f == g) {
            return a + h
        }
        if((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function (e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function (e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function (e, f, a, h, g) {
        if((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function (r, s, g, k, h) {
        var f = 1.70158;
        var e = 0;
        var l = k;
        if(s == 0) {
            return g
        }
        if((s /= h) == 1) {
            return g + k
        }
        if(!e) {
            e = h * 0.3
        }
        if(l < Math.abs(k)) {
            l = k;
            var f = e / 4
        } else {
            var f = e / (2 * Math.PI) * Math.asin(k / l)
        }
        return -(l * Math.pow(2, 10 * (s -= 1)) * Math.sin((s * h - f) * (2 * Math.PI) / e)) + g
    },
    easeOutElastic: function (r, s, g, k, h) {
        var f = 1.70158;
        var e = 0;
        var l = k;
        if(s == 0) {
            return g
        }
        if((s /= h) == 1) {
            return g + k
        }
        if(!e) {
            e = h * 0.3
        }
        if(l < Math.abs(k)) {
            l = k;
            var f = e / 4
        } else {
            var f = e / (2 * Math.PI) * Math.asin(k / l)
        }
        return l * Math.pow(2, -10 * s) * Math.sin((s * h - f) * (2 * Math.PI) / e) + k + g
    },
    easeInOutElastic: function (r, s, g, k, h) {
        var f = 1.70158;
        var e = 0;
        var l = k;
        if(s == 0) {
            return g
        }
        if((s /= h / 2) == 2) {
            return g + k
        }
        if(!e) {
            e = h * (0.3 * 1.5)
        }
        if(l < Math.abs(k)) {
            l = k;
            var f = e / 4
        } else {
            var f = e / (2 * Math.PI) * Math.asin(k / l)
        } if(s < 1) {
            return -0.5 * (l * Math.pow(2, 10 * (s -= 1)) * Math.sin((s * h - f) * (2 * Math.PI) / e)) + g
        }
        return l * Math.pow(2, -10 * (s -= 1)) * Math.sin((s * h - f) * (2 * Math.PI) / e) * 0.5 + k + g
    },
    easeInBack: function (e, f, a, n, h, g) {
        if(g == undefined) {
            g = 1.70158
        }
        return n * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function (e, f, a, n, h, g) {
        if(g == undefined) {
            g = 1.70158
        }
        return n * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function (e, f, a, n, h, g) {
        if(g == undefined) {
            g = 1.70158
        }
        if((f /= h / 2) < 1) {
            return n / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return n / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function (e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function (e, f, a, h, g) {
        if((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if(f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if(f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function (e, f, a, h, g) {
        if(f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});
(function (a) {
    a.fn.hoverTimeout = function (d, k, b, e) {
        return this.each(function () {
            var f = null,
                g = a(this);
            g.hover(function () {
                clearTimeout(f);
                f = setTimeout(function () {
                    k.call(g)
                }, d)
            }, function () {
                clearTimeout(f);
                f = setTimeout(function () {
                    e.call(g)
                }, b)
            })
        })
    }
})(jQuery);

function createTicker() {
    var b = jQuery(".breaking-news ul").children();
    tickerItems = new Array();
    b.each(function (a) {
        tickerItems.push(jQuery(this).html())
    });
    i = 0;
    rotateTicker()
}

function rotateTicker() {
    if(i == tickerItems.length) {
        i = 0
    }
    tickerText = tickerItems[i];
    c = 0;
    typetext();
    setTimeout("rotateTicker()", 5000);
    i++
}
var isInTag = false;

function typetext() {
    var b = tickerText.substr(c, 1);
    if(b == "<") {
        isInTag = true
    }
    if(b == ">") {
        isInTag = false
    }
    jQuery(".breaking-news ul").html(tickerText.substr(0, c++));
    if(c < tickerText.length + 1) {
        if(isInTag) {
            typetext()
        } else {
            setTimeout("typetext()", 28)
        }
    } else {
        c = 1;
        tickerText = ""
    }
}

function actinave(e) {
    var h = window.location.href;
    e("#navi a").each(function () {
        if(this.href === h) {
            var a = e(this).parents("li").children("a").addClass("current")
        }
    });
    e("#navi ul").removeClass("hidden");
    e("#navi li").hoverTimeout(100, function () {
        e(this).parent("ul").css("overflow", "visible");
        e(this).children("ul").filter(":not(:animated)").slideDown()
    }, 500, function () {
        e(this).parent("ul").css("overflow", "visible");
        e(this).children("ul").slideUp(800, "easeInExpo")
    });
    e("#mobilenav").click(function () {
        e("#navi").slideToggle();
        e(this).toggleClass("active");
        return false
    });
    e("#top_mobilenav").click(function () {
        e("#PageList1 ul").slideToggle();
        e(this).toggleClass("active");
        return false
    });

    function f() {
        if(e(window).width() > 767) {
            e("#navi").css("display", "block").removeClass("suball")
        } else {
            if(e(window).width() <= 767 && e("#mobilenav").attr("class") === "active") {
                e("#navi").css("display", "block").addClass("suball")
            } else {
                if(e(window).width() <= 767 && e("#mobilenav").attr("class") !== "active") {
                    e("#navi").css("display", "none").addClass("suball")
                }
            }
        }
    }

    function g() {
        if(e(window).width() > 767) {
            e("#PageList1 ul").css("display", "block")
        } else {
            if(e(window).width() <= 767 && e("#top_mobilenav").attr("class") === "active") {
                e("#PageList1 ul").css("display", "block")
            } else {
                if(e(window).width() <= 767 && e("#top_mobilenav").attr("class") !== "active") {
                    e("#PageList1 ul").css("display", "none")
                }
            }
        }
    }
    f();
    g();
    e(window).resize(f);
    e(window).resize(g)
}

function seach(a) {
    (function (e) {
        var l = {
            blogURL: "",
            srcBlank: "",
            findText: "Search results for keyword",
            NotfindText: "No result!",
            Showthumb: true,
            LoadingText: "Searching...",
            scrthumbSize: 50,
            summaryLength: 100
        };
        l = e.extend({}, l, a);
        var b = e("#ajax-search-form"),
            f = b.find(":text");
        b.append('<div id="search-result"></div>');
        var d = e("#search-result");
        b.on("submit", function () {
            var g = f.val();
            d.show().html('<div class="load">' + l.LoadingText + "</div>");
            e.get((l.blogURL === "" ? window.location.protocol + "//" + window.location.host : l.blogURL) +
                "/feeds/posts/summary?alt=json-in-script&q=" + g + "&max-results=9999", function (z) {
                    var q = z.feed.entry,
                        o, n, h, p, k = "";
                    if(q !== undefined) {
                        k = "<h4>" + l.findText + " &quot;" + g + "&quot;</h4>";
                        k += '<a class="close" href="/">&times;</a><ol>';
                        for(var m = 0; m < q.length; m++) {
                            var A = new RegExp(g, "ig"),
                                h = q[m].title.$t.replace(A, "<mark>" + g + "</mark>");
                            for(var y = 0; y < q[m].link.length; y++) {
                                if(q[m].link[y].rel == "alternate") {
                                    p = q[m].link[y].href
                                }
                            }
                            if(l.summaryLength > 0) {
                                if("content" in q[m]) {
                                    o = q[m].content.$t
                                } else {
                                    if("summary" in q[m]) {
                                        o = q[m].summary.$t
                                    } else {
                                        o = ""
                                    }
                                }
                                o = o.replace(/<\S[^>]*>/g, "");
                                if(o.length > l.summaryLength) {
                                    o = o.substring(0, l.summaryLength) + "..."
                                }
                                o = o.replace(A, "<mark>" + g + "</mark>")
                            }
                            if(l.Showthumb === true) {
                                if("media$thumbnail" in q[m]) {
                                    n = q[m].media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/s" + l.scrthumbSize + "-c")
                                } else {
                                    n = l.srcBlank
                                }
                            }
                            k += '<li><a href="' + p + '" >' + (l.Showthumb === true ? '<img width="' + l.scrthumbSize + '" height="' + l.scrthumbSize +
                                '" src="' + n + '"/>' : "") + "<strong>" + h + "</strong></a>" + (l.summaryLength > 0 ? "<p>" + o + "</p>" : "") +
                                "</li>"
                        }
                        k += "</ol>";
                        d.html(k)
                    } else {
                        d.html('<a class="close" href="/">&times;</a><strong>' + l.NotfindText + "</strong>")
                    }
                }, "jsonp");
            return false
        });
        b.on("click", ".close", function () {
            d.fadeOut();
            return false
        })
    })(jQuery)
}

function ShowPost1(a) {
    (function (b) {
        var g = {
            blogURL: "",
            MaxPost: 5,
            idcontaint: "",
            FirstImageSize: 300,
            ImageSize: 300,
            Summarylength: 90,
            animated: false,
            loadingClass: "loadingz",
            pBlank: "http://2.bp.blogspot.com/-RFdFqW5Klsc/UitLuFMcVxI/AAAAAAAADpM/y5UnpsxUSrc/s1600/noimgs.jpg",
            MonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            tagName: false
        };
        g = b.extend({}, g, a);
        var d = b(g.idcontaint);
        d.html('<div class="box-content"><ul></ul></div>').addClass(g.loadingClass);
        b.get((g.blogURL === "" ? window.location.protocol + "//" + window.location.host : g.blogURL) + "/feeds/posts/summary" + (g.tagName === false ? "" :
            "/-/" + g.tagName) + "?max-results=" + g.MaxPost + "&orderby=published&alt=json-in-script", function (m) {
            var t, q, h, Q, v, s, k, n, l, o, M, f, r, p, P = "",
                w = m.feed.entry;
            for(var u = 0; u < w.length; u++) {
                for(var e = 0; e < w[u].link.length; e++) {
                    if(w[u].link[e].rel == "alternate") {
                        t = w[u].link[e].href;
                        break
                    }
                }
                for(var f = 0; f < e; f++) {
                    if(w[u].link[f].rel == "replies" && w[u].link[f].type == "text/html") {
                        Q = w[u].link[f].title.split(" ")[0];
                        break
                    }
                }
                if("media$thumbnail" in w[u]) {
                    v = w[u].media$thumbnail.url
                } else {
                    v = g.pBlank
                } if("content" in w[u]) {
                    h = w[u].content.$t
                } else {
                    if("summary" in w[u]) {
                        h = w[u].summary.$t
                    } else {
                        h = ""
                    }
                }
                h = h.replace(/<\S[^>]*>/g, "");
                if(h.length > g.Summarylength) {
                    h = h.substring(0, g.Summarylength) + "..."
                }
                if(w[u] === w[0]) {
                    v = v.replace(/\/s[0-9]+\-c/g, "/s" + g.FirstImageSize + "-p");
                    if(v.indexOf("i.ytimg.com/vi/") != -1) {
                        v = v.replace("default", "0")
                    }
                    k = "<p>" + h + "</p>"
                } else {
                    v = v.replace(/\/s[0-9]+\-c/g, "/s" + g.ImageSize + "-p");
                    k = ""
                }
                q = w[u].title.$t;
                r = w[u].author[0].name.$t;
                p = w[u].author[0].gd$image.src;
                f = w[u].published.$t.substring(0, 10);
                n = f.substring(0, 4);
                l = f.substring(5, 7);
                o = f.substring(8, 10);
                M = g.MonthNames[parseInt(l, 10) - 1];
                s = '<div class="uj_thumb"><a title="' + q + '" class=" " href="' + t + '"><img src="' + v +
                    '"/><span class="uj-vid"></span></a><span class="nb_slide_icon"><span class="inside"><span class="avatar"><img src="' + p +
                    '"/></span><span class="author">Written by <strong>' + r + "</strong></span></span></span></div>";
                j = '<a class="more-link" href="' + t + '">Read More</a>';
                P += '<li><div class="inner-content" >' + s + '<h3><a href="' + t + '">' + q +
                    '</a></h3><span class="post-meta"><span class="comt"><i class="icon-comments"></i>' + Q +
                    ' comment</span>  <span class="dd"> <i class="icon-time"></i> ' + o + '</span> <span class="dm">' + M + '</span> <span class="dy">' +
                    n + "</span>" + k + " " + j + "</div></li>"
            }
            b("ul", d).append(P);
            b(g.idcontaint + "  li:first-child .uj_thumb").hover(function () {
                b(g.idcontaint).find(".nb_slide_icon ").stop().animate({
                    top: 0
                }, {
                    queue: false,
                    duration: 300
                })
            }, function () {
                b(g.idcontaint).find(".nb_slide_icon ").stop().animate({
                    top: "-60px"
                }, {
                    queue: false,
                    duration: 300
                })
            });
            if(g.animated) {
                b("ul", d).addClass("scroll-item");
                b(g.idcontaint + " .box-content").flexslider({
                    animation: "slide",
                    selector: ".scroll-item > li",
                    animationLoop: true,
                    itemWidth: 240,
                    pauseOnHover: true,
                    move: 3,
                    itemMargin: 0,
                    minItems: 3,
                    mousewheel: false,
                    maxItems: 4
                })
            } else {
                if(g.tagName != false) {
                    d.append('<h2 class="uj-box-title"><a href="/search/label/' + encodeURIComponent(g.tagName) +
                        '?&max-results=7"><i class="icon-list-ul"></i></a></h2>')
                }
            }
            d.removeClass(g.loadingClass)
        }, "jsonp")
    })(jQuery)
}

function ShowPost2(a) {
    (function (b) {
        var g = {
            blogURL: "",
            MaxPost: 5,
            idcontaint: "",
            FirstImageSize: 600,
            ImageSize: 300,
            Summarylength: 90,
            animated: false,
            loadingClass: "loadingz",
            pBlank: "",
            MonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            tagName: false
        };
        g = b.extend({}, g, a);
        var d = b(g.idcontaint);
        d.html('<div class="box-content"><ul></ul></div>').addClass(g.loadingClass);
        b.get((g.blogURL === "" ? window.location.protocol + "//" + window.location.host : g.blogURL) + "/feeds/posts/summary" + (g.tagName === false ? "" :
            "/-/" + g.tagName) + "?max-results=" + g.MaxPost + "&orderby=published&alt=json-in-script", function (l) {
            var s, p, h, O, u, r, n, o, m, q, k, f, w, M = "",
                v = l.feed.entry;
            for(var t = 0; t < v.length; t++) {
                for(var e = 0; e < v[t].link.length; e++) {
                    if(v[t].link[e].rel == "alternate") {
                        s = v[t].link[e].href;
                        break
                    }
                }
                if("media$thumbnail" in v[t]) {
                    u = v[t].media$thumbnail.url
                } else {
                    u = g.pBlank
                } if("content" in v[t]) {
                    h = v[t].content.$t
                } else {
                    if("summary" in v[t]) {
                        h = v[t].summary.$t
                    } else {
                        h = ""
                    }
                }
                h = h.replace(/<\S[^>]*>/g, "");
                if(h.length > g.Summarylength) {
                    h = h.substring(0, g.Summarylength) + "..."
                }
                if(v[t] === v[0]) {
                    u = u.replace(/\/s[0-9]+\-c/g, "/s" + g.FirstImageSize + "-p");
                    if(u.indexOf("img.youtube.com/vi/") != -1) {
                        u = u.replace("default", "0")
                    }
                    n = "<p>" + h + "</p>"
                } else {
                    u = u.replace(/\/s[0-9]+\-c/g, "/s" + g.ImageSize + "-p");
                    n = ""
                }
                p = v[t].title.$t;
                w = v[t].author[0].name.$t;
                f = v[t].published.$t.substring(0, 10);
                o = f.substring(0, 4);
                m = f.substring(5, 7);
                q = f.substring(8, 10);
                k = g.MonthNames[parseInt(m, 10) - 1];
                r = '<div class="uj_thumb"><a title="' + p + " - Posted by " + w + '" class="thumblab" href="' + s + '"><img src="' + u +
                    '"/></a></div>';
                M += '<li><div class="inner-content" >' + r + "</div></li>"
            }
            b("ul", d).append(M);
            if(g.animated) {
                b("ul", d).addClass("scroll-item");
                b(g.idcontaint + " .box-content").flexslider({
                    animation: "slide",
                    selector: ".scroll-item > li",
                    animationLoop: true,
                    itemWidth: 240,
                    pauseOnHover: true,
                    move: 3,
                    itemMargin: 0,
                    minItems: 3,
                    mousewheel: false,
                    maxItems: 4
                })
            } else {
                if(g.tagName != false) {
                    d.append('<h2 class="uj-box-title"><a href="/search/label/' + encodeURIComponent(g.tagName) +
                        '?&max-results=7"><i class="icon-list-ul"></i></a></h2>')
                }
            }
            d.removeClass(g.loadingClass)
        }, "jsonp")
    })(jQuery)
}
window.labelinc = (function () {
    var b = function (g) {
        var f = g || {}, h = f.url_blog || window.location.host,
            a = f.id_labelcontent || "#labelbar";
        $.get("http://" + h + "/feeds/posts/summary?max-results=0&alt=json-in-script", function (e) {
            var l = e.feed.category,
                d = "";
            if(l !== undefined) {
                d = "<span>+</span><ul class='sb-item'>";
                for(var k = 0; k < l.length; k++) {
                    d += '<li><a href="/search/label/' + encodeURIComponent(l[k].term) + '?&max-results=7">' + l[k].term + "</a></li>"
                }
                d += "</ul>";
                $(a).html(d)
            } else {
                $(a).html("<span>No Label!</span>")
            }
        }, "jsonp");
        $(".menu_item div .lines").click(function () {
            $("#labelbar").slideToggle("fast");
            $(this).toggleClass("active");
            return false
        })
    };
    return function (a) {
        b(a)
    }
})();

function NewsTicker(a) {
    (function (b) {
        var e = {
            blogURL: "",
            MaxPost: 4,
            Speed: 0.1,
            direction: "ltr",
            titleText: "headlines",
            displayType: "reveal",
            Container: ".breaking-news",
            MonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        };
        e = b.extend({}, e, a);
        b(e.Container).addClass("loading");
        b.get((e.blogURL === "" ? window.location.protocol + "//" + window.location.host : e.blogURL) + "/feeds/posts/summary?max-results=" + e.MaxPost +
            "&orderby=published&alt=json-in-script", function (d) {
                var n, q, s, o, f, l, u, p, m, g, k, r = "",
                    t = d.feed.entry;
                if(t !== undefined) {
                    for(var h = 0; h < t.length; h++) {
                        for(var K = 0; K < t[h].link.length; K++) {
                            if(t[h].link[K].rel == "alternate") {
                                n = t[h].link[K].href
                            }
                        }
                        q = t[h].title.$t;
                        g = t[h].published.$t.substring(0, 10);
                        s = g.substring(0, 4);
                        o = g.substring(5, 7);
                        f = g.substring(8, 10);
                        l = e.MonthNames[parseInt(o, 10) - 1];
                        u = t[h].published.$t.substring(11, 16);
                        p = u.substring(0, 2);
                        m = u.substring(2, 5);
                        if(p < 12) {
                            k = "AM"
                        } else {
                            k = "PM"
                        } if(p === 0) {
                            p = 12
                        }
                        if(p > 12) {
                            p = p - 12
                        }
                        r += '<li><span title="' + l + " " + f + ", " + s + '" class="date">' + p + "" + m + " " + k + '</span> <a class="title" href="' +
                            n + '">' + q + "</a></li>"
                    }
                    b(e.Container).html('<h4>headlines</h4><ul id="newstick">' + r + "</ul>").removeClass("loading");
                    b("#newstick").ticker({
                        speed: e.Speed,
                        direction: e.direction,
                        titleText: e.titleText,
                        displayType: e.displayType
                    })
                } else {
                    b(e.Container).html("<span>No result!</span>").removeClass("loading")
                }
            }, "jsonp")
    })(jQuery)
}(function (a) {
    a(window).scroll(function () {
        if(a(this).scrollTop() > 250) {
            a("#top").removeAttr("href");
            a("#top").stop().animate({
                height: 50,
                opacity: 1
            }, {
                duration: 500,
                queue: false
            })
        } else {
            a("#top").stop().animate({
                height: 50,
                opacity: 0
            }, {
                duration: 500,
                queue: false
            })
        }
    });
    a(function () {
        a("#top").click(function () {
            a("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false
        })
    })
})(jQuery);

function PostSlide(b) {
    (function (a) {
        var f = {
            blogURL: "",
            MaxPost: 9,
            idcontaint: "",
            ImageSize: 500,
            Summarylength: 150,
            RandompostActive: true,
            loadingClass: "loadingz",
            pBlank: "",
            MonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            tagName: false
        };
        f = a.extend({}, f, b);
        var g = a(f.idcontaint);
        g.html('<div class="uj_slider_wrap"><ul class="slides"></ul></div>').addClass(f.loadingClass);
        var h = function (B) {
            var k, e, d, y, D, A, E, L, C, w, z, H, M = "",
                G = B.feed.entry;
            for(var F = 0; F < G.length; F++) {
                for(var x = 0; x < G[F].link.length; x++) {
                    if(G[F].link[x].rel == "alternate") {
                        k = G[F].link[x].href;
                        break
                    }
                }
                if("media$thumbnail" in G[F]) {
                    D = G[F].media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/s" + f.ImageSize);
                    if(G[F].media$thumbnail.url.indexOf("img.youtube.com") != -1) {
                        D = G[F].media$thumbnail.url.replace("default", "0")
                    }
                } else {
                    D = f.pBlank.replace(/\/s[0-9]+\-c/g, "/s" + f.ImageSize)
                } if("content" in G[F]) {
                    d = G[F].content.$t
                } else {
                    if("summary" in G[F]) {
                        d = G[F].summary.$t
                    }
                    else{
                        d = "<p></p>"
                    }
                    }
                }
                d = d.replace(/<\S[^>]*>/g, "");
                if(d.length > f.Summarylength) {
                    d = d.substring(0, f.Summarylength) + "..."
                }
                e = G[F].title.$t;
                z = G[F].author[0].name.$t;
                w = G[F].published.$t.substring(0, 10);
                A = w.substring(0, 4);
                E = w.substring(5, 7);
                L = w.substring(8, 10);
                C = f.MonthNames[parseInt(E, 10) - 1];
                H = '<a class="morelink" href="' + k + '">Read More</a>';
                M += '<li class="uj_slider_item"><div class="slider_img"><a title="' + e + '" class="" href="' + k + '"><img src="' + D +
                    '"/></a></div><div class="slider_caption"><h3><a href="' + k + '">' + e + "</a></h3><p> Posted by " + z + "</p>" + d + " <p>" + H +
                    "</p></div></li>"
            }
            g.find("ul.slides").append(M);
            if(!f.RandompostActive) {
                a(f.idcontaint + " .uj_slider_wrap").flexslider({
                    animation: "fade",
                    controlNav: true,
                    animationLoop: true,
                    smoothHeight: true,
                    pauseOnHover: true,
                    mousewheel: false
                });
                g.removeClass(f.loadingClass)
            }
        };
        a.get((f.blogURL === "" ? window.location.protocol + "//" + window.location.host : f.blogURL) + "/feeds/posts/summary" + (f.tagName === false ? "" :
            "/-/" + f.tagName) + "?max-results=0&orderby=published&alt=json-in-script", function (r) {
            Total_Posts_Number = r.feed.openSearch$totalResults.$t;
            if(Total_Posts_Number <= f.MaxPost) {
                f.MaxPost = Total_Posts_Number
            }
            var p = [];
            while(p.length < f.MaxPost) {
                var d = Math.ceil(Math.random() * Total_Posts_Number);
                var k = false;
                for(var e = 0; e < p.length; e++) {
                    if(p[e] == d) {
                        k = true;
                        break
                    }
                }
                if(!k) {
                    p[p.length] = d
                }
            }
            if(f.RandompostActive == true) {
                var s;
                for(var o = 0; o < f.MaxPost; o++) {
                    s = a.get((f.blogURL === "" ? window.location.protocol + "//" + window.location.host : f.blogURL) + "/feeds/posts/default" + (f.tagName ===
                            false ? "" : "/-/" + f.tagName) + "?start-index=" + p[o] + "&max-results=1&orderby=published&alt=json-in-script", h,
                        "jsonp")
                }
                a.when(s).done(function () {
                    a(f.idcontaint + " .uj_slider_wrap").flexslider({
                        animation: "fade",
                        selector: ".slides > li",
                        animationLoop: true,
                        smoothHeight: true,
                        pauseOnHover: true,
                        mousewheel: false,
                        initDelay: f.MaxPost * 700,
                        before: function () {
                            a(f.idcontaint).find(".slider_caption").stop().animate({
                                left: 100,
                                opacity: 0
                            }, 2000);
                            a(f.idcontaint).find(".caption").stop().animate({
                                left: 0,
                                opacity: 0
                            }, 2000)
                        },
                        after: function () {
                            a(f.idcontaint).find(".slider_caption").stop().animate({
                                left: 10,
                                opacity: 1
                            }, 2000);
                            a(f.idcontaint).find(".caption").stop().animate({
                                left: 50,
                                opacity: 1
                            }, 2000)
                        }
                    });
                    g.removeClass(f.loadingClass)
                })
            } else {
                a.get((f.blogURL === "" ? window.location.protocol + "//" + window.location.host : f.blogURL) + "/feeds/posts/default" + (f.tagName ===
                    false ? "" : "/-/" + f.tagName) + "?max-results=" + f.MaxPost + "&orderby=published&alt=json-in-script", h, "jsonp")
            }
        }, "jsonp")
    })(jQuery)
};
