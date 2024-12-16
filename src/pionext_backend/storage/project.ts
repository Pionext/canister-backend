import { StableBTreeMap } from "azle";

type Material = {
  title: string;
  url: string;
  type: "PDF" | "Video" | "Other";
};

export type Project = {
  id: string;
  name: string;
  description: string;
  launchDate: string;
  status: "Active" | "Inactive" | "Upcoming";
  userId: string;
  materials: Material[];
};

export const projects = StableBTreeMap<string, Project>(0);
