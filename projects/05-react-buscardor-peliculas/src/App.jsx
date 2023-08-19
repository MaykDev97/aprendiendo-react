import './App.css'
import { useEffect, useRef, useCallback } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useState } from 'react'
import debounce from 'just-debounce-it'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {

    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con numeros')
    }
    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })


  // const counter = useRef(0) valor que persiste entre renders
  // counter.current++

  const debounceGetMovies = useCallback(debounce(search => {
    console.log('search', search)
    getMovies({ search })
  }, 500)
  , [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }


  return (
    <div className='page'>
      <header>
        <h1>Buscador de pelis</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }} onChange={handleChange} value={search} name='query' placeholder='Avenger, Star Wars, The Matrix ...' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </header>

      <main>
        {
          loading ? <p>Cargando ...</p> : <Movies movies={movies} />
        }

      </main>


    </div>
  )
}

export default App
