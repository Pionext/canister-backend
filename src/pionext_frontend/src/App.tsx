import { useEffect, useState } from "react";
import { Activity, Clock, Hash, User, DollarSign } from "lucide-react";
import { fetchTransactions } from "./lib/getTransaction";

interface Transaction {
  id: string;
  userId: string;
  amount: number;
  timestamp: string;
  type: "buy" | "sell" | "purchase";
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentPrice] = useState(0.7168);

  useEffect(() => {
    const interval = setInterval(() => {
      (async () => {
        try {
          const transactions = await fetchTransactions();
          setTransactions(transactions);
        } catch (error) {
          console.error("Error fetching transactions:", error);
        }
      })();
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const badgeColor = (type: string, isPionext?: boolean) => {
    const baseColor = isPionext ? {
      buy: "bg-purple-50 text-purple-600",
      sell: "bg-indigo-50 text-indigo-600",
      purchase: "bg-pink-50 text-pink-600"
    } : {
      buy: "bg-green-50 text-green-600",
      sell: "bg-blue-50 text-blue-600",
      purchase: "bg-yellow-50 text-yellow-600"
    };

    return baseColor[type as keyof typeof baseColor] || "bg-gray-50";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 p-4 sticky top-0 z-10 bg-white/95 backdrop-blur-sm">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Activity className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">PIONEXT</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 font-medium">
                {currentPrice} USD
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-sm text-blue-600">JD</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-8">
        {/* Transactions Panel */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Credit Trading Activity
            </h2>
            <div className="flex items-center space-x-2 text-sm text-blue-600">
              <Clock className="w-4 h-4" />
              <span>Auto-updating every 9s</span>
            </div>
          </div>

          <div className="space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar overflow-x-hidden">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="group bg-white p-6 rounded-lg transform transition-all duration-500 hover:scale-[1.02] border border-gray-100 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg ${badgeColor(tx.type, 'isPionext' in tx)}`}>
                      <div className="capitalize font-medium text-sm">
                        {tx.type} {('isPionext' in tx) ? 'Pionext' : ''} Credits
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <p className="text-sm font-mono text-gray-600">
                          {tx.userId}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-lg font-bold text-blue-600">
                          {tx.amount.toLocaleString()} Credits
                        </p>
                        <p className="text-sm text-gray-500">
                          ≈ ${(tx.amount * currentPrice).toFixed(2)} USD
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>
                          {new Date(tx.timestamp).toLocaleTimeString()}
                        </span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                          <Hash className="w-4 h-4" />
                          <span>{tx.id}</span>
                        </span>
                        {'isPionext' in tx && (
                          <>
                            <span>•</span>
                            <span className="text-purple-600 font-medium">Pionext</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 hidden group-hover:block">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Transaction Type:</span>
                      <p className="font-medium text-gray-900 capitalize">
                        {tx.type} {('isPionext' in tx) ? 'Pionext' : ''} Credits
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Full Timestamp:</span>
                      <p className="font-mono text-gray-900">
                        {new Date(tx.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
