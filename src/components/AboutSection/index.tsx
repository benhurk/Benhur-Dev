import * as I from '../../assets/imports';
import HoverIcon from '../HoverIcon';
import TimePoint from '../TimePoint';

export default function AboutSection() {
    return (
        <section>
            <p className='mb-12'>
                Iniciei minha trajetória na programação como autodidata em desenvolvendo games, participando de game jams, o que despertou meu interesse em seguir carreira como programador. Posteriormente, comecei a estudar desenvolvimento web e de software, ingressando em um curso profissionalizante. Atualmente, estou focado em iniciar minha carreira como desenvolvedor front-end.
            </p>
            <div className='relative w-fit h-fit md:mx-auto flex md:flex-row flex-col md:gap-72 gap-24 mb-12'>
                    <TimePoint time='12/23 - 12/24' title='Estudante de front-end'
                        tooltip={<>
                            <h3 className='font-bold mb-1'>Curso de desenvolvimento full-stack EBAC</h3>
                            <p>Em <span className='font-mono'>8</span> meses terminei a matéria de front-end, decidi tirar os meses restantes do ano para me 
                            aperfeiçoar e aprender novas tecnologias.</p>
                        </>}
                    />
                    <div className='absolute md:top-4 md:left-0 md:w-full md:h-px h-[80%] w-px top-[10%] left-1/2 border border-dashed border-slate-400' />
                    <TimePoint time='11/24 - Agora' title='Projetos & freela' />
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
        </section>
    )
}