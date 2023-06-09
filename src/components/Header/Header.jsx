import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import logo from '@assets/icons/yarnia-icon.png'

export default function Header() {
    const [hasAccessToken, setHasAccessToken] = useState(false)

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken !== null) {
            setHasAccessToken(true)
        }
      }, []);

      const handleLogout = () => {
        localStorage.removeItem('accessToken');
        setHasAccessToken(false)
        window.location.href = '/'
      }

      const getUserId = () => {
        const userId = localStorage.getItem('userId')
        return userId !== null ? userId : "";
      }

    return (
        <header>
            <nav className='relative flex items-center justify-between flex-wrap flex-col md:flex-row bg-primary px-4 pt-1 z-10 pin-t'>
                <div>
                    <a className="inline-flex no-underline hover:text-accent hover:no-underline" href="/">
                        <img className="h-14" src={logo} />
                        <span 
                            className='md:absolute md:left-20 md:bottom-3 mt-4 ml-1 md:ml-0 page-header inline-block text-transparent bg-clip-text'                   
                            style={{backgroundImage: 'linear-gradient(32deg, #F2A127 0%, #E0570D 79%)'}}
                        >yarnia</span>    
                    </a>
                </div>
                <div className='flex justify-center btn-text gap-4 md:gap-3 lg:gap-4 flex-row mt-2 md:mt-0 mb-1 md:mb-0'>
                    <NavLink className='nav-link' to={`/user/${getUserId()}`}>
                        stash
                    </NavLink>
                    {hasAccessToken ?
                    <NavLink className='nav-link' onClick={handleLogout}>
                        logout
                    </NavLink> :
                    <NavLink className='nav-link' to='/'>
                        login
                    </NavLink>
                    }
                </div>
            </nav>
        </header>
    )
}