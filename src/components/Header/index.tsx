import cvIcon from '../../assets/cv-icon.png';
import gitIcon from '../../assets/github-icon.png';
import linkedIcon from '../../assets/linkedin-icon.png';

export default function Header() {
    return (
        <header className='relative w-screen max-w-[1920px] md:h-[396px] lg:h-[496px] h-[296px] bg-[url("/header-bg.gif")] bg-no-repeat bg-center bg-cover overflow-hidden
                        before:bg-black before:absolute before:top-0 before:left-0 before:block before:size-full before:opacity-60'>

            <div className="relative top-1/2 -translate-y-1/2">
                <div className='glow glow-rgb mx-auto lg:mb-8 md:mb-6 mb-3 md:w-48 md:h-48 lg:w-56 lg:h-56 w-36 h-36 rounded-full'>
                    <img className='w-full h-full object-cover object-center rounded-full' src='/pfp.jpg' />
                </div>
                <div className="text-center font-main text-white drop-shadow-4dark lg:mb-8 md:mb-6 mb-3">
                    <h1 className='lg:text-4xl md:text-3xl text-2xl mb-1'>Bem Hur Küchler</h1>
                    <h2 className="lg:text-xl text-lg">Desenvolvedor front-end</h2>
                </div>
                <div className="flex gap-16 justify-center">
                    <a href="https://linkedin.com/in/bem-hur-kuchler" target='_blank' className='glow glow-sm glow-white-blue'>
                        <img className='lg:w-12 md:w-11 w-9' src={linkedIcon} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/benhurk" target='_blank' className='glow glow-sm glow-white-blue'>
                        <img className='lg:w-12 md:w-11 w-9' src={gitIcon} alt="GitHub" />
                    </a>
                    <a href="" className='glow glow-sm glow-white-blue'>
                        <img className='lg:w-12 md:w-11 w-9' src={cvIcon} alt="CV" />
                    </a>
                </div>
            </div>
        </header>
    )
}