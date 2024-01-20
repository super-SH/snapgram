import AllAccounts from "@/features/accounts/AllAccounts";

function People() {
  return (
    <div className="people-container">
      <div className="flex w-full max-w-5xl items-center justify-start gap-3">
        <svg
          width="36px"
          height="36px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="6" r="4" stroke="#fff" stroke-width="1.5" />
          <path
            d="M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M5.88915 20.5843C6.82627 20.8504 7.88256 21 9 21C12.866 21 16 19.2091 16 17C16 14.7909 12.866 13 9 13C5.13401 13 2 14.7909 2 17C2 17.3453 2.07657 17.6804 2.22053 18"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <h2 className="h3-bold md:h2-bold text-left">All People</h2>
      </div>

      <AllAccounts />
    </div>
  );
}

export default People;
