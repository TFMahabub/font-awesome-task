import { Logo } from "../../icons/Logo";
import style from "./Index.module.scss";

const Index = () => {
  return (
    <nav className={style.navbar}>
      <div className={`${style.container} container`}>
        <div className={style.logo_container}>
          <Logo className={style.logo} />
        </div>
        <ul className={style.menus}>
          <li className={style.menu}>Home</li>
          <li className={style.menu}>Home</li>
          <li className={style.menu}>Home</li>
          <li className={style.menu}>Home</li>
        </ul>
      </div>
    </nav>
  );
};

export default Index;
