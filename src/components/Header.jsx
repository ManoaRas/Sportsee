import { Link, NavLink } from "react-router-dom"

import logo from '../assets/logo.svg'

export function Header() {
  return (
    <section>
      <Link to='/'>
        <img className='' alt='Logo SportSee' src={logo} />
      </Link>

      <nav className=''>
        <NavLink className='' to='/'>
          Accueil
        </NavLink>
        <NavLink className='' to='/error'>
          Profil
        </NavLink>
        <NavLink className='' to='/error'>
          Réglage
        </NavLink>
        <NavLink className='' to='/error'>
          Communauté
        </NavLink>
      </nav>
    </section>
  )
}
