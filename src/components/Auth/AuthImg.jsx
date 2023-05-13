import logo from '@assets/icons/icons8-yarn-64.png'

export default function AuthImg() {
    return (
        <div className='bg-primary inline-flex justify-start mt-4'>
            <img src={logo} alt='yarn ball' />
            <h1 className='page-header pl-2 pt-5'>yarnia</h1>
        </div>
    )
}
