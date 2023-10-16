import { FaPlus } from "react-icons/fa"

const CreateItem = ({ newItem, setNewItem, handleInput }) => {
  return (
    <form className="flex justify-center items-center gap-4" onSubmit={handleInput}>
        <input 
            className="border-2 border-gray-500 p-4"
            autoFocus
            type="text" 
            id="AddItem"
            placeholder="Enter Item to be added"
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="bg-gray-400 border-4 h-12 w-12 flex justify-center items-center hover:bg-green-500" type="submit" aria-label="Add to List">
            <FaPlus className="text-2xl" />
        </button>
    </form>
  )
}

export default CreateItem