"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Hls } from "@/components/Hls";
import { Howler } from "@/components/Howler";
import { RegularAudio } from "@/components/RegularAudio";
import { Wavesurfer } from "@/components/Wavesurfer";

import { useState } from "react";

const sources = [
  {
    label: "MP3",
    src: "https://storage.googleapis.com/doucse-platform-1c087-example-2/mp3/MP3.mp3",
  },
  {
    label: "MP3 64kbps",
    src: "https://storage.googleapis.com/doucse-platform-1c087-example-2/mp3-64kbps/MP3-64kbps%20.mp3",
  },
  {
    label: "WAV",
    src: "https://storage.googleapis.com/doucse-platform-1c087-example-2/wav/WAV.wav",
  },
];

const streams = [
  {
    label: "HLS",
    src: "https://storage.googleapis.com/doucse-platform-1c087-example-2/hls/audio.m3u8",
  },
];

export default function Home() {
  const [src, setSrc] = useState<string>(sources[0].src);
  const [stream, setStream] = useState<string>(streams[0].src);

  return (
    <div className="container">
      <div className="d-flex flex-column gap-3 pt-5">
        <h1>Audio</h1>
        <div className="card p-4 d-flex flex-column gap-3">
          <h2>HLS</h2>
          <select
            className="form-select"
            onChange={(e) => setStream(e.target.value)}
            value={stream}
          >
            {streams.map(({ label, src }) => (
              <option key={src} value={src}>
                {label}
              </option>
            ))}
          </select>
          <h4>
            Entered source: <b>{stream}</b>
          </h4>
          {stream ? (
            <div>
              <Hls stream={stream} />
            </div>
          ) : null}
        </div>
        <div className="card p-4 d-flex flex-column gap-3">
          <h2>MP3 and WAV</h2>
          <select
            className="form-select"
            onChange={(e) => setSrc(e.target.value)}
            value={src}
          >
            {sources.map(({ label, src }) => (
              <option key={src} value={src}>
                {label}
              </option>
            ))}
          </select>
          <h4>
            Entered source: <b>{src}</b>
          </h4>
          {src ? (
            <div className="d-flex flex-column gap-1">
              <RegularAudio src={src} />
              <Howler src={src} />
              <Wavesurfer src={src} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
