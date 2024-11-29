const request = require('request')

request('http://localhost:8081', error => {
  if (error) {
    throw error
  }
})
