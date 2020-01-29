import React from 'react';
import './Menu.css'

const Menu = (props) => {
  const updateArticlesShown = (event) => {
    props.changeCategory(event.target.value)
  }
  let navItems = props.data.categories ? Object.keys(props.data.categories) : null;
  navItems = navItems ? navItems.map(item => <button className="menu-btns" type="button" value={item} onClick={updateArticlesShown}>{item}</button>) : null;

  return(
    <aside className='nav-bar'>
      <h1>What's New?</h1>
      {navItems}
    </aside>
  )
}

export default Menu;
