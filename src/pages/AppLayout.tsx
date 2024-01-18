import { Bottombar, LeftSidebar, Loader, Topbar } from "@/components/shared";
import { useUser } from "@/features/authentication/useUser";
import { Navigate, Outlet } from "react-router-dom";

function AppLayout() {
  const { isAuthenticated, isFetching: isLoadingUser } = useUser();

  if (isLoadingUser)
    return (
      <div className="flex-center h-full w-full">
        <Loader />
      </div>
    );

  return (
    <>
      {!isAuthenticated ? (
        <Navigate to="/sign-up" replace={true} />
      ) : (
        <RootLayout />
      )}
    </>
  );
}

function RootLayout() {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex min-h-full flex-1">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
}

export default AppLayout;
