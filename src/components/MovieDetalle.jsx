import React from 'react'

function MovieDetalle({movie}) {

  return (
    <>
        <h2>{movie.title}</h2>
        <div className="movie__detalle">
            <div className="movie__detalle--imagen">
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
            </div>
            <div className="movie__detalle--info">
                <h5><span>{movie.original_title}</span></h5>
               <div className="generos">
                 {movie.genres.map(item => (
                    <ul key={item.id} className='genero'>
                        <li>{item.name}</li>
                    </ul>
                ))}
               </div>
                <p><span>Detalle</span>
                <br />
                    {movie.overview}
                </p>
            
                </div>
        </div>
    </>
  )
}

export default MovieDetalle