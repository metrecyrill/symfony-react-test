import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IOrder} from "../models/IOrder";

type SearchQuery = {
  by: string;
  query: string;
}

export const orderAPI = createApi({
  reducerPath: 'orderAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost/api/' }),
  endpoints: (builder) => ({
    getOrders: builder.query<IOrder[], SearchQuery>({
      query: ({by, query}) => ({
        url: 'orders',
        params: {
          by,
          query
        }
      }),
    }),
  }),
})