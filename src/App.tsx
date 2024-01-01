import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppLayout, AuthLayout, Home } from './pages';
import SigninForm from './features/authentication/SigninForm';
import SignupForm from './features/authentication/SignupForm';

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SigninForm />,
      },
      {
        path: '/sign-up',
        element: <SignupForm />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <main className='flex h-screen'>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
