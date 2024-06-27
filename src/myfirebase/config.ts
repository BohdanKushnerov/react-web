import { initializeApp } from 'firebase/app';
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getMessaging, getToken } from 'firebase/messaging';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
  databaseURL: import.meta.env.VITE_DB_URL,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);
const storage = getStorage(app, `gs://${import.meta.env.VITE_STORAGE_BUCKET}`);

const messaging = getMessaging();

const myVapidKey = import.meta.env.VITE_VAPID_KEY;

export const requestForToken = async () => {
  try {
    return await getToken(messaging, { vapidKey: myVapidKey });
  } catch (error) {
    console.log(
      'No registration token available. Request permission to generate one.',
      error
    );
  }
};

setPersistence(auth, browserLocalPersistence);

export { auth, db, database, storage, messaging };
