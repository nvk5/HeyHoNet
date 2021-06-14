import React, { useState } from 'react';
import MainButton from '../../../buttons/MainButton/MainButton';
import usePromptCondition from '../../../../hooks/usePromptCondition';
import { Prompt } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import Textarea from '../../../form-elements/Textarea';
import { edit } from '../../../../redux/actions/profile';
import useHandleSubmit from '../../../../hooks/useHandleSubmit';
import { resetEditProfileNotif } from '../../../../redux/reducers/profile/editProfileReducer';
import useUpdatingForm from '../../../../hooks/useUpdatingForm';

const InterestsInfo = () => {
    const {currentUser} = useSelector(state => state.profile);
    const { loading, editSuccess, error } = useSelector(state => state.editprofile);

    const [hobbies, setHobbies] = useState(currentUser.personalInfo.interests?.hobbies || '');
    const [favouriteMusic, setFavouriteMusic] = useState(currentUser.personalInfo.interests?.hobbies || '');
    const [favouriteMovies, setFavouriteMovies] = useState(currentUser.personalInfo.interests?.favouriteMovies || '');
    const [favouriteBooks, setFavouriteBooks] = useState(currentUser.personalInfo.interests?.favouriteBooks || '');
    const [favouriteGames, setFavouriteGames] = useState(currentUser.personalInfo.interests?.favouriteGames || '');
    const [aboutInfo, setAboutInfo] = useState(currentUser.personalInfo.interests?.aboutInfo || '');

    const { formNotEmpty } = usePromptCondition([
        hobbies, favouriteMusic, favouriteMovies, favouriteBooks, favouriteGames, aboutInfo
    ]);

    const { updateFormStatus } = useUpdatingForm(
        loading, editSuccess, error, resetEditProfileNotif, 'Successfully updated'
    );

    const { handleSubmit } = useHandleSubmit(edit, '/interests');

    return (
        <form className="edit-profile-form" name="interests" onSubmit={handleSubmit} autoComplete="off">
            <Prompt
                when={formNotEmpty}
                message={JSON.stringify({
                    header: 'Warning',
                    body: 'You have changed the information about your interests. Are you sure you don\'t want to save your changes?'
                })}
            />
            <fieldset className="edit-profile-form__group">
                <legend className="edit-profile-form__group-headlines">Interests</legend>
                <Textarea name="hobbies" placeholder="Hobbies" value={hobbies} setValue={setHobbies} />
                <Textarea name="favouriteMovies" placeholder="Favourite movies" value={favouriteMovies} setValue={setFavouriteMovies} />
                <Textarea name="favouriteMusic" placeholder="Favourite music" value={favouriteMusic} setValue={setFavouriteMusic} />
                <Textarea name="favouriteBooks" placeholder="Favourite books" value={favouriteBooks} setValue={setFavouriteBooks} />
                <Textarea name="favouriteGames" placeholder="Favourite games" value={favouriteGames} setValue={setFavouriteGames} />
                <Textarea name="aboutInfo" placeholder="About me" value={aboutInfo} setValue={setAboutInfo} />
            </fieldset>
            {updateFormStatus}
            <div className="edit-profile-form__buttons">
                <MainButton type="link" url="/" text="Cancel" />
                <MainButton text="Save" type="submit"/>
            </div>
        </form>
    );
}

export default InterestsInfo;
