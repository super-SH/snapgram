import { Link } from "react-router-dom";
import { useAccountInfo } from "../accounts/useAccountInfo";

function EditPostButton({
  postId,
  creatorId,
}: {
  postId: number;
  creatorId: string;
}) {
  const { data, isFetching } = useAccountInfo();

  if (!data && !isFetching) return null;

  const isCreator = data?.accountId === creatorId;

  if (!isCreator) return null;

  return (
    <Link to={`/edit-post/${postId}`}>
      <img
        src="/assets/icons/edit.svg"
        alt="edit icon"
        height={20}
        width={20}
      />
    </Link>
  );
}

export default EditPostButton;
