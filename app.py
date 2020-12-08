from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html")

# POST /calculator
# The body must contain JSON data with the information required for the calculations
# Example:
# {
#   'devices': [
#     {
#       'model': 'MacBook Pro',
#       'bought_date': '2019-11-29T16:54:05+0000', // ISO8601 date format
#     }
#   ],
#   'video': {
#     'app_name': 'Zoom',
#     'duration': 3600, // Time in seconds
#   },
#   'location': {
#     'current': '46.011114 7.737755',
#     'avoided': '46.197233 6.138377',
#     'avoided_transport_mode': 'train' // enum bus, train, plane
#   }
# }
@app.route("/calculator", methods=["GET", "POST"])
def calculator():
    if request.method == "POST":
        data = request.get_json()
        device = data["devices"][0]["model"]
        app_name = data["video"]["app_name"]
        return "Received body:\nComputer: {}\nConferencing app: {}".format(device, app_name)
    else:
        return render_template("remotelyGreen.html")


if __name__ == '__main__':
    app.run()
