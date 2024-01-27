import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

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
            <Button className="flex w-full items-center justify-start gap-2 p-0">
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.18 8.03933L18.6435 7.57589C19.4113 6.80804 20.6563 6.80804 21.4241 7.57589C22.192 8.34374 22.192 9.58868 21.4241 10.3565L20.9607 10.82M18.18 8.03933C18.18 8.03933 18.238 9.02414 19.1069 9.89309C19.9759 10.762 20.9607 10.82 20.9607 10.82M18.18 8.03933L13.9194 12.2999C13.6308 12.5885 13.4865 12.7328 13.3624 12.8919C13.2161 13.0796 13.0906 13.2827 12.9882 13.4975C12.9014 13.6797 12.8368 13.8732 12.7078 14.2604L12.2946 15.5L12.1609 15.901M20.9607 10.82L16.7001 15.0806C16.4115 15.3692 16.2672 15.5135 16.1081 15.6376C15.9204 15.7839 15.7173 15.9094 15.5025 16.0118C15.3203 16.0986 15.1268 16.1632 14.7396 16.2922L13.5 16.7054L13.099 16.8391M13.099 16.8391L12.6979 16.9728C12.5074 17.0363 12.2973 16.9867 12.1553 16.8447C12.0133 16.7027 11.9637 16.4926 12.0272 16.3021L12.1609 15.901M13.099 16.8391L12.1609 15.901"
                  stroke="#877EFF"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 13H10.5"
                  stroke="#877EFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M8 9H14.5"
                  stroke="#877EFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M8 17H9.5"
                  stroke="#877EFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C20.7715 19.8853 20.9554 18.4796 20.9913 16"
                  stroke="#877EFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Edit
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-light-4">
            <Button className="flex w-full items-center justify-start gap-2 p-0">
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5001 6H3.5"
                  stroke="#FF5A5A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
                  stroke="#FF5A5A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                  stroke="#FF5A5A"
                  strokeWidth="1.5"
                />
              </svg>
              Delete
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CommentOperationsDropdown;
