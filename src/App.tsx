import { useContext, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import SettingsProvider, { SettingsContext } from './contexts/SettingsContext';

import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div></div>
  }
]);

function App() {
  const { darkMode } = useContext(SettingsContext);

  useEffect(() => {
    if (darkMode) document.body.classList.add('dark'); else document.body.classList.remove('dark');
  }, [darkMode]);

  return (
    <SettingsProvider>
      <Header />
      <main className='lg:max-w-[1024px] max-w-[90%] mx-auto py-8'>
        <RouterProvider router={router} />
      </main>
    </SettingsProvider>
  )
}

export default App;
