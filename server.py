from flask import Flask, render_template, request, Response

app = Flask(__name__)
@app.route('/')
def serve_index():
    return render_template("index.html")

@app.route('/post_data', methods=['POST'])
def get_request():
    print(request.get_json())
    response = Response("response")
    response.headers['Access-Control-Allow-Origin'] = "*"
    return response

app.run(port=8080)
