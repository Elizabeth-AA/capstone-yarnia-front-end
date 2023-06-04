import LandingHero from "@components/Hero/LandingHero"
import AuthModal from "@components/Login/AuthModal"
import About from "@components/About"

export default function Landing() {
    return (
        <>
        <div className="relative z-0">
            <LandingHero />
            <div className="absolute inset-x-0 bottom-2 z-10">
                <AuthModal />
            </div>
        </div>
        <About />
        </>
    )
}