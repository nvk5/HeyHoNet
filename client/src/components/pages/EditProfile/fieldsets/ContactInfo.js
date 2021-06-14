import React, { useState } from 'react';
import MainButton from '../../../buttons/MainButton/MainButton';
import { Prompt } from 'react-router-dom/cjs/react-router-dom.min';
import usePromptCondition from '../../../../hooks/usePromptCondition';
import { useSelector } from 'react-redux';
import Text from '../../../form-elements/Text';
import { edit } from '../../../../redux/actions/profile';
import useHandleSubmit from '../../../../hooks/useHandleSubmit';
import { resetEditProfileNotif } from '../../../../redux/reducers/profile/editProfileReducer';
import useUpdatingForm from '../../../../hooks/useUpdatingForm';

const ContactInfo = () => {
    const {currentUser} = useSelector(state => state.profile);
    const { loading, editSuccess, error } = useSelector(state => state.editprofile);

    const [mobile, setMobile] = useState(currentUser.personalInfo.contactInfo?.mobile || '');
    const [altPhone, setAltPhone] = useState(currentUser.personalInfo.contactInfo?.altPhone || '');
    const [facebook, setFacebook] = useState(currentUser.personalInfo.contactInfo?.facebook || '');
    const [gmail, setGmail] = useState(currentUser.personalInfo.contactInfo?.gmail || '');
    const [vkontakte, setVkontakte] = useState(currentUser.personalInfo.contactInfo?.vkontakte || '');
    const [whatsapp, setWhatsapp] = useState(currentUser.personalInfo.contactInfo?.whatsapp || '');
    const [telegram, setTelegram] = useState(currentUser.personalInfo.contactInfo?.telegram || '');
    const [skype, setSkype] = useState(currentUser.personalInfo.contactInfo?.skype || '');
    const [instagram, setInstagram] = useState(currentUser.personalInfo.contactInfo?.instagram || '');
    const [personalWebsite, setPersonalWebsite] = useState(currentUser.personalInfo.contactInfo?.personalWebsite || '');


    const { formNotEmpty } = usePromptCondition([
        mobile, altPhone, facebook, gmail, whatsapp, telegram,
        skype, instagram, personalWebsite
    ]);

    const { updateFormStatus } = useUpdatingForm(
        loading, editSuccess, error, resetEditProfileNotif, 'Successfully updated'
    );

    const { handleSubmit } = useHandleSubmit(edit, '/contacts');

    return (
        <form className="edit-profile-form" onSubmit={handleSubmit} name="contactInfo" autoComplete="off">
            <Prompt
                when={formNotEmpty}
                message={JSON.stringify({
                    header: 'Warning',
                    body: 'You have changed your contact information. Are you sure you want to leave without saving your changes?'
                })}
            />
            <fieldset className="edit-profile-form__group">
                <legend className="edit-profile-form__group-headlines">Contact info</legend>
                <Text name="mobile" placeholder="Mobile" value={mobile} setValue={setMobile} />
                <Text name="altPhone" placeholder="Alt. phone" value={altPhone} setValue={setAltPhone} />
                <Text name="skype" placeholder="Skype" value={skype} setValue={setSkype} />
                <Text name="facebook" placeholder="Facebook" value={facebook} setValue={setFacebook} />
                <Text name="vkontakte" placeholder="Vkontakte" value={vkontakte} setValue={setVkontakte} />
                <Text name="gmail" placeholder="Gmail" value={gmail} setValue={setGmail} />
                <Text name="whatsapp" placeholder="Whatsapp" value={whatsapp} setValue={setWhatsapp} />
                <Text name="telegram" placeholder="Telegram" value={telegram} setValue={setTelegram} />
                <Text name="instagram" placeholder="Instaram" value={instagram} setValue={setInstagram} />
                <Text name="personalWebsite" placeholder="Personal website" value={personalWebsite} setValue={setPersonalWebsite} />
            </fieldset>
            {updateFormStatus}
            <div className="edit-profile-form__buttons">
                <MainButton type="link" url="/" text="Cancel" />
                <MainButton text="Save" type="submit"/>
            </div>
        </form>
    );
}

export default ContactInfo;
