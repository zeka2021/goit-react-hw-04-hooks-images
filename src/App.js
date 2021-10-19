import { Component } from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import Modal from './Modal';
import Button from './Button';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageApi from './Api/imageApi';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const image = new ImageApi();

class App extends Component {
  state = {
     query: '',
    images: [],
    currentPage: 1,
    totalImages: null,
    showModal: false,
    showLoader: false,
    error: null,
    activeImageIndex: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.currentPage !== this.state.currentPage
    ) {
      try {
        this.setState({ showLoader: true });
        const { hits, totalHits } = await image.fetchImageOrPhoto(
          this.state.query,
          this.state.currentPage,
        );

        if (!hits.length) {
          toast.error('Enter proper query', { theme: 'colored' });
        }

        this.setState(({ images }) => {
          return {
            images: [...images, ...hits],
            totalImages: totalHits,
          };
        });
      } catch (error) {
        this.setState({ error });
        toast.error(this.state.error.message, { theme: 'colored' });
      } finally {
        if (prevState.images.length > 11) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }

        this.setState({ showLoader: false });
      }
    }
  }

  modalToggle = index => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      activeImageIndex: index,
    }));
  };

  handleFormSubmit = value => {
    if (value === '') {
      toast.error('No query entered yet...', { theme: 'colored' });
      return;
    }

    this.setState({ query: value, images: [], currentPage: 1 });
  };

  loadMoreImages = e => {
    if (this.state.images.length === this.state.totalImages) {
      toast.error('There is no more images to show', { theme: 'colored' });
      return;
    }

    this.setState(({ currentPage }) => ({ currentPage: currentPage + 1 }));
  };
  render() {
    return (
      <>
        <div className="App">
          <Searchbar onSubmit={this.handleFormSubmit} />

          {this.state.images.length > 1 && (
            <>
              <ImageGallery
                images={this.state.images}
                onModalClick={this.modalToggle}
              />
              {!this.state.showLoader && (
                <Button onSearch={this.loadMoreImages} />
              )}
            </>
          )}

          {this.state.showLoader && (
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={80}
              width={80}
              timeout={3000}
              style={{ textAlign: 'center' }}
            />
          )}

          {this.state.showModal && (
            <Modal
              currentImage={this.state.images[this.state.activeImageIndex]}
              onModalClick={this.modalToggle}
            />
          )}
        </div>

        <ToastContainer
          autoClose={3000}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
      </>
    );
  }

}

export default App;
