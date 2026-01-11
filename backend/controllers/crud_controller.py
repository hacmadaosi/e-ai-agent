from flask import Blueprint, request, jsonify
from services.crud_service import (createAPI, readAPI, updateAPI, deleteAPI)

crud_bp = Blueprint('crud', __name__)

@crud_bp.route('/crud', methods=['GET'])
def read_item():
    id = request.args.get('id', type=int)
    result = readAPI(id)
    return jsonify({'result': result})

@crud_bp.route('/crud', methods=['POST'])
def create_item():
    data = request.get_json()
    id = data.get('id')
    result = createAPI(id)
    return jsonify(result), 201

@crud_bp.route('/crud', methods=['PUT'])
def update_item():
    data = request.get_json()
    id = data.get('id')
    result = updateAPI(id)
    return jsonify(result)

@crud_bp.route('/crud', methods=['DELETE'])
def delete_item():
    id = request.args.get('id', type=int)
    result = deleteAPI(id)
    return jsonify(result)