(function () {
  var xin = document.getElementsByName('xin')[0];
  var xout = document.getElementsByName('xout')[0];

  function updated () {
    xout.value = xin.value;
  }

  xin.addEventListener('change', updated, false);
  xin.addEventListener('keyup', updated, false);
  
}());
