// socketMiddleware.js
export const socketMiddleware = wsAction => {
    return store => {
        let socket = null;

    return next => action => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const { wsConnection, wsDisconnect, wsConnectionOpen, wsConnectionClose, wsConnectionError, wsGetMessage, wsSendMessage,  wsConnecting } = wsAction
      
      if (type === wsConnection().type) {
        console.log(type === wsConnection().type)
        if(!socket) {
          socket = new WebSocket(action.payload);
          // функция, которая вызывается при открытии сокета
          socket.onopen = () => {
            console.log('init')
            dispatch(wsConnectionOpen());
          };
          // функция, которая вызывается при ошибке соединения
          socket.onerror = () => {
            dispatch(wsConnectionError('Error'));
          };
          // функция, которая вызывается при получении события от сервера
          socket.onmessage = event => {
            const { data } = event
            const parseData = JSON.parse(data)
            dispatch(wsGetMessage(parseData))
          };
          // функция, которая вызывается при закрытии соединения
          socket.onclose = () => {
            dispatch(wsConnectionClose());
          };
          dispatch(wsConnecting())
        }
      }
      
      if (socket) {
        if (wsSendMessage && type === wsSendMessage.type) {
          socket.send(JSON.stringify(action.payload));
        }
      
        if (wsDisconnect.type === type) {
          socket.close()
          socket = null
        }
      }

      next(action);
    };
    };
};

