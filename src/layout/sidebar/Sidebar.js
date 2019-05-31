import React from 'react';
import SidebarItem from './SidebarItem';
import items from './items';

const Sidebar = (props) => {
  return (
    <ul className="sidenav-inner py-1">
      { items.map((item, i) => <SidebarItem key={i} item={item} />) }
    </ul>
  );
}

export default Sidebar;
