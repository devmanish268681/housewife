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
    image: string,
    subCategory: {
        id: string,
        name: string
    }[];
    brands: {
        id: string,
        name: string
    }[]
}

export type brands = {
    id: string,
    name: string,
    image: string
}