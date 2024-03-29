import { Button } from "@/components/ui/button";
import { useSignout } from "./useSignout";
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

function SignoutButton({ text = false }: { text?: boolean }) {
  const { signout, isPending: isSigningOut } = useSignout();

  return (
    <Dialog>
      <DialogTrigger disabled={isSigningOut}>
        <div className="flex w-full items-center justify-start sm:px-3 sm:py-2 md:mt-12 md:gap-4 md:p-4">
          <img src="/assets/icons/logout.svg" alt="logout icon" />
          {text && <p className="small-medium lg:base-medium">Sign out</p>}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-60 rounded-lg bg-black xs:max-w-xs sm:max-w-xl">
        <DialogHeader className="flex gap-4">
          <DialogTitle className="text-[#b91c1c]">Sign Out</DialogTitle>
          <DialogDescription>
            Do u want to sign out ? Click confirm.
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
            onClick={() => signout()}
          >
            Sign Out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SignoutButton;
