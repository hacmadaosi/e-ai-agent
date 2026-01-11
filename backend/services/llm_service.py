from utils.llm_helper import LLMHelper

_llm = None

def get_llm():
    global _llm
    if _llm is None:
        _llm = LLMHelper()
    return _llm

def process_with_llm(prompt: str):
    try:
        llm = get_llm()
        result = llm.generate(prompt)
        return result, True
    except Exception as e:
        return str(e), False