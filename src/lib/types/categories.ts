// export type Category = {categories:categories[]}


export type CategoriesData = {
    id: string,
    name: string,
    description: string,
    categoryId: string,
    images: string[],
    subCategoryId: string,
    brandId: string,
    price: number,
    variantId: string,
    unit: string,
    unitSize: string,
    stock: number,
    createdAt: string,
    updatedAt: string,
    category: {
        id: string,
        name: string,
        image: string
    }
}

export type Categories = {
    id: string,
    name: string,
    image: any,
    createdAt:string;
    description:string;
    updatedAt:string;
    subCategories: {
        id: string,
        name: string,
        image: string,
        subCategoryProductStock: number,
        brands: {
            id: string,
            name: string,
            individualBrandStock: number
        }[]
    }[];
}

export type brands = {
    id: string,
    name: string,
    image: any,
    createdAt:string,
    updatedAt:string
}


export type ProductVariant = {
    id: string;
    productId: string;
    unit: string;
    unitSize: number;
    price: number;
    stock: number;
    createdAt: string; // ISO date string
    updatedAt: string;
    deleted: boolean;
};

export type Product = {
    id: string;
    name: string;
    description: string;
    categoryId: string;
    subCategoryId: string;
    brandId: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
    deleted: boolean;
    variants: ProductVariant[];
};

export type CategoryProduct = {
    products: Product[]
}

export type GetProductsParams = {
    categoryId?: string | null;
    subCategoryId?: string;
    brandId?: string;
};

export interface SubCategory {
  id: string;
  name: string;
  categoryId: string;
  image:any;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
}