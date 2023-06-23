import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LandingHero from "@components/Hero/LandingHero"
import AuthModal from "@components/Modal/AuthModal"
import AboutText from "@components/Text/AboutText"
import AlertAuthSuccess from '@/components/Alert/AlertAuthSuccess'

export default function Landing() {
  const [showAlert, setShowAlert] = useState(false)
  const [userId, setUserId] = useState(null)

  const navigate = useNavigate()

  const handleSuccess = (userId) => {
    setUserId(userId)
    setShowAlert(true)
  }

  const handleSuccessClick = () => {
    navigate(`/user/${userId}`)
    setShowAlert(false)
  }

    return (
        <main>
            <div className="relative z-0">
                <LandingHero />
                <div className="absolute inset-x-0 bottom-2 z-10">
                    <AuthModal handleSuccess={handleSuccess} />
                </div>
            </div>
            <AboutText />
            <AlertAuthSuccess showAlert={showAlert} userId={userId} onClick={handleSuccessClick} />
        </main>
    )
}