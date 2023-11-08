export const WS_CONNECTION = 'WS_CONNECTION'
export const WS_DISCONNECT = 'WS_DISCONNECT'
export const WS_CONNECTION_OPEN = 'WS_CONNECTION_OPEN'; 
export const WS_CONNECTION_CLOSE = 'WS_CONNECTION_CLOSE';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE';
export const WS_CONNECTING = 'WS_CONNECTING'

// экшен для открытия соединения
export const wsConnection = (url) => {
  return {
    type: WS_CONNECTION,
    payload: url
  };
};

// экшен для закрытия  соединения
export const wsDisconnect = () => {
  return {
    type: WS_DISCONNECT
  }
}

// екшен если соединение открылось
export const wsConnectionOpen = () => {
  return {
    type: WS_CONNECTION_OPEN
  };
};

// экшен если соединение закрылось
export const wsConnectionClose = () => {
  return {
    type: WS_CONNECTION_CLOSE
  };
};

// экшен для ошибки
export const wsConnectionError = () => {
  return {
    type: WS_CONNECTION_ERROR
  };
};

  export const wsGetMessage = message => {
    return {
      type: WS_GET_MESSAGE,
      payload: message
    };
  };
  
  export const wsSendMessage = message => {
    return {
      type: WS_SEND_MESSAGE,
      payload: message
    };
  };

  export const wsConnecting = () => {
    return {
      type: WS_CONNECTING,
    }
  }
  