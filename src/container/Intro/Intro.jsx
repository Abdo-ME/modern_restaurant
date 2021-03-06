import React, { useRef, useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs'
import { meal } from '../../constants'
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(true)
  const vidRef = useRef();
  const handleVideo = () => {
    // setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    setPlayVideo(!playVideo)
    playVideo
      ? vidRef.current.pause()
      : vidRef.current.play()
  }
  return (<div className='app__video'>
    <video
      src={meal}
      ref={vidRef}
      type="video/mp4"
      loop
      autoPlay
      controls={false}
      muted
    />
    <div style={{ background: !playVideo ? 'rgba(0, 0, 0, 0.65)' : 'rgba(0, 0, 0, 0)' }} className="app__video-overlay flex__center">
      <div
        className={`${!playVideo ? "app__video-overlay_circle-puase" : "app__video-overlay_circle-play"} flex__center`}
        onClick={handleVideo}
      >
        {!playVideo && (<BsFillPlayFill color="#fff" fontSize={30} />)
        }

      </div>
    </div>
  </div>)
};

export default Intro;
