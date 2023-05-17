import { NavLink } from 'react-router-dom'

export default function NavItem({ to, name, active, setActiveLink }) {
    return (
        <NavLink
            className='btn btn-xs btn-active btn-primary btn-text hover:bg-neutral rounded w-16 md:w-18 lg:w-20 md:btn-sm lg:btn-md' 
            to={to}
            onClick={() => setActiveLink(name)}
        >
            {name}
        </NavLink>
    )
}