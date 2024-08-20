import { Link, NavLink } from "react-router-dom"

import logo from '../assets/logo.svg'

const navLinks = [
  { label: 'Accueil' },
  { label: 'Profil' },
  { label: 'Réglages' },
  { label: 'Communauté' }
]

export function Header() {
  return (
    <section>
      <Link to='/'>
        <img className='' alt='Logo SportSee' src={logo} />
      </Link>

      <nav className=''>
        {navLinks.map(({ label }) => (
          <NavLink className='' to='/'>{label}</NavLink>
        ))}
      </nav>
    </section>
  )
}
