import { useEffect, useState } from 'react'
import LandingHero from "@components/Hero/LandingHero"
import AuthModal from "@components/Modal/AuthModal"
import AboutText from "@components/Text/AboutText"
import AlertAuthSuccess from '@components/Alert/AlertAuthSuccess'

export default function Landing() {
  const [showAlert, setShowAlert] = useState(false)
  const [userId, setUserId] = useState(null)

  const handleSuccess = (userId) => {
    setUserId(userId)
    setShowAlert(true)
  }

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId')
    if (storedUserId) {
      setUserId(storedUserId)
      setShowAlert(true)
    }
  }, [])

  const handleSuccessClick = () => {
    window.location.href = `/user/${userId}`
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