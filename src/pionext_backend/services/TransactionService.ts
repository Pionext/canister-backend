import { DATABASE, Entities, TransactionSchema } from "../storage/store";

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

export class TransactionService {
  static createTransaction(
    newTransaction: TransactionSchema
  ): TransactionSchema {
    const currentTransactions =
      DATABASE.get(Entities.TRANSACTION) || ([] as TransactionSchema[]);

    DATABASE.insert(Entities.TRANSACTION, [
      ...currentTransactions,
      newTransaction,
    ]);

    return newTransaction;
  }

  static getAllTransactions(
    pagination: PaginationParams
  ): PaginatedResponse<TransactionSchema> {
    const { page = 1, limit = 15 } = pagination;

    const allTransactions =
      DATABASE.get(Entities.TRANSACTION) || ([] as TransactionSchema[]);

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedItems = allTransactions
      .reverse()
      .slice(startIndex, endIndex);

    const totalPages = Math.ceil(allTransactions.length / limit);

    return {
      items: paginatedItems,
      total: allTransactions.length,
      page,
      limit,
      totalPages,
    };
  }
}
