"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Image from "next/image";

export default function PoolVideo({ src, poster, label, eager = false, autoPlay = true }: { src: string; poster?: string; label: string; eager?: boolean; autoPlay?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [loading, setLoading] = useState(false);
  const manualPause = useRef(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => { if (preference.matches) video.pause(); };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && autoPlay && !preference.matches && !manualPause.current) {
        if (!video.getAttribute("src")) video.src = src;
        void video.play().catch(() => setPlaying(false));
      } else if (!entry.isIntersecting) video.pause();
    }, { threshold: 0.15 });
    observer.observe(video);
    preference.addEventListener("change", applyPreference);
    return () => { observer.disconnect(); preference.removeEventListener("change", applyPreference); video.pause(); };
  }, [src, autoPlay]);

  function toggle() {
    const video = ref.current;
    if (!video) return;
    if (loading || !video.paused) { manualPause.current = true; video.pause(); setLoading(false); }
    else {
      manualPause.current = false;
      if (!video.getAttribute("src")) video.src = src;
      setLoading(true);
      void video.play().catch((error: DOMException) => {
        setLoading(false);
        if (error.name !== "AbortError") setFailed(true);
      });
    }
  }

  return <div className="pool-video">
    <video ref={ref} muted loop playsInline preload="none" aria-label={label} onWaiting={() => setLoading(true)} onPlaying={() => { setHasPlayed(true); setPlaying(true); setLoading(false); }} onPause={() => { setPlaying(false); setLoading(false); }} onError={() => { setFailed(true); setLoading(false); setPlaying(false); }} />
    {poster && (!hasPlayed || failed) && <Image className="video-poster cover-image" src={poster} alt="" fill sizes="(max-width: 767px) 100vw, 55vw" loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} />}
    {!failed && <button type="button" className="video-toggle" onClick={toggle} aria-label={loading ? `Cancelar carga del video: ${label}` : playing ? `Pausar video: ${label}` : `Reproducir video: ${label}`}><Icon name={playing || loading ? "pause" : "play"} size={18} /><span>{loading ? "Cancelar carga" : playing ? "Pausar video" : "Reproducir video"}</span></button>}
    {failed && <span className="video-status" role="status">Video no disponible</span>}
  </div>;
}
