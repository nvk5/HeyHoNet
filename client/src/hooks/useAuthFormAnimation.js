import { useEffect, useState } from 'react';

const useAuthFormAnimation = () => {
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(true);

        return () => {
            setAnimation(false);
        }
    }, [])

    return { animation };
}

export default useAuthFormAnimation;