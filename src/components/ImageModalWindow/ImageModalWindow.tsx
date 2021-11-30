import React from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';

type Props = {
  avatar: string,
  name: string,
  isOpen: boolean,
  onClose: () => void,
}

const ImageModalWindow: React.FC<Props> = ({ avatar, name, isOpen, onClose }) => {
  return (
    <ModalWindow isOpen={isOpen} onClose={onClose} type={'image'}>
      <img src={avatar} alt={name} className="modal-window__image" />
    </ModalWindow>
  );
}

export default ImageModalWindow;