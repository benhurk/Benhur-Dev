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

export default function AboutSection() {
    return (
        <section>
            <h2 className="text-3xl font-bold text-center mb-8">
                Desenvolvedor front-end
            </h2>
            <div className="p-6 bg-black border-4 border-white mb-8">
                <p className="text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque veritatis nemo accusamus, inventore repellat odit et eos suscipit architecto obcaecati vero ad libero ab consectetur magni dolorum quibusdam quasi?
                </p>
            </div>
            <div className='glow glow-rgb'>
                <div className='bg-gray-900 grid md:grid-cols-5 grid-cols-3 gap-8 place-items-center p-5'>
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
        </section>
    )
}