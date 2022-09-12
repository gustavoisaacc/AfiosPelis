import {Link} from 'react-router-dom'

import '../styles/item.css'

function Item({movie}) {

  const fecha = new Date(movie.release_date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const newFecha = fecha.toLocaleDateString("es-ES", options)

  
  return (
    <>
      <div className="movies--img">
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
      </div>
      <Link to={`/detalle?movieID=${movie.id}`} className="movies--title">
        <h2>{movie.title}</h2>
        <p>{newFecha}</p>
      </Link>
    </>

  )
}

export default Item