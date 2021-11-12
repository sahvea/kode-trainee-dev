import FilterForm from '../FilterForm/FilterForm';

function ModalWindow(props) {
  return (
    <div className={`modal-window ${props.isOpen ? "modal-window_opened" : ""}`}>
      <div className="modal-window__container">
        <button className="app__button modal-window__close-btn" type="button" aria-label="Закрыть" title="Закрыть" onClick={props.onClose}></button>

        <FilterForm setChecked={props.setChecked} />

      </div>
    </div>
  );
}

export default ModalWindow;