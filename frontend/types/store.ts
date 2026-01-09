import { User } from "./user";

export interface AuthState {
    user: User | null;
    setUser: (user: User) => void;
    currentConversationId: string | null;
    setCurrentConversationId: (id: string) => void;
}