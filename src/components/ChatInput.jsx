import { useState, useRef, useEffect } from 'react'
import './ChatInput.css'

function ChatInput({ sendMessage, clearMessages }) {
  const [inputText, setInputText] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  function handleSend() {
    if (!inputText.trim()) return
    sendMessage(inputText)
    setInputText('')
  }

  return (
    <div className="chat-input-container">
      <input
        ref={inputRef}
        className="chat-input"
        placeholder="Send a message..."
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className="send-button" onClick={handleSend}>
        Send
      </button>

      <button className="clear-button" onClick={clearMessages}>
        Clear
      </button>
    </div>
  )
}

export default ChatInput
