import React, {useEffect, useState, forwardRef} from "react";
import "./AudioController.css";
import {FaPlay} from "react-icons/fa";
import {GiPauseButton} from "react-icons/gi";
import {FaBackward} from "react-icons/fa6";
import {FaForward} from "react-icons/fa";

const AudioController = forwardRef(({currentTrack, liveStatus, files}, ref) => {
  const [fileUrl, setFileUrl] = useState();
  const stopAudio = () => {
    ref?.current?.pause();
  };

  const startAudio = () => {
    files?.length && ref?.current?.play();
  };

  useEffect(() => {
    if (currentTrack?.src) {
      const url = URL.createObjectURL(currentTrack?.src);

      setFileUrl(url);
    }
  }, [currentTrack]);

  useEffect(() => {
    files?.length > 1 && startAudio();
    console.log(fileUrl);
  }, [fileUrl]);

  useEffect(() => {
    !files.length && stopAudio();
  }, [files]);

  return (
    <div className="width_100 height_100" id="audio_player">
      <audio ref={ref} src={fileUrl} type="audio/mpeg"></audio>

      <div className="vis_gif"></div>

      <div className="audio_controlls">
        <FaBackward />
        {liveStatus?.isPlaying ? <GiPauseButton onClick={stopAudio} /> : <FaPlay onClick={startAudio} />}
        <FaForward />
      </div>
    </div>
  );
});

export default AudioController;
