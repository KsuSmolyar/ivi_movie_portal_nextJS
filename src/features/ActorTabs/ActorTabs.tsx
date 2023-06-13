import React, { useState } from 'react';
import cn from 'classnames';
import styles from './actorTabs.module.css';

interface IActorTabs {
  tabs: string[];
}

export const ActorTabs = ({ tabs }: IActorTabs) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <ul className={styles.tabsList}>
      {tabs.map((tab, index) => (
        <li
          key={tab}
          onClick={() => setSelectedTab(index)}
          className={cn(styles.tabsItem, index === selectedTab ? styles.active : null)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};
