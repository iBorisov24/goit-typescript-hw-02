import { FC } from "react";
import css from "./ImageCard.module.css";
import { ImageCardProps } from "../../types";
const ImageCard: FC<ImageCardProps> = ({ url, alt, onClickFoo, bigUrl }) => {
  return (
    <div>
      <img
        className={css.img}
        onClick={() => {
          onClickFoo(bigUrl);
        }}
        src={url}
        alt={alt}
        width={"250"}
        height={"150"}
      />
    </div>
  );
};
export default ImageCard;
