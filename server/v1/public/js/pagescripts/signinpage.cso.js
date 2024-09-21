var $emailInput = $("#txtSignInEmail");
var passwordInput = $("#txtSignPassword");
var $signIn = $("#signIn");
var isValid = true;
var minLength = (passwordInput.data("min") | 0) || 8;
var errorMessage = {
    GetMessageByType: function(key) {
        let message = 'error';
        switch (key) {
            case 'emailEmpty':
                message = 'Email harus diisi';
                break;
            case 'emailIncorrect':
                message = 'Penulisan Email tidak sesuai standar';
                break;
            case 'passwordEmpty':
                message = 'Password harus diisi';
                break;
            case 'PasswordHintMessage':
                message = 'Password minimal ';
                break;
            case 'ErrorPasswordShort':
                message = 'karakter';
                break;
            default:
                message = '';
                break;
        }
        return message;
    }
}
$('.SignInPanel .accountLinks').delegate('.popup', 'click', function() {
    var link = $(this).attr('href');
    window.open(link, 'login', 'width=800,height=500,status=no,toolbar=no,menubar=no,resizable=yes,scrollbars=no');
    return false;
});
var _onComplete = function(response) {
    if (response.status != '') {
        $("#divSigninProgress").hide();
        $signIn.removeClass("disabled");
        var errors = new Array();
        errors.push({
            error: response.message,
            message: errorMessage.GetMessageByType(response.message)
        });
        _printErrors(errors);
        return;
    } else {
        if (response.rs1 == 'morethatone') {
            $("#divSigninProgress").hide();
            DisplayPortalChooseController(response.rs2);
        } else {
            $("#divSigninProgress").text(errorMessage.GetMessageByType("forwardingInfo"));
            window.open(response.rs2, '_self');
        }
    }
};
var _verify = function(email, pwd) {
    var results = new Array();
    if (email == '') {
        results.push({
            error: 'emailEmpty',
            message: errorMessage.GetMessageByType('emailEmpty')
        });
    } else if (!ASC.Mail.Utility.IsValidEmail(email)) {
        results.push({
            error: 'emailIncorrect',
            message: errorMessage.GetMessageByType('emailIncorrect')
        });
    }
    if (pwd == '') {
        results.push({
            error: 'passwordEmpty',
            message: errorMessage.GetMessageByType('passwordEmpty')
        });
    }
    if (results.length == 0) {
        results = null;
    }
    return results;
};
var _printErrors = function(errors) {
    _clearErrors();
    if (errors == null) {
        $signIn.removeClass("disabled");
        return;
    }
    var result = '';
    for (var i = 0, n = errors.length; i < n; i++) {
        if (errors[i].error == 'emailEmpty' || errors[i].error == 'emailIncorrect' || errors[i].error == 'passwordEmpty' || errors[i].error == 'LoginWithAccountNotFound') {
            result += errors[i].message + "<br/>";
        }
    }
    if (result == '') {
        result = errorMessage.GetMessageByType('emailOrPasswordIncorrect');
    }
    var resultToLowerCase = result.toLowerCase();
    var resultIncludesEmail = resultToLowerCase.includes("email");
    var resultIncludesPassword = resultToLowerCase.includes("password");
    if (resultIncludesEmail) {
        $emailInput.parent().removeClass("valid").addClass("error");
        if ($emailInput[0].value == "") {
            $emailInput.parent().addClass("error-middle");
        }
    }
    if (resultIncludesPassword) {
        passwordInput.parent().removeClass("valid").addClass("error");
        if (passwordInput[0].value == "") {
            passwordInput.parent().addClass("error-middle");
        }
    }
    if (resultIncludesEmail && !resultIncludesPassword) {
        $("#divSigninEmailError").html(result).show();
    } else {
        $("#divSigninError").html(result).show();
    }
    $signIn.addClass("disabled");
};
var _clearErrors = function() {
    $("#divSigninError").hide();
    $(".input-wrapper").removeClass("error");
};
$("#txtSignInEmail, #txtSignPassword, #passwordRestoreInput").focus(inputFocus).focusout(inputFocusOut);
$("#txtSignInEmail, #txtSignPassword").keydown(function(event) {
    if (TeamLabPortal.IsEnterKey(event.keyCode)) {
        SignIn();
        return false;
    }
    return true;
});
$("#passRestorelink").click(function() {
    DisplayPasswordRestore();
    return false;
});
$('#passwordRestoreInput').keydown(function(event) {
    return PasswordRestoreKeyDownHandler(event);
});
$(".back-to-sign-in").on("click", function() {
    $(".signinpage").show();
    $("#PasswordRestoreContainer, #PortalChooseContainer").hide();
    $signIn.removeClass("disabled");
});
function SignIn() {
    if ($signIn.hasClass("disabled")) {
        return;
    }
    $signIn.addClass("disabled");
    $("#divSigninProgress").show();
    PageTrack('singin');
    var email = $.trim($emailInput.val());
    var password = $.trim(passwordInput.val());
    _clearErrors();
    var result = _verify(email, password);
    if (result != null) {
        $signIn.removeClass("disabled");
        $("#divSigninProgress").hide();
        _printErrors(result);
        return;
    }
    var size = passwordInput.data("hashsize");
    var iterations = passwordInput.data("hashiterations");
    var salt = passwordInput.data("hashsalt");
    var bits = sjcl.misc.pbkdf2(password, salt, iterations);
    bits = bits.slice(0, size / 32);
    var passwordHash = sjcl.codec.hex.fromBits(bits);
    var docspace = $("body").data("bodyid") === "docspace-signin";
    Poster.PostSignin(email, passwordHash, docspace, _onComplete);
}
;function DisplayPortalChooseController(p) {
    var portals = $.parseJSON(p)
      , portalsHtml = ''
      , portalContainer = $('#PortalChoosePortalsDiv');
    if (portals.length <= 4) {
        portalContainer.addClass("a-few-portals");
    } else {
        portalContainer.removeClass("a-few-portals");
    }
    for (var i = 0, n = portals.length; i < n; i++) {
        portalsHtml += '<div class="text-overflow"><a href="' + portals[i].portalLink + '" class="portalChooseItem">' + portals[i].portanName + '</a></div>';
    }
    portalContainer.html(portalsHtml);
    $("#PortalChooseContainer").show();
    $(".signinpage, #PasswordRestoreContainer").hide();
}
;function SignInPortalOnCompleteBySocial(response) {
    _clearErrors();
    $("#divSigninProgress").show();
    _onComplete(response);
}
;function DisplayPasswordRestore() {
    $('#PasswordRestoreCheckingDiv').hide();
    $('#PasswordRestoreFinishButton').removeClass("disable");
    $('#PasswordRestoreErrorMessage').hide();
    $("#passwordRestoreInput").parent().removeClass("valid").removeClass("error").removeClass("error-middle");
    $('#PasswordRestoreSuccessMessage').hide();
    $('#passwordRestoreInput').val($emailInput.val());
    $('#PasswordRestoreContainer').show();
    $(".signinpage").hide();
    setTimeout("$('#passwordRestoreInput').focus();", 100);
}
;function SendRestorePasswordEmail() {
    $("#PasswordRestoreContainer .input-wrapper").addClass("br-loading");
    PasswordRestoreProgressBarDisplay(true, '');
    var email = $.trim($('#passwordRestoreInput').val());
    if (email == '') {
        PasswordRestoreProgressBarDisplay(false, errorMessage.GetMessageByType('emailEmpty'));
        $("#PasswordRestoreContainer .input-wrapper").removeClass("br-loading");
        return false;
    }
    if (!ASC.Mail.Utility.IsValidEmail(email)) {
        PasswordRestoreProgressBarDisplay(false, errorMessage.GetMessageByType('emailIncorrect'));
        $("#PasswordRestoreContainer .input-wrapper").removeClass("br-loading");
        return false;
    } else {
        try {
            var docspace = $("body").data("bodyid") === "docspace-signin";
            Poster.PasswordRestore(email, docspace, function(response) {
                var sendRestorePasswordErrorMessage = '';
                try {
                    if (response.status != '') {
                        sendRestorePasswordErrorMessage = errorMessage.GetMessageByType(response.message);
                        if (sendRestorePasswordErrorMessage == '') {
                            sendRestorePasswordErrorMessage = response.message;
                        }
                    }
                } catch (err) {
                    sendRestorePasswordErrorMessage = errorMessage.GetMessageByType('internalServerError');
                }
                PasswordRestoreProgressBarDisplay(false, sendRestorePasswordErrorMessage);
                $("#PasswordRestoreContainer .input-wrapper").removeClass("br-loading");
                return false;
            });
        } catch (err) {}
    }
    $("#PasswordRestoreContainer .input-wrapper").removeClass("br-loading");
}
;function PasswordRestoreKeyDownHandler(event) {
    if (TeamLabPortal.IsEnterKey(event.keyCode)) {
        SendRestorePasswordEmail();
        return false;
    }
    return true;
}
;function ClosePasswordRestoreDialog() {
    if ($('#PasswordRestoreContainer').is(':visible') && $('#PasswordRestoreSuccessMessage').is(':visible')) {
        $(".signinpage").show();
        $('#PasswordRestoreContainer').hide();
    }
}
;function PasswordRestoreProgressBarDisplay(displayFlag, err) {
    if (displayFlag) {
        $('#PasswordRestoreCheckingDiv').show();
        $('#PasswordRestoreFinishButton').addClass("disable");
        $('#PasswordRestoreErrorMessage').hide();
        $("#passwordRestoreInput").parent().removeClass("valid").removeClass("error").removeClass("error-middle");
        $('#PasswordRestoreSuccessMessage').hide();
    } else {
        $('#PasswordRestoreCheckingDiv').hide();
        if (err == '') {
            $('#PasswordRestoreSuccessMessage').show();
            $('#PasswordRestoreFinishButton').addClass("disable");
            $('#PasswordRestoreErrorMessage').hide();
            $("#passwordRestoreInput").parent().removeClass("error").removeClass("error-middle").addClass("valid");
            ;setTimeout(ClosePasswordRestoreDialog, 5000);
        } else {
            $('#PasswordRestoreSuccessMessage').hide();
            $('#PasswordRestoreFinishButton').removeClass("disable");
            $('#PasswordRestoreErrorMessage').html(err).show();
            $("#passwordRestoreInput").parent().removeClass("valid").addClass("error");
        }
    }
}
;function inputFocus() {
    $(this).parent().removeClass("error").removeClass("error-middle").removeClass("valid").addClass("focus");
    $("#divSigninError").hide();
    $("#PasswordRestoreErrorMessage").hide();
    $signIn.removeClass("disabled");
}
;function inputFocusOut() {
    var currentInput = $(this);
    var currentInputId = currentInput[0].id;
    var currentInputWrapper = currentInput.parent();
    currentInputWrapper.removeClass("focus");
    if (currentInputId == "txtSignInEmail") {
        if (currentInput[0].value == "") {
            currentInputWrapper.addClass("error").addClass("error-middle");
            $("#divSigninEmailError").text(window.errorMessage.GetMessageByType("emailEmpty")).show();
            isValid = false;
        } else if (!ASC.Mail.Utility.IsValidEmail(currentInput[0].value)) {
            currentInputWrapper.addClass("error");
            $("#divSigninEmailError").text(window.errorMessage.GetMessageByType("emailIncorrect")).show();
            isValid = false;
        } else {
            currentInputWrapper.removeClass("error").removeClass("error-middle").addClass("valid");
            $("#divSigninEmailError").hide();
            isValid = true;
        }
    }
    if (currentInputId == "txtSignPassword") {
        currentInputValue = currentInput[0].value;
        if (currentInputValue == "") {
            currentInputWrapper.addClass("error").addClass("error-middle");
            $("#divSigninError").text(window.errorMessage.GetMessageByType('passwordEmpty')).show();
            isValid = false;
        } else if (currentInputValue.length < minLength) {
            currentInputWrapper.addClass("error");
            $("#divSigninError").text(errorMessage.GetMessageByType('PasswordHintMessage') + minLength + " " + errorMessage.GetMessageByType('ErrorPasswordShort')).show();
        } else {
            currentInputWrapper.removeClass("error").removeClass("error-middle").addClass("valid");
            $("#divSigninError").hide();
            isValid = true;
        }
    }
    if (currentInputId == "passwordRestoreInput") {
        if (currentInput[0].value == "") {
            currentInputWrapper.addClass("error").addClass("error-middle");
            $("#PasswordRestoreErrorMessage").show();
        } else {
            currentInputWrapper.removeClass("error").removeClass("error-middle").addClass("focus");
            $("#PasswordRestoreErrorMessage").hide();
            $("#passwordRestoreInput").parent().removeClass("error").removeClass("error-middle");
        }
    }
    if (isValid) {
        $signIn.removeClass("disabled");
    } else {
        $signIn.addClass("disabled");
    }
}
var elem = $("header");
var otherMenuItems = $("#navitem_produk, #navitem_solusi, #navitem_layanan, #navitem_media, #navitem_portofolio");
var h_padding = $(".SignInPanel h3").css('padding-top');
h_padding = 1.1 * removePx(h_padding);
var bgColor, borderColor, percentColor;
var top = $(window).scrollTop();
scrollTopIf(top);
$(window).resize(function() {
    h_padding = $(".SignInPanel h3").css('padding-top');
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
        if ((top < h_padding) && ($(window).width() > '1023')) {
            percentColor = 1 - (h_padding - top) / h_padding;
            borderColor = "rgba(204, 204, 204, " + percentColor + ")";
            menuItemBorderColor = "rgba(255, 111, 61, " + percentColor + ")";
            elem.css({
                'border-bottom-color': borderColor
            });
            otherMenuItems.css({
                'border-bottom-color': borderColor
            });
        } else {
            elem.css('border-bottom-color', '#CCCCCC');
            if (jQuery(window).width() > '1023') {
                otherMenuItems.css('border-bottom-color', '#CCCCCC');
            }
        }
    } else {
        elem.css({
            'border-bottom-color': ''
        });
        otherMenuItems.css({
            'border-bottom-color': ''
        });
    }
}
;