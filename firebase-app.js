const firebaseConfig = {
  apiKey: "AIzaSyD...your-api-key...",  // Itt legyen a saját Firebase API kulcsod
  authDomain: "kartyashop-90596.firebaseapp.com",
  databaseURL: "https://kartyashop-90596-default-rtdb.firebaseio.com",  // Firebase adatbázis URL
  projectId: "kartyashop-90596",
  storageBucket: "kartyashop-90596.appspot.com",
  messagingSenderId: "123456789012",  // Itt legyen a saját messagingSenderId-d
  appId: "1:123456789012:web:abcdefgh123456"  // Itt legyen a saját appId-d
};

// Firebase inicializálás
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();
