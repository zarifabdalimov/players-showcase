import React, { useRef } from "react";

interface RegularAudioProps {
  src: string;
}

export const RegularAudio = ({ src }: RegularAudioProps) => {
  const ref = useRef<HTMLAudioElement>(null);

  return (
    <div className="d-flex flex-row gap-3 align-items-center">
      <button
        className="btn btn-primary"
        onClick={() => {
          if (!ref.current) return;

          ref.current.src = src;
          ref.current.play();
        }}
      >
        Play With HTML5 Audio
      </button>
      <audio
        style={{
          display: "none",
        }}
        ref={ref}
        controls
      />
    </div>
  );
};
