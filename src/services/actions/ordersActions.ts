export const WS_CONNECTION: 'WS_CONNECTION' = 'WS_CONNECTION'
export const WS_DISCONNECT: 'WS_DISCONNECT' = 'WS_DISCONNECT'
export const WS_CONNECTION_OPEN: 'WS_CONNECTION_OPEN' = 'WS_CONNECTION_OPEN'; 
export const WS_CONNECTION_CLOSE: 'WS_CONNECTION_CLOSE' = 'WS_CONNECTION_CLOSE';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';
export const WS_CONNECTING: 'WS_CONNECTING' = 'WS_CONNECTING'

type wsConnectionAction = {
  readonly type: typeof WS_CONNECTION;
  readonly payload: string;
}
type wsDisconnectAction = {
  readonly type: typeof WS_DISCONNECT;
}
type wsConnectionOpenAction = {
  readonly type: typeof WS_CONNECTION_OPEN;
}
type wsConnectionCloseAction = {
  readonly type: typeof WS_CONNECTION_CLOSE;
}
type wsConnectionErrorAction = {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: string;
}
type wsGetMessageAction = {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: string;
}
type wsSendMessageAction = {
  readonly type: typeof WS_SEND_MESSAGE;
  readonly payload: string;
}
type wsConnectingAction = {
  readonly type: typeof WS_CONNECTING;
}

export type TOrderActions = wsConnectionAction 
  | wsDisconnectAction 
  | wsConnectionOpenAction 
  | wsConnectionCloseAction 
  | wsConnectionErrorAction 
  | wsGetMessageAction 
  | wsSendMessageAction 
  | wsConnectingAction 

// экшен для открытия соединения
export const wsConnection = (url: string): wsConnectionAction => ({
    type: WS_CONNECTION,
    payload: url
});

// экшен для закрытия  соединения
export const wsDisconnect = (): wsDisconnectAction => ({
    type: WS_DISCONNECT
})

// екшен если соединение открылось
export const wsConnectionOpen = (): wsConnectionOpenAction => ({
    type: WS_CONNECTION_OPEN
});

// экшен если соединение закрылось
export const wsConnectionClose = (): wsConnectionCloseAction => ({
    type: WS_CONNECTION_CLOSE
});

// экшен для ошибки
export const wsConnectionError = (): wsConnectionErrorAction => ({
    type: WS_CONNECTION_ERROR,
    payload: ''
});

  export const wsGetMessage = (message: any): wsGetMessageAction => ({
    type: WS_GET_MESSAGE,
      payload: message
  });
  
  export const wsSendMessage = (message: any): wsSendMessageAction => ({
      type: WS_SEND_MESSAGE,
      payload: message
  });

  export const wsConnecting = (): wsConnectingAction => ({
      type: WS_CONNECTING,
  })
  