import { FirestoreTimestamp } from "commons/types/project.types";

export const getProjectDataId = (
  projectId: string,
  currentMonth: number | string
) => `${projectId}-${currentMonth}`;

export const formatDate = (fbDate: FirestoreTimestamp | undefined) => {
  if (!fbDate) return "";
  const fullDate = new Date(fbDate.seconds * 1000);
  return `${fullDate.getDay()}/${fullDate.getMonth()}/${fullDate.getFullYear()}`;
};
