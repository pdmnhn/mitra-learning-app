import "./app";
import {
  query,
  getFirestore,
  collection,
  orderBy,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

const db = getFirestore();

export const getDocument = async (collection, id) => {
  const docRef = doc(db, collection, id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};

export const getAllDocumentsFromACollection = async (
  collectionName,
  fieldToOrderBy,
  order
) => {
  const q = query(
    collection(db, collectionName),
    orderBy(fieldToOrderBy, order)
  );
  const docs = await getDocs(q);
  const documentsArray = [];
  docs.forEach((doc) => {
    documentsArray.push({ id: doc.id, ...doc.data() });
  });
  return documentsArray;
};
