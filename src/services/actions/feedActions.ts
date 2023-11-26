
import { createAction } from "@reduxjs/toolkit";
import { TFeed } from "../types/types";

export const wsConnection = createAction<string>('feed/conenct');
export const wsDisconnect = createAction('feed/disconnect');
export const wsConnecting = createAction('feed/wsConnecting');
export const wsConnectionOpen = createAction('feed/wsOpen');
export const wsConnectionClose = createAction('feed/wsClose');
export const wsGetMessage = createAction<TFeed>('feed/wsMessage');
export const wsConnectionError = createAction<string>('feed/wsError');

export type TFeedActions = 
    | ReturnType<typeof wsConnection>
    | ReturnType<typeof wsDisconnect>
    | ReturnType<typeof wsConnecting>
    | ReturnType<typeof wsConnectionOpen>
    | ReturnType<typeof wsConnectionClose>
    | ReturnType<typeof wsGetMessage>
    | ReturnType<typeof wsConnectionError>;



// import { TFeed, TOrder } from "../types/types";

// export const WS_CONNECTION: 'WS_CONNECTION' = 'WS_CONNECTION';
// export const WS_DISCONNECT: 'WS_DISCONNECT' = 'WS_DISCONNECT';
// export const WS_CONNECTION_OPEN: 'WS_CONNECTION_OPEN' = 'WS_CONNECTION_OPEN'; 
// export const WS_CONNECTION_CLOSE: 'WS_CONNECTION_CLOSE' = 'WS_CONNECTION_CLOSE';
// export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
// export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
// export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';
// export const WS_CONNECTING: 'WS_CONNECTING' = 'WS_CONNECTING';

// export type wsConnectionAction = {
//   readonly type: typeof WS_CONNECTION;
//   readonly payload: string;
// }
// export type wsDisconnectAction = {
//   readonly type: typeof WS_DISCONNECT;
// }
// export type wsConnectionOpenAction = {
//   readonly type: typeof WS_CONNECTION_OPEN;
// }
// export type wsConnectionCloseAction = {
//   readonly type: typeof WS_CONNECTION_CLOSE;
// }
// export type wsConnectionErrorAction = {
//   readonly type: typeof WS_CONNECTION_ERROR;
//   readonly payload: string;
// }
// export type wsGetMessageAction = {
//   readonly type: typeof WS_GET_MESSAGE;
//   readonly payload: TFeed;
// }
// export type wsConnectingAction = {
//   readonly type: typeof WS_CONNECTING;
// }


// export type TfeedActions = wsConnectionAction 
//   | wsDisconnectAction 
//   | wsConnectionOpenAction 
//   | wsConnectionCloseAction 
//   | wsConnectionErrorAction 
//   | wsGetMessageAction 
//   | wsConnectingAction 


// // экшен для открытия соединения
// export const wsConnection = (url: string): wsConnectionAction  => ({
//     type: WS_CONNECTION,
//     payload: url
// });

// // экшен для закрытия  соединения
// export const wsDisconnect = (): wsDisconnectAction => ({
//     type: WS_DISCONNECT
// })

// // екшен если соединение открылось
// export const wsConnectionOpen = (): wsConnectionOpenAction => ({
//     type: WS_CONNECTION_OPEN
// });

// // экшен если соединение закрылось
// export const wsConnectionClose = (): wsConnectionCloseAction => ({
//     type: WS_CONNECTION_CLOSE
// });

// // экшен для ошибки
// export const wsConnectionError = (error: string): wsConnectionErrorAction => ({
//     type: WS_CONNECTION_ERROR,
//     payload: error
// });


//   export const wsGetMessage = (message: TFeed): wsGetMessageAction => ({
//       type: WS_GET_MESSAGE,
//       payload: message
//   });
  
//   export const wsConnecting = (): wsConnectingAction => ({
//       type: WS_CONNECTING,
//   })
  