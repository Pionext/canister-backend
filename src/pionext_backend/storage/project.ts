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


export const selectAllProjects = () => {
  const allProjects: Project[] = [];
  for (const key of projects.keys()) {
    const project = projects.get(key);
    if(project){
      allProjects.push(project);
    }
  }
  return allProjects;
}

export const getProject = (id: string) => {
  return projects.get(id);
}

export const deleteProject = (id: string) => {
  return projects.remove(id)
}



