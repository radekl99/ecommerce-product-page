const ProductPrice = (props) => {
  const { price, discount, priceBefore } = props;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-4">
        <div className="font-bold text-2xl">${price}</div>
        <div className="font-bold bg-pale-orange text-orange rounded-md px-2">
          {discount}%
        </div>
      </div>
      <div className="font-bold line-through text-grayish-blue">
        ${priceBefore}
      </div>
    </div>
  );
};

export default ProductPrice;
