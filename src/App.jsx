import Form from "./Form.jsx"
import Logo from "./Logo.jsx"
import PackingList from "./PackingList.jsx"
import { useState } from "react";
import Stats from "./Stats.jsx";



function App() {
  const [items, setItems] = useState([]);

  function handleAddItems (item){
    setItems(items => [...items, item] )

}

function handleDeleteItem(id){
  setItems(items => items.filter(item =>item.id !== id))
}

function handleToggleItem(id){
  setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))

}

function handleClearList(){
  const confirmed = window.confirm('Are you sure you want to delete all items?')
  if (confirmed) setItems([]);
}

  return (
    <>
      <Logo/>
      <Form onAddItems = {handleAddItems}/>
      <PackingList 
      items ={items} 
      onDeleteItem={handleDeleteItem} 
      onToggleItem={handleToggleItem}
      onClearList={handleClearList}
      />

      <Stats items ={items}/>
    </>
  )
}

export default App
