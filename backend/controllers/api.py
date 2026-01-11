from flask import Blueprint
from controllers.crud_controller import crud_bp
from controllers.llm_controller import chat_bp

api_bp = Blueprint('api', __name__)

api_bp.register_blueprint(crud_bp)
api_bp.register_blueprint(chat_bp)