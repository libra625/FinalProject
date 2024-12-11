import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const API_BASE_URL = 'http://localhost:3000/'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products`,
        }),
        getProductById: builder.query({
            query: (productId = 1) => `products/${productId}`,
        }),
        getAllCategories: builder.query({
            query: () => `categories`,
        }),
        getAllProductsByCategory: builder.query({
            query: ({category, limit}) => `/products/category/${category}?limit=${limit}`
        }),
        getCategoryById: builder.query({
            query: (categoryId = 1) => `categories/${categoryId}`,
        }),
        getUserByEmailAndPassword: builder.mutation({
            query: ({email, password}) => ({
                url: 'users/login',
                method: 'POST',
                body: {email, password},
            }),
        }),
        postUser: builder.mutation({
            query: (newUser) => ({
                url: 'users/register',
                method: 'POST',
                body: newUser,
            }),
        }),
        getAllUsers: builder.query({
            query: () => `users`,
        }),
    })
})
export const {
    useGetAllProductsQuery,
    useLazyGetAllProductsQuery,
    useGetProductByIdQuery,
    useLazyGetProductByIdQuery,
    useGetAllCategoriesQuery,
    useGetAllProductsByCategoryQuery,
    useLazyGetAllProductsByCategoryQuery,
    useLazyGetAllCategoriesQuery,
    useGetCategoryByIdQuery,
    useLazyGetCategoryByIdQuery,
    useGetUserByEmailAndPasswordMutation,
    usePostUserMutation,
    useGetAllUsersQuery
} = productsApi;
