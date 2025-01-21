import { userStore } from "../storage/users";

export class UserService {
  static getUserPionextBalance(userId: string) {
    const user = userStore.get(userId);
    return user?.pionextBalance;
  }

  static updateUserPionextBalance(userId: string, newBalance: number) {
    const user = userStore.get(userId);
    if (!user) {
      if (userId) {
        userStore.insert(userId, {
          id: userId,
          pionextBalance: {
            balance: 0,
            lastUpdated: new Date().toISOString(),
          },
        });
      }
      return userStore.get(userId);
    }

    userStore.insert(userId, {
      ...user,
      pionextBalance: {
        balance: newBalance,
        lastUpdated: new Date().toISOString(),
      },
    });

    return userStore.get(userId);
  }
}
