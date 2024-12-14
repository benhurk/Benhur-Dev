import cvIcon from '../../assets/cv-icon.png';
import gitIcon from '../../assets/github-icon.png';
import emailIcon from '../../assets/email-icon.png';
import linkedIcon from '../../assets/linkedin-icon.png';
import HoverIcon from '../HoverIcon';

export default function Header() {
    return (
        <header className='w-screen max-w-[1920px] lg:h-[560px] h-[400px] bg-no-repeat bg-cover overflow-hidden'>
            <div className="relative top-1/2 -translate-y-1/2">
                <div className='glow glow-rgb mx-auto lg:mb-8 mb-6 lg:size-52 md:size-48 size-44 rounded-full'>
                    <img className='w-full h-full object-cover object-center rounded-full' src='/pfp.jpg' />
                </div>
                <div className="w-fit tracking-wide md:text-4xl text-3xl font-bold mx-auto p-1 lg:mb-8 mb-6 bg-black">
                    <span>:\</span>
                    <h1 className='inline text-center'>
                        {' Bem Hur Küchler '}
                    </h1>
                    <span>{'>'}</span>
                    <span className='animate-blink'>_</span>
                </div>
                <div className="flex md:gap-10 gap-8 justify-center">
                    <a href="https://linkedin.com/in/bem-hur-kuchler" target='_blank'>
                        <HoverIcon img={linkedIcon} text='LinkedIn' className='lg:w-12 w-11 glow glow-sm glow-rgb rounded-full' />
                    </a>
                    <a href="https://github.com/benhurk" target='_blank'>
                        <HoverIcon img={gitIcon} text='GitHub' className='lg:w-12 w-11 glow glow-sm glow-rgb rounded-full' />
                    </a>
                    <a href='mailto:benhurk2801@gmail.com' target='_blank'>
                        <HoverIcon img={emailIcon} text='Email' className='lg:w-12 w-11 glow glow-sm glow-rgb rounded-full' />
                    </a>
                    <a href="" target='_blank'>
                        <HoverIcon img={cvIcon} text='CV' className='lg:w-12 w-11 glow glow-sm glow-rgb rounded-full' />
                    </a>
                </div>
            </div>
        </header>
    )
}