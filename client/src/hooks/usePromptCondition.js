import { useCallback, useEffect, useState } from 'react';

const usePromptCondition = (fields) => {

    const [formNotEmpty, setFormNotEmpty] = useState(false);

    const preventReload = useCallback((event) => {
        event.preventDefault();
        event.returnValue = '';
    }, []);

    useEffect(() => {
        setFormNotEmpty(fields.some(field => field));

        if (formNotEmpty) {
            window.addEventListener('beforeunload', preventReload);
        }

        return () => {
            window.removeEventListener('beforeunload', preventReload);
        }
    }, [fields, formNotEmpty, preventReload]);

    return { formNotEmpty };
}

export default usePromptCondition;
