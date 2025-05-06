import { useState } from "react";

export default function useCopyUrl() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert('URL이 복사되었습니다.');
            setCopied(true);
        } catch (err) {
            console.error('복사에 실패하였습니다.', err);
        }
    };

    return {
        copied,
        handleCopy
    };
}