import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import AuthTabs from '@components/Forms/AuthTabs'

export default function AuthModal({ handleSuccess }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigate = useNavigate()

  const openModal = () => {
    if (localStorage.getItem('accessToken') === null) {
      setIsModalOpen(true);
    } else {
      const userId = localStorage.getItem('userId')
      navigate(`/user/${userId}`);
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='flex justify-center'>
      <button className="btn-primary btn-wide rounded-lg font-semibold animate-pulse duration-1000 hover:animate-none hover:btn-secondary hover:duration-100 md:h-10" onClick={openModal}>
        Click Me
      </button>
      <input
        type="checkbox"
        id="auth_modal_checkbox"
        className="modal-toggle"
        checked={isModalOpen}
        onChange={closeModal}
      />
      <label htmlFor="auth_modal_checkbox" className="modal">
        <div className="modal-box bg-primary flex flex-col items-center justify-center border-4 border-accent">
          <button className="btn-ghost btn-sm btn-circle btn absolute right-2 top-2" onClick={closeModal}>
            ✕
          </button>
          <AuthTabs closeModal={closeModal} handleSuccess={handleSuccess} />
        </div>
      </label>
    </div>
  )
}
