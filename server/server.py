from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/members")
@cross_origin()
def members():
    return {"members":["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(debug=True)
