import { FaTrashAlt } from "react-icons/fa"

const Content = ({items,handleCheck,deleteItem}) => {
    return (
    <main className="flex flex-col gap-4">
        {items.length !== 0 ?  
        <ul className="">
            {items.map(listItem => (
                <li key={listItem.id} className="bg-gray-500 w-full text-2xl flex items-center justify-between gap-12 p-4 my-2">
                    <input 
                        className="h-8 w-8"
                        type="checkbox"
                        onChange={() => handleCheck(listItem.id)}
                        checked={listItem.checked}
                    />
                    <label
                        style={listItem.checked ? {textDecoration:'line-through'}:null} 
                        onDoubleClick={() => handleCheck(listItem.id)}
                        className="hover:underline">{listItem.item}</label>
                    <FaTrashAlt
                        onClick={() => deleteItem(listItem.id)} 
                        role="button"
                        tabIndex="0"
                        className="text-xl text-blue-400 hover:text-red-500"
                    />
                </li>
            ))}
        </ul>
        :
        <div>
            <h1>Your to-do list is empty</h1>
        </div>
        }
    </main>
  )
}

export default Content