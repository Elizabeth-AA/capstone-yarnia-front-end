import logo from '@assets/icons/icons8-yarn-64.png'

export default function AuthImg() {
    return (
        <div className='bg-primary inline-flex justify-start mt-4'>
            <img src={logo} alt='yarn ball' />
            <h1 
            className='md:absolute md:left-20 md:bottom-3 mt-4 ml-1 md:ml-0  pl-2 pt-5 page-header inline-block text-transparent bg-clip-text'                   
            style={{backgroundImage: 'linear-gradient(32deg, #d89223 0%, #E0570D 79%)'}}
            >yarnia</h1>
        </div>
    )
}