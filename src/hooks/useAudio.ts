import { useRef, useEffect, useState, useCallback } from "react";

export function useAudio(url: string) {
  const [musicOn, setMusicOn] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(url);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [url]);

  const syncMusic = useCallback(async (shouldPlay: boolean) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!shouldPlay) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch { /* ignore */ }
    }
  }, []);

  const toggleMusic = useCallback(() => {
    setMusicOn((prev) => {
      const next = !prev;
      void syncMusic(next);
      return next;
    });
  }, [syncMusic]);

  const playMusic = useCallback(() => {
    if (!musicOn || !audioRef.current || !audioRef.current.paused) return;
    audioRef.current.currentTime = 0;
    void audioRef.current.play().catch(() => {});
  }, [musicOn]);

  return { musicOn, toggleMusic, playMusic };
}

export function playOneShot(url: string) {
  const audio = new Audio(url);
  audio.loop = false;
  void audio.play().catch(() => {});
}