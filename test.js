const test = require("ava");
const { isObjectEmpty } = require("./index");

test("isObjectEmpty()", (t) => {
    t.true(isObjectEmpty({}));
    t.false(isObjectEmpty({ a: 67 }));
    t.false(isObjectEmpty({ name: "Pegasus" }));
});
