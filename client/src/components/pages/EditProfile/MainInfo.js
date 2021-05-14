import React, { useState } from 'react';
import InputText from '../../../utils/InputText/InputText';
import MainButton from '../../buttons/MainButton/MainButton';

const MainInfo = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [relationship, setRelationship] = useState('');
    const [age, setAge] = useState('');
    const [hometown, setHometown] = useState('');

    return (
        <form className="edit-profile-form">
            <fieldset className="edit-profile-form__group">
                <legend className="edit-profile-form__group-headlines">Main info</legend>
                <InputText type="text" placeholder="First name" value={firstName} setValue={setFirstName} />
                <InputText type="text" placeholder="Last name" value={lastName} setValue={setLastName} />
                <InputText type="text" placeholder="Gender" value={gender} setValue={setGender} />
                <InputText type="text" placeholder="Relationship" value={relationship} setValue={setRelationship} />
                <InputText type="text" placeholder="Age" value={age} setValue={setAge} />
                <InputText type="text" placeholder="Hometown" value={hometown} setValue={setHometown} />
            </fieldset>
            <MainButton type="link" url="/" text="Cancel" />
            <MainButton text="Save" />
        </form>
    );
}

export default MainInfo;
