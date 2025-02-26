import { ConuntdownRef, Countdown } from "@/components/Countdown";
import React, { useRef } from "react";
import WaveSurfer from "wavesurfer.js";

interface WavesurferProps {
  src: string;
}

export const Wavesurfer = ({ src }: WavesurferProps) => {
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const countdownRef = useRef<ConuntdownRef>(null);

  return (
    <div className="d-flex flex-row gap-3 align-items-center">
      <button
        className="btn btn-primary"
        onClick={async () => {
          wavesurfer.current?.destroy();
          wavesurfer.current = WaveSurfer.create({
            container: "#waveform",
          });
          wavesurfer.current?.load(src, [[1, 2], [3]]);
          wavesurfer.current?.play();
          countdownRef.current?.startCountdown();
          wavesurfer.current?.on("ready", () => {
            countdownRef.current?.stopCountdown();
          });
        }}
      >
        Play With WaveSurfer
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          wavesurfer.current?.setVolume(0);
        }}
      >
        Mute
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          countdownRef.current?.resetCountdown();
          wavesurfer.current?.destroy();
          wavesurfer.current = WaveSurfer.create({
            container: "#waveform",
          });
        }}
      >
        reset
      </button>
      <Countdown ref={countdownRef} />
      <div className="d-none" id="waveform"></div>
    </div>
  );
};
