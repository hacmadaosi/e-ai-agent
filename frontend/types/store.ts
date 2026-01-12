import { Conversation, ChatData } from "./chat";
import { User } from "./user";

export interface AuthState {
    user: User | null;
    setUser: (user: User | null) => void;
    conversation: Conversation | null;
    chatData: ChatData | null;
    setChatData: (id: string | null) => void;
    setConversation: (id: string | null) => void;
    sendMessage: (message: string) => void;
    isSendingMessage: boolean;
    currentConversationId: string | null;
    setCurrentConversationId: (ConversationId: string | null) => void;
    message: string;
    setMessage: (message: string) => void
}