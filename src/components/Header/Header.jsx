import { useState } from "react"
import NavItem from "@components/Header/NavItem"
import NavLinks from './links.json'
import logo from '@assets/icons/icons8-yarn-64.png'

export default function Header() {
    
    const [activeLink, setActiveLink] = useState('/')
    
    return (
        <header>
            <nav className='relative flex items-center justify-between flex-wrap flex-col md:flex-row bg-primary px-4 py-1 z-10 pin-t'>
                <div>
                    <a className="inline-flex no-underline hover:text-accent hover:no-underline" href="/">
                        <img className="h-14" src={logo} />
                        <span 
                            className='md:absolute md:left-20 md:bottom-3 mt-4 ml-1 md:ml-0 page-header inline-block text-transparent bg-clip-text'                   
                            style={{backgroundImage: 'linear-gradient(32deg, #d89223 0%, #E0570D 79%)'}}
                        >yarnia</span>    
                    </a>
                </div>
                <div className='flex justify-center btn-text gap-4 md:gap-3 lg:gap-4 flex-row mt-2 md:mt-0 mb-1 md:mb-0'>
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