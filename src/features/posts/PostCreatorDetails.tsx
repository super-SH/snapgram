import { multiFormatDateString } from "@/lib/utils";
import { AccountType } from "@/types/collection";
import { Link } from "react-router-dom";

type CreatorDetailsProps = {
  creator: AccountType;
  created_at: string;
  location: string | null;
};

function PostCreatorDetails({
  creator,
  created_at,
  location,
}: CreatorDetailsProps) {
  return (
    <div className="flex items-center gap-3">
      <Link to={`profile/${creator.id}`}>
        <img
          src={"/assets/icons/profile-placeholder.svg"}
          alt={creator.name || "default profile"}
          className="h-12 w-12 rounded-full"
        />
      </Link>

      <div className="flex flex-col">
        <p>{creator.name}</p>

        <div className="flex-center subtle-semibold lg:small-regular gap-1 text-light-3">
          <p>{multiFormatDateString(created_at)}</p>
          {location ? (
            <>
              -<p>{location}</p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PostCreatorDetails;
