$(function() {
    // var videoPopupOpened = false;

    // $(".dp-v-t-title, .dp-v-image").click(function() {
    //     videoPopupOpened = true;
    //     if (window.innerWidth > 1152) {
    //         BlockUIManager.blockUI(".dp-popup-dialog", 1096, 618, 0);
    //         $(".blockUI.blockOverlay").css('background-color', '#000');
    //     } else {
    //         BlockUIManager.blockUI(".dp-popup-dialog", 1096, 300, 0);
    //         $(".blockUI.blockOverlay").css('background-color', '#000');
    //     }
    //     $(".dp-popup-dialog").addClass("open");
    // });

    // $(".dp-button-close").click(function() {
    //     $.unblockUI({
    //         fadeOut: 100
    //     });
    //     $(".dp-popup-dialog").removeClass("open");
    //     videoPopupOpened = false;
    // });

    // var hideVideoPopup = function(e) {
    //     var div = $(".dp-popup-container");
    //     if (!div.is(e.target) && div.has(e.target).length === 0) {
    //         $.unblockUI({
    //             fadeOut: 100
    //         });
    //         $(".dp-popup-dialog").removeClass("open");
    //         videoPopupOpened = false;
    //     }
    // };

    // $(document).mouseup(function(e) {
    //     if (videoPopupOpened) {
    //         hideVideoPopup(e);
    //     }
    // });

    // $(document).bind('touchstart', function(e) {
    //     if (videoPopupOpened) {
    //         hideVideoPopup(e);
    //     }
    // });

    var $dpFirstScreen = $(".dp-first-screen");
    var $targetForPaddingTop = $dpFirstScreen.find("h1");
    var elem = $("header");
    var h_padding = $targetForPaddingTop.css('padding-top');
    h_padding = 1.1 * removePx(h_padding);
    var bgColor, borderColor, percentColor;
    var top = $(window).scrollTop();

    scrollTopIf(top);

    $(window).resize(function() {
        h_padding = $targetForPaddingTop.css('padding-top');
        h_padding = 1.1 * removePx(h_padding);
    });

    $(window).scroll(function() {
        top = $(window).scrollTop();
        scrollTopIf(top);
    });

    function removePx(str) {
        var indPx = str.indexOf("px");
        str = (indPx != -1) ? str.substring(0, indPx) : str;
        return str;
    }

    function scrollTopIf(top) {
        top = $(window).scrollTop();
        if (top > 0) {
            if (top < h_padding) {
                percentColor = 1 - (h_padding - top) / h_padding;
                bgColor = "rgba(255, 255, 255, " + percentColor + ")";
                borderColor = "rgba(204, 204, 204, " + percentColor + ")";
                menuItemBorderColor = "rgba(255, 111, 61, " + percentColor + ")";
                elem.css({
                    'background': bgColor,
                    'border-bottom-color': borderColor
                });
            } else {
                elem.css('background', '#FFFFFF').css('border-bottom-color', '#CCCCCC');
            }
        } else {
            elem.css({
                'background': '',
                'border-bottom-color': ''
            });
        }
    }
    
    // if (typeof blogNewsDataObjectLocale != 'undefined') {
    //     blogNewsDataObject = _.merge(blogNewsDataObject, blogNewsDataObjectLocale);
    // }

    // var templateHtml = $("#blognews-template-list-item").html()
    //   , templateHtml2 = $("#blognews-template-list-item-2").html()
    //   , blogListHtml = blogListHtml2 = "";
    // var blogNewsCount = 0;
    // var blogNewsDataObjectKeys = [];
    // var blogNewsDataObjectLocaleKeys = [];

    // for (var key in blogNewsDataObject.news) {
    //     blogNewsDataObjectKeys.push(key);
    // }

    // for (var key in blogNewsDataObjectLocale.news) {
    //     blogNewsDataObjectLocaleKeys.push(key);
    // }

    // var blogNewsDatalocaleKey0 = blogNewsDataObjectLocaleKeys[0];
    // var isLocaleDifference = (blogNewsDatalocaleKey0 && blogNewsDataObjectKeys[0] !== blogNewsDatalocaleKey0);
    // var blogNewsMaxCount = 4;
    // var blogNewsMidCount = 2;

    // for (var key in blogNewsDataObject.news) {
    //     if (isLocaleDifference) {
    //         key = blogNewsDatalocaleKey0;
    //     }
    //     if (blogNewsCount < blogNewsMaxCount) {
    //         var articleDate = ""
    //           , articleDay = (new Date(blogNewsDataObject.news[key]["dateTime"])).getDate()
    //           , articleMonth = (new Date(blogNewsDataObject.news[key]["dateTime"])).getMonth()
    //           , articleYear = (new Date(blogNewsDataObject.news[key]["dateTime"])).getFullYear();
    //         articleDate = blogNewsDateTemplate.replace(/{{day}}/g, articleDay).replace(/{{month}}/g, monthsList[articleMonth]).replace(/{{year}}/g, articleYear);
    //         if (blogNewsCount < blogNewsMidCount) {
    //             blogListHtml += templateHtml.replace(/{{id}}/g, key).replace(/{{name}}/g, blogNewsDataObject.news[key]["name"]).replace(/{{date}}/g, articleDate).replace(/{{dateTime}}/g, blogNewsDataObject.news[key]["dateTime"]).replace(/{{bgImgURL}}/g, blogNewsDataObject.news[key]["img"]).replace(/{{blogUrl}}/g, blogNewsDataObject.news[key]["blogUrl"]).replace(/{{shortText}}/g, blogNewsDataObject.news[key].shortText);
    //         }
    //         blogNewsCount++;
    //     } else {
    //         break;
    //     }
    // }

    // $("#dp-blog-slider").html(blogListHtml);
    // $("#dp-blog-slider-2").html(blogListHtml2);
    // $(".dp-blog-img").each(function() {
    //     $(this).css("background-image", "url(.." + $(this).attr("data-img-url") + ")");
    // });

    // if (typeof defWebinarsDataObjectLocale != 'undefined') {
    //     defWebinarsDataObject = _.merge(defWebinarsDataObject, defWebinarsDataObjectLocale);
    // }

    // if (typeof authorsListLocale != 'undefined') {
    //     authorsList = _.merge(authorsList, authorsListLocale);
    // }

    // if (typeof languageListLocale != 'undefined') {
    //     languageList = _.merge(languageList, languageListLocale);
    // }

    // if (typeof solutionListLocale != 'undefined') {
    //     solutionList = _.merge(solutionList, solutionListLocale);
    // }

    // if (!sessionStorage.getItem('timezone')) {
    //     var tz = jstz.determine() || 'UTC';
    //     sessionStorage.setItem('timezone', tz.name());
    // }

    // var currTz = sessionStorage.getItem('timezone');
    // moment.locale(timeLocale);
    // var templateHtml = $("#defwebinars-template-list-item").html()
    //   , webinarsListHtml = "";
    // var webinarsCount = 0;
    // var webinarsDataObjectKeys = [];
    // var webinarsDataObjectLocaleKeys = [];

    // for (var key in defWebinarsDataObject.webinars) {
    //     webinarsDataObjectKeys.push(key);
    // }

    // for (var key in defWebinarsDataObjectLocale.webinars) {
    //     webinarsDataObjectLocaleKeys.push(key);
    // }

    // var webinarsDatalocaleKey0 = webinarsDataObjectLocaleKeys[0];
    // var isWebinarsLocaleDifference = (webinarsDatalocaleKey0 && webinarsDataObjectKeys[0] !== webinarsDatalocaleKey0);
    // var webinarsMaxCount = 2;

    // for (var key in defWebinarsDataObject.webinars) {
    //     if (isWebinarsLocaleDifference) {
    //         key = webinarsDatalocaleKey0;
    //     }
    //     if (webinarsCount < webinarsMaxCount) {
    //         var authorName = ""
    //           , languageIn = ""
    //           , webinarDate = ""
    //           , solutions = ""
    //           , separator = ""
    //           , articleDate = ""
    //           , articleStartDate = new Date(defWebinarsDataObject.webinars[key]["startDate"])
    //           , articleEndDate = new Date(defWebinarsDataObject.webinars[key]["endDate"])
    //           , articleMonthEnd = articleEndDate.getMonth()
    //           , articleDayEnd = articleEndDate.getDate()
    //           , articleYearEnd = articleEndDate.getFullYear()
    //           , articleMonthStart = articleStartDate.getMonth()
    //           , articleDayStart = articleStartDate.getDate()
    //           , articleYearStart = articleStartDate.getFullYear()
    //           , articleTimeStart = defWebinarsDataObject.webinars[key]["startTime"]
    //           , articleTimeEnd = defWebinarsDataObject.webinars[key]["endTime"]
    //           , articleTimeAMPM = defWebinarsDataObject.webinars[key]["AMPM"]
    //           , articleTimeToBeConfirmed = defWebinarsDataObject.webinars[key]["toBeConfirmed"];
    //         if (defWebinarsDataObject.webinars[key]["date"] != "n/a") {
    //             if (articleDayEnd == "1") {
    //                 articleDayEnd += dateFirst;
    //             }
    //             if (articleDayStart == "1") {
    //                 articleDayStart += dateFirst;
    //             }
    //             if (articleMonthStart == articleMonthEnd && articleYearEnd == 0) {
    //                 articleDate = dateTemplateMonthYear.replace(/{{month}}/g, monthsBasicList[articleMonthStart].charAt(0).toLocaleUpperCase() + monthsBasicList[articleMonthStart].slice(1)).replace(/{{year}}/g, articleYearStart);
    //             } else {
    //                 if (articleYearStart != articleYearEnd) {
    //                     articleDate = dateTemplateFromToDifferentYear.replace(/{{monthStart}}/g, monthsList[articleMonthStart]).replace(/{{dayStart}}/g, articleDayStart).replace(/{{yearStart}}/g, articleYearStart).replace(/{{month}}/g, monthsList[articleMonthEnd]).replace(/{{dayEnd}}/g, articleDayEnd).replace(/{{year}}/g, articleYearEnd);
    //                 } else {
    //                     if (articleMonthStart != articleMonthEnd) {
    //                         articleDate = dateTemplateFromToDifferentMonth.replace(/{{monthStart}}/g, monthsList[articleMonthStart]).replace(/{{dayStart}}/g, articleDayStart).replace(/{{month}}/g, monthsList[articleMonthEnd]).replace(/{{dayEnd}}/g, articleDayEnd).replace(/{{year}}/g, articleYearEnd);
    //                     } else {
    //                         if (articleDayStart != articleDayEnd) {
    //                             articleDate = dateTemplateFromTo.replace(/{{dayStart}}/g, articleDayStart).replace(/{{month}}/g, monthsList[articleMonthEnd]).replace(/{{dayEnd}}/g, articleDayEnd).replace(/{{year}}/g, articleYearEnd);
    //                         } else {
    //                             if (articleTimeStart != undefined) {
    //                                 articleDate = dateTemplateFromToDifferentTime.replace(/{{month}}/g, monthsList[articleMonthEnd]).replace(/{{dayEnd}}/g, articleDayEnd).replace(/{{year}}/g, articleYearEnd).replace(/{{startTime}}/g, articleTimeStart).replace(/{{endTime}}/g, articleTimeEnd).replace(/{{AMPM}}/g, articleTimeAMPM);
    //                             } else {
    //                                 if (articleTimeToBeConfirmed != undefined) {
    //                                     articleDate = dateTemplateToBeConfirmed.replace(/{{toBeConfirmed}}/g, articleTimeToBeConfirmed).replace(/{{year}}/g, articleYearEnd);
    //                                 } else {
    //                                     articleDate = dateTemplateSingle.replace(/{{month}}/g, monthsList[articleMonthEnd]).replace(/{{dayEnd}}/g, articleDayEnd).replace(/{{year}}/g, articleYearEnd);
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         } else {
    //             dateToday = new Date;
    //             webinarDate = timeNA;
    //         }
    //         for (var authorID in authorsList) {
    //             if (defWebinarsDataObject.webinars[key]["author"] == authorID) {
    //                 authorName = authorsList[authorID];
    //             }
    //         }
    //         for (var languageID in languageList) {
    //             if (defWebinarsDataObject.webinars[key]["language"] == languageID) {
    //                 languageIn = languageList[languageID]["in"];
    //             }
    //         }
    //         var target = defWebinarsDataObject.webinars[key]["target"];
    //         if (target == undefined) {
    //             target = "_self";
    //         }
    //         var place = defWebinarsDataObject.webinars[key]["place"];
    //         if (place == undefined) {
    //             place = eventOnline;
    //         }
    //         webinarsListHtml += templateHtml.replace(/{{title}}/g, defWebinarsDataObject.webinars[key]["title"]).replace(/{{language_in}}/g, languageIn).replace(/{{href}}/g, defWebinarsDataObject.webinars[key]["href"]).replace(/{{target}}/g, defWebinarsDataObject.webinars[key]["target"]).replace(/{{date}}/g, articleDate).replace(/{{author_id}}/g, defWebinarsDataObject.webinars[key]["author"]).replace(/{{author}}/g, authorName).replace(/{{description}}/g, defWebinarsDataObject.webinars[key]["description"]).replace(/{{bgImgURL}}/g, defWebinarsDataObject.webinars[key]["img"]).replace(/{{place}}/g, place);
    //         webinarsCount++;
    //     } else {
    //         break;
    //     }
    // }

    // $("#dp-webinars-slider").html(webinarsListHtml);

    // $(".dp-event-img").each(function() {
    //     $(this).css("background-image", "url(.." + $(this).attr("data-img-url") + ")");
    // });

    // if (!$dpFirstScreen.hasClass("zh")) {
    //     if (typeof defYoutubeDataObjectLocale != 'undefined') {
    //         defYoutubeDataObject = _.merge(defYoutubeDataObject, defYoutubeDataObjectLocale);
    //     }
    //     var youtubeList = defYoutubeDataObject.youtube
    //       , templateHtml = $("#defyoutube-template-list-item").html()
    //       , defYoutubeListHtml = "";
    //     src = defYoutubeDataObject["src"]
    //     id = defYoutubeDataObject["id"]
    //     videoUrl = defYoutubeDataObject["videoUrl"];
    //     nameVideo = defYoutubeDataObject["nameVideo"];
    //     var excludedValues = false;
    //     if (excluded.length) {
    //         excludedValues = true;
    //     }
    //     ;for (var key in youtubeList) {
    //         var shouldBeExcluded = false;
    //         if (excludedValues) {
    //             for (var i = 0; i < excluded.length; i++) {
    //                 if (excluded[i] == key) {
    //                     shouldBeExcluded = true;
    //                     break;
    //                 }
    //                 ;
    //             }
    //         }
    //         ;var youtubeDate = ""
    //           , youtubeDay = (new Date(defYoutubeDataObject.youtube[key]["dateTime"])).getDate()
    //           , youtubeMonth = (new Date(defYoutubeDataObject.youtube[key]["dateTime"])).getMonth()
    //           , youtubeYear = (new Date(defYoutubeDataObject.youtube[key]["dateTime"])).getFullYear();
    //         youtubeDate = youtubeDateTemplate.replace(/{{day}}/g, youtubeDay).replace(/{{month}}/g, monthsList[youtubeMonth]).replace(/{{year}}/g, youtubeYear);
    //         if (!shouldBeExcluded) {
    //             defYoutubeListHtml += templateHtml.replace(/{{id}}/g, key).replace(/{{bgImgURL}}/g, youtubeList[key]["bgImgURL"]).replace(/{{id}}/g, youtubeList[key]["id"]).replace(/{{videoUrl}}/g, youtubeList[key]["videoUrl"]).replace(/{{nameVideo}}/g, youtubeList[key]["nameVideo"]).replace(/{{date}}/g, youtubeDate).replace(/{{typeVideo}}/g, youtubeList[key]["typeVideo"]).replace(/{{videoTiming}}/g, youtubeList[key]["timeVideo"]);
    //         }
    //     }
    //     $("#dp-youtube-slider").html(defYoutubeListHtml);
    //     $(".dp-youtube-img").each(function() {
    //         $(this).css("background-image", "url(.." + $(this).attr("data-img-url") + ")");
    //     });
    // }

    // $(".slick-screens").slick({
    //     cssEase: 'linear',
    //     dots: true,
    //     dotsClass: 'my-dots-class',
    //     dotsClass: 'pict-dots',
    //     speed: 300
    // });
});
