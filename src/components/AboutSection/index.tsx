import * as I from '../../assets/imports';
import HoverIcon from '../HoverIcon';

export default function AboutSection() {
    return (
        <section>
            <div>
                <div className='mb-6 pb-2 border-b border-slate-600'>
                        <h2 className='text-center md:text-4xl text-3xl font-bold mb-1 tracking-wide text-transparent bg-gradient-to-b from-sky-400 to-white bg-clip-text'>
                            Desenvolvedor front-end
                        </h2>
                        <address className='text-xl flex items-center gap-1 w-fit mx-auto text-neutral-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span>
                                Santa Catarina, Brazil
                            </span>
                        </address>
                </div>
                <div className='relative w-full mx-auto shrink-0 mb-16'> 
                    <p className='mb-16'>
                    Comecei na programação como autodidata em desenvolvimento de games trabalhando em game jams, desenvolvendo minha paixão em criar coisas que as pessoas possam interagir. Assim, ingressei em um curso profissionalizante e atualmente busco iniciar minha carreira como desenvolvedor front-end.
                    </p>
                    <div className='relative flex justify-between w-full *:relative'>
                        <div>
                            <div className='flex flex-col gap-4 items-center'>
                                <div className='w-8 h-8 animate-spin-slow glow glow-sm glow-rgb z-10'><div className='size-full bg-slate-900' /></div>
                                <p className='text-lg text-center'>
                                    <time className='border-b border-slate-600'>12/23 - 03/25</time>
                                    <br/>
                                    Curso
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-4 items-center'>
                                <div className='w-8 h-8 animate-spin-slow glow glow-sm glow-rgb z-10'><div className='size-full bg-slate-900' /></div>
                                <div className='text-lg text-center'>
                                    <time className='border-b border-slate-600'>11/24 - Agora</time>
                                    <span className='block'>Projetos & Freela</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-4 items-center'>
                                <div className='w-8 h-8 animate-spin-slow glow glow-sm glow-rgb z-10'><div className='size-full bg-slate-900' /></div>
                                <p className='text-lg text-center'>
                                    <time className='border-b border-slate-600'>??/?? - ??/??</time>
                                    <br/>
                                    Curso
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='glow glow-sm glow-rgb'>
                        <div className='bg-dark grid md:grid-cols-5 grid-cols-3 gap-y-8 place-items-center p-8 overflow-hidden'>
                            <HoverIcon img={I.htmlIcon} text='HTML' />
                            <HoverIcon img={I.reactIcon} text='React' />
                            <HoverIcon img={I.jsIcon} text='JavaScript' />
                            <HoverIcon img={I.tsIcon} text='TypeScript' />
                            <HoverIcon img={I.jqueryIcon} text='JQuery' />
                            <HoverIcon img={I.cssIcon} text='CSS' />
                            <HoverIcon img={I.sassIcon} text='SASS / SCSS' />
                            <HoverIcon img={I.twIcon} text='Tailwind CSS' />
                            <HoverIcon img={I.bootstrapIcon} text='Bootstrap' />
                            <HoverIcon img={I.scIcon} text='Styled-Components' />
                            <HoverIcon img={I.jestIcon} text='Jest' />
                            <HoverIcon img={I.cypressIcon} text='Cypress' className='bg-white rounded-full' />
                            <HoverIcon img={I.reduxIcon} text='Redux' />
                            <HoverIcon img={I.motionIcon} text='Framer Motion' />
                            <HoverIcon img={I.figmaIcon} text='Figma' />
                        </div>
                </div>
            </div>
        </section>
    )
}