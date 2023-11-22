import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import DataContext from "../context/DataContext"

const NewPost = () => {
  const { posts,setPosts } = useContext(DataContext)
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate()
  
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

  const handlePostSubmit = (e) => {
    e.preventDefault()

    handleSubmit()
    navigate('/')
  }

  return (
    <main className="w-full flex-grow p-4 overflow-y-auto bg-white">
      <h2 className="">New Post</h2>
      <form action="" className="flex flex-col" onSubmit={handlePostSubmit}>
        <label htmlFor="postTitle" className="mt-4">Title:</label>
        <input className="border min-h-[36px] text-base p-1 rounded mr-1" type="text" 
          id="postTitle"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody" className="mt-4">Post:</label>
        <textarea className="border h-28 text-base p-1 rounded mr-1" type="text" 
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit" className="mt-4 border p-2 rounded-lg h-12 bg-[#d3d3d3] hover:bg-green-400">Post</button>
      </form>
    </main>
  )
}

export default NewPost