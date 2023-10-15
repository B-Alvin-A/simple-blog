import { useState } from "react"
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
  const [items, setItems] = useState([
      {
          id:1,
          checked:false,
          item:'MongoDB'
      },
      {
          id:2,
          checked:false,
          item:'Express'
      },
      {
          id:3,
          checked:false,
          item:'React'
      }
  ])

  const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? {...item,checked:!item.checked} : item)
      setItems(listItems)
      localStorage.setItem('toDoList', JSON.stringify(listItems))
  }

  const deleteItem = (id) => {
      const edittedList = items.filter((item) => item.id !== id)
      setItems(edittedList)
      localStorage.setItem('toDoList', JSON.stringify(edittedList))
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-[500px] m-auto">
      <Header />
      <Content 
        items={items}
        handleCheck={handleCheck}
        deleteItem={deleteItem}
      />
      <Footer length={items.length} />
    </div>
  )
}