"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionEntries = exports.sessionFromEntries = void 0;
var tslib_1 = require("tslib");
/**
 * Like Object.fromEntries(), but normalizes the keys and filters out null values.
 */
function sessionFromEntries(entries) {
    var obj = Object.fromEntries(entries
        .filter(function (_a) {
        var _b = tslib_1.__read(_a, 2), _key = _b[0], value = _b[1];
        return value !== null;
    })
        .map(function (_a) {
        var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
        switch (key.toLowerCase()) {
            case 'isonline':
                return ['isOnline', value];
            case 'accesstoken':
                return ['accessToken', value];
            default:
                return [key.toLowerCase(), value];
        }
    }));
    if (typeof obj.isOnline === 'string') {
        obj.isOnline = obj.isOnline.toString().toLowerCase() === 'true';
    }
    else if (typeof obj.isOnline === 'number') {
        obj.isOnline = Boolean(obj.isOnline);
    }
    if (obj.scope)
        obj.scope = obj.scope.toString();
    return obj;
}
exports.sessionFromEntries = sessionFromEntries;
var includedKeys = [
    'id',
    'shop',
    'state',
    'isOnline',
    'scope',
    'accessToken',
];
function sessionEntries(session) {
    return Object.entries(session).filter(function (_a) {
        var _b = tslib_1.__read(_a, 1), key = _b[0];
        return includedKeys.includes(key);
    });
}
exports.sessionEntries = sessionEntries;
