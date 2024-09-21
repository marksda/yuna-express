if (typeof ASC === "undefined") {
    ASC = {};
}
if (typeof ASC.Mail === "undefined") {
    ASC.Mail = (function() {
        return {};
    }
    )();
}
if (typeof ASC.Mail.Utility === "undefined") {
    ASC.Mail.Utility = (function() {
        var parseErrorTypes = {
            None: 0,
            EmptyRecipients: 1,
            IncorrectEmail: 2
        }
          , lastSentMessageId = 0;
        return {
            ParseErrorTypes: parseErrorTypes,
            ParseAddresses: function(str) {
                var parsedObjs = {
                    addresses: [],
                    errors: []
                };
                if ("string" !== typeof str || str.length === 0) {
                    parsedObjs.errors.push({
                        message: "Empty recipients",
                        type: parseErrorTypes.EmptyRecipients,
                        errorItem: null
                    });
                    return parsedObjs;
                }
                function contact2Obj(e) {
                    var t = /^"(.*)"\s*<([^>]+)>$/
                      , n = /^(.*)<([^>]+)>$/
                      , i = e.match(t) || e.match(n);
                    return i ? {
                        name: $.trim(i[1].replace(/\\"/g, '"').replace(/\\\\/g, "\\")),
                        email: $.trim(i[2])
                    } : {
                        email: e
                    }
                }
                ;function obj2Contact(e) {
                    var t = undefined;
                    if (e.email) {
                        t = e.email;
                        e.name && (t = '"' + e.name.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '" <' + t + ">");
                    }
                    return t;
                }
                ;function parseAndAppend(s) {
                    s = obj2Contact(contact2Obj(s));
                    if (!s)
                        return;
                    var parsed = emailAddresses.parseOneAddress(s);
                    if (parsed) {
                        var isValid = true;
                        if (parsed.domain.indexOf(".") === -1 || !/(^((?!-)[a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,63}\.?$)/.test(parsed.domain)) {
                            isValid = false;
                            parsedObjs.errors.push({
                                message: "Incorrect domain",
                                type: parseErrorTypes.IncorrectEmail,
                                errorItem: s
                            });
                        }
                        if (parsed.domain.indexOf('[') === 0 && parsed.domain.indexOf(']') === parsed.domain.length - 1) {
                            parsedObjs.errors.push({
                                message: "Domains as ip adress are not suppoted",
                                type: parseErrorTypes.IncorrectEmail,
                                errorItem: s
                            });
                        }
                        if (!/^[\x00-\x7F]+$/.test(punycode.toUnicode(parsed.domain))) {
                            isValid = false;
                            parsedObjs.errors.push({
                                message: "Punycode domains are not suppoted",
                                type: parseErrorTypes.IncorrectEmail,
                                errorItem: s
                            });
                        }
                        if (!/^[\x00-\x7F]+$/.test(parsed.local) || !/^([a-zA-Z0-9]+)([_\-\.\+][a-zA-Z0-9]+)*$/.test(parsed.local)) {
                            isValid = false;
                            parsedObjs.errors.push({
                                message: "Incorrect localpart",
                                type: parseErrorTypes.IncorrectEmail,
                                errorItem: s
                            });
                        }
                        if (/\s+/.test(parsed.local) || parsed.local !== parsed.parts.local.tokens) {
                            isValid = false;
                            parsedObjs.errors.push({
                                message: "Incorrect, localpart contains spaces",
                                type: parseErrorTypes.IncorrectEmail,
                                errorItem: s
                            });
                        }
                        if (/\s+/.test(parsed.domain) || parsed.domain !== parsed.parts.domain.tokens) {
                            isValid = false;
                            parsedObjs.errors.push({
                                message: "Incorrect, domain contains spaces",
                                type: parseErrorTypes.IncorrectEmail,
                                errorItem: s
                            });
                        }
                        parsedObjs.addresses.push(new ASC.Mail.Address(parsed.name || "",parsed.address,isValid));
                    } else {
                        var invalidEmail = s.trim();
                        if (invalidEmail) {
                            parsedObjs.addresses.push(new ASC.Mail.Address("",invalidEmail,false));
                            parsedObjs.errors.push({
                                message: "Incorrect email",
                                type: parseErrorTypes.IncorrectEmail,
                                errorItem: s
                            });
                        }
                    }
                }
                var e = str.replace(/[\s,;]*$/, ",");
                for (var t, i = false, o = 0, a = 0, s = e.length; s > a; a += 1) {
                    switch (e.charAt(a)) {
                    case ",":
                    case ";":
                        if (!i) {
                            t = e.substring(o, a);
                            t = $.trim(t);
                            if (t) {
                                parseAndAppend(t);
                            }
                            o = a + 1;
                        }
                        break;
                    case '"':
                        "\\" !== e.charAt(a - 1) && '"' !== e.charAt(a + 1) && (i = !i);
                    }
                }
                if (!parsedObjs.addresses.length) {
                    parseAndAppend(e.replace(/,\s*$/, ""));
                }
                return parsedObjs;
            },
            ParseAddress: function(str) {
                var parsed = ASC.Mail.Utility.ParseAddresses(str);
                if (parsed.errors.length > 0 || parsed.addresses.length !== 1) {
                    return new ASC.Mail.Address("",str,false);
                }
                return parsed.addresses[0];
            },
            IsValidEmail: function(email, options) {
                options = options || {
                    nameExistance: false
                }
                if (!options.hasOwnProperty('nameExistance')) {
                    options.nameExistance = false;
                }
                var parsed = ASC.Mail.Utility.ParseAddress(email);
                if (!options.nameExistance && parsed.name)
                    return false;
                return parsed.isValid;
            },
            IsValidDomainName: function(domain) {
                var parsed = emailAddresses.parseOneAddress("test@" + domain);
                return !!parsed && parsed.domain === domain && domain.indexOf(".") !== -1;
            },
        };
    }
    )();
}
if (typeof ASC.Mail.Address === "undefined") {
    ASC.Mail.Address = function(name, email, isValid) {
        this.name = name || "";
        this.email = email;
        this.isValid = isValid;
        function quote(text) {
            if (!text)
                return "";
            var quoted = "\"";
            for (var i = 0, len = text.length; i < len; i++) {
                var t = text[i];
                if (t === '\\' || t === '"')
                    quoted += '\\';
                quoted += t;
            }
            quoted += "\"";
            return quoted;
        }
        this.ToString = function(skipQuotes) {
            var s = !this.name ? this.email : !skipQuotes ? quote(this.name) + " <" + this.email + ">" : this.name + " <" + this.email + ">";
            return s;
        }
        ;
        this.Equals = function(addr) {
            if (typeof (addr) === "object" && (addr instanceof ASC.Mail.Address)) {
                return this === addr;
            } else if (typeof (addr) === "string") {
                var parsed = ASC.Mail.Utility.ParseAddress(addr);
                return this.email === parsed;
            }
            return false;
        }
        this.EqualsByEmail = function(addr) {
            if (typeof (addr) === "object" && (addr instanceof ASC.Mail.Address)) {
                return this.email.toLowerCase() === addr.email.toLowerCase();
            } else if (typeof (addr) === "string") {
                var parsed = ASC.Mail.Utility.ParseAddress(addr);
                return this.email.toLowerCase() === parsed.email.toLowerCase();
            }
            return false;
        }
    }
}