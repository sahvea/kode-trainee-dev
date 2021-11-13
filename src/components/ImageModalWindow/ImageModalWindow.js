import ModalWindow from '../ModalWindow/ModalWindow';

function ImageModalWindow(props) {
  return (
    <ModalWindow isOpen={props.isOpen} onClose={props.onClose} type={'image'}>
      <img src={props.avatar} alt={props.name} className="modal-window__image" />
    </ModalWindow>
  );
}

export default ImageModalWindow;