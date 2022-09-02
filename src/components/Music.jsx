import React from 'react'
import {
    IoPlayCircle
} from "react-icons/io5"
const Music = ({onPlay, banner}) => {
  return (
    <div>
      <div className="music" onClick={onPlay}>
            <IoPlayCircle size={45}></IoPlayCircle>
            <div className="music-info">
                <div className='title'>misic tilte</div>
                <small>Artiste</small>
                
            </div>
            <img src={banner} alt="" className="img-icon" />
        </div>
    </div>
  )
}

export default Music
