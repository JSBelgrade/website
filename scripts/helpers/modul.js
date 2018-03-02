module.exports = function(value, modulus, equals, block) {
  if(parseInt(value) % modulus === equals){
    return block.fn(this)
  }
}
