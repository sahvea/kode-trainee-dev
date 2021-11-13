function ModalWindow(props) {
  const modalWindowClassName = `modal-window ${props.isOpen ? 'modal-window_opened' : ''}`;
  const modalWindowContainerClassName = `modal-window__container ${props.containerClass ? props.containerClass : ''}`;

  return (
    <div className={modalWindowClassName}>
      <div className={modalWindowContainerClassName}>
        <button
          className="app__button modal-window__close-btn"
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