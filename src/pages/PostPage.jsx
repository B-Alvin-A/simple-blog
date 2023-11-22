import { Link, useNavigate, useParams } from "react-router-dom"
import { useContext } from "react"
import DataContext from "../context/DataContext"
import api from "../api/posts";

const PostPage = () => {
  const { posts,setPosts } = useContext(DataContext)
  const navigate = useNavigate();
  const { id } = useParams()
  const post = posts.find(post => (post.id).toString()===id)

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
  
  const onDelete = (postId) => {
    handleDelete(postId, navigate)
  }

  return (
    <main className="w-full flex-grow p-4 overflow-y-auto bg-white">
      <article className="mt-4 pb-4 border-b border-[#d3d3d3]">
        {
        post
        &&
        <>
          <h2 className="mb-4">{post.title}</h2>
          <p className=" text-xs mt-1">{post.datetime}</p>
          <p className=" my-4">{post.body}</p>
          <Link to={`/editpost/${post.id}`}>
            <button className="bg-[#333] h-12 text-white text-base p-2 rounded">Edit Post</button>
          </Link>
          <button className="ml-4 bg-red-600 h-12 text-white text-base p-2 rounded" onClick={() => onDelete(post.id)}>Delete Post</button>
        </>
        }
        {
        !post
        &&
        <>
          <h2 className="mb-4">Post Not Found</h2>
          <p className=" text-xs mt-1">Ooops something went wrong!!</p>
          <p className=" my-4">
            <Link to='/' className="underline">Go To Homepage</Link>
          </p>
        </>
        }
      </article>
    </main>
  )
}

export default PostPage