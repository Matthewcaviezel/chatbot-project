import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender, time }) {
  return (
    <div className={`chat-message ${sender}`}>
      {sender === 'robot' && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}

      <div className="chat-message-content">
        <div className="chat-message-text">{message}</div>
        <div className="chat-message-time">{time}</div>
      </div>

      {sender === 'user' && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  )
}
