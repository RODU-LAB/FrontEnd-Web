import { useRef, useEffect, useCallback, RefObject } from "react";

interface AnimationProps {
  ref: RefObject<HTMLDivElement>;
  style: {
    opacity: number;
    transform: string;
  };
}

export const useFadeInOnScroll = (): AnimationProps => {
  const dom = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(([entry]: IntersectionObserverEntry[]) => {
    const { current } = dom;
    if (entry.isIntersecting && current) {
      current.style.transitionProperty = "opacity transform";
      current.style.transitionDuration = "1s";
      current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
      current.style.opacity = "1";
      current.style.transform = "translateY(0px)";
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;

    if (current) {
      // 모바일 환경을 고려하여 rootMargin을 조정하고, threshold 값을 낮춤
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref: dom,
    style: { opacity: 0, transform: "translateY(50px)" }, // 초기 상태
  };
};
