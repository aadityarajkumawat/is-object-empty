"use-strict";

function isObjectEmpty(object) {
    if (object instanceof RegExp || object !== Object(object)) {
        throw new Error(
            `isObjectEmpty accepts an object as an argument while ${object} was found`
        );
    }

    const keys = Object.keys(object);

    if (keys.length > 0) {
        return false;
    }
    return true;
}

module.exports.isObjectEmpty = isObjectEmpty;
