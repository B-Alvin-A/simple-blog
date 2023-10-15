import ListItem from "./ListItem"

const ItemList = ({items,handleCheck,deleteItem}) => {
  return (
    <ul className="">
        {items.map(listItem => (
            <ListItem 
                key={listItem.id}
                listItem={listItem}
                handleCheck={handleCheck}
                deleteItem={deleteItem}
            />
        ))}
    </ul>
  )
}

export default ItemList