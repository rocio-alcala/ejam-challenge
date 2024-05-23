import GuaranteeImage from "../assets/guarantee.png";

export default function GuaranteeCard() {
  return (
    <div className="flex items-start gap-6">
      <img src={GuaranteeImage} className="h-[48px]" />
      <p>
        If you are not completely thrilled with your Clarifion - We have a{" "}
        <span className="font-semibold">30 day satisfaction guarantee.</span>{" "}
        Please refer to our return policy at the bottom of the page for more
        details. Happy Shopping
      </p>
    </div>
  );
}
