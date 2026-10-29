import { useState, useEffect } from 'react'
import ChatInput from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState(() => {
    const saved = localStorage.getItem('messages')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages))
  }, [chatMessages])

  function getRobotResponse(text) {
    const lower = text.toLowerCase()

    if (lower.includes('halo') || lower.includes('hai')) {
      return 'Halo 👋 Ada yang bisa saya bantu?'
    }

    if (lower.includes('nama')) {
      return 'Saya chatbot React buatan kamu 😄'
    }

    if (lower.includes('tanggal')) {
      return `Hari ini ${new Date().toLocaleDateString()}`
    }

    if (lower.includes('jam')) {
      return `Sekarang jam ${new Date().toLocaleTimeString()}`
    }

    return 'Maaf, saya belum mengerti pertanyaan itu 🤖'
  }

  function sendMessage(text) {
    if (!text.trim()) return

    const userMessage = {
      id: crypto.randomUUID(),
      message: text,
      sender: 'user',
      time: new Date().toLocaleTimeString()
    }

    setChatMessages(prev => [...prev, userMessage])

    setTimeout(() => {
      const robotMessage = {
        id: crypto.randomUUID(),
        message: getRobotResponse(text),
        sender: 'robot',
        time: new Date().toLocaleTimeString()
      }

      setChatMessages(prev => [...prev, robotMessage])
    }, 600)
  }

  function clearMessages() {
    setChatMessages([])
    localStorage.removeItem('messages')
  }

  return (
    <div className="app-container">
      <h2 className="title">React Chatbot</h2>

      <ChatMessages chatMessages={chatMessages} />

      <ChatInput
        sendMessage={sendMessage}
        clearMessages={clearMessages}
      />
    </div>
  )
}

export default App
