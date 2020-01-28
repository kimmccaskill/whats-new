import React from 'react';
import './Menu.css'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // articleShown: ''
    }
  }

  updateArticlesShown = (event) => {
    // console.log(event.target.value.toLowerCase())
    this.props.changeCategory(event.target.value)
  }

  render() {
    let navItems = Object.keys(this.props.data.categories)
    navItems = navItems.map(item => <button className="menu-btns" type="button" value={item} onClick={this.updateArticlesShown}>{item}</button>)
    return(
      <aside className='nav-bar'>
        <h1>What's New?</h1>
        {navItems}
      </aside>
    )
  }
}

export default Menu;
