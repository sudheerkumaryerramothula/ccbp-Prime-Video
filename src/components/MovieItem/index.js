import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="model-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="movie-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
