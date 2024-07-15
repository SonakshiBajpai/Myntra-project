import React, { useRef, useState, useEffect } from "react";
import "./AudioPlayer.css";
import playImage from "./assets/play.png";
import pauseImage from "./assets/pause.png";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);

  useEffect(() => {
    const audio = audioRef.current;
    const playAudio = () => {
      audio.volume = volume;
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setIsPlaying(true);
    };

    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, [volume]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={src}
        onError={() => console.error(`Failed to load audio: ${src}`)}
        loop
      />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
      <button
        onClick={togglePlayPause}
        style={{
          backgroundImage: `url(${isPlaying ? pauseImage : playImage})`,
        }}
      />
    </div>
  );
};

export default AudioPlayer;
