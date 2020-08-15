import React, { useState } from 'react'
import "./ChatScreen.css";
import { useParams } from "react-router-dom"
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const params = useParams();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image: 'https://bloximages.chicago2.vip.townnews.com/indiawest.com/content/tncms/assets/v3/editorial/d/b9/db95e204-ad34-11e7-ad0b-4b03bf91d35e/59dbe3889c428.image.jpg',
      messages: 'Whats up heart'
    },
    {
      name: 'Ellen',
      image: 'https://bloximages.chicago2.vip.townnews.com/indiawest.com/content/tncms/assets/v3/editorial/d/b9/db95e204-ad34-11e7-ad0b-4b03bf91d35e/59dbe3889c428.image.jpg',
      messages: 'How its going'
    },
    {

      messages: 'Hi , How are you Ellen'
    },
  ])
  const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, { messages: input }])
    setInput('');
  }
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MACTHED WITH {params.person.toUpperCase()} ON 10/08/20</p>
      {messages.map(message => (
        message.name ?
          (<div className="chatScreen__message">
            <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
            <p className="chatScreen__text">{message.messages}</p>
          </div>) :

          (<div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.messages}</p>
          </div>)
      ))}
      <form className="chatScreen__input" onSubmit={handleSend}>
        <input className="chatScreen__inputField"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message"
          type="text" />
        <button className="chatScreen__button">SEND</button>
      </form>
    </div>
  )
}

export default ChatScreen
