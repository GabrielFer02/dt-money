import { Summary } from "../Summary/Summary";
import { TransactionsTable } from "../TransactionsTable/TransactionsTable";
import style from "./Dashboard.module.css";

export function Dashboard() {
  return (
    <main className={style.container}>
      <Summary />
      <TransactionsTable />
    </main>
  );
}
