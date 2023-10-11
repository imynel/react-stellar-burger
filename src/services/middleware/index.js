// socketMiddleware.js
import { Middleware, MiddlewareAPI } from 'redux';

export const socketMiddleware = wsAction => {
    return store => {
        let socket = null;

    return next => action => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const { wsConnection, wsConnectionClosed, wsConnectionError, wsConnectionSuccess, wsGetMessage, wsSendMessage, wsDisconnect, wsConnecting } = wsAction
      
      if (type === wsConnection.type) {
        if(!socket) {
          socket = new WebSocket(action.payload);
          dispatch(wsConnecting())
        }
            // объект класса WebSocket
        
      }
      if (socket) {

                // функция, которая вызывается при открытии сокета
        socket.onopen = () => {
          dispatch(wsConnectionSuccess());
        };

                // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch(wsConnectionError('Error'));
        };

                // функция, которая вызывается при получении события от сервера
        socket.onmessage = event => {
          const { data } = event;
          const parseData = JSON.parse(data)

          dispatch(wsGetMessage(parseData))
        };
                // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch(wsConnectionClosed());
        };

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