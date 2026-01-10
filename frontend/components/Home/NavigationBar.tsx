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
  const [isOpenNavigationBar, setIsOpenNavigationBar] = useState(false);
  const { setUser } = useStateStore();

  return (
    <div className={cn('h-screen bg-gray-50 flex flex-col transition-all duration-300 ease-in-out border-r border-black/5', isOpenNavigationBar ? 'w-80' : 'w-14  items-center')}>
      <div className='flex justify-between items-center py-4 px-4 select-none'>
        {isOpenNavigationBar ? <div className="font-bold"><TypingText text={"Education AI Agent"} speed={80} /></div> : null}
        <ChevronRight size={20} className={cn('cursor-pointer active:scale-90 transition-transform duration-300', isOpenNavigationBar ? 'rotate-180' : 'rotate-0')} onClick={() => setIsOpenNavigationBar(!isOpenNavigationBar)} />
      </div>
      <div className="flex w-full justify-center my-2 transition-all duration-300">
        {isOpenNavigationBar ? <Button text="Trò chuyện mới" variant="rounded" /> : <MessageCirclePlus size={20} />}
      </div>

      {isOpenNavigationBar ? <div>
        <HistoryChat />
        {/* Nút đăng nhập */}
        <div className="flex justify-center">
          <Button text="Đăng nhập" variant="default" onClick={() => {
            const user: User = {
              _id: "user_001",
              name: "Lê Khánh Vinh",
              email: "vinhlekhanh@example.com"
            };
            setUser(user);
          }} />
        </div>
      </div> : null}



    </div>
  )
}

export default NavigationBar
