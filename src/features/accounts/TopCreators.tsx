import UserCard from "./UserCard";

function TopCreators() {
  return (
    <ul className="user-cards-container">
      {[1, 32, 321, 2341, 534].map((creator) => (
        <UserCard />
      ))}
    </ul>
  );
}

export default TopCreators;
