import React from 'react'
import useApi from '../hooks/useApi'
import Item from './Item'
function Search() {

  const hrf = window.location.search
  const searchParams = new URLSearchParams(hrf)
  const params = searchParams.get('keyword')
  const apiKey = '69dedf8cdf0cf0eb4ea94743fea1665c';
  let API = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=1&query=${params}`


  
  const movies = useApi(API)
  

  return (
    <div className="container">
      <div className="card__container">
        {movies.results && movies.results.map(movie => (
            <div className="card--item" key={movie.id}>
                <Item 
                movie={movie}
                />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Search