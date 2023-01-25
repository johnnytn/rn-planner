// import { api } from "./api.service";
import { db } from "../../src/fireBaseConfig";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  ProjectModel,
  ProjectMonthlyDataModel,
} from "commons/types/project.types";
import { getProjectDataId } from "commons/utils/formatter";

/*
- Project
 - template
 - data

*/
const PROJECT_DB = "project";
const PROJECT_DATA_DB = "project_data";
// const q = query(collection(db, MODULE_NAME), where("capital", "==", true));
const projectDbRef = collection(db, PROJECT_DB);
// const projectDataDbRef = collection(db, PROJECT_DATA_DB);

export default class ProjectService {
  static async getMany(): Promise<ProjectModel[]> {
    const querySnapshot = await getDocs(projectDbRef);
    const data: ProjectModel[] = [];
    querySnapshot.forEach((doc) => {
      if (doc.id) {
        const pro = {
          ...doc.data(),
          id: doc.id,
        } as ProjectModel;
        data.push(pro);
      }
    });
    return data;
  }

  static async get(id: string): Promise<ProjectModel | null> {
    const docRef = doc(db, PROJECT_DB, id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data() as ProjectModel;

    return data;
  }

  static async create(payload: ProjectCreateRequest) {
    try {
      await addDoc(projectDbRef, payload);
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

  static async saveMonthlyData(payload: ProjectMonthlyDataModel) {
    try {
      const id =
        payload.id || getProjectDataId(payload.projectId, payload.currentMonth);
      await setDoc(doc(db, PROJECT_DATA_DB, id), payload);
      console.log("Data has been saved successfully");
    } catch (error) {
      throw error;
    }
  }

  static async getMonthlyData(
    id: string
  ): Promise<ProjectMonthlyDataModel | null> {
    const docRef = doc(db, PROJECT_DATA_DB, id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data() as ProjectMonthlyDataModel;

    return data;
  }
}

export interface ProjectCreateRequest {}

/* interface ProjectGetMany {
  page: number;
  id?: number;
}
 */
