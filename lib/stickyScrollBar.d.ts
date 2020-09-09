import * as React from 'react';
interface StickyScrollBarProps {
    scrollBodyRef: React.RefObject<HTMLDivElement>;
    onScroll: (params: {
        scrollLeft?: number;
    }) => void;
    offsetScroll: number;
}
declare const _default: React.ForwardRefExoticComponent<StickyScrollBarProps & React.RefAttributes<unknown>>;
export default _default;
