import { StableBTreeMap } from "azle";


type Material = {
  title: string;
  url: string;
  type: "PDF" | "Video" | "Other" | "Website" | "Other";
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


export type Image = {
  url: string;
  alt: string;
};


export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  links?: {
    title: string;
    url: string;
  }[];
};


export type ProblemSolution = {
  problem: string;
  solution: string;
};


export type KeyFeature = {
  title: string;
  description: string;
};


export type HowItWorks = {
  steps: string[];
};


export type CreditUsage = {
  description: string;
  examples: string[];
};


export type ProjectDetails = {
  problemSolution: ProblemSolution;
  targetAudience: string[];
  keyFeatures: KeyFeature[];
  howItWorks: HowItWorks;
  creditUsage: CreditUsage;
  team: {
    members: TeamMember[];
  };
};

export type Project = {
  id: string;
  name: string;
  description: string;
  image?: Image;
  launchDate: string;
  status: "Active" | "Inactive" | "Upcoming";
  userId: string;
  targetRaise: number;
  creditSymbol: string;
  materials: Material[];
  credits?: Credit[];
  maxSupply: number;
  details?: ProjectDetails;
};


export const projects = StableBTreeMap<string, Project>(0);


export const getProject = (id: string) => {
  return projects.get(id);
};
