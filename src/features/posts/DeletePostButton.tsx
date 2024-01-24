import { Loader } from "@/components/shared";
import { Button } from "@/components/ui/button";
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

type DeletePostButtonProps = {
  onDelete: () => void;
  isDeleting: boolean;
};

function DeletePostButton({ onDelete, isDeleting }: DeletePostButtonProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="ghost" className={`ghost_details-delete_btn`}>
          <img
            src={"/assets/icons/delete.svg"}
            alt="trash can icon"
            width={20}
            height={20}
          />
        </Button>
      </DialogTrigger>

      {isDeleting ? (
        <Loader />
      ) : (
        <DialogContent className="max-w-60 rounded-lg bg-black xs:max-w-xs sm:max-w-xl">
          <DialogHeader className="flex gap-4">
            <DialogTitle className="text-[#b91c1c]">Delete Post</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently from the
              server. Click confirm to delete post.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
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
              onClick={onDelete}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
}

export default DeletePostButton;
