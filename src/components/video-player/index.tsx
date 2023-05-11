import { FC, useState, useRef, ChangeEvent } from 'react';
import ReactPlayer from 'react-player';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';

import s from './video-player.module.scss';

interface VideoPlayerProps {
  isActive: boolean;
  url: string;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ url, isActive }) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.8);
  const [played, setPlayed] = useState<number>(0);
  const [seeking, setSeeking] = useState<boolean>(false);
  const playerRef = useRef<ReactPlayer>(null);

  if (playing && !isActive) {
    setPlaying(false);
  }

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleSeekChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekMouseUp = () => {
    setSeeking(false);
    playerRef?.current?.seekTo(played);
  };

  const handleProgress = (state: { played: number }) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  return (
    <>
      <div className={s.videoPlayer}>
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={playing}
          volume={volume}
          onProgress={handleProgress}
          height="100%"
          width="100%"
        />
      </div>
      <div className={s.videoPlayerControls}>
        <button onClick={handlePlayPause} className={s.videoPlayerPause}>
          {playing ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
        </button>
        <div className={s.videoPlayerTimeline}>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={played}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
          />
        </div>
        <div className={s.videoPlayerVolume}>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </>
  );
};
