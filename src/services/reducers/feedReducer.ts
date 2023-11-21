import { wsConnectionError, wsGetMessage, wsConnectionClose, wsConnectionOpen, wsConnecting } from "../actions/feedActions"
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

export const feedReducer = createReducer(initialState, (builder) => {
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