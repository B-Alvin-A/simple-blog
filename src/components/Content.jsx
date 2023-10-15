import ItemList from "./ItemList"

const Content = ({items,handleCheck,deleteItem}) => {
    return (
    <main className="flex flex-col gap-4">
        {items.length !== 0 ?  
        <ItemList items={items} handleCheck={handleCheck} deleteItem={deleteItem} />
        :
        <div>
            <h1>Your to-do list is empty</h1>
        </div>
        }
    </main>
  )
}

export default Content