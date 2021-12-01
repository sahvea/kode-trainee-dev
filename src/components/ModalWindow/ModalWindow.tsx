import React, { ReactNode } from 'react';

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


  return (
    <div className={modalWindowClassName}>
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