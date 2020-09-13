"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var prop_types_1 = require("prop-types");
// @ts-ignore
exports["default"] = react_native_1.requireNativeComponent("BaiduMapHeatMap", {
    propTypes: __assign(__assign({}, react_native_1.ViewPropTypes), { points: prop_types_1.arrayOf(prop_types_1.shape({
            latitude: prop_types_1.number.isRequired,
            longitude: prop_types_1.number.isRequired,
            intensity: prop_types_1.number
        })).isRequired, radius: prop_types_1.number, opacity: prop_types_1.number })
});
