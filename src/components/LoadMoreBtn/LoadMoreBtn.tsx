import css from "./LoadMoreBtn.module.css";
import { button } from "../../types";
import { FC } from "react";
const LoadMoreBtn: FC<button> = ({ clickBtn }) => {
  return (
    <button type="button" onClick={clickBtn} className={css.btn}>
      LoadMore
    </button>
  );
};
export default LoadMoreBtn;
