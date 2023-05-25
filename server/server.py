import os
from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

name = ''
last_name = ''
email = ''
message = ''

@app.route('/messages', methods = ['POST'])
def post_method_messages():
    data = request.form
    filename = os.path.join(app.static_folder, 'data.json')

    with open(filename, 'r+') as file:
        file_data = json.load(file)
        file_data["messages"].append(data)
        file.seek(0)
        json.dump(file_data, file, indent=4)

    return jsonify(data)

@app.route('/messages', methods = ['GET'])
def get_method_messages():
    filename = os.path.join(app.static_folder, 'data.json')
    with open(filename) as blog_file:
        data = json.load(blog_file)
        data_to_return = data["messages"]
        return data_to_return

name = ''
last_name = ''
telephone = 0
email = ''
post_code = ''
city = ''
address = ''
studies = ''
degree = ''
additional = ''

@app.route('/reservations', methods = ['POST'])
def post_method_reservations():
    data = request.form
    filename = os.path.join(app.static_folder, 'data.json')

    with open(filename, 'r+') as file:
        file_data = json.load(file)
        file_data["reservations"].append(data)
        file.seek(0)
        json.dump(file_data, file, indent=4)

    return jsonify(data)

@app.route('/reservations', methods = ['GET'])
def get_method_reservations():
    filename = os.path.join(app.static_folder, 'data.json')
    with open(filename) as blog_file:
        data = json.load(blog_file)
        data_to_return = data["reservations"]
        return data_to_return

#@app.route('/messages', methods = ['DELETE'])
#def delete_method(handle):
#    name = request.args.get('name')
#    for item in items:
#        if name == item['name']:
#            items.remove(item)