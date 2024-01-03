import { useUser } from "@/features/authentication/useUser";
import { Navigate, Outlet } from "react-router-dom";

function AppLayout() {
  const { isAuthenticated } = useUser();
  console.log(isAuthenticated);

  return (
    <div>
      {!isAuthenticated ? (
        <Navigate to="/sign-up" replace={true} />
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default AppLayout;
