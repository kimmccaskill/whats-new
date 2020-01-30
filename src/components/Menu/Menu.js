import React from 'react';
import './Menu.css'

const Menu = (props) => {
  const updateArticlesShown = (event) => {
    props.changeCategory(event.target.value)
  }
  let navItems = props.data.categories ? Object.keys(props.data.categories) : null;
  navItems = navItems ? navItems.map(item => <button key={Math.random()} className="menu-btns" type="button" value={item} onClick={updateArticlesShown}>{item}</button>) : null;

  return(
    <aside className='menu'>
      <h1 className="title">What's New?</h1>
      {navItems}
    </aside>
  )
}

export default Menu;
