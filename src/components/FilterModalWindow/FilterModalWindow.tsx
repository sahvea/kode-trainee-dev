import React from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  setChecked: (arg0: boolean) => void;
}

const FilterModalWindow: React.FC<Props> = ({ isOpen, onClose, setChecked }) => {
  const [isBdayChecked, setIsBdayChecked] = React.useState<boolean>(false);

  function handleRadioClick() {
    setIsBdayChecked(!isBdayChecked);
    setChecked(!isBdayChecked);

    onClose();
  }

  return (
    <ModalWindow isOpen={isOpen} onClose={onClose} >
      <form className="filter-form" name="filter-form">
        <fieldset className="filter-form__fieldset">
          <legend className="filter-form__title">Сортировка</legend>
          <label className="filter-form__input">
            <input
              className="filter-form__radio"
              type="radio"
              name="filter"
              value="alphabet"
              required
              checked={!isBdayChecked}
              onChange={handleRadioClick}
            />
            <span className="filter-form__visible-radio"></span>
            По алфавиту
          </label>
          <label className="filter-form__input">
            <input
              className="filter-form__radio"
              type="radio"
              name="filter"
              value="birthday"
              required
              checked={isBdayChecked}
              onChange={handleRadioClick}
            />
            <span className="filter-form__visible-radio"></span>
            По дню рождения
          </label>
        </fieldset>
      </form>
    </ModalWindow>
  );
}

export default FilterModalWindow;