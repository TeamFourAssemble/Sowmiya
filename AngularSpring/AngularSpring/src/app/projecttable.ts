import { Tmemeber } from "./tmemeber";


export interface Projecttable {
    id?: number;
    projectName: string;
    description: string;
    clientName: string;
    startDate: string;
    endDate: string;
    status: string;
    teamMembers?: Tmemeber[];
  }