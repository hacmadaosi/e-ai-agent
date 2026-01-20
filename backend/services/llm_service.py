from utils.llm_helper import LLMHelper

_llm: LLMHelper | None = None

def init_llm():
    """Khởi tạo LLM ngay khi server start"""
    global _llm
    if _llm is None:
        _llm = LLMHelper()

def get_llm() -> LLMHelper:
    if _llm is None:
        raise RuntimeError("LLM chưa được khởi tạo")
    return _llm

def process_with_llm(prompt: str):
    try:
        llm = get_llm()
        result = llm.generate(prompt)
        return result, True
    except Exception as e:
        return str(e), False