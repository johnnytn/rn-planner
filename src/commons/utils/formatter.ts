export const getProjectDataId = (
  projectId: string,
  currentMonth: number | string
) => `${projectId}-${currentMonth}`;
