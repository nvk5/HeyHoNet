import React, { useState } from 'react';
import InputText from '../../../utils/InputText/InputText';
import MainButton from '../../buttons/MainButton/MainButton';

const InterestsInfo = () => {
    const [hobbies, setHobbies] = useState('');
    const [favouriteMusic, setFavouriteMusic] = useState('');
    const [favouriteMovies, setFavouriteMovies] = useState('');
    const [favouriteBooks, setFavouriteBooks] = useState('');
    const [favouriteGames, setFavouriteGames] = useState('');
    const [aboutInfo, setAboutInfo] = useState('');

    return (
        <form className="edit-profile-form">
            <fieldset className="edit-profile-form__group">
                <legend className="edit-profile-form__group-headlines">Interests</legend>
                <InputText textarea type="text" placeholder="Hobbies" value={hobbies} setValue={setHobbies} />
                <InputText textarea type="text" placeholder="Favourite music" value={favouriteMusic} setValue={setFavouriteMusic} />
                <InputText textarea type="text" placeholder="Favourite movies" value={favouriteMovies} setValue={setFavouriteMovies} />
                <InputText textarea type="text" placeholder="Favourite books" value={favouriteBooks} setValue={setFavouriteBooks} />
                <InputText textarea type="text" placeholder="Favourite games" value={favouriteGames} setValue={setFavouriteGames} />
                <InputText textarea type="text" placeholder="About me" value={aboutInfo} setValue={setAboutInfo} />
            </fieldset>
            <MainButton type="link" url="/" text="Cancel" />
            <MainButton text="Save" />
        </form>
    );
}

export default InterestsInfo;
