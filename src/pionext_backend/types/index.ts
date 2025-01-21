export enum TransactionType {
  SELL = "sell",
  PURCHASE = "purchase",
  BUY = "buy",
}

export type PaginationParams = {
  page?: number;
  limit?: number;
};

export type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};
