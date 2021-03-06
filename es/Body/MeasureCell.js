import * as React from 'react';
import ResizeObserver from 'rc-resize-observer';
export default function MeasureCell(_ref) {
  var columnKey = _ref.columnKey,
      onColumnResize = _ref.onColumnResize;
  var cellRef = React.useRef();
  React.useEffect(function () {
    if (cellRef.current) {
      onColumnResize(columnKey, cellRef.current.offsetWidth);
    }
  }, []);
  return React.createElement(ResizeObserver, {
    onResize: function onResize(_ref2) {
      var offsetWidth = _ref2.offsetWidth;
      onColumnResize(columnKey, offsetWidth);
    }
  }, React.createElement("td", {
    ref: cellRef,
    style: {
      padding: 0,
      border: 0,
      height: 0
    }
  }));
}