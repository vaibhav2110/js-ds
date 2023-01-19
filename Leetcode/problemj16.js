var validIPAddress = function (IP) {
  let arr = IP.split(".");
  if (arr.length <= 1) {
    return handleIPV6Address(IP);
  } else {
    return handleIPV4Address(IP);
  }
};

var handleIPV4Address = function (IP) {
  let comp = IP.split(".");
  if (comp.length !== 4) {
    return "Neither";
  }
  //console.log(comp);
  for (let i = 0; i < comp.length; i++) {
    let el = comp[i];
    if(!isFinite(el)){
        return "Neither";
    }
    if(el.indexOf('e') !== -1){
        return "Neither";
    }
    //let alph = el.filter(e => e)
    if (Number(el) < 0 || Number(el) > 255) {
      return "Neither";
    } else if (el.length > 0 && el[0] == 0) {
      return "Neither";
    }
    //console.log(el);
  }
  return "IPv4";
};

var handleIPV6Address = function (IP) {
  let comp = IP.split(":");
  if (comp.length !== 8) {
    return "Neither";
  }
  //console.log(comp);
  for (let i = 0; i < comp.length; i++) {
    let el = comp[i];
    let inValidHex = el.split('').filter(e => e.toLowerCase() > 'f');
    if(inValidHex.length > 0){
        return "Neither";
    };
    if(el.length === 0){
        return "Neither";
    }
    if(el.length === 5 && el[0] == 0){
        return "Neither";
    }
    //console.log(el);
  }
  return "IPv6";
};

module.exports = () => console.log(validIPAddress("192.0.0.1"));
