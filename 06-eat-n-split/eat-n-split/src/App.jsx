import { useState } from 'react'
import './App.css'

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


function App() {

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend</Button>
        <FormSplitBill />
      </div>
    </div>
  )
}

function FriendsList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (<p className='red'>You Owe {friend.name} {Math.abs(friend.balance)}</p>)}
      {friend.balance > 0 && (<p className='green'>{friend.name} Owes you {Math.abs(friend.balance)}</p>)}
      {friend.balance === 0 && (<p>You and {friend.name} are even</p>)}

    </li>
  )
}

function Button({ children }) {
  return <button className='button'>{children}</button>
}

function FormAddFriend() {
  return (
    <form className='form-add-friend'>
      <label >👏 Friend ame</label>
      <input type="text" />
      <label >🤣 Friend Image url</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  )
}

function FormSplitBill() {
  return <form className='form-split-bill'>
    <h2>Split a bill with X</h2></form>
}
export default App
