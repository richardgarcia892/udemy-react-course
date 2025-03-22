import PropTypes from 'prop-types';

export default function Item({ item, onDeleteItem, onToggleItem }) {

  Item.propTypes = {
    item: PropTypes.object.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onToggleItem: PropTypes.func.isRequired
  }

  return <li>
    <input type="checkbox" value={item.checked} onChange={() => onToggleItem(item.id)} />
    <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
      {item.quantity} {item.description}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </span>
  </li>
}