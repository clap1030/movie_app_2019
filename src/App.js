import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{

  //statesspsp is data! object!
  state = {
    count: 0,
    isLoading: true,
    movies: []
  };

  getMoivies = async () => {
    //const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    //console.log(movies.data.data.movies);
    const {data: {data : {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(movies);
    this.setState({movies: movies, isLoading: false});
  }

  componentDidMount(){
    console.log("componentDidMount");
    this.getMoivies();
  }

  render(){
    console.log("render!");
    const { isLoaing, movies} = this.state;
    return  <div>
              {isLoaing? "Loading..." : movies.map(movie => {
                console.log(movie);
                return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
              }) }
            </div>

  }
}

export default App;
