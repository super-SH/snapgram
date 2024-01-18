import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";
import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

function SearchPostInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const [searchParams, setSearchParams] = useSearchParams();


  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!debouncedSearchTerm) return;

    searchParams.set("search", debouncedSearchTerm);
    setSearchParams(searchParams);
  }

  return (
    <>
      <h2 className="h3-bold md:h2-bold w-full">Search Posts</h2>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex w-full items-center gap-1 rounded-lg bg-dark-4 px-4">
          <Input
            type="text"
            placeholder="Search"
            className="explore-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit">
            <img
              src="/assets/icons/search.svg"
              width={24}
              height={24}
              alt="search"
            />
          </Button>
        </div>
      </form>
    </>
  );
}

export default SearchPostInput;
