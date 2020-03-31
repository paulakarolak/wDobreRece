import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA7JuGKFIcPYtownNbi_agwOlx3_RcCChs",
    authDomain: "wdobrerece-b0342.firebaseapp.com",
    databaseURL: "https://wdobrerece-b0342.firebaseio.com",
    projectId: "wdobrerece-b0342",
    storageBucket: "wdobrerece-b0342.appspot.com",
    messagingSenderId: "307663260101",
    appId: "1:307663260101:web:fac8a1604583ba395c23ac",
    measurementId: "G-P1NGK8EFF4"
  };

  const fire = firebase.initializeApp(config);
  export default fire;