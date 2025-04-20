import logoImg from "../../assets/logo.svg";
import style from "./Header.module.css";

export function Header() {
  return (
    <header className={style.container}>
      <div className={style.content}>
        <img src={logoImg} alt="gt money" />
        <button type="button">Nova transação</button>
      </div>
    </header>
  );
}
