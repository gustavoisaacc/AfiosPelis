import Item from './Item'

import '../styles/ListaItem.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function ListItem({movies}) {
  const [search, setSearch] = useState('')
  
  let history = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

    if(search.length < 3){
      alert('Ingresar una busqueda valida')
    }else{
      history(`/search?keyword=${search.toLowerCase()}`)
    }
  }

  return (
    <>
    <section className='header--search'>
      <div className="info">
      <h1>Bienvenidos</h1>
      <p>Millones de película Explora ahora.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          className='input--search'
          placeholder='search' 
          value={search}
          onChange={(e)=>{setSearch(e.target.value)}}
        />
        <button>Search</button>
      </form>

    </section>
    <section className="card__container">
      {movies.results.map(movie => (
      <div className="card--item" key={movie.id}>
          <Item 
            movie={movie}
          />

      </div>
      ))}
    </section>
    </>
  )
}

export default ListItem