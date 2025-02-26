import React, {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const useTimer = (initialState = 0) => {
  const [elapsedTime, setElapsedTime] = useState(initialState);
  const [isRunning, setIsRunning] = useState(false);
  const countRef = useRef<ReturnType<typeof setInterval>>(null);

  const handleStart = () => {
    const startTime = Date.now() - elapsedTime;

    countRef.current = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 10);
    setIsRunning(true);
  };

  const handlePause = () => {
    if (!countRef.current) return;

    clearInterval(countRef.current);
    setIsRunning(false);
  };

  const handleReset = () => {
    if (!countRef.current) return;

    clearInterval(countRef.current);
    setIsRunning(false);
    setElapsedTime(0);
  };

  return { elapsedTime, isRunning, handleStart, handlePause, handleReset };
};

function msToSeconds(ms: number) {
  return (ms / 1000).toFixed(3);
}

export interface ConuntdownRef {
  startCountdown: () => void;
  stopCountdown: () => void;
  resetCountdown: () => void;
}

export const Countdown = forwardRef<ConuntdownRef, PropsWithChildren>(
  function Countdown(_, ref) {
    const { elapsedTime, handleStart, handlePause, handleReset } = useTimer();

    useImperativeHandle(ref, () => ({
      startCountdown: handleStart,
      stopCountdown: handlePause,
      resetCountdown: handleReset,
    }));

    return <h2 className="m-0">{msToSeconds(elapsedTime)}</h2>;
  },
);
