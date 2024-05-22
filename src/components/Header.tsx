import McAfeeIcon from "../assets/McAfee_Secure.png";
import NortonIcon from "../assets/norton-antivirus-logo 1.png";
import ClarifitionIcon from "../assets/clarifion-logo-1.png";

export default function Header() {
  return (
    <header className="flex justify-between shadow-xl shadow-slate-100 md:shadow-none p-5 lg:px-0">
      <img
        className="h-[20px] md:h-[32px] object-scale-down"
        src={ClarifitionIcon}
      ></img>
      <div className="shrink flex flex-nowrap ">
        <img
          className="h-[20px] md:h-[32px] px-2 object-scale-down"
          src={McAfeeIcon}
        ></img>
        <img
          className="h-[20px] md:h-[32px] px-2 object-scale-down"
          src={NortonIcon}
        ></img>
      </div>
    </header>
  );
}
