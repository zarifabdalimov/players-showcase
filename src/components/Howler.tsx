import { Howl } from "howler";
import React, { useRef } from "react";
import { ConuntdownRef, Countdown } from "./Countdown";

interface HowlerProps {
  src: string;
}

export const Howler = ({ src }: HowlerProps) => {
  const countdownRef = useRef<ConuntdownRef>(null);

  return (
    <div className="d-flex flex-row gap-3 align-items-center">
      <button
        className="btn btn-primary"
        onClick={() => {
          const sound = new Howl({
            src: [src],
            volume: 1,
            autoplay: true,
            format: ["mp3"],
            html5: true,
            onplay: () => {
              console.log("[debug]", "onplay");
            },
            onload: () => {
              console.log("[debug]", "onload");
            },
            onloaderror: (soundId, error) => {
              console.error(soundId, error);
            },
            onplayerror: () => {
              console.log("[debug]", "onplayerror");
            },
          });
        }}
      >
        Player With Howler
      </button>
    </div>
  );
};
