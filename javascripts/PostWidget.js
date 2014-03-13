jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (m, l, b, d, k) {
        return jQuery.easing[jQuery.easing.def](m, l, b, d, k)
    },
    easeInQuad: function (m, l, b, d, k) {
        return d * (l /= k) * l + b
    },
    easeOutQuad: function (m, l, b, d, k) {
        return -d * (l /= k) * (l - 2) + b
    },
    easeInOutQuad: function (m, l, b, d, k) {
        if((l /= k / 2) < 1) {
            return d / 2 * l * l + b
        }
        return -d / 2 * ((--l) * (l - 2) - 1) + b
    },
    easeInCubic: function (m, l, b, d, k) {
        return d * (l /= k) * l * l + b
    },
    easeOutCubic: function (m, l, b, d, k) {
        return d * ((l = l / k - 1) * l * l + 1) + b
    },
    easeInOutCubic: function (m, l, b, d, k) {
        if((l /= k / 2) < 1) {
            return d / 2 * l * l * l + b
        }
        return d / 2 * ((l -= 2) * l * l + 2) + b
    },
    easeInQuart: function (m, l, b, d, k) {
        return d * (l /= k) * l * l * l + b
    },
    easeOutQuart: function (m, l, b, d, k) {
        return -d * ((l = l / k - 1) * l * l * l - 1) + b
    },
    easeInOutQuart: function (m, l, b, d, k) {
        if((l /= k / 2) < 1) {
            return d / 2 * l * l * l * l + b
        }
        return -d / 2 * ((l -= 2) * l * l * l - 2) + b
    },
    easeInQuint: function (m, l, b, d, k) {
        return d * (l /= k) * l * l * l * l + b
    },
    easeOutQuint: function (m, l, b, d, k) {
        return d * ((l = l / k - 1) * l * l * l * l + 1) + b
    },
    easeInOutQuint: function (m, l, b, d, k) {
        if((l /= k / 2) < 1) {
            return d / 2 * l * l * l * l * l + b
        }
        return d / 2 * ((l -= 2) * l * l * l * l + 2) + b
    },
    easeInSine: function (m, l, b, d, k) {
        return -d * Math.cos(l / k * (Math.PI / 2)) + d + b
    },
    easeOutSine: function (m, l, b, d, k) {
        return d * Math.sin(l / k * (Math.PI / 2)) + b
    },
    easeInOutSine: function (m, l, b, d, k) {
        return -d / 2 * (Math.cos(Math.PI * l / k) - 1) + b
    },
    easeInExpo: function (m, l, b, d, k) {
        return(l == 0) ? b : d * Math.pow(2, 10 * (l / k - 1)) + b
    },
    easeOutExpo: function (m, l, b, d, k) {
        return(l == k) ? b + d : d * (-Math.pow(2, -10 * l / k) + 1) + b
    },
    easeInOutExpo: function (m, l, b, d, k) {
        if(l == 0) {
            return b
        }
        if(l == k) {
            return b + d
        }
        if((l /= k / 2) < 1) {
            return d / 2 * Math.pow(2, 10 * (l - 1)) + b
        }
        return d / 2 * (-Math.pow(2, -10 * --l) + 2) + b
    },
    easeInCirc: function (m, l, b, d, k) {
        return -d * (Math.sqrt(1 - (l /= k) * l) - 1) + b
    },
    easeOutCirc: function (m, l, b, d, k) {
        return d * Math.sqrt(1 - (l = l / k - 1) * l) + b
    },
    easeInOutCirc: function (m, l, b, d, k) {
        if((l /= k / 2) < 1) {
            return -d / 2 * (Math.sqrt(1 - l * l) - 1) + b
        }
        return d / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + b
    },
    easeInElastic: function (o, n, a, p, q) {
        var b = 1.70158;
        var m = 0;
        var d = p;
        if(n == 0) {
            return a
        }
        if((n /= q) == 1) {
            return a + p
        }
        if(!m) {
            m = q * 0.3
        }
        if(d < Math.abs(p)) {
            d = p;
            var b = m / 4
        } else {
            var b = m / (2 * Math.PI) * Math.asin(p / d)
        }
        return -(d * Math.pow(2, 10 * (n -= 1)) * Math.sin((n * q - b) * (2 * Math.PI) / m)) + a
    },
    easeOutElastic: function (o, n, a, p, q) {
        var b = 1.70158;
        var m = 0;
        var d = p;
        if(n == 0) {
            return a
        }
        if((n /= q) == 1) {
            return a + p
        }
        if(!m) {
            m = q * 0.3
        }
        if(d < Math.abs(p)) {
            d = p;
            var b = m / 4
        } else {
            var b = m / (2 * Math.PI) * Math.asin(p / d)
        }
        return d * Math.pow(2, -10 * n) * Math.sin((n * q - b) * (2 * Math.PI) / m) + p + a
    },
    easeInOutElastic: function (o, n, a, p, q) {
        var b = 1.70158;
        var m = 0;
        var d = p;
        if(n == 0) {
            return a
        }
        if((n /= q / 2) == 2) {
            return a + p
        }
        if(!m) {
            m = q * (0.3 * 1.5)
        }
        if(d < Math.abs(p)) {
            d = p;
            var b = m / 4
        } else {
            var b = m / (2 * Math.PI) * Math.asin(p / d)
        } if(n < 1) {
            return -0.5 * (d * Math.pow(2, 10 * (n -= 1)) * Math.sin((n * q - b) * (2 * Math.PI) / m)) + a
        }
        return d * Math.pow(2, -10 * (n -= 1)) * Math.sin((n * q - b) * (2 * Math.PI) / m) * 0.5 + p + a
    },
    easeInBack: function (m, l, b, o, d, k) {
        if(k == undefined) {
            k = 1.70158
        }
        return o * (l /= d) * l * ((k + 1) * l - k) + b
    },
    easeOutBack: function (m, l, b, o, d, k) {
        if(k == undefined) {
            k = 1.70158
        }
        return o * ((l = l / d - 1) * l * ((k + 1) * l + k) + 1) + b
    },
    easeInOutBack: function (m, l, b, o, d, k) {
        if(k == undefined) {
            k = 1.70158
        }
        if((l /= d / 2) < 1) {
            return o / 2 * (l * l * (((k *= (1.525)) + 1) * l - k)) + b
        }
        return o / 2 * ((l -= 2) * l * (((k *= (1.525)) + 1) * l + k) + 2) + b
    },
    easeInBounce: function (m, l, b, d, k) {
        return d - jQuery.easing.easeOutBounce(m, k - l, 0, d, k) + b
    },
    easeOutBounce: function (m, l, b, d, k) {
        if((l /= k) < (1 / 2.75)) {
            return d * (7.5625 * l * l) + b
        } else {
            if(l < (2 / 2.75)) {
                return d * (7.5625 * (l -= (1.5 / 2.75)) * l + 0.75) + b
            } else {
                if(l < (2.5 / 2.75)) {
                    return d * (7.5625 * (l -= (2.25 / 2.75)) * l + 0.9375) + b
                } else {
                    return d * (7.5625 * (l -= (2.625 / 2.75)) * l + 0.984375) + b
                }
            }
        }
    },
    easeInOutBounce: function (m, l, b, d, k) {
        if(l < k / 2) {
            return jQuery.easing.easeInBounce(m, l * 2, 0, d, k) * 0.5 + b
        }
        return jQuery.easing.easeOutBounce(m, l * 2 - k, 0, d, k) * 0.5 + d * 0.5 + b
    }
});
(function (b) {
    b.fn.hoverTimeout = function (h, f, a, g) {
        return this.each(function () {
            var e = null,
                d = b(this);
            d.hover(function () {
                clearTimeout(e);
                e = setTimeout(function () {
                    f.call(d)
                }, h)
            }, function () {
                clearTimeout(e);
                e = setTimeout(function () {
                    g.call(d)
                }, a)
            })
        })
    }
})(jQuery);

