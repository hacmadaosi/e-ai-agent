from llama_cpp import Llama
from pathlib import Path
import os
from dotenv import load_dotenv
load_dotenv()

MODEL_NAME = os.getenv('MODEL_NAME')

BASE_DIR = Path(__file__).resolve().parent.parent 
MODEL_PATH = BASE_DIR / "models" / MODEL_NAME

class LLMHelper:
    def __init__(self):
        print("[LLM] Initializing...")

        self.llm = Llama(
            model_path=str(MODEL_PATH),
            n_ctx=2048,
            n_threads=8,
            verbose=False,
            n_gpu_layers=6
        )
        print("[LLM] Ready")
        
    def generate(self, message):
        system_prompt = (
            "Bạn là trợ lý học tập AI. "
            "Hãy trả lời các câu hỏi về học tập một cách chính xác, "
            "dễ hiểu, ngắn gọn và có ví dụ khi cần."
        )

        prompt = (
            "<|im_start|>system\n"
            f"{system_prompt}\n"
            "<|im_end|>\n"
            "<|im_start|>user\n"
            f"{message}\n"
            "<|im_end|>\n"
            "<|im_start|>assistant\n"
        )

        return self.llm(prompt, 
                max_tokens=256, 
                temperature=0.7,
                top_p=0.9,
                top_k=40,
                repeat_penalty=1.1,
                stop=["<|im_end|>"],
                echo=False)["choices"][0]["text"]