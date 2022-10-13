import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {orderAPI} from "../services/orderService";
import orderSearchReducer from "../store/reducers/orderSearchSlice";


const rootReducer = combineReducers({
  [orderAPI.reducerPath]: orderAPI.reducer,
  orderSearchReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(orderAPI.middleware)
  })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];