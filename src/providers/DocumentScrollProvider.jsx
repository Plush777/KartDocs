"use client";

import { useEffect } from "react";
import documentScroll from "scripts/documentScroll";

export default function DocumentScrollProvider() {
    const { handleDocumentScroll } = documentScroll();

    useEffect(() => {
        handleDocumentScroll();
    }, [handleDocumentScroll]);
    
    return <></>
}