import {useEffect, useState} from 'react'
import axios from 'axios'

 function useApi(api) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(api)
        .then(resp => setMovies(resp.data))
    }, [])
    return movies
}

export default useApi