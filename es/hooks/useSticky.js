import _typeof from "@babel/runtime/helpers/esm/typeof";
import * as React from 'react';
export default function useSticky(sticky, prefixCls) {
  return React.useMemo(function () {
    var isSticky = !!sticky;
    return {
      isSticky: isSticky,
      stickyClassName: isSticky ? "".concat(prefixCls, "-sticky-header") : '',
      offsetHeader: _typeof(sticky) === 'object' ? sticky.offsetHeader || 0 : 0,
      offsetScroll: _typeof(sticky) === 'object' ? sticky.offsetScroll || 0 : 0
    };
  }, [sticky, prefixCls]);
}