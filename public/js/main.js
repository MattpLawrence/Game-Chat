const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const roomName = document.getElementById("room-name");
const userList = document.getElementById("users");

// get username and room from url
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const socket = io();

// Join chatroom
socket.emit("joinRoom", { username, room });

// get room and users
socket.on("roomUsers", ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

//Message from server
socket.on("message", (message) => {
  console.log(message);
  outputMessage(message);

  //  scroll down after each message received
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// massage submit
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // grab the value of the message when submitted
  const msg = e.target.elements.msg.value;

  // emit the submitted massage to the server
  socket.emit("chatMessage", msg);

  // clear the input
  e.target.elements.msg.value = "";
  // focus back on input to be ready for next message
  e.target.elements.msg.focus();
});

// Output message to DOM
function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `
  <p class="meta">${message.username}: <span>${message.time}</span></p>
  <p class="text">
    ${message.text}
  </p>`;
  document.querySelector(".chat-messages").appendChild(div);
}

// add room name to dom
function outputRoomName(room) {
  roomName.innerText = room;
}

//add users to dom
function outputUsers(users) {
  userList.innerHTML = `
  ${users.map((user) => `<li>${user.username}</li>`).join("")}
  `;
}
