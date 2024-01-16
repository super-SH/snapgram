function ExplorePosts() {
  return (
    <>
      <div className="flex-between mb-7 mt-16 w-full max-w-5xl">
        <h3 className="body-bold md:h3-bold">Popular Today</h3>

        <div className="flex-center cursor-pointer gap-3 rounded-xl bg-dark-3 px-4 py-2">
          <p className="small-medium md:base-medium text-light-2">All</p>
          <img
            src="/assets/icons/filter.svg"
            width={22}
            height={22}
            alt="filter"
          />
        </div>
      </div>
    </>
  );
}

export default ExplorePosts;
