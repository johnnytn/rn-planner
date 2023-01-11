export interface IProject {
  name: string;
  id: string;
  description?: string;
  categories: ICategory[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ISubCategory {
  name: string;
}

export interface ICategory {
  name: string;
  subcategories: ISubCategory[];
}
