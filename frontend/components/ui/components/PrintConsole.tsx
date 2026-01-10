"use client";
import Button from "@/components/common/Button";
import data from "@/lib/data.json";
import { useStateStore } from "@/stories/useAuthStore";

interface PrintConsoleProps {
    onClick?: () => void;
}

const PrintConsole = ({ onClick }: PrintConsoleProps) => {
    return (
        <div>
            <Button text="Print Console" onClick={onClick} />
        </div>
    )
}

export default PrintConsole
