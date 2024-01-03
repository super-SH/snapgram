import { useUser } from "@/features/authentication/useUser";
import { Navigate, Outlet } from "react-router-dom";

function AuthLayout() {
  const { isAuthenticated } = useUser();
  console.log(isAuthenticated);

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" replace={true} />
      ) : (
        <>
          <section className="flex flex-1 flex-col items-center justify-center p-10">
            <Outlet />
          </section>

          <img
            src="/assets/images/side-img.svg"
            alt="inner looks of the application as a previews"
            className="hidden w-1/2 bg-no-repeat object-cover xl:block"
          />
        </>
      )}
    </>
  );
}

export default AuthLayout;
