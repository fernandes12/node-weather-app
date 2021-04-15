const request = require('request')

//Weather API using weatherstack.com -> fernandesjhd@gmail.com hernani2009

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=96a3f1fce0c8cda457da77c6ad3ed997&query='+latitude+','+longitude

    request({url, json: true}, (error, {body}) => {
        //Handling errors
        if (error) {
            callback('Unable to connect to Weather service!', undefined)
        }else if(body.error){
                callback('Unable to find location!', undefined)
            } else {
                console.log(body.current.feelslike)
                callback(undefined,body.current.weather_descriptions[0]+ '. It is currently ' +body.current.temperature+' degrees out, and it feels like '+
                body.current.feelslike+ " degrees out. The humidity is " +body.current.humidity+ "%.")
            }
        })
}

module.exports = forecast