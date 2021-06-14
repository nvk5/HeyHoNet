import React, { useEffect, useRef, useState } from 'react';
import './personal-info-block.scss';
import Sprite from '../../../../assets/images/sprite.svg';
import { uid } from 'uid';
import transformCamelCase from '../../../../helpers/transformCamelCase';

const PersonalInfoBlock = ({ user: {personalInfo} }) => {

    const nonEmptyContent = Object.entries(personalInfo).filter(item => {
        return !Object.values(item[1]).every(item => item === '')
    })

    const contentObjects = nonEmptyContent.map((item, i) => {
        const [label] = item;
        return {index: i, name: label, opened: i === 0 ? true : false}
    })

    const [state, setState] = useState({...contentObjects});

    const toggleHandler = (e, i) => {
        e.currentTarget.focus();
        setState(prev => ({
            ...prev, 
            [i]: {...prev[i], opened: !prev[i].opened}
        }))
    }

    return (
        <>
            {nonEmptyContent.filter(item => item).map((block, i) => {
                const [headline, body] = block;

                return (
                    <div key={uid()} className={`personal-info-block personal-info-block--${headline}`}>
                        <button className={state[i].opened ? "personal-info-block__header opened" : "personal-info-block__header"} onClick={(e) => toggleHandler(e, i)}>
                            <h2 className="personal-info-block__headline">{transformCamelCase(headline)}</h2>
                            <svg className={state[i].opened ? "personal-info-block__header-icon opened" : "personal-info-block__header-icon"}>
                                <use href={`${Sprite}#arrow-down2`}></use>
                            </svg>
                        </button>
                        <ul className={state[i].opened ? "personal-info-block__list" : "personal-info-block__list hide"}>
                            {
                                Object.entries(body).map((item) => {
                                    const [label, value] = item;

                                    return (
                                        <li key={uid()} className={`personal-info-block__list-item personal-info-block__list-item--${headline}`}>
                                            <span className="personal-info-block__list-label">{transformCamelCase(label)}</span>
                                            <span className="personal-info-block__list-value">{value}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            })}
        </>
    )


    // return (
    //     <div className="personal-info-block">
    //         <button className="personal-info-block__header">
    //             <h2 className="personal-info-block__headline">{headline}</h2>
    //             <svg className="personal-info-block__header-icon">
    //                 <use href={`${Sprite}#arrow-down2`}></use>
    //             </svg>
    //         </button>
    //         {children}
    //     </div>
    // );
}

export default PersonalInfoBlock;
