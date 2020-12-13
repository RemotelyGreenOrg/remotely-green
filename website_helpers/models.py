class CalculatorResponse:
    def __init__(self, remote_consumption, remote_total_emission, in_person_consumption, in_person_total_emission, difference):
        self.remote_consumption = remote_consumption
        self.remote_total_emission = remote_total_emission
        self.in_person_consumption = in_person_consumption
        self.in_person_total_emission = in_person_total_emission
        self.difference = difference

    def json(self):
        json = {
            "remote": {
                "consumption": self.remote_consumption,
                "total_emission_co2": self.remote_total_emission
            },
            "in_person": {
                "consumption": self.in_person_consumption,
                "total_emission_co2": self.in_person_total_emission
            },
            "difference": self.difference
        }
        return json

class Device:
    def __init__(self, requestArgs, index):
        if index == 1:
            index = ""
        self.type = requestArgs.get("typeDevice{}".format(index))
        self.model = requestArgs.get("model{}".format(index))
        self.inches = requestArgs.get("inch{}".format(index))
        self.long = requestArgs.get("long{}".format(index))
        self.large = requestArgs.get("large{}".format(index))
        self.purchase_date = requestArgs.get("datePurchase{}".format(index))

class App:
    def __init__(self, requestArgs, index):
        if index == 1:
            index = ""
        self.name = requestArgs.get("app_name{}".format(index))
        self.duration = requestArgs.get("duration{}".format(index))
        self.address_number = requestArgs.get("nbAddress{}".format(index))
        self.address_street = requestArgs.get("street{}".format(index))
        self.address_postcode = requestArgs.get("postalCode{}".format(index))
        self.address_city = requestArgs.get("city{}".format(index))
        self.address_country = requestArgs.get("country{}".format(index))

class Route:
    def __init__(self, requestArgs, index):
        if index == 1:
            index = ""
        self.start_address_number = requestArgs.get("nbAddressStart{}".format(index))
        self.start_address_street = requestArgs.get("streetStart{}".format(index))
        self.start_address_postcode = requestArgs.get("postalCodeStart{}".format(index))
        self.start_address_city = requestArgs.get("cityStart{}".format(index))
        self.start_address_country = requestArgs.get("countryStart{}".format(index))
        self.destination_address_number = requestArgs.get("nbAddressDst{}".format(index))
        self.destination_address_street = requestArgs.get("streetDst{}".format(index))
        self.destination_address_postcode = requestArgs.get("postalCodeDst{}".format(index))
        self.destination_address_city = requestArgs.get("cityDst{}".format(index))
        self.destination_address_country = requestArgs.get("countryDst{}".format(index))
        self.transport = requestArgs.get("transport{}".format(index))