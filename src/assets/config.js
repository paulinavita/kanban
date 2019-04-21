import firebase from 'firebase'

  var config = {
    apiKey: "AIzaSyBh0c3AjruAleCtVwDYffoQu3g9T7-28M8",
    authDomain: "kanban2paul.firebaseapp.com",
    databaseURL: "https://kanban2paul.firebaseio.com",
    projectId: "kanban2paul",
    storageBucket: "kanban2paul.appspot.com",
    messagingSenderId: "861285116038"
  };
  firebase.initializeApp(config);
  const database = firebase.database();
  // module.exports = database
  export default database
  