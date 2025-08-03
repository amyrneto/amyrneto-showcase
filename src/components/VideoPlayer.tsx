import React from 'react';
import ReactPlayer from 'react-player';
import styles from './VideoPlayer.module.css';

type VideoPlayerProps = {
  url: string;
  title: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title }) => (
  <div className={styles.videoContainer}>
    {title && <h3 className={styles.videoTitle}>{title}</h3>}
    <div className={styles.videoWrapper}>
      <ReactPlayer
        src={url}
        className={styles.video}
        width="100%"
        height="100%"
        controls
      />
    </div>
  </div>
);

export default VideoPlayer;