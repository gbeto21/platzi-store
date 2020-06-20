// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyCUcn5RiHNiKZ9WO_ltBcWWQjCxIQNf_IY",
    authDomain: "platzi-store-7c759.firebaseapp.com",
    databaseURL: "https://platzi-store-7c759.firebaseio.com",
    projectId: "platzi-store-7c759",
    storageBucket: "platzi-store-7c759.appspot.com",
    messagingSenderId: "1002680827009",
    appId: "1:1002680827009:web:6d4d9dbdae24f87732e180"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();