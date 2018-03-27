
module.exports = function (context,cb) {
  /**
  *
  * if you want to send a json instead
  *  return cb(null,{
  *    hello: 'world'
  *  });
  */
  return cb(null, context.secrets.mysecret);
};
