import AccountDetails from "@/features/accounts/AccountDetails";
import ProfileTabs from "@/features/accounts/ProfileTabs";
import { Outlet } from "react-router-dom";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-inner_container">
        <AccountDetails />
      </div>

      <ProfileTabs />

      <Outlet />
    </div>
  );
}

export default Profile;
