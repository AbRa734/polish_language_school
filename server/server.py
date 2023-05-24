import os
from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

handle = ''
tCount = 0

@app.route('/members', methods = ['POST'])
def result():
    data = request.form
    filename = os.path.join(app.static_folder, '/Users/oliwierszafranski/WebstormProjects/ostateczny_projekt_www/data.json')

    with open(filename, 'r+') as file:
        file_data = json.load(file)
        file_data["wiadomosci"].append(data)
        file.seek(0)
        json.dump(file_data, file, indent=4)

    return jsonify(data)

@app.route('/members', methods = ['GET'])
def result_get():
    filename = os.path.join(app.static_folder, '/Users/oliwierszafranski/WebstormProjects/ostateczny_projekt_www/data.json')
    with open(filename) as blog_file:
        data = json.load(blog_file)
        return data
