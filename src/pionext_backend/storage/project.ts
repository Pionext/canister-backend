import { StableBTreeMap } from "azle";

type Material = {
  title: string;
  url: string;
  type: "PDF" | "Video" | "Other" | "Website";
};

export type Credit = {
  id: string;
  projectId: string;
  symbol: string;
  name: string;
  targetPrice: number;
  currentSupply: number;
  maxSupply: number;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  launchDate: string;
  status: "Active" | "Inactive" | "Upcoming";
  userId: string;
  targetRaise: number;
  creditSymbol: string;
  materials: Material[];
  credits: Credit[];
  maxSupply: number;
};

export const projects = StableBTreeMap<string, Project>(0);

export const getProject = (id: string) => {
  return projects.get(id);
};
