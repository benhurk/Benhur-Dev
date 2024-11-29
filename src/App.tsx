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
      <main className='lg:max-w-[1024px] max-w-[90%] mx-auto py-8'>
        <AboutSection />
      </main>
    </SettingsProvider>
  )
}

export default App;
