(function(global) {
    "use strict";
    function parse5322(opts) {
        function inStr() {
            return pos < len;
        }
        function curTok() {
            return parseString[pos];
        }
        function getPos() {
            return pos;
        }
        function setPos(i) {
            pos = i;
        }
        function nextTok() {
            pos += 1;
        }
        function initialize() {
            pos = 0;
            len = parseString.length;
        }
        function o(name, value) {
            return {
                name: name,
                tokens: value || "",
                semantic: value || "",
                children: []
            };
        }
        function wrap(name, ast) {
            var n;
            if (ast === null) {
                return null;
            }
            n = o(name);
            n.tokens = ast.tokens;
            n.semantic = ast.semantic;
            n.children.push(ast);
            return n;
        }
        function add(parent, child) {
            if (child !== null) {
                parent.tokens += child.tokens;
                parent.semantic += child.semantic;
            }
            parent.children.push(child);
            return parent;
        }
        function compareToken(fxnCompare) {
            var tok;
            if (!inStr()) {
                return null;
            }
            tok = curTok();
            if (fxnCompare(tok)) {
                nextTok();
                return o('token', tok);
            }
            return null;
        }
        function literal(lit) {
            return function literalFunc() {
                return wrap('literal', compareToken(function(tok) {
                    return tok === lit;
                }));
            }
            ;
        }
        function and() {
            var args = arguments;
            return function andFunc() {
                var i, s, result, start;
                start = getPos();
                s = o('and');
                for (i = 0; i < args.length; i += 1) {
                    result = args[i]();
                    if (result === null) {
                        setPos(start);
                        return null;
                    }
                    add(s, result);
                }
                return s;
            }
            ;
        }
        function or() {
            var args = arguments;
            return function orFunc() {
                var i, result, start;
                start = getPos();
                for (i = 0; i < args.length; i += 1) {
                    result = args[i]();
                    if (result !== null) {
                        return result;
                    }
                    setPos(start);
                }
                return null;
            }
            ;
        }
        function opt(prod) {
            return function optFunc() {
                var result, start;
                start = getPos();
                result = prod();
                if (result !== null) {
                    return result;
                } else {
                    setPos(start);
                    return o('opt');
                }
            }
            ;
        }
        function invis(prod) {
            return function invisFunc() {
                var result = prod();
                if (result !== null) {
                    result.semantic = "";
                }
                return result;
            }
            ;
        }
        function colwsp(prod) {
            return function collapseSemanticWhitespace() {
                var result = prod();
                if (result !== null && result.semantic.length > 0) {
                    result.semantic = " ";
                }
                return result;
            }
            ;
        }
        function star(prod, minimum) {
            return function starFunc() {
                var s, result, count, start, min;
                start = getPos();
                s = o('star');
                count = 0;
                min = minimum === undefined ? 0 : minimum;
                while ((result = prod()) !== null) {
                    count = count + 1;
                    add(s, result);
                }
                if (count >= min) {
                    return s;
                } else {
                    setPos(start);
                    return null;
                }
            }
            ;
        }
        function collapseWhitespace(s) {
            return s.replace(/([ \t]|\r\n)+/g, ' ').replace(/^\s*/, '').replace(/\s*$/, '');
        }
        function isUTF8NonAscii(tok) {
            return tok.charCodeAt(0) >= 128;
        }
        function cr() {
            return wrap('cr', literal('\r')());
        }
        function crlf() {
            return wrap('crlf', and(cr, lf)());
        }
        function dquote() {
            return wrap('dquote', literal('"')());
        }
        function htab() {
            return wrap('htab', literal('\t')());
        }
        function lf() {
            return wrap('lf', literal('\n')());
        }
        function sp() {
            return wrap('sp', literal(' ')());
        }
        function vchar() {
            return wrap('vchar', compareToken(function vcharFunc(tok) {
                var code = tok.charCodeAt(0);
                var accept = (0x21 <= code && code <= 0x7E);
                if (opts.rfc6532) {
                    accept = accept || isUTF8NonAscii(tok);
                }
                return accept;
            }));
        }
        function wsp() {
            return wrap('wsp', or(sp, htab)());
        }
        function quotedPair() {
            var qp = wrap('quoted-pair', or(and(literal('\\'), or(vchar, wsp)), obsQP)());
            if (qp === null) {
                return null;
            }
            qp.semantic = qp.semantic[1];
            return qp;
        }
        function fws() {
            return wrap('fws', or(obsFws, and(opt(and(star(wsp), invis(crlf))), star(wsp, 1)))());
        }
        function ctext() {
            return wrap('ctext', or(function ctextFunc1() {
                return compareToken(function ctextFunc2(tok) {
                    var code = tok.charCodeAt(0);
                    var accept = (33 <= code && code <= 39) || (42 <= code && code <= 91) || (93 <= code && code <= 126);
                    if (opts.rfc6532) {
                        accept = accept || isUTF8NonAscii(tok);
                    }
                    return accept;
                });
            }, obsCtext)());
        }
        function ccontent() {
            return wrap('ccontent', or(ctext, quotedPair, comment)());
        }
        function comment() {
            return wrap('comment', and(literal('('), star(and(opt(fws), ccontent)), opt(fws), literal(')'))());
        }
        function cfws() {
            return wrap('cfws', or(and(star(and(opt(fws), comment), 1), opt(fws)), fws)());
        }
        function atext() {
            return wrap('atext', compareToken(function atextFunc(tok) {
                var accept = ('a' <= tok && tok <= 'z') || ('A' <= tok && tok <= 'Z') || ('0' <= tok && tok <= '9') || (['!', '#', '$', '%', '&', '\'', '*', '+', '-', '/', '=', '?', '^', '_', '`', '{', '|', '}', '~'].indexOf(tok) >= 0);
                if (opts.rfc6532) {
                    accept = accept || isUTF8NonAscii(tok);
                }
                return accept;
            }));
        }
        function atom() {
            return wrap('atom', and(colwsp(opt(cfws)), star(atext, 1), colwsp(opt(cfws)))());
        }
        function dotAtomText() {
            var s, maybeText;
            s = wrap('dot-atom-text', star(atext, 1)());
            if (s === null) {
                return s;
            }
            maybeText = star(and(literal('.'), star(atext, 1)))();
            if (maybeText !== null) {
                add(s, maybeText);
            }
            return s;
        }
        function dotAtom() {
            return wrap('dot-atom', and(invis(opt(cfws)), dotAtomText, invis(opt(cfws)))());
        }
        function qtext() {
            return wrap('qtext', or(function qtextFunc1() {
                return compareToken(function qtextFunc2(tok) {
                    var code = tok.charCodeAt(0);
                    var accept = (33 === code) || (35 <= code && code <= 91) || (93 <= code && code <= 126);
                    if (opts.rfc6532) {
                        accept = accept || isUTF8NonAscii(tok);
                    }
                    return accept;
                });
            }, obsQtext)());
        }
        function qcontent() {
            return wrap('qcontent', or(qtext, quotedPair)());
        }
        function quotedString() {
            return wrap('quoted-string', and(invis(opt(cfws)), invis(dquote), star(and(opt(colwsp(fws)), qcontent)), opt(invis(fws)), invis(dquote), invis(opt(cfws)))());
        }
        function word() {
            return wrap('word', or(atom, quotedString)());
        }
        function phrase() {
            return wrap('phrase', or(obsPhrase, star(word, 1))());
        }
        function address() {
            return wrap('address', or(mailbox, group)());
        }
        function mailbox() {
            return wrap('mailbox', or(nameAddr, addrSpec)());
        }
        function nameAddr() {
            return wrap('name-addr', and(opt(displayName), angleAddr)());
        }
        function angleAddr() {
            return wrap('angle-addr', or(and(invis(opt(cfws)), literal('<'), addrSpec, literal('>'), invis(opt(cfws))), obsAngleAddr)());
        }
        function group() {
            return wrap('group', and(displayName, literal(':'), opt(groupList), literal(';'), invis(opt(cfws)))());
        }
        function displayName() {
            return wrap('display-name', function phraseFixedSemantic() {
                var result = phrase();
                if (result !== null) {
                    result.semantic = collapseWhitespace(result.semantic);
                }
                return result;
            }());
        }
        function mailboxList() {
            return wrap('mailbox-list', or(and(mailbox, star(and(literal(','), mailbox))), obsMboxList)());
        }
        function addressList() {
            return wrap('address-list', or(and(address, star(and(literal(','), address))), obsAddrList)());
        }
        function groupList() {
            return wrap('group-list', or(mailboxList, invis(cfws), obsGroupList)());
        }
        function localPart() {
            return wrap('local-part', or(obsLocalPart, dotAtom, quotedString)());
        }
        function dtext() {
            return wrap('dtext', or(function dtextFunc1() {
                return compareToken(function dtextFunc2(tok) {
                    var code = tok.charCodeAt(0);
                    var accept = (33 <= code && code <= 90) || (94 <= code && code <= 126);
                    if (opts.rfc6532) {
                        accept = accept || isUTF8NonAscii(tok);
                    }
                    return accept;
                });
            }, obsDtext)());
        }
        function domainLiteral() {
            return wrap('domain-literal', and(invis(opt(cfws)), literal('['), star(and(opt(fws), dtext)), opt(fws), literal(']'), invis(opt(cfws)))());
        }
        function domain() {
            return wrap('domain', function domainCheckTLD() {
                var result = or(obsDomain, dotAtom, domainLiteral)();
                if (opts.rejectTLD) {
                    if (result && result.semantic && result.semantic.indexOf('.') < 0) {
                        return null;
                    }
                }
                if (result) {
                    result.semantic = result.semantic.replace(/\s+/g, '');
                }
                return result;
            }());
        }
        function addrSpec() {
            return wrap('addr-spec', and(localPart, literal('@'), domain)());
        }
        function fromSpec() {
            return wrap('from', or(mailboxList, addressList)());
        }
        function senderSpec() {
            return wrap('sender', or(mailbox, address)());
        }
        function replyToSpec() {
            return wrap('reply-to', addressList());
        }
        function obsNoWsCtl() {
            return opts.strict ? null : wrap('obs-NO-WS-CTL', compareToken(function(tok) {
                var code = tok.charCodeAt(0);
                return ((1 <= code && code <= 8) || (11 === code || 12 === code) || (14 <= code && code <= 31) || (127 === code));
            }));
        }
        function obsCtext() {
            return opts.strict ? null : wrap('obs-ctext', obsNoWsCtl());
        }
        function obsQtext() {
            return opts.strict ? null : wrap('obs-qtext', obsNoWsCtl());
        }
        function obsQP() {
            return opts.strict ? null : wrap('obs-qp', and(literal('\\'), or(literal('\0'), obsNoWsCtl, lf, cr))());
        }
        function obsPhrase() {
            return opts.strict ? null : wrap('obs-phrase', and(word, star(or(word, literal('.'), colwsp(cfws))))());
        }
        function obsFws() {
            return opts.strict ? null : wrap('obs-FWS', star(and(invis(opt(crlf)), wsp), 1)());
        }
        function obsAngleAddr() {
            return opts.strict ? null : wrap('obs-angle-addr', and(invis(opt(cfws)), literal('<'), obsRoute, addrSpec, literal('>'), invis(opt(cfws)))());
        }
        function obsRoute() {
            return opts.strict ? null : wrap('obs-route', and(obsDomainList, literal(':'))());
        }
        function obsDomainList() {
            return opts.strict ? null : wrap('obs-domain-list', and(star(or(invis(cfws), literal(','))), literal('@'), domain, star(and(literal(','), invis(opt(cfws)), opt(and(literal('@'), domain)))))());
        }
        function obsMboxList() {
            return opts.strict ? null : wrap('obs-mbox-list', and(star(and(invis(opt(cfws)), literal(','))), mailbox, star(and(literal(','), opt(and(mailbox, invis(cfws))))))());
        }
        function obsAddrList() {
            return opts.strict ? null : wrap('obs-addr-list', and(star(and(invis(opt(cfws)), literal(','))), address, star(and(literal(','), opt(and(address, invis(cfws))))))());
        }
        function obsGroupList() {
            return opts.strict ? null : wrap('obs-group-list', and(star(and(invis(opt(cfws)), literal(',')), 1), invis(opt(cfws)))());
        }
        function obsLocalPart() {
            return opts.strict ? null : wrap('obs-local-part', and(word, star(and(literal('.'), word)))());
        }
        function obsDomain() {
            return opts.strict ? null : wrap('obs-domain', and(atom, star(and(literal('.'), atom)))());
        }
        function obsDtext() {
            return opts.strict ? null : wrap('obs-dtext', or(obsNoWsCtl, quotedPair)());
        }
        function findNode(name, root) {
            var i, stack, node;
            if (root === null || root === undefined) {
                return null;
            }
            stack = [root];
            while (stack.length > 0) {
                node = stack.pop();
                if (node.name === name) {
                    return node;
                }
                for (i = node.children.length - 1; i >= 0; i -= 1) {
                    stack.push(node.children[i]);
                }
            }
            return null;
        }
        function findAllNodes(name, root) {
            var i, stack, node, result;
            if (root === null || root === undefined) {
                return null;
            }
            stack = [root];
            result = [];
            while (stack.length > 0) {
                node = stack.pop();
                if (node.name === name) {
                    result.push(node);
                }
                for (i = node.children.length - 1; i >= 0; i -= 1) {
                    stack.push(node.children[i]);
                }
            }
            return result;
        }
        function findAllNodesNoChildren(names, root) {
            var i, stack, node, result, namesLookup;
            if (root === null || root === undefined) {
                return null;
            }
            stack = [root];
            result = [];
            namesLookup = {};
            for (i = 0; i < names.length; i += 1) {
                namesLookup[names[i]] = true;
            }
            while (stack.length > 0) {
                node = stack.pop();
                if (node.name in namesLookup) {
                    result.push(node);
                } else {
                    for (i = node.children.length - 1; i >= 0; i -= 1) {
                        stack.push(node.children[i]);
                    }
                }
            }
            return result;
        }
        function giveResult(ast) {
            var addresses, groupsAndMailboxes, i, groupOrMailbox, result;
            if (ast === null) {
                return null;
            }
            addresses = [];
            groupsAndMailboxes = findAllNodesNoChildren(['group', 'mailbox'], ast);
            for (i = 0; i < groupsAndMailboxes.length; i += 1) {
                groupOrMailbox = groupsAndMailboxes[i];
                if (groupOrMailbox.name === 'group') {
                    addresses.push(giveResultGroup(groupOrMailbox));
                } else if (groupOrMailbox.name === 'mailbox') {
                    addresses.push(giveResultMailbox(groupOrMailbox));
                }
            }
            result = {
                ast: ast,
                addresses: addresses,
            };
            if (opts.simple) {
                result = simplifyResult(result);
            }
            if (opts.oneResult) {
                return oneResult(result);
            }
            if (opts.simple) {
                return result && result.addresses;
            } else {
                return result;
            }
        }
        function giveResultGroup(group) {
            var i;
            var groupName = findNode('display-name', group);
            var groupResultMailboxes = [];
            var mailboxes = findAllNodesNoChildren(['mailbox'], group);
            for (i = 0; i < mailboxes.length; i += 1) {
                groupResultMailboxes.push(giveResultMailbox(mailboxes[i]));
            }
            return {
                node: group,
                parts: {
                    name: groupName,
                },
                type: group.name,
                name: grabSemantic(groupName),
                addresses: groupResultMailboxes,
            };
        }
        function giveResultMailbox(mailbox) {
            var name = findNode('display-name', mailbox);
            var aspec = findNode('addr-spec', mailbox);
            var comments = findAllNodes('cfws', mailbox);
            var local = findNode('local-part', aspec);
            var domain = findNode('domain', aspec);
            return {
                node: mailbox,
                parts: {
                    name: name,
                    address: aspec,
                    local: local,
                    domain: domain,
                    comments: comments
                },
                type: mailbox.name,
                name: grabSemantic(name),
                address: grabSemantic(aspec),
                local: grabSemantic(local),
                domain: grabSemantic(domain),
                groupName: grabSemantic(mailbox.groupName),
            };
        }
        function grabSemantic(n) {
            return n !== null && n !== undefined ? n.semantic : null;
        }
        function simplifyResult(result) {
            var i;
            if (result && result.addresses) {
                for (i = 0; i < result.addresses.length; i += 1) {
                    delete result.addresses[i].node;
                }
            }
            return result;
        }
        function oneResult(result) {
            if (!result) {
                return null;
            }
            if (!opts.partial && result.addresses.length > 1) {
                return null;
            }
            return result.addresses && result.addresses[0];
        }
        var parseString, pos, len, parsed, startProduction;
        opts = handleOpts(opts, {});
        if (opts === null) {
            return null;
        }
        parseString = opts.input;
        startProduction = {
            'address': address,
            'address-list': addressList,
            'angle-addr': angleAddr,
            'from': fromSpec,
            'group': group,
            'mailbox': mailbox,
            'mailbox-list': mailboxList,
            'reply-to': replyToSpec,
            'sender': senderSpec,
        }[opts.startAt] || addressList;
        if (!opts.strict) {
            initialize();
            opts.strict = true;
            parsed = startProduction(parseString);
            if (opts.partial || !inStr()) {
                return giveResult(parsed);
            }
            opts.strict = false;
        }
        initialize();
        parsed = startProduction(parseString);
        if (!opts.partial && inStr()) {
            return null;
        }
        return giveResult(parsed);
    }
    function parseOneAddressSimple(opts) {
        return parse5322(handleOpts(opts, {
            oneResult: true,
            rfc6532: true,
            simple: true,
            startAt: 'address-list',
        }));
    }
    function parseAddressListSimple(opts) {
        return parse5322(handleOpts(opts, {
            rfc6532: true,
            simple: true,
            startAt: 'address-list',
        }));
    }
    function parseFromSimple(opts) {
        return parse5322(handleOpts(opts, {
            rfc6532: true,
            simple: true,
            startAt: 'from',
        }));
    }
    function parseSenderSimple(opts) {
        return parse5322(handleOpts(opts, {
            oneResult: true,
            rfc6532: true,
            simple: true,
            startAt: 'sender',
        }));
    }
    function parseReplyToSimple(opts) {
        return parse5322(handleOpts(opts, {
            rfc6532: true,
            simple: true,
            startAt: 'reply-to',
        }));
    }
    function handleOpts(opts, defs) {
        function isString(str) {
            return Object.prototype.toString.call(str) === '[object String]';
        }
        function isObject(o) {
            return o === Object(o);
        }
        function isNullUndef(o) {
            return o === null || o === undefined;
        }
        var defaults, o;
        if (isString(opts)) {
            opts = {
                input: opts
            };
        } else if (!isObject(opts)) {
            return null;
        }
        if (!isString(opts.input)) {
            return null;
        }
        if (!defs) {
            return null;
        }
        defaults = {
            oneResult: false,
            partial: false,
            rejectTLD: false,
            rfc6532: false,
            simple: false,
            startAt: 'address-list',
            strict: false,
        };
        for (o in defaults) {
            if (isNullUndef(opts[o])) {
                opts[o] = !isNullUndef(defs[o]) ? defs[o] : defaults[o];
            }
        }
        return opts;
    }
    parse5322.parseOneAddress = parseOneAddressSimple;
    parse5322.parseAddressList = parseAddressListSimple;
    parse5322.parseFrom = parseFromSimple;
    parse5322.parseSender = parseSenderSimple;
    parse5322.parseReplyTo = parseReplyToSimple;
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = parse5322;
    } else {
        global.emailAddresses = parse5322;
    }
}(this));
