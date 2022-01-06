import ProductPhoto from "./ProductPhoto";
import Thumbnails from "./Thumbnails";
import { useState } from "react";

const Photos = (props) => {
  const { photos, thumbnails } = props;

  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <div className="flex flex-col gap-5 w-96">
      <ProductPhoto photos={photos} activePhoto={activePhoto} />
      <Thumbnails
        thumbnails={thumbnails}
        setActivePhoto={setActivePhoto}
        activePhoto={activePhoto}
      />
    </div>
  );
};

export default Photos;
