import React from 'react';
import ReactModal from 'react-modal';
import './styles/global.css';
import { Header } from './components/Header/Header';
import { Dashboard } from './components/Dashboard/Dashboard';

ReactModal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    React.useState(false);

  function handleToogleNewTransactionModal() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }
  return (
    <>
      <Header onToogleNewTransactionModal={handleToogleNewTransactionModal} />
      <Dashboard />
      <ReactModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleToogleNewTransactionModal}
      >
        <h1>Cadastrar modal</h1>
      </ReactModal>
    </>
  );
}
