import ChatWindow from '@/components/Home/ChatWindow'
import MessageBar from '@/components/Home/MessageBar'
import NavigationBar from '@/components/Home/NavigationBar'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
      <NavigationBar />
      <div className='w-full relative'>
      <ChatWindow />
      <MessageBar className='absolute bottom-0 left-1/2 -translate-x-1/2' />
      </div>
    </div>
  )
}

export default page
