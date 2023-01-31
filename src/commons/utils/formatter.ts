import { FirestoreTimestamp } from "commons/types/project.types";

export const getProjectDataId = (
  projectId: string | undefined,
  currentMonth: number | string,
  currentYear: number | string
) => `${projectId}-${currentMonth}-${currentYear}`;

export const formatDate = (fbDate: FirestoreTimestamp | undefined) => {
  if (!fbDate) return "";
  const fullDate = new Date(fbDate.seconds * 1000);
  return `${fullDate.getDay()}/${fullDate.getMonth()}/${fullDate.getFullYear()}`;
};
