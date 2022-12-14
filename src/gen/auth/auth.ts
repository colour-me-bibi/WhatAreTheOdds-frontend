/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * Your Project API
 * Your project description
 * OpenAPI spec version: 1.0.0
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import {
  useQuery,
  useMutation
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import type {
  Token,
  Login,
  RestAuthDetail,
  PasswordChange,
  PasswordReset,
  PasswordResetConfirm,
  Register,
  ResendEmailVerification,
  VerifyEmail,
  UserDetails,
  PatchedUserDetails
} from '.././model'


/**
 * Check the credentials and return the REST Token
if the credentials are valid and authenticated.
Calls Django Auth login method to register User ID
in Django session framework

Accept the following POST parameters: username, password
Return the REST Framework Token Object's key.
 */
export const authLoginCreate = (
    login: Login, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Token>> => {
    return axios.post(
      `/api/auth/login/`,
      login,options
    );
  }



    export type AuthLoginCreateMutationResult = NonNullable<Awaited<ReturnType<typeof authLoginCreate>>>
    export type AuthLoginCreateMutationBody = Login
    export type AuthLoginCreateMutationError = AxiosError<unknown>

    export const useAuthLoginCreate = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authLoginCreate>>, TError,{data: Login}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authLoginCreate>>, {data: Login}> = (props) => {
          const {data} = props ?? {};

          return  authLoginCreate(data,axiosOptions)
        }

      return useMutation<Awaited<ReturnType<typeof authLoginCreate>>, TError, {data: Login}, TContext>(mutationFn, mutationOptions)
    }
    /**
 * Calls Django logout method and delete the Token object
assigned to the current User object.

Accepts/Returns nothing.
 */
export const authLogoutCreate = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<RestAuthDetail>> => {
    return axios.post(
      `/api/auth/logout/`,undefined,options
    );
  }



    export type AuthLogoutCreateMutationResult = NonNullable<Awaited<ReturnType<typeof authLogoutCreate>>>
    
    export type AuthLogoutCreateMutationError = AxiosError<unknown>

    export const useAuthLogoutCreate = <TError = AxiosError<unknown>,
    TVariables = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authLogoutCreate>>, TError,TVariables, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authLogoutCreate>>, TVariables> = () => {
          

          return  authLogoutCreate(axiosOptions)
        }

      return useMutation<Awaited<ReturnType<typeof authLogoutCreate>>, TError, TVariables, TContext>(mutationFn, mutationOptions)
    }
    /**
 * Calls Django Auth SetPasswordForm save method.

Accepts the following POST parameters: new_password1, new_password2
Returns the success/fail message.
 */
export const authPasswordChangeCreate = (
    passwordChange: PasswordChange, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<RestAuthDetail>> => {
    return axios.post(
      `/api/auth/password/change/`,
      passwordChange,options
    );
  }



    export type AuthPasswordChangeCreateMutationResult = NonNullable<Awaited<ReturnType<typeof authPasswordChangeCreate>>>
    export type AuthPasswordChangeCreateMutationBody = PasswordChange
    export type AuthPasswordChangeCreateMutationError = AxiosError<unknown>

    export const useAuthPasswordChangeCreate = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authPasswordChangeCreate>>, TError,{data: PasswordChange}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authPasswordChangeCreate>>, {data: PasswordChange}> = (props) => {
          const {data} = props ?? {};

          return  authPasswordChangeCreate(data,axiosOptions)
        }

      return useMutation<Awaited<ReturnType<typeof authPasswordChangeCreate>>, TError, {data: PasswordChange}, TContext>(mutationFn, mutationOptions)
    }
    /**
 * Calls Django Auth PasswordResetForm save method.

Accepts the following POST parameters: email
Returns the success/fail message.
 */
