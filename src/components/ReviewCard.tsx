import { MdVerified } from "react-icons/md";
import Avatar from "../assets/avatar.png";
import { IoStar } from "react-icons/io5";

const mockReview = {
  text: "As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.",
  user: { name: "Ken T.", isVerified: true },
  stars: 5
};

export default function ReviewCard() {
  return (
    <div className="flex flex-col gap-4 p-7">
      <div className="flex gap-3 justify-start items-center">
        <img src={Avatar} />

        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            {Array(mockReview.stars)
              .fill(0)
              .map((_, index) => (
                <IoStar className="fill-[#FFC000]" size={10} key={index} />
              ))}
          </div>
          <div className="flex gap-3 items-center justify-center">
            <p className="text-[14px] font-semibold">{mockReview.user.name}</p>
            {mockReview.user.isVerified && (
              <>
                <MdVerified className="fill-[#5BB59A]" />
                <span className="text-[#5BB59A] text-[12px]">
                  Verified costumer
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <p>"{mockReview.text}"</p>
    </div>
  );
}
