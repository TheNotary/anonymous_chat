var client;
var channelName;

function setupClientForFaye() {
  var url = "/faye";
  client = new Faye.Client(url, {timeout: 120});

  channelName = $("#channel-name").val();
  var pass = $("#password").val();

  var subscription = client.subscribe(channelName, function(msg) {
    renderNewMessage(msg);
  });
}

function sendMessage(){
  var speaker = $('#name').val();
  var message = $('#message').val();
  client.publish(channelName, {message: message, speaker: speaker });
}

function renderNewMessage(payload){
  var markup = "<div>";

  markup += "<span>" + payload.speaker + ": </span>";
  markup += "<span>" + payload.message + "</span>";

  markup += "</div>";
  $('#display').html($('#display').html() + markup);
  // alert(payload.message);

}
