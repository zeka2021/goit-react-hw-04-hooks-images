import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';


class ImageGallery extends Component {
    state = {
        images: '',
        onModalClick: '',
    }
   
    render() {
        return (
            <ul className={s.ImageGallery}>
                {this.props.images.map(
                    ({ id, webformatURL, largeImageURL, tags }, index) => (
                        <ImageGalleryItem
                            onModalClick={() => this.props.onModalClick(index)}
                            key={`${id}}-${uuidv4()}`}
                            image={webformatURL}
                            modalImage={largeImageURL}
                            description={tags.split(',')[0]}
                        />
                    ),
                )}
            </ul>
        );
    }
}
ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    onModalClick: PropTypes.func.isRequired,
};

export default ImageGallery;