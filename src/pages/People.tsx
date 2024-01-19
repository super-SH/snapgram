import AllAccounts from "@/features/accounts/AllAccounts";

function People() {
  return (
    <div className="people-container">
      <div className="flex w-full max-w-5xl items-center justify-start gap-3">
        <img
          src="/assets/icons/people.svg"
          alt="saved post icon"
          width={36}
          height={36}
        />
        <h2 className="h3-bold md:h2-bold text-left">All People</h2>
      </div>

      <AllAccounts />
    </div>
  );
}

export default People;
