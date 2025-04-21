import logoImg from '../../assets/logo.svg';
import style from './Header.module.css';

type HeaderProps = {
  onToogleNewTransactionModal: () => void;
};

export function Header({onToogleNewTransactionModal}: HeaderProps) {
  return (
    <header className={style.container}>
      <div className={style.content}>
        <img src={logoImg} alt='gt money' />
        <button type='button' onClick={onToogleNewTransactionModal}>
          Nova transação
        </button>
      </div>
    </header>
  );
}
