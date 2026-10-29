import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
  const ref = useRef(null)

  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight
  }, [chatMessages])

  return (
    <div className="chat-messages-container" ref={ref}>
      {chatMessages.map(msg => (
        <ChatMessage key={msg.id} {...msg} />
      ))}
    </div>
  )
}

export default ChatMessages
