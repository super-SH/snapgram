import { Bottombar, LeftSidebar, Topbar } from "@/components/shared";
import { useUser } from "@/features/authentication/useUser";
import { Navigate, Outlet } from "react-router-dom";

function AppLayout() {
  const { isAuthenticated } = useUser();
  console.log(isAuthenticated);

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
    <div className="w-full">
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
