import { FaTrashAlt } from "react-icons/fa"

const ListItem = ({listItem,handleCheck,deleteItem}) => {
  return (
    <li className="bg-gray-500 w-full text-2xl flex items-center justify-between gap-12 p-4 my-2">
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
            aria-label={`Delete ${listItem.item}`}
        />
    </li>
  )
}

export default ListItem