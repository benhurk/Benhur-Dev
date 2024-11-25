import cvIcon from '../../assets/cv-icon.png';
import gitIcon from '../../assets/github-icon.png';
import linkedIcon from '../../assets/linkedin-icon.png';

export default function Header() {
    return (
        <header className='relative w-screen max-w-[1920px] lg:h-[560px] md:h-[400px] h-[300px] bg-no-repeat bg-cover overflow-hidden'>
            <div className="relative top-1/2 -translate-y-1/2">
                <div className='glow glow-rgb mx-auto lg:mb-8 md:mb-6 mb-2 lg:size-52 md:size-48 size-36 rounded-full'>
                    <img className='w-full h-full object-cover object-center rounded-full' src='/pfp.jpg' />
                </div>
                <div className="w-fit md:text-4xl text-2xl font-bold mx-auto md:p-1 p-0.5 lg:mb-8 md:mb-6 mb-2 bg-black">
                    <span>:\</span>
                    <h1 className='inline text-center'>
                        {'Bem Hur Küchler'}
                    </h1>
                    <span>{'>'}</span>
                    <span className='animate-blink'>_</span>
                </div>
                <div className="flex lg:gap-16 md:gap-10 gap-8 justify-center">
                    <a href="https://linkedin.com/in/bem-hur-kuchler" target='_blank' className='glow glow-sm glow-rgb rounded-full'>
                        <img className='lg:w-12 md:w-11 w-8' src={linkedIcon} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/benhurk" target='_blank' className='glow glow-sm glow-rgb rounded-full'>
                        <img className='lg:w-12 md:w-11 w-8' src={gitIcon} alt="GitHub" />
                    </a>
                    <a href="" className='glow glow-sm glow-rgb rounded-full'>
                        <img className='lg:w-12 md:w-11 w-8' src={cvIcon} alt="CV" />
                    </a>
                </div>
            </div>
        </header>
    )
}