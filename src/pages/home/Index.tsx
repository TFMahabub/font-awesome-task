import SearchInput from "./SearchInput";
import style from "./index.module.scss";

const Index = () => {
  return (
    <main className={`${style.mainContainer} container`}>
      <section className={style.searchSection}>
        <SearchInput />
      </section>
    </main>
  );
};

export default Index;
