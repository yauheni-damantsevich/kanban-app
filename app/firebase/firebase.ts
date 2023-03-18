import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCCNIt5xzBRi8uKYlVMjhSaNQvNH68xPC0",
  authDomain: "kanban-app-527f4.firebaseapp.com",
  projectId: "kanban-app-527f4",
  storageBucket: "kanban-app-527f4.appspot.com",
  messagingSenderId: "349125468510",
  appId: "1:349125468510:web:f7b061b06569c609ec6fcf",
  measurementId: "G-JJ46HFFQ3E",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
