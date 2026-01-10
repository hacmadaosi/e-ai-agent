export type Role = "user" | "bot" | "system";

export interface Message {
  id: string;
  role: Role;
  content: string;
  timestamp: string;
}

export interface Conversation {
  conversation_id: string;
  title: string;
  created_at: string;
  updated_at: string;
  messages: Message[];
}

export interface ChatData {
  user_id: string;
  username: string;
  email: string;
  conversations: Conversation[];
}