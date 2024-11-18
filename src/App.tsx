import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div></div>
  }
])

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App;
