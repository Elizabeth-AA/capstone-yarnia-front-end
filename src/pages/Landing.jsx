import LandingHero from "@components/Hero/LandingHero"
import AuthModal from "@components/Modal/AuthModal"
import AboutText from "@components/Text/AboutText"

export default function Landing() {
    return (
        <main>
            <div className="relative z-0">
                <LandingHero />
                <div className="absolute inset-x-0 bottom-2 z-10">
                    <AuthModal />
                </div>
            </div>
            <AboutText />
        </main>
    )
}