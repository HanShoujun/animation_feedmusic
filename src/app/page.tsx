import Image from "next/image";
import { logoWhite } from "@/images";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main className=" w-full h-screen bg-gray-600">
      <header className=" fixed z-50 top-0 left-0 w-full pt-14 px-8">
        <div className=" flex flex-row content-between w-full gap-3">
          <Image src={logoWhite} alt="logo" className=" w-8 h-8 " />
          <div className="flex flex-1 justify-center items-end gap-3">
            <div className=" px-2 text-white uppercase">Introduction</div>
            <div className=" px-2 text-white uppercase">Introduction</div>
            <div className=" px-2 text-white uppercase">Introduction</div>
            <div className=" px-2 text-white uppercase">Introduction</div>
          </div>
          <Image src={logoWhite} alt="logo" className=" w-8 h-8 " />
        </div>
      </header>
      <div className=" w-screen bg-orange-200 ">
        <div className=" relative w-full h-screen overflow-hidden z-10">
          <div className=" relative overflow-hidden w-full h-screen">
            <div className="absolute w-full h-screen overflow-hidden">
              <div className=" absolute bg-white w-full h-3 top-0 left-0" />
              <div className=" absolute bg-white h-full w-3 top-0 right-0" />
              <div className=" absolute bg-white w-full h-3 bottom-0 left-0" />
              <div className=" absolute bg-white h-full w-3 top-0 left-0" />
              <div className=" absolute w-full h-screen -z-10">
                <div className=" absolute h-full w-full opacity-30 bg-black" />
                <video className=" mt-0 object-cover" style={{ width: "1587px", height: "892px" }} src="videos/intro.mp4" loop autoPlay />
              </div>
            </div>
            <div className="absolute w-full overflow-auto h-full">
              <Intro />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
