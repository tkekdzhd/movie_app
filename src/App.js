import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js'



class App extends Component { //Component->return->render
  state = {
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount(){
    this._getMovies()
  }

  _getMovies = async() => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie 
      title={movie.title} poster={movie.medium_cover_image} 
      key={movie.id}
      genres={movie.genres}
      synopsis={movie.synopsis}/>
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    )
  }
}

export default App;
