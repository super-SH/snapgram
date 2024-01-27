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

function CommentOperationsDropdown() {
  return (
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
            <circle cx="12" cy="12" r="2" stroke="#877EFF" strokeWidth="1.5" />
            <circle cx="19" cy="12" r="2" stroke="#877EFF" strokeWidth="1.5" />
          </svg>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-28 bg-black md:w-36 lg:w-40 xl:w-52">
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:bg-light-4">
            <EditCommentButton />
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-light-4">
            <DeleteCommentButton />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CommentOperationsDropdown;