export const authPasswordResetCreate = (
    passwordReset: PasswordReset, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<RestAuthDetail>> => {
    return axios.post(
      `/api/auth/password/reset/`,
      passwordReset,options
    );
  }



    export type AuthPasswordResetCreateMutationResult = NonNullable<Awaited<ReturnType<typeof authPasswordResetCreate>>>
    export type AuthPasswordResetCreateMutationBody = PasswordReset
    export type AuthPasswordResetCreateMutationError = AxiosError<unknown>

    export const useAuthPasswordResetCreate = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authPasswordResetCreate>>, TError,{data: PasswordReset}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authPasswordResetCreate>>, {data: PasswordReset}> = (props) => {
          const {data} = props ?? {};

          return  authPasswordResetCreate(data,axiosOptions)
        }

      return useMutation<Awaited<ReturnType<typeof authPasswordResetCreate>>, TError, {data: PasswordReset}, TContext>(mutationFn, mutationOptions)
    }
    /**
 * Password reset e-mail link is confirmed, therefore
this resets the user's password.

Accepts the following POST parameters: token, uid,
    new_password1, new_password2
Returns the success/fail message.
 */
export const authPasswordResetConfirmCreate = (
    passwordResetConfirm: PasswordResetConfirm, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<RestAuthDetail>> => {
    return axios.post(
      `/api/auth/password/reset/confirm/`,
      passwordResetConfirm,options
    );
  }



    export type AuthPasswordResetConfirmCreateMutationResult = NonNullable<Awaited<ReturnType<typeof authPasswordResetConfirmCreate>>>
    export type AuthPasswordResetConfirmCreateMutationBody = PasswordResetConfirm
    export type AuthPasswordResetConfirmCreateMutationError = AxiosError<unknown>

    export const useAuthPasswordResetConfirmCreate = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authPasswordResetConfirmCreate>>, TError,{data: PasswordResetConfirm}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authPasswordResetConfirmCreate>>, {data: PasswordResetConfirm}> = (props) => {
          const {data} = props ?? {};

          return  authPasswordResetConfirmCreate(data,axiosOptions)
        }

      return useMutation<Awaited<ReturnType<typeof authPasswordResetConfirmCreate>>, TError, {data: PasswordResetConfirm}, TContext>(mutationFn, mutationOptions)
    }
    export const authRegistrationCreate = (
    register: Register, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Token>> => {
    return axios.post(
      `/api/auth/registration/`,
      register,options
    );
  }



    export type AuthRegistrationCreateMutationResult = NonNullable<Awaited<ReturnType<typeof authRegistrationCreate>>>
    export type AuthRegistrationCreateMutationBody = Register
    export type AuthRegistrationCreateMutationError = AxiosError<unknown>

    export const useAuthRegistrationCreate = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authRegistrationCreate>>, TError,{data: Register}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authRegistrationCreate>>, {data: Register}> = (props) => {
          const {data} = props ?? {};

          return  authRegistrationCreate(data,axiosOptions)
        }

      return useMutation<Awaited<ReturnType<typeof authRegistrationCreate>>, TError, {data: Register}, TContext>(mutationFn, mutationOptions)
    }
    export const authRegistrationResendEmailCreate = (
    resendEmailVerification: ResendEmailVerification, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<RestAuthDetail>> => {
    return axios.post(
      `/api/auth/registration/resend-email/`,
      resendEmailVerification,options
    );
  }



    export type AuthRegistrationResendEmailCreateMutationResult = NonNullable<Awaited<ReturnType<typeof authRegistrationResendEmailCreate>>>
    export type AuthRegistrationResendEmailCreateMutationBody = ResendEmailVerification
    export type AuthRegistrationResendEmailCreateMutationError = AxiosError<unknown>

    export const useAuthRegistrationResendEmailCreate = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authRegistrationResendEmailCreate>>, TError,{data: ResendEmailVerification}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authRegistrationResendEmailCreate>>, {data: ResendEmailVerification}> = (props) => {
          const {data} = props ?? {};

          return  authRegistrationResendEmailCreate(data,axiosOptions)
        }

      return useMutation<Awaited<ReturnType<typeof authRegistrationResendEmailCreate>>, TError, {data: ResendEmailVerification}, TContext>(mutationFn, mutationOptions)
    }
    export const authRegistrationVerifyEmailCreate = (
    verifyEmail: VerifyEmail, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<RestAuthDetail>> => {
    return axios.post(
      `/api/auth/registration/verify-email/`,
      verifyEmail,options
    );
  }



    export type AuthRegistrationVerifyEmailCreateMutationResult = NonNullable<Awaited<ReturnType<typeof authRegistrationVerifyEmailCreate>>>
    export type AuthRegistrationVerifyEmailCreateMutationBody = VerifyEmail
    export type AuthRegistrationVerifyEmailCreateMutationError = AxiosError<unknown>

    export const useAuthRegistrationVerifyEmailCreate = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authRegistrationVerifyEmailCreate>>, TError,{data: VerifyEmail}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authRegistrationVerifyEmailCreate>>, {data: VerifyEmail}> = (props) => {
          const {data} = props ?? {};

          return  authRegistrationVerifyEmailCreate(data,axiosOptions)
        }

      return useMutation<Awaited<ReturnType<typeof authRegistrationVerifyEmailCreate>>, TError, {data: VerifyEmail}, TContext>(mutationFn, mutationOptions)
    }
    /**
 * Reads and updates UserModel fields
Accepts GET, PUT, PATCH methods.

Default accepted fields: username, first_name, last_name
Default display fields: pk, username, email, first_name, last_name
Read-only fields: pk, email

Returns UserModel fields.
 */
