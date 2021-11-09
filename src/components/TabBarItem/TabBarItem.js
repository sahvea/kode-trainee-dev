function TabBarItem(props) {
  const buttonClassName = `app__button tab-bar__button ${props.id === props.active ? "tab-bar__button_active" : ""}`;

  function handleClick() {
    props.onClick(props.id);
  }

  return (
    <li className="tab-bar__list-item">
      <button className={buttonClassName} type="button" onClick={handleClick}>
        {props.name}
      </button>
    </li>
  );
}

export default TabBarItem;