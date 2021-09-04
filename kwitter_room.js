const firebaseConfig = {
  apiKey: "AIzaSyDrpq_d_Am7fVhf9hujBD90ELx3J2xoC5k",
  authDomain: "quitter-part-4.firebaseapp.com",
  databaseURL: "https://quitter-part-4-default-rtdb.firebaseio.com",
  projectId: "quitter-part-4",
  storageBucket: "quitter-part-4.appspot.com",
  messagingSenderId: "939645973375",
  appId: "1:939645973375:web:0f6a2ca64b3b572383204a"
};

const app = initializeApp(firebaseConfig);

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();

var user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_it() {

  var room_name = document.getElementById("user_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitterpage.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function Logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}