"use client";
import React, { useState } from 'react'
import data from "@/lib/data.json";
import { cn } from "@/lib/utils";
import { useStateStore } from '@/stories/useAuthStore';

const HistoryChat = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const conversations = data.user_id === user._id ? data.conversations : [];
    const { currentConversationId, setCurrentConversationId } = useStateStore();


    return (
        <nav className="h-full w-full border-r bg-gray-50 p-3">
            <div className="mb-3 text-xs font-semibold text-gray-500">
                LỊCH SỬ HỘI THOẠI
            </div>
            <ul className="space-y-1">
                {conversations.map((conv) => (
                    <li
                        key={conv.conversation_id}
                        onClick={() => setCurrentConversationId(conv.conversation_id)}
                        className={cn(
                            "cursor-pointer rounded-md px-3 py-2 text-sm truncate whitespace-nowrap",
                            currentConversationId === conv.conversation_id
                                ? "bg-gray-200 font-medium"
                                : "hover:bg-gray-100"
                        )}
                    >
                        {conv.title}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default HistoryChat;