import { DATABASE, Entities, PionextTransaction } from "../storage/store";
import { PaginatedResponse, PaginationParams } from "../types";

export class PionextTransactionService {
  static createPionextTransaction(transaction: PionextTransaction) {
    const currentTransactions =
      DATABASE.get(Entities.PIONEXT_TRANSACTION) ||
      ([] as PionextTransaction[]);

    DATABASE.insert(Entities.PIONEXT_TRANSACTION, [
      ...currentTransactions,
      transaction,
    ]);
    return transaction;
  }

  static getAllPionextTransactions(
    pagination: PaginationParams
  ): PaginatedResponse<PionextTransaction> {
    const { page = 1, limit = 15 } = pagination;

    const allTransactions =
      DATABASE.get(Entities.PIONEXT_TRANSACTION) ||
      ([] as PionextTransaction[]);

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedItems = allTransactions.slice(startIndex, endIndex);
    const totalPages = Math.ceil(allTransactions.length / limit);

    return {
      items: paginatedItems,
      total: allTransactions.length,
      page,
      limit,
      totalPages,
    };
  }

  static getUserBalance(userId: string) {
    const user = users.get(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user.balance;
  }
}
