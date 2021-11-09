import React from 'react';
// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Header from '../Header/Header';
import ModalWindow from '../ModalWindow/ModalWindow';
import Staff from '../Staff/Staff';

function App() {
  const [isModalWindowOpen, setIsModalWindowOpen] = React.useState(false);

  function openModalWindow() {
    setIsModalWindowOpen(true);
  }

  function closeModalWindow() {
    setIsModalWindowOpen(false);
  }

  // закрытие модального окна по Esc
  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeModalWindow();
      }
    }
    document.addEventListener('keydown', handleEscClose);

    return () => document.removeEventListener('keydown', handleEscClose);
  }, []);

  // закрытие модального окна по клику вне окна
  React.useEffect(() => {
    function handleOverlayClose(evt) {
      if (evt.target.classList.contains('modal-window_opened')) {
        closeModalWindow();
      }
    }
    document.addEventListener('click', handleOverlayClose);

    return () => document.removeEventListener('click', handleOverlayClose);
  }, []);

  return (
    <>
      <Header onSortBnt={openModalWindow} />
      <main>
        <Staff />
      </main>

      <ModalWindow isOpen={isModalWindowOpen} onClose={closeModalWindow} />
    </>
  );
}

export default App;
