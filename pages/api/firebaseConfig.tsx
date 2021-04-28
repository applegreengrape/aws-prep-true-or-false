import firebase from "firebase";
import { resolve } from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: resolve(__dirname, "../../.env") });

const apiKey = process.env.apiKey;
const authDomain = process.env.authDomain;
const projectId = process.env.projectId;
const storageBucket = process.env.storageBucket;
const messagingSenderId = process.env.messagingSenderId;
const appId = process.env.appId;
const measurementId = process.env.measurementId;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

if (!firebase.apps.length) {
  console.log(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
