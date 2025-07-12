// export type Category = {categories:categories[]}


export type CategoriesData = {
    id: string,
    name: string,
    description: string,
    price: number,
    stock: number,
    categoryId: string,
    images: string[],
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
    }[]
}

export type brands = {
    id: string,
    name: string,
    image: string
}