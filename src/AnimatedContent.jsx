import { useEffect, useMemo, useRef, useState } from "react";

const easeToCss = (ease) => {
  if (typeof ease !== "string") return "ease";
  const normalized = ease.toLowerCase();
  if (normalized.includes("power3")) {
    return "cubic-bezier(0.22, 1, 0.36, 1)";
  }
  if (normalized.includes("expo")) {
    return "cubic-bezier(0.19, 1, 0.22, 1)";
  }
  if (normalized.includes("circ")) {
    return "cubic-bezier(0.08, 0.82, 0.17, 1)";
  }
  if (normalized.includes("back")) {
    return "cubic-bezier(0.34, 1.56, 0.64, 1)";
  }
  if (normalized.includes("bounce")) {
    return "cubic-bezier(0.34, 1.56, 0.64, 1)";
  }
  if (normalized.startsWith("cubic-bezier")) return normalized;
  if (normalized.startsWith("steps(")) return normalized;
  return "ease";
};

const AnimatedContent = ({
  children,
  distance = 60,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "ease",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.2,
  delay = 0,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const offset = useMemo(() => {
    const signed = reverse ? -distance : distance;
    if (direction === "horizontal") return { x: signed, y: 0 };
    return { x: 0, y: signed };
  }, [distance, direction, reverse]);

  const startOpacity = animateOpacity ? initialOpacity : 1;
  const endOpacity = animateOpacity ? 1 : 1;
  const easing = easeToCss(ease);

  const style = {
    transform: isVisible
      ? `translate3d(0, 0, 0) scale(${scale})`
      : `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${scale})`,
    opacity: isVisible ? endOpacity : startOpacity,
    transitionProperty: "transform, opacity",
    transitionDuration: `${duration}s`,
    transitionTimingFunction: easing,
    transitionDelay: `${delay}s`,
    willChange: "transform, opacity",
  };

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
};

export default AnimatedContent;
