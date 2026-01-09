import Button from "@/components/common/Button";
import data from "@/lib/data.json";
import { useStateStore } from "@/stories/useAuthStore";

interface PrintConsoleProps {
    onClick?: () => void;
}

const PrintConsole = ({ onClick }: PrintConsoleProps) => {
    const {currentConversationId} =  useStateStore();
    const actionTest = () => {
        // const user = JSON.parse(localStorage.getItem("user") || "{}");
        console.log("user from PrintConsole:", currentConversationId);
    }

    return (
        <div>
            <Button text="Print Console" onClick={actionTest} />
        </div>
    )
}

export default PrintConsole
