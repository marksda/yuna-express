;class PhoneController {
    constructor() {
        this.isInit = false;
        this.phoneControlContainer = null;
        this.selectedCountryPhone = null;
        this.defaultCountryCallingCode = "";
        this.countryList = [];
        this.countryListSortedByCode = [];
    }
    _renderControl = function($input, identifier="") {
        $input.addClass("phoneControlInput");
        var innerHtml = ["<table cellpadding='0' cellspacing='0' class='styled-select-container'>", "<colgroup>", "<col style='width: 50px;' />", "<col />", "</colgroup>", "<tbody>", "<tr>", "<td>", "<span class='phoneControlSwitherWrapper'>", "<div class='phoneControlSwither tl-combobox tl-combobox-container'>", "<div class='selectedPhoneCountry'></div>", "</div>", "</span>", "</td>", "<td>", "<div class='phoneControlInputContainer'>", $input[0].outerHTML, "</div>", "</td>", "</tr>", "</tbody>", "</table>", "<div class='studio-action-panel' id='phoneControlDropDown" + identifier + "'>", "<div class='corner-top left'></div>", "<ul class='dropdown-content'></ul>", "</div>"].join('');
        var o = document.createElement('span');
        o.className = 'phoneControlContainer' + identifier;
        o.innerHTML = innerHtml;
        $($input).replaceWith(o);
        this.phoneControlContainer = $(o);
    }
    ;
    _getCountryByKey = function(key) {
        for (var i = 0, n = this.countryList.length; i < n; i++) {
            if (this.countryList[i].key == key) {
                return this.countryList[i];
            }
        }
        return null;
    }
    ;
    _sortCountriesByCode = function(a, b) {
        var aInt = a.country_code * 1
          , bInt = b.country_code * 1;
        if (aInt > bInt) {
            return 1;
        }
        if (aInt < bInt) {
            return -1;
        }
        return typeof (a.def) != "undefined" ? 1 : (typeof (b.def) != "undefined" ? -1 : a.title > b.title ? 1 : 0);
    }
    ;
    _initCountryPhonesDropDown = function(identifier="") {
        var html = ""
          , tmp = null
          , country = null
          , objPhoneController = this;
        for (var i = 0, n = this.countryList.length; i < n; i++) {
            country = this.countryList[i];
            if (this.defaultCountryCallingCode == country.key) {
                this.selectedCountryPhone = country;
                this.selectedCountryPhone["def"] = true;
            }
            html += ["<li class='li_", country.key, this.defaultCountryCallingCode == country.key ? " default-item selected'" : "'", ">", "<table><tbody>", "<tr>", "<td>", "<div class='fg-item fg_", country.key, "'>", "</div>", "</td>", "<td>", "<a class='dropdown-item' data-key='", country.key, "'>", country.title, " ", country.country_code, "</a>", "</td>", "</tr>", "</tbody></table>", "</li>"].join('');
        }
        this.phoneControlContainer.find("#phoneControlDropDown" + identifier + " ul.dropdown-content").html(html);
        this.countryListSortedByCode = $.extend([], this.countryList);
        this.countryListSortedByCode.sort(this._sortCountriesByCode);
        this.phoneControlContainer.find(".phoneControlSwither .selectedPhoneCountry:first").attr("class", "selectedPhoneCountry fg_" + this.selectedCountryPhone.key);
        this.phoneControlContainer.find("input.phoneControlInput:first").val(this.selectedCountryPhone.country_code + " ");
        this.phoneControlContainer.find("input.phoneControlInput:first").on("keyup", function(event) {
            var country = objPhoneController._findCountryByPhone($(this).val());
            if (country != this.selectedCountryPhone && !(country == null && this.selectedCountryPhone.country_code == this.defaultCountryCallingCode)) {
                objPhoneController._selectCountryPhoneComplete(null, country != null ? country.key : null, identifier);
            }
        });
        this.phoneControlContainer.find("input.phoneControlInput:first").unbind('paste').bind('paste', function(e) {
            var $obj = this;
            setTimeout(function() {
                var country = $obj._findCountryByPhone($($obj).val());
                if (country != this.selectedCountryPhone && !(country == null && this.selectedCountryPhone.country_code == this.defaultCountryCallingCode)) {
                    $obj._selectCountryPhoneComplete(null, country != null ? country.key : null, identifier);
                }
            }, 0);
            return true;
        });
        this.phoneControlContainer.find("#phoneControlDropDown" + identifier + " ul.dropdown-content").on("click", "a.dropdown-item", function() {
            objPhoneController._selectCountryPhoneComplete($(this), $(this).attr("data-key"), identifier);
            $("#phoneControlDropDown" + identifier).hide();
        });
        $.dropdownToggle({
            dropdownID: "phoneControlDropDown" + identifier,
            switcherSelector: ".phoneControlContainer" + identifier + " .phoneControlSwither",
            simpleToggle: true
        });
    }
    ;
    _selectCountryPhoneComplete = function($opt, key, identifier="") {
        var phone_text = $.trim(this.phoneControlContainer.find("input.phoneControlInput:first").val());
        delete this.selectedCountryPhone["def"];
        this.countryListSortedByCode.sort(this._sortCountriesByCode);
        if ($opt == null || $opt == {}) {
            if (typeof (key) != "string" || key == "") {
                key = this.defaultCountryCallingCode;
                this.selectedCountryPhone = this._getCountryByKey(key);
            } else {
                this.selectedCountryPhone = this._getCountryByKey(key);
                phone_text = $.trim(phone_text.replace(this.GetCountryPhoneReg(this.selectedCountryPhone.country_code), ""));
                phone_text = [this.selectedCountryPhone.country_code, phone_text].join(" ");
                this.phoneControlContainer.find("input.phoneControlInput:first").val(phone_text);
            }
        } else {
            phone_text = $.trim(phone_text.replace(this.GetCountryPhoneReg(null), ""));
            this.selectedCountryPhone = this._getCountryByKey(key);
            phone_text = phone_text.replace(" +", "");
            phone_text = [this.selectedCountryPhone.country_code, phone_text].join(" ");
            this.phoneControlContainer.find("input.phoneControlInput:first").val(phone_text);
        }
        this.selectedCountryPhone["def"] = true;
        this.countryListSortedByCode.sort(this._sortCountriesByCode);
        $("#phoneControlDropDown" + identifier + " ul.dropdown-content li.selected").removeClass("selected");
        $("#phoneControlDropDown" + identifier + " ul.dropdown-content li.li_" + key).addClass("selected");
        this.phoneControlContainer.find(".phoneControlSwither .selectedPhoneCountry").attr("class", "selectedPhoneCountry fg_" + key);
    }
    ;
    _findCountryByPhone = function(phone) {
        if (phone == null || typeof (phone) != "string") {
            return null;
        }
        phone = $.trim(phone);
        if (phone == "" || phone.length < 2 || phone[0] != '+') {
            return null;
        }
        for (var i = this.countryListSortedByCode.length; i > 0; i--) {
            var country = this.countryListSortedByCode[i - 1];
            if (this.GetCountryPhoneReg(country.country_code).test(phone)) {
                return country;
            }
        }
        return null;
    }
    ;
    ResetIsInit = function() {
        this.isInit = false;
    }
    ;
    Init = function($input, countryList, testDefaultCountryCallingCodeList, identifier="") {
        if (this.isInit === false) {
            this.countryList = countryList;
            this.defaultCountryCallingCode = "";
            var tmp = null;
            if (typeof (testDefaultCountryCallingCodeList) !== "undefined" && testDefaultCountryCallingCodeList.length > 0) {
                for (var i = 0, n = testDefaultCountryCallingCodeList.length; i < n; i++) {
                    tmp = this._getCountryByKey(testDefaultCountryCallingCodeList[i]);
                    if (tmp != null) {
                        this.defaultCountryCallingCode = tmp.key;
                        break;
                    }
                }
            }
            if (this.defaultCountryCallingCode == "") {
                return;
            }
            this._renderControl($input, identifier);
            this._initCountryPhonesDropDown(identifier);
            this.isInit = true;
        }
    }
    ;
    GetCountryPhoneReg = function(country_code) {
        if (typeof (country_code) == "undefined" || country_code == null || country_code == "") {
            country_code = this.selectedCountryPhone.country_code;
        }
        return new RegExp("^\s*" + country_code.replace("+", "\\+"));
    }
    ;
    ClearDataAndErrors = function(identifier="") {
        this.selectedCountryPhone = this._getCountryByKey(this.defaultCountryCallingCode);
        this.phoneControlContainer.find("input.phoneControlInput:first").val(this.selectedCountryPhone.country_code + " ");
        $("#phoneControlDropDown" + identifier + " ul.dropdown-content li.selected").removeClass("selected");
        $("#phoneControlDropDown" + identifier + " ul.dropdown-content li.li_" + this.defaultCountryCallingCode).addClass("selected");
        this.phoneControlContainer.find(".phoneControlSwither .selectedPhoneCountry").attr("class", "selectedPhoneCountry fg_" + this.defaultCountryCallingCode);
        this.ClearErrors();
    }
    ;
    ClearErrors = function() {
        this.phoneControlContainer.removeClass('error');
    }
    ;
    ShowErrors = function() {
        this.phoneControlContainer.addClass('error');
    }
    ;
    GetPhone = function() {
        var phone = $.trim(this.phoneControlContainer.find("input.phoneControlInput:first").val());
        if (!this.GetCountryPhoneReg(null).test(phone)) {
            phone = [this.selectedCountryPhone.country_code, phone].join(' ');
        }
        return phone;
    }
    ;
}
;