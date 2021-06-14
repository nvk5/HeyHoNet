import { useEffect, useState } from 'react';

const useAnimationOnMount = () => {
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(true);

        return () => {
            setAnimation(false);
        }
    }, [])

    return { animation };
}

export default useAnimationOnMount;