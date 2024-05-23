import ArticleImage from "../assets/image-clarificon.png";
import ProductCard from "./ProductCard";

export default function Article() {
  return (
    <article className="flex flex-col items-center">
      <h2 className="text-2xl md:text-[32px]] text-center">
        <span className="text-[#2C7EF8]">ONE TIME ONLY</span> Special Price For
        6 Extra Clarifion For Only
        <span className="text-[#2C7EF8]"> $14 Each</span> ($84.00 Total!)
      </h2>
      <img src={ArticleImage} className="py-5" />
      <ProductCard></ProductCard>
    </article>
  );
}
