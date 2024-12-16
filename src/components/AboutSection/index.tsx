import * as I from '../../assets/imports';
import HoverIcon from '../HoverIcon';
import TimePoint from '../TimePoint/index.';

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
                <div className='relative w-full mx-auto mb-16'> 
                    <p className='mb-16'>
                    Comecei na programação como autodidata em desenvolvimento de games trabalhando em game jams, desenvolvendo meu interesse e paixão pela área. Posteriormente ingressei em um curso profissionalizante e atualmente busco iniciar minha carreira como desenvolvedor front-end.
                    </p>
                    <div className='relative flex justify-between w-full'>
                        <TimePoint time='... - 2023' title='Game dev' />
                        <TimePoint time='12/23 - 12/24' title='Estudo de front-end'
                        tooltip={<>
                            <h3 className='font-bold mb-1'>Curso de desenvolvimento full-stack EBAC</h3>
                            <p>Em <span className='font-mono'>8</span> meses terminei a matéria de front-end, decidi tirar os meses restantes do ano para me 
                            aperfeiçoar e aprender novas tecnologias.</p>
                            </>}
                        />
                        <TimePoint time='11/24 - Agora' title='Projetos & freela' />
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