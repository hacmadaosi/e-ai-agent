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
  const { user, conversation, currentConversationId } = useStateStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [title, setTitle] = useState(conversation?.title || "");
  const [isEditing, setIsEditing] = useState(false);

  // Cập nhật title khi conversation thay đổi
  useEffect(() => {
    setTitle(conversation?.title || "");
    setIsEditing(false);
  }, [currentConversationId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation?.messages, currentConversationId]);

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
      {conversation ? (
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
        <h1 className='text-3xl my-4 absolute bottom-1/2'>
          {user ? `Chào ${user.name.trim().split(/\s+/).pop()}, tôi có thể giúp gì cho bạn?` : "Chào mừng bạn đến với Education AI Agent"} 
        </h1>
      )}

      {/* Nội dung hội thoại */}
      <div className="flex flex-col w-1/2 h-full gap-8 overflow-y-auto scrollbar-hide pb-36">
        {conversation?.messages.map((message, index) => (
          <ChatCard key={index} role={message.role} message={message.content} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}

export default ChatWindow