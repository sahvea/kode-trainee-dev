import React from 'react';

type Props = {
  id: number;
  tag: string;
  name: string;
  active: number;
  onClick: (id: number, tag: string) => void;
}

const TabBarItem: React.FC<Props> = ({ id, tag, name, active, onClick }) => {
  const buttonClassName: string = `app__button tab-bar__button ${id === active ? "tab-bar__button_active" : ""}`;

  function handleClick() {
    onClick(id, tag);
  }

  return (
    <li className="tab-bar__list-item">
      <button className={buttonClassName} type="button" onClick={handleClick} value={tag}>
        {name}
      </button>
    </li>
  );
}

export default TabBarItem;