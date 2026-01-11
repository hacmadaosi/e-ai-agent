from flask import Flask
from controllers.api import api_bp

from dotenv import load_dotenv
import os

load_dotenv()

PORT = int(os.getenv('PORT', 5000))

app = Flask(__name__)
app.register_blueprint(api_bp, url_prefix='/api')

if __name__ == '__main__':
    print(f"Server đang lắng nghe trên cổng {PORT}", flush=True)
    app.run(
    debug=True,
    port=PORT,
    use_reloader=False,
    threaded=False
)