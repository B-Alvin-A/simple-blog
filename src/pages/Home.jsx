import Feed from "../components/Feed"

const Home = ({ posts }) => {
  return (
    <main className="w-full flex-grow p-4 overflow-y-auto bg-white">
      {posts.length
      ?
      (<Feed posts={posts}/>)
      :
      (<p style={{ marginTop: '2rem' }} className="">
        No posts to display
      </p>)
      }
    </main>
  )
}

export default Home