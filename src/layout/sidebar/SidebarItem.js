import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const getMarkupSubItem = (item, index) => {
  const classes = classnames(
    'sidenav-item',
    item.isActive ? 'active' : false
  );

  return (
    <li key={index} className={classes}>
      <Link to={item.to} className="sidenav-link">
        <i className={item.icon}></i>{' '}
        <div>{item.text}</div>
      </Link>
    </li>
  )
};

const SidebarItem = ({ item, onClick, index }) => {
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

  const link = item.hasOwnProperty('to') ? (
    <Link to={item.to} className={aClasses} onClick={e => onClick(e, item, index)}>
      <i className={item.icon}></i>{' '}
      <div>{item.text}</div>
    </Link>
  ) : (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className={aClasses} onClick={e => onClick(e, item, index)}>
      <i className={item.icon}></i>{' '}
      <div>{item.text}</div>
    </a>
  )

  return (
    <li className={liClasses}>
      { link }
      { subItens.length > 0 &&
        <ul className="sidenav-menu">
          { subItens }
        </ul>
      }
    </li>
  );
}

export default SidebarItem;
