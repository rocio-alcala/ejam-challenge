import { FiLock } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";
import Visa from "../assets/visa.png";
import PaypalShop from "../assets/shop-pay.png";
import Paypal from "../assets/paypal.png";
import MasterCard from "../assets/mastercard.png";
import GooglePay from "../assets/gpay.png";
import Amex from "../assets/amex.png";
import ApplePay from "../assets/apple-pay.png";

export default function PayMedia() {
  return (
    <>
      <div className="border-2 rounded border-[#CFCFCF] text-[#4D5254] p-4 lg:text-[12px]  flex flex-wrap  justify-center lg:flex-nowrap items-center">
        <p>Free Shipping</p>
        <RxDividerVertical size={25} className="fill-[#CFCFCF]" />
        <p className="flex gap-4 lg:gap-1 p-2 lg:p-0 items-center">
          <FiLock size={20} />
          Secure 256-bit SSL Encryption.
        </p>
        <RxDividerVertical
          size={25}
          className="fill-[#CFCFCF] hidden lg:inline"
        />
        <div className="flex flex-wrap gap-1 pt-5 border-[#CFCFCF] lg:border-none border-t-2 w-full lg:w-fit justify-center my-2 lg:m-0 lg:p-0">
          <img src={Visa} className="h-[20px] lg:h-[14px] object-cover" />
          <img src={PaypalShop} className="h-[20px] lg:h-[14px] object-cover" />
          <img src={Paypal} className="h-[20px] lg:h-[14px] object-cover" />
          <img src={MasterCard} className="h-[20px] lg:h-[14px] object-cover" />
          <img src={GooglePay} className="h-[20px] lg:h-[14px] object-cover" />
          <img src={ApplePay} className="h-[20px] lg:h-[14px] object-cover" />
          <img src={Amex} className="h-[20px] lg:h-[14px] object-cover" />
        </div>
      </div>
      <p className="text-center text-[#F82C2C] mb-2 hover:cursor-pointer underline">
        NO THANKS I DON'T WANT THIS
      </p>
    </>
  );
}
