import ArticleImage from "../assets/image-clarificon.png";
import Button from "./Button";
import DiscountCard from "./DiscountCard";
import GuaranteeCard from "./GuaranteeCard";
import PayMedia from "./PayMedia";
import ProductCard from "./ProductCard";
import ReviewCard from "./ReviewCard";

export default function Article() {
  return (
    <article className="flex flex-col items-center lg:flex-row lg:gap-5 justify-between my-10 lg:mb-16">
      <div className="hidden lg:flex flex-col flex-1 h-full justify-between gap-5">
        <img
          src={ArticleImage}
          className="max-h-[591px] object-cover rounded-md"
        />
        <ReviewCard></ReviewCard>
      </div>
      <div className="flex flex-col flex-1 h-full gap-4 justify-between">
        <h2 className="text-2xl md:text-[32px] text-center lg:text-start">
          <span className="text-[#2C7EF8]">ONE TIME ONLY</span> Special Price
          For 6 Extra Clarifion For Only
          <span className="text-[#2C7EF8]"> $14 Each</span> ($84.00 Total!)
        </h2>
        <img src={ArticleImage} className="py-5 lg:hidden" />
        <ProductCard></ProductCard>
        <DiscountCard></DiscountCard>
        <Button></Button>
        <PayMedia></PayMedia>
        <GuaranteeCard></GuaranteeCard>
      </div>
    </article>
  );
}
