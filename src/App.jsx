import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Home, About, NewPost, PostPage, EditPost, Error404 } from "./pages"
import { format } from "date-fns";
import api from "./api/posts";

export default function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')

  useEffect(() => {
    const fetchData = async()=>{
      try{
        const response = await api.get('/posts')
        setPosts(response.data)
      }
      catch(err){
        if(err.response){

        } else{

        }
      }
    }
    fetchData()
  },[])

  useEffect(() => {
    const filteredPosts = posts.filter(post => 
      ((post.title).toLowerCase()).includes(search.toLowerCase())
      ||
      ((post.body).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResults(filteredPosts.reverse())
  },[posts, search])
  
  const handleSubmit = async () => {
    const id = posts.length ? posts[posts.length-1].id+1 : 1
    const datetime = format(new Date(), 'd MMM yyyy H:mm:ss')
    const newPost = {
      id: id,
      title: postTitle,
      datetime: datetime,
      body: postBody
    }
    try{
      const response = await api.post('/posts', newPost)
      const allPosts = [...posts, response.data]
      setPosts(allPosts)
      setPostTitle('')
      setPostBody('')
    }
    catch(err){
      console.log(err.message)
    }
  }

  const handleEdit = async (id) =>{
    const datetime = format(new Date(), 'd MMM yyyy H:mm:ss')
    const updatePost = {
      id,
      title: editTitle,
      datetime,
      body: editBody
    }
    try {
      const response = await api.put(`/posts/${id}`, updatePost)
      setPosts(posts.map(post => post.id===id ? {...response.data}:post ))
      setEditTitle('')
      setEditBody('')
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id,navigate) => {
    try {
      await api.delete(`/posts/${id}`)
      const currPosts = posts.filter(post => post.id !== id)
      setPosts(currPosts)
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-start border border-solid border-[#333]">
      <Router>
        <Header title="React JS Blog" />
        <NavBar search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" 
            element={<Home posts={searchResults} />} />
          <Route path="/post" 
            element={<NewPost postTitle={postTitle}
                              setPostTitle={setPostTitle}
                              postBody={postBody}
                              setPostBody={setPostBody}
                              handleSubmit={handleSubmit} />} />
          <Route path="/editpost/:id" 
            element={<EditPost  posts={posts}
                                handleEdit={handleEdit}
                                editTitle={editTitle}
                                editBody={editBody}
                                setEditTitle={setEditTitle}
                                setEditBody={setEditBody} />} />
          <Route path="/post/:id" 
            element={<PostPage posts={posts} handleDelete={handleDelete} />} />
          <Route path="/about" 
            element={<About />} />
          <Route path="*" 
            element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}