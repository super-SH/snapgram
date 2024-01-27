import { Link } from "react-router-dom";
import { useAccountInfo } from "@/features/accounts/useAccountInfo";
import SignoutButton from "@/features/authentication/SignoutButton";

function Topbar() {
  const { data } = useAccountInfo();

  return (
    <section className="topbar">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/">
          <img src="/assets/images/logo.svg" alt="logo of snapgram" />
        </Link>
        <div className="flex items-center justify-between gap-4">
          <SignoutButton />
          <Link to={`/profile/${data?.id}`}>
            <img
              className="h-8 w-8 rounded-full object-cover object-center"
              src={
                data?.profileUrl
                  ? data.profileUrl
                  : "/assets/icons/profile-placeholder.svg"
              }
              alt="profile"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Topbar;
