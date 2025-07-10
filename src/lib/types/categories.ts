export type Category = {
    id: string,
    name: string,
    image: string
}


export type CategoriesData = {
    id: string,
    name: string,
    description: string,
    price: number,
    stock: number,
    categoryId: string,
    images: string[],
    createdAt:string,
    updatedAt: string,
    category: {
        id: string,
        name: string,
        image: string
    }
}