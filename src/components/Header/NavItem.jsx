import { NavLink } from 'react-router-dom'

export default function NavItem({ to, name, active, setActiveLink }) {
    return (
        <NavLink
            className={`
                ${active === name ? 'bg-yarnia-dark-green' : ''} 
                block lowercase text-sm md:text-base rounded-full py-2 px-8 
                text-center align-middle text-yarnia-theme-yellow
                hover:text-yarnia-theme-orange
            `}
            to={to}
            onClick={() => setActiveLink(name)}
        >
            {name}
        </NavLink>
    )
}