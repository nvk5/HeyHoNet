import React, { useState } from 'react';
import usePromptCondition from '../../../../hooks/usePromptCondition';
import MainButton from '../../../buttons/MainButton/MainButton';
import { Prompt } from 'react-router-dom/cjs/react-router-dom.min';
import useActivityYears from '../hooks/useActivityYears';
import useCountryStateCity from '../hooks/useCountryStateCity';
import { useSelector } from 'react-redux';
import Text from '../../../form-elements/Text';
import Select from '../../../form-elements/Select';
import { edit } from '../../../../redux/actions/profile';
import useHandleSubmit from '../../../../hooks/useHandleSubmit';
import { resetEditProfileNotif } from '../../../../redux/reducers/profile/editProfileReducer';
import useUpdatingForm from '../../../../hooks/useUpdatingForm';

const EducationInfo = () => {
    const { currentUser } = useSelector(state => state.profile);
    const { loading, editSuccess, error } = useSelector(state => state.editprofile);

    const [country, setCountry] = useState(currentUser.personalInfo.education?.educationCountry || '');
    const [state, setState] = useState(currentUser.personalInfo.education?.educationState || '');
    const [city, setCity] = useState(currentUser.personalInfo.education?.educationCity || '');
    const [institution, setInstitution] = useState(currentUser.personalInfo.education?.institution || '');
    const [faculty, setFaculty] = useState(currentUser.personalInfo.education?.faculty || '');
    const [modeOfStudy, setModeOfStudy] = useState(currentUser.personalInfo.education?.modeOfStudy || '');
    const [status, setStatus] = useState(currentUser.personalInfo.education?.status || '');
    const [entranceYear, setEntranceYear] = useState(currentUser.personalInfo.education?.entranceYear || '');
    const [graduationYear, setGraduationYear] = useState(currentUser.personalInfo.education?.graduationYear || '');    
    
    const { countryCities, countryStates, countryOptions } = useCountryStateCity(country, state);

    const studyMode = [
        'Full-time',
        'Part-time',
        'Blended',
        'External',
        'Distance'
    ].map(item => (
        { value: item, label: item }
    ));

    const studyStatus = [
        'Undergraduate applicant',
        'Student (Specialist)',
        'Student (Bachelor\'s)',
        'Student (Master\'s)',
        'Alumnus (Specialist)',
        'Alumnus (Bachelor\'s)',
        'Alumnus (Master\'s)',
        'Postgraduate Student',
        'Candidate of Sciences',
        'PhD',
        'Intern',
        'Resident',
        'Postgraduate applicant',
        'Assistant',
        'Doctoral student',
        'Adjunct professor'
    ].map(item => ({ value: item, label: item }));

    const { formNotEmpty } = usePromptCondition([
        country, state, city, institution, faculty, modeOfStudy, status, entranceYear, graduationYear
    ]);


    const { activeYears } = useActivityYears();

    const { updateFormStatus } = useUpdatingForm(
        loading, editSuccess, error, resetEditProfileNotif, 'Successfully updated'
    );

    const { handleSubmit } = useHandleSubmit(edit, '/education');

    return (
        <form className="edit-profile-form" name="education" onSubmit={handleSubmit} autoComplete="off">
            <Prompt
                when={formNotEmpty}
                message={JSON.stringify({
                    header: 'Warning',
                    body: 'You have changed your education information. Are you sure you want to leave without saving your changes?'
                })}
            />
            <fieldset className="edit-profile-form__group">
                <legend className="edit-profile-form__group-headlines">Education</legend>
                <Select name="educationCountry" options={countryOptions} value={country} setValue={(value) => setCountry(value)} placeholder="Country" />
                <Select name="educationState" options={countryStates} value={state} setValue={(value) => setState(value)} placeholder="State" />
                <Select name="educationCity" options={countryCities} value={city} setValue={(value) => setCity(value)} placeholder="City" />
                <Text name="institution" placeholder="Institution" value={institution} setValue={setInstitution} />
                <Text name="faculty" placeholder="Faculty" value={faculty} setValue={setFaculty} />
                <Select name="modeOfStudy" options={studyMode} value={modeOfStudy} setValue={(value) => setModeOfStudy(value)} placeholder="Mode of study" />
                <Select name="status" options={studyStatus} value={status} setValue={(value) => setStatus(value)} placeholder="Status" />
                <Select name="entranceYear" options={activeYears} value={entranceYear} setValue={(value) => setEntranceYear(value)} placeholder="Entrance year" />
                <Select name="graduationYear" options={activeYears} value={graduationYear} setValue={(value) => setGraduationYear(value)} placeholder="Graduation year" />
            </fieldset>
            {updateFormStatus}
            <div className="edit-profile-form__buttons">
                <MainButton type="link" url="/" text="Cancel" />
                <MainButton text="Save" type="submit" />
            </div>
        </form>
    );
}

export default EducationInfo;
