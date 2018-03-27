
const request = require('request');

module.exports = function (context,cb) {
  return request('https://google.com',(err,response,body)=>{
    return cb(null, response.statusCode);
  });
  
};
