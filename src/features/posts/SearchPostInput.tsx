import { Input } from "@/components/ui/input";
import { useState } from "react";

function SearchPostInput() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h2 className="h3-bold md:h2-bold w-full">Search Posts</h2>
      <div className="flex w-full gap-1 rounded-lg bg-dark-4 px-4">
        <img
          src="/assets/icons/search.svg"
          width={24}
          height={24}
          alt="search"
        />
        <Input
          type="text"
          placeholder="Search"
          className="explore-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </>
  );
}

export default SearchPostInput;
