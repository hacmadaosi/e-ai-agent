import { Role } from '@/types/chat';
import React from 'react'

interface ChatCardProps {
    message: string;
    role: Role;
}

const ChatCard = ({ message, role }: ChatCardProps) => {
  return (
    <div>
      {role === "user" ? (
        <div className="bg-gray-200 w-fit px-4 py-3 max-w-xl rounded-xl ml-auto ">
          {message}
        </div>
      ) : (
        <div className="my-8 border-b py-4">
          {message}
        </div>
      )}
    </div>
  )
}

export default ChatCard
