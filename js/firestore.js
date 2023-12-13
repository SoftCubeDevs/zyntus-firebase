// Agrega esto a tu archivo JavaScript
const firebaseConfig = {
    apiKey: "AIzaSyAlFDdCAsloxgAHQiqTPjq58D1BPP55aVM",
    authDomain: "zyntusapp.firebaseapp.com",
    projectId: "zyntusapp",
    storageBucket: "zyntusapp.appspot.com",
    messagingSenderId: "252117611142",
    appId: "1:252117611142:web:44f58bcf3dfa5588c7d707",
    measurementId: "G-EDZRHXZG8F"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

/*
db.collection("usuarios").add({
    nombre: "John",
    apellido: "Doe",
    edad: 30
})
.then((docRef) => {
    console.log("Documento añadido con ID:", docRef.id);
})
.catch((error) => {
    console.error("Error al añadir documento:", error);
});
*/