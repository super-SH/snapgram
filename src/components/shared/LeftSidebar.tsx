import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";
import { Link, NavLink } from "react-router-dom";
import { useAccountInfo } from "@/features/accounts/useAccountInfo";
import SignoutButton from "@/features/authentication/SignoutButton";

function LeftSidebar() {
  const { data } = useAccountInfo();

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-10">
        <Link to="/">
          <img src="/assets/images/logo.svg" alt="logo of snapgram" />
        </Link>

        <Link to={`/profile/${data?.id}`} className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover  object-center"
            src={
              data?.profileUrl
                ? data.profileUrl
                : `/assets/icons/profile-placeholder.svg`
            }
            alt="profile"
          />

          <div className="flex flex-col">
            <p className="body-bold">{data?.name}</p>
            <p className="small-regular text-light-3">@{data?.username}</p>
          </div>
        </Link>

        <ul className="flex flex-col gap-2 lg:gap-3">
          {sidebarLinks.map((link: INavLink) => (
            <li key={link.label} className="group active:bg-primary-500">
              <NavLink
                to={link.route}
                className="leftsidebar-link flex items-center gap-3 p-4 "
              >
                <img
                  src={link.imgURL}
                  alt={link.label}
                  className="group-hover:invert-white group-active:invert-white"
                />
                <p>{link.label}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <SignoutButton text />
    </nav>
  );
}

export default LeftSidebar;
