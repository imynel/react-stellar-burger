import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../store';
import { TConstructorActions } from '../actions/constructor';
import { TfeedActions } from '../actions/feedActions';
import { TIngredientsActions } from '../actions/ingredients';
import { TModalActions } from '../actions/modal';
import { TOrderActions } from '../actions/ordersActions';
import { TPasswordActions } from '../actions/password-reset';
import { TRegisterActions } from '../actions/register';


type TApplicationActions = TConstructorActions 
    | TfeedActions 
    | TIngredientsActions 
    | TModalActions 
    | TOrderActions 
    | TPasswordActions 
    | TRegisterActions


export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TApplicationActions>>;
export type AppDispatch = typeof store.dispatch;
