import React from "react";
import "videojs-wavesurfer";
import "video.js/dist/video-js.min.css";
import "videojs-wavesurfer/dist/css/videojs.wavesurfer.css";
import VideoJS from "video.js";

interface HlsProps {
  stream: string;
}

export const Hls = ({ stream }: HlsProps) => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          const videojs = VideoJS("streamAudio", {
            controls: false,
            height: 0,
            width: 0,
            // plugins: { wavesurfer: {} },
          });

          if (!videojs || !stream) return;

          videojs.src({
            src: stream,
          });
          videojs.play();
        }}
      >
        Play with Video.js
      </button>
      <video id="streamAudio"></video>
    </div>
  );
};
