export type TIngredient = {
    _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  uniqueId?: string | undefined;
}

export type TDetails = {
  success: boolean;
  name: string;
  ingredients: string[];
  status: string;
  number: number;
  createdAt: string;
  _id: string;
  price: string;
  order: TOrder;
}

export type TOrder = {
  success: boolean;
  name: string;
  ingredients: string[];
  status: string;
  number: number;
  createdAt: string;
  _id: string;
  price: string;
  order: TDetails;
}

export type TFeed = {
  orders: TOrder[];
  total: number;
  totalToday: number;
}

export type TConstructorItem = {
  ingredient: TIngredient;
  index: number;
  swap (dragIndex: number, hoverIndex: number): void;
};

export type TDragItem = {
  index: number;
  id: string;
  type: string;
}

export type TUser = {
  email: string;
  name: string;
}