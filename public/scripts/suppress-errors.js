(function() {
  var orgError = console.error;
  console.error = function() {
    var firstArg = arguments[0];
    if (firstArg === true || firstArg === 'true' || 
        (typeof firstArg === 'string' && 
          (firstArg.indexOf('tawk') !== -1 || firstArg.indexOf('WebSocket') !== -1)
        )) {
      return;
    }
    orgError.apply(console, arguments);
  };
})();
