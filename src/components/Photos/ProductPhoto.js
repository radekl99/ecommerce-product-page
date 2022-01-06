const ProductPhoto = (props) => {
  const { photos, activePhoto } = props;

  return <img src={photos[activePhoto]} className="rounded-xl" />;
};

export default ProductPhoto;
