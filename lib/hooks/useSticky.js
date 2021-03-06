"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useSticky;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var React = _interopRequireWildcard(require("react"));

function useSticky(sticky, prefixCls) {
  return React.useMemo(function () {
    var isSticky = !!sticky;
    return {
      isSticky: isSticky,
      stickyClassName: isSticky ? "".concat(prefixCls, "-sticky-header") : '',
      offsetHeader: (0, _typeof2.default)(sticky) === 'object' ? sticky.offsetHeader || 0 : 0,
      offsetScroll: (0, _typeof2.default)(sticky) === 'object' ? sticky.offsetScroll || 0 : 0
    };
  }, [sticky, prefixCls]);
}