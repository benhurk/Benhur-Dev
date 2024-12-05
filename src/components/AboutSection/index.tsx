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

export default function AboutSection() {
    return (
        <section>
            <div className="flex md:flex-row flex-col gap-8 mb-16">
                <div className='self-center min-w-[236px] border-2 border-white'>
                    <img src={char} />
                </div>
                <div className='w-full'>
                    <h2 className='text-4xl font-bold mb-2 tracking-wide border-b border-slate-600'>
                        Desenvolvedor front-end
                    </h2>
                    <div className='*:text-2xl *:flex *:items-center *:gap-1 mb-8'>
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
                    <div className='glow glow-sm glow-rgb'>
                        <div className='bg-black grid md:grid-cols-5 grid-cols-3 gap-6 place-items-center p-5'>
                            <div>
                                <img src={htmlIcon} alt='HTML' />
                            </div>
                            <div>
                                <img src={reactIcon} alt='React' />
                            </div>
                            <div>
                                <img src={jsIcon} alt='JavaScript' />
                            </div>
                            <div>
                                <img src={tsIcon} alt='TypeScript' />
                            </div>
                            <div>
                                <img src={jqueryIcon} alt='jQuery' />
                            </div>
                            <div>
                                <img src={jestIcon} alt='Jest' />
                            </div>
                            <div className='bg-neutral-50 rounded-full'>
                                <img src={cypressIcon} alt='Cypress' />
                            </div>
                            <div>
                                <img src={cssIcon} alt='CSS' />
                            </div>
                            <div>
                                <img src={sassIcon} alt='SASS' />
                            </div>
                            <div>
                                <img src={twIcon} alt='Tailwind' />
                            </div>
                            <div>
                                <img src={bootstrapIcon} alt='Bootstrap' />
                            </div>
                            <div>
                                <img src={scIcon} alt='StyledComponents' />
                            </div>
                            <div>
                                <img src={reduxIcon} alt='Redux' />
                            </div>
                            <div>
                                <img src={motionIcon} alt='Framer Motion' />
                            </div>
                            <div>
                                <img src={figmaIcon} alt='Figma' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}