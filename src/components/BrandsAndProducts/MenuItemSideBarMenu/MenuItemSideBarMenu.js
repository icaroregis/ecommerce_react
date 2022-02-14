import React from 'react';
import { useAppContext } from '../../../context/AppContextProvider';
import 'react-pro-sidebar/dist/css/styles.css';
import { MenuItem } from 'react-pro-sidebar';
import './style.css';

export default function MenuItemSideBarMenu({ name }) {
  const { selected, setSelected } = useAppContext();
  const active = selected === name;

  function changeColor() {
    setSelected(name);
  }

  return (
    <div className="ContentSidebar">
      <MenuItem
        onClick={changeColor}
        className={`MenuItemSideBar ${active ? 'activeClass' : ''}`}
      >
        {name}
      </MenuItem>
    </div>
  );
}
