import { Link, useNavigate, useParams } from "react-router-dom"

const PostPage = ({ posts, handleDelete }) => {
  const navigate = useNavigate();
  const { id } = useParams()
  const post = posts.find(post => (post.id).toString()===id)

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
            <button className="bg-green-600 h-12 text-white text-base p-2 rounded">Edit Post</button>
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