import React, { useState } from 'react';
import InputText from '../../../utils/InputText/InputText';
import MainButton from '../../buttons/MainButton/MainButton';

const EducationInfo = () => {
    const [educationCountry, setEducationCountry] = useState('');
    const [educationCity, setEducationCity] = useState('');
    const [institution, setInstitution] = useState('');
    const [faculty, setFaculty] = useState('');
    const [entranceYear, setEntranceYear] = useState('');
    const [graduationYear, setGraduationYear] = useState('');

    return (
        <form className="edit-profile-form">
            <fieldset className="edit-profile-form__group">
                <legend className="edit-profile-form__group-headlines">Education</legend>
                <InputText type="text" placeholder="Country" value={educationCountry} setValue={setEducationCountry} />
                <InputText type="text" placeholder="City" value={educationCity} setValue={setEducationCity} />
                <InputText type="text" placeholder="Institution" value={institution} setValue={setInstitution} />
                <InputText type="text" placeholder="Faculty" value={faculty} setValue={setFaculty} />
                <InputText type="text" placeholder="Entrance year" value={entranceYear} setValue={setEntranceYear} />
                <InputText type="text" placeholder="Graduation year" value={graduationYear} setValue={setGraduationYear} />
            </fieldset>
            <MainButton type="link" url="/" text="Cancel" />
            <MainButton text="Save" />
        </form>
    );
}

export default EducationInfo;
