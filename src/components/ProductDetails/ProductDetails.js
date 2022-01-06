import ProductActions from "./ProductActions/ProductActions";
import ProductPrice from "./ProductPrice";

const ProductDetails = () => {
  return (
    <div className="w-96 font-kumbh flex flex-col gap-6 justify-center">
      <div>
        <h2 className=" uppercase font-bold text-base text-orange mb-3">
          Sneaker Company
        </h2>
        <h1 className="text-very-dark-blue font-bold text-4xl">
          Fall Limited Edition Sneakers
        </h1>
      </div>
      <p className="text-dark-grayish-blue text-sm">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <ProductPrice price={"125.00"} discount={50} priceBefore={"250.00"} />
      <ProductActions />
    </div>
  );
};

export default ProductDetails;
