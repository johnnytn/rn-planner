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
  deleteDoc,
} from "firebase/firestore";
import { ProjectModel } from "commons/types/project.types";

/*
- Project
 - template
 - data

*/
const PROJECT_DB = "project";
// const TEMPLATE_DB = "project_template";
// const q = query(collection(db, MODULE_NAME), where("capital", "==", true));
const dbRef = collection(db, PROJECT_DB);
// const templateDBRef = collection(db, TEMPLATE_DB);

export default class ProjectService {
  static async getMany(): Promise<ProjectModel[]> {
    const querySnapshot = await getDocs(dbRef);
    const data: ProjectModel[] = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      if (doc.id) {
        const pro = {
          ...doc.data(),
          id: doc.id,
        } as ProjectModel;
        data.push(pro);
        // console.log({ pro });
      }
    });
    return data;
  }

  static async create(payload: IProjectCreate) {
    try {
      await addDoc(dbRef, payload);
      console.log("Document has been added successfully");
    } catch (error) {
      throw error;
    }
  }
  static async delete(id: string) {
    try {
      // const docRef = doc(db, PROJECT_DB, id);
      await deleteDoc(doc(db, PROJECT_DB, id));
      console.log("Document has been deleted successfully");
    } catch (error) {
      throw error;
    }
  }
}

export interface IProjectCreate {}

interface ProjectGetMany {
  page: number;
  id?: number;
  /* status?: string[];
  storeName?: string; */
}
