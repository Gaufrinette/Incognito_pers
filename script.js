// Connexion à la chatbox
var username = prompt("Veuillez entrer votre pseudonyme :");

// Événement déclenché lorsqu'un message est envoyé
document.getElementById("send").addEventListener("click", function() {
  var messageInput = document.getElementById("message");
  var message = messageInput.value;
  sendMessage(username, message);
  messageInput.value = "";
});

// Événement déclenché lorsqu'une touche est pressée dans le champ de saisie du message
document.getElementById("message").addEventListener("keypress", function(event) {
  if (event.keyCode === 13) { // 13 correspond à la touche "Entrée"
    document.getElementById("send").click();
  }
});

// Fonction pour envoyer un message à la chatbox
function sendMessage(username, message) {
  var chatlog = document.getElementById("chatlog");
  var newMessage = document.createElement("div");
  newMessage.innerHTML = "<strong>" + username + ":</strong> " + message;
  chatlog.appendChild(newMessage);
  chatlog.scrollTop = chatlog.scrollHeight; // Fait défiler la chatbox automatiquement
}

