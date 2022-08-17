import {
  QueryKey,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

export interface Profile {
  user: number;
  tokens: number;
}

export interface User {
  pk: number;
  username: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  profile: Profile;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

export interface Tag {
  name: string;
}

export interface Market {
  id: number;
  prompt: string;
  description: string;
  tags: Tag[];
  projectedEnd?: Date;
}

export type MarketFormData = Omit<Market, "id">;

export interface Contract {
  id: number;
  market: number;
  name: string;
  latestYesPrice: number;
  latestPriceMovement: number;
  bestBuyYes: number;
  bestSellYes: number;
}

export type ContractFormData = Pick<Contract, "name">;

export type MarketDetailFormData = MarketFormData & {
  contracts: ContractFormData[];
};

export interface Offer {
  id: number;
  user: number;
  contract: number;
  quantity: number;
  price: number;
  contractType: "Y" | "N";
  offerType: "B" | "S";
}

export type OfferFormData = Omit<Offer, "id">;

export interface UserProfile {
  id: number;
  user: number;
  tokens: number;
}

export interface Investment {
  id: number;
  user: number;
  contract: number;
  quantity: number;
  purchasePrice: number;
  purchaseTimestamp: Date;
}

export interface Portfolio {
  user: number;
  pendingOffers: Offer[];
  currentInvestments: Investment[];
}

export type AddParams<TParams extends [...args: any], TFunc extends (...args: any) => any> = (
  ...args: [...TParams, ...Parameters<TFunc>]
) => ReturnType<TFunc>;

export type QueryHook<TData, TParams extends [...args: any] = [], TError = Error> = AddParams<
  TParams,
  (options?: UseQueryOptions<TData, TError>) => UseQueryResult<TData, TError>
>;

export type MutationHook<
  TData,
  TVariables,
  TParams extends [...args: any] = [],
  TError = Error,
> = AddParams<
  TParams,
  (
    options?: UseMutationOptions<TData, TError, TVariables>,
  ) => UseMutationResult<TData, TError, TVariables>
>;
