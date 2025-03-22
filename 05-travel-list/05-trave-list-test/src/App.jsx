import { useState } from 'react';
import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'
import './index.css'


function App() {
  const [items, setItems] = useState([])

  function handleAddItem(item) {
    setItems(items => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed }
          : item
      )
    )
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to clear the list?')
    if (!confirmed) return
    setItems([])
  }

  return (
    <div className='app'>
      <Logo></Logo>
      <Form onAddItems={handleAddItem}></Form>
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}></PackingList>
      <Stats items={items}></Stats>
    </div >
  )
}


export default App
