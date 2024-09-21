;var widgetID;
var RegisterPortal = {
    isInit: false,
    languageKey: "us",
    erroFN: null,
    erroLN: null,
    erroEM: null,
    erroCN: null,
    erroPN: null,
    erroLg: null,
    erroPHN: null,
    erroPW: null,
    erroCS: null,
    erroRQST: null,
    oFN: null,
    oLN: null,
    oEM: null,
    oCN: null,
    oPN: null,
    oLg: null,
    oPHN: null,
    oCS: null,
    sRH: null,
    sAR: null,
    oPW: null,
    errorSelector: "div.error",
    oPrgs: null,
    oSignUpSbmt: null,
    recaptureFinishButtonText: "",
    isTestEmail: false,
    PhoneController_: new PhoneController(),
    _registerFinish: function(redirectionUrl) {
        if (window === window.top) {
            window.open(redirectionUrl, '_self');
        } else {
            try {
                window.top.postMessage(redirectionUrl, "*");
            } catch (e) {
                window.open(redirectionUrl, '_blank');
            }
        }
    },
    Init: function(oForm) {
        var bodyId = $('body').attr('id');
        if (this.isInit === false && oForm.length == 1) {
            this.oFN = oForm.find(".txtSignUpFirstName");
            this.oLN = oForm.find(".txtSignUpLastName");
            this.oEM = oForm.find(".txtSignUpEmail");
            this.oCN = oForm.find(".txtCompanyName");
            this.oPN = oForm.find(".txtSignUpPortalName");
            var greCAPTCHA = oForm.find(".g-recaptcha");
            this.oRC = greCAPTCHA.length ? greCAPTCHA : oForm.find(".h-captcha");
            this.oCS = oForm.find(".registNumberOfUsersSelect");
            this.oLg = oForm.find(".registLangSelect");
            this.sRH = oForm.find("select.signUpBaseDomainSelect");
            this.sAR = oForm.find("select.signUpAwsRegionSelect");
            this.oPW = oForm.find(".txtSignUpPassword");
            this.oSpam = oForm.find("input[name=spam]:checked");
            this.oCall = oForm.find("input[name=call]:checked");
            $(".dataForm .registNumberOfUsersSelect").tlCombobox();
            $(".dataForm .registLangSelect").tlCombobox();
            this.erroFN = this.oFN.parent().parent().find(this.errorSelector);
            this.erroLN = this.oLN.parent().parent().find(this.errorSelector);
            this.erroEM = this.oEM.parent().parent().find(this.errorSelector);
            this.erroPN = this.oPN.parents(".dataItem:first").find(this.errorSelector);
            this.erroPW = this.oPW.parent().parent().find(this.errorSelector);
            if (this.oCS.length) {
                this.erroCS = this.oCS.parents(".dataItem:first").find(this.errorSelector);
            }
            if (this.oLg.length) {
                this.erroLg = this.oLg.parents(".dataItem:first").find(this.errorSelector);
            }
            if (this.oCN.length) {
                this.erroCN = this.oCN.parents(".dataItem:first").find(this.errorSelector);
            }
            this.erroRC = this.oRC.parent().find(this.errorSelector);
            this.erroRQST = oForm.find(".divSignUpError");
            RegisterPortal._initPhoneControl(oForm.find(".txtSignUpPhone"));
            this.oPHN = this.PhoneController_.phoneControlContainer.find("input.phoneControlInput:first");
            this.erroPHN = oForm.find(".dataItem.dataItemPhone").find(this.errorSelector);
            oForm.find(".dataItem.dataItemPhone").removeClass("display-none");
            stepRegistrationForm.Init(bodyId);
            this.oSignUpSbmt = oForm.find(".sbmtSignUp ");
            this.oPrgs = oForm.find(".divSignUpProgress");
            this.recaptureFinishButtonText = oForm.find(".RecaptureFinishButtonText").val();
            var url_par = /\/(?:(\D{2})\/)?\D+\.aspx/.exec(location.pathname);
            if (url_par != null && typeof (url_par[1]) == "string" && url_par[1] != "") {
                this.languageKey = url_par[1];
            }
            $("#txtSignUpPortalName").focus(function() {
                if ($(this).val() == '') {
                    $("#hint-unique-acc-name").show();
                }
            });
            $("#txtSignUpPortalName").on('change input focusout', function() {
                setTimeout(function() {
                    $("#hint-unique-acc-name").fadeOut();
                }, 1000);
            });
            var emailLocStore = localStorage.getItem("email");
            if (emailLocStore !== null) {
                this.oEM.val(emailLocStore);
                if (localStorage.getItem("email").length > 0) {
                    this.oEM.focus();
                    setTimeout( () => {
                        this.oEM.blur();
                    }
                    , 1000);
                }
            }
            var accountLocStore = localStorage.getItem("account");
            if (accountLocStore === "[object HTMLInputElement]") {
                localStorage.removeItem("account");
            } else if (accountLocStore !== null) {
                this.oPN.val(accountLocStore);
                if (localStorage.getItem("account").length > 0) {
                    this.oPN.focus();
                    setTimeout( () => {
                        this.oPN.blur();
                    }
                    , 1000);
                }
            }
            $(".sbmtSignUp ").addClass("disabled");
            $("input").on("change focusout", function() {
                if (RegisterPortal.IsAllFieldsAreValid()) {
                    $(".sbmtSignUp ").removeClass("disabled");
                } else {
                    $(".sbmtSignUp ").addClass("disabled");
                }
            });
            $("select.registNumberOfUsersSelect").on("change focusout", function() {
                $("select.registNumberOfUsersSelect:first").parents(".dataItem:first").find(RegisterPortal.errorSelector).hide();
            });
            $("select.registLangSelect").on("change focusout", function() {
                $("select.registLangSelect:first").parents(".dataItem:first").find(RegisterPortal.errorSelector).hide();
            });
            this.isInit = true;
            this.oEM.on("change", function() {
                var txtEmailValue = $(this).val();
                if (txtEmailValue) {
                    data = {
                        email: txtEmailValue
                    };
                    function onComplete(response) {
                        if (response.status == "istestemail") {
                            RegisterPortal.isTestEmail = response.message == "True";
                        }
                    }
                    Poster.PostIsTestEmail(data, onComplete);
                }
            });
        }
    },
    InitPreDataAndEvents: function() {
        var selectorElts = $(".signUpBaseDomainSelect")
          , html = ""
          , region = {};
        var isDocspaceDomainDefined = (typeof window.DocspaceDomain === "string" && window.DocspaceDomain !== "");
        if (isDocspaceDomainDefined) {
            var i = 0
              , n = window.RegionDbEntities.length;
            for (i; i < n; i++) {
                if (window.RegionDbEntities[i].RegionDbKey === window.DocspaceDomain.split(".")[1]) {
                    break;
                }
            }
            var docspaceDbKey = window.RegionDbEntities.splice(i, 1)[0];
            window.RegionDbEntities.unshift(docspaceDbKey);
        }
        for (var i = 0, n = window.RegionDbEntities.length; i < n; i++) {
            region = window.RegionDbEntities[i];
            region.HostingRegionInfo = window.hostingRegionInfo.GetByKey(region.RegionDbKey);
            html += ["<option value='", region.RegionDbKey ? region.RegionDbKey : " ", "' ", "data-domain='", region.Domain, "'", region.RegionDbKey == window.IPGeolocationInfo.regionDbEntity.RegionDbKey ? " selected='selected'" : "", ">", region.HostingRegionInfo, "</option>"].join('');
            if (region.RegionDbKey == window.IPGeolocationInfo.regionDbEntity.RegionDbKey) {
                $(".signUpBaseDomainValue").text("." + region.Domain);
            }
        }
        this.sRH.html(html);
        if (window.RegionDbEntities.length > 1) {
            this.sRH.off("change").on("change", function(evt) {
                var $selectedItem = $(this).children("option:selected");
                RegisterPortal.ChangeHostingRegion($selectedItem.attr("data-domain"));
            }).tlCombobox();
            this.sRH.parents('.dataItemHostingRegion:first').find('.helpSwitcher:first').click(function() {
                $(this).helper({
                    BlockHelperElt: $(this).parents('.dataItemHostingRegion:first').find(".hostingRegionHelper:first")
                });
            });
        }
        if (isDocspaceDomainDefined) {
            $(".signUpBaseDomainValue").text("." + window.DocspaceDomain);
            $(".dataItemHostingRegion .combobox-wrapper li[data-value='" + window.DocspaceDomain.split(".")[1] + "']").click();
            var htmlAwsRegion = "";
            var is_testingON = window._testingON;
            if (is_testingON) {
                var regionsName = "testRegions";
                $(".dataItemAWSHostingRegion").removeClass("display-none");
            } else {
                var regionsName = "productionRegions";
            }
            var awsHostingRegionsLength = window.awsHostingRegionInfo[regionsName].length;
            for (var i = 0, n = awsHostingRegionsLength; i < n; i++) {
                region = window.awsHostingRegionInfo[regionsName][i];
                htmlAwsRegion += ["<option value='", region.apiKey, "' ", region.key == window.IPGeolocationInfo.regionDbEntity.RegionDbKey ? " selected='selected'" : "", ">", region.info, "</option>"].join('');
            }
            this.sAR.html(htmlAwsRegion);
            this.sAR.tlCombobox();
        }
    },
    _initPhoneControl: function($input) {
        this.PhoneController_.Init($input, window.countryPhoneListHelper.countryList, [window.IPGeolocationInfo.CountryCallingCodeKey.toUpperCase(), window.IPGeolocationInfo.Key.toUpperCase(), $("#LanguageSelector").attr("data-country"), "US"]);
    },
    InitOutDialog: function() {
        if ($("body").hasClass("desktop") || !window.QuitDialogEnabled || CookieManager.getCookie("viewedOutDialog"))
            return;
        $(document).on("mouseleave", function(e) {
            if (e.clientY < 0) {
                displayModalPanel("outDialog", {
                    overlayBackgroundColor: "black",
                    overlayOpacity: "0.7"
                });
                $(".blockUI.blockOverlay").css("z-index", 1001);
                $(".blockUI.blockDialog").css("z-index", 1002);
                CookieManager.setCookie("viewedOutDialog", "true", 1);
            }
        });
        $("#outDialog .continue-btn").click(function() {
            $.unblockUI();
            $(document).off("mouseleave");
        });
    },
    GetDataForPost: function(callback) {
        var isReCAPTCHA = !(typeof (window.hcaptcha) != "undefined");
        var portalName = $.trim($(RegisterPortal.oPN).val().toLowerCase())
          , phone = ""
          , captchaResponse = isReCAPTCHA ? window.grecaptcha.getResponse() : hcaptcha.getResponse(widgetID)
          , partnerId = $.getURLParam("pid")
          , phone = this.PhoneController_.GetPhone();
        var spam = +$("#spam").is(":checked");
        var calls = 1;
        var campaign = CookieManager.getCookie("utm_campaign");
        if ($.trim(phone) == this.PhoneController_.selectedCountryPhone.country_code) {
            phone = "";
        }
        var password = $.trim(RegisterPortal.oPW.val());
        var size = RegisterPortal.oPW.data("hashsize");
        var iterations = RegisterPortal.oPW.data("hashiterations");
        var salt = RegisterPortal.oPW.data("hashsalt");
        var bits = sjcl.misc.pbkdf2(password, salt, iterations);
        bits = bits.slice(0, size / 32);
        var passwordHash = sjcl.codec.hex.fromBits(bits);
        var isDesktop = $("body").is(".desktop");
        callback({
            recaptchaResponse: captchaResponse,
            recaptchaType: isReCAPTCHA ? 0 : 3,
            region: RegisterPortal.sRH.val() == " " ? '' : RegisterPortal.sRH.val(),
            awsRegion: RegisterPortal.sAR.val() == " " ? '' : RegisterPortal.sAR.val(),
            firstName: $.trim(RegisterPortal.oFN.val()),
            lastName: $.trim(RegisterPortal.oLN.val()),
            email: $.trim(RegisterPortal.oEM.val()),
            employeesCount: $("select.registNumberOfUsersSelect:first").val(),
            choiceLanguage: $("select.registLangSelect:first").val() || "",
            phone: phone,
            companyName: $.trim(RegisterPortal.oCN.val()),
            portalName: portalName,
            partnerId: partnerId != null ? partnerId : "",
            affiliateId: getClientReferenceId() || "",
            affiliateToken: getAffiliateToken() || "",
            industry: 0,
            timeZoneName: window.IPGeolocationInfo.TimezoneName != "" ? window.IPGeolocationInfo.TimezoneName : jstz.determine_timezone().name(),
            language: RegisterPortal.languageKey,
            passwordHash: passwordHash,
            module: isDesktop ? "E67BE73D-F9AE-4ce1-8FEC-1880CB518CB4" : null,
            spam: spam,
            calls: calls,
            campaign: campaign,
            source: isDesktop ? "desktop" : "site",
        });
    },
    CreatePortal: function() {
        if (RegisterPortal.isInit === false) {
            return;
        }
        if (RegisterPortal.oSignUpSbmt.hasClass("disabled")) {
            return;
        }
        RegisterPortal.ClearErrors();
        var result = RegisterPortal.Verify();
        if (result != null) {
            RegisterPortal.PrintErrors(result);
            return;
        }
        RegisterPortal.oSignUpSbmt.addClass("disabled");
        RegisterPortal.erroRQST.hide();
        RegisterPortal.oPrgs.show();
        RegisterPortal.GetDataForPost(function(data) {
            Poster.PostRegister(data, RegisterPortal.OnComplete);
        });
    },
    OnComplete: function(response) {
        if (response.hasOwnProperty("error")) {
            RegisterPortal.oPrgs.hide();
            if (response.error == "tooMuchAttempts") {
                console.log("tooMuchAttempts");
                RegisterPortal.oSignUpSbmt.removeClass("disabled");
                RecaptchaController.DisplayRecaptcha(RegisterPortal.recaptureFinishButtonText, "", RegisterPortal.CheckRecapchaComplete);
            } else if (response.error == "recaptchaInvalid") {
                !(typeof (window.hcaptcha) != "undefined") ? grecaptcha.reset() : hcaptcha.reset(widgetID);
                $(".captcha_errorArea").show();
                RegisterPortal.oSignUpSbmt.removeClass("disabled");
            } else {
                var mess = errorMessage.GetMessageByType(response.error);
                var errors = [{
                    error: response.error,
                    message: mess || response.message
                }];
                RegisterPortal.oPrgs.hide();
                RegisterPortal.oSignUpSbmt.removeClass("disabled");
                RegisterPortal.PrintErrors(errors, response);
            }
            return;
        } else {
            RegisterPortal.RedirectToRegisteredPortal(response.reference, response.tenant.ownerId);
        }
    },
    CheckRecapchaComplete: function() {
        try {
            if ($("#RecaptureFinishButton").hasClass("disabled")) {
                return;
            }
            RecaptchaController.RecapchaProgressBarDisplay(true);
            RegisterPortal.ClearErrors();
            var result = RegisterPortal.Verify();
            if (result != null) {
                RegisterPortal.PrintErrors(result);
                return;
            }
            RegisterPortal.GetDataForPost(function(data) {
                Poster.PostRegister(data, function(response) {
                    if (response.hasOwnProperty("error")) {
                        if (response.error == "recaptchaInvalid") {
                            !(typeof (window.hcaptcha) != "undefined") ? grecaptcha.reset() : hcaptcha.reset(widgetID);
                            $('.captcha_errorArea').show();
                        } else {
                            $('#RecaptchaErrorMessage').html(errorMessage.GetMessageByType('internalServerError'));
                            alert(errorMessage.GetMessageByType('internalServerError'));
                        }
                        RecaptchaController.RecapchaProgressBarDisplay(false);
                    } else {
                        document.getElementById('RecaptureCheckingDiv').innerHTML = errorMessage.GetMessageByType('forwardingInfo');
                        RegisterPortal.RedirectToRegisteredPortal(response.reference, response.tenant.ownerId);
                    }
                });
            });
        } catch (err) {}
    },
    GetHostnameFormUrl: function(url) {
        var parser = document.createElement('a');
        parser.href = url;
        return parser.hostname;
    },
    RedirectToRegisteredPortal: function(redirectionUrl, ownerId) {
        window.onbeforeunload = null;
        var desktop = $("body").is(".desktop");
        var docspaceprices = $("body").is(".docspaceprices");
        var uid = ownerId || RegisterPortal.GetHostnameFormUrl(redirectionUrl);
        try {
            window.SetGaUID(uid);
            if (desktop) {
                var store = $("body").attr("data-store").trim();
                if (store)
                    store = "_" + store;
                window.PageTrack('Portal_Created_Desktop' + store);
            } else {
                if (docspaceprices) {
                    window.PageTrack('DocSpace_Portal_Created');
                } else {
                    window.PageTrack('Portal_Created');
                }
            }
            window.PageEvent('portal', $.trim(RegisterPortal.oPN.val()));
        } catch (e) {}
        if (desktop) {
            redirectionUrl += (redirectionUrl.indexOf("?") == -1 ? "?" : "&") + "desktop=true";
            if (window.AscDesktopEditor) {
                try {
                    var data = {
                        domain: new RegExp("^http(s)?:\/\/[^\/]+\/").exec(redirectionUrl)[0],
                    };
                    window.AscDesktopEditor.execCommand("portal:new", JSON.stringify(data));
                } catch (e) {
                    console.log(e);
                }
            }
        }
        RegisterPortal._registerFinish(redirectionUrl);
    },
    Verify: function() {
        var results = new Array();
        var regexp = new XRegExp("^[\\p{L}\\p{M}' \\-]+$");
        var firstNameValue = $.trim(RegisterPortal.oFN.val());
        if (firstNameValue == '') {
            results.push({
                error: 'firstNameEmpty',
                message: errorMessage.GetMessageByType('firstNameEmpty')
            });
        } else if (!regexp.test(firstNameValue)) {
            results.push({
                error: 'firstNameIncorrect',
                message: errorMessage.GetMessageByType('firstNameIncorrect')
            });
        }
        var lastNameValue = $.trim(RegisterPortal.oLN.val());
        if (lastNameValue == '') {
            results.push({
                error: 'lastNameEmpty',
                message: errorMessage.GetMessageByType('lastNameEmpty')
            });
        } else if (!regexp.test(lastNameValue)) {
            results.push({
                error: 'lastNameIncorrect',
                message: errorMessage.GetMessageByType('lastNameIncorrect')
            });
        }
        if ($.trim(RegisterPortal.oEM.val()) == '') {
            results.push({
                error: 'emailEmpty',
                message: errorMessage.GetMessageByType('emailEmpty')
            });
        } else if (!ASC.Mail.Utility.IsValidEmail($.trim(RegisterPortal.oEM.val()))) {
            results.push({
                error: 'emailIncorrect',
                message: errorMessage.GetMessageByType('emailIncorrect')
            });
        }
        var oPNValue = $.trim(RegisterPortal.oPN.val());
        var portalNameMinLength = RegisterPortal.oPN.data("minlength");
        if (oPNValue == '') {
            results.push({
                error: 'portalNameEmpty',
                message: errorMessage.GetMessageByType('portalNameEmpty')
            });
        } else if (oPNValue.length < portalNameMinLength) {
            results.push({
                error: 'tooShortError',
                message: errorMessage.GetMessageByType('tooShortError')
            });
        } else if (!oPNValue.match(/^[a-z0-9][a-z0-9-]*[a-z0-9]$/gi)) {
            results.push({
                error: 'portalNameIncorrect',
                message: errorMessage.GetMessageByType('portalNameIncorrect')
            });
        }
        var languageValue = "";
        if (this.oLg.length) {
            languageValue = $.trim(RegisterPortal.oLg.val());
            if (languageValue == '') {
                results.push({
                    error: 'languageEmpty',
                    message: errorMessage.GetMessageByType('languageEmpty')
                });
            }
        }
        var phone_val = this.PhoneController_.GetPhone();
        if (!RegisterPortal.oPHN[0].validity.valid) {
            if (phone_val == '' || phone_val == this.PhoneController_.selectedCountryPhone.country_code) {
                results.push({
                    error: 'phoneEmpty',
                    message: errorMessage.GetMessageByType('phoneEmpty')
                });
            } else {
                results.push({
                    error: 'phoneIncorrect',
                    message: errorMessage.GetMessageByType('phoneIncorrect')
                });
            }
        }
        var minLength = (RegisterPortal.oPW.data("min") | 0) || 8;
        if ($.trim(RegisterPortal.oPW.val()) == '') {
            results.push({
                error: 'passwordEmpty',
                message: errorMessage.GetMessageByType('passwordEmpty')
            });
        } else if ($.trim(RegisterPortal.oPW.val()).length < minLength) {
            results.push({
                error: 'passwordIncorrect',
                message: errorMessage.GetMessageByType('PasswordHintMessage') + minLength + " " + errorMessage.GetMessageByType('ErrorPasswordShort')
            });
        } else if (!(new XRegExp(RegisterPortal.oPW.data("regex"),"ig")).test(RegisterPortal.oPW.val())) {
            results.push({
                error: 'passwordPolicyError',
                message: errorMessage.GetMessageByType('passwordPolicyError')
            });
        }
        if (results.length == 0) {
            results = null;
        }
        return results;
    },
    IsEmptyFieldExists: function() {
        var emptyFieldExists = false;
        var phoneVal = this.PhoneController_.GetPhone();
        var languageValue = "";
        if (this.oLg.length) {
            languageValue = $.trim(RegisterPortal.oLg.val());
        }
        if (($.trim(RegisterPortal.oFN.val()) == '') || ($.trim(RegisterPortal.oLN.val()) == '') || ($.trim(RegisterPortal.oEM.val()) == '') || ($.trim(RegisterPortal.oPN.val()) == '') || ($.trim(RegisterPortal.oPW.val()) == '') || (languageValue == '') || ((phoneVal.length < 2) || (phoneVal == this.PhoneController_.selectedCountryPhone.country_code))) {
            emptyFieldExists = true;
        }
        return emptyFieldExists;
    },
    IsAllFieldsAreValid: function() {
        var allFieldsAreValid = false;
        var registLangValue = true;
        if (RegisterPortal.oLg.length) {
            registLangValue = $("span.registLangSelect").attr("data-value");
        }
        var captchaResponse;
        if (typeof (window.hcaptcha) != "undefined") {
            captchaResponse = hcaptcha.getResponse(widgetID);
        } else if (typeof (window.grecaptcha) != "undefined") {
            captchaResponse = window.grecaptcha.getResponse();
        }
        if ((RegisterPortal.oFN.parent().hasClass("valid")) && (RegisterPortal.oLN.parent().hasClass("valid")) && (RegisterPortal.oEM.parent().hasClass("valid")) && (RegisterPortal.oPN.parent().hasClass("valid")) && (RegisterPortal.oPW.parent().hasClass("valid")) && registLangValue && ($(".phoneControlContainer").hasClass("valid")) && (this.isTestEmail || (captchaResponse != ""))) {
            allFieldsAreValid = true;
        }
        return allFieldsAreValid;
    },
    ClearErrors: function() {
        if (this.isInit === true) {
            this.erroFN.hide();
            this.erroLN.hide();
            this.erroEM.hide();
            this.erroPN.hide();
            this.erroPW.hide();
            this.erroRC.hide();
            if (this.oCS.length) {
                this.erroCS.hide();
            }
            if (this.oLg.length) {
                this.erroLg.hide();
            }
            if (this.oCN.length) {
                this.erroCN.hide();
            }
            this.oFN.removeClass("error");
            this.oLN.removeClass("error");
            this.oEM.removeClass("error");
            $(".formPortalNameTable td:first").removeClass("error");
            this.oPW.removeClass("error");
            this.oCS.removeClass("error");
            this.oLg.removeClass("error");
            this.oCN.removeClass("error");
            $(this.oFN[0].parentNode).removeClass('error');
            $(this.oLN[0].parentNode).removeClass('error');
            $(this.oEM[0].parentNode).removeClass('error');
            $("div.dataItem.portalName").removeClass('error');
            $(this.oPW[0].parentNode).removeClass('error');
            if (this.oCS.length) {
                $(this.oCS[0].parentNode).removeClass('error');
            }
            if (this.oLg.length) {
                $(this.oLg[0].parentNode).removeClass('error');
            }
            if (this.oCN.length) {
                $(this.oCN[0].parentNode).removeClass('error');
            }
            this.erroPHN.hide();
            this.PhoneController_.ClearErrors();
            $(".captcha_errorArea").hide();
            $('#hint-portal-name-exists').hide();
        }
    },
    ClearDataAndErrors: function() {
        this.ClearErrors();
        this.PhoneController_.ClearDataAndErrors();
        if (this.isInit === true) {
            this.oFN.val("");
            this.oLN.val("");
            this.oEM.val("");
            this.oPN.val("");
            this.oPW.val("");
            if (this.oCS.length) {
                this.oCS.val("");
            }
            if (this.oLg.length) {
                this.oLg.val("");
            }
            if (this.oCN.length) {
                this.oCN.val("");
            }
        }
    },
    PrintErrors: function(errors, resp) {
        this.ClearErrors();
        if (errors == null) {
            return;
        }
        for (var i = 0, n = errors.length; i < n; i++) {
            switch (errors[i].error) {
            case 'firstNameEmpty':
            case 'firstNameIncorrect':
                stepRegistrationForm.goToStep(1);
                this.erroFN.html(errors[i].message);
                this.erroFN.show();
                this.oFN.addClass('error');
                $(this.oFN[0].parentNode).addClass('error');
                break;
            case 'lastNameEmpty':
            case 'lastNameIncorrect':
                stepRegistrationForm.goToStep(1);
                this.erroLN.html(errors[i].message);
                this.erroLN.show();
                this.oLN.addClass('error');
                $(this.oLN[0].parentNode).addClass('error');
                break;
            case 'emailEmpty':
            case 'emailIncorrect':
            case 'emailIsInUse':
                stepRegistrationForm.goToStep(1);
                this.erroEM.html(errors[i].message);
                this.erroEM.show();
                this.oEM.addClass('error');
                $(this.oEM[0].parentNode).addClass('error');
                break;
            case 'portalNameEmpty':
            case 'portalNameIncorrect':
            case 'tooShortError':
                stepRegistrationForm.goToStep(1);
                this.erroPN.html(errors[i].message);
                this.erroPN.show();
                this.oPN.addClass('error');
                $("div.dataItem.portalName").addClass('error');
                $(".formPortalNameTable td:first").addClass('error');
                break;
            case 'portalNameExist':
                RegisterPortal.PortalNameExistsBlock(resp);
                $("div.dataItem.portalName").addClass('error');
                $(".formPortalNameTable td:first").removeClass('valid').addClass('error');
                break;
            case 'phoneEmpty':
            case 'phoneIncorrect':
                this.erroPHN.html(errors[i].message);
                this.erroPHN.show();
                this.PhoneController_.ShowErrors();
                break;
            case 'languageEmpty':
            case 'languageIncorrect':
                this.erroLg.show();
                this.oLg.addClass('error');
                $(this.oLg[0].parentNode).addClass('error');
                break;
            case 'passwordEmpty':
            case 'passwordIncorrect':
            case 'passwordPolicyError':
                stepRegistrationForm.goToStep(1);
                this.erroPW.html(errors[i].message);
                this.erroPW.show();
                this.oPW.addClass('error');
                $(this.oPW[0].parentNode).addClass('error');
                break;
            default:
                if (errors[i].message) {
                    this.erroPN.html(errors[i].message);
                    this.erroPN.show();
                    this.oPN.addClass("error");
                    $("div.dataItem.portalName").addClass('error');
                    $(".formPortalNameTable td:first").addClass('error');
                } else if (console && console.log) {
                    console.log(errors[i]);
                }
            }
        }
    },
    PortalNameExistsBlock: function(resp) {
        $("#NewPortalNameInput").val(RegisterPortal.oPN.val());
        $("#NewPortalNameInput").parents("dataItem:first").find(".dataLabel:first").text('.' + RegisterPortal.sRH.children("option:selected").attr("data-domain"));
        $("#PortalNameExistsContainer .Progress:first").hide();
        PortalNameExistsControllerBindEvents((RegisterPortal.sRH.val() == " " ? '' : RegisterPortal.sRH.val()), "", RegisterPortal.PortalNameUniqueCreate);
        PortalNameExistsControllerCheckPortalExistsCallback(RegisterPortal.oPN.val(), RegisterPortal.sRH.val() == " " ? '' : RegisterPortal.sRH.val(), resp);
        if ($('body')[0].id != "signuppage") {
            if (window.innerWidth > 1089) {
                BlockUIManager.blockUI('#PortalNameExistsContainer', 480, 415, 0);
            } else {
                BlockUIManager.blockUI('#PortalNameExistsContainer', 320, 415, 0);
            }
        } else {
            $('#hint-portal-name-exists').show();
            $("div.dataItem.portalName").addClass('error');
        }
    },
    PortalNameUniqueCreate: function() {
        RegisterPortal.oPN.val($("#NewPortalNameInput").val());
        RegisterPortal.oSignUpSbmt.removeClass("disabled");
        RegisterPortal.CreatePortal();
    },
    ChangeHostingRegion: function(newDomain) {
        RegisterPortal.oPN.parents(".formPortalNameTable:first").find(".signUpBaseDomainValue").text("." + newDomain);
    },
};
function recaptchaCallback() {
    $(".captcha_errorArea").hide();
    if (RegisterPortal.IsAllFieldsAreValid()) {
        $(".sbmtSignUp ").removeClass("disabled");
    }
}
function onCallbackHCaptcha() {
    if (RegisterPortal.IsAllFieldsAreValid()) {
        $(".sbmtSignUp ").removeClass("disabled");
    }
    var hCaptchaResponse = hcaptcha.getResponse(widgetID);
    data = {
        hCaptchaResponse: (typeof (window.hcaptcha) != "undefined") ? hCaptchaResponse : "",
    }
    console.log(hCaptchaResponse);
}
;function renderhCaptchaOnReady() {
    widgetID = hcaptcha.render('captcha-1', {
        sitekey: $("#captcha-1").attr("data-sitekey"),
        'callback': 'onCallbackHCaptcha',
        'error-callback': 'onErrorHCaptcha',
    });
}
