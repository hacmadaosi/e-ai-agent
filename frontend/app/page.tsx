import ChatWindow from '@/components/Home/ChatWindow'
import MessageBar from '@/components/Home/MessageBar'
import NavigationBar from '@/components/Home/NavigationBar'
import { cn } from '@/lib/utils';
import { useStateStore } from '@/stories/useAuthStore';
import React, { use } from 'react'


const page = () => {
  return (
    <div className='flex'>
      <NavigationBar />
      <div className='w-full relative'>
      <ChatWindow />
      <MessageBar  />
      </div>
    </div>
  )
}

export default page
