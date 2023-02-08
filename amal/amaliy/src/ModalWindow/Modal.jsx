import React ,{useState}from 'react';
import './modal.css';
import img from './img.png';

function Modal(props) {
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
        const modal = document.querySelector('.open-modal-button');
        modal.style.display = 'none';
    }
    const closeModal = () => {
        setOpen(false);
        const modal = document.querySelector('.open-modal-button');
        modal.style.display = 'block';
    }


    return (
        <div>
            <div className="App">
                <button className="open-modal-button" onClick={openModal}>
                    Open Photo
                </button>
                {
                    open && (

                        <div className="overlay">
                            <button className={"CloseButton"} onClick={closeModal}>Close Photo</button>
                            <div className="modal">
                                <img src={img} alt="img"/>
                            </div>

                        </div>
                    )
                }


            </div>
        </div>
    );
}

export default Modal;