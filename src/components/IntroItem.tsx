"use client";
import { MutableRefObject, useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

type IntroItemProps = React.PropsWithChildren<{
  containerRef: MutableRefObject<null>;
}>;

export default function IntroItem({ containerRef, children }: IntroItemProps) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    // container: containerRef,
    target: targetRef,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.38, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.38, 1], [1.4, 1, 0.5]);

  return (
    <motion.p
      style={{
        opacity: opacity,
        scale: scale,
        transform: "translate3d(0, 0, 0)",
      }}
      ref={targetRef}
    >
      {children}
    </motion.p>
  );
}
