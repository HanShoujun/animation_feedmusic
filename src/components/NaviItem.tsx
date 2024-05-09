type NaviItemProps = {
  title: string;
  active?: boolean;
  progress?: number;
};

export default function NaviItem({ title, active = false, progress = 100 }: NaviItemProps) {
  return (
    <div className=" cursor-pointer px-2 ">
      <div className="  text-white uppercase">{title}</div>
      <div className=" h-1 " style={{ backgroundColor: "#b3b3b3", visibility: active ? "visible" : "hidden" }}>
        <div className=" h-full w-full bg-white" style={{ width: progress + "%" }} />
      </div>
    </div>
  );
}
