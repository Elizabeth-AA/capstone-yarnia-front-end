import { useState } from "react"
import { NavLink } from "react-router-dom"
import NavItem from "@components/Header/NavItem"
import NavLinks from './links.json'
import logo from '@assets/icons/icons8-yarn-64.png'

export default function Header() {
    
    const [activeLink, setActiveLink] = useState('/')
    
    return (
        <header>
            <nav className='relative flex items-center justify-between flex-wrap flex-row bg-primary px-4 py-1 z-10 pin-t'>
                <div className='flex justify-start'>
                    <a className="inline-flex no-underline hover:text-accent hover:no-underline" href="/">
                        <img className="h-14" src={logo} />
                        <span className='absolute left-20 bottom-1 mt-4 page-header'>yarnia</span>                   
                    </a>
                </div>
                <div className='flex justify-center btn-text gap-1 flex-col md:flex-row md:gap-3'>
                    {NavLinks.map((link, index) => (
                        <NavItem
                            key={index}
                            to={link.path}
                            name={link.name}
                            active={activeLink}
                            setActiveLink={setActiveLink}
                        />
                    ))}
                </div>
            </nav>
        </header>
    )
}