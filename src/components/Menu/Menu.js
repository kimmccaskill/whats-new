import React from 'react';
import './Menu.css'

const Menu = (props) => {
  return(
    <aside className='menu'>
      <h1 className="title">What's New?</h1>
        <button key={Math.random()} className="menu-btns" type="button" value='Entertainment' onClick={props.changeCategory}>Entertainment</button>
        <button key={Math.random()} className="menu-btns" type="button" value='Health' onClick={props.changeCategory}>Health</button>
        <button key={Math.random()} className="menu-btns" type="button" value='Local' onClick={props.changeCategory}>Local</button>
        <button key={Math.random()} className="menu-btns" type="button" value='Science' onClick={props.changeCategory}>Science</button>
        <button key={Math.random()} className="menu-btns" type="button" value='Technology' onClick={props.changeCategory}>Technology</button>
    </aside>
  )
}

export default Menu;
