import { useEffect } from "react";
import { enableFullscreenOnImages } from '../scripts/script';

export function useEnhancements() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            enableFullscreenOnImages();
        }, 0);

        return () => {
            clearTimeout(timeout);
        };
    }, []);
}
