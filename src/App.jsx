import { useState, useEffect } from "react"
import Header from "./components/Header";
import CreateItem from "./components/CreateItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Search from "./components/Search";

export default function App() {
  const [newItem,setNewItem] = useState('')
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('toDoList')) || [])
  const [search,setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(items))
  }, [items])

  const handleInput = (e) => {
    e.preventDefault()
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')
  }

  const addItem = (item) => {
    const id = items.length ? (items[items.length-1].id+1) : 1
    const newListItem = {id, checked:false, item}
    const newList = [...items,newListItem]
    setItems(newList)
  }

  const handleCheck = (id) => {
    const newList = items.map((item) => item.id === id ? {...item,checked:!item.checked} : item)
    setItems(newList)
  }

  const deleteItem = (id) => {
    const newList = items.filter((item) => item.id !== id)
    setItems(newList)
  }
  
  return (
    <div className="flex flex-col items-center justify-between h-screen w-full m-auto pt-16">
      <Header />
      <CreateItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleInput={handleInput}
      />
      <Search 
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        deleteItem={deleteItem}
      />
      <Footer length={items.length} />
    </div>
  )
}