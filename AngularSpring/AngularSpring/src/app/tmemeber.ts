import { Projecttable } from "./projecttable";
import { Task } from 'zone.js/lib/zone-impl';


export interface Tmemeber {
    id?:number;
    name:string;
    email:string;
    password:string;
    project?:Projecttable[];
    task?:Task[];
}
