from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route('/')
def hello():
    return 'Hello, backend server!'

@app.route('/api/videos', methods=['GET'])
def get_videos():
    # Logic to retrieve videos from a database or other data source
    # Return a JSON response with the retrieved videos
    videos = [
        {
            'id': 1,
            'name': 'Video 1',
            'url': 'https://example.com/video1.mp4',
            'rating': 4,
            'tags': ['Action', 'Adventure'],
        },
        {
            'id': 2,
            'name': 'Video 2',
            'url': 'https://example.com/video2.mp4',
            'rating': 3,
            'tags': ['Comedy'],
        },
    ]
    return jsonify(videos)

if __name__ == '__main__':
    app.run(debug=True)
