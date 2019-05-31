import React from 'react';
import classnames from 'classnames';

const getMarkupSubItem = (item, index) => {
  const classes = classnames(
    'sidenav-item',
    item.isActive ? 'active' : false
  );

  return (
    <li key={index} className={classes}>
      <a href="#" className="sidenav-link">
        <i className={item.icon}></i>{' '}
        <div>{item.text}</div>
      </a>
    </li>
  )
};

const SidebarItem = ({ item }) => {
  const isDivider = item.hasOwnProperty('divider');

  if (isDivider) {
    return <li className="sidenav-divider mb-1"></li>
  }

  let subItens = [];

  if (item.items && item.items.length > 0) {
    subItens = item.items.map((subItem, i) => getMarkupSubItem(subItem, i));
  }

  const liClasses = classnames(
    'sidenav-item',
    item.isActive ? 'active' : false,
    item.isOpen ? 'open' : false
  );

  const aClasses = classnames(
    'sidenav-link',
    item.items && item.items.length > 0 ? 'sidenav-toggle' : false
  );

  return (
    <li className={liClasses}>
      <a href="#" className={aClasses}>
        <i className={item.icon}></i>{' '}
        <div>{item.text}</div>
      </a>
      { subItens.length > 0 &&
        <ul className="sidenav-menu">
          { subItens }
        </ul>
      }
    </li>
  );
}

export default SidebarItem;
