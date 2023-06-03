import HeroImg from '@assets/images/desktop-800x450.jpg'
import AuthModal from '../Login/AuthModal'

export default function LandingHero() {
    return (
        <div className="hero h-4/5">
            <img src={`${HeroImg}`} className='h-full' style={{width: '-webkit-fill-available'}} />
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to yarnia</h1>
                    <p className="mb-5">Click below to open the door to inspiration!</p>
                    {/* <button className="btn btn-primary" onClick={()=>window.auth_modal.showModal()}>Open</button> */}
                </div>
            </div>
            <AuthModal />
        </div>
    )
}