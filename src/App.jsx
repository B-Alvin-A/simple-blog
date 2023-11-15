import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Home, About, NewPost, PostPage, Error404 } from "./pages"
import { format } from "date-fns";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])
  const [search, setSearch] = useState()
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const id = posts.length ? posts[posts.length-1].id+1 : 1
    const datetime = format(new Date(), 'd MMM yyyy H:mm:ss')
    const newPost = {
      id: id,
      title: postTitle,
      datetime: datetime,
      body: postBody
    }
    const allPosts = [...posts,newPost]
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')
  }

  const handleDelete = (id,navigate) => {
    const currPosts = posts.filter(post => post.id !== id)
    setPosts(currPosts)
    navigate('/')
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-start border border-solid border-[#333]">
      <Router>
        <Header title="React JS Blog" />
        <NavBar search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" 
            element={<Home posts={posts} />} />
          <Route path="/post" 
            element={<NewPost postTitle={postTitle}
                              setPostTitle={setPostTitle}
                              postBody={postBody}
                              setPostBody={setPostBody}
                              handleSubmit={handleSubmit} />} />
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