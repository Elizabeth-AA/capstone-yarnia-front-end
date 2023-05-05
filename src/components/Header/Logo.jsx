import { NavLink } from 'react-router-dom'
import logo from '@assets/icons/icons8-yarn-64.png'

export default function Logo() {
    return (
        <div className='bg-yarnia-theme-green inline-flex justify-start'>
            <NavLink to='/'>
                <img src={logo} alt='yarn ball' />
                <h1 className='page-header pl-2'>yarnia</h1>
            </NavLink>
        </div>
    )
}