import { DATABASE, Entities, TransactionSchema } from "../storage/store";
import { PaginatedResponse, PaginationParams } from "../types";



export class TransactionService {
  static createTransaction(
    newTransaction: TransactionSchema
  ): TransactionSchema {
    const currentTransactions =
      DATABASE.get(Entities.CREDIT_TRANSACTION) || ([] as TransactionSchema[]);

    DATABASE.insert(Entities.CREDIT_TRANSACTION, [
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
      DATABASE.get(Entities.CREDIT_TRANSACTION) || ([] as TransactionSchema[]);

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
