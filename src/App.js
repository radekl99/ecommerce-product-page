import Header from "./components/Header/Header";
import Photos from "./components/Photos/Photos";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductThumbnail1 from "./images/image-product-1-thumbnail.jpg";
import ProductPhoto1 from "./images/image-product-1.jpg";
import ProductThumbnail2 from "./images/image-product-2-thumbnail.jpg";
import ProductPhoto2 from "./images/image-product-2.jpg";
import ProductThumbnail3 from "./images/image-product-3-thumbnail.jpg";
import ProductPhoto3 from "./images/image-product-3.jpg";
import ProductThumbnail4 from "./images/image-product-4-thumbnail.jpg";
import ProductPhoto4 from "./images/image-product-4.jpg";

const productPhotos = [
  ProductPhoto1,
  ProductPhoto2,
  ProductPhoto3,
  ProductPhoto4,
];

const productPhotosThumbnails = [
  ProductThumbnail1,
  ProductThumbnail2,
  ProductThumbnail3,
  ProductThumbnail4,
];

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="md:my-24 flex flex-col md:flex-row md:gap-32">
        <Photos
          photos={productPhotos}
          thumbnails={productPhotosThumbnails}
          initialPhoto={0}
          canOpenLightbox={false}
        />
        <ProductDetails />
      </div>
    </div>
  );
}

export default App;
