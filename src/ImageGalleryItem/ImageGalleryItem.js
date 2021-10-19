import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
    state = {
        image: '',
        modalImage: '',
        description: '',
        onModalClick: '',
        // status: 'idle',
    };

    render() {
        const { image, modalImage, description, onModalClick } = this.props;
        return (
            <li className={s.ImageGalleryItem} onClick={onModalClick}>

                <img src={image}
                    alt={description}
                    data-src={modalImage}
                    className={s.ImageGalleryItemImage} />
            </li>
        );
    }
}
ImageGalleryItem.propTypes = {
    image: PropTypes.string.isRequired,
    modalImage: PropTypes.string.isRequired,
    description: PropTypes.string,
    onModalClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;