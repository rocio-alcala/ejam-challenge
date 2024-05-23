import { FaArrowRight } from "react-icons/fa";

export default function Button() {
  return (
    <button className="rounded-full my-5 p-5 font-semibold bg-[#59AE43] text-white w-full flex items-center justify-center gap-4">
      YES - CLAIM MY DISCOUNT <FaArrowRight size={19} />
    </button>
  );
}
