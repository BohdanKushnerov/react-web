importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: '1111111111111',
  authDomain: '22222222222',
  projectId: '33333333333333',
  storageBucket: '4444444444444444444',
  messagingSenderId: '555555555555555555555',
  appId: '666666666666666666666',
  measurementId: '77777777777777777777777777',
  databaseURL: '8888888888888888888888',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(async function (payload) {
  await self.registration.showNotification(payload.data.title, {
    body: payload.data.body,
  });
});