export const authUserRetrieve = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UserDetails>> => {
    return axios.get(
      `/api/auth/user/`,options
    );
  }


export const getAuthUserRetrieveQueryKey = () => [`/api/auth/user/`];

    
export type AuthUserRetrieveQueryResult = NonNullable<Awaited<ReturnType<typeof authUserRetrieve>>>
export type AuthUserRetrieveQueryError = AxiosError<unknown>

export const useAuthUserRetrieve = <TData = Awaited<ReturnType<typeof authUserRetrieve>>, TError = AxiosError<unknown>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof authUserRetrieve>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getAuthUserRetrieveQueryKey();

  

  const queryFn: QueryFunction<Awaited<ReturnType<typeof authUserRetrieve>>> = ({ signal }) => authUserRetrieve({ signal, ...axiosOptions });

  const query = useQuery<Awaited<ReturnType<typeof authUserRetrieve>>, TError, TData>(queryKey, queryFn, queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}

/**
 * Reads and updates UserModel fields
Accepts GET, PUT, PATCH methods.

Default accepted fields: username, first_name, last_name
Default display fields: pk, username, email, first_name, last_name
Read-only fields: pk, email

Returns UserModel fields.
 */
export const authUserUpdate = (
    userDetails: UserDetails, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UserDetails>> => {
    return axios.put(
      `/api/auth/user/`,
      userDetails,options
    );
  }



    export type AuthUserUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof authUserUpdate>>>
    export type AuthUserUpdateMutationBody = UserDetails
    export type AuthUserUpdateMutationError = AxiosError<unknown>

    export const useAuthUserUpdate = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authUserUpdate>>, TError,{data: UserDetails}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authUserUpdate>>, {data: UserDetails}> = (props) => {
          const {data} = props ?? {};

          return  authUserUpdate(data,axiosOptions)
        }

      return useMutation<Awaited<ReturnType<typeof authUserUpdate>>, TError, {data: UserDetails}, TContext>(mutationFn, mutationOptions)
    }
    /**
 * Reads and updates UserModel fields
Accepts GET, PUT, PATCH methods.

Default accepted fields: username, first_name, last_name
Default display fields: pk, username, email, first_name, last_name
Read-only fields: pk, email

Returns UserModel fields.
 */
export const authUserPartialUpdate = (
    patchedUserDetails: PatchedUserDetails, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UserDetails>> => {
    return axios.patch(
      `/api/auth/user/`,
      patchedUserDetails,options
    );
  }



    export type AuthUserPartialUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof authUserPartialUpdate>>>
    export type AuthUserPartialUpdateMutationBody = PatchedUserDetails
    export type AuthUserPartialUpdateMutationError = AxiosError<unknown>

    export const useAuthUserPartialUpdate = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authUserPartialUpdate>>, TError,{data: PatchedUserDetails}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authUserPartialUpdate>>, {data: PatchedUserDetails}> = (props) => {
          const {data} = props ?? {};

          return  authUserPartialUpdate(data,axiosOptions)
        }

      return useMutation<Awaited<ReturnType<typeof authUserPartialUpdate>>, TError, {data: PatchedUserDetails}, TContext>(mutationFn, mutationOptions)
    }
    