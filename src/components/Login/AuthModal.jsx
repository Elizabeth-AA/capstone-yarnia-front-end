import { useState } from "react";
import AuthTabs from "./AuthTabs"

export default function AuthModal() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true);
    }
    
    const closeModal = () => {
        setIsModalOpen(false);
    }

  return (
    <div>
      <button className="btn" onClick={openModal}>
        Open
      </button>
      <input
        type="checkbox"
        className="modal-toggle"
        id="auth_modal_checkbox"
        checked={isModalOpen}
        onChange={closeModal}
      />
      <label className="modal-toggle-label" htmlFor="auth_modal_checkbox">
        Open
      </label>
      {isModalOpen && (
        <dialog id="auth_modal" className="modal">
          <div className="modal-box">
            <AuthTabs />
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  )
}