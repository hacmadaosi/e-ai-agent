"use client";
import React, { useEffect, useRef, useState } from 'react'
import rawData from "@/lib/data.json";
import PrintConsole from '../ui/components/PrintConsole';
import { useStateStore } from '@/stories/useAuthStore';
import ChatCard from '../ui/components/ChatCard';
import { ChatData } from '@/types/chat';
import { Input } from '../ui/input';
import { toast } from 'sonner';

const ChatWindow = () => {
  const { user, currentConversationId } = useStateStore();
  const data = rawData as ChatData;
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const conversation = data.conversations.find(conv => conv.conversation_id === currentConversationId);
  const messages = conversation ? conversation.messages : [];

  const [title, setTitle] = useState(conversation?.title || "");
  const [isEditing, setIsEditing] = useState(false);

  // Cập nhật title khi conversation thay đổi
  useEffect(() => {
    setTitle(conversation?.title || "");
    setIsEditing(false);
  }, [conversation]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, currentConversationId]);

  // Xử lý khi input mất focus
  const handleBlur = () => {
    const trimmedTitle = title.trim();
    
    if (trimmedTitle === "") {
      // Hiển thị thông báo lỗi
      toast.error("Tiêu đề không được để trống", {
        description: "Tiêu đề đã được khôi phục về giá trị trước đó",
        duration: 3000,
      });
      
      // Khôi phục lại title cũ
      setTitle(conversation?.title || "");
    } else if (trimmedTitle !== conversation?.title) {
      // Nếu có thay đổi và không trống
      // Gọi API để cập nhật title mới ở đây
    }
    
    setIsEditing(false);
  };

  // Xử lý khi nhấn Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
    
    if (e.key === 'Escape') {
      // Khôi phục title gốc khi nhấn Escape
      setTitle(conversation?.title || "");
      setIsEditing(false);
    }
  };

  // Xử lý khi click vào input để chỉnh sửa
  const handleClick = () => {
    setIsEditing(true);
  };

  return (
    <div className='w-full h-screen flex flex-col items-center'>
      {/* Tiêu đề */}
      {currentConversationId ? (
        <div className="relative my-4">
          <Input 
            className='w-fit text-base border-none shadow-none text-center bg-transparent focus:bg-white focus:border focus:border-gray-300 transition-all px-4 py-2 rounded'
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
            placeholder="Nhập tiêu đề cuộc hội thoại..."
          />
          
        </div>
      ) : (
        <h1 className='text-base my-4'>
          Chào mừng {user ? user.name : "bạn"} đến với Education AI Agent
        </h1>
      )}

      {/* Nội dung hội thoại */}
      <div className="flex flex-col w-1/2 h-full overflow-y-auto scrollbar-hide pb-36">
        {messages.map((message, index) => (
          <ChatCard key={index} role={message.role} message={message.content} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}

export default ChatWindow