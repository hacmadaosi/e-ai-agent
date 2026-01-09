import { AuthState } from "@/types/store";
import { User } from "@/types/user";
import { create } from "zustand";

export const useStateStore = create<AuthState>((set, get) => ({
    currentConversationId: null,
    user: null,
    
    setUser: (user: User) => {
        set({ user });
    },

    setCurrentConversationId: (conversationId: string) => {
        set({ currentConversationId: conversationId });
    }
}));