import React, { Component } from 'react';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js'
import Menu from '../Menu/Menu.js'
import SearchForm from '../SearchForm/SearchForm.js'

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
      articleShown: {data: [...entertainment, ...health, ...local, ...science, ...technology]}
    }
  }

  changeCategory = (category) => {
    this.setState({articleShown: {data: this.state.categories[category].data}})
  }

  filterArticles = (query) =>{
    let filteredArticles = this.state.articleShown.data.filter(article => article.headline.toLowerCase().includes(query.toLowerCase()) || article.description.toLowerCase().includes(query.toLowerCase()));
    this.setState({articleShown: {data: filteredArticles}})
  }

  render () {
    return (
      <main className="app">
        <Menu changeCategory={this.changeCategory} data={this.state}/>
        <section className="main-section">
          <SearchForm filterArticles={this.filterArticles}/>
          <NewsContainer news={this.state.articleShown.data}/>
        </section>
      </main>
    );
  }
}

export default App;
