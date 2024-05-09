"use client";
import { motion, useAnimation, useInView, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef } from "react";
import IntroItem from "./IntroItem";
import { useAppContext } from "@/contexts/AppProvider";

export default function Intro() {
  const containerRef = useRef(null);
  const targetRef = useRef(null);
  const { tabIndex, changeTabIndex, progressFirstTab, setProgressFirstTab } = useAppContext();

  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    offset: ["start center", "end center"],
  });
  const progress = useTransform(scrollYProgress, [0, 0.03, 0.97, 1], [0, 0, 1, 1]);

  useMotionValueEvent(progress, "change", (latest) => {
    setProgressFirstTab(latest*100);
    if (latest == 1) {
      changeTabIndex(1);
    }
  });

  return (
    <div className=" absolute h-full w-full overflow-auto text-white text-5xl/loose text-center px-4" ref={containerRef}>
      <div
        className=""
        style={{
          marginTop: "30%",
          marginBottom: "30%",
        }}
        ref={targetRef}
      >
        <IntroItem containerRef={containerRef}>When you want something,</IntroItem>
        <IntroItem containerRef={containerRef}>all the universe conspires</IntroItem>
        <IntroItem containerRef={containerRef}>in helping you to achieve it.</IntroItem>
        <IntroItem containerRef={containerRef}>
          <strong>Paulo Coelho</strong>
        </IntroItem>
        <p>
          <br />
          <br />
        </p>
        <IntroItem containerRef={containerRef}>Feed is that conspiracy:</IntroItem>
        <IntroItem containerRef={containerRef}>the conspiracy of trust.</IntroItem>
        <p>
          <br />
          <br />
        </p>
        <IntroItem containerRef={containerRef}>Trust is the single</IntroItem>
        <IntroItem containerRef={containerRef}>most important ingredient</IntroItem>
        <IntroItem containerRef={containerRef}>missing from digital relationships.</IntroItem>
        <p>
          <br />
          <br />
        </p>
        <IntroItem containerRef={containerRef}>Boston Consulting Group</IntroItem>
        <IntroItem containerRef={containerRef}>and the World Economic Forum</IntroItem>
        <IntroItem containerRef={containerRef}>forecast the digital economy</IntroItem>
        <IntroItem containerRef={containerRef}>to be worth between</IntroItem>
        <IntroItem containerRef={containerRef}>
          <strong>1.5 and 2.5 trillion dollars</strong>
        </IntroItem>
        <IntroItem containerRef={containerRef}>
          <strong>by 2016.</strong>
        </IntroItem>
        <p>
          <br />
          <br />
        </p>
        <IntroItem containerRef={containerRef}>The difference</IntroItem>
        <IntroItem containerRef={containerRef}>between those numbers</IntroItem>
        <IntroItem containerRef={containerRef}>
          &quot;is &quot; <a href="">trust</a>
        </IntroItem>
        <p>
          <br />
          <br />
        </p>
        <IntroItem containerRef={containerRef}>
          Feed is a digital mechanism of <strong>trust</strong>
        </IntroItem>
      </div>
    </div>
  );
}
