import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  // async는 비동기 함수임을 알려주는 기능, await 요소가 끝날때까지 기다림
  getMovies = async () => {
    const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading' : 'We are ready'}</div>;
  }
}

export default App;
