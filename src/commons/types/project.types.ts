export interface ProjectModel {
  name: string;
  id: string;
  description?: string;
  categories: CategoryModel[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SubCategoryModel {
  name: string;
}

export interface CategoryModel {
  name: string;
  subcategories: SubCategoryModel[];
}
