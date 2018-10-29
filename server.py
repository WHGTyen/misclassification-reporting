from flask import Flask, render_template, request, Response

app = Flask(__name__)
@app.route('/')
def serve_index():
    return render_template("index.html")

@app.route('/post_data', methods=['POST'])
def get_request():
    print(request.get_json())

app.run(port=8080)