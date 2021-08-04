from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

TAG = "-------------------->"
@app.route('/', methods=['GET', 'POST'])
def index():
    data=request.data
    print(TAG, data)
    return jsonify('Hello')
        

if __name__ == '__main__':
    app.run()