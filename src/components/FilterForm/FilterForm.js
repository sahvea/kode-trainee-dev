function FilterForm() {
  return (
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
            checked="true"
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
          />
          <span className="filter-form__visible-radio"></span>
          По дню рождения
        </label>
      </fieldset>
    </form>
  );
}

export default FilterForm;