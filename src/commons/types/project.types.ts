export interface ProjectModel {
  name: string;
  id: string;
  description?: string;
  categories: CategoryModel[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProjectMonthlyDataModel {
  id?: string;
  projectId: string;
  currentMonth: number;
  categories: MonthlyDataCategories[];
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
