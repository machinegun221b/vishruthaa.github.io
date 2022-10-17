import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";

//unique firebase object
  const firebaseConfig = {
    apiKey: "AIzaSyDyI6nf8RvECKmbBfim7BGXxr7wONOHK5s",
    authDomain: "contact-d7640.firebaseapp.com",
    projectId: "contact-d7640",
    storageBucket: "contact-d7640.appspot.com",
    messagingSenderId: "961570924369",
    appId: "1:961570924369:web:bf106cd8e8fa4c922a9570",
    measurementId: "G-96GXWZ1KPD"
  };

//initialize firebase server
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  var firestore = firebase.firestore()

//variable to access database collection
const db = firestore.collection("formMails")

//get submit form
let submitButton = document.getElementById('send')

//create eventlistener to allow form submition
submitButton.addEventListener("click", (e) => {
	//prevent default submition
	e.preventDefault()

	//get form values
	let firstName = document.getElementById('name').value
	let emailId = document.getElementById('email').value
	let subject = document.getElementById('subject').value
	let message = document.getElementById('message').value

	//save form data to firebase
	db.doc().set({
		name:firstName,
		email:emailId,
		subject:subject,
		message:message
	}).then( () => {
		console.log("Data saved")
	}).catch((error) => {
		console.log(error)
	})

	//alert
	alert("Your Data Has Been Submitted!")

})
