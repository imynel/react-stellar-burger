import { Action, configureStore } from "@reduxjs/toolkit";
import { socketMiddleware } from "./middleware";
import { rootReducer } from "./reducers/index"; 

import { wsConnection as feedConnect, 
        wsDisconnect as feedWsDisconnect, 
        wsConnectionOpen as feedWsOpen,
        wsConnectionClose as feedWsClose, 
        wsConnectionError as feedWsError, 
        wsGetMessage as feedWsMessage, 
        wsConnecting as feedWsConnecting
} from "./actions/feedActions"; 

import { wsConnection as ordersConnect, 
    wsDisconnect as ordersWsDisconnect, 
    wsConnectionOpen as ordersWsOpen, 
    wsConnectionClose as ordersWsClose, 
    wsConnectionError as ordersWsError, 
    wsGetMessage as ordersWsMessage, 
    wsConnecting as ordersWsConnecting
} from "./actions/ordersActions"; 
import { TFeed } from "./types/types";

export type TMiddlewareActions = ({
    wsConnection: Action
    wsDisconnect: Action
    wsConnectionOpen: Action
    wsConnectionClose: Action
    wsConnectionError(error: string): Action
    wsGetMessage(message: TFeed): Action
    wsConnecting: Action
  });

const feedMiddleWare = socketMiddleware({
    wsConnection: feedConnect,
    wsDisconnect: feedWsDisconnect,
    wsConnectionOpen: feedWsOpen,
    wsConnectionClose: feedWsClose,
    wsConnectionError: feedWsError,
    wsGetMessage: feedWsMessage,
    wsConnecting: feedWsConnecting,
} as unknown as TMiddlewareActions)

const ordersMiddleWare = socketMiddleware({
    wsConnection: ordersConnect,
    wsDisconnect: ordersWsDisconnect,
    wsConnectionOpen: ordersWsOpen,
    wsConnectionClose: ordersWsClose,
    wsConnectionError: ordersWsError,
    wsGetMessage: ordersWsMessage,
    wsConnecting: ordersWsConnecting,
} as unknown as TMiddlewareActions)

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(feedMiddleWare, ordersMiddleWare)
})