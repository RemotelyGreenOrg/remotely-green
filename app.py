from flask import Flask, request, render_template, redirect, url_for
from website_helpers import form_handling

app = Flask(__name__)

@app.route("/")
def index():
    return redirect(url_for("calculator"))

@app.route("/calculator")
def calculator():
    # Render template
    return render_template("remotelyGreen.html")

@app.route("/calculator/remote")
def calculatorRemote():
    # Handle data
    data = form_handling.handleRemoteForm(request.args)

    # Show template with data
    return render_template("remotelyGreen.html", data=data)

@app.route("/calculator/in-person")
def calculatorInPerson():
    # Handle data
    data = form_handling.handleInPersonForm(request.args)

    # Show template with data
    return render_template("remotelyGreen.html", data=data)

if __name__ == '__main__':
    app.run()
