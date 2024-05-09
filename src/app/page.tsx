"use client";
import Intro from "@/components/Intro";
import Navigator from "@/components/Navigator";
import { AppContext } from "@/contexts/AppProvider";
import { use, useEffect, useState } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform, useMotionValueEvent, Variants, AnimatePresence, useAnimate, useAnimationControls } from "framer-motion";

const variants: Variants = {
  upscreen: (index = 1) => ({
    translateY: ["100%", "-100%"],
    zIndex: index == 1 ? 10 : 20,
    display: "block",
    transition: {
      duration: 1,
      delay: index == 1 ? 0 : 0.2,
      type: "linear",
    },
  }),
  downscreen: (index = 1) => ({
    translateY: ["-100%", "100%"],
    zIndex: index == 1 ? 20 : 10,
    display: "block",
    transition: {
      duration: 1,
      delay: index == 1 ? 0.2 : 0,
      type: "linear",
    },
  }),
  reset: {
    display: "none",
    transition: {
      duration: 0,
    },
  },
};

const pageVariants: Variants = {
  upscreen: (index = 1) => ({
    translateY: ["100%", "0%"],
    display: "block",
    transition: {
      duration: 1,
      delay: 0.2,
      type: "linear",
    },
  }),
  downscreen: (index = 1) => ({
    translateY: ["-100%", "0%"],
    display: "block",
    transition: {
      duration: 1,
      delay: 0.2,
      type: "linear",
    },
  }),
  reset: {
    display: "none",
    transition: {
      // delay: 0.5,
      duration: 0,
    },
  },
};

export default function Home() {
  // ** State
  const [tabIndex, setTabIndex] = useState(0);
  const [progressFirstTab, setProgressFirstTab] = useState(0);
  const [startTransition, setStartTransition] = useState(0);
  const [tabData, setTabData] = useState({ tabIndex: 0, startTransition: 0 });

  const handleAnimationComplete = () => {
    // setStartTransition(0);
  };

  const tab1animation = tabIndex != 1 ? "reset" : startTransition == 2 ? "downscreen" : "upscreen";
  console.log(tab1animation);

  return (
    <AppContext.Provider value={{ tabIndex, setTabIndex, progressFirstTab, setProgressFirstTab, startTransition, setStartTransition, tabData, setTabData }}>
      <main className=" w-full h-screen bg-gray-600">
        <Navigator />
        <div className=" relative w-full h-screen overflow-hidden z-10">
          <motion.div
            initial={false}
            animate={tabIndex != 0 ? "reset" : "downscreen"}
            variants={pageVariants}
            className=" absolute overflow-hidden w-full h-screen"
            style={{ display: tabIndex == 0 ? "block" : "none" }}
          >
            <div className="absolute w-full h-screen overflow-hidden">
              <div className=" absolute bg-white w-full h-3 top-0 left-0" />
              <div className=" absolute bg-white h-full w-3 top-0 right-0" />
              <div className=" absolute bg-white w-full h-3 bottom-0 left-0" />
              <div className=" absolute bg-white h-full w-3 top-0 left-0" />
              <div className=" absolute w-full h-screen -z-10">
                <div className=" absolute h-full w-full opacity-30 bg-black" />
                <video className=" mt-0 object-cover w-full" src="/videos/intro.mp4" autoPlay loop muted playsInline style={{ minWidth: "1587px", height: "892px" }} preload="metadata">
                  <source src="/videos/intro.mp4" />
                </video>
              </div>
            </div>
            <div className="absolute w-full overflow-auto h-full">
              <Intro />
            </div>
          </motion.div>
          <motion.div
            initial={false}
            animate={tabIndex != 1 ? "reset" : "upscreen"}
            variants={pageVariants}
            className=" absolute top-0 left-0 w-full h-screen overflow-hidden bg-black"
            style={{ display: tabIndex == 1 ? "block" : "none" }}
          ></motion.div>
          <motion.div
            initial={false}
            animate={tabIndex != 2 ? "reset" : "upscreen"}
            variants={pageVariants}
            className=" absolute top-0 left-0 w-full h-screen overflow-hidden bg-blue"
            style={{ display: tabIndex == 2 ? "block" : "none" }}
          ></motion.div>
          <motion.div
            initial={false}
            animate={tabIndex != 3 ? "reset" : "upscreen"}
            variants={pageVariants}
            className=" absolute top-0 left-0 w-full h-screen overflow-hidden bg-yellow"
            style={{ display: tabIndex == 3 ? "block" : "none" }}
          ></motion.div>
          <motion.div initial={false} animate={tabData.startTransition == 2 ? "upscreen" : "downscreen"} onAnimationComplete={handleAnimationComplete}>
            <motion.div
              custom={1}
              variants={variants}
              exit={"reset"}
              className=" blue_block  z-40 absolute w-full h-full top-0 left-0 -translate-y-full"
              style={{ backgroundColor: "rgb(53, 1, 127)" }}
            />
            <motion.div
              custom={2}
              variants={variants}
              exit={"reset"}
              className=" white_block  z-40 absolute w-full h-full top-0 left-0 -translate-y-full"
              style={{ backgroundColor: "rgb(230, 230, 230)" }}
            />
          </motion.div>
        </div>
      </main>
    </AppContext.Provider>
  );
}
