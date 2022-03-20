import ".";
import {
  query,
  getFirestore,
  collection,
  orderBy,
  getDocs as firebaseGetDocs,
  doc,
  getDoc as firebaseGetDoc,
  OrderByDirection,
  Timestamp,
  setDoc,
} from "firebase/firestore";

const db = getFirestore();

export const getDoc = async (collection: string, id: string) => {
  const docRef = doc(db, collection, id);
  const docSnap = await firebaseGetDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};

export const getDocs = async (
  collectionName: string,
  fieldToOrderBy: string,
  order: OrderByDirection
) => {
  const q = query(
    collection(db, collectionName),
    orderBy(fieldToOrderBy, order)
  );
  const docs = await firebaseGetDocs(q);
  const documentsArray: any = [];
  docs.forEach((doc) => {
    documentsArray.push({ id: doc.id, ...doc.data() });
  });
  for (const doc of documentsArray) {
    const date = doc.date as Timestamp;
    doc.date = date.toDate().toISOString();
  }
  return documentsArray;
};

export const createDoc = async (collection: string, id: string, data: {}) => {
  await setDoc(doc(db, collection, id), data);
};
