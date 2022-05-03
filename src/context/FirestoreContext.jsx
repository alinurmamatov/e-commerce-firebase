import { createContext, useEffect, useState } from "react";
import * as firebaseApp from '../firebase/configFirebase';
import { collection, addDoc, getDocs } from "firebase/firestore";
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';

export const FirestoreContext = createContext();
const refCollection = collection(firebaseApp.firestore, "products");

const FirestoreProvider = ({children}) => {
    const [allProducts, setAllProducts] = useState([]);

    const addProduct = async(newProduct, newImage) => {
        const refHosting = ref(firebaseApp.storage, `images/${newImage.name}`);
        const uploadImage = uploadBytesResumable(refHosting, newImage);
        uploadImage.on(
            'state_changed', (snapshot) => {
                //const process = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                //console.log(process);
            }, (error) => {console.log(error.message)}, () => getDownloadURL(uploadImage.snapshot.ref).then((url) => addDoc(refCollection, {...newProduct, image: url}))
        )
        /* try {
            await addDoc(refCollection, newProduct);
        } catch(error) {
            console.log(error);
        } */
    }

    const getAllProducts = async() => {
        const productsFromFirestore = await getDocs(refCollection);
        setAllProducts(productsFromFirestore.docs.map((product) => ({
            data: product.data(),
            id: product.id
        })))
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    const data = {
        allProducts: allProducts,
        addProduct: addProduct
    }

    return (
        <FirestoreContext.Provider value={data}>
            {children}
        </FirestoreContext.Provider>
    )
}

export default FirestoreProvider;