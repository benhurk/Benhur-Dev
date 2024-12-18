import { useContext, useEffect } from 'react';

import SettingsProvider, { SettingsContext } from './contexts/SettingsContext';

import Header from './components/Header';
import AboutSection from './components/AboutSection';

function App() {
  const { darkMode } = useContext(SettingsContext);

  useEffect(() => {
    if (darkMode) document.body.classList.add('dark'); else document.body.classList.remove('dark');
  }, [darkMode]);

  return (
    <SettingsProvider>
      <Header />
      <main className='lg:max-w-[768px] max-w-[90%] mx-auto py-8'>
        <div className='mb-6 pb-6 border-b border-slate-600'>
            <div className='mb-4'>
              <h2 className='text-center md:text-4xl text-3xl font-bold mb-2 tracking-wide text-transparent bg-gradient-to-br from-sky-300 to-white bg-clip-text'>
                Desenvolvedor front-end
              </h2>
              <address className='text-xl flex items-center gap-1 w-fit mx-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className='not-italic'>
                  Santa Catarina, Brazil
                </span>
              </address>
            </div>
            <div className='w-56 h-9 mx-auto flex justify-between *:text-lg *:border-y *:border-sky-200 *:w-1/2 *:transition-colors *:duration-300 *:ease-in-out'>
              <button type='button' className='selected border-l hover:bg-slate-800'>Sobre</button>
              <button type='button' className='border-r hover:bg-slate-800'>Projetos</button>
            </div>
        </div>
        <AboutSection />
      </main>
    </SettingsProvider>
  )
}

export default App;
