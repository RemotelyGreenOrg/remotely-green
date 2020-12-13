from website_helpers.calculator_response import CalculatorResponse

def handleRemoteForm(requestArgs):
    # Parameters
    device = requestArgs.get("typeDevice")
    device_model = requestArgs.get("model")
    device_inch = requestArgs.get("inch")
    device_long = requestArgs.get("long")
    device_large = requestArgs.get("large")
    device_date_purchase = requestArgs.get("datePurchase")
    app_name = requestArgs.get("app_name")
    duration = requestArgs.get("duration")
    address_number = requestArgs.get("nbAddress")
    address_street = requestArgs.get("street")
    address_postcode = requestArgs.get("postalCode")
    address_city = requestArgs.get("city")
    address_country = requestArgs.get("country")

    # Pass data to model
    # FIXME: - Mocked
    model_response = CalculatorResponse("TBI: Consumption Category", "TBI: CO2 Total emissions", "TBI: Consumption Category", "TBI: CO2 Total emissions", "TBI: Difference CO2 emissions")

    return model_response.json()

def handleInPersonForm(requestArgs):
    # Parameters
    start_address_number = requestArgs.get("nbAddressStart")
    start_address_street = requestArgs.get("streetStart")
    start_address_postcode = requestArgs.get("postalCodeStart")
    start_address_city = requestArgs.get("cityStart")
    start_address_country = requestArgs.get("countryStart")
    destination_address_number = requestArgs.get("nbAddressDst")
    destination_address_street = requestArgs.get("streetDst")
    destination_address_postcode = requestArgs.get("postalCodeDst")
    destination_address_city = requestArgs.get("cityDst")
    destination_address_country = requestArgs.get("countryDst")
    transport = requestArgs.get("transport")

    # Pass data to model
    # FIXME: - Mocked
    model_response = CalculatorResponse("TBI: Consumption Category", "TBI: CO2 Total emissions", "TBI: Consumption Category", "TBI: CO2 Total emissions", "TBI: Difference CO2 emissions")

    return model_response.json()