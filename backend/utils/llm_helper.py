from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

class LLMHelper:
    def __init__(self):
        print("[LLM] Initializing...")

        self.tokenizer = AutoTokenizer.from_pretrained(
            "Qwen/Qwen2.5-1.5B-Instruct",
            trust_remote_code=True
        )

        self.model = AutoModelForCausalLM.from_pretrained(
            "Qwen/Qwen2.5-1.5B-Instruct",
            torch_dtype=torch.float32,
            trust_remote_code=True
        ).eval()

        print("[LLM] Ready")

    def generate(
        self,
        prompt: str,
        max_new_tokens: int = 128,
        temperature: float = 0.3,
        top_p: float = 0.9
    ) -> str:
        """
        Sinh câu trả lời từ LLM
        """

        inputs = self.tokenizer(
            prompt,
            return_tensors="pt"
        )

        with torch.no_grad():
            outputs = self.model.generate(
                **inputs,
                max_new_tokens=max_new_tokens,
                temperature=temperature,
                top_p=top_p,
                do_sample=True
            )

        return self.tokenizer.decode(
            outputs[0],
            skip_special_tokens=True
        )
