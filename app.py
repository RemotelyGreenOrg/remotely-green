from flask import Flask
from flask import request
from werkzeug.datastructures import CombinedMultiDict, MultiDict
from datetime import datetime

app = Flask(__name__)

#@app.route('/')
#def hello_world():
#    return 'Hello World!'
#
#
#if __name__ == '__main__':
#    app.run()


#for having the location of the user
@app.route('/location')
def location():
    url = 'http://freegeoip.net/json/{}'.format(request.headers.get('X-Forwarded-For'))
    r = requests.get(url)
    j = json.loads(r.text)
    location = j['city']

#
@app.route('/remote_meeting', methods['POST'])
def remote(){
    if request.method == 'POST':
        f = request.files['device', 'video']
        f.save['device', 'video']
        return co2EmissionsRemote
}

@app.route('/in_person_meeting', method['POST'])
def inPerson(){
    if request.method == 'POST'
        f = request.files['in_person']
        f.save['in_person']
        return co2EmissionsInPerson
}

#the dictonnary /files that contains the info we need
#separate in 3, but the 2 firsts are used in the remote method
device = MultiDict([
('model', 'user_model_input'),
('brought_date', datetime('date'))
])

video = MultiDict([
('app_name', 'user_app_name'),
('duration', int second)
])

inPerson = MultiDict([
('current_location', location()),
('destination', location()),
('transport', 'user_transport')
])
