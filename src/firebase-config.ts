import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const dbUrl = import.meta.env.VITE_DATABASE_URL;

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "site-editor-70b42.firebaseapp.com",
  databaseURL: dbUrl,
  projectId: "site-editor-70b42",
  storageBucket: "site-editor-70b42.appspot.com",
  messagingSenderId: "748460455351",
  appId: "1:748460455351:web:a00e89fda5d6b5225f6432",
  measurementId: "G-PLMCJHKY1C"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

export { 
  database,
  storage,
  // analytics,
}