import { useAppContext } from "@/contexts/AppProvider";
import { WheelEventHandler, WheelEvent, useState } from "react";
import { motion, useAnimation, PanInfo, useScroll, useTransform, useMotionValueEvent, useMotionValue, useSpring } from "framer-motion";

type IntroItemProps = {
  tabIndex: number;
};

export default function Card({ tabIndex }: IntroItemProps) {
  const { changeTabIndex, progressFirstTab, setProgressFirstTab } = useAppContext();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handlePan = (event: PointerEvent, info: PanInfo) => {
    x.set(info.offset.x);
    y.set(info.offset.y);
  };

  const handlePanEnd = (event: PointerEvent, info: PanInfo) => {
    const { delta } = info;
    if (delta.y > 0) {
      console.log("向下滑动");
      changeTabIndex(tabIndex - 1);
    } else {
      console.log("向上滑动");
      changeTabIndex(tabIndex + 1);
    }
  };

  const [deltaY, setDeltaY] = useState(0);

  const handleWheel: WheelEventHandler<HTMLDivElement> = (event: WheelEvent<HTMLDivElement>) => {
    setDeltaY(event.deltaY);
    if (event.deltaY > 16) {
      console.log("向下滚动", event.deltaY);
      changeTabIndex(tabIndex + 1);
    } else if (event.deltaY < -16) {
      console.log("向上滚动");
      changeTabIndex(tabIndex - 1);
    }
  };
  return <motion.div onPan={handlePan} onPanEnd={handlePanEnd} onWheel={handleWheel} className=" w-full h-full"></motion.div>;
}
