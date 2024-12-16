import * as I from '../../assets/imports';
import HoverIcon from '../HoverIcon';
import TimePoint from '../TimePoint';

export default function AboutSection() {
    return (
        <section>
            <p className='mb-12'>
                Comecei na programação como autodidata em desenvolvimento de games trabalhando em game jams, desenvolvendo meu interesse e paixão pela área. Posteriormente ingressei em um curso profissionalizante e atualmente busco iniciar minha carreira como desenvolvedor front-end.
            </p>
            <div className='flex justify-between mb-12'>
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