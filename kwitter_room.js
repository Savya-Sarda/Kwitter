
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBz0wA59tizKLrHYEGtnX0TunBgNhdUKME",
      authDomain: "kwitter-app-2bc22.firebaseapp.com",
      databaseURL: "https://kwitter-app-2bc22-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-2bc22",
      storageBucket: "kwitter-app-2bc22.appspot.com",
      messagingSenderId: "885504915722",
      appId: "1:885504915722:web:5b41ca711061d5468062f3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function logout(){

}