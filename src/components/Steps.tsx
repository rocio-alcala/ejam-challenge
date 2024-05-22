import CheckIcon from "../assets/check.png";
import Step3Icon from "../assets/step3.png";
import Step4Icon from "../assets/step4.png";

export default function Steps() {
  return (
    <div className="flex items-center justify-between py-5 lg:py-12">
      <div className="flex flex-col sm:flex-row gap-1 items-center">
        <img src={CheckIcon} className="h-[20px] object-scale-down" />
        <p className="text-xs lg:text-[20px]">
          <span className="hidden sm:inline">Step 1: </span>Cart Review
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-1 items-center">
        <img src={CheckIcon} className="h-[20px] object-scale-down" />
        <p className="text-xs lg:text-[20px]">
          <span className="hidden sm:inline">Step 2: </span>Checkout
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-1 items-center">
        <img src={Step3Icon} className="h-[20px] object-scale-down" />
        <p className="text-xs font-bold lg:text-[20px]">
          <span className="hidden sm:inline">Step 3: </span>Special Offer
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-1 items-center">
        <img src={Step4Icon} className="h-[20px] object-scale-down" />
        <p className="text-xs lg:text-[20px]">
          <span className="hidden sm:inline">Step 4: </span>Confirmation
        </p>
      </div>
    </div>
  );
}
