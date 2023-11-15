import { Link } from "react-router-dom"


const Post = ({ post }) => {
  return (
    <article className="mt-5 border-b-2 border-b-[#d3d3d3]pb-4 first:mt-0">
        <Link className="" to={`/post/${post.id}`}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-1 text-xs">{post.datetime}</p>
        </Link>
        <p className="my-4">
            {(post.body).length <= 25
            ?
            post.body    
            :
            `${(post.body).slice(0, 25)}...`    
            }
        </p>
    </article>
  )
}

export default Post