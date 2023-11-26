import { wsConnectionError, wsGetMessage, wsConnectionClose, wsConnectionOpen, wsConnecting} from "../actions/ordersActions"
import { WebsocketStatus } from "../../utils/wsStatus";
import { TOrder } from "../types/types";
import { createReducer } from '@reduxjs/toolkit'

type State = {
    status: string
    message: TOrder[];
    error: string | null;
    total: number | null;
    totalToday: number | null
}

const initialState: State = {
    status: WebsocketStatus.OFFLINE,
    message: [],
    error: '',
    total: null,
    totalToday: null,
}

export const ordersReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(wsConnecting, state => {
            state.status = WebsocketStatus.CONNECTING;
        })
      .addCase(wsConnectionOpen, state => {
          state.status = WebsocketStatus.ONLINE;
          state.error = '';
      })
      .addCase(wsConnectionClose, state => {
          state.status = WebsocketStatus.OFFLINE;
      })
      .addCase(wsConnectionError, (state, action) => {
          state.error = action.payload;
      })
      .addCase(wsGetMessage, (state, action) => {
          state.message = action.payload.orders;
          state.total = action.payload.total;
          state.totalToday = action.payload.totalToday;
      });
  });

// export const ordersReducer = (store = initialState, action: TOrderActions) => {
//     switch (action.type) {
//         case WS_CONNECTING: {
//             return {
//                 ...store, status: WebsocketStatus.CONNECTING,
//             }
//         }

//         case WS_CONNECTION_OPEN: {
//             return {
//                 ...store, status: WebsocketStatus.ONLINE, error: ''
//             }
//         }

//         case WS_CONNECTION_CLOSE: {
//                     return {
//                         ...store, status: WebsocketStatus.OFFLINE,
//                     }
//                 }

//         case WS_CONNECTION_ERROR: {
//             return {
//                 ...store, error: action.payload
//             }
//         }

//         case WS_GET_MESSAGE: {
//             return {
//                 ...store, message: action.payload.orders,
//             }
//         }

//         default: {
//             return store
//         }
//     }
// }