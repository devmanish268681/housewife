export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type CheckoutModalProps = {
  isOpen: boolean;
  offerId?:string;
  onClose: () => void;
};