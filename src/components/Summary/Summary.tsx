import style from "./Summary.module.css";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  return <div className={style.container}>
    <div>
      <header>
        <p>Entradas</p>
        <img src={incomeImg} alt="Entradas" />
      </header>
      <strong>R$1000,00</strong>
    </div>
    <div>
      <header>
        <p>Saídas</p>
        <img src={outcomeImg} alt="Saídas" />
      </header>
      <strong>- R$500,00</strong>
    </div>
    <div>
      <header>
        <p>Total</p>
        <img src={totalImg} alt="Total" />
      </header>
      <strong>R$500,00</strong>
    </div>
  </div>;
}
