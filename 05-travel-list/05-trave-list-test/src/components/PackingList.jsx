import { useState } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState('input')
  let sortedItems = [...items]

  PackingList.propTypes = {
    items: PropTypes.array.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onToggleItem: PropTypes.func.isRequired,
    onClearList: PropTypes.func.isRequired
  }

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
