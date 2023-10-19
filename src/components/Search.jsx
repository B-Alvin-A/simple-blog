const Search = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="">
        <label htmlFor="searchList" className="hidden">Search Item</label>
        <input 
            className="border border-gray-400 p-2 mt-2"
            type="text"
            id="searchList"
            role="searchbox"
            placeholder="Enter search item"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default Search