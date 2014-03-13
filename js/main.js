document.addEventListener('DOMContentLoaded', function(){
    request = new XMLHttpRequest
    request.open('GET', 'https://api.github.com/zen', true);
    el = document.getElementById('zen');
    request.onload = function() {
      if (request.status >= 200 && request.status < 400){
        // Success!
        resp = request.responseText
        el.innerHTML = resp;
      } else {
        // We reached our target server, but it returned an error
        el.innerHTML = "Zen is only as good as times when there are no zen. Such as now. Zen limit reached.";
      }
    }
    request.onerror = function() {
      // There was a connection error of some sort
      el.innerHTML = "Whoa, zen'd out...";
    }
    request.send()
});