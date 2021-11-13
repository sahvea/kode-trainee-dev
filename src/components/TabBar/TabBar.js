import React from 'react';
import TabBarItem from '../TabBarItem/TabBarItem';


function TabBar(props) {
  const [selectedTab, setSelectedTab] = React.useState(0);

  function handleTabClick(id, tag) {
    setSelectedTab(id);
    props.setActiveTab(tag);
  }

  return (
    <div className="tab-bar">
      <ul className="tab-bar__list">
        {
          props.array.map(item => (
            <TabBarItem
              key={item.id}
              id={item.id}
              tag={item.tag}
              name={item.name}
              active={selectedTab}
              onClick={handleTabClick}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default TabBar;