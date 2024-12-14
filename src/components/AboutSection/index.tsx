import * as I from '../../assets/imports';
import HoverIcon from '../HoverIcon';

export default function AboutSection() {
    return (
        <section>
            <div>
                <div className='mb-4'>
                        <h2 className='md:text-4xl text-3xl font-bold mb-2 tracking-wide border-b border-slate-600'>
                            Desenvolvedor front-end
                        </h2>
                        <address className='md:*:text-2xl text-xl *:flex *:items-center *:gap-1'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                Santa Catarina, Brazil
                            </span>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <a href='mailto:benhurk2801@gmail.com' target='_blank' className="text-sky-300 hover:text-white transition-colors duration-300 ease-in-out">
                                    benhurk2801@gmail.com
                                </a>
                            </div>
                        </address>
                </div>
                <div className='glow glow-sm glow-rgb mb-16'>
                        <div className='bg-dark grid md:grid-cols-5 grid-cols-3 gap-8 place-items-center p-8 overflow-hidden'>
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
                <div className='relative w-full mx-auto shrink-0'> 
                    <div className='relative flex justify-between w-full *:relative'>
                        <div>
                            <div className='flex flex-col gap-4 items-center'>
                                <div className='w-8 h-8 animate-spin-slow glow glow-sm glow-rgb z-10'><div className='size-full bg-slate-900' /></div>
                                <p className='text-xl text-center'>
                                    <time className='border-b border-slate-600'>12/23 - 03/25</time>
                                    <br/>
                                    Curso
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-4 items-center'>
                                <div className='w-8 h-8 animate-spin-slow glow glow-sm glow-rgb z-10'><div className='size-full bg-slate-900' /></div>
                                <p className='text-xl text-center'>
                                    <time className='border-b border-slate-600'>06/24 - Atual</time>
                                    <br/>
                                    Projetos & Freela
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-4 items-center'>
                                <div className='w-8 h-8 animate-spin-slow glow glow-sm glow-rgb z-10'><div className='size-full bg-slate-900' /></div>
                                <p className='text-xl text-center'>
                                    <time className='border-b border-slate-600'>??/?? - ??/??</time>
                                    <br/>
                                    Curso
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}