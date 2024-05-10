"use client";
import Intro from "@/components/Intro";
import Navigator from "@/components/Navigator";
import { AppContext } from "@/contexts/AppProvider";
import { use, useEffect, useState } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform, useMotionValueEvent, Variants, AnimatePresence, useAnimate, useAnimationControls } from "framer-motion";
import Card from "@/components/Card";
import "./page.css";

const noteVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "ease-in",
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "ease-in",
    },
  },
};

const variants: Variants = {
  upscreen: (index = 1) => ({
    translateY: ["100%", "-100%"],
    zIndex: index == 1 ? 10 : 20,
    display: "block",
    transition: {
      duration: 0.8,
      delay: index == 1 ? 0 : 0.2,
      type: "ease-in",
    },
  }),
  downscreen: (index = 1) => ({
    translateY: ["-100%", "100%"],
    zIndex: index == 1 ? 20 : 10,
    display: "block",
    transition: {
      duration: 0.8,
      delay: index == 1 ? 0.2 : 0,
      type: "ease-in",
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
      duration: 0.8,
      delay: 0.2,
      type: "ease-in",
    },
  }),
  downscreen: (index = 1) => ({
    translateY: ["-100%", "0%"],
    display: "block",
    transition: {
      duration: 0.8,
      delay: 0.2,
      type: "ease-in",
    },
  }),
  reset: {
    display: "none",
    transition: {
      duration: 0,
    },
  },
  normal: {},
};

export default function Home() {
  // ** State
  // const [tabIndex, setTabIndex] = useState(0);
  const [progressFirstTab, setProgressFirstTab] = useState(0);
  // const [startTransition, setStartTransition] = useState(0);
  const [tabData, setTabData] = useState({ tabIndex: 0, startTransition: 0 });

  const handleAnimationComplete = () => {
    setTabData({ ...tabData, startTransition: 0 });
  };

  return (
    <AppContext.Provider value={{ progressFirstTab, setProgressFirstTab, tabData, setTabData }}>
      <main className=" w-full h-screen bg-gray-600">
        <Navigator />
        <div className=" relative w-full h-screen  z-10">
          <motion.div
            initial={false}
            animate={tabData.tabIndex != 0 ? "reset" : "downscreen"}
            variants={pageVariants}
            className=" absolute  w-full h-screen"
            style={{ display: tabData.tabIndex == 0 ? "block" : "none" }}
          >
            <div className="absolute w-full h-screen ">
              <div className=" absolute bg-white w-full h-3 top-0 left-0" />
              <div className=" absolute bg-white h-full w-3 top-0 right-0" />
              <div className=" absolute bg-white w-full h-3 bottom-0 left-0" />
              <div className=" absolute bg-white h-full w-3 top-0 left-0" />
              <div className=" video_bg absolute w-full h-screen -z-10">
                <div className=" absolute h-full w-full opacity-30 bg-black" />
                <video className=" mt-0 object-cover w-full" src="/videos/intro.mp4" autoPlay loop muted playsInline style={{ minWidth: "1587px", height: "892px" }} preload="metadata">
                  <source src="/videos/intro.mp4" />
                </video>
              </div>
            </div>
            <div className="absolute w-full overflow-auto h-full">
              <Intro />
            </div>
            <motion.div
              initial={false}
              variants={noteVariants}
              animate={progressFirstTab < 8 ? "show" : "hidden"}
              className=" note_container absolute bottom-0 left-0 text-xs text-white p-5 text-left "
              style={{ width: "420px" }}
            >
              <p>
                Feed is an intelligent property rights and payments platform, using intelligent software and digital security that goes well beyond 'military-grade' to give users true ownership of
                their data and IP.
              </p>
              <br />
              <p>
                Feed facilitates trusted exchanges of users' progressively-perfecting data assets with businesses, researchers, and governments in a <b>trusted</b>, audited, and independently
                verifiable manner; on their own terms and conditions.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={false}
            animate={tabData.tabIndex != 1 ? "reset" : tabData.startTransition == 0 ? "normal" : tabData.startTransition == 1 ? "downscreen" : "upscreen"}
            variants={pageVariants}
            className=" absolute top-0 left-0 w-full h-screen overflow-hidden bg-black"
            style={{ display: tabData.tabIndex == 1 ? "block" : "none" }}
          >
            <Card tabIndex={1} />
          </motion.div>
          <motion.div
            initial={false}
            animate={tabData.tabIndex != 2 ? "reset" : "upscreen"}
            variants={pageVariants}
            className=" absolute top-0 left-0 w-full h-screen overflow-hidden bg-blue"
            style={{ display: tabData.tabIndex == 2 ? "block" : "none" }}
          >
            <Card tabIndex={2} />
          </motion.div>
          <motion.div
            initial={false}
            animate={tabData.tabIndex != 3 ? "reset" : "upscreen"}
            variants={pageVariants}
            className=" absolute top-0 left-0 w-full h-screen overflow-hidden bg-yellow"
            style={{ display: tabData.tabIndex == 3 ? "block" : "none" }}
          >
            <Card tabIndex={3} />
          </motion.div>
          <motion.div initial={false} animate={tabData.startTransition == 0 ? "reset" : tabData.startTransition == 2 ? "upscreen" : "downscreen"} onAnimationComplete={handleAnimationComplete}>
            <motion.div custom={2} variants={variants} className=" blue_block  z-40 absolute w-full h-full top-0 left-0 -translate-y-full" style={{ backgroundColor: "rgb(53, 1, 127)" }} />
            <motion.div custom={1} variants={variants} className=" white_block  z-40 absolute w-full h-full top-0 left-0 -translate-y-full" style={{ backgroundColor: "rgb(230, 230, 230)" }} />
          </motion.div>
        </div>
      </main>
    </AppContext.Provider>
  );
}
