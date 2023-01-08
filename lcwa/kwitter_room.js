
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCsR4s32dat5E8n9ATbcxWtA4RBg2Bqxqg",
      authDomain: "kwitter-4f154.firebaseapp.com",
      databaseURL: "https://kwitter-4f154-default-rtdb.firebaseio.com",
      projectId: "kwitter-4f154",
      storageBucket: "kwitter-4f154.appspot.com",
      messagingSenderId: "257241813683",
      appId: "1:257241813683:web:452e227a5ebdea58f396c6"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}

getData();

function fn_logOut() {
      window.location.replace("index.html")
}

