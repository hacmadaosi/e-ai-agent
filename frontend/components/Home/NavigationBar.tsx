"use client";
import { useState } from "react";
import { ChevronRight, MessageCirclePlus } from 'lucide-react'
import { cn } from "@/lib/utils";
import TypingText from "../common/TypingTextProps";
import Button from "../common/Button";
import HistoryChat from "../ui/components/CustomHistoryChat";
import { User } from "@/types/user";
import PrintConsole from "../ui/components/PrintConsole";
import { useStateStore } from "@/stories/useAuthStore";

const NavigationBar = () => {
  const { setUser, user, setConversation, setChatData, setCurrentConversationId } = useStateStore();
  const [isOpenNavigationBar, setIsOpenNavigationBar] = useState(user ? false : true);

  const handleLogin = () => {
    const user: User = {
      _id: "user_001",
      name: "Lê Khánh Vinh",
      email: "vinhlekhanh@example.com"
    };
    setUser(user);
    setChatData(user._id)
  }

  const handleLogout = () => {
    setUser(null);
    setConversation(null);
    setCurrentConversationId(null)
  }

  const handleNewConversation = () => {
    setConversation(null);
    setCurrentConversationId(null)
  }

  return (
    <div className={cn('h-screen bg-gray-50 flex  items-center transition-all duration-300 ease-in-out border-r border-black/5 text-gray-500', 
    isOpenNavigationBar ? 'w-80' : 'w-14  items-center', 
    user ? "flex-col pb-4": 'h-fit w-full fixed z-1 pr-4 py-1')}>
      {/* Điều khiển thanh điều hướng*/}
      <div className='flex justify-between w-full items-center py-4 px-4 select-none'>
        {isOpenNavigationBar ? <div className="font-bold text-black"><TypingText text={"Education AI Agent"} speed={80} /></div> : null}
        {user && <ChevronRight size={20} className={cn('cursor-pointer active:scale-90 transition-transform duration-300 ', isOpenNavigationBar ? 'rotate-180' : 'rotate-0')} onClick={() => setIsOpenNavigationBar(!isOpenNavigationBar)} />}
      </div>

      {/* Nội dung  */}
      {isOpenNavigationBar ? <>
        <div className={cn("hidden w-full justify-center my-2 transition-all duration-300", user && "flex")}>
          <Button text="Trò chuyện mới" variant="rounded" onClick={handleNewConversation} />
        </div>
        <HistoryChat />

        <div className="h-full"></div>

        <Button text={user ? "Đăng xuất" : "Đăng nhập"}  variant="default" onClick={() => {
          if (user) {
            handleLogout();
          } else {
            handleLogin();
          }
        }} />
      </> : <MessageCirclePlus size={20} />}
    </div>
  )
}

export default NavigationBar
