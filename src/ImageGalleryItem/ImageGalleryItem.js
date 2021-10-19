// import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

function  ImageGalleryItem ({ image, modalImage, description, onModalClick }) {
 
        return (
            <li className={s.ImageGalleryItem} onClick={onModalClick}>

                <img src={image}
                    alt={description}
                    data-src={modalImage}
                    className={s.ImageGalleryItemImage} />
            </li>
        );
    }

ImageGalleryItem.propTypes = {
    image: PropTypes.string.isRequired,
    modalImage: PropTypes.string.isRequired,
    description: PropTypes.string,
    onModalClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;