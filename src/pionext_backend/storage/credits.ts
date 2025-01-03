import { StableBTreeMap } from "azle";

interface Credit {
  id: string;
  projectId: string;
  symbol: string;
  name: string;
  targetPrice: number;
  currentSupply: number;
  maxSupply: number;
}

export const credits = StableBTreeMap<string, Credit>(0);
