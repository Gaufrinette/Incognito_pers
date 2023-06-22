// Connexion à la chatbox via WebSocket
var socket = new WebSocket("ws://localhost:8080");

// Événement déclenché lorsque la connexion WebSocket est établie
socket.onopen = function(event) {
  var username = prompt("Veuillez entrer votre pseudonyme :");
  var data = {
    type: "username",
    username: username
  };
  socket.send(JSON.stringify(data));
};

// Événement déclenché lorsque le serveur envoie un message via WebSocket
socket.onmessage = function(event) {
  var messageData = JSON.parse(event.data);
  var username = messageData.username;
  var message = messageData.message;
  showMessage(username, message);
};

// Événement déclenché lorsqu'un message est envoyé
document.getElementById("send").addEventListener("click", function() {
  var messageInput = document.getElementById("message");
  var message = messageInput.value;
  sendMessage(message);
  messageInput.value = "";
});

// Événement déclenché lorsqu'une touche est pressée dans le champ de saisie du message
document.getElementById("message").addEventListener("keypress", function(event) {
  if (event.keyCode === 13) { // 13 correspond à la touche "Entrée"
    document.getElementById("send").click();
  }
});

// Fonction pour envoyer un message à la chatbox via WebSocket
function sendMessage(message) {
  var data = {
    type: "message",
    message: message
  };
  socket.send(JSON.stringify(data));
}

// Fonction pour afficher un message dans la chatbox
function showMessage(username, message) {
  var chatlog = document.getElementById("chatlog");
  var newMessage = document.createElement("div");
  newMessage.innerHTML = "<strong>" + username + ":</strong> " + message;
  chatlog.appendChild(newMessage);
  chatlog.scrollTop = chatlog.scrollHeight; // Fait défiler la chatbox automatiquement
}
