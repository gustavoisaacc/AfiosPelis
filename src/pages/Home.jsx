import React from 'react'
import ListItem from '../components/ListItem'
import useApi from '../hooks/useApi'

import '../styles/home.css'

function Home() {
  const apiKey = '69dedf8cdf0cf0eb4ea94743fea1665c';
  const API = `https://api.themoviedb.org/3/movie/upcoming?api_key=69dedf8cdf0cf0eb4ea94743fea1665c&language=es-ES`;
  const movies = useApi(API)
  
  return (
    <div className="container">
      {movies.results && <ListItem movies={movies}/>}
    </div>
  )
}

export default Home