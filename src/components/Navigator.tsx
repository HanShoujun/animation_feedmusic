"use client";
import Image from "next/image";
import { logoWhite } from "@/images";
import NaviItem from "./NaviItem";
import { useContext } from "react";
import { AppContext, useAppContext } from "@/contexts/AppProvider";
import "./Navigator.css";

const titleList = ["Introduction", "The Technology", "Tech Spotlight", "Why Music?"];

export default function Navigator() {
  const { tabData, changeTabIndex, progressFirstTab } = useAppContext();

  const handleTabChange = (index: number) => {
    changeTabIndex(index);
  };

  return (
    <header className=" fixed z-50 top-0 left-0 w-full pt-14 px-8">
      <div className=" flex flex-row justify-between w-full gap-3">
        <Image src={logoWhite} alt="logo" className=" w-8 h-8 " />
        <div className=" nav_container flex flex-1 justify-center items-end gap-3">
          {titleList.map((title, index) => (
            <div onClick={() => handleTabChange(index)} key={title}>
              <NaviItem title={title} active={index == tabData.tabIndex} progress={index == 0 ? progressFirstTab : 100} />
            </div>
          ))}
        </div>
        <Image src={logoWhite} alt="logo" className=" w-8 h-8 " />
      </div>
    </header>
  );
}
