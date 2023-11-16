import { Link } from "react-router-dom"

const About = () => {
  return (
    <main className="w-full flex-grow p-4 overflow-y-auto bg-white">
      <h2 className="mb-4">This is a simple ReactJS Blog site</h2>
      <p className=" text-xs mt-1">We can create and delete posts</p>
      <p className=" my-4">
          <Link to='/' className="underline">Go To Homepage</Link>
      </p>
    </main>
  )
}

export default About