import { Navigate, Outlet } from 'react-router-dom';

function AuthLayout() {
  //temp
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/' />
      ) : (
        <>
          <section className='flex flex-1 justify-center items-center flex-col p-10'>
            <Outlet />
          </section>

          <img
            src='/public/assets/images/side-img.svg'
            alt='inner looks of the application as a previews'
            className='hidden xl:block w-1/2 object-cover bg-no-repeat'
          />
        </>
      )}
    </>
  );
}

export default AuthLayout;
