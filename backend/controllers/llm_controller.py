from flask import Blueprint, request, jsonify
from services.llm_service import process_with_llm

chat_bp = Blueprint('chat', __name__)

@chat_bp.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    prompt = data.get('prompt', '')

    if not prompt:
        return jsonify({'error': 'Thiếu prompt'}), 400
    
    result, success = process_with_llm(prompt)

    if success:
        return jsonify(result), 200
    else:
        return jsonify(result), 500