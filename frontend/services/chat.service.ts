import api from "@/lib/axios";

export const chatService = {
    sendMessage : async (userId: string, msg: string) => {
        const res = await api.post("/chat", {
            id: userId,
            prompt: msg
        })
        return res.data
    }
    
}