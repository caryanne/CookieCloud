window.onload = function() {

  var fb = new Firebase("https://capecod.firebaseio.com");

  var c = 0;

  fb.on("value", function(data) {
    c = data.val() ? data.val().count : 0;
    document.getElementById("count").innerHTML = "Current:" + c;
  });

  function increment() {
    fb.once("value", function(data) {
      fb.set({ count: data.val().count++ });
    });

  }

}
