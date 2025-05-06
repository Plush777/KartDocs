import { useCallback } from "react";

export default function useBodyScrollLock() {
    const lockScroll = useCallback(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.width = '100%';
    }, []);

    const openScroll = useCallback(() => {
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('width');
    }, []);

  return { lockScroll, openScroll };
}