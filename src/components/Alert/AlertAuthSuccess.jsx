import { ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function AlertAuthSuccess({ showAlert, userId, onClick }) {
    if (!showAlert) {
        return null
    }

  return (
    <div className='toast toast-middle toast-center'>
    <div className="alert bg-accent shadow-lg w-max">
        <ShieldCheckIcon className="h-10 w-10 text-accent-content md:my-4" />
        <h3 className="card__header text-accent-content text-3xl lowercase mx-4">you have opened the door</h3>
        <button onClick={onClick} className="btn btn-ghost text-base">Enter yarnia</button>
    </div>
    </div>
  )
}
