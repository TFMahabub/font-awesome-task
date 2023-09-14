import { BoltIcon } from "../../icons/Bolt";
import { ClassicIcon } from "../../icons/Classic";
import { Logo } from "../../icons/Logo";
import style from "./topFilter.module.scss";

const TopFilter = () => {
  return (
    <>
      <div className={style.filterContainer}>
        <ClassicIcon className={style.filterItem} />
        <p>Classic</p>
      </div>
      <div className={style.filterContainer}>
        <ClassicIcon className={style.filterItem} />
        <p>Sharp</p>
      </div>
      <div className={style.filterContainer}>
        <Logo className={style.filterItem} />
        <p>Brand</p>
      </div>
      <div className={style.filterContainer}>
        <BoltIcon className={style.filterItem} />
        <p>Free</p>
      </div>
    </>
  );
};

export default TopFilter;
