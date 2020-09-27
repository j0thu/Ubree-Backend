"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePhoneNumber = void 0;
exports.validatePhoneNumber = (value) => {
    let phoneNumRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (value.match(phoneNumRegex)) {
        return true;
    }
    return false;
};
