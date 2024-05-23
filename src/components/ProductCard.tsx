import { IoStar } from "react-icons/io5";
import StockIcon from "../assets/stock.png";
import { FaCheck } from "react-icons/fa";

const mockProduct = {
  title: "Clarifion Air Ionizer",
  description:
    "Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple",
  stars: 5,
  stock: 12,
  price: 180,
  discountPrice: 84,
  imagePath: "/image-product.png"
};

export default function ProductCard() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <img src={mockProduct.imagePath} />
        <div className="flex flex-col p-6 pr-0 justify-between flex-1">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-[18px]">{mockProduct.title}</h4>
            <div className="flex items-center gap-2">
              <p className="line-through text-[#969696] font-semibold text-[13px]">
                ${mockProduct.price}
              </p>
              <p className="text-[#2C7EF8] font-bold text-[17px]">
                ${mockProduct.discountPrice}
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {Array(mockProduct.stars)
              .fill(0)
              .map(() => (
                <IoStar className="fill-[#FFC000]" size={15} />
              ))}
          </div>
          <div className="flex items-center">
            <img src={StockIcon} className="pr-5 h-[12px]" />
            <p className="text-[#37465A]">{mockProduct.stock} left in Stock</p>
          </div>
        </div>
      </div>
      <div className="text-[#4D5254] text-center p-4">
        {mockProduct.description}
      </div>

      <div className="flex text-[#4D5254] items-center p-2">
        <FaCheck size={18} className="fill-[#2C7EF8] mr-5" />
        <p>
          Negative Ion Technology may
          <span className="font-bold"> help with allergens</span>
        </p>
      </div>
      <div className="flex  text-[#4D5254] items-center p-2">
        <FaCheck size={18} className="fill-[#2C7EF8] mr-5" />
        <p>
          Designed for <span className="font-bold">air rejuvenation</span>
        </p>
      </div>
      <div className="flex  text-[#4D5254] items-center p-2">
        <FaCheck size={18} className="fill-[#2C7EF8] mr-5" />
        <p>
          <span className="font-bold">Perfect for every room</span> in all types
          of places
        </p>
      </div>
    </div>
  );
}
