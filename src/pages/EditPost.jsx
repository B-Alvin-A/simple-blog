import { useContext, useState, useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import DataContext from "../context/DataContext";
import { format } from "date-fns";
import api from "../api/posts";

const EditPost = () => {
    const [editTitle, setEditTitle] = useState('')
    const [editBody, setEditBody] = useState('')

    const { posts,setPosts } = useContext(DataContext)
    const { id } = useParams()
    const post = id ? posts.find(post => post.id.toString() === id) : null;

    useEffect(() => {
        if(post){
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    },[post, setEditTitle, setEditBody])

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

    const navigate = useNavigate()

    const handlePostEdit = (e) => {
        e.preventDefault()
        handleEdit(post.id)
        navigate('/')
    }

    return (
        <main className="w-full flex-grow p-4 overflow-y-auto bg-white">
        {editTitle
        &&
        <>
            <h2 className="">Edit Post</h2>
            <form action="" className="flex flex-col" onSubmit={handlePostEdit}>
                <label htmlFor="postTitle" className="mt-4">Title:</label>
                <input className="border min-h-[36px] text-base p-1 rounded mr-1" type="text" 
                id="postTitle"
                required
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                />
                <label htmlFor="postBody" className="mt-4">Post:</label>
                <textarea className="border h-28 text-base p-1 rounded mr-1" type="text" 
                id="postBody"
                required
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
                />
                <button type="submit" className="mt-4 border p-2 rounded-lg h-12 bg-[#d3d3d3] hover:bg-green-400">Save</button>
            </form>
        </>
        }
        {
            !editTitle
            &&
            <>
                <h2 className="mb-4">Post Not Found</h2>
                <p className=" text-xs mt-1">Ooops something went wrong!!</p>
                <p className=" my-4">
                    <Link to='/' className="underline">Go To Homepage</Link>
                </p>
            </>
        }
        </main>
    )
}

export default EditPost