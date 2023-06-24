import { ShieldExclamationIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

export default function AlertInvalidToken() {
    const navigate = useNavigate()

    const goLogin = () => {
        navigate('/')
    }

  return (
    <div className='toast toast-middle toast-center'>
    <div className="alert bg-error shadow-lg w-max">
        <ShieldExclamationIcon className="h-10 w-10 text-error-content md:my-4" />
        <h3 className="card__header text-error-content text-3xl lowercase mx-4">authorization failed</h3>
        <button onClick={goLogin} className="btn btn-ghost text-base">please login again</button>
    </div>
    </div>
  )
}
