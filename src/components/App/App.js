import React, { Component } from 'react';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js'
import Menu from '../Menu/Menu.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: {
        Entertainment : {data: entertainment},
        Health: {data: health},
        Local: {data: local},
        Science: {data: science},
        Technology: {data: technology}},
      articleShown: {data: local}
    }
  }

  changeCategory = (category) => {
    this.setState({articleShown: {data: this.state.categories[category].data}})
  }

  render () {
    return (
      <div className="app">
        <Menu changeCategory={this.changeCategory} data={this.state}/>
        <NewsContainer news={this.state.articleShown.data}/>
      </div>
    );
  }
}

export default App;
