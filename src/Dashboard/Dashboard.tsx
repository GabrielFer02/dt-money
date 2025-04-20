import { Summary } from "../components/Summary/Summary";
import style from "./Dashboard.module.css";

export function Dashboard() {
  return (
    <main className={style.container}>
      <Summary />
    </main>
  );
}
