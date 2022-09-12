import React from 'react'

function Button({handleClick}) {
  return (
    <div className="movie" onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Button