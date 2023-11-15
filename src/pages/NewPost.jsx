const NewPost = ({ postTitle, setPostTitle, postBody, setPostBody, handleSubmit }) => {
  return (
    <main className="w-full flex-grow p-4 overflow-y-auto bg-white">
      <h2 className="">New Post</h2>
      <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="postTitle" className="mt-4">Title:</label>
        <input className="border min-h-[36px] text-base p-1 rounded mr-1" type="text" 
          id="postTitle"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody: " className="mt-4">Post:</label>
        <textarea className="border h-28 text-base p-1 rounded mr-1" type="text" 
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button className="mt-4 border p-2 rounded-lg h-12 bg-[#d3d3d3] hover:bg-green-400">Post</button>
      </form>
    </main>
  )
}

export default NewPost