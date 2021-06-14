import React, { useState } from 'react';
import usePromptCondition from '../../../../hooks/usePromptCondition';
import MainButton from '../../../buttons/MainButton/MainButton';
import { Prompt } from 'react-router-dom/cjs/react-router-dom.min';
import useCountryStateCity from '../hooks/useCountryStateCity';
import useActivityYears from '../hooks/useActivityYears';
import { useSelector } from 'react-redux';
import Select from '../../../form-elements/Select';
import Text from '../../../form-elements/Text';
import { edit } from '../../../../redux/actions/profile';
import useHandleSubmit from '../../../../hooks/useHandleSubmit';
import { resetEditProfileNotif } from '../../../../redux/reducers/profile/editProfileReducer';
import useUpdatingForm from '../../../../hooks/useUpdatingForm';

const CareerInfo = () => {
    const {currentUser} = useSelector(state => state.profile);
    const { loading, editSuccess, error } = useSelector(state => state.editprofile);

    const [country, setCountry] = useState(currentUser.personalInfo.career?.careerCountry || '');
    const [state, setState] = useState(currentUser.personalInfo.career?.careerState || '');
    const [city, setCity] = useState(currentUser.personalInfo.career?.careerCity || '');
    const [jobStartYear, setJobStartYear] = useState(currentUser.personalInfo.career?.from || '');
    const [jobEndYear, setJobEndYear] = useState(currentUser.personalInfo.career?.to || '');
    const [company, setCompany] = useState(currentUser.personalInfo.career?.company || '');
    const [jobPosition, setJobPosition] = useState(currentUser.personalInfo.career?.position || '');

    const { formNotEmpty } = usePromptCondition([
        country, state, city, jobEndYear, company, jobPosition
    ]);

    const { countryCities, countryStates, countryOptions} = useCountryStateCity(country, state);
    const { activeYears } = useActivityYears();

    const { updateFormStatus } = useUpdatingForm(
        loading, editSuccess, error, resetEditProfileNotif, 'Successfully updated'
    );

    const { handleSubmit } = useHandleSubmit(edit, '/career');

    return (
        <form className="edit-profile-form" onSubmit={handleSubmit} autoComplete="off">
            <Prompt
                when={formNotEmpty}
                message={JSON.stringify({
                    header: 'Warning',
                    body: 'You have changed information about your work. Are you sure you want to leave without saving your changes?'
                })}
            />
            <fieldset className="edit-profile-form__group">
                <legend className="edit-profile-form__group-headlines">Career</legend>
                <Select name="careerCountry" options={countryOptions} value={country} setValue={(value) => setCountry(value)} placeholder="Country" />
                <Select name="careerState" options={countryStates} value={state} setValue={(value) => setState(value)} placeholder="State" />
                <Select name="careerCity" options={countryCities} value={city} setValue={(value) => setCity(value)} placeholder="City" />
                <Text name="company" placeholder="Company" value={company} setValue={setCompany} />
                <Text name="position" placeholder="Position" value={jobPosition} setValue={setJobPosition} />
                <Select name="from" options={activeYears} value={jobStartYear} setValue={(value) => setJobStartYear(value)} placeholder="From" />
                <Select name="to" options={activeYears} value={jobEndYear} setValue={(value) => setJobEndYear(value)} placeholder="To" />
            </fieldset>
            {updateFormStatus}
            <div className="edit-profile-form__buttons">
                <MainButton type="link" url="/" text="Cancel" />
                <MainButton text="Save" type="submit"/>
            </div>
        </form>
    );
}

export default CareerInfo;
