import ".";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage();

export const getFileURL = async (filePath: string) => {
  const url = await getDownloadURL(ref(storage, filePath));
  return url;
};
