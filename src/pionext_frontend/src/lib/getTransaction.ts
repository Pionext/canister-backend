export const fetchTransactions = async () => {
  const [regularResponse, pionextResponse] = await Promise.all([
    fetch(`${import.meta.env.VITE_CANISTER_API_HOST}/transactions/credits`),
    fetch(`${import.meta.env.VITE_CANISTER_API_HOST}/transactions/pionext`)
  ]);

  const regularData = await regularResponse.json();
  const pionextData = await pionextResponse.json();

  // Combine and sort transactions by timestamp
  const allTransactions = [
    ...regularData.transaction.items,
    ...pionextData.transaction.items
  ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  return allTransactions;
};


