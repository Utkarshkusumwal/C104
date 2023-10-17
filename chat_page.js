

const firebaseConfig = {
    apiKey: "AIzaSyBc4PolU9NSqBxeUx8r56PZ0AaxrFw2UCk",
    authDomain: "kwitter-662c2.firebaseapp.com",
    databaseURL: "https://kwitter-662c2-default-rtdb.firebaseio.com",
    projectId: "kwitter-662c2",
    storageBucket: "kwitter-662c2.appspot.com",
    messagingSenderId: "557769083283",
    appId: "1:557769083283:web:3ad1a7595530a5396b8066"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
//   document.getElementById("room_name").innerHTML = "Dear " + user_name + ", Welcome to " + room_name;
function send() 
{ 
    msg = document.getElementById("msg").value; 
    console.log(msg); 
    firebase.database().ref(room_name).push({ 
    name: user_name, 
    message: msg, 
    like: 0 
}); 
document.getElementById("msg").value = ""; 
                                                                          
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
} 

