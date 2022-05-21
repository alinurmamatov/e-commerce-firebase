import { createContext, useEffect, useState } from "react";
import * as firebaseApp from '../firebase/configFirebase';
import { collection, addDoc, getDocs, doc, onSnapshot, deleteDoc, updateDoc } from "firebase/firestore";
import {ref, uploadBytesResumable, getDownloadURL, deleteObject} from 'firebase/storage';


export const FirestoreContext = createContext();
const refCollection = collection(firebaseApp.firestore, "products");

const FirestoreProvider = ({children}) => {
    const [allProducts, setAllProducts] = useState([]);

    const addProduct = async(newProduct, newImage) => {
        const refHosting = ref(firebaseApp.storage, `images/${newImage.name}`);
        const uploadImage = uploadBytesResumable(refHosting, newImage);
        uploadImage.on(
            'state_changed', (snapshot) => {
            }, (error) => {console.log(error.message)}, () => getDownloadURL(uploadImage.snapshot.ref).then((url) => addDoc(refCollection, {...newProduct, image: url}))
        )
    }

    const getAllProducts = async() => {
        const productsFromFirestore = await getDocs(refCollection);
        setAllProducts(productsFromFirestore.docs.map((product) => ({
            data: product.data(),
            id: product.id
        })))
    }

    useEffect(() => {
        getAllProducts();
    }, [])
 
    const refToFirebase = doc(firebaseApp.firestore, 'products', 'name');
    onSnapshot(refToFirebase, (doc) => {
        getAllProducts();
    })

    const editProduct = async (newData) => {
        const refToDoc = doc(firebaseApp.firestore, 'products', newData.id);
        const cleanData = {...newData};
        delete cleanData.id;
        updateDoc(refToDoc, {...cleanData});
    }
    
    const deleteProduct = async (id, imgToDelete) => {
        await deleteDoc(doc(firebaseApp.firestore, 'products', id));
        deleteImg(imgToDelete);
    }

    const deleteImg = (imgName) => {
        const refToImg = ref(firebaseApp.storage, `images/${imgName}`);
        deleteObject(refToImg).then(() => {}).catch((err) => console.log(err?.message))
    }
    
    const data = {
        allProducts: allProducts,
        addProduct: addProduct,
        deleteProduct: deleteProduct,
        editProduct: editProduct
    }

    return (
        <FirestoreContext.Provider value={data}>
            {children}
        </FirestoreContext.Provider>
    )
}

export default FirestoreProvider;