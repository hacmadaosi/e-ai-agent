import { AuthState } from "@/types/store";
import { User } from "@/types/user";
import { create } from "zustand";
import rawData from "@/lib/data.json";
import { ChatData, Conversation, Message } from "@/types/chat";

export const useStateStore = create<AuthState>((set, get) => ({
    currentConversationId: "",
    user: null,
    conversation: null,
    chatData: null,
    message: "",

    setMessage(message) {
        set({ message })
    },

    setChatData: () => {
        const { user } = get()
        console.log(user)
        const chatData = rawData.find(e => e.user_id === user?._id) as ChatData;
        set({ chatData })
    },

    setCurrentConversationId: (currentConversationId: string | null) => {
        set({ currentConversationId })
    },

    setUser: (user: User | null) => {
        set({ user });
    },

    setConversation: (conversationId: string | null) => {
        const { chatData } = get()
        if (!conversationId) {
            set({ conversation: null })
            return;
        }
        const conversation =
            chatData?.conversations?.find(
                conv => conv.conversation_id === conversationId
            ) || null;
        set({ conversation });
    },

    isSendingMessage: false,

    sendMessage: async (message: string) => {
        const { conversation, chatData, setCurrentConversationId, setConversation } = get();
        set({ isSendingMessage: true });
        try {
            const newMessage = {
                id: `msg-${Date.now()}`,
                role: "user",
                content: message,
                timestamp: new Date().toISOString()
            } as Message;

            if (conversation) {
                conversation?.messages.push(
                    newMessage
                )
            } else {
                const newConversation = {
                    conversation_id: `conv_${Date.now()}`,
                    title: "New Conversation",
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                    messages: [newMessage]
                } as Conversation
                chatData?.conversations.push(newConversation)
                setCurrentConversationId(newConversation.conversation_id)
                setConversation(newConversation.conversation_id)
            }

            console.log("Sending message: ", conversation);

        } catch (error) {
            console.error("Failed to send message:", error);
        } finally {
            set({ isSendingMessage: false });
        }
    }
}));