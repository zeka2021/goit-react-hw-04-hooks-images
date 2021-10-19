import { useEffect } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

function Modal({ onModalClick, currentImage  }){
  
  useEffect(() => {
    window.addEventListener('keydown', closeModalByEsc);

    return () => {
      window.removeEventListener('keydown', closeModalByEsc);
    };
  });

  const closeModalByEsc = e => {
    if (e.code !== 'Escape') {
      return;
    }

    onModalClick();
  };

  const closeModalByBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onModalClick();
    }
  };

  
    return (
      <div className={s.Overlay} onClick={closeModalByBackdropClick}>
        <div className={s.Modal}>
          <img
            src={currentImage.largeImageURL}
            alt={currentImage.tags.split(',')[0]}
          />
        </div>
      </div>
    );
  }

Modal.propTypes = {
  onModalClick: PropTypes.func.isRequired,
  currentImage: PropTypes.object.isRequired,
};

export default Modal;