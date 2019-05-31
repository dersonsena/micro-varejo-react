import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = (props) => {
  return (
    <ul className="sidenav-inner py-1">
      { props.items.map((item, i) =>
        <SidebarItem key={i} index={i} onClick={props.onClick} item={item} />)
      }
    </ul>
  );
}

export default Sidebar;
