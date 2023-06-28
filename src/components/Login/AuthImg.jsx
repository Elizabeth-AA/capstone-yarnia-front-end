import logo from '@assets/icons/yarnia-icon.png'

export default function AuthImg() {
    return (
        <div className='inline-flex justify-center align-top mt-4'>
            <img src={logo} alt='yarn ball' />
            <h1 
            className='pl-2 pt-4 page-header inline-block text-transparent bg-clip-text'                   
            style={{backgroundImage: 'linear-gradient(32deg, #F2A127 0%, #E0570D 79%)'}}
            >yarnia</h1>
        </div>
    )
}