import SearchInput from "./SearchInput";
import TopFilter from "./TopFilter";
import style from "./index.module.scss";

const Index = () => {
  return (
    <main className={style.mainContainer}>
      <section className={style.searchSection}>
        <SearchInput />
      </section>
      <section className={style.topFilterSection}>
        <div className={`${style.topFilterContainer} container`}>
          <TopFilter />
        </div>
      </section>
      <section className={style.mainPartSection}>main part</section>
    </main>
  );
};

export default Index;
