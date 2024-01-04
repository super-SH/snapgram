import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignout } from "@/features/authentication/useSignout";

function Topbar() {
  const { signout, isPending: isSigningOut } = useSignout();

  return (
    <section className="topbar">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/">
          <img src="/assets/images/logo.svg" alt="logo of snapgram" />
        </Link>
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => signout()}
          >
            <img src="/assets/icons/logout.svg" alt="logout icon" />
          </Button>
          <Link to={`/profile/:id`}>
            <img
              className="h-8 w-8 rounded-full"
              src="/assets/icons/profile-placeholder.svg"
              alt="profile"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Topbar;
