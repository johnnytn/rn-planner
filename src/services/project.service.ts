// import { api } from "./api.service";
import { db } from "../../src/fireBaseConfig";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";

/*
- Project
 - template
 - data


*/
const MODULE_NAME = "project";
// const q = query(collection(db, MODULE_NAME), where("capital", "==", true));
const dbRef = collection(db, MODULE_NAME);

export default class ProjectService {
  static async getMany() {
    const querySnapshot = await getDocs(dbRef);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    console.log("--------------------");
  }

  static async create() {
    try {
      const payload = {
        name: "project 3",
        description: "desc",
      };

      await addDoc(dbRef, payload);
      console.log("Document has been added successfully");
    } catch (error) {
      throw error;
    }
  }
}

interface ProjectGetMany {
  page: number;
  id?: number;
  /* status?: string[];
  storeName?: string; */
}
