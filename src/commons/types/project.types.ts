export interface FirestoreTimestamp {
  nanoseconds: number;
  seconds: number;
}

export interface ProjectModel {
  name: string;
  _id: string;
  description?: string;
  categories: CategoryModel[];
  createdAt?: FirestoreTimestamp;
  updatedAt?: FirestoreTimestamp | undefined;
}

export interface ProjectMonthlyDataModel {
  _id?: string;
  projectId: string;
  currentMonth: number;
  currentYear: number;
  categories: MonthlyDataCategories[];
  // slug: string;
}

interface MonthlyDataSubcategories {
  name: string;
  value: number;
}

export interface MonthlyDataCategories {
  name: string;
  subcategories: MonthlyDataSubcategories[];
}

export interface SubCategoryModel {
  name: string;
}

export interface CategoryModel {
  name: string;
  subcategories: SubCategoryModel[];
}

export interface ProjectDataFormModel {
  categories: CategoryModel[];
  month: number;
}
