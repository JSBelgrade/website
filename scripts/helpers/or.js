module.exports = function(options) {
  if(Object.values(options.hash).some(val => (typeof(val, "undefined") | val != null))){
    return options.fn(this)
  }
}
