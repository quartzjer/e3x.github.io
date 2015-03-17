(function () {
  var base32 = telehash.base32;
  var e3x = telehash.e3x;
  var hashname = telehash.hashname;
  var lob = telehash.lob;

  var xin = document.getElementsByName('xin')[0];
  var xout = document.getElementsByName('xout')[0];

  function updated () {
    var bin = base32.decode(xin.value);
    if(bin.length == 32)
    {
      xout.value = hashname.isHashname(xin.value) ? "valid hashname":"invalid hashname";
    }else{
      var packet = lob.decode(bin);
      if(packet)
      {
        xout.value = "packet: "+JSON.stringify(packet.json);
      }else{
        xout.value = "unknown input length "+bin.length;
      }
    }
  }

  xin.addEventListener('change', updated, false);
  xin.addEventListener('keyup', updated, false);
  
}());
