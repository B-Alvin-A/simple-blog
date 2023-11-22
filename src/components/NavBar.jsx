import { NavLink } from "react-router-dom"
import { useContext } from "react"
import DataContext from "../context/DataContext"

const NavBar = () => {
  const { search,setSearch } = useContext(DataContext)
  return (
    <nav className="w-full bg-[#333] flex flex-col justify-start items-start">
      <form onSubmit={(e) => e.preventDefault()} className="w-[80%] pt-4 pl-3">
        <label htmlFor="search" className="absolute left-[-99999px]">Search Posts</label>
        <input 
          className="w-full text-base p-1 rounded-sm"
          id="search"
          type="text"
          placeholder="Search Posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul className="text-white list-none flex flex-nowrap items-center">
        <li className="p-4 hover:bg-[#eee] hover:text-[#333]">
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li className="p-4 hover:bg-[#eee] hover:text-[#333]">
          <NavLink to="/post">
            Post
          </NavLink>
        </li>
        <li className="p-4 hover:bg-[#eee] hover:text-[#333]">
          <NavLink to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar