"use-strict";

function isObjectEmpty(object) {
    const keys = Object.keys(object);

    if (keys.length > 0) {
        return false;
    }
    return true;
}

module.exports.isObjectEmpty = isObjectEmpty;
