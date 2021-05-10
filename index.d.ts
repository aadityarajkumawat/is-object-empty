declare namespace emptyObject {
    type RealObject = { [key: string]: any };
}

declare const emptyObject: {
    isObjectEmpty: (object: emptyObject.RealObject) => boolean;
};

export = emptyObject;
