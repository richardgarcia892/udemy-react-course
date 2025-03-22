import PropTypes from 'prop-types'

export default function Stats({ items }) {

  Stats.propTypes = {
    items: PropTypes.array.isRequired
  }

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