from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/")
def hello_world():
    return redirect(url_for("calculator"))

@app.route("/calculator")
def calculator():
    # Default parameters
    data = {
            "remote": {
                "consumption": "Submit form!",
                "total_emission_co2": "Submit form!"
            },
            "in_person": {
                "consumption": "Submit form!",
                "total_emission_co2": "Submit form!"
            },
            "difference": "Submit form!"
        }

    # Render template
    return render_template("remotelyGreen.html", data=data)

@app.route("/calculator/remote")
def calculatorRemote():
    # Get parameters
    device = request.args.get("typeDevice")
    device_model = request.args.get("model")
    device_inch = request.args.get("inch")
    device_long = request.args.get("long")
    device_large = request.args.get("large")
    device_date_purchase = request.args.get("datePurchase")
    app_name = request.args.get("app_name")
    duration = request.args.get("duration")
    address_number = request.args.get("nbAddress")
    address_street = request.args.get("street")
    address_postcode = request.args.get("postalCode")
    address_city = request.args.get("city")
    address_country = request.args.get("country")

    # Pass data to model
    # FIXME: To be implemented
    data = {
            "remote": {
                "consumption": "TBI: Consumption Category",
                "total_emission_co2": "TBI: CO2 Total emissions"
            },
            "in_person": {
                "consumption": "TBI: Consumption Category",
                "total_emission_co2": "TBI: CO2 Total emissions"
            },
            "difference": "TBI: Difference CO2 emissions"
        }

    # Show template with data
    return render_template("remotelyGreen.html", data=data)

@app.route("/calculator/in-person")
def calculatorInPerson():
    # Get parameters
    start_address_number = request.args.get("nbAddressStart")
    start_address_street = request.args.get("streetStart")
    start_address_postcode = request.args.get("postalCodeStart")
    start_address_city = request.args.get("cityStart")
    start_address_country = request.args.get("countryStart")
    destination_address_number = request.args.get("nbAddressDst")
    destination_address_street = request.args.get("streetDst")
    destination_address_postcode = request.args.get("postalCodeDst")
    destination_address_city = request.args.get("cityDst")
    destination_address_country = request.args.get("countryDst")
    transport = request.args.get("transport")

    # Pass data to model
    # FIXME: To be implemented
    data = {
            "remote": {
                "consumption": "TBI: Consumption Category",
                "total_emission_co2": "TBI: CO2 Total emissions"
            },
            "in_person": {
                "consumption": "TBI: Consumption Category",
                "total_emission_co2": "TBI: CO2 Total emissions"
            },
            "difference": "TBI: Difference CO2 emissions"
        }

    # Show template with data
    return render_template("remotelyGreen.html", data=data)

if __name__ == '__main__':
    app.run()
