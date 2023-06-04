import { useState } from 'react'
import AuthTabs from './AuthTabs'

export default function AuthModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className=''>
      <button className="btn-secondary btn" onClick={openModal}>
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
        <div className="modal-box bg-primary flex flex-col items-center justify-center">
          <button className="btn-ghost btn-sm btn-circle btn absolute right-2 top-2" onClick={closeModal}>
            ✕
          </button>
          <AuthTabs closeModal={closeModal} />
        </div>
      </label>
    </div>
  )
}
