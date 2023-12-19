import React,{useState} from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc } from "firebase/firestore";
import toast from 'react-hot-toast';

const firebaseConfig = {
    apiKey:import.meta.env.VITE_APP_FIREBASE_API ,
    authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const Feedback=()=>{
    const [star,setStar]=useState(0);
    const [feedback,setFeedback]=useState("")

    const positiveFeedBack=async()=>{
        try {
            const storeFeed = await addDoc(collection(db, "positive-feedback"), {
              feedback: feedback,
              rate: star
            });
            
            //console.log("Document written with ID: ", storeFeed.id);
            toast.success("Thank you for your feedback")
        } catch (e) {
            //console.error("Error adding document: ", e);
            toast.error("Something went wrong")
        }
        finally{
            setStar(0)
            setFeedback("")
        
        }
    }
    const negativeFeedBack=async()=>{
        try {
            const storeFeed = await addDoc(collection(db, "negative-feedback"), {
                feedback: feedback
            });
          
            //console.log("Document written with ID: ", storeFeed.id);
            toast.success("Thank you for your feedback")
        } catch (e) {
            //console.error("Error adding document: ", e);
            toast.error("Something went wrong")
        }
        finally{
            setStar(0)
            setFeedback("")
        
        }
    }
    
    return({star,setStar,positiveFeedBack,negativeFeedBack,feedback,setFeedback})
}