"use client";
import React, { useState } from 'react'
import { cn } from "@/lib/utils";
import { useStateStore } from '@/stories/useAuthStore';

const HistoryChat = () => {
    const { setConversation, user, chatData, currentConversationId, setCurrentConversationId, setMessage} = useStateStore();
    
    return (
        <div className={cn("w-full border-r bg-gray-50 p-4", user ? "block" : "hidden")}>
            <div className="mb-3 text-xs font-semibold text-gray-500">
                LỊCH SỬ HỘI THOẠI
            </div>
            <ul className="space-y-1">
                {
                    chatData?.conversations.map((conv) => (
                        <li
                            key={conv.conversation_id}
                            onClick={() => {
                                setCurrentConversationId(conv.conversation_id)
                                setConversation(conv.conversation_id)
                                setMessage("")
                            }
                            }
                            className={cn(
                                "cursor-pointer rounded-l-sm py-2 text-black text-sm truncate whitespace-nowrap",
                                currentConversationId === conv.conversation_id
                                    ? "bg-gray-100 font-medium px-3 border-r-2 border-black"
                                    : "hover:bg-gray-100 hover:px-3 hover:border-r-2 border-black"
                            )}
                        >
                            {conv.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default HistoryChat;