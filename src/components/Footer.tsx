import { FiLock } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";

export default function Footer() {
  return (
    <footer className="flex flex-wrap bg-[#252F3D] p-3 md:p-5 md:px-20 justify-center animate-fade-in-bottom lg:justify-between items-center text-[#FFFFFF] text-xs md:text-base">
      <p className="flex items-center p-2 lg:p-0 gap-1">
        Copyright (c) 2023 <RxDividerVertical size={20} />{" "}
        Clarifionsupport@clarifion.com
      </p>
      <p className="flex gap-4 p-2 lg:p-0 items-center">
        <FiLock size={15} />
        Secure 256-bit SSL encryption.
      </p>
    </footer>
  );
}
