import { configureStore } from "@reduxjs/toolkit";
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



const feedMiddleWare = socketMiddleware({
    wsConnection: feedConnect,
    wsDisconnect: feedWsDisconnect,
    wsConnectionOpen: feedWsOpen,
    wsConnectionClose: feedWsClose,
    wsConnectionError: feedWsError,
    wsGetMessage: feedWsMessage,
    wsConnecting: feedWsConnecting,
})

const ordersMiddleWare = socketMiddleware({
    wsConnection: ordersConnect,
    wsDisconnect: ordersWsDisconnect,
    wsConnectionOpen: ordersWsOpen,
    wsConnectionClose: ordersWsClose,
    wsConnectionError: ordersWsError,
    wsGetMessage: ordersWsMessage,
    wsConnecting: ordersWsConnecting,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(feedMiddleWare, ordersMiddleWare)
})