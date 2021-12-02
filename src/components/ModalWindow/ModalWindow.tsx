import React, { MouseEvent, ReactNode } from 'react';

type Props = {
  type?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalWindow: React.FC<Props> = ({ type, isOpen, onClose, children }) => {
  const modalWindowClassName: string = `modal-window ${isOpen ? 'modal-window_opened' : ''}`;
  const modalWindowContainerClassName: string = `modal-window__container ${type ? `modal-window__container_type_${type}` : ''}`;
  const modalWindowbuttonClassName: string = `app__button modal-window__close-btn ${type ? `modal-window__close-btn_type_${type}` : ''}`;

  function handleOverlayClick(e: MouseEvent<HTMLElement>) {
    if ((e.target as any).classList.contains('modal-window_opened')) {
      onClose();
    }
  }

  React.useEffect(() => {
    const handleEscClose = (evt: KeyboardEventInit) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleEscClose);

    return () => document.removeEventListener('keydown', handleEscClose);
  }, [onClose]);


  return (
    <div className={modalWindowClassName} onClick={handleOverlayClick}>
      <div className={modalWindowContainerClassName}>
        <button
          className={modalWindowbuttonClassName}
          type="button"
          aria-label="Закрыть"
          title="Закрыть"
          onClick={onClose}
        />

        <>{children}</>

      </div>
    </div>
  );
}

export default ModalWindow;