function createTicker() {
    var a = jQuery(".breaking-news ul").children();
    tickerItems = new Array();
    a.each(function (b) {
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
    var a = tickerText.substr(c, 1);
    if(a == "<") {
        isInTag = true
    }
    if(a == ">") {
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

function actinave(b) {
    var d = window.location.href;
    b("#navi a").each(function () {
        if(this.href === d) {
            var e = b(this).parents("li").children("a").addClass("current")
        }
    });
    b("#navi ul").removeClass("hidden");
    b("#navi li").hoverTimeout(100, function () {
        b(this).parent("ul").css("overflow", "visible");
        b(this).children("ul").filter(":not(:animated)").slideDown()
    }, 500, function () {
        b(this).parent("ul").css("overflow", "visible");
        b(this).children("ul").slideUp(800, "easeInExpo")
    });
    b("#mobilenav").click(function () {
        b("#navi").slideToggle();
        b(this).toggleClass("active");
        return false
    });
    b("#top_mobilenav").click(function () {
        b("#PageList1 ul").slideToggle();
        b(this).toggleClass("active");
        return false
    });

    function a() {
        if(b(window).width() > 767) {
            b("#navi").css("display", "block").removeClass("suball")
        } else {
            if(b(window).width() <= 767 && b("#mobilenav").attr("class") === "active") {
                b("#navi").css("display", "block").addClass("suball")
            } else {
                if(b(window).width() <= 767 && b("#mobilenav").attr("class") !== "active") {
                    b("#navi").css("display", "none").addClass("suball")
                }
            }
        }
    }

    function k() {
        if(b(window).width() > 767) {
            b("#PageList1 ul").css("display", "block")
        } else {
            if(b(window).width() <= 767 && b("#top_mobilenav").attr("class") === "active") {
                b("#PageList1 ul").css("display", "block")
            } else {
                if(b(window).width() <= 767 && b("#top_mobilenav").attr("class") !== "active") {
                    b("#PageList1 ul").css("display", "none")
                }
            }
        }
    }
    a();
    k();
    b(window).resize(a);
    b(window).resize(k)
}

function seach(b) {
    (function (k) {
        var g = {
            blogURL: "",
            srcBlank: "",
            findText: "Search results for keyword",
            NotfindText: "No result!",
            Showthumb: true,
            LoadingText: "Searching...",
            scrthumbSize: 50,
            summaryLength: 100
        };
        g = k.extend({}, g, b);
        var m = k("#ajax-search-form"),
            h = m.find(":text");
        m.append('<div id="search-result"></div>');
        var a = k("#search-result");
        m.on("submit", function () {
            var d = h.val();
            a.show().html('<div class="load">' + g.LoadingText + "</div>");
            k.get((g.blogURL === "" ? window.location.protocol + "//" + window.location.host : g.blogURL) +
                "/feeds/posts/summary?alt=json-in-script&q=" + d + "&max-results=9999", function (t) {
                    var v = t.feed.entry,
                        x, e, r, w, l = "";
                    if(v !== undefined) {
                        l = "<h4>" + g.findText + " &quot;" + d + "&quot;</h4>";
                        l += '<a class="close" href="/">&times;</a><ol>';
                        for(var f = 0; f < v.length; f++) {
                            var s = new RegExp(d, "ig"),
                                r = v[f].title.$t.replace(s, "<mark>" + d + "</mark>");
                            for(var u = 0; u < v[f].link.length; u++) {
                                if(v[f].link[u].rel == "alternate") {
                                    w = v[f].link[u].href
                                }
                            }
                            if(g.summaryLength > 0) {
                                if("content" in v[f]) {
                                    x = v[f].content.$t
                                } else {
                                    if("summary" in v[f]) {
                                        x = v[f].summary.$t
                                    } else {
                                        x = ""
                                    }
                                }
                                x = x.replace(/<\S[^>]*>/g, "");
                                if(x.length > g.summaryLength) {
                                    x = x.substring(0, g.summaryLength) + "..."
                                }
                                x = x.replace(s, "<mark>" + d + "</mark>")
                            }
                            if(g.Showthumb === true) {
                                if("media$thumbnail" in v[f]) {
                                    e = v[f].media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/s" + g.scrthumbSize + "-c")
                                } else {
                                    e = g.srcBlank
                                }
                            }
                            l += '<li><a href="' + w + '" >' + (g.Showthumb === true ? '<img width="' + g.scrthumbSize + '" height="' + g.scrthumbSize +
                                '" src="' + e + '"/>' : "") + "<strong>" + r + "</strong></a>" + (g.summaryLength > 0 ? "<p>" + x + "</p>" : "") +
                                "</li>"
                        }
                        l += "</ol>";
                        a.html(l)
                    } else {
                        a.html('<a class="close" href="/">&times;</a><strong>' + g.NotfindText + "</strong>")
                    }
                }, "jsonp");
            return false
        });
        m.on("click", ".close", function () {
            a.fadeOut();
            return false
        })
    })(jQuery)
}

function ShowPost1(b) {
    (function (a) {
        var e = {
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
        e = a.extend({}, e, b);
        var f = a(e.idcontaint);
        f.html('<div class="box-content"><ul></ul></div>').addClass(e.loadingClass);
        a.get((e.blogURL === "" ? window.location.protocol + "//" + window.location.host : e.blogURL) + "/feeds/posts/summary" + (e.tagName === false ? "" :
            "/-/" + e.tagName) + "?max-results=" + e.MaxPost + "&orderby=published&alt=json-in-script", function (J) {
            var E, H, L, d, C, F, K, y, z, I, A, N, G, x, g = "",
                B = J.feed.entry;
            for(var D = 0; D < B.length; D++) {
                for(var O = 0; O < B[D].link.length; O++) {
                    if(B[D].link[O].rel == "alternate") {
                        E = B[D].link[O].href;
                        break
                    }
                }
                for(var N = 0; N < O; N++) {
                    if(B[D].link[N].rel == "replies" && B[D].link[N].type == "text/html") {
                        d = B[D].link[N].title.split(" ")[0];
                        break
                    }
                }
                if("media$thumbnail" in B[D]) {
                    C = B[D].media$thumbnail.url
                } else {
                    C = e.pBlank
                } if("content" in B[D]) {
                    L = B[D].content.$t
                } else {
                    if("summary" in B[D]) {
                        L = B[D].summary.$t
                    } else {
                        L = ""
                    }
                }
                L = L.replace(/<\S[^>]*>/g, "");
                if(L.length > e.Summarylength) {
                    L = L.substring(0, e.Summarylength) + "..."
                }
                if(B[D] === B[0]) {
                    C = C.replace(/\/s[0-9]+\-c/g, "/s" + e.FirstImageSize + "-p");
                    if(C.indexOf("i.ytimg.com/vi/") != -1) {
                        C = C.replace("default", "0")
                    }
                    K = "<p>" + L + "</p>"
                } else {
                    C = C.replace(/\/s[0-9]+\-c/g, "/s" + e.ImageSize + "-p");
                    K = ""
                }
                H = B[D].title.$t;
                G = B[D].author[0].name.$t;
                x = B[D].author[0].gd$image.src;
                N = B[D].published.$t.substring(0, 10);
                y = N.substring(0, 4);
                z = N.substring(5, 7);
                I = N.substring(8, 10);
                A = e.MonthNames[parseInt(z, 10) - 1];
                F = '<div class="uj_thumb"><a title="' + H + '" class=" " href="' + E + '"><img src="' + C +
                    '"/><span class="uj-vid"></span></a><span class="nb_slide_icon"><span class="inside"><span class="avatar"><img src="' + x +
                    '"/></span><span class="author">Written by <strong>' + G + "</strong></span></span></span></div>";
                j = '<a class="more-link" href="' + E + '">Read More</a>';
                g += '<li><div class="inner-content" >' + F + '<h3><a href="' + E + '">' + H +
                    '</a></h3><span class="post-meta"><span class="comt"><i class="icon-comments"></i>' + d +
                    ' comment</span>  <span class="dd"> <i class="icon-time"></i> ' + I + '</span> <span class="dm">' + A + '</span> <span class="dy">' +
                    y + ' - </span></span>" + K + " " + j + "</div></li>"
            }
            a("ul", f).append(g);
            a(e.idcontaint + "  li:first-child .uj_thumb").hover(function () {
                a(e.idcontaint).find(".nb_slide_icon ").stop().animate({
                    top: 0
                }, {
                    queue: false,
                    duration: 300
                })
            }, function () {
                a(e.idcontaint).find(".nb_slide_icon ").stop().animate({
                    top: "-60px"
                }, {
                    queue: false,
                    duration: 300
                })
            });
            if(e.animated) {
                a("ul", f).addClass("scroll-item");
                a(e.idcontaint + " .box-content").flexslider({
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
                if(e.tagName != false) {
                    f.append('<h2 class="uj-box-title"><a href="/search/label/' + encodeURIComponent(e.tagName) +
                        '?&max-results=7"><i class="icon-list-ul"></i></a></h2>')
                }
            }
            f.removeClass(e.loadingClass)
        }, "jsonp")
    })(jQuery)
}

function ShowPost2(b) {
    (function (a) {
        var e = {
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
        e = a.extend({}, e, b);
        var f = a(e.idcontaint);
        f.html('<div class="box-content"><ul></ul></div>').addClass(e.loadingClass);
        a.get((e.blogURL === "" ? window.location.protocol + "//" + window.location.host : e.blogURL) + "/feeds/posts/summary" + (e.tagName === false ? "" :
            "/-/" + e.tagName) + "?max-results=" + e.MaxPost + "&orderby=published&alt=json-in-script", function (J) {
            var E, H, K, d, C, F, I, x, y, G, z, L, A, g = "",
                B = J.feed.entry;
            for(var D = 0; D < B.length; D++) {
                for(var N = 0; N < B[D].link.length; N++) {
                    if(B[D].link[N].rel == "alternate") {
                        E = B[D].link[N].href;
                        break
                    }
                }
                if("media$thumbnail" in B[D]) {
                    C = B[D].media$thumbnail.url
                } else {
                    C = e.pBlank
                } if("content" in B[D]) {
                    K = B[D].content.$t
                } else {
                    if("summary" in B[D]) {
                        K = B[D].summary.$t
                    } else {
                        K = ""
                    }
                }
                K = K.replace(/<\S[^>]*>/g, "");
                if(K.length > e.Summarylength) {
                    K = K.substring(0, e.Summarylength) + "..."
                }
                if(B[D] === B[0]) {
                    C = C.replace(/\/s[0-9]+\-c/g, "/s" + e.FirstImageSize + "-p");
                    if(C.indexOf("img.youtube.com/vi/") != -1) {
                        C = C.replace("default", "0")
                    }
                    I = "<p>" + K + "</p>"
                } else {
                    C = C.replace(/\/s[0-9]+\-c/g, "/s" + e.ImageSize + "-p");
                    I = ""
                }
                H = B[D].title.$t;
                A = B[D].author[0].name.$t;
                L = B[D].published.$t.substring(0, 10);
                x = L.substring(0, 4);
                y = L.substring(5, 7);
                G = L.substring(8, 10);
                z = e.MonthNames[parseInt(y, 10) - 1];
                F = '<div class="uj_thumb"><a title="' + H + " - Posted by " + A + '" class="thumblab" href="' + E + '"><img src="' + C +
                    '"/></a></div>';
                g += '<li><div class="inner-content" >' + F + "</div></li>"
            }
            a("ul", f).append(g);
            if(e.animated) {
                a("ul", f).addClass("scroll-item");
                a(e.idcontaint + " .box-content").flexslider({
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
                if(e.tagName != false) {
                    f.append('<h2 class="uj-box-title"><a href="/search/label/' + encodeURIComponent(e.tagName) +
                        '?&max-results=7"><i class="icon-list-ul"></i></a></h2>')
                }
            }
            f.removeClass(e.loadingClass)
        }, "jsonp")
    })(jQuery)
}
window.labelinc = (function () {
    var a = function (e) {
        var k = e || {}, d = k.url_blog || window.location.host,
            b = k.id_labelcontent || "#labelbar";
        $.get("http://" + d + "/feeds/posts/summary?max-results=0&alt=json-in-script", function (h) {
            var f = h.feed.category,
                m = "";
            if(f !== undefined) {
                m = "<span>+</span><ul class='sb-item'>";
                for(var g = 0; g < f.length; g++) {
                    m += '<li><a href="/search/label/' + encodeURIComponent(f[g].term) + '?&max-results=7">' + f[g].term + "</a></li>"
                }
                m += "</ul>";
                $(b).html(m)
            } else {
                $(b).html("<span>No Label!</span>")
            }
        }, "jsonp");
        $(".menu_item div .lines").click(function () {
            $("#labelbar").slideToggle("fast");
            $(this).toggleClass("active");
            return false
        })
    };
    return function (b) {
        a(b)
    }
})();

function NewsTicker(b) {
    (function (a) {
        var d = {
            blogURL: "",
            MaxPost: 4,
            Speed: 0.1,
            direction: "ltr",
            titleText: "headlines",
            displayType: "reveal",
            Container: ".breaking-news",
            MonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        };
        d = a.extend({}, d, b);
        a(d.Container).addClass("loading");
        a.get((d.blogURL === "" ? window.location.protocol + "//" + window.location.host : d.blogURL) + "/feeds/posts/summary?max-results=" + d.MaxPost +
            "&orderby=published&alt=json-in-script", function (D) {
                var J, I, v, x, C, z, F, w, y, B, e, H = "",
                    G = D.feed.entry;
                if(G !== undefined) {
                    for(var A = 0; A < G.length; A++) {
                        for(var E = 0; E < G[A].link.length; E++) {
                            if(G[A].link[E].rel == "alternate") {
                                J = G[A].link[E].href
                            }
                        }
                        I = G[A].title.$t;
                        B = G[A].published.$t.substring(0, 10);
                        v = B.substring(0, 4);
                        x = B.substring(5, 7);
                        C = B.substring(8, 10);
                        z = d.MonthNames[parseInt(x, 10) - 1];
                        F = G[A].published.$t.substring(11, 16);
                        w = F.substring(0, 2);
                        y = F.substring(2, 5);
                        if(w < 12) {
                            e = "AM"
                        } else {
                            e = "PM"
                        } if(w === 0) {
                            w = 12
                        }
                        if(w > 12) {
                            w = w - 12
                        }
                        H += '<li><span title="' + z + " " + C + ", " + v + '" class="date">' + w + "" + y + " " + e + '</span> <a class="title" href="' +
                            J + '">' + I + "</a></li>"
                    }
                    a(d.Container).html('<h4>headlines</h4><ul id="newstick">' + H + "</ul>").removeClass("loading");
                    a("#newstick").ticker({
                        speed: d.Speed,
                        direction: d.direction,
                        titleText: d.titleText,
                        displayType: d.displayType
                    })
                } else {
                    a(d.Container).html("<span>No result!</span>").removeClass("loading")
                }
            }, "jsonp")
    })(jQuery)
}(function (b) {
    b(window).scroll(function () {
        if(b(this).scrollTop() > 250) {
            b("#top").removeAttr("href");
            b("#top").stop().animate({
                height: 50,
                opacity: 1
            }, {
                duration: 500,
                queue: false
            })
        } else {
            b("#top").stop().animate({
                height: 50,
                opacity: 0
            }, {
                duration: 500,
                queue: false
            })
        }
    });
    b(function () {
        b("#top").click(function () {
            b("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false
        })
    })
})(jQuery);

function PostSlide(a) {
    (function (b) {
        var k = {
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
        k = b.extend({}, k, a);
        var e = b(k.idcontaint);
        e.html('<div class="uj_slider_wrap"><ul class="slides"></ul></div>').addClass(k.loadingClass);
        var d = function (g) {
            var p, q, r, m, K, h, J, t, f, o, l, u, s = "",
                v = g.feed.entry;
            for(var I = 0; I < v.length; I++) {
                for(var n = 0; n < v[I].link.length; n++) {
                    if(v[I].link[n].rel == "alternate") {
                        p = v[I].link[n].href;
                        break
                    }
                }
                if("media$thumbnail" in v[I]) {
                    K = v[I].media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/s" + k.ImageSize);
                    if(v[I].media$thumbnail.url.indexOf("img.youtube.com") != -1) {
                        K = v[I].media$thumbnail.url.replace("default", "0")
                    }
                } else {
                    K = k.pBlank.replace(/\/s[0-9]+\-c/g, "/s" + k.ImageSize)
                } if("content" in v[I]) {
                    r = v[I].content.$t
                } else {
                    if("summary" in v[I]) {
                        r = v[I].summary.$t
                    } else {
                        r = "<p></p>"
                    }
                }
                r = r.replace(/<\S[^>]*>/g, "");
                if(r.length > k.Summarylength) {
                    r = r.substring(0, k.Summarylength) + "..."
                }
                q = v[I].title.$t;
                l = v[I].author[0].name.$t;
                o = v[I].published.$t.substring(0, 10);
                h = o.substring(0, 4);
                J = o.substring(5, 7);
                t = o.substring(8, 10);
                f = k.MonthNames[parseInt(J, 10) - 1];
                u = '<a class="morelink" href="' + q + '">Read More »</a>';
                s += '<li class="uj_slider_item"><div class="slider_img"><a title="' + q + '" class="" href="' + p + '"><img src="' + K +
                    '"/></a></div><div class="slider_caption"><h3><a href="' + p + '">' + q + "</a></h3><p> Posted by " + l + "</p>" + r + " <p>" + u +
                    "</p></div></li>"
            }
            e.find("ul.slides").append(s);
            if(!k.RandompostActive) {
                b(k.idcontaint + " .uj_slider_wrap").flexslider({
                    animation: "fade",
                    controlNav: true,
                    animationLoop: true,
                    smoothHeight: true,
                    pauseOnHover: true,
                    mousewheel: false
                });
                e.removeClass(k.loadingClass)
            }
        };
        b.get((k.blogURL === "" ? window.location.protocol + "//" + window.location.host : k.blogURL) + "/feeds/posts/summary" + (k.tagName === false ? "" :
            "/-/" + k.tagName) + "?max-results=0&orderby=published&alt=json-in-script", function (q) {
            Total_Posts_Number = q.feed.openSearch$totalResults.$t;
            if(Total_Posts_Number <= k.MaxPost) {
                k.MaxPost = Total_Posts_Number
            }
            var f = [];
            while(f.length < k.MaxPost) {
                var m = Math.ceil(Math.random() * Total_Posts_Number);
                var h = false;
                for(var l = 0; l < f.length; l++) {
                    if(f[l] == m) {
                        h = true;
                        break
                    }
                }
                if(!h) {
                    f[f.length] = m
                }
            }
            if(k.RandompostActive == true) {
                var n;
                for(var g = 0; g < k.MaxPost; g++) {
                    n = b.get((k.blogURL === "" ? window.location.protocol + "//" + window.location.host : k.blogURL) + "/feeds/posts/default" + (k.tagName ===
                            false ? "" : "/-/" + k.tagName) + "?start-index=" + f[g] + "&max-results=1&orderby=published&alt=json-in-script", d,
                        "jsonp")
                }
                b.when(n).done(function () {
                    b(k.idcontaint + " .uj_slider_wrap").flexslider({
                        animation: "fade",
                        selector: ".slides > li",
                        animationLoop: true,
                        smoothHeight: true,
                        pauseOnHover: true,
                        mousewheel: false,
                        initDelay: k.MaxPost * 700,
                        before: function () {
                            b(k.idcontaint).find(".slider_caption").stop().animate({
                                left: 100,
                                opacity: 0
                            }, 2000);
                            b(k.idcontaint).find(".caption").stop().animate({
                                left: 0,
                                opacity: 0
                            }, 2000)
                        },
                        after: function () {
                            b(k.idcontaint).find(".slider_caption").stop().animate({
                                left: 10,
                                opacity: 1
                            }, 2000);
                            b(k.idcontaint).find(".caption").stop().animate({
                                left: 50,
                                opacity: 1
                            }, 2000)
                        }
                    });
                    e.removeClass(k.loadingClass)
                })
            } else {
                b.get((k.blogURL === "" ? window.location.protocol + "//" + window.location.host : k.blogURL) + "/feeds/posts/default" + (k.tagName ===
                    false ? "" : "/-/" + k.tagName) + "?max-results=" + k.MaxPost + "&orderby=published&alt=json-in-script", d, "jsonp")
            }
        }, "jsonp")
    })(jQuery)
};
