function ModalWindow(props) {
  const modalWindowClassName = `modal-window ${props.isOpen ? 'modal-window_opened' : ''}`;
  const modalWindowContainerClassName = `modal-window__container ${props.type ? `modal-window__container_type_${props.type}` : ''}`;
  const modalWindowbuttonClassName = `app__button modal-window__close-btn ${props.type ? `modal-window__close-btn_type_${props.type}` : ''}`;


  return (
    <div className={modalWindowClassName}>
      <div className={modalWindowContainerClassName}>
        <button
          className={modalWindowbuttonClassName}
          type="button"
          aria-label="Закрыть"
          title="Закрыть"
          onClick={props.onClose}
        />

        {props.children}

      </div>
    </div>
  );
}

export default ModalWindow;