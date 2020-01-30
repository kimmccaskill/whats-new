import React, { Component } from 'react';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js'
import Menu from '../Menu/Menu.js'
import SearchForm from '../SearchForm/SearchForm.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: {},
      articleShown: {}
    }
  }

  componentDidMount() {
    fetch("https://whats-new-api.herokuapp.com/api/v1/news")
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: {
            Entertainment: {data: data.entertainment},
            Health: {data: data.health},
            Local: {data: data.local},
            Science: {data: data.science},
            Technology: {data: data.technology}
          },
          articleShown: {data: [
            ...data.entertainment,
            ...data.health,
            ...data.local,
            ...data.science,
            ...data.technology]}
        })
      })
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
