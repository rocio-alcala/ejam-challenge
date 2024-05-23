import PercentIcon from "../assets/percent.png";

export default function DiscountCard() {
  return (
    <div className="rounded-lg bg-[#EDF3FD] flex items-center p-5 gap-5 my-4">
      <img src={PercentIcon} alt="percent" />
      <p>
        Save <span className="text-[#2C7EF8]">53%</span> and get{" "}
        <span className="text-[#2C7EF8]">6 extra Clarifision</span> for only{" "}
        <span className="text-[#2C7EF8]">$14 Each.</span>
      </p>
    </div>
  );
}
