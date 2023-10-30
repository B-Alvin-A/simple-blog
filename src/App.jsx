import { useState, useEffect } from "react"
import Header from "./components/Header";
import CreateItem from "./components/CreateItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Search from "./components/Search";
import apiRequest from "./components/apiRequest";

export default function App() {
  const MY_API_URL = 'http://localhost:3450/items'

  const [newItem,setNewItem] = useState('')
  const [items, setItems] = useState([])
  const [search,setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async() => {
      try{
        const response = await fetch(MY_API_URL)
        if (!response.ok) throw Error('Did not receive expected data from API Call')
        const listItems = await response.json()
        setItems(listItems)
      }catch(err){
        setFetchError(err.message)
      }finally{
        setIsLoading(false)
      }
    }
    // (async () => await fetchItems())() 
    // [**fetchItems() does not return a value, this IIFE(Instantly Invoked Function Expression isn't needed)**]
    setTimeout(() => {
      fetchItems()
    },1000)
  }, [])

  const handleInput = (e) => {
    e.preventDefault()
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')
  }

  const addItem = async (item) => {
    const id = items.length ? (items[items.length-1].id+1) : 1
    const newListItem = {id, checked:false, item}
    const newList = [...items,newListItem]
    setItems(newList)

    const createItems = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newListItem)
    }
    const result = await apiRequest(MY_API_URL, createItems)
    if(result) setFetchError(result)
  }

  const handleCheck = async (id) => {
    const newList = items.map((item) => item.id === id ? {...item,checked:!item.checked} : item)
    setItems(newList)

    const updatedItem = newList.filter((item) => item.id === id)
    const updateItems = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: updatedItem[0].checked})
    }
    const reqUrl = `${MY_API_URL}/${id}`
    const result = await apiRequest(reqUrl, updateItems)
    if(result) setFetchError(result)
  }

  const deleteItem = async (id) => {
    const newList = items.filter((item) => item.id !== id)
    setItems(newList)

    const deleteItems = {method: 'DELETE'}
    const reqUrl = `${MY_API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteItems)
    if(result) setFetchError(result)
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
      <main className="flex flex-col gap-4">
        {isLoading && <p>Prepairing List Items...</p>}
        {fetchError && <p style={{color:'red'}}>{`Error: ${fetchError}`}</p>}
        {!fetchError 
          &&
          !isLoading
          &&
          <Content 
            items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            deleteItem={deleteItem}
          />
        }
      </main>
      <Footer length={items.length} />
    </div>
  )
}