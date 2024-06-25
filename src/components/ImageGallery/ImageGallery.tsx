import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { FC } from "react";
import { ImageGalleryProps } from "../../types";
const ImageGallery: FC<ImageGalleryProps> = ({ gallery, onClickFoo }) => {
  return (
    <ul className={css.gallery}>
      {gallery.map((item) => (
        <li key={item.id} className={css.galleryItem}>
          <ImageCard
            url={item.urls.small}
            alt={item.alt_description}
            onClickFoo={onClickFoo}
            bigUrl={item.urls.regular}
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
