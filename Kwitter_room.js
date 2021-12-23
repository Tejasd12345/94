
var firebaseConfig = {
    apiKey: "AIzaSyCXXGMRD7_NRYVSeOPnOFkCKx1xHH5MTwU",
    authDomain: "kwitter-project-5abe5.firebaseapp.com",
    databaseURL: "https://kwitter-project-5abe5-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-5abe5",
    storageBucket: "kwitter-project-5abe5.appspot.com",
    messagingSenderId: "133318735833",
    appId: "1:133318735833:web:6f5911f828c818a4088bc8"
  };
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";

          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
    }
