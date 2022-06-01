import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayvideo) => !prevPlayvideo)
    playVideo
      ? vidRef.current.pause()
      : vidRef.current.play()
  }
  return (<div className='app__video'>
    <video
      src={meal}
      ref={vidRef}
      type="video/mp4"
      Loop
      controls={false}
      muted
    />
    <div style={{ background: !playVideo ? 'rgba(0, 0, 0, 0.65)' : 'rgba(0, 0, 0, 0)' }} className="app__video-overlay flex__center">
      <div
        className="app__video-overlay_circle flex__center"
        onClick={handleVideo}
      >
        {playVideo
          ? (<BsPauseFill color="#fff" fontSize={30} />)
          : (<BsFillPlayFill color="#fff" fontSize={30} />)
        }

      </div>
    </div>
  </div>)
};

export default Intro;
