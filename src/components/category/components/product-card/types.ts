export type ProductCardProps = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  quantityText?: string;
  image: string;
  stock?: number;
  category?: string;
  variantId?: string;
};