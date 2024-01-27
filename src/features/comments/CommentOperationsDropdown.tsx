import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import DeleteCommentButton from "./DeleteCommentButton";
import EditCommentButton from "./EditCommentButton";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteComment } from "./useDeleteComment";
import { useQueryClient } from "@tanstack/react-query";

type CommentOperationProps = {
  commentId: number;
  postId: number;
};

function CommentOperationsDropdown({
  commentId,
  postId,
}: CommentOperationProps) {
  const queryClient = useQueryClient();
  const { deleteComment, isPending: isDeletingComment } = useDeleteComment();

  function handleDeleteComment() {
    deleteComment(commentId, {
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ["post-comments", postId] }),
    });
  }

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div role="button">
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5" cy="12" r="2" stroke="#877EFF" strokeWidth="1.5" />
              <circle
                cx="12"
                cy="12"
                r="2"
                stroke="#877EFF"
                strokeWidth="1.5"
              />
              <circle
                cx="19"
                cy="12"
                r="2"
                stroke="#877EFF"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-28 bg-black md:w-36 lg:w-40 xl:w-52">
          <DropdownMenuGroup>
            <DropdownMenuItem className="hover:bg-light-4">
              <EditCommentButton />
            </DropdownMenuItem>

            <DropdownMenuItem className="hover:bg-light-4">
              <DialogTrigger className="w-full">
                <DeleteCommentButton />
              </DialogTrigger>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent className="max-w-60 rounded-lg bg-black xs:max-w-xs sm:max-w-xl">
        <DialogHeader className="flex gap-4">
          <DialogTitle className="text-[#b91c1c]">Delete Comment</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently remove from the
            server. Click confirm to delete comment.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="text-semibold bg-white text-black"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            className="bg-red hover:bg-red/90"
            onClick={handleDeleteComment}
            disabled={isDeletingComment}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CommentOperationsDropdown;
