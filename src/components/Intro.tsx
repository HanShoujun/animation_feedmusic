"use client";
import { motion, useAnimation, PanInfo, useScroll, useTransform, useMotionValueEvent, useMotionValue, useSpring } from "framer-motion";
import { WheelEventHandler, useEffect, useRef, useState, WheelEvent } from "react";
import IntroItem from "./IntroItem";
import { useAppContext } from "@/contexts/AppProvider";
import "./Intro.css";

export default function Intro() {
  const containerRef = useRef(null);
  const targetRef = useRef(null);
  const { changeTabIndex, progressFirstTab, setProgressFirstTab } = useAppContext();

  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    offset: ["start center", "end center"],
  });
  const progress = useTransform(scrollYProgress, [0, 0.03, 1], [0, 0, 1]);

  useMotionValueEvent(progress, "change", (latest) => {
    setProgressFirstTab(latest * 100);
  });

  const targetRef01 = useRef(null);
  const { scrollYProgress: scrollYProgress01 } = useScroll({
    container: containerRef,
    target: targetRef01,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity01 = useTransform(scrollYProgress01, [0, 0.38, 1], [0, 1, 0]);
  const scale01 = useTransform(scrollYProgress01, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef02 = useRef(null);
  const { scrollYProgress: scrollYProgress02 } = useScroll({
    container: containerRef,
    target: targetRef02,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity02 = useTransform(scrollYProgress02, [0, 0.38, 1], [0, 1, 0]);
  const scale02 = useTransform(scrollYProgress02, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef03 = useRef(null);
  const { scrollYProgress: scrollYProgress03 } = useScroll({
    container: containerRef,
    target: targetRef03,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity03 = useTransform(scrollYProgress03, [0, 0.38, 1], [0, 1, 0]);
  const scale03 = useTransform(scrollYProgress03, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef04 = useRef(null);
  const { scrollYProgress: scrollYProgress04 } = useScroll({
    container: containerRef,
    target: targetRef04,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity04 = useTransform(scrollYProgress04, [0, 0.38, 1], [0, 1, 0]);
  const scale04 = useTransform(scrollYProgress04, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef05 = useRef(null);
  const { scrollYProgress: scrollYProgress05 } = useScroll({
    container: containerRef,
    target: targetRef05,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity05 = useTransform(scrollYProgress05, [0, 0.38, 1], [0, 1, 0]);
  const scale05 = useTransform(scrollYProgress05, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef06 = useRef(null);
  const { scrollYProgress: scrollYProgress06 } = useScroll({
    container: containerRef,
    target: targetRef06,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity06 = useTransform(scrollYProgress06, [0, 0.38, 1], [0, 1, 0]);
  const scale06 = useTransform(scrollYProgress06, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef07 = useRef(null);
  const { scrollYProgress: scrollYProgress07 } = useScroll({
    container: containerRef,
    target: targetRef07,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity07 = useTransform(scrollYProgress07, [0, 0.38, 1], [0, 1, 0]);
  const scale07 = useTransform(scrollYProgress07, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef08 = useRef(null);
  const { scrollYProgress: scrollYProgress08 } = useScroll({
    container: containerRef,
    target: targetRef08,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity08 = useTransform(scrollYProgress08, [0, 0.38, 1], [0, 1, 0]);
  const scale08 = useTransform(scrollYProgress08, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef09 = useRef(null);
  const { scrollYProgress: scrollYProgress09 } = useScroll({
    container: containerRef,
    target: targetRef09,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity09 = useTransform(scrollYProgress09, [0, 0.38, 1], [0, 1, 0]);
  const scale09 = useTransform(scrollYProgress09, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef10 = useRef(null);
  const { scrollYProgress: scrollYProgress10 } = useScroll({
    container: containerRef,
    target: targetRef10,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity10 = useTransform(scrollYProgress10, [0, 0.38, 1], [0, 1, 0]);
  const scale10 = useTransform(scrollYProgress10, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef11 = useRef(null);
  const { scrollYProgress: scrollYProgress11 } = useScroll({
    container: containerRef,
    target: targetRef11,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity11 = useTransform(scrollYProgress11, [0, 0.38, 1], [0, 1, 0]);
  const scale11 = useTransform(scrollYProgress11, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef12 = useRef(null);
  const { scrollYProgress: scrollYProgress12 } = useScroll({
    container: containerRef,
    target: targetRef12,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity12 = useTransform(scrollYProgress12, [0, 0.38, 1], [0, 1, 0]);
  const scale12 = useTransform(scrollYProgress12, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef13 = useRef(null);
  const { scrollYProgress: scrollYProgress13 } = useScroll({
    container: containerRef,
    target: targetRef13,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity13 = useTransform(scrollYProgress13, [0, 0.38, 1], [0, 1, 0]);
  const scale13 = useTransform(scrollYProgress13, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef14 = useRef(null);
  const { scrollYProgress: scrollYProgress14 } = useScroll({
    container: containerRef,
    target: targetRef14,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity14 = useTransform(scrollYProgress14, [0, 0.38, 1], [0, 1, 0]);
  const scale14 = useTransform(scrollYProgress14, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef15 = useRef(null);
  const { scrollYProgress: scrollYProgress15 } = useScroll({
    container: containerRef,
    target: targetRef15,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity15 = useTransform(scrollYProgress15, [0, 0.38, 1], [0, 1, 0]);
  const scale15 = useTransform(scrollYProgress15, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef16 = useRef(null);
  const { scrollYProgress: scrollYProgress16 } = useScroll({
    container: containerRef,
    target: targetRef16,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity16 = useTransform(scrollYProgress16, [0, 0.38, 1], [0, 1, 0]);
  const scale16 = useTransform(scrollYProgress16, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef17 = useRef(null);
  const { scrollYProgress: scrollYProgress17 } = useScroll({
    container: containerRef,
    target: targetRef17,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity17 = useTransform(scrollYProgress17, [0, 0.38, 1], [0, 1, 0]);
  const scale17 = useTransform(scrollYProgress17, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef18 = useRef(null);
  const { scrollYProgress: scrollYProgress18 } = useScroll({
    container: containerRef,
    target: targetRef18,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity18 = useTransform(scrollYProgress18, [0, 0.38, 1], [0, 1, 0]);
  const scale18 = useTransform(scrollYProgress18, [0, 0.38, 1], [1.4, 1, 0.5]);

  const targetRef19 = useRef(null);
  const { scrollYProgress: scrollYProgress19 } = useScroll({
    container: containerRef,
    target: targetRef19,
    offset: ["start 0.1", "start 0.9"],
  });
  const opacity19 = useTransform(scrollYProgress19, [0, 0.38, 1], [0, 1, 0]);
  const scale19 = useTransform(scrollYProgress19, [0, 0.38, 1], [1.4, 1, 0.5]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handlePan = (event: PointerEvent, info: PanInfo) => {
    x.set(info.offset.x);
    y.set(info.offset.y);
  };

  const handlePanEnd = (event: PointerEvent, info: PanInfo) => {
    const { velocity } = info;
    if (velocity.y > 0) {
      console.log("向下滑动");
    } else {
      console.log("向上滑动");
    }
  };

  const [deltaY, setDeltaY] = useState(0);

  const handleWheel: WheelEventHandler<HTMLDivElement> = (event: WheelEvent<HTMLDivElement>) => {
    setDeltaY(event.deltaY);
    if (event.deltaY > 16) {
      console.log("向下滚动", event.deltaY, progressFirstTab);
      if (progressFirstTab >= 99.96) {
        changeTabIndex(1);
      }
    } else {
      console.log("向上滚动");
    }
  };

  return (
    <motion.div
      onPan={handlePan}
      onPanEnd={handlePanEnd}
      onWheel={handleWheel}
      className=" intro_container absolute h-full w-full overflow-x-clip overflow-y-auto text-white text-5xl/loose text-center px-4"
      ref={containerRef}
    >
      <div
        className=""
        style={{
          marginTop: "50vh",
          marginBottom: "50vh",
        }}
        ref={targetRef}
      >
        <motion.p
          style={{
            opacity: opacity01,
            scale: scale01,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef01}
        >
          When you want something,
        </motion.p>
        <motion.p
          style={{
            opacity: opacity02,
            scale: scale02,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef02}
        >
          all the universe conspires
        </motion.p>
        <motion.p
          style={{
            opacity: opacity03,
            scale: scale03,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef03}
        >
          in helping you to achieve it.
        </motion.p>
        <motion.p
          style={{
            opacity: opacity04,
            scale: scale04,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef04}
        >
          <strong>Paulo Coelho</strong>
        </motion.p>
        <p>
          <br />
          <br />
        </p>
        <motion.p
          style={{
            opacity: opacity05,
            scale: scale05,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef05}
        >
          Feed is that conspiracy:
        </motion.p>
        <motion.p
          style={{
            opacity: opacity06,
            scale: scale06,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef06}
        >
          the conspiracy of trust.
        </motion.p>
        <p>
          <br />
          <br />
        </p>
        <motion.p
          style={{
            opacity: opacity07,
            scale: scale07,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef07}
        >
          Trust is the single
        </motion.p>
        <motion.p
          style={{
            opacity: opacity08,
            scale: scale08,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef08}
        >
          most important ingredient
        </motion.p>
        <motion.p
          style={{
            opacity: opacity09,
            scale: scale09,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef09}
        >
          missing from digital relationships.
        </motion.p>
        <p>
          <br />
          <br />
        </p>
        <motion.p
          style={{
            opacity: opacity10,
            scale: scale10,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef10}
        >
          Boston Consulting Group
        </motion.p>
        <motion.p
          style={{
            opacity: opacity11,
            scale: scale11,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef11}
        >
          and the World Economic Forum
        </motion.p>
        <motion.p
          style={{
            opacity: opacity12,
            scale: scale12,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef12}
        >
          forecast the digital economy
        </motion.p>
        <motion.p
          style={{
            opacity: opacity13,
            scale: scale13,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef13}
        >
          to be worth between
        </motion.p>
        <motion.p
          style={{
            opacity: opacity14,
            scale: scale14,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef14}
        >
          <strong>1.5 and 2.5 trillion dollars</strong>
        </motion.p>
        <motion.p
          style={{
            opacity: opacity15,
            scale: scale15,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef15}
        >
          <strong>by 2016.</strong>
        </motion.p>
        <p>
          <br />
          <br />
        </p>
        <motion.p
          style={{
            opacity: opacity16,
            scale: scale16,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef16}
        >
          The difference
        </motion.p>
        <motion.p
          style={{
            opacity: opacity17,
            scale: scale17,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef17}
        >
          between those numbers
        </motion.p>
        <motion.p
          style={{
            opacity: opacity18,
            scale: scale18,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef18}
        >
          &quot;is &quot; <a href="">trust</a>
        </motion.p>
        <p>
          <br />
          <br />
        </p>
        <motion.p
          style={{
            opacity: opacity19,
            scale: scale19,
            transform: "translate3d(0, 0, 0)",
          }}
          ref={targetRef19}
        >
          Feed is a digital mechanism of <strong>trust</strong>
        </motion.p>
      </div>
    </motion.div>
  );
}
