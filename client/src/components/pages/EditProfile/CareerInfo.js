import React, { useState } from 'react';
import InputText from '../../../utils/InputText/InputText';
import MainButton from '../../buttons/MainButton/MainButton';

const CareerInfo = () => {
    const [jobCountry, setJobCountry] = useState('');
    const [jobCity, setJobCity] = useState('');
    const [jobStartYear, setJobStartYear] = useState('');
    const [jobEndYear, setJobEndYear] = useState('');
    const [company, setCompany] = useState('');
    const [jobPosition, setJobPosition] = useState('');

    return (
        <form className="edit-profile-form">
            <fieldset className="edit-profile-form__group">
                <legend className="edit-profile-form__group-headlines">Career</legend>
                <InputText type="text" placeholder="Country" value={jobCountry} setValue={setJobCountry} />
                <InputText type="text" placeholder="City" value={jobCity} setValue={setJobCity} />
                <InputText type="text" placeholder="From" value={jobStartYear} setValue={setJobStartYear} />
                <InputText type="text" placeholder="To" value={jobEndYear} setValue={setJobEndYear} />
                <InputText type="text" placeholder="Company" value={company} setValue={setCompany} />
                <InputText type="text" placeholder="Position" value={jobPosition} setValue={setJobPosition} />
            </fieldset>
            <MainButton type="link" url="/" text="Cancel" />
            <MainButton text="Save" />
        </form>
    );
}

export default CareerInfo;
