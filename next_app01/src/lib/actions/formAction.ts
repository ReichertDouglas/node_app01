import { db } from "@/lib/firabase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ContactFormData } from "../validator/formValidator";

export async function submitContactForm (data : ContactFormData) {
    try{
        const docRef = await addDoc(collection(db, "messagens_contatos"),{
            ...data,
            createdAt : serverTimestamp()
        });
        console.log("Document written with ID: ",docRef.id);
        return true;
    }catch (e) {
        console.error("Error adding document: ",e);
        return false;
    }
}