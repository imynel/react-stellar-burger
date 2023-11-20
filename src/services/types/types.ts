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
  key?: string;
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
  order: any;
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
  key: string;
};

export type TDragItem = {
  index: number;
  id: string;
  type: string;
}

export type TUser = {
  email: string | null;
  name: string | null;
} | null