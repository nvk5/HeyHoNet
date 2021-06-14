import { useMemo } from 'react';
import csc from 'country-state-city';

const useCountryStateCity = (country, state) => {


    const countryOptions = useMemo(() => {
        return csc.getAllCountries().map(({ name, isoCode }) => ({ value: name, label: name, isoCode }));
    }, []);

    const countryStates = useMemo(() => {
        return csc.getStatesOfCountry(country?.isoCode).map(({ name, isoCode, countryCode }) => (
            { value: name, label: name, isoCode, countryCode }
        ))
    }, [country]);

    const countryCities = useMemo(() => {
        return csc.getCitiesOfState(state?.countryCode, state?.isoCode).map(({ name, countryCode, stateCode }) => (
            { value: name, label: name, countryCode, stateCode }
        ))
    }, [state]);

    return { countryOptions, countryStates, countryCities };
}

export default useCountryStateCity;
