export type CartItem = {
    productName: string,
    productId: string,
    price: number,
    unit: string,
    unitSize: string,
    quantity: number,
    variantId: string,
    image: string[]
}

export type CartItems = {
    result: CartItem[]
}