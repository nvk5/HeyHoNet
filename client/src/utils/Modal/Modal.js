import React, { useRef } from 'react';
import './modal.scss';
import { CSSTransition } from 'react-transition-group';
import useAnimationOnMount from '../../hooks/useAnimationOnMount';
import MainButton from '../../components/buttons/MainButton/MainButton';

const Modal = ({ children, closeHandler = () => {}, size = 'sm', headline, acceptHandler = () => {}, cancelBtnText, acceptBtnText, form }) => {
    const ref = useRef(null);
    const { animation } = useAnimationOnMount();

    return (
        <div className="modal" onClick={closeHandler} >
            <CSSTransition mountOnEnter unmountOnExit in={animation} timeout={500} classNames="modal-animate" onEntering={() => ref.current.focus()}>
                <div className={`modal__wrap ${size}`} onClick={(e) => e.stopPropagation()}>
                    <div className="modal__header">
                        <h4 className="modal__headline">{headline}</h4>
                        <button className="modal__close" ref={ref} onClick={closeHandler}>&times;</button>
                    </div>
                    <div className="modal__body">
                        {children}
                    </div>
                    <div className="modal__footer">
                        <MainButton text={cancelBtnText} clickHandler={closeHandler} />
                        <MainButton type={form ? 'submit' : 'button'} form={form} text={acceptBtnText} clickHandler={acceptHandler} />
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Modal;
