import { Icons } from './Icons'

import bike from '../assets/icons/Bike.svg'
import dumbbell from '../assets/icons/Dumbbell.svg'
import swimming from '../assets/icons/Swimming.svg'
import yoga from '../assets/icons/Yoga.svg'

export function VerticalMenu() {
  return (
    <section className='vertical-menu'>
      <div>
        <Icons alt='Logo Yoga' img={yoga}></Icons>
        <Icons alt='Logo Swimming' img={swimming}></Icons>
        <Icons alt='Logo Bike' img={bike}></Icons>
        <Icons alt='Logo Dumbbell' img={dumbbell}></Icons>
      </div>

      <div>
        <p className='vertical-menu__cr'>Copyright SportSee 2024</p>
      </div>
    </section>
  )
}
