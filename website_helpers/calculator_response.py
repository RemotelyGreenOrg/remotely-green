class CalculatorResponse:
    def __init__(self, remoteConsumption, remoteTotalEmission, inPersonConsumption, inPersonTotalEmission, difference):
        self.remoteConsumption = remoteConsumption
        self.remoteTotalEmission = remoteTotalEmission
        self.inPersonConsumption = inPersonConsumption
        self.inPersonTotalEmission = inPersonTotalEmission
        self.difference = difference

    def json(self):
        json = {
            "remote": {
                "consumption": self.remoteConsumption,
                "total_emission_co2": self.remoteTotalEmission
            },
            "in_person": {
                "consumption": self.inPersonConsumption,
                "total_emission_co2": self.inPersonTotalEmission
            },
            "difference": self.difference
        }
        return json