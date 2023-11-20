import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../store';
import { TConstructorActions } from '../actions/constructor';
import { TFeedActions } from '../actions/feedActions';
import { TIngredientsActions } from '../actions/ingredients';
import { TModalActions } from '../actions/modal';
import { TOrdersActions } from '../actions/ordersActions';
import { TPasswordActions } from '../actions/password-reset';
import { TRegisterActions } from '../actions/register';
import { rootReducer } from '../reducers';


type TApplicationActions = TConstructorActions 
    | TFeedActions 
    | TIngredientsActions 
    | TModalActions 
    | TOrdersActions 
    | TPasswordActions 
    | TRegisterActions


export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TApplicationActions>>;
export type AppDispatch = typeof store.dispatch;
