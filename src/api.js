import express from "express";
var router = express.Router();
var unirest = require('unirest');
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});
router.get('/test', function(req, res) {
  res.json({ message: 'hooray! welcome to our test api!' });
});

router.post('/submitUser', function(req, res) {
  var body = req.body;
  let data = {
      "secret_key": "A0Zr98j3yXLWXRT",
      "username":body.username,
      "phone_number": body.phone_number,
      "email":body.email
  }
  unirest.post('http://api.submitlocal.io/')
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .send(data)
  .end(function (response) {
    res.send(response.body);
  });
  //res.json({ message: 'hooray! welcome to our test api!' });
});
router.post('/submitBusiness', function(req, res) {
  var data = req.body;
  data["secret_key"]= "A0Zr98j3yXLWXRT";
console.log(data,"data");
  unirest.post('http://api.submitlocal.io/data/')
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .send(data)
  .end(function (response) {
    console.log(response.body,"submit business");
    var resp = {
      'new_token':'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG4iOiI5OTAyOTE0MjA3IiwidXNlcm5hbWUiOiJha2hpbGVzaCIsImVtYWlsIjoiYWtoaWxlc2h'
    }
    res.send(response.body);
  });
})

function isObject(val) {
    if (val === null) { return false;}
    return ( (typeof val === 'function') || (typeof val === 'object') );
}
  //search
  router.get('/search', function(req, res) {
    var token = req.query.query;
    console.log(req.query,"query");
  //  data["secret_key"]= "A0Zr98j3yXLWXRT";
  var url = 'http://api.submitlocal.io/results/?token='+token;
  console.log(url,"url");
    unirest.get(url)
    .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
    .end(function (response) {
      console.log(response.body);
      let resp = {
        'response': {
            'ablocal': [
                {
                  'name': 'user store',
                  'phone_number': '9093230203',
                  'state': 'Karnataka',
                  'address': 'Brigade Road',
                  'city': 'Bangalore',
                  'zipcode': '560085'
              }
            ],
            'yelp': [],
            'facebook': [
                {
                  'name': 'user store',
                  'phone_number': '9902914207',
                  'state': 'Karnataka',
                  'address': 'Brigade Road',
                  'city': 'Bangalore',
                  'zipcode': '560085'
              }
            ]
            }
      }
      if(isObject(response.body)){
        res.send({
          status:true,
          data:response.body}
        );
      }else{
        res.send({"status":false});
      }
    });


  //res.json({ message: 'hooray! welcome to our test api!' });
});

module.exports={
  router:router
}
