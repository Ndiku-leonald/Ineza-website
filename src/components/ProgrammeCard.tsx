import { useEffect, useState } from "react";
import type { Programme } from "../types/content";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
export function ProgrammeCard({
  programme,
  onActive,
}: {
  programme: Programme;
  onActive: (id: string) => void;
}) {
  const { ref, visible } = useIntersectionObserver<HTMLElement>(0.15);
  const [videoFailed, setVideoFailed] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.6) onActive(programme.id);
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [onActive, programme.id, ref]);
  return (
    <article
      ref={ref}
      id={`programme-${programme.id}`}
      className={`programme-story ${visible ? "is-visible" : ""}`}
      style={{ "--accent": programme.accent } as React.CSSProperties}
    >
      <header>
        <span>{programme.number}</span>
        <span>Planned under the 2025–2030 work plan</span>
        <programme.icon aria-hidden="true" />
      </header>
      <h3>{programme.title}</h3>
      <div className="programme-media">
        {!videoFailed && (
          <video
            muted
            loop
            playsInline
            poster={programme.image}
            onError={() => setVideoFailed(true)}
          >
            <source src={programme.video} type="video/mp4" />
          </video>
        )}
        <img src={programme.image} alt={programme.alt} loading="lazy" />
      </div>
      <p>{programme.description}</p>
      <ul>
        {programme.focus.map((focus) => (
          <li key={focus}>{focus}</li>
        ))}
      </ul>
      <a href="#contact">
        Discuss this programme <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
