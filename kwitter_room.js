
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
apiKey: "AIzaSyBZnG8jfrml_v6CHGLD9a-AiaSBq_9KBdw",
authDomain: "class-test-b88dd.firebaseapp.com",
projectId: "class-test-b88dd",
storageBucket: "class-test-b88dd.appspot.com",
messagingSenderId: "370213677707",
appId: "1:370213677707:web:21c4ff9b9b2fc3115f428e"
}
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
