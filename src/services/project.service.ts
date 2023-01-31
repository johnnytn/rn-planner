// import { api } from "./api.service";
import { db } from "../../src/fireBaseConfig";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  limit,
} from "firebase/firestore";
import {
  ProjectModel,
  ProjectMonthlyDataModel,
} from "commons/types/project.types";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";

import { getProjectDataId } from "commons/utils/formatter";

const PROJECT_DB = "project";
const PROJECT_DATA_DB = "project_data";
// const q = query(collection(db, MODULE_NAME), where("capital", "==", true));

const projectDbRef = collection(db, PROJECT_DB);
const projectRef = query(collection(db, PROJECT_DB));
// TODO: add mutation after create/update?
export const useProjects = () =>
  useFirestoreQueryData([PROJECT_DB], projectRef, {
    idField: "_id",
  });

// TODO: findout how to query for id
/* export const useProjectDataById = (
  projectId: string | undefined,
  currentMonth: number,
  currentYear: number
) =>
  useFirestoreQueryData(
    [PROJECT_DATA_DB],
    query(
      collection(db, PROJECT_DATA_DB),
      where("projectId", "==", projectId),
      where("currentMonth", "==", currentMonth),
      where("currentYear", "==", currentYear),
      limit(1)
    ),
    {  subscribe: true, idField: "_id" }
  ); */

export default class ProjectService {
  static async getMany(): Promise<ProjectModel[]> {
    const querySnapshot = await getDocs(projectDbRef);
    const data: ProjectModel[] = [];
    querySnapshot.forEach((doc) => {
      if (doc.id) {
        const pro = {
          ...doc.data(),
          _id: doc.id,
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
  static async update(id: string, payload: ProjectUpdateRequest) {
    try {
      await updateDoc(doc(db, PROJECT_DB, id), payload);
      console.log("Document has been updated successfully");
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
        payload._id ||
        getProjectDataId(
          payload.projectId,
          payload.currentMonth,
          payload.currentYear
        );
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
    console.log({ data });
    return data;
  }
}

export interface ProjectCreateRequest {}
interface ProjectUpdateRequest {}
