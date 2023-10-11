export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS'; 
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE';
export const WS_CONNECTION = 'WS_CONNECTION'
export const WS_DISCONNECT = 'WS_DISCONNECT'
export const WS_CONNECTING = 'WS_CONNECTING'


export const wsConnecting = () => {
  return {
    type: WS_CONNECTING
  }
}

export const wsDisconnect = () => {
  return {
    type: WS_DISCONNECT
  }
}

export const wsConnection = () => {
  return {
    type: WS_CONNECTION
  };
};

export const wsConnectionSuccess = () => {
    return {
      type: WS_CONNECTION_SUCCESS
    };
  };
  
  export const wsConnectionError = () => {
    return {
      type: WS_CONNECTION_ERROR
    };
  };
  
  export const wsConnectionClosed = () => {
    return {
      type: WS_CONNECTION_CLOSED
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