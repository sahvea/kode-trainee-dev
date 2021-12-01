import React, { Dispatch } from 'react';
import TabBarItem from '../TabBarItem/TabBarItem';
import { TabArray } from '../../utils/types';

type Props = {
  array: TabArray[];
  setActiveTab: Dispatch<string>;
}

const TabBar: React.FC<Props> = ({ array, setActiveTab }) => {
  const [selectedTab, setSelectedTab] = React.useState<number>(0);

  function handleTabClick(id: number, tag: string) {
    setSelectedTab(id);
    setActiveTab(tag);
  }

  return (
    <div className="tab-bar">
      <ul className="tab-bar__list">
        {
          array.map(item => (
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