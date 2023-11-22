import { createContext, useState, useEffect } from "react"
import axiosFetch from "../hooks/axiosFetch";

const DataContext = createContext({  })

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState('')
    
    const { data,fetchError,isLoading } = axiosFetch('http://localhost:3750/posts')

    useEffect(() => {
        setPosts(data)
    },[data])
    
    useEffect(() => {
        const filteredPosts = posts.filter(post => 
        ((post.title).toLowerCase()).includes(search.toLowerCase())
        ||
        ((post.body).toLowerCase()).includes(search.toLowerCase())
        )
        setSearchResults(filteredPosts.reverse())
    },[posts, search])

    return (
        <DataContext.Provider value={{
            search, setSearch,
            searchResults, setSearchResults,
            posts, setPosts,
            fetchError, isLoading
        }}>
            { children }
        </DataContext.Provider>
    )
}

export default DataContext