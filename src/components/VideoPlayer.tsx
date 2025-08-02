import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  url: string;
  title?: string;
  width?: string;
  height?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  title = 'Video',
  width = '100%',
  height = '360px',
}) => {
    return (
    <div className="video-wrapper" style={{ position: 'relative', paddingTop: '56.25%' }}>
        <ReactPlayer
        src={url}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        controls
        />
    </div>
    );
};

export default VideoPlayer;