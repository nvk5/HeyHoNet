import React, { useState } from 'react';
import MainButton from '../../../buttons/MainButton/MainButton';
import { Prompt } from 'react-router-dom';
import usePromptCondition from '../../../../hooks/usePromptCondition';
import useHandleSubmit from '../../../../hooks/useHandleSubmit';
import { useSelector } from 'react-redux';
import Text from '../../../form-elements/Text';
import Number from '../../../form-elements/Number';
import Select from '../../../form-elements/Select';
import { edit } from '../../../../redux/actions/profile';
import { resetEditProfileNotif } from '../../../../redux/reducers/profile/editProfileReducer';
import useUpdatingForm from '../../../../hooks/useUpdatingForm';

const MainInfo = () => {
    const { currentUser } = useSelector(state => state.profile);
    const { loading, editSuccess, error } = useSelector(state => state.editprofile);
    
    const [firstName, setFirstName] = useState(currentUser.personalInfo.mainInfo.firstName || '');
    const [lastName, setLastName] = useState(currentUser.personalInfo.mainInfo.lastName || '');
    const [gender, setGender] = useState(currentUser.personalInfo.mainInfo.gender || '');
    const [relationship, setRelationship] = useState(currentUser.personalInfo.mainInfo.relationship || '');
    const [age, setAge] = useState(currentUser.personalInfo.mainInfo.age || '');
    const [hometown, setHometown] = useState(currentUser.personalInfo.mainInfo.hometown || '');

    const relationshipFields = [
        'Single',
        'In a relationship',
        'Engaged',
        'Married',
        'In a civil union',
        'In love',
        'It\'s complicated',
        'Actively searching'
    ].map(item => ({ value: item, label: item }));

    const genderFields = ['male', 'female'].map(item => ({ value: item, label: item }));

    const { formNotEmpty } = usePromptCondition([
        firstName, lastName, gender, relationship, age, hometown
    ]);

    const { updateFormStatus } = useUpdatingForm(
        loading, editSuccess, error, resetEditProfileNotif, 'Successfully updated'
    );

    const { handleSubmit } = useHandleSubmit(edit, '/');

    return (
        <form className="edit-profile-form" onSubmit={handleSubmit} name="mainInfo" autoComplete="off">
            <Prompt
                when={formNotEmpty}
                message={JSON.stringify({
                    header: 'Warning',
                    body: 'You have changed your basic information. Are you sure you want to leave without saving your changes?'
                })}
            />
            <fieldset className="edit-profile-form__group">
                <legend className="edit-profile-form__group-headlines">Main info</legend>
                <Text name="firstName" placeholder="First name" value={firstName} setValue={setFirstName} required />
                <Text name="lastName" placeholder="Last name" value={lastName} setValue={setLastName} required />
                <Select name="gender" options={genderFields} value={gender} setValue={(value) => setGender(value)} placeholder="Gender" />
                <Select name="relationship" options={relationshipFields} value={relationship} setValue={(value) => setRelationship(value)} placeholder="Relationship" />
                <Number name="age" placeholder="Age" value={age} setValue={setAge} />
                <Text name="hometown" placeholder="Hometown" value={hometown} setValue={setHometown} />
            </fieldset>
            {updateFormStatus}
            <div className="edit-profile-form__buttons">
                <MainButton type="link" url="/" text="Cancel" />
                <MainButton text="Save" type="submit" />
            </div>
        </form>
    );
}

export default MainInfo;
