import React, { useEffect,useState } from 'react';
import axios from 'axios';

import '../styles/detalle.css'
import MovieDetalle from './MovieDetalle';
import useApi from '../hooks/useApi';



function Detalle() {

  const hrf = window.location.search
  const searchParams = new URLSearchParams(hrf)
  const params = searchParams.get('movieID')
  const apiKey = '69dedf8cdf0cf0eb4ea94743fea1665c';
  const API = `https://api.themoviedb.org/3/movie/${params}?api_key=${apiKey}&language=es-ES`;
  
  const movies = useApi(API)

  return (
    <div className="container">
      <div className="movie__container">
       {movies.genres && <MovieDetalle movie={movies}/>}
      </div>
    </div>
  )
}

export default Detalle