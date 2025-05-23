import React from 'react';
import style from './TransactionsTable.module.css';
import { api } from '../../services/api';

export function TransactionsTable() {
  React.useEffect(() => {
    api.get('transactions').then(response => console.log(response.data));
  }, []);

  return (
    <div className={style.container}>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className={style.deposit}>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/12/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className={style.withdraw}>- R$1.100</td>
            <td>Casa</td>
            <td>20/12/2021</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
