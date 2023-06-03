import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";
import { SubmitGuarantorsFormQueryModel } from "@/models/Guarantors";
import { secondsToMilliSeconds } from "@/utils";

export const guarantorsApi = createApi({
  reducerPath: "guarantorsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    timeout: secondsToMilliSeconds(30),
  }),
  endpoints: (build) => ({
    submitGuarantorsForm: build.mutation<any, SubmitGuarantorsFormQueryModel>({
      query: ({ body, id }) => ({
        url: `driver/submit-guarantor-form/${id}`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useSubmitGuarantorsFormMutation } = guarantorsApi;
