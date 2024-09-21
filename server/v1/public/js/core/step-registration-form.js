var stepRegistrationForm = new function() {
    var results = [];
    var _clearErrors = function() {
        $(".servereditorspreorderform .dataItem > [class$=_errorArea]").hide();
        $(".txtFirstName:first, " + ".txtEmail:first, " + ".txtCompanyName:first, " + ".txtInfoSource:first").removeClass("error");
        $(".osSelect.tl-combobox:first,.employeesCountSelect.tl-combobox:first").removeClass("error");
        RegisterPortal.PhoneController_.ClearErrors();
    };
    function checkPasswordComplexity(inputWrapper, password) {
        inputWrapper.removeClass('bad_pass').removeClass('good_pass').removeClass('perfect_pass');
        var s_letters = XRegExp('\\p{Ll}');
        var b_letters = XRegExp('\\p{Lu}');
        var digits = "0123456789";
        var specials = "!@#$%^&*()_-+=\|/.,:;[]{}";
        var is_s = false;
        var is_b = false;
        var is_d = false;
        var is_sp = false;
        for (var i = 0; i < password.length; i++) {
            if (!is_s && s_letters.test(password[i]))
                is_s = true;
            else if (!is_b && b_letters.test(password[i]))
                is_b = true;
            else if (!is_d && digits.indexOf(password[i]) != -1)
                is_d = true;
            else if (!is_sp && specials.indexOf(password[i]) != -1)
                is_sp = true;
        }
        var rating = 0;
        var text = "";
        if (is_s)
            rating++;
        if (is_b)
            rating++;
        if (is_d)
            rating++;
        if (is_sp)
            rating++;
        if (password.length == 0)
            text = inputWrapper.removeClass('perfect_pass').removeClass('bad_pass').removeClass('good_pass');
        else if (password.length < 8)
            inputWrapper.addClass('bad_pass').removeClass('good_pass').removeClass('perfect_pass');
        else if (password.length >= 10 && rating < 3)
            inputWrapper.addClass('good_pass').removeClass('bad_pass').removeClass('perfect_pass');
        else if (password.length >= 10 && rating >= 3)
            inputWrapper.addClass('perfect_pass').removeClass('bad_pass').removeClass('good_pass');
        else if (password.length >= 8 && rating == 1)
            inputWrapper.addClass('bad_pass').removeClass('good_pass').removeClass('perfect_pass');
        else if (password.length >= 8 && rating > 1 && rating < 4)
            inputWrapper.addClass('good_pass').removeClass('bad_pass').removeClass('perfect_pass');
        else if (password.length >= 8 && rating == 4)
            text = inputWrapper.addClass('perfect_pass').removeClass('bad_pass').removeClass('good_pass');
    }
    function checkPortalName(results) {
        var isPortalNameErrors = false;
        results.forEach(function(item, index) {
            if (item.error == "portalNameEmpty" || item.error == "tooShortError" || item.error == "portalNameIncorrect") {
                results.splice(index, 1);
            }
        });
        var portalNameMinLength = RegisterPortal.oPN.data("minlength");
        if ($.trim(RegisterPortal.oPN.val()) == '') {
            results.push({
                error: 'portalNameEmpty',
                message: errorMessage.GetMessageByType('portalNameEmpty')
            });
            isPortalNameErrors = true;
        } else if ($.trim(RegisterPortal.oPN.val()).length < portalNameMinLength) {
            results.push({
                error: 'tooShortError',
                message: errorMessage.GetMessageByType('tooShortError')
            });
            isPortalNameErrors = true;
        } else if (!$.trim(RegisterPortal.oPN.val()).match(/^[a-z0-9][a-z0-9-]*[a-z0-9]$/gi)) {
            results.push({
                error: 'portalNameIncorrect',
                message: errorMessage.GetMessageByType('portalNameIncorrect')
            });
            isPortalNameErrors = true;
        }
        return isPortalNameErrors;
    }
    function checkPassword(results) {
        var isPasswordErrors = false;
        results.forEach(function(item, index) {
            if (item.error == "passwordEmpty" || item.error == "passwordIncorrect") {
                results.splice(index, 1);
            }
        });
        var minLength = (RegisterPortal.oPW.data("min") | 0) || 8;
        if ($.trim(RegisterPortal.oPW.val()) == '') {
            results.push({
                error: 'passwordEmpty',
                message: errorMessage.GetMessageByType('passwordEmpty')
            });
            isPasswordErrors = true;
        } else if ($.trim(RegisterPortal.oPW.val()).length < minLength) {
            results.push({
                error: 'passwordIncorrect',
                message: errorMessage.GetMessageByType('PasswordHintMessage') + minLength + " " + errorMessage.GetMessageByType('ErrorPasswordShort')
            });
            isPasswordErrors = true;
        }
        return isPasswordErrors;
    }
    function inputFocus() {
        var currentInput = $(this);
        currentInput.parent().removeClass('error').removeClass('valid').addClass('focus');
        if (currentInput[0].id == "txtPhone") {
            RegisterPortal.PhoneController_.ClearErrors();
            $(".txtPhone_errorArea").hide();
            $(".phoneControlContainer").removeClass("valid");
        }
        currentInput.parent().next(".error").hide();
        if (currentInput.hasClass('txtSignUpPortalName')) {
            $('.dataItem.portalName.error').removeClass('error');
            $('.txtSignUpPortalName_errorArea').hide();
        }
    }
    ;function inputFocusOut() {
        var currentInput = $(this);
        var currentInputTupe = currentInput[0].type;
        var currentInputId = currentInput[0].id;
        var currentInputWrapper = currentInput.parent();
        currentInputWrapper.removeClass('focus');
        switch (currentInputTupe) {
        case "password":
            results.forEach(function(item, index) {
                if (item.error == "passwordIncorrect") {
                    results.splice(index, 1);
                }
                if (item.error == "passwordEmpty") {
                    results.splice(index, 1);
                }
            });
            passwordErrors = checkPassword(results);
            if (!passwordErrors) {
                currentInput.parent().addClass('valid');
            } else {
                if (currentInput[0].value.length > 0) {
                    currentInput.parent().removeClass('valid');
                    results.push({
                        error: 'passwordIncorrect',
                        message: errorMessage.GetMessageByType('passwordIncorrect')
                    });
                    RegisterPortal.PrintErrors(results);
                    return;
                } else {
                    results.push({
                        error: 'passwordEmpty',
                        message: errorMessage.GetMessageByType('passwordEmpty')
                    });
                    RegisterPortal.PrintErrors(results);
                }
            }
            break;
        case "text":
            if (currentInputId == "txtEmail") {
                results.forEach(function(item, index) {
                    if (item.error == "emailIncorrect") {
                        results.splice(index, 1);
                    }
                    if (item.error == "emailEmpty") {
                        results.splice(index, 1);
                    }
                });
                var emailValue = $.trim(currentInput[0].value);
                if (ASC.Mail.Utility.IsValidEmail(emailValue)) {
                    currentInput.removeClass("error");
                    $(currentInputWrapper).next('error').hide();
                    currentInputWrapper.addClass('valid');
                } else {
                    if (emailValue.length > 0) {
                        currentInput.parent().addClass("error");
                        $(currentInputWrapper).next('.error').text(window.errorMessage.GetMessageByType('emailIncorrect')).show();
                        results.push({
                            error: 'emailIncorrect',
                            message: errorMessage.GetMessageByType('emailIncorrect')
                        });
                        RegisterPortal.PrintErrors(results);
                    } else {
                        results.push({
                            error: 'emailEmpty',
                            message: errorMessage.GetMessageByType('emailEmpty')
                        });
                        RegisterPortal.PrintErrors(results);
                    }
                }
            } else if (currentInputId == "txtPhone") {
                results.forEach(function(item, index) {
                    if (item.error == "phoneEmpty") {
                        results.splice(index, 1);
                    }
                    if (item.error == "phoneIncorrect") {
                        results.splice(index, 1);
                    }
                });
                if ((RegisterPortal.PhoneController_.GetPhone() == '' || RegisterPortal.PhoneController_.GetPhone() == RegisterPortal.PhoneController_.selectedCountryPhone.country_code || $.trim(RegisterPortal.PhoneController_.phoneControlContainer.find("input.txtPhone:first").val()) == "")) {
                    $(".txtPhone_errorArea:first").html(errorMessage.GetMessageByType('phoneEmpty')).show();
                    results.push({
                        error: 'phoneEmpty',
                        message: errorMessage.GetMessageByType('phoneEmpty')
                    });
                    RegisterPortal.PhoneController_.ShowErrors();
                    isValid = false;
                } else {
                    if (RegisterPortal.PhoneController_.phoneControlContainer.find("input.txtPhone:first")[0].validity.valid) {
                        $(".phoneControlContainer").addClass('valid');
                    } else {
                        $(".txtPhone_errorArea:first").html(errorMessage.GetMessageByType('phoneIncorrect')).show();
                        results.push({
                            error: 'phoneIncorrect',
                            message: errorMessage.GetMessageByType('phoneIncorrect')
                        });
                        RegisterPortal.PhoneController_.ShowErrors();
                        isValid = false;
                    }
                }
            } else if (currentInputId == "txtSignUpPortalName") {
                var portalNameErrors = checkPortalName(results);
                if (!portalNameErrors) {
                    currentInput.parent().removeClass('error').addClass('valid');
                    $('#hint-portal-name-exists').hide();
                } else {
                    currentInput.parent().removeClass('valid').addClass('error');
                    RegisterPortal.PrintErrors(results);
                    return;
                }
            } else if (currentInputId == "txtSignUpFirstName" || currentInputId == "txtSignUpLastName") {
                switch (currentInputId) {
                case "txtSignUpFirstName":
                    results.forEach(function(item, index) {
                        if (item.error == "firstNameEmpty") {
                            results.splice(index, 1);
                        }
                        if (item.error == "firstNameIncorrect") {
                            results.splice(index, 1);
                        }
                    });
                    break;
                case "txtSignUpLastName":
                    results.forEach(function(item, index) {
                        if (item.error == "lastNameEmpty") {
                            results.splice(index, 1);
                        }
                        if (item.error == "lastNameIncorrect") {
                            results.splice(index, 1);
                        }
                    });
                    break;
                }
                var currentInputValue = $.trim(currentInput[0].value);
                if (currentInputValue == "") {
                    switch (currentInputId) {
                    case "txtSignUpFirstName":
                        results.push({
                            error: 'firstNameEmpty',
                            message: errorMessage.GetMessageByType('firstNameEmpty')
                        });
                        break;
                    case "txtSignUpLastName":
                        results.push({
                            error: 'lastNameEmpty',
                            message: errorMessage.GetMessageByType('lastNameEmpty')
                        });
                        break;
                    }
                    RegisterPortal.PrintErrors(results);
                } else {
                    var regexp = new XRegExp("^[\\p{L}\\p{M}' \\-]+$");
                    if (!regexp.test(currentInput[0].value)) {
                        switch (currentInputId) {
                        case "txtSignUpFirstName":
                            results.push({
                                error: 'firstNameIncorrect',
                                message: errorMessage.GetMessageByType('firstNameIncorrect')
                            });
                            break;
                        case "txtSignUpLastName":
                            results.push({
                                error: 'lastNameIncorrect',
                                message: errorMessage.GetMessageByType('lastNameIncorrect')
                            });
                            break;
                        }
                        RegisterPortal.PrintErrors(results);
                    } else {
                        if (currentInput[0].value.length > 0) {
                            currentInput.parent().addClass('valid');
                        } else {
                            currentInput.parent().removeClass('valid').removeClass('error');
                        }
                    }
                }
            } else if (currentInput[0].value.length > 0) {
                currentInput.parent().addClass('valid');
            }
            break;
        default:
        }
    }
    ;function setFocusInputStep(step) {
        var input = $(step).find('.dataItem input:first');
        if (input.length > 0) {
            input.focus();
        }
    }
    function clickStartButton() {
        if (stepRegistrationForm.currentStep == 0) {
            $(".stepCounter").show();
            $(".progressStep").show();
            $(".dataForm").removeClass('start');
            if (stepRegistrationForm.currentStep == stepRegistrationForm.steps.length - 2) {
                $(this).hide();
                $(".progressPanel").show();
            }
            $("a.start").hide();
            $("a.back").show();
            $("a.next").show();
            stepRegistrationForm.currentStep++;
            changeStep(stepRegistrationForm.currentStep);
        }
    }
    function txtPhoneFocus() {
        $(".formLabelPhone:first").removeClass('showPlaseholder');
        $('.phoneControlContainer').addClass('active').addClass('focus');
    }
    function txtPhoneFocusout() {
        var phoneControlContainer = $('.phoneControlContainer');
        if ($(".phoneControlInput:first")[0].value == '') {
            $(".formLabelPhone:first").addClass('showPlaseholder');
            phoneControlContainer.removeClass('active');
        } else {
            phoneControlContainer.addClass('active');
        }
        phoneControlContainer.removeClass('focus');
    }
    function recaptchaCallback() {
        if (stepRegistrationForm.currentStep == stepRegistrationForm.steps.length - 2) {
            $("a.next").hide();
            $(".progressPanel").show();
        }
        stepRegistrationForm.currentStep++;
        stepRegistrationForm.changeStep(stepRegistrationForm.currentStep);
    }
    function clickSingUpNextButton() {
        _clearErrors();
        var results = new Array();
        var regexp = new XRegExp("^[\\p{L}\\p{M}' \\-]+$");
        var lastStepNum = window.MessagingEnabled ? 3 : 4;
        switch (stepRegistrationForm.currentStep) {
        case 1:
            if ($.trim(RegisterPortal.oFN.val()) == '') {
                results.push({
                    error: 'firstNameEmpty',
                    message: errorMessage.GetMessageByType('firstNameEmpty')
                });
            }
            if (!regexp.test($.trim(RegisterPortal.oFN.val()))) {
                results.push({
                    error: 'firstNameIncorrect',
                    message: errorMessage.GetMessageByType('firstNameIncorrect')
                });
            }
            if ($.trim(RegisterPortal.oLN.val()) == '') {
                results.push({
                    error: 'lastNameEmpty',
                    message: errorMessage.GetMessageByType('lastNameEmpty')
                });
            }
            if (!regexp.test($.trim(RegisterPortal.oLN.val()))) {
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
            var portalNameErrors = checkPortalName(results);
            if (portalNameErrors)
                $('#txtSignUpPortalName').parent().addClass('error');
            var passwordErrors = checkPassword(results);
            if (passwordErrors)
                $('#txtSignUpPassword').parent().addClass('error');
            break;
        case 3:
            var phone_val = RegisterPortal.PhoneController_.GetPhone();
            if (!RegisterPortal.oPHN[0].validity.valid) {
                if (phone_val == '' || phone_val == RegisterPortal.PhoneController_.selectedCountryPhone.country_code) {
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
            } else {
                if (window.MessagingEnabled)
                    ConfirmMobileManager.sendAuthCode();
            }
            break;
        }
        if (results.length == 0 && stepRegistrationForm.currentStep < lastStepNum) {
            if (stepRegistrationForm.currentStep == stepRegistrationForm.steps.length - 2) {
                $(this).hide();
                $(".progressPanel").show();
            }
            $("a.back").show();
            stepRegistrationForm.currentStep++;
            changeStep(stepRegistrationForm.currentStep);
        } else if (results.length != 0) {
            RegisterPortal.PrintErrors(results);
            return;
        }
    }
    function clickNextButton() {
        _clearErrors();
        var isValid = true;
        switch (stepRegistrationForm.currentStep) {
        case 1:
            if ($.trim($(".txtFirstName:first").val()) == "") {
                $(".txtFirstName:first").parent().addClass("error");
                $(".txtFirstName_errorArea").show();
                isValid = false;
            }
            var email = $.trim($(".txtEmail:first").val());
            if (email == "") {
                $(".txtEmail").parent().addClass("error");
                $(".txtEmail_errorArea").text(window.errorMessage.GetMessageByType('emailEmpty')).show();
                isValid = false;
            } else if (!ASC.Mail.Utility.IsValidEmail(email)) {
                $(".txtEmail").parent().addClass("error");
                $(".txtEmail_errorArea").text(window.errorMessage.GetMessageByType('emailIncorrect')).show();
                isValid = false;
            }
            if (!RegisterPortal.PhoneController_.phoneControlContainer.find("input.txtPhone:first")[0].validity.valid) {
                if (RegisterPortal.PhoneController_.GetPhone() == '' || RegisterPortal.PhoneController_.GetPhone() == RegisterPortal.PhoneController_.selectedCountryPhone.country_code || $.trim(RegisterPortal.PhoneController_.phoneControlContainer.find("input.txtPhone:first").val()) == "") {
                    $(".txtPhone_errorArea:first").html(errorMessage.GetMessageByType('phoneEmpty')).show();
                } else {
                    $(".txtPhone_errorArea:first").html(errorMessage.GetMessageByType('phoneIncorrect')).show();
                }
                RegisterPortal.PhoneController_.ShowErrors();
                isValid = false;
            }
            break;
        }
        if (isValid == true) {
            if (stepRegistrationForm.currentStep == stepRegistrationForm.steps.length - 2) {
                $(this).hide();
                $(".progressPanel").show();
            }
            $("a.back").show();
            stepRegistrationForm.currentStep++;
            changeStep(stepRegistrationForm.currentStep);
        }
    }
    function clickBackButton() {
        _clearErrors();
        RegisterPortal.ClearErrors();
        var nextButton = $("a.next");
        if (stepRegistrationForm.pageId == "signuppage") {
            switch (stepRegistrationForm.currentStep) {
            case 1:
                if (stepRegistrationForm.counterAttemptsChangePhone && stepRegistrationForm.counterAttemptsChangePhone < 3) {
                    stepRegistrationForm.counterAttemptsChangePhone++;
                }
                break;
            case 4:
                grecaptcha.reset();
                break;
            default:
            }
        }
        if (stepRegistrationForm.currentStep == 1) {
            $(this).hide();
            nextButton.hide();
            $("a.start").show();
            $(".stepCounter").hide();
            $(".progressStep").hide();
            $(".dataForm").addClass('start');
        }
        $(".progressPanel").hide();
        if (stepRegistrationForm.currentStep == stepRegistrationForm.steps.length - 1) {
            nextButton.show();
        }
        stepRegistrationForm.currentStep--;
        changeStep(stepRegistrationForm.currentStep);
    }
    function goToStep(step) {
        if (step <= stepRegistrationForm.steps.length && step >= 0) {
            stepRegistrationForm.currentStep = step;
            stepRegistrationForm.changeStep(step, true);
        } else {
            stepRegistrationForm.currentStep = 0;
            stepRegistrationForm.changeStep(0);
        }
    }
    function changeStep(i, notNeedSetFocus) {
        var steps = stepRegistrationForm.steps;
        stepRegistrationForm.progress.css('width', (stepRegistrationForm.currentStep) * (100 / (steps.length - 1)) + '%');
        stepRegistrationForm.stepCounter.textContent = stepRegistrationForm.stepCounterText + " " + (stepRegistrationForm.currentStep) + "/" + (steps.length - 1);
        $(steps).hide();
        if (window.innerWidth < 1089) {
            $(steps[i]).css('display', 'table-row');
        } else {
            $(steps[i]).show();
        }
        if (!notNeedSetFocus)
            setFocusInputStep(steps[i]);
    }
    return {
        isInit: false,
        steps: null,
        stepCounter: null,
        stepCounterText: null,
        currentStep: 0,
        progress: null,
        pageId: null,
        counterAttemptsChangePhone: null,
        changeStep: changeStep,
        goToStep: goToStep,
        recaptchaCallback: recaptchaCallback,
        Init: function(pageId) {
            if (this.isInit === false) {
                this.pageId = pageId;
                if (!window.MessagingEnabled)
                    $(".formSteps .step.verifyCode").remove();
                this.steps = $(".formSteps").children(".step");
                this.stepCounter = $(".stepCounter")[0];
                this.stepCounterText = this.stepCounter != null ? this.stepCounter.textContent : "";
                this.progress = $('#progress .progressLine');
                this.stepCounter.textContent = this.stepCounterText + " 1/" + this.steps.length;
                $('.employeesCountContainer .employeesCountSelect').focus(function() {
                    $('.combobox-title-inner-text').click()
                });
                $("a.back").click(clickBackButton);
                var nextButtom = $("a.next");
                if (pageId == "signuppage") {
                    nextButtom.click(clickSingUpNextButton);
                } else {
                    nextButtom.click(clickNextButton);
                }
                $("a.start").click(clickStartButton);
                if ($(".g-recaptcha").length) {
                    RecaptchaController.InitRecaptcha($("#recaptchaBlock").attr("data-hl"));
                } else {
                    var script = document.createElement('script');
                    script.src = "https://js.hcaptcha.com/1/api.js?onload=renderhCaptchaOnReady&render=explicit&hl=zh-CN";
                    script.async = true;
                    script.defer = true;
                    document.head.appendChild(script);
                }
                $(".txtPhone:first").blur(txtPhoneFocusout).focus(txtPhoneFocus).keypress(function(e) {
                    if (e.which != 8 && e.which != 32 && e.which != 43 && (e.which < 48 || e.which > 57)) {
                        return false;
                    }
                });
                $(".employeesCountSelect input").focus(function() {
                    $('.employeesCount_errorArea').hide();
                });
                $("input").focus(inputFocus).focusout(inputFocusOut);
                $("textarea").focus(function() {
                    var currentInput = $(this);
                    currentInput.addClass('focus');
                    currentInput.removeClass('valid');
                }).focusout(function() {
                    var currentInput = $(this);
                    currentInput.removeClass('focus');
                    if (currentInput[0].value.length > 0) {
                        currentInput.addClass('valid');
                    }
                });
                $('html').keydown(function(eventObject) {
                    if (eventObject.keyCode == 13) {
                        switch (stepRegistrationForm.currentStep) {
                        case 0:
                            $("a.start").click();
                            break;
                        case (stepRegistrationForm.steps.length - 1):
                            $("#sbmtRequest").click();
                            break;
                        default:
                            $("a.next").click();
                        }
                    }
                });
                $("select").change(function() {
                    if ($('span.tl-combobox:first').attr('data-value') == "") {
                        $('.inner-text.combobox-title-inner-text').css("color", "#838383");
                    } else {
                        $('.inner-text.combobox-title-inner-text').css("color", "#000");
                    }
                });
                $("input[type=password]").keyup(function() {
                    checkPasswordComplexity($(this).parent(), this.value);
                });
                if (window.innerWidth < 1089) {
                    $(stepRegistrationForm.steps[0]).css('display', 'table-row');
                } else {
                    $(stepRegistrationForm.steps[0]).show();
                }
                var oldVal = $.fn.val;
                $.fn.oldVal = oldVal;
                $.fn.val = function(value) {
                    if (!value)
                        return this.oldVal();
                    else {
                        return this.each(function() {
                            $(this).oldVal(value);
                            $(this).change();
                        });
                    }
                }
                ;
            }
        },
    };
}
;
