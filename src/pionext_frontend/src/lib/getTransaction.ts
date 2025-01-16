export const fetchTransactions = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_CANISTER_API_HOST}/transactions`
  );
  const data = await response.json();
  return data.transaction.items;
};
