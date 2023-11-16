import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <main className="w-full flex-grow p-4 overflow-y-auto bg-white">
      <h2 className="mb-4">Page Not Found</h2>
      <p className=" text-xs mt-1">Ooops something went wrong!!</p>
      <p className=" my-4">
          <Link to='/' className="underline">Go To Homepage</Link>
      </p>
    </main>
  )
}

export default Error404