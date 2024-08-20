import { Link, NavLink } from "react-router-dom"

import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='' alt='Logo SportSee' src={logo} />
      </Link>

      <nav className='header--nav'>
        <NavLink className="header--nav__text" to='/12'>Accueil</NavLink>
        <NavLink className='header--nav__text' to='/12'>Profil</NavLink>
        <NavLink className='header--nav__text' to='/12'>Réglages</NavLink>
        <NavLink className='header--nav__text' to='/12'>Communauté</NavLink>
      </nav>
    </header>
  )
}
