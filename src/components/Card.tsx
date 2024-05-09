import { useAppContext } from "@/contexts/AppProvider";
import { WheelEventHandler, WheelEvent, useState } from "react";

type IntroItemProps = {
  tabIndex: number;
};

export default function Card({ tabIndex }: IntroItemProps) {
  const { changeTabIndex, progressFirstTab, setProgressFirstTab } = useAppContext();

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
  return <div onWheel={handleWheel} className=" w-full h-full"></div>;
}
