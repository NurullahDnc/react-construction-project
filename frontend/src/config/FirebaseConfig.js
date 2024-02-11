import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// export default app

// Firebase başlatma işlemi asenkron olduğu için, işlemin tamamlanmasını beklemek için aşağıdaki gibi bir yöntem kullanabilirsiniz
// Eğer başka bir asenkron işlem yapacaksanız, bu işlemi buraya ekleyebilirsiniz
// Örneğin, Firestore veritabanına erişim veya kullanıcı oturumu açma işlemi

// Örnek olarak bir Firestore bağlantısı
// const db = getFirestore(app);

// Şimdi db veya başka Firebase servislerini kullanabilirsiniz
