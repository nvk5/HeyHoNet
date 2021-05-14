import React, { useState } from 'react';
import InputText from '../../../utils/InputText/InputText';
import MainButton from '../../buttons/MainButton/MainButton';

const ContactInfo = () => {
    const [mobile, setMobile] = useState('');
    const [altPhone, setAltPhone] = useState('');
    const [facebook, setFacebook] = useState('');
    const [gmail, setGmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [telegram, setTelegram] = useState('');
    const [skype, setSkype] = useState('');
    const [instagram, setInstagram] = useState('');
    const [website, setWebsite] = useState('');

    return (
        <form className="edit-profile-form">
            <fieldset className="edit-profile-form__group">
                <legend className="edit-profile-form__group-headlines">Contact info</legend>
                <InputText type="text" placeholder="Mobile" value={mobile} setValue={setMobile} />
                <InputText type="text" placeholder="Alt. phone" value={altPhone} setValue={setAltPhone} />
                <InputText type="text" placeholder="Skype" value={skype} setValue={setSkype} />
                <InputText type="text" placeholder="Facebook" value={facebook} setValue={setFacebook} />
                <InputText type="text" placeholder="Gmail" value={gmail} setValue={setGmail} />
                <InputText type="text" placeholder="Whatsapp" value={whatsapp} setValue={setWhatsapp} />
                <InputText type="text" placeholder="Telegram" value={telegram} setValue={setTelegram} />
                <InputText type="text" placeholder="Instaram" value={instagram} setValue={setInstagram} />
                <InputText type="text" placeholder="Personal website" value={website} setValue={setWebsite} />
            </fieldset>
            <MainButton type="link" url="/" text="Cancel" />
            <MainButton text="Save" />
        </form>
    );
}

export default ContactInfo;
