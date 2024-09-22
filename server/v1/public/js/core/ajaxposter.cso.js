var Poster = new function() {
    var isDocspaceDomainDefined = (typeof window.DocspaceDomain === "string" && window.DocspaceDomain !== "");

    _getBaseApiUrl = function(region) {
        var key = "";
        for (var i = 0, n = window.RegionDbEntities.length; i < n; i++) {
            if (window.RegionDbEntities[i].RegionDbKey == region) {
                key = window.RegionDbEntities[i].HostingRegion;
                break;
            }
        }
        if (isDocspaceDomainDefined) {
            return $.format(window.DocspaceRegistrationApiUrl, key);
        }
        return $.format(window.RegistrationApiUrl, key);
    };

    _postToAffiliate = function(data) {
        try {
            if (data.errors.length)
                return;
            $.ajax({
                type: "POST",
                url: "affiliate.ashx",
                async: false,
                data: {
                    id: data.tenant.tenantId,
                    alias: data.tenant.tenantAlias,
                    region: data.tenant.hostedRegion
                }
            });
        } catch (ex) {}
    };

    this.PostRegister = function(data, onComplete) {
        var url = _getBaseApiUrl(data.region) + "/register";

        if (typeof (window.AffiliateId) != "undefined" && window.AffiliateId != "") {
            data = $.extend(data, {
                affiliateId: window.AffiliateId
            });
        }

        data.spam = !!+data.spam;
        data.calls = !!+data.calls;
        var postedData = isDocspaceDomainDefined ? JSON.stringify(data) : data;
        var contentType = isDocspaceDomainDefined ? "application/json" : "application/x-www-form-urlencoded; charset=UTF-8";

        try {
            $.ajax({
                type: "POST",
                url: url,
                data: postedData,
                contentType: contentType,
                crossDomain: true,
                success: function(response) {
                    if (window.AffiliateEnabled == "true") {
                        _postToAffiliate(response);
                    }
                    var coupon = response.tenant.portalName + " {0}% off";
                    var responseDomain = response.tenant.domain;
                    region = responseDomain.substring(responseDomain.indexOf("."));
                    if (!response.hasOwnProperty("error")) {
                        data = $.extend(data, {
                            type: 'registerFreeCloud',
                            ownerId: response.tenant.ownerId,
                            coupon: coupon,
                            region: region,
                            tenantId: response.tenant.tenantId
                        });
                        $.post("post.ashx", data, function(response) {});
                    }
                    if (typeof (onComplete) == 'function') {
                        onComplete(response);
                    }
                },
                error: function() {
                    onErrorRegisterFreeCloud(arguments[0].responseJSON || "Poster.PostRegister response error");
                    console.error(arguments[0].responseJSON);
                    onComplete(arguments[0].responseJSON || {
                        error: arguments[1]
                    });
                }
            });
        } catch (ex) {
            onErrorRegisterFreeCloud(ex.message);
            onComplete({
                error: ex
            });
        }

        function onErrorRegisterFreeCloud(errorMessage1) {
            data = $.extend({
                "data": data
            }, {
                type: 'registerFreeCloudError',
                errorMessage: errorMessage1
            });
            $.post("post.ashx", data, function(response) {});
        }
    };

    this.PostDocsCloudSignin = function(data, recaptchaLang, onComplete) {
        var url = window.DocsCloudApiUrl + "?culture=" + recaptchaLang;
        try {
            $.ajax({
                type: "POST",
                url: url,
                data: JSON.stringify(data),
                contentType: "application/json",
                crossDomain: true,
                success: function(response) {
                    if (typeof (onComplete) == 'function') {
                        onComplete(response);
                    }
                },
                error: function() {
                    onComplete(arguments[0].responseJSON || {
                        error: arguments[1]
                    });
                }
            });
        } catch (ex) {
            onComplete({
                error: ex
            });
        }
    };

    this.PostSignin = function(oEM, oPVh, docspace, onComplete) {
        $.ajax({
            type: "POST",
            url: "post.ashx",
            data: "type=signin&email=" + encodeURIComponent(oEM) + "&passwordHash=" + encodeURIComponent(oPVh) + "&docspace=" + docspace,
            success: function(response) {
                if (typeof (onComplete) == 'function') {
                    onComplete(response);
                }
            }
        });
    };

    this.PostSigninBySocial = function(profile) {
        if (profile.IsFailed === true && typeof (profile.AuthorizationError) === "string") {
            $("#divSigninError").text(profile.AuthorizationError).show();
        } else {
            $.ajax({
                type: "POST",
                url: "post.ashx",
                data: "type=account&serialized=" + encodeURIComponent(profile.Serialized),
                success: function(response) {
                    SignInPortalOnCompleteBySocial(response);
                }
            });
        }
    };

    this.CheckPortalExists = function(portalName, region, onComplete) {
        $.ajax({
            type: "POST",
            url: _getBaseApiUrl(region) + "/validateportalname",
            data: {
                portalName: portalName
            },
            success: function(response) {
                if (typeof (onComplete) == 'function') {
                    if (typeof (response) === "string") {
                        response = $.parseJSON(response);
                    }
                    onComplete(response);
                }
            },
            error: function() {
                onComplete(arguments[0].responseJSON || {
                    error: arguments[1]
                });
            }
        });
    };

    this.PasswordRestore = function(email, docspace, onComplete) {
        $.post("post.ashx", {
            email: email,
            type: 'passwordrestore',
            docspace: docspace
        }, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PortalNameRestore = function(email, onComplete) {
        $.post("post.ashx", {
            email: email,
            type: 'portalnamerestore'
        }, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostNonProfitRequest = function(firstname, lastname, youare, email, url, portalname, onComplete) {
        $.post("post.ashx", {
            recaptchaResponse: grecaptcha.getResponse(),
            type: 'nonprofitrequest',
            firstname: firstname,
            lastname: lastname,
            youare: youare,
            email: email,
            url: url,
            portalName: portalname
        }, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.ValidateNonProfitRequest = function(firstname, lastname, youare, email, url, portalname, onComplete) {
        $.post("post.ashx", {
            type: 'validatenonprofitrequest',
            firstname: firstname,
            lastname: lastname,
            youare: youare,
            email: email,
            url: url,
            portalName: portalname
        }, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostCallbackForm = function(onComplete) {
        var data = $.extend(GetDataForPostFromCallBackForm(), {
            type: 'callbackform'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.SendSubscription = function(firstName, email, subscr_type, onComplete) {
        $.ajax({
            type: "POST",
            url: "post.ashx",
            data: "type=sendsubscription&firstName=" + encodeURIComponent(firstName) + "&email=" + encodeURIComponent(email) + "&subscr_type=" + subscr_type,
            success: function(response) {
                if (typeof (onComplete) == 'function') {
                    onComplete(response);
                }
            }
        });
    };

    this.ChangeSubscription = function(id, subscribe, newsonly, onComplete) {
        $.ajax({
            type: "POST",
            url: "post.ashx",
            data: "type=subscriptions&id=" + encodeURIComponent(id) + "&subscribe=" + subscribe + "&newsonly=" + newsonly,
            success: function(response) {
                if (typeof (onComplete) == 'function') {
                    onComplete(response);
                }
            }
        });
    };

    this.SendUnsubscribeReason = function(id, value, onComplete) {
        $.ajax({
            type: "POST",
            url: "post.ashx",
            data: "type=subscriptionreason&id=" + encodeURIComponent(id) + "&value=" + value,
            success: function(response) {
                if (typeof (onComplete) == 'function') {
                    onComplete(response);
                }
            }
        });
    };

    this.PostInstallFeedback = function(data, onComplete) {
        $.post("post.ashx", $.extend(data, {
            type: 'installfeedback'
        }), function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostIsTestEmail = function(data, onComplete) {
        $.post("post.ashx", $.extend(data, {
            type: 'istestemail'
        }), function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostDemoRequest = function(data, onComplete) {
        $.post("post.ashx", $.extend(data, {
            type: 'demorequest'
        }), function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostWebinarRequest = function(data, onComplete) {
        $.post("post.ashx", $.extend(data, {
            type: 'webinarrequest'
        }), function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostWhitepaperRequest = function(data, onComplete) {
        $.post("post.ashx", $.extend(data, {
            type: 'whitepaperrequest'
        }), function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostTrainingCoursesReques = function(data, onComplete) {
        $.post("post.ashx", $.extend(data, {
            type: 'trainingcoursesrequest'
        }), function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostRateApp = function(data, onComplete) {
        $.post("post.ashx", $.extend(data, {
            type: 'rateapp'
        }), function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostRateConverter = function(data, onComplete) {
        $.post("post.ashx", $.extend(data, {
            type: 'rateconverter'
        }), function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostPartnerRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'partnerrequest'
        });
        data.spam = !!+data.spam;
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostSurveyWSRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'surveyworkspacerequest'
        });
        data.spam = !!+data.spam;
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };
    
    this.PostWorkspaceEnterpriseDownloadRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'workspaceenterprisedownloadtrialrequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostDocsEnterpriseDownloadRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'docsenterprisedownloadrequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostDocsDeveloperRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'docsdeveloperrequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostDocsEnterpriseRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'docsenterpriserequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostDocSpaceEnterpriseRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'docspaceenterpriserequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.DocSpaceEnterpriseDownloadRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'docspaceenterprisedownloadrequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostDocumentBuilderRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'documentduilderrequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostSupportRequest = function(data, onComplete) {
        $.ajax({
            url: "post.ashx",
            type: "POST",
            data: data,
            contentType: false,
            processData: false,
            success: function(response) {
                if (typeof (onComplete) == 'function') {
                    onComplete(response);
                }
            }
        });
    };

    this.PostStopConvertRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'stopconvertrequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostDocsDeveloperDownloadRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'docsdeveloperdownloadtrialrequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostDocsRegistrationRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'docsregistrationrequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostInstallCanceledRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'installcanceledrequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.SaveMobilePhone = function(data, onComplete) {};
    this.ValidateSmsCode = function(data, onComplete) {};
    this.SendSmsCodeAgain = function(data, onComplete) {};

    this.PostHelpInfoRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'helpinforequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostInfluencerProgramRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'influencerprogramrequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostEventsContactFormRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'eventscontactrequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostApiPipedriveRequest = function(dataString, onComplete) {
        data = {
            data: dataString,
            type: 'postapipipedriverequest'
        };
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostLandingSecureOnlineRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'landinglecureonlinerequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostHCaptchaValidateRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'hcaptchavalidaterequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };

    this.PostPluginDeveloperCompetitonRequest = function(data, onComplete) {
        data = $.extend(data, {
            type: 'plugindevelopercompetitonrequest'
        });
        $.post("post.ashx", data, function(response) {
            if (typeof (onComplete) == 'function') {
                onComplete(response);
            }
        });
    };
    
};
