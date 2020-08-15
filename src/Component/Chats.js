import React from 'react'
import "./Chats.css"
import Chat from './Chat'

const Chats = () => {
  return (
    <div className="chats">
      <Chat name="Sarah"
        message="Hey!"
        profilePic="https://bloximages.chicago2.vip.townnews.com/indiawest.com/content/tncms/assets/v3/editorial/d/b9/db95e204-ad34-11e7-ad0b-4b03bf91d35e/59dbe3889c428.image.jpg"
        timestamp="23 minutes ago" />
      <Chat name="Jowwy"
        message="Hey!"
        profilePic="https://bloximages.chicago2.vip.townnews.com/indiawest.com/content/tncms/assets/v3/editorial/d/b9/db95e204-ad34-11e7-ad0b-4b03bf91d35e/59dbe3889c428.image.jpg"
        timestamp="23 minutes ago" />
      <Chat name="Masowr"
        message="Hey!"
        profilePic="https://bloximages.chicago2.vip.townnews.com/indiawest.com/content/tncms/assets/v3/editorial/d/b9/db95e204-ad34-11e7-ad0b-4b03bf91d35e/59dbe3889c428.image.jpg"
        timestamp="23 minutes ago" />
    </div>
  )
}

export default Chats
