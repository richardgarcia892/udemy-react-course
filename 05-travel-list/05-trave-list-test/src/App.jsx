/* eslint-disable react/prop-types */
import { useState } from 'react';
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

function Logo() {
  return (<h1>🏖 Far Away 💼</h1>)
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(5)



  function handleSubmit(e) {
    e.preventDefault()
    if (!description) return

    const newItem = {
      description, quantity, packed: false, id: Date.now()
    }
    console.log(newItem)
    onAddItems(newItem)
    setDescription('')
    setQuantity(1)
  }

  return <form className='add-form' onSubmit={handleSubmit}>
    <h3>What do you need for your trip?</h3>
    <select
      value={quantity}
      onChange={e => setQuantity(parseInt(e.target.value))}
    >
      {Array.from({ length: 20 }, (_, i) => i + 1)
        .map(num =>
          <option value={num} key={num}>
            {num}
          </option>)}
    </select>
    <input
      type="text"
      placeholder='Item...'
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
    <button>Add</button>
  </form>
}

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState('input')
  let sortedItems = [...items]

  if (sortBy === 'description') sortedItems.sort((a, b) => a.description.localeCompare(b.description))
  if (sortBy === 'packed') sortedItems.sort((a, b) => a.packed - b.packed)

  return (
    <div className='list'>
      <ul>
        {sortedItems.map(item => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        ))}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={onClearList}>clear list</button>
      </div>
    </div>
  )
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return <li>
    <input type="checkbox" value={item.checked} onChange={() => onToggleItem(item.id)} />
    <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
      {item.quantity} {item.description}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </span>
  </li>
}

function Stats({ items }) {
  // Handle no items on items array
  if (!items.length)
    return (
      <p className='stats'>
        <em>
          Start addin some items to your packing list 🚀
        </em>
      </p>
    );
  // handle calculations on items
  const numItems = items.length
  const numPacked = items.filter(item => item.packed).length
  const percentage = Math.round(numItems > 0 ? numPacked / numItems * 100 : 0)

  return <footer className='stats'>
    <em>
      {percentage === 100 ?
        'You got everything! Ready to GO ✈' :
        `You have ${numItems} items and yo already packed ${numPacked} (${percentage}%)`}
    </em>
  </footer>
}

export default App
