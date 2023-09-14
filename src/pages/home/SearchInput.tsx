import { Search } from "../../icons/Search";
import style from "./searchInput.module.scss";

const SearchInput = () => {
  return (
    <label htmlFor="" className={style.label}>
      <Search className={style.searchIcon} />
      <input type="text" name="" id="" placeholder="Search Icons..." />
    </label>
  );
};

export default SearchInput;
