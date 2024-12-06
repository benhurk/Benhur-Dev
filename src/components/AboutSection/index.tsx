import htmlIcon from '../../assets/html.png';
import reactIcon from '../../assets/react.png';
import jsIcon from '../../assets/js.png';
import tsIcon from '../../assets/ts.png';
import jqueryIcon from '../../assets/jquery.png';
import jestIcon from '../../assets/jest.png';
import cypressIcon from '../../assets/cypress.png';
import cssIcon from '../../assets/css.png';
import sassIcon from '../../assets/sass.png';
import twIcon from '../../assets/tailwind.png';
import bootstrapIcon from '../../assets/bootstrap.png';
import scIcon from '../../assets/styledcomponents.png';
import reduxIcon from '../../assets/redux.png';
import motionIcon from '../../assets/framermotion.png';
import figmaIcon from '../../assets/figma.png';
import char from '../../assets/char.jpg';
import HoverIcon from '../HoverIcon';

export default function AboutSection() {
    return (
        <section>
            <div className="flex md:flex-row flex-col gap-8 mb-16">
                <div className='self-center min-w-[236px] border-2 border-white'>
                    <img src={char} />
                </div>
                <div className='w-full flex flex-col justify-between'>
                    <div>
                        <h2 className='text-4xl font-bold mb-2 tracking-wide border-b border-slate-600'>
                            Desenvolvedor front-end
                        </h2>
                        <div className='*:text-2xl *:flex *:items-center *:gap-1'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <span className="text-slate-200">
                                    Santa Catarina, Brazil
                                </span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <a href='mailto:benhurk2801@gmail.com' target='_blank' className="text-sky-300 hover:text-white transition-colors duration-300 ease-in-out">
                                    benhurk2801@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='glow glow-sm glow-rgb'>
                        <div className='bg-black grid md:grid-cols-5 grid-cols-3 gap-4 gap-y-6 place-items-center p-5 overflow-hidden'>
                            <HoverIcon img={htmlIcon} text='HTML' />
                            <HoverIcon img={reactIcon} text='React' />
                            <HoverIcon img={jsIcon} text='JavaScript' />
                            <HoverIcon img={tsIcon} text='TypeScript' />
                            <HoverIcon img={jqueryIcon} text='JQuery' />
                            <HoverIcon img={cssIcon} text='CSS' />
                            <HoverIcon img={sassIcon} text='SASS / SCSS' />
                            <HoverIcon img={twIcon} text='Tailwind CSS' />
                            <HoverIcon img={bootstrapIcon} text='Bootstrap' />
                            <HoverIcon img={scIcon} text='Styled-Components' />
                            <HoverIcon img={jestIcon} text='Jest' />
                            <HoverIcon img={cypressIcon} text='Cypress' className='bg-white rounded-full' />
                            <HoverIcon img={reduxIcon} text='Redux' />
                            <HoverIcon img={motionIcon} text='Framer Motion' />
                            <HoverIcon img={figmaIcon} text='Figma' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}