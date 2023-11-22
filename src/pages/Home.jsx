import Feed from "../components/Feed"
import { useContext } from "react"
import DataContext from "../context/DataContext"

const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext)

  return (
    <main className="w-full flex-grow p-4 overflow-y-auto bg-white">
      {isLoading && <p className="">Loading posts...</p>}
      {!isLoading && fetchError && <p className="">{ fetchError }</p>}
      {!isLoading 
        && 
      !fetchError 
        && 
      (searchResults.length ? <Feed posts={searchResults}/>
                    : <p style={{ marginTop: '2rem' }} className="">No posts to display</p>)}
    </main>
  )
}

export default Home