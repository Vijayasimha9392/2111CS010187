from flask import Flask, jsonify
import requests
from collections import deque
import logging

app = Flask(__name__)

WINDOW_SIZE = 10
numbers_window = deque(maxlen=WINDOW_SIZE)
previous_state = []

logging.basicConfig(level=logging.DEBUG)

def fetch_numbers(number_type):
    url = f"http://20.244.56.144/test/{number_type}"  
    headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzODczMzMyLCJpYXQiOjE3MjM4NzMwMzIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjU3ZWUzYTRhLTVhMzAtNDQ2Zi1iOWVjLWY0NmYzYTRmODYyZiIsInN1YiI6IjIxMTFjczAxMDE4N0BtYWxsYXJlZGR5dW5pdmVyc2l0eS5hYy5pbiJ9LCJjb21wYW55TmFtZSI6Ik1hbGxhIFJlZGR5IFVuaXZlcnNpdHkiLCJjbGllbnRJRCI6IjU3ZWUzYTRhLTVhMzAtNDQ2Zi1iOWVjLWY0NmYzYTRmODYyZiIsImNsaWVudFNlY3JldCI6ImhXUGZhZmpDamZpTERpTUgiLCJvd25lck5hbWUiOiJUQU1NSU5FTkkgVklKQVlBU0lNSEEiLCJvd25lckVtYWlsIjoiMjExMWNzMDEwMTg3QG1hbGxhcmVkZHl1bml2ZXJzaXR5LmFjLmluIiwicm9sbE5vIjoiMjExMUNTMDEwMTg3In0.5t1asReZ9gWSKgAM75cmo1si_im_CELmVDosKo51ymc"  
    }
    logging.debug(f"Fetching data from {url}")
    try:
        response = requests.get(url, headers=headers, timeout=2)
        logging.debug(f"Response status code: {response.status_code}")

        response.raise_for_status()

        data = response.json()
        logging.debug(f"Response JSON: {data}")

        return data.get('numbers', [])

    except requests.RequestException as e:
        logging.error(f"Request failed: {e}")
        return []

    except ValueError as e:
        logging.error(f"Failed to decode JSON response: {e}")
        return []

def calculate_average(numbers):
    return sum(numbers) / len(numbers) if numbers else 0

@app.route('/numbers/<numberid>', methods=['GET'])
def get_numbers(numberid):
    global previous_state

    api_endpoint = f"http://20.244.56.144/test/{numberid}"  

    numbers = fetch_numbers(api_endpoint)
    if not numbers:
        return jsonify({"error": "Failed to fetch numbers or timeout"}), 500

    global numbers_window
    previous_state = list(numbers_window)
    for number in numbers:
        if number not in numbers_window:
            numbers_window.append(number)

    window_list = list(numbers_window)
    average = calculate_average(window_list)

    response = {
        "windowPrevState": previous_state,
        "windowCurrState": window_list,
        "numbers": numbers,
        "avg": round(average, 2)
    }

    return jsonify(response)

@app.route('/', methods=['GET'])
def home():
    return "Welcome to the Average Calculator Service", 200

if __name__ == '__main__':
    app.run(port=9876, debug=True)