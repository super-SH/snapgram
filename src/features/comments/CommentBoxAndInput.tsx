import PostCommentBox from "./PostCommentBox";
import CommentInput from "./CommentInput";
import { AccountType } from "@/types/collection";

type BoxAndInputProps = {
  postId: number;
  accountData: AccountType;
};

function CommentBoxAndInput({ postId, accountData }: BoxAndInputProps) {
  return (
    <>
      <PostCommentBox postId={postId} />
      <CommentInput loggedAccountData={accountData} postId={postId} />
    </>
  );
}

export default CommentBoxAndInput;
