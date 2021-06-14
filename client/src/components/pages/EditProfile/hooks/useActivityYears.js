import { useMemo } from 'react';

const useActivityYears = () => {
    const now = new Date().getFullYear();

    const activeYears = useMemo(() => {
        const result = [];

        for (let i = 1900; i <= now; i++) {
            result.push({ value: String(i), label: String(i) });
        }

        return result.reverse();
    }, [now]);

    return { activeYears }
}

export default useActivityYears;
