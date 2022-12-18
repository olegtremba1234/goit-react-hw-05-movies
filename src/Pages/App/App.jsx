import {lazy, Suspense} from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import style from './App.module.css'

const Home = lazy(() => import('Pages/Home/Home'))
const Movies = lazy(() => import('Pages/Movies/Movies'))
const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('Pages/Cast/Cast'))
const Reviews = lazy(() => import('Pages/Reviews/Reviews'))

export const App = () => {
  return (
    <div className={style.container}>
      <nav>
      <NavLink
          className={({ isActive }) => (isActive ? style.active : style.link)}
          to="/"
      >
        Home
      </NavLink>
      <NavLink 
          className={({ isActive }) => (isActive ? style.active : style.link)}
          to="/movies"
      >
        Movies
      </NavLink>
      <hr />
      </nav>
      <Suspense fallback="loading">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path='cast' element={<Cast />}/>
            <Route path='reviews' element={<Reviews />}/>
          </Route>
          <Route path="*" element={<Navigate to="/"/>} />  
        </Routes>  
      </Suspense>
    </div>
  );
};