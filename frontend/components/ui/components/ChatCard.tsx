import React from 'react'

interface ChatCardProps {
    message: string;
}

const ChatCard = ({ message }: ChatCardProps) => {
  return (
    <div>
      {message}
    </div>
  )
}

export default ChatCard
