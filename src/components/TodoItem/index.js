import './index.css'

const TodoItem = props => {
  const {eachItem, deleteItem} = props
  const {id, title} = eachItem

  const pickingId = () => {
    deleteItem(id)
  }
  return (
    <li className="todoItem-container">
      <p className="heading">{title}</p>
      <button className="button" type="button" onClick={pickingId}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
