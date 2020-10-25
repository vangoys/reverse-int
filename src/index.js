module.exports = function reverse (n) {
    
    if (n < 0) return reverse(-n); 
    var str = n.toString(); 
    var strArray = str.split(""); 
    var revArray = strArray.reverse(); 
    var rev = revArray.join(""); 
    return Number(rev);
  }
