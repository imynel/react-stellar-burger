import { TIngredient } from "../types/types";

export const MODAL_OPEN: 'MODAL_OPEN' = 'MODAL_OPEN';
export const MODAL_CLOSE: 'MODAL_CLOSE' = 'MODAL_CLOSE';
export const MODAL_ORDER: 'MODAL_ORDER'  = 'MODAL_ORDER';
export const MODAL_INGREDIENT: 'MODAL_INGREDIENT' = 'MODAL_INGREDIENT';

type modalOpenAction = {
  readonly type: typeof MODAL_OPEN;
  readonly modalType: typeof MODAL_INGREDIENT;
  readonly modalProps: TIngredient;
}

type modalCloseAction = {
  readonly type: typeof MODAL_CLOSE
}

type modalOrderAction = {
  readonly type: typeof MODAL_OPEN
  readonly modalType: typeof MODAL_ORDER;
  readonly modalProps: any 
}

type modalIngredientAction = {
  readonly type: typeof MODAL_INGREDIENT
}

export type TModalActions =  modalOpenAction 
  | modalCloseAction 
  | modalOrderAction 
  | modalIngredientAction

  
export const openIngredientModal = (ingredient: TIngredient) => ({
  type: MODAL_OPEN,
  modalType: MODAL_INGREDIENT,
  modalProps: ingredient
});

export const closeModal = () => ({
  type: MODAL_CLOSE,
});

export const openOrderModal = (order: any) => ({
  type: MODAL_OPEN,
  modalType: MODAL_ORDER,
  modalProps: order
});