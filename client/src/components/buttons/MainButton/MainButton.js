import React from 'react';
import './main-button.scss';
import { Link } from 'react-router-dom';

const LinkButton = ({ text, url }) => (
    <Link to={`${url}`} className="main-button">{text}</Link>
)

const Button = ({ text }) => <button className="main-button">{text}</button>;

const MainButton = ({ text = 'Main button', type = 'button', url = '/' }) => {

    return (
        <>
            {type === 'link'
                ? <LinkButton text={text} url={url} />
                : <Button text={text} />
            }
        </>
    );
}

export default MainButton;
