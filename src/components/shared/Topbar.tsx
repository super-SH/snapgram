import { Link, NavLink } from "react-router-dom";
import SignoutButton from "@/features/authentication/SignoutButton";
import SmallProfileCard from "@/features/accounts/SmallProfileCard";

function Topbar() {
  return (
    <section className="topbar">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/">
          <img src="/assets/images/logo.svg" alt="logo of snapgram" />
        </Link>
        <div className="flex items-center justify-between gap-4">
          <NavLink to="/notifications">
            <img
              src="/assets/icons/notification.svg"
              alt="bell icons for notification"
              className="h-6 w-6"
            />
          </NavLink>

          <SignoutButton />

          <SmallProfileCard />
        </div>
      </div>
    </section>
  );
}

export default Topbar;
